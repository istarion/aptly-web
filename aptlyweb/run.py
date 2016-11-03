#!/usr/bin/env python3

import os
import sys
os.chdir(os.path.dirname(os.path.abspath(__file__)))
WORK_DIR = os.path.dirname(os.path.abspath(__file__))

WORK_DIR = '/'.join(WORK_DIR.split('/')[0:-1])
sys.path.append(WORK_DIR)
from aptlyweb import app as application


if __name__ == '__main__':
    application.run(threaded=True, host='0.0.0.0', port=5001)
