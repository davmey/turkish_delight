document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('GetTurkishDelightButton');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://www.davmey.com';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);

var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('edmond.js');
s.onload = function() {
    console.log("onload working");
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
