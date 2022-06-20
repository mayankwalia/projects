from flask import Flask,render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')


@app.route("/SC")
def course1():
    return render_template('systemCommands.html')


@app.route("/MAD1")
def course2():
    return render_template('mad1.html')

@app.route("/DBMS")
def course3():
    return render_template('dbms.html')


if __name__=='__main__':
    app.run(debug=True)