from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Speciality, Working_hours
from api.utils import generate_sitemap, APIException
import datetime

def check_available_time_specialist(id_speciality):
    response = get_times_by_speciality(id_speciality)
    return response

def get_times_by_speciality(id_speciality):
    speciality_response = Speciality.query.get_or_404(id_speciality)
    exist_working_hours = false
    if speciality_response != 404 :          
        working_hours = Working_hours.query.filter_by(speciality_id=speciality_response.id).first()
        if working_hours != 404:
            ## cruzar
            


        return working_hours_response
    else:
        return false