baseUrl = 'http://127.0.0.1:8000'

export async function GetEss(){
    let response = await fetch(baseUrl + '/get_ess');

    let json = await response.json();

    return json;
}