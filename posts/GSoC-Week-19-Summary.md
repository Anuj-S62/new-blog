---
title: "GSoC Week 19 Summary"
---


<!-- # GSoC Week 08 Summary -->
**Date**: 30 Sept 2024 - 06 Oct 2024
## Introduction
This week focused on resolving issues related to audio recording on Raspberry Pi 5, removing deprecated components.

## # Tasks Completed This Week

#### # agl-service-voiceagent changes:
- Fixed the audio recording issue in `agl-service-voiceagent` on Raspberry Pi 5.
- Removed OpenAI’s version of Whisper AI from the `agl-service-voiceagent`, as we are now using `whisper.cpp` for speech-to-text.
- Changed the wake word to “Hey Automotive”.

#### # flutter-ics-homescreen changes:
- Made the online mode tile in the voice assistant settings conditional, removing it from the UI if the online mode is disabled in `agl-service-voiceagent`.
- Set the voice assistant overlay to close automatically after 3 seconds of command execution.
- Improved text alignment in the voice assistant overlay.

#### # meta-offline-voice-agent-layer changes:
- Added a voice-agent configuration file to `/etc/default` and updated the config path in `agl-service-voiceagent.service`.

#### # Tested the voice assistant in `flutter-ics-homescreen` on Raspberry Pi 5.

## Code Pushed

- [30326](https://gerrit.automotivelinux.org/gerrit/c/apps/flutter-ics-homescreen/+/30326): Integrated voice assistant into `flutter-ics-homescreen`.
- [30339](https://gerrit.automotivelinux.org/gerrit/c/apps/agl-service-voiceagent/+/30339): Removed OpenAI’s Whisper AI and fixed bugs in `agl-service-voiceagent`.
- [30340](https://gerrit.automotivelinux.org/gerrit/c/src/snips-model-agl/+/30340): Updated `snips-model-agl`.
- [30363](https://gerrit.automotivelinux.org/gerrit/c/AGL/meta-agl-devel/+/30363): Removed OpenAI’s Whisper AI and its dependencies from the `meta-offline-voice-agent` layer.

## Tasks for Next Week
- Continue testing and bug fixing.
- Code review and feedback.
- Start working on documentation.

<br>
