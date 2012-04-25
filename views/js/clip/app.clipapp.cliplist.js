// app.clipapp.cliplist.js

App.ClipApp.ClipList = (function(App, Backbone, $){
  var ClipList = {};
  //var precliplength=0,flag=true;
  var clipListView = {};
  var ClipPreviewModel = App.Model.extend({
    defaults:{
      recommend:"",//列表推荐的clip时有此属性
      clip :{}
    }
  });

  // 对my interest 和 my recommened的数据进行转换
  // [同时避免不同用户之间的clipid相同的冲突]
  // 不同用户转载给我相同的数据
  var ClipPreviewList = App.Collection.extend({
    model : ClipPreviewModel,
    parse : function(resp){
      for( var i=0; resp && i<resp.length; i++){
	// 使得resp中的每一项内容都是对象
	if(!resp[i].clip){
	  var clip = resp[i];
	  resp[i] = {clip: clip};
	  resp[i].id = clip.user.id+":"+clip.id;
	}else{
	  if(resp[i].recommend){
	    resp[i].id = resp[i].recommend.user.id+":"+resp[i].recommend.rid;
	  }else{
	    resp[i].id = resp[i].clip.user.id+":"+resp[i].clip.id;
	  }
	}
      }
      return resp;
    }
  });

  var ClipPreviewView = App.ItemView.extend({
    tagName: "article",
    className: "clip",
    template: "#clippreview-view-template",
    events: {
      // 单击clip就响应show_detail事件
      "click #header" : "show_detail",
      //"click #comment": "commentAction",
      //"click #reclip" : "reclipAction",
      "click .operate" : "operate",
      "mouseenter #header":"mouseHand",
      "mouseenter .clip_item": "mouseEnter",
      "mouseleave .clip_item": "mouseLeave"
    },
    initialize: function(){
      var $container = $('#list');
      $container.imagesLoaded( function(){
	$container.masonry({
	  itemSelector : '.clip'
	});
      });
      this.bind("item:rendered",function(itemView){
	var $newElems = itemView.$el.css({ opacity: 0 });
	$newElems.imagesLoaded(function(){
	  $newElems.animate({ opacity: 1 });
	  $("#list").masonry("reload");
	});
      });
    },
    show_detail: function(){
      var clip = this.model.get("clip");
      var clipid = clip.user.id+":"+clip.id;
      id = this.model.id;
      App.vent.trigger("app.clipapp:clipdetail",clipid);
    },
/*
    commentAction: function(){
      var clip = this.model.get("clip");
      var clipid = clip.user.id+":"+clip.id;
      App.vent.trigger("app.clipapp:comment",clipid);
    },
    reclipAction: function(){
      var clip = this.model.get("clip");
      var clipid = clip.user.id+":"+clip.id;
      App.vent.trigger("app.clipapp:reclip",clipid);
    },
*/
    mouseEnter: function(e){
      $(e.currentTarget).children(".master").children("#opt").show();
    },
    mouseLeave: function(e){
      $(e.currentTarget).children(".master").children("#opt").hide();
    },
    mouseHand:function(e){
      e.currentTarget.style.cursor="pointer";
    },
    operate: function(e){
      e.preventDefault();
      var opt = $(e.currentTarget).attr("class").split(' ')[0];
      var clip = this.model.get("clip");
      var cid = clip.user.id+":"+clip.id;
      id = this.model.id;
      switch(opt){
	case 'biezhen'://收
	  App.vent.trigger("app.clipapp:reclip", this.model);break;
	case 'refresh'://转
	  App.vent.trigger("app.clipapp:recommend", this.model);break;
	case 'comment'://评
	  App.vent.trigger("app.clipapp:comment", cid);break;
	case 'note'://注
	App.vent.trigger("app.clipapp:clipmemo", cid);break;
	case 'change'://改
	  App.vent.trigger("app.clipapp:clipedit", cid);break;
	case 'del'://删
	  App.vent.trigger("app.clipapp:clipdelete", cid);break;
      }
    }
  });

  var ClipListView = App.CollectionView.extend({
    tagName: "div",
    className: "preview-view",
    itemView: ClipPreviewView,
    initialize: function(){
/*
      this.bind("collection:rendered",function(itemView){
      	var $container = $('#list');
	$container.imagesLoaded( function(){
	  $container.masonry({
	    itemSelector : '.clip'
	  });
	});
	setTimeout(function(){ // STRANGE BEHAVIOUR
	  //$("#list").masonry("appended", itemView.$el);
	  //$('#list').prepend( itemView.$el ).masonry( 'reload' );
	  //$("#list").masonry("reload");
	},0);
      });*/
    }
  });

  var getClips = function(options){
    var clips = new ClipPreviewList();
    options.collection = clips;
    if(!options.start &&! options.end){
      options.start = 1;
      options.end = App.ClipApp.Url.page;
    }
    options.url = options.base_url + "/" + options.start+".."+ options.end;
    if(options.data){
      options.data = JSON.stringify(options.data),
      options.contentType = "application/json; charset=utf-8";
    }
    options.collection.fetch(options);
    options.collection.onReset(function(clips){
      App.vent.trigger("app.clipapp.cliplist:showlist",options.collection);
      App.util.list_scroll(options);
      //App.vent.trigger("app.clipapp.cliplist:show",clips, options);
    });
  };

  ClipList.flag_show_user = true;//clippreview是否显示用户名和用户头像

  // site == user2 网站首首页
  ClipList.showSiteClips = function(tag){
    ClipList.flag_show_user = true;
    var url = App.ClipApp.Url.base+"/user/2/query";
    var data = {user: 2, "public": true};
    if(tag) data.tag = [tag];
    getClips({base_url: url, type: "POST", data:data});
  };

  ClipList.showUserClips = function(uid, tag){
    ClipList.flag_show_user = false;
    var url = App.ClipApp.Url.base+"/user/"+uid+"/query";
    var data = {user: uid};
    if(tag) data.tag = [tag];
    getClips({base_url: url, type:"POST", data: data});
  };

  // 这两个Query对结果是没有要求的，按照关键字相关度
  ClipList.showSiteQuery = function(word, tag){
    ClipList.flag_show_user = true;
    var url = "/query";
    url = App.ClipApp.Url.base + url;
    var data = {text: word};
    if(tag) data.tag = [tag];
    getClips({base_url: url, type: "POST", data: data});
  };

  ClipList.showUserQuery = function(uid, word, tag){
    ClipList.flag_show_user = false;
    var url = "/user/"+uid+"/query";
    url = App.ClipApp.Url.base + url;
    var data = {text: word, user: uid};
    if(tag) data.tag = [tag];
    getClips({base_url: url, type:"POST", data:data});
  };

  ClipList.showUserInterest = function(uid, tag){
    ClipList.flag_show_user = true;
    var url = "/user/" + uid + "/interest";
    if(tag) url += "/tag/" + tag;
    url = App.ClipApp.Url.base + url;
    getClips({base_url: url, type: "GET",start:0,end:App.ClipApp.Url.page});
    App.vent.trigger("interest:show", tag);
  };

  ClipList.showUserRecommend = function(uid, tag){
    ClipList.flag_show_user = true;
    var url = "/user/"+uid+"/recomm";
    if(tag) url += "/tag/"+tag;
    url = App.ClipApp.Url.base + url;
    getClips({base_url: url, type:"GET",start:0,end:App.ClipApp.Url.page});
    App.vent.trigger("recommend:show", tag);
  };

  App.vent.bind("app.clipapp.cliplist:showlist",function(collection){
    if(collection){
      clipListView = new ClipListView({collection: collection});
      // console.info(collection) ;
    }else {
      //console.info("此事件未传入collection");
    }
    $("#list").masonry({
      itemSelector : '.clip',
      columnWidth : 360,
      isAnimated: false
    });
    $("#list").css({height:"0px"});
    App.listRegion.show(clipListView);
    if(collection && collection.length==0){
      //$("#list").append("抱歉，没有找到相应的信息...");
    }
  });
  App.vent.bind("app.clipapp.cliplist:comment",function(pid){
    if(pid == 0){
      console.info(id);
      var listmodel=App.listRegion.currentView.collection.get(id);
      var modifyclip=listmodel.get("clip");
      modifyclip.reply_count = modifyclip.reply_count ? modifyclip.reply_count+1 : 1;
      listmodel.set({clip:modifyclip});
      App.vent.trigger("app.clipapp.cliplist:showlist");
      id = null;
    }
  });

  App.vent.bind("app.clipapp.cliplist:removeshow",function(removemodel){
    var collection = clipListView.collection.remove(removemodel);
    App.vent.trigger("app.clipapp.cliplist:showlist",collection);
  });
  App.vent.bind("app.clipapp.cliplist:addshow",function(addmodel){
    var collection = clipListView.collection;
    collection.add(addmodel,{at:0});
    App.vent.trigger("app.clipapp.cliplist:showlist",collection);
  });
  return ClipList;
})(App, Backbone, jQuery);