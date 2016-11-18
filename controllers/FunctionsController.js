var models = require('../models');
var Function = models.Functions;


module.exports = function(app) {

        var FunctionController = {

            create : function(req, res){
                console.log(models);
                Function.build(req.body).save().then(function(func){

                    functionCreated(func, res);

                }).catch(function(error){

                    errorCreatingHability(res, error);

                });
            }

        };

        var functionCreated = function(func, res){
            buildResponse(res, 201, 'Function Created', hability);
        };

        var errorCreatingHability = function(res, err){
            buildResponse(res, 500, 'Function not Created', null, err);
        };

        var buildResponse = function(res, statusCode, message, hability, error){
            var jsonResponse = {};
            if(!!message){
                jsonResponse.message = message;
            }
            if(!!hability){
                jsonResponse.hability = hability;
            }
            if(!!error){
                jsonResponse.error = error;
            }

            res.status(statusCode).json(jsonResponse);
        }

        return FunctionController;

    };