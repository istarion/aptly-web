from flask import render_template, request, current_app, render_template_string
from flask import send_from_directory, redirect, url_for
from aptlyweb import app, db
from flask_security import login_required, login_user
from flask_security import logout_user
from flask_security import LoginForm
from flask_security import current_user
from flask import flash
from webargs.flaskparser import parser
from webargs import fields
from flask_ldap3_login.forms import LDAPLoginForm


@app.ldap_manager.save_user
def save_user(dn, username, data, memberships):
    user =  app.user_datastore.get_user(username)
    if not user:
        user = app.user_datastore.create_user(email=username, password='', )
        db.session.commit()
    return user


@app.route('/')
@login_required
def index():
    return app.send_static_file('index.html')


@app.route('/login', methods=['POST', 'GET'])
def login():
    if current_user.is_authenticated or current_app.login_manager._login_disabled:
        app.send_static_file('index.html')
    template = """
    {{ get_flashed_messages() }}
    {{ form.errors }}
    <form method="POST">
        <label>Username{{ form.username() }}</label>
        <label>Password{{ form.password() }}</label>
        {{ form.submit() }}
        {{ form.hidden_tag() }}
    </form>
    """
    form = LDAPLoginForm()

    if form.validate_on_submit():
        login_user(form.user)
        return redirect('/')

    return render_template('security/login.html', form=form)


@app.route('/logout')
@login_required
def log_out():
    logout_user()
    flash('You were logged out')
    return redirect(url_for('security.login'))

@app.route('/dist/<path:path>')
def dist(path):
    return send_from_directory('static/dist/', path)