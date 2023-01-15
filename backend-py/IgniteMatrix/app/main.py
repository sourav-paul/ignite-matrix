from fastapi import FastAPI
import json
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [ "http://127.0.0.1:1234", "http://localhost:1234"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ignite_matrix_data = None
fixed_fss = []

with open('data.json') as data_file:
  ignite_matrix_data = json.load(data_file)

  for fss in ignite_matrix_data["rows"][0]["values"]:
    fixed_set = []
    for item in fss:
        if item is None:
            break
        else:
            fixed_set.append(item)

    if len(fixed_set) == 3:
        fixed_fss.append(fixed_set)

@app.get("/get_matrix_data")
def get_matrix_data():
    return ignite_matrix_data

@app.get("/get_ess")
def get_fss():
    return fixed_fss
