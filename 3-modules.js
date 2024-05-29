//CommonJS, every file is module (by default)
//Modules - encapsulated code (only share minimum)
const names = require('./4-names') //exported objects are used here 
const sayhi = require('./5-utils')
const data = require("./6-alternative-flavor")
require('./7-mine grenade')

sayhi('susan')
sayhi(names.john)
sayhi(names.peter)