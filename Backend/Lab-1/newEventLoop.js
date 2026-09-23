console.log("This is the starting point of my code");
process.nextTick(()=>{
    console.log("This is process.nextTrick code")
});

setTimeout(()=>{
    console.log("This is first time out")
},2000);

setTimeout(()=>{
    console.log("This is second time out")
},5000);

setTimeout(()=>{
    console.log("This statement will run after zero delay")
},0);

process.nextTick(()=>{
    console.log("This is process.nextTick code 2")
});





setTimeout(()=>{
    console.log("This is third time out")
},7000);

setTimeout(()=>{
    console.log("This is fourth time out")
},9000);

new Promise((resolve,reject)=>{
    let sucess=true;
    if(sucess)
        resolve("Data loaded  Sucessfully")
    else
        reject("Something Went wrong")
})
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error))

setTimeout(()=>{
    console.log("This is fifth time out")
},10000);

process.nextTick(()=>{
    console.log("This is the end of my code")
});