module.exports = function(app){
  var segmentController = app.controllers.SegmentController;

  app.put('/v1/segments/:id', segmentController.update);
  app.get('/v1/segments', segmentController.list);
  app.get('/v1/segments/:id', segmentController.findById);
  app.post('/v1/segments', segmentController.insert);
}