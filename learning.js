const num = 546
let sum = 0
// your code goes here
function sumThereDigitNumbers(nu){
    sum=(nu%10)+(Math.floor((nu%100)/10))+Math.floor(nu/100)
}
sumThereDigitNumbers(num)
console.log(sum);