document.addEventListener('DOMContentLoaded', () => {
  // Attach event listeners for buttons
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
});

function applyFilter(type) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: setFilter,
      args: [type]
    });
  });
}

function resetFilter() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: removeFilter
    });
  });
}

// Injected functions for content script
function setFilter(type) {
  let filter = '';
  if (type === 'protanopia') {
    filter = 'grayscale(50%) sepia(100%) hue-rotate(-10deg)';
  } else if (type === 'deuteranopia') {
    filter = 'grayscale(50%) sepia(100%) hue-rotate(20deg)';
  } else if (type === 'tritanopia') {
    filter = 'grayscale(50%) sepia(100%) hue-rotate(170deg)';
  }
  document.documentElement.style.filter = filter;
}

function removeFilter() {
  document.documentElement.style.filter = 'none';
}
