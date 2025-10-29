# Hide Yandex Email Ad by Zahir (Chrome/Edge/Brave and Firefox)

This lightweight extension removes the ad containers on **https://mail.yandex.ru/**.

## What it does
- Removes the right-column ad container: `[data-testid="page-layout_right-column_container"]`
- Removes in-message ad container: `.DirectLine`
- Watches for dynamic DOM changes so ads don't reappear.

---

## Install (Chrome / Edge / Brave)
1. Download and unzip the folder (or use the provided zip).
2. Open `chrome://extensions/` (or `edge://extensions/`).
3. Enable **Developer mode** (top-right).
4. Click **Load unpacked** and select the `hide-yandex-email-ad-by-zahir` folder.
5. Visit https://mail.yandex.ru/ and enjoy the cleaner UI.

## Install (Firefox — temporary load)
1. Open `about:debugging#/runtime/this-firefox` in Firefox.
2. Click **Load Temporary Add-on...** and select the `manifest.json` from the folder.
3. Go to https://mail.yandex.ru/.
   (Temporary add-ons unload when Firefox restarts. For a permanent add-on, you can self-sign it on AMO.)

---

## Notes
- The content script runs at `document_start` to hide ads as early as possible.
- No host permissions or special permissions are required; it only runs on `https://mail.yandex.ru/*`.
- Code is intentionally minimal and does not interact with your data.

## Credits
- Extension name and idea by Zahir.
