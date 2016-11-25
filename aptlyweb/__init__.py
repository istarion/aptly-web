from flask import Flask
from flask import make_response, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_security import SQLAlchemyUserDatastore, Security
from flask_ldap3_login import LDAP3LoginManager


app = Flask(__name__, static_folder='static/dist/', static_url_path='', template_folder='templates/')

from flask_ini import FlaskIni
# from aptlyweb.resources import init_res


config_path = 'config.ini'

app.ini_config = FlaskIni()
CORS(app)

with app.app_context():
    app.ini_config.read(config_path)

app.aptly_url = app.ini_config.get('data_sources', 'aptly.url')
app.config['SQLALCHEMY_DATABASE_URI'] = app.ini_config.get('data_sources', 'db.url')
app.config['LDAP_HOST'] = app.ini_config.get('ldap', 'ldap.host')
app.config['LDAP_PORT'] = int(app.ini_config.get('ldap', 'ldap.port'))
app.config['LDAP_BASE_DN'] = app.ini_config.get('ldap', 'ldap.base_dn')
app.config['LDAP_USER_DN'] = app.ini_config.get('ldap', 'ldap.user_dn')
app.config['LDAP_GROUP_DN'] = app.ini_config.get('ldap', 'ldap.group_dn')
app.config['LDAP_USER_RDN_ATTR'] = app.ini_config.get('ldap', 'ldap.user_rdn_attr')
app.config['LDAP_USER_LOGIN_ATTR'] = app.ini_config.get('ldap', 'ldap.user_login_attr')
app.config['LDAP_BIND_USER_DN'] = app.ini_config.get('ldap', 'ldap.bind_user_dn')
app.config['LDAP_BIND_USER_PASSWORD'] = app.ini_config.get('ldap', 'ldap.bind_user_password')

db = SQLAlchemy(app)

app.ldap_manager = LDAP3LoginManager(app)

from aptlyweb.api import init_api
from aptlyweb import views
from aptlyweb.models.role import Role
from aptlyweb.models.user import User

app.user_datastore = SQLAlchemyUserDatastore(db, User, Role)
secutiry = Security(app, app.user_datastore)


# @app.before_first_request
# def create_user():
#     db.create_all(app=app)
#     app.user_datastore.create_user(email='s.zavgorodniy@i-dgtl.ru', password='foobar')
#     db.session.commit()

init_api()

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)
