function splitString() {
  let body = document.getElementById('split-on-body').value;
  let character = document.getElementById('split-on-character').value;
  if (character.length === 0) {
    return false;
  } else {
    let str = '';
    body.split(character).map(param => str += param+'\n')
    document.getElementById('split-on-body').value = str;
  }
}

function urlDecode() {
  document.getElementById('split-on-body').value = decodeURIComponent(document.getElementById('split-on-body').value);
}

function urlEncode() {
  document.getElementById('split-on-body').value = encodeURIComponent(document.getElementById('split-on-body').value);
}

function base64Encode() {
  document.getElementById('split-on-body').value = btoa(document.getElementById('split-on-body').value);
}

function base64Decode() {
  document.getElementById('split-on-body').value = atob(document.getElementById('split-on-body').value);
}