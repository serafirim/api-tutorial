export function getList() {
    try {
        return fetch('http://localhost:3333/list')
            .then(data => data.json())
    } catch (err) {
        console.log("Error: ", err)
    }
}

export function setItem(item) {
    try {
        return fetch('http://localhost:3333/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ item })
        })
    } catch(err) {
        console.log("Error: ", err)
    }
}