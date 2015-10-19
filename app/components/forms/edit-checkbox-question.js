export default Ember.Component.extend({
	actions: {
		addOption: function(question) {
			var option = question.store.createRecord('forms/option');
			question.get('options').pushObject(option);
		}
	}
});