let saiy = false
player.onChat("saiyan", function () {
    saiy = true
    player.say("AHHHH!")
    mobs.spawnParticle(EXPLOSION_HUGE, player.position())
    mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 600, 10)
    mobs.applyEffect(HEALTH_BOOST, mobs.target(LOCAL_PLAYER), 600, 35)
    mobs.applyEffect(JUMP_BOOST, mobs.target(LOCAL_PLAYER), 600, 25)
    mobs.applyEffect(FIRE_RESISTANCE, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(RESISTANCE, mobs.target(LOCAL_PLAYER), 600, 150)
    mobs.applyEffect(STRENGTH, mobs.target(LOCAL_PLAYER), 600, 70)
    loops.pause(600000)
    saiy = false
})
player.onTravelled(SPRINT, function () {
    if (saiy == true) {
        blocks.place(FIRE, player.position())
    }
})
loops.forever(function () {
    if (saiy == true) {
        mobs.spawnParticle(LAVA_PARTICLE, player.position())
        mobs.spawnParticle(CANDLE_FLAME, player.position())
        mobs.spawnParticle(CRITICAL_HIT, player.position())
    }
})
player.onTravelled(FLY, function () {
    if (saiy == true) {
        mobs.spawnParticle(EXPLOSION_HUGE, player.position())
    }
})
