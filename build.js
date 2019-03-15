const fs = require("fs");
const src = require("./src/index.js");

fs.writeFileSync("output.json", JSON.stringify(src, null, 2), "utf8");
