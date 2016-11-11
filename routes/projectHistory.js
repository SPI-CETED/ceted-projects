module.exports = function(app){
  var controller = app.controllers.ProjectHistoryController;

  // app.get('/v1/project/history/', controller);
  // app.get('/v1/project/history/:id', controller)
  app.post('/v1/project/history/', controller.insert);
  // app.put('/v1/project/history/:id', controller);
  // app.delete('/v1/project/history/:id', controller);
}