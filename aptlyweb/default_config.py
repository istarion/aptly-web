SECRET_KEY = 'TopSecretKey322'
PORT = 5002

APTLY_URL = 'localhost:8080'
APTLY_AUTH_USER = None  # Change to 'username' if BasicAuth needed
APTLY_AUTH_PASSWORD = None  # Change to 'password' if BasicAuth needed
APTLY_USERS_GROUP_LIST = None  # Change to ['ldap_groupname', ...] to secure autoregistration. None equals every group.
APTLY_ADMIN_GROUP_LIST = None  # Change to ['ldap_groupname',...], for login groupname must be in APTLY_USERS_GROUP_LIST

SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:foobar@localhost/aptlyweb'
SQLALCHEMY_TRACK_MODIFICATIONS = True

SECURITY_USER_IDENTITY_ATTRIBUTES = 'email'

# Ldap config, reference: http://flask-ldap3-login.readthedocs.io/en/latest/configuration.html
LDAP_HOST = 'ldap://172.27.254.2'
LDAP_PORT = 3268
LDAP_BASE_DN = 'DC=i-free,DC=local'
LDAP_BIND_DIRECT_CREDENTIALS = True
LDAP_USER_SEARCH_SCOPE = 'SUBTREE'
LDAP_GROUP_SEARCH_SCOPE = 'SUBTREE'
LDAP_USER_LOGIN_ATTR = 'mail'
LDAP_GROUP_MEMBERS_ATTR = 'member'
LDAP_SEARCH_FOR_GROUPS = True
LDAP_BIND_USER_DN = 'LDAP_APP_USER'
LDAP_BIND_USER_PASSWORD = 'LDAP_APP_PASS'

# Custom field, in user ldap record with groups
LDAP_USER_GROUPS_ATTR = 'memberOf'
