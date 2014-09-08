Template.postIndex.posts = function(){
  return Posts.find();
}

Template.postIndex.blogAdmin = function(){
  return BlogSettings.blogAdmin( Meteor.userId() );
}
