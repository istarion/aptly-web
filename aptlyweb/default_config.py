SECRET_KEY = 'TopSecretKey322'

APTLY_URL = 'localhost:8080'

SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:foobar@localhost/aptlyweb'
SQLALCHEMY_TRACK_MODIFICATIONS = True

SECURITY_USER_IDENTITY_ATTRIBUTES = 'email'

#Ldap config, reference: http://flask-ldap3-login.readthedocs.io/en/latest/configuration.html
LDAP_HOST = 'ldap://172.27.254.2'
LDAP_PORT = 3268
LDAP_BASE_DN = 'DC=i-free,DC=local'
LDAP_BIND_DIRECT_CREDENTIALS = True