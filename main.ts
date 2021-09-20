scene.setBackgroundColor(1)
let mySprite = sprites.create(assets.image`football`, SpriteKind.Player)
game.onUpdate(function () {
    mySprite.x += controller.dx()
    mySprite.y += controller.dy()
})
