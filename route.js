const express = require('express') //framework
const router = require("express").Router();
const Hero = require('../models/tablemodel')
const controller = require('../controllers/index')


router.get('/customer',(req,res)=>{
    res.send("hello customer1")
});
router.get('/hero', async(req,res) => {
    try{
           const hero = await Hero.findAll() //asynchronous function so await
           res.json(hero)
           console.log("heroes from database are: ",JSON.stringify(hero));
           
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/hero/:Id', async(req,res) => {
    //console.log("hello basi");
    
    console.log(req.body);
    try{
           const hero = await Hero.findOne(req.params.id)
           res.json(hero)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/cus',controller.customer_get);

//router.get('/cust',controller.customer_get);

router.post('/cus',controller.customer_post);

//router.delete('/cus',controller.customer_delete);

router.patch('/cus',controller.customer_patch);
module.exports = router;
