Meteor.publish('posts', function(){
  console.log( "HERE" );
  console.log( this.userId );
  if( BlogSettings.blogAdmin( this.userId ) ){
    return Posts.find({});
  }else{
    return Posts.find({published: true});
  }
});
