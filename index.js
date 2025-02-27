// const express = require("express");
// const app = express();
// const cors = require('cors');
// const port = process.env.PORT || 5000;

// app.use(express.json());
// app.use(cors())


// app.get('/', (req, res) => {
//   res.send('shop hibara server ')
// })


// app.listen(port, () => {
//   console.log(`shop hibara server${port}`)
// })

const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hibara shop server in running ')
});


app.listen(port, () => {
  console.log(`hibara shop is running on ${port}`)
});