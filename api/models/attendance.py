#!/usr/bin/python3
"""attendance class"""
from models import Base
from models.base import BaseModel
from sqlalchemy import Column, String, Date, ForeignKey, Boolean
import uuid
from datetime import datetime


class Attendance(Base, BaseModel):
  """Attendance of
  students"""
  __table__ = "attendance"

  id = Column(String(40), default=lambda: str(uuid.uuid4()), primary_key=True)
  student_id = Column(String(40), ForeignKey('student.id'))
  date = Column(Date, default=lambda:  datetime.datetime.now().strftime("%d-%m-%Y"), nullable=False)
  status = Column(Boolean, default=False)

  def __repr__(self) -> str:
    return f"<Class name: {self.__class__.__name__}>"
