#!/usr/bin/env python3      # best line if you're running this file on Git Bash or  Linux too).
                            #'env' here will search the system’s "PATH" for the correct python3 interpreter and
                            #                                    run the script with it.
#!C:/Python313/python.exe   # use this sheband if you want to run from local windows pythonterminal

import os
import sys

def check_reboot():
    """Returns True if the computer has a pending reboot."""
    return os.path.exists("/run/reboot-required")

def main():
    if check_reboot():
        print("Pending Reboot.")
        sys.exit(1)
    print("Everything ok.")
    sys.exit(0)    

main()