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
    set(this, 'timer', run.later(this, this.startCycle, 6000));
  },

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
