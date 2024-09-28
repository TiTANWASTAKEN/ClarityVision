
---

# Clarity Vision - Chrome Extension for Color Blindness

**Version:** 1.1  
**Description:** Clarity Vision is a Chrome extension designed to help individuals with color blindness view web content with improved clarity. The extension offers different filters for Protanopia, Deuteranopia, and Tritanopia,  enhancing color perception for users with color blindness. It also includes a reset option to remove the applied filters.

## Features

- **Protanopia Mode**: Applies a filter to help users with red color blindness.
- **Deuteranopia Mode**: Applies a filter to assist users with green color blindness.
- **Tritanopia Mode**: Applies a filter for users with blue-yellow color blindness.
- **Reset**: Clears the applied filter and returns the page to its original view.
- **Easy-to-Use Popup**: Simple and minimal UI to toggle between different modes.
- **Supports All Websites**: The extension works across all domains.

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/TiTANWASTAKEN/clarity-vision-extension.git
   ```

2. Open **Chrome**, go to `chrome://extensions/`, and enable **Developer mode**.

3. Click on **Load unpacked** and select the folder where the extension is located.

4. You will now see the Clarity Vision icon in your Chrome toolbar.

5. Click on the icon to open the popup and apply any of the color blindness filters.

## Using the Extension

- **Protanopia Filter**: Click on the “Protanopia” button to apply the filter.  
- **Deuteranopia Filter**: Click on the “Deuteranopia” button to apply the filter.  
- **Tritanopia Filter**: Click on the “Tritanopia” button to apply the filter.  
- **Reset Filter**: Click on “Reset” to remove any applied filters and return to the default view.

## Pipeline for Future Improvements

Below are some planned pipeline improvements to further enhance the functionality and user experience of Clarity Vision:

### 1. Improved Filter Accuracy

- **Current State**: Filters are applied using basic CSS filters (`grayscale`, `sepia`, `hue-rotate`).
- **Improvement**: Implement more accurate color blindness simulation filters using advanced algorithms for better visual representation.
- **Benefit**: Provides a more realistic experience for color-blind users.

### 2. Persisting Filter Across Sessions

- **Current State**: Filters reset when the page is reloaded.
- **Improvement**: Use Chrome’s `storage.sync` to persist the filter across sessions, allowing users to maintain their preferred filter even after refreshing the page.
- **Benefit**: Users won’t need to reapply their filter every time they reload a page.

### 3. Customizable Filters

- **Current State**: Filters are predefined and cannot be adjusted.
- **Improvement**: Allow users to customize the intensity of the filters using sliders for parameters like `hue-rotate`, `contrast`, and `brightness`.
- **Benefit**: Offers more flexibility and customization, letting users fine-tune the view according to their specific needs.

### 4. Keyboard Shortcuts

- **Current State**: Filters are applied via buttons in the popup.
- **Improvement**: Add keyboard shortcuts for applying filters (e.g., `Ctrl+Shift+P` for Protanopia mode).
- **Benefit**: Improves accessibility by allowing users to quickly toggle filters without needing to interact with the popup.

### 5. Localization Support

- **Current State**: The extension only supports English.
- **Improvement**: Add multi-language support using Chrome’s `i18n` API, making the extension accessible to a global audience.
- **Benefit**: Broadens the user base by supporting non-English speakers.

### 6. Enhanced UI/UX Design

- **Current State**: The extension uses a minimalistic popup UI.
- **Improvement**: Improve the UI design by using a modern framework (e.g., Bootstrap or Materialize) and adding icons for each filter.
- **Benefit**: Enhances the overall user experience by making the UI more visually appealing and user-friendly.

### 7. Analytics Integration

- **Current State**: No analytics or user behavior tracking is implemented.
- **Improvement**: Add anonymous usage analytics (e.g., using Google Analytics) to track how often filters are applied and on which websites.
- **Benefit**: Provides insights into user behavior, helping to improve future versions of the extension.

## Installation and Development

### Prerequisites

- Chrome browser
- Basic knowledge of JavaScript, HTML, and CSS

### Installation for Development

1. Clone the repository:

   ```bash
   git clone https://github.com/TiTANWASTAKEN/clarity-vision-extension.git
   ```

2. Open **Chrome** and navigate to `chrome://extensions/`.

3. Enable **Developer mode**.

4. Click **Load unpacked** and select the cloned directory.

5. You can now make changes to the code and reload the extension.
If you'd like contributors to push their changes to the **`master` branch** instead of the **`main` branch**, while keeping the **`main` branch** sanitized and stable for releases or production, you can update your **contributing guidelines** to clarify this process. This is a common workflow where **`master`** serves as a working branch, and **`main`** is reserved for stable releases or deployments.

Here’s how you can update the contributing section in your `README.md`:

---

## Contributing

Contributions are welcome! We maintain a **`main` branch** for stable releases and a **`master` branch** for development. If you’d like to contribute, please fork the repository and create a pull request **to the `master` branch**. Once your changes are reviewed and merged into `master`, they will eventually be merged into `main` for release.

### Contribution Guidelines:

1. **Fork the repo**: Create a personal fork of the project.
2. **Create a new branch**: Work on your feature in a separate branch.
   - Create a new branch off of `master` for your feature:  
     ```bash
     git checkout -b feature/your-feature-name master
     ```
3. **Make your changes**: Write clean, maintainable code, following the style guide.
4. **Commit your changes**:  
   ```bash
   git commit -m "Add [feature/bugfix] - brief description"
   ```
5. **Push to your fork**:  
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request**: Open a pull request **against the `master` branch**. Provide a clear description of the changes and link any related issues.

### Workflow and Branch Management

- **`master` branch**: This is the active development branch. All new features, bug fixes, and improvements should be merged here.
- **`main` branch**: This is the stable branch. Once changes have been tested and reviewed in `master`, they will be merged into `main` for production or release.

We encourage contributors to submit pull requests to **`master`** to ensure the **`main`** branch stays stable and clean for production releases.

### Additional Notes:
- Please follow the style guide and include tests for new features to ensure smooth integration.
- After review, your pull request will be merged into the **`master`** branch, and eventually into **`main`** when deemed stable.
  
Thank you for your contributions!

---

This project is licensed under the MIT License.

---

