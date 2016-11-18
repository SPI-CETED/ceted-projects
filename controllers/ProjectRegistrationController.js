var models = require('../models');
var q = require('q');
var ProjectRegistration = models.ProjectRegistration;

module.exports = function(app) {

  var ProjectRegistrationController = {
    insert : function(req, res){
        ProjectRegistration.build(req.body).save().then(function(projectRegistration){
            projectRegistrationCreated(projectRegistration, res);
        }).catch(function(error){
            errorCreatingProjectregistration(res, error);
        });
    },

    update: function(req, res){
      ProjectRegistration.findOne({where: {id: req.params.id}}).then(function(projectRegistration){
        if(projectRegistration){
          projectRegistration.updateAttributes(req.body).then(function(projectRegistration){
            projectRegistrationUpdated(projectRegistration, res);
          }).catch(function(error){
            errorUpdatingProjectRegistration(res, error);
          });
        }else{
          projectRegistrationNotFound(res);
        }
      });    
    },

  };

  var projectRegistrationUpdated = function(projectRegistration, res){
    buildResponse(res, 201, 'ProjectRegistration Updated', projectRegistration);
  };

  var projectRegistrationNotFound = function(res){
    buildResponse(res, 404, 'ProjectRegistration Not Found');
  };

  var errorUpdatingProjectRegistration = function(res, err){
    buildResponse(res, 500, 'ProjectRegistration not Updated', null, err);
  };

  var projectRegistrationCreated = function(hability, res){
    buildResponse(res, 201, 'ProjectRegistration Created', hability);
  };

  var errorCreatingProjectregistration = function(res, err){
    buildResponse(res, 500, 'ProjectRegistration not Created', null, err);
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

  return ProjectRegistrationController;
}
