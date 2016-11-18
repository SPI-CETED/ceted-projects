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
        }

    };

    var historyCreated = function(history, res){
        buildResponse(res, 201, 'History Created', history);
    };

    var errorCreatingHistory = function(res, err){
        buildResponse(res, 500, 'History not Created', null, err);
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