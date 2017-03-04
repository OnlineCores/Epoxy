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
//var theProtocol = parsed_url.protocol; //         http
//var theSubdomain = parsed_url.subdomain; //       subdomain
var theHost = parsed_url.host; //                 example
var theTld = parsed_url.tld; //                   com
//var thePath = parsed_url.path; //                 path/to/directory
//var theDomain = parsed_url.domain; //             subdomain.example.com
var theFirstChar = parsed_url.host.charAt(0); //  e

//var pathToLocalCssFile = chrome.extension.getURL("stylesheet.css"); // "chrome-extension://pluginID/stylesheet.css"
var pathToExternalCssFile = "https://raw.githubusercontent.com/OnlineCores/Epoxy/master/tld/" + theTld + slash + theHost + dot + css;
//var pathToDomainListFile = "https://raw.githubusercontent.com/OnlineCores/Epoxy/master/src/css/" + theTld + slash + theFirstChar + slash + "list.txt";

var fileExists = LinkCheck(pathToExternalCssFile);



//   ___ _           _     _  __    __ _ _               _    _
//  / __| |_  ___ __| |__ (_)/ _|  / _(_) |___   _____ _(_)__| |_ ___
// | (__| ' \/ -_) _| / / | |  _| |  _| | / -_) / -_) \ / (_-<  _(_-<
//  \___|_||_\___\__|_\_\ |_|_|   |_| |_|_\___| \___/_\_\_/__/\__/__/
//
//
function LinkCheck(url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  return http.status != 404;
}

if (fileExists == true) {
  readTextFile(pathToExternalCssFile);
  //addElementToHead(pathToExternalCssFile, css);
}



//    _      _    _              ___      _          ___                ___
//   /_\  __| |__| |  __ ______ / (_)___ | |_ ___   / / |_  ___ __ _ __| \ \
//  / _ \/ _` / _` | / _(_-<_-</ /| (_-< |  _/ _ \ < <| ' \/ -_) _` / _` |> >
// /_/ \_\__,_\__,_| \__/__/__/_/_/ /__/  \__\___/  \_\_||_\___\__,_\__,_/_/
//                              |__/
//

function addElementToHead(filepath, filetype) {
  if (filetype == js) {
    var fileref = document.createElement('script')
    fileref.setAttribute("type", "text/javascript")
    fileref.setAttribute("src", filepath)
    alert('called');
  } else if (filetype == css) {
    var fileref = document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", filepath)
  }
  if (typeof fileref != "undefined")
    document.getElementsByTagName("head")[0].appendChild(fileref)
}







//   ___     _        _                _        _ _    _
//  / __|___| |_   __| |___ _ __  __ _(_)_ _   | (_)__| |_
// | (_ / -_)  _| / _` / _ \ '  \/ _` | | ' \  | | (_-<  _|
//  \___\___|\__| \__,_\___/_|_|_\__,_|_|_||_| |_|_/__/\__|
//
//
function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        /*intoArray(allText);*/
        document.querySelector('head').innerHTML += '<style rel="stylesheet" type="text/css" id="epoxy-extension">' + allText + '</style>';
      }
    }
  }
  rawFile.send(null);
}

/*function intoArray(lines) {
  var lineArr = lines.split('\n');
  if (lineArr.length > 0) {
    findDomain(lineArr);
  } else {

  }
}

function checkDomain(domain) {
  return domain == theHost;
}

function findDomain(listedDomains) {
  var sss = listedDomains.find(checkDomain);
  alert(sss);
}*/