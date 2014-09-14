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
      BlogSettings.afterEditRender ? BlogSettings.afterEditRender() : return;
    }
  });
  this.route('postNew',{
    path: '/' + BlogSettings.route + '/new',
    template: 'postForm',
    onAfterAction: function(){
      BlogSettings.afterNewRender ? BlogSettings.afterNewRender() : return;
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
      BlogSettings.afterShowRender ? BlogSettings.afterShowRender() : return;
    }
  });
  this.route('postIndex',{
    path: '/' + BlogSettings.route,
    template: 'postIndexWrapper'
    waitOn: function(){
      return [Meteor.subscribe('Posts')];
    },
    onAfterAction: function(){
      BlogSettings.afterIndexRender ? BlogSettings.afterIndexRender() : return;
    }

  });
});
