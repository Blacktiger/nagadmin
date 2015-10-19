import DS from 'ember-data';

export default DS.Model.extend({
	label: DS.attr(),
	fields: DS.hasMany('forms/question', { async: true })
});