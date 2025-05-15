const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname,'')))
app.use(express.urlencoded({ extended: true }));


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'','1.html'))
})

app.post('/', (req,res)=>{
    const{user,pass} = req.body

    if(user=='Aaditya' && pass=='Whateverbro')
    {
        res.end("<h1>Welcome Aaditya</h1>")
        
    }
    else
    {
        res.end("<h1>Invalid combination</h1>")
    }
})

app.listen(port, ()=>{
    console.log(`Server is alive at http://localhost:${port}`)
})
