// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
res.send(`
<h1>K21 Hello App</h1>
<p>Status: Running</p>
<p>Version: 1.0.0</p>
`);
});
app.get('/health', (req, res) => {
res.status(200).json({ status: 'healthy' });
});
app.listen(PORT, () => {
console.log(`Avox Hello App listening on port ${PORT}`);
});
