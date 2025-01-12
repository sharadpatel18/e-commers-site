const mongoose  = require('mongoose');
const Item = require('../Model/CreateItemModel');

const createItem = async (req,res) => {
    try {
        const {itemName , itemContent , itemImage , itemPrice , itemStoke , itemCatagory , userId} = req.body;
        
        const newId = new mongoose.Types.ObjectId(userId);

        const itemCreated = await Item.create({itemName,itemContent,itemImage,itemCatagory,itemPrice,itemStoke,userId:newId}); 
        
        return res.status(200)
                    .json({message:"Item is Created" , success:true})
    } catch (error) {
        console.log(error);
        
        return res.status(500)
                    .json({message:"internal server error" , success:false})
    }
}

const getAllItem = async (req,res) => {
    try {
        const findItem = await Item.find({});

        return res.status(200)
                    .json({message:"this is all item" , item:findItem , success:true})
    } catch (error) {

        return res.status(500)
                    .json({message:"internal server error" , success:false})

    }
}


const getItemById = async (req,res) => {
    try {
        const {id} = req.params;

        const findItem = await Item.find({_id:id});

        return res.status(200)
                    .json({message:"this is selected item" , item:findItem , success:true})
    } catch (error) {

        return res.status(500)
                    .json({message:"internal server error" , success:false})

    }
}


const getItemByUserId = async (req,res) => {
    try {
        const {id} = req.params;

        const findItem = await Item.find({userId:id});

        return res.status(200)
                    .json({message:"this is all item" , item:findItem , success:true})
    } catch (error) {

        return res.status(500)
                    .json({message:"internal server error" , success:false})

    }
}

module.exports = {createItem , getAllItem , getItemById , getItemByUserId};