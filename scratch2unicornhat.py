#!/usr/bin/env python

import unicornhathd
import scratch

VERSION = "0.0.1"

def connect():
    try:
        return scratch.Scratch()
    except scratch.ScratchError:
        print _("Error: Unable to connect to Scratch. Scratch may be not running or the remote sensor connections may be not enabled.")
        return None

def _listen(s):
    while True:
        try:
            yield s.receive()
        except scratch.ScratchError:
            print _("Error: Disconnected from Scratch.")
            raise StopIteration

def listen(s):
    for msg in _listen(s):
        if (msg):
            print "Received: %s" % str(msg)
            if msg[0] == 'broadcast':
                commands = msg[1].split('_')
                if commands[0] == 'uhat':
                    if commands[1] == 'red':
                        unicornhathd.set_pixel(0, 0, 255, 0, 0)
                        unicornhathd.show()
                    elif commands[1] == 'green':
                        unicornhathd.set_pixel(0, 0, 0, 255, 0)
                        unicornhathd.show()
                    elif commands[1] == 'blue':
                        unicornhathd.set_pixel(0, 0, 0, 0, 255)
                        unicornhathd.show()
                    elif commands[1] == 'show':
                        unicornhathd.show()
                    elif commands[1] == 'clear':
                        unicornhathd.clear()
                    else:
                        x = int(commands[1])
                        if x > 15:
                            x = 15
                        if x < 0:
                            x = 0
                        y = int(commands[2])
                        if y > 15:
                            y = 15
                        if y < 0:
                            y = 0
                        r = int(commands[3])
                        g = int(commands[4])
                        b = int(commands[5])
                        unicornhathd.set_pixel(x, y, r, g, b)

def main():
    print "================="
    print "Sratch2unicornhat %s" % VERSION
    print "================="
    print ""

    while True:
        s = connect()

        if (s):
            unicornhathd.clear()
            unicornhathd.set_pixel(0, 0, 255, 255, 255)
            unicornhathd.show()
            s.broadcast("uhat_red")
            s.broadcast("uhat_green")
            s.broadcast("uhat_blue")
            s.broadcast("uhat_0_0_255_0_0")
            s.broadcast("uhat_0_0_0_255_0")
            s.broadcast("uhat_0_0_0_0_255")
            s.broadcast("uhat_15_15_255_0_0")
            s.broadcast("uhat_show")
            s.broadcast("uhat_clear")
            listen(s)

main()
