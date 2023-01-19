# contains data operations and manipulations such as reads data from json/file, 
# gets rid of sets with null values what are not plotable

import json

# gets all data in the file
def readFileData():
    ignite_matrix_data = None
    with open('data.json') as data_file:
        ignite_matrix_data = json.load(data_file) 
    return ignite_matrix_data

# returns list of Provider name, EBIT margin, Share of wallter, Spend 
# without any nulls in the value
def getFixedEss(data):
    fixed_ess = []
    for idx, fss in enumerate(data["rows"][0]["values"]): # source of ESS
        fixed_set = []
        for item in fss:
            if item is None: # ignores ESS set with null
                break
            else:
                fixed_set.append(item)
        if len(fixed_set) == 3: # ignores incomplete set of ESS
            fixed_set.insert(0, data["columns"][idx]["key"]) # respective Provider name from column using the relevant index
            fixed_ess.append(fixed_set)

    return fixed_ess