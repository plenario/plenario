from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_alembic import Alembic

app = Flask(__name__)
app.config.from_object('config')

db = SQLAlchemy(app)

alembic = Alembic()
alembic.init_app(app)

from app import views, models