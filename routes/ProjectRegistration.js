module.exports = function(app){
  var controller = app.controllers.ProjectRegistrationController;

  // app.get('/v1/projectsregistration', controller);
  // app.get('/v1/projectsregistration/:id', controller);
  app.post('/v1/projectsregistration', controller.insert);
  // app.put('/v1/projectsregistration/:id', controller);
  // app.delete('/v1/projectsregistration/:id', controller);

}