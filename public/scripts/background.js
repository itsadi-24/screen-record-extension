chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getScreenSources') {
    chrome.desktopCapture.chooseDesktopMedia(
      ['screen', 'window', 'tab'],
      sender.tab,
      (streamId) => {
        if (streamId) {
          sendResponse({ streamId: streamId });
        } else {
          sendResponse({ error: 'Failed to get stream sources' });
        }
      }
    );
    return true; // Indicates that the response is sent asynchronously
  }
});
