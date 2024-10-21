---
title: "GSoC Week 11 Summary"
date: 11
---


<!-- # GSoC Week 08 Summary -->
**Date**: 05 Aug 2024 - 11 Aug 2024

## Introduction
This week was dedicated to enhancing the dataset for key intents, testing Whisper AI's performance on Raspberry Pi 5, and exploring alternative implementations to improve transcription speed. Additionally, new recipes were created and tested to optimize the voice assistant's functionality on pi5.

## Tasks Completed This Week

#### # Improved the Dataset for Key Intents
Expanded and refined the dataset for the following intents to improve the accuracy and reliability of the voice assistant's responses:
- **VolumeControl**
- **HVACFanSpeed**
- **HVACTemperature**

#### # Tested Whisper AI on Raspberry Pi 5
Conducted tests on the Whisper AI integration within the `agl-ivi-demo-flutter` image on Raspberry Pi 5:
- Using the base model, Whisper AI took 20-22 seconds to transcribe a 4-second audio clip.
- With the tiny model, the transcription time was reduced to 12-13 seconds.

#### # Researched Alternative Implementations of Whisper AI
Due to the long transcription times, I explored other Whisper AI implementations that are optimized for performance on Raspberry Pi. Notable alternatives include:
- **[Faster-whisper](https://github.com/SYSTRAN/faster-whisper)**
- **[Whisper-cpp](https://github.com/ggerganov/whisper.cpp)**

#### # Created Recipes for Whisper-cpp
Developed the following Yocto recipes to facilitate the use of Whisper-cpp on embedded systems:
- `whisper-cpp`
- `whisper-cpp-tiny`
- `whisper-cpp-base`

#### # Tested Whisper-cpp on Raspberry Pi 5
Evaluated the performance of Whisper-cpp in the `agl-ivi-demo-flutter` image on Raspberry Pi 5:
- Whisper-cpp significantly outperformed OpenAI's Whisper.
- It transcribed the same 4-second audio clip in 6-7 seconds with the base model and around 3 seconds with the tiny model.

- **Whisper-cpp on pi5**: 

<img src="/images/whisper-cpp.png"alt="Sever" width="400" height="600">
<br/><br/>

## Tasks for Next Week

 - Continue working on `snips-nlu` to include more intents.
 - Discuss about whisper-cpp with the mentors.
 - Start working on the UI improvements for the Flutter app.

## Conclusion
This week was filled with exciting developments, from dataset enhancements to exploring alternative Whisper AI implementations. The performance tests on Raspberry Pi 5 provided valuable insights into optimizing the voice assistant's transcription speed. 


<br>