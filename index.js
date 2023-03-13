// This is new javascript page
/*let name='jayanth',lastname='onteru';
let num=12;
let myvar=true;
let country='India';
let continent='Asia';
let populatiion=4562225;
console.log(country+continent+populatiion);
console.log(name);
console.log(lastname);
console.log(num);
console.log(myvar);
let person={name:'jayanth',age:20};
person.name='mani';
console.log(person.name);
*/
// console.log("good ma")
// Arrays


// let name =`jayanth's join here`
// console.log(name);
/*let newArray=[40,'kali',50.3,'male'];
console.log(newArray);
console.log(newArray[2]);
console.log(newArray.length);

// Challenge
let markWeight=78,markHeight=1.69,johnWeight=92,johnHeight=1.95;
const BMI1=markWeight/markHeight**2;
const BMI2=johnWeight/johnHeight**2;

if(BMI1>BMI2){
    console.log(`mark's BMI ${BMI1} than john's ${BMI2} `)
}
else{
    console.log(`john's BMI ${BMI2} than mark's ${BMI1} `)
}
*/

/*
operators
let x=52;
let y=53;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);
console.log(x++);  //increment
console.log(x--);  //Decrement



// Comparisonoperators
let n1=45;
let n2=50;
console.log(n1>n2);
console.log(n1<=n2);
console.log(n1===n2);
console.log(n1!==n2);

// Equality operators
let m1=23;
let m2=54;

// strong equality
console.log(m1===m2);
console.log('45'==45);
// loose equality

console.log(m1==m2);
console.log(45==45);

//logical operators
let highIncome=true;
let goodCreditScore=false;
let loanGiven= highIncome && goodCreditScore; //logical AND operator
console.log('application success',loanGiven);

loanGiven=highIncome || goodCreditScore //logical OR
console.log(loanGiven);

loanGiven=highIncome=! goodCreditScore; // NOT operator
console.log('application refused',loanGiven);

const dolphinScore1=96;
const dolphinScore2=108;
const dolphinScore3=89;
const koalScore1=88;
const koalScore2=91;
const koalScore3=220;
const sum1=(dolphinScore1+dolphinScore2+dolphinScore3)/3;
const sum2=(koalScore1+koalScore2+koalScore3)/3;
console.log(sum1);
console.log(sum2);
if(sum1>sum2)
console.log("Dolphin wins");
else if(sum1===sum2)
console.log("draw");
else
console.log("Kal wins");
*/
//Bit wise operators

// console.log(1 | 2); // Bitwise OR
// console.log(1 & 4); // Bitwise AND

//swapping the values
// let num1=45;
// let num2=87;
// num3=num1;
// num1=num2;
// num2=num3;
// console.log(num1);
// console.log(num2);

//If-else

//let marks=35;
//if (marks>=60 && marks<100){
//    console.log("good student");
//}
//else if(marks>=35 && marks<=60){
//    console.log("average student");
//}
//else
//    console.log("poor student");

//switch case

//let name='jayanth'
//switch(name){
//    case 'jayanth':
//        console.log("my name is",name);
//        break;
//    case 'mahesh':
//        console.log("my name is ",name);
//        break;
//    case 'jimmy':
//        console.log("my name is ",name);
//        break;
//    default:
//        console.log('not his name');
//}

//for loop
//for(let i=0;i<=5;i++){
//    console.log("good boy",i);
//}

//challanege- bill calculator
/*const billValue=40;
const tipvalue =billValue >=50 && billValue<=300 ? billValue*0.15: 
billValue*0.2;
console.log(`The bill was ${billValue}, tip was ${tipvalue}
and the total bill is ${billValue+tipvalue}`) ;
*/

//while loop

//
//let i=1
//while(i<=5){
//    console.log(i);
//    i++
//}

//do-while

//let i=5;
//do{
//    if(i%2!==0)
//    console.log(i);
//    i++;}
//    while(i<=5);

//for-in loop
//const person={
//    name:"jayanth",
//    age:21
//};
//for(let key in person)
//    console.log(key,person[key]); // for getting the values in a object .....
/*................................................................................*/

//for-of

//const colors=["green","blue","red"];
//for(let color of colors)
//    console.log(color);

//break statement

//let n1=0;
//while(n1<10){
//    if(n1===5) break; // break will break the loop and continue will continue with the next iteration
//    console.log(n1);
//    n1++;
//}

//Excerise--- return the large number...

//functionn
/*function log(){
    console.log('my name is jayanth');
}

log(); //calling the function


function fruitProcess(apples,bananas){
    console.log(apples,bananas);
    const juice=`jucie with ${apples} apples 
    and ${bananas} bananas`;
    return juice;
}
// console.log(fruitProcess(7,8));
const appleJuice=fruitProcess(7,8); //arguments
console.log(appleJuice);
console.log(fruitProcess(88,77));


function calAge(birthYear){
    return 2022-birthYear;
}
console.log(calAge(2001));
//function Expression
const calAge2= function(birthYear){
    return 2022-birthYear;
}
console.log(calAge2(2002));


//Arrow Functions
// const calAge3= birthYear=>2022-birthYear;
// console.log(`My age is ${calAge3(2001)}`);

const retirementYear=(birthYear,firstName) => {
    const age=2037-birthYear;
    const retirement=60-age;
    // return retirement;
    return `${firstName} retries in ${retirement} years`
}
console.log(retirementYear(1991,'Jayanth'));
*/

//let num=max(4645,88);
//console.log(num);
//function max(num1,num2){
//    if(num1>num2) return num1;
//    else return num2;
//}

//Excerise---
//
// let num=isLandScape(54,326);
//console.log(num);
//
//function isLandScape(width,height){
//    return(width>height);
//}

// Exercise-- fizzbuzz
//
// const out=fizzbuzz(3);
// console.log(out);
// function fizzbuzz(input){
//    if (typeof input!=="number")
//        return "not a number";
//    else if((input%3===0) && input%5===0)
//        return "fizzbuzz";
//    else if (input%3===0)
//        return "fizz";
//    else if(input%5===0)
//        return "buzz";
//    return input;

// }

//Exercise----checkspeed

//checkSpeed(100); //speed value
//
//function checkSpeed(speed){
//    const speedlimit=70;
//    const kmp=5;
//    if(speed<speedlimit){
//        console.log("ok");
//    }
//    else{
//        const points=Math.floor((speed-speedlimit)/kmp);
//        if(points>=12)
//            console.log("suspend");
//        else
//
//        console.log('points',points);
//    }
//
//}

//Exercise-even or odd

//showNumbers(10);
//function showNumbers(num){
//    for(let i=0;i<=num;i++){
//        if (i%2===0)
//            console.log(i,"even");
//        else
//            console.log(i,"odd");
//    }
//}

//Exercise --- Strings

//const movie={
//    name:"jayanth",
//    id:1214,
//    gender:"male",
//    age:20
//};
//String(movie);
//
//function String(obj){
//    for(let key in movie){
//        if(typeof obj[key]==="string")
//            console.log(key,obj[key]);
//    }
//}

//Return sum of the multiples of 3 and 5

//function SumOfMultiples(num){
//    let count=0;
//    for(let i=0;i<=num;i++){
//        if(i%3===0 || i%5===0)
//            count+=i;
//    }
//    return count;
//}
//console.log(SumOfMultiples(15));

//Exercise- Calculating grade

//marks=[80,82,46];
//
//function Avg(marks){
//    let sum=0;
//    for(let mark of marks)
//        sum+=mark;
//    let newavg=sum/marks.length;
//    if(newavg<60) return "F";
//    else if(newavg<70) return "D";
//    else if(newavg<80) return "C";
//    else if(newavg<90) return "B";
//    return "A";
//
//
//}
//console.log(Avg(marks));

//Excercise -- Print star pattern

//star(5);
//function star(rows){
//    for(let row=1;row<=rows;row++){
//        let pat='';
//        for(let i=0;i<row;i++){
//            pat+="* ";
//        }
//        console.log(pat);
//    }
//}

//object-oriented programming

//we can declare as many as the objects in a single obj....
// key-value pair
/*let jonas={
    name:'joans',
   radius:1,
   length:1,
   height:2,
   friends:['jayanth','vimal','jimmy'],
   circle:function(){ //function in an object..
    console.log("circle function");
    }
}
// console.log(object.radius);// Access the objects using dot and bracket notations.
// console.log(object['height']);
console.log(`${jonas.name} has ${jonas.friends.length} and his 
best friend is ${jonas.friends[2]}`);*/

// object.circle(); // method

//constrctor function
/*
function Circle(radius){
   this.radius=radius; // this refers to we are accessing the object
   this.draw=function(){
       console.log('draw');
   }
}
*/

//for loop

// for(let i=1;i<=10;i++){
//     console.log(`Good morning ${i}`);
// }

// const arr=[10,20,30,40];
// for(let i in arr){
//     console.log(arr[i]);
// }

//let circle=new Circle(1);
//
//

//let circle={
//    radius:1
//};
//circle.color="yellow"; //we can create as many as members in an object.
//circle.draw=function(){}
//
//
//delete circle.color; // for deleting the memeber in an object
//
//console.log(circle);
//

//let num=10;
//function balli(num){
//    num++;
//    console.log(num);   //when we declare inside this fn value get incremented.
//}
//balli(num);
//
//console.log(num); // when we declare outside function the value is same.

// let num1={value:10,radius:1};
// function balli(num1){
//     num1++;
// }
// balli(num1);

// console.log(num1);

// let num2=14;
// console.log(balli);
// for (let key of Object.num1()){
//     console.log(key);
// }

//copying of the objects

// const circle={
//     radius:1,
//     num:21,
//     obj(){
//         console.log("draw")

//     }
// };

//old way of copying contents

// const another={};
// for(let key in circle){
//     another[key]=circle[key];
// }

//New way of copying by using assign method.
//const another=Object.assign({color:"yellow"},circle);

//Another way for copying by using speread operator(...)

// const another={...circle};
// console.log(another);

//string premitive
// const name11="string";
// console.log(name11);

// //string object
// const another=new String("hi there");
// console.log(another);

//templet literals----`` used for formatting
// we can also use placeholders inside the string literal
// const var1=
// `name is
// jayanth`;

//Exercise

// const address={
//     street:"Devuni kadapa",
//     city: "Kadapa",
//     pincode:516002
// };
// function showAddress(address){
//     for(let key in address){
//         console.log(key,address[key]);
//     }
// }
// showAddress(address);

// //Arrays
// const array=[2,5,6,7];
//const years= new Array[1991,1992,1993];

// adding elements at the end
// array.push(64,74);

// adding elements at beginning
// array.unshift(63,45);

// //adding middle element
// array.splice(3,'a','b'); //first one is the position of the element need to be inserted
// console.log(array);
/*
const calAge =function(birthYear){
    return 2037-birthYear;
}
const years=[1990,1999,1998];
console.log(calAge(years[0]));
*/

/*const billValue=40;
const tipvalue =billValue >=50 && billValue<=300 ? billValue*0.15: 
billValue*0.2;
console.log(`The bill
 was ${billValue}, tip was ${tipvalue}
and the total bill is ${billValue+tipvalue}`) ;

const calTip=function(billValue){
    return billValue >=50 && billValue<=300 ? billValue*0.15: 
billValue*0.2;
}
const bills=[125,555,44];
const tip=[calTip(bills[0]),calTip(bills[1]),calTip(bills[2])];
const total =[bills[0]+tip[0],bills[1]+tip[1],bills[2]+tip[2]]; 
console.log(total);
*/
//searching an element in an array
// const num=[2,4,6,8,7,3];
// console.log(num.indexOf(4));
// console.log(num.lastIndexOf(5));
// console.log(num.indexOf(6) !== -1); //Another way of checking the element is in the array or not.
// console.log(num.includes(8)); // This will return true if the element exist .

//searching element with the refrence

// const courses=[
//     {id:1,name:'a'},
//     {id:2,name:'b'},

// ]
// const course=courses.find(function(course){ //In this way we can find the element
//     return course.id===1;
// })
// console.log(course);

//Arrow function

// const courses=[
//     {id:1,name:'a'},
//     {id:2,name:'b'},

// ]
// const course=courses.find(course => course.id===2)
// console.log(course);

// //Removing element from array

// const num=[1,2,3,4,5];

// console.log(num.pop()); //removes last element

// console.log(num.shift()); //removes first element

// console.log(num.splice(3,1)); //removes from the middle of the element.

// //Empting an array
// let num=[1,2,3,4,5];
// //num=[];

// //num.length=0;

// num.splice(0,num.length);
// console.log(num);

//Concating the array

// let n1=[1,2,3,4],n2=[5,6,7,8];
// combined=n1.concat(n2);

// slice=combined.slice(2,4); //starting and ending index

// slice2=combined.slice(2);   // starting index

// console.log(combined);
// console.log(slice);
// console.log(slice2);

// //spread operator

// com=[...n1,...n2]; //by using this we can combine two arrays
// console.log(com);

//For-loop in an array

// let arr=[1,2,3];

// for(let key of arr){
//     console.log(key);
// }

// //another way for looping in array.
// arr.forEach(arr => console.log(arr));

//joining the arrays

// let n1=[1,2,3,4]
// let n2=n1.join('*');
// console.log(n2);

// var sen="she is my devil";
// let sp=sen.split( );
// console.log(sp);

//sorting the array

// const arr1=[41,61,3,75];
// const sort1=arr1.sort();
// console.log(sort1);

//Flitering the array

// let num=[1,8,0,3,-3,-8];
// const fil=num.filter(n=> n>=0);
// console.log(fil);
/*
for (let excerise = 1; excerise < 4; excerise++) {
    // const element = array[excerise];
    console.log(`excercise ${excerise}`);
    for (let rep = 1; rep < 6; rep++) {
        // const element = array[rep];
        console.log(`repe ${rep} 😊`);
        
    }
    
}
*/
/*
let i=1;
while (i<=10) {
    console.log(`good joy ${i}`);
    i++
}*/

// let dice=Math.trunc(Math.random()*6)+1;
// console.log(dice);

// while (dice!==6) {
//     console.log(`your number is ${dice}`);
//     dice=Math.trunc(Math.random()*6)+1;
// }

// const measurement = function () {
//   const measure = {
//     type: "temp",
//     unit: "cels",
//     value: Number(prompt("Degree celius")),
//   };
//   console.table(measure);
//   const kelvin = measure.value + 273;
//   return kelvin;
// };
// console.log(measurement());

// console.warn(measure.value); //define warn in a console
// console.error(measure.value); //define error in a console


//Exercise-get the range of the numbers in an array

// let num=FromArray(2,5);
// function FromArray(min,max){
//     let val=[];
//     for(let i=min;i<=max;i++)
//     val.push(i);
//     return val;
// }
// console.log(num);

//Exercise-- array searching

// const arr=[1,2,3,4,5];
// console.log(includes(arr,-4));
// function includes(num,searchElement){
//     for(let element of arr)
//     if(element===searchElement)
//     return true;
//     return false;
// }

//Exercise----Exculding the element in an array

// let num=[1,2,4,6,3,13,1];
// let out=Exclude(num,[1]);
// console.log(out);
// function Exclude(arr,exc){
//     const new_arr=[];
//     for(let element of arr)
//     if(!exc.includes(element))
//     new_arr.push(element);
//     return new_arr;
// }

//Exercise--Coun the occurances

// let nums=[1,2,3,42,4,2,1,3];
// const count=countOccurances(nums,1);
// console.log(count);
// function countOccurances(array,searchElement){
//     let count=0;
//     for(let element of array)
//     if(element===searchElement)
//     count++;
//     return count;
// }

//Exercise-------Get the max element in an array.

// document.write("hello their");

//function expression
// let key=function(){
//     document.write("run");
// };

// key();

//rest operator

// function run(...args){  //by using this rest operator we can pass as many as arguments in a function and put them in a array
//     return args.reduce((a,b)=>a+b);
// };
// document.write(run(1,23,4,7));

//default arguments

// function areaOfCircle(r,pi=3.142){
//     return  pi*r*r;
// };
// document.write(areaOfCircle(4));

// function run(){
//     for(var i=0;i<5;i++){
//         document.write(i);
//     }
// };
// run();

//this keyword changing

// function run(){
//     console.log(this);
// };
// run.call({name:"jayanth"},1,2);
// run.apply({name:"jayanth"}[1,2]);

//Exercise--return sum of arguments
// function sum(...args){
//     return args.reduce((a,b)=>a+b);
// };
// console.log(args(1,2,3));
