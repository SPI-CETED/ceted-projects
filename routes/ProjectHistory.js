module.exports = function(app){
  var controller = app.controllers.ProjectHistoryController;

  // app.get('/v1/projects/history/', controller);
  // app.get('/v1/projects/history/:id', controller)
  app.post('/v1/projects/history/', controller.insert);
  // app.put('/v1/projects/history/:id', controller);
  // app.delete('/v1/projects/history/:id', controller);
}