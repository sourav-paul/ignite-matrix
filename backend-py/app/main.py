from fastapi import FastAPI
import json
import data_ops, cors
from models import Ess

app = FastAPI()
cors.addCors(app)

ignite_matrix_data = data_ops.readFileData()
fixed_ess = data_ops.getFixedEss(ignite_matrix_data)

@app.get("/get_matrix_data")
def get_matrix_data():
    return ignite_matrix_data

@app.get("/get_ess")
def get_ess():
    return fixed_ess

@app.post("/add_ess/")
async def add_ess(ess : Ess):
    fixed_ess.append([ess.EbitMargin, ess.ShapeOfWallet, ess.Spend])
    return ess

