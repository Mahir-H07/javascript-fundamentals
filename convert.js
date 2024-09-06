function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

function inchToFeet2 (inch){
    const feetFraction = inch /12;
    const feetNumber = parseInt(feetFraction);

}



const shuvoHeight = inchToFeet(75);
console.log (shuvoHeight);

 const shuvoHeight2 = inchToFeet2(75);



 function mileToKilometer (mile){
    const Kilo = mile * 1.60934;
     return Kilo;

 }


 function kilometerToMiles(kilo){
    const kilo = kilo * 0.621371;
    return mile;
 }