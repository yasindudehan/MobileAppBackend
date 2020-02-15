/* const mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify',false);


const Schema = mongoose.Schema;         //defining schema
const salesRepSchema = new Schema({

    userName:{
        type : String,
        required :[ true,"UserName field is required"],
        trim : true,
        lowercase:true,
        unique : true,
    },
    fullName:{
        type : String,
        required : true,
    },
    nic:{
        type : String,
        required : true,
    },
    area:{
        type : String,
        required : true,
    },
    address:{
        type : String,
        required : true,

    },
    phoneNo:{
        type : String,
        required : true,
    },
    email:{
        type : String,
    },
    password:{
        type : String,
        required : true
    }
},
    {
    timestamps : true
    }
);
 
//compile model from schema
const SalesRep = mongoose.model('salesReps',salesRepSchema);
module.exports = SalesRep; */
const mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify',false);



const Schema = mongoose.Schema;         
const salesRepSchema = new Schema({

    userName:{
        type : String,
        required :[ true,"UserName field is required"],
        trim : true,
        lowercase:true,
        unique : true,
    },
    fullName:{
        type : String,
        required : true,
    },
    nic:{
        type : String,
        required : true,
    },
    area:{
        type : String,
        required : true,
    },
    address:{
        type : String,
        required : true,

    },
    phoneNo:{
        type : String,
        required : true,
    },
    email:{
        type : String,
    },
    password:{
        type : String,
        required : true
    },
    status :{
        type:String,          
        default:"active"
    },
     totalOrders:{
        type:Number,
        default:0
     },
     totalCustomers:{
        type:Number,
        default:0
     },
     isLogin :{
         type:Boolean,
         default:true
     },

    
 },
     {
     timestamps:true
        }
);

const SalesRep = mongoose.model('salesReps',salesRepSchema);
module.exports = SalesRep;