# 01 - JS Drum Kit
Drum sounds are played upon user interaction.

## Changes made from original:
- [x] Modify file structure so that it's a bit more organized
- [x] Modify markup so that drum/key divs are buttons
- [ ] ~~Modify styles so that highlighted styles are applied to the `:active` pseudo-class instead of a 'playing' class~~ Found out that I cannot trigger an "active" event
- [x] Enable clicking and tabbing/entering to play sounds as well
- [x] Use `keypress` instead of `keydown`, making markup easier to understand and event listener less likely to fire when not needed
- [x] Remove 'playing' class on the audios' `ended` event instead of listening for `transitionend` on some specific style change that may be prone to change

## Things I learned:
- Cannot trigger an element to be `active` with JS
- `transitionend` event exists
- Some ES6 syntax
- Reinforce some understanding about the differences in `keypress` instead of `keydown`:
  - `keypress` doesn't trigger for keys that don't produce a character
  - `keycode` and `code` respectively, the former is a numerical code (e.g. "70") and the latter is a readable one (e.g. "KeyF")
