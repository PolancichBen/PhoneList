const express = require('express');
const app = express();
const path = require('path');
const PORT = '3003';

const exampleListItems = require('../../exampleListItem.js');

app.use(express.static(path.join(__dirname, '../../frontEnd/dist')));
app.use(express.json());

app.post('/newListItem', (req, res) => {
  res.status(200).send(`Added ${req.body.itemInput}`);
});

app.get('/listItems', (req, res) => {
  res.status(200).send(exampleListItems);
});

app.listen(PORT, () => {
  console.log(`server is CONNECTED on PORT:${PORT}`);
});
