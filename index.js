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
// for of loop(Array)              ||      for in loop(object)


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
// let arr = ["Bloomberg","Google","Microsoft","Ibm","Netflix"];
// console.log(arr.slice(1,arr.length));
// arr.splice(3,1,"Ola");
// arr.push("Amazon");

// function myFunc(){
//     console.log("Hllo world");

// }
// myFunc();
// function sum(x, y){
//     return x+y;
// }

// function sum(x, y){
//     return x+y;
// }

// // Arrow function 
// // const mult=(a,b)=>{
// //     console.log(a*b);

// // }
// let mult=(a,b)=>{
//     console.log(a*b);

// }
// mult=5;
// //  Practice question on function 
// // function countVowel(str){
// //     str.toLowerCase();
// //     let count = 0;
// //     for (let char of str){
// //         if(char ===  "a"|char ===  "e"|char ===  "i"|char ===  "o"|char ===  "u"){
// //             count++;
// //         }
// //     }
// //     return  count;
// // }

// let  vowels=(str)=>{
//     str.toLowerCase();
//     let count = 0;
//     for (let char of str){
//         if(char ===  "a"|char ===  "e"|char ===  "i"|char ===  "o"|char ===  "u"){
//             count++;
//         }
//     }
//     return  count;
// }
// let nums= [24,79,45,80];
// nums.forEach((val)=>{
//     console.log(val**2);
// });

// DOM
// let h2 = document.querySelector("h1");
// h2.innerText = h2.innerText + "From Pubayan";
// let div = document.querySelector("div");
// div.setAttribute("id","box");
// let newButton= document.createElement("button");
// console.log(newButton);
// newButton.innerText="Press it";
// document.querySelector("p").after(newButton);
// Practice question


// let el = document.createElement("Button");
// el.innerText="Click me";
// el.style.backgroundColor = "red";
// el.style.color= "Blue";
// el.setAttribute("class","btn1")
// document.querySelector("Body").prepend(el);


// let para= document.querySelector("p");
// console.log(para.getAttribute("content"));


// let bt1 = document.querySelector("btn1");
// bt1.onClick= (evt) => {
//     console.log("You are clicking the button");

// };

// Practice question 
// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body")
// let mode = "light";
// modeBtn.addEventListener("click", () => {
//     if (mode === "light") {
//         mode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     } else {
//         mode = "light"
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(mode);

// });
// // 2nd qquestion
// // class and objects
// class user{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }

//     viewData(){
//         console.log("Name:"+this.name);
//     }
// }

// let student1 = new user("pubayan", "pk@gmail.com");
// student1.viewData();

// class admin extends user{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         super.name="hello";
//     }
// }

// let admin1 = new admin("admin","admin@gmail.com");
// admin1.editData();

// admin1.viewData();


// Infosys spring board prooblem 

const pi = 3.14;
// let radius= 6;
let area = pi*radius**2;
// let val = document.querySelector('h2');
// val.innerText = area;
var radius = 8;
area = pi*radius**2;
var radius = 9;

let val = document.querySelector('h2');
val.innerText = area;

let firstName="Pubayan";
let lastName="Kapat";
val.innerText = `My name is ${firstName} ${lastName} \n Email: ${firstName}${lastName}@gmail.com`;

document.write("<h2>Hlloworld</h2>");
