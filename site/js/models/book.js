var app = app || {};

app.Book = Backbone.Model.extend({
    defaults: {
        coverImage: '/site/img/placeholder.png',
        title: 'no title',
        author: 'unknown',
        releaseDate: 'unknown',
        keywords: 'none'
    }
});