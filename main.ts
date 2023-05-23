radio.setGroup(90)
basic.forever(function () {
    radio.sendValue("x", Math.idiv(input.acceleration(Dimension.X), 10))
    basic.pause(100)
    radio.sendValue("y", Math.idiv(input.acceleration(Dimension.Y), 10))
    basic.pause(100)
})
