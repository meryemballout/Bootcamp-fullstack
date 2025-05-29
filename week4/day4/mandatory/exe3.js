const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}
//Convert this JS object into a JSON object. 
json_mario_game  =  JSON.stringify( marioGame );
console.log(json_mario_game);
console.log(typeof json_mario_game);
//What happens to the nested objects ?
//Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
json_mario_game_pretty  =  JSON.stringify( marioGame, null, 4 );
console.log('#################################################')
console.log(json_mario_game_pretty);