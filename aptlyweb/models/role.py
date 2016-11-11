from aptlyweb import db
from flask_security import RoleMixin


class Role(db.Model, RoleMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Integer, unique=True)
    description = db.Column(db.String(255))
