module.exports = function(app){
  var segmentController = app.controllers.SegmentController;

  app.post('/v1/segments', segmentController.insert);
}