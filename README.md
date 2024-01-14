# STREET Whisper Transcription App

Link to Python Scripts: https://github.com/carmen-chau/StreetWhisperCode 

## Structure of Folders
- ```pages```: Contains HTML files, which holds the main content of the app. 
- ```src```: Within this folder are the ```css``` folder (contains CSS stylesheets for the HTML files), ```scripts``` folder (contains TypeScript (.ts) files), and ```img``` folder (contains images used in the HTML files and app)

Current Structure of src folder
```
├── css
│   └── style.css
├── img
└── scripts
    ├── custom.js
    ├── main.ts
    ├── preload.ts
    └── renderer.ts
```

## How To Run App
This app is currently built with Electron. Please note that the following command has only been tested on MacOS:

1. Open your terminal 
2. In order to run the app from the code, you will need to install Node.js. To install Node.js, there are multiple ways to install it, take a look at the following website: 
    - https://nodejs.org/en/download/package-manager 
3. If you decide to install Node.js through the command line, keep in mind that some of the commands listed on the Node.js website above might require you install other Package Managers before using the command (Ex: You will need to install Homebrew before you can use the command: ```brew install node```). 
4. Make sure you installed the latest version of Node.js, you can check your version with the following command: ```node -v```
5. With Node.js installed, it comes with NPM, which would contain commands that will allow to run the app on your computer from the code. 
6. To run the app locally: 
    1. ```cd``` is a command used that will allow you to move between directories. We will use the command ```cd``` to eventually end up in the street-whisper-app folder. To do this locate where the street-whisper-app folder is on your computer. 
        - Example: Say the ```street-whisper-app``` folder is located in your GitHub folder, which is in your documents folder on your computer, this would be the order of commands you will enter (Note: you enter after writing every command): ```cd documents -> cd GitHub -> cd street-whisper-app```.
    2. If this is your first time running the app, install the dependencies in the street-whisper-app folder using the following command: ``npm install``
    3. From there enter the following command: ```npm start``` to start the app.
