var Module = require('./module');

var picard = new Module();
var riker  = new Module('Will Riker', 'Commander');
var troy   = new Module('Deanna Troi', 'Lt. Commander');

console.log(riker.getName(), '-', riker.getRank());
// => Will Riker - Commander

console.log(troy.getName(), '-', troy.getRank());
// => Deanna Troi - Lt. Commander

console.log(picard.getName(), '-', picard.getRank());
// => Jeal Luc Picard - Captain
