window.PrivatWidget.VIEWCLIENTS = Backbone.View.extend({
    initialize: function(opt) {
    
        this.router = opt.router;
        
    },
    el: $('#privatwidget_clients'),
    statsTemplate: {
        'clients': _.template(window.PrivatWidget.TEMPLATE['app/clients/template.clients.tpl']),
        'clients_add_group': _.template(window.PrivatWidget.TEMPLATE['app/clients/template.clients_add_group.tpl'])
    },
    render: function(group) {
    
        if(group === undefined) {
            console.log('main group');
            this.el.html(this.statsTemplate['clients']({groups: []}));
            
        } else {
            
        }
    
        $('#privatwidget_clients_tabs', this.el).tabs();
        
        // dialog
        this.el.append(this.statsTemplate['clients_add_group']());
        $('#privatwidget_clients_dialog', this.el).dialog({
            autoOpen:false,
            resizable: false,
			modal: true,
			buttons: {
				Add: function() {
					console.log('Add group');
					
					// add group
					
					$(this).dialog("close");
				},
				Cancel: function() {
					$(this).dialog("close");
				}
			}
        });
        // dialog
        
        return this;
        
    },
    events: {
        'click #privatwidget_clients_add_group': 'group_add'
    },
    group_add: function(e) {
        $('#privatwidget_clients_dialog').dialog("open");
    }
});
