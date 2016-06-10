function insect(msg, flags) {
	console.log(flags);
	var parsedFlags = JSON.parse(flags);
	if(parsedFlags.s == "true") {
		profanity_check(msg);
		console.log(msg);
	}
}
	
function profanity_check(msg) {
  var xhr = new XMLHttpRequest();
  var uri = "http://www.purgomalum.com/service/json?text=" + msg + "&add=input&fill_text=****";
  xhr.open('GET', uri, true);
  xhr.send()
  xhr.onreadystatechange = processRequest;
}

function processRequest(e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var response = JSON.parse(xhr.responseText);
    msg = response.result;

    return(msg);
  }
}

function readFile(filename) {
	
}

module.exports = insect;
