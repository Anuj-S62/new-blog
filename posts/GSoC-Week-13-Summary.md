---
title: "GSoC Week 13 Summary"
date: 13
---


<!-- # GSoC Week 08 Summary -->
**Date**: 19 Aug 2024 - 25 Aug 2024

## Introduction
This week focused on resolving issues with the audio recorder, testing the complete voice assistant on Raspberry Pi 5, and planning UI improvements for the Flutter app.

## Tasks Completed This Week

#### # Fixed the Audio Recorder:

Resolved an issue with the GStreamer pipeline where it wasn't buffering enough data before writing to the file. The fix involved adjusting the queue properties:

```python
queue = Gst.ElementFactory.make("queue", None)
queue.set_property("max-size-buffers", 0)
queue.set_property("max-size-time", 0)
queue.set_property("max-size-bytes", 0)
```

#### # Tested the Complete Voice Assistant on Raspberry Pi 5

#### # Discussed the UI of the Flutter App with ICS


## Tasks for Next Week
 - Continue working on the UI of the Voice Assistant.
 - Bug fixing and improving the overall performance of the system.

## Conclusion
This week was focused on resolving the audio recording issue and planning the UI improvements for the Flutter app.

<br>



