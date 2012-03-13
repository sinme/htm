// app.clipapp.face.js

App.ClipApp.Face = (function(App, Backbone, $){
  var Face = {};
  var UserModel = App.Model.extend({
    url : "/test/user-1.json"
  /* url: function(){
      return "_2_/user/"+this.id;
    }*/
});
  var FaceView = App.ItemView.extend({
    tagName: "div",
    className: "userface-view",
    template: "#userface-view-template"
  });
  var getUser=function(uid,callback){
    var user=new UserModel({
      id:uid
    });
    user.fetch();
    user.onChange(function(userModel){
      callback(userModel);
    });
  };
  Face.showUser = function(uid){
    if(uid){
      getUser(uid, function(user){
	App.vent.trigger("app.clipapp.face:show", user);
      });
    }else{
      App.faceRegion.close();
    }
  }

  App.vent.bind("app.clipapp.face:show", function(user){
    var faceView = new FaceView({model: user});
    App.faceRegion.show(faceView);
  });

  return Face;
})(App, Backbone, jQuery);