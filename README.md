# ControlFlow supplementary material

Project page: https://skjefbekrngklrekg.github.io/Anonymous/

The original link, https://skjefbekrngklrekg.github.io/Anonymous/test.html, remains available. `index.html` and `test.html` contain the same page and should be updated together.

## Contents

- Real-world push-button comparison: Diffusion Policy, Streaming Flow Policy, and ControlFlow.
- Real-world pull-screw comparison: Diffusion Policy, Streaming Flow Policy, and ControlFlow.
- A five-timestamp figure rendered from `Diff_vs_Ctrl_in_Real.pdf`, with the original PDF available to readers.
- Streaming Flow Policy and ControlFlow clips, with paired playback, pause, reset, and speed controls.

The push-button video reports 22 s, 20 s, and 13 s for Diffusion Policy, Streaming Flow Policy, and ControlFlow, respectively. The pull-screw video reports 12 s, 14 s, and 8 s in the same method order. These labels describe the supplied demonstrations, not aggregate benchmark statistics. The streaming comparison clock measures media playback, not task completion.

## Assets

- `ICRA_Push_Button.mp4`: web-optimized H.264 copy of `ICRA_Push_Button_Video_diff_stream_ctrl.mp4`; original 1920 x 1080 resolution, 30 fps, and audio retained, with fast-start playback.
- `ICRA_Pull_Screw_Video_diff_stream_ctrl.mp4`: supplied H.264 video with its container prepared for fast-start playback; original 1280 x 720 resolution, 30 fps, video, and audio retained without re-encoding.
- `pull-screw-poster.jpg`: frame extracted from the supplied pull-screw video.
- `real-comparison.webp`: high-resolution rendering of the supplied PDF with only page whitespace trimmed.
- `Diff_vs_Ctrl_in_Real.pdf`: unmodified source PDF.
- `org.mp4`, `controlflow.mp4`: existing streaming policy clips, unchanged.
- Poster images are extracted from the supplied videos.

No build step or external service is required. Serve this directory with any static web server. GitHub Pages publishes the repository's main branch. With JavaScript disabled, the native controls on each video remain available.
