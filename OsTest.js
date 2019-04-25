const os = require('os')

var TotalMemory = os.totalmem
var FreeMemory = os.freemem

//console.log('Total Memory '+TotalMemory)

//console.log('Free Memory '+FreeMemory)

//If we want to Concat the var to string then istead of using the + sign use the ` with placholder

console.log(`Total Memory ${TotalMemory}`)
console.log(`Free Memory ${FreeMemory}`)