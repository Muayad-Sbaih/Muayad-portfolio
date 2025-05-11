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
p.nominalBounds = new cjs.Rectangle(0,0,160,598);


(lib.img02 = function() {
	this.initialize(img.img02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.img03 = function() {
	this.initialize(img.img03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,900);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("AAAAIIgFAOIgKgGIAJgMIgPABIAAgJIAPABIgJgMIAKgGIAFAOIAGgOIAKAGIgJAMIAPgBIAAAJIgPgBIAJAMIgKAGg");
	this.shape.setTransform(115.775,2.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVA5QgJgEgHgIQgGgHgEgNQgEgKAAgPQAAgOAEgKQAEgNAGgHQAHgIAJgEQAKgEALAAQALAAALAEQAIAEAIAIQAHAJADALQAEANAAALQAAAMgEANQgDAMgHAIQgIAJgIADQgLAEgLAAQgLAAgKgEgAgOgaQgFAKAAAQQAAARAFAKQAFAJAJAAQAKAAAFgJQAFgKAAgRQAAgQgFgKQgGgJgJAAQgJAAgFAJg");
	this.shape_1.setTransform(107.875,7.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVA5QgJgEgHgIQgHgJgDgLQgEgKAAgPQAAgOAEgKQADgLAHgJQAHgIAJgEQAKgEALAAQALAAALAEQAJAEAHAIQAHAJADALQAEANAAALQAAAMgEANQgDAMgHAIQgHAIgJAEQgLAEgLAAQgLAAgKgEgAgOgaQgFAKAAAQQAAASAFAJQAFAJAJAAQAKAAAFgJQAFgKAAgRQAAgQgFgKQgGgJgJAAQgJAAgFAJg");
	this.shape_2.setTransform(96.625,7.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTA5QgKgEgGgHQgHgIgDgLQgEgKAAgPQAAgMACgJIAGgQIAKgMIAMgIIAMgEIAMgBIANAAIAKADIAIADIAHAEIgOAVQgDgCgCgBIgGgCIgGgBIgFAAIgIABIgIAFIgGAIIgCAMQAFgEAIgCQAFgCAIAAQAJAAAGACQAHABAGAFQAGAEADAHQAEAJAAAJQAAAJgEAIQgEAIgGAFQgHAGgIADQgKACgKAAQgLAAgJgEgAgIAHQgFACgEADQABANAEAGQAFAHAJAAQAFAAACgCIAGgDIADgGIAAgGIAAgFIgDgGQgBgCgEgBQgCgCgGAAQgGAAgEACg");
	this.shape_3.setTransform(85.9,7.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiA7IAAgYIAUAAIAAhBIgEACIgKADIgGABIAAgaQAIgBAEgCQAEgBAGgEIAeAAIAABdIARAAIAAAYg");
	this.shape_4.setTransform(77,7.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBJIAAgNIgOgDQgHgDgFgDIgJgIIgHgKIAVgNIAFAGIAKAJIAHADIAAgcIgQgEIgNgGQgFgEgEgFQgDgGAAgJQAAgIADgHQACgGAGgFQAFgFAHgCQAKgEAHAAIAAgLIARAAIAAALIAOADIAKAFIAIAHIAGAHIgXAPIgGgIIgJgFIAAAZIARAFQAGACAHAFQAHAEACAFQADAGAAAIQAAAHgCAGQgCAFgFAGQgHAGgGACQgIAEgMABIAAANgAAJAmQAFAAADgEQADgDgBgFQABgDgDgEQgDgCgFgCgAgPgjQgCAEAAAEIABAEQAAAAAAABQAAAAAAABQABAAAAAAQAAABAAAAIAEACIAEACIAAgXIgIAEg");
	this.shape_5.setTransform(68,7.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQA7QgIgCgHgEQgFgDgGgGQgFgEgEgHIAYgPIAGAIIAHAGIAJADIAIABIAHAAIAFgCIAEgDQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAgCgCgDQgBgCgDgBIgjgLIgJgEIgIgGIgGgIQgCgHAAgFQAAgHAEgJQADgHAGgFQAHgEAHgDQAIgCALAAQAJAAAHACQAGABAIAEQAHADAEAEIAIAJIgWARQgCgDgEgCIgHgFIgHgDIgHgCQgOAAAAAJQAAADACACIAEAEIAGADIASAFIAKADIAKAEIAIAGIAGAIQACAHAAAFQAAAGgDAIQgDAHgGAFQgGAGgJACQgKADgOAAQgJAAgIgCg");
	this.shape_6.setTransform(56.625,7.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAXA7IgthBIAAAAIAABBIgfAAIAAh1IAhAAIArBBIAAhBIAgAAIAAB1g");
	this.shape_7.setTransform(40.6,7.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZA7IgIgWIgkAAIgIAWIgdAAIAqh2IAdAAIAqB2gAgLAOIAVAAIgKgfIAAAAg");
	this.shape_8.setTransform(28.375,7.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAUA7IAAgwIgnAAIAAAwIggAAIAAh1IAgAAIAAAsIAnAAIAAgsIAgAAIAAB1g");
	this.shape_9.setTransform(16.425,7.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPA7IAAhbIgiAAIAAgaIBjAAIAAAaIgiAAIAABbg");
	this.shape_10.setTransform(5.025,7.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,118,14.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgrA7IAAh1IBUAAIAAAaIgzAAIAAATIAkAAIAAAYIgkAAIAAAWIA2AAIAAAag");
	this.shape.setTransform(110.175,6.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOA7IgWgpIgIAAIAAApIgfAAIAAh1IAuAAQAMAAAHACQAJACAHAEQAGAFADAHQAEAHAAALQAAAPgGAHQgGAIgMAEIAaAtgAgQgFIAOAAQAJAAAEgDQAEgDAAgIQAAgHgEgDQgEgDgJAAIgOAAg");
	this.shape_1.setTransform(99.35,6.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNA8IgOgFQgIgEgEgEQgGgFgDgHQgEgGgDgJQgCgKAAgKQAAgJACgKQADgJAEgGQADgHAGgFQAGgFAGgDIAOgFIANgBQAIAAAGABIAOAFQAGADAGAFQAFAEAEAIQAEAGADAJQACAKAAAJQAAAKgCAKQgDAJgEAGQgEAIgFAEQgEAEgIAEIgOAFQgGABgIAAIgNgBgAgKgfQgGADgCADQgEAGgBAFQgCAGAAAIQAAAJACAGQABAEAEAHQADAFAFACQAGADAEAAQAFAAAGgDQAFgCADgFQAEgFABgGQACgGAAgJQAAgIgCgGQgCgHgDgEQgCgDgGgDQgEgDgHAAQgGAAgEADg");
	this.shape_2.setTransform(87.175,6.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhA7IAAhIIgCAIIgRBAIgbAAIgThKIAABKIggAAIAAh1IAtAAIAVBPIAThPIAsAAIAAB1g");
	this.shape_3.setTransform(73.8,6.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUA7IAAgwIgnAAIAAAwIggAAIAAh1IAgAAIAAAsIAnAAIAAgsIAgAAIAAB1g");
	this.shape_4.setTransform(55.675,6.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPA7IAAhbIgiAAIAAgaIBjAAIAAAaIgiAAIAABbg");
	this.shape_5.setTransform(44.3,6.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPA7IgWgpIgJAAIAAApIggAAIAAh1IAvAAQALAAAIACQAKACAGAEQAGAEAEAIQADAHAAALQAAAPgGAHQgGAIgMAEIAaAtgAgQgFIAOAAQAJAAAEgDQAFgDAAgIQAAgHgFgDQgEgDgJAAIgOAAg");
	this.shape_6.setTransform(33.625,6.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNA8QgIgCgGgDQgIgEgEgEQgEgEgGgIQgDgGgDgJQgCgIAAgMQAAgLACgIQADgJADgGQAGgIAEgEQAGgFAGgDQAGgDAIgCIANgBIAOABQAHACAHADQAFACAHAGQAGAFADAHQAFAIACAHQACAKAAAJQAAAKgCAKQgCAHgFAIQgDAHgGAFIgMAIQgHADgHACIgOABIgNgBgAgKgfQgFACgDAEQgDADgDAIQgBAHAAAHQAAAIABAHQADAHADAEQADAFAFACQAFADAFAAQAFAAAGgDQAEgCAEgFQAEgHABgEQACgHAAgIQAAgHgCgHQgBgFgEgGQgDgEgFgCQgEgDgHAAQgGAAgEADg");
	this.shape_7.setTransform(21.475,6.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AASA7IgQhJIgSBJIgbAAIgfh1IAgAAIAOA/IABAHIABAAIAOhGIAcAAIAOA+IABAIIABAAIAOhGIAdAAIgeB1g");
	this.shape_8.setTransform(7.5,6.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,114.6,12.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAAAGIgEAJIgFgEIAFgIIgKAAIAAgFIAKAAIgFgIIAFgEIAEAJIAEgJIAGAEIgGAIIALAAIAAAFIgLAAIAGAIIgGAEg");
	this.shape.setTransform(-185.1,349.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-186.6,348.1,3,3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgrA7IAAh1IBUAAIAAAaIg0AAIAAAUIAlAAIAAAYIglAAIAAAVIA3AAIAAAag");
	this.shape.setTransform(-0.675,333.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhA7IAAhIIgTBIIgbAAIgRhAIgCgKIgBAAIAABKIgfAAIAAh1IAtAAIAUBPIAThPIAtAAIAAB1g");
	this.shape_1.setTransform(-13.15,333.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhA7IAAhIIgDAPIgQA5IgbAAIgQg5IgDgRIgBAAIAABKIgfAAIAAh1IAuAAIATBPIAThPIAtAAIAAB1g");
	this.shape_2.setTransform(-27.75,333.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYA8IgHgXIgkAAIgIAXIgdAAIAqh2IAdAAIAqB2gAgMAPIAWAAIgKggIAAAAg");
	this.shape_3.setTransform(-41.025,333.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOA7IgVgpIgJAAIAAApIggAAIAAh1IAvAAQALAAAJACQAIACAHAEQAGAFAEAHQADAIAAAKQAAAPgGAHQgFAIgNAEIAZAtgAgQgFIANAAQAKAAAEgDQAFgDgBgIQABgHgFgDQgEgDgKAAIgNAAg");
	this.shape_4.setTransform(-52.25,333.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYA5QgKgFgHgIQgHgKgCgKQgDgJAAgPQAAgOADgLQAFgMAGgHQAHgHALgFQAKgEANAAQAIAAAIABQAIACAFAEQAIAFAEAHQAEAHAEAMIgdAIIgEgJIgFgGQgCgDgEgBIgGgBIgHACQgEABgEAEQgEAFgBAGQgCAGAAAKIABANIAEAKQABAEADADIAGAEQACABADAAIAEABQAHAAAFgEQAHgEABgGIgRAAIAAgXIAwAAIAAA8IgZAAIAAgPIAAAAIgEAFIgFAGIgJAFQgGABgGAAQgNAAgKgEg");
	this.shape_5.setTransform(-64.5,333.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNA8IgOgFQgFgCgHgGQgGgGgDgGQgEgGgDgJQgCgKAAgKQAAgJACgKQADgJAEgGQADgHAGgFQAEgEAIgEIAOgFIANgBQAIAAAGABQAIACAGADQAIAEAEAEQAEAEAGAIQADAGADAJQACAKAAAJQAAAKgCAKQgCAIgEAHQgFAIgFAEQgHAGgFACQgGADgIACQgGABgIAAIgNgBgAgKgfQgFACgDAFQgEAGgBAFQgCAIAAAFQAAAGACAJQABAGAEAFQADAFAFACQAEADAGAAQAIAAADgDQAFgCADgFQAEgEABgHQACgGAAgJQAAgIgCgFQgBgHgEgEQgDgFgFgCQgDgDgIAAQgGAAgEADg");
	this.shape_6.setTransform(-76.675,333.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPA7IgWgpIgJAAIAAApIggAAIAAh1IAvAAQAMAAAIACQAJACAGAEQAHAFADAHQADAHAAALQAAAPgGAHQgGAIgLAEIAZAtgAgQgFIAOAAQAJAAAEgDQAFgDAAgIQAAgHgFgDQgEgDgJAAIgOAAg");
	this.shape_7.setTransform(-88.425,333.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvA7IAAh1IA4AAIAMACQAGACAFADQAFADAEAEIAFALQACAGAAAJQAAAHgCAIQgCAGgEAEQgFAGgEABIgLAFQgHACgFAAIgXABIAAAlgAgPgCIANAAIAIgBIAHgDQACgCAAgDIABgGIgBgGQAAgDgCgCIgHgDIgIgBIgNAAg");
	this.shape_8.setTransform(-99.35,333.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAPA7IgXgpIgIAAIAAApIgfAAIAAh1IAuAAQALAAAIACQAJACAHAEQAGAFADAHQAEAHAAALQAAAPgGAHQgGAIgLAEIAZAtgAgQgFIAOAAQAJAAAEgDQAEgDABgIQgBgHgEgDQgEgDgJAAIgOAAg");
	this.shape_9.setTransform(-1.35,317.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNA8IgOgFQgFgDgHgFQgGgHgDgFQgEgGgDgKQgCgKAAgJQAAgJACgKQADgJAEgHQADgGAGgFQAEgEAIgEIAOgFIANgCQAIABAGABIAOAFQAIAEAEAEQAFAEAEAHQAEAHADAJQACAKAAAJQAAAJgCAKQgDAKgEAGQgEAHgFAFQgHAFgFADIgOAFIgOACIgNgCgAgKggQgFADgDAEQgEAHgBAEQgCAGAAAIQAAAIACAHQABAFAEAGQADAFAFACQAEACAGAAQAHAAAEgCQAFgCADgFQAEgEABgHQACgHAAgIQAAgIgCgGQgBgHgEgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_10.setTransform(-13.525,317.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPA7IAAhbIgiAAIAAgaIBjAAIAAAaIgiAAIAABbg");
	this.shape_11.setTransform(-25,317.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAZA7IgIgVIgkAAIgIAVIgdAAIAqh1IAdAAIAqB1gAgLAOIAVAAIgKgfIAAAAg");
	this.shape_12.setTransform(-35.975,317.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAOA7IgVgpIgJAAIAAApIggAAIAAh1IAvAAQALAAAJACQAKACAFAEQAGAEAEAIQADAJAAAJQABAPgHAHQgGAIgMAEIAZAtgAgQgFIAOAAQAIAAAFgDQAFgDAAgIQAAgHgFgDQgFgDgIAAIgOAAg");
	this.shape_13.setTransform(-47.2,317.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgqA7IAAh1IBTAAIAAAaIg0AAIAAAUIAlAAIAAAYIglAAIAAAVIA2AAIAAAag");
	this.shape_14.setTransform(-57.85,317.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoA7IAAh1IAgAAIAABbIAxAAIAAAag");
	this.shape_15.setTransform(-67.5,317.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgrA7IAAh1IBUAAIAAAaIg0AAIAAAUIAlAAIAAAYIglAAIAAAVIA3AAIAAAag");
	this.shape_16.setTransform(-77.375,317.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTA5QgJgCgJgIQgGgHgFgNQgFgLAAgQQAAgHACgMQADgJADgHQADgGAGgFIALgIQAGgDAHgCIAOgCQAMAAAJAEQAJADAFAEQAGAFAEAIQAEAIABAGIgeAJIgDgIIgEgGQgCgDgDgCQgEgBgEAAQgGAAgEACQgFADgCAEQgDAEgBAHQgCAHAAAHQAAAIACAHQABAGADAFQAEAFAEACQAEACAFAAQAFAAADgBIAGgEIAEgHIADgKIAfAHQgCAJgEAHQgEAIgGAGQgHAFgIADQgLADgKABQgKAAgLgFg");
	this.shape_17.setTransform(-88.625,317.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAUA7IgUgkIgUAkIgiAAIAlg9Igig4IAkAAIARAfIAQgfIAhAAIghA4IAlA9g");
	this.shape_18.setTransform(-100.4,317.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVA5QgIgEgIgJQgGgHgEgMQgEgKABgPQgBgOAEgLQAEgMAGgHQAIgJAIgDQAKgEALgBQANABAJAEQAJADAHAJQAHAIADALQADALAAAOQAAAPgDAKQgDALgHAIQgHAJgJAEQgJAEgNABQgLgBgKgEgAgOgaQgFAIAAASQAAASAFAJQAGAJAIAAQAKAAAFgJQAFgJAAgSQgBgSgFgIQgEgJgKAAQgJAAgFAJg");
	this.shape_19.setTransform(-111.95,317.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgiA7IAAgYIAVAAIAAhBIgKAEIgLACIAAgaQAGAAAGgCQAHgDACgDIAfAAIAABdIARAAIAAAYg");
	this.shape_20.setTransform(-121,317.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAQAwIAAgnIgfAAIAAAnIgaAAIAAhfIAaAAIAAAjIAfAAIAAgjIAaAAIAABfg");
	this.shape_21.setTransform(-0.9,302.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMAwIAAhJIgcAAIAAgWIBRAAIAAAWIgcAAIAABJg");
	this.shape_22.setTransform(-10.175,302.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMAwIAAhfIAZAAIAABfg");
	this.shape_23.setTransform(-16.6,302.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAPAwIgOg7IgOA7IgWAAIgZhfIAaAAIAMA5IAAAAIANg5IAWAAIANA5IAAAAIALg5IAYAAIgZBfg");
	this.shape_24.setTransform(-25.05,302.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-124.5,297.7,128.2,41.80000000000001), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZA4QgKgEgGgIQgHgJgDgLQgCgNAAgLQAAgOADgLQAFgLAHgIQAGgIALgEQAKgFAMAAQAJAAAIACQAHABAGAFQAIAFAEAHQAEAGAFANIgeAJIgEgLIgFgFIgFgEIgHgBIgIABQgDACgEAEQgDAFgCAFQgCAHAAAKIABANIADAKIAFAHIAFAEIAGABIADABQAIAAAGgEQAFgEADgGIgSAAIAAgXIAwAAIAAA8IgZAAIAAgPIgBAAIgCAFIgHAFIgJAGQgGABgEAAQgPABgKgGg");
	this.shape.setTransform(68.85,84.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWA7IgshBIAAAAIAABBIgfAAIAAh1IAhAAIAqBBIABAAIAAhBIAgAAIAAB1g");
	this.shape_1.setTransform(56.95,84.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPA7IAAh1IAfAAIAAB1g");
	this.shape_2.setTransform(47.75,84.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXA7IgshBIgBAAIAABBIggAAIAAh1IAiAAIArBBIAAAAIAAhBIAfAAIAAB1g");
	this.shape_3.setTransform(39,84.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOA7IgVgpIgJAAIAAApIggAAIAAh1IAvAAQAHAAANACQAJACAGAFQAGAEAEAIQADAIABAKQAAAOgHAHQgFAIgNAEIAaAtgAgQgFIAOAAQAIAAAFgDQAFgDgBgIQABgHgFgDQgFgDgIAAIgOAAg");
	this.shape_4.setTransform(27.05,84.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYA7IgHgVIgkAAIgIAVIgdAAIAqh2IAdAAIAqB2gAgMAPIAWAAIgKggIAAAAg");
	this.shape_5.setTransform(15.425,84.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrA7IAAh1IBUAAIAAAaIg0AAIAAAUIAlAAIAAAYIglAAIAAAVIA3AAIAAAag");
	this.shape_6.setTransform(4.875,84.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQA7QgIgBgGgFQgHgDgFgGQgFgFgEgGIAYgPIAGAIQADADAFADQAFADADAAIAIABIAHAAIAFgCIAEgDQABgCAAgDIgBgFIgFgEIgHgCIgcgIIgJgEQgFgCgDgEQgEgEgBgFQgCgDAAgIQAAgJADgHQADgGAGgGQAHgFAIgCQAJgCAJAAQAKAAAGACQAKADAEACQAGACAFAFIAIAIIgWASIgFgGIgHgEIgIgDIgHgCQgOAAAAAJQAAADACADIAEADQADACAEABIAbAIIAKAEQAEACAEAEQAEADACAGQACADAAAIQAAAIgDAGQgDAHgFAFQgGAFgKADQgJAEgOgBQgJABgJgDg");
	this.shape_7.setTransform(56.825,68.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPA7IAAhbIgiAAIAAgaIBjAAIAAAaIgiAAIAABbg");
	this.shape_8.setTransform(46.075,68.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAXA7IgshBIgBAAIAABBIggAAIAAh1IAjAAIAqBBIAAAAIAAhBIAfAAIAAB1g");
	this.shape_9.setTransform(34.85,68.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPA7IAAh1IAfAAIAAB1g");
	this.shape_10.setTransform(25.65,68.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNA8QgGgBgIgEQgFgCgHgGQgFgEgFgIQgEgHgCgIQgCgIAAgMQAAgLACgIQACgHAEgJQAGgHAEgEQAFgFAHgDQAGgDAIgCIANgBIAOABQAIACAGADIAMAIQAGAFADAGQAFALACAFQACAKAAAJQAAAKgCAKQgCAGgFAJQgDAGgGAGIgMAIIgOAFIgOABIgNgBgAgKgfQgFABgDAGQgDADgDAIQgBAFAAAIQAAAJABAGQADAIADADQADAFAFACQAEADAGAAQAGAAAFgDQAEgCAEgFQAEgGABgFQACgGAAgJQAAgIgCgFQgBgGgEgFQgEgGgEgBQgGgDgFAAQgFAAgFADg");
	this.shape_11.setTransform(16.675,68.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvA7IAAh1IA5AAIALADIALAEQAEACAEAFQAFAFABAGQACAGAAAJQAAAKgCAFQgCAGgEAEQgDAFgGADIgLAEIgLACIgYABIAAAlgAgPgCIAWgBIAFgDQADgCABgDIABgGIgBgGQgCgDgCgCQgBgCgEgBIgWgBg");
	this.shape_12.setTransform(5.3,68.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqA7IAAh1IBTAAIAAAaIg0AAIAAAUIAlAAIAAAYIglAAIAAAVIA2AAIAAAag");
	this.shape_13.setTransform(102.75,52.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPA7IAAhbIgiAAIAAgaIBjAAIAAAaIgiAAIAABbg");
	this.shape_14.setTransform(92.175,52.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAYA8IgHgXIgkAAIgIAXIgdAAIAqh3IAdAAIAqB3gAgMAPIAWAAIgKggIAAAAg");
	this.shape_15.setTransform(81.225,52.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAPA7IgWgpIgJAAIAAApIggAAIAAh1IAvAAQAIAAAMACQAIACAHAFQAHAFADAHQADAGAAAMQAAAOgGAHQgGAIgLAEIAZAtgAgQgFIAOAAQAJAAAEgDQAFgDAAgIQAAgHgFgDQgEgDgJAAIgOAAg");
	this.shape_16.setTransform(69.975,52.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgrA7IAAh1IBUAAIAAAaIg0AAIAAAUIAlAAIAAAYIglAAIAAAVIA3AAIAAAag");
	this.shape_17.setTransform(59.325,52.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgoA7IAAh1IAgAAIAABbIAxAAIAAAag");
	this.shape_18.setTransform(49.7,52.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgrA7IAAh1IBUAAIAAAaIgzAAIAAAUIAkAAIAAAYIgkAAIAAAVIA1AAIAAAag");
	this.shape_19.setTransform(39.8,52.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTA6QgKgEgIgHQgHgHgEgMQgFgNAAgPQAAgLACgIQACgHAEgIQAEgIAFgEQAFgFAGgDQAGgDAIgCQAGgCAHABQAMAAAJACQAJAEAFAFQAHAGACAFQAEAGACAJIgeAJIgDgIIgEgGQgDgDgDgBQgCgCgGAAQgDAAgGACQgEACgDAGQgDAEgBAGQgCAHABAHQgBAIACAHQACAHACAEQAEAEADADQAFADAFAAQAFAAADgCQAEgBACgDIAEgHIAEgKIAdAHQgBAJgFAIQgEAIgGAEQgEAFgKAEQgJADgMAAQgJAAgMgDg");
	this.shape_20.setTransform(28.55,52.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTA6QgKgEgIgHQgHgHgEgMQgFgNAAgPQAAgLACgIQADgJADgGQAEgIAFgEQAFgFAGgDQAGgDAIgCQAGgCAHABQAMAAAJACQAJAEAFAFQAHAGACAFQAEAGACAJIgeAJIgDgIIgEgGQgDgDgDgBQgCgCgGAAQgDAAgGACQgEACgDAGQgEAEAAAGQgCAHABAHQgBAIACAHQACAHACAEQAEAEADADQAFADAFAAQAFAAADgCQAEgBACgDIAEgHIAEgKIAdAHQgBAJgFAIQgEAIgGAEQgEAFgKAEQgJADgMAAQgJAAgMgDg");
	this.shape_21.setTransform(16.85,52.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAYA8IgHgXIgkAAIgIAXIgdAAIAqh3IAdAAIAqB3gAgMAPIAWAAIgKggIAAAAg");
	this.shape_22.setTransform(5.275,52.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgzA7IAAh1IA3ABQAHABAIADQAHACAHAFQAGAFAEAGQAFAJABAGQADAKAAAKQAAAKgDAKQgBAIgFAIQgEAGgGAFQgHAEgHADIgQAEIgQABgAgTAhIAJAAQAIAAAFgBQAHgDADgDQAFgGAAgFQACgGAAgJQAAgIgCgGQgBgFgEgFQgDgDgHgDQgGgCgHAAIgJAAg");
	this.shape_23.setTransform(80.55,36.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAWA7IgshBIAAAAIAABBIgfAAIAAh1IAhAAIAqBBIABAAIAAhBIAgAAIAAB1g");
	this.shape_24.setTransform(68.3,36.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAYA8IgGgXIglAAIgHAXIgeAAIAqh2IAdAAIAqB2gAgMAPIAWAAIgKggg");
	this.shape_25.setTransform(56.05,36.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgvA7IAAh1IA4AAIAMADIALAEIAIAHIAGALQACAGAAAJQAAAKgCAFQgCAGgEAEQgDAFgGADIgLAEIgMACIgXABIAAAlgAgPgCIANAAIAIgBIAHgDQACgCAAgDIABgGIgBgGQgBgDgBgCIgHgDIgIgBIgNAAg");
	this.shape_26.setTransform(41.45,36.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgNA8QgGgBgIgEIgMgIIgJgMQgEgGgDgKQgCgIAAgLQAAgLACgHIAHgQQAFgJAEgDQAGgFAGgDQAGgDAIgCIANgCIAPACQAHACAGADIAMAIQAEADAGAJQAFAJABAHQACAHAAALQAAALgCAIQgBAIgFAIIgKAMIgMAIIgNAFIgPACIgNgCgAgKggQgEADgEAEIgGALQgBAHAAAHQAAAJABAGIAGALQAEAFAEACQAFADAFAAQAGAAAFgDQAEgCAEgFQAEgGACgFQABgGAAgJQAAgHgBgHQgBgFgFgGQgEgEgEgDQgFgCgGAAQgFAAgFACg");
	this.shape_27.setTransform(29.35,36.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAUA7IAAgvIgnAAIAAAvIggAAIAAh1IAgAAIAAAsIAnAAIAAgsIAgAAIAAB1g");
	this.shape_28.setTransform(16.875,36.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgQA7QgHgBgIgEQgFgDgGgGIgJgMIAYgOIAGAHIAHAFIAJAEIAIACIAHgBIAFgCIAEgDIABgFIgCgFIgEgDIgZgIIgKgDIgJgFQgEgBgEgEQgDgCgDgHQgCgGAAgFQAAgKAEgGQACgHAHgFQAGgFAIgCQAJgCAKgBQAJAAAHACQAJADAFADIALAHIAIAJIgWASIgGgGIgHgFIgHgDIgHgBQgOAAAAAIQAAADACACIAEAEIAiALIAKAFQAFABADADQAEAFACAEQACAHAAAFQAAAHgDAGQgCAHgHAFQgGAHgJACQgJAEgPAAQgIAAgJgDg");
	this.shape_29.setTransform(5.075,36.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-0.4,30.6,107.5,60.300000000000004), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAhA7IAAhIIAAAAIgDAPIgQA5IgbAAIgQg5IgDgRIAAAAIAABKIggAAIAAh1IAuAAIATBPIABAAIAThPIAsAAIAAB1g");
	this.shape.setTransform(27.325,314.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVA5QgJgDgHgGQgGgIgDgIQgDgJAAgMIAAhGIAgAAIAABGQAAAMAFAGQAEAFAIAAQAKAAAEgFQAEgGAAgMIAAhGIAgAAIAABGQAAAKgDALQgDAIgGAIQgIAGgHADQgKADgNAAQgMAAgJgDg");
	this.shape_1.setTransform(14.075,314.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXA7IgshBIgBAAIAABBIggAAIAAh1IAjAAIAqBBIAAAAIAAhBIAfAAIAAB1g");
	this.shape_2.setTransform(2.3,314.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPA7IAAh1IAfAAIAAB1g");
	this.shape_3.setTransform(-6.9,314.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPA7IAAhbIgiAAIAAgaIBjAAIAAAaIgiAAIAABbg");
	this.shape_4.setTransform(-14.825,314.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZA8IgIgXIgkAAIgIAXIgdAAIAqh2IAdAAIAqB2gAgLAPIAVAAIgKggIAAAAg");
	this.shape_5.setTransform(-24.025,314.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoA7IAAh1IAgAAIAABbIAxAAIAAAag");
	this.shape_6.setTransform(-34.35,314.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvA7IAAh1IA4AAIAMACQAGACAFADQAEACAEAFQAEAFABAGQADAHAAAIQAAAJgDAGQgCAGgDAEQgEAFgFACIgLAFIgMACIgYAAIAAAmgAgQgCIAWgBIAHgDIADgFIAAgGIAAgGIgDgFIgHgDIgWgBg");
	this.shape_7.setTransform(-44.5,314.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPA7IAAgxIgphEIAhAAIAXAqIAZgqIAgAAIgpBEIAAAxg");
	this.shape_8.setTransform(-59.825,314.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Agvg6IAxAAIAKAAQAGAAAEACQAGABADACQAFABADAEQAEADABAFQACAEAAAHQAAAHgCAEQgBAEgEAEQgDADgFACIgJADIAAAAQAFABAGABIAIAFIAGAJQABAFAAAHQAAAHgBAFIgGAIQgDAEgFACIgJAEIgKADIg9AAgAgPAjIAPAAQAJAAADgDQAEgEABgGQgBgGgEgDQgEgDgIAAIgPAAgAgPgLIAVgBIAFgCIACgEIABgEIgBgFIgCgEIgFgCIgVgBg");
	this.shape_9.setTransform(-71.1,314.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYA5QgKgFgHgIQgGgIgDgMQgDgLAAgNQAAgOAEgLQADgKAIgJQAHgIAKgEQALgEAMAAQAIAAAHABQAIACAHAEQAGAFAFAHQAGAKACAJIgdAIIgEgJIgEgGQgDgDgDgBIgGgBQgEAAgEACQgEABgDAEQgDADgDAIQgCAFAAALIABANIADAKIAFAHIAGAEIAFABIAEABQAIAAAFgEQAFgFADgFIgSAAIAAgXIAwAAIAAA8IgZAAIAAgQIAAAAIgEAGIgFAGQgEADgFABQgFACgGAAQgOAAgKgEg");
	this.shape_10.setTransform(28.05,298.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXA7IgshBIgBAAIAABBIggAAIAAh1IAjAAIAqBBIAAAAIAAhBIAfAAIAAB1g");
	this.shape_11.setTransform(16.15,298.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPA7IAAh1IAfAAIAAB1g");
	this.shape_12.setTransform(6.95,298.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAXA7IgthBIAAAAIAABBIgfAAIAAh1IAhAAIArBBIAAhBIAgAAIAAB1g");
	this.shape_13.setTransform(-1.8,298.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPA7IAAh1IAfAAIAAB1g");
	this.shape_14.setTransform(-11,298.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzA7IAAh1IAnAAIAQABIAQAEIAMAHQAHAFAEAGQAEAGACAJQADAKAAAKQAAAKgDAKQgBAHgFAIQgFAIgGAEQgFAEgIADQgIADgIABIgPABgAgTAhIAIAAQAKAAAEgCQAHgBADgFQAEgDACgHQABgGAAgJQAAgIgBgGQgCgGgEgEQgDgDgHgDQgEgCgKAAIgIAAg");
	this.shape_15.setTransform(-19.35,298.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgrA7IAAh1IBUAAIAAAaIgzAAIAAAUIAkAAIAAAYIgkAAIAAAVIA2AAIAAAag");
	this.shape_16.setTransform(-34.8,298.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPA8Igoh3IAgAAIAXBMIAZhMIAfAAIgoB3g");
	this.shape_17.setTransform(-45.725,298.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNA8IgOgFQgGgDgGgFQgGgFgDgHQgEgGgDgJQgCgKAAgKQAAgJACgKQADgJAEgGQADgHAGgFQAEgEAIgEIAOgFIANgBQAIAAAGABQAHACAHADQAIAEAEAEQAFAEAEAIQAEAGADAJQACAKAAAJQAAAKgCAKQgDAJgEAGQgEAIgFAEQgGAFgGADQgHADgHACQgGABgIAAIgNgBgAgKgfQgGADgCADQgEAHgBAEQgCAGAAAIQAAAJACAGQABAEAEAHQADAFAFACQAEADAGAAQAHAAAEgDQAFgCADgFQAEgFABgGQACgGAAgJQAAgIgCgGQgBgGgEgFQgCgDgGgDQgEgDgHAAQgGAAgEADg");
	this.shape_18.setTransform(-57.075,298.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgoA7IAAh1IAgAAIAABbIAxAAIAAAag");
	this.shape_19.setTransform(-67.6,298.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQAwIAAgnIgfAAIAAAnIgaAAIAAhfIAaAAIAAAkIAfAAIAAgkIAaAAIAABfg");
	this.shape_20.setTransform(29.4,283.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMAwIAAhJIgcAAIAAgWIBQAAIAAAWIgbAAIAABJg");
	this.shape_21.setTransform(20.15,283.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMAwIAAhfIAZAAIAABfg");
	this.shape_22.setTransform(13.7,283.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAOAwIgNg7IAAAAIgOA7IgWAAIgZhfIAaAAIAMA5IAMg5IAXAAIAIAmIACAFIADAOIALg5IAYAAIgZBfg");
	this.shape_23.setTransform(5.275,283.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,279.1,109.7,41.799999999999955);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgoA7IAAh1IAgAAIAABbIAxAAIAAAag");
	this.shape.setTransform(82.8,85.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoA7IAAh1IAgAAIAABbIAxAAIAAAag");
	this.shape_1.setTransform(73.425,85.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPA7IAAh1IAfAAIAAB1g");
	this.shape_2.setTransform(65.6,85.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvA7IAAh1IA8AAQAFAAAFACQAFABAEACQAEABADAEQAEADABAFQACAEAAAHQAAAHgCAEIgFAIIgHAFIgJADIAKACQADABAFAEIAFAJQACAEAAAIQAAAHgCAFQgBADgEAFIgIAHIgJAEIgKACIgKAAgAgQAjIAQAAQAIAAAFgDQADgEAAgGQAAgGgDgDQgFgDgIAAIgQAAgAgQgLIAPAAIAHgBQADAAABgCQABgBABAAQAAAAABgBQAAAAAAgBQAAAAABgBIABgEIgBgFIgDgEIgFgCIgGgBIgQAAg");
	this.shape_3.setTransform(57.3,85.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzA7IAAh1IA3ABQAIABAHADQAHACAHAFQAGAFAEAGIAHAPQACAKAAAKQAAAKgCAKQgCAJgFAHQgEAGgGAFQgIAFgGACIgPAEIgQABgAgTAhIAJAAQAJAAAFgCQAGgBADgFQAEgEACgGQABgGAAgJQAAgIgBgGQgCgGgEgEQgEgEgFgCQgHgCgIAAIgIAAg");
	this.shape_4.setTransform(41.375,85.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNA8IgOgFQgFgCgHgGQgFgFgEgHQgEgHgDgJQgCgJAAgKQAAgJACgJQACgKAFgHQAEgHAFgEQAFgFAHgDQAGgEAIgBIANgCQAIAAAGACQAIABAGAEQAHADAFAFQAGAFADAGQAFAHACAKQACAJAAAJQAAAKgCAJQgDAJgEAHQgDAFgGAHQgHAGgFACIgOAFQgGABgIAAIgNgBgAgKgfQgFACgDAEQgEAFgBAHQgCAFAAAIQAAAJACAGQABAHAEAEQADAEAFADQAEADAGgBQAHABAEgDQAFgDADgEQAEgEABgHQACgGAAgJQAAgIgCgFQgBgHgEgFQgDgEgFgCQgGgDgFAAQgEAAgGADg");
	this.shape_5.setTransform(28.875,85.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNA8QgGgBgIgEQgFgCgHgGQgFgEgFgIQgEgHgCgJQgCgJAAgKQAAgJACgJQACgJAEgIQAGgHAEgEQAFgFAHgDQAGgEAIgBIANgCIAOACQAIABAGAEQAHADAFAFQAGAFADAGQAFAHACAKQACAJAAAJQAAAKgCAJQgDAJgEAHQgDAFgGAHQgHAGgFACIgOAFIgOABIgNgBgAgKgfQgFACgDAEQgEAFgBAHQgCAFAAAIQAAAJACAGQABAHAEAEQADAEAFADQAEADAGgBQAHABAEgDQAEgCAEgFQAEgGABgFQACgJAAgGQAAgGgCgHQgBgGgEgGQgEgEgEgCQgGgDgFAAQgEAAgGADg");
	this.shape_6.setTransform(16.325,85.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoA7IAAh1IBRAAIAAAaIgxAAIAAAYIAiAAIAAAYIgiAAIAAArg");
	this.shape_7.setTransform(5.95,85.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPA7IgXgpIgIAAIAAApIgfAAIAAh1IAuAAQAIAAAMACQAKACAFAFQAGAEAEAHQADAIAAAKQAAAPgFAHQgGAIgMAEIAYAtgAgQgFIAOAAQAIAAAFgDQAFgDAAgIQAAgHgFgDQgFgDgIAAIgOAAg");
	this.shape_8.setTransform(42.15,69.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVA5QgJgDgHgHQgFgFgEgKQgDgJAAgMIAAhGIAgAAIAABGQAAAMAFAGQAEAFAIAAQAKAAAEgFQAEgHAAgLIAAhGIAgAAIAABGQAAAMgDAJQgDAJgGAGQgHAHgJADQgIADgOAAQgNAAgIgDg");
	this.shape_9.setTransform(30.525,69.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNA8IgOgFIgMgIQgGgGgDgGQgEgHgDgIQgCgKAAgKQAAgJACgKQACgIAFgIQADgGAGgFIAMgIQAGgDAIgCIANgBQAIAAAGABQAIACAGADQAHADAFAFQAEAEAGAHQAEAJACAHQACAKAAAJQAAAKgCAKQgCAIgEAHQgFAIgFAEQgHAGgFACQgIAEgGABQgGACgIgBIgNgBgAgKgfQgEABgEAGQgEAFgBAGQgCAHAAAGQAAAGACAIQABAGAEAGQAEAFAEACQAEACAGAAQAIAAADgCQAFgDADgEQADgDADgJQABgFAAgJQAAgIgBgFQgDgIgDgDQgDgFgFgCQgFgDgGAAQgEAAgGADg");
	this.shape_10.setTransform(18.475,69.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPA7IAAgxIgphEIAgAAIAYAqIAZgqIAgAAIgpBEIAAAxg");
	this.shape_11.setTransform(6.525,69.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgoA7IAAh1IBRAAIAAAaIgwAAIAAAYIAhAAIAAAYIghAAIAAArg");
	this.shape_12.setTransform(71.75,53.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoA7IAAh1IBRAAIAAAaIgxAAIAAAYIAiAAIAAAYIgiAAIAAArg");
	this.shape_13.setTransform(62.4,53.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNA8QgGgBgIgEQgFgCgHgGQgFgEgFgIQgEgHgCgIQgCgKAAgKQAAgKACgJQACgIAEgHQAGgJAEgDQAFgFAHgDQAGgDAIgCIANgBIAOABQAIACAGADQAIAEAEAEQAGAFADAHQAFAHACAIQACAJAAAKQAAAKgCAKQgDAIgEAHQgDAFgGAHQgGAFgGADIgOAFIgOABIgNgBgAgKggQgFADgDAFQgEADgBAHQgCAGAAAIQAAAJACAFQABAIAEAEQADAEAFADQAEADAGAAQAHAAAEgDQAEgCAEgFQAEgFABgHQACgHAAgHQAAgFgCgJQgBgEgEgGQgEgGgEgCQgGgCgFAAQgEAAgGACg");
	this.shape_14.setTransform(51.025,53.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAnA7QgGgDgFgGQgDgEgEgJQgCgGAAgKQAAgKACgGQAEgIADgEQAFgGAGgCQAGgDAIAAQAIAAAHADQAFACAFAGQAEAEADAIQACAGAAAKQAAAKgCAGQgDAJgEAEQgFAGgFADQgIACgHAAQgHAAgHgCgAAuAGQgBAGAAAJQAAALABAEQADAGAEAAQAFAAACgGQACgEAAgLQAAgJgCgGQgCgFgFgBQgEABgDAFgAgwA8IBGh2IAbAAIhGB2gAhDARQgGgEgEgFQgFgFgCgGQgCgHAAgKQAAgKACgGQACgHAFgGQAEgFAGgDQAHgDAIAAQAIAAAGADQAGADAFAFQAEAFACAIQADAGAAAKQAAAKgDAHQgCAHgEAEQgFAFgGAEQgGACgIAAQgIAAgHgCgAg7gjQgCAHAAAIQAAAJACAGQACAFAFAAQAFAAABgFQACgEAAgLQAAgLgCgEQgBgFgFAAQgFAAgCAFg");
	this.shape_15.setTransform(31.075,53.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVA5QgKgFgGgHQgGgIgEgMQgEgLAAgOQAAgNAEgLQAEgNAGgGQAGgJAKgEQAJgFAMABQAMgBAKAFQAJAEAHAJQAGAHAEAMQAEANAAALQAAAMgEANQgDAMgHAIQgHAHgJAFQgKAFgMgBQgMABgJgFgAgOgaQgFAJAAARQAAARAFALQAFAIAJABQAKgBAFgIQAFgLAAgRQAAgRgFgJQgFgJgKAAQgJAAgFAJg");
	this.shape_16.setTransform(16.225,53.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOA7QgHAAgGgDQgFAAgFgDIgKgGIAQgVIAGADIAHADIAIADIAHABQAKAAAFgFQAEgFAAgHQAAgIgEgGQgEgEgJAAQgEgBgGADQgFADgEAFIgUgHIAFhAIBKAAIgCAYIgwAAIgCAVIAIgFIAGgBIAIAAQAKAAAHADQAIADAEAFQAFAFADAHQACAGAAAKQAAAJgDAIQgEAJgGAEQgFAFgLAEQgJADgKAAg");
	this.shape_17.setTransform(5.625,53.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNA8IgOgFIgMgIQgGgGgDgGQgEgGgDgKQgCgKAAgJQAAgJACgJQACgKAFgGQADgHAGgFIAMgIQAGgDAIgCIANgCQAIABAGABQAIACAGADQAHADAFAFQAEADAGAJQAEAHACAJQACAGAAAMQAAAMgCAHQgCAJgEAHQgFAIgFAEQgHAFgFADQgIAEgGABQgGACgIAAIgNgCgAgKggQgEADgEAEQgEAGgBAFQgCAJAAAFQAAAHACAHQABAHAEAFQAEAFAEACQAEACAGABQAIgBADgCQAFgCADgFQADgDADgJQABgFAAgJQAAgHgBgHQgDgHgDgEQgDgEgFgDQgFgCgGAAQgFAAgFACg");
	this.shape_18.setTransform(80.425,37.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPA7IAAhbIgiAAIAAgaIBjAAIAAAaIgiAAIAABbg");
	this.shape_19.setTransform(68.95,37.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgvA7IAAh1IA5AAIAMADIAKAEIAIAHQADAEADAHQACAGAAAJQAAAKgCAFQgCAGgEAEQgEAFgFADIgKAEIgMACIgYABIAAAlgAgPgCIANAAIAJgBIAFgDQADgCAAgDIABgGIgBgGQgBgDgCgCIgFgDIgJgBIgNAAg");
	this.shape_20.setTransform(54.9,37.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVA5QgKgDgGgHQgGgFgDgKQgDgJAAgMIAAhGIAgAAIAABGQAAAMAFAGQAEAFAIAAQAKAAAEgFQAEgGAAgMIAAhGIAgAAIAABGQAAAMgDAJQgDAKgGAFQgHAHgIADQgKADgNAAQgNAAgIgDg");
	this.shape_21.setTransform(43.35,37.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPA7IAAhbIgiAAIAAgaIBjAAIAAAaIgiAAIAABbg");
	this.shape_22.setTransform(28.45,37.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgqA7IAAh1IBTAAIAAAaIg0AAIAAAUIAlAAIAAAYIglAAIAAAVIA2AAIAAAag");
	this.shape_23.setTransform(18.45,37.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgZA4QgKgEgGgIQgGgIgDgMQgDgLAAgNQAAgOADgLQAEgJAIgKQAHgIAKgEQAKgEAMgBQAJABAIABQAIACAGAEQAHAFAFAHQAFAJADAKIgeAIIgEgKIgEgGQgDgCgDgBIgHgBQgDAAgEABQgEACgEAEQgCADgDAIQgCAFAAALIABANIADAKIAFAGIAFAFIAGACIAEAAQAIgBAFgDQAGgDACgIIgRAAIAAgWIAvAAIAAA8IgZAAIAAgPIgBAAIgCAEIgGAHIgJAEIgLADQgPgBgKgFg");
	this.shape_24.setTransform(6.7,37.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,31.1,86.10000000000001,60.300000000000004);


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
	this.shape.setTransform(64.5092,39.8038,1.0052,1.0081);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKARIAAggIAKAAIAAAFIABgCIACgCIAHgCIABAAIAAAJIgBAAIgBgBIgBAAIgDABIgCABIgCABIgBACIAAAUg");
	this.shape_1.setTransform(61.2926,40.3835,1.0052,1.0081);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJARIgDgCQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgBgEIABgFIAEgDIAHgCQADgCAFAAIAAgBIgBgDIgDgBIgFACIgFADIgEgGIACgCIAEgCIAFgCIAEAAIAGABIAEACIACAEIABAGIAAAMIABAIIgKAAIgBgDIAAgCIgFAEQgCABgDAAgAgCADQgBAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAIABADIADABIADgBIADgCIAAgGIgHACg");
	this.shape_2.setTransform(58.076,40.4087,1.0052,1.0081);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAXQgFgCgCgDQgDgDgCgEQgBgFAAgGQAAgFABgEQACgFADgDQADgDAEgBIAGgCQAFAAADACQADAAADADIADAEQACADAAADIgKADIgBgEIgCgDIgCgBIgEgBIgDABIgDADIgDAFIAAAFIAAAHIADAFQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAIAEABIAEgBIACgCIACgDIACgEIAJACIgDAHIgDAFIgGADIgIABIgGgBg");
	this.shape_3.setTransform(53.9296,39.7534,1.0052,1.0081);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAFAXIgFgBIgEgCIgBgEIgBgDIAAgQIgFAAIAAgHIAFAAIAAgLIAJAAIAAALIAJAAIAAAHIgJAAIAAAOIABADIACABIAFAAIAAgBIAAAIIgCAAIgCABg");
	this.shape_4.setTransform(48.7278,39.8794,1.0052,1.0081);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAXIAAggIAJAAIAAAggAgEgOIAAgIIAJAAIAAAIg");
	this.shape_5.setTransform(46.3907,39.8038,1.0052,1.0081);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAWIgFgDIgCgFIgBgIIABgGIACgGIAFgDQACgBADAAQADAAACABIAEAEIAAgRIAKAAIAAApIABAEIgLAAIAAgBIAAgCIAAgCIgCACIgCABIgCACIgEAAgAgFAAQgBACAAAEIAAAEIABADIACACIADABIADgBIABgBIACgCIAAgMIgEgBIgCgBQgDAAgCACg");
	this.shape_6.setTransform(43.3752,39.8038,1.0052,1.0081);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEAQIgGgCIgDgGQgCgDAAgFIABgFIACgEIADgDIADgCIAEgCIADAAIADAAIAEABIAGAGIABAFIABAFIAAACIgVAAIABADIACADIACABIACAAIAFgBIAFgDIADAGIgGAEIgIABIgFgBgAgCgHIgCACIgBADIAMAAIgCgFQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgBAAg");
	this.shape_7.setTransform(39.4801,40.4087,1.0052,1.0081);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKARIAAggIAKAAIAAAFIAAAAIABgCIACgCIAIgCIAAAJIgBAAIAAgBIgCAAIgDABIgCABIgDADIAAAUg");
	this.shape_8.setTransform(36.364,40.3835,1.0052,1.0081);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAXQgEgCgCgDQgDgDgCgEQgBgFAAgGQAAgFABgEQACgFADgDQADgDADgBIAHgCQAFAAADACQADAAADADIADAEIACAGIgKADIgBgEIgCgDIgCgBIgEgBIgDABIgEADIgCAFIAAAFIAAAHIACAFIAEADIADABIAFgBIACgCIACgDIABgEIAKACIgDAHIgDAFQgDACgDABIgIABIgHgBg");
	this.shape_9.setTransform(32.5694,39.7534,1.0052,1.0081);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPARIAAgWIgBgCIgBgBIgBAAIgEABIgDACIAAAWIgJAAIAAgUIgBgEIgBgBIgCAAIgDABIgDACIAAAWIgKAAIAAggIAKAAIAAAFIAEgEIADgCIAEAAIADAAIAEADIABADIABgCIADgCIAGgCIAFABIADACIACADIAAAEIAAAXg");
	this.shape_10.setTransform(25.709,40.3835,1.0052,1.0081);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAQIgDgBIgCgDIgBgFIAAgXIALAAIAAAUIABAEIACABIADgBIAEgCIAAgWIAKAAIAAAgIgKAAIAAgFIgFAEIgCABIgEABg");
	this.shape_11.setTransform(20.7082,40.4591,1.0052,1.0081);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAGARIAAgUIgBgEQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBgBgBAAIgCABIgDACIAAAWIgKAAIAAggIAKAAIAAAFIABgCIACgCIADgCIAEAAIADAAIAEACIACAEIAAAEIAAAXg");
	this.shape_12.setTransform(16.7377,40.3835,1.0052,1.0081);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEAXIAAggIAJAAIAAAggAgEgOIAAgIIAJAAIAAAIg");
	this.shape_13.setTransform(13.7472,39.8038,1.0052,1.0081);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAFAXIgFgBIgEgCIgBgEIgBgDIAAgQIgFAAIAAgHIAFAAIAAgLIAJAAIAAALIAJAAIAAAHIgJAAIAAAOIABADIACABIAFAAIAAgBIAAAIIgCAAIgCABg");
	this.shape_14.setTransform(11.3348,39.8794,1.0052,1.0081);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJARIgDgCQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgBgEIABgFIAEgDIAHgCQADgCAFAAIAAgBIgBgDIgDgBIgFACIgFADIgEgGIACgCIAEgCIAFgCIAEAAIAGABIAEACIACAEIABAGIAAAMIABAIIgKAAIgBgDIAAgCIgFAEQgCABgDAAgAgCADQgBAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAIABADIADABIADgBIADgCIAAgGIgHACg");
	this.shape_15.setTransform(8.0679,40.4087,1.0052,1.0081);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEAXIAAgtIAJAAIAAAtg");
	this.shape_16.setTransform(5.2785,39.7786,1.0052,1.0081);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAXIAAgtIARAAIAIABIAEACQAAAAABAAQAAABAAAAQABAAAAABQAAAAABAAIACAFIABAEIgBAGIgCADIgDADIgEACIgIABIgHAAIAAAQgAgHAAIAHAAIADgBIADgBQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIABgDIgBgDIgBgCIgDgBIgDgBIgHAAg");
	this.shape_17.setTransform(2.2881,39.7786,1.0052,1.0081);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEANIgFgDIgDgEIgBgGQAAgCABgDQABgDACgBQABgCAEgBIAEgBIAGABQADABABACQACABABADQABADABACQgBADgBACQgBADgCACIgEADIgGABgAgDgKIgFACIgCAEIgBAEIABAFIACADIAFADIADABQABAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIADgDIADgDIABgFIgBgEIgDgEIgDgCIgFgBgAADAHIgDgGIgBAAIAAAGIgDAAIAAgOIAEAAIAFABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABIAAACQgBAAAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAIAEAGgAgBAAIABAAIACgBIABgBIgBgCIgCgBIgBAAg");
	this.shape_18.setTransform(67.2986,31.487,1.0052,1.0081);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHAQIgEgCIgCgCIAEgFIAEADIADABIACABIAFgBQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAgBIgBgBIgBgBIgDgBIgCgBIgCAAIgGgDIgCgBIgBgCIgBgDIABgEIADgDIADgCIAFgBIAEABIADABIAGACIgEAGIgEgDIgFgBIgCAAIgBABIgBABIgBACIABABIACACIAEABIAIACIACACIACAFQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBABAAAAIgEABIgJABg");
	this.shape_19.setTransform(64.0066,33.0747,1.0052,1.0081);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAQIgGgEIAEgFIACACIAFACIACABIAFgBQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAgBIgBgBIgBgBIgDgBIgCgBIgCAAIgGgDIgCgBIgBgCIgBgDIABgEIADgDIADgCIAFgBIAEABIADABIAGACIgEAGIgEgDIgFgBIgCAAIgBABIgBABIgBACIABABIACACIAEABIAIACIACACIACACIAAADIgBAFIgDADIgEABIgJABg");
	this.shape_20.setTransform(60.7398,33.0747,1.0052,1.0081);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEAQIgFgDIgDgFQgCgDAAgFIABgEIACgFIAFgFIAHgCIAEABIADABIADACIACADQAAABABAAQAAABAAAAQAAABAAABQABAAAAABIAAAFIAAACIgVAAIAAADIADADQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIACAAIAEAAIAEgCIACgCIAEAFIgGADQgEACgEAAgAgBgJIgCABIgCADIgBADIAOAAQAAgEgCgCQgBgCgFAAg");
	this.shape_21.setTransform(57.3473,33.0747,1.0052,1.0081);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJARIAAggIAIAAIAAAFIABgCIAFgDIAEgBIABAAIgBAHIgBAAIgDABIgEABIgCAEIAAAUg");
	this.shape_22.setTransform(54.5327,33.0495,1.0052,1.0081);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPAXIAAgsIAIAAIAAAEIACgCIACgBIADgBIACgBIAGABIAEADIADAGIABAHIgBAGQgCAEgCACIgEADIgGABIgDgBQgEAAgBgDIAAAQgAgBgPIgFACIgBACIAAAMIADADIAEABQADAAADgDQACgDAAgEQAAgEgCgEQgCgCgEgBg");
	this.shape_23.setTransform(51.2659,33.6796,1.0052,1.0081);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAHAQIgHgLIgHALIgIAAIAMgQIgLgPIAIAAIAGAKIAHgKIAIAAIgLAPIAMAQg");
	this.shape_24.setTransform(47.6472,33.0747,1.0052,1.0081);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOAXIAAgtIAcAAIAAAHIgUAAIAAAMIAOAAIAAAFIgOAAIAAAOIAVAAIAAAHg");
	this.shape_25.setTransform(44.0788,32.4194,1.0052,1.0081);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAHARIAAgVQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAAAIgEgBIgEABIgEADIAAAWIgIAAIAAggIAIAAIAAAFIACgCIADgCIACgBIAEgBIAEABIADACIACADIABAEIAAAXg");
	this.shape_26.setTransform(38.7764,33.0495,1.0052,1.0081);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAQIgDgBIgCgDIgBgEIACgEQAAgDADgBQADgCAEAAIAJgCIAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAIgCAAIgDABIgFAEIgDgFIADgCIAIgDIADgBIAGABIADACIADADIAAAGIAAASIABACIgHAAIgBgBIAAgCIgGADIgGABgAgDADQgDABgBADQAAABABAAQAAABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIAEgBIAFgDIAAgHIgKADg");
	this.shape_27.setTransform(35.0824,33.0747,1.0052,1.0081);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEAQIgFgDIgDgFQgCgDAAgFIABgEIACgFIAGgFIADgBIADgBIAFABIAEACIADADIACAEIgHACQAAgDgCgCIgFgBIgCABIgDACIgBADIgBAEQAAAGACACQACADADAAIAEgBIACgCIACgDIAGACIgCAFIgDADIgEABIgFABg");
	this.shape_28.setTransform(31.6396,33.0747,1.0052,1.0081);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDAWIAAgfIAHAAIAAAfgAgDgPIAAgHIAHAAIAAAHg");
	this.shape_29.setTransform(29.1015,32.4699,1.0052,1.0081);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJARIAAggIAIAAIAAAFIABgCIAFgDIAFgBIAAAAIAAAHIgCAAIgEABIgCABIgCACIgBACIAAAUg");
	this.shape_30.setTransform(27.1665,33.0495,1.0052,1.0081);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEAQIgFgDIgEgFIgBgIIABgEIACgFIACgDIAEgCIADgBIACgBIAEABIADABIADACIADADIACAFIAAAFIAAACIgWAAIACADIABADIADACIACAAIADAAIAEgCIACgCIAFAFIgHADQgDACgEAAgAgBgJIgCABIgCADIgCADIAPAAQAAgDgCgDQgCgCgEAAg");
	this.shape_31.setTransform(23.975,33.0747,1.0052,1.0081);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AARARIAAgVIgBgCIAAgCIgBgBIgDAAIgEABIgEADIAAAWIgHAAIAAgXIgBgCIgBgBIgDAAIgEABIgCABIgCACIAAAWIgIAAIAAggIAIAAIAAAEIACgCIADgBIADgBIAEgBIADABIABABIACABIACADIAEgEIADgBIAEgBIAEABIADACIACADIABAEIAAAXg");
	this.shape_32.setTransform(19.3512,33.0495,1.0052,1.0081);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAMAXIgEgLIgQAAIgEALIgHAAIAQgtIAGAAIARAtgAgGAGIAMAAIgGgSg");
	this.shape_33.setTransform(14.3252,32.4194,1.0052,1.0081);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAQIgFgDQgDgCgBgDQgBgDAAgFIAAgEIACgFIAHgFIADgBIADgBIADABIAEABIADACIACADIABAFIABAFIAAACIgVAAIABADIABADQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAIADAAIACAAIAFgCIACgCIADAFIgFADQgEACgEAAgAgBgJIgDABIgBADIgBADIAOAAQAAgDgCgDQgCgCgDAAg");
	this.shape_34.setTransform(8.9977,33.0747,1.0052,1.0081);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAHAXIAAgWQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgEABIgEACIAAAXIgIAAIAAgtIAIAAIAAASIAEgEIADgBIAEAAIAEAAIADACIACADIAAAEIAAAXg");
	this.shape_35.setTransform(5.3791,32.4194,1.0052,1.0081);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDAXIAAglIgOAAIAAgIIAjAAIAAAIIgOAAIAAAlg");
	this.shape_36.setTransform(1.5342,32.469,1.0052,1.0081);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-0.2,30.1,69,12.100000000000001), null);


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
	this.shape.setTransform(-136.9184,353.6197,1.1312,1.1307);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAeIAAg7IAGAAIAAA7g");
	this.shape_1.setTransform(-140.6513,351.7541,1.1312,1.1307);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAeIAAg6IAHAAIAAAGIAFgFQAEgCAEABIAHAAQADACACADIAEAGIABAKQAAAGgBADQgBADgDAEIgFAEIgIABQgDAAgDgBIgGgFIAAAWgAgGgVIgFAFIAAASQAFAGAGAAQAHAAACgDQADgEAAgIQAAgIgDgEQgEgDgEAAQgEAAgDABg");
	this.shape_2.setTransform(-144.6669,353.5632,1.1312,1.1307);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAeIAAg6IAHAAIAAAGIAGgFQACgCAFABIAHAAIAFAFIAEAGIABAKIgBAJIgEAHIgGAEIgHABIgGgBIgGgFIAAAWgAgFgVIgGAFIAAASQAGAGAFAAQAGAAADgDQADgEAAgIQAAgHgDgFQgEgDgFAAQgCAAgDABg");
	this.shape_3.setTransform(-150.351,353.5632,1.1312,1.1307);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOATQgDgDAAgFIABgGQACgDADgCIAJgDQAFgCAHAAIAAgCQAAgIgIAAQgDAAgEACIgHAEIgEgEQAEgEAFgCQAEgCAGAAIAGABQADABACACIACAEIABAeIABAEIgHAAIgBgCIAAgEQgHAHgIAAQgFAAgEgDgAAAABIgGACIgDADIgBAEQAAABAAABQAAAAAAABQAAAAABABQAAAAABABQABABAEAAQADAAAEgBIAGgFIAAgLg");
	this.shape_4.setTransform(-156.0068,352.6869,1.1312,1.1307);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJATQgDgBgEgDIAEgFIAGAFQADABADAAQAGAAACgBQACgCAAgEQAAgCgCgCIgOgEIgEgCIgEgEIgBgEIABgFIADgDIAFgDIAGgBQAFAAAEACQADABADADIgDAFIgGgEQgDgBgDgBQgEABgCABIgCAEQAAADACABIAOAFIAFABIADAEQABADAAACQAAADgBADQgBACgDACIgFACIgHABQgEAAgFgDg");
	this.shape_5.setTransform(-163.4725,352.7152,1.1312,1.1307);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAdQgEgCgEgEQgEgGgBgEQgCgHAAgGIACgMIAFgJQAEgEAEgCQAFgDAEAAQAFAAADACIAHADQADADACADIACAIIgHABQgCgGgDgEQgEgDgGAAQgDAAgDACQgEABgCADQgCADgBAFIgCAJQAAAMAFAGQAFAGAHAAQANAAADgOIAHACQgBAEgCAEIgFAGIgHAEIgIABQgFAAgEgCg");
	this.shape_6.setTransform(-169.0435,351.7259,1.1312,1.1307);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATAdIgIgEIgIAEQgDACgGAAIgIgBIgHgEIgDgFQgCgCAAgEQAAgDACgDQAAgCADgDIAEgEIAFgCIgDgHIgBgGIABgGIADgEIAEgDQADgCAEAAIAEABIAEADIADAEIABAEQAAAEgCACIgDAEIgEAEIgFADIANARIAEgHIACgJIAHAAIgDALIgFAJIAGADIAGABIAAAHgAgQAHQgCADAAAEQAAAFADADQADADAHAAQAHAAAEgEIgFgFIgEgHIgDgEIgDgEIgHAGgAgHgWQgCADAAADIABAGIACAFIAFgCIACgDIACgDIABgEQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgCgCAAQgEAAgCACg");
	this.shape_7.setTransform(-175.7456,351.7259,1.1312,1.1307);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDAeIAAg0IgSAAIAAgHIArAAIAAAHIgTAAIAAA0g");
	this.shape_8.setTransform(-182.1367,351.7541,1.1312,1.1307);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-184.6,-1.9,183.9,358.79999999999995), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAPA7IgXgpIgIAAIAAApIgfAAIAAh1IAuAAQALAAAIACQAJACAHAEQAGAFADAHQAEAHAAALQAAAPgGAHQgGAIgLAEIAZAtgAgQgFIAOAAQAJAAAEgDQAEgDABgIQgBgHgEgDQgEgDgJAAIgOAAg");
	this.shape.setTransform(-31.35,333.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZA8IgIgXIgkAAIgIAXIgdAAIAqh2IAdAAIAqB2gAgMAPIAWAAIgKggg");
	this.shape_1.setTransform(-43,333.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqA7IAAh1IBTAAIAAAaIg0AAIAAAUIAlAAIAAAYIglAAIAAAVIA2AAIAAAag");
	this.shape_2.setTransform(-53.55,333.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPA7IAAgxIgphEIAhAAIAXAqIAZgqIAgAAIgpBEIAAAxg");
	this.shape_3.setTransform(-64.625,333.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZA8IgIgXIgkAAIgIAXIgdAAIAqh2IAdAAIAqB2gAgLAPIAVAAIgKggIAAAAg");
	this.shape_4.setTransform(-79.375,333.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrA7IAAh1IBUAAIAAAaIgzAAIAAAUIAkAAIAAAYIgkAAIAAAVIA2AAIAAAag");
	this.shape_5.setTransform(-93.85,333.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTA6QgJgDgIgIQgIgHgFgMQgDgMAAgQQAAgLABgIQACgIAEgHQAEgHAFgFQADgDAIgFQAGgDAHgCQAIgBAGAAQAMAAAIADQALADAEAFQAHAGACAGIAGAOIgfAJIgCgIIgEgGQgCgDgDgBQgEgCgFAAQgEAAgEADQgFACgDAEQgDAFgBAGQgCAHAAAHQAAAIACAHQABAHADAEQAEAGAEABQADADAGAAQAFAAADgCQAFgBABgDIAEgHIADgKIAfAHQgDAJgEAIQgEAIgFAFQgHAFgIADQgJADgMAAQgLAAgKgDg");
	this.shape_6.setTransform(-105.1,333.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPA7IAAh1IAfAAIAAB1g");
	this.shape_7.setTransform(-113.65,333.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AASA7IgQhJIgRBJIgcAAIgfh1IAgAAIAPBGIABAAIAOhGIAcAAIAPA/IABAHIAAAAIAOhGIAdAAIgeB1g");
	this.shape_8.setTransform(-124.075,333.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPA7IAAhbIgiAAIAAgaIBjAAIAAAaIgiAAIAABbg");
	this.shape_9.setTransform(-136.925,333.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAQA7IgbgvIgJAKIAAAlIgfAAIAAh1IAfAAIAAArIAggrIAlAAIgoAvIArBGg");
	this.shape_10.setTransform(-31.25,317.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTA5QgIgCgJgIQgIgIgEgMQgFgLAAgQQAAgJADgKQABgIAEgIIAJgLIALgIQAGgDAIgCQAHgBAGgBQANAAAIAEQAIADAGAEQAGAFAEAIIAFAOIgeAJIgDgIIgEgGQgCgDgDgCQgDgBgFAAQgGAAgDACQgFADgDAEQgDAEgBAHIgBAOQAAAIABAHQABAGADAFQAEAFAEACQAEACAFAAQAFAAADgBQAFgCABgCIAEgHIAEgKIAeAHQgCAJgEAHQgEAIgGAGQgHAFgIADQgKADgLABQgKAAgLgFg");
	this.shape_11.setTransform(-43.425,317.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAYA7IgHgVIgkAAIgIAVIgdAAIAqh1IAdAAIAqB1gAgMAOIAWAAIgKgfg");
	this.shape_12.setTransform(-55,317.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgvA7IAAh1IAyAAIAKAAQAFAAAFACQAFABAEACQADABAEAEQADADACAFQACAEAAAHQAAAHgCAEQgBAEgEAEQgDADgEACIgJADIAAAAQAEABAGABIAIAFQAEAFABAEQACAEAAAIQAAAHgBAFIgGAIQgDAEgFACIgJAEIgKADIgKAAgAgPAjIAPAAQAJAAAEgDQADgEAAgGQAAgGgDgDQgFgDgIAAIgPAAgAgPgLIAVgBIAFgCIADgEIAAgEIAAgFIgDgEIgFgCIgVgBg");
	this.shape_13.setTransform(-66.35,317.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVA5QgJgEgHgJQgHgJgDgKQgEgNAAgMQAAgLAEgOQADgKAHgJQAIgJAIgDQAKgEALgBQAMABAKAEQAIADAIAJQAHAJADAKQAEALAAAOQAAAPgEAKQgDAKgHAJQgHAJgJAEQgKAEgMABQgLgBgKgEgAgOgaQgFAIAAASQAAASAFAJQAFAJAJAAQAKAAAFgJQAFgJAAgSQAAgRgFgJQgFgJgKAAQgJAAgFAJg");
	this.shape_14.setTransform(-82.225,317.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVA5QgJgEgHgJQgGgIgEgLQgEgNAAgMQAAgLAEgOQAEgLAGgIQAHgJAJgDQAKgEALgBQAMABAKAEQAIADAIAJQAGAHAEAMQAEALAAAOQAAAPgEAKQgEAMgGAHQgHAJgJAEQgKAEgMABQgLgBgKgEgAgOgaQgFAIAAASQAAASAFAJQAFAJAJAAQAKAAAFgJQAFgJAAgSQAAgSgFgIQgFgJgKAAQgJAAgFAJg");
	this.shape_15.setTransform(-93.475,317.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgiA7IAAgYIAVAAIAAhBIgKAEIgLACIAAgaQAFAAAHgCQAGgCADgEIAeAAIAABdIASAAIAAAYg");
	this.shape_16.setTransform(-102.525,317.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIBJIAAgNQgHgBgIgDIgLgFIgIgIQgEgEgEgGIAVgOIAKAMIAFAEIAHACIAAgbIgQgEQgGgCgGgEQgGgDgEgHQgDgFgBgKQAAgHAEgHQACgGAFgFQAFgFAJgCQAGgDAKgBIAAgLIASAAIAAALQAHACAFACQAEAAAGAEIAIAHIAHAHIgXAPIgGgHQgEgEgFgCIAAAZIARAFQAGACAHAEQAGAEADAGQADAGAAAIQAAAHgCAGQgCAFgGAGQgEAFgIADQgIAEgLABIAAANgAAJAmQAFAAADgEQACgEABgEQgBgEgCgDQgCgCgGgCgAgPgjQgCAEAAADIABAEIABAEIADACIAFACIAAgXQgGABgCADg");
	this.shape_17.setTransform(-111.5,317.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQA7QgIgCgGgEQgIgEgEgFQgFgEgEgHIAYgOIAGAHIAHAGIAJADIAIABIAHAAIAGgCIADgDIABgFIgCgFIgEgDIgHgDIgbgIIgKgEIgIgGQgDgDgDgFQgBgFAAgHQAAgJADgHQADgHAGgFQAGgFAJgCQAHgCALAAQAKAAAGACQAGABAIAEIALAHIAIAJIgWARIgGgFQgDgDgDgCIgIgDIgHgBQgOAAAAAIQAAAEACABIAEAEIAHADIAbAIIAKAEIAIAGQAEAEACAEQACAGAAAGQAAAHgDAHQgCAGgGAGQgHAGgJACQgJADgPAAQgKAAgHgCg");
	this.shape_18.setTransform(-122.9,317.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMAwIAAhJIgcAAIAAgWIBRAAIAAAWIgcAAIAABJg");
	this.shape_19.setTransform(-29.725,302.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgiAwIAAhfIBDAAIAAAWIgpAAIAAAPIAdAAIAAAUIgdAAIAAARIArAAIAAAVg");
	this.shape_20.setTransform(-37.825,302.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTAuQgJgDgFgIQgFgGgDgJQgCgLAAgJQAAgLADgJQAEgKAFgGQAFgGAJgEQAIgDAKAAQAIAAAGABQAEABAHAEQAGAEAEAGQAEAIACAHIgYAHIgDgIIgEgFIgEgDIgGgBQgCAAgEACQgDABgDADQgDAEgBAFQgCAHAAAGIABALIADAIIAEAFIAEADIAFACIACAAQAHAAAEgDQAEgCACgHIgNAAIAAgSIAmAAIAAAxIgUAAIAAgNIgDAFQgCADgDABIgHAEQgEACgFAAQgKAAgJgEg");
	this.shape_21.setTransform(-47.4,302.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgqgvIAtAAIANAEQAHADAEADQADADAFAFQADAEADAJQACAJAAAHQAAAGgCAKIgGANQgDAFgFAEQgGAEgFACQgHACgGABIgtABgAgPAbIAHAAQAIAAADgCQAEgBAEgDQADgDABgGQABgFABgHQgBgGgBgFQgBgEgDgFQgDgCgFgCQgEgBgIAAIgGAAg");
	this.shape_22.setTransform(-60.35,302.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AATAwIglg1IAAA1IgZAAIAAhfIAbAAIAjA0IAAg0IAZAAIAABfg");
	this.shape_23.setTransform(-70.3,302.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAUAwIgGgSIgdAAIgHASIgXAAIAihfIAXAAIAiBfgAgJAMIARAAIgIgaIAAAAg");
	this.shape_24.setTransform(-80.225,302.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-141.9,297.3,116.30000000000001,42), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgQA8QgIgDgHgEQgFgCgGgHQgFgEgEgHIAYgPIAGAIIAHAGQAEADAFAAIAIABIAHAAIAFgCIAEgDQABgCAAgDQAAgCgCgDIgEgEIgZgHIgKgDQgFgBgEgEQgEgCgEgCIgGgJQgCgHAAgFQAAgIAEgIQACgGAHgGQAHgFAHgCQAKgDAJAAQAJAAAHADQAJACAFADQAHAEAEAEQAFAEADAEIgWASIgGgHIgHgEIgHgEIgHgBQgOAAAAAJQAAAEACACIAEADIAiALQAFACAFADQAFABADAEIAGAJQACAGAAAFQAAAGgDAHQgDAHgGAGQgGAFgJADQgJADgPAAQgGAAgLgBg");
	this.shape.setTransform(83.725,86.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPA7IgXgpIgIAAIAAApIgfAAIAAh1IAuAAQAJAAAKACQAIACAIAFQAHAFACAHQAEAGAAAMQAAAOgGAHQgGAJgLADIAZAtgAgQgFIAOAAQAJAAAEgDQAEgDABgIQgBgHgEgDQgEgDgJAAIgOAAg");
	this.shape_1.setTransform(72.7,86.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrA7IAAh1IBUAAIAAAbIg0AAIAAATIAlAAIAAAYIglAAIAAAVIA3AAIAAAag");
	this.shape_2.setTransform(62.025,86.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXA7IgthBIAABBIggAAIAAh1IAiAAIArBBIAAhBIAgAAIAAB1g");
	this.shape_3.setTransform(50.625,86.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPA7IAAhaIgiAAIAAgbIBjAAIAAAbIgiAAIAABag");
	this.shape_4.setTransform(38.95,86.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPA7IgWgpIgJAAIAAApIggAAIAAh1IAvAAQAKAAAKACQAHACAIAFQAHAFADAHQADAGAAAMQAAAOgGAHQgGAJgLADIAZAtgAgQgFIAOAAQAJAAAEgDQAFgDAAgIQAAgHgFgDQgEgDgJAAIgOAAg");
	this.shape_5.setTransform(28.275,86.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZA7IgIgWIgkAAIgIAWIgdAAIAqh1IAdAAIAqB1gAgLAPIAVAAIgKggIAAAAg");
	this.shape_6.setTransform(16.625,86.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvA7IAAh1IAtAAIAMABIALACIALAEQAEACAEAFQAFAFABAGQACAGAAAJQAAAKgCAGQgCAFgEAEQgDAFgGADIgLAEIgLACIgYABIAAAlgAgPgCIAWgBIAFgDQADgCABgDIABgGIgBgGIgEgFQgBgCgEgBQgDgBgFAAIgOAAg");
	this.shape_7.setTransform(5.8,86.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrA7IAAh1IBUAAIAAAbIgzAAIAAATIAkAAIAAAYIgkAAIAAAVIA1AAIAAAag");
	this.shape_8.setTransform(107.9,70.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoA7IAAh1IAgAAIAABbIAxAAIAAAag");
	this.shape_9.setTransform(98.275,70.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPA7IAAgxIgphEIAhAAIAXAqIAZgqIAgAAIgpBEIAAAxg");
	this.shape_10.setTransform(87.475,70.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPA7IAAhaIgiAAIAAgbIBjAAIAAAbIgiAAIAABag");
	this.shape_11.setTransform(76.575,70.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQA7QgHgBgIgFQgFgCgGgHQgGgFgDgGIAYgPQADAFADADIAHAGQAEACAFABIAIABIAHAAIAGgCIADgDIABgFIgCgFIgFgEIgGgCIgRgFIgKgDQgGgBgEgDQgFgDgDgDQgDgDgCgGQgCgDAAgIQgBgJAEgHQADgGAGgGQAGgFAJgCQAIgCAKAAQAJAAAIACQAIACAFADQAGADAFAEIAIAJIgVARIgHgGIgGgEIgIgDIgHgCQgOAAAAAJQAAADABADIAFADIAiALQAGABAEADQAGACACAEQAEADACAGQACAFAAAGQAAAHgDAHQgCAGgHAGQgGAFgJADQgJAEgPgBQgGAAgLgCg");
	this.shape_12.setTransform(65.75,70.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrA7IAAh1IBUAAIAAAbIgzAAIAAATIAkAAIAAAYIgkAAIAAAVIA2AAIAAAag");
	this.shape_13.setTransform(55.4,70.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoA7IAAh1IBRAAIAAAbIgxAAIAAAXIAiAAIAAAYIgiAAIAAArg");
	this.shape_14.setTransform(45.775,70.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPA7IAAh1IAfAAIAAB1g");
	this.shape_15.setTransform(37.95,70.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoA7IAAh1IAgAAIAABbIAxAAIAAAag");
	this.shape_16.setTransform(30.975,70.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPA7IAAhaIgiAAIAAgbIBjAAIAAAbIgiAAIAABag");
	this.shape_17.setTransform(16.725,70.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAYA7IgHgWIgkAAIgIAWIgdAAIAqh1IAdAAIAqB1gAgMAPIAWAAIgKggIAAAAg");
	this.shape_18.setTransform(5.775,70.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVA5QgKgFgGgHQgHgJgDgLQgDgLAAgOQAAgOADgKQADgLAHgIQAGgIAKgFQAKgFALABQAMgBAKAFQAJAEAHAJQAGAGAEANQADAKAAAOQAAAOgDALQgEAMgGAIQgHAHgJAFQgKAFgMgBQgLABgKgFgAgOgaQgFAJAAARQAAATAFAJQAGAIAIABQAKgBAFgIQAEgJAAgTQAAgRgEgJQgGgJgJAAQgKAAgEAJg");
	this.shape_19.setTransform(46.25,54.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVA5QgJgFgHgHQgHgJgDgLQgDgLAAgOQAAgOADgKQADgLAHgIQAHgJAJgEQAKgFALABQAMgBAKAFQAJAEAHAJQAHAIADALQADAKAAAOQAAAOgDALQgDALgHAJQgHAHgJAFQgKAFgMgBQgLABgKgFgAgOgaQgFAJAAARQAAATAFAJQAGAIAIABQAKgBAFgIQAEgJAAgTQAAgRgEgJQgGgJgJAAQgKAAgEAJg");
	this.shape_20.setTransform(35,54.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AghA7IAAgYIATAAIAAhBIgEADIgLACIgFABIAAgaQAFAAAHgCQAGgDADgDIAfAAIAABdIARAAIAAAYg");
	this.shape_21.setTransform(25.95,54.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIBJIAAgOIgPgDQgHgCgDgDIgJgIIgIgKIAVgNIAKALIAFAEIAHADIAAgbIgQgFQgGgCgGgEQgGgDgEgGQgDgGgBgJQAAgIAEgHQADgHAEgEQAFgFAJgDQAGgCAKgBIAAgLIASAAIAAAMQAGAAAGACIAKAGIAIAFIAHAIIgXAPIgGgIQgEgDgFgCIAAAZQAKACAHADQAJAEAEADQAGADADAGQADAGAAAIQAAAIgCAFQgDAHgEAEQgEAEgJAFQgJADgKAAIAAAOgAAJAnQAGgCACgDQACgDABgEQgBgEgCgDQgCgEgGgCgAgOgiQgDADAAAEIABAEIACADIACADIAFACIAAgYQgFABgCAEg");
	this.shape_22.setTransform(16.95,54.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQA7QgIgBgHgEQgFgEgGgFQgFgFgEgHIAYgOIAGAHIAHAFQAEADAFABIAIACIAHgBIAFgCIAEgDIABgFIgCgFIgEgDIgZgIIgKgDQgFgBgEgDQgEgCgEgEQgDgCgDgHQgCgFAAgGQAAgJAEgHQADgGAGgGQAGgFAIgCQAJgDAKABQAJAAAHABQAJADAFADQAHADAEAEQAFAFADAEIgWARIgGgFIgHgFIgHgDIgHgBQgOgBAAAJQAAACACADQABADADABIAiALQAFABAFADQAFACADAEQAEAEACAEQACAGAAAGQAAAHgDAHQgCAGgHAFQgGAGgJADQgJADgPAAQgGAAgLgCg");
	this.shape_23.setTransform(5.575,54.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgzA7IAAh1IA3ABIAQAEQAGACAGAFQAHAFAEAGQAEAGACAJQADAKAAAKQAAALgDAJQgCAIgEAIQgEAGgHAFQgFAEgIADQgEACgLACIgQABgAgTAhIAIAAQAKAAAFgBQAGgCAEgEQADgEACgHQABgGAAgJQAAgIgBgGQgCgEgDgGQgEgDgGgDQgGgBgJAAIgIAAg");
	this.shape_24.setTransform(50.95,38.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAXA7IgshBIgBAAIAABBIggAAIAAh1IAiAAIArBBIAAAAIAAhBIAfAAIAAB1g");
	this.shape_25.setTransform(38.7,38.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgqA7IAAh1IBTAAIAAAbIg0AAIAAATIAlAAIAAAYIglAAIAAAVIA2AAIAAAag");
	this.shape_26.setTransform(27.45,38.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgvA7IAAh1IA4ABQAFAAAHACIALAEQAEADAFAEQADAEACAHQACAGAAAJQAAAKgCAGQgCAFgEAEQgDAFgGADIgLAEIgMACIgYABIAAAlgAgQgCIAOAAIAIgBIAHgDQACgCAAgDIABgGIgBgGIgCgFQgCgCgFgBQgDgBgFAAIgOAAg");
	this.shape_27.setTransform(17,38.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQA7QgIgCgHgDQgFgDgGgGQgFgFgEgHIAYgOIAGAHIAHAFQAEAEAFAAIAIACIAHgBIAFgCIAEgDIABgFIgCgFIgEgDIgZgIIgKgDQgFgCgEgDQgEgBgEgEQgDgCgDgHQgCgGAAgFQAAgKAEgGQADgHAGgFQAGgFAIgCQAJgCAKgBQAJAAAHACQAJADAFADQAHAEAEAEQAFAEADAEIgWASIgGgGIgHgFIgHgDIgHgBQgOAAAAAIQAAADACACQABADADABIAiALQAFABAFAEQAFABADADQAEAFACAEQACAHAAAFQAAAHgDAGQgCAHgHAFQgGAHgJACQgJAEgPAAQgGAAgLgDg");
	this.shape_28.setTransform(5.575,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0.1,32.5,112.2,60.3), null);


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
	this.shape.graphics.f("#62676B").s().p("EBYiANNILmtVIrotEIInAAILpNDIroNWgEBGlANNILntVIrotEIIoAAILoNDIroNWgEBSogAIIrUNAIHvAAILVtAIrWsvInwAAgEA0sANNILmtVIrotEIIoAAILoNDIrnNWgEAiwANNILntVIrptEIIoAAILoNDIrnNWgEAuzgAIIrVNAIHvAAILWtAIrWsvInwAAgAQ0NNILmtVIrotEIIoAAILoNDIroNWgAhHNNILmtVIrotEIInAAILoNDIrnNWgAK7gIIrUNAIHuAAILVtAIrWsvInuAAgAzBNNILntVIrptEIIoAAILnNDIrmNWgEgk9ANNILntVIrptEIIpAAILoNDIroNWgA46gIIrUNAIHvAAILVtAIrWsvInwAAgEg28ANNILntVIrptEIIpAAILoNDIroNWgEhI3ANNILntVIrptEIIoAAILoNDIrnNWgEg80gAIIrVNAIHvAAILVtAIrWsvInvAAgEhaxANNILmtVIrotEIIoAAILoNDIrnNWgEhstANNILntVIrptEIIoAAILpNDIroNWgEhgqgAIIrVNAIHvAAILWtAIrWsvInwAAg");
	this.shape.setTransform(671.575,309.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,225.1,1392,169.00000000000003);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqFCPIAAkdIUKAAIAAEdg");
	mask.setTransform(64.55,14.325);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51565A").s().p("AgUAkIgEgBIACgHIAHABQAFAAACgCIAEgFIACgGIgVg0IAJAAIAPAqIAQgqIAJAAIgXA6IgDAGIgDAFIgEADIgIABg");
	this.shape.setTransform(112.8,21.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51565A").s().p("AgSAYQgEgDAAgHQAAgFACgCQACgEAEgDQAGgCAFgCIAQgDIAAgCQAAgKgKAAQgEAAgGACIgJAGIgEgFQAEgEAHgEQAFgCAIAAIAIABIAFADQACACABAEIABAHIABAeIABAGIgJAAIgBgIQgJAIgLAAQgHAAgEgDgAAAABIgHADIgFAEQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAABQAAAEACABQACACAFAAQAFAAADgCQAFgBAEgEIAAgOIgNACg");
	this.shape_1.setTransform(107.575,20.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#51565A").s().p("AgLAkQgEgCgCgDQgDgCgCgHQgCgEAAgIQAAgGACgEQACgHADgCQADgEAEgCIAJgBQAEAAAEACIAHAGIAAgcIAJAAIAABEIACAFIgJAAIgBgDIgBgFIgHAHQgEABgFAAIgJgBgAgLgEQgEAEAAAKQAAAGABAEQABAEACACIAFADIAGABQAEAAADgBIAHgHIAAgXQgDgEgEgCQgEgCgDAAQgHAAgEAFg");
	this.shape_2.setTransform(101.875,19.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#51565A").s().p("AgJAaQgEgCgDgDQgDgDgCgGQgCgEAAgIQAAgHACgEQABgFAEgEIAHgFQAFgCAEAAQAFAAAEACQAEABAEAEQADADADAGQABAEAAAHQAAAIgBAEQgCAGgEADIgIAFQgEACgFAAQgEAAgFgCgAgGgSIgFAFIgDAGIgBAHIABAIQABAEACACIAFAFQADABADAAQAEAAADgBQADgDACgCIADgGIABgIIgBgHIgDgGIgFgFQgDgCgEAAQgDABgDABg");
	this.shape_3.setTransform(96.1,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#51565A").s().p("AAIAkQgIAAgCgDQgEgDAAgHIAAggIgJAAIAAgHIAJAAIAAgTIAIAAIAAATIAOAAIAAAHIgOAAIAAAeQAAADACADQABACAFAAIADAAIADAAIAAAHIgEAAg");
	this.shape_4.setTransform(91.375,19.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#51565A").s().p("AAZAbIAAghIAAgDIgBgCIgCgCIgDAAQgDAAgCABIgGAEIAAAjIgPAAIAAgkIgBgCIgCgCIgDAAIgFABIgGAEIAAAjIgQAAIAAg0IAQAAIAAAIIADgDIAEgDIAFgDIAGAAIAGAAIADACIADADIACAEIACgDIAFgDIAEgDIAHAAIAHABQADABABACQADADAAACIABAHIAAAlg");
	this.shape_5.setTransform(82.4,20.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#51565A").s().p("AgPAaIgFgCIgDgFIgBgHIAAgmIAQAAIAAAhIABAFQACACADAAQADAAACgBIAGgEIAAgjIAQAAIAAA0IgQAAIAAgIIgDADIgEADIgEACIgGABg");
	this.shape_6.setTransform(74.675,20.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#51565A").s().p("AAJAbIAAghIgBgFQgCgCgDAAQgDAAgCABIgGAEIAAAjIgQAAIAAg0IAQAAIAAAIIADgDIAEgDIAEgDIAHAAIAGAAQACABADACIADAFIABAHIAAAmg");
	this.shape_7.setTransform(68.625,20.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#51565A").s().p("AgHAlIAAg0IAPAAIAAA0gAgHgXIAAgNIAPAAIAAANg");
	this.shape_8.setTransform(64.125,19.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#51565A").s().p("AAHAkIgIgBQgDAAgDgDIgCgFIgBggIgJAAIAAgMIAJAAIAAgSIAQAAIAAASIANAAIAAAMIgNAAIAAAWIAAAEIABACIACABIAEABIACAAIABgBIABAAIABAAIAAAMIgCAAIgCAAg");
	this.shape_9.setTransform(60.55,19.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#51565A").s().p("AgPAbIgFgDIgDgFQgCgDAAgDIACgIQADgEAEgBQAEgDAGgCIAOgCIAAgBIgBgFQgCgBgEgBQgEAAgEACIgIAFIgHgJIAEgEIAGgDIAHgCIAIAAIAKABIAGADIAEAHQABAFAAAEIAAAcIACAFIgQAAIgBgDIgBgFQgDAFgFACQgDABgGAAIgGAAgAgFAEQgEADAAADQAAABAAABQAAAAABABQAAAAAAABQAAAAABABIAEABIAGgBIAFgEIAAgKQgIABgFACg");
	this.shape_10.setTransform(55.575,20.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#51565A").s().p("AgHAlIAAhJIAPAAIAABJg");
	this.shape_11.setTransform(51.375,19.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#51565A").s().p("AgbAlIAAhJIAhAAQAEAAADACIAGACIAGAFIACAGIABAJIgBAIIgDAGIgFAEQgDADgEAAIgGACIgRAAIAAAagAgLgBIALAAIAFgBIAEgCIADgDIAAgFIAAgFIgDgDIgEgCIgQgBg");
	this.shape_12.setTransform(46.85,19.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#51565A").s().p("AAKAbIgKgRIgJARIgRAAIATgbIgRgaIARAAIAIAPIAJgPIAQAAIgRAaIASAbg");
	this.shape_13.setTransform(37.975,20.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#51565A").s().p("AgHAaQgFgBgEgDQgEgEgCgFQgDgGAAgHQAAgEACgEIADgIIAFgFIAFgDIAGgCIAFgBIAGABIAGABIAFAEIAEAFQACAEABAEIABAKIAAACIgjAAIACAGIACADIAEADIAEAAIAFAAIAIgEIADgCIAGAKIgKAGQgGACgHAAQgFAAgEgCgAgBgPIgEACIgCAEIgBAFIATAAQAAgGgDgDQgCgCgFAAg");
	this.shape_14.setTransform(32.675,20.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#51565A").s().p("AAZAbIAAgkIgBgCIgCgCIgDAAIgGABIgFAEIAAAjIgPAAIAAghIAAgDIgBgCIgCgCIgDAAQgDAAgCABIgGAEIAAAjIgQAAIAAg0IAQAAIAAAIIADgDIAEgDIAFgDIAGAAIAGAAIADACQABABAAAAQABAAAAABQAAAAAAAAQABABAAAAIACAEIADgDIAEgDIAEgDIAGAAIAHABIAFADIADAFIABAHIAAAlg");
	this.shape_15.setTransform(25.225,20.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#51565A").s().p("AASAlIgGgRIgZAAIgFARIgPAAIAahJIAPAAIAaBJgAgIAJIAQAAIgIgZg");
	this.shape_16.setTransform(17.05,19.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#51565A").s().p("AgHAaQgDgBgEgEQgDgDgDgGQgCgFAAgHQAAgHACgFQACgEAEgEIAIgFIAHgBIAJABQAEABACAEQAEAEACAFQABAFAAAHIAAABIgkAAQgBAFACAEIADAFIAFAEIAGABQAFAAAEgCQADgCADgFIAGAFQgFAFgFADQgEACgIABIgIgCgAgEgSIgEADIgEAEQgBAEAAADIAcAAQgBgGgDgFQgEgEgGAAIgFABg");
	this.shape_17.setTransform(114.75,9.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#51565A").s().p("AgHAaQgDgCgFgDQgCgDgCgGQgCgFAAgHQAAgHACgFIAFgIIAIgFIAIgBIAHABIAHADIADAFIAEAFIgIAEQgBgFgEgDQgDgDgGAAIgEABIgFAEIgDAGQgCAEAAAEQAAAKAEAFQAEAFAGABQAFgBADgCQAEgCADgGIAHACIgEAHIgEAEQgDADgEABIgHABIgIgCg");
	this.shape_18.setTransform(109.5,9.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#51565A").s().p("AANAbIAAgjQAAgGgCgCQgDgCgEgBQgFABgDABIgJAHIAAAlIgIAAIAAg0IAIAAIAAAIIAEgDIAJgGIAGAAQAIAAAEAEQAEAEAAAIIAAAlg");
	this.shape_19.setTransform(103.975,9.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#51565A").s().p("AgHAaQgEgBgDgEQgDgDgDgGQgCgFAAgHQAAgEACgIQACgEAEgEQAEgEAEgBIAHgBIAJABQAEABADAEQADADABAGQACAFAAAHIAAABIglAAIACAJIAEAFIAEAEIAGABQAFAAAEgCQADgCAEgFIAEAFQgEAFgEADQgFACgIABIgIgCgAgDgSIgFADIgDAEQgCAFAAACIAcAAQAAgHgEgEQgDgEgHAAIgEABg");
	this.shape_20.setTransform(98.3,9.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#51565A").s().p("AgDAkIAAg0IAHAAIAAA0gAgDgbIAAgIIAIAAIAAAIg");
	this.shape_21.setTransform(94.4,8.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#51565A").s().p("AgOAbIAAg0IAIAAIAAAKQAEgGADgCQAGgDAHAAIABAAIAAAIIgDAAQgGAAgFADQgEADgDAGIAAAhg");
	this.shape_22.setTransform(91.5,9.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#51565A").s().p("AgHAaIgIgFQgEgFgBgEQgCgFAAgHQAAgHACgFIAFgIIAIgFIAIgBQAFAAADABQAEABADAEQADADADAGQABAFAAAHIAAABIgkAAQAAAFABAEIADAFIAGAEIAEABQAHAAADgCQAEgDACgEIAGAFQgFAFgEADQgFACgIABQgEgBgEgBgAgDgSIgFADIgDAEIgCAHIAcAAQgBgFgDgGQgEgEgGAAIgEABg");
	this.shape_23.setTransform(86.55,9.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#51565A").s().p("AgXAlIAAhIIAJAAIAAAHIAHgGQAFgCAEAAIAJABQAFAEABACQADADACAGQACAFAAAGQAAAIgCAEQgCAFgDADQgCADgFACQgEACgFAAQgDAAgFgCQgEgCgDgEIAAAbgAgHgbIgHAHIAAAXQAHAIAHAAQAHAAAEgFQAEgFAAgKQAAgJgEgFQgFgGgGAAQgEABgDABg");
	this.shape_24.setTransform(81.025,10.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#51565A").s().p("AAOAbIgOgWIgNAWIgJAAIASgbIgRgZIAJAAIAMATIANgTIAJAAIgRAZIASAbg");
	this.shape_25.setTransform(75.375,9.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#51565A").s().p("AgHAaQgEgBgDgEQgDgDgDgGQgCgFAAgHQAAgEACgIQACgEAEgEQADgEAFgBIAHgBIAJABQAEABADAEQADADABAGQACAFAAAHIAAABIglAAIACAJIAEAFIAEAEIAGABQAFAAAEgCQAEgCADgFIAEAFQgDAFgFADQgFACgIABIgIgCgAgDgSIgFADIgDAEQgCAFAAACIAcAAQAAgHgEgEQgDgEgHAAIgEABg");
	this.shape_26.setTransform(70.3,9.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#51565A").s().p("AgLAkIgHgFIgEgJQgCgFAAgGQAAgIACgEIAFgJIAHgFIAJgBQAEAAAEACQAEACADAEIAAgdIAJAAIAABEIACAGIgJAAIgBgEIgBgEQgDAEgEACQgEACgFABQgFgBgEgBgAgLgEQgEAEAAALQAAAFABADQABAFACABIAFAEIAGACQADgBAEgCIAHgGIAAgXIgHgGQgDgCgEAAQgHAAgEAFg");
	this.shape_27.setTransform(62.325,8.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#51565A").s().p("AANAbIAAgjQAAgGgCgCQgDgCgFgBQgDABgEABIgJAHIAAAlIgIAAIAAg0IAIAAIAAAIIAFgDIAJgGIAGAAQAHAAAEAEQAEAEAAAIIAAAlg");
	this.shape_28.setTransform(56.55,9.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#51565A").s().p("AgSAYQgEgEAAgGQAAgEACgEQACgEAEgBIALgFQAEgCAMgBIAAgCQAAgKgKAAQgGAAgEACQgFACgDAEIgFgFQAFgGAFgBQAHgDAHAAIAIABIAFADQACACABAEIABAHIABAeIABAGIgJAAIgBgEIAAgEQgJAJgLAAQgGgBgFgDgAAAABIgHADIgFAEIgBAEQgBAEADADQADACAEAAQAEAAAEgCQAFgDAEgEIAAgNg");
	this.shape_29.setTransform(50.85,9.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#51565A").s().p("AgXAlIAAhIIAJAAIAAAHIAHgGQAFgCAFAAQAEAAAEABQAEACACAEQAEADABAGQACAEAAAHQAAAIgCAEQgBAFgEADQgCADgEACQgFACgEAAQgEAAgEgCQgFgCgDgEIAAAbgAgHgbIgHAHIAAAXQAHAIAHAAQAHAAAEgFQAEgEAAgLQAAgKgEgEQgFgGgGAAQgDABgEABg");
	this.shape_30.setTransform(43.1,10.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#51565A").s().p("AgRAXQgEgEAAgHIAAgmIAIAAIAAAjQAAAGADACQACADAFAAQAEAAAEgCIAIgGIAAgmIAJAAIAAA0IgJAAIAAgIIgDAEIgFACIgFACIgGABQgGAAgFgEg");
	this.shape_31.setTransform(37.075,9.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#51565A").s().p("AANAbIAAgjQAAgGgCgCQgCgCgFgBQgFABgDABIgJAHIAAAlIgIAAIAAg0IAIAAIAAAIIAEgDIAJgGIAGAAQAHAAAFAEQAEAFAAAHIAAAlg");
	this.shape_32.setTransform(29.075,9.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#51565A").s().p("AgUAiQgGgEAAgGQAAgFADgCQACgDAFgCQgFgCAAgEIACgFIAFgDQgEgCgCgFQgCgDAAgFQAAgFABgDQACgDADgDIAHgEQAEgBAEAAQAFAAADABIAHAEIAGgDIAHgCIAAAIIgFABIgFABQADAEAAAFQAAAEgCAEIgEAGIgHADQgEABgEAAIgIgBIgDABIgBACIACADIAPACQALABAFADQAFAEAAAGIgCAGIgGAFQgDACgFABIgJABQgOAAgGgDgAgQASQgCACAAADQAAAEAEABQAEACAKAAQAIAAAEgCQAFgCAAgEQAAgDgDgCQgFgCgHAAIgJgBIgDAAQgEABgCADgAgKgaQgEADAAAGQAAAFAEAEQAEADAGAAQAFAAADgDQAEgEAAgFQAAgGgEgDQgDgDgGAAQgGAAgDADg");
	this.shape_33.setTransform(23.275,10.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#51565A").s().p("AgDAkIAAg0IAIAAIAAA0gAgDgbIAAgIIAIAAIAAAIg");
	this.shape_34.setTransform(19.25,8.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#51565A").s().p("AgQAiQgHgGgDgJIAHgDQACAGAGAFQAFADAHAAQAIAAAFgDQAFgCAAgHIgBgEIgDgFIgGgDIgTgGIgHgEIgFgFQgCgEAAgFQAAgFACgDIAFgGIAHgEQAFgCAFABIAJABIAHADIAGAGIADAGIgHAEQgDgHgFgCQgEgDgGAAQgHAAgEADQgEADAAAFIABAEIADAEIAGADIATAHQAEABADADQADACACADQABAEAAAFQAAAFgCAEQgBACgEAEIgIAEIgLABQgKAAgHgEg");
	this.shape_35.setTransform(14.775,8.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("An1CPQg7AAgqgqQgqgpgBg8QABg6AqgqQApgqA8AAIPrAAQA7AAArAqQApAqAAA6QAAA8gpApQgrAqg7AAg");
	this.shape_36.setTransform(64.55,14.325);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,129.1,28.7), null);


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
	this.shape_37.graphics.f("#FFFFFF").s().p("AADAFIAAgGIAAACIgCAEIgBAAIgCgEIgBgCIAAAGIgBAAIAAgKIACAAIACAHIADgHIACAAIAAAKg");
	this.shape_37.setTransform(72.8,21);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAAAFIAAgIIgEAAIAAgCIAJAAIAAACIgEAAIAAAIg");
	this.shape_38.setTransform(71.55,21);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("ABnBGIgBgBIAAABIgFgEIgDgPIAEgfIABABIAAgBIgBAAIABgCIgCADQgCACAAACIgBAAIAAABIgJAKIAAABIAAAAIAAABIgBAAIAAABIgBAAIgCABIgBACIgFADIgGABIgFgCIgBgBIgBAAIgGgGQgBgCgBgGIAAgEIAAgEIAAACIABgDIgBAAIAAgBIABAAIAAAEIAAADIABgMQABgGACgFIACgIIgCAEIAAACIgBgBIgBADIACgIIADgJIABgBIAAgBIAAAAIAGgBIAEAAIACACIgBADIgBAKIgBABIgEASIgBANIABAJIAGgFIgCACIACgCIAAgBIAAAAIABAAIABgBIAFgGIADgDIAKgOIgBABIAAgBIABAAIAAAAIABgBIAAAAIABAAIAAgCIAAAAIgCgDIABABIABAAIACgBIAAAAIAAAAIAAAAIAAAAIAAgBIAAABIABgBIAAAAIADgEIABgBIAAgBIAAADIABgDIgBAAIABAAIgBAAIAHgaIAKgdIACgFIAEgEIAAgBIAAgBQAEABADgBIAGABIABAAIACACQABACAAAEIgBANIACAGIAAAAIgEABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBgDAAgFIAAgIIgCADQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgFATIgGAUIAAABIgBAFIADAAIAEAAIAEAAIADACIgBABIgCACIgHACIgGADIgBAFIgCAGIgDAYIgCAXIACAIQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAABQAAAAgBAAgAA6AAIABgBIABgDIgCAEIAAAAgABogGIABAAIAAgBgABpgIIAAgBIAAAAIAAAAgABxgnIABAAIgBgBgAAoA4IgHgCIgFgEIgCgDIgBgEIAAgDIAAAAIgBgDIABAAIgBgCIAAgCIABAAIgBgBIABAAIgBgBIAAAAIAAAAIAAgBIAAAAIAAgBIABAAIAAgBIgBAAIAAABIAAgBIABgBIgBgBIABgCIAAgCIAAgBIAAAAIAAAAIABgBIgBAAIAAAAIAAgBIAAABIABAAIgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAAgBIABAAIAAAAIgBAAIABgBIAAgBIAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAIAAAAIAAAAIAAAAIAAAAIAAgBIAAgBIAAAAIAAgCIAAABIABgDIAAgDIgBABIAAgCIABAAIAAgBIAAgCIAAgBIAAgBIABABIAAgBIAAAAIAAAAIAAgBIgBAAIABgBIgBAAIAAgBIABAAIAAgBIAAABIAAgCIAAgCIAAAAIAAABIAAABIABAAIgBgBQABAAAAgBIAAAAIgBAAIABgBIABgCIgBgBIABgBIgBAAIAAABIAAABIAAgDIAAgCIABABIAAgBIAAgCIABgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgCIAAAAIABAAIgBgBIAAgBIABAAIAAgBIgBAAIABgCIABgCIgBAAIABgBIAAgBIAAgBIAAAAIAAABIABgBIAAgBIgBAAIABgBIAAgCIAAAAIABAAIAAgBIgBAAIAAgCIABgCIAAgBIAAAAIAAAAIABAAIgBgBIABgBIAAgBIAAgBIAAgCIACgHIAAgDIAAgCIACAAIAFAAIAFABIABACIABAFIgBAEIgHApIAAAAIgEAeIgBAXIACAHIAEgDIAEgEIAAABIAAACIAAAAIAAAAIAAAAIABAAIgBACQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABIABAAIAAAAIgBABIABAAIgBABIgBABIABAAIgEACIgFAAgAAaATIAAACIABgCIgBgBgAAbANQgBAAABAAIAAgBgAAbAFIAAADIABgGgAAggeIAAACIABgBIAAgCgACVAyIgBgBIgBAAIgCgBIgCgBIgGgGIgFgGIgCgIIAAgIIAEgQIAMgUIAAABIAAgCIAIgKIAIgHIADABQAGAAAEACQAEACAAAGIgBADIAAAAIAAAAIAAAAIgBADQgEAJgGAGIgOANIAAABIgBgBIgEADIgEACIgCAGIgBAIIABAHIADAFIAHgBQACgBADgCIAKgIIACgBIABgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIACgCIAAAAIANgNIACgCIABgBIAAAAIABgCIACgBIABgCIABgBIAEgEIAAAAIABAAIABgDIABgBIAEgGIACAAIABAAIAAACIgBACIAAgBIABAAIgBABIAAABIAAABIgBABIAAACIgBADQgBACgDACIgDAGIgBABIAAAAIAAABIgBABIgTAXIgFAFIgLAHQgEACgEAAgACjgWIgGAGIgKAVQAHgFAFgGIAJgOIACgFIAAgCIAAgBQgFACgCAEgACRgOIAAABIAAgBIABgBgAg7AyIgBgBIgBAAIgCgBIgCgBIgIgJIgCgDQgDgEAAgEIAAgIIACgIIACgIIABgCIACgBIAEgJIAFgIIAAABIAAgCIABgBIAHgJIAIgHIAEABQAFAAAEACQAEACAAAGIgBADQgDAJgHAJQgIAIgHAFIAAABIgBgBIgDADIgFACIgCAGIAAAIIAAAHIADAFQAEAAADgBQADgBACgCIAGgEIAGgFIABgBIASgSIABgBIABgCIACgBIABgCIABgBIACgCIACgCIAAAAIABAAIABgDIACgBIABgDIADgDIABAAIABAAIAAACIAAABIAAAAIAAABIgBABIAAABIAAABIgBAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgBADQgBACgCACIgEAGIAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgBABIgTAXIABAAIgFAFIgGAEIgGADQgEACgEAAgAgfAVIABAAIgBAAgAgtgWIgFAGIgLAVQAGgEAGgHIAJgOIACgFIAAgCIAAgBQgFADgCADgAi4AuIAAAAIAAAAgAipAsIgBgBIAAAAIgHgGQgCgEAAgEIAAgEIAAgEIAAAFIABgDIAAgDIgBAAIAAgBIABAAIAAAEIAAADIABgMIADgLIABgEIABgEIgCAGIABgFIgDAHIAFgRIABgBIAAgBIAAAAIAGgBIAEAAIACACIgBADIgBAKIgBABIgEASIgBANIABAJIADgDQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAIgCACIADgCQAFgFAEgGIALgPIABAAQABgDADgDIABgCIAAAAIABAAIABgCIAAgBIAAgBIAAAAIABgRIgBgBIABAAIAAgBIgBAAIAAABIAAgBIgCgCIABgCIACgBIABABIAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABgBIABAAIABABQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIACAEIAAACIABACIAAACQAAAAgBAAQAAABAAAAQAAAAAAABQABAAAAAAIAAABIAAABIAAADIAAADIgCAUQgBALABAIQADgDADgHQACgHADgDIAAABIAAgBIAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAgBIAAgBIAAABQABgBAAAAQAAAAAAgBQABAAAAAAQgBgBAAAAIABgDIAAABIAAABIABgDIABgCIAAAAIACgCIAAgBIABgCIACgCIAAABIAAAAIAAgBIAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgCIAAAAIAAgCIACgDIALgVIgBABIABgDIAAABIABAAIAAgBIABABIgBABIABgBIABAAIABABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAAAIAAABIABABIgBACIACgBIAAAFIAAAHIgCAGIgUAqIgBABIAAABIgCACIgCAEIgBABIgBABIAAABQAAABgBAAQAAAAAAAAQAAABgBAAQAAgBAAAAIAAABIAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgEABIgBAAIAAAAIgDgBIgCgBIgCgBIgBgBIgCgBIgBAAIgCgDIAAgCIABgBIAAgBIgBgCIABgBIAAgOIAAgEIgCACIAAAAIgBABIAAACIgBAAIgCAEIgCAEIgBAAIAAAAIAAABIgIAKIgBABIAAAAIAAABQgBAAAAAAIAAABIgBAAIgBABIgCACIgFADIgGABgAiyAgIABABIgBgBgAizAcIABAAIgBgBgAhnADIAAABIABgBIAAAAIAAgBgAhegLIABgBIgBAAgAhagUIABgBIAAAAgAhYgWIAAgBIAAAAgAjPAgIAAAAIAAABgAjPAdIAAgBIAAgDIAAACIAAABIAAABIAAAAIAAAAgABOAdIABgBIgBABgABSAYIACgCIAAAAIAAgBIAAABIAAAAIgCACIgBACIABgCgAjPAWIAAgBIAAgCIABgBIAAABIgBACIABABIgBABgAiUAVIAAgBIAAABIAAAAgAjPARIABAAIAAAAIgBABgAA3ANIABgEIAAABQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIgDAPgAA3AMIAAABIABgBIAAgBgAiyAOIABgBIAAgBIAAgBIgBABIABgCIAAAAQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBIACgEIgEAPgAA2AQIABgBIAAABIAAABgAjOAPIAAgBIAAABIAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAQABgBAAAAgAiPANQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIgBABgAjOANIAAgBIAAgCIAAgCIABABIgBADIAAABgAiMAJIABAAIAAAAIgBABgAixAGIABgCIgBAFgAjPAHIABABIgBABgAiLAHIABAAIAAABgAiJAFIAAAAIAAABgAjNAAIABAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQABAAAAAAIAAgCIAAABIAAACIAAAAIAAACQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBgAAbgCIAAAAIABAAIgBAAgAhjgEIAAABIgBABQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAgAjLgKIABgIIgCAPgAhjgEIABgDIAAACIgBABIAAAAgAjNgFIAAAAIABAAIAAAAgAhigHIABgBIAAABgAjNgHIAAgCIABAAIAAABIAAABgAjMgOIABAAIgBAAgAjLgPIAAgBIAAABgAjLgRIAAAAIAAABgAAegUIAAAAIABAAIgBABgAjJgVIAAAAIAAAAIAAAAgAhZgaIABAAIAAABIgBAAgAjJgbIgBAAIABgBIAAABgAjIgeIABgBIAAgCIAAACIAAAAIAAABIgBABgAjHghIAAgBIAAAAIABgBIAAABIgBAAIABABgABFgwIADgCIAFgBQADABADAEIgBADIgBADIAAAAIgBAAIgCACIgCACIgDAAIgDABgAikgwIAEgCQABgBAEAAQADABACAEIgBAGIgBAAIAAAAIgCACIgCACIgHABgAjGgmIAAABIAAABgAjFgqIAAAAIAAACgAjEgtIAAgBIAAAAIAAABg");
	this.shape_39.setTransform(52.375,12.625);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]}).wait(1));

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

	// Layer_4
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgVBRIAAh9IgvAAIAAgkICJAAIAAAkIgvAAIAAB9g");
	this.shape_56.setTransform(-24.65,299.525);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAUBRIgeg4IgMAAIAAA4IgsAAIAAihIBAAAQARAAALACQANADAIAGQAJAHAEAKQAFAKAAAPQAAATgIAKQgJAMgPAFIAiA+gAgWgIIATAAQAMAAAGgEQAHgEAAgKQAAgKgHgFQgGgEgMAAIgTAAg");
	this.shape_57.setTransform(-39.325,299.525);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAiBSIgKgeIgyAAIgLAeIgoAAIA6ijIAoAAIA5CjgAgQAUIAeAAIgOgsg");
	this.shape_58.setTransform(-55.325,299.475);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhBBRIAAihIBOAAIAQADQAJADAGADQAGADAGAHQAFAGADAJQACAKAAALQAAANgDAIQgDAIgFAGQgGAGgHAEIgOAGQgIACgJABIgPABIgSAAIAAAzgAgWgDIATAAQAIAAAEgCQAHgCACgCIADgGIABgJIgBgIIgDgHQgEgDgFgBQgEgCgIAAIgTAAg");
	this.shape_59.setTransform(-70.2,299.525);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgVBRIAAh9IgvAAIAAgkICJAAIAAAkIgvAAIAAB9g");
	this.shape_60.setTransform(-90.775,299.525);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgWBSQgLgDgJgGQgIgEgIgIQgIgIgEgHIAhgVQACAFAGAGQAEAEAGAEQAFADAHABQAGACAFAAIAKgBQAFgBACgBIAFgFQACgCAAgEQAAgEgCgDIgHgFIgJgDIgngLIgNgGIgLgIQgFgFgCgHQgDgGAAgKQAAgMAFgKQAEgJAJgHQAHgGAMgEQAMgDAOAAQAOAAAJACQAKADAIAFQAKAFAFAFIAMALIgeAZIgIgIIgKgHIgKgEIgKgCQgTAAAAAMQAAADACAEIAGAFQAFADAEABIAYAHIAOAEIAOAGQAHAEAEAEQAEAEAEAIQACAGAAAKQAAAKgDAJQgEAKgIAGQgIAIgNAEQgMAEgVAAQgOAAgKgCg");
	this.shape_61.setTransform(-105.675,299.525);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("Ag7BRIAAihIBzAAIAAAkIhHAAIAAAaIAzAAIAAAiIgzAAIAAAeIBLAAIAAAjg");
	this.shape_62.setTransform(-119.875,299.525);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhBhQIBSAAQAIAAAGACQAHABAFADQAGACAFAFQAEAGACAFQADAGAAAJQAAAJgDAHQgBAGgGAFQgEAFgGACIgMAEIAAAAQAHABAHACQAGACAFAFQAFAFACAHQADAGAAALQAAAKgDAGQgCAGgEAGIgLAIIgMAGIgPADIhUAAgAgVAwIAVAAQAMAAAFgFQAFgEABgIQgBgJgFgEQgGgEgMAAIgUAAgAgVgQIAUAAIAJgBIAHgDIADgFQACgDAAgDQAAgEgCgDIgDgFQgCgCgFgBIgJgBIgUAAg");
	this.shape_63.setTransform(-134.95,299.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(-141.5,291.1,123.8,16.899999999999977), null);


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
	this.shape_64.graphics.f("#FFFFFF").s().p("Ag7BSIAAiiIBzAAIAAAkIhHAAIAAAbIAzAAIAAAhIgzAAIAAAeIBLAAIAAAkg");
	this.shape_64.setTransform(38.15,59.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAbBSIAAhCIg1AAIAABCIgsAAIAAiiIAsAAIAAA8IA1AAIAAg8IAsAAIAACig");
	this.shape_65.setTransform(22.225,59.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgVBSIAAh+IgvAAIAAgkICJAAIAAAkIgvAAIAAB+g");
	this.shape_66.setTransform(6.575,59.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgTBTQgKgDgJgEQgJgFgHgGQgHgIgGgIQgEgIgFgOQgDgMAAgPQAAgOADgMQAFgOAEgIQAGgJAHgHQAHgGAJgFQAJgEAKgDIATgCIATACQAKADAJAEQAJAEAHAHQAIAHAGAJQAGAMADAKQADALAAAPQAAAQgDALQgDALgGALQgGAJgIAHQgHAHgJAEQgJAEgKADQgIACgLAAQgKAAgJgCgAgOgsQgGADgGAHQgEAGgCAJQgDAHAAAMQAAANADAIQACAHAEAIQAGAGAGAEQAHADAHABQAIgBAHgDQAHgEAEgGQAGgIABgHQADgKAAgLQAAgJgDgKQgBgJgGgGQgEgGgHgEQgGgDgJAAQgIAAgGADg");
	this.shape_67.setTransform(81.4,37.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgVBRIAAh9IgvAAIAAglICJAAIAAAlIgvAAIAAB9g");
	this.shape_68.setTransform(65.6,37.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AhBBRIAAiiIA9AAIARABIAQADQAIACAGAEQAJAFADAGQAFAGADAIQADAJAAAMQAAAMgDAJQgDAIgGAGQgFAGgHAEQgGAEgJACIgPADIghABIAAAzgAgVgDIATAAQAGAAAFgBQAEgBAEgEQADgCABgEQABgEABgFIgCgIQgBgEgDgDQgEgDgEgBQgHgCgEAAIgTAAg");
	this.shape_69.setTransform(46.3,37.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgVBRIAAiiIArAAIAACig");
	this.shape_70.setTransform(34.55,37.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAXBRIgmhBIgMAPIAAAyIgsAAIAAiiIAsAAIAAA8IAsg8IAzAAIg3BBIA7Bhg");
	this.shape_71.setTransform(23.425,37.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgWBRQgNgDgIgEQgJgGgGgHQgIgHgEgJIAggUQAFAIAEADQAEAEAGADQAGAEAGACQAGABAFAAIAJAAQAEgBAEgCIAFgFIACgGQAAgEgDgDQgDgDgDgCIgKgDIgYgHIgOgFQgGgBgHgEQgGgDgFgFQgFgFgCgHQgDgGAAgKQAAgMAEgKQAFgKAIgGQAJgHALgDQALgDAPgBQAMABAKACQAJACAKAFQAJAFAGAGIALAMIgeAXIgIgHIgJgGIgLgFIgKgCQgTAAAAAMQAAAEACADIAGAGQADABAGACIAnALIANAGQAHADAEAFQAFAFADAHQADAHAAAJQAAAJgEAKQgDAJgJAIQgHAGgOAFQgNAEgTABQgNAAgLgEg");
	this.shape_72.setTransform(7.075,37.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(-0.3,29.3,89.7,38.60000000000001), null);


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
	this.instance.setTransform(57,86.2,1,1,0,0,0,57.2,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(111).to({regX:57.1,regY:6.2,scaleX:1.1781,scaleY:1.1781,x:57.05,y:86.35},24,cjs.Ease.backInOut).wait(4).to({regX:57.2,regY:6.1,scaleX:1,scaleY:1,x:57,y:86.2},14).wait(31));

	// Layer_4
	this.instance_1 = new lib.Symbol32();
	this.instance_1.setTransform(58.8,103.25,1,1,0,0,0,59,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(135).to({regY:7.3,scaleX:1.1695,scaleY:1.1695,x:58.85,y:103.4},24,cjs.Ease.backInOut).wait(4).to({regY:7.2,scaleX:1,scaleY:1,x:58.8,y:103.25},14).wait(7));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQA7QgIgCgGgEQgHgEgFgFQgFgFgEgGIAYgPIAGAIQAEAEAEACIAIADIAIABIAHAAIAFgCIAEgDIABgFIgBgFIgFgDIgHgDIgbgIIgKgEIgIgGQgEgEgBgEQgCgFAAgHQAAgJADgHQAEgIAFgEQAGgEAJgDQAHgCALAAQAKAAAGACQAHABAHAEQAGADAFAEIAIAJIgWARIgFgFIgHgFIgIgDIgHgCQgOAAAAAJQAAADACACIAEAEIAHADIAbAIIAKAEIAIAGQAEAEACAEQACAFAAAHQAAAIgDAGQgDAHgFAFQgGAFgKADQgJADgOAAQgKAAgIgCg");
	this.shape.setTransform(74.625,69.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPA7IAAhbIgiAAIAAgaIBjAAIAAAaIgiAAIAABbg");
	this.shape_1.setTransform(63.875,69.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPA7IAAh1IAfAAIAAB1g");
	this.shape_2.setTransform(55.95,69.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoA7IAAh1IBRAAIAAAaIgxAAIAAAYIAiAAIAAAYIgiAAIAAArg");
	this.shape_3.setTransform(48.975,69.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrA7IAAh1IBUAAIAAAaIgzAAIAAATIAkAAIAAAYIgkAAIAAAWIA1AAIAAAag");
	this.shape_4.setTransform(39.1,69.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWA7IgshBIAAAAIAABBIggAAIAAh1IAiAAIAqBBIABAAIAAhBIAgAAIAAB1g");
	this.shape_5.setTransform(27.7,69.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqA7IAAh1IBTAAIAAAaIg0AAIAAATIAkAAIAAAYIgkAAIAAAWIA2AAIAAAag");
	this.shape_6.setTransform(16.45,69.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Agvg6IAxAAIAKAAIAKABIAKADIAHAGQADADACAFQACAEAAAHQAAAGgCAFQgCAFgDADQgDADgFACIgIADIAAAAIAKACQAFACADADQADAEACAFQACAHAAAFQAAAFgCAHIgFAIQgEAEgEACIgJAEIgKADIg9AAgAgQAjIAQAAQAJAAADgEQAEgCAAgHQAAgGgEgDQgDgDgJAAIgQAAgAgQgLIAWgBIAFgCIACgEIABgFIgBgEIgCgEIgFgCIgWgBg");
	this.shape_7.setTransform(5.475,69.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvA7IAAh1IA5AAIALACIALAFQAEACAEAFQAFAFABAGQACAGAAAJQAAAJgCAGQgCAGgEAEQgEAFgFACIgLAFIgLACIgYAAIAAAmgAgPgCIAOAAQAFAAADgBQADgBACgCQACgCACgDIABgGIgBgGQgBgDgDgCIgFgDIgWgBg");
	this.shape_8.setTransform(106.75,52.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPA7IAAh1IAfAAIAAB1g");
	this.shape_9.setTransform(98.25,52.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUA7IAAgwIgnAAIAAAwIggAAIAAh1IAgAAIAAAsIAnAAIAAgsIAgAAIAAB1g");
	this.shape_10.setTransform(89.325,52.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQA7QgHgCgHgEQgHgEgFgFQgFgFgEgGIAYgPQACAEAEAEIAIAGIAIADIAIABIAHAAIAFgCQADgBABgCIABgFIgBgFIgFgDIgHgDIgbgIIgKgEIgIgGQgDgDgCgFQgCgFAAgHQAAgJADgHQADgHAGgFQAGgEAJgDQAHgCALAAQAKAAAGACQAHABAHAEQAGADAFAEIAIAJIgWARIgFgFIgHgFIgIgDIgHgCQgOAAAAAJQAAADACACIAEAEIAHADIAbAIIAKAEIAIAGQAEAEACAEQACAFAAAHQAAAIgDAGQgCAGgGAGQgHAGgJACQgJADgOAAQgKAAgIgCg");
	this.shape_11.setTransform(77.475,52.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAPA7IgWgpIgJAAIAAApIggAAIAAh1IAvAAQALAAAIACQAKACAGAEQAGAEAEAIQADAHAAALQAAAPgGAHQgGAIgMAEIAaAtgAgQgFIAOAAQAJAAAEgDQAFgDAAgIQAAgHgFgDQgEgDgJAAIgOAAg");
	this.shape_12.setTransform(66.475,52.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqA7IAAh1IBTAAIAAAaIg0AAIAAATIAlAAIAAAYIglAAIAAAWIA3AAIAAAag");
	this.shape_13.setTransform(55.8,52.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Agvg6IBGABIAJADQAFADACADQAEAEABAEQACAEAAAHQAAAHgCAEQgCAFgDADIgHAFIgJADIAAAAIAKACIAIAFQAEAFABAEQACAEAAAIQAAAHgCAFIgFAIQgDAEgEACQgEADgGABIgKADIg9AAgAgPAjIAPAAQAJAAAEgEQAEgDAAgGQAAgGgEgDQgFgDgIAAIgPAAgAgPgLIAVgBQADAAACgCQAAgBABAAQAAAAABgBQAAAAAAgBQABAAAAgBIABgFIgBgEIgDgEIgFgCIgVgBg");
	this.shape_14.setTransform(44.825,52.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAiA7IAAhIIgBAAIgTBIIgbAAIgThKIAABKIggAAIAAh1IAtAAIAUBPIABAAIAShPIAtAAIAAB1g");
	this.shape_15.setTransform(31.9,52.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgqA7IAAh1IBTAAIAAAaIg0AAIAAATIAlAAIAAAYIglAAIAAAWIA2AAIAAAag");
	this.shape_16.setTransform(19.6,52.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAhA7IAAhIIgTBIIgbAAIgQg5IgDgRIgBAAIAABKIgfAAIAAh1IAuAAIATBPIAThPIAtAAIAAB1g");
	this.shape_17.setTransform(7.15,52.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAXA7IgthBIAABBIggAAIAAh1IAiAAIArBBIAAhBIAgAAIAAB1g");
	this.shape_18.setTransform(89.075,35.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPA7IAAh1IAfAAIAAB1g");
	this.shape_19.setTransform(79.9,35.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgqA7IAAh1IBTAAIAAAaIg0AAIAAATIAlAAIAAAYIglAAIAAAWIA3AAIAAAag");
	this.shape_20.setTransform(67.95,35.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZA5QgJgFgHgIQgGgIgDgMQgDgLAAgNQAAgOAEgLQADgMAIgHQAHgIAKgEQAJgEANAAQAJAAAHABQAJACAGAEQAGAFAFAHQAGAIADALIgeAIIgEgJIgEgHQgEgCgCgBIgHgBIgIACQgDABgDAEQgDADgDAIQgCAFAAALIABANIADAKIAFAHIAFAEIAGABIAEABQAJAAAEgEQAGgEACgGIgRAAIAAgXIAvAAIAAA8IgZAAIAAgQIgBAAIgCAGIgGAGIgKAEQgEACgGAAQgPAAgKgEg");
	this.shape_21.setTransform(56.2,35.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoA7IAAh1IAgAAIAABbIAxAAIAAAag");
	this.shape_22.setTransform(46.075,35.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVA5QgKgEgGgFQgHgIgCgIQgDgJAAgMIAAhGIAgAAIAABGQAAAMAEAGQAFAFAIAAQAKAAAEgFQAEgGAAgMIAAhGIAgAAIAABGQAAAMgDAJQgDAIgGAIQgGAFgKAEQgJADgNAAQgMAAgJgDg");
	this.shape_23.setTransform(35.225,35.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgzA7IAAh1IAnAAIAQABIAPAEIAOAHQAGAFAEAGQAEAGADAJQACAJAAALQAAAKgCAKQgCAHgFAIQgFAIgFAEQgHAFgHACQgIADgHABIgQABgAgTAhIAJAAQAKAAAEgCQAGgBAEgFQADgDABgHQACgHAAgIQAAgIgCgGQgBgFgDgFQgEgDgGgDQgFgCgJAAIgJAAg");
	this.shape_24.setTransform(23.8,35.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAXA7IgshBIgBAAIAABBIggAAIAAh1IAjAAIAqBBIAAAAIAAhBIAfAAIAAB1g");
	this.shape_25.setTransform(11.55,35.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPA7IAAh1IAfAAIAAB1g");
	this.shape_26.setTransform(2.35,35.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(184));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,29.1,140.20000000000002,83);


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

	// Layer_4
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("ABoBHIgBgBIgBAAIAAAAIgEgEQgDgIAAgGIAEggIgBABQgCACgBADIgBgBIAAACIgIAKIAAAAIgBAAIgBACIAAAAIgCABIgBADIgFACIgHABIgEgCIgBAAIgBgBIgGgGQgCgBAAgHIAAgCIAAAAIAAgDIAAAAIABgEIgBAAIAAgBIABAAIAAAEIAAAEIABgMIAFgUIgCAEIgBACIAAgBIAAAAIABgEIgBAEIgBADIACgIIADgJIABgBIAAAAIAAgBIAAAAIAGgBIAEABIACABIgCAGIAAADIAAAEIgBABIgBAEIgCAFIgBAFIgBAEIgBANIABAJIAHgFIgCACIACgCIAAAAIAHgHIADgEIAKgPIABAAIAAAAIABgBIgBAAIgCgEIABABIABAAIADgBIAAAAIABgBIAAAAIADgEIABgBIAAgBIAAAAIgBAEIACgEIAAgBIAAgBIAAAAIAAAAIAAgCIAAAAIAAgBIAFgRIABgDIAJgeQADgDAAgCIAEgEIAAgBIAAgBIAHAAIAFABIACAAIACACQABACAAAEIgBANIACAGIAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAgBQgBAAAAgBQgBgDAAgFIAAgIIgDAEIgBADQgEALgBAIIgGAVIAAABIgBAEIADAAIAEAAIADAAIADACIgBACIgBABIgHACIgGADIgBAFIgCAHIgDAXQgDAMABAMIABADIABAEQgBAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAABQAAAAgBAAgAA3AcIAAAAIAAgBgAA8gFIABAAIAAgBgABugaIAAAAIAAABIAAgBIAAAAIABgCIAAgDIgBAFgABygmIAAgBIAAgBgAAoA4IAAAAIgGgCIgFgDIgCgEQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgDIAAAAIgCgDIABAAIAAgEIABAAIgBgBIABAAIgBgBIgBAAIAAAAIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAABIgBgBIACgBQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgBIgBAAIABgBIgBgCIAAgBIABAAIAAAAIAAAAIABgBIgBAAIgBAAIAAAAQABAAAAgBIAAABIABAAIgBgBIAAAAIAAgBIAAgBIABAAIgBAAIABgBIAAgBIgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIAAgDIABgCIAAgEIgBAAQAAABAAAAIAAgCIABAAIAAgBIAAgCIAAgBIAAgBIAAAAIABAAIAAgBIgBAAIABgBIgBAAIAAgBIABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgCIABgBIgBgCIABgDIAAgBIAAAAIABgBIAAgBIAAgBIAAgBIABgBIgBgBIAAAAIABgBIgBAAIAAgCIABAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgCIABgCIAAACIgBABIABgBIAAgCIAAgBIAAAAIAAAAIABgBIgBgBIAAgBIABAAIAAABIABgBIAAAAIgBAAIABgCIAAgCIAAABIABgBIAAgBIgBAAIAAgCIABgBIAAgBIAAgBIAAAAIABABIgBgCIABgBIAAgBIAAgBIAAgCIACgHQAAAAAAgBQgBAAAAAAQAAgBABAAQAAAAAAgBIAAgCIABABIAGgBIAFABIABACIABAFIgIAtIAAABIgEAaQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgBAQIABAHIACAHIAEgDIAEgEIAAACIAAABIAAAAIAAAAIAAAAIAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAgBAAQAAABAAAAIAAAAIAAABIAAAAIAAAAIAAACIgBAAIAAAAIgDACIgFAAgAAcAFIAAADIABgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAgAAdAAIAAACIABgCIgBAAgAAcAAIABAAIAAgBIgBAAgAAdgIIAAABIABAAIgBgBIABAAIAAgBIgBAAIAAABgAAegNIAAABIAAABIAAgBIAAgBIAAgBIAAAAIAAABgAAjgkIABgBIAAAAgAjAA4IgBAAIgGgCIgFgDIgCgEIgBgEIgBgGIABAAIgBgCIABgBIgBgBIABAAIAAgBIgBgBIAAgBIABAAIgBgBIABAAIAAgBQgBAAABAAIgBABIAAgBIABgBIgBgBIABgBIAAAAIAAgBIAAAAIAAgCIAAgBIAAAAIAAAAIABgBIgBAAIAAAAIAAAAIAAgBIAAABIABAAIAAgBIgBAAIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIABABIAAgBIgBAAIABgBIAAAAIAAgBIAAgCIAAgBIAAgBIAAAAIAAABIABgBIgBgBIAAABIAAgCIAAABIABgCIAAgEIAAAAIgBABIABgCIAAAAIAAgBIABgCIgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIgBgBIABAAIAAgBIAAABIAAgCIAAgCIABgBIgBAAIAAgCIABgCIAAAAIAAAAIAAAAIAAgBIABAAIAAgBIgBABIAAgBIAAAAIAAAAIABgBIAAgBIAAgBIAAgBIABgBIAAgCIgBAAIABgCIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIABgCIAAABIAAgBIAAgCIAAACIABgDIgBAAIAAAAIABgBIAAgBIABgBIAAAAIgBAAIABgCIAAgCIAAAAIAAABIABAAIAAgCIgBAAIABgCIAAAAIABgBIgBgBIAAgBIAAAAIABABIgBgCIABgBIAAgBIAAgBIAAgCIACgKIAAgCIABABIAGgBIAFABIAAABIACABIAAAFIgIAtIAAABIgCAKIgBAGIAAAGIgBAEQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAIAAAXIACAHQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBIAEgEIAAACIAAABIAAAAIAAACQAAABAAAAQABAAAAABQAAAAgBAAQAAABAAAAIAAAAIAAABIAAAAIAAAAIAAACIgBAAIAAAAIgDACIgFAAgAjOAQIABABIAAgBIAAgBgAjNAFIABADIAAgDIAAgDgAjMgBQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIABgBIgBgBgAjMgHIAAAAIAAgBgAjLgMIgBABIABgBIAAgBgACWAyIgCgBIgBAAIgBgBIgCgBIgHgFIgEgHIgDgIIAAgIIACgIIADgIIALgTIAAAAIABgBIAIgKIAIgIIADABQAFAAAEACQAFACAAAGIgBAEIAAgBIAAABIAAAAIgBACQgEAJgGAHIgOAMIAAABIgBgBIgEADIgEADQgCACAAADIgBAIIABAHIADAGQADAAADgCIAGgDIAKgIIACgBIABgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACgBIAAAAIAKgMIABAAIACgCIACgCIAAAAIABgBIABgBIABgCIABgCIABgBIADgCIACgCIAAAAIABAAIABgDIABgBIACgCIACgDIACgBIABAAIAAACIgBACIAAAAIABAAIgBAAIAAABIAAABIgBABIAAADIgCACQAAACgDACIgDAGIgBABIAAAAIgBABIAAABIgTAXIgFAFIgGAEIgGADQgDACgFAAgACkgWIgGAGIgLAVQAIgFAEgGIAKgNIACgGIAAgBIgBgBIgGAFgACxgTIABABIAAgBIAAAAgAg6AyIgBgBIgBAAIgCgBIgDgBIgHgJIgDgDQgCgEAAgEIAAgIIABgIIADgIIAMgTIAAAAIAAgBIAIgKIAIgIIADABQAGAAADACQAEACABAGIgBAEIgBACIAAAAQgEAJgGAHQgGAHgIAFIAAABIgBgBIgEADIgEADIgCAFIgBAIIABAHIADAGQADAAADgCQAEgBACgCIAKgIIABgBIACgBIACgBIAOgPIACgCIABgBIABgBIACgCIABgCIAAgBIACgCIADgCIAAAAIABAAIABgDIACgBIABgCIACgDIACgBIABAAIgBACIAAACIAAAAIAAACIgBABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgBACQAAADgDABIgDAGIgBABIgBAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIAAABIgTAXIAAAAIgEAFIgGAEIgHADQgDACgEAAgAgeAVIAAAAIAAAAgAgsgWIgGAGIgKAVQAHgFAEgGIAKgNIACgGIgBgBIAAgBQgFADgBACgAioAsIgBAAIAAgBIgHgGIgCgIIAAgEIAAgEIAAADIABgEIgBAAIAAgBIABAAIAAAEIAAAEIABgMQABgIACgEIAAgDIACgFIgCAEIgBACIAAgBIABgEIgBAEIAEgOIABgBIAAgBIAAAAIAGgBIAEABIACABIgBADIgBAKIgBABIgFAWIgBAJIABAJIAGgEIABgBIAAAAIABgBIAJgKIALgPIAAAAIAFgGIADgEIAAgBIgBgBIABAAIAAgRIAAgBIAAAAIAAgBIAAAAIAAABIgBgBQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIABgBIABgBIABAAIABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIACAAIABAAIAAABQABgBAAAAQABAAAAAAQABAAAAABQABAAAAABIADADIAAADIABACIAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAIAAABIAAABIAAAEIAAACIgCAUQgBALABAIQACgCADgIQADgGADgEQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIAAgBIAAgBIAAgBIAAgBQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAIAAABIAAABIABgCIAAgEIAAABIAAABIABgDIABgCIABgBIACgBIAAgBIAAAAIABgCIABgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIABgBIAAABIABgBIAAAAIgBAAIABgDIACgDIAGgLIgBAAQAAAAAAAAQgBAAAAAAQAAAAABAAQAAAAAAgBIABAAIAAAAIAEgJIABAAIAAAAIgBAAIABgBIAAABIABgBIAAgBIABABIgBABIABAAIABAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAABIABABIgBADIABgCIABAFIAAAHIgCAGIgUAqIgBABIAAABIgDADIgDAFIAAABIgCACIAAAAIAAABQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgEAAIgBAAIAAAAIgGgCIgBAAIgBgBIgCgCIgCAAIgCgEIABgBIAAAAIAAAAIAAgBIAAgBIgBgCIABgBIAAAAIgBAAIAAAAIABgBIAAgRIgBADIAAAAIgBABIAAABIgBAAIgCAEQgCACgBADIAAgBIgBABIABABIgJAKIAAAAIgBAAIAAABIAAAAIgBAAIAAABIgBAAIAAABIgCADIgFACIgGABgAiyAcIABAAIgBgBgAhwAZIAAABIAAgBIAAgBgAhsAQIABAAIgBAAgAhmADIAAABIAAgBIAAAAQABABAAgBIgBgBgAhegNIAAADIACgEgABNAfIAAgBIAAABIAAAAgABOAdIACgBIgBABgAibAdIACgBIgBABgAA4ANIAAgEIABgCIABgCIABgDIgBAHIAAAAIgCAJgAA4AMIAAABIAAgBIAAgBgAixAOIAAgBIABgBIgBgBIAAABIAAgCIAAAAQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIABgDIgDAOgAA3AQIABAAIAAABgAiOANQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgBACgAiLAJIAAAAIAAAAIAAABgAiKAIIABgBIgBABgAAbACIABAAIAAAAgAjNACIAAgBIAAABgABngEIABAAIAAABgAiCgOIAAgBIABABIgBAAgAjLgOgABFgwIAEgCQABgBAEAAQADABACAFIAAACIgBADIAAAAIgBAAIgCADIgCABIgDABIgDAAgAikgwIAFgCQAAgBAEAAQAEABABAFIAAAFIgBAAIAAAAIgCADIgDABIgGABg");
	this.shape_73.setTransform(-88.0591,12.143,1.0043,1.006);

	this.timeline.addTween(cjs.Tween.get(this.shape_73).wait(1));

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(-103.8,11.95,1,1,0,0,0,36.6,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(-140.4,-0.5,73.4,25), null);


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
	this.instance.setTransform(80,300,0.5333,2.4,0,0,0,150,125);
	this.instance.alpha = 0.3516;
	this.instance.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.img03();
	this.instance_1.setTransform(0,0,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,160,600), null);


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
	this.instance.setTransform(80,300,0.5333,2.4,0,0,0,150,125);
	this.instance.alpha = 0.25;
	this.instance.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.img02();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,160,600), null);


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
	this.instance.setTransform(80,300,0.5333,2.4,0,0,0,150,125);
	this.instance.alpha = 0.25;
	this.instance.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.img01();
	this.instance_1.setTransform(0,0,1,1.0033);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,160,600), null);


// stage content:
(lib.AMEX_DV360_v4_160x600 = function(mode,startPosition,loop,reversed) {
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
	this.replay_btn.setTransform(23.55,29.95,0.8425,0.9396,0,0,0,11.3,11.1);
	new cjs.ButtonHelper(this.replay_btn, 0, 1, 2, false, new lib.Symbol20(), 3);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(895));

	// Layer_18
	this.ctaBTN = new lib.Symbol20();
	this.ctaBTN.name = "ctaBTN";
	this.ctaBTN.setTransform(5,22.05,7.1744,27.5877,0,0,0,0.7,0.8);
	new cjs.ButtonHelper(this.ctaBTN, 0, 1, 2, false, new lib.Symbol20(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ctaBTN).wait(895));

	// logo
	this.instance = new lib.ClipGroup_5();
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
	this.instance_3.setTransform(243.25,489.95,1,1,0,0,0,64.5,14.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(643).to({_off:false},0).wait(1).to({x:231.6,alpha:0.0717},0).wait(1).to({x:219.9,alpha:0.1439},0).wait(1).to({x:208.15,alpha:0.2164},0).wait(1).to({x:196.4,alpha:0.2891},0).wait(1).to({x:184.65,alpha:0.3617},0).wait(1).to({x:172.95,alpha:0.4338},0).wait(1).to({x:161.4,alpha:0.505},0).wait(1).to({x:150.15,alpha:0.5745},0).wait(1).to({x:139.3,alpha:0.6416},0).wait(1).to({x:129.05,alpha:0.7049},0).wait(1).to({x:119.6,alpha:0.7632},0).wait(1).to({x:111.15,alpha:0.8154},0).wait(1).to({x:103.8,alpha:0.8605},0).wait(1).to({x:97.75,alpha:0.8981},0).wait(1).to({x:92.85,alpha:0.9284},0).wait(1).to({x:89,alpha:0.9521},0).wait(1).to({x:86.05,alpha:0.9702},0).wait(1).to({x:83.85,alpha:0.9837},0).wait(1).to({x:82.3,alpha:0.9935},0).wait(1).to({x:81.15,alpha:1},0).wait(1).to({x:80.4},0).wait(1).to({x:79.95},0).wait(1).to({x:79.7},0).wait(1).to({x:79.6},0).wait(1).to({x:79.65},0).wait(1).to({x:79.8},0).wait(1).to({x:80},0).wait(1).to({x:80.25},0).wait(1).to({x:80.6},0).wait(1).to({x:80.9},0).wait(1).to({x:81.25},0).wait(51).to({regX:64.6,scaleX:1.1642,scaleY:1.1642,x:81.35,y:490},19,cjs.Ease.backInOut).wait(5).to({regX:64.5,scaleX:1,scaleY:1,x:81.25,y:489.95},20,cjs.Ease.quadInOut).wait(126));

	// replay_svg
	this.instance_4 = new lib.Symbol19();
	this.instance_4.setTransform(23.6,29.1,0.9903,0.9903,0,0,0,8.9,9.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(880).to({_off:false},0).to({alpha:1},14).wait(1));

	// t_indulge
	this.instance_5 = new lib.Symbol18();
	this.instance_5.setTransform(-202.8,160.9,1,1,0,0,0,132.2,28.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(656).to({_off:false},0).wait(1).to({regX:58.8,regY:70.5,x:-255.15,y:203,alpha:0.0601},0).wait(1).to({x:-234,alpha:0.1205},0).wait(1).to({x:-212.8,alpha:0.1811},0).wait(1).to({x:-191.5,alpha:0.2419},0).wait(1).to({x:-170.2,alpha:0.3028},0).wait(1).to({x:-148.9,alpha:0.3636},0).wait(1).to({x:-127.75,alpha:0.4241},0).wait(1).to({x:-106.8,alpha:0.484},0).wait(1).to({x:-86.2,alpha:0.5428},0).wait(1).to({x:-66.1,alpha:0.6003},0).wait(1).to({x:-46.7,alpha:0.6556},0).wait(1).to({x:-28.3,alpha:0.7082},0).wait(1).to({x:-11.15,alpha:0.7572},0).wait(1).to({x:4.5,alpha:0.802},0).wait(1).to({x:18.5,alpha:0.8419},0).wait(1).to({x:30.65,alpha:0.8766},0).wait(1).to({x:40.95,alpha:0.9061},0).wait(1).to({x:49.5,alpha:0.9305},0).wait(1).to({x:56.45,alpha:0.9504},0).wait(1).to({x:61.95,alpha:0.9663},0).wait(1).to({x:66.35,alpha:0.9787},0).wait(1).to({x:69.7,alpha:0.9883},0).wait(1).to({x:72.25,alpha:0.9956},0).wait(1).to({x:74.15,alpha:1},0).wait(1).to({x:75.45},0).wait(1).to({x:76.4},0).wait(1).to({x:76.95},0).wait(1).to({x:77.2},0).wait(1).to({x:77.3},0).wait(1).to({x:77.15},0).wait(1).to({x:76.9},0).wait(1).to({x:76.5},0).wait(1).to({x:76.05},0).wait(1).to({x:75.5},0).wait(1).to({x:74.95},0).wait(1).to({x:74.3},0).wait(1).to({regX:132.2,regY:28.4,x:147.2,y:160.9},0).wait(202));

	// t_best_part
	this.instance_6 = new lib.ClipGroup_3();
	this.instance_6.setTransform(184.8,289.15,0.7252,0.7252,0,0,0,62,8.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(-57.75,114.95,0.9999,0.9841,0,0,0,34.2,6.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45).to({_off:false},0).to({regX:61.9,regY:8.4,scaleX:1,scaleY:1,x:224.25,y:209.1,alpha:1},42,cjs.Ease.elasticOut).wait(71).to({x:369.05,alpha:0},16,cjs.Ease.quadInOut).to({_off:true},1).wait(720));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(628).to({_off:false},0).to({x:58.25,alpha:1},24,cjs.Ease.quintOut).wait(243));

	// t_skip_to
	this.instance_8 = new lib.ClipGroup_4();
	this.instance_8.setTransform(60.15,160.9,0.6566,0.6566,0,0,0,45.5,19.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.Symbol3copy();
	this.instance_9.setTransform(-89.25,80.05,0.3345,0.3343,0,0,0,-0.3,-0.3);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(26).to({_off:false},0).to({regX:44.9,regY:19.2,scaleX:1,scaleY:1,x:60,y:151.65,alpha:1},42,cjs.Ease.elasticOut).wait(90).to({x:-50,alpha:0},16,cjs.Ease.quadInOut).to({_off:true},1).wait(720));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(628).to({_off:false},0).to({x:14.75,alpha:1},24,cjs.Ease.quintOut).wait(243));

	// Layer_16
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(82,86,90,0)").s().p("ArhAzIvgwuMA2DAAAIAAfeMgzuAAZg");
	this.shape.setTransform(271.975,361.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(82,86,90,0.071)").s().p("ArhAzIvgwuMA2DAAAIAAfeMgzuAAZg");
	this.shape_1.setTransform(271.975,361.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(82,86,90,0.141)").s().p("ArhAzIvgwuMA2DAAAIAAfeMgzuAAZg");
	this.shape_2.setTransform(271.975,361.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(82,86,90,0.216)").s().p("ArhAzIvgwuMA2DAAAIAAfeMgzuAAZg");
	this.shape_3.setTransform(271.975,361.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(82,86,90,0.286)").s().p("ArhAzIvgwuMA2DAAAIAAfeMgzuAAZg");
	this.shape_4.setTransform(271.975,361.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(82,86,90,0.357)").s().p("ArhAzIvgwuMA2DAAAIAAfeMgzuAAZg");
	this.shape_5.setTransform(271.975,361.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(82,86,90,0.427)").s().p("ArhAzIvgwuMA2DAAAIAAfeMgzuAAZg");
	this.shape_6.setTransform(271.975,361.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(82,86,90,0.502)").s().p("ArhAzIvgwuMA2DAAAIAAfeMgzuAAZg");
	this.shape_7.setTransform(271.975,361.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(82,86,90,0.573)").s().p("ArhAzIvgwuMA2DAAAIAAfeMgzuAAZg");
	this.shape_8.setTransform(271.975,361.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(82,86,90,0.643)").s().p("ArhAzIvgwuMA2DAAAIAAfeMgzuAAZg");
	this.shape_9.setTransform(271.975,361.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(82,86,90,0.714)").s().p("ArhAzIvgwuMA2DAAAIAAfeMgzuAAZg");
	this.shape_10.setTransform(271.975,361.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(82,86,90,0.784)").s().p("ArhAzIvgwuMA2DAAAIAAfeMgzuAAZg");
	this.shape_11.setTransform(271.975,361.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(82,86,90,0.859)").s().p("ArhAzIvgwuMA2DAAAIAAfeMgzuAAZg");
	this.shape_12.setTransform(271.975,361.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(82,86,90,0.929)").s().p("ArhAzIvgwuMA2DAAAIAAfeMgzuAAZg");
	this.shape_13.setTransform(271.975,361.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#52565A").s().p("ArhAzIvgwuMA2DAAAIAAfeMgzuAAZg");
	this.shape_14.setTransform(271.975,361.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},880).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

	// arrows
	this.instance_10 = new lib.Symbol2("synched",0);
	this.instance_10.setTransform(-762.1,134.5,1,1,0,0,0,691.9,84);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(607).to({_off:false},0).to({x:-514.75},28,cjs.Ease.sineOut).to({x:165.4,y:134.05},259,cjs.Ease.get(0.05)).wait(1));

	// img03_arrow_copy
	this.instance_11 = new lib.Symbol21();
	this.instance_11.setTransform(-701.15,251.15,3.7871,3.7867,0,0,0,171.5,71.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(593).to({_off:false},0).to({x:948.45},26,cjs.Ease.quadOut).wait(276));

	// img03_mask_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_593 = new cjs.Graphics().p("Ei4RAxtMAAAhjZMCdlAAAMArvAxJIgBACMgrsAyOg");
	var mask_graphics_594 = new cjs.Graphics().p("EiuiAxtMAAAhjZMCdkAAAMArvAxJIgBACMgrsAyOg");
	var mask_graphics_595 = new cjs.Graphics().p("EilNAxtMAAAhjZMCdlAAAMArvAxJIgBACMgrsAyOg");
	var mask_graphics_596 = new cjs.Graphics().p("EicPAxtMAAAhjZMCdjAAAMArxAxJIgCACMgrsAyOg");
	var mask_graphics_597 = new cjs.Graphics().p("EiTqAxtMAAAhjZMCdjAAAMArxAxJIgCACMgrsAyOg");
	var mask_graphics_598 = new cjs.Graphics().p("EiLdAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrtAyOg");
	var mask_graphics_599 = new cjs.Graphics().p("EiDpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_graphics_600 = new cjs.Graphics().p("Eh8NAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_graphics_601 = new cjs.Graphics().p("Eh1KAxtMAAAhjZMCdjAAAMArxAxJIgBACMgrtAyOg");
	var mask_graphics_602 = new cjs.Graphics().p("EhufAxtMAAAhjZMCdkAAAMArwAxJIgBACMgrtAyOg");
	var mask_graphics_603 = new cjs.Graphics().p("EhoMAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_graphics_604 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_graphics_605 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_graphics_606 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_graphics_607 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_graphics_608 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_graphics_609 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_graphics_610 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_graphics_611 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_graphics_612 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_graphics_613 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_graphics_614 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_graphics_615 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_graphics_616 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_graphics_617 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_graphics_618 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_graphics_619 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(593).to({graphics:mask_graphics_593,x:-1179.375,y:300.0078}).wait(1).to({graphics:mask_graphics_594,x:-1117.149,y:300.0078}).wait(1).to({graphics:mask_graphics_595,x:-1057.3632,y:300.0078}).wait(1).to({graphics:mask_graphics_596,x:-1000.0176,y:300.0078}).wait(1).to({graphics:mask_graphics_597,x:-945.1123,y:300.0078}).wait(1).to({graphics:mask_graphics_598,x:-892.6472,y:300.0078}).wait(1).to({graphics:mask_graphics_599,x:-842.6223,y:300.0078}).wait(1).to({graphics:mask_graphics_600,x:-795.0377,y:300.0078}).wait(1).to({graphics:mask_graphics_601,x:-749.8933,y:300.0078}).wait(1).to({graphics:mask_graphics_602,x:-707.1892,y:300.0078}).wait(1).to({graphics:mask_graphics_603,x:-666.9253,y:300.0078}).wait(1).to({graphics:mask_graphics_604,x:-613.9693,y:300.0078}).wait(1).to({graphics:mask_graphics_605,x:-543.2024,y:300.0078}).wait(1).to({graphics:mask_graphics_606,x:-477.3161,y:300.0078}).wait(1).to({graphics:mask_graphics_607,x:-416.3101,y:300.0078}).wait(1).to({graphics:mask_graphics_608,x:-360.1847,y:300.0078}).wait(1).to({graphics:mask_graphics_609,x:-308.9397,y:300.0078}).wait(1).to({graphics:mask_graphics_610,x:-262.5752,y:300.0078}).wait(1).to({graphics:mask_graphics_611,x:-221.0912,y:300.0078}).wait(1).to({graphics:mask_graphics_612,x:-184.4877,y:300.0078}).wait(1).to({graphics:mask_graphics_613,x:-152.7646,y:300.0078}).wait(1).to({graphics:mask_graphics_614,x:-125.922,y:300.0078}).wait(1).to({graphics:mask_graphics_615,x:-103.9598,y:300.0078}).wait(1).to({graphics:mask_graphics_616,x:-86.8782,y:300.0078}).wait(1).to({graphics:mask_graphics_617,x:-74.677,y:300.0078}).wait(1).to({graphics:mask_graphics_618,x:-67.3563,y:300.0078}).wait(1).to({graphics:mask_graphics_619,x:-64.9161,y:300.0078}).wait(276));

	// Layer_10
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#52565A").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_15.setTransform(80.0011,299.9992,0.5333,2.4);
	this.shape_15._off = true;

	var maskedShapeInstanceList = [this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(593).to({_off:false},0).wait(302));

	// card_t
	this.instance_12 = new lib.Symbol7();
	this.instance_12.setTransform(288.3,113.85,1,1,0,0,0,34.3,6);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({_off:false},0).to({x:58.3,alpha:1},30,cjs.Ease.quintOut).wait(117).to({y:180.05},23,cjs.Ease.cubicInOut).to({_off:true},435).wait(276));

	// card
	this.instance_13 = new lib.Symbol3();
	this.instance_13.setTransform(172.75,80.1,0.3337,0.3333,0,0,0,0.6,1.2);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(14).to({_off:false},0).to({x:15.25,alpha:1},30,cjs.Ease.quintOut).wait(117).to({y:146.3},23,cjs.Ease.cubicInOut).to({_off:true},435).wait(276));

	// t_with
	this.instance_14 = new lib.Symbol16();
	this.instance_14.setTransform(176.1,286.85,0.6867,0.6867,0,0,0,72.2,25.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(473).to({_off:false},0).to({regX:72,regY:24.8,scaleX:1,scaleY:1,x:212.55,y:194.2,alpha:1},37,cjs.Ease.elasticOut).wait(25).to({regX:72.1,regY:24.9,scaleX:1.0868,scaleY:1.0868,x:223.3,y:168.85},15,cjs.Ease.quadInOut).wait(5).to({regX:72,regY:24.8,scaleX:1,scaleY:1,x:212.55,y:194.2},16,cjs.Ease.quadInOut).to({_off:true},48).wait(276));

	// img03_arrow
	this.instance_15 = new lib.Symbol21();
	this.instance_15.setTransform(-701.15,251.15,3.7871,3.7867,0,0,0,171.5,71.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(447).to({_off:false},0).to({x:948.45},26,cjs.Ease.quadOut).to({_off:true},146).wait(276));

	// img03_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_447 = new cjs.Graphics().p("Ei4RAxtMAAAhjZMCdlAAAMArvAxJIgBACMgrsAyOg");
	var mask_1_graphics_448 = new cjs.Graphics().p("EiuiAxtMAAAhjZMCdkAAAMArvAxJIgBACMgrsAyOg");
	var mask_1_graphics_449 = new cjs.Graphics().p("EilNAxtMAAAhjZMCdlAAAMArvAxJIgBACMgrsAyOg");
	var mask_1_graphics_450 = new cjs.Graphics().p("EicPAxtMAAAhjZMCdjAAAMArxAxJIgCACMgrsAyOg");
	var mask_1_graphics_451 = new cjs.Graphics().p("EiTqAxtMAAAhjZMCdjAAAMArxAxJIgCACMgrsAyOg");
	var mask_1_graphics_452 = new cjs.Graphics().p("EiLdAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrtAyOg");
	var mask_1_graphics_453 = new cjs.Graphics().p("EiDpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_1_graphics_454 = new cjs.Graphics().p("Eh8NAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_1_graphics_455 = new cjs.Graphics().p("Eh1KAxtMAAAhjZMCdjAAAMArxAxJIgBACMgrtAyOg");
	var mask_1_graphics_456 = new cjs.Graphics().p("EhufAxtMAAAhjZMCdkAAAMArwAxJIgBACMgrtAyOg");
	var mask_1_graphics_457 = new cjs.Graphics().p("EhoMAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_1_graphics_458 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_1_graphics_459 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_1_graphics_460 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_1_graphics_461 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_1_graphics_462 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_1_graphics_463 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_1_graphics_464 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_1_graphics_465 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_1_graphics_466 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_1_graphics_467 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_1_graphics_468 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_1_graphics_469 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_1_graphics_470 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_1_graphics_471 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_1_graphics_472 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_1_graphics_473 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(447).to({graphics:mask_1_graphics_447,x:-1179.375,y:300.0078}).wait(1).to({graphics:mask_1_graphics_448,x:-1117.149,y:300.0078}).wait(1).to({graphics:mask_1_graphics_449,x:-1057.3632,y:300.0078}).wait(1).to({graphics:mask_1_graphics_450,x:-1000.0176,y:300.0078}).wait(1).to({graphics:mask_1_graphics_451,x:-945.1123,y:300.0078}).wait(1).to({graphics:mask_1_graphics_452,x:-892.6472,y:300.0078}).wait(1).to({graphics:mask_1_graphics_453,x:-842.6223,y:300.0078}).wait(1).to({graphics:mask_1_graphics_454,x:-795.0377,y:300.0078}).wait(1).to({graphics:mask_1_graphics_455,x:-749.8933,y:300.0078}).wait(1).to({graphics:mask_1_graphics_456,x:-707.1892,y:300.0078}).wait(1).to({graphics:mask_1_graphics_457,x:-666.9253,y:300.0078}).wait(1).to({graphics:mask_1_graphics_458,x:-613.9693,y:300.0078}).wait(1).to({graphics:mask_1_graphics_459,x:-543.2024,y:300.0078}).wait(1).to({graphics:mask_1_graphics_460,x:-477.3161,y:300.0078}).wait(1).to({graphics:mask_1_graphics_461,x:-416.3101,y:300.0078}).wait(1).to({graphics:mask_1_graphics_462,x:-360.1847,y:300.0078}).wait(1).to({graphics:mask_1_graphics_463,x:-308.9397,y:300.0078}).wait(1).to({graphics:mask_1_graphics_464,x:-262.5752,y:300.0078}).wait(1).to({graphics:mask_1_graphics_465,x:-221.0912,y:300.0078}).wait(1).to({graphics:mask_1_graphics_466,x:-184.4877,y:300.0078}).wait(1).to({graphics:mask_1_graphics_467,x:-152.7646,y:300.0078}).wait(1).to({graphics:mask_1_graphics_468,x:-125.922,y:300.0078}).wait(1).to({graphics:mask_1_graphics_469,x:-103.9598,y:300.0078}).wait(1).to({graphics:mask_1_graphics_470,x:-86.8782,y:300.0078}).wait(1).to({graphics:mask_1_graphics_471,x:-74.677,y:300.0078}).wait(1).to({graphics:mask_1_graphics_472,x:-67.3563,y:300.0078}).wait(1).to({graphics:mask_1_graphics_473,x:-64.9161,y:300.0078}).wait(146).to({graphics:null,x:0,y:0}).wait(276));

	// t_shop
	this.instance_16 = new lib.Symbol15();
	this.instance_16.setTransform(101.95,78.1,0.731,0.731,0,0,0,111.4,15.8);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(459).to({_off:false},0).to({regX:111.3,regY:15.9,scaleX:1,scaleY:1,x:126.8,y:65.95,alpha:1},33,cjs.Ease.elasticOut).to({_off:true},127).wait(276));

	// img3
	this.instance_17 = new lib.Symbol24();
	this.instance_17.setTransform(216.6,155,1,1,0,0,0,216.6,155);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(447).to({_off:false},0).to({regX:216.5,scaleX:1.1765,scaleY:1.1765,x:232.95,y:143.85},171).to({_off:true},1).wait(276));

	// Symbol_13
	this.instance_18 = new lib.Symbol13("synched",0);
	this.instance_18.setTransform(168.15,288.05,0.699,0.699,0,0,0,87.1,16);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(314).to({_off:false},0).to({regX:86.9,regY:15.8,scaleX:1,scaleY:1,x:197.4,y:202.8,alpha:1},36,cjs.Ease.elasticOut).wait(33).to({startPosition:0},0).to({regX:87.2,regY:16.1,scaleX:1.0848,scaleY:1.0848,x:205.65,y:179.3},14,cjs.Ease.quadInOut).wait(5).to({startPosition:0},0).to({regX:86.9,regY:15.8,scaleX:1,scaleY:1,x:197.4,y:202.8},14,cjs.Ease.quadInOut).to({_off:true},58).wait(421));

	// img02_arrow
	this.instance_19 = new lib.Symbol21();
	this.instance_19.setTransform(-701.15,251.15,3.7871,3.7867,0,0,0,171.5,71.1);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(288).to({_off:false},0).to({x:948.45},26,cjs.Ease.quadOut).to({_off:true},160).wait(421));

	// img02_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_288 = new cjs.Graphics().p("Ei4RAxtMAAAhjZMCdlAAAMArvAxJIgBACMgrsAyOg");
	var mask_2_graphics_289 = new cjs.Graphics().p("EiuiAxtMAAAhjZMCdkAAAMArvAxJIgBACMgrsAyOg");
	var mask_2_graphics_290 = new cjs.Graphics().p("EilNAxtMAAAhjZMCdlAAAMArvAxJIgBACMgrsAyOg");
	var mask_2_graphics_291 = new cjs.Graphics().p("EicPAxtMAAAhjZMCdjAAAMArxAxJIgCACMgrsAyOg");
	var mask_2_graphics_292 = new cjs.Graphics().p("EiTqAxtMAAAhjZMCdjAAAMArxAxJIgCACMgrsAyOg");
	var mask_2_graphics_293 = new cjs.Graphics().p("EiLdAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrtAyOg");
	var mask_2_graphics_294 = new cjs.Graphics().p("EiDpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_2_graphics_295 = new cjs.Graphics().p("Eh8NAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_2_graphics_296 = new cjs.Graphics().p("Eh1KAxtMAAAhjZMCdjAAAMArxAxJIgBACMgrtAyOg");
	var mask_2_graphics_297 = new cjs.Graphics().p("EhufAxtMAAAhjZMCdkAAAMArwAxJIgBACMgrtAyOg");
	var mask_2_graphics_298 = new cjs.Graphics().p("EhoMAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_2_graphics_299 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_2_graphics_300 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_2_graphics_301 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_2_graphics_302 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_2_graphics_303 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_2_graphics_304 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_2_graphics_305 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_2_graphics_306 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_2_graphics_307 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_2_graphics_308 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_2_graphics_309 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_2_graphics_310 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_2_graphics_311 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_2_graphics_312 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_2_graphics_313 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");
	var mask_2_graphics_314 = new cjs.Graphics().p("EhkpAxtMAAAhjZMCdjAAAMArwAxJIgBACMgrsAyOg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(288).to({graphics:mask_2_graphics_288,x:-1179.375,y:300.0078}).wait(1).to({graphics:mask_2_graphics_289,x:-1117.149,y:300.0078}).wait(1).to({graphics:mask_2_graphics_290,x:-1057.3632,y:300.0078}).wait(1).to({graphics:mask_2_graphics_291,x:-1000.0176,y:300.0078}).wait(1).to({graphics:mask_2_graphics_292,x:-945.1123,y:300.0078}).wait(1).to({graphics:mask_2_graphics_293,x:-892.6472,y:300.0078}).wait(1).to({graphics:mask_2_graphics_294,x:-842.6223,y:300.0078}).wait(1).to({graphics:mask_2_graphics_295,x:-795.0377,y:300.0078}).wait(1).to({graphics:mask_2_graphics_296,x:-749.8933,y:300.0078}).wait(1).to({graphics:mask_2_graphics_297,x:-707.1892,y:300.0078}).wait(1).to({graphics:mask_2_graphics_298,x:-666.9253,y:300.0078}).wait(1).to({graphics:mask_2_graphics_299,x:-613.9693,y:300.0078}).wait(1).to({graphics:mask_2_graphics_300,x:-543.2024,y:300.0078}).wait(1).to({graphics:mask_2_graphics_301,x:-477.3161,y:300.0078}).wait(1).to({graphics:mask_2_graphics_302,x:-416.3101,y:300.0078}).wait(1).to({graphics:mask_2_graphics_303,x:-360.1847,y:300.0078}).wait(1).to({graphics:mask_2_graphics_304,x:-308.9397,y:300.0078}).wait(1).to({graphics:mask_2_graphics_305,x:-262.5752,y:300.0078}).wait(1).to({graphics:mask_2_graphics_306,x:-221.0912,y:300.0078}).wait(1).to({graphics:mask_2_graphics_307,x:-184.4877,y:300.0078}).wait(1).to({graphics:mask_2_graphics_308,x:-152.7646,y:300.0078}).wait(1).to({graphics:mask_2_graphics_309,x:-125.922,y:300.0078}).wait(1).to({graphics:mask_2_graphics_310,x:-103.9598,y:300.0078}).wait(1).to({graphics:mask_2_graphics_311,x:-86.8782,y:300.0078}).wait(1).to({graphics:mask_2_graphics_312,x:-74.677,y:300.0078}).wait(1).to({graphics:mask_2_graphics_313,x:-67.3563,y:300.0078}).wait(1).to({graphics:mask_2_graphics_314,x:-64.9161,y:300.0078}).wait(160).to({graphics:null,x:0,y:0}).wait(421));

	// t_get_up
	this.instance_20 = new lib.Symbol12("synched",0);
	this.instance_20.setTransform(89.05,81.65,0.608,0.608,0,0,0,93.1,16.1);
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

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(288).to({_off:false},0).to({regY:124.9,scaleX:1.1384,scaleY:1.1384,x:165.5,y:84.15},185).to({_off:true},1).wait(421));

	// t_and_get
	this.instance_22 = new lib.Symbol5();
	this.instance_22.setTransform(195.8,267.4,0.7485,0.7485,0,0,0,57.6,23.4);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(185).to({_off:false},0).to({scaleX:1,scaleY:1,x:227.8,y:193,alpha:1},38,cjs.Ease.elasticOut).to({_off:true},92).wait(580));

	// t_spend
	this.instance_23 = new lib.Symbol4();
	this.instance_23.setTransform(101.3,71.6,0.6953,0.6948,0,0,0,101.3,16.9);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(175).to({_off:false},0).to({regX:101.1,regY:16.5,scaleX:1,scaleY:1,x:116.15,y:64.75,alpha:1},38,cjs.Ease.elasticOut).to({_off:true},102).wait(580));

	// arrows_copy (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_13 = new cjs.Graphics().p("EBYiAivILmtWIrotEIInAAILpNDIroNXgEBGlAivILntWIrotEIIoAAILoNDIroNXgEBSoAVZIrUNBIHvAAILVtCIrWsuInwAAgEA0sAivILmtWIrotEIIoAAILoNDIrnNXgEAiwAivILntWIrptEIIoAAILoNDIrnNXgEAuzAVZIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AivILmtWIrotEIIoAAILoNDIroNXgEgBHAivILmtWIrotEIInAAILoNDIrnNXgAK7VZIrUNBIHuAAILVtCIrWsuInuAAgEgTBAivILntWIrptEIIoAAILnNDIrmNXgEgk9AivILntWIrptEIIpAAILoNDIroNXgA46VZIrUNBIHvAAILVtCIrWsuInwAAgEg28AivILntWIrptEIIpAAILoNDIroNXgEhI3AivILntWIrptEIIoAAILoNDIrnNXgEg80AVZIrVNBIHvAAILVtCIrWsuInvAAgEhaxAivILmtWIrotEIIoAAILoNDIrnNXgEhstAivILntWIrptEIIoAAILpNDIroNXgEhgqAVZIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_14 = new cjs.Graphics().p("EBYiAivILmtWIrotEIInAAILpNDIroNXgEBGlAivILntWIrotEIIoAAILoNDIroNXgEBSoAVZIrUNBIHvAAILVtCIrWsuInwAAgEA0sAivILmtWIrotEIIoAAILoNDIrnNXgEAiwAivILntWIrptEIIoAAILoNDIrnNXgEAuzAVZIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AivILmtWIrotEIIoAAILoNDIroNXgEgBHAivILmtWIrotEIInAAILoNDIrnNXgAK7VZIrUNBIHuAAILVtCIrWsuInuAAgEgTBAivILntWIrptEIIoAAILnNDIrmNXgEgk9AivILntWIrptEIIpAAILoNDIroNXgA46VZIrUNBIHvAAILVtCIrWsuInwAAgEg28AivILntWIrptEIIpAAILoNDIroNXgEhI3AivILntWIrptEIIoAAILoNDIrnNXgEg80AVZIrVNBIHvAAILVtCIrWsuInvAAgEhaxAivILmtWIrotEIIoAAILoNDIrnNXgEhstAivILntWIrptEIIoAAILpNDIroNXgEhgqAVZIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_15 = new cjs.Graphics().p("EBYiAivILmtWIrotEIInAAILpNDIroNXgEBGlAivILntWIrotEIIoAAILoNDIroNXgEBSoAVZIrUNBIHvAAILVtCIrWsuInwAAgEA0sAivILmtWIrotEIIoAAILoNDIrnNXgEAiwAivILntWIrptEIIoAAILoNDIrnNXgEAuzAVZIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AivILmtWIrotEIIoAAILoNDIroNXgEgBHAivILmtWIrotEIInAAILoNDIrnNXgAK7VZIrUNBIHuAAILVtCIrWsuInuAAgEgTBAivILntWIrptEIIoAAILnNDIrmNXgEgk9AivILntWIrptEIIpAAILoNDIroNXgA46VZIrUNBIHvAAILVtCIrWsuInwAAgEg28AivILntWIrptEIIpAAILoNDIroNXgEhI3AivILntWIrptEIIoAAILoNDIrnNXgEg80AVZIrVNBIHvAAILVtCIrWsuInvAAgEhaxAivILmtWIrotEIIoAAILoNDIrnNXgEhstAivILntWIrptEIIoAAILpNDIroNXgEhgqAVZIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_16 = new cjs.Graphics().p("EBYiAivILmtWIrotEIInAAILpNDIroNXgEBGlAivILntWIrotEIIoAAILoNDIroNXgEBSoAVZIrUNBIHvAAILVtCIrWsuInwAAgEA0sAivILmtWIrotEIIoAAILoNDIrnNXgEAiwAivILntWIrptEIIoAAILoNDIrnNXgEAuzAVZIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AivILmtWIrotEIIoAAILoNDIroNXgEgBHAivILmtWIrotEIInAAILoNDIrnNXgAK7VZIrUNBIHuAAILVtCIrWsuInuAAgEgTBAivILntWIrptEIIoAAILnNDIrmNXgEgk9AivILntWIrptEIIpAAILoNDIroNXgA46VZIrUNBIHvAAILVtCIrWsuInwAAgEg28AivILntWIrptEIIpAAILoNDIroNXgEhI3AivILntWIrptEIIoAAILoNDIrnNXgEg80AVZIrVNBIHvAAILVtCIrWsuInvAAgEhaxAivILmtWIrotEIIoAAILoNDIrnNXgEhstAivILntWIrptEIIoAAILpNDIroNXgEhgqAVZIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_17 = new cjs.Graphics().p("EBYiAivILmtWIrotEIInAAILpNDIroNXgEBGlAivILntWIrotEIIoAAILoNDIroNXgEBSoAVZIrUNBIHvAAILVtCIrWsuInwAAgEA0sAivILmtWIrotEIIoAAILoNDIrnNXgEAiwAivILntWIrptEIIoAAILoNDIrnNXgEAuzAVZIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AivILmtWIrotEIIoAAILoNDIroNXgEgBHAivILmtWIrotEIInAAILoNDIrnNXgAK7VZIrUNBIHuAAILVtCIrWsuInuAAgEgTBAivILntWIrptEIIoAAILnNDIrmNXgEgk9AivILntWIrptEIIpAAILoNDIroNXgA46VZIrUNBIHvAAILVtCIrWsuInwAAgEg28AivILntWIrptEIIpAAILoNDIroNXgEhI3AivILntWIrptEIIoAAILoNDIrnNXgEg80AVZIrVNBIHvAAILVtCIrWsuInvAAgEhaxAivILmtWIrotEIIoAAILoNDIrnNXgEhstAivILntWIrptEIIoAAILpNDIroNXgEhgqAVZIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_18 = new cjs.Graphics().p("EBYiAivILmtWIrotEIInAAILpNDIroNXgEBGlAivILntWIrotEIIoAAILoNDIroNXgEBSoAVZIrUNBIHvAAILVtCIrWsuInwAAgEA0sAivILmtWIrotEIIoAAILoNDIrnNXgEAiwAivILntWIrptEIIoAAILoNDIrnNXgEAuzAVZIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AivILmtWIrotEIIoAAILoNDIroNXgEgBHAivILmtWIrotEIInAAILoNDIrnNXgAK7VZIrUNBIHuAAILVtCIrWsuInuAAgEgTBAivILntWIrptEIIoAAILnNDIrmNXgEgk9AivILntWIrptEIIpAAILoNDIroNXgA46VZIrUNBIHvAAILVtCIrWsuInwAAgEg28AivILntWIrptEIIpAAILoNDIroNXgEhI3AivILntWIrptEIIoAAILoNDIrnNXgEg80AVZIrVNBIHvAAILVtCIrWsuInvAAgEhaxAivILmtWIrotEIIoAAILoNDIrnNXgEhstAivILntWIrptEIIoAAILpNDIroNXgEhgqAVZIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_19 = new cjs.Graphics().p("EBYiAivILmtWIrotEIInAAILpNDIroNXgEBGlAivILntWIrotEIIoAAILoNDIroNXgEBSoAVZIrUNBIHvAAILVtCIrWsuInwAAgEA0sAivILmtWIrotEIIoAAILoNDIrnNXgEAiwAivILntWIrptEIIoAAILoNDIrnNXgEAuzAVZIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AivILmtWIrotEIIoAAILoNDIroNXgEgBHAivILmtWIrotEIInAAILoNDIrnNXgAK7VZIrUNBIHuAAILVtCIrWsuInuAAgEgTBAivILntWIrptEIIoAAILnNDIrmNXgEgk9AivILntWIrptEIIpAAILoNDIroNXgA46VZIrUNBIHvAAILVtCIrWsuInwAAgEg28AivILntWIrptEIIpAAILoNDIroNXgEhI3AivILntWIrptEIIoAAILoNDIrnNXgEg80AVZIrVNBIHvAAILVtCIrWsuInvAAgEhaxAivILmtWIrotEIIoAAILoNDIrnNXgEhstAivILntWIrptEIIoAAILpNDIroNXgEhgqAVZIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_20 = new cjs.Graphics().p("EBYiAivILmtWIrotEIInAAILpNDIroNXgEBGlAivILntWIrotEIIoAAILoNDIroNXgEBSoAVZIrUNBIHvAAILVtCIrWsuInwAAgEA0sAivILmtWIrotEIIoAAILoNDIrnNXgEAiwAivILntWIrptEIIoAAILoNDIrnNXgEAuzAVZIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AivILmtWIrotEIIoAAILoNDIroNXgEgBHAivILmtWIrotEIInAAILoNDIrnNXgAK7VZIrUNBIHuAAILVtCIrWsuInuAAgEgTBAivILntWIrptEIIoAAILnNDIrmNXgEgk9AivILntWIrptEIIpAAILoNDIroNXgA46VZIrUNBIHvAAILVtCIrWsuInwAAgEg28AivILntWIrptEIIpAAILoNDIroNXgEhI3AivILntWIrptEIIoAAILoNDIrnNXgEg80AVZIrVNBIHvAAILVtCIrWsuInvAAgEhaxAivILmtWIrotEIIoAAILoNDIrnNXgEhstAivILntWIrptEIIoAAILpNDIroNXgEhgqAVZIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_21 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtBIrWsvInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtBIrWsvInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtBIrWsvInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtBIrWsvInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_22 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtBIrWsvInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtBIrWsvInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtBIrWsvInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtBIrWsvInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_23 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtBIrWsvInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtBIrWsvInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtBIrWsvInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtBIrWsvInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_24 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtBIrWsvInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtBIrWsvInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtBIrWsvInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtBIrWsvInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_25 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtBIrWsvInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtBIrWsvInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtBIrWsvInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtBIrWsvInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_26 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtBIrWsvInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtBIrWsvInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtBIrWsvInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtBIrWsvInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_27 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtBIrWsvInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtBIrWsvInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtBIrWsvInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtBIrWsvInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_28 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtBIrWsvInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtBIrWsvInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtBIrWsvInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtBIrWsvInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_29 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtBIrWsvInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtBIrWsvInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtBIrWsvInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtBIrWsvInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_30 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtBIrWsvInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtBIrWsvInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtBIrWsvInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtBIrWsvInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_31 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtBIrWsvInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtBIrWsvInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtBIrWsvInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtBIrWsvInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_32 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtBIrWsvInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtBIrWsvInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtBIrWsvInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtBIrWsvInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_33 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtBIrWsvInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtBIrWsvInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtBIrWsvInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtBIrWsvInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_34 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtCIrWsuInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtCIrWsuInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtCIrWsuInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtCIrWsuInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_35 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtCIrWsuInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtCIrWsuInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtCIrWsuInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtCIrWsuInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_36 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtCIrWsuInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtCIrWsuInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtCIrWsuInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtCIrWsuInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_37 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtCIrWsuInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtCIrWsuInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtCIrWsuInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtCIrWsuInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_38 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtCIrWsuInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtCIrWsuInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtCIrWsuInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtCIrWsuInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_39 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtCIrWsuInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtCIrWsuInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtCIrWsuInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtCIrWsuInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_40 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtCIrWsuInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtCIrWsuInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtCIrWsuInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtCIrWsuInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_41 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtCIrWsuInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtCIrWsuInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtCIrWsuInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtCIrWsuInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_42 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtCIrWsuInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtCIrWsuInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtCIrWsuInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtCIrWsuInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_43 = new cjs.Graphics().p("EBYiAiuILmtWIrotEIInAAILpNDIroNXgEBGlAiuILntWIrotEIIoAAILoNDIroNXgEBSoAVYIrUNBIHvAAILVtCIrWsuInwAAgEA0sAiuILmtWIrotEIIoAAILoNDIrnNXgEAiwAiuILntWIrptEIIoAAILoNDIrnNXgEAuzAVYIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AiuILmtWIrotEIIoAAILoNDIroNXgEgBHAiuILmtWIrotEIInAAILoNDIrnNXgAK7VYIrUNBIHuAAILVtCIrWsuInuAAgEgTBAiuILntWIrptEIIoAAILnNDIrmNXgEgk9AiuILntWIrptEIIpAAILoNDIroNXgA46VYIrUNBIHvAAILVtCIrWsuInwAAgEg28AiuILntWIrptEIIpAAILoNDIroNXgEhI3AiuILntWIrptEIIoAAILoNDIrnNXgEg80AVYIrVNBIHvAAILVtCIrWsuInvAAgEhaxAiuILmtWIrotEIIoAAILoNDIrnNXgEhstAiuILntWIrptEIIoAAILpNDIroNXgEhgqAVYIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_44 = new cjs.Graphics().p("EBYiAitILmtWIrotEIInAAILpNDIroNXgEBGlAitILntWIrotEIIoAAILoNDIroNXgEBSoAVXIrUNBIHvAAILVtBIrWsvInwAAgEA0sAitILmtWIrotEIIoAAILoNDIrnNXgEAiwAitILntWIrptEIIoAAILoNDIrnNXgEAuzAVXIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AitILmtWIrotEIIoAAILoNDIroNXgEgBHAitILmtWIrotEIInAAILoNDIrnNXgAK7VXIrUNBIHuAAILVtBIrWsvInuAAgEgTBAitILntWIrptEIIoAAILnNDIrmNXgEgk9AitILntWIrptEIIpAAILoNDIroNXgA46VXIrUNBIHvAAILVtBIrWsvInwAAgEg28AitILntWIrptEIIpAAILoNDIroNXgEhI3AitILntWIrptEIIoAAILoNDIrnNXgEg80AVXIrVNBIHvAAILVtBIrWsvInvAAgEhaxAitILmtWIrotEIIoAAILoNDIrnNXgEhstAitILntWIrptEIIoAAILpNDIroNXgEhgqAVXIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_45 = new cjs.Graphics().p("EBYiAitILmtWIrotEIInAAILpNDIroNXgEBGlAitILntWIrotEIIoAAILoNDIroNXgEBSoAVXIrUNBIHvAAILVtBIrWsvInwAAgEA0sAitILmtWIrotEIIoAAILoNDIrnNXgEAiwAitILntWIrptEIIoAAILoNDIrnNXgEAuzAVXIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AitILmtWIrotEIIoAAILoNDIroNXgEgBHAitILmtWIrotEIInAAILoNDIrnNXgAK7VXIrUNBIHuAAILVtBIrWsvInuAAgEgTBAitILntWIrptEIIoAAILnNDIrmNXgEgk9AitILntWIrptEIIpAAILoNDIroNXgA46VXIrUNBIHvAAILVtBIrWsvInwAAgEg28AitILntWIrptEIIpAAILoNDIroNXgEhI3AitILntWIrptEIIoAAILoNDIrnNXgEg80AVXIrVNBIHvAAILVtBIrWsvInvAAgEhaxAitILmtWIrotEIIoAAILoNDIrnNXgEhstAitILntWIrptEIIoAAILpNDIroNXgEhgqAVXIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_46 = new cjs.Graphics().p("EBYiAitILmtWIrotEIInAAILpNDIroNXgEBGlAitILntWIrotEIIoAAILoNDIroNXgEBSoAVXIrUNBIHvAAILVtBIrWsvInwAAgEA0sAitILmtWIrotEIIoAAILoNDIrnNXgEAiwAitILntWIrptEIIoAAILoNDIrnNXgEAuzAVXIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AitILmtWIrotEIIoAAILoNDIroNXgEgBHAitILmtWIrotEIInAAILoNDIrnNXgAK7VXIrUNBIHuAAILVtBIrWsvInuAAgEgTBAitILntWIrptEIIoAAILnNDIrmNXgEgk9AitILntWIrptEIIpAAILoNDIroNXgA46VXIrUNBIHvAAILVtBIrWsvInwAAgEg28AitILntWIrptEIIpAAILoNDIroNXgEhI3AitILntWIrptEIIoAAILoNDIrnNXgEg80AVXIrVNBIHvAAILVtBIrWsvInvAAgEhaxAitILmtWIrotEIIoAAILoNDIrnNXgEhstAitILntWIrptEIIoAAILpNDIroNXgEhgqAVXIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_47 = new cjs.Graphics().p("EBYiAitILmtWIrotEIInAAILpNDIroNXgEBGlAitILntWIrotEIIoAAILoNDIroNXgEBSoAVXIrUNBIHvAAILVtBIrWsvInwAAgEA0sAitILmtWIrotEIIoAAILoNDIrnNXgEAiwAitILntWIrptEIIoAAILoNDIrnNXgEAuzAVXIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AitILmtWIrotEIIoAAILoNDIroNXgEgBHAitILmtWIrotEIInAAILoNDIrnNXgAK7VXIrUNBIHuAAILVtBIrWsvInuAAgEgTBAitILntWIrptEIIoAAILnNDIrmNXgEgk9AitILntWIrptEIIpAAILoNDIroNXgA46VXIrUNBIHvAAILVtBIrWsvInwAAgEg28AitILntWIrptEIIpAAILoNDIroNXgEhI3AitILntWIrptEIIoAAILoNDIrnNXgEg80AVXIrVNBIHvAAILVtBIrWsvInvAAgEhaxAitILmtWIrotEIIoAAILoNDIrnNXgEhstAitILntWIrptEIIoAAILpNDIroNXgEhgqAVXIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_48 = new cjs.Graphics().p("EBYiAitILmtWIrotEIInAAILpNDIroNXgEBGlAitILntWIrotEIIoAAILoNDIroNXgEBSoAVXIrUNBIHvAAILVtBIrWsvInwAAgEA0sAitILmtWIrotEIIoAAILoNDIrnNXgEAiwAitILntWIrptEIIoAAILoNDIrnNXgEAuzAVXIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AitILmtWIrotEIIoAAILoNDIroNXgEgBHAitILmtWIrotEIInAAILoNDIrnNXgAK7VXIrUNBIHuAAILVtBIrWsvInuAAgEgTBAitILntWIrptEIIoAAILnNDIrmNXgEgk9AitILntWIrptEIIpAAILoNDIroNXgA46VXIrUNBIHvAAILVtBIrWsvInwAAgEg28AitILntWIrptEIIpAAILoNDIroNXgEhI3AitILntWIrptEIIoAAILoNDIrnNXgEg80AVXIrVNBIHvAAILVtBIrWsvInvAAgEhaxAitILmtWIrotEIIoAAILoNDIrnNXgEhstAitILntWIrptEIIoAAILpNDIroNXgEhgqAVXIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_49 = new cjs.Graphics().p("EBYiAitILmtWIrotEIInAAILpNDIroNXgEBGlAitILntWIrotEIIoAAILoNDIroNXgEBSoAVXIrUNBIHvAAILVtBIrWsvInwAAgEA0sAitILmtWIrotEIIoAAILoNDIrnNXgEAiwAitILntWIrptEIIoAAILoNDIrnNXgEAuzAVXIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AitILmtWIrotEIIoAAILoNDIroNXgEgBHAitILmtWIrotEIInAAILoNDIrnNXgAK7VXIrUNBIHuAAILVtBIrWsvInuAAgEgTBAitILntWIrptEIIoAAILnNDIrmNXgEgk9AitILntWIrptEIIpAAILoNDIroNXgA46VXIrUNBIHvAAILVtBIrWsvInwAAgEg28AitILntWIrptEIIpAAILoNDIroNXgEhI3AitILntWIrptEIIoAAILoNDIrnNXgEg80AVXIrVNBIHvAAILVtBIrWsvInvAAgEhaxAitILmtWIrotEIIoAAILoNDIrnNXgEhstAitILntWIrptEIIoAAILpNDIroNXgEhgqAVXIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_50 = new cjs.Graphics().p("EBYiAitILmtWIrotEIInAAILpNDIroNXgEBGlAitILntWIrotEIIoAAILoNDIroNXgEBSoAVXIrUNBIHvAAILVtBIrWsvInwAAgEA0sAitILmtWIrotEIIoAAILoNDIrnNXgEAiwAitILntWIrptEIIoAAILoNDIrnNXgEAuzAVXIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AitILmtWIrotEIIoAAILoNDIroNXgEgBHAitILmtWIrotEIInAAILoNDIrnNXgAK7VXIrUNBIHuAAILVtBIrWsvInuAAgEgTBAitILntWIrptEIIoAAILnNDIrmNXgEgk9AitILntWIrptEIIpAAILoNDIroNXgA46VXIrUNBIHvAAILVtBIrWsvInwAAgEg28AitILntWIrptEIIpAAILoNDIroNXgEhI3AitILntWIrptEIIoAAILoNDIrnNXgEg80AVXIrVNBIHvAAILVtBIrWsvInvAAgEhaxAitILmtWIrotEIIoAAILoNDIrnNXgEhstAitILntWIrptEIIoAAILpNDIroNXgEhgqAVXIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_51 = new cjs.Graphics().p("EBYiAitILmtWIrotEIInAAILpNDIroNXgEBGlAitILntWIrotEIIoAAILoNDIroNXgEBSoAVXIrUNBIHvAAILVtBIrWsvInwAAgEA0sAitILmtWIrotEIIoAAILoNDIrnNXgEAiwAitILntWIrptEIIoAAILoNDIrnNXgEAuzAVXIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AitILmtWIrotEIIoAAILoNDIroNXgEgBHAitILmtWIrotEIInAAILoNDIrnNXgAK7VXIrUNBIHuAAILVtBIrWsvInuAAgEgTBAitILntWIrptEIIoAAILnNDIrmNXgEgk9AitILntWIrptEIIpAAILoNDIroNXgA46VXIrUNBIHvAAILVtBIrWsvInwAAgEg28AitILntWIrptEIIpAAILoNDIroNXgEhI3AitILntWIrptEIIoAAILoNDIrnNXgEg80AVXIrVNBIHvAAILVtBIrWsvInvAAgEhaxAitILmtWIrotEIIoAAILoNDIrnNXgEhstAitILntWIrptEIIoAAILpNDIroNXgEhgqAVXIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_52 = new cjs.Graphics().p("EBYiAitILmtWIrotEIInAAILpNDIroNXgEBGlAitILntWIrotEIIoAAILoNDIroNXgEBSoAVXIrUNBIHvAAILVtBIrWsvInwAAgEA0sAitILmtWIrotEIIoAAILoNDIrnNXgEAiwAitILntWIrptEIIoAAILoNDIrnNXgEAuzAVXIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AitILmtWIrotEIIoAAILoNDIroNXgEgBHAitILmtWIrotEIInAAILoNDIrnNXgAK7VXIrUNBIHuAAILVtBIrWsvInuAAgEgTBAitILntWIrptEIIoAAILnNDIrmNXgEgk9AitILntWIrptEIIpAAILoNDIroNXgA46VXIrUNBIHvAAILVtBIrWsvInwAAgEg28AitILntWIrptEIIpAAILoNDIroNXgEhI3AitILntWIrptEIIoAAILoNDIrnNXgEg80AVXIrVNBIHvAAILVtBIrWsvInvAAgEhaxAitILmtWIrotEIIoAAILoNDIrnNXgEhstAitILntWIrptEIIoAAILpNDIroNXgEhgqAVXIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_53 = new cjs.Graphics().p("EBYiAitILmtWIrotEIInAAILpNDIroNXgEBGlAitILntWIrotEIIoAAILoNDIroNXgEBSoAVXIrUNBIHvAAILVtCIrWsuInwAAgEA0sAitILmtWIrotEIIoAAILoNDIrnNXgEAiwAitILntWIrptEIIoAAILoNDIrnNXgEAuzAVXIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AitILmtWIrotEIIoAAILoNDIroNXgEgBHAitILmtWIrotEIInAAILoNDIrnNXgAK7VXIrUNBIHuAAILVtCIrWsuInuAAgEgTBAitILntWIrptEIIoAAILnNDIrmNXgEgk9AitILntWIrptEIIpAAILoNDIroNXgA46VXIrUNBIHvAAILVtCIrWsuInwAAgEg28AitILntWIrptEIIpAAILoNDIroNXgEhI3AitILntWIrptEIIoAAILoNDIrnNXgEg80AVXIrVNBIHvAAILVtCIrWsuInvAAgEhaxAitILmtWIrotEIIoAAILoNDIrnNXgEhstAitILntWIrptEIIoAAILpNDIroNXgEhgqAVXIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_54 = new cjs.Graphics().p("EBYiAitILmtWIrotEIInAAILpNDIroNXgEBGlAitILntWIrotEIIoAAILoNDIroNXgEBSoAVXIrUNBIHvAAILVtCIrWsuInwAAgEA0sAitILmtWIrotEIIoAAILoNDIrnNXgEAiwAitILntWIrptEIIoAAILoNDIrnNXgEAuzAVXIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AitILmtWIrotEIIoAAILoNDIroNXgEgBHAitILmtWIrotEIInAAILoNDIrnNXgAK7VXIrUNBIHuAAILVtCIrWsuInuAAgEgTBAitILntWIrptEIIoAAILnNDIrmNXgEgk9AitILntWIrptEIIpAAILoNDIroNXgA46VXIrUNBIHvAAILVtCIrWsuInwAAgEg28AitILntWIrptEIIpAAILoNDIroNXgEhI3AitILntWIrptEIIoAAILoNDIrnNXgEg80AVXIrVNBIHvAAILVtCIrWsuInvAAgEhaxAitILmtWIrotEIIoAAILoNDIrnNXgEhstAitILntWIrptEIIoAAILpNDIroNXgEhgqAVXIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_55 = new cjs.Graphics().p("EBYiAitILmtWIrotEIInAAILpNDIroNXgEBGlAitILntWIrotEIIoAAILoNDIroNXgEBSoAVXIrUNBIHvAAILVtCIrWsuInwAAgEA0sAitILmtWIrotEIIoAAILoNDIrnNXgEAiwAitILntWIrptEIIoAAILoNDIrnNXgEAuzAVXIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AitILmtWIrotEIIoAAILoNDIroNXgEgBHAitILmtWIrotEIInAAILoNDIrnNXgAK7VXIrUNBIHuAAILVtCIrWsuInuAAgEgTBAitILntWIrptEIIoAAILnNDIrmNXgEgk9AitILntWIrptEIIpAAILoNDIroNXgA46VXIrUNBIHvAAILVtCIrWsuInwAAgEg28AitILntWIrptEIIpAAILoNDIroNXgEhI3AitILntWIrptEIIoAAILoNDIrnNXgEg80AVXIrVNBIHvAAILVtCIrWsuInvAAgEhaxAitILmtWIrotEIIoAAILoNDIrnNXgEhstAitILntWIrptEIIoAAILpNDIroNXgEhgqAVXIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_56 = new cjs.Graphics().p("EBYiAitILmtWIrotEIInAAILpNDIroNXgEBGlAitILntWIrotEIIoAAILoNDIroNXgEBSoAVXIrUNBIHvAAILVtCIrWsuInwAAgEA0sAitILmtWIrotEIIoAAILoNDIrnNXgEAiwAitILntWIrptEIIoAAILoNDIrnNXgEAuzAVXIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AitILmtWIrotEIIoAAILoNDIroNXgEgBHAitILmtWIrotEIInAAILoNDIrnNXgAK7VXIrUNBIHuAAILVtCIrWsuInuAAgEgTBAitILntWIrptEIIoAAILnNDIrmNXgEgk9AitILntWIrptEIIpAAILoNDIroNXgA46VXIrUNBIHvAAILVtCIrWsuInwAAgEg28AitILntWIrptEIIpAAILoNDIroNXgEhI3AitILntWIrptEIIoAAILoNDIrnNXgEg80AVXIrVNBIHvAAILVtCIrWsuInvAAgEhaxAitILmtWIrotEIIoAAILoNDIrnNXgEhstAitILntWIrptEIIoAAILpNDIroNXgEhgqAVXIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_57 = new cjs.Graphics().p("EBYiAitILmtWIrotEIInAAILpNDIroNXgEBGlAitILntWIrotEIIoAAILoNDIroNXgEBSoAVXIrUNBIHvAAILVtCIrWsuInwAAgEA0sAitILmtWIrotEIIoAAILoNDIrnNXgEAiwAitILntWIrptEIIoAAILoNDIrnNXgEAuzAVXIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AitILmtWIrotEIIoAAILoNDIroNXgEgBHAitILmtWIrotEIInAAILoNDIrnNXgAK7VXIrUNBIHuAAILVtCIrWsuInuAAgEgTBAitILntWIrptEIIoAAILnNDIrmNXgEgk9AitILntWIrptEIIpAAILoNDIroNXgA46VXIrUNBIHvAAILVtCIrWsuInwAAgEg28AitILntWIrptEIIpAAILoNDIroNXgEhI3AitILntWIrptEIIoAAILoNDIrnNXgEg80AVXIrVNBIHvAAILVtCIrWsuInvAAgEhaxAitILmtWIrotEIIoAAILoNDIrnNXgEhstAitILntWIrptEIIoAAILpNDIroNXgEhgqAVXIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_58 = new cjs.Graphics().p("EBYiAitILmtWIrotEIInAAILpNDIroNXgEBGlAitILntWIrotEIIoAAILoNDIroNXgEBSoAVXIrUNBIHvAAILVtCIrWsuInwAAgEA0sAitILmtWIrotEIIoAAILoNDIrnNXgEAiwAitILntWIrptEIIoAAILoNDIrnNXgEAuzAVXIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AitILmtWIrotEIIoAAILoNDIroNXgEgBHAitILmtWIrotEIInAAILoNDIrnNXgAK7VXIrUNBIHuAAILVtCIrWsuInuAAgEgTBAitILntWIrptEIIoAAILnNDIrmNXgEgk9AitILntWIrptEIIpAAILoNDIroNXgA46VXIrUNBIHvAAILVtCIrWsuInwAAgEg28AitILntWIrptEIIpAAILoNDIroNXgEhI3AitILntWIrptEIIoAAILoNDIrnNXgEg80AVXIrVNBIHvAAILVtCIrWsuInvAAgEhaxAitILmtWIrotEIIoAAILoNDIrnNXgEhstAitILntWIrptEIIoAAILpNDIroNXgEhgqAVXIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_59 = new cjs.Graphics().p("EBYiAitILmtWIrotEIInAAILpNDIroNXgEBGlAitILntWIrotEIIoAAILoNDIroNXgEBSoAVXIrUNBIHvAAILVtCIrWsuInwAAgEA0sAitILmtWIrotEIIoAAILoNDIrnNXgEAiwAitILntWIrptEIIoAAILoNDIrnNXgEAuzAVXIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AitILmtWIrotEIIoAAILoNDIroNXgEgBHAitILmtWIrotEIInAAILoNDIrnNXgAK7VXIrUNBIHuAAILVtCIrWsuInuAAgEgTBAitILntWIrptEIIoAAILnNDIrmNXgEgk9AitILntWIrptEIIpAAILoNDIroNXgA46VXIrUNBIHvAAILVtCIrWsuInwAAgEg28AitILntWIrptEIIpAAILoNDIroNXgEhI3AitILntWIrptEIIoAAILoNDIrnNXgEg80AVXIrVNBIHvAAILVtCIrWsuInvAAgEhaxAitILmtWIrotEIIoAAILoNDIrnNXgEhstAitILntWIrptEIIoAAILpNDIroNXgEhgqAVXIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_60 = new cjs.Graphics().p("EBYiAitILmtWIrotEIInAAILpNDIroNXgEBGlAitILntWIrotEIIoAAILoNDIroNXgEBSoAVXIrUNAIHvAAILVtBIrWsvInwAAgEA0sAitILmtWIrotEIIoAAILoNDIrnNXgEAiwAitILntWIrptEIIoAAILoNDIrnNXgEAuzAVXIrVNAIHvAAILWtBIrWsvInwAAgEAQ0AitILmtWIrotEIIoAAILoNDIroNXgEgBHAitILmtWIrotEIInAAILoNDIrnNXgAK7VXIrUNAIHuAAILVtBIrWsvInuAAgEgTBAitILntWIrptEIIoAAILnNDIrmNXgEgk9AitILntWIrptEIIpAAILoNDIroNXgA46VXIrUNAIHvAAILVtBIrWsvInwAAgEg28AitILntWIrptEIIpAAILoNDIroNXgEhI3AitILntWIrptEIIoAAILoNDIrnNXgEg80AVXIrVNAIHvAAILVtBIrWsvInvAAgEhaxAitILmtWIrotEIIoAAILoNDIrnNXgEhstAitILntWIrptEIIoAAILpNDIroNXgEhgqAVXIrVNAIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_61 = new cjs.Graphics().p("EBYiAisILmtWIrotEIInAAILpNDIroNXgEBGlAisILntWIrotEIIoAAILoNDIroNXgEBSoAVWIrUNBIHvAAILVtBIrWsvInwAAgEA0sAisILmtWIrotEIIoAAILoNDIrnNXgEAiwAisILntWIrptEIIoAAILoNDIrnNXgEAuzAVWIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AisILmtWIrotEIIoAAILoNDIroNXgEgBHAisILmtWIrotEIInAAILoNDIrnNXgAK7VWIrUNBIHuAAILVtBIrWsvInuAAgEgTBAisILntWIrptEIIoAAILnNDIrmNXgEgk9AisILntWIrptEIIpAAILoNDIroNXgA46VWIrUNBIHvAAILVtBIrWsvInwAAgEg28AisILntWIrptEIIpAAILoNDIroNXgEhI3AisILntWIrptEIIoAAILoNDIrnNXgEg80AVWIrVNBIHvAAILVtBIrWsvInvAAgEhaxAisILmtWIrotEIIoAAILoNDIrnNXgEhstAisILntWIrptEIIoAAILpNDIroNXgEhgqAVWIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_62 = new cjs.Graphics().p("EBYiAisILmtWIrotEIInAAILpNDIroNXgEBGlAisILntWIrotEIIoAAILoNDIroNXgEBSoAVWIrUNBIHvAAILVtBIrWsvInwAAgEA0sAisILmtWIrotEIIoAAILoNDIrnNXgEAiwAisILntWIrptEIIoAAILoNDIrnNXgEAuzAVWIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AisILmtWIrotEIIoAAILoNDIroNXgEgBHAisILmtWIrotEIInAAILoNDIrnNXgAK7VWIrUNBIHuAAILVtBIrWsvInuAAgEgTBAisILntWIrptEIIoAAILnNDIrmNXgEgk9AisILntWIrptEIIpAAILoNDIroNXgA46VWIrUNBIHvAAILVtBIrWsvInwAAgEg28AisILntWIrptEIIpAAILoNDIroNXgEhI3AisILntWIrptEIIoAAILoNDIrnNXgEg80AVWIrVNBIHvAAILVtBIrWsvInvAAgEhaxAisILmtWIrotEIIoAAILoNDIrnNXgEhstAisILntWIrptEIIoAAILpNDIroNXgEhgqAVWIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_63 = new cjs.Graphics().p("EBYiAisILmtWIrotEIInAAILpNDIroNXgEBGlAisILntWIrotEIIoAAILoNDIroNXgEBSoAVWIrUNBIHvAAILVtBIrWsvInwAAgEA0sAisILmtWIrotEIIoAAILoNDIrnNXgEAiwAisILntWIrptEIIoAAILoNDIrnNXgEAuzAVWIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AisILmtWIrotEIIoAAILoNDIroNXgEgBHAisILmtWIrotEIInAAILoNDIrnNXgAK7VWIrUNBIHuAAILVtBIrWsvInuAAgEgTBAisILntWIrptEIIoAAILnNDIrmNXgEgk9AisILntWIrptEIIpAAILoNDIroNXgA46VWIrUNBIHvAAILVtBIrWsvInwAAgEg28AisILntWIrptEIIpAAILoNDIroNXgEhI3AisILntWIrptEIIoAAILoNDIrnNXgEg80AVWIrVNBIHvAAILVtBIrWsvInvAAgEhaxAisILmtWIrotEIIoAAILoNDIrnNXgEhstAisILntWIrptEIIoAAILpNDIroNXgEhgqAVWIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_64 = new cjs.Graphics().p("EBYiAisILmtWIrotEIInAAILpNDIroNXgEBGlAisILntWIrotEIIoAAILoNDIroNXgEBSoAVWIrUNBIHvAAILVtBIrWsvInwAAgEA0sAisILmtWIrotEIIoAAILoNDIrnNXgEAiwAisILntWIrptEIIoAAILoNDIrnNXgEAuzAVWIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AisILmtWIrotEIIoAAILoNDIroNXgEgBHAisILmtWIrotEIInAAILoNDIrnNXgAK7VWIrUNBIHuAAILVtBIrWsvInuAAgEgTBAisILntWIrptEIIoAAILnNDIrmNXgEgk9AisILntWIrptEIIpAAILoNDIroNXgA46VWIrUNBIHvAAILVtBIrWsvInwAAgEg28AisILntWIrptEIIpAAILoNDIroNXgEhI3AisILntWIrptEIIoAAILoNDIrnNXgEg80AVWIrVNBIHvAAILVtBIrWsvInvAAgEhaxAisILmtWIrotEIIoAAILoNDIrnNXgEhstAisILntWIrptEIIoAAILpNDIroNXgEhgqAVWIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_65 = new cjs.Graphics().p("EBYiAisILmtWIrotEIInAAILpNDIroNXgEBGlAisILntWIrotEIIoAAILoNDIroNXgEBSoAVWIrUNBIHvAAILVtBIrWsvInwAAgEA0sAisILmtWIrotEIIoAAILoNDIrnNXgEAiwAisILntWIrptEIIoAAILoNDIrnNXgEAuzAVWIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AisILmtWIrotEIIoAAILoNDIroNXgEgBHAisILmtWIrotEIInAAILoNDIrnNXgAK7VWIrUNBIHuAAILVtBIrWsvInuAAgEgTBAisILntWIrptEIIoAAILnNDIrmNXgEgk9AisILntWIrptEIIpAAILoNDIroNXgA46VWIrUNBIHvAAILVtBIrWsvInwAAgEg28AisILntWIrptEIIpAAILoNDIroNXgEhI3AisILntWIrptEIIoAAILoNDIrnNXgEg80AVWIrVNBIHvAAILVtBIrWsvInvAAgEhaxAisILmtWIrotEIIoAAILoNDIrnNXgEhstAisILntWIrptEIIoAAILpNDIroNXgEhgqAVWIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_66 = new cjs.Graphics().p("EBYiAisILmtWIrotEIInAAILpNDIroNXgEBGlAisILntWIrotEIIoAAILoNDIroNXgEBSoAVWIrUNBIHvAAILVtBIrWsvInwAAgEA0sAisILmtWIrotEIIoAAILoNDIrnNXgEAiwAisILntWIrptEIIoAAILoNDIrnNXgEAuzAVWIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AisILmtWIrotEIIoAAILoNDIroNXgEgBHAisILmtWIrotEIInAAILoNDIrnNXgAK7VWIrUNBIHuAAILVtBIrWsvInuAAgEgTBAisILntWIrptEIIoAAILnNDIrmNXgEgk9AisILntWIrptEIIpAAILoNDIroNXgA46VWIrUNBIHvAAILVtBIrWsvInwAAgEg28AisILntWIrptEIIpAAILoNDIroNXgEhI3AisILntWIrptEIIoAAILoNDIrnNXgEg80AVWIrVNBIHvAAILVtBIrWsvInvAAgEhaxAisILmtWIrotEIIoAAILoNDIrnNXgEhstAisILntWIrptEIIoAAILpNDIroNXgEhgqAVWIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_67 = new cjs.Graphics().p("EBYiAisILmtWIrotEIInAAILpNDIroNXgEBGlAisILntWIrotEIIoAAILoNDIroNXgEBSoAVWIrUNBIHvAAILVtBIrWsvInwAAgEA0sAisILmtWIrotEIIoAAILoNDIrnNXgEAiwAisILntWIrptEIIoAAILoNDIrnNXgEAuzAVWIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AisILmtWIrotEIIoAAILoNDIroNXgEgBHAisILmtWIrotEIInAAILoNDIrnNXgAK7VWIrUNBIHuAAILVtBIrWsvInuAAgEgTBAisILntWIrptEIIoAAILnNDIrmNXgEgk9AisILntWIrptEIIpAAILoNDIroNXgA46VWIrUNBIHvAAILVtBIrWsvInwAAgEg28AisILntWIrptEIIpAAILoNDIroNXgEhI3AisILntWIrptEIIoAAILoNDIrnNXgEg80AVWIrVNBIHvAAILVtBIrWsvInvAAgEhaxAisILmtWIrotEIIoAAILoNDIrnNXgEhstAisILntWIrptEIIoAAILpNDIroNXgEhgqAVWIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_68 = new cjs.Graphics().p("EBYiAisILmtWIrotEIInAAILpNDIroNXgEBGlAisILntWIrotEIIoAAILoNDIroNXgEBSoAVWIrUNBIHvAAILVtCIrWsuInwAAgEA0sAisILmtWIrotEIIoAAILoNDIrnNXgEAiwAisILntWIrptEIIoAAILoNDIrnNXgEAuzAVWIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AisILmtWIrotEIIoAAILoNDIroNXgEgBHAisILmtWIrotEIInAAILoNDIrnNXgAK7VWIrUNBIHuAAILVtCIrWsuInuAAgEgTBAisILntWIrptEIIoAAILnNDIrmNXgEgk9AisILntWIrptEIIpAAILoNDIroNXgA46VWIrUNBIHvAAILVtCIrWsuInwAAgEg28AisILntWIrptEIIpAAILoNDIroNXgEhI3AisILntWIrptEIIoAAILoNDIrnNXgEg80AVWIrVNBIHvAAILVtCIrWsuInvAAgEhaxAisILmtWIrotEIIoAAILoNDIrnNXgEhstAisILntWIrptEIIoAAILpNDIroNXgEhgqAVWIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_69 = new cjs.Graphics().p("EBYiAisILmtWIrotEIInAAILpNDIroNXgEBGlAisILntWIrotEIIoAAILoNDIroNXgEBSoAVWIrUNBIHvAAILVtCIrWsuInwAAgEA0sAisILmtWIrotEIIoAAILoNDIrnNXgEAiwAisILntWIrptEIIoAAILoNDIrnNXgEAuzAVWIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AisILmtWIrotEIIoAAILoNDIroNXgEgBHAisILmtWIrotEIInAAILoNDIrnNXgAK7VWIrUNBIHuAAILVtCIrWsuInuAAgEgTBAisILntWIrptEIIoAAILnNDIrmNXgEgk9AisILntWIrptEIIpAAILoNDIroNXgA46VWIrUNBIHvAAILVtCIrWsuInwAAgEg28AisILntWIrptEIIpAAILoNDIroNXgEhI3AisILntWIrptEIIoAAILoNDIrnNXgEg80AVWIrVNBIHvAAILVtCIrWsuInvAAgEhaxAisILmtWIrotEIIoAAILoNDIrnNXgEhstAisILntWIrptEIIoAAILpNDIroNXgEhgqAVWIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_70 = new cjs.Graphics().p("EBYiAisILmtWIrotEIInAAILpNDIroNXgEBGlAisILntWIrotEIIoAAILoNDIroNXgEBSoAVWIrUNBIHvAAILVtCIrWsuInwAAgEA0sAisILmtWIrotEIIoAAILoNDIrnNXgEAiwAisILntWIrptEIIoAAILoNDIrnNXgEAuzAVWIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AisILmtWIrotEIIoAAILoNDIroNXgEgBHAisILmtWIrotEIInAAILoNDIrnNXgAK7VWIrUNBIHuAAILVtCIrWsuInuAAgEgTBAisILntWIrptEIIoAAILnNDIrmNXgEgk9AisILntWIrptEIIpAAILoNDIroNXgA46VWIrUNBIHvAAILVtCIrWsuInwAAgEg28AisILntWIrptEIIpAAILoNDIroNXgEhI3AisILntWIrptEIIoAAILoNDIrnNXgEg80AVWIrVNBIHvAAILVtCIrWsuInvAAgEhaxAisILmtWIrotEIIoAAILoNDIrnNXgEhstAisILntWIrptEIIoAAILpNDIroNXgEhgqAVWIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_71 = new cjs.Graphics().p("EBYiAisILmtWIrotEIInAAILpNDIroNXgEBGlAisILntWIrotEIIoAAILoNDIroNXgEBSoAVWIrUNBIHvAAILVtCIrWsuInwAAgEA0sAisILmtWIrotEIIoAAILoNDIrnNXgEAiwAisILntWIrptEIIoAAILoNDIrnNXgEAuzAVWIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AisILmtWIrotEIIoAAILoNDIroNXgEgBHAisILmtWIrotEIInAAILoNDIrnNXgAK7VWIrUNBIHuAAILVtCIrWsuInuAAgEgTBAisILntWIrptEIIoAAILnNDIrmNXgEgk9AisILntWIrptEIIpAAILoNDIroNXgA46VWIrUNBIHvAAILVtCIrWsuInwAAgEg28AisILntWIrptEIIpAAILoNDIroNXgEhI3AisILntWIrptEIIoAAILoNDIrnNXgEg80AVWIrVNBIHvAAILVtCIrWsuInvAAgEhaxAisILmtWIrotEIIoAAILoNDIrnNXgEhstAisILntWIrptEIIoAAILpNDIroNXgEhgqAVWIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_72 = new cjs.Graphics().p("EBYiAisILmtWIrotEIInAAILpNDIroNXgEBGlAisILntWIrotEIIoAAILoNDIroNXgEBSoAVWIrUNBIHvAAILVtCIrWsuInwAAgEA0sAisILmtWIrotEIIoAAILoNDIrnNXgEAiwAisILntWIrptEIIoAAILoNDIrnNXgEAuzAVWIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AisILmtWIrotEIIoAAILoNDIroNXgEgBHAisILmtWIrotEIInAAILoNDIrnNXgAK7VWIrUNBIHuAAILVtCIrWsuInuAAgEgTBAisILntWIrptEIIoAAILnNDIrmNXgEgk9AisILntWIrptEIIpAAILoNDIroNXgA46VWIrUNBIHvAAILVtCIrWsuInwAAgEg28AisILntWIrptEIIpAAILoNDIroNXgEhI3AisILntWIrptEIIoAAILoNDIrnNXgEg80AVWIrVNBIHvAAILVtCIrWsuInvAAgEhaxAisILmtWIrotEIIoAAILoNDIrnNXgEhstAisILntWIrptEIIoAAILpNDIroNXgEhgqAVWIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_73 = new cjs.Graphics().p("EBYiAisILmtWIrotEIInAAILpNDIroNXgEBGlAisILntWIrotEIIoAAILoNDIroNXgEBSoAVWIrUNBIHvAAILVtCIrWsuInwAAgEA0sAisILmtWIrotEIIoAAILoNDIrnNXgEAiwAisILntWIrptEIIoAAILoNDIrnNXgEAuzAVWIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AisILmtWIrotEIIoAAILoNDIroNXgEgBHAisILmtWIrotEIInAAILoNDIrnNXgAK7VWIrUNBIHuAAILVtCIrWsuInuAAgEgTBAisILntWIrptEIIoAAILnNDIrmNXgEgk9AisILntWIrptEIIpAAILoNDIroNXgA46VWIrUNBIHvAAILVtCIrWsuInwAAgEg28AisILntWIrptEIIpAAILoNDIroNXgEhI3AisILntWIrptEIIoAAILoNDIrnNXgEg80AVWIrVNBIHvAAILVtCIrWsuInvAAgEhaxAisILmtWIrotEIIoAAILoNDIrnNXgEhstAisILntWIrptEIIoAAILpNDIroNXgEhgqAVWIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_74 = new cjs.Graphics().p("EBYiAirILmtWIrotEIInAAILpNDIroNXgEBGlAirILntWIrotEIIoAAILoNDIroNXgEBSoAVVIrUNBIHvAAILVtBIrWsvInwAAgEA0sAirILmtWIrotEIIoAAILoNDIrnNXgEAiwAirILntWIrptEIIoAAILoNDIrnNXgEAuzAVVIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AirILmtWIrotEIIoAAILoNDIroNXgEgBHAirILmtWIrotEIInAAILoNDIrnNXgAK7VVIrUNBIHuAAILVtBIrWsvInuAAgEgTBAirILntWIrptEIIoAAILnNDIrmNXgEgk9AirILntWIrptEIIpAAILoNDIroNXgA46VVIrUNBIHvAAILVtBIrWsvInwAAgEg28AirILntWIrptEIIpAAILoNDIroNXgEhI3AirILntWIrptEIIoAAILoNDIrnNXgEg80AVVIrVNBIHvAAILVtBIrWsvInvAAgEhaxAirILmtWIrotEIIoAAILoNDIrnNXgEhstAirILntWIrptEIIoAAILpNDIroNXgEhgqAVVIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_75 = new cjs.Graphics().p("EBYiAirILmtWIrotEIInAAILpNDIroNXgEBGlAirILntWIrotEIIoAAILoNDIroNXgEBSoAVVIrUNBIHvAAILVtBIrWsvInwAAgEA0sAirILmtWIrotEIIoAAILoNDIrnNXgEAiwAirILntWIrptEIIoAAILoNDIrnNXgEAuzAVVIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AirILmtWIrotEIIoAAILoNDIroNXgEgBHAirILmtWIrotEIInAAILoNDIrnNXgAK7VVIrUNBIHuAAILVtBIrWsvInuAAgEgTBAirILntWIrptEIIoAAILnNDIrmNXgEgk9AirILntWIrptEIIpAAILoNDIroNXgA46VVIrUNBIHvAAILVtBIrWsvInwAAgEg28AirILntWIrptEIIpAAILoNDIroNXgEhI3AirILntWIrptEIIoAAILoNDIrnNXgEg80AVVIrVNBIHvAAILVtBIrWsvInvAAgEhaxAirILmtWIrotEIIoAAILoNDIrnNXgEhstAirILntWIrptEIIoAAILpNDIroNXgEhgqAVVIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_76 = new cjs.Graphics().p("EBYiAirILmtWIrotEIInAAILpNDIroNXgEBGlAirILntWIrotEIIoAAILoNDIroNXgEBSoAVVIrUNBIHvAAILVtBIrWsvInwAAgEA0sAirILmtWIrotEIIoAAILoNDIrnNXgEAiwAirILntWIrptEIIoAAILoNDIrnNXgEAuzAVVIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AirILmtWIrotEIIoAAILoNDIroNXgEgBHAirILmtWIrotEIInAAILoNDIrnNXgAK7VVIrUNBIHuAAILVtBIrWsvInuAAgEgTBAirILntWIrptEIIoAAILnNDIrmNXgEgk9AirILntWIrptEIIpAAILoNDIroNXgA46VVIrUNBIHvAAILVtBIrWsvInwAAgEg28AirILntWIrptEIIpAAILoNDIroNXgEhI3AirILntWIrptEIIoAAILoNDIrnNXgEg80AVVIrVNBIHvAAILVtBIrWsvInvAAgEhaxAirILmtWIrotEIIoAAILoNDIrnNXgEhstAirILntWIrptEIIoAAILpNDIroNXgEhgqAVVIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_77 = new cjs.Graphics().p("EBYiAirILmtWIrotEIInAAILpNDIroNXgEBGlAirILntWIrotEIIoAAILoNDIroNXgEBSoAVVIrUNBIHvAAILVtBIrWsvInwAAgEA0sAirILmtWIrotEIIoAAILoNDIrnNXgEAiwAirILntWIrptEIIoAAILoNDIrnNXgEAuzAVVIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AirILmtWIrotEIIoAAILoNDIroNXgEgBHAirILmtWIrotEIInAAILoNDIrnNXgAK7VVIrUNBIHuAAILVtBIrWsvInuAAgEgTBAirILntWIrptEIIoAAILnNDIrmNXgEgk9AirILntWIrptEIIpAAILoNDIroNXgA46VVIrUNBIHvAAILVtBIrWsvInwAAgEg28AirILntWIrptEIIpAAILoNDIroNXgEhI3AirILntWIrptEIIoAAILoNDIrnNXgEg80AVVIrVNBIHvAAILVtBIrWsvInvAAgEhaxAirILmtWIrotEIIoAAILoNDIrnNXgEhstAirILntWIrptEIIoAAILpNDIroNXgEhgqAVVIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_78 = new cjs.Graphics().p("EBYiAirILmtWIrotEIInAAILpNDIroNXgEBGlAirILntWIrotEIIoAAILoNDIroNXgEBSoAVVIrUNBIHvAAILVtBIrWsvInwAAgEA0sAirILmtWIrotEIIoAAILoNDIrnNXgEAiwAirILntWIrptEIIoAAILoNDIrnNXgEAuzAVVIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AirILmtWIrotEIIoAAILoNDIroNXgEgBHAirILmtWIrotEIInAAILoNDIrnNXgAK7VVIrUNBIHuAAILVtBIrWsvInuAAgEgTBAirILntWIrptEIIoAAILnNDIrmNXgEgk9AirILntWIrptEIIpAAILoNDIroNXgA46VVIrUNBIHvAAILVtBIrWsvInwAAgEg28AirILntWIrptEIIpAAILoNDIroNXgEhI3AirILntWIrptEIIoAAILoNDIrnNXgEg80AVVIrVNBIHvAAILVtBIrWsvInvAAgEhaxAirILmtWIrotEIIoAAILoNDIrnNXgEhstAirILntWIrptEIIoAAILpNDIroNXgEhgqAVVIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_79 = new cjs.Graphics().p("EBYiAirILmtWIrotEIInAAILpNDIroNXgEBGlAirILntWIrotEIIoAAILoNDIroNXgEBSoAVVIrUNBIHvAAILVtBIrWsvInwAAgEA0sAirILmtWIrotEIIoAAILoNDIrnNXgEAiwAirILntWIrptEIIoAAILoNDIrnNXgEAuzAVVIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AirILmtWIrotEIIoAAILoNDIroNXgEgBHAirILmtWIrotEIInAAILoNDIrnNXgAK7VVIrUNBIHuAAILVtBIrWsvInuAAgEgTBAirILntWIrptEIIoAAILnNDIrmNXgEgk9AirILntWIrptEIIpAAILoNDIroNXgA46VVIrUNBIHvAAILVtBIrWsvInwAAgEg28AirILntWIrptEIIpAAILoNDIroNXgEhI3AirILntWIrptEIIoAAILoNDIrnNXgEg80AVVIrVNBIHvAAILVtBIrWsvInvAAgEhaxAirILmtWIrotEIIoAAILoNDIrnNXgEhstAirILntWIrptEIIoAAILpNDIroNXgEhgqAVVIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_80 = new cjs.Graphics().p("EBYiAirILmtWIrotEIInAAILpNDIroNXgEBGlAirILntWIrotEIIoAAILoNDIroNXgEBSoAVVIrUNBIHvAAILVtBIrWsvInwAAgEA0sAirILmtWIrotEIIoAAILoNDIrnNXgEAiwAirILntWIrptEIIoAAILoNDIrnNXgEAuzAVVIrVNBIHvAAILWtBIrWsvInwAAgEAQ0AirILmtWIrotEIIoAAILoNDIroNXgEgBHAirILmtWIrotEIInAAILoNDIrnNXgAK7VVIrUNBIHuAAILVtBIrWsvInuAAgEgTBAirILntWIrptEIIoAAILnNDIrmNXgEgk9AirILntWIrptEIIpAAILoNDIroNXgA46VVIrUNBIHvAAILVtBIrWsvInwAAgEg28AirILntWIrptEIIpAAILoNDIroNXgEhI3AirILntWIrptEIIoAAILoNDIrnNXgEg80AVVIrVNBIHvAAILVtBIrWsvInvAAgEhaxAirILmtWIrotEIIoAAILoNDIrnNXgEhstAirILntWIrptEIIoAAILpNDIroNXgEhgqAVVIrVNBIHvAAILWtBIrWsvInwAAg");
	var mask_3_graphics_81 = new cjs.Graphics().p("EBYiAirILmtWIrotEIInAAILpNDIroNXgEBGlAirILntWIrotEIIoAAILoNDIroNXgEBSoAVVIrUNBIHvAAILVtCIrWsuInwAAgEA0sAirILmtWIrotEIIoAAILoNDIrnNXgEAiwAirILntWIrptEIIoAAILoNDIrnNXgEAuzAVVIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AirILmtWIrotEIIoAAILoNDIroNXgEgBHAirILmtWIrotEIInAAILoNDIrnNXgAK7VVIrUNBIHuAAILVtCIrWsuInuAAgEgTBAirILntWIrptEIIoAAILnNDIrmNXgEgk9AirILntWIrptEIIpAAILoNDIroNXgA46VVIrUNBIHvAAILVtCIrWsuInwAAgEg28AirILntWIrptEIIpAAILoNDIroNXgEhI3AirILntWIrptEIIoAAILoNDIrnNXgEg80AVVIrVNBIHvAAILVtCIrWsuInvAAgEhaxAirILmtWIrotEIIoAAILoNDIrnNXgEhstAirILntWIrptEIIoAAILpNDIroNXgEhgqAVVIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_82 = new cjs.Graphics().p("EBYiAirILmtWIrotEIInAAILpNDIroNXgEBGlAirILntWIrotEIIoAAILoNDIroNXgEBSoAVVIrUNBIHvAAILVtCIrWsuInwAAgEA0sAirILmtWIrotEIIoAAILoNDIrnNXgEAiwAirILntWIrptEIIoAAILoNDIrnNXgEAuzAVVIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AirILmtWIrotEIIoAAILoNDIroNXgEgBHAirILmtWIrotEIInAAILoNDIrnNXgAK7VVIrUNBIHuAAILVtCIrWsuInuAAgEgTBAirILntWIrptEIIoAAILnNDIrmNXgEgk9AirILntWIrptEIIpAAILoNDIroNXgA46VVIrUNBIHvAAILVtCIrWsuInwAAgEg28AirILntWIrptEIIpAAILoNDIroNXgEhI3AirILntWIrptEIIoAAILoNDIrnNXgEg80AVVIrVNBIHvAAILVtCIrWsuInvAAgEhaxAirILmtWIrotEIIoAAILoNDIrnNXgEhstAirILntWIrptEIIoAAILpNDIroNXgEhgqAVVIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_83 = new cjs.Graphics().p("EBYiAirILmtWIrotEIInAAILpNDIroNXgEBGlAirILntWIrotEIIoAAILoNDIroNXgEBSoAVVIrUNBIHvAAILVtCIrWsuInwAAgEA0sAirILmtWIrotEIIoAAILoNDIrnNXgEAiwAirILntWIrptEIIoAAILoNDIrnNXgEAuzAVVIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AirILmtWIrotEIIoAAILoNDIroNXgEgBHAirILmtWIrotEIInAAILoNDIrnNXgAK7VVIrUNBIHuAAILVtCIrWsuInuAAgEgTBAirILntWIrptEIIoAAILnNDIrmNXgEgk9AirILntWIrptEIIpAAILoNDIroNXgA46VVIrUNBIHvAAILVtCIrWsuInwAAgEg28AirILntWIrptEIIpAAILoNDIroNXgEhI3AirILntWIrptEIIoAAILoNDIrnNXgEg80AVVIrVNBIHvAAILVtCIrWsuInvAAgEhaxAirILmtWIrotEIIoAAILoNDIrnNXgEhstAirILntWIrptEIIoAAILpNDIroNXgEhgqAVVIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_84 = new cjs.Graphics().p("EBYiAirILmtWIrotEIInAAILpNDIroNXgEBGlAirILntWIrotEIIoAAILoNDIroNXgEBSoAVVIrUNBIHvAAILVtCIrWsuInwAAgEA0sAirILmtWIrotEIIoAAILoNDIrnNXgEAiwAirILntWIrptEIIoAAILoNDIrnNXgEAuzAVVIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AirILmtWIrotEIIoAAILoNDIroNXgEgBHAirILmtWIrotEIInAAILoNDIrnNXgAK7VVIrUNBIHuAAILVtCIrWsuInuAAgEgTBAirILntWIrptEIIoAAILnNDIrmNXgEgk9AirILntWIrptEIIpAAILoNDIroNXgA46VVIrUNBIHvAAILVtCIrWsuInwAAgEg28AirILntWIrptEIIpAAILoNDIroNXgEhI3AirILntWIrptEIIoAAILoNDIrnNXgEg80AVVIrVNBIHvAAILVtCIrWsuInvAAgEhaxAirILmtWIrotEIIoAAILoNDIrnNXgEhstAirILntWIrptEIIoAAILpNDIroNXgEhgqAVVIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_85 = new cjs.Graphics().p("EBYiAirILmtWIrotEIInAAILpNDIroNXgEBGlAirILntWIrotEIIoAAILoNDIroNXgEBSoAVVIrUNBIHvAAILVtCIrWsuInwAAgEA0sAirILmtWIrotEIIoAAILoNDIrnNXgEAiwAirILntWIrptEIIoAAILoNDIrnNXgEAuzAVVIrVNBIHvAAILWtCIrWsuInwAAgEAQ0AirILmtWIrotEIIoAAILoNDIroNXgEgBHAirILmtWIrotEIInAAILoNDIrnNXgAK7VVIrUNBIHuAAILVtCIrWsuInuAAgEgTBAirILntWIrptEIIoAAILnNDIrmNXgEgk9AirILntWIrptEIIpAAILoNDIroNXgA46VVIrUNBIHvAAILVtCIrWsuInwAAgEg28AirILntWIrptEIIpAAILoNDIroNXgEhI3AirILntWIrptEIIoAAILoNDIrnNXgEg80AVVIrVNBIHvAAILVtCIrWsuInvAAgEhaxAirILmtWIrotEIIoAAILoNDIrnNXgEhstAirILntWIrptEIIoAAILpNDIroNXgEhgqAVVIrVNBIHvAAILWtCIrWsuInwAAg");
	var mask_3_graphics_86 = new cjs.Graphics().p("EBYiAiqILmtWIrotEIInAAILpNDIroNXgEBGlAiqILntWIrotEIIoAAILoNDIroNXgEBSoAVUIrUNCIHvAAILVtCIrWsuInwAAgEA0sAiqILmtWIrotEIIoAAILoNDIrnNXgEAiwAiqILntWIrptEIIoAAILoNDIrnNXgEAuzAVUIrVNCIHvAAILWtCIrWsuInwAAgEAQ0AiqILmtWIrotEIIoAAILoNDIroNXgEgBHAiqILmtWIrotEIInAAILoNDIrnNXgAK7VUIrUNCIHuAAILVtCIrWsuInuAAgEgTBAiqILntWIrptEIIoAAILnNDIrmNXgEgk9AiqILntWIrptEIIpAAILoNDIroNXgA46VUIrUNCIHvAAILVtCIrWsuInwAAgEg28AiqILntWIrptEIIpAAILoNDIroNXgEhI3AiqILntWIrptEIIoAAILoNDIrnNXgEg80AVUIrVNCIHvAAILVtCIrWsuInvAAgEhaxAiqILmtWIrotEIIoAAILoNDIrnNXgEhstAiqILntWIrptEIIoAAILpNDIroNXgEhgqAVUIrVNCIHvAAILWtCIrWsuInwAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_3_graphics_13,x:-572.075,y:222.275}).wait(1).to({graphics:mask_3_graphics_14,x:-566.2105,y:222.272}).wait(1).to({graphics:mask_3_graphics_15,x:-560.1875,y:222.269}).wait(1).to({graphics:mask_3_graphics_16,x:-554.0059,y:222.2659}).wait(1).to({graphics:mask_3_graphics_17,x:-547.6659,y:222.2627}).wait(1).to({graphics:mask_3_graphics_18,x:-541.1674,y:222.2594}).wait(1).to({graphics:mask_3_graphics_19,x:-534.5103,y:222.2561}).wait(1).to({graphics:mask_3_graphics_20,x:-527.6948,y:222.2527}).wait(1).to({graphics:mask_3_graphics_21,x:-520.7208,y:222.2492}).wait(1).to({graphics:mask_3_graphics_22,x:-513.5883,y:222.2456}).wait(1).to({graphics:mask_3_graphics_23,x:-506.2972,y:222.2419}).wait(1).to({graphics:mask_3_graphics_24,x:-498.8477,y:222.2382}).wait(1).to({graphics:mask_3_graphics_25,x:-491.2397,y:222.2343}).wait(1).to({graphics:mask_3_graphics_26,x:-483.4731,y:222.2304}).wait(1).to({graphics:mask_3_graphics_27,x:-475.5481,y:222.2264}).wait(1).to({graphics:mask_3_graphics_28,x:-467.4646,y:222.2224}).wait(1).to({graphics:mask_3_graphics_29,x:-459.2225,y:222.2182}).wait(1).to({graphics:mask_3_graphics_30,x:-450.822,y:222.214}).wait(1).to({graphics:mask_3_graphics_31,x:-442.263,y:222.2097}).wait(1).to({graphics:mask_3_graphics_32,x:-433.5454,y:222.2053}).wait(1).to({graphics:mask_3_graphics_33,x:-424.6694,y:222.2008}).wait(1).to({graphics:mask_3_graphics_34,x:-415.6349,y:222.1963}).wait(1).to({graphics:mask_3_graphics_35,x:-406.4418,y:222.1917}).wait(1).to({graphics:mask_3_graphics_36,x:-397.0903,y:222.187}).wait(1).to({graphics:mask_3_graphics_37,x:-387.5802,y:222.1822}).wait(1).to({graphics:mask_3_graphics_38,x:-377.9117,y:222.1773}).wait(1).to({graphics:mask_3_graphics_39,x:-368.0847,y:222.1724}).wait(1).to({graphics:mask_3_graphics_40,x:-358.0991,y:222.1673}).wait(1).to({graphics:mask_3_graphics_41,x:-347.9551,y:222.1622}).wait(1).to({graphics:mask_3_graphics_42,x:-337.6525,y:222.157}).wait(1).to({graphics:mask_3_graphics_43,x:-327.1915,y:222.1518}).wait(1).to({graphics:mask_3_graphics_44,x:-316.5719,y:222.1464}).wait(1).to({graphics:mask_3_graphics_45,x:-305.7939,y:222.141}).wait(1).to({graphics:mask_3_graphics_46,x:-294.8574,y:222.1355}).wait(1).to({graphics:mask_3_graphics_47,x:-283.7623,y:222.1299}).wait(1).to({graphics:mask_3_graphics_48,x:-272.5088,y:222.1243}).wait(1).to({graphics:mask_3_graphics_49,x:-261.0967,y:222.1185}).wait(1).to({graphics:mask_3_graphics_50,x:-249.5262,y:222.1127}).wait(1).to({graphics:mask_3_graphics_51,x:-237.7971,y:222.1068}).wait(1).to({graphics:mask_3_graphics_52,x:-225.9096,y:222.1008}).wait(1).to({graphics:mask_3_graphics_53,x:-213.8635,y:222.0948}).wait(1).to({graphics:mask_3_graphics_54,x:-201.659,y:222.0886}).wait(1).to({graphics:mask_3_graphics_55,x:-189.2959,y:222.0824}).wait(1).to({graphics:mask_3_graphics_56,x:-176.7744,y:222.0761}).wait(1).to({graphics:mask_3_graphics_57,x:-164.0943,y:222.0697}).wait(1).to({graphics:mask_3_graphics_58,x:-151.2558,y:222.0633}).wait(1).to({graphics:mask_3_graphics_59,x:-138.2587,y:222.0567}).wait(1).to({graphics:mask_3_graphics_60,x:-125.1031,y:222.0501}).wait(1).to({graphics:mask_3_graphics_61,x:-111.7891,y:222.0434}).wait(1).to({graphics:mask_3_graphics_62,x:-98.3165,y:222.0366}).wait(1).to({graphics:mask_3_graphics_63,x:-84.6855,y:222.0298}).wait(1).to({graphics:mask_3_graphics_64,x:-70.8959,y:222.0228}).wait(1).to({graphics:mask_3_graphics_65,x:-56.9479,y:222.0158}).wait(1).to({graphics:mask_3_graphics_66,x:-42.8413,y:222.0087}).wait(1).to({graphics:mask_3_graphics_67,x:-28.5762,y:222.0015}).wait(1).to({graphics:mask_3_graphics_68,x:-14.1527,y:221.9943}).wait(1).to({graphics:mask_3_graphics_69,x:0.4294,y:221.9869}).wait(1).to({graphics:mask_3_graphics_70,x:15.1699,y:221.9795}).wait(1).to({graphics:mask_3_graphics_71,x:30.069,y:221.972}).wait(1).to({graphics:mask_3_graphics_72,x:45.1266,y:221.9644}).wait(1).to({graphics:mask_3_graphics_73,x:60.3426,y:221.9568}).wait(1).to({graphics:mask_3_graphics_74,x:75.7172,y:221.9491}).wait(1).to({graphics:mask_3_graphics_75,x:91.2502,y:221.9412}).wait(1).to({graphics:mask_3_graphics_76,x:106.9418,y:221.9333}).wait(1).to({graphics:mask_3_graphics_77,x:122.7919,y:221.9254}).wait(1).to({graphics:mask_3_graphics_78,x:138.8004,y:221.9173}).wait(1).to({graphics:mask_3_graphics_79,x:154.9675,y:221.9092}).wait(1).to({graphics:mask_3_graphics_80,x:171.2931,y:221.901}).wait(1).to({graphics:mask_3_graphics_81,x:187.7771,y:221.8927}).wait(1).to({graphics:mask_3_graphics_82,x:204.4197,y:221.8843}).wait(1).to({graphics:mask_3_graphics_83,x:221.2208,y:221.8758}).wait(1).to({graphics:mask_3_graphics_84,x:238.1804,y:221.8673}).wait(1).to({graphics:mask_3_graphics_85,x:255.2984,y:221.8587}).wait(1).to({graphics:mask_3_graphics_86,x:272.575,y:221.85}).wait(1).to({graphics:null,x:0,y:0}).wait(808));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(48).to({_off:false},0).to({alpha:1},19,cjs.Ease.quadIn).to({regX:209.8,regY:190.8,scaleX:1.2019,scaleY:1.2019,x:237.7,y:131.35},254).to({_off:true},1).wait(573));

	// arrows_copy
	this.instance_26 = new lib.Symbol2("synched",0);
	this.instance_26.setTransform(-773.05,134.5,1,1,0,0,0,691.9,84);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({_off:false},0).to({x:-551.75},12,cjs.Ease.sineOut).to({x:292.9,y:133.65},73,cjs.Ease.get(-0.5)).to({_off:true},1).wait(808));

	// bg
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#52565A").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_16.setTransform(80.0011,299.9992,0.5333,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(895));

	// stageBackground
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgODgwbIcHAAMAAABg3I8HAAg");
	this.shape_17.setTransform(80,300);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#52565A").s().p("EgODAwcMAAAhg3IcHAAMAAABg3g");
	this.shape_18.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(895));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1409.3,202.1,3059.7,421.1);
// library properties:
lib.properties = {
	id: 'B915F0BB2CAF214394D0C3C0B5CA43BE',
	width: 160,
	height: 600,
	fps: 30,
	color: "#52565A",
	opacity: 1.00,
	manifest: [
		{src:"images/card.png?1721822656153", id:"card"},
		{src:"images/img01.jpg?1721822656153", id:"img01"},
		{src:"images/img02.jpg?1721822656153", id:"img02"},
		{src:"images/img03.jpg?1721822656153", id:"img03"}
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