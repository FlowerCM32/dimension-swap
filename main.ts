input.onButtonPressed(Button.A, function () {
    man.change(LedSpriteProperty.X, -1)
    man_life.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    man.change(LedSpriteProperty.X, 1)
    man_life.change(LedSpriteProperty.X, 1)
})
let man_life: game.LedSprite = null
let man: game.LedSprite = null
let land = game.createSprite(0, 4)
let land_1 = game.createSprite(1, 4)
let land_2 = game.createSprite(2, 0)
let land_3 = game.createSprite(4, 4)
let cland = game.createSprite(3, 4)
man = game.createSprite(0, 3)
man_life = game.createSprite(0, 4)
basic.forever(function () {
    if (!(man_life.isTouching(land) || (man_life.isTouching(land_1) || (man_life.isTouching(land_2) || (man_life.isTouching(land_3) || man_life.isTouching(cland)))))) {
        let sprite: game.LedSprite = null
        man_life.delete()
        basic.pause(200)
        man.delete()
        basic.pause(200)
        game.gameOver()
        sprite.change(LedSpriteProperty.Y, 1)
    }
})
