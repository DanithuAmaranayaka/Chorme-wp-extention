// popup.js
document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function: () => document.body.innerHTML.includes('wp-content') || document.body.innerHTML.includes('wp-includes')
        },
        (results) => {
          const isWordPress = results[0].result;
          document.getElementById('status').textContent = isWordPress ? 'This site is using WordPress' : 'This site is not using WordPress';
        }
      );
    });
  });
  