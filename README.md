# Subtitle Translator Chrome Extension

This Chrome extension allows you to translate subtitles in video content on web pages using the GPT-3.5-turbo model by OpenAI. It seamlessly replaces original subtitles with translations in the language of your choice.

## Features
- Translate subtitles in video content
- Support for multiple target languages
- API key configuration on the first use
- Asynchronous operations ensuring non-blocking user experience
- Fetches translations from a secure server backend

## Installation
1. Clone or download this repository to your local machine.
2. Set up a server environment (local or cloud) to run the server-side Node.js application.
3. Install necessary dependencies on your server.
4. Deploy the Node.js code to your server and start it (for example, using `node server.js`).
5. Ensure that you have securely stored your OpenAI API Key in an `.env` file in your server environment.
6. Open Chrome and navigate to `chrome://extensions/`.
7. Enable "Developer mode" by toggling the switch in the top right corner.
8. Click on the "Load unpacked" button.
9. Navigate to the folder containing the extension's source code and click "Select Folder" (or "Open" depending on your operating system).
10. The extension is now installed and an icon should appear in your browser's toolbar.

## Usage
- Play a video that has subtitles on any webpage.
- Click on the extension icon to open the popup.
- Choose the target language from the dropdown menu.
- Click the "Translate Subtitles" button to start the translation. 
- The subtitles in the video should now appear in the selected language.

## Contributing
If you have any suggestions or improvements, feel free to create a fork and submit a pull request. We appreciate your contributions!

## License
This project is licensed under the MIT License. See the LICENSE file for details.
