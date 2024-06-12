const express = require('express')
const app = express()
const port = 3333

const cors = require('cors')

app.get("/", (req,res) =>{
  res.send
})


app.use(cors())

app.listen(port, () =>{
    console.log(`server is runing on port ${port} localhost:3333`)
})