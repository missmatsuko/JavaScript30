# 03 - Scoped CSS Variables and JS
Manipulate the styles applied to an image using HTML5 form inputs.

## Changes made from original:
- [x] Modify file structure so that it's a bit more organized
- [ ] Throttle `mousemove` listener?

## Things I learned:
- CSS variables: I haven't really looked at these too much yet because I typically use SASS and we still need to support IE11 at my work. I have used dynamic values like currentColor, though.
- Some differences between `NodeList` and `Array`, like `Array` has more methods available to it, and that `NodeList` may need to be converted to `Array` to use them.
- How to update CSS variables with `document.documentElement.style.setProperty()`
- What the `:root` pseudo-class is and how it's different from `html`: "identical to the selector html, except that its specificity is higher" ((MDN)[https://developer.mozilla.org/en-US/docs/Web/CSS/:root])
