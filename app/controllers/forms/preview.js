import Ember from 'ember';

export default Ember.Controller.extend({
	fieldGroups: function() {
		var fields = this.get('model.fields');
		if (fields) {
			return JSON.parse(fields);
		}
	}.property('fields')
});