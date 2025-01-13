// server.js
const express = require('express');
const app = express();
const PORT = 3006;
app.use(express.json())
// define the route
app.get('/',
    (req, res) => {
        res.send(
            `backend is running!`
        );
    });

app.listen(PORT,
    () => {
        console.log(
            `Server is listening at 
            http://localhost:${PORT}`
        );
    });
// creating course

app.get('/courses',(req,res)=>{
    res.status(200).send(
        {
            tshirt:'',
            szie:'large'
        }
    )
})

app.post('/courses/:id', (req,res)=>{
    const {id} = req.params;
    const{title} =req.body;
    res.send({
        tshirt:{title},
        id:{id},
    })
});
