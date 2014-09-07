PostSchema = new SimpleSchema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  published: {
    type: Boolean
  },
  createdAt: {
    type: Date
  }
});

Posts = new Meteor.Collection('posts',{
  schema: PostSchema
});

Meteor.startup(function(){
  if( BlogSettings.allowed !== undefined ){
    Posts.allow( BlogSettings.allowed );
  }else{ 
    Posts.allow({
      insert: function(userId, doc){
        return userId !== undefined;
      },
      update: function(userId, doc, fieldNames, modifier){
        return userId !== undefined;
      },
      remove: function(userId, doc){
        return userId !== undefined;
      }
    });
  }
});
