﻿SortMetaWidget = function(_container,options){	this.container = _container;	this.options = options;	this.widgetType = "SortMetaWidget";	var _view = Backbone.View.extend({		el:$(_container),		initialize:function(){			this.el.children(".sort-content").empty();				this.render();		},		render:function(){			//var allBtn = $("<div class='sort-group'><div class='radioButtonContainer radioButton sortItem'><a href='#/clip/all'>全部</a></div></div>");			//this.el.append(allBtn);			this.reasonRender();		},		renderSort:function(collection,_title){			if(!collection || !_title)				return;			var Template = _.template(				$("#sort_template").html(),				{title:_title,				 url:collection.pluck("url"),				 content:collection.pluck("content")				});			this.el.children(".sort-content").append(Template);					},		reasonRender:function(){			var view = this;			this.reasonList = new MetaList();			this.reasonList.type = "reason";			this.reasonList.url = client.URL.HOST_URL + client.SYMBOL.SLASH + client.URL.BASE_URL + client.GLOBAL_CACHE["userInfo"].name + "/clip/reason";			this.reasonList.fetch({				success:function(collection,resp){					if(resp[0] == 0){						view.renderSort(collection,"原因");						view.purposeRender();					}else{						//server response exception					}				},				error:function(collection,resp){					//client request error				}			});		},		purposeRender:function(){			var view = this;			this.purposeList = new MetaList();			this.purposeList.type = "purpose";			this.purposeList.url = client.URL.HOST_URL + client.SYMBOL.SLASH + client.URL.BASE_URL + client.GLOBAL_CACHE["userInfo"].name + "/clip/purpose";			this.purposeList.fetch({				success:function(collection,resp){					if(resp[0] == 0){						view.renderSort(collection,"目的");						view.deviceRender();					}else{						//server response exception					}				},				error:function(collection,resp){					//client request error				}			});		},		deviceRender:function(){			var view = this;			this.deviceList = new MetaList();			this.deviceList.type = "device";			this.deviceList.url = client.URL.HOST_URL + client.SYMBOL.SLASH + client.URL.BASE_URL + client.GLOBAL_CACHE["userInfo"].name + "/clip/device";			this.deviceList.fetch({				success:function(collection,resp){					if(resp[0] == 0){						view.renderSort(collection,"设备");						view.cityRender();					}else{						//server response exception					}				},				error:function(collection,resp){					//client request error				}			});		},		cityRender:function(){			var view = this;			this.cityList = new MetaList();			this.cityList.type = "city";			this.cityList.url = client.URL.HOST_URL + client.SYMBOL.SLASH + client.URL.BASE_URL + client.GLOBAL_CACHE["userInfo"].name + "/clip/city";			this.cityList.fetch({				success:function(collection,resp){					if(resp[0] == 0){						view.renderSort(collection,"城市");					}else{						//server response exception					}				},				error:function(collection,resp){					//client request error				}			});		},		events:{			"mousewheel" : "scrollWidget"		},				scrollWidget:function(evt,delta){					this.el[0].scrollTop  = this.el[0].scrollTop+30*(-delta);			evt.stopPropagation();			evt.preventDefault();		}	})	this.view = new _view();}SortMetaWidget.prototype.initialize = function(){	this.view.initialize();}SortMetaWidget.prototype.terminalize = function(){	this.view.el.children(".sort-content").empty();	this.parentApp.removeChild(this);	this.parentApp.sortMetaWidget = null;}SortMetaWidget.prototype.render = function(){	this.view.render();}