function splitString(){
  let body = document.getElementById('split-on-body').value;
  let character = document.getElementById('split-on-character').value;
  let str = '';
  body.split(character).map(param => str += param+'\n')
  document.getElementById('split-on-body').value = str;
}

function urlDecode() {
  document.getElementById('split-on-body').value = decodeURIComponent(document.getElementById('split-on-body').value);
}