// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'getScreenSources') {
//     chrome.desktopCapture.chooseDesktopMedia(
//       ['screen', 'window', 'tab'],
//       sender.tab,
//       (streamId) => {
//         if (streamId) {
//           sendResponse({ streamId: streamId });
//         } else {
//           sendResponse({ error: 'Failed to get stream sources' });
//         }
//       }
//     );
//     return true; // Indicates that the response is sent asynchronously
//   }
// });
// chrome.action.onClicked.addListener((tab) => {
//   chrome.tabs.create({ url: 'index.html' });
// });
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'startCapture') {
//     chrome.desktopCapture.chooseDesktopMedia(
//       ['screen', 'window', 'tab'], // Allow choosing screen, window, or tab
//       sender.tab, // Important: Use sender.tab to associate with the popup
//       (streamId) => {
//         if (streamId) {
//           sendResponse({ streamId: streamId });
//         } else {
//           sendResponse({ error: 'Failed to get stream sources' });
//         }
//       }
//     );

//     // Keep the connection open to send the response asynchronously
//     return true;
//   }
// });
chrome.action.onClicked.addListener((tab) => {
  chrome.windows.create({
    url: 'index.html',
    type: 'normal',
    width: 800,
    height: 600,
  });
});

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
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'resize') {
    chrome.windows.getCurrent((window) => {
      chrome.windows.update(window.id, {
        width: request.width,
        height: request.height,
      });
    });
  }
});
chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: 'index.html' });
});
