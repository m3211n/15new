// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a000800010d0b0b0b0b0b0b0d02010b030e04040e050b02010b110a0a0a0a100c02010b010a0a0a0a060b02010c130a0a0a0a060b02010b110a0a0a0a100b02010b090f08120f070b02010d0b0b0b0c0b0b0d02`, img`
. . . . . . . . . . 
. . 2 2 2 2 2 2 . . 
. . 2 . . . . 2 . . 
. . 2 . . . . 2 . . 
. . 2 . . . . 2 . . 
. . 2 . . . . 2 . . 
. . 2 2 2 2 2 2 . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorDark2,sprites.dungeon.floorDark5,sprites.dungeon.floorDarkDiamond,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
