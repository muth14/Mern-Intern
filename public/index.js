let link = document.getElementById("link") ;

let btn = document.getElementById("btn") ;

let toDisplay = document.getElementById("qrCode") 

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(link.value){
        getqrCode()
    }
    else{
        console.lof("error")
    }
})

// async function getQrCode(){
//     let response = await fetch("http://localhost:3000/qr",{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:{
//             data:link.value
//         },
//         body : JSON.stringify({data:link.value})
//     }) 
//     response = await response.json()
//     console.log(response);
//     let img = document.createElement("img")
//     img.src = response
//     toDisplay.innerHTML=""
//     toDisplay.append(img)
// }

async function getQrCode(){
    let response = await fetch(`http://localhost:3000/qr?link=${link.value}`) 
    response = await response.json()
    console.log(response);
    let img = document.createElement("img")
    img.src = response
    toDisplay.innerHTML=""
    toDisplay.append(img)
}