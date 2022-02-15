radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("name", input.acceleration(Dimension.X))
    radio.sendValue("name", input.acceleration(Dimension.Y))
})
