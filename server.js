const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define a schema for your data
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

// Create a model based on the schema
const Item = mongoose.model('Item', itemSchema);

// Define a route to get all items
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
