from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Speciality, Working_hours, Appointment
from api.utils import generate_sitemap, APIException
import datetime

def check_available_time_specialist(id_speciality, id_specialist, date):
    response = get_times_by_speciality(id_speciality, id_specialist, date)
    return response

def get_times_by_speciality(id_speciality, id_specialist, date):
    speciality_response = Speciality.query.get_or_404(id_speciality)
    exist_working_hours = False

    if speciality_response == 404:
        return False

    response = db.session.query(Working_hours.id).outerjoin(Appointment).filter(Appointment.date != date, Appointment.specialist_id == id_specialist, Appointment.speciality_id == id_speciality).all()

    if response:         
        return response
    
    return False