function splitString() {
  let body = document.getElementById('input-body').value;
  let character = document.getElementById('split-on-character').value;
  let isRegex = document.getElementById("split-regex").checked;
  let str = '';

  if (character.length === 0) {
    return false;
  } else if (isRegex) {
    try {
      let splitRegex = new RegExp(character, 'g');
      body.split(splitRegex).map(param => str += param+'\n')
      document.getElementById('input-body').value = str;
    } catch (error) {
      alert("Not valid regex, or something else, who knows. ")
    }
  } else {
    body.split(character).map(param => str += param+'\n')
    document.getElementById('input-body').value = str;
  }
  copyStuff();
}

function copyStuff() {
  document.getElementById("input-body").select();
  document.execCommand("Copy");
  document.getElementById("copy").innerHTML = "Copied!";
  setTimeout(function() {
    document.getElementById("copy").innerHTML = "";
  }, 1000);
}

function urlDecode() {
  document.getElementById('input-body').value = decodeURIComponent(document.getElementById('input-body').value);
  copyStuff();
}

function urlEncode() {
  document.getElementById('input-body').value = encodeURIComponent(document.getElementById('input-body').value);
  copyStuff();
}

function base64Encode() {
  document.getElementById('input-body').value = btoa(document.getElementById('input-body').value);
  copyStuff();
}

function base64Decode() {
  document.getElementById('input-body').value = atob(document.getElementById('input-body').value);
  copyStuff();
}

function isThisRegex(string) {
  try {
    let test = new RegExp(string)
  } catch (error) {
    return false;
  }
  return true;
}


function findAndReplace() {
  let body = document.getElementById('input-body').value;
  let character = document.getElementById('replace-on-character').value;
  let withCharacter = document.getElementById('replace-with-character').value;
  let isRegex = document.getElementById("replace-regex").checked;

  if (character.length === 0) {
    return false;
  } else {
    if (isRegex) { // regex
      try {
        let replaceRegex = new RegExp(character, 'g');
        document.getElementById('input-body').value = body.replace(replaceRegex, withCharacter);
      } catch (error) {
        alert("Not valid regex, or something else, who knows. ")
      }
    } else { // not regex
      let replaceRegex = new RegExp(character, 'g');
      document.getElementById('input-body').value = body.replace(replaceRegex, withCharacter);
    }  
  }
  copyStuff();
}

function jsonFormat() {
  let body = document.getElementById('input-body').value
  try {
    let parsedBody = JSON.parse(body)
    document.getElementById('input-body').value = JSON.stringify(parsedBody, null, 2)
  } catch (err) {
    alert("Invalid JSON (need quotes around keys etc.)");
  }
  copyStuff();
}

//https://api.github.com/repos/AshleyMcVeigh/string-services/commits

function loadLastCommit() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/repos/AshleyMcVeigh/string-services/commits');
  xhr.onload = function() {
    if (xhr.status === 200) {
      const parsed = JSON.parse(xhr.response)
      let date = new Date(parsed[0].commit.committer.date)
      let dateDisplay = document.getElementById('lastUpdate')
      dateDisplay.innerText = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      dateDisplay.href = parsed[0].html_url;
    }
    else {
      alert('Request failed.  Returned status of ' + xhr.status);
    }
  };
  xhr.send();
}

