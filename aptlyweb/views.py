from flask import render_template, request, current_app
from flask import send_from_directory, redirect, url_for
from aptlyweb import app
from flask_security import login_required, login_user
from flask_security import logout_user
from flask_security import LoginForm
from flask_security import current_user
from flask import flash
from webargs.flaskparser import parser
from webargs import fields
from flask_ldap3_login import LDAP3LoginManager
from flask_ldap3_login.forms import LDAPLoginForm


@app.route('/auth', methods=['POST', 'GET'])
def auth():
    error = None
    if current_user.is_authenticated or current_app.login_manager._login_disabled:
        return redirect(url_for('/'))
    if request.method == 'POST':
        form_data = parser.parse(
                {
                    'login': fields.Str(),
                    'password': fields.Str()
                }
        )
        try:
            user = LdapAuthManager.authenticate(form_data.get('login'), form_data.get('password'))
            login_user(user)
            return redirect(url_for('index'))

    return render_template('auth.html', error=error), 401


@app.route('/')
@login_required
def index():
    return app.send_static_file('index.html')


@app.route('/logout')
@login_required
def log_out():
    logout_user()
    flash('You were logged out')
    return redirect(url_for('security.login'))

@app.route('/dist/<path:path>')
def dist(path):
    return send_from_directory('static/dist/', path)