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



(lib.card = function() {
	this.initialize(img.card);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,164);


(lib.img01 = function() {
	this.initialize(img.img01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.img02 = function() {
	this.initialize(img.img02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.img03 = function() {
	this.initialize(img.img03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("AAAAEIgCAGIgEgDIADgFIgGAAIAAgEIAGABIgDgFIAEgDIACAGIADgGIAEADIgEAFIAHgBIAAAEIgHAAIAEAFIgEADg");
	this.shape.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,2,2), null);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABmBbIAAgQQgIgBgKgDQgIgCgHgFIgLgKIgJgNIAbgRIALAPIAIAFIAIAEIAAgjIgTgGQgLgDgGgEQgIgGgEgGQgEgIgBgLQABgJADgJQAEgIAHgFQAHgHAIgDQALgDALgBIAAgOIAWAAIAAAOQALACAFACQAGACAHAEIAKAIIAIAJIgdATIgIgKQgEgEgHgDIAAAgIAWAGQALAEAGAEQAHAFAEAHQADAIAAAKQAAAJgCAHQgCAHgHAHQgHAHgJADQgLAFgOABIAAAQgAB7AwQAIgBADgFQADgDAAgGQAAgFgDgEQgDgDgIgCgABegrQgEADAAAGIABAFIACAEIAEADIAGACIAAgdQgHACgCAEgAJHBGQgKgFgJgKQgKgMgDgNQgFgMAAgTQAAgSAFgNQAEgOAJgKQAJgLAKgEQANgGAOAAQAPAAANAGQAMAEAJALQAHAJAFAPQAFAOgBARQABARgFAOQgFAPgHAKQgJAKgMAFQgNAFgPAAQgOAAgNgFgAJQgiQgGAMAAAVQAAAXAGALQAHAMALAAQANAAAGgMQAHgLAAgXQgBgVgGgMQgGgLgNAAQgMAAgGALgAG7BGQgMgFgJgKQgHgKgFgPQgFgOAAgRQAAgRAFgOQAFgPAHgJQAJgLAMgEQAMgGAPAAQAPAAANAGQAKAEAKALQAHAIAFAQQAFAOAAARQAAARgFAOQgEAPgIAKQgKAKgKAFQgNAFgPAAQgPAAgMgFgAHEgiQgHAMAAAVQAAAWAHAMQAGAMAMAAQAMAAAHgMQAFgLAAgXQAAgVgFgMQgHgLgMAAQgNAAgFALgAE3BGQgLgEgJgKQgGgHgEgIIgDgIQgFgOABgRQAAgPACgMIAFgOIAEgHQAFgIAGgGQAHgFAIgFQAIgEAIgCIAPgBIARABIANADIAKAEIAIAEIgRAbIgHgDIgHgDIgHgCIgIAAIgLACIgJAGQgEAEgDAGQgDAGgBAJQAHgDAKgFQAJgCAJAAQALAAAHACQAKADAHAFQAHAGAEAIQAFAJAAANQAAANgFAJQgFAKgHAGQgJAIgKADQgLADgOAAQgQABgLgGgAFEAHQgGADgFADQABASAGAHQAGAIANAAQAFAAAEgBIAGgFQACgCACgGIABgHIgBgGIgCgHIgHgFQgEgBgGgBQgJAAgGACgAgyBJQgLgEgHgDQgHgEgIgHQgGgHgEgIIAdgSQADAFAEAEIAKAIIAKAEIAMACIAIgCIAHgCQADgBACgCQACgDAAgEQgBgDgCgDQgCgCgEgCQgDgCgGgBIgjgLIgMgFQgGgCgDgFQgGgFgBgFQgDgIAAgIQAAgKAEgJQAFgJAHgGQAHgGALgDQALgDAMAAQAOAAAHACQAIACAIAFQAHADAHAGIALALIgbAWIgHgHQgEgDgFgDIgKgEIgJgBQgRAAgBALQAAADACACIAGAGIArAMIAMAGQAGAEAEADQAEAEADAHQADAHAAAIQAAAKgDAHQgDAHgIAIQgHAGgMAFQgMAEgRgBQgMAAgLgCgAC2BJIAAgfIAZAAIAAhRIgFADIgOAEIgGAAIAAghQAHAAAHgCQAIgDAEgFIAnAAIAAB1IAVAAIAAAfgAjJBJIg4hSIAAAAIAABSIgoAAIAAiUIAqAAIA2BSIABAAIAAhSIAnAAIAACUgAlfBJIgJgcIgvAAIgJAcIglAAIA1iUIAlAAIA0CUgAmOAQIAdAAIgOgngAn7BJIAAg8IgxAAIAAA8IgoAAIAAiUIAoAAIAAA3IAxAAIAAg3IAoAAIAACUgAq2BJIAAhyIgqAAIAAgiIB9AAIAAAiIgqAAIAABygALFgqIgIAQIgLgGIAKgQIgSABIAAgMIATABIgLgPIALgHIAIARIAIgRIAMAHIgLAPIATgBIAAAMIgTgBIALAQIgMAGg");
	this.shape.setTransform(73.7,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,147.4,18.2), null);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AFkBLQgJgCgIgEIgPgKQgGgGgGgJQgFgKgDgJIAAgCIgCgKIgBgNQAAgMADgMIAIgTQAGgJAGgGIAPgKQAIgEAJgCQAIgCAKAAQAKAAAIACQAJACAHAEQAIAEAHAGQAIAGAEAJQAGAIACALQAEAMAAAMIgBANIgCAKIgBACQgDALgFAIQgEAJgIAGQgHAGgIAEQgHAEgJACQgIACgKAAQgKAAgIgCgAFogoQgGADgEAGQgEAFgDAJQgCAJAAAIQAAAHABAGIABAFIACAFQACAGADAEQAEAFAGAEQAGADAIAAQAIAAAGgDQAHgEADgFQADgEACgGIABgFIACgFIAAgNQAAgKgCgHQgCgJgEgFQgDgGgHgDQgGgDgIAAQgIAAgGADgAnRBLQgIgCgJgEIgOgKQgHgGgGgJQgFgKgCgJIgBgCIgCgKIgBgNQAAgMAEgMIAHgTQAGgJAHgGIAOgKQAJgEAIgCQAJgCAJAAQAKAAAIACQAJACAIAEQAHAEAIAGQAHAGAFAJQAFAIADALQADAMAAAMIgBANIgCAKIAAACQgEALgEAIQgFAJgHAGQgIAGgHAEQgIAEgJACQgIACgKAAQgJAAgJgCgAnMgoQgHADgDAGQgEAFgDAJQgCAHAAAKIABANIABAFIABAFQACAGAEAEQADAFAHAEQAGADAHAAQAIAAAHgDQAGgEAEgFQACgEADgGIABgFIACgFIAAgNQAAgKgCgHQgDgJgDgFQgEgGgGgDQgHgDgIAAQgHAAgGADgAJfBKIAAiTIBpAAIAAAhIhBAAIAAAYIAvAAIAAAeIgvAAIAAAcIBFAAIAAAggAIgBKIgdgzIgLAAIAAAzIgnAAIAAiTIA6AAQAOAAAMACQAMAEAHAFQAJAGAEAJQAEAJAAANQAAASgIAJQgEAHgIAEIgJAEIAeA5gAH4gHIASAAQALAAAHgEQAGgEAAgJQAAgJgGgEQgHgEgLAAIgSAAgAD4BKIAAhbIgYBbIgjAAIgYhdIAAAAIAABdIgnAAIAAiTIA4AAIAaBjIABAAIAXhjIA4AAIAACTgAAFBKIAAg8IgxAAIAAA8IgnAAIAAiTIAnAAIAAA3IAxAAIAAg3IAoAAIAACTgAi1BKIAAhyIgrAAIAAghIB9AAIAAAhIgqAAIAABygAkVBKIgcgzIgLAAIAAAzIgoAAIAAiTIA7AAQANAAANACQAMAEAHAFQAJAGADAJQAEAJABANQAAASgIAJQgFAHgHAEIgKAEIAfA5gAk8gHIASAAQALAAAHgEQAFgEAAgJQAAgJgFgEQgHgEgLAAIgSAAgApXBKIgUhcIgBAAIgWBcIgiAAIgniTIAoAAIATBYIAAAAIABgJIARhPIAkAAIAUBYIABAAIABgJIAQhPIAlAAIgnCTg");
	this.shape.setTransform(71.6,7.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,143.2,15.4), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.6)").s().p("AHyNIILitPIrktAIIlAAILjM/IrjNQgAqCNIILhtPIrjtAIIlAAILiM/IriNQgAB7gHIrPM7IHsAAILQs8IrRsqIntAAgA71NIILitPIrktAIIlAAILjM/IrjNQg");
	this.shape.setTransform(178.425,84);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,356.9,168), null);


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
	this.shape.graphics.f("#66FF33").s().p("AhvBtIAAjZIDfAAIAADZg");
	this.shape.setTransform(11.15,10.875);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.3,21.8);


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
	this.shape.graphics.f("#63676B").s().p("AknFSQh7h7gBiuQAAigBth3QBrh4CegRIAAhVIEPCdIkPCeIAAhPQhgARg/BKQhABMAABiQAABwBOBPQBQBPBuAAQBvAABQhPQBPhQAAhvICVAAQABCuh7B7Qh8B6itAAQitAAh6h6g");
	this.shape.setTransform(8.6267,9.4698,0.2056,0.2056);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,17.3,19), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape.setTransform(139.25,42.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmBDIAAhSIgBAAIgDARIgSBBIgfAAIgVhUIAABUIgkAAIAAiEIAzAAIAXBZIAVhZIAyAAIAACEg");
	this.shape_1.setTransform(125.2,42.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAmBDIAAhSIgBAAIgWBSIgeAAIgRhBIgEgTIgBAAIAABUIgjAAIAAiEIAzAAIAXBZIAAAAIAVhZIAyAAIAACEg");
	this.shape_2.setTransform(108.8,42.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcBDIgIgZIgqAAIgIAZIghAAIAwiFIAgAAIAvCFgAgNARIAZAAIgMgkg");
	this.shape_3.setTransform(93.85,42.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQBDIgYgvIgKAAIAAAvIgkAAIAAiEIA1AAQANAAAJABQAMAEAFAEQAHAFAEAIQAEAJAAAMQAAAOgGAKQgIAKgMAEIAcAzgAgSgGIAPAAQALAAAFgDQAFgEAAgIQAAgIgFgEQgGgDgKgBIgPAAg");
	this.shape_4.setTransform(81.225,42.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbBAQgMgGgHgIQgHgKgDgNQgEgMAAgPQAAgOAEgNQAFgOAIgIQAIgKALgEQAMgFAOAAQAKAAAIACQAHABAJAFQAIAGAFAIQAFAIAEANIghAJIgEgKQgDgFgDgCQgCgCgEgCIgHgBIgJABQgFADgDAEQgEAFgCAGQgDAJAAAKQAAAIACAHIADALQADAFADADIAGAEIAGACIAEABQAJAAAGgFQAGgEADgHIgUAAIAAgaIA2AAIAABEIgcAAIAAgSIgBAAIgDAGQgDAEgEADQgEADgGACQgFACgHAAQgRAAgKgFg");
	this.shape_5.setTransform(67.425,42.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBEQgGgCgJgEQgIgEgGgFQgHgHgDgGQgGgIgCgKQgCgKAAgMQAAgLACgKQACgJAGgIQAFgJAFgFQAGgFAIgEIAPgFIAPgCQAJAAAHACQAKACAFADQAJAEAFAFQAFAFAGAJQADAFAEAMQADALgBAKQABALgDALQgEAMgDAGQgFAGgGAHQgGAFgIAEQgIAEgHACQgHABgJAAgAgLgkQgGAEgDAFQgFAFgBAHQgCAHAAAIQAAAJACAIQACAHAEAFQADAGAGACQAFAEAGAAQAIAAAEgEQAHgCADgGQAEgFABgHQACgHAAgKQAAgJgCgGQgBgHgEgFQgDgFgHgEQgGgCgGAAQgFAAgGACg");
	this.shape_6.setTransform(53.75,42.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQBDIgZgvIgJAAIAAAvIgkAAIAAiEIA0AAQANAAAKABQAMAEAGAEQAGAFAFAIQADAIAAANQAAAPgHAJQgHAKgNAEIAcAzgAgSgGIAQAAQAJAAAGgDQAEgDAAgJQAAgIgEgEQgHgDgIgBIgQAAg");
	this.shape_7.setTransform(40.55,42.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag1BDIAAiEIBAAAIANACQAFABAHAFQAFACAFAGQADAFACAHQADAIAAAJQAAAJgDAIQgCAGgEAFQgDAEgHAFIgNAFIgMACIgbAAIAAArgAgRgCIAPAAQAFAAAEgBQAEgBADgDIAEgFIABgHIgBgHIgEgFIgHgEQgEgBgFgBIgPAAg");
	this.shape_8.setTransform(28.25,42.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARBDIgZgvIgKAAIAAAvIgkAAIAAiEIA1AAQANAAAJABQAMAEAFAEQAHAFAEAIQAEAJAAAMQAAAPgGAJQgIAKgMAEIAcAzgAgSgGIAPAAQALAAAFgDQAFgEAAgIQAAgIgFgEQgGgDgKgBIgPAAg");
	this.shape_9.setTransform(138.475,24.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPBEQgIgCgHgEQgHgEgHgFQgGgHgFgGQgEgIgDgKQgDgKAAgMQAAgLADgKQADgJAEgIQAGgJAFgFQAGgFAIgEIAPgFIAPgCQAJAAAHACQAKACAGADQAHAEAGAFQAFAGAGAIQAEAHADAKQADALAAAKQAAALgDALQgDAKgEAIQgEAGgHAHIgNAJQgJAEgHACQgHABgJAAgAgMgkQgFAEgDAFQgFAFgCAHQgCAJAAAGQAAAHACAKQADAHAEAFQADAGAFACQAGAEAGAAQAHAAAGgEQAGgDADgFQADgDACgJQADgHAAgKQAAgJgDgGQgCgJgDgDQgDgFgGgEQgHgCgGAAQgGAAgGACg");
	this.shape_10.setTransform(124.8,24.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgmAAIAAgdIBvAAIAAAdIgmAAIAABng");
	this.shape_11.setTransform(111.875,24.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAcBDIgJgZIgpAAIgIAZIghAAIAviFIAhAAIAvCFgAgNARIAYAAIgLgkg");
	this.shape_12.setTransform(99.55,24.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQBDIgYgvIgKAAIAAAvIgkAAIAAiEIA1AAQANAAAJABQAMAEAFAEQAHAFAEAIQAEAJAAAMQAAAPgHAJQgGAKgOAEIAdAzgAgSgGIAPAAQALAAAEgDQAGgDAAgJQAAgIgGgEQgFgDgKgBIgPAAg");
	this.shape_13.setTransform(86.925,24.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_14.setTransform(74.95,24.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtBDIAAiEIAkAAIAABmIA3AAIAAAeg");
	this.shape_15.setTransform(64.1,24.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_16.setTransform(52.95,24.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWBBQgLgEgIgIQgIgIgGgNQgEgNAAgTQAAgMACgJQACgLAEgGQAEgIAGgGQAFgFAIgEQAFgDAKgCQAHgCAIAAQAOAAAJAEQAKACAHAHQAHAFADAIQAEAIACAIIgiAKIgDgJQgBgDgDgDIgGgGQgEgBgFAAQgGAAgFACQgEADgEAGQgDAEgCAHQgBAIAAAIQAAAJABAIQACAGADAGQADAFAGADQAEAEAGAAQAGAAADgCIAHgFIAFgIIADgLIAiAIQgCAIgFALQgDAHgIAHQgHAHgJACQgKAEgOAAQgNAAgLgEg");
	this.shape_17.setTransform(40.325,24.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAWBDIgXgpIgWApIgmAAIAphFIgmg/IApAAIATAjIASgjIAlAAIglA/IAqBFg");
	this.shape_18.setTransform(27.075,24.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYBAQgLgFgHgIQgHgKgEgNQgEgNAAgPQAAgNAEgOQAFgOAGgIQAHgJALgFQALgFANAAQAOAAAKAFQALAFAIAJQAIAKADAMQAEAOAAANQAAAPgEANQgDAMgIALQgIAIgLAFQgKAFgOAAQgMAAgMgFgAgQgdQgFAJAAAUQAAAVAFAKQAGAKAKAAQALAAAGgKQAFgLAAgUQAAgTgGgKQgFgKgLAAQgLAAgFAKg");
	this.shape_19.setTransform(14.075,24.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgmBDIAAgbIAXAAIAAhKIgGADIgFACIgHABIgFABIAAgdIANgDQAGgCAEgEIAiAAIAABpIAUAAIAAAbg");
	this.shape_20.setTransform(3.925,24.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAWBDIAAg2IgrAAIAAA2IgkAAIAAiEIAkAAIAAAxIArAAIAAgxIAkAAIAACEg");
	this.shape_21.setTransform(137.675,6.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgmAAIAAgdIBvAAIAAAdIgmAAIAABng");
	this.shape_22.setTransform(124.85,6.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRBDIAAiEIAjAAIAACEg");
	this.shape_23.setTransform(115.95,6.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAUBDIgShTIgUBTIgeAAIgkiEIAkAAIASBPIAQhPIAgAAIAMA1IACAGIAEAUIAAAAIAQhPIAhAAIgjCEg");
	this.shape_24.setTransform(104.225,6.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,144.2,49.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgcBAQgKgFgIgKQgHgJgEgNQgDgPAAgMQAAgQAEgMQAFgNAHgJQAJgJAMgEQAKgFAPAAQAKAAAIACQAIABAIAFQAHAGAGAIQAGAIADANIghAJIgEgKIgGgHIgGgEIgHgBQgFAAgEABQgFADgDAEQgFAFgBAGQgCAHAAAMIABAPIADALQADAFADACIAFAFIAHACIAFAAQAIAAAGgEQAGgEACgIIgTAAIAAgZIA2AAIAABDIgdAAIAAgRIAAAAIgDAGIgGAGIgLAGQgHACgFAAQgPAAgNgFg");
	this.shape.setTransform(153.35,24.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZBDIgxhKIgBAAIAABKIgjAAIAAiEIAmAAIAvBJIABAAIAAhJIAjAAIAACEg");
	this.shape_1.setTransform(139.975,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBDIAAiEIAjAAIAACEg");
	this.shape_2.setTransform(129.65,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZBDIgxhKIgBAAIAABKIgjAAIAAiEIAlAAIAwBJIABAAIAAhJIAjAAIAACEg");
	this.shape_3.setTransform(119.8,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQBDIgYgvIgKAAIAAAvIgkAAIAAiEIA1AAQANgBAJADQAJACAIAFQAIAGADAHQAEAJAAAMQAAAPgHAJQgHAKgNAEIAdAzgAgSgGIAPAAQAKAAAFgDQAFgDAAgJQAAgIgFgEQgGgDgJgBIgPAAg");
	this.shape_4.setTransform(106.375,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcBDIgIgZIgqAAIgIAZIghAAIAwiFIAgAAIAvCFgAgNARIAZAAIgMgkg");
	this.shape_5.setTransform(93.25,24.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_6.setTransform(81.4,24.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSBDQgJgCgIgFQgGgDgHgHQgFgGgEgHIAagQIAHAIIAJAHIAJAEIAJABIAIgBIAGgCIAEgDIABgGQAAgDgBgCIgGgEIgHgDIgggJIgKgFQgGgDgDgDQgEgEgCgGQgCgFAAgIQAAgLADgHQAEgIAHgFQAHgGAJgCQAKgDALAAQAIAAAKACQALADAFADIAMAIIAJAKIgYAUIgHgHIgIgFIgJgEIgHgBQgQAAAAAKIACAGIAFAEIAHADIAfAJIALAFQAGACADAEQAEADADAHQACAGAAAHQAAAIgDAHQgDAHgHAHQgGAGgLADQgLAEgPAAQgJAAgLgCg");
	this.shape_7.setTransform(64.075,24.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgnAAIAAgdIBwAAIAAAdIgmAAIAABng");
	this.shape_8.setTransform(51.95,24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAZBDIgxhKIgBAAIAABKIgjAAIAAiEIAmAAIAvBJIABAAIAAhJIAjAAIAACEg");
	this.shape_9.setTransform(39.325,24.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBDIAAiEIAjAAIAACEg");
	this.shape_10.setTransform(29,24.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPBDQgIgBgHgEQgGgDgIgGQgGgFgEgJQgGgIgCgJQgCgKAAgMQAAgLACgKQACgKAGgIQAFgIAFgFQAGgFAIgEIAPgGIAPgBQAJAAAHABQAKADAFADQAIAEAGAFQAGAFAEAIQAFAIADAKQADALgBAKQABALgDALQgDAJgFAIQgEAJgGAFQgJAHgFACQgIAEgHABIgQACIgPgCgAgLgkQgGADgDAFQgFAGgBAHQgCAJAAAGQAAAHACAKQABAHAFAFQADAFAGADQAFADAGAAQAIAAAEgDQAHgDADgFQAEgGACgGQABgHAAgKQAAgJgBgGQgCgHgEgGQgDgFgHgDQgFgCgHAAQgFAAgGACg");
	this.shape_11.setTransform(18.85,24.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag1BDIAAiEIA/AAIAOACIAMAGQAFACAEAGQAFAFACAHQACAFAAAMQAAAJgCAIQgDAGgEAFQgFAGgFACIgMAGQgIACgGAAIgbABIAAAqgAgSgCIAQAAQAFAAAEgBQAEgBADgDQADgDAAgCIABgHIgBgHQAAgDgDgCQgCgDgFgBQgEgBgFgBIgQAAg");
	this.shape_12.setTransform(6.1,24.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_13.setTransform(217.675,6.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgmAAIAAgdIBvAAIAAAdIgmAAIAABng");
	this.shape_14.setTransform(205.775,6.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAbBDIgIgZIgpAAIgIAZIghAAIAviFIAhAAIAvCFgAgNARIAYAAIgLgkIAAAAg");
	this.shape_15.setTransform(193.45,6.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAQBDIgYgvIgKAAIAAAvIgkAAIAAiEIA1AAQANgBAJADQAJACAIAFQAIAGADAHQAEAJAAAMQAAAPgHAJQgHAKgNAEIAdAzgAgSgGIAPAAQAKAAAFgEQAFgCAAgJQAAgIgFgEQgGgDgJgBIgPAAg");
	this.shape_16.setTransform(180.825,6.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_17.setTransform(168.825,6.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgtBDIAAiEIAkAAIAABmIA3AAIAAAeg");
	this.shape_18.setTransform(158,6.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_19.setTransform(146.85,6.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWBBQgLgEgIgIQgJgJgFgNQgEgOAAgRQgBgKADgLQADgLAEgHQADgHAGgGQAFgFAIgEQAFgDAKgDQAIgBAHAAQAPAAAIADQAKADAHAGQAHAGADAIQAFAHABAJIgiAKIgDgJIgEgHIgGgFQgDgBgGAAQgFAAgFACQgFADgEAFQgDAEgCAIQgBAHAAAJQAAAKABAHQACAHAEAFQACAFAGADQAFADAGAAQAFAAAEgBIAGgFIAFgIIAEgLIAhAHIgGATQgEAIgIAHQgHAGgKAEQgLADgMAAQgMAAgMgEg");
	this.shape_20.setTransform(134.2,6.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVBBQgMgEgIgIQgJgJgEgNQgFgMAAgTQAAgKACgLQADgKADgIQAGgJAEgEQAGgGAHgDIAPgGIAPgBQAPAAAJADQAKADAGAGQAGAGAFAIQAEAHACAJIgiAKIgDgJIgFgHIgGgFQgDgBgGAAQgFAAgGACQgFAEgDAEQgDAGgCAGQgBAIAAAIQAAAKACAHQABAHAEAFQACAFAGADQAFADAFAAQAGAAAEgBIAGgFQADgDACgFIADgLIAiAHQgCALgEAIQgFAJgGAGQgJAGgIAEQgMADgMAAQgLAAgMgEg");
	this.shape_21.setTransform(121.025,6.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAcBDIgIgZIgqAAIgIAZIghAAIAwiFIAfAAIAwCFgAgNARIAZAAIgMgkIgBAAg");
	this.shape_22.setTransform(108,6.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag6BDIAAiEIA+ABQAJAAAJAEQAJAEAGAEQAGAFAFAIQAFAHADAKQADAKAAAMQAAAMgDALQgDAKgFAHQgFAIgHAEQgHAGgHADQgIADgKABIgSACgAgWAlIAKAAQALAAAFgCQAGgBAFgGQAEgFACgGQABgHAAgKQAAgJgBgHQgCgGgEgFQgEgFgHgCQgFgCgLAAIgKAAg");
	this.shape_23.setTransform(90.725,6.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAZBDIgxhKIgBAAIAABKIgjAAIAAiEIAmAAIAvBJIAAhJIAkAAIAACEg");
	this.shape_24.setTransform(76.95,6.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAcBDIgJgZIgoAAIgJAZIghAAIAviFIAhAAIAvCFgAgNARIAYAAIgLgkIAAAAg");
	this.shape_25.setTransform(63.175,6.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag1BDIAAiEIA/AAIAOACQAFABAHAFQAFACAEAGQAFAFACAHQACAIAAAJQAAAJgCAIQgCAGgFAFQgEAGgGADIgNAFQgIACgEAAIgbABIAAAqgAgRgCIAPAAQAFAAAFgBQAEgBACgDQADgDABgCIAAgHIAAgHQgBgDgDgCIgGgEQgFgBgFgBIgPAAg");
	this.shape_26.setTransform(46.75,6.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPBDQgHgBgJgEQgEgCgJgHQgGgFgEgJQgEgGgEgLQgCgLAAgLQAAgKACgLQAEgMAEgGQAFgIAFgFQAGgFAHgEQAGgDAKgDQAIgBAHAAIAQABIAPAGQAIAEAGAFQAGAFAFAIQAEAIADAKQACAKAAALQAAAMgCAKQgDAJgEAIQgFAJgGAFQgIAGgGADQgHAEgIABIgQACIgPgCgAgMgkQgGADgDAFQgDAEgCAJQgCAGAAAJQAAAKACAHQACAIADAEQADAFAGADQAGADAGAAQAIAAAEgDQAGgDADgFQAFgFACgHQABgKAAgHQAAgGgBgJQgCgHgFgGQgDgFgGgDQgFgCgHAAQgFAAgHACg");
	this.shape_27.setTransform(33.15,6.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAWBDIAAg2IgrAAIAAA2IgkAAIAAiEIAkAAIAAAxIArAAIAAgxIAkAAIAACEg");
	this.shape_28.setTransform(19.1,6.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgSBDQgJgCgIgFQgGgDgHgHQgFgGgEgHIAagQIAHAIIAIAHIAKAEIAJABIAIgBIAGgCIAEgDQACgCAAgEQAAgCgCgDIgGgEIgHgDIgggJIgKgFQgGgDgDgDQgEgEgCgGQgCgFAAgIQAAgLADgHQAEgIAHgFQAHgGAJgCQAKgDALAAQAIAAAKACQALADAFADIAMAIIAJAKIgYAUIgHgHIgIgFIgJgEIgHgBQgQAAAAAKIACAGIAFAEIAHADIAfAJIALAFQAGACADAEQAEADADAHQACAGAAAHQAAAIgDAHQgDAHgHAHQgGAGgLADQgLAEgPAAQgJAAgLgCg");
	this.shape_29.setTransform(5.825,6.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,222.6,31.9), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.img03();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,300,250), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAlBCIAAhRIgWBRIgeAAIgThHIgDgLIAABSIgjAAIAAiEIAzAAIAXBaIAVhaIAyAAIAACEg");
	this.shape.setTransform(166.4,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYBAQgLgEgHgGQgHgJgDgJQgDgMAAgMIAAhPIAkAAIAABPQAAAOAFAGQAEAGAKAAQALAAAFgGQAEgGAAgOIAAhPIAkAAIAABPQAAAMgDAMQgDAJgHAJQgHAGgLAEQgKAEgPgBQgOABgKgEg");
	this.shape_1.setTransform(151.475,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZBCIgyhJIAABJIgjAAIAAiEIAmAAIAvBKIABAAIAAhKIAjAAIAACEg");
	this.shape_2.setTransform(138.225,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBCIAAiEIAjAAIAACEg");
	this.shape_3.setTransform(127.85,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBCIAAhlIgnAAIAAgfIBxAAIAAAfIgnAAIAABlg");
	this.shape_4.setTransform(118.95,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcBDIgJgZIgoAAIgJAZIghAAIAviFIAhAAIAvCFgAgNARIAYAAIgLgkIAAAAg");
	this.shape_5.setTransform(106.625,24.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtBCIAAiEIAkAAIAABoIA3AAIAAAcg");
	this.shape_6.setTransform(95.35,24.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1BCIAAiEIA/ABIAOADQAGABAGADQAHAEADAEQADAFADAIQACAGAAALQAAALgCAGQgDAHgEAEQgFAGgFADQgEACgIACIgOACIgaABIAAAqgAgRgCIAQAAQAFAAAEgCQACAAAFgDQACgDABgDIAAgGIAAgHQgBgEgCgCIgHgDQgEgBgFAAIgQAAg");
	this.shape_7.setTransform(83.9,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBCIAAg3IguhNIAlAAIAaAwIAcgwIAkAAIguBNIAAA3g");
	this.shape_8.setTransform(66.7,24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1hCIA4AAIAWADIALADIAIAGIAGAJQACAEAAAIQAAAIgCAEQgCAGgEADQgEAFgFACIgKACIAAABQAGABAGABQAFADAEADQAEADACAGQACAJAAAFQAAAFgCAIQgCAHgEADQgDAEgFADQgGAEgFABIgLACIhFAAgAgSAnIASAAQAJAAAFgDQAFgEAAgHQAAgHgFgDQgEgDgKgBIgSAAgAgSgNIARAAIAIgBIAFgCIADgEIABgFIgBgGIgDgDIgFgDIgHgBIgSAAg");
	this.shape_9.setTransform(54.025,24.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbBAQgMgFgHgKQgHgJgDgNQgEgMAAgPQAAgPAEgNQAFgNAIgJQAIgJALgEQAMgFAOAAQAKAAAIACQAHABAJAFQAIAGAFAIQAGAIADANIghAJIgEgKQgDgFgDgCQgCgDgEgBIgHgBIgJABQgFACgDAFQgEAFgCAGQgDAJAAAKQAAAIACAHIADALQADAFADACIAGAFIAGACIAEAAQAJAAAGgEQAGgEADgIIgUAAIAAgZIA2AAIAABDIgcAAIAAgRIgBAAIgDAGQgDAEgEACQgEAEgGACQgGACgGAAQgPAAgMgFg");
	this.shape_10.setTransform(167.175,6.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZBCIgxhJIgBAAIAABJIgjAAIAAiEIAmAAIAvBKIABAAIAAhKIAjAAIAACEg");
	this.shape_11.setTransform(153.8,6.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRBCIAAiEIAjAAIAACEg");
	this.shape_12.setTransform(143.45,6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAZBCIgxhJIgBAAIAABJIgjAAIAAiEIAmAAIAvBKIABAAIAAhKIAjAAIAACEg");
	this.shape_13.setTransform(133.625,6.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRBCIAAiEIAjAAIAACEg");
	this.shape_14.setTransform(123.3,6.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag6BCIAAiEIA+ACQAKABAIADQAHADAIAGQAFADAGAIQAFAIADAKQADAKgBAMQABALgDALQgEALgEAHQgEAGgHAHQgIAFgIADQgIADgJACIgSAAgAgWAmIAKAAQAMAAAEgCQAHgCAEgFQAEgFACgHQACgIgBgJQABgJgCgGQgDgIgDgEQgEgEgHgCQgFgCgLAAIgKAAg");
	this.shape_15.setTransform(113.85,6.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgwBCIAAiEIBeAAIAAAfIg6AAIAAAVIApAAIAAAbIgpAAIAAAZIA9AAIAAAcg");
	this.shape_16.setTransform(96.5,6.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSBDIgtiFIAkAAIAbBVIAchVIAjAAIgtCFg");
	this.shape_17.setTransform(84.2,6.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPBDQgHgBgIgEQgGgDgIgGQgHgGgEgIQgFgIgCgJQgCgIAAgOQAAgNACgIQACgKAFgIQAFgHAGgGQAGgFAIgEQAFgDAKgDQAIgBAHAAIAQABIAPAGQAIAEAGAFQAHAGAEAHQAFAIACAKQACAIAAANQAAAOgCAIQgCAJgFAIQgEAIgHAGQgIAGgGADQgIAEgHABIgQACIgPgCgAgMgkQgFADgEAFQgEAGgBAHQgCAGAAAJQAAAKACAHQABAGAEAGQAEAFAFADQAGADAGAAQAHAAAGgDQAFgDAEgFQAEgGABgGQACgHAAgKQAAgJgCgGQgBgHgEgGQgEgFgFgDQgHgCgGAAQgFAAgHACg");
	this.shape_18.setTransform(71.425,6.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgtBCIAAiEIAkAAIAABoIA3AAIAAAcg");
	this.shape_19.setTransform(59.55,6.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAWBCIAAg1IgrAAIAAA1IgkAAIAAiEIAkAAIAAAyIArAAIAAgyIAkAAIAACEg");
	this.shape_20.setTransform(41.875,6.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRBCIAAhlIgmAAIAAgfIBvAAIAAAfIgmAAIAABlg");
	this.shape_21.setTransform(29.075,6.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRBCIAAiEIAjAAIAACEg");
	this.shape_22.setTransform(20.15,6.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAUBCIgShRIAAAAIgTBRIggAAIgjiEIAkAAIARBPIABAAIABgIIAPhHIAgAAIAQBHIACAIIAAAAIAPhPIAiAAIgjCEg");
	this.shape_23.setTransform(8.45,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173.7,31.8);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgtBDIAAiFIAkAAIAABnIA3AAIAAAeg");
	this.shape.setTransform(149.85,24.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBDIAAiFIAkAAIAABnIA3AAIAAAeg");
	this.shape_1.setTransform(139.3,24.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBDIAAiFIAjAAIAACFg");
	this.shape_2.setTransform(130.5,24.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BDIAAiFIA4AAIAWACIALAEQAFACADAEQADADADAFQACAFAAAIQAAAGgCAHQgCAFgEAEQgDADgGACIgKAEIAMACQAFACAEAEIAGAJQACAHAAAHQAAAHgCAGQgBAFgFAFQgEAFgEACIgLAEIgLADIgMABgAgSAnIASAAQAJAAAFgEQAEgDAAgHQAAgGgEgEQgEgEgKAAIgSAAgAgSgNIARAAIAIAAIAFgDIADgEIABgFIgBgGIgDgEIgFgCIgHgBIgSAAg");
	this.shape_3.setTransform(121.175,24.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag6hCIA+ACQAKABAIADQAJADAGAFQAIAGADAHQAEAGAEALQADAIgBAOQABAOgDAIQgDAKgFAIQgFAIgGAEQgIAGgIADQgGADgLABIg+ACgAgWAlIAKAAQAMAAAEgCQAIgCADgEQAEgGACgGQACgIgBgJQABgJgCgHQgCgGgEgFQgEgEgHgDQgFgCgLAAIgKAAg");
	this.shape_4.setTransform(103.25,24.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBDIgQgFQgHgEgGgFQgFgFgGgIQgEgHgDgLQgDgLAAgLQAAgKADgLQACgJAFgJQAGgIAFgFQAHgGAGgDQAJgEAHgBQAHgCAIAAQAIAAAIACQAHABAIAEQAHADAHAGQAFAFAGAIQAEAKADAIQADAKAAALQAAANgDAJQgDAKgEAIQgGAIgFAFQgGAFgIAEQgJAEgGABQgIACgIAAQgIAAgHgCgAgMgjQgFACgEAFQgDAEgCAJQgDAGAAAJQAAAKADAHQACAIADAEQAEAGAFACQAGADAGAAQAIAAAEgDQAFgCAEgGQAFgFACgHQACgKAAgHQAAgFgCgKQgCgHgFgGQgDgFgGgCQgEgDgIAAQgGAAgGADg");
	this.shape_5.setTransform(89.2,24.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBDIgPgFQgIgEgGgFQgFgFgGgIQgEgIgDgKQgDgJAAgNQAAgLADgKQADgIAEgKQAGgIAFgFQAHgGAHgDQAJgEAGgBQAIgCAHAAQAKAAAGACQAHABAJAEQAHADAGAGQAFAFAGAIQAEAHADALQADALAAAKQAAALgDALQgEAMgDAGQgGAIgFAFQgGAFgHAEIgQAFQgGACgKAAQgHAAgIgCgAgMgjQgEACgEAFQgFAGgCAHQgBAHAAAIQAAAJABAIQACAHAFAFQAEAGAEACQAGADAGAAQAHAAAGgDQAEgCAFgGQAEgGABgGQADgHAAgKQAAgJgDgGQgBgHgEgGQgEgFgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_6.setTransform(75.05,24.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtBDIAAiFIBbAAIAAAeIg3AAIAAAbIAmAAIAAAbIgmAAIAAAxg");
	this.shape_7.setTransform(63.4,24.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQBDIgYgvIgKAAIAAAvIgkAAIAAiFIA1AAQAKAAAMADQAKACAHAFQAIAGADAIQAEAJAAALQAAAPgHAJQgGAJgOAFIAdAzgAgSgGIAPAAQALAAAEgEQAGgDAAgIQAAgIgGgEQgEgDgLAAIgPAAg");
	this.shape_8.setTransform(46.525,24.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYBAQgKgEgIgHQgGgIgEgJQgDgLAAgNIAAhPIAkAAIAABPQAAAOAFAGQAEAGAKAAQALAAAFgGQAEgGAAgOIAAhPIAkAAIAABPQAAANgDALQgEAJgGAIQgIAHgKAEQgLAEgOAAQgNAAgLgEg");
	this.shape_9.setTransform(33.45,25.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPBDQgHgBgIgEQgHgEgHgFQgFgFgGgIQgEgHgDgLQgDgLAAgLQAAgKADgLQACgJAFgJQAGgIAFgFQAHgGAHgDQAHgEAIgBQAHgCAIAAQAIAAAIACQAHABAIAEQAIADAGAGQAGAFAFAIQAEAJADAJQACALABAKQgBALgCALQgDALgEAHQgFAIgGAFQgGAFgIAEIgPAFQgIACgIAAQgIAAgHgCgAgMgjQgEACgFAFQgDAGgCAHQgDAKAAAFQAAAHADAKQACAHADAFQAFAGAEACQAGADAGAAQAIAAAEgDQAEgCAGgGQADgEADgIQACgHAAgKQAAgJgCgGQgDgJgDgEQgFgFgFgCQgEgDgIAAQgGAAgGADg");
	this.shape_10.setTransform(19.9,24.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSBDIAAg4IguhNIAlAAIAbAwIAbgwIAlAAIgvBNIAAA4g");
	this.shape_11.setTransform(6.45,24.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgtBDIAAiFIBbAAIAAAeIg3AAIAAAbIAmAAIAAAbIgmAAIAAAxg");
	this.shape_12.setTransform(181.45,6.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgtBDIAAiFIBbAAIAAAeIg3AAIAAAbIAmAAIAAAbIgmAAIAAAxg");
	this.shape_13.setTransform(170.9,6.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPBDIgPgFQgIgEgGgFQgGgFgEgIQgEgGgEgMQgDgLABgLQgBgKADgLQADgLAFgHQAEgIAGgFQAHgGAHgDQAIgEAHgBQAGgCAJAAQAIAAAIACQAIABAHAEQAIADAFAGQAHAFAEAIQAGAKABAIQADAKAAALQAAANgDAJQgBAKgGAIQgEAIgHAFQgFAFgIAEQgIAEgHABQgIACgIAAQgJAAgGgCgAgLgjQgGACgEAFQgDAEgDAJQgBAGAAAJQAAAKABAHQADAIADAEQAFAGAFACQAFADAGAAQAHAAAGgDQAEgCAFgGQAEgFABgHQACgKAAgHQAAgFgCgKQgBgHgEgGQgEgFgFgCQgGgDgHAAQgGAAgFADg");
	this.shape_14.setTransform(158.1,6.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAsBBQgGgCgGgHQgFgFgDgJQgCgJgBgJQABgKACgJQADgIAFgGQAFgFAHgEQAHgCAJAAQAKAAAGACQAIAEAEAFQAEAGAEAIQADAJAAAKQAAAJgDAJQgEAJgEAFQgFAHgHACQgGAEgKAAQgJAAgHgEgAA0AHQgCAHAAAKQAAALADAGQACAGAFAAQAGAAABgGQACgFAAgMQAAgMgCgFQgCgHgFAAQgGAAgCAHgAg2BDIBOiEIAfAAIhPCEgAhLASQgHgEgFgFQgGgGgCgHQgCgIAAgKQAAgKACgJQADgJAFgFQAFgHAHgCQAHgDAJAAQAJAAAHADQAHACAFAHQAFAFADAJQACAJAAAKQAAAJgCAJQgDAHgFAGQgEAGgIADQgHADgJABQgJgBgHgDgAhDgnQgBAEgBANQABAMABAEQADAGAFAAQAGAAACgGQACgGAAgKQAAgMgCgFQgCgHgGAAQgFAAgDAHg");
	this.shape_15.setTransform(135.65,6.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYBAQgKgFgIgJQgHgIgEgOQgEgLAAgRQAAgQAEgLQAEgOAHgIQAIgJAKgFQAMgFAMAAQAMAAANAFQAKAFAIAJQAHAJAEANQAEANAAAOQAAAPgEANQgEANgHAJQgIAJgKAFQgLAFgOAAQgNAAgLgFgAgQgdQgGAKABATQgBAVAGAKQAGAKAKAAQAMAAAEgKQAGgKAAgVQAAgTgGgKQgGgKgKAAQgLAAgFAKg");
	this.shape_16.setTransform(118.95,6.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQBDIgOgDQgIgDgEgCIgLgGIARgYIAQAIIAJACIAIABQAKAAAGgFQAFgFAAgJQAAgKgEgFQgGgFgJAAQgFgBgGADQgHAEgEAEIgWgHIAFhHIBUAAIgCAaIg3AAIgCAYIAJgFIAHgCIAJAAQAMAAAHADQAIADAGAHQAGAHACAGQADAHAAALQAAALgEAIQgDAJgIAHQgHAFgKAFQgKADgMAAIgQgBg");
	this.shape_17.setTransform(107.025,7.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPBDIgPgFQgIgEgGgFQgGgFgEgIQgFgHgDgLQgDgLABgLQgBgKADgLQADgJAFgJQAEgIAGgFQAHgGAHgDQAIgEAHgBQAHgCAIAAQAIAAAIACQAHABAIAEQAIADAFAGQAGAFAFAIQAGAKABAIQADAKAAALQAAANgDAJQgBAKgGAIQgFAIgGAFQgFAFgIAEQgJAEgGABQgIACgIAAQgIAAgHgCgAgLgjQgHACgDAFQgDAEgDAJQgBAGAAAJQAAAKABAHQADAIADAEQAEAGAGACQAFADAGAAQAHAAAFgDQAGgCADgGQAFgFABgHQACgKAAgHQAAgFgCgKQgBgHgFgGQgDgFgGgCQgFgDgHAAQgGAAgFADg");
	this.shape_18.setTransform(89.6,6.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgmAAIAAgeIBvAAIAAAeIgmAAIAABng");
	this.shape_19.setTransform(76.675,6.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag1BDIAAiFIA/ABIAOACQAIADAEACQAGAEADAFQAEAEADAIQACAIAAAJQAAAJgCAIQgDAHgEAEQgGAGgEACQgHAEgFABIgOADIgaAAIAAArgAgRgCIAYgBIAHgEQACgCABgDIABgHIgBgHQgBgEgCgCIgHgDIgJgBIgPAAg");
	this.shape_20.setTransform(60.875,6.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYBAQgLgEgHgHQgHgIgDgJQgDgMAAgMIAAhPIAkAAIAABPQAAANAFAHQAEAGAKAAQAMAAAEgGQAFgGgBgOIAAhPIAkAAIAABPQAAANgDALQgDAJgHAIQgGAHgMAEQgLAEgOAAQgNAAgLgEg");
	this.shape_21.setTransform(47.85,7.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgmAAIAAgeIBvAAIAAAeIgmAAIAABng");
	this.shape_22.setTransform(31.1,6.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgwBDIAAiFIBeAAIAAAeIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_23.setTransform(19.85,6.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgbBAQgNgGgGgJQgHgJgDgNQgEgMAAgPQAAgPAFgNQADgMAJgJQAJgKAKgEQAOgFAMAAQAHAAALACQAJABAHAGQAHAEAGAJQAFAHAEAOIghAKIgEgLIgGgHIgGgEIgHgBQgFAAgEACQgEABgEAFQgEAEgCAHQgDAJAAAKQAAAIACAHIADALQACAEAEAEIAGAEIAGACIAEAAQAJAAAGgEQAGgEADgHIgUAAIAAgaIA2AAIAABEIgcAAIAAgSIgBAAIgDAGIgHAHQgDACgHADQgGACgGAAQgPAAgMgFg");
	this.shape_24.setTransform(6.625,6.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.1,31.9);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.img02();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.008)"],[0,1],0,0,0,0,0,81.3).s().p("Ao6I6QjrjsgBlOQABlNDrjtQDtjrFNgBQFOABDsDrQDtDtgBFNQABFOjtDsQjsDtlOgBQlNABjtjtg");
	this.shape.setTransform(80.65,80.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161.3,161.3);


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
	this.instance = new lib.card();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,259,164);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAWIgEgDIgDgFIgBgIIABgGIADgGIAEgDIAFgBQADAAACABQACABACADIAAgRIAKAAIAAAlIABAIIgKAAIgBgBIAAgDIAAgBIgCACIgEADIgDAAgAgEAAQgCACAAAEIAAAEIACADIACACIACABIADgBIACgBIABgCIAAgMIgDgBIgDgBQAAAAgBAAQgBAAAAABQgBAAAAAAQgBABAAAAg");
	this.shape.setTransform(64.425,9.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKARIAAggIAKAAIAAAFIABgCIACgCIAHgCIABAAIAAAJIgBAAIgBgBIgBAAIgDABIgCABIgCABIgBACIAAAUg");
	this.shape_1.setTransform(61.225,10.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJARIgDgCQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgBgEIABgFIAEgDIAHgCQADgCAFAAIAAgBIgBgDIgDgBIgFACIgFADIgEgGIACgCIAEgCIAFgCIAEAAIAGABIAEACIACAEIABAGIAAAMIABAIIgKAAIgBgDIAAgCIgFAEQgCABgDAAgAgCADQgBAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAIABADIADABIADgBIADgCIAAgGIgHACg");
	this.shape_2.setTransform(58.025,10.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAXQgFgCgCgDQgDgDgCgEQgBgFAAgGQAAgFABgEQACgFADgDQADgDAEgBIAGgCQAFAAADACQADAAADADIADAEQACADAAADIgKADIgBgEIgCgDIgCgBIgEgBIgDABIgDADIgDAFIAAAFIAAAHIADAFQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAIAEABIAEgBIACgCIACgDIACgEIAJACIgDAHIgDAFIgGADIgIABIgGgBg");
	this.shape_3.setTransform(53.9,9.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAFAXIgFgBIgEgCIgBgEIgBgDIAAgQIgFAAIAAgHIAFAAIAAgLIAJAAIAAALIAJAAIAAAHIgJAAIAAAOIABADIACABIAFAAIAAgBIAAAIIgCAAIgCABg");
	this.shape_4.setTransform(48.725,9.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAXIAAggIAJAAIAAAggAgEgOIAAgIIAJAAIAAAIg");
	this.shape_5.setTransform(46.4,9.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAWIgFgDIgCgFIgBgIIABgGIACgGIAFgDQACgBADAAQADAAACABIAEAEIAAgRIAKAAIAAApIABAEIgLAAIAAgBIAAgCIAAgCIgCACIgCABIgCACIgEAAgAgFAAQgBACAAAEIAAAEIABADIACACIADABIADgBIABgBIACgCIAAgMIgEgBIgCgBQgDAAgCACg");
	this.shape_6.setTransform(43.4,9.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEAQIgGgCIgDgGQgCgDAAgFIABgFIACgEIADgDIADgCIAEgCIADAAIADAAIAEABIAGAGIABAFIABAFIAAACIgVAAIABADIACADIACABIACAAIAFgBIAFgDIADAGIgGAEIgIABIgFgBgAgCgHIgCACIgBADIAMAAIgCgFQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgBAAg");
	this.shape_7.setTransform(39.525,10.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKARIAAggIAKAAIAAAFIAAAAIABgCIACgCIAIgCIAAAJIgBAAIAAgBIgCAAIgDABIgCABIgDADIAAAUg");
	this.shape_8.setTransform(36.425,10.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAXQgEgCgCgDQgDgDgCgEQgBgFAAgGQAAgFABgEQACgFADgDQADgDADgBIAHgCQAFAAADACQADAAADADIADAEIACAGIgKADIgBgEIgCgDIgCgBIgEgBIgDABIgEADIgCAFIAAAFIAAAHIACAFIAEADIADABIAFgBIACgCIACgDIABgEIAKACIgDAHIgDAFQgDACgDABIgIABIgHgBg");
	this.shape_9.setTransform(32.65,9.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPARIAAgWIgBgCIgBgBIgBAAIgEABIgDACIAAAWIgJAAIAAgUIgBgEIgBgBIgCAAIgDABIgDACIAAAWIgKAAIAAggIAKAAIAAAFIAEgEIADgCIAEAAIADAAIAEADIABADIABgCIADgCIAGgCIAFABIADACIACADIAAAEIAAAXg");
	this.shape_10.setTransform(25.825,10.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAQIgDgBIgCgDIgBgFIAAgXIALAAIAAAUIABAEIACABIADgBIAEgCIAAgWIAKAAIAAAgIgKAAIAAgFIgFAEIgCABIgEABg");
	this.shape_11.setTransform(20.85,10.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAGARIAAgUIgBgEQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBgBgBAAIgCABIgDACIAAAWIgKAAIAAggIAKAAIAAAFIABgCIACgCIADgCIAEAAIADAAIAEACIACAEIAAAEIAAAXg");
	this.shape_12.setTransform(16.9,10.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEAXIAAggIAJAAIAAAggAgEgOIAAgIIAJAAIAAAIg");
	this.shape_13.setTransform(13.925,9.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAFAXIgFgBIgEgCIgBgEIgBgDIAAgQIgFAAIAAgHIAFAAIAAgLIAJAAIAAALIAJAAIAAAHIgJAAIAAAOIABADIACABIAFAAIAAgBIAAAIIgCAAIgCABg");
	this.shape_14.setTransform(11.525,9.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJARIgDgCQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgBgEIABgFIAEgDIAHgCQADgCAFAAIAAgBIgBgDIgDgBIgFACIgFADIgEgGIACgCIAEgCIAFgCIAEAAIAGABIAEACIACAEIABAGIAAAMIABAIIgKAAIgBgDIAAgCIgFAEQgCABgDAAgAgCADQgBAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAIABADIADABIADgBIADgCIAAgGIgHACg");
	this.shape_15.setTransform(8.275,10.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEAXIAAgtIAJAAIAAAtg");
	this.shape_16.setTransform(5.5,9.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAXIAAgtIARAAIAIABIAEACQAAAAABAAQAAABAAAAQABAAAAABQAAAAABAAIACAFIABAEIgBAGIgCADIgDADIgEACIgIABIgHAAIAAAQgAgHAAIAHAAIADgBIADgBQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIABgDIgBgDIgBgCIgDgBIgDgBIgHAAg");
	this.shape_17.setTransform(2.525,9.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEANIgFgDIgDgEIgBgGQAAgCABgDQABgDACgBQABgCAEgBIAEgBIAGABQADABABACQACABABADQABADABACQgBADgBACQgBADgCACIgEADIgGABgAgDgKIgFACIgCAEIgBAEIABAFIACADIAFADIADABQABAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIADgDIADgDIABgFIgBgEIgDgEIgDgCIgFgBgAADAHIgDgGIgBAAIAAAGIgDAAIAAgOIAEAAIAFABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABIAAACQgBAAAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAIAEAGgAgBAAIABAAIACgBIABgBIgBgCIgCgBIgBAAg");
	this.shape_18.setTransform(67.2,1.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHAQIgEgCIgCgCIAEgFIAEADIADABIACABIAFgBQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAgBIgBgBIgBgBIgDgBIgCgBIgCAAIgGgDIgCgBIgBgCIgBgDIABgEIADgDIADgCIAFgBIAEABIADABIAGACIgEAGIgEgDIgFgBIgCAAIgBABIgBABIgBACIABABIACACIAEABIAIACIACACIACAFQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBABAAAAIgEABIgJABg");
	this.shape_19.setTransform(63.925,3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAQIgGgEIAEgFIACACIAFACIACABIAFgBQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAgBIgBgBIgBgBIgDgBIgCgBIgCAAIgGgDIgCgBIgBgCIgBgDIABgEIADgDIADgCIAFgBIAEABIADABIAGACIgEAGIgEgDIgFgBIgCAAIgBABIgBABIgBACIABABIACACIAEABIAIACIACACIACACIAAADIgBAFIgDADIgEABIgJABg");
	this.shape_20.setTransform(60.675,3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEAQIgFgDIgDgFQgCgDAAgFIABgEIACgFIAFgFIAHgCIAEABIADABIADACIACADQAAABABAAQAAABAAAAQAAABAAABQABAAAAABIAAAFIAAACIgVAAIAAADIADADQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIACAAIAEAAIAEgCIACgCIAEAFIgGADQgEACgEAAgAgBgJIgCABIgCADIgBADIAOAAQAAgEgCgCQgBgCgFAAg");
	this.shape_21.setTransform(57.3,3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJARIAAggIAIAAIAAAFIABgCIAFgDIAEgBIABAAIgBAHIgBAAIgDABIgEABIgCAEIAAAUg");
	this.shape_22.setTransform(54.5,2.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPAXIAAgsIAIAAIAAAEIACgCIACgBIADgBIACgBIAGABIAEADIADAGIABAHIgBAGQgCAEgCACIgEADIgGABIgDgBQgEAAgBgDIAAAQgAgBgPIgFACIgBACIAAAMIADADIAEABQADAAADgDQACgDAAgEQAAgEgCgEQgCgCgEgBg");
	this.shape_23.setTransform(51.25,3.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAHAQIgHgLIgHALIgIAAIAMgQIgLgPIAIAAIAGAKIAHgKIAIAAIgLAPIAMAQg");
	this.shape_24.setTransform(47.65,3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOAXIAAgtIAcAAIAAAHIgUAAIAAAMIAOAAIAAAFIgOAAIAAAOIAVAAIAAAHg");
	this.shape_25.setTransform(44.1,2.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAHARIAAgVQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAAAIgEgBIgEABIgEADIAAAWIgIAAIAAggIAIAAIAAAFIACgCIADgCIACgBIAEgBIAEABIADACIACADIABAEIAAAXg");
	this.shape_26.setTransform(38.825,2.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAQIgDgBIgCgDIgBgEIACgEQAAgDADgBQADgCAEAAIAJgCIAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAIgCAAIgDABIgFAEIgDgFIADgCIAIgDIADgBIAGABIADACIADADIAAAGIAAASIABACIgHAAIgBgBIAAgCIgGADIgGABgAgDADQgDABgBADQAAABABAAQAAABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIAEgBIAFgDIAAgHIgKADg");
	this.shape_27.setTransform(35.15,3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEAQIgFgDIgDgFQgCgDAAgFIABgEIACgFIAGgFIADgBIADgBIAFABIAEACIADADIACAEIgHACQAAgDgCgCIgFgBIgCABIgDACIgBADIgBAEQAAAGACACQACADADAAIAEgBIACgCIACgDIAGACIgCAFIgDADIgEABIgFABg");
	this.shape_28.setTransform(31.725,3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDAWIAAgfIAHAAIAAAfgAgDgPIAAgHIAHAAIAAAHg");
	this.shape_29.setTransform(29.2,2.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJARIAAggIAIAAIAAAFIABgCIAFgDIAFgBIAAAAIAAAHIgCAAIgEABIgCABIgCACIgBACIAAAUg");
	this.shape_30.setTransform(27.275,2.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEAQIgFgDIgEgFIgBgIIABgEIACgFIACgDIAEgCIADgBIACgBIAEABIADABIADACIADADIACAFIAAAFIAAACIgWAAIACADIABADIADACIACAAIADAAIAEgCIACgCIAFAFIgHADQgDACgEAAgAgBgJIgCABIgCADIgCADIAPAAQAAgDgCgDQgCgCgEAAg");
	this.shape_31.setTransform(24.1,3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AARARIAAgVIgBgCIAAgCIgBgBIgDAAIgEABIgEADIAAAWIgHAAIAAgXIgBgCIgBgBIgDAAIgEABIgCABIgCACIAAAWIgIAAIAAggIAIAAIAAAEIACgCIADgBIADgBIAEgBIADABIABABIACABIACADIAEgEIADgBIAEgBIAEABIADACIACADIABAEIAAAXg");
	this.shape_32.setTransform(19.5,2.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAMAXIgEgLIgQAAIgEALIgHAAIAQgtIAGAAIARAtgAgGAGIAMAAIgGgSg");
	this.shape_33.setTransform(14.5,2.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAQIgFgDQgDgCgBgDQgBgDAAgFIAAgEIACgFIAHgFIADgBIADgBIADABIAEABIADACIACADIABAFIABAFIAAACIgVAAIABADIABADQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIADAAIACAAIAFgCIACgCIADAFIgFADQgEACgEAAgAgBgJIgDABIgBADIgBADIAOAAQAAgDgCgDQgCgCgDAAg");
	this.shape_34.setTransform(9.2,3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAHAXIAAgWQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgEABIgEACIAAAXIgIAAIAAgtIAIAAIAAASIAEgEIADgBIAEAAIAEAAIADACIACADIAAAEIAAAXg");
	this.shape_35.setTransform(5.6,2.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgOAAIAAgIIAjAAIAAAIIgOAAIAAAlg");
	this.shape_36.setTransform(1.775,2.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,68.7,12), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAcIACgGIAFABQAEAAABgBQADgBAAgDIADgFIgRgpIAIAAIALAhIAAAAIAMghIAHAAIgUAyIgCAFIgEABIgKABg");
	this.shape.setTransform(42.2,4.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAeIAAg7IAGAAIAAA7g");
	this.shape_1.setTransform(38.9,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAeIAAg6IAHAAIAAAGIAFgFQAEgCAEABIAHAAQADACACADIAEAGIABAKQAAAGgBADQgBADgDAEIgFAEIgIABQgDAAgDgBIgGgFIAAAWgAgGgVIgFAFIAAASQAFAGAGAAQAHAAACgDQADgEAAgIQAAgIgDgEQgEgDgEAAQgEAAgDABg");
	this.shape_2.setTransform(35.35,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAeIAAg6IAHAAIAAAGIAGgFQACgCAFABIAHAAIAFAFIAEAGIABAKIgBAJIgEAHIgGAEIgHABIgGgBIgGgFIAAAWgAgFgVIgGAFIAAASQAGAGAFAAQAGAAADgDQADgEAAgIQAAgHgDgFQgEgDgFAAQgCAAgDABg");
	this.shape_3.setTransform(30.325,4.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOATQgDgDAAgFIABgGQACgDADgCIAJgDQAFgCAHAAIAAgCQAAgIgIAAQgDAAgEACIgHAEIgEgEQAEgEAFgCQAEgCAGAAIAGABQADABACACIACAEIABAeIABAEIgHAAIgBgCIAAgEQgHAHgIAAQgFAAgEgDgAAAABIgGACIgDADIgBAEQAAABAAABQAAAAAAABQAAAAABABQAAAAABABQABABAEAAQADAAAEgBIAGgFIAAgLg");
	this.shape_4.setTransform(25.325,3.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJATQgDgBgEgDIAEgFIAGAFQADABADAAQAGAAACgBQACgCAAgEQAAgCgCgCIgOgEIgEgCIgEgEIgBgEIABgFIADgDIAFgDIAGgBQAFAAAEACQADABADADIgDAFIgGgEQgDgBgDgBQgEABgCABIgCAEQAAADACABIAOAFIAFABIADAEQABADAAACQAAADgBADQgBACgDACIgFACIgHABQgEAAgFgDg");
	this.shape_5.setTransform(18.725,3.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAdQgEgCgEgEQgEgGgBgEQgCgHAAgGIACgMIAFgJQAEgEAEgCQAFgDAEAAQAFAAADACIAHADQADADACADIACAIIgHABQgCgGgDgEQgEgDgGAAQgDAAgDACQgEABgCADQgCADgBAFIgCAJQAAAMAFAGQAFAGAHAAQANAAADgOIAHACQgBAEgCAEIgFAGIgHAEIgIABQgFAAgEgCg");
	this.shape_6.setTransform(13.8,3.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATAdIgIgEIgIAEQgDACgGAAIgIgBIgHgEIgDgFQgCgCAAgEQAAgDACgDQAAgCADgDIAEgEIAFgCIgDgHIgBgGIABgGIADgEIAEgDQADgCAEAAIAEABIAEADIADAEIABAEQAAAEgCACIgDAEIgEAEIgFADIANARIAEgHIACgJIAHAAIgDALIgFAJIAGADIAGABIAAAHgAgQAHQgCADAAAEQAAAFADADQADADAHAAQAHAAAEgEIgFgFIgEgHIgDgEIgDgEIgHAGgAgHgWQgCADAAADIABAGIACAFIAFgCIACgDIACgDIABgEQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgCgCAAQgEAAgCACg");
	this.shape_7.setTransform(7.875,3.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgSAAIAAgHIArAAIAAAHIgTAAIAAA0g");
	this.shape_8.setTransform(2.225,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-2.7,-1.9,46.900000000000006,9.6), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMAwIgRghIgIAAIAAAhIgaAAIAAhfIAmAAQAJAAAHABIANAGQAEADAEAHQACAGABAIQAAAMgGAFQgEAHgJADIAUAlgAgNgEIALAAQAIAAADgDQAEgCAAgGQAAgGgEgDQgEgCgHAAIgLAAg");
	this.shape.setTransform(110.55,41.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUAwIgGgSIgdAAIgHASIgXAAIAihgIAXAAIAiBggAgJAMIARAAIgIgaIAAAAg");
	this.shape_1.setTransform(101.125,41.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAwIAAhfIBDAAIAAAVIgqAAIAAAQIAeAAIAAATIgeAAIAAASIAsAAIAAAVg");
	this.shape_2.setTransform(92.55,41.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAwIAAgoIgig3IAbAAIATAiIAUgiIAbAAIgiA3IAAAog");
	this.shape_3.setTransform(83.55,41.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUAwIgGgSIgdAAIgHASIgXAAIAihgIAXAAIAiBggAgJAMIARAAIgIgaIAAAAg");
	this.shape_4.setTransform(71.575,41.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAwIAAhfIBDAAIAAAVIgpAAIAAAQIAdAAIAAATIgdAAIAAASIAsAAIAAAVg");
	this.shape_5.setTransform(59.8,41.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAvQgJgDgFgGQgGgFgEgKQgDgJgBgOQABgIABgHIAFgNQADgGAEgDQAEgFAFgCIALgEIAKgBQAMAAAFACQAJAEADADQAEAEAEAGIAFAMIgZAHIgCgGIgEgGIgEgDIgHgBQgDAAgEACQgEABgCAEQgCADgCAGIgBALIABAMIAFAJQACAEADACQAFACACAAQAEAAAEgBIAEgEIAEgFIACgIIAZAFQgCAIgEAGQgCAGgGAEQgEAFgIACQgFADgMAAQgHAAgJgDg");
	this.shape_6.setTransform(50.65,41.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAwIAAhfIAZAAIAABfg");
	this.shape_7.setTransform(43.7,41.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOAwIgNg7IAAAAIgOA7IgVAAIgahfIAaAAIAMA5IANg5IAWAAIAMAzIABAGIAMg5IAXAAIgZBfg");
	this.shape_8.setTransform(35.25,41.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMAwIAAhKIgcAAIAAgVIBQAAIAAAVIgbAAIAABKg");
	this.shape_9.setTransform(24.8,41.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AASBDIgeg2IgKAMIAAAqIgkAAIAAiFIAkAAIAAAxIAjgxIAqAAIgtA1IAxBQg");
	this.shape_10.setTransform(108.975,24.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVBBQgLgDgJgJQgJgJgEgNQgFgMAAgTQAAgMACgJIAGgSQAGgJAEgEQAGgFAHgEIAPgFQAHgCAIAAQAPAAAJADQAKADAGAGQAGAGAFAIQADAGADAKIgiALIgEgJIgEgIQgDgDgDgBQgEgCgFAAQgFAAgGACQgFAEgDAEQgDAFgCAHQgBAIAAAIQAAAJABAIIAFAMQAFAHAEABQAFADAFAAQAGAAADgBQADgBAEgEIAFgIIADgLIAiAHQgBAHgFAMQgFAKgHAFQgGAGgKAEQgMADgMAAQgLAAgMgEg");
	this.shape_11.setTransform(95.275,24.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAbBDIgIgZIgoAAIgJAZIghAAIAviFIAhAAIAvCFgAgNAQIAYAAIgLgkIAAAAg");
	this.shape_12.setTransform(82.25,24.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1BDIAAiFIA4AAIAWACIALAEIAIAFIAGAJQACAFAAAIQAAAHgCAGQgCAFgEAEIgJAFIgKADIAAABIAMACQAFACAEAEQAEADACAGQACAIAAAGQAAAGgCAHQgCAFgEAFQgFAFgDACQgGADgFABIgLADIgMABgAgSAnIASAAQAJAAAFgEQAFgDAAgHQAAgHgFgDQgEgEgKAAIgSAAgAgSgNIARAAIAIgBIAFgCIADgEIABgFIgBgGIgDgEIgFgCIgHgBIgSAAg");
	this.shape_13.setTransform(69.475,24.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYBAQgLgFgHgJQgIgJgDgNQgEgNAAgPQAAgOAEgNQADgNAIgJQAHgJALgFQANgFALAAQANAAALAFQALAFAIAJQAGAIAFAOQAEANAAAOQAAAPgEANQgFAOgGAIQgIAJgLAFQgLAFgNAAQgLAAgNgFgAgQgdQgGAKAAATQAAAVAGAKQAGAKAKAAQALAAAGgKQAFgKAAgVQAAgUgGgJQgFgKgLAAQgLAAgFAKg");
	this.shape_14.setTransform(51.625,24.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYBAQgLgFgHgJQgIgJgDgNQgEgNAAgPQAAgOAEgNQADgNAIgJQAHgJALgFQANgFALAAQANAAALAFQALAFAIAJQAGAIAFAOQAEANAAAOQAAAPgEANQgFAOgGAIQgIAJgLAFQgLAFgNAAQgLAAgNgFgAgQgdQgGAKAAATQAAAVAGAKQAGAKAKAAQALAAAGgKQAFgKAAgVQAAgUgGgJQgFgKgLAAQgLAAgFAKg");
	this.shape_15.setTransform(38.975,24.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgmBDIAAgcIAXAAIAAhJIgLAFIgMABIAAgdQAHAAAGgCQAHgDAEgEIAiAAIAABpIATAAIAAAcg");
	this.shape_16.setTransform(28.775,24.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJBSIAAgPQgKgBgGgDQgHgCgGgEIgKgIIgIgMIAXgPIAGAHIAGAFIAGAGIAHACIAAgeIgRgFQgIgDgHgEQgHgEgEgHQgEgHAAgKQAAgJAEgHQADgIAGgEQAGgGAIgDQAJgEAKAAIAAgMIAUAAIAAANIAOADIALAGQAFACAEAEIAIAJIgaARIgHgJQgFgEgFgCIAAAdIATAFQAJADAGAEQAGAEAEAHQADAHAAAJQAAAIgCAHQgDAGgFAGQgFAFgKAEQgJAEgMABIAAAPgAAKArQAGgCADgCQADgFAAgEQAAgFgDgDQgCgDgHgDgAgQgnQgDADAAAGIAAAEIADAEIADACIAFACIAAgaQgGACgCADg");
	this.shape_17.setTransform(18.675,25.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSBDQgHgCgKgFQgGgDgGgHQgGgFgEgIIAbgQQACAFAEADIAIAHIAKAEIAKABIAHgBIAGgCQADgBACgCIABgGQAAgDgCgCIgFgEIgJgDIgfgJIgKgFQgFgCgEgEQgDgEgDgGQgDgGAAgHQAAgJAFgJQAEgIAGgFQAIgGAIgCQAKgDALAAQAIAAAKACQAIACAIAEQAHAEAFAEIAJAKIgYAUIgHgHIgHgFIgKgEIgHgBQgQAAAAAKQAAAEACACQABACAEACIAHADIAfAJIAMAFQAFACAEAEQAEADACAHQADAGAAAHQAAAIgEAHQgCAIgIAGQgIAHgJACQgLAEgPAAQgJAAgLgCg");
	this.shape_18.setTransform(5.85,24.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgmAAIAAgeIBvAAIAAAeIgmAAIAABng");
	this.shape_19.setTransform(109.675,6.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgwBDIAAiFIBeAAIAAAeIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_20.setTransform(98.45,6.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgbBAQgMgGgHgJQgGgJgFgNQgDgPAAgMQAAgPAFgNQAEgNAIgIQAJgKAKgEQALgFAPAAQAKAAAIACQAIABAIAFQAHAGAGAIQAFAIAEANIghAJIgFgKQgCgFgCgCIgHgEIgIgBQgEAAgEACQgFABgDAFQgEAEgDAHQgCAHAAAMIABAPIAFALIAEAIIAHAEIAGACIAEAAQAJAAAGgEQAGgEADgIIgTAAIAAgZIA1AAIAABEIgdAAIAAgSIAAAAQAAACgDAEIgHAGQgDADgHADQgGACgGAAQgPAAgMgFg");
	this.shape_21.setTransform(85.2,6.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag5hCIA+ACQAJABAIADQAJADAGAFQAHAGAFAHQAEAGADALQACAIABAOQgBAOgCAIQgDALgEAHQgHAIgGAEQgHAGgHADQgIADgJABIg+ACgAgVAlIAJAAQALAAAGgCQAGgCAEgFQAEgFACgGQABgIABgJQgBgJgBgHQgCgGgEgFQgEgEgHgDQgFgCgLAAIgJAAg");
	this.shape_22.setTransform(67.25,6.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAZBDIgxhKIgBAAIAABKIgjAAIAAiFIAlAAIAwBKIAAhKIAkAAIAACFg");
	this.shape_23.setTransform(53.5,6.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAbBDIgIgZIgoAAIgJAZIghAAIAviFIAhAAIAvCFgAgNAQIAZAAIgMgkIAAAAg");
	this.shape_24.setTransform(39.7,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,115.3,46.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgSBDQgKgDgHgEIgNgKIgJgMIAagRIAHAJQAEADAFACQADADAGACIAJABIAIgBIAGgBIAEgFQACgCAAgCQAAgDgCgDIgGgEIgHgDIgfgJIgLgFIgJgGQgEgFgCgFQgCgEAAgJQAAgLADgHQAEgIAHgFQAGgFAKgEQAKgCALAAQAKAAAIACQAJADAHADIAMAJIAJAJIgYAUIgHgHIgIgFIgIgEIgIgBQgQAAAAAKQAAAEACACIAFAEIAHADIAfAJIALAFIAKAGQAEAFACAFQACAGAAAHQAAAIgDAHQgCAHgHAHQgGAFgMAFQgKADgQAAQgMAAgIgCg");
	this.shape.setTransform(196.375,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQBDIgYguIgKAAIAAAuIgkAAIAAiFIA1AAQAMAAAKACQAKACAHAGQAIAGADAIQAEAJAAALQAAAPgHAJQgHAJgNAEIAdA0gAgSgGIAPAAQAKAAAFgEQAFgDAAgIQAAgJgFgDQgFgEgKAAIgPAAg");
	this.shape_1.setTransform(183.975,26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwBDIAAiFIBeAAIAAAeIg6AAIAAAWIApAAIAAAbIgpAAIAAAZIA9AAIAAAdg");
	this.shape_2.setTransform(171.975,26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaBDIgzhKIAAAAIAABKIgkAAIAAiFIAmAAIAxBKIAAAAIAAhKIAkAAIAACFg");
	this.shape_3.setTransform(159.15,26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgnAAIAAgeIBwAAIAAAeIgmAAIAABng");
	this.shape_4.setTransform(146,26.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQBDIgYguIgKAAIAAAuIgkAAIAAiFIA1AAQAMAAAKACQAKACAHAGQAIAGADAIQAEAHAAANQAAAQgHAIQgHAJgNAEIAdA0gAgSgGIAPAAQAKAAAFgEQAFgDAAgIQAAgJgFgDQgFgEgKAAIgPAAg");
	this.shape_5.setTransform(134.025,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcBDIgJgZIgpAAIgIAZIghAAIAviFIAhAAIAvCFgAgNAQIAYAAIgLgjg");
	this.shape_6.setTransform(120.9,26.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1BDIAAiFIA/ABIAOACQAHACAFADQAFAEAFAFQADAFADAGQACAJAAAJQAAAIgCAJQgDAFgEAGQgDAFgHADQgFADgIACIgMACIgbABIAAArgAgRgDIAPAAIAKgBIAGgDIAEgGIABgHIgBgHIgEgEQgCgDgEgBIgKgCIgPAAg");
	this.shape_7.setTransform(108.75,26.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwBDIAAiFIBeAAIAAAeIg6AAIAAAWIApAAIAAAbIgpAAIAAAZIA9AAIAAAdg");
	this.shape_8.setTransform(91.85,26.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtBDIAAiFIAkAAIAABoIA3AAIAAAdg");
	this.shape_9.setTransform(81,26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBDIAAg4IgvhNIAlAAIAbAvIAcgvIAlAAIgvBNIAAA4g");
	this.shape_10.setTransform(68.85,26.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgnAAIAAgeIBxAAIAAAeIgnAAIAABng");
	this.shape_11.setTransform(56.6,26.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSBDQgKgDgGgEQgJgGgEgEQgFgFgFgHIAagRIAHAJQAEADAFACQADADAGACIAJABIAIgBIAGgBIAEgFQACgCAAgCQAAgEgCgCIgGgEIgHgDIgfgJIgLgFIgJgGQgEgFgCgFQgCgEAAgJQAAgLADgHQAEgIAHgFQAGgFAKgEQAKgCALAAQALAAAHACQAJACAHAEIAMAJIAJAJIgYAUIgHgHIgIgFIgIgEIgIgBQgQAAAAAKQAAAEACACIAFAEIAHADIAfAJIALAFIAKAGQAEAFACAFQACAEAAAJQAAAIgDAHQgDAJgGAFQgGAFgMAFQgKADgQAAQgMAAgIgCg");
	this.shape_12.setTransform(44.425,26.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgwBDIAAiFIBeAAIAAAeIg6AAIAAAWIApAAIAAAbIgpAAIAAAZIA9AAIAAAdg");
	this.shape_13.setTransform(32.8,26.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgtBDIAAiFIBbAAIAAAeIg3AAIAAAbIAmAAIAAAbIgmAAIAAAxg");
	this.shape_14.setTransform(21.95,26.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRBDIAAiFIAjAAIAACFg");
	this.shape_15.setTransform(13.15,26.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgtBDIAAiFIAkAAIAABoIA3AAIAAAdg");
	this.shape_16.setTransform(5.3,26.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgmAAIAAgeIBvAAIAAAeIgmAAIAABng");
	this.shape_17.setTransform(149.775,8.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAcBDIgIgZIgqAAIgIAZIghAAIAwiFIAgAAIAvCFgAgNAQIAYAAIgLgjg");
	this.shape_18.setTransform(137.45,8.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYBAQgKgEgIgKQgIgJgDgMQgEgOAAgPQAAgOAEgOQADgMAIgJQAIgKAKgEQALgFANAAQAOAAAKAFQALAEAIAKQAIAJADAMQAEAOAAAOQAAAPgEAOQgDAMgIAJQgIAKgLAEQgKAFgOAAQgNAAgLgFgAgQgeQgFAKAAAUQAAAWAFAJQAGAKAKAAQALAAAGgKQAFgLAAgUQAAgUgGgKQgFgKgLAAQgKAAgGAKg");
	this.shape_19.setTransform(120.225,8.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYBAQgKgEgIgKQgIgJgDgMQgEgOAAgPQAAgOAEgOQADgMAIgJQAIgKAKgEQALgFANAAQAOAAAKAFQALAEAIAKQAIAJADAMQAEAOAAAOQAAAPgEAOQgDAMgIAJQgIAKgLAEQgKAFgOAAQgNAAgLgFgAgQgeQgGAKAAAUQAAAVAGAKQAGAKAKAAQALAAAGgKQAFgLAAgUQAAgUgGgKQgFgKgLAAQgKAAgGAKg");
	this.shape_20.setTransform(107.575,8.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgmBDIAAgcIAXAAIAAhIIgLADIgGACIgGAAIAAgdQAGAAAIgCQAEgCAGgFIAiAAIAABpIATAAIAAAcg");
	this.shape_21.setTransform(97.375,8.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJBSIAAgPQgHAAgJgDIgOgHQgFgEgFgFIgIgLIAYgPIALANIAHAEQADADAEAAIAAgeIgRgFQgJgDgGgEQgIgEgDgHQgEgHAAgJQAAgKAEgHQACgHAHgFQAGgGAIgDQAJgDAKgBIAAgMIAUAAIAAANQAFAAAJADQAIADADADQAEACAFAFIAHAIIgZARIgHgJIgKgGIAAAdIATAFQAIACAHAGQAGACAEAIQADAIABAIQgBAHgCAHQgDAIgFAFQgGAGgJADQgHAEgOABIAAAPgAAKArQAGgBADgEQACgCABgHQgBgFgCgCQgDgEgGgCgAgQgnQgEAEAAAEIABAFQAAAAABABQAAAAAAAAQAAABABAAQAAABABAAIADADIAFACIAAgaQgGACgCADg");
	this.shape_22.setTransform(87.3,8.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSBDQgKgDgHgEQgHgFgGgFIgJgMIAagRIAHAJQAEADAFACQADADAGACQAFABAEAAIAIgBIAGgBIAEgFQACgCAAgCQAAgDgCgDIgGgEIgHgDIgggJIgKgFQgFgDgEgDQgEgFgCgFQgCgEAAgJQAAgLADgHQAEgIAHgFQAFgFALgEQALgCAKAAQAKAAAIACQAJADAHADIAMAJIAJAJIgYAUIgHgHIgIgFIgJgEIgHgBQgQAAAAAKQAAAEACACIAFAEIAHADIAUAFIAWAJIAKAGQAEAFACAFQACAGAAAHQAAAIgDAHQgDAIgHAGQgGAGgLAEQgKADgQAAQgMAAgIgCg");
	this.shape_23.setTransform(74.475,8.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag5hCIAsAAIASABQAIACAJADQAHACAIAGQAHAGAFAGQAFAIACAKQADAHAAAPQAAAOgDAIQgDALgEAHQgGAIgHAEQgFAFgJADQgIAEgJABIg+ACgAgVAmIAKAAQAHAAAJgDQAGgCAFgEQADgGACgHQACgGAAgKQAAgIgCgHQgBgIgFgEQgDgEgIgCQgGgDgKAAIgJAAg");
	this.shape_24.setTransform(56.85,8.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAZBDIgxhKIgBAAIAABKIgjAAIAAiFIAmAAIAvBKIAAhKIAkAAIAACFg");
	this.shape_25.setTransform(43.1,8.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgwBDIAAiFIBeAAIAAAeIg6AAIAAAWIApAAIAAAbIgpAAIAAAZIA9AAIAAAdg");
	this.shape_26.setTransform(30.425,8.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag1BDIAAiFIA/ABIAOACQAHACAEADQAHAEADAFQAEAFADAGQACAJAAAJQAAAIgCAJQgEAHgEAEQgDAFgHADQgEADgHACIgOACIgbABIAAArgAgSgDIAQAAIAJAAIAHgEIADgFIABgIIgBgHIgDgEQgDgDgEgBQgEgCgFAAIgQAAg");
	this.shape_27.setTransform(18.7,8.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSBDQgKgDgHgEQgHgFgGgFIgJgMIAagRIAHAJQAEADAEACQAEADAGACQAFABAEAAIAIgBIAGgBIAEgFQACgCAAgCQAAgDgCgDIgGgEIgHgDIgggJIgKgFQgFgDgEgDQgEgFgCgFQgCgEAAgJQAAgLADgHQAEgIAHgFQAFgFALgEQALgCAKAAQAKAAAIACQAJADAHADIAMAJIAJAJIgYAUIgHgHIgIgFIgJgEIgHgBQgQAAAAAKQAAAEACACIAFAEIAHADIATAFIAXAJQAFACAEAEQAFAFACAFQACAGAAAHQAAAIgDAHQgDAIgHAGQgGAGgLAEQgKADgQAAQgMAAgIgCg");
	this.shape_28.setTransform(5.825,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,202.2,33), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#62676B").s().p("EBYAANIILitPIrktAIIlAAILjM/IrjNQgEBGLANIILjtPIrltAIIlAAILkM/IrkNQgEBSKgAHIrRM7IHsAAILRs8IrSsqInsAAgEA0YANIILitPIrktAIIlAAILjM/IrjNQgEAijANIILitPIrktAIIlAAILjM/IrjNQgEAuigAHIrRM7IHsAAILRs8IrSsqIntAAgAQuNIILitPIrltAIIlAAILkM/IrjNQgAhGNIILhtPIrjtAIIkAAILjM/IrjNQgAK3gHIrPM7IHrAAILRs8IrSsqInsAAgAy6NIILitPIrktAIIlAAILjM/IriNQgEgkvANIILjtPIrltAIIlAAILkM/IrjNQgA4wgHIrQM7IHrAAILRs8IrRsqIntAAgEg2nANIILitPIrktAIIlAAILkM/IrjNQgEhIbANIILitPIrltAIIlAAILkM/IrjNQgEg8dgAHIrQM7IHrAAILRs8IrRsqIntAAgEhaPANIILitPIrjtAIIlAAILjM/IrjNQgEhsEANIILjtPIrltAIIlAAILkM/IrjNQgEhgFgAHIrRM7IHsAAILRs8IrRsqIntAAg");
	this.shape.setTransform(691.85,84);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1383.7,168);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51565A").s().p("AgaAtIgFgBIADgJIAKABQAFAAACgCQADgCACgFIADgGIgahCIAMAAIASA0IAUg0IALAAIgdBJIgDAHIgEAHIgGACQgDACgFAAg");
	this.shape.setTransform(141.525,27.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51565A").s().p("AgXAeQgEgFAAgHQAAgGACgEQAEgFAEgDQAEgBAJgEIAUgEIAAgDQAAgMgNAAQgHAAgFACIgKAHIgGgGQAFgFAIgEQAHgDAJgBQAHABAEABQAEACACADQACABADAGQABADAAAGIAAAmIABAHIgKAAIgBgFIgBgFQgLALgNAAQgJgBgGgEgAAAABIgJAEQgFACgBADIgCAGQAAAFADACQAEACAEABQAGgBAGgCQAGgEAEgDIAAgRg");
	this.shape_1.setTransform(134.95,26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#51565A").s().p("AgNAtQgFgCgEgEQgEgFgCgGQgCgGAAgJQAAgJACgFQACgHAEgEQAFgFAEgCQAFgCAGAAQAFAAAGADQAFADAEAEIAAgjIALAAIABBWQgBADACADIgLAAIgBgEIgBgFQgEAEgFADQgFADgHAAIgKgCgAgOgFQgFAFAAANQAAAHABAEQACAFADADQACADAEACQADABAEAAQAEAAAFgDQAFgCAEgFIAAgdQgFgFgEgDQgEgCgFAAQgIAAgGAGg");
	this.shape_2.setTransform(127.8,25.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#51565A").s().p("AgKAhQgHgDgDgEQgFgFgCgGQgDgGAAgJQAAgHADgHQACgHAFgEQAFgFAFgCQAEgCAGAAQAGAAAGACQAFADAEAEQAFAEACAHQADAHAAAHQAAAJgDAGQgCAHgFAEQgDAEgGADQgGACgGAAQgFAAgFgCgAgIgXIgGAGQgCACgBAGIgCAJQAAAFACAFIADAIQACADAEADQAFACADAAQAFAAAEgCIAGgFIAEgJIABgKIgBgIIgEgJQgDgEgDgBQgDgCgGAAQgEAAgEABg");
	this.shape_3.setTransform(120.55,26.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#51565A").s().p("AAKAtQgKAAgDgDQgEgFAAgJIAAgoIgMAAIAAgIIAMAAIAAgZIAKAAIAAAZIARAAIAAAIIgRAAIAAAmQAAAGACACQACADAGAAIAHgBIAAAJIgEAAg");
	this.shape_4.setTransform(114.625,25.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#51565A").s().p("AAfAiIAAgqIAAgEIgBgCIgDgCIgDgBQgFAAgCACIgHAFIAAAsIgTAAIAAgqIAAgEIgBgCIgDgCIgDgBQgFAAgCACIgHAFIAAAsIgUAAIAAhCIAUAAIAAAKIAEgEIAFgEIAGgCIAHgBIAHAAIAFADQADACAAACIADAEIADgEIAFgDIAGgDIAIgBQAFAAAEABIAGAEIADAHIABAIIAAAvg");
	this.shape_5.setTransform(103.375,26.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#51565A").s().p("AgTAhQgDAAgDgDQgDgDgBgEQgBgDgBgGIAAgvIAUAAIAAApQAAAGADABQABADAEAAQAEAAADgCQAEgCADgDIAAgsIAUAAIAABCIgUAAIAAgLIgEAEIgEAEQgDADgDAAQgEABgEAAIgIgBg");
	this.shape_6.setTransform(93.7,26.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#51565A").s().p("AALAiIAAgqQAAgEgCgDQgCgCgDAAQgEAAgDACIgHAFIAAAsIgUAAIAAhCIAUAAIAAAKIAJgIIAFgCIAIgBIAIABIAGADIAEAGQACAEAAAFIAAAwg");
	this.shape_7.setTransform(86.1,26.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#51565A").s().p("AgJAvIAAhDIATAAIAABDgAgJgdIAAgRIATAAIAAARg");
	this.shape_8.setTransform(80.425,25.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#51565A").s().p("AAKAtIgLgBQgFgBgCgCQgDgEgBgDIAAgpIgLAAIAAgOIALAAIAAgYIATAAIAAAYIARAAIAAAOIgRAAIAAAdIAAAEIACADIADACIAEAAIACAAIACAAIACAAIABgBIAAAOIgCABIgEAAg");
	this.shape_9.setTransform(75.975,25.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#51565A").s().p("AgTAhQgDAAgDgDQgDgCgCgEQgBgDAAgFQAAgFACgFQAEgFAEgCIANgFIASgDIAAgCQAAgEgCgCQgCgCgFAAQgEAAgHADIgKAGIgIgMIAFgEIAIgEIAJgDIAKgBQAHAAAFACQAFABADAEQADADACAFQABAFAAAGIABAjQAAAEABADIgUAAIgBgFIgBgFQgEAEgGAEQgFADgHAAIgHgCgAgGAFQgFADAAAFQAAADACACQACABADAAQAFAAADgBIAGgEIAAgNQgKABgGADg");
	this.shape_10.setTransform(69.725,26.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#51565A").s().p("AgJAvIAAhdIATAAIAABdg");
	this.shape_11.setTransform(64.475,25.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#51565A").s().p("AgjAvIAAhdIAiAAIAJABIAJACIAHADQADACADADQAEAEAAAEQACAFAAAGQAAAHgCAEIgEAHQgDAEgDACIgIAEIgJABIgIABIgOAAIAAAhgAgPgBIAOAAIAIgBIAFgDIADgEIABgGQAAgFgBgBIgDgFIgFgCIgIgBIgOAAg");
	this.shape_12.setTransform(58.775,25.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#51565A").s().p("AAMAiIgMgVIgMAVIgVAAIAYgiIgWghIAWAAIAKATIALgTIAVAAIgWAhIAXAig");
	this.shape_13.setTransform(47.65,26.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#51565A").s().p("AgKAhQgGgCgFgEQgFgEgCgHQgDgGAAgKQAAgFABgGIAEgJQACgDAEgDIAHgFIAIgCIAGgBIAHABIAIACIAGAEQADADACAEQADAFABAFQABAGAAAGIAAADIgrAAIABAHIAEAFIAFADIAEAAIAGAAIAGgCIAEgCIAEgDIAIAMQgGAFgHACQgGADgKAAQgGAAgGgCgAgCgTIgEADIgDAEIgCAHIAZAAQAAgHgEgEQgDgDgGAAg");
	this.shape_14.setTransform(41.025,26.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#51565A").s().p("AAfAiIAAgqIgBgEIgBgCIgCgCIgDgBQgFAAgCACQgEACgDADIAAAsIgTAAIAAgqIgBgEIgBgCIgCgCIgEgBQgDAAgEACIgGAFIAAAsIgUAAIAAhCIAUAAIAAAKIADgEIAFgEIAHgCIAHgBIAHAAIAFADIADAEIACAEIAEgEIAFgDQADgDADAAIAHgBQAGAAADABIAGAEQADAEABADQABAEAAAEIAAAvg");
	this.shape_15.setTransform(31.675,26.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#51565A").s().p("AAWAvIgHgVIgeAAIgIAVIgTAAIAhhdIATAAIAhBdgAgKALIAUAAIgKgeg");
	this.shape_16.setTransform(21.375,25.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#51565A").s().p("AgJAgQgGgCgDgEQgFgEgCgHQgDgHAAgIQAAgJADgGQACgGAFgFIAKgGQAEgCAFAAQAHAAAEACQAGADADAEQAEAEACAHQACAGAAAIIAAADIguAAQAAAGACAEIAEAHQADADADABQAEACADAAQAHAAAFgDQAEgCAEgGIAGAFQgEAHgHAEQgGAEgKAAQgEAAgGgDgAgFgXQgCAAgDADIgFAGIgCAJIAkAAQgBgIgEgGQgFgFgIAAIgGABg");
	this.shape_17.setTransform(143.95,12.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#51565A").s().p("AgJAhQgGgDgDgEQgEgEgDgHQgCgGAAgJQAAgHACgIQADgGAEgFQAFgEAFgCQAFgCAFAAQAGABAEABIAHAEIAGAGIADAHIgJAEQgCgGgFgEQgDgDgHAAIgGABIgGAFQgDADgCAEQgBAGAAAFQAAAMAFAHQAFAGAIABQAGAAAEgEQAEgDADgHIAJAEIgEAIIgGAFIgHAFIgKABQgFAAgFgCg");
	this.shape_18.setTransform(137.375,12.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#51565A").s().p("AARAiIAAgtQAAgHgDgDQgCgCgHAAQgGAAgFACIgKAIIAAAvIgLAAIAAhBIALAAIAAAJIAFgEIAGgEIAFgCIAIgBQAKAAAFAFQAFAFAAAKIAAAvg");
	this.shape_19.setTransform(130.425,12.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#51565A").s().p("AgJAgQgFgCgFgEQgEgGgCgFQgDgHAAgIQAAgIADgHQACgFAFgGIAKgGQAEgCAFAAQAHAAAEACQAGADADAEQADADADAIQACAGAAAIIAAADIguAAIACAKQABAEADADQADADADABIAHACQAHAAAFgDQAEgCAEgGIAGAFQgEAHgHAEQgHAEgJAAQgEAAgGgDgAgEgXIgGADIgEAGIgDAJIAkAAQgBgJgEgFQgFgFgIAAIgFABg");
	this.shape_20.setTransform(123.325,12.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#51565A").s().p("AgFAuIAAhCIAKAAIAABCgAgFgiIAAgKIALAAIAAAKg");
	this.shape_21.setTransform(118.425,10.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#51565A").s().p("AgSAiIAAhBIAKAAIAAALIABAAQAFgGADgDQAHgEAJAAIACAAIgBAKIgDAAQgIAAgGAEQgFAEgEAHIAAAqg");
	this.shape_22.setTransform(114.8,12.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#51565A").s().p("AgJAgQgHgCgDgEQgEgEgCgHQgDgFAAgKQAAgKADgFQADgHAEgEQAFgEAFgCQAEgCAFAAQAHAAAEACQAGADADAEQAEAEACAHQACAGAAAIIAAADIguAAQAAAEACAGIAEAHQADADADABIAHACQAHAAAFgDQADgCAFgGIAGAFQgEAGgHAFQgHAEgJAAQgEAAgGgDgAgFgXQgCAAgDADIgFAGQgCAFAAAEIAkAAQgBgIgEgGQgFgFgIAAIgGABg");
	this.shape_23.setTransform(108.575,12.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#51565A").s().p("AgdAuIAAhaIALAAIAAAJIAJgIQAGgDAGAAQAGAAAEACQAGADADAEQADADADAIQACAGAAAJQAAAKgCAEQgCAHgEAEQgFAFgEABQgGACgFABQgFAAgGgEIgJgGIAAAhgAgJgiIgJAIIAAAeQAJAJAJABQAJAAAFgHQAFgGAAgMQAAgMgFgHQgFgGgJAAQgFAAgEACg");
	this.shape_24.setTransform(101.625,13.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#51565A").s().p("AARAhIgRgaIgRAaIgLAAIAXghIgWggIAMAAIAPAYIARgYIALAAIgWAgIAXAhg");
	this.shape_25.setTransform(94.55,12.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#51565A").s().p("AgJAgQgGgCgEgEQgDgEgDgHQgDgHAAgIQAAgJADgGQACgGAFgFIAJgGQAFgCAGAAQAGAAAFACQAFADADAEQAEAEACAHQACAGAAAIIAAADIguAAQAAAGACAEIAEAHQADADAEABQADACADAAQAHAAAFgDQAEgCAEgGIAHAFQgFAHgHAEQgHAEgIAAQgFAAgGgDgAgEgXQgDAAgDADIgEAGIgDAJIAkAAQAAgIgFgGQgFgFgIAAIgFABg");
	this.shape_26.setTransform(88.2,12.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#51565A").s().p("AgNAtQgGgCgDgEQgDgEgDgHQgCgGAAgJQAAgJACgFQACgHAEgEQAFgFAEgCQAFgCAGAAQAFAAAGADQAFADAEAEIAAgjIALAAIAABWIACAGIgLAAIgBgEIgBgFQgFAFgEACQgFADgHAAQgEAAgGgCgAgOgFQgFAFAAANQAAAHABAEIAEAIIAGAFIAIABQAFAAAEgDQAEgCAFgFIAAgdQgEgGgFgCQgEgCgFAAQgIAAgGAGg");
	this.shape_27.setTransform(78.175,10.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#51565A").s().p("AARAiIAAgtQAAgHgDgDQgDgCgGAAQgGAAgEACQgGAEgFAEIAAAvIgLAAIAAhBIALAAIAAAJIALgIIAGgCIAHgBQAKAAAFAFQAFAFAAAKIAAAvg");
	this.shape_28.setTransform(70.925,12.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#51565A").s().p("AgWAeQgGgFAAgHQAAgFADgFQADgFAEgDQAFgCAJgDIAUgEIAAgDQAAgMgNAAQgHAAgFACIgLAHIgFgGQAHgGAGgDQAHgDAKgBQAFABAFABQAEACADADQACACACAFIABAJIAAAmIACAHIgLAAIgCgFIAAgFQgLALgOAAQgJgBgEgEgAAAABIgJAEIgGAFIgCAGQAAAFADACQAEACAEABQAGgBAGgCQAEgCAGgFIAAgRIgQACg");
	this.shape_29.setTransform(63.775,12.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#51565A").s().p("AgdAuIAAhaIALAAIAAAJIAJgIQAFgDAHAAQAGAAAEACQAGADADAEQADADADAIQACAGAAAJQAAAKgCAEQgCAHgEAEQgFAFgEABQgGACgFABQgFAAgGgEIgJgGIAAAhgAgJgiIgJAIIAAAeQAJAJAJABQAJAAAFgHQAFgGAAgMQAAgMgFgHQgFgGgJAAQgFAAgEACg");
	this.shape_30.setTransform(54.075,13.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#51565A").s().p("AgWAdQgFgFAAgKIAAgvIALAAIAAAtQAAAHADADQADADAGAAQAFAAAFgDQAGgDAFgFIAAgvIALAAIAABCIgLAAIAAgKIgLAHIgGADIgHABQgKAAgFgFg");
	this.shape_31.setTransform(46.525,12.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#51565A").s().p("AARAiIAAgtQAAgHgDgDQgCgCgHAAQgGAAgFACIgKAIIAAAvIgLAAIAAhBIALAAIAAAJIAFgEIAGgEIAFgCIAIgBQAKAAAFAFQAFAFAAAKIAAAvg");
	this.shape_32.setTransform(36.475,12.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#51565A").s().p("AgZAqQgIgFAAgHQAAgFAEgEQADgEAGgCQgGgDAAgFQAAgDACgDIAGgEQgFgDgDgFQgCgFAAgGQAAgGACgEQACgDAEgEIAIgFIALgCQAGAAAEACQAFACAEADIAHgEIAJgCIAAAKIgGABIgHABQAEAFAAAGQAAAGgDAEQgBAEgEADQgDADgFACQgFABgFAAIgKgBIgEABIgBADQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAIAHACIANABQANABAGAEQAGAEAAAIQAAAFgDAEQgDAEgDACQgGADgFAAQgFACgGAAQgRAAgIgFgAgUAWQgDADAAADQAAAFAGACQAFADAMAAQAJAAAHgDQAFgDAAgEQAAgEgEgCQgDgCgMgBIgPgBQgFABgCADgAgNghQgEAEAAAHQAAAHAEAEQAEAEAIAAQAIAAADgEQAFgEAAgHQAAgHgFgEQgEgEgHAAQgHAAgFAEg");
	this.shape_33.setTransform(29.2,13.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#51565A").s().p("AgEAuIAAhCIAJAAIAABCgAgFgiIAAgKIALAAIAAAKg");
	this.shape_34.setTransform(24.175,10.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#51565A").s().p("AgUAqQgJgHgEgLIAJgEQAEAKAGAEQAIAFAIAAQAJAAAGgEQAGgFAAgHIgBgGIgDgFIgIgEIgXgIIgKgFIgGgHQgCgEAAgHQAAgFACgEQACgFAEgDQAEgDAGgDIAMgBQAGAAAFABQAGACADADQAEACADAEQADAEACAFIgJAFQgDgJgHgEQgHgDgGAAQgJAAgFAEQgFAEAAAGQAAAEABACIAEAFIAIADIALAEIAMAFIAJAFQAEACACAFQACAEAAAGQAAAHgCAEQgCAFgFADQgFAEgFABQgGACgIAAQgNAAgIgGg");
	this.shape_35.setTransform(18.525,10.775);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ap1C0QhLAAg1g0Qg0g1AAhLQAAhKA0g0QA1g1BLAAITrAAQBLAAA0A1QA1A1AABJQAABLg1A1Qg0A0hLAAg");
	this.shape_36.setTransform(81,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,162,36), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	mask.setTransform(150,125);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#241F20").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,300,250), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ABoBHIgBgBIgBAAIAAAAIgEgEQgDgIAAgGIAEggIgBABQgCACgBADIgBgBIAAACIgIAKIAAAAIgBAAIgBACIAAAAIgCABIgBADIgFACIgHABIgEgCIgBAAIgBgBIgGgGQgCgBAAgHIAAgCIAAAAIAAgDIAAAAIABgEIgBAAIAAgBIABAAIAAAEIAAAEIABgMIAFgUIgCAEIgBACIAAgBIAAAAIABgEIgBAEIgBADIACgIIADgJIABgBIAAAAIAAgBIAAAAIAGgBIAEABIACABIgCAGIAAADIAAAEIgBABIgBAEIgCAFIgBAFIgBAEIgBANIABAJIAHgFIgCACIACgCIAAAAIAHgHIADgEIAKgPIABAAIAAAAIABgBIgBAAIgCgEIABABIABAAIADgBIAAAAIABgBIAAAAIADgEIABgBIAAgBIAAAAIgBAEIACgEIAAgBIAAgBIAAAAIAAAAIAAgCIAAAAIAAgBIAFgRIABgDIAJgeQADgDAAgCIAEgEIAAgBIAAgBIAHAAIAFABIACAAIACACQABACAAAEIgBANIACAGIAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAgBQgBAAAAgBQgBgDAAgFIAAgIIgDAEIgBADQgEALgBAIIgGAVIAAABIgBAEIADAAIAEAAIADAAIADACIgBACIgBABIgHACIgGADIgBAFIgCAHIgDAXQgDAMABAMIABADIABAEQgBAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAABQAAAAgBAAgAA3AcIAAAAIAAgBgAA8gFIABAAIAAgBgABugaIAAAAIAAABIAAgBIAAAAIABgCIAAgDIgBAFgABygmIAAgBIAAgBgAAoA4IAAAAIgGgCIgFgDIgCgEQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgDIAAAAIgCgDIABAAIAAgEIABAAIgBgBIABAAIgBgBIgBAAIAAAAIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAABIgBgBIACgBQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgBIgBAAIABgBIgBgCIAAgBIABAAIAAAAIAAAAIABgBIgBAAIgBAAIAAAAQABAAAAgBIAAABIABAAIgBgBIAAAAIAAgBIAAgBIABAAIgBAAIABgBIAAgBIgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIAAgDIABgCIAAgEIgBAAQAAABAAAAIAAgCIABAAIAAgBIAAgCIAAgBIAAgBIAAAAIABAAIAAgBIgBAAIABgBIgBAAIAAgBIABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgCIABgBIgBgCIABgDIAAgBIAAAAIABgBIAAgBIAAgBIAAgBIABgBIgBgBIAAAAIABgBIgBAAIAAgCIABAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgCIABgCIAAACIgBABIABgBIAAgCIAAgBIAAAAIAAAAIABgBIgBgBIAAgBIABAAIAAABIABgBIAAAAIgBAAIABgCIAAgCIAAABIABgBIAAgBIgBAAIAAgCIABgBIAAgBIAAgBIAAAAIABABIgBgCIABgBIAAgBIAAgBIAAgCIACgHQAAAAAAgBQgBAAAAAAQAAgBABAAQAAAAAAgBIAAgCIABABIAGgBIAFABIABACIABAFIgIAtIAAABIgEAaQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgBAQIABAHIACAHIAEgDIAEgEIAAACIAAABIAAAAIAAAAIAAAAIAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAgBAAQAAABAAAAIAAAAIAAABIAAAAIAAAAIAAACIgBAAIAAAAIgDACIgFAAgAAcAFIAAADIABgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAgAAdAAIAAACIABgCIgBAAgAAcAAIABAAIAAgBIgBAAgAAdgIIAAABIABAAIgBgBIABAAIAAgBIgBAAIAAABgAAegNIAAABIAAABIAAgBIAAgBIAAgBIAAAAIAAABgAAjgkIABgBIAAAAgAjAA4IgBAAIgGgCIgFgDIgCgEIgBgEIgBgGIABAAIgBgCIABgBIgBgBIABAAIAAgBIgBgBIAAgBIABAAIgBgBIABAAIAAgBQgBAAABAAIgBABIAAgBIABgBIgBgBIABgBIAAAAIAAgBIAAAAIAAgCIAAgBIAAAAIAAAAIABgBIgBAAIAAAAIAAAAIAAgBIAAABIABAAIAAgBIgBAAIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIABABIAAgBIgBAAIABgBIAAAAIAAgBIAAgCIAAgBIAAgBIAAAAIAAABIABgBIgBgBIAAABIAAgCIAAABIABgCIAAgEIAAAAIgBABIABgCIAAAAIAAgBIABgCIgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIgBgBIABAAIAAgBIAAABIAAgCIAAgCIABgBIgBAAIAAgCIABgCIAAAAIAAAAIAAAAIAAgBIABAAIAAgBIgBABIAAgBIAAAAIAAAAIABgBIAAgBIAAgBIAAgBIABgBIAAgCIgBAAIABgCIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIABgCIAAABIAAgBIAAgCIAAACIABgDIgBAAIAAAAIABgBIAAgBIABgBIAAAAIgBAAIABgCIAAgCIAAAAIAAABIABAAIAAgCIgBAAIABgCIAAAAIABgBIgBgBIAAgBIAAAAIABABIgBgCIABgBIAAgBIAAgBIAAgCIACgKIAAgCIABABIAGgBIAFABIAAABIACABIAAAFIgIAtIAAABIgCAKIgBAGIAAAGIgBAEQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAIAAAXIACAHQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBIAEgEIAAACIAAABIAAAAIAAACQAAABAAAAQABAAAAABQAAAAgBAAQAAABAAAAIAAAAIAAABIAAAAIAAAAIAAACIgBAAIAAAAIgDACIgFAAgAjOAQIABABIAAgBIAAgBgAjNAFIABADIAAgDIAAgDgAjMgBQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIABgBIgBgBgAjMgHIAAAAIAAgBgAjLgMIgBABIABgBIAAgBgACWAyIgCgBIgBAAIgBgBIgCgBIgHgFIgEgHIgDgIIAAgIIACgIIADgIIALgTIAAAAIABgBIAIgKIAIgIIADABQAFAAAEACQAFACAAAGIgBAEIAAgBIAAABIAAAAIgBACQgEAJgGAHIgOAMIAAABIgBgBIgEADIgEADQgCACAAADIgBAIIABAHIADAGQADAAADgCIAGgDIAKgIIACgBIABgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACgBIAAAAIAKgMIABAAIACgCIACgCIAAAAIABgBIABgBIABgCIABgCIABgBIADgCIACgCIAAAAIABAAIABgDIABgBIACgCIACgDIACgBIABAAIAAACIgBACIAAAAIABAAIgBAAIAAABIAAABIgBABIAAADIgCACQAAACgDACIgDAGIgBABIAAAAIgBABIAAABIgTAXIgFAFIgGAEIgGADQgDACgFAAgACkgWIgGAGIgLAVQAIgFAEgGIAKgNIACgGIAAgBIgBgBIgGAFgACxgTIABABIAAgBIAAAAgAg6AyIgBgBIgBAAIgCgBIgDgBIgHgJIgDgDQgCgEAAgEIAAgIIABgIIADgIIAMgTIAAAAIAAgBIAIgKIAIgIIADABQAGAAADACQAEACABAGIgBAEIgBACIAAAAQgEAJgGAHQgGAHgIAFIAAABIgBgBIgEADIgEADIgCAFIgBAIIABAHIADAGQADAAADgCQAEgBACgCIAKgIIABgBIACgBIACgBIAOgPIACgCIABgBIABgBIACgCIABgCIAAgBIACgCIADgCIAAAAIABAAIABgDIACgBIABgCIACgDIACgBIABAAIgBACIAAACIAAAAIAAACIgBABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgBACQAAADgDABIgDAGIgBABIgBAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIAAABIgTAXIAAAAIgEAFIgGAEIgHADQgDACgEAAgAgeAVIAAAAIAAAAgAgsgWIgGAGIgKAVQAHgFAEgGIAKgNIACgGIgBgBIAAgBQgFADgBACgAioAsIgBAAIAAgBIgHgGIgCgIIAAgEIAAgEIAAADIABgEIgBAAIAAgBIABAAIAAAEIAAAEIABgMQABgIACgEIAAgDIACgFIgCAEIgBACIAAgBIABgEIgBAEIAEgOIABgBIAAgBIAAAAIAGgBIAEABIACABIgBADIgBAKIgBABIgFAWIgBAJIABAJIAGgEIABgBIAAAAIABgBIAJgKIALgPIAAAAIAFgGIADgEIAAgBIgBgBIABAAIAAgRIAAgBIAAAAIAAgBIAAAAIAAABIgBgBQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIABgBIABgBIABAAIABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIACAAIABAAIAAABQABgBAAAAQABAAAAAAQABAAAAABQABAAAAABIADADIAAADIABACIAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAIAAABIAAABIAAAEIAAACIgCAUQgBALABAIQACgCADgIQADgGADgEQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIAAgBIAAgBIAAgBIAAgBQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAIAAABIAAABIABgCIAAgEIAAABIAAABIABgDIABgCIABgBIACgBIAAgBIAAAAIABgCIABgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIABgBIAAABIABgBIAAAAIgBAAIABgDIACgDIAGgLIgBAAQAAAAAAAAQgBAAAAAAQAAAAABAAQAAAAAAgBIABAAIAAAAIAEgJIABAAIAAAAIgBAAIABgBIAAABIABgBIAAgBIABABIgBABIABAAIABAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAABIABABIgBADIABgCIABAFIAAAHIgCAGIgUAqIgBABIAAABIgDADIgDAFIAAABIgCACIAAAAIAAABQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgEAAIgBAAIAAAAIgGgCIgBAAIgBgBIgCgCIgCAAIgCgEIABgBIAAAAIAAAAIAAgBIAAgBIgBgCIABgBIAAAAIgBAAIAAAAIABgBIAAgRIgBADIAAAAIgBABIAAABIgBAAIgCAEQgCACgBADIAAgBIgBABIABABIgJAKIAAAAIgBAAIAAABIAAAAIgBAAIAAABIgBAAIAAABIgCADIgFACIgGABgAiyAcIABAAIgBgBgAhwAZIAAABIAAgBIAAgBgAhsAQIABAAIgBAAgAhmADIAAABIAAgBIAAAAQABABAAgBIgBgBgAhegNIAAADIACgEgABNAfIAAgBIAAABIAAAAgABOAdIACgBIgBABgAibAdIACgBIgBABgAA4ANIAAgEIABgCIABgCIABgDIgBAHIAAAAIgCAJgAA4AMIAAABIAAgBIAAgBgAixAOIAAgBIABgBIgBgBIAAABIAAgCIAAAAQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIABgDIgDAOgAA3AQIABAAIAAABgAiOANQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgBACgAiLAJIAAAAIAAAAIAAABgAiKAIIABgBIgBABgAAbACIABAAIAAAAgAjNACIAAgBIAAABgABngEIABAAIAAABgAiCgOIAAgBIABABIgBAAgAjLgOgABFgwIAEgCQABgBAEAAQADABACAFIAAACIgBADIAAAAIgBAAIgCADIgCABIgDABIgDAAgAikgwIAFgCQAAgBAEAAQAEABABAFIAAAFIgBAAIAAAAIgCADIgDABIgGABg");
	this.shape_37.setTransform(52.3,12.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(1));

	// Layer_3
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AADAFIAAgGIAAACIgCAEIgBAAIgCgEIgBgCIAAAGIgBAAIAAgKIACAAIACAHIADgHIACAAIAAAKg");
	this.shape_38.setTransform(72.8,21);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAAAFIAAgIIgEAAIAAgCIAJAAIAAACIgEAAIAAAIg");
	this.shape_39.setTransform(71.55,21);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#007BC8").s().p("Ah7B8IAAj3ID3AAIAAAoIglAAIgIAXIgIgXIgvAAIAAAfIgOgfIglAAIgnBYIAfAAIAABQIBiAAIAQgRIAPARIAeAAIAAAngABjBLIgUgXIgUAXIgZAAIAhgjIghgjIAAARIgnAAIAAAKIAmAAIAAAQIgmAAIAAALIAnAAIAAAQIg6AAIAAhGIA6AAIAZAAIAUAXIAUgXIAZAAIghAjIAhAjgABpAoIATgUIAAAogABpgEIAAgwIgSAwIgRAAIgRgwIAAAwIgTAAIgVAAIgGgOIgfAAIgGAOIgUAAIAehFIAYAAIAeBFIAAhFIAeAAIAPArIAQgrIAdAAIAABFgAAAghIgIgXIgKAXIASAAg");
	this.shape_40.setTransform(12.4,12.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ah7B8IAAj3ID3AAIAAD3g");
	this.shape_41.setTransform(12.4,12.525);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgFAWIAAghIgMAAIAAgKIAjAAIAAAKIgMAAIAAAhg");
	this.shape_42.setTransform(67.9,22.75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgFAWIAAgrIALAAIAAArg");
	this.shape_43.setTransform(64.75,22.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgFAWIAAghIgMAAIAAgKIAkAAIAAAKIgNAAIAAAhg");
	this.shape_44.setTransform(59.7,22.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgRAEIAAgZIAMAAIAAAZQAAAJAFAAQAHAAgBgJIAAgZIANAAIAAAZQgBASgSAAQgRAAAAgSg");
	this.shape_45.setTransform(55.45,22.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgNASQgIgHAAgLQAAgKAIgGQAFgGAIAAQAJAAAGAGQAGAGABAKQgBAMgGAGQgGAFgJAAQgIAAgFgFgAgJAAQAAAOAJAAQAKAAAAgOQAAgMgKAAQgJAAAAAMg");
	this.shape_46.setTransform(50.75,22.725);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAHAWIAAgSIgNAAIAAASIgMAAIAAgrIAMAAIAAARIANAAIAAgRIAMAAIAAArg");
	this.shape_47.setTransform(45.925,22.75);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgFAWIAAghIgMAAIAAgKIAkAAIAAAKIgNAAIAAAhg");
	this.shape_48.setTransform(41.5,22.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgFAWIAAgrIALAAIAAArg");
	this.shape_49.setTransform(38.35,22.75);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAGAWIgFgaIgGAaIgKAAIgMgrIAMAAIAFAaIAGgaIAKAAIAGAaIAAAAIAFgaIALAAIgMArg");
	this.shape_50.setTransform(34.3,22.75);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgFAWIAAghIgMAAIAAgKIAjAAIAAAKIgMAAIAAAhg");
	this.shape_51.setTransform(49.55,2.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgEAJIADgHIgEAAIAAgKIALAAIAAAJIgGAIg");
	this.shape_52.setTransform(46.6,1.025);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAIAWIgQgXIAAAXIgKAAIAAgrIALAAIAPAXIAAgXIALAAIAAArg");
	this.shape_53.setTransform(43.25,2.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgNARQgIgGABgLQgBgKAIgGQAFgGAIAAQAJAAAGAGQAGAGABAKQgBALgGAGQgHAGgIAAQgIAAgFgGgAgJAAQAAANAJAAQAJAAAAgNQAAgMgJAAQgJAAAAAMg");
	this.shape_54.setTransform(38.4,2.325);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgTAWIAAgrIAPAAQAYAAAAAVQAAAWgYAAgAgGAMIADAAQAKAAAAgMQAAgLgLAAIgCAAg");
	this.shape_55.setTransform(33.75,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0.1,73.4,24.9), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgVBRIAAh9IgvAAIAAgkICJAAIAAAkIgvAAIAAB9g");
	this.shape_56.setTransform(116.9,8.425);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAUBRIgeg4IgMAAIAAA4IgsAAIAAihIBAAAQARAAALACQANADAIAGQAJAHAEAKQAFAKAAAPQAAATgIAKQgJAMgPAFIAiA+gAgWgIIATAAQAMAAAGgEQAHgEAAgKQAAgKgHgFQgGgEgMAAIgTAAg");
	this.shape_57.setTransform(102.225,8.425);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAiBSIgKgeIgyAAIgLAeIgoAAIA6ijIAoAAIA5CjgAgQAUIAeAAIgOgsg");
	this.shape_58.setTransform(86.225,8.375);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhBBRIAAihIBOAAIAQADQAJADAGADQAFADAGAHQAGAGACAJQADAKAAALQAAANgDAIQgDAIgFAGQgGAGgHAEQgGADgIADQgIACgIABIgQABIgRAAIAAAzgAgVgDIATAAQAGAAAFgCQAGgCACgCIAFgGIABgJIgBgIIgFgHQgDgDgFgBQgFgCgGAAIgTAAg");
	this.shape_59.setTransform(71.35,8.425);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgVBRIAAh9IgvAAIAAgkICJAAIAAAkIgvAAIAAB9g");
	this.shape_60.setTransform(50.775,8.425);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgWBSQgLgDgJgGQgIgEgIgIQgIgIgEgHIAggVIAJALQAEAEAGAEQAFADAHABQAGACAFAAIAKgBQAFgBACgBIAFgFQACgCAAgEQAAgEgCgDIgHgFIgwgOIgNgGIgLgIQgFgFgCgHQgDgGAAgKQAAgMAFgKQAEgJAJgHQAHgGAMgEQAMgDAOAAQAOAAAJACQAKADAIAFQAKAFAFAFIAMALIgeAZIgIgIIgKgHIgLgEIgJgCQgTAAAAAMQAAADACAEIAGAFQAFADAEABIAYAHIAOAEIAOAGQAHAEAEAEQAEAEAEAIQACAGAAAKQAAAKgDAJQgEAKgIAGQgIAIgNAEQgMAEgVAAQgOAAgKgCg");
	this.shape_61.setTransform(35.875,8.425);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("Ag7BRIAAihIBzAAIAAAkIhHAAIAAAaIAzAAIAAAiIgzAAIAAAeIBLAAIAAAjg");
	this.shape_62.setTransform(21.675,8.425);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhBhQIBSAAQAHAAAHACQAGABAHADQAFACAFAFQAEAGADAFQADAGAAAJQAAAJgDAHQgDAGgEAFQgFAFgFACIgNAEIAAAAQAGABAIACQAGACAFAFQAFAFADAHQACAGAAALQAAAKgCAGQgDAGgFAGIgKAIIgMAGIgOADIhVAAgAgWAwIAWAAQAMAAAFgFQAGgEgBgIQABgJgGgEQgGgEgLAAIgWAAgAgWgQIAVAAIAJgBIAHgDIAEgFQABgDAAgDQAAgEgBgDIgEgFQgDgCgDgBIgJgBIgWAAg");
	this.shape_63.setTransform(6.6,8.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,123.8,16.9), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("Ag7BRIAAihIBzAAIAAAkIhHAAIAAAbIAzAAIAAAhIgzAAIAAAeIBLAAIAAAjg");
	this.shape_64.setTransform(38.45,30.425);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAbBRIAAhBIg1AAIAABBIgsAAIAAihIAsAAIAAA8IA1AAIAAg8IAsAAIAAChg");
	this.shape_65.setTransform(22.525,30.425);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgVBRIAAh9IgvAAIAAgkICJAAIAAAkIgvAAIAAB9g");
	this.shape_66.setTransform(6.875,30.425);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgTBSQgIgCgLgEQgLgHgFgEQgHgIgGgIQgEgIgFgOQgDgMAAgPQAAgOADgMQAFgOAEgIQAFgIAIgIQAHgGAJgFQAJgEAKgDQAJgCAKAAQALAAAIACQAKADAJAEQAJAEAHAHQAJAIAFAIQAGAMADAKQADALAAAPQAAAQgDALQgDALgGALQgGAJgIAHQgGAFgKAGQgLAFgIABQgKACgJABQgIgBgLgCgAgOgsQgHAEgFAGQgEAGgCAJQgDAHAAAMQAAANADAHQACAJAEAGQAGAIAGACQAGAEAIAAQAJAAAGgEQAHgCAEgIQAGgGABgJQADgKAAgKQAAgJgDgKQgBgJgGgGQgDgFgIgFQgGgDgJAAQgIAAgGADg");
	this.shape_67.setTransform(81.7,8.45);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgVBRIAAh9IgvAAIAAglICJAAIAAAlIgvAAIAAB9g");
	this.shape_68.setTransform(65.9,8.45);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AhBBRIAAihIBOAAIAQADQAIADAGADQAHAEAFAGQAFAGADAJQADAJAAAMQAAAMgDAJQgDAHgGAHQgEAGgIAEQgGAEgJACIgPADIgQABIgRAAIAAAzgAgVgDIATAAQAGAAAFgBQAFgCADgDQADgCABgEQABgEABgFQgBgEgBgEQgBgEgDgDQgDgDgFgBQgFgCgGAAIgTAAg");
	this.shape_69.setTransform(46.6,8.425);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgVBRIAAihIArAAIAAChg");
	this.shape_70.setTransform(34.85,8.425);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAXBRIgmhBIgMAPIAAAyIgsAAIAAihIAsAAIAAA7IAsg7IAzAAIg3BAIA7Bhg");
	this.shape_71.setTransform(23.725,8.425);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgWBRQgKgCgLgFQgHgFgIgIQgHgHgFgJIAggUIAJALQAEAEAGADIAMAGQAGABAFAAIAJgBQAGgBACgBQADgCACgDIACgGQAAgEgDgDIgGgFIgwgPQgGgBgHgEQgHgEgEgEQgFgFgCgHQgDgGAAgKQAAgNAEgJQAFgJAIgIQAKgGAKgDQALgDAPgBQALABALACQAKADAJAEQAIAFAHAFIALANIgeAXIgIgIIgJgGIgLgFIgKgBQgTAAAAAMQAAADACAEQADAEADABIAJAEIA0ARQAHAEAEAEQAFAFADAHQADAHAAAJQAAAIgEALQgDAJgJAIQgHAGgOAFQgNAEgTABQgNAAgLgEg");
	this.shape_72.setTransform(7.375,8.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,89.7,38.6), null);


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

	// timeline functions:
	this.frame_183 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(183).call(this.frame_183).wait(1));

	// Layer_5
	this.instance = new lib.Symbol26();
	this.instance.setTransform(177.25,27.7,1,1,0,0,0,71.6,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(111).to({regX:71.7,scaleX:1.1061,scaleY:1.1061,x:182.4},24,cjs.Ease.backInOut).wait(4).to({regX:71.6,scaleX:1,scaleY:1,x:177.25},14).wait(31));

	// Layer_4
	this.instance_1 = new lib.Symbol27();
	this.instance_1.setTransform(73.7,47.8,1,1,0,0,0,73.7,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(135).to({scaleX:1.1275,scaleY:1.1275,x:76.45,y:48.8},24,cjs.Ease.backInOut).wait(4).to({scaleX:1,scaleY:1,x:73.7,y:47.8},14).wait(7));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmcCuQgKgDgJgEQgFgDgJgIIgLgOIAdgTQADAFAFAFIAKAHIAKAEQAGACAFAAIAJgBIAHgCQACgCACgCIACgGQAAgEgDgCQgCgDgDgCIgJgDIgjgKIgMgGQgGgCgFgGQgEgFgCgFQgDgGAAgJQABgMAEgIQAEgKAHgFQAHgGALgDQAKgDAOAAQANAAAIADQAIACAJAEQAGADAIAHIAKAKIgbAWIgHgHIgJgGIgKgEIgKgBQgRAAAAALQAAAEACACIAFAFIAsANIANAGQAFADAEAFQAFAFADAFQACAGAAAJQAAAJgDAIQgEAJgHAGQgIAHgMAEQgNAEgQAAQgLAAgLgDgAoiCuIAAhzIgrAAIAAghIB+AAIAAAhIgrAAIAABzgAqFCuIAAiUIAoAAIAACUgAr7CuIAAiUIBmAAIAAAhIg/AAIAAAeIAsAAIAAAfIgsAAIAAA2gAt7CuIAAiUIBqAAIAAAhIhBAAIAAAYIAuAAIAAAfIguAAIAAAcIBFAAIAAAggAu2CuIg4hTIgBAAIAABTIgoAAIAAiUIArAAIA2BTIABAAIAAhTIAnAAIAACUgAyVCuIAAiUIBpAAIAAAhIhCAAIAAAYIAvAAIAAAfIgvAAIAAAcIBFAAIAAAggA0lAaIBNAAIAMACQAFABAGADIAKAGQADAEADAGQADAHgBAHQABAIgDAGQgBAEgGAGQgDAEgGADIgLADIANAEIAKAHQAEADACAHQADAHAAAJQAAAHgDAHQgBAGgEAFQgGAFgEACIgMAFQgGADgGAAIhPABgAz9CPIAUAAQAMAAAFgEQAEgDAAgIQAAgIgEgEQgGgDgLAAIgUAAgAz9BVIATAAIAJgBQAEgBACgCQACgBACgEIABgFIgBgGIgEgFQgCgCgDgBIgJgBIgUAAgANmgZQgLgDgHgEQgHgFgHgGQgGgHgFgHIAegTQACAFAFAFIAKAHIAKAEIAMACIAIgBIAHgCIAEgEIACgGQAAgEgDgCQgBgDgEgCQgDgCgGgBIgjgKIgNgGQgGgDgDgFQgFgFgCgFQgCgIgBgHQAAgLAFgJQAEgJAIgGQAHgGALgDQAKgDAMAAQAOAAAIADQAIABAJAFQAIAEAFAGIALAKIgbAWIgHgHQgEgDgFgDQgEgCgGgCIgKgBQgRAAAAALQAAAEACACIAFAFIAIADIAkAKIANAGQAGADAEAFQADADAEAHQACAIABAHQgBAKgDAHQgCAHgJAIQgHAHgMAEQgNAEgQAAQgMAAgMgDgAqOgcQgMgGgJgKQgHgLgEgOQgEgNABgSQgBgRAFgOQAEgOAKgKQAIgKANgFQAMgGASAAQAMAAAIACQAJACAJAGQAIAFAGAJQAGALAEANIglALIgEgMIgGgIQgFgEgCAAQgDgCgGAAIgKACQgFADgFAEQgEAGgCAHQgCAHgBAOQABAKABAIIAEAMQADAGADACIAGAFIAHACIAHABQAKAAAFgFQAHgFAEgIIgWAAIAAgdIA8AAIAABMIggAAIAAgUIgBAAIgDAHQgCAEgFADQgFAEgGACQgIADgIAAQgRAAgNgGgAuRgbQgLgEgHgIQgJgIgDgLQgDgLgBgPIAAhZIApAAIAABYQgBAPAGAIQAFAHAMAAQAMAAAFgHQAGgIAAgPIAAhYIAnAAIAABZQAAAPgDALQgEALgIAIQgIAIgLAEQgNAEgQAAQgOAAgOgEgASugZIAAiUIA4AAIAPABIAPACIAOAGQAFAEAFAFQAFAGACAHQACAHABAMQgBAKgCAJQgDAJgEAFQgGAGgFADQgIAEgGABIgPADIgfABIAAAvgATVhnIASAAQAGAAAFgBQAEgBADgDQAEgDAAgDIABgIIgBgHQAAgEgEgCQgCgCgFgCQgFgCgGAAIgSAAgARrgZIAAiUIAoAAIAACUgAQogZIAAg8IgxAAIAAA8IgoAAIAAiUIAoAAIAAA3IAxAAIAAg3IAoAAIAACUgAMEgZIgdgzIgKAAIAAAzIgoAAIAAiUIA6AAQANAAANACQAMAEAHAFQAJAGADAJQAFAJAAANQAAASgHAKQgJALgNAEIAeA5gALdhrIARAAQAMAAAGgEQAFgDAAgKQAAgJgFgEQgGgEgMAAIgRAAgAI2gZIAAiUIBpAAIAAAhIhBAAIAAAYIAvAAIAAAfIgvAAIAAAcIBFAAIAAAggAGoitIA/AAIAYACQAFABAHADQAGACAEAEQADAEACAGQADAFAAAJQAAAIgDAGQgCAGgEAEIgJAHIgLADIANAEQAGADAEAEQADADAEAHQACAGAAAKQAAAIgCAGQgEAHgDAEQgFAFgEACQgHAEgFABQgHADgGAAIhNABgAHPg4IAUAAQAMAAAEgEQAFgDAAgIQAAgIgFgEQgFgDgMAAIgTAAgAHPhyIASAAIAKgBQAEgBACgCQACgBABgEIABgFIgBgGIgDgFQgCgCgEgBIgJgBIgTAAgAFsgZIAAhcIgBAAIgCALIgWBRIgjAAIgXheIgBAAIAABeIgoAAIAAiUIA6AAIAZBkIABAAIAXhkIA4AAIAACUgABxgZIAAiUIBrAAIAAAhIhCAAIAAAYIAvAAIAAAfIgvAAIAAAcIBEAAIAAAggAA2gZIAAhcIgBAAIgCALIgVBRIgiAAIgYheIgBAAIAABeIgnAAIAAiUIA5AAIAZBkIAAAAIAYhkIA4AAIAACUgAi3gZIg4hTIgBAAIAABTIgoAAIAAiUIArAAIA2BTIAAAAIAAhTIAoAAIAACUgAlagZIAAiUIAoAAIAACUgAoRgZIAAiUIBpAAIAAAhIhCAAIAAAYIAvAAIAAAfIgvAAIAAAcIBGAAIAAAggAsggZIAAiUIApAAIAAB0IA+AAIAAAggAxEitIBGABQAIABALAEQAJAEAIAFQAIAGAEAIQAGAIADALQADALAAAOQAAAPgDALQgDAKgGAJQgEAIgIAGQgIAGgJADQgIAEgLABIhGACgAwcg5IALAAQAKAAAJgDQAHgCAEgFQAFgGACgIQACgGAAgNQAAgLgCgHQgCgGgFgGQgFgFgGgCQgHgDgMAAIgLAAgAyAgZIg5hTIAAAAIAABTIgnAAIAAiUIAqAAIA2BTIAAAAIAAhTIAoAAIAACUgA0jgZIAAiUIAoAAIAACUg");
	this.shape.setTransform(132.75,17.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(184));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,0,271.8,59.3);


(lib.Symbol3copy = function(mode,startPosition,loop,reversed) {
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
	this.frame_101 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(101).call(this.frame_101).wait(2));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax5M0QiVAAAAiVIAA09QAAiVCVAAMAjzAAAQCVAAAACVIAAU9QAACViVAAg");
	mask.setTransform(129.525,82.05);

	// Layer_2
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(324.6,190,0.738,1.7762,34.2191,0,0,80.8,80.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({y:189.95},0).to({x:-53.2,y:-44.75},15).wait(4).to({startPosition:0},0).to({x:324.6,y:189.95},15).wait(2));

	// Layer_1
	this.instance_1 = new lib.Symbol9("synched",0);
	this.instance_1.setTransform(129.5,82,1,1,0,0,0,129.5,82);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({startPosition:0},0).to({regX:129.9,scaleX:0.0035,x:129.55},10,cjs.Ease.quadOut).to({regX:129.5,scaleX:1,x:129.5},10,cjs.Ease.quadOut).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,259,164.1);


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

	// timeline functions:
	this.frame_552 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(552).call(this.frame_552).wait(22));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax5M0QiVAAAAiVIAA09QAAiVCVAAMAjzAAAQCVAAAACVIAAU9QAACViVAAg");
	mask.setTransform(129.525,82.05);

	// Layer_2
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(324.6,190,0.738,1.7762,34.2191,0,0,80.8,80.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({y:189.95},0).to({x:-53.2,y:-44.75},15).wait(4).to({startPosition:0},0).to({x:324.6,y:189.95},15).wait(107).to({startPosition:0},0).to({x:-60.35,y:-24.95},21,cjs.Ease.quadInOut).wait(103).to({x:-72.85,y:-24.8},0).to({x:324.6,y:189.95},22,cjs.Ease.quadInOut).wait(134).to({startPosition:0},0).to({x:-60.35,y:-24.95},21,cjs.Ease.quadInOut).wait(65));

	// Layer_1
	this.instance_1 = new lib.Symbol9("synched",0);
	this.instance_1.setTransform(129.5,82,1,1,0,0,0,129.5,82);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({startPosition:0},0).to({regX:129.9,scaleX:0.0035,x:129.55},10,cjs.Ease.quadOut).to({regX:129.5,scaleX:1,x:129.5},10,cjs.Ease.quadOut).to({_off:true},486).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-148.5,414,312.6);


(lib.Group = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,300,250), null);


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
	this.instance = new lib.Group();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0.3516;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Symbol14();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,300,250), null);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0.25;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Symbol11("synched",0);
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,300,250), null);


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

	// Layer_2
	this.instance = new lib.Group();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0.25;
	this.instance.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.img01();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,300,250), null);


// stage content:
(lib.AMEX_DV360_v4_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,894];
	// timeline functions:
	this.frame_0 = function() {
		var frequency = 30;
		stage.enableMouseOver(frequency);
		
		this.ctaBTN.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			window.open(clickTag,"_blank")
			// End your custom code
		}
		
		
		this.replay_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(2);
		}
	}
	this.frame_894 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(894).call(this.frame_894).wait(1));

	// Layer_17
	this.replay_btn = new lib.Symbol20();
	this.replay_btn.name = "replay_btn";
	this.replay_btn.setTransform(24.2,23.45,0.8204,0.9149,0,0,0,11.2,10.8);
	new cjs.ButtonHelper(this.replay_btn, 0, 1, 2, false, new lib.Symbol20(), 3);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(895));

	// Layer_18
	this.ctaBTN = new lib.Symbol20();
	this.ctaBTN.name = "ctaBTN";
	this.ctaBTN.setTransform(9.4,9.2,13.4519,11.4949,0,0,0,0.7,0.8);
	new cjs.ButtonHelper(this.ctaBTN, 0, 1, 2, false, new lib.Symbol20(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ctaBTN).wait(895));

	// logo
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(248.45,-22.5,1,1,0,0,0,36.6,12.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({y:27.5},24,cjs.Ease.backOut).wait(854));

	// Layer_1
	this.instance_1 = new lib.Symbol28();
	this.instance_1.setTransform(237.95,222.8,1,1,0,0,0,1,1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(681).to({_off:false},0).to({alpha:1},22).wait(192));

	// t_c
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(261.8,227.5,1,1,0,0,0,22.1,3.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(194).to({_off:false},0).to({alpha:1},22).wait(679));

	// cta
	this.instance_3 = new lib.ClipGroup();
	this.instance_3.setTransform(433.9,76.8,1,1,0,0,0,81,18);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(643).to({_off:false},0).wait(1).to({x:417.4,alpha:0.0717},0).wait(1).to({x:400.8,alpha:0.1439},0).wait(1).to({x:384.1,alpha:0.2164},0).wait(1).to({x:367.4,alpha:0.2891},0).wait(1).to({x:350.7,alpha:0.3617},0).wait(1).to({x:334.1,alpha:0.4338},0).wait(1).to({x:317.75,alpha:0.505},0).wait(1).to({x:301.75,alpha:0.5745},0).wait(1).to({x:286.3,alpha:0.6416},0).wait(1).to({x:271.75,alpha:0.7049},0).wait(1).to({x:258.35,alpha:0.7632},0).wait(1).to({x:246.35,alpha:0.8154},0).wait(1).to({x:235.95,alpha:0.8605},0).wait(1).to({x:227.3,alpha:0.8981},0).wait(1).to({x:220.35,alpha:0.9284},0).wait(1).to({x:214.9,alpha:0.9521},0).wait(1).to({x:210.7,alpha:0.9702},0).wait(1).to({x:207.6,alpha:0.9837},0).wait(1).to({x:205.35,alpha:0.9935},0).wait(1).to({x:203.8,alpha:1},0).wait(1).to({x:202.7},0).wait(1).to({x:202.05},0).wait(1).to({x:201.7},0).wait(1).to({x:201.55},0).wait(1).to({x:201.65},0).wait(1).to({x:201.85},0).wait(1).to({x:202.15},0).wait(1).to({x:202.55},0).wait(1).to({x:202.95},0).wait(1).to({x:203.45},0).wait(1).to({x:203.9},0).wait(51).to({regY:18.1,scaleX:1.1469,scaleY:1.1469,x:204,y:76.95},19,cjs.Ease.backInOut).wait(5).to({regY:18,scaleX:1,scaleY:1,x:203.9,y:76.8},20,cjs.Ease.quadInOut).wait(126));

	// replay_svg
	this.instance_4 = new lib.Symbol19();
	this.instance_4.setTransform(23.5,24,1,1,0,0,0,8.6,9.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(880).to({_off:false},0).to({alpha:1},14).wait(1));

	// t_indulge
	this.instance_5 = new lib.Symbol18();
	this.instance_5.setTransform(-202.8,160.9,1,1,0,0,0,132.2,28.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(656).to({_off:false},0).wait(1).to({regX:128.9,regY:29.5,x:-185.05,y:162,alpha:0.0601},0).wait(1).to({x:-163.9,alpha:0.1205},0).wait(1).to({x:-142.7,alpha:0.1811},0).wait(1).to({x:-121.4,alpha:0.2419},0).wait(1).to({x:-100.1,alpha:0.3028},0).wait(1).to({x:-78.8,alpha:0.3636},0).wait(1).to({x:-57.65,alpha:0.4241},0).wait(1).to({x:-36.7,alpha:0.484},0).wait(1).to({x:-16.1,alpha:0.5428},0).wait(1).to({x:4,alpha:0.6003},0).wait(1).to({x:23.4,alpha:0.6556},0).wait(1).to({x:41.8,alpha:0.7082},0).wait(1).to({x:58.95,alpha:0.7572},0).wait(1).to({x:74.6,alpha:0.802},0).wait(1).to({x:88.6,alpha:0.8419},0).wait(1).to({x:100.75,alpha:0.8766},0).wait(1).to({x:111.05,alpha:0.9061},0).wait(1).to({x:119.6,alpha:0.9305},0).wait(1).to({x:126.55,alpha:0.9504},0).wait(1).to({x:132.05,alpha:0.9663},0).wait(1).to({x:136.45,alpha:0.9787},0).wait(1).to({x:139.8,alpha:0.9883},0).wait(1).to({x:142.35,alpha:0.9956},0).wait(1).to({x:144.25,alpha:1},0).wait(1).to({x:145.55},0).wait(1).to({x:146.5},0).wait(1).to({x:147.05},0).wait(1).to({x:147.3},0).wait(1).to({x:147.4},0).wait(1).to({x:147.25},0).wait(1).to({x:147},0).wait(1).to({x:146.6},0).wait(1).to({x:146.15},0).wait(1).to({x:145.6},0).wait(1).to({x:145.05},0).wait(1).to({x:144.4},0).wait(1).to({regX:132.2,regY:28.4,x:147.2,y:160.9},0).wait(202));

	// t_best_part
	this.instance_6 = new lib.ClipGroup_3();
	this.instance_6.setTransform(224.3,209.25,0.7252,0.7252,0,0,0,62,8.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(-80.3,114.25,1,1,0,0,0,34.3,6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45).to({_off:false},0).to({regX:61.9,regY:8.4,scaleX:1,scaleY:1,x:224.25,y:209.1,alpha:1},42,cjs.Ease.elasticOut).wait(71).to({x:369.05,alpha:0},16,cjs.Ease.quadInOut).to({_off:true},1).wait(720));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(628).to({_off:false},0).to({x:58.3,y:113.85,alpha:1},24,cjs.Ease.quintOut).wait(243));

	// t_skip_to
	this.instance_8 = new lib.ClipGroup_4();
	this.instance_8.setTransform(60.15,151.9,0.6566,0.6566,0,0,0,45.5,19.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.Symbol3copy();
	this.instance_9.setTransform(-95,49.65,0.3354,0.3354);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(26).to({_off:false},0).to({regX:44.9,regY:19.2,scaleX:1,scaleY:1,x:60,y:151.65,alpha:1},42,cjs.Ease.elasticOut).wait(90).to({x:-50,alpha:0},16,cjs.Ease.quadInOut).to({_off:true},1).wait(720));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(628).to({_off:false},0).to({x:15,alpha:1},24,cjs.Ease.quintOut).wait(243));

	// Layer_16
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(82,86,90,0)").s().p("A6yTiIHWy9In+0GMA21AAAMAAAAnDg");
	this.shape.setTransform(413.1,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(82,86,90,0.071)").s().p("AzEAnIoy0JMA3tAAAMAAAAnDMg26AACg");
	this.shape_1.setTransform(410.3,125.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(82,86,90,0.141)").s().p("AytApIpl0MMA4lAAAMAAAAnDMg3oAAEg");
	this.shape_2.setTransform(407.5,125.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(82,86,90,0.216)").s().p("AyVAqIqZ0PMA5dAAAMAAAAnEMg4WAAHg");
	this.shape_3.setTransform(404.7,125.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(82,86,90,0.286)").s().p("Ax+AsIrM0SMA6VAAAMAAAAnEMg5DAAJg");
	this.shape_4.setTransform(401.875,125.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(82,86,90,0.357)").s().p("AxmAuIsA0VMA7NAAAMAAAAnDMg5xAAMg");
	this.shape_5.setTransform(399.075,125.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(82,86,90,0.427)").s().p("AxPAwIsz0YMA8FAAAMAAAAnDMg6fAAOg");
	this.shape_6.setTransform(396.275,125.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(82,86,90,0.502)").s().p("Aw3AzItn0cMA89AAAMAAAAnDMg7MAAQg");
	this.shape_7.setTransform(393.475,125.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(82,86,90,0.573)").s().p("AwgA0Iua0eMA91AAAMAAAAnDMg76AASg");
	this.shape_8.setTransform(390.675,125.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(82,86,90,0.643)").s().p("AwJA2IvN0hMA+tAAAMAAAAnDMg8oAAUg");
	this.shape_9.setTransform(387.875,126.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(82,86,90,0.714)").s().p("AvxA4IwB0lMA/lAAAMAAAAnEMg9WAAWg");
	this.shape_10.setTransform(385.075,126.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(82,86,90,0.784)").s().p("AvaA6Iw10oMBAeAAAMAAAAnEMg+DAAZg");
	this.shape_11.setTransform(382.25,126.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(82,86,90,0.859)").s().p("AvCA8Ixp0rMBBWAAAMAAAAnDMg+wAAcg");
	this.shape_12.setTransform(379.45,126.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(82,86,90,0.929)").s().p("AurA+Iyc0uMBCOAAAMAAAAnDMg/fAAeg");
	this.shape_13.setTransform(376.65,126.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#52565A").s().p("AuTA/IzP0wMBDFAAAMAAAAnDMhAMAAgg");
	this.shape_14.setTransform(373.85,126.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},880).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

	// arrows
	this.instance_10 = new lib.Symbol2("synched",0);
	this.instance_10.setTransform(-762.1,134.5,1,1,0,0,0,691.9,84);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(607).to({_off:false},0).to({x:-539.75},28,cjs.Ease.sineOut).to({x:-181.6,y:134.05},259,cjs.Ease.get(0.05)).wait(1));

	// img03_arrow_copy
	this.instance_11 = new lib.Symbol21();
	this.instance_11.setTransform(-284.15,109,1.5329,1.5329,0,0,0,171.5,71.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(593).to({_off:false},0).to({x:595.85},26,cjs.Ease.quadOut).wait(276));

	// img03_mask_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_593 = new cjs.Graphics().p("EhKnAUIMAAAgoPMA/yAAAIRtT5IgBABIxrUVg");
	var mask_graphics_594 = new cjs.Graphics().p("EhFaAUIMAAAgoPMA/yAAAIRsT5IAAABIxrUVg");
	var mask_graphics_595 = new cjs.Graphics().p("EhAaAUIMAAAgoPMA/yAAAIRsT5IAAABIxrUVg");
	var mask_graphics_596 = new cjs.Graphics().p("Eg7oAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_597 = new cjs.Graphics().p("Eg3CAUIMAAAgoPMA/xAAAIRtT5IAAABIxsUVg");
	var mask_graphics_598 = new cjs.Graphics().p("EgyqAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_599 = new cjs.Graphics().p("EgueAUIMAAAgoPMA/xAAAIRtT5IAAABIxsUVg");
	var mask_graphics_600 = new cjs.Graphics().p("EgqgAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_601 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_602 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_603 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_604 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_605 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_606 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_607 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_608 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_609 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_610 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_611 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_612 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_613 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_614 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_615 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_616 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_617 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_618 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_graphics_619 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(593).to({graphics:mask_graphics_593,x:-477.575,y:128.775}).wait(1).to({graphics:mask_graphics_594,x:-444.3043,y:128.775}).wait(1).to({graphics:mask_graphics_595,x:-412.3383,y:128.775}).wait(1).to({graphics:mask_graphics_596,x:-381.6771,y:128.775}).wait(1).to({graphics:mask_graphics_597,x:-352.3206,y:128.775}).wait(1).to({graphics:mask_graphics_598,x:-324.2688,y:128.775}).wait(1).to({graphics:mask_graphics_599,x:-297.5217,y:128.775}).wait(1).to({graphics:mask_graphics_600,x:-272.0794,y:128.775}).wait(1).to({graphics:mask_graphics_601,x:-235.1087,y:128.775}).wait(1).to({graphics:mask_graphics_602,x:-189.443,y:128.775}).wait(1).to({graphics:mask_graphics_603,x:-146.3868,y:128.775}).wait(1).to({graphics:mask_graphics_604,x:-105.9401,y:128.775}).wait(1).to({graphics:mask_graphics_605,x:-68.1028,y:128.775}).wait(1).to({graphics:mask_graphics_606,x:-32.875,y:128.775}).wait(1).to({graphics:mask_graphics_607,x:-0.2567,y:128.775}).wait(1).to({graphics:mask_graphics_608,x:29.7522,y:128.775}).wait(1).to({graphics:mask_graphics_609,x:57.1516,y:128.775}).wait(1).to({graphics:mask_graphics_610,x:81.9416,y:128.775}).wait(1).to({graphics:mask_graphics_611,x:104.122,y:128.775}).wait(1).to({graphics:mask_graphics_612,x:123.693,y:128.775}).wait(1).to({graphics:mask_graphics_613,x:140.6546,y:128.775}).wait(1).to({graphics:mask_graphics_614,x:155.0067,y:128.775}).wait(1).to({graphics:mask_graphics_615,x:166.7493,y:128.775}).wait(1).to({graphics:mask_graphics_616,x:175.8824,y:128.775}).wait(1).to({graphics:mask_graphics_617,x:182.4061,y:128.775}).wait(1).to({graphics:mask_graphics_618,x:186.3203,y:128.775}).wait(1).to({graphics:mask_graphics_619,x:187.625,y:128.775}).wait(276));

	// Layer_10
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#52565A").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_15.setTransform(150,125);
	this.shape_15._off = true;

	var maskedShapeInstanceList = [this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(593).to({_off:false},0).wait(302));

	// card_t
	this.instance_12 = new lib.Symbol7();
	this.instance_12.setTransform(424.3,113.85,1,1,0,0,0,34.3,6);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({_off:false},0).to({x:58.3,alpha:1},30,cjs.Ease.quintOut).wait(117).to({y:153.65},23,cjs.Ease.cubicInOut).wait(711));

	// card
	this.instance_13 = new lib.Symbol3();
	this.instance_13.setTransform(302,49.65,0.3354,0.3354);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(14).to({_off:false},0).to({x:15,alpha:1},30,cjs.Ease.quintOut).wait(117).to({y:89.45},23,cjs.Ease.cubicInOut).wait(711));

	// t_with
	this.instance_14 = new lib.Symbol16();
	this.instance_14.setTransform(212.7,194.25,0.8087,0.8087,0,0,0,72.1,25);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(473).to({_off:false},0).to({regX:72,regY:24.8,scaleX:1,scaleY:1,x:212.55,y:194.2,alpha:1},37,cjs.Ease.elasticOut).wait(25).to({regX:72.1,regY:24.9,scaleX:1.0868,scaleY:1.0868,x:212.65,y:194.35},15,cjs.Ease.quadInOut).wait(5).to({regX:72,regY:24.8,scaleX:1,scaleY:1,x:212.55,y:194.2},16,cjs.Ease.quadInOut).to({_off:true},48).wait(276));

	// img03_arrow
	this.instance_15 = new lib.Symbol21();
	this.instance_15.setTransform(-284.15,109,1.5329,1.5329,0,0,0,171.5,71.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(447).to({_off:false},0).to({x:595.85},26,cjs.Ease.quadOut).wait(422));

	// img03_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_447 = new cjs.Graphics().p("EhKnAUIMAAAgoPMA/yAAAIRtT5IgBABIxrUVg");
	var mask_1_graphics_448 = new cjs.Graphics().p("EhFaAUIMAAAgoPMA/yAAAIRsT5IAAABIxrUVg");
	var mask_1_graphics_449 = new cjs.Graphics().p("EhAaAUIMAAAgoPMA/yAAAIRsT5IAAABIxrUVg");
	var mask_1_graphics_450 = new cjs.Graphics().p("Eg7oAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_451 = new cjs.Graphics().p("Eg3CAUIMAAAgoPMA/xAAAIRtT5IAAABIxsUVg");
	var mask_1_graphics_452 = new cjs.Graphics().p("EgyqAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_453 = new cjs.Graphics().p("EgueAUIMAAAgoPMA/xAAAIRtT5IAAABIxsUVg");
	var mask_1_graphics_454 = new cjs.Graphics().p("EgqgAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_455 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_456 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_457 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_458 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_459 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_460 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_461 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_462 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_463 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_464 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_465 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_466 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_467 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_468 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_469 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_470 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_471 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_472 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_1_graphics_473 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(447).to({graphics:mask_1_graphics_447,x:-477.575,y:128.775}).wait(1).to({graphics:mask_1_graphics_448,x:-444.3043,y:128.775}).wait(1).to({graphics:mask_1_graphics_449,x:-412.3383,y:128.775}).wait(1).to({graphics:mask_1_graphics_450,x:-381.6771,y:128.775}).wait(1).to({graphics:mask_1_graphics_451,x:-352.3206,y:128.775}).wait(1).to({graphics:mask_1_graphics_452,x:-324.2688,y:128.775}).wait(1).to({graphics:mask_1_graphics_453,x:-297.5217,y:128.775}).wait(1).to({graphics:mask_1_graphics_454,x:-272.0794,y:128.775}).wait(1).to({graphics:mask_1_graphics_455,x:-235.1087,y:128.775}).wait(1).to({graphics:mask_1_graphics_456,x:-189.443,y:128.775}).wait(1).to({graphics:mask_1_graphics_457,x:-146.3868,y:128.775}).wait(1).to({graphics:mask_1_graphics_458,x:-105.9401,y:128.775}).wait(1).to({graphics:mask_1_graphics_459,x:-68.1028,y:128.775}).wait(1).to({graphics:mask_1_graphics_460,x:-32.875,y:128.775}).wait(1).to({graphics:mask_1_graphics_461,x:-0.2567,y:128.775}).wait(1).to({graphics:mask_1_graphics_462,x:29.7522,y:128.775}).wait(1).to({graphics:mask_1_graphics_463,x:57.1516,y:128.775}).wait(1).to({graphics:mask_1_graphics_464,x:81.9416,y:128.775}).wait(1).to({graphics:mask_1_graphics_465,x:104.122,y:128.775}).wait(1).to({graphics:mask_1_graphics_466,x:123.693,y:128.775}).wait(1).to({graphics:mask_1_graphics_467,x:140.6546,y:128.775}).wait(1).to({graphics:mask_1_graphics_468,x:155.0067,y:128.775}).wait(1).to({graphics:mask_1_graphics_469,x:166.7493,y:128.775}).wait(1).to({graphics:mask_1_graphics_470,x:175.8824,y:128.775}).wait(1).to({graphics:mask_1_graphics_471,x:182.4061,y:128.775}).wait(1).to({graphics:mask_1_graphics_472,x:186.3203,y:128.775}).wait(1).to({graphics:mask_1_graphics_473,x:187.625,y:128.775}).wait(422));

	// t_shop
	this.instance_16 = new lib.Symbol15();
	this.instance_16.setTransform(126.85,65.9,0.7844,0.7844,0,0,0,111.3,15.8);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(459).to({_off:false},0).to({regY:15.9,scaleX:1,scaleY:1,x:126.8,y:65.95,alpha:1},33,cjs.Ease.elasticOut).to({_off:true},127).wait(276));

	// img3
	this.instance_17 = new lib.Symbol24();
	this.instance_17.setTransform(216.6,155,1,1,0,0,0,216.6,155);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(447).to({_off:false},0).to({regX:216.5,scaleX:1.1765,scaleY:1.1765,x:216.55,y:155.05},171).to({_off:true},1).wait(276));

	// Symbol_13
	this.instance_18 = new lib.Symbol13("synched",0);
	this.instance_18.setTransform(197.65,203.05,0.699,0.699,0,0,0,87.1,16);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(314).to({_off:false},0).to({regX:86.9,regY:15.8,scaleX:1,scaleY:1,x:197.4,y:202.8,alpha:1},36,cjs.Ease.elasticOut).wait(33).to({startPosition:0},0).to({regX:87.2,regY:16.1,scaleX:1.0848,scaleY:1.0848,x:197.65,y:203.15},14,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({regX:86.9,regY:15.8,scaleX:1,scaleY:1,x:197.4,y:202.8},14,cjs.Ease.quadInOut).to({_off:true},58).wait(421));

	// img02_arrow
	this.instance_19 = new lib.Symbol21();
	this.instance_19.setTransform(-284.15,109,1.5329,1.5329,0,0,0,171.5,71.1);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(288).to({_off:false},0).to({x:595.85},26,cjs.Ease.quadOut).wait(581));

	// img02_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_288 = new cjs.Graphics().p("EhKnAUIMAAAgoPMA/yAAAIRtT5IgBABIxrUVg");
	var mask_2_graphics_289 = new cjs.Graphics().p("EhFaAUIMAAAgoPMA/yAAAIRsT5IAAABIxrUVg");
	var mask_2_graphics_290 = new cjs.Graphics().p("EhAaAUIMAAAgoPMA/yAAAIRsT5IAAABIxrUVg");
	var mask_2_graphics_291 = new cjs.Graphics().p("Eg7oAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_292 = new cjs.Graphics().p("Eg3CAUIMAAAgoPMA/xAAAIRtT5IAAABIxsUVg");
	var mask_2_graphics_293 = new cjs.Graphics().p("EgyqAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_294 = new cjs.Graphics().p("EgueAUIMAAAgoPMA/xAAAIRtT5IAAABIxsUVg");
	var mask_2_graphics_295 = new cjs.Graphics().p("EgqgAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_296 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_297 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_298 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_299 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_300 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_301 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_302 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_303 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_304 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_305 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_306 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_307 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_308 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_309 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_310 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_311 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_312 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_313 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");
	var mask_2_graphics_314 = new cjs.Graphics().p("EgovAUIMAAAgoPMA/xAAAIRuT5IgBABIxsUVg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(288).to({graphics:mask_2_graphics_288,x:-477.575,y:128.775}).wait(1).to({graphics:mask_2_graphics_289,x:-444.3043,y:128.775}).wait(1).to({graphics:mask_2_graphics_290,x:-412.3383,y:128.775}).wait(1).to({graphics:mask_2_graphics_291,x:-381.6771,y:128.775}).wait(1).to({graphics:mask_2_graphics_292,x:-352.3206,y:128.775}).wait(1).to({graphics:mask_2_graphics_293,x:-324.2688,y:128.775}).wait(1).to({graphics:mask_2_graphics_294,x:-297.5217,y:128.775}).wait(1).to({graphics:mask_2_graphics_295,x:-272.0794,y:128.775}).wait(1).to({graphics:mask_2_graphics_296,x:-235.1087,y:128.775}).wait(1).to({graphics:mask_2_graphics_297,x:-189.443,y:128.775}).wait(1).to({graphics:mask_2_graphics_298,x:-146.3868,y:128.775}).wait(1).to({graphics:mask_2_graphics_299,x:-105.9401,y:128.775}).wait(1).to({graphics:mask_2_graphics_300,x:-68.1028,y:128.775}).wait(1).to({graphics:mask_2_graphics_301,x:-32.875,y:128.775}).wait(1).to({graphics:mask_2_graphics_302,x:-0.2567,y:128.775}).wait(1).to({graphics:mask_2_graphics_303,x:29.7522,y:128.775}).wait(1).to({graphics:mask_2_graphics_304,x:57.1516,y:128.775}).wait(1).to({graphics:mask_2_graphics_305,x:81.9416,y:128.775}).wait(1).to({graphics:mask_2_graphics_306,x:104.122,y:128.775}).wait(1).to({graphics:mask_2_graphics_307,x:123.693,y:128.775}).wait(1).to({graphics:mask_2_graphics_308,x:140.6546,y:128.775}).wait(1).to({graphics:mask_2_graphics_309,x:155.0067,y:128.775}).wait(1).to({graphics:mask_2_graphics_310,x:166.7493,y:128.775}).wait(1).to({graphics:mask_2_graphics_311,x:175.8824,y:128.775}).wait(1).to({graphics:mask_2_graphics_312,x:182.4061,y:128.775}).wait(1).to({graphics:mask_2_graphics_313,x:186.3203,y:128.775}).wait(1).to({graphics:mask_2_graphics_314,x:187.625,y:128.775}).wait(581));

	// t_get_up
	this.instance_20 = new lib.Symbol12("synched",0);
	this.instance_20.setTransform(107.55,65.45,0.608,0.608,0,0,0,93.1,16.1);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(297).to({_off:false},0).to({regX:93,regY:15.9,scaleX:1,scaleY:1,x:107.5,y:65.3,alpha:1},33,cjs.Ease.elasticOut).to({_off:true},144).wait(421));

	// img02
	this.instance_21 = new lib.Symbol23();
	this.instance_21.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(288).to({_off:false},0).to({regY:124.9,scaleX:1.1384,scaleY:1.1384,x:154.3,y:129.75},185).to({_off:true},1).wait(421));

	// t_and_get
	this.instance_22 = new lib.Symbol5();
	this.instance_22.setTransform(227.8,193,0.7485,0.7485,0,0,0,57.6,23.4);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(185).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},38,cjs.Ease.elasticOut).to({_off:true},92).wait(580));

	// t_spend
	this.instance_23 = new lib.Symbol4();
	this.instance_23.setTransform(116.3,64.9,0.8122,0.8122,0,0,0,101.2,16.7);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(175).to({_off:false},0).to({regX:101.1,regY:16.5,scaleX:1,scaleY:1,x:116.15,y:64.75,alpha:1},38,cjs.Ease.elasticOut).to({_off:true},102).wait(580));

	// arrows_copy (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_13 = new cjs.Graphics().p("EBYAARFILitRIrks/IIlAAILjM+IrjNSgEBGLARFILjtRIrls/IIlAAILkM+IrkNSgEBSKAD0IrRM8IHsAAILRs9IrSspInsAAgEA0YARFILitRIrks/IIlAAILjM+IriNSgEAijARFILitRIrks/IIlAAILjM+IrjNSgEAuhAD0IrQM8IHsAAILRs9IrSspIntAAgAQtRFILitRIrks/IIlAAILkM+IrjNSgAhGRFILhtRIrks/IIkAAILkM+IrjNSgAK3D0IrPM8IHqAAILSs9IrSspInsAAgAy6RFILitRIrjs/IIlAAILiM+IriNSgEgkvARFILjtRIrls/IIlAAILkM+IrjNSgA4wD0IrRM8IHsAAILRs9IrRspIntAAgEg2nARFILitRIrks/IIlAAILkM+IrjNSgEhIcARFILjtRIrls/IIlAAILkM+IrjNSgEg8dAD0IrQM8IHrAAILRs9IrRspIntAAgEhaOARFILitRIrks/IIlAAILjM+IrjNSgEhsEARFILjtRIrls/IImAAILjM+IrjNSgEhgFAD0IrRM8IHsAAILRs9IrRspIntAAg");
	var mask_3_graphics_14 = new cjs.Graphics().p("EBYAAREILitQIrks/IIlAAILjM+IriNRgEBGLAREILitQIrks/IIlAAILjM+IrjNRgEBSJAD0IrQM8IHsAAILRs9IrSspIntAAgEA0YAREILitQIrks/IIlAAILkM+IrjNRgEAijAREILitQIrks/IIlAAILkM+IrjNRgEAuhAD0IrQM8IHsAAILRs9IrRspIntAAgAQtREILitQIrjs/IIlAAILjM+IrjNRgAhHREILitQIrks/IIkAAILkM+IrjNRgAK3D0IrQM8IHrAAILRs9IrRspInsAAgAy5REILitQIrks/IIlAAILiM+IriNRgEgkvAREILjtQIrks/IIlAAILjM+IrjNRgA4wD0IrRM8IHtAAILRs9IrSspIntAAgEg2mAREILitQIrks/IIlAAILjM+IrjNRgEhIcAREILjtQIrls/IImAAILjM+IrjNRgEg8dAD0IrRM8IHsAAILRs9IrRspIntAAgEhaOAREILitQIrls/IIlAAILkM+IrjNRgEhsDAREILitQIrks/IIlAAILjM+IrjNRgEhgFAD0IrRM8IHtAAILRs9IrSspIntAAg");
	var mask_3_graphics_15 = new cjs.Graphics().p("EBYAAREILitQIrks/IIlAAILjM+IrjNRgEBGLAREILjtQIrls/IIlAAILkM+IrjNRgEBSKAD0IrRM8IHsAAILRs9IrSspInsAAgEA0YAREILitQIrks/IIlAAILjM+IrjNRgEAijAREILitQIrks/IIlAAILjM+IrjNRgEAuiAD0IrRM8IHsAAILRs9IrSspIntAAgAQuREILitQIrls/IIlAAILkM+IrjNRgAhGREILhtQIrjs/IIkAAILjM+IrjNRgAK3D0IrPM8IHrAAILRs9IrSspInsAAgAy6REILitQIrks/IIlAAILjM+IriNRgEgkvAREILjtQIrls/IIlAAILkM+IrjNRgA4wD0IrQM8IHrAAILRs9IrRspIntAAgEg2nAREILitQIrks/IIlAAILkM+IrjNRgEhIbAREILitQIrls/IIlAAILkM+IrjNRgEg8dAD0IrQM8IHrAAILRs9IrRspIntAAgEhaPAREILitQIrjs/IIlAAILjM+IrjNRgEhsEAREILjtQIrls/IIlAAILkM+IrjNRgEhgFAD0IrRM8IHsAAILRs9IrRspIntAAg");
	var mask_3_graphics_16 = new cjs.Graphics().p("EBYAAREILitQIrks/IIlAAILkM+IrkNRgEBGLAREILjtQIrls/IIlAAILkM+IrjNRgEBSKAD0IrRM8IHsAAILRs9IrRspIntAAgEA0YAREILitQIrks/IIlAAILjM+IrjNRgEAijAREILjtQIrls/IIlAAILjM+IrjNRgEAuiAD0IrRM8IHsAAILRs9IrSspIntAAgAQuREILitQIrls/IIlAAILkM+IrjNRgAhGREILhtQIrjs/IIkAAILjM+IrjNRgAK3D0IrQM8IHsAAILRs9IrSspInsAAgAy6REILitQIrks/IIlAAILjM+IriNRgEgkuAREILitQIrls/IIlAAILkM+IrjNRgA4wD0IrQM8IHrAAILRs9IrRspIntAAgEg2nAREILitQIrks/IIlAAILkM+IrjNRgEhIbAREILitQIrls/IIlAAILkM+IrjNRgEg8dAD0IrQM8IHrAAILSs9IrSspIntAAgEhaPAREILitQIrjs/IIlAAILjM+IrjNRgEhsEAREILjtQIrls/IIlAAILkM+IrjNRgEhgFAD0IrRM8IHsAAILRs9IrRspIntAAg");
	var mask_3_graphics_17 = new cjs.Graphics().p("EBYAAREILitQIrks/IIlAAILjM+IrjNRgEBGLAREILjtQIrls/IIlAAILkM+IrkNRgEBSKAD0IrRM8IHsAAILRs9IrSspInsAAgEA0YAREILitQIrks/IIlAAILjM+IriNRgEAijAREILitQIrks/IIlAAILjM+IrjNRgEAuhAD0IrQM8IHsAAILRs9IrSspIntAAgAQtREILitQIrks/IIlAAILkM+IrjNRgAhGREILhtQIrks/IIkAAILkM+IrjNRgAK3D0IrPM8IHqAAILSs9IrSspInsAAgAy6REILitQIrjs/IIlAAILiM+IriNRgEgkvAREILjtQIrls/IIlAAILkM+IrjNRgA4wD0IrRM8IHsAAILRs9IrRspIntAAgEg2nAREILitQIrks/IIlAAILkM+IrjNRgEhIcAREILjtQIrls/IIlAAILkM+IrjNRgEg8dAD0IrQM8IHrAAILRs9IrRspIntAAgEhaOAREILhtQIrjs/IIlAAILjM+IrjNRgEhsEAREILjtQIrls/IImAAILjM+IrjNRgEhgFAD0IrRM8IHsAAILRs9IrRspIntAAg");
	var mask_3_graphics_18 = new cjs.Graphics().p("EBYAAREILitQIrks/IIlAAILkM+IrjNRgEBGLAREILitQIrks/IIlAAILjM+IriNRgEBSJAD0IrQM8IHsAAILRs9IrRspInuAAgEA0YAREILitQIrks/IIlAAILjM+IrjNRgEAijAREILjtQIrls/IIlAAILkM+IrjNRgEAuiAD0IrRM8IHsAAILRs9IrRspIntAAgAQuREILitQIrks/IIlAAILjM+IrjNRgAhHREILitQIrjs/IIkAAILjM+IrjNRgAK3D0IrQM8IHsAAILQs9IrRspInsAAgAy5REILitQIrls/IIlAAILjM+IriNRgEgkuAREILitQIrks/IIlAAILjM+IrjNRgA4wD0IrRM8IHtAAILRs9IrSspIntAAgEg2mAREILitQIrls/IImAAILjM+IrjNRgEhIbAREILitQIrks/IIlAAILjM+IrjNRgEg8dAD0IrRM8IHtAAILRs9IrSspIntAAgEhaPAREILitQIrks/IIlAAILkM+IrjNRgEhsDAREILitQIrls/IIlAAILkM+IrjNRgEhgFAD0IrQM8IHrAAILSs9IrSspIntAAg");
	var mask_3_graphics_19 = new cjs.Graphics().p("EBYAAREILitQIrks/IIlAAILjM+IriNRgEBGLAREILitQIrks/IIlAAILjM+IrjNRgEBSJAD0IrQM8IHsAAILRs9IrSspIntAAgEA0YAREILitQIrks/IIlAAILkM+IrjNRgEAijAREILitQIrks/IIlAAILkM+IrjNRgEAuhAD0IrQM8IHsAAILRs9IrRspIntAAgAQtREILitQIrjs/IIlAAILjM+IrjNRgAhHREILitQIrks/IIkAAILkM+IrjNRgAK3D0IrQM8IHrAAILRs9IrRspInsAAgAy5REILitQIrks/IIlAAILiM+IriNRgEgkvAREILjtQIrks/IIlAAILjM+IrjNRgA4wD0IrRM8IHtAAILRs9IrSspIntAAgEg2mAREILitQIrks/IIlAAILjM+IrjNRgEhIcAREILjtQIrks/IIlAAILjM+IrjNRgEg8dAD0IrRM8IHtAAILQs9IrRspIntAAgEhaOAREILitQIrls/IIlAAILkM+IrjNRgEhsDAREILitQIrks/IIlAAILjM+IrjNRgEhgFAD0IrQM8IHsAAILRs9IrSspIntAAg");
	var mask_3_graphics_20 = new cjs.Graphics().p("EBYAAREILitQIrks/IIlAAILkM+IrjNRgEBGLAREILitQIrks/IIlAAILjM+IriNRgEBSJAD0IrQM8IHsAAILRs9IrRspInuAAgEA0YAREILitQIrks/IIlAAILkM+IrkNRgEAijAREILjtQIrls/IIlAAILkM+IrjNRgEAuhAD0IrQM8IHsAAILRs9IrRspIntAAgAQtREILitQIrjs/IIlAAILjM+IrjNRgAhHREILitQIrks/IIkAAILkM+IrjNRgAK3D0IrQM8IHrAAILRs9IrRspInsAAgAy5REILitQIrls/IIlAAILjM+IriNRgEgkuAREILitQIrks/IIlAAILjM+IrjNRgA4wD0IrRM8IHtAAILRs9IrSspIntAAgEg2mAREILitQIrks/IIlAAILjM+IrjNRgEhIcAREILjtQIrks/IIlAAILjM+IrjNRgEg8dAD0IrRM8IHtAAILRs9IrSspIntAAgEhaPAREILitQIrks/IIlAAILkM+IrjNRgEhsDAREILitQIrks/IIlAAILjM+IrjNRgEhgFAD0IrQM8IHrAAILSs9IrSspIntAAg");
	var mask_3_graphics_21 = new cjs.Graphics().p("EBYAAREILitQIrks/IIlAAILjM+IrjNRgEBGLAREILjtQIrls/IIlAAILkM+IrjNRgEBSKAD0IrRM8IHsAAILRs9IrSspInsAAgEA0YAREILitQIrks/IIlAAILjM+IrjNRgEAijAREILitQIrks/IIlAAILjM+IrjNRgEAuiAD0IrRM8IHsAAILRs9IrSspIntAAgAQuREILitQIrls/IIlAAILkM+IrjNRgAhGREILhtQIrjs/IIkAAILjM+IrjNRgAK3D0IrPM8IHrAAILRs9IrSspInsAAgAy6REILitQIrks/IIlAAILjM+IriNRgEgkvAREILjtQIrls/IIlAAILkM+IrjNRgA4wD0IrQM8IHrAAILRs9IrRspIntAAgEg2nAREILitQIrks/IIlAAILkM+IrjNRgEhIbAREILitQIrls/IIlAAILkM+IrjNRgEg8dAD0IrQM8IHrAAILRs9IrRspIntAAgEhaPAREILitQIrjs/IIlAAILjM+IrjNRgEhsEAREILjtQIrls/IIlAAILkM+IrjNRgEhgFAD0IrRM8IHsAAILRs9IrRspIntAAg");
	var mask_3_graphics_22 = new cjs.Graphics().p("EBYAAREILitQIrks/IIlAAILkM+IrjNRgEBGLAREILitQIrks/IIlAAILkM+IrjNRgEBSJAD0IrQM8IHsAAILRs9IrRspIntAAgEA0YAREILitQIrks/IIlAAILjM+IrjNRgEAijAREILjtQIrls/IIlAAILkM+IrjNRgEAuiAD0IrRM8IHsAAILRs9IrSspInsAAgAQuREILitQIrks/IIlAAILjM+IrjNRgAhHREILitQIrjs/IIkAAILjM+IrjNRgAK3D0IrQM8IHsAAILRs9IrSspInsAAgAy6REILjtQIrls/IIlAAILjM+IriNRgEgkuAREILitQIrks/IIlAAILjM+IrjNRgA4wD0IrQM8IHsAAILRs9IrSspIntAAgEg2mAREILitQIrls/IIlAAILkM+IrjNRgEhIbAREILitQIrks/IIlAAILjM+IrjNRgEg8dAD0IrRM8IHtAAILRs9IrSspIntAAgEhaPAREILitQIrks/IIlAAILkM+IrjNRgEhsDAREILitQIrls/IIlAAILkM+IrjNRgEhgFAD0IrQM8IHrAAILRs9IrRspIntAAg");
	var mask_3_graphics_23 = new cjs.Graphics().p("EBYAAREILitQIrks/IIlAAILkM+IrjNRgEBGLAREILitQIrks/IIlAAILkM+IrjNRgEBSJAD0IrQM8IHsAAILRs9IrRspIntAAgEA0YAREILitQIrks/IIlAAILjM+IrjNRgEAijAREILjtQIrls/IIlAAILkM+IrkNRgEAuiAD0IrRM8IHsAAILRs9IrSspInsAAgAQuREILitQIrks/IIlAAILjM+IrjNRgAhHREILitQIrjs/IIkAAILjM+IrjNRgAK3D0IrQM8IHsAAILRs9IrSspInsAAgAy6REILitQIrks/IIlAAILjM+IriNRgEgkuAREILitQIrks/IIkAAILkM+IrjNRgA4wD0IrQM8IHsAAILRs9IrSspIntAAgEg2mAREILitQIrls/IIlAAILkM+IrjNRgEhIbAREILitQIrks/IIlAAILjM+IrjNRgEg8dAD0IrQM8IHsAAILRs9IrSspIntAAgEhaPAREILitQIrks/IIlAAILkM+IrjNRgEhsEAREILjtQIrls/IIlAAILkM+IrjNRgEhgFAD0IrQM8IHrAAILRs9IrRspIntAAg");
	var mask_3_graphics_24 = new cjs.Graphics().p("EBYAAREILitQIrks/IIlAAILjM+IrjNRgEBGLAREILjtQIrls/IIlAAILkM+IrkNRgEBSKAD0IrRM8IHsAAILRs9IrSspInsAAgEA0YAREILitQIrks/IIlAAILjM+IriNRgEAijAREILitQIrks/IIlAAILjM+IrjNRgEAuhAD0IrQM8IHsAAILRs9IrSspIntAAgAQtREILitQIrks/IIlAAILkM+IrjNRgAhGREILhtQIrks/IIkAAILkM+IrjNRgAK3D0IrPM8IHqAAILSs9IrSspInsAAgAy6REILitQIrjs/IIlAAILiM+IriNRgEgkvAREILjtQIrls/IIlAAILkM+IrjNRgA4wD0IrRM8IHsAAILRs9IrRspIntAAgEg2nAREILitQIrks/IIlAAILkM+IrjNRgEhIbAREILitQIrls/IIlAAILkM+IrjNRgEg8dAD0IrQM8IHrAAILRs9IrRspIntAAgEhaPAREILjtQIrks/IIlAAILjM+IrjNRgEhsEAREILjtQIrks/IIlAAILjM+IrjNRgEhgFAD0IrRM8IHtAAILQs9IrRspIntAAg");
	var mask_3_graphics_25 = new cjs.Graphics().p("EBYAAREILitQIrks/IIlAAILkM+IrjNRgEBGLAREILitQIrks/IIlAAILkM+IrjNRgEBSJAD0IrQM8IHsAAILRs9IrRspIntAAgEA0YAREILitQIrks/IIlAAILjM+IrjNRgEAijAREILjtQIrls/IIlAAILkM+IrkNRgEAuiAD0IrRM8IHsAAILRs9IrSspInsAAgAQuREILitQIrks/IIlAAILjM+IrjNRgAhHREILitQIrjs/IIkAAILjM+IrjNRgAK3D0IrQM8IHsAAILRs9IrSspInsAAgAy5REILhtQIrks/IIlAAILjM+IriNRgEgkuAREILitQIrks/IIkAAILkM+IrjNRgA4wD0IrQM8IHsAAILRs9IrSspIntAAgEg2mAREILitQIrls/IIlAAILkM+IrjNRgEhIbAREILitQIrks/IIlAAILjM+IrjNRgEg8dAD0IrQM8IHsAAILRs9IrSspIntAAgEhaPAREILitQIrks/IIlAAILkM+IrjNRgEhsDAREILitQIrls/IIlAAILkM+IrjNRgEhgFAD0IrQM8IHrAAILRs9IrRspIntAAg");
	var mask_3_graphics_26 = new cjs.Graphics().p("EBYAAREILitQIrks/IIlAAILkM+IrjNRgEBGLAREILitQIrks/IIlAAILkM+IrjNRgEBSJAD0IrQM8IHsAAILRs9IrRspIntAAgEA0YAREILitQIrks/IIlAAILjM+IrjNRgEAijAREILjtQIrls/IIlAAILkM+IrjNRgEAuiAD0IrRM8IHsAAILRs9IrSspInsAAgAQuREILitQIrks/IIlAAILjM+IrjNRgAhHREILitQIrjs/IIkAAILjM+IrjNRgAK3D0IrQM8IHsAAILQs9IrRspInsAAgAy5REILitQIrls/IIlAAILjM+IriNRgEgkuAREILitQIrks/IIlAAILjM+IrjNRgA4wD0IrQM8IHsAAILRs9IrSspIntAAgEg2mAREILitQIrls/IIlAAILkM+IrjNRgEhIbAREILitQIrks/IIlAAILjM+IrjNRgEg8dAD0IrRM8IHtAAILRs9IrSspIntAAgEhaPAREILitQIrks/IIlAAILkM+IrjNRgEhsEAREILjtQIrls/IIlAAILkM+IrjNRgEhgFAD0IrQM8IHrAAILRs9IrRspIntAAg");
	var mask_3_graphics_27 = new cjs.Graphics().p("EBYAAREILitQIrks/IIlAAILjM+IrjNRgEBGLAREILjtQIrls/IIlAAILkM+IrjNRgEBSKAD0IrRM8IHsAAILRs9IrSspInsAAgEA0YAREILitQIrks/IIlAAILjM+IrjNRgEAijAREILitQIrks/IIlAAILjM+IrjNRgEAuiAD0IrRM8IHsAAILRs9IrSspIntAAgAQuREILitQIrls/IIlAAILkM+IrjNRgAhGREILhtQIrjs/IIkAAILjM+IrjNRgAK3D0IrPM8IHrAAILRs9IrSspInsAAgAy6REILitQIrks/IIlAAILjM+IriNRgEgkvAREILjtQIrls/IIlAAILkM+IrjNRgA4wD0IrQM8IHrAAILRs9IrRspIntAAgEg2nAREILitQIrks/IIlAAILkM+IrjNRgEhIbAREILitQIrls/IIlAAILkM+IrjNRgEg8dAD0IrQM8IHrAAILSs9IrSspIntAAgEhaPAREILitQIrjs/IIlAAILjM+IrjNRgEhsEAREILjtQIrls/IIlAAILkM+IrjNRgEhgFAD0IrRM8IHsAAILRs9IrRspIntAAg");
	var mask_3_graphics_28 = new cjs.Graphics().p("EBYAAREILitRIrks+IIlAAILkM9IrjNSgEBGLAREILitRIrks+IIlAAILjM9IrjNSgEBSJADzIrQM8IHsAAILRs8IrRspInuAAgEA0YAREILitRIrks+IIlAAILkM9IrkNSgEAijAREILjtRIrls+IIlAAILkM9IrjNSgEAuhADzIrQM8IHsAAILRs8IrRspIntAAgAQtREILitRIrjs+IIlAAILjM9IrjNSgAhHREILitRIrks+IIkAAILkM9IrjNSgAK3DzIrQM8IHrAAILRs8IrRspInsAAgAy5REILitRIrks+IIlAAILiM9IriNSgEgkuAREILitRIrks+IIlAAILjM9IrjNSgA4wDzIrRM8IHtAAILRs8IrSspIntAAgEg2mAREILitRIrks+IIlAAILjM9IrjNSgEhIcAREILjtRIrks+IIlAAILjM9IrjNSgEg8dADzIrRM8IHtAAILRs8IrSspIntAAgEhaOAREILitRIrls+IIlAAILkM9IrjNSgEhsDAREILitRIrks+IIlAAILjM9IrjNSgEhgFADzIrQM8IHsAAILRs8IrSspIntAAg");
	var mask_3_graphics_29 = new cjs.Graphics().p("EBYAAREILitRIrks+IIlAAILjM9IriNSgEBGLAREILitRIrks+IIlAAILjM9IrjNSgEBSJADzIrQM8IHsAAILRs8IrSspIntAAgEA0YAREILitRIrks+IIlAAILkM9IrjNSgEAijAREILitRIrks+IIlAAILkM9IrjNSgEAuhADzIrQM8IHsAAILRs8IrRspIntAAgAQtREILitRIrjs+IIlAAILjM9IrjNSgAhHREILitRIrks+IIkAAILkM9IrjNSgAK3DzIrPM8IHqAAILRs8IrRspInsAAgAy5REILitRIrks+IIlAAILiM9IriNSgEgkvAREILjtRIrks+IIlAAILjM9IrjNSgA4wDzIrRM8IHtAAILRs8IrSspIntAAgEg2nAREILjtRIrks+IIlAAILjM9IrjNSgEhIcAREILjtRIrls+IImAAILjM9IrjNSgEg8dADzIrRM8IHsAAILRs8IrRspIntAAgEhaOAREILitRIrls+IIlAAILkM9IrjNSgEhsDAREILitRIrks+IIlAAILjM9IrjNSgEhgFADzIrRM8IHtAAILRs8IrSspIntAAg");
	var mask_3_graphics_30 = new cjs.Graphics().p("EBYAAREILitRIrks+IIlAAILkM9IrjNSgEBGLAREILitRIrks+IIlAAILjM9IriNSgEBSJADzIrQM8IHsAAILRs8IrRspInuAAgEA0YAREILitRIrks+IIlAAILkM9IrkNSgEAijAREILjtRIrls+IIlAAILkM9IrjNSgEAuhADzIrQM8IHsAAILRs8IrRspIntAAgAQtREILitRIrjs+IIlAAILjM9IrjNSgAhHREILitRIrks+IIkAAILkM9IrjNSgAK3DzIrQM8IHrAAILRs8IrRspInsAAgAy5REILitRIrls+IIlAAILjM9IriNSgEgkuAREILitRIrks+IIlAAILjM9IrjNSgA4wDzIrRM8IHtAAILRs8IrSspIntAAgEg2mAREILitRIrks+IIlAAILjM9IrjNSgEhIcAREILjtRIrks+IIlAAILjM9IrjNSgEg8dADzIrRM8IHtAAILRs8IrSspIntAAgEhaPAREILitRIrks+IIlAAILkM9IrjNSgEhsDAREILitRIrls+IImAAILjM9IrjNSgEhgFADzIrQM8IHrAAILSs8IrSspIntAAg");
	var mask_3_graphics_31 = new cjs.Graphics().p("EBYAAREILitRIrks+IIlAAILjM9IrjNSgEBGLAREILjtRIrls+IIlAAILkM9IrjNSgEBSKADzIrRM8IHsAAILRs8IrSspInsAAgEA0YAREILitRIrks+IIlAAILjM9IriNSgEAijAREILitRIrks+IIlAAILjM9IrjNSgEAuiADzIrRM8IHsAAILRs8IrSspIntAAgAQuREILitRIrls+IIlAAILkM9IrjNSgAhGREILhtRIrjs+IIkAAILjM9IrjNSgAK3DzIrPM8IHrAAILRs8IrSspInsAAgAy6REILitRIrks+IImAAILiM9IriNSgEgkvAREILjtRIrls+IIlAAILkM9IrjNSgA4wDzIrQM8IHrAAILRs8IrRspIntAAgEg2nAREILitRIrks+IIlAAILkM9IrjNSgEhIbAREILitRIrls+IIlAAILkM9IrjNSgEg8dADzIrQM8IHrAAILRs8IrRspIntAAgEhaPAREILitRIrjs+IIlAAILjM9IrjNSgEhsEAREILjtRIrls+IIlAAILkM9IrjNSgEhgFADzIrRM8IHsAAILRs8IrRspIntAAg");
	var mask_3_graphics_32 = new cjs.Graphics().p("EBYAAREILitRIrks+IIlAAILkM9IrjNSgEBGLAREILjtRIrls+IIlAAILkM9IrjNSgEBSJADzIrQM8IHsAAILRs8IrRspIntAAgEA0YAREILitRIrks+IIlAAILjM9IrjNSgEAijAREILjtRIrls+IIlAAILkM9IrkNSgEAuiADzIrRM8IHsAAILRs8IrSspInsAAgAQuREILitRIrks+IIlAAILjM9IrjNSgAhGREILhtRIrjs+IIkAAILjM9IrjNSgAK3DzIrQM8IHsAAILRs8IrSspInsAAgAy6REILitRIrks+IIlAAILjM9IriNSgEgkuAREILitRIrls+IIlAAILkM9IrjNSgA4wDzIrQM8IHrAAILSs8IrSspIntAAgEg2mAREILitRIrls+IIlAAILkM9IrjNSgEhIbAREILitRIrks+IIlAAILjM9IrjNSgEg8dADzIrQM8IHsAAILRs8IrSspIntAAgEhaPAREILitRIrks+IImAAILjM9IrjNSgEhsEAREILjtRIrls+IIlAAILkM9IrjNSgEhgFADzIrQM8IHrAAILRs8IrRspIntAAg");
	var mask_3_graphics_33 = new cjs.Graphics().p("EBYAAREILitRIrks+IIlAAILkM9IrkNSgEBGLAREILjtRIrls+IIlAAILkM9IrjNSgEBSKADzIrRM8IHsAAILRs8IrRspIntAAgEA0YAREILitRIrks+IIlAAILjM9IrjNSgEAijAREILjtRIrls+IIlAAILjM9IrjNSgEAuiADzIrRM8IHsAAILRs8IrSspIntAAgAQuREILitRIrls+IIlAAILkM9IrjNSgAhGREILhtRIrjs+IIkAAILjM9IrjNSgAK3DzIrQM8IHsAAILRs8IrSspInsAAgAy6REILitRIrks+IIlAAILjM9IriNSgEgkuAREILitRIrls+IIlAAILkM9IrjNSgA4wDzIrQM8IHrAAILRs8IrRspIntAAgEg2nAREILitRIrks+IIlAAILkM9IrjNSgEhIbAREILitRIrls+IIlAAILkM9IrjNSgEg8dADzIrQM8IHrAAILSs8IrSspIntAAgEhaPAREILitRIrjs+IIlAAILjM9IrjNSgEhsEAREILjtRIrls+IIlAAILkM9IrjNSgEhgFADzIrRM8IHsAAILRs8IrRspIntAAg");
	var mask_3_graphics_34 = new cjs.Graphics().p("EBYAAREILitRIrks+IIlAAILjM9IrjNSgEBGLAREILitRIrks+IIlAAILjM9IrjNSgEBSKADzIrRM8IHsAAILRs8IrSspIntAAgEA0YAREILitRIrks+IIlAAILkM9IrjNSgEAijAREILitRIrks+IIlAAILjM9IriNSgEAuhADzIrQM8IHsAAILRs8IrRspInuAAgAQtREILitRIrks+IIlAAILkM9IrjNSgAhHREILitRIrks+IIkAAILkM9IrjNSgAK3DzIrPM8IHqAAILRs8IrRspInsAAgAy5REILitRIrks+IIlAAILiM9IriNSgEgkvAREILjtRIrks+IIlAAILjM9IrjNSgA4wDzIrRM8IHtAAILQs8IrRspIntAAgEg2nAREILitRIrjs+IIlAAILjM9IrjNSgEhIcAREILjtRIrls+IIlAAILkM9IrjNSgEg8dADzIrRM8IHsAAILRs8IrRspIntAAgEhaOAREILitRIrls+IImAAILjM9IrjNSgEhsDAREILitRIrks+IIlAAILjM9IrjNSgEhgFADzIrRM8IHtAAILRs8IrSspIntAAg");
	var mask_3_graphics_35 = new cjs.Graphics().p("EBYAAREILitRIrks+IIlAAILjM9IrjNSgEBGLAREILjtRIrls+IIlAAILkM9IrjNSgEBSKADzIrRM8IHsAAILRs8IrSspInsAAgEA0YAREILitRIrks+IIlAAILjM9IriNSgEAijAREILitRIrks+IIlAAILjM9IrjNSgEAuiADzIrRM8IHsAAILRs8IrSspIntAAgAQuREILitRIrls+IIlAAILkM9IrjNSgAhGREILhtRIrjs+IIkAAILjM9IrjNSgAK3DzIrPM8IHrAAILRs8IrSspInsAAgAy6REILitRIrks+IIlAAILjM9IriNSgEgkvAREILjtRIrls+IIlAAILkM9IrjNSgA4wDzIrQM8IHrAAILRs8IrRspIntAAgEg2nAREILitRIrks+IIlAAILkM9IrjNSgEhIbAREILitRIrls+IIlAAILkM9IrjNSgEg8dADzIrQM8IHrAAILRs8IrRspIntAAgEhaPAREILitRIrjs+IIlAAILjM9IrjNSgEhsEAREILjtRIrls+IIlAAILkM9IrjNSgEhgFADzIrRM8IHsAAILRs8IrRspIntAAg");
	var mask_3_graphics_36 = new cjs.Graphics().p("EBYAAREILitRIrks+IIlAAILjM9IrjNSgEBGLAREILjtRIrls+IIlAAILkM9IrjNSgEBSKADzIrRM8IHsAAILRs8IrSspInsAAgEA0YAREILitRIrks+IIlAAILjM9IriNSgEAijAREILitRIrks+IIlAAILjM9IrjNSgEAuiADzIrRM8IHsAAILRs8IrSspIntAAgAQuREILitRIrls+IIlAAILkM9IrjNSgAhGREILhtRIrjs+IIkAAILjM9IrjNSgAK3DzIrPM8IHrAAILRs8IrSspInsAAgAy6REILitRIrks+IIlAAILjM9IriNSgEgkvAREILjtRIrls+IIlAAILkM9IrjNSgA4wDzIrQM8IHrAAILRs8IrRspIntAAgEg2nAREILitRIrks+IIlAAILkM9IrjNSgEhIbAREILitRIrls+IIlAAILkM9IrjNSgEg8dADzIrQM8IHrAAILRs8IrRspIntAAgEhaPAREILitRIrjs+IIlAAILjM9IrjNSgEhsEAREILjtRIrls+IIlAAILkM9IrjNSgEhgFADzIrRM8IHsAAILRs8IrRspIntAAg");
	var mask_3_graphics_37 = new cjs.Graphics().p("EBYAAREILitRIrks+IIlAAILjM9IrjNSgEBGLAREILitRIrks+IIlAAILjM9IrjNSgEBSKADzIrRM8IHsAAILRs8IrSspIntAAgEA0YAREILitRIrks+IIlAAILkM9IrjNSgEAijAREILitRIrks+IIlAAILjM9IriNSgEAuhADzIrQM8IHsAAILRs8IrRspInuAAgAQtREILitRIrks+IIlAAILkM9IrjNSgAhHREILitRIrks+IIkAAILkM9IrjNSgAK3DzIrPM8IHqAAILRs8IrRspInsAAgAy5REILitRIrks+IIlAAILiM9IriNSgEgkvAREILjtRIrks+IIlAAILjM9IrjNSgA4wDzIrRM8IHtAAILQs8IrRspIntAAgEg2nAREILitRIrjs+IIlAAILjM9IrjNSgEhIcAREILjtRIrls+IIlAAILkM9IrjNSgEg8dADzIrRM8IHsAAILRs8IrRspIntAAgEhaOAREILitRIrks+IIkAAILkM9IrjNSgEhsDAREILitRIrks+IIlAAILjM9IrjNSgEhgFADzIrRM8IHtAAILRs8IrSspIntAAg");
	var mask_3_graphics_38 = new cjs.Graphics().p("EBYAAREILitRIrks+IIlAAILkM9IrkNSgEBGLAREILjtRIrls+IIlAAILkM9IrjNSgEBSKADzIrRM8IHsAAILRs8IrRspIntAAgEA0YAREILitRIrks+IIlAAILjM9IrjNSgEAijAREILjtRIrls+IIlAAILjM9IrjNSgEAuiADzIrRM8IHsAAILRs8IrSspIntAAgAQuREILitRIrls+IIlAAILkM9IrjNSgAhGREILhtRIrjs+IIkAAILjM9IrjNSgAK3DzIrPM8IHrAAILRs8IrSspInsAAgAy6REILitRIrks+IIlAAILjM9IriNSgEgkuAREILitRIrls+IIlAAILkM9IrjNSgA4wDzIrQM8IHrAAILRs8IrRspIntAAgEg2nAREILitRIrks+IIlAAILkM9IrjNSgEhIbAREILitRIrls+IIlAAILkM9IrjNSgEg8dADzIrQM8IHrAAILSs8IrSspIntAAgEhaPAREILitRIrjs+IIlAAILjM9IrjNSgEhsEAREILjtRIrls+IIlAAILkM9IrjNSgEhgFADzIrRM8IHsAAILRs8IrRspIntAAg");
	var mask_3_graphics_39 = new cjs.Graphics().p("EBYAARDILitQIrks/IIlAAILkM+IrkNRgEBGLARDILjtQIrls/IIlAAILkM+IrjNRgEBSJADzIrQM8IHsAAILRs9IrRspIntAAgEA0YARDILitQIrks/IIlAAILjM+IrjNRgEAijARDILjtQIrls/IIlAAILjM+IrjNRgEAuiADzIrRM8IHsAAILRs9IrSspIntAAgAQuRDILitQIrls/IIlAAILkM+IrjNRgAhGRDILhtQIrjs/IIkAAILjM+IrjNRgAK3DzIrQM8IHsAAILRs9IrSspInsAAgAy6RDILitQIrks/IIlAAILjM+IriNRgEgkuARDILitQIrls/IIlAAILkM+IrjNRgA4wDzIrQM8IHrAAILRs9IrRspIntAAgEg2mARDILitQIrls/IIlAAILkM+IrjNRgEhIbARDILitQIrls/IIlAAILkM+IrjNRgEg8dADzIrQM8IHrAAILSs9IrSspIntAAgEhaPARDILitQIrjs/IIlAAILjM+IrjNRgEhsEARDILjtQIrls/IIlAAILkM+IrjNRgEhgFADzIrQM8IHrAAILRs9IrRspIntAAg");
	var mask_3_graphics_40 = new cjs.Graphics().p("EBYAARDILitQIrks/IIlAAILjM+IrjNRgEBGLARDILjtQIrls/IIlAAILkM+IrkNRgEBSKADzIrRM8IHsAAILRs9IrSspInsAAgEA0YARDILitQIrks/IIlAAILjM+IriNRgEAijARDILitQIrks/IIlAAILjM+IrjNRgEAuhADzIrQM8IHsAAILRs9IrSspIntAAgAQtRDILitQIrks/IIlAAILkM+IrjNRgAhGRDILhtQIrks/IIkAAILkM+IrjNRgAK3DzIrPM8IHqAAILSs9IrSspInsAAgAy6RDILitQIrjs/IIlAAILiM+IriNRgEgkvARDILjtQIrls/IIlAAILkM+IrjNRgA4wDzIrRM8IHsAAILRs9IrRspIntAAgEg2nARDILitQIrks/IIlAAILkM+IrjNRgEhIcARDILjtQIrls/IIlAAILkM+IrjNRgEg8dADzIrQM8IHrAAILRs9IrRspIntAAgEhaOARDILitQIrks/IIlAAILjM+IrjNRgEhsEARDILjtQIrls/IImAAILjM+IrjNRgEhgFADzIrRM8IHtAAILQs9IrRspIntAAg");
	var mask_3_graphics_41 = new cjs.Graphics().p("EBYAARDILitQIrks/IIlAAILkM+IrjNRgEBGLARDILitQIrks/IIlAAILjM+IriNRgEBSJADzIrQM8IHsAAILRs9IrRspInuAAgEA0YARDILitQIrks/IIlAAILjM+IrjNRgEAijARDILjtQIrls/IIlAAILkM+IrjNRgEAuiADzIrRM8IHsAAILRs9IrSspInsAAgAQuRDILitQIrks/IIlAAILjM+IrjNRgAhHRDILitQIrjs/IIkAAILjM+IrjNRgAK3DzIrQM8IHsAAILQs9IrRspInsAAgAy5RDILitQIrls/IIlAAILjM+IriNRgEgkuARDILitQIrks/IIlAAILjM+IrjNRgA4wDzIrQM8IHsAAILRs9IrSspIntAAgEg2mARDILitQIrks/IIlAAILjM+IrjNRgEhIcARDILjtQIrks/IIlAAILjM+IrjNRgEg8dADzIrRM8IHtAAILRs9IrSspIntAAgEhaPARDILitQIrks/IIlAAILkM+IrjNRgEhsDARDILitQIrls/IIlAAILkM+IrjNRgEhgFADzIrQM8IHrAAILSs9IrSspIntAAg");
	var mask_3_graphics_42 = new cjs.Graphics().p("EBYAARDILitQIrks/IIlAAILjM+IriNRgEBGLARDILitQIrks/IIlAAILjM+IrjNRgEBSJADzIrQM8IHsAAILRs9IrRspInuAAgEA0YARDILitQIrks/IIlAAILkM+IrjNRgEAijARDILjtQIrls/IIlAAILkM+IrjNRgEAuhADzIrQM8IHsAAILRs9IrRspIntAAgAQtRDILitQIrjs/IIlAAILjM+IrjNRgAhHRDILitQIrks/IIkAAILkM+IrjNRgAK3DzIrQM8IHrAAILRs9IrRspInsAAgAy5RDILitQIrks/IIlAAILiM+IriNRgEgkvARDILjtQIrks/IIlAAILjM+IrjNRgA4wDzIrRM8IHtAAILRs9IrSspIntAAgEg2mARDILitQIrks/IIlAAILjM+IrjNRgEhIcARDILjtQIrks/IIlAAILjM+IrjNRgEg8dADzIrRM8IHtAAILQs9IrRspIntAAgEhaOARDILitQIrls/IIlAAILkM+IrjNRgEhsDARDILitQIrks/IIlAAILjM+IrjNRgEhgFADzIrQM8IHsAAILRs9IrSspIntAAg");
	var mask_3_graphics_43 = new cjs.Graphics().p("EBYAARDILitQIrks/IIlAAILkM+IrjNRgEBGLARDILitQIrks/IIlAAILjM+IriNRgEBSJADzIrQM8IHsAAILRs9IrRspInuAAgEA0YARDILitQIrks/IIlAAILkM+IrkNRgEAijARDILjtQIrls/IIlAAILkM+IrjNRgEAuiADzIrRM8IHsAAILRs9IrRspIntAAgAQuRDILitQIrks/IIlAAILjM+IrjNRgAhHRDILitQIrjs/IIkAAILjM+IrjNRgAK3DzIrQM8IHsAAILQs9IrRspInsAAgAy5RDILitQIrls/IIlAAILjM+IriNRgEgkuARDILitQIrks/IIlAAILjM+IrjNRgA4wDzIrQM8IHsAAILRs9IrSspIntAAgEg2mARDILitQIrks/IIlAAILjM+IrjNRgEhIcARDILjtQIrks/IIlAAILjM+IrjNRgEg8dADzIrRM8IHtAAILRs9IrSspIntAAgEhaPARDILitQIrks/IIlAAILkM+IrjNRgEhsDARDILitQIrls/IIlAAILkM+IrjNRgEhgFADzIrQM8IHrAAILSs9IrSspIntAAg");
	var mask_3_graphics_44 = new cjs.Graphics().p("EBYAARDILitQIrks/IIlAAILjM+IrjNRgEBGLARDILjtQIrls/IIlAAILkM+IrjNRgEBSKADzIrRM8IHsAAILRs9IrSspInsAAgEA0YARDILitQIrks/IIlAAILjM+IriNRgEAijARDILitQIrks/IIlAAILjM+IrjNRgEAuiADzIrRM8IHsAAILRs9IrSspIntAAgAQuRDILitQIrls/IIlAAILkM+IrjNRgAhGRDILhtQIrjs/IIkAAILjM+IrjNRgAK3DzIrPM8IHrAAILRs9IrSspInsAAgAy6RDILitQIrjs/IIlAAILiM+IriNRgEgkvARDILjtQIrls/IIlAAILkM+IrjNRgA4wDzIrQM8IHrAAILRs9IrRspIntAAgEg2nARDILitQIrks/IIlAAILkM+IrjNRgEhIbARDILitQIrls/IIlAAILkM+IrjNRgEg8dADzIrQM8IHrAAILRs9IrRspIntAAgEhaPARDILitQIrjs/IIlAAILjM+IrjNRgEhsEARDILjtQIrls/IImAAILjM+IrjNRgEhgFADzIrRM8IHsAAILRs9IrRspIntAAg");
	var mask_3_graphics_45 = new cjs.Graphics().p("EBYAARDILitQIrks/IIlAAILkM+IrjNRgEBGLARDILjtQIrls/IIlAAILkM+IrjNRgEBSJADzIrQM8IHsAAILRs9IrRspIntAAgEA0YARDILitQIrks/IIlAAILjM+IrjNRgEAijARDILjtQIrls/IIlAAILkM+IrkNRgEAuiADzIrRM8IHsAAILRs9IrSspInsAAgAQuRDILitQIrks/IIlAAILjM+IrjNRgAhGRDILhtQIrjs/IIkAAILjM+IrjNRgAK3DzIrQM8IHsAAILRs9IrSspInsAAgAy6RDILitQIrks/IIlAAILjM+IriNRgEgkuARDILitQIrls/IIlAAILkM+IrjNRgA4wDzIrQM8IHrAAILSs9IrSspIntAAgEg2mARDILitQIrls/IIlAAILkM+IrjNRgEhIbARDILitQIrks/IIlAAILjM+IrjNRgEg8dADzIrQM8IHsAAILRs9IrSspIntAAgEhaPARDILitQIrks/IIlAAILkM+IrjNRgEhsEARDILjtQIrls/IIlAAILkM+IrjNRgEhgFADzIrQM8IHrAAILRs9IrRspIntAAg");
	var mask_3_graphics_46 = new cjs.Graphics().p("EBYAARDILitQIrks/IIlAAILkM+IrkNRgEBGLARDILjtQIrls/IIlAAILkM+IrjNRgEBSJADzIrQM8IHsAAILRs9IrRspIntAAgEA0YARDILitQIrks/IIlAAILjM+IrjNRgEAijARDILjtQIrls/IIlAAILjM+IrjNRgEAuiADzIrRM8IHsAAILRs9IrSspIntAAgAQuRDILitQIrls/IIlAAILkM+IrjNRgAhGRDILhtQIrjs/IIkAAILjM+IrjNRgAK3DzIrQM8IHsAAILRs9IrSspInsAAgAy6RDILitQIrks/IIlAAILjM+IriNRgEgkuARDILitQIrls/IIlAAILkM+IrjNRgA4wDzIrQM8IHrAAILRs9IrRspIntAAgEg2mARDILhtQIrks/IIlAAILkM+IrjNRgEhIbARDILitQIrks/IIkAAILkM+IrjNRgEg8dADzIrQM8IHsAAILRs9IrSspIntAAgEhaPARDILitQIrks/IImAAILjM+IrjNRgEhsEARDILjtQIrls/IIlAAILkM+IrjNRgEhgFADzIrQM8IHrAAILRs9IrRspIntAAg");
	var mask_3_graphics_47 = new cjs.Graphics().p("EBYAARDILitQIrks/IIlAAILjM+IrjNRgEBGLARDILjtQIrls/IIlAAILjM+IrjNRgEBSKADzIrRM8IHsAAILRs9IrSspIntAAgEA0YARDILitQIrks/IIlAAILkM+IrjNRgEAijARDILitQIrks/IIlAAILjM+IrjNRgEAuhADzIrQM8IHsAAILRs9IrRspInuAAgAQtRDILitQIrks/IIlAAILkM+IrjNRgAhGRDILhtQIrks/IIkAAILkM+IrjNRgAK3DzIrPM8IHqAAILRs9IrRspInsAAgAy6RDILitQIrjs/IIlAAILiM+IriNRgEgkvARDILjtQIrls/IIlAAILkM+IrjNRgA4wDzIrRM8IHsAAILRs9IrRspIntAAgEg2nARDILitQIrjs/IIlAAILjM+IrjNRgEhIcARDILjtQIrls/IIlAAILkM+IrjNRgEg8dADzIrRM8IHsAAILRs9IrRspIntAAgEhaOARDILitQIrks/IIlAAILjM+IrjNRgEhsEARDILjtQIrks/IIlAAILjM+IrjNRgEhgFADzIrRM8IHtAAILRs9IrSspIntAAg");
	var mask_3_graphics_48 = new cjs.Graphics().p("EBYAARDILitRIrks+IIlAAILkM9IrkNSgEBGLARDILjtRIrls+IIlAAILkM9IrjNSgEBSJADyIrQM8IHsAAILRs8IrRspIntAAgEA0YARDILitRIrks+IIlAAILjM9IrjNSgEAijARDILjtRIrls+IIlAAILjM9IrjNSgEAuiADyIrRM8IHsAAILRs8IrSspIntAAgAQuRDILitRIrls+IIlAAILkM9IrjNSgAhGRDILhtRIrjs+IIkAAILjM9IrjNSgAK3DyIrQM8IHsAAILRs8IrSspInsAAgAy6RDILitRIrks+IIlAAILjM9IriNSgEgkuARDILitRIrls+IIlAAILkM9IrjNSgA4wDyIrQM8IHrAAILRs8IrRspIntAAgEg2nARDILitRIrks+IIlAAILkM9IrjNSgEhIbARDILitRIrls+IIlAAILkM9IrjNSgEg8dADyIrQM8IHrAAILSs8IrSspIntAAgEhaPARDILitRIrjs+IIlAAILjM9IrjNSgEhsEARDILjtRIrls+IIlAAILkM9IrjNSgEhgFADyIrRM8IHsAAILRs8IrRspIntAAg");
	var mask_3_graphics_49 = new cjs.Graphics().p("EBYAARDILitRIrks+IIlAAILkM9IrkNSgEBGLARDILjtRIrls+IIlAAILkM9IrjNSgEBSJADyIrQM8IHsAAILRs8IrRspIntAAgEA0YARDILitRIrks+IIlAAILjM9IrjNSgEAijARDILjtRIrls+IIlAAILjM9IrjNSgEAuiADyIrRM8IHsAAILRs8IrSspIntAAgAQuRDILitRIrls+IIlAAILkM9IrjNSgAhGRDILhtRIrjs+IIkAAILjM9IrjNSgAK3DyIrQM8IHsAAILRs8IrSspInsAAgAy6RDILitRIrks+IIlAAILjM9IriNSgEgkuARDILitRIrls+IIlAAILkM9IrjNSgA4wDyIrQM8IHrAAILSs8IrSspIntAAgEg2mARDILitRIrls+IIlAAILkM9IrjNSgEhIbARDILitRIrls+IImAAILjM9IrjNSgEg8dADyIrQM8IHrAAILSs8IrSspIntAAgEhaPARDILitRIrjs+IIlAAILjM9IrjNSgEhsEARDILjtRIrls+IIlAAILkM9IrjNSgEhgFADyIrQM8IHrAAILRs8IrRspIntAAg");
	var mask_3_graphics_50 = new cjs.Graphics().p("EBYAARDILitRIrks+IIlAAILjM9IrjNSgEBGLARDILjtRIrls+IIlAAILkM9IrkNSgEBSKADyIrRM8IHsAAILRs8IrSspInsAAgEA0YARDILitRIrks+IIlAAILkM9IrjNSgEAijARDILitRIrks+IIlAAILjM9IrjNSgEAuhADyIrQM8IHsAAILRs8IrRspInuAAgAQtRDILitRIrks+IIlAAILkM9IrjNSgAhGRDILhtRIrks+IIkAAILkM9IrjNSgAK3DyIrPM8IHqAAILSs8IrSspInsAAgAy6RDILitRIrjs+IIlAAILiM9IriNSgEgkvARDILjtRIrls+IIlAAILkM9IrjNSgA4wDyIrRM8IHsAAILRs8IrRspIntAAgEg2nARDILitRIrks+IIlAAILkM9IrjNSgEhIcARDILjtRIrls+IIlAAILkM9IrjNSgEg8dADyIrQM8IHrAAILRs8IrRspIntAAgEhaOARDILitRIrks+IIlAAILjM9IrjNSgEhsEARDILjtRIrks+IIlAAILjM9IrjNSgEhgFADyIrRM8IHtAAILQs8IrRspIntAAg");
	var mask_3_graphics_51 = new cjs.Graphics().p("EBYAARDILitRIrks+IIlAAILkM9IrjNSgEBGLARDILitRIrks+IIlAAILkM9IrjNSgEBSJADyIrQM8IHsAAILRs8IrRspIntAAgEA0YARDILitRIrks+IIlAAILjM9IrjNSgEAijARDILjtRIrls+IIlAAILkM9IrjNSgEAuiADyIrRM8IHsAAILRs8IrSspInsAAgAQuRDILitRIrks+IIlAAILjM9IrjNSgAhHRDILitRIrjs+IIkAAILjM9IrjNSgAK3DyIrQM8IHsAAILRs8IrSspInsAAgAy5RDILitRIrls+IIlAAILjM9IriNSgEgkuARDILitRIrks+IIlAAILjM9IrjNSgA4wDyIrQM8IHsAAILRs8IrSspIntAAgEg2mARDILitRIrls+IIlAAILkM9IrjNSgEhIbARDILitRIrks+IIlAAILjM9IrjNSgEg8dADyIrRM8IHtAAILRs8IrSspIntAAgEhaPARDILitRIrks+IIlAAILkM9IrjNSgEhsDARDILitRIrls+IIlAAILkM9IrjNSgEhgFADyIrQM8IHrAAILRs8IrRspIntAAg");
	var mask_3_graphics_52 = new cjs.Graphics().p("EBYAARDILitRIrks+IIlAAILkM9IrjNSgEBGLARDILitRIrks+IIlAAILjM9IriNSgEBSJADyIrQM8IHsAAILRs8IrRspInuAAgEA0YARDILitRIrks+IIlAAILkM9IrkNSgEAijARDILjtRIrls+IIlAAILkM9IrjNSgEAuiADyIrRM8IHsAAILRs8IrRspIntAAgAQuRDILitRIrks+IIlAAILjM9IrjNSgAhHRDILitRIrjs+IIkAAILjM9IrjNSgAK3DyIrQM8IHsAAILQs8IrRspInsAAgAy5RDILitRIrls+IIlAAILjM9IriNSgEgkuARDILitRIrks+IIlAAILjM9IrjNSgA4wDyIrQM8IHsAAILRs8IrSspIntAAgEg2mARDILitRIrks+IIlAAILjM9IrjNSgEhIcARDILjtRIrks+IIlAAILjM9IrjNSgEg8dADyIrRM8IHtAAILRs8IrSspIntAAgEhaPARDILitRIrks+IIlAAILkM9IrjNSgEhsDARDILitRIrls+IIlAAILkM9IrjNSgEhgFADyIrQM8IHrAAILSs8IrSspIntAAg");
	var mask_3_graphics_53 = new cjs.Graphics().p("EBYAARDILitRIrks+IIlAAILkM9IrjNSgEBGLARDILjtRIrls+IIlAAILkM9IrjNSgEBSJADyIrQM8IHsAAILRs8IrRspIntAAgEA0YARDILitRIrks+IIlAAILjM9IrjNSgEAijARDILjtRIrls+IIlAAILkM9IrkNSgEAuiADyIrRM8IHsAAILRs8IrSspInsAAgAQuRDILitRIrks+IIlAAILjM9IrjNSgAhHRDILitRIrjs+IIkAAILjM9IrjNSgAK3DyIrQM8IHsAAILRs8IrSspInsAAgAy6RDILitRIrks+IIlAAILjM9IriNSgEgkuARDILitRIrls+IIlAAILkM9IrjNSgA4wDyIrQM8IHrAAILSs8IrSspIntAAgEg2mARDILitRIrls+IIlAAILkM9IrjNSgEhIbARDILitRIrks+IIlAAILjM9IrjNSgEg8dADyIrQM8IHsAAILRs8IrSspIntAAgEhaPARDILitRIrks+IIlAAILkM9IrjNSgEhsEARDILjtRIrls+IIlAAILkM9IrjNSgEhgFADyIrQM8IHrAAILRs8IrRspIntAAg");
	var mask_3_graphics_54 = new cjs.Graphics().p("EBYAARDILitRIrks+IIlAAILjM9IrjNSgEBGLARDILitRIrks+IIlAAILjM9IrjNSgEBSKADyIrRM8IHsAAILRs8IrSspIntAAgEA0YARDILitRIrks+IIlAAILkM9IrjNSgEAijARDILitRIrks+IIlAAILjM9IriNSgEAuhADyIrQM8IHsAAILRs8IrRspInuAAgAQtRDILitRIrks+IIlAAILkM9IrjNSgAhHRDILitRIrks+IIkAAILkM9IrjNSgAK3DyIrPM8IHqAAILRs8IrRspInsAAgAy5RDILitRIrks+IIlAAILiM9IriNSgEgkvARDILjtRIrks+IIlAAILjM9IrjNSgA4wDyIrRM8IHtAAILQs8IrRspIntAAgEg2nARDILitRIrjs+IIlAAILjM9IrjNSgEhIcARDILjtRIrls+IIlAAILkM9IrjNSgEg8dADyIrRM8IHsAAILRs8IrRspIntAAgEhaOARDILitRIrks+IIlAAILjM9IrjNSgEhsEARDILjtRIrks+IIlAAILjM9IrjNSgEhgFADyIrRM8IHtAAILRs8IrSspIntAAg");
	var mask_3_graphics_55 = new cjs.Graphics().p("EBYAARDILitRIrks+IIlAAILjM9IrjNSgEBGLARDILjtRIrls+IIlAAILkM9IrkNSgEBSKADyIrRM8IHsAAILRs8IrSspInsAAgEA0YARDILitRIrks+IIlAAILjM9IriNSgEAijARDILitRIrks+IIlAAILjM9IrjNSgEAuhADyIrQM8IHsAAILRs8IrSspIntAAgAQtRDILitRIrks+IIlAAILkM9IrjNSgAhGRDILhtRIrks+IIkAAILkM9IrjNSgAK3DyIrPM8IHqAAILSs8IrSspInsAAgAy6RDILitRIrjs+IIlAAILiM9IriNSgEgkvARDILjtRIrls+IIlAAILkM9IrjNSgA4wDyIrRM8IHsAAILRs8IrRspIntAAgEg2nARDILitRIrks+IIlAAILkM9IrjNSgEhIcARDILjtRIrls+IIlAAILkM9IrjNSgEg8dADyIrQM8IHrAAILRs8IrRspIntAAgEhaOARDILitRIrks+IIlAAILjM9IrjNSgEhsEARDILjtRIrks+IIlAAILjM9IrjNSgEhgFADyIrRM8IHtAAILQs8IrRspIntAAg");
	var mask_3_graphics_56 = new cjs.Graphics().p("EBYAARDILitRIrks+IIlAAILjM9IrjNSgEBGLARDILjtRIrls+IIlAAILjM9IrjNSgEBSKADyIrRM8IHsAAILRs8IrSspIntAAgEA0YARDILitRIrks+IIlAAILkM9IrjNSgEAijARDILitRIrks+IIlAAILjM9IrjNSgEAuhADyIrQM8IHsAAILRs8IrRspInuAAgAQtRDILitRIrks+IIlAAILkM9IrjNSgAhGRDILhtRIrks+IIkAAILkM9IrjNSgAK3DyIrPM8IHqAAILRs8IrRspInsAAgAy6RDILitRIrjs+IIlAAILiM9IriNSgEgkvARDILjtRIrls+IIlAAILkM9IrjNSgA4wDyIrRM8IHsAAILRs8IrRspIntAAgEg2nARDILitRIrjs+IIlAAILjM9IrjNSgEhIcARDILjtRIrls+IIlAAILkM9IrjNSgEg8dADyIrQM8IHrAAILRs8IrRspIntAAgEhaOARDILitRIrks+IIlAAILjM9IrjNSgEhsEARDILjtRIrks+IIlAAILjM9IrjNSgEhgFADyIrRM8IHtAAILRs8IrSspIntAAg");
	var mask_3_graphics_57 = new cjs.Graphics().p("EBYAARCILitQIrks/IIlAAILkM+IrjNRgEBGLARCILitQIrks/IIlAAILjM+IriNRgEBSJADyIrQM8IHsAAILRs9IrRspInuAAgEA0YARCILitQIrks/IIlAAILkM+IrkNRgEAijARCILjtQIrls/IIlAAILkM+IrjNRgEAuiADyIrRM8IHsAAILRs9IrSspInsAAgAQuRCILitQIrks/IIlAAILjM+IrjNRgAhHRCILitQIrjs/IIkAAILjM+IrjNRgAK3DyIrQM8IHsAAILQs9IrRspInsAAgAy5RCILitQIrls/IIlAAILjM+IriNRgEgkuARCILitQIrks/IIlAAILjM+IrjNRgA4wDyIrQM8IHsAAILRs9IrSspIntAAgEg2mARCILitQIrks/IIlAAILjM+IrjNRgEhIcARCILjtQIrks/IIlAAILjM+IrjNRgEg8dADyIrRM8IHtAAILRs9IrSspIntAAgEhaPARCILitQIrks/IIlAAILkM+IrjNRgEhsDARCILitQIrls/IIlAAILkM+IrjNRgEhgFADyIrQM8IHrAAILSs9IrSspIntAAg");
	var mask_3_graphics_58 = new cjs.Graphics().p("EBYAARCILitQIrks/IIlAAILjM+IrjNRgEBGLARCILitQIrks/IIlAAILjM+IrjNRgEBSKADyIrRM8IHsAAILRs9IrSspIntAAgEA0YARCILitQIrks/IIlAAILkM+IrjNRgEAijARCILitQIrks/IIlAAILjM+IriNRgEAuhADyIrQM8IHsAAILRs9IrRspInuAAgAQtRCILitQIrks/IIlAAILkM+IrjNRgAhHRCILitQIrks/IIkAAILkM+IrjNRgAK3DyIrPM8IHqAAILRs9IrRspInsAAgAy5RCILitQIrks/IIlAAILiM+IriNRgEgkvARCILjtQIrks/IIlAAILjM+IrjNRgA4wDyIrRM8IHtAAILQs9IrRspIntAAgEg2nARCILitQIrjs/IIlAAILjM+IrjNRgEhIcARCILjtQIrls/IIlAAILkM+IrjNRgEg8dADyIrRM8IHsAAILRs9IrRspIntAAgEhaOARCILitQIrls/IIlAAILkM+IrjNRgEhsDARCILitQIrks/IIlAAILjM+IrjNRgEhgFADyIrRM8IHtAAILRs9IrSspIntAAg");
	var mask_3_graphics_59 = new cjs.Graphics().p("EBYAARCILitQIrks/IIlAAILjM+IrjNRgEBGLARCILitQIrks/IIlAAILjM+IrjNRgEBSKADyIrRM8IHsAAILRs9IrSspIntAAgEA0YARCILitQIrks/IIlAAILkM+IrjNRgEAijARCILitQIrks/IIlAAILkM+IrjNRgEAuhADyIrQM8IHsAAILRs9IrRspIntAAgAQtRCILitQIrjs/IIlAAILjM+IrjNRgAhHRCILitQIrks/IIkAAILkM+IrjNRgAK3DyIrPM8IHqAAILRs9IrRspInsAAgAy5RCILitQIrks/IIlAAILiM+IriNRgEgkvARCILjtQIrks/IIlAAILjM+IrjNRgA4wDyIrRM8IHtAAILRs9IrSspIntAAgEg2nARCILitQIrjs/IIlAAILjM+IrjNRgEhIcARCILjtQIrls/IIlAAILkM+IrjNRgEg8dADyIrRM8IHsAAILRs9IrRspIntAAgEhaOARCILitQIrls/IIlAAILkM+IrjNRgEhsDARCILitQIrks/IIlAAILjM+IrjNRgEhgFADyIrRM8IHtAAILRs9IrSspIntAAg");
	var mask_3_graphics_60 = new cjs.Graphics().p("EBYAARCILitQIrks/IIlAAILkM+IrjNRgEBGLARCILitQIrks/IIlAAILkM+IrjNRgEBSJADyIrQM8IHsAAILRs9IrRspInuAAgEA0YARCILitQIrks/IIlAAILjM+IrjNRgEAijARCILjtQIrls/IIlAAILkM+IrjNRgEAuiADyIrRM8IHsAAILRs9IrSspInsAAgAQuRCILitQIrks/IIlAAILjM+IrjNRgAhHRCILitQIrjs/IIkAAILjM+IrjNRgAK3DyIrQM8IHsAAILRs9IrSspInsAAgAy5RCILitQIrls/IIlAAILjM+IriNRgEgkuARCILitQIrks/IIlAAILjM+IrjNRgA4wDyIrQM8IHsAAILRs9IrSspIntAAgEg2mARCILitQIrls/IIlAAILkM+IrjNRgEhIbARCILitQIrks/IIlAAILjM+IrjNRgEg8dADyIrRM8IHtAAILRs9IrSspIntAAgEhaPARCILitQIrks/IIlAAILkM+IrjNRgEhsDARCILitQIrls/IIlAAILkM+IrjNRgEhgFADyIrQM8IHrAAILRs9IrRspIntAAg");
	var mask_3_graphics_61 = new cjs.Graphics().p("EBYAARCILitQIrks/IIlAAILjM+IrjNRgEBGLARCILitQIrks/IIlAAILjM+IrjNRgEBSKADyIrRM8IHsAAILRs9IrSspIntAAgEA0YARCILitQIrks/IIlAAILkM+IrjNRgEAijARCILitQIrks/IIlAAILjM+IriNRgEAuhADyIrQM8IHsAAILRs9IrRspInuAAgAQtRCILitQIrks/IIlAAILkM+IrjNRgAhHRCILitQIrks/IIkAAILkM+IrjNRgAK3DyIrPM8IHqAAILRs9IrRspInsAAgAy5RCILitQIrks/IIlAAILiM+IriNRgEgkvARCILjtQIrks/IIlAAILjM+IrjNRgA4wDyIrRM8IHtAAILQs9IrRspIntAAgEg2nARCILitQIrjs/IIlAAILjM+IrjNRgEhIcARCILjtQIrls/IIlAAILkM+IrjNRgEg8dADyIrRM8IHsAAILRs9IrRspIntAAgEhaOARCILitQIrls/IIlAAILkM+IrjNRgEhsDARCILitQIrks/IIlAAILjM+IrjNRgEhgFADyIrRM8IHtAAILRs9IrSspIntAAg");
	var mask_3_graphics_62 = new cjs.Graphics().p("EBYAARCILitQIrks/IIlAAILjM+IrjNRgEBGLARCILjtQIrls/IIlAAILjM+IrjNRgEBSKADyIrRM8IHsAAILRs9IrSspIntAAgEA0YARCILitQIrks/IIlAAILkM+IrjNRgEAijARCILitQIrks/IIlAAILjM+IriNRgEAuhADyIrQM8IHsAAILRs9IrRspInuAAgAQtRCILitQIrks/IIlAAILkM+IrjNRgAhGRCILhtQIrks/IIkAAILkM+IrjNRgAK3DyIrPM8IHqAAILRs9IrRspInsAAgAy5RCILitQIrks/IIlAAILiM+IriNRgEgkvARCILjtQIrls/IImAAILjM+IrjNRgA4wDyIrRM8IHsAAILRs9IrRspIntAAgEg2nARCILitQIrjs/IIlAAILjM+IrjNRgEhIcARCILjtQIrls/IIlAAILkM+IrjNRgEg8dADyIrRM8IHsAAILRs9IrRspIntAAgEhaOARCILitQIrks/IIlAAILjM+IrjNRgEhsEARCILjtQIrks/IIlAAILjM+IrjNRgEhgFADyIrRM8IHtAAILRs9IrSspIntAAg");
	var mask_3_graphics_63 = new cjs.Graphics().p("EBYAARCILitQIrks/IIlAAILkM+IrjNRgEBGLARCILitQIrks/IIlAAILjM+IrjNRgEBSJADyIrQM8IHsAAILRs9IrRspInuAAgEA0YARCILitQIrks/IIlAAILkM+IrjNRgEAijARCILjtQIrls/IIlAAILkM+IrjNRgEAuhADyIrQM8IHsAAILRs9IrRspIntAAgAQtRCILitQIrjs/IIlAAILjM+IrjNRgAhHRCILitQIrks/IIkAAILkM+IrjNRgAK3DyIrQM8IHrAAILRs9IrRspInsAAgAy5RCILitQIrks/IIlAAILiM+IriNRgEgkuARCILitQIrks/IIlAAILjM+IrjNRgA4wDyIrRM8IHtAAILRs9IrSspIntAAgEg2mARCILitQIrks/IIlAAILjM+IrjNRgEhIcARCILjtQIrks/IIlAAILjM+IrjNRgEg8dADyIrRM8IHtAAILRs9IrSspIntAAgEhaOARCILitQIrls/IIlAAILkM+IrjNRgEhsDARCILitQIrks/IIlAAILjM+IrjNRgEhgFADyIrQM8IHsAAILRs9IrSspIntAAg");
	var mask_3_graphics_64 = new cjs.Graphics().p("EBYAARCILitRIrks+IIlAAILjM9IrjNSgEBGLARCILjtRIrls+IIlAAILkM9IrkNSgEBSKADxIrRM8IHsAAILRs8IrSspInsAAgEA0YARCILitRIrks+IIlAAILjM9IriNSgEAijARCILitRIrks+IIlAAILjM9IrjNSgEAuiADxIrRM8IHsAAILRs8IrSspIntAAgAQuRCILitRIrls+IIlAAILkM9IrjNSgAhGRCILhtRIrjs+IIkAAILjM9IrjNSgAK3DxIrPM8IHrAAILRs8IrSspInsAAgAy6RCILitRIrjs+IIlAAILiM9IriNSgEgkvARCILjtRIrls+IIlAAILkM9IrjNSgA4wDxIrQM8IHrAAILRs8IrRspIntAAgEg2nARCILitRIrks+IIlAAILkM9IrjNSgEhIbARCILitRIrls+IIlAAILkM9IrjNSgEg8dADxIrQM8IHrAAILRs8IrRspIntAAgEhaPARCILjtRIrks+IIlAAILjM9IrjNSgEhsEARCILjtRIrls+IImAAILjM9IrjNSgEhgFADxIrRM8IHsAAILRs8IrRspIntAAg");
	var mask_3_graphics_65 = new cjs.Graphics().p("EBYAARCILitRIrks+IIlAAILkM9IrkNSgEBGLARCILjtRIrls+IIlAAILkM9IrjNSgEBSJADxIrQM8IHsAAILRs8IrRspIntAAgEA0YARCILitRIrks+IIlAAILjM9IrjNSgEAijARCILjtRIrls+IIlAAILjM9IrjNSgEAuiADxIrRM8IHsAAILRs8IrSspIntAAgAQuRCILitRIrls+IIlAAILkM9IrjNSgAhGRCILhtRIrjs+IIkAAILjM9IrjNSgAK3DxIrPM8IHrAAILRs8IrSspInsAAgAy6RCILitRIrks+IIlAAILjM9IriNSgEgkuARCILitRIrls+IIlAAILkM9IrjNSgA4wDxIrQM8IHrAAILRs8IrRspIntAAgEg2nARCILitRIrks+IIlAAILkM9IrjNSgEhIbARCILitRIrls+IIlAAILkM9IrjNSgEg8dADxIrQM8IHrAAILSs8IrSspIntAAgEhaPARCILitRIrjs+IIlAAILjM9IrjNSgEhsEARCILjtRIrls+IIlAAILkM9IrjNSgEhgFADxIrRM8IHsAAILRs8IrRspIntAAg");
	var mask_3_graphics_66 = new cjs.Graphics().p("EBYAARCILitRIrks+IIlAAILjM9IrjNSgEBGLARCILjtRIrls+IIlAAILkM9IrkNSgEBSKADxIrRM8IHsAAILRs8IrSspInsAAgEA0YARCILitRIrks+IIlAAILjM9IriNSgEAijARCILitRIrks+IIlAAILjM9IrjNSgEAuhADxIrQM8IHsAAILRs8IrSspIntAAgAQtRCILjtRIrls+IIlAAILkM9IrjNSgAhGRCILhtRIrks+IIlAAILjM9IrjNSgAK3DxIrPM8IHqAAILSs8IrSspInsAAgAy6RCILitRIrjs+IIlAAILiM9IriNSgEgkvARCILjtRIrls+IIlAAILkM9IrjNSgA4wDxIrQM8IHrAAILRs8IrRspIntAAgEg2nARCILitRIrks+IIlAAILkM9IrjNSgEhIbARCILitRIrls+IIlAAILkM9IrjNSgEg8dADxIrQM8IHrAAILRs8IrRspIntAAgEhaOARCILhtRIrjs+IIlAAILjM9IrjNSgEhsEARCILjtRIrks+IIkAAILkM9IrjNSgEhgFADxIrRM8IHtAAILQs8IrRspIntAAg");
	var mask_3_graphics_67 = new cjs.Graphics().p("EBYAARCILitRIrks+IIlAAILkM9IrjNSgEBGLARCILitRIrks+IIlAAILjM9IrjNSgEBSJADxIrQM8IHsAAILRs8IrRspInuAAgEA0YARCILitRIrks+IIlAAILkM9IrkNSgEAijARCILjtRIrls+IIlAAILkM9IrjNSgEAuhADxIrQM8IHsAAILRs8IrRspIntAAgAQtRCILitRIrjs+IIlAAILjM9IrjNSgAhHRCILitRIrks+IIkAAILkM9IrjNSgAK3DxIrQM8IHrAAILRs8IrRspInsAAgAy5RCILitRIrls+IIlAAILjM9IriNSgEgkuARCILitRIrks+IIlAAILjM9IrjNSgA4wDxIrRM8IHtAAILRs8IrSspIntAAgEg2mARCILitRIrks+IIlAAILjM9IrjNSgEhIcARCILjtRIrks+IIlAAILjM9IrjNSgEg8dADxIrRM8IHtAAILRs8IrSspIntAAgEhaPARCILitRIrks+IIlAAILkM9IrjNSgEhsDARCILitRIrls+IImAAILjM9IrjNSgEhgFADxIrQM8IHrAAILSs8IrSspIntAAg");
	var mask_3_graphics_68 = new cjs.Graphics().p("EBYAARCILitRIrks+IIlAAILjM9IrjNSgEBGLARCILitRIrks+IIlAAILjM9IrjNSgEBSKADxIrRM8IHsAAILRs8IrSspIntAAgEA0YARCILitRIrks+IIlAAILkM9IrjNSgEAijARCILitRIrks+IIlAAILjM9IriNSgEAuhADxIrQM8IHsAAILRs8IrRspInuAAgAQtRCILitRIrks+IIlAAILkM9IrjNSgAhHRCILitRIrks+IIkAAILkM9IrjNSgAK3DxIrPM8IHqAAILRs8IrRspInsAAgAy5RCILitRIrks+IIlAAILiM9IriNSgEgkvARCILjtRIrks+IIlAAILjM9IrjNSgA4wDxIrRM8IHtAAILQs8IrRspIntAAgEg2nARCILitRIrjs+IIlAAILjM9IrjNSgEhIcARCILjtRIrls+IIlAAILkM9IrjNSgEg8dADxIrRM8IHsAAILRs8IrRspIntAAgEhaOARCILitRIrls+IIlAAILkM9IrjNSgEhsDARCILitRIrks+IIlAAILjM9IrjNSgEhgFADxIrRM8IHtAAILRs8IrSspIntAAg");
	var mask_3_graphics_69 = new cjs.Graphics().p("EBYAARCILitRIrks+IIlAAILjM9IrjNSgEBGLARCILitRIrks+IIlAAILjM9IrjNSgEBSJADxIrQM8IHsAAILRs8IrSspIntAAgEA0YARCILitRIrks+IIlAAILkM9IrjNSgEAijARCILitRIrks+IIlAAILkM9IrjNSgEAuhADxIrQM8IHsAAILRs8IrRspIntAAgAQtRCILitRIrjs+IIlAAILjM9IrjNSgAhHRCILitRIrks+IIkAAILkM9IrjNSgAK3DxIrPM8IHqAAILRs8IrRspInsAAgAy5RCILitRIrks+IIlAAILiM9IriNSgEgkvARCILjtRIrks+IIlAAILjM9IrjNSgA4wDxIrRM8IHtAAILRs8IrSspIntAAgEg2nARCILjtRIrks+IIlAAILjM9IrjNSgEhIcARCILjtRIrks+IIlAAILjM9IrjNSgEg8dADxIrRM8IHtAAILQs8IrRspIntAAgEhaOARCILitRIrls+IIlAAILkM9IrjNSgEhsDARCILitRIrks+IIlAAILjM9IrjNSgEhgFADxIrRM8IHtAAILRs8IrSspIntAAg");
	var mask_3_graphics_70 = new cjs.Graphics().p("EBYAARCILitRIrks+IIlAAILkM9IrjNSgEBGLARCILitRIrks+IIlAAILkM9IrjNSgEBSJADxIrQM8IHsAAILRs8IrRspIntAAgEA0YARCILitRIrks+IIlAAILjM9IrjNSgEAijARCILjtRIrls+IIlAAILkM9IrkNSgEAuiADxIrRM8IHsAAILRs8IrSspInsAAgAQuRCILitRIrks+IIlAAILjM9IrjNSgAhHRCILitRIrjs+IIkAAILjM9IrjNSgAK3DxIrQM8IHsAAILRs8IrSspInsAAgAy6RCILitRIrks+IIlAAILjM9IriNSgEgkuARCILitRIrls+IIlAAILkM9IrjNSgA4wDxIrQM8IHrAAILSs8IrSspIntAAgEg2mARCILitRIrls+IIlAAILkM9IrjNSgEhIbARCILitRIrks+IIlAAILjM9IrjNSgEg8dADxIrQM8IHsAAILRs8IrSspIntAAgEhaPARCILitRIrks+IIlAAILkM9IrjNSgEhsEARCILjtRIrls+IIlAAILkM9IrjNSgEhgFADxIrQM8IHrAAILRs8IrRspIntAAg");
	var mask_3_graphics_71 = new cjs.Graphics().p("EBYAARBILitQIrks/IIlAAILjM+IriNRgEBGLARBILitQIrks/IIlAAILjM+IrjNRgEBSJADxIrQM8IHsAAILRs9IrSspIntAAgEA0YARBILitQIrks/IIlAAILkM+IrjNRgEAijARBILitQIrks/IIlAAILkM+IrjNRgEAuhADxIrQM8IHsAAILRs9IrRspIntAAgAQtRBILitQIrjs/IIlAAILjM+IrjNRgAhHRBILitQIrks/IIkAAILkM+IrjNRgAK3DxIrQM8IHrAAILRs9IrRspInsAAgAy5RBILitQIrks/IIlAAILiM+IriNRgEgkvARBILjtQIrks/IIlAAILjM+IrjNRgA4wDxIrRM8IHtAAILRs9IrSspIntAAgEg2mARBILitQIrks/IIlAAILjM+IrjNRgEhIcARBILjtQIrks/IIlAAILjM+IrjNRgEg8dADxIrRM8IHtAAILQs9IrRspIntAAgEhaOARBILitQIrls/IIlAAILkM+IrjNRgEhsDARBILitQIrks/IIlAAILjM+IrjNRgEhgFADxIrQM8IHsAAILRs9IrSspIntAAg");
	var mask_3_graphics_72 = new cjs.Graphics().p("EBYAARBILitQIrks/IIlAAILjM+IriNRgEBGLARBILitQIrks/IIlAAILjM+IrjNRgEBSJADxIrQM8IHsAAILRs9IrSspIntAAgEA0YARBILitQIrks/IIlAAILkM+IrjNRgEAijARBILitQIrks/IIlAAILkM+IrjNRgEAuhADxIrQM8IHsAAILRs9IrRspIntAAgAQtRBILitQIrjs/IIlAAILjM+IrjNRgAhHRBILitQIrks/IIkAAILkM+IrjNRgAK3DxIrQM8IHrAAILRs9IrRspInsAAgAy5RBILitQIrks/IIlAAILiM+IriNRgEgkvARBILjtQIrks/IIlAAILjM+IrjNRgA4wDxIrRM8IHtAAILRs9IrSspIntAAgEg2mARBILitQIrks/IIlAAILjM+IrjNRgEhIcARBILjtQIrks/IIlAAILjM+IrjNRgEg8dADxIrRM8IHtAAILQs9IrRspIntAAgEhaOARBILitQIrls/IIlAAILkM+IrjNRgEhsDARBILitQIrks/IIlAAILjM+IrjNRgEhgFADxIrQM8IHsAAILRs9IrSspIntAAg");
	var mask_3_graphics_73 = new cjs.Graphics().p("EBYAARBILitQIrks/IIlAAILkM+IrjNRgEBGLARBILitQIrks/IIlAAILkM+IrjNRgEBSJADxIrQM8IHsAAILRs9IrRspIntAAgEA0YARBILitQIrks/IIlAAILjM+IrjNRgEAijARBILjtQIrls/IIlAAILkM+IrkNRgEAuiADxIrRM8IHsAAILRs9IrSspInsAAgAQuRBILitQIrks/IIlAAILjM+IrjNRgAhHRBILitQIrjs/IIkAAILjM+IrjNRgAK3DxIrQM8IHsAAILRs9IrSspInsAAgAy5RBILitQIrls/IIlAAILjM+IriNRgEgkuARBILitQIrks/IIlAAILjM+IrjNRgA4wDxIrQM8IHsAAILRs9IrSspIntAAgEg2mARBILitQIrls/IIlAAILkM+IrjNRgEhIbARBILitQIrks/IIlAAILjM+IrjNRgEg8dADxIrQM8IHsAAILRs9IrSspIntAAgEhaPARBILitQIrks/IIlAAILkM+IrjNRgEhsDARBILitQIrls/IIlAAILkM+IrjNRgEhgFADxIrQM8IHrAAILRs9IrRspIntAAg");
	var mask_3_graphics_74 = new cjs.Graphics().p("EBYAARBILitQIrks/IIlAAILjM+IrjNRgEBGLARBILitQIrks/IIlAAILjM+IrjNRgEBSKADxIrRM8IHsAAILRs9IrSspIntAAgEA0YARBILitQIrks/IIlAAILkM+IrjNRgEAijARBILitQIrks/IIlAAILjM+IriNRgEAuhADxIrQM8IHsAAILRs9IrRspInuAAgAQtRBILitQIrks/IIlAAILkM+IrjNRgAhHRBILitQIrks/IIkAAILkM+IrjNRgAK3DxIrPM8IHqAAILRs9IrRspInsAAgAy5RBILitQIrks/IIlAAILiM+IriNRgEgkvARBILjtQIrks/IIlAAILjM+IrjNRgA4wDxIrRM8IHtAAILQs9IrRspIntAAgEg2nARBILitQIrjs/IIlAAILjM+IrjNRgEhIcARBILjtQIrls/IIlAAILkM+IrjNRgEg8dADxIrRM8IHsAAILRs9IrRspIntAAgEhaOARBILitQIrls/IIlAAILkM+IrjNRgEhsDARBILitQIrks/IIlAAILjM+IrjNRgEhgFADxIrRM8IHtAAILRs9IrSspIntAAg");
	var mask_3_graphics_75 = new cjs.Graphics().p("EBYAARBILitQIrks/IIlAAILjM+IrjNRgEBGLARBILjtQIrls/IIlAAILjM+IrjNRgEBSKADxIrRM8IHsAAILRs9IrSspIntAAgEA0YARBILitQIrks/IIlAAILkM+IrjNRgEAijARBILitQIrks/IIlAAILjM+IrjNRgEAuhADxIrQM8IHsAAILRs9IrRspInuAAgAQtRBILitQIrks/IIlAAILkM+IrjNRgAhGRBILhtQIrks/IIkAAILkM+IrjNRgAK3DxIrPM8IHqAAILRs9IrRspInsAAgAy5RBILhtQIrjs/IIlAAILiM+IriNRgEgkvARBILjtQIrls/IIlAAILkM+IrjNRgA4wDxIrRM8IHsAAILRs9IrRspIntAAgEg2nARBILitQIrjs/IIlAAILjM+IrjNRgEhIcARBILjtQIrls/IIlAAILkM+IrjNRgEg8dADxIrRM8IHsAAILRs9IrRspIntAAgEhaOARBILitQIrks/IIlAAILjM+IrjNRgEhsEARBILjtQIrks/IIlAAILjM+IrjNRgEhgFADxIrRM8IHtAAILRs9IrSspIntAAg");
	var mask_3_graphics_76 = new cjs.Graphics().p("EBYAARBILitQIrks/IIlAAILjM+IriNRgEBGLARBILitQIrks/IIlAAILjM+IrjNRgEBSJADxIrQM8IHsAAILRs9IrSspIntAAgEA0YARBILitQIrks/IIlAAILkM+IrjNRgEAijARBILitQIrks/IIlAAILkM+IrjNRgEAuhADxIrQM8IHsAAILRs9IrRspIntAAgAQtRBILitQIrjs/IIlAAILjM+IrjNRgAhHRBILitQIrks/IIkAAILkM+IrjNRgAK3DxIrQM8IHrAAILRs9IrRspInsAAgAy5RBILitQIrks/IIlAAILiM+IriNRgEgkvARBILjtQIrks/IIlAAILjM+IrjNRgA4wDxIrRM8IHtAAILRs9IrSspIntAAgEg2mARBILitQIrks/IIlAAILjM+IrjNRgEhIcARBILjtQIrks/IIlAAILjM+IrjNRgEg8dADxIrRM8IHtAAILQs9IrRspIntAAgEhaOARBILitQIrls/IIlAAILkM+IrjNRgEhsDARBILitQIrks/IIlAAILjM+IrjNRgEhgFADxIrQM8IHsAAILRs9IrSspIntAAg");
	var mask_3_graphics_77 = new cjs.Graphics().p("EBYAARBILitQIrks/IIlAAILjM+IrjNRgEBGLARBILjtQIrls/IIlAAILkM+IrjNRgEBSKADxIrRM8IHsAAILRs9IrSspInsAAgEA0YARBILitQIrks/IIlAAILjM+IrjNRgEAijARBILitQIrks/IIlAAILjM+IrjNRgEAuiADxIrRM8IHsAAILRs9IrSspIntAAgAQuRBILitQIrls/IIlAAILkM+IrjNRgAhGRBILhtQIrjs/IIkAAILjM+IrjNRgAK3DxIrPM8IHrAAILRs9IrSspInsAAgAy6RBILitQIrks/IIlAAILjM+IriNRgEgkvARBILjtQIrls/IIlAAILkM+IrjNRgA4wDxIrQM8IHrAAILRs9IrRspIntAAgEg2nARBILitQIrks/IIlAAILkM+IrjNRgEhIbARBILitQIrls/IIlAAILkM+IrjNRgEg8dADxIrQM8IHrAAILRs9IrRspIntAAgEhaPARBILitQIrjs/IIlAAILjM+IrjNRgEhsEARBILjtQIrls/IIlAAILkM+IrjNRgEhgFADxIrRM8IHsAAILRs9IrRspIntAAg");
	var mask_3_graphics_78 = new cjs.Graphics().p("EBYAARBILitRIrks+IIlAAILkM9IrjNSgEBGLARBILitRIrks+IIlAAILkM9IrjNSgEBSJADwIrQM8IHsAAILRs8IrRspIntAAgEA0YARBILitRIrks+IIlAAILjM9IrjNSgEAijARBILjtRIrls+IIlAAILkM9IrkNSgEAuiADwIrRM8IHsAAILRs8IrSspInsAAgAQuRBILitRIrks+IIlAAILjM9IrjNSgAhHRBILitRIrjs+IIkAAILjM9IrjNSgAK3DwIrQM8IHsAAILRs8IrSspInsAAgAy6RBILitRIrks+IIlAAILjM9IriNSgEgkuARBILitRIrls+IIlAAILkM9IrjNSgA4wDwIrQM8IHrAAILSs8IrSspIntAAgEg2mARBILitRIrls+IIlAAILkM9IrjNSgEhIbARBILitRIrks+IIlAAILjM9IrjNSgEg8dADwIrQM8IHsAAILRs8IrSspIntAAgEhaPARBILitRIrks+IIlAAILkM9IrjNSgEhsEARBILjtRIrls+IIlAAILkM9IrjNSgEhgFADwIrQM8IHrAAILRs8IrRspIntAAg");
	var mask_3_graphics_79 = new cjs.Graphics().p("EBYAARBILitRIrks+IIlAAILkM9IrkNSgEBGLARBILjtRIrls+IIlAAILkM9IrjNSgEBSKADwIrRM8IHsAAILRs8IrRspIntAAgEA0YARBILitRIrks+IIlAAILjM9IrjNSgEAijARBILjtRIrls+IIlAAILjM9IrjNSgEAuiADwIrRM8IHsAAILRs8IrSspIntAAgAQuRBILitRIrls+IIlAAILkM9IrjNSgAhGRBILhtRIrjs+IIkAAILjM9IrjNSgAK3DwIrPM8IHrAAILRs8IrSspInsAAgAy6RBILitRIrks+IIlAAILjM9IriNSgEgkuARBILitRIrls+IIlAAILkM9IrjNSgA4wDwIrQM8IHrAAILRs8IrRspIntAAgEg2nARBILitRIrks+IIlAAILkM9IrjNSgEhIbARBILitRIrls+IIlAAILkM9IrjNSgEg8dADwIrQM8IHrAAILSs8IrSspIntAAgEhaPARBILitRIrjs+IIlAAILjM9IrjNSgEhsEARBILjtRIrls+IIlAAILkM9IrjNSgEhgFADwIrRM8IHsAAILRs8IrRspIntAAg");
	var mask_3_graphics_80 = new cjs.Graphics().p("EBYAARBILitRIrks+IIlAAILjM9IrjNSgEBGLARBILitRIrks+IIlAAILjM9IrjNSgEBSKADwIrRM8IHsAAILRs8IrSspIntAAgEA0YARBILitRIrks+IIlAAILkM9IrjNSgEAijARBILitRIrks+IIlAAILjM9IriNSgEAuhADwIrQM8IHsAAILRs8IrRspIntAAgAQtRBILitRIrks+IIlAAILkM9IrjNSgAhHRBILitRIrks+IIkAAILkM9IrjNSgAK3DwIrPM8IHqAAILRs8IrRspInsAAgAy5RBILitRIrks+IIlAAILiM9IriNSgEgkvARBILjtRIrks+IIlAAILjM9IrjNSgA4wDwIrRM8IHtAAILQs8IrRspIntAAgEg2nARBILitRIrjs+IIlAAILjM9IrjNSgEhIcARBILjtRIrls+IIlAAILkM9IrjNSgEg8dADwIrRM8IHsAAILRs8IrRspIntAAgEhaOARBILitRIrls+IIlAAILkM9IrjNSgEhsDARBILitRIrks+IIlAAILjM9IrjNSgEhgFADwIrRM8IHtAAILRs8IrSspIntAAg");
	var mask_3_graphics_81 = new cjs.Graphics().p("EBYAARBILitRIrks+IIlAAILjM9IrjNSgEBGLARBILjtRIrls+IIlAAILkM9IrkNSgEBSKADwIrRM8IHsAAILRs8IrSspInsAAgEA0YARBILitRIrks+IIlAAILjM9IriNSgEAijARBILitRIrks+IIlAAILjM9IrjNSgEAuhADwIrQM8IHsAAILRs8IrSspIntAAgAQtRBILitRIrks+IIlAAILkM9IrjNSgAhGRBILhtRIrks+IIkAAILkM9IrjNSgAK3DwIrPM8IHqAAILSs8IrSspInsAAgAy6RBILitRIrjs+IIlAAILiM9IriNSgEgkvARBILjtRIrls+IIlAAILkM9IrjNSgA4wDwIrRM8IHsAAILRs8IrRspIntAAgEg2nARBILitRIrks+IIlAAILkM9IrjNSgEhIcARBILjtRIrls+IIlAAILkM9IrjNSgEg8dADwIrQM8IHrAAILRs8IrRspIntAAgEhaOARBILitRIrks+IIlAAILjM9IrjNSgEhsEARBILjtRIrks+IIlAAILjM9IrjNSgEhgFADwIrRM8IHtAAILQs8IrRspIntAAg");
	var mask_3_graphics_82 = new cjs.Graphics().p("EBYAARBILitRIrks+IIlAAILjM9IrjNSgEBGLARBILjtRIrls+IIlAAILkM9IrkNSgEBSKADwIrRM8IHsAAILRs8IrSspInsAAgEA0YARBILitRIrks+IIlAAILkM9IrjNSgEAijARBILitRIrks+IIlAAILjM9IrjNSgEAuhADwIrQM8IHsAAILRs8IrSspIntAAgAQtRBILitRIrks+IIlAAILkM9IrjNSgAhGRBILhtRIrks+IIkAAILkM9IrjNSgAK3DwIrPM8IHqAAILSs8IrSspInsAAgAy6RBILitRIrjs+IIlAAILiM9IriNSgEgkvARBILjtRIrls+IIlAAILkM9IrjNSgA4wDwIrRM8IHsAAILRs8IrRspIntAAgEg2nARBILitRIrks+IIlAAILkM9IrjNSgEhIcARBILjtRIrls+IIlAAILkM9IrjNSgEg8dADwIrQM8IHrAAILRs8IrRspIntAAgEhaOARBILitRIrks+IIlAAILjM9IrjNSgEhsEARBILjtRIrks+IIlAAILjM9IrjNSgEhgFADwIrRM8IHtAAILQs8IrRspIntAAg");
	var mask_3_graphics_83 = new cjs.Graphics().p("EBYAARBILitRIrks+IIlAAILkM9IrjNSgEBGLARBILitRIrks+IIlAAILjM9IrjNSgEBSJADwIrQM8IHsAAILRs8IrRspInuAAgEA0YARBILitRIrks+IIlAAILkM9IrjNSgEAijARBILitRIrks+IIlAAILkM9IrjNSgEAuhADwIrQM8IHsAAILRs8IrRspIntAAgAQtRBILitRIrjs+IIlAAILjM9IrjNSgAhHRBILitRIrks+IIkAAILkM9IrjNSgAK3DwIrQM8IHrAAILRs8IrRspInsAAgAy5RBILitRIrks+IIlAAILiM9IriNSgEgkuARBILitRIrks+IIlAAILjM9IrjNSgA4wDwIrRM8IHtAAILRs8IrSspIntAAgEg2mARBILitRIrks+IIlAAILjM9IrjNSgEhIcARBILjtRIrks+IIlAAILjM9IrjNSgEg8dADwIrRM8IHtAAILRs8IrSspIntAAgEhaOARBILitRIrls+IIlAAILkM9IrjNSgEhsDARBILitRIrks+IIlAAILjM9IrjNSgEhgFADwIrQM8IHsAAILRs8IrSspIntAAg");
	var mask_3_graphics_84 = new cjs.Graphics().p("EBYAARAILitQIrks/IIlAAILjM+IrjNRgEBGLARAILjtQIrls/IIlAAILkM+IrkNRgEBSKADwIrRM8IHsAAILRs9IrSspInsAAgEA0YARAILitQIrks/IIlAAILjM+IriNRgEAijARAILitQIrks/IIlAAILjM+IrjNRgEAuhADwIrQM8IHsAAILRs9IrSspIntAAgAQtRAILitQIrks/IIlAAILkM+IrjNRgAhGRAILhtQIrks/IIkAAILkM+IrjNRgAK3DwIrPM8IHqAAILSs9IrSspInsAAgAy6RAILitQIrjs/IIlAAILiM+IriNRgEgkvARAILjtQIrls/IIlAAILkM+IrjNRgA4wDwIrRM8IHsAAILRs9IrRspIntAAgEg2nARAILitQIrks/IIlAAILkM+IrjNRgEhIcARAILjtQIrls/IIlAAILkM+IrjNRgEg8dADwIrQM8IHrAAILRs9IrRspIntAAgEhaOARAILitQIrks/IIlAAILjM+IrjNRgEhsEARAILjtQIrks/IIlAAILjM+IrjNRgEhgFADwIrRM8IHtAAILQs9IrRspIntAAg");
	var mask_3_graphics_85 = new cjs.Graphics().p("EBYAARAILitQIrks/IIlAAILjM+IrjNRgEBGLARAILjtQIrls/IIlAAILkM+IrkNRgEBSKADwIrRM8IHsAAILRs9IrSspInsAAgEA0YARAILitQIrks/IIlAAILjM+IriNRgEAijARAILitQIrks/IIlAAILjM+IrjNRgEAuhADwIrQM8IHsAAILRs9IrSspIntAAgAQtRAILitQIrks/IIlAAILkM+IrjNRgAhGRAILhtQIrks/IIkAAILkM+IrjNRgAK3DwIrPM8IHqAAILSs9IrSspInsAAgAy6RAILitQIrjs/IIlAAILiM+IriNRgEgkvARAILjtQIrls/IIlAAILkM+IrjNRgA4wDwIrRM8IHsAAILRs9IrRspIntAAgEg2nARAILitQIrks/IIlAAILkM+IrjNRgEhIcARAILjtQIrls/IIlAAILkM+IrjNRgEg8dADwIrQM8IHrAAILRs9IrRspIntAAgEhaOARAILitQIrks/IIlAAILjM+IrjNRgEhsEARAILjtQIrks/IIlAAILjM+IrjNRgEhgFADwIrRM8IHtAAILQs9IrRspIntAAg");
	var mask_3_graphics_86 = new cjs.Graphics().p("EBYAARAILitQIrks/IIlAAILjM+IrjNRgEBGLARAILitQIrks/IIlAAILjM+IrjNRgEBSKADwIrRM8IHsAAILRs9IrSspIntAAgEA0YARAILitQIrks/IIlAAILkM+IrjNRgEAijARAILitQIrks/IIlAAILjM+IriNRgEAuhADwIrQM8IHsAAILRs9IrRspInuAAgAQtRAILitQIrjs/IIkAAILkM+IrjNRgAhHRAILitQIrks/IIkAAILkM+IrjNRgAK3DwIrPM8IHqAAILRs9IrRspInsAAgAy5RAILitQIrks/IIlAAILiM+IriNRgEgkvARAILjtQIrks/IIlAAILjM+IrjNRgA4wDwIrRM8IHtAAILQs9IrRspIntAAgEg2nARAILjtQIrks/IIlAAILjM+IrjNRgEhIcARAILjtQIrls/IIlAAILkM+IrjNRgEg8dADwIrRM8IHsAAILRs9IrRspIntAAgEhaOARAILitQIrls/IIlAAILkM+IrjNRgEhsDARAILitQIrks/IIlAAILjM+IrjNRgEhgFADwIrRM8IHtAAILRs9IrSspIntAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_3_graphics_13,x:-549.8,y:109.25}).wait(1).to({graphics:mask_3_graphics_14,x:-543.9494,y:109.247}).wait(1).to({graphics:mask_3_graphics_15,x:-537.9406,y:109.244}).wait(1).to({graphics:mask_3_graphics_16,x:-531.7737,y:109.2409}).wait(1).to({graphics:mask_3_graphics_17,x:-525.4487,y:109.2377}).wait(1).to({graphics:mask_3_graphics_18,x:-518.9656,y:109.2344}).wait(1).to({graphics:mask_3_graphics_19,x:-512.3243,y:109.2311}).wait(1).to({graphics:mask_3_graphics_20,x:-505.5249,y:109.2277}).wait(1).to({graphics:mask_3_graphics_21,x:-498.5674,y:109.2242}).wait(1).to({graphics:mask_3_graphics_22,x:-491.4517,y:109.2206}).wait(1).to({graphics:mask_3_graphics_23,x:-484.178,y:109.2169}).wait(1).to({graphics:mask_3_graphics_24,x:-476.7461,y:109.2132}).wait(1).to({graphics:mask_3_graphics_25,x:-469.1561,y:109.2093}).wait(1).to({graphics:mask_3_graphics_26,x:-461.4079,y:109.2054}).wait(1).to({graphics:mask_3_graphics_27,x:-453.5017,y:109.2014}).wait(1).to({graphics:mask_3_graphics_28,x:-445.4373,y:109.1974}).wait(1).to({graphics:mask_3_graphics_29,x:-437.2147,y:109.1932}).wait(1).to({graphics:mask_3_graphics_30,x:-428.8341,y:109.189}).wait(1).to({graphics:mask_3_graphics_31,x:-420.2953,y:109.1847}).wait(1).to({graphics:mask_3_graphics_32,x:-411.5984,y:109.1803}).wait(1).to({graphics:mask_3_graphics_33,x:-402.7434,y:109.1758}).wait(1).to({graphics:mask_3_graphics_34,x:-393.7303,y:109.1713}).wait(1).to({graphics:mask_3_graphics_35,x:-384.559,y:109.1667}).wait(1).to({graphics:mask_3_graphics_36,x:-375.2296,y:109.162}).wait(1).to({graphics:mask_3_graphics_37,x:-365.7421,y:109.1572}).wait(1).to({graphics:mask_3_graphics_38,x:-356.0964,y:109.1523}).wait(1).to({graphics:mask_3_graphics_39,x:-346.2927,y:109.1474}).wait(1).to({graphics:mask_3_graphics_40,x:-336.3308,y:109.1423}).wait(1).to({graphics:mask_3_graphics_41,x:-326.2108,y:109.1372}).wait(1).to({graphics:mask_3_graphics_42,x:-315.9326,y:109.132}).wait(1).to({graphics:mask_3_graphics_43,x:-305.4963,y:109.1268}).wait(1).to({graphics:mask_3_graphics_44,x:-294.9019,y:109.1214}).wait(1).to({graphics:mask_3_graphics_45,x:-284.1494,y:109.116}).wait(1).to({graphics:mask_3_graphics_46,x:-273.2388,y:109.1105}).wait(1).to({graphics:mask_3_graphics_47,x:-262.17,y:109.1049}).wait(1).to({graphics:mask_3_graphics_48,x:-250.9431,y:109.0993}).wait(1).to({graphics:mask_3_graphics_49,x:-239.5581,y:109.0935}).wait(1).to({graphics:mask_3_graphics_50,x:-228.0149,y:109.0877}).wait(1).to({graphics:mask_3_graphics_51,x:-216.3136,y:109.0818}).wait(1).to({graphics:mask_3_graphics_52,x:-204.4542,y:109.0758}).wait(1).to({graphics:mask_3_graphics_53,x:-192.4367,y:109.0698}).wait(1).to({graphics:mask_3_graphics_54,x:-180.2611,y:109.0636}).wait(1).to({graphics:mask_3_graphics_55,x:-167.9273,y:109.0574}).wait(1).to({graphics:mask_3_graphics_56,x:-155.4354,y:109.0511}).wait(1).to({graphics:mask_3_graphics_57,x:-142.7853,y:109.0447}).wait(1).to({graphics:mask_3_graphics_58,x:-129.9772,y:109.0383}).wait(1).to({graphics:mask_3_graphics_59,x:-117.0109,y:109.0317}).wait(1).to({graphics:mask_3_graphics_60,x:-103.8865,y:109.0251}).wait(1).to({graphics:mask_3_graphics_61,x:-90.604,y:109.0184}).wait(1).to({graphics:mask_3_graphics_62,x:-77.1633,y:109.0116}).wait(1).to({graphics:mask_3_graphics_63,x:-63.5645,y:109.0048}).wait(1).to({graphics:mask_3_graphics_64,x:-49.8076,y:108.9978}).wait(1).to({graphics:mask_3_graphics_65,x:-35.8926,y:108.9908}).wait(1).to({graphics:mask_3_graphics_66,x:-21.8195,y:108.9837}).wait(1).to({graphics:mask_3_graphics_67,x:-7.5882,y:108.9765}).wait(1).to({graphics:mask_3_graphics_68,x:6.8012,y:108.9693}).wait(1).to({graphics:mask_3_graphics_69,x:21.3488,y:108.9619}).wait(1).to({graphics:mask_3_graphics_70,x:36.0544,y:108.9545}).wait(1).to({graphics:mask_3_graphics_71,x:50.9182,y:108.947}).wait(1).to({graphics:mask_3_graphics_72,x:65.9401,y:108.9394}).wait(1).to({graphics:mask_3_graphics_73,x:81.1202,y:108.9318}).wait(1).to({graphics:mask_3_graphics_74,x:96.4583,y:108.9241}).wait(1).to({graphics:mask_3_graphics_75,x:111.9546,y:108.9162}).wait(1).to({graphics:mask_3_graphics_76,x:127.609,y:108.9083}).wait(1).to({graphics:mask_3_graphics_77,x:143.4215,y:108.9004}).wait(1).to({graphics:mask_3_graphics_78,x:159.3922,y:108.8923}).wait(1).to({graphics:mask_3_graphics_79,x:175.521,y:108.8842}).wait(1).to({graphics:mask_3_graphics_80,x:191.8079,y:108.876}).wait(1).to({graphics:mask_3_graphics_81,x:208.2529,y:108.8677}).wait(1).to({graphics:mask_3_graphics_82,x:224.8561,y:108.8593}).wait(1).to({graphics:mask_3_graphics_83,x:241.6174,y:108.8508}).wait(1).to({graphics:mask_3_graphics_84,x:258.5368,y:108.8423}).wait(1).to({graphics:mask_3_graphics_85,x:275.6143,y:108.8337}).wait(1).to({graphics:mask_3_graphics_86,x:292.85,y:108.825}).wait(1).to({graphics:null,x:0,y:0}).wait(808));

	// img01
	this.instance_24 = new lib.Symbol8();
	this.instance_24.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(40).to({_off:false},0).to({alpha:1},16,cjs.Ease.quadInOut).to({_off:true},11).wait(828));

	// img01
	this.instance_25 = new lib.Symbol8();
	this.instance_25.setTransform(210,191,1,1,0,0,0,210,191);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(48).to({_off:false},0).to({alpha:1},19,cjs.Ease.quadIn).to({regX:209.8,regY:190.8,scaleX:1.2019,scaleY:1.2019,x:224.9,y:201.35},254).to({_off:true},1).wait(573));

	// arrows_copy
	this.instance_26 = new lib.Symbol2("synched",0);
	this.instance_26.setTransform(-773.05,134.5,1,1,0,0,0,691.9,84);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({_off:false},0).to({x:-549.75},12,cjs.Ease.sineOut).to({x:292.9,y:133.65},73,cjs.Ease.get(-0.5)).to({_off:true},1).wait(808));

	// bg
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#52565A").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_16.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(895));

	// stageBackground
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A4/1FMAx/AAAMAAAAqLMgx/AAAg");
	this.shape_17.setTransform(150,125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#52565A").s().p("A4/VGMAAAgqLMAx/AAAMAAAAqLg");
	this.shape_18.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(895));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1314.9,90.1,2299.6000000000004,182.50000000000003);
// library properties:
lib.properties = {
	id: 'B915F0BB2CAF214394D0C3C0B5CA43BE',
	width: 300,
	height: 250,
	fps: 30,
	color: "#52565A",
	opacity: 1.00,
	manifest: [
		{src:"images/card.png?1721822598981", id:"card"},
		{src:"images/img01.jpg?1721822598981", id:"img01"},
		{src:"images/img02.jpg?1721822598981", id:"img02"},
		{src:"images/img03.jpg?1721822598981", id:"img03"}
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
an.compositions['B915F0BB2CAF214394D0C3C0B5CA43BE'] = {
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