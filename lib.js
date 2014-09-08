BlogSettings = {
  "route": "blog",
  "blogAdmin": function(userId){ return false; }
};

PostSchema = new SimpleSchema({
  title: {
    type: String
  },
  brief: {
    type: String
  },
  body: {
    type: String
  },
  published: {
    type: Boolean,
    defaultValue: false
  },
  publishedAt: {
    type: Date,
    optional: true
  }
});

Posts = new Meteor.Collection('posts',{
  schema: PostSchema
});

Posts.allow({
  insert: function(userId, doc){
    return BlogSettings.blogAdmin(userId);
  },
  update: function(userId, doc, fieldNames, modifier){
    return BlogSettings.blogAdmin(userId);
  },
  remove: function(userId, doc){
    return BlogSettings.blogAdmin(userId);
  }
});
