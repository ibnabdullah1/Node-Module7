const fs = require("fs");
//Reading text asynchronously
fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
  if (err) throw err;
  //   console.log(data);

  // Writing text asynchronously
  fs.writeFile("./texts/write.txt", data, "utf-8", (err) => {
    if (err) throw err;
    console.log(data);
  });
});
