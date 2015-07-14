import Ember from 'ember';
import Authenticated from 'nag-admin/routes/authenticated';

export default Authenticated.extend({
	model: function(params) {
		return this.store.find('forms/form', params.id);
	}
});