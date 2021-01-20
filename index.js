// entry point of server
import express from 'express';
import apis from './src/apis/api'
const app =  express();

const PORT = 4000;

app.get('/', (req, res) => {
    console.log(`request is ${req}`)
    res.send(`Node is running at port ${PORT}`);
})

apis(app);


app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`);
})

