#!/usr/bin/env python

import unicornhathd
import sys, traceback
import os
import gettext
import requests
from BaseHTTPServer import HTTPServer
from BaseHTTPServer import BaseHTTPRequestHandler
import urllib
import urlparse
import logging

VERSION = "0.0.1"
localedir = os.path.join(os.path.dirname(__file__), 'locale')
_ = gettext.translation(domain = 'scratch2mcpi', localedir = localedir, fallback = True).ugettext

logging.basicConfig(level=logging.DEBUG)
log = logging.getLogger(__name__)

class ScratchX2UnicornhatServer(BaseHTTPRequestHandler):
    def addPixel(self, params):
        x = self.inRange(int(params[0]), 0, 15)
        y = self.inRange(int(params[1]), 0, 15)
        r = self.inRange(int(params[2]), 0, 255)
        g = self.inRange(int(params[3]), 0, 255)
        b = self.inRange(int(params[4]), 0, 255)
        unicornhathd.set_pixel(x, y, r, g, b)
        unicornhathd.show()
        return ''

    def setPixel(self, params):
        x = self.inRange(int(params[0]), 0, 15)
        y = self.inRange(int(params[1]), 0, 15)
        r = self.inRange(int(params[2]), 0, 255)
        g = self.inRange(int(params[3]), 0, 255)
        b = self.inRange(int(params[4]), 0, 255)
        unicornhathd.set_pixel(x, y, r, g, b)
        return ''

    def show(self, params):
        unicornhathd.show()
        return ''

    def clear(self, params):
        unicornhathd.clear()
        return ''

    def allClear(self, params):
        unicornhathd.clear()
        unicornhathd.show()
        return ''

    def returnExtension(self, params):
        file = open("scratchx2unicornhat.js", "r")
        content = file.read()
        file.close()
        return content

    def inRange(self, int, min, max):
        if int > max:
            return max
        elif int < min:
            return min
        else:
            return int

    def do_GET(self):
        global mc
        commands = {
            "set_pixel" : self.setPixel,
            "show" : self.show,
            "clear" : self.clear,
            "all_clear" : self.allClear,
            "add_pixel" : self.addPixel,
            "scratchx2unicornhat.js" : self.returnExtension,
            "s2u.js" : self.returnExtension
        }
        parsed_path = urlparse.urlparse(self.path)
        query = parsed_path.query
        self.send_response(200)
        self.end_headers()
        command_path = parsed_path[2].split('/')
        handler = commands[command_path[1]]
        result = handler(command_path[2:])
        self.wfile.write(result)
        return

if __name__ == '__main__':
    print "================="
    print "Sratch2unicornhat %s" % VERSION
    print "================="
    print ""

    unicornhathd.clear()
    unicornhathd.show()

    server = HTTPServer(('localhost', 8080), ScratchX2UnicornhatServer)
    log.info('Starting ScratchX2UnicornhatServer, use <Ctrl-C> to stop.')
    server.serve_forever()
