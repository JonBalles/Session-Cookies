const session = require("express-session");
const {validationResult} = require("express-validator");

module.exports = {

    index: (req, res)=>{
        res.render('index', { 
        session: req.session })
    },

    processRegister: (req, res) => {
        let errors = validationResult(req);
       

        if(errors.isEmpty()) {
          
            const {nombre, color, email, edad, recordar} = req.body
           
            req.session.user = {
                 nombre,
                 email,
                 color,
                 edad
             }
           res.locals.user = req.session.user
           
             if(recordar){
                res.cookie("cookie", req.session.user,                 {
                    expires: new Date(Date.now() + 30000),
                    httpOnly: true                 
                })
            }
            return res.render("index",{
                session: req.session
            })

        }else {
            
            res.render("index", {
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    
    },
    next: (req, res) =>{
        res.render("next",{
            session: req.session
        })
    },
    restart:  (req, res) =>{
        req.session.destroy();
        res.cookie("cookie", null, {maxAge: -1})
        return res.redirect("/")
    }


}