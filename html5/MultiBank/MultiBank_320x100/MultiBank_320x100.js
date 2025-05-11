(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,82);


(lib.left = function() {
	this.initialize(img.left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,250);


(lib.right = function() {
	this.initialize(img.right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,250);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBFIg0hkIgvBkIgDAAIg8hzQgFgJgGgEQgGgEgLAAIgEAAIAAgFIBiAAIAAAFIgFAAQgGAAgDACQgDACgBADIAAABIAjBEIAYgyIgFgJIgCgEQgEgHgEgCQgDgDgMgBIAAgFIBbAAIAAAFIgFAAIgKAAQgDAAAAAEQAAADADAGIAgA/IAQghQADgKABgHQgBgKgFgHQgHgIgLgBIAAgFIBGAAIAAAFQgNAAgLAKQgLAKgIATIgrBdgAgmA+IAEgJIgIAAgAiMA+IAEgJIgJAAgAgsAyIAMAAIADgJIgUAAgAiSAyIALAAIAFgJIgUAAgAgyAmIAXAAIADgGIgBgDIgeAAgAiZAmIAYAAIADgGIgCgDIgdAAgAg5AaIAeAAIgEgJIgeAAgAieAaIAcAAIgEgJIgdAAgAg/AOIAeAAIgFgJIgdAAgAilAOIAdAAIgEgJIgdAAgAhFACIAeAAIgFgIIgdAAgAirACIAeAAIgFgIIgdAAgAhLgJIAdAAIgEgJIgdAAgAixgJIAdAAIgEgJIgeAAgAhRgVIAeAAIgFgJIgdAAgAi4gVIAeAAIgEgJIgeAAgAhXghIAdAAIgEgJIgeAAgAi+ghIAeAAIgFgJIgdAAgAAGgvIABADIABAEIAIgOIgNAAIADAHgAhfgxIABAEIAeAAIgBgDIgCgGIggAAIAEAFgAjDgtIAdAAIgBgDIgCgGIggAAgAAAg5IATAAIAEgGIgdAAgAhmg7IABACIAiAAQAAgDACgDIgsAAIAHAEgAjLg5IAiAAQAAgDACgDIgsAAgABCBAIAAgEIAHAAQAPAAAEgFQADgDAAgOIAAhPQAAgNgEgEQgEgFgOAAIgHAAIAAgFICmAAIAAAwIgEAAQgLgOgHgIQgKgKgLgFQgMgGgOAAIgVAAIAAA4IAGAAQAMAAAIgGQAJgFAHgMIAFAAIAAAyIgFAAQgFgIgDgEQgNgKgPAAIgGAAIAAA+IAQAAQATAAATgMQANgIAMgNIAIgMIAFAAIAAAxgAC3A8IAlAAIAAgIIgWAAgABgA5IgCADIAhAAIAAgHIgdAAIgCAEgABkAuIAAAEIAbAAIAAgJIgaAAIgBAFgADPAtIgFAEIASAAIAAgQIgNAMgABlAmIAaAAIAAgJIgaAAgABlAaIAaAAIAAgJIgaAAgABlAOIAaAAIAAgJIgaAAgACyAGIAAgJIgOAAgABlACIAaAAIAAgIIgaAAgACrgLIgGAFIANAAIAAgKIgHAFgABlgJIAaAAIAAgJIgaAAgABlgVIAaAAIAAgJIgaAAgABlghIAaAAIAAgJIgaAAgADRguIAKAJIAAgPIgRAAIAHAGgABlgtIAaAAIAAgJIgbAAgADGg4IAVAAIAAgHIghAAgABig5IAdAAIAAgGIghAAIAEAGg");
	this.shape.setTransform(23.4,6.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,46.8,13.9), null);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(105.175,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,210.4,14.4), null);


(lib.Symbol28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(61.65,7.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,123.3,14.3), null);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.right();
	this.instance.setTransform(627,0);

	this.instance_1 = new lib.left();
	this.instance_1.setTransform(2,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(2,-20,753,270), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeAnIAAg/IAAAAIgaA/IgGAAIgbg/IAAA/IgLAAIAAhNIAQAAIAYA6IAAAAIAZg6IAQAAIAABNg");
	this.shape.setTransform(89.475,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgIAGgFQAFgFAIgEQAHgDAIAAQAJAAAHADQAIAEAFAFQAGAFADAIQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgbQgFACgEAEQgEAFgCAFQgCAGAAAFQAAAHACAFQACAGAEAEQAEAEAFACQAFADAGAAQAHAAAFgDQAGgCADgEQAEgEACgGQACgFAAgHQAAgFgCgGQgCgFgEgFQgDgEgGgCQgFgDgHAAQgGAAgFADg");
	this.shape_1.setTransform(79.925,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgIAGgFQAFgFAIgEQAHgDAIAAQAJAAAHADQAIAEAFAFQAGAFADAIQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgbQgFACgEAEQgEAFgCAFQgCAGAAAFQAAAHACAFQACAGAEAEQAEAEAFACQAFADAGAAQAHAAAFgDQAGgCADgEQAEgEACgGQACgFAAgHQAAgFgCgGQgCgFgEgFQgDgEgGgCQgFgDgHAAQgGAAgFADg");
	this.shape_2.setTransform(70.775,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAnIAAhNIAaAAQAFAAAFABQAEACADACIAFAGQACAEAAAEQAAAIgEADQgEAFgGACQAEAAADABIAFAEIAEAGIABAHQAAAFgCAEQgCAEgEAEQgEACgFABQgFACgFAAgAgQAeIAQAAIAEgBIAGgCIAEgDQACgDAAgEQAAgHgFgEQgEgEgHAAIgQAAgAgQgGIAPAAIAEAAIAFgCIADgEIABgFQAAgFgCgEQgDgCgHAAIgQAAg");
	this.shape_3.setTransform(62.95,14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAnIAAhNIAxAAIAAAKIgmAAIAAAZIAjAAIAAAJIgjAAIAAAhg");
	this.shape_4.setTransform(56.4,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_5.setTransform(49.875,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUAnIAAgjIgnAAIAAAjIgLAAIAAhNIALAAIAAAgIAnAAIAAggIALAAIAABNg");
	this.shape_6.setTransform(42.175,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAkQgFgEgDgGQgDgGgBgHIgBgNIAAgIIACgJIADgJIAFgHIAHgFQAEgBAFAAQAFAAAEABQAFACADADIAFAHIADAJIABAJIABAIIgBANQgBAHgDAGQgDAGgGAEQgFAEgIAAQgHAAgGgEgAgFgdQgDACgCACIgDAGIgBAHIgBAHIAAAFIAAAJIACAKQACAFADADQADAEAFAAQAFAAAEgEQADgDACgFIACgKIAAgJIAAgFIgBgHIgBgHIgDgGIgFgEQgCgBgEAAQgDAAgCABg");
	this.shape_7.setTransform(32.025,14.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAkQgFgEgDgGQgDgGgBgHIgBgNIAAgIIACgJIADgJIAFgHIAHgFQAEgBAFAAQAFAAAEABQAFACADADIAFAHIADAJIABAJIABAIIgBANQgBAHgDAGQgDAGgGAEQgFAEgIAAQgHAAgGgEgAgFgdQgDACgCACIgDAGIgBAHIgBAHIAAAFIAAAJIACAKQACAFADADQADAEAFAAQAFAAAEgEQADgDACgFIACgKIAAgJIAAgFIgBgHIgBgHIgDgGIgFgEQgCgBgEAAQgDAAgCABg");
	this.shape_8.setTransform(25.925,14.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAkQgHgFgCgHIAKgEQACAGAEACQADACAFAAIAFgBIAFgDIAEgFIABgHQAAgIgFgEQgGgEgHAAIgIABIgIACIABgoIApAAIAAAKIgfAAIAAAUIACgBIADAAIADgBIABAAQAGAAAEACQAEACAEADIAFAHQABAFAAAGQAAAGgCAEQgCAFgEAEQgDADgFACQgFACgFAAQgIAAgGgEg");
	this.shape_9.setTransform(19.675,14.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAZQgCgCAAgDQAAgDACgCQACgDACAAQADAAACADQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCgAgEgNQgCgCAAgDQAAgDACgCQACgDACAAQADAAACADQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_10.setTransform(15.225,15.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFAnIAAhBIgNAOIgHgIIAVgSIAKAAIAABNg");
	this.shape_11.setTransform(10.075,14.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEAnIAAhDIgZAAIAAgKIA7AAIAAAKIgYAAIAABDg");
	this.shape_12.setTransform(1.4,14.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgIAGgFQAFgFAIgEQAHgDAIAAQAJAAAHADQAIAEAFAFQAGAFADAIQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgbQgFACgEAEQgEAFgCAFQgCAGAAAFQAAAHACAFQACAGAEAEQAEAEAFACQAFADAGAAQAHAAAFgDQAGgCADgEQAEgEACgGQACgFAAgHQAAgFgCgGQgCgFgEgFQgDgEgGgCQgFgDgHAAQgGAAgFADg");
	this.shape_13.setTransform(-6.325,14.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEAnIAAhDIgaAAIAAgKIA9AAIAAAKIgaAAIAABDg");
	this.shape_14.setTransform(-14.05,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-22.8,5,122.89999999999999,18.6), null);


(lib.Symbol18copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUAnIgqg/IAAAAIAAA/IgLAAIAAhNIAOAAIAqA/IAAg/IALAAIAABNg");
	this.shape.setTransform(103.575,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_1.setTransform(96.125,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAmQgHgDgEgFIAJgHQACAEAFACQAFACAEAAIAFgBIAEgCIAFgEQABgCAAgEQAAgFgDgCIgHgDIgIgEIgJgEQgFgCgDgEQgCgFAAgHIABgIIAEgHIAIgEQAGgDAGAAQAGAAAGACQAGACAEAFIgJAIQgCgDgDgCQgEgCgEAAIgGABIgFADIgDAEIAAAEQAAAFACADIAHAEIAJADQAFABAEACQAEACADAEQADAEAAAHQAAAFgCAFQgDAFgDADQgDACgGACQgFACgEAAQgHAAgHgDg");
	this.shape_2.setTransform(89.35,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAHACQAFACAFADQAFADADAEIAFAIIACAJIABAHQAAAHgDAIQgCAGgGAGQgFAGgJADQgIADgJAAgAgWAdIAMAAQAIAAAEgCQAHgCAEgDQAEgEADgFQADgFAAgIIgBgIQgCgEgDgFQgEgFgFgDQgHgDgIAAIgPAAg");
	this.shape_3.setTransform(82.5,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUAnIgqg/IAAAAIAAA/IgLAAIAAhNIAOAAIAqA/IAAg/IALAAIAABNg");
	this.shape_4.setTransform(73.875,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgHAGgGQAFgFAIgEQAHgDAIAAQAJAAAHADQAIAEAFAFQAGAGADAHQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgbQgFACgEAEQgEAEgCAGQgCAGAAAFQAAAGACAGQACAGAEAEQAEAEAFACQAFADAGAAQAHAAAFgDQAGgCADgEQAEgEACgGQACgGAAgGQAAgFgCgGQgCgGgEgEQgDgEgGgCQgFgDgHAAQgGAAgFADg");
	this.shape_5.setTransform(64.925,20.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAnIAAhNIAvAAIAAAKIglAAIAAAZIAjAAIAAAJIgjAAIAAAhg");
	this.shape_6.setTransform(57.5,20.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUAnIgqg/IAAAAIAAA/IgLAAIAAhNIAOAAIAqA/IAAg/IALAAIAABNg");
	this.shape_7.setTransform(46.625,20.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaAnIgIgTIgkAAIgHATIgNAAIAjhNIAIAAIAiBNgAgOAKIAdAAIgPgiIAAAAg");
	this.shape_8.setTransform(38.375,20.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAnIgehNIAMAAIAWA/IAYg/IALAAIgeBNg");
	this.shape_9.setTransform(31.025,20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_10.setTransform(134.375,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAeAnIAAg/IAAAAIgaA/IgGAAIgbg/IAAA/IgLAAIAAhNIAQAAIAYA6IAAAAIAZg6IAQAAIAABNg");
	this.shape_11.setTransform(125.775,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAaAnIgIgTIgkAAIgHATIgNAAIAjhNIAIAAIAiBNgAgOAKIAdAAIgPgiIAAAAg");
	this.shape_12.setTransform(116.925,8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAUAnIgqg/IAAAAIAAA/IgLAAIAAhNIAOAAIAqA/IAAg/IALAAIAABNg");
	this.shape_13.setTransform(108.675,8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAaAAQAIAAAEACQAFACADAEIAEAGIABAIIgBAHIgEAIQgDABgFACQgEADgIAAIgQAAIAAAigAgPgDIAOAAIAFgBIAGgCQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAQACgDAAgEQAAgEgCgCQgBgDgCgCIgGgBIgFAAIgOAAg");
	this.shape_14.setTransform(101.425,8.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgIAGgFQAFgFAIgEQAHgDAIAAQAJAAAHADQAIAEAFAFQAGAFADAIQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgcQgFADgEAEQgEAFgCAFQgCAGAAAFQAAAHACAFQACAGAEAEQAEAEAFACQAFADAGAAQAHAAAFgDQAGgCADgEQAEgEACgGQACgFAAgHQAAgFgCgGQgCgFgEgFQgDgEgGgDQgFgCgHAAQgGAAgFACg");
	this.shape_15.setTransform(93.225,8.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_16.setTransform(82.525,8.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAQAnIgjgnIgBAAIAAAnIgLAAIAAhNIALAAIAAAiIABAAIAhgiIAPAAIgkAkIAmApg");
	this.shape_17.setTransform(75.9,8.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOAjQgFgDgCgJIAKgCQABAEADACQACADAFAAQADAAACgCQADgBABgDIACgFIABgGIAAg0IAKAAIAAA3QAAAHgCAFQgDAEgDADQgEADgEABIgGABQgIAAgGgFg");
	this.shape_18.setTransform(68.75,8.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_19.setTransform(64.925,8.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAKAAIAABDIAjAAIAAAKg");
	this.shape_20.setTransform(61.025,8.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAKAAIAABDIAjAAIAAAKg");
	this.shape_21.setTransform(55.325,8.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_22.setTransform(48.925,8.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAGACQAHACAEADQAFADADAEIAFAIIACAJIABAHQAAAHgDAIQgDAGgFAGQgGAFgHADQgIAEgKAAgAgWAdIAMAAQAHAAAGgCQAFgCAFgDQAFgEACgFQACgFAAgIIAAgIQgCgEgDgFQgDgFgHgDQgFgDgJAAIgPAAg");
	this.shape_23.setTransform(41.4,8.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAHACQAFACAFADQAFADADAEIAEAIIADAJIABAHQAAAHgDAIQgDAGgFAGQgFAFgIADQgJAEgJAAgAgXAdIAOAAQAGAAAFgCQAHgCAEgDQAEgEADgFQACgFAAgIIgBgIQgBgEgDgFQgEgFgFgDQgHgDgIAAIgQAAg");
	this.shape_24.setTransform(33.25,8.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_25.setTransform(27.475,8.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAeAnIAAg/IAAAAIgaA/IgGAAIgbg/IAAA/IgLAAIAAhNIAQAAIAYA6IAAAAIAZg6IAQAAIAABNg");
	this.shape_26.setTransform(20.975,8.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAUAnIgqg/IAAAAIAAA/IgLAAIAAhNIAOAAIAqA/IAAg/IALAAIAABNg");
	this.shape_27.setTransform(11.625,8.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgIAGgFQAFgFAIgEQAHgDAIAAQAJAAAHADQAIAEAFAFQAGAFADAIQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgcQgFADgEAEQgEAFgCAFQgCAGAAAFQAAAHACAFQACAGAEAEQAEAEAFACQAFADAGAAQAHAAAFgDQAGgCADgEQAEgEACgGQACgFAAgHQAAgFgCgGQgCgFgEgFQgDgEgGgDQgFgCgHAAQgGAAgFACg");
	this.shape_28.setTransform(2.675,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18copy, new cjs.Rectangle(-17,-0.4,169.6,30.2), null);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAHACQAGACAEADQAFADADAEIAEAIIADAJIABAHQAAAHgDAIQgDAGgFAGQgGAGgHADQgJADgJAAgAgXAdIAOAAQAHAAAEgCQAGgCAFgDQAEgEADgFQADgFgBgIIgBgIQgBgEgDgFQgDgFgGgDQgHgDgIAAIgQAAg");
	this.shape.setTransform(100.55,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAjQgFgDgCgJIALgDQAAAFADACQACADAFAAQADAAADgCQACgBABgCIACgGIAAgGIAAg0IALAAIAAA3QAAAHgDAFQgCAEgDADQgEADgDABIgHABQgIAAgGgFg");
	this.shape_1.setTransform(93.3,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_2.setTransform(89.475,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATAnIgTg/IgSA/IgLAAIgXhNIALAAIARA+IATg+IALAAIATA+IAQg+IAMAAIgXBNg");
	this.shape_3.setTransform(82.65,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAGACQAHACAEADQAFADADAEIAFAIIACAJIABAHQAAAHgDAIQgDAGgFAGQgGAGgHADQgJADgJAAgAgXAdIANAAQAHAAAGgCQAFgCAFgDQAEgEADgFQADgFgBgIIgBgIQgBgEgDgFQgDgFgHgDQgFgDgJAAIgQAAg");
	this.shape_4.setTransform(73.45,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAKAAIAABDIAjAAIAAAKg");
	this.shape_5.setTransform(66.825,20.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_6.setTransform(60.425,20.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOAnIgSgiIgMAAIAAAiIgLAAIAAhNIAbAAQAHAAAFACQAFACADAEIAEAGIABAIIgCAHIgDAHIgHADQgDACgFAAIAXAkgAgQgDIAOAAIAFgBIAFgCQABAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQABgDAAgEQAAgEgBgDQgBgCgDgCIgFgBIgFAAIgOAAg");
	this.shape_7.setTransform(53.875,20.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_8.setTransform(47.025,20.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATAnIgTg/IgSA/IgLAAIgXhNIALAAIARA+IATg+IALAAIATA+IAQg+IAMAAIgXBNg");
	this.shape_9.setTransform(38.1,20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAGACQAHACAEADQAFADADAEIAFAIIACAJIABAHQAAAHgDAIQgCAGgGAGQgFAFgJADQgHAEgKAAgAgWAdIAMAAQAHAAAGgCQAFgCAFgDQAFgEACgFQACgFABgIIgBgIQgCgEgDgFQgDgFgHgDQgFgDgJAAIgPAAg");
	this.shape_10.setTransform(132.65,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAOAnIgSgiIgMAAIAAAiIgLAAIAAhNIAbAAQAHAAAFACQAFACADAEIAEAGIABAIIgCAHIgDAHIgHADQgDACgFABIAXAjgAgQgDIAOAAIAFgBIAFgCQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAQABgDAAgEQAAgEgBgCQgBgDgDgCIgFgBIgFAAIgOAAg");
	this.shape_11.setTransform(125.475,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_12.setTransform(118.625,8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_13.setTransform(111.925,8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAKAAIAABDIAjAAIAAAKg");
	this.shape_14.setTransform(105.925,8.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLAmQgFgCgEgEQgFgFgCgFQgCgFAAgIIAAgwIAKAAIAAAvIABAHQABAFADADQACADAEACQADACAFAAQAGAAADgCQAEgCACgDQADgDABgFIABgHIAAgvIAKAAIAAAwQAAAIgCAFQgCAFgFAFQgEAEgFACQgGACgGAAQgFAAgGgCg");
	this.shape_15.setTransform(98.725,8.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLAlQgHgDgGgFQgFgGgDgHQgDgIAAgIQAAgIADgHQADgIAGgFQAFgFAIgEQAHgDAIAAQALAAAHADQAGADAFAEIgHAJQgFgFgGgCQgFgCgGAAQgGAAgFACQgFADgEAEQgEAFgCAFQgCAGAAAFQAAAGACAHQACAFAEAEQAEAEAGACQAFADAGAAIAKgBQAGgBADgCIAAgVIgRAAIAAgJIAcAAIAAAlIgHADIgHACIgIACIgIAAQgJAAgIgEg");
	this.shape_16.setTransform(90.375,8.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_17.setTransform(83.225,8.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAOAnIgSgiIgMAAIAAAiIgLAAIAAhNIAbAAQAHAAAFACQAFACADAEIAEAGIABAIIgCAHIgDAHIgHADQgDACgFABIAXAjgAgQgDIAOAAIAFgBIAFgCQABAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQABgDAAgEQAAgEgBgCQgBgDgDgCIgFgBIgFAAIgOAAg");
	this.shape_18.setTransform(76.675,8.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_19.setTransform(69.825,8.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLAlQgHgDgGgFQgFgGgDgHQgDgIAAgIQAAgIADgHQADgIAGgFQAFgFAIgEQAHgDAIAAQALAAAHADQAGADAFAEIgHAJQgFgFgGgCQgFgCgGAAQgGAAgFACQgFADgEAEQgEAFgCAFQgCAGAAAFQAAAGACAHQACAFAEAEQAEAEAGACQAFADAGAAIAKgBQAGgBADgCIAAgVIgRAAIAAgJIAcAAIAAAlIgHADIgHACIgIACIgIAAQgJAAgIgEg");
	this.shape_20.setTransform(61.725,8.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLAlQgHgDgGgFQgFgGgDgHQgDgIAAgIQAAgIADgHQADgIAGgFQAFgFAIgEQAHgDAIAAQALAAAHADQAGADAFAEIgHAJQgFgFgGgCQgFgCgGAAQgGAAgFACQgFADgEAEQgEAFgCAFQgCAGAAAFQAAAGACAHQACAFAEAEQAEAEAGACQAFADAGAAIAKgBQAGgBADgCIAAgVIgRAAIAAgJIAcAAIAAAlIgHADIgHACIgIACIgIAAQgJAAgIgEg");
	this.shape_21.setTransform(50.125,8.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_22.setTransform(44.525,8.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAHACQAFACAFADQAFADADAEIAEAIIADAJIABAHQAAAHgDAIQgDAGgFAGQgFAFgJADQgIAEgJAAgAgXAdIAOAAQAGAAAFgCQAHgCAEgDQAEgEADgFQACgFAAgIIgBgIQgBgEgDgFQgEgFgFgDQgHgDgIAAIgQAAg");
	this.shape_23.setTransform(39.1,8.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_24.setTransform(31.775,8.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAKAAIAABDIAjAAIAAAKg");
	this.shape_25.setTransform(25.775,8.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAKAAIAABDIAjAAIAAAKg");
	this.shape_26.setTransform(20.075,8.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgIAGgFQAFgFAIgEQAHgDAIAAQAJAAAHADQAIAEAFAFQAGAFADAIQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgcQgFADgEAEQgEAFgCAFQgCAGAAAFQAAAHACAFQACAGAEAEQAEAEAFACQAFADAGAAQAHAAAFgDQAGgCADgEQAEgEACgGQACgFAAgHQAAgFgCgGQgCgFgEgFQgDgEgGgDQgFgCgHAAQgGAAgFACg");
	this.shape_27.setTransform(12.175,8.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEAnIgehNIAMAAIAWA/IAYg/IALAAIgeBNg");
	this.shape_28.setTransform(4.125,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-16.1,-0.4,169.5,30.2), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFCC33","rgba(255,204,51,0)"],[0,1],0,0,0,0,0,64.1).s().p("Am6G7Qi4i4AAkDQAAkCC4i4QC3i4EDAAQEEAAC3C4QC4C4gBECQABEDi4C4Qi3C4kEAAQkDAAi3i4g");
	this.shape.setTransform(62.65,62.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,125.3,125.4), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAqIAAhTIAcAAQAIgBAGADQAFACADAEQADADABAEIABAJIgBAHQgBAFgDADQgDACgFADQgFACgJAAIgRAAIAAAlgAgQgEIAPAAIAFgBIAGgBIAFgFQACgDAAgDQAAgFgCgCQgCgDgDgCIgGgCIgFgBIgPAAg");
	this.shape.setTransform(184.9,32.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMApQgGgCgEgEQgFgFgCgGQgDgGAAgHIAAg1IAMAAIAAAzIABAIQABAEACADQADAFAEABQAEADAFAAQAGAAAEgDQAEgBADgFQACgDABgEIABgIIAAgzIAMAAIAAA1QAAAHgDAGQgCAGgFAFQgEAEgGACQgGACgHABQgGgBgGgCg");
	this.shape_1.setTransform(176.725,33.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRApQgIgDgGgGQgGgGgDgIQgDgIAAgKQAAgJADgHQADgJAGgGQAGgGAIgDQAIgEAJABQAKgBAIAEQAIADAGAGQAGAGADAJQADAHAAAJQAAAKgDAIQgDAIgGAGQgGAGgIADQgIADgKABQgJgBgIgDgAgMgeQgGADgEAEQgEAFgDAGQgCAGAAAGQAAAHACAGQADAGAEAFQAEAEAGADQAGADAGAAQAHAAAGgDQAGgDAEgEQAFgFACgGQACgGAAgHQAAgGgCgGQgCgGgFgFQgEgEgGgDQgGgDgHAAQgGAAgGADg");
	this.shape_2.setTransform(167.475,32.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQAqIgVglIgNAAIAAAlIgLAAIAAhTIAdAAQAIgBAFADQAFACADAEQADADACAEIABAJQAAAEgCADIgEAHQgCADgEABQgEACgFAAIAYAngAgSgEIAPAAIAGgBIAGgBIAEgFQACgDAAgDQAAgFgCgCQgCgDgCgCIgGgCIgGgBIgPAAg");
	this.shape_3.setTransform(159.275,32.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLApQgJgEgGgGQgGgGgDgIQgDgIAAgJQAAgJADgHQAEgJAFgGQAGgGAJgDQAHgEAKABQALAAAIACQAHADAFAGIgIAIQgGgFgFgCQgGgCgGAAQgHAAgGADQgFADgFAEQgEAFgDAGQgCAGAAAGQABAHACAGQACAGAFAFQAFAEAFADQAGADAHAAIALgBIAJgDIAAgYIgSAAIAAgKIAeAAIAAApIgIADIgHACIgJACIgIABQgKAAgIgEg");
	this.shape_4.setTransform(150.25,32.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAqIgmgqIgBAAIAAAqIgMAAIAAhTIAMAAIAAAkIABAAIAlgkIAQAAIgpAnIArAsg");
	this.shape_5.setTransform(139.2,32.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWAqIguhEIAABEIgMAAIAAhTIAPAAIAuBFIAAhFIAMAAIAABTg");
	this.shape_6.setTransform(129.875,32.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdAqIgJgVIgnAAIgJAVIgNAAIAlhTIAKAAIAkBTgAgPAMIAfAAIgQgmIAAAAg");
	this.shape_7.setTransform(120.875,32.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIAdAAQAGgBAEACQAFABAEADQADACACAEQACAFAAAFQAAAHgFAFQgDAEgHACIAIACIAFAEQACADACAEQABAEAAAEQAAAGgCAEQgCAEgFAEQgDADgGABQgFABgGAAgAgRAgIARAAIAEAAQAEAAADgCIAEgFQACgDAAgEQAAgHgFgFQgEgDgIAAIgRAAgAgRgGIAPAAIAGgBIAFgCIADgEQACgDgBgDQAAgFgCgEQgEgEgHAAIgRAAg");
	this.shape_8.setTransform(113.15,32.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFAqIAAhTIALAAIAABTg");
	this.shape_9.setTransform(107.425,32.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAqIAAhJIgbAAIAAgKIBBAAIAAAKIgbAAIAABJg");
	this.shape_10.setTransform(102.3,32.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYAqIAAhTIALAAIAABIIAmAAIAAALg");
	this.shape_11.setTransform(96.275,32.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMApQgGgCgEgEQgFgFgCgGQgDgGAAgHIAAg1IAMAAIAAAzIABAIQABAEACADQADAFAEABQAEADAFAAQAGAAAEgDQAEgBADgFQACgDABgEIABgIIAAgzIAMAAIAAA1QAAAHgDAGQgCAGgFAFQgEAEgGACQgGACgHABQgGgBgGgCg");
	this.shape_12.setTransform(88.425,33.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAhAqIAAhEIgdBEIgHAAIgchEIgBAAIAABEIgLAAIAAhTIARAAIAaA/IAAAAIAbg/IARAAIAABTg");
	this.shape_13.setTransform(78.775,32.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFAqIAAhJIgbAAIAAgKIBBAAIAAAKIgbAAIAABJg");
	this.shape_14.setTransform(66.55,32.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbAqIAAhTIA1AAIAAAKIgqAAIAAAaIAnAAIAAAJIgnAAIAAAbIAsAAIAAALg");
	this.shape_15.setTransform(59.7,32.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAhAqIAAhEIgdBEIgHAAIgchEIgBAAIAABEIgLAAIAAhTIARAAIAaA/IAAAAIAbg/IARAAIAABTg");
	this.shape_16.setTransform(50.325,32.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAqIAAhTIALAAIAABIIAmAAIAAALg");
	this.shape_17.setTransform(38.975,32.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcAqIAAhTIA2AAIAAAKIgqAAIAAAaIAnAAIAAAJIgnAAIAAAbIAtAAIAAALg");
	this.shape_18.setTransform(31.95,32.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkAqIAAhTIAdAAQAIAAAHABQAHACAFAEQAFADADAFQAEAEABAFIADAKIABAHQAAAIgDAIQgDAHgGAHQgGAFgIAEQgJAEgLgBgAgZAfIAPAAQAHAAAGgBQAGgCAFgEQAFgEADgGQADgGAAgIIgCgIQgBgGgDgFQgEgFgHgEQgGgDgJAAIgSAAg");
	this.shape_19.setTransform(23.725,32.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAWAqIguhEIAABEIgMAAIAAhTIAPAAIAuBFIAAhFIAMAAIAABTg");
	this.shape_20.setTransform(14.325,32.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAdAqIgJgVIgnAAIgJAVIgNAAIAlhTIAKAAIAkBTgAgPAMIAfAAIgQgmIAAAAg");
	this.shape_21.setTransform(5.325,32.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAWAqIAAgnIgrAAIAAAnIgLAAIAAhTIALAAIAAAjIArAAIAAgjIAMAAIAABTg");
	this.shape_22.setTransform(-3.35,32.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAVArIgVhFIAAAAIgUBFIgMAAIgZhVIAMAAIATBEIAUhEIANAAIAUBEIAThEIAMAAIgZBVg");
	this.shape_23.setTransform(178.775,17.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMAqQgGgDgEgEQgFgFgCgGQgDgGAAgIIAAg1IAMAAIAAA0IABAIQABAEACAEQADADAEACQAEADAFAAQAGAAAEgDQAEgCADgDQACgEABgEIABgIIAAg0IAMAAIAAA1QAAAIgDAGQgCAGgFAFQgEAEgGADQgGACgHAAQgGAAgGgCg");
	this.shape_24.setTransform(168.775,17.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAWArIguhFIAABFIgMAAIAAhVIAPAAIAuBFIAAhFIAMAAIAABVg");
	this.shape_25.setTransform(156.425,17.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAdArIgJgWIgnAAIgJAWIgNAAIAlhVIAKAAIAkBVgAgPALIAfAAIgQglIAAAAg");
	this.shape_26.setTransform(147.425,17.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAdArIgJgWIgnAAIgJAWIgNAAIAlhVIAKAAIAkBVgAgPALIAfAAIgQglIAAAAg");
	this.shape_27.setTransform(138.975,17.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgbArIAAhVIA1AAIAAALIgqAAIAAAZIAnAAIAAAKIgnAAIAAAbIAtAAIAAAMg");
	this.shape_28.setTransform(128,17.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRAqQgIgEgGgGQgGgGgDgIQgDgJAAgJQAAgIADgIQADgJAGgGQAGgGAIgDQAIgDAJgBQAKABAIADQAIADAGAGQAGAGADAJQADAIAAAIQAAAJgDAJQgDAIgGAGQgGAGgIAEQgIADgKAAQgJAAgIgDgAgMgeQgGACgEAFQgEAFgDAGQgCAGAAAGQAAAHACAGQADAGAEAFQAEAEAGADQAGADAGAAQAHAAAGgDQAGgDAEgEQAFgFACgGQACgGAAgHQAAgGgCgGQgCgGgFgFQgEgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_29.setTransform(119.025,17.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgFArIAAhKIgbAAIAAgLIBBAAIAAALIgbAAIAABKg");
	this.shape_30.setTransform(110.6,17.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgQAqQgHgDgEgGIAJgIQADAEAFACQAFADAFAAIAFgBIAGgDIAEgEQABgDAAgEQAAgEgDgDQgDgCgFgCIgJgEQgFgBgFgDQgFgCgDgFQgDgEAAgJIACgHQABgFAEgDQADgEAGgDQAFgCAHAAQAHAAAGACQAHACAFAGIgKAIIgGgFQgEgCgFAAQgEAAgDABQgDACgCACIgDAEIgBAEQAAAGAEADQADACAEACIAJADIAKAEQAFACADAFQADADAAAIQAAAGgCAFQgCAGgEACQgEAEgGACQgFABgFABQgIgBgIgCg");
	this.shape_31.setTransform(100.375,17.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAWArIguhFIAABFIgMAAIAAhVIAPAAIAuBFIAAhFIAMAAIAABVg");
	this.shape_32.setTransform(92.375,17.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAdArIgJgWIgnAAIgJAWIgNAAIAlhVIAKAAIAkBVgAgPALIAfAAIgQglIAAAAg");
	this.shape_33.setTransform(83.375,17.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYArIAAhVIALAAIAABJIAmAAIAAAMg");
	this.shape_34.setTransform(76.575,17.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgMApQgIgDgGgHQgGgGgDgIQgDgIAAgJQAAgIAEgIQACgJAHgGQAGgGAHgDQAIgDAJgBQAMAAAHADQAIADAFAFIgIAJQgFgFgGgCQgGgCgHAAQgGAAgGADQgGACgEAFQgEAFgCAGQgCAGAAAGQAAAHACAGQADAHAEAEQAFAEAGADQAFADAGAAIAMgBIAJgEIAAgXIgSAAIAAgKIAeAAIAAApIgIADIgIADIgIABIgJABQgJgBgJgDg");
	this.shape_35.setTransform(68.05,17.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgFArIAAhKIgbAAIAAgLIBBAAIAAALIgcAAIAABKg");
	this.shape_36.setTransform(56.8,17.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAdArIgJgWIgnAAIgJAWIgNAAIAlhVIAKAAIAkBVgAgPALIAfAAIgQglIAAAAg");
	this.shape_37.setTransform(49.125,17.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAVArIgVhFIAAAAIgUBFIgMAAIgZhVIAMAAIATBEIAUhEIANAAIAUBEIAThEIAMAAIgZBVg");
	this.shape_38.setTransform(39.125,17.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLApQgJgDgGgHQgGgGgDgIQgDgIAAgJQAAgIADgIQAEgJAFgGQAGgGAJgDQAIgDAIgBQAMAAAHADQAIADAFAFIgIAJQgFgFgHgCQgFgCgHAAQgGAAgGADQgFACgFAFQgEAFgCAGQgCAGgBAGQAAAHADAGQACAHAFAEQAEAEAHADQAFADAGAAIAMgBIAJgEIAAgXIgTAAIAAgKIAfAAIAAApIgHADIgJADIgIABIgJABQgJgBgIgDg");
	this.shape_39.setTransform(25.1,17.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgcArIAAhVIA2AAIAAALIgqAAIAAAZIAoAAIAAAKIgoAAIAAAbIAsAAIAAAMg");
	this.shape_40.setTransform(17.25,17.05);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgRAqQgIgEgGgGQgGgGgDgIQgDgJAAgJQAAgIADgIQADgJAGgGQAGgGAIgDQAIgDAJgBQAKABAIADQAIADAGAGQAGAGADAJQADAIAAAIQAAAJgDAJQgDAIgGAGQgGAGgIAEQgIADgKAAQgJAAgIgDgAgMgeQgGACgEAFQgEAFgDAGQgCAGAAAGQAAAHACAGQADAGAEAFQAEAEAGADQAGADAGAAQAHAAAGgDQAGgDAEgEQAFgFACgGQACgGAAgHQAAgGgCgGQgCgGgFgFQgEgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_41.setTransform(8.275,17.05);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgFArIghhVIAOAAIAYBFIAAAAIAZhFIAOAAIgiBVg");
	this.shape_42.setTransform(-0.45,17.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-9.8,7.3,200,35.800000000000004), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FEE68A","#D5A73C"],[0,1],0,0,0,0,0,23.3).s().p("AigChQhDhDAAheQAAhdBDhDQBDhDBdAAQBeAABDBDQBDBDAABdQAABehDBDQhDBDheAAQhdAAhDhDg");
	this.shape.setTransform(1.2787,1.2913,0.057,0.057);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,2.6,2.6), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FEE68A","#D5A73C"],[0,1],0,0,0,0,0,23.3).s().p("AigChQhDhDAAheQAAhdBDhDQBDhDBdAAQBeAABDBDQBDBDAABdQAABehDBDQhDBDheAAQhdAAhDhDg");
	this.shape.setTransform(3.3003,3.2782,0.1447,0.1447);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,6.6,6.6), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiBTQgQgHgJgOQgJgNAAgPIAdAAQABAPALAIQAMAJARAAQARAAAKgHQAKgHAAgLQAAgMgJgHQgJgGgVgFQgXgFgNgGQgOgHgGgJQgGgJAAgNQAAgWASgOQASgPAbAAQAeAAASAPQATAPAAAYIgeAAQAAgMgLgJQgKgJgQAAQgPAAgJAHQgKAHAAAMQAAALAJAFQAIAGAWAFQAWAFAOAGQAOAGAHAKQAGAKAAAOQAAAXgTAOQgSAOgeAAQgUAAgQgHg");
	this.shape.setTransform(405.125,177.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLAmIAAhLIAXAAIAAASIgDA5g");
	this.shape_1.setTransform(393.775,165.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag5BCQgWgZABgoIAAgCQgBgZALgVQAKgUASgLQASgLAWAAQAkAAAWAYQAVAZAAAoIAAACQABAZgLAVQgJAUgSALQgTALgXAAQgiAAgXgYgAgjgvQgNARAAAgQAAAdANASQANARAWAAQAXAAANgSQAOgRAAggQAAgcgOgSQgNgSgXAAQgWAAgNASg");
	this.shape_2.setTransform(381.5,177.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBDQgWgYAAgpIAAgEQABgaAIgUQAKgTARgLQASgLAXAAQAdAAATARQAUASACAcIgdAAQgBgRgMgLQgMgLgQAAQgWAAgNARQgMAQAAAfIAAAEQAAAfAMAQQANAQAWAAQAQAAAMgKQAMgJABgPIAdAAQgBAPgKAOQgKANgPAIQgQAIgSAAQgjAAgUgXg");
	this.shape_3.setTransform(363.7,177.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOB3IAAiuIAdAAIAACugAgMhZQgFgFAAgGQAAgIAFgFQAEgFAIAAQAJAAAEAFQAFAFAAAIQAAAGgFAFQgEAGgJAAQgIAAgEgGg");
	this.shape_4.setTransform(350.875,174.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiBTQgQgHgJgOQgJgNAAgPIAdAAQABAPALAIQAMAJARAAQARAAAKgHQAKgHAAgLQAAgMgJgHQgJgGgVgFQgXgFgNgGQgOgHgGgJQgGgJAAgNQAAgWASgOQASgPAbAAQAeAAASAPQATAPAAAYIgeAAQAAgMgLgJQgKgJgQAAQgPAAgJAHQgKAHAAAMQAAALAJAFQAIAGAWAFQAWAFAOAGQAOAGAHAKQAGAKAAAOQAAAXgTAOQgSAOgeAAQgUAAgQgHg");
	this.shape_5.setTransform(338.325,177.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOB3IAAiuIAdAAIAACugAgMhZQgFgFAAgGQAAgIAFgFQAEgFAIAAQAJAAAEAFQAFAFAAAIQAAAGgFAFQgEAGgJAAQgIAAgEgGg");
	this.shape_6.setTransform(325.875,174.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpBZIAAiuIAdAAIAAAVQAOgYAbAAQAJAAAEACIAAAcIgPgBQgcAAgKAZIAAB7g");
	this.shape_7.setTransform(317.175,177.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEBiQgLgMAAgWIAAhsIgfAAIAAgXIAfAAIAAgqIAdAAIAAAqIAgAAIAAAXIggAAIAABsQAAAKAEAFQAFAGAKAAQAGAAAIgCIAAAYQgLADgLAAQgVAAgIgMg");
	this.shape_8.setTransform(296.7,175.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYB+IAAiXIgcAAIAAgXIAcAAIAAgRQAAgdAPgPQAOgQAbAAQALAAAKADIgCAZQgHgCgJAAQgOAAgIAJQgIAIAAAQIAAASIAlAAIAAAXIglAAIAACXg");
	this.shape_9.setTransform(286.575,173.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgzBDQgWgXAAgnIAAgFQAAgaAKgUQAKgUARgMQATgLATAAQAiAAATAWQATAWAAAqIAAAMIh1AAQABAZAOAQQAPAQAUAAQARAAAKgGQALgHAIgKIASAOQgVAhgsAAQgiAAgXgXgAgbg0QgNANgCAYIBWAAIAAgCQgBgXgLgMQgLgNgTAAQgRAAgMANg");
	this.shape_10.setTransform(271.8,177.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgzBDQgWgXAAgnIAAgFQAAgaAKgUQAKgUASgMQASgLATAAQAiAAATAWQATAWAAAqIAAAMIh1AAQAAAZAPAQQAPAQAUAAQARAAAKgGQALgHAJgKIASAOQgXAhgrAAQgjAAgWgXgAgbg0QgMANgDAYIBWAAIAAgCQgBgXgLgMQgLgNgTAAQgRAAgMANg");
	this.shape_11.setTransform(254.35,177.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAnB8IAAh0QAAgRgJgJQgIgKgSAAQgOAAgLAIQgLAIgGAMIAAB8IgdAAIAAj3IAdAAIAABfQAUgZAfAAQA3AAAAA+IAABzg");
	this.shape_12.setTransform(236.35,173.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOB8IAAj3IAdAAIAAD3g");
	this.shape_13.setTransform(215.1,173.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgzBDQgWgXAAgnIAAgFQAAgaAKgUQAKgUARgMQASgLAUAAQAiAAATAWQATAWAAAqIAAAMIh1AAQABAZAOAQQAOAQAWAAQAPAAAMgGQAKgHAIgKIASAOQgWAhgrAAQgjAAgWgXgAgbg0QgMANgDAYIBWAAIAAgCQgBgXgLgMQgLgNgTAAQgRAAgMANg");
	this.shape_14.setTransform(202.55,177.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag2BlQgSgZgBgoIAAgCQABgnASgZQAUgYAeAAQAeAAARAVIAAhbIAfAAIAAD2IgcAAIgCgSQgRAVgfAAQgeAAgUgYgAgegMQgNAQAAAhQAAAeANAQQAMARAUAAQAcAAANgZIAAhPQgNgZgbAAQgVAAgMARg");
	this.shape_15.setTransform(183.95,173.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAnBZIAAhzQgBgSgHgJQgJgKgSAAQgNAAgLAIQgLAIgHANIAAB7IgdAAIAAiuIAcAAIABAWQATgZAgAAQA3AAABA/IAAByg");
	this.shape_16.setTransform(165.95,177.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag3BMQgQgPAAgWQAAgbAVgOQAVgPAkAAIAdAAIAAgOQAAgQgKgJQgIgJgSAAQgQAAgLAIQgLAIAAALIgdAAQAAgNAJgMQAJgMAQgHQAQgHASAAQAeAAARAPQARAPABAaIAABPQAAAYAGAPIAAACIgfAAQgDgFgCgNQgVAVgbAAQgaAAgRgOgAgpAjQAAAOAJAIQAKAIAOAAQANAAANgIQAMgHAGgMIAAgjIgXAAQg2AAAAAgg");
	this.shape_17.setTransform(147.85,177.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAnB8IAAh0QAAgRgJgJQgIgKgSAAQgNAAgMAIQgKAIgHAMIAAB8IgeAAIAAj3IAeAAIAABfQAUgZAfAAQA3AAAAA+IAABzg");
	this.shape_18.setTransform(129.8,173.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgzBDQgWgXAAgnIAAgFQAAgaAKgUQAKgUARgMQASgLAUAAQAiAAATAWQATAWAAAqIAAAMIh1AAQABAZAOAQQAOAQAWAAQAPAAAMgGQAKgHAIgKIATAOQgXAhgrAAQgjAAgWgXgAgbg0QgMANgDAYIBWAAIAAgCQgBgXgLgMQgLgNgTAAQgRAAgMANg");
	this.shape_19.setTransform(104,177.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOB8IAAj3IAdAAIAAD3g");
	this.shape_20.setTransform(91.1,173.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOB8IAAj3IAdAAIAAD3g");
	this.shape_21.setTransform(83.1,173.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABHB1IgWg9IhhAAIgWA9IggAAIBZjpIAaAAIBaDpgAgnAfIBPAAIgohtg");
	this.shape_22.setTransform(68.375,174.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgiBTQgQgHgJgOQgJgNAAgPIAdAAQABAPALAIQAMAJARAAQARAAAKgHQAKgHAAgLQAAgMgJgHQgJgGgVgFQgXgFgNgGQgOgHgGgJQgGgJAAgNQAAgWASgOQASgPAbAAQAeAAASAPQATAPAAAYIgeAAQAAgMgLgJQgKgJgQAAQgPAAgJAHQgKAHAAAMQAAALAJAFQAIAGAWAFQAWAFAOAGQAOAGAHAKQAGAKAAAOQAAAXgTAOQgSAOgeAAQgUAAgQgHg");
	this.shape_23.setTransform(405.125,122.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAnBZIAAhzQAAgSgIgJQgJgKgSAAQgOAAgLAIQgLAIgGANIAAB7IgeAAIAAiuIAdAAIAAAWQAVgZAfAAQA3AAAAA/IAAByg");
	this.shape_24.setTransform(387.55,122.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag4BCQgXgZAAgoIAAgCQAAgZALgVQAKgUASgLQARgLAXAAQAkAAAVAYQAXAZAAAoIAAACQgBAZgJAVQgKAUgSALQgTALgXAAQgjAAgVgYgAgjgvQgNARAAAgQAAAdANASQAOARAVAAQAXAAANgSQAOgRAAggQAAgcgOgSQgOgSgWAAQgVAAgOASg");
	this.shape_25.setTransform(369.05,122.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOB3IAAiuIAdAAIAACugAgMhZQgFgEAAgHQAAgIAFgFQAEgFAIAAQAJAAAEAFQAFAFAAAIQAAAHgFAEQgEAGgJAAQgIAAgEgGg");
	this.shape_26.setTransform(355.675,119.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFBiQgKgMAAgWIAAhsIggAAIAAgXIAgAAIAAgqIAdAAIAAAqIAhAAIAAAXIghAAIAABsQAAAKAFAFQADAGALAAQAFAAAJgCIAAAYQgMADgLAAQgTAAgKgMg");
	this.shape_27.setTransform(345.8,120.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOB3IAAiuIAdAAIAACugAgMhZQgFgEAAgHQAAgIAFgFQAEgFAIAAQAJAAAEAFQAFAFAAAIQAAAHgFAEQgEAGgJAAQgIAAgEgGg");
	this.shape_28.setTransform(336.925,119.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag1BlQgUgZAAgoIAAgCQAAgnAUgZQASgYAfAAQAeAAARAVIAAhbIAfAAIAAD2IgcAAIgBgSQgTAVgeAAQgfAAgSgYgAgfgMQgMAQAAAhQAAAeAMAQQANARAUAAQAcAAANgZIAAhPQgNgZgbAAQgWAAgMARg");
	this.shape_29.setTransform(323.2,118.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAnBZIAAhzQAAgSgJgJQgIgKgSAAQgOAAgLAIQgLAIgGANIAAB7IgdAAIAAiuIAcAAIAAAWQAVgZAfAAQA3AAAAA/IAAByg");
	this.shape_30.setTransform(305.2,122.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag4BCQgXgZAAgoIAAgCQAAgZALgVQAKgUASgLQARgLAXAAQAkAAAVAYQAXAZAAAoIAAACQAAAZgKAVQgKAUgSALQgTALgXAAQgjAAgVgYgAgjgvQgNARAAAgQAAAdANASQAOARAVAAQAXAAANgSQAOgRAAggQAAgcgOgSQgOgSgWAAQgVAAgOASg");
	this.shape_31.setTransform(286.7,122.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag0BDQgUgYgBgpIAAgEQAAgaAJgUQAKgTARgLQASgLAXAAQAdAAATARQAUASABAcIgcAAQgBgRgLgLQgNgLgQAAQgWAAgMARQgNAQAAAfIAAAEQAAAfANAQQAMAQAWAAQAQAAAMgKQAMgJABgPIAcAAQgBAPgJAOQgJANgRAIQgPAIgSAAQgiAAgWgXg");
	this.shape_32.setTransform(268.9,122.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhIBmQgVgSAAgdQAAgRAKgOQAJgPAagRQgPgUgFgLQgGgMAAgLQAAgbAQgPQAQgPAbAAQAXAAAQAOQAQAOAAAVQAAAOgHAMQgIANgSANIgQAMIAzA+QALgVAAgaIAbAAQAAAqgUAbIAiAnIgkAAIgPgSQgMALgQAFQgPAGgRgBQgiABgVgTgAgkANQgbAUAAAWQAAASAMAMQAMAMAWAAQAXAAATgSIg4hFgAgkhWQgIAJAAAOQAAAPATAXIATgNQAKgHAEgIQAEgHAAgKQAAgKgIgIQgHgHgMAAQgOAAgHAJg");
	this.shape_33.setTransform(242.425,119.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgiBTQgQgHgJgOQgJgNAAgPIAdAAQABAPALAIQAMAJARAAQARAAAKgHQAKgHAAgLQAAgMgJgHQgJgGgVgFQgXgFgNgGQgOgHgGgJQgGgJAAgNQAAgWASgOQASgPAbAAQAeAAASAPQATAPAAAYIgeAAQAAgMgLgJQgKgJgQAAQgPAAgJAHQgKAHAAAMQAAALAJAFQAIAGAWAFQAWAFAOAGQAOAGAHAKQAGAKAAAOQAAAXgTAOQgSAOgeAAQgUAAgQgHg");
	this.shape_34.setTransform(214.725,122.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("ABcBZIAAhyQAAgTgIgJQgJgKgUAAQgRAAgKAKQgLAKgCARIAABzIgdAAIAAhxQAAgnglAAQgeAAgLAZIAAB/IgdAAIAAiuIAcAAIABAUQATgXAgAAQAlAAAMAcQAJgMAOgIQAOgIATAAQA5AAABA9IAAB0g");
	this.shape_35.setTransform(191.825,122.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgpBZIAAiuIAdAAIAAAVQAOgYAbAAQAJAAAEACIAAAcIgPgBQgcAAgKAZIAAB7g");
	this.shape_36.setTransform(172.675,122.075);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgzBDQgWgXAAgnIAAgFQAAgaAKgUQAKgUARgMQASgLAUAAQAiAAATAWQATAWAAAqIAAAMIh1AAQAAAZAPAQQAPAQAUAAQAQAAALgGQALgHAIgKIASAOQgVAhgsAAQgiAAgXgXgAgbg0QgMANgDAYIBWAAIAAgCQgBgXgLgMQgLgNgTAAQgRAAgMANg");
	this.shape_37.setTransform(157.65,122.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgPB1IAAjQIhLAAIAAgZIC1AAIAAAZIhMAAIAADQg");
	this.shape_38.setTransform(138.925,119.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAAAWIgdAtIgUgPIAggsIgxgOIAIgYIAwASIgBg3IAYAAIgCA4IAwgSIAIAZIgyANIAgAsIgUAPg");
	this.shape_39.setTransform(121.95,114.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(30.7,97.6,385,98.9), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37C3E","#FEC97E","#ECCD8C","#BC9454","#A37C3E"],[0,0.2,0.498,0.8,1],-44.6,-45.9,46,44.7).s().p("AFgGoQgRAAgMgLQgLgLgDgQIAApWIjeJ8Ii6AAIjRp8IAAJ8IiCAAQgSAAgMgMQgNgNAAgSIAAslIEJAAIDTKWIDfqWIEIAAIAANQg");
	this.shape.setTransform(156.9,307);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A37C3E","#FEC97E","#ECCD8C","#BC9454","#A37C3E"],[0,0.2,0.498,0.8,1],-32,-27.6,27.7,32.1).s().p("ACgE1QgRAAgNgNQgMgNAAgRIAAlkQAAgugVgVQgVgTguAAIiTAAIAAHlIiAAAQgRAAgNgNQgMgNAAgRIAAo+IFHAAQBMAAAlAKQAoAMAeAbQBBA7AACBIAAF8g");
	this.shape_1.setTransform(580.575,318.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A37C3E","#FEC97E","#ECCD8C","#BC9454","#A37C3E"],[0,0.2,0.498,0.8,1],-27.3,-26.1,31.6,32.8).s().p("AgFGoIAAAAIg+AAQgSAAgMgMQgMgNAAgRIAAm9IhsAAIAAiEIBsAAIAAjlICqAAIAADlICdAAIAACEIidAAIAAE5QAAARAMAMQAMANASAAIBzAAIAACEg");
	this.shape_2.setTransform(335.35,307);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#A37C3E","#FEC97E","#ECCD8C","#BC9454","#A37C3E"],[0,0.2,0.498,0.8,1],-29.5,-28.4,30.7,31.9).s().p("AgqE1QheAAgngGQglgGgcgSQhLgyAAhnQAAg+AegxQAegvAxgSQArgQBmAAIDPAAQAAhAgagYQgagWhOAAIkfAAIAAiEIEfAAQBOAAAdADQAgAEAbAIQCNA1gHDJIAAFcgAh8BQQgRAQAAAaQAAAfAUAMQAVAMAyAAIDEAAIAAhvIjggBQgeAAgQAPg");
	this.shape_3.setTransform(509.1416,318.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#A37C3E","#FEC97E","#ECCD8C","#BC9454","#A37C3E"],[0,0.2,0.498,0.8,1],-42.3,-37.4,31.4,36.3).s().p("AlKGoQgSAAgMgNQgNgMAAgSIAAslIHWAAQBxAAAzAaQA9AfAdBEQAXAugBA0QAABBgiA6QgjA5g2AVQB6A4AACQQAABUgnA3QggAvg3AUQg4AShnABgAjLERID3AAQAmAAASgEQASgFAQgLQAngfAAg2QABg0gmgXQgbgSg+AAIj6AAgAjLhLID3AAQAjAAAVgEQARgDARgNQAngeAAg2QABg1gmgXQgbgSg+AAIj6AAg");
	this.shape_4.setTransform(433.55,306.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#A37C3E","#FEC97E","#ECCD8C","#BC9454","#A37C3E"],[0,0.2,0.498,0.8,1],-8.4,-8.4,8.4,8.4).s().p("AhVBTIAAilICqAAIAAClg");
	this.shape_5.setTransform(376.65,272.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#A37C3E","#FEC97E","#ECCD8C","#BC9454","#A37C3E"],[0,0.2,0.498,0.8,1],-19.1,-20.3,20.3,19.1).s().p("AgqE1QgRAAgNgNQgMgNAAgRIAAo+ICpAAIAAJpg");
	this.shape_6.setTransform(376.675,318.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#A37C3E","#FEC97E","#ECCD8C","#BC9454","#A37C3E"],[0,0.2,0.498,0.8,1],-24.9,-26.1,26.1,24.9).s().p("AgqGoQgRAAgNgMQgMgNAAgRIAAsmICpAAIAANQg");
	this.shape_7.setTransform(293.925,307);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#A37C3E","#FEC97E","#ECCD8C","#BC9454","#A37C3E"],[0,0.2,0.498,0.8,1],-29.4,-30.6,30.6,29.4).s().p("AjFE1IAAAAIgzAAQgSAAgMgNQgNgNAAgRIAAo+ICqAAIAAGMIABAGIAAAoQAAASAMANQANAMARAAIDHAAIAAnlICrAAIAAJpg");
	this.shape_8.setTransform(245.375,318.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#A37C3E","#FEC97E","#ECCD8C","#BC9454","#A37C3E"],[0,0.2,0.498,0.8,1],-40.8,-29.7,29.8,40.9).s().p("ABwGoIiVkUIhKBPIAADFIh/AAQgSAAgNgMQgMgNAAgRIAAsmICqAAIAAHCIC5jYIDCAAIjMDgIDaGGg");
	this.shape_9.setTransform(648.575,307);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#A37C3E","#FEC97E","#ECCD8C","#BC9454","#A37C3E"],[0,0.2,0.498,0.8,1],-7.9,-7.9,8,8).s().p("AgiB8QgPgOAAgVIAAiyQAAgUAPgOQAPgPATAAQAVAAAPAPQAOAOAAAUIAACyQAAAVgOAOQgPAPgVAAQgTAAgPgPg");
	this.shape_10.setTransform(703,272.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#A37C3E","#FEC97E","#ECCD8C","#BC9454","#A37C3E"],[0,0.2,0.498,0.8,1],-10.5,-10.5,10.5,10.5).s().p("AgjCvQgOgOAAgVIAAkXQAAgVAOgOQAPgOAUAAQAUAAAPAOQAPAPAAAUIAAEXQAAAVgPAOQgPAOgUAAQgUAAgPgOg");
	this.shape_11.setTransform(717.45,261.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#A37C3E","#FEC97E","#ECCD8C","#BC9454","#A37C3E"],[0,0.2,0.498,0.8,1],-10.5,-10.5,10.5,10.5).s().p("AgjCvQgOgOAAgVIAAkXQAAgVAOgOQAQgOATAAQAUAAAPAOQAPAOAAAVIAAEXQAAAVgPAOQgPAPgUAAQgTAAgQgPg");
	this.shape_12.setTransform(731.85,272.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#A37C3E","#FEC97E","#ECCD8C","#BC9454","#A37C3E"],[0,0.2,0.498,0.8,1],-10.5,-10.5,10.5,10.5).s().p("AgjCvQgOgOAAgVIAAkXQAAgVAOgOQAPgOAUAAQAVAAAPAOQAOAPAAAUIAAEXQAAAVgOAOQgPAOgVAAQgUAAgPgOg");
	this.shape_13.setTransform(746.3,261.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjcEtIAApZIDTAAQA8AAAgAIQAgAHAcAXQBOA8AACAQAABfg6A7QgdAeglANQglAOg2AAIhpAAIAACkgAhjArIBJAAQB8AAAAh+QAAg8geggQgeggg3AAIhSAAg");
	this.shape_14.setTransform(654.725,406.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeDbQg0AAgcgHQgbgIgWgUQgugrAAhaIAAkNIB4AAIAAEZQAAAdAQARQAPAQAbAAIBwAAIAAlXIB5AAIAAG1g");
	this.shape_15.setTransform(604.25,398.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AipClQg9g7AAhqQAAhnA/g9QA/g7BqgBQB5ABA6BJQAyA/AABcQAABlg/A8Qg/A6hqAAQhsABg8g8gAhrADQAAA/AcAhQAcAiA0gBQBrABAAiFQAAiDhsAAQhrAAAACGg");
	this.shape_16.setTransform(554.325,398.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AitDbIAAm1ICxAAQA4AAAcAHQAeAHAVATQATASAJAbQAHAbABAyIAAArIh0AAIAAgYQAAgugRgRQgQgSgsAAIgjAAIAAFYg");
	this.shape_17.setTransform(507.55,398.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAFEtQhEAAgpgLQgqgKgggaQgvgkgYhAQgYhBgBhXQABhVAYhBQAYhAAuglQBAgzB+AAIEHAAIAABrIj3AAQhWAAgkArQgmAqABBkQAAA3ALAtQALAsAVAVQAjAkBVAAIB0AAIAAiOIioAAIAAhqIEnAAIAAFkg");
	this.shape_18.setTransform(454.85,390.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag4BxQgKgLgFgNQgFgNAAgOIAmAAQAFAlAhAAQAQAAAKgKQAIgIADgNQACgJAAgRQAAgagHgMQgJgPgXgBQgcAAgHAXIgjAAIAAiPICNAAIAAAhIhrAAIAABGQAOgPAdAAQAdAAASARQAOAPAFARQAEARAAAUQAAAagEAMQgEASgOAOQgVAVgiAAQgkAAgUgUg");
	this.shape_19.setTransform(617.7,441.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag1ByQgWgVAAgiIAAh0QAAgjAWgVQAWgUAfAAQAhAAAVAUQAWAVAAAjIAAB0QAAAigWAVQgWAUggAAQgeAAgXgUgAglg4IAABxQAAArAlAAQAmAAAAgrIAAhxQAAgrgmgBQglABAAArg");
	this.shape_20.setTransform(600.625,441.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag1ByQgWgVAAgiIAAh0QAAgkAWgUQAVgUAgAAQAhAAAVAUQAWAVAAAjIAAB0QAAAigWAVQgWAUggAAQgfAAgWgUgAgmg4IAABxQAAArAmAAQAmAAAAgrIAAhxQAAgrgmgBQgmABAAArg");
	this.shape_21.setTransform(583.2,441.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhMCFIAAgiIBlh6QAOgQAAgTQAAgognAAQgQAAgKAJQgMALAAAUIglAAQAAghAVgVQAVgUAhAAQAjAAAUAUQAWAVAAAhQAAAPgHAPQgGAMgMAPIhSBkIBrAAIAAAig");
	this.shape_22.setTransform(565.375,441.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAWIAAgsIAsAAIAAAsg");
	this.shape_23.setTransform(548,452.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgTCEIAAjjIhJAAIAAgkIC5AAIAAAkIhJAAIAADjg");
	this.shape_24.setTransform(537.35,441.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhdBjIAbgaQAZAZApAAQA2AAAAgoQAAgSgKgKQgJgIgTgDIgegFQgigEgQgPQgUgTAAggQAAgjAXgUQAYgWAoAAQAyAAAgAeIgZAZQgWgUgkgBQgvAAAAAqQAAAPAKAJQALAKATACIAdAFQAhAFAPAOQAWASAAAkQAAAkgaAUQgbAVgpAAQg6AAgjgjg");
	this.shape_25.setTransform(518,441.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhTCEIAAkHICnAAIAAAkIh/AAIAABNIBsAAIAAAjIhsAAIAABPIB/AAIAAAkg");
	this.shape_26.setTransform(498.525,441.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-42.9,-34.8,1091.7,489.5), null);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Symbol 18
	this.instance = new lib.Symbol18();
	this.instance.setTransform(-29.4,15.3,1,1,0,0,0,42.1,15.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},11,cjs.Ease.quadOut).wait(37).to({alpha:0},8,cjs.Ease.quadOut).to({_off:true},1).wait(63));

	// Symbol 19
	this.instance_1 = new lib.Symbol19();
	this.instance_1.setTransform(-15.2,15.3,1,1,0,0,0,27.5,15.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48).to({_off:false},0).to({alpha:1},12,cjs.Ease.quadOut).wait(33).to({alpha:0},8,cjs.Ease.quadOut).to({_off:true},1).wait(18));

	// Symbol 20
	this.instance_2 = new lib.Symbol18copy();
	this.instance_2.setTransform(-29.4,15.3,1,1,0,0,0,42.1,15.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(93).to({_off:false},0).to({alpha:1},12,cjs.Ease.quadOut).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.5,-0.4,170.4,30.2);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol8();
	this.instance.setTransform(1.3,1.3,1,1,0,0,0,1.3,1.3);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 2)];
	this.instance.cache(-2,-2,7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-4,-4,14,14), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(1.3,1.3,0.3939,0.3939,0,0,0,3.3,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,2.6,2.6), null);


(lib.Symbol5copy4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(1.3,1.3,1,1,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-89,y:-7.65,alpha:0},106).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.3,-8.9,92.89999999999999,11.5);


(lib.Symbol5copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(1.3,1.3,1,1,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-63.85,y:-16.85,alpha:0},86).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.1,-18.1,67.69999999999999,20.700000000000003);


(lib.Symbol5copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol9();
	this.instance.setTransform(-6.25,1.3,1,1,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:44.05,y:-4.7},109).wait(17));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-10,65.3,20);


(lib.Symbol5copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol9();
	this.instance.setTransform(-6.25,1.3,1,1,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:1.4,scaleX:1.4679,scaleY:1.4679,x:68.45,y:-1.45,alpha:0.1875},146).to({scaleX:1.5769,scaleY:1.5769,x:85.8,y:-2,alpha:0},34).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-8.1,107.1,18.1);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(1.3,1.3,1,1,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-85,y:30.55,alpha:0},60).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.3,0,88.89999999999999,31.9);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_151 = function() {
		if (ctaCounter++ >=6){
			this.stop();
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(151).call(this.frame_151).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181649").s().p("AhkC2IAAlrIBWAAQAsAAAZAMQAZAMAKAZQALAZAAAnIAACEQAAAogLAaQgKAbgZANQgYAMgqAAgAghCIIAUAAQAWAAAKgIQAKgIACgQQACgPAAgXIAAiKQAAgWgDgOQgDgNgKgHQgKgGgVAAIgTAAg");
	this.shape.setTransform(290.125,40.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#181649").s().p("Ag+CqQgXgPgIgcQgJgbAAgmIAAj2IBBAAIAAD9QAAASADAPQACAPAIAJQAIAJAQAAQARAAAIgJQAIgJACgPQADgPAAgSIAAj9IBBAAIAAD2QAAAmgJAbQgIAcgXAPQgWAPgpAAQgnAAgXgPg");
	this.shape_1.setTransform(264.6,40.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#181649").s().p("Ag9CsQgYgOgJgbQgKgbAAglIAAiHQAAglAKgbQAJgaAYgOQAXgOAmAAQAnAAAWAOQAYAOAKAaQAKAbAAAlIAACHQAAAlgKAbQgKAagYAPQgWAPgnAAQgmAAgXgPgAgXiCQgJAHgCAMQgDAMAAAPIAACnQAAAPACANQADAMAIAIQAJAHAPAAQAQAAAIgHQAIgIACgMQADgNAAgPIAAinQAAgPgDgMQgCgMgIgHQgIgHgQAAQgQAAgHAHg");
	this.shape_2.setTransform(239.2,40.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#181649").s().p("Ag+CrQgWgPgJgcQgJgcAAgmIAAh6QAAgnAJgcQAJgdAXgPQAXgPAnAAQAlAAAWANQAWAMAKAYQAKAYAAAhIAAATIhAAAIAAgUQAAgSgCgMQgDgNgIgHQgHgGgQAAQgRAAgIAIQgIAJgCAOQgCAOAAAQIAACYQAAATADAOQADAOAJAHQAIAIAPAAQARAAAIgJQAIgHAEgPQADgOAAgUIAAgiIgnAAIAAgpIBjAAIAAC4IgrAAIgEgkQgIASgPALQgOAMgYAAQgkAAgVgQg");
	this.shape_3.setTransform(213.85,40.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#181649").s().p("AhMC2IAAlrIBCAAIAAE9IBXAAIAAAug");
	this.shape_4.setTransform(181.925,40.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#181649").s().p("AhMC2IAAlrICYAAIAAAvIhVAAIAABoIBCAAIAAAuIhCAAIAAB4IBWAAIAAAug");
	this.shape_5.setTransform(162.65,40.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#181649").s().p("AhkC2IAAlrIBWAAQAsAAAZAMQAZAMAKAZQALAZAAAnIAACEQAAAogLAaQgKAbgZANQgYAMgqAAgAghCIIAUAAQAWAAAKgIQAKgIACgQQACgPAAgXIAAiKQAAgWgDgOQgDgNgKgHQgKgGgVAAIgTAAg");
	this.shape_6.setTransform(139.975,40.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#181649").s().p("AAzC2IhYjYIAADYIg5AAIAAlrIAvAAIBXDPIAAjPIA3AAIAAFrg");
	this.shape_7.setTransform(114.9,40.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#181649").s().p("AAvC2IgPhUIg+AAIgPBUIg/AAIBKlrIBFAAIBKFrgAgXA4IAwAAIgYiYg");
	this.shape_8.setTransform(90.9,40.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#181649").s().p("AAlC2IAAilIhJAAIAAClIhDAAIAAlrIBDAAIAACYIBJAAIAAiYIBCAAIAAFrg");
	this.shape_9.setTransform(66,40.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(152));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_27 = new cjs.Graphics().p("A4VGLQhFAAgxguQgxgtAAg/IAAnDQAAhAAxgtQAxgtBFAAMAxdAAAQBFAAAxAtQAxAtAABAIAAHDQAAA/gxAtQgxAuhFAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_graphics_27,x:177.499,y:39.4679}).wait(125));

	// Layer_5
	this.instance = new lib.Symbol15();
	this.instance.setTransform(431.4,20.5,1.4054,1.4054,0,0,0,62.7,62.6);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({x:-93.1,y:70.35},30,cjs.Ease.cubicOut).wait(7).to({x:-54.95},0).to({x:446.7,y:20.5},27,cjs.Ease.cubicOut).wait(61));

	// Layer_1
	this.instance_1 = new lib.CTA();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(152));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.7,360,84.7);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_74 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(1));

	// Layer_4 copy 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_43 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_44 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_45 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_46 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_47 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_48 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_49 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_50 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_51 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_52 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_53 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_54 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_55 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_56 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_57 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_58 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_59 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_60 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_61 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_62 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_63 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_64 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_65 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(43).to({graphics:mask_graphics_43,x:-6.1,y:35.8}).wait(1).to({graphics:mask_graphics_44,x:-2.533,y:35.8}).wait(1).to({graphics:mask_graphics_45,x:1.0158,y:35.8}).wait(1).to({graphics:mask_graphics_46,x:4.5283,y:35.8}).wait(1).to({graphics:mask_graphics_47,x:7.9867,y:35.8}).wait(1).to({graphics:mask_graphics_48,x:11.3733,y:35.8}).wait(1).to({graphics:mask_graphics_49,x:14.6708,y:35.8}).wait(1).to({graphics:mask_graphics_50,x:17.8625,y:35.8}).wait(1).to({graphics:mask_graphics_51,x:20.9321,y:35.8}).wait(1).to({graphics:mask_graphics_52,x:23.8639,y:35.8}).wait(1).to({graphics:mask_graphics_53,x:26.6431,y:35.8}).wait(1).to({graphics:mask_graphics_54,x:29.2554,y:35.8}).wait(1).to({graphics:mask_graphics_55,x:31.6875,y:35.8}).wait(1).to({graphics:mask_graphics_56,x:33.9271,y:35.8}).wait(1).to({graphics:mask_graphics_57,x:35.9627,y:35.8}).wait(1).to({graphics:mask_graphics_58,x:37.784,y:35.8}).wait(1).to({graphics:mask_graphics_59,x:39.3816,y:35.8}).wait(1).to({graphics:mask_graphics_60,x:40.7475,y:35.8}).wait(1).to({graphics:mask_graphics_61,x:41.8747,y:35.8}).wait(1).to({graphics:mask_graphics_62,x:42.7574,y:35.8}).wait(1).to({graphics:mask_graphics_63,x:43.3911,y:35.8}).wait(1).to({graphics:mask_graphics_64,x:43.7727,y:35.8}).wait(1).to({graphics:mask_graphics_65,x:43.9,y:35.8}).wait(10));

	// Symbol 27
	this.instance = new lib.Symbol30();
	this.instance.setTransform(104.45,52.85,1,1,0,0,0,23.4,6.9);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).wait(32));

	// Layer_4 copy 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_15 = new cjs.Graphics().p("At0DqIAAlCIa9AAIAAFCg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AtmDqIAAlCIbNAAIAAFCg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AtuDqIAAlCIbdAAIAAFCg");
	var mask_1_graphics_18 = new cjs.Graphics().p("At2DqIAAlCIbtAAIAAFCg");
	var mask_1_graphics_19 = new cjs.Graphics().p("At+DqIAAlCIb9AAIAAFCg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AuGDqIAAlCIcNAAIAAFCg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AuODqIAAlCIcdAAIAAFCg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AuWDqIAAlCIctAAIAAFCg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AueDqIAAlCIc9AAIAAFCg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AulDqIAAlCIdLAAIAAFCg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AutDqIAAlCIdbAAIAAFCg");
	var mask_1_graphics_26 = new cjs.Graphics().p("Au0DqIAAlCIdpAAIAAFCg");
	var mask_1_graphics_27 = new cjs.Graphics().p("Au8DqIAAlCId5AAIAAFCg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AvDDqIAAlCIeHAAIAAFCg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AvKDqIAAlCIeVAAIAAFCg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AvRDqIAAlCIejAAIAAFCg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AvXDqIAAlCIevAAIAAFCg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AveDqIAAlCIe9AAIAAFCg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AvkDqIAAlCIfJAAIAAFCg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AvqDqIAAlCIfVAAIAAFCg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AvwDqIAAlCIfhAAIAAFCg");
	var mask_1_graphics_36 = new cjs.Graphics().p("Av2DqIAAlCIftAAIAAFCg");
	var mask_1_graphics_37 = new cjs.Graphics().p("Av7DqIAAlCIf3AAIAAFCg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AwADqIAAlCMAgBAAAIAAFCg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AwFDqIAAlCMAgLAAAIAAFCg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AwKDqIAAlCMAgVAAAIAAFCg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AwODqIAAlCMAgdAAAIAAFCg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AwSDqIAAlCMAglAAAIAAFCg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AwWDqIAAlCMAgtAAAIAAFCg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AwZDqIAAlCMAgzAAAIAAFCg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AwdDqIAAlCMAg7AAAIAAFCg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AwgDqIAAlCMAhBAAAIAAFCg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AwiDqIAAlCMAhFAAAIAAFCg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AwlDqIAAlCMAhLAAAIAAFCg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AwnDqIAAlCMAhPAAAIAAFCg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AwoDqIAAlCMAhRAAAIAAFCg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AwqDqIAAlCMAhVAAAIAAFCg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AwrDqIAAlCMAhXAAAIAAFCg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AwsDqIAAlCMAhZAAAIAAFCg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AwsDqIAAlCMAhZAAAIAAFCg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AwsDqIAAlCMAhZAAAIAAFCg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_1_graphics_15,x:-88.5,y:23.425}).wait(1).to({graphics:mask_1_graphics_16,x:-83.0583,y:23.425}).wait(1).to({graphics:mask_1_graphics_17,x:-75.4285,y:23.425}).wait(1).to({graphics:mask_1_graphics_18,x:-67.8222,y:23.425}).wait(1).to({graphics:mask_1_graphics_19,x:-60.2511,y:23.425}).wait(1).to({graphics:mask_1_graphics_20,x:-52.7271,y:23.425}).wait(1).to({graphics:mask_1_graphics_21,x:-45.2615,y:23.425}).wait(1).to({graphics:mask_1_graphics_22,x:-37.8661,y:23.425}).wait(1).to({graphics:mask_1_graphics_23,x:-30.5521,y:23.425}).wait(1).to({graphics:mask_1_graphics_24,x:-23.3308,y:23.425}).wait(1).to({graphics:mask_1_graphics_25,x:-16.2134,y:23.425}).wait(1).to({graphics:mask_1_graphics_26,x:-9.2109,y:23.425}).wait(1).to({graphics:mask_1_graphics_27,x:-2.334,y:23.425}).wait(1).to({graphics:mask_1_graphics_28,x:4.4066,y:23.425}).wait(1).to({graphics:mask_1_graphics_29,x:11.0006,y:23.425}).wait(1).to({graphics:mask_1_graphics_30,x:17.4377,y:23.425}).wait(1).to({graphics:mask_1_graphics_31,x:23.7081,y:23.425}).wait(1).to({graphics:mask_1_graphics_32,x:29.8021,y:23.425}).wait(1).to({graphics:mask_1_graphics_33,x:35.7103,y:23.425}).wait(1).to({graphics:mask_1_graphics_34,x:41.4236,y:23.425}).wait(1).to({graphics:mask_1_graphics_35,x:46.9332,y:23.425}).wait(1).to({graphics:mask_1_graphics_36,x:52.2305,y:23.425}).wait(1).to({graphics:mask_1_graphics_37,x:57.3075,y:23.425}).wait(1).to({graphics:mask_1_graphics_38,x:62.1562,y:23.425}).wait(1).to({graphics:mask_1_graphics_39,x:66.7693,y:23.425}).wait(1).to({graphics:mask_1_graphics_40,x:71.1395,y:23.425}).wait(1).to({graphics:mask_1_graphics_41,x:75.2602,y:23.425}).wait(1).to({graphics:mask_1_graphics_42,x:79.125,y:23.425}).wait(1).to({graphics:mask_1_graphics_43,x:82.7279,y:23.425}).wait(1).to({graphics:mask_1_graphics_44,x:86.0634,y:23.425}).wait(1).to({graphics:mask_1_graphics_45,x:89.1264,y:23.425}).wait(1).to({graphics:mask_1_graphics_46,x:91.9121,y:23.425}).wait(1).to({graphics:mask_1_graphics_47,x:94.4162,y:23.425}).wait(1).to({graphics:mask_1_graphics_48,x:96.6349,y:23.425}).wait(1).to({graphics:mask_1_graphics_49,x:98.5647,y:23.425}).wait(1).to({graphics:mask_1_graphics_50,x:100.2027,y:23.425}).wait(1).to({graphics:mask_1_graphics_51,x:101.5463,y:23.425}).wait(1).to({graphics:mask_1_graphics_52,x:102.5935,y:23.425}).wait(1).to({graphics:mask_1_graphics_53,x:103.3427,y:23.425}).wait(1).to({graphics:mask_1_graphics_54,x:103.7926,y:23.425}).wait(1).to({graphics:mask_1_graphics_55,x:103.9427,y:23.425}).wait(20));

	// Symbol 26
	this.instance_1 = new lib.Symbol29();
	this.instance_1.setTransform(104.6,33.15,1,1,0,0,0,105.2,7.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(60));

	// Layer_4 copy 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("ABGCiIAAlDICWAAIAAFDg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AAYCiIAAlDIDkAAIAAFDg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AgUCiIAAlDIEwAAIAAFDg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AhBCiIAAlDIF9AAIAAFDg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AhuCiIAAlDIHJAAIAAFDg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AiaCiIAAlDIIUAAIAAFDg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AjGCiIAAlDIJfAAIAAFDg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AjxCiIAAlDIKpAAIAAFDg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AkbCiIAAlDILwAAIAAFDg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AlECiIAAlDIM3AAIAAFDg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AltCiIAAlDIN8AAIAAFDg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AmUCiIAAlDIO/AAIAAFDg");
	var mask_2_graphics_12 = new cjs.Graphics().p("Am7CiIAAlDIQBAAIAAFDg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AngCiIAAlDIRAAAIAAFDg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AoECiIAAlDIR9AAIAAFDg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AomCiIAAlDIS4AAIAAFDg");
	var mask_2_graphics_16 = new cjs.Graphics().p("ApHCiIAAlDITwAAIAAFDg");
	var mask_2_graphics_17 = new cjs.Graphics().p("ApmCiIAAlDIUlAAIAAFDg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AqECiIAAlDIVYAAIAAFDg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AqgCiIAAlDIWHAAIAAFDg");
	var mask_2_graphics_20 = new cjs.Graphics().p("Aq6CiIAAlDIW0AAIAAFDg");
	var mask_2_graphics_21 = new cjs.Graphics().p("ArSCiIAAlDIXdAAIAAFDg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AroCiIAAlDIYDAAIAAFDg");
	var mask_2_graphics_23 = new cjs.Graphics().p("Ar9CiIAAlDIYmAAIAAFDg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AsPCiIAAlDIZFAAIAAFDg");
	var mask_2_graphics_25 = new cjs.Graphics().p("AsfCiIAAlDIZgAAIAAFDg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AsuCiIAAlDIZ5AAIAAFDg");
	var mask_2_graphics_27 = new cjs.Graphics().p("As6CiIAAlDIaOAAIAAFDg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AtECiIAAlDIafAAIAAFDg");
	var mask_2_graphics_29 = new cjs.Graphics().p("AtLCiIAAlDIarAAIAAFDg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AtRCiIAAlDIa1AAIAAFDg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AtUCiIAAlDIa7AAIAAFDg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AteCiIAAlDIa9AAIAAFDg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:22.025,y:14.175}).wait(1).to({graphics:mask_2_graphics_1,x:25.2207,y:14.175}).wait(1).to({graphics:mask_2_graphics_2,x:28.4087,y:14.175}).wait(1).to({graphics:mask_2_graphics_3,x:31.5814,y:14.175}).wait(1).to({graphics:mask_2_graphics_4,x:34.731,y:14.175}).wait(1).to({graphics:mask_2_graphics_5,x:37.85,y:14.175}).wait(1).to({graphics:mask_2_graphics_6,x:40.9309,y:14.175}).wait(1).to({graphics:mask_2_graphics_7,x:43.9663,y:14.175}).wait(1).to({graphics:mask_2_graphics_8,x:46.9487,y:14.175}).wait(1).to({graphics:mask_2_graphics_9,x:49.8712,y:14.175}).wait(1).to({graphics:mask_2_graphics_10,x:52.7265,y:14.175}).wait(1).to({graphics:mask_2_graphics_11,x:55.5079,y:14.175}).wait(1).to({graphics:mask_2_graphics_12,x:58.2087,y:14.175}).wait(1).to({graphics:mask_2_graphics_13,x:60.8222,y:14.175}).wait(1).to({graphics:mask_2_graphics_14,x:63.3423,y:14.175}).wait(1).to({graphics:mask_2_graphics_15,x:65.7629,y:14.175}).wait(1).to({graphics:mask_2_graphics_16,x:68.0781,y:14.175}).wait(1).to({graphics:mask_2_graphics_17,x:70.2823,y:14.175}).wait(1).to({graphics:mask_2_graphics_18,x:72.3703,y:14.175}).wait(1).to({graphics:mask_2_graphics_19,x:74.337,y:14.175}).wait(1).to({graphics:mask_2_graphics_20,x:76.1777,y:14.175}).wait(1).to({graphics:mask_2_graphics_21,x:77.8879,y:14.175}).wait(1).to({graphics:mask_2_graphics_22,x:79.4635,y:14.175}).wait(1).to({graphics:mask_2_graphics_23,x:80.9008,y:14.175}).wait(1).to({graphics:mask_2_graphics_24,x:82.1962,y:14.175}).wait(1).to({graphics:mask_2_graphics_25,x:83.3467,y:14.175}).wait(1).to({graphics:mask_2_graphics_26,x:84.3494,y:14.175}).wait(1).to({graphics:mask_2_graphics_27,x:85.202,y:14.175}).wait(1).to({graphics:mask_2_graphics_28,x:85.9024,y:14.175}).wait(1).to({graphics:mask_2_graphics_29,x:86.4489,y:14.175}).wait(1).to({graphics:mask_2_graphics_30,x:86.8403,y:14.175}).wait(1).to({graphics:mask_2_graphics_31,x:87.0754,y:14.175}).wait(1).to({graphics:mask_2_graphics_32,x:81.7,y:14.175}).wait(43));

	// Symbol 25
	this.instance_2 = new lib.Symbol28();
	this.instance_2.setTransform(104.85,13.45,1,1,0,0,0,61.6,7.1);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,0,216.1,66.8);


(lib.Symbol7copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol 5 copy
	this.instance = new lib.Symbol5copy();
	this.instance.setTransform(649.25,-48.6,1.8077,1.8077,165.0008,0,0,1.3,1.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:false},0).wait(306));

	// Symbol 5 copy 3
	this.instance_1 = new lib.Symbol5copy3();
	this.instance_1.setTransform(660.3,-34.85,1.0435,1.0435,0,0,0,1.4,1.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(323));

	// Symbol 5 copy 3
	this.instance_2 = new lib.Symbol5copy3();
	this.instance_2.setTransform(668.3,13.15,1.0435,1.0435,0,0,0,1.4,1.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).wait(334));

	// Symbol 5 copy 3
	this.instance_3 = new lib.Symbol5copy3();
	this.instance_3.setTransform(663.7,-14.85,1.8461,1.8461,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(342));

	// Layer_5
	this.instance_4 = new lib.Symbol5copy();
	this.instance_4.setTransform(675.4,134.45,1.8077,1.8077,165.0008,0,0,1.3,1.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},0).wait(321));

	// Layer_6
	this.instance_5 = new lib.Symbol5copy3();
	this.instance_5.setTransform(686.45,148.2,1.0435,1.0435,0,0,0,1.4,1.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).wait(334));

	// Layer_4 copy 2
	this.instance_6 = new lib.Symbol5copy3();
	this.instance_6.setTransform(694.45,196.2,1.0435,1.0435,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(342));

	// Layer_4 copy
	this.instance_7 = new lib.Symbol5copy3();
	this.instance_7.setTransform(689.85,168.2,1.8461,1.8461,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(342));

	// Layer_4
	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(688.1,-119.2,1,1,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(342));

	// Layer_2 copy
	this.instance_9 = new lib.Symbol5();
	this.instance_9.setTransform(680.7,-150.2,0.68,0.68,-9.6942,0,0,1.4,1.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).wait(338));

	// Layer_2 copy 2
	this.instance_10 = new lib.Symbol5();
	this.instance_10.setTransform(680.6,-236.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(17).to({_off:false},0).wait(325));

	// Layer_2 copy 3
	this.instance_11 = new lib.Symbol5();
	this.instance_11.setTransform(682.6,-282.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10).to({_off:false},0).wait(332));

	// Layer_2
	this.instance_12 = new lib.Symbol5();
	this.instance_12.setTransform(700.6,-176.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({_off:false},0).wait(328));

	// Layer_1 copy 4
	this.instance_13 = new lib.Symbol5copy2();
	this.instance_13.setTransform(486.1,5.1,1.4729,1.4729,14.9991,0,0,1.3,1.4);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(17).to({_off:false},0).wait(325));

	// Layer_1 copy 5
	this.instance_14 = new lib.Symbol5copy();
	this.instance_14.setTransform(471.25,45,1.8077,1.8077,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(342));

	// Layer_7 copy 4
	this.instance_15 = new lib.Symbol5copy4();
	this.instance_15.setTransform(482.45,-44.8,1.5458,1.5458,-178.5536,0,0,1.4,1.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(23).to({_off:false},0).wait(319));

	// Layer_7 copy 5
	this.instance_16 = new lib.Symbol5copy3();
	this.instance_16.setTransform(457.8,-73.2,1.0434,1.0434,-178.5536,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(342));

	// Layer_4 copy 7
	this.instance_17 = new lib.Symbol5copy3();
	this.instance_17.setTransform(482.45,87.6,1.0434,1.0434,150.0013,0,0,1.5,1.3);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(5).to({_off:false},0).wait(337));

	// Layer_4 copy 8
	this.instance_18 = new lib.Symbol5copy3();
	this.instance_18.setTransform(481.65,2.9,1.8461,1.8461,150.0007,0,0,1.4,1.4);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(8).to({_off:false},0).wait(334));

	// Layer_1 copy 2
	this.instance_19 = new lib.Symbol5copy2();
	this.instance_19.setTransform(457.35,-204.1,1.4729,1.4729,14.9991,0,0,1.3,1.4);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(17).to({_off:false},0).wait(325));

	// Layer_1 copy 3
	this.instance_20 = new lib.Symbol5copy();
	this.instance_20.setTransform(442.5,-164.2,1.8077,1.8077,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(342));

	// Layer_7 copy 2
	this.instance_21 = new lib.Symbol5copy4();
	this.instance_21.setTransform(453.7,-254,1.5458,1.5458,-178.5536,0,0,1.4,1.4);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(23).to({_off:false},0).wait(319));

	// Layer_7 copy 3
	this.instance_22 = new lib.Symbol5copy3();
	this.instance_22.setTransform(429.05,-282.4,1.0434,1.0434,-178.5536,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(342));

	// Layer_4 copy 5
	this.instance_23 = new lib.Symbol5copy3();
	this.instance_23.setTransform(453.7,-121.6,1.0434,1.0434,150.0013,0,0,1.5,1.3);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(5).to({_off:false},0).wait(337));

	// Layer_4 copy 6
	this.instance_24 = new lib.Symbol5copy3();
	this.instance_24.setTransform(452.9,-206.3,1.8461,1.8461,150.0007,0,0,1.4,1.4);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(8).to({_off:false},0).wait(334));

	// Layer_1 copy
	this.instance_25 = new lib.Symbol5copy2();
	this.instance_25.setTransform(461.35,215.9,1.4729,1.4729,14.9991,0,0,1.3,1.4);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(17).to({_off:false},0).wait(325));

	// Layer_1
	this.instance_26 = new lib.Symbol5copy();
	this.instance_26.setTransform(440.5,175.8,1.8077,1.8077,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(342));

	// Layer_7 copy
	this.instance_27 = new lib.Symbol5copy4();
	this.instance_27.setTransform(451.7,158,1.5458,1.5458,-178.5536,0,0,1.4,1.4);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(23).to({_off:false},0).wait(319));

	// Layer_7
	this.instance_28 = new lib.Symbol5copy3();
	this.instance_28.setTransform(429.05,117.6,1.0434,1.0434,-178.5536,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(342));

	// Layer_4 copy 3
	this.instance_29 = new lib.Symbol5copy3();
	this.instance_29.setTransform(445.7,298.4,1.0434,1.0434,150.0013,0,0,1.5,1.3);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(5).to({_off:false},0).wait(337));

	// Layer_4 copy 4
	this.instance_30 = new lib.Symbol5copy3();
	this.instance_30.setTransform(463.75,320.2,1.8461,1.8461,150.0007,0,0,1.4,1.4);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(8).to({_off:false},0).wait(334));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(420.5,-285.2,281.6,608.8);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.instance = new lib.Symbol5copy();
	this.instance.setTransform(463.4,-5.55,1.8077,1.8077,165.0008,0,0,1.3,1.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(321));

	// Layer_6
	this.instance_1 = new lib.Symbol5copy3();
	this.instance_1.setTransform(474.45,60.5,1.0435,1.0435,0,0,0,1.4,1.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(334));

	// Layer_4 copy 2
	this.instance_2 = new lib.Symbol5copy3();
	this.instance_2.setTransform(482.45,108.5,1.0435,1.0435,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(342));

	// Layer_4 copy
	this.instance_3 = new lib.Symbol5copy3();
	this.instance_3.setTransform(477.85,80.5,1.8461,1.8461,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(342));

	// Layer_4
	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(485.15,73.1,1,1,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(342));

	// Layer_2 copy
	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(487.75,-10.2,0.68,0.68,-9.6942,0,0,1.4,1.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(338));

	// Layer_2 copy 2
	this.instance_6 = new lib.Symbol5();
	this.instance_6.setTransform(487.65,-36.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({_off:false},0).wait(325));

	// Layer_2 copy 3
	this.instance_7 = new lib.Symbol5();
	this.instance_7.setTransform(543.65,-12.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(332));

	// Layer_2
	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(487.65,-16.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).wait(328));

	// Layer_1 copy
	this.instance_9 = new lib.Symbol5copy2();
	this.instance_9.setTransform(-231.9,55.9,1.4729,1.4729,14.9991,0,0,1.3,1.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},0).wait(325));

	// Layer_1
	this.instance_10 = new lib.Symbol5copy();
	this.instance_10.setTransform(-228.75,35.8,1.8077,1.8077,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(342));

	// Layer_7 copy
	this.instance_11 = new lib.Symbol5copy4();
	this.instance_11.setTransform(-241.55,-2,1.5458,1.5458,-178.5536,0,0,1.4,1.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({_off:false},0).wait(319));

	// Layer_7
	this.instance_12 = new lib.Symbol5copy3();
	this.instance_12.setTransform(-240.2,-22.4,1.0434,1.0434,-178.5536,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(342));

	// Layer_4 copy 3
	this.instance_13 = new lib.Symbol5copy3();
	this.instance_13.setTransform(-247.55,138.4,1.0434,1.0434,150.0013,0,0,1.5,1.3);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).wait(337));

	// Layer_4 copy 4
	this.instance_14 = new lib.Symbol5copy3();
	this.instance_14.setTransform(-229.5,160.2,1.8461,1.8461,150.0007,0,0,1.4,1.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(8).to({_off:false},0).wait(334));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.2,-38.2,794.4000000000001,201.8);


// stage content:
(lib.MultiBank_320x100 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [430,441];
	// timeline functions:
	this.frame_430 = function() {
		if (myCounter++ <2){
			this.gotoAndPlay(1);
		};
	}
	this.frame_441 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(430).call(this.frame_430).wait(11).call(this.frame_441).wait(1));

	// cta
	this.instance = new lib.Symbol2();
	this.instance.setTransform(205.15,77.15,0.277,0.2767,0,0,0,186.3,46.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(372).to({_off:false},0).to({y:79.65,alpha:1},16,cjs.Ease.quadOut).wait(54));

	// t2
	this.instance_1 = new lib.Symbol17();
	this.instance_1.setTransform(339.6,80.1,1.1047,1.0963,0,0,0,120,18.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(220).to({_off:false},0).wait(138).to({alpha:0},14).to({_off:true},1).wait(69));

	// text1
	this.instance_2 = new lib.Symbol13();
	this.instance_2.setTransform(203.65,69.8,0.8208,0.8197,0,0,0,91.3,15.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(76).to({_off:false},0).to({x:203.7,alpha:1},17).wait(112).to({x:203.65},0).to({alpha:0},15).to({_off:true},1).wait(221));

	// legat
	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(36.6,56.9,0.1865,0.1863,0,0,0,164.3,31.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({y:59.65,alpha:1},21).wait(412));

	// in gold
	this.instance_4 = new lib.Symbol10();
	this.instance_4.setTransform(203.8,30.15,0.7903,0.7895,0,0,0,105.6,31.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(433));

	// logo
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(59.4,-6.7,0.1064,0.1057,0,0,0,516.3,62.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({alpha:1},12).wait(427));

	// sparks copy
	this.instance_6 = new lib.Symbol7copy();
	this.instance_6.setTransform(170.9,298.85,0.4396,0.4396,-90,0,0,1.3,1.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).wait(427).to({alpha:0},11).wait(1));

	// sparks
	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(109.4,17.5,0.4396,0.4396,0,0,0,1.4,1.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).wait(427).to({alpha:0},11).wait(1));

	// bg
	this.instance_8 = new lib.Symbol21();
	this.instance_8.setTransform(63.1,54.95,0.4396,0.4396,0,0,0,168.5,125);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},12).wait(430));

	// blackbg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape.setTransform(160,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(442));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(150,41.2,172.60000000000002,79.5);
// library properties:
lib.properties = {
	id: '4C67F3A136A92E4E81338A9018FE5B2A',
	width: 320,
	height: 100,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/CTA.png?1626165434469", id:"CTA"},
		{src:"images/left.png?1626165434469", id:"left"},
		{src:"images/right.png?1626165434469", id:"right"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4C67F3A136A92E4E81338A9018FE5B2A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;