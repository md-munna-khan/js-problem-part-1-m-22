// 12 inch 1 fit

// function inchToHeight (inch){
//     const feet = inch / 12;
// return feet;
// }

// const munnnaHeight = inchToHeight(75);
// console.log(munnnaHeight);



// how to output inch

function inchToHeight2(inch){
    const feetFraction = inch /12;
    const number = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = number  + '  fit  ' + inchRemaining + ' inch ';
    return result;
}

const munnaHeight= inchToHeight2(75);
console.log(munnaHeight);
