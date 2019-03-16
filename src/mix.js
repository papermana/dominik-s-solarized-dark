const parseHex = hexColor => ({
  r: parseInt(hexColor.slice(1, 3), 16),
  g: parseInt(hexColor.slice(3, 5), 16),
  b: parseInt(hexColor.slice(5, 7), 16)
});

const makeHex = ({ r, g, b }) =>
  "#" +
  [r, g, b].map(decimal => decimal.toString(16).padStart(2, "0")).join("");

const mix = (color1, color2, color2Weight = 0.5) => {
  const color1Rgb = parseHex(color1);
  const color2Rgb = parseHex(color2);
  const color1Weight = 1 - color2Weight;

  return makeHex({
    r: Math.round(color1Rgb.r * color1Weight + color2Rgb.r * color2Weight),
    g: Math.round(color1Rgb.g * color1Weight + color2Rgb.g * color2Weight),
    b: Math.round(color1Rgb.b * color1Weight + color2Rgb.b * color2Weight)
  });
};

module.exports = mix;
