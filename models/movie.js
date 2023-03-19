const mongoose= require('mongoose');

const ModelShema= new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   category:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   },
   rate:{
    type:Number,
    default: 0
   },
   reviews:{
    type:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'User'
            },
            comment :String,
            rate:Number
        }
    ],
    default: [],
   }

},{
    timestamps:true
})

ModelShema.set('toJson', // تحويل نوع البيانات من مودل الى كائن جافاسكريبت 
 {
   virtuals:true, // الحقول التي سنتعامل معها
   versionkey:false, // إخفاء رقم الإصدار من الإستعلام 
   transform : (doc,ret)=>{   // doc = المستند , ret = الحقول
  delete ret._id 
}
                 
})
const Model= mongoose.model('Movie',ModelShema);

module.exports= Model;