var models = require('../models');
var Segment = models.Segment;


module.exports = function(app) {

    var SegmentController = {

        insert: function(req, res){
            Segment.build(req.body).save().then(function(segment){

    			segmentCreated(segment, res);

    		}).catch(function(error){

    			errorCreatingSegment(res, error);

    		});
        },
        list: function(req, res){
	    	var limit = req.query.limit || 10;
	    	limit = parseInt(limit);
	      	var offset = req.query.offset || 0;
	      	offset = parseInt(offset);

	      	Segment.findAll({
	        	limit: limit,
	        	offset: offset
	      	}).then(function(segments){
	        	var data = {};
	        	data.result = segments;
	        	data.limit = limit;
	        	data.offset = offset;
	        	res.status(200).json(data);
	      })
	    },
	    findById : function(req, res){
	      	Segment.findOne({where: {id_segment: req.params.id}}).then(function(segment){
	        	if(segment){
	          		res.status(200).json(segment);
	        	}else{
	          		segmentNotFound(res);
	        	}
	      	});
	    },
        delete : function(req, res){
            Segment.destroy({where: {id_project: req.params.id}}).then(function(){
                segmentDeleted(res);
            });
        },

    };

    var segmentNotFound = function(res){
    	buildResponse(res, 404, 'Segment Not Found');
	};

    var segmentCreated = function(segment, res){
        buildResponse(res, 201, 'Segment Created', segment);
    };

    var errorCreatingSegment = function(res, err){
        buildResponse(res, 500, 'Segment not Created', null, err);
    };

    var segmentDeleted = function(res){
        buildResponse(res, 200, 'Segment Deleted');
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