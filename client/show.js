Template.postShow.post = function(){
  console.log(Session.get('postId'));
  return Posts.findOne({'_id': Session.get('postId')});
}

Template.postShow.destroyed = function(){
  Session.set('postId',undefined);
}
