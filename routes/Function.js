module.exports = function(app){
    var functionController = app.controllers.FunctionsController;

    app.post('/v1/functions', functionController.create);
}