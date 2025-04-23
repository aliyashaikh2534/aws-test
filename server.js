const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5500/"]
}))

app.get('/movies', async(req, res)=>{
  const movies = await axios.get("https://freetestapi.com/api/v1/movies")
  const data = movies.data
  return res.send(data);
})

app.listen(3000, ()=>{
  console.log("server started 3000");
})
