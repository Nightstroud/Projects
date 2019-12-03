chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#000000'}, function() {
        console.log("The color is black.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'nightstroud.github.io'},
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});