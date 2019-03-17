const flatten = require("./flatten");
const mix = require("./mix");

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
const hilight = base2 + "10";
const transparent = "#00000000";

const lighten = color => mix(color, base2, 0.1);
const darken = color => mix(color, "#000000", 0.1);

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
    selectionForeground: base1,
    selectionHighlightBackground: hilight,
    selectionHighlightBorder: transparent
  },

  editorGutter: {
    background: base03,
    addedBackground: green,
    modifiedBackground: orange,
    deletedBackground: red
  },

  editorLineNumber: {
    foreground: base01,
    activeForeground: base1
  },

  editorCursor: {
    foreground: cyan
  },

  editorWhitespace: {
    foreground: "#93A1A180"
  },

  diffEditor: {
    insertedTextBackground: green,
    removedTextBackground: red
  },

  activityBar: {
    background: darken(base02),
    foreground: darken(base3),
    inactiveForeground: darken(base1),
    border: transparent
  },

  activityBarBadge: {
    background: magenta
  },

  sideBar: {
    background: base02,
    foreground: base1,
    border: transparent
  },

  sideBarSectionHeader: {
    background: lighten(base02),
    foreground: lighten(base1),
    border: transparent
  },

  editorGroupHeader: {
    tabsBackground: base02
  },

  tab: {
    activeBackground: base03,
    activeForeground: base1,
    inactiveBackground: base02,
    inactiveForeground: base0,
    border: transparent
  },

  notifications: {
    background: base02,
    foreground: base1
  },

  editorWidget: {
    background: base02
  },

  statusBar: {
    background: darken(base03),
    foreground: darken(base1),
    noFolderBackground: darken(base03),
    noFolderForeground: darken(base1)
  },

  statusBarItem: {
    hoverBackground: lighten(base02)
  },

  titleBar: {
    activeBackground: base02,
    activeForeground: base1,
    inactiveBackground: darken(base02),
    inactiveForeground: darken(base1)
  },

  badge: {
    background: blue,
    foreground: base3
  },

  progressBar: {
    background: magenta
  }
});
