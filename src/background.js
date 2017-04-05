const searchWikipedia = (word) => {
  const query = word.selectionText;

  window.chrome.tabs.create({url: "https://en.wikipedia.org/wiki/" + query});
};

window.chrome.contextMenus.create({
  title: "Search in Wikipedia",
  contexts: ["selection"],  // ContextType
  onclick: searchWikipedia // A callback function
});
