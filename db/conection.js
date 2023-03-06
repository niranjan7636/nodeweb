const mongoose = require('mongoose')
const validator = require('validator')



main().catch((error)=> console.log(error))


async function main(){

await mongoose.connect(process.env.DATA_BASE)
console.log("database connected")
}


const userSchema = new mongoose.Schema({
    name:{type:String,required:true,minLength:3  } ,
    email: {type:String,required:true, validate(value) {if(!validator.isEmail(value)){throw new Error ("Invalid Email Is")  }     }                       },
    phone : {type:Number,required:true, min :10 },
    message : {type:String,required:true,minLength:3},
    date : {type : Date,default:Date.now }

})

const User = mongoose.model('User' , userSchema)

module.exports = {
    main,
    User,
  };

















