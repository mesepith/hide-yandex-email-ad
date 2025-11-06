# AdBlocker for Yandex Mail (for Chrome, Edge, Brave, and Firefox)

A lightweight and efficient browser extension that provides a clean, ad-free experience on **all Yandex Mail domains** (including `mail.yandex.ru`, `mail.yandex.com`, `mail.yandex.by`, and more).

## What it Does

This extension is designed to do one thing perfectly: block visual advertisements across the entire Yandex Mail platform.

- **Removes Sidebar Ads:** Hides the distracting ad container in the right-hand sidebar.
- **Removes In-Message Ads:** Eliminates the ad banners that appear within your email list.
- **Stays Active:** Uses a `MutationObserver` to watch for dynamic page changes, ensuring ads do not reappear as you navigate your inbox.

---

## Installation

### For Chrome, Edge, & Brave (Chromium Browsers)

1.  **Download:** Download the project files and unzip them into a permanent folder on your computer.
2.  **Navigate to Extensions:**
    *   In Chrome, go to `chrome://extensions/`
    *   In Edge, go to `edge://extensions/`
    *   In Brave, go to `brave://extensions/`
3.  **Enable Developer Mode:** Find the "Developer mode" toggle (usually in the top-right corner) and turn it on.
4.  **Load the Extension:** Click the **"Load unpacked"** button and select the folder where you unzipped the extension files.
5.  **Done!** Visit any Yandex Mail domain (like `https://mail.yandex.com`) to see the ad-free interface.

### For Firefox (Temporary Installation)

1.  **Download:** Download and unzip the project files as described above.
2.  **Navigate to Debugging:** Open a new tab and go to `about:debugging#/runtime/this-firefox`.
3.  **Load Add-on:** Click the **"Load Temporary Add-on..."** button.
4.  **Select Manifest:** Navigate into the project folder and select the `manifest.json` file.
5.  **Done!** The extension will now be active until you restart Firefox.

*Note: For a permanent installation on Firefox, the add-on must be signed through the official Mozilla Add-ons portal (AMO).*

---

## Technical Notes & Privacy

- **Fast Performance:** The content script runs at `document_start` to hide ads as early as possible, preventing any flash of ad content.
- **Permissions:** The extension requires host permissions for specific Yandex Mail domains (`mail.yandex.ru`, `mail.yandex.com`, etc.) to modify the page and remove ad elements. It does **not** run on any other websites.
- **Privacy-Focused:** The code is minimal and does not read, track, or interact with your personal data or emails. Its only function is to find and remove ad containers from the page structure.

## Credits

This extension was created and developed by **Zahir**.