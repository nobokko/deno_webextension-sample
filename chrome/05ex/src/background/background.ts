/// <reference lib="dom"/>

import browser from "webextension-polyfill";
// import browser from "https://esm.sh/webextension-polyfill@0.8.0";
browser.runtime.onMessage.addListener((message, sender) => {
  switch (message.request) {
    case "browser.tabs.executeScript":
      {
        console.log("browser.tabs.executeScript");
        browser.scripting.executeScript(
          {
            target: {
              tabId: sender.tab?.id!,
            },
            files: ["js/content.js"],
          },
        );
      }
      break;
  }
});
