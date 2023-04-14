let ll = 0
let rr = 0
basic.forever(function () {
    ll = pins.digitalReadPin(DigitalPin.P12)
    rr = pins.digitalReadPin(DigitalPin.P13)
    if (ll == 1 && rr == 0) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    } else if (ll == 0 && rr == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (ll == 1 && rr == 1) {
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
