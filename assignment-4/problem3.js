function bestTeam(player1, player2) {
  const value1 = player1.foul + player1.cardY + player1.cardR;
  const value2 = player2.foul + player2.cardY + player2.cardR;

  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  } else if (value1 < value2) {
    return player1.name;
  } else if (value2 < value1) {
    return player2.name;
  } else {
    return "Tie";
  }
}

console.log(
  bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, "France")
);
