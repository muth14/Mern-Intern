// const sayHello = () => {
//     setTimeout(() => {
//         console.log('Hello');
//     }, 5000);
// };
// const sayBye = () => {
//     console.log('Bye');
// }
// sayHello();
// sayBye();

// let i=0;
// const interval = setInterval(() => {
//     console.log('Hello World');
//     i++;
//     if(i == 3)
//     clearInterval(interval);
// }, 3000);


let takeTicket = new Promise((resolve, reject) => {
    if(true){
        resolve("Yes Booked");
    }
    else{
        reject("Not Yet");
    }
});
let takeTicket1 = new Promise((resolve, reject) => {
    if(false){
        resolve("Yes Booked");
    }
    else{
        reject("Not Yet");
    }
});

// takeTicket.then((e)=> {
//     console.log(e);
// }).catch((err) => {
//     console.log(err);
// }); 
// takeTicket1.then((e)=> {
//     console.log(e);
// }).catch((err) => {
//     console.log(err);
// }); 

// Promise.all([takeTicket, takeTicket1]).then((e) => {
//     console.log(e);
// }).catch((e) => { 
//     console.log(e);
// });

// Promise.allSettled([takeTicket, takeTicket1]).then((e) => {
//     console.log(e);
// }).catch((e) => {
//     console.log(e);
// });

//async , await

const data = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    response = response.json();
    console.log(response); 
}
data();

// data().then((e) => {
//     console.log(e);
//     console.log(e.json());
// }).catch((e) => {
//     console.log(e);
// });