module.exports = function(app){
    var functionController = app.controllers.FunctionController;

    app.post('/v1/functions', functionController.create);
	app.get('/v1/functions', functionController.list);
	app.get('/v1/functions/:id', functionController.findById);
	app.put('/v1/functions/:id', functionController.update);
	app.get('/v1/functions/:id', functionController.findById);
    app.delete('/v1/functions/:id', functionController.delete);
}