import DS from 'ember-data';

export default DS.Model.extend({
	label: DS.attr(),
	type: DS.attr(),
	placeholder: DS.attr(),
	info: DS.attr()
});