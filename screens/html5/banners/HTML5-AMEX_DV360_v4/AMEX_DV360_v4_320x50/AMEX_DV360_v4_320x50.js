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
p.nominalBounds = new cjs.Rectangle(0,0,636,100);


(lib.img02 = function() {
	this.initialize(img.img02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,632,100);


(lib.img03 = function() {
	this.initialize(img.img03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,636,100);// helper functions:

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


(lib.Symbol32 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAAAJIgGAPIgKgGIAJgNIgRABIAAgLIARABIgJgNIAKgGIAGAPIAHgPIALAGIgKANIARgBIAAALIgRgBIAKANIgKAGg");
	this.shape.setTransform(130.15,3.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYBAQgJgEgJgKQgHgJgEgNQgEgNAAgPQAAgOAEgOQAEgLAHgKQAJgKAJgEQAKgFAOAAQAPAAAKAFQAKAEAIAKQAHAIAEANQAEAMAAAQQAAAQgEAMQgEAOgHAIQgIAKgKAEQgKAFgPAAQgOAAgKgFgAgQgdQgGAKABATQAAAUAFALQAGAKAKAAQALAAAGgKQAFgKAAgVQAAgVgFgIQgGgKgLAAQgKAAgGAKg");
	this.shape_1.setTransform(121.25,8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXBAQgLgEgHgKQgJgJgDgNQgEgNAAgPQAAgOAEgOQADgLAJgKQAHgKALgEQAKgFANAAQAOAAAKAFQALAEAIAKQAHAIAFANQADAMAAAQQAAAQgDAMQgFAOgHAIQgIAKgLAEQgKAFgOAAQgNAAgKgFgAgQgdQgFAKAAATQgBAUAHALQAFAKAKAAQALAAAFgKQAGgKAAgVQAAgVgGgIQgFgKgLAAQgKAAgGAKg");
	this.shape_2.setTransform(108.6,8.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVBAQgLgFgHgHQgIgJgEgMQgEgMAAgRQAAgNADgKQACgJAFgKQAFgJAGgEQAGgGAHgDIAOgEIANgCIAPABIAMADIAJADIAHAFIgQAXIgGgDIgGgCIgGgBIgIgBQgFAAgDACQgEABgFAEQgDADgDAGQgCAGgBAIQAIgFAHgCQAHgDAIABQAJAAAIABQAHACAHAGQAGAFAEAHQAEAHAAAOQAAALgEAIQgDAIgIAGQgHAHgKADQgKADgMAAQgMAAgLgFgAgJAIQgHACgEAEQABAOAGAHQAFAHALABQAFgBADgBQAEgCACgDIADgFIABgHIgBgHQgBgDgCgCQgBgCgEgDQgDgBgGAAQgHAAgFACg");
	this.shape_3.setTransform(96.525,8.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmBDIAAgcIAXAAIAAhJIgLAFIgGABIgGAAIAAgdQAIAAAGgCQAEgCAGgEIAiAAIAABoIATAAIAAAcg");
	this.shape_4.setTransform(86.55,8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJBSIAAgOIgRgEIgMgGQgFgEgFgFIgIgMIAYgOIALAMIAFAFQAFACADABIAAgfIgSgFQgHgDgHgEQgHgEgEgGQgEgIAAgJQAAgIADgJQAEgGAFgGQAHgGAIgDQAJgDAKAAIAAgNIATAAIAAANQAGABAJACQAIADADADQAEADAFAEIAHAIIgZARIgIgJIgKgGIAAAdQAOADAGACQAIACAHAGQAFACAFAIQAEAIAAAIQAAAHgDAIQgCAGgGAGQgGAGgIADQgJAEgOACIAAAOgAAJArQAHAAADgEQADgDAAgGQAAgGgDgCQgCgDgIgDgAgRgnQgCADAAAGIAAAEIACAEIAEACIAFACIAAgaQgFACgEADg");
	this.shape_5.setTransform(76.45,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSBDQgKgDgHgEQgJgGgDgEQgHgHgDgGIAagQIAHAIQAEAEAFACQADADAGACIAJABIAIAAIAGgDIAEgDQACgCAAgEQAAgDgCgCIgGgEIgHgDIgfgJIgLgFIgJgGQgEgEgCgGQgCgFAAgIQAAgLADgHQAEgHAHgGQAGgFAKgDQAKgDALAAQAKAAAIACQAJACAHAEIAMAIIAJAKIgYAUIgHgGIgIgGIgIgDIgIgCQgQAAAAAKQAAAEACABIAFAFIAPAGIAMACIAWAJIAKAGQAEAFACAFQACAGAAAHQAAAIgDAIQgCAGgHAHQgGAFgMAEQgKAEgQAAQgMAAgIgCg");
	this.shape_6.setTransform(63.625,8.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaBDIgyhKIgBAAIAABKIgjAAIAAiEIAmAAIAwBJIAAhJIAjAAIAACEg");
	this.shape_7.setTransform(45.625,8.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcBDIgJgZIgoAAIgJAZIghAAIAviFIAhAAIAvCFgAgNAQIAYAAIgLgjIAAAAg");
	this.shape_8.setTransform(31.875,8.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWBDIAAg2IgrAAIAAA2IgkAAIAAiEIAkAAIAAAxIArAAIAAgxIAkAAIAACEg");
	this.shape_9.setTransform(18.425,8.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgmAAIAAgdIBvAAIAAAdIgmAAIAABng");
	this.shape_10.setTransform(5.625,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,132.6,16.4), null);


(lib.Symbol31 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(123.9,6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQBDIgYgvIgKAAIAAAvIgkAAIAAiEIA1AAQAMAAAKABQAKADAHAFQAIAGADAHQAEAJAAAMQAAAPgHAJQgHAJgNAFIAdAzgAgSgGIAPAAQAKAAAFgDQAFgEAAgIQAAgJgFgDQgFgDgKgBIgPAAg");
	this.shape_1.setTransform(111.725,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPBEQgKgDgGgDIgNgJQgGgGgEgHQgFgIgDgKQgCgLAAgLQAAgKACgLQADgKAFgHQAEgIAGgGIANgJQAGgDAKgCQAHgCAIAAIAQACIAPAFQAHAEAHAFQAFAFAFAJQAFAIADAJQACAKAAALQAAAMgCAKQgDAKgFAIQgFAHgFAGQgHAFgHAEIgPAGIgQABQgIAAgHgBgAgLgkQgHAEgDAEQgCAEgDAIQgCAHAAAJQAAAKACAGIAFANQADAGAHACQAFAEAGAAQAIAAAEgEQAGgCADgGQAEgEACgJQACgKAAgGQAAgGgCgKQgCgHgEgFQgDgEgGgEQgEgCgIAAQgHAAgEACg");
	this.shape_2.setTransform(98.05,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAmBDIAAhSIgBAAIgWBSIgeAAIgRhBIgEgTIAAAAIAABUIgkAAIAAiEIAzAAIAXBZIAAAAIAVhZIAyAAIAACEg");
	this.shape_3.setTransform(83,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWBDIAAg2IgrAAIAAA2IgkAAIAAiEIAkAAIAAAxIArAAIAAgxIAkAAIAACEg");
	this.shape_4.setTransform(62.625,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgmAAIAAgdIBvAAIAAAdIgmAAIAABng");
	this.shape_5.setTransform(49.8,6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQBDIgYgvIgKAAIAAAvIgkAAIAAiEIA1AAQAMAAAKABQAKADAHAFQAIAGADAHQAEAIAAANQAAAPgHAJQgHAJgNAFIAdAzgAgSgGIAPAAQAKAAAFgDQAFgEAAgIQAAgJgFgDQgFgDgKgBIgPAAg");
	this.shape_6.setTransform(37.825,6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPBEQgKgDgGgDIgNgJQgGgGgEgHQgEgGgEgMQgCgLAAgLQAAgKACgLQAEgMAEgFQAEgIAGgGIANgJQAGgDAKgCQAIgCAHAAIAQACIAPAFQAHAEAHAFQAGAFAEAJQAFAIADAJQACAKAAALQAAAMgCAKQgDAKgFAIQgEAHgGAGQgHAFgHAEIgPAGIgQABQgHAAgIgBgAgMgkQgGAEgDAEQgCAEgDAIQgCAHAAAJQAAAKACAGIAFANQADAGAGACQAGAEAGAAQAIAAAEgEQAGgCADgGQAEgEADgJQABgHAAgJQAAgIgBgIQgDgHgEgFQgDgEgGgEQgEgCgIAAQgHAAgFACg");
	this.shape_7.setTransform(24.15,6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUBDIgShTIgUBTIgeAAIgkiEIAkAAIASBPIAAAAIAQhPIAfAAIASBPIABAAIAPhPIAiAAIgjCEg");
	this.shape_8.setTransform(8.45,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,128.8,13.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAAAFIgEAKIgFgDIAFgJIgKAAIAAgGIAKABIgFgIIAFgEIAEAJIAEgJIAGAEIgGAIIALgBIAAAGIgLAAIAGAJIgGADg");
	this.shape.setTransform(430.5,-130.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(429,-132.4,3,3), null);


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
	this.shape.graphics.f("rgba(255,255,255,0.6)").s().p("ABdCcICJidIiKiaIBmAAICKCaIiKCdgAh3CcICIidIiIiaIBmAAICICaIiICdgAAXgBIiFCaIBbAAICFiaIiFiWIhcAAgAlLCcICKidIiKiaIBmAAICJCaIiJCdg");
	this.shape.setTransform(147.4,17.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(114.2,2,66.39999999999999,31.200000000000003), null);


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
	this.shape.setTransform(8.6242,9.467,0.2056,0.2056);

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
	this.shape.graphics.f("#FFFFFF").s().p("AgwBCIAAiEIBeAAIAAAfIg6AAIAAAVIApAAIAAAbIgpAAIAAAZIA9AAIAAAcg");
	this.shape.setTransform(569.4312,-93.6751,1.2648,1.2648);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmBCIAAhQIgBAAIgDAQIgSBAIgfAAIgVhSIAABSIgkAAIAAiEIAzAAIAWBaIABAAIAVhaIAyAAIAACEg");
	this.shape_1.setTransform(551.661,-93.6751,1.2648,1.2648);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlBCIAAhQIgWBQIgeAAIgRhAIgEgSIgBAAIAABSIgjAAIAAiEIAzAAIAXBaIAAAAIAVhaIAyAAIAACEg");
	this.shape_2.setTransform(530.9185,-93.6751,1.2648,1.2648);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcBDIgIgZIgqAAIgIAZIghAAIAwiFIAgAAIAvCFgAgNARIAZAAIgMgkg");
	this.shape_3.setTransform(512.0099,-93.7067,1.2648,1.2648);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQBCIgYgtIgKAAIAAAtIgkAAIAAiEIA1AAQANAAAJACQAMAEAFAEQAHAFAEAJQAEAIAAAMQAAAPgGAJQgIAKgMADIAcAzgAgSgGIAPAAQALAAAFgEQAFgDAAgIQAAgIgFgEQgGgEgKAAIgPAAg");
	this.shape_4.setTransform(496.042,-93.6751,1.2648,1.2648);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbBAQgMgFgHgKQgHgJgDgMQgEgMAAgQQAAgPAEgNQAFgNAIgJQAIgJALgEQAMgFAOAAQAKAAAIACQAHABAJAGQAIAFAFAIQAGAJADANIghAJIgEgLQgDgEgDgDQgCgDgEgBIgHgBIgJABQgFADgDAEQgEAFgCAGQgDAJAAAKQAAAIACAHIADAMQADAEADACIAGAFIAGACIAEAAQAJAAAGgEQAGgDADgJIgUAAIAAgZIA2AAIAABDIgcAAIAAgRIgBAAIgDAGQgDAEgEACQgEAEgGACQgFACgHAAQgRAAgKgFg");
	this.shape_5.setTransform(478.588,-93.6751,1.2648,1.2648);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBDQgGgBgJgEQgIgEgFgFQgIgGgDgIQgGgIgCgJQgCgKAAgMQAAgLACgKQACgJAGgJQAFgIAGgEQAFgGAIgEIAPgGIAPgBQAJAAAHABQAKADAFADQAJAEAFAGQAGAFAEAHQAEAGAEAMQADALgBAKQABALgDALQgEAMgEAFQgDAHgHAHQgGAFgIAEQgIAEgHABQgHACgJAAgAgLgjQgGADgDAEQgFAGgBAHQgCAJAAAGQAAAHACAKQACAIAEAFQADAFAGADQAGACAFAAQAIAAAEgCQAHgDADgFQAEgGABgHQACgGAAgLQAAgJgCgGQgBgGgEgHQgDgEgHgDQgFgDgHAAQgFAAgGADg");
	this.shape_6.setTransform(461.292,-93.6751,1.2648,1.2648);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQBCIgZgtIgJAAIAAAtIgkAAIAAiEIA1AAQAMAAAKACQAMAEAGAEQAGAFAFAJQADAHAAANQAAAQgHAIQgHAKgNADIAcAzgAgSgGIAQAAQAJAAAGgEQAEgDAAgIQAAgIgEgEQgHgEgIAAIgQAAg");
	this.shape_7.setTransform(444.5968,-93.6751,1.2648,1.2648);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag1BCIAAiEIBAABIANADQAFABAHADQAFAEAFAEQADAGACAHQADAHAAAKQAAAIgDAJQgCAGgEAFQgDADgHAFIgNAFIgMACIgbABIAAAqgAgRgCIAPAAQAFAAAEgCQAEAAADgDIAEgGIABgGIgBgHIgEgGIgHgDQgEgCgFAAIgPAAg");
	this.shape_8.setTransform(429.04,-93.6751,1.2648,1.2648);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQBCIgYgtIgKAAIAAAtIgkAAIAAiEIA1AAQAMAAAKACQALAEAGAEQAHAFAEAJQAEAIAAAMQAAAPgHAJQgHAKgNADIAdAzgAgSgGIAPAAQALAAAEgEQAGgDAAgIQAAgIgGgEQgFgEgKAAIgPAAg");
	this.shape_9.setTransform(406.6849,-93.6751,1.2648,1.2648);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPBDQgHgBgIgEIgOgJQgHgHgEgHQgEgHgDgKQgCgLgBgLQABgKACgLQADgKAEgIQAFgHAGgFQAGgGAIgEQAFgDAKgDIAPgBIAQABQAKADAFADQAIAEAFAGQAHAEAEAIQAGAJABAJQADAKABALQgBAMgDAKQgBAJgGAIQgDAIgIAGQgFAFgIAEQgHAEgIABIgQACIgPgCgAgLgjQgHADgDAEQgDAFgDAIQgCAGABAJQgBALACAGQADAJADAEQADAEAHAEQAFACAGAAQAHAAAGgCQAFgDAEgFQADgFACgIQACgKABgHQgBgGgCgJQgCgHgDgGQgEgEgFgDQgHgDgGAAQgGAAgFADg");
	this.shape_10.setTransform(389.389,-93.6751,1.2648,1.2648);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBCIAAhlIgmAAIAAgfIBvAAIAAAfIgmAAIAABlg");
	this.shape_11.setTransform(373.0416,-93.6751,1.2648,1.2648);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAcBDIgIgZIgqAAIgIAZIghAAIAviFIAhAAIAvCFgAgNARIAZAAIgMgkIAAAAg");
	this.shape_12.setTransform(357.4531,-93.7067,1.2648,1.2648);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQBCIgYgtIgKAAIAAAtIgkAAIAAiEIA1AAQAMAAAKACQALAEAGAEQAIAGADAIQAEAIAAAMQAAAPgHAJQgHAKgNADIAdAzgAgSgGIAPAAQAKAAAFgEQAFgDAAgIQAAgIgFgEQgGgEgJAAIgPAAg");
	this.shape_13.setTransform(341.4852,-93.6751,1.2648,1.2648);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgwBCIAAiEIBeAAIAAAfIg6AAIAAAVIApAAIAAAbIgpAAIAAAZIA9AAIAAAcg");
	this.shape_14.setTransform(326.2761,-93.6751,1.2648,1.2648);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtBCIAAiEIAkAAIAABoIA3AAIAAAcg");
	this.shape_15.setTransform(312.6165,-93.6751,1.2648,1.2648);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgwBCIAAiEIBeAAIAAAfIg6AAIAAAVIApAAIAAAbIgpAAIAAAZIA9AAIAAAcg");
	this.shape_16.setTransform(298.5141,-93.6751,1.2648,1.2648);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVBCQgMgFgIgIQgIgIgGgOQgEgOAAgRQAAgKACgLQADgLAEgHQADgGAGgGQAFgFAIgFQAFgDAKgDQAHgBAIAAQAPAAAIADQAKAEAHAFQAHAGADAIQAFAIACAJIgjAKIgCgJIgFgIIgGgFQgDgBgGAAQgFAAgGADQgEACgEAFQgDAFgBAIQgCAGAAAJQAAALACAGQABAIADAFQADAEAFAEQAGACAGAAQAFABAEgCIAGgFIAFgIIADgLIAiAHIgHATQgDAJgIAGQgHAHgKADQgIADgPAAQgNAAgKgDg");
	this.shape_17.setTransform(282.5146,-93.6751,1.2648,1.2648);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAWBCIgXgoIgWAoIgmAAIAqhFIgng/IApAAIATAjIASgjIAmAAIgmBAIAqBEg");
	this.shape_18.setTransform(265.7561,-93.6751,1.2648,1.2648);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYBBQgLgGgHgJQgIgKgDgLQgEgOAAgPQAAgNAEgOQADgNAIgJQAHgJALgFQALgFANAAQAOAAAKAFQALAFAIAJQAGAIAFAOQAEAOAAANQAAAPgEAOQgEANgHAIQgIAJgLAGQgKAEgOAAQgMAAgMgEgAgQgeQgGAMAAASQAAAVAGAKQAGAKAKAAQALAAAGgKQAFgKAAgVQAAgUgGgKQgFgJgLAAQgKAAgGAJg");
	this.shape_19.setTransform(249.3455,-93.6751,1.2648,1.2648);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgmBCIAAgbIAXAAIAAhIIgFACIgMADIgGAAIAAgdQAJAAAEgCQAHgCAEgFIAiAAIAABpIATAAIAAAbg");
	this.shape_20.setTransform(236.4447,-93.6751,1.2648,1.2648);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASA1IAAgrIgjAAIAAArIgdAAIAAhpIAdAAIAAAoIAjAAIAAgoIAdAAIAABpg");
	this.shape_21.setTransform(569.2099,-114.7654,1.2648,1.2648);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOA1IAAhRIgeAAIAAgYIBZAAIAAAYIgfAAIAABRg");
	this.shape_22.setTransform(556.2142,-114.7654,1.2648,1.2648);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOA1IAAhpIAdAAIAABpg");
	this.shape_23.setTransform(547.2342,-114.7654,1.2648,1.2648);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAQA1IgOhBIgBAAIgPBBIgYAAIgdhpIAdAAIAOA/IAAAAIANg/IAZAAIAPA/IAMg/IAbAAIgcBpg");
	this.shape_24.setTransform(535.3768,-114.7654,1.2648,1.2648);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(231.5,-121.5,344.20000000000005,36.599999999999994), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgcBAQgKgFgIgJQgHgKgEgNQgDgNAAgOQAAgQAEgMQAFgNAIgIQAHgJAMgGQAMgEAOAAIASACQAKACAGAEQAGAFAHAJQAFAJAEAMIghAJQgBgFgDgGIgGgHIgGgDQgDgCgFABIgIABQgEACgFAFQgDAEgDAHQgCAHAAAMQAAAIACAHQAAAFADAGQACAEAEAEIAGAEIAGACIAEABQAJAAAGgFQAGgFADgGIgUAAIAAgaIA2AAIAABEIgcAAIAAgSIgBAAIgDAGQgDAEgEACIgKAGQgFACgHAAQgRAAgLgFg");
	this.shape.setTransform(310.2789,-16.3637,1.2685,1.2685);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZBDIgyhKIAABKIgjAAIAAiEIAmAAIAvBJIABAAIAAhJIAjAAIAACEg");
	this.shape_1.setTransform(293.5343,-16.3637,1.2685,1.2685);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBDIAAiEIAjAAIAACEg");
	this.shape_2.setTransform(280.6271,-16.3637,1.2685,1.2685);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZBDIgxhKIgBAAIAABKIgjAAIAAiEIAmAAIAvBJIABAAIAAhJIAjAAIAACEg");
	this.shape_3.setTransform(268.3859,-16.3637,1.2685,1.2685);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARBDIgZgvIgKAAIAAAvIgkAAIAAiEIA1AAQANAAAJABQALADAGAFQAHAFAEAIQAEAIAAANQAAAPgGAJQgHAJgNAFIAcAzgAgSgGIAQAAQAKAAAFgDQAFgEAAgIQAAgJgFgDQgFgDgKgBIgQAAg");
	this.shape_4.setTransform(251.5462,-16.3637,1.2685,1.2685);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcBDIgJgZIgoAAIgJAZIghAAIAviFIAhAAIAvCFgAgNAQIAYAAIgLgjIAAAAg");
	this.shape_5.setTransform(235.1822,-16.3955,1.2685,1.2685);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_6.setTransform(220.3722,-16.3637,1.2685,1.2685);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSBDQgKgDgHgEQgHgEgGgGIgJgNIAagQIAHAIQAEAEAFACQADADAGACQAFABAEAAIAIAAIAGgDIAEgDQACgCAAgEQAAgCgCgDIgGgEIgHgDIgggJIgKgFQgFgCgEgEQgEgFgCgFQgCgFAAgIQAAgLADgHQADgHAIgGQAGgFAKgDQALgDAKAAQAKAAAIACQAJACAHAEIAMAIIAJAKIgYAUIgHgGIgIgGIgJgDIgHgCQgQAAAAAKQAAAEACABIAFAFIAHADIAIACIAXAHIALAFQAFACAEAEQAFAEACAGQACAGAAAHQAAAIgDAIQgDAGgHAHQgGAGgLADQgKAEgQAAQgMAAgIgCg");
	this.shape_7.setTransform(198.839,-16.3637,1.2685,1.2685);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgmAAIAAgdIBvAAIAAAdIgmAAIAABng");
	this.shape_8.setTransform(183.6802,-16.3637,1.2685,1.2685);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAZBDIgxhKIgBAAIAABKIgjAAIAAiEIAmAAIAvBJIAAhJIAkAAIAACEg");
	this.shape_9.setTransform(167.9187,-16.3637,1.2685,1.2685);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBDIAAiEIAjAAIAACEg");
	this.shape_10.setTransform(155.0115,-16.3637,1.2685,1.2685);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPBEQgKgDgFgDQgIgEgGgFIgLgNQgFgIgCgKQgCgIAAgOQAAgNACgIQACgJAFgIQAFgIAGgGQAGgFAIgEQAIgEAHgBQAIgCAHAAIAQACQAHABAIAEQAIAEAGAFQAIAIADAGQAFAIACAJQACAIAAANQAAAOgCAIQgCAKgFAIQgEAGgHAHQgGAFgIAEIgPAGIgQABQgHAAgIgBgAgLgkQgGAEgEAEQgEAFgBAHQgCAHAAAJQAAAKACAGQABAIAEAFQAEAGAGACQAFAEAGAAQAHAAAGgEQAFgCAEgGQADgEADgJQABgHAAgJQAAgIgBgIQgDgHgDgFQgEgEgFgEQgGgCgHAAQgGAAgFACg");
	this.shape_11.setTransform(142.3897,-16.3637,1.2685,1.2685);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag1BDIAAiEIA/AAIAOACIAMAFIAJAJQAFAFACAHQACAGAAALQAAAIgCAJQgDAFgEAGQgEAEgGAEQgGAEgGABIgOADIgbAAIAAArgAgSgCIAQAAIAJgBQAFgCACgCQADgDAAgCIABgHIgBgIIgDgEQgDgEgEAAQgEgBgFgBIgQAAg");
	this.shape_12.setTransform(126.438,-16.3637,1.2685,1.2685);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_13.setTransform(390.735,-39.1972,1.2685,1.2685);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgmAAIAAgdIBvAAIAAAdIgmAAIAABng");
	this.shape_14.setTransform(375.8616,-39.1972,1.2685,1.2685);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAcBDIgIgZIgqAAIgIAZIghAAIAwiFIAgAAIAvCFgAgNAQIAYAAIgLgjg");
	this.shape_15.setTransform(360.4173,-39.2289,1.2685,1.2685);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAQBDIgYgvIgKAAIAAAvIgkAAIAAiEIA1AAQAMAAAKABQAKADAHAFQAIAGADAHQAEAKAAALQAAAPgHAJQgHAJgNAFIAdAzgAgSgGIAPAAQAKAAAFgEQAFgDAAgIQAAgJgFgDQgFgDgKgBIgPAAg");
	this.shape_16.setTransform(344.6559,-39.1972,1.2685,1.2685);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_17.setTransform(329.6556,-39.1972,1.2685,1.2685);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgtBDIAAiEIAkAAIAABmIA3AAIAAAeg");
	this.shape_18.setTransform(316.1458,-39.1972,1.2685,1.2685);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_19.setTransform(302.2555,-39.1972,1.2685,1.2685);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVBBQgMgEgIgIQgJgJgFgMQgEgOAAgSQAAgMACgJQACgJAEgIQAEgIAGgGQAFgFAIgEQAIgFAHAAIAPgCQAOAAAJADQAKAEAHAFQAHAGADAIQAFAIABAIIgiAKQAAgEgDgFIgEgGIgGgGQgFgBgEAAQgFAAgGACQgEACgEAGQgDAFgCAHQgBAIAAAIQAAAJABAIQACAGADAGQAEAGAFACQAEAEAGAAQAEAAAFgDQAEgBADgDIAFgIIADgLIAiAIQgCAIgEAKQgFAIgHAHQgHAHgJACQgJAEgPAAQgNAAgKgEg");
	this.shape_20.setTransform(286.4306,-39.1972,1.2685,1.2685);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVBBQgLgEgJgIQgJgJgEgMQgFgNAAgTQAAgKACgLQADgKADgHQAEgIAGgGQAHgGAGgDQAIgEAHgBIAPgCQAOAAAKADQAKAEAGAFQAHAGAEAIQAEAIACAIIgiAKIgDgJIgFgGQgCgEgEgCQgEgBgFAAQgFAAgGACQgEADgEAFQgEAHgBAFQgBAIAAAIQAAAKACAHQABAIAEAEQACAFAGADQAFAEAFAAQAFAAAFgDQADgBADgDIAFgIIADgLIAiAIQgCALgEAHQgFAJgGAGQgJAHgIACQgJAEgPAAQgNAAgKgEg");
	this.shape_21.setTransform(269.9398,-39.1972,1.2685,1.2685);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAcBDIgIgZIgpAAIgJAZIghAAIAviFIAhAAIAvCFgAgNAQIAYAAIgLgjIAAAAg");
	this.shape_22.setTransform(253.6393,-39.2289,1.2685,1.2685);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag5hBIAsAAIASABQAJABAIADQAGACAJAGQAHAGAFAHQAEAHADAKQACAHABAPQgBAOgCAIQgDALgEAHQgGAHgHAFQgGAFgIAEQgIADgJABIg+ACgAgVAlIAJAAQAKAAAHgCQAGgCAEgFQAEgEACgHQABgHABgKQgBgJgBgHQgCgGgEgFQgEgEgHgDQgGgCgKAAIgJAAg");
	this.shape_23.setTransform(232.1695,-39.1972,1.2685,1.2685);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAZBDIgyhKIAABKIgkAAIAAiEIAnAAIAvBJIABAAIAAhJIAjAAIAACEg");
	this.shape_24.setTransform(214.9176,-39.1972,1.2685,1.2685);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAcBDIgJgZIgoAAIgJAZIghAAIAviFIAhAAIAvCFgAgNAQIAYAAIgLgjIAAAAg");
	this.shape_25.setTransform(197.6973,-39.2289,1.2685,1.2685);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag1BDIAAiEIA/AAIAOACIAMAFIAKAJIAGAMQACAGAAALQAAAIgCAJQgDAFgEAGQgEAEgGAEQgGAEgGABIgNADIgbAAIAAArgAgRgCIAPAAQAHAAADgBQAEgCACgCQADgDABgCIABgHIgBgIIgEgEQgDgEgDAAQgEgBgGgBIgPAAg");
	this.shape_26.setTransform(177.3058,-39.1972,1.2685,1.2685);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPBEQgKgDgFgDQgIgEgGgFQgHgHgEgGQgFgIgCgKQgCgIAAgOQAAgNACgIQACgJAFgIQADgGAIgIQAGgFAIgEQAIgEAHgBQAIgCAHAAIAQACQAHABAIAEQAIAEAGAFQAIAIADAGQAFAIACAJQACAIAAANQAAAOgCAIQgCAKgFAIQgEAGgHAHQgGAFgIAEIgPAGIgQABQgHAAgIgBgAgLgkQgGAEgEAEQgEAFgBAHQgCAHAAAJQAAAKACAHQABAHAEAFQAEAGAGACQAFAEAGAAQAHAAAGgEQAFgCAEgGQAEgFABgHQACgHAAgKQAAgJgCgHQgBgHgEgFQgEgEgFgEQgGgCgHAAQgGAAgFACg");
	this.shape_27.setTransform(160.2759,-39.1972,1.2685,1.2685);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAWBDIAAg2IgrAAIAAA2IgkAAIAAiEIAkAAIAAAxIArAAIAAgxIAkAAIAACEg");
	this.shape_28.setTransform(142.7068,-39.1972,1.2685,1.2685);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgSBDQgKgDgHgEQgHgEgGgGIgJgNIAagQIAHAIIAIAGQAEADAGACQAFABAEAAIAIAAIAGgDIAEgEQACgBAAgEQAAgCgCgDIgGgEIgHgDIgggJIgKgFQgFgCgEgEQgEgFgCgFQgCgFAAgIQAAgLADgHQADgHAIgGQAGgFAKgDQALgDAKAAQAKAAAIACQAJACAHAEIAMAIIAJAKIgYAUIgHgGIgIgGIgJgDIgHgCQgQAAAAAKQAAAEACABIAFAFIAHADIAUAFIAWAJQAFACAEAEQAFAEACAGQACAGAAAHQAAAIgDAIQgDAGgHAHQgGAGgLADQgKAEgQAAQgMAAgIgCg");
	this.shape_29.setTransform(126.0892,-39.1972,1.2685,1.2685);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(118.7,-47.9,278.3,40.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAmBCIAAhQIgBAAIgVBQIgfAAIgRhAIgEgSIgBAAIAABSIgjAAIAAiEIAzAAIAXBaIAAAAIAVhaIAyAAIAACEg");
	this.shape.setTransform(595.4806,-111.6764,1.2657,1.2657);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYBAQgLgEgHgHQgGgGgEgLQgDgLAAgNIAAhPIAkAAIAABPQAAAOAFAGQAEAGAKAAQALAAAFgGQAFgGgBgOIAAhPIAkAAIAABPQAAANgDALQgEALgGAGQgHAIgKADQgLAEgPgBQgOABgKgEg");
	this.shape_1.setTransform(576.6219,-111.5498,1.2657,1.2657);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBCIgyhJIgBAAIAABJIgjAAIAAiEIAlAAIAxBKIAAhKIAkAAIAACEg");
	this.shape_2.setTransform(559.8515,-111.6764,1.2657,1.2657);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBCIAAiEIAjAAIAACEg");
	this.shape_3.setTransform(546.7517,-111.6764,1.2657,1.2657);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBCIAAhlIgmAAIAAgfIBvAAIAAAfIgmAAIAABlg");
	this.shape_4.setTransform(535.4554,-111.6764,1.2657,1.2657);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcBDIgJgZIgpAAIgJAZIggAAIAviFIAhAAIAvCFgAgNARIAYAAIgLgkIAAAAg");
	this.shape_5.setTransform(522.3872,-111.708,1.2657,1.2657);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtBCIAAiEIAkAAIAABoIA3AAIAAAcg");
	this.shape_6.setTransform(507.642,-111.6764,1.2657,1.2657);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1BCIAAiEIA/ABIAOADQAGABAGADQAGAEADAEQAGAHABAGQACAGAAALQAAALgCAGQgDAHgEAEQgEAFgGADIgMAFIgOACIgaABIAAAqgAgRgCIAQAAQAFAAAEgCQADAAADgDQADgCAAgEIABgGIgBgHQAAgDgDgDQgCgCgEgBQgEgCgFAAIgQAAg");
	this.shape_7.setTransform(493.1499,-111.6764,1.2657,1.2657);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBCIAAg3IguhNIAkAAIAbAvIAcgvIAkAAIguBNIAAA3g");
	this.shape_8.setTransform(471.3801,-111.6764,1.2657,1.2657);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1hCIA4AAIAWACIALAEIAIAFIAGAJQACAFAAAIQAAAIgCAEQgCAGgEADQgEAFgFACIgKACIAAABQAGABAGABQAFADAEADQAEAEACAFQACAHAAAIQAAAFgCAHQgCAHgEADQgDAEgFADIgLAFIgLACIhFAAgAgSAnIASAAQAJAAAFgDQAFgEAAgHQAAgHgFgDQgEgDgKAAIgSAAgAgSgNIARAAIAIgBIAFgCIADgEIABgFIgBgGIgDgDQgBgCgEgBIgHgBIgSAAg");
	this.shape_9.setTransform(455.3375,-111.6764,1.2657,1.2657);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcBAQgKgFgIgKQgGgJgEgMQgEgPAAgNQAAgQAFgMQAEgNAHgJQAJgJALgEQALgFAPAAQAKAAAIACQAHACAJAFQAHAFAGAIQAFAJAEANIghAJIgFgLIgEgHIgHgEIgIgBQgEAAgEABQgFADgEAEQgDAFgCAGQgCAHgBAMIACAPIADAMQADAEADACIAFAFIAHACIAFAAQAIAAAGgEQAGgEACgIIgTAAIAAgZIA2AAIAABDIgcAAIAAgRIgBAAIgDAGIgGAGIgLAGQgFACgHAAQgRAAgLgFg");
	this.shape_10.setTransform(431.6375,-111.6764,1.2657,1.2657);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZBCIgxhJIgBAAIAABJIgjAAIAAiEIAmAAIAvBKIABAAIAAhKIAjAAIAACEg");
	this.shape_11.setTransform(414.709,-111.6764,1.2657,1.2657);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRBCIAAiEIAjAAIAACEg");
	this.shape_12.setTransform(401.6408,-111.6764,1.2657,1.2657);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAZBCIgxhJIgBAAIAABJIgjAAIAAiEIAmAAIAvBKIABAAIAAhKIAjAAIAACEg");
	this.shape_13.setTransform(389.1738,-111.6764,1.2657,1.2657);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRBCIAAiEIAjAAIAACEg");
	this.shape_14.setTransform(376.0739,-111.6764,1.2657,1.2657);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag6BCIAAiEIA+ACQAJABAJAEQAJACAGAGQAGAEAFAHQAGAIACAJQADALAAAMQAAAMgDAKQgCAJgGAJQgFAIgGAEQgJAHgGACQgIADgKACIgSAAgAgWAmIAKAAQALAAAFgCQAGgDAFgEQAEgGACgGQACgKAAgHQAAgHgCgIQgCgIgEgEQgEgEgHgCQgFgCgLAAIgKAAg");
	this.shape_15.setTransform(364.1448,-111.6764,1.2657,1.2657);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgwBCIAAiEIBeAAIAAAfIg6AAIAAAVIAqAAIAAAbIgqAAIAAAZIA9AAIAAAcg");
	this.shape_16.setTransform(342.1535,-111.6764,1.2657,1.2657);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRBDIgtiFIAkAAIAaBWIAAAAIAchWIAjAAIgtCFg");
	this.shape_17.setTransform(326.6172,-111.6447,1.2657,1.2657);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPBDQgHgBgIgEIgOgJQgHgHgEgHQgEgHgDgKQgCgLAAgLQAAgKACgLQADgKAEgIQAFgHAGgFQAGgGAIgEQAFgDAKgDIAPgBIAQABQAKADAFADQAHAEAHAGQAFAFAFAHQAFAIADAKQADALAAAKQAAALgDALQgDAKgFAHQgDAHgHAHQgHAFgHAEQgHAEgIABIgQACIgPgCgAgLgjQgHAEgCADQgEAGgDAHQgCAGAAAJQAAALACAGQADAIAEAFQACAEAHAEQAFACAGAAQAHAAAGgCQAFgDAEgFQACgEADgJQACgKABgHQgBgGgCgJQgCgIgDgFQgEgEgFgDQgHgDgGAAQgGAAgFADg");
	this.shape_18.setTransform(310.4481,-111.6764,1.2657,1.2657);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgtBCIAAiEIAkAAIAABoIA3AAIAAAcg");
	this.shape_19.setTransform(295.4497,-111.6764,1.2657,1.2657);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AASA1IAAgrIgjAAIAAArIgcAAIAAhpIAcAAIAAAoIAjAAIAAgoIAdAAIAABpg");
	this.shape_20.setTransform(598.5815,-132.7817,1.2657,1.2657);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNA1IAAhRIgfAAIAAgYIBZAAIAAAYIgfAAIAABRg");
	this.shape_21.setTransform(585.5766,-132.7817,1.2657,1.2657);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNA1IAAhpIAbAAIAABpg");
	this.shape_22.setTransform(576.5586,-132.7817,1.2657,1.2657);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAQA1IgOhBIgBAAIgPBBIgYAAIgdhpIAdAAIAOA/IAAAAIANg/IAZAAIAOA4IABAHIAMg/IAbAAIgcBpg");
	this.shape_23.setTransform(564.6928,-132.7817,1.2657,1.2657);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(289.7,-139.5,315.00000000000006,36.599999999999994);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,632,100);


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
	this.shape.setTransform(131.3528,100.6013,1.8642,1.8665);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKARIAAggIAKAAIAAAFIABgCIACgCIAHgCIABAAIAAAJIgBAAIgBgBIgBAAIgDABIgCABIgCABIgBACIAAAUg");
	this.shape_1.setTransform(125.3873,101.6745,1.8642,1.8665);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJARIgDgCQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgBgEIABgFIAEgDIAHgCQADgCAFAAIAAgBIgBgDIgDgBIgFACIgFADIgEgGIACgCIAEgCIAFgCIAEAAIAGABIAEACIACAEIABAGIAAAMIABAIIgKAAIgBgDIAAgCIgFAEQgCABgDAAgAgCADQgBAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAIABADIADABIADgBIADgCIAAgGIgHACg");
	this.shape_2.setTransform(119.4218,101.7212,1.8642,1.8665);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAXQgFgCgCgDQgDgDgCgEQgBgFAAgGQAAgFABgEQACgFADgDQADgDAEgBIAGgCQAFAAADACQADAAADADIADAEQACADAAADIgKADIgBgEIgCgDIgCgBIgEgBIgDABIgDADIgDAFIAAAFIAAAHIADAFQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAIAEABIAEgBIACgCIACgDIACgEIAJACIgDAHIgDAFIgGADIgIABIgGgBg");
	this.shape_3.setTransform(111.7319,100.5079,1.8642,1.8665);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAFAXIgFgBIgEgCIgBgEIgBgDIAAgQIgFAAIAAgHIAFAAIAAgLIAJAAIAAALIAJAAIAAAHIgJAAIAAAOIABADIACABIAFAAIAAgBIAAAIIgCAAIgCABg");
	this.shape_4.setTransform(102.0845,100.7413,1.8642,1.8665);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAXIAAggIAJAAIAAAggAgEgOIAAgIIAJAAIAAAIg");
	this.shape_5.setTransform(97.7501,100.6013,1.8642,1.8665);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAWIgFgDIgCgFIgBgIIABgGIACgGIAFgDQACgBADAAQADAAACABIAEAEIAAgRIAKAAIAAApIABAEIgLAAIAAgBIAAgCIAAgCIgCACIgCABIgCACIgEAAgAgFAAQgBACAAAEIAAAEIABADIACACIADABIADgBIABgBIACgCIAAgMIgEgBIgCgBQgDAAgCACg");
	this.shape_6.setTransform(92.1575,100.6013,1.8642,1.8665);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEAQIgGgCIgDgGQgCgDAAgFIABgFIACgEIADgDIADgCIAEgCIADAAIADAAIAEABIAGAGIABAFIABAFIAAACIgVAAIABADIACADIACABIACAAIAFgBIAFgDIADAGIgGAEIgIABIgFgBgAgCgHIgCACIgBADIAMAAIgCgFQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgBAAg");
	this.shape_7.setTransform(84.9336,101.7212,1.8642,1.8665);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKARIAAggIAKAAIAAAFIAAAAIABgCIACgCIAIgCIAAAJIgBAAIAAgBIgCAAIgDABIgCABIgDADIAAAUg");
	this.shape_8.setTransform(79.1545,101.6745,1.8642,1.8665);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAXQgEgCgCgDQgDgDgCgEQgBgFAAgGQAAgFABgEQACgFADgDQADgDADgBIAHgCQAFAAADACQADAAADADIADAEIACAGIgKADIgBgEIgCgDIgCgBIgEgBIgDABIgEADIgCAFIAAAFIAAAHIACAFIAEADIADABIAFgBIACgCIACgDIABgEIAKACIgDAHIgDAFQgDACgDABIgIABIgHgBg");
	this.shape_9.setTransform(72.117,100.5079,1.8642,1.8665);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPARIAAgWIgBgCIgBgBIgBAAIgEABIgDACIAAAWIgJAAIAAgUIgBgEIgBgBIgCAAIgDABIgDACIAAAWIgKAAIAAggIAKAAIAAAFIAEgEIADgCIAEAAIADAAIAEADIABADIABgCIADgCIAGgCIAFABIADACIACADIAAAEIAAAXg");
	this.shape_10.setTransform(59.3937,101.6745,1.8642,1.8665);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAQIgDgBIgCgDIgBgFIAAgXIALAAIAAAUIABAEIACABIADgBIAEgCIAAgWIAKAAIAAAgIgKAAIAAgFIgFAEIgCABIgEABg");
	this.shape_11.setTransform(50.1191,101.8145,1.8642,1.8665);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAGARIAAgUIgBgEQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBgBgBAAIgCABIgDACIAAAWIgKAAIAAggIAKAAIAAAFIABgCIACgCIADgCIAEAAIADAAIAEACIACAEIAAAEIAAAXg");
	this.shape_12.setTransform(42.7554,101.6745,1.8642,1.8665);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEAXIAAggIAJAAIAAAggAgEgOIAAgIIAJAAIAAAIg");
	this.shape_13.setTransform(37.2094,100.6013,1.8642,1.8665);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAFAXIgFgBIgEgCIgBgEIgBgDIAAgQIgFAAIAAgHIAFAAIAAgLIAJAAIAAALIAJAAIAAAHIgJAAIAAAOIABADIACABIAFAAIAAgBIAAAIIgCAAIgCABg");
	this.shape_14.setTransform(32.7352,100.7413,1.8642,1.8665);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJARIgDgCQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgBgEIABgFIAEgDIAHgCQADgCAFAAIAAgBIgBgDIgDgBIgFACIgFADIgEgGIACgCIAEgCIAFgCIAEAAIAGABIAEACIACAEIABAGIAAAMIABAIIgKAAIgBgDIAAgCIgFAEQgCABgDAAgAgCADQgBAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAIABADIADABIADgBIADgCIAAgGIgHACg");
	this.shape_15.setTransform(26.6765,101.7212,1.8642,1.8665);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEAXIAAgtIAJAAIAAAtg");
	this.shape_16.setTransform(21.5033,100.5546,1.8642,1.8665);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAXIAAgtIARAAIAIABIAEACQAAAAABAAQAAABAAAAQABAAAAABQAAAAABAAIACAFIABAEIgBAGIgCADIgDADIgEACIgIABIgHAAIAAAQgAgHAAIAHAAIADgBIADgBQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIABgDIgBgDIgBgCIgDgBIgDgBIgHAAg");
	this.shape_17.setTransform(15.9572,100.5546,1.8642,1.8665);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEANIgFgDIgDgEIgBgGQAAgCABgDQABgDACgBQABgCAEgBIAEgBIAGABQADABABACQACABABADQABADABACQgBADgBACQgBADgCACIgEADIgGABgAgDgKIgFACIgCAEIgBAEIABAFIACADIAFADIADABQABAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIADgDIADgDIABgFIgBgEIgDgEIgDgCIgFgBgAADAHIgDgGIgBAAIAAAGIgDAAIAAgOIAEAAIAFABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABIAAACQgBAAAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAIAEAGgAgBAAIABAAIACgBIABgBIgBgCIgCgBIgBAAg");
	this.shape_18.setTransform(136.5261,85.203,1.8642,1.8665);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHAQIgEgCIgCgCIAEgFIAEADIADABIACABIAFgBQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAgBIgBgBIgBgBIgDgBIgCgBIgCAAIgGgDIgCgBIgBgCIgBgDIABgEIADgDIADgCIAFgBIAEABIADABIAGACIgEAGIgEgDIgFgBIgCAAIgBABIgBABIgBACIABABIACACIAEABIAIACIACACIACAFQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBABAAAAIgEABIgJABg");
	this.shape_19.setTransform(130.4207,88.1427,1.8642,1.8665);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAQIgGgEIAEgFIACACIAFACIACABIAFgBQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAgBIgBgBIgBgBIgDgBIgCgBIgCAAIgGgDIgCgBIgBgCIgBgDIABgEIADgDIADgCIAFgBIAEABIADABIAGACIgEAGIgEgDIgFgBIgCAAIgBABIgBABIgBACIABABIACACIAEABIAIACIACACIACACIAAADIgBAFIgDADIgEABIgJABg");
	this.shape_20.setTransform(124.362,88.1427,1.8642,1.8665);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEAQIgFgDIgDgFQgCgDAAgFIABgEIACgFIAFgFIAHgCIAEABIADABIADACIACADQAAABABAAQAAABAAAAQAAABAAABQABAAAAABIAAAFIAAACIgVAAIAAADIADADQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIACAAIAEAAIAEgCIACgCIAEAFIgGADQgEACgEAAgAgBgJIgCABIgCADIgBADIAOAAQAAgEgCgCQgBgCgFAAg");
	this.shape_21.setTransform(118.0702,88.1427,1.8642,1.8665);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJARIAAggIAIAAIAAAFIABgCIAFgDIAEgBIABAAIgBAHIgBAAIgDABIgEABIgCAEIAAAUg");
	this.shape_22.setTransform(112.8504,88.096,1.8642,1.8665);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPAXIAAgsIAIAAIAAAEIACgCIACgBIADgBIACgBIAGABIAEADIADAGIABAHIgBAGQgCAEgCACIgEADIgGABIgDgBQgEAAgBgDIAAAQgAgBgPIgFACIgBACIAAAMIADADIAEABQADAAADgDQACgDAAgEQAAgEgCgEQgCgCgEgBg");
	this.shape_23.setTransform(106.7917,89.2626,1.8642,1.8665);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAHAQIgHgLIgHALIgIAAIAMgQIgLgPIAIAAIAGAKIAHgKIAIAAIgLAPIAMAQg");
	this.shape_24.setTransform(100.0804,88.1427,1.8642,1.8665);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOAXIAAgtIAcAAIAAAHIgUAAIAAAMIAOAAIAAAFIgOAAIAAAOIAVAAIAAAHg");
	this.shape_25.setTransform(93.4624,86.9295,1.8642,1.8665);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAHARIAAgVQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAAAIgEgBIgEABIgEADIAAAWIgIAAIAAggIAIAAIAAAFIACgCIADgCIACgBIAEgBIAEABIADACIACADIABAEIAAAXg");
	this.shape_26.setTransform(83.6286,88.096,1.8642,1.8665);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAQIgDgBIgCgDIgBgEIACgEQAAgDADgBQADgCAEAAIAJgCIAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAIgCAAIgDABIgFAEIgDgFIADgCIAIgDIADgBIAGABIADACIADADIAAAGIAAASIABACIgHAAIgBgBIAAgCIgGADIgGABgAgDADQgDABgBADQAAABABAAQAAABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIAEgBIAFgDIAAgHIgKADg");
	this.shape_27.setTransform(76.7776,88.1427,1.8642,1.8665);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEAQIgFgDIgDgFQgCgDAAgFIABgEIACgFIAGgFIADgBIADgBIAFABIAEACIADADIACAEIgHACQAAgDgCgCIgFgBIgCABIgDACIgBADIgBAEQAAAGACACQACADADAAIAEgBIACgCIACgDIAGACIgCAFIgDADIgEABIgFABg");
	this.shape_28.setTransform(70.3926,88.1427,1.8642,1.8665);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDAWIAAgfIAHAAIAAAfgAgDgPIAAgHIAHAAIAAAHg");
	this.shape_29.setTransform(65.6854,87.0228,1.8642,1.8665);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJARIAAggIAIAAIAAAFIABgCIAFgDIAFgBIAAAAIAAAHIgCAAIgEABIgCABIgCACIgBACIAAAUg");
	this.shape_30.setTransform(62.0968,88.096,1.8642,1.8665);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEAQIgFgDIgEgFIgBgIIABgEIACgFIACgDIAEgCIADgBIACgBIAEABIADABIADACIADADIACAFIAAAFIAAACIgWAAIACADIABADIADACIACAAIADAAIAEgCIACgCIAFAFIgHADQgDACgEAAgAgBgJIgCABIgCADIgCADIAPAAQAAgDgCgDQgCgCgEAAg");
	this.shape_31.setTransform(56.1779,88.1427,1.8642,1.8665);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AARARIAAgVIgBgCIAAgCIgBgBIgDAAIgEABIgEADIAAAWIgHAAIAAgXIgBgCIgBgBIgDAAIgEABIgCABIgCACIAAAWIgIAAIAAggIAIAAIAAAEIACgCIADgBIADgBIAEgBIADABIABABIACABIACADIAEgEIADgBIAEgBIAEABIADACIACADIABAEIAAAXg");
	this.shape_32.setTransform(47.6024,88.096,1.8642,1.8665);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAMAXIgEgLIgQAAIgEALIgHAAIAQgtIAGAAIARAtgAgGAGIAMAAIgGgSg");
	this.shape_33.setTransform(38.2813,86.9295,1.8642,1.8665);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAQIgFgDQgDgCgBgDQgBgDAAgFIAAgEIACgFIAHgFIADgBIADgBIADABIAEABIADACIACADIABAFIABAFIAAACIgVAAIABADIABADQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIADAAIACAAIAFgCIACgCIADAFIgFADQgEACgEAAgAgBgJIgDABIgBADIgBADIAOAAQAAgDgCgDQgCgCgDAAg");
	this.shape_34.setTransform(28.4009,88.1427,1.8642,1.8665);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAHAXIAAgWQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgEABIgEACIAAAXIgIAAIAAgtIAIAAIAAASIAEgEIADgBIAEAAIAEAAIADACIACADIAAAEIAAAXg");
	this.shape_35.setTransform(21.6897,86.9295,1.8642,1.8665);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgOAAIAAgIIAjAAIAAAIIgOAAIAAAlg");
	this.shape_36.setTransform(14.559,87.0362,1.8642,1.8665);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(11.3,82.6,128,22.400000000000006), null);


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
	this.shape.setTransform(470.3469,-127.9636,0.9422,0.9418);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAeIAAg7IAGAAIAAA7g");
	this.shape_1.setTransform(467.2375,-129.5176,0.9422,0.9418);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAeIAAg6IAHAAIAAAGIAFgFQAEgCAEABIAHAAQADACACADIAEAGIABAKQAAAGgBADQgBADgDAEIgFAEIgIABQgDAAgDgBIgGgFIAAAWgAgGgVIgFAFIAAASQAFAGAGAAQAHAAACgDQADgEAAgIQAAgIgDgEQgEgDgEAAQgEAAgDABg");
	this.shape_2.setTransform(463.8925,-128.0107,0.9422,0.9418);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAeIAAg6IAHAAIAAAGIAGgFQACgCAFABIAHAAIAFAFIAEAGIABAKIgBAJIgEAHIgGAEIgHABIgGgBIgGgFIAAAWgAgFgVIgGAFIAAASQAGAGAFAAQAGAAADgDQADgEAAgIQAAgHgDgFQgEgDgFAAQgCAAgDABg");
	this.shape_3.setTransform(459.1577,-128.0107,0.9422,0.9418);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOATQgDgDAAgFIABgGQACgDADgCIAJgDQAFgCAHAAIAAgCQAAgIgIAAQgDAAgEACIgHAEIgEgEQAEgEAFgCQAEgCAGAAIAGABQADABACACIACAEIABAeIABAEIgHAAIgBgCIAAgEQgHAHgIAAQgFAAgEgDgAAAABIgGACIgDADIgBAEQAAABAAABQAAAAAAABQAAAAABABQAAAAABABQABABAEAAQADAAAEgBIAGgFIAAgLg");
	this.shape_4.setTransform(454.4465,-128.7406,0.9422,0.9418);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJATQgDgBgEgDIAEgFIAGAFQADABADAAQAGAAACgBQACgCAAgEQAAgCgCgCIgOgEIgEgCIgEgEIgBgEIABgFIADgDIAFgDIAGgBQAFAAAEACQADABADADIgDAFIgGgEQgDgBgDgBQgEABgCABIgCAEQAAADACABIAOAFIAFABIADAEQABADAAACQAAADgBADQgBACgDACIgFACIgHABQgEAAgFgDg");
	this.shape_5.setTransform(448.2277,-128.7171,0.9422,0.9418);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAdQgEgCgEgEQgEgGgBgEQgCgHAAgGIACgMIAFgJQAEgEAEgCQAFgDAEAAQAFAAADACIAHADQADADACADIACAIIgHABQgCgGgDgEQgEgDgGAAQgDAAgDACQgEABgCADQgCADgBAFIgCAJQAAAMAFAGQAFAGAHAAQANAAADgOIAHACQgBAEgCAEIgFAGIgHAEIgIABQgFAAgEgCg");
	this.shape_6.setTransform(443.5871,-129.5412,0.9422,0.9418);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATAdIgIgEIgIAEQgDACgGAAIgIgBIgHgEIgDgFQgCgCAAgEQAAgDACgDQAAgCADgDIAEgEIAFgCIgDgHIgBgGIABgGIADgEIAEgDQADgCAEAAIAEABIAEADIADAEIABAEQAAAEgCACIgDAEIgEAEIgFADIANARIAEgHIACgJIAHAAIgDALIgFAJIAGADIAGABIAAAHgAgQAHQgCADAAAEQAAAFADADQADADAHAAQAHAAAEgEIgFgFIgEgHIgDgEIgDgEIgHAGgAgHgWQgCADAAADIABAGIACAFIAFgCIACgDIACgDIABgEQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgCgCAAQgEAAgCACg");
	this.shape_7.setTransform(438.0043,-129.5412,0.9422,0.9418);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgSAAIAAgHIArAAIAAAHIgTAAIAAA0g");
	this.shape_8.setTransform(432.6806,-129.5176,0.9422,0.9418);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-2.7,-132.4,475,132.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AFfC+QgKgDgKgKQgIgIgGgNQgFgMAAgUQAAgMADgJQADgMADgFQAEgJAGgGQAGgEAHgEQAHgEAIgCQAIgCAIAAQAOAAAKAEQAJADAHAGQAHAGAEAHQAEAKACAHIgiAKIgEgJIgEgHQgCgDgEgCQgEgCgGABQgFgBgFADQgGADgDAFQgCADgCAJQgDAHAAAJQAAAKADAHQACAKACADQAFAGAEACQAEADAHAAQAHAAACgCIAHgEQADgEACgFIADgKIAjAIQgDAMgFAGQgFAKgFAEQgHAHgKADQgIAEgQAAQgMgBgMgDgATFC/IgaguIgKAAIAAAuIgkAAIAAiFIA1AAQAOAAAKACQAKACAHAGQAHAFAEAIQAEAIAAANQAAAPgHAJQgGAKgOAFIAcAygAShB2IAQAAQALAAAFgEQAFgDAAgJQAAgIgFgEQgGgDgKAAIgQAAgARNC/IgIgYIgrAAIgIAYIghAAIAviGIAiAAIAvCGgAQjCNIAZAAIgMglgAOJC/IAAiFIBgAAIAAAeIg8AAIAAAVIArAAIAAAdIgrAAIAAAYIA+AAIAAAdgAMsC/IAAg4IgvhNIAlAAIAcAvIAcgvIAkAAIguBNIAAA4gAKyC/IgHgYIgqAAIgJAYIghAAIAviGIAiAAIAvCGgAKJCNIAaAAIgNglIgBAAgAHDC/IAAiFIBeAAIAAAeIg6AAIAAAVIAqAAIAAAdIgqAAIAAAYIA+AAIAAAdgAEDC/IAAiFIAjAAIAACFgAC0C/IgThTIgVBTIgeAAIgjiFIAkAAIARBQIARhQIAgAAIAOA7IACAGIACAPIAAAAIAQhQIAiAAIgjCFgAgDC/IAAhnIgmAAIAAgeIBwAAIAAAeIgnAAIAABngAAvAMIAAgRIgUgFQgHgCgKgHQgHgFgFgFIgKgPIAdgSIAOAPIAIAHIAKADIAAgmIgWgHQgKgCgKgGQgHgGgFgIQgEgKgBgMQABgLAEgJQADgJAHgHQAIgGAKgFQAMgDAMgCIAAgOIAaAAIAAAQIASADIAOAIQAGADAFAGIAKAKIghAVIgJgLQgFgFgHgDIAAAkIAYAHQALAEAIAFQAIAHAEAIQAEAIAAAMQAAALgDAHQgDAJgHAGQgFAHgNAFQgLAEgQADIAAARgABIgkQAIgCAEgEQACgEAAgHQAAgFgCgFQgEgDgIgDgAAmiLQgEADAAAHIAAAFIADAFIAEADIAIADIAAghQgJACgCAFgAPfgKQgPgFgKgKQgKgLgHgQQgFgPgBgZQAAgQADgLQACgKAGgMQAHgLAFgFQAIgHAJgFQAFgEANgDIAVgCQASAAALAFQALADAJAIQAIAGAFAKQAGAKACALIgrANQgBgGgCgGIgGgIIgIgGQgEgCgHAAQgHAAgIADQgGAEgEAGQgDAFgCAKQgCAJgBALQABAMACAKQACAIADAHQAGAIAGACQAFAEAJAAQAHAAAEgCIAJgGQAEgGACgEQACgDACgLIAqAJQgBAKgHAPQgGALgIAHQgKAIgLADQgNAFgQABQgQgBgPgFgAG5gLQgNgHgKgLQgKgLgEgQQgFgRAAgTQAAgSAFgRQAEgPAKgMQAKgKANgIQAMgGATAAQASAAAMAGQAOAHAJALQAJAKAGARQAEAQAAATQAAAVgEAPQgGASgJAJQgJAMgOAGQgOAGgQABQgRgBgOgGgAHDiBQgIANABAYQAAAaAHANQAGANAPAAQAOAAAGgNQAIgMgBgbQABgagIgLQgGgNgOAAQgOAAgHANgAEbgLQgOgHgJgLQgKgLgEgQQgFgRgBgTQABgSAFgRQAEgPAKgMQAJgKAOgIQAMgGASAAQATAAAMAGQAOAHAJALQAJAKAFARQAFAQAAATQAAAVgFAPQgFASgJAJQgJAMgOAGQgOAGgRABQgQgBgOgGgAEkiBQgHANAAAYQAAAaAHANQAHANAOAAQAOAAAHgNQAHgMAAgbQAAgagHgLQgHgNgOAAQgOAAgHANgAh8gIQgLgCgKgHQgIgDgIgJQgGgGgHgKIAigUIAJAKIAKAIIAMAGIANABIAKgBQAFgBACgCQAFgBAAgCQACgDAAgFQAAgEgDgDQgCgCgEgCIgygQIgNgGQgHgEgFgFQgEgEgDgIQgDgHAAgKQAAgLAFgLQAFgKAIgGQAJgHALgDQANgEANAAQANAAAMADQAIACALAFQAIAEAIAHIAKALIgeAaIgIgIIgJgIIgMgDQgGgCgFgBQgTAAAAANQAAAEACAEQACACAEACIAJAEIAoAMIAOAGQAGADAFAGQAFAFAEAHQADAIAAAJQAAAKgFAJQgDAJgIAIQgJAHgNAEQgOAFgTABQgOAAgMgEgAqKgLQgNgHgKgLQgJgMgEgQQgFgTABgQQAAgUAFgPQAFgPAKgNQALgLAPgGQANgGATAAQANAAAKADQAKACAJAGQAKAHAHAJQAGAKAFARIgoAMIgGgOQgEgFgDgDIgHgFIgKgBQgGAAgGACQgGACgFAGQgEAGgDAIQgDALAAANQAAALABAIQACAIAEAHQADAGADADIAHAFIAIADIAHAAQALAAAIgGQAGgDAFgLIgZAAIAAghIBEAAIAABWIgkAAIAAgWIgBAAIgEAIIgIAIQgGAEgHACQgIAEgJAAQgTgBgPgGgAS9gIIgnhCIgMAPIAAAzIgtAAIAAinIAtAAIAAA8IAtg8IA1AAIg5BCIA+BlgAN6gIIgKgfIg0AAIgMAfIgoAAIA6inIAqAAIA8CngANGhHIAfAAIgOguIgBAAgAJ0ivIBWABIANABIAOAFQAHAEADADQAEAFADAHQADAFgBAKQABAKgDAFQgDAHgFAFQgEAFgGACQgFADgIABIAAABIAPADQAGADAFAFQAFAFACAHQADAIAAAJQAAAHgCAKQgDAHgFAEQgEAGgGADIgNAGIgPADIhXABgAKggqIAXAAQAMAAAGgFQAGgEAAgJQAAgJgGgEQgFgEgOAAIgWAAgAKghtIAWAAIAKgBIAHgDQACgBACgEIABgHIgBgGIgEgFQgCgCgFgBQgCgBgIAAIgWAAgACKgIIAAgiIAcAAIAAhdIgHAEIgWAEIAAglQALAAAGgCQAIgEAFgFIArAAIAACFIAZAAIAAAigAlKgIIAAiBIgxAAIAAgmICOAAIAAAmIgwAAIAACBgAn9gIIAAinIB2AAIAAAmIhJAAIAAAbIA1AAIAAAjIg1AAIAAAeIBOAAIAAAlgAuQgIIAAinIBPACQALACALAEQALADAHAHQAGADAJAMQAGAKADALQADAOAAAPQAAAOgDAOQgDAOgGAJQgHAIgIAHQgKAHgJAEIgVAFIgYACgAtjgtIANAAQAOABAHgDQAIgCAFgHQAFgFACgJQACgKAAgMQAAgLgCgJQgDgKgEgFQgEgFgKgDQgHgCgOAAIgMAAgAvTgIIhAhdIAAAAIAABdIgtAAIAAinIAwAAIA9BdIAAAAIAAhdIAtAAIAACngAx9gIIgKgfIg1AAIgLAfIgpAAIA8inIApAAIA8CngAyyhHIAhAAIgQgug");
	this.shape.setTransform(417.25,-102.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(290.8,-122.1,252.99999999999994,38.69999999999999), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgSBDQgKgDgHgEIgNgKIgJgMIAagRIAHAJQAEADAFACQADADAGACIAJABIAIgBIAGgBIAEgFQACgCAAgCQAAgDgCgDIgGgEIgHgDIgfgJIgLgFIgJgGQgEgFgCgFQgCgEAAgJQAAgLADgHQADgHAIgHQAGgEAKgEQAKgCALAAQAKAAAIACQAJADAHADIAMAJIAJAJIgYAUIgHgHIgIgFIgIgEIgIgBQgQAAAAAKQAAAEACACIAFAEIAHADIAfAJIALAFIAKAGQAEAFACAFQACAGAAAHQAAAIgDAHQgCAHgHAHQgGAFgMAFQgKADgQAAQgMAAgIgCg");
	this.shape.setTransform(366.2322,-15.401,1.261,1.2605);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQBDIgYguIgKAAIAAAuIgkAAIAAiFIA1AAQAMAAAKACQAKACAHAGQAIAGADAIQAEAIAAAMQAAAPgHAJQgHAJgNAEIAdA0gAgSgGIAPAAQAKAAAFgEQAFgDAAgIQAAgJgFgDQgFgEgKAAIgPAAg");
	this.shape_1.setTransform(350.5956,-15.401,1.261,1.2605);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwBDIAAiFIBeAAIAAAeIg6AAIAAAWIApAAIAAAbIgpAAIAAAZIA9AAIAAAdg");
	this.shape_2.setTransform(335.4634,-15.401,1.261,1.2605);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaBDIgzhKIAAAAIAABKIgkAAIAAiFIAmAAIAxBKIAAAAIAAhKIAkAAIAACFg");
	this.shape_3.setTransform(319.2908,-15.401,1.261,1.2605);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgnAAIAAgeIBwAAIAAAeIgmAAIAABng");
	this.shape_4.setTransform(302.7085,-15.401,1.261,1.2605);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQBDIgYguIgKAAIAAAuIgkAAIAAiFIA1AAQAMAAAKACQAKACAHAGQAIAGADAIQAEAHAAANQAAAQgHAIQgHAJgNAEIAdA0gAgSgGIAPAAQAKAAAFgEQAFgDAAgIQAAgJgFgDQgFgEgKAAIgPAAg");
	this.shape_5.setTransform(287.6078,-15.401,1.261,1.2605);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcBDIgJgZIgpAAIgIAZIghAAIAviFIAhAAIAvCFgAgNAQIAYAAIgLgjg");
	this.shape_6.setTransform(271.0569,-15.4325,1.261,1.2605);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1BDIAAiFIA/ABIAOACQAGACAGADQAGAEAEAFQADAFADAGQACAJAAAJQAAAIgCAJQgDAFgEAGQgDAFgHADQgFADgIACIgMACIgbABIAAArgAgRgDIAPAAIAKgBIAGgDIAEgGIABgHIgBgHIgEgEQgCgDgEgBIgKgCIgPAAg");
	this.shape_7.setTransform(255.7356,-15.401,1.261,1.2605);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwBDIAAiFIBeAAIAAAeIg6AAIAAAWIApAAIAAAbIgpAAIAAAZIA9AAIAAAdg");
	this.shape_8.setTransform(234.4244,-15.401,1.261,1.2605);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtBDIAAiFIAkAAIAABoIA3AAIAAAdg");
	this.shape_9.setTransform(220.7424,-15.401,1.261,1.2605);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBDIAAg4IgvhNIAlAAIAbAvIAcgvIAlAAIgvBNIAAA4g");
	this.shape_10.setTransform(205.421,-15.401,1.261,1.2605);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgnAAIAAgeIBxAAIAAAeIgnAAIAABng");
	this.shape_11.setTransform(189.9736,-15.401,1.261,1.2605);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSBDQgKgDgGgEQgJgGgEgEQgFgFgFgHIAagRIAHAJQAEADAFACQADADAGACIAJABIAIgBIAGgBIAEgFQACgCAAgCQAAgEgCgCIgGgEIgHgDIgfgJIgLgFIgJgGQgEgFgCgFQgCgEAAgJQAAgLADgHQADgHAIgHQAGgEAKgEQAKgCALAAQALAAAHACQAJACAHAEIAMAJIAJAJIgYAUIgHgHIgIgFIgIgEIgIgBQgQAAAAAKQAAAEACACIAFAEIAHADIAfAJIALAFIAKAGQAEAFACAFQACAEAAAJQAAAIgDAHQgDAJgGAFQgGAFgMAFQgKADgQAAQgMAAgIgCg");
	this.shape_12.setTransform(174.6207,-15.401,1.261,1.2605);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgwBDIAAiFIBeAAIAAAeIg6AAIAAAWIApAAIAAAbIgpAAIAAAZIA9AAIAAAdg");
	this.shape_13.setTransform(159.9614,-15.401,1.261,1.2605);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgtBDIAAiFIBbAAIAAAeIg3AAIAAAbIAmAAIAAAbIgmAAIAAAxg");
	this.shape_14.setTransform(146.2793,-15.401,1.261,1.2605);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRBDIAAiFIAjAAIAACFg");
	this.shape_15.setTransform(135.1824,-15.401,1.261,1.2605);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgtBDIAAiFIAkAAIAABoIA3AAIAAAdg");
	this.shape_16.setTransform(125.2834,-15.401,1.261,1.2605);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgmAAIAAgeIBvAAIAAAeIgmAAIAABng");
	this.shape_17.setTransform(307.4688,-38.09,1.261,1.2605);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAcBDIgIgZIgqAAIgIAZIghAAIAwiFIAgAAIAvCFgAgNAQIAYAAIgLgjg");
	this.shape_18.setTransform(291.9268,-38.1215,1.261,1.2605);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYBAQgKgEgIgKQgIgJgDgMQgEgOAAgPQAAgOAEgOQADgMAIgJQAIgKAKgEQALgFANAAQAOAAAKAFQALAEAIAKQAIAJADAMQAEAOAAAOQAAAPgEAOQgDAMgIAJQgIAKgLAEQgKAFgOAAQgNAAgLgFgAgQgeQgFAJAAAVQAAAWAFAJQAGAKAKAAQALAAAGgKQAFgLAAgUQAAgUgGgKQgFgKgLAAQgKAAgGAKg");
	this.shape_19.setTransform(270.2058,-38.09,1.261,1.2605);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYBAQgKgEgIgKQgIgJgDgMQgEgOAAgPQAAgOAEgOQADgMAIgJQAIgKAKgEQALgFANAAQAOAAAKAFQALAEAIAKQAIAJADAMQAEAOAAAOQAAAPgEAOQgDAMgIAJQgIAKgLAEQgKAFgOAAQgNAAgLgFgAgQgeQgGAKAAAUQAAAVAGAKQAGAKAKAAQALAAAGgKQAFgLAAgUQAAgUgGgKQgFgKgLAAQgKAAgGAKg");
	this.shape_20.setTransform(254.2539,-38.09,1.261,1.2605);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgmBDIAAgcIAXAAIAAhIIgLADIgGACIgGAAIAAgdQAGAAAIgCQAEgCAGgFIAiAAIAABpIATAAIAAAcg");
	this.shape_21.setTransform(241.3915,-38.09,1.261,1.2605);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJBSIAAgPIgQgDIgOgHQgFgEgFgFIgIgLIAYgPIALANIAHAEQAEADADAAIAAgeIgRgFQgJgDgGgEQgIgEgDgHQgEgHAAgJQAAgKAEgHQACgHAHgFQAGgGAIgDQAHgDAMgBIAAgMIAUAAIAAANQAIABAGACIALAFIAJAIIAHAIIgZARIgHgJQgHgFgDgBIAAAdIATAFQAJADAGAFQAGADAEAHQADAIABAIQgBAHgCAHQgDAIgFAFQgGAGgJADQgHAEgOABIAAAPgAAKArQAGgBADgEQACgCABgHQgBgFgCgCQgDgEgGgCgAgQgnQgEAEAAAEIABAFIADADIADADIAFACIAAgaQgGACgCADg");
	this.shape_22.setTransform(228.6868,-37.9324,1.261,1.2605);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSBDQgKgDgHgEQgHgFgGgFIgJgMIAagRIAHAJQAEADAFACQADADAGACQAFABAEAAIAIgBIAGgBIAEgFQACgCAAgCQAAgDgCgDIgGgEQgCgCgFgBIgggJIgKgFQgFgDgEgDQgEgFgCgFQgCgEAAgJQAAgLADgHQADgHAIgHQAGgEAKgEQALgCAKAAQAKAAAIACQAJADAHADIAMAJIAJAJIgYAUIgHgHIgIgFIgJgEIgHgBQgQAAAAAKQAAAEACACIAFAEIAHADIAUAFIAWAJIAKAGQAEAFACAFQACAGAAAHQAAAIgDAHQgDAIgHAGQgGAGgLAEQgKADgQAAQgMAAgIgCg");
	this.shape_23.setTransform(212.5142,-38.09,1.261,1.2605);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag6hCIAsAAIASABQAJACAJADQAGACAJAGQAHAGAEAGQAGAIACAKQADAKAAAMQAAANgDAJQgDALgFAHQgFAIgHAEQgGAFgIADQgIAEgKABIg+ACgAgWAmIAKAAQAKAAAGgDQAGgBAFgFQAEgGACgHQABgGAAgKQAAgIgBgHQgCgIgEgEQgEgEgHgCQgHgDgJAAIgKAAg");
	this.shape_24.setTransform(190.3203,-38.09,1.261,1.2605);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAZBDIgxhKIgBAAIAABKIgjAAIAAiFIAmAAIAvBKIAAhKIAkAAIAACFg");
	this.shape_25.setTransform(172.9498,-38.09,1.261,1.2605);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgwBDIAAiFIBeAAIAAAeIg6AAIAAAWIApAAIAAAbIgpAAIAAAZIA9AAIAAAdg");
	this.shape_26.setTransform(156.9664,-38.09,1.261,1.2605);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag1BDIAAiFIA/ABIAOACQAGACAFADQAHAEADAFQAEAFADAGQACAJAAAJQAAAIgCAJQgEAHgEAEQgDAFgHADQgEADgHACIgOACIgbABIAAArgAgSgDIAQAAIAJAAIAHgEIADgFIABgIIgBgHIgDgEQgDgDgEgBQgEgCgFAAIgQAAg");
	this.shape_27.setTransform(142.181,-38.09,1.261,1.2605);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSBDQgKgDgHgEQgHgFgGgFIgJgMIAagRIAHAJIAIAFQAEADAGACQAFABAEAAIAIgBIAGgBIAEgFQACgCAAgCQAAgDgCgDIgGgEIgHgDIgggJIgKgFQgFgDgEgDQgEgFgCgFQgCgEAAgJQAAgLADgHQADgHAIgHQAGgEAKgEQALgCAKAAQAKAAAIACQAJADAHADIAMAJIAJAJIgYAUIgHgHIgIgFIgJgEIgHgBQgQAAAAAKQAAAEACACIAFAEIAHADIAUAFIAWAJQAFACAEAEQAFAFACAFQACAGAAAHQAAAIgDAHQgDAIgHAGQgGAGgLAEQgKADgQAAQgMAAgIgCg");
	this.shape_28.setTransform(125.9454,-38.09,1.261,1.2605);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(118.6,-48.3,255.00000000000003,41.599999999999994), null);


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
	this.shape.graphics.f("#62676B").s().p("EAo3AGGIFXmJIlYmCID/AAIFXGBIlXGKgEAglAGGIFXmJIlYmCID/AAIFXGBIlXGKgEAmKgADIlPF/IDkAAIFPmAIlPl3IjlAAgAYUGGIFXmJIlXmCID/AAIFXGBIlXGKgAQDGGIFXmJIlYmCID/AAIFXGBIlXGKgAVngDIlPF/IDkAAIFQmAIlQl3IjkAAgAHxGGIFXmJIlYmCID/AAIFXGBIlXGKgAggGGIFWmJIlWmCID9AAIFXGBIlXGKgAFDgDIlOF/IDkAAIFPmAIlPl3IjkAAgAoxGGIFXmJIlYmCID/AAIFXGBIlXGKgAxDGGIFXmJIlYmCID/AAIFYGBIlXGKgAregDIlPF/IDlAAIFOmAIlPl3IjlAAgA5WGGIFXmJIlYmCID/AAIFYGBIlYGKgEghoAGGIFXmJIlXmCID+AAIFYGBIlXGKgA8DgDIlPF/IDkAAIFPmAIlPl3IjlAAgEgp4AGGIFXmJIlZmCIEAAAIFXGBIlXGKgEgyKAGGIFXmJIlYmCID/AAIFXGBIlXGKgEgsngADIlOF/IDkAAIFQmAIlQl3IjlAAg");
	this.shape.setTransform(1070.1,-5.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(748.9,-44.1,642.5000000000001,78);


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
	this.shape.setTransform(100.1116,450.5833,1.5804,1.5785);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51565A").s().p("AgXAeQgEgFAAgHQAAgGACgEQAEgFAEgDQAEgBAJgEIAUgEIAAgDQAAgMgNAAQgHAAgFACIgKAHIgGgGQAFgFAIgEQAHgDAJgBQAHABAEABQAEACACADQACABADAGQABADAAAGIAAAmIABAHIgKAAIgBgFIgBgFQgLALgNAAQgJgBgGgEgAAAABIgJAEQgFACgBADIgCAGQAAAFADACQAEACAEABQAGgBAGgCQAGgEAEgDIAAgRg");
	this.shape_1.setTransform(89.7207,448.5312,1.5804,1.5785);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#51565A").s().p("AgNAtQgFgCgEgEQgEgFgCgGQgCgGAAgJQAAgJACgFQACgHAEgEQAFgFAEgCQAFgCAGAAQAFAAAGADQAFADAEAEIAAgjIALAAIABBWQgBADACADIgLAAIgBgEIgBgFQgEAEgFADQgFADgHAAIgKgCgAgOgFQgFAFAAANQAAAHABAEQACAFADADQACADAEACQADABAEAAQAEAAAFgDQAFgCAEgFIAAgdQgFgFgEgDQgEgCgFAAQgIAAgGAGg");
	this.shape_2.setTransform(78.421,446.5186,1.5804,1.5785);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#51565A").s().p("AgKAhQgHgDgDgEQgFgFgCgGQgDgGAAgJQAAgHADgHQACgHAFgEQAFgFAFgCQAEgCAGAAQAGAAAGACQAFADAEAEQAFAEACAHQADAHAAAHQAAAJgDAGQgCAHgFAEQgDAEgGADQgGACgGAAQgFAAgFgCgAgIgXIgGAGQgCACgBAGIgCAJQAAAFACAFIADAIQACADAEADQAFACADAAQAFAAAEgCIAGgFIAEgJIABgKIgBgIIgEgJQgDgEgDgBQgDgCgGAAQgEAAgEABg");
	this.shape_3.setTransform(66.9634,448.5312,1.5804,1.5785);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#51565A").s().p("AAKAtQgKAAgDgDQgEgFAAgJIAAgoIgMAAIAAgIIAMAAIAAgZIAKAAIAAAZIARAAIAAAIIgRAAIAAAmQAAAGACACQACADAGAAIAHgBIAAAJIgEAAg");
	this.shape_4.setTransform(57.5997,446.7159,1.5804,1.5785);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#51565A").s().p("AAfAiIAAgqIAAgEIgBgCIgDgCIgDgBQgFAAgCACIgHAFIAAAsIgTAAIAAgqIAAgEIgBgCIgDgCIgDgBQgFAAgCACIgHAFIAAAsIgUAAIAAhCIAUAAIAAAKIAEgEIAFgEIAGgCIAHgBIAHAAIAFADQADACAAACIADAEIADgEIAFgDIAGgDIAIgBQAFAAAEABIAGAEIADAHIABAIIAAAvg");
	this.shape_5.setTransform(39.8205,448.4128,1.5804,1.5785);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#51565A").s().p("AgTAhQgDAAgDgDQgDgDgBgEQgBgDgBgGIAAgvIAUAAIAAApQAAAGADABQABADAEAAQAEAAADgCQAEgCADgDIAAgsIAUAAIAABCIgUAAIAAgLIgEAEIgEAEQgDADgDAAQgEABgEAAIgIgBg");
	this.shape_6.setTransform(24.5305,448.6102,1.5804,1.5785);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#51565A").s().p("AALAiIAAgqQAAgEgCgDQgCgCgDAAQgEAAgDACIgHAFIAAAsIgUAAIAAhCIAUAAIAAAKIAJgIIAFgCIAIgBIAIABIAGADIAEAGQACAEAAAFIAAAwg");
	this.shape_7.setTransform(12.5197,448.4128,1.5804,1.5785);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#51565A").s().p("AgJAvIAAhDIATAAIAABDgAgJgdIAAgRIATAAIAAARg");
	this.shape_8.setTransform(3.5511,446.4791,1.5804,1.5785);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#51565A").s().p("AAKAtIgLgBQgFgBgCgCQgDgEgBgDIAAgpIgLAAIAAgOIALAAIAAgYIATAAIAAAYIARAAIAAAOIgRAAIAAAdIAAAEIACADIADACIAEAAIACAAIACAAIACAAIABgBIAAAOIgCABIgEAAg");
	this.shape_9.setTransform(-3.4815,446.7159,1.5804,1.5785);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#51565A").s().p("AgTAhQgDAAgDgDQgDgCgCgEQgBgDAAgFQAAgFACgFQAEgFAEgCIANgFIASgDIAAgCQAAgEgCgCQgCgCgFAAQgEAAgHADIgKAGIgIgMIAFgEIAIgEIAJgDIAKgBQAHAAAFACQAFABADAEQADADACAFQABAFAAAGIABAjQAAAEABADIgUAAIgBgFIgBgFQgEAEgGAEQgFADgHAAIgHgCgAgGAFQgFADAAAFQAAADACACQACABADAAQAFAAADgBIAGgEIAAgNQgKABgGADg");
	this.shape_10.setTransform(-13.3588,448.4918,1.5804,1.5785);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#51565A").s().p("AgJAvIAAhdIATAAIAABdg");
	this.shape_11.setTransform(-21.6558,446.4397,1.5804,1.5785);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#51565A").s().p("AgjAvIAAhdIAiAAIAJABIAJACIAHADQADACADADQAEAEAAAEQACAFAAAGQAAAHgCAEIgEAHQgDAEgDACIgIAEIgJABIgIABIgOAAIAAAhgAgPgBIAOAAIAIgBIAFgDIADgEIABgGQAAgFgBgBIgDgFIgFgCIgIgBIgOAAg");
	this.shape_12.setTransform(-30.6639,446.4397,1.5804,1.5785);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#51565A").s().p("AAMAiIgMgVIgMAVIgVAAIAYgiIgWghIAWAAIAKATIALgTIAVAAIgWAhIAXAig");
	this.shape_13.setTransform(-48.2455,448.4918,1.5804,1.5785);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#51565A").s().p("AgKAhQgGgCgFgEQgFgEgCgHQgDgGAAgKQAAgFABgGIAEgJQACgDAEgDIAHgFIAIgCIAGgBIAHABIAIACIAGAEQADADACAEQADAFABAFQABAGAAAGIAAADIgrAAIABAHIAEAFIAFADIAEAAIAGAAIAGgCIAEgCIAEgDIAIAMQgGAFgHACQgGADgKAAQgGAAgGgCgAgCgTIgEADIgDAEIgCAHIAZAAQAAgHgEgEQgDgDgGAAg");
	this.shape_14.setTransform(-58.7154,448.4918,1.5804,1.5785);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#51565A").s().p("AAfAiIAAgqIgBgEIgBgCIgCgCIgDgBQgFAAgCACQgEACgDADIAAAsIgTAAIAAgqIgBgEIgBgCIgCgCIgEgBQgDAAgEACIgGAFIAAAsIgUAAIAAhCIAUAAIAAAKIADgEIAFgEIAHgCIAHgBIAHAAIAFADIADAEIACAEIAEgEIAFgDQADgDADAAIAHgBQAGAAADABIAGAEQADAEABADQABAEAAAEIAAAvg");
	this.shape_15.setTransform(-73.4918,448.4128,1.5804,1.5785);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#51565A").s().p("AAWAvIgHgVIgeAAIgIAVIgTAAIAhhdIATAAIAhBdgAgKALIAUAAIgKgeg");
	this.shape_16.setTransform(-89.7696,446.4002,1.5804,1.5785);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#51565A").s().p("AgJAgQgGgCgDgEQgFgEgCgHQgDgHAAgIQAAgJADgGQACgGAFgFIAKgGQAEgCAFAAQAHAAAEACQAGADADAEQAEAEACAHQACAGAAAIIAAADIguAAQAAAGACAEIAEAHQADADADABQAEACADAAQAHAAAFgDQAEgCAEgGIAGAFQgEAHgHAEQgGAEgKAAQgEAAgGgDgAgFgXQgCAAgDADIgFAGIgCAJIAkAAQgBgIgEgGQgFgFgIAAIgGABg");
	this.shape_17.setTransform(103.944,425.8398,1.5804,1.5785);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#51565A").s().p("AgJAhQgGgDgDgEQgEgEgDgHQgCgGAAgJQAAgHACgIQADgGAEgFQAFgEAFgCQAFgCAFAAQAGABAEABIAHAEIAGAGIADAHIgJAEQgCgGgFgEQgDgDgHAAIgGABIgGAFQgDADgCAEQgBAGAAAFQAAAMAFAHQAFAGAIABQAGAAAEgEQAEgDADgHIAJAEIgEAIIgGAFIgHAFIgKABQgFAAgFgCg");
	this.shape_18.setTransform(93.5531,425.8003,1.5804,1.5785);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#51565A").s().p("AARAiIAAgtQAAgHgDgDQgCgCgHAAQgGAAgFACIgKAIIAAAvIgLAAIAAhBIALAAIAAAJIAFgEIAGgEIAFgCIAIgBQAKAAAFAFQAFAFAAAKIAAAvg");
	this.shape_19.setTransform(82.5695,425.7214,1.5804,1.5785);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#51565A").s().p("AgJAgQgFgCgFgEQgEgGgCgFQgDgHAAgIQAAgIADgHQACgFAFgGIAKgGQAEgCAFAAQAHAAAEACQAGADADAEQADADADAIQACAGAAAIIAAADIguAAIACAKQABAEADADQADADADABIAHACQAHAAAFgDQAEgCAEgGIAGAFQgEAHgHAEQgHAEgJAAQgEAAgGgDgAgEgXIgGADIgEAGIgDAJIAkAAQgBgJgEgFQgFgFgIAAIgFABg");
	this.shape_20.setTransform(71.3489,425.8398,1.5804,1.5785);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#51565A").s().p("AgFAuIAAhCIAKAAIAABCgAgFgiIAAgKIALAAIAAAKg");
	this.shape_21.setTransform(63.6051,423.9061,1.5804,1.5785);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#51565A").s().p("AgSAiIAAhBIAKAAIAAALIABAAQAFgGADgDQAHgEAJAAIACAAIgBAKIgDAAQgIAAgGAEQgFAEgEAHIAAAqg");
	this.shape_22.setTransform(57.8763,425.7214,1.5804,1.5785);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#51565A").s().p("AgJAgQgHgCgDgEQgEgEgCgHQgDgFAAgKQAAgKADgFQADgHAEgEQAFgEAFgCQAEgCAFAAQAHAAAEACQAGADADAEQAEAEACAHQACAGAAAIIAAADIguAAQAAAEACAGIAEAHQADADADABIAHACQAHAAAFgDQADgCAFgGIAGAFQgEAGgHAFQgHAEgJAAQgEAAgGgDgAgFgXQgCAAgDADIgFAGQgCAFAAAEIAkAAQgBgIgEgGQgFgFgIAAIgGABg");
	this.shape_23.setTransform(48.0385,425.8398,1.5804,1.5785);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#51565A").s().p("AgdAuIAAhaIALAAIAAAJIAJgIQAGgDAGAAQAGAAAEACQAGADADAEQADADADAIQACAGAAAJQAAAKgCAEQgCAHgEAEQgFAFgEABQgGACgFABQgFAAgGgEIgJgGIAAAhgAgJgiIgJAIIAAAeQAJAJAJABQAJAAAFgHQAFgGAAgMQAAgMgFgHQgFgGgJAAQgFAAgEACg");
	this.shape_24.setTransform(37.0549,427.6945,1.5804,1.5785);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#51565A").s().p("AARAhIgRgaIgRAaIgLAAIAXghIgWggIAMAAIAPAYIARgYIALAAIgWAgIAXAhg");
	this.shape_25.setTransform(25.8738,425.8398,1.5804,1.5785);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#51565A").s().p("AgJAgQgGgCgEgEQgDgEgDgHQgDgHAAgIQAAgJADgGQACgGAFgFIAJgGQAFgCAGAAQAGAAAFACQAFADADAEQAEAEACAHQACAGAAAIIAAADIguAAQAAAGACAEIAEAHQADADAEABQADACADAAQAHAAAFgDQAEgCAEgGIAHAFQgFAHgHAEQgHAEgIAAQgFAAgGgDgAgEgXQgDAAgDADIgEAGIgDAJIAkAAQAAgIgFgGQgFgFgIAAIgFABg");
	this.shape_26.setTransform(15.8385,425.8398,1.5804,1.5785);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#51565A").s().p("AgNAtQgGgCgDgEQgDgEgDgHQgCgGAAgJQAAgJACgFQACgHAEgEQAFgFAEgCQAFgCAGAAQAFAAAGADQAFADAEAEIAAgjIALAAIAABWIACAGIgLAAIgBgEIgBgFQgFAFgEACQgFADgHAAQgEAAgGgCgAgOgFQgFAFAAANQAAAHABAEIAEAIIAGAFIAIABQAFAAAEgDQAEgCAFgFIAAgdQgEgGgFgCQgEgCgFAAQgIAAgGAGg");
	this.shape_27.setTransform(-0.0047,423.7877,1.5804,1.5785);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#51565A").s().p("AARAiIAAgtQAAgHgDgDQgDgCgGAAQgGAAgEACQgGAEgFAEIAAAvIgLAAIAAhBIALAAIAAAJIALgIIAGgCIAHgBQAKAAAFAFQAFAFAAAKIAAAvg");
	this.shape_28.setTransform(-11.4624,425.7214,1.5804,1.5785);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#51565A").s().p("AgWAeQgGgFAAgHQAAgFADgFQADgFAEgDQAFgCAJgDIAUgEIAAgDQAAgMgNAAQgHAAgFACIgLAHIgFgGQAHgGAGgDQAHgDAKgBQAFABAFABQAEACADADQACACACAFIABAJIAAAmIACAHIgLAAIgCgFIAAgFQgLALgOAAQgJgBgEgEgAAAABIgJAEIgGAFIgCAGQAAAFADACQAEACAEABQAGgBAGgCQAEgCAGgFIAAgRIgQACg");
	this.shape_29.setTransform(-22.762,425.8003,1.5804,1.5785);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#51565A").s().p("AgdAuIAAhaIALAAIAAAJIAJgIQAFgDAHAAQAGAAAEACQAGADADAEQADADADAIQACAGAAAJQAAAKgCAEQgCAHgEAEQgFAFgEABQgGACgFABQgFAAgGgEIgJgGIAAAhgAgJgiIgJAIIAAAeQAJAJAJABQAJAAAFgHQAFgGAAgMQAAgMgFgHQgFgGgJAAQgFAAgEACg");
	this.shape_30.setTransform(-38.0916,427.6945,1.5804,1.5785);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#51565A").s().p("AgWAdQgFgFAAgKIAAgvIALAAIAAAtQAAAHADADQADADAGAAQAFAAAFgDQAGgDAFgFIAAgvIALAAIAABCIgLAAIAAgKIgLAHIgGADIgHABQgKAAgFgFg");
	this.shape_31.setTransform(-50.0234,425.9187,1.5804,1.5785);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#51565A").s().p("AARAiIAAgtQAAgHgDgDQgCgCgHAAQgGAAgFACIgKAIIAAAvIgLAAIAAhBIALAAIAAAJIAFgEIAGgEIAFgCIAIgBQAKAAAFAFQAFAFAAAKIAAAvg");
	this.shape_32.setTransform(-65.9061,425.7214,1.5804,1.5785);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#51565A").s().p("AgZAqQgIgFAAgHQAAgFAEgEQADgEAGgCQgGgDAAgFQAAgDACgDIAGgEQgFgDgDgFQgCgFAAgGQAAgGACgEQACgDAEgEIAIgFIALgCQAGAAAEACQAFACAEADIAHgEIAJgCIAAAKIgGABIgHABQAEAFAAAGQAAAGgDAEQgBAEgEADQgDADgFACQgFABgFAAIgKgBIgEABIgBADQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAIAHACIANABQANABAGAEQAGAEAAAIQAAAFgDAEQgDAEgDACQgGADgFAAQgFACgGAAQgRAAgIgFgAgUAWQgDADAAADQAAAFAGACQAFADAMAAQAJAAAHgDQAFgDAAgEQAAgEgEgCQgDgCgMgBIgPgBQgFABgCADgAgNghQgEAEAAAHQAAAHAEAEQAEAEAIAAQAIAAADgEQAFgEAAgHQAAgHgFgEQgEgEgHAAQgHAAgFAEg");
	this.shape_33.setTransform(-77.4033,427.734,1.5804,1.5785);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#51565A").s().p("AgEAuIAAhCIAJAAIAABCgAgFgiIAAgKIALAAIAAAKg");
	this.shape_34.setTransform(-85.3446,423.9061,1.5804,1.5785);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#51565A").s().p("AgUAqQgJgHgEgLIAJgEQAEAKAGAEQAIAFAIAAQAJAAAGgEQAGgFAAgHIgBgGIgDgFIgIgEIgXgIIgKgFIgGgHQgCgEAAgHQAAgFACgEQACgFAEgDQAEgDAGgDIAMgBQAGAAAFABQAGACADADQAEACADAEQADAEACAFIgJAFQgDgJgHgEQgHgDgGAAQgJAAgFAEQgFAEAAAGQAAAEABACIAEAFIAIADIALAEIAMAFIAJAFQAEACACAFQACAEAAAGQAAAHgCAEQgCAFgFADQgFAEgFABQgGACgIAAQgNAAgIgGg");
	this.shape_35.setTransform(-94.2737,423.7087,1.5804,1.5785);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ap1C0QhLAAg1g0Qg0g1AAhLQAAhKA0g0QA1g1BLAAITrAAQBLAAA0A1QA1A1AABJQAABLg1A1Qg0A0hLAAg");
	this.shape_36.setTransform(4.4598,435.1137,1.5804,1.5785);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(-123.5,406.7,256,56.900000000000034), null);


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

	// Layer_3
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ABoBHIgBgBIgBAAIAAAAIgEgEQgDgIAAgGIAEggIgBABQgCACgBADIgBgBIAAACIgIAKIAAAAIgBAAIgBACIAAAAIgCABIgBADIgFACIgHABIgEgCIgBAAIgBgBIgGgGQgCgBAAgHIAAgCIAAAAIAAgDIAAAAIABgEIgBAAIAAgBIABAAIAAAEIAAAEIABgMIAFgUIgCAEIgBACIAAgBIAAAAIABgEIgBAEIgBADIACgIIADgJIABgBIAAAAIAAgBIAAAAIAGgBIAEABIACABIgCAGIAAADIAAAEIgBABIgBAEIgCAFIgBAFIgBAEIgBANIABAJIAHgFIgCACIACgCIAAAAIAHgHIADgEIAKgPIABAAIAAAAIABgBIgBAAIgCgEIABABIABAAIADgBIAAAAIABgBIAAAAIADgEIABgBIAAgBIAAAAIgBAEIACgEIAAgBIAAgBIAAAAIAAAAIAAgCIAAAAIAAgBIAFgRIABgDIAJgeQADgDAAgCIAEgEIAAgBIAAgBIAHAAIAFABIACAAIACACQABACAAAEIgBANIACAGIAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAgBQgBAAAAgBQgBgDAAgFIAAgIIgDAEIgBADQgEALgBAIIgGAVIAAABIgBAEIADAAIAEAAIADAAIADACIgBACIgBABIgHACIgGADIgBAFIgCAHIgDAXQgDAMABAMIABADIABAEQgBAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAABQAAAAgBAAgAA3AcIAAAAIAAgBgAA8gFIABAAIAAgBgABugaIAAAAIAAABIAAgBIAAAAIABgCIAAgDIgBAFgABygmIAAgBIAAgBgAAoA4IAAAAIgGgCIgFgDIgCgEQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgDIAAAAIgCgDIABAAIAAgEIABAAIgBgBIABAAIgBgBIgBAAIAAAAIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAABIgBgBIACgBQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgBIgBAAIABgBIgBgCIAAgBIABAAIAAAAIAAAAIABgBIgBAAIgBAAIAAAAQABAAAAgBIAAABIABAAIgBgBIAAAAIAAgBIAAgBIABAAIgBAAIABgBIAAgBIgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIAAgDIABgCIAAgEIgBAAQAAABAAAAIAAgCIABAAIAAgBIAAgCIAAgBIAAgBIAAAAIABAAIAAgBIgBAAIABgBIgBAAIAAgBIABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgCIABgBIgBgCIABgDIAAgBIAAAAIABgBIAAgBIAAgBIAAgBIABgBIgBgBIAAAAIABgBIgBAAIAAgCIABAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgCIABgCIAAACIgBABIABgBIAAgCIAAgBIAAAAIAAAAIABgBIgBgBIAAgBIABAAIAAABIABgBIAAAAIgBAAIABgCIAAgCIAAABIABgBIAAgBIgBAAIAAgCIABgBIAAgBIAAgBIAAAAIABABIgBgCIABgBIAAgBIAAgBIAAgCIACgHQAAAAAAgBQgBAAAAAAQAAgBABAAQAAAAAAgBIAAgCIABABIAGgBIAFABIABACIABAFIgIAtIAAABIgEAaQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgBAQIABAHIACAHIAEgDIAEgEIAAACIAAABIAAAAIAAAAIAAAAIAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAgBAAQAAABAAAAIAAAAIAAABIAAAAIAAAAIAAACIgBAAIAAAAIgDACIgFAAgAAcAFIAAADIABgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAgAAdAAIAAACIABgCIgBAAgAAcAAIABAAIAAgBIgBAAgAAdgIIAAABIABAAIgBgBIABAAIAAgBIgBAAIAAABgAAegNIAAABIAAABIAAgBIAAgBIAAgBIAAAAIAAABgAAjgkIABgBIAAAAgAjAA4IgBAAIgGgCIgFgDIgCgEIgBgEIgBgGIABAAIgBgCIABgBIgBgBIABAAIAAgBIgBgBIAAgBIABAAIgBgBIABAAIAAgBQgBAAABAAIgBABIAAgBIABgBIgBgBIABgBIAAAAIAAgBIAAAAIAAgCIAAgBIAAAAIAAAAIABgBIgBAAIAAAAIAAAAIAAgBIAAABIABAAIAAgBIgBAAIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIABABIAAgBIgBAAIABgBIAAAAIAAgBIAAgCIAAgBIAAgBIAAAAIAAABIABgBIgBgBIAAABIAAgCIAAABIABgCIAAgEIAAAAIgBABIABgCIAAAAIAAgBIABgCIgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIgBgBIABAAIAAgBIAAABIAAgCIAAgCIABgBIgBAAIAAgCIABgCIAAAAIAAAAIAAAAIAAgBIABAAIAAgBIgBABIAAgBIAAAAIAAAAIABgBIAAgBIAAgBIAAgBIABgBIAAgCIgBAAIABgCIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIABgCIAAABIAAgBIAAgCIAAACIABgDIgBAAIAAAAIABgBIAAgBIABgBIAAAAIgBAAIABgCIAAgCIAAAAIAAABIABAAIAAgCIgBAAIABgCIAAAAIABgBIgBgBIAAgBIAAAAIABABIgBgCIABgBIAAgBIAAgBIAAgCIACgKIAAgCIABABIAGgBIAFABIAAABIACABIAAAFIgIAtIAAABIgCAKIgBAGIAAAGIgBAEQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAIAAAXIACAHQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBIAEgEIAAACIAAABIAAAAIAAACQAAABAAAAQABAAAAABQAAAAgBAAQAAABAAAAIAAAAIAAABIAAAAIAAAAIAAACIgBAAIAAAAIgDACIgFAAgAjOAQIABABIAAgBIAAgBgAjNAFIABADIAAgDIAAgDgAjMgBQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIABgBIgBgBgAjMgHIAAAAIAAgBgAjLgMIgBABIABgBIAAgBgACWAyIgCgBIgBAAIgBgBIgCgBIgHgFIgEgHIgDgIIAAgIIACgIIADgIIALgTIAAAAIABgBIAIgKIAIgIIADABQAFAAAEACQAFACAAAGIgBAEIAAgBIAAABIAAAAIgBACQgEAJgGAHIgOAMIAAABIgBgBIgEADIgEADQgCACAAADIgBAIIABAHIADAGQADAAADgCIAGgDIAKgIIACgBIABgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACgBIAAAAIAKgMIABAAIACgCIACgCIAAAAIABgBIABgBIABgCIABgCIABgBIADgCIACgCIAAAAIABAAIABgDIABgBIACgCIACgDIACgBIABAAIAAACIgBACIAAAAIABAAIgBAAIAAABIAAABIgBABIAAADIgCACQAAACgDACIgDAGIgBABIAAAAIgBABIAAABIgTAXIgFAFIgGAEIgGADQgDACgFAAgACkgWIgGAGIgLAVQAIgFAEgGIAKgNIACgGIAAgBIgBgBIgGAFgACxgTIABABIAAgBIAAAAgAg6AyIgBgBIgBAAIgCgBIgDgBIgHgJIgDgDQgCgEAAgEIAAgIIABgIIADgIIAMgTIAAAAIAAgBIAIgKIAIgIIADABQAGAAADACQAEACABAGIgBAEIgBACIAAAAQgEAJgGAHQgGAHgIAFIAAABIgBgBIgEADIgEADIgCAFIgBAIIABAHIADAGQADAAADgCQAEgBACgCIAKgIIABgBIACgBIACgBIAOgPIACgCIABgBIABgBIACgCIABgCIAAgBIACgCIADgCIAAAAIABAAIABgDIACgBIABgCIACgDIACgBIABAAIgBACIAAACIAAAAIAAACIgBABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgBACQAAADgDABIgDAGIgBABIgBAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIAAABIgTAXIAAAAIgEAFIgGAEIgHADQgDACgEAAgAgeAVIAAAAIAAAAgAgsgWIgGAGIgKAVQAHgFAEgGIAKgNIACgGIgBgBIAAgBQgFADgBACgAioAsIgBAAIAAgBIgHgGIgCgIIAAgEIAAgEIAAADIABgEIgBAAIAAgBIABAAIAAAEIAAAEIABgMQABgIACgEIAAgDIACgFIgCAEIgBACIAAgBIABgEIgBAEIAEgOIABgBIAAgBIAAAAIAGgBIAEABIACABIgBADIgBAKIgBABIgFAWIgBAJIABAJIAGgEIABgBIAAAAIABgBIAJgKIALgPIAAAAIAFgGIADgEIAAgBIgBgBIABAAIAAgRIAAgBIAAAAIAAgBIAAAAIAAABIgBgBQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIABgBIABgBIABAAIABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIACAAIABAAIAAABQABgBAAAAQABAAAAAAQABAAAAABQABAAAAABIADADIAAADIABACIAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAIAAABIAAABIAAAEIAAACIgCAUQgBALABAIQACgCADgIQADgGADgEQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIAAgBIAAgBIAAgBIAAgBQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAIAAABIAAABIABgCIAAgEIAAABIAAABIABgDIABgCIABgBIACgBIAAgBIAAAAIABgCIABgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIABgBIAAABIABgBIAAAAIgBAAIABgDIACgDIAGgLIgBAAQAAAAAAAAQgBAAAAAAQAAAAABAAQAAAAAAgBIABAAIAAAAIAEgJIABAAIAAAAIgBAAIABgBIAAABIABgBIAAgBIABABIgBABIABAAIABAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAABIABABIgBADIABgCIABAFIAAAHIgCAGIgUAqIgBABIAAABIgDADIgDAFIAAABIgCACIAAAAIAAABQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgEAAIgBAAIAAAAIgGgCIgBAAIgBgBIgCgCIgCAAIgCgEIABgBIAAAAIAAAAIAAgBIAAgBIgBgCIABgBIAAAAIgBAAIAAAAIABgBIAAgRIgBADIAAAAIgBABIAAABIgBAAIgCAEQgCACgBADIAAgBIgBABIABABIgJAKIAAAAIgBAAIAAABIAAAAIgBAAIAAABIgBAAIAAABIgCADIgFACIgGABgAiyAcIABAAIgBgBgAhwAZIAAABIAAgBIAAgBgAhsAQIABAAIgBAAgAhmADIAAABIAAgBIAAAAQABABAAgBIgBgBgAhegNIAAADIACgEgABNAfIAAgBIAAABIAAAAgABOAdIACgBIgBABgAibAdIACgBIgBABgAA4ANIAAgEIABgCIABgCIABgDIgBAHIAAAAIgCAJgAA4AMIAAABIAAgBIAAgBgAixAOIAAgBIABgBIgBgBIAAABIAAgCIAAAAQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIABgDIgDAOgAA3AQIABAAIAAABgAiOANQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgBACgAiLAJIAAAAIAAAAIAAABgAiKAIIABgBIgBABgAAbACIABAAIAAAAgAjNACIAAgBIAAABgABngEIABAAIAAABgAiCgOIAAgBIABABIgBAAgAjLgOgABFgwIAEgCQABgBAEAAQADABACAFIAAACIgBADIAAAAIgBAAIgCADIgCABIgDABIgDAAgAikgwIAFgCQAAgBAEAAQAEABABAFIAAAFIgBAAIAAAAIgCADIgDABIgGABg");
	this.shape_37.setTransform(13.4334,10.3776,1.4777,1.4794);

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(1));

	// Layer_1
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAEAGIAAgIIgDAIIgBAAIgDgIIAAAIIgDAAIAAgLIAFAAIABAIIADgIIAEAAIAAALg");
	this.shape_38.setTransform(43.2505,24.256,1.2181,1.2185);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAAAGIAAgJIgEAAIAAgCIAJAAIAAACIgEAAIAAAJg");
	this.shape_39.setTransform(41.4538,24.256,1.2181,1.2185);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#007BC8").s().p("AiUCVIAAkpIEpAAIAAAwIgsAAIgKAcIgKgcIg4AAIAAAlIgRglIgsAAIgwBqIAmAAIAABfIB2AAIASgUIATAUIAkAAIAAAwgAB3BaIgYgbIgZAbIgdAAIhGAAIAAhUIBGAAIAAAUIgvAAIAAAMIAuAAIAAATIguAAIAAAOIAvAAIAAATIAngqIgngqIAeAAIAYAbIAZgbIAdAAIgoApIAoArgAB+AwIAXgZIAAAxgAB+gFIAAg6IgVA6IgUAAIgVg6IAAA6IgXAAIgaAAIgHgRIglAAIgHARIgZAAIAlhTIAcAAIAlBTIAAhTIAkAAIASA0IATg0IAjAAIAABTgAABgoIgLgcIgLAcIAWAAg");
	this.shape_40.setTransform(-45.0309,11.8883,1.2181,1.2185);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AiUCVIAAkpIEpAAIAAEpg");
	this.shape_41.setTransform(-45.0309,11.8883,1.2181,1.2185);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgGAbIAAgpIgPAAIAAgLIArAAIAAALIgPAAIAAApg");
	this.shape_42.setTransform(36.0942,26.8148,1.2181,1.2185);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgGAbIAAg0IANAAIAAA0g");
	this.shape_43.setTransform(31.5263,26.8148,1.2181,1.2185);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgGAbIAAgpIgPAAIAAgLIArAAIAAALIgPAAIAAApg");
	this.shape_44.setTransform(24.1569,26.8148,1.2181,1.2185);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgVAFIAAgfIAOAAIAAAfQAAAKAHAAQAIAAAAgKIAAgfIAOAAIAAAfQAAAWgWAAQgVAAAAgWg");
	this.shape_45.setTransform(17.8837,26.8453,1.2181,1.2185);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgRAVQgIgHAAgOQAAgMAIgIQAHgGAKAAQALAAAHAGQAIAIAAAMQAAAOgIAHQgHAGgLAAQgKAAgHgGgAgLAAQAAAQALAAQAMAAAAgQQAAgOgMAAQgLAAAAAOg");
	this.shape_46.setTransform(11.0624,26.7843,1.2181,1.2185);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAJAbIAAgWIgQAAIAAAWIgPAAIAAg0IAPAAIAAATIAQAAIAAgTIAOAAIAAA0g");
	this.shape_47.setTransform(3.967,26.8148,1.2181,1.2185);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgGAbIAAgpIgQAAIAAgLIAsAAIAAALIgPAAIAAApg");
	this.shape_48.setTransform(-2.4889,26.8148,1.2181,1.2185);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgGAbIAAg0IANAAIAAA0g");
	this.shape_49.setTransform(-7.0872,26.8148,1.2181,1.2185);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAIAbIgHghIgHAhIgMAAIgPg0IAPAAIAGAeIAHgeIAMAAIAHAeIAAAAIAHgeIAMAAIgNA0g");
	this.shape_50.setTransform(-13.0254,26.8148,1.2181,1.2185);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgGAbIAAgpIgPAAIAAgMIArAAIAAAMIgPAAIAAApg");
	this.shape_51.setTransform(9.2961,-3.0992,1.2181,1.2185);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgFALIAEgJIgFAAIAAgMIANAAIAAALIgGAKg");
	this.shape_52.setTransform(4.9414,-4.9878,1.2181,1.2185);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAKAbIgTgdIAAAdIgNAAIAAg1IAOAAIASAdIAAgdIANAAIAAA1g");
	this.shape_53.setTransform(0.0386,-3.0992,1.2181,1.2185);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgRAVQgIgIAAgNQAAgNAIgHQAHgGAKAAQALAAAHAGQAIAHAAANQAAANgIAIQgHAGgLAAQgKAAgHgGgAgLAAQAAAQALAAQAMAAAAgQQAAgPgMAAQgLAAAAAPg");
	this.shape_54.setTransform(-7.0263,-3.0687,1.2181,1.2185);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgWAbIAAg1IARAAQAcAAAAAaQAAAbgcAAgAgIAPIAEAAQANAAAAgPQAAgOgNAAIgEAAg");
	this.shape_55.setTransform(-13.8172,-3.0992,1.2181,1.2185);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(-63.1,-6.4,107.4,36.5), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoEBYIAAivIQJAAIAACvg");
	mask.setTransform(51.675,8.825);

	// Layer_3
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgYAlIAAhJIAUAAIAAA5IAdAAIAAAQg");
	this.shape_56.setTransform(83.25,13.85);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgYAlIAAhJIAUAAIAAA5IAdAAIAAAQg");
	this.shape_57.setTransform(77.4,13.85);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgJAlIAAhJIATAAIAABJg");
	this.shape_58.setTransform(72.5,13.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgdAlIAAhJIAlAAIAGABIAGACIAFADQACADAAACQACADAAAEQAAAEgCADIgCAFQgDACgDABIgFACIAHABIAEADIAEAFIABAIIgBAHIgEAGQgBACgDACIgGACIgGABIgGABgAgKAWIAKAAQAFAAADgCQACgDAAgDQAAgDgCgDQgEgCgEAAIgKAAgAgKgGIAKAAIAEgBIADgCIABgCIABgDIgBgDIgBgCIgDgCIgEAAIgKAAg");
	this.shape_59.setTransform(67.3,13.85);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AggAlIAAhJIAiAAIAKADQAFABADADQAEAEADAEQADAEABAFQABAGAAAGQAAAHgBAFIgEAKIgHAHQgDADgFABIgKADIgJABgAgMAVIAGAAIAIgBQAFgCACgDQACgCAAgEIABgJIgBgJQAAgDgCgCQgCgDgFgCIgIgBIgGAAg");
	this.shape_60.setTransform(57.35,13.85);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgIAmIgJgDIgHgGIgGgHIgEgKQgBgFgBgHQABgFABgGIAEgKQADgEADgDIAHgFIAJgDIAIgBIAJABQAEAAAEADIAIAFIAGAHIAEAKQACAGgBAFQABAHgCAFIgEAKIgGAHIgIAGIgIADIgJAAIgIAAgAgGgTQgDACgCACIgEAHIgBAIIABAJIAEAHQACADADACQADABADAAQAEAAADgBIAFgFQACgDABgEIABgJIgBgIQgBgEgCgDIgFgEQgDgCgEAAQgDAAgDACg");
	this.shape_61.setTransform(49.55,13.825);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgIAmIgIgDIgIgGIgGgHIgEgKQgCgFABgHQgBgFACgGIAEgKQACgEAEgDIAIgFIAIgDIAIgBIAJABQAEAAAFADIAHAFIAGAHIAEAKQABAGABAFQgBAHgBAFIgEAKIgGAHIgHAGIgJADIgJAAIgIAAgAgGgTQgEACgBACIgEAHIgBAIIABAJIAEAHQABADAEACQADABADAAQAEAAADgBIAFgFQADgDAAgEIABgJIgBgIQAAgEgDgDIgFgEQgDgCgEAAQgDAAgDACg");
	this.shape_62.setTransform(41.7,13.825);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgYAlIAAhJIAxAAIAAAQIgeAAIAAAQIAVAAIAAAOIgVAAIAAAbg");
	this.shape_63.setTransform(35.2,13.85);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAJAlIgNgaIgGAAIAAAaIgTAAIAAhJIAdAAIAMABIAJAEQAFADABAFQADAFAAAGQAAAJgEAEQgEAFgHACIAPAdgAgKgDIAJAAQAGAAACgCQADgDAAgEQAAgEgDgCQgCgCgGAAIgJAAg");
	this.shape_64.setTransform(25.825,13.85);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgNAkQgGgDgEgEQgEgDgBgHQgCgEAAgIIAAgrIAUAAIAAArQAAAHADAEQACADAFAAQAGAAADgDQACgEAAgHIAAgrIAUAAIAAArQAAAGgCAGQgBAHgEADQgEAEgGADQgFABgJAAQgIAAgFgBg");
	this.shape_65.setTransform(18.575,13.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgIAmIgJgDIgHgGIgGgHIgEgKQgBgFgBgHQABgFABgGIAEgKIAGgHIAHgFIAJgDIAIgBIAJABQAEAAAEADIAIAFIAGAHIAEAKQABAGAAAFQAAAHgBAFIgEAKIgGAHIgIAGIgIADIgJAAIgIAAgAgGgTIgFAEIgDAHIgCAIIACAJIADAHIAFAFQADABADAAQAEAAADgBIAFgFQACgDABgEQACgDgBgGQABgEgCgEQgBgEgCgDIgFgEQgDgCgEAAQgDAAgDACg");
	this.shape_66.setTransform(11.05,13.825);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgJAlIAAgfIgagqIAVAAIAOAaIAPgaIAVAAIgaAqIAAAfg");
	this.shape_67.setTransform(3.575,13.85);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgYAlIAAhJIAxAAIAAAQIgdAAIAAAQIAUAAIAAAOIgUAAIAAAbg");
	this.shape_68.setTransform(100.8,3.85);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgYAlIAAhJIAxAAIAAAQIgdAAIAAAQIAUAAIAAAOIgUAAIAAAbg");
	this.shape_69.setTransform(94.95,3.85);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgIAlIgIgDQgFgCgDgDIgGgHQgDgFgBgFQgBgFAAgHQAAgGABgFQABgGADgEQADgFADgDIAIgFIAIgDIAIgBIAJABIAIADIAIAFQAEADACAFIAEAKQABAFAAAGQAAAHgBAFIgEAKIgGAHIgIAFIgIADIgJACgAgGgUIgFAFQgDADAAAEIgBAIIABAJQAAAEADADIAFAFQADABADAAQAEAAADgBQADgDACgCIADgHIABgJIgBgIIgDgHQgCgCgDgDQgDgBgEAAQgDAAgDABg");
	this.shape_70.setTransform(87.825,3.85);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAYAkQgDgBgDgEIgFgIQgBgEAAgGQAAgGABgEIAFgHQADgEADgBQAGgCADAAIAJACIAHAFQACACACAFQABAEABAGQgBAGgBAEQgCAGgCACIgHAFIgJACQgDAAgGgCgAAdAEQgBACAAAHIABAKQACADACAAQAEAAABgDIAAgKIAAgKQgBgDgEAAQgCAAgCAEgAgeAlIArhJIARAAIgrBJgAgpAKIgHgFQgDgDgBgEQgBgEAAgGQAAgGABgEQABgGADgCQADgEAEgBQADgCAGAAQAFAAAEACQAEABADAEQACADABAFQACAEAAAGQAAAGgCAEIgDAHIgHAFQgEACgFAAQgFAAgEgCgAgkgWIgCAKQAAAHACACQABADADAAQADAAABgDIABgJIgBgKQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQgEAAAAADg");
	this.shape_71.setTransform(75.35,3.825);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgNAjQgGgDgEgFQgEgDgCgIQgCgHAAgJQAAgJACgGQACgHAEgFQAEgFAGgDQAHgCAGgBQAHABAGACQAHADAEAFQAEAHACAFIACAPQAAAGgCAKQgCAGgEAFQgEAGgHACQgGADgHABQgHgBgGgDgAgJgQQgDAFAAALQAAALAEAGQADAFAFABQAGgBADgFQADgGAAgLQAAgLgDgFQgEgGgFABQgFgBgEAGg");
	this.shape_72.setTransform(66.075,3.85);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgJAlIgIgBIgGgDIgGgEIAKgNIADADIAGABIAEABIAFABQAFAAADgDQADgDAAgFQAAgFgCgDQgDgCgFAAIgGABQgDABgDAEIgNgFIADgmIAvAAIgBAOIgfAAIgBANIACgBIAGgDIAGAAIALACQAEACADADQADADABAEQACAFAAAFQAAAGgCAFQgDAFgDADIgKAGQgGABgGABIgJgBg");
	this.shape_73.setTransform(59.45,3.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgIAlIgIgDQgFgCgDgDIgGgHQgDgFgBgFQgBgFAAgHQAAgGABgFQABgGADgEQADgFADgDIAIgFIAIgDIAIgBIAJABIAIADIAIAFQAEADACAFIAEAKQABAFAAAGQAAAHgBAFIgEAKIgGAHIgIAFIgIADIgJACgAgGgUIgFAFQgDADAAAEIgBAIIABAJQAAAEADADIAFAFQADABADAAQAEAAADgBQADgDACgCIADgHIABgJIgBgIIgDgHQgCgCgDgDQgDgBgEAAQgDAAgDABg");
	this.shape_74.setTransform(49.775,3.85);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgJAlIAAg5IgVAAIAAgQIA9AAIAAAQIgVAAIAAA5g");
	this.shape_75.setTransform(42.575,3.85);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgdAlIAAhJIAjAAIAIABIAGADIAGAFIADAHIABAJQAAAGgCADQAAACgDAFIgGAEIgHADIgGABIgPAAIAAAYgAgJgBIANgBIAEgBIACgEIAAgDIAAgEIgCgEIgEgCIgNAAg");
	this.shape_76.setTransform(33.8,3.85);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgNAkQgGgDgEgEQgEgEgBgGQgCgHAAgFIAAgrIAUAAIAAArQAAAIADADQACADAFAAQAHAAACgDQACgDAAgIIAAgrIAUAAIAAArQAAAIgCAEQgBAGgEAEQgEAEgGADQgFABgJABQgHgBgGgBg");
	this.shape_77.setTransform(26.575,3.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgJAlIAAg5IgVAAIAAgQIA9AAIAAAQIgVAAIAAA5g");
	this.shape_78.setTransform(17.275,3.85);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgaAlIAAhJIA0AAIAAAQIggAAIAAAMIAWAAIAAAPIgWAAIAAAOIAhAAIAAAQg");
	this.shape_79.setTransform(11.025,3.85);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgPAkQgEgCgGgGQgEgGgCgHQgCgGAAgJQAAgHADgIQACgIAEgEQAFgFAGgDQAIgCAGAAIAKABQAEAAAFADIAHAIQADAEACAIIgSAFIgDgGQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBIgDgCIgEgBIgEABIgFAEQgCACgBAEQgCAEAAAGIABAIIACAHIADAEIADACIAEABIACAAQAFAAADgCQADgDACgDIgLAAIAAgOIAeAAIAAAlIgQAAIAAgKIAAAAIgCAEIgEADIgFADIgHABQgKAAgFgCg");
	this.shape_80.setTransform(3.675,3.825);

	var maskedShapeInstanceList = [this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,103.4,17.7), null);


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

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AqRBaIAAizIUjAAIAACzg");
	mask_1.setTransform(65.825,8.975);

	// Layer_3
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgWBXIAAiGIgyAAIAAgnICRAAIAAAnIgxAAIAACGg");
	this.shape_81.setTransform(124.325,8.975);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAVBXIggg8IgNAAIAAA8IguAAIAAitIBEAAQAPAAAOADQANADAJAHQAKAHAFALQAFAKAAAQQAAAUgIAMQgKAMgQAFIAkBDgAgYgIIAUAAQAOAAAGgFQAHgEAAgLQAAgLgHgEQgGgFgOAAIgUAAg");
	this.shape_82.setTransform(108.75,8.975);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAkBXIgLghIg1AAIgMAhIgqAAIA9itIArAAIA9CtgAgRAVIAgAAIgPgvIgBAAg");
	this.shape_83.setTransform(91.725,8.95);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AhFBXIAAitIBBAAIARABIASADIAPAHQAHAEAGAGQAFAGADAKQADAKAAANQAAAMgDAKQgDAIgGAHQgFAFgHAFIgRAHIgRADIgRABIgSAAIAAA3gAgXgDIAUAAQAIAAAFgCQAFgBAEgDQADgDAAgEIACgJQAAgFgCgEQAAgEgDgDQgEgEgFgBQgFgCgIAAIgUAAg");
	this.shape_84.setTransform(75.9,8.975);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgXBXIAAiGIgxAAIAAgnICRAAIAAAnIgyAAIAACGg");
	this.shape_85.setTransform(54.025,8.975);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgYBXQgKgDgLgGQgMgIgFgFQgIgIgFgIIAjgWQAEAHAFAEQAEAFAHAEIAMAFIANABIAKAAQAEgBADgCQADgBADgEQACgEAAgDQAAgDgDgEIgHgFIgzgQIgOgGQgGgEgFgEQgGgHgCgGQgDgHAAgKQAAgNAFgKQAFgLAJgHQAIgGANgEQALgEAQAAQANAAALADQAMAEAIAEQAKAGAGAFIAMAMIggAaIgIgIIgLgHIgLgFIgLgCQgUAAAAANQAAAEADAEIAGAFIAJAEIApAMIAPAGQAHADAFAFQAFAGADAHQADAIAAAJQAAAMgEAIQgEALgJAHQgKAIgMAEQgOAFgVAAQgOAAgMgDg");
	this.shape_86.setTransform(38.175,8.975);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("Ag/BXIAAitIB7AAIAAAnIhMAAIAAAcIA2AAIAAAkIg2AAIAAAgIBQAAIAAAmg");
	this.shape_87.setTransform(23.075,8.975);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AhFhWIBXABIAcAGQAHAEAEAEQAFAGADAGQACAHAAAJQAAAKgDAGQgCAHgFAFQgEAFgHADIgNAEIAAAAQAHABAIACQAHADAFAFQAFAFADAHQACAJAAAJQAAAJgCAIQgEAIgEAFQgEAEgHAFQgHAEgHACIgOADIhaABgAgXAzIAXAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgEgMAAIgXAAgAgXgRIAWAAIAKgBIAHgDIAEgFQABgDAAgEQAAgEgBgDIgEgFIgHgEIgKgBIgWAAg");
	this.shape_88.setTransform(7.025,8.975);

	var maskedShapeInstanceList = [this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,131.7,18), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("Ag/BWIAAirIB7AAIAAAmIhMAAIAAAcIA2AAIAAAkIg2AAIAAAgIBQAAIAAAlg");
	this.shape_89.setTransform(170.2821,-90.9934,1.2473,1.2471);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAdBWIAAhGIg5AAIAABGIgvAAIAAirIAvAAIAABAIA5AAIAAhAIAvAAIAACrg");
	this.shape_90.setTransform(149.2033,-90.9934,1.2473,1.2471);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgXBWIAAiFIgxAAIAAgmICRAAIAAAmIgyAAIAACFg");
	this.shape_91.setTransform(128.4051,-90.9934,1.2473,1.2471);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgUBXQgMgCgHgFQgKgEgIgHQgJgIgFgKQgGgIgEgOQgDgNAAgQQAAgPADgNQAEgMAGgKQAFgLAJgGQAIgIAKgEQAKgGAJgBQALgDAJAAQAKAAAKADQAKABALAGQAIADAJAJQAHAFAHAMQAGAKADAMQAEANAAAPQAAARgEAMQgDAOgGAIQgGALgIAHQgKAIgHADQgJAFgMACQgKADgKAAQgJAAgLgDgAgQgvQgGAEgFAGQgFAIgDAJQgDAKABAKQgBALADALQADAKAFAGQAFAHAGAEQAKAEAGgBQAIABAIgEQAHgEAFgHQAFgGACgKQADgLAAgLQAAgKgDgKQgCgJgFgIQgFgGgHgEQgHgDgJAAQgIAAgIADg");
	this.shape_92.setTransform(227.6877,-120.176,1.2473,1.2471);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgWBWIAAiFIgyAAIAAgmICRAAIAAAmIgxAAIAACFg");
	this.shape_93.setTransform(206.7024,-120.176,1.2473,1.2471);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AhFBWIAAirIBTAAQAGAAALADQAIACAHAFQAIAEAFAGQAGAIADAIQACALAAALQAAANgDAKQgCAHgGAIQgHAGgHAEQgGAEgKADIgRADIgQAAIgTAAIAAA3gAgXgDIAUAAQAHAAAGgCQAFgBADgEQAEgDABgDQABgEAAgFIgBgJQgBgEgEgDQgDgDgFgCQgGgBgHgBIgUAAg");
	this.shape_94.setTransform(181.1022,-120.176,1.2473,1.2471);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgWBWIAAirIAuAAIAACrg");
	this.shape_95.setTransform(165.5113,-120.176,1.2473,1.2471);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAYBWIgohFIgNAQIAAA1IgvAAIAAirIAvAAIAAA+IAvg+IA2AAIg6BDIA/Bog");
	this.shape_96.setTransform(150.7935,-120.176,1.2473,1.2471);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgYBXQgOgFgHgEQgJgFgIgIQgIgJgFgHIAjgWQADAFAGAHIALAIIAMAEQAGACAHAAIAJgBIAIgCIAGgFQABgCAAgEQAAgFgCgDQgCgDgFgCIgKgEIgpgLIgOgHQgFgDgGgFQgFgGgDgHQgDgGAAgLQAAgNAFgLQAFgJAIgIQAJgHANgDQANgEAOAAQANAAALADQALADAJAFQAKAFAGAGIAMAMIggAaIgJgJIgKgHQgFgCgGgCQgGgCgFAAQgUAAAAANQAAAEADADQACAEAEACQADACAGABIAaAIQAIABAHADIAPAHQAFADAHAFQAEAFAEAIQADAIAAAJQAAAKgEALQgEAJgJAIQgJAIgNAEQgOAFgVAAQgOAAgMgDg");
	this.shape_97.setTransform(129.0599,-120.176,1.2473,1.2471);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(119.3,-131.4,119.00000000000001,51.2), null);


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
	this.instance = new lib.Symbol31();
	this.instance.setTransform(161.1,-97.5,1,1,0,0,0,64.4,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(111).to({regX:64.5,regY:6.8,scaleX:1.1223,scaleY:1.1223,x:161.2,y:-97.55},24,cjs.Ease.backInOut).wait(4).to({regX:64.4,regY:6.9,scaleX:1,scaleY:1,x:161.1,y:-97.5},14).wait(31));

	// Layer_4
	this.instance_1 = new lib.Symbol32();
	this.instance_1.setTransform(296.95,-97.4,1,1,0,0,0,66.3,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(135).to({regY:8.1,scaleX:1.1597,scaleY:1.1597,x:297.05},24,cjs.Ease.backInOut).wait(4).to({regY:8.2,scaleX:1,scaleY:1,x:296.95},14).wait(7));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBDQgLgDgFgEQgIgEgFgGIgKgNIAbgQIAGAIIAJAHIAJAEIAKABIAHAAIAGgDQADgBABgCQACgCAAgEQAAgDgCgCIgFgEIgngMIgLgFQgGgDgDgDQgDgEgDgFQgCgHAAgHQAAgJAEgJQAEgIAGgFQAIgGAIgCQAKgDALAAQALAAAHACQAJACAHAEQAGADAGAFIAJAKIgYAUIgHgGIgHgGIgJgDIgIgCQgPAAAAAKIABAGIAFAEIAHADIAgAJIALAFQAEACAFAEQAEAEACAGQACAFAAAIQAAAIgDAIQgDAHgGAGQgGAFgMAEQgKAEgQAAQgMAAgIgCg");
	this.shape.setTransform(424.125,-115.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgnAAIAAgdIBxAAIAAAdIgnAAIAABng");
	this.shape_1.setTransform(412.05,-115.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBDIAAiEIAjAAIAACEg");
	this.shape_2.setTransform(403.15,-115.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtBDIAAiEIBbAAIAAAdIg3AAIAAAbIAmAAIAAAbIgmAAIAAAxg");
	this.shape_3.setTransform(395.3,-115.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_4.setTransform(384.175,-115.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZBDIgyhKIAABKIgkAAIAAiEIAnAAIAvBJIABAAIAAhJIAjAAIAACEg");
	this.shape_5.setTransform(371.35,-115.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_6.setTransform(358.7,-115.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1hBIBOABQAEABAGADQAEABAFAFQAEAEACAEQACAHAAAGQAAAGgDAHQgBAEgEAFQgEADgFACIgKAEIAAAAIAMACQAFADAEADQAEAEACAGQACAGAAAHQAAAHgCAHQgDAGgDADIgIAHIgLAEIgLADIhFABgAgSAnIASAAQAKAAAEgEQAEgDAAgHQAAgHgEgDQgEgEgKAAIgSAAgAgSgMIARAAIAHgBIAGgDIADgEIABgGIgBgEIgDgFIgFgCIgHgBIgSAAg");
	this.shape_7.setTransform(346.375,-115.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag1BDIAAiEIA/AAIAOACQAHACAFAEQAHADACAFQAFAGACAGQACAGAAALQAAALgCAGQgDAHgEAEQgEAFgGAEIgMAEIgNADIgbAAIAAArgAgRgCIAPAAQAGAAAEgBQAEgCACgCQADgCABgDIAAgHIAAgHQgBgEgDgBQgDgEgDAAQgEgBgGgBIgPAAg");
	this.shape_8.setTransform(329.3,-115.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRBDIAAiEIAjAAIAACEg");
	this.shape_9.setTransform(319.7,-115.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAWBDIAAg2IgrAAIAAA2IgkAAIAAiEIAkAAIAAAxIArAAIAAgxIAkAAIAACEg");
	this.shape_10.setTransform(309.675,-115.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSBDQgLgDgFgEQgJgFgEgFQgFgFgFgIIAbgQIAGAIIAJAHIAJAEIAKABIAHAAIAGgDQADgBABgCQACgCAAgEQAAgDgCgCIgFgEIgngMIgLgFQgGgDgDgDQgDgEgDgFQgCgHAAgHQAAgJAEgJQAEgIAGgFQAIgGAIgCQAKgDALAAQALAAAHACQAJACAHAEQAGADAGAFIAJAKIgYAUIgHgGIgIgGIgIgDIgIgCQgPAAAAAKIABAGIAFAEIAHADIAgAJIALAFQAEACAFAEQAEAEACAGQACAFAAAIQAAAIgDAIQgDAHgGAGQgGAFgMAEQgKAEgQAAQgMAAgIgCg");
	this.shape_11.setTransform(296.375,-115.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAQBDIgYgvIgKAAIAAAvIgjAAIAAiEIAzAAQAOAAAJABQAMAEAFAEQAHAFAEAIQAEAIAAANQAAAPgGAJQgIAKgMAEIAcAzgAgSgGIAPAAQALAAAFgEQAEgDABgIQgBgJgEgDQgFgDgLgBIgPAAg");
	this.shape_12.setTransform(284,-115.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_13.setTransform(272,-115.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag1hBIA4AAIAWABIALAEQAFACADAEQAEAEACAEQACAFAAAIQAAAIgCAFQgCAFgEAEQgEADgFACIgKAEIAAAAIAMACQAFADAEADQAFAFABAFQACAGAAAHQAAAHgCAHQgCAFgEAEIgIAHIgLAEIgLADIhFABgAgSAnIASAAQAKAAAEgEQAFgDAAgHQAAgGgFgEQgEgEgKAAIgSAAgAgSgMIARAAIAIgBIAFgDIADgEIABgGIgBgEIgDgFIgFgCIgHgBIgSAAg");
	this.shape_14.setTransform(259.675,-115.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAlBDIAAhSIgDARIgSBBIgfAAIgVhUIAABUIgkAAIAAiEIAzAAIAXBZIAVhZIAyAAIAACEg");
	this.shape_15.setTransform(245.125,-115.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_16.setTransform(231.3,-115.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAlBDIAAhSIgVBSIgfAAIgThJIgCgLIAABUIgkAAIAAiEIAzAAIAXBZIAVhZIAyAAIAACEg");
	this.shape_17.setTransform(217.275,-115.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaBDIgzhKIAAAAIAABKIgkAAIAAiEIAmAAIAxBJIAAhJIAkAAIAACEg");
	this.shape_18.setTransform(197.1,-115.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRBDIAAiEIAjAAIAACEg");
	this.shape_19.setTransform(186.75,-115.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_20.setTransform(173.35,-115.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcBAQgKgFgIgJQgIgLgCgMQgEgMAAgPQAAgPAEgNQAFgOAIgHQAHgJAMgFQALgFAPAAQAKAAAIACQAHABAJAFQAGAFAHAJQAGAKADALIghAJQgBgFgDgFIgGgHQgDgDgDgBIgIgBIgIABQgGADgDAEQgDADgDAIQgCAHAAAMQAAAIACAHIADALQADAFADADIAGAEIAGACIAEABQAJAAAGgFQAGgFADgGIgUAAIAAgaIA2AAIAABEIgcAAIAAgSIgBAAIgDAGQgDAEgEADIgKAFQgFACgHAAQgRAAgLgFg");
	this.shape_21.setTransform(160.125,-115.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgtBDIAAiEIAkAAIAABmIA3AAIAAAeg");
	this.shape_22.setTransform(148.75,-115.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZBAQgJgEgIgHQgGgGgEgMQgDgJAAgOIAAhOIAkAAIAABOQAAAOAFAGQAEAHAKAAQALAAAEgHQAFgGABgOIAAhOIAjAAIAABOQAAAPgEAIQgCALgIAHQgGAHgLAEQgKADgPABQgOgBgLgDg");
	this.shape_23.setTransform(136.55,-115.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag6BDIAAiEIA+ABQAKABAIADQAJAEAGAEQAGAFAFAIQAGAHACAKQACAJAAANQAAAMgCALQgDAJgFAIQgEAHgHAFQgGAEgJAFQgJADgJABIgSACgAgWAlIAKAAQALAAAFgCQAHgCAEgFQAEgEACgHQABgGABgLQgBgJgBgHQgCgGgEgFQgEgEgHgDQgFgCgLAAIgKAAg");
	this.shape_24.setTransform(123.7,-115.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA3BDIgyhKIAABKIgjAAIAAiEIAlAAIAwBJIABAAIAAhJIAjAAIAACEgAhbBDIAAiEIAlAAIAACEg");
	this.shape_25.setTransform(106.9,-115.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(184));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(88.1,-122.4,341.9,34.7);


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
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(236.7,-26.8,2.2738,2.2719,0,0,0,51.5,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119.6,-47.7,235.00000000000003,40.1);


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


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(471.1,-123.65,1.2609,1.259,0,0,0,65.8,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(388.2,-135.2,166.00000000000006,22.599999999999994), null);


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

	// Layer_2
	this.instance = new lib.Group();
	this.instance.setTransform(364,45.2,2.4268,0.4564,0,0,0,150,125);
	this.instance.alpha = 0.3516;
	this.instance.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.img03();
	this.instance_1.setTransform(0,-11,1.1458,1.1456);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,-11.8,728.7,115.39999999999999), null);


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

	// Layer_2
	this.instance = new lib.Group();
	this.instance.setTransform(364,45.75,2.4267,0.4546,0,0,0,150,125);
	this.instance.alpha = 0.25;
	this.instance.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol11("synched",0);
	this.instance_1.setTransform(172.95,133.25,1.1531,1.1531,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,-11,728.8,115.4), null);


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
	this.instance.setTransform(363.75,44.45,2.425,0.4546,0,0,0,150,124.8);
	this.instance.alpha = 0.25;
	this.instance.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.img01();
	this.instance_1.setTransform(0,-12,1.1439,1.1369);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,-12.3,727.5,114), null);


// stage content:
(lib.AMEX_DV360_v4_320x50 = function(mode,startPosition,loop,reversed) {
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
	this.replay_btn.setTransform(271.45,9.2,0.4041,0.4132,0,0,0,11.2,11);
	new cjs.ButtonHelper(this.replay_btn, 0, 1, 2, false, new lib.Symbol20(), 3);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(895));

	// Layer_18
	this.ctaBTN = new lib.Symbol20();
	this.ctaBTN.name = "ctaBTN";
	this.ctaBTN.setTransform(10.05,86.4,14.3578,2.298,0,0,0,0.7,37.6);
	new cjs.ButtonHelper(this.ctaBTN, 0, 1, 2, false, new lib.Symbol20(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ctaBTN).wait(895));

	// logo
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(311.7,-11.55,0.3011,0.3011,0,0,0,37.1,12.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({regY:13,y:10.7,alpha:1},24,cjs.Ease.backOut).wait(854));

	// Layer_1
	this.instance_1 = new lib.Symbol28();
	this.instance_1.setTransform(104.65,103,0.4398,0.4398,0,0,0,1,1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(666).to({_off:false},0).to({alpha:1},22).wait(207));

	// t_c
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(115.15,105.05,0.4398,0.4398,0,0,0,22.2,3.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(194).to({_off:false},0).to({alpha:1},22).wait(679));

	// cta
	this.instance_3 = new lib.ClipGroup();
	this.instance_3.setTransform(305.8,-152.1,0.4398,0.4398,0,0,0,81,17.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(628).to({_off:false},0).wait(1).to({regX:4.5,regY:435.1,scaleX:0.4324,scaleY:0.4324,x:272.1,y:31.5,alpha:0.0717},0).wait(1).to({scaleX:0.425,scaleY:0.4249,y:31.55,alpha:0.1439},0).wait(1).to({scaleX:0.4176,scaleY:0.4174,x:272.15,alpha:0.2164},0).wait(1).to({scaleX:0.4101,scaleY:0.4099,y:31.6,alpha:0.2891},0).wait(1).to({scaleX:0.4026,scaleY:0.4024,y:31.7,alpha:0.3617},0).wait(1).to({scaleX:0.3952,scaleY:0.3949,x:272.2,y:31.75,alpha:0.4338},0).wait(1).to({scaleX:0.3879,scaleY:0.3876,x:272.15,y:31.8,alpha:0.505},0).wait(1).to({scaleX:0.3807,scaleY:0.3804,alpha:0.5745},0).wait(1).to({scaleX:0.3738,scaleY:0.3735,x:272.2,y:31.85,alpha:0.6416},0).wait(1).to({scaleX:0.3673,scaleY:0.3669,y:31.9,alpha:0.7049},0).wait(1).to({scaleX:0.3613,scaleY:0.3609,alpha:0.7632},0).wait(1).to({scaleX:0.3559,scaleY:0.3555,y:31.95,alpha:0.8154},0).wait(1).to({scaleX:0.3513,scaleY:0.3508,x:272.25,y:32,alpha:0.8605},0).wait(1).to({scaleX:0.3474,scaleY:0.3469,x:272.2,alpha:0.8981},0).wait(1).to({scaleX:0.3443,scaleY:0.3438,y:32.05,alpha:0.9284},0).wait(1).to({scaleX:0.3419,scaleY:0.3413,x:272.25,alpha:0.9521},0).wait(1).to({scaleX:0.34,scaleY:0.3395,alpha:0.9702},0).wait(1).to({scaleX:0.3386,scaleY:0.3381,x:272.2,y:32.1,alpha:0.9837},0).wait(1).to({scaleX:0.3376,scaleY:0.3371,alpha:0.9935},0).wait(1).to({scaleX:0.3369,scaleY:0.3363,alpha:1},0).wait(1).to({scaleX:0.3364,scaleY:0.3359},0).wait(1).to({scaleX:0.3361,scaleY:0.3356},0).wait(1).to({scaleX:0.336,scaleY:0.3354},0).wait(1).to({scaleX:0.3359,scaleY:0.3353},0).wait(1).to({scaleY:0.3354,y:32.05},0).wait(1).to({scaleX:0.336,scaleY:0.3355,y:32.1},0).wait(1).to({scaleX:0.3362,scaleY:0.3356,y:32.05},0).wait(1).to({scaleX:0.3363,scaleY:0.3358,y:32.1},0).wait(1).to({scaleX:0.3365,scaleY:0.336},0).wait(1).to({scaleX:0.3367,scaleY:0.3362,y:32.05},0).wait(1).to({regX:81.3,regY:18,scaleX:0.3369,scaleY:0.3364,x:298.05,y:-108.3},0).wait(66).to({regX:81.2,regY:17.9,scaleX:0.375,scaleY:0.3743,x:300.25,y:-124.15},19,cjs.Ease.backInOut).wait(5).to({regX:81.3,regY:18,scaleX:0.3369,scaleY:0.3364,x:298.05,y:-108.3},20,cjs.Ease.quadInOut).wait(126));

	// replay_svg
	this.instance_4 = new lib.Symbol19();
	this.instance_4.setTransform(271.4,8.6,0.3931,0.3931,0,0,0,8.8,9.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(880).to({_off:false},0).to({alpha:1},14).wait(1));

	// t_indulge
	this.instance_5 = new lib.Symbol18();
	this.instance_5.setTransform(77.65,38.95,0.5582,0.5542,0,0,0,132.4,29.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(641).to({_off:false},0).wait(1).to({regX:259.4,regY:-105.1,x:148.55,y:-32.45,alpha:0.0601},0).wait(1).to({y:-29.45,alpha:0.1205},0).wait(1).to({y:-26.4,alpha:0.1811},0).wait(1).to({y:-23.4,alpha:0.2419},0).wait(1).to({y:-20.35,alpha:0.3028},0).wait(1).to({y:-17.3,alpha:0.3636},0).wait(1).to({y:-14.25,alpha:0.4241},0).wait(1).to({y:-11.3,alpha:0.484},0).wait(1).to({y:-8.35,alpha:0.5428},0).wait(1).to({y:-5.45,alpha:0.6003},0).wait(1).to({y:-2.7,alpha:0.6556},0).wait(1).to({y:-0.05,alpha:0.7082},0).wait(1).to({y:2.4,alpha:0.7572},0).wait(1).to({y:4.6,alpha:0.802},0).wait(1).to({y:6.6,alpha:0.8419},0).wait(1).to({y:8.35,alpha:0.8766},0).wait(1).to({y:9.85,alpha:0.9061},0).wait(1).to({y:11.05,alpha:0.9305},0).wait(1).to({y:12.05,alpha:0.9504},0).wait(1).to({y:12.85,alpha:0.9663},0).wait(1).to({y:13.45,alpha:0.9787},0).wait(1).to({y:13.95,alpha:0.9883},0).wait(1).to({y:14.3,alpha:0.9956},0).wait(1).to({y:14.6,alpha:1},0).wait(1).to({y:14.75},0).wait(1).to({y:14.9},0).wait(1).to({y:15},0).wait(2).to({y:15.05},0).wait(1).to({y:15},0).wait(1).to({y:14.95},0).wait(1).to({y:14.9},0).wait(1).to({y:14.85},0).wait(1).to({y:14.75},0).wait(1).to({y:14.7},0).wait(1).to({y:14.6},0).wait(1).to({regX:132.4,regY:29.1,x:77.65,y:88.95},0).wait(217));

	// t_best_part
	this.instance_6 = new lib.ClipGroup_6();
	this.instance_6.setTransform(149.9,80.1,0.3189,0.3189,0,0,0,62.1,8.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(-87.2,14.85,0.313,0.3106,0,0,0,36.4,8.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45).to({_off:false},0).to({regX:62,regY:8.4,scaleX:0.4398,scaleY:0.4398,x:98.65,y:96.95,alpha:1},42,cjs.Ease.elasticOut).wait(71).to({regY:8.6,x:98.6,y:129.4,alpha:0},16,cjs.Ease.quadInOut).to({_off:true},1).wait(720));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(613).to({_off:false},0).to({x:16.8,alpha:1},24,cjs.Ease.quintOut).wait(258));

	// t_skip_to
	this.instance_8 = new lib.ClipGroup_5();
	this.instance_8.setTransform(41.25,54.3,0.2888,0.2888,0,0,0,45.6,19.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.Symbol3copy();
	this.instance_9.setTransform(-57.55,5,0.193,0.1936,0,0,0,3.1,2.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(26).to({_off:false},0).to({regX:44.9,regY:19.2,scaleX:0.4398,scaleY:0.4398,x:26.35,y:71.7,alpha:1},42,cjs.Ease.elasticOut).wait(90).to({regY:19.4,y:26.05,alpha:0},16,cjs.Ease.quadInOut).to({_off:true},1).wait(720));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(613).to({_off:false},0).to({x:4.45,alpha:1},24,cjs.Ease.quintOut).wait(258));

	// arrows
	this.instance_10 = new lib.Symbol2("synched",0);
	this.instance_10.setTransform(-287.75,62.4,0.4398,0.4398,0,0,0,691.8,84);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(598).to({_off:false},0).to({x:-184.65,y:64.15},28,cjs.Ease.sineOut).to({regX:691.9,x:-45.1,y:63.95},268,cjs.Ease.get(0.05)).wait(1));

	// img03_arrow_copy
	this.instance_11 = new lib.Symbol21();
	this.instance_11.setTransform(-173.95,112.65,1.6656,1.6655,0,0,0,171.5,71.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(593).to({_off:false},0).to({x:417.1,y:115.45},26,cjs.Ease.quadOut).wait(276));

	// img03_mask_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_593 = new cjs.Graphics().p("Eg18AEFIAAoJMBB6AAAIDmECIjmEHg");
	var mask_graphics_594 = new cjs.Graphics().p("EgydAEFIAAoJMBB6AAAIDmECIjmEHg");
	var mask_graphics_595 = new cjs.Graphics().p("EgvHAEFIAAoJMBB6AAAIDmECIjlEHg");
	var mask_graphics_596 = new cjs.Graphics().p("Egr5AEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_597 = new cjs.Graphics().p("Ego1AEFIAAoJMBB6AAAIDmECIjlEHg");
	var mask_graphics_598 = new cjs.Graphics().p("Egl5AEFIAAoJMBB6AAAIDmECIjlEHg");
	var mask_graphics_599 = new cjs.Graphics().p("EgjFAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_600 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_601 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_602 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_603 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_604 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_605 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_606 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_607 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_608 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_609 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_610 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_611 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_612 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_613 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_614 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_615 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_616 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_617 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_618 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_graphics_619 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(593).to({graphics:mask_graphics_593,x:-345.3171,y:22.9596}).wait(1).to({graphics:mask_graphics_594,x:-323.0199,y:23.1709}).wait(1).to({graphics:mask_graphics_595,x:-301.597,y:23.3738}).wait(1).to({graphics:mask_graphics_596,x:-281.0486,y:23.5685}).wait(1).to({graphics:mask_graphics_597,x:-261.3745,y:23.7549}).wait(1).to({graphics:mask_graphics_598,x:-242.5749,y:23.933}).wait(1).to({graphics:mask_graphics_599,x:-224.6497,y:24.1028}).wait(1).to({graphics:mask_graphics_600,x:-192.7541,y:24.2643}).wait(1).to({graphics:mask_graphics_601,x:-160.4013,y:24.4176}).wait(1).to({graphics:mask_graphics_602,x:-129.7972,y:24.5626}).wait(1).to({graphics:mask_graphics_603,x:-100.9419,y:24.6993}).wait(1).to({graphics:mask_graphics_604,x:-73.8355,y:24.8277}).wait(1).to({graphics:mask_graphics_605,x:-48.4778,y:24.9478}).wait(1).to({graphics:mask_graphics_606,x:-24.869,y:25.0596}).wait(1).to({graphics:mask_graphics_607,x:-3.0089,y:25.1632}).wait(1).to({graphics:mask_graphics_608,x:17.1023,y:25.2584}).wait(1).to({graphics:mask_graphics_609,x:35.4648,y:25.3454}).wait(1).to({graphics:mask_graphics_610,x:52.0784,y:25.4241}).wait(1).to({graphics:mask_graphics_611,x:66.9432,y:25.4945}).wait(1).to({graphics:mask_graphics_612,x:80.0593,y:25.5566}).wait(1).to({graphics:mask_graphics_613,x:91.4265,y:25.6105}).wait(1).to({graphics:mask_graphics_614,x:101.0449,y:25.6561}).wait(1).to({graphics:mask_graphics_615,x:108.9145,y:25.6933}).wait(1).to({graphics:mask_graphics_616,x:115.0353,y:25.7223}).wait(1).to({graphics:mask_graphics_617,x:119.4074,y:25.743}).wait(1).to({graphics:mask_graphics_618,x:122.0306,y:25.7555}).wait(1).to({graphics:mask_graphics_619,x:122.9593,y:25.7596}).wait(276));

	// Layer_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52565A").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(159.9907,25.0092,1.0666,0.2001);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(593).to({_off:false},0).wait(302));

	// card_t
	this.instance_12 = new lib.Symbol7();
	this.instance_12.setTransform(-47.2,16.15,0.3065,0.3052,0,0,0,37.4,10);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({_off:false},0).to({x:17.8,alpha:1},30,cjs.Ease.quintOut).to({_off:true},575).wait(276));

	// card
	this.instance_13 = new lib.Symbol3();
	this.instance_13.setTransform(-54.2,6.55,0.1893,0.1884,0,0,0,4,6.7);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(14).to({_off:false},0).to({x:5.8,alpha:1},30,cjs.Ease.quintOut).to({_off:true},575).wait(276));

	// t_with
	this.instance_14 = new lib.Symbol16();
	this.instance_14.setTransform(130.25,79.65,0.3557,0.3557,0,0,0,72.1,25);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(473).to({_off:false},0).to({regY:24.8,scaleX:0.4398,scaleY:0.4398,x:93.5,y:90.4,alpha:1},37,cjs.Ease.elasticOut).wait(25).to({regX:72.2,regY:24.9,scaleX:0.478,scaleY:0.478,x:78.5,y:95.25},15,cjs.Ease.quadInOut).wait(5).to({regX:72.1,regY:24.8,scaleX:0.4398,scaleY:0.4398,x:93.5,y:90.4},16,cjs.Ease.quadInOut).to({_off:true},48).wait(276));

	// img03_arrow
	this.instance_15 = new lib.Symbol21();
	this.instance_15.setTransform(-174.3,112.65,1.6656,1.6655,0,0,0,171.5,71.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(447).to({_off:false},0).to({x:417.1,y:115.45},26,cjs.Ease.quadOut).to({_off:true},146).wait(276));

	// img03_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_447 = new cjs.Graphics().p("Eg1+AEFIAAoJMBB6AAAIDmECIjlEHg");
	var mask_1_graphics_448 = new cjs.Graphics().p("EgyfAEFIAAoJMBB6AAAIDmECIjlEHg");
	var mask_1_graphics_449 = new cjs.Graphics().p("EgvIAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_450 = new cjs.Graphics().p("Egr7AEFIAAoJMBB6AAAIDmECIjlEHg");
	var mask_1_graphics_451 = new cjs.Graphics().p("Ego2AEFIAAoJMBB6AAAIDmECIjlEHg");
	var mask_1_graphics_452 = new cjs.Graphics().p("Egl6AEFIAAoJMBB6AAAIDmECIjlEHg");
	var mask_1_graphics_453 = new cjs.Graphics().p("EgjHAEFIAAoJMBB7AAAIDlECIjlEHg");
	var mask_1_graphics_454 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_455 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_456 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_457 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_458 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_459 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_460 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_461 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_462 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_463 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_464 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_465 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_466 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_467 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_468 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_469 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_470 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_471 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_472 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_1_graphics_473 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(447).to({graphics:mask_1_graphics_447,x:-345.4921,y:22.9596}).wait(1).to({graphics:mask_1_graphics_448,x:-323.1817,y:23.1709}).wait(1).to({graphics:mask_1_graphics_449,x:-301.7461,y:23.3738}).wait(1).to({graphics:mask_1_graphics_450,x:-281.1855,y:23.5685}).wait(1).to({graphics:mask_1_graphics_451,x:-261.4998,y:23.7549}).wait(1).to({graphics:mask_1_graphics_452,x:-242.6891,y:23.933}).wait(1).to({graphics:mask_1_graphics_453,x:-224.7532,y:24.1028}).wait(1).to({graphics:mask_1_graphics_454,x:-192.941,y:24.2643}).wait(1).to({graphics:mask_1_graphics_455,x:-160.569,y:24.4176}).wait(1).to({graphics:mask_1_graphics_456,x:-129.9468,y:24.5626}).wait(1).to({graphics:mask_1_graphics_457,x:-101.0745,y:24.6993}).wait(1).to({graphics:mask_1_graphics_458,x:-73.952,y:24.8277}).wait(1).to({graphics:mask_1_graphics_459,x:-48.5793,y:24.9478}).wait(1).to({graphics:mask_1_graphics_460,x:-24.9565,y:25.0596}).wait(1).to({graphics:mask_1_graphics_461,x:-3.0835,y:25.1632}).wait(1).to({graphics:mask_1_graphics_462,x:17.0397,y:25.2584}).wait(1).to({graphics:mask_1_graphics_463,x:35.413,y:25.3454}).wait(1).to({graphics:mask_1_graphics_464,x:52.0365,y:25.4241}).wait(1).to({graphics:mask_1_graphics_465,x:66.9101,y:25.4945}).wait(1).to({graphics:mask_1_graphics_466,x:80.0339,y:25.5566}).wait(1).to({graphics:mask_1_graphics_467,x:91.4079,y:25.6105}).wait(1).to({graphics:mask_1_graphics_468,x:101.032,y:25.6561}).wait(1).to({graphics:mask_1_graphics_469,x:108.9062,y:25.6933}).wait(1).to({graphics:mask_1_graphics_470,x:115.0307,y:25.7223}).wait(1).to({graphics:mask_1_graphics_471,x:119.4053,y:25.743}).wait(1).to({graphics:mask_1_graphics_472,x:122.03,y:25.7555}).wait(1).to({graphics:mask_1_graphics_473,x:122.9593,y:25.7596}).wait(146).to({graphics:null,x:0,y:0}).wait(276));

	// t_shop
	this.instance_16 = new lib.Symbol15();
	this.instance_16.setTransform(62.85,30.15,0.345,0.345,0,0,0,111.5,16);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(459).to({_off:false},0).to({regX:111.3,regY:15.9,scaleX:0.4398,scaleY:0.4398,x:55.75,y:34,alpha:1},33,cjs.Ease.elasticOut).to({_off:true},127).wait(276));

	// img3
	this.instance_17 = new lib.Symbol24();
	this.instance_17.setTransform(95.25,73.15,0.4398,0.4398,0,0,0,216.6,155);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(447).to({_off:false},0).to({regX:216.5,regY:154.9,scaleX:0.5174,scaleY:0.5174,x:82.05,y:84.1},171).to({_off:true},1).wait(276));

	// Symbol_13
	this.instance_18 = new lib.Symbol13("synched",0);
	this.instance_18.setTransform(142.35,75.4,0.3074,0.3074,0,0,0,87.4,16.1);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(314).to({_off:false},0).to({regX:86.9,regY:15.9,scaleX:0.4398,scaleY:0.4398,x:86.8,y:94.2,alpha:1},36,cjs.Ease.elasticOut).wait(33).to({startPosition:0},0).to({regX:86.6,scaleX:0.4716,scaleY:0.4718,x:73.45,y:98.8},14,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({regX:86.9,scaleX:0.4398,scaleY:0.4398,x:86.8,y:94.2},14,cjs.Ease.quadInOut).to({_off:true},58).wait(421));

	// img02_arrow
	this.instance_19 = new lib.Symbol21();
	this.instance_19.setTransform(-176.75,115.45,1.6656,1.6655,0,0,0,171.5,71.1);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(288).to({_off:false},0).to({x:417.1},26,cjs.Ease.quadOut).to({_off:true},160).wait(421));

	// img02_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_288 = new cjs.Graphics().p("Eg2KAEFIAAoJMBB6AAAIDmECIjmEHg");
	var mask_2_graphics_289 = new cjs.Graphics().p("EgyqAEFIAAoJMBB6AAAIDmECIjmEHg");
	var mask_2_graphics_290 = new cjs.Graphics().p("EgvTAEFIAAoJMBB6AAAIDmECIjlEHg");
	var mask_2_graphics_291 = new cjs.Graphics().p("EgsEAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_292 = new cjs.Graphics().p("Ego/AEFIAAoJMBB6AAAIDmECIjlEHg");
	var mask_2_graphics_293 = new cjs.Graphics().p("EgmCAEFIAAoJMBB6AAAIDmECIjlEHg");
	var mask_2_graphics_294 = new cjs.Graphics().p("EgjOAEFIAAoJMBB6AAAIDmECIjlEHg");
	var mask_2_graphics_295 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_296 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_297 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_298 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_299 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_300 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_301 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_302 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_303 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_304 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_305 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_306 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_307 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_308 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_309 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_310 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_311 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_312 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_313 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");
	var mask_2_graphics_314 = new cjs.Graphics().p("EgivAEFIAAoJMBB6AAAIDlECIjlEHg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(288).to({graphics:mask_2_graphics_288,x:-346.7171,y:25.7596}).wait(1).to({graphics:mask_2_graphics_289,x:-324.3142,y:25.7596}).wait(1).to({graphics:mask_2_graphics_290,x:-302.7899,y:25.7596}).wait(1).to({graphics:mask_2_graphics_291,x:-282.1441,y:25.7596}).wait(1).to({graphics:mask_2_graphics_292,x:-262.3769,y:25.7596}).wait(1).to({graphics:mask_2_graphics_293,x:-243.4882,y:25.7596}).wait(1).to({graphics:mask_2_graphics_294,x:-225.4781,y:25.7596}).wait(1).to({graphics:mask_2_graphics_295,x:-194.2494,y:25.7596}).wait(1).to({graphics:mask_2_graphics_296,x:-161.7433,y:25.7596}).wait(1).to({graphics:mask_2_graphics_297,x:-130.9942,y:25.7596}).wait(1).to({graphics:mask_2_graphics_298,x:-102.0023,y:25.7596}).wait(1).to({graphics:mask_2_graphics_299,x:-74.7674,y:25.7596}).wait(1).to({graphics:mask_2_graphics_300,x:-49.2896,y:25.7596}).wait(1).to({graphics:mask_2_graphics_301,x:-25.569,y:25.7596}).wait(1).to({graphics:mask_2_graphics_302,x:-3.6054,y:25.7596}).wait(1).to({graphics:mask_2_graphics_303,x:16.6011,y:25.7596}).wait(1).to({graphics:mask_2_graphics_304,x:35.0506,y:25.7596}).wait(1).to({graphics:mask_2_graphics_305,x:51.7429,y:25.7596}).wait(1).to({graphics:mask_2_graphics_306,x:66.6781,y:25.7596}).wait(1).to({graphics:mask_2_graphics_307,x:79.8563,y:25.7596}).wait(1).to({graphics:mask_2_graphics_308,x:91.2774,y:25.7596}).wait(1).to({graphics:mask_2_graphics_309,x:100.9414,y:25.7596}).wait(1).to({graphics:mask_2_graphics_310,x:108.8483,y:25.7596}).wait(1).to({graphics:mask_2_graphics_311,x:114.9981,y:25.7596}).wait(1).to({graphics:mask_2_graphics_312,x:119.3908,y:25.7596}).wait(1).to({graphics:mask_2_graphics_313,x:122.0264,y:25.7596}).wait(1).to({graphics:mask_2_graphics_314,x:122.9593,y:25.7596}).wait(160).to({graphics:null,x:0,y:0}).wait(421));

	// t_get_up
	this.instance_20 = new lib.Symbol12("synched",0);
	this.instance_20.setTransform(60.3,26.45,0.2674,0.2674,0,0,0,93.3,16.1);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(297).to({_off:false},0).to({regX:93.1,regY:15.9,scaleX:0.4398,scaleY:0.4398,x:47.3,y:33.7,alpha:1},33,cjs.Ease.elasticOut).to({_off:true},144).wait(421));

	// img02
	this.instance_21 = new lib.Symbol23();
	this.instance_21.setTransform(65.95,60,0.4398,0.4398,0,0,0,150,125);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(288).to({_off:false},0).to({regX:149.9,regY:124.9,scaleX:0.5007,scaleY:0.5007,x:50.25,y:64.2},185).to({_off:true},1).wait(421));

	// t_and_get
	this.instance_22 = new lib.Symbol5();
	this.instance_22.setTransform(145.95,74.95,0.3292,0.3292,0,0,0,57.7,23.6);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(185).to({_off:false},0).to({regX:57.6,regY:23.4,scaleX:0.4398,scaleY:0.4398,x:100.2,y:89.85,alpha:1},38,cjs.Ease.elasticOut).to({_off:true},92).wait(580));

	// t_spend
	this.instance_23 = new lib.Symbol4();
	this.instance_23.setTransform(58.15,30.1,0.3572,0.3572,0,0,0,101.2,16.6);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(175).to({_off:false},0).to({scaleX:0.4398,scaleY:0.4398,x:51.1,y:33.5,alpha:1},38,cjs.Ease.elasticOut).to({_off:true},102).wait(580));

	// arrows_copy (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_13 = new cjs.Graphics().p("AR+DSICXitIiXioIBwAAICXCoIiXCtgAOVDSICXitIiXioIBwAAICXCoIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXioIBxAAICWCoIiWCtgAHDDSICXitIiXioIBwAAICXCoIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXioIBwAAICXCoIiXCtgAgODSICWitIiWioIBvAAICXCoIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYioIBxAAICWCoIiWCtgAnfDSICXitIiYioIBwAAICYCoIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXioIBwAAICXCoIiXCtgAuyDSICXitIiXioIBwAAICXCoIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXioIBwAAICXCoIiXCtgA2DDSICWitIiXioIBwAAICYCoIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AR+DSICXitIiXioIBwAAICXCoIiXCtgAOVDSICXitIiXioIBwAAICXCoIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXioIBxAAICWCoIiWCtgAHDDSICXitIiXioIBwAAICXCoIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXioIBwAAICXCoIiXCtgAgODSICWitIiWioIBvAAICXCoIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYioIBxAAICWCoIiWCtgAnfDSICXitIiYioIBwAAICYCoIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXioIBwAAICXCoIiXCtgAuyDSICXitIiXioIBwAAICXCoIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXioIBwAAICXCoIiXCtgA2DDSICWitIiXioIBwAAICYCoIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AR+DSICXitIiXioIBwAAICXCoIiXCtgAOVDSICXitIiXioIBwAAICXCoIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXioIBxAAICWCoIiWCtgAHDDSICXitIiXioIBwAAICXCoIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXioIBwAAICXCoIiXCtgAgODSICWitIiWioIBvAAICXCoIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYioIBxAAICWCoIiWCtgAnfDSICXitIiYioIBwAAICYCoIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXioIBwAAICXCoIiXCtgAuyDSICXitIiXioIBwAAICXCoIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXioIBwAAICXCoIiXCtgA2DDSICWitIiXioIBwAAICYCoIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AR+DSICXitIiXioIBwAAICXCoIiXCtgAOVDSICXitIiXioIBwAAICXCoIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXioIBxAAICWCoIiWCtgAHDDSICXitIiXioIBwAAICXCoIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXioIBwAAICXCoIiXCtgAgODSICWitIiWioIBvAAICXCoIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYioIBxAAICWCoIiWCtgAnfDSICXitIiYioIBwAAICYCoIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXioIBwAAICXCoIiXCtgAuyDSICXitIiXioIBwAAICXCoIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXioIBwAAICXCoIiXCtgA2DDSICWitIiXioIBwAAICYCoIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AR+DSICXitIiXioIBwAAICXCoIiXCtgAOVDSICXitIiXioIBwAAICXCoIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXioIBxAAICWCoIiWCtgAHDDSICXitIiXioIBwAAICXCoIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXioIBwAAICXCoIiXCtgAgODSICWitIiWioIBvAAICXCoIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYioIBxAAICWCoIiWCtgAnfDSICXitIiYioIBwAAICYCoIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXioIBwAAICXCoIiXCtgAuyDSICXitIiXioIBwAAICXCoIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXioIBwAAICXCoIiXCtgA2DDSICWitIiXioIBwAAICYCoIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AR+DSICXitIiXioIBwAAICXCoIiXCtgAOVDSICXitIiXioIBwAAICXCoIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXioIBxAAICWCoIiWCtgAHDDSICXitIiXioIBwAAICXCoIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXioIBwAAICXCoIiXCtgAgODSICWitIiWioIBvAAICXCoIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYioIBxAAICWCoIiWCtgAnfDSICXitIiYioIBwAAICYCoIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXioIBwAAICXCoIiXCtgAuyDSICXitIiXioIBwAAICXCoIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXioIBwAAICXCoIiXCtgA2DDSICWitIiXioIBwAAICYCoIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_19 = new cjs.Graphics().p("AR+DSICXitIiXioIBwAAICXCoIiXCtgAOVDSICXitIiXioIBwAAICXCoIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXioIBxAAICWCoIiWCtgAHDDSICXitIiXioIBwAAICXCoIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXioIBwAAICXCoIiXCtgAgODSICWitIiWioIBvAAICXCoIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYioIBxAAICWCoIiWCtgAnfDSICXitIiYioIBwAAICYCoIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXioIBwAAICXCoIiXCtgAuyDSICXitIiXioIBwAAICXCoIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXioIBwAAICXCoIiXCtgA2DDSICWitIiXioIBwAAICYCoIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AR+DSICXitIiXioIBwAAICXCoIiXCtgAOVDSICXitIiXioIBwAAICXCoIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXioIBxAAICWCoIiWCtgAHDDSICXitIiXioIBwAAICXCoIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXioIBwAAICXCoIiXCtgAgODSICWitIiWioIBvAAICXCoIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYioIBxAAICWCoIiWCtgAnfDSICXitIiYioIBwAAICYCoIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXioIBwAAICXCoIiXCtgAuyDSICXitIiXioIBwAAICXCoIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXioIBwAAICXCoIiXCtgA2DDSICWitIiXioIBwAAICYCoIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AR+DSICXitIiXioIBwAAICXCoIiXCtgAOVDSICXitIiXioIBwAAICXCoIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXioIBxAAICWCoIiWCtgAHDDSICXitIiXioIBwAAICXCoIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXioIBwAAICXCoIiXCtgAgODSICWitIiWioIBvAAICXCoIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYioIBxAAICWCoIiWCtgAnfDSICXitIiYioIBwAAICYCoIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXioIBwAAICXCoIiXCtgAuyDSICXitIiXioIBwAAICXCoIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXioIBwAAICXCoIiXCtgA2DDSICWitIiXioIBwAAICYCoIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTilIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUilIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUilIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTilIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTilIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUilIhkAAg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTilIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUilIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUilIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTilIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTilIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUilIhkAAg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTilIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUilIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUilIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTilIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTilIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUilIhkAAg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTilIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUilIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUilIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTilIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTilIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUilIhkAAg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTilIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUilIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUilIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTilIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTilIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUilIhkAAg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTilIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUilIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUilIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTilIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTilIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUilIhkAAg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTilIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUilIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUilIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTilIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTilIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUilIhkAAg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCpIiXCtgAOVDSICXitIiXipIBwAAICXCpIiXCtgAQyAlIiTCpIBkAAICTipIiTilIhlAAgAKtDSICWitIiXipIBxAAICWCpIiWCtgAHDDSICXitIiXipIBwAAICXCpIiXCtgAJgAlIiTCpIBkAAICUipIiUilIhkAAgADbDSICWitIiXipIBwAAICXCpIiXCtgAgODSICWitIiWipIBvAAICXCpIiXCtgACOAlIiSCpIBjAAICUipIiUilIhjAAgAj2DSICXitIiYipIBxAAICWCpIiWCtgAnfDSICXitIiYipIBwAAICYCpIiXCtgAlCAlIiUCpIBlAAICTipIiTilIhlAAgArJDSICXitIiXipIBwAAICXCpIiXCtgAuyDSICXitIiXipIBwAAICXCpIiXCtgAsVAlIiTCpIBkAAICTipIiTilIhlAAgAyaDSICWitIiXipIBwAAICXCpIiXCtgA2DDSICWitIiXipIBwAAICYCpIiYCtgAznAlIiTCpIBkAAICUipIiUilIhkAAg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCoIiXCugAOVDSICXitIiXipIBwAAICXCoIiXCugAQyAlIiTCpIBkAAICTiqIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCoIiWCugAHDDSICXitIiXipIBwAAICXCoIiXCugAJgAlIiTCpIBkAAICUiqIiUikIhkAAgADbDSICWitIiXipIBwAAICXCoIiXCugAgODSICWitIiWipIBvAAICXCoIiXCugACOAlIiSCpIBjAAICUiqIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCoIiWCugAnfDSICXitIiYipIBwAAICYCoIiXCugAlCAlIiUCpIBlAAICTiqIiTikIhlAAgArJDSICXitIiXipIBwAAICXCoIiXCugAuyDSICXitIiXipIBwAAICXCoIiXCugAsVAlIiTCpIBkAAICTiqIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCoIiXCugA2DDSICWitIiXipIBwAAICYCoIiYCugAznAlIiTCpIBkAAICUiqIiUikIhkAAg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCoIiXCugAOVDSICXitIiXipIBwAAICXCoIiXCugAQyAlIiTCpIBkAAICTiqIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCoIiWCugAHDDSICXitIiXipIBwAAICXCoIiXCugAJgAlIiTCpIBkAAICUiqIiUikIhkAAgADbDSICWitIiXipIBwAAICXCoIiXCugAgODSICWitIiWipIBvAAICXCoIiXCugACOAlIiSCpIBjAAICUiqIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCoIiWCugAnfDSICXitIiYipIBwAAICYCoIiXCugAlCAlIiUCpIBlAAICTiqIiTikIhlAAgArJDSICXitIiXipIBwAAICXCoIiXCugAuyDSICXitIiXipIBwAAICXCoIiXCugAsVAlIiTCpIBkAAICTiqIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCoIiXCugA2DDSICWitIiXipIBwAAICYCoIiYCugAznAlIiTCpIBkAAICUiqIiUikIhkAAg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCoIiXCugAOVDSICXitIiXipIBwAAICXCoIiXCugAQyAlIiTCpIBkAAICTiqIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCoIiWCugAHDDSICXitIiXipIBwAAICXCoIiXCugAJgAlIiTCpIBkAAICUiqIiUikIhkAAgADbDSICWitIiXipIBwAAICXCoIiXCugAgODSICWitIiWipIBvAAICXCoIiXCugACOAlIiSCpIBjAAICUiqIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCoIiWCugAnfDSICXitIiYipIBwAAICYCoIiXCugAlCAlIiUCpIBlAAICTiqIiTikIhlAAgArJDSICXitIiXipIBwAAICXCoIiXCugAuyDSICXitIiXipIBwAAICXCoIiXCugAsVAlIiTCpIBkAAICTiqIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCoIiXCugA2DDSICWitIiXipIBwAAICYCoIiYCugAznAlIiTCpIBkAAICUiqIiUikIhkAAg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCoIiXCugAOVDSICXitIiXipIBwAAICXCoIiXCugAQyAlIiTCpIBkAAICTiqIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCoIiWCugAHDDSICXitIiXipIBwAAICXCoIiXCugAJgAlIiTCpIBkAAICUiqIiUikIhkAAgADbDSICWitIiXipIBwAAICXCoIiXCugAgODSICWitIiWipIBvAAICXCoIiXCugACOAlIiSCpIBjAAICUiqIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCoIiWCugAnfDSICXitIiYipIBwAAICYCoIiXCugAlCAlIiUCpIBlAAICTiqIiTikIhlAAgArJDSICXitIiXipIBwAAICXCoIiXCugAuyDSICXitIiXipIBwAAICXCoIiXCugAsVAlIiTCpIBkAAICTiqIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCoIiXCugA2DDSICWitIiXipIBwAAICYCoIiYCugAznAlIiTCpIBkAAICUiqIiUikIhkAAg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCoIiXCugAOVDSICXitIiXipIBwAAICXCoIiXCugAQyAlIiTCpIBkAAICTiqIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCoIiWCugAHDDSICXitIiXipIBwAAICXCoIiXCugAJgAlIiTCpIBkAAICUiqIiUikIhkAAgADbDSICWitIiXipIBwAAICXCoIiXCugAgODSICWitIiWipIBvAAICXCoIiXCugACOAlIiSCpIBjAAICUiqIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCoIiWCugAnfDSICXitIiYipIBwAAICYCoIiXCugAlCAlIiUCpIBlAAICTiqIiTikIhlAAgArJDSICXitIiXipIBwAAICXCoIiXCugAuyDSICXitIiXipIBwAAICXCoIiXCugAsVAlIiTCpIBkAAICTiqIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCoIiXCugA2DDSICWitIiXipIBwAAICYCoIiYCugAznAlIiTCpIBkAAICUiqIiUikIhkAAg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCoIiXCugAOVDSICXitIiXipIBwAAICXCoIiXCugAQyAlIiTCoIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCoIiWCugAHDDSICXitIiXipIBwAAICXCoIiXCugAJgAlIiTCoIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCoIiXCugAgODSICWitIiWipIBvAAICXCoIiXCugACOAlIiSCoIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCoIiWCugAnfDSICXitIiYipIBwAAICYCoIiXCugAlCAlIiUCoIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCoIiXCugAuyDSICXitIiXipIBwAAICXCoIiXCugAsVAlIiTCoIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCoIiXCugA2DDSICWitIiXipIBwAAICYCoIiYCugAznAlIiTCoIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCoIiXCugAOVDSICXitIiXipIBwAAICXCoIiXCugAQyAlIiTCoIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCoIiWCugAHDDSICXitIiXipIBwAAICXCoIiXCugAJgAlIiTCoIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCoIiXCugAgODSICWitIiWipIBvAAICXCoIiXCugACOAlIiSCoIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCoIiWCugAnfDSICXitIiYipIBwAAICYCoIiXCugAlCAlIiUCoIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCoIiXCugAuyDSICXitIiXipIBwAAICXCoIiXCugAsVAlIiTCoIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCoIiXCugA2DDSICWitIiXipIBwAAICYCoIiYCugAznAlIiTCoIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCoIiXCugAOVDSICXitIiXipIBwAAICXCoIiXCugAQyAlIiTCoIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCoIiWCugAHDDSICXitIiXipIBwAAICXCoIiXCugAJgAlIiTCoIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCoIiXCugAgODSICWitIiWipIBvAAICXCoIiXCugACOAlIiSCoIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCoIiWCugAnfDSICXitIiYipIBwAAICYCoIiXCugAlCAlIiUCoIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCoIiXCugAuyDSICXitIiXipIBwAAICXCoIiXCugAsVAlIiTCoIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCoIiXCugA2DDSICWitIiXipIBwAAICYCoIiYCugAznAlIiTCoIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCoIiXCugAOVDSICXitIiXipIBwAAICXCoIiXCugAQyAlIiTCoIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCoIiWCugAHDDSICXitIiXipIBwAAICXCoIiXCugAJgAlIiTCoIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCoIiXCugAgODSICWitIiWipIBvAAICXCoIiXCugACOAlIiSCoIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCoIiWCugAnfDSICXitIiYipIBwAAICYCoIiXCugAlCAlIiUCoIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCoIiXCugAuyDSICXitIiXipIBwAAICXCoIiXCugAsVAlIiTCoIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCoIiXCugA2DDSICWitIiXipIBwAAICYCoIiYCugAznAlIiTCoIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCoIiXCugAOVDSICXitIiXipIBwAAICXCoIiXCugAQyAlIiTCoIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCoIiWCugAHDDSICXitIiXipIBwAAICXCoIiXCugAJgAlIiTCoIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCoIiXCugAgODSICWitIiWipIBvAAICXCoIiXCugACOAlIiSCoIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCoIiWCugAnfDSICXitIiYipIBwAAICYCoIiXCugAlCAlIiUCoIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCoIiXCugAuyDSICXitIiXipIBwAAICXCoIiXCugAsVAlIiTCoIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCoIiXCugA2DDSICWitIiXipIBwAAICYCoIiYCugAznAlIiTCoIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCoIiXCugAOVDSICXitIiXipIBwAAICXCoIiXCugAQyAlIiTCoIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCoIiWCugAHDDSICXitIiXipIBwAAICXCoIiXCugAJgAlIiTCoIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCoIiXCugAgODSICWitIiWipIBvAAICXCoIiXCugACOAlIiSCoIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCoIiWCugAnfDSICXitIiYipIBwAAICYCoIiXCugAlCAlIiUCoIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCoIiXCugAuyDSICXitIiXipIBwAAICXCoIiXCugAsVAlIiTCoIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCoIiXCugA2DDSICWitIiXipIBwAAICYCoIiYCugAznAlIiTCoIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCoIiXCugAOVDSICXitIiXipIBwAAICXCoIiXCugAQyAlIiTCoIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCoIiWCugAHDDSICXitIiXipIBwAAICXCoIiXCugAJgAlIiTCoIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCoIiXCugAgODSICWitIiWipIBvAAICXCoIiXCugACOAlIiSCoIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCoIiWCugAnfDSICXitIiYipIBwAAICYCoIiXCugAlCAlIiUCoIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCoIiXCugAuyDSICXitIiXipIBwAAICXCoIiXCugAsVAlIiTCoIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCoIiXCugA2DDSICWitIiXipIBwAAICYCoIiYCugAznAlIiTCoIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_53 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCoIiXCugAOVDSICXitIiXipIBwAAICXCoIiXCugAQyAlIiTCoIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCoIiWCugAHDDSICXitIiXipIBwAAICXCoIiXCugAJgAlIiTCoIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCoIiXCugAgODSICWitIiWipIBvAAICXCoIiXCugACOAlIiSCoIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCoIiWCugAnfDSICXitIiYipIBwAAICYCoIiXCugAlCAlIiUCoIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCoIiXCugAuyDSICXitIiXipIBwAAICXCoIiXCugAsVAlIiTCoIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCoIiXCugA2DDSICWitIiXipIBwAAICYCoIiYCugAznAlIiTCoIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_54 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCoIiXCugAOVDSICXitIiXipIBwAAICXCoIiXCugAQyAlIiTCoIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCoIiWCugAHDDSICXitIiXipIBwAAICXCoIiXCugAJgAlIiTCoIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCoIiXCugAgODSICWitIiWipIBvAAICXCoIiXCugACOAlIiSCoIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCoIiWCugAnfDSICXitIiYipIBwAAICYCoIiXCugAlCAlIiUCoIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCoIiXCugAuyDSICXitIiXipIBwAAICXCoIiXCugAsVAlIiTCoIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCoIiXCugA2DDSICWitIiXipIBwAAICYCoIiYCugAznAlIiTCoIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCoIiXCugAOVDSICXitIiXipIBwAAICXCoIiXCugAQyAlIiTCoIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCoIiWCugAHDDSICXitIiXipIBwAAICXCoIiXCugAJgAlIiTCoIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCoIiXCugAgODSICWitIiWipIBvAAICXCoIiXCugACOAlIiSCoIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCoIiWCugAnfDSICXitIiYipIBwAAICYCoIiXCugAlCAlIiUCoIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCoIiXCugAuyDSICXitIiXipIBwAAICXCoIiXCugAsVAlIiTCoIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCoIiXCugA2DDSICWitIiXipIBwAAICYCoIiYCugAznAlIiTCoIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCoIiXCugAOVDSICXitIiXipIBwAAICXCoIiXCugAQyAlIiTCoIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCoIiWCugAHDDSICXitIiXipIBwAAICXCoIiXCugAJgAlIiTCoIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCoIiXCugAgODSICWitIiWipIBvAAICXCoIiXCugACOAlIiSCoIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCoIiWCugAnfDSICXitIiYipIBwAAICYCoIiXCugAlCAlIiUCoIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCoIiXCugAuyDSICXitIiXipIBwAAICXCoIiXCugAsVAlIiTCoIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCoIiXCugA2DDSICWitIiXipIBwAAICYCoIiYCugAznAlIiTCoIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AR+DSICXitIiXipIBwAAICXCoIiXCugAOVDSICXitIiXipIBwAAICXCoIiXCugAQyAlIiTCoIBkAAICTipIiTikIhlAAgAKtDSICWitIiXipIBxAAICWCoIiWCugAHDDSICXitIiXipIBwAAICXCoIiXCugAJgAlIiTCoIBkAAICUipIiUikIhkAAgADbDSICWitIiXipIBwAAICXCoIiXCugAgODSICWitIiWipIBvAAICXCoIiXCugACOAlIiSCoIBjAAICUipIiUikIhjAAgAj2DSICXitIiYipIBxAAICWCoIiWCugAnfDSICXitIiYipIBwAAICYCoIiXCugAlCAlIiUCoIBlAAICTipIiTikIhlAAgArJDSICXitIiXipIBwAAICXCoIiXCugAuyDSICXitIiXipIBwAAICXCoIiXCugAsVAlIiTCoIBkAAICTipIiTikIhlAAgAyaDSICWitIiXipIBwAAICXCoIiXCugA2DDSICWitIiXipIBwAAICYCoIiYCugAznAlIiTCoIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_58 = new cjs.Graphics().p("ASYDSICXitIiYipIBxAAICWCoIiWCugAOvDSICWitIiXipIBxAAICWCoIiWCugARLAlIiTCoIBlAAICTipIiTikIhlAAgALGDSICXitIiXipIBwAAICXCoIiXCugAHdDSICXitIiXipIBwAAICXCoIiXCugAJ6AlIiTCoIBkAAICTipIiTikIhlAAgAD0DSICXitIiYipIBxAAICXCoIiXCugAALDSICXitIiXipIBwAAICXCoIiXCugACoAlIiUCoIBlAAICTipIiTikIhlAAgAjcDSICWitIiXipIBwAAICWCoIiWCugAnGDSICXitIiXipIBwAAICXCoIiXCugAkpAlIiTCoIBkAAICUipIiUikIhlAAgAqvDSICXitIiYipIBwAAICYCoIiXCugAuYDSICXitIiXipIBvAAICYCoIiXCugAr8AlIiTCoIBlAAICTipIiTikIhlAAgAyBDSICXitIiXipIBwAAICXCoIiXCugA1qDSICXitIiXipIBwAAICXCoIiXCugAzNAlIiTCoIBkAAICTipIiTikIhlAAg");
	var mask_3_graphics_59 = new cjs.Graphics().p("ASyDSICXitIiYipIBxAAICXCoIiXCugAPJDSICWitIiXipIBxAAICWCoIiWCugARlAlIiTCoIBlAAICTipIiTikIhlAAgALgDSICXitIiXipIBwAAICXCoIiXCugAH3DSICXitIiXipIBwAAICXCoIiXCugAKUAlIiTCoIBkAAICTipIiTikIhlAAgAEODSICXitIiXipIBwAAICXCoIiXCugAAlDSICXitIiXipIBwAAICXCoIiXCugADCAlIiTCoIBkAAICTipIiTikIhlAAgAjCDSICWitIiXipIBwAAICWCoIiWCugAmrDSICWitIiXipIBwAAICXCoIiXCugAkPAlIiTCoIBkAAICUipIiUikIhkAAgAqVDSICXitIiYipIBwAAICYCoIiXCugAt+DSICXitIiXipIBvAAICYCoIiXCugAriAlIiTCoIBlAAICTipIiTikIhlAAgAxnDSICXitIiXipIBwAAICXCoIiXCugA1QDSICXitIiXipIBwAAICXCoIiXCugAyzAlIiTCoIBkAAICTipIiTikIhlAAg");
	var mask_3_graphics_60 = new cjs.Graphics().p("ATMDSICXiuIiXioIBwAAICXCoIiXCugAPjDSICXiuIiXioIBwAAICXCoIiXCugASAAkIiTCpIBkAAICTipIiTikIhlAAgAL7DSICWiuIiXioIBwAAICXCoIiXCugAIRDSICXiuIiXioIBwAAICXCoIiXCugAKuAkIiTCpIBkAAICUipIiUikIhkAAgAEpDSICWiuIiXioIBwAAICXCoIiXCugAA/DSICXiuIiXioIBwAAICXCoIiXCugADcAkIiTCpIBkAAICUipIiUikIhkAAgAioDSICXiuIiYioIBwAAICXCoIiWCugAmRDSICXiuIiYioIBwAAICYCoIiXCugAj1AkIiTCpIBlAAICTipIiTikIhlAAgAp7DSICXiuIiXioIBwAAICXCoIiXCugAtkDSICXiuIiXioIBwAAICXCoIiXCugArHAkIiUCpIBlAAICTipIiTikIhlAAgAxMDSICWiuIiXioIBwAAICXCoIiXCugA01DSICWiuIiXioIBwAAICXCoIiXCugAyZAkIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_61 = new cjs.Graphics().p("ATnDSICXiuIiXioIBwAAICXCoIiXCugAP+DSICXiuIiYioIBxAAICWCoIiWCugASaAkIiTCpIBlAAICTipIiTikIhlAAgAMVDSICXiuIiXioIBwAAICXCoIiXCugAIsDSICXiuIiXioIBwAAICXCoIiXCugALJAkIiTCpIBkAAICTipIiTikIhlAAgAFDDSICXiuIiXioIBwAAICXCoIiXCugABaDSICXiuIiXioIBwAAICXCoIiXCugAD3AkIiTCpIBkAAICTipIiTikIhlAAgAiNDSICViuIiWioIBwAAICWCoIiWCugAl2DSICWiuIiXioIBwAAICXCoIiXCugAjaAkIiTCpIBlAAICTipIiUikIhkAAgApgDSICXiuIiYioIBxAAICXCoIiXCugAtJDSICXiuIiXioIBvAAICYCoIiXCugAqtAkIiTCpIBlAAICTipIiTikIhlAAgAwyDSICXiuIiXioIBwAAICXCoIiXCugA0bDSICXiuIiXioIBwAAICXCoIiXCugAx+AkIiTCpIBkAAICTipIiTikIhlAAg");
	var mask_3_graphics_62 = new cjs.Graphics().p("AUCDSICXiuIiXioIBwAAICXCoIiXCugAQZDSICXiuIiYioIBxAAICWCoIiWCugAS1AkIiTCpIBlAAICTipIiTikIhlAAgAMwDSICXiuIiXioIBwAAICXCoIiXCugAJHDSICXiuIiXioIBwAAICXCoIiXCugALkAkIiTCpIBkAAICTipIiTikIhlAAgAFeDSICXiuIiXioIBwAAICXCoIiXCugAB1DSICXiuIiXioIBwAAICXCoIiXCugAESAkIiTCpIBkAAICTipIiTikIhlAAgAhyDSICViuIiWioIBwAAICWCoIiWCugAlbDSICWiuIiXioIBwAAICXCoIiXCugAi/AkIiTCpIBlAAICTipIiUikIhkAAgApFDSICXiuIiYioIBxAAICXCoIiXCugAsuDSICXiuIiXioIBvAAICYCoIiXCugAqSAkIiTCpIBlAAICTipIiTikIhlAAgAwXDSICXiuIiXioIBwAAICXCoIiXCugA0ADSICXiuIiXioIBwAAICXCoIiXCugAxjAkIiTCpIBkAAICTipIiTikIhlAAg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AUdDRICXitIiXioIBwAAICXCoIiXCtgAQ0DRICXitIiXioIBwAAICXCoIiXCtgATRAkIiTCpIBkAAICTipIiTikIhlAAgANMDRICWitIiXioIBwAAICXCoIiXCtgAJiDRICXitIiXioIBwAAICXCoIiXCtgAL/AkIiTCpIBkAAICUipIiUikIhkAAgAF6DRICWitIiXioIBwAAICXCoIiXCtgACQDRICXitIiXioIBwAAICXCoIiXCtgAEtAkIiTCpIBkAAICTipIiTikIhkAAgAhXDRICWitIiXioIBvAAICYCoIiXCtgAlADRICXitIiYioIBwAAICYCoIiXCtgAikAkIiTCpIBlAAICTipIiTikIhlAAgAoqDRICXitIiXioIBwAAICXCoIiXCtgAsTDRICXitIiXioIBwAAICXCoIiXCtgAp2AkIiUCpIBlAAICTipIiTikIhlAAgAv7DRICWitIiXioIBwAAICXCoIiXCtgAzkDRICWitIiXioIBwAAICXCoIiXCtgAxIAkIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_64 = new cjs.Graphics().p("AU5DRICXitIiYioIBxAAICWCoIiWCtgARQDRICWitIiXioIBxAAICWCoIiWCtgATsAkIiTCpIBlAAICTipIiTikIhlAAgANnDRICXitIiXioIBwAAICXCoIiXCtgAJ+DRICXitIiXioIBwAAICXCoIiXCtgAMbAkIiTCpIBkAAICTipIiTikIhlAAgAGVDRICXitIiYioIBxAAICXCoIiXCtgACsDRICXitIiXioIBwAAICXCoIiXCtgAFJAkIiTCpIBkAAICTipIiTikIhlAAgAg7DRICVitIiWioIBvAAICXCoIiXCtgAkkDRICWitIiXioIBwAAICXCoIiXCtgAiIAkIiTCpIBkAAICUipIiUikIhkAAgAoODRICXitIiYioIBwAAICYCoIiXCtgAr3DRICXitIiXioIBvAAICYCoIiXCtgApbAkIiTCpIBlAAICTipIiTikIhlAAgAvgDRICXitIiXioIBwAAICXCoIiXCtgAzJDRICXitIiXioIBwAAICXCoIiXCtgAwsAkIiTCpIBkAAICTipIiTikIhlAAg");
	var mask_3_graphics_65 = new cjs.Graphics().p("AVVDRICXitIiYioIBxAAICWCoIiWCtgARsDRICWitIiXioIBwAAICXCoIiXCtgAUIAkIiTCpIBkAAICUipIiUikIhkAAgAODDRICXitIiXioIBwAAICXCoIiXCtgAKaDRICXitIiXioIBwAAICXCoIiXCtgAM3AkIiTCpIBkAAICTipIiTikIhlAAgAGxDRICXitIiYioIBxAAICXCoIiXCtgADIDRICXitIiXioIBwAAICXCoIiXCtgAFlAkIiUCpIBlAAICTipIiTikIhlAAgAgfDRICVitIiWioIBvAAICXCoIiXCtgAkJDRICXitIiXioIBwAAICXCoIiXCtgAhsAkIiTCpIBkAAICUipIiUikIhlAAgAnyDRICXitIiYioIBwAAICYCoIiXCtgArbDRICXitIiXioIBvAAICYCoIiXCtgAo/AkIiTCpIBlAAICTipIiTikIhlAAgAvEDRICXitIiXioIBwAAICXCoIiXCtgAytDRICXitIiXioIBwAAICXCoIiXCtgAwQAkIiUCpIBlAAICTipIiTikIhlAAg");
	var mask_3_graphics_66 = new cjs.Graphics().p("AVxDRICXitIiXioIBwAAICXCoIiXCtgASIDRICXitIiXioIBwAAICXCoIiXCtgAUlAkIiUCpIBlAAICTipIiTikIhlAAgAOfDRICXitIiXioIBwAAICXCoIiXCtgAK2DRICXitIiXioIBwAAICXCoIiXCtgANTAkIiTCpIBkAAICUipIiUikIhlAAgAHNDRICXitIiXioIBwAAICXCoIiXCtgADkDRICXitIiXioIBwAAICXCoIiXCtgAGBAkIiTCpIBkAAICTipIiTikIhkAAgAgDDRICVitIiWioIBvAAICYCoIiXCtgAjsDRICXitIiYioIBwAAICXCoIiWCtgAhQAkIiTCpIBlAAICSipIiTikIhkAAgAnWDRICXitIiXioIBwAAICXCoIiXCtgAq/DRICXitIiXioIBwAAICXCoIiXCtgAoiAkIiUCpIBlAAICTipIiTikIhlAAgAunDRICWitIiXioIBwAAICXCoIiXCtgAyQDRICWitIiXioIBwAAICXCoIiXCtgAv0AkIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AWNDRICXitIiXioIBwAAICXCoIiXCtgASkDRICXitIiXioIBwAAICXCoIiXCtgAVBAkIiTCpIBkAAICUipIiUikIhkAAgAO8DRICXitIiXioIBwAAICXCoIiXCtgALTDRICXitIiXioIBwAAICXCoIiXCtgANwAkIiTCpIBkAAICTipIiTikIhlAAgAHqDRICXitIiYioIBwAAICYCoIiXCtgAEBDRICXitIiXioIBwAAICXCoIiXCtgAGdAkIiTCpIBlAAICTipIiTikIhlAAgAAYDRICXitIiXioIBwAAICXCoIiXCtgAjQDRICXitIiXioIBwAAICWCoIiWCtgAgzAkIiTCpIBkAAICSipIiSikIhlAAgAm5DRICWitIiXioIBwAAICYCoIiYCtgAqiDRICXitIiYioIBwAAICXCoIiWCtgAoGAkIiTCpIBlAAICTipIiUikIhkAAgAuLDRICXitIiXioIBwAAICXCoIiXCtgAx0DRICXitIiYioIBxAAICXCoIiXCtgAvYAkIiTCpIBlAAICTipIiTikIhlAAg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AWqDRICXitIiXipIBwAAICXCpIiXCtgATBDRICXitIiXipIBwAAICXCpIiXCtgAVeAkIiTCpIBkAAICUipIiUikIhkAAgAPZDRICWitIiWipIBwAAICXCpIiXCtgALwDRICXitIiXipIBwAAICXCpIiXCtgAONAkIiUCpIBlAAICTipIiTikIhlAAgAIHDRICWitIiXipIBwAAICYCpIiXCtgAEeDRICXitIiXipIBwAAICXCpIiXCtgAG6AkIiTCpIBlAAICTipIiUikIhkAAgAA1DRICXitIiXipIBwAAICXCpIiXCtgAizDRICXitIiXipIBwAAICWCpIiWCtgAgWAkIiTCpIBkAAICSipIiSikIhlAAgAmcDRICWitIiXipIBwAAICXCpIiXCtgAqFDRICWitIiXipIBwAAICXCpIiXCtgAnpAkIiTCpIBlAAICTipIiUikIhkAAgAtuDRICXitIiYipIBxAAICWCpIiWCtgAxXDRICXitIiYipIBxAAICXCpIiXCtgAu7AkIiTCpIBlAAICTipIiTikIhlAAg");
	var mask_3_graphics_69 = new cjs.Graphics().p("AXIDRICWitIiXipIBxAAICWCpIiWCtgATfDRICWitIiXipIBwAAICXCpIiXCtgAV7AkIiTCpIBkAAICUipIiUikIhkAAgAP2DRICXitIiXipIBwAAICXCpIiXCtgAMNDRICXitIiXipIBwAAICXCpIiXCtgAOqAkIiTCpIBkAAICTipIiTikIhlAAgAIkDRICXitIiYipIBxAAICXCpIiXCtgAE7DRICXitIiXipIBwAAICXCpIiXCtgAHYAkIiUCpIBlAAICTipIiTikIhlAAgABTDRICWitIiXipIBwAAICXCpIiXCtgAiWDRICWitIiWipIBwAAICWCpIiWCtgAAGAkIiSCpIBkAAICTipIiTikIhlAAgAl/DRICXitIiYipIBwAAICYCpIiXCtgApoDRICXitIiXipIBvAAICYCpIiXCtgAnMAkIiTCpIBlAAICTipIiTikIhlAAgAtRDRICXitIiXipIBwAAICXCpIiXCtgAw6DRICXitIiXipIBwAAICXCpIiXCtgAudAkIiUCpIBlAAICTipIiTikIhlAAg");
	var mask_3_graphics_70 = new cjs.Graphics().p("AXlDRICXitIiXipIBwAAICXCpIiXCtgAT8DRICXitIiXipIBwAAICXCpIiXCtgAWZAkIiTCpIBkAAICTipIiTikIhlAAgAQUDRICWitIiXipIBxAAICWCpIiWCtgAMrDRICWitIiXipIBwAAICXCpIiXCtgAPHAkIiTCpIBkAAICUipIiUikIhkAAgAJCDRICWitIiXipIBwAAICXCpIiXCtgAFZDRICWitIiXipIBwAAICXCpIiXCtgAH1AkIiTCpIBkAAICUipIiUikIhkAAgABwDRICXitIiYipIBxAAICXCpIiXCtgAh4DRICWitIiXipIBwAAICXCpIiWCtgAAkAkIiTCpIBlAAICSipIiSikIhlAAgAliDRICXitIiXipIBwAAICXCpIiXCtgApLDRICXitIiXipIBwAAICXCpIiXCtgAmuAkIiTCpIBkAAICTipIiTikIhlAAgAszDRICXitIiYipIBwAAICXCpIiXCtgAwcDRICWitIiXipIBwAAICYCpIiYCtgAuAAkIiTCpIBlAAICTipIiTikIhlAAg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AYDDRICXitIiXipIBwAAICXCpIiXCtgAUaDRICXitIiXipIBwAAICXCpIiXCtgAW3AkIiTCpIBkAAICTipIiTikIhlAAgAQxDRICXitIiXipIBwAAICXCpIiXCtgANIDRICXitIiXipIBwAAICXCpIiXCtgAPlAkIiTCpIBkAAICUipIiUikIhkAAgAJfDRICXitIiXipIBwAAICXCpIiXCtgAF2DRICXitIiXipIBwAAICXCpIiXCtgAITAkIiTCpIBkAAICTipIiTikIhkAAgACODRICXitIiYipIBwAAICYCpIiXCtgAhaDRICWitIiXipIBvAAICYCpIiXCtgABBAkIiSCpIBkAAICTipIiTikIhkAAgAlEDRICXitIiXipIBwAAICXCpIiXCtgAotDRICXitIiXipIBwAAICXCpIiXCtgAmQAkIiUCpIBlAAICTipIiTikIhlAAgAsVDRICWitIiXipIBwAAICXCpIiXCtgAv+DRICWitIiXipIBwAAICXCpIiXCtgAtiAkIiTCpIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_72 = new cjs.Graphics().p("AYhDRICXitIiXipIBwAAICXCpIiXCtgAU4DRICXitIiXipIBwAAICXCpIiXCtgAXVAkIiTCpIBkAAICTipIiTikIhlAAgARQDRICWitIiXipIBxAAICWCpIiWCtgANnDRICWitIiXipIBwAAICXCpIiXCtgAQDAkIiTCpIBkAAICUipIiUikIhkAAgAJ+DRICWitIiXipIBwAAICXCpIiXCtgAGVDRICWitIiXipIBwAAICXCpIiXCtgAIxAkIiTCpIBkAAICUipIiUikIhkAAgACsDRICXitIiYipIBxAAICXCpIiXCtgAg8DRICWitIiXipIBvAAICYCpIiXCtgABgAkIiTCpIBkAAICTipIiTikIhkAAgAkmDRICXitIiXipIBwAAICXCpIiXCtgAoPDRICXitIiXipIBwAAICXCpIiXCtgAlyAkIiTCpIBkAAICTipIiTikIhlAAgAr3DRICXitIiYipIBwAAICXCpIiXCtgAvgDRICWitIiXipIBwAAICYCpIiYCtgAtEAkIiTCpIBlAAICTipIiTikIhlAAg");
	var mask_3_graphics_73 = new cjs.Graphics().p("AZADRICXitIiYipIBxAAICWCpIiWCtgAVXDRICWitIiXipIBxAAICWCpIiWCtgAXzAkIiTCpIBlAAICTipIiTikIhlAAgARuDRICXitIiXipIBwAAICXCpIiXCtgAOFDRICXitIiXipIBwAAICXCpIiXCtgAQiAkIiTCpIBkAAICTipIiTikIhlAAgAKcDRICXitIiYipIBxAAICXCpIiXCtgAGzDRICXitIiXipIBwAAICXCpIiXCtgAJQAkIiUCpIBlAAICTipIiTikIhlAAgADLDRICWitIiXipIBwAAICXCpIiXCtgAgeDRICWitIiWipIBvAAICXCpIiXCtgAB+AkIiSCpIBjAAICUipIiUikIhjAAgAkHDRICXitIiYipIBwAAICYCpIiXCtgAnwDRICXitIiXipIBvAAICYCpIiXCtgAlUAkIiTCpIBlAAICTipIiTikIhlAAgArZDRICXitIiXipIBwAAICXCpIiXCtgAvCDRICXitIiXipIBwAAICXCpIiXCtgAslAkIiTCpIBkAAICTipIiTikIhlAAg");
	var mask_3_graphics_74 = new cjs.Graphics().p("AZeDRICXitIiXipIBwAAICXCpIiXCtgAV1DRICXitIiXipIBwAAICXCpIiXCtgAYSAkIiTCpIBkAAICUipIiUikIhkAAgASNDRICXitIiXipIBwAAICXCpIiXCtgAOkDRICXitIiXipIBwAAICXCpIiXCtgARBAkIiTCpIBkAAICTipIiTikIhlAAgAK7DRICXitIiYipIBwAAICYCpIiXCtgAHSDRICXitIiXipIBwAAICXCpIiXCtgAJuAkIiTCpIBlAAICTipIiTikIhlAAgADpDRICXitIiXipIBwAAICXCpIiXCtgAAADRICXitIiXipIBwAAICXCpIiXCtgACdAkIiTCpIBkAAICTipIiTikIhlAAgAjoDRICWitIiXipIBwAAICXCpIiXCtgAnRDRICXitIiYipIBwAAICXCpIiWCtgAk1AkIiTCpIBlAAICTipIiUikIhkAAgAq6DRICXitIiXipIBwAAICXCpIiXCtgAujDRICXitIiYipIBxAAICXCpIiXCtgAsHAkIiTCpIBlAAICTipIiTikIhlAAg");
	var mask_3_graphics_75 = new cjs.Graphics().p("AZ+DRICWitIiXipIBxAAICWCpIiWCtgAWVDRICWitIiXipIBwAAICXCpIiXCtgAYxAkIiTCpIBkAAICUipIiUilIhkAAgASsDRICXitIiXipIBwAAICXCpIiXCtgAPDDRICXitIiXipIBwAAICXCpIiXCtgARgAkIiTCpIBkAAICTipIiTilIhlAAgALaDRICXitIiYipIBxAAICXCpIiXCtgAHxDRICXitIiXipIBwAAICXCpIiXCtgAKOAkIiUCpIBlAAICTipIiTilIhlAAgAEJDRICWitIiXipIBwAAICXCpIiXCtgAAfDRICXitIiXipIBwAAICXCpIiXCtgAC8AkIiTCpIBkAAICTipIiTilIhlAAgAjJDRICXitIiYipIBwAAICXCpIiWCtgAmyDRICXitIiXipIBvAAICYCpIiXCtgAkWAkIiTCpIBlAAICTipIiTilIhlAAgAqbDRICXitIiXipIBwAAICXCpIiXCtgAuEDRICXitIiXipIBwAAICXCpIiXCtgArnAkIiUCpIBlAAICTipIiTilIhlAAg");
	var mask_3_graphics_76 = new cjs.Graphics().p("AadDRICXitIiXipIBwAAICXCpIiXCtgAW0DRICXitIiXipIBwAAICXCpIiXCtgAZRAkIiTCpIBkAAICTipIiTilIhlAAgATMDRICWitIiXipIBwAAICXCpIiXCtgAPiDRICXitIiXipIBwAAICXCpIiXCtgAR/AkIiTCpIBkAAICUipIiUilIhkAAgAL6DRICWitIiXipIBwAAICXCpIiXCtgAIQDRICXitIiXipIBwAAICXCpIiXCtgAKtAkIiTCpIBkAAICTipIiTilIhkAAgAEoDRICXitIiYipIBwAAICYCpIiXCtgAA/DRICXitIiYipIBwAAICYCpIiXCtgADbAkIiTCpIBlAAICTipIiTilIhlAAgAiqDRICXitIiXipIBwAAICWCpIiWCtgAmTDRICXitIiXipIBwAAICXCpIiXCtgAj2AkIiUCpIBlAAICTipIiTilIhlAAgAp7DRICWitIiXipIBwAAICXCpIiXCtgAtkDRICWitIiXipIBwAAICXCpIiXCtgArIAkIiTCpIBkAAICUipIiUilIhkAAg");
	var mask_3_graphics_77 = new cjs.Graphics().p("Aa9DRICXitIiXipIBwAAICXCpIiXCtgAXUDRICXitIiYipIBxAAICWCpIiWCtgAZxAkIiUCpIBlAAICTipIiTilIhlAAgATrDRICXitIiXipIBwAAICXCpIiXCtgAQCDRICXitIiXipIBwAAICXCpIiXCtgASfAkIiTCpIBkAAICTipIiTilIhlAAgAMZDRICXitIiXipIBwAAICXCpIiXCtgAIwDRICXitIiXipIBwAAICXCpIiXCtgALNAkIiTCpIBkAAICTipIiTilIhlAAgAFIDRICWitIiXipIBwAAICYCpIiYCtgABfDRICWitIiXipIBwAAICXCpIiWCtgAD7AkIiTCpIBlAAICTipIiUilIhkAAgAiKDRICWitIiXipIBxAAICWCpIiWCtgAlzDRICXitIiXipIBvAAICYCpIiXCtgAjWAkIiUCpIBlAAICTipIiTilIhlAAgApbDRICWitIiXipIBwAAICXCpIiXCtgAtFDRICXitIiXipIBwAAICXCpIiXCtgAqoAkIiTCpIBkAAICUipIiUilIhlAAg");
	var mask_3_graphics_78 = new cjs.Graphics().p("AbdDRICXitIiXipIBwAAICXCpIiXCtgAX0DRICXitIiXipIBwAAICXCpIiXCtgAaRAkIiUCpIBlAAICTipIiTilIhlAAgAULDRICXitIiXipIBwAAICXCpIiXCtgAQiDRICXitIiXipIBwAAICXCpIiXCtgAS/AkIiTCpIBkAAICUipIiUilIhlAAgAM5DRICXitIiXipIBwAAICXCpIiXCtgAJQDRICXitIiXipIBwAAICXCpIiXCtgALtAkIiTCpIBkAAICTipIiTilIhlAAgAFoDRICWitIiXipIBwAAICYCpIiXCtgAB/DRICXitIiYipIBwAAICXCpIiWCtgAEbAkIiTCpIBlAAICTipIiUilIhkAAgAhqDRICWitIiXipIBwAAICXCpIiXCtgAlTDRICXitIiXipIBwAAICXCpIiXCtgAi2AkIiUCpIBlAAICTipIiTilIhlAAgAo7DRICWitIiXipIBwAAICXCpIiXCtgAskDRICWitIiXipIBwAAICXCpIiXCtgAqIAkIiTCpIBkAAICUipIiUilIhkAAg");
	var mask_3_graphics_79 = new cjs.Graphics().p("Ab9DRICXitIiXipIBwAAICXCoIiXCugAYUDRICXitIiXipIBwAAICXCoIiXCugAaxAkIiTCpIBkAAICTiqIiTikIhlAAgAUsDRICWitIiWipIBwAAICXCoIiXCugARDDRICWitIiXipIBxAAICWCoIiWCugATfAkIiTCpIBlAAICTiqIiTikIhlAAgANaDRICWitIiXipIBwAAICYCoIiYCugAJxDRICXitIiYipIBxAAICWCoIiWCugAMNAkIiTCpIBlAAICTiqIiUikIhkAAgAGIDRICXitIiXipIBwAAICXCoIiXCugACfDRICXitIiYipIBxAAICXCoIiXCugAE8AkIiTCpIBkAAICTiqIiTikIhlAAgAhJDRICVitIiWipIBvAAICXCoIiXCugAkzDRICXitIiXipIBwAAICXCoIiXCugAiWAkIiTCpIBkAAICUiqIiUikIhlAAgAobDRICXitIiYipIBwAAICXCoIiXCugAsEDRICXitIiYipIBwAAICYCoIiYCugApoAkIiTCpIBlAAICTiqIiTikIhlAAg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AceDRICXitIiXipIBwAAICXCoIiXCugAY1DRICXitIiXipIBwAAICXCoIiXCugAbSAkIiTCpIBkAAICTiqIiTikIhlAAgAVMDRICXitIiXipIBwAAICXCoIiXCugARjDRICXitIiXipIBwAAICXCoIiXCugAUAAkIiTCpIBkAAICUiqIiUikIhkAAgAN6DRICXitIiXipIBwAAICXCoIiXCugAKRDRICXitIiXipIBwAAICXCoIiXCugAMuAkIiTCpIBkAAICTiqIiTikIhkAAgAGpDRICXitIiYipIBwAAICYCoIiXCugADADRICXitIiYipIBwAAICYCoIiXCugAFcAkIiTCpIBlAAICTiqIiTikIhlAAgAgpDRICWitIiWipIBvAAICXCoIiXCugAkSDRICXitIiXipIBwAAICXCoIiXCugAh1AkIiUCpIBlAAICTiqIiTikIhlAAgAn6DRICWitIiXipIBwAAICXCoIiXCugArjDRICWitIiXipIBwAAICXCoIiXCugApHAkIiTCpIBkAAICUiqIiUikIhkAAg");
	var mask_3_graphics_81 = new cjs.Graphics().p("Ac/DRICXitIiXipIBwAAICXCoIiXCugAZWDRICXitIiXipIBwAAICXCoIiXCugAbzAkIiTCpIBkAAICTiqIiTikIhlAAgAVtDRICXitIiXipIBwAAICXCoIiXCugASEDRICXitIiXipIBwAAICXCoIiXCugAUhAkIiTCpIBkAAICUiqIiUikIhkAAgAObDRICXitIiXipIBwAAICXCoIiXCugAKyDRICXitIiXipIBwAAICXCoIiXCugANPAkIiTCpIBkAAICTiqIiTikIhkAAgAHKDRICXitIiYipIBwAAICYCoIiXCugADhDRICXitIiYipIBwAAICYCoIiXCugAF9AkIiTCpIBlAAICTiqIiTikIhlAAgAgIDRICWitIiWipIBvAAICXCoIiXCugAjxDRICXitIiXipIBwAAICWCoIiWCugAhUAkIiUCpIBlAAICSiqIiSikIhlAAgAnZDRICWitIiXipIBwAAICXCoIiXCugArCDRICWitIiXipIBwAAICXCoIiXCugAomAkIiTCpIBkAAICUiqIiUikIhkAAg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AdgDRICXitIiXipIBwAAICXCoIiXCugAZ3DRICXitIiXipIBwAAICXCoIiXCugAcUAkIiTCpIBkAAICUiqIiUikIhkAAgAWPDRICWitIiWipIBwAAICXCoIiXCugASmDRICXitIiXipIBwAAICXCoIiXCugAVDAkIiUCpIBlAAICTiqIiTikIhlAAgAO9DRICWitIiXipIBwAAICYCoIiXCugALUDRICXitIiXipIBwAAICXCoIiXCugANwAkIiTCpIBlAAICTiqIiUikIhkAAgAHrDRICXitIiXipIBwAAICXCoIiXCugAECDRICXitIiXipIBwAAICXCoIiXCugAGfAkIiTCpIBkAAICTiqIiTikIhlAAgAAZDRICWitIiXipIBwAAICXCoIiXCugAjPDRICWitIiXipIBwAAICWCoIiWCugAgzAkIiTCpIBkAAICTiqIiTikIhkAAgAm4DRICXitIiYipIBxAAICWCoIiWCugAqhDRICXitIiYipIBwAAICYCoIiYCugAoFAkIiTCpIBlAAICTiqIiTikIhlAAg");
	var mask_3_graphics_83 = new cjs.Graphics().p("AeCDRICXitIiXipIBwAAICXCoIiXCugAaZDRICXitIiXipIBwAAICXCoIiXCugAc2AkIiTCoIBkAAICTipIiTikIhlAAgAWwDRICXitIiXipIBwAAICXCoIiXCugATHDRICXitIiXipIBwAAICXCoIiXCugAVkAkIiTCoIBkAAICUipIiUikIhkAAgAPfDRICWitIiXipIBwAAICXCoIiXCugAL1DRICXitIiXipIBwAAICXCoIiXCugAOSAkIiTCoIBkAAICTipIiTikIhkAAgAINDRICXitIiYipIBwAAICYCoIiXCugAEkDRICXitIiYipIBwAAICYCoIiXCugAHAAkIiTCoIBlAAICTipIiTikIhlAAgAA6DRICXitIiXipIBwAAICXCoIiXCugAiuDRICXitIiXipIBwAAICWCoIiWCugAgRAkIiUCoIBlAAICSipIiSikIhlAAgAmWDRICWitIiXipIBwAAICXCoIiXCugAp/DRICWitIiXipIBwAAICXCoIiXCugAnjAkIiTCoIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_84 = new cjs.Graphics().p("AekDRICXitIiXipIBwAAICXCoIiXCugAa7DRICXitIiXipIBwAAICXCoIiXCugAdYAkIiTCoIBkAAICTipIiTikIhlAAgAXSDRICXitIiXipIBwAAICXCoIiXCugATpDRICXitIiXipIBwAAICXCoIiXCugAWGAkIiTCoIBkAAICUipIiUikIhkAAgAQADRICXitIiXipIBwAAICXCoIiXCugAMXDRICXitIiXipIBwAAICXCoIiXCugAO0AkIiTCoIBkAAICTipIiTikIhkAAgAIvDRICXitIiYipIBwAAICYCoIiXCugAFGDRICXitIiYipIBwAAICYCoIiXCugAHiAkIiTCoIBlAAICTipIiTikIhlAAgABcDRICXitIiXipIBwAAICXCoIiXCugAiMDRICWitIiWipIBwAAICWCoIiWCugAAQAkIiTCoIBlAAICSipIiSikIhlAAgAl0DRICWitIiXipIBwAAICXCoIiXCugApdDRICWitIiXipIBwAAICXCoIiXCugAnBAkIiTCoIBkAAICUipIiUikIhkAAg");
	var mask_3_graphics_85 = new cjs.Graphics().p("AfGDRICXitIiXipIBwAAICXCoIiXCugAbdDRICXitIiXipIBwAAICXCoIiXCugAd6AkIiTCoIBkAAICUipIiUikIhlAAgAX1DRICWitIiWipIBwAAICXCoIiXCugAUMDRICXitIiYipIBxAAICWCoIiWCugAWoAkIiTCoIBlAAICTipIiTikIhlAAgAQjDRICWitIiXipIBwAAICYCoIiXCugAM6DRICXitIiYipIBxAAICWCoIiWCugAPWAkIiTCoIBlAAICTipIiUikIhkAAgAJRDRICXitIiXipIBwAAICXCoIiXCugAFoDRICXitIiYipIBxAAICXCoIiXCugAIFAkIiTCoIBkAAICTipIiTikIhlAAgAB/DRICWitIiXipIBwAAICXCoIiXCugAhqDRICWitIiWipIBvAAICXCoIiXCugAAyAkIiSCoIBjAAICUipIiUikIhjAAgAlSDRICXitIiYipIBxAAICWCoIiWCugAo7DRICXitIiYipIBwAAICYCoIiYCugAmfAkIiTCoIBlAAICTipIiTikIhlAAg");
	var mask_3_graphics_86 = new cjs.Graphics().p("AfpDQICXitIiXioIBwAAICXCoIiXCtgAcADQICXitIiXioIBwAAICXCoIiXCtgAedAjIiTCpIBkAAICTipIiTikIhlAAgAYYDQICWitIiXioIBxAAICWCoIiWCtgAUvDQICWitIiXioIBwAAICXCoIiXCtgAXLAjIiTCpIBkAAICUipIiUikIhkAAgARGDQICWitIiXioIBwAAICXCoIiXCtgANdDQICWitIiXioIBwAAICXCoIiXCtgAP5AjIiTCpIBkAAICUipIiUikIhkAAgAJ0DQICXitIiYioIBxAAICXCoIiXCtgAGLDQICXitIiYioIBwAAICYCoIiXCtgAIoAjIiUCpIBlAAICTipIiTikIhlAAgAChDQICXitIiXioIBwAAICXCoIiXCtgAhHDQICWitIiWioIBvAAICXCoIiXCtgABVAjIiSCpIBjAAICTipIiTikIhkAAgAkvDQICXitIiYioIBwAAICXCoIiXCtgAoYDQICWitIiXioIBwAAICYCoIiYCtgAl8AjIiTCpIBlAAICTipIiTikIhlAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_3_graphics_13,x:-22.2493,y:21.0439}).wait(1).to({graphics:mask_3_graphics_14,x:-19.899,y:21.0428}).wait(1).to({graphics:mask_3_graphics_15,x:-17.4852,y:21.0416}).wait(1).to({graphics:mask_3_graphics_16,x:-15.0079,y:21.0404}).wait(1).to({graphics:mask_3_graphics_17,x:-12.467,y:21.0391}).wait(1).to({graphics:mask_3_graphics_18,x:-9.8626,y:21.0378}).wait(1).to({graphics:mask_3_graphics_19,x:-7.1947,y:21.0365}).wait(1).to({graphics:mask_3_graphics_20,x:-4.4633,y:21.0352}).wait(1).to({graphics:mask_3_graphics_21,x:-1.6684,y:21.0338}).wait(1).to({graphics:mask_3_graphics_22,x:1.1901,y:21.0324}).wait(1).to({graphics:mask_3_graphics_23,x:4.1121,y:21.0309}).wait(1).to({graphics:mask_3_graphics_24,x:7.0976,y:21.0295}).wait(1).to({graphics:mask_3_graphics_25,x:10.1466,y:21.028}).wait(1).to({graphics:mask_3_graphics_26,x:13.2592,y:21.0264}).wait(1).to({graphics:mask_3_graphics_27,x:16.4353,y:21.0249}).wait(1).to({graphics:mask_3_graphics_28,x:19.6749,y:21.0233}).wait(1).to({graphics:mask_3_graphics_29,x:22.978,y:21.0216}).wait(1).to({graphics:mask_3_graphics_30,x:26.3446,y:21.02}).wait(1).to({graphics:mask_3_graphics_31,x:29.7748,y:21.0183}).wait(1).to({graphics:mask_3_graphics_32,x:33.2685,y:21.0166}).wait(1).to({graphics:mask_3_graphics_33,x:36.8257,y:21.0148}).wait(1).to({graphics:mask_3_graphics_34,x:40.4464,y:21.013}).wait(1).to({graphics:mask_3_graphics_35,x:44.1306,y:21.0112}).wait(1).to({graphics:mask_3_graphics_36,x:47.8784,y:21.0093}).wait(1).to({graphics:mask_3_graphics_37,x:51.6897,y:21.0075}).wait(1).to({graphics:mask_3_graphics_38,x:55.5645,y:21.0056}).wait(1).to({graphics:mask_3_graphics_39,x:59.5028,y:21.0036}).wait(1).to({graphics:mask_3_graphics_40,x:63.5047,y:21.0016}).wait(1).to({graphics:mask_3_graphics_41,x:67.5701,y:20.9996}).wait(1).to({graphics:mask_3_graphics_42,x:71.699,y:20.9976}).wait(1).to({graphics:mask_3_graphics_43,x:75.8914,y:20.9955}).wait(1).to({graphics:mask_3_graphics_44,x:80.1473,y:20.9934}).wait(1).to({graphics:mask_3_graphics_45,x:84.4668,y:20.9913}).wait(1).to({graphics:mask_3_graphics_46,x:88.8498,y:20.9891}).wait(1).to({graphics:mask_3_graphics_47,x:93.2963,y:20.9869}).wait(1).to({graphics:mask_3_graphics_48,x:97.8063,y:20.9847}).wait(1).to({graphics:mask_3_graphics_49,x:102.3798,y:20.9825}).wait(1).to({graphics:mask_3_graphics_50,x:107.0169,y:20.9802}).wait(1).to({graphics:mask_3_graphics_51,x:111.7175,y:20.9778}).wait(1).to({graphics:mask_3_graphics_52,x:116.4816,y:20.9755}).wait(1).to({graphics:mask_3_graphics_53,x:121.3092,y:20.9731}).wait(1).to({graphics:mask_3_graphics_54,x:126.2004,y:20.9707}).wait(1).to({graphics:mask_3_graphics_55,x:131.1551,y:20.9683}).wait(1).to({graphics:mask_3_graphics_56,x:136.1733,y:20.9658}).wait(1).to({graphics:mask_3_graphics_57,x:141.255,y:20.9633}).wait(1).to({graphics:mask_3_graphics_58,x:143.8461,y:20.9607}).wait(1).to({graphics:mask_3_graphics_59,x:146.4505,y:20.9582}).wait(1).to({graphics:mask_3_graphics_60,x:149.0866,y:20.9556}).wait(1).to({graphics:mask_3_graphics_61,x:151.7545,y:20.9529}).wait(1).to({graphics:mask_3_graphics_62,x:154.4542,y:20.9503}).wait(1).to({graphics:mask_3_graphics_63,x:157.1856,y:20.9476}).wait(1).to({graphics:mask_3_graphics_64,x:159.9488,y:20.9448}).wait(1).to({graphics:mask_3_graphics_65,x:162.7437,y:20.9421}).wait(1).to({graphics:mask_3_graphics_66,x:165.5704,y:20.9393}).wait(1).to({graphics:mask_3_graphics_67,x:168.4289,y:20.9365}).wait(1).to({graphics:mask_3_graphics_68,x:171.3191,y:20.9336}).wait(1).to({graphics:mask_3_graphics_69,x:174.2411,y:20.9307}).wait(1).to({graphics:mask_3_graphics_70,x:177.1949,y:20.9278}).wait(1).to({graphics:mask_3_graphics_71,x:180.1804,y:20.9249}).wait(1).to({graphics:mask_3_graphics_72,x:183.1977,y:20.9219}).wait(1).to({graphics:mask_3_graphics_73,x:186.2467,y:20.9189}).wait(1).to({graphics:mask_3_graphics_74,x:189.3275,y:20.9159}).wait(1).to({graphics:mask_3_graphics_75,x:192.44,y:20.9128}).wait(1).to({graphics:mask_3_graphics_76,x:195.5843,y:20.9097}).wait(1).to({graphics:mask_3_graphics_77,x:198.7604,y:20.9065}).wait(1).to({graphics:mask_3_graphics_78,x:201.9683,y:20.9034}).wait(1).to({graphics:mask_3_graphics_79,x:205.2079,y:20.9002}).wait(1).to({graphics:mask_3_graphics_80,x:208.4792,y:20.897}).wait(1).to({graphics:mask_3_graphics_81,x:211.7823,y:20.8937}).wait(1).to({graphics:mask_3_graphics_82,x:215.1172,y:20.8904}).wait(1).to({graphics:mask_3_graphics_83,x:218.4838,y:20.8871}).wait(1).to({graphics:mask_3_graphics_84,x:221.8822,y:20.8837}).wait(1).to({graphics:mask_3_graphics_85,x:225.3124,y:20.8803}).wait(1).to({graphics:mask_3_graphics_86,x:228.7963,y:20.8439}).wait(1).to({graphics:null,x:0,y:0}).wait(808));

	// img01
	this.instance_24 = new lib.Symbol8();
	this.instance_24.setTransform(65.95,60,0.4398,0.4398,0,0,0,150,125);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(40).to({_off:false},0).to({alpha:1},16,cjs.Ease.quadInOut).to({_off:true},11).wait(828));

	// img01
	this.instance_25 = new lib.Symbol8();
	this.instance_25.setTransform(92.35,89,0.4398,0.4398,0,0,0,210,191);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(48).to({_off:false},0).to({alpha:1},19,cjs.Ease.quadIn).to({regX:209.8,regY:190.7,scaleX:0.5286,scaleY:0.5286,x:80.05,y:101.85},254).to({_off:true},1).wait(573));

	// arrows_copy
	this.instance_26 = new lib.Symbol2("synched",0);
	this.instance_26.setTransform(-340,64.15,0.4398,0.4398,0,0,0,691.9,84);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({_off:false},0).to({x:-188.6},12,cjs.Ease.sineOut).to({regX:691.8,regY:84.2,x:149.9,y:63.85},73,cjs.Ease.get(-0.5)).to({_off:true},1).wait(808));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#52565A").s().p("A41DGIAAmLMAxrAAAIAAGLg");
	this.shape_1.setTransform(159.9996,25.013,1.0063,1.2626);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(895));

	// stageBackground
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A6jldMA1HAAAIAAK7Mg1HAAAg");
	this.shape_2.setTransform(160,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#52565A").s().p("A6jFeIAAq7MA1HAAAIAAK7g");
	this.shape_3.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(895));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-154.9,-20,612.5,245.8);
// library properties:
lib.properties = {
	id: 'B915F0BB2CAF214394D0C3C0B5CA43BE',
	width: 320,
	height: 50,
	fps: 30,
	color: "#52565A",
	opacity: 1.00,
	manifest: [
		{src:"images/card.png?1721824628021", id:"card"},
		{src:"images/img01.jpg?1721824628021", id:"img01"},
		{src:"images/img02.jpg?1721824628021", id:"img02"},
		{src:"images/img03.jpg?1721824628021", id:"img03"}
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