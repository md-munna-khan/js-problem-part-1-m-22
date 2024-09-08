/**
 * simple logic
 * year will be leap year if the year is divisible by 4
 */

// function isleapYear (year){
//     if(year % 4 === 0){
//         return true;
//     }
//     else{
//         return false
//     }
// }
// const year = isleapYear(2052);
// console.log(year);

/**
 * 1. those year that not divisible by 100 and divisible by 4,if the year is divisible by 4:
 * then it will be a leap year
 * 
 * 2. if the year divisible by 400 , then it is a leap year
 * 
 * 3. else it is not a leap year
 */ function isleapYear2(year){
    if( year % 100 !== 0 && year % 4 === 0){
        return true
    }
    else if ( year % 100 === 0 && year % 400 === 0){
        return true
    }
    else {
        return false
    }
 }
 const isleap = isleapYear2(2100);
 const isleap1 = isleapYear2(1900);
 const isleap2 = isleapYear2(2300);
 const isleap3 = isleapYear2(2020);
 console.log( isleap,isleap1,isleap2,isleap3);