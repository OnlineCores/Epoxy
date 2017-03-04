/*// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
  // Send a message to the active tab
  chrome.tabs.insertCSS("https://raw.githubusercontent.com/OnlineCores/Epoxy/master/tld/se/fotbollskanalen.css")
});*/




/*var loadDeferredStyles = function () {
  var addStylesNode = document.getElementById("deferred-styles");
  var replacement = document.createElement("div");
  replacement.innerHTML = addStylesNode.textContent;
  document.body.appendChild(replacement)
  addStylesNode.parentElement.removeChild(addStylesNode);
};
var raf = requestAnimationFrame || mozRequestAnimationFrame ||
  webkitRequestAnimationFrame || msRequestAnimationFrame;
if (raf) raf(function () {
  window.setTimeout(loadDeferredStyles, 0);
});
else window.addEventListener('load', loadDeferredStyles);*/

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'loading') {

    // do your things

  }
})