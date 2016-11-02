import Ember from 'ember';

export default Ember.Component.extend({
  defaultRegion: 'Asia',
  
  actions: {
    changeRegion(region) {
      this.set('defaultRegion', region);
    }
  }
});
