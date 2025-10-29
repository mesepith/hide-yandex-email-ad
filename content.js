// Hide Yandex Email Ad by Zahir — content script
// Runs on https://mail.yandex.ru/* and removes visible ad containers.
(function () {
  "use strict";

  const SELECTORS = [
    '[data-testid="page-layout_right-column_container"]', // Right column ads
    '.DirectLine',                                        // In-message ad container
  ];

  function hideAds() {
    // Remove any elements that match our ad selectors
    SELECTORS.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        try {
          el.remove(); // full removal from DOM
        } catch (_) {
          // Fallback: if remove isn't available for any reason, hide via CSS
          el.style.display = "none";
          el.setAttribute("aria-hidden", "true");
        }
      });
    });
  }

  // Run immediately
  hideAds();

  // Observe future DOM updates (Yandex Mail is SPA-like)
  const observer = new MutationObserver(hideAds);
  observer.observe(document.documentElement || document.body, {
    childList: true,
    subtree: true,
  });

  // Nudge on navigation changes within SPA
  window.addEventListener("popstate", hideAds, true);
  window.addEventListener("hashchange", hideAds, true);
})();
