#!/usr/bin/env node

require("earlgrey/register");
require("./lib/_cli.js")(process.argv.slice(2));
