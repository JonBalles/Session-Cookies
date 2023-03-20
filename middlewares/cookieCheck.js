module.exports = (req, res, next) =>{
    if(req.cookies.cookie){
        req.session.user = req.cookies.cookie;
    }
    next();
}