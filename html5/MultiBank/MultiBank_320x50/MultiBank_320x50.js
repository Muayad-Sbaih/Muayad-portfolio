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
	this.instance.setTransform(639,0);

	this.instance_1 = new lib.left();
	this.instance_1.setTransform(2,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(2,-20,765,270), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAbAkIAAg6IgYA6IgFAAIgYg6IAAA6IgKAAIAAhGIAOAAIAWA1IAAAAIAXg1IAOAAIAABGg");
	this.shape.setTransform(81.275,8.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAiQgGgDgGgFQgEgFgDgGQgDgHAAgIQAAgHADgHQADgHAEgFQAGgFAGgDQAHgCAHAAQAIAAAHACQAHADAEAFQAFAFADAHQADAHAAAHQAAAIgDAHQgDAGgFAFQgEAFgHADQgHADgIAAQgHAAgHgDgAgKgZQgFACgDAEQgEAEgCAFQgCAFAAAFQAAAGACAFQACAFAEAEQADAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEACgFQACgFAAgGQAAgFgCgFQgCgFgEgEQgDgEgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_1.setTransform(72.6,8.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAiQgHgDgFgFQgEgFgDgGQgDgHAAgIQAAgHADgHQADgHAEgFQAFgFAHgDQAHgCAHAAQAIAAAHACQAHADAFAFQAFAFADAHQACAHAAAHQAAAIgCAHQgDAGgFAFQgFAFgHADQgHADgIAAQgHAAgHgDgAgKgZQgFACgDAEQgEAEgCAFQgCAFAAAFQAAAGACAFQACAFAEAEQADAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEACgFQACgFAAgGQAAgFgCgFQgCgFgEgEQgDgEgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_2.setTransform(64.3,8.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAYAAQAFAAAEABIAGADQADACACADQABAEAAAEQAAAGgDAEQgDAEgGACIAGABIAFADIADAGQACADAAAEQAAAFgCAEQgCADgEACQgDADgFABQgEABgFABgAgOAbIAOAAIAEAAIAFgCIAEgEQABgCAAgEQAAgGgEgDQgEgEgGAAIgOAAgAgOgFIANAAIAEgBIAEgCIADgCIABgGQAAgDgCgEQgDgDgGAAIgOAAg");
	this.shape_3.setTransform(57.225,8.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAkIAAhGIArAAIAAAIIgiAAIAAAXIAgAAIAAAIIggAAIAAAfg");
	this.shape_4.setTransform(51.225,8.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAkIAAhGIAtAAIAAAIIgjAAIAAAWIAhAAIAAAIIghAAIAAAXIAlAAIAAAJg");
	this.shape_5.setTransform(45.275,8.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASAkIAAghIgjAAIAAAhIgKAAIAAhGIAKAAIAAAdIAjAAIAAgdIAKAAIAABGg");
	this.shape_6.setTransform(38.3,8.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLAhQgFgDgDgGQgCgGgBgGIgBgMIAAgHIACgJIACgHIAFgGIAGgFQAEgCAEABQAFgBAEACIAGAFQADADACADIADAHIABAJIAAAHIAAAMIgEAMQgDAGgFADQgEADgIAAQgGAAgFgDgAgFgaQgCACgCACIgCAFIgCAHIgBAFIAAAFIABAJIACAJQABAEADADQADADAEAAQAFAAADgDQADgDABgEIACgJIABgJIAAgFIgBgFIgCgHIgCgFQgCgCgCgCQgDgBgDAAQgCAAgDABg");
	this.shape_7.setTransform(29.025,8.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAhQgFgDgDgGQgCgGgBgGIgBgMIAAgHIACgJIACgHIAFgGIAGgFQAEgCAEABQAFgBAEACIAGAFQADADACADIADAHIABAJIAAAHIAAAMIgEAMQgDAGgFADQgEADgIAAQgGAAgFgDgAgFgaQgCACgCACIgCAFIgCAHIgBAFIAAAFIABAJIACAJQABAEADADQADADAEAAQAFAAADgDQADgDABgEIACgJIABgJIAAgFIgBgFIgCgHIgCgFQgCgCgCgCQgDgBgDAAQgCAAgDABg");
	this.shape_8.setTransform(23.475,8.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAgQgGgDgCgHIAKgDQABAEADACQAEADAEAAIAFgBIAEgDIAEgEIABgHQgBgIgEgDQgFgDgGAAIgIABQgDAAgEACIAAglIAmAAIAAAJIgcAAIgBASIADgBIACAAIADgBIABAAQAFAAAEACIAHAFQADADACAEQABADAAAGQAAAFgCAFIgFAHQgEADgEABQgFACgEAAQgHAAgGgEg");
	this.shape_9.setTransform(17.8,9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDAWQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBgAgDgMQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAgBgBQAAAAgBAAQAAgBAAAAg");
	this.shape_10.setTransform(13.75,10.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFAkIAAg8IgNANIgFgHIATgQIAIAAIAABGg");
	this.shape_11.setTransform(9.05,8.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEAkIAAg+IgXAAIAAgIIA3AAIAAAIIgXAAIAAA+g");
	this.shape_12.setTransform(1.125,8.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAiQgHgDgFgFQgEgFgDgGQgDgHAAgIQAAgHADgHQADgHAEgFQAFgFAHgDQAHgCAHAAQAIAAAHACQAHADAFAFQAFAFADAHQACAHAAAHQAAAIgCAHQgDAGgFAFQgFAFgHADQgHADgIAAQgHAAgHgDgAgKgZQgFACgDAEQgEAEgCAFQgCAFAAAFQAAAGACAFQACAFAEAEQADAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEACgFQACgFAAgGQAAgFgCgFQgCgFgEgEQgDgEgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_13.setTransform(-5.9,8.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEAkIAAg+IgXAAIAAgIIA3AAIAAAIIgXAAIAAA+g");
	this.shape_14.setTransform(-12.925,8.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-32.5,0.5,135.1,17.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AATAjIgng4IAAAAIAAA4IgKAAIAAhGIANAAIAmA6IAAAAIAAg6IAKAAIAABGg");
	this.shape.setTransform(164.625,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAjIAAhGIAtAAIAAAJIgjAAIAAAWIAhAAIAAAIIghAAIAAAWIAlAAIAAAJg");
	this.shape_1.setTransform(157.825,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAjQgGgDgEgFIAIgHQADAEAEACQAEACAEAAIAEgBIAFgCIADgEQACgCAAgDQgBgEgDgCIgFgEIgIgCIgIgEQgEgCgDgEQgCgEAAgHIABgGQABgEADgDIAHgEQAFgCAFAAIAMABQAFACAEAFIgIAHIgFgFQgEgBgEAAIgFABIgFACIgCAEIAAADQgBAFADACIAHAEIAHADIAJADQAEABACAEQADAEAAAGQAAAFgDAEIgEAHQgEADgEACQgFABgEAAQgHAAgGgCg");
	this.shape_2.setTransform(151.7,8.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAjIAAhGIAZAAQAGABAGACQAFABAEADQAFADACAEQADADACAEIADAIIAAAGQAAAHgCAGQgDAHgFAEQgFAFgHADQgHADgJAAgAgVAaIANAAQAGAAAFgBIAJgFQAEgDADgFQACgGAAgGIgBgHQgBgEgEgEQgDgFgFgCQgGgDgHgBIgPAAg");
	this.shape_3.setTransform(145.45,8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAjIgng4IAAAAIAAA4IgKAAIAAhGIANAAIAmA6IAAAAIAAg6IAKAAIAABGg");
	this.shape_4.setTransform(137.625,8.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAiQgGgDgGgFQgFgFgCgGQgDgHAAgIQAAgHADgHQACgHAFgFQAGgFAGgDQAHgCAHAAQAIAAAHACQAHADAEAFQAGAFACAHQADAHAAAHQAAAIgDAHQgCAGgGAFQgEAFgHADQgHADgIAAQgHAAgHgDgAgKgZQgFACgEAEQgDAEgBAFQgCAFgBAFQABAGACAFQABAFADAEQAEAEAFACQAFACAFAAQAGAAAFgCQAFgCAEgEQADgEACgFQACgFAAgGQAAgFgCgFQgCgFgDgEQgEgEgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_5.setTransform(129.5,8.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAjIAAhGIArAAIAAAJIgiAAIAAAXIAgAAIAAAIIggAAIAAAeg");
	this.shape_6.setTransform(122.725,8.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATAjIgng4IAAAAIAAA4IgKAAIAAhGIANAAIAmA6IAAAAIAAg6IAKAAIAABGg");
	this.shape_7.setTransform(112.825,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYAjIgHgRIghAAIgHARIgLAAIAfhGIAIAAIAeBGgAgNAJIAaAAIgNgfIAAAAg");
	this.shape_8.setTransform(105.325,8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAjIgbhGIALAAIAUA6IAVg6IALAAIgcBGg");
	this.shape_9.setTransform(98.65,8.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAjIAAhGIAtAAIAAAJIgjAAIAAAWIAhAAIAAAIIghAAIAAAWIAlAAIAAAJg");
	this.shape_10.setTransform(89.875,8.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAbAjIAAg4IgYA4IgFAAIgYg4IAAA4IgKAAIAAhGIAOAAIAWA1IAAAAIAXg1IAOAAIAABGg");
	this.shape_11.setTransform(82.075,8.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAYAjIgHgRIghAAIgHARIgLAAIAfhGIAIAAIAeBGgAgNAJIAaAAIgNgfIAAAAg");
	this.shape_12.setTransform(74.025,8.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATAjIgng4IAAAAIAAA4IgKAAIAAhGIANAAIAmA6IAAAAIAAg6IAKAAIAABGg");
	this.shape_13.setTransform(66.525,8.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAjIAAhGIAYAAQAHABAEACQAFABACADQADADABAEIABAHIgBAGQgBAEgDADIgHAEQgEACgHAAIgOAAIAAAegAgNgDIANAAIAEAAIAFgCIADgEQACgCAAgDQAAgEgCgCIgDgEIgFgCIgEAAIgNAAg");
	this.shape_14.setTransform(59.875,8.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAiQgGgDgGgFQgFgFgCgGQgDgHAAgIQAAgHADgHQACgHAFgFQAGgFAGgDQAHgCAHAAQAIAAAHACQAHADAEAFQAGAFACAHQADAHAAAHQAAAIgDAHQgCAGgGAFQgEAFgHADQgHADgIAAQgHAAgHgDgAgKgZQgFACgEAEQgDAEgBAFQgDAFAAAFQAAAGADAFQABAFADAEQAEAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEACgFQACgFAAgGQAAgFgCgFQgCgFgEgEQgDgEgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_15.setTransform(52.45,8.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXAjIAAhGIAtAAIAAAJIgjAAIAAAWIAhAAIAAAIIghAAIAAAWIAlAAIAAAJg");
	this.shape_16.setTransform(42.675,8.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAPAjIgggjIgBAAIAAAjIgKAAIAAhGIAKAAIAAAgIABAAIAeggIANAAIghAhIAkAlg");
	this.shape_17.setTransform(36.675,8.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMAgQgGgDgBgIIAKgCQAAAEACACQADADAEAAQADAAACgCIADgDIACgGIAAgGIAAgvIAKAAIAAAyQAAAHgCAEQgCAEgEADQgDACgDABIgGACQgHgBgFgEg");
	this.shape_18.setTransform(30.2,9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEAjIAAhGIAJAAIAABGg");
	this.shape_19.setTransform(26.675,8.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAjIAAhGIAKAAIAAA9IAfAAIAAAJg");
	this.shape_20.setTransform(23.1,8.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAjIAAhGIAJAAIAAA9IAgAAIAAAJg");
	this.shape_21.setTransform(17.9,8.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXAjIAAhGIAtAAIAAAJIgjAAIAAAWIAhAAIAAAIIghAAIAAAWIAlAAIAAAJg");
	this.shape_22.setTransform(12.075,8.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgeAjIAAhGIAYAAQAHABAGACQAGABAEADQAEADACAEQAEADABAEIACAIIABAGQAAAHgDAGQgCAHgFAEQgFAFgHADQgHADgJAAgAgVAaIANAAQAGAAAEgBIAKgFQAEgDADgFQABgGAAgGIgBgHQAAgEgDgEQgDgFgGgCQgFgDgIgBIgPAAg");
	this.shape_23.setTransform(5.25,8.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeAjIAAhGIAZAAQAGABAGACQAFABAEADQAFADACAEQADADACAEIACAIIABAGQAAAHgCAGQgDAHgFAEQgFAFgHADQgHADgJAAgAgVAaIANAAQAGAAAFgBIAJgFQAEgDADgFQACgGAAgGIgBgHQgBgEgEgEQgDgFgFgCQgGgDgHgBIgPAAg");
	this.shape_24.setTransform(-2.15,8.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEAjIAAhGIAJAAIAABGg");
	this.shape_25.setTransform(-7.425,8.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAbAjIAAg4IgYA4IgFAAIgYg4IAAA4IgKAAIAAhGIAOAAIAWA1IAAAAIAXg1IAOAAIAABGg");
	this.shape_26.setTransform(-13.325,8.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AATAjIgng4IAAAAIAAA4IgKAAIAAhGIANAAIAmA6IAAAAIAAg6IAKAAIAABGg");
	this.shape_27.setTransform(-21.825,8.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOAiQgHgDgEgFQgFgFgDgGQgDgHAAgIQAAgHADgHQADgHAFgFQAEgFAHgDQAHgCAHAAQAIAAAHACQAHADAFAFQAEAFAEAHQACAHAAAHQAAAIgCAHQgEAGgEAFQgFAFgHADQgHADgIAAQgHAAgHgDgAgKgZQgFACgDAEQgEAEgCAFQgBAFAAAFQAAAGABAFQACAFAEAEQADAEAFACQAFACAFAAQAGAAAFgCQAFgCAEgEQADgEACgFQACgFAAgGQAAgFgCgFQgCgFgDgEQgEgEgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_28.setTransform(-29.95,8.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18copy, new cjs.Rectangle(-51.3,0.5,237.2,17.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgeAjIAAhGIAYAAQAHABAGACQAGABADADQAFADADAEQADADABAEIADAIIAAAGQAAAHgDAGQgCAHgFAEQgFAFgHADQgIADgIAAgAgUAaIALAAQAHAAAEgBIAKgFQAEgDACgFQACgGAAgGIgBgHQgBgEgCgEQgDgFgGgCQgFgDgIgBIgOAAg");
	this.shape.setTransform(158.55,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAgQgFgDgCgIIAJgCQABAEADACQACADAEAAQACAAADgCIADgDIACgGIAAgGIAAgvIAKAAIAAAyQAAAHgDAEQgCAEgCADQgDACgEABIgGACQgIgBgEgEg");
	this.shape_1.setTransform(152,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAjIAAhGIAJAAIAABGg");
	this.shape_2.setTransform(148.475,8.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASAjIgSg4IgQA4IgKAAIgVhGIAKAAIAPA5IABAAIAQg5IAKAAIARA5IAQg5IAKAAIgUBGg");
	this.shape_3.setTransform(142.3,8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAjIAAhGIAYAAQAHABAGACQAGABAEADQAEADACAEQAEADABAEIACAIIABAGQAAAHgCAGQgDAHgFAEQgFAFgHADQgHADgJAAgAgVAaIANAAQAGAAAEgBIAKgFQAEgDADgFQABgGAAgGIgBgHQAAgEgDgEQgDgFgGgCQgGgDgHgBIgPAAg");
	this.shape_4.setTransform(133.95,8.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAjIAAhGIAJAAIAAA9IAgAAIAAAJg");
	this.shape_5.setTransform(127.9,8.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAjIAAhGIAtAAIAAAJIgjAAIAAAWIAhAAIAAAIIghAAIAAAWIAlAAIAAAJg");
	this.shape_6.setTransform(122.075,8.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AANAjIgRgeIgLAAIAAAeIgJAAIAAhGIAYAAQAHABAEACQAEABADADQACADABAEIABAHIgBAGQgBADgCADQgCACgEABQgDACgEAAIAUAggAgPgDIANAAIAFAAIAEgCIAEgEQABgCAAgDQAAgEgBgCIgEgEIgEgCIgFAAIgNAAg");
	this.shape_7.setTransform(116.125,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAjIAAhGIAtAAIAAAJIgjAAIAAAWIAhAAIAAAIIghAAIAAAWIAlAAIAAAJg");
	this.shape_8.setTransform(109.875,8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AASAjIgSg4IgQA4IgKAAIgVhGIAKAAIAPA5IABAAIARg5IAJAAIARA5IAQg5IAKAAIgUBGg");
	this.shape_9.setTransform(101.8,8.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeAjIAAhGIAYAAQAHABAGACQAFABAFADQAEADACAEQAEADABAEIACAIIABAGQAAAHgCAGQgDAHgFAEQgFAFgHADQgHADgJAAgAgVAaIANAAQAGAAAFgBIAJgFQAEgDADgFQABgGAAgGIAAgHQgBgEgEgEQgDgFgFgCQgFgDgIgBIgPAAg");
	this.shape_10.setTransform(90.65,8.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AANAjIgRgeIgLAAIAAAeIgJAAIAAhGIAYAAQAHABAEACQAEABADADQACADABAEIABAHIgBAGQgBADgCADQgCACgEABQgDACgEAAIAUAggAgPgDIANAAIAFAAIAEgCIAEgEQABgCAAgDQAAgEgBgCIgEgEIgEgCIgFAAIgNAAg");
	this.shape_11.setTransform(84.125,8.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAjIAAhGIAtAAIAAAJIgjAAIAAAWIAhAAIAAAIIghAAIAAAWIAlAAIAAAJg");
	this.shape_12.setTransform(77.875,8.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXAjIAAhGIAtAAIAAAJIgjAAIAAAWIAhAAIAAAIIghAAIAAAWIAlAAIAAAJg");
	this.shape_13.setTransform(71.775,8.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAjIAAhGIAKAAIAAA9IAfAAIAAAJg");
	this.shape_14.setTransform(66.3,8.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKAiQgFgCgEgDQgDgEgCgFQgCgFAAgHIAAgsIAJAAIAAArIABAHQABAEACADQACACAEACQADACAEABQAFgBADgCQAEgCACgCIADgHIABgHIAAgrIAJAAIAAAsQAAAHgCAFQgCAFgEAEQgDADgFACQgFACgGABQgFgBgFgCg");
	this.shape_15.setTransform(59.775,9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJAiQgIgDgFgFQgEgFgDgHQgDgHAAgHQAAgHAEgHQACgHAFgFQAFgFAHgDQAGgCAHAAQALAAAFACQAHADAEAEIgHAHQgEgEgFgCQgFgBgGAAQgEAAgGACQgEACgEAEQgDAEgCAFQgCAFAAAFQAAAGACAFQACAFAEAEQADAEAFACQAFACAGAAIAJgBIAIgDIAAgTIgQAAIAAgIIAaAAIAAAiIgGACIgIACIgHACIgGAAQgJAAgGgDg");
	this.shape_16.setTransform(52.15,8.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXAjIAAhGIAtAAIAAAJIgjAAIAAAWIAhAAIAAAIIghAAIAAAWIAlAAIAAAJg");
	this.shape_17.setTransform(45.625,8.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AANAjIgRgeIgLAAIAAAeIgJAAIAAhGIAYAAQAHABAEACQAEABADADQACADABAEIABAHIgBAGQgBADgCADQgCACgEABQgDACgEAAIAUAggAgPgDIANAAIAFAAIAEgCIAEgEQABgCAAgDQAAgEgBgCIgEgEIgEgCIgFAAIgNAAg");
	this.shape_18.setTransform(39.675,8.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXAjIAAhGIAtAAIAAAJIgjAAIAAAWIAhAAIAAAIIghAAIAAAWIAlAAIAAAJg");
	this.shape_19.setTransform(33.425,8.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJAiQgIgDgFgFQgEgFgDgHQgDgHAAgHQAAgHAEgHQACgHAFgFQAFgFAHgDQAGgCAHAAQALAAAFACQAHADAEAEIgHAHQgEgEgFgCQgFgBgGAAQgEAAgGACQgEACgEAEQgDAEgCAFQgCAFAAAFQAAAGACAFQACAFAEAEQADAEAFACQAFACAGAAIAJgBIAIgDIAAgTIgQAAIAAgIIAaAAIAAAiIgGACIgIACIgHACIgGAAQgJAAgGgDg");
	this.shape_20.setTransform(26.05,8.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKAiQgHgDgEgFQgFgFgDgHQgCgHAAgHQAAgHADgHQACgHAFgFQAFgFAGgDQAIgCAHAAQAJAAAGACQAHADAEAEIgHAHQgEgEgFgCQgFgBgFAAQgGAAgFACQgFACgDAEQgDAEgCAFQgCAFAAAFQAAAGACAFQACAFAEAEQADAEAGACQAEACAGAAIAJgBIAIgDIAAgTIgQAAIAAgIIAaAAIAAAiIgHACIgHACIgGACIgHAAQgIAAgIgDg");
	this.shape_21.setTransform(15.45,8.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEAjIAAhGIAJAAIAABGg");
	this.shape_22.setTransform(10.325,8.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgeAjIAAhGIAZAAQAGABAGACQAFABAEADQAFADACAEQADADACAEIADAIIAAAGQAAAHgCAGQgDAHgFAEQgFAFgHADQgIADgIAAgAgVAaIAMAAQAHAAAFgBIAJgFQAEgDADgFQACgGAAgGIgBgHQgCgEgDgEQgDgFgFgCQgGgDgHgBIgPAAg");
	this.shape_23.setTransform(5.4,8.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXAjIAAhGIAtAAIAAAJIgjAAIAAAWIAhAAIAAAIIghAAIAAAWIAlAAIAAAJg");
	this.shape_24.setTransform(-1.275,8.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgUAjIAAhGIAJAAIAAA9IAgAAIAAAJg");
	this.shape_25.setTransform(-6.75,8.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUAjIAAhGIAJAAIAAA9IAgAAIAAAJg");
	this.shape_26.setTransform(-11.95,8.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgOAiQgGgDgGgFQgFgFgCgGQgDgHAAgIQAAgHADgHQACgHAFgFQAGgFAGgDQAHgCAHAAQAIAAAHACQAHADAEAFQAGAFACAHQADAHAAAHQAAAIgDAHQgCAGgGAFQgEAFgHADQgHADgIAAQgHAAgHgDgAgKgZQgFACgEAEQgDAEgBAFQgDAFAAAFQAAAGADAFQABAFADAEQAEAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEACgFQACgFAAgGQAAgFgCgFQgCgFgEgEQgDgEgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_27.setTransform(-19.1,8.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEAjIgbhGIALAAIAUA6IAWg6IAKAAIgcBGg");
	this.shape_28.setTransform(-26.4,8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-52.3,0.5,237.2,17.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgUAfIAAg9IAVAAQAGAAAEACIAGAEIADAFIABAGIgBAGIgDAGIgGADQgEACgGAAIgMAAIAAAbgAgLgDIAKAAIAEAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBIADgDIABgFIgBgFIgDgDIgFgBIgEgBIgKAAg");
	this.shape.setTransform(232.425,13.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAeIgHgFIgFgIQgCgEAAgGIAAgmIAIAAIAAAlIABAGIADAGIAFAEQADACADAAQAEAAADgCQADgCACgCIADgGIAAgGIAAglIAJAAIAAAmQAAAGgCAEQgCAFgDADQgDADgFACQgEABgFAAQgEAAgFgBg");
	this.shape_1.setTransform(226.475,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAeQgGgDgEgEQgEgEgDgGQgCgGAAgHQAAgGACgGQADgGAEgEQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAEAEADAGQACAGAAAGQAAAHgCAGQgDAGgEAEQgEAEgGADQgGACgHAAQgGAAgGgCgAgJgWQgEACgDAEQgDADgCAEQgBAFAAAEQAAAFABAEIAFAIQADAEAEACQAFACAEAAQAFAAAFgCQAEgCADgEIAFgIQABgEAAgFQAAgEgBgFQgCgEgDgDQgDgEgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_2.setTransform(219.775,13.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALAfIgOgbIgJAAIAAAbIgJAAIAAg9IAVAAQAGAAAEACIAGAEIADAFIABAGIgBAGIgDAFIgFADIgHACIASAcgAgMgDIAKAAIAEAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBIADgDIABgFIgBgFIgDgDIgFgBIgEgBIgKAAg");
	this.shape_3.setTransform(213.825,13.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAeQgGgDgFgEQgEgFgCgGQgCgGAAgGQAAgGACgGQADgGAEgEQAEgEAGgDQAGgCAGAAQAIAAAGACQAFACAEAEIgGAGQgEgEgEgBQgEgCgFAAQgEAAgFACQgEACgDAEQgDADgCAEQgBAFAAAEQAAAFACAFQABAEAEADQADAEAEACQAEACAFAAIAIgBIAHgDIAAgRIgOAAIAAgHIAWAAIAAAeIgFACIgGACIgGABIgGAAQgHAAgGgCg");
	this.shape_4.setTransform(207.325,13.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANAfIgcgfIAAAAIAAAfIgJAAIAAg9IAJAAIAAAbIAAAAIAagbIAMAAIgdAdIAfAgg");
	this.shape_5.setTransform(199.35,13.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQAfIghgyIAAAyIgJAAIAAg9IALAAIAhAyIAAgyIAJAAIAAA9g");
	this.shape_6.setTransform(192.575,13.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVAfIgGgPIgcAAIgGAPIgKAAIAbg9IAHAAIAaA9gAgKAIIAVAAIgLgbg");
	this.shape_7.setTransform(186,13.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAfIAAg9IAUAAIAIABIAFADIAEAFQACADAAAEQAAAFgDADQgDAEgFABIAFABIAFADIACAFIABAGQAAAEgBADQgCADgDACIgHAEIgIABgAgMAXIAMAAIAEAAIAEgCIADgDQACgCAAgDQAAgFgEgDQgEgDgFAAIgMAAgAgMgEIALAAIAEgBIAEgBIACgDIABgEQAAgEgCgDQgDgDgFAAIgMAAg");
	this.shape_8.setTransform(180.375,13.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAfIAAg9IAHAAIAAA9g");
	this.shape_9.setTransform(176.275,13.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDAfIAAg1IgUAAIAAgIIAvAAIAAAIIgUAAIAAA1g");
	this.shape_10.setTransform(172.55,13.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAfIAAg9IAIAAIAAA1IAbAAIAAAIg");
	this.shape_11.setTransform(168.175,13.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJAeIgHgFIgFgIQgCgEAAgGIAAgmIAIAAIAAAlIABAGIADAGIAFAEQADACADAAQAEAAADgCQADgCACgCIADgGIAAgGIAAglIAJAAIAAAmQAAAGgCAEQgCAFgDADQgDADgFACQgEABgFAAQgEAAgFgBg");
	this.shape_12.setTransform(162.475,13.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAXAfIAAgyIgVAyIgEAAIgVgyIAAAAIAAAyIgIAAIAAg9IANAAIASAuIAUguIAMAAIAAA9g");
	this.shape_13.setTransform(155.45,13.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDAfIAAg1IgUAAIAAgIIAvAAIAAAIIgUAAIAAA1g");
	this.shape_14.setTransform(146.6,13.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAfIAAg9IAnAAIAAAIIgeAAIAAASIAcAAIAAAHIgcAAIAAAUIAgAAIAAAIg");
	this.shape_15.setTransform(141.65,13.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXAfIAAgyIgVAyIgEAAIgVgyIAAAAIAAAyIgIAAIAAg9IANAAIASAuIAUguIAMAAIAAA9g");
	this.shape_16.setTransform(134.85,13.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAfIAAg9IAIAAIAAA1IAbAAIAAAIg");
	this.shape_17.setTransform(126.625,13.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTAfIAAg9IAmAAIAAAIIgeAAIAAASIAcAAIAAAHIgcAAIAAAUIAfAAIAAAIg");
	this.shape_18.setTransform(121.55,13.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaAfIAAg9IAVAAQAGAAAFACQAFABAEADIAFAFIAFAHIACAHIAAAFQAAAGgCAFQgCAGgFAEQgEAFgGACQgHADgHAAgAgRAXIAKAAQAFAAAEgCQAFgBADgDQAEgDACgEQACgEAAgGIgBgGQgBgEgDgDQgCgEgFgDQgFgCgGAAIgMAAg");
	this.shape_19.setTransform(115.6,13.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQAfIghgyIAAAyIgJAAIAAg9IALAAIAhAyIAAgyIAJAAIAAA9g");
	this.shape_20.setTransform(108.775,13.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAVAfIgGgPIgdAAIgFAPIgKAAIAbg9IAHAAIAZA9gAgKAIIAVAAIgLgbg");
	this.shape_21.setTransform(102.2,13.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAQAfIAAgcIgfAAIAAAcIgIAAIAAg9IAIAAIAAAaIAfAAIAAgaIAIAAIAAA9g");
	this.shape_22.setTransform(95.925,13.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPAfIgPgyIgOAyIgJAAIgSg9IAJAAIAOAwIAOgwIAJAAIAOAwIABAAIANgwIAJAAIgSA9g");
	this.shape_23.setTransform(86.125,13.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAeIgHgFIgFgIQgCgEAAgGIAAgmIAIAAIAAAlIABAGIADAGIAFAEQADACADAAQAEAAADgCQADgCACgCIADgGIAAgGIAAglIAJAAIAAAmQAAAGgCAEQgCAFgDADQgDADgFACQgEABgFAAQgEAAgFgBg");
	this.shape_24.setTransform(78.875,13.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAQAfIghgyIAAAyIgJAAIAAg9IALAAIAhAyIAAgyIAJAAIAAA9g");
	this.shape_25.setTransform(69.925,13.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAVAfIgHgPIgbAAIgHAPIgKAAIAbg9IAIAAIAaA9gAgLAIIAXAAIgMgbg");
	this.shape_26.setTransform(63.35,13.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAVAfIgGgPIgdAAIgFAPIgKAAIAbg9IAHAAIAZA9gAgKAIIAVAAIgLgbg");
	this.shape_27.setTransform(57.2,13.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgTAfIAAg9IAmAAIAAAIIgeAAIAAASIAcAAIAAAHIgcAAIAAAUIAgAAIAAAIg");
	this.shape_28.setTransform(49.3,13.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMAeQgGgDgEgEQgEgEgDgGQgCgGAAgHQAAgGACgGQADgGAEgEQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAEAEADAGQACAGAAAGQAAAHgCAGQgDAGgEAEQgEAEgGADQgGACgHAAQgGAAgGgCgAgJgWQgEACgDAEQgDADgCAEQgBAFAAAEQAAAFABAEIAFAIQADAEAEACQAFACAEAAQAFAAAFgCQAEgCADgEIAFgIQABgEAAgFQAAgEgBgFQgCgEgDgDQgDgEgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_29.setTransform(42.825,13.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgDAfIAAg1IgUAAIAAgIIAvAAIAAAIIgUAAIAAA1g");
	this.shape_30.setTransform(36.7,13.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLAeQgFgCgDgEIAGgGQACADAEACQAEACADAAIADgBIAFgCIACgDIABgFQAAgDgCgCIgGgDIgFgDQgEgBgEgCQgEgBgCgEQgCgDAAgGIABgGIAEgGQACgCAEgCQAFgBAEAAIAJABQAGABADAFIgHAGQgCgDgDgBQgCgCgEAAIgEABIgFADIgBADIgBADQAAAEACACIAGADIAHADIAGACQAEABACAEQACADAAAFQAAAFgCADQgBAEgDACQgDADgDABIgIABQgGAAgFgCg");
	this.shape_31.setTransform(29.3,13.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAQAfIghgyIAAAyIgJAAIAAg9IALAAIAhAyIAAgyIAJAAIAAA9g");
	this.shape_32.setTransform(23.475,13.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAVAfIgGgPIgcAAIgHAPIgJAAIAbg9IAHAAIAaA9gAgKAIIAWAAIgMgbg");
	this.shape_33.setTransform(16.9,13.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgRAfIAAg9IAIAAIAAA1IAbAAIAAAIg");
	this.shape_34.setTransform(11.975,13.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgIAeQgGgDgFgEQgEgFgCgGQgCgGAAgGQAAgGACgGQADgGAEgEQAEgEAGgDQAGgCAGAAQAIAAAGACQAFACAEAEIgGAGQgEgEgEgBQgEgCgFAAQgEAAgFACQgEACgDAEQgDADgCAEQgBAFAAAEQAAAFACAFQABAEAEADQADAEAEACQAEACAFAAIAIgBIAHgDIAAgRIgOAAIAAgHIAWAAIAAAeIgFACIgGACIgGABIgGAAQgHAAgGgCg");
	this.shape_35.setTransform(5.825,13.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDAfIAAg1IgUAAIAAgIIAvAAIAAAIIgUAAIAAA1g");
	this.shape_36.setTransform(-2.3,13.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAVAfIgHgPIgcAAIgGAPIgKAAIAbg9IAHAAIAaA9gAgLAIIAWAAIgLgbg");
	this.shape_37.setTransform(-7.9,13.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAPAfIgPgyIgOAyIgJAAIgSg9IAJAAIAOAwIAOgwIAJAAIAOAwIABAAIANgwIAJAAIgSA9g");
	this.shape_38.setTransform(-15.125,13.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgIAeQgGgDgFgEQgEgFgCgGQgCgGAAgGQAAgGACgGQADgGAEgEQAEgEAGgDQAGgCAGAAQAIAAAGACQAFACAEAEIgGAGQgEgEgEgBQgEgCgFAAQgEAAgFACQgEACgDAEQgDADgCAEQgBAFAAAEQAAAFACAFQABAEAEADQADAEAEACQAEACAFAAIAIgBIAHgDIAAgRIgOAAIAAgHIAWAAIAAAeIgFACIgGACIgGABIgGAAQgHAAgGgCg");
	this.shape_39.setTransform(-25.225,13.425);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgTAfIAAg9IAmAAIAAAIIgeAAIAAASIAcAAIAAAHIgcAAIAAAUIAfAAIAAAIg");
	this.shape_40.setTransform(-30.9,13.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMAeQgGgDgEgEQgEgEgDgGQgCgGAAgHQAAgGACgGQADgGAEgEQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAEAEADAGQACAGAAAGQAAAHgCAGQgDAGgEAEQgEAEgGADQgGACgHAAQgGAAgGgCgAgJgWQgEACgDAEQgDADgCAEQgBAFAAAEQAAAFABAEIAFAIQADAEAEACQAFACAEAAQAFAAAFgCQAEgCADgEIAFgIQABgEAAgFQAAgEgBgFQgCgEgDgDQgDgEgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_41.setTransform(-37.375,13.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgDAfIgYg9IAJAAIASAxIAAAAIASgxIAKAAIgYA9g");
	this.shape_42.setTransform(-43.75,13.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-57.3,5.8,302.9,15.599999999999998), null);


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
	this.frame_111 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(111).call(this.frame_111).wait(1));

	// Symbol 18
	this.instance = new lib.Symbol18();
	this.instance.setTransform(-29.4,15.3,1,1,0,0,0,42.1,15.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},11,cjs.Ease.quadOut).wait(33).to({alpha:0},8,cjs.Ease.quadOut).to({_off:true},1).wait(59));

	// Symbol 19
	this.instance_1 = new lib.Symbol19();
	this.instance_1.setTransform(-15.2,15.3,1,1,0,0,0,27.5,15.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({alpha:1},12,cjs.Ease.quadOut).wait(29).to({alpha:0},8,cjs.Ease.quadOut).to({_off:true},1).wait(18));

	// Symbol 20
	this.instance_2 = new lib.Symbol18copy();
	this.instance_2.setTransform(-29.4,15.3,1,1,0,0,0,42.1,15.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).to({alpha:1},12,cjs.Ease.quadOut).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.8,0.5,238.2,17.3);


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
p.nominalBounds = new cjs.Rectangle(0,-7.5,360,89.5);


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
	this.instance_9.setTransform(588.1,-204.1,1.4729,1.4729,14.9991,0,0,1.3,1.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},0).wait(325));

	// Layer_1 copy 3
	this.instance_10 = new lib.Symbol5copy();
	this.instance_10.setTransform(573.25,-164.2,1.8077,1.8077,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(342));

	// Layer_7 copy 2
	this.instance_11 = new lib.Symbol5copy4();
	this.instance_11.setTransform(584.45,-254,1.5458,1.5458,-178.5536,0,0,1.4,1.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({_off:false},0).wait(319));

	// Layer_7 copy 3
	this.instance_12 = new lib.Symbol5copy3();
	this.instance_12.setTransform(559.8,-282.4,1.0434,1.0434,-178.5536,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(342));

	// Layer_4 copy 5
	this.instance_13 = new lib.Symbol5copy3();
	this.instance_13.setTransform(584.45,-121.6,1.0434,1.0434,150.0013,0,0,1.5,1.3);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).wait(337));

	// Layer_4 copy 6
	this.instance_14 = new lib.Symbol5copy3();
	this.instance_14.setTransform(583.65,-206.3,1.8461,1.8461,150.0007,0,0,1.4,1.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(8).to({_off:false},0).wait(334));

	// Layer_1 copy
	this.instance_15 = new lib.Symbol5copy2();
	this.instance_15.setTransform(592.1,215.9,1.4729,1.4729,14.9991,0,0,1.3,1.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(17).to({_off:false},0).wait(325));

	// Layer_1
	this.instance_16 = new lib.Symbol5copy();
	this.instance_16.setTransform(571.25,175.8,1.8077,1.8077,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(342));

	// Layer_7 copy
	this.instance_17 = new lib.Symbol5copy4();
	this.instance_17.setTransform(582.45,158,1.5458,1.5458,-178.5536,0,0,1.4,1.4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(23).to({_off:false},0).wait(319));

	// Layer_7
	this.instance_18 = new lib.Symbol5copy3();
	this.instance_18.setTransform(559.8,117.6,1.0434,1.0434,-178.5536,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(342));

	// Layer_4 copy 3
	this.instance_19 = new lib.Symbol5copy3();
	this.instance_19.setTransform(576.45,298.4,1.0434,1.0434,150.0013,0,0,1.5,1.3);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(5).to({_off:false},0).wait(337));

	// Layer_4 copy 4
	this.instance_20 = new lib.Symbol5copy3();
	this.instance_20.setTransform(594.5,320.2,1.8461,1.8461,150.0007,0,0,1.4,1.4);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(8).to({_off:false},0).wait(334));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(551.3,-285.2,156,608.8);


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
	this.instance_1.setTransform(474.45,8.2,1.0435,1.0435,0,0,0,1.4,1.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(334));

	// Layer_4 copy 2
	this.instance_2 = new lib.Symbol5copy3();
	this.instance_2.setTransform(482.45,56.2,1.0435,1.0435,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(342));

	// Layer_4 copy
	this.instance_3 = new lib.Symbol5copy3();
	this.instance_3.setTransform(477.85,28.2,1.8461,1.8461,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(342));

	// Layer_4
	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(511.3,20.8,1,1,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(342));

	// Layer_2 copy
	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(513.9,-10.2,0.68,0.68,-9.6942,0,0,1.4,1.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(338));

	// Layer_2 copy 2
	this.instance_6 = new lib.Symbol5();
	this.instance_6.setTransform(513.8,-36.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({_off:false},0).wait(325));

	// Layer_2 copy 3
	this.instance_7 = new lib.Symbol5();
	this.instance_7.setTransform(569.8,-12.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(332));

	// Layer_2
	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(513.8,-16.65,1,1,-9.6946,0,0,1.3,1.3);
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
	this.instance_13.setTransform(-247.55,33.8,1.0434,1.0434,150.0013,0,0,1.5,1.3);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).wait(337));

	// Layer_4 copy 4
	this.instance_14 = new lib.Symbol5copy3();
	this.instance_14.setTransform(-229.5,55.6,1.8461,1.8461,150.0007,0,0,1.4,1.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(8).to({_off:false},0).wait(334));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.2,-38.2,820.5,101.7);


// stage content:
(lib.MultiBank_320x50 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(206.75,38.4,0.1749,0.1747,0,0,0,185,45.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(372).to({_off:false},0).to({y:40.15,alpha:1},16,cjs.Ease.quadOut).wait(54));

	// t2
	this.instance_1 = new lib.Symbol17();
	this.instance_1.setTransform(326.35,46.45,0.9667,0.9593,0,0,0,119.7,18.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(225).to({_off:false},0).wait(133).to({alpha:0},14).to({_off:true},1).wait(69));

	// text1
	this.instance_2 = new lib.Symbol13();
	this.instance_2.setTransform(202.6,39.45,0.7332,0.7289,0,0,0,91.8,16.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(76).to({_off:false},0).to({alpha:1},17).wait(117).to({alpha:0},15).to({_off:true},1).wait(216));

	// in gold
	this.instance_3 = new lib.Symbol10();
	this.instance_3.setTransform(205.25,16.15,0.4574,0.4551,0,0,0,107.1,30.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(433));

	// logo
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(59.4,-5.2,0.1064,0.1057,0,0,0,516.3,62.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({alpha:1},12).wait(427));

	// sparks copy
	this.instance_5 = new lib.Symbol7copy();
	this.instance_5.setTransform(170.9,298.85,0.4396,0.4396,-90,0,0,1.3,1.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).wait(427).to({alpha:0},11).wait(1));

	// sparks
	this.instance_6 = new lib.Symbol7();
	this.instance_6.setTransform(109.4,17.5,0.4396,0.4396,0,0,0,1.4,1.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).wait(427).to({alpha:0},11).wait(1));

	// bg
	this.instance_7 = new lib.Symbol21();
	this.instance_7.setTransform(63.1,54.95,0.4396,0.4396,0,0,0,168.5,125);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},12).wait(430));

	// blackbg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(442));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(150,16.2,184.10000000000002,93.7);
// library properties:
lib.properties = {
	id: '4C67F3A136A92E4E81338A9018FE5B2A',
	width: 320,
	height: 50,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/CTA.png?1626165851767", id:"CTA"},
		{src:"images/left.png?1626165851767", id:"left"},
		{src:"images/right.png?1626165851767", id:"right"}
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