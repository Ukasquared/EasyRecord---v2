from api.views import app_routes
from api.views.role import role_required
from flask import request, jsonify
from api.auth import Auth
from api.models import storage

# enroll student in course - endpoint
# assign admin for a course - endpoint

auth = Auth()


@app_routes.route('/enroll_student_in_course', methods=["POST"], strict_slashes=False)
@role_required('admin')
def enroll_student():
    """enroll student into
    a course"""
    # request should contain student id and course id
    # we need the to fetch the student using their id, then the course using the course id
    # then we append the course to the student.courses
    # check if user has already been enrolled

    if request.method == "POST":
        data = request.get_json()
        if not data:
            return jsonify({"error": "missing or invalid json file"}), 400
        student_id = data.get("student_id")
        course_id = data.get("course_id")
        # teacher_id = data.get('teacher_id')
        if not student_id or not course_id:
            return jsonify({"error": "missing or invalid json file"}), 400
        try:
            student_name = auth.enroll_student_course(course_id, student_id)
            return jsonify({"message": f"{str(student_name)} successfully registered"}), 200
        except ValueError:
            print('invalid2')
            return jsonify({"error": "Already Registered or Invalid data"}), 404



@app_routes.route('/admin_dashboard', methods=['POST'], strict_slashes=False)
@role_required('admin')
def admin():
    """fetch admin personal information,
    total number of teachers, and
    total number of student"""
    # all courses title and their id (list of list)
    # request should contain admin id and course id
    if request.method == "POST":
        session_id = request.cookies.get('session_id')
        if session_id:
            admin = auth.get_usr_from_session_id(session_id)
            if admin:
                total_student = len(admin.student)
                total_teacher = len(admin.teacher)
                all_courses = []
                if admin.course:
                    for course in admin.course:
                        courses_list = [course.id, course.title]
                        all_courses.append(courses_list) 
                admin_data = {
                            'id':  admin.id,
                            'firstname': admin.firstname,
                            'lastname': admin.lastname,
                            "email": admin.email,
                            "gender": admin.gender,
                            "photo": admin.photo,
                            "courses_with_id": all_courses,
                            "total_student": total_student,
                            "total_teacher": total_teacher
                        }
                return jsonify(admin_data), 200
        return jsonify({"message": "Incorrect Credentials"}), 405

@app_routes.route('/search_user', methods=['POST'], strict_slashes=False)
@role_required('admin')
def search_for_user_by_name():
    """search for all or
        any user can be fetched
        from the database and
        their fullname and id
        will be displayed
    """
    if request.method == 'POST':
        data = request.get_json()
        if data:
            name = data.get('name')
            if not name:
                return jsonify({"error": "incorrect credentials"}), 405
            all_users = storage.find_all_user(name)
            if len(all_users) != 0:
                users = []
                for user in all_users:
                    new_user = [user.id, user.firstname, user.lastname]
                    users.append(new_user)
                return jsonify(all_users) # loop all users and return their data
        return jsonify({"error": "missing or invalid json file"}), 400