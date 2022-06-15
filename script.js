document.body.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key == "") {
        document.getElementById('key').innerHTML = "<span style='color: white'>space</span>";
        document.getElementById('key-table').innerHTML = "<span style='color: white'>space</span>";
    } else {
        document.getElementById('key').innerText = e.key;
        document.getElementById('key-table').innerText = e.key;
    }
    document.getElementById('keyCode').innerText = e.keyCode;
    document.getElementById('code').innerText = e.code;
    document.getElementById('location').innerText = e.location;
})