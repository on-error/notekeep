document.getElementById('myButton').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { message: 'buttonClicked' }, (response) => {
      console.log('Response:', response);
    });
  });
});