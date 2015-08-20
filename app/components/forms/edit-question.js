import Ember from "ember";

export default Ember.Component.extend({
	questionComponent: Ember.computed("type", {
		get: function() {
			return `forms/edit-${this.get('type')}-question`;
		}
	})
});