const express = require('express');
const app = express()
const router = express.Router();
const Signupdetails =require('../model/SignUp')
const nodemailer = require("nodemailer");
module.exports = router;
const crypto =require('crypto')
var key = "password"
var algo = 'aes256'

const bodyParser = require('body-parser')
const encoder = bodyParser.urlencoded()
const jwt = require('jsonwebtoken')
const jwtKey="jwt"
router.get('/', async (req, res) => {
    try {
      const signup = await Signupdetails.find();
      res.json(signup)
    } catch (err) {
      res.json({ message: err })
    }
  });
 
  router.post('/', encoder , (req, res) => {
    var cipher = crypto.createCipher(algo,key);
    var encrypted =cipher.update(req.body.password , 'utf8' , 'hex')
    +cipher.final('hex')
    
    var token=Math.floor((Math.random()*10000)+100)
   

    const signup = new Signupdetails({
      fname:req.body.fname,
      lname:req.body.lname,
      email:req.body.email,
      password:encrypted,
      day:req.body.day,
      month:req.body.month,
      year:req.body.year,
      female:req.body.female,
      male:req.body.male,
      other:req.body.other,
      token:token

    });
    
    signup.save().then((res)=>{
      
      console.log(res)
      })
      var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'gaminghawkeye14@gmail.com',
            pass: 'Enter@meet19'
          }
        });
        
        var mailOptions = {
          from: 'gaminghawkeye14@gmail.com',
          to: req.body.email,
          subject: 'OTP for the varification of your Email Id in Facebook',
          text: `hyy user Thanks for signing up in the facebook clone here is the OTP for your login`,
          // html: `<h1>hey ${fname}</h1><br/> `        
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });

    // try {
  
    //   const signuppost = await signup.save();
    //   res.json(signuppost)
    //   console.log(signuppost)
    // } catch (err) {
    //   res.json({ message: err })
    // }
  

  })