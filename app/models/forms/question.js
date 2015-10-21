import DS from 'ember-data';

export default DS.Model.extend({
	type: DS.attr('string', { defaultValue: 'short-answer' }),
	label: DS.attr(),
	placeholder: DS.attr(),
	options: DS.hasMany('forms/option'),

	deleteRecord() {
		this.get('options').toArray().forEach(option => option.deleteRecord());
		return this._super();
	},

	save() {
		return Ember.RSVP.Promise.all(this.get('options').map(group => group.save()), this._super());
	}
});