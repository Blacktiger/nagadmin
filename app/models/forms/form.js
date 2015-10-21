import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	type: DS.attr(),
	groups: DS.hasMany('forms/group', { async: true }),

	deleteRecord() {
		this.get('groups').toArray().forEach(group => group.deleteRecord());
		return this._super();
	},

	save() {
		return Ember.RSVP.Promise.all(this.get('groups').map(group => group.save()), this._super());
	}
});