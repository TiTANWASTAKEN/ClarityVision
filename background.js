
chrome.commands.onCommand.addListener((command) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0].id;
  
      if (command === 'toggle-protanopia') {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          function: applyFilter,
          args: ['protanopia']
        });
      } else if (command === 'toggle-deuteranopia') {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          function: applyFilter,
          args: ['deuteranopia']
        });
      } else if (command === 'toggle-tritanopia') {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          function: applyFilter,
          args: ['tritanopia']
        });
      } else if (command === 'reset-filters') {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          function: resetColorEnhancement
        });
      }
    });
  });
  
  function applyFilter(type) {
    let filter = '';
    if (type === 'protanopia') {
      filter = 'contrast(1.5) hue-rotate(10deg)';
    } else if (type === 'deuteranopia') {
      filter = 'contrast(1.5) hue-rotate(-20deg)';
    } else if (type === 'tritanopia') {
      filter = 'contrast(1.5) hue-rotate(170deg)';
    }
    document.documentElement.style.filter = filter;
  }
  
  function resetColorEnhancement() {
    document.documentElement.style.filter = 'none';
  }

chrome.runtime.onInstalled.addListener(() => {
    console.log('Clarity Vision extension installed.');
  });
  