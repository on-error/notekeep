chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed!');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'buttonClicked') {
    console.log('Button clicked in popup!');
    sendResponse({ message: 'Message received!' });
  }
});