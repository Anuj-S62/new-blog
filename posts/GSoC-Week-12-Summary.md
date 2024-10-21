---
title: "GSoC Week 12 Summary"
date: 12
---


<!-- # GSoC Week 08 Summary -->
**Date**: 12 Aug 2024 - 18 Aug 2024

## Introduction
This week focused on enhancing the AGL Voice Agent by integrating Whisper-cpp for improved speech-to-text performance, updating Snips-NLU for media control intents, and testing the overall functionality on Raspberry Pi 5. 
## Tasks Completed This Week

#### # Updated [agl-service-voiceagent](https://github.com/Anuj-S62/agl-service-voiceagent) to Use Whisper-cpp
Revised the `STTModel` class to utilize Whisper-cpp for speech-to-text functionality, replacing OpenAI’s Whisper AI. This change is expected to provide faster and more efficient transcription, particularly on resource-constrained devices like Raspberry Pi 5.

#### # Tested Whisper-cpp in agl-service-voiceagent on Raspberry Pi 5
Performed extensive testing of the Whisper-cpp integration within `agl-service-voiceagent` on Raspberry Pi 5. The results confirmed that Whisper-cpp significantly enhances the voice agent's responsiveness compared to the previous implementation.

#### # Updated [Snips-NLU](https://github.com/Anuj-S62/snips-model-agl) for MediaControl Intents
Enhanced the Snips-NLU model to accurately extract intents related to media control, such as PLAY, PAUSE, NEXT, and PREVIOUS. 

#### # Added Media Control Support in [agl-service-voiceagent](https://github.com/Anuj-S62/agl-service-voiceagent)
Integrated support for media control within `agl-service-voiceagent`, allowing users to control media playback through voice commands.

#### # Identified Issue with Audio Recording in Manual Mode on Raspberry Pi 5
Encountered an issue where audio recording in manual mode is not functioning properly on Raspberry Pi 5. 


## Tasks for Next Week

 - Fix the audio recording issue on Raspberry Pi 5 to ensure reliable voice input capture.
 - Continue working on the UI of the Flutter app to improve user interaction and experience.

## Conclusion
This week was productive, with significant improvements in the AGL Voice Agent's speech-to-text performance and media control capabilities. The upcoming week will focus on resolving the audio recording issue on Raspberry Pi 5 and further refining the Flutter app's UI.


<br>