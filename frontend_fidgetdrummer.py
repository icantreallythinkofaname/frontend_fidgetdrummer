#!flask/bin/python

import sys

from flask import Flask, render_template, request, redirect, Response
import random, json

app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('index.html')

@app.route('/receiver', methods = ['POST'])
def worker():
	# read json + reply

    # data isnt working
	data = request.get_json()
	result = "hello"

	#for item in data:
		# loop over every row
	#	result += str(item['instrument']) + '\n'

	return result

#print(request.get_json())

if __name__ == "__main__":
    app.run()