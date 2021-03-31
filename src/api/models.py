from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(250), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    username = db.Column(db.String(250), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username":self.username
            # do not serialize the password, its a security breach
        }



class Appointment(db.Model):
    id=db.Column(db.Integer, primary_key=True, nullable=False, unique=True)
    description=db.Column(db.String(64),nullable=False,unique=True)
    bookerId=db.Column(db.Integer, db.ForeignKey('user.id'))
    date=db.Column(db.DateTime,nullable=False)
    startTime=db.Column(db.Integer,nullable=False)
    endTime=db.Column(db.Integer,nullable=False) 
    cost=db.Column(db.Integer,nullable=False)


    def __repr__(self):
        return {
            "id": self.id,
            "description": self.description
        }

class CostLog(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    userame=db.Column(db.String(64),nullable=False)
    description=db.Column(db.String(64))
    date=db.Column(db.DateTime) 
    cost=db.Column(db.Integer, nullable=False)