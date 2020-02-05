const mongoose = require('mongoose');

const Nonconformity = mongoose.model('Nonconformity');

//retrieving barcode 
module.exports.getNonconformity = (req, res, next)=>{
    Nonconformity.find({partCode: req.params.partCode}, function(err, nonconformity){
        if(err) {
            res.json(err);
        }
        else {
           res.json(nonconformity); 
        }
    })
}

//adding barcode
module.exports.addNonconformity = (req, res, next)=>{
    let newNonconformity = new Nonconformity({
        mark: req.body.mark,
        part: req.body.part,
        um: req.body.um,
        amount: req.body.amount,
        remark: req.body.remark,
        imagePath: req.body.imagePath,
        partName: req.body.partName,
        partModel: req.body.partModel,
        partCode: req.body.partCode,
        partProduction: req.body.partProduction,
    });

    newNonconformity.save((err, nonconformity)=>{
        if(err)
        {
            res.json({msg: 'Faild to add nonconformity'})
        } 
        else {
            res.json({msg: 'Nonconformity added successfully'})
        }
    })
};