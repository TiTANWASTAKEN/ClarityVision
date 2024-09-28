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

// New filter functions focused on enhancing color visibility
function enhanceColors(type) {
  let filter = '';
  if (type === 'protanopia') {
    // Increase contrast and change hue for red-green differentiation
    filter = 'contrast(1.5) hue-rotate(10deg)';
  } else if (type === 'deuteranopia') {
    // Enhance contrast for green spectrum and adjust hue for better separation
    filter = 'contrast(1.5) hue-rotate(-20deg)';
  } else if (type === 'tritanopia') {
    // Enhance blue-yellow distinction
    filter = 'contrast(1.5) hue-rotate(170deg)';
  }
  document.documentElement.style.filter = filter;
}

function resetColorEnhancement() {
  document.documentElement.style.filter = 'none';
}
