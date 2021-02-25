const {syncAndSeed, models: {Cities}} = require("./db");
const express = require("express");
const app = express();
const path = require("path");
app.use(express.json()); //adds body object to the request object

app.use("/dist", express.static(path.join(__dirname, "dist"))); //dir we do want to expose to the client
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));


app.get("/api/cities", async (req, res, next) =>{
  try{
    res.send(await Cities.findAll({}))
  }catch(ex){
    next(ex)
  }
})

app.get("/api/cities/:id", async (req, res, next) =>{
  try{
    res.send(await Cities.findByPk(req.params.id))
  }catch(ex){
    next(ex)
  }
})

app.post("/posthome", async (req, res, next) => {
  try {
    const newItem = await Cities.create(req.body);
    res.send(newItem);
    console.log(req.body);
  } catch (ex) {
    next(ex);
  }
});

const init = async() => {
  try{
    await syncAndSeed();
    const port = process.env.PORT || 8000
    app.listen(port, ()=> console.log('listening on port 8000'))
  }catch(ex){
    console.log(ex)
  }
}


init();
