from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from sqlalchemy.dialects.postgresql import TIME, DATE

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(250))
    last_name = db.Column(db.String(250))
    email = db.Column(db.String(250), unique=True, nullable=False)
    phone = db.Column(db.Integer)
    password = db.Column(db.String(250), nullable=False)

    appointment = db.relationship('Appointment', backref='user', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,            
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone": self.phone,
            "password": self.password      
        }
 

class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    speciality_id = db.Column(db.Integer, db.ForeignKey('speciality.id'), nullable=False)
    specialist_id = db.Column(db.Integer, db.ForeignKey('specialist.id'), nullable=False)
    pet_name = db.Column(db.String(250), unique=False, nullable=False)
    pet = db.Column(db.String(250), unique=False, nullable=False)
    date = db.Column(db.date ,nullable=False)   
    time = db.Column(db.time, nullable=False)

    def __repr__(self):
        return '<Appointment %r>' % self.date

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "speciality_id": self.speciality_id,
            "specialist_id": self.specialist_id,
            "pet_name": self.pet_name,
            "pet": self.pet,
            "speciality": self.speciality,
            "specialist": self.specialist,
            "date": self.date,
            "time": self.time
        }

class Time(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True) 
    speciality_id = db.Column(db.Integer, db.ForeignKey('speciality.id'), nullable=False)
    time = db.Column(db.time, nullable=False)

    def __repr__(self):
        return '<Speciality %r>' % self.time

    def serialize(self):
        return {
            "id": self.id,
            "time":self.time
        }


class Speciality(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    name = db.Column(db.String(250), unique=False, nullable=False)
    specialist = db.relationship('Specialist', backref='speciality', lazy=True)

    appointment = db.relationship('Appointment', backref='speciality', lazy=True)

    def __repr__(self):
        return '<Speciality %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name":self.name
        }

class Specialist(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)    
    speciality_id = db.Column(db.Integer, db.ForeignKey('speciality.id'), nullable=False)
    name = db.Column(db.String(250), unique=False, nullable=False)

    appointment = db.relationship('Appointment', backref='specialist', lazy=True)

    def __repr__(self):
        return '<Specialist %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "speciality_id": self.speciality_id
        }