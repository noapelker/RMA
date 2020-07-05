export const KEY_IN_JSON = 0;
export const VAL_IN_JSON = 1;
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
