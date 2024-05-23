/*  
Welcome, new coder. 
Enter your code on line 7 to print 'Hello, World!' 
to the console (the panel on the right)
*/
const mssg = 'I\nam\nIron Man'


console.log("Hello, World!");

/*  
Next, PLAY! 
Modify your code on line 7 to try to accomplish the tasks listed below:

   1. Change the message that is printed.
   2. Figure out what the parentheses do. Will the code work without them?
   3. Remove one or both quotation marks. Do we need to include both opening and closing quote marks? Is there a difference between using a single or a double quote (' vs. ")?
   4. Remove the semi-colon, ;.
   5. Print a number. (Bonus: Print two numbers added together).
   6. Print multiple messages one after the other.
   7. Print two messages on the same line.
   8. Print a message that contains quote marks, such as Quoth the Raven "Nevermore".
   9. Other. You choose!
*/


console.log(mssg);
/*
if (counter < 5) {
  console.log(counter++);
}
*/

for (let counter = 0 ;counter <= 5; ++counter) {
  if (counter === 0){
    console.log("Hello");
  } else if (counter === 1){
    console.log("World");
  } else if (counter === 2){
    console.log("My");
  } else if (counter === 3){
    console.log("Name");
  } else if (counter === 4){
    console.log("IS");
  } else if (counter === 5){
    console.log('"COLIN"');
  } else{
    break;
  }
}

const message1 = "It's nice to ";
const message2 = "meet you!";

const two_in_one = message1 + message2

console.log(two_in_one)
console.log(15*14)
console.log(16 - 2 * 5 / 3 + 1);

const input = require('readline-sync');

let info = input.question("Please enter your age: ");
//user enters 25

console.log(typeof info);