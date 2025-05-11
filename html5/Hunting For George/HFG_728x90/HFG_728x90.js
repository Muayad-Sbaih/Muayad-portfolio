(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,90);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhgCrIAAlVIDBAAIAABMIhoAAIAAA4IBjAAIAABLIhjAAIAAA6IBoAAIAABMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-17,19.4,34.2);


(lib.Symbol110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhgCrIAAlVIBYAAIAAEJIBpAAIAABMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-17,19.5,34.2);


(lib.Symbol109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhDCqQgfgKgbgTIAmhIQAOAMANAIQANAIAMAEIAaADQASAAANgJQALgJAAgQQAAgOgNgIQgNgHgTgGIgbgJQgbgJgWgSQgXgTAAgrQAAgzAgggQAgggAzAAIAnAEQATADAQAGQARAGARAJIgjBFQgPgMgOgFQgOgGgNAAQgTAAgKAIQgLAJAAANQAAAMANAHQAKAHASAGIAfAKQAcAKAWATQAXASAAAqIgCAZIgLAmQgNAaghARQggAQglAAQghAAgggJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-17.8,25.2,35.8);


(lib.Symbol108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AguCrIAAikIh7ixIBqAAIBABdIA9hdIBsAAIiACxIAACkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34,34.2);


(lib.Symbol107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABTCrIgWg8Ih5AAIgXA8IheAAICDlVIBgAAICAFVgAgjAsIBIAAIgkhsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-17,35.7,34.2);


(lib.Symbol106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiVCrIAAlVICDAAQBDAAAyAzQAzAzAABEQAABFgzAzQgyAzhDAAgAg8BfIAUAAQArAAAagZQAbgaAAgsQAAgSgGgSQgGgRgMgNQgTgVgXgDQgYgEgaAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-17,30,34.2);


(lib.Symbol105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiBCCQgxgzAAhOQAAhQAzgzQAzgzBPAAQA5AAAmAXQAmAXAYAyIhUAjQgMgcgSgNQgSgNgaAAQgkAAgaAeQgZAeAAAtQAAAvAaAfQAZAeAnAAQAfAAARgPQASgPAFgeIhKAAIAAhDICxAAQgBAsgGAcQgGAcgQAYIgDAEQgZAmglARQgkARg2AAQhKAAgyg0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-18.1,35.8,36.3);


(lib.Symbol104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABSCrIijjQIAADQIhYAAIAAlVIBYAAICjDQIAAjQIBYAAIAAFVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34.1,34.2);


(lib.Symbol103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrCrIAAlVIBXAAIAAFVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-17,8.9,34.2);


(lib.Symbol102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABLCrIhJhvIhMBvIhrAAICFi2IhtifIBtAAIAzBZIA0hZIBtAAIhvCfICBC2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-17,36.4,34.2);


(lib.Symbol101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiGCCQg2g0AAhOQAAhNA1g0QA3g0BQAAQBRAAA1A0QA3A0AABNQAABOg3A0Qg1A0hRAAQhQAAg2g0gAhDhDQgdAcABAnQgBAoAdAcQAdAcAmAAQAoAAAcgcQAcgcAAgoQAAgngcgcQgcgcgoAAQgnAAgcAcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-18.1,37.8,36.3);


(lib.Symbol100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiBCrIAAlVICDAAQAvAAAYAYQAYAXAAAtQAAAYgJAQQgIAQgUALQAjAHASAUQARAUAAAkQAAAvggAaQgfAag3AAgAgoBmIATAAQAfAAAPgJQAPgIAAgTQAAgVgOgHQgNgIgjAAIgSAAgAgogjIARgBQAPgBAMgGQANgGAAgTQAAgUgNgGQgMgHgPAAIgRgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-17,26,34.2);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgTQAAgSALgOQALgOATAAQAUAAALAOQALANAAASIAAABIAAABIgBABIAAAAIhDAAQABAMAHAJQAIAIALAAQAKAAAHgEQAGgGAEgIIANAIQgHALgKAHQgKAGgNAAQgTAAgMgNgAgQgYQgHAGgCAJIAzAAQgCgJgGgGQgIgIgJABQgKgBgHAIg");
	this.shape.setTransform(223.1,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqAtIAAgyIAAgCIAAgDQAAgIgDgGQgDgGgKAAQgKAAgEAHQgEAHAAAJIAAADIAAAEIAAAtIgOAAIAAgxIAAgEIgBgEQAAgHgEgFQgDgGgIAAQgKAAgEAHQgEAHgBAIIAAAFIAAADIAAAtIgPAAIAAhXIAPAAIAAAKIAAAAQAEgFAFgEQAFgDAHAAQAIAAAGAEQAGAEADAHQAEgIAHgDQAHgEAIAAQARAAAGAMQAFALAAAOIAAA0g");
	this.shape_1.setTransform(211.1,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAgQgNgNAAgSQAAgTANgNQAOgOASAAQATAAAOAOQANANAAATQAAASgOANQgNAOgTAAQgSAAgOgOgAgVgWQgJAKAAAMQAAAOAJAJQAIAJANAAQAOAAAIgJQAJgJAAgOQAAgMgJgKQgIgJgOAAQgNgBgIAKg");
	this.shape_2.setTransform(198.8,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAoQgHgGgEgKIANgFQADAFADAFQAFADAGAAQAGAAAEgDQAEgEAAgGQAAgGgFgDQgFgEgFgCIgCgBIgBgBQgIgCgGgFQgHgFABgLQAAgLAIgGQAHgHAKAAQAHAAAGAFQAHAEADAHIgMAHQgCgEgEgDQgCgCgFAAIAAAAIAAAAQgDAAgDADQgEADAAADQABAFAEADQAEADAFACIADACIADABQAIADAGAFQAGAFAAAKQAAANgIAIQgKAIgMAAQgJAAgJgGg");
	this.shape_3.setTransform(189.8,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgTQAAgSALgOQALgOATAAQAUAAALAOQALANAAASIAAABIAAABIgBABIAAAAIhDAAQAAAMAIAJQAIAIAMAAQAJAAAGgEQAHgGAEgIIANAIQgHALgKAHQgKAGgNAAQgTAAgMgNgAgQgYQgHAGgCAJIAzAAQgBgJgIgGQgHgIgJABQgJgBgIAIg");
	this.shape_4.setTransform(181.4,12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAgOIgaBAIgrhdIARAAIAZA7IAbhBIAbBBIAag7IARAAIgrBdg");
	this.shape_5.setTransform(169.5,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAgQgLgOAAgRQAAgTALgNQALgOATAAQAJAAAHAEQAIAEAGAHIAAgBIAAgMIAOAAIAABWIgOAAIAAgLIAAAAQgHAHgHADQgHAEgJAAQgTAAgLgOgAgUgWQgHAKAAAMQAAAMAHAKQAIAKANAAQAOABAHgLQAIgKAAgMQgBgNgHgJQgIgJgNAAQgMgBgJAKg");
	this.shape_6.setTransform(156.7,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgTQAAgSALgOQALgOATAAQAUAAALAOQALANAAASIAAABIAAABIgBABIAAAAIhDAAQABAMAHAJQAIAIAMAAQAJAAAHgEQAGgGAEgIIANAIQgHALgKAHQgKAGgNAAQgTAAgMgNgAgQgYQgHAGgCAJIAzAAQgCgJgGgGQgIgIgJABQgKgBgHAIg");
	this.shape_7.setTransform(141.2,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAqAtIAAgyIAAgCIAAgDQAAgIgDgGQgDgGgKAAQgKAAgEAHQgEAHAAAJIAAADIAAAEIAAAtIgOAAIAAgxIAAgEIgBgEQAAgHgEgFQgDgGgIAAQgKAAgEAHQgEAHgBAIIAAAFIAAADIAAAtIgPAAIAAhXIAPAAIAAAKIAAAAQAEgFAFgEQAFgDAHAAQAIAAAGAEQAGAEADAHQAEgIAHgDQAHgEAIAAQARAAAGAMQAFALAAAOIAAA0g");
	this.shape_8.setTransform(129.2,12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggAgQgNgNAAgSQAAgTANgNQAOgOASAAQATAAAOAOQANANAAATQAAASgOANQgNAOgTAAQgSAAgOgOgAgVgWQgJAKAAAMQAAAOAJAJQAIAJANAAQAOAAAIgJQAJgJAAgOQAAgMgJgKQgIgJgOAAQgNgBgIAKg");
	this.shape_9.setTransform(116.9,12.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUBMIAAgwQAAgLgDgIQgDgIgNAAQgLgBgFAKQgEAIAAAKIAAADIAAAFIAAAoIgPAAIAAiYIAPAAIAABMIAAAAQAFgGAGgCQAGgEAHAAQASAAAGALQAGALAAAPIAAAzg");
	this.shape_10.setTransform(106.8,8.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAtIAAhXIAPAAIAAAKIAAAAIABgBIABgBQADgFADgCQAEgDAHAAIAFABIAGACIABABIABAAIgHAOIgBgBIgCgBIgDgBIgDgBQgIAAgDAGQgDAGgBAIIgBAGIAAAFIAAAsg");
	this.shape_11.setTransform(93.7,12);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaAiQgIgLAAgRIAAgyIAPAAIAAAwQAAALADAIQAEAIAMAAQAOAAACgIQADgIAAgLIAAgwIAQAAIAAAxQgBASgHALQgIALgTAAQgTAAgHgLg");
	this.shape_12.setTransform(85.2,12.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AggAgQgNgNAAgSQAAgTANgNQAOgOASAAQATAAAOAOQANANAAATQAAASgOANQgNAOgTAAQgSAAgOgOgAgVgWQgJAKAAAMQAAAOAJAJQAIAJANAAQAOAAAIgJQAJgJAAgOQAAgMgJgKQgIgJgOAAQgNgBgIAKg");
	this.shape_13.setTransform(75.3,12.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiBEIAcg5IgohOIASAAIAdA/IAdg/IARAAIhACHg");
	this.shape_14.setTransform(65.4,14.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdAhQgMgNAAgTQAAgSALgOQALgOATAAQAUAAALAOQALANAAASIAAABIAAABIAAABIAAAAIhEAAQAAAMAIAJQAIAIAMAAQAJAAAGgEQAHgGAEgIIANAIQgHALgKAHQgKAGgOAAQgSAAgLgNgAgQgYQgIAGgBAJIAzAAQgBgJgIgGQgHgIgKABQgIgBgIAIg");
	this.shape_15.setTransform(50.3,12.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AARBMIgignIgEADIAAAkIgPAAIAAiYIAPAAIAABhIAfgfIAUAAIglAlIAsAxg");
	this.shape_16.setTransform(41.7,8.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgfAgQgMgOAAgRQAAgTAMgNQALgOAUAAQAHAAAJAEQAHAEAFAHIABgBIAAgMIAPAAIAABWIgPAAIAAgLIgBAAQgFAHgHADQgJAEgHAAQgUAAgLgOgAgTgWQgIAKAAAMQAAAMAIAKQAGAKANAAQAPABAHgLQAIgKgBgMQAAgNgHgJQgIgJgOAAQgMgBgHAKg");
	this.shape_17.setTransform(31,12.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgsgWIAAAAIgSBdIgQAAIAciTIAyB1IAzh1IAcCTIgQAAIgShdIgtBjg");
	this.shape_18.setTransform(17.7,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(7.7,-4.8,222.1,28.5), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A1EDcIAAm3MAqJAAAIAAG3g");
	this.shape.setTransform(134.9,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,269.9,44.1), null);


(lib.Symbol11copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPApIgPgvIgPAvIgWAAIgZhRIAXAAIAOA0IARg0IAQAAIARA0IAQg0IAVAAIgaBRg");
	this.shape.setTransform(65,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggAfQgMgMAAgTQAAgSAMgMQAOgNASAAQAUAAAMANQAOAMAAASQAAATgOAMQgMANgUAAQgSAAgOgNgAgPgPQgHAGAAAJQAAAJAHAHQAGAHAJAAQAKAAAGgHQAHgHAAgJQAAgJgHgGQgGgHgKAAQgJAAgGAHg");
	this.shape_1.setTransform(53.7,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUApIgmgxIAAAxIgWAAIAAhRIAWAAIAmAxIAAgxIAVAAIAABRg");
	this.shape_2.setTransform(43.6,7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeApIAAhRIAhAAQANAAAIAGQAHAIAAANQAAANgHAHQgHAGgNAAIgNAAIAAAcgAgJgDIAHAAQAGAAACgCQADgDAAgFQAAgFgDgDQgDgCgFAAIgHAAg");
	this.shape_3.setTransform(31.8,7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAfQgNgMABgTQgBgSANgMQAOgNASAAQATAAANANQANAMABASQgBATgNAMQgNANgTAAQgSAAgOgNgAgQgPQgGAGAAAJQAAAJAGAHQAIAHAIAAQAJAAAIgHQAGgHAAgJQAAgJgGgGQgIgHgJAAQgIAAgIAHg");
	this.shape_4.setTransform(22.8,7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPApIAAgiIgeAAIAAAiIgVAAIAAhRIAVAAIAAAgIAeAAIAAggIAWAAIAABRg");
	this.shape_5.setTransform(13.3,7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAoQgIgCgGgEIAJgRIAGAEIAGADIAEABIADAAQADAAADgCQADgDAAgDQAAgEgDgCIgHgDIgDgBIgDgBQgHgCgGgEQgFgEAAgLQAAgMAIgHQAHgIAMAAIAFAAIAFAAIAIADIAIAEIgIAQIgHgEIgHgCQgEAAgCACQgDACAAAEQAAADADABIAGAEIAEABIAEABQAGADAGAEQAFAEAAAJIAAAEIAAADIgBAFIgCADQgDAHgIAEQgIAEgIAAQgIAAgHgDg");
	this.shape_6.setTransform(5.2,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11copy, new cjs.Rectangle(0,0,73,15.7), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#080808").s().p("AAPApIgPgvIgPAvIgWAAIgZhRIAXAAIAOA0IARg0IAQAAIARA0IAQg0IAVAAIgaBRg");
	this.shape.setTransform(65,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#080808").s().p("AggAfQgMgMAAgTQAAgSAMgMQAOgNASAAQAUAAAMANQAOAMAAASQAAATgOAMQgMANgUAAQgSAAgOgNgAgPgPQgHAGAAAJQAAAJAHAHQAGAHAJAAQAKAAAGgHQAHgHAAgJQAAgJgHgGQgGgHgKAAQgJAAgGAHg");
	this.shape_1.setTransform(53.7,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#080808").s().p("AAUApIgmgxIAAAxIgWAAIAAhRIAWAAIAmAxIAAgxIAVAAIAABRg");
	this.shape_2.setTransform(43.6,7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#080808").s().p("AgeApIAAhRIAhAAQANAAAIAGQAHAIAAANQAAANgHAHQgHAGgNAAIgNAAIAAAcgAgJgDIAHAAQAGAAACgCQADgDAAgFQAAgFgDgDQgDgCgFAAIgHAAg");
	this.shape_3.setTransform(31.8,7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#080808").s().p("AggAfQgNgMABgTQgBgSANgMQAOgNASAAQATAAANANQANAMABASQgBATgNAMQgNANgTAAQgSAAgOgNgAgQgPQgGAGAAAJQAAAJAGAHQAIAHAIAAQAJAAAIgHQAGgHAAgJQAAgJgGgGQgIgHgJAAQgIAAgIAHg");
	this.shape_4.setTransform(22.8,7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#080808").s().p("AAPApIAAgiIgeAAIAAAiIgVAAIAAhRIAVAAIAAAgIAeAAIAAggIAWAAIAABRg");
	this.shape_5.setTransform(13.3,7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#080808").s().p("AgPAoQgIgCgGgEIAJgRIAGAEIAGADIAEABIADAAQADAAADgCQADgDAAgDQAAgEgDgCIgHgDIgDgBIgDgBQgHgCgGgEQgFgEAAgLQAAgMAIgHQAHgIAMAAIAFAAIAFAAIAIADIAIAEIgIAQIgHgEIgHgCQgEAAgCACQgDACAAAEQAAADADABIAGAEIAEABIAEABQAGADAGAEQAFAEAAAJIAAAEIAAADIgBAFIgCADQgDAHgIAEQgIAEgIAAQgIAAgHgDg");
	this.shape_6.setTransform(5.2,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,73,15.7), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbCiIAAlCIC3AAIAABHIhkAAIAAA2IBbAAIAABGIhbAAIAAB/g");
	this.shape.setTransform(345.8,23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhbCiIAAlCIC3AAIAABHIhkAAIAAA2IBbAAIAABGIhbAAIAAB/g");
	this.shape_1.setTransform(322.4,23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah/B7QgzgxAAhKQAAhIAzgxQAzgyBMAAQBMAAA0AyQAzAxAABIQAABKgzAxQg0AxhMAAQhMAAgzgxgAhAg/QgaAbAAAkQAAAmAbAaQAbAbAkAAQAmAAAagbQAbgaAAgmQAAgkgbgbQgagbgmAAQglAAgbAbg");
	this.shape_2.setTransform(289.9,23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAwCPQgYgVAAgkQAAgkAYgWQAYgVAoAAQAoAAAYAWQAZAVAAAkQAAAkgZAVQgZAWgnAAQgoAAgYgWgABWA8QgKALAAAPQAAAPAKAKQALALAPAAQAPAAALgLQAKgKAAgPQAAgPgKgLQgLgLgPAAQgPAAgLALgAhyChIC6lCIAqAAIi6FCgAiwgcQgYgVAAgkQAAgkAYgVQAZgWAoAAQAnAAAZAWQAYAVAAAkQAAAjgZAWQgYAWgnAAQgoAAgZgWgAiJhvQgLALAAAPQAAAPALALQAKAKAQAAQAPAAAKgKQALgLAAgPQAAgQgLgKQgKgKgPAAQgQAAgKAKg");
	this.shape_3.setTransform(235,23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2ChQgZgMgUgZQgTgYgJgeQgJgeAAgoQAAgnAJgeQAJgeATgXQAUgZAZgNQAagMAcAAQAfAAAZAMQAZANATAZQATAXAJAeQAJAeAAAnQAAAogJAeQgJAegTAYQgTAZgZAMQgZAMgfAAQgcAAgagMgAgmhGQgPAbAAAsQAAAsAPAcQAQAbAWAAQAYAAAPgbQAOgcAAgsQAAgsgOgbQgPgcgYAAQgWAAgQAcg");
	this.shape_4.setTransform(198.8,23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiKCiICSj7IiFAAIAAhHIEIAAIi5FCg");
	this.shape_5.setTransform(171.2,23.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah/B7QgzgxAAhKQAAhIAzgxQAzgyBMAAQBMAAA0AyQAzAxAABIQAABKgzAxQg0AxhMAAQhMAAgzgxgAhAg/QgaAbAAAkQAAAmAbAaQAbAbAkAAQAmAAAagbQAbgaAAgmQAAgkgbgbQgagbgmAAQglAAgbAbg");
	this.shape_6.setTransform(122,23.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqCiIAAj7IhEAAIAAhHIDdAAIAABHIhFAAIAAD7g");
	this.shape_7.setTransform(90.7,23.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah6CiIAAlCICFAAQAygBAfAcQAfAbAAA0QAAA2gcAbQgcAcg1AAIg0AAIAABrgAgmgNIAcAAQAXAAALgJQALgJAAgWQAAgTgLgLQgMgJgWgBIgcAAg");
	this.shape_8.setTransform(52.5,23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhFCYQgegMgRgXQgNgQgGgWQgEgWgBglIAAi4IBUAAIAACtIABAiQABAJADAIIACADIACAEQAIAMAMAHQAMAFAPAAQAQAAAMgGQAOgIAGgMIACgDIACgDQADgIABgKIABggIAAitIBUAAIAAC4QAAAigGAVQgGAVgOATIgDACIgDAEQgUAWgcALQgdAMgiAAQgkAAgfgOg");
	this.shape_9.setTransform(19.4,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,358.9,52.4), null);


(lib.Symbol4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7664").s().p("AkkElIAApJIJJAAIAAJJg");
	this.shape.setTransform(29.3,29.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4copy, new cjs.Rectangle(0,0,58.5,58.5), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkkElIAApJIJJAAIAAJJg");
	this.shape.setTransform(29.3,29.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,58.5,58.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,970,90), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABfB1IAAiBQAAgigaABQgLgBgHAHQgIAGgEAMIAACKIhNAAIAAiBQAAgigaABQgLgBgIAHQgJAGgCAMIAACKIhQAAIAAjkIBQAAIAAATQAJgLAPgGQAQgHATAAQAmAAAYAbQAagbAtAAQAjAAAVAXQAVAWAAAnIAACVg");
	this.shape.setTransform(196.4,15.8,0.429,0.43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhTBXQghgiAAg1QAAg0AhghQAggiAzABQA0gBAgAiQAhAhAAA0QAAA1ghAiQggAgg0AAQgzAAgggggAgbgmQgKAPAAAXQAAAYAKAOQAKAPARABQASgBAKgPQAKgOAAgYQAAgXgKgPQgKgPgSAAQgRAAgKAPg");
	this.shape_1.setTransform(182.6,15.9,0.429,0.43);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhOBXQgggiAAg1QAAg0AgghQAggiAzABQAtAAAcAYQAcAZAFApIhNAAQgCgLgHgGQgJgIgLAAQgQAAgKAPQgKAPAAAXQAAAYAKAOQAKAPAQAAQAMAAAIgHQAHgGACgLIBNAAQgFApgcAYQgcAZgtAAQgzAAggggg");
	this.shape_2.setTransform(172,15.9,0.429,0.43);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghAiQgNgOAAgUQAAgTANgOQAOgOATAAQATAAAOAOQAOAOAAATQAAAUgOAOQgOAOgTAAQgTAAgOgOg");
	this.shape_3.setTransform(164.7,18.9,0.429,0.43);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhJCMQgegUgJgjIBMgIQAGAYAdAAQAnAAAAgrIAAgQQgTAWgiAAQgvAAgbghQgbgeAAgwQAAgwAbgfQAbggAvAAQAjAAASAWIAAgRIBPAAIAADCQAAA6giAfQgfAdg1AAQgrAAgdgTgAgahSQgLAOAAAVQAAAWALANQALANASAAQAYAAALgTIAAg6QgLgTgYAAQgSAAgLANg");
	this.shape_4.setTransform(69.3,17.6,0.429,0.43);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhJCMQgegUgIgjIBKgIQAHAYAdAAQAnAAAAgrIAAgQQgTAWgiAAQguAAgcggQgbgfAAgwQAAgwAbgfQAcggAuAAQAjAAASAWIAAgRIBPAAIAADCQAAA6ghAfQggAdg1AAQgrAAgdgTgAgahSQgLAOAAAVQAAAWALANQALANATAAQAXAAALgSIAAg7QgLgTgXAAQgTAAgLANg");
	this.shape_5.setTransform(146.5,17.6,0.429,0.43);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhmBzQgsgsAAhHIADgcQAIg7ApgkQAqglA6AAQA4AAAjAdQAiAaALAuIhRAJQgPgmgoAAQgWAAgSAOQgRANgHAYQgGASAAATQABAoATAYQAUAZAfAAQAXAAAQgLQAPgJAFgTIg1AAIAAg8ICGAAIAAAfQAABAgnAmQgmAlg/AAQhCAAgrgtg");
	this.shape_6.setTransform(106.4,14.1,0.429,0.43);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguA8IAAhWIgiAAIAAg+IAiAAIAAguIBNgIIAAA2IAwAAIAAA+IgwAAIAABLQAAAZAYAAQANAAANgFIAABDQgRAHgbAAQhTAAAAhTg");
	this.shape_7.setTransform(44.6,14.8,0.429,0.43);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA5CbIAAiGIhxAMIAAB6IhSAAIAAk2IBSAAIAAB4IBxgNIAAhrIBSAAIAAE2g");
	this.shape_8.setTransform(13,14.1,0.429,0.43);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnByIAAjjQATAKAUAAQAWAAASgJIAADig");
	this.shape_9.setTransform(50.9,15.9,0.429,0.43);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfAfQgNgMAAgTQAAgSANgMQAOgMARAAQATAAAMAMQAOAMAAASQAAATgOAMQgMAMgTAAQgRAAgOgMg");
	this.shape_10.setTransform(50.9,8.3,0.429,0.43);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfAfQgNgMAAgTQAAgSANgMQAOgMARAAQATAAAMAMQAOAMAAASQAAATgOAMQgMAMgTAAQgRAAgOgMg");
	this.shape_11.setTransform(50.9,8.3,0.429,0.43);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhPBWQggggAAg2QAAgzAhgiQAgghAxAAQAzAAAeAgQAcAeAAA1IAAASIiSAAQAEAqAiAAQAbAAAHgXIBJAAQgGAogcAWQgdAXgsAAQgzAAggghgAghgXIBEAAQgBgOgIgKQgJgJgOAAQgcAAgIAhg");
	this.shape_12.setTransform(157.1,15.9,0.429,0.43);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhLB1IAAjkIBOAAIAAAVQATgZAhAAQAOAAAHADIAABNQgNgHgUAAQgiAAgGAaIAACFg");
	this.shape_13.setTransform(137.9,15.8,0.429,0.43);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhTBWQggghAAg1QAAg0AgghQAgghAzAAQA0AAAgAhQAgAhAAA0QAAA1ggAhQggAhg0AAQgzAAggghgAgbgmQgKAPAAAXQAAAYAKAPQAKAOARAAQASAAAKgOQAKgPAAgYQAAgXgKgPQgKgPgSAAQgRAAgKAPg");
	this.shape_14.setTransform(128.7,15.9,0.429,0.43);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhPBWQggggAAg2QAAgzAhgiQAfghAxAAQA0AAAdAgQAdAeAAA1IAAASIiSAAQADAqAjAAQAbAAAHgXIBIAAQgFAogdAWQgcAXgsAAQgzAAggghgAghgXIBEAAQgBgOgIgKQgJgJgPAAQgbAAgIAhg");
	this.shape_15.setTransform(118.2,15.9,0.429,0.43);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhLB1IAAjkIBOAAIAAAVQATgZAhAAQAOAAAHADIAABNQgNgHgUAAQghAAgHAaIAACFg");
	this.shape_16.setTransform(96.3,15.8,0.429,0.43);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhTBWQggghAAg1QAAg0AgghQAgghAzAAQA0AAAgAhQAgAhAAA0QAAA1ggAhQggAhg0AAQgzAAggghgAgbgmQgKAPAAAXQAAAYAKAPQAKAOARAAQASAAAKgOQAKgPAAgYQAAgXgKgPQgKgPgSAAQgRAAgKAPg");
	this.shape_17.setTransform(87.2,15.9,0.429,0.43);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgtCnIAAimIgiAAIAAg9IAiAAIAAgRQAAgpAYgYQAWgYAqAAQAUAAARAGIAABBQgJgFgKAAQgcAAAAAcIAAAMIAsAAIAAA9IgsAAIAACmg");
	this.shape_18.setTransform(78.7,13.6,0.429,0.43);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAgB0IAAiAQAAgQgIgIQgHgJgQAAQgLAAgIAHQgJAGgDAMIAACIIhPAAIAAjiIBPAAIAAAUQAXgaAlAAQAmAAAVAYQAVAWAAAmIAACUg");
	this.shape_19.setTransform(58.7,15.8,0.429,0.43);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAgB0IAAiAQAAgPgIgJQgHgJgPAAQgLAAgJAHQgJAGgDAMIAACIIhQAAIAAjiIBQAAIAAAUQAWgaAnAAQAlAAAVAYQAWAVAAAnIAACUg");
	this.shape_20.setTransform(35.7,15.8,0.429,0.43);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhXBeQgWgXAAgmIAAiUIBPAAIAACBQAAAhAdAAQALAAAIgHQAKgHADgLIAAiJIBPAAIAADiIhPAAIAAgTQgJALgRAHQgPAGgTABQglAAgVgXg");
	this.shape_21.setTransform(24.9,16,0.429,0.43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,208.8,26), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhsDMQgrgdgNgzIBugMQAKAkAqAAQA6gBAAg+IAAgYQgMAOgUAJQgVAJgaABQhDAAgpgwQgmgtAAhGQAAhHAmgsQApgwBDABQAagBAVAKQAUAJAMAOIAAgaIBzAAIAAEcQgBBVgwAtQguAshOgBQg/ABgrgdgAgnh4QgQAUAAAfQAAAgAQATQARATAbAAQARAAAOgHQANgIAHgMIAAhWQgIgMgMgHQgOgJgRAAQgbAAgRAUg");
	this.shape.setTransform(212.3,37.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhsDNQgqgdgNgzIBtgNQALAjApAAQA6AAAAg+IAAgYQgdAhgxgBQhEABgpgwQgngtABhGQgBhGAngtQApgwBEAAQAyABAcAgIAAgZIByAAIAAEcQAABUgwAuQguArhOAAQg/AAgrgcgAgnh3QgQATAAAfQAAAgAQAUQARASAbAAQARAAAOgHQANgIAHgMIAAhWQgHgLgNgIQgOgJgRAAQgbAAgRAVg");
	this.shape_1.setTransform(490.2,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiWCpQg/hCAAhnQAAgVADgUQANhXA8g0QA8g1BWAAQBRAAA0ApQAxAmAQBDIh2ANQgVg3g7AAQgiAAgZAUQgYAUgLAiQgIAaAAAdQAAA7AcAjQAcAkAvAAQAiAAAXgPQAVgPAIgbIhNAAIAAhYIDDAAIAAAtQAABdg4A4Qg4A3hcAAQhhAAg/hBg");
	this.shape_2.setTransform(353.6,26);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhEBYIAAh/IgxAAIAAhaIAxAAIAAhDIBxgMIAABPIBGAAIAABaIhGAAIAABuQAAAlAkAAQATAAASgHIAABiQgZAKgoAAQh5AAAAh5g");
	this.shape_3.setTransform(128.1,28.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABUDjIAAjEIinASIAACyIh3AAIAAnFIB3AAIAACuICngSIAAicIB3AAIAAHFg");
	this.shape_4.setTransform(20.3,26);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5CmIAAlLQAaAPAfAAQAgAAAagPIAAFLg");
	this.shape_5.setTransform(149.5,32.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtAuQgUgSAAgcQAAgbAUgRQASgRAbAAQAbAAATARQAUARAAAbQAAAcgUASQgTAQgbABQgbgBgSgQg");
	this.shape_6.setTransform(149.5,6.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAuQgUgSAAgcQAAgbAUgRQASgRAbAAQAbAAATARQAUARAAAbQAAAcgUASQgTAQgbABQgbgBgSgQg");
	this.shape_7.setTransform(149.5,6.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah0B+QgvgwAAhOQAAhLAwgxQAvgxBIAAQBKAAAsAvQApAtABBLIAAAcIjXAAQADAeAPAQQAPAQAYAAQAnAAAJgiIBsAAQgJA6gpAhQgqAhhAAAQhMAAgugwgAgwgiIBjAAQgBgWgMgNQgOgNgUAAQgpAAgLAwg");
	this.shape_8.setTransform(526.5,32.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhuCqIAAlMIByAAIAAAeQAcglAwAAQAWAAAJAGIAABwQgTgKgdAAQgXAAgPAKQgQAJgFASIAADCg");
	this.shape_9.setTransform(460.9,31.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah5B9QgwgwAAhNQAAhMAwgwQAugxBLAAQBMAAAvAxQAvAwAABMQAABNgvAwQgvAxhMAAQhLAAgugxgAgog3QgPAVAAAiQAAAjAPAVQAPAWAZAAQAbAAAPgWQAPgVAAgjQAAgigPgVQgPgWgbAAQgZAAgPAWg");
	this.shape_10.setTransform(429.7,32.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah0B+QgugwAAhOQAAhLAvgxQAvgxBIAAQBLAAArAvQApAtAABLIAAAcIjWAAQADAeAPAQQAPAQAYAAQAnAAAKgiIBrAAQgJA6gpAhQgpAhhBAAQhMAAgugwgAgwgiIBjAAQgBgWgMgNQgNgNgVAAQgpAAgLAwg");
	this.shape_11.setTransform(394,32.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhvCqIAAlMIBzAAIAAAeQAcglAwAAQAVAAALAGIAABwQgVgKgcAAQgXAAgQAKQgPAJgFASIAADCg");
	this.shape_12.setTransform(311.4,31.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah6B9QgvgwAAhNQAAhMAvgwQAwgxBKAAQBMAAAvAxQAvAwAABMQAABNgvAwQgvAxhMAAQhKAAgwgxgAgog3QgOAVAAAiQAAAjAOAVQAPAWAZAAQAbAAAPgWQAOgVAAgjQAAgigOgVQgPgWgbAAQgZAAgPAWg");
	this.shape_13.setTransform(280.2,32.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhCD0IAAjzIgxAAIAAhZIAxAAIAAgZQAAg8AigiQAigkA9ABQAcgBAaAKIAABeQgNgHgPABQgpAAAAAoIAAARIBAAAIAABZIhAAAIAADzg");
	this.shape_14.setTransform(251.3,24.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAuCqIAAi9QAAgVgKgNQgMgOgWAAQgQAAgNAKQgNAKgEARIAADIIh0AAIAAlLIB0AAIAAAcQAOgQAXgKQAXgKAcAAQA3AAAfAiQAgAgAAA4IAADZg");
	this.shape_15.setTransform(176.3,31.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAuCqIAAi9QAAgVgKgNQgMgOgWAAQgQAAgNAKQgNAKgEARIAADIIh0AAIAAlLIB0AAIAAAcQAOgQAXgKQAXgKAcAAQA3AAAfAiQAgAgAAA4IAADZg");
	this.shape_16.setTransform(98,31.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiBCJQgfghAAg4IAAjZIB0AAIAAC+QAAAVAKANQALAOAWAAQAPAAANgKQANgLAFgQIAAjJIB0AAIAAFLIh0AAIAAgdQgOAQgXAKQgXALgcAAQg2AAggghg");
	this.shape_17.setTransform(61,32.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,542.9,61.2), null);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ah6DnQgxgggOg7IB8gNQALAnAwAAQBBAAAAhHIAAgaQggAkg4AAQhNABgug2QgsgzAAhPQAAhQAsgzQAug1BNAAQA5AAAfAkIAAgcICCAAIAAFBQAABhg3AyQg0AxhYAAQhIAAgwgggAgsiIQgSAWAAAkQAAAkASAWQATAVAfAAQATAAAQgIQAOgJAIgOIAAhhQgIgNgOgJQgQgJgTAAQgfgBgTAXg");
	this.shape_18.setTransform(243.4,42.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ah6DnQgxgggOg7IB8gNQALAoAwAAQBBAAAAhHIAAgbQgOAQgVAKQgZALgcAAQhNAAgug2QgsgzAAhPQAAhQAsgzQAug1BNAAQAcAAAZALQAVAKAOAQIAAgdICCAAIAAFCQAABfg3A0Qg0AwhYAAQhIAAgwgggAgsiIQgSAWAAAkQAAAkASAWQATAWAfAAQATAAAQgJQAOgJAIgNIAAhiQgIgNgOgIQgQgKgTAAQgfAAgTAWg");
	this.shape_19.setTransform(283.4,104.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AiqC/QhHhKAAh1QAAgUADgbQAPhhBEg8QBEg8BhAAQBbAAA8AuQA3AsATBLIiGAPQgXg+hEAAQgmAAgdAXQgbAWgMAnQgKAeAAAgQAABDAgAoQAhApA1AAQAmAAAZgSQAZgRAJgeIhXAAIAAhkIDcAAIAAAyQAABqhABAQg/A+hnAAQhvAAhHhKg");
	this.shape_20.setTransform(128.9,90.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhNBkIAAiQIg3AAIAAhmIA3AAIAAhLICAgPIAABaIBPAAIAABmIhPAAIAAB9QAAApApAAQAXAAASgIIAABvQgaAMguAAQiKAAAAiJg");
	this.shape_21.setTransform(148.2,32);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABfEAIAAjdIi9AUIAADJIiHAAIAAoAICHAAIAADFIC9gUIAAixICHAAIAAIAg");
	this.shape_22.setTransform(26.3,29.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhBC8IAAl3QAfARAiAAQAkAAAegQIAAF2g");
	this.shape_23.setTransform(172.4,36.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgzA0QgWgVAAgeQAAgfAWgVQAVgSAegBQAfABAVASQAWAVAAAfQAAAegWAVQgVATgfAAQgeAAgVgTg");
	this.shape_24.setTransform(172.5,7.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgzA0QgWgVAAgeQAAgfAWgVQAVgSAegBQAfABAVASQAWAVAAAfQAAAegWAVQgVATgfAAQgeAAgVgTg");
	this.shape_25.setTransform(172.5,7.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AiDCOQg1g1AAhZQAAhVA2g3QA1g3BRAAQBVAAAxA0QAvAzAABWIAAAfIjzAAQAEAiAQASQARASAcgBQAsAAALglIB5AAQgKBBguAlQgvAlhJAAQhWAAg0g2gAg3gnIBxAAQgCgYgOgPQgOgQgYAAQguABgNA2g");
	this.shape_26.setTransform(324.5,97.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ah9DAIAAl3ICCAAIAAAhQAfgpA2AAQAYAAAMAGIAAB+QgXgLgfAAQgbAAgSALQgRALgFAVIAADbg");
	this.shape_27.setTransform(250.3,97.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AiKCOQg1g3AAhXQAAhWA1g2QA2g3BUAAQBWAAA1A3QA1A2AABWQAABXg1A3Qg1A2hWAAQhUAAg2g2gAgtg/QgRAYAAAnQAAAoARAYQAQAYAdAAQAeAAARgYQARgYAAgoQAAgngRgYQgRgYgeAAQgdAAgQAYg");
	this.shape_28.setTransform(215,97.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AiDCOQg1g1AAhZQAAhVA2g3QA1g3BRAAQBVAAAxA0QAvAzAABWIAAAfIjzAAQAEAiAQASQARASAcgBQAsAAALglIB5AAQgKBBgvAlQguAlhJAAQhWAAg0g2gAg3gnIBxAAQgCgYgOgPQgOgQgYAAQguABgNA2g");
	this.shape_29.setTransform(174.6,97.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ah9DAIAAl3ICCAAIAAAhQAfgpA2AAQAYAAAMAGIAAB+QgXgLgfAAQgbAAgSALQgRALgFAVIAADbg");
	this.shape_30.setTransform(81.2,97.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AiKCOQg1g3AAhXQAAhWA1g2QA2g3BUAAQBWAAA1A3QA1A2AABWQAABXg1A3Qg1A2hWAAQhUAAg2g2gAgtg/QgRAYAAAnQAAAoARAYQAQAYAdAAQAeAAARgYQARgYAAgoQAAgngRgYQgRgYgeAAQgcAAgRAYg");
	this.shape_31.setTransform(45.9,97.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhLETIAAkSIg4AAIAAhlIA4AAIAAgbQAAhEAngoQAmgoBFAAQAiABAbAJIAABrQgOgHgRAAQgWAAgMAMQgNALAAAWIAAAUIBJAAIAABlIhJAAIAAESg");
	this.shape_32.setTransform(13.2,89);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA0DAIAAjVQAAgZgMgOQgNgPgYAAQgTAAgPALQgPALgEATIAADiIiEAAIAAl3ICEAAIAAAhQAQgTAagLQAagLAfAAQA/AAAjAlQAkAlgBBAIAAD1g");
	this.shape_33.setTransform(202.7,35.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AA0DAIAAjVQAAgZgMgOQgNgPgYAAQgTAAgOALQgPALgFATIAADiIiEAAIAAl3ICEAAIAAAhQAQgTAagLQAagLAgAAQA+AAAkAlQAjAlAABAIAAD1g");
	this.shape_34.setTransform(114.1,35.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AiSCbQgjgmAAg/IAAj1ICDAAIAADWQAAAZALAPQANAPAYAAQASAAAOgLQAQgMAFgTIAAjjICDAAIAAF3IiDAAIAAghQgQASgaAMQgbALgfAAQg9AAgkglg");
	this.shape_35.setTransform(72.3,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(0,0,343,130.6), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer 8
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(209.7,130.8,0.551,0.55,0,0,0,179.5,26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:179.4,scaleX:0.46,scaleY:0.46},6,cjs.Ease.get(1)).to({regX:179.3,regY:26.2,scaleX:0.5,scaleY:0.49,x:209.6},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(110.8,116.4,197.9,28.8);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(134.9,112.4,0.899,0.899,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,872.2,81), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Layer 3
	this.instance = new lib.Symbol100("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.6,46.2,1.055,0.135);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance.cache(-15,-19,30,38);

	this.instance_1 = new lib.Symbol101("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(59.6,46.3,1.055,0.11);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_1.cache(-21,-20,42,40);

	this.instance_2 = new lib.Symbol102("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(100.8,46.3,1.055,0.085);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_2.cache(-20,-19,40,38);

	this.instance_3 = new lib.Symbol103("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(128.5,46.4,1.055,0.06);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_3.cache(-6,-19,13,38);

	this.instance_4 = new lib.Symbol104("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(158.7,46.5,1.055,0.035);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_4.cache(-19,-19,38,38);

	this.instance_5 = new lib.Symbol105("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(201.4,46.6,1.055,0.01);
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_5.cache(-20,-20,40,40);

	this.instance_6 = new lib.Symbol106("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(257.1,46.2,1.055,0.121);
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_6.cache(-17,-19,34,38);

	this.instance_7 = new lib.Symbol107("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(294.2,46.3,1.055,0.096);
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_7.cache(-20,-19,40,38);

	this.instance_8 = new lib.Symbol108("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(330.7,46.4,1.055,0.071);
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_8.cache(-19,-19,38,38);

	this.instance_9 = new lib.Symbol109("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(378.4,46.5,1.055,0.046);
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_9.cache(-15,-20,29,40);

	this.instance_10 = new lib.Symbol107("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(294.2,44.9,1.055,0.502);
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_10.cache(-20,-19,40,38);

	this.instance_11 = new lib.Symbol110("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(446.2,46.2,1.055,0.131);
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_11.cache(-12,-19,24,38);

	this.instance_12 = new lib.Symbol111("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(471.5,46.3,1.055,0.106);
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_12.cache(-12,-19,23,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleY:0.135,y:46.2}}]}).to({state:[{t:this.instance,p:{scaleY:0.271,y:45.7}},{t:this.instance_1,p:{scaleY:0.11,y:46.3}}]},1).to({state:[{t:this.instance,p:{scaleY:0.406,y:45.3}},{t:this.instance_1,p:{scaleY:0.246,y:45.8}},{t:this.instance_2,p:{scaleY:0.085,y:46.3}}]},1).to({state:[{t:this.instance,p:{scaleY:0.542,y:44.8}},{t:this.instance_1,p:{scaleY:0.381,y:45.4}},{t:this.instance_2,p:{scaleY:0.221,y:45.9}},{t:this.instance_3,p:{scaleY:0.06,y:46.4}}]},1).to({state:[{t:this.instance,p:{scaleY:0.677,y:44.4}},{t:this.instance_1,p:{scaleY:0.517,y:44.9}},{t:this.instance_2,p:{scaleY:0.356,y:45.4}},{t:this.instance_3,p:{scaleY:0.196,y:46}},{t:this.instance_4,p:{scaleY:0.035,y:46.5}}]},1).to({state:[{t:this.instance,p:{scaleY:0.813,y:43.9}},{t:this.instance_1,p:{scaleY:0.652,y:44.5}},{t:this.instance_2,p:{scaleY:0.492,y:45}},{t:this.instance_3,p:{scaleY:0.331,y:45.5}},{t:this.instance_4,p:{scaleY:0.171,y:46}},{t:this.instance_5,p:{scaleY:0.01,y:46.6}}]},1).to({state:[{t:this.instance,p:{scaleY:0.948,y:43.5}},{t:this.instance_1,p:{scaleY:0.788,y:44.1}},{t:this.instance_2,p:{scaleY:0.627,y:44.5}},{t:this.instance_3,p:{scaleY:0.467,y:45.1}},{t:this.instance_4,p:{scaleY:0.306,y:45.6}},{t:this.instance_5,p:{scaleY:0.146,y:46.1}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:43.1}},{t:this.instance_1,p:{scaleY:0.923,y:43.6}},{t:this.instance_2,p:{scaleY:0.763,y:44.1}},{t:this.instance_3,p:{scaleY:0.602,y:44.6}},{t:this.instance_4,p:{scaleY:0.442,y:45.1}},{t:this.instance_5,p:{scaleY:0.281,y:45.7}},{t:this.instance_6,p:{scaleY:0.121,y:46.2}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:43.1}},{t:this.instance_1,p:{scaleY:1.055,y:43.2}},{t:this.instance_2,p:{scaleY:0.898,y:43.6}},{t:this.instance_3,p:{scaleY:0.738,y:44.2}},{t:this.instance_4,p:{scaleY:0.577,y:44.7}},{t:this.instance_5,p:{scaleY:0.417,y:45.2}},{t:this.instance_6,p:{scaleY:0.256,y:45.8}},{t:this.instance_7,p:{scaleY:0.096,y:46.3,x:294.2}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:43.1}},{t:this.instance_1,p:{scaleY:1.055,y:43.2}},{t:this.instance_2,p:{scaleY:1.034,y:43.2}},{t:this.instance_3,p:{scaleY:0.873,y:43.7}},{t:this.instance_4,p:{scaleY:0.713,y:44.2}},{t:this.instance_5,p:{scaleY:0.552,y:44.8}},{t:this.instance_6,p:{scaleY:0.392,y:45.3}},{t:this.instance_7,p:{scaleY:0.231,y:45.8,x:294.2}},{t:this.instance_8,p:{scaleY:0.071,y:46.4}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:43.1}},{t:this.instance_1,p:{scaleY:1.055,y:43.2}},{t:this.instance_2,p:{scaleY:1.055,y:43.1}},{t:this.instance_3,p:{scaleY:1.009,y:43.3}},{t:this.instance_4,p:{scaleY:0.848,y:43.8}},{t:this.instance_5,p:{scaleY:0.688,y:44.3}},{t:this.instance_6,p:{scaleY:0.527,y:44.9}},{t:this.instance_7,p:{scaleY:0.367,y:45.4,x:294.2}},{t:this.instance_8,p:{scaleY:0.206,y:45.9}},{t:this.instance_9,p:{scaleY:0.046,y:46.5}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:43.1}},{t:this.instance_1,p:{scaleY:1.055,y:43.2}},{t:this.instance_2,p:{scaleY:1.055,y:43.1}},{t:this.instance_3,p:{scaleY:1.055,y:43.1}},{t:this.instance_4,p:{scaleY:0.984,y:43.3}},{t:this.instance_5,p:{scaleY:0.823,y:43.9}},{t:this.instance_6,p:{scaleY:0.663,y:44.4}},{t:this.instance_10,p:{scaleY:0.502,y:44.9}},{t:this.instance_8,p:{scaleY:0.342,y:45.5}},{t:this.instance_9,p:{scaleY:0.181,y:46}},{t:this.instance_7,p:{scaleY:0.021,y:46.5,x:413}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:43.1}},{t:this.instance_1,p:{scaleY:1.055,y:43.2}},{t:this.instance_2,p:{scaleY:1.055,y:43.1}},{t:this.instance_3,p:{scaleY:1.055,y:43.1}},{t:this.instance_4,p:{scaleY:1.055,y:43.1}},{t:this.instance_5,p:{scaleY:0.959,y:43.5}},{t:this.instance_6,p:{scaleY:0.798,y:44}},{t:this.instance_10,p:{scaleY:0.638,y:44.5}},{t:this.instance_8,p:{scaleY:0.477,y:45}},{t:this.instance_9,p:{scaleY:0.317,y:45.6}},{t:this.instance_7,p:{scaleY:0.156,y:46.1,x:413}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:43.1}},{t:this.instance_1,p:{scaleY:1.055,y:43.2}},{t:this.instance_2,p:{scaleY:1.055,y:43.1}},{t:this.instance_3,p:{scaleY:1.055,y:43.1}},{t:this.instance_4,p:{scaleY:1.055,y:43.1}},{t:this.instance_5,p:{scaleY:1.055,y:43.1}},{t:this.instance_6,p:{scaleY:0.934,y:43.5}},{t:this.instance_10,p:{scaleY:0.773,y:44}},{t:this.instance_8,p:{scaleY:0.613,y:44.6}},{t:this.instance_9,p:{scaleY:0.452,y:45.1}},{t:this.instance_7,p:{scaleY:0.292,y:45.6,x:413}},{t:this.instance_11,p:{scaleY:0.131,y:46.2}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:43.1}},{t:this.instance_1,p:{scaleY:1.055,y:43.2}},{t:this.instance_2,p:{scaleY:1.055,y:43.1}},{t:this.instance_3,p:{scaleY:1.055,y:43.1}},{t:this.instance_4,p:{scaleY:1.055,y:43.1}},{t:this.instance_5,p:{scaleY:1.055,y:43.1}},{t:this.instance_6,p:{scaleY:1.055,y:43.1}},{t:this.instance_10,p:{scaleY:0.909,y:43.6}},{t:this.instance_8,p:{scaleY:0.748,y:44.1}},{t:this.instance_9,p:{scaleY:0.588,y:44.7}},{t:this.instance_7,p:{scaleY:0.427,y:45.2,x:413}},{t:this.instance_11,p:{scaleY:0.267,y:45.7}},{t:this.instance_12,p:{scaleY:0.106,y:46.3}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:43.1}},{t:this.instance_1,p:{scaleY:1.055,y:43.2}},{t:this.instance_2,p:{scaleY:1.055,y:43.1}},{t:this.instance_3,p:{scaleY:1.055,y:43.1}},{t:this.instance_4,p:{scaleY:1.055,y:43.1}},{t:this.instance_5,p:{scaleY:1.055,y:43.1}},{t:this.instance_6,p:{scaleY:1.055,y:43.1}},{t:this.instance_10,p:{scaleY:1.044,y:43.1}},{t:this.instance_8,p:{scaleY:0.884,y:43.7}},{t:this.instance_9,p:{scaleY:0.723,y:44.2}},{t:this.instance_7,p:{scaleY:0.563,y:44.7,x:413}},{t:this.instance_11,p:{scaleY:0.402,y:45.3}},{t:this.instance_12,p:{scaleY:0.242,y:45.8}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:43.1}},{t:this.instance_1,p:{scaleY:1.055,y:43.2}},{t:this.instance_2,p:{scaleY:1.055,y:43.1}},{t:this.instance_3,p:{scaleY:1.055,y:43.1}},{t:this.instance_4,p:{scaleY:1.055,y:43.1}},{t:this.instance_5,p:{scaleY:1.055,y:43.1}},{t:this.instance_6,p:{scaleY:1.055,y:43.1}},{t:this.instance_10,p:{scaleY:1.055,y:43.1}},{t:this.instance_8,p:{scaleY:1.019,y:43.2}},{t:this.instance_9,p:{scaleY:0.859,y:43.8}},{t:this.instance_7,p:{scaleY:0.698,y:44.3,x:413}},{t:this.instance_11,p:{scaleY:0.538,y:44.8}},{t:this.instance_12,p:{scaleY:0.377,y:45.4}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:43.1}},{t:this.instance_1,p:{scaleY:1.055,y:43.2}},{t:this.instance_2,p:{scaleY:1.055,y:43.1}},{t:this.instance_3,p:{scaleY:1.055,y:43.1}},{t:this.instance_4,p:{scaleY:1.055,y:43.1}},{t:this.instance_5,p:{scaleY:1.055,y:43.1}},{t:this.instance_6,p:{scaleY:1.055,y:43.1}},{t:this.instance_10,p:{scaleY:1.055,y:43.1}},{t:this.instance_8,p:{scaleY:1.055,y:43.1}},{t:this.instance_9,p:{scaleY:0.994,y:43.3}},{t:this.instance_7,p:{scaleY:0.834,y:43.8,x:413}},{t:this.instance_11,p:{scaleY:0.673,y:44.4}},{t:this.instance_12,p:{scaleY:0.513,y:44.9}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:43.1}},{t:this.instance_1,p:{scaleY:1.055,y:43.2}},{t:this.instance_2,p:{scaleY:1.055,y:43.1}},{t:this.instance_3,p:{scaleY:1.055,y:43.1}},{t:this.instance_4,p:{scaleY:1.055,y:43.1}},{t:this.instance_5,p:{scaleY:1.055,y:43.1}},{t:this.instance_6,p:{scaleY:1.055,y:43.1}},{t:this.instance_10,p:{scaleY:1.055,y:43.1}},{t:this.instance_8,p:{scaleY:1.055,y:43.1}},{t:this.instance_9,p:{scaleY:1.055,y:43.1}},{t:this.instance_7,p:{scaleY:0.969,y:43.4,x:413}},{t:this.instance_11,p:{scaleY:0.809,y:43.9}},{t:this.instance_12,p:{scaleY:0.648,y:44.5}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:43.1}},{t:this.instance_1,p:{scaleY:1.055,y:43.2}},{t:this.instance_2,p:{scaleY:1.055,y:43.1}},{t:this.instance_3,p:{scaleY:1.055,y:43.1}},{t:this.instance_4,p:{scaleY:1.055,y:43.1}},{t:this.instance_5,p:{scaleY:1.055,y:43.1}},{t:this.instance_6,p:{scaleY:1.055,y:43.1}},{t:this.instance_10,p:{scaleY:1.055,y:43.1}},{t:this.instance_8,p:{scaleY:1.055,y:43.1}},{t:this.instance_9,p:{scaleY:1.055,y:43.1}},{t:this.instance_7,p:{scaleY:1.055,y:43.1,x:413}},{t:this.instance_11,p:{scaleY:0.944,y:43.5}},{t:this.instance_12,p:{scaleY:0.784,y:44}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:43.1}},{t:this.instance_1,p:{scaleY:1.055,y:43.2}},{t:this.instance_2,p:{scaleY:1.055,y:43.1}},{t:this.instance_3,p:{scaleY:1.055,y:43.1}},{t:this.instance_4,p:{scaleY:1.055,y:43.1}},{t:this.instance_5,p:{scaleY:1.055,y:43.1}},{t:this.instance_6,p:{scaleY:1.055,y:43.1}},{t:this.instance_10,p:{scaleY:1.055,y:43.1}},{t:this.instance_8,p:{scaleY:1.055,y:43.1}},{t:this.instance_9,p:{scaleY:1.055,y:43.1}},{t:this.instance_7,p:{scaleY:1.055,y:43.1,x:413}},{t:this.instance_11,p:{scaleY:1.055,y:43.1}},{t:this.instance_12,p:{scaleY:0.919,y:43.6}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:43.1}},{t:this.instance_1,p:{scaleY:1.055,y:43.2}},{t:this.instance_2,p:{scaleY:1.055,y:43.1}},{t:this.instance_3,p:{scaleY:1.055,y:43.1}},{t:this.instance_4,p:{scaleY:1.055,y:43.1}},{t:this.instance_5,p:{scaleY:1.055,y:43.1}},{t:this.instance_6,p:{scaleY:1.055,y:43.1}},{t:this.instance_10,p:{scaleY:1.055,y:43.1}},{t:this.instance_8,p:{scaleY:1.055,y:43.1}},{t:this.instance_9,p:{scaleY:1.055,y:43.1}},{t:this.instance_7,p:{scaleY:1.055,y:43.1,x:413}},{t:this.instance_11,p:{scaleY:1.055,y:43.1}},{t:this.instance_12,p:{scaleY:1.055,y:43.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.9,24,473.9,38.4);


(lib.Symbol20copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol11copy();
	this.instance.parent = this;
	this.instance.setTransform(44.5,12.3,0.89,0.888,0,0,0,36.5,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7664").s().p("Am8B6IAAj0IN5AAIAAD0g");
	this.shape.setTransform(44.5,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20copy, new cjs.Rectangle(0,0,89,24.5), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(44.5,12.3,0.89,0.888,0,0,0,36.5,7.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am8B6IAAj0IN5AAIAAD0g");
	this.shape.setTransform(44.5,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,89,24.5), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer 5
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(-167.4,-8.2,0.983,0.983,0,0,0,120.4,8.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:-19,alpha:1},5,cjs.Ease.get(1)).wait(5));

	// Layer 7
	this.instance_1 = new lib.Symbol1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-432.6,-14.3,0.417,0.415,0,0,0,171.1,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},4,cjs.Ease.get(1)).wait(15));

	// Layer 4
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-392.9,-27.7,0.355,0.353,0,0,0,265,24.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({y:-20.4,alpha:1},5).wait(10));

	// Layer 1
	this.instance_3 = new lib.Symbol20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(44.5,-5.3,1,1,0,0,0,44.5,12.3);

	this.instance_4 = new lib.Symbol20copy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(25.9,-2.9,1.011,1.01,0,0,0,44.4,12.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0},2,cjs.Ease.get(1)).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({y:-17.5,alpha:1},4).wait(1));

	// Layer 2
	this.instance_5 = new lib.Symbol14();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-419.4,-17.2,0.692,1.8,0,0,0,134.9,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:134.8,scaleX:3.28,x:-71,y:-17.6,alpha:0.648},9,cjs.Ease.get(1)).wait(10));

	// Layer 6
	this.instance_6 = new lib.Symbol22();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-378.6,55.4,1,1,0,0,0,134.8,112.4);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},9,cjs.Ease.get(-0.8)).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-513.4,-57,872.2,80.9);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(0.5,0.1,1,1,0,0,0,44.5,12.3);

	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-69.6,-157.7,1,1,0,0,0,-25.6,-163.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Eg4dALeIAA27MBw6AAAIAAW7g");
	this.shape.setTransform(-243.1,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-12.2,89,24.5);


// stage content:
(lib.HFG_728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		myCounter=1;
	}
	this.frame_243 = function() {
		if(myCounter>=2){
			this.stop();
		}else {
			myCounter++;
			this.gotoAndPlay(1);	
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(243).call(this.frame_243).wait(1));

	// CTA
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(651,73.3,1.168,1.167,0,0,0,-0.1,0.3);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol18(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(141).to({_off:false},0).to({y:60.3,alpha:1},7,cjs.Ease.get(1)).wait(96));

	// upto
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(64.7,-127.9,1.466,1.464);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(131).to({_off:false},0).wait(113));

	// Layer 11
	this.instance_2 = new lib.Symbol21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(375.5,26.6,0.671,0.668,0,0,0,201.1,43.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(108).to({_off:false},0).wait(136));

	// Layer 2
	this.instance_3 = new lib.Symbol1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(94.1,54.5,0.487,0.485,0,0,0,171.2,65.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(85).to({_off:false},0).to({y:49.5,alpha:1},7,cjs.Ease.get(1)).wait(152));

	// url
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(362.4,32.6,1.752,1.747,0,0,0,104.5,12.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33).to({_off:false},0).to({y:40.6,alpha:1},8,cjs.Ease.get(-1)).wait(36).to({x:183.4,alpha:0},8,cjs.Ease.get(1)).wait(159));

	// logo
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(364.2,37.2,0.545,0.543,0,0,0,271.8,30.9);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:45.2,alpha:1},8,cjs.Ease.get(1)).wait(25).to({y:58.2,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(202));

	// logo bg
	this.instance_6 = new lib.Symbol4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(485.9,45.1,16.581,1.538,0,0,0,29.3,29.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(77).to({_off:false},0).to({regY:29.6,scaleX:3.73,x:109.2,y:45.6},9,cjs.Ease.get(1)).wait(158));

	// black bg
	this.instance_7 = new lib.Symbol4copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(485.9,45.1,16.581,1.538,0,0,0,29.3,29.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({_off:false},0).to({alpha:0.648},8).wait(137));

	// bg
	this.instance_8 = new lib.Symbol3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(77).to({_off:false},0).wait(167));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(580,65.4,296,33.3);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 23,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg.jpg", id:"bg"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;