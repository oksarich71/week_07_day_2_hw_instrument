const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Instruments:all-instruments-ready', (evt) => {
    const allInstruments = evt.detail;
    this.populate(allInstruments);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populate = function(instrumentsData){
  console.log(instrumentsData);
  instrumentFamiliesData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrumentFamilies.name;
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = SelectView;
