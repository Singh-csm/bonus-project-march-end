const express = require('express');
const route  = require("./routes/route");
const mongoose = require('mongoose');

const app = express();
app.use(express.json())
mongoose.connect("mongodb+srv://singh-csm:GIUPM5681K@singh-csm.nmfw5jk.mongodb.net/bonusmarch30", { useNewUrlParser: true })
.then(()=>console.log("connected successfully"))
.catch(err => console.log(err));



app.use("/",route)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
