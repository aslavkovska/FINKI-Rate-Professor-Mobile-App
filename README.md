# Rate-Professor

Welcome to Rate-Professor! This is a React Native app designed to provide a robust and interactive mobile application experience. It's built using Expo and incorporates a variety of dependencies to enhance functionality.

# Features
Modern React Native application
Integration with Expo for simplified development
Rich set of dependencies for extended functionalities
Installation
To get started with Rate-Professor, follow these steps:

# Clone the Repository

bash
Copy code
git clone 
cd Rate-Professor
Install Dependencies

Make sure you have Node.js installed, then run:
bash
Copy code
npm install
This will install all the required dependencies, including Expo.

# Environment Setup
Create a .env file in the project root and add the following line:
makefile
Copy code
EXPO_PUBLIC_API_URL=" http://"PUT HERE YOUR IP":8000""
Replace "http://"PUT HERE YOUR IP":8000" with your actual IP address followed by :8000.

# Start the Application
You can start the application using Expo by running one of the following commands:
npx expo start 
than scan the qr code for ios or use android emulator to open the app on android
Usage
After starting the application, you can use it on your device or emulator. The app should connect to your specified API URL set in the .env file.

# Starting-Server
The Server is REST Mock API Server with Node.js, Express and nodemon.
The server has to be started through the terminal, it has to be opened two different terminals and it has to be written the following commands:
cd Rate-Professor-db and than 
npm start

# Dependencies
This project uses the following major dependencies:

React Native:
Expo
React Navigation
Axios for API requests
Various UI components like react-native-text-area, react-native-star-rating-widget
Contributing
Contributions to Rate-Professor are welcome! Please read the CONTRIBUTING.md file for guidelines on how to contribute.

