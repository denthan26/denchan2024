from flask import Flask
from flask_cors import CORS
from flask import request
from flask import jsonify
import time

app = Flask(__name__)
CORS(app)

@app.route('/api')
def api():
    time.sleep(10)
    return jsonify({
        "message": "hello world",
        "code": 200
    })

if __name__ == '__main__':
    app.run(debug=True)
