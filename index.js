var cli = require('commander');

cli
  .option('-s, --string <str>', 'Detect all types of language from a given string')
  .option('-f, --file <file>', 'Detect all types of language from a given file')
  .parse(process.argv);
 
if (cli.string) insect(cli.string);
if(cli.file) readFile(cli.file);

function insect(msg) {
	console.log(msg)
}

function profanity_check(msg) {
  var xhr = new XMLHttpRequest();
  var uri = parse("http://www.purgomalum.com/service/json?text=%s&add=input&fill_text=****", msg);
  xhr.open('GET', uri, true);
  xhr.send()
  xhr.onreadystatechange = processRequest;
}

function processRequest(e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var response = JSON.parse(xhr.responseText);
    msg = response.result;

    insect(msg);
  }
}

function parse(str) {
  var args = [].slice.call(arguments, 1),
    i = 0;

  return str.replace(/%s/g, function() {
    return args[i++];
  });
}

function readFile(filename) {
	
}

module.exports = insect;
