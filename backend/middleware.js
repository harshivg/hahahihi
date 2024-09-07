const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // console.log("authHeader", authHeader);

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(403).json({
            message: "Unauthorized, token incorrect",
            token: authHeader
        })
    }

    const token = authHeader.split(" ")[1];
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if(decoded.userId){
            req.userId = decoded.userId;
            next();
        }
    }
    catch(err){
        return res.status(403).json({
            message: "Unauthorized"
        })
    }
}

module.exports = {
    authMiddleware
}