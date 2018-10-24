const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};
InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('Instruments:all-instruments-ready', this.instrumentFamilies);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishInstrumentDetail(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishInstrumentDetail = function(instrumentIndex){
  const selectedInstrument = this.instrumentFamilies[instrumentIndex];
  PubSub.publish('Instruments:selected-instrument-ready', selectedInstrument)
};


module.exports = InstrumentFamilies;
