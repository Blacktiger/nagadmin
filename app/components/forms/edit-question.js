import Ember from "ember";

export default Ember.Component.extend({
	questionComponent: Ember.computed('selectedType', {
		get: function() {
			return `forms/edit-${this.get('selectedType')}-question`;
		}
	}),

	selectedType: 'short-answer',

	types: [
		{label: 'Short Answer', value: 'short-answer'},
		{label: 'Long Answer', value: 'long-answer'},
		{label: 'Checkbox', value: 'checkbox'},
		{label: 'Single Choice', value: 'single-choice'},
		{label: 'Multiple Choice', value: 'multiple-choice'}
	]
});