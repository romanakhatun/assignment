function onlyCharacter(str) {
  if (typeof str === "string") {
    let removeSpace = str.split(" ").join("").toUpperCase();
    return removeSpace;
  } else {
    return "Invalid";
  }
}

console.log(onlyCharacter(true));
