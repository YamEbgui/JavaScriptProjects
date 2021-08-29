const num = 546
let sum = 0
// your code goes here
function sumThereDigitNumbers(nu){
    sum=(nu%10)+(Math.floor((nu%100)/10))+Math.floor(nu/100)
}
sumThereDigitNumbers(num)
console.log(sum);

const a = 1; b = -1; c = 1;  // stands for x**2 - 6*x + 9 = 0
let solutionA = solutionB = 0
// your code goes here
function solve(){
    let newB=-b;
    solutionA=(newB+Math.sqrt((newB*newB)-(4*a*c)))/(2*a);
    solutionB=(newB-Math.sqrt((newB*newB)-(4*a*c)))/(2*a);

}
solve();
console.log(solutionA, solutionB)