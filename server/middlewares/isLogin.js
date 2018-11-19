const hash = require('../helpers/hashHelper')
const User = require('../models/User')

module.exports = {
    isLogin: (req, res, next) =>{
        let token = req.headers.token    
        if(token){
            let verify = hash.jwtDecode(token)
            console.log(`ini verify`,verify);
            User.findOne({_id: verify._id})
            .then(result =>{
                if(result){
                    req.decoded = verify
                    next()
                } else {
                    res.status(401).json({
                        message: `Your No Access`
                    })
                }
            })
            .catch( (err)=>{
                res.status(500).json({
                    message: `Server Error`
                })
            })
        } else {
            res.status(401).json({
                message: `No Authenticate`
            })
        }
    },

    isAdmin : (req, res, next)=>{
        if(req.decoded.role === 'admin'){
            next()
        }else{
            res.status(403).json(`forbidden boy`)
        }
    }
}