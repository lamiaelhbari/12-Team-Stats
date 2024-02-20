// Challenge TeamStats :

const team = {
  //1-  Populating Data :

  // - Players :
  _players: [
    (player1 = {
      firstName: "Adam",
      lastName: "Brad",
      age: 40,
    }),
    (player2 = {
      firstName: "Kilien",
      lastName: "Place",
      age: 56,
    }),
    (player3 = {
      firstName: "Mellany",
      lastName: "Robin",
      age: 38,
    }),
  ],

  // - Games :
  _games: [
    (BasketBall = {
      opponent: "Lakers",
      teamPoints: 93,
      opponentPoints: 88,
    }),
    (football = {
      opponent: "Real Madrid",
      teamPoints: 4,
      opponentPoints: 1,
    }),
    (tennis = {
      opponent: "Maria Sharapova",
      teamPoints: 6,
      opponentPoints: 16,
    }),
  ],

  // 2- Getting Data :
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  // 3- Adding Data :

  addPlayer(newFirstName, newLastName, newAge) {
    const newPlayer = {
      newFirstName,
      newLastName,
      newAge,
    };
    this._players.push(newPlayer);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const newGame = {
      newOpponent,
      newTeamPoints,
      newOpponentPoints,
    };
    this._games.push(newGame);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Titans", 100, 98);
console.log(team.games);
