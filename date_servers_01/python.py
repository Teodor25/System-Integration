from fastapi import FastAPI
from datetime import datetime
import requests

app = FastAPI()

@app.get("/timestamp")
def read_root():
    return datetime.now().isoformat()

@app.get("/return")
def read_root():
    return requests.get('http://localhost:6969/timestamp').json()