const jwt = require('jsonwebtoken');
// jwt هو عبارة عن رمز أو مفتاح مشفر يتم توليده عندما يقوم المستخدم بتسجيل الدخول للتطبيق
const secret = process.env.JWT_SECRET
const expiresIn= process.env.JWT_EXPIRES_IN


exports.sign=(payload)=>{
return jwt.sign(payload,secret,{expiresIn})
}

exports.verify=(token)=>{
try{
    return jwt.verify(token,secret)
}catch(e){
    return false
}
}