import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
	label: DS.attr(),
	questions: DS.hasMany('forms/question', { async: true }),

	deleteRecord() {
		this.get('questions').toArray().forEach(question => question.deleteRecord());
		return this._super();
	},

	save() {
		return Ember.RSVP.Promise.all(this.get('questions').map(group => group.save()), this._super());
	}
});