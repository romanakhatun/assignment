/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var divideArea = area / 2;
console.log(divideArea);

/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here
if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

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

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here
if (
  fileName.includes(".pdf") |
  fileName.includes(".docx") |
  (fileName.charAt(0) === "#")
) {
  console.log("Store");
} else {
  console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "mewo", roll: 96, department: "cse" };
//write your code here
console.log(`${student.name}${student.roll}.${student.department}@ph.ac.bd`);

/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
var increaseSalary = startingSalary;
for (var i = 1; i <= experience; i++) {
  increaseSalary += (increaseSalary * 5) / 100;
}
console.log(increaseSalary.toFixed(2));
