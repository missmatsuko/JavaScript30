# 02 - JS + CSS Clock
Functional analog clock.

## Changes made from original:
- [x] Modify file structure so that it's a bit more organized
- [x] Style clock hands so they can be visually differentiated without waiting for hands to move
- [ ] ~~Style clock so it has numbers and lines?~~ Decided against it because I don't want to spend time making assets.
- [x] Make JS variable names more consistent (i.e. plural/singular, abbreviations)
- [x] Adjust the styling instead of adding 90(deg) in JS
- [x] Fix "jump" in animation when hand gets to 12 o'clock (kind of cheated - just removed transition because I didn't think it was adding much effect anyways)
- [x] Add text value of time for accessibility
- [x] Only change transform/content when it is not the same as previous
- [ ] Remove repetitive parts in JS

## Things I learned:
I don't think I really learned any new things from this day. Half the tutorial was focusses on the CSS part. I practiced my skills by separating style and logic more from the original, and making the styles more useful (e.g. having different length clock hands). I still think using dates/times in JS is a bitch without a library like Moment.js, although that would be overkill for this project.
