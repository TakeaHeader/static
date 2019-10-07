(function(target,datas,funcs){
	var data = new datas();
	var func = new funcs();
	var vue  = new Vue({
		el:target,
		data:data,
		methods:func,
		created:function(){
			debugger;
			var timer = setInterval(function(){

			},2000);
		}
	});

})("#content",function(){
	this.url  = "hello world";
},
function(){


	this.search = function (){
		alert("你好");
	}
});