(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{MqJH:function(t,e,i){"use strict";i.d(e,"a",function(){return o});var n=i("CcnG"),o=function(){function t(){this.default="Agenda SMN",this.title=this.default}return t.prototype.setTitle=function(t){this.title=this.default+" - "+t,document.querySelector("title").innerText=this.title},t.ngInjectableDef=n.Qb({factory:function(){return new t},token:t,providedIn:"root"}),t}()},Tmpn:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var n=i("ZYjt"),o=i("/djd"),r=function(){function t(t,e){this.titleService=new n.h(document),this.toolbarService=new o.j,this.title=t,this.breakpoint=e}return t.prototype.ngAfterViewInit=function(){this.title&&this.setTitle(this.title),this.breakpoint&&this.toolbarService.activateExtendedToolbar(this.breakpoint)},t.prototype.ngOnDestroy=function(){this.toolbarService.deactivateExtendedToolbar()},t.prototype.setTitle=function(t){this.titleService.setTitle("Agenda | "+t),this.toolbarService.set(t)},t}()}}]);