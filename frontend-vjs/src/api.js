baseUrl = 'http://127.0.0.1:8000'

export async function GetEss(){
    let response = await fetch(baseUrl + '/get_ess');

    let json = await response.json();

    AddEss();
    return json;
}

export async function AddEss(){
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