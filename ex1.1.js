/*
Ex1.1 - Yes or No
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/


const booleanToString = bool => bool===true?"Yes":"No";
const booleanToString2 = bool => bool && "Yes" || "No";
