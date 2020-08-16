const URL = "http://localhost:3030"
export const getData = async (endpoint, method, dataBody, authorization) => {
    console.log(endpoint, method, dataBody, authorization);
    const obj = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": authorization || "",
        },
        method: method || 'GET',
    };
    if (dataBody)
        obj.body = JSON.stringify(dataBody)
    try {
        const res = await fetch(URL + '/' + endpoint, obj);
        return  await res.json();
    } catch (err) {
        return undefined;
    }
}

