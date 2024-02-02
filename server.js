import express from "express";

const app = express();

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('listening on port');
});

app.get("/", (req, res) => {
  console.log(req.headers);
});
app.post('/',(req,res)=>{
    console.log(req.body);
})
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
