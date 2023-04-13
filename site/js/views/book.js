var app = app || {};

app.BookView = Backbone.View.extend({
  tagName: "div",
  className: "bookContainer",
  template: _.template($("#bookTemplate").html()),

  events: {
    'click .delete': 'deleteBook'
  },

  render: function () {
    //this.el is what we defined in tagName (div). use $el to get access to jQuery html() function
    this.$el.html(this.template(this.model.attributes)); // the model it will use will be defined in instantiation

    return this;
  },

  deleteBook: function( event){
    this.model.destroy(); // delete model

    this.remove(); // delete view

  },
});
