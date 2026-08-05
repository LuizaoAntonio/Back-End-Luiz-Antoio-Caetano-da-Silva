const express = require('express');
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.json({ mensagem:"Eu né"});
});

app.get('/sobre', (req, res) => {
        const sobre = [
            {nome:"Luiz", disciplina:"Back-End", Série: 2}
        ];
        res.json(sobre);
    })

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/sobre");
})
