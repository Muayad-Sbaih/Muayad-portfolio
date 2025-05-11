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



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.img01 = function() {
	this.initialize(img.img01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,658,361);


(lib.phone = function() {
	this.initialize(img.phone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,582);// helper functions:

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


(lib.Symbol40 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(128,54,138,0.498)").s().p("EADKAk3IzdrPQgjgVgLgnQgKgnAUgjILQzeQAUgkAngKQAngLAjAVITdLOQAjAVALAnQAKAngUAjIrPTeQgUAkgoAKQgNAEgNAAQgZAAgXgNgEAjVARAIuqoeQgagPgIgdQgIgeAPgbIIduoQAPgaAegIQAegIAaAPIABAAIOpIcQAaAPAIAeQAIAdgPAcIodOpQgPAageAIQgKADgKAAQgTAAgRgKgAuFNyIuQoQQgagPgHgdQgIgdAPgZIIPuTQAPgaAdgHQAcgIAaAPIAAgBIOQIRQAZAPAIAdQAIAdgPAaIoPOSQgPAagdAIQgJACgKAAQgSAAgRgKgALtKbIsYnKQgXgMgGgZQgHgZANgXIHJsYQAMgWAZgHQAZgHAXANIMZHKQAWANAHAZQAHAZgNAWInKMYQgNAXgZAGQgJADgIAAQgQAAgOgJgEggnABNIsZnKQgXgMgGgZQgHgZANgXIHJsZQAOgWAZgGQAZgHAWANIMZHKQAWANAHAZQAHAZgNAWInKMYQgNAXgZAGQgJADgIAAQgQAAgOgJgAj3jfIzerQQgjgUgLgnQgKgnAUgkILOzdQAVgjAngKQAngLAjAUIABAAITcLPQAkAUAKAoQALAngUAjIrOTeQgVAjgnALQgNAEgNAAQgZAAgXgOgAV2kaIvBorQgbgPgIgfQgIgeAPgbIIrvBQAQgbAegIQAegIAbAPIPBIrQAbAQAIAeQAIAegPAbIorPBQgQAbgeAIQgLADgKAAQgTAAgRgKg");
	this.shape.setTransform(291.228,237.1638);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,0,582.5,474.4), null);


(lib.Symbol38 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F2FDFF").s().p("AgPAnQgGgEgEgIQgDgGAAgJQAAgKADgGQAEgIAGgDQAGgEAIAAQAHAAAFAEQAFADACAEIAAghIALAAIAABTIgLAAIAAgKQgCAEgFADQgFADgHAAQgIAAgGgDgAgIgGQgDACgDAEQgCAFgBAHQABAEACAHQACAEAEADQAEACAFABQAFgBADgCQAFgCACgFQACgGAAgFIAAgBQAAgGgCgFQgCgEgFgCQgDgDgGAAQgEAAgEADg");
	this.shape.setTransform(59.45,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2FDFF").s().p("AgOAbQgHgEgDgHQgEgGAAgKQAAgJAEgGQADgHAIgEQAGgEAIAAQAJAAAGAEQAHAFACAGQAEAIAAAJIgtAAQAAAHACADQACAEAFADQAFACAEAAQAGAAAEgDQAEgCACgFIAKAFQgDAFgDADIgJAGQgFABgHAAQgJAAgGgEgAgGgTQgEACgDAEQgCADgBAEIAhAAQgBgEgBgDQgCgDgEgDIgIgCIgHACg");
	this.shape_1.setTransform(52.875,5.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2FDFF").s().p("AgEAjQgFgEAAgIIAAghIgKAAIAAgKIAKAAIAAgTIAKAAIAAATIARAAIAAAKIgRAAIAAAeQAAAGACABQADADAEAAIACgBIAEgCIAEAJIgFAEIgGAAQgJAAgEgFg");
	this.shape_2.setTransform(47.2,4.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2FDFF").s().p("AgPAeIAAg7IALAAIAAALQAEgFAEgDQAGgDAGAAIAAALIgKABQgFACgCAEQgDADAAAFIAAAhg");
	this.shape_3.setTransform(43.2,5.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2FDFF").s().p("AgTAbQgFgFgBgJQABgJAFgEQAGgFAMAAIAPAAIgBgGQgCgFgDgCQgDgCgFAAQgFAAgCACQgEABgCAFIgKgEIAFgHQADgDAFgDQAFgBAFAAQAJAAAFADQAGADADAHQACAGAAAJIAAAgIgKAAIgBgHIgBABQgFAHgKAAQgKAAgHgEgAgKAGQgDACAAAFQAAAEADACQAEADAFAAQAEAAAEgCQADgDACgDQACgEAAgFIAAgCIgNAAQgHAAgEADg");
	this.shape_4.setTransform(37.6,5.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2FDFF").s().p("AgEAjQgFgEAAgIIAAghIgKAAIAAgKIAKAAIAAgTIAKAAIAAATIARAAIAAAKIgRAAIAAAeQAAAGACABQADADAEAAIACgBIAEgCIAEAJIgGAEIgFAAQgJAAgEgFg");
	this.shape_5.setTransform(32.275,4.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2FDFF").s().p("AgKAqIgKgEIgGgGIgEgHIALgEQACAEAGAEQADADAIABQAIAAAGgDQAFgEAAgGQAAgFgEgEQgEgDgIgCIgJgCIgLgEQgFgDgCgEQgDgFAAgGQAAgMAHgGQAIgGANAAQAKAAAEACQAFACAFAFQAFAFABAEIgMAEQgCgFgEgEQgFgDgIAAQgGAAgFAEQgEAEAAAFQAAAGAEADIAJAEIAIACQANADAFAGQAHAGAAAIQAAAIgEAFQgCAFgIADQgGADgKAAQgGAAgFgBg");
	this.shape_6.setTransform(26.35,4.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2FDFF").s().p("AgEAjQgFgFAAgHIAAghIgKAAIAAgKIAKAAIAAgTIAKAAIAAATIARAAIAAAKIgRAAIAAAeQAAAFADACQACADAEAAIADgBIADgCIAEAJIgFAEIgGAAQgJAAgEgFg");
	this.shape_7.setTransform(17.375,4.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2FDFF").s().p("AgOAbQgHgEgDgHQgEgGAAgKQAAgJAEgGQADgHAHgEQAHgEAIAAQAJAAAGAEQAGAEADAHQAEAIAAAJIgtAAQAAAHACADQACAEAFADQAFACAEAAQAGAAAEgDQAEgCACgFIAKAFQgDAFgDADIgJAGQgFABgHAAQgJAAgGgEgAgHgTQgDACgDAEQgCADgBAEIAhAAQgBgEgBgDQgCgDgEgDIgIgCIgIACg");
	this.shape_8.setTransform(11.925,5.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2FDFF").s().p("AgTAmQgJgFgHgKQgFgKAAgNQAAgLAFgKQAHgLAJgFQAKgFAMAAQAHAAAGACQAHACAFAEIAIAJIgJAGIgHgGQgDgDgFgCQgEgCgFAAQgJAAgGAFQgHADgFAIQgEAIAAAIQAAAKAEAHQAFAIAHADQAHAFAIAAQAHAAAHgDQAGgEADgFQADgGAAgHIgUAAIAAgIIAgAAIAAAHQAAAKgFAJQgFAIgIAFQgIAEgMAAQgMAAgKgFg");
	this.shape_9.setTransform(4.1,4.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,62.4,8.7), null);


(lib.Symbol37 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F1592D").s().p("AgIA1QgEgEAAgFIAAg7IgSARIgDADIgJAAQgDAAgBgDQgDgCAAgGQAAgEADgFIAmgmIAEgDIAJAAQADAAABADIAmAnQADAEAAAFQAAADgDAGIgEACIgJAAQgDAAgBgCIgRgRIAAA5QAAAGgEADQgEAEgFAAQgGAAgCgEg");
	this.shape.setTransform(5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,10,11.4), null);


(lib.Symbol34 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.phone();
	this.instance.setTransform(0,0,0.4286,0.4286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,144,249.5), null);


(lib.Symbol33 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.img01();
	this.instance.setTransform(0,0,0.6322,0.6322);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,416,228.3), null);


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
	this.shape.graphics.f("#383D47").s().p("AgiAvIAEgKQAJAGAHACQAIACAIAAQALAAAHgHQAGgFAAgNIAAgOQgEAHgHAEQgIAFgJAAQgKAAgJgFQgIgFgFgKQgFgIAAgMQAAgMAFgJQAFgKAIgFQAJgFAKgBQAJAAAHAFQAIAEAEAIIAAgOIANAAIAABMQAAASgJAKQgKAJgSAAQgVAAgPgLgAgSgmQgHAIAAAOQAAAOAHAGQAHAJALgBQAMABAHgJQAHgGAAgOQAAgOgHgIQgHgIgMAAQgLAAgHAIg");
	this.shape.setTransform(-43.9,103.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383D47").s().p("AAWArIAAgzQAAgLgEgGQgFgFgKAAQgKAAgHAHQgHAHAAAMIAAAvIgNAAIAAhSIANAAIAAANQAEgHAHgEQAIgFAIAAQAeABAAAgIAAA0g");
	this.shape_1.setTransform(-53.45,101.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383D47").s().p("AgGA7IAAhSIANAAIAABSgAgHgrIAAgPIAPAAIAAAPg");
	this.shape_2.setTransform(-60.275,100.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383D47").s().p("AgUA3QgJgFgFgKQgEgKAAgNQAAgMAEgJQAFgKAJgFQAHgGAMAAQAIAAAIAFQAHAEAEAIIAAg0IANAAIAAB4IgNAAIAAgQQgEAIgHAEQgIAFgIAAQgMAAgHgGgAgSgEQgHAGAAAPQAAAQAHAIQAHAJALAAQAMAAAHgJQAGgIABgQQgBgPgGgGQgHgJgMAAQgLAAgHAJg");
	this.shape_3.setTransform(-67.45,100.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383D47").s().p("AgUAmQgJgGgFgJQgEgKAAgNQAAgLAEgLQAFgKAJgFQAJgFALAAQAMAAAJAFQAJAFAEAKQAFALAAALQAAANgFAKQgEAJgJAGQgJAFgMAAQgLAAgJgFgAgSgWQgHAIAAAOQAAAQAHAHQAHAJALAAQAMAAAHgJQAGgHAAgQQAAgOgGgIQgHgJgMAAQgLAAgHAJg");
	this.shape_4.setTransform(-76.875,101.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383D47").s().p("AgVA2QgMgIgIgOQgGgNAAgTQAAgSAGgOQAIgOAMgHQANgHAQAAQAMAAAKADQAKAEAIAIIgFAKQgIgHgJgDQgIgDgKAAQgTAAgLAMQgLANAAAXQAAAXALANQALANATAAQAKAAAIgDQAJgDAIgIIAFALQgIAHgKAEQgKAEgMAAQgQAAgNgHg");
	this.shape_5.setTransform(-87.25,100.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#383D47").s().p("AgVA3QgIgFgEgKQgFgKAAgNQAAgMAFgJQAEgKAIgFQAJgGAKAAQAJAAAHAFQAIAEADAIIAAg0IAOAAIAAB4IgOAAIAAgQQgDAIgIAEQgHAFgJAAQgKAAgJgGgAgSgEQgGAGAAAPQAAAQAGAIQAHAJALAAQANAAAGgJQAGgIAAgQQAAgPgGgGQgGgJgNAAQgLAAgHAJg");
	this.shape_6.setTransform(-102.7,100.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#383D47").s().p("AAWArIAAgzQAAgLgEgGQgFgFgKAAQgLAAgGAHQgHAHAAAMIAAAvIgNAAIAAhSIANAAIAAANQAEgHAIgEQAGgFAJAAQAdABABAgIAAA0g");
	this.shape_7.setTransform(-112.2,101.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383D47").s().p("AgSAoQgHgDgEgGQgEgGAAgHQAAgJAFgFQAFgEALgDQAKgCATAAIADAAIAAgGQAAgKgEgEQgEgGgKAAQgNAAgOAJIgEgKQAGgEAJgDQAJgDAIAAQAQAAAHAIQAIAJAAAQIAAAzIgOAAIAAgOQgDAHgGAEQgHAEgIAAQgIAAgGgDgAgEAEQgIACgDACQgEADAAAGQAAAGAFAFQAFAFAHgBQAJABAHgIQAGgGAAgMIAAgEIgDAAQgPgBgGACg");
	this.shape_8.setTransform(-121.675,101.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#383D47").s().p("AAkA8IAAg3IhHAAIAAA3IgNAAIAAh3IANAAIAAA1IBHAAIAAg1IAOAAIAAB3g");
	this.shape_9.setTransform(-132.5,100);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#383D47").s().p("AAWArIAAgzQAAgLgFgGQgEgFgKAAQgKAAgHAHQgHAHAAAMIAAAvIgOAAIAAhSIAOAAIAAANQAEgHAHgEQAIgFAIAAQAdABAAAgIAAA0g");
	this.shape_10.setTransform(-148.15,101.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#383D47").s().p("AgSAoQgHgDgEgGQgEgGAAgHQAAgJAFgFQAFgEALgDQAKgCATAAIADAAIAAgGQAAgKgEgEQgEgGgKAAQgNAAgOAJIgEgKQAGgEAJgDQAJgDAIAAQAQAAAHAIQAIAJAAAQIAAAzIgOAAIAAgOQgDAHgGAEQgHAEgIAAQgIAAgGgDgAgEAEQgIACgDACQgEADAAAGQAAAGAFAFQAFAFAHgBQAJABAHgIQAGgGAAgMIAAgEIgDAAQgPgBgGACg");
	this.shape_11.setTransform(-157.625,101.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#383D47").s().p("AAWA8IAAgzQAAgLgFgFQgEgFgKgBQgLAAgGAIQgHAFAAANIAAAvIgOAAIAAh3IAOAAIAAAzQAEgIAHgEQAIgEAIAAQAeAAgBAgIAAA0g");
	this.shape_12.setTransform(-166.8,100);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#383D47").s().p("AgGA8IAAhrIgqAAIAAgMIBhAAIAAAMIgqAAIAABrg");
	this.shape_13.setTransform(-176.725,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-183.8,85.5,250.10000000000002,27.200000000000003), null);


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
	this.shape.graphics.f("#383D47").s().p("AgVAoQgKgGgFgJQgEgLgBgOQABgNAEgKQAFgKAKgGQAKgFALAAQAMAAAKAFQAKAGAEAKQAFAKABANQgBAOgFALQgEAJgKAGQgKAFgMABQgLgBgKgFgAgTgYQgHAJAAAPQAAARAHAIQAHAJAMAAQANAAAHgJQAGgIAAgRQABgPgIgJQgHgJgMAAQgMAAgHAJg");
	this.shape.setTransform(59,57.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383D47").s().p("AgDAyQgIgJAAgOIAAgtIgSAAIAAgMIASAAIAAgbIAOAAIAAAbIAYAAIAAAMIgYAAIAAAsQAAAUASAAIAJAAIgBALIgJABQgQAAgHgIg");
	this.shape_1.setTransform(50.95,56.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383D47").s().p("AAXAtIAAg1QAAgNgEgFQgFgGgLABQgLgBgHAIQgHAHAAANIAAAxIgPAAIAAhWIAPAAIAAANQAEgHAIgEQAHgFAJAAQAgAAAAAjIAAA2g");
	this.shape_2.setTransform(42.825,57.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383D47").s().p("AgGA/IAAhXIANAAIAABXgAgIgtIAAgRIARAAIAAARg");
	this.shape_3.setTransform(35.575,56.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383D47").s().p("AgiAjIAFgMQAHAGAHACQAIADAIAAQAKAAAEgEQAGgDgBgGQAAgFgCgDQgEgDgIgCIgOgEQgLgCgGgFQgGgHAAgIQAAgMAJgHQAKgHAOAAQAJAAAJACQAHADAGAGIgEALQgNgLgOAAQgIABgGADQgEAEAAAGQAAAFACAEQAEACAGACIAPADQAMADAGAFQAGAGAAAJQAAAMgJAHQgKAGgQABQgVgBgNgKg");
	this.shape_4.setTransform(24.5,57.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383D47").s().p("AgoA9IAAh3IAOAAIAAAPQAEgIAIgFQAHgEAKAAQALAAAJAGQAJAFAEALQAGAKAAAOQAAAOgGAJQgEAKgJAFQgIAGgMAAQgKAAgHgFQgIgEgEgIIAAAwgAgTgnQgHAIAAAQQAAAPAHAJQAHAJAMAAQAMAAAIgJQAGgIAAgPQAAgQgGgJQgIgJgMAAQgMAAgHAJg");
	this.shape_5.setTransform(15.2,59.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#383D47").s().p("AgpA9IAAh3IAPAAIAAAPQAEgIAHgFQAJgEAIAAQAMAAAJAGQAIAFAGALQAEAKAAAOQAAAOgEAJQgGAKgIAFQgJAGgMAAQgIAAgJgFQgHgEgEgIIAAAwgAgTgnQgHAIAAAQQAAAPAHAJQAHAJAMAAQAMAAAIgJQAGgIABgPQgBgQgGgJQgIgJgMAAQgMAAgHAJg");
	this.shape_6.setTransform(4.7,59.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#383D47").s().p("AAvBAIgOghIhBAAIgOAhIgPAAIA3h+IANAAIA3B+gAgbATIA3AAIgchAg");
	this.shape_7.setTransform(-7.35,56);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383D47").s().p("AgVA8IAOghIglhWIAQAAIAcBHIAehHIAOAAIgzB3g");
	this.shape_8.setTransform(-23.15,59.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#383D47").s().p("AgQAoQgKgGgFgJQgFgKAAgOQAAgNAFgLQAGgKAJgGQAKgFAMAAQAJgBAIAEQAJADAFAFIgFALQgMgKgNAAQgNAAgHAJQgIAIAAAQQAAAPAIAJQAHAJANAAQANAAAMgLIAFAMQgGAEgIAEQgJADgJAAQgMgBgJgFg");
	this.shape_9.setTransform(-31.875,57.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#383D47").s().p("AgUArQgHgEgEgGQgEgGAAgIQAAgKAFgFQAFgFALgCQAMgCAUgBIADAAIAAgGQAAgKgEgFQgEgGgKAAQgOAAgPAKIgGgKQAIgFAJgEQAJgCAJAAQAQAAAJAIQAIAJAAARIAAA3IgPAAIAAgQQgDAJgHADQgHAFgIAAQgIAAgIgDgAgFAEQgIACgDADQgEADAAAGQAAAHAFAEQAFAFAIAAQAKAAAGgHQAIgHgBgMIAAgFIgCAAIgYABg");
	this.shape_10.setTransform(-41.3,57.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#383D47").s().p("AgkAyIAFgLQAJAGAHACQAIADAJAAQAMAAAHgHQAGgGAAgNIAAgQQgDAJgIAEQgIAFgKAAQgLAAgJgGQgJgFgFgKQgFgJAAgNQAAgNAFgKQAFgKAJgFQAJgGALAAQAKAAAHAFQAIAEAEAJIAAgPIAPAAIAABQQAAAUgKAKQgKAKgUAAQgWAAgQgMgAgTgoQgHAIAAAPQAAAPAHAHQAHAIAMAAQANAAAHgIQAHgHAAgPQAAgPgHgIQgHgIgNAAQgMAAgHAIg");
	this.shape_11.setTransform(-51.475,59.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#383D47").s().p("AgbAiQgLgNAAgUQAAgNAFgLQAFgKAJgGQAKgFALAAQARAAAKALQAKALAAAVIAAAEIg/AAQABAPAHAIQAIAIANAAQAPAAANgLIAFALQgGAGgJADQgJADgJAAQgUgBgMgLgAgPgaQgHAIgCAMIAyAAQAAgMgGgIQgHgHgLAAQgKAAgHAHg");
	this.shape_12.setTransform(-61.225,57.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#383D47").s().p("AgmBAIAAh+IAPAAIAABxIA+AAIAAANg");
	this.shape_13.setTransform(-70.225,56);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#383D47").s().p("AAxAtIAAg2QAAgMgEgFQgFgGgJABQgLgBgGAIQgHAHAAANIAAAxIgNAAIAAg2QAAgMgEgFQgFgGgJABQgLgBgGAIQgHAHAAANIAAAxIgOAAIAAhWIAOAAIAAANQAEgIAHgDQAHgFAJAAQAVAAAFARQAEgHAIgFQAHgFAKAAQAdAAAAAjIAAA2g");
	this.shape_14.setTransform(-88.025,57.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#383D47").s().p("AgYAtIAAhWIAOAAIAAAOQAIgPAUgCIAGAAIABANIgKABQgNABgFAHQgGAHAAALIAAAxg");
	this.shape_15.setTransform(-98.225,57.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#383D47").s().p("AgVAoQgKgGgFgJQgEgLgBgOQABgNAEgKQAFgKAKgGQAKgFALAAQAMAAAKAFQAKAGAEAKQAFAKABANQgBAOgFALQgEAJgKAGQgKAFgMABQgLgBgKgFgAgTgYQgHAJAAAPQAAARAHAIQAHAJAMAAQANAAAHgJQAGgIAAgRQABgPgIgJQgHgJgMAAQgMAAgHAJg");
	this.shape_16.setTransform(-107.05,57.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#383D47").s().p("AgMBAIAAhLIgSAAIAAgMIASAAIAAgDQAAgRAIgJQAIgJASgBIAHgBIACAMIgJAAQgLABgFAFQgFAGAAALIAAAFIAZAAIAAAMIgZAAIAABLg");
	this.shape_17.setTransform(-114.775,55.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#383D47").s().p("AgiAjIAFgMQAHAGAHACQAIADAIAAQAKAAAEgEQAGgDAAgGQAAgFgDgDQgEgDgIgCIgOgEQgLgCgGgFQgGgHAAgIQAAgMAJgHQAKgHAOAAQAJAAAJACQAHADAGAGIgEALQgNgLgOAAQgIABgGADQgEAEAAAGQAAAFACAEQAEACAGACIAPADQAMADAGAFQAGAGAAAJQAAAMgKAHQgJAGgQABQgVgBgNgKg");
	this.shape_18.setTransform(-122.3,57.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#383D47").s().p("AAXAtIAAg1QAAgNgEgFQgFgGgLABQgLgBgHAIQgHAHAAANIAAAxIgPAAIAAhWIAPAAIAAANQAEgHAIgEQAHgFAJAAQAgAAAAAjIAAA2g");
	this.shape_19.setTransform(-131.675,57.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#383D47").s().p("AgTArQgIgEgEgGQgEgGAAgIQAAgKAFgFQAFgFALgCQAMgCATgBIAEAAIAAgGQABgKgFgFQgEgGgLAAQgOAAgPAKIgFgKQAIgFAJgEQAJgCAIAAQASAAAHAIQAJAJAAARIAAA3IgPAAIAAgQQgDAJgHADQgHAFgIAAQgJAAgGgDgAgFAEQgIACgEADQgDADAAAGQAAAHAFAEQAFAFAIAAQAJAAAIgHQAGgHAAgMIAAgFIgDAAIgXABg");
	this.shape_20.setTransform(-141.7,57.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#383D47").s().p("AgYAtIAAhWIAOAAIAAAOQAIgPAUgCIAGAAIABANIgKABQgNABgFAHQgGAHAAALIAAAxg");
	this.shape_21.setTransform(-148.875,57.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#383D47").s().p("AgHBAIAAhyIgsAAIAAgMIBnAAIAAAMIgtAAIAAByg");
	this.shape_22.setTransform(-158.075,56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-165.4,40.8,236.5,28.5), null);


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
	this.shape.graphics.f("#F1592D").s().p("AiMDlIAAnIIB5AAIAABUQAagoAngVQAvgZAwAAIAAB1QgoAAgnAKQglALgWAXQgWAWAAAiIAADxg");
	this.shape.setTransform(81.1031,150.0591,1.1991,1.1466);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1592D").s().p("Ah2DRQgzgegfg3Qgdg2AAhGQAAhGAeg1QAfg2A1gfQA1geBFAAQA8AAAzAfQAzAfAfA+QAeA9AABVIlOAAQADAbAOAVQAQAZAcAOQAbANAegBQAkABAZgRQAXgPANgaIBsAqQgTAmgfAdQgeAbgqAPQgrAOg1AAQhCABg1gfgAgoh/QgZAJgQAUQgOAQgCAZIDFAAQgCgZgNgQQgPgTgXgKQgWgJgVAAQgUAAgYAJg");
	this.shape_1.setTransform(28.133,150.1738,1.1991,1.1466);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1592D").s().p("AgzEMQgngmAAhFIAAjcIhKAAIAAhnIBKAAIAAiOIB4AAIAACOIByAAIAABnIhyAAIAADBQAAAdAMAQQANAPAZAAQAJAAALgEQAMgFALgIIAqBbQgVAQgcALQgbAKgbAAQhKAAgnglg");
	this.shape_2.setTransform(-24.5373,142.635,1.1991,1.1466);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1592D").s().p("AhMDiQgmgNgegaQgdgYgQglIBngwQAPAYAWAPQAZAPAdAAQAeABARgJQAQgJAAgQQAAgRgNgHQgMgIgYgGIgpgLQhBgRgnglQglgmgBgyQABhFAsgnQAvgnBRABQAqgBAmANQAnAOAYAWQAbAXAKAeIhkAtQgGgSgZgLQgZgLgYAAQgYAAgNAKQgNAKAAATQAAAMAMAHQAOAIAWAGIA8AOQArALAdAYQAaAXAMAeQANAdAAAeQAAApgYAfQgZAggpARQgqARg1AAQgqAAgngNg");
	this.shape_3.setTransform(-70.8224,150.1738,1.1991,1.1466);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1592D").s().p("AiiDLQgtgkAAhDQAAhKAxgkQAxgkBYgBIBrAAQgCgNgEgMQgIgcgTgSQgTgPggAAQgbAAgZAMQgYAOgQAZIhqgkQANgdAYgcQAagdAngRQAogRA4AAQBGgBAuAbQAtAaAXAwQAXAwgBBDIgDD7IhwAAIgCg1IgIAMQgjA0hSAAQhSAAgugkgAg9A4QgXAOAAAaQAAAUATAMQASALAhAAQAdAAAXgPQAYgOANgWQAOgXAAgWIAAgBIhFAAQg7AAgWAOg");
	this.shape_4.setTransform(-127.0875,150.1738,1.1991,1.1466);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1592D").s().p("AjMFAIAAp/IGZAAIAAByIkcAAIAACaIDtAAIAABxIjtAAIAAECg");
	this.shape_5.setTransform(-182.2185,139.6825,1.1991,1.1466);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1592D").s().p("ABcDlIhbiMIhbCMIiRAAICqjtIiejbICPAAIBQB6IBSh6ICPAAIieDcICpDsg");
	this.shape_6.setTransform(-275.0564,146.6361,1.1991,1.1466);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1592D").s().p("AiIEgQg7gqgihLQgihLAAhgQAAhfAihLQAhhLA7gqQA8grBNAAQBOAAA7ArQA8AqAhBLQAiBJAABhQAABigiBJQghBLg8AqQg7ArhOAAQhNAAg7grgAhJi+QghAegQAwQgSAxgBA/QABBAASAxQARAxAhAcQAfAbApAAQAqAAAggbQAfgbAUgyQASgxAAhAQAAg/gSgxQgUgygfgcQgggbgqAAQgpAAggAbg");
	this.shape_7.setTransform(-339.9575,136.1735,1.1991,1.1466);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F1592D").s().p("AAIFAIAAnfQgaASgbAMQgoAQgpgDIAAhyQAXACAZgNQAZgMAcgXQAZgVATgWIABABIBrAAIAAJ+g");
	this.shape_8.setTransform(-401.2313,136.1162,1.1991,1.1466);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-416.5,98.3,514.5,79.39999999999999), null);


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
	this.shape.graphics.f("#F1592D").s().p("AAFATIgCgBIgMgOQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIACgDIAMgOIACgBIAEAAIACABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgJAJIAJAKQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgCABg");
	this.shape.setTransform(3.825,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1592D").s().p("AgIATIgBgBQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIACgEIAJgKIgJgJQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIACgEIABgBIAEAAIADABIALAOQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAIgCAEIgLAOIgDABg");
	this.shape_1.setTransform(6.95,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1592D").s().p("AgjA1QgHAAgFgFQgFgFAAgHIAAhHQAAgHAFgFQAFgFAHAAIBIAAQAGABAFAEQAFAFAAAHIAABHQAAAHgFAFQgFAFgHAAgAgnAkIABADIADABIBIAAIADgBIABgDIgBABIAAgzIhPAAgAglgmIgBADIAAAHIBPAAIAAgHIgBgDIgDgBIhHAAg");
	this.shape_2.setTransform(5.275,5.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,10.6,10.6), null);


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
	this.shape.graphics.f("#F1592D").s().p("AgKAzQgFgFAAgGIAAgYIgYAAQgGAAgFgFQgFgFAAgGQAAgFAFgFQAFgFAGAAIAYAAIAAgYQAAgGAFgFQAFgFAFAAQAGAAAFAFQAFAFAAAGIAAAYIAYAAQAGAAAFAFQAFAFAAAFQAAAGgFAFQgFAFgGAAIgYAAIAAAYQAAAGgFAFQgFAFgGAAQgFAAgFgFg");
	this.shape.setTransform(5.6,5.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,11.2,11.2), null);


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
	this.shape.graphics.f("#F1592D").s().p("AgJAKQgEAAgDgDQgDgDAAgEQAAgDADgCQAEgEADAAIATAAQAEAAADAEQADADAAACQAAAEgDADQgDADgEAAg");
	this.shape.setTransform(2,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1592D").s().p("AgJAKQgEAAgDgDQgDgDAAgEQAAgDADgCQACgEAFAAIATAAQAEAAADAEQADACAAADQAAAEgDADQgDADgEAAg");
	this.shape_1.setTransform(8.95,5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1592D").s().p("AgGARQgDgEAAgDIAAgTQAAgEADgCQADgEADAAQAEAAADAEQADACAAAEIAAATQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_2.setTransform(5.45,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1592D").s().p("AgGARQgDgDAAgEIAAgTQAAgEADgCQADgEADAAQAEAAADAEQADACAAAEIAAATQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_3.setTransform(5.45,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,11,11), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAdQgGgBgDgDQgEgEgCgEIANgHIAFAGQAFACACAAIAGgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgKgDQgJgDgEgEQgFgEgBgHQABgJAGgGQAGgEAJgBQAHABADACQAFABAEADQAEADABAEIgNAGQgCgDgCgBQgDgBgEgBIgEACQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAAAIAEACIAIACQAHACACADQAEABABAFIACAHQAAAGgDAEQgEAEgFACQgGACgGAAQgGAAgEgCg");
	this.shape.setTransform(0.5498,106.1883,1.7139,1.7148);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAbQgGgDgEgHQgEgJAAgIQAAgHAEgJQAEgGAHgEQAIgEAHgBQAIABAHAEQAHAEADAIQAEAIAAAKIgrAAIACAGQADAEADACIAHACQAEgBAEgCQADgCACgEIAOAHQgDAFgEADQgEAEgFABQgFACgIAAQgHAAgIgEgAgEgQIgGAEQgBACgBADIAZAAQAAgDgCgCIgFgEIgFgBg");
	this.shape_1.setTransform(-9.9478,106.1883,1.7139,1.7148);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNAbQgGgDgGgHQgEgJAAgIQAAgHAEgJQAFgGAHgEQAHgEAIgBQAJAAAIAFQAHAFADAIIgOAFIgGgGQgDgCgEAAQgFAAgCACQgDACgDAFQgBADAAAEQAAAFABAEQADADADADQADACAEAAQAEAAAEgCQADgEACgCIAPAEQgEAJgHAFQgHAFgKgBQgHAAgIgEg");
	this.shape_2.setTransform(-21.2595,106.1883,1.7139,1.7148);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAMAfIAAgfQAAgFgBgDQgCgEgCgBQgCgCgEAAQgFAAgDAEQgEADAAAHIAAAgIgQAAIAAg7IAPAAIABAIQACgEAEgCQAFgEAGAAQAHAAAFADQAFADACAGQADAHAAAJIAAAhg");
	this.shape_3.setTransform(-32.7365,106.0597,1.7139,1.7148);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPAbQgGgDgEgHQgEgHAAgKQAAgHAEgJQADgFAIgFQAHgEAIgBQAIABAGAEQAHAEAEAIQAEAIAAAKIgrAAQAAAEACACQADAEADACQAEACADAAQAEgBAEgCQACgBADgFIAOAHQgCAEgFAEQgFAEgEABQgGACgHAAQgIAAgHgEgAgEgQIgGAEQgCACAAADIAZAAIgCgFIgFgEIgGgBg");
	this.shape_4.setTransform(-44.2257,106.1883,1.7139,1.7148);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHAsIAAg7IAPAAIAAA7gAgGgcQgCgCAAgEQAAgDACgDQADgDADAAQAEAAADADQACACAAAEQAAAEgCACQgDADgEABQgDgBgDgDg");
	this.shape_5.setTransform(-52.7524,103.7876,1.7139,1.7148);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSAeIAAg7IAQAAIAAALQADgFAFgDQAGgDAHAAIAAAPQgGAAgFABQgFACgDADQgCADAAAEIAAAfg");
	this.shape_6.setTransform(-58.8796,106.1883,1.7139,1.7148);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPAbQgGgDgEgHQgEgJAAgIQAAgHAEgJQADgFAIgFQAIgEAHgBQAIABAHAEQAHAFADAHQAEAIAAAKIgrAAQAAAEACACQADAEADACIAHACQAEgBAEgCQADgCACgEIAOAHQgCAEgFAEQgEAEgFABQgFACgIAAQgIAAgHgEgAgEgQIgGAEQgBACgBADIAZAAQAAgDgCgCIgFgEIgGgBg");
	this.shape_7.setTransform(-68.8202,106.1883,1.7139,1.7148);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeArIAAhTIAPAAIABAIQACgDAEgDQAFgEAGAAQAIAAAHAEQAGAEADAHQAEAIAAAJQAAAIgEAHQgDAIgGADQgHAEgIAAQgGAAgFgEQgDgCgDgEIAAAhgAgHgZQgDADgCADQgCAEAAAEIAAABQAAAFACAEQACADADACQAEACADAAQADAAAEgCQADgCACgDIACgJQAAgFgCgEQgBgEgEgCQgEgCgDAAQgDAAgEACg");
	this.shape_8.setTransform(-80.4747,108.1174,1.7139,1.7148);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AANAeIgNgSIgLASIgTAAIAWgeIgVgdIATAAIAKAQIALgQIATAAIgVAdIAWAeg");
	this.shape_9.setTransform(-92.5148,106.1883,1.7139,1.7148);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAqIAAhTIA0AAIAAAPIgjAAIAAATIAeAAIAAANIgeAAIAAAVIAkAAIAAAPg");
	this.shape_10.setTransform(-103.9551,104.1306,1.7139,1.7148);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJAnIgFgGIAAAIIgQAAIAAhTIARAAIAAAgIAEgFQAGgEAHAAQAHAAAHAEQAGADAEAIQADAGAAAJQAAAKgDAHQgEAHgGAEQgHAEgHAAQgHAAgGgEgAgHgCIgFAFIgBAIIAAABIABAIIAFAGIAHACQADAAAEgCQADgCADgEIABgJQAAgEgBgEQgDgEgDgBQgDgDgEAAQgDAAgEADg");
	this.shape_11.setTransform(-120.8798,104.2592,1.7139,1.7148);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgPAbQgGgDgFgHQgDgIAAgJQAAgJAEgHQADgGAIgEQAHgEAIgBQAHABAHAEQAHAEAEAIQAEAIAAAKIgrAAQAAAEACACQADAEADACQAEACADAAQAEgBAEgCQADgCABgEIAPAHIgHAIQgFAEgEABQgGACgHAAQgIAAgHgEgAgFgQIgFAEQgCACAAADIAZAAQAAgDgCgCIgFgEIgGgBg");
	this.shape_12.setTransform(-132.8342,106.1883,1.7139,1.7148);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAQAqIgQg6IgPA6IgRAAIgZhTIAQAAIARA7IARg7IAPAAIAQA6IARg6IARAAIgZBTg");
	this.shape_13.setTransform(-147.9165,104.1306,1.7139,1.7148);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgPAcQgGgEgEgHQgEgJAAgIQAAgHAEgJQAEgGAHgEQAIgEAHgBQAIABAHAEQAHAEADAIQAEAIAAAKIgrAAQABADACADQACAEADACIAHACQAEgBAEgCQADgCACgDIAOAGQgDAFgEADQgEAEgFABQgFACgIAAQgHAAgIgDgAgEgQIgGAEQgBACgBADIAZAAQAAgDgCgCIgFgEIgFgBg");
	this.shape_14.setTransform(26.901,81.4957,1.7139,1.7148);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHAeIgZg7IARAAIAPAqIARgqIAQAAIgZA7g");
	this.shape_15.setTransform(15.7178,81.4957,1.7139,1.7148);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHAsIAAg7IAPAAIAAA7gAgFgcQgDgCAAgEQAAgDADgDQADgDACAAQADAAADADQADADAAADQAAAEgDACQgDADgDABQgCgBgDgDg");
	this.shape_16.setTransform(7.3197,79.095,1.7139,1.7148);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJAdQgGgBgDgDQgEgEgCgEIAOgHIAEAGQAEACADAAIAGgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgFgCIgEgBQgJgCgFgFQgEgEgBgHQAAgJAGgGQAHgEAJgBQAHABADACQAFABAEADQADADACAEIgOAGQgBgCgCgCQgEgBgDgBIgEACQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAAAIAEACIAIACQAFACAEADQAEABABAFQACADAAAEQAAAGgEAEQgDADgFADQgGACgGAAQgGAAgEgCg");
	this.shape_17.setTransform(-0.05,81.4957,1.7139,1.7148);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAMAfIAAgfQAAgFgBgDIgEgFQgCgCgEAAQgFAAgEAEQgDAEAAAGIAAAgIgQAAIAAg7IAPAAIABAIQACgEAEgCQAFgEAGAAQAHAAAFADQAFAEACAFQADAFAAALIAAAhg");
	this.shape_18.setTransform(-10.719,81.367,1.7139,1.7148);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgPAcQgGgEgFgHQgEgJAAgIQAAgHAEgJQADgFAIgFQAIgEAHgBQAJABAHAEQAIAEADAGQAEAHAAAJQAAAKgEAHQgEAHgHAEQgHADgJAAQgIAAgHgDgAgHgOQgDACgCAEQgCAEAAAEQAAAFACAEQACADADADQAEACADAAQAEAAAEgCQAEgEABgCQACgEAAgFQAAgEgCgEQgCgEgDgCQgEgCgEAAQgDAAgEACg");
	this.shape_19.setTransform(-22.6306,81.4957,1.7139,1.7148);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgdArIAAhTIAOAAIABAIQACgDADgDQAGgEAGAAQAIAAAGAEQAHAFADAGQADAHAAAKQAAAKgDAFQgDAHgHAEQgGAEgIAAQgGAAgGgEQgDgCgCgEIAAAhgAgHgZQgEADgBADQgCAEAAAEIAAABQAAAFACAEQABACAEADQAEACADAAIAHgCIAFgFQACgEAAgFQAAgFgCgEQgBgEgEgCQgEgCgDAAQgDAAgEACg");
	this.shape_20.setTransform(-34.4137,83.4248,1.7139,1.7148);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJAdQgGgBgDgDQgEgEgCgEIANgHIAGAGQADACACAAIAHgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgEgCIgFgBQgIgCgGgFQgEgEAAgHQgBgJAHgGQAGgEAJgBQAGABAFACQAEABAEADQADADACAEIgNAGQgCgDgDgBQgDgBgDgBIgEACQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAIAEACIAIACQAGACADADIAGAGIABAHQAAAGgDAEQgEAEgFACQgGACgHAAQgEAAgFgCg");
	this.shape_21.setTransform(-45.6397,81.4957,1.7139,1.7148);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgPAcQgGgEgEgHQgEgJAAgIQAAgHAEgJQAEgGAHgEQAIgEAHgBQAIABAHAEQAHAEADAIQAEAIAAAKIgrAAQAAAEACACQADAEADACIAHACQAEgBAEgCQADgCACgDIAOAGQgCAEgFAEQgEAEgFABQgFACgIAAQgHAAgIgDgAgEgQIgGAEQgBACgBADIAZAAQAAgDgCgCIgFgEIgFgBg");
	this.shape_22.setTransform(-56.1373,81.4957,1.7139,1.7148);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAOAqIgQgeIgNAAIAAAeIgRAAIAAhTIAgAAQAIAAAGADQAHAEAFAGQADAFAAAJQAAAJgEAFQgEAFgHAEIgBABIATAggAgPgCIAPAAIAFgCIAGgDQABgEAAgDQAAgGgEgDQgEgDgFAAIgOAAg");
	this.shape_23.setTransform(-68.0918,79.4379,1.7139,1.7148);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgLAOIAHgbIAQAAIgMAbg");
	this.shape_24.setTransform(-82.7456,86.5542,1.7139,1.7148);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAMAfIAAgfQAAgFgCgDQAAgDgDgCIgGgCQgGAAgDAEQgDAEAAAGIAAAgIgQAAIAAg7IAPAAIABAIQACgEADgCQAGgEAFAAQAIAAAEADQAFADADAGQADAHAAAJIAAAhg");
	this.shape_25.setTransform(-91.1008,81.367,1.7139,1.7148);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRAeIAAg7IAPAAIAAAMQACgGAGgDQAGgDAHAAIAAAPIgLABIgIAFQgCADAAAEIAAAfg");
	this.shape_26.setTransform(-100.4844,81.4957,1.7139,1.7148);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgOAcQgHgEgEgHQgEgJAAgIQAAgHAEgJQAEgGAHgEQAIgEAHgBQAIABAHAEQAHAEADAIQAEAGAAAMIgrAAQABADACADQADAEACACIAHACQAEgBAEgCQADgCACgDIAOAGQgDAFgEADQgEAEgFABQgFACgIAAQgHAAgHgDgAgEgQIgGAEQgBACgBADIAZAAQAAgDgCgCIgFgEIgFgBg");
	this.shape_27.setTransform(-110.4679,81.4957,1.7139,1.7148);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgQAnQgGgEgEgHQgEgIAAgJQAAgIAEgHQAEgIAGgDQAGgEAIAAQAGAAAGAEIAFAGIAAghIAPAAIAABTIgOAAIgBgIQgCADgDADQgGAEgGAAQgIAAgGgEgAgGgCQgDABgCAEQgCAFAAADIACAJQACAEADACQAEACADAAQADAAAEgCQADgCACgEQACgDAAgFIAAgBQAAgFgCgDQgCgEgDgBQgDgDgEAAQgDAAgEADg");
	this.shape_28.setTransform(-122.6794,79.5665,1.7139,1.7148);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgPAcQgHgFgEgGQgEgJAAgIQAAgHAEgJQADgFAIgFQAHgEAIgBQAJABAHAEQAIAEADAGQAEAJAAAHQAAAIgEAJQgEAHgHAEQgHADgJAAQgHAAgIgDgAgHgOQgDACgCAEQgCAFAAADQAAAEACAFQACADADADQAEACADAAQAEAAAEgCIAFgGQACgFAAgEQAAgDgCgFQgCgEgDgCQgEgCgEAAQgDAAgEACg");
	this.shape_29.setTransform(-134.4624,81.4957,1.7139,1.7148);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAaAqIAAg5IgaAlIgZglIAAA5IgQAAIAAhTIASAAIAXAkIAYgkIASAAIAABTg");
	this.shape_30.setTransform(-149.2448,79.4379,1.7139,1.7148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-159.5,64.1,278,52.400000000000006), null);


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
	this.shape.graphics.f("#213A71").s().p("AAPDWIAAl1IgBAAIhJAnIgLgsIBcgxIAyAAIAAGrg");
	this.shape.setTransform(232.3,71.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#213A71").s().p("AhtClQgjg4AAhrQAAhpAqg8QAog5BBAAQBCAAAmA4QAmA7AABlQAABsgmA8QgnA5hGAAQhHAAgkg4gAhWACQAABSAXAvQAYAtAnAAQAoAAAYgvQAYgyAAhRQAAivhXABQhXgBAACzg");
	this.shape_1.setTransform(201.325,71.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#213A71").s().p("AhtClQgjg4gBhrQABhpAqg8QAog5BCAAQBBAAAmA4QAmA7AABlQAABsgnA8QgmA5hGAAQhHAAgkg4gAhXACQAABSAYAvQAXAtAoAAQAnAAAYgvQAZgyAAhRQAAivhYABQhWgBgBCzg");
	this.shape_2.setTransform(167.55,71.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#213A71").s().p("AiJC2IAvgsQBYhTAfgsQAngyAAgtQAAgmgSgVQgWgZgrgBQgpABgVAMIgdAXIgSgoQA1gtBDABQBAAAAjAnQAgAiAAA0QgBBYiTCMIghAhIC/ABIAAAvIkQAAIgCABg");
	this.shape_3.setTransform(133.4,71.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3E698A").s().p("ApHAjQgRAAgMgNQgNgMAAgRIAAgbITjAAIAAAbQAAARgNAMQgMANgSAAg");
	this.shape_4.setTransform(305.425,325.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B6D3E0").s().p("EgvvABxIAAjhMBffAAAIAADhg");
	this.shape_5.setTransform(305.6,333.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7EB5DA").s().p("EgsbADaQhVAAg+g+Qg/g+AAhWIAAjhMBfbAAAIAADhQAABWg+A+Qg+A+hWAAg");
	this.shape_6.setTransform(305.375,344.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#9EBFDF").ss(5,1,1).p("AnUl5IOoAAIAAL0IuoAAg");
	this.shape_7.setTransform(169.65,188.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9EBFDF").s().p("AnUF7IAAr0IOpAAIAAL0g");
	this.shape_8.setTransform(169.65,188.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#7288A9").ss(3,1,1).p("ArWAAIWtAA");
	this.shape_9.setTransform(329.675,285.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#306088").ss(5,1,1).p("AHUAAIuoAA");
	this.shape_10.setTransform(169.65,257.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#7288A9").ss(3,1,1).p("ArWAAIWtAA");
	this.shape_11.setTransform(329.675,226.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#7288A9").ss(3,1,1).p("ArWAAIWtAA");
	this.shape_12.setTransform(329.675,203.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#7288A9").ss(3,1,1).p("ArWAAIWtAA");
	this.shape_13.setTransform(329.675,177.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#7288A9").ss(3,1,1).p("Ao7AAIR3AA");
	this.shape_14.setTransform(428.55,70.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#9EBFDF").ss(3,1,1).p("AjuAAIHdAA");
	this.shape_15.setTransform(461.875,177.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#306088").ss(5,1,1).p("AjsAAIHZAA");
	this.shape_16.setTransform(351.475,257.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#306088").ss(5,1,1).p("AjuAAIHdAA");
	this.shape_17.setTransform(280.925,257.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#306088").ss(5,1,1).p("AjuAAIHdAA");
	this.shape_18.setTransform(461.875,257.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#9EBFDF").ss(3,1,1).p("AjuAAIHdAA");
	this.shape_19.setTransform(461.875,151.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#7288A9").ss(3,1,1).p("ArWAAIWtAA");
	this.shape_20.setTransform(329.675,151.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#9EBFDF").ss(5,1,1).p("AjuAAIHdAA");
	this.shape_21.setTransform(461.875,111.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#306088").ss(5,1,1).p("A13AAMArvAAA");
	this.shape_22.setTransform(262.775,111.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#9EBFDF").ss(8,1,1).p("AlCAAIKFAA");
	this.shape_23.setTransform(309.3,71.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F1F0F3").s().p("Egh/AVjMAAAgrFMBD/AAAMAAAArFg");
	this.shape_24.setTransform(305.2,169.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#213A71").s().p("Egh9AbpQiBAAhbhaQhbhcAAiAMAAAgtlQAAiABbhbQBbhbCBAAMBD7AAAQCBAABaBbQBbBbAACAMAAAAtlQAACAhbBcQhaBaiBAAg");
	this.shape_25.setTransform(305.45,176.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,611.2,366), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282560").s().p("AATAYIgDgcIgNAcIgEAAIgOgcIgDAcIgHAAIACgvIAIAAIAPAkIAOgkIAJAAIADAvg");
	this.shape.setTransform(602.675,37.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282560").s().p("AgFAYIAAgoIgQAAIAAgHIAqAAIAAAHIgRAAIAAAog");
	this.shape_1.setTransform(597.9,37.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F49021").s().p("AiCDUIBoknIAhhHQANgaAYgPQAYgPAdAAIAjAAIAAF7QgdANgNAeg");
	this.shape_2.setTransform(30.95,21.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#282560").s().p("AimDtQgigJgNgfQgPgiATgsICUllIDsAAQALAkAjAOIAAGpIi1AAIhjABIgtABQg6AAgEgCg");
	this.shape_3.setTransform(22.0989,71.2563);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F05A2B").s().p("AjtDqIAAmoQAhgMAMggICRAAQEcABABDpQgBB3hOA7QhLA5iOgBg");
	this.shape_4.setTransform(73.45,71.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F51B5").s().p("AifDTQgMgfgggKIAAl7ICkAAQB5gBA+A6QA7A2ABBhQAABhg+A5Qg/A6htAAg");
	this.shape_5.setTransform(70,21.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#282560").s().p("AxNHhIAAq3IBYAAIAAAfIACAAQAUgOAOgSQAUgKBSAAQBkAABBBCQBEBGAABwQAABzhKBGQhGBGhrAAQg9AAg5gaIgCAAIAADlgAt8DJQBIABAtgwQAsgvAAhKQAAhKgrgyQgtg1hGAAQhGAAg2ArIAAELIgBAAQA3AfBDAEgA5VHhIAAq3IBYAAIAAAfIACAAQATgOAPgSQAUgKBSAAQBkAABBBCQBEBGAABwQAAByhJBHQhIBGhqAAQg+AAg4gaIgCAAIAADlgA39hlIAAELQA0AfBEAEQBJABAsgwQAsgvABhKQAAhKgsgyQgsg1hHAAQhFAAg2ArgAZCDQQhLhHABhvQAAhsBLhJQBIhFBcAAQBeAAA9A7QBABAABBtQACAMgEAfIAAgBIlwAAQAJBGAxAnQAvAmBIAAQBcgBBLg7IAABfQgfAbgTAGQgaAMhgAAQhyAAhJhFgAaKhzQgsAigMA/IEbAAQgFhCgrgiQglgdgyAAIgBAAQgzABgoAfgAQ0DSQhFhEAAhuQAAhuBGhJQBHhJBxAAQA/AAA1AXIADAAIAAkYIBXAAIAALrIhXAAIAAgeIgDAAQg6AphNAAQhjAAhDhDgARxCVQAsAwBHABQBKgCA1goIAAkRQg5gfg9AAQhLAAgtAzQgtAyAABLIAAAAQgBBJAqAwgAD8EHQgkgNgYgbIABAAQgVgYgJgjQgIgiABg1IAAklIBYAAIAAETQAAApAFAWQAGAYAMAOQANAQAVAJQATAJAXgBQAqAAAsgYQAlgXAcgjIAAlGIBYAAIAAHhIhYAAIAAg9IgCAAQgiAigrASQgsAUguAAQgnAAgigOgEAgDAEKIAAnfIBYAAIAABHIACAAQAZgjAmgUQAmgUAqAAQAIgBAWAFIAABTIAEAAIgEADIAAgDIgiAAQhcAAgwBVIAAE3gANYEKIAArrIBYAAIAALrgAKiEKIAAnhIBYAAIAAHhgAmREKIAArDIC+AAQBDAAApAIQAtAIAjAVQAmAWAXAnQAWAngBAtQAAA6ggAoQgbAjgvARIAAACQA/AOAjApQAlArAABCQABAwgVArQgWAsgnAbQgkAZg2ALQgzALhQAAgAk0C2IAAABIBlAAQA9AAAjgHQAlgGAYgRQAXgQALgZQANgZgBgbQAAg7gsgeQgsgfhQAAIiIAAgAk0iEICMAAQA7ABAkgbQApgeAAg2QACgdgOgYQgNgZgZgNQgXgOghgFQgegGg3AAIhVAAgA7QEKIhQjHIk+AAIhQDHIhfAAIEkrEIBZAAIEkLEgEgg+gANID/AAIg5iSQgmhfgehPIgCAAgAKilRQgSgSAAgaQACgZARgSQASgSAZAAQAaAAASASQASASAAAZQAAAagSASQgSATgagBQgaABgSgTg");
	this.shape_6.setTransform(361.15,56.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,605.3,104.9), null);


(lib.Symbol39 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol40();
	this.instance.setTransform(253.1,202.05,0.4257,0.4254,0,0,0,292.3,238.6);
	this.instance.alpha = 0.1406;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.background();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,0,376.7,302.4), null);


(lib.Symbol36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {strt:12};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol25();
	this.instance.setTransform(5.65,5.65,0.0714,0.0714,0,0,0,5.6,5.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:5.6,y:5.6,alpha:0.3516},12,cjs.Ease.quadOut).wait(2).to({scaleX:0.0714,scaleY:0.0714,x:5.65,y:5.65,alpha:0},12,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.2,11.2);


(lib.Symbol35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"strt":14};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol24();
	this.instance.setTransform(8.2,8.15,0.0856,0.0855,0,0,0,5.9,5.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:5.5,regY:5.5,scaleX:1.4612,scaleY:1.4591,x:8.05,y:8.05,alpha:0.3516},13,cjs.Ease.quadOut).wait(2).to({regX:5.9,regY:5.9,scaleX:0.0856,scaleY:0.0855,x:8.2,y:8.15,alpha:0},13,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.3,16.4,16.400000000000002);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"strt":14};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol37();
	this.instance.setTransform(5.6,6.45,0.1132,0.1132,0,0,0,4.9,5.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:5,regY:5.7,scaleX:1.1316,scaleY:1.1316,x:5.65,alpha:0.3516},13,cjs.Ease.quadOut).wait(2).to({regX:4.9,regY:5.8,scaleX:0.1132,scaleY:0.1132,x:5.6,alpha:0},13,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.5,12.9);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol34();
	this.instance.setTransform(72,124,1,1,0,0,0,72,124);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.349)",0,0,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-21,-21,190,295), null);


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
	this.instance = new lib.Symbol33();
	this.instance.setTransform(208,114,1,1,0,0,0,208,114);
	this.instance.shadow = new cjs.Shadow("rgba(51,51,51,0.247)",0,0,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-21,-21,462,274), null);


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
	this.instance = new lib.Symbol17();
	this.instance.setTransform(302.7,52.5,1,1,0,0,0,302.7,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,605.3,104.9), null);


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
	this.instance = new lib.Symbol38();
	this.instance.setTransform(108.95,24.55,1.4274,1.4162,0,0,0,30.8,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#584EBD").s().p("ApQC0QgZAAgRgRQgSgSAAgZIAAjvQAAgZASgSQASgSAYAAISgAAQAZAAASASQARASABAZIAADvQgBAZgRASQgSARgZAAg");
	this.shape.setTransform(110.6,26);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(45.4,8,130.5,36.1), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"strt":14};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol27();
	this.instance.setTransform(7.35,7.2,1.1748,1.1748,0,0,0,5.2,5.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:5,scaleX:1.4218,scaleY:1.4218,x:7.4,y:7.1,alpha:0.3516},13,cjs.Ease.quadOut).wait(2).to({regY:5.1,scaleX:1.1748,scaleY:1.1748,x:7.35,y:7.2,alpha:0},13,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,15,15.2);


// stage content:
(lib.appbuilder_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [444];
	// timeline functions:
	this.frame_444 = function() {
		this.stop();
		
		this.s1.gotoAndStop("strt");
		this.s2.gotoAndStop("strt");
		this.s3.gotoAndStop("strt");
		this.s4.gotoAndStop("strt");
		this.s5.gotoAndStop("strt");
		this.s6.gotoAndStop("strt");
		this.s7.gotoAndStop("strt");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(444).call(this.frame_444).wait(1));

	// plus_copy
	this.s7 = new lib.Symbol36();
	this.s7.name = "s7";
	this.s7.setTransform(174.75,133.6,1.1599,1.1522,0,0,0,6.2,6.3);
	this.s7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s7).wait(212).to({_off:false},0).wait(233));

	// arrow
	this.s6 = new lib.Symbol26();
	this.s6.name = "s6";
	this.s6.setTransform(273.55,113.45,0.9748,0.9735,0,0,0,0.2,0.4);
	this.s6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s6).wait(210).to({_off:false},0).wait(235));

	// plus
	this.s5 = new lib.Symbol36();
	this.s5.name = "s5";
	this.s5.setTransform(418.7,263.35,1.6227,1.6225,0,0,0,6,5.9);
	this.s5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s5).wait(208).to({_off:false},0).wait(237));

	// puls
	this.s4 = new lib.Symbol35();
	this.s4.name = "s4";
	this.s4.setTransform(413.65,283.1,1.3947,1.39,0,0,0,0.5,0.4);
	this.s4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s4).wait(205).to({_off:false},0).wait(240));

	// coding
	this.s3 = new lib.Symbol3();
	this.s3.name = "s3";
	this.s3.setTransform(255.65,91.6,1.1236,1.12,0,0,0,7.8,8);
	this.s3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s3).wait(203).to({_off:false},0).wait(242));

	// s2
	this.s2 = new lib.Symbol35();
	this.s2.name = "s2";
	this.s2.setTransform(257.65,80.85,1.008,1.0071,0,0,0,0.1,0.1);
	this.s2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s2).wait(80).to({_off:false},0).wait(107).to({alpha:0},13).wait(8).to({regX:0.4,regY:0.5,scaleX:1.0618,scaleY:1.0574,x:186.2,y:105.6,alpha:1},0).wait(237));

	// s1
	this.s1 = new lib.Symbol36();
	this.s1.name = "s1";
	this.s1.setTransform(230.45,112.35,1.2621,1.2621,0,0,0,5.7,5.7);
	this.s1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(75).to({_off:false},0).wait(112).to({alpha:0},13).to({_off:true},1).wait(244));

	// Layer_15
	this.instance = new lib.Symbol30();
	this.instance.setTransform(303.05,31.15,1,1,0,0,0,105.9,16.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(212).to({_off:false},0).to({alpha:1},15,cjs.Ease.quadOut).wait(218));

	// Layer_1
	this.instance_1 = new lib.Symbol28();
	this.instance_1.setTransform(275.75,33.7,0.4137,0.4119,0,0,0,213.2,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(201).to({_off:false},0).to({alpha:1},15,cjs.Ease.quadOut).wait(229));

	// Layer_9
	this.instance_2 = new lib.Symbol22();
	this.instance_2.setTransform(242.95,319.2,0.502,0.5027,0,0,0,77.2,128.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({_off:false},0).to({y:194.2},18,cjs.Ease.backOut).wait(337));

	// Layer_8
	this.instance_3 = new lib.Symbol21();
	this.instance_3.setTransform(-125.85,234.25,0.614,0.615,0,0,0,211.1,117.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({_off:false},0).to({regX:211.2,scaleX:0.6906,scaleY:0.6917,x:144.85,y:232.75},19,cjs.Ease.backOut).wait(355));

	// logo
	this.instance_4 = new lib.Symbol19();
	this.instance_4.setTransform(81.05,25.65,0.2197,0.2173,0,0,0,303.3,53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(445));

	// pc
	this.instance_5 = new lib.Symbol20();
	this.instance_5.setTransform(151.3,181.2,0.3959,0.3949,0,0,0,308.9,184.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({alpha:0},12,cjs.Ease.quadOut).to({_off:true},1).wait(388));

	// cta
	this.instance_6 = new lib.Symbol18();
	this.instance_6.setTransform(227.4,30.3,0.9195,0.9169,0,0,0,110.4,28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(300).to({scaleX:1.0605,scaleY:1.0574,y:30.35},10,cjs.Ease.quadOut).to({scaleX:0.9195,scaleY:0.9169,y:30.3},10,cjs.Ease.quadOut).wait(125));

	// Layer_14
	this.instance_7 = new lib.Symbol29();
	this.instance_7.setTransform(283.65,28.9,1,1,0,0,0,105.9,12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(188).to({alpha:0},12).to({_off:true},1).wait(244));

	// Layer_4
	this.instance_8 = new lib.Symbol23();
	this.instance_8.setTransform(286.45,52.4,1,1,0,0,0,114.3,30.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(54).to({_off:false},0).to({alpha:1},17).wait(117).to({alpha:0},12).to({_off:true},1).wait(244));

	// bg
	this.instance_9 = new lib.Symbol39();
	this.instance_9.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(445));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-126.4,124,551.4,280.5);
// library properties:
lib.properties = {
	id: 'B915F0BB2CAF214394D0C3C0B5CA43BE',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/background.jpg", id:"background"},
		{src:"images/img01.png", id:"img01"},
		{src:"images/phone.png", id:"phone"}
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