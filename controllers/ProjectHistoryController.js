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
          ProjectHistory.findOne({where: {id: req.params.id}}).then(function(projectHistory){
            if(projectHistory){
              res.status(200).json(projectHistory);
            }else{
              projectHistoryNotFound(res);
            }
          })
        }

    };

    var historyCreated = function(history, res){
        buildResponse(res, 201, 'History Created', history);
    };

    var errorCreatingHistory = function(res, err){
        buildResponse(res, 500, 'History not Created', null, err);
    };

    var projectHistoryNotFound = function(res){
        buildResponse(res, 404, 'ProjectHistory Not Found');
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