let autoCollectEnabled = true;

const statusDiv = document.getElementById('status');
const toggleButton = document.getElementById('toggleButton');

function updateUI() {
  statusDiv.textContent = `Status: ${autoCollectEnabled ? 'ON' : 'OFF'}`;

  toggleButton.textContent = autoCollectEnabled ? 'Disable Auto-Collect' : 'Enable Auto-Collect';
}

toggleButton.addEventListener('click', () => {
  autoCollectEnabled = !autoCollectEnabled;

  updateUI();

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0] && tabs[0].url && tabs[0].url.includes('twitch.tv')) {
      chrome.tabs.sendMessage(tabs[0].id, { toggleAutoCollect: autoCollectEnabled }).catch((error) => {
        console.log('Ошибка отправки сообщения:', error);
        console.log('%c LOGS ', 'color: white; background-color: #8400ff;', 'Message sending error', error);
      });
    } else {
      console.log('%c LOGS ', 'color: white; background-color: #8400ff;', 'The extension works on Twitch.tv only');
    }
  });
});

updateUI();
