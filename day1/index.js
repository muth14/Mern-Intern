// var data="value";
// data=1
// data=true
// data=[1,2,3,4]
// data={key:1}
// console.log(data);
// //
// /*
// string
// */
// var itsstring="             Hello There";
// console.log(itsstring.length);
// console.log(itsstring.split(""));
// console.log(itsstring.length);
// console.log(itsstring.trim ().length );
// itsstring=itsstring.trim();
// console.log(itsstring);
// console.log(itsstring.length);
// console.log(itsstring.charAt(0));
// console.log(itsstring.indexOf('l'));
// console.log(itsstring.lastIndexOf('l'));
// console.log("str"+1);
// var newVar=123;
// console.log(newVar.toString());
// console.log(typeof ""+newVar);
// console.log(typeof `${newVar}`);
// var newVar1=`mmdijsm
// dojnc 
// eodjcm  ${newVar}`
// console.log(newVar1);

// //numbers

// var numHolder=123.45;
// console.log(typeof numHolder);
// console.log(Number.parseInt(numHolder));
// var strHolder="1234";
// console.log(typeof strHolder);
// console.log(typeof Number(strHolder));
// console.log(typeof +strHolder);


// //math

// var intValue=123.4
// console.log(Math.round(intValue));
// var intValue2=123.5
// console.log(Math.round(intValue2));
// console.log(Math.ceil(intValue2));
// console.log(Math.floor(intValue2));
// console.log(Math.pow(2,3));
// console.log(Math.min(2,4));
// console.log(Math.max(2,4));
// console.log(Math.random());
// console.log(Math.random()*100);
// console.log(Number.parseInt(Math.random()*100));
// console.log(Math.abs(-92467));
// console.log(Math.sqrt(9));
// console.log(Math.cbrt(27));

// //bool

// var booleanVar=true
// console.log(booleanVar);

// //undefined

// var dataType;
// console.log(dataType);

// //value only changed in this dataType
// //Null
// var dataType=null;
// console.log(dataType);


// //array
// //{obj:1}-->key value datatype
// var arrVar=[1,"Muthu",19,{obj:1}];
// console.log(arrVar[2]);
// arrVar.shift(20);
// console.log(arrVar);
// arrVar.push(3)
// console.log(arrVar.push(3));
// console.log()

// var str='Hello'
// str=str.split("")
// str=str.reverse();
// console.log(str);
// /*
// for(declaration,condition,ic/dec)
// */
// for(var i=0;i<5;i++){
//     console.log(i);
// }
// console.log("dec");
// for(var i=9;i>0;i--){
//     console.log(i);
// }

// //while

// var i=0
// while(i<5){
//     console.log(i);
//     i++;
// }
// //do while

// do{
//     console.log("hello");
// }
// while(false)

//     ["apple","orange","pineapple","mango"].forEach(i=>{
//         console.log(i);
//     })
//     if(true){
//         console.log("block printed");

//     }

//     var i=12

//     if(0){
//         console.log("a");
//     }
//     else if(i==3){
//         console.log("b");
//     }
// else if(i==10){
//     console.log("nothing");

// }
// else{
//     console.log("print");

// }

// var char = 'a'
// if(char == 'a')
// {
//     console.log("yes");
// }
// else if(char =='e')
// {
//     console.log("yes");
// }
// else if (char == 'i')
// {
//     console.log("yes");
// }
// else if (char == 'o')
// {
//     console.log("yes");
// }
// else if (char == 'u')
// {
//     console.log("yes");
// }
// else{
//     console.log("no");
// }


// //switch
// var char=prompt("enter a value");
// if(char){
// switch(true){
//     case char=='a':
//     case char='e':
//         case char='i':
//             case char='o':
//                 console.log("yes");
//                 break;
//                 default:
//                     console.log("no");


// }
//}
//Nullish pointer
//triple equal means it is strict equality
//ternary operator -->condtional stmt


var samplevar='c'
console.log(samplevar=samplevar=='a'?true: samplevar=='b'?true:false)
console.log(samplevar)


//var varname=condi?true:false;


var val=10
function hello(){
    console.log(val);
}
hello()
console.log(eval(1+2-3+"7"));
//functions - function name{} 
function hello(){
    console.log("Hello");
}
hello();

console.log(eval(1+2-3+"7"))  //evaluates the expression using BODMAS rule


function multiple(value,value1)
{
    return value*value1;
}
console.log(multiple(2,3));
//use console.log to print the return's value from a function.


//hoisting - function can be called before defining it


var check = 10;
var check = "string";  //can redeclare
console.log(check);

let check1 = 10;
// let check1 = "string";  cannot redeclare    
console.log(check1);

const check2 = 24;
//check2 = 25;  cannot reassign
console.log(check2);


//arrow functions
const addValue = (v1,v2) =>
    {
        console.log(v1+v2);
    }
    addValue(2,3);
    
    const addValue1 = (v1,v2) => v1+v2;
    console.log(addValue1(2,3));
    
    const addValue2 = (v1,v2) => {
        return v1+v2
    };
    console.log(addValue2(2,3));

const addElements = (myArray) => {
    let sum = 0;
    myArray.forEach(i => {
        sum+= i
    })
    return sum
}

console.log(addElements([1,2,3,4,5]))
//A map function filter  and returns  that satisfied condition  

let arr1=[2,3,4,5,6];
let compute=arr1.map(i=>i+1)
console.log(compute);
console.log(arr1);

let arr2=[1,2,3,4,5];
let compute1=arr1.filter(i=>i<4);
console.log(compute1);

let compute2=arr1.filter(i=> i%2==0);
console.log(compute2);
let compute3=arr1.filter(i=> i%2!=0)
console.log(compute3)

let compute4=arr1.every(i=>i<5);
console.log(compute4)

let compute5=arr1.some(i=>i<5);
console.log(compute5)

let testObj={name:"Muthu",age:19};

//destructing

console.log(testObj.name);

let {name:mo,age}=testObj;
console.log(mo,age);

let arr3=[1,2,3,4,5];

let arr4=[...arr1,6,7]
console.log(arr4)