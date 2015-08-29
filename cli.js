#!/usr/bin/env node

require("source-map-support").install()
require("./_cli.js")(process.argv.slice(2))
