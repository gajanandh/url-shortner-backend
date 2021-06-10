const express = require('express')
const db = require('../modals/url.modal')
const {nanoid}=require('nanoid')
const router  = express.Router()



router.get('/',(req,res)=>{
    
    db.find().then(urls=>{res.send(urls)}).catch(err=>{console.log(err)})
})
router.post('/',async (req,res)=>{
    let obj={
        full:req.body.full,
        short:nanoid(10)
    }
    let existing = await db.findOne({full:req.body.full}).lean();
        if(existing){
            res.send(existing)
            return;
        }           


    db.create(obj).then(newurl=>{
        res.send(newurl)
    }).catch(err=>{console.log(err)})
})
router.get('/:id',(req,res)=>{
    db.findOne({short:req.params.id}).then(url=>{res.redirect(url.full)})
    .catch(err=>{
        res.status(404).send("URL not found")
        console.log(err)})
})


module.exports = router