import Authenticated from 'nag-admin/routes/authenticated';

export default Authenticated.extend({
	model: function(params) {
		if (params.id === 'new') {
			return this.store.createRecord('forms/form');
		} else {
			return this.store.find('forms/form', params.id);
		}
	},

	actions: {
		cancel: function(form) {
			form.rollback();
			this.transitionTo('forms.index');
		},

		save: function(form) {
			form.save();
			form.get('groups').forEach(group => {
				group.save();
				group.get('questions').forEach(question => question.save());
			});
			this.transitionTo('forms.index');
		},

		addGroup: function(form) {
			var group = this.store.createRecord('forms/group', {
				question: this.store.createRecord('forms/question')
			});
			form.get('groups').pushObject(group);
		}
	}
});