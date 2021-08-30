//const num = 546
//let sum = 0
// your code goes here
//function sumThereDigitNumbers(nu){
//    sum=(nu%10)+(Math.floor((nu%100)/10))+Math.floor(nu/100)
//}
//sumThereDigitNumbers(num)
//console.log(sum);

// const a = 1; b = -1; c = 1;  // stands for x**2 - 6*x + 9 = 0
// let solutionA = solutionB = 0
// // your code goes here
// function solve(){
//     let newB=-b;
//     solutionA=(newB+Math.sqrt((newB*newB)-(4*a*c)))/(2*a);
//     solutionB=(newB-Math.sqrt((newB*newB)-(4*a*c)))/(2*a);

// }
// solve();
// console.log(solutionA, solutionB)

// const num = -8;
// let absolute;
// // your code goes here
// function absNumber(){
//     if(num<0){
//         absolute=0-num;
//     }
//     else{
//         if(absolute>0){
//             absolute=num;
//         }
//         else{
//             absolute=0;
//         }
//     }
    
// }
// absNumber();
// console.log(absolute)


const grades =  [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]
// your code goes here
let range=0;
let median=0;
let halfRange=0;

function calculate()
{
    //this section solve the range 
    let newArray=grades.slice(0);
    newArray=newArray.sort();
    range=newArray[newArray.length-1]-newArray[0];
    //this section solve the median
    if(newArray.length%2==0){
        median=(newArray[newArray.length/2]+newArray[(newArray.length/2)-1])/2
    } 
    else{
        median=newArray[Math.floor(grades.length/2)]
    }
    //this section solve the halfRange
    newArray=grades.slice(Math.floor(grades.length/2));
    newArray=newArray.sort();
    halfRange=newArray[newArray.length-1]-newArray[0];
    
}
calculate()
console.log("Range:"+range+"\nMedian:"+median+"\nHalf Range:"+halfRange);
