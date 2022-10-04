from fastapi import FastAPI
import json
from pprint import pprint

def parse_json():
    file = open("./text.json")
    data = json.load(file)
    file.close()
    return data

jsonHeman = parse_json()

app = FastAPI()

@app.get("/")
def read_root():
    return parse_json();