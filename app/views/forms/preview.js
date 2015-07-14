import Ember from 'ember';

export default Ember.View.extend({
	activateTooltips: function() {
		this.$('i').tooltip({
			placement: 'right'
		});
	}.on('didInsertElement')
});