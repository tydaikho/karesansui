// This file is part of Karesansui Core.
//
// Copyright (C) 2009-2012 HDE, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
// Authors:
//     Kei Funagayama <kei@karesansui-project.info>
//

// constant value, use in validate
ID_MIN_LENGTH = 1;
ID_MAX_LENGTH = 65535;
USER_MIN_LENGTH = 1;
USER_MAX_LENGTH = 16;
EMAIL_MIN_LENGTH = 1 + 1 + 4;
EMAIL_MAX_LENGTH = 256;
PASSWORD_MIN_LENGTH = 5;
PASSWORD_MAX_LENGTH = 40;
LANGUAGES_MIN_LENGTH = 1;
LANGUAGES_MAX_LENGTH = 6;
SEARCH_MIN_LENGTH = 0;
SEARCH_MAX_LENGTH = 256;
PAGE_MIN_SIZE = 0;
PAGE_MAX_SIZE = 65535;
TAG_MIN_LENGTH = 1;
TAG_MAX_LENGTH = 24;
MACHINE_NAME_MIN_LENGTH = 1;
MACHINE_NAME_MAX_LENGTH = 256;
MEMORY_MIN_SIZE = 64;
DISK_MIN_SIZE = 1;
DOMAIN_ID_MIN_LENGTH = 1;
DOMAIN_ID_MAX_LENGTH = 256;
NOTE_TITLE_MIN_LENGTH = 0;
NOTE_TITLE_MAX_LENGTH = 64;
FQDN_MIN_LENGTH = 0;
FQDN_MAX_LENGTH = 256;

PORT_MIN_NUMBER = 1;
PORT_MAX_NUMBER = 65535;
GRAPHICS_PORT_MIN_NUMBER = 5900;
GRAPHICS_PORT_MAX_NUMBER = PORT_MAX_NUMBER;

CURRENT_TREE_ID = null;

FIREWALL_LIST_RANGE = 20;

CHAP_USER_MIN_LENGTH = 1;
CHAP_USER_MAX_LENGTH = 256;
CHAP_PASSWORD_MIN_LENGTH = 1;
CHAP_PASSWORD_MAX_LENGTH = 256;

STORAGE_VOLUME_SIZE_MIN_LENGTH = 0;
STORAGE_VOLUME_SIZE_MAX_LENGTH = 2147483647;

CONTINUATION_COUNT_MIN = 1;
CONTINUATION_COUNT_MAX = 2147483647;
PROHIBITION_PERIOD_MIN = 1;
PROHIBITION_PERIOD_MAX = 2147483647;
THRESHOLD_VAL_MIN = 0;

DEFAULT_DECIMAL_POINT = 1

//virDomainState
VIR_DOMAIN_NOSTATE = 0;
VIR_DOMAIN_RUNNING = 1;
VIR_DOMAIN_BLOCKED = 2;
VIR_DOMAIN_PAUSED = 3;
VIR_DOMAIN_SHUTDOWN = 4;
VIR_DOMAIN_SHUTOFF = 5;
VIR_DOMAIN_CRASHED = 6;

// firewall status
FIREWALL_READ = 0;
FIREWALL_START = 1;
FIREWALL_STOP = 2;
FIREWALL_RESTART = 3;

// storage pool status
STORAGE_POOL_START = 0;
STORAGE_POOL_STOP = 1;

// network storage status
NETWORK_STORAGE_START = 0;
NETWORK_STORAGE_STOP = 1;

// constant value in watch display
MAX_NETWORK_OCTETS = 102400;
MAX_NETWORK_PACKETS = 8738;
MAX_LIBVIRT_CPU_TIME = 10000;
MAX_LIBVIRT_DISK_OCTETS = 2400000;
MAX_LOADAVERAGE_TIMES_PARAM = 10;
MAX_JIFFIES_PER_SEC = 100;

// service status
SERVICE_START = 0
SERVICE_STOP = 1
SERVICE_RESTART = 2
SERVICE_ENABLE = 3
SERVICE_DISABLE = 4

// network status
NETWORK_RESTART = 1