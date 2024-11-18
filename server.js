const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;

    if (num2 === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed.' });
    }

    const result = num1 / num2;
    res.json({ result });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});