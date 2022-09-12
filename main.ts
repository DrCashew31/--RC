input.onButtonPressed(Button.A, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendString("your mom")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(5)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(4)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(2)
})
radio.setGroup(10)
