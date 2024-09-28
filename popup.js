document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('protanopia').addEventListener('click', () => {
    applyFilter('protanopia');
  });

  document.getElementById('deuteranopia').addEventListener('click', () => {
    applyFilter('deuteranopia');
  });

  document.getElementById('tritanopia').addEventListener('click', () => {
    applyFilter('tritanopia');
  });

  document.getElementById('reset').addEventListener('click', () => {
    resetFilter();
  });
  document.getElementById('take-test-btn').addEventListener('click', () => {
    openTestPage();
  });
});

function applyFilter(type) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: enhanceColors,
      args: [type]
    });
  });
}



function resetFilter() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: resetColorEnhancement
    });
  });
}


function enhanceColors(type) {
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
function openTestPage() {
  const testPageUrl = 'https://enchroma.com/pages/test';  // TODO - Replace with test website once that is done 
  chrome.tabs.create({ url: testPageUrl });
}