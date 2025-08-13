function totalFine(fare) {
  if (typeof fare === "string" || fare <= 0) {
    return "Invalid";
  } else {
    const fine = fare + fare * 0.2 + 30;
    return fine;
  }
}
console.log(totalFine("Gorib tai ticket katinai"));
