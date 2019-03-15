const flatten = require("./flatten");

const base03 = "#002b36";
const base02 = "#073642";
const base01 = "#586e75";
const base00 = "#657b83";
const base0 = "#839496";
const base1 = "#93a1a1";
const base2 = "#eee8d5";
const base3 = "#fdf6e3";
const yellow = "#b58900";
const orange = "#cb4b16";
const red = "#dc322f";
const magenta = "#d33682";
const violet = "#6c71c4";
const blue = "#268bd2";
const cyan = "#2aa198";
const green = "#859900";

module.exports = flatten({
  focusBorder: cyan,

  widget: {
    shadow: "#000000c0"
  },

  selection: {
    background: base02
  },

  button: {
    background: cyan,
    foreground: base3
  },

  input: {
    background: base03,
    foreground: base0
  },

  inputOption: {
    activeBorder: cyan
  },

  editor: {
    background: base03,
    foreground: base0,
    lineHighlightBackground: "#0A2933",
    selectionBackground: base02,
    selectionForeground: base1
  },

  editorCursor: {
    foreground: cyan
  },

  editorWhitespace: {
    foreground: "#93A1A180"
  },

  activityBar: {
    background: base02,
    foreground: base3,
    inactiveForeground: base1,
    border: base03
  },

  activityBarBadge: {
    background: magenta
  },

  sideBar: {
    background: base02,
    foreground: base1,
    border: base03
  },

  editorGroupHeader: {
    tabsBackground: base02
  },

  tab: {
    activeBackground: base03,
    activeForeground: base1,
    inactiveBackground: base02,
    inactiveForeground: base0,
    hoverBackground: base03,
    border: base02
  },

  notifications: {
    background: base02,
    foreground: base1
  },

  editorWidget: {
    background: base02
  },

  statusBar: {
    background: base02,
    foreground: base1,
    noFolderBackground: base02,
    noFolderForeground: base1
  },

  titleBar: {
    activeBackground: base02,
    activeForeground: base1,
    inactiveBackground: base03,
    inactiveForeground: base0
  }
});
