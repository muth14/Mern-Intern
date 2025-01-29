// const readline = require("readline")
// const rl = readline.createInterface({
//     input: process.stdin,
//     output:process.stdout
// })

// let variable = ""
// rl.question("Enter your name:",(data)=>{
//     variable = data;

// })
// // console.log(variable);
// const os=require("os")
// console.log(os.arch());
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.homedir());
// console.log(os.cpus());
// console.log(os.tmpdir());
const path=require("path")
console.log(__dirname);
console.log(__filename);
console.log(path.basename("C:\ Users\ Muthu visalakshi\ Desktop\ intern 4th sem\ server\ userinput.js"));
console.log(path.basename("sample.txt"));
console.log(path.join("folder","userinput.js"));
console.log(path.parse("c.userinput.js"));