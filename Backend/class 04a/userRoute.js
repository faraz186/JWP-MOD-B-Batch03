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
router.get("/:EventName",(req,res)=>
{
    let EventName = req.params.EventName;

    userModel.find({EventName:EventName},(err,data)=>
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
    const {EventName,EventType,EventStatus} = req.body;

    let errArr = [];

    if(!EventName)
    {
        errArr.push("Required!! Event Name");
    }

    if(!EventType)
    {
        errArr.push("Required!! Event Type");
    }

    if(!EventStatus)
    {
        errArr.push("Required!! Event Status");
    }

    if(errArr && errArr.length>0)
    {
        res.send(errArr).status(404);
        return;
    }

    let userObj = new userModel(
    {
        EventName,
        EventType,
        EventStatus,
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
    userModel.findOneAndUpdate({_id:req.params.id},{$set:{EventType:req.body.EventType}},{new:true},(err,data)=>{
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