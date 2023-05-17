var express=require('express');
var mysql=require("mysql");
var app= express();
var connection=require('./database')
var cors=require('cors');

app.get('/', function(req, res){
    res.send('Hey');
})
app.get('/data', function(req,res){
    connection.query('SELECT * from linktable', 
    (error,result)=>{
        if(error){
            return res.json(error);
        }
        return res.json(result);
    }
    )
})
app.use(cors());
app.use(express.json());

app.post('/api/data',(req,res)=>{
    const{link}=req.body;

    connection.query('INSERT INTO linktable (LinkType,ClickTime) VALUES (?,NOW())',
    [link], 
    (error, data)=>{
        if(error){
            console.log("backend error", error)
        }
        res.sendStatus(200)
    }  
    )
})
app.get('/poll', function(req,res){
    connection.query('SELECT LinkType, count(LinkType) as count from linktable group by LinkType',
    (error,data)=>{
        if(error){
            return res.json(error);
        }
        return res.json(data);
    })
})
app.get('/dateTime', function(req,res){
    connection.query('SELECT CONCAT(DATE_FORMAT(ClickTime, "%H"),"-",DATE_FORMAT(DATE_ADD(ClickTime, INTERVAL 1 HOUR), "%H")) as interval_range,SUM(CASE WHEN LinkType = "Link 1" THEN 1 ELSE 0 END) as link1,SUM(CASE WHEN LinkType = "Link 2" THEN 1 ELSE 0 END) as link2 FROM reactdb.linktable WHERE DATE(ClickTime) = "2023-05-15" GROUP BY interval_range ORDER BY interval_range' ,
    (error,data)=>{
        if(error){
            return res.json(error);
        }
        return res.json(data);
    })
})

app.listen(5001, function(){
    console.log('App listening on port 5001');
    
})