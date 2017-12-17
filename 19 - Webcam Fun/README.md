# 19 - Webcam Fun
Apply a variety of filters from a local webcam stream and save snapshots.

## Changes made from original:
- [x] Modify file structure so that it's a bit more organized
- [x] Cleaner way to write effect functions?
- [ ] Move value checked for `greenScreen` filter out of `paintToCanvas` (it's running every 50ms)
- [ ] Create buttons to toggle between existing filters
- [ ] Create new filters (suggested in video)

## Things I learned:
- How to display live webcam feed
- That passing a video to `drawImage()` will render its current frame in canvas
- More ways to use canvas
- `insertBefore`, `firstChild`, `getImageData`, `putImageData`
