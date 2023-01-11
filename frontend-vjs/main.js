

baseUrl = 'http://localhost:5000'

async function GetEss(){
    let response = await fetch(baseUrl + '/getess')

    let json = await response.json()

    console.log(json)
}

GetEss()

