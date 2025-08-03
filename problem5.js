/** Problem 05 - ( PH Email Generator )  */
var student = { name: "mewo", roll: 96, department: "cse" };
//write your code here
var emailGenerate = student.name
  .concat(student.roll)
  .concat(".")
  .concat(student.department)
  .concat("@ph.ac.bd");
console.log(emailGenerate);
