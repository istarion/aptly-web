from flask import render_template, request, current_app, render_template_string, session
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
from flask_cors import cross_origin


@app.ldap_manager.save_user
def save_user(dn, username, data, memberships):
    user = app.user_datastore.get_user(username)
    if not user:
        user = app.user_datastore.create_user(email=username, password='', )
        db.session.commit()
    return user


@app.login_manager.user_loader
def load_user(id):
    user = app.user_datastore.get_user(id)
    if user:
        return user
    return None

@app.route('/')
@login_required
def index():
    print(session)
    return render_template('index.html')
    # return app.send_static_file('index.html')


@app.route('/login', methods=['POST', 'GET'])
def login():
    if current_user.is_authenticated or current_app.login_manager._login_disabled:
        return redirect('/')
    form = LDAPLoginForm()

    if form.validate_on_submit():
        login_user(form.user, remember=True)
        session['username'] = request.form['username']
        return redirect('/')

    return render_template('security/login.html', form=form)


@app.route('/logout')
@login_required
def log_out():
    logout_user()
    flash('You were logged out')
    return redirect(url_for('security.login'))

@app.route('/dist/<path:path>')
@login_required
def dist(path):
    return send_from_directory('static/dist/', path)