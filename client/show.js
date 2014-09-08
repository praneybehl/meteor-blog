Template.postShow.post = function(){
  return Posts.findOne({'_id': Session.get('postId')});
}

Template.postShow.destroyed = function(){
  Session.set('postId',undefined);
}
