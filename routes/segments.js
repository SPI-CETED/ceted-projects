module.exports = function(app){
  var segmentsController = app.controllers.SegmentsController;

  app.post('/v1/segment', segmentsController.create);
}