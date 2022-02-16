radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("x", input.acceleration(Dimension.X))
})
