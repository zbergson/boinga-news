import Ember from 'ember';

export default Ember.Component.extend({

  defaultRegion: 'Africa',
  defaultLanguage: 'English',

  actions: {
    changeRegion(region) {
      this.set('defaultRegion', region);
    },

    changeToEnglish() {
     this.set('defaultLanguage', 'English');
    },

    changeToMartian() {
      this.set('defaultLanguage', 'Martian');
    }
  }
});
