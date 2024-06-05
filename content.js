(() => {
    let isWordPress = false;
  
    // Check common WordPress indicators
    if (document.querySelector('meta[name="generator"][content*="WordPress"]')) {
      isWordPress = true;
    }
  
    // Check for wp-content or wp-includes in the page source
    if (document.body.innerHTML.includes('wp-content') || document.body.innerHTML.includes('wp-includes')) {
      isWordPress = true;
    }
  
    // Send a message to the background script with the result
    chrome.runtime.sendMessage({ type: 'IS_WORDPRESS', isWordPress: isWordPress });
  })();
  