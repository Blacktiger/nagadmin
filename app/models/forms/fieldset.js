import DS from 'ember-data';

export default DS.Model.extend({
	fields: DS.hasMany('forms/field', { async: true })
});