# Rate-Professor

Welcome to Rate-Professor! This is a React Native app designed to provide a robust and interactive mobile application experience. It's built using Expo and incorporates a variety of dependencies to enhance functionality.<br />
<br />
# Features
Modern React Native application<br />
Integration with Expo for simplified development<br />
Rich set of dependencies for extended functionalities<br />
Installation<br />
To get started with Rate-Professor, follow these steps:<br />
<br />
# Clone the Repository

bash<br />
Copy code<br />
git clone <br />
cd Rate-Professor<br />
Install Dependencies<br />
<br />
Make sure you have Node.js installed, then run:<br />
bash<br />
Copy code<br />
npm install<br />
This will install all the required dependencies, including Expo.<br />
<br />
# Environment Setup
Create a .env file in the project root and add the following line:<br />
makefile<br />
Copy code<br />
EXPO_PUBLIC_API_URL=" http://"PUT HERE YOUR IP":8000""<br />
Replace "http://"PUT HERE YOUR IP":8000" with your actual IP address followed by :8000.<br />
<br />
# Start the Application
You can start the application using Expo by running one of the following commands:<br />
npx expo start <br />
than scan the qr code for ios or use android emulator to open the app on android<br />
Usage<br />
After starting the application, you can use it on your device or emulator. The app should connect to your specified API URL set in the .env file.<br />
<br />
# Starting-Server
The Server is REST Mock API Server with Node.js, Express and nodemon.<br />
The server has to be started through the terminal, and it has to be written the following commands:<br />
it has to be opened two different terminals:<br />
cd Rate-Professor-db and than <br />
npm start <br />
Dependencies<br />
This project uses the following major dependencies:<br />
<br />
React Native:<br />
Expo<br />
React Navigation<br />
Axios for API requests<br />
Various UI components like react-native-text-area, react-native-star-rating-widget<br />
Contributing<br />
Contributions to Rate-Professor are welcome! Please read the CONTRIBUTING.md file for guidelines on how to contribute.<br />

