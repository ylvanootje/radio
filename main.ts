input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
})
radio.setGroup(62)
