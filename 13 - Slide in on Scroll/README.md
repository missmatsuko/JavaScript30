# 11 - Slide in on Scroll
Slide in image elements by scrolling the page.

## Changes made from original:
- [x] Modify file structure so that it's a bit more organized
- [ ] ~~Create separate debounced checkSlide function so it doesn't run once on page load~~ Decided it's okay because image in view should probably be visible on document load anyways.
- [x] Make variables for repeated values
- [x] Use `classList.toggle` instead of `add/remove`
- [x] Use `getBoundingClientRect` instead of calculating both `window.scrollY` and image dimensions.

## Things I learned:
