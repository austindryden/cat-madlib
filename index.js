const petDefense = require("./petDefense");
const catNames = require("cat-names");
const supervillains = require("supervillains");
const superb = require("superb");
const fs = require("fs");
const sentence = petDefense(catNames.random(), supervillains.random(), superb.random()) + `\n`;

fs.writeFile("madlibs.txt", sentence , {flag : 'a'}, x => x);