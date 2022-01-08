
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
show_snapshot(request.dataUrl);
});


function show_snapshot(dataUrl) {
chrome.tabs.create({
  url: dataUrl,
  active: false
});
}