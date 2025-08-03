/** Problem -03 ( Medicine Planner ) */
var lastDay = 30;
//write your code here
for (var day = 1; day <= lastDay; day++) {
  if (day % 3 === 0) {
    console.log(`${day} - medicine`);
  } else {
    console.log(`${day} - rest`);
  }
}
