function random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function request(url, headers=[], callback) {
    let req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        callback(req)
    };

    req.open("GET", url, true);


    for (let i = 0; i < headers.length; i+=2) {
        let name = headers[i];
        let value = headers[i+1];

        req.setRequestHeader(name, value);
    }

    req.send()
}