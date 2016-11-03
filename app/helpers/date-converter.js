import Ember from 'ember';
import moment from 'moment';

export function dateConverter(params/*, hash*/) {
  let unixDate = moment.unix(params[0]);
  let dateUTC = unixDate._d;
  let formattedDate = moment(dateUTC).format('MMM D')
  return formattedDate;
}

export default Ember.Helper.helper(dateConverter);
