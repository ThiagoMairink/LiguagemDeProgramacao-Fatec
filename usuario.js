import express from 'express'

const app = express()
const port = 3000

app.get('/usuario', (req,res)=>{ 
    res.send('https://github.com/ThiagoMairink')
})

//rodar a api
app.listen(port, ()=>{ console.log("Server rodando http://localhost:"+port)})