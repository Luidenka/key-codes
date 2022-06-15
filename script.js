document.body.addEventListener('keypress', (e) => {
    document.getElementById('key').innerText = e.key;
    document.getElementById('keyCode').innerText = e.keyCode;
    document.getElementById('code').innerText = e.code;
    document.getElementById('location').innerText = e.location;
})