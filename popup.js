document.addEventListener('DOMContentLoaded', () => {
  // Load saved theme from storage
  chrome.storage.sync.get('darkMode', ({ darkMode }) => {
      if (darkMode) {
          document.body.classList.add('dark-mode');
          toggleButtonClasses(true);
      }
  });
<<<<<<< Updated upstream
  
  document.getElementById('take-test-btn').addEventListener('click', () => {
    openTestPage();
=======

  // Event listeners for color-blind filters
  document.getElementById('protanopia').addEventListener('click', () => applyFilter('protanopia'));
  document.getElementById('deuteranopia').addEventListener('click', () => applyFilter('deuteranopia'));
  document.getElementById('tritanopia').addEventListener('click', () => applyFilter('tritanopia'));
  document.getElementById('reset').addEventListener('click', resetFilter);

  // Dark Mode toggle event listener
  document.getElementById('dark-mode-toggle').addEventListener('click', () => {
      const darkModeEnabled = document.body.classList.toggle('dark-mode');
      toggleButtonClasses(darkModeEnabled);
      // Save the user's preference in chrome.storage
      chrome.storage.sync.set({ darkMode: darkModeEnabled });
>>>>>>> Stashed changes
  });
});

// Helper function to toggle button classes between light and dark modes
function toggleButtonClasses(isDarkMode) {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
      if (isDarkMode) {
          button.classList.add('dark-mode');
      } else {
          button.classList.remove('dark-mode');
      }
  });
}

<<<<<<< Updated upstream
=======
// Filter application logic
function applyFilter(type) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: enhanceColors,
          args: [type]
      });
  });
}

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

function openTestPage() {
  const testPageUrl = 'https://enchroma.com/pages/test'; // TODO - Replace with test website once that is done 
  chrome.tabs.create({ url: testPageUrl });
}
=======
>>>>>>> Stashed changes
