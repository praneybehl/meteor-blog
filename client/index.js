Template.postIndex.posts = function(){
  return Posts.find();
}

Template.postIndex.blogAdmin = function(){
  if( Meteor.userId !== undefined && Meteor.userId() !== undefined ){
    return BlogSettings.blogAdmin( Meteor.userId() );
  }else{
    return false;
  }
}
