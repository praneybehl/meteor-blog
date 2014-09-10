Template.postForm.mode = function(){
  if( Session.get('editPostId') !== undefined ){
    return "update";
  }else{
    return "insert";
  }
}

Template.postForm.editDoc = function(){
  if( Session.get('editPostId') !== undefined ){
    return Posts.findOne({'_id': Session.get('editPostId') });
  }else{
    return;
  }
}

Template.postForm.destroyed = function(){
  Session.set('editPostId',undefined);
}

AutoForm.hooks({
  postForm: {
    before: {
      insert: function(doc, template) {
        console.log( "Before Insert new post" );
        doc.authorId = Meteor.userId();
        return doc;
      },
      update: function(docId, modifier, template) {
        return modifier;
      }
    },
    after: {
      insert: function(error, result, template) {
        if( error === undefined ){
          Router.go('/blog/'+result+'/edit');
        }else{
          console.log(error );
        }
      },
      update: function(error, result, template) {
        if( error === undefined ){
          console.log("Update successful");
        }else{
          console.log(error );
        }

      }
    }
  }
});
