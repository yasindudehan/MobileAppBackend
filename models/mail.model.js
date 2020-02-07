const mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify',false);


const Schema = mongoose.Schema;         //defining schema
const mailSchema = new Schema({

   
    senderName:{
        type : String,
        required : true,
    },
    receiverName:{
        type : String,
        required : true,
    },
    mailContent:{
        type : String,
        required : true,
    }
    }
);
 
//compile model from schema
const Mail = mongoose.model('emails',mailSchema);
module.exports = Mail;