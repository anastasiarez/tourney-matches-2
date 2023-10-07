
export const preparePlayerData = (playerData) => {
  const playerDataArray = Object.values(playerData);
  return playerDataArray;
};

export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player => { 
    
    //map function is used to iterate over each player object.For each player, a currentWins variable is initialized to 0. This variable will be used to keep track of the player's wins.

    //The reduce function is used to iterate over the matchData array. This function checks each match to see if the winner property of the match object matches the gamerTag property of the current player.

    const currentWins = matchData.reduce((accumulator, match) => {
      if (match.winner === player.gamerTag) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    }, 0);

    player.wins = currentWins; // returns an array containing all the player objects with the wins property added.

    return player;
  });
};