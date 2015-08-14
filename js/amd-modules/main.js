require(['addon'], function(Addon) {

    var picard = new Addon();
    var riker  = new Addon('Will Riker', 'Commander');
    var troy   = new Addon('Deanna Troi', 'Lt. Commander');

    console.log(riker.getName(), '-', riker.getRank());
    // => Will Riker - Commander

    console.log(troy.getName(), '-', troy.getRank());
    // => Deanna Troi - Lt. Commander

    console.log(picard.getName(), '-', picard.getRank());
    // => Jeal Luc Picard - Captain
});
