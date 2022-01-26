/// <reference lib="dom"/>

import browser from "webextension-polyfill";
// import browser from "https://esm.sh/webextension-polyfill@0.8.0";
{
  const currentUrl = globalThis.location.href;
  const observerA = new MutationObserver(
    function (mutations: MutationRecord[], observer: MutationObserver) {
      console.log({ mutations, observer });
      if (currentUrl != globalThis.location.href) {
        observerA.disconnect();
        browser.runtime.sendMessage(undefined, {
          request: "browser.tabs.executeScript",
        });
      }
    },
  );
  observerA.observe(document, { childList: true, subtree: true });

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
}
