'use strict';
module.exports = function(app) {
  var leagueTableRoutes = require('../controllers/leagueTableController');

  // todoList Routes
  app.route('/league-table')
    .get(leagueTableRoutes.list_table)
    .post(leagueTableRoutes.add_to_table);

  app.route('/league-table/:tableId')
    // .get(leagueTableRoutes.read_a_task)
    .put(leagueTableRoutes.update_table)
    .delete(leagueTableRoutes.delete_from_table);
};
