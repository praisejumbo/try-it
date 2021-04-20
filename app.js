const express= require('express')
const app= express()
port = 2000


app.get("/",(res, req) => {

    res.send("hello world")
    
});

// app.post("/",function(res, req){
//     res.send('post example')
// })
// app.get("/",function(res, req){
//     res.send('post example')
// })

app.listen(port, () => {
    console.log(`example of express`)
})
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
//   })

