window.PrivatWidget.ROUTER = Backbone.Router.extend({
    initialize: function() {
        this.route(/^(iteminvoice\/).*$/i, 'iteminvoice', this.iteminvoice);// general page
        this.route(/^(iteminvoice\/([a-z0-9]+)\/).*$/i, 'iteminvoice', this.iteminvoice);
        this.route(/^(iteminvoice\/([a-z0-9]+)\/([a-z0-9]+)\/).*$/i, 'iteminvoice', this.iteminvoice);
        this.route(/^(invoice\/).*$/i, 'invoice', this.invoice);
        this.route(/^(invoice\/([a-z0-9]+)\/).*$/i, 'invoice', this.invoice);
        this.route(/^(clients\/).*$/i, 'clients', this.clients);
        this.route(/^(clients\/([a-z0-9]+)\/).*$/i, 'clients', this.clients);
        this.route(/^(ps\/).*$/i, 'ps', this.ps);
        this.route(/^(ps\/([a-z0-9]+)\/).*$/i, 'ps', this.ps);
    },
    routes: {
	    "": "iteminvoice"// default page
    },
    isObject: function(arg) {
        return (arg && typeof arg == 'object');
    },
    _views: {},// {name: View}
    invoice: function(query, group) {
        console.log('QUERY1: %o; GROUP1: %o', query, group);
        
    },
    clients: function(query, group) {
        console.log('QUERY2: %o; GROUP2: %o', query, group);
        
    },
    ps: function(query, group) {
        console.log('QUERY2: %o; GROUP2: %o', query, group);
        
    },
    iteminvoice: function(query, mod, tab) {
        console.log('QUERY: %o; MOD: %o; TAB: %o', query, mod, tab);
        
    }
});
