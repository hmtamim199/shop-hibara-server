const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// hibarashop
// ek53J76hNX0IabQd

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cqjrq2b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const panjabiCollection = client.db("panjabidb").collection("panjabi");

    app.get("/panjabi", async (req, res) => {
      const cursor = panjabiCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.post("/panjabi", async (req, res) => {
      const newPanjabi = req.body;
      const result = await panjabiCollection.insertOne(newPanjabi);
      res.send(result);
      console.log(newPanjabi);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("./", (req, res) => {
  res.send("shop hibara server is on");
});

app.listen(port, () => {
  console.log(`shop hibara server is on${port}`);
});
