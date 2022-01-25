/// <reference lib="dom"/>

// import browser from "webextension-polyfill";
import browser from "https://esm.sh/webextension-polyfill@0.8.0";

// https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis

const storage = browser.storage;

if (storage) {
  storage.local.get({ url: "(none)" }).then((prev_url) => {
    const url = globalThis.location.href;
    console.log({ prev_url, url });
    storage.local.set({ url });
  });
} else {
  console.log({ storage });
}
