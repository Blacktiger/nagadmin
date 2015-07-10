import Ember from 'ember';
import Authenticated from 'nag-admin/routes/authenticated';

export default Authenticated.extend({
	model: function() {
		return this.store.findAll('forms/form');
	},
	
	actions: {
		delete: function(form) {
			form.destroyRecord();
		}
	}
});