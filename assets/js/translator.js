// Load the Google Translate API
function loadGoogleTranslateAPI() {
  const script = document.createElement('script');
  script.src = 'https://translate.google.com/translate_a/element.js?cb=onGoogleTranslateAPILoad';
  document.head.appendChild(script);
}

// Initialize the Google Translate widget
function initGoogleTranslateWidget() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,fr', // List of supported languages
    layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
    autoDisplay: false
  }, 'google-translate-widget');
}

// Translate the content of the website to the selected language
function translateContent(languageCode) {
  const elementsToTranslate = document.querySelectorAll('[data-translate]');
  elementsToTranslate.forEach(element => {
    const originalText = element.innerText;
    google.translate.translate(originalText, 'en', languageCode, (translation) => {
      element.innerText = translation.translatedText;
    });
  });
}

// Add event listeners to the flag icons to detect language changes
const flagIcons = document.querySelectorAll('.language-switcher .flag-icon');
flagIcons.forEach(icon => {
  icon.addEventListener('click', (event) => {
    event.preventDefault();
    const selectedLanguageCode = event.target.getAttribute('data-lang');
    translateContent(selectedLanguageCode);
  });
});

// Load the Google Translate API when the page is loaded
window.onload = loadGoogleTranslateAPI;
