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

    findById : function(req, res){
      ProjectRegistration.findOne({where: {id: req.params.id}}).then(function(projectRegistration){
        if(projectRegistration){
          res.status(200).json(projectRegistration);
        }else{
          projectRegistrationNotFound(res);
        }
      });
    },

    delete : function(req, res){
      ProjectRegistration.destroy({where: {id: req.params.id}}).then(function(){
        projectRegistrationDeleted(res);
      });
    },

    list: function(req, res){
      var limit = req.query.limit || 10;
      limit = parseInt(limit);
      var offset = req.query.offset || 0;
      offset = parseInt(offset);

      ProjectRegistration.findAll({
        limit: limit,
        offset: offset,
        order: 'id DESC'
      }).then(function(projects){
        var data = {};
        data.result = projects;
        data.limit = limit;
        data.offset = offset;
        res.status(200).json(data);
      })
    }

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

  var projectRegistrationCreated = function(projectRegistration, res){
    buildResponse(res, 201, 'ProjectRegistration Created', projectRegistration);
  };

  var errorCreatingProjectregistration = function(res, err){
    buildResponse(res, 500, 'ProjectRegistration not Created', null, err);
  };

  var projectRegistrationDeleted = function(res){
    buildResponse(res, 200, 'ProjectRegistration Deleted');
  };

  var buildResponse = function(res, statusCode, message, projectRegistration, error){
    var jsonResponse = {};
      if(!!message){
        jsonResponse.message = message;
      }
      if(!!projectRegistration){
        jsonResponse.projectRegistration = projectRegistration;
      }
      if(!!error){
        jsonResponse.error = error;
      }
    res.status(statusCode).json(jsonResponse);
  }

  return ProjectRegistrationController;
}
