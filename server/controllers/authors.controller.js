const { modelName } = require("../models/authors.model")
const Authors = require("../models/authors.model")

module.exports.findAllAuthors = (req,res) =>{
    Authors.find()
        .then(allAuthors =>{
            res.json({results: allAuthors})
        })
        .catch(err=>res.json({message:"oh no ho no ho no no no", error:err}))
}


module.exports.createAuthor = (req,res) =>{
    Authors.create(req.body)
        .then(newAuthor =>{
            res.json({results: newAuthor})
        })
        .catch(err=>res.json({message:"oh no ho no ho no no no", error:err}))
}


module.exports.findOneAuthor = (req,res) =>{
    Authors.findOne({_id: req.params.id})
        .then(foundAuthor =>{
            res.json({results: foundAuthor})
        })
        .catch(err=>res.json({message:"oh no ho no ho no no no", error:err}))

}

module.exports.updateOneAuthor = (req,res)=>{
    Authors.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
            .then(updatedAuthor=>{
                res.json({results: updatedAuthor})
            })
            .catch(err=>res.json({message:"oh no ho no ho no no no", error:err}))
    }


    module.exports.deleteAuthor = (req,res)=>{
        Authors.deleteOne({_id: req.params.id})
            .then(deletedAuthor =>{
                res.json({results: deletedAuthor})
            })
            .catch(err=>res.json({message:"oh no ho no ho no no no", error:err}))
    }