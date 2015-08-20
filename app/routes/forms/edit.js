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
			form.get('fieldSets').forEach(fieldSet => {
				fieldSet.save();
				fieldSet.get('fields').forEach(field => field.save());
			});
			this.transitionTo('forms.index');
		}
	}
});