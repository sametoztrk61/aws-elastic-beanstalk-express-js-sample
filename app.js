const express = require('express');onst app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Miuul-devops-group2'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
