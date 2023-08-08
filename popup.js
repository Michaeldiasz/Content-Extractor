document.getElementById('extract').addEventListener('click', function() {
    chrome.scripting.executeScript({
        target: {tabId: chrome.tabs.TAB_ID_NONE},
        files: ['contentScript.js']
    });
});
