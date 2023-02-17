input.onButtonPressed(Button.A, function () {
    man.change(LedSpriteProperty.X, -1)
    man_life.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    man.change(LedSpriteProperty.X, 1)
    man_life.change(LedSpriteProperty.X, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (D == 1) {
        cwall = game.createSprite(3, 3)
        cland = game.createSprite(1, 4)
        D = 2
        return
    }
    if (D == 2) {
        cwall.delete()
        cland.delete()
        D = 1
        return
    }
})
let w = 0
let D = 0
let cwall: game.LedSprite = null
let cland: game.LedSprite = null
let man_life: game.LedSprite = null
let man: game.LedSprite = null
let wall = game.createSprite(3, 0)
wall = game.createSprite(3, 1)
wall = game.createSprite(3, 2)
let land = game.createSprite(0, 4)
let land_1 = game.createSprite(2, 4)
let land_2 = game.createSprite(3, 4)
let land_3 = game.createSprite(4, 4)
man = game.createSprite(0, 3)
man_life = game.createSprite(0, 4)
cland = game.createSprite(0, 4)
cwall = game.createSprite(0, 4)
cland.delete()
cwall.delete()
D = 1
basic.forever(function () {
    if (!(w == 1)) {
        if (!(man_life.isTouching(land) || (man_life.isTouching(land_1) || (man_life.isTouching(land_2) || (man_life.isTouching(land_3) || man_life.isTouching(cland)))))) {
            let sprite: game.LedSprite = null
            man_life.delete()
            basic.pause(500)
            man.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
            man.delete()
            basic.pause(500)
            game.gameOver()
            sprite.change(LedSpriteProperty.Y, 1)
        }
    }
})
basic.forever(function () {
    if (man.isTouching(cwall)) {
        man.change(LedSpriteProperty.X, -1)
        man_life.change(LedSpriteProperty.X, -1)
    }
    if (man_life.isTouching(land_3)) {
        w = 1
        basic.showString("Win")
        control.reset()
    }
})
