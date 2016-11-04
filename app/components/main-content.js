import Ember from 'ember';

const {
  Component,
  get,
  run,
  set,
  testing
} = Ember;

export default Component.extend({

  defaultRegion: 'Africa',
  defaultLanguage: 'English',

  classNames: ['main-content'],

  classNameBindings: ['changeLogo'],

  changeLogo: false,

  regionCycle: ['Africa', 'Asia', 'Brussels Real Time', 'Canada', 'China', 'China Real Time', 'Economy', 'Europe', 'India Real Time', 'Latin America', 'Middle East'],

  init() {
    this._super(...arguments);
    // Don't run the cycle during tests
    if (!testing) { this.startCycle(); }
  },

  startCycle() {
    let classCycle = get(this, 'regionCycle'),
    currentClass = get(this, 'defaultRegion'),
    currentIndex = classCycle.indexOf(currentClass);

    if (currentIndex === (classCycle.length - 1)) {
      set(this, 'defaultRegion', classCycle[0]);
    } else {
      set(this, 'defaultRegion', classCycle[currentIndex + 1]);
    }
    this.scheduleCycle();
  },

  scheduleCycle() {
    set(this, 'timer', run.later(this, this.startCycle, 10000));
  },

  actions: {
    changeRegion(region) {
      this.set('defaultRegion', region);
    },

    switchToMaritan() {
      this.set('defaultLanguage', 'Martian');
      if (!get(this, 'changeLogo')) {
        this.toggleProperty('changeLogo');
      }
    },

    switchToEnglish() {
      this.set('defaultLanguage', 'English');
      if (get(this, 'changeLogo')) {
        this.toggleProperty('changeLogo');
      } 
    },

    switchToFlamingo() {
      this.set('defaultLanguage', 'Flamingo');
    }

  }
});
