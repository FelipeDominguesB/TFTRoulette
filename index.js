const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3000;



app.use(cors());
app.use(express.static('views'));
app.use('/champions',require('./rotas/championRoutes'))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use((error, req, res, next) =>{
    console.error(error);
    res.status(500).send("Deu erro!");
});

app.listen(port, () => {
    console.log(`Ouvindo na porta http://localhost:${port}`);
});