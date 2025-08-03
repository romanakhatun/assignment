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
