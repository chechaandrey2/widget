window.PrivatWidget.VIEWGLOBALMENU = Backbone.View.extend({
    initialize: function(opt) {
    
        this.router = opt.router;
        
    },
    el: $('#privatwidget_globalmenu'),
    statsTemplate: {
        'globalmenu': _.template(window.PrivatWidget.TEMPLATE['app/globalmenu/template.globalmenu.tpl'])
    },
    render: function() {
        
        this.el.html(this.statsTemplate['globalmenu'](this.collection));
        
        return this;
        
    }
});
