const express= require('express');
const bcrypt = require('bcrypt');
const cors= require('cors');
const router = express.Router();
const mongoose=require('mongoose');
const app= express();
const user=require('./database');
const MongoClient = require('mongodb').MongoClient;

app.use(express.json({limit:"10mb"}));
app.use(cors({origin:"*"}));

mongoose.connect("mongodb+srv://nikhitha:nikhitha@cluster0.usbta9x.mongodb.net/?retryWrites=true&w=majority")
.then(()=> console.log('mongo db connected successfully'));

app.get('/', (req,res)=>{
    res.send('hello mongo db')
})
app.use('/', router);

// app.get('/userData',async(req,res)=>{
//     try{
//     const allUsersData=await user.find();
//     res.json(allUsersData);
//     }
//     catch(error){
//         console.log(error);
//     }
// })
router.get('/userData', async (req, res) => {
    const { page, limit } = req.query;
    const pageNumber = parseInt(page) || 1;
    const pageSize = parseInt(limit) || 10;
  
    try {
      const count = await user.countDocuments();
      const totalPages = Math.ceil(count / pageSize);
  
      const cards = await user.find()
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize);
  
      res.json({
        cards,
        totalPages,
        currentPage: pageNumber,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
app.post("/data", async (req, res) => {

    try {
        const {firstname,lastname,dob,phone, email, password, cpassword,signature, photo,image } =req.body

        const exist = await user.findOne({ email })
        if (exist) {
            return res.status(400).send("User Already Exits")
        }
        if (password !== cpassword) {
            res.status(400).send("Password not Matched")
        }
        const newUser = new user({
            firstname,lastname,dob,phone, email, password, cpassword,signature, photo,image
        })
        console.log(newUser);
        await newUser.save();
        res.status(200).send("user Register Sucessfully")


    } catch (error) {
        console.log(error)
    }
})
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const exist = await user.findOne({ email })
    if (!exist) {
      console.log("user not found ")
      return res.status(400).send("user not found")
        // return res.status(400).send("user not found")
    }
    if(password!==exist.password){
      console.log("password not matched")
      return res.status(400).send("password not matched")
    }else{
      console.log("welcome to home page")
      return res.status(200).send("home page")
      // console.log(exist)
    }
  
    // const client = new MongoClient(url);
  
    // try {
    //   await client.connect();
  
    //   const db = client.db(dbName);
    //   const users = db.collection('users');
    //   // Find the user by email
    //   const user = await users.findOne({ email });
    //   if (user) {
    //     // Compare the hashed password
    //     const match = await bcrypt.compare(password, user.password);
  
    //     if (match) {
    //       res.sendStatus(200); // Login successful
    //     } else {
    //       res.sendStatus(401); // Unauthorized
    //     }
    //   } else {
    //     res.sendStatus(404); // User not found
    //   }
    // } catch (err) {
    //   console.error(err);
    //   res.sendStatus(500); // Internal server error
    // } finally {
    //   client.close();
    // }
  });
app.listen(5000, ()=>{
    console.log('port is listening');
})
