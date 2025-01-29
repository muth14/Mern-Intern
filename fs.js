const fs=require("fs")
//fs.writeFile("sample.txt","created a file using fs"(err)=>{})

//fs.appendFile("sample.txt","append using two words",(err)=>{})
//fs.readFile("sample.txt","utf8",(err,data)=>{
    //console.log(data);
//})
//fs.unlink("sample.txt",()=>{})



    // fs.writeFile("sample.txt","This is sample file",(err)=>{
    //     if(err){
    //         console.log(err)
    //     }
    // })

    // fs.readFile("sample.txt",(err,data)=>{
    //     console.log(data.toString());
    // })

    //traditonal way error finding
    // try{
    //     fs.readFile("sample.tt",(err,data)=>{
    //         if(err) throw err
    //         console.log(data.toString());
    //     })
    // }
    // process.on("uncaughtException",(err)=>{
    //     console.log(err.message)
    // })

    // fs.mkdir("folder",(err)=>{
    //     console.log("Directory is created")
    // })
    // fs.rmdir("folder",(err)=>{});

    // const fileData=fs.readFileSync("sample.txt","utf-8")
    // console.log(fileData);

    // console.log("outside");


    // fs.writeFileSync("sample1.txt", "First file data", (err)=>{
    //     fs.appendFileSync("sample1.txt","\nAppended data", (err)=>{
    //         fs.readFileSync("sample1.txt", (err, data)=>{
    //             console.log(data.toString());
    //         })
    //     });
    // });
    
    //  fs.unlink("sample1.txt", ()=>{});
    
    fs.writeFileSync("sample1.txt", "First file data", (err)=>{});
    fs.appendFileSync("sample1.txt","\nAppended data", (err)=>{});
    fs.readFileSync("sample1.txt", (err, data)=>{
        console.log(data.toString());
    })