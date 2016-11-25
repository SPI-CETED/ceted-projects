var models = require('../models');
var Function = models.Function;


module.exports = function(app) {

        var FunctionController = {

            create : function(req, res){
                Function.build(req.body).save().then(function(func){
                    functionCreated(func, res);

                }).catch(function(error){

                    errorCreatingHability(res, error);

                });
            }

        };

        var functionCreated = function(func, res){
            buildResponse(res, 201, 'Function Created', func);
        };

        var errorCreatingHability = function(res, err){
            buildResponse(res, 500, 'Function not Created', null, err);
        };

        var buildResponse = function(res, statusCode, message, func, error){
            var jsonResponse = {};
            if(!!message){
                jsonResponse.message = message;
            }
            if(!!func){
                jsonResponse.func = func;
            }
            if(!!error){
                jsonResponse.error = error;
            }

            res.status(statusCode).json(jsonResponse);
        }

        return FunctionController;

    };