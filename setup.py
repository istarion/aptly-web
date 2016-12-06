import os
from setuptools import setup, find_packages

here = os.path.abspath(os.path.dirname(__file__))
with open(os.path.join(here, 'requirements.txt')) as f:
    requires = f.read()
setup(
    name='aptly-web',
    version=0.1,
    description='Aptly web UI',
    long_description='',
    classifiers=[
        "Programming Language :: Python",
        "Framework :: Flask",
        "Topic :: Internet :: WWW/HTTP",
    ],
    author='',
    author_email='s.zavgorodniy@i-dgtl.ru',
    url='',
    keywords='web flask',
    packages=find_packages(exclude=['*node_modules*']),
    include_package_data=True,
    zip_safe=False,
    install_requires=requires
)
