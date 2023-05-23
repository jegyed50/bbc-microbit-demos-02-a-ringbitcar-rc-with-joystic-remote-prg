let Y = 0
let X = 0
radio.setGroup(90)
let szorzo = 3
music.setVolume(255)
basic.forever(function () {
    X = pins.analogReadPin(AnalogPin.P0)
    X = Math.map(X, 1023, 0, -100, 100)
    radio.sendValue("x", X)
    Y = pins.analogReadPin(AnalogPin.P1)
    Y = Math.map(Y, 1023, 0, -100, 100)
    radio.sendValue("y", Y)
    basic.pause(10)
})
