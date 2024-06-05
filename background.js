chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'IS_WORDPRESS') {
      if (message.isWordPress) {
        chrome.action.setIcon({ path: "icon.png", tabId: sender.tab.id });
        chrome.action.setTitle({ title: "This site is using WordPress", tabId: sender.tab.id });
      } else {
        chrome.action.setIcon({ path: "icon-inactive.png", tabId: sender.tab.id });
        chrome.action.setTitle({ title: "This site is not using WordPress", tabId: sender.tab.id });
      }
    }
  });
  