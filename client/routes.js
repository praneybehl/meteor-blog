Router.map(function(){
  this.route('postForm',{
    path: '/' + BlogSettings.route + '/:_id/edit',
    onBeforeAction: function(){
      Session.set('editPostId',this.params._id);
    },
    waitOn: function(){
      return [Meteor.subscribe('Posts')];
    }
  });
  this.route('postNew',{
    path: '/' + BlogSettings.route + '/new',
    template: 'postForm'
  });
  this.route('postShow',{
    path: '/' + BlogSettings.route + '/:_id',
    onBeforeAction: function(){
      Session.set('postId',this.params._id);
    },
    waitOn: function(){
      return [Meteor.subscribe('Posts')];
    }
  });
  this.route('postIndex',{
    path: '/' + BlogSettings.route,
    waitOn: function(){
      return [Meteor.subscribe('Posts')];
    }
  });
});
