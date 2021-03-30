from datetime import datetime
from app import db


class Appointment(db.Model):
    id=db.Column(db.Integer, primary_key=True, nullable=False, unique=True)
    description=db.Column(db.String(64),nullable=False,unique=True)
    bookerId=db.Column(db.Integer, db.ForeignKey('user.id'))
    date=db.Column(db.DateTime,nullable=False)
    startTime=db.Column(db.Integer,nullable=False)
    endTime=db.Column(db.Integer,nullable=False) 
    cost=db.Column(db.Integer,nullable=False)


    def __repr__(self):
        return f'Appointment {self.id} for {self.id} last for {self.duration}'

class CostLog(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    userame=db.Column(db.String(64),nullable=False)
    description=db.Column(db.String(64))
    date=db.Column(db.DateTime) 
    cost=db.Column(db.Integer, nullable=False)
    