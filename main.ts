namespace SpriteKind {
    export const Sprite = SpriteKind.create()
    export const Goal = SpriteKind.create()
}
info.setScore(0)
let TIMERSTOP = sprites.create(img`
    ...............bbbbbbbbbbbbbbbb22222.............
    ...........bbbbdd1111111111111122222bb...........
    ........bb222221111111111111111222221dbbb........
    ......bbd122222111111fff1122222222221111dbb......
    ....bbd11122222111111fff112222211111111111dbb....
    ...bd1111122222111111fff11222221111111111111db...
    ..bd11111122222111111fff112222211111111111111db..
    .bd11111111111122222222f1122222111111111111111db.
    .b111111111111122222222222111111111111111111111b.
    bd111111111111122222222222111111111111111111111db
    b11111111111111222222222221111111111111111111111b
    b11111111111111222222222221111111111111111111111b
    b11111111111111122222222222111111111111111111111b
    b11111111111111122222222222ffffffffff11111111111b
    bd1111111111111122222222222ffffffffff1111111111db
    .b1111111111111122222222222ffffffffff1111111111b.
    .bd1111111111111222222222221111111111111111111db.
    ..bd11111112222222222222222111111111111111111db..
    ...bd111111222221111112222211111111111111111db...
    ....bbd11112222211111111111222221111111111dbb....
    ......bbdd12222211111111111222221111111ddbb......
    .......22222222211111111111222221111ddbbb........
    .......22222bbbbddd1111111122222dbbbbb...........
    .......22222....bbbbbbbbbbb22222b................
    `, SpriteKind.Goal)
TIMERSTOP.setPosition(22, 57)
TIMERSTOP.setScale(0.5, ScaleAnchor.Middle)
let DUCK = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Sprite)
controller.moveSprite(DUCK)
info.startCountdown(100)
music.play(music.createSong(assets.song`THE SONG 2`), music.PlaybackMode.UntilDone)
if (TIMERSTOP.overlapsWith(DUCK)) {
    info.changeScoreBy(10)
    info.stopCountdown()
}
forever(function () {
	
})
