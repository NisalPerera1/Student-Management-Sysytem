const router = require ("express").Router();
const Student = require("../Models/Student");

//student adding
router.route('/add').post((req,res)=>{
    const name =req.body.name;
    const address =req.body.name;
    const age =req.body.age;
    const gender =req.body.gender;
 
    const NewStudent=new Student({
        name,
        address,
        age,
        gender
    })
    NewStudent.save((err) => {
        if (err) {
            return res.status(400).json ({
                error:err
            });
        }
      return res.status(200).json({
        sucess:"student saved succcesfull"
        //sucess kiyanne key eka "post eka " liyanne json format eken 
      });
    })
})
    

//student view
router.route("/").get( (req,res)=>{
       Student.find().then((Student)=>{
        res.json(Student) } ) 
        .catch((err)=>{
        console.log(err)
        })
}
)
//update (: remember async function gahnne eka digt req edi nawathinne nathuwa karapu function eka continu karala new task eka karanna)
router.route("/Update/:id").put(async (req,res)=>{
let userId=req.params.id;

//destructure (create function ekedi variable thunak hadan karapu ekamai)
const{name,age,gender}=req.body
const UpdateStudent={
    name,
    age,
    gender
}
//update karana atharathura thawa req eddi dekama crash wenne nathuwa krana function eka karanakan tikak inna kiyla kiyanwa
const update=await Student.findByIdAndUpdate(userId,UpdateStudent).then(()=>{
res.status(200).send({status:"user updated",})
 }) 
 .catch((err)=>{
    console.log(err)  
    res.status(500).send({status:"user updated failed",error:err.message})

})
})

//delete
router.route('/delete/:id').delete(async(req,res)=>{
    let userId=req.params.id;
    await Student.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"user deleted",user:userId})

    })
    .catch(()=>{
        console.log(err)  
        res.status(500).send({status:"user deleted failed",error:err.message})
    
    })
            
});

module.exports=router;
