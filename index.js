const express = require("express");
const app = express();
const cors = require(cors.json())
const port = process.env.PORT || 5000;

app.use(express.json());
app.use()


app.get( '/', (req, res) => {
  res.send('shop hibara server ')
})

app.listen( )