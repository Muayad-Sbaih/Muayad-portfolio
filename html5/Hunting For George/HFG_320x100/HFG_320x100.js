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


(lib.Symbol182 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhhCrIAAlVIDDAAIAABMIhqAAIAAA4IBgAAIAABLIhgAAIAACGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-17,19.6,34.2);


(lib.Symbol181 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAzCYQgagXAAgmQAAgmAagXQAZgXAqAAQArAAAaAXQAZAYAAAlQAAAmgaAXQgaAWgqAAQgqAAgZgWgABbBAQgLALAAAQQAAAQALALQAMALAPAAQARAAALgLQALgLAAgQQAAgQgLgLQgLgMgRAAQgPAAgMAMgAh5CrIDFlVIAtAAIjFFVgAi6gdQgZgXAAgmQAAgmAZgWQAagXAqAAQAqAAAaAXQAaAWAAAmQAAAmgbAXQgaAXgpAAQgqAAgagXgAiRh1QgMALAAAQQAAAQAMALQALAMAQAAQAQAAALgMQALgLAAgQQAAgQgLgLQgLgLgQAAQgQAAgLALg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-17.4,42.5,34.8);


(lib.Symbol180 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag5CqQgbgNgVgaQgUgZgJggQgKggAAgqQAAgpAKggQAJgfAUgaQAVgaAbgNQAbgOAeAAQAgAAAbAOQAaANAVAaQAUAaAKAfQAJAgAAApQAAAqgJAgQgKAggUAZQgVAagaANQgbANggABQgegBgbgNgAgohLQgPAeAAAuQAAAuAPAeQAQAdAYAAQAZAAAQgdQAQgeAAguQAAgugQgeQgQgcgZAAQgYAAgQAcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-18.3,29,36.7);


(lib.Symbol179 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiSCrICbkJIiNAAIAAhMIEXAAIjDFVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-17,29.4,34.2);


(lib.Symbol178 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgsCrIAAkJIhIAAIAAhMIDpAAIAABMIhJAAIAAEJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-17,23.5,34.2);


(lib.Symbol177 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiBCrIAAlVICMAAQA2AAAgAdQAhAdAAA3QAAA4geAdQgdAeg5AAIg2AAIAABxgAgogNIAdAAQAZAAALgKQAMgLAAgWQAAgVgMgKQgMgLgXAAIgeAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.9,-17,26,34.2);


(lib.Symbol176 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhJCiQgggOgSgYQgOgSgFgXQgGgXAAgmIAAjEIBZAAIABDbQABALADAHIAEAIQAIANANAGQANAHAQAAQAQAAAOgHQAOgIAHgNIADgHQAEgIAAgLQACgKAAgXIAAi4IBZAAIAADEQAAAjgHAXQgGAWgPATIgGAGQgVAYgeANQgeALglAAQglAAghgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-17.5,29.8,35);


(lib.Symbol175 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhgCrIAAlVIDBAAIAABMIhoAAIAAA4IBjAAIAABLIhjAAIAAA6IBoAAIAABMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-17,19.4,34.2);


(lib.Symbol174 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhgCrIAAlVIBYAAIAAEJIBpAAIAABMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-17,19.5,34.2);


(lib.Symbol173 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhDCqQgfgKgbgTIAmhIQAOAMANAIQANAIAMAEIAaADQASAAANgJQALgJAAgQQAAgOgNgIQgNgHgTgGIgbgJQgbgJgWgSQgXgTAAgrQAAgzAgggQAgggAzAAIAnAEQATADAQAGQARAGARAJIgjBFQgPgMgOgFQgOgGgNAAQgTAAgKAIQgLAJAAANQAAAMANAHQAKAHASAGIAfAKQAcAKAWATQAXASAAAqIgCAZIgLAmQgNAaghARQggAQglAAQghAAgggJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-17.8,25.2,35.8);


(lib.Symbol172 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AguCrIAAikIh7ixIBqAAIBABdIA9hdIBsAAIiACxIAACkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34,34.2);


(lib.Symbol171 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABTCrIgWg8Ih5AAIgXA8IheAAICDlVIBgAAICAFVgAgjAsIBIAAIgkhsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-17,35.7,34.2);


(lib.Symbol170 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiVCrIAAlVICDAAQBDAAAyAzQAzAzAABEQAABFgzAzQgyAzhDAAgAg8BfIAUAAQArAAAagZQAbgaAAgsQAAgSgGgSQgGgRgMgNQgTgVgXgDQgYgEgaAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-17,30,34.2);


(lib.Symbol169 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiBCCQgxgzAAhOQAAhQAzgzQAzgzBPAAQA5AAAmAXQAmAXAYAyIhUAjQgMgcgSgNQgSgNgaAAQgkAAgaAeQgZAeAAAtQAAAvAaAfQAZAeAnAAQAfAAARgPQASgPAFgeIhKAAIAAhDICxAAQgBAsgGAcQgGAcgQAYIgDAEQgZAmglARQgkARg2AAQhKAAgyg0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-18.1,35.8,36.3);


(lib.Symbol168 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABSCrIijjQIAADQIhYAAIAAlVIBYAAICjDQIAAjQIBYAAIAAFVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34.1,34.2);


(lib.Symbol167 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrCrIAAlVIBXAAIAAFVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-17,8.9,34.2);


(lib.Symbol166 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABLCrIhJhvIhMBvIhrAAICFi2IhtifIBtAAIAzBZIA0hZIBtAAIhvCfICBC2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-17,36.4,34.2);


(lib.Symbol165copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiGCCQg2g0AAhOQAAhNA1g0QA3g0BQAAQBRAAA1A0QA3A0AABNQAABOg3A0Qg1A0hRAAQhQAAg2g0gAhDhDQgdAcABAnQgBAoAdAcQAdAcAmAAQAoAAAcgcQAcgcAAgoQAAgngcgcQgcgcgoAAQgnAAgcAcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-18.1,37.8,36.3);


(lib.Symbol165 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiGCCQg2g0AAhOQAAhNA1g0QA3g0BQAAQBRAAA1A0QA3A0AABNQAABOg3A0Qg1A0hRAAQhQAAg2g0gAhDhDQgdAcABAnQgBAoAdAcQAdAcAmAAQAoAAAcgcQAcgcAAgoQAAgngcgcQgcgcgoAAQgnAAgcAcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-18.1,37.8,36.3);


(lib.Symbol164 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgTQAAgSALgOQALgOATAAQAUAAALAOQALANAAASIAAAAIAAABIgBACIAAAAIhDAAQABANAHAIQAIAJAMAAQAJAAAHgGQAGgFAEgHIANAHQgHALgKAHQgKAGgNAAQgTAAgMgNgAgQgZQgIAHgBAJIAzAAQgCgJgGgHQgIgGgJAAQgJAAgIAGg");
	this.shape.setTransform(73.1,34.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqAtIAAgyIAAgCIAAgDQAAgIgDgGQgDgGgKAAQgKAAgEAHQgEAHAAAJIAAADIAAAEIAAAtIgOAAIAAgxIAAgEIgBgEQAAgHgEgFQgDgGgIAAQgKAAgEAHQgEAHgBAIIAAAFIAAADIAAAtIgPAAIAAhXIAPAAIAAAKIAAAAQAEgFAFgEQAFgDAHAAQAIAAAGAEQAGAEADAHQAEgIAHgDQAHgEAIAAQARAAAGAMQAFALAAAOIAAA0g");
	this.shape_1.setTransform(61.1,34.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAhQgNgNAAgUQAAgSANgNQAOgOASAAQATAAAOAOQANANAAASQAAAUgOANQgNANgTAAQgSAAgOgNgAgVgVQgJAJAAAMQAAAOAJAJQAIAKANAAQAOAAAIgKQAJgJAAgOQAAgMgJgKQgIgJgOAAQgNAAgIAKg");
	this.shape_2.setTransform(48.8,34.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAoQgHgFgEgLIANgGQADAHADADQAEAFAHAAQAGAAAEgFQAEgDAAgGQAAgGgFgEQgEgDgGgCIgCgBIgBgBQgIgDgGgEQgHgFABgKQAAgLAHgHQAIgHAJAAQAIAAAGAFQAHAFADAGIgMAHQgCgEgEgDQgCgCgFAAIAAAAIAAAAQgDAAgEADQgDACAAAFQABAEAEADQAEADAFACIADABIADABQAHAEAHAEQAGAFAAALQAAANgIAIQgKAIgMAAQgJAAgJgGg");
	this.shape_3.setTransform(39.9,34.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgTQAAgSALgOQALgOATAAQAUAAALAOQALANAAASIAAAAIAAABIgBACIAAAAIhDAAQABANAHAIQAIAJAMAAQAJAAAHgGQAGgFAEgHIANAHQgHALgKAHQgKAGgNAAQgTAAgMgNgAgQgZQgHAHgCAJIAzAAQgCgJgGgHQgIgGgJAAQgKAAgHAGg");
	this.shape_4.setTransform(31.4,34.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAgOIgaBAIgrhcIARAAIAaA5IAahAIAbBAIAag5IARAAIgrBcg");
	this.shape_5.setTransform(19.5,34.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAgQgMgOAAgSQAAgRAMgOQALgOAUAAQAHAAAJAEQAHAEAFAHIABAAIAAgNIAPAAIAABWIgPAAIAAgLIgBAAQgFAHgHAEQgJADgHAAQgUAAgLgOgAgTgVQgIAJAAAMQAAAMAIAKQAGALANAAQAPAAAHgKQAIgLgBgMQAAgNgHgJQgIgJgOAAQgMAAgHAKg");
	this.shape_6.setTransform(6.7,34.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgTQAAgSALgOQALgOATAAQAUAAALANQALAOAAASIAAABIAAABIgBAAIAAABIhDAAQABAMAHAJQAIAJALgBQAKAAAHgEQAGgGAEgIIANAHQgHANgKAFQgKAHgNAAQgTAAgMgNgAgQgZQgHAHgCAKIAzAAQgCgKgGgHQgIgHgJAAQgKAAgHAHg");
	this.shape_7.setTransform(133.5,17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAqAtIAAgyIAAgCIAAgDQAAgIgDgGQgDgGgKAAQgKAAgEAHQgEAHAAAJIAAADIAAAEIAAAtIgOAAIAAgxIAAgEIgBgEQAAgHgEgFQgDgGgIAAQgKAAgEAHQgEAHgBAIIAAAFIAAADIAAAtIgPAAIAAhXIAPAAIAAAKIAAAAQAEgFAFgEQAFgDAHAAQAIAAAGAEQAGAEADAHQAEgIAHgDQAHgEAIAAQARAAAGAMQAFALAAAOIAAA0g");
	this.shape_8.setTransform(121.5,16.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggAgQgNgNAAgSQAAgTANgOQAOgNASAAQATAAAOANQANAOAAATQAAASgOANQgNAOgTAAQgSAAgOgOgAgVgWQgJAKAAAMQAAANAJAKQAIAKANgBQAOABAIgKQAJgKAAgNQAAgMgJgKQgIgKgOAAQgNABgIAJg");
	this.shape_9.setTransform(109.2,17);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUBNIAAgyQAAgKgDgIQgDgJgNAAQgLABgFAIQgEAJAAAKIAAAEIAAADIAAAqIgPAAIAAiYIAPAAIAABLIAAAAQAFgFAGgEQAGgDAHAAQASAAAGALQAGAKAAAQIAAA0g");
	this.shape_10.setTransform(99.2,13.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAtIAAhXIAPAAIAAAKIAAAAIABgBIABgBQADgFADgCQAEgDAHAAIAFABIAGACIABABIABAAIgHAOIgBgBIgCgBIgDgBIgDgBQgIAAgDAGQgDAGgBAIIgBAGIAAAFIAAAsg");
	this.shape_11.setTransform(86,16.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaAiQgIgLAAgRIAAgyIAPAAIAAAwQAAALADAIQAEAJAMgBQAOABACgJQADgIAAgLIAAgwIAQAAIAAAyQgBARgHALQgIALgTAAQgTAAgHgLg");
	this.shape_12.setTransform(77.6,17.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AggAgQgNgNAAgSQAAgTANgOQAOgNASAAQATAAAOANQANAOAAATQAAASgOANQgNAOgTAAQgSAAgOgOgAgVgWQgJAKAAAMQAAANAJAKQAIAKANgBQAOABAIgKQAJgKAAgNQAAgMgJgKQgIgKgOAAQgNABgIAJg");
	this.shape_13.setTransform(67.6,17);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiBEIAcg5IgohOIASAAIAdA/IAdg/IARAAIhACHg");
	this.shape_14.setTransform(57.8,19.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAhQgLgNAAgTQAAgSALgOQALgOATAAQAUAAALANQALAOAAASIAAABIAAABIgBAAIAAABIhDAAQAAAMAIAJQAIAJAMgBQAJAAAGgEQAHgGAEgIIANAHQgHANgKAFQgKAHgOAAQgSAAgMgNgAgQgZQgIAHgBAKIAzAAQgBgKgIgHQgHgHgKAAQgIAAgIAHg");
	this.shape_15.setTransform(42.7,17);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AARBNIgigoIgEAEIAAAkIgPAAIAAiYIAPAAIAABhIAfggIAUAAIglAkIAsAzg");
	this.shape_16.setTransform(34.1,13.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgfAgQgMgOAAgRQAAgTAMgOQALgNAUAAQAHAAAJAEQAHAEAFAHIABgBIAAgMIAPAAIAABXIgPAAIAAgNIgBAAQgFAIgHAEQgJADgHAAQgUAAgLgOgAgTgWQgIAKAAAMQAAAMAIAKQAGALANgBQAPAAAHgKQAIgJgBgNQAAgNgHgJQgIgKgOAAQgMABgHAJg");
	this.shape_17.setTransform(23.4,17);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgsgWIAAAAIgSBdIgQAAIAciTIAyB1IAzh1IAcCTIgQAAIgShdIgtBjg");
	this.shape_18.setTransform(10,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,140.2,45.9), null);


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


(lib.Symbol4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7664").s().p("AkkElIAApJIJJAAIAAJJg");
	this.shape.setTransform(29.3,29.3,1,1.07);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4copy, new cjs.Rectangle(0,-2,58.5,62.6), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkkE5IAApxIJJAAIAAJxg");
	this.shape.setTransform(29.3,29.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,-1.9,58.5,62.5), null);


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


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Layer 1
	this.instance = new lib.Symbol165("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(66,43.1,1.055,0.048);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance.cache(-21,-20,42,40);

	this.instance_1 = new lib.Symbol164("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(28,42.8,1.055,0.145);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_1.cache(-15,-19,30,38);

	this.instance_2 = new lib.Symbol166("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(107.2,43,1.055,0.096);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_2.cache(-20,-19,40,38);

	this.instance_3 = new lib.Symbol168("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(165.1,43.1,1.055,0.047);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_3.cache(-19,-19,38,38);

	this.instance_4 = new lib.Symbol167("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(134.9,42.8,1.055,0.144);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_4.cache(-6,-19,13,38);

	this.instance_5 = new lib.Symbol169("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(207.8,43,1.055,0.095);
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_5.cache(-20,-20,40,40);

	this.instance_6 = new lib.Symbol171("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(300.6,43.1,1.055,0.045);
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_6.cache(-20,-19,40,38);

	this.instance_7 = new lib.Symbol170("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(263.5,42.8,1.055,0.143);
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_7.cache(-17,-19,34,38);

	this.instance_8 = new lib.Symbol172("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(337.1,43,1.055,0.093);
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_8.cache(-19,-19,38,38);

	this.instance_9 = new lib.Symbol173("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(27.5,92.6,1.055,0.141);
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_9.cache(-15,-20,29,40);

	this.instance_10 = new lib.Symbol171("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(300.6,42.2,1.055,0.336);
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_10.cache(-20,-19,40,38);

	this.instance_11 = new lib.Symbol174("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(95.4,92.7,1.055,0.092);
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_11.cache(-12,-19,24,38);

	this.instance_12 = new lib.Symbol176("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(167.6,92.9,1.055,0.043);
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_12.cache(-17,-19,34,39);

	this.instance_13 = new lib.Symbol175("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(120.6,92.6,1.055,0.14);
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 7, 0, 0)];
	this.instance_13.cache(-12,-19,23,38);

	this.instance_14 = new lib.Symbol177("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(204.5,92.7,1.055,0.091);
	this.instance_14.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_14.cache(-15,-19,30,38);

	this.instance_15 = new lib.Symbol165copy("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(281.9,92.9,1.055,0.042);
	this.instance_15.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_15.cache(-21,-20,42,40);

	this.instance_16 = new lib.Symbol178("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(247.1,92.6,1.055,0.139);
	this.instance_16.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_16.cache(-14,-19,28,38);

	this.instance_17 = new lib.Symbol179("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(29.7,142.5,1.055,0.09);
	this.instance_17.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_17.cache(-17,-19,33,38);

	this.instance_18 = new lib.Symbol181("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(100.8,142.7,1.055,0.04);
	this.instance_18.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_18.cache(-23,-19,47,39);

	this.instance_19 = new lib.Symbol180("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(60.5,142.3,1.055,0.138);
	this.instance_19.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_19.cache(-16,-20,33,41);

	this.instance_20 = new lib.Symbol165copy("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(281.9,91.5,1.055,0.477);
	this.instance_20.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_20.cache(-21,-20,42,40);

	this.instance_21 = new lib.Symbol182("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(224.5,142.7,1.055,0.039);
	this.instance_21.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_21.cache(-12,-19,24,38);

	this.instance_22 = new lib.Symbol182("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(198.3,142.3,1.055,0.136);
	this.instance_22.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_22.cache(-12,-19,24,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleY:0.145,y:42.8}},{t:this.instance,p:{scaleY:0.048,y:43.1}}]}).to({state:[{t:this.instance_1,p:{scaleY:0.29,y:42.3}},{t:this.instance,p:{scaleY:0.193,y:42.7}},{t:this.instance_2,p:{scaleY:0.096,y:43}}]},1).to({state:[{t:this.instance_1,p:{scaleY:0.435,y:41.8}},{t:this.instance,p:{scaleY:0.338,y:42.2}},{t:this.instance_2,p:{scaleY:0.241,y:42.5}},{t:this.instance_4,p:{scaleY:0.144,y:42.8}},{t:this.instance_3,p:{scaleY:0.047,y:43.1}}]},1).to({state:[{t:this.instance_1,p:{scaleY:0.58,y:41.4}},{t:this.instance,p:{scaleY:0.483,y:41.7}},{t:this.instance_2,p:{scaleY:0.386,y:42}},{t:this.instance_4,p:{scaleY:0.289,y:42.3}},{t:this.instance_3,p:{scaleY:0.192,y:42.7}},{t:this.instance_5,p:{scaleY:0.095,y:43}}]},1).to({state:[{t:this.instance_1,p:{scaleY:0.725,y:40.9}},{t:this.instance,p:{scaleY:0.628,y:41.2}},{t:this.instance_2,p:{scaleY:0.531,y:41.5}},{t:this.instance_4,p:{scaleY:0.434,y:41.8}},{t:this.instance_3,p:{scaleY:0.337,y:42.2}},{t:this.instance_5,p:{scaleY:0.24,y:42.5}},{t:this.instance_7,p:{scaleY:0.143,y:42.8}},{t:this.instance_6,p:{scaleY:0.045,y:43.1,x:300.6}}]},1).to({state:[{t:this.instance_1,p:{scaleY:0.87,y:40.4}},{t:this.instance,p:{scaleY:0.773,y:40.8}},{t:this.instance_2,p:{scaleY:0.676,y:41}},{t:this.instance_4,p:{scaleY:0.579,y:41.4}},{t:this.instance_3,p:{scaleY:0.482,y:41.7}},{t:this.instance_5,p:{scaleY:0.385,y:42}},{t:this.instance_7,p:{scaleY:0.288,y:42.3}},{t:this.instance_6,p:{scaleY:0.191,y:42.7,x:300.6}},{t:this.instance_8,p:{scaleY:0.093,y:43}}]},1).to({state:[{t:this.instance_1,p:{scaleY:1.016,y:39.9}},{t:this.instance,p:{scaleY:0.918,y:40.3}},{t:this.instance_2,p:{scaleY:0.821,y:40.6}},{t:this.instance_4,p:{scaleY:0.724,y:40.9}},{t:this.instance_3,p:{scaleY:0.627,y:41.2}},{t:this.instance_5,p:{scaleY:0.53,y:41.5}},{t:this.instance_7,p:{scaleY:0.433,y:41.9}},{t:this.instance_10,p:{scaleY:0.336,y:42.2}},{t:this.instance_8,p:{scaleY:0.238,y:42.5}},{t:this.instance_9,p:{scaleY:0.141,y:92.6}},{t:this.instance_6,p:{scaleY:0.044,y:92.9,x:62.1}}]},1).to({state:[{t:this.instance_1,p:{scaleY:1.055,y:39.8}},{t:this.instance,p:{scaleY:1.055,y:39.9}},{t:this.instance_2,p:{scaleY:0.966,y:40.1}},{t:this.instance_4,p:{scaleY:0.869,y:40.4}},{t:this.instance_3,p:{scaleY:0.772,y:40.7}},{t:this.instance_5,p:{scaleY:0.675,y:41.1}},{t:this.instance_7,p:{scaleY:0.578,y:41.4}},{t:this.instance_10,p:{scaleY:0.481,y:41.7}},{t:this.instance_8,p:{scaleY:0.384,y:42}},{t:this.instance_9,p:{scaleY:0.286,y:92.1}},{t:this.instance_6,p:{scaleY:0.189,y:92.4,x:62.1}},{t:this.instance_11,p:{scaleY:0.092,y:92.7}}]},1).to({state:[{t:this.instance_1,p:{scaleY:1.055,y:39.8}},{t:this.instance,p:{scaleY:1.055,y:39.9}},{t:this.instance_2,p:{scaleY:1.055,y:39.8}},{t:this.instance_4,p:{scaleY:1.014,y:39.9}},{t:this.instance_3,p:{scaleY:0.917,y:40.2}},{t:this.instance_5,p:{scaleY:0.82,y:40.6}},{t:this.instance_7,p:{scaleY:0.723,y:40.9}},{t:this.instance_10,p:{scaleY:0.626,y:41.2}},{t:this.instance_8,p:{scaleY:0.529,y:41.5}},{t:this.instance_9,p:{scaleY:0.431,y:91.6}},{t:this.instance_6,p:{scaleY:0.334,y:91.9,x:62.1}},{t:this.instance_11,p:{scaleY:0.237,y:92.3}},{t:this.instance_13,p:{scaleY:0.14,y:92.6}},{t:this.instance_12,p:{scaleY:0.043,y:92.9}}]},1).to({state:[{t:this.instance_1,p:{scaleY:1.055,y:39.8}},{t:this.instance,p:{scaleY:1.055,y:39.9}},{t:this.instance_2,p:{scaleY:1.055,y:39.8}},{t:this.instance_4,p:{scaleY:1.055,y:39.8}},{t:this.instance_3,p:{scaleY:1.055,y:39.8}},{t:this.instance_5,p:{scaleY:0.965,y:40.1}},{t:this.instance_7,p:{scaleY:0.868,y:40.4}},{t:this.instance_10,p:{scaleY:0.771,y:40.7}},{t:this.instance_8,p:{scaleY:0.674,y:41.1}},{t:this.instance_9,p:{scaleY:0.577,y:91.1}},{t:this.instance_6,p:{scaleY:0.479,y:91.4,x:62.1}},{t:this.instance_11,p:{scaleY:0.382,y:91.8}},{t:this.instance_13,p:{scaleY:0.285,y:92.1}},{t:this.instance_12,p:{scaleY:0.188,y:92.5}},{t:this.instance_14,p:{scaleY:0.091,y:92.7}}]},1).to({state:[{t:this.instance_1,p:{scaleY:1.055,y:39.8}},{t:this.instance,p:{scaleY:1.055,y:39.9}},{t:this.instance_2,p:{scaleY:1.055,y:39.8}},{t:this.instance_4,p:{scaleY:1.055,y:39.8}},{t:this.instance_3,p:{scaleY:1.055,y:39.8}},{t:this.instance_5,p:{scaleY:1.055,y:39.8}},{t:this.instance_7,p:{scaleY:1.013,y:39.9}},{t:this.instance_10,p:{scaleY:0.916,y:40.2}},{t:this.instance_8,p:{scaleY:0.819,y:40.6}},{t:this.instance_9,p:{scaleY:0.722,y:90.6}},{t:this.instance_6,p:{scaleY:0.624,y:91,x:62.1}},{t:this.instance_11,p:{scaleY:0.527,y:91.3}},{t:this.instance_13,p:{scaleY:0.43,y:91.6}},{t:this.instance_12,p:{scaleY:0.333,y:92.1}},{t:this.instance_14,p:{scaleY:0.236,y:92.3}},{t:this.instance_16,p:{scaleY:0.139,y:92.6}},{t:this.instance_15,p:{scaleY:0.042,y:92.9,x:281.9}}]},1).to({state:[{t:this.instance_1,p:{scaleY:1.055,y:39.8}},{t:this.instance,p:{scaleY:1.055,y:39.9}},{t:this.instance_2,p:{scaleY:1.055,y:39.8}},{t:this.instance_4,p:{scaleY:1.055,y:39.8}},{t:this.instance_3,p:{scaleY:1.055,y:39.8}},{t:this.instance_5,p:{scaleY:1.055,y:39.8}},{t:this.instance_7,p:{scaleY:1.055,y:39.8}},{t:this.instance_10,p:{scaleY:1.055,y:39.8}},{t:this.instance_8,p:{scaleY:0.964,y:40.1}},{t:this.instance_9,p:{scaleY:0.867,y:90.2}},{t:this.instance_6,p:{scaleY:0.77,y:90.5,x:62.1}},{t:this.instance_11,p:{scaleY:0.672,y:90.8}},{t:this.instance_13,p:{scaleY:0.575,y:91.1}},{t:this.instance_12,p:{scaleY:0.478,y:91.6}},{t:this.instance_14,p:{scaleY:0.381,y:91.8}},{t:this.instance_16,p:{scaleY:0.284,y:92.1}},{t:this.instance_15,p:{scaleY:0.187,y:92.4,x:281.9}},{t:this.instance_17,p:{scaleY:0.09,y:142.5}}]},1).to({state:[{t:this.instance_1,p:{scaleY:1.055,y:39.8}},{t:this.instance,p:{scaleY:1.055,y:39.9}},{t:this.instance_2,p:{scaleY:1.055,y:39.8}},{t:this.instance_4,p:{scaleY:1.055,y:39.8}},{t:this.instance_3,p:{scaleY:1.055,y:39.8}},{t:this.instance_5,p:{scaleY:1.055,y:39.8}},{t:this.instance_7,p:{scaleY:1.055,y:39.8}},{t:this.instance_10,p:{scaleY:1.055,y:39.8}},{t:this.instance_8,p:{scaleY:1.055,y:39.8}},{t:this.instance_9,p:{scaleY:1.012,y:89.7}},{t:this.instance_6,p:{scaleY:0.915,y:90,x:62.1}},{t:this.instance_11,p:{scaleY:0.818,y:90.3}},{t:this.instance_13,p:{scaleY:0.72,y:90.6}},{t:this.instance_12,p:{scaleY:0.623,y:91.2}},{t:this.instance_14,p:{scaleY:0.526,y:91.3}},{t:this.instance_16,p:{scaleY:0.429,y:91.6}},{t:this.instance_15,p:{scaleY:0.332,y:92,x:281.9}},{t:this.instance_17,p:{scaleY:0.235,y:142}},{t:this.instance_19,p:{scaleY:0.138,y:142.3}},{t:this.instance_18,p:{scaleY:0.04,y:142.7}}]},1).to({state:[{t:this.instance_1,p:{scaleY:1.055,y:39.8}},{t:this.instance,p:{scaleY:1.055,y:39.9}},{t:this.instance_2,p:{scaleY:1.055,y:39.8}},{t:this.instance_4,p:{scaleY:1.055,y:39.8}},{t:this.instance_3,p:{scaleY:1.055,y:39.8}},{t:this.instance_5,p:{scaleY:1.055,y:39.8}},{t:this.instance_7,p:{scaleY:1.055,y:39.8}},{t:this.instance_10,p:{scaleY:1.055,y:39.8}},{t:this.instance_8,p:{scaleY:1.055,y:39.8}},{t:this.instance_9,p:{scaleY:1.055,y:89.5}},{t:this.instance_6,p:{scaleY:1.055,y:89.5,x:62.1}},{t:this.instance_11,p:{scaleY:0.963,y:89.8}},{t:this.instance_13,p:{scaleY:0.865,y:90.2}},{t:this.instance_12,p:{scaleY:0.768,y:90.8}},{t:this.instance_14,p:{scaleY:0.671,y:90.8}},{t:this.instance_16,p:{scaleY:0.574,y:91.1}},{t:this.instance_20,p:{scaleY:0.477,y:91.5}},{t:this.instance_17,p:{scaleY:0.38,y:141.5}},{t:this.instance_19,p:{scaleY:0.283,y:141.8}},{t:this.instance_18,p:{scaleY:0.185,y:142.2}},{t:this.instance_15,p:{scaleY:0.088,y:142.5,x:162.1}}]},1).to({state:[{t:this.instance_1,p:{scaleY:1.055,y:39.8}},{t:this.instance,p:{scaleY:1.055,y:39.9}},{t:this.instance_2,p:{scaleY:1.055,y:39.8}},{t:this.instance_4,p:{scaleY:1.055,y:39.8}},{t:this.instance_3,p:{scaleY:1.055,y:39.8}},{t:this.instance_5,p:{scaleY:1.055,y:39.8}},{t:this.instance_7,p:{scaleY:1.055,y:39.8}},{t:this.instance_10,p:{scaleY:1.055,y:39.8}},{t:this.instance_8,p:{scaleY:1.055,y:39.8}},{t:this.instance_9,p:{scaleY:1.055,y:89.5}},{t:this.instance_6,p:{scaleY:1.055,y:89.5,x:62.1}},{t:this.instance_11,p:{scaleY:1.055,y:89.5}},{t:this.instance_13,p:{scaleY:1.011,y:89.7}},{t:this.instance_12,p:{scaleY:0.913,y:90.4}},{t:this.instance_14,p:{scaleY:0.816,y:90.3}},{t:this.instance_16,p:{scaleY:0.719,y:90.6}},{t:this.instance_20,p:{scaleY:0.622,y:91}},{t:this.instance_17,p:{scaleY:0.525,y:141}},{t:this.instance_19,p:{scaleY:0.428,y:141.4}},{t:this.instance_18,p:{scaleY:0.331,y:141.7}},{t:this.instance_15,p:{scaleY:0.233,y:142,x:162.1}},{t:this.instance_22,p:{scaleY:0.136,y:142.3}},{t:this.instance_21,p:{scaleY:0.039,y:142.7}}]},1).to({state:[{t:this.instance_1,p:{scaleY:1.055,y:39.8}},{t:this.instance,p:{scaleY:1.055,y:39.9}},{t:this.instance_2,p:{scaleY:1.055,y:39.8}},{t:this.instance_4,p:{scaleY:1.055,y:39.8}},{t:this.instance_3,p:{scaleY:1.055,y:39.8}},{t:this.instance_5,p:{scaleY:1.055,y:39.8}},{t:this.instance_7,p:{scaleY:1.055,y:39.8}},{t:this.instance_10,p:{scaleY:1.055,y:39.8}},{t:this.instance_8,p:{scaleY:1.055,y:39.8}},{t:this.instance_9,p:{scaleY:1.055,y:89.5}},{t:this.instance_6,p:{scaleY:1.055,y:89.5,x:62.1}},{t:this.instance_11,p:{scaleY:1.055,y:89.5}},{t:this.instance_13,p:{scaleY:1.055,y:89.5}},{t:this.instance_12,p:{scaleY:1.055,y:90}},{t:this.instance_14,p:{scaleY:0.961,y:89.8}},{t:this.instance_16,p:{scaleY:0.864,y:90.2}},{t:this.instance_20,p:{scaleY:0.767,y:90.5}},{t:this.instance_17,p:{scaleY:0.67,y:140.6}},{t:this.instance_19,p:{scaleY:0.573,y:140.9}},{t:this.instance_18,p:{scaleY:0.476,y:141.2}},{t:this.instance_15,p:{scaleY:0.378,y:141.6,x:162.1}},{t:this.instance_22,p:{scaleY:0.281,y:141.9}},{t:this.instance_21,p:{scaleY:0.184,y:142.2}}]},1).to({state:[{t:this.instance_1,p:{scaleY:1.055,y:39.8}},{t:this.instance,p:{scaleY:1.055,y:39.9}},{t:this.instance_2,p:{scaleY:1.055,y:39.8}},{t:this.instance_4,p:{scaleY:1.055,y:39.8}},{t:this.instance_3,p:{scaleY:1.055,y:39.8}},{t:this.instance_5,p:{scaleY:1.055,y:39.8}},{t:this.instance_7,p:{scaleY:1.055,y:39.8}},{t:this.instance_10,p:{scaleY:1.055,y:39.8}},{t:this.instance_8,p:{scaleY:1.055,y:39.8}},{t:this.instance_9,p:{scaleY:1.055,y:89.5}},{t:this.instance_6,p:{scaleY:1.055,y:89.5,x:62.1}},{t:this.instance_11,p:{scaleY:1.055,y:89.5}},{t:this.instance_13,p:{scaleY:1.055,y:89.5}},{t:this.instance_12,p:{scaleY:1.055,y:90}},{t:this.instance_14,p:{scaleY:1.055,y:89.5}},{t:this.instance_16,p:{scaleY:1.009,y:89.7}},{t:this.instance_20,p:{scaleY:0.912,y:90.1}},{t:this.instance_17,p:{scaleY:0.815,y:140.1}},{t:this.instance_19,p:{scaleY:0.718,y:140.4}},{t:this.instance_18,p:{scaleY:0.621,y:140.7}},{t:this.instance_15,p:{scaleY:0.524,y:141.1,x:162.1}},{t:this.instance_22,p:{scaleY:0.426,y:141.4}},{t:this.instance_21,p:{scaleY:0.329,y:141.7}}]},1).to({state:[{t:this.instance_1,p:{scaleY:1.055,y:39.8}},{t:this.instance,p:{scaleY:1.055,y:39.9}},{t:this.instance_2,p:{scaleY:1.055,y:39.8}},{t:this.instance_4,p:{scaleY:1.055,y:39.8}},{t:this.instance_3,p:{scaleY:1.055,y:39.8}},{t:this.instance_5,p:{scaleY:1.055,y:39.8}},{t:this.instance_7,p:{scaleY:1.055,y:39.8}},{t:this.instance_10,p:{scaleY:1.055,y:39.8}},{t:this.instance_8,p:{scaleY:1.055,y:39.8}},{t:this.instance_9,p:{scaleY:1.055,y:89.5}},{t:this.instance_6,p:{scaleY:1.055,y:89.5,x:62.1}},{t:this.instance_11,p:{scaleY:1.055,y:89.5}},{t:this.instance_13,p:{scaleY:1.055,y:89.5}},{t:this.instance_12,p:{scaleY:1.055,y:90}},{t:this.instance_14,p:{scaleY:1.055,y:89.5}},{t:this.instance_16,p:{scaleY:1.055,y:89.5}},{t:this.instance_20,p:{scaleY:1.055,y:89.6}},{t:this.instance_17,p:{scaleY:0.96,y:139.6}},{t:this.instance_19,p:{scaleY:0.863,y:139.9}},{t:this.instance_18,p:{scaleY:0.766,y:140.2}},{t:this.instance_15,p:{scaleY:0.669,y:140.6,x:162.1}},{t:this.instance_22,p:{scaleY:0.572,y:140.9}},{t:this.instance_21,p:{scaleY:0.474,y:141.2}}]},1).to({state:[{t:this.instance_1,p:{scaleY:1.055,y:39.8}},{t:this.instance,p:{scaleY:1.055,y:39.9}},{t:this.instance_2,p:{scaleY:1.055,y:39.8}},{t:this.instance_4,p:{scaleY:1.055,y:39.8}},{t:this.instance_3,p:{scaleY:1.055,y:39.8}},{t:this.instance_5,p:{scaleY:1.055,y:39.8}},{t:this.instance_7,p:{scaleY:1.055,y:39.8}},{t:this.instance_10,p:{scaleY:1.055,y:39.8}},{t:this.instance_8,p:{scaleY:1.055,y:39.8}},{t:this.instance_9,p:{scaleY:1.055,y:89.5}},{t:this.instance_6,p:{scaleY:1.055,y:89.5,x:62.1}},{t:this.instance_11,p:{scaleY:1.055,y:89.5}},{t:this.instance_13,p:{scaleY:1.055,y:89.5}},{t:this.instance_12,p:{scaleY:1.055,y:90}},{t:this.instance_14,p:{scaleY:1.055,y:89.5}},{t:this.instance_16,p:{scaleY:1.055,y:89.5}},{t:this.instance_20,p:{scaleY:1.055,y:89.6}},{t:this.instance_17,p:{scaleY:1.055,y:139.3}},{t:this.instance_19,p:{scaleY:1.008,y:139.4}},{t:this.instance_18,p:{scaleY:0.911,y:139.8}},{t:this.instance_15,p:{scaleY:0.814,y:140.1,x:162.1}},{t:this.instance_22,p:{scaleY:0.717,y:140.4}},{t:this.instance_21,p:{scaleY:0.619,y:140.7}}]},1).to({state:[{t:this.instance_1,p:{scaleY:1.055,y:39.8}},{t:this.instance,p:{scaleY:1.055,y:39.9}},{t:this.instance_2,p:{scaleY:1.055,y:39.8}},{t:this.instance_4,p:{scaleY:1.055,y:39.8}},{t:this.instance_3,p:{scaleY:1.055,y:39.8}},{t:this.instance_5,p:{scaleY:1.055,y:39.8}},{t:this.instance_7,p:{scaleY:1.055,y:39.8}},{t:this.instance_10,p:{scaleY:1.055,y:39.8}},{t:this.instance_8,p:{scaleY:1.055,y:39.8}},{t:this.instance_9,p:{scaleY:1.055,y:89.5}},{t:this.instance_6,p:{scaleY:1.055,y:89.5,x:62.1}},{t:this.instance_11,p:{scaleY:1.055,y:89.5}},{t:this.instance_13,p:{scaleY:1.055,y:89.5}},{t:this.instance_12,p:{scaleY:1.055,y:90}},{t:this.instance_14,p:{scaleY:1.055,y:89.5}},{t:this.instance_16,p:{scaleY:1.055,y:89.5}},{t:this.instance_20,p:{scaleY:1.055,y:89.6}},{t:this.instance_17,p:{scaleY:1.055,y:139.3}},{t:this.instance_19,p:{scaleY:1.055,y:139.3}},{t:this.instance_18,p:{scaleY:1.055,y:139.3}},{t:this.instance_15,p:{scaleY:0.959,y:139.7,x:162.1}},{t:this.instance_22,p:{scaleY:0.862,y:139.9}},{t:this.instance_21,p:{scaleY:0.765,y:140.2}}]},1).to({state:[{t:this.instance_1,p:{scaleY:1.055,y:39.8}},{t:this.instance,p:{scaleY:1.055,y:39.9}},{t:this.instance_2,p:{scaleY:1.055,y:39.8}},{t:this.instance_4,p:{scaleY:1.055,y:39.8}},{t:this.instance_3,p:{scaleY:1.055,y:39.8}},{t:this.instance_5,p:{scaleY:1.055,y:39.8}},{t:this.instance_7,p:{scaleY:1.055,y:39.8}},{t:this.instance_10,p:{scaleY:1.055,y:39.8}},{t:this.instance_8,p:{scaleY:1.055,y:39.8}},{t:this.instance_9,p:{scaleY:1.055,y:89.5}},{t:this.instance_6,p:{scaleY:1.055,y:89.5,x:62.1}},{t:this.instance_11,p:{scaleY:1.055,y:89.5}},{t:this.instance_13,p:{scaleY:1.055,y:89.5}},{t:this.instance_12,p:{scaleY:1.055,y:90}},{t:this.instance_14,p:{scaleY:1.055,y:89.5}},{t:this.instance_16,p:{scaleY:1.055,y:89.5}},{t:this.instance_20,p:{scaleY:1.055,y:89.6}},{t:this.instance_17,p:{scaleY:1.055,y:139.3}},{t:this.instance_19,p:{scaleY:1.055,y:139.3}},{t:this.instance_18,p:{scaleY:1.055,y:139.3}},{t:this.instance_15,p:{scaleY:1.055,y:139.4,x:162.1}},{t:this.instance_22,p:{scaleY:1.007,y:139.4}},{t:this.instance_21,p:{scaleY:0.91,y:139.8}}]},1).to({state:[{t:this.instance_1,p:{scaleY:1.055,y:39.8}},{t:this.instance,p:{scaleY:1.055,y:39.9}},{t:this.instance_2,p:{scaleY:1.055,y:39.8}},{t:this.instance_4,p:{scaleY:1.055,y:39.8}},{t:this.instance_3,p:{scaleY:1.055,y:39.8}},{t:this.instance_5,p:{scaleY:1.055,y:39.8}},{t:this.instance_7,p:{scaleY:1.055,y:39.8}},{t:this.instance_10,p:{scaleY:1.055,y:39.8}},{t:this.instance_8,p:{scaleY:1.055,y:39.8}},{t:this.instance_9,p:{scaleY:1.055,y:89.5}},{t:this.instance_6,p:{scaleY:1.055,y:89.5,x:62.1}},{t:this.instance_11,p:{scaleY:1.055,y:89.5}},{t:this.instance_13,p:{scaleY:1.055,y:89.5}},{t:this.instance_12,p:{scaleY:1.055,y:90}},{t:this.instance_14,p:{scaleY:1.055,y:89.5}},{t:this.instance_16,p:{scaleY:1.055,y:89.5}},{t:this.instance_20,p:{scaleY:1.055,y:89.6}},{t:this.instance_17,p:{scaleY:1.055,y:139.3}},{t:this.instance_19,p:{scaleY:1.055,y:139.3}},{t:this.instance_18,p:{scaleY:1.055,y:139.3}},{t:this.instance_15,p:{scaleY:1.055,y:139.4,x:162.1}},{t:this.instance_22,p:{scaleY:1.055,y:139.3}},{t:this.instance_21,p:{scaleY:1.055,y:139.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.2,20.7,340.8,138);


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


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(0.5,0.1,1,1,0,0,0,44.5,12.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Eg4dALeIAA27MBw6AAAIAAW7g");
	this.shape.setTransform(-243.1,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-12.2,89,24.5);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(77.7,18.1,1,1,0,0,0,70,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77.7,18.1,1,1,0,0,0,70,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(7.7,-4.8,140.2,45.9), null);


// stage content:
(lib.HFG_320x100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		myCounter=1;
	}
	this.frame_214 = function() {
		if(myCounter>=2){
			this.stop();
		}else {
			myCounter++;
			this.gotoAndPlay(1);	
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(214).call(this.frame_214).wait(1));

	// CTA
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(273.8,99.6,0.876,0.868,0,0,0,0.4,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol18(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(113).to({_off:false},0).to({y:84.6,alpha:1},7,cjs.Ease.get(1)).wait(95));

	// Layer 4
	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(207.3,40.3,0.449,0.448,0,0,0,185.3,90);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(86).to({_off:false},0).wait(129));

	// Layer 3
	this.instance_2 = new lib.Symbol16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.9,65.4,0.621,0.616,0,0,0,77.9,20.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70).to({_off:false},0).to({y:61.4,alpha:1},6,cjs.Ease.get(1)).wait(139));

	// Layer 2
	this.instance_3 = new lib.Symbol1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(56.4,19.1,0.291,0.29,0,0,0,172.6,65.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(63).to({_off:false},0).to({y:26.1,alpha:1},7,cjs.Ease.get(1)).wait(145));

	// url
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(159.2,30.7,0.941,0.938,0,0,0,104.6,13);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({y:44.7,alpha:1},6).wait(24).to({x:119.2,alpha:0},8,cjs.Ease.get(0.93)).to({_off:true},1).wait(151));

	// logo
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(160.2,40.8,0.293,0.292,0,0,0,272.1,31.2);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:31,y:47.2,alpha:1},8,cjs.Ease.get(1)).wait(17).to({y:59.2,alpha:0},6).to({_off:true},1).wait(183));

	// logo bg
	this.instance_6 = new lib.Symbol4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(269,52.1,9.181,1.696,0,0,0,29.3,29.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(55).to({_off:false},0).to({regY:29.9,scaleX:2.09,scaleY:1.61,x:61.3,y:50.5},9,cjs.Ease.get(1)).wait(151));

	// black bg
	this.instance_7 = new lib.Symbol4copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(162.4,49.6,5.541,1.611,0,0,0,29.3,29.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(77).to({_off:false},0).to({alpha:0.648},8).wait(130));

	// bg
	this.instance_8 = new lib.Symbol3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-96,142.4,1.145,1.144,0,0,0,150.2,125.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(55).to({_off:false},0).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(240.6,81.7,159,17.8);
// library properties:
lib.properties = {
	width: 320,
	height: 100,
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