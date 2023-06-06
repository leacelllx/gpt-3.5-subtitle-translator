document.getElementById('translate').addEventListener('click', function () {
    const targetLanguage = document.getElementById('language').value;

    // Send a message to the content script with the selected language
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {targetLanguage: targetLanguage});
    });
});
