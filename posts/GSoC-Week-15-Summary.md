---
title: "GSoC Week 15 Summary"
date: 15
---


<!-- # GSoC Week 08 Summary -->
**Date**: 02 Sept 2024 - 08 Sept 2024
## Introduction
This week focused on building out the UI components for the voice assistant and pushing updates to the AGL service. 

## Tasks Completed This Week

#### # Created UI Components for Voice Assistant
Developed all the necessary UI elements for the voice assistant, including:
- A button to start the voice assistant on the home screen.
- A toggle button to enable/disable the voice assistant.
- In the voice assistant settings:

    - A button to enable/disable the voice assistant.
    - A button to activate wake word detection.
    - A button to toggle online mode.
    - A button to select the speech-to-text model.

#### # Demo Video of Voice Assistant UI : [Link](https://youtu.be/GnZg5rz_db0)

#### # Images:
<!-- make the image to display side by side -->

<img src="/images/ui-image1.png"alt="Sever" width="600" height="800">
<br/><br/>
<!-- make the image to display side by side -->

<img src="/images/ui-image2.png"alt="Sever" width="600" height="800">
<br/><br/>

#### # Pushed V2 for `agl-service-voiceagent` on Gerrit : [30077](https://gerrit.automotivelinux.org/gerrit/c/apps/agl-service-voiceagent/+/30077)

#### # Tasks for Next Week

- Implement the voice assistant gRPC client to communicate with `agl-service-voiceagent`.
- Refactor `meta-offline-voice-agent` layer to remove OpenAI’s Whisper AI and its dependencies.

## Conclusion
This week was productive with the completion of UI components and backend updates. Next week’s focus will be on integrating the gRPC client and cleaning up dependencies in the voice assistant layer.

<br>
