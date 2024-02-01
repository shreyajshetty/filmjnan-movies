const express = require('express')

const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'public')));
app.use('/images' , express.static(path.join(__dirname,'images')));




app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'public','Html','LogInHtml.html'))
})
app.get('/headerHtml.html',(req,res)=> {
    res.sendFile(path.join(__dirname,'public','Html','headerHtml.html'))
})









const PORT = 3000;
app.listen(PORT,() => {
    console.log(`Server running at https://localhost:${PORT}`)
})