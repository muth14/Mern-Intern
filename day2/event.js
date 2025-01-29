// let button = document.getElementById("button")
// button.addEventListener("dblclick", () =>{
//     alert("You have clicked a button")
// })


let parent = document.getElementsByClassName("div1")[0]
let child1 = document.getElementsByClassName("div2")[0]
let child2 = document.getElementsByClassName("div3")[0]

parent.addEventListener("click", (e) =>{
    e.stopPropagation()
    alert("You clicked the parent")
})

child1.addEventListener("click", (e) =>{
    e.stopPropagation()
      alert("You clicked the child1")
})

child2.addEventListener("click", (e) =>{
    e.stopPropagation()
      alert("You clicked the child2")
})


const event1 = (e)=>{
    alert("you have clicked the child2");
    remove();
}

child2.addEventListener("mousedown",event1);
const remove = ()=>{
    child2.removeEventListener("mousedown",event1);
}  //remove event listener

//target method - to get the element on which event is triggered
//target.tagname - to get the tag name of the element

//mouseup - when mouse is released
//mousedown - when mouse is pressed
//mouseover - when mouse is over the element
//mouseout - when mouse is out of the element
//mousemove - when mouse is moved
//mouseenter - when mouse enters the element

