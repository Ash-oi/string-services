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

function findAndReplace() {
  let body = document.getElementById('split-on-body').value;
  let character = document.getElementById('replace-on-character').value;
  let withCharacter = document.getElementById('replace-with-character').value;

  if (character.length === 0) {
    return false;
  } else {
    if (character.charAt(0) === '/') { // regex
      try {
        let last = character.charAt(character.length - 1)
        console.log(last)
        let cleanedRegex = character.replace(/\//g, '');
        console.log(cleanedRegex)
        if (last == '/') {
          let replaceRegex = new RegExp(cleanedRegex);
          console.log(replaceRegex);
          document.getElementById('split-on-body').value = body.replace(replaceRegex, withCharacter);
        } else {
          cleanedRegex = cleanedRegex.substring(0, cleanedRegex.length - 1);
          let replaceRegex = new RegExp(cleanedRegex, last);
          document.getElementById('split-on-body').value = body.replace(replaceRegex, withCharacter);
        }
      } catch (error) {
        alert("Not valid regex, or something else, who knows. ")
      }
    } else { // not regex
      let replaceRegex = new RegExp(character, 'g');
      document.getElementById('split-on-body').value = body.replace(replaceRegex, withCharacter);
    }  
  }
}

function jsonFormat() {
  let body = document.getElementById('split-on-body').value
  try {
    let parsedBody = JSON.parse(body)
    document.getElementById('split-on-body').value = JSON.stringify(parsedBody, null, 2)
  } catch (err) {
    alert("Invalid JSON (need quotes around keys etc.)");
  }
}