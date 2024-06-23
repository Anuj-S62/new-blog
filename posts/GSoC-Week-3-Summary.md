---
title: "GSoC Week 03 Summary"
---


<!-- # GSoC Week 02 Summary -->
**Date**: 10 June 2024 - 16 June 2024

## Introduction
In the third week of my Google Summer of Code (GSoC) project, I focused on enhancing the speech-to-text capabilities of the `agl-service-voiceagent` by integrating the Whisper AI model for offline use. Additionally, I addressed several issues with existing recipes and implemented features to improve the overall functionality and reliability of the service.

## Tasks Completed this Week

#### Created Recipe for Whisper Base Model
- Developed a recipe for the Whisper AI base model in [meta-whisper](https://github.com/Anuj-S62/meta-whisper).

#### Integrated Whisper AI into `agl-service-voiceagent` for Offline Mode
- **Link to agl-service-voiceagent**: [agl-service-voiceagent](https://github.com/Anuj-S62/agl-service-voiceagent)
- Renamed various functions and variables for better clarity:
  - `stt_model_path` to `vosk_model_path` and `whisper_model_path`
  - `setup_recognizer()` to `setup_vosk_recognizer()` in `stt_model.py`
  - `recognize()` to `recognize_using_vosk()` and `recognize_using_whisper()` in `stt_model.py`
- Implemented Remote Procedure Call (RPC) to utilize Whisper AI via the Python client.
- Added CLI arguments `--stt-framework vosk` and `--stt-framework whisper` to choose between Vosk and Whisper for speech-to-text conversion, with Vosk as the default.

#### Implemented Timeout Fallback for Whisper
- Introduced a timeout mechanism (default set to 5 seconds) for Whisper AI. If Whisper exceeds the timeout, it falls back to Vosk for speech-to-text conversion.

#### Resolved Issues in Some Recipes in `meta-offline-voice-agent`
- **python3-structlog**: Created a patch to fix issues in the `setup.py` file.
- **python3-magicfiter**

## Issues Faced
- Encountered difficulties running Rasa NLU with Python 3.11, as Rasa currently supports up to Python 3.10.
- **python3-scipy**: Build failed due to missing dependencies:
  - `pythran <0.16.0,>=0.14.0`
  - `gast`
  - `beniget`
  - Identified potential issues with the `python3-pythran` recipe.

## Tasks for Next Week
- Begin integrating Whisper AI for online mode.
- Fix issues in `agl-service-voiceagent`.

## Conclusion
This week was productive in terms of integrating and enhancing the offline speech-to-text capabilities of the `agl-service-voiceagent`. The challenges faced provided valuable insights. Next week, the focus will shift to enabling online mode for Whisper AI and resolving existing issues to improve the overall stability and performance of the service.

- 
