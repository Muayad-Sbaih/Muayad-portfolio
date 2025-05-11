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


(lib.Symbol84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhgCrIAAlVIDBAAIAABMIhoAAIAAA4IBjAAIAABLIhjAAIAAA6IBoAAIAABMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-17,19.4,34.2);


(lib.Symbol83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhgCrIAAlVIBYAAIAAEJIBpAAIAABMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-17,19.5,34.2);


(lib.Symbol82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhDCqQgfgKgbgTIAmhIQAOAMANAIQANAIAMAEIAaADQASAAANgJQALgJAAgQQAAgOgNgIQgNgHgTgGIgbgJQgbgJgWgSQgXgTAAgrQAAgzAgggQAgggAzAAIAnAEQATADAQAGQARAGARAJIgjBFQgPgMgOgFQgOgGgNAAQgTAAgKAIQgLAJAAANQAAAMANAHQAKAHASAGIAfAKQAcAKAWATQAXASAAAqIgCAZIgLAmQgNAaghARQggAQglAAQghAAgggJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-17.8,25.2,35.8);


(lib.Symbol81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AguCrIAAikIh7ixIBqAAIBABdIA9hdIBsAAIiACxIAACkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34,34.2);


(lib.Symbol80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABTCrIgWg8Ih5AAIgXA8IheAAICDlVIBgAAICAFVgAgjAsIBIAAIgkhsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-17,35.7,34.2);


(lib.Symbol79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiVCrIAAlVICDAAQBDAAAyAzQAzAzAABEQAABFgzAzQgyAzhDAAgAg8BfIAUAAQArAAAagZQAbgaAAgsQAAgSgGgSQgGgRgMgNQgTgVgXgDQgYgEgaAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-17,30,34.2);


(lib.Symbol78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiBCCQgxgzAAhOQAAhQAzgzQAzgzBPAAQA5AAAmAXQAmAXAYAyIhUAjQgMgcgSgNQgSgNgaAAQgkAAgaAeQgZAeAAAtQAAAvAaAfQAZAeAnAAQAfAAARgPQASgPAFgeIhKAAIAAhDICxAAQgBAsgGAcQgGAcgQAYIgDAEQgZAmglARQgkARg2AAQhKAAgyg0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-18.1,35.8,36.3);


(lib.Symbol77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABSCrIijjQIAADQIhYAAIAAlVIBYAAICjDQIAAjQIBYAAIAAFVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34.1,34.2);


(lib.Symbol76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrCrIAAlVIBXAAIAAFVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-17,8.9,34.2);


(lib.Symbol75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABLCrIhJhvIhMBvIhrAAICFi2IhtifIBtAAIAzBZIA0hZIBtAAIhvCfICBC2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-17,36.4,34.2);


(lib.Symbol74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiGCCQg2g0AAhOQAAhNA1g0QA3g0BQAAQBRAAA1A0QA3A0AABNQAABOg3A0Qg1A0hRAAQhQAAg2g0gAhDhDQgdAcABAnQgBAoAdAcQAdAcAmAAQAoAAAcgcQAcgcAAgoQAAgngcgcQgcgcgoAAQgnAAgcAcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-18.1,37.8,36.3);


(lib.Symbol73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiBCrIAAlVICDAAQAvAAAYAYQAYAXAAAtQAAAYgJAQQgIAQgUALQAjAHASAUQARAUAAAkQAAAvggAaQgfAag3AAgAgoBmIATAAQAfAAAPgJQAPgIAAgTQAAgVgOgHQgNgIgjAAIgSAAgAgogjIARgBQAPgBAMgGQANgGAAgTQAAgUgNgGQgMgHgPAAIgRgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-17,26,34.2);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA8CrIg9jFIhCDFIhaAAIhmlVIBdAAIA7DcIBJjcIBFAAIBEDcIBAjcIBdAAIhtFVg");
	this.shape.setTransform(111.3,73.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiHCCQg2g0AAhOQAAhNA2g0QA3g0BQAAQBRAAA2A0QA2A0AABNQAABOg2A0Qg2A0hRAAQhQAAg3g0gAhDhDQgcAcAAAnQAAAoAcAcQAcAcAnAAQAoAAAcgcQAdgcgBgoQABgngdgcQgcgcgoAAQgnAAgcAcg");
	this.shape_1.setTransform(64.3,74);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABSCrIijjQIAADQIhYAAIAAlVIBYAAICjDQIAAjQIBZAAIAAFVg");
	this.shape_2.setTransform(22.6,73.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABSCrIijjQIAADQIhZAAIAAlVIBZAAICjDQIAAjQIBYAAIAAFVg");
	this.shape_3.setTransform(64.6,24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiHCCQg2g0AAhOQAAhNA2g0QA3g0BQAAQBRAAA3A0QA2A0AABNQAABOg2A0Qg3A0hRAAQhQAAg3g0gAhDhDQgcAcAAAnQgBAoAdAcQAdAcAmAAQAoAAAcgcQAdgcgBgoQABgngdgcQgcgcgoAAQgnAAgcAcg");
	this.shape_4.setTransform(23,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,139.4,104.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgTQAAgSALgOQALgOATAAQAUAAALANQALAOAAASIAAABIAAAAIgBABIAAABIhDAAQABAMAHAJQAIAJAMAAQAJgBAHgFQAGgFAEgHIANAGQgHANgKAFQgKAHgNAAQgTAAgMgNgAgQgZQgIAHgBAKIAzAAQgCgKgGgHQgIgGgJgBQgJABgIAGg");
	this.shape.setTransform(80.8,52.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqAtIAAgyIAAgCIAAgDQAAgIgDgGQgDgGgKAAQgKAAgEAHQgEAHAAAJIAAADIAAAEIAAAtIgOAAIAAgxIAAgEIgBgEQAAgHgEgFQgDgGgIAAQgKAAgEAHQgEAHgBAIIAAAFIAAADIAAAtIgPAAIAAhXIAPAAIAAAKIAAAAQAEgFAFgEQAFgDAHAAQAIAAAGAEQAGAEADAHQAEgIAHgDQAHgEAIAAQARAAAGAMQAFALAAAOIAAA0g");
	this.shape_1.setTransform(68.8,52);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAhQgNgOAAgSQAAgTANgOQAOgNASAAQATAAAOANQANAOAAATQAAASgOAOQgNANgTAAQgSAAgOgNgAgVgWQgJAKAAAMQAAANAJAKQAIAKANAAQAOAAAIgKQAJgKAAgNQAAgMgJgKQgIgKgOAAQgNABgIAJg");
	this.shape_2.setTransform(56.4,52.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAoQgHgGgEgKIANgFQADAFADAEQAEAEAHABQAGgBAEgEQAEgDAAgGQAAgHgFgDQgEgDgGgDIgCgBIgBAAQgIgDgGgEQgHgFABgKQAAgLAHgHQAIgHAJAAQAIAAAGAEQAHAGADAGIgMAGQgCgDgEgCQgCgEgFAAIAAAAIAAAAQgDABgEADQgDACAAAEQABAFAEADQAEADAFACIADABIADABQAHAEAHAEQAGAFAAAMQAAAMgIAIQgKAIgMAAQgJAAgJgGg");
	this.shape_3.setTransform(47.5,52.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgTQAAgSALgOQALgOATAAQAUAAALANQALAOAAASIAAABIAAAAIgBABIAAABIhDAAQABAMAHAJQAIAJALAAQAKgBAHgFQAGgFAEgHIANAGQgHANgKAFQgKAHgNAAQgTAAgMgNgAgQgZQgHAHgCAKIAzAAQgCgKgGgHQgIgGgJgBQgKABgHAGg");
	this.shape_4.setTransform(39,52.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAgOIgaBAIgrhcIARAAIAaA5IAahAIAbBAIAag5IARAAIgrBcg");
	this.shape_5.setTransform(27.1,52.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAgQgMgOAAgRQAAgSAMgPQALgNAUAAQAHAAAJAEQAHAEAFAHIABgBIAAgMIAPAAIAABXIgPAAIAAgNIgBAAQgFAIgHAEQgJADgHAAQgUAAgLgOgAgTgWQgIAKAAAMQAAAMAIAKQAGALANAAQAPAAAHgLQAIgJgBgNQAAgNgHgJQgIgKgOAAQgMABgHAJg");
	this.shape_6.setTransform(14.4,52.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgTQAAgSALgOQALgOATAAQAUAAALANQALAOAAASIAAABIAAABIgBAAIAAABIhDAAQABAMAHAJQAIAJAMgBQAJAAAHgEQAGgGAEgIIANAHQgHANgKAFQgKAHgNAAQgTAAgMgNgAgQgYQgIAGgBAKIAzAAQgCgKgGgGQgIgIgJAAQgJAAgIAIg");
	this.shape_7.setTransform(89.8,32.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAqAtIAAgyIAAgCIAAgDQAAgIgDgGQgDgGgKAAQgKAAgEAHQgEAHAAAJIAAADIAAAEIAAAtIgOAAIAAgxIAAgEIgBgEQAAgHgEgFQgDgGgIAAQgKAAgEAHQgEAHgBAIIAAAFIAAADIAAAtIgPAAIAAhXIAPAAIAAAKIAAAAQAEgFAFgEQAFgDAHAAQAIAAAGAEQAGAEADAHQAEgIAHgDQAHgEAIAAQARAAAGAMQAFALAAAOIAAA0g");
	this.shape_8.setTransform(77.7,32);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggAgQgNgNAAgSQAAgTANgOQAOgNASAAQATAAAOANQANAOAAATQAAASgOANQgNAOgTAAQgSAAgOgOgAgVgWQgJAKAAAMQAAANAJAKQAIAJANAAQAOAAAIgJQAJgKAAgNQAAgMgJgKQgIgKgOAAQgNAAgIAKg");
	this.shape_9.setTransform(65.4,32.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUBNIAAgyQAAgKgDgIQgCgJgNAAQgMAAgEAJQgFAJAAAKIAAAEIAAADIAAAqIgPAAIAAiYIAPAAIAABLIAAAAQAFgFAGgEQAGgDAHAAQATAAAFALQAGAKAAAQIAAA0g");
	this.shape_10.setTransform(55.4,28.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAtIAAhXIAPAAIAAAKIAAAAIABgBIABgBQADgFADgCQAEgDAHAAIAFABIAGACIABABIABAAIgHAOIgBgBIgCgBIgDgBIgDgBQgIAAgDAGQgDAGgBAIIgBAGIAAAFIAAAsg");
	this.shape_11.setTransform(42.2,32);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaAiQgIgLABgRIAAgyIAOAAIAAAwQAAALAEAIQACAJANgBQANABADgJQAEgIAAgLIAAgwIAOAAIAAAxQABASgIALQgIALgTAAQgSAAgIgLg");
	this.shape_12.setTransform(33.8,32.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AggAgQgNgNAAgSQAAgTANgOQAOgNASAAQATAAAOANQANAOAAATQAAASgOANQgNAOgTAAQgSAAgOgOgAgVgWQgJAKAAAMQAAANAJAKQAIAJANAAQAOAAAIgJQAJgKAAgNQAAgMgJgKQgIgKgOAAQgNAAgIAKg");
	this.shape_13.setTransform(23.8,32.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiBEIAcg5IgohOIASAAIAdA/IAdg/IARAAIhACHg");
	this.shape_14.setTransform(14,34.6);

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

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(7.7,-4.8,88.7,68.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgzC0IAAibIgcAAIAAhAIAcAAIAAghQAAgfAIgSQAHgTAUgQQAKgHAKgGQAMgGAMgCIAIgBIAIgBIALABIAJABIAIACIAIAEIAABEIgMgGIgIgCIgDAAIgEAAQgQAAgGAJQgGAKABAaIAAAbIA2AAIAABAIg2AAIAACbg");
	this.shape.setTransform(172.1,69.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzC0IAAibIgcAAIAAhAIAcAAIAAghQAAgfAIgSQAHgTAUgQQAKgHAKgGQAMgGAMgCIAIgBIAIgBIALABIAJABIAIACIAIAEIAABEIgMgGIgIgCIgDAAIgEAAQgQAAgGAJQgGAKAAAaIAAAbIA3AAIAABAIg3AAIAACbg");
	this.shape_1.setTransform(155.4,69.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AheBVQglghAAg0QAAgzAlghQAlghA5AAQA6AAAlAhQAlAhAAAzQAAA0glAhQglAhg6AAQg5AAglghgAgigkQgPAPAAAVQAAAUAPAPQAOAPAUAAQAVAAAOgPQAPgPAAgUQAAgVgPgPQgOgOgVAAQgUAAgOAOg");
	this.shape_2.setTransform(131.9,76.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAwCPQgYgVAAgkQAAgkAYgWQAYgVAoAAQAoAAAYAWQAZAVAAAkQAAAkgZAVQgZAWgnAAQgoAAgYgWgABWA8QgKALAAAPQAAAPAKAKQALALAPAAQAPAAALgLQAKgKAAgPQAAgPgKgLQgLgLgPAAQgPAAgLALgAhyChIC6lCIAqAAIi6FCgAiwgcQgYgVAAgkQAAgkAYgVQAZgWAoAAQAnAAAZAWQAYAVAAAkQAAAjgZAWQgYAWgnAAQgoAAgZgWgAiJhvQgLALAAAPQAAAPALALQAKAKAQAAQAPAAAKgKQALgLAAgPQAAgQgLgKQgKgKgPAAQgQAAgKAKg");
	this.shape_3.setTransform(81.7,71.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2ChQgZgMgUgZQgTgYgJgeQgJgeAAgoQAAgnAJgeQAJgeATgXQAUgZAZgNQAZgMAeAAQAdAAAaAMQAZANATAZQAUAXAIAeQAJAeAAAnQAAAogJAeQgIAegUAYQgTAZgZAMQgaAMgdAAQgeAAgZgMgAgmhGQgOAbAAAsQAAAsAOAcQAPAbAYAAQAXAAAPgbQAPgcAAgsQAAgsgPgbQgPgcgXAAQgYAAgPAcg");
	this.shape_4.setTransform(45.6,71.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiKCiICSj8IiFAAIAAhHIEIAAIi5FDg");
	this.shape_5.setTransform(18,71.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AheBVQglghAAg0QAAgzAlghQAlghA5AAQA6AAAkAhQAmAhAAAzQAAA0glAhQgkAhg7AAQg5AAglghgAgigkQgPAPAAAVQAAAUAPAPQAPAPATAAQAVAAAPgPQAOgPAAgUQAAgVgOgPQgPgOgVAAQgTAAgPAOg");
	this.shape_6.setTransform(111.4,28.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvCPIAAiaIgaAAIAAhBIAaAAIAAhCIBNAAIAABCIAsAAIAABBIgsAAIAACag");
	this.shape_7.setTransform(88.7,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah/CoIAAlIIBOAAIAAAYQAMgPAQgIQAQgIATAAQAxAAAhAhQAgAhAAAzQAAAyggAgQgfAhgvAAQgVAAgQgHQgQgGgOgPIAACDgAglhWQgPAPAAAUQAAAVAPAPQAOAPAVAAQAUAAAPgPQAOgOAAgVQAAgVgOgPQgPgPgUAAQgVAAgOAPg");
	this.shape_8.setTransform(52.3,33.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhFCYQgegMgRgXQgNgQgGgWQgEgWgBglIAAi4IBUAAIAACtIABAiQABAJADAIIACADIACAEQAIAMAMAHQAMAFAPAAQAQAAAMgGQAOgIAGgMIACgDIACgDQADgIABgKIABggIAAitIBUAAIAAC4QAAAigGAVQgGAVgOATIgDACIgDAEQgUAWgcALQgdAMgiAAQgkAAgfgOg");
	this.shape_9.setTransform(19.4,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,182.5,100.8), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,300,600), null);


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
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer 8
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(166.6,143.4,0.585,0.584,0,0,0,92.5,51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:51.8,scaleX:0.44,scaleY:0.43},6,cjs.Ease.get(1)).to({regX:92.3,regY:51.6,scaleX:0.5,scaleY:0.49,y:143.3},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(112.5,113.3,106.8,58.9);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(134.9,112.4,0.899,0.899,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,269.8,539.5), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1));

	// Layer 3
	this.instance = new lib.Symbol73("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43,115.3,1.412,0.19);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance.cache(-15,-19,30,38);

	this.instance_1 = new lib.Symbol74("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(93.8,115.4,1.412,0.165);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_1.cache(-21,-20,42,40);

	this.instance_2 = new lib.Symbol75("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.1,115.5,1.412,0.14);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_2.cache(-20,-19,40,38);

	this.instance_3 = new lib.Symbol76("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(186.1,115.7,1.412,0.115);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_3.cache(-6,-19,13,38);

	this.instance_4 = new lib.Symbol77("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(226.5,115.8,1.412,0.091);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_4.cache(-19,-19,38,38);

	this.instance_5 = new lib.Symbol78("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(283.7,115.9,1.412,0.066);
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_5.cache(-20,-20,40,40);

	this.instance_6 = new lib.Symbol79("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(45.7,181.2,1.412,0.041);
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_6.cache(-17,-19,34,38);

	this.instance_7 = new lib.Symbol80("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(95.4,181.4,1.412,0.016);
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_7.cache(-20,-19,40,38);

	this.instance_8 = new lib.Symbol81("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(144.2,180.5,1.412,0.181);
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_8.cache(-19,-19,38,38);

	this.instance_9 = new lib.Symbol82("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(42.4,245.8,1.412,0.156);
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_9.cache(-15,-20,29,40);

	this.instance_10 = new lib.Symbol80("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(95.4,177.4,1.412,0.776);
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_10.cache(-20,-19,40,38);

	this.instance_11 = new lib.Symbol83("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(133.1,246,1.412,0.107);
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_11.cache(-12,-19,24,38);

	this.instance_12 = new lib.Symbol84("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(167,246.2,1.412,0.082);
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 118, 100, 0)];
	this.instance_12.cache(-12,-19,23,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleY:0.19,y:115.3}}]}).to({state:[{t:this.instance,p:{scaleY:0.38,y:114.3}},{t:this.instance_1,p:{scaleY:0.165,y:115.4}}]},1).to({state:[{t:this.instance,p:{scaleY:0.57,y:113.3}},{t:this.instance_1,p:{scaleY:0.355,y:114.4}},{t:this.instance_2,p:{scaleY:0.14,y:115.5}}]},1).to({state:[{t:this.instance,p:{scaleY:0.76,y:112.3}},{t:this.instance_1,p:{scaleY:0.545,y:113.4}},{t:this.instance_2,p:{scaleY:0.33,y:114.6}},{t:this.instance_3,p:{scaleY:0.115,y:115.7}}]},1).to({state:[{t:this.instance,p:{scaleY:0.95,y:111.3}},{t:this.instance_1,p:{scaleY:0.735,y:112.5}},{t:this.instance_2,p:{scaleY:0.52,y:113.6}},{t:this.instance_3,p:{scaleY:0.305,y:114.7}},{t:this.instance_4,p:{scaleY:0.091,y:115.8}}]},1).to({state:[{t:this.instance,p:{scaleY:1.14,y:110.3}},{t:this.instance_1,p:{scaleY:0.925,y:111.5}},{t:this.instance_2,p:{scaleY:0.71,y:112.6}},{t:this.instance_3,p:{scaleY:0.495,y:113.7}},{t:this.instance_4,p:{scaleY:0.281,y:114.8}},{t:this.instance_5,p:{scaleY:0.066,y:115.9}}]},1).to({state:[{t:this.instance,p:{scaleY:1.33,y:109.3}},{t:this.instance_1,p:{scaleY:1.115,y:110.5}},{t:this.instance_2,p:{scaleY:0.9,y:111.6}},{t:this.instance_3,p:{scaleY:0.685,y:112.7}},{t:this.instance_4,p:{scaleY:0.471,y:113.8}},{t:this.instance_5,p:{scaleY:0.256,y:114.9}},{t:this.instance_6,p:{scaleY:0.041,y:181.2}}]},1).to({state:[{t:this.instance,p:{scaleY:1.412,y:108.9}},{t:this.instance_1,p:{scaleY:1.305,y:109.5}},{t:this.instance_2,p:{scaleY:1.09,y:110.6}},{t:this.instance_3,p:{scaleY:0.875,y:111.7}},{t:this.instance_4,p:{scaleY:0.661,y:112.8}},{t:this.instance_5,p:{scaleY:0.446,y:113.9}},{t:this.instance_6,p:{scaleY:0.231,y:180.2}},{t:this.instance_7,p:{scaleY:0.016,y:181.4,x:95.4}}]},1).to({state:[{t:this.instance,p:{scaleY:1.412,y:108.9}},{t:this.instance_1,p:{scaleY:1.412,y:109}},{t:this.instance_2,p:{scaleY:1.28,y:109.6}},{t:this.instance_3,p:{scaleY:1.065,y:110.7}},{t:this.instance_4,p:{scaleY:0.85,y:111.8}},{t:this.instance_5,p:{scaleY:0.636,y:113}},{t:this.instance_6,p:{scaleY:0.421,y:179.3}},{t:this.instance_7,p:{scaleY:0.206,y:180.4,x:95.4}}]},1).to({state:[{t:this.instance,p:{scaleY:1.412,y:108.9}},{t:this.instance_1,p:{scaleY:1.412,y:109}},{t:this.instance_2,p:{scaleY:1.412,y:108.9}},{t:this.instance_3,p:{scaleY:1.255,y:109.7}},{t:this.instance_4,p:{scaleY:1.04,y:110.8}},{t:this.instance_5,p:{scaleY:0.826,y:112}},{t:this.instance_6,p:{scaleY:0.611,y:178.3}},{t:this.instance_7,p:{scaleY:0.396,y:179.4,x:95.4}},{t:this.instance_8,p:{scaleY:0.181,y:180.5}}]},1).to({state:[{t:this.instance,p:{scaleY:1.412,y:108.9}},{t:this.instance_1,p:{scaleY:1.412,y:109}},{t:this.instance_2,p:{scaleY:1.412,y:108.9}},{t:this.instance_3,p:{scaleY:1.412,y:108.9}},{t:this.instance_4,p:{scaleY:1.23,y:109.8}},{t:this.instance_5,p:{scaleY:1.016,y:111}},{t:this.instance_6,p:{scaleY:0.801,y:177.3}},{t:this.instance_7,p:{scaleY:0.586,y:178.4,x:95.4}},{t:this.instance_8,p:{scaleY:0.371,y:179.5}},{t:this.instance_9,p:{scaleY:0.156,y:245.8}}]},1).to({state:[{t:this.instance,p:{scaleY:1.412,y:108.9}},{t:this.instance_1,p:{scaleY:1.412,y:109}},{t:this.instance_2,p:{scaleY:1.412,y:108.9}},{t:this.instance_3,p:{scaleY:1.412,y:108.9}},{t:this.instance_4,p:{scaleY:1.412,y:108.9}},{t:this.instance_5,p:{scaleY:1.206,y:110}},{t:this.instance_6,p:{scaleY:0.991,y:176.3}},{t:this.instance_10,p:{scaleY:0.776,y:177.4}},{t:this.instance_8,p:{scaleY:0.561,y:178.5}},{t:this.instance_9,p:{scaleY:0.346,y:244.8}},{t:this.instance_7,p:{scaleY:0.132,y:245.9,x:88.6}}]},1).to({state:[{t:this.instance,p:{scaleY:1.412,y:108.9}},{t:this.instance_1,p:{scaleY:1.412,y:109}},{t:this.instance_2,p:{scaleY:1.412,y:108.9}},{t:this.instance_3,p:{scaleY:1.412,y:108.9}},{t:this.instance_4,p:{scaleY:1.412,y:108.9}},{t:this.instance_5,p:{scaleY:1.396,y:109}},{t:this.instance_6,p:{scaleY:1.181,y:175.3}},{t:this.instance_10,p:{scaleY:0.966,y:176.4}},{t:this.instance_8,p:{scaleY:0.751,y:177.5}},{t:this.instance_9,p:{scaleY:0.536,y:243.8}},{t:this.instance_7,p:{scaleY:0.321,y:244.9,x:88.6}},{t:this.instance_11,p:{scaleY:0.107,y:246}}]},1).to({state:[{t:this.instance,p:{scaleY:1.412,y:108.9}},{t:this.instance_1,p:{scaleY:1.412,y:109}},{t:this.instance_2,p:{scaleY:1.412,y:108.9}},{t:this.instance_3,p:{scaleY:1.412,y:108.9}},{t:this.instance_4,p:{scaleY:1.412,y:108.9}},{t:this.instance_5,p:{scaleY:1.412,y:108.9}},{t:this.instance_6,p:{scaleY:1.371,y:174.3}},{t:this.instance_10,p:{scaleY:1.156,y:175.4}},{t:this.instance_8,p:{scaleY:0.941,y:176.5}},{t:this.instance_9,p:{scaleY:0.726,y:242.8}},{t:this.instance_7,p:{scaleY:0.511,y:243.9,x:88.6}},{t:this.instance_11,p:{scaleY:0.297,y:245}},{t:this.instance_12,p:{scaleY:0.082,y:246.2}}]},1).to({state:[{t:this.instance,p:{scaleY:1.412,y:108.9}},{t:this.instance_1,p:{scaleY:1.412,y:109}},{t:this.instance_2,p:{scaleY:1.412,y:108.9}},{t:this.instance_3,p:{scaleY:1.412,y:108.9}},{t:this.instance_4,p:{scaleY:1.412,y:108.9}},{t:this.instance_5,p:{scaleY:1.412,y:108.9}},{t:this.instance_6,p:{scaleY:1.412,y:174.1}},{t:this.instance_10,p:{scaleY:1.346,y:174.4}},{t:this.instance_8,p:{scaleY:1.131,y:175.5}},{t:this.instance_9,p:{scaleY:0.916,y:241.8}},{t:this.instance_7,p:{scaleY:0.701,y:242.9,x:88.6}},{t:this.instance_11,p:{scaleY:0.487,y:244}},{t:this.instance_12,p:{scaleY:0.272,y:245.2}}]},1).to({state:[{t:this.instance,p:{scaleY:1.412,y:108.9}},{t:this.instance_1,p:{scaleY:1.412,y:109}},{t:this.instance_2,p:{scaleY:1.412,y:108.9}},{t:this.instance_3,p:{scaleY:1.412,y:108.9}},{t:this.instance_4,p:{scaleY:1.412,y:108.9}},{t:this.instance_5,p:{scaleY:1.412,y:108.9}},{t:this.instance_6,p:{scaleY:1.412,y:174.1}},{t:this.instance_10,p:{scaleY:1.412,y:174.1}},{t:this.instance_8,p:{scaleY:1.321,y:174.5}},{t:this.instance_9,p:{scaleY:1.106,y:240.8}},{t:this.instance_7,p:{scaleY:0.891,y:241.9,x:88.6}},{t:this.instance_11,p:{scaleY:0.677,y:243.1}},{t:this.instance_12,p:{scaleY:0.462,y:244.2}}]},1).to({state:[{t:this.instance,p:{scaleY:1.412,y:108.9}},{t:this.instance_1,p:{scaleY:1.412,y:109}},{t:this.instance_2,p:{scaleY:1.412,y:108.9}},{t:this.instance_3,p:{scaleY:1.412,y:108.9}},{t:this.instance_4,p:{scaleY:1.412,y:108.9}},{t:this.instance_5,p:{scaleY:1.412,y:108.9}},{t:this.instance_6,p:{scaleY:1.412,y:174.1}},{t:this.instance_10,p:{scaleY:1.412,y:174.1}},{t:this.instance_8,p:{scaleY:1.412,y:174.1}},{t:this.instance_9,p:{scaleY:1.296,y:239.8}},{t:this.instance_7,p:{scaleY:1.081,y:240.9,x:88.6}},{t:this.instance_11,p:{scaleY:0.867,y:242.1}},{t:this.instance_12,p:{scaleY:0.652,y:243.2}}]},1).to({state:[{t:this.instance,p:{scaleY:1.412,y:108.9}},{t:this.instance_1,p:{scaleY:1.412,y:109}},{t:this.instance_2,p:{scaleY:1.412,y:108.9}},{t:this.instance_3,p:{scaleY:1.412,y:108.9}},{t:this.instance_4,p:{scaleY:1.412,y:108.9}},{t:this.instance_5,p:{scaleY:1.412,y:108.9}},{t:this.instance_6,p:{scaleY:1.412,y:174.1}},{t:this.instance_10,p:{scaleY:1.412,y:174.1}},{t:this.instance_8,p:{scaleY:1.412,y:174.1}},{t:this.instance_9,p:{scaleY:1.412,y:239.2}},{t:this.instance_7,p:{scaleY:1.271,y:239.9,x:88.6}},{t:this.instance_11,p:{scaleY:1.057,y:241.1}},{t:this.instance_12,p:{scaleY:0.842,y:242.2}}]},1).to({state:[{t:this.instance,p:{scaleY:1.412,y:108.9}},{t:this.instance_1,p:{scaleY:1.412,y:109}},{t:this.instance_2,p:{scaleY:1.412,y:108.9}},{t:this.instance_3,p:{scaleY:1.412,y:108.9}},{t:this.instance_4,p:{scaleY:1.412,y:108.9}},{t:this.instance_5,p:{scaleY:1.412,y:108.9}},{t:this.instance_6,p:{scaleY:1.412,y:174.1}},{t:this.instance_10,p:{scaleY:1.412,y:174.1}},{t:this.instance_8,p:{scaleY:1.412,y:174.1}},{t:this.instance_9,p:{scaleY:1.412,y:239.2}},{t:this.instance_7,p:{scaleY:1.412,y:239.2,x:88.6}},{t:this.instance_11,p:{scaleY:1.247,y:240.1}},{t:this.instance_12,p:{scaleY:1.032,y:241.2}}]},1).to({state:[{t:this.instance,p:{scaleY:1.412,y:108.9}},{t:this.instance_1,p:{scaleY:1.412,y:109}},{t:this.instance_2,p:{scaleY:1.412,y:108.9}},{t:this.instance_3,p:{scaleY:1.412,y:108.9}},{t:this.instance_4,p:{scaleY:1.412,y:108.9}},{t:this.instance_5,p:{scaleY:1.412,y:108.9}},{t:this.instance_6,p:{scaleY:1.412,y:174.1}},{t:this.instance_10,p:{scaleY:1.412,y:174.1}},{t:this.instance_8,p:{scaleY:1.412,y:174.1}},{t:this.instance_9,p:{scaleY:1.412,y:239.2}},{t:this.instance_7,p:{scaleY:1.412,y:239.2,x:88.6}},{t:this.instance_11,p:{scaleY:1.412,y:239.2}},{t:this.instance_12,p:{scaleY:1.222,y:240.2}}]},1).to({state:[{t:this.instance,p:{scaleY:1.412,y:108.9}},{t:this.instance_1,p:{scaleY:1.412,y:109}},{t:this.instance_2,p:{scaleY:1.412,y:108.9}},{t:this.instance_3,p:{scaleY:1.412,y:108.9}},{t:this.instance_4,p:{scaleY:1.412,y:108.9}},{t:this.instance_5,p:{scaleY:1.412,y:108.9}},{t:this.instance_6,p:{scaleY:1.412,y:174.1}},{t:this.instance_10,p:{scaleY:1.412,y:174.1}},{t:this.instance_8,p:{scaleY:1.412,y:174.1}},{t:this.instance_9,p:{scaleY:1.412,y:239.2}},{t:this.instance_7,p:{scaleY:1.412,y:239.2,x:88.6}},{t:this.instance_11,p:{scaleY:1.412,y:239.2}},{t:this.instance_12,p:{scaleY:1.412,y:239.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.6,83.3,284.3,181.1);


(lib.Symbol20copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol11copy();
	this.instance.parent = this;
	this.instance.setTransform(64.5,12.3,0.89,0.888,0,0,0,36.5,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7664").s().p("AqEB6IAAj0IUJAAIAAD0g");
	this.shape.setTransform(64.5,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20copy, new cjs.Rectangle(0,0,129,24.5), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(65.1,12.3,0.89,0.888,0,0,0,36.5,7.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqKB6IAAj0IUVAAIAAD0g");
	this.shape.setTransform(65.1,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,130.1,24.5), null);


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
	this.instance.setTransform(-103.5,52.2,1.409,1.408,0,0,0,39.1,33.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:-95.9,alpha:1},5,cjs.Ease.get(1)).wait(5));

	// Layer 4
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-76.7,-155.2,0.451,0.448,0,0,0,171.5,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.53,scaleY:0.52,x:-51.4,y:-38.8},9).wait(10));

	// Layer 1
	this.instance_2 = new lib.Symbol20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-64.3,222.7,1,1,0,0,0,44.5,12.3);

	this.instance_3 = new lib.Symbol20copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-71.6,170.4,1.194,1.192,0,0,0,44.3,12.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},2,cjs.Ease.get(1)).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({y:160.2,alpha:1},3).wait(2));

	// Layer 2
	this.instance_4 = new lib.Symbol14();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-43.7,-155.6,0.878,2.149,0,0,0,134.9,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:21.8,scaleY:10.77,y:32.3,alpha:0.648},9,cjs.Ease.get(1)).wait(10));

	// Layer 6
	this.instance_5 = new lib.Symbol22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-41.7,-103,0.875,0.875,0,0,0,134.8,112.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},9,cjs.Ease.get(-0.8)).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.2,-202.7,238.6,473.3);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(21,0.1,1,1,0,0,0,65,12.3);

	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39.2,-385.7,1,1,0,0,0,-25.6,-163.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("A/UVVMAAAgqpMA+pAAAMAAAAqpg");
	this.shape.setTransform(24.8,-176.2,0.976,2.252);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-12.2,130.1,24.5);


// stage content:
(lib.HFG_300x600 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(150.3,554.8,1.265,1.265,0,0,0,21.2,0.2);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol18(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(151).to({_off:false},0).to({y:538.8,alpha:1},7,cjs.Ease.get(1)).wait(86));

	// on now
	this.instance_1 = new lib.Symbol25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.5,374.3,1.327,1.326,0,0,0,69.7,52.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(142).to({_off:false},0).to({x:87.5,alpha:1},8,cjs.Ease.get(1)).wait(94));

	// upto
	this.instance_2 = new lib.Symbol24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(201.2,207.5,1.196,1.195,0,0,0,165.8,142.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(131).to({_off:false},0).wait(113));

	// logo
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(146.8,277.7,0.653,0.652,0,0,0,171.2,64.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:285.7,alpha:1},8,cjs.Ease.get(1)).wait(70).to({regX:171,regY:65.3,scaleX:0.57,scaleY:0.57,x:108,y:60.5},11,cjs.Ease.get(1)).wait(155));

	// logo
	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.3,300.5,5.128,10.256,0,0,0,29.3,29.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(77).to({_off:false},0).to({regY:29.5,scaleY:2.05,y:60.5},11,cjs.Ease.get(1)).wait(156));

	// boxing
	this.instance_5 = new lib.Symbol21();
	this.instance_5.parent = this;
	this.instance_5.setTransform(169.9,171.6,0.971,0.969,0,0,0,199.3,137.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(108).to({_off:false},0).wait(136));

	// Layer 1
	this.instance_6 = new lib.Symbol23();
	this.instance_6.parent = this;
	this.instance_6.setTransform(94.5,351.4,1,1,0,0,0,52.1,12.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33).to({_off:false},0).to({x:88.5,alpha:1},8,cjs.Ease.get(1)).wait(32).to({x:78.5,alpha:0},3,cjs.Ease.get(1)).wait(168));

	// Layer 4
	this.instance_7 = new lib.Symbol4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150.3,300.5,5.128,10.256,0,0,0,29.3,29.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({_off:false},0).to({alpha:0.648},8).wait(137));

	// Layer 3
	this.instance_8 = new lib.Symbol3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(77).to({_off:false},0).wait(167));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(185,535.5,224,85.1);
// library properties:
lib.properties = {
	width: 300,
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