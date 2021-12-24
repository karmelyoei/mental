from flask import Flask, render_template, request, jsonify
import os
from flask_cors import CORS
import joblib
import array as arr
import numpy as np
import pandas as pd

loaded_rf = joblib.load("./random_forest.joblib")

a = arr.array('i',[1,0,0,1,0,1,1,1,1,7,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0])

data=pd.DataFrame(a)

data=data.T

pred=loaded_rf.predict(data)

value = pred[0]
print("value is", pred[0])


# Set the template and static folder to the client build
app = Flask(__name__, template_folder="client/build", static_folder="client/build/static")
CORS(app)
app.config['SECRET_KEY'] = 'super secret key'
app.config['SITE'] = "http://localhost:5000"
app.config['DEBUG'] = True


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    """ This is a catch all that is required for react-router """
    return render_template('./public/index.html')


@app.route('/test', methods=['GET'])
def login():
    """ An example endpoint """
    if request.method == 'GET':
        return jsonify(status=200, text=str(value))

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)