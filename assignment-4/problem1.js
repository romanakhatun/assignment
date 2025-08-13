function totalFine(fare) {
  if (typeof fare === "number" && fare > 0) {
    const fine = fare + fare * 0.2 + 30;
    return fine;
  } else {
    return "Invalid";
  }
}
console.log(totalFine(200));
console.log(totalFine(0));
console.log(totalFine(50));
console.log(totalFine(552));
console.log(totalFine(-35));
console.log(totalFine("65"));
console.log(totalFine("Gorib tai ticket katinai"));
