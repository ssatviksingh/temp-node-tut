const os = require('os')//built in module
//const {specific method} = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in second
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(), 
    freeMem:os.freemem() 
}
console.log(currentOS)