from flask import render_template
from flask import send_from_directory, redirect, url_for
from aptlyweb import app
from flask_security import login_required


@app.route('/auth', methods=['POST', 'GET'])
def auth():
    return render_template('auth.html')

@app.route('/')
@login_required
def index():
    return app.send_static_file('index.html')


@app.route('/dist/<path:path>')
def dist(path):
    return send_from_directory('static/dist/', path)