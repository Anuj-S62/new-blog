---
title: "GSoC Week 06 Summary"
date: 6
---


<!-- # GSoC Week 05 Summary -->
**Date**: 01 July 2024 - 07 July 2024

## Introduction
This week has been pivotal in advancing the integration of Whisper AI into the Automotive Grade Linux (AGL) Voice Agent. 

Significant progress has been made in merging and updating various layers and recipes essential for building the Whisper AI into the AGL image.

## Tasks Completed This Week

- **Merged `meta-whisper` layer into the `meta-offline-voice-agent` layer:** 
    - Updated the `meta-offline-voice-agent` layer to include the recipes and configurations from the `meta-whisper` layer.

- **Updated the `meta-offline-voice-agent` to use recipes from the `meta-python-ai` layer:** 
    - Removed all existing recipes from the `meta-offline-voice-agent` layer that are present in the `meta-python-ai` layer, now using the `meta-python-ai` layer for all the recipes.

- [30060](https://gerrit.automotivelinux.org/gerrit/c/AGL/meta-agl-devel/+/30060) : Build Whisper AI into the AGL image.
- [30077](https://gerrit.automotivelinux.org/gerrit/c/apps/agl-service-voiceagent/+/30077) : Integrate Whisper AI into the AGL Voice Agent Service.

## Tasks for Next Week
- Code review of the pushed code.
- GSoC Mid-term evaluation.
- Begin development of the voice agent Flutter app to leverage Whisper AI.


## Conclusion
This week marked a significant milestone in the GSoC project, with the successful merging and updating of essential layers and recipes. The upcoming week will focus on reviewing the code and starting the development of a Flutter app to further utilize the capabilities of Whisper AI within the AGL ecosystem.


-
