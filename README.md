# Real-Time-Casino-Analytics

## Overview
Real-Time-Casino-Analytics is a web-based analytics platform providing insights into casino operations in real-time. It displays metrics such as total bets, the most popular game, and the highest win. The system utilizes a Flask backend for data serving and a frontend constructed with HTML, CSS, and JavaScript.

## Backend (`app.py`)

### Technologies
- **Flask**: A lightweight WSGI web application framework in Python.
- **Pandas**: For data manipulation and analysis.

### Setup
1. Ensure Python 3.x is installed on your system.
2. Install the required dependencies:
3. pip install flask pandas flask-cors
4. Run the server:

### Endpoints
- `/status`: Checks if the backend is operational.
- `/data`: Provides casino operation data in a JSON format.

## Frontend (`index.html`)

### Components
- **Header**: Displays the dashboard's title.
- **Analytics Overview**: Summarizes key metrics in real-time.
- **Detailed Statistics**: Shows a table of individual bets and outcomes.

### Dependencies
- `styles.css`: Contains the stylesheet for the user interface.
- `script.js`: Manages data fetching and DOM updates.

## Data Generation Script (`generate_mock_casino.py`)
A script to generate mock casino data. It's essential to run this script to create the 'mock_casino_data.csv' file used by the backend.

## JavaScript (`script.js`)
Manages asynchronous requests to the backend and updates the frontend with the fetched data.

## Usage
1. Start the Flask backend by running `app.py`.
2. Open `index.html` in a web browser to access the dashboard.
3. The dashboard will automatically fetch and display data from the Flask server.

## Notes
- CORS must be enabled in the Flask app for the frontend to fetch data successfully.
- The mock data generation script should be executed periodically to refresh the data.

---
