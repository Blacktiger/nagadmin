import Authenticated from 'nag-admin/routes/authenticated';

export default Authenticated.extend({
	model(params) {
		if (params.id === 'new') {
			return this.store.createRecord('forms/form');
		} else {
			return this.store.find('forms/form', params.id);
		}
	},

	actions: {
		cancel(form) {
			form.rollback();
			this.transitionTo('forms.index');
		},

		save(form) {
			form.save();
			this.transitionTo('forms.index');
		},

		addGroup(form) {
			var group = this.store.createRecord('forms/group');
			var question = this.store.createRecord('forms/question');

			group.get('questions').pushObject(question);
			form.get('groups').pushObject(group);
		},

		removeGroup(group) {
			group.deleteRecord();
		},

		addQuestion(group) {
			var question = this.store.createRecord('forms/question');
			group.get('questions').pushObject(question);
		},

		removeQuestion(question) {
			question.deleteRecord();
		},

		removeOption(option) {
			option.deleteRecord();
		}
	}
});