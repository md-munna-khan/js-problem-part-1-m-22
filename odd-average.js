function oddAverage(numbers){
    const odds = [];
for(const number of numbers ){
    if(number % 2 === 1){
       odds.push(number)
    } 
}
// console.log(odds)
let sum = 0;
for(const number of odds){
    sum = sum + number;
}
const count = odds.length;
console.log(sum, count);
const avg = sum / count;
return avg
}
const number = [45,56,78,23,46,33,67];
console.log(oddAverage(number))