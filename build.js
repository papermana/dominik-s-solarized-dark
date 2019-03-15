const fs = require("fs");
const src = require("./src/index.js");

fs.writeFileSync(
  "themes/Dominik's Solarized Dark-color-theme.json",
  JSON.stringify(src, null, 2),
  "utf8"
);
