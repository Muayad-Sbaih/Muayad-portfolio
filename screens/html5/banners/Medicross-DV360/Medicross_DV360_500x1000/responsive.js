//v2
function responsiveAd() {
	var wrapperFix = 3;
	var z = Math.min(window.innerWidth/lib.properties.width, window.innerHeight/lib.properties.height);
	if(window.fullheight) z = window.innerHeight/lib.properties.height;
	var responsive = document.getElementById("responsivewrapper");
	var canvas = document.getElementsByTagName("canvas")[0];

	window.scale = z;
	responsive.style.transform = 'scale(' + z + ')';
	responsive.style.msTransform = 'scale(' + z + ')';
	responsive.style.oTransform = 'scale(' + z + ')';
	responsive.style.webkitTransform = 'scale(' + z + ')';
	responsive.style.mozTransform = 'scale(' + z + ')';
	responsive.style.width = lib.properties.width+'px';
	responsive.style.height = lib.properties.height+'px';
	responsive.style.position = "relative";
	responsive.style.overflow = "visible";
	
	if(window.xl==true) {
		canvas.width = window.innerWidth/z;
		if(typeof stage!="undefined" && window.pushleft!=true) exportRoot.x = ((window.innerWidth/z)/2 - (lib.properties.width/2));
		responsive.style.webkitTransformOrigin = (window.pushleft==true?'0 0':'50% 0');
		responsive.style.mozTransformOrigin = (window.pushleft==true?'0 0':'50% 0');
		responsive.style.oTransformOrigin = (window.pushleft==true?'0 0':'50% 0');
		responsive.style.msTransformOrigin = (window.pushleft==true?'0 0':'50% 0');
		responsive.style.transformOrigin = (window.pushleft==true?'0 0':'50% 0');
		responsive.style.left = (window.pushleft==true?'0':'50%');
		if(window.pushleft!=true) {
			responsive.style.marginLeft = (0-lib.properties.width/2)+'px';
			canvas.style.marginLeft = ((lib.properties.width/2 - canvas.width/2)-wrapperFix)+'px';
		}
	} else {
		responsive.style.webkitTransformOrigin = '0 0';
		responsive.style.mozTransformOrigin = '0 0';
		responsive.style.oTransformOrigin = '0 0';
		responsive.style.msTransformOrigin = '0 0';
		responsive.style.transformOrigin = '0 0';
		
		if(window.pushleft != true) responsive.style.left = ((window.innerWidth)/2-(canvas.width*z)/2)+'px';
	}
	updateVisibleElements();
	updateResizeElements();
	if(typeof stage!="undefined") stage.update();
	else {
		clearTimeout(window.responsiveTimeout);
		window.responsiveTimeout = setTimeout(responsiveAd, 10);
	}
}
function updateVisibleElements() {
	if(typeof window.keepVisibleElements == "undefined" || window.keepVisibleElements.length == 0) return;
	for(var e=0; e<window.keepVisibleElements.length; e++) {
		var element = window.keepVisibleElements[e];
		if(typeof element.oX == "undefined") element.oX = element.x;
		if(typeof element.oY == "undefined") element.oY = element.y;
		if(typeof element.oRegX=="undefined") element.oRegX = element.regX;
		if(typeof element.oRegY=="undefined") element.oRegY = element.regY;
		if(window.pushleft != true) {
			var pos = (element.oX > lib.properties.width/2?'right':'left');
			if(pos=='left' && (canvas.width/2 < lib.properties.width/2 - (element.oX-element.oRegX))) {
				element.x = lib.properties.width/2 - canvas.width/2  + element.oRegX;
			} else if(pos=='right' && (canvas.width/2 < (element.oX-element.oRegX) - lib.properties.width/2)) {
				element.x = lib.properties.width/2 + canvas.width/2 + element.oRegX;
			} else element.x = element.oX;
			if(window.scale==1) {
				if(window.innerHeight < (element.oY-element.oRegY)) {
					element.y = window.innerHeight + element.oRegY;
				} else element.y = element.oY;
			}
		} else { // pushLeft = true
			var pos = 'right';
			if(canvas.width < (element.oX-element.oRegX)) {
				element.x = canvas.width + element.oRegX;
			} else element.x = element.oX;
			if(window.scale==1) {
				if(window.innerHeight < (element.oY-element.oRegY)) {
					element.y = window.innerHeight + element.oRegY;
				} else element.y = element.oY;
			}
		}
	}
	if(typeof stage!="undefined") stage.update();
}
function keepVisible(elements) {
	if(typeof window.keepVisibleElements == "undefined") window.keepVisibleElements = [];
	if(typeof elements == "undefined") return console.log("keepVisible failed with", elements);
	if(typeof elements.length != "undefined") window.keepVisibleElements = window.keepVisibleElements.concat(elements);
	else {
		if(typeof elements != "undefined") window.keepVisibleElements.push(elements);
	}
	updateVisibleElements();
}
function initResponsive() {
	if(typeof lib==='undefined') {
		for(var id in AdobeAn.compositions) comp = AdobeAn.compositions[id];
		window.lib = comp.getLibrary();
	}
	var scripts = document.getElementsByTagName('script');
	for(var s=0; s<scripts.length; s++) {
		var attr = scripts[s].getAttribute('xl');
		if(attr=="true"||attr=="1") { window.xl=true; break; }
		attr = scripts[s].getAttribute('xxl');
		if(attr=="true"||attr=="1") { window.xl=true; break; }
	}
	for(var s=0; s<scripts.length; s++) {
		var attr = scripts[s].getAttribute('pushleft');
		if(attr=="true"||attr=="1") { window.pushleft=true; break; }
	}
	for(var s=0; s<scripts.length; s++) {
		var attr = scripts[s].getAttribute('fullheight');
		if(attr=="true"||attr=="1") { window.fullheight=true; break; }
	}
	if(document.getElementById("responsivewrapper") == null)
		document.body.innerHTML = '<div id="responsivewrapper">'+document.body.innerHTML+'</div>';
	document.body.style.height="100%";
	document.body.style.margin="0 0 0 0";
	document.body.style.overflow="hidden";
	document.body.style.background="transparent";
	document.getElementById("responsivewrapper").style.display="block";
	
	if(typeof dhtml != "undefined" && dhtml.external && dhtml.external.resize) 
		dhtml.external.resize ('100%', '100%'); 
		
	window.addEventListener('resize', throttle.bind(this, responsiveAd, 150), false);
	
	responsiveAd();
}
function throttle(fn, throttleTimeout) {
	clearTimeout(window.doResize);
	window.doResize = setTimeout(fn, throttleTimeout);
}
function resizeElement(element, maxWidth) {
	if(typeof window.resizedElements == "undefined") window.resizedElements = [];
	if(typeof element != "undefined") window.resizedElements.push({ element: element, maxWidth: maxWidth });
}

function updateResizeElements() {
	if(typeof window.resizedElements == "undefined" || window.resizedElements.length == 0) return;
	for(var e=0; e<window.resizedElements.length; e++) {
		var data = window.resizedElements[e];
		
		if(canvas.width < data.maxWidth) {
			var p = (canvas.width*100)/data.maxWidth;
			p = p/100;
			data.element.scaleX = data.element.scaleY = p;
		} else {
			data.element.scaleX = data.element.scaleY = 1;
		}
		
	}
}
initResponsive();