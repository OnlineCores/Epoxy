//  ___ _        _             _          __                _      _    _
// | __(_)_ _ __| |_   ___ ___| |_   ___ / _| __ ____ _ _ _(_)__ _| |__| |___ ___
// | _|| | '_(_-<  _| (_-</ -_)  _| / _ \  _| \ V / _` | '_| / _` | '_ \ / -_|_-<
// |_| |_|_| /__/\__| /__/\___|\__| \___/_|    \_/\__,_|_| |_\__,_|_.__/_\___/__/
//
//
var dot = ".";
var slash = "/";
var css = "css";
var js = "js";

var currentDomain = document.domain.toString().toLowerCase(); // get the domain name you visiting, with sub if exists
var currentUrl = document.location.toString().toLowerCase(); // get full url string that you are visiting, including path

//  ___  _                           _    _ _             _   _          _   _ ___ _
// |   \(_)___ __ _ ______ ___ _ __ | |__| (_)_ _  __ _  | |_| |_  ___  | | | | _ \ |
// | |) | (_-</ _` (_-<_-</ -_) '  \| '_ \ | | ' \/ _` | |  _| ' \/ -_) | |_| |   / |__
// |___/|_/__/\__,_/__/__/\___|_|_|_|_.__/_|_|_||_\__, |  \__|_||_\___|  \___/|_|_\____|
//                                                |___/
//
function parseURL(url) {
  parsed_url = {}

  if (url == null || url.length == 0)
    return parsed_url;

  protocol_i = url.indexOf('://');
  parsed_url.protocol = url.substr(0, protocol_i);

  remaining_url = url.substr(protocol_i + 3, url.length);
  domain_i = remaining_url.indexOf(slash);
  domain_i = domain_i == -1 ? remaining_url.length - 1 : domain_i;
  parsed_url.domain = remaining_url.substr(0, domain_i);
  parsed_url.path = domain_i == -1 || domain_i + 1 == remaining_url.length ? null : remaining_url.substr(domain_i + 1, remaining_url.length);

  domain_parts = parsed_url.domain.split(dot);
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
      parsed_url.tld = domain_parts[2] + dot + domain_parts[3];
      break;
  }

  parsed_url.parent_domain = parsed_url.host + dot + parsed_url.tld;

  return parsed_url;
}
parseURL(currentUrl); // outputs listed below:


//   ___                     _           _          __                _      _    _        
//  / __| ___ __ ___ _ _  __| |  ___ ___| |_   ___ / _| __ ____ _ _ _(_)__ _| |__| |___ ___
//  \__ \/ -_) _/ _ \ ' \/ _` | (_-</ -_)  _| / _ \  _| \ V / _` | '_| / _` | '_ \ / -_|_-<
//  |___/\___\__\___/_||_\__,_| /__/\___|\__| \___/_|    \_/\__,_|_| |_\__,_|_.__/_\___/__/
//
//
//  http://subdomain.example.com/path/to/directory
var theProtocol = parsed_url.protocol; //         http
var theSubdomain = parsed_url.subdomain; //       subdomain
var theHost = parsed_url.host; //                 example
var theTld = parsed_url.tld; //                   com
var thePath = parsed_url.path; //                 path/to/directory
var theDomain = parsed_url.domain; //             subdomain.example.com
var theFirstChar = parsed_url.host.charAt(0); //  e

var pathToLocalCssFile = chrome.extension.getURL("stylesheet.css"); // "chrome-extension://pluginID/stylesheet.css"
var pathToExternalCssFile = "https://raw.githubusercontent.com/OnlineCores/Epoxy/master/src/css/" + theTld + slash + theFirstChar + slash + theHost + dot + css;
var pathToDomainListFile = "https://raw.githubusercontent.com/OnlineCores/Epoxy/master/src/css/" + theTld + slash + theFirstChar + slash + "list.txt";


/*
alert(theDomain);
alert(theSubdomain);
alert(theHost);
alert(theTld);
alert(thePath);
alert(theDomain);
alert(theFirstChar);
alert(pathToDomainListFile);
alert(pathToExternalCssFile);
alert(pathToLocalCssFile);
*/



/*
function checkDomain(domain) {
  return domain == bar;
}

function findDomain() {
  alert(listedDomains.find(checkDomain));
}
window.onload = findDomain()
*/


/*var domain_array = lineArr;



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







window.onload = alert(listedDomain);
*/





//     _       _     _                   ___       _           ___                    ___  
//    / \   __| | __| |   ___ ___ ___   / (_)___  | |_ ___    / / |__   ___  __ _  __| \ \ 
//   / _ \ / _` |/ _` |  / __/ __/ __| / /| / __| | __/ _ \  / /| '_ \ / _ \/ _` |/ _` |\ \
//  / ___ \ (_| | (_| | | (__\__ \__ \/ / | \__ \ | || (_) | \ \| | | |  __/ (_| | (_| |/ /
// /_/   \_\__,_|\__,_|  \___|___/___/_/ _/ |___/  \__\___/   \_\_| |_|\___|\__,_|\__,_/_/ 
//                                      |__/
//
function addElementToHead(filename, filetype) { // call function = addElementToHead("filepath", "css" or "js")
  if (filetype == js) {
    var fileref = document.createElement('script')
    fileref.setAttribute("type", "text/javascript")
    fileref.setAttribute("src", filename)
    alert('called');
  } else if (filetype == css) {
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
if (domainID == "google.se") {
  addElementToHead(pathToLocalCssFile, css)
  //alert("if");

} else {
  addElementToHead(pathToGeneralCssFile, css)
  //alert("else");

}