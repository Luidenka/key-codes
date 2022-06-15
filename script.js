document.body.addEventListener('keydown', (e) => {
    document.getElementById('key').innerText = e.key;
    document.getElementById('key-table').innerText = e.key;
    document.getElementById('keyCode').innerText = e.keyCode;
    document.getElementById('code').innerText = e.code;
    document.getElementById('location').innerText = e.location;
})