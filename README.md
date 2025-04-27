# Twitch Channel Points Collector
This is a browser extension that automatically collects bonus channel points on the Twitch.tv platform. 
The extension allows users to automate the process of collecting channel points, which usually requires manual clicking while watching streams.

### If you find a bug, message me on [Telegram](https://t.me/GSilver27).

## Functionality
- Automatic collection of channel points on Twitch.tv
- Simple user interface with the ability to enable/disable the auto-collection function
- Works only on Twitch.tv pages
- Visual display of current status (enabled/disabled)
  
## Technical details
- JavaScript for basic functionality
- Chrome Extension API to interact with the browser
- Message exchange between popup and content script to control the autocapture feature
The extension has a simple interface with a toggle button and status indicator, making it user friendly and easy to understand.

## Setup
### (For Chromium browsers: Chrome, Yandex.Browser, Opera, Edge and other)
### 1. Preparation:
**Make sure you have a project folder where:**
- At the root is `manifest.json`
- All scripts _(content.js, popup.js)_, styles _(popup.css)_, popup page _(popup.html)_ and icons are in place.

### 2. Open the extensions page
**In Chrome or any Chromium browser:**
Go to the page:
`chrome://extensions/`

### 3. Enable “Developer mode”
In the upper right corner, enable **“Developer mode”**.
(There will be a toggle - turn it on.)

### 4. Click on the “Load unzipped extension” button
Click on the **“Load unpacked”** or **“Load unpacked”** button.
Choose the folder where your project is located with `manifest.json` in the root.

### 5. Check the download
**If everything is done correctly:**
The extension will appear in the list of installed extensions.
You will see the icon, name, version.
In case of errors (for example, incorrect `manifest.json`) - Chrome will immediately show you what's wrong.

 If everything is ok - the extension is already working!
 - You will see your extension icon in the browser bar.
 - You can click on the icon - your popup.html will appear.
 - You can open Twitch - and the scripts will start working automatically on the site.

#### ❗️ Note: If at the time of installing the extension you were watching some broadcast on Twitch, you will need to reload your browser for it to work correctly
