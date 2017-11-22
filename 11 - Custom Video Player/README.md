# 11 - HTML Video Player
HTML5 video player with custom controls.

## Changes made from original:
- [x] Modify file structure so that it's a bit more organized
- [ ] Clean up/Reduce HTML, CSS, JS
- [ ] Try using `canplaythrough` event listener instead of `play` and `pause` event listeners. MDN says it is fired when playback is toggled between `paused` and `playing`.
- [ ] Improve accessibility (e.g. original has no text for playback buttons)
- [ ] Indicate volume and playback rate value on front-end
- [ ] Add full-screen functionality (suggestion from challenge)

## Things I learned:
- `step` attribute of `range` input and `datalist`
- Able to call a video method with a string like this: `video[methodString]();`
- `textContent` and the differences between it and `innerText` and `innerHTML`
