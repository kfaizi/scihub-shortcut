function openDOIPage(info, tab) {
  // Regular expression to check for DOI syntax
  // const doiRegex = /^10\.\d{4,9}\/[-._;()/:A-Z0-9]+$/i;
  const url = new URL(info.linkUrl);
  const pathname = url.pathname.startsWith('/') ? url.pathname.substring(1) : url.pathname;

  // Check if the selected link matches the DOI pattern
  // if (doiRegex.test(pathname)) {
    // Construct the URL to open
  const newUrl = `https://sci-hub.se/${pathname}`;
  // Find the index of the current tab so the new tab opens to the right of it
  const newIndex = tab.index + 1;
  // Open a new tab with the constructed URL
  browser.tabs.create({url: newUrl, index: newIndex});
}

browser.contextMenus.create({
  id: "open-doi",
  title: "Open with Sci-Hub",
  contexts: ["link"]
});

browser.contextMenus.onClicked.addListener(openDOIPage);

