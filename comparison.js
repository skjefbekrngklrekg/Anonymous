(() => {
  'use strict';
  const videos = [document.getElementById('baseline'), document.getElementById('controlflow')];
  const play = document.getElementById('play-pair');
  const reset = document.getElementById('reset-pair');
  const clock = document.getElementById('pair-time');
  const rate = document.getElementById('playback-rate');
  const note = document.getElementById('playback-note');
  const statuses = videos.map(video => document.getElementById(`${video.id}-status`));
  let playing = false;
  let frame = 0;
  let generation = 0;
  const duration = video => Number.isFinite(video.duration) ? video.duration : 0;
  const position = () => Math.max(...videos.map(video => video.currentTime));
  const total = () => Math.max(...videos.map(duration));
  const defaultNote = 'Play both clips from the same playback position. The displayed clock measures video playback, not task completion time.';
  function render() {
    clock.textContent = `${position().toFixed(2)} s`;
    videos.forEach((video, index) => {
      const end = duration(video);
      const label = end && video.currentTime >= end - 0.02 ? 'Clip ended' : video.paused ? 'Paused' : 'Playing';
      statuses[index].textContent = `${label} · ${video.currentTime.toFixed(2)}${end ? ` / ${end.toFixed(2)}` : ''} s`;
    });
    play.innerHTML = playing ? 'Pause both <span aria-hidden="true">Ⅱ</span>' : 'Play both <span aria-hidden="true">▶</span>';
  }
  function stop() {
    generation += 1;
    playing = false;
    videos.forEach(video => video.pause());
    cancelAnimationFrame(frame);
    render();
  }
  function tick() {
    if (!playing) return;
    const active = videos.filter(video => !video.ended && video.currentTime < duration(video));
    // Correct drift without stretching either clip to the other's duration.
    if (active.length === 2 && active.every(video => video.readyState >= 3)) {
      const earliest = Math.min(...active.map(video => video.currentTime));
      active.forEach(video => { if (video.currentTime - earliest > 0.16) video.currentTime = earliest; });
    }
    if (videos.every(video => video.ended || (duration(video) && video.currentTime >= duration(video)))) { stop(); return; }
    render();
    frame = requestAnimationFrame(tick);
  }
  play.addEventListener('click', async () => {
    if (playing) { stop(); return; }
    const token = ++generation;
    const time = total() && position() >= total() - 0.02 ? 0 : position();
    videos.forEach(video => { video.currentTime = Math.min(time, duration(video) || time); video.playbackRate = Number(rate.value); });
    playing = true;
    note.textContent = defaultNote;
    render();
    const active = videos.filter(video => !duration(video) || video.currentTime < duration(video));
    const result = await Promise.allSettled(active.map(video => video.play()));
    if (token !== generation) return;
    if (result.some(item => item.status === 'rejected')) { stop(); note.textContent = 'Playback could not start. Try Play both again, or download the videos below.'; return; }
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(tick);
  });
  reset.addEventListener('click', () => { stop(); videos.forEach(video => { video.currentTime = 0; }); note.textContent = defaultNote; render(); });
  rate.addEventListener('change', () => videos.forEach(video => { video.playbackRate = Number(rate.value); }));
  videos.forEach(video => {
    ['loadedmetadata', 'timeupdate', 'ended'].forEach(event => video.addEventListener(event, render));
    video.addEventListener('error', () => { stop(); note.textContent = 'A comparison video could not load. Reload the page or use the video download links.'; });
  });
  // Native controls remain available when JavaScript is disabled.
  videos.forEach(video => { video.controls = false; });
  document.getElementById('pair-controls').hidden = false;
  window.addEventListener('pagehide', stop);
  render();
})();
