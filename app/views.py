from flask import render_template
from app import app

@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html", title='Home')

@app.route('/senators')
def senators():
    user = {'nickname': 'Ana'}  # fake user
    senators = [  # array of senators
        {
            'senator': {'nickname': 'Acir Gurgacz'},
            'party': 'PDT-RO'
        },
        {
            'senator': {'nickname': 'Aécio Neves'},
            'party': 'PSDB-MG'
        }
    ]
    return render_template("senators.html", title='Senadores', senators=senators)

@app.route('/propositions')
def propositions():
    return render_template("propositions.html", title='Proposições')

@app.route('/about')
def about():
    return render_template("about.html", title='Sobre')