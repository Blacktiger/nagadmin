import DS from 'ember-data';

export default DS.Model.extend({
	type: DS.attr('string', { defaultValue: 'short-answer' }),
	label: DS.attr(),
	placeholder: DS.attr(),
	options: DS.hasMany('forms/option')
});