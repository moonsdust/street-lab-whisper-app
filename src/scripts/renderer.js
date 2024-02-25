// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.
checkbox = document.querySelector('.checkbox');

checkbox.addEventListener('change', 
    function engorNot(){   
        if(checkbox.checked) {
            // Don't display "Transcription + Translation" if input file is in English
            document.querySelector('.process #no-eng').style.display = "none";
        }
        else {
            // Display "Transcription + Translation" if input file is not English 
            document.querySelector('.process #no-eng').style.display = "block";
        }
    }
);