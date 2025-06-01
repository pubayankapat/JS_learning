//alert
// alert("Welcome");

// object and its pproperties
// const item = {
//     title: "Ball pen",
//     price: 24,
//     discount: "5%",
// };

// console.log(item);
// const profile ={
//     name: "Pubayan Kapat",
//     isFollow: true,
//     followers: 455,
//     following: 4,
// }
// console.log(profile);

// operators +,-,*,/,%,**
// conditional operators >=,===,==,!=
// assignment operators: =,+=,*=,/=,%=
// string
// for of loop              ||      for in loop(object)


//Promt
/* Prompt the user to enter their full name .generate a user name based on their input ,start with "@" ,followred by their full name and ending with the full name length.
*/

// let fname = prompt("Enter full name without spaces");
// let size = fname.length;
// console.log("Your user name is:@"+fname+size);

// arrays:
// let marks =[97,82,33,75];
// let item=["hllo",45,"sweet"];
// let str= ["dr.", "fang", "carlos"];
// console.log(marks);
// console.log(marks.length);

// Array indices
// console.log(marks[2]);

// Looping over arrays
// Iterable 1.Array,2.Object
// we can access elements of array using for of loop

// for(let mark of marks){
//     console.log(mark);
    
// }

// for(let s of str){
//     console.log(s.toUpperCase());
    
// }
/*From a given array with marks of student.Find the average marks from the given array */
// let marks = [85, 97, 44,37,78];

// let sum=0;
// for (let val of marks){
//     sum = sum + val;
// }
// console.log(sum);

/*For a given array with price of 5 items all items have an offer of 10% off on them.Change the array to the final
array after applying offer*/

// let item = [100,200,250,350];
// let price;
// for(let i = 0;i<item.length;i++){
//     price=item[i]-item[i]*(0.1);
//     item[i]=price;
// }

// for(let val of item){
//     console.log(val);
// }

//  Array method practice  question 
let arr = ["Bloomberg","Google","Microsoft","Ibm","Netflix"];
console.log(arr.slice(1,arr.length));
arr.splice(3,1,"Ola");
arr.push("Amazon");

function myFunc(){
    console.log("Hllo world");
    
}

myFunc();








