// Iteration 1: Names and Input
let hacker1 = "Joan"
console.log("The driver's name is " + hacker1);

let hacker2 = "Maria"
console.log("The navigator's name is "+ hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(
      "The driver has the longest name. It has" + hacker1.length + " characters."
    );
  } 
  
  if (hacker1.length < hacker2.length) {
    console.log(
      "It seems that the navigator has the longest name, it has " + hacker2.length + " characters."
    );
  } 
  
  if (hacker1.length == hacker2.length) {
    console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
  }
// Iteration 3: Loops

// 3.1
console.log(hacker1.split('').join(' ').toUpperCase());

// 3.2

let naviRev = []
for (let i = hacker2.length-1; i>=0; i--) {
  console.log(i)
  naviRev.push(hacker2[i])
}

console.log(naviRev.join('') )

// 3.2

if (hacker1.length < hacker2.length){
  console.log(`The ${hacker1} name goes first.`)
 }
if (hacker2.length < hacker1.length){
   console.log(`Yo, the ${hacker2} goes first definitely.`)
 } 
 if (hacker2.length = hacker1.length) {
   console.log(`What?! You both have the same name?`)
 }



// PD. en el 3.1 se que no se tenian que usar Métodos, pero no encontre otra manera.

// PD 2. en el 3.3 se me solapan 2 de ellos y no se porque.

// PD 3. Espero poder entregar Labs mas en condiciones a futuro 



