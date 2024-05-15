const fs = require("fs");
// Reading a file system
const readText = fs.readFileSync("./texts/read.txt", "utf-8");
// console.log(readText);

// Writing a Text
const writtenText = fs.writeFileSync(
  "./texts/write.txt",
  readText + "This is my written text"
);
console.log(writtenText);
