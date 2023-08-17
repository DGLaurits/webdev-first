from flask import Flask, render_template

# Create a Flask app
app = Flask(__name__)

# Define a route and function to handle the route
@app.route('/')
def hello():
    return render_template('index.html')

# Run the app if this script is executed
if __name__ == '__main__':
    app.run()