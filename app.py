from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
tasks = []

@app.route('/')
def index():
    return render_template('index.html', tasks=tasks)

@app.route('/add', methods=['POST'])
def add_task():
    task = request.form['task']
    if task:
        tasks.append(task)
    return jsonify(tasks=tasks)

@app.route('/remove', methods=['POST'])
def remove_task():
    task = request.form['task']
    if task in tasks:
        tasks.remove(task)
    return jsonify(tasks=tasks)

if __name__ == '__main__':
    app.run(debug=True)
