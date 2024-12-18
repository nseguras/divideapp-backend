const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
//--

const corsOptions = {
    origin: 'https://nseguras.github.io/divide', // La URL de tu frontend
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  };

//app.use(cors(corsOptions));
app.use(cors());

app.use(bodyParser.json());

// Rutas
app.post('/divide', (req, res) => {
    console.log(req.body);
    const { num1, num2 } = req.body;

    if (num2 === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed.' });
    }

    const result = num1 / num2;
    res.json({ result });
});

app.get('/', (req, res) => {
    res.send('Servidor activo y funcionando correctamente');
});


// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
