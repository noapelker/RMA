const URL="http://localhost:3030"

export const getData = (endpoint, method, dataBody, authorization) => fetch(URL + '/' + endpoint, {
    headers: {
        "Content-Type": "application/json",
        "Authorization": authorization || ""
    },
    method: method || 'GET',
    body: JSON.stringify(dataBody)
}).then(response => {
    return response.json()

}).catch(err => console.log(dataBody, err));
