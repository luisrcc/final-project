"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_cors import CORS, cross_origin
from api.models import db, User, Appointment, Speciality, Specialist
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash       ## Nos permite manejar tokens por authentication (usuarios)    
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity   #from models import Person
import datetime

api = Blueprint('api', __name__)


#@api.route('/hello', methods=['POST', 'GET'])
#def handle_hello():

#    response_body = {
#        "message": "Hello! I'm a message that came from the backend"
#    }


@api.route('/users', methods=['GET'])
def handle_hello():
    users = User.query.all()
    users = list(map(lambda x: x.serialize(), users))
    response_body = {
        "users": users
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['POST'])
def create_a_user():
    email = request.json['email']
    password = request.json['password']
    username = request.json['username']

    new_user = User(email=email, password=password, username=username)

    db.session.add(new_user)
    db.session.commit()

    return jsonify("usuario creado"), 200


@api.route('/hash', methods=['POST', 'GET'])
def handle_hash():

    expiration = datetime.timedelta(days=1)
    access_token = create_access_token(identity="{email}", expires_delta=expiration)
    response_token = {
        "users": "{username}",
        "token": access_token
    }
    return jsonify(response_token), 200

@api.route('/login', methods=['POST'])
def login():
    
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if not email:
        return jsonify({"msg":"Email required"}), 400

    if not password:
        return jsonify({"msg":"Password required"}), 400
    
    user = User.query.filter_by(email=email).first()
    print(user)

    if not user:
        return jsonify({"msg": "The email is not correct",
        "status": 401
        
        }), 401
    # if not check_password_hash(user.password, password):
    #      return jsonify({"msg": "The password is not correct",
    #     "status": 401
    #     }), 400

    expiracion = datetime.timedelta(days=3)
    access_token = create_access_token(identity=user.email, expires_delta=expiracion)

    data = {
        "user": user.serialize(),
        "token": access_token,
        "expires": expiracion.total_seconds()*1000,
        "userId": user.id,
        "username": user.username
    }


    return jsonify(data), 200

@api.route('/register', methods=['POST'])
@cross_origin(supports_credentials=True)
def register():
 if request.method == 'POST':
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    username = request.json.get("username", None)
    
    if not email:
        return "Email required", 401
    username = request.json.get("username", None)
    if not username:
        return "Username required", 401
    password = request.json.get("password", None)
    if not password:
        return "Password required", 401

    email_query = User.query.filter_by(email=email).first()
    if email_query:
        return "This email has been already taken", 401
    
    user = User()
    user.email = email
    user.is_active= True
    user.username = username
    hashed_password = generate_password_hash(password)
    user.password = hashed_password
    print(user)
    db.session.add(user)
    db.session.commit()

    response = {
        "msg": "Added successfully",
        "username": username
    }
    return jsonify(response), 200


    return jsonify(response_body), 200


@api.route('/reservar',methods=['POST'])
# @login_required
def book():
    user_id = request.json['user_id']
    user_exists = bool(User.query.filter_by(id = user_id).first())
    if user_exists:
        user_id = request.json['user_id']
        pet_name = request.json['pet_name']
        pet = request.json['pet']
        speciality = request.json['speciality']
        specialist = request.json['specialist']
        date = request.json['date']
        # cost = request.json['cost']
        new_appointment = Appointment(user_id=user_id, pet_name=pet_name, pet=pet, speciality=speciality, specialist=specialist, date=date)
    else:
        return jsonify("no existe el usuario"), 404

    db.session.add(new_appointment)
    db.session.commit()
    return jsonify("Hora agendada"), 200


@api.route('/reservas',methods=['GET'])
def get_appointments():
    appointments = Appointment.query.all()
    appointments = list(map(lambda x: x.serialize(), appointments))

    response_body = {
        "appointments": appointments,
    }

    return jsonify(response_body), 200

@api.route('/cancelar/<int:id>',methods=['DELETE'])
def cancel_booking(id):
    appointment_exists = Appointment.query.get_or_404(id)
    if appointment_exists:
            
        db.session.delete(appointment_exists)
        db.session.commit()
        return jsonify('Reserva cancelada!'), 200
    else:
        return jsonify("no existe la reserva"), 404

@api.route('/editar/<int:id>',methods=['PUT'])
def edit_booking(id):
    appointment_exists = Appointment.query.filter_by(id=id).first_or_404()
    if appointment_exists:
        updated_appointment = request.json['date'] 
            
        appointment_exists.date = updated_appointment
        db.session.commit()
        return jsonify('Reserva actualizada!'), 200
    else:
        return jsonify("no existe la reserva"), 404



@api.route('/especialidad',methods=['POST'])
def create_speciality():
    name = request.json['name']

    new_speciality = Speciality(name=name)

    db.session.add(new_speciality)
    db.session.commit()

    return jsonify("especialidad creada"), 200


@api.route('/especialista',methods=['POST'])
def create_specialist():
    name = request.json['name']
    speciality_id = request.json['speciality_id']

    new_specialist = Specialist(name=name, speciality_id=speciality_id)

    db.session.add(new_specialist)
    db.session.commit()

    return jsonify("especialista creado"), 200


@api.route('/speciality',methods=['GET'])
def get_speciality():
    specialities = Speciality.query.all()
    specialities = list(map(lambda x: x.serialize(), specialities))

    specialists = Specialist.query.all()
    specialists = list(map(lambda x: x.serialize(), specialists))

    response_body = {
        "specialities": specialities,
        "specialists": specialists
    }

    return jsonify(response_body), 200



# @api.route('/actualizar-reserva',methods=['PUT'])
# def update_appointment():
#     name = request.json['name']
#     speciality_id = request.json['speciality_id']

#     return jsonify("especialista"), 200