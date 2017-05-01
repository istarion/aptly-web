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

from aptlyweb.models.user import User


@app.ldap_manager.save_user
def save_user(dn, username, data, memberships):
    user = app.user_datastore.get_user(username)
    login_groups = app.config.get('APTLY_USERS_GROUP_LIST')
    if not user:
        if check_group(data, login_groups):
            user = app.user_datastore.create_user(login=username, password='', )
            db.session.commit()
            update_roles_by_groups(data, username)
            return user
        flash('Your account is not active. Please, contact administrator')
        return User(active=False)
    user.active = check_group(data, login_groups)
    update_roles_by_groups(data, username)
    return user


def update_roles_by_groups(data, username):
    admin_groups = app.config.get('APTLY_ADMIN_GROUP_LIST')
    if not admin_groups:
        return
    if check_group(data, admin_groups):
        app.user_datastore.add_role_to_user(
            app.user_datastore.find_user(login=username),
            app.user_datastore.find_role('admin')
        )
    else:
        app.user_datastore.remove_role_from_user(
            app.user_datastore.find_user(login=username),
            app.user_datastore.find_role('admin')
        )
    db.session.commit()


def check_group(domain_user, group_list):
    for ldap_group in domain_user[app.config.get('LDAP_USER_GROUPS_ATTR')]:
        if group_list is None:
            return True
        for group_name in group_list:
            if "CN=" + group_name + "," in ldap_group:
                return True
    return False



@app.login_manager.user_loader
def load_user(id):
    user = app.user_datastore.get_user(id)
    if user:
        return user
    return None


@app.route('/')
# @login_required
def index():
    return render_template('index.html')
    # return app.send_static_file('index.html')


@app.route('/login', methods=['POST', 'GET'])
def login():
    if current_user.is_authenticated or current_app.login_manager._login_disabled:
        return redirect('/')
    form = LDAPLoginForm()

    if form.validate_on_submit():
        login_user(form.user, remember=False)
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
# @login_required
def dist(path):
    return send_from_directory('static/dist/', path)
