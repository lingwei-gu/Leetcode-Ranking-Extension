chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension Installed");
});

chrome.bookmarks.onCreated.addListener(() => {
    alert("Bookmark Saved");
});