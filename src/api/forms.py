from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField, IntegerField, SelectField, DateField, SelectMultipleField, widgets
from wtforms.validators import ValidationError, DataRequired, Email, EqualTo
from flask_login import current_user
from appointment import Appointment
from appointment import CostLog
# from app.models import * 
import datetime

class LoginForm(FlaskForm):
    username = StringField('Nombre de usuario', validators=[DataRequired()])
    password = PasswordField('Contrasena', validators=[DataRequired()])
    remember_me = BooleanField('Recordarme')
    submit = SubmitField('Ingresar')

class RegistrationForm(FlaskForm):
    username = StringField('Nombre de usuario', validators=[DataRequired()])
    password = PasswordField('Contrasena', validators=[DataRequired()])
    password2 = PasswordField('Contrasena', validators=[DataRequired(), EqualTo('password')])
    firstname=StringField('Nombre',validators=[DataRequired()])
    lastname=StringField('Apellido',validators=[DataRequired()])
    phoneNumber=IntegerField('Telefono',validators=[DataRequired()])
    address=StringField('Direccion',validators=[DataRequired()])
    submit=SubmitField('Registrarse')

    def validate_username(self,username):
        user=User.query.filter_by(username=self.username.data).first()
        if user is not None: # existe username
          raise ValidationError('Usuario existe. Por favor, elige otro nombre de usuario')

class BookAppointmentForm(FlaskForm):
    # username = StringField('Nombre de usuario', validators=[DataRequired()])
    petName = StringField('Nombre mascota', validators=[DataRequired()])
    pet = StringField('Mascota', validators=[DataRequired(), EqualTo('password')])
    speciality=StringField('Especialidad',validators=[DataRequired()])
    specialist=StringField('Especialidad',validators=[DataRequired()])
    date=DateField('Elegir fecha', format="%m/%d/%Y",validators=[DataRequired()])
    startTime=SelectField('Elegir hora(en formato 24hr)',coerce=int,choices=[(i,i) for i in range(9,19)])
    submit=SubmitField('Reservar')

    def validate_date(self,date):
    if self.date.data<datetime.datetime.now().date():
        raise ValidationError('Solo se puede reservar de manana en adelante')

class CancelbookingForm(FlaskForm):
    #def __init__(self,userId,**kw):
     #   super(CancelbookingForm, self).__init__(**kw)
      #  self.name.userId =userId
    ids=SelectField('Elegir cita a cancelar',coerce=int,choices=AppointmentChoiceIterable()) 
    submit=SubmitField('Cancelar') 