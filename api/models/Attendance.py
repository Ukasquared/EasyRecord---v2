from api.models import storage
from api.models.base import Base, BaseModel
from sqlalchemy import Boolean, Column, Date, ForeignKey, String
import uuid
from datetime import datetime
from typing import List


class Attendance(Base, BaseModel):
  """Attendance of
  students"""
  __table__ = "attendance"

  id = Column(String(40), default=lambda: str(uuid.uuid4()), primary_key=True)
  student_id = Column(String(40), ForeignKey('student.id'))
  date = Column(Date, default=lambda:  datetime.datetime.now().strftime("%d-%m-%Y"), nullable=False)
  status = Column(Boolean, default=False)
  remarks = Column(String, nullable=False)

  def __repr__(self) -> str:
    return f"<Class name: {self.__class__.__name__}>"

  def filter_attendance(s_id, s_date, e_date) -> List:
    """
      return query after filtering 
    """
    query = storage._session.query(Attendance).filter(Attendance.student_id == s_id, 
                        Attendance.date.between(s_date, e_date)).all()
    return query