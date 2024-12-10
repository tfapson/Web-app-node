const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, This achievers training !! My class project ! This is a simple Node.js app.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
