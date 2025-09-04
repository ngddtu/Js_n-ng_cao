console.log('Hoisting in JavaScript');


/* Hoisting in JavaScript
- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.
- This means you can use variables and call functions before they are declared in the code.
- However, only the declarations are hoisted, not the initializations.
*/

/* 
- var được hoisting đưa lên đầu những sẽ có giá trị là undefined
- let và const cũng được hoisting nhưng không thể sử dụng trước khi khai báo
- declaration function cũng được hoisting
- expression function thì không
*/

console.log(a);

var a = 10; //undefined



