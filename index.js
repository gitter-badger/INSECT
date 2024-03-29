var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var fs = require('fs');
var jparser = require("insect_json");

function insect(flags) {
	console.log(flags);
	if(flags.s || flags.string) {
		profanity_check(flags.s);
	}
	if(flags.f || flags.file) {
		readFile(flags.f);
	}
}

function profanity_check(msg) {
  var uri = "http://www.purgomalum.com/service/json?text=" + msg + "&add=input&fill_text=****";
  xhr.open('GET', uri, true);
  xhr.send();
  xhr.onreadystatechange = processRequest;
}

function processRequest(e) {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    var msg = response.result;
    console.log(msg);
	check_sensetivity(msg);
  }
}

function check_sensetivity(msg) {
  var contents = fs.readFileSync("./lib/sensetivity.json");
  var content = JSON.parse(contents);
	jparser.insect_json(content);
}

function readFile(filename) {
 	var succeed = false;
	try{
		var msg = fs.readFileSync(filename);
		succeed = true;
	}
	catch(err) {
		console.log("Could not find file");
	}

	if(succeed === true){
		profanity_check(msg);
	}
}

module.exports = insect;
