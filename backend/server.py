import cal_to_json

from flask import Flask
app = Flask(__name__)

@app.route("/events")
def events():
	cal_to_json.main()

@app.route("/free_time")
def free_time():
	return

if __name__ == "__main__":
	app.run()
