# 01 - JavaScript Drum Kit

## Changes made from original:
- [x] Modify file structure so that it's a bit more organized
- [x] Modify markup so that drum/key divs are buttons
- [x] ~~Modify styles so that highlighted styles are applied to the :active pseudo-selector instead of a 'playing' class~~ Realized I cannot trigger an "active" event with JS so this isn't that useful after all. However, I still don't like that it's listening for a specific style transition to end, so I'm changing it to end when the audio stops playing instead.
- [x] Enable clicking and tabbing/entering to play sounds as well
- [x] Use 'keypress' instead of 'keydown' (makes markup easier to understand and event listener less likely to fire when not needed)
