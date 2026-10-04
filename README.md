# ControlFlow supplementary material

Project page: https://skjefbekrngklrekg.github.io/Anonymous/

The original link, https://skjefbekrngklrekg.github.io/Anonymous/test.html, remains available. `index.html` and `test.html` contain the same page and should be updated together.

## Contents

- Real-world push-button comparison: Diffusion Policy and ControlFlow.
- A five-timestamp figure rendered from `Diff_vs_Ctrl_in_Real.pdf`, with the original PDF available to readers.
- Streaming Flow Policy and ControlFlow clips, with paired playback, pause, reset, and speed controls.

The 24 s and 13 s labels are taken from the supplied real-world demonstration. They describe this demonstration, not aggregate benchmark statistics. The streaming comparison clock measures media playback, not task completion.

## Assets

- `ICRA_Push_Button.mp4`: web-optimized H.264 copy of the supplied video; original 1280 x 720 resolution and 30 fps retained, with fast-start playback.
- `real-comparison.webp`: high-resolution rendering of the supplied PDF with only page whitespace trimmed.
- `Diff_vs_Ctrl_in_Real.pdf`: unmodified source PDF.
- `org.mp4`, `controlflow.mp4`: existing streaming policy clips, unchanged.
- Poster images are extracted from the supplied videos.

No build step or external service is required. Serve this directory with any static web server. GitHub Pages publishes the repository's main branch. With JavaScript disabled, the native controls on each video remain available.
