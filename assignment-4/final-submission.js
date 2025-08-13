function totalFine(fare) {
  if (typeof fare === "number" && fare > 0) {
    const fine = fare + fare * 0.2 + 30;
    return fine;
  } else {
    return "Invalid";
  }
}

function onlyCharacter(str) {
  if (typeof str === "string") {
    let removeSpace = str.split(" ").join("").toUpperCase();
    return removeSpace;
  } else {
    return "Invalid";
  }
}

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

function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  let sumMarks = 0;
  let pass = 0;
  let fail = 0;

  for (let i = 0; i < marks.length; i++) {
    sumMarks += marks[i];
    if (marks[i] >= 40) {
      pass++;
    } else {
      fail++;
    }
  }

  let finalScore = marks.length > 0 ? Math.round(sumMarks / marks.length) : 0;

  const result = {
    finalScore: finalScore,
    pass: pass,
    fail: fail,
  };

  return result;
}
