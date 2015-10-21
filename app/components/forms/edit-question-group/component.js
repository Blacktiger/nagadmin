import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		clickAddQuestion(group) {
			this.sendAction('clickAddQuestion', group);
		},

		clickRemoveGroup(group) {
			this.sendAction('clickRemoveGroup', group);
		},

		clickRemoveQuestion(question) {
			this.sendAction('clickRemoveQuestion', question);
		}
	}
});
