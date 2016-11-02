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
    let defaultRegion = this.get('defaultRegion');

    articleData.forEach(function(data){
      regionList.push(data.strap);
      data.headlines[0]['region'] = data.strap;
      mainHeadlines.push(data.headlines[0]);
    });

    controller.set('regionList', regionList);
    controller.set('mainHeadlines', mainHeadlines);
  }
});
