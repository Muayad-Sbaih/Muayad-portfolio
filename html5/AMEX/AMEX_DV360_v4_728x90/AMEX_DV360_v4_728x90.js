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
p.nominalBounds = new cjs.Rectangle(0,0,1092,135);


(lib.img02 = function() {
	this.initialize(img.img02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1086,135);


(lib.img03 = function() {
	this.initialize(img.img03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1086,135);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("AAAAGIgEAJIgFgDIAFgJIgKAAIAAgFIAKAAIgFgIIAFgEIAEAJIAEgJIAGAEIgGAIIALAAIAAAFIgLAAIAGAJIgGADg");
	this.shape.setTransform(436.45,-141.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(435,-143.4,3,3), null);


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
	this.shape.graphics.f("rgba(255,255,255,0.6)").s().p("ABOCEIB0iEIh0iDIBWAAIBzCDIhzCEgAhkCEIBziEIhziDIBWAAIBzCDIhzCEgAAUAAIhxCAIBOAAIBviAIhvh/IhOAAgAkWCEIBziEIh0iDIBXAAIB0CDIh0CEg");
	this.shape.setTransform(142.55,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(114.6,3.6,55.900000000000006,26.299999999999997), null);


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
	this.shape.setTransform(8.6248,9.4677,0.2056,0.2056);

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
	this.shape.setTransform(565,-105.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmBCIAAhQIgBAAIgDAQIgSBAIgfAAIgVhSIAABSIgkAAIAAiEIAzAAIAWBaIABAAIAVhaIAyAAIAACEg");
	this.shape_1.setTransform(550.95,-105.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlBCIAAhQIgWBQIgeAAIgRhAIgEgSIgBAAIAABSIgjAAIAAiEIAzAAIAXBaIAAAAIAVhaIAyAAIAACEg");
	this.shape_2.setTransform(534.55,-105.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcBDIgIgZIgqAAIgIAZIghAAIAwiFIAgAAIAvCFgAgNARIAZAAIgMgkg");
	this.shape_3.setTransform(519.6,-105.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQBCIgYgtIgKAAIAAAtIgkAAIAAiEIA1AAQANAAAJACQAMAEAFAEQAHAFAEAJQAEAIAAAMQAAAPgGAJQgIAKgMADIAcAzgAgSgGIAPAAQALAAAFgEQAFgDAAgIQAAgIgFgEQgGgEgKAAIgPAAg");
	this.shape_4.setTransform(506.975,-105.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbBAQgMgFgHgKQgHgJgDgMQgEgMAAgQQAAgPAEgNQAFgNAIgJQAIgJALgEQAMgFAOAAQAKAAAIACQAHABAJAGQAIAFAFAIQAGAJADANIghAJIgEgLQgDgEgDgDQgCgDgEgBIgHgBIgJABQgFADgDAEQgEAFgCAGQgDAJAAAKQAAAIACAHIADAMQADAEADACIAGAFIAGACIAEAAQAJAAAGgEQAGgDADgJIgUAAIAAgZIA2AAIAABDIgcAAIAAgRIgBAAIgDAGQgDAEgEACQgEAEgGACQgFACgHAAQgRAAgKgFg");
	this.shape_5.setTransform(493.175,-105.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBDQgGgBgJgEQgIgEgFgFQgIgGgDgIQgGgIgCgJQgCgKAAgMQAAgLACgKQACgJAGgJQAFgIAGgEQAFgGAIgEIAPgGIAPgBQAJAAAHABQAKADAFADQAJAEAFAGQAGAFAEAHQAEAGAEAMQADALgBAKQABALgDALQgEAMgEAFQgDAHgHAHQgGAFgIAEQgIAEgHABQgHACgJAAgAgLgjQgGADgDAEQgFAGgBAHQgCAJAAAGQAAAHACAKQACAIAEAFQADAFAGADQAGACAFAAQAIAAAEgCQAHgDADgFQAEgGABgHQACgGAAgLQAAgJgCgGQgBgGgEgHQgDgEgHgDQgFgDgHAAQgFAAgGADg");
	this.shape_6.setTransform(479.5,-105.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQBCIgZgtIgJAAIAAAtIgkAAIAAiEIA1AAQAMAAAKACQAMAEAGAEQAGAFAFAJQADAHAAANQAAAQgHAIQgHAKgNADIAcAzgAgSgGIAQAAQAJAAAGgEQAEgDAAgIQAAgIgEgEQgHgEgIAAIgQAAg");
	this.shape_7.setTransform(466.3,-105.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag1BCIAAiEIBAABIANADQAFABAHADQAFAEAFAEQADAGACAHQADAHAAAKQAAAIgDAJQgCAGgEAFQgDADgHAFIgNAFIgMACIgbABIAAAqgAgRgCIAPAAQAFAAAEgCQAEAAADgDIAEgGIABgGIgBgHIgEgGIgHgDQgEgCgFAAIgPAAg");
	this.shape_8.setTransform(454,-105.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQBCIgYgtIgKAAIAAAtIgkAAIAAiEIA1AAQAMAAAKACQALAEAGAEQAHAFAEAJQAEAIAAAMQAAAPgHAJQgHAKgNADIAdAzgAgSgGIAPAAQALAAAEgEQAGgDAAgIQAAgIgGgEQgFgEgKAAIgPAAg");
	this.shape_9.setTransform(436.325,-105.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPBDQgHgBgIgEIgOgJQgHgHgEgHQgEgHgDgKQgCgLgBgLQABgKACgLQADgKAEgIQAFgHAGgFQAGgGAIgEQAFgDAKgDIAPgBIAQABQAKADAFADQAIAEAFAGQAHAEAEAIQAGAJABAJQADAKABALQgBAMgDAKQgBAJgGAIQgDAIgIAGQgFAFgIAEQgHAEgIABIgQACIgPgCgAgLgjQgHADgDAEQgDAFgDAIQgCAGABAJQgBALACAGQADAJADAEQADAEAHAEQAFACAGAAQAHAAAGgCQAFgDAEgFQADgFACgIQACgKABgHQgBgGgCgJQgCgHgDgGQgEgEgFgDQgHgDgGAAQgGAAgFADg");
	this.shape_10.setTransform(422.65,-105.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBCIAAhlIgmAAIAAgfIBvAAIAAAfIgmAAIAABlg");
	this.shape_11.setTransform(409.725,-105.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAcBDIgIgZIgqAAIgIAZIghAAIAviFIAhAAIAvCFgAgNARIAZAAIgMgkIAAAAg");
	this.shape_12.setTransform(397.4,-105.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQBCIgYgtIgKAAIAAAtIgkAAIAAiEIA1AAQAMAAAKACQALAEAGAEQAIAGADAIQAEAIAAAMQAAAPgHAJQgHAKgNADIAdAzgAgSgGIAPAAQAKAAAFgEQAFgDAAgIQAAgIgFgEQgGgEgJAAIgPAAg");
	this.shape_13.setTransform(384.775,-105.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgwBCIAAiEIBeAAIAAAfIg6AAIAAAVIApAAIAAAbIgpAAIAAAZIA9AAIAAAcg");
	this.shape_14.setTransform(372.75,-105.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtBCIAAiEIAkAAIAABoIA3AAIAAAcg");
	this.shape_15.setTransform(361.95,-105.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgwBCIAAiEIBeAAIAAAfIg6AAIAAAVIApAAIAAAbIgpAAIAAAZIA9AAIAAAcg");
	this.shape_16.setTransform(350.8,-105.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVBCQgMgFgIgIQgIgIgGgOQgEgOAAgRQAAgKACgLQADgLAEgHQADgGAGgGQAFgFAIgFQAFgDAKgDQAHgBAIAAQAPAAAIADQAKAEAHAFQAHAGADAIQAFAIACAJIgjAKIgCgJIgFgIIgGgFQgDgBgGAAQgFAAgGADQgEACgEAFQgDAFgBAIQgCAGAAAJQAAALACAGQABAIADAFQADAEAFAEQAGACAGAAQAFABAEgCIAGgFIAFgIIADgLIAiAHIgHATQgDAJgIAGQgHAHgKADQgIADgPAAQgNAAgKgDg");
	this.shape_17.setTransform(338.15,-105.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAWBCIgXgoIgWAoIgmAAIAqhFIgng/IApAAIATAjIASgjIAmAAIgmBAIAqBEg");
	this.shape_18.setTransform(324.9,-105.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYBBQgLgGgHgJQgIgKgDgLQgEgOAAgPQAAgNAEgOQADgNAIgJQAHgJALgFQALgFANAAQAOAAAKAFQALAFAIAJQAGAIAFAOQAEAOAAANQAAAPgEAOQgEANgHAIQgIAJgLAGQgKAEgOAAQgMAAgMgEgAgQgeQgGAMAAASQAAAVAGAKQAGAKAKAAQALAAAGgKQAFgKAAgVQAAgUgGgKQgFgJgLAAQgKAAgGAJg");
	this.shape_19.setTransform(311.925,-105.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgmBCIAAgbIAXAAIAAhIIgFACIgMADIgGAAIAAgdQAJAAAEgCQAHgCAEgFIAiAAIAABpIATAAIAAAbg");
	this.shape_20.setTransform(301.725,-105.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASA1IAAgrIgjAAIAAArIgdAAIAAhpIAdAAIAAAoIAjAAIAAgoIAdAAIAABpg");
	this.shape_21.setTransform(564.825,-122.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOA1IAAhRIgeAAIAAgYIBZAAIAAAYIgfAAIAABRg");
	this.shape_22.setTransform(554.55,-122.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOA1IAAhpIAdAAIAABpg");
	this.shape_23.setTransform(547.45,-122.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAQA1IgOhBIgBAAIgPBBIgYAAIgdhpIAdAAIAOA/IAAAAIANg/IAZAAIAPA/IAMg/IAbAAIgcBpg");
	this.shape_24.setTransform(538.075,-122.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(297.8,-127.6,272.09999999999997,28.89999999999999), null);


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
	this.shape.setTransform(247.225,-15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZBDIgyhKIAABKIgjAAIAAiEIAmAAIAvBJIABAAIAAhJIAjAAIAACEg");
	this.shape_1.setTransform(234.025,-15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBDIAAiEIAjAAIAACEg");
	this.shape_2.setTransform(223.85,-15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZBDIgxhKIgBAAIAABKIgjAAIAAiEIAmAAIAvBJIABAAIAAhJIAjAAIAACEg");
	this.shape_3.setTransform(214.2,-15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARBDIgZgvIgKAAIAAAvIgkAAIAAiEIA1AAQANAAAJABQALADAGAFQAHAFAEAIQAEAIAAANQAAAPgGAJQgHAJgNAFIAcAzgAgSgGIAQAAQAKAAAFgDQAFgEAAgIQAAgJgFgDQgFgDgKgBIgQAAg");
	this.shape_4.setTransform(200.925,-15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcBDIgJgZIgoAAIgJAZIghAAIAviFIAhAAIAvCFgAgNAQIAYAAIgLgjIAAAAg");
	this.shape_5.setTransform(188.025,-15.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_6.setTransform(176.35,-15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSBDQgKgDgHgEQgHgEgGgGIgJgNIAagQIAHAIQAEAEAFACQADADAGACQAFABAEAAIAIAAIAGgDIAEgDQACgCAAgEQAAgCgCgDIgGgEIgHgDIgggJIgKgFQgFgCgEgEQgEgFgCgFQgCgFAAgIQAAgLADgHQADgHAIgGQAGgFAKgDQALgDAKAAQAKAAAIACQAJACAHAEIAMAIIAJAKIgYAUIgHgGIgIgGIgJgDIgHgCQgQAAAAAKQAAAEACABIAFAFIAHADIAIACIAXAHIALAFQAFACAEAEQAFAEACAGQACAGAAAHQAAAIgDAIQgDAGgHAHQgGAGgLADQgKAEgQAAQgMAAgIgCg");
	this.shape_7.setTransform(159.375,-15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgmAAIAAgdIBvAAIAAAdIgmAAIAABng");
	this.shape_8.setTransform(147.425,-15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAZBDIgxhKIgBAAIAABKIgjAAIAAiEIAmAAIAvBJIAAhJIAkAAIAACEg");
	this.shape_9.setTransform(135,-15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBDIAAiEIAjAAIAACEg");
	this.shape_10.setTransform(124.825,-15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPBEQgKgDgFgDQgIgEgGgFIgLgNQgFgIgCgKQgCgIAAgOQAAgNACgIQACgJAFgIQAFgIAGgGQAGgFAIgEQAIgEAHgBQAIgCAHAAIAQACQAHABAIAEQAIAEAGAFQAIAIADAGQAFAIACAJQACAIAAANQAAAOgCAIQgCAKgFAIQgEAGgHAHQgGAFgIAEIgPAGIgQABQgHAAgIgBgAgLgkQgGAEgEAEQgEAFgBAHQgCAHAAAJQAAAKACAGQABAIAEAFQAEAGAGACQAFAEAGAAQAHAAAGgEQAFgCAEgGQADgEADgJQABgHAAgJQAAgIgBgIQgDgHgDgFQgEgEgFgEQgGgCgHAAQgGAAgFACg");
	this.shape_11.setTransform(114.875,-15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag1BDIAAiEIA/AAIAOACIAMAFIAJAJQAFAFACAHQACAGAAALQAAAIgCAJQgDAFgEAGQgEAEgGAEQgGAEgGABIgOADIgbAAIAAArgAgSgCIAQAAIAJgBQAFgCACgCQADgDAAgCIABgHIgBgIIgDgEQgDgEgEAAQgEgBgFgBIgQAAg");
	this.shape_12.setTransform(102.3,-15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_13.setTransform(310.65,-33.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgmAAIAAgdIBvAAIAAAdIgmAAIAABng");
	this.shape_14.setTransform(298.925,-33.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAcBDIgIgZIgqAAIgIAZIghAAIAwiFIAgAAIAvCFgAgNAQIAYAAIgLgjg");
	this.shape_15.setTransform(286.75,-33.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAQBDIgYgvIgKAAIAAAvIgkAAIAAiEIA1AAQAMAAAKABQAKADAHAFQAIAGADAHQAEAKAAALQAAAPgHAJQgHAJgNAFIAdAzgAgSgGIAPAAQAKAAAFgEQAFgDAAgIQAAgJgFgDQgFgDgKgBIgPAAg");
	this.shape_16.setTransform(274.325,-33.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_17.setTransform(262.5,-33.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgtBDIAAiEIAkAAIAABmIA3AAIAAAeg");
	this.shape_18.setTransform(251.85,-33.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_19.setTransform(240.9,-33.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVBBQgMgEgIgIQgJgJgFgMQgEgOAAgSQAAgMACgJQACgJAEgIQAEgIAGgGQAFgFAIgEQAIgFAHAAIAPgCQAOAAAJADQAKAEAHAFQAHAGADAIQAFAIABAIIgiAKQAAgEgDgFIgEgGIgGgGQgFgBgEAAQgFAAgGACQgEACgEAGQgDAFgCAHQgBAIAAAIQAAAJABAIQACAGADAGQAEAGAFACQAEAEAGAAQAEAAAFgDQAEgBADgDIAFgIIADgLIAiAIQgCAIgEAKQgFAIgHAHQgHAHgJACQgJAEgPAAQgNAAgKgEg");
	this.shape_20.setTransform(228.425,-33.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVBBQgLgEgJgIQgJgJgEgMQgFgNAAgTQAAgKACgLQADgKADgHQAEgIAGgGQAHgGAGgDQAIgEAHgBIAPgCQAOAAAKADQAKAEAGAFQAHAGAEAIQAEAIACAIIgiAKIgDgJIgFgGQgCgEgEgCQgEgBgFAAQgFAAgGACQgEADgEAFQgEAHgBAFQgBAIAAAIQAAAKACAHQABAIAEAEQACAFAGADQAFAEAFAAQAFAAAFgDQADgBADgDIAFgIIADgLIAiAIQgCALgEAHQgFAJgGAGQgJAHgIACQgJAEgPAAQgNAAgKgEg");
	this.shape_21.setTransform(215.425,-33.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAcBDIgIgZIgpAAIgJAZIghAAIAviFIAhAAIAvCFgAgNAQIAYAAIgLgjIAAAAg");
	this.shape_22.setTransform(202.575,-33.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag5hBIAsAAIASABQAJABAIADQAGACAJAGQAHAGAFAHQAEAHADAKQACAHABAPQgBAOgCAIQgDALgEAHQgGAHgHAFQgGAFgIAEQgIADgJABIg+ACgAgVAlIAJAAQAKAAAHgCQAGgCAEgFQAEgEACgHQABgHABgKQgBgJgBgHQgCgGgEgFQgEgEgHgDQgGgCgKAAIgJAAg");
	this.shape_23.setTransform(185.65,-33.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAZBDIgyhKIAABKIgkAAIAAiEIAnAAIAvBJIABAAIAAhJIAjAAIAACEg");
	this.shape_24.setTransform(172.05,-33.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAcBDIgJgZIgoAAIgJAZIghAAIAviFIAhAAIAvCFgAgNAQIAYAAIgLgjIAAAAg");
	this.shape_25.setTransform(158.475,-33.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag1BDIAAiEIA/AAIAOACIAMAFIAKAJIAGAMQACAGAAALQAAAIgCAJQgDAFgEAGQgEAEgGAEQgGAEgGABIgNADIgbAAIAAArgAgRgCIAPAAQAHAAADgBQAEgCACgCQADgDABgCIABgHIgBgIIgEgEQgDgEgDAAQgEgBgGgBIgPAAg");
	this.shape_26.setTransform(142.4,-33.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPBEQgKgDgFgDQgIgEgGgFQgHgHgEgGQgFgIgCgKQgCgIAAgOQAAgNACgIQACgJAFgIQADgGAIgIQAGgFAIgEQAIgEAHgBQAIgCAHAAIAQACQAHABAIAEQAIAEAGAFQAIAIADAGQAFAIACAJQACAIAAANQAAAOgCAIQgCAKgFAIQgEAGgHAHQgGAFgIAEIgPAGIgQABQgHAAgIgBgAgLgkQgGAEgEAEQgEAFgBAHQgCAHAAAJQAAAKACAHQABAHAEAFQAEAGAGACQAFAEAGAAQAHAAAGgEQAFgCAEgGQAEgFABgHQACgHAAgKQAAgJgCgHQgBgHgEgFQgEgEgFgEQgGgCgHAAQgGAAgFACg");
	this.shape_27.setTransform(128.975,-33.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAWBDIAAg2IgrAAIAAA2IgkAAIAAiEIAkAAIAAAxIArAAIAAgxIAkAAIAACEg");
	this.shape_28.setTransform(115.125,-33.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgSBDQgKgDgHgEQgHgEgGgGIgJgNIAagQIAHAIIAIAGQAEADAGACQAFABAEAAIAIAAIAGgDIAEgEQACgBAAgEQAAgCgCgDIgGgEIgHgDIgggJIgKgFQgFgCgEgEQgEgFgCgFQgCgFAAgIQAAgLADgHQADgHAIgGQAGgFAKgDQALgDAKAAQAKAAAIACQAJACAHAEIAMAIIAJAKIgYAUIgHgGIgIgGIgJgDIgHgCQgQAAAAAKQAAAEACABIAFAFIAHADIAUAFIAWAJQAFACAEAEQAFAEACAGQACAGAAAHQAAAIgDAIQgDAGgHAHQgGAGgLADQgKAEgQAAQgMAAgIgCg");
	this.shape_29.setTransform(102.025,-33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(96.2,-40.3,219.40000000000003,31.799999999999997), null);


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
	this.shape.setTransform(593.5,-122.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYBAQgLgEgHgHQgGgGgEgLQgDgLAAgNIAAhPIAkAAIAABPQAAAOAFAGQAEAGAKAAQALAAAFgGQAFgGgBgOIAAhPIAkAAIAABPQAAANgDALQgEALgGAGQgHAIgKADQgLAEgPgBQgOABgKgEg");
	this.shape_1.setTransform(578.6,-122.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBCIgyhJIgBAAIAABJIgjAAIAAiEIAlAAIAxBKIAAhKIAkAAIAACEg");
	this.shape_2.setTransform(565.35,-122.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBCIAAiEIAjAAIAACEg");
	this.shape_3.setTransform(555,-122.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBCIAAhlIgmAAIAAgfIBvAAIAAAfIgmAAIAABlg");
	this.shape_4.setTransform(546.075,-122.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcBDIgJgZIgpAAIgJAZIggAAIAviFIAhAAIAvCFgAgNARIAYAAIgLgkIAAAAg");
	this.shape_5.setTransform(535.75,-122.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtBCIAAiEIAkAAIAABoIA3AAIAAAcg");
	this.shape_6.setTransform(524.1,-122.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1BCIAAiEIA/ABIAOADQAGABAGADQAGAEADAEQAGAHABAGQACAGAAALQAAALgCAGQgDAHgEAEQgEAFgGADIgMAFIgOACIgaABIAAAqgAgRgCIAQAAQAFAAAEgCQADAAADgDQADgCAAgEIABgGIgBgHQAAgDgDgDQgCgCgEgBQgEgCgFAAIgQAAg");
	this.shape_7.setTransform(512.65,-122.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBCIAAg3IguhNIAkAAIAbAvIAcgvIAkAAIguBNIAAA3g");
	this.shape_8.setTransform(495.45,-122.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1hCIA4AAIAWACIALAEIAIAFIAGAJQACAFAAAIQAAAIgCAEQgCAGgEADQgEAFgFACIgKACIAAABQAGABAGABQAFADAEADQAEAEACAFQACAHAAAIQAAAFgCAHQgCAHgEADQgDAEgFADIgLAFIgLACIhFAAgAgSAnIASAAQAJAAAFgDQAFgEAAgHQAAgHgFgDQgEgDgKAAIgSAAgAgSgNIARAAIAIgBIAFgCIADgEIABgFIgBgGIgDgDQgBgCgEgBIgHgBIgSAAg");
	this.shape_9.setTransform(482.775,-122.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcBAQgKgFgIgKQgGgJgEgMQgEgPAAgNQAAgQAFgMQAEgNAHgJQAJgJALgEQALgFAPAAQAKAAAIACQAHACAJAFQAHAFAGAIQAFAJAEANIghAJIgFgLIgEgHIgHgEIgIgBQgEAAgEABQgFADgEAEQgDAFgCAGQgCAHgBAMIACAPIADAMQADAEADACIAFAFIAHACIAFAAQAIAAAGgEQAGgEACgIIgTAAIAAgZIA2AAIAABDIgcAAIAAgRIgBAAIgDAGIgGAGIgLAGQgFACgHAAQgRAAgLgFg");
	this.shape_10.setTransform(464.05,-122.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZBCIgxhJIgBAAIAABJIgjAAIAAiEIAmAAIAvBKIABAAIAAhKIAjAAIAACEg");
	this.shape_11.setTransform(450.675,-122.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRBCIAAiEIAjAAIAACEg");
	this.shape_12.setTransform(440.35,-122.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAZBCIgxhJIgBAAIAABJIgjAAIAAiEIAmAAIAvBKIABAAIAAhKIAjAAIAACEg");
	this.shape_13.setTransform(430.5,-122.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRBCIAAiEIAjAAIAACEg");
	this.shape_14.setTransform(420.15,-122.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag6BCIAAiEIA+ACQAJABAJAEQAJACAGAGQAGAEAFAHQAGAIACAJQADALAAAMQAAAMgDAKQgCAJgGAJQgFAIgGAEQgJAHgGACQgIADgKACIgSAAgAgWAmIAKAAQALAAAFgCQAGgDAFgEQAEgGACgGQACgKAAgHQAAgHgCgIQgCgIgEgEQgEgEgHgCQgFgCgLAAIgKAAg");
	this.shape_15.setTransform(410.725,-122.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgwBCIAAiEIBeAAIAAAfIg6AAIAAAVIAqAAIAAAbIgqAAIAAAZIA9AAIAAAcg");
	this.shape_16.setTransform(393.35,-122.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRBDIgtiFIAkAAIAaBWIAAAAIAchWIAjAAIgtCFg");
	this.shape_17.setTransform(381.075,-122.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPBDQgHgBgIgEIgOgJQgHgHgEgHQgEgHgDgKQgCgLAAgLQAAgKACgLQADgKAEgIQAFgHAGgFQAGgGAIgEQAFgDAKgDIAPgBIAQABQAKADAFADQAHAEAHAGQAFAFAFAHQAFAIADAKQADALAAAKQAAALgDALQgDAKgFAHQgDAHgHAHQgHAFgHAEQgHAEgIABIgQACIgPgCgAgLgjQgHAEgCADQgEAGgDAHQgCAGAAAJQAAALACAGQADAIAEAFQACAEAHAEQAFACAGAAQAHAAAGgCQAFgDAEgFQACgEADgJQACgKABgHQgBgGgCgJQgCgIgDgFQgEgEgFgDQgHgDgGAAQgGAAgFADg");
	this.shape_18.setTransform(368.3,-122.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgtBCIAAiEIAkAAIAABoIA3AAIAAAcg");
	this.shape_19.setTransform(356.45,-122.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AASA1IAAgrIgjAAIAAArIgcAAIAAhpIAcAAIAAAoIAjAAIAAgoIAdAAIAABpg");
	this.shape_20.setTransform(595.95,-139.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNA1IAAhRIgfAAIAAgYIBZAAIAAAYIgfAAIAABRg");
	this.shape_21.setTransform(585.675,-139.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNA1IAAhpIAbAAIAABpg");
	this.shape_22.setTransform(578.55,-139.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAQA1IgOhBIgBAAIgPBBIgYAAIgdhpIAdAAIAOA/IAAAAIANg/IAZAAIAOA4IABAHIAMg/IAbAAIgcBpg");
	this.shape_23.setTransform(569.175,-139.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(351.9,-144.5,248.89999999999998,28.900000000000006);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgtBDIAAiEIAkAAIAABmIA3AAIAAAeg");
	this.shape.setTransform(336.25,-14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBDIAAiEIAkAAIAABmIA3AAIAAAeg");
	this.shape_1.setTransform(325.7,-14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBDIAAiEIAjAAIAACEg");
	this.shape_2.setTransform(316.9,-14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1hBIBDAAIALABIAKADQAFACAEAFQAEAEACAFQACAFAAAHQAAAGgCAHIgGAJQgEADgFACQgFADgFABIAAAAIAMACQAGADADADQAEAEACAGQACAFAAAIQAAAIgCAGIgGAJQgEAFgFACQgEADgGABIgLADIhFABgAgSAnIASAAQAKAAAEgEQAFgDgBgHQABgGgFgEQgFgDgJgBIgSAAgAgSgMIARAAIAHgBIAGgDIADgEIABgGIgBgFIgDgEIgFgCIgIgBIgRAAg");
	this.shape_3.setTransform(307.55,-14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5hBIArAAIATABQAJABAIADQAHACAHAGQAHAFAGAIQAEAHADAKQACAKABAMQgBALgCALQgDALgFAHQgEAHgIAFQgGAFgIAEQgJADgJABIg9ACgAgVAlIAKAAQAJAAAGgCQAHgCAEgFQAEgDACgJQABgGABgKQAAgJgCgHQgCgGgEgFQgEgEgHgDQgGgCgKAAIgJAAg");
	this.shape_4.setTransform(289.65,-14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBEQgKgDgFgDQgIgEgGgFQgHgHgEgGQgFgIgCgKQgCgIAAgOQAAgNACgIQACgJAFgIQADgGAIgIQAGgFAIgEQAIgEAHgBQAIgCAHAAIAQACQAHABAIAEQAIAEAGAFQAIAIADAGQAFAIACAJQACAIAAANQAAAOgCAIQgCAKgFAIQgEAGgHAHQgGAFgIAEIgPAGIgQABQgHAAgIgBgAgMgkQgFAEgEAEQgEAFgBAHQgCAHAAAJQAAAKACAGQABAIAEAFQAEAGAFACQAGAEAGAAQAHAAAGgEQAFgCAEgGQAEgFABgIQACgGAAgKQAAgJgCgHQgBgHgEgFQgEgEgFgEQgGgCgHAAQgGAAgGACg");
	this.shape_5.setTransform(275.575,-14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBEQgKgDgFgDIgOgJQgGgGgEgHQgFgIgDgKQgDgLABgLQgBgKADgLQADgKAFgHQADgHAHgHIAOgJQAIgEAHgBIAPgCIAQACQAHABAIAEQAIAEAGAFQAHAGADAIQAFAHADAKQACALAAAKQAAALgCALQgDAKgFAIQgFAHgFAGQgGAFgIAEQgFADgKADIgQABIgPgBgAgLgkQgHAEgDAEQgDAFgDAHQgBAHAAAJQAAAKABAGQADAIADAFQADAFAHADQAFAEAGAAQAHAAAFgEQAGgCADgGQAEgEACgJQACgKAAgGQAAgGgCgKQgCgHgEgFQgDgEgGgEQgFgCgHAAQgGAAgFACg");
	this.shape_6.setTransform(261.45,-14.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtBDIAAiEIBbAAIAAAdIg3AAIAAAbIAmAAIAAAbIgmAAIAAAxg");
	this.shape_7.setTransform(249.75,-14.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARBDIgZgvIgKAAIAAAvIgjAAIAAiEIA0AAQANAAAJABQAKADAHAFQAHAFAEAIQAEAIAAANQAAAPgHAJQgHAJgMAFIAcAzgAgSgGIAPAAQALAAAEgDQAGgEAAgIQAAgJgGgDQgEgDgLgBIgPAAg");
	this.shape_8.setTransform(232.9,-14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZBAQgLgEgGgHQgHgHgDgLQgDgKAAgNIAAhOIAkAAIAABOQAAAOAEAGQAGAHAJAAQALAAAFgHQAEgGAAgOIAAhOIAkAAIAABOQAAALgDAMQgEALgGAHQgHAHgLAEQgKADgPABQgOgBgLgDg");
	this.shape_9.setTransform(219.85,-14.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPBEQgKgDgFgDQgIgEgGgFIgLgNQgDgGgEgMQgCgIAAgOQAAgNACgIQAEgMADgFQAFgIAGgGQAGgFAIgEQAIgEAHgBQAIgCAHAAIAQACQAHABAIAEQAIAEAGAFQAIAIADAGQAFAIACAJQACAIAAANQAAAOgCAIQgCAKgFAIQgEAGgHAHQgGAFgIAEIgPAGIgQABQgHAAgIgBgAgLgkQgGAEgEAEQgEAFgBAHQgCAHAAAJQAAAKACAGQABAIAEAFQAEAGAGACQAFAEAGAAQAHAAAGgEQAFgCAEgGQADgEADgJQABgHAAgJQAAgIgBgIQgDgHgDgFQgEgEgFgEQgGgCgHAAQgGAAgFACg");
	this.shape_10.setTransform(206.275,-14.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBDIAAg4IgvhMIAlAAIAbAuIAcguIAkAAIguBMIAAA4g");
	this.shape_11.setTransform(192.8,-14.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgtBDIAAiEIBbAAIAAAdIg3AAIAAAbIAmAAIAAAbIgmAAIAAAxg");
	this.shape_12.setTransform(177.35,-14.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgtBDIAAiEIBbAAIAAAdIg3AAIAAAbIAmAAIAAAbIgmAAIAAAxg");
	this.shape_13.setTransform(166.85,-14.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPBEQgKgDgFgDQgIgEgGgFQgHgHgEgGQgFgIgCgKQgCgIAAgOQAAgNACgIQACgJAFgIQADgGAIgIQAGgFAIgEQAIgEAHgBQAIgCAHAAIAQACQAHABAIAEQAIAEAGAFQAIAIADAGQAFAIACAJQACAIAAANQAAAOgCAIQgCAKgFAIQgEAGgHAHQgGAFgIAEIgPAGIgQABQgHAAgIgBgAgMgkQgFAEgEAEQgEAFgBAHQgCAHAAAJQAAAKACAGQABAIAEAFQAEAGAFACQAGAEAGAAQAHAAAGgEQAFgCAEgGQAEgFABgIQACgGAAgKQAAgJgCgHQgBgHgEgFQgEgEgFgEQgGgCgHAAQgGAAgGACg");
	this.shape_14.setTransform(154.025,-14.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAsBBQgHgDgFgGQgFgGgDgIQgCgKAAgJQAAgJACgJQADgHAFgGQAFgGAHgDQAHgEAJAAQAJAAAHAEQAHADAFAGQAGAGACAHQACAHAAALQAAAMgCAHQgCAIgGAGQgFAGgHADQgIAEgIAAQgIAAgIgEgAA0AGQgCAGAAALQAAAMACAGQADAGAFAAQAGAAACgGQACgGAAgMQAAgLgCgGQgCgFgGAAQgGAAgCAFgAg2BDIBPiEIAeAAIhPCEgAhLASQgHgDgFgGQgEgFgEgIQgCgJAAgKQAAgJACgJQADgJAFgFQAEgGAIgEQAHgDAJAAQAKAAAGADQAIAEAEAGQAGAGACAIQADAIAAAKQAAALgDAIQgDAHgFAGQgEAGgIADQgGADgKAAQgJAAgHgDgAhDgoQgCAIAAAJQAAALADAHQACAFAFAAQAGAAACgFQACgGAAgMQAAgLgCgGQgCgGgGAAQgFAAgDAGg");
	this.shape_15.setTransform(131.575,-14.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYBAQgKgEgIgKQgIgJgDgNQgEgNAAgPQAAgOAEgOQADgLAIgKQAIgKAKgEQALgFANAAQAOAAAKAFQALAEAIAKQAIAKADALQAEAOAAAOQAAAPgEANQgDANgIAJQgIAKgLAEQgKAFgOAAQgNAAgLgFgAgQgdQgFAIAAAVQAAAVAFAKQAGAKAKAAQALAAAGgKQAFgLAAgUQAAgTgGgKQgFgKgLAAQgKAAgGAKg");
	this.shape_16.setTransform(114.875,-14.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRBDQgIgBgFgCIgMgFIgLgGIARgYIAIAEIAIAEIARADQALAAAFgFQAFgGAAgIQAAgKgFgFQgEgFgKAAQgGAAgFACQgGADgFAGIgXgHIAGhIIBUAAIgCAbIg3AAIgCAXIADgDIAGgCQADgBADAAIAKgBQAKAAAJADQAJAEAFAGQAFAFADAIQADAJAAAJQAAAMgEAHQgEAJgHAHQgIAGgJADQgKAEgNAAIgQgBg");
	this.shape_17.setTransform(102.975,-14.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPBEQgKgDgFgDQgIgEgGgFQgHgHgEgGQgFgIgCgKQgCgIAAgOQAAgNACgIQACgJAFgIQADgGAIgIQAGgFAIgEQAIgEAHgBQAIgCAHAAIAQACQAHABAIAEQAIAEAGAFQAIAIADAGQAFAIACAJQACAIAAANQAAAOgCAIQgCAKgFAIQgEAGgHAHQgGAFgIAEIgPAGIgQABQgHAAgIgBgAgMgkQgFAEgEAEQgEAFgBAHQgCAHAAAJQAAAKACAHQABAHAEAFQAEAGAFACQAGAEAGAAQAHAAAGgEQAFgCAEgGQAEgFABgHQACgHAAgKQAAgJgCgHQgBgHgEgFQgEgEgFgEQgGgCgHAAQgGAAgGACg");
	this.shape_18.setTransform(187.125,-32.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgnAAIAAgdIBxAAIAAAdIgnAAIAABng");
	this.shape_19.setTransform(174.2,-32.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag1BDIAAiEIA/AAIAOACIAMAFIAJAJIAHAMQACAGAAALQAAAIgCAJQgCAFgFAGQgEAEgGAEQgFAEgHABIgOADIgaAAIAAArgAgRgCIAPAAQAHAAADgBQAEgCACgCQADgDAAgCIABgHIgBgIIgDgEQgDgEgDAAQgEgBgGgBIgPAAg");
	this.shape_20.setTransform(158.4,-32.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYBAQgLgEgGgHQgHgHgEgLQgDgKAAgNIAAhOIAkAAIAABOQAAAOAFAGQAFAHAKAAQAKAAAFgHQAEgGABgOIAAhOIAjAAIAABOQAAANgDAKQgEALgHAHQgGAHgLAEQgKADgPABQgOgBgKgDg");
	this.shape_21.setTransform(145.4,-32.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgmAAIAAgdIBvAAIAAAdIgmAAIAABng");
	this.shape_22.setTransform(128.625,-32.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_23.setTransform(117.4,-32.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgcBAQgKgFgIgJQgHgKgEgNQgDgNAAgOQAAgPAEgNQAFgNAIgIQAHgJAMgGQAMgEAOAAIASACQAKACAGAEQAGAFAHAJQAFAJAEAMIghAJQgBgFgDgGIgGgHIgGgDQgDgCgFABIgIABQgEACgFAFQgDAEgDAHQgCAHAAAMQAAAIACAHQAAAFADAGQACAEAEAEIAGAEIAGACIAEABQAJAAAGgFQAGgFADgGIgUAAIAAgaIA2AAIAABEIgcAAIAAgSIgBAAIgDAGQgDAEgEADIgKAFQgFACgHAAQgRAAgLgFg");
	this.shape_24.setTransform(104.175,-32.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(97.6,-39.1,243.29999999999998,31.8);


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
p.nominalBounds = new cjs.Rectangle(0,0,1086,135);


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
	this.shape.setTransform(470.5675,-141.2792,0.8212,0.8209);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAeIAAg7IAGAAIAAA7g");
	this.shape_1.setTransform(467.8574,-142.6336,0.8212,0.8209);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAeIAAg6IAHAAIAAAGIAFgFQAEgCAEABIAHAAQADACACADIAEAGIABAKQAAAGgBADQgBADgDAEIgFAEIgIABQgDAAgDgBIgGgFIAAAWgAgGgVIgFAFIAAASQAFAGAGAAQAHAAACgDQADgEAAgIQAAgIgDgEQgEgDgEAAQgEAAgDABg");
	this.shape_2.setTransform(464.9421,-141.3203,0.8212,0.8209);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAeIAAg6IAHAAIAAAGIAGgFQACgCAFABIAHAAIAFAFIAEAGIABAKIgBAJIgEAHIgGAEIgHABIgGgBIgGgFIAAAWgAgFgVIgGAFIAAASQAGAGAFAAQAGAAADgDQADgEAAgIQAAgHgDgFQgEgDgFAAQgCAAgDABg");
	this.shape_3.setTransform(460.8155,-141.3203,0.8212,0.8209);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOATQgDgDAAgFIABgGQACgDADgCIAJgDQAFgCAHAAIAAgCQAAgIgIAAQgDAAgEACIgHAEIgEgEQAEgEAFgCQAEgCAGAAIAGABQADABACACIACAEIABAeIABAEIgHAAIgBgCIAAgEQgHAHgIAAQgFAAgEgDgAAAABIgGACIgDADIgBAEQAAABAAABQAAAAAAABQAAAAABABQAAAAABABQABABAEAAQADAAAEgBIAGgFIAAgLg");
	this.shape_4.setTransform(456.7095,-141.9564,0.8212,0.8209);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJATQgDgBgEgDIAEgFIAGAFQADABADAAQAGAAACgBQACgCAAgEQAAgCgCgCIgOgEIgEgCIgEgEIgBgEIABgFIADgDIAFgDIAGgBQAFAAAEACQADABADADIgDAFIgGgEQgDgBgDgBQgEABgCABIgCAEQAAADACABIAOAFIAFABIADAEQABADAAACQAAADgBADQgBACgDACIgFACIgHABQgEAAgFgDg");
	this.shape_5.setTransform(451.2895,-141.9359,0.8212,0.8209);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAdQgEgCgEgEQgEgGgBgEQgCgHAAgGIACgMIAFgJQAEgEAEgCQAFgDAEAAQAFAAADACIAHADQADADACADIACAIIgHABQgCgGgDgEQgEgDgGAAQgDAAgDACQgEABgCADQgCADgBAFIgCAJQAAAMAFAGQAFAGAHAAQANAAADgOIAHACQgBAEgCAEIgFAGIgHAEIgIABQgFAAgEgCg");
	this.shape_6.setTransform(447.245,-142.6542,0.8212,0.8209);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATAdIgIgEIgIAEQgDACgGAAIgIgBIgHgEIgDgFQgCgCAAgEQAAgDACgDQAAgCADgDIAEgEIAFgCIgDgHIgBgGIABgGIADgEIAEgDQADgCAEAAIAEABIAEADIADAEIABAEQAAAEgCACIgDAEIgEAEIgFADIANARIAEgHIACgJIAHAAIgDALIgFAJIAGADIAGABIAAAHgAgQAHQgCADAAAEQAAAFADADQADADAHAAQAHAAAEgEIgFgFIgEgHIgDgEIgDgEIgHAGgAgHgWQgCADAAADIABAGIACAFIAFgCIACgDIACgDIABgEQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgCgCAAQgEAAgCACg");
	this.shape_7.setTransform(442.3793,-142.6542,0.8212,0.8209);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgSAAIAAgHIArAAIAAAHIgTAAIAAA0g");
	this.shape_8.setTransform(437.7395,-142.6336,0.8212,0.8209);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-2.7,-145.2,474.9,145.29999999999998), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AANA1IgTglIgIAAIAAAlIgdAAIAAhpIAqAAQAKAAAIACQAIABAGAFQAFAEADAGQAEAHAAAKQAAAMgGAHQgFAHgLAEIAXAogAgOgEIAMAAQAIAAAEgDQAEgDAAgHQAAgGgEgDQgEgDgIAAIgMAAg");
	this.shape.setTransform(536.775,-103.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWA1IgGgTIghAAIgHATIgaAAIAlhqIAaAAIAmBqgAgKAOIATAAIgJgdg");
	this.shape_1.setTransform(526.3,-103.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmA1IAAhpIBLAAIAAAYIgvAAIAAARIAhAAIAAAWIghAAIAAATIAxAAIAAAXg");
	this.shape_2.setTransform(516.825,-103.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOA1IAAgsIgkg9IAdAAIAVAmIAWgmIAdAAIglA9IAAAsg");
	this.shape_3.setTransform(506.85,-103.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWA1IgGgTIghAAIgHATIgaAAIAmhqIAZAAIAmBqgAgKAOIATAAIgJgdIAAAAg");
	this.shape_4.setTransform(493.575,-103.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmA1IAAhpIBLAAIAAAYIguAAIAAARIAgAAIAAAWIggAAIAAATIAwAAIAAAXg");
	this.shape_5.setTransform(480.525,-103.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRA0QgIgCgIgIQgGgGgFgLQgDgKAAgPQAAgJABgHQADgJADgFQADgHAEgEIALgHQAFgDAHgCQAGgBAGAAQALAAAHADQAIACAFAFQAGAEADAHQAEAHABAGIgcAIIgCgHIgDgGIgFgEQgDgBgFAAQgDAAgFACQgEACgCAEQgCADgCAHQgCAGAAAGQAAAIACAGIAEAKIAGAGQAEACAFAAIAHgBIAFgEQADgCABgEIADgJIAbAGQgCAKgDAFQgFAIgEAEQgFAFgJADQgGACgMAAQgJAAgKgDg");
	this.shape_6.setTransform(470.425,-103.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNA1IAAhpIAbAAIAABpg");
	this.shape_7.setTransform(462.725,-103.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQA1IgPhBIgPBBIgZAAIgchpIAdAAIAOA/IANg/IAZAAIALAvIABAFIACALIABAAIABgLIALg0IAbAAIgcBpg");
	this.shape_8.setTransform(453.375,-103.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNA1IAAhRIgfAAIAAgYIBZAAIAAAYIgfAAIAABRg");
	this.shape_9.setTransform(441.775,-103.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AASBDIgeg1IgKALIAAAqIgkAAIAAiEIAkAAIAAAvIAjgvIAqAAIgtA0IAxBQg");
	this.shape_10.setTransform(535.675,-121.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVBBQgMgEgIgIQgJgJgEgNQgFgMAAgTQAAgNACgIQACgJAEgJQAGgJAEgEQAGgFAHgEIAPgGIAPgBQAPAAAJADQAJADAHAGQAGAFAEAJQAFAHABAJIgiAKQAAgEgDgFIgEgHIgGgFQgEgBgFAAQgFAAgGACQgFAEgDAEQgDAEgCAIQgBAIAAAIQAAAJABAIQACAGADAGQAEAGAFACQAEADAGAAQAGAAADgBIAHgFQAEgFABgDIADgLIAiAHQgBAHgFAMQgFAKgHAFQgHAHgJACQgLAEgNAAQgLAAgMgEg");
	this.shape_11.setTransform(521.975,-121.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAbBDIgIgZIgoAAIgJAZIghAAIAviFIAhAAIAvCFgAgNARIAYAAIgLgkIAAAAg");
	this.shape_12.setTransform(508.95,-121.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1hBIBDAAIALABIALAEIAIAGIAGAIQACAFAAAIQAAAIgCAFQgCAFgEAEQgEADgFACIgKAEIAAAAIAMACQAFADAEADQAEAEACAGQACAGAAAHQAAAGgCAIQgCAFgEAEQgDAEgFADIgLAEIgLADIhFABgAgSAoIASAAQAJgBAFgEQAFgDAAgHQAAgGgFgEQgEgEgKAAIgSAAgAgSgMIARAAIAIgBIAFgDIADgEIABgGIgBgEIgDgFIgFgCIgHgBIgSAAg");
	this.shape_13.setTransform(496.175,-121.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXBAQgMgFgGgJQgJgJgDgNQgEgNAAgPQAAgOAEgNQADgNAJgJQAGgJAMgFQAJgFAOAAQAOAAAKAFQALAFAIAJQAGAIAGAOQADAMAAAPQAAAQgDAMQgGAOgGAIQgIAJgLAFQgLAFgNAAQgMAAgLgFgAgQgeQgFALgBATQAAAUAHALQAEAKALAAQAMAAAEgKQAGgKAAgVQAAgUgGgKQgEgJgMAAQgKAAgGAJg");
	this.shape_14.setTransform(478.3,-121.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYBAQgKgFgIgJQgHgJgEgNQgEgNAAgPQAAgOAEgNQAEgNAHgJQAIgJAKgFQAKgFAOAAQAPAAAKAFQAKAFAIAJQAHAIAEAOQAEAMAAAPQAAAQgEAMQgEAOgHAIQgIAJgKAFQgMAFgNAAQgMAAgMgFgAgQgeQgGALAAATQABAUAFALQAGAKAKAAQALAAAGgKQAFgKAAgVQAAgUgFgKQgGgJgLAAQgKAAgGAJg");
	this.shape_15.setTransform(465.65,-121.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgmBDIAAgbIAXAAIAAhKIgFADIgMADIgGABIAAgdIANgDQAHgCAEgEIAiAAIAABpIATAAIAAAbg");
	this.shape_16.setTransform(455.475,-121.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJBSIAAgPQgGAAgKgDQgFgCgIgFQgGgEgEgFIgIgLIAXgPIALANIAHAEIAHAEIAAggIgRgEQgIgDgHgEQgHgEgEgHQgEgHAAgJQAAgJADgIQAEgHAGgGQAGgFAIgDQAJgDAKgBIAAgMIAUAAIAAAMIAOAEIALAFQAFADAEAFIAIAIIgaARIgIgJQgEgEgFgCIAAAcIATAGQAJADAGAFQAHAEADAGQADAHAAAJQAAAJgCAFQgDAHgFAGQgFAFgKAEQgIADgNACIAAAPgAAKArQAGgBADgEQADgEAAgFQAAgEgDgEQgCgCgHgCgAgQgnQgDADAAAFIAAAFIACADIAEADIAFACIAAgaQgGABgCAEg");
	this.shape_17.setTransform(445.375,-121.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSBDQgIgCgJgFQgGgDgGgHQgGgFgEgIIAbgQIAGAIIAIAHIAKAEIAKABIAHgBIAGgCQAEgBAAgCQACgCAAgEQAAgDgDgCIgEgEIgogMIgKgFQgGgDgDgDQgEgEgCgGQgDgGAAgHQAAgJAFgJQAEgIAGgFQAIgGAIgCQAKgDALAAQAIAAAKACQAIACAIAEIAMAIIAJAKIgYAUIgHgHIgIgFIgJgEIgIgBQgPAAAAAKIACAGQABACAEACIAHADIAfAJIAMAFQAEACAFAEQAEAEACAGQADAGAAAHQAAAIgEAHQgDAIgHAGQgGAGgLADQgLAEgPAAQgKAAgKgCg");
	this.shape_18.setTransform(432.55,-121.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgmAAIAAgdIBwAAIAAAdIgnAAIAABng");
	this.shape_19.setTransform(416,-121.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgwBDIAAiEIBeAAIAAAdIg6AAIAAAWIApAAIAAAbIgpAAIAAAYIA9AAIAAAeg");
	this.shape_20.setTransform(404.8,-121.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcBAQgKgFgIgKQgIgJgDgNQgDgPAAgMQAAgQAEgMQAEgLAJgLQAIgJAMgEQAKgFAPAAQAKAAAIACQAIABAIAFQAIAGAEAIQAGAIAEANIghAJIgEgKQgDgFgDgCIgGgEIgHgBQgEAAgFABQgFACgDAFQgFAFgCAGQgCAJAAAKQAAAIABAHIAEALQADAFADACIAGAFIAGACIAEAAQAJAAAGgEQAFgDAEgJIgUAAIAAgZIA2AAIAABDIgdAAIAAgRIAAAAIgDAGIgHAGIgKAGQgGACgHAAQgPAAgMgFg");
	this.shape_21.setTransform(391.55,-121.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag5BDIAAiEIA+ABQAJABAIADQAJAEAGAEQAEAEAIAJQAEAHADAKQADAKAAAMQAAALgDAMQgDAKgEAHQgGAHgHAFQgHAGgHADIgRAEIgSACgAgVAlIAKAAQAKAAAGgCQAGgBAEgGQAFgEABgHQACgHAAgKQAAgJgCgHQgCgHgEgEQgDgEgIgDQgFgCgLAAIgJAAg");
	this.shape_22.setTransform(373.6,-121.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABfBDIgyhKIgBAAIAABKIgjAAIAAiEIAmAAIAwBJIABAAIAAhJIAjAAIAACEgAgnBDIgIgZIgqAAIgIAZIghAAIAviFIAiAAIAuCFgAhRARIAaAAIgMgkg");
	this.shape_23.setTransform(352.8,-121.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(339.7,-129.2,201.90000000000003,30.89999999999999), null);


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
	this.shape.setTransform(293.625,-13.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQBDIgYguIgKAAIAAAuIgkAAIAAiFIA1AAQAMAAAKACQAKACAHAGQAIAGADAIQAEAIAAAMQAAAPgHAJQgHAJgNAEIAdA0gAgSgGIAPAAQAKAAAFgEQAFgDAAgIQAAgJgFgDQgFgEgKAAIgPAAg");
	this.shape_1.setTransform(281.225,-13.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwBDIAAiFIBeAAIAAAeIg6AAIAAAWIApAAIAAAbIgpAAIAAAZIA9AAIAAAdg");
	this.shape_2.setTransform(269.225,-13.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaBDIgzhKIAAAAIAABKIgkAAIAAiFIAmAAIAxBKIAAAAIAAhKIAkAAIAACFg");
	this.shape_3.setTransform(256.4,-13.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgnAAIAAgeIBwAAIAAAeIgmAAIAABng");
	this.shape_4.setTransform(243.25,-13.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQBDIgYguIgKAAIAAAuIgkAAIAAiFIA1AAQAMAAAKACQAKACAHAGQAIAGADAIQAEAHAAANQAAAQgHAIQgHAJgNAEIAdA0gAgSgGIAPAAQAKAAAFgEQAFgDAAgIQAAgJgFgDQgFgEgKAAIgPAAg");
	this.shape_5.setTransform(231.275,-13.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcBDIgJgZIgpAAIgIAZIghAAIAviFIAhAAIAvCFgAgNAQIAYAAIgLgjg");
	this.shape_6.setTransform(218.15,-13.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1BDIAAiFIA/ABIAOACQAGACAGADQAGAEAEAFQADAFADAGQACAJAAAJQAAAIgCAJQgDAFgEAGQgDAFgHADQgFADgIACIgMACIgbABIAAArgAgRgDIAPAAIAKgBIAGgDIAEgGIABgHIgBgHIgEgEQgCgDgEgBIgKgCIgPAAg");
	this.shape_7.setTransform(206,-13.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwBDIAAiFIBeAAIAAAeIg6AAIAAAWIApAAIAAAbIgpAAIAAAZIA9AAIAAAdg");
	this.shape_8.setTransform(189.1,-13.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtBDIAAiFIAkAAIAABoIA3AAIAAAdg");
	this.shape_9.setTransform(178.25,-13.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBDIAAg4IgvhNIAlAAIAbAvIAcgvIAlAAIgvBNIAAA4g");
	this.shape_10.setTransform(166.1,-13.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgnAAIAAgeIBxAAIAAAeIgnAAIAABng");
	this.shape_11.setTransform(153.85,-13.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSBDQgKgDgGgEQgJgGgEgEQgFgFgFgHIAagRIAHAJQAEADAFACQADADAGACIAJABIAIgBIAGgBIAEgFQACgCAAgCQAAgEgCgCIgGgEIgHgDIgfgJIgLgFIgJgGQgEgFgCgFQgCgEAAgJQAAgLADgHQADgHAIgHQAGgEAKgEQAKgCALAAQALAAAHACQAJACAHAEIAMAJIAJAJIgYAUIgHgHIgIgFIgIgEIgIgBQgQAAAAAKQAAAEACACIAFAEIAHADIAfAJIALAFIAKAGQAEAFACAFQACAEAAAJQAAAIgDAHQgDAJgGAFQgGAFgMAFQgKADgQAAQgMAAgIgCg");
	this.shape_12.setTransform(141.675,-13.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgwBDIAAiFIBeAAIAAAeIg6AAIAAAWIApAAIAAAbIgpAAIAAAZIA9AAIAAAdg");
	this.shape_13.setTransform(130.05,-13.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgtBDIAAiFIBbAAIAAAeIg3AAIAAAbIAmAAIAAAbIgmAAIAAAxg");
	this.shape_14.setTransform(119.2,-13.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRBDIAAiFIAjAAIAACFg");
	this.shape_15.setTransform(110.4,-13.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgtBDIAAiFIAkAAIAABoIA3AAIAAAdg");
	this.shape_16.setTransform(102.55,-13.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRBDIAAhnIgmAAIAAgeIBvAAIAAAeIgmAAIAABng");
	this.shape_17.setTransform(247.025,-31.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAcBDIgIgZIgqAAIgIAZIghAAIAwiFIAgAAIAvCFgAgNAQIAYAAIgLgjg");
	this.shape_18.setTransform(234.7,-31.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYBAQgKgEgIgKQgIgJgDgMQgEgOAAgPQAAgOAEgOQADgMAIgJQAIgKAKgEQALgFANAAQAOAAAKAFQALAEAIAKQAIAJADAMQAEAOAAAOQAAAPgEAOQgDAMgIAJQgIAKgLAEQgKAFgOAAQgNAAgLgFgAgQgeQgFAJAAAVQAAAWAFAJQAGAKAKAAQALAAAGgKQAFgLAAgUQAAgUgGgKQgFgKgLAAQgKAAgGAKg");
	this.shape_19.setTransform(217.475,-31.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYBAQgKgEgIgKQgIgJgDgMQgEgOAAgPQAAgOAEgOQADgMAIgJQAIgKAKgEQALgFANAAQAOAAAKAFQALAEAIAKQAIAJADAMQAEAOAAAOQAAAPgEAOQgDAMgIAJQgIAKgLAEQgKAFgOAAQgNAAgLgFgAgQgeQgGAKAAAUQAAAVAGAKQAGAKAKAAQALAAAGgKQAFgLAAgUQAAgUgGgKQgFgKgLAAQgKAAgGAKg");
	this.shape_20.setTransform(204.825,-31.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgmBDIAAgcIAXAAIAAhIIgLADIgGACIgGAAIAAgdQAGAAAIgCQAEgCAGgFIAiAAIAABpIATAAIAAAcg");
	this.shape_21.setTransform(194.625,-31.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJBSIAAgPIgQgDIgOgHQgFgEgFgFIgIgLIAYgPIALANIAHAEQAEADADAAIAAgeIgRgFQgJgDgGgEQgIgEgDgHQgEgHAAgJQAAgKAEgHQACgHAHgFQAGgGAIgDQAHgDAMgBIAAgMIAUAAIAAANQAIABAGACIALAFIAJAIIAHAIIgZARIgHgJQgHgFgDgBIAAAdIATAFQAJADAGAFQAGADAEAHQADAIABAIQgBAHgCAHQgDAIgFAFQgGAGgJADQgHAEgOABIAAAPgAAKArQAGgBADgEQACgCABgHQgBgFgCgCQgDgEgGgCgAgQgnQgEAEAAAEIABAFIADADIADADIAFACIAAgaQgGACgCADg");
	this.shape_22.setTransform(184.55,-31.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSBDQgKgDgHgEQgHgFgGgFIgJgMIAagRIAHAJQAEADAFACQADADAGACQAFABAEAAIAIgBIAGgBIAEgFQACgCAAgCQAAgDgCgDIgGgEQgCgCgFgBIgggJIgKgFQgFgDgEgDQgEgFgCgFQgCgEAAgJQAAgLADgHQADgHAIgHQAGgEAKgEQALgCAKAAQAKAAAIACQAJADAHADIAMAJIAJAJIgYAUIgHgHIgIgFIgJgEIgHgBQgQAAAAAKQAAAEACACIAFAEIAHADIAUAFIAWAJIAKAGQAEAFACAFQACAGAAAHQAAAIgDAHQgDAIgHAGQgGAGgLAEQgKADgQAAQgMAAgIgCg");
	this.shape_23.setTransform(171.725,-31.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag6hCIAsAAIASABQAJACAJADQAGACAJAGQAHAGAEAGQAGAIACAKQADAKAAAMQAAANgDAJQgDALgFAHQgFAIgHAEQgGAFgIADQgIAEgKABIg+ACgAgWAmIAKAAQAKAAAGgDQAGgBAFgFQAEgGACgHQABgGAAgKQAAgIgBgHQgCgIgEgEQgEgEgHgCQgHgDgJAAIgKAAg");
	this.shape_24.setTransform(154.125,-31.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAZBDIgxhKIgBAAIAABKIgjAAIAAiFIAmAAIAvBKIAAhKIAkAAIAACFg");
	this.shape_25.setTransform(140.35,-31.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgwBDIAAiFIBeAAIAAAeIg6AAIAAAWIApAAIAAAbIgpAAIAAAZIA9AAIAAAdg");
	this.shape_26.setTransform(127.675,-31.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag1BDIAAiFIA/ABIAOACQAGACAFADQAHAEADAFQAEAFADAGQACAJAAAJQAAAIgCAJQgEAHgEAEQgDAFgHADQgEADgHACIgOACIgbABIAAArgAgSgDIAQAAIAJAAIAHgEIADgFIABgIIgBgHIgDgEQgDgDgEgBQgEgCgFAAIgQAAg");
	this.shape_27.setTransform(115.95,-31.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSBDQgKgDgHgEQgHgFgGgFIgJgMIAagRIAHAJIAIAFQAEADAGACQAFABAEAAIAIgBIAGgBIAEgFQACgCAAgCQAAgDgCgDIgGgEIgHgDIgggJIgKgFQgFgDgEgDQgEgFgCgFQgCgEAAgJQAAgLADgHQADgHAIgHQAGgEAKgEQALgCAKAAQAKAAAIACQAJADAHADIAMAJIAJAJIgYAUIgHgHIgIgFIgJgEIgHgBQgQAAAAAKQAAAEACACIAFAEIAHADIAUAFIAWAJQAFACAEAEQAFAFACAFQACAGAAAHQAAAIgDAHQgDAIgHAGQgGAGgLAEQgKADgQAAQgMAAgIgCg");
	this.shape_28.setTransform(103.075,-31.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(97.3,-39.2,202.2,33), null);


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
	this.shape.graphics.f("#62676B").s().p("EAg7AE6IEVk8IkVk3IDNAAIEVE2IkVE9gAaQE6IEVk8IkVk3IDNAAIEVE2IkVE9gAevgCIkNE0IC4AAIEOk1IkOkvIi5AAgATmE6IEUk8IkUk3IDNAAIEVE2IkVE9gAM7E6IEVk8IkVk3IDNAAIEVE2IkVE9gARagCIkNE0IC4AAIEOk1IkOkvIi5AAgAGQE6IEUk8IkVk3IDOAAIEVE2IkVE9gAgaE6IEUk8IkUk3IDMAAIEVE2IkVE9gAEEgCIkME0IC3AAIENk1IkOkvIi3AAgAnEE6IEUk8IkVk3IDOAAIEUE2IkUE9gAtvE6IEVk8IkWk3IDOAAIEVE2IkVE9gApQgCIkNE0IC4AAIENk1IkOkvIi4AAgA0bE6IEUk8IkVk3IDOAAIEVE2IkVE9gA7GE6IEVk8IkVk3IDNAAIEVE2IkVE9gA2ngCIkOE0IC5AAIENk1IkOkvIi4AAgEghwAE6IEUk8IkVk3IDOAAIEUE2IkUE9gEgobAE6IEUk8IkVk3IDOAAIEVE2IkVE9gEgj8gACIkOE0IC4AAIEOk1IkOkvIi4AAg");
	this.shape.setTransform(1007.175,-5.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(748.3,-36.8,517.8,62.9);


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
	this.shape.setTransform(102.4062,439.8217,1.2408,1.24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51565A").s().p("AgXAeQgEgFAAgHQAAgGACgEQAEgFAEgDQAEgBAJgEIAUgEIAAgDQAAgMgNAAQgHAAgFACIgKAHIgGgGQAFgFAIgEQAHgDAJgBQAHABAEABQAEACACADQACABADAGQABADAAAGIAAAmIABAHIgKAAIgBgFIgBgFQgLALgNAAQgJgBgGgEgAAAABIgJAEQgFACgBADIgCAGQAAAFADACQAEACAEABQAGgBAGgCQAGgEAEgDIAAgRg");
	this.shape_1.setTransform(94.2479,438.2097,1.2408,1.24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#51565A").s().p("AgNAtQgFgCgEgEQgEgFgCgGQgCgGAAgJQAAgJACgFQACgHAEgEQAFgFAEgCQAFgCAGAAQAFAAAGADQAFADAEAEIAAgjIALAAIABBWQgBADACADIgLAAIgBgEIgBgFQgEAEgFADQgFADgHAAIgKgCgAgOgFQgFAFAAANQAAAHABAEQACAFADADQACADAEACQADABAEAAQAEAAAFgDQAFgCAEgFIAAgdQgFgFgEgDQgEgCgFAAQgIAAgGAGg");
	this.shape_2.setTransform(85.3761,436.6288,1.2408,1.24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#51565A").s().p("AgKAhQgHgDgDgEQgFgFgCgGQgDgGAAgJQAAgHADgHQACgHAFgEQAFgFAFgCQAEgCAGAAQAGAAAGACQAFADAEAEQAFAEACAHQADAHAAAHQAAAJgDAGQgCAHgFAEQgDAEgGADQgGACgGAAQgFAAgFgCgAgIgXIgGAGQgCACgBAGIgCAJQAAAFACAFIADAIQACADAEADQAFACADAAQAFAAAEgCIAGgFIAEgJIABgKIgBgIIgEgJQgDgEgDgBQgDgCgGAAQgEAAgEABg");
	this.shape_3.setTransform(76.3802,438.2097,1.2408,1.24);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#51565A").s().p("AAKAtQgKAAgDgDQgEgFAAgJIAAgoIgMAAIAAgIIAMAAIAAgZIAKAAIAAAZIARAAIAAAIIgRAAIAAAmQAAAGACACQACADAGAAIAHgBIAAAJIgEAAg");
	this.shape_4.setTransform(69.0283,436.7838,1.2408,1.24);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#51565A").s().p("AAfAiIAAgqIAAgEIgBgCIgDgCIgDgBQgFAAgCACIgHAFIAAAsIgTAAIAAgqIAAgEIgBgCIgDgCIgDgBQgFAAgCACIgHAFIAAAsIgUAAIAAhCIAUAAIAAAKIAEgEIAFgEIAGgCIAHgBIAHAAIAFADQADACAAACIADAEIADgEIAFgDIAGgDIAIgBQAFAAAEABIAGAEIADAHIABAIIAAAvg");
	this.shape_5.setTransform(55.0692,438.1167,1.2408,1.24);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#51565A").s().p("AgTAhQgDAAgDgDQgDgDgBgEQgBgDgBgGIAAgvIAUAAIAAApQAAAGADABQABADAEAAQAEAAADgCQAEgCADgDIAAgsIAUAAIAABCIgUAAIAAgLIgEAEIgEAEQgDADgDAAQgEABgEAAIgIgBg");
	this.shape_6.setTransform(43.0643,438.2717,1.2408,1.24);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#51565A").s().p("AALAiIAAgqQAAgEgCgDQgCgCgDAAQgEAAgDACIgHAFIAAAsIgUAAIAAhCIAUAAIAAAKIAJgIIAFgCIAIgBIAIABIAGADIAEAGQACAEAAAFIAAAwg");
	this.shape_7.setTransform(33.6341,438.1167,1.2408,1.24);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#51565A").s().p("AgJAvIAAhDIATAAIAABDgAgJgdIAAgRIATAAIAAARg");
	this.shape_8.setTransform(26.5925,436.5978,1.2408,1.24);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#51565A").s().p("AAKAtIgLgBQgFgBgCgCQgDgEgBgDIAAgpIgLAAIAAgOIALAAIAAgYIATAAIAAAYIARAAIAAAOIgRAAIAAAdIAAAEIACADIADACIAEAAIACAAIACAAIACAAIABgBIAAAOIgCABIgEAAg");
	this.shape_9.setTransform(21.0709,436.7838,1.2408,1.24);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#51565A").s().p("AgTAhQgDAAgDgDQgDgCgCgEQgBgDAAgFQAAgFACgFQAEgFAEgCIANgFIASgDIAAgCQAAgEgCgCQgCgCgFAAQgEAAgHADIgKAGIgIgMIAFgEIAIgEIAJgDIAKgBQAHAAAFACQAFABADAEQADADACAFQABAFAAAGIABAjQAAAEABADIgUAAIgBgFIgBgFQgEAEgGAEQgFADgHAAIgHgCgAgGAFQgFADAAAFQAAADACACQACABADAAQAFAAADgBIAGgEIAAgNQgKABgGADg");
	this.shape_10.setTransform(13.3158,438.1787,1.2408,1.24);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#51565A").s().p("AgJAvIAAhdIATAAIAABdg");
	this.shape_11.setTransform(6.8015,436.5668,1.2408,1.24);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#51565A").s().p("AgjAvIAAhdIAiAAIAJABIAJACIAHADQADACADADQAEAEAAAEQACAFAAAGQAAAHgCAEIgEAHQgDAEgDACIgIAEIgJABIgIABIgOAAIAAAhgAgPgBIAOAAIAIgBIAFgDIADgEIABgGQAAgFgBgBIgDgFIgFgCIgIgBIgOAAg");
	this.shape_12.setTransform(-0.2711,436.5668,1.2408,1.24);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#51565A").s().p("AAMAiIgMgVIgMAVIgVAAIAYgiIgWghIAWAAIAKATIALgTIAVAAIgWAhIAXAig");
	this.shape_13.setTransform(-14.0752,438.1787,1.2408,1.24);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#51565A").s().p("AgKAhQgGgCgFgEQgFgEgCgHQgDgGAAgKQAAgFABgGIAEgJQACgDAEgDIAHgFIAIgCIAGgBIAHABIAIACIAGAEQADADACAEQADAFABAFQABAGAAAGIAAADIgrAAIABAHIAEAFIAFADIAEAAIAGAAIAGgCIAEgCIAEgDIAIAMQgGAFgHACQgGADgKAAQgGAAgGgCgAgCgTIgEADIgDAEIgCAHIAZAAQAAgHgEgEQgDgDgGAAg");
	this.shape_14.setTransform(-22.2956,438.1787,1.2408,1.24);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#51565A").s().p("AAfAiIAAgqIgBgEIgBgCIgCgCIgDgBQgFAAgCACQgEACgDADIAAAsIgTAAIAAgqIgBgEIgBgCIgCgCIgEgBQgDAAgEACIgGAFIAAAsIgUAAIAAhCIAUAAIAAAKIADgEIAFgEIAHgCIAHgBIAHAAIAFADIADAEIACAEIAEgEIAFgDQADgDADAAIAHgBQAGAAADABIAGAEQADAEABADQABAEAAAEIAAAvg");
	this.shape_15.setTransform(-33.8972,438.1167,1.2408,1.24);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#51565A").s().p("AAWAvIgHgVIgeAAIgIAVIgTAAIAhhdIATAAIAhBdgAgKALIAUAAIgKgeg");
	this.shape_16.setTransform(-46.6776,436.5358,1.2408,1.24);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#51565A").s().p("AgJAgQgGgCgDgEQgFgEgCgHQgDgHAAgIQAAgJADgGQACgGAFgFIAKgGQAEgCAFAAQAHAAAEACQAGADADAEQAEAEACAHQACAGAAAIIAAADIguAAQAAAGACAEIAEAHQADADADABQAEACADAAQAHAAAFgDQAEgCAEgGIAGAFQgEAHgHAEQgGAEgKAAQgEAAgGgDgAgFgXQgCAAgDADIgFAGIgCAJIAkAAQgBgIgEgGQgFgFgIAAIgGABg");
	this.shape_17.setTransform(105.4152,420.3849,1.2408,1.24);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#51565A").s().p("AgJAhQgGgDgDgEQgEgEgDgHQgCgGAAgJQAAgHACgIQADgGAEgFQAFgEAFgCQAFgCAFAAQAGABAEABIAHAEIAGAGIADAHIgJAEQgCgGgFgEQgDgDgHAAIgGABIgGAFQgDADgCAEQgBAGAAAFQAAAMAFAHQAFAGAIABQAGAAAEgEQAEgDADgHIAJAEIgEAIIgGAFIgHAFIgKABQgFAAgFgCg");
	this.shape_18.setTransform(97.2569,420.3539,1.2408,1.24);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#51565A").s().p("AARAiIAAgtQAAgHgDgDQgCgCgHAAQgGAAgFACIgKAIIAAAvIgLAAIAAhBIALAAIAAAJIAFgEIAGgEIAFgCIAIgBQAKAAAFAFQAFAFAAAKIAAAvg");
	this.shape_19.setTransform(88.6332,420.2919,1.2408,1.24);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#51565A").s().p("AgJAgQgFgCgFgEQgEgGgCgFQgDgHAAgIQAAgIADgHQACgFAFgGIAKgGQAEgCAFAAQAHAAAEACQAGADADAEQADADADAIQACAGAAAIIAAADIguAAIACAKQABAEADADQADADADABIAHACQAHAAAFgDQAEgCAEgGIAGAFQgEAHgHAEQgHAEgJAAQgEAAgGgDgAgEgXIgGADIgEAGIgDAJIAkAAQgBgJgEgFQgFgFgIAAIgFABg");
	this.shape_20.setTransform(79.8234,420.3849,1.2408,1.24);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#51565A").s().p("AgFAuIAAhCIAKAAIAABCgAgFgiIAAgKIALAAIAAAKg");
	this.shape_21.setTransform(73.7434,418.8659,1.2408,1.24);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#51565A").s().p("AgSAiIAAhBIAKAAIAAALIABAAQAFgGADgDQAHgEAJAAIACAAIgBAKIgDAAQgIAAgGAEQgFAEgEAHIAAAqg");
	this.shape_22.setTransform(69.2455,420.2919,1.2408,1.24);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#51565A").s().p("AgJAgQgHgCgDgEQgEgEgCgHQgDgFAAgKQAAgKADgFQADgHAEgEQAFgEAFgCQAEgCAFAAQAHAAAEACQAGADADAEQAEAEACAHQACAGAAAIIAAADIguAAQAAAEACAGIAEAHQADADADABIAHACQAHAAAFgDQADgCAFgGIAGAFQgEAGgHAFQgHAEgJAAQgEAAgGgDgAgFgXQgCAAgDADIgFAGQgCAFAAAEIAkAAQgBgIgEgGQgFgFgIAAIgGABg");
	this.shape_23.setTransform(61.5214,420.3849,1.2408,1.24);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#51565A").s().p("AgdAuIAAhaIALAAIAAAJIAJgIQAGgDAGAAQAGAAAEACQAGADADAEQADADADAIQACAGAAAJQAAAKgCAEQgCAHgEAEQgFAFgEABQgGACgFABQgFAAgGgEIgJgGIAAAhgAgJgiIgJAIIAAAeQAJAJAJABQAJAAAFgHQAFgGAAgMQAAgMgFgHQgFgGgJAAQgFAAgEACg");
	this.shape_24.setTransform(52.8977,421.8419,1.2408,1.24);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#51565A").s().p("AARAhIgRgaIgRAaIgLAAIAXghIgWggIAMAAIAPAYIARgYIALAAIgWAgIAXAhg");
	this.shape_25.setTransform(44.119,420.3849,1.2408,1.24);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#51565A").s().p("AgJAgQgGgCgEgEQgDgEgDgHQgDgHAAgIQAAgJADgGQACgGAFgFIAJgGQAFgCAGAAQAGAAAFACQAFADADAEQAEAEACAHQACAGAAAIIAAADIguAAQAAAGACAEIAEAHQADADAEABQADACADAAQAHAAAFgDQAEgCAEgGIAHAFQgFAHgHAEQgHAEgIAAQgFAAgGgDgAgEgXQgDAAgDADIgEAGIgDAJIAkAAQAAgIgFgGQgFgFgIAAIgFABg");
	this.shape_26.setTransform(36.2398,420.3849,1.2408,1.24);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#51565A").s().p("AgNAtQgGgCgDgEQgDgEgDgHQgCgGAAgJQAAgJACgFQACgHAEgEQAFgFAEgCQAFgCAGAAQAFAAAGADQAFADAEAEIAAgjIALAAIAABWIACAGIgLAAIgBgEIgBgFQgFAFgEACQgFADgHAAQgEAAgGgCgAgOgFQgFAFAAANQAAAHABAEIAEAIIAGAFIAIABQAFAAAEgDQAEgCAFgFIAAgdQgEgGgFgCQgEgCgFAAQgIAAgGAGg");
	this.shape_27.setTransform(23.8007,418.7729,1.2408,1.24);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#51565A").s().p("AARAiIAAgtQAAgHgDgDQgDgCgGAAQgGAAgEACQgGAEgFAEIAAAvIgLAAIAAhBIALAAIAAAJIALgIIAGgCIAHgBQAKAAAFAFQAFAFAAAKIAAAvg");
	this.shape_28.setTransform(14.8047,420.2919,1.2408,1.24);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#51565A").s().p("AgWAeQgGgFAAgHQAAgFADgFQADgFAEgDQAFgCAJgDIAUgEIAAgDQAAgMgNAAQgHAAgFACIgLAHIgFgGQAHgGAGgDQAHgDAKgBQAFABAFABQAEACADADQACACACAFIABAJIAAAmIACAHIgLAAIgCgFIAAgFQgLALgOAAQgJgBgEgEgAAAABIgJAEIgGAFIgCAGQAAAFADACQAEACAEABQAGgBAGgCQAEgCAGgFIAAgRIgQACg");
	this.shape_29.setTransform(5.9329,420.3539,1.2408,1.24);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#51565A").s().p("AgdAuIAAhaIALAAIAAAJIAJgIQAFgDAHAAQAGAAAEACQAGADADAEQADADADAIQACAGAAAJQAAAKgCAEQgCAHgEAEQgFAFgEABQgGACgFABQgFAAgGgEIgJgGIAAAhgAgJgiIgJAIIAAAeQAJAJAJABQAJAAAFgHQAFgGAAgMQAAgMgFgHQgFgGgJAAQgFAAgEACg");
	this.shape_30.setTransform(-6.103,421.8419,1.2408,1.24);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#51565A").s().p("AgWAdQgFgFAAgKIAAgvIALAAIAAAtQAAAHADADQADADAGAAQAFAAAFgDQAGgDAFgFIAAgvIALAAIAABCIgLAAIAAgKIgLAHIgGADIgHABQgKAAgFgFg");
	this.shape_31.setTransform(-15.4711,420.4469,1.2408,1.24);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#51565A").s().p("AARAiIAAgtQAAgHgDgDQgCgCgHAAQgGAAgFACIgKAIIAAAvIgLAAIAAhBIALAAIAAAJIAFgEIAGgEIAFgCIAIgBQAKAAAFAFQAFAFAAAKIAAAvg");
	this.shape_32.setTransform(-27.9413,420.2919,1.2408,1.24);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#51565A").s().p("AgZAqQgIgFAAgHQAAgFAEgEQADgEAGgCQgGgDAAgFQAAgDACgDIAGgEQgFgDgDgFQgCgFAAgGQAAgGACgEQACgDAEgEIAIgFIALgCQAGAAAEACQAFACAEADIAHgEIAJgCIAAAKIgGABIgHABQAEAFAAAGQAAAGgDAEQgBAEgEADQgDADgFACQgFABgFAAIgKgBIgEABIgBADQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAIAHACIANABQANABAGAEQAGAEAAAIQAAAFgDAEQgDAEgDACQgGADgFAAQgFACgGAAQgRAAgIgFgAgUAWQgDADAAADQAAAFAGACQAFADAMAAQAJAAAHgDQAFgDAAgEQAAgEgEgCQgDgCgMgBIgPgBQgFABgCADgAgNghQgEAEAAAHQAAAHAEAEQAEAEAIAAQAIAAADgEQAFgEAAgHQAAgHgFgEQgEgEgHAAQgHAAgFAEg");
	this.shape_33.setTransform(-36.9682,421.8729,1.2408,1.24);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#51565A").s().p("AgEAuIAAhCIAJAAIAABCgAgFgiIAAgKIALAAIAAAKg");
	this.shape_34.setTransform(-43.2033,418.8659,1.2408,1.24);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#51565A").s().p("AgUAqQgJgHgEgLIAJgEQAEAKAGAEQAIAFAIAAQAJAAAGgEQAGgFAAgHIgBgGIgDgFIgIgEIgXgIIgKgFIgGgHQgCgEAAgHQAAgFACgEQACgFAEgDQAEgDAGgDIAMgBQAGAAAFABQAGACADADQAEACADAEQADAEACAFIgJAFQgDgJgHgEQgHgDgGAAQgJAAgFAEQgFAEAAAGQAAAEABACIAEAFIAIADIALAEIAMAFIAJAFQAEACACAFQACAEAAAGQAAAHgCAEQgCAFgFADQgFAEgFABQgGACgIAAQgNAAgIgGg");
	this.shape_35.setTransform(-50.2139,418.7109,1.2408,1.24);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ap1C0QhLAAg1g0Qg0g1AAhLQAAhKA0g0QA1g1BLAAITrAAQBLAAA0A1QA1A1AABJQAABLg1A1Qg0A0hLAAg");
	this.shape_36.setTransform(27.306,427.6698,1.2408,1.24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(-73.2,405.4,201,44.60000000000002), null);


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
	this.shape_37.graphics.f("#FFFFFF").s().p("ABoBHIgBgBIgBAAIAAAAIgEgEQgDgIAAgGIAEggIgBABQgCACgBADIgBgBIAAACIgIAKIAAAAIgBAAIgBACIAAAAIgCABIgBADIgFACIgHABIgEgCIgBAAIgBgBIgGgGQgCgBAAgHIAAgCIAAAAIAAgDIAAAAIABgEIgBAAIAAgBIABAAIAAAEIAAAEIABgMIAFgUIgCAEIgBACIAAgBIAAAAIABgEIgBAEIgBADIACgIIADgJIABgBIAAAAIAAgBIAAAAIAGgBIAEABIACABIgCAGIAAADIAAAEIgBABIgBAEIgCAFIgBAFIgBAEIgBANIABAJIAHgFIgCACIACgCIAAAAIAHgHIADgEIAKgPIABAAIAAAAIABgBIgBAAIgCgEIABABIABAAIADgBIAAAAIABgBIAAAAIADgEIABgBIAAgBIAAAAIgBAEIACgEIAAgBIAAgBIAAAAIAAAAIAAgCIAAAAIAAgBIAFgRIAAABIAAgBIAAAAIABgCIAAgDIgBAFIAAAAIABgDIAJgeQADgDAAgCIAEgEIAAgBIAAgBIAHAAIAFABIACAAIACACQABACAAAEIgBANIACAGIAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAgBQgBAAAAgBQgBgDAAgFIAAgIIgDAEIgBADQgEALgBAIIgGAVIAAABIgBAEIADAAIAEAAIADAAIADACIgBACIgBABIgHACIgGADIgBAFIgCAHIgDAXQgDAMABAMIABADIABAEQgBAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAABQAAAAgBAAgAA3AcIAAAAIAAgBgAA8gFIABAAIAAgBgABygmIAAgBIAAgBgAAoA4IAAAAIgGgCIgFgDIgCgEQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgDIAAAAIgCgDIABAAIAAgEIABAAIgBgBIABAAIgBgBIgBAAIAAAAIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAABIgBgBIACgBQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgBIgBAAIABgBIgBgCIAAgBIABAAIAAAAIAAAAIABgBIgBAAIgBAAIAAAAQABAAAAgBIAAABIABAAIgBgBIAAAAIAAgBIAAgBIABAAIgBAAIABgBIAAgBIgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIAAgDIABgCIAAgEIgBAAQAAABAAAAIAAgCIABAAIAAgBIAAgCIAAgBIAAgBIAAAAIABAAIAAgBIgBAAIABgBIgBAAIAAgBIABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgCIABgBIgBgCIABgDIAAgBIAAAAIABgBIAAgBIAAgBIAAgBIABgBIgBgBIAAAAIABgBIgBAAIAAgCIABAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgCIABgCIAAACIgBABIABgBIAAgCIAAgBIAAAAIAAAAIABgBIgBgBIAAgBIABAAIAAABIABgBIAAAAIgBAAIABgCIAAgCIAAABIABgBIAAgBIgBAAIAAgCIABgBIAAgBIAAgBIAAAAIABABIgBgCIABgBIAAgBIAAgBIAAgCIACgHQAAAAAAgBQgBAAAAAAQAAgBABAAQAAAAAAgBIAAgCIABABIAGgBIAFABIABACIABAFIgIAtIAAABIgEAaQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgBAQIABAHIACAHIAEgDIAEgEIAAACIAAABIAAAAIAAAAIAAAAIAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAgBAAQAAABAAAAIAAAAIAAABIAAAAIAAAAIAAACIgBAAIAAAAIgDACIgFAAgAAcAFIAAADIABgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAgAAdAAIAAACIABgCIgBAAgAAcAAIABAAIAAgBIgBAAgAAdgIIAAABIABAAIgBgBIABAAIAAgBIgBAAIAAABgAAegNIAAABIAAABIAAgBIAAgBIAAgBIAAAAIAAABgAAjgkIABgBIAAAAgAjAA4IgBAAIgGgCIgFgDIgCgEIgBgEIgBgGIABAAIgBgCIABgBIgBgBIABAAIAAgBIgBgBIAAgBIABAAIgBgBIABAAIAAgBQgBAAABAAIgBABIAAgBIABgBIgBgBIABgBIAAAAIAAgBIAAAAIAAgCIAAgBIAAAAIAAAAIABgBIgBAAIAAAAIAAAAIAAgBIAAABIABAAIAAgBIgBAAIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIABABIAAgBIgBAAIABgBIAAAAIABABIAAgBIAAgBIgBABIAAgBIAAgCIAAgBIAAgBIAAAAIAAABIABgBIgBgBIAAABIAAgCIAAABIABgCIAAgEIAAAAIgBABIABgCIAAAAIAAgBIABgCIgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIgBgBIABAAIAAgBIAAABIAAgCIAAgCIABgBIgBAAIAAgCIABgCIAAAAIAAAAIAAAAIAAgBIABAAIAAgBIgBABIAAgBIAAAAIAAAAIABgBIAAgBIAAgBIAAgBIABgBIAAgCIgBAAIABgCIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIABgCIAAABIAAgBIAAgCIAAACIABgDIgBAAIAAAAIABgBIAAgBIABgBIAAAAIgBAAIABgCIAAgCIAAAAIAAABIABAAIAAgCIgBAAIABgCIAAAAIABgBIgBgBIAAgBIAAAAIABABIgBgCIABgBIAAgBIAAgBIAAgCIACgKIAAgCIABABIAGgBIAFABIAAABIACABIAAAFIgIAtIAAABIgCAKIgBAGIAAAGIgBAEQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAIAAAXIACAHQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBIAEgEIAAACIAAABIAAAAIAAACQAAABAAAAQABAAAAABQAAAAgBAAQAAABAAAAIAAAAIAAABIAAAAIAAAAIAAACIgBAAIAAAAIgDACIgFAAgAjNAFIABADIAAgDIAAgDgAjMgBQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIABgBIgBgBgAjMgHIAAAAIAAgBgAjLgMIgBABIABgBIAAgBgACWAyIgCgBIgBAAIgBgBIgCgBIgHgFIgEgHIgDgIIAAgIIACgIIADgIIALgTIAAAAIABgBIAIgKIAIgIIADABQAFAAAEACQAFACAAAGIgBAEIAAgBIAAABIAAAAIgBACQgEAJgGAHIgOAMIAAABIgBgBIgEADIgEADQgCACAAADIgBAIIABAHIADAGQADAAADgCIAGgDIAKgIIACgBIABgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACgBIAAAAIAKgMIABAAIACgCIACgCIAAAAIABgBIABgBIABgCIABgCIABgBIADgCIACgCIAAAAIABAAIABgDIABgBIACgCIACgDIACgBIABAAIAAACIgBACIAAAAIABAAIgBAAIAAABIAAABIgBABIAAADIgCACQAAACgDACIgDAGIgBABIAAAAIgBABIAAABIgTAXIgFAFIgGAEIgGADQgDACgFAAgACkgWIgGAGIgLAVQAIgFAEgGIAKgNIACgGIAAgBIgBgBIgGAFgACxgTIABABIAAgBIAAAAgAg6AyIgBgBIgBAAIgCgBIgDgBIgHgJIgDgDQgCgEAAgEIAAgIIABgIIADgIIAMgTIAAAAIAAgBIAIgKIAIgIIADABQAGAAADACQAEACABAGIgBAEIgBACIAAAAQgEAJgGAHQgGAHgIAFIAAABIgBgBIgEADIgEADIgCAFIgBAIIABAHIADAGQADAAADgCQAEgBACgCIAKgIIABgBIACgBIACgBIAOgPIACgCIABgBIABgBIACgCIABgCIAAgBIACgCIADgCIAAAAIABAAIABgDIACgBIABgCIACgDIACgBIABAAIgBACIAAACIAAAAIAAACIgBABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgBACQAAADgDABIgDAGIgBABIgBAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIAAABIgTAXIAAAAIgEAFIgGAEIgHADQgDACgEAAgAgeAVIAAAAIAAAAgAgsgWIgGAGIgKAVQAHgFAEgGIAKgNIACgGIgBgBIAAgBQgFADgBACgAioAsIgBAAIAAgBIgHgGIgCgIIAAgEIAAgEIAAADIABgEIgBAAIAAgBIABAAIAAAEIAAAEIABgMQABgIACgEIAAgDIACgFIgCAEIgBACIAAgBIABgEIgBAEIAEgOIABgBIAAgBIAAAAIAGgBIAEABIACABIgBADIgBAKIgBABIgFAWIgBAJIABAJIAGgEIABgBIAAAAIABgBIAJgKIALgPIAAAAIAFgGIADgEIAAgBIgBgBIABAAIAAgRIAAgBIAAAAIAAgBIAAAAIAAABIgBgBQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIABgBIABgBIABAAIABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIACAAIABAAIAAABQABgBAAAAQABAAAAAAQABAAAAABQABAAAAABIADADIAAADIABACIAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAIAAABIAAABIAAAEIAAACIgCAUQgBALABAIQACgCADgIQADgGADgEQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIAAgBIAAgBIAAgBIAAgBQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAIAAABIAAABIABgCIAAgEIAAABIAAABIABgDIABgCIABgBIACgBIAAgBIAAAAIABgCIABgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIABgBIAAABIABgBIAAAAIgBAAIABgDIACgDIAGgLIgBAAQAAAAAAAAQgBAAAAAAQAAAAABAAQAAAAAAgBIABAAIAAAAIAEgJIABAAIAAAAIgBAAIABgBIAAABIABgBIAAgBIABABIgBABIABAAIABAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAABIABABIgBADIABgCIABAFIAAAHIgCAGIgUAqIgBABIAAABIgDADIgDAFIAAABIgCACIAAAAIAAABQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgEAAIgBAAIAAAAIgGgCIgBAAIgBgBIgCgCIgCAAIgCgEIABgBIAAAAIAAAAIAAgBIAAgBIgBgCIABgBIAAAAIgBAAIAAAAIABgBIAAgRIgBADIAAAAIgBABIAAABIgBAAIgCAEQgCACgBADIAAgBIgBABIABABIgJAKIAAAAIgBAAIAAABIAAAAIgBAAIAAABIgBAAIAAABIgCADIgFACIgGABgAiyAcIABAAIgBgBgAhwAZIAAABIAAgBIAAgBgAhsAQIABAAIgBAAgAhmADIAAABIAAgBIAAAAQABABAAgBIgBgBgAhegNIAAADIACgEgABNAfIAAgBIAAABIAAAAgABOAdIACgBIgBABgAibAdIACgBIgBABgAA4ANIAAgEIABgCIABgCIABgDIgBAHIAAAAIgCAJgAA4AMIAAABIAAgBIAAgBgAixAOIAAgBIABgBIgBgBIAAABIAAgCIAAAAQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIABgDIgDAOgAA3AQIABAAIAAABgAiOANQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgBACgAiLAJIAAAAIAAAAIAAABgAiKAIIABgBIgBABgAAbACIABAAIAAAAgAjNACIAAgBIAAABgABngEIABAAIAAABgAiCgOIAAgBIABABIgBAAgAjLgOgABFgwIAEgCQABgBAEAAQADABACAFIAAACIgBADIAAAAIgBAAIgCADIgCABIgDABIgDAAgAikgwIAFgCQAAgBAEAAQAEABABAFIAAAFIgBAAIAAAAIgCADIgDABIgGABg");
	this.shape_37.setTransform(17.6052,21.8309,1.2132,1.2141);

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(1));

	// Layer_1
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAEAGIAAgIIgDAIIgBAAIgDgIIAAAIIgDAAIAAgLIAFAAIABAIIADgIIAEAAIAAALg");
	this.shape_38.setTransform(42.2,31.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAAAGIAAgJIgEAAIAAgCIAJAAIAAACIgEAAIAAAJg");
	this.shape_39.setTransform(40.725,31.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#007BC8").s().p("AiUCVIAAkpIEpAAIAAAwIgsAAIgKAcIgKgcIg4AAIAAAlIgRglIgsAAIgwBqIAmAAIAABfIB2AAIASgUIATAUIAkAAIAAAwgAB3BaIgYgbIgZAbIgdAAIhGAAIAAhUIBGAAIAAAUIgvAAIAAAMIAuAAIAAATIguAAIAAAOIAvAAIAAATIAngqIgngqIAeAAIAYAbIAZgbIAdAAIgoApIAoArgAB+AwIAXgZIAAAxgAB+gFIAAg6IgVA6IgUAAIgVg6IAAA6IgXAAIgaAAIgHgRIglAAIgHARIgZAAIAlhTIAcAAIAlBTIAAhTIAkAAIASA0IATg0IAjAAIAABTgAABgoIgLgcIgLAcIAWAAg");
	this.shape_40.setTransform(-30.275,21.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AiUCVIAAkpIEpAAIAAEpg");
	this.shape_41.setTransform(-30.275,21.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgGAbIAAgpIgPAAIAAgLIArAAIAAALIgPAAIAAApg");
	this.shape_42.setTransform(36.325,34);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgGAbIAAg0IANAAIAAA0g");
	this.shape_43.setTransform(32.575,34);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgGAbIAAgpIgPAAIAAgLIArAAIAAALIgPAAIAAApg");
	this.shape_44.setTransform(26.525,34);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgVAFIAAgfIAOAAIAAAfQAAAKAHAAQAIAAAAgKIAAgfIAOAAIAAAfQAAAWgWAAQgVAAAAgWg");
	this.shape_45.setTransform(21.375,34.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgRAVQgIgHAAgOQAAgMAIgIQAHgGAKAAQALAAAHAGQAIAIAAAMQAAAOgIAHQgHAGgLAAQgKAAgHgGgAgLAAQAAAQALAAQAMAAAAgQQAAgOgMAAQgLAAAAAOg");
	this.shape_46.setTransform(15.775,33.975);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAJAbIAAgWIgQAAIAAAWIgPAAIAAg0IAPAAIAAATIAQAAIAAgTIAOAAIAAA0g");
	this.shape_47.setTransform(9.95,34);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgGAbIAAgpIgQAAIAAgLIAsAAIAAALIgPAAIAAApg");
	this.shape_48.setTransform(4.65,34);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgGAbIAAg0IANAAIAAA0g");
	this.shape_49.setTransform(0.875,34);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAIAbIgHghIgHAhIgMAAIgPg0IAPAAIAGAeIAHgeIAMAAIAHAeIAAAAIAHgeIAMAAIgNA0g");
	this.shape_50.setTransform(-4,34);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgGAbIAAgpIgPAAIAAgMIArAAIAAAMIgPAAIAAApg");
	this.shape_51.setTransform(14.325,9.45);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgFALIAEgJIgFAAIAAgMIANAAIAAALIgGAKg");
	this.shape_52.setTransform(10.75,7.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAKAbIgTgdIAAAdIgNAAIAAg1IAOAAIASAdIAAgdIANAAIAAA1g");
	this.shape_53.setTransform(6.725,9.45);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgRAVQgIgIAAgNQAAgNAIgHQAHgGAKAAQALAAAHAGQAIAHAAANQAAANgIAIQgHAGgLAAQgKAAgHgGgAgLAAQAAAQALAAQAMAAAAgQQAAgPgMAAQgLAAAAAPg");
	this.shape_54.setTransform(0.925,9.475);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgWAbIAAg1IARAAQAcAAAAAaQAAAbgcAAgAgIAPIAEAAQANAAAAgPQAAgOgNAAIgEAAg");
	this.shape_55.setTransform(-4.65,9.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(-45.1,6.8,88.1,29.900000000000002), null);


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
	mask.graphics.p("AqRBaIAAizIUjAAIAACzg");
	mask.setTransform(65.825,8.975);

	// Layer_3
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgWBXIAAiGIgyAAIAAgnICRAAIAAAnIgxAAIAACGg");
	this.shape_56.setTransform(124.325,8.975);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAVBXIggg8IgNAAIAAA8IguAAIAAitIBEAAQAPAAAOADQANADAJAHQAKAHAFALQAFAKAAAQQAAAUgIAMQgKAMgQAFIAkBDgAgYgIIAUAAQAOAAAGgFQAHgEAAgLQAAgLgHgEQgGgFgOAAIgUAAg");
	this.shape_57.setTransform(108.75,8.975);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAkBXIgLghIg1AAIgMAhIgqAAIA9itIArAAIA9CtgAgRAVIAgAAIgPgvIgBAAg");
	this.shape_58.setTransform(91.725,8.95);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhFBXIAAitIBBAAIARABIASADIAPAHQAHAEAGAGQAFAGADAKQADAKAAANQAAAMgDAKQgDAIgGAHQgFAFgHAFIgRAHIgRADIgRABIgSAAIAAA3gAgXgDIAUAAQAIAAAFgCQAFgBAEgDQADgDAAgEIACgJQAAgFgCgEQAAgEgDgDQgEgEgFgBQgFgCgIAAIgUAAg");
	this.shape_59.setTransform(75.9,8.975);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgXBXIAAiGIgxAAIAAgnICRAAIAAAnIgyAAIAACGg");
	this.shape_60.setTransform(54.025,8.975);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgYBXQgKgDgLgGQgMgIgFgFQgIgIgFgIIAjgWQAEAHAFAEQAEAFAHAEIAMAFIANABIAKAAQAEgBADgCQADgBADgEQACgEAAgDQAAgDgDgEIgHgFIgzgQIgOgGQgGgEgFgEQgGgHgCgGQgDgHAAgKQAAgNAFgKQAFgLAJgHQAIgGANgEQALgEAQAAQANAAALADQAMAEAIAEQAKAGAGAFIAMAMIggAaIgIgIIgLgHIgLgFIgLgCQgUAAAAANQAAAEADAEIAGAFIAJAEIApAMIAPAGQAHADAFAFQAFAGADAHQADAIAAAJQAAAMgEAIQgEALgJAHQgKAIgMAEQgOAFgVAAQgOAAgMgDg");
	this.shape_61.setTransform(38.175,8.975);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("Ag/BXIAAitIB7AAIAAAnIhMAAIAAAcIA2AAIAAAkIg2AAIAAAgIBQAAIAAAmg");
	this.shape_62.setTransform(23.075,8.975);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhFhWIBXABIAcAGQAHAEAEAEQAFAGADAGQACAHAAAJQAAAKgDAGQgCAHgFAFQgEAFgHADIgNAEIAAAAQAHABAIACQAHADAFAFQAFAFADAHQACAJAAAJQAAAJgCAIQgEAIgEAFQgEAEgHAFQgHAEgHACIgOADIhaABgAgXAzIAXAAQAMAAAGgFQAGgFAAgIQAAgJgGgFQgGgEgMAAIgXAAgAgXgRIAWAAIAKgBIAHgDIAEgFQABgDAAgEQAAgEgBgDIgEgFIgHgEIgKgBIgWAAg");
	this.shape_63.setTransform(7.025,8.975);

	var maskedShapeInstanceList = [this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,131.7,18), null);


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

	// Layer_1
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("Ag/BWIAAirIB7AAIAAAmIhMAAIAAAcIA2AAIAAAkIg2AAIAAAgIBQAAIAAAlg");
	this.shape_64.setTransform(139.225,-90.65);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAdBWIAAhGIg5AAIAABGIgvAAIAAirIAvAAIAABAIA5AAIAAhAIAvAAIAACrg");
	this.shape_65.setTransform(122.325,-90.65);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgXBWIAAiFIgxAAIAAgmICRAAIAAAmIgyAAIAACFg");
	this.shape_66.setTransform(105.65,-90.65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgUBXQgMgCgHgFQgKgEgIgHQgJgIgFgKQgGgIgEgOQgDgNAAgQQAAgPADgNQAEgMAGgKQAFgLAJgGQAIgIAKgEQAKgGAJgBQALgDAJAAQAKAAAKADQAKABALAGQAIADAJAJQAHAFAHAMQAGAKADAMQAEANAAAPQAAARgEAMQgDAOgGAIQgGALgIAHQgKAIgHADQgJAFgMACQgKADgKAAQgJAAgLgDgAgQgvQgGAEgFAGQgFAIgDAJQgDAKABAKQgBALADALQADAKAFAGQAFAHAGAEQAKAEAGgBQAIABAIgEQAHgEAFgHQAFgGACgKQADgLAAgLQAAgKgDgKQgCgJgFgIQgFgGgHgEQgHgDgJAAQgIAAgIADg");
	this.shape_67.setTransform(185.25,-114.05);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgWBWIAAiFIgyAAIAAgmICRAAIAAAmIgxAAIAACFg");
	this.shape_68.setTransform(168.425,-114.05);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AhFBWIAAirIBTAAQAGAAALADQAIACAHAFQAIAEAFAGQAGAIADAIQACALAAALQAAANgDAKQgCAHgGAIQgHAGgHAEQgGAEgKADIgRADIgQAAIgTAAIAAA3gAgXgDIAUAAQAHAAAGgCQAFgBADgEQAEgDABgDQABgEAAgFIgBgJQgBgEgEgDQgDgDgFgCQgGgBgHgBIgUAAg");
	this.shape_69.setTransform(147.9,-114.05);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgWBWIAAirIAuAAIAACrg");
	this.shape_70.setTransform(135.4,-114.05);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAYBWIgohFIgNAQIAAA1IgvAAIAAirIAvAAIAAA+IAvg+IA2AAIg6BDIA/Bog");
	this.shape_71.setTransform(123.6,-114.05);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgYBXQgOgFgHgEQgJgFgIgIQgIgJgFgHIAjgWQADAFAGAHIALAIIAMAEQAGACAHAAIAJgBIAIgCIAGgFQABgCAAgEQAAgFgCgDQgCgDgFgCIgKgEIgpgLIgOgHQgFgDgGgFQgFgGgDgHQgDgGAAgLQAAgNAFgLQAFgJAIgIQAJgHANgDQANgEAOAAQANAAALADQALADAJAFQAKAFAGAGIAMAMIggAaIgJgJIgKgHQgFgCgGgCQgGgCgFAAQgUAAAAANQAAAEADADQACAEAEACQADACAGABIAaAIQAIABAHADIAPAHQAFADAHAFQAEAFAEAIQADAIAAAJQAAAKgEALQgEAJgJAIQgJAIgNAEQgOAFgVAAQgOAAgMgDg");
	this.shape_72.setTransform(106.175,-114.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(98.4,-123,95.4,41), null);


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
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(484.7,-131.4,1,1,0,0,0,65.8,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(418.9,-140.4,131.70000000000005,18), null);


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
	this.instance.setTransform(364,45,2.4268,0.36,0,0,0,150,125);
	this.instance.alpha = 0.3516;
	this.instance.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.img03();
	this.instance_1.setTransform(0,0,0.6667,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,728.1,90), null);


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
	this.instance.setTransform(364,45,2.4267,0.36,0,0,0,150,125);
	this.instance.alpha = 0.25;
	this.instance.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol11("synched",0);
	this.instance_1.setTransform(100.55,83.8,0.6704,0.6704,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,728,90.5), null);


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
	this.instance.setTransform(364,45,2.4267,0.36,0,0,0,150,125);
	this.instance.alpha = 0.25;
	this.instance.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.img01();
	this.instance_1.setTransform(0,0,0.6667,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,728,90), null);


// stage content:
(lib.AMEX_DV360_v4_728x90 = function(mode,startPosition,loop,reversed) {
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
	this.replay_btn.setTransform(624.35,18.8,1.0719,1.1953,0,0,0,11.2,11);
	new cjs.ButtonHelper(this.replay_btn, 0, 1, 2, false, new lib.Symbol20(), 3);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(895));

	// Layer_18
	this.ctaBTN = new lib.Symbol20();
	this.ctaBTN.name = "ctaBTN";
	this.ctaBTN.setTransform(22.85,155.6,32.6449,4.1381,0,0,0,0.7,37.6);
	new cjs.ButtonHelper(this.ctaBTN, 0, 1, 2, false, new lib.Symbol20(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ctaBTN).wait(895));

	// logo
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(708.65,-20.6,0.6845,0.6846,0,0,0,36.9,12.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({y:12.9,alpha:1},24,cjs.Ease.backOut).wait(854));

	// Layer_1
	this.instance_1 = new lib.Symbol28();
	this.instance_1.setTransform(237.95,222.8,1,1,0,0,0,1,1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(666).to({_off:false},0).to({alpha:1},22).wait(207));

	// t_c
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(261.8,227.5,1,1,0,0,0,22.1,3.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(194).to({_off:false},0).to({alpha:1},22).wait(679));

	// cta
	this.instance_3 = new lib.ClipGroup();
	this.instance_3.setTransform(686.7,-353.5,1,1,0,0,0,81,18);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(628).to({_off:false},0).wait(1).to({regX:27.3,regY:427.7,scaleX:0.9832,scaleY:0.9831,x:633.25,y:56.2,alpha:0.0717},0).wait(1).to({scaleX:0.9663,scaleY:0.9662,x:633.5,y:56.15,alpha:0.1439},0).wait(1).to({scaleX:0.9494,scaleY:0.9491,x:633.7,alpha:0.2164},0).wait(1).to({scaleX:0.9324,scaleY:0.932,x:634,y:56.05,alpha:0.2891},0).wait(1).to({scaleX:0.9154,scaleY:0.915,x:634.25,alpha:0.3617},0).wait(1).to({scaleX:0.8985,scaleY:0.898,x:634.5,y:56,alpha:0.4338},0).wait(1).to({scaleX:0.8819,scaleY:0.8812,x:634.7,alpha:0.505},0).wait(1).to({scaleX:0.8656,scaleY:0.8649,x:635,y:55.95,alpha:0.5745},0).wait(1).to({scaleX:0.8499,scaleY:0.8491,x:635.2,y:55.9,alpha:0.6416},0).wait(1).to({scaleX:0.8351,scaleY:0.8342,x:635.45,alpha:0.7049},0).wait(1).to({scaleX:0.8215,scaleY:0.8205,x:635.65,alpha:0.7632},0).wait(1).to({scaleX:0.8093,scaleY:0.8082,x:635.85,y:55.85,alpha:0.8154},0).wait(1).to({scaleX:0.7987,scaleY:0.7976,x:636,alpha:0.8605},0).wait(1).to({scaleX:0.7899,scaleY:0.7888,x:636.1,y:55.8,alpha:0.8981},0).wait(1).to({scaleX:0.7828,scaleY:0.7817,x:636.2,alpha:0.9284},0).wait(1).to({scaleX:0.7773,scaleY:0.7761,x:636.3,alpha:0.9521},0).wait(1).to({scaleX:0.773,scaleY:0.7718,x:636.35,y:55.75,alpha:0.9702},0).wait(1).to({scaleX:0.7699,scaleY:0.7687,x:636.4,alpha:0.9837},0).wait(1).to({scaleX:0.7676,scaleY:0.7664,x:636.45,alpha:0.9935},0).wait(1).to({scaleX:0.766,scaleY:0.7647,alpha:1},0).wait(1).to({scaleX:0.7649,scaleY:0.7636,x:636.5},0).wait(1).to({scaleX:0.7642,scaleY:0.763},0).wait(1).to({scaleX:0.7639,scaleY:0.7626},0).wait(1).to({scaleX:0.7637,scaleY:0.7625},0).wait(1).to({scaleX:0.7638,y:55.8},0).wait(1).to({scaleX:0.764,scaleY:0.7627,y:55.75},0).wait(1).to({scaleX:0.7643,scaleY:0.7631},0).wait(1).to({scaleX:0.7647,scaleY:0.7635},0).wait(1).to({scaleX:0.7652,scaleY:0.7639},0).wait(1).to({scaleX:0.7656,scaleY:0.7644,y:55.8},0).wait(1).to({regX:81.2,regY:18.1,scaleX:0.7661,scaleY:0.7648,x:677.6,y:-257.6},0).wait(66).to({regY:17.9,scaleX:0.8526,scaleY:0.851,x:682.75,y:-293.65},19,cjs.Ease.backInOut).wait(5).to({regY:18.1,scaleX:0.7661,scaleY:0.7648,x:677.6,y:-257.6},20,cjs.Ease.quadInOut).wait(126));

	// replay_svg
	this.instance_4 = new lib.Symbol19();
	this.instance_4.setTransform(624.4,17.35,0.8938,0.8938,0,0,0,8.8,9.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(880).to({_off:false},0).to({alpha:1},14).wait(1));

	// t_indulge
	this.instance_5 = new lib.Symbol18();
	this.instance_5.setTransform(147.2,56.9,1,1,0,0,0,132.2,28.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(641).to({_off:false},0).wait(1).to({regX:259.4,regY:-105.1,x:274.4,y:-70.4,alpha:0.0601},0).wait(1).to({y:-64.1,alpha:0.1205},0).wait(1).to({y:-57.8,alpha:0.1811},0).wait(1).to({y:-51.45,alpha:0.2419},0).wait(1).to({y:-45.15,alpha:0.3028},0).wait(1).to({y:-38.8,alpha:0.3636},0).wait(1).to({y:-32.5,alpha:0.4241},0).wait(1).to({y:-26.3,alpha:0.484},0).wait(1).to({y:-20.15,alpha:0.5428},0).wait(1).to({y:-14.2,alpha:0.6003},0).wait(1).to({y:-8.45,alpha:0.6556},0).wait(1).to({y:-3,alpha:0.7082},0).wait(1).to({y:2.15,alpha:0.7572},0).wait(1).to({y:6.8,alpha:0.802},0).wait(1).to({y:10.95,alpha:0.8419},0).wait(1).to({y:14.55,alpha:0.8766},0).wait(1).to({y:17.6,alpha:0.9061},0).wait(1).to({y:20.15,alpha:0.9305},0).wait(1).to({y:22.2,alpha:0.9504},0).wait(1).to({y:23.85,alpha:0.9663},0).wait(1).to({y:25.15,alpha:0.9787},0).wait(1).to({y:26.15,alpha:0.9883},0).wait(1).to({y:26.9,alpha:0.9956},0).wait(1).to({y:27.5,alpha:1},0).wait(1).to({y:27.9},0).wait(1).to({y:28.15},0).wait(1).to({y:28.3},0).wait(1).to({y:28.4},0).wait(3).to({y:28.3},0).wait(1).to({y:28.2},0).wait(1).to({y:28.05},0).wait(1).to({y:27.9},0).wait(1).to({y:27.7},0).wait(1).to({y:27.55},0).wait(1).to({regX:132.2,regY:28.4,x:147.2,y:160.9},0).wait(217));

	// t_best_part
	this.instance_6 = new lib.ClipGroup_5();
	this.instance_6.setTransform(340.8,170.75,0.7252,0.7252,0,0,0,62,8.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(-208.65,26.7,0.551,0.5455,0,0,0,35.2,7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45).to({_off:false},0).to({regX:61.9,regY:8.4,scaleX:1,scaleY:1,x:224.25,y:209.1,alpha:1},42,cjs.Ease.elasticOut).wait(71).to({x:224.15,y:282.7,alpha:0},16,cjs.Ease.quadInOut).to({_off:true},1).wait(720));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(613).to({_off:false},0).to({x:37.35,alpha:1},24,cjs.Ease.quintOut).wait(258));

	// t_skip_to
	this.instance_8 = new lib.ClipGroup_4();
	this.instance_8.setTransform(93.75,112.1,0.6566,0.6566,0,0,0,45.5,19.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.Symbol3copy();
	this.instance_9.setTransform(-150.25,9.6,0.3398,0.3401,0,0,0,1.8,1.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(26).to({_off:false},0).to({regX:44.9,regY:19.2,scaleX:1,scaleY:1,x:60,y:151.65,alpha:1},42,cjs.Ease.elasticOut).wait(90).to({y:47.65,alpha:0},16,cjs.Ease.quadInOut).to({_off:true},1).wait(720));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(613).to({_off:false},0).to({x:15.75,alpha:1},24,cjs.Ease.quintOut).wait(258));

	// arrows
	this.instance_10 = new lib.Symbol2("synched",0);
	this.instance_10.setTransform(-654.15,130.55,1,1,0,0,0,691.9,84);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(598).to({_off:false},0).to({x:-419.75,y:134.5},28,cjs.Ease.sineOut).to({x:-21.6,y:134.05},268,cjs.Ease.get(0.05)).wait(1));

	// img03_arrow_copy
	this.instance_11 = new lib.Symbol21();
	this.instance_11.setTransform(-395.55,244.75,3.7871,3.7867,0,0,0,171.5,71.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(593).to({_off:false},0).to({x:948.45,y:251.15},26,cjs.Ease.quadOut).wait(276));

	// img03_mask_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_593 = new cjs.Graphics().p("EhwLAH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_594 = new cjs.Graphics().p("EhoQAH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_595 = new cjs.Graphics().p("EhgpAH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_596 = new cjs.Graphics().p("EhZWAH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_597 = new cjs.Graphics().p("EhSXAH/IAAv9MCA6AAAIHBH5InAIEg");
	var mask_graphics_598 = new cjs.Graphics().p("EhLrAH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_599 = new cjs.Graphics().p("EhFTAH/IAAv9MCA5AAAIHBH5InAIEg");
	var mask_graphics_600 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_601 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_602 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_603 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_604 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_605 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_606 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_607 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_608 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_609 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_610 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_611 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_612 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_613 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_614 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_615 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_616 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_617 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_618 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_graphics_619 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(593).to({graphics:mask_graphics_593,x:-718.0147,y:38.9239}).wait(1).to({graphics:mask_graphics_594,x:-667.3164,y:39.4068}).wait(1).to({graphics:mask_graphics_595,x:-618.6064,y:39.8707}).wait(1).to({graphics:mask_graphics_596,x:-571.8845,y:40.3157}).wait(1).to({graphics:mask_graphics_597,x:-527.1508,y:40.7417}).wait(1).to({graphics:mask_graphics_598,x:-484.4052,y:41.1488}).wait(1).to({graphics:mask_graphics_599,x:-443.6478,y:41.537}).wait(1).to({graphics:mask_graphics_600,x:-374.7711,y:41.9062}).wait(1).to({graphics:mask_graphics_601,x:-301.209,y:42.2565}).wait(1).to({graphics:mask_graphics_602,x:-231.6232,y:42.5878}).wait(1).to({graphics:mask_graphics_603,x:-166.0137,y:42.9003}).wait(1).to({graphics:mask_graphics_604,x:-104.3806,y:43.1938}).wait(1).to({graphics:mask_graphics_605,x:-46.7238,y:43.4683}).wait(1).to({graphics:mask_graphics_606,x:6.9567,y:43.7239}).wait(1).to({graphics:mask_graphics_607,x:56.6609,y:43.9606}).wait(1).to({graphics:mask_graphics_608,x:102.3887,y:44.1784}).wait(1).to({graphics:mask_graphics_609,x:144.1402,y:44.3772}).wait(1).to({graphics:mask_graphics_610,x:181.9153,y:44.5571}).wait(1).to({graphics:mask_graphics_611,x:215.7141,y:44.718}).wait(1).to({graphics:mask_graphics_612,x:245.5366,y:44.86}).wait(1).to({graphics:mask_graphics_613,x:271.3828,y:44.9831}).wait(1).to({graphics:mask_graphics_614,x:293.2526,y:45.0873}).wait(1).to({graphics:mask_graphics_615,x:311.1461,y:45.1725}).wait(1).to({graphics:mask_graphics_616,x:325.0632,y:45.2387}).wait(1).to({graphics:mask_graphics_617,x:335.0041,y:45.2861}).wait(1).to({graphics:mask_graphics_618,x:340.9686,y:45.3145}).wait(1).to({graphics:mask_graphics_619,x:342.9567,y:45.3239}).wait(276));

	// Layer_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52565A").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(363.9999,44.9963,2.4267,0.36);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(593).to({_off:false},0).wait(302));

	// card_t
	this.instance_12 = new lib.Symbol7();
	this.instance_12.setTransform(-132.55,28,0.5565,0.5541,0,0,0,36.1,8.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({_off:false},0).to({x:37.7,alpha:1},30,cjs.Ease.quintOut).to({_off:true},575).wait(276));

	// card
	this.instance_13 = new lib.Symbol3();
	this.instance_13.setTransform(-98.8,10.35,0.3437,0.3421,0,0,0,2.8,4.4);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(14).to({_off:false},0).to({x:15.95,alpha:1},30,cjs.Ease.quintOut).to({_off:true},575).wait(276));

	// t_with
	this.instance_14 = new lib.Symbol16();
	this.instance_14.setTransform(296.2,169.75,0.8087,0.8087,0,0,0,72.1,25);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(473).to({_off:false},0).to({regX:72,regY:24.8,scaleX:1,scaleY:1,x:212.55,y:194.2,alpha:1},37,cjs.Ease.elasticOut).wait(25).to({regX:72.1,regY:24.9,scaleX:1.0868,scaleY:1.0868,x:178.5,y:205.25},15,cjs.Ease.quadInOut).wait(5).to({regX:72,regY:24.8,scaleX:1,scaleY:1,x:212.55,y:194.2},16,cjs.Ease.quadInOut).to({_off:true},48).wait(276));

	// img03_arrow
	this.instance_15 = new lib.Symbol21();
	this.instance_15.setTransform(-396.35,244.75,3.7871,3.7867,0,0,0,171.5,71.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(447).to({_off:false},0).to({x:948.45,y:251.15},26,cjs.Ease.quadOut).to({_off:true},146).wait(276));

	// img03_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_447 = new cjs.Graphics().p("EhwPAH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_448 = new cjs.Graphics().p("EhoUAH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_449 = new cjs.Graphics().p("EhgsAH/IAAv9MCA5AAAIHBH5InAIEg");
	var mask_1_graphics_450 = new cjs.Graphics().p("EhZZAH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_451 = new cjs.Graphics().p("EhSZAH/IAAv9MCA5AAAIHBH5InAIEg");
	var mask_1_graphics_452 = new cjs.Graphics().p("EhLuAH/IAAv9MCA5AAAIHCH5InAIEg");
	var mask_1_graphics_453 = new cjs.Graphics().p("EhFWAH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_454 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_455 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_456 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_457 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_458 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_459 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_460 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_461 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_462 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_463 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_464 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_465 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_466 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_467 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_468 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_469 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_470 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_471 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_472 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_1_graphics_473 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(447).to({graphics:mask_1_graphics_447,x:-718.4147,y:38.9239}).wait(1).to({graphics:mask_1_graphics_448,x:-667.6863,y:39.4068}).wait(1).to({graphics:mask_1_graphics_449,x:-618.9472,y:39.8707}).wait(1).to({graphics:mask_1_graphics_450,x:-572.1975,y:40.3157}).wait(1).to({graphics:mask_1_graphics_451,x:-527.4372,y:40.7417}).wait(1).to({graphics:mask_1_graphics_452,x:-484.6662,y:41.1488}).wait(1).to({graphics:mask_1_graphics_453,x:-443.8845,y:41.537}).wait(1).to({graphics:mask_1_graphics_454,x:-375.1983,y:41.9062}).wait(1).to({graphics:mask_1_graphics_455,x:-301.5924,y:42.2565}).wait(1).to({graphics:mask_1_graphics_456,x:-231.9652,y:42.5878}).wait(1).to({graphics:mask_1_graphics_457,x:-166.3167,y:42.9003}).wait(1).to({graphics:mask_1_graphics_458,x:-104.6468,y:43.1938}).wait(1).to({graphics:mask_1_graphics_459,x:-46.9557,y:43.4683}).wait(1).to({graphics:mask_1_graphics_460,x:6.7567,y:43.7239}).wait(1).to({graphics:mask_1_graphics_461,x:56.4904,y:43.9606}).wait(1).to({graphics:mask_1_graphics_462,x:102.2455,y:44.1784}).wait(1).to({graphics:mask_1_graphics_463,x:144.0218,y:44.3772}).wait(1).to({graphics:mask_1_graphics_464,x:181.8194,y:44.5571}).wait(1).to({graphics:mask_1_graphics_465,x:215.6384,y:44.718}).wait(1).to({graphics:mask_1_graphics_466,x:245.4786,y:44.86}).wait(1).to({graphics:mask_1_graphics_467,x:271.3402,y:44.9831}).wait(1).to({graphics:mask_1_graphics_468,x:293.223,y:45.0873}).wait(1).to({graphics:mask_1_graphics_469,x:311.1271,y:45.1725}).wait(1).to({graphics:mask_1_graphics_470,x:325.0526,y:45.2387}).wait(1).to({graphics:mask_1_graphics_471,x:334.9993,y:45.2861}).wait(1).to({graphics:mask_1_graphics_472,x:340.9674,y:45.3145}).wait(1).to({graphics:mask_1_graphics_473,x:342.9567,y:45.3239}).wait(146).to({graphics:null,x:0,y:0}).wait(276));

	// t_shop
	this.instance_16 = new lib.Symbol15();
	this.instance_16.setTransform(142.85,57.1,0.7844,0.7844,0,0,0,111.3,15.8);
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

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(447).to({_off:false},0).to({regX:216.5,scaleX:1.1765,scaleY:1.1765,x:186.55,y:179.85},171).to({_off:true},1).wait(276));

	// Symbol_13
	this.instance_18 = new lib.Symbol13("synched",0);
	this.instance_18.setTransform(328.15,160.05,0.699,0.699,0,0,0,87.1,16);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(314).to({_off:false},0).to({regX:86.9,regY:15.8,scaleX:1,scaleY:1,x:197.4,y:202.8,alpha:1},36,cjs.Ease.elasticOut).wait(33).to({startPosition:0},0).to({regX:86.5,scaleX:1.0723,scaleY:1.0726,x:167.4,y:213.7},14,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({regX:86.9,scaleX:1,scaleY:1,x:197.4,y:202.8},14,cjs.Ease.quadInOut).to({_off:true},58).wait(421));

	// img02_arrow
	this.instance_19 = new lib.Symbol21();
	this.instance_19.setTransform(-401.95,251.15,3.7871,3.7867,0,0,0,171.5,71.1);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(288).to({_off:false},0).to({x:948.45},26,cjs.Ease.quadOut).to({_off:true},160).wait(421));

	// img02_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_288 = new cjs.Graphics().p("EhwrAH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_289 = new cjs.Graphics().p("EhouAH/IAAv9MCA5AAAIHCH5InAIEg");
	var mask_2_graphics_290 = new cjs.Graphics().p("EhhEAH/IAAv9MCA5AAAIHBH5InAIEg");
	var mask_2_graphics_291 = new cjs.Graphics().p("EhZvAH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_292 = new cjs.Graphics().p("EhStAH/IAAv9MCA5AAAIHBH5InAIEg");
	var mask_2_graphics_293 = new cjs.Graphics().p("EhMAAH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_294 = new cjs.Graphics().p("EhFmAH/IAAv9MCA5AAAIHBH5InAIEg");
	var mask_2_graphics_295 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_296 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_297 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_298 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_299 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_300 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_301 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_302 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_303 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_304 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_305 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_306 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_307 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_308 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_309 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_310 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_311 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_312 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_313 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");
	var mask_2_graphics_314 = new cjs.Graphics().p("EhD9AH/IAAv9MCA5AAAIHCH5InBIEg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(288).to({graphics:mask_2_graphics_288,x:-721.2147,y:45.3239}).wait(1).to({graphics:mask_2_graphics_289,x:-670.275,y:45.3239}).wait(1).to({graphics:mask_2_graphics_290,x:-621.333,y:45.3239}).wait(1).to({graphics:mask_2_graphics_291,x:-574.3886,y:45.3239}).wait(1).to({graphics:mask_2_graphics_292,x:-529.4419,y:45.3239}).wait(1).to({graphics:mask_2_graphics_293,x:-486.4928,y:45.3239}).wait(1).to({graphics:mask_2_graphics_294,x:-445.5413,y:45.3239}).wait(1).to({graphics:mask_2_graphics_295,x:-378.1888,y:45.3239}).wait(1).to({graphics:mask_2_graphics_296,x:-304.2764,y:45.3239}).wait(1).to({graphics:mask_2_graphics_297,x:-234.3593,y:45.3239}).wait(1).to({graphics:mask_2_graphics_298,x:-168.4374,y:45.3239}).wait(1).to({graphics:mask_2_graphics_299,x:-106.5107,y:45.3239}).wait(1).to({graphics:mask_2_graphics_300,x:-48.5794,y:45.3239}).wait(1).to({graphics:mask_2_graphics_301,x:5.3567,y:45.3239}).wait(1).to({graphics:mask_2_graphics_302,x:55.2975,y:45.3239}).wait(1).to({graphics:mask_2_graphics_303,x:101.2431,y:45.3239}).wait(1).to({graphics:mask_2_graphics_304,x:143.1934,y:45.3239}).wait(1).to({graphics:mask_2_graphics_305,x:181.1484,y:45.3239}).wait(1).to({graphics:mask_2_graphics_306,x:215.1082,y:45.3239}).wait(1).to({graphics:mask_2_graphics_307,x:245.0727,y:45.3239}).wait(1).to({graphics:mask_2_graphics_308,x:271.0419,y:45.3239}).wait(1).to({graphics:mask_2_graphics_309,x:293.0159,y:45.3239}).wait(1).to({graphics:mask_2_graphics_310,x:310.9946,y:45.3239}).wait(1).to({graphics:mask_2_graphics_311,x:324.978,y:45.3239}).wait(1).to({graphics:mask_2_graphics_312,x:334.9662,y:45.3239}).wait(1).to({graphics:mask_2_graphics_313,x:340.9591,y:45.3239}).wait(1).to({graphics:mask_2_graphics_314,x:342.9567,y:45.3239}).wait(160).to({graphics:null,x:0,y:0}).wait(421));

	// t_get_up
	this.instance_20 = new lib.Symbol12("synched",0);
	this.instance_20.setTransform(137.05,48.85,0.608,0.608,0,0,0,93.1,16.1);
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

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(288).to({_off:false},0).to({regY:124.9,scaleX:1.1384,scaleY:1.1384,x:114.3,y:134.55},185).to({_off:true},1).wait(421));

	// t_and_get
	this.instance_22 = new lib.Symbol5();
	this.instance_22.setTransform(331.8,159,0.7485,0.7485,0,0,0,57.6,23.4);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(185).to({_off:false},0).to({scaleX:1,scaleY:1,x:227.8,y:193,alpha:1},38,cjs.Ease.elasticOut).to({_off:true},92).wait(580));

	// t_spend
	this.instance_23 = new lib.Symbol4();
	this.instance_23.setTransform(132.3,57.1,0.8122,0.8122,0,0,0,101.2,16.7);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(175).to({_off:false},0).to({regX:101.1,regY:16.5,scaleX:1,scaleY:1,x:116.15,y:64.75,alpha:1},38,cjs.Ease.elasticOut).to({_off:true},102).wait(580));

	// arrows_copy (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_13 = new cjs.Graphics().p("EAg7AF/IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF/IEVk+IkVk2IDNAAIEVE2IkVE+gAevBBIkNE2IC4AAIEOk2IkOkuIi5AAgATmF/IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F/IEVk+IkVk2IDNAAIEVE2IkVE+gARaBBIkNE2IC4AAIEOk2IkOkuIi5AAgAGQF/IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF/IEUk+IkUk2IDMAAIEVE2IkVE+gAEEBBIkME2IC3AAIENk2IkOkuIi3AAgAnEF/IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF/IEVk+IkWk2IDOAAIEVE2IkVE+gApQBBIkNE2IC4AAIENk2IkOkuIi4AAgA0bF/IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF/IEVk+IkVk2IDNAAIEVE2IkVE+gA2nBBIkOE2IC5AAIENk2IkOkuIi4AAgEghwAF/IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF/IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8ABBIkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_14 = new cjs.Graphics().p("EAg7AF/IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF/IEVk+IkVk2IDNAAIEVE2IkVE+gAevBBIkNE2IC4AAIEOk2IkOkuIi5AAgATmF/IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F/IEVk+IkVk2IDNAAIEVE2IkVE+gARaBBIkNE2IC4AAIEOk2IkOkuIi5AAgAGQF/IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF/IEUk+IkUk2IDMAAIEVE2IkVE+gAEEBBIkME2IC3AAIENk2IkOkuIi3AAgAnEF/IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF/IEVk+IkWk2IDOAAIEVE2IkVE+gApQBBIkNE2IC4AAIENk2IkOkuIi4AAgA0bF/IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF/IEVk+IkVk2IDNAAIEVE2IkVE+gA2nBBIkOE2IC5AAIENk2IkOkuIi4AAgEghwAF/IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF/IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8ABBIkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_15 = new cjs.Graphics().p("EAg7AF/IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF/IEVk+IkVk2IDNAAIEVE2IkVE+gAevBBIkNE2IC4AAIEOk2IkOkuIi5AAgATmF/IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F/IEVk+IkVk2IDNAAIEVE2IkVE+gARaBBIkNE2IC4AAIEOk2IkOkuIi5AAgAGQF/IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF/IEUk+IkUk2IDMAAIEVE2IkVE+gAEEBBIkME2IC3AAIENk2IkOkuIi3AAgAnEF/IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF/IEVk+IkWk2IDOAAIEVE2IkVE+gApQBBIkNE2IC4AAIENk2IkOkuIi4AAgA0bF/IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF/IEVk+IkVk2IDNAAIEVE2IkVE+gA2nBBIkOE2IC5AAIENk2IkOkuIi4AAgEghwAF/IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF/IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8ABBIkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_16 = new cjs.Graphics().p("EAg7AF/IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF/IEVk+IkVk2IDNAAIEVE2IkVE+gAevBBIkNE2IC4AAIEOk2IkOkuIi5AAgATmF/IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F/IEVk+IkVk2IDNAAIEVE2IkVE+gARaBBIkNE2IC4AAIEOk2IkOkuIi5AAgAGQF/IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF/IEUk+IkUk2IDMAAIEVE2IkVE+gAEEBBIkME2IC3AAIENk2IkOkuIi3AAgAnEF/IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF/IEVk+IkWk2IDOAAIEVE2IkVE+gApQBBIkNE2IC4AAIENk2IkOkuIi4AAgA0bF/IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF/IEVk+IkVk2IDNAAIEVE2IkVE+gA2nBBIkOE2IC5AAIENk2IkOkuIi4AAgEghwAF/IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF/IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8ABBIkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_17 = new cjs.Graphics().p("EAg7AF/IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF/IEVk+IkVk2IDNAAIEVE2IkVE+gAevBBIkNE2IC4AAIEOk2IkOkuIi5AAgATmF/IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F/IEVk+IkVk2IDNAAIEVE2IkVE+gARaBBIkNE2IC4AAIEOk2IkOkuIi5AAgAGQF/IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF/IEUk+IkUk2IDMAAIEVE2IkVE+gAEEBBIkME2IC3AAIENk2IkOkuIi3AAgAnEF/IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF/IEVk+IkWk2IDOAAIEVE2IkVE+gApQBBIkNE2IC4AAIENk2IkOkuIi4AAgA0bF/IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF/IEVk+IkVk2IDNAAIEVE2IkVE+gA2nBBIkOE2IC5AAIENk2IkOkuIi4AAgEghwAF/IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF/IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8ABBIkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_18 = new cjs.Graphics().p("EAg7AF/IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF/IEVk+IkVk2IDNAAIEVE2IkVE+gAevBBIkNE2IC4AAIEOk2IkOkuIi5AAgATmF/IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F/IEVk+IkVk2IDNAAIEVE2IkVE+gARaBBIkNE2IC4AAIEOk2IkOkuIi5AAgAGQF/IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF/IEUk+IkUk2IDMAAIEVE2IkVE+gAEEBBIkME2IC3AAIENk2IkOkuIi3AAgAnEF/IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF/IEVk+IkWk2IDOAAIEVE2IkVE+gApQBBIkNE2IC4AAIENk2IkOkuIi4AAgA0bF/IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF/IEVk+IkVk2IDNAAIEVE2IkVE+gA2nBBIkOE2IC5AAIENk2IkOkuIi4AAgEghwAF/IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF/IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8ABBIkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_19 = new cjs.Graphics().p("EAg7AF/IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF/IEVk+IkVk2IDNAAIEVE2IkVE+gAevBBIkNE2IC4AAIEOk2IkOkuIi5AAgATmF/IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F/IEVk+IkVk2IDNAAIEVE2IkVE+gARaBBIkNE2IC4AAIEOk2IkOkuIi5AAgAGQF/IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF/IEUk+IkUk2IDMAAIEVE2IkVE+gAEEBBIkME2IC3AAIENk2IkOkuIi3AAgAnEF/IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF/IEVk+IkWk2IDOAAIEVE2IkVE+gApQBBIkNE2IC4AAIENk2IkOkuIi4AAgA0bF/IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF/IEVk+IkVk2IDNAAIEVE2IkVE+gA2nBBIkOE2IC5AAIENk2IkOkuIi4AAgEghwAF/IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF/IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8ABBIkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_20 = new cjs.Graphics().p("EAg7AF/IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF/IEVk+IkVk2IDNAAIEVE2IkVE+gAevBBIkNE2IC4AAIEOk2IkOkuIi5AAgATmF/IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F/IEVk+IkVk2IDNAAIEVE2IkVE+gARaBBIkNE2IC4AAIEOk2IkOkuIi5AAgAGQF/IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF/IEUk+IkUk2IDMAAIEVE2IkVE+gAEEBBIkME2IC3AAIENk2IkOkuIi3AAgAnEF/IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF/IEVk+IkWk2IDOAAIEVE2IkVE+gApQBBIkNE2IC4AAIENk2IkOkuIi4AAgA0bF/IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF/IEVk+IkVk2IDNAAIEVE2IkVE+gA2nBBIkOE2IC5AAIENk2IkOkuIi4AAgEghwAF/IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF/IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8ABBIkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_21 = new cjs.Graphics().p("EAg7AF+IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF+IEVk9IkVk2IDNAAIEVE1IkVE+gAevBBIkNE1IC4AAIEOk2IkOkuIi5AAgATmF+IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F+IEVk9IkVk2IDNAAIEVE1IkVE+gARaBBIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF+IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBBIkME1IC3AAIENk2IkOkuIi3AAgAnEF+IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF+IEVk9IkWk2IDOAAIEVE1IkVE+gApQBBIkNE1IC4AAIENk2IkOkuIi4AAgA0bF+IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF+IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBBIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF+IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABBIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_22 = new cjs.Graphics().p("EAg7AF+IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF+IEVk9IkVk2IDNAAIEVE1IkVE+gAevBBIkNE1IC4AAIEOk2IkOkuIi5AAgATmF+IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F+IEVk9IkVk2IDNAAIEVE1IkVE+gARaBBIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF+IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBBIkME1IC3AAIENk2IkOkuIi3AAgAnEF+IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF+IEVk9IkWk2IDOAAIEVE1IkVE+gApQBBIkNE1IC4AAIENk2IkOkuIi4AAgA0bF+IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF+IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBBIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF+IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABBIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_23 = new cjs.Graphics().p("EAg7AF+IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF+IEVk9IkVk2IDNAAIEVE1IkVE+gAevBBIkNE1IC4AAIEOk2IkOkuIi5AAgATmF+IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F+IEVk9IkVk2IDNAAIEVE1IkVE+gARaBBIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF+IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBBIkME1IC3AAIENk2IkOkuIi3AAgAnEF+IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF+IEVk9IkWk2IDOAAIEVE1IkVE+gApQBBIkNE1IC4AAIENk2IkOkuIi4AAgA0bF+IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF+IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBBIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF+IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABBIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_24 = new cjs.Graphics().p("EAg7AF+IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF+IEVk9IkVk2IDNAAIEVE1IkVE+gAevBBIkNE1IC4AAIEOk2IkOkuIi5AAgATmF+IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F+IEVk9IkVk2IDNAAIEVE1IkVE+gARaBBIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF+IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBBIkME1IC3AAIENk2IkOkuIi3AAgAnEF+IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF+IEVk9IkWk2IDOAAIEVE1IkVE+gApQBBIkNE1IC4AAIENk2IkOkuIi4AAgA0bF+IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF+IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBBIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF+IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABBIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_25 = new cjs.Graphics().p("EAg7AF+IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF+IEVk9IkVk2IDNAAIEVE1IkVE+gAevBBIkNE1IC4AAIEOk2IkOkuIi5AAgATmF+IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F+IEVk9IkVk2IDNAAIEVE1IkVE+gARaBBIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF+IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBBIkME1IC3AAIENk2IkOkuIi3AAgAnEF+IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF+IEVk9IkWk2IDOAAIEVE1IkVE+gApQBBIkNE1IC4AAIENk2IkOkuIi4AAgA0bF+IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF+IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBBIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF+IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABBIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_26 = new cjs.Graphics().p("EAg7AF+IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF+IEVk9IkVk2IDNAAIEVE1IkVE+gAevBBIkNE1IC4AAIEOk2IkOkuIi5AAgATmF+IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F+IEVk9IkVk2IDNAAIEVE1IkVE+gARaBBIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF+IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBBIkME1IC3AAIENk2IkOkuIi3AAgAnEF+IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF+IEVk9IkWk2IDOAAIEVE1IkVE+gApQBBIkNE1IC4AAIENk2IkOkuIi4AAgA0bF+IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF+IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBBIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF+IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABBIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_27 = new cjs.Graphics().p("EAg7AF+IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF+IEVk9IkVk2IDNAAIEVE1IkVE+gAevBBIkNE1IC4AAIEOk2IkOkuIi5AAgATmF+IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F+IEVk9IkVk2IDNAAIEVE1IkVE+gARaBBIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF+IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBBIkME1IC3AAIENk2IkOkuIi3AAgAnEF+IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF+IEVk9IkWk2IDOAAIEVE1IkVE+gApQBBIkNE1IC4AAIENk2IkOkuIi4AAgA0bF+IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF+IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBBIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF+IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABBIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_28 = new cjs.Graphics().p("EAg7AF+IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF+IEVk9IkVk2IDNAAIEVE1IkVE+gAevBBIkNE1IC4AAIEOk2IkOkuIi5AAgATmF+IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F+IEVk9IkVk2IDNAAIEVE1IkVE+gARaBBIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF+IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBBIkME1IC3AAIENk2IkOkuIi3AAgAnEF+IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF+IEVk9IkWk2IDOAAIEVE1IkVE+gApQBBIkNE1IC4AAIENk2IkOkuIi4AAgA0bF+IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF+IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBBIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF+IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABBIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_29 = new cjs.Graphics().p("EAg7AF+IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF+IEVk9IkVk2IDNAAIEVE1IkVE+gAevBBIkNE1IC4AAIEOk2IkOkuIi5AAgATmF+IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F+IEVk9IkVk2IDNAAIEVE1IkVE+gARaBBIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF+IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBBIkME1IC3AAIENk2IkOkuIi3AAgAnEF+IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF+IEVk9IkWk2IDOAAIEVE1IkVE+gApQBBIkNE1IC4AAIENk2IkOkuIi4AAgA0bF+IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF+IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBBIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF+IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABBIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_30 = new cjs.Graphics().p("EAg7AF+IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF+IEVk9IkVk2IDNAAIEVE1IkVE+gAevBBIkNE1IC4AAIEOk2IkOkuIi5AAgATmF+IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F+IEVk9IkVk2IDNAAIEVE1IkVE+gARaBBIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF+IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBBIkME1IC3AAIENk2IkOkuIi3AAgAnEF+IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF+IEVk9IkWk2IDOAAIEVE1IkVE+gApQBBIkNE1IC4AAIENk2IkOkuIi4AAgA0bF+IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF+IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBBIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF+IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABBIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_31 = new cjs.Graphics().p("EAg7AF+IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF+IEVk9IkVk2IDNAAIEVE1IkVE+gAevBBIkNE1IC4AAIEOk2IkOkuIi5AAgATmF+IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F+IEVk9IkVk2IDNAAIEVE1IkVE+gARaBBIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF+IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBBIkME1IC3AAIENk2IkOkuIi3AAgAnEF+IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF+IEVk9IkWk2IDOAAIEVE1IkVE+gApQBBIkNE1IC4AAIENk2IkOkuIi4AAgA0bF+IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF+IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBBIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF+IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABBIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_32 = new cjs.Graphics().p("EAg7AF+IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF+IEVk9IkVk2IDNAAIEVE1IkVE+gAevBBIkNE1IC4AAIEOk2IkOkuIi5AAgATmF+IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F+IEVk9IkVk2IDNAAIEVE1IkVE+gARaBBIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF+IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBBIkME1IC3AAIENk2IkOkuIi3AAgAnEF+IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF+IEVk9IkWk2IDOAAIEVE1IkVE+gApQBBIkNE1IC4AAIENk2IkOkuIi4AAgA0bF+IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF+IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBBIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF+IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABBIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_33 = new cjs.Graphics().p("EAg7AF+IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF+IEVk9IkVk2IDNAAIEVE1IkVE+gAevBBIkNE1IC4AAIEOk2IkOkuIi5AAgATmF+IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F+IEVk9IkVk2IDNAAIEVE1IkVE+gARaBBIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF+IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBBIkME1IC3AAIENk2IkOkuIi3AAgAnEF+IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF+IEVk9IkWk2IDOAAIEVE1IkVE+gApQBBIkNE1IC4AAIENk2IkOkuIi4AAgA0bF+IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF+IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBBIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF+IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABBIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_34 = new cjs.Graphics().p("EAg7AF+IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF+IEVk+IkVk2IDNAAIEVE2IkVE+gAevBAIkNE2IC4AAIEOk2IkOkuIi5AAgATmF+IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F+IEVk+IkVk2IDNAAIEVE2IkVE+gARaBAIkNE2IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF+IEUk+IkUk2IDMAAIEVE2IkVE+gAEEBAIkME2IC3AAIENk2IkOkuIi3AAgAnEF+IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF+IEVk+IkWk2IDOAAIEVE2IkVE+gApQBAIkNE2IC4AAIENk2IkOkuIi4AAgA0bF+IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF+IEVk+IkVk2IDNAAIEVE2IkVE+gA2nBAIkOE2IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF+IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8ABAIkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_35 = new cjs.Graphics().p("EAg7AF+IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF+IEVk+IkVk2IDNAAIEVE2IkVE+gAevBAIkNE2IC4AAIEOk2IkOkuIi5AAgATmF+IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F+IEVk+IkVk2IDNAAIEVE2IkVE+gARaBAIkNE2IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF+IEUk+IkUk2IDMAAIEVE2IkVE+gAEEBAIkME2IC3AAIENk2IkOkuIi3AAgAnEF+IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF+IEVk+IkWk2IDOAAIEVE2IkVE+gApQBAIkNE2IC4AAIENk2IkOkuIi4AAgA0bF+IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF+IEVk+IkVk2IDNAAIEVE2IkVE+gA2nBAIkOE2IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF+IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8ABAIkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_36 = new cjs.Graphics().p("EAg7AF+IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF+IEVk+IkVk2IDNAAIEVE2IkVE+gAevBAIkNE2IC4AAIEOk2IkOkuIi5AAgATmF+IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F+IEVk+IkVk2IDNAAIEVE2IkVE+gARaBAIkNE2IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF+IEUk+IkUk2IDMAAIEVE2IkVE+gAEEBAIkME2IC3AAIENk2IkOkuIi3AAgAnEF+IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF+IEVk+IkWk2IDOAAIEVE2IkVE+gApQBAIkNE2IC4AAIENk2IkOkuIi4AAgA0bF+IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF+IEVk+IkVk2IDNAAIEVE2IkVE+gA2nBAIkOE2IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF+IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8ABAIkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_37 = new cjs.Graphics().p("EAg7AF+IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF+IEVk+IkVk2IDNAAIEVE2IkVE+gAevBAIkNE2IC4AAIEOk2IkOkuIi5AAgATmF+IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F+IEVk+IkVk2IDNAAIEVE2IkVE+gARaBAIkNE2IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF+IEUk+IkUk2IDMAAIEVE2IkVE+gAEEBAIkME2IC3AAIENk2IkOkuIi3AAgAnEF+IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF+IEVk+IkWk2IDOAAIEVE2IkVE+gApQBAIkNE2IC4AAIENk2IkOkuIi4AAgA0bF+IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF+IEVk+IkVk2IDNAAIEVE2IkVE+gA2nBAIkOE2IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF+IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8ABAIkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_38 = new cjs.Graphics().p("EAg7AF+IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF+IEVk+IkVk2IDNAAIEVE2IkVE+gAevBAIkNE2IC4AAIEOk2IkOkuIi5AAgATmF+IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F+IEVk+IkVk2IDNAAIEVE2IkVE+gARaBAIkNE2IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF+IEUk+IkUk2IDMAAIEVE2IkVE+gAEEBAIkME2IC3AAIENk2IkOkuIi3AAgAnEF+IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF+IEVk+IkWk2IDOAAIEVE2IkVE+gApQBAIkNE2IC4AAIENk2IkOkuIi4AAgA0bF+IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF+IEVk+IkVk2IDNAAIEVE2IkVE+gA2nBAIkOE2IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF+IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8ABAIkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_39 = new cjs.Graphics().p("EAg7AF+IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF+IEVk+IkVk2IDNAAIEVE2IkVE+gAevBAIkNE2IC4AAIEOk2IkOkuIi5AAgATmF+IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F+IEVk+IkVk2IDNAAIEVE2IkVE+gARaBAIkNE2IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF+IEUk+IkUk2IDMAAIEVE2IkVE+gAEEBAIkME2IC3AAIENk2IkOkuIi3AAgAnEF+IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF+IEVk+IkWk2IDOAAIEVE2IkVE+gApQBAIkNE2IC4AAIENk2IkOkuIi4AAgA0bF+IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF+IEVk+IkVk2IDNAAIEVE2IkVE+gA2nBAIkOE2IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF+IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8ABAIkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_40 = new cjs.Graphics().p("EAg7AF+IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF+IEVk+IkVk2IDNAAIEVE2IkVE+gAevBAIkNE2IC4AAIEOk2IkOkuIi5AAgATmF+IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F+IEVk+IkVk2IDNAAIEVE2IkVE+gARaBAIkNE2IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF+IEUk+IkUk2IDMAAIEVE2IkVE+gAEEBAIkME2IC3AAIENk2IkOkuIi3AAgAnEF+IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF+IEVk+IkWk2IDOAAIEVE2IkVE+gApQBAIkNE2IC4AAIENk2IkOkuIi4AAgA0bF+IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF+IEVk+IkVk2IDNAAIEVE2IkVE+gA2nBAIkOE2IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF+IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8ABAIkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_41 = new cjs.Graphics().p("EAg7AF+IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF+IEVk+IkVk2IDNAAIEVE2IkVE+gAevBAIkNE2IC4AAIEOk2IkOkuIi5AAgATmF+IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F+IEVk+IkVk2IDNAAIEVE2IkVE+gARaBAIkNE2IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF+IEUk+IkUk2IDMAAIEVE2IkVE+gAEEBAIkME2IC3AAIENk2IkOkuIi3AAgAnEF+IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF+IEVk+IkWk2IDOAAIEVE2IkVE+gApQBAIkNE2IC4AAIENk2IkOkuIi4AAgA0bF+IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF+IEVk+IkVk2IDNAAIEVE2IkVE+gA2nBAIkOE2IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF+IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8ABAIkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_42 = new cjs.Graphics().p("EAg7AF+IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF+IEVk+IkVk2IDNAAIEVE2IkVE+gAevBAIkNE2IC4AAIEOk2IkOkuIi5AAgATmF+IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F+IEVk+IkVk2IDNAAIEVE2IkVE+gARaBAIkNE2IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF+IEUk+IkUk2IDMAAIEVE2IkVE+gAEEBAIkME2IC3AAIENk2IkOkuIi3AAgAnEF+IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF+IEVk+IkWk2IDOAAIEVE2IkVE+gApQBAIkNE2IC4AAIENk2IkOkuIi4AAgA0bF+IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF+IEVk+IkVk2IDNAAIEVE2IkVE+gA2nBAIkOE2IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF+IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8ABAIkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_43 = new cjs.Graphics().p("EAg7AF+IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF+IEVk+IkVk2IDNAAIEVE2IkVE+gAevBAIkNE2IC4AAIEOk2IkOkuIi5AAgATmF+IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F+IEVk+IkVk2IDNAAIEVE2IkVE+gARaBAIkNE2IC4AAIEOk2IkOkuIi5AAgAGQF+IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF+IEUk+IkUk2IDMAAIEVE2IkVE+gAEEBAIkME2IC3AAIENk2IkOkuIi3AAgAnEF+IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF+IEVk+IkWk2IDOAAIEVE2IkVE+gApQBAIkNE2IC4AAIENk2IkOkuIi4AAgA0bF+IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF+IEVk+IkVk2IDNAAIEVE2IkVE+gA2nBAIkOE2IC5AAIENk2IkOkuIi4AAgEghwAF+IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF+IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8ABAIkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_44 = new cjs.Graphics().p("EAg7AF9IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF9IEVk9IkVk2IDNAAIEVE1IkVE+gAevBAIkNE1IC4AAIEOk2IkOkuIi5AAgATmF9IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F9IEVk9IkVk2IDNAAIEVE1IkVE+gARaBAIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF9IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF9IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBAIkME1IC3AAIENk2IkOkuIi3AAgAnEF9IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF9IEVk9IkWk2IDOAAIEVE1IkVE+gApQBAIkNE1IC4AAIENk2IkOkuIi4AAgA0bF9IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF9IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBAIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF9IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF9IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABAIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_45 = new cjs.Graphics().p("EAg7AF9IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF9IEVk9IkVk2IDNAAIEVE1IkVE+gAevBAIkNE1IC4AAIEOk2IkOkuIi5AAgATmF9IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F9IEVk9IkVk2IDNAAIEVE1IkVE+gARaBAIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF9IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF9IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBAIkME1IC3AAIENk2IkOkuIi3AAgAnEF9IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF9IEVk9IkWk2IDOAAIEVE1IkVE+gApQBAIkNE1IC4AAIENk2IkOkuIi4AAgA0bF9IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF9IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBAIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF9IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF9IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABAIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_46 = new cjs.Graphics().p("EAg7AF9IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF9IEVk9IkVk2IDNAAIEVE1IkVE+gAevBAIkNE1IC4AAIEOk2IkOkuIi5AAgATmF9IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F9IEVk9IkVk2IDNAAIEVE1IkVE+gARaBAIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF9IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF9IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBAIkME1IC3AAIENk2IkOkuIi3AAgAnEF9IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF9IEVk9IkWk2IDOAAIEVE1IkVE+gApQBAIkNE1IC4AAIENk2IkOkuIi4AAgA0bF9IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF9IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBAIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF9IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF9IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABAIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_47 = new cjs.Graphics().p("EAg7AF9IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF9IEVk9IkVk2IDNAAIEVE1IkVE+gAevBAIkNE1IC4AAIEOk2IkOkuIi5AAgATmF9IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F9IEVk9IkVk2IDNAAIEVE1IkVE+gARaBAIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF9IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF9IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBAIkME1IC3AAIENk2IkOkuIi3AAgAnEF9IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF9IEVk9IkWk2IDOAAIEVE1IkVE+gApQBAIkNE1IC4AAIENk2IkOkuIi4AAgA0bF9IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF9IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBAIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF9IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF9IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABAIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_48 = new cjs.Graphics().p("EAg7AF9IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF9IEVk9IkVk2IDNAAIEVE1IkVE+gAevBAIkNE1IC4AAIEOk2IkOkuIi5AAgATmF9IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F9IEVk9IkVk2IDNAAIEVE1IkVE+gARaBAIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF9IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF9IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBAIkME1IC3AAIENk2IkOkuIi3AAgAnEF9IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF9IEVk9IkWk2IDOAAIEVE1IkVE+gApQBAIkNE1IC4AAIENk2IkOkuIi4AAgA0bF9IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF9IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBAIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF9IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF9IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABAIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_49 = new cjs.Graphics().p("EAg7AF9IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF9IEVk9IkVk2IDNAAIEVE1IkVE+gAevBAIkNE1IC4AAIEOk2IkOkuIi5AAgATmF9IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F9IEVk9IkVk2IDNAAIEVE1IkVE+gARaBAIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF9IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF9IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBAIkME1IC3AAIENk2IkOkuIi3AAgAnEF9IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF9IEVk9IkWk2IDOAAIEVE1IkVE+gApQBAIkNE1IC4AAIENk2IkOkuIi4AAgA0bF9IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF9IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBAIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF9IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF9IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABAIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_50 = new cjs.Graphics().p("EAg7AF9IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF9IEVk9IkVk2IDNAAIEVE1IkVE+gAevBAIkNE1IC4AAIEOk2IkOkuIi5AAgATmF9IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F9IEVk9IkVk2IDNAAIEVE1IkVE+gARaBAIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF9IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF9IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBAIkME1IC3AAIENk2IkOkuIi3AAgAnEF9IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF9IEVk9IkWk2IDOAAIEVE1IkVE+gApQBAIkNE1IC4AAIENk2IkOkuIi4AAgA0bF9IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF9IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBAIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF9IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF9IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABAIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_51 = new cjs.Graphics().p("EAg7AF9IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF9IEVk9IkVk2IDNAAIEVE1IkVE+gAevBAIkNE1IC4AAIEOk2IkOkuIi5AAgATmF9IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F9IEVk9IkVk2IDNAAIEVE1IkVE+gARaBAIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF9IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF9IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBAIkME1IC3AAIENk2IkOkuIi3AAgAnEF9IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF9IEVk9IkWk2IDOAAIEVE1IkVE+gApQBAIkNE1IC4AAIENk2IkOkuIi4AAgA0bF9IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF9IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBAIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF9IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF9IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABAIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_52 = new cjs.Graphics().p("EAg7AF9IEVk9IkVk2IDNAAIEVE1IkVE+gAaQF9IEVk9IkVk2IDNAAIEVE1IkVE+gAevBAIkNE1IC4AAIEOk2IkOkuIi5AAgATmF9IEUk9IkUk2IDNAAIEVE1IkVE+gAM7F9IEVk9IkVk2IDNAAIEVE1IkVE+gARaBAIkNE1IC4AAIEOk2IkOkuIi5AAgAGQF9IEUk9IkVk2IDOAAIEVE1IkVE+gAgaF9IEUk9IkUk2IDMAAIEVE1IkVE+gAEEBAIkME1IC3AAIENk2IkOkuIi3AAgAnEF9IEUk9IkVk2IDOAAIEUE1IkUE+gAtvF9IEVk9IkWk2IDOAAIEVE1IkVE+gApQBAIkNE1IC4AAIENk2IkOkuIi4AAgA0bF9IEUk9IkVk2IDOAAIEVE1IkVE+gA7GF9IEVk9IkVk2IDNAAIEVE1IkVE+gA2nBAIkOE1IC5AAIENk2IkOkuIi4AAgEghwAF9IEUk9IkVk2IDOAAIEUE1IkUE+gEgobAF9IEUk9IkVk2IDOAAIEVE1IkVE+gEgj8ABAIkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_53 = new cjs.Graphics().p("EAg7AF9IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF9IEVk+IkVk2IDNAAIEVE2IkVE+gAevA/IkNE2IC4AAIEOk2IkOkuIi5AAgATmF9IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F9IEVk+IkVk2IDNAAIEVE2IkVE+gARaA/IkNE2IC4AAIEOk2IkOkuIi5AAgAGQF9IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF9IEUk+IkUk2IDMAAIEVE2IkVE+gAEEA/IkME2IC3AAIENk2IkOkuIi3AAgAnEF9IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF9IEVk+IkWk2IDOAAIEVE2IkVE+gApQA/IkNE2IC4AAIENk2IkOkuIi4AAgA0bF9IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF9IEVk+IkVk2IDNAAIEVE2IkVE+gA2nA/IkOE2IC5AAIENk2IkOkuIi4AAgEghwAF9IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF9IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8AA/IkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_54 = new cjs.Graphics().p("EAg7AF9IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF9IEVk+IkVk2IDNAAIEVE2IkVE+gAevA/IkNE2IC4AAIEOk2IkOkuIi5AAgATmF9IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F9IEVk+IkVk2IDNAAIEVE2IkVE+gARaA/IkNE2IC4AAIEOk2IkOkuIi5AAgAGQF9IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF9IEUk+IkUk2IDMAAIEVE2IkVE+gAEEA/IkME2IC3AAIENk2IkOkuIi3AAgAnEF9IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF9IEVk+IkWk2IDOAAIEVE2IkVE+gApQA/IkNE2IC4AAIENk2IkOkuIi4AAgA0bF9IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF9IEVk+IkVk2IDNAAIEVE2IkVE+gA2nA/IkOE2IC5AAIENk2IkOkuIi4AAgEghwAF9IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF9IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8AA/IkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_55 = new cjs.Graphics().p("EAg7AF9IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF9IEVk+IkVk2IDNAAIEVE2IkVE+gAevA/IkNE2IC4AAIEOk2IkOkuIi5AAgATmF9IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F9IEVk+IkVk2IDNAAIEVE2IkVE+gARaA/IkNE2IC4AAIEOk2IkOkuIi5AAgAGQF9IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF9IEUk+IkUk2IDMAAIEVE2IkVE+gAEEA/IkME2IC3AAIENk2IkOkuIi3AAgAnEF9IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF9IEVk+IkWk2IDOAAIEVE2IkVE+gApQA/IkNE2IC4AAIENk2IkOkuIi4AAgA0bF9IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF9IEVk+IkVk2IDNAAIEVE2IkVE+gA2nA/IkOE2IC5AAIENk2IkOkuIi4AAgEghwAF9IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF9IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8AA/IkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_56 = new cjs.Graphics().p("EAg7AF9IEVk+IkVk2IDNAAIEVE2IkVE+gAaQF9IEVk+IkVk2IDNAAIEVE2IkVE+gAevA/IkNE2IC4AAIEOk2IkOkuIi5AAgATmF9IEUk+IkUk2IDNAAIEVE2IkVE+gAM7F9IEVk+IkVk2IDNAAIEVE2IkVE+gARaA/IkNE2IC4AAIEOk2IkOkuIi5AAgAGQF9IEUk+IkVk2IDOAAIEVE2IkVE+gAgaF9IEUk+IkUk2IDMAAIEVE2IkVE+gAEEA/IkME2IC3AAIENk2IkOkuIi3AAgAnEF9IEUk+IkVk2IDOAAIEUE2IkUE+gAtvF9IEVk+IkWk2IDOAAIEVE2IkVE+gApQA/IkNE2IC4AAIENk2IkOkuIi4AAgA0bF9IEUk+IkVk2IDOAAIEVE2IkVE+gA7GF9IEVk+IkVk2IDNAAIEVE2IkVE+gA2nA/IkOE2IC5AAIENk2IkOkuIi4AAgEghwAF9IEUk+IkVk2IDOAAIEUE2IkUE+gEgobAF9IEUk+IkVk2IDOAAIEVE2IkVE+gEgj8AA/IkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_57 = new cjs.Graphics().p("EAhkAF9IEVk+IkVk2IDNAAIEVE2IkVE+gAa5F9IEVk+IkVk2IDNAAIEVE2IkVE+gAfYA/IkNE2IC4AAIEOk2IkOkuIi5AAgAUPF9IEUk+IkUk2IDNAAIEVE2IkVE+gANkF9IEVk+IkVk2IDNAAIEVE2IkVE+gASDA/IkNE2IC4AAIEOk2IkOkuIi5AAgAG5F9IEUk+IkVk2IDOAAIEVE2IkVE+gAAOF9IEVk+IkVk2IDNAAIEVE2IkVE+gAEtA/IkNE2IC4AAIENk2IkOkuIi4AAgAmbF9IEUk+IkVk2IDOAAIEUE2IkUE+gAtGF9IEVk+IkWk2IDOAAIEVE2IkVE+gAonA/IkNE2IC4AAIENk2IkOkuIi4AAgAzyF9IEUk+IkVk2IDOAAIEVE2IkVE+gA6dF9IEVk+IkVk2IDNAAIEVE2IkVE+gA1+A/IkOE2IC5AAIENk2IkOkuIi4AAgEghHAF9IEUk+IkVk2IDOAAIEUE2IkUE+gEgnyAF9IEUk+IkVk2IDOAAIEVE2IkVE+gEgjTAA/IkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_58 = new cjs.Graphics().p("EAidAF9IEVk+IkVk2IDNAAIEVE2IkVE+gAbyF9IEVk+IkVk2IDNAAIEVE2IkVE+gEAgRAA/IkNE2IC4AAIEOk2IkOkuIi5AAgAVIF9IEUk+IkUk2IDNAAIEVE2IkVE+gAOdF9IEVk+IkVk2IDNAAIEVE2IkVE+gAS8A/IkNE2IC4AAIEOk2IkOkuIi5AAgAHyF9IEUk+IkVk2IDOAAIEVE2IkVE+gABHF9IEVk+IkVk2IDNAAIEVE2IkVE+gAFmA/IkNE2IC4AAIENk2IkOkuIi4AAgAliF9IEUk+IkVk2IDOAAIEUE2IkUE+gAsNF9IEVk+IkWk2IDOAAIEVE2IkVE+gAnuA/IkNE2IC4AAIENk2IkOkuIi4AAgAy5F9IEUk+IkVk2IDOAAIEVE2IkVE+gA5kF9IEVk+IkVk2IDNAAIEVE2IkVE+gA1FA/IkOE2IC5AAIENk2IkOkuIi4AAgEggOAF9IEUk+IkVk2IDOAAIEUE2IkUE+gEgm5AF9IEUk+IkVk2IDOAAIEVE2IkVE+gEgiaAA/IkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_59 = new cjs.Graphics().p("EAjXAF9IEVk+IkVk2IDNAAIEVE2IkVE+gAcsF9IEVk+IkVk2IDNAAIEVE2IkVE+gEAhLAA/IkNE2IC4AAIEOk2IkOkuIi5AAgAWCF9IEUk+IkUk2IDNAAIEVE2IkVE+gAPXF9IEVk+IkVk2IDNAAIEVE2IkVE+gAT2A/IkNE2IC4AAIEOk2IkOkuIi5AAgAIsF9IEUk+IkVk2IDOAAIEVE2IkVE+gACBF9IEVk+IkVk2IDNAAIEVE2IkVE+gAGgA/IkNE2IC4AAIENk2IkOkuIi4AAgAkoF9IEUk+IkVk2IDOAAIEUE2IkUE+gArTF9IEVk+IkWk2IDOAAIEVE2IkVE+gAm0A/IkNE2IC4AAIENk2IkOkuIi4AAgAx/F9IEUk+IkVk2IDOAAIEVE2IkVE+gA4qF9IEVk+IkVk2IDNAAIEVE2IkVE+gA0LA/IkOE2IC5AAIENk2IkOkuIi4AAgA/UF9IEUk+IkVk2IDOAAIEUE2IkUE+gEgl/AF9IEUk+IkVk2IDOAAIEVE2IkVE+gEghgAA/IkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_60 = new cjs.Graphics().p("EAkSAF9IEUk+IkVk2IDOAAIEUE1IkUE/gAdnF9IEUk+IkVk2IDOAAIEUE1IkUE/gEAiGAA/IkOE2IC4AAIEOk3IkOktIi4AAgAW9F9IEUk+IkVk2IDOAAIEUE1IkUE/gAQSF9IEUk+IkVk2IDOAAIEUE1IkUE/gAUxA/IkOE2IC4AAIEOk3IkOktIi4AAgAJnF9IEUk+IkVk2IDNAAIEVE1IkUE/gAC8F9IEUk+IkVk2IDOAAIEUE1IkUE/gAHbA/IkOE2IC4AAIEOk3IkOktIi4AAgAjtF9IETk+IkUk2IDNAAIEUE1IkTE/gAqYF9IEUk+IkVk2IDNAAIEVE1IkUE/gAl5A/IkOE2IC4AAIEOk3IkOktIi5AAgAxEF9IEUk+IkVk2IDNAAIEVE1IkUE/gA3vF9IEUk+IkVk2IDNAAIEVE1IkUE/gAzQA/IkOE2IC4AAIEOk3IkOktIi5AAgA+ZF9IEUk+IkVk2IDNAAIEVE1IkVE/gEglEAF9IEUk+IkVk2IDNAAIEVE1IkVE/gEggmAA/IkNE2IC4AAIEOk3IkOktIi5AAg");
	var mask_3_graphics_61 = new cjs.Graphics().p("EAlNAF8IEVk9IkVk2IDNAAIEVE1IkVE+gAeiF8IEVk9IkVk2IDNAAIEVE1IkVE+gEAjBAA/IkNE1IC4AAIEOk2IkOkuIi5AAgAX4F8IEUk9IkUk2IDNAAIEVE1IkVE+gARNF8IEVk9IkVk2IDNAAIEVE1IkVE+gAVsA/IkNE1IC4AAIEOk2IkOkuIi5AAgAKiF8IEUk9IkVk2IDOAAIEVE1IkVE+gAD3F8IEVk9IkVk2IDNAAIEVE1IkVE+gAIWA/IkNE1IC4AAIENk2IkOkuIi4AAgAiyF8IETk9IkUk2IDNAAIEVE1IkVE+gApdF8IEVk9IkWk2IDOAAIEVE1IkVE+gAk+A/IkNE1IC4AAIENk2IkOkuIi4AAgAwJF8IEUk9IkVk2IDOAAIEVE1IkVE+gA20F8IEVk9IkVk2IDNAAIEVE1IkVE+gAyVA/IkOE1IC5AAIENk2IkOkuIi4AAgA9eF8IEUk9IkVk2IDOAAIEUE1IkUE+gEgkJAF8IEUk9IkVk2IDOAAIEVE1IkVE+gA/qA/IkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_62 = new cjs.Graphics().p("EAmJAF8IEVk9IkVk2IDNAAIEVE1IkVE+gAfeF8IEVk9IkVk2IDNAAIEVE1IkVE+gEAj9AA/IkNE1IC4AAIEOk2IkOkuIi5AAgAY0F8IEUk9IkUk2IDNAAIEVE1IkVE+gASJF8IEVk9IkVk2IDNAAIEVE1IkVE+gAWoA/IkNE1IC4AAIEOk2IkOkuIi5AAgALeF8IEUk9IkVk2IDOAAIEVE1IkVE+gAEzF8IEVk9IkVk2IDNAAIEVE1IkVE+gAJSA/IkNE1IC4AAIENk2IkOkuIi4AAgAh2F8IETk9IkUk2IDNAAIEVE1IkVE+gAohF8IEVk9IkWk2IDOAAIEVE1IkVE+gAkCA/IkNE1IC4AAIENk2IkOkuIi4AAgAvNF8IEUk9IkVk2IDOAAIEVE1IkVE+gA14F8IEVk9IkVk2IDNAAIEVE1IkVE+gAxZA/IkOE1IC5AAIENk2IkOkuIi4AAgA8iF8IEUk9IkVk2IDOAAIEUE1IkUE+gEgjNAF8IEUk9IkVk2IDOAAIEVE1IkVE+gA+uA/IkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_63 = new cjs.Graphics().p("EAnGAF8IEVk9IkVk2IDNAAIEVE1IkVE+gEAgbAF8IEVk9IkVk2IDNAAIEVE1IkVE+gEAk6AA/IkNE1IC4AAIEOk2IkOkuIi5AAgAZxF8IEUk9IkUk2IDNAAIEVE1IkVE+gATGF8IEVk9IkVk2IDNAAIEVE1IkVE+gAXlA/IkNE1IC4AAIEOk2IkOkuIi5AAgAMbF8IEUk9IkVk2IDOAAIEVE1IkVE+gAFwF8IEVk9IkVk2IDNAAIEVE1IkVE+gAKPA/IkNE1IC4AAIENk2IkOkuIi4AAgAg5F8IETk9IkUk2IDNAAIEVE1IkVE+gAnkF8IEVk9IkWk2IDOAAIEVE1IkVE+gAjFA/IkNE1IC4AAIENk2IkOkuIi4AAgAuQF8IEUk9IkVk2IDOAAIEVE1IkVE+gA07F8IEVk9IkVk2IDNAAIEVE1IkVE+gAwcA/IkOE1IC5AAIENk2IkOkuIi4AAgA7lF8IEUk9IkVk2IDOAAIEUE1IkUE+gEgiQAF8IEUk9IkVk2IDOAAIEVE1IkVE+gA9xA/IkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_64 = new cjs.Graphics().p("EAoDAF8IEVk9IkVk2IDNAAIEVE1IkVE+gEAhYAF8IEVk9IkVk2IDNAAIEVE1IkVE+gEAl3AA/IkNE1IC4AAIEOk2IkOkuIi5AAgAauF8IEUk9IkUk2IDNAAIEVE1IkVE+gAUDF8IEVk9IkVk2IDNAAIEVE1IkVE+gAYiA/IkNE1IC4AAIEOk2IkOkuIi5AAgANYF8IEUk9IkVk2IDOAAIEVE1IkVE+gAGtF8IEVk9IkVk2IDNAAIEVE1IkVE+gALMA/IkNE1IC4AAIENk2IkOkuIi4AAgAADF8IEUk9IkVk2IDOAAIEVE1IkVE+gAmnF8IEVk9IkWk2IDOAAIEUE1IkUE+gAiIA/IkNE1IC4AAIEMk2IkNkuIi4AAgAtTF8IEUk9IkVk2IDOAAIEVE1IkVE+gAz+F8IEVk9IkVk2IDNAAIEVE1IkVE+gAvfA/IkOE1IC5AAIENk2IkOkuIi4AAgA6oF8IEUk9IkVk2IDOAAIEUE1IkUE+gEghTAF8IEUk9IkVk2IDOAAIEVE1IkVE+gA80A/IkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_65 = new cjs.Graphics().p("EApCAF8IEUk9IkVk2IDOAAIEUE1IkUE+gEAiXAF8IEUk9IkVk2IDOAAIEUE1IkUE+gEAm2AA/IkOE1IC4AAIEOk2IkOkuIi4AAgAbtF8IEUk9IkVk2IDOAAIEUE1IkUE+gAVCF8IEUk9IkVk2IDOAAIEUE1IkUE+gAZhA/IkOE1IC4AAIEOk2IkOkuIi4AAgAOXF8IEUk9IkVk2IDNAAIEVE1IkUE+gAHsF8IEUk9IkVk2IDOAAIEUE1IkUE+gAMLA/IkOE1IC4AAIEOk2IkOkuIi4AAgABCF8IEUk9IkVk2IDNAAIEVE1IkUE+gAloF8IEUk9IkVk2IDNAAIEUE1IkTE+gAhJA/IkOE1IC4AAIENk2IkNkuIi5AAgAsUF8IEUk9IkVk2IDNAAIEVE1IkUE+gAy/F8IEUk9IkVk2IDNAAIEVE1IkUE+gAugA/IkOE1IC4AAIEOk2IkOkuIi5AAgA5pF8IEUk9IkVk2IDNAAIEVE1IkVE+gEggUAF8IEUk9IkVk2IDNAAIEVE1IkVE+gA72A/IkNE1IC4AAIEOk2IkOkuIi5AAg");
	var mask_3_graphics_66 = new cjs.Graphics().p("EAqAAF8IEVk9IkVk2IDNAAIEVE1IkVE+gEAjVAF8IEVk9IkVk2IDNAAIEVE1IkVE+gEAn0AA/IkNE1IC4AAIEOk2IkOkuIi5AAgAcrF8IEUk9IkUk2IDNAAIEVE1IkVE+gAWAF8IEVk9IkVk2IDNAAIEVE1IkVE+gAafA/IkNE1IC4AAIEOk2IkOkuIi5AAgAPVF8IEUk9IkVk2IDOAAIEVE1IkVE+gAIqF8IEVk9IkVk2IDNAAIEVE1IkVE+gANJA/IkNE1IC4AAIENk2IkOkuIi4AAgACAF8IEUk9IkVk2IDOAAIEVE1IkVE+gAkqF8IEVk9IkWk2IDOAAIEUE1IkUE+gAgLA/IkNE1IC4AAIEMk2IkNkuIi4AAgArWF8IEUk9IkVk2IDOAAIEVE1IkVE+gAyBF8IEVk9IkVk2IDNAAIEVE1IkVE+gAtiA/IkOE1IC5AAIENk2IkOkuIi4AAgA4rF8IEUk9IkVk2IDOAAIEUE1IkUE+gA/WF8IEUk9IkVk2IDOAAIEVE1IkVE+gA63A/IkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_67 = new cjs.Graphics().p("EArAAF8IEUk9IkVk2IDOAAIEVE1IkVE+gEAkVAF8IEVk9IkVk2IDNAAIEVE1IkVE+gEAo0AA/IkNE1IC3AAIEOk2IkOkuIi4AAgAdrF8IEUk9IkUk2IDNAAIEVE1IkVE+gAXAF8IEVk9IkWk2IDOAAIEVE1IkVE+gAbfA/IkOE1IC5AAIEOk2IkOkuIi5AAgAQVF8IEUk9IkVk2IDOAAIEUE1IkUE+gAJqF8IEVk9IkWk2IDOAAIEVE1IkVE+gAOJA/IkOE1IC5AAIENk2IkOkuIi4AAgADAF8IEUk9IkVk2IDOAAIEVE1IkVE+gAjqF8IETk9IkUk2IDNAAIEVE1IkUE+gAA0A/IkME1IC4AAIEMk2IkNkuIi5AAgAqWF8IEUk9IkVk2IDOAAIEVE1IkVE+gAxBF8IEUk9IkUk2IDMAAIEWE1IkVE+gAsiA/IkOE1IC5AAIENk2IkOkuIi5AAgA3rF8IEUk9IkVk2IDOAAIEUE1IkUE+gA+WF8IEUk9IkVk2IDOAAIEUE1IkUE+gA53A/IkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_68 = new cjs.Graphics().p("EAsAAF8IEVk+IkVk2IDNAAIEVE2IkVE+gEAlVAF8IEVk+IkVk2IDNAAIEVE2IkVE+gEAp0AA+IkNE2IC4AAIEOk2IkOkuIi5AAgAerF8IEUk+IkUk2IDNAAIEVE2IkVE+gAYAF8IEVk+IkVk2IDNAAIEVE2IkVE+gAcfA+IkNE2IC4AAIEOk2IkOkuIi5AAgARVF8IEUk+IkVk2IDOAAIEVE2IkVE+gAKqF8IEVk+IkVk2IDNAAIEVE2IkVE+gAPJA+IkNE2IC4AAIENk2IkOkuIi4AAgAEAF8IEUk+IkVk2IDOAAIEVE2IkVE+gAiqF8IEUk+IkVk2IDNAAIEVE2IkVE+gAB0A+IkME2IC3AAIENk2IkOkuIi3AAgApWF8IEUk+IkVk2IDOAAIEVE2IkVE+gAwBF8IEVk+IkVk2IDNAAIEVE2IkVE+gAriA+IkOE2IC5AAIENk2IkOkuIi4AAgA2rF8IEUk+IkVk2IDOAAIEUE2IkUE+gA9WF8IEUk+IkVk2IDOAAIEVE2IkVE+gA43A+IkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_69 = new cjs.Graphics().p("EAtBAF8IEVk+IkVk2IDNAAIEVE2IkVE+gEAmWAF8IEVk+IkVk2IDNAAIEVE2IkVE+gEAq1AA+IkNE2IC4AAIEOk2IkOkuIi5AAgAfsF8IEUk+IkUk2IDNAAIEVE2IkVE+gAZBF8IEVk+IkVk2IDNAAIEVE2IkVE+gAdgA+IkNE2IC4AAIEOk2IkOkuIi5AAgASWF8IEUk+IkVk2IDOAAIEVE2IkVE+gALrF8IEVk+IkVk2IDNAAIEVE2IkVE+gAQKA+IkNE2IC4AAIENk2IkOkuIi4AAgAFBF8IEUk+IkVk2IDOAAIEVE2IkVE+gAhpF8IEUk+IkVk2IDNAAIEVE2IkVE+gAC1A+IkME2IC3AAIENk2IkOkuIi3AAgAoVF8IEUk+IkVk2IDOAAIEVE2IkVE+gAvAF8IEVk+IkVk2IDNAAIEVE2IkVE+gAqhA+IkOE2IC5AAIENk2IkOkuIi4AAgA1qF8IEUk+IkVk2IDOAAIEUE2IkUE+gA8VF8IEUk+IkVk2IDOAAIEVE2IkVE+gA32A+IkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_70 = new cjs.Graphics().p("EAuDAF8IEUk+IkVk2IDOAAIEUE2IkUE+gEAnYAF8IEUk+IkVk2IDOAAIEUE2IkUE+gEAr3AA+IkOE2IC4AAIEOk2IkOkuIi4AAgEAguAF8IEUk+IkVk2IDOAAIEUE2IkUE+gAaDF8IEUk+IkVk2IDOAAIEUE2IkUE+gAeiA+IkOE2IC4AAIEOk2IkOkuIi4AAgATYF8IEUk+IkVk2IDNAAIEVE2IkUE+gAMtF8IEUk+IkVk2IDOAAIEUE2IkUE+gARMA+IkOE2IC4AAIEOk2IkOkuIi4AAgAGDF8IEUk+IkVk2IDNAAIEVE2IkUE+gAgnF8IETk+IkUk2IDMAAIEVE2IkUE+gAD3A+IkNE2IC3AAIEOk2IkOkuIi4AAgAnTF8IEUk+IkVk2IDNAAIEUE2IkTE+gAt+F8IEUk+IkVk2IDNAAIEVE2IkUE+gApfA+IkOE2IC4AAIEOk2IkOkuIi5AAgA0oF8IEUk+IkVk2IDNAAIEVE2IkVE+gA7TF8IEUk+IkVk2IDNAAIEVE2IkVE+gA21A+IkNE2IC4AAIEOk2IkOkuIi5AAg");
	var mask_3_graphics_71 = new cjs.Graphics().p("EAvFAF8IEVk+IkVk2IDNAAIEVE2IkVE+gEAoaAF8IEVk+IkVk2IDNAAIEVE2IkVE+gEAs5AA+IkNE2IC4AAIEOk2IkOkuIi5AAgEAhwAF8IEUk+IkUk2IDNAAIEVE2IkVE+gAbFF8IEVk+IkVk2IDNAAIEVE2IkVE+gAfkA+IkNE2IC4AAIEOk2IkOkuIi5AAgAUaF8IEUk+IkVk2IDOAAIEVE2IkVE+gANvF8IEVk+IkVk2IDNAAIEVE2IkVE+gASOA+IkNE2IC4AAIENk2IkOkuIi4AAgAHFF8IEUk+IkVk2IDOAAIEVE2IkVE+gAAaF8IEVk+IkWk2IDOAAIEVE2IkVE+gAE5A+IkNE2IC4AAIENk2IkOkuIi4AAgAmRF8IEUk+IkVk2IDOAAIEUE2IkUE+gAs8F8IEVk+IkVk2IDNAAIEVE2IkVE+gAodA+IkOE2IC5AAIENk2IkOkuIi4AAgAzmF8IEUk+IkVk2IDOAAIEUE2IkUE+gA6RF8IEUk+IkVk2IDOAAIEVE2IkVE+gA1yA+IkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_72 = new cjs.Graphics().p("EAwIAF8IEVk+IkVk2IDNAAIEVE2IkVE+gEApdAF8IEVk+IkVk2IDNAAIEVE2IkVE+gEAt8AA+IkNE2IC4AAIEOk2IkOkuIi5AAgEAizAF8IEUk+IkUk2IDNAAIEVE2IkVE+gAcIF8IEVk+IkVk2IDNAAIEVE2IkVE+gEAgnAA+IkNE2IC4AAIEOk2IkOkuIi5AAgAVdF8IEUk+IkVk2IDOAAIEVE2IkVE+gAOyF8IEVk+IkVk2IDNAAIEVE2IkVE+gATRA+IkNE2IC4AAIENk2IkOkuIi4AAgAIIF8IEUk+IkVk2IDOAAIEVE2IkVE+gABdF8IEVk+IkWk2IDOAAIEVE2IkVE+gAF8A+IkNE2IC4AAIENk2IkOkuIi4AAgAlOF8IEUk+IkVk2IDOAAIEUE2IkUE+gAr5F8IEVk+IkVk2IDNAAIEVE2IkVE+gAnaA+IkOE2IC5AAIENk2IkOkuIi4AAgAyjF8IEUk+IkVk2IDOAAIEUE2IkUE+gA5OF8IEUk+IkVk2IDOAAIEVE2IkVE+gA0vA+IkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_73 = new cjs.Graphics().p("EAxMAF8IEVk+IkVk2IDNAAIEVE2IkVE+gEAqhAF8IEVk+IkVk2IDNAAIEVE2IkVE+gEAvAAA+IkNE2IC4AAIEOk2IkOkuIi5AAgEAj3AF8IEUk+IkUk2IDNAAIEVE2IkVE+gAdMF8IEVk+IkVk2IDNAAIEVE2IkVE+gEAhrAA+IkNE2IC4AAIEOk2IkOkuIi5AAgAWhF8IEUk+IkVk2IDOAAIEVE2IkVE+gAP2F8IEVk+IkVk2IDNAAIEVE2IkVE+gAUVA+IkNE2IC4AAIENk2IkOkuIi4AAgAJMF8IEUk+IkVk2IDOAAIEVE2IkVE+gAChF8IEVk+IkWk2IDOAAIEVE2IkVE+gAHAA+IkNE2IC4AAIENk2IkOkuIi4AAgAkKF8IETk+IkUk2IDOAAIEUE2IkUE+gAq1F8IEVk+IkVk2IDNAAIEVE2IkVE+gAmWA+IkOE2IC5AAIENk2IkOkuIi4AAgAxfF8IEUk+IkVk2IDOAAIEUE2IkUE+gA4KF8IEUk+IkVk2IDOAAIEVE2IkVE+gAzrA+IkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_74 = new cjs.Graphics().p("EAyRAF7IEUk9IkVk2IDOAAIEUE1IkUE+gEArmAF7IEUk9IkVk2IDOAAIEUE1IkUE+gEAwFAA+IkOE1IC4AAIEOk2IkOkuIi4AAgEAk8AF7IEUk9IkVk2IDOAAIEUE1IkUE+gAeRF7IEUk9IkVk2IDOAAIEUE1IkUE+gEAiwAA+IkOE1IC4AAIEOk2IkOkuIi4AAgAXmF7IEUk9IkVk2IDNAAIEVE1IkUE+gAQ7F7IEUk9IkVk2IDOAAIEUE1IkUE+gAVaA+IkOE1IC4AAIEOk2IkOkuIi4AAgAKRF7IEUk9IkVk2IDNAAIEVE1IkUE+gADmF7IEUk9IkVk2IDNAAIEVE1IkUE+gAIFA+IkOE1IC4AAIEOk2IkOkuIi5AAgAjFF7IETk9IkUk2IDMAAIEVE1IkUE+gApwF7IEUk9IkVk2IDNAAIEVE1IkUE+gAlRA+IkOE1IC4AAIEOk2IkOkuIi5AAgAwaF7IEUk9IkVk2IDNAAIEVE1IkVE+gA3FF7IEUk9IkVk2IDNAAIEVE1IkVE+gAynA+IkNE1IC4AAIEOk2IkOkuIi5AAg");
	var mask_3_graphics_75 = new cjs.Graphics().p("EAzWAF7IEUk9IkVk2IDOAAIEUE1IkUE+gEAsrAF7IEUk9IkVk2IDOAAIEUE1IkUE+gEAxKAA+IkOE1IC4AAIEOk2IkOkuIi4AAgEAmBAF7IEUk9IkVk2IDOAAIEUE1IkUE+gAfWF7IEUk9IkVk2IDOAAIEUE1IkUE+gEAj1AA+IkOE1IC4AAIEOk2IkOkuIi4AAgAYrF7IEUk9IkVk2IDNAAIEVE1IkUE+gASAF7IEUk9IkVk2IDOAAIEUE1IkUE+gAWfA+IkOE1IC4AAIEOk2IkOkuIi4AAgALWF7IEUk9IkVk2IDNAAIEVE1IkUE+gAErF7IEUk9IkVk2IDNAAIEVE1IkUE+gAJKA+IkOE1IC4AAIEOk2IkOkuIi5AAgAiAF7IETk9IkUk2IDMAAIEVE1IkUE+gAorF7IEUk9IkVk2IDNAAIEVE1IkUE+gAkMA+IkOE1IC4AAIEOk2IkOkuIi5AAgAvVF7IEUk9IkVk2IDNAAIEVE1IkVE+gA2AF7IEUk9IkVk2IDNAAIEVE1IkVE+gAxiA+IkNE1IC4AAIEOk2IkOkuIi5AAg");
	var mask_3_graphics_76 = new cjs.Graphics().p("EA0cAF7IEUk9IkVk2IDOAAIEUE1IkUE+gEAtxAF7IEUk9IkVk2IDOAAIEUE1IkUE+gEAyQAA+IkOE1IC4AAIEOk2IkOkuIi4AAgEAnHAF7IEUk9IkVk2IDOAAIEUE1IkUE+gEAgcAF7IEUk9IkVk2IDOAAIEUE1IkUE+gEAk7AA+IkOE1IC4AAIEOk2IkOkuIi4AAgAZxF7IEUk9IkVk2IDNAAIEVE1IkUE+gATGF7IEUk9IkVk2IDOAAIEUE1IkUE+gAXlA+IkOE1IC4AAIEOk2IkOkuIi4AAgAMcF7IEUk9IkVk2IDNAAIEVE1IkUE+gAFxF7IEUk9IkVk2IDNAAIEVE1IkUE+gAKQA+IkOE1IC4AAIEOk2IkOkuIi5AAgAg6F7IETk9IkUk2IDMAAIEVE1IkUE+gAnlF7IEUk9IkVk2IDNAAIEVE1IkUE+gAjGA+IkOE1IC4AAIEOk2IkOkuIi5AAgAuPF7IEUk9IkVk2IDNAAIEVE1IkVE+gA06F7IEUk9IkVk2IDNAAIEVE1IkVE+gAwcA+IkNE1IC4AAIEOk2IkOkuIi5AAg");
	var mask_3_graphics_77 = new cjs.Graphics().p("EA1iAF7IEVk9IkVk2IDNAAIEVE1IkVE+gEAu3AF7IEVk9IkVk2IDNAAIEVE1IkVE+gEAzWAA+IkNE1IC4AAIEOk2IkOkuIi5AAgEAoNAF7IEUk9IkUk2IDNAAIEVE1IkVE+gEAhiAF7IEVk9IkVk2IDNAAIEVE1IkVE+gEAmBAA+IkNE1IC4AAIEOk2IkOkuIi5AAgAa3F7IEUk9IkVk2IDOAAIEVE1IkVE+gAUMF7IEVk9IkVk2IDNAAIEVE1IkVE+gAYrA+IkNE1IC4AAIENk2IkOkuIi4AAgANiF7IEUk9IkVk2IDOAAIEVE1IkVE+gAG3F7IEVk9IkWk2IDOAAIEVE1IkVE+gALWA+IkNE1IC4AAIENk2IkOkuIi4AAgAALF7IEUk9IkVk2IDOAAIEVE1IkVE+gAmfF7IEVk9IkVk2IDNAAIEUE1IkUE+gAiAA+IkOE1IC5AAIEMk2IkNkuIi4AAgAtJF7IEUk9IkVk2IDOAAIEUE1IkUE+gAz0F7IEUk9IkVk2IDOAAIEVE1IkVE+gAvVA+IkOE1IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_78 = new cjs.Graphics().p("EA2qAF7IEUk9IkVk2IDOAAIEUE1IkUE+gEAv/AF7IEUk9IkVk2IDOAAIEUE1IkUE+gEA0eAA+IkOE1IC4AAIEOk2IkOkuIi4AAgEApVAF7IEUk9IkVk2IDOAAIEUE1IkUE+gEAiqAF7IEUk9IkVk2IDOAAIEUE1IkUE+gEAnJAA+IkOE1IC4AAIEOk2IkOkuIi4AAgAb/F7IEUk9IkVk2IDNAAIEVE1IkUE+gAVUF7IEUk9IkVk2IDOAAIEUE1IkUE+gAZzA+IkOE1IC4AAIEOk2IkOkuIi4AAgAOqF7IEUk9IkVk2IDNAAIEVE1IkUE+gAH/F7IEUk9IkVk2IDNAAIEVE1IkUE+gAMeA+IkOE1IC4AAIEOk2IkOkuIi5AAgABTF7IEUk9IkVk2IDNAAIEVE1IkUE+gAlXF7IEUk9IkVk2IDNAAIEUE1IkTE+gAg4A+IkOE1IC4AAIENk2IkNkuIi5AAgAsBF7IEUk9IkVk2IDNAAIEVE1IkVE+gAysF7IEUk9IkVk2IDNAAIEVE1IkVE+gAuOA+IkNE1IC4AAIEOk2IkOkuIi5AAg");
	var mask_3_graphics_79 = new cjs.Graphics().p("EA3yAF7IEUk9IkVk2IDOAAIEUE1IkUE+gEAxHAF7IEUk9IkVk2IDOAAIEUE1IkUE+gEA1mAA+IkOE1IC4AAIEOk2IkOkuIi4AAgEAqdAF7IEUk9IkVk2IDOAAIEUE1IkUE+gEAjyAF7IEUk9IkVk2IDOAAIEUE1IkUE+gEAoRAA+IkOE1IC4AAIEOk2IkOkuIi4AAgAdHF7IEUk9IkVk2IDNAAIEVE1IkUE+gAWcF7IEUk9IkVk2IDOAAIEUE1IkUE+gAa7A+IkOE1IC4AAIEOk2IkOkuIi4AAgAPyF7IEUk9IkVk2IDNAAIEVE1IkUE+gAJHF7IEUk9IkVk2IDNAAIEVE1IkUE+gANmA+IkOE1IC4AAIEOk2IkOkuIi5AAgACbF7IEUk9IkVk2IDNAAIEVE1IkUE+gAkPF7IETk9IkUk2IDNAAIEUE1IkTE+gAAPA+IkNE1IC4AAIENk2IkNkuIi5AAgAq5F7IEUk9IkVk2IDNAAIEVE1IkVE+gAxkF7IEUk9IkVk2IDNAAIEVE1IkVE+gAtGA+IkNE1IC4AAIEOk2IkOkuIi5AAg");
	var mask_3_graphics_80 = new cjs.Graphics().p("EA46AF7IEVk9IkVk2IDNAAIEVE1IkVE+gEAyQAF7IEUk9IkVk2IDNAAIEVE1IkVE+gEA2vAA+IkOE1IC4AAIEOk2IkOkuIi4AAgEArlAF7IEUk9IkUk2IDNAAIEVE1IkVE+gEAk6AF7IEVk9IkVk2IDOAAIEUE1IkUE+gEApaAA+IkOE1IC4AAIEOk2IkOkuIi4AAgAeQF7IETk9IkVk2IDOAAIEVE1IkVE+gAXkF7IEVk9IkVk2IDNAAIEVE1IkVE+gAcDA+IkNE1IC4AAIENk2IkOkuIi4AAgAQ7F7IETk9IkUk2IDNAAIEVE1IkUE+gAKPF7IEVk9IkWk2IDOAAIEVE1IkVE+gAOuA+IkNE1IC4AAIEOk2IkOkuIi5AAgADkF7IETk9IkUk2IDNAAIEVE1IkUE+gAjHF7IEUk9IkUk2IDMAAIEVE1IkVE+gABXA+IkNE1IC4AAIEOk2IkOkuIi4AAgApxF7IEVk9IkVk2IDNAAIEUE1IkUE+gAwbF7IETk9IkVk2IDOAAIEVE1IkVE+gAr9A+IkOE1IC4AAIEPk2IkPkuIi4AAg");
	var mask_3_graphics_81 = new cjs.Graphics().p("EA6EAF7IEUk+IkVk2IDOAAIEUE2IkUE+gEAzZAF7IEUk+IkVk2IDOAAIEUE2IkUE+gEA34AA9IkOE2IC4AAIEOk2IkOkuIi4AAgEAsvAF7IEUk+IkVk2IDOAAIEUE2IkUE+gEAmEAF7IEUk+IkVk2IDOAAIEUE2IkUE+gEAqjAA9IkOE2IC4AAIEOk2IkOkuIi4AAgAfZF7IEUk+IkVk2IDNAAIEVE2IkUE+gAYuF7IEUk+IkVk2IDOAAIEUE2IkUE+gAdNA9IkOE2IC4AAIEOk2IkOkuIi4AAgASEF7IEUk+IkVk2IDNAAIEVE2IkUE+gALZF7IEUk+IkVk2IDNAAIEVE2IkUE+gAP4A9IkOE2IC4AAIEOk2IkOkuIi5AAgAEtF7IEUk+IkVk2IDNAAIEVE2IkUE+gAh9F7IETk+IkUk2IDMAAIEVE2IkUE+gAChA9IkNE2IC3AAIEOk2IkOkuIi4AAgAonF7IEUk+IkVk2IDNAAIEVE2IkVE+gAvSF7IEUk+IkVk2IDNAAIEVE2IkVE+gAq0A9IkNE2IC4AAIEOk2IkOkuIi5AAg");
	var mask_3_graphics_82 = new cjs.Graphics().p("EA7OAF7IEVk+IkVk2IDNAAIEVE2IkVE+gEA0jAF7IEVk+IkVk2IDNAAIEVE2IkVE+gEA5CAA9IkNE2IC4AAIEOk2IkOkuIi5AAgEAt5AF7IEUk+IkUk2IDNAAIEVE2IkVE+gEAnOAF7IEVk+IkVk2IDNAAIEVE2IkVE+gEArtAA9IkNE2IC4AAIEOk2IkOkuIi5AAgEAgjAF7IEUk+IkVk2IDOAAIEVE2IkVE+gAZ4F7IEVk+IkVk2IDNAAIEVE2IkVE+gAeXA9IkNE2IC4AAIENk2IkOkuIi4AAgATOF7IEUk+IkVk2IDOAAIEVE2IkVE+gAMjF7IEVk+IkWk2IDOAAIEVE2IkVE+gARCA9IkNE2IC4AAIENk2IkOkuIi4AAgAF3F7IEUk+IkVk2IDOAAIEVE2IkVE+gAgzF7IEUk+IkUk2IDMAAIEVE2IkVE+gADrA9IkNE2IC4AAIENk2IkOkuIi3AAgAndF7IEUk+IkVk2IDOAAIETE2IkTE+gAuIF7IEUk+IkVk2IDOAAIEVE2IkVE+gAppA9IkOE2IC4AAIEOk2IkOkuIi4AAg");
	var mask_3_graphics_83 = new cjs.Graphics().p("EA8ZAF7IEUk+IkVk2IDOAAIEUE2IkUE+gEA1uAF7IEUk+IkVk2IDOAAIEUE2IkUE+gEA6NAA9IkOE2IC4AAIEOk2IkOkuIi4AAgEAvEAF7IEUk+IkVk2IDOAAIEUE2IkUE+gEAoZAF7IEUk+IkVk2IDOAAIEUE2IkUE+gEAs4AA9IkOE2IC4AAIEOk2IkOkuIi4AAgEAhuAF7IEUk+IkVk2IDNAAIEVE2IkUE+gAbDF7IEUk+IkVk2IDOAAIEUE2IkUE+gAfiA9IkOE2IC4AAIEOk2IkOkuIi4AAgAUZF7IEUk+IkVk2IDNAAIEVE2IkUE+gANuF7IEUk+IkVk2IDNAAIEVE2IkUE+gASNA9IkOE2IC4AAIEOk2IkOkuIi5AAgAHCF7IEUk+IkVk2IDNAAIEVE2IkUE+gAAXF7IEUk+IkVk2IDNAAIEVE2IkUE+gAE2A9IkOE2IC4AAIEOk2IkOkuIi5AAgAmSF7IEUk+IkVk2IDNAAIEUE2IkUE+gAs9F7IEUk+IkVk2IDNAAIEVE2IkVE+gAofA9IkNE2IC4AAIEOk2IkOkuIi5AAg");
	var mask_3_graphics_84 = new cjs.Graphics().p("EA9lAF7IEUk+IkVk2IDOAAIEUE2IkUE+gEA26AF7IEUk+IkVk2IDOAAIEUE2IkUE+gEA7ZAA9IkOE2IC4AAIEOk2IkOkuIi4AAgEAwQAF7IEUk+IkVk2IDOAAIEUE2IkUE+gEAplAF7IEUk+IkVk2IDOAAIEUE2IkUE+gEAuEAA9IkOE2IC4AAIEOk2IkOkuIi4AAgEAi6AF7IEUk+IkVk2IDNAAIEVE2IkUE+gAcPF7IEUk+IkVk2IDOAAIEUE2IkUE+gEAguAA9IkOE2IC4AAIEOk2IkOkuIi4AAgAVlF7IEUk+IkVk2IDNAAIEVE2IkUE+gAO6F7IEUk+IkVk2IDNAAIEVE2IkUE+gATZA9IkOE2IC4AAIEOk2IkOkuIi5AAgAIOF7IEUk+IkVk2IDNAAIEVE2IkUE+gABjF7IEUk+IkVk2IDNAAIEVE2IkUE+gAGCA9IkOE2IC4AAIEOk2IkOkuIi5AAgAlGF7IEUk+IkVk2IDNAAIEUE2IkUE+gArxF7IEUk+IkVk2IDNAAIEVE2IkVE+gAnTA9IkNE2IC4AAIEOk2IkOkuIi5AAg");
	var mask_3_graphics_85 = new cjs.Graphics().p("EA+xAF7IEUk+IkVk2IDOAAIEUE2IkUE+gEA4GAF7IEUk+IkVk2IDOAAIEUE2IkUE+gEA8lAA9IkOE2IC4AAIEOk2IkOkuIi4AAgEAxcAF7IEUk+IkVk2IDOAAIEUE2IkUE+gEAqxAF7IEUk+IkVk2IDOAAIEUE2IkUE+gEAvQAA9IkOE2IC4AAIEOk2IkOkuIi4AAgEAkGAF7IEUk+IkVk2IDNAAIEVE2IkUE+gAdbF7IEUk+IkVk2IDOAAIEUE2IkUE+gEAh6AA9IkOE2IC4AAIEOk2IkOkuIi4AAgAWxF7IEUk+IkVk2IDNAAIEVE2IkUE+gAQGF7IEUk+IkVk2IDNAAIEVE2IkUE+gAUlA9IkOE2IC4AAIEOk2IkOkuIi5AAgAJaF7IEUk+IkVk2IDNAAIEVE2IkUE+gACvF7IEUk+IkVk2IDNAAIEVE2IkUE+gAHOA9IkOE2IC4AAIEOk2IkOkuIi5AAgAj6F7IETk+IkUk2IDNAAIEUE2IkUE+gAqlF7IEUk+IkVk2IDNAAIEVE2IkVE+gAmHA9IkNE2IC4AAIEOk2IkOkuIi5AAg");
	var mask_3_graphics_86 = new cjs.Graphics().p("EA/+AF6IEUk9IkVk2IDOAAIEUE2IkUE9gEA5TAF6IEUk9IkVk2IDOAAIEUE2IkUE9gEA9yAA9IkOE1IC4AAIEOk1IkOkvIi4AAgEAypAF6IEUk9IkVk2IDOAAIEUE2IkUE9gEAr+AF6IEUk9IkVk2IDOAAIEUE2IkUE9gEAwdAA9IkOE1IC4AAIEOk1IkOkvIi4AAgEAlTAF6IEUk9IkVk2IDNAAIEVE2IkUE9gAeoF6IEUk9IkVk2IDOAAIEUE2IkUE9gEAjHAA9IkOE1IC4AAIEOk1IkOkvIi4AAgAX+F6IEUk9IkVk2IDNAAIEVE2IkUE9gARTF6IEUk9IkVk2IDNAAIEVE2IkUE9gAVyA9IkOE1IC4AAIEOk1IkOkvIi5AAgAKnF6IEUk9IkVk2IDNAAIEVE2IkUE9gAD8F6IEUk9IkVk2IDNAAIEVE2IkUE9gAIbA9IkOE1IC4AAIEOk1IkOkvIi5AAgAitF6IETk9IkUk2IDMAAIEVE2IkVE9gApYF6IEUk9IkVk2IDNAAIEVE2IkVE9gAk6A9IkNE1IC4AAIEOk1IkOkvIi5AAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_3_graphics_13,x:-96.475,y:38.275}).wait(1).to({graphics:mask_3_graphics_14,x:-91.2492,y:38.272}).wait(1).to({graphics:mask_3_graphics_15,x:-85.8823,y:38.269}).wait(1).to({graphics:mask_3_graphics_16,x:-80.374,y:38.2659}).wait(1).to({graphics:mask_3_graphics_17,x:-74.7246,y:38.2627}).wait(1).to({graphics:mask_3_graphics_18,x:-68.9339,y:38.2594}).wait(1).to({graphics:mask_3_graphics_19,x:-63.0019,y:38.2561}).wait(1).to({graphics:mask_3_graphics_20,x:-56.9287,y:38.2527}).wait(1).to({graphics:mask_3_graphics_21,x:-50.7143,y:38.2492}).wait(1).to({graphics:mask_3_graphics_22,x:-44.3587,y:38.2456}).wait(1).to({graphics:mask_3_graphics_23,x:-37.8618,y:38.2419}).wait(1).to({graphics:mask_3_graphics_24,x:-31.2237,y:38.2382}).wait(1).to({graphics:mask_3_graphics_25,x:-24.4443,y:38.2343}).wait(1).to({graphics:mask_3_graphics_26,x:-17.5237,y:38.2304}).wait(1).to({graphics:mask_3_graphics_27,x:-10.4619,y:38.2264}).wait(1).to({graphics:mask_3_graphics_28,x:-3.2588,y:38.2224}).wait(1).to({graphics:mask_3_graphics_29,x:4.0855,y:38.2182}).wait(1).to({graphics:mask_3_graphics_30,x:11.571,y:38.214}).wait(1).to({graphics:mask_3_graphics_31,x:19.1978,y:38.2097}).wait(1).to({graphics:mask_3_graphics_32,x:26.9658,y:38.2053}).wait(1).to({graphics:mask_3_graphics_33,x:34.8751,y:38.2008}).wait(1).to({graphics:mask_3_graphics_34,x:42.9256,y:38.1963}).wait(1).to({graphics:mask_3_graphics_35,x:51.1173,y:38.1917}).wait(1).to({graphics:mask_3_graphics_36,x:59.4502,y:38.187}).wait(1).to({graphics:mask_3_graphics_37,x:67.9244,y:38.1822}).wait(1).to({graphics:mask_3_graphics_38,x:76.5399,y:38.1773}).wait(1).to({graphics:mask_3_graphics_39,x:85.2965,y:38.1724}).wait(1).to({graphics:mask_3_graphics_40,x:94.1945,y:38.1673}).wait(1).to({graphics:mask_3_graphics_41,x:103.2336,y:38.1622}).wait(1).to({graphics:mask_3_graphics_42,x:112.414,y:38.157}).wait(1).to({graphics:mask_3_graphics_43,x:121.7356,y:38.1518}).wait(1).to({graphics:mask_3_graphics_44,x:131.1984,y:38.1464}).wait(1).to({graphics:mask_3_graphics_45,x:140.8025,y:38.141}).wait(1).to({graphics:mask_3_graphics_46,x:150.5479,y:38.1355}).wait(1).to({graphics:mask_3_graphics_47,x:160.4344,y:38.1299}).wait(1).to({graphics:mask_3_graphics_48,x:170.4622,y:38.1243}).wait(1).to({graphics:mask_3_graphics_49,x:180.6313,y:38.1185}).wait(1).to({graphics:mask_3_graphics_50,x:190.9415,y:38.1127}).wait(1).to({graphics:mask_3_graphics_51,x:201.3931,y:38.1068}).wait(1).to({graphics:mask_3_graphics_52,x:211.9858,y:38.1008}).wait(1).to({graphics:mask_3_graphics_53,x:222.7198,y:38.0948}).wait(1).to({graphics:mask_3_graphics_54,x:233.595,y:38.0886}).wait(1).to({graphics:mask_3_graphics_55,x:244.6115,y:38.0824}).wait(1).to({graphics:mask_3_graphics_56,x:255.7692,y:38.0761}).wait(1).to({graphics:mask_3_graphics_57,x:262.9715,y:38.0697}).wait(1).to({graphics:mask_3_graphics_58,x:268.6916,y:38.0633}).wait(1).to({graphics:mask_3_graphics_59,x:274.4823,y:38.0567}).wait(1).to({graphics:mask_3_graphics_60,x:280.3436,y:38.0501}).wait(1).to({graphics:mask_3_graphics_61,x:286.2756,y:38.0434}).wait(1).to({graphics:mask_3_graphics_62,x:292.2781,y:38.0366}).wait(1).to({graphics:mask_3_graphics_63,x:298.3513,y:38.0298}).wait(1).to({graphics:mask_3_graphics_64,x:304.4951,y:38.0228}).wait(1).to({graphics:mask_3_graphics_65,x:310.7095,y:38.0158}).wait(1).to({graphics:mask_3_graphics_66,x:316.9946,y:38.0087}).wait(1).to({graphics:mask_3_graphics_67,x:323.3502,y:38.0015}).wait(1).to({graphics:mask_3_graphics_68,x:329.7765,y:37.9943}).wait(1).to({graphics:mask_3_graphics_69,x:336.2734,y:37.9869}).wait(1).to({graphics:mask_3_graphics_70,x:342.8409,y:37.9795}).wait(1).to({graphics:mask_3_graphics_71,x:349.479,y:37.972}).wait(1).to({graphics:mask_3_graphics_72,x:356.1877,y:37.9644}).wait(1).to({graphics:mask_3_graphics_73,x:362.9671,y:37.9568}).wait(1).to({graphics:mask_3_graphics_74,x:369.8171,y:37.9491}).wait(1).to({graphics:mask_3_graphics_75,x:376.7376,y:37.9412}).wait(1).to({graphics:mask_3_graphics_76,x:383.7289,y:37.9333}).wait(1).to({graphics:mask_3_graphics_77,x:390.7907,y:37.9254}).wait(1).to({graphics:mask_3_graphics_78,x:397.9231,y:37.9173}).wait(1).to({graphics:mask_3_graphics_79,x:405.1262,y:37.9092}).wait(1).to({graphics:mask_3_graphics_80,x:412.3999,y:37.901}).wait(1).to({graphics:mask_3_graphics_81,x:419.7442,y:37.8927}).wait(1).to({graphics:mask_3_graphics_82,x:427.1591,y:37.8843}).wait(1).to({graphics:mask_3_graphics_83,x:434.6447,y:37.8758}).wait(1).to({graphics:mask_3_graphics_84,x:442.2008,y:37.8673}).wait(1).to({graphics:mask_3_graphics_85,x:449.8276,y:37.8587}).wait(1).to({graphics:mask_3_graphics_86,x:457.525,y:37.85}).wait(1).to({graphics:null,x:0,y:0}).wait(808));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(48).to({_off:false},0).to({alpha:1},19,cjs.Ease.quadIn).to({regX:209.8,regY:190.8,scaleX:1.2019,scaleY:1.2019,x:172.9,y:211.15},254).to({_off:true},1).wait(573));

	// arrows_copy
	this.instance_26 = new lib.Symbol2("synched",0);
	this.instance_26.setTransform(-773.05,134.5,1,1,0,0,0,691.9,84);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({_off:false},0).to({x:-411.75},12,cjs.Ease.sineOut).to({x:340.9,y:133.65},73,cjs.Ease.get(-0.5)).to({_off:true},1).wait(808));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#52565A").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(361.5051,45.0001,2.41,0.36);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(895));

	// stageBackground
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Eg6bgIlMB03AAAIAARLMh03AAAg");
	this.shape_2.setTransform(364,45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#52565A").s().p("Eg6bAImIAAxLMB03AAAIAARLg");
	this.shape_3.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(895));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-352.6,-49.6,1297.3000000000002,551.5);
// library properties:
lib.properties = {
	id: 'B915F0BB2CAF214394D0C3C0B5CA43BE',
	width: 728,
	height: 90,
	fps: 30,
	color: "#52565A",
	opacity: 1.00,
	manifest: [
		{src:"images/card.png?1721822591196", id:"card"},
		{src:"images/img01.jpg?1721822591196", id:"img01"},
		{src:"images/img02.jpg?1721822591196", id:"img02"},
		{src:"images/img03.jpg?1721822591196", id:"img03"}
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