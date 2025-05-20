from fastapi import FastAPI
from app.middleware import AuthMiddleware
from starlette.middleware import Middleware
from app import database, models

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

app.add_middleware(AuthMiddleware)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Book Review API"}



