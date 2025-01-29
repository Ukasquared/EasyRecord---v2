# register a set of student attendance - endpoint
# fetch the attendance of a particular student

# this feature will be implemented after presentation because of time frame
from api.views import app_routes
from flask import request, jsonify
from datetime import datetime
from api.models.Attendance import Attendance



def convert_date(date) -> datetime:
    """
    date: format `%Y-%m-%d`
    so the date is formatted
    to `%d-%m-%Y` 
    """
    prevDate = datetime.strptime(date, '%Y-%m-%d').date()
    format_prev_date = prevDate.strftime('%d-%m-%Y')
    new_date = datetime.strptime(format_prev_date, '%d-%m-%Y').date()
    return new_date

app_routes.route("/get-student-attendance", methods=["GET"], strict_slashes=False)
def get_attendance():
    """ 
    fetch the attendance
    of any student in chunks
    query params:
        page: the page number
        limit: the number of result on one page 
        studentId:
        start date:
        end date:

        return: a list of attendance data
    """
    # store the query parameter in a variable
    # query the database using the id, startdate and end date
    student_id = request.args.get('studentId')
    start_date = request.args.get('startDate')
    end_date = request.args.get('endDate')
    page = request.args.get('currentPage', default=1, type=int)
    limit = request.args.get('limit', default=10, type=int)

    # convert the date to preferred format
    format_start_date = convert_date(start_date)
    format_end_date = convert_date(end_date)

    #query the database using the arguments
    query = Attendance.filter_attendance(student_id, 
                                         format_start_date, format_end_date)
    
    offset = (page - 1) * limit
    total_record = query.count()
    record = query.offset(offset).limit(limit).all()
    total_pages = (total_record + limit - 1) // limit

    data = [
        {
            "id": record.id,
            "student id": record.student_id,
            "date": record.date,
            "status": record.status,
            "remark": record.remark
        } for attendance_record in record]
    
    attendance_data = {
        "data": data,
        "total_pages": total_pages
    }

    return jsonify({"data": attendance_data}), 200