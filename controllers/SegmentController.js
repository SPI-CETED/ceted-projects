var models = require('../models');
var Segment = models.Segment;


module.exports = function(app) {

    var SegmentController = {

        insert : function(req, res){
            Segment.build(req.body).save().then(function(segment){

    			segmentCreated(segment, res);

    		}).catch(function(error){

    			errorCreatingSegment(res, error);

    		});
        }

    };

    var segmentCreated = function(segment, res){
        buildResponse(res, 201, 'Segment Created', segment);
    };

    var errorCreatingSegment = function(res, err){
        buildResponse(res, 500, 'Segment not Created', null, err);
    };

    var buildResponse = function(res, statusCode, message, segment, error){
        var jsonResponse = {};
        if(!!message){
            jsonResponse.message = message;
        }
        if(!!segment){
            jsonResponse.segment = segment;
        }
        if(!!error){
            jsonResponse.error = error;
        }

        res.status(statusCode).json(jsonResponse);
    }

    return SegmentController;

}