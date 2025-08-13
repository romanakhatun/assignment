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

console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12, 87]));
console.log(resultReport([99]));
console.log(resultReport(100));
