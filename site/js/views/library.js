// site/js/views/library.js

var app = app || {};

app.LibraryView = Backbone.View.extend({
  el: "#books",

  initialize: function (initialBooks) {
    this.collection = new app.Library(initialBooks);
    this.render();
    this.listenTo(this.collection, "add", this.renderBook);
  },
  events: {
    "click #add": "addBook",
  },

  // render library by rendering each book in its collection
  render: function () {
    this.collection.each(function (item) {
      this.renderBook(item);
    }, this);
  },

  // render a book by creating a BookView and appending the
  // element it renders to the library's element
  renderBook: function (item) {
    var bookView = new app.BookView({
      model: item,
    });
    this.$el.append(bookView.render().el);
  },

  addBook: function (e) {
    e.preventDefault();

    var formData = {};

    $("#addBook div")
      .children("input")
      .each(function (i, el) {
        if ($(el).val() !== "") {
          formData[el.id] = $(el).val();
          /*
          {
            el.id will be the elements id, since we named our id's the same as the properties in the book model this works
            el.title = el.value, <= value of the first input,
            el.author = el.value, <= value of the second input,
            el.releaseDate = el.value, <= value of the third input,
            el.keywords = el.value, <= value of the fourth input
          }
          */
        }
      });

    this.collection.add(new app.Book(formData));
  },
});
