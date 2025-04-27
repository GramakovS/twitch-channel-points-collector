let autoCollect = true;

function collectBonusPoints() {
  if (!autoCollect) return;

  const bonusIcon = document.querySelector('.claimable-bonus__icon');

  if (bonusIcon) bonusIcon.closest('button')?.click();
}

const observer = new MutationObserver((mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      collectBonusPoints();
    }
  }
});

window.addEventListener('load', () => {
  const targetNode = document.body;

  observer.observe(targetNode, {
    childList: true,
    subtree: true,
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.toggleAutoCollect !== undefined) {
    autoCollect = request.toggleAutoCollect;
  }
});
