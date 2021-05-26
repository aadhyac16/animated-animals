basic.forever(function () {
    basic.showIcon(IconNames.Tortoise)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # # # # #
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.Tortoise)
})
