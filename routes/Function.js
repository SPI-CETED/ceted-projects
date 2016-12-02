module.exports = function(app){
    var functionController = app.controllers.FunctionController;

    app.post('/v1/functions', functionController.create);
	app.get('/v1/functions', functionController.list);
	app.get('/v1/functions/:id', controller.findById);
	app.put('/v1/functions/:id', controller.update);
}