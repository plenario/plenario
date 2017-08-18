from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('config')

db = SQLAlchemy(app)

alembic = Alembic()
alembic.init_app(app)

from app import views, models