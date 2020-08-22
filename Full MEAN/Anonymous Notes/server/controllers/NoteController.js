let Note = require("mongoose").model("Note");

module.exports = {
    create:function(req, res){
        let note = new Note({
            text: req.body.text
        });

    note.save(function(errs){
        if(errs){
            console.log(errs);
            red.redirect("/")
        }
        else{
            res.json(note);
        }
        });
    },

    all:function(req, res){
        Note.find({}, function(err,notes){
            if(err){
                console.log(err);
                res.redirect("/");
            }
            else{
                res.json(notes);
            }
        }).sort({createdAt:-1}) 
    },

    get:function(req,res){
        let note = Note.find({_id:req.params.id},function(err,note){
            if(err){
                console.log(err);
                res.redirect("/");
            }else{
                res.json(note[0]);
            }
        });
    },

    update:function(req,res){
        let note = Note.find({_id:req.params.id},function(err,note){
            note = note[0];
            note.text = req.body.text;
            note.save(function(errs){
                if(errs){
                    console.log(errs);
                }
                res.redirect("/");
            });
        });
    },

    delete:function(req,res){
        Note.destroy({_id:req.params.id},function(err){
            if(err){
                console.log(err);
            }
            res.redirect("/");
        });
    }

}