from flask import Flask, jsonify
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the mock data
df = pd.read_csv('mock_casino_data.csv')

@app.route('/status')
def index():
    return "Casino Analytics Dashboard Backend Running"

@app.route('/data', methods=['GET'])
def get_data():
    return jsonify(df.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
