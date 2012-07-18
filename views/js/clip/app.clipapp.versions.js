App.versions = (function($){
  var versions = {};
    versions.language = {zh:"中文",en:"English"};
    var i18n = {
      // 中文版
      zh : {
	me : {
	  mine      : "我的",
	  recommend : "@我",
	  interest  : "朋友",
	  set       : "&nbsp;&nbsp;设置",
	  logout    : "&nbsp;&nbsp;登出",
	  login     : "登 录",
	  register  : "注 册",
	  ok        : "确 定"
	},

	login : {
	  default_name  : "用户名/Email",
	  title       : "用户登录" ,
	  login_ok    : "登 录",
	  register_ok : "注 册",
	  login_state : "一月内自动登录",
	  register    : "嫌麻烦？直接发邮件到1@clickdang.com也可注册",
	  twitter     : "Twitter登录",
	  weibo       : "微博登录",
	  name : {
	    name:"用户名",
	    is_null    : "用户名尚未填写",
	    not_exist   : "用户名不存在",
	    invalidate  : "用户名格式有误（只能是长度为5-20个字符的英文、数字和点的组合）",
	    exist       :"此用户名已经存在"
	  },
	  pass : {
	    pass:"密码",
	    is_null     : "密码尚未填写",
	    not_match   : "密码输入不一致"
	  }
	},

	userface : {
	  zhui        : "zhui",
	  stop        : "stop",
	  mfollowing  : "我追谁",
	  mfollow     : "谁追我",
	  following   : "ta追谁",
	  follow      : "谁追ta"
	},

	bubb : {
	  follow      : "追",
	  unfollow    : "停",
	  reclip      : "收"
	},

	faceEdit : {
	  no_name     : "您还没有用户名",
	  set_name    : "设置用户名",
	  ok          : "确 定",
	  upload      : "上传本地图像",
	  name : {
	    is_null    : "用户名尚未填写",
	    invalidate  : "用户名格式有误（只能是长度为5-20个字符的英文、数字和点的组合）",
	    exist       :"此用户名已经存在"
	  }
	},

	languageSet:{
	  lang:"界面语言"
	},

	ruleEdit : {
	  open_rule   : "启用邮箱识别",
	  head        : "邮件识别",
	  title       : "标题必须有",
	  cc_text     : "必须抄送给",
	  to_text     : "必须发给",
	  update      : "更新邮件规则",
	  cc : {
	    invalidate  : "抄送人中含有无法辨识的邮件地址"
	  },
	  to : {
	    invalidate  : "收件人中含有无法辨识的邮件地址"
	  }
	},

	passEdit : {
	  title       : "修改密码",
	  update      : "更 改",
	  danger_operate : "高危操作",
	  export      : "导出摘录",
	  delete      : "删除账户",
	  is_null     : "密码尚未填写",
	  not_match   : "两次密码输入不一致",
	  auth_success: "您的密码已更改",
	  newpass : {
	    prompt:"请输入新密码",
	    is_null:"密码尚未填写"
	  },
	  conpass:{
	    prompt:"确认密码",
	    is_null:"请输入确认密码"
	  },
	  confirm:{
	    password_diff: "密码输入不一致"
	  }
	},

	emailEdit : {
	  add         : "增加邮箱关联",
	  title       : "邮箱关联"
	},

	emailAdd : {
	  title       : "添加邮箱",
	  ok          : "确 定",
	  cancel      : "取 消",
	  email : {
	    is_Exist  : "邮件地址已经存在",
	    you_exist : "您已经添加过该邮件地址",
	    other_exist:"您所添加的邮件地址已经在系统中了",
	    invalidate: "邮件地址格式有误",
	    is_null   : "邮件地址尚未填写"
	  }
	},

	weiboEdit : {
	  title       : "微博关联",
	  add         : "增加微博关联"
	},
	twitterEdit : {
	  title       : "twitter关联",
	  add         : "增加twitter关联"
	},

	clipmemo : {
	  title       : "标注",
	  memo        : "备注一下吧~",
	  "private"   : "不公开",
	  ok          : "确 定",
	  cancel      : "取 消"
	},

	editDetail : {
	  upload      : "&nbsp上传图片",
	  link        : "&nbsp链接图片",
	  clear       : "&nbsp整理格式",
	  update      : "修 改",
	  ok          : "确 定",
	  ok_title    : "保 存",
	  cancel      : "取 消",
	  cancel_title: "放 弃"
	},

	delete : {
	  title       : "删除",
	  h3          : "真的要删除吗？",
	  p           : "删除后将无法恢复",
	  ok          : "确 定",
	  cancel      : "取 消"
	},

	reclip : {
	  title       : "收录",
	  defaultNote : "备注一下吧~",
	  "private"   : "不公开",
	  ok          : "确 定",
	  cancel      : "取 消"
	},

	reclipTag : {
	  title       : '您将收藏%d条数据',
	  defaultNote : "备注一下吧~",
	  "private"   : "不公开",
	  ok          : "确 定",
	  cancel      : "取 消"
	},

	recommend :{
	  title       : "转发",
	  defaultText : "说点啥吧～(140字以内)",
	  reclip      : "同时收录",
	  ok          : "确 定",
	  cancel      : "取 消",
	  is_null     : "请添加用户",
	  not_exist   : "您添加的用户不存在",
	  is_null     :"请您先设置推荐备注",
	  recomm_name : {
	    is_null   : "请添加用户名",
	    not_exist : "您添加的用户不存在"
	  },
	  recomm_text : {
	    is_null   :"请您先设置推荐备注",
	    "word_limit" :"限制140字，已经超过%s个字"
	  }
	},

	comment : {
	  title       : "评论",
	  defaultText : "说点什么吧~(140字以内)",
	  reclip      : "同时收录",
	  comm_text   : {
	    is_null : "评论内容为空",
	    "word_limit" :"限制140字，已经超过%s个字"
	  },
	  ok          : "确 定",
	  cancel      : "取 消"
	},

	detail : {
	  route       : "录线图",
	  comment     : "评论",
	  recommend   : "转发",
	  reclip      : "收录",
	  delete      : "删除",
	  update      : "修改",
	  memo        : "标注"
	},

	showcomment : {
	  reply       : "回复",
	  delete      : "删除",
	  text        : "此内容已被删除",
	  pack        : "(收起)",
	  open        : "(展开)"
	},

	addcomm : {
	  defaultText : "说点什么吧~",
	  reclip      : "同时收录",
	  commentOK   : "评论",
	  cancel      : "取消"
	},

	addClip : {
	  title       : "新建摘录",
	  note_message: "添加标注",
	  upload      : "&nbsp上传图片",
	  link        : "&nbsp链接图片",
	  ok          : "确 定",
	  clear       : "&nbsp整理格式",
	  cancel      : "取 消",
	  back        : "返 回",
	  clean       : "清 空"
	},

	clippreview : {
	  reprint     : "收录",
	  reply       : "评论",
	  comment     : "评论",
	  recommend   : "转发",
	  reclip      : "收录",
	  delete      : "删除",
	  update      : "修改",
	  memo        : "标注"
	},

	follower : {
	  mfollower   : "追我的人",
	  mfollowing  : "我追的人",
	  follower    : "追ta的人",
	  following   : "ta追的人",
	  p           : "还没有人追你哟",
	  all         : "所有"
	},

	following : {
	  mfollower   : "追我的人",
	  mfollowing  : "我追的人",
	  follower    : "追ta的人",
	  following   : "ta追的人",
	  p           : "你还没有追任何人哟",
	  all         : "所有"
	},

	bind : {
	 header   : "您已登录 %s 账户，但尚未将此帐号关联给点忆任何帐户。",
	  bind        : "关联已有帐户",
	  register    : "注册新帐户",
	  bind_ok     : "立即关联",
	  register_ok : "立即注册"
	},

	findpass : {
	  title       : "找回密码",
	  email       : "邮箱地址",
	  ok          : "确 定",
	  cancel      : "取 消"
	},

	resetpass : {
	  title       : "设置新密码",
	  new_pass    : "新密码",
	  ok          : "确定",
	  reset       : "重置"
	},

	gotosetup : {
	  register_success : "您的注册已完成。我们建议您添加常用的邮件地址，以便能通过发邮件来进行收藏。",
	  ok          : "确 定"
	},

	tag:{
	  add_tag     : "添加标签",
	  beyond      : "标签过长，最多支持10个汉字、20个英文字母或数字"
	},

	message : {
	  title         : "消息提示",
	  ok            : "确 定",
	  login_success : "您已成功登录",
	  imageUp_error : "您上传的文件不是图片文件",
	  imageUp_fail  : "对不起，上传失败",
	  img_alt       : "不好啦，图片那小子悄悄溜了！",
	  is_null       : "摘录不存在",
	  not_array     : "摘录必须是数组",
	  is_empty      : "摘录不能为空",
	  is_null       : "您还没有添加邮件规则",
	  no_uname      : "在添加邮件之前请先设置用户名",
	  faceUp_success : "您的头像已更新",
	  passwd_success : "您的密码已修改",
	  setRule_success: "您已成功更新邮箱规则",
	  rename_success : "您的用户名已经修改",
	  reclip_null    : "该标签下暂时还没有数据",
	  reclip_tag_success : "恭喜您，收录成功！",
	  reclip_tag_fail: "您已经拥有这些摘录了！",
	  reclip_tag     : "您实际收录了 %s 条摘录，其余摘录已经拥有了",
	  comment        : "评论成功",
	  recomm         : "转发成功",
	  account_hasbind : "您的帐号之前已经关联过，若要重新关联，请先解绑",
	  weibo_sucmsg   :"恭喜您，关联 %s 微博帐号已成功，在新浪微博中@clickdang就可以收录(评论除外)了，现在就去@一条<a href='http://weibo.com' target='_blank'>试试?</a>",
	  twitter_sucmsg :"恭喜您，关联 %s Twitter帐号已成功，您的Twitter收藏(评论除外)可以收录到点忆了，现在就去收藏一条<a href='http://twitter.com' target='_blank'>试试?</a>",
	  InternalOAuthError:"关联认证过程出现了点小问题，再试一次吧",
	  reclip:{
	    success: "收录成功",
	    no_pub: "作者没有公开该条clip,您暂时不能收录"
	  },
	  invite         : "您已通过发往 %s 邮件地址的邀请注册成功。我们建议您立即修改密码并设置自己的用户名。",
	  addemail       : "您已成功添加 %s 邮件地址。请登录您的邮箱，查收邮件，并点击其中的链接进行激活。",
	  cliplist_null:{
	    all:"抱歉，没有找到相关的信息......",
	    my:"抱歉，没有找到相关的信息......",
	    interest:"抱歉，没有找到相关的信息......",
	    recommend:"抱歉，没有找到相关的信息......"
	  },
	  error_message :"操作失败，请重试",
	  clip : {
	    has_this_clip: "您已经有该条摘录了",
	    has_recliped : "您已经收录过该条摘录了",
	    not_exist    : "摘录不存在",
	    deleted      : "此条摘录已经被删除！",
	    no_public    : "作者没有公开此条摘录！"
	  },
	  content:{
	    is_null      : "摘录内容不能为空",
	    not_array    : "摘录必须是数组",
	    is_empty     : "摘录不能为空"
	  },
	  follow:{
	    all          : "您已经追了该用户的全部标签"
	  },
	  error:{
	    "link 已作废": "此链接已过期",
	    "link doesnt exist": "此链接无效",
	    "link invalidate": "此链接格式有误"
	  },
	  accept:{
	    fail         :"因为间隔时间太长，此注册链接已经失效。您可直接注册，再到设置界面添加您的邮箱地址。"
	  },
	  active:{
	    fail         : "因为间隔时间太长，此激活链接已经失效。您可在设置界面重新添加。",
	    email        : "您已激活 %s 邮件地址。\n您现在可以在登录时使用此邮件地址，并接收来自此邮件地址的收藏。"
	  },
	  email:{
	    no_uname     : "在添加邮件之前请先设置用户名"
	  },
	  rule:{
	    not_update   : "您没有更新邮件规则"
	  },
	  recommend:{
	    no_pub      :"该条clip是私有数据,您暂时不能向外部推荐"
	  }
	},

	warning : {
	  title          : "操作确认",
	  ok             : "确 定",
	  cancel         : "取 消",
	  delemail       : "您真的要删除 %s 邮件地址吗？删除后，您将无法使用此邮件地址登录，也无法接收来自此邮件地址的收藏。",
	  deloauth       : "您真的要删除 %s 账号关联吗？删除后，您将无法使用此账号进行登录，也无法接收来自此账号的收藏。",
	  oauth_fail     : "认证失败，请重新认证！",
	  memo_save      : "关闭窗口，您填写的内容将不会被保存。请确认。",
	  clipedit_save  : "关闭窗口，您填写的内容将不会被保存。请确认。",
	  reclip_save    : "关闭窗口，您填写的内容将不会被保存。请确认。",
	  recommend_save : "关闭窗口，您填写的内容将不会被保存。请确认。",
	  comment_save   : "关闭窗口，您填写的内容将不会被保存。请确认。",
	  clipadd_save   : "关闭窗口，您填写的内容将不会被保存。请确认。",
	  emailadd_save   : "关闭窗口，您填写的内容将不会被保存。请确认。",
	  oauth_fail   : "认证失败，请重新认证!",
	  del_comment    : "您真的要删除这条评论吗？（此操作无法恢复）"
	},
	util : {
	  time:{
	    moment:"刚刚",
	    second:"秒前",
	    minute:"分钟前",
	    hour:"小时前",
	    day:"天前",
	    week:"周前",
	    month:"月前",
	    half_year:"半年前",
	    year:"年前"
	  }
	}
      },


// english versions
      en : {
	me : {
	  mine      : "My clips",
	  recommend : "@Me",
	  interest  : "Friends",
	  set       : "Settings",
	  logout    : "Logout",
	  login     : "Login",
	  register  : "Join",
	  ok        : "OK"
	},

	login : {
	  default_name  : "User name/Email",
	  title         : "User log in" ,
	  login_ok      : "Login",
	  register_ok   : "Join",
	  login_state   : "Login automatically in one month",
	  register      : "Join us by simply sending an email to 1@clickdang.com",
	  twitter       : "Login with Twitter",
	  weibo         : "Login with Weibo",
	  name : {
	    name        : "user name",
	    is_null     : "User name is not filled",
	    not_exist   : "This user name does not exist",
	    invalidate  : "Invalid format of user name(Username may only contain alphanumerics, period, and be between 5 and 20 characters in length)",
	    exist       : "User name already exists"
	  },
	  pass : {
	    pass        : "password",
	    is_null     : "Password is not filled in",
	    not_match   : "Password input not consistent"
	  }
	},

	userface : {
	  zhui        : "ezhui",
	  stop        : "estop",
	  mfollowing  : "Following",
	  mfollow     : "Followed by",
	  following   : "Following",
	  follow      : "Followed by"
	},

	bubb : {
	  follow      : "follow",
	  unfollow    : "unfollow",
	  reclip      : "reclip"
	},

	faceEdit : {
	  no_name     : "no user name",
	  set_name    : "Set user name",
	  ok          : "OK",
	  upload      : "Upload image",
	  name : {
	    is_null   : "User name is not filled in",
	    invalidate: "Invalid format of user name(Username may only contain alphanumerics, period, and be between 5 and 20 characters in length)",
	    exist     :"User name already exists"
	  }
	},

	languageSet:{
	  lang:"Language Setting"
	},

	ruleEdit : {
	  open_rule   : "Enable",
	  head        : "Email Recognition",
	  title       : "Title includes",
	  cc_text     : "Is Cc‘d to",
	  to_text     : "Is sent to",
	  update      : "Update",
	  cc : {
	    invalidate: "Invalid email address"
	  },
	  to : {
	    invalidate: "Invalid email address"
	  }
	},

	passEdit : {
	  title       : "Change password",
	  update      : "Change",
	  danger_operate : "High-risk operation",
	  export      : "Export clips",
	  delete      : "Close your account",
	  is_null     : "Password is not filled in",
	  not_match   : "Password input not consistent",
	  auth_success: "Your password has been changed",
	  newpass : {
	    prompt:"Please input new password",
	    is_null   :"Password is not filled in"
	  },
	  conpass:{
	    prompt:"Confirm password",
	    is_null   :"Enter the same password"
	  },
	  confirm:{
	    password_diff: "Password input not consistent"
	  }
	},

	emailEdit : {
	  add         : "Add connection",
	  title       : "Connect with mailbox"
	},

	emailAdd : {
	  title       : "Add connection",
	  ok          : "OK",
	  cancel      : "Cancel",
	  email : {
	    is_Exist  : "Email address already exists",
	    you_exist : "You have already add that email address",
	    other_exist:"The email address you added has already been connected with other account in the system",
	    invalidate: "Invalid format of email address",
	    is_null   : "Email address has not fill in"
	  }
	},

	weiboEdit : {
	  title       : "Connect with weibo",
	  add         : "Add connection"
	},
	twitterEdit : {
	  title       : "Connect with twitter",
	  add         : "Add connection"
	},

	clipmemo : {
	  title       : "Tag it",
	  memo        : "Make a note",
	  "private"   : "Private",
	  ok          : "OK",
	  cancel      : "Cancel"
	},

	editDetail : {
	  upload      : "&nbspUpload image",
	  link        : "&nbspWeb image",
	  clear       : "Tidy format",
	  update      : "Edit",
	  ok          : "OK",
	  ok_title    : "Save",
	  cancel      : "Cancel",
	  cancel_title: "Quit"
	},

	delete : {
	  title       : "Delete",
	  h3          : "You really mean to delete?",
	  p           : "Can't restore any more after deleting",
	  ok          : "OK",
	  cancel      : "Cancel"
	},

	reclip : {
	  title       : "Reclip",
	  defaultNote : "Make a note",
	  "private"   : "Private",
	  ok          : "OK",
	  cancel      : "Cancel"
	},

	reclipTag : {
	  title       : 'You will reclip %d clips',
	  defaultNote : "Make a note",
	  "private"   : "Private",
	  ok          : "OK",
	  cancel      : "Cancel"
	},

	recommend :{
	  title       : "@",
	  defaultText : "Say something(Limited to 140 characters)",
	  reclip      : "Reclip too",
	  ok          : "OK",
	  cancel      : "Cancel",
	  is_null     : "Please add the receiver",
	  not_exist   : "The receiver doesn't exist",
	  is_null     :"Please add comments first",
	  recomm_name : {
	    is_null   : "Please add the receiver",
	    not_exist : "The receiver doesn't exist"
	  },
	  recomm_text : {
	    is_null   :"Please add comments first",
	    "word_limit" :"Limited to 140 characters, %s characters over now"
	  }
	},

	comment : {
	  title       : "Comment",
	  defaultText : "Say something(Limited to 140 characters)",
	  comm_text   : {
	    is_null : "comment's content is null",
	    "word_limit" :"Limited to 140 characters, %s characters over now",
	    defaultText : "Say something"
	  },
	  reclip      : "Reclip too",
	  ok          : "OK",
	  cancel      : "Cancel"
	},

	detail : {
	  route       : "Map",
	  comment     : "Comment",
	  recommend   : "@",
	  reclip      : "Reclip",
	  delete      : "Delete",
	  update      : "Edit",
	  memo        : "Tag"
	},

	showcomment : {
	  reply       : "Reply",
	  delete      : "Delete",
	  text        : "The comment has been removed",
	  pack        : "(Collapse)",
	  open        : "(Expand)"
	},

	addcomm : {
	  defaultText : "Say something",
	  reclip      : "Reclip too",
	  commentOK   : "Comment",
	  cancel      : "Cancel"
	},

	addClip : {
	  note_message:"add notes",
	  title       : "new clip",
	  upload      : "&nbspUpload image",
	  link        : "&nbspWeb image",
	  ok          : "OK",
	  clear       : "Tidy format",
	  cancel      : "Cancel",
	  back        : "Back",
	  clean       : "Clear"
	},

	clippreview : {
	  reprint     : "reclips",
	  reply       : "comments",
	  comment     : "Comment",
	  recommend   : "@",
	  reclip      : "Reclip",
	  delete      : "Delete",
	  update      : "Edit",
	  memo        : "Tag"
	},

	follower : {
	  mfollower   : "Followed by",
	  mfollowing  : "Following",
	  follower    : "Followed by",
	  following   : "Following",
	  p           : "Nobody is following you",
	  all         : "All"
	},

	following : {
	  mfollower   : "Followed by",
	  mfollowing  : "Following",
	  follower    : "Followed by",
	  following   : "Following",
	  p           : "You are not following anyone",
	  all         : "All"
	},

	bind : {
	  header      : "You have logged in with %s account,while not connecting it with any Clickdang account",
	  bind        : "Connect with current account",
	  register    : "Create a new account",
	  bind_ok     : "Connect now",
	  register_ok : "Join now"
	},

	findpass : {
	  title       : "Retrieve password",
	  email       : "Email address",
	  ok          : "OK",
	  cancel      : "Cancel"
	},

	resetpass : {
	  title       : "Set new password",
	  new_pass    : "New password",
	  ok          : "OK",
	  reset       : "Reset"
	},

	gotosetup : {
	  register_success : "Congratulation! You just finished registration. We suggest you add the most used email address to clip conveniently by sending email",
	  ok          : "OK"
	},

	tag:{
	  add_tag     : "Add a tag",
	  beyond      : "Tag is too long, maximum 10 Chinese characters, 20 letters or numbers"
	},

	message : {
	  title         : "Notice",
	  ok            : "OK",
	  login_success : "Log in successfully",
	  imageUp_error : "The file you upload is not an image",
	  imageUp_fail  : "Sorry, image failed to upload",
	  img_alt       : "Picture fail to load",
	  is_null       : "Clip not exist",
	  not_array     : "Clip must be array",
	  is_empty      : "Clip can't be empty",
	  is_null       : "You haven't set the rule of email connection",
	  no_uname      : "Please set user name before add email connection",
	  faceUp_success : "Your portrait has been updated",
	  passwd_success : "Your password has been changed",
	  setRule_success: "Your rule of email connection has been updated",
	  rename_success : "Your User name has been changed",
	  reclip_null    : "No clip under thist tag",
	  reclip_tag_success : "Congratulation for successful reclip",
	  reclip_tag_fail: "You have reclipped these already",
	  reclip_tag     : "You reclip %s clips，not including the clips you already have",
	  reclip:{
	    success:"Recliped successfully",
	    no_pub: "This Clip is private,you can't reclip it"
	  },
	  recomm         : "Clip was forwarded(@) successfully",
	  comment        : "Commented successfully",
	  account_hasbind:"This account has been used for connection before,you can't use same account connect Clickdang twice",
	  weibo_sucmsg:"Connect Sina Weibo account %s successfully,now you can reclip clips from Sina Weibo(except comments),just @clickdang,<a href='http://weibo.com' target='_blank'>have a try</a>",
	  twitter_sucmsg:"Connect Twitter account %s successfully,now you can reclip clips from Twitter Favorite(except comments),<a href='http://twitter.com' target='_blank'>have a try</a>",
	  InternalOAuthError:"Sorry, some problems occurred during the connection,Please try again",
	  invite         : "Successful registration by sending email %s. We strongly suggest you change password immediately and set your own username",
	  addemail       : "You have added %s email connection.Please login you mailbox check the email and click the activating link",
	  cliplist_null:{
	    all:"Sorry, no results found",
	    my:"Sorry, no results found",
	    interest:"Sorry, no results found",
	    recommend:"Sorry, no results found"
	  },
	  "error_message" :"Operation fail,please try again!",
	  clip : {
	    has_this_clip: "You have this clip already",
	    has_recliped : "You have reclipped this already",
	    not_exist    : "This Clip doesn't  exist",
	    deleted      : "This Clip has been deleted",
	    no_public    : "This Clip is private"
	  },
	  content:{
	    is_null      : "Content can't be null",
	    not_array    : "Content must be array",
	    is_empty     : "Content can't be empty"
	  },
	  follow:{
	    all          : "You have already followed all tags of this user"
	  },
	  error:{
	    "link 已作废": "Overdue link",
	    "link doesnt exist": "Invalid link",
	    "link invalidate": "Invalid format link"
	  },
	  accept:{
	    fail         :"Registration link was overdue for too long interval. You can Join directly and add email address connection in Setting"
	  },
	  active:{
	    fail         : "Registration link was overdue for too long interval. You can add again in Setting",
	    email   : "You have activated the email address of %s in our system. \nNow you can login with this email account and clip by sending email from this account"
	  },
	  email:{
	    no_uname     : "Set your user name before adding mail address connection"
	  },
	  rule:{
	    not_update   : "You haven’t update the rule of email connection"
	  },
	  recommend:{
	    no_pub      :"This Clip is private,You can't recommend to others"
	  }
	},

	warning : {
	  title          : "Confirm",
	  ok             : "OK",
	  cancel         : "Cancel",
	  delemail       : "You really mean to delete the connection with email address %s? After deleting, you can’t use this email address to log in or send email from this address to clip",
	  deloauth       : "Are you sure you want to disconnect with account %s? After disconnecting, you won't be able to use this account to login clickdang,or clip messages from this account",
	  oauth_fail   : "Authenticate fail,please try again",
	  del_comment    : "You really mean to delete this comment? It can’t restore any more",
	  memo_save     :"If you close the window, what you filled will be lost. Are you sure?",
	  clipedit_save :"If you close the window, what you filled will be lost. Are you sure?",
	  reclip_save   :"If you close the window, what you filled will be lost. Are you sure?",
	  recommend_save:"If you close the window, what you filled will be lost. Are you sure?",
	  comment_save  :"If you close the window, what you filled will be lost. Are you sure?",
	  clipadd_save  :"If you close the window, what you filled will be lost. Are you sure?",
	  emailadd_save :"If you close the window, what you filled will be lost. Are you sure?",
	  del_comment   : "You really mean to delete this comment? It can’t restore any more"
	},
	util : {
	  time:{
	    moment:"a moment ago",
	    second:" second ago ",
	    minute:" minute ago",
	    hour:" hour ago",
	    day:" day ago",
	    week:" week ago",
	    month:" month ago",
	    half_year:" six month ago",
	    year:" year ago"
	  }
	}
      }
    };

    window._i18n = function(){
      var lang = versions.getLanguage();
      var args = Array.prototype.slice.call(arguments);
      var name = args.shift();
      var names = name.split('.');
      var str = i18n[lang]?i18n[lang]:i18n['zh'];
      for(var i =0;i<names.length;i++){
	if(str[names[i]]) {
	  str = str[names[i]];
	}else{
	  console.info(name+"  未定义!!!");
	  str = names.pop();
	}
      }
      var params = args;
      if (params.length > 0){
	str = $.sprintf(str, params);
      }
      return str;
    };

    versions.getLanguage = function() {
      var cookie_lang = App.util.getCookie("language");
      if(cookie_lang){
	return cookie_lang;
      } else if(window.navigator.language){
	return window.navigator.language.split("-")[0];
      } else{
	return "zh";
      }
    };

    function setLanguage(lang){
      setCookieLang(lang);
      window.location.reload();
    }

    function setCookieLang(lang){
      var data = new Date();
      data.setTime(data.getTime() + 30*24*60*60*1000);
      document.cookie = "language="+lang+";expires=" + data.toGMTString();
    }

    App.vent.bind("app.clipapp.versions:change",function(lang){
      if(versions.getLanguage() != lang){
	setLanguage(lang);
      }
    });

  return versions;
})(jQuery);