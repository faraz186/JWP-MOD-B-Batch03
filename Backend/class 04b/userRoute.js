const express = require("express");
const app = express();
const {route} = require("express");
const userModel = require("./userModel");
const router = express.Router();

router.get("/",(req,res)=>
{
    userModel.find({},(err,data)=>
    {
        if(err)
        {
            res.send(err).status(404)
        }

        else
        {
            res.send(data).status(200)
        }

    });
});
router.get("/:NotesName",(req,res)=>
{
    let NotesName = req.params.NotesName;

    userModel.find({NotesName:NotesName},(err,data)=>
    {
        if(err)
        {
            res.send(err).status(404)
        }

        else
        {
            res.send(data).status(200)
        }

    });
});
router.post("/",(req,res)=>
{
    const {NotesName,NumberOfNotes} = req.body;

    let errArr = [];

    if(!NotesName)
    {
        errArr.push("Required!! Notes Name");
    }

    if(!NumberOfNotes)
    {
        errArr.push("Required!! Number Of Notes");
    }

    if(errArr && errArr.length>0)
    {
        res.send(errArr).status(404);
        return;
    }

    let userObj = new userModel(
    {
        NotesName,
        NumberOfNotes,
        createdAt: new Date(),
    });

    userObj.save((err,data)=>
    {
        if(err)
        {
            res.send(err).status(404)
        }

        else
        {
            res.send(data).status(200)
        }

    });
});
router.put("/:id",(req,res)=>
{
    userModel.findOneAndUpdate({_id:req.params.id},{$set:{NotesName:req.body.NotesName}},{new:true},(err,data)=>{
        if(err)
        {
            res.send(err).status(404)
        }

        else
        {
            res.send(data).status(200)
        }

    });
});

router.delete("/:id",(req,res)=>
{
    userModel.findByIdAndDelete(req.params.id,(err,data)=>
    {
        if(err)
        {
            res.send(err).status(404)
        }

        else
        {
            res.send(data).status(200)
        }
        
    });
});

module.exports = router;