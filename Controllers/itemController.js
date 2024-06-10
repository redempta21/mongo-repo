const Item = require('../Models/itemModel');



//creating new item

exports.createItem =async (req, res) => {
    try {
        const item = new Item(req.body);
        const savedItem = await item.save();
        res.status(200).send(savedItem);
    }
    catch(error) {
        res.status(400).send(error);
    }
};
//getting all items

exports.getItems = async (req,res) => {
    try{
    const items = await Item.find();
    res.status(200).send(items);
}
catch(error) {
    res.status(200).send(error)
}
};
 //updating items 

 exports.updateItemById = async(req,res) =>{
    try{
        const item = await item.findByIdAndUpdate(req.params.id, req.body, { new:true, runValidators: true});
        if(!item){
        return res.status(404).send('Item not found');
    
        }
        res.status(200).send(item)
    }
    catch(error){
        res.status(400).send(error)
    }
 };

 //delete item
exports.deleteItemById = async (req, res) => {
 try{
    const item = await item.findByIdAndDelete(req.params.id);
    if(!item){
        return  res.status(404).send('Item not found');
    }
    res.status(200).send('Item deleted')
 }   
 catch(error){
    res.status(500).send(error);
 }
};
