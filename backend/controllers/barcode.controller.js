const mongoose = require('mongoose');

const Barcode = mongoose.model('Barcode');

//retrieving barcode 
module.exports.getBarcode = (req, res, next)=>{
    Barcode.find({partCode: req.params.partCode}, function(err, barcode){
        if(err) {
            res.json(err);
        }
        else {
           res.json(barcode); 
        }
    })
}

//adding barcode
module.exports.addBarcode = (req, res, next)=>{
    let newBarcode = new Barcode({
        partName: req.body.partName,
        partModel: req.body.partModel,
        partCode: req.body.partCode,
        partProduction: req.body.partProduction,
    });

    newBarcode.save((err, barcode)=>{
        if(err)
        {
            res.json({msg: 'Faild to add barcode'})
        } 
        else {
            res.json({msg: 'Barcode added successfully'})
        }
    })
};