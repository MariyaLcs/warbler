require("dotenv").load();
const jwt = require("jsonwebtoken");

//make sure the user is logged - Authentication
exports.loginRequired = function (req, res, next) {
    try{
        const token = req.headers.authorization.split(" ").[1];
    }catch(err){}
    
};

//make sure we get the correct user - Authorization
exports.ensureCorrectUser = function (req, res, next) {};
