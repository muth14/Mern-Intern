//getElementById
//getElementByClassName
//getElementByTagName
//querySelector
//querySelectorAll

let h1 = document.getElementById("tag1");
console.log(h1);

//text manipulation
//h1.innerHTML = "Hello World";
//h1.innerText = "Hello World";
//h1.textContent = "Hello World";

//console.log(h1.innerHTML);

//location.assign("https://www.google.com");


console.log(screen);
//history.back();


let div = document.createElement("div");
//div.innerText = "Created Div";  -not a best practice
let textNode = document.createTextNode("Created Div");
div.classList = "divClass";
div.append(textNode);

let body = document.getElementById("data");
body.append(div);
console.log(div);

let list = document.getElementsByClassName("one");
//let list = document.getElementsByClassName("one")[2];
console.log(list); 

let list1 = document.getElementsByTagName("li");
//let list1 = document.getElementsByTagName("li")[0];
console.log(list1);

let list2 = document.querySelector("ul li"); //only first element
console.log(list2);

let list3 = document.querySelectorAll("ul li"); //all elements
console.log(list3);