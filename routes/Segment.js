module.exports = function(app){
  var segmentController = app.controllers.SegmentController;

  app.get('/v1/segments', segmentController.list);
  app.get('/v1/segments/:id', segmentController.findById);
  app.post('/v1/segments', segmentController.insert);
  app.delete('/v1/segments/:id', controller.delete);
}