/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
//Using only the splice() method, insert the missing colors into the array, and remove the color "Blackberry" by following these steps:
//1. Remove "Blackberry"
//2. Add "Yellow" and "Green"
//3.Add "Purple"//

// your code goes here
rainbow.splice(-2, 1, "Yellow", "Green");
rainbow.splice(5, 0, "Purple");

console.log(rainbow);
