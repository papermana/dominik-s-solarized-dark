const fs = require("fs");
const src = require("./src/index.js");

fs.writeFileSync(
  "themes/dominik-s-solarized-dark-color-theme.json",
  JSON.stringify(src, null, 2),
  "utf8"
);
