Router.map(function(){
  this.route('blog',{
    path: '/blog',
    waitOn: function () {
      return Meteor.subscribe('posts', this.params._id);
    }
  });
});
