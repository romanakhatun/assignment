/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
var increaseSalary = startingSalary;
for (var i = 1; i <= experience; i++) {
  increaseSalary += (increaseSalary * 5) / 100;
}
console.log(increaseSalary.toFixed(2));
