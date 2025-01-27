# register a set of student attendance - endpoint
# fetch the attendance of a particular student

# this feature will be implemented after presentation because of time frame
from api.views import app_routes


app_routes.route("/get-student-attendance", methods=["GET"], strict_slashes=False)
def get_attendance():
    """ 
    fetch the attendance
    of any student in chunks
    query params:
        page: the page number
        limit: the number of result on one page 
    """
    