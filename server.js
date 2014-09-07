Meteor.publish('posts', function(){
  return Meteor.find({published: true});
});
