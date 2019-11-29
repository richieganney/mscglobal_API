'use strict';

var mongoose = require('mongoose'),
  Table = mongoose.model('Table');

exports.list_table = function(req, res) {
  Table.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.add_to_table = function(req, res) {
  var new_player = new Table(req.body);
  new_player.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_table = function(req, res) {
  Table.findOneAndUpdate({_id: req.params.playerId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_from_table = function(req, res) {
  Table.remove({
    _id: req.params.playerId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Player successfully removed' });
  });
};
