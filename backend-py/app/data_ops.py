import json

def readFileData():
    ignite_matrix_data = None
    with open('data.json') as data_file:
        ignite_matrix_data = json.load(data_file)
    return ignite_matrix_data


def getFixedEss(data):
    fixed_ess = []
    for fss in data["rows"][0]["values"]:
        fixed_set = []
        for item in fss:
            if item is None:
                break
            else:
                fixed_set.append(item)
        if len(fixed_set) == 3:
            fixed_ess.append(fixed_set)

    return fixed_ess