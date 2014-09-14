Router.map(function(){
  this.route('postForm',{
    path: '/' + BlogSettings.route + '/:_id/edit',
    onBeforeAction: function(){
      Session.set('editPostId',this.params._id);
    },
    waitOn: function(){
      return [Meteor.subscribe('Posts')];
    },
    onAfterAction: function(){
      if( BlogSettings.afterEditRender ){ BlogSettings.afterEditRender(); }
    }
  });
  this.route('postNew',{
    path: '/' + BlogSettings.route + '/new',
    template: 'postForm',
    onAfterAction: function(){
      if( BlogSettings.afterEditRender ){ BlogSettings.afterNewRender(); }
    }
  });
  this.route('postShow',{
    path: '/' + BlogSettings.route + '/:_id',
    onBeforeAction: function(){
      Session.set('postId',this.params._id);
    },
    waitOn: function(){
      return [Meteor.subscribe('Posts')];
    },
    onAfterAction: function(){
      if( BlogSettings.afterShowRender ){ BlogSettings.afterShowRender(); }
    }
  });
  this.route('postIndex',{
    path: '/' + BlogSettings.route,
    template: 'postIndexWrapper',
    waitOn: function(){
      return [Meteor.subscribe('Posts')];
    },
    onAfterAction: function(){
      if( BlogSettings.afterIndexRender ){ BlogSettings.afterIndexdRender(); }
    }

  });
});
