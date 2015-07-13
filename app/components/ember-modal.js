import Ember from 'ember';

export default Ember.Component.extend({
	okBtnText: 'Ok',
	cancelBtnText: 'Cancel',
	actions: {
		ok: function() {
			this.$('.modal').modal('hide');
			this.sendAction('ok', this.get('argument'));
		}
	},
	show: function() {
		this.$('.modal').modal().on('hidden.bs.modal', function() {
			this.sendAction('close');
		}.bind(this));
	}.on('didInsertElement')
});
