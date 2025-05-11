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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBFIg0hkIgvBkIgDAAIg8hzQgFgJgGgEQgGgEgLAAIgEAAIAAgFIBiAAIAAAFIgFAAQgGAAgDACQgDACgBADIAAABIAjBEIAYgyIgFgJIgCgEQgEgHgEgCQgDgDgMgBIAAgFIBbAAIAAAFIgFAAIgKAAQgDAAAAAEQAAADADAGIAgA/IAQghQADgKABgHQgBgKgFgHQgHgIgLgBIAAgFIBGAAIAAAFQgNAAgLAKQgLAKgIATIgrBdgAgmA+IAEgJIgIAAgAiMA+IAEgJIgJAAgAgsAyIAMAAIADgJIgUAAgAiSAyIALAAIAFgJIgUAAgAgyAmIAXAAIADgGIgBgDIgeAAgAiZAmIAYAAIADgGIgCgDIgdAAgAg5AaIAeAAIgEgJIgeAAgAieAaIAcAAIgEgJIgdAAgAg/AOIAeAAIgFgJIgdAAgAilAOIAdAAIgEgJIgdAAgAhFACIAeAAIgFgIIgdAAgAirACIAeAAIgFgIIgdAAgAhLgJIAdAAIgEgJIgdAAgAixgJIAdAAIgEgJIgeAAgAhRgVIAeAAIgFgJIgdAAgAi4gVIAeAAIgEgJIgeAAgAhXghIAdAAIgEgJIgeAAgAi+ghIAeAAIgFgJIgdAAgAAGgvIABADIABAEIAIgOIgNAAIADAHgAhfgxIABAEIAeAAIgBgDIgCgGIggAAIAEAFgAjDgtIAdAAIgBgDIgCgGIggAAgAAAg5IATAAIAEgGIgdAAgAhmg7IABACIAiAAQAAgDACgDIgsAAIAHAEgAjLg5IAiAAQAAgDACgDIgsAAgABCBAIAAgEIAHAAQAPAAAEgFQADgDAAgOIAAhPQAAgNgEgEQgEgFgOAAIgHAAIAAgFICmAAIAAAwIgEAAQgLgOgHgIQgKgKgLgFQgMgGgOAAIgVAAIAAA4IAGAAQAMAAAIgGQAJgFAHgMIAFAAIAAAyIgFAAQgFgIgDgEQgNgKgPAAIgGAAIAAA+IAQAAQATAAATgMQANgIAMgNIAIgMIAFAAIAAAxgAC3A8IAlAAIAAgIIgWAAgABgA5IgCADIAhAAIAAgHIgdAAIgCAEgABkAuIAAAEIAbAAIAAgJIgaAAIgBAFgADPAtIgFAEIASAAIAAgQIgNAMgABlAmIAaAAIAAgJIgaAAgABlAaIAaAAIAAgJIgaAAgABlAOIAaAAIAAgJIgaAAgACyAGIAAgJIgOAAgABlACIAaAAIAAgIIgaAAgACrgLIgGAFIANAAIAAgKIgHAFgABlgJIAaAAIAAgJIgaAAgABlgVIAaAAIAAgJIgaAAgABlghIAaAAIAAgJIgaAAgADRguIAKAJIAAgPIgRAAIAHAGgABlgtIAaAAIAAgJIgbAAgADGg4IAVAAIAAgHIghAAgABig5IAdAAIAAgGIghAAIAEAGg");
	this.shape.setTransform(23.4,6.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,46.8,13.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(78.925,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,157.9,10.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(40.825,7.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,81.7,14.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AB+BFIh5hwIAABDQAAAkAeAAIAAAEIhDAAIAAgEQAgAAAAgkIAAhHIgLgKQgGgEgHgCIgGAAIAAgFIBLAAIBPBJIAAggQAAgkgeAAIAAgFIBEAAIAAAFQgSAAgIAMQgGAIAAAQIAABggAB9A+IAAgJIgKAAgAgMA8IATAAIgEgFIgKAAgAgDA0IAFAAIgBgEIgBgEgABwAyIANAAIAAgIIgWAAgABjAmIAaAAIAAgJIgjAAgABWAaIAmAAIgJgJIgmAAgABJAOIAmAAIgJgIIgmAAgAA8ACIAmAAIgJgIIgmAAgAAwgJIAmAAIgKgJIgmAAgAAjgVIAmAAIgKgIIgmAAgAAWghIAmAAIgKgJIgmAAgAAJgtIAmAAIgJgJIgmAAgAB9gwIACgHIgGAAgAgJg9IAFAEIAmAAIgHgGIgpAAIAFACgAB2g7IALAAIADgEIgUAAgAihBAIAAgEIAGAAQAQAAAEgFQADgDAAgPIAAhOQAAgOgFgEQgFgEgNAAIgGAAIAAgFIBpAAIAAAFIgGAAQgNAAgEADQgGAEAAAPIAABOQAAAPAFAEQADAEAKAAIAFAAIAGAAIAAAEgAiEA7IgCABIAmAAIgEgHIgdAAIgDAGgAh/AtIgBAFIAcAAIAAgIIgbAAIAAADgAh/AmIAbAAIAAgJIgbAAgAh/AaIAbAAIAAgJIgbAAgAh/AOIAbAAIAAgIIgbAAgAh/ACIAbAAIAAgIIgbAAgAh/gJIAbAAIAAgJIgbAAgAh/gVIAbAAIAAgIIgbAAgAh/ghIAbAAIAAgJIgbAAgAh/gtIAbAAIAAgJIgcAAgAiBg5IAdAAIABgCIADgEIgmAAIAFAGg");
	this.shape.setTransform(16.225,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,32.5,13.8), null);


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
	this.instance.setTransform(283,427,1,1,90);

	this.instance_1 = new lib.left();
	this.instance_1.setTransform(294.6,-41,1,1,99.2204);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(27.4,-81,267.20000000000005,636), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgtA1IAAhpIAlAAQAKAAAIACQAJADAGAEQAGAFAEAFQAFAGACAFIADAMIABAKQAAAKgDAKQgEAJgHAIQgIAHgLAEQgLAFgNAAgAgfAnIASAAQAJABAHgDQAJgDAGgEQAGgFAEgHQADgIAAgKQAAgEgCgHQgBgHgFgGQgEgGgIgEQgJgFgLAAIgWAAg");
	this.shape.setTransform(75.775,51.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAxQgIgGgCgMIAOgDQABAGAEAEQAEADAGAAQAEAAADgCQAEgCACgEIACgHIABgJIAAhGIAOAAIAABKQAAALgDAGQgDAGgFAEQgFAEgFABIgJABQgLAAgIgFg");
	this.shape_1.setTransform(65.875,51.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGA1IAAhpIANAAIAABpg");
	this.shape_2.setTransform(60.675,51.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaA1IgahWIAAAAIgZBWIgOAAIgghpIAPAAIAXBTIABAAIAZhTIAQAAIAZBTIAAAAIAXhTIAPAAIgeBpg");
	this.shape_3.setTransform(51.35,51.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtA1IAAhpIAlAAQAKAAAIACQAJADAGAEQAGAFAEAFQAFAGACAFIADAMIABAKQAAAKgDAKQgEAJgHAIQgIAHgLAEQgLAFgNAAgAgfAnIASAAQAJABAHgDQAJgDAGgEQAGgFAEgHQADgIAAgKQAAgEgCgHQgBgHgFgGQgEgGgIgEQgJgFgLAAIgWAAg");
	this.shape_4.setTransform(38.825,51.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfA1IAAhpIAPAAIAABbIAwAAIAAAOg");
	this.shape_5.setTransform(29.775,51.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjA1IAAhpIBEAAIAAANIg1AAIAAAgIAxAAIAAAMIgxAAIAAAiIA4AAIAAAOg");
	this.shape_6.setTransform(21.025,51.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUA1IgagvIgQAAIAAAvIgPAAIAAhpIAlAAQAKAAAGACQAHAEAEAEQAEAEABAFIACAKQAAAFgCAFQgCAFgDAEIgIAGQgFACgGAAIAeAxgAgWgGIATAAIAHAAQAEgBADgBQAEgCABgEQACgDAAgGQAAgFgCgEQgBgCgEgCQgDgDgEAAIgHgBIgTAAg");
	this.shape_7.setTransform(12.075,51.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjA1IAAhpIBEAAIAAANIg1AAIAAAgIAxAAIAAAMIgxAAIAAAiIA4AAIAAAOg");
	this.shape_8.setTransform(2.725,51.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAaA1IgZhWIgBAAIgYBWIgQAAIgfhpIAPAAIAYBTIAAAAIAZhTIAPAAIAZBTIABAAIAXhTIAPAAIgfBpg");
	this.shape_9.setTransform(-9.45,51.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtA1IAAhpIAlAAQAKAAAIACQAJADAGAEQAGAFAEAFQAFAGACAFIADAMIABAKQAAAKgDAKQgEAJgHAIQgIAHgLAFQgLAEgNAAgAgfAnIASAAQAJAAAHgCQAJgDAGgEQAGgFAEgHQADgIAAgKQAAgEgCgHQgBgHgFgGQgEgGgIgEQgJgFgLAAIgWAAg");
	this.shape_10.setTransform(80.725,31.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUA1IgagvIgQAAIAAAvIgPAAIAAhpIAlAAQAKAAAGACQAHADAEAFQAEAEABAFIACAKQAAAFgCAFQgCAFgDAEIgIAGQgFACgGAAIAeAxgAgWgFIATAAIAHgBQAEgBADgBQAEgDABgDQACgDAAgGQAAgFgCgDQgBgDgEgDQgDgBgEgBIgHgBIgTAAg");
	this.shape_11.setTransform(70.925,31.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjA1IAAhpIBEAAIAAANIg1AAIAAAgIAxAAIAAAMIgxAAIAAAiIA4AAIAAAOg");
	this.shape_12.setTransform(61.575,31.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjA1IAAhpIBEAAIAAANIg1AAIAAAgIAxAAIAAAMIgxAAIAAAiIA4AAIAAAOg");
	this.shape_13.setTransform(52.425,31.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfA1IAAhpIAPAAIAABbIAwAAIAAAOg");
	this.shape_14.setTransform(44.225,31.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAzQgIgDgFgFQgGgGgDgHQgDgIAAgJIAAhCIAOAAIAABAIACAKQABAFADAFQADAEAFADQAGADAGAAQAIAAAFgDQAFgDADgEQADgFABgFIACgKIAAhAIAOAAIAABCQAAAJgDAIQgDAHgGAGQgFAFgIADQgHADgJAAQgIAAgHgDg");
	this.shape_15.setTransform(34.425,31.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAzQgMgEgGgIQgIgHgDgKQgFgLAAgLQAAgLAFgKQAEgKAHgIQAHgHALgEQAKgFALAAQAOAAAKAEQAJAEAHAGIgKALQgHgGgIgDQgHgCgIAAQgJAAgGADQgIAEgFAFQgGAGgDAIQgCAHAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAIAAIAOgBQAIgBAEgDIAAgeIgXAAIAAgMIAlAAIAAAzIgIAEIgKADIgLACIgKABQgNAAgKgFg");
	this.shape_16.setTransform(23.05,31.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgjA1IAAhpIBEAAIAAANIg1AAIAAAgIAxAAIAAAMIgxAAIAAAiIA4AAIAAAOg");
	this.shape_17.setTransform(13.275,31.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAUA1IgagvIgQAAIAAAvIgPAAIAAhpIAlAAQAKAAAGACQAHADAEAFQAEAEABAFIACAKQAAAFgCAFQgCAFgDAEIgIAGQgFACgGAAIAeAxgAgWgFIATAAIAHgBQAEgBADgBQAEgDABgDQACgDAAgGQAAgFgCgDQgBgDgEgDQgDgBgEgBIgHgBIgTAAg");
	this.shape_18.setTransform(4.325,31.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgjA1IAAhpIBEAAIAAANIg1AAIAAAgIAxAAIAAAMIgxAAIAAAiIA4AAIAAAOg");
	this.shape_19.setTransform(-5.025,31.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPAzQgKgEgIgIQgHgHgEgKQgDgLAAgLQAAgLADgKQAFgKAHgIQAIgHAJgEQALgFALAAQAPAAAJAEQAJAEAGAGIgKALQgGgGgHgDQgIgCgIAAQgIAAgIADQgHAEgFAFQgFAGgDAIQgDAHAAAIQAAAJADAIQADAIAGAFQAFAGAHADQAIADAIAAIAPgBQAGgBAFgDIAAgeIgYAAIAAgMIAnAAIAAAzIgJAEIgLADIgLACIgKABQgMAAgLgFg");
	this.shape_20.setTransform(-16.05,31.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAzQgLgEgHgIQgHgHgEgKQgDgLAAgLQAAgLADgKQAFgKAHgIQAHgHAKgEQAKgFAMAAQAOAAAKAEQAJAEAGAGIgKALQgHgGgHgDQgHgCgIAAQgIAAgHADQgIAEgFAFQgFAGgDAIQgDAHAAAIQAAAJADAIQADAIAGAFQAFAGAHADQAIADAIAAIAOgBQAIgBAEgDIAAgeIgYAAIAAgMIAmAAIAAAzIgJAEIgKADIgLACIgJABQgNAAgLgFg");
	this.shape_21.setTransform(62.95,11.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGA1IAAhpIANAAIAABpg");
	this.shape_22.setTransform(55.325,11.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgtA1IAAhpIAlAAQAKAAAIADQAJACAGAEQAGAEAEAGQAFAGACAFIADAMIABAKQAAAKgDAKQgEAJgHAIQgIAHgLAFQgLAEgNAAgAgfAoIASAAQAJgBAHgCQAJgDAGgEQAGgGAEgHQADgHAAgKQAAgEgCgHQgBgHgFgGQgEgGgIgEQgJgFgLAAIgWAAg");
	this.shape_23.setTransform(47.925,11.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgjA1IAAhpIBEAAIAAANIg1AAIAAAgIAxAAIAAAMIgxAAIAAAjIA4AAIAAANg");
	this.shape_24.setTransform(37.925,11.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfA1IAAhpIAPAAIAABcIAwAAIAAANg");
	this.shape_25.setTransform(29.725,11.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgfA1IAAhpIAPAAIAABcIAwAAIAAANg");
	this.shape_26.setTransform(21.925,11.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgVA0QgLgFgHgHQgHgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAHgIQAHgHALgEQAKgFALAAQAMAAAKAFQAKAEAIAHQAHAIAEAKQAFAKAAALQAAAMgFAKQgEAKgHAIQgIAHgKAFQgKAEgMAAQgLAAgKgEgAgPgmQgIAEgFAFQgGAGgDAIQgCAHAAAIQAAAJACAIQADAHAGAGQAFAGAIADQAGADAJAAQAJAAAHgDQAIgDAFgGQAGgGACgHQADgIAAgJQAAgIgDgHQgCgIgGgGQgFgFgIgEQgHgDgJAAQgJAAgGADg");
	this.shape_27.setTransform(11.15,11.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGA1IgphpIAQAAIAfBVIAghVIAQAAIgqBpg");
	this.shape_28.setTransform(0.175,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-23.6,0,111.80000000000001,63.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AApA1IAAhWIgBAAIgkBWIgIAAIgkhWIAAAAIAABWIgPAAIAAhpIAWAAIAhBPIABAAIAhhPIAWAAIAABpg");
	this.shape.setTransform(58.15,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWA0QgKgFgHgHQgHgIgEgKQgEgKgBgMQABgLAEgKQAEgKAHgIQAHgHAKgEQALgFALAAQAMAAAKAFQAKAEAHAHQAIAIAEAKQAEAKABALQgBAMgEAKQgEAKgIAIQgHAHgKAFQgKAEgMAAQgLAAgLgEgAgPgmQgIAEgFAFQgGAGgDAIQgCAHAAAIQAAAJACAIQADAHAGAGQAFAGAIADQAGADAJAAQAJAAAHgDQAIgDAFgGQAGgGACgHQADgIAAgJQAAgIgDgHQgCgIgGgGQgFgFgIgEQgHgDgJAAQgJAAgGADg");
	this.shape_1.setTransform(45.1,31.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWA0QgKgFgHgHQgHgIgFgKQgDgKAAgMQAAgLADgKQAFgKAHgIQAHgHAKgEQAKgFAMAAQAMAAAKAFQAKAEAHAHQAIAIAEAKQAEAKABALQgBAMgEAKQgEAKgIAIQgHAHgKAFQgKAEgMAAQgMAAgKgEgAgPgmQgIAEgFAFQgFAGgDAIQgDAHAAAIQAAAJADAIQADAHAFAGQAFAGAIADQAHADAIAAQAJAAAIgDQAHgDAFgGQAGgGACgHQADgIAAgJQAAgIgDgHQgCgIgGgGQgFgFgHgEQgIgDgJAAQgIAAgHADg");
	this.shape_2.setTransform(32.6,31.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkA1IAAhpIAkAAQAHAAAGACQAGABAEADQAFAEACAEQACAGAAAHQAAAIgFAGQgFAGgIADQAFAAAEACQAEABAEAEQADAEABAEQACAFAAAFQAAAIgDAFQgDAGgFAEQgFADgHACQgGACgIAAgAgVAoIAUAAIAHgBQAEAAAEgCQADgCACgEQACgDABgGQAAgJgHgFQgFgEgKAAIgVAAgAgVgIIATAAIAHgBIAGgDQADgBABgDQACgEAAgEQAAgHgEgEQgEgEgJgBIgVAAg");
	this.shape_3.setTransform(21.95,31.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghA1IAAhpIBDAAIAAANIg0AAIAAAiIAwAAIAAAMIgwAAIAAAug");
	this.shape_4.setTransform(13,31.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjA1IAAhpIBEAAIAAANIg1AAIAAAgIAxAAIAAAMIgxAAIAAAiIA4AAIAAAOg");
	this.shape_5.setTransform(4.075,31.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbA1IAAgxIg2AAIAAAxIgOAAIAAhpIAOAAIAAAsIA2AAIAAgsIAPAAIAABpg");
	this.shape_6.setTransform(-6.4,31.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAxQgHgFgFgIQgEgJgBgJIgCgSIABgMIACgLIAEgNQADgFAEgEQAEgEAGgCQAGgDAGAAQAHAAAGADQAGACAEAEQAEAEADAFIAEANIACALIABAMIgCASQgBAJgEAJQgFAIgHAFQgHAGgLAAQgKAAgHgGgAgIgnQgDABgDAFIgEAHIgCAKIgBAJIAAAHIAAANIADANQADAHAEAFQAFAEAGAAQAHAAAFgEQAEgFADgHIADgNIAAgNIAAgHIgBgJIgCgKIgEgHQgDgFgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_7.setTransform(58.025,11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAxQgHgFgFgIQgEgJgBgJIgCgSIABgMIACgLIAEgNQADgFAEgEQAEgEAGgCQAGgDAGAAQAHAAAGADQAGACAEAEQAEAEADAFIAEANIACALIABAMIgCASQgBAJgEAJQgFAIgHAFQgHAGgLAAQgKAAgHgGgAgIgnQgDABgDAFIgEAHIgCAKIgBAJIAAAHIAAANIADANQADAHAEAFQAFAEAGAAQAHAAAFgEQAEgFADgHIADgNIAAgNIAAgHIgBgJIgCgKIgEgHQgDgFgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_8.setTransform(49.675,11.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAwQgJgFgEgLIAPgEQADAHAFADQAEADAHAAIAIgBIAGgEIAFgHQABgFAAgEQAAgMgHgGQgHgFgKAAIgLABQgGACgFACIABg3IA4AAIAAANIgqAAIgBAbIADgBIAEgBIAEAAIADAAQAHgBAGADQAGADAFAFQAEAEACAFQADAHAAAIQAAAHgDAHQgDAHgFAEQgFAFgHACQgHADgHAAQgKAAgJgGg");
	this.shape_9.setTransform(41.125,11.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGAiQgDgEAAgDQAAgEADgEQADgCADAAQAEAAADACQADAEAAAEQAAADgDAEQgDACgEABQgDgBgDgCgAgGgSQgDgDAAgEQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_10.setTransform(35.1,13.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAHA1IAAhZIgTASIgIgKIAcgYIANAAIAABpg");
	this.shape_11.setTransform(28.025,11.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGA1IAAhcIgiAAIAAgNIBRAAIAAANIgiAAIAABcg");
	this.shape_12.setTransform(16.2,11.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVA0QgKgFgIgHQgHgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAHgIQAIgHAKgEQAKgFALAAQAMAAAKAFQAKAEAIAHQAHAIAEAKQAFAKgBALQABAMgFAKQgEAKgHAIQgIAHgKAFQgKAEgMAAQgLAAgKgEgAgQgmQgHAEgFAFQgGAGgDAIQgCAHAAAIQAAAJACAIQADAHAGAGQAFAGAHADQAIADAIAAQAJAAAHgDQAIgDAFgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgGQgFgFgIgEQgHgDgJAAQgIAAgIADg");
	this.shape_13.setTransform(5.65,11.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGA1IAAhcIgjAAIAAgNIBTAAIAAANIgjAAIAABcg");
	this.shape_14.setTransform(-4.9,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-14,0,81.1,43.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAcA1Ig6hWIgBAAIAABWIgOAAIAAhpIATAAIA5BWIABAAIAAhWIAOAAIAABpg");
	this.shape.setTransform(130.375,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjA1IAAhpIBEAAIAAANIg1AAIAAAgIAxAAIAAAMIgxAAIAAAiIA4AAIAAAOg");
	this.shape_1.setTransform(120.175,31.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUA0QgJgDgFgIIAMgKQADAGAGADQAHACAGAAIAGgBIAHgDIAFgGQACgDAAgEQAAgGgEgEQgEgDgFgCIgMgEQgHgCgGgEQgFgCgEgHQgEgGAAgKQAAgFACgFQACgFAEgEQAFgFAGgDQAHgDAJAAQAJAAAHADQAIACAGAHIgLALQgDgEgFgDQgFgCgGAAQgFAAgEABQgEACgDACIgDAGIgBAFQAAAHAEADQAEAEAGACIALAEIANAFQAGADAEAFQADAGAAAJQAAAIgCAGQgDAGgFAEQgFAEgHADQgHACgGAAQgLAAgJgEg");
	this.shape_2.setTransform(110.925,31.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtA1IAAhpIAlAAQAKAAAIACQAJADAGAEQAGAFAEAFQAFAGACAFIADAMIABAKQAAAKgDAKQgEAJgHAIQgIAHgLAFQgLAEgNAAgAgfAnIASAAQAJAAAHgCQAJgDAGgEQAGgFAEgHQADgIAAgKQAAgEgCgHQgBgHgFgGQgEgGgIgEQgJgFgLAAIgWAAg");
	this.shape_3.setTransform(101.575,31.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcA1Ig6hWIgBAAIAABWIgOAAIAAhpIATAAIA5BWIABAAIAAhWIAOAAIAABpg");
	this.shape_4.setTransform(89.825,31.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWA0QgKgFgHgHQgHgIgFgKQgDgKAAgMQAAgLADgKQAFgKAHgIQAHgHAKgEQAKgFAMAAQAMAAAKAFQAKAEAHAHQAIAIAEAKQAEAKABALQgBAMgEAKQgEAKgIAIQgHAHgKAFQgKAEgMAAQgMAAgKgEgAgPgmQgIAEgFAFQgFAGgDAIQgDAHAAAIQAAAJADAIQADAHAFAGQAFAGAIADQAHADAIAAQAJAAAIgDQAHgDAFgGQAGgGACgHQADgIAAgJQAAgIgDgHQgCgIgGgGQgFgFgHgEQgIgDgJAAQgIAAgHADg");
	this.shape_5.setTransform(77.6,31.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghA1IAAhpIBDAAIAAANIg0AAIAAAiIAwAAIAAAMIgwAAIAAAug");
	this.shape_6.setTransform(67.45,31.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAcA1Ig6hWIgBAAIAABWIgOAAIAAhpIATAAIA5BWIABAAIAAhWIAOAAIAABpg");
	this.shape_7.setTransform(52.625,31.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAkA1IgLgaIgxAAIgLAaIgRAAIAvhpIAMAAIAuBpgAgTAOIAnAAIgUgvIAAAAg");
	this.shape_8.setTransform(41.375,31.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGA1IgphpIAQAAIAfBVIAghVIAQAAIgqBpg");
	this.shape_9.setTransform(31.375,31.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjA1IAAhpIBEAAIAAANIg1AAIAAAgIAxAAIAAAMIgxAAIAAAiIA4AAIAAAOg");
	this.shape_10.setTransform(18.275,31.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AApA1IAAhWIAAAAIgkBWIgJAAIgjhWIgBAAIAABWIgPAAIAAhpIAWAAIAhBPIAAAAIAihPIAVAAIAABpg");
	this.shape_11.setTransform(6.55,31.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAkA1IgLgaIgxAAIgLAaIgRAAIAvhpIAMAAIAuBpgAgTAOIAnAAIgUgvIAAAAg");
	this.shape_12.setTransform(-5.525,31.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcA1Ig6hWIgBAAIAABWIgOAAIAAhpIATAAIA5BWIABAAIAAhWIAOAAIAABpg");
	this.shape_13.setTransform(-16.775,31.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjA1IAAhpIAlAAQAKAAAGACQAHADAEAFQAEAEABAFIACAKIgCALQgBAFgEAEQgEAEgGADQgHACgKAAIgWAAIAAAvgAgUgFIATAAIAHgBQAEgBADgBQAEgDABgDQACgDAAgGQAAgFgCgDQgBgDgEgDQgDgBgEgBIgHgBIgTAAg");
	this.shape_14.setTransform(-26.675,31.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWA0QgJgFgIgHQgHgIgFgKQgDgKAAgMQAAgLADgKQAFgKAHgIQAIgHAJgEQALgFALAAQAMAAAKAFQALAEAGAHQAIAIAEAKQAEAKAAALQAAAMgEAKQgEAKgIAIQgGAHgLAFQgKAEgMAAQgLAAgLgEgAgQgmQgHAEgFAFQgFAGgDAIQgDAHAAAIQAAAJADAIQADAHAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgGQgFgFgHgEQgIgDgJAAQgIAAgIADg");
	this.shape_15.setTransform(-37.85,31.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjA1IAAhpIBEAAIAAANIg1AAIAAAgIAxAAIAAAMIgxAAIAAAjIA4AAIAAANg");
	this.shape_16.setTransform(101.625,11.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAWA1Igxg1IgBAAIAAA1IgOAAIAAhpIAOAAIAAAuIABAAIAuguIAUAAIgyAxIA2A4g");
	this.shape_17.setTransform(92.675,11.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTAxQgIgGgCgMIAOgDQABAGAEAEQAEADAGAAQAEAAADgCQAEgCACgEIACgHIABgJIAAhGIAOAAIAABKQAAALgDAGQgDAGgFAEQgFAEgFABIgJABQgLAAgIgFg");
	this.shape_18.setTransform(82.875,11.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGA1IAAhpIANAAIAABpg");
	this.shape_19.setTransform(77.675,11.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgfA1IAAhpIAPAAIAABcIAwAAIAAANg");
	this.shape_20.setTransform(72.325,11.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgfA1IAAhpIAPAAIAABcIAwAAIAAANg");
	this.shape_21.setTransform(64.525,11.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgjA1IAAhpIBEAAIAAANIg1AAIAAAgIAxAAIAAAMIgxAAIAAAjIA4AAIAAANg");
	this.shape_22.setTransform(55.775,11.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgtA1IAAhpIAlAAQAKAAAIADQAJACAGAEQAGAEAEAGQAFAGACAFIADAMIABAKQAAAKgDAKQgEAJgHAIQgIAHgLAFQgLAEgNAAgAgfAoIASAAQAJgBAHgCQAJgDAGgEQAGgGAEgHQADgHAAgKQAAgEgCgHQgBgHgFgGQgEgGgIgEQgJgFgLAAIgWAAg");
	this.shape_23.setTransform(45.525,11.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgtA1IAAhpIAlAAQAKAAAIADQAJACAGAEQAGAEAEAGQAFAGACAFIADAMIABAKQAAAKgDAKQgEAJgHAIQgIAHgLAFQgLAEgNAAgAgfAoIASAAQAJgBAHgCQAJgDAGgEQAGgGAEgHQADgHAAgKQAAgEgCgHQgBgHgFgGQgEgGgIgEQgJgFgLAAIgWAAg");
	this.shape_24.setTransform(34.425,11.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgGA1IAAhpIANAAIAABpg");
	this.shape_25.setTransform(26.575,11.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AApA1IAAhWIAAAAIgkBWIgJAAIgjhWIgBAAIAABWIgPAAIAAhpIAWAAIAhBPIAAAAIAihPIAVAAIAABpg");
	this.shape_26.setTransform(17.7,11.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAcA1Ig6hWIgBAAIAABWIgOAAIAAhpIATAAIA5BWIABAAIAAhWIAOAAIAABpg");
	this.shape_27.setTransform(4.925,11.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVA0QgLgFgHgHQgHgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAHgIQAHgHALgEQAKgFALAAQAMAAAKAFQAKAEAIAHQAHAIAEAKQAFAKAAALQAAAMgFAKQgEAKgHAIQgIAHgKAFQgKAEgMAAQgLAAgKgEgAgPgmQgIAEgFAFQgGAGgDAIQgCAHAAAIQAAAJACAIQADAHAGAGQAFAGAIADQAGADAJAAQAJAAAHgDQAIgDAFgGQAGgGACgHQADgIAAgJQAAgIgDgHQgCgIgGgGQgFgFgIgEQgHgDgJAAQgJAAgGADg");
	this.shape_28.setTransform(-7.3,11.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-46.1,0,184.6,43.8), null);


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
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,-0.2,0,0,-0.2,37.9).s().p("AgVNGIAA6LIArAAIAAaLg");
	this.shape.setTransform(1.1159,17.475,0.6364,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-0.3,-66.3,2.9,167.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AglA5IAAhxIAnAAQAKAAAIADQAHADAEAFQAEAFACAFIABALIgBALQgCAGgEAEQgEAEgHADQgIADgKAAIgYAAIAAAygAgWgGIAVAAIAIAAIAHgDQADgCADgEQACgDAAgGQAAgGgCgDIgGgGQgDgCgEAAIgIgBIgVAAg");
	this.shape.setTransform(93.45,75.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQA3QgIgDgGgGQgGgGgDgIQgEgIAAgKIAAhHIAQAAIAABEIABALQACAGADAFQADAFAGADQAFADAHAAQAIAAAGgDQAFgDADgFQAEgFABgGIACgLIAAhEIAPAAIAABHQAAAKgDAIQgEAIgGAGQgGAGgIADQgIADgJAAQgIAAgIgDg");
	this.shape_1.setTransform(82.575,76.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXA3QgLgEgHgJQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAHgJALgEQALgFAMABQANgBALAFQALAEAHAJQAJAHAEAMQAEAKAAAMQAAAMgEALQgEALgJAIQgHAJgLAEQgLAEgNABQgMgBgLgEgAgQgoQgJADgFAGQgGAGgDAIQgCAIAAAJQAAAJACAIQADAIAGAHQAFAGAJADQAHAEAJAAQAKAAAIgEQAHgDAGgGQAFgHAEgIQADgIAAgJQAAgJgDgIQgEgIgFgGQgGgGgHgDQgIgFgKAAQgJAAgHAFg");
	this.shape_2.setTransform(70.3,75.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVA5IgcgyIgRAAIAAAyIgPAAIAAhxIAnAAQAKAAAIADQAHADAEAFQAEAFABAFIACALQAAAGgCAFQgCAFgDAEIgJAGQgGACgGABIAgA0gAgYgGIAUAAIAIAAIAIgDQADgCADgEQACgDAAgGQAAgGgCgDIgGgGQgDgCgFAAIgIgBIgUAAg");
	this.shape_3.setTransform(59.325,75.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQA2QgLgEgIgJQgIgIgEgKQgEgLAAgMQAAgMAFgKQAEgMAIgHQAIgJAKgEQALgFAMABQAQgBAKAEQAKAEAHAHIgLAMQgHgHgIgCQgIgEgJAAQgIAAgIAFQgIADgGAGQgFAGgDAIQgDAIAAAJQAAAKADAIQADAIAGAGQAGAGAIADQAIAEAJAAQAIAAAHgCQAHgBAFgDIAAggIgZAAIAAgNIApAAIAAA3IgKAEIgLAEIgLACIgLABQgNAAgMgGg");
	this.shape_4.setTransform(47.325,75.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYA5Ig1g5IAAAAIAAA5IgQAAIAAhxIAQAAIAAAxIAAAAIAygxIAVAAIg1A1IA5A8g");
	this.shape_5.setTransform(130.3,54.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeA5Ig/hcIAABcIgPAAIAAhxIAUAAIA9BdIABAAIAAhdIAPAAIAABxg");
	this.shape_6.setTransform(117.875,54.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAmA5IgLgcIg1AAIgLAcIgSAAIAyhxIANAAIAwBxgAgVAPIAqAAIgVgzIAAAAg");
	this.shape_7.setTransform(105.875,54.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmA5IAAhxIAmAAQAHAAAHACQAGACAFADQAEAEADAFQADAGAAAHQgBAKgFAGQgGAGgIADIAAAAQAFAAAFACQAEACADAEQADAEACAEQACAFABAGQAAAIgEAGQgDAGgGAEQgFAEgHACQgHACgIAAgAgXArIAXAAIAGAAIAIgDQAEgCACgEQADgEAAgGQAAgKgHgFQgGgFgKAAIgXAAgAgXgIIAVAAIAHgBIAHgDIAEgGQACgDAAgEQAAgHgEgFQgFgFgJAAIgXAAg");
	this.shape_8.setTransform(95.55,54.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHA5IAAhxIAPAAIAABxg");
	this.shape_9.setTransform(87.925,54.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHA5IAAhiIgkAAIAAgPIBXAAIAAAPIgkAAIAABig");
	this.shape_10.setTransform(81.075,54.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghA5IAAhxIAQAAIAABiIAzAAIAAAPg");
	this.shape_11.setTransform(73.025,54.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQA3QgIgDgGgGQgGgGgDgIQgEgIAAgKIAAhHIAQAAIAABEQAAAGABAFQACAGADAFQADAFAGADQAFADAHAAQAIAAAGgDQAFgDADgFQAEgFABgGIACgLIAAhEIAPAAIAABHQAAAKgDAIQgEAIgGAGQgGAGgIADQgIADgJAAQgIAAgIgDg");
	this.shape_12.setTransform(62.575,54.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAsA5IAAhcIgnBcIgJAAIgmhcIAABcIgQAAIAAhxIAXAAIAjBVIABAAIAjhVIAXAAIAABxg");
	this.shape_13.setTransform(49.7,54.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHA5IAAhiIgkAAIAAgPIBXAAIAAAPIgkAAIAABig");
	this.shape_14.setTransform(33.375,54.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AglA5IAAhxIBIAAIAAAPIg5AAIAAAiIA1AAIAAANIg1AAIAAAkIA8AAIAAAPg");
	this.shape_15.setTransform(24.25,54.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAsA5IAAhcIgnBcIgJAAIgnhcIAABcIgPAAIAAhxIAXAAIAjBVIAAAAIAkhVIAXAAIAABxg");
	this.shape_16.setTransform(11.75,54.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghA5IAAhxIAQAAIAABiIAzAAIAAAPg");
	this.shape_17.setTransform(152.725,33.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglA5IAAhxIBIAAIAAAPIg4AAIAAAiIA0AAIAAANIg0AAIAAAkIA7AAIAAAPg");
	this.shape_18.setTransform(143.35,33.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgxA5IAAhxIAoAAQALAAAJADQAJADAHAEQAHAFAEAGQAFAGACAGQACAGABAHIABAKQAAALgDAKQgFAKgIAIQgHAIgMAFQgMAFgOAAgAghAqIATAAQAKAAAHgCQAKgDAGgFQAHgFAEgIQADgIAAgLQAAgEgCgIQgBgHgFgGQgFgHgIgFQgKgEgMAAIgXAAg");
	this.shape_19.setTransform(132.4,33.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAeA5Ig/hcIAABcIgPAAIAAhxIAUAAIA9BdIABAAIAAhdIAPAAIAABxg");
	this.shape_20.setTransform(119.875,33.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAmA5IgLgcIg1AAIgLAcIgSAAIAyhxIANAAIAwBxgAgVAPIAqAAIgVgzIAAAAg");
	this.shape_21.setTransform(107.875,33.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAdA5IAAg0Ig5AAIAAA0IgQAAIAAhxIAQAAIAAAwIA5AAIAAgwIAQAAIAABxg");
	this.shape_22.setTransform(96.325,33.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAcA5IgchcIgaBcIgRAAIghhxIAQAAIAZBaIAAAAIAbhaIARAAIAbBaIAAAAIAZhaIAQAAIghBxg");
	this.shape_23.setTransform(78.25,33.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgQA3QgIgDgGgGQgGgGgDgIQgEgIAAgKIAAhHIAQAAIAABEIABALQACAGADAFQADAFAGADQAFADAHAAQAIAAAGgDQAFgDADgFQAEgFABgGIACgLIAAhEIAPAAIAABHQAAAKgDAIQgEAIgGAGQgGAGgIADQgIADgJAAQgIAAgIgDg");
	this.shape_24.setTransform(64.925,33.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAeA5Ig/hcIAABcIgPAAIAAhxIAUAAIA9BdIABAAIAAhdIAPAAIAABxg");
	this.shape_25.setTransform(48.475,33.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAmA5IgLgcIg1AAIgLAcIgSAAIAyhxIANAAIAwBxgAgVAPIAqAAIgVgzIAAAAg");
	this.shape_26.setTransform(36.475,33.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAmA5IgLgcIg1AAIgLAcIgSAAIAyhxIANAAIAwBxgAgVAPIAqAAIgVgzIAAAAg");
	this.shape_27.setTransform(25.225,33.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AglA5IAAhxIBIAAIAAAPIg4AAIAAAiIA0AAIAAANIg0AAIAAAkIA7AAIAAAPg");
	this.shape_28.setTransform(10.6,33.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXA3QgKgEgJgJQgHgIgFgKQgEgLAAgNQAAgMAEgKQAFgMAHgHQAJgJAKgEQALgFAMABQANgBALAFQALAEAIAJQAHAHAFAMQAEAKAAAMQAAANgEALQgFAKgHAIQgIAJgLAEQgLAEgNABQgMgBgLgEgAgRgoQgHADgGAGQgFAGgDAIQgEAJAAAIQAAAJAEAIQADAIAFAHQAGAGAHAEQAJADAIAAQAKAAAHgDQAJgEAFgGQAFgHAEgIQADgIAAgJQAAgIgDgJQgEgIgFgGQgFgGgJgDQgHgFgKAAQgIAAgJAFg");
	this.shape_29.setTransform(-1.3,33.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgHA5IAAhiIgkAAIAAgPIBXAAIAAAPIgkAAIAABig");
	this.shape_30.setTransform(-12.575,33.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVA4QgKgEgGgIIANgLQAEAGAHADQAGADAHAAIAHgBIAHgEQADgCACgDQACgEABgFQgBgGgEgEQgEgDgGgCIgNgFQgHgCgGgEQgGgDgEgGQgFgHAAgLQAAgFADgGQACgFAEgFQAFgFAIgDQAHgDAJAAQAJABAJACQAJACAFAJIgMALQgCgFgGgDQgFgCgHAAQgFAAgFACQgEABgCACIgEAGIgBAGQAAAHAEAEQAEAEAHADIAMADQAHADAHADQAGACAEAHQAEAFAAAKQAAAIgEAHQgCAGgGAFQgFAEgHADQgHACgHAAQgMAAgJgDg");
	this.shape_31.setTransform(136.95,12.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAeA5Ig/hcIAABcIgPAAIAAhxIAUAAIA9BdIABAAIAAhdIAPAAIAABxg");
	this.shape_32.setTransform(126.275,12.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAmA5IgLgcIg1AAIgLAcIgSAAIAyhxIANAAIAwBxgAgVAPIAqAAIgVgzIAAAAg");
	this.shape_33.setTransform(114.275,12.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AghA5IAAhxIAQAAIAABiIAzAAIAAAPg");
	this.shape_34.setTransform(105.175,12.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgQA3QgLgFgIgJQgIgHgEgMQgEgKAAgMQAAgMAFgLQAEgKAIgJQAIgIAKgEQALgEAMgBQAQABAKADQAKAEAHAHIgLALQgHgGgIgDQgIgCgJAAQgIAAgIADQgIAEgGAGQgFAGgDAJQgDAIAAAIQAAAKADAIQADAIAGAGQAGAGAIADQAIAEAJAAQAIAAAHgBQAHgCAFgDIAAgfIgZAAIAAgOIApAAIAAA3IgKAFIgLACIgLADIgLAAQgNAAgMgEg");
	this.shape_35.setTransform(93.825,12.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgHA5IAAhiIgkAAIAAgPIBXAAIAAAPIgkAAIAABig");
	this.shape_36.setTransform(78.825,12.325);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAmA5IgLgcIg1AAIgLAcIgSAAIAyhxIANAAIAwBxgAgVAPIAqAAIgVgzIAAAAg");
	this.shape_37.setTransform(68.625,12.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAbA5IgbhcIgaBcIgRAAIghhxIAQAAIAZBaIABAAIAahaIARAAIAbBaIAAAAIAZhaIAQAAIghBxg");
	this.shape_38.setTransform(55.3,12.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgQA3QgLgFgIgJQgIgHgEgMQgEgKAAgMQAAgMAFgLQAEgKAIgJQAIgIAKgEQALgEAMgBQAQABAKADQAKAEAHAHIgLALQgHgGgIgDQgIgCgJAAQgIAAgIADQgIAEgGAGQgFAGgDAJQgDAIAAAIQAAAKADAIQADAIAGAGQAGAGAIADQAIAEAJAAQAIAAAHgBQAHgCAFgDIAAgfIgZAAIAAgOIApAAIAAA3IgKAFIgLACIgLADIgLAAQgNAAgMgEg");
	this.shape_39.setTransform(36.625,12.35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AglA5IAAhxIBIAAIAAAPIg4AAIAAAiIA0AAIAAANIg0AAIAAAkIA7AAIAAAPg");
	this.shape_40.setTransform(26.15,12.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgXA3QgKgEgJgJQgHgIgEgLQgFgKAAgNQAAgMAFgLQAEgKAHgJQAJgIAKgEQALgEAMgBQANABALAEQALAEAIAIQAHAJAFAKQAEALAAAMQAAANgEAKQgFALgHAIQgIAJgLAEQgLAFgNgBQgMABgLgFgAgQgpQgJAEgFAGQgGAGgDAJQgDAIAAAIQAAAJADAJQADAHAGAGQAFAHAJADQAHAEAJAAQAKAAAIgEQAHgDAGgHQAGgGADgHQADgJAAgJQAAgIgDgIQgDgJgGgGQgGgGgHgEQgIgDgKAAQgJAAgHADg");
	this.shape_41.setTransform(14.25,12.35);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgHA5IgrhxIASAAIAgBcIAAAAIAjhcIAQAAIgsBxg");
	this.shape_42.setTransform(2.525,12.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-19.9,0,179,88.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgDAEQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape.setTransform(135.925,120.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_1.setTransform(131.925,118.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgNIAAgBQAAgHADgGQACgGAGgEQAGgDAEgBQALAAAGAIQAFAGABANIAAACIgjAAQAAAJAEAFQAEAEAGAAQAFAAADgCIAGgFIAGAEQgHALgNgBQgKABgHgIgAgIgPQgEAEAAAIIAaAAIAAgBQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_2.setTransform(126.6,118.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgFgDgDQgDgDgFAAQgGAAgDADQgDADgBAFIAAAiIgIAAIAAghQAAgMgLAAQgJAAgDAHIAAAmIgJAAIAAg0IAJAAIAAAGQAGgHAJAAQAMAAACAJQADgEAEgCQAFgDAFAAQASAAAAATIAAAig");
	this.shape_3.setTransform(119.55,118.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAUQgIgGAAgNIAAgBQAAgHADgGQADgGAGgEQAFgDAGgBQAKAAAFAIQAHAGgBANIAAACIgjAAQABAJAEAFQAEAEAGAAQAFAAAEgCIAFgFIAGAEQgHALgNgBQgKABgGgIgAgHgPQgFAEAAAIIAZAAIAAgBQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_4.setTransform(112.6,118.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_5.setTransform(107.175,118.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAUQgIgGABgNIAAgBQAAgHACgGQADgGAGgEQAFgDAFgBQALAAAFAIQAHAGAAANIAAACIgjAAQAAAJAEAFQAFAEAFAAQAFAAAEgCIAFgFIAGAEQgHALgNgBQgKABgGgIgAgIgPQgEAEAAAIIAaAAIAAgBQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_6.setTransform(99.35,118.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_7.setTransform(94.875,117.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_8.setTransform(221.875,106.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAUQgIgGAAgMIAAgCQAAgHADgGQADgHAGgDQAFgEAGABQAKgBAFAIQAHAGgBANIAAACIgjAAQABAIAEAGQAEAEAGAAQAFAAAEgCIAFgFIAFAFQgGAKgNAAQgKAAgGgIgAgHgPQgFAEAAAHIAZAAIAAgBQAAgGgDgEQgEgEgFAAQgFAAgDAEg");
	this.shape_9.setTransform(216.55,106.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAbIAAgHIAcgmIgcAAIAAgHIAoAAIAAAGIgdAmIAeAAIAAAIg");
	this.shape_10.setTransform(211.425,106.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAUQgIgGABgMIAAgCQAAgHACgGQADgHAGgDQAGgEAEABQALgBAFAIQAHAGAAANIAAACIgjAAQAAAIAEAGQAFAEAFAAQAFAAADgCIAGgFIAGAFQgHAKgNAAQgKAAgGgIgAgIgPQgEAEAAAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_11.setTransform(206.35,106.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_12.setTransform(202.425,105.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDAmIAAhLIAIAAIAABLg");
	this.shape_13.setTransform(199.95,105.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_14.setTransform(197.325,106.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAUQgHgGAAgMIAAgCQAAgHAEgGQADgHAFgDQAFgEAGABQAKgBAGAIQAFAGAAANIAAACIgjAAQABAIAEAGQAFAEAFAAQAFAAAEgCIAFgFIAFAFQgGAKgNAAQgKAAgHgIgAgHgPQgFAEAAAHIAZAAIAAgBQAAgGgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_15.setTransform(192.8,106.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgCAbIgUg0IAKAAIANAnIAMgnIAJAAIgSA0g");
	this.shape_16.setTransform(187.65,106.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAHIAAgcIAJAAIAABKIgIAAIAAgFQgGAGgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAGAGAAQAIgBAEgHIAAgYQgEgHgIAAQgGAAgDAFg");
	this.shape_17.setTransform(179.775,105.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDAmIAAhLIAIAAIAABLg");
	this.shape_18.setTransform(175.85,105.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAUQgIgGAAgMIAAgCQAAgHAEgGQADgHAFgDQAFgEAGABQAKgBAGAIQAFAGAAANIAAACIgjAAQABAIAEAGQAFAEAFAAQAFAAAEgCIAFgFIAFAFQgGAKgNAAQgKAAgGgIgAgHgPQgFAEAAAHIAZAAIAAgBQAAgGgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_19.setTransform(172.1,106.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLAjQgEgDgEgEIAFgFQAGAHAIAAQAGAAAEgEQADgDAAgHIAAgFQgFAGgJABQgJgBgFgHQgHgHAAgMQAAgMAHgIQAFgHAJAAQAJgBAFAIIABgGIAJAAIAAAyQAAALgHAFQgGAHgKgBQgFABgGgDgAgJgYQgDAGAAAKQAAAIADAEQAEAGAGAAQAIAAAEgIIAAgXQgEgIgIABQgGAAgEAEg");
	this.shape_20.setTransform(166.5,107.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_21.setTransform(158.575,106.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgQAXQgFgEAAgHQAAgIAGgEQAHgEAKgBIAJAAIAAgDQAAgFgDgDQgDgDgFAAQgEAAgDADQgEACAAAEIgJAAQAAgFADgDQADgEAFgCQAEgDAFABQAJAAAFAEQAGAFAAAIIAAAXQAAAHACAFIAAABIgKAAIgBgGQgGAGgIABQgIgBgFgEgAgMAKQAAAFADACQADACAEAAQADAAAEgBQAEgDACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_22.setTransform(153.075,106.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCAbIgUg0IAKAAIANAnIAMgnIAJAAIgTA0g");
	this.shape_23.setTransform(147.9,106.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgHQADgFAFgEQAGgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgKgBgGgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_24.setTransform(140.15,106.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgPAUQgGgHAAgMIAAgBQAAgHADgHQACgFAGgEQAFgEAGABQAJgBAGAGQAGAFAAAJIgIAAQgBgGgDgDQgEgDgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAFgDAEQgDADgFADQgEACgGABQgKAAgGgIg");
	this.shape_25.setTransform(134.775,106.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_26.setTransform(130.875,105.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKAZQgEgCgDgEQgDgEAAgFIAJAAQABAFADADQADACAFAAQAFAAADgCQADgCAAgEQAAgDgDgCQgCgCgHgCIgKgDIgGgEQgCgDAAgEQAAgGAGgFQAFgFAHABQAKAAAFAEQAGAFgBAHIgJAAQAAgDgDgDQgCgDgGAAQgDAAgDADQgDACAAADQAAADACACIAJADIALADQAEABACADQACAEAAAEQAAAHgFAEQgGAEgJABQgGgBgFgCg");
	this.shape_27.setTransform(127.05,106.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_28.setTransform(123.275,105.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_29.setTransform(120.625,106.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgPAUQgHgGAAgMIAAgCQAAgHAEgGQADgHAFgDQAFgEAGABQAKgBAGAIQAFAGAAANIAAACIgjAAQABAIAEAGQAFAEAFAAQAFAAAEgCIAFgFIAFAFQgGAKgNAAQgKAAgHgIgAgHgPQgFAEAAAHIAZAAIAAgBQAAgGgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_30.setTransform(113.6,106.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLAjQgEgDgEgEIAFgFQAGAHAIAAQAGAAAEgEQADgDAAgHIAAgFQgFAGgJABQgJgBgFgHQgHgHAAgMQAAgMAHgIQAFgHAJAAQAJgBAFAIIABgGIAJAAIAAAyQAAALgHAFQgGAHgKgBQgFABgGgDgAgJgYQgDAGAAAKQAAAIADAEQAEAGAGAAQAIAAAEgIIAAgXQgEgIgIABQgGAAgEAEg");
	this.shape_31.setTransform(108,107.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgHQADgFAFgEQAGgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgJgBgHgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_32.setTransform(102.45,106.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAMAmIAAgjQAAgFgDgDQgDgCgFAAQgDAAgEACQgDACgCADIAAAmIgJAAIAAhLIAJAAIAAAdQAGgHAJAAQAQgBABATIAAAjg");
	this.shape_33.setTransform(96.875,105.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_34.setTransform(89.825,105.925);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgMIAAgCQAAgHAEgGQADgHAFgDQAGgEAFABQAKgBAGAIQAFAGAAANIAAACIgjAAQABAIAEAGQAFAEAFAAQAFAAADgCIAGgFIAFAFQgGAKgNAAQgKAAgHgIgAgHgPQgEAEgBAHIAZAAIAAgBQAAgGgDgEQgEgEgFAAQgFAAgDAEg");
	this.shape_35.setTransform(85.8,106.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAMAmIAAgjQAAgFgDgDQgDgCgFAAQgDAAgEACQgDACgCADIAAAmIgJAAIAAhLIAJAAIAAAdQAGgHAJAAQAQgBABATIAAAjg");
	this.shape_36.setTransform(80.375,105.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgGgDgDQgCgCgHAAQgFAAgDADQgDADgBAFIAAAiIgIAAIAAgiQAAgLgLAAQgJAAgDAHIAAAmIgJAAIAAg0IAIAAIAAAGQAGgHAKAAQAMAAADAIQACgDAEgCQAEgDAGAAQASAAAAASIAAAjg");
	this.shape_37.setTransform(70.75,106.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgHQADgFAGgEQAFgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgJgBgIgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_38.setTransform(63.5,106.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_39.setTransform(55.425,106.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgMIAAgCQAAgHACgGQADgHAGgDQAGgEAEABQALgBAFAIQAGAGABANIAAACIgjAAQAAAIAEAGQAEAEAGAAQAFAAADgCIAGgFIAGAFQgHAKgNAAQgKAAgHgIgAgIgPQgEAEAAAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_40.setTransform(50.1,106.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgCAbIgUg0IAKAAIAMAnIANgnIAJAAIgTA0g");
	this.shape_41.setTransform(44.95,106.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgHQADgFAFgEQAGgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgFADQgGADgHABQgKgBgGgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_42.setTransform(39.7,106.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgDAmIAAhLIAIAAIAABLg");
	this.shape_43.setTransform(35.6,105.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_44.setTransform(32.975,106.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgHQADgFAGgEQAFgEAGABQALAAAGAHQAHAIAAALIAAABQAAAHgDAGQgDAHgFADQgGADgHABQgJgBgIgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_45.setTransform(28.15,106.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgHQADgFAGgEQAFgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgJgBgIgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_46.setTransform(22.45,106.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_47.setTransform(18.175,106.45);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgMIAAgCQAAgHACgGQADgHAGgDQAGgEAEABQALgBAGAIQAFAGABANIAAACIgjAAQAAAIAEAGQAEAEAGAAQAFAAADgCIAGgFIAGAFQgHAKgNAAQgKAAgHgIgAgIgPQgEAEAAAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_48.setTransform(13.65,106.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgCAbIgUg0IAKAAIANAnIAMgnIAJAAIgTA0g");
	this.shape_49.setTransform(8.5,106.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_50.setTransform(218.775,93.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_51.setTransform(214.575,94.45);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgPAWQgFgFAAgJIAAgiIAJAAIAAAiQAAAMAKgBQAKABADgJIAAglIAJAAIAAA0IgJAAIAAgFQgFAGgJAAQgJAAgEgFg");
	this.shape_52.setTransform(209.025,94.55);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AALAlIgRgYIgGAGIAAASIgJAAIAAhKIAJAAIAAAtIAFgGIAPgQIALAAIgTAUIAWAfg");
	this.shape_53.setTransform(204.125,93.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAMAlIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEADQgDACgCADIAAAlIgJAAIAAhKIAJAAIAAAdQAGgIAJAAQAQAAABATIAAAig");
	this.shape_54.setTransform(196.025,93.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgPAVQgGgIAAgMIAAgBQAAgIADgFQACgGAGgEQAFgEAGAAQAJAAAGAGQAGAFAAAJIgIAAQgBgFgDgDQgEgEgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAEgDAFQgDAEgFACQgEADgGAAQgKgBgGgGg");
	this.shape_55.setTransform(190.725,94.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_56.setTransform(186.825,93.55);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgUAaIAAgGIAcgmIgcAAIAAgHIAoAAIAAAGIgdAmIAeAAIAAAHg");
	this.shape_57.setTransform(183.175,94.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_58.setTransform(176.375,93.925);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgOAVQgIgHAAgMIAAgCQAAgHADgGQAEgGAFgEQAFgEAGAAQAKABAFAGQAHAIgBAMIAAADIgiAAQAAAHAEAFQAEAFAGAAQAFAAAEgCIAFgFIAGAEQgHALgNAAQgKgBgGgGgAgHgPQgFAEAAAHIAZAAIAAAAQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_59.setTransform(172.35,94.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAMAlIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEADQgDACgCADIAAAlIgJAAIAAhKIAJAAIAAAdQAGgIAJAAQAQAAABATIAAAig");
	this.shape_60.setTransform(166.925,93.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgPAWQgFgFAAgJIAAgiIAJAAIAAAiQAAAMAKgBQAKABADgJIAAglIAJAAIAAA0IgJAAIAAgFQgFAGgJAAQgJAAgEgFg");
	this.shape_61.setTransform(158.875,94.55);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgGAmIAAgtIgJAAIAAgHIAJAAIAAgGQgBgIAFgEQADgFAJAAIAGABIgBAHIgEgBQgFAAgCADQgCADAAAEIAAAGIALAAIAAAHIgLAAIAAAtg");
	this.shape_62.setTransform(152.1,93.35);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgNIAAAAQAAgHADgGQADgGAFgEQAGgEAGAAQAKAAAIAIQAGAHAAAMIAAABQAAAIgDAFQgDAGgGAEQgFAEgHAAQgKAAgGgIgAgKgNQgEAFAAAJQAAAIAEAGQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_63.setTransform(147.35,94.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_64.setTransform(139.275,94.45);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgPAVQgGgHgBgMIAAgCQAAgHAEgGQADgGAFgEQAGgEAFAAQAKABAGAGQAFAIAAAMIAAADIgjAAQABAHAEAFQAFAFAFAAQAFAAAEgCIAFgFIAFAEQgGALgNAAQgKgBgHgGgAgHgPQgEAEgBAHIAZAAIAAAAQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_65.setTransform(133.95,94.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgLAjQgEgCgEgFIAFgFQAGAHAIAAQAGAAAEgEQADgEAAgGIAAgFQgFAHgJAAQgJAAgFgIQgHgHAAgNQAAgLAHgIQAFgIAJAAQAJABAFAGIABgFIAIAAIAAAyQABALgHAFQgGAHgKAAQgFgBgGgCgAgIgXQgEAEAAALQAAAIAEAEQADAGAGAAQAIAAAEgIIAAgXQgEgIgIAAQgGABgDAFg");
	this.shape_66.setTransform(128.35,95.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgOAVQgIgHABgMIAAgCQAAgHACgGQADgGAGgEQAGgEAEAAQALABAFAGQAHAIAAAMIAAADIgjAAQAAAHAEAFQAFAFAFAAQAFAAADgCIAGgFIAGAEQgHALgNAAQgKgBgGgGgAgIgPQgEAEAAAHIAaAAIAAAAQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_67.setTransform(123.1,94.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AANAaIgNgmIgMAmIgHAAIgPgzIAJAAIAKAmIAMgmIAGAAIANAnIALgnIAJAAIgQAzg");
	this.shape_68.setTransform(116.65,94.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAHQADgIAJAAIAEABIAAAIIgFAAQgIAAgDAIIAAAkg");
	this.shape_69.setTransform(111.475,94.45);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgPAVQgGgHgBgMIAAgCQAAgHAEgGQADgGAFgEQAGgEAFAAQAKABAGAGQAFAIAAAMIAAADIgjAAQABAHAEAFQAFAFAFAAQAFAAADgCIAGgFIAFAEQgGALgNAAQgKgBgHgGgAgHgPQgEAEgBAHIAZAAIAAAAQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_70.setTransform(106.95,94.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgCAaIgUgzIAKAAIANAnIAMgnIAJAAIgSAzg");
	this.shape_71.setTransform(101.8,94.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgRAUQgGgHAAgNIAAAAQAAgHADgGQADgGAGgEQAFgEAGAAQALAAAGAIQAHAHAAAMIAAABQAAAIgDAFQgDAGgFAEQgGAEgHAAQgJAAgIgIgAgKgNQgEAFAAAJQAAAIAEAGQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_72.setTransform(96.55,94.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_73.setTransform(89.425,93.925);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgOAVQgIgHABgMIAAgCQAAgHACgGQADgGAGgEQAFgEAFAAQALABAFAGQAHAIAAAMIAAADIgjAAQAAAHAEAFQAFAFAFAAQAFAAAEgCIAFgFIAGAEQgHALgNAAQgKgBgGgGgAgIgPQgEAEAAAHIAaAAIAAAAQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_74.setTransform(85.4,94.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgNIAAAAQAAgHADgGQADgGAFgEQAGgEAGAAQAKAAAIAIQAGAHAAAMIAAABQAAAIgDAFQgDAGgGAEQgFAEgHAAQgKAAgGgIgAgKgNQgEAFAAAJQAAAIAEAGQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_75.setTransform(79.85,94.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgGgDgDQgCgCgGAAQgGAAgDADQgDADgBAFIAAAiIgIAAIAAgiQAAgLgLAAQgJAAgDAIIAAAlIgJAAIAAg0IAJAAIAAAGQAGgHAJAAQAMAAADAJQACgEAEgDQAFgCAFAAQASAAAAASIAAAjg");
	this.shape_76.setTransform(72.65,94.45);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAAAkQgLAAgHgHQgHgFAAgMIAAgvIAJAAIAAAvQAAAIAFAEQAEAFAHgBQAIABAEgFQAEgEAAgIIAAgvIAKAAIAAAvQAAALgHAFQgGAHgLABg");
	this.shape_77.setTransform(62.525,93.65);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgDAEQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_78.setTransform(55.425,96.675);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAHQADgIAJAAIAEABIAAAIIgFAAQgIAAgDAIIAAAkg");
	this.shape_79.setTransform(52.725,94.45);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgPAVQgGgHAAgMIAAgCQAAgHADgGQADgGAFgEQAGgEAEAAQALABAGAGQAFAIABAMIAAADIgjAAQAAAHAEAFQAEAFAGAAQAFAAADgCIAGgFIAFAEQgGALgNAAQgKgBgHgGgAgIgPQgDAEgBAHIAaAAIAAAAQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_80.setTransform(48.2,94.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgPAeQgGgHAAgMIAAgBQAAgLAGgHQAFgIAKAAQAIAAAFAHIAAgcIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgIgAgIgDQgEAEAAAKQAAAJAEAFQADAGAGgBQAIABAEgJIAAgWQgEgIgIAAQgGAAgDAFg");
	this.shape_81.setTransform(42.525,93.45);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgPAVQgGgHgBgMIAAgCQABgHADgGQADgGAFgEQAGgEAEAAQALABAGAGQAFAIAAAMIAAADIgjAAQABAHAEAFQAFAFAFAAQAFAAADgCIAGgFIAFAEQgGALgNAAQgKgBgHgGgAgHgPQgEAEgBAHIAZAAIAAAAQAAgIgDgDQgEgEgGAAQgEAAgDAEg");
	this.shape_82.setTransform(37.3,94.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_83.setTransform(33.375,93.55);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgNAfIAAAGIgIAAIAAhKIAJAAIAAAcQAFgHAJAAQAJAAAGAIQAFAGAAAMIAAABQAAAMgFAHQgGAIgJAAQgJAAgGgHgAgMAAIAAAWQAEAIAIAAQAGAAAEgEQADgGAAgKQAAgJgDgEQgEgFgGAAQgIAAgEAIg");
	this.shape_84.setTransform(29.475,93.45);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_85.setTransform(23.825,94.45);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgQAXQgFgFAAgGQAAgIAGgEQAHgEAKAAIAJAAIAAgFQAAgFgDgCQgDgDgFAAQgEAAgDADQgEACAAADIgJAAQAAgDADgFQADgDAFgCQAEgDAFAAQAJABAFAEQAGAFAAAIIAAAXQAAAHACAEIAAABIgKAAIgBgFQgGAHgIAAQgIAAgFgFgAgMALQAAAEADACQADADAEAAQADAAAEgDQAEgCACgDIAAgLIgHAAQgQAAAAAKg");
	this.shape_86.setTransform(18.325,94.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgQAXQgFgFAAgGQAAgIAGgEQAHgEAKAAIAJAAIAAgFQAAgFgDgCQgDgDgFAAQgEAAgDADQgEACAAADIgJAAQAAgDADgFQADgDAFgCQAEgDAFAAQAJABAFAEQAGAFAAAIIAAAXQAAAHACAEIAAABIgKAAIgBgFQgGAHgIAAQgIAAgFgFgAgMALQAAAEADACQADADAEAAQADAAAEgDQAEgCACgDIAAgLIgHAAQgQAAAAAKg");
	this.shape_87.setTransform(12.875,94.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgNIAAgBQAAgHAEgGQADgGAFgEQAGgDAFgBQAKAAAGAIQAFAGAAANIAAACIgjAAQABAJAEAFQAFAEAFAAQAFAAADgCIAGgFIAFAEQgGALgNgBQgKABgHgIgAgHgPQgEAEgBAIIAZAAIAAgBQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_88.setTransform(210.9,82.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgUAaIAAgGIAcgmIgcAAIAAgIIAoAAIAAAHIgdAmIAeAAIAAAHg");
	this.shape_89.setTransform(205.775,82.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgOAUQgIgGAAgNIAAgBQAAgHADgGQAEgGAFgEQAFgDAGgBQAKAAAFAIQAHAGgBANIAAACIgjAAQABAJAEAFQAFAEAFAAQAFAAAEgCIAFgFIAGAEQgHALgNgBQgKABgGgIgAgHgPQgFAEAAAIIAaAAIAAgBQgBgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_90.setTransform(200.7,82.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAGIAAgbIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAFAGABQAIAAAEgJIAAgXQgEgHgIAAQgGAAgDAFg");
	this.shape_91.setTransform(195.025,81.45);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_92.setTransform(188.075,81.925);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgOAUQgIgGABgNIAAgBQAAgHACgGQAEgGAFgEQAFgDAGgBQAKAAAFAIQAHAGAAANIAAACIgkAAQABAJAEAFQAEAEAGAAQAFAAAEgCIAFgFIAGAEQgHALgNgBQgKABgGgIgAgHgPQgFAEAAAIIAZAAIAAgBQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_93.setTransform(184.05,82.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgFgDgDQgDgDgGAAQgEAAgEADQgDADAAAFIAAAiIgIAAIAAghQAAgMgMAAQgJAAgDAHIAAAmIgJAAIAAg0IAIAAIAAAGQAGgHALAAQALAAACAJQADgEAEgCQAEgDAGAAQASAAAAATIAAAig");
	this.shape_94.setTransform(177,82.45);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgKAZQgFgCgCgEQgDgEAAgFIAJAAQABAFADACQADADAFAAQAFAAADgCQADgCAAgDQAAgEgCgCQgEgCgGgBIgKgEIgGgEQgCgDAAgEQAAgHAFgEQAGgEAIgBQAIAAAGAGQAFAEABAHIgJAAQAAgEgDgCQgEgDgEAAQgEAAgDACQgDACAAAEQAAADADACIAIADIALADQAEABACAEQACADAAAEQAAAHgGAEQgFAFgJgBQgFABgGgDg");
	this.shape_95.setTransform(167.5,82.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgDAMIAAgXIAHAAIAAAGIgBARg");
	this.shape_96.setTransform(164.075,78.825);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgZAjIAAhGIAUAAQAIAAAHAFQAIAEAEAHQAEAHAAALIAAADQAAAKgEAHQgEAIgIAFQgHADgIAAgAgQAcIAKAAQALAAAFgHQAGgGABgNIAAgDQgBgMgGgHQgFgHgKAAIgLAAg");
	this.shape_97.setTransform(160.05,81.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgVAjIAAhGIArAAIAAAIIgiAAIAAAZIAdAAIAAAGIgdAAIAAAfg");
	this.shape_98.setTransform(154.15,81.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgTAbQgHgIAAgPIAAgGQAAgKADgIQAEgHAGgEQAHgFAHAAQAMABAGAGQAHAGABAMIgJAAQgBgKgEgDQgFgEgHAAQgIAAgFAHQgFAGAAANIAAAGQAAALAFAHQAFAHAHAAQAIAAAEgDQAFgEABgJIAJAAQgBALgHAHQgHAFgMAAQgLABgIgKg");
	this.shape_99.setTransform(147.925,81.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgWAfQgFgFAAgJQAAgFADgFQACgEAIgFIgGgJQgCgEAAgDQAAgJAFgEQAFgEAIgBQAHAAAEAFQAFAEAAAHQAAAEgCAEQgCADgGAEIgEAEIAOASQAEgHAAgIIAIAAQAAANgGAJIALALIgLAAIgFgFIgJAFIgJABQgKABgHgGgAgLAEQgHAGAAAHQAAAFADAEQAEADAGAAQAHAAAGgFIgRgVgAgLgaQgCADAAAFQABAEAFAHIAGgEIAEgFIAAgEQABgEgDgCQgCgCgDAAQgEAAgDACg");
	this.shape_100.setTransform(139.25,81.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AARAjIgRgbIgRAbIgLAAIAYgjIgXgjIALAAIAQAbIARgbIALAAIgWAjIAWAjg");
	this.shape_101.setTransform(130.3,81.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgVAjIAAhGIArAAIAAAIIgiAAIAAAZIAdAAIAAAGIgdAAIAAAfg");
	this.shape_102.setTransform(124.65,81.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_103.setTransform(116.375,82.45);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_104.setTransform(112.375,81.55);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_105.setTransform(105.925,82.45);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgOAUQgIgGABgNIAAgBQAAgHACgGQADgGAGgEQAGgDAEgBQALAAAFAIQAHAGAAANIAAACIgjAAQAAAJAEAFQAFAEAFAAQAFAAADgCIAGgFIAGAEQgHALgNgBQgKABgGgIgAgIgPQgEAEAAAIIAaAAIAAgBQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_106.setTransform(100.6,82.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgDAlIAAhJIAIAAIAABJg");
	this.shape_107.setTransform(96.65,81.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgPAUQgHgGAAgNIAAgBQAAgHAEgGQADgGAFgEQAFgDAGgBQAKAAAGAIQAFAGAAANIAAACIgjAAQABAJAEAFQAFAEAFAAQAFAAAEgCIAFgFIAFAEQgGALgNgBQgKABgHgIgAgHgPQgFAEAAAIIAZAAIAAgBQAAgIgDgDQgDgEgGAAQgFAAgDAEg");
	this.shape_108.setTransform(92.9,82.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAGIAAgbIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAFAGABQAIAAAEgJIAAgXQgEgHgIAAQgGAAgDAFg");
	this.shape_109.setTransform(87.225,81.45);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_110.setTransform(81.825,82.45);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgQAXQgFgFAAgGQAAgJAGgDQAHgFAKABIAJAAIAAgFQAAgEgDgDQgDgDgFAAQgEAAgDACQgEADAAAEIgJAAQAAgEADgFQADgDAFgCQAEgCAFgBQAJAAAFAGQAGAEAAAIIAAAXQAAAIACADIAAABIgKAAIgBgFQgGAGgIAAQgIABgFgFgAgMAKQAAAFADACQADACAEAAQADAAAEgCQAEgCACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_111.setTransform(76.325,82.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAMAlIAAgjQAAgEgDgDQgDgCgFgBQgDAAgEACQgDADgCADIAAAlIgJAAIAAhJIAJAAIAAAcQAGgHAJgBQAQABABARIAAAjg");
	this.shape_112.setTransform(70.875,81.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_113.setTransform(63.825,81.925);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgNIAAgBQABgHADgGQADgGAFgEQAGgDAEgBQALAAAGAIQAFAGAAANIAAACIgjAAQABAJAEAFQAFAEAFAAQAFAAADgCIAGgFIAFAEQgGALgNgBQgKABgHgIgAgHgPQgEAEgBAIIAZAAIAAgBQAAgIgDgDQgEgEgGAAQgEAAgDAEg");
	this.shape_114.setTransform(59.8,82.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAMAlIAAgjQAAgEgDgDQgDgCgFgBQgDAAgEACQgDADgCADIAAAlIgJAAIAAhJIAJAAIAAAcQAGgHAJgBQAQABABARIAAAjg");
	this.shape_115.setTransform(54.375,81.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgJAuIAAgHIAEAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQAAgBAAgEIAAg7IAJAAIAAA6QAAAQgMAAIgGgBgAAAglQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_116.setTransform(47.4,82.625);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgBABAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_117.setTransform(45.475,81.55);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgNAfIAAAGIgIAAIAAhKIAJAAIAAAcQAFgHAJAAQAJAAAGAHQAFAIAAAMIAAAAQAAAMgFAIQgGAHgJAAQgJAAgGgHgAgMAAIAAAWQAEAJAIAAQAGAAAEgGQADgEAAgLQAAgJgDgEQgEgFgGAAQgIAAgEAIg");
	this.shape_118.setTransform(41.575,81.45);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAGIAAgbIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAFAGABQAIAAAEgJIAAgXQgEgHgIAAQgGAAgDAFg");
	this.shape_119.setTransform(33.175,81.45);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgEAlIAAhJIAIAAIAABJg");
	this.shape_120.setTransform(29.25,81.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgNIAAgBQAAgHAEgGQADgGAFgEQAGgDAFgBQAKAAAGAIQAFAGAAANIAAACIgjAAQABAJAEAFQAFAEAFAAQAFAAADgCIAGgFIAFAEQgGALgNgBQgKABgHgIgAgHgPQgEAEgBAIIAZAAIAAgBQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_121.setTransform(25.5,82.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgLAjQgEgDgEgEIAFgFQAGAHAIAAQAGAAAEgEQADgEAAgGIAAgFQgFAGgJAAQgJAAgFgHQgHgIAAgMQAAgMAHgHQAFgHAJgBQAJAAAFAIIABgHIAIAAIAAAzQABAKgHAHQgGAFgKAAQgFAAgGgCgAgIgXQgEAEAAAKQAAAJAEAFQADAFAGAAQAIAAAEgIIAAgXQgEgHgIgBQgGAAgDAGg");
	this.shape_122.setTransform(19.9,83.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_123.setTransform(216.175,70.45);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgOAUQgIgGABgMIAAgCQAAgHACgGQADgHAGgDQAGgEAEABQALgBAFAIQAHAGAAANIAAACIgjAAQAAAIAEAGQAFAEAFAAQAFAAADgCIAGgFIAGAFQgHAKgNAAQgKAAgGgIgAgIgPQgEAEAAAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_124.setTransform(210.85,70.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgUAbIAAgHIAcgmIgcAAIAAgHIAoAAIAAAGIgdAmIAeAAIAAAIg");
	this.shape_125.setTransform(205.725,70.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgMIAAgCQABgHADgGQADgHAFgDQAGgEAEABQALgBAGAIQAFAGAAANIAAACIgjAAQABAIAEAGQAFAEAFAAQAFAAADgCIAGgFIAFAFQgGAKgNAAQgKAAgHgIgAgHgPQgEAEgBAHIAZAAIAAgBQAAgGgEgEQgDgEgGAAQgEAAgDAEg");
	this.shape_126.setTransform(200.65,70.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_127.setTransform(196.725,69.55);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgEAmIAAhLIAIAAIAABLg");
	this.shape_128.setTransform(194.25,69.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_129.setTransform(191.625,70.45);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgOAUQgIgGABgMIAAgCQAAgHACgGQADgHAGgDQAFgEAFABQALgBAFAIQAHAGAAANIAAACIgjAAQAAAIAEAGQAFAEAFAAQAFAAAEgCIAFgFIAGAFQgHAKgNAAQgKAAgGgIgAgIgPQgEAEAAAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_130.setTransform(187.1,70.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgCAbIgTg0IAJAAIAMAnIAOgnIAJAAIgTA0g");
	this.shape_131.setTransform(181.95,70.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgJAZQgFgCgDgEQgDgEAAgFIAJAAQAAAFAEADQADACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgEgCgGgCIgKgDIgGgEQgCgDAAgEQAAgGAFgFQAGgFAIABQAJAAAFAEQAFAFAAAHIgJAAQAAgDgCgDQgDgDgFAAQgEAAgDADQgDACAAADQAAADACACIAJADIALADQAEABACADQACAEAAAEQAAAHgFAEQgGAEgJABQgFgBgFgCg");
	this.shape_132.setTransform(174.45,70.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_133.setTransform(170.475,70.45);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgOAUQgIgGABgMIAAgCQAAgHACgGQADgHAGgDQAFgEAFABQALgBAFAIQAHAGAAANIAAACIgjAAQAAAIAEAGQAFAEAFAAQAFAAAEgCIAFgFIAGAFQgHAKgNAAQgKAAgGgIgAgIgPQgEAEAAAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_134.setTransform(165.95,70.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgKAjQgFgDgEgEIAFgFQAGAHAIAAQAGAAADgEQAEgDAAgHIAAgFQgFAGgJABQgJgBgGgHQgFgHAAgMQAAgMAFgIQAGgHAJAAQAJgBAGAIIAAgGIAJAAIAAAyQgBALgFAFQgHAHgKgBQgFABgFgDgAgJgYQgDAGAAAKQAAAIADAEQAEAGAFAAQAJAAAEgIIAAgXQgEgIgIABQgGAAgEAEg");
	this.shape_135.setTransform(160.35,71.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgKAjQgGgDgCgEIAEgFQAGAHAIAAQAGAAADgEQAEgDAAgHIAAgFQgFAGgIABQgKgBgGgHQgFgHgBgMQABgMAFgIQAGgHAKAAQAIgBAFAIIABgGIAIAAIAAAyQAAALgFAFQgHAHgKgBQgFABgFgDgAgIgYQgEAGAAAKQAAAIAEAEQADAGAGAAQAIAAAEgIIAAgXQgEgIgIABQgGAAgDAEg");
	this.shape_136.setTransform(154.75,71.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgOAUQgIgGAAgMIAAgCQAAgHADgGQADgHAGgDQAFgEAGABQAKgBAFAIQAHAGgBANIAAACIgjAAQABAIAEAGQAEAEAGAAQAFAAAEgCIAFgFIAFAFQgGAKgNAAQgKAAgGgIgAgHgPQgFAEAAAHIAZAAIAAgBQAAgGgDgEQgEgEgFAAQgFAAgDAEg");
	this.shape_137.setTransform(149.5,70.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgEAmIAAhLIAIAAIAABLg");
	this.shape_138.setTransform(145.55,69.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgMIAAgCQAAgHADgGQADgHAFgDQAGgEAEABQALgBAGAIQAFAGABANIAAACIgjAAQAAAIAEAGQAEAEAGAAQAFAAADgCIAGgFIAFAFQgGAKgNAAQgKAAgHgIgAgIgPQgDAEgBAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_139.setTransform(141.8,70.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgNAfIAAAGIgIAAIAAhKIAJAAIAAAcQAFgHAJAAQAJAAAGAHQAFAIAAALIAAABQAAAMgFAIQgGAHgJAAQgJAAgGgHgAgMAAIAAAWQAEAJAIAAQAGgBAEgFQADgEAAgLQAAgJgDgEQgEgFgGAAQgIAAgEAIg");
	this.shape_140.setTransform(136.425,69.45);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgOAUQgIgGAAgMIAAgCQAAgHAEgGQADgHAFgDQAFgEAGABQAKgBAGAIQAFAGAAANIAAACIgjAAQABAIAEAGQAFAEAFAAQAFAAAEgCIAFgFIAFAFQgGAKgNAAQgKAAgGgIgAgHgPQgFAEAAAHIAZAAIAAgBQAAgGgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_141.setTransform(128.45,70.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_142.setTransform(124.325,70.45);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgOAUQgIgGAAgMIAAgCQAAgHADgGQADgHAGgDQAFgEAGABQAKgBAFAIQAHAGgBANIAAACIgjAAQABAIAEAGQAEAEAGAAQAFAAAEgCIAFgFIAFAFQgGAKgNAAQgKAAgGgIgAgHgPQgFAEAAAHIAZAAIAAgBQAAgGgDgEQgEgEgFAAQgFAAgDAEg");
	this.shape_143.setTransform(119.8,70.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_144.setTransform(115.875,69.55);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgEAmIAAhLIAIAAIAABLg");
	this.shape_145.setTransform(113.4,69.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgPAWQgFgFAAgKIAAghIAJAAIAAAhQAAANAKAAQAKgBADgHIAAgmIAJAAIAAA0IgJAAIAAgFQgFAGgJAAQgJAAgEgFg");
	this.shape_146.setTransform(109.425,70.55);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgPAUQgGgHAAgMIAAgBQAAgHADgHQACgFAGgEQAFgEAGABQAJgBAGAGQAGAFAAAJIgIAAQgBgGgDgDQgEgDgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAFgDAEQgDADgFADQgEACgGABQgKAAgGgIg");
	this.shape_147.setTransform(104.175,70.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_148.setTransform(100.275,69.55);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_149.setTransform(97.275,69.925);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_150.setTransform(94.375,70.45);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgQAXQgFgEAAgHQAAgIAGgEQAHgEAKgBIAJAAIAAgDQAAgFgDgDQgDgDgFAAQgEAAgDADQgEACAAAEIgJAAQAAgFADgDQADgEAFgCQAEgDAFABQAJAAAFAEQAGAFAAAIIAAAXQAAAHACAFIAAABIgKAAIgBgGQgGAGgIABQgIgBgFgEgAgMAKQAAAFADACQADACAEAAQADAAAEgBQAEgDACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_151.setTransform(89.675,70.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgVAlIAAhIIAIAAIAAAGQAGgHAJAAQAJAAAGAHQAFAHAAANIAAABQAAALgFAHQgGAIgJAAQgJAAgFgGIAAAZgAgMgVIAAAYQAEAHAIAAQAGAAADgFQAEgFAAgJQAAgJgEgFQgDgFgGAAQgIAAgEAHg");
	this.shape_152.setTransform(84.275,71.475);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_153.setTransform(76.125,70.45);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgQAXQgFgEAAgHQAAgIAGgEQAHgEAKgBIAJAAIAAgDQAAgFgDgDQgDgDgFAAQgEAAgDADQgEACAAAEIgJAAQAAgFADgDQADgEAFgCQAEgDAFABQAJAAAFAEQAGAFAAAIIAAAXQAAAHACAFIAAABIgKAAIgBgGQgGAGgIABQgIgBgFgEgAgMAKQAAAFADACQADACAEAAQADAAAEgBQAEgDACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_154.setTransform(70.625,70.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgCAbIgUg0IAKAAIANAnIAMgnIAJAAIgTA0g");
	this.shape_155.setTransform(65.45,70.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_156.setTransform(57.825,70.45);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgMIAAgCQAAgHAEgGQADgHAFgDQAGgEAFABQAKgBAGAIQAFAGAAANIAAACIgjAAQABAIAEAGQAFAEAFAAQAFAAADgCIAGgFIAFAFQgGAKgNAAQgKAAgHgIgAgHgPQgEAEgBAHIAZAAIAAgBQAAgGgDgEQgEgEgFAAQgFAAgDAEg");
	this.shape_157.setTransform(52.5,70.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgLAjQgEgDgEgEIAFgFQAGAHAIAAQAGAAAEgEQADgDAAgHIAAgFQgFAGgJABQgJgBgFgHQgHgHAAgMQAAgMAHgIQAFgHAJAAQAJgBAFAIIABgGIAIAAIAAAyQABALgHAFQgGAHgKgBQgFABgGgDgAgIgYQgEAGAAAKQAAAIAEAEQADAGAGAAQAIAAAEgIIAAgXQgEgIgIABQgGAAgDAEg");
	this.shape_158.setTransform(46.9,71.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_159.setTransform(41.475,70.45);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_160.setTransform(37.475,69.55);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_161.setTransform(33.525,70.45);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgMIAAgCQAAgHAEgGQADgHAFgDQAGgEAFABQAKgBAGAIQAFAGAAANIAAACIgjAAQABAIAEAGQAFAEAFAAQAFAAAEgCIAFgFIAFAFQgGAKgNAAQgKAAgHgIgAgHgPQgEAEgBAHIAZAAIAAgBQAAgGgDgEQgEgEgFAAQgFAAgDAEg");
	this.shape_162.setTransform(28.2,70.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AALAmIgRgZIgGAGIAAATIgJAAIAAhLIAJAAIAAAtIAFgGIAPgQIALAAIgTAUIAWAgg");
	this.shape_163.setTransform(23.325,69.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgOAUQgIgGABgMIAAgCQAAgHACgGQADgHAGgDQAFgEAFABQALgBAFAIQAHAGAAANIAAACIgjAAQAAAIAEAGQAFAEAFAAQAFAAAEgCIAFgFIAGAFQgHAKgNAAQgKAAgGgIgAgIgPQgEAEAAAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_164.setTransform(17.9,70.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_165.setTransform(13.775,70.45);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgPAVQgGgHAAgMIAAgCQAAgHADgGQADgGAFgEQAGgEAEAAQALABAGAGQAFAIABAMIAAADIgjAAQAAAHAEAFQAEAFAGAAQAFAAADgCIAGgFIAFAEQgGALgNAAQgKgBgHgGgAgIgPQgDAEgBAHIAaAAIAAAAQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_166.setTransform(217.4,58.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgPAeQgGgHAAgMIAAgBQAAgLAGgHQAFgIAKAAQAIAAAFAHIAAgcIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgIgAgIgDQgEAEAAAKQAAAJAEAFQADAGAGgBQAIABAEgJIAAgWQgEgIgIAAQgGAAgDAFg");
	this.shape_167.setTransform(211.725,57.45);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_168.setTransform(203.825,58.45);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgQAXQgFgFAAgGQAAgIAGgEQAHgEAKAAIAJAAIAAgFQAAgFgDgCQgDgDgFAAQgEAAgDADQgEACAAADIgJAAQAAgDADgFQADgDAFgCQAEgDAFAAQAJABAFAEQAGAFAAAIIAAAXQAAAHACAEIAAABIgKAAIgBgFQgGAHgIAAQgIAAgFgFgAgMALQAAAEADACQADADAEAAQADAAAEgDQAEgCACgDIAAgLIgHAAQgQAAAAAKg");
	this.shape_169.setTransform(198.325,58.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgCAaIgUgzIAKAAIANAnIAMgnIAJAAIgTAzg");
	this.shape_170.setTransform(193.15,58.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAHAgQgFgEAAgGIAAgEQAAgGAFgFQAEgDAGAAQAGAAAFADQAEAFAAAHIAAADQAAAHgEADQgFAEgGABQgGgBgEgEgAALAMQgCACAAAEIAAAEQAAAEACACQADACADABQAEgBACgCQACgCAAgEIAAgEQAAgEgCgCQgCgCgEAAQgDAAgDACgAgTAbIAig3IAEAEIghA2gAgbgGQgEgFAAgHIAAgDQAAgHAEgDQAFgEAFgBQAHABAEAEQAEAEAAAGIAAAEQAAAGgEAFQgEADgGAAQgHAAgEgDgAgWgcQgCADAAAEIAAAEQAAADACADQACACAEAAQADAAADgCQABgCAAgFIAAgDQAAgEgBgDQgCgCgFAAQgDAAgCACg");
	this.shape_171.setTransform(184.65,57.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgOAjIAcg+IglAAIAAgHIAvAAIAAAEIgdBBg");
	this.shape_172.setTransform(178.15,57.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgPAfQgHgFAAgKQAAgFAEgFQADgFAGgBQgGgCgCgEQgDgFAAgFQAAgJAGgFQAGgFAIgBQAKABAFAFQAGAFAAAJQAAAGgDAEQgDAEgEACQAFABAEAFQACAFAAAFQAAAKgFAFQgHAGgKAAQgJAAgGgGgAgJAGQgDAEgBAGQABAGADADQADAEAGAAQAHAAADgEQAEgDgBgGQABgGgEgEQgEgDgGAAQgFAAgEADgAgHgZQgEADAAAGQAAAGAEADQADADAEAAQAGAAADgDQADgDAAgGQAAgFgDgDQgEgEgFAAQgEAAgDADg");
	this.shape_173.setTransform(172.55,57.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgDAEQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_174.setTransform(165.925,60.675);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgLAjQgEgCgDgFIAEgFQAGAHAIAAQAGAAAEgEQADgEAAgGIAAgFQgFAHgIAAQgKAAgFgIQgHgHAAgNQAAgLAHgIQAFgIAKAAQAIABAFAGIABgFIAIAAIAAAyQAAALgFAFQgHAHgKAAQgFgBgGgCgAgIgXQgEAEAAALQAAAIAEAEQADAGAGAAQAIAAAEgIIAAgXQgEgIgIAAQgGABgDAFg");
	this.shape_175.setTransform(161.75,59.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_176.setTransform(156.325,58.45);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_177.setTransform(152.325,57.55);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AALAlIgRgYIgGAGIAAASIgJAAIAAhKIAJAAIAAAtIAFgGIAPgQIALAAIgTAUIAWAfg");
	this.shape_178.setTransform(148.925,57.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAHQADgIAJAAIAEABIAAAJIgFgBQgIAAgDAIIAAAkg");
	this.shape_179.setTransform(144.625,58.45);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgPAVQgGgHAAgMIAAgCQAAgHACgGQADgGAGgEQAGgEAEAAQALABAGAGQAFAIABAMIAAADIgjAAQAAAHAEAFQAEAFAGAAQAFAAADgCIAGgFIAGAEQgHALgNAAQgKgBgHgGgAgIgPQgEAEAAAHIAaAAIAAAAQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_180.setTransform(140.1,58.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AANAaIgNgnIgMAnIgHAAIgPgzIAJAAIAKAmIAMgmIAHAAIAMAnIAKgnIAJAAIgPAzg");
	this.shape_181.setTransform(133.65,58.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgGgDgDQgCgCgHAAQgFAAgDADQgDADAAAFIAAAiIgJAAIAAgiQAAgLgLAAQgJAAgDAIIAAAlIgJAAIAAg0IAIAAIAAAGQAGgHAKAAQALAAAEAJQACgEAEgDQAFgCAFAAQARAAABASIAAAjg");
	this.shape_182.setTransform(125.55,58.45);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgRAUQgGgHAAgNIAAAAQAAgHADgGQADgGAGgEQAFgEAGAAQAKAAAIAIQAGAHAAAMIAAABQAAAIgDAFQgDAGgGAEQgFAEgHAAQgJAAgIgIgAgKgNQgEAFAAAJQAAAIAEAGQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_183.setTransform(118.3,58.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgNIAAAAQAAgHADgGQADgGAFgEQAGgEAGAAQAKAAAIAIQAGAHAAAMIAAABQAAAIgDAFQgDAGgGAEQgFAEgHAAQgKAAgGgIgAgKgNQgEAFAAAJQAAAIAEAGQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_184.setTransform(112.6,58.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgNAfIAAAGIgIAAIAAhKIAJAAIAAAcQAFgHAJAAQAJAAAGAIQAFAGAAAMIAAABQAAAMgFAHQgGAIgJAAQgJAAgGgHgAgMAAIAAAWQAEAIAIAAQAGAAAEgEQADgGAAgKQAAgJgDgEQgEgFgGAAQgIAAgEAIg");
	this.shape_185.setTransform(107.075,57.45);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgGAmIAAgtIgJAAIAAgHIAJAAIAAgGQgBgIAFgEQADgFAJAAIAGABIgBAHIgEgBQgFAAgCADQgCADAAAEIAAAGIALAAIAAAHIgLAAIAAAtg");
	this.shape_186.setTransform(102.6,57.35);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgPAVQgGgHAAgMIAAgCQAAgHADgGQADgGAFgEQAGgEAEAAQALABAGAGQAFAIABAMIAAADIgjAAQAAAHAEAFQAEAFAGAAQAFAAADgCIAGgFIAFAEQgGALgNAAQgKgBgHgGgAgIgPQgDAEgBAHIAaAAIAAAAQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_187.setTransform(98.15,58.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AAMAlIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEADQgDACgCADIAAAlIgJAAIAAhKIAJAAIAAAdQAGgIAJAAQAQAAABATIAAAig");
	this.shape_188.setTransform(92.725,57.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgPAVQgGgHgBgMIAAgCQAAgHAEgGQADgGAFgEQAGgEAFAAQAKABAGAGQAFAIAAAMIAAADIgjAAQABAHAEAFQAFAFAFAAQAFAAADgCIAGgFIAFAEQgGALgNAAQgKgBgHgGgAgHgPQgEAEgBAHIAZAAIAAAAQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_189.setTransform(84.9,58.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgPAeQgGgHAAgMIAAgBQAAgLAGgHQAFgIAKAAQAIAAAFAHIAAgcIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgIgAgIgDQgEAEAAAKQAAAJAEAFQADAGAGgBQAIABAEgJIAAgWQgEgIgIAAQgGAAgDAFg");
	this.shape_190.setTransform(79.225,57.45);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDACgCAFIAAAkIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_191.setTransform(71.325,58.45);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgQAXQgFgFAAgGQAAgIAGgEQAHgEAKAAIAJAAIAAgFQAAgFgDgCQgDgDgFAAQgEAAgDADQgEACAAADIgJAAQAAgDADgFQADgDAFgCQAEgDAFAAQAJABAFAEQAGAFAAAIIAAAXQAAAHACAEIAAABIgKAAIgBgFQgGAHgIAAQgIAAgFgFgAgMALQAAAEADACQADADAEAAQADAAAEgDQAEgCACgDIAAgLIgHAAQgQAAAAAKg");
	this.shape_192.setTransform(65.825,58.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgCAaIgTgzIAJAAIAMAnIAOgnIAJAAIgTAzg");
	this.shape_193.setTransform(60.65,58.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgLAjQgEgCgDgFIAEgFQAGAHAIAAQAGAAAEgEQADgEAAgGIAAgFQgFAHgIAAQgKAAgFgIQgHgHAAgNQAAgLAHgIQAFgIAKAAQAIABAFAGIABgFIAIAAIAAAyQAAALgFAFQgHAHgKAAQgFgBgGgCgAgIgXQgEAEAAALQAAAIAEAEQADAGAGAAQAIAAAEgIIAAgXQgEgIgIAAQgGABgDAFg");
	this.shape_194.setTransform(52.85,59.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgEAlIAAhKIAIAAIAABKg");
	this.shape_195.setTransform(48.9,57.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgNIAAAAQAAgHADgGQADgGAFgEQAGgEAGAAQAKAAAIAIQAGAHAAAMIAAABQAAAIgDAFQgDAGgGAEQgFAEgHAAQgJAAgHgIgAgKgNQgEAFAAAJQAAAIAEAGQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_196.setTransform(44.85,58.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgCAaIgUgzIAKAAIAMAnIANgnIAJAAIgTAzg");
	this.shape_197.setTransform(39.55,58.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgPAVQgGgHgBgMIAAgCQABgHADgGQADgGAFgEQAGgEAEAAQALABAGAGQAFAIAAAMIAAADIgjAAQABAHAEAFQAFAFAFAAQAFAAADgCIAGgFIAFAEQgGALgNAAQgKgBgHgGgAgIgPQgDAEgBAHIAZAAIAAAAQAAgIgEgDQgDgEgGAAQgEAAgEAEg");
	this.shape_198.setTransform(34.6,58.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgLAjQgEgCgDgFIAEgFQAGAHAIAAQAGAAAEgEQADgEAAgGIAAgFQgFAHgIAAQgKAAgFgIQgHgHAAgNQAAgLAHgIQAFgIAKAAQAIABAFAGIABgFIAIAAIAAAyQAAALgFAFQgHAHgKAAQgFgBgGgCgAgIgXQgEAEAAALQAAAIAEAEQADAGAGAAQAIAAAEgIIAAgXQgEgIgIAAQgGABgDAFg");
	this.shape_199.setTransform(29,59.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgJAZQgFgCgDgEQgDgEAAgFIAJAAQAAAFAEACQADADAFAAQAFAAADgCQADgCAAgDQAAgEgDgCQgCgCgHgBIgKgEIgGgEQgCgDAAgEQAAgGAGgFQAFgFAHAAQAKABAFAEQAGAFgBAHIgJAAQAAgDgDgDQgDgDgFAAQgDAAgDADQgDABAAAEQAAADACACIAJADIALADQAEACACADQACACAAAFQAAAHgFAEQgGAFgJAAQgGAAgEgDg");
	this.shape_200.setTransform(21.2,58.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgEAlIAAhKIAIAAIAABKg");
	this.shape_201.setTransform(17.4,57.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgQAXQgFgFAAgGQAAgIAGgEQAHgEAKAAIAJAAIAAgFQAAgFgDgCQgDgDgFAAQgEAAgDADQgEACAAADIgJAAQAAgDADgFQADgDAFgCQAEgDAFAAQAJABAFAEQAGAFAAAIIAAAXQAAAHACAEIAAABIgKAAIgBgFQgGAHgIAAQgIAAgFgFgAgMALQAAAEADACQADADAEAAQADAAAEgDQAEgCACgDIAAgLIgHAAQgQAAAAAKg");
	this.shape_202.setTransform(13.475,58.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_203.setTransform(225.075,46.45);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgNIAAgBQAAgHADgGQACgGAGgEQAGgDAEgBQALAAAFAIQAGAGABANIAAACIgjAAQAAAJAEAFQAEAEAGAAQAFAAADgCIAGgFIAGAEQgHALgNgBQgKABgHgIgAgIgPQgEAEAAAIIAaAAIAAgBQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_204.setTransform(219.75,46.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgUAaIAAgGIAcgmIgcAAIAAgIIAoAAIAAAHIgdAmIAeAAIAAAHg");
	this.shape_205.setTransform(214.625,46.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgNIAAgBQAAgHAEgGQADgGAFgEQAGgDAFgBQAKAAAGAIQAFAGAAANIAAACIgjAAQABAJAEAFQAFAEAFAAQAFAAADgCIAGgFIAFAEQgGALgNgBQgKABgHgIgAgHgPQgEAEgBAIIAZAAIAAgBQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_206.setTransform(209.55,46.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_207.setTransform(205.625,45.55);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgEAlIAAhJIAIAAIAABJg");
	this.shape_208.setTransform(203.15,45.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAJIgFgBQgIAAgDAHIAAAlg");
	this.shape_209.setTransform(200.525,46.45);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgOAUQgIgGABgNIAAgBQAAgHACgGQADgGAGgEQAGgDAEgBQALAAAFAIQAHAGAAANIAAACIgjAAQAAAJAEAFQAFAEAFAAQAFAAADgCIAGgFIAGAEQgHALgNgBQgKABgGgIgAgIgPQgEAEAAAIIAaAAIAAgBQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_210.setTransform(196,46.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgCAaIgTg0IAJAAIAMAoIAOgoIAJAAIgUA0g");
	this.shape_211.setTransform(190.85,46.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgOAUQgIgGABgNIAAgBQAAgHACgGQADgGAGgEQAGgDAEgBQALAAAFAIQAHAGAAANIAAACIgjAAQAAAJAEAFQAFAEAFAAQAFAAADgCIAGgFIAGAEQgHALgNgBQgKABgGgIgAgIgPQgEAEAAAIIAaAAIAAgBQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_212.setTransform(183.4,46.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_213.setTransform(178.925,45.925);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAGIAAgbIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAFAGABQAIAAAEgIIAAgYQgEgHgIAAQgGAAgDAFg");
	this.shape_214.setTransform(171.975,45.45);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgEAlIAAhJIAIAAIAABJg");
	this.shape_215.setTransform(168.05,45.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgNIAAgBQAAgHADgGQADgGAFgEQAGgDAEgBQALAAAGAIQAFAGABANIAAACIgjAAQAAAJAEAFQAEAEAGAAQAFAAADgCIAGgFIAFAEQgGALgNgBQgKABgHgIgAgIgPQgDAEgBAIIAaAAIAAgBQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_216.setTransform(164.3,46.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgKAjQgGgDgCgEIAEgFQAGAHAIAAQAGAAAEgEQADgEAAgGIAAgFQgFAGgIAAQgKAAgFgHQgGgIgBgMQABgMAGgHQAFgHAKgBQAIAAAFAIIABgHIAIAAIAAAzQAAAKgFAHQgHAFgKAAQgFAAgFgCgAgIgXQgEAEAAAKQAAAJAEAFQADAFAGAAQAIAAAEgIIAAgXQgEgHgIgBQgGAAgDAGg");
	this.shape_217.setTransform(158.7,47.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgDAlIAAhJIAIAAIAABJg");
	this.shape_218.setTransform(152.25,45.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgOAUQgIgGAAgNIAAgBQAAgHADgGQAEgGAFgEQAFgDAGgBQAKAAAFAIQAHAGAAANIAAACIgkAAQABAJAEAFQAEAEAGAAQAFAAAEgCIAFgFIAGAEQgHALgNgBQgKABgGgIgAgHgPQgFAEAAAIIAZAAIAAgBQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_219.setTransform(148.5,46.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_220.setTransform(143.075,46.45);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgKAZQgFgCgCgEQgDgEAAgFIAJAAQABAFADACQADADAFAAQAFAAADgCQADgCAAgDQAAgEgCgCQgEgCgGgBIgKgEIgGgEQgCgDAAgEQAAgHAFgEQAGgEAIgBQAIAAAGAGQAFAEABAHIgJAAQAAgEgEgCQgDgDgEAAQgFAAgCACQgDACAAAEQAAADADACIAIADIALADQAEABACAEQACADAAAEQAAAHgGAEQgFAFgJgBQgFABgGgDg");
	this.shape_221.setTransform(137.7,46.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgFgDgDQgDgDgFAAQgFAAgEADQgDADAAAFIAAAiIgIAAIAAghQAAgMgMAAQgJAAgDAHIAAAmIgJAAIAAg0IAJAAIAAAGQAFgHALAAQAKAAADAJQADgEAEgCQAEgDAGAAQASAAAAATIAAAig");
	this.shape_222.setTransform(128.3,46.45);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgGQADgHAFgDQAGgDAGgBQALABAGAHQAHAIAAALIAAAAQAAAIgDAHQgDAFgFAEQgGAEgHgBQgKAAgGgHgAgKgNQgEAFAAAIQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_223.setTransform(121.05,46.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgGQADgHAFgDQAGgDAGgBQALABAGAHQAHAIAAALIAAAAQAAAIgDAHQgDAFgFAEQgGAEgHgBQgJAAgIgHgAgKgNQgEAFAAAIQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_224.setTransform(112.85,46.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgPAUQgGgHAAgNIAAAAQAAgIADgFQACgHAGgDQAFgDAGgBQAJABAGAFQAGAGAAAIIgIAAQgBgFgDgEQgEgDgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAEgDAEQgDAFgFACQgEADgGgBQgKABgGgIg");
	this.shape_225.setTransform(107.475,46.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_226.setTransform(103.575,45.55);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgJAZQgFgCgDgEQgDgEAAgFIAJAAQAAAFAEACQADADAFAAQAFAAADgCQADgCAAgDQAAgEgCgCQgEgCgGgBIgKgEIgGgEQgCgDAAgEQAAgHAFgEQAGgEAIgBQAJAAAFAGQAFAEAAAHIgJAAQAAgEgCgCQgDgDgFAAQgEAAgDACQgDACAAAEQAAADACACIAJADIALADQAEABACAEQACADAAAEQAAAHgFAEQgGAFgJgBQgFABgFgDg");
	this.shape_227.setTransform(99.75,46.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_228.setTransform(95.975,45.55);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAJIgFgBQgIAAgDAHIAAAlg");
	this.shape_229.setTransform(93.325,46.45);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgLAjQgEgDgEgEIAFgFQAGAHAIAAQAGAAAEgEQADgEAAgGIAAgFQgFAGgJAAQgJAAgFgHQgHgIAAgMQAAgMAHgHQAFgHAJgBQAJAAAFAIIABgHIAIAAIAAAzQABAKgHAHQgGAFgKAAQgFAAgGgCgAgJgXQgDAEAAAKQAAAJADAFQAEAFAGAAQAIAAAEgIIAAgXQgEgHgIgBQgGAAgEAGg");
	this.shape_230.setTransform(85.95,47.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgGQADgHAFgDQAGgDAGgBQAKABAIAHQAGAIAAALIAAAAQAAAIgDAHQgDAFgGAEQgFAEgHgBQgJAAgHgHgAgKgNQgEAFAAAIQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_231.setTransform(80.4,46.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgGQADgHAFgDQAGgDAGgBQALABAGAHQAHAIAAALIAAAAQAAAIgDAHQgDAFgFAEQgGAEgHgBQgKAAgGgHgAgKgNQgEAFAAAIQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_232.setTransform(74.7,46.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AAMAlIAAgjQAAgEgDgDQgDgCgFgBQgDABgEABQgDADgCADIAAAlIgJAAIAAhJIAJAAIAAAcQAGgHAJgBQAQABABARIAAAjg");
	this.shape_233.setTransform(69.125,45.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_234.setTransform(61.125,46.45);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgOAUQgIgGAAgNIAAgBQAAgHADgGQAEgGAFgEQAFgDAGgBQAKAAAFAIQAHAGgBANIAAACIgiAAQAAAJAEAFQAEAEAGAAQAFAAAEgCIAFgFIAGAEQgHALgNgBQgKABgGgIgAgHgPQgFAEAAAIIAZAAIAAgBQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_235.setTransform(55.8,46.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgNIAAgBQAAgHACgGQADgGAGgEQAGgDAEgBQALAAAGAIQAFAGABANIAAACIgjAAQAAAJAEAFQAEAEAGAAQAFAAADgCIAGgFIAGAEQgHALgNgBQgKABgHgIgAgIgPQgEAEAAAIIAaAAIAAgBQgBgIgEgDQgCgEgHAAQgEAAgEAEg");
	this.shape_236.setTransform(50.55,46.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_237.setTransform(43.575,45.925);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgNIAAgBQABgHADgGQADgGAFgEQAGgDAEgBQALAAAGAIQAFAGAAANIAAACIgjAAQABAJAEAFQAFAEAFAAQAFAAADgCIAGgFIAFAEQgGALgNgBQgKABgHgIgAgHgPQgEAEgBAIIAZAAIAAgBQAAgIgDgDQgEgEgGAAQgEAAgDAEg");
	this.shape_238.setTransform(39.55,46.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgFgDgDQgCgDgHAAQgFAAgDADQgDADgBAFIAAAiIgIAAIAAghQAAgMgLAAQgJAAgDAHIAAAmIgJAAIAAg0IAIAAIAAAGQAGgHAKAAQAMAAADAJQACgEAEgCQAEgDAGAAQASAAAAATIAAAig");
	this.shape_239.setTransform(32.5,46.45);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_240.setTransform(23.825,45.925);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgFgDgDQgCgDgHAAQgFAAgDADQgDADgBAFIAAAiIgIAAIAAghQAAgMgLAAQgJAAgDAHIAAAmIgJAAIAAg0IAIAAIAAAGQAGgHAKAAQALAAAEAJQACgEAEgCQAEgDAGAAQARAAABATIAAAig");
	this.shape_241.setTransform(18,46.45);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgGQADgHAGgDQAFgDAGgBQAKABAIAHQAGAIAAALIAAAAQAAAIgDAHQgDAFgGAEQgFAEgHgBQgJAAgIgHgAgKgNQgEAFAAAIQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_242.setTransform(10.75,46.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AALAlIgRgYIgGAGIAAASIgJAAIAAhJIAJAAIAAAsIAFgGIAPgRIALAAIgTAWIAWAeg");
	this.shape_243.setTransform(5.725,45.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AARAkIgRgcIgQAcIgMAAIAYgkIgXgiIALAAIAQAbIARgbIALAAIgXAiIAYAkg");
	this.shape_244.setTransform(214.65,33.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgVAkIAAhGIArAAIAAAHIgiAAIAAAYIAdAAIAAAHIgdAAIAAAgg");
	this.shape_245.setTransform(209,33.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_246.setTransform(200.725,34.45);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgOAUQgIgGAAgNIAAgBQAAgHADgGQADgHAGgDQAFgEAGABQAKgBAFAIQAHAGgBANIAAACIgjAAQABAIAEAGQAEAEAGAAQAFAAAEgCIAFgFIAGAFQgHAKgNAAQgKAAgGgIgAgHgPQgFAEAAAHIAZAAIAAgBQAAgGgDgEQgEgEgFAAQgFAAgDAEg");
	this.shape_247.setTransform(195.4,34.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgJAZQgFgCgDgEQgDgEAAgFIAJAAQAAAFAEADQADACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgEgCgGgCIgKgDIgGgEQgCgDAAgEQAAgGAFgFQAGgFAHABQAKAAAFAEQAGAFgBAHIgJAAQAAgDgCgDQgEgDgFAAQgDAAgDADQgDACAAADQAAADACACIAJADIALADQAEACACACQACAEAAAEQAAAHgFAEQgGAEgJABQgGgBgEgCg");
	this.shape_248.setTransform(187.6,34.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgDAMIAAgXIAHAAIAAAGIgBARg");
	this.shape_249.setTransform(184.175,30.825);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgZAkIAAhGIAVAAQAHAAAHADQAIAFAEAHQADAIAAAKIAAADQAAAKgDAHQgEAJgIADQgGAFgJAAgAgQAcIAKAAQALAAAFgHQAHgHAAgMIAAgDQAAgNgHgGQgFgHgJAAIgMAAg");
	this.shape_250.setTransform(180.15,33.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgVAkIAAhGIArAAIAAAHIgiAAIAAAYIAdAAIAAAHIgdAAIAAAgg");
	this.shape_251.setTransform(174.25,33.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgTAcQgHgKAAgPIAAgGQAAgJADgIQAEgHAGgFQAHgDAHAAQAMAAAGAGQAHAGABALIgJAAQgBgIgEgEQgFgEgHAAQgIAAgFAGQgFAIAAALIAAAGQAAAMAFAHQAFAHAHAAQAIAAAEgDQAFgFABgIIAJAAQgBALgHAGQgHAHgMAAQgLAAgIgJg");
	this.shape_252.setTransform(168.025,33.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_253.setTransform(159.475,34.45);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_254.setTransform(155.475,33.55);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgEAmIAAhLIAIAAIAABLg");
	this.shape_255.setTransform(150.5,33.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgNIAAgBQAAgHADgGQADgHAFgDQAGgEAEABQALgBAGAIQAFAGABANIAAACIgjAAQAAAIAEAGQAEAEAGAAQAFAAADgCIAGgFIAFAFQgGAKgNAAQgKAAgHgIgAgIgPQgDAEgBAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_256.setTransform(146.75,34.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAGIAAgbIAJAAIAABKIgIAAIAAgFQgGAGgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAGAGAAQAIgBAEgHIAAgYQgEgHgIAAQgGAAgDAFg");
	this.shape_257.setTransform(141.075,33.45);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_258.setTransform(135.675,34.45);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgQAXQgFgEAAgHQAAgIAGgEQAHgEAKgBIAJAAIAAgDQAAgFgDgDQgDgDgFAAQgEAAgDADQgEACAAAEIgJAAQAAgFADgDQADgEAFgCQAEgDAFABQAJAAAFAEQAGAFAAAIIAAAXQAAAHACAFIAAABIgKAAIgBgGQgGAGgIABQgIgBgFgEgAgMAKQAAAFADACQADACAEABQADAAAEgCQAEgDACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_259.setTransform(130.175,34.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AAMAmIAAgjQAAgFgDgDQgDgCgFAAQgDAAgEACQgDACgCADIAAAmIgJAAIAAhLIAJAAIAAAdQAGgHAJAAQAQgBABATIAAAjg");
	this.shape_260.setTransform(124.725,33.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgOAUQgIgGABgNIAAgBQAAgHACgGQADgHAGgDQAFgEAFABQALgBAFAIQAHAGAAANIAAACIgjAAQAAAIAEAGQAFAEAFAAQAFAAAEgCIAFgFIAGAFQgHAKgNAAQgKAAgGgIgAgIgPQgEAEAAAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_261.setTransform(116.9,34.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAUAAQAHAAAIADQAHAFAEAHQAEAIgBAKIAAADQABAKgEAHQgEAJgHADQgIAFgIAAgAgPAcIAKAAQAJAAAHgHQAFgHAAgMIAAgDQAAgNgFgGQgGgHgJAAIgLAAg");
	this.shape_262.setTransform(111.05,33.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgDAEQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_263.setTransform(103.825,36.675);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAGIAAgbIAJAAIAABKIgIAAIAAgFQgGAGgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAGAGAAQAIgBAEgHIAAgYQgEgHgIAAQgGAAgDAFg");
	this.shape_264.setTransform(99.575,33.45);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_265.setTransform(95.475,34.45);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMIAAAAQAAgHADgHQADgFAFgEQAGgEAGABQAKAAAIAHQAGAIAAALIAAABQAAAHgDAGQgDAHgGADQgFADgHABQgKgBgGgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_266.setTransform(90.65,34.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgHQADgFAFgEQAGgEAGABQALAAAGAHQAHAIAAALIAAABQAAAHgDAGQgDAHgFADQgGADgHABQgJgBgIgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_267.setTransform(84.95,34.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AAMAbIgMgoIgLAoIgIAAIgQg0IAJAAIALAmIANgmIAFAAIANAnIALgnIAJAAIgQA0g");
	this.shape_268.setTransform(78.35,34.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_269.setTransform(72.825,33.925);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_270.setTransform(68.625,34.45);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgQAXQgFgEAAgHQAAgIAGgEQAHgEAKgBIAJAAIAAgDQAAgFgDgDQgDgDgFAAQgEAAgDADQgEACAAAEIgJAAQAAgFADgDQADgEAFgCQAEgDAFABQAJAAAFAEQAGAFAAAIIAAAXQAAAHACAFIAAABIgKAAIgBgGQgGAGgIABQgIgBgFgEgAgMAKQAAAFADACQADACAEABQADAAAEgCQAEgDACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_271.setTransform(63.125,34.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_272.setTransform(58.975,34.45);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgOAUQgIgGABgNIAAgBQAAgHACgGQAEgHAFgDQAFgEAGABQAKgBAFAIQAHAGAAANIAAACIgkAAQABAIAEAGQAFAEAFAAQAFAAAEgCIAFgFIAGAFQgHAKgNAAQgKAAgGgIgAgHgPQgFAEAAAHIAZAAIAAgBQAAgGgDgEQgEgEgFAAQgFAAgDAEg");
	this.shape_273.setTransform(54.45,34.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgCAbIgTg0IAJAAIAMAnIAOgnIAJAAIgTA0g");
	this.shape_274.setTransform(49.3,34.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgEAmIAAhLIAIAAIAABLg");
	this.shape_275.setTransform(43.15,33.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgOAUQgIgGABgNIAAgBQAAgHACgGQADgHAGgDQAGgEAEABQALgBAFAIQAHAGAAANIAAACIgjAAQAAAIAEAGQAFAEAFAAQAFAAADgCIAGgFIAGAFQgHAKgNAAQgKAAgGgIgAgIgPQgEAEAAAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_276.setTransform(39.4,34.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAGIAAgbIAJAAIAABKIgIAAIAAgFQgGAGgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAGAGAAQAIgBAEgHIAAgYQgEgHgIAAQgGAAgDAFg");
	this.shape_277.setTransform(33.725,33.45);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgGgDgDQgDgCgFAAQgDAAgEACQgDADgCADIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_278.setTransform(28.325,34.45);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgQAXQgFgEAAgHQAAgIAGgEQAHgEAKgBIAJAAIAAgDQAAgFgDgDQgDgDgFAAQgEAAgDADQgEACAAAEIgJAAQAAgFADgDQADgEAFgCQAEgDAFABQAJAAAFAEQAGAFAAAIIAAAXQAAAHACAFIAAABIgKAAIgBgGQgGAGgIABQgIgBgFgEgAgMAKQAAAFADACQADACAEABQADAAAEgCQAEgDACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_279.setTransform(22.825,34.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AASAkIAAgiIgjAAIAAAiIgJAAIAAhGIAJAAIAAAeIAjAAIAAgeIAJAAIAABGg");
	this.shape_280.setTransform(16.525,33.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgJAZQgFgCgDgEQgDgEAAgFIAJAAQAAAFAEACQADADAFAAQAFAAADgCQADgCAAgDQAAgEgDgCQgCgCgHgBIgKgEIgGgEQgCgDAAgEQAAgHAGgEQAFgEAHgBQAKAAAFAGQAGAEgBAHIgJAAQAAgEgDgCQgDgDgFAAQgDAAgDACQgDACAAAEQAAADACACIAJADIALADQAEABACAEQACADAAAEQAAAHgFAEQgGAFgJgBQgGABgEgDg");
	this.shape_281.setTransform(158,10.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_282.setTransform(152.725,10.45);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgGQADgHAGgDQAFgDAGgBQAKABAIAHQAGAIAAALIAAAAQAAAIgDAHQgDAFgGAEQgFAEgHgBQgJAAgIgHgAgKgNQgEAFAAAIQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_283.setTransform(147.1,10.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_284.setTransform(143.025,9.55);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_285.setTransform(140.025,9.925);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_286.setTransform(137.325,9.55);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgPAfQgGgIAAgMIAAgBQAAgLAGgIQAFgHAKAAQAIAAAFAGIAAgbIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgHgAgIgDQgEAEAAAKQAAAJAEAFQADAFAGABQAIAAAEgJIAAgXQgEgHgIAAQgGAAgDAFg");
	this.shape_287.setTransform(133.125,9.45);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_288.setTransform(127.725,10.45);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgGQADgHAGgDQAFgDAGgBQAKABAHAHQAHAIAAALIAAAAQAAAIgDAHQgDAFgFAEQgGAEgHgBQgJAAgIgHgAgKgNQgEAFAAAIQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_289.setTransform(122.1,10.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgPAUQgGgHAAgNIAAAAQAAgIADgFQACgHAGgDQAFgDAGgBQAJABAGAFQAGAGAAAIIgIAAQgBgFgDgEQgEgDgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAEgDAEQgDAFgFACQgEADgGgBQgKABgGgIg");
	this.shape_290.setTransform(116.725,10.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgVAfQgHgFAAgJQAAgFADgFQADgEAIgFIgGgJQgCgEAAgDQAAgJAFgEQAFgEAIgBQAGAAAFAFQAFAEAAAHQAAAEgCAEQgDADgFAEIgEAEIAPASQADgHAAgIIAIAAQAAANgGAJIAKALIgLAAIgEgFIgIAFIgJABQgLABgGgGgAgLAEQgIAGAAAHQABAFADADQAEAEAHAAQAGAAAFgFIgQgVgAgLgaQgBADAAAFQgBAEAGAHIAGgEIAEgFIABgEQAAgEgDgCQgCgCgDAAQgEAAgDACg");
	this.shape_291.setTransform(108.7,9.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgKAZQgEgCgDgEQgDgEAAgFIAJAAQABAFADACQADADAFAAQAFAAADgCQADgCAAgDQAAgEgDgCQgCgCgHgBIgKgEIgGgEQgCgDAAgEQAAgHAGgEQAFgEAHgBQAJAAAGAGQAGAEAAAHIgJAAQAAgEgEgCQgCgDgGAAQgEAAgCACQgDACAAAEQAAADADACIAIADIALADQAEABACAEQACADAAAEQAAAHgGAEQgFAFgJgBQgFABgGgDg");
	this.shape_292.setTransform(100.25,10.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AAcAbIAAgiQAAgFgDgDQgCgDgGAAQgGAAgDADQgDADgBAFIAAAiIgIAAIAAghQAAgMgLAAQgJAAgDAHIAAAmIgJAAIAAg0IAJAAIAAAGQAGgHAJAAQAMAAACAJQADgEAEgCQAFgDAFAAQASAAAAATIAAAig");
	this.shape_293.setTransform(93.35,10.45);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAJIgFgBQgIAAgDAHIAAAlg");
	this.shape_294.setTransform(87.525,10.45);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgPAUQgHgGAAgNIAAgBQAAgHAEgGQADgGAFgEQAFgDAGgBQAKAAAGAIQAFAGAAANIAAACIgjAAQABAJAEAFQAFAEAFAAQAFAAAEgCIAFgFIAFAEQgGALgNgBQgKABgHgIgAgHgPQgFAEAAAIIAZAAIAAgBQAAgIgDgDQgDgEgGAAQgFAAgDAEg");
	this.shape_295.setTransform(83,10.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgEAjIAAg+IgWAAIAAgIIA1AAIAAAIIgXAAIAAA+g");
	this.shape_296.setTransform(77.35,9.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AAAAGIgIAOIgGgEIAJgOIgOgDIACgIIAPAGIgBgRIAHAAIgBARIAPgFIACAHIgPAEIAKANIgGAFg");
	this.shape_297.setTransform(72.2,8.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,1.7,230.7,124), null);


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
	this.instance.setTransform(59.15,81.7,1,1,0,0,0,42.1,15.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({y:88.5,alpha:1},17,cjs.Ease.quadOut).wait(12));

	// Symbol 19
	this.instance_1 = new lib.Symbol19();
	this.instance_1.setTransform(64.2,26.25,1,1,0,0,0,27.5,15.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({y:32.95,alpha:1},17,cjs.Ease.quadOut).wait(25));

	// Symbol 20
	this.instance_2 = new lib.Symbol20();
	this.instance_2.setTransform(66.25,-52.85,1,1,0,0,0,35.3,15.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-42.75,alpha:1},17,cjs.Ease.quadOut).wait(39));

	// Symbol 16
	this.instance_3 = new lib.Symbol16();
	this.instance_3.setTransform(63.25,12.45,0.5,0.1257,90,0,0,1.1,17.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({regY:17.3,scaleY:1,x:63.2},12,cjs.Ease.quadOut).wait(34));

	// Symbol 16
	this.instance_4 = new lib.Symbol16();
	this.instance_4.setTransform(63.25,69.45,0.5,0.1975,90,0,0,1.1,17.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({regY:17.3,scaleY:1,x:63.2},11,cjs.Ease.quadOut).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.1,-68.1,184.6,185.1);


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
	this.frame_67 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(67).call(this.frame_67).wait(1));

	// Layer_10 copy 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_49 = new cjs.Graphics().p("AEgIlIAAlEIAyAAIAAFEg");
	var mask_graphics_50 = new cjs.Graphics().p("ADGIlIAAlEICqAAIAAFEg");
	var mask_graphics_51 = new cjs.Graphics().p("ABsIlIAAlEIEhAAIAAFEg");
	var mask_graphics_52 = new cjs.Graphics().p("AAUIlIAAlEIGWAAIAAFEg");
	var mask_graphics_53 = new cjs.Graphics().p("AhAIlIAAlEIIHAAIAAFEg");
	var mask_graphics_54 = new cjs.Graphics().p("AiTIlIAAlEIJ1AAIAAFEg");
	var mask_graphics_55 = new cjs.Graphics().p("AjiIlIAAlEILeAAIAAFEg");
	var mask_graphics_56 = new cjs.Graphics().p("AksIlIAAlEINAAAIAAFEg");
	var mask_graphics_57 = new cjs.Graphics().p("AlyIlIAAlEIOdAAIAAFEg");
	var mask_graphics_58 = new cjs.Graphics().p("AmyIlIAAlEIPyAAIAAFEg");
	var mask_graphics_59 = new cjs.Graphics().p("AnrIlIAAlEIQ+AAIAAFEg");
	var mask_graphics_60 = new cjs.Graphics().p("AofIlIAAlEISDAAIAAFEg");
	var mask_graphics_61 = new cjs.Graphics().p("ApKIlIAAlEIS8AAIAAFEg");
	var mask_graphics_62 = new cjs.Graphics().p("ApvIlIAAlEITtAAIAAFEg");
	var mask_graphics_63 = new cjs.Graphics().p("AqJIlIAAlEIUTAAIAAFEg");
	var mask_graphics_64 = new cjs.Graphics().p("AqXIlIAAlEIUvAAIAAFEg");
	var mask_graphics_65 = new cjs.Graphics().p("AqfIlIAAlEIU/AAIAAFEg");
	var mask_graphics_66 = new cjs.Graphics().p("AqiIlIAAlEIVFAAIAAFEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(49).to({graphics:mask_graphics_49,x:33.8184,y:54.875}).wait(1).to({graphics:mask_graphics_50,x:36.79,y:54.875}).wait(1).to({graphics:mask_graphics_51,x:39.7362,y:54.875}).wait(1).to({graphics:mask_graphics_52,x:42.6319,y:54.875}).wait(1).to({graphics:mask_graphics_53,x:45.4525,y:54.875}).wait(1).to({graphics:mask_graphics_54,x:48.1738,y:54.875}).wait(1).to({graphics:mask_graphics_55,x:50.7726,y:54.875}).wait(1).to({graphics:mask_graphics_56,x:53.2268,y:54.875}).wait(1).to({graphics:mask_graphics_57,x:55.5153,y:54.875}).wait(1).to({graphics:mask_graphics_58,x:57.6188,y:54.875}).wait(1).to({graphics:mask_graphics_59,x:59.5192,y:54.875}).wait(1).to({graphics:mask_graphics_60,x:61.2004,y:54.875}).wait(1).to({graphics:mask_graphics_61,x:62.6479,y:54.875}).wait(1).to({graphics:mask_graphics_62,x:63.8495,y:54.875}).wait(1).to({graphics:mask_graphics_63,x:64.5594,y:54.875}).wait(1).to({graphics:mask_graphics_64,x:64.5471,y:54.875}).wait(1).to({graphics:mask_graphics_65,x:64.5397,y:54.875}).wait(1).to({graphics:mask_graphics_66,x:56.9113,y:54.875}).wait(2));

	// Symbol 25
	this.instance = new lib.Symbol33();
	this.instance.setTransform(93.55,95.1,1,1,0,0,0,23.4,6.9);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).wait(19));

	// Layer_10 copy 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_25 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AspGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AsfGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AsRGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AsFGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_51 = new cjs.Graphics().p("Ar7GvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_52 = new cjs.Graphics().p("ArzGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_53 = new cjs.Graphics().p("ArtGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_54 = new cjs.Graphics().p("ArqGvIAAlDIZTAAIAAFDg");
	var mask_1_graphics_55 = new cjs.Graphics().p("ArpGvIAAlDIZTAAIAAFDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_1_graphics_25,x:-67.9008,y:43.125}).wait(1).to({graphics:mask_1_graphics_26,x:-59.4381,y:43.125}).wait(1).to({graphics:mask_1_graphics_27,x:-50.9986,y:43.125}).wait(1).to({graphics:mask_1_graphics_28,x:-42.6054,y:43.125}).wait(1).to({graphics:mask_1_graphics_29,x:-34.2815,y:43.125}).wait(1).to({graphics:mask_1_graphics_30,x:-26.0498,y:43.125}).wait(1).to({graphics:mask_1_graphics_31,x:-17.9328,y:43.125}).wait(1).to({graphics:mask_1_graphics_32,x:-9.9527,y:43.125}).wait(1).to({graphics:mask_1_graphics_33,x:-2.1315,y:43.125}).wait(1).to({graphics:mask_1_graphics_34,x:5.5094,y:43.125}).wait(1).to({graphics:mask_1_graphics_35,x:12.9492,y:43.125}).wait(1).to({graphics:mask_1_graphics_36,x:20.1673,y:43.125}).wait(1).to({graphics:mask_1_graphics_37,x:27.144,y:43.125}).wait(1).to({graphics:mask_1_graphics_38,x:33.8603,y:43.125}).wait(1).to({graphics:mask_1_graphics_39,x:40.2976,y:43.125}).wait(1).to({graphics:mask_1_graphics_40,x:46.4383,y:43.125}).wait(1).to({graphics:mask_1_graphics_41,x:52.2657,y:43.125}).wait(1).to({graphics:mask_1_graphics_42,x:57.7637,y:43.125}).wait(1).to({graphics:mask_1_graphics_43,x:62.9172,y:43.125}).wait(1).to({graphics:mask_1_graphics_44,x:67.7122,y:43.125}).wait(1).to({graphics:mask_1_graphics_45,x:72.1355,y:43.125}).wait(1).to({graphics:mask_1_graphics_46,x:76.1749,y:43.125}).wait(1).to({graphics:mask_1_graphics_47,x:79.8195,y:43.125}).wait(1).to({graphics:mask_1_graphics_48,x:82.0291,y:43.125}).wait(1).to({graphics:mask_1_graphics_49,x:83.4421,y:43.125}).wait(1).to({graphics:mask_1_graphics_50,x:84.6443,y:43.125}).wait(1).to({graphics:mask_1_graphics_51,x:85.6324,y:43.125}).wait(1).to({graphics:mask_1_graphics_52,x:86.4038,y:43.125}).wait(1).to({graphics:mask_1_graphics_53,x:86.9563,y:43.125}).wait(1).to({graphics:mask_1_graphics_54,x:87.2884,y:43.125}).wait(1).to({graphics:mask_1_graphics_55,x:87.3992,y:43.125}).wait(13));

	// Symbol 24
	this.instance_1 = new lib.Symbol32();
	this.instance_1.setTransform(93.75,70.05,1,1,0,0,0,78.9,5.4);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).wait(43));

	// Layer_10 copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_9 = new cjs.Graphics().p("ADVEmIAAlDIAzAAIAAFDg");
	var mask_2_graphics_10 = new cjs.Graphics().p("ACmEmIAAlDICAAAIAAFDg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AB3EmIAAlDIDOAAIAAFDg");
	var mask_2_graphics_12 = new cjs.Graphics().p("ABIEmIAAlDIEbAAIAAFDg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AAaEmIAAlDIFmAAIAAFDg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AgTEmIAAlDIGxAAIAAFDg");
	var mask_2_graphics_15 = new cjs.Graphics().p("Ag/EmIAAlDIH5AAIAAFDg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AhqEmIAAlDIJAAAIAAFDg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AiUEmIAAlDIKFAAIAAFDg");
	var mask_2_graphics_18 = new cjs.Graphics().p("Ai8EmIAAlDILHAAIAAFDg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AjjEmIAAlDIMGAAIAAFDg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AkIEmIAAlDINDAAIAAFDg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AkqEmIAAlDIN7AAIAAFDg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AlLEmIAAlDIOxAAIAAFDg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AlpEmIAAlDIPiAAIAAFDg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AmEEmIAAlDIQPAAIAAFDg");
	var mask_2_graphics_25 = new cjs.Graphics().p("AmdEmIAAlDIQ4AAIAAFDg");
	var mask_2_graphics_26 = new cjs.Graphics().p("Am0EmIAAlDIReAAIAAFDg");
	var mask_2_graphics_27 = new cjs.Graphics().p("AnHEmIAAlDIR9AAIAAFDg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AnYEmIAAlDISZAAIAAFDg");
	var mask_2_graphics_29 = new cjs.Graphics().p("AnmEmIAAlDISwAAIAAFDg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AnxEmIAAlDITCAAIAAFDg");
	var mask_2_graphics_31 = new cjs.Graphics().p("An4EmIAAlDITOAAIAAFDg");
	var mask_2_graphics_32 = new cjs.Graphics().p("An9EmIAAlDITWAAIAAFDg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AosEmIAAlDITYAAIAAFDg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_2_graphics_9,x:26.3684,y:29.375}).wait(1).to({graphics:mask_2_graphics_10,x:29.4169,y:29.375}).wait(1).to({graphics:mask_2_graphics_11,x:32.4523,y:29.375}).wait(1).to({graphics:mask_2_graphics_12,x:35.4617,y:29.375}).wait(1).to({graphics:mask_2_graphics_13,x:38.4321,y:29.375}).wait(1).to({graphics:mask_2_graphics_14,x:41.3509,y:29.375}).wait(1).to({graphics:mask_2_graphics_15,x:44.2055,y:29.375}).wait(1).to({graphics:mask_2_graphics_16,x:46.9837,y:29.375}).wait(1).to({graphics:mask_2_graphics_17,x:49.6737,y:29.375}).wait(1).to({graphics:mask_2_graphics_18,x:52.2638,y:29.375}).wait(1).to({graphics:mask_2_graphics_19,x:54.7431,y:29.375}).wait(1).to({graphics:mask_2_graphics_20,x:57.1009,y:29.375}).wait(1).to({graphics:mask_2_graphics_21,x:59.327,y:29.375}).wait(1).to({graphics:mask_2_graphics_22,x:61.4121,y:29.375}).wait(1).to({graphics:mask_2_graphics_23,x:63.347,y:29.375}).wait(1).to({graphics:mask_2_graphics_24,x:65.1237,y:29.375}).wait(1).to({graphics:mask_2_graphics_25,x:66.7343,y:29.375}).wait(1).to({graphics:mask_2_graphics_26,x:68.1721,y:29.375}).wait(1).to({graphics:mask_2_graphics_27,x:69.4309,y:29.375}).wait(1).to({graphics:mask_2_graphics_28,x:70.5053,y:29.375}).wait(1).to({graphics:mask_2_graphics_29,x:71.3907,y:29.375}).wait(1).to({graphics:mask_2_graphics_30,x:72.0834,y:29.375}).wait(1).to({graphics:mask_2_graphics_31,x:72.5802,y:29.375}).wait(1).to({graphics:mask_2_graphics_32,x:72.8792,y:29.375}).wait(1).to({graphics:mask_2_graphics_33,x:68.4425,y:29.375}).wait(35));

	// Symbol 23
	this.instance_2 = new lib.Symbol31();
	this.instance_2.setTransform(94.05,41.7,1,1,0,0,0,40.8,7.1);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(59));

	// Layer_10 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AFMCpIAAlDIAyAAIAAFDg");
	var mask_3_graphics_1 = new cjs.Graphics().p("AEICpIAAlDICKAAIAAFDg");
	var mask_3_graphics_2 = new cjs.Graphics().p("ADFCpIAAlDIDgAAIAAFDg");
	var mask_3_graphics_3 = new cjs.Graphics().p("ACDCpIAAlDIE1AAIAAFDg");
	var mask_3_graphics_4 = new cjs.Graphics().p("ABDCpIAAlDIGHAAIAAFDg");
	var mask_3_graphics_5 = new cjs.Graphics().p("AAHCpIAAlDIHVAAIAAFDg");
	var mask_3_graphics_6 = new cjs.Graphics().p("AgxCpIAAlDIIeAAIAAFDg");
	var mask_3_graphics_7 = new cjs.Graphics().p("AhmCpIAAlDIJiAAIAAFDg");
	var mask_3_graphics_8 = new cjs.Graphics().p("AiWCpIAAlDIKgAAIAAFDg");
	var mask_3_graphics_9 = new cjs.Graphics().p("AjBCpIAAlDILXAAIAAFDg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AjmCpIAAlDIMHAAIAAFDg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AkFCpIAAlDIMvAAIAAFDg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AkdCpIAAlDINOAAIAAFDg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AkvCpIAAlDINlAAIAAFDg");
	var mask_3_graphics_14 = new cjs.Graphics().p("Ak5CpIAAlCINyAAIAAFCg");
	var mask_3_graphics_15 = new cjs.Graphics().p("Ak+CpIAAlDIN3AAIAAFDg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:38.1934,y:16.875}).wait(1).to({graphics:mask_3_graphics_1,x:40.1609,y:16.8776}).wait(1).to({graphics:mask_3_graphics_2,x:42.1068,y:16.8802}).wait(1).to({graphics:mask_3_graphics_3,x:44.0098,y:16.8827}).wait(1).to({graphics:mask_3_graphics_4,x:45.8491,y:16.8852}).wait(1).to({graphics:mask_3_graphics_5,x:47.6045,y:16.8875}).wait(1).to({graphics:mask_3_graphics_6,x:49.2568,y:16.8897}).wait(1).to({graphics:mask_3_graphics_7,x:50.7879,y:16.8917}).wait(1).to({graphics:mask_3_graphics_8,x:52.181,y:16.8936}).wait(1).to({graphics:mask_3_graphics_9,x:53.4209,y:16.8952}).wait(1).to({graphics:mask_3_graphics_10,x:54.4939,y:16.8967}).wait(1).to({graphics:mask_3_graphics_11,x:55.3883,y:16.8978}).wait(1).to({graphics:mask_3_graphics_12,x:56.0944,y:16.8988}).wait(1).to({graphics:mask_3_graphics_13,x:56.6043,y:16.8995}).wait(1).to({graphics:mask_3_graphics_14,x:56.9125,y:16.8999}).wait(1).to({graphics:mask_3_graphics_15,x:56.8681,y:16.875}).wait(53));

	// Symbol 22
	this.instance_3 = new lib.Symbol30();
	this.instance_3.setTransform(94.05,15.3,1,1,0,0,0,16.2,6.9);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(68));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.5,1.7,163.2,134);


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
	this.instance_2.setTransform(-25.55,164.2,1.0435,1.0435,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(342));

	// Layer_4 copy 5
	this.instance_3 = new lib.Symbol5copy3();
	this.instance_3.setTransform(-132.7,343.6,1.8461,1.8461,59.9987);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(342));

	// Layer_4 copy
	this.instance_4 = new lib.Symbol5copy3();
	this.instance_4.setTransform(-30.15,136.2,1.8461,1.8461,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(342));

	// Layer_4
	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(-36.7,8.8,1,1,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(342));

	// Layer_2 copy
	this.instance_6 = new lib.Symbol5();
	this.instance_6.setTransform(45.9,-22.2,0.68,0.68,-9.6942,0,0,1.4,1.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).wait(338));

	// Layer_2 copy 2
	this.instance_7 = new lib.Symbol5();
	this.instance_7.setTransform(45.8,-48.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(17).to({_off:false},0).wait(325));

	// Layer_2 copy 3
	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(101.8,-24.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).wait(332));

	// Layer_2
	this.instance_9 = new lib.Symbol5();
	this.instance_9.setTransform(45.8,-28.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).wait(328));

	// Layer_1 copy
	this.instance_10 = new lib.Symbol5copy2();
	this.instance_10.setTransform(-239.9,55.9,1.4729,1.4729,14.9991,0,0,1.3,1.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(17).to({_off:false},0).wait(325));

	// Layer_1
	this.instance_11 = new lib.Symbol5copy();
	this.instance_11.setTransform(-236.75,35.8,1.8077,1.8077,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(342));

	// Layer_7 copy
	this.instance_12 = new lib.Symbol5copy4();
	this.instance_12.setTransform(-249.55,-2,1.5458,1.5458,-178.5536,0,0,1.4,1.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(23).to({_off:false},0).wait(319));

	// Layer_7
	this.instance_13 = new lib.Symbol5copy3();
	this.instance_13.setTransform(-248.2,-22.4,1.0434,1.0434,-178.5536,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(342));

	// Layer_4 copy 3
	this.instance_14 = new lib.Symbol5copy3();
	this.instance_14.setTransform(-255.55,138.4,1.0434,1.0434,150.0013,0,0,1.5,1.3);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(5).to({_off:false},0).wait(337));

	// Layer_4 copy 4
	this.instance_15 = new lib.Symbol5copy3();
	this.instance_15.setTransform(-237.5,160.2,1.8461,1.8461,150.0007,0,0,1.4,1.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(8).to({_off:false},0).wait(334));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.2,-50.2,360.5,400.4);


// stage content:
(lib.MultiBank_200x600 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(104.35,292.85,0.9368,0.9368,0,0,0,67.7,1.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(225).to({_off:false},0).wait(217));

	// text1
	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(121.35,291.8,1,1,0,0,0,90.9,15.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).to({alpha:1},17).wait(119).to({alpha:0},15).to({_off:true},1).wait(216));

	// legat
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(136.95,492.9,0.7676,0.7676,0,0,0,163.5,30.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(111).to({_off:false},0).to({alpha:1},21).wait(310));

	// cta
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(100,432.95,0.3934,0.3934,0,0,0,180,41.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(91).to({_off:false},0).to({y:438.95,alpha:1},20).wait(331));

	// in gold
	this.instance_4 = new lib.Symbol10();
	this.instance_4.setTransform(100.85,155.45,1.2045,1.2033,0,0,0,94.2,59.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(433));

	// logo
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(99.15,46.85,0.1536,0.1527,0,0,0,509.8,63.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({alpha:1},12).wait(427));

	// sparks copy 3
	this.instance_6 = new lib.Symbol7();
	this.instance_6.setTransform(-11.15,-34.15,1,1,-90,0,0,1.3,1.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).wait(420).to({alpha:0},11).wait(1));

	// sparks copy 2
	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(188.85,645.85,1,1,90,0,0,1.3,1.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(17).to({_off:false},0).wait(413).to({alpha:0},11).wait(1));

	// sparks copy
	this.instance_8 = new lib.Symbol7();
	this.instance_8.setTransform(248.85,259.85,1,1,0,0,0,1.3,1.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).wait(429).to({alpha:0},11).wait(1));

	// sparks
	this.instance_9 = new lib.Symbol7();
	this.instance_9.setTransform(248.85,39.85,1,1,0,0,0,1.3,1.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).wait(424).to({alpha:0},11).wait(1));

	// bg
	this.instance_10 = new lib.Symbol21();
	this.instance_10.setTransform(101.5,165,1,1,0,0,0,168.5,125);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},12).wait(430));

	// blackbg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A5QWAIAAlUIAnAAIAAFUgA1mRFMAAAgnEMAu3AAAMAAAAmcIlSAAIAAAog");
	this.shape.setTransform(138.25,140.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(442));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-60,259,397.7,361.29999999999995);
// library properties:
lib.properties = {
	id: '4C67F3A136A92E4E81338A9018FE5B2A',
	width: 200,
	height: 600,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/CTA.png?1626168452623", id:"CTA"},
		{src:"images/left.png?1626168452623", id:"left"},
		{src:"images/right.png?1626168452623", id:"right"}
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