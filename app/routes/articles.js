import Ember from 'ember';

const {
  $
} = Ember;

export default Ember.Route.extend({

  model() {
    return $.getJSON("/data/wsj_world.json");
  },

  setupController(controller, model) {
    let articleData = model;
    let regionList = [];
    let mainHeadlines = [];

    regionList.push('All');

    articleData.forEach(function(data){
      regionList.push(data.strap);
      data.headlines[0]['region'] = data.strap;
      mainHeadlines.push(data.headlines[0]);
    });

    controller.set('regionList', regionList);
    controller.set('mainHeadlines', mainHeadlines);

    let martianRegionList = [];
    let martianMainHeadlines = [];

    regionList.forEach(function(data) {
      if (data.length > 3) {
        data = "Boinga";
      }

      martianRegionList.push(data);
    });

    controller.set('martianRegionList', martianRegionList);
    
  }
});
