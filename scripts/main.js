import { mathOps } from "./operations.js"

console.log("Welcome to the main module")

let sum = mathOps(10,5,'addition')
let difference = mathOps(10,5,'subtraction')
let product = mathOps(10,5,'multiplication')
let remainder = mathOps(10,5,'division')

// output ops result
console.log(sum, difference, product, remainder);

// what day is today?
const doozy = ['beaut', 'beauty', 'bees-knees', 'cats-meow', 'corker', 'crackerjack', 'daisy', 'dandy', 'dilly', 'dream', 'honey', 'hot-stuff', 'humdinger', 'hummer', 'jim-dandy', 'knockout', 'lollapalooza', 'lulu', 'nifty', 'peach', 'pip', 'pippin', 'ripper', 'ripsnorter', 'snorter', 'sockdolager', 'standout', 'sweetheart']
const random = Math.floor(Math.random() * doozy.length);

console.log(`Today is going to be a ${doozy[random]} day`)


