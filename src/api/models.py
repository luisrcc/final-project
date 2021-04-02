from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(250), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    username = db.Column(db.String(250), unique=False, nullable=False)
    appointment = db.relationship('Appointment', backref='user', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username":self.username
            #"appointment": list(map(lambda x: x.serialize(), self.appointment))
            # do not serialize the password, its a security breach
        }

class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    pet_name = db.Column(db.String(250), unique=False, nullable=False)
    pet = db.Column(db.String(250), unique=False, nullable=False)
    speciality = db.Column(db.String(250), unique=False, nullable=False)
    specialist = db.Column(db.String(250), unique=False, nullable=False)
    date = db.Column(db.DateTime,nullable=False)
    # start_time = db.Column(db.Integer,nullable=False)
    # end_time = db.Column(db.Integer,nullable=False) 
    # cost = db.Column(db.Integer,nullable=False)
     
    def __repr__(self):
        return '<Appointment %r>' % self.date

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "pet_name": self.pet_name,
            "pet": self.pet,
            "speciality": self.speciality,
            "specialist": self.specialist,
            "date": self.date
            # "start_time": self.start_time,
            # "end_time": self.end_time,
            # "cost": self.cost
        }