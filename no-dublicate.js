/**
 * array has some dublicates elements
 */

const batpar=['abul', 'babul','kabul','abul','babul'];
const number =[1,2,3,4,5,1,2,3];

function noDublicate(array){
    const unique = []
for(const item of array ){
    if( unique.includes(item) === false){
        unique.push(item);
    }
}
return unique
}
const arr =noDublicate(number);
console.log(arr);