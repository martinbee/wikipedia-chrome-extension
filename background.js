var searchWikipedia = (word) => {
  var query = word.selectionText;

  chrome.tabs.create({url: "https://en.wikipedia.org/wiki/" + query});
};

chrome.contextMenus.create({
  title: "Search in Wikipedia",
  contexts: ["selection"],  // ContextType
  onclick: searchWikipedia // A callback function
});
