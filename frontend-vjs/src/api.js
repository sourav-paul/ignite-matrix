baseUrl = 'http://localhost:5000'

export async function GetEss(){
    let response = await fetch(baseUrl + '/getess');

    let json = await response.json();

    return json;
}