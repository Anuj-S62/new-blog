---
title: "GSoC Week 07 Summary"
---


<!-- # GSoC Week 07 Summary -->
**Date**: 08 July 2024 - 14 July 2024

## Introduction
In this week's update, I have made significant progress on integrating Whisper AI into the AGL Voice Assistant. The primary focus was on enhancing the Flutter application for speech recognition, refining the AGL Voice Agent service, and conducting thorough testing to ensure seamless functionality. Here’s a detailed breakdown of the tasks accomplished, steps to use the AGL Voice Assistant, and plans for the upcoming week.

## Tasks Completed This Week

1. **Updated the Flutter Speech Recognition Demo**: 

   - Enhanced the [flutter-speechrecognition-demo](https://github.com/Anuj-S62/flutter-speechrecognition-demo) app.

    - Added a toggle button to choose between Vosk and Whisper for speech-to-text functionality.
    - Included an option to toggle between online and offline speech-to-text functionality.
   
2. **Tested the Complete Voice Agent Service**: 
   - Conducted comprehensive testing with both the Flutter client and Python client on the AGL image.

3. **Fixed the Kuksa Authorization Issue**: 
   - Resolved the Kuksa authorization issue that was preventing the voice agent from connecting to the Kuksa server.

## Use AGL Voice Assistant

#### Build the Voice-Agent into AGL Image
To integrate the voice-agent into the AGL image, follow these steps:

```bash
$ source master/meta-agl/scripts/aglsetup.sh -m qemux86-64 -b build-master agl-demo agl-devel agl-offline-voice-agent
$ source agl-init-build-env
$ bitbake agl-ivi-demo-flutter
```

#### Start the Voice-Agent Service
Login as root and start the voice-agent service with the following command:

```bash
$ voiceagent-service run-server --default
```
This command will start the agl-service-voiceagent. Now you can use either the Python client or Flutter client to execute voice commands.

#### Using Python Client
```bash
$ voiceagent-service run-client --server-address 127.0.0.1 --server-port 51053 --nlu snips --action ExecuteVoiceCommand 
--mode manual --stt-framework whisper/vosk --online-mode 1/0
```

#### Using Flutter Client
Simply use the voice-assistant app.

#### AGL Voice-Assistant :-
- **Voice Agent Service**: 

<img src="https://private-user-images.githubusercontent.com/96018337/348552177-a86d287b-8efd-4f7b-9d26-024f4d923616.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjA5Njk4MzAsIm5iZiI6MTcyMDk2OTUzMCwicGF0aCI6Ii85NjAxODMzNy8zNDg1NTIxNzctYTg2ZDI4N2ItOGVmZC00ZjdiLTlkMjYtMDI0ZjRkOTIzNjE2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzE0VDE1MDUzMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk2N2ViNDNlYzI4NTdlMmQ2NjQyNDAwMDk1YTgwMmQ5ZTQ1ZjRlYzVjNjc3YTc0NjRmNWRiMWYzYmZhOTMxNTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.MxCN3Jvi4f8z0mwV0uMjDTqDmB0OgFTCSV6bC1qV9kI" alt="Sever" width="800" height="600">

<br/><br/>
- **Python Client**: 

<img src="https://private-user-images.githubusercontent.com/96018337/348552170-380b58ac-cce7-45f7-862c-6d6a019faa6c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjA5Njk4MzAsIm5iZiI6MTcyMDk2OTUzMCwicGF0aCI6Ii85NjAxODMzNy8zNDg1NTIxNzAtMzgwYjU4YWMtY2NlNy00NWY3LTg2MmMtNmQ2YTAxOWZhYTZjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzE0VDE1MDUzMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc2ZDAyZDI0YzI4YmVjMmNmN2Y3MjFkZGU1NWM1N2Q3NTJhZTc4Zjk0MzM1NGNjYmQ3NTBkN2IxMTEyMGM4ZTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Nx_oP0trVfUSRXZxNcbluCD2pjEnTBAv_gBgZHPVcZA" alt="Sever" width="800" height="600">

<br/><br/>
- **Flutter Client**: 

<img src="https://private-user-images.githubusercontent.com/96018337/348552175-306160db-c200-4e16-b4ee-0c1d690fb4f5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjA5Njk4MzAsIm5iZiI6MTcyMDk2OTUzMCwicGF0aCI6Ii85NjAxODMzNy8zNDg1NTIxNzUtMzA2MTYwZGItYzIwMC00ZTE2LWI0ZWUtMGMxZDY5MGZiNGY1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzE0VDE1MDUzMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM2NDU3ZWZmNTRhMTIxMWMzZjk3MTcyZjNlNWJlYTM3YTUxMmY0MTE3ZDczODJlN2Q2YWJiMGIxMDcyYjczNGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.v18RG42IPjDeLCoPh9-EUpm_UZZTeQE8KO6J3xl6zPQ"alt="Sever" width="800" height="600">

## Tasks for Next Week
- Continue refining the Flutter app and push the changes to Gerrit.
- Improve the agl-service-voiceagent.
- Begin work on the NLU component to further improve the voice assistant's functionality.

## Conclusion
This week marked a significant milestone in enhancing the AGL Voice Assistant with robust speech recognition capabilities using Whisper and Vosk.
 Stay tuned for more updates as we continue to push the boundaries of voice interaction technology.


-
