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
            },
            
            list: function(req, res){
              var limit = req.query.limit || 10;
              limit = parseInt(limit);
              var offset = req.query.offset || 0;
              offset = parseInt(offset);

              Function.findAll({
                limit: limit,
                offset: offset,
                order: 'id DESC'
              }).then(function(functions){
                var data = {};
                data.result = functions;
                data.limit = limit;
                data.offset = offset;
                res.status(200).json(data);
              })
            },

            findById : function(req, res){
              Function.findOne({where: {id_function: req.params.id}}).then(function(fn){
                if(fn){
                  res.status(200).json(fn);
                }else{
                  functionNotFound(res);
                }
              });
            },

            update: function(req, res){
              Function.findOne({where: {id_function: req.params.id}}).then(function(fn){
                if(fn){
                  fn.updateAttributes(req.body).then(function(fn){
                    functionUpdated(fn, res);
                  }).catch(function(error){
                    errorUpdatingFunction(res, error);
                  });
                }else{
                  functionNotFound(res);
                }
              });    
            }

        };

        var functionCreated = function(func, res){
            buildResponse(res, 201, 'Function Created', func);
        };

        var errorCreatingHability = function(res, err){
            buildResponse(res, 500, 'Function not Created', null, err);
        };

        var errorUpdatingFunction = function(res, err){
            buildResponse(res, 500, 'Function not Updated', null, err);
        };

        var functionUpdated = function(fn, res){
            buildResponse(res, 201, 'Function Updated', projectRegistration);
        };

        var functionNotFound = function(res){
            buildResponse(res, 404, 'Function Not Found');
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