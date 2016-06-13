var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

function insect(flags) {
	console.log(flags);
	if(flags.s) {
		profanity_check(flags.s);
	}
}
	
function profanity_check(msg) {
  var uri = "http://www.purgomalum.com/service/json?text=" + msg + "&add=input&fill_text=****";
  xhr.open('GET', uri, true);
  xhr.send();
  xhr.onreadystatechange = processRequest;
}

function processRequest(e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var response = JSON.parse(xhr.responseText);
    var msg = response.result;
    console.log(msg);
  }
}

function readFile(filename) {
	
}

module.exports = insect;
