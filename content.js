chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        const targetLanguage = request.targetLanguage;

        const subtitles = document.querySelectorAll('.subtitle');

        for (const subtitle of subtitles) {
            translateSubtitles(subtitle.textContent, targetLanguage)
                .then(translatedText => {
                    subtitle.textContent = translatedText;
                });
        }
    }
);

const translateSubtitles = async (subtitleText, targetLanguage) => {
    const response = await fetch('http://yourserver.com/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: subtitleText,
            targetLanguage: targetLanguage,
        }),
    });

    const data = await response.json();
    
    return data.translatedText;
};
