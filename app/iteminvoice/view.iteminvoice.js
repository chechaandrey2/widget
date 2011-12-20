window.PrivatWidget.VIEWITEMINVOICE = Backbone.View.extend({
    initialize: function(opt) {
    
        this.router = opt.router;
        
    },
    el: $('#privatwidget_iteminvoice'),
    statsTemplate: {
        'iteminvoice': _.template(window.PrivatWidget.TEMPLATE['app/iteminvoice/template.iteminvoice.tpl']),
        'iteminvoice_new_ps': _.template(window.PrivatWidget.TEMPLATE['app/iteminvoice/template.iteminvoice_new_ps.tpl'])
    },
    render: function(id) {
    
        if(id === undefined) {
            console.log('new invoice');
            this.el.html(this.statsTemplate['iteminvoice']({title: 'title'}));
            $('#privatwidget_iteminvoice_pss', this.el).html(this.statsTemplate['iteminvoice_new_ps']());
        } else {
            console.log('view/edit invoice');
        }
        
        $('#privatwidget_iteminvoice_tabs', this.el).tabs();
        
        return this;
        
    }
});
