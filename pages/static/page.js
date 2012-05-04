// add flash
function fmObjectActivateWrite(d,i,b,f,a,g,e,c){if(i.indexOf(".swf")==-1){return"";}var h=fmObjectGetParams(d,i,b,f,a,g,e,c);return fmObjectGenerate(h.attrs,h.params);}function fmObjectGetParams(d,i,b,f,a,g,e,c){var h=new Object();h.attrs=new Object();h.params=new Object();h.attrs.id=d;h.attrs.width=b;h.attrs.height=f;h.attrs.type="application/x-shockwave-flash";h.attrs.data=i;if(c!=""){h.attrs.BASE=c;}h.params.movie=i;if(c!=""){h.params.BASE=c;}h.params.play=a;h.params.bgcolor=e;h.params.quality=g;h.params.menu="false";h.params.allowScriptAccess="always";h.params.wmode="transparent";return h;}function fmObjectGenerate(a,b){var c="<object ";for(var d in a){c+=d+'="'+a[d]+'" ';}c+=">";for(var d in b){c+='<param name="'+d+'" value="'+b[d]+'" />';}c+="<param name='wmode' value='opaque' /></object>";return c;}function ControlVersion(){var a;var c;var b;try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.9");a=c.GetVariable("$version");}catch(b){}if(!a){try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.8");a=c.GetVariable("$version");}catch(b){}}if(!a){try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");a=c.GetVariable("$version");}catch(b){}}if(!a){try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");a="WIN 6,0,21,0";c.AllowScriptAccess="always";a=c.GetVariable("$version");}catch(b){}}if(!a){try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");a=c.GetVariable("$version");}catch(b){}}if(!a){try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");a="WIN 3,0,18,0";}catch(b){}}if(!a){try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");a="WIN 2,0,0,11";}catch(b){a=-1;}}return a;}function GetSwfVer(){var c=-1;if(navigator.plugins!=null&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var d=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";var a=navigator.plugins["Shockwave Flash"+d].description;var e=a.split(" ");var g=e[2].split(".");var b=g[0];var h=g[1];if(e[3]!=""){tempArrayMinor=e[3].split("r");}else{tempArrayMinor=e[4].split("r");}var f=tempArrayMinor[1]>0?tempArrayMinor[1]:0;var c=b+"."+h+"."+f;}}else{if(navigator.userAgent.toLowerCase().indexOf("webtv/2.6")!=-1){c=4;}else{if(navigator.userAgent.toLowerCase().indexOf("webtv/2.5")!=-1){c=3;}else{if(navigator.userAgent.toLowerCase().indexOf("webtv")!=-1){c=2;}else{c=ControlVersion();}}}}return c;}

$(function(){
	
	// vote
	$('.vote').length && $('.vote').mouseover(function(){
		$('.vote-link').show(300);
	});
	
	var formSelect = $('.form-select');
	if(formSelect.length) {
	
		var menu = $('.form-select-menu', formSelect),
			form = formSelect.parents('form');
	
		formSelect.hover(function(){
			$(this).addClass('form-select-open');
		}, function(){
			$(this).removeClass('form-select-open');
		});
		
		$('li', formSelect).hover(function(){
			$(this).addClass('hover');
		}, function(){
			$(this).removeClass('hover');
		});
		
		menu.delegate('li', 'click', function(){
			var li = $(this),
				action = li.attr('data-action') || '/root/',
				text = li.text(),
				placeholder = $('.form-select-selected', formSelect);
			
			placeholder.text(text);
			formSelect.removeClass('form-select-open');
			form.attr('action', action);
		});
	}
	
	$(window).on('load', function(){
		var headline = $('headline');
		if(!headline.length) return;
		if (GetSwfVer() != -1) {	
			headline.innerHTML = fmObjectActivateWrite("Slider", "http://static.baixing.net/media/swf/hpadgalleryPhase3_5__38179__.swf?appServerPath=http%3A%2F%2Fshanghai.baixing.com&postAdMessage=&defaultImage=&version=20101201","100%", "97", "true", "high", "#FFFFCC", ".");	
		} else {	
			headline.style.display = 'none';	
		}
	})

})