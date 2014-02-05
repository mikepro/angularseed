var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.use(express.bodyParser());
app.get('/hello',function(req, res)
{
    res.send("Hello world");
});
app.get('/somejson',function(req,res){
    res.json([{name:"Michael", surname:"watson"},{name:"smith",surname:"frank"}]);
});
app.post('/datatopost',function(req,res){
    console.log(req.body.name);
    res.json({state:"ok"});
});

app.listen(3000);
console.log("Listening on port 3000");
