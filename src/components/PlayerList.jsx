import Player from "./Player";

const PlayerList = (props) => {

  const players = props.playerData.map((player) => {
    return (
      <Player
        key={player.gamerTag}
        firstName={player.firstName}
        lastName={player.lastName}
        gamerTag={player.gamerTag}
        wins={player.wins}
      />
    );
  });

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {players}
    </section>

  );
};

export default PlayerList;