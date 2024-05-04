console.clear()
//import required modules
const {readFileSync} = require("fs")
const express = require("express");
const https = require("https");
console.log(`[!] - Imported Modules (Express, HTTPS, FS)`)

//import configuration
const config = require("./config/demo.json")

//create https server options
const options = {
    cert:readFileSync(config.certificates.cert),
    key:readFileSync(config.certificates.key),
    passphrase:config.certificates.passphrase ?? "",
    port:config.port
}
console.log(`[!] - Imported Config + Created HTTPS Server Options`)

//create server & listen
const app = express();
const server = https.createServer(app,options)
console.log(`[!] - Created HTTPS Server`)
server.listen(options.port)
console.log(`[!] - HTTPS Server Listeing (PORT:${options.port})`)

//create routes (paths) to each destination page








console.log(`[+] - Loading Done`)