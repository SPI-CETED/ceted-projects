var models = require('../models');
var ProjectHistory = models.ProjectHistory;


module.exports = function(app) {

    var ProjectHistoryController = {

        insert : function(req, res){
            ProjectHistory.build(req.body).save().then(function(history){

    			historyCreated(history, res);

    		}).catch(function(error){

    			errorCreatingHistory(res, error);

    		});
        },

        list: function(req, res){
            var limit = req.query.limit || 10;
            limit = parseInt(limit);
            var offset = req.query.offset || 0;
            offset = parseInt(offset);

            ProjectHistory.findAll({
                limit: limit,
                offset: offset,
                order: 'id_project DESC'
            }).then(function(projects){
                var data = {};
                data.result = projects;
                data.limit = limit;
                data.offset = offset;
                res.status(200).json(data);
            })
        },

        findById : function(req, res){
          ProjectHistory.findOne({where: {id_projectHistory: req.params.id}}).then(function(projectHistory){
            if(projectHistory){
              res.status(200).json(projectHistory);
            }else{
              projectHistoryNotFound(res);
            }
          });
        },

        update: function(req, res){
          ProjectHistory.findOne({where: {id_projectHistory: req.params.id}}).then(function(projectHistory){
            if(projectHistory){
              projectHistory.updateAttributes(req.body).then(function(projectHistory){
                projectHistoryUpdated(projectHistory, res);
              }).catch(function(error){
                errorUpdatingProjectHistory(res, error);
              });
            }else{
              projectHistoryNotFound(res);
            }
          });    
        },
        
        delete : function(req, res){
            ProjectHistory.destroy({where: {id_project: req.params.id}}).then(function(){
                projectHistoryDeleted(res);
            });
        },

    };

    var historyCreated = function(history, res){
        buildResponse(res, 201, 'History Created', history);
    };

    var projectHistoryUpdated = function(projectHistory, res){
        buildResponse(res, 201, 'ProjectHistory Updated', projectRegistration);
    };

    var errorUpdatingProjectHistory = function(res, err){
        buildResponse(res, 500, 'ProjectHistory not Updated', null, err);
    };

    var errorCreatingHistory = function(res, err){
        buildResponse(res, 500, 'History not Created', null, err);
    };

    var projectHistoryNotFound = function(res){
        buildResponse(res, 404, 'ProjectHistory Not Found');
    };

    var projectHistoryDeleted = function(res){
        buildResponse(res, 200, 'Segment Deleted');
    };

    var buildResponse = function(res, statusCode, message, history, error){
        var jsonResponse = {};
        if(!!message){
            jsonResponse.message = message;
        }
        if(!!history){
            jsonResponse.history = history;
        }
        if(!!error){
            jsonResponse.error = error;
        }

        res.status(statusCode).json(jsonResponse);
    }

    return ProjectHistoryController;

}