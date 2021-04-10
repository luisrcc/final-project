from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(250))
    last_name = db.Column(db.String(250))
    email = db.Column(db.String(250), unique=True, nullable=False)
    phone = db.Column(db.Integer)
    password = db.Column(db.String(250), nullable=False)
    #por defecto los unique estan en false
    #por defecto nullable siempre esta en obligatorio(agregar cuando sea TRUE)
    #username = db.Column(db.String(250), unique=True, nullable=False) 
    #username esta de mas xq no lo usamos
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