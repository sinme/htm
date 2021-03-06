﻿/**
 * RequestUtil
 * This Class implements the util ajax request method
 */
RequestUtil = {};
RequestUtil.putFunc = function(options){
  var params ={
    url:options.url,
    type:"PUT",
    contentType:" application/json",
    data:JSON.stringify(options.data),
    success:function(response){
      options.successCallBack(response);
    },
    error:function(response){
      options.errorCallBack(response);
    }
  }
  $.ajax(params);
};

RequestUtil.postFunc = function(options){
  var params ={
    url:options.url,
    type:"POST",
    contentType:" application/json",
    data:JSON.stringify(options.data),
    success:function(response){
      options.successCallBack(response);
    },
    error:function(response){
      options.errorCallBack(response);
    }
  }
  $.ajax(params);
};
RequestUtil.deleteFunc = function(options){
  var params ={
    url:options.url,
    type:"DELETE",
    //contentType:" application/json",
    data:JSON.stringify(options.data),
    success:function(response){
      options.successCallBack(response);
    },
    error:function(response){
      options.errorCallBack(response);
    }
  }
  $.ajax(params);
};

RequestUtil.getFunc = function(options){
  var params ={
    url:options.url,
    type:"GET",
    data:options.data,
    success:function(response){
      options.successCallBack(response);
    },
    error:function(response){
      options.errorCallBack(response);
    }
  }
  $.ajax(params);
};

RequestUtil.putFunc = function(options){
  var params ={
    url:options.url,
    type:"PUT",
    contentType:" application/json",
    data:JSON.stringify(options.data),
    success:function(response){
      options.successCallBack(response);
    },
    error:function(response){
      options.errorCallBack(response);
    }
  }
  $.ajax(params);
};