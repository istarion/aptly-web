from flask import Flask
from flask import make_response, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_security import SQLAlchemyUserDatastore, Security
from flask_login import LoginManager
from flask_ldap3_login import LDAP3LoginManager
import logging
from aptlyweb import default_config


app = Flask(__name__, static_folder='static/dist/', static_url_path='', template_folder='templates/')

CORS(app)

app.config.from_object(default_config)
app.config.from_envvar('APTLYWEB_SETTINGS')
app.aptly_url = app.config['APTLY_URL']
app.aptly_auth_user = app.config.get('APTLY_AUTH_USER')
app.aptly_auth_password = app.config.get('APTLY_AUTH_PASSWORD')

db = SQLAlchemy(app)

app.login_manager = LoginManager(app=app)
app.ldap_manager = LDAP3LoginManager(app=app)


from aptlyweb.api import init_api
from aptlyweb import views
from aptlyweb.models.role import Role
from aptlyweb.models.user import User

app.user_datastore = SQLAlchemyUserDatastore(db, User, Role)
secutiry = Security(app, app.user_datastore)

FORMAT = '%(asctime)-15s %(message)s'
logging.basicConfig(format=FORMAT, level='DEBUG')

# @app.before_first_request
# def create_role():
#     db.create_all(app=app)
#     app.user_datastore.create_role(name='admin', description='Repo administrator')
#     db.session.commit()

# @app.before_first_request
# def add_role():
#     db.create_all(app=app)
#     app.user_datastore.add_role_to_user(app.user_datastore.find_user(email='s.zavgorodniy@i-dgtl.ru'), app.user_datastore.find_role('admin'))
#     db.session.commit()
#
init_api()

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)
