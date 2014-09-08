Meteor.publish('Posts', function(){
  if( BlogSettings.blogAdmin( this.userId ) === true ){
    return Posts.find({});
  }else{
    return Posts.find({published: true});
  }
});
