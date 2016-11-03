from flask import Flask
from flask import make_response, jsonify
from flask_cors import CORS


app = Flask(__name__, static_folder='static/dist/', static_url_path='')

from flask_ini import FlaskIni
# from aptlyweb.resources import init_res


config_path = 'config.ini'

app.ini_config = FlaskIni()
CORS(app)

with app.app_context():
    app.ini_config.read(config_path)

app.aptly_url = app.ini_config.get('data_sources', 'aptly.url')
app.db_url = app.ini_config.get('data_sources', 'db.url')

from aptlyweb.api import init_api
from aptlyweb import views

init_api()

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)
