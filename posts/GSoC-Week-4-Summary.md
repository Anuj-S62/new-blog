---
title: "GSoC Week 04 Summary"
date: 4
---


<!-- # GSoC Week 02 Summary -->
**Date**: 17 June 2024 - 23 June 2024
## Introduction
In the fourth week of my Google Summer of Code (GSoC) project, I focused on integrating Whisper AI for online mode. The primary objectives were to resolve existing errors in python3-scipy and other recipes, refine the meta-whisper layer recipes, and containerize the Whisper AI service.

## Tasks I Have Completed This Week

- Resolved Errors in agl-service-voiceagent:

   - Resolved issues related in `python3-scipy` and `python3-scikit-learn` recipes.
   - Fixed errors in the voice-agent flutter app recipe.

- Refactored Recipes in meta-whisper Layer:

   - Added licenses and Removed unnecessary recipes from the [meta-whisper](https://github.com/Anuj-S62/meta-whisper) layer.

- Containerized Whisper AI Using Docker:

   - Created a Docker container for Whisper ASR service.
   - Implemented a gRPC-based connection between the containerized Whisper service and a Python client.
   - [Whisper Container Github Repo](https://github.com/Anuj-S62/agl-whisper-docker)

## Use agl-whisper-docker:

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/Anuj-S62/agl-whisper-docker
    ```

2. **Build the Docker Image:**

    ```sh
docker build -t whisper-asr-service .
    ```

3. **Run the Docker Container:**

    ```bash
docker run -p 50051:50051 whisper-asr-service
    ```

4. **Access the Whisper Service:**
    - The Whisper service will be available at `localhost:50051`.
    - Use the Python client to interact with the service.

    ```sh
python3 python3 agl_whisper_client_example.py --ip 127.0.0.1 --port 50051 --audio_path audio_file_path
    ```

## Tasks for Next Week
- Integrate the containerized Whisper AI into the `agl-service-voiceagent`.
- Test Whisper AI with `agl-service-voiceagent` on an AGL image.

## Conclusion
This week was highly productive, with significant progress made in error resolution, recipe refinement, and the containerization of Whisper AI. I am looking forward to integrating Whisper AI into the AGL service voice agent and validating its functionality in the AGL environment.


- 