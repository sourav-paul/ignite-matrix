// base url for the API endpoints
baseUrl = 'http://127.0.0.1:8000'

// gets the ESS data from endpoint
export async function getEss(){
    let response = await fetch(baseUrl + '/get_ess'); // fetch get request with base and resource path
    let json = await response.json(); // converts the response to oprateable json
    return json; 
}

// extra method for future extension
// adds to the ESS data with a fetch post request
export async function addEss(){
    let newData = {
        EbitMargin: Math.random() / 100,
        ShapeOfWallet: Math.random() / 100,
        Spend: Math.random() * 100000
    };
      
    let response = await fetch(baseUrl +'/add_ess/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newData)
    });
      
    let result = await response.json();
    console.log(result.message);
}