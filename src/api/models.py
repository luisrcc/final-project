from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rol_id = db.Column(db.Integer, db.ForeignKey('rol.id'), nullable=False)
    first_name = db.Column(db.String(250))
    last_name = db.Column(db.String(250))
    email = db.Column(db.String(250), unique=True, nullable=False)
    phone = db.Column(db.Integer)
    password = db.Column(db.String(250), nullable=False)
    appointment = db.relationship('Appointment', backref='user', lazy=True)
    rol = db.relationship('Rol', backref='user', lazy=True)
    

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "rol_id": self.rol_id,            
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,            
            "phone": self.phone            
        }


class Rol(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rol_name = db.Column(db.String(250))
    
    def __repr__(self):
        return '<Rol %r>' % self.rol_name

    def serialize(self):
        return {
            "id": self.id,
            "rol_name": self.rol_name
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

class Speciality(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    name = db.Column(db.String(250), unique=False, nullable=False)
    specialist = db.relationship('Specialist', backref='speciality', lazy=True)


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

    def __repr__(self):
        return '<Specialist %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "speciality_id": self.speciality_id
        }