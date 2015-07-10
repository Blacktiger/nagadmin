import Ember from 'ember';

export default Ember.ArrayController.extend({
	needs: 'dashboard',
	isUserAdmin: Ember.computed.alias('controllers.dashboard.model.isUserAdmin')
});
