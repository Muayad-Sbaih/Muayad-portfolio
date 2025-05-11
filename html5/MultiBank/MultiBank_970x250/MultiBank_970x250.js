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


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(179.175,9.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,358.4,19.5), null);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(83.275,9.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,166.6,19.3), null);


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
	this.instance.setTransform(868,0);

	this.instance_1 = new lib.left();
	this.instance_1.setTransform(25,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(25,0,971,250), null);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAGACQAGACAFADQAFADADAEIAFAIIACAJIABAHQAAAHgDAIQgCAGgGAGQgFAGgJACQgHAEgKAAgAgWAdIAMAAQAIAAAFgCQAGgCAEgDQAFgEACgFQACgFABgIIgBgIQgCgEgDgFQgEgFgGgDQgFgDgJAAIgPAAg");
	this.shape.setTransform(47.05,38.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAjQgGgDgBgJIAKgDQABAFADACQADADAEAAQADAAACgCQADgBABgCIACgGIABgGIAAg0IAKAAIAAA3QAAAHgCAFQgCAEgEADQgDADgFABIgGABQgIAAgGgFg");
	this.shape_1.setTransform(39.8,38.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_2.setTransform(35.975,38.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATAnIgTg/IgSA/IgLAAIgXhNIALAAIASA+IASg+IALAAIASA+IARg+IAMAAIgXBNg");
	this.shape_3.setTransform(29.15,38.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAGACQAGACAFADQAFADADAEIAFAIIACAJIABAHQAAAHgDAIQgCAGgGAGQgFAGgJACQgIAEgJAAgAgWAdIAMAAQAIAAAEgCQAHgCAEgDQAEgEADgFQADgFAAgIIgBgIQgCgEgDgFQgEgFgGgDQgGgDgIAAIgPAAg");
	this.shape_4.setTransform(19.95,38.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAKAAIAABDIAjAAIAAAKg");
	this.shape_5.setTransform(13.325,38.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_6.setTransform(6.925,38.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOAnIgSgiIgMAAIAAAiIgLAAIAAhNIAbAAQAHAAAFACQAFACADAEIAEAGIABAIIgCAHIgDAHIgHADQgDACgFAAIAXAkgAgQgDIAOAAIAFgBIAFgCQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAQABgDAAgEQAAgEgBgDQgBgCgDgCIgFgBIgFAAIgOAAg");
	this.shape_7.setTransform(0.375,38.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_8.setTransform(-6.475,38.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATAnIgTg/IgSA/IgLAAIgXhNIALAAIASA+IASg+IALAAIASA+IARg+IAMAAIgXBNg");
	this.shape_9.setTransform(-15.4,38.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAHACQAFACAFADQAFADADAEIAEAIIADAJIABAHQAAAIgDAGQgDAIgFAFQgGAGgHADQgJADgJAAgAgXAdIAOAAQAHAAAEgBQAGgCAFgEQAEgEADgFQACgGAAgHIgBgHQgBgFgDgFQgEgEgFgEQgHgDgIAAIgQAAg");
	this.shape_10.setTransform(50.7,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAOAnIgSgjIgMAAIAAAjIgLAAIAAhNIAbAAQAHAAAFACQAFACADADIAEAHIABAIIgCAHIgDAGIgHAEQgDACgFAAIAXAkgAgQgEIAOAAIAFAAIAFgCQABAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQABgDAAgEQAAgEgBgDQgBgCgDgBIgFgCIgFAAIgOAAg");
	this.shape_11.setTransform(43.525,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_12.setTransform(36.675,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_13.setTransform(29.975,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAKAAIAABDIAjAAIAAAKg");
	this.shape_14.setTransform(23.975,23.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLAmQgFgDgEgEQgFgEgCgFQgCgGAAgHIAAgwIAKAAIAAAvIABAIQABADADADQACAEAEACQADACAFAAQAGAAADgCQAEgCACgEQADgDABgDIABgIIAAgvIAKAAIAAAwQAAAHgCAGQgCAFgFAEQgEAEgFADQgGACgGAAQgFAAgGgCg");
	this.shape_15.setTransform(16.775,23.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLAlQgHgCgGgGQgFgGgDgHQgDgIAAgIQAAgHADgIQADgHAGgGQAFgGAIgDQAHgDAIAAQALAAAHADQAGADAFAEIgHAIQgFgFgGgBQgFgCgGAAQgGAAgFADQgFACgEAEQgEAFgCAFQgCAFAAAGQAAAHACAFQACAGAEAEQAEAEAGACQAFADAGAAIAKgBQAGgBADgCIAAgWIgRAAIAAgJIAcAAIAAAmIgHADIgHACIgIABIgIABQgJAAgIgEg");
	this.shape_16.setTransform(8.425,23.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_17.setTransform(1.275,23.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAOAnIgSgjIgMAAIAAAjIgLAAIAAhNIAbAAQAHAAAFACQAFACADADIAEAHIABAIIgCAHIgDAGIgHAEQgDACgFAAIAXAkgAgQgEIAOAAIAFAAIAFgCQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAQABgDAAgEQAAgEgBgDQgBgCgDgBIgFgCIgFAAIgOAAg");
	this.shape_18.setTransform(-5.275,23.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_19.setTransform(-12.125,23.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLAlQgHgCgGgGQgFgGgDgHQgDgIAAgIQAAgHADgIQADgHAGgGQAFgGAIgDQAHgDAIAAQALAAAHADQAGADAFAEIgHAIQgFgFgGgBQgFgCgGAAQgGAAgFADQgFACgEAEQgEAFgCAFQgCAFAAAGQAAAHACAFQACAGAEAEQAEAEAGACQAFADAGAAIAKgBQAGgBADgCIAAgWIgRAAIAAgJIAcAAIAAAmIgHADIgHACIgIABIgIABQgJAAgIgEg");
	this.shape_20.setTransform(-20.225,23.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLAmQgHgDgGgGQgFgGgDgIQgDgGAAgJQAAgIADgHQADgIAGgFQAFgGAIgDQAHgDAIAAQALAAAHADQAGACAFAFIgHAIQgFgEgGgCQgFgCgGAAQgGAAgFACQgFADgEAEQgEAEgCAGQgCAGAAAFQAAAHACAFQACAGAEAEQAEAFAGACQAFACAGAAIAKgBQAGgBADgCIAAgWIgRAAIAAgJIAcAAIAAAmIgHADIgHACIgIABIgIABQgJAAgIgDg");
	this.shape_21.setTransform(37.625,9.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_22.setTransform(32.025,9.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAHACQAFACAFADQAFADADAEIAEAJIADAIIABAHQAAAIgDAGQgCAIgGAFQgFAGgJADQgHADgKAAgAgXAdIAOAAQAGAAAFgBQAHgCAEgEQAEgEADgFQADgFAAgIIgCgHQgBgGgDgEQgEgFgFgDQgHgDgIAAIgQAAg");
	this.shape_23.setTransform(26.6,9.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_24.setTransform(19.275,9.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAKAAIAABDIAjAAIAAAKg");
	this.shape_25.setTransform(13.275,9.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAKAAIAABDIAjAAIAAAKg");
	this.shape_26.setTransform(7.575,9.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgIAGgFQAFgGAIgDQAHgDAIAAQAJAAAHADQAIADAFAGQAGAFADAIQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgcQgFADgEAEQgEAEgCAGQgCAGAAAFQAAAHACAFQACAGAEAEQAEAEAFADQAFACAGAAQAHAAAFgCQAGgDADgEQAEgEACgGQACgFAAgHQAAgFgCgGQgCgGgEgEQgDgEgGgDQgFgCgHAAQgGAAgFACg");
	this.shape_27.setTransform(-0.325,9.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEAnIgehNIAMAAIAWA+IAYg+IALAAIgeBNg");
	this.shape_28.setTransform(-8.375,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-39,0,108.4,47.8), null);


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
	this.shape.setTransform(49.675,38.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgHAGgGQAFgFAIgEQAHgDAIAAQAJAAAHADQAIAEAFAFQAGAGADAHQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgbQgFACgEAEQgEAEgCAGQgCAGAAAFQAAAGACAGQACAGAEAEQAEAEAFACQAFADAGAAQAHAAAFgDQAGgCADgEQAEgEACgGQACgGAAgGQAAgFgCgGQgCgGgEgEQgDgEgGgCQgFgDgHAAQgGAAgFADg");
	this.shape_1.setTransform(40.125,38.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgHAGgGQAFgFAIgEQAHgDAIAAQAJAAAHADQAIAEAFAFQAGAGADAHQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgbQgFACgEAEQgEAEgCAGQgCAGAAAFQAAAGACAGQACAGAEAEQAEAEAFACQAFADAGAAQAHAAAFgDQAGgCADgEQAEgEACgGQACgGAAgGQAAgFgCgGQgCgGgEgEQgDgEgGgCQgFgDgHAAQgGAAgFADg");
	this.shape_2.setTransform(30.975,38.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAnIAAhNIAaAAQAFAAAFACQAEABADACIAFAGQABAEAAAFQABAGgEAEQgEAFgFACQADAAADABIAFAEIAEAGIABAHQAAAFgCAFQgCAEgEADQgEACgEABQgFACgGAAgAgPAeIAPAAIAEgBIAGgCIAEgDQACgEAAgDQAAgIgFgDQgEgEgHAAIgPAAgAgPgGIAOAAIAEAAIAFgCIADgEIABgFQAAgFgCgEQgDgCgHAAIgPAAg");
	this.shape_3.setTransform(23.15,38.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAnIAAhNIAxAAIAAAKIgmAAIAAAZIAjAAIAAAJIgjAAIAAAhg");
	this.shape_4.setTransform(16.6,38.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_5.setTransform(10.075,38.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUAnIAAgkIgnAAIAAAkIgLAAIAAhNIALAAIAAAgIAnAAIAAggIALAAIAABNg");
	this.shape_6.setTransform(2.375,38.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAkQgFgEgDgGQgDgGgBgHIgBgNIAAgIIACgJIADgJIAFgHIAHgFQAEgBAFAAQAFAAAEABQAFACADADIAFAHIADAJIABAJIABAIIgBANQgBAHgDAGQgDAGgGAEQgFAEgIAAQgHAAgGgEgAgFgdQgDACgCACIgDAGIgBAHIgBAHIAAAFIAAAJIACAKQACAFADADQADAEAFAAQAFAAAEgEQADgDACgFIACgKIAAgJIAAgFIgBgHIgBgHIgDgGIgFgEQgCgBgEAAQgDAAgCABg");
	this.shape_7.setTransform(37.175,23.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAkQgFgEgDgGQgDgGgBgHIgBgNIAAgIIACgJIADgJIAFgHIAHgFQAEgBAFAAQAFAAAEABQAFACADADIAFAHIADAJIABAJIABAIIgBANQgBAHgDAGQgDAGgGAEQgFAEgIAAQgHAAgGgEgAgFgdQgDACgCACIgDAGIgBAHIgBAHIAAAFIAAAJIACAKQACAFADADQADAEAFAAQAFAAAEgEQADgDACgFIACgKIAAgJIAAgFIgBgHIgBgHIgDgGIgFgEQgCgBgEAAQgDAAgCABg");
	this.shape_8.setTransform(31.075,23.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAkQgHgFgCgHIAKgEQACAGAEACQADACAFAAIAFgBIAFgDIAEgFIABgHQAAgIgFgEQgGgEgHAAIgIABIgIACIABgoIApAAIAAAKIgfAAIAAAUIACgBIADAAIADgBIABAAQAGAAAEACQAEACAEADIAFAHQABAFAAAGQAAAGgCAEQgCAFgEAEQgDADgFACQgFACgFAAQgIAAgGgEg");
	this.shape_9.setTransform(24.825,23.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAZQgCgCAAgDQAAgDACgCQACgDACAAQADAAACADQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCgAgEgNQgCgCAAgDQAAgDACgCQACgDACAAQADAAACADQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_10.setTransform(20.375,24.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFAnIAAhBIgNANIgHgHIAVgSIAKAAIAABNg");
	this.shape_11.setTransform(15.225,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEAnIAAhDIgaAAIAAgKIA9AAIAAAKIgaAAIAABDg");
	this.shape_12.setTransform(34.2,9.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgIAGgFQAFgGAIgDQAHgDAIAAQAJAAAHADQAIADAFAGQAGAFADAIQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgcQgFADgEAEQgEAEgCAGQgCAGAAAFQAAAHACAFQACAGAEAEQAEAEAFADQAFACAGAAQAHAAAFgCQAGgDADgEQAEgEACgGQACgFAAgHQAAgFgCgGQgCgGgEgEQgDgEgGgDQgFgCgHAAQgGAAgFACg");
	this.shape_13.setTransform(26.475,9.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEAnIAAhDIgaAAIAAgKIA8AAIAAAKIgZAAIAABDg");
	this.shape_14.setTransform(18.75,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-3.7,0,60.5,62.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAUAnIgqg/IAAAAIAAA/IgLAAIAAhNIAOAAIAqA/IAAg/IALAAIAABNg");
	this.shape.setTransform(82.275,38.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_1.setTransform(74.825,38.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAmQgHgDgEgFIAJgHQACAEAFACQAEACAFAAIAEgBIAGgCIADgEQACgCAAgEQAAgFgDgCIgHgDIgJgEIgJgEQgEgCgDgEQgDgFAAgHIACgIIAFgHIAIgEQAFgDAGAAQAGAAAGACQAGACAEAFIgJAIQgBgDgEgCQgDgCgFAAIgHABIgEADIgDAEIgBAEQAAAFAEADIAGAEIAJADQAFABAEACQAEACADAEQADAEAAAHQAAAFgCAFQgCAFgEADQgDACgFACQgGACgEAAQgIAAgGgDg");
	this.shape_2.setTransform(68.05,38.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAGACQAHACAEADQAFADADAEIAFAIIACAJIABAHQAAAHgDAIQgDAGgFAGQgGAGgHACQgIAEgKAAgAgWAdIAMAAQAHAAAGgCQAFgCAFgDQAFgEACgFQACgFABgIIgBgIQgCgEgDgFQgDgFgHgDQgFgDgJAAIgPAAg");
	this.shape_3.setTransform(61.2,38.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUAnIgqg/IAAAAIAAA/IgLAAIAAhNIAOAAIAqA/IAAg/IALAAIAABNg");
	this.shape_4.setTransform(52.575,38.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgHAGgGQAFgFAIgEQAHgDAIAAQAJAAAHADQAIAEAFAFQAGAGADAHQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgbQgFACgEAEQgEAEgCAGQgCAGAAAFQAAAGACAGQACAGAEAEQAEAEAFACQAFADAGAAQAHAAAFgDQAGgCADgEQAEgEACgGQACgGAAgGQAAgFgCgGQgCgGgEgEQgDgEgGgCQgFgDgHAAQgGAAgFADg");
	this.shape_5.setTransform(43.625,38.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAnIAAhNIAwAAIAAAKIglAAIAAAZIAjAAIAAAJIgjAAIAAAhg");
	this.shape_6.setTransform(36.2,38.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUAnIgqg/IAAAAIAAA/IgLAAIAAhNIAOAAIAqA/IAAg/IALAAIAABNg");
	this.shape_7.setTransform(25.325,38.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaAnIgIgTIgkAAIgHATIgNAAIAjhNIAIAAIAiBNgAgOAKIAdAAIgPgiIAAAAg");
	this.shape_8.setTransform(17.075,38.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAnIgehNIAMAAIAWA/IAYg/IALAAIgeBNg");
	this.shape_9.setTransform(9.725,38.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_10.setTransform(67.775,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAeAnIAAg/IAAAAIgaA/IgGAAIgbg/IAAA/IgLAAIAAhNIAQAAIAYA6IAAAAIAZg6IAQAAIAABNg");
	this.shape_11.setTransform(59.175,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAaAnIgIgTIgkAAIgHATIgNAAIAjhNIAIAAIAiBNgAgOAKIAdAAIgPgiIAAAAg");
	this.shape_12.setTransform(50.325,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAUAnIgqg/IAAAAIAAA/IgLAAIAAhNIAOAAIAqA/IAAg/IALAAIAABNg");
	this.shape_13.setTransform(42.075,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAaAAQAIAAAEACQAFACADADIAEAHIABAIIgBAIIgEAHQgDACgFABQgEACgIAAIgQAAIAAAjgAgPgEIAOAAIAFAAIAGgCQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAQACgDAAgEQAAgEgCgDQgBgCgCgBIgGgCIgFAAIgOAAg");
	this.shape_14.setTransform(34.825,23.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAmQgIgEgFgFQgGgFgDgIQgDgHAAgJQAAgHADgIQADgHAGgGQAFgGAIgDQAHgDAIAAQAJAAAHADQAIADAFAGQAGAGADAHQADAIAAAHQAAAJgDAHQgDAIgGAFQgFAFgIAEQgHADgJAAQgIAAgHgDgAgLgbQgFACgEAEQgEAFgCAFQgCAFAAAGQAAAGACAGQACAGAEAEQAEAEAFACQAFADAGAAQAHAAAFgDQAGgCADgEQAEgEACgGQACgGAAgGQAAgGgCgFQgCgFgEgFQgDgEgGgCQgFgDgHAAQgGAAgFADg");
	this.shape_15.setTransform(26.625,23.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_16.setTransform(87.125,9.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAQAnIgjgnIgBAAIAAAnIgLAAIAAhNIALAAIAAAiIABAAIAigiIAOAAIgkAkIAmApg");
	this.shape_17.setTransform(80.5,9.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOAkQgFgFgCgIIAKgCQABAEADADQADACAEAAQADAAACgBQADgCABgDIACgFIABgHIAAgzIAKAAIAAA3QAAAHgCAFQgCAFgEACQgDADgFABIgGABQgIAAgGgEg");
	this.shape_18.setTransform(73.35,9.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_19.setTransform(69.525,9.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAKAAIAABDIAjAAIAAAKg");
	this.shape_20.setTransform(65.625,9.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAKAAIAABDIAjAAIAAAKg");
	this.shape_21.setTransform(59.925,9.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_22.setTransform(53.525,9.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAGACQAHACAEADQAFADADAEIAEAJIADAIIABAHQAAAIgDAGQgDAIgFAFQgGAGgHADQgJADgJAAgAgXAdIANAAQAHAAAGgBQAFgCAFgEQAEgEADgFQADgFgBgIIgBgHQgBgGgDgEQgDgFgHgDQgFgDgJAAIgQAAg");
	this.shape_23.setTransform(46,9.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAHACQAFACAFADQAFADADAEIAEAJIADAIIABAHQAAAIgDAGQgCAIgGAFQgFAGgJADQgHADgKAAgAgXAdIAOAAQAGAAAFgBQAHgCAEgEQAFgEACgFQADgFAAgIIgCgHQgBgGgDgEQgEgFgFgDQgHgDgIAAIgQAAg");
	this.shape_24.setTransform(37.85,9.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_25.setTransform(32.075,9.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAeAnIAAg/IAAAAIgaA/IgGAAIgbg/IAAA/IgLAAIAAhNIAQAAIAYA6IAAAAIAZg6IAQAAIAABNg");
	this.shape_26.setTransform(25.575,9.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAUAnIgqg/IAAAAIAAA/IgLAAIAAhNIAOAAIAqA/IAAg/IALAAIAABNg");
	this.shape_27.setTransform(16.225,9.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgIAGgFQAFgGAIgDQAHgDAIAAQAJAAAHADQAIADAFAGQAGAFADAIQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgcQgFADgEAEQgEAEgCAGQgCAGAAAFQAAAHACAFQACAGAEAEQAEAEAFADQAFACAGAAQAHAAAFgCQAGgDADgEQAEgEACgGQACgFAAgHQAAgFgCgGQgCgGgEgEQgDgEgGgDQgFgCgHAAQgGAAgFACg");
	this.shape_28.setTransform(7.275,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0.6,0,91.7,62.4), null);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-0.1,0,0,-0.1,0,30.5).s().p("AgRD+IAAn7IAjAAIAAH7g");
	this.shape.setTransform(1.05,22.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-0.7,-3.2,3.5999999999999996,50.800000000000004), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgcAqIAAhTIAeAAQAHgBAFADQAGACADAEQADADACAEIABAIIgBAIQgCAFgDADQgDACgFADQgGACgHAAIgSAAIAAAlgAgQgEIAPAAIAFAAIAHgCIADgFQACgCAAgFQAAgEgCgCQgBgEgCgBIgHgCIgFAAIgPAAg");
	this.shape.setTransform(159.3,25.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMApQgGgCgEgFQgFgEgCgGQgDgGAAgHIAAg1IAMAAIAAAzIABAIQABAEACADQADAFAEABQAEADAFAAQAGAAAEgDQAEgBADgFQACgDABgEIABgIIAAgzIAMAAIAAA1QAAAHgDAGQgCAGgFAEQgEAFgGACQgGACgHAAQgGAAgGgCg");
	this.shape_1.setTransform(151.125,25.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRApQgIgDgGgGQgGgGgDgJQgDgHAAgKQAAgJADgHQADgJAGgGQAGgGAIgDQAIgDAJAAQAKAAAIADQAIADAGAGQAGAGADAJQADAHAAAJQAAAKgDAHQgDAJgGAGQgGAGgIADQgIADgKAAQgJAAgIgDgAgMgeQgGADgEAEQgEAFgDAGQgCAGAAAGQAAAHACAGQADAGAEAFQAEAEAGADQAGADAGAAQAHAAAGgDQAGgDAEgEQAFgFACgGQACgGAAgHQAAgGgCgGQgCgGgFgFQgEgEgGgDQgGgDgHAAQgGAAgGADg");
	this.shape_2.setTransform(141.875,25.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQAqIgVglIgNAAIAAAlIgLAAIAAhTIAdAAQAIgBAFADQAFACADAEQADADACAEIABAIQAAAFgCADIgEAHQgCADgEABQgEACgFABIAYAmgAgSgEIAPAAIAGAAIAGgCIAEgFQACgCAAgFQAAgEgCgCQgCgEgCgBIgGgCIgGAAIgPAAg");
	this.shape_3.setTransform(133.675,25.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMApQgIgEgGgGQgGgGgDgIQgDgIAAgJQAAgJAEgHQACgJAHgGQAGgGAHgDQAIgDAJAAQAMAAAHADQAIACAFAGIgIAIQgFgFgHgCQgFgCgHAAQgGAAgGADQgGADgEAEQgEAFgCAGQgCAGAAAGQAAAHACAHQADAFAEAFQAEAFAHACQAFADAGAAIAMgBIAJgDIAAgYIgTAAIAAgKIAfAAIAAApIgHADIgJACIgIACIgJAAQgJAAgJgDg");
	this.shape_4.setTransform(124.65,25.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASAqIgngqIgBAAIAAAqIgLAAIAAhTIALAAIAAAlIABAAIAkglIAQAAIgnAnIArAsg");
	this.shape_5.setTransform(113.6,25.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWAqIguhFIAABFIgMAAIAAhTIAPAAIAuBFIAAhFIAMAAIAABTg");
	this.shape_6.setTransform(104.275,25.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdAqIgJgUIgnAAIgJAUIgNAAIAlhTIAKAAIAkBTgAgPAMIAfAAIgQgnIAAAAg");
	this.shape_7.setTransform(95.275,25.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIAdAAQAGgBAEACQAFABADADQAEADACADQACAEAAAGQAAAHgEAEQgFAGgGABIAHACIAGAFQADACABAEQACADAAAFQAAAGgDAEQgCAFgEADQgFACgFACQgFACgGgBgAgRAgIARAAIAFAAQADAAACgCIAFgFQACgDAAgEQAAgHgEgFQgGgDgHAAIgRAAgAgRgGIAPAAIAGgBIAFgCIADgEQABgDABgDQAAgFgEgEQgDgDgHAAIgRAAg");
	this.shape_8.setTransform(87.55,25.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFAqIAAhTIALAAIAABTg");
	this.shape_9.setTransform(81.825,25.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAqIAAhIIgbAAIAAgLIBBAAIAAALIgcAAIAABIg");
	this.shape_10.setTransform(76.7,25.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYAqIAAhTIALAAIAABIIAmAAIAAALg");
	this.shape_11.setTransform(70.675,25.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMApQgGgCgEgFQgFgEgCgGQgDgGAAgHIAAg1IAMAAIAAAzIABAIQABAEACADQADAFAEABQAEADAFAAQAGAAAEgDQAEgBADgFQACgDABgEIABgIIAAgzIAMAAIAAA1QAAAHgDAGQgCAGgFAEQgEAFgGACQgGACgHAAQgGAAgGgCg");
	this.shape_12.setTransform(62.825,25.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAhAqIAAhFIgdBFIgHAAIgchFIgBAAIAABFIgLAAIAAhTIARAAIAaA/IAAAAIAbg/IARAAIAABTg");
	this.shape_13.setTransform(53.175,25.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFAqIAAhIIgbAAIAAgLIBBAAIAAALIgcAAIAABIg");
	this.shape_14.setTransform(40.95,25.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcAqIAAhTIA2AAIAAALIgqAAIAAAZIAoAAIAAAKIgoAAIAAAaIAtAAIAAALg");
	this.shape_15.setTransform(34.1,25.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAhAqIAAhFIgdBFIgHAAIgchFIgBAAIAABFIgLAAIAAhTIARAAIAaA/IAAAAIAbg/IARAAIAABTg");
	this.shape_16.setTransform(24.725,25.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYArIAAhVIALAAIAABJIAmAAIAAAMg");
	this.shape_17.setTransform(209.075,9.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcArIAAhVIA2AAIAAALIgqAAIAAAZIAnAAIAAAKIgnAAIAAAbIAtAAIAAAMg");
	this.shape_18.setTransform(202.05,9.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkArIAAhVIAdAAQAIAAAHACQAHACAFAEQAFAEADAEQAEAFABAEIADAKIABAHQAAAIgDAIQgDAIgGAFQgGAGgIAEQgJAEgLAAgAgZAfIAPAAQAHAAAGgCQAGgCAFgDQAFgEADgGQADgGAAgIIgCgIQgBgGgDgFQgEgFgHgDQgGgEgJAAIgSAAg");
	this.shape_19.setTransform(193.825,9.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAWArIguhFIAABFIgMAAIAAhVIAPAAIAuBGIAAhGIAMAAIAABVg");
	this.shape_20.setTransform(184.425,9.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAdArIgJgWIgnAAIgJAWIgNAAIAlhVIAKAAIAkBVgAgPALIAfAAIgQglIAAAAg");
	this.shape_21.setTransform(175.425,9.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAWArIAAgoIgrAAIAAAoIgLAAIAAhVIALAAIAAAkIArAAIAAgkIALAAIAABVg");
	this.shape_22.setTransform(166.75,9.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAVArIgVhFIAAAAIgUBFIgMAAIgZhVIAMAAIATBEIAUhEIANAAIAUBEIAThEIAMAAIgZBVg");
	this.shape_23.setTransform(153.175,9.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMAqQgGgDgEgEQgFgFgCgGQgDgGAAgIIAAg1IAMAAIAAA0IABAIQABAEACAEQADADAEACQAEADAFAAQAGAAAEgDQAEgCADgDQACgEABgEIABgIIAAg0IAMAAIAAA1QAAAIgDAGQgCAGgFAFQgEAEgGADQgGACgHAAQgGAAgGgCg");
	this.shape_24.setTransform(143.175,9.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAWArIguhFIAABFIgMAAIAAhVIAPAAIAuBGIAAhGIAMAAIAABVg");
	this.shape_25.setTransform(130.825,9.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAdArIgJgWIgnAAIgJAWIgNAAIAlhVIAKAAIAkBVgAgPALIAfAAIgQglIAAAAg");
	this.shape_26.setTransform(121.825,9.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAdArIgJgWIgnAAIgJAWIgNAAIAlhVIAKAAIAkBVgAgPALIAfAAIgQglIAAAAg");
	this.shape_27.setTransform(113.375,9.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgcArIAAhVIA2AAIAAALIgqAAIAAAZIAoAAIAAAKIgoAAIAAAbIAsAAIAAAMg");
	this.shape_28.setTransform(102.4,9.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRApQgIgDgGgGQgGgGgDgIQgDgJAAgJQAAgJADgHQADgJAGgGQAGgGAIgDQAIgDAJAAQAKAAAIADQAIADAGAGQAGAGADAJQADAHAAAJQAAAJgDAJQgDAIgGAGQgGAGgIADQgIAEgKAAQgJAAgIgEgAgMgeQgGACgEAFQgEAEgDAHQgCAGAAAGQAAAHACAGQADAHAEAEQAEAEAGADQAGADAGAAQAHAAAGgDQAGgDAEgEQAFgEACgHQACgGAAgHQAAgGgCgGQgCgHgFgEQgEgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_29.setTransform(93.425,9.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgFArIAAhKIgbAAIAAgLIBBAAIAAALIgbAAIAABKg");
	this.shape_30.setTransform(85,9.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgQAqQgHgDgEgGIAJgIQADAEAFACQAFADAFAAIAFgBIAGgDIAEgEQABgDAAgEQAAgEgDgDQgDgDgFgBIgJgEQgFgBgFgDQgFgCgDgFQgDgEAAgJIACgHQABgFAEgDQADgEAGgDQAFgBAHAAQAHAAAGABQAHACAFAGIgKAJIgGgGQgEgCgFAAQgEAAgDABQgDABgCADIgDAEIgBAEQAAAFAEADQADAEAEABIAJADIAKAEQAFACADAFQADADAAAJQAAAFgCAFQgCAFgEAEQgEADgGACQgFABgFABQgIgBgIgCg");
	this.shape_31.setTransform(74.775,9.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAWArIguhFIAABFIgMAAIAAhVIAPAAIAuBGIAAhGIAMAAIAABVg");
	this.shape_32.setTransform(66.775,9.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAdArIgJgWIgnAAIgJAWIgNAAIAlhVIAKAAIAkBVgAgPALIAfAAIgQglIAAAAg");
	this.shape_33.setTransform(57.775,9.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYArIAAhVIALAAIAABJIAmAAIAAAMg");
	this.shape_34.setTransform(50.975,9.75);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgLApQgJgDgGgHQgGgGgDgIQgDgIAAgJQAAgJADgHQADgJAGgGQAHgGAIgDQAHgDAKAAQALAAAIACQAHADAFAFIgIAJQgGgFgGgCQgFgCgGAAQgHAAgGADQgGACgEAFQgEAEgDAHQgCAGAAAGQABAHACAGQACAHAFAEQAEAEAGADQAGADAHAAIALgBIAJgEIAAgXIgTAAIAAgKIAfAAIAAApIgHADIgIADIgJABIgIABQgKgBgIgDg");
	this.shape_35.setTransform(42.45,9.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgFArIAAhKIgbAAIAAgLIBBAAIAAALIgbAAIAABKg");
	this.shape_36.setTransform(31.2,9.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAdArIgJgWIgnAAIgJAWIgNAAIAlhVIAKAAIAkBVgAgPALIAfAAIgQglIAAAAg");
	this.shape_37.setTransform(23.525,9.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAVArIgVhFIAAAAIgUBFIgMAAIgZhVIAMAAIATBEIAUhEIANAAIAUBEIAThEIAMAAIgZBVg");
	this.shape_38.setTransform(13.525,9.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLApQgJgDgGgHQgGgGgDgIQgDgIAAgJQAAgJADgHQAEgJAFgGQAGgGAJgDQAHgDAKAAQALAAAIACQAHADAFAFIgIAJQgGgFgFgCQgGgCgGAAQgHAAgGADQgFACgFAFQgEAEgDAHQgCAGAAAGQABAHACAGQACAHAFAEQAFAEAFADQAGADAHAAIALgBIAJgEIAAgXIgSAAIAAgKIAeAAIAAApIgIADIgHADIgJABIgIABQgKgBgIgDg");
	this.shape_39.setTransform(-0.5,9.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgbArIAAhVIA1AAIAAALIgqAAIAAAZIAnAAIAAAKIgnAAIAAAbIAtAAIAAAMg");
	this.shape_40.setTransform(-8.35,9.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgRApQgIgDgGgGQgGgGgDgIQgDgJAAgJQAAgJADgHQADgJAGgGQAGgGAIgDQAIgDAJAAQAKAAAIADQAIADAGAGQAGAGADAJQADAHAAAJQAAAJgDAJQgDAIgGAGQgGAGgIADQgIAEgKAAQgJAAgIgEgAgMgeQgGACgEAFQgEAEgDAHQgCAGAAAGQAAAHACAGQADAHAEAEQAEAEAGADQAGADAGAAQAHAAAGgDQAGgDAEgEQAFgEACgHQACgGAAgHQAAgGgCgGQgCgHgFgEQgEgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_41.setTransform(-17.325,9.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgFArIgghVIAMAAIAZBFIAAAAIAahFIAMAAIghBVg");
	this.shape_42.setTransform(-26.05,9.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-31.9,0,245.70000000000002,51.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgDAEQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape.setTransform(460.875,63.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_1.setTransform(456.875,61);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAUQgHgGAAgMIAAgCQAAgHAEgGQADgHAFgDQAFgEAGABQAKgBAGAIQAFAGAAANIAAACIgjAAQABAIAEAGQAFAEAFAAQAFAAAEgCIAFgFIAFAFQgGAKgNAAQgKAAgHgIgAgHgPQgFAEAAAHIAZAAIAAgBQAAgGgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_2.setTransform(451.55,61.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgGgDgDQgDgCgGAAQgEAAgEADQgDADAAAFIAAAiIgIAAIAAgiQAAgLgMAAQgJAAgDAHIAAAmIgJAAIAAg0IAIAAIAAAGQAHgHAJAAQALAAAEAIQACgDAEgCQAFgDAFAAQARAAABASIAAAjg");
	this.shape_3.setTransform(444.5,61);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgMIAAgCQAAgHADgGQACgHAGgDQAGgEAEABQALgBAFAIQAGAGABANIAAACIgjAAQAAAIAEAGQAEAEAGAAQAFAAADgCIAGgFIAGAFQgHAKgNAAQgKAAgHgIgAgIgPQgEAEAAAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_4.setTransform(437.55,61.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_5.setTransform(432.125,61);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgMIAAgCQABgHADgGQADgHAFgDQAGgEAFABQAKgBAGAIQAFAGAAANIAAACIgjAAQABAIAEAGQAFAEAFAAQAFAAADgCIAGgFIAFAFQgGAKgNAAQgKAAgHgIgAgIgPQgDAEgBAHIAZAAIAAgBQAAgGgEgEQgDgEgFAAQgFAAgEAEg");
	this.shape_6.setTransform(424.3,61.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_7.setTransform(419.825,60.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_8.setTransform(413.125,61);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAUQgIgGAAgMIAAgCQAAgHADgGQADgHAGgDQAFgEAGABQAKgBAFAIQAHAGgBANIAAACIgjAAQABAIAEAGQAEAEAGAAQAFAAAEgCIAFgFIAFAFQgGAKgNAAQgKAAgGgIgAgHgPQgFAEAAAHIAZAAIAAgBQAAgGgDgEQgEgEgFAAQgFAAgDAEg");
	this.shape_9.setTransform(407.8,61.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAbIAAgHIAcgmIgcAAIAAgHIAoAAIAAAGIgdAmIAeAAIAAAIg");
	this.shape_10.setTransform(402.675,61.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAUQgIgGABgMIAAgCQAAgHACgGQADgHAGgDQAGgEAEABQALgBAFAIQAHAGAAANIAAACIgjAAQAAAIAEAGQAFAEAFAAQAFAAADgCIAGgFIAGAFQgHAKgNAAQgKAAgGgIgAgIgPQgEAEAAAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_11.setTransform(397.6,61.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_12.setTransform(393.675,60.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDAmIAAhLIAIAAIAABLg");
	this.shape_13.setTransform(391.2,59.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_14.setTransform(388.575,61);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAUQgHgGAAgMIAAgCQAAgHAEgGQADgHAFgDQAFgEAGABQAKgBAGAIQAFAGAAANIAAACIgjAAQABAIAEAGQAFAEAFAAQAFAAAEgCIAFgFIAFAFQgGAKgNAAQgKAAgHgIgAgHgPQgFAEAAAHIAZAAIAAgBQAAgGgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_15.setTransform(384.05,61.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgCAbIgUg0IAKAAIANAnIANgnIAIAAIgSA0g");
	this.shape_16.setTransform(378.9,61.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAHIAAgcIAJAAIAABKIgIAAIAAgFQgGAGgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAGAGAAQAIgBAEgHIAAgYQgEgHgIAAQgGAAgDAFg");
	this.shape_17.setTransform(371.025,60);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDAmIAAhLIAIAAIAABLg");
	this.shape_18.setTransform(367.1,59.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPAUQgHgGAAgMIAAgCQAAgHAEgGQADgHAFgDQAFgEAGABQAKgBAGAIQAFAGAAANIAAACIgjAAQABAIAEAGQAFAEAFAAQAFAAAEgCIAFgFIAFAFQgGAKgNAAQgKAAgHgIgAgHgPQgFAEAAAHIAZAAIAAgBQAAgGgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_19.setTransform(363.35,61.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLAjQgEgDgEgEIAFgFQAGAHAIAAQAGAAAEgEQADgDAAgHIAAgFQgFAGgJABQgJgBgFgHQgHgHAAgMQAAgMAHgIQAFgHAJAAQAJgBAGAIIAAgGIAJAAIAAAyQAAALgHAFQgGAHgKgBQgFABgGgDgAgJgYQgDAGAAAKQAAAIADAEQAEAGAGAAQAIAAAEgIIAAgXQgEgIgIABQgGAAgEAEg");
	this.shape_20.setTransform(357.75,62.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_21.setTransform(349.825,61);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgQAXQgFgEAAgHQAAgIAGgEQAHgEAKgBIAJAAIAAgDQAAgFgDgDQgDgDgFAAQgEAAgDADQgEACAAAEIgJAAQAAgFADgDQADgEAFgCQAEgDAFABQAJAAAFAEQAGAFAAAIIAAAXQAAAHACAFIAAABIgKAAIgBgGQgGAGgIABQgIgBgFgEgAgMAKQAAAFADACQADACAEABQADgBAEgBQAEgDACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_22.setTransform(344.325,61.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCAbIgUg0IAKAAIANAnIAMgnIAJAAIgTA0g");
	this.shape_23.setTransform(339.15,61.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgHQADgFAFgEQAGgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgKgBgGgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_24.setTransform(331.4,61.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgPAUQgGgHAAgMIAAgBQAAgHADgHQACgFAGgEQAFgEAGABQAJgBAGAGQAGAFAAAJIgIAAQgBgGgDgDQgEgDgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAFgDAEQgDADgFADQgEACgGABQgKAAgGgIg");
	this.shape_25.setTransform(326.025,61.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_26.setTransform(322.125,60.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJAZQgFgCgDgEQgDgEAAgFIAJAAQABAFADADQADACAFAAQAFAAADgCQADgCAAgEQAAgDgDgCQgCgCgHgCIgKgDIgGgEQgCgDAAgEQAAgGAGgFQAFgFAHABQAKAAAFAEQAGAFgBAHIgJAAQAAgDgDgDQgCgDgGAAQgDAAgDADQgDACAAADQAAADACACIAJADIALADQAEACACACQACAEAAAEQAAAHgFAEQgGAEgJABQgGgBgEgCg");
	this.shape_27.setTransform(318.3,61.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_28.setTransform(314.525,60.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_29.setTransform(311.875,61);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgPAUQgHgGAAgMIAAgCQAAgHAEgGQADgHAFgDQAFgEAGABQAKgBAGAIQAFAGAAANIAAACIgjAAQABAIAEAGQAFAEAFAAQAFAAAEgCIAFgFIAFAFQgGAKgNAAQgKAAgHgIgAgHgPQgFAEAAAHIAZAAIAAgBQAAgGgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_30.setTransform(304.85,61.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLAjQgEgDgEgEIAFgFQAGAHAIAAQAGAAAEgEQADgDAAgHIAAgFQgFAGgJABQgJgBgFgHQgHgHAAgMQAAgMAHgIQAFgHAJAAQAJgBAGAIIAAgGIAJAAIAAAyQAAALgHAFQgGAHgKgBQgFABgGgDgAgJgYQgDAGAAAKQAAAIADAEQAEAGAGAAQAIAAAEgIIAAgXQgEgIgIABQgGAAgEAEg");
	this.shape_31.setTransform(299.25,62.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgHQADgFAFgEQAGgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgJgBgHgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_32.setTransform(293.7,61.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAMAmIAAgjQAAgFgDgDQgDgCgFAAQgDAAgEACQgDACgCADIAAAmIgJAAIAAhLIAJAAIAAAdQAGgHAJAAQAQgBABATIAAAjg");
	this.shape_33.setTransform(288.125,59.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_34.setTransform(281.075,60.475);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgMIAAgCQAAgHAEgGQADgHAFgDQAFgEAGABQAKgBAGAIQAFAGAAANIAAACIgjAAQABAIAEAGQAFAEAFAAQAFAAAEgCIAFgFIAFAFQgGAKgNAAQgKAAgHgIgAgHgPQgEAEgBAHIAZAAIAAgBQAAgGgDgEQgEgEgFAAQgFAAgDAEg");
	this.shape_35.setTransform(277.05,61.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAMAmIAAgjQAAgFgDgDQgDgCgFAAQgDAAgEACQgDACgCADIAAAmIgJAAIAAhLIAJAAIAAAdQAGgHAJAAQAQgBABATIAAAjg");
	this.shape_36.setTransform(271.625,59.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgGgDgDQgCgCgHAAQgFAAgDADQgDADgBAFIAAAiIgIAAIAAgiQAAgLgLAAQgJAAgDAHIAAAmIgJAAIAAg0IAIAAIAAAGQAGgHAKAAQAMAAADAIQACgDAEgCQAEgDAGAAQARAAABASIAAAjg");
	this.shape_37.setTransform(262,61);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgHQADgFAGgEQAFgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgJgBgIgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_38.setTransform(254.75,61.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_39.setTransform(246.675,61);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgMIAAgCQAAgHACgGQADgHAGgDQAGgEAEABQALgBAGAIQAFAGABANIAAACIgjAAQAAAIAEAGQAEAEAGAAQAFAAADgCIAGgFIAGAFQgHAKgNAAQgKAAgHgIgAgIgPQgEAEAAAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_40.setTransform(241.35,61.05);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgCAbIgUg0IAKAAIANAnIAMgnIAJAAIgTA0g");
	this.shape_41.setTransform(236.2,61.05);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgHQADgFAFgEQAGgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgKgBgGgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_42.setTransform(230.95,61.05);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgDAmIAAhLIAIAAIAABLg");
	this.shape_43.setTransform(226.85,59.95);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_44.setTransform(224.225,61);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgHQADgFAGgEQAFgEAGABQALAAAGAHQAHAIAAALIAAABQAAAHgDAGQgDAHgFADQgGADgHABQgJgBgIgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_45.setTransform(219.4,61.05);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgHQADgFAGgEQAFgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgJgBgIgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_46.setTransform(213.7,61.05);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_47.setTransform(209.425,61);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgMIAAgCQAAgHACgGQADgHAGgDQAGgEAEABQALgBAGAIQAFAGABANIAAACIgjAAQAAAIAEAGQAEAEAGAAQAFAAADgCIAGgFIAGAFQgHAKgNAAQgKAAgHgIgAgIgPQgEAEAAAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_48.setTransform(204.9,61.05);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgCAbIgUg0IAKAAIANAnIAMgnIAJAAIgTA0g");
	this.shape_49.setTransform(199.75,61.05);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_50.setTransform(637.375,48.475);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_51.setTransform(633.175,49);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgPAWQgFgFAAgJIAAgiIAJAAIAAAiQAAAMAKgBQAKABADgJIAAglIAJAAIAAA0IgJAAIAAgFQgFAGgJAAQgJAAgEgFg");
	this.shape_52.setTransform(627.625,49.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AALAlIgRgYIgGAGIAAASIgJAAIAAhKIAJAAIAAAtIAFgGIAPgQIALAAIgTAUIAWAfg");
	this.shape_53.setTransform(622.725,47.95);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAMAlIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEADQgDACgCADIAAAlIgJAAIAAhKIAJAAIAAAdQAGgIAJAAQAQAAABATIAAAig");
	this.shape_54.setTransform(614.625,47.95);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgPAVQgGgIAAgMIAAgBQAAgIADgFQACgGAGgEQAFgEAGAAQAJAAAGAGQAGAFAAAJIgIAAQgBgFgDgDQgEgEgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAEgDAFQgDAEgFACQgEADgGAAQgKgBgGgGg");
	this.shape_55.setTransform(609.325,49.05);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_56.setTransform(605.425,48.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgUAaIAAgGIAcgmIgcAAIAAgHIAoAAIAAAGIgdAmIAeAAIAAAHg");
	this.shape_57.setTransform(601.775,49.05);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_58.setTransform(594.975,48.475);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgOAVQgIgIAAgLIAAgCQAAgHADgGQADgGAGgEQAFgEAGAAQAKABAFAGQAHAIgBAMIAAADIgjAAQABAHAEAFQAEAFAGAAQAFAAAEgCIAFgFIAFAEQgGALgNAAQgKgBgGgGgAgHgPQgFAEAAAHIAZAAIAAAAQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_59.setTransform(590.95,49.05);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAMAlIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEADQgDACgCADIAAAlIgJAAIAAhKIAJAAIAAAdQAGgIAJAAQAQAAABATIAAAig");
	this.shape_60.setTransform(585.525,47.95);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgPAWQgFgFAAgJIAAgiIAJAAIAAAiQAAAMAKgBQAKABADgJIAAglIAJAAIAAA0IgJAAIAAgFQgFAGgJAAQgJAAgEgFg");
	this.shape_61.setTransform(577.475,49.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgGAmIAAgtIgJAAIAAgHIAJAAIAAgGQgBgIAFgFQADgEAJAAIAGABIgBAHIgEgBQgFAAgDADQgBADAAAEIAAAGIALAAIAAAHIgLAAIAAAtg");
	this.shape_62.setTransform(570.7,47.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgNIAAAAQAAgHADgGQADgGAFgEQAGgEAGAAQAKAAAIAIQAGAHAAAMIAAABQAAAIgDAFQgDAGgGAEQgFAEgHAAQgJAAgHgIgAgKgNQgEAFAAAJQAAAIAEAGQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_63.setTransform(565.95,49.05);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_64.setTransform(557.875,49);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgPAVQgGgIgBgLIAAgCQABgHADgGQADgGAFgEQAGgEAEAAQALABAGAGQAFAIAAAMIAAADIgjAAQABAHAEAFQAFAFAFAAQAFAAADgCIAGgFIAFAEQgGALgNAAQgKgBgHgGgAgHgPQgEAEgBAHIAZAAIAAAAQAAgIgDgDQgEgEgGAAQgEAAgDAEg");
	this.shape_65.setTransform(552.55,49.05);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgLAjQgEgCgDgFIAEgFQAGAHAIAAQAGAAAEgEQADgEAAgGIAAgFQgFAHgIAAQgKAAgFgIQgHgHAAgNQAAgLAHgIQAFgIAKAAQAIABAFAGIABgFIAIAAIAAAyQAAALgFAFQgHAHgKAAQgFgBgGgCgAgIgXQgEAEAAALQAAAIAEAEQADAGAGAAQAIAAAEgIIAAgXQgEgIgIAAQgGABgDAFg");
	this.shape_66.setTransform(546.95,50.05);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgOAVQgIgIABgLIAAgCQAAgHACgGQADgGAGgEQAFgEAFAAQALABAFAGQAHAIAAAMIAAADIgjAAQAAAHAEAFQAFAFAFAAQAFAAAEgCIAFgFIAGAEQgHALgNAAQgKgBgGgGgAgIgPQgEAEAAAHIAaAAIAAAAQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_67.setTransform(541.7,49.05);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAMAaIgMgmIgMAmIgHAAIgPgzIAJAAIAKAmIAMgmIAGAAIANAnIALgnIAJAAIgQAzg");
	this.shape_68.setTransform(535.25,49.05);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAHQADgIAJAAIAEABIAAAIIgFAAQgIAAgDAIIAAAkg");
	this.shape_69.setTransform(530.075,49);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgPAVQgGgIgBgLIAAgCQABgHADgGQADgGAFgEQAGgEAEAAQALABAGAGQAFAIAAAMIAAADIgjAAQABAHAEAFQAFAFAFAAQAFAAADgCIAGgFIAFAEQgGALgNAAQgKgBgHgGgAgHgPQgEAEgBAHIAZAAIAAAAQAAgIgDgDQgEgEgGAAQgEAAgDAEg");
	this.shape_70.setTransform(525.55,49.05);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgCAaIgUgzIAKAAIANAnIAMgnIAJAAIgTAzg");
	this.shape_71.setTransform(520.4,49.05);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgRAUQgGgHAAgNIAAAAQAAgHADgGQADgGAFgEQAGgEAGAAQALAAAGAIQAHAHAAAMIAAABQAAAIgDAFQgDAGgFAEQgGAEgHAAQgJAAgIgIgAgKgNQgEAFAAAJQAAAIAEAGQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_72.setTransform(515.15,49.05);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_73.setTransform(508.025,48.475);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgOAVQgIgIAAgLIAAgCQAAgHADgGQAEgGAFgEQAFgEAGAAQAKABAFAGQAHAIAAAMIAAADIgkAAQABAHAEAFQAEAFAGAAQAFAAAEgCIAFgFIAGAEQgHALgNAAQgKgBgGgGgAgHgPQgFAEAAAHIAaAAIAAAAQgBgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_74.setTransform(504,49.05);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgNIAAAAQAAgHADgGQADgGAFgEQAGgEAGAAQAKAAAIAIQAGAHAAAMIAAABQAAAIgDAFQgDAGgGAEQgFAEgHAAQgJAAgHgIgAgKgNQgEAFAAAJQAAAIAEAGQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_75.setTransform(498.45,49.05);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgGgDgDQgDgCgFAAQgGAAgDADQgDADgBAFIAAAiIgIAAIAAgiQAAgLgLAAQgJAAgDAIIAAAlIgJAAIAAg0IAJAAIAAAGQAGgHAJAAQAMAAACAJQADgEAEgDQAFgCAFAAQASAAAAASIAAAjg");
	this.shape_76.setTransform(491.25,49);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAAAkQgLAAgHgHQgHgFAAgMIAAgvIAJAAIAAAvQAAAIAFAEQAEAFAHgBQAIABAEgFQAEgEAAgIIAAgvIAKAAIAAAvQAAALgHAFQgGAHgLABg");
	this.shape_77.setTransform(481.125,48.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgDAEQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_78.setTransform(474.025,51.225);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAHQADgIAJAAIAEABIAAAIIgFAAQgIAAgDAIIAAAkg");
	this.shape_79.setTransform(471.325,49);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgPAVQgGgIAAgLIAAgCQAAgHADgGQACgGAGgEQAGgEAEAAQALABAFAGQAGAIABAMIAAADIgjAAQAAAHAEAFQAEAFAGAAQAFAAADgCIAGgFIAGAEQgHALgNAAQgKgBgHgGgAgIgPQgEAEAAAHIAaAAIAAAAQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_80.setTransform(466.8,49.05);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgPAeQgGgHAAgMIAAgBQAAgLAGgHQAFgIAKAAQAIAAAFAHIAAgcIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgIgAgIgDQgEAEAAAKQAAAJAEAFQADAGAGgBQAIABAEgJIAAgWQgEgIgIAAQgGAAgDAFg");
	this.shape_81.setTransform(461.125,48);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgPAVQgGgIAAgLIAAgCQAAgHADgGQADgGAFgEQAGgEAEAAQALABAGAGQAFAIABAMIAAADIgjAAQAAAHAEAFQAEAFAGAAQAFAAADgCIAGgFIAFAEQgGALgNAAQgKgBgHgGgAgIgPQgDAEgBAHIAaAAIAAAAQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_82.setTransform(455.9,49.05);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_83.setTransform(451.975,48.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgNAfIAAAGIgIAAIAAhKIAJAAIAAAcQAFgHAJAAQAJAAAGAIQAFAGAAAMIAAABQAAAMgFAHQgGAIgJAAQgJAAgGgHgAgMAAIAAAWQAEAIAIAAQAGAAAEgEQADgGAAgKQAAgJgDgEQgEgFgGAAQgIAAgEAIg");
	this.shape_84.setTransform(448.075,48);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_85.setTransform(442.425,49);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgQAXQgFgFAAgGQAAgIAGgEQAHgEAKAAIAJAAIAAgFQAAgFgDgCQgDgDgFAAQgEAAgDADQgEACAAADIgJAAQAAgDADgFQADgDAFgCQAEgDAFAAQAJABAFAEQAGAFAAAIIAAAXQAAAHACAEIAAABIgKAAIgBgFQgGAHgIAAQgIAAgFgFgAgMALQAAAEADACQADADAEAAQADAAAEgDQAEgCACgDIAAgLIgHAAQgQAAAAAKg");
	this.shape_86.setTransform(436.925,49.05);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgQAXQgFgFAAgGQAAgIAGgEQAHgEAKAAIAJAAIAAgFQAAgFgDgCQgDgDgFAAQgEAAgDADQgEACAAADIgJAAQAAgDADgFQADgDAFgCQAEgDAFAAQAJABAFAEQAGAFAAAIIAAAXQAAAHACAEIAAABIgKAAIgBgFQgGAHgIAAQgIAAgFgFgAgMALQAAAEADACQADADAEAAQADAAAEgDQAEgCACgDIAAgLIgHAAQgQAAAAAKg");
	this.shape_87.setTransform(431.475,49.05);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgOAVQgIgIABgLIAAgCQAAgHACgGQADgGAGgEQAGgEAEAAQALABAFAGQAHAIAAAMIAAADIgjAAQAAAHAEAFQAFAFAFAAQAFAAADgCIAGgFIAGAEQgHALgNAAQgKgBgGgGgAgIgPQgEAEAAAHIAaAAIAAAAQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_88.setTransform(423.7,49.05);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgUAaIAAgGIAcgmIgcAAIAAgHIAoAAIAAAGIgdAmIAeAAIAAAHg");
	this.shape_89.setTransform(418.575,49.05);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgPAVQgGgIgBgLIAAgCQABgHADgGQADgGAFgEQAGgEAEAAQALABAGAGQAFAIAAAMIAAADIgjAAQABAHAEAFQAFAFAFAAQAFAAADgCIAGgFIAFAEQgGALgNAAQgKgBgHgGgAgIgPQgDAEgBAHIAZAAIAAAAQAAgIgEgDQgDgEgGAAQgEAAgEAEg");
	this.shape_90.setTransform(413.5,49.05);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgPAeQgGgHAAgMIAAgBQAAgLAGgHQAFgIAKAAQAIAAAFAHIAAgcIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgIgAgIgDQgEAEAAAKQAAAJAEAFQADAGAGgBQAIABAEgJIAAgWQgEgIgIAAQgGAAgDAFg");
	this.shape_91.setTransform(407.825,48);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_92.setTransform(400.875,48.475);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgPAVQgGgIgBgLIAAgCQABgHADgGQADgGAFgEQAGgEAEAAQALABAGAGQAFAIAAAMIAAADIgjAAQABAHAEAFQAFAFAFAAQAFAAADgCIAGgFIAFAEQgGALgNAAQgKgBgHgGgAgIgPQgDAEgBAHIAZAAIAAAAQAAgIgEgDQgDgEgGAAQgEAAgEAEg");
	this.shape_93.setTransform(396.85,49.05);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgGgDgDQgCgCgHAAQgFAAgDADQgDADgBAFIAAAiIgIAAIAAgiQAAgLgLAAQgJAAgDAIIAAAlIgJAAIAAg0IAIAAIAAAGQAGgHAKAAQAMAAADAJQACgEAEgDQAEgCAGAAQASAAAAASIAAAjg");
	this.shape_94.setTransform(389.8,49);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgJAZQgGgCgCgEQgDgEAAgFIAJAAQAAAFAEACQADADAFAAQAFAAADgCQADgCAAgDQAAgEgDgCQgCgCgHgBIgKgEIgGgEQgCgDAAgEQAAgGAGgFQAFgFAHAAQAKABAFAEQAGAFgBAHIgJAAQAAgDgDgDQgDgDgFAAQgDAAgDADQgDABAAAEQAAADACACIAJADIALADQAEACACADQACACAAAFQAAAHgFAEQgGAFgJAAQgGAAgEgDg");
	this.shape_95.setTransform(380.3,49.05);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgDAMIAAgXIAHAAIAAAGIgBARg");
	this.shape_96.setTransform(376.875,45.375);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgZAjIAAhFIAVAAQAHAAAHADQAIAEAEAIQADAHAAAKIAAAEQAAAKgDAIQgEAHgIAEQgGAEgJAAgAgQAcIALAAQAJAAAGgHQAHgGgBgNIAAgEQABgMgHgGQgFgHgJAAIgMAAg");
	this.shape_97.setTransform(372.85,48.15);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgVAjIAAhFIArAAIAAAHIgiAAIAAAYIAdAAIAAAHIgdAAIAAAfg");
	this.shape_98.setTransform(366.95,48.15);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgTAcQgHgKAAgOIAAgHQAAgKADgHQAEgIAGgDQAHgEAHgBQAMAAAGAHQAHAGABALIgJAAQgBgJgEgDQgFgEgHAAQgIAAgFAGQgFAIAAALIAAAHQAAALAFAHQAFAHAHAAQAIAAAEgEQAFgDABgJIAJAAQgBALgHAHQgHAFgMABQgLgBgIgIg");
	this.shape_99.setTransform(360.725,48.15);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgVAfQgHgFAAgKQAAgFADgEQADgFAIgEIgGgKQgCgDAAgEQAAgHAFgFQAFgFAIAAQAHABAEAEQAFAEAAAGQAAAFgCADQgDAEgFAEIgEAEIAPASQADgHAAgHIAIAAQAAAMgGAIIAKAMIgLAAIgEgFIgIAFIgJACQgLAAgGgGgAgKAEQgJAGABAGQAAAGADADQAEAEAHAAQAGAAAFgGIgQgUgAgKgZQgCADAAADQgBAFAGAHIAGgEIADgEIACgGQAAgDgDgCQgCgCgDAAQgEAAgCADg");
	this.shape_100.setTransform(352.05,48.15);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AASAjIgSgbIgQAbIgLAAIAWgjIgWgiIALAAIAQAbIARgbIALAAIgXAiIAYAjg");
	this.shape_101.setTransform(343.1,48.15);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgVAjIAAhFIArAAIAAAHIgiAAIAAAYIAdAAIAAAHIgdAAIAAAfg");
	this.shape_102.setTransform(337.45,48.15);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_103.setTransform(329.175,49);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_104.setTransform(325.175,48.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_105.setTransform(318.725,49);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgOAVQgIgIAAgLIAAgCQAAgHAEgGQADgGAFgEQAFgEAGAAQAKABAGAGQAFAIAAAMIAAADIgjAAQABAHAEAFQAFAFAFAAQAFAAAEgCIAFgFIAFAEQgGALgNAAQgKgBgGgGgAgHgPQgFAEAAAHIAZAAIAAAAQAAgIgDgDQgDgEgGAAQgFAAgDAEg");
	this.shape_106.setTransform(313.4,49.05);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgEAlIAAhKIAIAAIAABKg");
	this.shape_107.setTransform(309.45,47.95);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgPAVQgGgIAAgLIAAgCQAAgHADgGQACgGAGgEQAGgEAEAAQALABAGAGQAFAIABAMIAAADIgjAAQAAAHAEAFQAEAFAGAAQAFAAADgCIAGgFIAGAEQgHALgNAAQgKgBgHgGgAgIgPQgEAEAAAHIAaAAIAAAAQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_108.setTransform(305.7,49.05);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgPAeQgGgHAAgMIAAgBQAAgLAGgHQAFgIAKAAQAIAAAFAHIAAgcIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgIgAgIgDQgEAEAAAKQAAAJAEAFQADAGAGgBQAIABAEgJIAAgWQgEgIgIAAQgGAAgDAFg");
	this.shape_109.setTransform(300.025,48);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_110.setTransform(294.625,49);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgQAXQgFgFAAgGQAAgIAGgEQAHgEAKAAIAJAAIAAgFQAAgFgDgCQgDgDgFAAQgEAAgDADQgEACAAADIgJAAQAAgDADgFQADgDAFgCQAEgDAFAAQAJABAFAEQAGAFAAAIIAAAXQAAAHACAEIAAABIgKAAIgBgFQgGAHgIAAQgIAAgFgFgAgMALQAAAEADACQADADAEAAQADAAAEgDQAEgCACgDIAAgLIgHAAQgQAAAAAKg");
	this.shape_111.setTransform(289.125,49.05);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAMAlIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEADQgDACgCADIAAAlIgJAAIAAhKIAJAAIAAAdQAGgIAJAAQAQAAABATIAAAig");
	this.shape_112.setTransform(283.675,47.95);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_113.setTransform(276.625,48.475);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgOAVQgIgIABgLIAAgCQAAgHACgGQADgGAGgEQAFgEAFAAQALABAFAGQAHAIAAAMIAAADIgjAAQAAAHAEAFQAFAFAFAAQAFAAAEgCIAFgFIAGAEQgHALgNAAQgKgBgGgGgAgIgPQgEAEAAAHIAaAAIAAAAQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_114.setTransform(272.6,49.05);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAMAlIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEADQgDACgCADIAAAlIgJAAIAAhKIAJAAIAAAdQAGgIAJAAQAQAAABATIAAAig");
	this.shape_115.setTransform(267.175,47.95);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgJAuIAAgHIAEAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAAAgBQABgBAAgEIAAg7IAJAAIAAA6QAAAQgNAAIgFgBgAABglQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_116.setTransform(260.2,49.175);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_117.setTransform(258.275,48.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgNAfIAAAGIgIAAIAAhKIAJAAIAAAcQAFgHAJAAQAJAAAGAIQAFAGAAAMIAAABQAAAMgFAHQgGAIgJAAQgJAAgGgHgAgMAAIAAAWQAEAIAIAAQAGAAAEgEQADgGAAgKQAAgJgDgEQgEgFgGAAQgIAAgEAIg");
	this.shape_118.setTransform(254.375,48);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgPAeQgGgHAAgMIAAgBQAAgLAGgHQAFgIAKAAQAIAAAFAHIAAgcIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgIgAgIgDQgEAEAAAKQAAAJAEAFQADAGAGgBQAIABAEgJIAAgWQgEgIgIAAQgGAAgDAFg");
	this.shape_119.setTransform(245.975,48);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgEAlIAAhKIAIAAIAABKg");
	this.shape_120.setTransform(242.05,47.95);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgOAVQgIgIABgLIAAgCQAAgHACgGQADgGAGgEQAGgEAEAAQALABAFAGQAHAIAAAMIAAADIgjAAQAAAHAEAFQAFAFAFAAQAFAAADgCIAGgFIAGAEQgHALgNAAQgKgBgGgGgAgIgPQgEAEAAAHIAaAAIAAAAQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_121.setTransform(238.3,49.05);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgKAjQgGgCgCgFIAEgFQAGAHAIAAQAGAAADgEQAEgEAAgGIAAgFQgFAHgIAAQgKAAgGgIQgFgHAAgNQAAgLAFgIQAGgIAKAAQAIABAGAGIAAgFIAJAAIAAAyQgBALgFAFQgHAHgKAAQgFgBgFgCgAgIgXQgEAEAAALQAAAIAEAEQADAGAFAAQAJAAAEgIIAAgXQgEgIgIAAQgGABgDAFg");
	this.shape_122.setTransform(232.7,50.05);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_123.setTransform(224.775,49);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgPAVQgGgIgBgLIAAgCQAAgHAEgGQADgGAFgEQAGgEAFAAQAKABAGAGQAFAIAAAMIAAADIgjAAQABAHAEAFQAFAFAFAAQAFAAAEgCIAFgFIAFAEQgGALgNAAQgKgBgHgGgAgHgPQgEAEgBAHIAZAAIAAAAQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_124.setTransform(219.45,49.05);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgUAaIAAgGIAcgmIgcAAIAAgHIAoAAIAAAGIgdAmIAeAAIAAAHg");
	this.shape_125.setTransform(214.325,49.05);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgOAVQgIgIAAgLIAAgCQAAgHADgGQAEgGAFgEQAFgEAGAAQAKABAFAGQAHAIAAAMIAAADIgkAAQABAHAEAFQAEAFAGAAQAFAAAEgCIAFgFIAGAEQgHALgNAAQgKgBgGgGgAgHgPQgFAEAAAHIAZAAIAAAAQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_126.setTransform(209.25,49.05);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_127.setTransform(205.325,48.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgDAlIAAhKIAIAAIAABKg");
	this.shape_128.setTransform(202.85,47.95);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAHQADgIAJAAIAEABIAAAIIgFAAQgIAAgDAIIAAAkg");
	this.shape_129.setTransform(200.225,49);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgPAVQgGgIgBgLIAAgCQABgHADgGQADgGAFgEQAGgEAFAAQAKABAGAGQAFAIAAAMIAAADIgjAAQABAHAEAFQAFAFAFAAQAFAAADgCIAGgFIAFAEQgGALgNAAQgKgBgHgGgAgIgPQgDAEgBAHIAZAAIAAAAQAAgIgEgDQgDgEgFAAQgFAAgEAEg");
	this.shape_130.setTransform(195.7,49.05);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgCAaIgUgzIAKAAIANAnIAMgnIAJAAIgTAzg");
	this.shape_131.setTransform(190.55,49.05);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgKAZQgEgCgDgEQgDgEAAgFIAJAAQABAFADACQADADAFAAQAFAAADgCQADgCAAgDQAAgEgDgCQgCgCgHgBIgKgEIgGgEQgCgDAAgEQAAgGAGgFQAFgFAHAAQAJABAGAEQAGAFAAAHIgJAAQAAgDgEgDQgCgDgGAAQgEAAgCADQgDABAAAEQAAADADACIAIADIALADQAEACACADQACACAAAFQAAAHgGAEQgFAFgJAAQgFAAgGgDg");
	this.shape_132.setTransform(183.05,49.05);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAHQADgIAJAAIAEABIAAAIIgFAAQgIAAgDAIIAAAkg");
	this.shape_133.setTransform(179.075,49);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgPAVQgGgIgBgLIAAgCQABgHADgGQADgGAFgEQAGgEAEAAQALABAGAGQAFAIAAAMIAAADIgjAAQABAHAEAFQAFAFAFAAQAFAAADgCIAGgFIAFAEQgGALgNAAQgKgBgHgGgAgIgPQgDAEgBAHIAZAAIAAAAQAAgIgEgDQgDgEgGAAQgEAAgEAEg");
	this.shape_134.setTransform(174.55,49.05);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgLAjQgEgCgDgFIAEgFQAGAHAIAAQAGAAAEgEQADgEAAgGIAAgFQgFAHgIAAQgKAAgFgIQgHgHAAgNQAAgLAHgIQAFgIAKAAQAIABAFAGIABgFIAIAAIAAAyQAAALgFAFQgHAHgKAAQgFgBgGgCgAgIgXQgEAEAAALQAAAIAEAEQADAGAGAAQAIAAAEgIIAAgXQgEgIgIAAQgGABgDAFg");
	this.shape_135.setTransform(168.95,50.05);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgLAjQgEgCgEgFIAFgFQAGAHAIAAQAGAAAEgEQADgEAAgGIAAgFQgFAHgJAAQgJAAgFgIQgHgHAAgNQAAgLAHgIQAFgIAJAAQAJABAFAGIABgFIAIAAIAAAyQABALgHAFQgGAHgKAAQgFgBgGgCgAgJgXQgDAEAAALQAAAIADAEQAEAGAGAAQAIAAAEgIIAAgXQgEgIgIAAQgGABgEAFg");
	this.shape_136.setTransform(163.35,50.05);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgPAVQgGgIAAgLIAAgCQAAgHACgGQADgGAGgEQAGgEAEAAQALABAGAGQAFAIABAMIAAADIgjAAQAAAHAEAFQAEAFAGAAQAFAAADgCIAGgFIAGAEQgHALgNAAQgKgBgHgGgAgIgPQgEAEAAAHIAaAAIAAAAQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_137.setTransform(158.1,49.05);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgDAlIAAhKIAIAAIAABKg");
	this.shape_138.setTransform(154.15,47.95);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgOAVQgIgIAAgLIAAgCQAAgHADgGQADgGAGgEQAFgEAGAAQAKABAFAGQAHAIgBAMIAAADIgjAAQABAHAEAFQAEAFAGAAQAFAAAEgCIAFgFIAGAEQgHALgNAAQgKgBgGgGgAgHgPQgFAEAAAHIAZAAIAAAAQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_139.setTransform(150.4,49.05);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgNAfIAAAGIgIAAIAAhKIAJAAIAAAcQAFgHAJAAQAJAAAGAIQAFAGAAAMIAAABQAAAMgFAHQgGAIgJAAQgJAAgGgHgAgMAAIAAAWQAEAIAIAAQAGAAAEgEQADgGAAgKQAAgJgDgEQgEgFgGAAQgIAAgEAIg");
	this.shape_140.setTransform(145.025,48);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgOAVQgIgIABgLIAAgCQAAgHACgGQADgGAGgEQAGgEAEAAQALABAFAGQAHAIAAAMIAAADIgjAAQAAAHAEAFQAFAFAFAAQAFAAADgCIAGgFIAGAEQgHALgNAAQgKgBgGgGgAgIgPQgEAEAAAHIAaAAIAAAAQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_141.setTransform(137.05,49.05);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAHQADgIAJAAIAEABIAAAIIgFAAQgIAAgDAIIAAAkg");
	this.shape_142.setTransform(132.925,49);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgPAVQgGgIAAgLIAAgCQAAgHACgGQADgGAGgEQAGgEAEAAQALABAGAGQAFAIABAMIAAADIgjAAQAAAHAEAFQAEAFAGAAQAFAAADgCIAGgFIAGAEQgHALgNAAQgKgBgHgGgAgIgPQgEAEAAAHIAaAAIAAAAQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_143.setTransform(128.4,49.05);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_144.setTransform(124.475,48.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgDAlIAAhKIAIAAIAABKg");
	this.shape_145.setTransform(122,47.95);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgPAWQgFgFAAgJIAAgiIAJAAIAAAiQAAAMAKgBQAKABADgJIAAglIAJAAIAAA0IgJAAIAAgFQgFAGgJAAQgJAAgEgFg");
	this.shape_146.setTransform(118.025,49.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgPAVQgGgIAAgMIAAgBQAAgIADgFQACgGAGgEQAFgEAGAAQAJAAAGAGQAGAFAAAJIgIAAQgBgFgDgDQgEgEgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAEgDAFQgDAEgFACQgEADgGAAQgKgBgGgGg");
	this.shape_147.setTransform(112.775,49.05);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_148.setTransform(108.875,48.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_149.setTransform(105.875,48.475);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAHQADgIAJAAIAEABIAAAIIgFAAQgIAAgDAIIAAAkg");
	this.shape_150.setTransform(102.975,49);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgQAXQgFgFAAgGQAAgIAGgEQAHgEAKAAIAJAAIAAgFQAAgFgDgCQgDgDgFAAQgEAAgDADQgEACAAADIgJAAQAAgDADgFQADgDAFgCQAEgDAFAAQAJABAFAEQAGAFAAAIIAAAXQAAAHACAEIAAABIgKAAIgBgFQgGAHgIAAQgIAAgFgFgAgMALQAAAEADACQADADAEAAQADAAAEgDQAEgCACgDIAAgLIgHAAQgQAAAAAKg");
	this.shape_151.setTransform(98.275,49.05);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAIAAIAAAGQAGgHAJAAQAJAAAGAHQAFAHAAANIAAABQAAALgFAHQgGAIgJAAQgJAAgFgGIAAAZgAgMgVIAAAYQAEAHAIAAQAGAAADgFQAEgFAAgJQAAgJgEgFQgDgFgGAAQgIAAgEAHg");
	this.shape_152.setTransform(92.875,50.025);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_153.setTransform(84.725,49);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgQAXQgFgFAAgGQAAgIAGgEQAHgEAKAAIAJAAIAAgFQAAgFgDgCQgDgDgFAAQgEAAgDADQgEACAAADIgJAAQAAgDADgFQADgDAFgCQAEgDAFAAQAJABAFAEQAGAFAAAIIAAAXQAAAHACAEIAAABIgKAAIgBgFQgGAHgIAAQgIAAgFgFgAgMALQAAAEADACQADADAEAAQADAAAEgDQAEgCACgDIAAgLIgHAAQgQAAAAAKg");
	this.shape_154.setTransform(79.225,49.05);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgCAaIgTgzIAJAAIAMAnIAOgnIAJAAIgTAzg");
	this.shape_155.setTransform(74.05,49.05);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_156.setTransform(66.425,49);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgOAVQgIgIABgLIAAgCQAAgHACgGQADgGAGgEQAFgEAFAAQALABAFAGQAHAIAAAMIAAADIgjAAQAAAHAEAFQAFAFAFAAQAFAAAEgCIAFgFIAGAEQgHALgNAAQgKgBgGgGgAgIgPQgEAEAAAHIAaAAIAAAAQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_157.setTransform(61.1,49.05);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgKAjQgFgCgEgFIAFgFQAGAHAIAAQAGAAADgEQAEgEAAgGIAAgFQgFAHgJAAQgJAAgGgIQgFgHAAgNQAAgLAFgIQAGgIAJAAQAJABAGAGIAAgFIAJAAIAAAyQgBALgGAFQgGAHgKAAQgFgBgFgCgAgJgXQgDAEAAALQAAAIADAEQAEAGAFAAQAJAAAEgIIAAgXQgEgIgIAAQgGABgEAFg");
	this.shape_158.setTransform(55.5,50.05);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_159.setTransform(50.075,49);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_160.setTransform(46.075,48.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_161.setTransform(42.125,49);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgOAVQgIgIABgLIAAgCQAAgHACgGQADgGAGgEQAFgEAFAAQALABAFAGQAHAIAAAMIAAADIgjAAQAAAHAEAFQAFAFAFAAQAFAAAEgCIAFgFIAGAEQgHALgNAAQgKgBgGgGgAgIgPQgEAEAAAHIAaAAIAAAAQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_162.setTransform(36.8,49.05);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AALAlIgRgYIgGAGIAAASIgJAAIAAhKIAJAAIAAAtIAFgGIAPgQIALAAIgTAUIAWAfg");
	this.shape_163.setTransform(31.925,47.95);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgPAVQgGgIgBgLIAAgCQABgHADgGQADgGAFgEQAGgEAEAAQALABAGAGQAFAIAAAMIAAADIgjAAQABAHAEAFQAFAFAFAAQAFAAADgCIAGgFIAFAEQgGALgNAAQgKgBgHgGgAgIgPQgDAEgBAHIAZAAIAAAAQAAgIgEgDQgDgEgGAAQgEAAgEAEg");
	this.shape_164.setTransform(26.5,49.05);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAHQADgIAJAAIAEABIAAAIIgFAAQgIAAgDAIIAAAkg");
	this.shape_165.setTransform(22.375,49);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgNIAAgBQAAgHAEgGQADgGAFgEQAGgDAFgBQAKAAAGAIQAFAGAAANIAAACIgjAAQABAJAEAFQAFAEAFAAQAFAAADgCIAGgFIAFAEQgGALgNgBQgKABgHgIgAgHgPQgEAEgBAIIAZAAIAAgBQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_166.setTransform(649.2,37.05);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAGIAAgbIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAFAGABQAIAAAEgIIAAgYQgEgHgIAAQgGAAgDAFg");
	this.shape_167.setTransform(643.525,36);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_168.setTransform(635.625,37);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgQAXQgFgFAAgGQAAgJAGgDQAHgFAKABIAJAAIAAgFQAAgEgDgDQgDgDgFAAQgEAAgDACQgEADAAAEIgJAAQAAgEADgFQADgDAFgCQAEgCAFgBQAJAAAFAGQAGAEAAAIIAAAXQAAAIACADIAAABIgKAAIgBgFQgGAGgIAAQgIABgFgFgAgMAKQAAAFADACQADACAEAAQADAAAEgCQAEgCACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_169.setTransform(630.125,37.05);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgCAaIgTg0IAJAAIAMAoIAOgoIAJAAIgTA0g");
	this.shape_170.setTransform(624.95,37.05);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAHAhQgEgFgBgGIAAgEQABgHAEgEQAEgDAHAAQAFAAAFADQAEAFAAAGIAAAEQAAAGgEAFQgFADgFAAQgHAAgEgDgAALALQgCADAAAEIAAAEQAAADACADQADADAEAAQADAAACgDQACgCAAgEIAAgEQAAgEgCgDQgCgCgDAAQgEAAgDACgAgTAbIAig3IAEADIghA3gAgagHQgFgDAAgIIAAgDQAAgGAEgEQAFgFAGAAQAGAAAEAFQAEADAAAIIAAADQAAAGgEAEQgEAFgGAAQgHAAgDgFgAgWgcQgCADAAAEIAAAEQAAADACADQACADAEgBQADABADgDQACgCAAgFIAAgDQAAgEgCgDQgCgCgEAAQgEAAgCACg");
	this.shape_171.setTransform(616.45,36.15);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgOAjIAcg+IglAAIAAgIIAvAAIAAAGIgdBAg");
	this.shape_172.setTransform(609.95,36.15);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgPAfQgHgFAAgKQAAgFADgFQAEgEAFgCQgFgDgCgEQgDgEAAgFQAAgJAGgFQAGgGAIAAQAKAAAFAGQAGAFAAAJQAAAFgDAEQgDAEgEADQAFACAEAEQACAFAAAFQABAKgHAFQgGAGgKgBQgJABgGgGgAgJAHQgDADgBAGQABAGADAEQAEADAFAAQAGAAAEgDQADgEABgGQgBgGgDgDQgEgEgGgBQgFABgEAEgAgHgZQgEADAAAGQAAAGAEADQADADAEAAQAFAAAEgDQADgDAAgGQAAgFgEgEQgDgDgFAAQgEAAgDADg");
	this.shape_173.setTransform(604.35,36.15);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgDAEQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_174.setTransform(597.725,39.225);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgLAjQgEgDgEgEIAFgFQAGAHAIAAQAGAAAEgEQADgEAAgGIAAgFQgFAGgJAAQgJAAgFgHQgHgIAAgMQAAgMAHgHQAFgHAJgBQAJAAAFAIIABgHIAIAAIAAAzQABAKgHAHQgGAFgKAAQgFAAgGgCgAgJgXQgDAEAAAKQAAAJADAFQAEAFAGAAQAIAAAEgIIAAgXQgEgHgIgBQgGAAgEAGg");
	this.shape_175.setTransform(593.55,38.05);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_176.setTransform(588.125,37);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgBABAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_177.setTransform(584.125,36.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AALAlIgRgYIgGAGIAAASIgJAAIAAhJIAJAAIAAAsIAFgGIAPgRIALAAIgTAWIAWAeg");
	this.shape_178.setTransform(580.725,35.95);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAJIgFgBQgIAAgDAHIAAAlg");
	this.shape_179.setTransform(576.425,37);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgNIAAgBQABgHADgGQADgGAFgEQAGgDAFgBQAKAAAGAIQAFAGAAANIAAACIgjAAQABAJAEAFQAFAEAFAAQAFAAADgCIAGgFIAFAEQgGALgNgBQgKABgHgIgAgIgPQgDAEgBAIIAZAAIAAgBQAAgIgEgDQgDgEgFAAQgFAAgEAEg");
	this.shape_180.setTransform(571.9,37.05);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AANAaIgNgmIgLAmIgIAAIgQg0IAJAAIALAnIANgnIAGAAIAMAoIAKgoIAJAAIgPA0g");
	this.shape_181.setTransform(565.45,37.05);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgFgDgDQgDgDgGAAQgEAAgEADQgDADAAAFIAAAiIgIAAIAAghQAAgMgMAAQgJAAgDAHIAAAmIgJAAIAAg0IAIAAIAAAGQAHgHAKAAQAKAAAEAJQACgEAEgCQAEgDAGAAQARAAABATIAAAig");
	this.shape_182.setTransform(557.35,37);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgGQADgHAFgDQAGgDAGgBQAKABAIAHQAGAIAAALIAAAAQAAAIgDAHQgDAFgGAEQgFAEgHgBQgKAAgGgHgAgKgNQgEAFAAAIQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_183.setTransform(550.1,37.05);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgGQADgHAFgDQAGgDAGgBQALABAGAHQAHAIAAALIAAAAQAAAIgDAHQgDAFgFAEQgGAEgHgBQgJAAgIgHgAgKgNQgEAFAAAIQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_184.setTransform(544.4,37.05);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgNAfIAAAGIgIAAIAAhKIAJAAIAAAcQAFgHAJAAQAJAAAGAHQAFAIAAAMIAAAAQAAAMgFAIQgGAHgJAAQgJAAgGgHgAgMAAIAAAWQAEAJAIAAQAGAAAEgGQADgEAAgLQAAgJgDgEQgEgFgGAAQgIAAgEAIg");
	this.shape_185.setTransform(538.875,36);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgHAmIAAgtIgIAAIAAgHIAIAAIAAgGQAAgHAFgFQAEgFAHAAIAHABIAAAHIgGgBQgEABgCACQgDADAAAEIAAAGIAMAAIAAAHIgMAAIAAAtg");
	this.shape_186.setTransform(534.4,35.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgNIAAgBQAAgHAEgGQADgGAFgEQAGgDAFgBQAKAAAGAIQAFAGAAANIAAACIgjAAQABAJAEAFQAFAEAFAAQAFAAADgCIAGgFIAFAEQgGALgNgBQgKABgHgIgAgHgPQgEAEgBAIIAZAAIAAgBQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_187.setTransform(529.95,37.05);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AAMAlIAAgjQAAgEgDgDQgDgCgFgBQgDAAgEACQgDADgCADIAAAlIgJAAIAAhJIAJAAIAAAcQAGgHAJgBQAQABABARIAAAjg");
	this.shape_188.setTransform(524.525,35.95);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgOAUQgIgGAAgNIAAgBQAAgHADgGQADgGAGgEQAFgDAGgBQAKAAAFAIQAHAGgBANIAAACIgjAAQABAJAEAFQAEAEAGAAQAFAAAEgCIAFgFIAFAEQgGALgNgBQgKABgGgIgAgHgPQgFAEAAAIIAZAAIAAgBQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_189.setTransform(516.7,37.05);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAGIAAgbIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAFAGABQAIAAAEgIIAAgYQgEgHgIAAQgGAAgDAFg");
	this.shape_190.setTransform(511.025,36);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_191.setTransform(503.125,37);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgQAXQgFgFAAgGQAAgJAGgDQAHgFAKABIAJAAIAAgFQAAgEgDgDQgDgDgFAAQgEAAgDACQgEADAAAEIgJAAQAAgEADgFQADgDAFgCQAEgCAFgBQAJAAAFAGQAGAEAAAIIAAAXQAAAIACADIAAABIgKAAIgBgFQgGAGgIAAQgIABgFgFgAgMAKQAAAFADACQADACAEAAQADAAAEgCQAEgCACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_192.setTransform(497.625,37.05);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgCAaIgTg0IAJAAIAMAoIAOgoIAJAAIgTA0g");
	this.shape_193.setTransform(492.45,37.05);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgLAjQgEgDgEgEIAFgFQAGAHAIAAQAGAAAEgEQADgEAAgGIAAgFQgFAGgJAAQgJAAgFgHQgHgIAAgMQAAgMAHgHQAFgHAJgBQAJAAAGAIIAAgHIAIAAIAAAzQABAKgHAHQgGAFgKAAQgFAAgGgCgAgJgXQgDAEAAAKQAAAJADAFQAEAFAGAAQAIAAAEgIIAAgXQgEgHgIgBQgGAAgEAGg");
	this.shape_194.setTransform(484.65,38.05);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgEAlIAAhJIAIAAIAABJg");
	this.shape_195.setTransform(480.7,35.95);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgGQADgHAFgDQAGgDAGgBQAKABAIAHQAGAIAAALIAAAAQAAAIgDAHQgDAFgGAEQgFAEgHgBQgKAAgGgHgAgKgNQgEAFAAAIQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_196.setTransform(476.65,37.05);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgCAaIgUg0IAKAAIANAoIAMgoIAJAAIgTA0g");
	this.shape_197.setTransform(471.35,37.05);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgOAUQgIgGAAgNIAAgBQAAgHAEgGQADgGAFgEQAFgDAGgBQAKAAAGAIQAFAGAAANIAAACIgjAAQABAJAEAFQAFAEAFAAQAFAAAEgCIAFgFIAFAEQgGALgNgBQgKABgGgIgAgHgPQgFAEAAAIIAZAAIAAgBQAAgIgDgDQgDgEgGAAQgFAAgDAEg");
	this.shape_198.setTransform(466.4,37.05);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgLAjQgEgDgEgEIAFgFQAGAHAIAAQAGAAAEgEQADgEAAgGIAAgFQgFAGgJAAQgJAAgFgHQgHgIAAgMQAAgMAHgHQAFgHAJgBQAJAAAFAIIABgHIAIAAIAAAzQABAKgHAHQgGAFgKAAQgFAAgGgCgAgJgXQgDAEAAAKQAAAJADAFQAEAFAGAAQAIAAAEgIIAAgXQgEgHgIgBQgGAAgEAGg");
	this.shape_199.setTransform(460.8,38.05);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgJAZQgFgCgDgEQgDgEAAgFIAJAAQAAAFAEACQADADAFAAQAFAAADgCQADgCAAgDQAAgEgCgCQgEgCgGgBIgKgEIgGgEQgCgDAAgEQAAgHAFgEQAGgEAIgBQAJAAAFAGQAFAEAAAHIgJAAQAAgEgCgCQgDgDgFAAQgEAAgDACQgDACAAAEQAAADACACIAJADIALADQAEABACAEQACADAAAEQAAAHgFAEQgGAFgJgBQgFABgFgDg");
	this.shape_200.setTransform(453,37.05);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgEAlIAAhJIAIAAIAABJg");
	this.shape_201.setTransform(449.2,35.95);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgQAXQgFgFAAgGQAAgJAGgDQAHgFAKABIAJAAIAAgFQAAgEgDgDQgDgDgFAAQgEAAgDACQgEADAAAEIgJAAQAAgEADgFQADgDAFgCQAEgCAFgBQAJAAAFAGQAGAEAAAIIAAAXQAAAIACADIAAABIgKAAIgBgFQgGAGgIAAQgIABgFgFgAgMAKQAAAFADACQADACAEAAQADAAAEgCQAEgCACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_202.setTransform(445.275,37.05);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_203.setTransform(437.325,37);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgOAUQgIgGAAgNIAAgBQAAgHADgGQAEgGAFgEQAFgDAGgBQAKAAAFAIQAHAGAAANIAAACIgkAAQABAJAEAFQAEAEAGAAQAFAAAEgCIAFgFIAGAEQgHALgNgBQgKABgGgIgAgHgPQgFAEAAAIIAaAAIAAgBQgBgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_204.setTransform(432,37.05);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgUAaIAAgGIAcgmIgcAAIAAgIIAoAAIAAAHIgdAmIAeAAIAAAHg");
	this.shape_205.setTransform(426.875,37.05);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgNIAAgBQAAgHADgGQACgGAGgEQAGgDAEgBQALAAAFAIQAGAGABANIAAACIgjAAQAAAJAEAFQAEAEAGAAQAFAAADgCIAGgFIAGAEQgHALgNgBQgKABgHgIgAgIgPQgEAEAAAIIAaAAIAAgBQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_206.setTransform(421.8,37.05);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_207.setTransform(417.875,36.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgDAlIAAhJIAIAAIAABJg");
	this.shape_208.setTransform(415.4,35.95);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAJIgFgBQgIAAgDAHIAAAlg");
	this.shape_209.setTransform(412.775,37);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgOAUQgIgGAAgNIAAgBQAAgHADgGQADgGAGgEQAFgDAGgBQAKAAAFAIQAHAGgBANIAAACIgjAAQABAJAEAFQAEAEAGAAQAFAAAEgCIAFgFIAFAEQgGALgNgBQgKABgGgIgAgHgPQgFAEAAAIIAZAAIAAgBQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_210.setTransform(408.25,37.05);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgCAaIgTg0IAJAAIAMAoIAOgoIAJAAIgTA0g");
	this.shape_211.setTransform(403.1,37.05);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgOAUQgIgGAAgNIAAgBQAAgHADgGQADgGAGgEQAFgDAGgBQAKAAAFAIQAHAGgBANIAAACIgjAAQABAJAEAFQAEAEAGAAQAFAAAEgCIAFgFIAFAEQgGALgNgBQgKABgGgIgAgHgPQgFAEAAAIIAZAAIAAgBQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_212.setTransform(395.65,37.05);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_213.setTransform(391.175,36.475);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAGIAAgbIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAFAGABQAIAAAEgIIAAgYQgEgHgIAAQgGAAgDAFg");
	this.shape_214.setTransform(384.225,36);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgDAlIAAhJIAIAAIAABJg");
	this.shape_215.setTransform(380.3,35.95);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgOAUQgIgGABgNIAAgBQAAgHACgGQADgGAGgEQAFgDAFgBQALAAAFAIQAHAGAAANIAAACIgjAAQAAAJAEAFQAFAEAFAAQAFAAAEgCIAFgFIAGAEQgHALgNgBQgKABgGgIgAgIgPQgEAEAAAIIAaAAIAAgBQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_216.setTransform(376.55,37.05);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgKAjQgFgDgDgEIAEgFQAGAHAIAAQAGAAADgEQAEgEAAgGIAAgFQgFAGgJAAQgJAAgGgHQgFgIAAgMQAAgMAFgHQAGgHAJgBQAJAAAGAIIAAgHIAJAAIAAAzQgBAKgFAHQgHAFgKAAQgFAAgFgCgAgJgXQgDAEAAAKQAAAJADAFQAEAFAFAAQAJAAAEgIIAAgXQgEgHgIgBQgGAAgEAGg");
	this.shape_217.setTransform(370.95,38.05);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgEAlIAAhJIAIAAIAABJg");
	this.shape_218.setTransform(364.5,35.95);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgNIAAgBQAAgHAEgGQADgGAFgEQAGgDAFgBQAKAAAGAIQAFAGAAANIAAACIgjAAQABAJAEAFQAFAEAFAAQAFAAADgCIAGgFIAFAEQgGALgNgBQgKABgHgIgAgHgPQgEAEgBAIIAZAAIAAgBQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_219.setTransform(360.75,37.05);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_220.setTransform(355.325,37);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgJAZQgFgCgDgEQgDgEAAgFIAJAAQAAAFAEACQADADAFAAQAFAAADgCQADgCAAgDQAAgEgCgCQgEgCgGgBIgKgEIgGgEQgCgDAAgEQAAgHAFgEQAGgEAIgBQAJAAAFAGQAFAEAAAHIgJAAQAAgEgCgCQgDgDgFAAQgFAAgCACQgDACAAAEQAAADACACIAJADIALADQAEABACAEQACADAAAEQAAAHgFAEQgGAFgJgBQgFABgFgDg");
	this.shape_221.setTransform(349.95,37.05);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgFgDgDQgDgDgGAAQgEAAgEADQgDADAAAFIAAAiIgIAAIAAghQAAgMgMAAQgJAAgDAHIAAAmIgJAAIAAg0IAIAAIAAAGQAHgHAJAAQALAAAEAJQACgEAEgCQAFgDAFAAQARAAABATIAAAig");
	this.shape_222.setTransform(340.55,37);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgGQADgHAFgDQAGgDAGgBQAKABAIAHQAGAIAAALIAAAAQAAAIgDAHQgDAFgGAEQgFAEgHgBQgJAAgHgHgAgKgNQgEAFAAAIQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_223.setTransform(333.3,37.05);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgGQADgHAFgDQAGgDAGgBQAKABAIAHQAGAIAAALIAAAAQAAAIgDAHQgDAFgGAEQgFAEgHgBQgKAAgGgHgAgKgNQgEAFAAAIQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_224.setTransform(325.1,37.05);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgPAUQgGgHAAgNIAAAAQAAgIADgFQACgHAGgDQAFgDAGgBQAJABAGAFQAGAGAAAIIgIAAQgBgFgDgEQgEgDgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAEgDAEQgDAFgFACQgEADgGgBQgKABgGgIg");
	this.shape_225.setTransform(319.725,37.05);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_226.setTransform(315.825,36.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgKAZQgEgCgDgEQgDgEAAgFIAJAAQABAFADACQADADAFAAQAFAAADgCQADgCAAgDQAAgEgDgCQgCgCgHgBIgKgEIgGgEQgCgDAAgEQAAgHAGgEQAFgEAHgBQAKAAAFAGQAGAEgBAHIgJAAQAAgEgDgCQgCgDgGAAQgDAAgDACQgDACAAAEQAAADACACIAJADIALADQAEABACAEQACADAAAEQAAAHgFAEQgGAFgJgBQgGABgFgDg");
	this.shape_227.setTransform(312,37.05);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_228.setTransform(308.225,36.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAJIgFgBQgIAAgDAHIAAAlg");
	this.shape_229.setTransform(305.575,37);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgKAjQgGgDgCgEIAEgFQAGAHAIAAQAGAAAEgEQADgEAAgGIAAgFQgFAGgIAAQgKAAgGgHQgFgIgBgMQABgMAFgHQAGgHAKgBQAIAAAFAIIABgHIAIAAIAAAzQAAAKgFAHQgHAFgKAAQgFAAgFgCgAgIgXQgEAEAAAKQAAAJAEAFQADAFAGAAQAIAAAEgIIAAgXQgEgHgIgBQgGAAgDAGg");
	this.shape_230.setTransform(298.2,38.05);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgGQADgHAGgDQAFgDAGgBQAKABAHAHQAHAIAAALIAAAAQAAAIgDAHQgDAFgFAEQgGAEgHgBQgJAAgIgHgAgKgNQgEAFAAAIQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_231.setTransform(292.65,37.05);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgGQADgHAFgDQAGgDAGgBQAKABAIAHQAGAIAAALIAAAAQAAAIgDAHQgDAFgGAEQgFAEgHgBQgJAAgHgHgAgKgNQgEAFAAAIQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_232.setTransform(286.95,37.05);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AAMAlIAAgjQAAgEgDgDQgDgCgFgBQgDAAgEACQgDADgCADIAAAlIgJAAIAAhJIAJAAIAAAcQAGgHAJgBQAQABABARIAAAjg");
	this.shape_233.setTransform(281.375,35.95);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_234.setTransform(273.375,37);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgNIAAgBQAAgHAEgGQADgGAFgEQAFgDAGgBQAKAAAGAIQAFAGAAANIAAACIgjAAQABAJAEAFQAFAEAFAAQAFAAAEgCIAFgFIAFAEQgGALgNgBQgKABgHgIgAgHgPQgEAEgBAIIAZAAIAAgBQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_235.setTransform(268.05,37.05);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgOAUQgIgGAAgNIAAgBQAAgHADgGQAEgGAFgEQAFgDAGgBQAKAAAFAIQAHAGgBANIAAACIgjAAQABAJAEAFQAEAEAGAAQAFAAAEgCIAFgFIAGAEQgHALgNgBQgKABgGgIgAgHgPQgFAEAAAIIAZAAIAAgBQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_236.setTransform(262.8,37.05);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_237.setTransform(255.825,36.475);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgOAUQgIgGABgNIAAgBQAAgHACgGQADgGAGgEQAGgDAEgBQALAAAFAIQAHAGAAANIAAACIgjAAQAAAJAEAFQAFAEAFAAQAFAAADgCIAGgFIAGAEQgHALgNgBQgKABgGgIgAgIgPQgEAEAAAIIAaAAIAAgBQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_238.setTransform(251.8,37.05);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgFgDgDQgDgDgFAAQgFAAgEADQgDADgBAFIAAAiIgIAAIAAghQABgMgMAAQgJAAgDAHIAAAmIgJAAIAAg0IAJAAIAAAGQAFgHALAAQAKAAADAJQADgEAEgCQAFgDAFAAQASAAAAATIAAAig");
	this.shape_239.setTransform(244.75,37);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_240.setTransform(236.075,36.475);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgFgDgDQgDgDgFAAQgGAAgDADQgDADgBAFIAAAiIgIAAIAAghQAAgMgLAAQgJAAgDAHIAAAmIgJAAIAAg0IAJAAIAAAGQAGgHAJAAQAMAAACAJQADgEAEgCQAFgDAFAAQASAAAAATIAAAig");
	this.shape_241.setTransform(230.25,37);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgGQADgHAGgDQAFgDAGgBQALABAGAHQAHAIAAALIAAAAQAAAIgDAHQgDAFgFAEQgGAEgHgBQgJAAgIgHgAgKgNQgEAFAAAIQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_242.setTransform(223,37.05);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AALAlIgRgYIgGAGIAAASIgJAAIAAhJIAJAAIAAAsIAFgGIAPgRIALAAIgTAWIAWAeg");
	this.shape_243.setTransform(217.975,35.95);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AARAjIgRgbIgRAbIgLAAIAYgjIgXgjIALAAIAQAbIARgbIALAAIgWAjIAWAjg");
	this.shape_244.setTransform(209.5,36.15);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgVAjIAAhGIArAAIAAAIIgiAAIAAAZIAdAAIAAAGIgdAAIAAAfg");
	this.shape_245.setTransform(203.85,36.15);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_246.setTransform(195.575,37);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgOAUQgIgGABgNIAAgBQAAgHACgGQADgGAGgEQAFgDAFgBQALAAAFAIQAHAGAAANIAAACIgjAAQAAAJAEAFQAFAEAFAAQAFAAAEgCIAFgFIAGAEQgHALgNgBQgKABgGgIgAgIgPQgEAEAAAIIAaAAIAAgBQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_247.setTransform(190.25,37.05);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgJAZQgGgCgCgEQgDgEAAgFIAJAAQABAFADACQADADAFAAQAFAAADgCQADgCAAgDQAAgEgCgCQgDgCgHgBIgKgEIgGgEQgCgDAAgEQAAgHAFgEQAGgEAIgBQAIAAAGAGQAFAEABAHIgKAAQAAgEgCgCQgEgDgEAAQgEAAgDACQgDACAAAEQAAADADACIAIADIALADQAEABACAEQACADAAAEQAAAHgGAEQgFAFgJgBQgFABgFgDg");
	this.shape_248.setTransform(182.45,37.05);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgDAMIAAgXIAHAAIAAAGIgBARg");
	this.shape_249.setTransform(179.025,33.375);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgZAjIAAhGIAUAAQAJAAAGAFQAIAEAEAHQADAHABALIAAADQgBAKgDAHQgEAIgIAFQgHADgIAAgAgQAcIAKAAQALAAAFgHQAHgGAAgNIAAgDQAAgMgHgHQgFgHgKAAIgLAAg");
	this.shape_250.setTransform(175,36.15);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgVAjIAAhGIArAAIAAAIIgiAAIAAAZIAdAAIAAAGIgdAAIAAAfg");
	this.shape_251.setTransform(169.1,36.15);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgTAbQgHgIAAgPIAAgGQAAgKADgIQAEgHAGgEQAHgFAHAAQAMABAGAGQAHAGABAMIgJAAQgBgKgEgDQgFgEgHAAQgIAAgFAHQgFAGAAANIAAAGQAAALAFAHQAFAHAHAAQAIAAAEgDQAFgEABgJIAJAAQgBALgHAHQgHAFgMAAQgLABgIgKg");
	this.shape_252.setTransform(162.875,36.15);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_253.setTransform(154.325,37);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgBABAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_254.setTransform(150.325,36.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgEAlIAAhJIAJAAIAABJg");
	this.shape_255.setTransform(145.35,35.95);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgNIAAgBQAAgHAEgGQADgGAFgEQAGgDAFgBQAKAAAGAIQAFAGAAANIAAACIgjAAQABAJAEAFQAFAEAFAAQAFAAADgCIAGgFIAFAEQgGALgNgBQgKABgHgIgAgHgPQgEAEgBAIIAZAAIAAgBQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_256.setTransform(141.6,37.05);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAGIAAgbIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAFAGABQAIAAAEgIIAAgYQgEgHgIAAQgGAAgDAFg");
	this.shape_257.setTransform(135.925,36);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_258.setTransform(130.525,37);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgQAXQgFgFAAgGQAAgJAGgDQAHgFAKABIAJAAIAAgFQAAgEgDgDQgDgDgFAAQgEAAgDACQgEADAAAEIgJAAQAAgEADgFQADgDAFgCQAEgCAFgBQAJAAAFAGQAGAEAAAIIAAAXQAAAIACADIAAABIgKAAIgBgFQgGAGgIAAQgIABgFgFgAgMAKQAAAFADACQADACAEAAQADAAAEgCQAEgCACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_259.setTransform(125.025,37.05);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AAMAlIAAgjQAAgEgDgDQgDgCgFgBQgDAAgEACQgDADgCADIAAAlIgJAAIAAhJIAJAAIAAAcQAGgHAJgBQAQABABARIAAAjg");
	this.shape_260.setTransform(119.575,35.95);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgNIAAgBQAAgHACgGQADgGAGgEQAGgDAEgBQALAAAGAIQAFAGABANIAAACIgjAAQAAAJAEAFQAEAEAGAAQAFAAADgCIAGgFIAGAEQgHALgNgBQgKABgHgIgAgIgPQgEAEAAAIIAaAAIAAgBQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_261.setTransform(111.75,37.05);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgZAjIAAhGIAVAAQAHAAAHAFQAIAEAEAHQADAHAAALIAAADQAAAKgDAHQgEAIgIAFQgGADgJAAgAgQAcIAKAAQALAAAFgHQAHgGgBgNIAAgDQABgMgHgHQgFgHgJAAIgMAAg");
	this.shape_262.setTransform(105.9,36.15);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgDAEQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_263.setTransform(98.675,39.225);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAGIAAgbIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAFAGABQAIAAAEgIIAAgYQgEgHgIAAQgGAAgDAFg");
	this.shape_264.setTransform(94.425,36);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAJIgFgBQgIAAgDAHIAAAlg");
	this.shape_265.setTransform(90.325,37);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgGQADgHAFgDQAGgDAGgBQALABAGAHQAHAIAAALIAAAAQAAAIgDAHQgDAFgFAEQgGAEgHgBQgKAAgGgHgAgKgNQgEAFAAAIQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_266.setTransform(85.5,37.05);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgGQADgHAGgDQAFgDAGgBQAKABAHAHQAHAIAAALIAAAAQAAAIgDAHQgDAFgFAEQgGAEgHgBQgJAAgIgHgAgKgNQgEAFAAAIQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_267.setTransform(79.8,37.05);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AAMAaIgMgmIgMAmIgHAAIgPg0IAJAAIAKAnIAMgnIAGAAIANAoIALgoIAJAAIgQA0g");
	this.shape_268.setTransform(73.2,37.05);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_269.setTransform(67.675,36.475);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_270.setTransform(63.475,37);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgQAXQgFgFAAgGQAAgJAGgDQAHgFAKABIAJAAIAAgFQAAgEgDgDQgDgDgFAAQgEAAgDACQgEADAAAEIgJAAQAAgEADgFQADgDAFgCQAEgCAFgBQAJAAAFAGQAGAEAAAIIAAAXQAAAIACADIAAABIgKAAIgBgFQgGAGgIAAQgIABgFgFgAgMAKQAAAFADACQADACAEAAQADAAAEgCQAEgCACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_271.setTransform(57.975,37.05);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAJIgFgBQgIAAgDAHIAAAlg");
	this.shape_272.setTransform(53.825,37);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgOAUQgIgGABgNIAAgBQAAgHACgGQADgGAGgEQAGgDAEgBQALAAAFAIQAHAGAAANIAAACIgjAAQAAAJAEAFQAFAEAFAAQAFAAADgCIAGgFIAGAEQgHALgNgBQgKABgGgIgAgIgPQgEAEAAAIIAaAAIAAgBQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_273.setTransform(49.3,37.05);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgCAaIgTg0IAJAAIAMAoIAOgoIAJAAIgUA0g");
	this.shape_274.setTransform(44.15,37.05);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgEAlIAAhJIAIAAIAABJg");
	this.shape_275.setTransform(38,35.95);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgNIAAgBQAAgHADgGQADgGAFgEQAGgDAEgBQALAAAGAIQAFAGABANIAAACIgjAAQAAAJAEAFQAEAEAGAAQAFAAADgCIAGgFIAFAEQgGALgNgBQgKABgHgIgAgIgPQgDAEgBAIIAaAAIAAgBQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_276.setTransform(34.25,37.05);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAGIAAgbIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAFAGABQAIAAAEgIIAAgYQgEgHgIAAQgGAAgDAFg");
	this.shape_277.setTransform(28.575,36);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_278.setTransform(23.175,37);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgQAXQgFgFAAgGQAAgJAGgDQAHgFAKABIAJAAIAAgFQAAgEgDgDQgDgDgFAAQgEAAgDACQgEADAAAEIgJAAQAAgEADgFQADgDAFgCQAEgCAFgBQAJAAAFAGQAGAEAAAIIAAAXQAAAIACADIAAABIgKAAIgBgFQgGAGgIAAQgIABgFgFgAgMAKQAAAFADACQADACAEAAQADAAAEgCQAEgCACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_279.setTransform(17.675,37.05);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AASAjIAAghIgjAAIAAAhIgJAAIAAhGIAJAAIAAAfIAjAAIAAgfIAJAAIAABGg");
	this.shape_280.setTransform(11.375,36.15);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgJAZQgFgCgDgEQgDgEAAgFIAJAAQAAAFAEACQADADAFAAQAFAAADgCQADgCAAgDQAAgEgCgCQgEgCgGgBIgKgEIgGgEQgCgDAAgEQAAgGAFgFQAGgFAIAAQAJABAFAFQAFAEAAAHIgJAAQAAgDgCgDQgDgDgFAAQgFAAgCADQgDABAAAEQAAADACACIAJADIALADQAEACACACQACADAAAFQAAAHgFAEQgGAFgJAAQgFAAgFgDg");
	this.shape_281.setTransform(372.45,13.05);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_282.setTransform(367.175,13);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgNIAAAAQAAgHADgGQADgGAFgEQAGgEAGAAQAKAAAIAIQAGAHAAAMIAAABQAAAIgDAFQgDAGgGAEQgFAEgHAAQgKAAgGgIgAgKgNQgEAFAAAJQAAAIAEAGQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_283.setTransform(361.55,13.05);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_284.setTransform(357.475,12.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_285.setTransform(354.475,12.475);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_286.setTransform(351.775,12.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgPAeQgGgHAAgMIAAgBQAAgLAGgHQAFgIAKAAQAIAAAFAHIAAgcIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgIgAgIgDQgEAEAAAKQAAAJAEAFQADAGAGgBQAIABAEgJIAAgWQgEgIgIAAQgGAAgDAFg");
	this.shape_287.setTransform(347.575,12);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_288.setTransform(342.175,13);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgRAUQgGgHAAgNIAAAAQAAgHADgGQADgGAGgEQAFgEAGAAQAKAAAIAIQAGAHAAAMIAAABQAAAIgDAFQgDAGgGAEQgFAEgHAAQgJAAgIgIgAgKgNQgEAFAAAJQAAAIAEAGQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_289.setTransform(336.55,13.05);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgPAVQgGgIAAgMIAAgBQAAgIADgFQACgGAGgEQAFgEAGAAQAJAAAGAGQAGAFAAAJIgIAAQgBgFgDgDQgEgEgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAEgDAFQgDAEgFACQgEADgGAAQgKgBgGgGg");
	this.shape_290.setTransform(331.175,13.05);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgVAfQgHgFABgKQAAgFACgEQADgFAIgEIgGgKQgCgDAAgEQAAgHAFgFQAFgFAIAAQAHABAEAEQAFAEAAAGQAAAFgCAEQgDADgFAEIgEAEIAOASQAEgHAAgHIAIAAQAAAMgGAIIAKAMIgLAAIgEgFIgIAFIgKACQgKAAgGgGgAgKAEQgJAGABAGQAAAGADADQAEAEAGAAQAGAAAHgGIgRgUgAgKgZQgCADAAADQgBAFAGAHIAGgEIADgEIABgGQAAgDgCgCQgCgCgDAAQgEAAgCADg");
	this.shape_291.setTransform(323.15,12.15);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgKAZQgEgCgDgEQgDgEAAgFIAJAAQAAAFAEACQADADAFAAQAFAAADgCQADgCAAgDQAAgEgDgCQgCgCgHgBIgKgEIgGgEQgCgDAAgEQAAgGAGgFQAFgFAHAAQAKABAFAFQAGAEgBAHIgJAAQAAgDgDgDQgCgDgGAAQgDAAgDADQgDABAAAEQAAADACACIAJADIALADQAEACACACQACADAAAFQAAAHgFAEQgGAFgJAAQgGAAgFgDg");
	this.shape_292.setTransform(314.7,13.05);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgGgDgDQgCgCgHAAQgFAAgDADQgDADgBAFIAAAiIgHAAIAAgiQgBgLgLAAQgJAAgDAIIAAAlIgJAAIAAg0IAIAAIAAAGQAGgHAKAAQALAAAEAJQACgEAEgDQAEgCAGAAQARAAABASIAAAjg");
	this.shape_293.setTransform(307.8,13);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAHQADgIAJAAIAEABIAAAIIgFAAQgIAAgDAIIAAAkg");
	this.shape_294.setTransform(301.975,13);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgOAVQgIgIAAgLIAAgCQAAgHADgGQAEgGAFgEQAFgEAGAAQAKABAFAGQAHAIgBAMIAAADIgiAAQAAAHAEAFQAFAFAFAAQAFAAAEgCIAFgFIAGAEQgHALgNAAQgKgBgGgGgAgHgPQgFAEAAAHIAZAAIAAAAQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_295.setTransform(297.45,13.05);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgEAjIAAg+IgWAAIAAgHIA2AAIAAAHIgYAAIAAA+g");
	this.shape_296.setTransform(291.8,12.15);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AAAAGIgIAOIgGgEIAKgOIgPgDIACgIIAPAGIgBgRIAHAAIAAARIAOgFIACAHIgPAEIAKANIgGAFg");
	this.shape_297.setTransform(286.65,10.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,4.2,659.6,64), null);


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
	this.frame_55 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(55).call(this.frame_55).wait(1));

	// Symbol 18
	this.instance = new lib.Symbol18();
	this.instance.setTransform(206.6,11.8,1,1,0,0,0,42.1,15.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({y:15.3,alpha:1},17,cjs.Ease.quadOut).wait(12));

	// Symbol 19
	this.instance_1 = new lib.Symbol19();
	this.instance_1.setTransform(112.25,20.3,1,1,0,0,0,27.5,15.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({y:15.3,alpha:1},17,cjs.Ease.quadOut).wait(25));

	// Symbol 20
	this.instance_2 = new lib.Symbol20();
	this.instance_2.setTransform(35.3,20.3,1,1,0,0,0,35.3,15.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:15.3,alpha:1},17,cjs.Ease.quadOut).wait(39));

	// Symbol 16
	this.instance_3 = new lib.Symbol16();
	this.instance_3.setTransform(69.85,17.3,0.5,0.1159,0,0,0,1.1,17.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({scaleY:1},12,cjs.Ease.quadOut).wait(34));

	// Symbol 16
	this.instance_4 = new lib.Symbol16();
	this.instance_4.setTransform(154.25,17.3,0.5,0.1159,0,0,0,1.1,17.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({scaleY:1},11,cjs.Ease.quadOut).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-3.5,295.8,70.9);


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
	this.frame_84 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(1));

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgoCsIAAlDICVAAIAAFDg");
	var mask_graphics_1 = new cjs.Graphics().p("AhXCsIAAlDIDoAAIAAFDg");
	var mask_graphics_2 = new cjs.Graphics().p("AiFCsIAAlDIE6AAIAAFDg");
	var mask_graphics_3 = new cjs.Graphics().p("AizCsIAAlDIGLAAIAAFDg");
	var mask_graphics_4 = new cjs.Graphics().p("AjhCsIAAlDIHcAAIAAFDg");
	var mask_graphics_5 = new cjs.Graphics().p("AkPCsIAAlDIIuAAIAAFDg");
	var mask_graphics_6 = new cjs.Graphics().p("Ak8CsIAAlDIJ9AAIAAFDg");
	var mask_graphics_7 = new cjs.Graphics().p("AlmCsIAAlDILNAAIAAFDg");
	var mask_graphics_8 = new cjs.Graphics().p("AmNCsIAAlDIMbAAIAAFDg");
	var mask_graphics_9 = new cjs.Graphics().p("AmzCsIAAlDINnAAIAAFDg");
	var mask_graphics_10 = new cjs.Graphics().p("AnZCsIAAlDIOzAAIAAFDg");
	var mask_graphics_11 = new cjs.Graphics().p("An+CsIAAlDIP9AAIAAFDg");
	var mask_graphics_12 = new cjs.Graphics().p("AoiCsIAAlDIRFAAIAAFDg");
	var mask_graphics_13 = new cjs.Graphics().p("ApGCsIAAlDISNAAIAAFDg");
	var mask_graphics_14 = new cjs.Graphics().p("ApoCsIAAlDITRAAIAAFDg");
	var mask_graphics_15 = new cjs.Graphics().p("AqKCsIAAlDIUVAAIAAFDg");
	var mask_graphics_16 = new cjs.Graphics().p("AqqCsIAAlDIVVAAIAAFDg");
	var mask_graphics_17 = new cjs.Graphics().p("ArKCsIAAlDIWVAAIAAFDg");
	var mask_graphics_18 = new cjs.Graphics().p("AroCsIAAlDIXRAAIAAFDg");
	var mask_graphics_19 = new cjs.Graphics().p("AsFCsIAAlDIYLAAIAAFDg");
	var mask_graphics_20 = new cjs.Graphics().p("AshCsIAAlDIZDAAIAAFDg");
	var mask_graphics_21 = new cjs.Graphics().p("As7CsIAAlDIZ3AAIAAFDg");
	var mask_graphics_22 = new cjs.Graphics().p("AtUCsIAAlDIapAAIAAFDg");
	var mask_graphics_23 = new cjs.Graphics().p("AtsCsIAAlDIbZAAIAAFDg");
	var mask_graphics_24 = new cjs.Graphics().p("AuCCsIAAlDIcFAAIAAFDg");
	var mask_graphics_25 = new cjs.Graphics().p("AuXCsIAAlDIcvAAIAAFDg");
	var mask_graphics_26 = new cjs.Graphics().p("AuqCsIAAlDIdVAAIAAFDg");
	var mask_graphics_27 = new cjs.Graphics().p("Au8CsIAAlDId5AAIAAFDg");
	var mask_graphics_28 = new cjs.Graphics().p("AvMCsIAAlDIeZAAIAAFDg");
	var mask_graphics_29 = new cjs.Graphics().p("AvbCsIAAlDIe3AAIAAFDg");
	var mask_graphics_30 = new cjs.Graphics().p("AvnCsIAAlDIfPAAIAAFDg");
	var mask_graphics_31 = new cjs.Graphics().p("AvzCsIAAlDIfnAAIAAFDg");
	var mask_graphics_32 = new cjs.Graphics().p("Av8CsIAAlDIf5AAIAAFDg");
	var mask_graphics_33 = new cjs.Graphics().p("AwECsIAAlDMAgJAAAIAAFDg");
	var mask_graphics_34 = new cjs.Graphics().p("AwKCsIAAlDMAgVAAAIAAFDg");
	var mask_graphics_35 = new cjs.Graphics().p("AwOCsIAAlDMAgdAAAIAAFDg");
	var mask_graphics_36 = new cjs.Graphics().p("AwRCsIAAlDMAgjAAAIAAFDg");
	var mask_graphics_37 = new cjs.Graphics().p("AwSCsIAAlDMAglAAAIAAFDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:10.925,y:17.175}).wait(1).to({graphics:mask_graphics_1,x:14.4967,y:17.175}).wait(1).to({graphics:mask_graphics_2,x:18.0621,y:17.175}).wait(1).to({graphics:mask_graphics_3,x:21.6145,y:17.175}).wait(1).to({graphics:mask_graphics_4,x:25.1477,y:17.175}).wait(1).to({graphics:mask_graphics_5,x:28.6552,y:17.175}).wait(1).to({graphics:mask_graphics_6,x:32.1308,y:17.175}).wait(1).to({graphics:mask_graphics_7,x:35.2766,y:17.175}).wait(1).to({graphics:mask_graphics_8,x:38.1613,y:17.175}).wait(1).to({graphics:mask_graphics_9,x:41.003,y:17.175}).wait(1).to({graphics:mask_graphics_10,x:43.7967,y:17.175}).wait(1).to({graphics:mask_graphics_11,x:46.5373,y:17.175}).wait(1).to({graphics:mask_graphics_12,x:49.2198,y:17.175}).wait(1).to({graphics:mask_graphics_13,x:51.8394,y:17.175}).wait(1).to({graphics:mask_graphics_14,x:54.3914,y:17.175}).wait(1).to({graphics:mask_graphics_15,x:56.8712,y:17.175}).wait(1).to({graphics:mask_graphics_16,x:59.2744,y:17.175}).wait(1).to({graphics:mask_graphics_17,x:61.5965,y:17.175}).wait(1).to({graphics:mask_graphics_18,x:63.8335,y:17.175}).wait(1).to({graphics:mask_graphics_19,x:65.9813,y:17.175}).wait(1).to({graphics:mask_graphics_20,x:68.0359,y:17.175}).wait(1).to({graphics:mask_graphics_21,x:69.9938,y:17.175}).wait(1).to({graphics:mask_graphics_22,x:71.8513,y:17.175}).wait(1).to({graphics:mask_graphics_23,x:73.6052,y:17.175}).wait(1).to({graphics:mask_graphics_24,x:75.2523,y:17.175}).wait(1).to({graphics:mask_graphics_25,x:76.7895,y:17.175}).wait(1).to({graphics:mask_graphics_26,x:78.2142,y:17.175}).wait(1).to({graphics:mask_graphics_27,x:79.5238,y:17.175}).wait(1).to({graphics:mask_graphics_28,x:80.7158,y:17.175}).wait(1).to({graphics:mask_graphics_29,x:81.7883,y:17.175}).wait(1).to({graphics:mask_graphics_30,x:82.7391,y:17.175}).wait(1).to({graphics:mask_graphics_31,x:83.5667,y:17.175}).wait(1).to({graphics:mask_graphics_32,x:84.2695,y:17.175}).wait(1).to({graphics:mask_graphics_33,x:84.8462,y:17.175}).wait(1).to({graphics:mask_graphics_34,x:85.2959,y:17.175}).wait(1).to({graphics:mask_graphics_35,x:85.6176,y:17.175}).wait(1).to({graphics:mask_graphics_36,x:85.8109,y:17.175}).wait(1).to({graphics:mask_graphics_37,x:84.4895,y:17.175}).wait(48));

	// Layer_1 copy
	this.instance = new lib.Symbol24();
	this.instance.setTransform(104.9,17.45,1,1,0,0,0,83.3,9.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85));

	// Layer_4 copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_25 = new cjs.Graphics().p("AmQEkIAAlDIAqAAIAAFDg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AmSEkIAAlDICQAAIAAFDg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AmVEkIAAlDID4AAIAAFDg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AmXEkIAAlDIFeAAIAAFDg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AmZEkIAAlDIHDAAIAAFDg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AmbEkIAAlDIIpAAIAAFDg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AmdEkIAAlDIKOAAIAAFDg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AmgEkIAAlDIL0AAIAAFDg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AmsEkIAAlDINZAAIAAFDg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AneEkIAAlDIO9AAIAAFDg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AoQEkIAAlDIQhAAIAAFDg");
	var mask_1_graphics_36 = new cjs.Graphics().p("ApBEkIAAlDISDAAIAAFDg");
	var mask_1_graphics_37 = new cjs.Graphics().p("ApyEkIAAlDITlAAIAAFDg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AqiEkIAAlDIVFAAIAAFDg");
	var mask_1_graphics_39 = new cjs.Graphics().p("ArSEkIAAlDIWlAAIAAFDg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AsCEkIAAlDIYFAAIAAFDg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AsxEkIAAlDIZjAAIAAFDg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AtfEkIAAlDIa/AAIAAFDg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AuNEkIAAlDIcbAAIAAFDg");
	var mask_1_graphics_44 = new cjs.Graphics().p("Au6EkIAAlDId1AAIAAFDg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AvmEkIAAlDIfNAAIAAFDg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AwSEkIAAlDMAglAAAIAAFDg");
	var mask_1_graphics_47 = new cjs.Graphics().p("Aw9EkIAAlDMAh7AAAIAAFDg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AxnEkIAAlDMAjPAAAIAAFDg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AyQEkIAAlDMAkhAAAIAAFDg");
	var mask_1_graphics_50 = new cjs.Graphics().p("Ay5EkIAAlDMAlzAAAIAAFDg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AzhEkIAAlDMAnDAAAIAAFDg");
	var mask_1_graphics_52 = new cjs.Graphics().p("A0HEkIAAlDMAoPAAAIAAFDg");
	var mask_1_graphics_53 = new cjs.Graphics().p("A0tEkIAAlDMApbAAAIAAFDg");
	var mask_1_graphics_54 = new cjs.Graphics().p("A1SEkIAAlDMAqlAAAIAAFDg");
	var mask_1_graphics_55 = new cjs.Graphics().p("A12EkIAAlDMArtAAAIAAFDg");
	var mask_1_graphics_56 = new cjs.Graphics().p("A2ZEkIAAlDMAszAAAIAAFDg");
	var mask_1_graphics_57 = new cjs.Graphics().p("A26EkIAAlDMAt1AAAIAAFDg");
	var mask_1_graphics_58 = new cjs.Graphics().p("A3bEkIAAlDMAu3AAAIAAFDg");
	var mask_1_graphics_59 = new cjs.Graphics().p("A37EkIAAlDMAv3AAAIAAFDg");
	var mask_1_graphics_60 = new cjs.Graphics().p("A4ZEkIAAlDMAwzAAAIAAFDg");
	var mask_1_graphics_61 = new cjs.Graphics().p("A43EkIAAlDMAxvAAAIAAFDg");
	var mask_1_graphics_62 = new cjs.Graphics().p("A5TEkIAAlDMAynAAAIAAFDg");
	var mask_1_graphics_63 = new cjs.Graphics().p("A5uEkIAAlDMAzdAAAIAAFDg");
	var mask_1_graphics_64 = new cjs.Graphics().p("A6IEkIAAlDMA0RAAAIAAFDg");
	var mask_1_graphics_65 = new cjs.Graphics().p("A6hEkIAAlDMA1DAAAIAAFDg");
	var mask_1_graphics_66 = new cjs.Graphics().p("A64EkIAAlDMA1xAAAIAAFDg");
	var mask_1_graphics_67 = new cjs.Graphics().p("A7OEkIAAlDMA2dAAAIAAFDg");
	var mask_1_graphics_68 = new cjs.Graphics().p("A7jEkIAAlDMA3HAAAIAAFDg");
	var mask_1_graphics_69 = new cjs.Graphics().p("A73EkIAAlDMA3vAAAIAAFDg");
	var mask_1_graphics_70 = new cjs.Graphics().p("A8JEkIAAlDMA4TAAAIAAFDg");
	var mask_1_graphics_71 = new cjs.Graphics().p("A8aEkIAAlDMA41AAAIAAFDg");
	var mask_1_graphics_72 = new cjs.Graphics().p("A8qEkIAAlDMA5VAAAIAAFDg");
	var mask_1_graphics_73 = new cjs.Graphics().p("A85EkIAAlDMA5zAAAIAAFDg");
	var mask_1_graphics_74 = new cjs.Graphics().p("A9GEkIAAlDMA6NAAAIAAFDg");
	var mask_1_graphics_75 = new cjs.Graphics().p("A9REkIAAlDMA6jAAAIAAFDg");
	var mask_1_graphics_76 = new cjs.Graphics().p("A9cEkIAAlDMA65AAAIAAFDg");
	var mask_1_graphics_77 = new cjs.Graphics().p("A9lEkIAAlDMA7LAAAIAAFDg");
	var mask_1_graphics_78 = new cjs.Graphics().p("A9sEkIAAlDMA7ZAAAIAAFDg");
	var mask_1_graphics_79 = new cjs.Graphics().p("A9zEkIAAlDMA7nAAAIAAFDg");
	var mask_1_graphics_80 = new cjs.Graphics().p("A94EkIAAlDMA7xAAAIAAFDg");
	var mask_1_graphics_81 = new cjs.Graphics().p("A97EkIAAlDMA73AAAIAAFDg");
	var mask_1_graphics_82 = new cjs.Graphics().p("A99EkIAAlDMA77AAAIAAFDg");
	var mask_1_graphics_83 = new cjs.Graphics().p("A9+EkIAAlDMA79AAAIAAFDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_1_graphics_25,x:-40.1,y:29.175}).wait(1).to({graphics:mask_1_graphics_26,x:-40.3258,y:29.175}).wait(1).to({graphics:mask_1_graphics_27,x:-40.5514,y:29.175}).wait(1).to({graphics:mask_1_graphics_28,x:-40.7767,y:29.175}).wait(1).to({graphics:mask_1_graphics_29,x:-41.0014,y:29.175}).wait(1).to({graphics:mask_1_graphics_30,x:-41.2256,y:29.175}).wait(1).to({graphics:mask_1_graphics_31,x:-41.4489,y:29.175}).wait(1).to({graphics:mask_1_graphics_32,x:-41.6712,y:29.175}).wait(1).to({graphics:mask_1_graphics_33,x:-40.9054,y:29.175}).wait(1).to({graphics:mask_1_graphics_34,x:-36.3403,y:29.175}).wait(1).to({graphics:mask_1_graphics_35,x:-31.8058,y:29.175}).wait(1).to({graphics:mask_1_graphics_36,x:-27.3053,y:29.175}).wait(1).to({graphics:mask_1_graphics_37,x:-22.8421,y:29.175}).wait(1).to({graphics:mask_1_graphics_38,x:-18.4194,y:29.175}).wait(1).to({graphics:mask_1_graphics_39,x:-14.0406,y:29.175}).wait(1).to({graphics:mask_1_graphics_40,x:-9.7087,y:29.175}).wait(1).to({graphics:mask_1_graphics_41,x:-5.427,y:29.175}).wait(1).to({graphics:mask_1_graphics_42,x:-1.1986,y:29.175}).wait(1).to({graphics:mask_1_graphics_43,x:2.9734,y:29.175}).wait(1).to({graphics:mask_1_graphics_44,x:7.0859,y:29.175}).wait(1).to({graphics:mask_1_graphics_45,x:11.1359,y:29.175}).wait(1).to({graphics:mask_1_graphics_46,x:15.1204,y:29.175}).wait(1).to({graphics:mask_1_graphics_47,x:19.0365,y:29.175}).wait(1).to({graphics:mask_1_graphics_48,x:22.8814,y:29.175}).wait(1).to({graphics:mask_1_graphics_49,x:26.6522,y:29.175}).wait(1).to({graphics:mask_1_graphics_50,x:30.3462,y:29.175}).wait(1).to({graphics:mask_1_graphics_51,x:33.9606,y:29.175}).wait(1).to({graphics:mask_1_graphics_52,x:37.4928,y:29.175}).wait(1).to({graphics:mask_1_graphics_53,x:40.9402,y:29.175}).wait(1).to({graphics:mask_1_graphics_54,x:44.3002,y:29.175}).wait(1).to({graphics:mask_1_graphics_55,x:47.5705,y:29.175}).wait(1).to({graphics:mask_1_graphics_56,x:50.7486,y:29.175}).wait(1).to({graphics:mask_1_graphics_57,x:53.8322,y:29.175}).wait(1).to({graphics:mask_1_graphics_58,x:56.819,y:29.175}).wait(1).to({graphics:mask_1_graphics_59,x:59.7068,y:29.175}).wait(1).to({graphics:mask_1_graphics_60,x:62.4935,y:29.175}).wait(1).to({graphics:mask_1_graphics_61,x:65.1771,y:29.175}).wait(1).to({graphics:mask_1_graphics_62,x:67.7556,y:29.175}).wait(1).to({graphics:mask_1_graphics_63,x:70.2272,y:29.175}).wait(1).to({graphics:mask_1_graphics_64,x:72.5899,y:29.175}).wait(1).to({graphics:mask_1_graphics_65,x:74.842,y:29.175}).wait(1).to({graphics:mask_1_graphics_66,x:76.982,y:29.175}).wait(1).to({graphics:mask_1_graphics_67,x:79.0082,y:29.175}).wait(1).to({graphics:mask_1_graphics_68,x:80.9192,y:29.175}).wait(1).to({graphics:mask_1_graphics_69,x:82.7135,y:29.175}).wait(1).to({graphics:mask_1_graphics_70,x:84.3899,y:29.175}).wait(1).to({graphics:mask_1_graphics_71,x:85.947,y:29.175}).wait(1).to({graphics:mask_1_graphics_72,x:87.3839,y:29.175}).wait(1).to({graphics:mask_1_graphics_73,x:88.6993,y:29.175}).wait(1).to({graphics:mask_1_graphics_74,x:89.8924,y:29.175}).wait(1).to({graphics:mask_1_graphics_75,x:90.9623,y:29.175}).wait(1).to({graphics:mask_1_graphics_76,x:91.9081,y:29.175}).wait(1).to({graphics:mask_1_graphics_77,x:92.7293,y:29.175}).wait(1).to({graphics:mask_1_graphics_78,x:93.4251,y:29.175}).wait(1).to({graphics:mask_1_graphics_79,x:93.9952,y:29.175}).wait(1).to({graphics:mask_1_graphics_80,x:94.4389,y:29.175}).wait(1).to({graphics:mask_1_graphics_81,x:94.7562,y:29.175}).wait(1).to({graphics:mask_1_graphics_82,x:94.9466,y:29.175}).wait(1).to({graphics:mask_1_graphics_83,x:93.7351,y:29.175}).wait(2));

	// Layer_2
	this.instance_1 = new lib.Symbol25();
	this.instance_1.setTransform(104.3,43.45,1,1,0,0,0,179.2,9.7);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,0,365.1,61.8);


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

	// Layer_5
	this.instance = new lib.Symbol5copy();
	this.instance.setTransform(675.4,134.45,1.8077,1.8077,165.0008,0,0,1.3,1.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(321));

	// Layer_6
	this.instance_1 = new lib.Symbol5copy3();
	this.instance_1.setTransform(686.45,148.2,1.0435,1.0435,0,0,0,1.4,1.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(334));

	// Layer_4 copy 2
	this.instance_2 = new lib.Symbol5copy3();
	this.instance_2.setTransform(694.45,196.2,1.0435,1.0435,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(342));

	// Layer_4 copy
	this.instance_3 = new lib.Symbol5copy3();
	this.instance_3.setTransform(689.85,168.2,1.8461,1.8461,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(342));

	// Layer_4
	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(693.3,-119.2,1,1,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(342));

	// Layer_2 copy
	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(685.9,-150.2,0.68,0.68,-9.6942,0,0,1.4,1.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(338));

	// Layer_2 copy 2
	this.instance_6 = new lib.Symbol5();
	this.instance_6.setTransform(685.8,-236.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({_off:false},0).wait(325));

	// Layer_2 copy 3
	this.instance_7 = new lib.Symbol5();
	this.instance_7.setTransform(687.8,-282.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(332));

	// Layer_2
	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(705.8,-176.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).wait(328));

	// Layer_1 copy 2
	this.instance_9 = new lib.Symbol5copy2();
	this.instance_9.setTransform(424.1,-204.1,1.4729,1.4729,14.9991,0,0,1.3,1.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},0).wait(325));

	// Layer_1 copy 3
	this.instance_10 = new lib.Symbol5copy();
	this.instance_10.setTransform(433.25,-164.2,1.8077,1.8077,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(342));

	// Layer_7 copy 2
	this.instance_11 = new lib.Symbol5copy4();
	this.instance_11.setTransform(420.45,-254,1.5458,1.5458,-178.5536,0,0,1.4,1.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({_off:false},0).wait(319));

	// Layer_7 copy 3
	this.instance_12 = new lib.Symbol5copy3();
	this.instance_12.setTransform(419.8,-282.4,1.0434,1.0434,-178.5536,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(342));

	// Layer_4 copy 5
	this.instance_13 = new lib.Symbol5copy3();
	this.instance_13.setTransform(420.45,-121.6,1.0434,1.0434,150.0013,0,0,1.5,1.3);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).wait(337));

	// Layer_4 copy 6
	this.instance_14 = new lib.Symbol5copy3();
	this.instance_14.setTransform(419.65,-206.3,1.8461,1.8461,150.0007,0,0,1.4,1.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(8).to({_off:false},0).wait(334));

	// Layer_1 copy
	this.instance_15 = new lib.Symbol5copy2();
	this.instance_15.setTransform(408.1,215.9,1.4729,1.4729,14.9991,0,0,1.3,1.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(17).to({_off:false},0).wait(325));

	// Layer_1
	this.instance_16 = new lib.Symbol5copy();
	this.instance_16.setTransform(411.25,195.8,1.8077,1.8077,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(342));

	// Layer_7 copy
	this.instance_17 = new lib.Symbol5copy4();
	this.instance_17.setTransform(398.45,158,1.5458,1.5458,-178.5536,0,0,1.4,1.4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(23).to({_off:false},0).wait(319));

	// Layer_7
	this.instance_18 = new lib.Symbol5copy3();
	this.instance_18.setTransform(399.8,137.6,1.0434,1.0434,-178.5536,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(342));

	// Layer_4 copy 3
	this.instance_19 = new lib.Symbol5copy3();
	this.instance_19.setTransform(392.45,298.4,1.0434,1.0434,150.0013,0,0,1.5,1.3);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(5).to({_off:false},0).wait(337));

	// Layer_4 copy 4
	this.instance_20 = new lib.Symbol5copy3();
	this.instance_20.setTransform(410.5,320.2,1.8461,1.8461,150.0007,0,0,1.4,1.4);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(8).to({_off:false},0).wait(334));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(390.8,-285.2,316.49999999999994,608.8);


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
	this.instance.setTransform(695.4,114.45,1.8077,1.8077,165.0008,0,0,1.3,1.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(321));

	// Layer_6
	this.instance_1 = new lib.Symbol5copy3();
	this.instance_1.setTransform(706.45,128.2,1.0435,1.0435,0,0,0,1.4,1.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(334));

	// Layer_4 copy 2
	this.instance_2 = new lib.Symbol5copy3();
	this.instance_2.setTransform(714.45,176.2,1.0435,1.0435,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(342));

	// Layer_4 copy
	this.instance_3 = new lib.Symbol5copy3();
	this.instance_3.setTransform(709.85,148.2,1.8461,1.8461,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(342));

	// Layer_4
	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(703.3,20.8,1,1,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(342));

	// Layer_2 copy
	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(705.9,-10.2,0.68,0.68,-9.6942,0,0,1.4,1.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(338));

	// Layer_2 copy 2
	this.instance_6 = new lib.Symbol5();
	this.instance_6.setTransform(705.8,-36.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({_off:false},0).wait(325));

	// Layer_2 copy 3
	this.instance_7 = new lib.Symbol5();
	this.instance_7.setTransform(761.8,-12.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(332));

	// Layer_2
	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(705.8,-16.65,1,1,-9.6946,0,0,1.3,1.3);
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
p.nominalBounds = new cjs.Rectangle(-249.2,-38.2,1012.5,215.7);


// stage content:
(lib.MultiBank_970x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [435,446];
	// timeline functions:
	this.frame_435 = function() {
		if (myCounter++ <2){
			this.gotoAndPlay(1);
		};
	}
	this.frame_446 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(435).call(this.frame_435).wait(11).call(this.frame_446).wait(1));

	// t2
	this.instance = new lib.Symbol17();
	this.instance.setTransform(670.35,145.85,1.1797,1.1797,0,0,0,118.8,17.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(230).to({_off:false},0).wait(217));

	// text1
	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(646.2,143.85,1.3892,1.3882,0,0,0,91.2,15.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(58).to({_off:false},0).to({alpha:1},17).wait(140).to({alpha:0},15).to({_off:true},1).wait(216));

	// legat
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(518.15,217.15,0.7676,0.7676,0,0,0,163.5,30.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).to({alpha:1},21).wait(351));

	// cta
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(190.5,179.65,0.4611,0.4603,0,0,0,180.7,41.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(96).to({_off:false},0).to({y:185.65,alpha:1},20).wait(331));

	// in gold
	this.instance_4 = new lib.Symbol10();
	this.instance_4.setTransform(646.5,61.65,1.5191,1.5185,0,0,0,105.5,31.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(438));

	// logo
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(214.9,-37.7,0.3516,0.3496,0,0,0,509.2,62.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({alpha:1},12).wait(432));

	// sparks copy
	this.instance_6 = new lib.Symbol7copy();
	this.instance_6.setTransform(388.85,679.85,1,1,-90,0,0,1.3,1.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).wait(432).to({alpha:0},11).wait(1));

	// sparks
	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(248.85,39.85,1,1,0,0,0,1.3,1.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).wait(432).to({alpha:0},11).wait(1));

	// bg
	this.instance_8 = new lib.Symbol21();
	this.instance_8.setTransform(143.5,125,1,1,0,0,0,168.5,125);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},12).wait(435));

	// blackbg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(447));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(483.8,110.4,487.2,182.79999999999998);
// library properties:
lib.properties = {
	id: '4C67F3A136A92E4E81338A9018FE5B2A',
	width: 970,
	height: 250,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/CTA.png?1626163696912", id:"CTA"},
		{src:"images/left.png?1626163696912", id:"left"},
		{src:"images/right.png?1626163696912", id:"right"}
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