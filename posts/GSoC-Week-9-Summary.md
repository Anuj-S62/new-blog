---
title: "GSoC Week 09 Summary"
date: 9
---


<!-- # GSoC Week 08 Summary -->
**Date**: 22 July 2024 - 28 July 2024

## Introduction
This week marked significant progress in the integration of Whisper AI into the AGL Voice Agent. My focus was on resolving issues with the PyTorch recipe for arm64, updating the Kuksa client integration, and refining the voice agent's functionality. 

## Tasks Completed This Week

#### Fix PyTorch Recipe

- I addressed a compilation issue with `python3-pytorch` on arm64. The recipe was failing due to x86-specific dependencies. 

To resolve this, I conditionally included these x86-specific recipes and flags only when building for x86, allowing successful compilation on arm64.

#### Build and Test agl-ivi-demo-flutter Image with Voice Agent for qemuarm64

- Successfully built and tested the agl-ivi-demo-flutter image, which includes the voice agent, on the QEMU emulator for the arm64 architecture. 

#### Update Kuksa Client in [agl-service-voiceagent](https://github.com/Anuj-S62/agl-service-voiceagent)

- The `agl-service-voiceagent` was using the deprecated C++-based Kuksa VAL server for API execution. I rewrote and integrated the Kuksa interface to connect to the Rust-based Kuksa Databroker, ensuring a more modern and efficient API execution method.

#### Update the `intents_vss_map.json` and `vss_signals_spec.json`

- Updated these JSON files to reflect the latest intent and signal mappings, ensuring that the voice agent can correctly interpret and respond to user commands.

## Code Merged

- [30109](https://gerrit.automotivelinux.org/gerrit/c/apps/flutter-speechrecognition-demo/+/30109) : Update Voice Agent Flutter App

## Tasks for Next Week

- Continue working on the auto-mode in `agl-service-voiceagent`.

- Build and test the voice assistant on Raspberry Pi 5 (awaiting shipments).

- Continue working on Natural Language Understanding (NLU) improvements.


## Conclusion
This week was productive, with key improvements and fixes enhancing the AGL Voice Agent's functionality. The coming week will focus on further refining the voice agent's capabilities, particularly in auto-mode and NLU, as well as testing on new hardware.

<br>
