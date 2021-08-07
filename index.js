const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const championList = require('./championList.js');


app.use(cors());

app.get('/champions', (req, res)=>{
    res.json(championList);
});

app.post('/:championName', (req, res) =>{

    championList.find((element) =>{
        if(element.championName == req.params.championName)
        {
            element.championPool--;
        }    
    });
    res.json(championList);
});

app.listen(port, () => {
    console.log(`Ouvindo na porta http://localhost:${port}`)
});