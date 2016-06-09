function insect(msg, flags) {
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

module.exports = insect;
