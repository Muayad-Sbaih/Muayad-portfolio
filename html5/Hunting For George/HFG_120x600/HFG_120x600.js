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
p.nominalBounds = new cjs.Rectangle(0,0,300,600);// helper functions:

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


(lib.Symbol123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhgCrIAAlVIDBAAIAABMIhoAAIAAA4IBjAAIAABLIhjAAIAAA6IBoAAIAABMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-17,19.4,34.2);


(lib.Symbol122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhgCrIAAlVIBYAAIAAEJIBpAAIAABMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-17,19.5,34.2);


(lib.Symbol121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhDCqQgfgKgbgTIAmhIQAOAMANAIQANAIAMAEIAaADQASAAANgJQALgJAAgQQAAgOgNgIQgNgHgTgGIgbgJQgbgJgWgSQgXgTAAgrQAAgzAgggQAgggAzAAIAnAEQATADAQAGQARAGARAJIgjBFQgPgMgOgFQgOgGgNAAQgTAAgKAIQgLAJAAANQAAAMANAHQAKAHASAGIAfAKQAcAKAWATQAXASAAAqIgCAZIgLAmQgNAaghARQggAQglAAQghAAgggJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-17.8,25.2,35.8);


(lib.Symbol120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AguCrIAAikIh7ixIBqAAIBABdIA9hdIBsAAIiACxIAACkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34,34.2);


(lib.Symbol119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABTCrIgWg8Ih5AAIgXA8IheAAICDlVIBgAAICAFVgAgjAsIBIAAIgkhsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-17,35.7,34.2);


(lib.Symbol118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiVCrIAAlVICDAAQBDAAAyAzQAzAzAABEQAABFgzAzQgyAzhDAAgAg8BfIAUAAQArAAAagZQAbgaAAgsQAAgSgGgSQgGgRgMgNQgTgVgXgDQgYgEgaAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-17,30,34.2);


(lib.Symbol117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiBCCQgxgzAAhOQAAhQAzgzQAzgzBPAAQA5AAAmAXQAmAXAYAyIhUAjQgMgcgSgNQgSgNgaAAQgkAAgaAeQgZAeAAAtQAAAvAaAfQAZAeAnAAQAfAAARgPQASgPAFgeIhKAAIAAhDICxAAQgBAsgGAcQgGAcgQAYIgDAEQgZAmglARQgkARg2AAQhKAAgyg0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-18.1,35.8,36.3);


(lib.Symbol116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABSCrIijjQIAADQIhYAAIAAlVIBYAAICjDQIAAjQIBYAAIAAFVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34.1,34.2);


(lib.Symbol115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrCrIAAlVIBXAAIAAFVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-17,8.9,34.2);


(lib.Symbol114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhAAiIAAhDICBAAIAABDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-3.4,13,6.8);


(lib.Symbol113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABLCrIhJhvIhMBvIhrAAICFi2IhtifIBtAAIAzBZIA0hZIBtAAIhvCfICBC2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-17,36.4,34.2);


(lib.Symbol112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiGCCQg2g0AAhOQAAhNA1g0QA3g0BQAAQBRAAA1A0QA3A0AABNQAABOg3A0Qg1A0hRAAQhQAAg2g0gAhDhDQgdAcABAnQgBAoAdAcQAdAcAmAAQAoAAAcgcQAcgcAAgoQAAgngcgcQgcgcgoAAQgnAAgcAcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-18.1,37.8,36.3);


(lib.Symbol111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiBCrIAAlVICDAAQAvAAAYAYQAYAXAAAtQAAAYgJAQQgIAQgUALQAjAHASAUQARAUAAAkQAAAvggAaQgfAag3AAgAgoBmIATAAQAfAAAPgJQAPgIAAgTQAAgVgOgHQgNgIgjAAIgSAAgAgogjIARgBQAPgBAMgGQANgGAAgTQAAgUgNgGQgMgHgPAAIgRgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-17,26,34.2);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACHCmIAAi5QAAgVgJgNQgJgNgTAAQgPAAgLAJQgLAKgFAQIAADFIhvAAIAAi5QAAgVgJgNQgKgNgSAAQgPAAgMAJQgMAKgDAQIAADFIhyAAIAAlEIByAAIAAAbQAMgQAWgJQAXgJAbAAQA4AAAgAnQAlgnBAAAQAzAAAdAgQAeAgAAA3IAADUg");
	this.shape.setTransform(85.4,12.6,0.755,0.755);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah3B7QgvgwAAhLQAAhLAvgvQAugvBJAAQBKAAAvAvQAtAvAABLQAABMgtAvQgvAvhKAAQhJAAgugvgAgng2QgOAVAAAhQAAAiAOAVQAOAVAZAAQAaAAAPgVQAOgVAAgiQAAgigOgUQgPgWgaAAQgZAAgOAWg");
	this.shape_1.setTransform(50.7,12.8,0.755,0.755);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhvB7QgtgvAAhMQAAhLAtgvQAtgvBJAAQBAAAAoAkQAnAiAIA6IhuAAQgCgPgLgJQgLgKgRAAQgXAAgOAVQgOAUAAAiQAAAjAOAUQAOAUAXAAQARAAALgJQALgJACgPIBuAAQgIA6gnAiQgoAkhAAAQhJAAgtgvg");
	this.shape_2.setTransform(24.2,12.8,0.755,0.755);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguAwQgUgUAAgcQAAgcAUgTQATgUAbABQAcgBATAUQAUATAAAcQAAAdgUATQgTATgcABQgbgBgTgTg");
	this.shape_3.setTransform(5.1,20.4,0.755,0.755);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,104.2,25.7), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgTQAAgSALgOQALgOATAAQAUAAALANQALAOAAASIAAABIAAABIgBAAIAAABIhDAAQABAMAHAJQAIAJAMgBQAJAAAHgEQAGgGAEgIIANAHQgHANgKAFQgKAHgNAAQgTAAgMgNgAgQgZQgIAHgBAKIAzAAQgCgKgGgHQgIgHgJAAQgJAAgIAHg");
	this.shape.setTransform(80.8,76.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqAtIAAgyIAAgCIAAgDQAAgIgDgGQgDgGgKAAQgKAAgEAHQgEAHAAAJIAAADIAAAEIAAAtIgOAAIAAgxIAAgEIgBgEQAAgHgEgFQgDgGgIAAQgKAAgEAHQgEAHgBAIIAAAFIAAADIAAAtIgPAAIAAhXIAPAAIAAAKIAAAAQAEgFAFgEQAFgDAHAAQAIAAAGAEQAGAEADAHQAEgIAHgDQAHgEAIAAQARAAAGAMQAFALAAAOIAAA0g");
	this.shape_1.setTransform(68.8,76.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAgQgNgNAAgSQAAgTANgOQAOgNASAAQATAAAOANQANAOAAATQAAASgOANQgNAOgTAAQgSAAgOgOgAgVgWQgJAKAAAMQAAANAJAKQAIAKANgBQAOABAIgKQAJgKAAgNQAAgMgJgKQgIgKgOAAQgNABgIAJg");
	this.shape_2.setTransform(56.4,76.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAoQgHgGgEgKIANgFQADAFADAEQAEAEAHAAQAGAAAEgEQAEgDAAgGQAAgGgFgDQgEgEgGgDIgCgBIgBAAQgIgDgGgEQgHgFABgLQAAgKAHgHQAIgHAJAAQAIAAAGAEQAHAGADAGIgMAGQgCgDgEgCQgCgEgFAAIAAAAIAAAAQgDABgEADQgDACAAAEQABAFAEADQAEADAFACIADACIADAAQAHAEAHAFQAGAEAAAMQAAAMgIAIQgKAIgMAAQgJAAgJgGg");
	this.shape_3.setTransform(47.5,76.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgTQAAgSALgOQALgOATAAQAUAAALANQALAOAAASIAAABIAAABIgBAAIAAABIhDAAQABAMAHAJQAIAJALgBQAKAAAHgEQAGgGAEgIIANAHQgHANgKAFQgKAHgNAAQgTAAgMgNgAgQgZQgHAHgCAKIAzAAQgCgKgGgHQgIgHgJAAQgKAAgHAHg");
	this.shape_4.setTransform(39,76.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAgOIgaBAIgrhdIARAAIAaA6IAahAIAbBAIAag6IARAAIgrBdg");
	this.shape_5.setTransform(27.1,76.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAgQgMgOAAgRQAAgTAMgOQALgNAUAAQAHAAAJAEQAHAEAFAHIABgBIAAgMIAPAAIAABXIgPAAIAAgNIgBAAQgFAIgHAEQgJADgHAAQgUAAgLgOgAgTgWQgIAKAAAMQAAAMAIAKQAGALANgBQAPAAAHgKQAIgJgBgNQAAgNgHgJQgIgKgOAAQgMABgHAJg");
	this.shape_6.setTransform(14.4,76.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAhQgMgNAAgTQAAgSALgOQALgOATAAQAUAAALAOQALANAAASIAAAAIAAABIAAABIAAABIhEAAQABANAHAIQAIAJALAAQAKAAAGgGQAHgFAEgHIANAHQgGALgLAHQgKAGgOAAQgSAAgLgNgAgQgZQgIAHgBAJIAzAAQgBgJgIgHQgHgGgKAAQgJAAgHAGg");
	this.shape_7.setTransform(48.7,55.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAqAtIAAgyIAAgCIAAgDQAAgIgDgGQgDgGgKAAQgKAAgEAHQgEAHAAAJIAAADIAAAEIAAAtIgOAAIAAgxIAAgEIgBgEQAAgHgEgFQgDgGgIAAQgKAAgEAHQgEAHgBAIIAAAFIAAADIAAAtIgPAAIAAhXIAPAAIAAAKIAAAAQAEgFAFgEQAFgDAHAAQAIAAAGAEQAGAEADAHQAEgIAHgDQAHgEAIAAQARAAAGAMQAFALAAAOIAAA0g");
	this.shape_8.setTransform(36.6,55.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggAhQgNgNAAgUQAAgSANgNQAOgOASAAQATAAAOAOQANANAAASQAAAUgOANQgNANgTAAQgSAAgOgNgAgVgVQgJAJAAAMQAAAOAJAJQAIAKANAAQAOAAAIgKQAJgJAAgOQAAgMgJgKQgIgKgOABQgNAAgIAKg");
	this.shape_9.setTransform(24.3,55.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUBMIAAgwQAAgLgCgIQgDgJgOABQgMAAgEAJQgDAIgBAKIAAADIAAAEIAAApIgPAAIAAiYIAPAAIAABMIABAAQAEgFAGgEQAGgDAHAAQASAAAGALQAGALAAAPIAAAzg");
	this.shape_10.setTransform(14.3,52.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAtIAAhXIAPAAIAAAKIAAAAIABgBIABgBQADgFADgCQAEgDAHAAIAFABIAGACIABABIABAAIgHAOIgBgBIgCgBIgDgBIgDgBQgIAAgDAGQgDAGgBAIIgBAGIAAAFIAAAsg");
	this.shape_11.setTransform(42.2,32.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaAiQgIgLABgRIAAgyIAOAAIAAAwQAAALAEAIQACAJANAAQANAAADgJQAEgIAAgLIAAgwIAOAAIAAAyQABARgIALQgIALgTAAQgSAAgIgLg");
	this.shape_12.setTransform(33.8,33.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AggAhQgNgNAAgUQAAgSANgNQAOgOASAAQATAAAOAOQANANAAASQAAAUgOANQgNANgTAAQgSAAgOgNgAgVgVQgJAJAAAMQAAAOAJAJQAIAKANAAQAOAAAIgKQAJgJAAgOQAAgMgJgKQgIgKgOABQgNAAgIAKg");
	this.shape_13.setTransform(23.8,33);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiBEIAcg5IgohOIASAAIAdA/IAdg/IARAAIhACHg");
	this.shape_14.setTransform(14,35.4);

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

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(7.7,-4.8,79.7,92.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhbCiIAAlCIC3AAIAABHIhkAAIAAA2IBbAAIAABFIhbAAIAACAg");
	this.shape.setTransform(77.7,110.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhbCiIAAlCIC3AAIAABHIhkAAIAAA2IBbAAIAABFIhbAAIAACAg");
	this.shape_1.setTransform(54.2,110.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah/B7QgzgxAAhKQAAhIAzgxQAzgyBMAAQBMAAA0AyQAzAxAABIQAABKgzAxQg0AxhMAAQhMAAgzgxgAhAg/QgaAbAAAkQAAAmAbAaQAbAbAkAAQAmAAAagbQAbgaAAgmQAAgkgbgbQgagbgmAAQglAAgbAbg");
	this.shape_2.setTransform(21.8,110.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAwCPQgYgVAAgkQAAgkAYgWQAYgVAoAAQAoAAAYAWQAZAVAAAkQAAAkgZAVQgZAWgnAAQgoAAgYgWgABWA8QgKALAAAPQAAAPAKAKQALALAPAAQAPAAALgLQAKgKAAgPQAAgPgKgLQgLgLgPAAQgPAAgLALgAhyChIC6lCIAqAAIi6FCgAiwgcQgYgVAAgkQAAgkAYgVQAZgWAoAAQAnAAAZAWQAYAVAAAkQAAAjgZAWQgYAWgnAAQgoAAgZgWgAiJhvQgLALAAAPQAAAPALALQAKAKAQAAQAPAAAKgKQALgLAAgPQAAgQgLgKQgKgKgPAAQgQAAgKAKg");
	this.shape_3.setTransform(81.7,66.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2ChQgZgMgUgZQgTgYgJgeQgJgeAAgoQAAgnAJgeQAJgeATgXQAUgZAZgNQAZgMAeAAQAdAAAaAMQAZANATAZQAUAXAIAeQAJAeAAAnQAAAogJAeQgIAegUAYQgTAZgZAMQgaAMgdAAQgeAAgZgMgAgmhGQgOAbAAAsQAAAsAOAcQAPAbAYAAQAXAAAPgbQAPgcAAgsQAAgsgPgbQgPgcgXAAQgYAAgPAcg");
	this.shape_4.setTransform(45.6,66.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiKChICSj7IiFAAIAAhHIEIAAIi5FCg");
	this.shape_5.setTransform(18,66.8);

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

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,143.9,139.6), null);


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

	// Layer 2
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-70,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-70,0,300,600), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah6DnQgxgggOg7IB8gNQALAnAwAAQBBAAAAhHIAAgaQggAkg4AAQhNABgug2QgsgzAAhPQAAhQAsgzQAug1BNAAQA5AAAfAkIAAgcICCAAIAAFBQAABhg3AyQg0AxhYAAQhIAAgwgggAgsiIQgSAWAAAkQAAAkASAWQATAVAfAAQATAAAQgIQAOgJAIgOIAAhhQgIgNgOgJQgQgJgTAAQgfgBgTAXg");
	this.shape.setTransform(243.4,42.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah6DnQgxgggOg7IB8gNQALAoAwAAQBBAAAAhHIAAgbQgOAQgVAKQgZALgcAAQhNAAgug2QgsgzAAhPQAAhQAsgzQAug1BNAAQAcAAAZALQAVAKAOAQIAAgdICCAAIAAFCQAABfg3A0Qg0AwhYAAQhIAAgwgggAgsiIQgSAWAAAkQAAAkASAWQATAWAfAAQATAAAQgJQAOgJAIgNIAAhiQgIgNgOgIQgQgKgTAAQgfAAgTAWg");
	this.shape_1.setTransform(283.4,104.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiqC/QhHhKAAh1QAAgUADgbQAPhhBEg8QBEg8BhAAQBbAAA8AuQA3AsATBLIiGAPQgXg+hEAAQgmAAgdAXQgbAWgMAnQgKAeAAAgQAABDAgAoQAhApA1AAQAmAAAZgSQAZgRAJgeIhXAAIAAhkIDcAAIAAAyQAABqhABAQg/A+hnAAQhvAAhHhKg");
	this.shape_2.setTransform(128.9,90.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhNBkIAAiQIg3AAIAAhmIA3AAIAAhLICAgPIAABaIBPAAIAABmIhPAAIAAB9QAAApApAAQAXAAASgIIAABvQgaAMguAAQiKAAAAiJg");
	this.shape_3.setTransform(148.2,32);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABfEAIAAjdIi9AUIAADJIiHAAIAAoAICHAAIAADFIC9gUIAAixICHAAIAAIAg");
	this.shape_4.setTransform(26.3,29.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhBC8IAAl3QAfARAiAAQAkAAAegQIAAF2g");
	this.shape_5.setTransform(172.4,36.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzA0QgWgVAAgeQAAgfAWgVQAVgSAegBQAfABAVASQAWAVAAAfQAAAegWAVQgVATgfAAQgeAAgVgTg");
	this.shape_6.setTransform(172.5,7.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgzA0QgWgVAAgeQAAgfAWgVQAVgSAegBQAfABAVASQAWAVAAAfQAAAegWAVQgVATgfAAQgeAAgVgTg");
	this.shape_7.setTransform(172.5,7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiDCOQg1g1AAhZQAAhVA2g3QA1g3BRAAQBVAAAxA0QAvAzAABWIAAAfIjzAAQAEAiAQASQARASAcgBQAsAAALglIB5AAQgKBBguAlQgvAlhJAAQhWAAg0g2gAg3gnIBxAAQgCgYgOgPQgOgQgYAAQguABgNA2g");
	this.shape_8.setTransform(324.5,97.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah9DAIAAl3ICCAAIAAAhQAfgpA2AAQAYAAAMAGIAAB+QgXgLgfAAQgbAAgSALQgRALgFAVIAADbg");
	this.shape_9.setTransform(250.3,97.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiKCOQg1g3AAhXQAAhWA1g2QA2g3BUAAQBWAAA1A3QA1A2AABWQAABXg1A3Qg1A2hWAAQhUAAg2g2gAgtg/QgRAYAAAnQAAAoARAYQAQAYAdAAQAeAAARgYQARgYAAgoQAAgngRgYQgRgYgeAAQgdAAgQAYg");
	this.shape_10.setTransform(215,97.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiDCOQg1g1AAhZQAAhVA2g3QA1g3BRAAQBVAAAxA0QAvAzAABWIAAAfIjzAAQAEAiAQASQARASAcgBQAsAAALglIB5AAQgKBBgvAlQguAlhJAAQhWAAg0g2gAg3gnIBxAAQgCgYgOgPQgOgQgYAAQguABgNA2g");
	this.shape_11.setTransform(174.6,97.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah9DAIAAl3ICCAAIAAAhQAfgpA2AAQAYAAAMAGIAAB+QgXgLgfAAQgbAAgSALQgRALgFAVIAADbg");
	this.shape_12.setTransform(81.2,97.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiKCOQg1g3AAhXQAAhWA1g2QA2g3BUAAQBWAAA1A3QA1A2AABWQAABXg1A3Qg1A2hWAAQhUAAg2g2gAgtg/QgRAYAAAnQAAAoARAYQAQAYAdAAQAeAAARgYQARgYAAgoQAAgngRgYQgRgYgeAAQgcAAgRAYg");
	this.shape_13.setTransform(45.9,97.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhLETIAAkSIg4AAIAAhlIA4AAIAAgbQAAhEAngoQAmgoBFAAQAiABAbAJIAABrQgOgHgRAAQgWAAgMAMQgNALAAAWIAAAUIBJAAIAABlIhJAAIAAESg");
	this.shape_14.setTransform(13.2,89);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA0DAIAAjVQAAgZgMgOQgNgPgYAAQgTAAgPALQgPALgEATIAADiIiEAAIAAl3ICEAAIAAAhQAQgTAagLQAagLAfAAQA/AAAjAlQAkAlgBBAIAAD1g");
	this.shape_15.setTransform(202.7,35.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA0DAIAAjVQAAgZgMgOQgNgPgYAAQgTAAgOALQgPALgFATIAADiIiEAAIAAl3ICEAAIAAAhQAQgTAagLQAagLAgAAQA+AAAkAlQAjAlAABAIAAD1g");
	this.shape_16.setTransform(114.1,35.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiSCbQgjgmAAg/IAAj1ICDAAIAADWQAAAZALAPQANAPAYAAQASAAAOgLQAQgMAFgTIAAjjICDAAIAAF3IiDAAIAAghQgQASgaAMQgbALgfAAQg9AAgkglg");
	this.shape_17.setTransform(72.3,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,343,130.6), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer 8
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(166.6,143.5,0.496,0.494,0,0,0,92.5,51.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:92.7,regY:52,scaleX:0.41,scaleY:0.41,x:166.7,y:143.4},6,cjs.Ease.get(1)).to({regX:92.3,regY:51.6,scaleX:0.5,scaleY:0.49,x:166.6,y:143.3},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120.8,117.9,71.4,69);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(134.9,112.4,0.899,0.899,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-62.9,0,269.8,539.5), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(25).call(this.frame_25).wait(1));

	// Layer 2
	this.instance = new lib.Symbol111("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(16.2,151.8,1.055,0.116);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance.cache(-15,-19,30,38);

	this.instance_1 = new lib.Symbol112("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.2,151.9,1.055,0.081);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_1.cache(-21,-20,42,40);

	this.instance_2 = new lib.Symbol113("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(95.5,152.1,1.055,0.046);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_2.cache(-20,-19,40,38);

	this.instance_3 = new lib.Symbol114("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(121.5,151.9,1.055,0.012);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_3.cache(-8,-5,17,11);

	this.instance_4 = new lib.Symbol115("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(7.2,201.7,1.055,0.093);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_4.cache(-6,-19,13,38);

	this.instance_5 = new lib.Symbol116("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(37.4,201.8,1.055,0.058);
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_5.cache(-19,-19,38,38);

	this.instance_6 = new lib.Symbol117("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(80.2,201.9,1.055,0.023);
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_6.cache(-20,-20,40,40);

	this.instance_7 = new lib.Symbol118("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(18.3,251.4,1.055,0.104);
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_7.cache(-17,-19,34,38);

	this.instance_8 = new lib.Symbol119("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(55.5,251.5,1.055,0.07);
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_8.cache(-20,-19,40,38);

	this.instance_9 = new lib.Symbol120("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(91.9,251.6,1.055,0.035);
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_9.cache(-19,-19,38,38);

	this.instance_10 = new lib.Symbol121("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-15.7,-301.4,0,0);
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_10.cache(-15,-20,29,40);

	this.instance_11 = new lib.Symbol119("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(55.5,249.9,1.055,0.533);
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_11.cache(-20,-19,40,38);

	this.instance_12 = new lib.Symbol122("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(83.6,301.3,1.055,0.046);
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_12.cache(-12,-19,24,38);

	this.instance_13 = new lib.Symbol123("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(108.9,301.4,1.055,0.012);
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_13.cache(-12,-19,23,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleY:0.116,y:151.8}}]}).to({state:[{t:this.instance,p:{scaleY:0.232,y:151.4}},{t:this.instance_1,p:{scaleY:0.081,y:151.9}}]},1).to({state:[{t:this.instance,p:{scaleY:0.348,y:151.1}},{t:this.instance_1,p:{scaleY:0.197,y:151.6}},{t:this.instance_2,p:{scaleY:0.046,y:152.1}}]},1).to({state:[{t:this.instance,p:{scaleY:0.464,y:150.7}},{t:this.instance_1,p:{scaleY:0.313,y:151.2}},{t:this.instance_2,p:{scaleY:0.162,y:151.7}},{t:this.instance_3,p:{scaleY:0.012,y:151.9}}]},1).to({state:[{t:this.instance,p:{scaleY:0.579,y:150.3}},{t:this.instance_1,p:{scaleY:0.429,y:150.8}},{t:this.instance_2,p:{scaleY:0.278,y:151.3}},{t:this.instance_3,p:{scaleY:0.127,y:152.2}}]},1).to({state:[{t:this.instance,p:{scaleY:0.695,y:149.9}},{t:this.instance_1,p:{scaleY:0.545,y:150.4}},{t:this.instance_2,p:{scaleY:0.394,y:150.9}},{t:this.instance_3,p:{scaleY:0.243,y:152.4}},{t:this.instance_4,p:{scaleY:0.093,y:201.7}}]},1).to({state:[{t:this.instance,p:{scaleY:0.811,y:149.5}},{t:this.instance_1,p:{scaleY:0.661,y:150.1}},{t:this.instance_2,p:{scaleY:0.51,y:150.5}},{t:this.instance_3,p:{scaleY:0.359,y:152.6}},{t:this.instance_4,p:{scaleY:0.209,y:201.3}},{t:this.instance_5,p:{scaleY:0.058,y:201.8}}]},1).to({state:[{t:this.instance,p:{scaleY:0.927,y:149.1}},{t:this.instance_1,p:{scaleY:0.777,y:149.7}},{t:this.instance_2,p:{scaleY:0.626,y:150.1}},{t:this.instance_3,p:{scaleY:0.475,y:152.8}},{t:this.instance_4,p:{scaleY:0.325,y:200.9}},{t:this.instance_5,p:{scaleY:0.174,y:201.4}},{t:this.instance_6,p:{scaleY:0.023,y:201.9}}]},1).to({state:[{t:this.instance,p:{scaleY:1.043,y:148.7}},{t:this.instance_1,p:{scaleY:0.892,y:149.3}},{t:this.instance_2,p:{scaleY:0.742,y:149.7}},{t:this.instance_3,p:{scaleY:0.591,y:153.1}},{t:this.instance_4,p:{scaleY:0.44,y:200.5}},{t:this.instance_5,p:{scaleY:0.29,y:201}},{t:this.instance_6,p:{scaleY:0.139,y:201.5}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:148.7}},{t:this.instance_1,p:{scaleY:1.008,y:148.9}},{t:this.instance_2,p:{scaleY:0.858,y:149.4}},{t:this.instance_3,p:{scaleY:0.707,y:153.3}},{t:this.instance_4,p:{scaleY:0.556,y:200.1}},{t:this.instance_5,p:{scaleY:0.406,y:200.6}},{t:this.instance_6,p:{scaleY:0.255,y:201.1}},{t:this.instance_7,p:{scaleY:0.104,y:251.4}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:148.7}},{t:this.instance_1,p:{scaleY:1.055,y:148.8}},{t:this.instance_2,p:{scaleY:0.974,y:149}},{t:this.instance_3,p:{scaleY:0.823,y:153.5}},{t:this.instance_4,p:{scaleY:0.672,y:199.7}},{t:this.instance_5,p:{scaleY:0.522,y:200.2}},{t:this.instance_6,p:{scaleY:0.371,y:200.7}},{t:this.instance_7,p:{scaleY:0.22,y:251}},{t:this.instance_8,p:{scaleY:0.07,y:251.5,x:55.5}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:148.7}},{t:this.instance_1,p:{scaleY:1.055,y:148.8}},{t:this.instance_2,p:{scaleY:1.055,y:148.7}},{t:this.instance_3,p:{scaleY:0.939,y:153.7}},{t:this.instance_4,p:{scaleY:0.788,y:199.3}},{t:this.instance_5,p:{scaleY:0.637,y:199.8}},{t:this.instance_6,p:{scaleY:0.487,y:200.4}},{t:this.instance_7,p:{scaleY:0.336,y:250.6}},{t:this.instance_8,p:{scaleY:0.185,y:251.1,x:55.5}},{t:this.instance_9,p:{scaleY:0.035,y:251.6}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:148.7}},{t:this.instance_1,p:{scaleY:1.055,y:148.8}},{t:this.instance_2,p:{scaleY:1.055,y:148.7}},{t:this.instance_3,p:{scaleY:1.055,y:153.9}},{t:this.instance_4,p:{scaleY:0.904,y:199}},{t:this.instance_5,p:{scaleY:0.753,y:199.5}},{t:this.instance_6,p:{scaleY:0.603,y:200}},{t:this.instance_7,p:{scaleY:0.452,y:250.2}},{t:this.instance_8,p:{scaleY:0.301,y:250.7,x:55.5}},{t:this.instance_9,p:{scaleY:0.151,y:251.2}},{t:this.instance_10,p:{scaleX:0,scaleY:0,x:-15.7,y:-301.4}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:148.7}},{t:this.instance_1,p:{scaleY:1.055,y:148.8}},{t:this.instance_2,p:{scaleY:1.055,y:148.7}},{t:this.instance_3,p:{scaleY:1.055,y:153.9}},{t:this.instance_4,p:{scaleY:1.02,y:198.6}},{t:this.instance_5,p:{scaleY:0.869,y:199.1}},{t:this.instance_6,p:{scaleY:0.719,y:199.6}},{t:this.instance_7,p:{scaleY:0.568,y:249.8}},{t:this.instance_8,p:{scaleY:0.417,y:250.3,x:55.5}},{t:this.instance_9,p:{scaleY:0.267,y:250.8}},{t:this.instance_10,p:{scaleX:1.055,scaleY:0.116,x:15.8,y:301.1}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:148.7}},{t:this.instance_1,p:{scaleY:1.055,y:148.8}},{t:this.instance_2,p:{scaleY:1.055,y:148.7}},{t:this.instance_3,p:{scaleY:1.055,y:153.9}},{t:this.instance_4,p:{scaleY:1.055,y:198.5}},{t:this.instance_5,p:{scaleY:0.985,y:198.7}},{t:this.instance_6,p:{scaleY:0.834,y:199.2}},{t:this.instance_7,p:{scaleY:0.684,y:249.4}},{t:this.instance_11,p:{scaleY:0.533,y:249.9}},{t:this.instance_9,p:{scaleY:0.382,y:250.4}},{t:this.instance_10,p:{scaleX:1.055,scaleY:0.232,x:15.8,y:300.7}},{t:this.instance_8,p:{scaleY:0.081,y:301.2,x:50.4}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:148.7}},{t:this.instance_1,p:{scaleY:1.055,y:148.8}},{t:this.instance_2,p:{scaleY:1.055,y:148.7}},{t:this.instance_3,p:{scaleY:1.055,y:153.9}},{t:this.instance_4,p:{scaleY:1.055,y:198.5}},{t:this.instance_5,p:{scaleY:1.055,y:198.5}},{t:this.instance_6,p:{scaleY:0.95,y:198.8}},{t:this.instance_7,p:{scaleY:0.8,y:249.1}},{t:this.instance_11,p:{scaleY:0.649,y:249.6}},{t:this.instance_9,p:{scaleY:0.498,y:250.1}},{t:this.instance_10,p:{scaleX:1.055,scaleY:0.348,x:15.8,y:300.3}},{t:this.instance_8,p:{scaleY:0.197,y:300.8,x:50.4}},{t:this.instance_12,p:{scaleY:0.046,y:301.3}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:148.7}},{t:this.instance_1,p:{scaleY:1.055,y:148.8}},{t:this.instance_2,p:{scaleY:1.055,y:148.7}},{t:this.instance_3,p:{scaleY:1.055,y:153.9}},{t:this.instance_4,p:{scaleY:1.055,y:198.5}},{t:this.instance_5,p:{scaleY:1.055,y:198.5}},{t:this.instance_6,p:{scaleY:1.055,y:198.5}},{t:this.instance_7,p:{scaleY:0.916,y:248.7}},{t:this.instance_11,p:{scaleY:0.765,y:249.2}},{t:this.instance_9,p:{scaleY:0.614,y:249.7}},{t:this.instance_10,p:{scaleX:1.055,scaleY:0.464,x:15.8,y:299.9}},{t:this.instance_8,p:{scaleY:0.313,y:300.4,x:50.4}},{t:this.instance_12,p:{scaleY:0.162,y:300.9}},{t:this.instance_13,p:{scaleY:0.012,y:301.4}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:148.7}},{t:this.instance_1,p:{scaleY:1.055,y:148.8}},{t:this.instance_2,p:{scaleY:1.055,y:148.7}},{t:this.instance_3,p:{scaleY:1.055,y:153.9}},{t:this.instance_4,p:{scaleY:1.055,y:198.5}},{t:this.instance_5,p:{scaleY:1.055,y:198.5}},{t:this.instance_6,p:{scaleY:1.055,y:198.5}},{t:this.instance_7,p:{scaleY:1.032,y:248.3}},{t:this.instance_11,p:{scaleY:0.881,y:248.8}},{t:this.instance_9,p:{scaleY:0.73,y:249.3}},{t:this.instance_10,p:{scaleX:1.055,scaleY:0.579,x:15.8,y:299.5}},{t:this.instance_8,p:{scaleY:0.429,y:300,x:50.4}},{t:this.instance_12,p:{scaleY:0.278,y:300.5}},{t:this.instance_13,p:{scaleY:0.127,y:301}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:148.7}},{t:this.instance_1,p:{scaleY:1.055,y:148.8}},{t:this.instance_2,p:{scaleY:1.055,y:148.7}},{t:this.instance_3,p:{scaleY:1.055,y:153.9}},{t:this.instance_4,p:{scaleY:1.055,y:198.5}},{t:this.instance_5,p:{scaleY:1.055,y:198.5}},{t:this.instance_6,p:{scaleY:1.055,y:198.5}},{t:this.instance_7,p:{scaleY:1.055,y:248.2}},{t:this.instance_11,p:{scaleY:0.997,y:248.4}},{t:this.instance_9,p:{scaleY:0.846,y:248.9}},{t:this.instance_10,p:{scaleX:1.055,scaleY:0.695,x:15.8,y:299.2}},{t:this.instance_8,p:{scaleY:0.545,y:299.7,x:50.4}},{t:this.instance_12,p:{scaleY:0.394,y:300.2}},{t:this.instance_13,p:{scaleY:0.243,y:300.7}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:148.7}},{t:this.instance_1,p:{scaleY:1.055,y:148.8}},{t:this.instance_2,p:{scaleY:1.055,y:148.7}},{t:this.instance_3,p:{scaleY:1.055,y:153.9}},{t:this.instance_4,p:{scaleY:1.055,y:198.5}},{t:this.instance_5,p:{scaleY:1.055,y:198.5}},{t:this.instance_6,p:{scaleY:1.055,y:198.5}},{t:this.instance_7,p:{scaleY:1.055,y:248.2}},{t:this.instance_11,p:{scaleY:1.055,y:248.2}},{t:this.instance_9,p:{scaleY:0.962,y:248.5}},{t:this.instance_10,p:{scaleX:1.055,scaleY:0.811,x:15.8,y:298.8}},{t:this.instance_8,p:{scaleY:0.661,y:299.3,x:50.4}},{t:this.instance_12,p:{scaleY:0.51,y:299.8}},{t:this.instance_13,p:{scaleY:0.359,y:300.3}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:148.7}},{t:this.instance_1,p:{scaleY:1.055,y:148.8}},{t:this.instance_2,p:{scaleY:1.055,y:148.7}},{t:this.instance_3,p:{scaleY:1.055,y:153.9}},{t:this.instance_4,p:{scaleY:1.055,y:198.5}},{t:this.instance_5,p:{scaleY:1.055,y:198.5}},{t:this.instance_6,p:{scaleY:1.055,y:198.5}},{t:this.instance_7,p:{scaleY:1.055,y:248.2}},{t:this.instance_11,p:{scaleY:1.055,y:248.2}},{t:this.instance_9,p:{scaleY:1.055,y:248.2}},{t:this.instance_10,p:{scaleX:1.055,scaleY:0.927,x:15.8,y:298.4}},{t:this.instance_8,p:{scaleY:0.777,y:298.9,x:50.4}},{t:this.instance_12,p:{scaleY:0.626,y:299.4}},{t:this.instance_13,p:{scaleY:0.475,y:299.9}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:148.7}},{t:this.instance_1,p:{scaleY:1.055,y:148.8}},{t:this.instance_2,p:{scaleY:1.055,y:148.7}},{t:this.instance_3,p:{scaleY:1.055,y:153.9}},{t:this.instance_4,p:{scaleY:1.055,y:198.5}},{t:this.instance_5,p:{scaleY:1.055,y:198.5}},{t:this.instance_6,p:{scaleY:1.055,y:198.5}},{t:this.instance_7,p:{scaleY:1.055,y:248.2}},{t:this.instance_11,p:{scaleY:1.055,y:248.2}},{t:this.instance_9,p:{scaleY:1.055,y:248.2}},{t:this.instance_10,p:{scaleX:1.055,scaleY:1.043,x:15.8,y:298}},{t:this.instance_8,p:{scaleY:0.892,y:298.5,x:50.4}},{t:this.instance_12,p:{scaleY:0.742,y:299}},{t:this.instance_13,p:{scaleY:0.591,y:299.5}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:148.7}},{t:this.instance_1,p:{scaleY:1.055,y:148.8}},{t:this.instance_2,p:{scaleY:1.055,y:148.7}},{t:this.instance_3,p:{scaleY:1.055,y:153.9}},{t:this.instance_4,p:{scaleY:1.055,y:198.5}},{t:this.instance_5,p:{scaleY:1.055,y:198.5}},{t:this.instance_6,p:{scaleY:1.055,y:198.5}},{t:this.instance_7,p:{scaleY:1.055,y:248.2}},{t:this.instance_11,p:{scaleY:1.055,y:248.2}},{t:this.instance_9,p:{scaleY:1.055,y:248.2}},{t:this.instance_10,p:{scaleX:1.055,scaleY:1.055,x:15.8,y:298}},{t:this.instance_8,p:{scaleY:1.008,y:298.1,x:50.4}},{t:this.instance_12,p:{scaleY:0.858,y:298.6}},{t:this.instance_13,p:{scaleY:0.707,y:299.1}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:148.7}},{t:this.instance_1,p:{scaleY:1.055,y:148.8}},{t:this.instance_2,p:{scaleY:1.055,y:148.7}},{t:this.instance_3,p:{scaleY:1.055,y:153.9}},{t:this.instance_4,p:{scaleY:1.055,y:198.5}},{t:this.instance_5,p:{scaleY:1.055,y:198.5}},{t:this.instance_6,p:{scaleY:1.055,y:198.5}},{t:this.instance_7,p:{scaleY:1.055,y:248.2}},{t:this.instance_11,p:{scaleY:1.055,y:248.2}},{t:this.instance_9,p:{scaleY:1.055,y:248.2}},{t:this.instance_10,p:{scaleX:1.055,scaleY:1.055,x:15.8,y:298}},{t:this.instance_8,p:{scaleY:1.055,y:298,x:50.4}},{t:this.instance_12,p:{scaleY:0.974,y:298.2}},{t:this.instance_13,p:{scaleY:0.823,y:298.7}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:148.7}},{t:this.instance_1,p:{scaleY:1.055,y:148.8}},{t:this.instance_2,p:{scaleY:1.055,y:148.7}},{t:this.instance_3,p:{scaleY:1.055,y:153.9}},{t:this.instance_4,p:{scaleY:1.055,y:198.5}},{t:this.instance_5,p:{scaleY:1.055,y:198.5}},{t:this.instance_6,p:{scaleY:1.055,y:198.5}},{t:this.instance_7,p:{scaleY:1.055,y:248.2}},{t:this.instance_11,p:{scaleY:1.055,y:248.2}},{t:this.instance_9,p:{scaleY:1.055,y:248.2}},{t:this.instance_10,p:{scaleX:1.055,scaleY:1.055,x:15.8,y:298}},{t:this.instance_8,p:{scaleY:1.055,y:298,x:50.4}},{t:this.instance_12,p:{scaleY:1.055,y:298}},{t:this.instance_13,p:{scaleY:0.939,y:298.3}}]},1).to({state:[{t:this.instance,p:{scaleY:1.055,y:148.7}},{t:this.instance_1,p:{scaleY:1.055,y:148.8}},{t:this.instance_2,p:{scaleY:1.055,y:148.7}},{t:this.instance_3,p:{scaleY:1.055,y:153.9}},{t:this.instance_4,p:{scaleY:1.055,y:198.5}},{t:this.instance_5,p:{scaleY:1.055,y:198.5}},{t:this.instance_6,p:{scaleY:1.055,y:198.5}},{t:this.instance_7,p:{scaleY:1.055,y:248.2}},{t:this.instance_11,p:{scaleY:1.055,y:248.2}},{t:this.instance_9,p:{scaleY:1.055,y:248.2}},{t:this.instance_10,p:{scaleX:1.055,scaleY:1.055,x:15.8,y:298}},{t:this.instance_8,p:{scaleY:1.055,y:298,x:50.4}},{t:this.instance_12,p:{scaleY:1.055,y:298}},{t:this.instance_13,p:{scaleY:1.055,y:298}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,129.6,125.9,187.3);


(lib.Symbol20copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol11copy();
	this.instance.parent = this;
	this.instance.setTransform(41,12.3,0.89,0.888,0,0,0,36.5,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7664").s().p("AmZB6IAAj0IMzAAIAAD0g");
	this.shape.setTransform(41,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20copy, new cjs.Rectangle(0,0,82,24.5), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(41.1,12.3,0.89,0.888,0,0,0,36.5,7.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmaB6IAAj0IM1AAIAAD0g");
	this.shape.setTransform(41.1,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,82.2,24.5), null);


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
	this.instance.setTransform(-109.1,59.7,1.127,1.125,0,0,0,51.9,27.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:-103.4,alpha:1},5,cjs.Ease.get(1)).wait(5));

	// Layer 4
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-102.5,-150.5,0.292,0.289,0,0,0,170.7,63.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:0.7},9).wait(10));

	// Layer 1
	this.instance_2 = new lib.Symbol20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-98.2,333.2,1,1,0,0,0,44.5,12.3);

	this.instance_3 = new lib.Symbol20copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-99.2,222.3,1.098,1.094,0,0,0,44.2,12.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},2,cjs.Ease.get(1)).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({y:205.3,alpha:1},3).wait(2));

	// Layer 2
	this.instance_4 = new lib.Symbol14();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-101.9,-150.5,0.441,2.338,0,0,0,134.9,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:21.9,scaleY:13.62,y:92.6,alpha:0.648},9,cjs.Ease.get(1)).wait(10));

	// Layer 6
	this.instance_5 = new lib.Symbol22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-15.5,-79.7,1.079,1.079,0,0,0,135.2,112.6);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},9,cjs.Ease.get(-0.8)).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.3,-201.4,291,582.3);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(21,0.1,1,1,0,0,0,65,12.3);

	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(73.1,-496.3,1,1,0,0,0,-25.6,-163.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("EgekA0HMAAAhoNMA9JAAAMAAABoNg");
	this.shape.setTransform(24.8,-233.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-12.2,82.2,24.5);


// stage content:
(lib.HFG_120x600 = function(mode,startPosition,loop) {
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

	// cta
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(86.2,583,1.034,1.033,0,0,0,21.3,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol18(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(142).to({_off:false},0).to({y:553,alpha:1},7,cjs.Ease.get(1)).wait(95));

	// upto
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(51.1,366.4,1.812,1.81,0,0,0,151.7,157.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(131).to({_off:false},0).wait(113));

	// logo
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(60.5,241.6,0.306,0.304,0,0,0,171.7,65.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:271.6,alpha:1},8,cjs.Ease.get(1)).wait(70).to({y:245.6},0).to({y:53.6},11,cjs.Ease.get(1)).wait(155));

	// logobg
	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(60.1,300.5,2.051,10.256,0,0,0,29.3,29.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(77).to({_off:false},0).to({regY:29.5,scaleY:1.81,y:53.5},11,cjs.Ease.get(1)).wait(156));

	// boxing
	this.instance_4 = new lib.Symbol21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(66.1,180.7,0.795,0.792,0,0,0,84.9,176.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(108).to({_off:false},0).wait(136));

	// Layer 1
	this.instance_5 = new lib.Symbol23();
	this.instance_5.parent = this;
	this.instance_5.setTransform(34.7,296.9,0.461,0.454,0,0,0,52.2,13.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33).to({_off:false},0).to({x:32.2,alpha:1},8,cjs.Ease.get(1)).wait(31).to({x:26,alpha:0},4,cjs.Ease.get(1)).to({_off:true},1).wait(167));

	// Layer 4
	this.instance_6 = new lib.Symbol4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(60.1,300.5,2.051,10.256,0,0,0,29.3,29.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(99).to({_off:false},0).to({alpha:0.648},8).wait(137));

	// bg
	this.instance_7 = new lib.Symbol3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(77).to({_off:false},0).wait(167));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67.9,521.8,105,39.7);
// library properties:
lib.properties = {
	width: 120,
	height: 600,
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