document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button.filter-button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
      if (button.id === 'protanopia') {
        applyFilter('protanopia');
      } else if (button.id === 'deuteranopia') {
        applyFilter('deuteranopia');
      } else if (button.id === 'tritanopia') {
        applyFilter('tritanopia');
      } else if (button.id === 'reset') {
        resetFilter();
      }
    });
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
  const testPageUrl = 'https://enchroma.com/pages/test'; // TODO - Replace with test website once that is done 
  chrome.tabs.create({ url: testPageUrl });
}
