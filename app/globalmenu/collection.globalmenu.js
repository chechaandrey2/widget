window.PrivatWidget.COLLECTIONGLOBALMENU = Backbone.Collection.extend({
    model: window.PrivatWidget.MODELGLOBALMENU,
    initialize: function() {
        this.add([
            {name: 'products/services', hash: 'ps/all/'},
            {name: 'clients', hash: 'clients/all/'},
            {name: 'invoices', hash: 'invoice/all/'},
            {name: 'new invoice', hash: 'iteminvoice/new/1/'}
        ]);
    }
});
