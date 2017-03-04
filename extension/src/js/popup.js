// ███████╗████████╗███████╗██████╗      ██╗
// ██╔════╝╚══██╔══╝██╔════╝██╔══██╗    ███║
// ███████╗   ██║   █████╗  ██████╔╝    ╚██║
// ╚════██║   ██║   ██╔══╝  ██╔═══╝      ██║
// ███████║   ██║   ███████╗██║          ██║
// ╚══════╝   ╚═╝   ╚══════╝╚═╝          ╚═╝
//
// Declare the stylesheet as a variable 
/*var pathToStylesheet = chrome.extension.getURL("src/css/stylesheet.css");
// Send the created variable to a function, `readStylesheet()'
window.onload = readStylesheet(pathToStylesheet);
*/



// ███████╗████████╗███████╗██████╗     ██████╗
// ██╔════╝╚══██╔══╝██╔════╝██╔══██╗    ╚════██╗
// ███████╗   ██║   █████╗  ██████╔╝     █████╔╝
// ╚════██║   ██║   ██╔══╝  ██╔═══╝     ██╔═══╝
// ███████║   ██║   ███████╗██║         ███████╗
// ╚══════╝   ╚═╝   ╚══════╝╚═╝         ╚══════╝
//
// The function is called and it start reading the stylesheet that you pased in
// and declare all code in stylesheet into the `allCode' variable.
// Then is the insertText function called and we send the `allCode' var along with it
function readStylesheet(stylesheet) {
  var rawCode = new XMLHttpRequest();
  rawCode.open("GET", stylesheet, false);
  rawCode.onreadystatechange = function () {
    if (rawCode.readyState === 4) {
      if (rawCode.status === 200 || rawCode.status == 0) {
        var allCode = rawCode.responseText;
        insertText(allCode);
      }
    }
  }
  rawCode.send(null);
}



// ███████╗████████╗███████╗██████╗     ██████╗
// ██╔════╝╚══██╔══╝██╔════╝██╔══██╗    ╚════██╗
// ███████╗   ██║   █████╗  ██████╔╝     █████╔╝
// ╚════██║   ██║   ██╔══╝  ██╔═══╝      ╚═══██╗
// ███████║   ██║   ███████╗██║         ██████╔╝
// ╚══════╝   ╚═╝   ╚══════╝╚═╝         ╚═════╝
//
// This function are going to write down all code 
// between the <pre id="css-code"></pre> elements.
function insertText(text) {
  document.getElementById('css-code').innerHTML = text;
}



// ███████╗████████╗███████╗██████╗     ██╗  ██╗
// ██╔════╝╚══██╔══╝██╔════╝██╔══██╗    ██║  ██║
// ███████╗   ██║   █████╗  ██████╔╝    ███████║
// ╚════██║   ██║   ██╔══╝  ██╔═══╝     ╚════██║
// ███████║   ██║   ███████╗██║              ██║
// ╚══════╝   ╚═╝   ╚══════╝╚═╝              ╚═╝
//
//    _          
//   /_\  __ ___ 
//  / _ \/ _/ -_)
// /_/ \_\__\___|
//
// http://stackoverflow.com/questions/8963855/how-do-i-get-value-from-ace-editor
ace.require("ace/ext/language_tools");
var editor = ace.edit("css-code");
editor.setTheme("ace/theme/epoxy");
editor.session.setMode("ace/mode/css");
// Custom settings
editor.setOptions({
  fontFamily: "Roboto Mono",
  fontSize: "12pt",
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true
});
editor.getSession().setTabSize(2);
editor.getSession().setUseWrapMode(true);
// Search
editor.find('needle', {
  backwards: false,
  wrap: false,
  caseSensitive: false,
  wholeWord: false,
  regExp: false
});
editor.findNext();
editor.findPrevious();
editor.getSession().setUseWorker(false);


var newCode = editor.getValue();
var preCode = document.getElementById("css-code").innerHTML;


function saveDoc() {
  chrome.fileSystem.getWritableEntry(chosenFileEntry, function (writableFileEntry) {
    writableFileEntry.createWriter(function (writer) {
      writer.onerror = errorHandler;
      writer.onwriteend = callback;

      chosenFileEntry.file(function (file) {
        writer.write(file);
      });
    }, errorHandler);
  });
}


//document.getElementById('update').addEventListener('click', saveDoc());


// DateTime
/*function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}*/
/*var date = new Date();
date.toLocaleString('en-US')*/
//http://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format