//  ____  _                                  _     _ _               _   _            _   _ ____  _     
// |  _ \(_)___  __ _ ___ ___  ___ _ __ ___ | |__ | (_)_ __   __ _  | |_| |__   ___  | | | |  _ \| |    
// | | | | / __|/ _` / __/ __|/ _ \ '_ ` _ \| '_ \| | | '_ \ / _` | | __| '_ \ / _ \ | | | | |_) | |    
// | |_| | \__ \ (_| \__ \__ \  __/ | | | | | |_) | | | | | | (_| | | |_| | | |  __/ | |_| |  _ <| |___ 
// |____/|_|___/\__,_|___/___/\___|_| |_| |_|_.__/|_|_|_| |_|\__, |  \__|_| |_|\___|  \___/|_| \_\_____|
//                                                           |___/
//
function parseURL(url) {
  parsed_url = {}

  if (url == null || url.length == 0)
    return parsed_url;

  protocol_i = url.indexOf('://');
  parsed_url.protocol = url.substr(0, protocol_i);

  remaining_url = url.substr(protocol_i + 3, url.length);
  domain_i = remaining_url.indexOf('/');
  domain_i = domain_i == -1 ? remaining_url.length - 1 : domain_i;
  parsed_url.domain = remaining_url.substr(0, domain_i);
  parsed_url.path = domain_i == -1 || domain_i + 1 == remaining_url.length ? null : remaining_url.substr(domain_i + 1, remaining_url.length);

  domain_parts = parsed_url.domain.split('.');
  switch (domain_parts.length) {
    case 2:
      parsed_url.subdomain = null;
      parsed_url.host = domain_parts[0];
      parsed_url.tld = domain_parts[1];
      break;
    case 3:
      parsed_url.subdomain = domain_parts[0];
      parsed_url.host = domain_parts[1];
      parsed_url.tld = domain_parts[2];
      break;
    case 4:
      parsed_url.subdomain = domain_parts[0];
      parsed_url.host = domain_parts[1];
      parsed_url.tld = domain_parts[2] + '.' + domain_parts[3];
      break;
  }

  parsed_url.parent_domain = parsed_url.host + '.' + parsed_url.tld;

  return parsed_url;
}

var currentDomain = document.domain.toString().toLowerCase(); // get the domain name, with sub if exists
var currentUrl = document.location.toString().toLowerCase(); // get full url string, including path
var dot = "."; // just being lazy

parseURL(currentUrl); // outputs listed below:
// parsed_url.protocol  = http
// parsed_url.subdomain = subdomain
// parsed_url.host      = example
// parsed_url.tld       = com
// parsed_url.path      = path/to/directory
// parsed_url.domain    = subdomain.example.com


//  ____       _                     _       _     _           
// / ___|  ___| |_  __   ____ _ _ __(_) __ _| |__ | | ___  ___ 
// \___ \ / _ \ __| \ \ / / _` | '__| |/ _` | '_ \| |/ _ \/ __|
//  ___) |  __/ |_   \ V / (_| | |  | | (_| | |_) | |  __/\__ \
// |____/ \___|\__|   \_/ \__,_|_|  |_|\__,_|_.__/|_|\___||___/
//
//
var firstChar = parsed_url.host.charAt(0) + "/" // "e/"
var domainID = parsed_url.host + dot + parsed_url.tld // "example.com"
var pathToGeneralCssFile = chrome.extension.getURL("general.css"); // "chrome-extension://pluginID/general.css"
var pathToLocalCssFile = chrome.extension.getURL("dist/styles/" + firstChar + domainID + dot + "min.css"); // "chrome-extension://pluginID/dist/styles/e/example.com.min.css"
var pathToExternalCssFile = "https://github.com/OnlineCores/browser-extension/tree/master/src/styles/" + firstChar + domainID + dot + "css" // "https://github.com/OnlineCores/browser-extension/tree/master/src/styles/e/example.com.css"

var listedDomain


//     _       _     _                   ___       _           ___                    ___  
//    / \   __| | __| |   ___ ___ ___   / (_)___  | |_ ___    / / |__   ___  __ _  __| \ \ 
//   / _ \ / _` |/ _` |  / __/ __/ __| / /| / __| | __/ _ \  / /| '_ \ / _ \/ _` |/ _` |\ \
//  / ___ \ (_| | (_| | | (__\__ \__ \/ / | \__ \ | || (_) | \ \| | | |  __/ (_| | (_| |/ /
// /_/   \_\__,_|\__,_|  \___|___/___/_/ _/ |___/  \__\___/   \_\_| |_|\___|\__,_|\__,_/_/ 
//                                      |__/
//
function addElementToHead(filename, filetype) { // call function = addElementToHead("filepath", "css" or "js")
  if (filetype == "js") {
    var fileref = document.createElement('script')
    fileref.setAttribute("type", "text/javascript")
    fileref.setAttribute("src", filename)
    alert('called');
  } else if (filetype == "css") {
    var fileref = document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", filename)
  }
  if (typeof fileref != "undefined")
    document.getElementsByTagName("head")[0].appendChild(fileref)
}


//  ____                _                       _  __ _         ____ ____ ____  
// |  _ \ ___  __ _  __| |  ___ _ __   ___  ___(_)/ _(_) ___   / ___/ ___/ ___| 
// | |_) / _ \/ _` |/ _` | / __| '_ \ / _ \/ __| | |_| |/ __| | |   \___ \___ \ 
// |  _ <  __/ (_| | (_| | \__ \ |_) |  __/ (__| |  _| | (__  | |___ ___) |__) |
// |_| \_\___|\__,_|\__,_| |___/ .__/ \___|\___|_|_| |_|\___|  \____|____/____/ 
//                             |_|
//
// if current top domain is in the list, then run css document that match that domain
if (domainID == "google.com") {
  addElementToHead(pathToLocalCssFile, "css")
  //  alert("if");

} else {
  addElementToHead(pathToGeneralCssFile, "css")
  //  alert("else");

}


var domain_array = lineArr;

function domain_check(age) {
  return age == domainID;
}
var qwe = ages.find(domain_check)


function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        alert(allText);
      }
    }
  }
  rawFile.send(null);
}

function intoArray(lines) {
  // splitting all text data into array "\n" is splitting data from each new line
  //and saving each new line as each element*

  var lineArr = lines.split('\n');

  //just to check if it works output lineArr[index] as below
  alert(lineArr[1]);
  alert(lineArr[2]);

}

window.onload = readTextFile('bar.txt');