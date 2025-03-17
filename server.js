const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "dist" folder
app.use(express.static(path.join(__dirname, 'dist')));

// Serve index.html when visiting the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
