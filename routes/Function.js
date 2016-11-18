module.exports = function(app){
    var functionController = app.controllers.FunctionController;

    app.post('/v1/functions', functionController.create);
}