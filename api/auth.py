"""authentication class"""
from api.models.admin import Admin
from api.models.parent import Parent
from api.models.teacher import Teacher
from api.models.student import Student
from api.models.course import Course
import api.models as models
from sqlalchemy.orm.exc import NoResultFound
import bcrypt, uuid
import logging
from flask import current_app 

logger = logging.getLogger("FlaskApp")



def hashpassword(password):
    """hashes the password"""
    pass_word = password.encode('utf-8')
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(pass_word, salt)

def _generate_uuid() -> str:
    """generates uuid"""
    return str(uuid.uuid4())

class Auth:
    """authentication
    class"""

    user_model = {'admin': Admin, 'student': Student,
              'parent': Parent, 'teacher': Teacher}

    def register_user(self, **kwargs):
        """registers a user"""
        try:
            obj = None
            user = None
            email = kwargs['email']
            pass_word = kwargs['password']
            password = hashpassword(pass_word)
            kwargs['password'] = password
            role = kwargs.get('role')
            if role and role == "student":
                user = models.storage.find_user(Student, email=email)
                if user:
                    raise ValueError('email already registered')
                obj =  Student(**kwargs)
            elif role and role == "teacher":
                user = models.storage.find_user(Teacher, email=email)
                if user:
                    raise ValueError('email already registered')
                obj = Teacher(**kwargs)
            elif role and role == "parent":
                user = models.storage.find_user(Parent, email=email)
                if user:
                    raise ValueError('email already registered')
                obj = Parent(**kwargs)
            else:
                user = models.storage.find_user(Admin, email=email)
                print(user)
                if user:
                    raise ValueError('email already registered')
                kwargs['role'] = 'admin'
                current_app.logger.info(f'i also ran {kwargs}')
                obj = Admin(**kwargs)

            obj.new()
        except ValueError as e:
            raise ValueError(str(e))
        return str(obj.id)
    
    def register_course(self, admin_id, teacher_id, title):
        """registers a course"""
        course = models.storage.find_user(Course, title=title)
        if course:
            raise ValueError('course already registered')
        new_course = Course(admin_id=admin_id, teacher_id=teacher_id, title=title)
        new_course.new()
        return new_course.id
    
    def enroll_student_course(self, course_id, student_id):
        """enroll a student in a course"""
        student = models.storage.find_user(Student, id=student_id)
        course = models.storage.find_user(Course, id=course_id)
        if not student or not course:
            raise ValueError('invalid json data')
        teacher = models.storage.find_user(Teacher, id=course.teacher_id)
        for each_course in student.course:
            if each_course.id == course_id:
                raise ValueError('course is already registered')
        student.course.append(course)
        student.teacher.append(teacher)
        models.storage.save()
        return student.firstname

    def validate_login(self, email, password):
        """validate user credential"""
        state = False
        classes = list(self.user_model.values())
        try:
            for v in classes:
                user = models.storage.find_user(v, email=email)
                if user:
                    user_pwd = password.encode("utf-8")
                    state = bcrypt.checkpw(user_pwd, user.password)
                    break
        except:
            raise ValueError
        return state
    
    def get_user_role_id(self, email):
        """gets user role id"""
        classes = list(self.user_model.values())
        try:
            for v in classes:
                user = models.storage.find_user(v, email=email)
                if user:
                    return user.role
        except:
            raise ValueError

    def create_session(self, email):
        """create session"""
        session_id = _generate_uuid()
        classes = list(self.user_model.values())
        for v in classes:
             user = models.storage.find_user(
                 v, email=email)
             if user:
                models.storage.update_user_info(user, session_id=session_id)
                return session_id
    

    def get_usr_from_session_id(self, session_id):
        """ get user
        from session"""
        if not session_id:
            return None
        classes = list(self.user_model.values())
        for v in classes:
            user = models.storage.find_user(
                 v, session_id=session_id)
            if user:
                return user
        return None
    
    def destroy_session(self, user_id):
        """destroy user session"""
        for v in self.user_model.values():
             user = models.storage.find_user(
                 v, id=user_id)
             if user:
                 user.session_id = None
                 break
        return
    
    def reset_password_token(self, email):
        """reset user 
        password"""
        for v in self.user_model.values():
             user = models.storage.find_user(
                 v, email=email)
             if not user:
                 raise ValueError('No user found')
             else:
                 token = _generate_uuid()
                 user.update_user_info(
                     reset_token = token)
                 return token


    def update_password(self, token, password):
        """updates user password"""
        for v in self.user_model.values():
             user = models.storage.find_user(
                 v, reset_token=token)
             if user:
                 hashed_password = hashpassword(password)
                 user.update_user_info(
                     hashed_password=hashed_password,
                     reset_token=None)
        raise ValueError('No user found')
