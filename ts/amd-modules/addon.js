define([], function() {

  function Addon(name, rank) {
    this.name = name || 'Jean Luc Picard';
    this.rank = rank || 'Captain';
  }

  Addon.prototype.getName = function() {
    return this.name;
  };

  Addon.prototype.getRank = function() {
    return this.rank;
  };

  return Addon;
});
