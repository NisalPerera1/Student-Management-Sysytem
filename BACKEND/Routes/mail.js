const router = require ("express").Router();
const MAil = require("../Models/mail");

//mail adding
router.route('/contact').post((req,res)=>{
    const name =req.body.name;
    const email =req.body.email;
    const subject =req.body.sebject;
    const message =req.body.message;
 
    const NewMail=new Student({
        name,
        email,
        subject,
        message
    })
    NewMail.save((err) => {
        if (err) {
            return res.status(400).json ({
                error:err
            });
        }
      return res.status(200).json({
        sucess:"Conatcting succcesfull"
        //sucess kiyanne key eka "post eka " liyanne json format eken 
      });
    })
})
    

module.exports=router;
