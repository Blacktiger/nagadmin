import Authenticated from 'nag-admin/routes/authenticated';

export default Authenticated.extend({
    model: function() {
        return this.authentication.get('google');
    }
});