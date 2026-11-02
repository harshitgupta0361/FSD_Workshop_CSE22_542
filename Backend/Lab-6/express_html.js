const express=require('express');
const path =require('path');
const app=express();

// app.listen(3000,()=>{
//     console.log('Server is running on port 3000');
// });

// app.get('/about',(req,res)=>{
//     res.sendFile('path.join(__dirname,"public","about.html")' );
// });
// app.get('/about',(req,res)=>{
//     res.sendFile('path.join(__dirname,"public","index.html")' );
// });
// app.get('/about',(req,res)=>{
//     res.sendFile('path.join(__dirname,"public","contact.html")' );
// });


// =========================OR-USE================================

app.use(express.static('public'));
app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});