// app.clipapp.login.js

App.ClipApp.Login = (function(App, Backbone, $){

  var Login = {};
  var fun = "";  // 用于记录用户登录前应该触发的事件
  App.Model.LoginModel = App.Model.extend({
    validate: function(attrs){
      var err = {};
      if(!attrs.name ||attrs.name == "" || attrs.name == _i18n('login.default_name')){
	err.name = "is_null";
      }else if(attrs.name.indexOf('@')<=0 && !App.util.name_pattern.test(attrs.name)){
	  err.name = "invalidate";
      }
      if(attrs.pass == ""){
	err.pass = "is_null";
      }
      return _.isEmpty(err) ? null : err;
    }
  });

  var LoginView = App.DialogView.extend({
    tagName : "div",
    className : "login-view",
    template : "#login-view-template",
    events : {
      "blur #name"               : "blurName",
      "blur #pass"               : "blurPass",
      "focus #name"              : "clearAction",
      "focus #pass"              : "cleanError",
      "keydown #pass"            : "keydownAction",
      "click .login_btn"         : "loginAction",
      "click .l_register"        : "gotoRegister",
      "click .masker"            : "masker",
      "click .close_w"           : "cancel",
      "click .weibo"             : "openWeibo",
      "click .twitter"           : "openTwitter",
      "click .dropbox"           : "openDropbox"
    },
    initialize:function(){
      this.tmpmodel = new App.Model.LoginModel();
      this.bind("@cancel", cancel);
    },
    blurName: function(e){
      var that = this;
      this.tmpmodel.set({name:$("#name").val()}, {
	error:function(model, error){
	  if($("#name").val() == "")
	    $("#name").val(_i18n('login.default_name'));
	  that.showError('login',error);
	}
      });
    },
    blurPass: function(e){
      var that = this;
      this.tmpmodel.set({pass:$("#pass").val()},{
	error:function(model, error){
	  that.showError("login",error);
	}
      });
    },
    clearAction: function(e){
      if(this.$("#name").val() == _i18n('login.default_name')){
	this.$("#name").val("");
      }
      this.cleanError(e);
    },
    gotoRegister:function(e){
      e.preventDefault();
      this.trigger("@cancel");
      App.ClipApp.showRegister();
    },
    loginAction : function(e){
      var that = this;
      e.preventDefault();
      var data = that.getInput();
      var remember = false;
      if($("#remember").attr("checked")){
	remember = true;
      }
      this.tmpmodel.save(data, {
  	url: App.ClipApp.encodeURI(App.ClipApp.Url.base+"/login"),
	type: "POST",
  	success: function(model, res){
	  App.vent.trigger("app.clipapp.login:gotToken", res, remember);
  	},
  	error:function(model, res){
	  that.showError('login',res);
  	}
      });
    },
    keydownAction : function(e){
      $('#pass').unbind("keydown");
      if(e.keyCode==13){
	$("#pass").blur();
	$('.login_btn').click();
      }
    },
    masker: function(e){
      if($(e.target).attr("class") == "masker"){
	this.cancel(e);
      }
    },
    cancel : function(e){
      e.preventDefault();
      App.vent.trigger("app.clipapp.clipper:cancel");
      this.trigger("@cancel");
    },
    openWeibo : function(e){
      // 若图标为灰色则不响应事件 twitter dropbox 同理
      if(App.util.iconType())return;
      var remember = false;
      if($("#remember").attr("checked")){
	remember = true;
      }
      this.trigger("@cancel");
      window.location.href="/oauth/req/weibo";
    },
    openTwitter : function(e){
      if(App.util.iconType())return;
      var remember = false;
      if($("#remember").attr("checked")){
	remember = true;
      }
      this.trigger("@cancel");
      window.location.href="/oauth/req/twitter";
    },
    openDropbox : function(e){
      if(App.util.iconType())return;
      var remember = false;
      if($("#remember").attr("checked")){
	remember = true;
      }
      this.trigger("@cancel");
      window.location.href="/oauth/req/dropbox";
    }
  });

  Login.show = function(callback){
    fun = callback;
    var loginModel = new App.Model.LoginModel();
    var loginView = new LoginView({model : loginModel});
    App.popRegion.show(loginView);
    if(/language=en/.test(document.cookie)){
      $("#note_img").removeClass("note_img_zh");
      $("#note_img").addClass("note_img_en");
    }else{
      $("#note_img").removeClass("note_img_en");
      $("#note_img").addClass("note_img_zh");
    }
    // $("#name").focus();
    // fun();
  };

  Login.close = function(){
    App.popRegion.close();
  };

  var cancel = function(){
    Login.close();
  };

  // 用户登录成功 页面跳转
  App.vent.bind("app.clipapp.login:gotToken", function(res, remember){
    Login.close();
    if(remember){
      var data = new Date();
      data.setTime(data.getTime() +12*30*24*60*60*1000);
      document.cookie = "token="+res.token+";expires=" + data.toGMTString();
    }else{
      document.cookie = "token="+res.token;
    }
    App.vent.trigger("app.clipapp.login:success");
    if(typeof fun == "function"){
      fun();
    }else{
      Backbone.history.navigate("my", true);
    }
  });

 // TEST
 App.bind("initialize:after", function(){
   //console.info(document.cookie);
 });

 return Login;
})(App, Backbone, jQuery);