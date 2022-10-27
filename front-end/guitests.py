import os
from sys import platform

if __name__ == "__main__":
    # Use chromedriver based on OS
    if platform == "win32":
        PATH = "./front-end/flow_tests/chromedriver.exe"
    elif platform == "linux":
        PATH = "./front-end/flow_tests/chromedriver_linux"
    else:
        print("Unsupported OS")
        exit(-1)

    # Run all of the gui tests
    os.system("python3 ./front-end/flow_tests/splashTests.py")
    os.system("python3 ./front-end/flow_tests/navbarTests.py")
    os.system("python3 ./front-end/flow_tests/instanceTests.py")
