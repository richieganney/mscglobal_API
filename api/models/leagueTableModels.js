'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leagueTable = new Schema({
    position:  Number,
    team_name: String,
    played:   Number,
    win: Number,
    draw: Number,
    loss: Number,
    points_for: Number,
    points_against: Number,
    points_difference: Number,
    points: Number
  });

module.exports = mongoose.model('Table', leagueTable);
