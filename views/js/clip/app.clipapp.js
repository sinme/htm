// app.clipapp.js

App.ClipApp = (function(App, Backbone, $){
  var ClipApp = {};

  function getMyUid(){
    // console.log("getMyUid");
    return ClipApp.Me.me.get("id");
  };

  ClipApp.siteShow = function(tag){
    // ClipApp.Face.showUser();
    // ClipApp.Bubb.showSiteTags(tag);
    ClipApp.ClipList.showSiteClips(tag);
  };

  ClipApp.siteQuery = function(word, tag){
    // ClipApp.Face.showUser();
    // ClipApp.Bubb.showSiteBubs(tag);
    ClipApp.ClipList.showSiteQuery(word, tag);
  };

  ClipApp.userShow = function(uid, tag){
    //ClipApp.Face.showUser(uid);
    //ClipApp.Bubb.showUserTags(uid, tag);
    ClipApp.ClipList.showUserClips(uid, tag);
  };

  ClipApp.userFollowing = function(uid){
    ClipApp.Face.showUser(uid);
    ClipApp.Bubb.showUserTags(uid, tag);
    ClipApp.FollowingList.showUserFollowing(uid); // TODO
  };

  ClipApp.userFollower = function(uid){
    ClipApp.Face.showUser(uid);
    ClipApp.Bubb.showUserTags(uid, tag);
    ClipApp.FollowerList.showUserFollower(uid); // TODO
  };

  ClipApp.myShow = function(tag){
    var uid =1;// getMyUid();
    console.info(uid);
    //ClipApp.Face.showUser(uid);
    //ClipApp.Bubb.showUserTags(uid, tag);
    ClipApp.ClipList.showUserClips(uid, tag);
  };

  ClipApp.myQuery = function(word, tag){
    var uid = getMyUid();
    ClipApp.Face.showUser(uid);
    ClipApp.Bubb.showUserBubs(uid, tag);
    ClipApp.ClipList.showUserQuery(uid, word, tag);
  };

  ClipApp.myInterest = function(tag){
    var uid = getMyUid();
    ClipApp.Face.showUser(uid);
    ClipApp.Bubb.showUserBubs(uid, tag);
    ClipApp.ClipList.showUserInterest(uid, tag);
  };

  ClipApp.myRecommend = function(tag){
    var uid = getMyUid();
    ClipApp.Face.showUser(uid);
    ClipApp.Bubb.showUserBubs(uid, tag);
    ClipApp.ClipList.showUserRecommend(uid, tag);
  };

  App.vent.bind("app.clipapp:login", function(){
    var uid = getMyUid();
    ClipApp.Login.open(uid);
  });

  App.vent.bind("app.clipapp:logout", function(){
    var uid = getMyUid();
    ClipApp.Logout.show(uid);
  });

  App.vent.bind("app.clipapp:reclip", function(clipid){
    var uid = getMyUid();
    if(!uid){
      ClipApp.Login.show();
    }else{
      ClipApp.Reclip.show(clipid);
    }
  });

  App.vent.bind("app.clipapp:recommend", function(clipid){
    var uid = getMyUid();
    if(!uid){
      ClipApp.Login.show();
    }else{
      ClipApp.Recommend.show(clipid);
    }
  });

  App.vent.bind("app.clipapp:comment", function(clipid){
    var uid = getMyUid();
    if(!uid){
      ClipApp.Login.show();
    }else{
      ClipApp.Comment.show(clipid);
    }
  });

  App.vent.bind("app.clipapp:clipdetail", function(clipid){
    var uid = getMyUid();
    ClipApp.ClipDetail.show(clipid, uid);
  });

  App.vent.bind("app.clipapp:clipmemo", function(clipid){
    var uid = getMyUid();
    if(!uid){
      ClipApp.Login.show();
    }
    ClipApp.ClipMemo.show(clipid, uid);
  });

  App.vent.bind("app.clipapp:clipedit", function(clipid){
    var uid = getMyUid();
    ClipApp.ClipEdit.show(clipid, uid);
  });

  App.vent.bind("app.clipapp:mycliplist", function(){
    ClipApp.myShow();
  });

  App.vent.bind("app.clipapp:clipdelete", function(clipid){
    var uid = getMyUid();
    ClipApp.ClipDelete.show(clipid, uid);
  });

  setTimeout(function(){
    App.vent.trigger("app.clipapp:clipdetail", "1:1");
  }, 500);

  return ClipApp;
})(App, Backbone, jQuery);