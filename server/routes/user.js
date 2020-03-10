'use strict';
const passport = require('passport');
const auth     = require('../models/user');
const userController = require('../controllers/user');

const  register = (router) => {

    router.post('/login', (req, res, next) => {
        // console.log(req);
        passport.authenticate('local', (err, user) => {
            console.log(err);
            if (err) {return res.status(403).json({err: err, authUser: user}); }
            if (!user) {return res.status(403).json({err: err, authUser: user}); }
            req.logIn(user, (err) => {
                // if (err) {return res.status(403).json({err: err, authUser: user}); }
                let isalumno = false;
                console.log("Es alumno?",isalumno);
                // if(query!= null)isalumno = true;
                isalumno = auth.getUserById(user.boleta, function(items){
                    if(items== null)return false;
                    console.log("QUERY",items);
                    return true;
                })
                res.status(200).json({err: null, authUser:{
                    alumno:isalumno,
                    identificador: user.boleta,
                    nombre: user.nombre,
                    // email: user.email,
                    // username: user.username,
                }
            });
            });
        })(req, res, next);
    });


    router.get('/logout', (req, res) =>{
        req.session.destroy()
        req.logout();
        res.status(200).json({err: null, authUser: {}})
    });

}


module.exports = register;
