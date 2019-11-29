'use strict';
module.exports = function(app) {
  var leagueTableRoutes = require('../controller/leagueTableController');

  // Table Routes
  app.route('/league-table')
    .get(leagueTableRoutes.list_table)
    .post(leagueTableRoutes.add_to_table);

  app.route('/league-table/:playerId')
    // .get(leagueTableRoutes.read_a_task)
    .put(leagueTableRoutes.update_table)
    .delete(leagueTableRoutes.delete_from_table);
};
