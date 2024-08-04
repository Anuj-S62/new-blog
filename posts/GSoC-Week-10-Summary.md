---
title: "GSoC Week 10 Summary"
---


<!-- # GSoC Week 08 Summary -->
**Date**: 29 July 2024 - 04 Aug 2024


## Introduction
This week focused on refining the AGL Voice Agent by implementing auto-mode, testing integrations.

## Tasks Completed This Week

#### # Fixed Recipes in meta-offline-voice-agent Layer
Addressed several issues within the `meta-offline-voice-agent` layer, including fixing the `python3-pytorch` recipe for arm64 and some patches.

#### # Fix agl-service-voiceagent.service by Removing Rasa
Removed the Rasa dependency from `agl-service-voiceagent.service` due to compatibility issues with newer Python versions.

#### # Implemented Auto-Mode in AGL Voice Assistant
Developed the auto-mode feature for the AGL voice assistant. When enabled, the voice assistant continuously listens for a wake word. Upon detecting the wake word, it starts voice recording for a set period, executes the spoken command, and then loops back to wake word detection.

#### # Tested Auto-Mode in agl-ivi-demo-flutter Image
Thoroughly tested the auto-mode feature in the `agl-ivi-demo-flutter` image.

#### # Upstream Accepted python3-pytorch recipe changes
The changes made to remove Intel-specific dependencies from the `python3-pytorch` recipe were accepted upstream.
[Upstream Pull Request](https://github.com/zboszor/meta-python-ai/pull/6)

## Code Pushed

- [30060: Integrate Whisper AI into AGL Voice Agent and Update Dependencies](https://gerrit.automotivelinux.org/gerrit/c/AGL/meta-agl-devel/+/30060)

## Tasks for Next Week

 - Update `snips-nlu` to improve natural language understanding capabilities.
 - Update the UI of the Flutter app to enhance user experience and usability.

## Conclusion
This week was productive, with key improvements and fixes enhancing the AGL Voice Agent's functionality. The coming week will focus on further refining the voice agent's capabilities, particularly NLU and Flutter app UI as well as testing on new hardware.


<br>