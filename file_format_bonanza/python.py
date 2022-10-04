# JSON PARSER SKuppadubap
import json
from pprint import pprint

def parse_json():
    file = open("./text.json")
    data = json.load(file)
    file.close()
    return data

jsonHeman = parse_json()

pprint(jsonHeman)

