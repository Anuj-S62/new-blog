---
title: "GSoC Week 08 Summary"
date: 8
---


<!-- # GSoC Week 08 Summary -->
**Date**: 15 July 2024 - 21 July 2024

## Introduction
In this week's update, I have made significant progress on integrating Whisper AI into the AGL Voice Assistant. The primary focus was on enhancing the Flutter application for speech recognition.

## Tasks Completed This Week

1. **Update snips-nlu-parsers**:
   - Repository: [snips-nlu-parsers](https://github.com/Anuj-S62/snips-nlu-parsers)
   - Updated to use the latest gazetteer-entity-parsers due to the yanked `rmp-serde==0.13`.

2. **Update flutter_speechrecognition_demo App**:
   - Integrated `sharedpreferences` into the Flutter app to store and maintain the application state (e.g., restoring app configurations like NLU-mode, speech-to-text model).
   - Pushed all the changes to Gerrit: [30109](https://gerrit.automotivelinux.org/gerrit/c/apps/flutter-speechrecognition-demo/+/30109).

3. **Pushed V2 [30060](https://gerrit.automotivelinux.org/gerrit/c/AGL/meta-agl-devel/+/30060) for meta-offline-voice-agent layer**:
     - Removed Vulkan (previously required to compile PyTorch) from DISTRO_FEATURES as it has become conditional upstream.
     - Fixed flutter_voiceassistant service.
     - Updated recipe of llvmlite to include the wheel for aarch64.

4. **Tested the Complete Voice Agent Service**: 
   - Conducted comprehensive testing with both the Flutter client and Python client on the AGL image.

## Tasks for Next Week
- Complete the implementation of auto-mode in `agl-service-voiceagent`.
- Continue working on NLU.


## Conclusion
This week marked a significant milestone in enhancing the AGL Voice Assistant with robust speech recognition capabilities using Whisper and Vosk.


-
