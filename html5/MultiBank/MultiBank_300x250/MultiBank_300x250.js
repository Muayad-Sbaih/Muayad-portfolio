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
	this.instance.setTransform(209,0);

	this.instance_1 = new lib.left();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,337,250), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgcAqIAAhTIAdAAQAJAAAFACQAFACADAEQADADABAEIABAIIgBAIQgBAFgDADQgDADgFACQgFACgJAAIgRAAIAAAlgAgQgEIAPAAIAGAAIAFgCIAFgFQABgCAAgFQAAgEgBgCQgCgEgDgBIgFgCIgGAAIgPAAg");
	this.shape.setTransform(185.65,33.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMApQgGgCgEgFQgFgEgCgGQgDgGAAgHIAAg1IAMAAIAAAyIABAJQABAEACADQADAFAEACQAEACAFAAQAGAAAEgCQAEgCADgFQACgDABgEIABgJIAAgyIAMAAIAAA1QAAAHgDAGQgCAGgFAEQgEAFgGACQgGACgHAAQgGAAgGgCg");
	this.shape_1.setTransform(177.475,33.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRApQgIgDgGgGQgGgGgDgJQgDgHAAgKQAAgJADgIQADgIAGgGQAGgGAIgDQAIgEAJAAQAKAAAIAEQAIADAGAGQAGAGADAIQADAIAAAJQAAAKgDAHQgDAJgGAGQgGAGgIADQgIADgKAAQgJAAgIgDgAgMgeQgGADgEAEQgEAFgDAGQgCAGAAAGQAAAHACAGQADAGAEAFQAEAEAGADQAGADAGAAQAHAAAGgDQAGgDAEgEQAFgFACgGQACgGAAgHQAAgGgCgGQgCgGgFgFQgEgEgGgDQgGgDgHAAQgGAAgGADg");
	this.shape_2.setTransform(168.225,33.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQAqIgVglIgNAAIAAAlIgLAAIAAhTIAdAAQAIAAAFACQAFACADAEQADADACAEIABAIQAAAEgCAEIgEAHQgCADgEABQgEACgFABIAYAmgAgSgEIAPAAIAGAAIAGgCIAEgFQACgCAAgFQAAgEgCgCQgCgEgCgBIgGgCIgGAAIgPAAg");
	this.shape_3.setTransform(160.025,33.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLApQgJgEgGgFQgGgHgDgIQgDgIAAgJQAAgJADgIQAEgIAFgGQAHgGAIgDQAHgEAKAAQALABAHADQAIACAFAGIgIAIQgFgFgHgCQgFgCgGAAQgHAAgGADQgGADgEAEQgEAFgCAGQgDAGAAAGQAAAHADAHQADAFAEAFQAEAFAHADQAFACAGAAIAMgBIAJgDIAAgYIgTAAIAAgKIAfAAIAAApIgHADIgIACIgJACIgJAAQgJABgIgEg");
	this.shape_4.setTransform(151,33.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAqIgmgqIgBAAIAAAqIgLAAIAAhTIALAAIAAAlIABAAIAkglIAQAAIgoAnIArAsg");
	this.shape_5.setTransform(139.95,33.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWAqIguhFIAABFIgMAAIAAhTIAPAAIAuBEIAAhEIAMAAIAABTg");
	this.shape_6.setTransform(130.625,33.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdAqIgJgUIgnAAIgJAUIgNAAIAlhTIAKAAIAkBTgAgPAMIAfAAIgQgnIAAAAg");
	this.shape_7.setTransform(121.625,33.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAqIAAhTIAcAAQAFAAAFABQAFABADADQAEADACAEQACADAAAGQAAAHgFAEQgEAGgGABIAHACIAGAFQADACABAEQABADAAAFQAAAFgCAFQgCAEgFADQgEAEgFABQgFACgGgBgAgRAgIARAAIAFAAQADgBACgBIAGgFQABgDAAgEQAAgIgFgEQgEgDgIAAIgRAAgAgRgGIAQAAIAFgBIAFgCIADgEQACgDAAgDQgBgFgDgEQgDgDgHAAIgRAAg");
	this.shape_8.setTransform(113.9,33.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFAqIAAhTIALAAIAABTg");
	this.shape_9.setTransform(108.175,33.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAqIAAhIIgbAAIAAgLIBBAAIAAALIgcAAIAABIg");
	this.shape_10.setTransform(103.05,33.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYAqIAAhTIALAAIAABJIAmAAIAAAKg");
	this.shape_11.setTransform(97.025,33.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMApQgGgCgEgFQgFgEgCgGQgDgGAAgHIAAg1IAMAAIAAAyIABAJQABAEACADQADAFAEACQAEACAFAAQAGAAAEgCQAEgCADgFQACgDABgEIABgJIAAgyIAMAAIAAA1QAAAHgDAGQgCAGgFAEQgEAFgGACQgGACgHAAQgGAAgGgCg");
	this.shape_12.setTransform(89.175,33.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAhAqIAAhFIgdBFIgHAAIgchFIgBAAIAABFIgLAAIAAhTIARAAIAaA/IAAAAIAbg/IARAAIAABTg");
	this.shape_13.setTransform(79.525,33.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFAqIAAhIIgbAAIAAgLIBBAAIAAALIgbAAIAABIg");
	this.shape_14.setTransform(67.3,33.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcAqIAAhTIA2AAIAAALIgqAAIAAAZIAoAAIAAAKIgoAAIAAAbIAsAAIAAAKg");
	this.shape_15.setTransform(60.45,33.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAhAqIAAhFIgdBFIgHAAIgchFIgBAAIAABFIgLAAIAAhTIARAAIAaA/IAAAAIAbg/IARAAIAABTg");
	this.shape_16.setTransform(51.075,33.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAqIAAhTIALAAIAABJIAmAAIAAAKg");
	this.shape_17.setTransform(39.725,33.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbAqIAAhTIA1AAIAAALIgqAAIAAAZIAnAAIAAAKIgnAAIAAAbIAsAAIAAAKg");
	this.shape_18.setTransform(32.7,33.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkAqIAAhTIAdAAQAIAAAHACQAHACAFADQAFAEADAEQAEAFABAEIADAJIABAIQAAAIgDAIQgDAHgGAHQgGAFgIAEQgJADgLAAgAgZAgIAPAAQAHAAAGgCQAGgCAFgEQAFgEADgGQADgGAAgIIgCgJQgBgFgDgFQgEgFgHgEQgGgCgJAAIgSAAg");
	this.shape_19.setTransform(24.475,33.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAWAqIguhFIAABFIgMAAIAAhTIAPAAIAuBEIAAhEIAMAAIAABTg");
	this.shape_20.setTransform(15.075,33.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAdAqIgJgUIgnAAIgJAUIgNAAIAlhTIAKAAIAkBTgAgPAMIAfAAIgQgnIAAAAg");
	this.shape_21.setTransform(6.075,33.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAWAqIAAgmIgrAAIAAAmIgLAAIAAhTIALAAIAAAjIArAAIAAgjIALAAIAABTg");
	this.shape_22.setTransform(-2.6,33.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAVAqIgVhEIAAAAIgUBEIgMAAIgZhUIAMAAIATBEIAUhEIANAAIAUBEIAThEIAMAAIgZBUg");
	this.shape_23.setTransform(179.525,17.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMApQgGgCgEgEQgFgFgCgGQgDgGAAgIIAAg1IAMAAIAAA0IABAIQABAEACAEQADADAEACQAEADAFAAQAGAAAEgDQAEgCADgDQACgEABgEIABgIIAAg0IAMAAIAAA1QAAAIgDAGQgCAGgFAFQgEAEgGACQgGADgHAAQgGAAgGgDg");
	this.shape_24.setTransform(169.525,17.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAWAqIguhEIAABEIgMAAIAAhUIAPAAIAuBGIAAhGIAMAAIAABUg");
	this.shape_25.setTransform(157.175,17.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAdAqIgJgVIgnAAIgJAVIgNAAIAlhUIAKAAIAkBUgAgPALIAfAAIgQglIAAAAg");
	this.shape_26.setTransform(148.175,17.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAdAqIgJgVIgnAAIgJAVIgNAAIAlhUIAKAAIAkBUgAgPALIAfAAIgQglIAAAAg");
	this.shape_27.setTransform(139.725,17.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgbAqIAAhUIA1AAIAAALIgqAAIAAAaIAoAAIAAAJIgoAAIAAAbIAsAAIAAALg");
	this.shape_28.setTransform(128.75,17.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRApQgIgDgGgGQgGgGgDgIQgDgJAAgJQAAgIADgIQADgJAGgGQAGgGAIgDQAIgEAJABQAKgBAIAEQAIADAGAGQAGAGADAJQADAIAAAIQAAAJgDAJQgDAIgGAGQgGAGgIADQgIAEgKAAQgJAAgIgEgAgMgeQgGACgEAFQgEAEgDAHQgCAGAAAGQAAAHACAGQADAHAEAEQAEAEAGADQAGADAGAAQAHAAAGgDQAGgDAEgEQAFgEACgHQACgGAAgHQAAgGgCgGQgCgHgFgEQgEgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_29.setTransform(119.775,17.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgFAqIAAhJIgbAAIAAgLIBBAAIAAALIgcAAIAABJg");
	this.shape_30.setTransform(111.35,17.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgQAqQgHgDgEgGIAJgJQADAGAFABQAFADAFAAIAFgBIAGgDIAEgEQABgDAAgDQAAgFgDgDQgDgDgFgBIgJgEQgFgBgFgDQgFgCgDgEQgDgFAAgJIACgHQABgFAEgDQADgEAGgDQAFgBAHAAQAHAAAGABQAHACAFAGIgKAJIgGgGQgEgCgFAAQgEAAgDABQgDABgCACIgDAFIgBAEQAAAFAEADQADAEAEABIAJADIAKAEQAFACADAEQADAFAAAIQAAAGgCAEQgCAFgEAEQgEADgGACQgFACgFAAQgIAAgIgDg");
	this.shape_31.setTransform(101.125,17.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAWAqIguhEIAABEIgMAAIAAhUIAPAAIAuBGIAAhGIAMAAIAABUg");
	this.shape_32.setTransform(93.125,17.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAdAqIgJgVIgnAAIgJAVIgNAAIAlhUIAKAAIAkBUgAgPALIAfAAIgQglIAAAAg");
	this.shape_33.setTransform(84.125,17.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYAqIAAhUIALAAIAABJIAmAAIAAALg");
	this.shape_34.setTransform(77.325,17.75);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgLApQgJgDgGgHQgGgGgDgIQgDgIAAgJQAAgIADgIQAEgJAGgGQAFgGAJgDQAHgEAKABQALAAAIACQAHADAFAFIgIAJQgGgFgFgCQgGgCgGAAQgHAAgGADQgFACgFAFQgEAEgDAHQgCAGABAGQAAAHACAGQACAHAFAEQAFAEAFADQAGADAHAAIALgBIAJgEIAAgXIgSAAIAAgKIAeAAIAAApIgIADIgHACIgJACIgIABQgKAAgIgEg");
	this.shape_35.setTransform(68.8,17.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgFAqIAAhJIgbAAIAAgLIBBAAIAAALIgbAAIAABJg");
	this.shape_36.setTransform(57.55,17.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAdAqIgJgVIgnAAIgJAVIgNAAIAlhUIAKAAIAkBUgAgPALIAfAAIgQglIAAAAg");
	this.shape_37.setTransform(49.875,17.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAVAqIgVhEIAAAAIgUBEIgMAAIgZhUIAMAAIATBEIAUhEIANAAIAUBEIAThEIAMAAIgZBUg");
	this.shape_38.setTransform(39.875,17.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgMApQgIgDgGgHQgGgGgDgIQgDgIAAgJQAAgIAEgIQACgJAHgGQAGgGAHgDQAJgEAIABQAMAAAHACQAIADAFAFIgIAJQgGgFgFgCQgGgCgHAAQgGAAgGADQgFACgFAFQgEAEgDAHQgBAGAAAGQgBAHADAGQADAHAEAEQAFAEAFADQAGADAGAAIAMgBIAJgEIAAgXIgSAAIAAgKIAeAAIAAApIgIADIgIACIgIACIgJABQgJAAgJgEg");
	this.shape_39.setTransform(25.85,17.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgcAqIAAhUIA2AAIAAALIgqAAIAAAaIAnAAIAAAJIgnAAIAAAbIAtAAIAAALg");
	this.shape_40.setTransform(18,17.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgRApQgIgDgGgGQgGgGgDgIQgDgJAAgJQAAgIADgIQADgJAGgGQAGgGAIgDQAIgEAJABQAKgBAIAEQAIADAGAGQAGAGADAJQADAIAAAIQAAAJgDAJQgDAIgGAGQgGAGgIADQgIAEgKAAQgJAAgIgEgAgMgeQgGACgEAFQgEAEgDAHQgCAGAAAGQAAAHACAGQADAHAEAEQAEAEAGADQAGADAGAAQAHAAAGgDQAGgDAEgEQAFgEACgHQACgGAAgHQAAgGgCgGQgCgHgFgEQgEgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_41.setTransform(9.025,17.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgFAqIgghUIAMAAIAZBFIAAAAIAahFIAMAAIghBUg");
	this.shape_42.setTransform(0.3,17.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-9.1,8,200,51.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape.setTransform(224.5,51.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgCgCgDAAQgCAAgDACIgDAEIAAAaIgHAAIAAgkIAHAAIAAAEQAEgFAFAAQAMAAAAANIAAAYg");
	this.shape_1.setTransform(221.7,49.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgEADgFQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_2.setTransform(217.925,49.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUATIAAgYQAAgEgCgCQgCgCgEAAQgEAAgCADQgDACAAADIAAAYIgFAAIAAgXQAAgJgIAAQgGAAgDAGIAAAaIgGAAIAAgkIAGAAIAAAEQAEgFAHAAQAIAAACAGQACgDADgBQACgCAEAAQANAAAAANIAAAYg");
	this.shape_3.setTransform(212.975,49.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgEADgFQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_4.setTransform(208.075,49.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgBgCgEAAQgCAAgDACIgDAEIAAAaIgGAAIAAgkIAGAAIAAAEQADgFAHAAQAMAAgBANIAAAYg");
	this.shape_5.setTransform(204.3,49.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgEADgFQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_6.setTransform(198.775,49.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBAVQgCgDABgEIAAgWIgHAAIAAgFIAHAAIAAgJIAFAAIAAAJIAHAAIAAAFIgHAAIAAAWIABADQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIADAAIAAAFIgFAAQgEAAgCgCg");
	this.shape_7.setTransform(195.65,49.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgBgCgFAAQgCAAgCACIgEAEIAAAaIgFAAIAAgkIAFAAIAAAEQAFgFAFAAQAMAAABANIAAAYg");
	this.shape_8.setTransform(190.95,49.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgEADgFQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_9.setTransform(187.175,49.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOATIAAgFIAUgbIgTAAIAAgEIAbAAIAAAEIgUAaIAVAAIAAAGg");
	this.shape_10.setTransform(183.625,49.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgEADgFQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_11.setTransform(180.025,49.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgSIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_12.setTransform(177.325,48.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_13.setTransform(175.6,48.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIATIAAgkIAGAAIAAAEQACgFAGAAIADABIAAAFIgDAAQgGAAgCAGIAAAZg");
	this.shape_14.setTransform(173.775,49.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgEADgFQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_15.setTransform(170.575,49.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgBATIgOgkIAHAAIAIAbIAJgbIAHAAIgNAkg");
	this.shape_16.setTransform(166.975,49.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKAWQgFgGAAgJIAAAAQAAgIAFgEQAEgGAGABQAGAAADAEIAAgUIAHAAIAAA0IgGAAIAAgEQgEAFgGgBQgGAAgEgEgAgGgCQgCADAAAHQAAAGACAEQADAEAEAAQAGAAACgGIAAgQQgCgGgGABQgEAAgDADg");
	this.shape_17.setTransform(161.475,48.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_18.setTransform(158.75,48.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgEADgFQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_19.setTransform(156.075,49.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAYQgEgBgCgDIAEgEQAEAFAFAAQAEAAADgDQACgDAAgEIAAgDQgEAEgFAAQgGAAgEgFQgFgGAAgHQAAgJAFgFQAEgFAGAAQAGAAADAEIAAgDIAHAAIAAAjQAAAHgFAEQgEAEgHAAIgHgCgAgGgQQgCADgBAIQABAFACAEQADADADAAQAGAAADgFIAAgQQgDgGgGAAQgDAAgDAEg");
	this.shape_20.setTransform(152.15,50.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgCgCgEAAQgBAAgDACIgEAEIAAAaIgFAAIAAgkIAFAAIAAAEQAFgFAGAAQAMAAAAANIAAAYg");
	this.shape_21.setTransform(146.6,49.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLAQQgDgDAAgFQAAgFAEgDQAFgDAHAAIAGAAIAAgDQAAgDgCgCQgCgCgEAAQgCAAgDABQAAABgBABQAAAAAAABQgBAAAAABQAAAAAAABIgGAAQAAgDACgDQACgCADgBQADgCADAAQAHAAADADQAEADAAAGIAAAQIABAIIAAABIgGAAIgBgFQgEAFgGAAQgFAAgEgDgAgIAHQAAABAAABQAAABABAAQAAABAAAAQABABAAAAQACACADgBIAFgBQADgCABgCIAAgHIgFAAQgLAAAAAGg");
	this.shape_22.setTransform(142.725,49.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgBATIgOgkIAHAAIAIAbIAJgbIAHAAIgNAkg");
	this.shape_23.setTransform(139.125,49.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIIAAAAQAAgFACgEQADgEADgDQAEgCAEAAQAIAAAEAFQAFAFAAAIIAAABQAAAFgCAEQgCAFgEACQgEACgFAAQgGAAgFgFgAgHgJQgCADAAAHQAAAFACAFQADADAEAAQAFAAADgDQACgFAAgGQAAgGgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(133.7,49.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKAOQgFgFAAgIIAAgBQAAgFACgFQACgEAEgCQAEgCAEAAQAGAAAEAEQAEADABAGIgGAAQgBgEgCgCQgDgCgDAAQgEAAgDADQgCAEAAAGIAAABQAAAGACAEQADADAEAAQADAAADgCQACgCABgDIAGAAIgDAGQgCADgDACQgDABgEAAQgHAAgEgFg");
	this.shape_25.setTransform(129.925,49.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgSIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_26.setTransform(127.225,48.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGASQgEgCgCgDQgCgDAAgDIAHAAQAAADACACQADACADAAQADAAACgCQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIgHgBIgHgDQgDgBgBgCQgBgBAAgDQAAgFAEgDQADgDAFAAQAHAAAEADQAEAEAAAFIgHAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgCgCgEAAQgCAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIAFACIAIACQADABABACIACAFQAAAFgEADQgEADgGAAQgEAAgDgBg");
	this.shape_27.setTransform(124.525,49.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgSIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_28.setTransform(121.925,48.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgIATIAAgkIAGAAIAAAEQACgFAGAAIADABIAAAFIgDAAQgGAAgCAGIAAAZg");
	this.shape_29.setTransform(120.075,49.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgEADgFQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_30.setTransform(115.125,49.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgHAYQgEgBgCgDIAEgEQAEAFAFAAQAEAAADgDQACgDAAgEIAAgDQgEAEgFAAQgGAAgEgFQgFgGAAgHQAAgJAFgFQAEgFAGAAQAGAAADAEIAAgDIAHAAIAAAjQAAAHgFAEQgEAEgHAAIgHgCgAgGgQQgCADgBAIQABAFACAEQADADADAAQAGAAADgFIAAgQQgDgGgGAAQgDAAgDAEg");
	this.shape_31.setTransform(111.2,50.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIIAAAAQAAgFACgEQACgEAEgDQAEgCAEAAQAHAAAFAFQAFAFAAAIIAAABQAAAFgDAEQgCAFgDACQgEACgFAAQgGAAgFgFgAgGgJQgDADAAAHQAAAFADAFQACADAEAAQAFAAADgDQADgFAAgGQAAgGgDgDQgDgEgFAAQgEAAgCAEg");
	this.shape_32.setTransform(107.3,49.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAIAaIAAgYQAAgDgCgCQgCgCgEAAQgBAAgDACIgEADIAAAaIgFAAIAAgzIAFAAIAAAUQAFgFAGAAQAMAAgBAMIAAAYg");
	this.shape_33.setTransform(103.4,48.825);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAAAVQgCgDAAgEIAAgWIgHAAIAAgFIAHAAIAAgJIAFAAIAAAJIAHAAIAAAFIgHAAIAAAWIABADQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIADAAIAAAFIgFAAQgEAAgBgCg");
	this.shape_34.setTransform(318.65,40.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgKAPQgFgFAAgJIAAgBQAAgFADgEQACgEADgDQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgBQADgBABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCADgBAFIARAAIAAgBQAAgFgCgDQgCgCgEAAQgDAAgDADg");
	this.shape_35.setTransform(315.775,41.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAIAaIAAgYQAAgDgCgCQgBgCgFAAQgCAAgCACIgEADIAAAaIgFAAIAAgzIAFAAIAAAUQAFgFAFAAQAMAAABAMIAAAYg");
	this.shape_36.setTransform(312,40.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAUATIAAgYQAAgEgCgCQgCgCgEAAQgEAAgCADQgDACAAADIAAAYIgFAAIAAgXQAAgJgIAAQgGAAgDAGIAAAaIgGAAIAAgkIAGAAIAAAEQAEgFAHAAQAIAAACAGQACgDADgBQACgCAEAAQANAAAAANIAAAYg");
	this.shape_37.setTransform(305.225,41.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIIAAAAQAAgFADgEQACgFADgCQAEgCAEAAQAIAAAEAFQAFAGAAAHIAAAAQAAAGgDAEQgCAEgDADQgEACgFAAQgHAAgEgFgAgGgJQgEAEAAAFQAAAHAEADQACAEAEAAQAFAAACgEQAEgDAAgHQAAgFgEgEQgDgEgEAAQgEAAgCAEg");
	this.shape_38.setTransform(300.15,41.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgBgCgEAAQgCAAgDACIgDAEIAAAaIgHAAIAAgkIAHAAIAAAEQADgFAHAAQALAAAAANIAAAYg");
	this.shape_39.setTransform(294.5,41.175);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgKAPQgFgFAAgJIAAgBQAAgFADgEQACgEADgDQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgBQADgBABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCADgBAFIARAAIAAgBQAAgFgCgDQgCgCgEAAQgDAAgDADg");
	this.shape_40.setTransform(290.725,41.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgBASIgOgkIAHAAIAIAcIAJgcIAHAAIgNAkg");
	this.shape_41.setTransform(287.125,41.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIIAAAAQAAgFACgEQACgFAEgCQAEgCAEAAQAHAAAFAFQAFAGAAAHIAAAAQAAAGgCAEQgDAEgDADQgEACgFAAQgHAAgEgFgAgHgJQgCAEAAAFQAAAHACADQADAEAEAAQAFAAADgEQACgDAAgHQAAgFgCgEQgDgEgFAAQgEAAgDAEg");
	this.shape_42.setTransform(283.45,41.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_43.setTransform(280.6,40.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgIATIAAgkIAGAAIAAAEQACgFAGAAIADABIAAAFIgDAAQgGAAgCAGIAAAZg");
	this.shape_44.setTransform(278.775,41.175);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIIAAAAQAAgFADgEQACgFADgCQAEgCAEAAQAIAAAEAFQAFAGAAAHIAAAAQAAAGgDAEQgCAEgDADQgEACgFAAQgHAAgEgFgAgGgJQgEAEAAAFQAAAHAEADQACAEAEAAQAFAAACgEQAEgDAAgHQAAgFgEgEQgDgEgEAAQgEAAgCAEg");
	this.shape_45.setTransform(275.4,41.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIIAAAAQAAgFACgEQADgFADgCQAEgCAEAAQAIAAAEAFQAFAGAAAHIAAAAQAAAGgCAEQgCAEgEADQgEACgFAAQgGAAgFgFgAgHgJQgCAEAAAFQAAAHACADQADAEAEAAQAFAAADgEQACgDAAgHQAAgFgCgEQgDgEgFAAQgEAAgDAEg");
	this.shape_46.setTransform(271.4,41.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgIATIAAgkIAGAAIAAAEQACgFAGAAIADABIAAAFIgDAAQgGAAgCAGIAAAZg");
	this.shape_47.setTransform(268.425,41.175);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgKAPQgFgFAAgJIAAgBQAAgFADgEQACgEADgDQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgBQADgBABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCADgBAFIARAAIAAgBQAAgFgCgDQgCgCgEAAQgDAAgDADg");
	this.shape_48.setTransform(265.225,41.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgBASIgOgkIAHAAIAIAcIAJgcIAHAAIgNAkg");
	this.shape_49.setTransform(261.625,41.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgBAVQgCgDAAgEIAAgWIgGAAIAAgFIAGAAIAAgJIAGAAIAAAJIAHAAIAAAFIgHAAIAAAWIABADQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIADAAIAAAFIgFAAQgEAAgCgCg");
	this.shape_50.setTransform(256.95,40.775);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgBgCgEAAQgCAAgDACIgDAEIAAAaIgHAAIAAgkIAHAAIAAAEQADgFAHAAQALAAAAANIAAAYg");
	this.shape_51.setTransform(254,41.175);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgKAQQgEgEAAgHIAAgXIAHAAIAAAXQAAAJAHAAQAGAAACgGIAAgaIAHAAIAAAkIgGAAIgBgDQgDAEgGAAQgGAAgDgDg");
	this.shape_52.setTransform(250.125,41.225);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAIAaIgMgRIgEAEIAAANIgGAAIAAgzIAGAAIAAAfIADgFIALgLIAHAAIgNAPIAPAVg");
	this.shape_53.setTransform(246.675,40.425);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAIAaIAAgYQAAgDgCgCQgBgCgFAAQgCAAgCACIgEADIAAAaIgFAAIAAgzIAFAAIAAAUQAFgFAGAAQALAAABAMIAAAYg");
	this.shape_54.setTransform(241,40.425);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgKAOQgFgFAAgJIAAAAQAAgFACgFQACgDAEgDQAEgCAEAAQAGAAAEAEQAEAEABAFIgGAAQgBgDgCgDQgDgCgDAAQgEAAgDADQgCAEAAAGIAAAAQAAAHACADQADAEAEAAQADAAADgCQACgCABgDIAGAAIgDAGQgCADgDABQgDACgEAAQgHAAgEgFg");
	this.shape_55.setTransform(237.275,41.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgSIgBgDIABgCIACgBIADABIABACIgBADIgDABQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_56.setTransform(234.575,40.525);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgOASIAAgEIAUgaIgTAAIAAgGIAbAAIAAAFIgUAbIAVAAIAAAEg");
	this.shape_57.setTransform(232.025,41.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgBAVQgCgDAAgEIAAgWIgGAAIAAgFIAGAAIAAgJIAGAAIAAAJIAHAAIAAAFIgHAAIAAAWIABADQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIADAAIAAAFIgFAAQgEAAgCgCg");
	this.shape_58.setTransform(227.25,40.775);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgKAPQgFgFAAgJIAAgBQAAgFADgEQACgEADgDQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgBQADgBABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCADgBAFIARAAIAAgBQAAgFgCgDQgCgCgEAAQgDAAgDADg");
	this.shape_59.setTransform(224.375,41.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAIAaIAAgYQAAgDgCgCQgBgCgEAAQgDAAgCACIgDADIAAAaIgHAAIAAgzIAHAAIAAAUQAEgFAGAAQAMAAgBAMIAAAYg");
	this.shape_60.setTransform(220.6,40.425);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgKAQQgEgEAAgHIAAgXIAHAAIAAAXQAAAJAHAAQAGAAACgGIAAgaIAHAAIAAAkIgGAAIgBgDQgDAEgGAAQgGAAgDgDg");
	this.shape_61.setTransform(214.975,41.225);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgEAaIAAgeIgGAAIAAgGIAGAAIAAgDQAAgGADgDQACgDAGgBIAEABIAAAFIgEAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgCACAAAEIAAADIAIAAIAAAGIgIAAIAAAeg");
	this.shape_62.setTransform(210.175,40.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIIAAAAQAAgFACgEQACgFAEgCQAEgCAEAAQAHAAAFAFQAFAGAAAHIAAAAQAAAGgDAEQgBAEgEADQgEACgFAAQgHAAgEgFgAgHgJQgCAEAAAFQAAAHACADQADAEAEAAQAFAAADgEQACgDAAgHQAAgFgCgEQgEgEgEAAQgEAAgDAEg");
	this.shape_63.setTransform(206.85,41.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgCgCgEAAQgCAAgCACIgEAEIAAAaIgGAAIAAgkIAGAAIAAAEQAEgFAGAAQANAAAAANIAAAYg");
	this.shape_64.setTransform(201.2,41.175);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgKAPQgFgFAAgJIAAgBQAAgFADgEQACgEADgDQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgBQADgBABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCADgBAFIARAAIAAgBQAAgFgCgDQgCgCgEAAQgDAAgDADg");
	this.shape_65.setTransform(197.425,41.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgHAZQgEgDgCgDIADgDQAFAFAFAAQAEAAACgDQADgDAAgEIAAgDQgEAEgFAAQgGAAgFgFQgDgFAAgJQAAgIADgFQAFgFAGAAQAFAAAFAFIAAgFIAFAAIAAAjQAAAIgDAEQgFAEgHAAIgHgBgAgGgQQgDAEAAAGQAAAGADADQADAEAEAAQAGAAACgGIAAgQQgCgFgGAAQgEAAgDAEg");
	this.shape_66.setTransform(193.5,41.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgKAPQgFgFAAgJIAAgBQAAgFADgEQACgEADgDQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgBQADgBABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCADgBAFIARAAIAAgBQAAgFgCgDQgCgCgEAAQgDAAgDADg");
	this.shape_67.setTransform(189.775,41.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAJASIgJgbIgIAbIgFAAIgLgkIAHAAIAHAbIAIgbIAEAAIAJAcIAHgcIAHAAIgLAkg");
	this.shape_68.setTransform(185.275,41.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgIATIAAgkIAGAAIAAAEQACgFAGAAIADABIAAAFIgDAAQgGAAgCAGIAAAZg");
	this.shape_69.setTransform(181.675,41.175);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgKAPQgFgFAAgJIAAgBQAAgFADgEQACgEADgDQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgBQADgBABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCADgBAFIARAAIAAgBQAAgFgCgDQgCgCgEAAQgDAAgDADg");
	this.shape_70.setTransform(178.475,41.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgBASIgOgkIAHAAIAIAcIAJgcIAHAAIgNAkg");
	this.shape_71.setTransform(174.875,41.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIIAAAAQAAgFACgEQACgFAEgCQAEgCAEAAQAHAAAFAFQAFAGAAAHIAAAAQAAAGgDAEQgCAEgDADQgEACgFAAQgGAAgFgFgAgGgJQgDAEAAAFQAAAHADADQACAEAEAAQAFAAADgEQADgDAAgHQAAgFgDgEQgDgEgFAAQgEAAgCAEg");
	this.shape_72.setTransform(171.2,41.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAAAVQgCgDAAgEIAAgWIgHAAIAAgFIAHAAIAAgJIAFAAIAAAJIAHAAIAAAFIgHAAIAAAWIABADQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIADAAIAAAFIgFAAQgEAAgBgCg");
	this.shape_73.setTransform(166.2,40.775);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgKAPQgFgFAAgJIAAgBQAAgFADgEQACgEADgDQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgBQADgBABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCADgBAFIARAAIAAgBQAAgFgCgDQgCgCgEAAQgDAAgDADg");
	this.shape_74.setTransform(163.325,41.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIIAAAAQAAgFADgEQABgFAEgCQAEgCAEAAQAHAAAFAFQAFAGAAAHIAAAAQAAAGgCAEQgCAEgEADQgEACgFAAQgGAAgFgFgAgHgJQgDAEAAAFQAAAHADADQADAEAEAAQAFAAACgEQADgDAAgHQAAgFgDgEQgCgEgFAAQgEAAgDAEg");
	this.shape_75.setTransform(159.45,41.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAUATIAAgYQAAgEgCgCQgCgCgEAAQgEAAgCADQgDACAAADIAAAYIgFAAIAAgXQAAgJgIAAQgGAAgDAGIAAAaIgGAAIAAgkIAGAAIAAAEQAEgFAHAAQAIAAACAGQACgDADgBQACgCAEAAQANAAAAANIAAAYg");
	this.shape_76.setTransform(154.375,41.175);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAAAZQgHAAgFgEQgFgEAAgIIAAghIAHAAIAAAhQAAAFACADQADADAFAAQAGAAACgDQADgDAAgFIAAghIAHAAIAAAhQAAAHgEAEQgFAFgIAAg");
	this.shape_77.setTransform(147.3,40.575);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_78.setTransform(142.3,42.725);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgIATIAAgkIAGAAIAAAEQACgFAGAAIADABIAAAFIgDAAQgGAAgCAGIAAAZg");
	this.shape_79.setTransform(140.425,41.175);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgKAPQgFgFAAgJIAAgBQAAgFADgEQACgEADgDQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgBQADgBABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCADgBAFIARAAIAAgBQAAgFgCgDQgCgCgEAAQgDAAgDADg");
	this.shape_80.setTransform(137.225,41.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgKAVQgFgFAAgIIAAgBQAAgHAFgGQAEgEAGAAQAGgBADAFIAAgUIAHAAIAAA0IgGAAIAAgEQgEAEgGABQgGAAgEgGgAgGgBQgCACAAAHQAAAGACAEQADAEAEgBQAGABACgGIAAgQQgCgFgGgBQgEAAgDAFg");
	this.shape_81.setTransform(133.275,40.45);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgKAPQgFgFAAgJIAAgBQAAgFADgEQACgEADgDQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgBQADgBABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCADgBAFIARAAIAAgBQAAgFgCgDQgCgCgEAAQgDAAgDADg");
	this.shape_82.setTransform(129.575,41.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgSIgBgDIABgCIACgBIADABIABACIgBADIgDABQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_83.setTransform(126.875,40.525);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgJAVIAAAFIgFAAIAAg0IAFAAIAAAUQAFgFAFABQAHAAAEAEQADAGAAAIIAAAAQAAAJgDAEQgEAGgHAAQgGAAgEgGgAgJAAIAAAQQAEAFAFAAQAEABACgEQADgDAAgIQAAgHgCgCQgDgDgEgBQgFAAgEAGg");
	this.shape_84.setTransform(124.1,40.45);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgBgCgEAAQgCAAgDACIgDAEIAAAaIgGAAIAAgkIAGAAIAAAEQADgFAHAAQAMAAgBANIAAAYg");
	this.shape_85.setTransform(120.15,41.175);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgLAQQgDgDAAgFQAAgGAEgCQAFgDAHAAIAGAAIAAgDQAAgDgCgCQgCgCgEAAQgCAAgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgGAAQAAgDACgCQACgDADgCQADgBADAAQAHAAADADQAEADAAAGIAAAQIABAIIAAAAIgGAAIgBgDQgEAEgGAAQgFAAgEgDgAgIAHQAAABAAABQAAABABAAQAAABAAAAQABABAAAAQACABADABIAFgCQADgBABgDIAAgIIgFAAQgLABAAAGg");
	this.shape_86.setTransform(116.275,41.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgLAQQgDgDAAgFQAAgGAEgCQAFgDAHAAIAGAAIAAgDQAAgDgCgCQgCgCgEAAQgCAAgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgGAAQAAgDACgCQACgDADgCQADgBADAAQAHAAADADQAEADAAAGIAAAQIABAIIAAAAIgGAAIgBgDQgEAEgGAAQgFAAgEgDgAgIAHQAAABAAABQAAABABAAQAAABAAAAQABABAAAAQACABADABIAFgCQADgBABgDIAAgIIgFAAQgLABAAAGg");
	this.shape_87.setTransform(112.475,41.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgKAPQgFgFAAgJIAAgBQAAgFADgEQACgEADgDQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgBQADgBABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCADgBAFIARAAIAAgBQAAgFgCgDQgCgCgEAAQgDAAgDADg");
	this.shape_88.setTransform(107.025,41.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgOASIAAgEIAUgaIgTAAIAAgGIAbAAIAAAFIgUAbIAVAAIAAAEg");
	this.shape_89.setTransform(103.475,41.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgKAPQgFgFAAgJIAAgBQAAgFADgEQACgEADgDQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgBQADgBABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCADgBAFIARAAIAAgBQAAgFgCgDQgCgCgEAAQgDAAgDADg");
	this.shape_90.setTransform(99.875,41.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgKAVQgFgFAAgIIAAgBQAAgHAFgGQAEgEAGAAQAGgBADAFIAAgUIAHAAIAAA0IgGAAIAAgEQgEAEgGABQgGAAgEgGgAgGgBQgCACAAAHQAAAGACAEQADAEAEgBQAGABACgGIAAgQQgCgFgGgBQgEAAgDAFg");
	this.shape_91.setTransform(95.925,40.45);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAAAVQgCgDAAgEIAAgWIgHAAIAAgFIAHAAIAAgJIAFAAIAAAJIAHAAIAAAFIgHAAIAAAWIABADQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIADAAIAAAFIgFAAQgEAAgBgCg");
	this.shape_92.setTransform(91.05,40.775);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgKAPQgFgFAAgJIAAgBQAAgFADgEQACgEADgDQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgBQADgBABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCADgBAFIARAAIAAgBQAAgFgCgDQgCgCgEAAQgDAAgDADg");
	this.shape_93.setTransform(88.175,41.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAUATIAAgYQAAgEgCgCQgCgCgEAAQgEAAgCADQgDACAAADIAAAYIgFAAIAAgXQAAgJgIAAQgGAAgDAGIAAAaIgGAAIAAgkIAGAAIAAAEQAEgFAHAAQAIAAACAGQACgDADgBQACgCAEAAQANAAAAANIAAAYg");
	this.shape_94.setTransform(83.225,41.175);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgGARQgEgBgCgDQgCgCAAgEIAHAAQAAAEACABQADACADAAQADAAACgBQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgHgCIgHgDQgDAAgBgCQgBgCAAgEQAAgEAEgDQADgDAFAAQAHAAAEADQAEADAAAFIgHAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBgBAAQgCgCgEAAQgCAAgCACQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAABQAAAAABABQAAAAAAAAQAAABABAAIAFACIAIACQADABABACIACAFQAAAFgEADQgEADgGAAQgEAAgDgCg");
	this.shape_95.setTransform(76.575,41.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgBAIIAAgPIADAAIAAAEIAAALg");
	this.shape_96.setTransform(74.2,38.625);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgRAZIAAgxIAOAAQAFAAAGADQAFADACAGQACAEABAIIAAABQAAAIgDAFQgCAGgFACQgGADgGAAgAgKATIAGAAQAHABAEgFQAEgFAAgJIAAgBQAAgJgDgFQgFgEgGAAIgHAAg");
	this.shape_97.setTransform(71.4,40.55);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAGIgXAAIAAARIAUAAIAAAEIgUAAIAAAWg");
	this.shape_98.setTransform(67.275,40.55);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgNATQgFgGAAgLIAAgDQAAgIACgFQADgFAEgCQAFgEAFAAQAIABAFAEQAEAFABAHIgGAAQgBgGgDgDQgDgCgFAAQgFAAgEAEQgEAFAAAJIAAADQAAAIAEAGQADAEAFAAQAGAAADgCQADgDABgGIAGAAQgBAIgFAEQgFAFgIAAQgIAAgFgHg");
	this.shape_99.setTransform(62.925,40.55);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgPAWQgEgEAAgHQAAgDACgDQACgDAFgDIgEgHIgBgEQAAgGAEgDQACgDAHgBQADAAAEAEQADADAAAEQABADgCACIgGAGIgCADIAKAMQACgEAAgGIAGAAQAAAIgEAHIAHAIIgIAAIgDgEQgDADgDABIgGABQgHgBgFgDgAgHADQgGAEABAEQAAAEACADQADACAEAAQAEAAAEgDIgLgPgAgHgRQgBABgBAEQAAADAFAEIAEgCIABgDIABgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABg");
	this.shape_100.setTransform(56.85,40.55);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAMAZIgMgTIgLATIgIAAIAQgZIgQgYIAIAAIALATIAMgTIAHAAIgPAYIAQAZg");
	this.shape_101.setTransform(50.55,40.55);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAGIgXAAIAAARIAUAAIAAAEIgUAAIAAAWg");
	this.shape_102.setTransform(46.625,40.55);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgCgCgEAAQgBAAgDACIgEAEIAAAaIgFAAIAAgkIAFAAIAAAEQAFgFAGAAQAMAAgBANIAAAYg");
	this.shape_103.setTransform(40.85,41.175);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgSIgBgDIABgCIACgBIADABIABACIgBADIgDABQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_104.setTransform(38.075,40.525);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgBgCgFAAQgCAAgCACIgEAEIAAAaIgFAAIAAgkIAFAAIAAAEQAFgFAGAAQALAAABANIAAAYg");
	this.shape_105.setTransform(33.55,41.175);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgKAPQgFgFAAgJIAAgBQAAgFADgEQACgEADgDQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgBQADgBABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCADgBAFIARAAIAAgBQAAgFgCgDQgCgCgEAAQgDAAgDADg");
	this.shape_106.setTransform(29.775,41.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_107.setTransform(27.05,40.425);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgKAPQgFgFAAgJIAAgBQAAgFADgEQACgEADgDQAEgCAEAAQAHAAAEAFQAEAEAAAJIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgBQADgBABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCADgBAFIARAAIAAgBQAAgFgCgDQgCgCgEAAQgDAAgDADg");
	this.shape_108.setTransform(24.375,41.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgKAVQgFgFAAgIIAAgBQAAgHAFgGQAEgEAGAAQAGgBADAFIAAgUIAHAAIAAA0IgGAAIAAgEQgEAEgGABQgGAAgEgGgAgGgBQgCACAAAHQAAAGACAEQADAEAEgBQAGABACgGIAAgQQgCgFgGgBQgEAAgDAFg");
	this.shape_109.setTransform(20.425,40.45);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgBgCgEAAQgCAAgDACIgDAEIAAAaIgGAAIAAgkIAGAAIAAAEQADgFAHAAQAMAAgBANIAAAYg");
	this.shape_110.setTransform(16.65,41.175);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgLAQQgDgDAAgFQAAgGAEgCQAFgDAHAAIAGAAIAAgDQAAgDgCgCQgCgCgEAAQgCAAgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgGAAQAAgDACgCQACgDADgCQADgBADAAQAHAAADADQAEADAAAGIAAAQIABAIIAAAAIgGAAIgBgDQgEAEgGAAQgFAAgEgDgAgIAHQAAABAAABQAAABABAAQAAABAAAAQABABAAAAQACABADABIAFgCQADgBABgDIAAgIIgFAAQgLABAAAGg");
	this.shape_111.setTransform(12.775,41.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAIAaIAAgYQAAgDgCgCQgBgCgEAAQgCAAgDACIgDADIAAAaIgGAAIAAgzIAGAAIAAAUQAEgFAGAAQAMAAgBAMIAAAYg");
	this.shape_112.setTransform(9,40.425);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgBAVQgBgDAAgEIAAgWIgHAAIAAgFIAHAAIAAgJIAFAAIAAAJIAHAAIAAAFIgHAAIAAAWIABADQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIADAAIAAAFIgFAAQgEAAgCgCg");
	this.shape_113.setTransform(321.45,32.375);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_114.setTransform(318.575,32.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAIAaIAAgYQAAgDgCgCQgBgCgFAAQgCAAgCACIgEADIAAAaIgFAAIAAgzIAFAAIAAAUQAFgFAGAAQALAAABAMIAAAYg");
	this.shape_115.setTransform(314.8,32.025);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgGAgIAAgFIADAAIADgBIAAgEIAAgoIAGAAIAAAoQABALgJAAIgEgBgAAAgZIAAgDIAAgDIADgBIADABIABADIgBADIgDABIgDgBg");
	this.shape_116.setTransform(309.95,32.875);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgSIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_117.setTransform(308.625,32.125);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgIAWIgBAEIgGAAIAAgzIAHAAIAAATQAEgFAFAAQAHABAEAFQAEAFAAAHIAAABQgBAJgEAFQgDAEgHABQgGgBgDgEgAgIAAIAAAPQACAHAGAAQAEgBADgDQADgEAAgHQgBgHgCgCQgDgDgEAAQgGgBgCAGg");
	this.shape_118.setTransform(305.85,32.05);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgKAWQgFgGAAgJIAAAAQAAgIAFgEQAEgFAGgBQAGAAADAFIAAgTIAHAAIAAAzIgGAAIAAgEQgEAFgGAAQgGgBgEgEgAgGgCQgCADAAAHQAAAGACAEQADADAEABQAGgBACgFIAAgQQgCgFgGAAQgEAAgDADg");
	this.shape_119.setTransform(299.975,32.05);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_120.setTransform(297.25,32.025);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_121.setTransform(294.575,32.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgHAYQgEgCgCgCIAEgEQADAFAGAAQAEAAADgCQACgDAAgFIAAgDQgDAEgGAAQgGAAgEgFQgFgFAAgIQAAgJAFgFQAEgFAGAAQAGAAAEAEIAAgDIAGAAIAAAjQAAAHgFAEQgEAEgHAAIgHgCgAgGgQQgDAEABAGQgBAGADADQADAEADAAQAGAAADgFIAAgQQgDgGgGAAQgDAAgDAEg");
	this.shape_122.setTransform(290.65,33.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgBgCgFAAQgCAAgCACIgEAEIAAAaIgFAAIAAgkIAFAAIAAAEQAFgFAGAAQALAAABANIAAAYg");
	this.shape_123.setTransform(285.1,32.775);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_124.setTransform(281.325,32.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgOASIAAgEIAUgbIgTAAIAAgEIAbAAIAAAEIgUAaIAVAAIAAAFg");
	this.shape_125.setTransform(277.775,32.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_126.setTransform(274.175,32.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgSIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_127.setTransform(271.475,32.125);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_128.setTransform(269.75,32.025);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgIATIAAgkIAGAAIAAAEQACgFAGAAIADABIAAAFIgDAAQgGAAgCAGIAAAZg");
	this.shape_129.setTransform(267.925,32.775);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_130.setTransform(264.725,32.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgBASIgOgjIAHAAIAIAbIAJgbIAHAAIgNAjg");
	this.shape_131.setTransform(261.125,32.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgGASQgEgCgCgDQgCgDAAgDIAHAAQAAADACACQADACADAAQADAAACgCQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgHgCIgHgCQgDgBgBgBQgBgDAAgCQAAgFAEgDQADgDAFAAQAHAAAEADQAEAEAAAEIgHAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBgBAAQgCgCgEAAQgCAAgCACQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIAFACIAIACQADABABACIACAFQAAAFgEADQgEADgGAAQgEAAgDgBg");
	this.shape_132.setTransform(255.875,32.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgIATIAAgkIAGAAIAAAEQACgFAGAAIADABIAAAFIgDAAQgGAAgCAGIAAAZg");
	this.shape_133.setTransform(253.125,32.775);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_134.setTransform(249.925,32.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgHAYQgEgCgCgCIAEgEQADAFAGAAQAEAAADgCQACgDAAgFIAAgDQgDAEgGAAQgGAAgEgFQgFgFAAgIQAAgJAFgFQAEgFAGAAQAGAAAEAEIAAgDIAGAAIAAAjQgBAHgEAEQgEAEgHAAIgHgCgAgGgQQgDAEABAGQgBAGADADQADAEAEAAQAFAAADgFIAAgQQgDgGgFAAQgEAAgDAEg");
	this.shape_135.setTransform(246,33.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgHAYQgEgCgCgCIAEgEQADAFAGAAQAEAAADgCQACgDAAgFIAAgDQgDAEgGAAQgGAAgEgFQgFgFAAgIQAAgJAFgFQAEgFAGAAQAGAAADAEIAAgDIAHAAIAAAjQAAAHgFAEQgEAEgHAAIgHgCgAgGgQQgDAEABAGQgBAGADADQADAEADAAQAGAAADgFIAAgQQgDgGgGAAQgDAAgDAEg");
	this.shape_136.setTransform(242.05,33.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_137.setTransform(238.325,32.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_138.setTransform(235.6,32.025);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_139.setTransform(232.925,32.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgIAWIgBAEIgFAAIAAgzIAGAAIAAATQAEgFAFAAQAHABAEAFQAEAFgBAHIAAABQAAAJgDAFQgEAEgHABQgGgBgDgEgAgIAAIAAAPQACAHAGAAQAEgBACgDQAEgEAAgHQAAgHgDgCQgCgDgFAAQgGgBgCAGg");
	this.shape_140.setTransform(229.15,32.05);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_141.setTransform(223.525,32.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgIATIAAgkIAGAAIAAAEQACgFAGAAIADABIAAAFIgDAAQgGAAgCAGIAAAZg");
	this.shape_142.setTransform(220.675,32.775);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_143.setTransform(217.475,32.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgSIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_144.setTransform(214.775,32.125);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_145.setTransform(213.05,32.025);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgKAQQgEgEAAgHIAAgXIAHAAIAAAXQAAAJAHAAQAGAAACgGIAAgaIAHAAIAAAkIgGAAIgBgDQgDAEgGAAQgGAAgDgDg");
	this.shape_146.setTransform(210.275,32.825);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgKAOQgFgFAAgJIAAAAQAAgFACgEQACgFAEgCQAEgCAEAAQAGAAAEADQAEAFABAFIgGAAQgBgDgCgCQgDgDgDAAQgEAAgDAEQgCADAAAGIAAAAQAAAHACADQADAEAEAAQADAAADgCQACgCABgDIAGAAIgDAGQgCADgDACQgDABgEAAQgHAAgEgFg");
	this.shape_147.setTransform(206.575,32.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgSIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_148.setTransform(203.875,32.125);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgBAVQgBgDAAgEIAAgWIgHAAIAAgFIAHAAIAAgJIAFAAIAAAJIAHAAIAAAFIgHAAIAAAWIABADQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIADAAIAAAFIgFAAQgEAAgCgCg");
	this.shape_149.setTransform(201.75,32.375);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgIATIAAgkIAGAAIAAAEQACgFAGAAIADABIAAAFIgDAAQgGAAgCAGIAAAZg");
	this.shape_150.setTransform(199.725,32.775);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgLAQQgDgDAAgFQAAgFAEgDQAFgDAHAAIAGAAIAAgDQAAgDgCgCQgCgCgEAAQgCAAgDACQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABIgGAAQAAgDACgDQACgCADgCQADgBADAAQAHAAADADQAEADAAAGIAAAQIABAIIAAAAIgGAAIgBgDQgEAEgGAAQgFAAgEgDgAgIAIQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAQACABADAAIAFgBQADgBABgDIAAgIIgFAAQgLAAAAAIg");
	this.shape_151.setTransform(196.425,32.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgPAaIAAgyIAGAAIAAAEQAEgFAGAAQAHAAADAFQAFAFAAAJIAAABQAAAHgFAFQgDAFgHAAQgGAAgEgEIAAASgAgJgOIAAAQQAEAFAFAAQAEAAADgDQACgEAAgGQAAgGgCgEQgDgEgEAAQgGAAgDAGg");
	this.shape_152.setTransform(192.65,33.475);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgBgCgEAAQgCAAgDACIgDAEIAAAaIgHAAIAAgkIAHAAIAAAEQADgFAGAAQAMAAAAANIAAAYg");
	this.shape_153.setTransform(186.95,32.775);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgLAQQgDgDAAgFQAAgFAEgDQAFgDAHAAIAGAAIAAgDQAAgDgCgCQgCgCgEAAQgCAAgDACQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABIgGAAQAAgDACgDQACgCADgCQADgBADAAQAHAAADADQAEADAAAGIAAAQIABAIIAAAAIgGAAIgBgDQgEAEgGAAQgFAAgEgDgAgIAIQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQACABADAAIAFgBQADgBABgDIAAgIIgFAAQgLAAAAAIg");
	this.shape_154.setTransform(183.075,32.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgBASIgOgjIAHAAIAIAbIAJgbIAHAAIgNAjg");
	this.shape_155.setTransform(179.475,32.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgBgCgEAAQgCAAgDACIgDAEIAAAaIgGAAIAAgkIAGAAIAAAEQADgFAHAAQAMAAgBANIAAAYg");
	this.shape_156.setTransform(174.15,32.775);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_157.setTransform(170.375,32.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgHAYQgEgCgCgCIAEgEQADAFAGAAQAEAAADgCQACgDAAgFIAAgDQgDAEgGAAQgGAAgEgFQgFgFAAgIQAAgJAFgFQAEgFAGAAQAGAAADAEIAAgDIAHAAIAAAjQAAAHgFAEQgEAEgHAAIgHgCgAgGgQQgDAEABAGQgBAGADADQADAEAEAAQAFAAADgFIAAgQQgDgGgFAAQgEAAgDAEg");
	this.shape_158.setTransform(166.45,33.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgBgCgEAAQgCAAgDACIgDAEIAAAaIgHAAIAAgkIAHAAIAAAEQADgFAGAAQAMAAAAANIAAAYg");
	this.shape_159.setTransform(162.65,32.775);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgSIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_160.setTransform(159.875,32.125);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgCgCgEAAQgCAAgCACIgEAEIAAAaIgGAAIAAgkIAGAAIAAAEQAEgFAGAAQANAAAAANIAAAYg");
	this.shape_161.setTransform(157.1,32.775);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_162.setTransform(153.325,32.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AAIAaIgMgRIgEAEIAAANIgGAAIAAgzIAGAAIAAAfIADgFIALgLIAHAAIgNAPIAPAVg");
	this.shape_163.setTransform(149.925,32.025);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_164.setTransform(146.075,32.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgIATIAAgkIAGAAIAAAEQACgFAGAAIADABIAAAFIgDAAQgGAAgCAGIAAAZg");
	this.shape_165.setTransform(143.225,32.775);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_166.setTransform(138.275,32.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgKAWQgFgGAAgJIAAAAQAAgIAFgEQAEgFAGgBQAGAAADAFIAAgTIAHAAIAAAzIgGAAIAAgEQgEAFgGAAQgGgBgEgEgAgGgCQgCADAAAHQAAAGACAEQADADAEABQAGgBACgFIAAgQQgCgFgGAAQgEAAgDADg");
	this.shape_167.setTransform(134.325,32.05);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgBgCgEAAQgDAAgCACIgDAEIAAAaIgHAAIAAgkIAHAAIAAAEQADgFAHAAQAMAAgBANIAAAYg");
	this.shape_168.setTransform(128.8,32.775);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgLAQQgDgDAAgFQAAgFAEgDQAFgDAHAAIAGAAIAAgDQAAgDgCgCQgCgCgEAAQgCAAgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgGAAQAAgDACgDQACgCADgCQADgBADAAQAHAAADADQAEADAAAGIAAAQIABAIIAAAAIgGAAIgBgDQgEAEgGAAQgFAAgEgDgAgIAIQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQACABADAAIAFgBQADgBABgDIAAgIIgFAAQgLAAAAAIg");
	this.shape_169.setTransform(124.925,32.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgBASIgOgjIAHAAIAIAbIAJgbIAHAAIgNAjg");
	this.shape_170.setTransform(121.325,32.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAFAXQgDgDAAgFIAAgCQAAgEADgEQADgDAEAAQAFAAADADQACAEAAAEIAAACQAAAFgCADQgDADgFAAQgEAAgDgDgAAIAJQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABIAAACQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgCQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBAAgBAAQAAgBgBAAQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAgBABgAgNATIAXgmIAEADIgXAlgAgSgEQgDgDAAgFIAAgCQAAgFADgDQADgCAEAAQAFAAACACQADADAAAFIAAACQAAAFgDADQgCACgFAAQgEAAgDgCgAgPgSQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABIAAACQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIABgFIAAgCIgBgEQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAABg");
	this.shape_171.setTransform(115.375,32.15);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgKAZIAUgrIgaAAIAAgGIAhAAIAAAEIgUAtg");
	this.shape_172.setTransform(110.8,32.15);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgLAWQgEgEAAgHQAAgEACgDQACgDAEgBIgFgEQgCgDAAgEQAAgGAEgEQAEgDAGAAQAGAAAFADQAEAEAAAGQAAAEgCADQgCADgEABQAEABACADQADADAAAEQAAAHgFAEQgEAEgHAAQgGAAgFgEgAgGAEQgDADAAAEQAAAEADADQACACAEABQAEgBADgCQACgDAAgEQAAgEgCgDQgDgCgEAAQgDAAgDACgAgFgRQgCACAAAEQAAAEACACQACADADAAQAEAAACgDQACgCAAgEQAAgEgCgCQgCgDgEAAQgDAAgCADg");
	this.shape_173.setTransform(106.875,32.15);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_174.setTransform(102.2,34.325);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgHAYQgEgCgCgCIADgEQAEAFAGAAQAEAAADgCQACgDAAgFIAAgDQgDAEgGAAQgHAAgEgFQgDgFAAgIQAAgJADgFQAEgFAHAAQAFAAAEAEIAAgDIAGAAIAAAjQAAAHgDAEQgFAEgHAAIgHgCgAgGgQQgCAEgBAGQABAGACADQADAEADAAQAHAAACgFIAAgQQgCgGgHAAQgDAAgDAEg");
	this.shape_175.setTransform(99.25,33.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgCgCgEAAQgCAAgCACIgEAEIAAAaIgGAAIAAgkIAGAAIAAAEQAEgFAGAAQANAAAAANIAAAYg");
	this.shape_176.setTransform(95.45,32.775);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgSIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_177.setTransform(92.675,32.125);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AAIAaIgMgRIgEAEIAAANIgGAAIAAgzIAGAAIAAAfIADgFIALgLIAHAAIgNAPIAPAVg");
	this.shape_178.setTransform(90.275,32.025);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgIATIAAgkIAGAAIAAAEQACgFAGAAIADABIAAAFIgDAAQgGAAgCAGIAAAZg");
	this.shape_179.setTransform(87.275,32.775);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_180.setTransform(84.075,32.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AAJASIgJgaIgIAaIgFAAIgLgjIAHAAIAHAaIAIgaIAEAAIAJAbIAHgbIAHAAIgLAjg");
	this.shape_181.setTransform(79.575,32.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AAUATIAAgYQAAgEgCgCQgCgCgEAAQgEAAgCADQgDACAAADIAAAYIgFAAIAAgXQAAgJgIAAQgGAAgDAGIAAAaIgGAAIAAgkIAGAAIAAAEQAEgFAHAAQAIAAACAGQACgDADgBQACgCAEAAQANAAAAANIAAAYg");
	this.shape_182.setTransform(73.875,32.775);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgLAOQgFgFAAgJIAAAAQAAgFACgEQACgEAEgDQAEgCAEAAQAHAAAFAFQAFAFAAAIIAAAAQAAAGgCAEQgDAEgDADQgEACgFAAQgHAAgEgFgAgHgJQgCAEAAAFQAAAGACAEQADAEAEAAQAFAAADgEQACgEAAgGQAAgFgCgEQgDgEgFAAQgEAAgDAEg");
	this.shape_183.setTransform(68.8,32.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgLAOQgFgFAAgJIAAAAQAAgFADgEQACgEADgDQAEgCAEAAQAIAAAEAFQAFAFAAAIIAAAAQAAAGgDAEQgCAEgDADQgEACgFAAQgHAAgEgFgAgGgJQgEAEAAAFQAAAGAEAEQACAEAEAAQAFAAACgEQAEgEAAgGQAAgFgEgEQgDgEgEAAQgEAAgCAEg");
	this.shape_184.setTransform(64.8,32.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgJAWIAAAEIgGAAIAAgzIAGAAIAAATQAEgFAGAAQAHABAEAFQADAFABAHIAAABQAAAJgFAFQgDAEgHABQgGgBgEgEgAgJAAIAAAPQAEAHAFAAQAEgBADgDQACgEAAgHQABgHgDgCQgDgDgEAAQgFgBgEAGg");
	this.shape_185.setTransform(60.9,32.05);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgEAaIAAgfIgGAAIAAgEIAGAAIAAgFQAAgFADgEQACgDAGAAIAEABIAAAFIgEAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABQgCABAAADIAAAFIAIAAIAAAEIgIAAIAAAfg");
	this.shape_186.setTransform(57.725,32);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_187.setTransform(54.575,32.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AAIAaIAAgYQAAgDgCgCQgCgCgEAAQgBAAgDACIgDADIAAAaIgHAAIAAgzIAHAAIAAAUQAEgFAFAAQANAAAAAMIAAAYg");
	this.shape_188.setTransform(50.8,32.025);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_189.setTransform(45.275,32.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgKAWQgFgGAAgJIAAAAQAAgIAFgEQAEgFAGgBQAGAAADAFIAAgTIAHAAIAAAzIgGAAIAAgEQgEAFgGAAQgGgBgEgEgAgGgCQgCADAAAHQAAAGACAEQADADAEABQAGgBACgFIAAgQQgCgFgGAAQgEAAgDADg");
	this.shape_190.setTransform(41.325,32.05);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgBgCgFAAQgCAAgCACIgEAEIAAAaIgFAAIAAgkIAFAAIAAAEQAFgFAGAAQALAAABANIAAAYg");
	this.shape_191.setTransform(35.8,32.775);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgLAQQgDgDAAgFQAAgFAEgDQAFgDAHAAIAGAAIAAgDQAAgDgCgCQgCgCgEAAQgCAAgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgGAAQAAgDACgDQACgCADgCQADgBADAAQAHAAADADQAEADAAAGIAAAQIABAIIAAAAIgGAAIgBgDQgEAEgGAAQgFAAgEgDgAgIAIQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQACABADAAIAFgBQADgBABgDIAAgIIgFAAQgLAAAAAIg");
	this.shape_192.setTransform(31.925,32.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgBASIgOgjIAHAAIAIAbIAJgbIAHAAIgNAjg");
	this.shape_193.setTransform(28.325,32.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgHAYQgEgCgCgCIADgEQAFAFAFAAQAEAAACgCQADgDAAgFIAAgDQgDAEgGAAQgHAAgEgFQgDgFAAgIQAAgJADgFQAEgFAHAAQAFAAAEAEIAAgDIAGAAIAAAjQAAAHgDAEQgFAEgHAAIgHgCgAgGgQQgDAEAAAGQAAAGADADQADAEADAAQAHAAACgFIAAgQQgCgGgHAAQgDAAgDAEg");
	this.shape_194.setTransform(22.85,33.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_195.setTransform(20.1,32.025);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgLAOQgFgFAAgJIAAAAQAAgFADgEQABgEAEgDQAEgCAEAAQAHAAAFAFQAFAFAAAIIAAAAQAAAGgCAEQgCAEgEADQgEACgFAAQgGAAgFgFgAgHgJQgDAEAAAFQAAAGADAEQADAEAEAAQAFAAADgEQACgEAAgGQAAgFgCgEQgDgEgFAAQgEAAgDAEg");
	this.shape_196.setTransform(17.25,32.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgBASIgOgjIAHAAIAIAbIAJgbIAHAAIgNAjg");
	this.shape_197.setTransform(13.525,32.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_198.setTransform(10.025,32.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgHAYQgEgCgCgCIADgEQAEAFAGAAQAEAAADgCQACgDAAgFIAAgDQgDAEgGAAQgHAAgEgFQgDgFAAgIQAAgJADgFQAEgFAHAAQAFAAAEAEIAAgDIAHAAIAAAjQgBAHgDAEQgFAEgHAAIgHgCgAgGgQQgCAEgBAGQABAGACADQADAEADAAQAHAAACgFIAAgQQgCgGgHAAQgDAAgDAEg");
	this.shape_199.setTransform(6.1,33.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgGASQgEgCgCgDQgCgDAAgDIAHAAQAAADACACQADACADAAQADAAACgCQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgHgBIgHgDQgDgBgBgCQgBgCAAgCQAAgFAEgDQADgDAFAAQAHAAAEADQAEAEAAAFIgHAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgCgCgEAAQgCAAgCABQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIAFACIAIACQADABABACIACAFQAAAFgEADQgEADgGAAQgEAAgDgBg");
	this.shape_200.setTransform(318.525,24.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_201.setTransform(315.9,23.625);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgLAQQgDgDAAgFQAAgFAEgDQAFgDAHAAIAGAAIAAgDQAAgDgCgCQgCgCgEAAQgCAAgDABQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABIgGAAQAAgDACgDQACgCADgBQADgCADAAQAHAAADADQAEADAAAGIAAAQIABAIIAAABIgGAAIgBgFQgEAFgGAAQgFAAgEgDgAgIAHQAAABAAABQAAABABAAQAAABAAAAQABABAAAAQACACADgBIAFgBQADgCABgCIAAgHIgFAAQgLAAAAAGg");
	this.shape_202.setTransform(313.125,24.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgBgCgFAAQgCAAgCACIgEAEIAAAaIgFAAIAAgkIAFAAIAAAEQAFgFAGAAQALAAABANIAAAYg");
	this.shape_203.setTransform(307.6,24.375);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgFADgEQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_204.setTransform(303.825,24.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgOATIAAgFIAUgbIgTAAIAAgEIAbAAIAAAEIgUAaIAVAAIAAAGg");
	this.shape_205.setTransform(300.275,24.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgFADgEQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_206.setTransform(296.675,24.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgSIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_207.setTransform(293.975,23.725);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_208.setTransform(292.25,23.625);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgIATIAAgkIAGAAIAAAEQACgFAGAAIADABIAAAFIgDAAQgGAAgCAGIAAAZg");
	this.shape_209.setTransform(290.425,24.375);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgFADgEQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_210.setTransform(287.225,24.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgBATIgOgkIAHAAIAIAbIAJgbIAHAAIgNAkg");
	this.shape_211.setTransform(283.625,24.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgFADgEQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_212.setTransform(278.375,24.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AAAAVQgCgDgBgEIAAgWIgGAAIAAgFIAGAAIAAgJIAGAAIAAAJIAHAAIAAAFIgHAAIAAAWIABADQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIADAAIAAAFIgFAAQgEAAgBgCg");
	this.shape_213.setTransform(275.25,23.975);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgKAWQgFgGAAgJIAAAAQAAgIAFgEQAEgGAGABQAGAAADAEIAAgUIAHAAIAAA0IgGAAIAAgEQgEAFgGgBQgGAAgEgEgAgGgCQgCADAAAHQAAAGACAEQADAEAEAAQAGAAACgGIAAgQQgCgGgGABQgEAAgDADg");
	this.shape_214.setTransform(270.375,23.65);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_215.setTransform(267.65,23.625);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgFADgEQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_216.setTransform(264.975,24.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgHAYQgEgBgCgDIAEgEQAEAFAFAAQAEAAADgDQACgDAAgEIAAgDQgEAEgFAAQgGAAgEgFQgFgGAAgHQAAgJAFgFQAEgFAGAAQAGAAADAEIAAgDIAHAAIAAAjQAAAHgFAEQgEAEgHAAIgHgCgAgGgQQgCADAAAIQAAAFACAEQADADADAAQAGAAADgFIAAgQQgDgGgGAAQgDAAgDAEg");
	this.shape_217.setTransform(261.05,25.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_218.setTransform(256.55,23.625);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgFADgEQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_219.setTransform(253.875,24.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgCgCgEAAQgBAAgDACIgEAEIAAAaIgFAAIAAgkIAFAAIAAAEQAFgFAGAAQAMAAAAANIAAAYg");
	this.shape_220.setTransform(250.1,24.375);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgGASQgEgCgCgDQgCgDAAgDIAHAAQAAADACACQADACADAAQADAAACgCQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgHgBIgHgDQgDgBgBgCQgBgCAAgCQAAgFAEgDQADgDAFAAQAHAAAEADQAEAEAAAFIgHAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgCgCgEAAQgCAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIAFACIAIACQADABABACIACAFQAAAFgEADQgEADgGAAQgEAAgDgBg");
	this.shape_221.setTransform(246.325,24.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AAUATIAAgYQAAgEgCgCQgCgCgEAAQgEAAgCADQgDACAAADIAAAYIgFAAIAAgXQAAgJgIAAQgGAAgDAGIAAAaIgGAAIAAgkIAGAAIAAAEQAEgFAHAAQAIAAACAGQACgDADgBQACgCAEAAQANAAAAANIAAAYg");
	this.shape_222.setTransform(239.725,24.375);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIIAAAAQAAgFACgEQACgFAEgCQAEgCAEAAQAHAAAFAFQAFAFAAAIIAAABQAAAFgDAEQgCAFgDACQgEACgFAAQgGAAgFgFgAgGgJQgDADAAAHQAAAFADAFQACADAEAAQAFAAADgDQADgFAAgGQAAgGgDgDQgDgEgFAAQgEAAgCAEg");
	this.shape_223.setTransform(234.65,24.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIIAAAAQAAgFACgEQACgFAEgCQAEgCAEAAQAHAAAFAFQAFAFAAAIIAAABQAAAFgDAEQgBAFgEACQgEACgFAAQgHAAgEgFgAgHgJQgCADAAAHQAAAFACAFQADADAEAAQAFAAADgDQACgFAAgGQAAgGgCgDQgEgEgEAAQgEAAgDAEg");
	this.shape_224.setTransform(228.9,24.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgKAOQgFgFAAgIIAAgBQAAgFACgFQACgEAEgCQAEgCAEAAQAGAAAEAEQAEADABAGIgGAAQgBgEgCgCQgDgCgDAAQgEAAgDADQgCAEAAAGIAAABQAAAGACAEQADADAEAAQADAAADgCQACgCABgDIAGAAIgDAGQgCADgDACQgDABgEAAQgHAAgEgFg");
	this.shape_225.setTransform(225.125,24.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgSIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_226.setTransform(222.425,23.725);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgGASQgEgCgCgDQgCgDAAgDIAHAAQAAADACACQADACADAAQADAAACgCQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIgHgBIgHgDQgDgBgBgCQgBgCAAgCQAAgFAEgDQADgDAFAAQAHAAAEADQAEAEAAAFIgHAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgCgCgEAAQgCAAgCABQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIAFACIAIACQADABABACIACAFQAAAFgEADQgEADgGAAQgEAAgDgBg");
	this.shape_227.setTransform(219.725,24.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgSIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_228.setTransform(217.125,23.725);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgIATIAAgkIAGAAIAAAEQACgFAGAAIADABIAAAFIgDAAQgGAAgCAGIAAAZg");
	this.shape_229.setTransform(215.275,24.375);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgHAYQgEgBgCgDIAEgEQADAFAGAAQAEAAADgDQACgDAAgEIAAgDQgDAEgGAAQgGAAgEgFQgFgGAAgHQAAgJAFgFQAEgFAGAAQAGAAAEAEIAAgDIAGAAIAAAjQAAAHgFAEQgEAEgHAAIgHgCgAgGgQQgDADABAIQgBAFADAEQADADADAAQAGAAADgFIAAgQQgDgGgGAAQgDAAgDAEg");
	this.shape_230.setTransform(210.1,25.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIIAAAAQAAgFADgEQACgFADgCQAEgCAEAAQAIAAAEAFQAFAFAAAIIAAABQAAAFgDAEQgCAFgDACQgEACgFAAQgGAAgFgFgAgGgJQgDADgBAHQABAFADAFQACADAEAAQAFAAACgDQAEgFAAgGQAAgGgEgDQgDgEgEAAQgEAAgCAEg");
	this.shape_231.setTransform(206.2,24.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIIAAAAQAAgFADgEQABgFAEgCQAEgCAEAAQAHAAAFAFQAFAFAAAIIAAABQAAAFgCAEQgCAFgEACQgEACgFAAQgGAAgFgFgAgHgJQgDADAAAHQAAAFADAFQADADAEAAQAFAAACgDQADgFAAgGQAAgGgDgDQgCgEgFAAQgEAAgDAEg");
	this.shape_232.setTransform(202.2,24.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AAIAaIAAgYQAAgDgCgCQgCgCgDAAQgCAAgDACIgDADIAAAaIgHAAIAAgzIAHAAIAAAUQAEgFAFAAQAMAAAAAMIAAAYg");
	this.shape_233.setTransform(198.3,23.625);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgBgCgEAAQgDAAgCACIgDAEIAAAaIgGAAIAAgkIAGAAIAAAEQADgFAHAAQAMAAgBANIAAAYg");
	this.shape_234.setTransform(192.7,24.375);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgFADgEQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_235.setTransform(188.925,24.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgFADgEQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_236.setTransform(185.225,24.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgBAVQgCgDABgEIAAgWIgHAAIAAgFIAHAAIAAgJIAFAAIAAAJIAHAAIAAAFIgHAAIAAAWIABADQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIADAAIAAAFIgFAAQgEAAgCgCg");
	this.shape_237.setTransform(180.35,23.975);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgFADgEQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_238.setTransform(177.475,24.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AAUATIAAgYQAAgEgCgCQgCgCgEAAQgEAAgCADQgDACAAADIAAAYIgFAAIAAgXQAAgJgIAAQgGAAgDAGIAAAaIgGAAIAAgkIAGAAIAAAEQAEgFAHAAQAIAAACAGQACgDADgBQACgCAEAAQANAAAAANIAAAYg");
	this.shape_239.setTransform(172.525,24.375);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AAAAVQgCgDAAgEIAAgWIgHAAIAAgFIAHAAIAAgJIAFAAIAAAJIAHAAIAAAFIgHAAIAAAWIABADQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIADAAIAAAFIgFAAQgEAAgBgCg");
	this.shape_240.setTransform(166.45,23.975);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AAUATIAAgYQAAgEgCgCQgCgCgEAAQgEAAgCADQgDACAAADIAAAYIgFAAIAAgXQAAgJgIAAQgGAAgDAGIAAAaIgGAAIAAgkIAGAAIAAAEQAEgFAHAAQAIAAACAGQACgDADgBQACgCAEAAQANAAAAANIAAAYg");
	this.shape_241.setTransform(162.325,24.375);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIIAAAAQAAgFACgEQACgFAEgCQAEgCAEAAQAHAAAFAFQAFAFAAAIIAAABQAAAFgDAEQgCAFgDACQgEACgFAAQgGAAgFgFgAgGgJQgDADAAAHQAAAFADAFQACADAEAAQAFAAADgDQADgFAAgGQAAgGgDgDQgDgEgFAAQgEAAgCAEg");
	this.shape_242.setTransform(157.25,24.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AAIAaIgMgRIgEAEIAAANIgGAAIAAgzIAGAAIAAAfIADgFIALgLIAHAAIgNAPIAPAVg");
	this.shape_243.setTransform(153.725,23.625);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AAMAZIgMgUIgLAUIgIAAIAQgZIgPgYIAHAAIALAUIAMgUIAHAAIgPAYIAQAZg");
	this.shape_244.setTransform(147.75,23.75);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAFIgXAAIAAARIAUAAIAAAFIgUAAIAAAWg");
	this.shape_245.setTransform(143.825,23.75);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgCgCgEAAQgBAAgDACIgEAEIAAAaIgFAAIAAgkIAFAAIAAAEQAFgFAGAAQAMAAgBANIAAAYg");
	this.shape_246.setTransform(138.05,24.375);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgFADgEQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_247.setTransform(134.275,24.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgGASQgEgCgCgDQgCgDAAgDIAHAAQAAADACACQADACADAAQADAAACgCQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIgHgBIgHgDQgDgBgBgCQgBgCAAgCQAAgFAEgDQADgDAFAAQAHAAAEADQAEAEAAAFIgHAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgCgCgEAAQgCAAgCABQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIAFACIAIACQADABABACIACAFQAAAFgEADQgEADgGAAQgEAAgDgBg");
	this.shape_248.setTransform(128.825,24.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgCAIIAAgPIAFAAIAAAEIgBALg");
	this.shape_249.setTransform(126.45,21.825);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgRAZIAAgxIAOAAQAGAAAEADQAFADADAGQADAFAAAGIAAADQAAAGgDAGQgDAGgFACQgFADgFAAgAgLAUIAHAAQAHAAAEgFQAFgFAAgIIAAgDQAAgIgFgEQgDgGgHAAIgIAAg");
	this.shape_250.setTransform(123.65,23.75);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAFIgXAAIAAARIAUAAIAAAFIgUAAIAAAWg");
	this.shape_251.setTransform(119.525,23.75);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgNAUQgFgHAAgKIAAgFQAAgGACgFQADgGAEgCQAFgDAFAAQAIgBAFAFQAEAEABAIIgGAAQgBgGgDgDQgDgCgFAAQgFAAgEAFQgEAEAAAJIAAAEQAAAHAEAFQADAFAFABQAGAAADgDQADgDABgGIAGAAQgBAIgFAFQgFADgIAAQgIAAgFgFg");
	this.shape_252.setTransform(115.175,23.75);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgCgCgDAAQgCAAgDACIgDAEIAAAaIgHAAIAAgkIAHAAIAAAEQAEgFAFAAQAMAAAAANIAAAYg");
	this.shape_253.setTransform(109.2,24.375);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgSIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_254.setTransform(106.425,23.725);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_255.setTransform(102.95,23.625);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgFADgEQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_256.setTransform(100.275,24.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgKAWQgFgGAAgJIAAAAQAAgIAFgEQAEgGAGABQAGAAADAEIAAgUIAHAAIAAA0IgGAAIAAgEQgEAFgGgBQgGAAgEgEgAgGgCQgCADAAAHQAAAGACAEQADAEAEAAQAGAAACgGIAAgQQgCgGgGABQgEAAgDADg");
	this.shape_257.setTransform(96.325,23.65);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgCgCgDAAQgCAAgDACIgDAEIAAAaIgHAAIAAgkIAHAAIAAAEQAEgFAFAAQAMAAAAANIAAAYg");
	this.shape_258.setTransform(92.55,24.375);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgLAQQgDgDAAgFQAAgFAEgDQAFgDAHAAIAGAAIAAgDQAAgDgCgCQgCgCgEAAQgCAAgDABQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABIgGAAQAAgDACgDQACgCADgBQADgCADAAQAHAAADADQAEADAAAGIAAAQIABAIIAAABIgGAAIgBgFQgEAFgGAAQgFAAgEgDgAgIAHQAAABAAABQABABAAAAQAAABAAAAQABABAAAAQACACADgBIAFgBQADgCABgCIAAgHIgFAAQgLAAAAAGg");
	this.shape_259.setTransform(88.675,24.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AAIAaIAAgYQAAgDgCgCQgCgCgDAAQgCAAgDACIgDADIAAAaIgHAAIAAgzIAHAAIAAAUQAEgFAFAAQAMAAAAAMIAAAYg");
	this.shape_260.setTransform(84.9,23.625);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgFADgEQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_261.setTransform(79.375,24.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgRAZIAAgxIAOAAQAGAAAEADQAFADADAGQADAFAAAGIAAADQAAAGgDAGQgDAGgFACQgEADgGAAgAgKAUIAGAAQAHAAAEgFQAFgFgBgIIAAgDQAAgIgEgEQgDgGgHAAIgHAAg");
	this.shape_262.setTransform(75.3,23.75);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_263.setTransform(70.2,25.925);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgKAWQgFgGAAgJIAAAAQAAgIAFgEQAEgGAGABQAGAAADAEIAAgUIAHAAIAAA0IgGAAIAAgEQgEAFgGgBQgGAAgEgEgAgGgCQgCADAAAHQAAAGACAEQADAEAEAAQAGAAACgGIAAgQQgCgGgGABQgEAAgDADg");
	this.shape_264.setTransform(67.225,23.65);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgIATIAAgkIAGAAIAAAEQACgFAGAAIADABIAAAFIgDAAQgGAAgCAGIAAAZg");
	this.shape_265.setTransform(64.375,24.375);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIIAAAAQAAgFADgEQACgFADgCQAEgCAEAAQAHAAAFAFQAFAFAAAIIAAABQAAAFgCAEQgCAFgEACQgEACgFAAQgGAAgFgFgAgHgJQgDADAAAHQAAAFADAFQADADAEAAQAFAAACgDQADgFAAgGQAAgGgDgDQgDgEgEAAQgEAAgDAEg");
	this.shape_266.setTransform(61,24.4);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIIAAAAQAAgFACgEQACgFAEgCQAEgCAEAAQAHAAAFAFQAFAFAAAIIAAABQAAAFgDAEQgBAFgEACQgEACgFAAQgHAAgEgFgAgHgJQgCADAAAHQAAAFACAFQADADAEAAQAFAAADgDQACgFAAgGQAAgGgCgDQgEgEgEAAQgEAAgDAEg");
	this.shape_267.setTransform(57,24.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AAJATIgJgbIgIAbIgFAAIgLgkIAHAAIAHAaIAIgaIAEAAIAJAbIAHgbIAHAAIgLAkg");
	this.shape_268.setTransform(52.375,24.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgBAVQgCgDAAgEIAAgWIgGAAIAAgFIAGAAIAAgJIAGAAIAAAJIAHAAIAAAFIgHAAIAAAWIABADQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIADAAIAAAFIgFAAQgEAAgCgCg");
	this.shape_269.setTransform(48.5,23.975);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgBgCgEAAQgDAAgCACIgDAEIAAAaIgHAAIAAgkIAHAAIAAAEQADgFAHAAQAMAAgBANIAAAYg");
	this.shape_270.setTransform(45.55,24.375);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgLAQQgDgDAAgFQAAgFAEgDQAFgDAHAAIAGAAIAAgDQAAgDgCgCQgCgCgEAAQgCAAgDABQAAABgBABQAAAAAAABQgBAAAAABQAAAAAAABIgGAAQAAgDACgDQACgCADgBQADgCADAAQAHAAADADQAEADAAAGIAAAQIABAIIAAABIgGAAIgBgFQgEAFgGAAQgFAAgEgDgAgIAHQAAABAAABQAAABABAAQAAABAAAAQABABAAAAQACACADgBIAFgBQADgCABgCIAAgHIgFAAQgLAAAAAGg");
	this.shape_271.setTransform(41.675,24.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgIATIAAgkIAGAAIAAAEQACgFAGAAIADABIAAAFIgDAAQgGAAgCAGIAAAZg");
	this.shape_272.setTransform(38.825,24.375);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgFADgEQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_273.setTransform(35.625,24.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgBATIgOgkIAHAAIAIAbIAJgbIAHAAIgNAkg");
	this.shape_274.setTransform(32.025,24.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_275.setTransform(27.75,23.625);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgKAOQgFgEAAgJIAAgBQAAgFADgEQACgEADgCQAEgDAEAAQAHAAAEAEQAEAFAAAJIAAACIgYAAQAAAGADADQADADAEAAQADAAACgCQADgBABgCIAEADQgEAHgKAAQgGAAgFgFgAgFgKQgCADgBAEIARAAIAAAAQAAgEgCgEQgCgCgEAAQgDAAgDADg");
	this.shape_276.setTransform(25.075,24.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgKAWQgFgGAAgJIAAAAQAAgIAFgEQAEgGAGABQAGAAADAEIAAgUIAHAAIAAA0IgGAAIAAgEQgEAFgGgBQgGAAgEgEgAgGgCQgCADAAAHQAAAGACAEQADAEAEAAQAGAAACgGIAAgQQgCgGgGABQgEAAgDADg");
	this.shape_277.setTransform(21.125,23.65);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgBgCgFAAQgCAAgCACIgEAEIAAAaIgFAAIAAgkIAFAAIAAAEQAFgFAGAAQALAAABANIAAAYg");
	this.shape_278.setTransform(17.35,24.375);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgLAQQgDgDAAgFQAAgFAEgDQAFgDAHAAIAGAAIAAgDQAAgDgCgCQgCgCgEAAQgCAAgDABQAAABgBABQAAAAAAABQgBAAAAABQAAAAAAABIgGAAQAAgDACgDQACgCADgBQADgCADAAQAHAAADADQAEADAAAGIAAAQIABAIIAAABIgGAAIgBgFQgEAFgGAAQgFAAgEgDgAgIAHQAAABAAABQAAABABAAQAAABAAAAQABABAAAAQACACADgBIAFgBQADgCABgCIAAgHIgFAAQgLAAAAAGg");
	this.shape_279.setTransform(13.475,24.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgYAAIAAAXIgGAAIAAgxIAGAAIAAAVIAYAAIAAgVIAHAAIAAAxg");
	this.shape_280.setTransform(9.1,23.75);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgGASQgEgCgCgDQgCgDAAgDIAHAAQAAADACACQADACADAAQADAAACgCQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIgHgCIgHgCQgDgBgBgBQgBgDAAgCQAAgFAEgDQADgDAFAAQAHAAAEADQAEAEAAAEIgHAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBgBAAQgCgCgEAAQgCAAgCACQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIAFACIAIACQADABABACIACAFQAAAFgEADQgEADgGAAQgEAAgDgBg");
	this.shape_281.setTransform(193.375,7.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgBgCgFAAQgCAAgCACIgEAEIAAAaIgFAAIAAgkIAFAAIAAAEQAFgFAGAAQALAAABANIAAAYg");
	this.shape_282.setTransform(189.7,7.575);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgLAOQgFgFAAgJIAAAAQAAgFADgEQACgEADgDQAEgCAEAAQAHAAAFAFQAFAFAAAIIAAABQAAAFgDAEQgCAEgDADQgEACgFAAQgHAAgEgFgAgGgJQgEAEAAAGQAAAFAEAEQACAEAEAAQAFAAACgEQADgEABgGQgBgFgDgEQgDgEgEAAQgEAAgCAEg");
	this.shape_283.setTransform(185.75,7.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgSIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_284.setTransform(182.925,6.925);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgBAVQgBgDgBgEIAAgWIgGAAIAAgFIAGAAIAAgJIAGAAIAAAJIAHAAIAAAFIgHAAIAAAWIABADQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIADAAIAAAFIgFAAQgEAAgCgCg");
	this.shape_285.setTransform(180.8,7.175);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgSIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_286.setTransform(178.925,6.925);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgKAWQgFgGAAgJIAAAAQAAgIAFgEQAEgFAGgBQAGAAADAFIAAgTIAHAAIAAAzIgGAAIAAgEQgEAFgGAAQgGgBgEgEgAgGgCQgCADAAAHQAAAGACAEQADADAEABQAGgBACgFIAAgQQgCgFgGAAQgEAAgDADg");
	this.shape_287.setTransform(175.975,6.85);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AAIATIAAgYQAAgEgCgCQgCgCgDAAQgCAAgDACIgDAEIAAAaIgHAAIAAgkIAHAAIAAAEQAEgFAFAAQAMAAAAANIAAAYg");
	this.shape_288.setTransform(172.2,7.575);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgLAOQgFgFAAgJIAAAAQAAgFACgEQACgEAEgDQAEgCAEAAQAHAAAFAFQAFAFAAAIIAAABQAAAFgCAEQgDAEgDADQgEACgFAAQgHAAgEgFgAgHgJQgCAEAAAGQAAAFACAEQADAEAEAAQAFAAADgEQACgEAAgGQAAgFgCgEQgDgEgFAAQgEAAgDAEg");
	this.shape_289.setTransform(168.25,7.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgKAOQgFgFAAgIIAAgBQAAgFACgEQACgFAEgCQAEgCAEAAQAGAAAEADQAEAFABAFIgGAAQgBgDgCgCQgDgDgDAAQgEAAgDAEQgCADAAAGIAAABQAAAGACADQADAEAEAAQADAAADgCQACgCABgDIAGAAIgDAGQgCADgDACQgDABgEAAQgHAAgEgFg");
	this.shape_290.setTransform(164.475,7.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgOAWQgFgEAAgHQAAgDACgDQACgDAFgDIgEgGIgBgGQAAgFADgDQAEgDAFAAQAEAAAEACQADADAAAFQAAADgBADIgFAFIgDADIAKAMQACgFAAgFIAGAAQAAAIgEAHIAHAIIgIAAIgDgEQgCACgEABIgGACQgHAAgEgEgAgHADQgFAEAAAEQAAAEACADQACACAFABQAEgBAEgDIgLgPgAgHgRQgCACAAACQABADAEAFIADgCIADgEIABgDQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAABg");
	this.shape_291.setTransform(158.85,6.95);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgGASQgEgCgCgDQgCgDAAgDIAHAAQAAADACACQADACADAAQADAAACgCQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgHgCIgHgCQgDgBgBgBQgBgDAAgCQAAgFAEgDQADgDAFAAQAHAAAEADQAEAEAAAEIgHAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBgBAAQgCgCgEAAQgCAAgCACQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIAFACIAIACQADABABACIACAFQAAAFgEADQgEADgGAAQgEAAgDgBg");
	this.shape_292.setTransform(152.925,7.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AAUATIAAgYQAAgEgCgCQgCgCgEAAQgEAAgCADQgDACAAADIAAAYIgFAAIAAgXQAAgJgIAAQgGAAgDAGIAAAaIgGAAIAAgkIAGAAIAAAEQAEgFAHAAQAIAAACAGQACgDADgBQACgCAEAAQANAAAAANIAAAYg");
	this.shape_293.setTransform(148.075,7.575);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgIATIAAgkIAGAAIAAAEQACgFAGAAIADABIAAAFIgDAAQgGAAgCAGIAAAZg");
	this.shape_294.setTransform(144.025,7.575);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgKAPQgFgGAAgIIAAgBQAAgEADgFQACgFADgCQAEgCAEAAQAHAAAEAEQAEAGAAAIIAAACIgYAAQAAAFADADQADAEAEAAQADAAACgCQADAAABgDIAEADQgEAHgKAAQgGAAgFgEgAgFgKQgCACgBAGIARAAIAAgBQAAgEgCgDQgCgDgEAAQgDAAgDADg");
	this.shape_295.setTransform(140.825,7.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgCAZIAAgrIgQAAIAAgGIAlAAIAAAGIgQAAIAAArg");
	this.shape_296.setTransform(136.825,6.95);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AAAAFIgGAKIgDgEIAHgJIgLgCIACgGIAKAFIAAgNIAEAAIgBANIAKgEIACAFIgLACIAHAJIgEAEg");
	this.shape_297.setTransform(133.25,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0.8,327,54.400000000000006), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgkC3QgPgPAAgVIAAkkQAAgWAPgPQAPgPAVAAQAWAAAPAPQAPAPAAAWIAAEkQAAAVgPAPQgQAPgVAAQgVAAgPgPg");
	mask.setTransform(25.025,25.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-10.7,-10.7,10.7,10.7).s().p("Aj5AAID5j6ID6D6Ij6D7g");
	this.shape.setTransform(25.025,25.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(19.8,5.3,10.5,39.6), null);


(lib.ClipGroup_13 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgkC3QgPgPAAgWIAAkkQAAgVAPgPQAQgPAUAAQAWAAAPAPQAPAPAAAVIAAEkQAAAWgPAPQgPAPgWAAQgUAAgQgPg");
	mask.setTransform(25.025,25.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-11,-11,11,11).s().p("Aj5AAID5j5ID6D5Ij6D6g");
	this.shape.setTransform(25.025,25.025);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(19.8,5.3,10.5,39.6), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgkC3QgQgPAAgVIAAkkQAAgWAQgPQAQgPAUAAQAWAAAPAPQAQAPAAAWIAAEkQAAAVgQAPQgPAPgWAAQgUAAgQgPg");
	mask.setTransform(25.05,25.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-11,-11,11,11).s().p("Aj6AAID6j6ID7D6Ij7D7g");
	this.shape.setTransform(25.05,25.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(19.8,5.3,10.5,39.6), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgkCCQgPgPAAgWIAAi6QAAgVAPgPQAPgPAVAAQAVAAAQAPQAPAPAAAVIAAC6QAAAWgPAPQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(19.725,19.75);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-8.3,-8.3,8.4,8.4).s().p("AjEAAIDEjFIDFDFIjFDGg");
	this.shape.setTransform(19.725,19.75);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(14.5,5.3,10.5,28.999999999999996), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EhQYALoIAA3PMCgxAAAIAAXPg");
	mask.setTransform(514.475,74.425);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak6GuIAAtbIEsAAQBXAAAuALQAtALAnAgQA3AqAcBEQAdBFAABZQAACJhSBUQgqArg0ATQg1AThNAAIiXAAIAADrgAiOA+IBpAAQCwAAAAi2QAAhUgqguQgrgthOAAIh2AAg");
	this.shape.setTransform(920.35,80.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrE4QhKAAgogKQglgLgigcQhBg+AAiAIAAmAICsAAIAAGQQAAArAVAXQAXAYAmAAIChAAIAAnqICsAAIAAJvg");
	this.shape_1.setTransform(848.35,68.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjyDsQhWhWAAiXQAAiTBahVQBahXCXABQBVgBBAAbQBBAbApA0QBHBaAACDQAACRhZBUQhaBViYgBQiaAAhWhUgAiZADQAABbAoAvQAnAwBMAAQCYAAAAi+QAAi6ibAAQiYAAAAC+g");
	this.shape_2.setTransform(777.125,68.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Aj4E4IAApvID9AAQBQAAApAKQAqAKAeAbQAcAaALAmQAMAmAABHIAAA+IimAAIAAghQABhDgYgZQgYgYg+AAIgyAAIAAHqg");
	this.shape_3.setTransform(710.4,68.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAIGtQhjAAg6gOQg7gPgvgmQhCgzgihbQgkhdABh8QgBh5AkhdQAihcBBg0QBchJCzAAIF5AAIAACZIljAAQh5AAg1A9Qg0A8gBCNQAABPARBAQARBAAcAfQAzAzB5AAIClAAIAAjLIjuAAIAAiZIGlAAIAAH9g");
	this.shape_4.setTransform(635.2,56.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhQCgQgOgNgHgUQgGgPgCgXIA2AAQAHA0AwAAQAXAAAPgPQALgKAEgTQADgNAAgYQAAglgLgSQgNgXgfAAQgqAAgKAhIgxAAIAAjMIDJAAIAAAwIiZAAIAABkQAVgXApAAQAqABAZAYQAUAUAHAaQAGAUAAAhQAAAkgFATQgIAagTATQgdAegxAAQgzAAgdgeg");
	this.shape_5.setTransform(867.525,129.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhMCiQgggdAAgyIAAilQAAgyAggdQAfgdAtAAQAuAAAeAdQAhAdgBAyIAAClQABAyghAdQgeAdguAAQgtAAgfgdgAg2hRIAACjQAAA9A2AAQA2AAAAg9IAAijQAAg9g2AAQg2AAAAA9g");
	this.shape_6.setTransform(843.2,129.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhMCiQgggdABgyIAAilQgBgyAggdQAfgdAtAAQAuAAAeAdQAhAeAAAxIAAClQAAAxghAeQgeAdguAAQgtAAgfgdgAg1hRIAACjQAAA9A1AAQA3AAAAg9IAAijQAAg9g3AAQg1AAAAA9g");
	this.shape_7.setTransform(818.3,129.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhsC9IAAgwICPiuQAUgYAAgbQAAg4g3AAQgWAAgPAMQgRAQAAAdIg2AAQAAgvAfgdQAegeAvAAQAxAAAeAdQAeAcAAAxQAAAXgJATQgIAQgSAXIh1CPICYAAIAAAwg");
	this.shape_8.setTransform(792.875,129.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAgIAAg/IA/AAIAAA/g");
	this.shape_9.setTransform(768.125,145.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbC8IAAlEIhoAAIAAgzIEHAAIAAAzIhoAAIAAFEg");
	this.shape_10.setTransform(752.9,129.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiFCOIAmgmQAkAkA7AAQBOAAAAg6QAAgagPgMQgMgMgdgFIgsgGQgugGgZgXQgbgZAAgvQAAgyAhgeQAigeA5AAQBHAAAuArIglAkQgdgeg0AAQhEAAAAA7QAAAWAOANQAPANAbAFIAqAFQAvAIAYATQAeAcAAAyQAAAygmAfQglAdg7AAQhUAAgxgxg");
	this.shape_11.setTransform(725.325,129.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah3C8IAAl3IDvAAIAAAzIi2AAIAABuICcAAIAAAyIicAAIAABxIC2AAIAAAzg");
	this.shape_12.setTransform(697.5,129.65);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(596.1,13.9,355.79999999999995,135), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("ABxGtIiXkXIhKBQIAADHIiBAAQgSAAgNgNQgMgMAAgSIAAsuICsAAIAAHGIC7jaIDEAAIjPDiIDdGLg");
	mask.setTransform(71.475,71.475);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-35.7,-35.7,35.8,35.8).s().p("ArKAAILKrKILLLKIrLLLg");
	this.shape.setTransform(71.475,71.475);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(43,28.6,57,85.80000000000001), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AjIE5IAAgBIgzAAQgSAAgNgMQgMgNAAgSIAApFICsAAIAAGRIABAGIAAApQAAASAMAMQAMANATAAIB/AAIAAAAIBKAAIAAnrICsAAIAAJxg");
	mask.setTransform(60.75,60.775);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-30.3,-30.3,30.4,30.4).s().p("ApfAAIJfpfIJgJfIpgJgg");
	this.shape.setTransform(60.75,60.75);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(31.3,29.5,59,62.599999999999994), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgqGtQgSAAgMgNQgNgNAAgRIAAsvICrAAIAANbg");
	mask.setTransform(51.575,51.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-25.8,-25.8,25.8,25.8).s().p("AoDAAIIDoDIIEIDIoEIEg");
	this.shape.setTransform(51.575,51.575);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(43,8.7,17.200000000000003,85.89999999999999), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgqE4QgSAAgNgMQgMgNAAgSIAApFICrAAIAAJxg");
	mask.setTransform(39.875,39.925);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-19.9,-19.9,20,20).s().p("AmOAAIGOmOIGPGOImPGPg");
	this.shape.setTransform(39.9,39.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(31.3,8.7,17.2,62.5), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVBUIAAinICrAAIAACng");
	mask.setTransform(17,17.025);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-8.3,-8.3,8.3,8.3).s().p("AipAAICpipICqCpIiqCqg");
	this.shape.setTransform(17.025,17.025);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(8.4,8.7,17.299999999999997,16.7), null);


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
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlOGtQgSAAgNgMQgMgNAAgSIAAsvIHbAAQByAAA0AbQA9AeAfBFQAWAxAAAzQAABDgkA6QgjA5g2AWQB8A4AACRQAABVgoA4QggAxg4ASQg3AUhrgBgAjMEUID4AAQAoABASgFQASgEAQgNQAogegBg2QAAg2glgXQgcgSg+AAIj8AAgAjMhLID4AAQAlAAAUgEQAQgEATgNQAogfgBg2QAAg1glgYQgbgRg/gBIj8AAg");
	mask.setTransform(80.75,80.75);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-40.3,-40.3,34.3,34.3).s().p("AsnAAIMnsnIMnMnIsnMng");
	this.shape.setTransform(80.75,80.75);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(43,37.8,75.6,85.9), null);


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
	mask.graphics.p("AgqE5QhcAAgrgGQgkgFgegUQhMgzAAhnQAAhAAegxQAfgwAxgSQAtgQBmAAIDSAAQAAhBgbgXQgbgXhOAAIkiAAIAAiGIEiAAQBOAAAeADQAfADAdAJQCPA2gHDMIAAFggAh+BRQgRAPAAAbQAAAfAVAMQAUANA0AAIDGAAIAAhxIjjgBQgeAAgRAQg");
	mask.setTransform(63.2664,63.475);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-29.5,-29.5,31.5,31.5).s().p("Ap6AAIJ6p6IJ7J6Ip7J7g");
	this.shape.setTransform(63.475,63.475);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(31.3,32.2,64,62.599999999999994), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgFGuIAAgBIg+AAQgSAAgNgNQgNgNABgRIAAnBIhuAAIAAiGIBuAAIAAjoICrAAIAADoICgAAIAACGIigAAIAAE7QAAASAMAMQANANASAAIB1AAIAACHg");
	mask.setTransform(65.05,65.1);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-26.3,-26.3,31.8,31.8).s().p("AqKAAIKKqKIKLKKIqLKLg");
	this.shape.setTransform(65.05,65.075);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(43,22.2,44.2,85.89999999999999), null);


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
	mask.graphics.p("ACjE4QgSAAgNgMQgMgNAAgSIAAloQAAgugVgVQgVgVgvAAIiWAAIAAHsIiBgBQgRAAgNgMQgNgNAAgSIAApFIFMAAQBMAAAmAKQAoAMAfAcQBCA7gBCDIAAGBg");
	mask.setTransform(60.4,60.425);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-30.2,-30.2,30.2,30.2).s().p("ApbAAIJbpbIJcJbIpcJcg");
	this.shape.setTransform(60.425,60.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(31.3,29.2,58.3,62.5), null);


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
	mask.graphics.p("AFkGtQgRgBgMgKQgMgLgCgQIAApeIjhKEIi8AAIjUqEIAAKEIiDAAQgSAAgMgNQgNgNAAgSIAAstIELAAIDWKcIDhqcIELAAIAANZg");
	mask.setTransform(91.675,91.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-45.8,-45.8,45.9,45.9).s().p("AuUAAIOUuUIOVOUIuVOVg");
	this.shape.setTransform(91.675,91.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(43,48.8,97.4,85.89999999999999), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:1.4,scaleX:1.5769,scaleY:1.5769,x:85.8,y:-2},180).wait(11));

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

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(48.75,56.85,1,1,0,0,0,91.7,91.7);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(477.25,68.5,1,1,0,0,0,60.4,60.4);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.setTransform(229.15,56.75,1,1,0,0,0,65,65);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.setTransform(405.25,68.55,1,1,0,0,0,63.5,63.5);

	this.instance_4 = new lib.ClipGroup_4();
	this.instance_4.setTransform(328.6,56.7,1,1,0,0,0,80.8,80.8);

	this.instance_5 = new lib.ClipGroup_5();
	this.instance_5.setTransform(271,22.25,1,1,0,0,0,17,17);

	this.instance_6 = new lib.ClipGroup_6();
	this.instance_6.setTransform(271.05,68.5,1,1,0,0,0,39.9,39.9);

	this.instance_7 = new lib.ClipGroup_7();
	this.instance_7.setTransform(187.3,56.85,1,1,0,0,0,51.6,51.6);

	this.instance_8 = new lib.ClipGroup_8();
	this.instance_8.setTransform(138.25,68.55,1,1,0,0,0,60.8,60.8);

	this.instance_9 = new lib.ClipGroup_9();
	this.instance_9.setTransform(546.1,56.85,1,1,0,0,0,71.5,71.5);

	this.instance_10 = new lib.ClipGroup_10();
	this.instance_10.setTransform(514.5,74.4,1,1,0,0,0,514.5,74.4);

	this.instance_11 = new lib.ClipGroup_11();
	this.instance_11.setTransform(978.45,31.5,1,1,0,0,0,19.7,19.8);

	this.instance_12 = new lib.ClipGroup_12();
	this.instance_12.setTransform(993.6,19.85,1,1,0,0,0,25.1,25.1);

	this.instance_13 = new lib.ClipGroup_13();
	this.instance_13.setTransform(1008.6,31.25,1,1,0,0,0,25,25);

	this.instance_14 = new lib.ClipGroup_14();
	this.instance_14.setTransform(1023.7,19.85,1,1,0,0,0,25,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-42.9,-34.8,1091.7,183.7), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({scaleY:0.7224,y:18.65},12,cjs.Ease.quadOut).wait(34));

	// Symbol 16
	this.instance_4 = new lib.Symbol16();
	this.instance_4.setTransform(154.25,17.3,0.5,0.1159,0,0,0,1.1,17.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({scaleY:0.7224,y:18.65},11,cjs.Ease.quadOut).wait(20));

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

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_1_graphics_15,x:-88.5,y:23.425}).wait(1).to({graphics:mask_1_graphics_16,x:-83.0583,y:23.425}).wait(1).to({graphics:mask_1_graphics_17,x:-75.4285,y:23.425}).wait(1).to({graphics:mask_1_graphics_18,x:-67.8222,y:23.425}).wait(1).to({graphics:mask_1_graphics_19,x:-60.2512,y:23.425}).wait(1).to({graphics:mask_1_graphics_20,x:-52.7271,y:23.425}).wait(1).to({graphics:mask_1_graphics_21,x:-45.2616,y:23.425}).wait(1).to({graphics:mask_1_graphics_22,x:-37.8661,y:23.425}).wait(1).to({graphics:mask_1_graphics_23,x:-30.5521,y:23.425}).wait(1).to({graphics:mask_1_graphics_24,x:-23.3308,y:23.425}).wait(1).to({graphics:mask_1_graphics_25,x:-16.2135,y:23.425}).wait(1).to({graphics:mask_1_graphics_26,x:-9.211,y:23.425}).wait(1).to({graphics:mask_1_graphics_27,x:-2.3341,y:23.425}).wait(1).to({graphics:mask_1_graphics_28,x:4.4065,y:23.425}).wait(1).to({graphics:mask_1_graphics_29,x:11.0005,y:23.425}).wait(1).to({graphics:mask_1_graphics_30,x:17.4377,y:23.425}).wait(1).to({graphics:mask_1_graphics_31,x:23.7081,y:23.425}).wait(1).to({graphics:mask_1_graphics_32,x:29.8021,y:23.425}).wait(1).to({graphics:mask_1_graphics_33,x:35.7103,y:23.425}).wait(1).to({graphics:mask_1_graphics_34,x:41.4236,y:23.425}).wait(1).to({graphics:mask_1_graphics_35,x:46.9331,y:23.425}).wait(1).to({graphics:mask_1_graphics_36,x:52.2304,y:23.425}).wait(1).to({graphics:mask_1_graphics_37,x:57.3074,y:23.425}).wait(1).to({graphics:mask_1_graphics_38,x:62.1561,y:23.425}).wait(1).to({graphics:mask_1_graphics_39,x:66.7692,y:23.425}).wait(1).to({graphics:mask_1_graphics_40,x:71.1394,y:23.425}).wait(1).to({graphics:mask_1_graphics_41,x:75.2601,y:23.425}).wait(1).to({graphics:mask_1_graphics_42,x:79.1249,y:23.425}).wait(1).to({graphics:mask_1_graphics_43,x:82.7278,y:23.425}).wait(1).to({graphics:mask_1_graphics_44,x:86.0633,y:23.425}).wait(1).to({graphics:mask_1_graphics_45,x:89.1263,y:23.425}).wait(1).to({graphics:mask_1_graphics_46,x:91.912,y:23.425}).wait(1).to({graphics:mask_1_graphics_47,x:94.4161,y:23.425}).wait(1).to({graphics:mask_1_graphics_48,x:96.6348,y:23.425}).wait(1).to({graphics:mask_1_graphics_49,x:98.5646,y:23.425}).wait(1).to({graphics:mask_1_graphics_50,x:100.2026,y:23.425}).wait(1).to({graphics:mask_1_graphics_51,x:101.5462,y:23.425}).wait(1).to({graphics:mask_1_graphics_52,x:102.5934,y:23.425}).wait(1).to({graphics:mask_1_graphics_53,x:103.3426,y:23.425}).wait(1).to({graphics:mask_1_graphics_54,x:103.7925,y:23.425}).wait(1).to({graphics:mask_1_graphics_55,x:103.9426,y:23.425}).wait(20));

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
	this.instance.setTransform(35.4,102.45,1.8077,1.8077,165.0008,0,0,1.3,1.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(321));

	// Layer_6
	this.instance_1 = new lib.Symbol5copy3();
	this.instance_1.setTransform(46.45,116.2,1.0435,1.0435,0,0,0,1.4,1.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(334));

	// Layer_4 copy 2
	this.instance_2 = new lib.Symbol5copy3();
	this.instance_2.setTransform(54.45,164.2,1.0435,1.0435,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(342));

	// Layer_4 copy
	this.instance_3 = new lib.Symbol5copy3();
	this.instance_3.setTransform(49.85,136.2,1.8461,1.8461,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(342));

	// Layer_4
	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(43.3,8.8,1,1,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(342));

	// Layer_2 copy
	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(45.9,-22.2,0.68,0.68,-9.6942,0,0,1.4,1.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(338));

	// Layer_2 copy 2
	this.instance_6 = new lib.Symbol5();
	this.instance_6.setTransform(45.8,-48.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({_off:false},0).wait(325));

	// Layer_2 copy 3
	this.instance_7 = new lib.Symbol5();
	this.instance_7.setTransform(101.8,-24.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(332));

	// Layer_2
	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(45.8,-28.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).wait(328));

	// Layer_1 copy
	this.instance_9 = new lib.Symbol5copy2();
	this.instance_9.setTransform(-239.9,55.9,1.4729,1.4729,14.9991,0,0,1.3,1.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},0).wait(325));

	// Layer_1
	this.instance_10 = new lib.Symbol5copy();
	this.instance_10.setTransform(-236.75,35.8,1.8077,1.8077,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(342));

	// Layer_7 copy
	this.instance_11 = new lib.Symbol5copy4();
	this.instance_11.setTransform(-249.55,-2,1.5458,1.5458,-178.5536,0,0,1.4,1.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({_off:false},0).wait(319));

	// Layer_7
	this.instance_12 = new lib.Symbol5copy3();
	this.instance_12.setTransform(-248.2,-22.4,1.0434,1.0434,-178.5536,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(342));

	// Layer_4 copy 3
	this.instance_13 = new lib.Symbol5copy3();
	this.instance_13.setTransform(-255.55,138.4,1.0434,1.0434,150.0013,0,0,1.5,1.3);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).wait(337));

	// Layer_4 copy 4
	this.instance_14 = new lib.Symbol5copy3();
	this.instance_14.setTransform(-237.5,160.2,1.8461,1.8461,150.0007,0,0,1.4,1.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(8).to({_off:false},0).wait(334));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.2,-50.2,360.5,215.7);


// stage content:
(lib.MultiBank_300x250 = function(mode,startPosition,loop,reversed) {
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

	// t2
	this.instance = new lib.Symbol17();
	this.instance.setTransform(153.75,128.85,0.8691,0.8678,0,0,0,119.7,18.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(225).to({_off:false},0).wait(217));

	// text1
	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(150,125.8,1,1,0,0,0,90.9,15.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(58).to({_off:false},0).to({alpha:1},17).wait(135).to({alpha:0},15).to({_off:true},1).wait(216));

	// legat
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(150.05,227.9,0.7676,0.7676,0,0,0,163.5,30.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({_off:false},0).to({alpha:1},21).wait(326));

	// cta
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(152.25,182.95,0.3934,0.3934,0,0,0,180,41.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75).to({_off:false},0).to({alpha:1},20).wait(347));

	// in gold
	this.instance_4 = new lib.Symbol10();
	this.instance_4.setTransform(151.15,76.9,1.0412,1.04,0,0,0,106.1,31.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(433));

	// logo
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(148.95,19.3,0.1448,0.144,0,0,0,507.3,60.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({alpha:1},12).wait(427));

	// sparks
	this.instance_6 = new lib.Symbol7();
	this.instance_6.setTransform(248.85,39.85,1,1,0,0,0,1.3,1.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).wait(427).to({alpha:0},11).wait(1));

	// bg
	this.instance_7 = new lib.Symbol21();
	this.instance_7.setTransform(143.5,125,1,1,0,0,0,168.5,125);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},12).wait(430));

	// blackbg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(442));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(125,125,187,125);
// library properties:
lib.properties = {
	id: '4C67F3A136A92E4E81338A9018FE5B2A',
	width: 300,
	height: 250,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/CTA.png?1626166578305", id:"CTA"},
		{src:"images/left.png?1626166578305", id:"left"},
		{src:"images/right.png?1626166578305", id:"right"}
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