module.exports = Module;

function Module(name, rank) {
  this.name = name || 'Jean Luc Picard';
  this.rank = rank || 'Captain';
}

Module.prototype.getName = function() {
  return this.name;
};

Module.prototype.getRank = function() {
  return this.rank;
};
