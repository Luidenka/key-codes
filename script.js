document.body.addEventListener('keydown', (e) => {
    if (e.key = "") {
        document.getElementById('key').innerText = " ";
        document.getElementById('key-table').innerText = " ";
    } else {
        document.getElementById('key').innerText = e.key;
        document.getElementById('key-table').innerText = e.key;
    }
    document.getElementById('keyCode').innerText = e.keyCode;
    document.getElementById('code').innerText = e.code;
    document.getElementById('location').innerText = e.location;
})