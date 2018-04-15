import pyautogui
import serial
import time
ser = serial.Serial('/dev/cu.usbmodem14511', 9600, timeout=None, xonxoff=False, rtscts=False, dsrdtr=False) #Tried with and without the last 3 parameters, and also at 1Mbps, same happens.

keys = {'a': False}

while True:
    time.sleep(0.01)
    res = ser.read(ser.inWaiting())
    print(res)
    if b'a1' in res:
        if keys['a'] == False:
            pyautogui.keyDown('a')
            keys['a'] = True
            print(keys['a'])
    else:
        keys['a'] = False
        #pyautogui.keyUp('a')
        pass
#fdgjkl