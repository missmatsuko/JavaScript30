# 24 - Sticky Nav
Put nav at top of page after viewport is below its original position.
NOTE: I would just use `position: sticky;`, maybe with a polyfill to support IE and Edge < 16. It has pretty good support in other modern browsers otherwise.

## Changes made from original:
- [x] Modify file structure so that it's a bit more organized
- [ ] Add throttle for scroll
- [ ] Recalculate nav height and position on resize
- [x] Clean up CSS (more than changes in video)

## Things I learned:
