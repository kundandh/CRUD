const personModel = require('../Model/person')


const addPerson = async(req,res)=>{
    try{
        const person = new personModel(req.body);
        const result = await person.save();
        res.send(result);
    }
    catch(error){
        console.log(error)
    }
}



module.exports= {addPerson}