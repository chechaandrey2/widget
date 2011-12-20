Backbone.View.extend({
    el:$(''),
    events: {
    "click .icon":          "open",
    "click .button.edit":   "openEditDialog",
    "click .button.delete": "destroy"
  },
  render: function() {
    
  }

});
