const ManageController = require('../controllers/manage.controller');
module.exports = function(app){
    app.get('/api', ManageController.index);
}