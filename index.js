var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var fs = require('fs');

function insect(flags) {
	console.log(flags);
	if(flags.s) {
		profanity_check(flags.s);
	}
	if(flags.f) {
		readFile(flags.f);
	}
}

function profanity_check(msg) {
  var uri = "http://www.purgomalum.com/service/json?text=" + msg + "&add=input&fill_text=****";
  xhr.open('GET', uri, true);
  xhr.send();
	console.log("check 12")
  xhr.onreadystatechange = processRequest;
}

function processRequest(e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var response = JSON.parse(xhr.responseText);
    var msg = response.result;
    console.log(msg);
	check_sensetivity(msg);
  }
}

function check_sensetivity(msg) {
  var contents = fs.readFileSync("lib/sensetivity.json");
	var content = JSON.parse(contents);

}

function readFile(filename) {
	try{
		var msg = fs.readFileSync(filename);
		profanity_check(msg);
	}
	catch(err) {
		console.log("Could not find file");
	}

}

module.exports = insect;
