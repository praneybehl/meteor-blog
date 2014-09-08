Router.map(function(){
  this.route('postForm',{
    path: '/blog/:_id/edit',
    onBeforeAction: function(){
      Session.set('editPostId',this.params._id);
    },
    waitOn: function(){
      return [Meteor.subscribe('posts')];
    }
  });
  this.route('postShow',{
    path: '/blog/:_id',
    onBeforeAction: function(){
      Session.set('postId',this.params._id);
    },
    waitOn: function(){
      return [Meteor.subscribe('posts')];
    }
  });
  this.route('postForm',{
    path: '/blog/new'
  });
  this.route('postIndex',{
    path: '/blog',
    waitOn: function(){
      return [Meteor.subscribe('posts')];
    }
  });
});
