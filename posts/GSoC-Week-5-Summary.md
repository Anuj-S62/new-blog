---
title: "GSoC Week 05 Summary"
---


<!-- # GSoC Week 05 Summary -->
**Date**: 24 June 2024 - 30 June 2024

## Introduction
This week, I focused on integrating Whisper AI's automatic speech recognition (ASR) service with the AGL service voiceagent for online mode. 

The primary objective was to enable online speech recognition using Whisper AI and test the integration on the AGL image.

## Tasks Completed This Week
- Integrated Whisper ASR service in the [agl-service-voiceagent](https://github.com/Anuj-S62/agl-service-voiceagent.git) for online mode.

  - Added the “--online-mode 0/1” option to the voiceagent’s Python client to enable online speech recognition using Whisper AI.
- Tested Whisper AI (offline version) with agl-service-voiceagent on the agl-ivi-demo-flutter image.

## Using Whisper AI Online Speech Recognition with agl-service-voiceagent
- 1. **Clone [agl-whisper-docker](https://github.com/Anuj-S62/agl-whisper-docker.git)**

   ```
   git clone https://github.com/Anuj-S62/agl-whisper-docker.git
   ```

- 2. **Build the Docker image:**

   ```
   docker build -t whisper-asr-service .
   ```

- 3. **Run the Docker container:**

   ```
   docker run -d -p 50051:50051 whisper-asr-service
   ```

   Now the Whisper ASR service will be running at port 50051.

- 4. **Clone and install agl-service-voiceagent:**

   ```
   git clone https://github.com/Anuj-S62/agl-service-voiceagent.git
   ```

- 5. **Modify the `config.ini` file:**

   Provide the correct address for the Whisper ASR service in `online_mode_address` and start the voiceagent service:

   ```
   voiceagent-service run-server --config CONFIG_FILE
   ```

- 6. **Use "--online-mode 1" with the voiceagent's python client to use the online whisper ASR for speech recognition**

   (Note: The Flutter app is not supported yet.)

## Tasks for Next Week
- Bug fixing and pushing all changes to Gerrit for mid-term evaluation.

## Conclusion
This week's integration of Whisper AI with AGL's voiceagent service marks a significant milestone. The successful implementation and testing lay a strong foundation for further enhancements and optimizations. Next week, the focus will be on bug fixing and preparing for the mid-term evaluation.

-
