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



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,700);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.prod1_1 = function() {
	this.initialize(img.prod1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,472);


(lib.prod1_2 = function() {
	this.initialize(img.prod1_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,158);


(lib.prod2_1 = function() {
	this.initialize(img.prod2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,423);


(lib.prod2_2 = function() {
	this.initialize(img.prod2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,122);


(lib.prod2_3 = function() {
	this.initialize(img.prod2_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,424);


(lib.prod2_4 = function() {
	this.initialize(img.prod2_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,117);// helper functions:

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


(lib.Symbol36 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhGBYIgBgBIABgBQAIAAADgDQAEgCAAgHIAAiTQAAgHgDgCQgEgDgHAAIgBAAIgBgBIABgBIBDgBQAhAAAQAJQARAKAAAXQAAAkg0AGQAbADAQAKQASALAAAUQAAAYgRAMQgSANgiAAgAgjBOQAAAIAEgBIAhAAQAZAAAMgLQALgKAAgYQAAgVgNgKQgNgKgaAAIghAAgAgihSIgBAEIAABJIAdAAQAYAAALgJQANgKAAgWQAAgWgNgJQgKgGgagBIgYAAIgDACg");
	this.shape.setTransform(7.175,8.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,14.4,17.7), null);


(lib.Symbol35 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AjvBYQgIgIAAgMQAAgOAPgMQAQgOAjgNIAWgIQAAgXgHgJQgGgJgPAAQgPAAgJAMIgKARIgFADIgHABQgFAAgDgBQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgDACgDQADgEAEgCQALgHAMgFQARgGAMAAQAVAAAMALQAMAMAAAXIgBAeIgBAaQAAALACAFQABAFAEAAQADAAAFgFQAFgFACgEQAAAAAAAAQABgBAAAAQABAAAAAAQAAABABAAQAAAAAAAAQABABAAAAQAAAAAAABQgBAAAAAAQgPAVgOAAQgRAAAAgSIABgVQgHALgQANQgTAPgMAAQgPAAgKgIgAi0ATQgeAMgJAHQgKAIAAAOQAAAKAKAIQAIAHAKAAQAKAAAOgOQALgLAGgKIABgLIABgZIAAgEgAgCBeQABgMAAgPQgJAOgPAHQgOAIgQAAQgXAAgQgRQgRgRAAgaQAAgfAYgUQAXgVAdAAQASAAAQAMIAAgqQAAgSgCgDQgCgEgKAAIgBgBIABgBIAUgBIANgBIACAAIAAACQgBAMAAAPIAAAvIgBAAIAABSQAAATACAEQACAFAKAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAQgUAAgMADIgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAgAhQgQQgMAPAAAbQAAAYANASQAOAUAXAAQAMAAAMgHQAKgHAHgLIAAhEQgKgLgJgFQgNgJgNAAQgWAAgMAOgAA4BPQgSgRAAgbQAAgdAXgVQAXgVAcAAQAZAAANANQAKAKgCAMQgBAHgKAAIhbAAQgCAJAAAKQAAAYATAQQASAQAbAAQAXAAARgNQAPgMAMgYIAAgiQAAgJgNgKQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAKgEIAJgHIABABQAEADADAGQAEAHABAHQADgNAOgJQAHgEAIAAQAMAAAAAFQAAAEgDAEQgEAFgGAAIgKAAQgOAAgDAEQgEAEAAAQIAABVIARAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgzAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAKAAACgEQADgEAAgUIAAgYQgNAYgTAPQgWASgaAAQgfAAgSgRgABLgVQgOAJgFAPIBCAAQAIAAADgDQACgBAAgGQAAgIgIgHQgJgIgOAAQgQAAgNAJg");
	this.shape.setTransform(24.825,9.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,49.7,19.3), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmCB3QgMgJAAgOQAAgPAOgMQAMgLASgGQgRgBgIgEQgKgEAAgJQAAgJAKgHQALgHARgCQgSgCgJgKQgLgLAAgSQAAgTAQgOQARgNAXAAQAQAAAVgEIAWgEQAIAAAAADQAAAEgDAEQgEADgFAAIgUgCQgRgCgLAAIAAAAQAVACALAMQALAMAAASQAAATgQANQgPALgZAAIgEAAQgPACgHACQgJAEAAAGQAAAGAIACQAHACATAAIAkAAQAVABAMAHQAJAIAAAMQAAAcgeATQgcASgiABQgUAAgMgKgAl2BCQgMAKAAAKQAAANANAIQAMAHAXAAIABAAQAZABAVgNQAVgNAAgPQAAgMgKgFQgKgFgXAAIggAAQgSAFgLAJgAlxgjQAAAUAJALQAIALAQAAQAQAAAJgJQAJgKAAgUQAAgSgIgMQgKgNgPAAQgiAAAAAogAGOA1IgBgCQADgJAAgPQgFAGgHAHQgRANgSAAQgUAAgLgKQgOgNAAgdIAAguQAAgUgCgDQgCgFgKAAIgBgBIABgBIAUgBIAOgBQAAgBAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABACIgBAIIgBARIAAA2QAAAWALAKQAJAJAOAAQANAAAOgLIALgLIAAhGQAAgSgCgEQgDgEgJAAIgBgBIABgBIAUgBIAOgBQAAgBAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIABACIgBAIIgBARIAABHQAAASACAFQACAFAKAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAABAAAAIgVABIgOABIgBAAIAAAAgAicA1IAAgCQACgJAAgPQgEAGgIAHQgQANgTAAQgUAAgLgKQgOgNAAgdIAAguQAAgUgCgDQgCgFgKAAIgBgBIABgBIAUgBIAOgBQAAgBAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAAACIgBAIIgBARIAAA2QAAAWALAKQAJAJAOAAQAOAAANgLIALgLIAAhGQAAgSgCgEQgCgEgKAAIgBgBIABgBIAUgBIAOgBQAAgBAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAAACIgBAIIgBARIAABHQAAASACAFQADAFAJAAIABABIgBABIgUABIgOABIgCAAIAAAAgAm1A1IAAgCQACgJAAgPQgEAGgIAHQgQANgSAAQgVAAgLgKQgOgNAAgdIAAguQAAgUgCgDQgCgFgKAAIgBgBIABgBIAVgBIANgBQABgBAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAACIAAAIIgBARIAAA2QAAAWAKAKQAJAJAOAAQAOAAAOgLQAGgGAEgFIAAhGQAAgSgCgEQgCgEgKAAIgBgBIABgBIAVgBIANgBQAAgBAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAAACIgBAIIgBARIAABHQAAASACAFQADAFAKAAIABABIgBABQgLgBgKACIgOABIgBAAIgBAAgAHPAyIgTgGQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgLIABgiQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAbALANQALAOAbAAQAjAAAAgZQAAgMgNgHQgIgFgVgGQgWgHgJgGQgOgJAAgNQAAgTAQgLQAOgIATgBIAYACIAUADQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgBAtQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgXgJgMQgKgMgXAAQgQgBgKAGQgKAGAAAJQAAAMANAIQAHAFAVAHQAXAHAJAGQAOAJAAAPQAAARgOALQgNALgVAAQgRAAgPgDgAAaAtQgGgJAAgSIAAhQIgPAAIAAgBIAAgBIAiglQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAAYIAkAAQAKAAAAABQAAACgNALIghAAIAABPQAAAOAEAHQAFAIAIgBQAGAAAIgGQAJgJAEgMQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQgGANgKAJQgMAKgPAAQgNAAgGgIgAhUAyIgTgGQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAIABgLIAAgiQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAbAKANQAMAOAbAAQAjAAAAgZQAAgMgNgHQgIgFgWgGQgWgHgJgGQgOgJAAgNQAAgTARgLQAOgIASgBIAZACIAUADQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIgBAtQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAgXgJgMQgKgMgWAAQgRgBgJAGQgKAGAAAJQAAAMAMAIQAIAFAVAHQAWAHAJAGQAPAJAAAPQAAARgOALQgOALgUAAQgRAAgPgDgADzAzQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQALgBADgFQADgDAAgRIAAg0QAAgWgLgKQgJgJgOAAQgNAAgOAMIgLALIAABGQAAARACADQADAFALABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAABAAAAIg0AAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQALgBACgFQADgDAAgRIAAhEQAAgTgCgEQgDgFgJAAIgBgBIABgBIAUgBIAOgBQABgBAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAACIgBAHIgBAQIAMgNQAQgMATAAQAUgBALALQAOANAAAcIAAAxQAAARACADQADAFALABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAABAAAAgABcAzQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAMgBACgFQADgDAAgRIAAhIQAAgRgCgEQgDgDgJAAIgBgBIABgBIAUgBIAOgBQAAgBAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABACIgBAIIgBASIAABIQAAARACADQADAFALABQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAgABshoQgEgFAAgFQAAgFAEgFQAEgEAGAAQAGAAAEAEQAEAFAAAFQAAAFgEAFQgEADgGABQgGgBgEgDg");
	this.shape.setTransform(54.275,12.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,108.6,25.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAmBYIgBgBIABgBQAMAAAAgKQAAgFgEgLIgPghIgNgcIg2AAIgRAnQgLAZAAANQAAAFAEADQAEACAHAAIABABIgBABIgvAAIgBgBIABgBQAFAAAGgDQAFgEAEgGQAKgPAIgWIAshlIADgJQACgLgQAAIgBgBIABgBIAZAAIACAAIAzBvQARAnAHAMQAFAFAEADQAGADAEAAIACABQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAgAAQgFIgag6IgYA6IAyAAg");
	this.shape.setTransform(9.75,8.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,19.5,17.7), null);


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
	this.shape.graphics.f("#000000").s().p("AovCWQgoAAAAgoIAAjbQAAgoAoAAIRfAAQAoAAAAAoIAADbQAAAogoAAg");
	this.shape.setTransform(60,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,120,30), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAVAqIgVhFIgVBFIgMAAIgPhTIAKAAIANBEIAAAAIAVhEIAJAAIAVBEIABAAIAMhEIAKAAIgPBTg");
	this.shape.setTransform(86.25,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAqQgGgDgFgGQgGgFgCgIQgEgJAAgLQAAgUALgLQALgMANAAQAPAAAKAMQAKALAAAUQAAALgCAJQgEAJgEAFQgFAFgGADQgHACgHAAQgGAAgGgCgAgRgZQgHAJAAAQQAAARAHAIQAHAKAKgBQALABAHgKQAHgIAAgRQAAgQgHgIQgHgJgLAAQgJgBgIAJg");
	this.shape_1.setTransform(76.3,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATAqIgmhCIAABCIgKAAIAAhTIALAAIAlBCIAAhCIALAAIAABTg");
	this.shape_2.setTransform(67.75,7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIAfAAQANAAAHAHQAIAGAAANQAAAMgIAGQgHAHgNgBIgVAAIAAAhgAgTAAIAVAAQAIAAAFgDQAFgEAAgIQAAgIgFgFQgGgEgIAAIgUAAg");
	this.shape_3.setTransform(56.825,7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMAqQgGgDgFgGQgGgFgCgIQgDgJAAgLQgBgUALgLQALgMANAAQAOAAALAMQALALgBAUQAAALgDAJQgCAJgGAFQgFAFgGADQgGACgHAAQgGAAgGgCgAgQgZQgIAJAAAQQAAARAHAIQAHAKAKgBQALABAHgKQAHgIAAgRQAAgQgHgIQgHgJgLAAQgKgBgGAJg");
	this.shape_4.setTransform(48.15,7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATAqIAAgnIglAAIAAAnIgKAAIAAhTIAKAAIAAAkIAlAAIAAgkIAKAAIAABTg");
	this.shape_5.setTransform(39.675,7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeANIAKgCQACANAFAFQAFAGALgBQAJABAFgFQAFgEAAgGQAAgGgFgDQgEgEgOgFQgOgDgFgFQgHgGAAgJQAAgJAHgHQAIgGALAAQAMAAAHAGQAJAGABALIgKACQgCgHgEgEQgEgFgJABQgHAAgEADQgFAEAAAFQAAAFAFADQADADANAFQAQAFAFAFQAHAFAAAKQgBAKgHAHQgIAHgOAAQgcAAgEgfg");
	this.shape_6.setTransform(31.75,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,120,16), null);


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
	this.shape.graphics.lf(["#733626","#F2BCA0","#DCA487","#AB6D4F","#A6684A"],[0,0.486,0.643,0.969,1],-429.1,0,154.9,0).s().p("AjdEWQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAQAXAAALgIQALgJAAgTIAAnWQAAgTgKgJQgLgIgYAAIAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAgBAAgBQABAAAAAAQABgBAAAAQABAAABAAIDSgBQBqAAAyAcQA3AfAABIQAABwikAWQBTAHAzAhQA4AmAAA+QAABJg1AnQg3AohtAAgAhwD1QAAAYAMAAIBqABQBQAAAkgjQAjgiAAhKQAAhEgoggQgpgghWAAIhmAAgAhtkHQgDAEAAALIAADmIBcAAQBMAAAlgdQAngfAAhGQAAhFgngbQgigXhSAAIhNAAQgHAAgCAEg");
	this.shape.setTransform(141.8823,10.0582,0.3172,0.3165);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#733626","#F2BCA0","#DCA487","#AB6D4F","#A6684A"],[0,0.486,0.643,0.969,1],-578.9,0,5.1,0).s().p("AkSCbQg5g2AAhVQAAhYBJhFQBIhEBYAAQBRAAAnApQAeAfgFAlQgDAZggAAIkeAAQgGAegBAgQAABKA8AzQA6AzBWAAQBIAAA0gqQAvglAlhLIAAhuQAAgcgngiQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQANgFAQgJQATgKAKgKQACgCADADQAMALAKAUQALAWADAWQALgqAtgbQAVgOAaAAQAmAAAAAPQAAANgKANQgMAQgUAAIgfAAQgtAAgLAMQgKANAAA0IAAEOIAzAAQAFAAAAADQAAAEgFAAIigAAQgGAAAAgEQAAgDAGAAQAfAAAHgNQAJgOAAg+IAAhNQgnBOg8AvQhFA4hTAAQhfAAg7g3gAjWijQgrAegPAxIDOAAQAZAAAJgIQAHgIAAgSQAAgagYgWQgcgZgsAAQg0AAgpAcg");
	this.shape_1.setTransform(189.3932,12.5747,0.3172,0.3165);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#733626","#F2BCA0","#DCA487","#AB6D4F","#A6684A"],[0,0.486,0.643,0.969,1],-521.4,0,62.6,0).s().p("ABxEoQAFglABguQgeAqgvAYQgsAYgyAAQhJAAgzg1Qg1g2AAhSQABhhBKhDQBJhBBdAAQA4AAAzAmIAAiHQgBg2gGgLQgHgLgeAAQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAAAABgBQAAAAABgBQABAAABAAQAhAAAfgDIAqgFQAEAAACACIABAFQgFAnAAAtIAACXIgBAAIAAEEQAAA9AFANQAHAPAeAAQAGAAAAAEQAAADgGAAQg9AAgoAIIgEABQgGAAAAgIgAiCg0QgoAvABBWQAABNAoA4QAuA/BJAAQAlAAAkgWQAigUAWgjIAAjaQgjgigZgRQgrgdgnAAQhFAAgmAug");
	this.shape_2.setTransform(171.1533,9.6165,0.3172,0.3165);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#733626","#F2BCA0","#DCA487","#AB6D4F","#A6684A"],[0,0.486,0.643,0.969,1],-476.5,0,107.5,0).s().p("Ai1C4QgbgZAAgnQAAgrAugmQA0gqBugqIBGgbQgChKgWgdQgUgbgtAAQguAAgdAjQgYAqgJANQgGAIgHADQgIADgRAAQgPAAgJgFQgJgFAAgIQAAgJAHgJQAIgLAOgJQAhgVAngPQA0gTAoAAQBAAAAkAiQAoAlAABMQAAAegDBBIgDBQQAAAkAFAPQAFAQANAAQAIAAAPgPQAPgOAHgNQAEgFAFADQAFADgDAFQgwBBgsAAQg3AAAAg5QAAgkADgeQgWAjgwApQg7AwgnAAQgxAAgcgagAACgiQhdAlgdAYQgeAZAAAsQAAAgAdAYQAbAXAgAAQAfAAAsgsQAjgjASggIACgkQADgjAAgpIAAgNg");
	this.shape_3.setTransform(156.9124,12.5905,0.3172,0.3165);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#733626","#F2BCA0","#DCA487","#AB6D4F","#A6684A"],[0,0.486,0.643,0.969,1],-12.5,0,571.5,0).s().p("AB4EXQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAAAABgBQAAAAABgBQABAAABAAQAnAAgBgfQgBgSgNghQgMgfgihLIgrhaIirAAIg3B9QgiBPAAApQAAARAOAJQAOAHAUAAQABAAABAAQABABAAAAQABABAAAAQAAABAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIiUAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAAAABgBQAAAAAAAAQABAAABAAIAAgBQARAAAQgKQARgMANgUQAdgvAchEICLlCQAGgPACgNQAFgkgzAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAIBRAAQAGAAABACICfFgQA4B6AXAmQAMARAQAKQAPAJAPAAQABABABAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgBAAgBAAgAAxgSIhTi3IhMC3ICfAAg");
	this.shape_4.setTransform(9.7385,10.1215,0.3172,0.3165);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#733626","#F2BCA0","#DCA487","#AB6D4F","#A6684A"],[0,0.486,0.643,0.969,1],-279.8,0,304.2,0).s().p("AA+DMQgEAAgBgDQABgEAEAAQAjAAAJgPQAIgNAAg1IAAikQgBhFghgiQgdgcgrAAQgqAAgrAlIgjAkIAADeQAAA1AHANQAJAPAiAAQAFAAABAEQgBADgFAAIikAAQgFAAAAgDQAAgEAFAAQAjAAAJgPQAHgNAAg1IAAjXQAAg+gGgNQgIgOgeAAQgBAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQABAAABAAQAgAAAhgDIAsgFQAEgBABACIABAGIgDAXQgEAZAAAbIAngpQAzgpA4AAQA/AAAkAiQArApAABYIAACcQgBA1AIANQAJAPAiAAQAFAAAAAEQAAADgFAAg");
	this.shape_5.setTransform(94.5142,12.494,0.3172,0.3165);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#733626","#F2BCA0","#DCA487","#AB6D4F","#A6684A"],[0,0.486,0.643,0.969,1],-246.7,0,337.3,0).s().p("AhSDMQgFAAAAgDQAAgEAFAAQAjAAAJgPQAIgNAAg1IAAjkQAAg2gHgMQgHgKgeAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAQAhAAAfgDIApgFQAFgBABACIABAGIgCAbQgDAdgBAcIAADkQAAA1AIANQAIAPAjAAQAFAAAAAEQAAADgFAAg");
	this.shape_6.setTransform(84.0223,12.494,0.3172,0.3165);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#733626","#F2BCA0","#DCA487","#AB6D4F","#A6684A"],[0,0.486,0.643,0.969,1],-246.5,0,337.5,0).s().p("AgeAeQgNgMAAgSQAAgQANgNQAMgMASAAQARAAAOAMQANANAAAQQAAASgNAMQgOAMgRAAQgSAAgMgMg");
	this.shape_7.setTransform(83.9509,2.3978,0.3172,0.3165);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#733626","#F2BCA0","#DCA487","#AB6D4F","#A6684A"],[0,0.486,0.643,0.969,1],-224,0,360,0).s().p("AhADbQgTgaAAg6IAAj/IguAAIgBgCQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIBrh3QAEgEAAAFIAABOQBUAAAcgBQAdgBAAADQAAAIgpAjIhmAAIAAD8QAAAsAOAWQANAXAaAAQATAAAZgWQAdgZANglQACgFAGADQAFACgCAFQgRAsgiAdQglAfgsAAQgrAAgTgbg");
	this.shape_8.setTransform(76.7996,11.4346,0.3172,0.3165);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#733626","#F2BCA0","#DCA487","#AB6D4F","#A6684A"],[0,0.486,0.643,0.969,1],-364.5,0,219.5,0).s().p("AhbDHIg9gSQgGgBAAgKIACgiQADgpAAhFQAAgFAEAAQAEAAABAFQgBBaAhAoQAjAsBWAAQBtAAAAhOQgBglgpgZQgYgPhDgWQhEgWgdgRQgtgdAAgsQABg5AzgiQAsgdA7AAQAsAAAhAEIA/AKQAGABAAAFIgFCOQABAFgFAAQgFAAAAgFQAAhNgcgkQgggnhGAAQg1AAgeASQgfASAAAfQAAAkAoAZQAYAPBBAWQBHAYAbARQAuAfAAAwQAAA1grAkQgsAjg/AAQg2AAgugLg");
	this.shape_9.setTransform(121.3982,12.5747,0.3172,0.3165);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#733626","#F2BCA0","#DCA487","#AB6D4F","#A6684A"],[0,0.486,0.643,0.969,1],-191.7,0,392.3,0).s().p("AhbDHIg9gSQgGgBAAgKIADgiQADgpgBhFQABgFAEAAQAEAAAAAFQAABaAhAoQAjAsBVAAQBtAAAAhOQAAglgpgZQgZgPhDgWQhEgWgcgRQgtgdAAgsQAAg5AzgiQAtgdA7AAQArAAAiAEIA+AKQAGABAAAFIgECOQAAAFgFAAQgEAAAAgFQAAhNgdgkQgfgnhHAAQg0AAgeASQgfASgBAfQAAAlApAYQAYAPBBAWQBGAYAcARQAtAfAAAwQAAA1gsAkQgrAjg/AAQg1AAgvgLg");
	this.shape_10.setTransform(66.5676,12.5747,0.3172,0.3165);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#733626","#F2BCA0","#DCA487","#AB6D4F","#A6684A"],[0,0.486,0.643,0.969,1],-105,0,479,0).s().p("AixE3QgkgdgBgsQAAgvAtgoQAlgiA7gUQg2gCgbgLQgfgNAAgcQAAgbAggVQAigXA1gGQg3gKgeggQghgkAAg4QAAg9AzgrQAygqBLAAQAvAABEgNIBGgMQAZAAgBALQAAAMgKAKQgLAMgQAAQgIgBg2gGQg2gIgiAAIAAABQBAAJAkAlQAkAlgBA4QAAA/gyAnQgxAmhMAAIgQAAQguAFgXAJQgcAKAAARQAAAVAbAIQAXAFA8ABIBvAAQBEAAAiAaQAfAYAAAlQAABWhfA/QhXA5hsAAQhAAAgmgdgAguBjQg5AQgjAdQglAeAAAhQAAArAoAXQAnAXBHAAIADAAQBOAABEgpQBCgpAAguQAAgmghgQQgggPhIgBgAh5iwQAAA8AaAlQAcAnAyAAQAyAAAcghQAbghAAg/QAAg4gagmQgdgpgvAAQhrgBAACBg");
	this.shape_11.setTransform(39.065,15.9538,0.3172,0.3165);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#733626","#F2BCA0","#DCA487","#AB6D4F","#A6684A"],[0,0.486,0.643,0.969,1],-324,0,260,0).s().p("ABqDPIgBgGQAHgeABgtQgOAUgZAVQgzApg4AAQhAAAgkgiQgrgpAAhYIAAiWQAAg8gHgOQgGgNgfAAQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAQAhAAAfgDIArgFQAEgBABACIABAGIgCAZQgCAcgBAcIAACsQAABFAiAiQAcAcAsAAQAqAAArgkQAWgTAMgSIAAjfQAAg3gHgNQgHgMgeAAQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAQAgAAAfgDIArgFQAEgBACACIABAGIgCAZQgDAcgBAcIAADfQAAA+AHANQAHAOAeAAQAFAAAAAEQAAADgFAAQggAAggAEIgtAEIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBg");
	this.shape_12.setTransform(108.551,12.6226,0.3172,0.3165);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#733626","#F2BCA0","#DCA487","#AB6D4F","#A6684A"],[0,0.486,0.643,0.969,1],-149.2,0,434.8,0).s().p("ABqDPIgBgGQAHgeABgtQgOAUgZAVQgzApg5AAQhAAAgjgiQgrgpAAhYIAAiWQAAg8gGgOQgIgNgeAAQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAQAgAAAfgDIArgFQAEgBACACIABAGIgCAZIgDA4IAACsQAABFAhAiQAdAcArAAQAqAAAsgkQAVgTANgSIAAjfQAAg3gHgNQgHgMgeAAQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAQAhAAAfgDIAqgFQAEgBABACIABAGIgCAZQgDAcAAAcIAADfQAAA+AHANQAHAOAeAAQAFAAAAAEQAAADgFAAQgfAAgiAEIgsAEIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBg");
	this.shape_13.setTransform(53.0859,12.6226,0.3172,0.3165);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#733626","#F2BCA0","#DCA487","#AB6D4F","#A6684A"],[0,0.486,0.643,0.969,1],-60.7,0,523.3,0).s().p("ABqDPIgBgGQAHgeABgtQgOAUgZAVQgzApg4AAQhAAAgkgiQgrgpAAhYIAAiWQAAg8gHgOQgHgNgeAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAQAhAAAfgDIAqgFQAFgBABACIABAGIgCAZQgDAcAAAcIAACsQAABFAhAiQAcAcAtAAQApAAAsgkQAVgTANgSIAAjfQAAg3gHgNQgHgMgeAAQgEAAAAgEQAAgDAEAAQAhAAAfgDIAqgFQAEgBACACIABAGIgDAZQgCAcgBAcIAADfQAAA+AHANQAHAOAfAAQAEAAAAAEQAAADgEAAQggAAgiAEIgsAEIgCAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBg");
	this.shape_14.setTransform(25.0203,12.6226,0.3172,0.3165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,199.9,26.8), null);


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
	this.shape.graphics.f().s("#CC6600").ss(1,2,0,3).p("EgUTgrvMAonAAAMAAABXfMgonAAA");
	this.shape.setTransform(130,280);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-1,-1,262,562), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,300,600), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,300,250), null);


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
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","rgba(255,255,255,0)"],[0,0.341,1],-82.1,150.2,0,-82.1,150.2,137.6).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,300,600), null);


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
	this.shape.graphics.f("#000000").s().p("AgRAbQgGgGgBgLIAJgCQABARAQAAQAHAAAEgDQADgCAAgFQABgFgEgCQgDgDgLgDQgLgCgGgEQgEgEAAgHQgBgHAHgFQAFgGALAAQAJAAAGAFQAHAFABAJIgIACQgEgMgLAAQgHAAgDACQgDADAAAEQAAAEADACIAOAFQAMADAFAEQAFAEgBAIQAAAHgFAGQgGAGgMAAQgMAAgHgHg");
	this.shape.setTransform(198.9,36.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAYQgJgJAAgPQAAgOAIgJQAIgKAMAAQANAAAIAJQAIAJAAAPIAAADIgvAAQAAAJAFAGQAFAHAJAAIAGgBIAFgCIAEgEIACgDIACgDIAHAFQgDAHgHAFQgHAFgJAAQgMAAgIgKgAATgEQAAgIgFgGQgEgGgKAAQgIAAgFAHQgFAGAAAHIAlAAIAAAAg");
	this.shape_1.setTransform(192.025,36.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_2.setTransform(186.75,34.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAPAsIgUghIgBAAIgJALIAAAWIgLAAIAAhXIALAAIAAA0IAAAAIAagcIAMAAIgXAYIAaAng");
	this.shape_3.setTransform(182.15,34.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAQAhIAAgmQAAgSgPAAQgGAAgFAFQgFAEAAAHIAAAoIgKAAIAAg/IAKAAIAAAGQADgDAFgCQAFgDAEAAQAKAAAHAHQAGAGABALIAAApg");
	this.shape_4.setTransform(174.75,36.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEAsIAAg/IAJAAIAAA/gAgFggIAAgLIALAAIAAALg");
	this.shape_5.setTransform(169.325,34.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAgIAAg+IAJAAIAAAGIABAAQABgDADgCQAEgCAEAAIADAAIACAAIAAABIgCAJIgFAAQgGAAgBAEQgDAEAAAIIAAAlg");
	this.shape_6.setTransform(165.675,36.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASAgIgSgzIAAAAIgSAzIgJAAIgOg/IAKAAIAKAvIARgvIAIAAIARAvIALgvIAKAAIgPA/g");
	this.shape_7.setTransform(158.275,36.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTAjQgIgJAAgPQAAgOAIgJQAIgKALAAQALAAAGAIIABAAIAAgeIAKAAIAABXIgJAAIAAgGIgBAAQgCADgFACQgFADgGAAQgMAAgHgKgAgMgGQgFAGAAALQAAAMAFAGQAFAHAIAAQAHAAAFgFQAFgEAAgFIAAgUQAAgFgFgFQgEgFgIAAQgIAAgFAHg");
	this.shape_8.setTransform(146.175,35.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAPAhIAAgmQAAgSgOAAQgGAAgFAFQgFAEABAHIAAAoIgKAAIAAg/IAKAAIAAAGQACgDAFgCQAFgDAFAAQAKAAAGAHQAHAGgBALIAAApg");
	this.shape_9.setTransform(139.05,36.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTAcQgFgFAAgIQAAgIAFgEQAEgDAMgDIAGgCIAEgCIAFgCIABgCIABgDQAAgEgCgDQgEgDgGAAQgMAAgDANIgJgDQACgIAGgFQAGgGAJAAQALAAAHAGQAGAFAAAMIAAAqIgJAAIAAgHQgCADgFADQgFADgHAAQgKAAgGgGgAgBADQgHACgEADQgCADAAAEQAAAKAMAAQAIAAAFgEQAEgEAAgGIAAgOQgBADgPADg");
	this.shape_10.setTransform(131.85,36.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgRAbQgGgGgBgLIAJgCQACARAPAAQAHAAADgDQAEgCAAgFQAAgFgDgCQgEgDgKgDQgMgCgEgEQgGgEAAgHQAAgHAHgFQAFgGALAAQAJAAAGAFQAHAFABAJIgIACQgEgMgLAAQgGAAgEACQgDADAAAEQAAAEADACIAOAFQAMADAFAEQAFAEgBAIQAAAHgFAGQgHAGgLAAQgMAAgHgHg");
	this.shape_11.setTransform(122.05,36.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTAYQgJgJAAgPQAAgOAIgJQAIgKAMAAQANAAAIAJQAIAJAAAPIAAADIgvAAQAAAJAFAGQAFAHAJAAIAGgBIAFgCIAEgEIACgDIACgDIAHAFQgDAHgHAFQgHAFgJAAQgMAAgIgKgAATgEQAAgIgFgGQgEgGgKAAQgIAAgFAHQgFAGAAAHIAlAAIAAAAg");
	this.shape_12.setTransform(115.175,36.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAQAhIAAgmQAAgSgPAAQgGAAgFAFQgEAEgBAHIAAAoIgKAAIAAg/IAKAAIAAAGQADgDAFgCQAFgDAEAAQAKAAAHAHQAGAGABALIAAApg");
	this.shape_13.setTransform(107.95,36.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEAsIAAg/IAJAAIAAA/gAgFggIAAgLIALAAIAAALg");
	this.shape_14.setTransform(102.525,34.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_15.setTransform(99.15,34.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTAYQgJgJAAgPQAAgOAIgJQAIgKAMAAQANAAAIAJQAIAJAAAPIAAADIgvAAQAAAJAFAGQAFAHAJAAIAGgBIAFgCIAEgEIACgDIACgDIAHAFQgDAHgHAFQgHAFgJAAQgMAAgIgKgAATgEQAAgIgFgGQgEgGgKAAQgIAAgFAHQgFAGAAAHIAlAAIAAAAg");
	this.shape_16.setTransform(211.825,22.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAQAhIAAgmQAAgSgPAAQgHAAgEAFQgEAEgBAHIAAAoIgJAAIAAg/IAJAAIAAAGQADgDAFgCQAFgDAEAAQALAAAGAHQAHAGAAALIAAApg");
	this.shape_17.setTransform(204.6,22.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgEAsIAAg/IAJAAIAAA/gAgFggIAAgLIALAAIAAALg");
	this.shape_18.setTransform(199.175,20.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHAsIAAg2IgJAAIAAgJIAJAAIAAgKQAAgIADgDQAEgDAGAAIAKAAIAAAJIgIAAQgEAAgBABQgCACAAAEIAAAIIAQAAIAAAJIgQAAIAAA2g");
	this.shape_19.setTransform(195.425,20.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHAsIAAg2IgJAAIAAgJIAJAAIAAgKQAAgIADgDQAEgDAGAAIAKAAIAAAJIgIAAQgEAAgBABQgCACAAAEIAAAIIAQAAIAAAJIgQAAIAAA2g");
	this.shape_20.setTransform(187.875,20.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUAZQgIgJAAgQQAAgPAJgJQAIgJALAAQAMAAAIAJQAJAJAAAPQAAAQgIAJQgIAJgNAAQgLAAgJgJgAgNgRQgFAGAAALQAAAMAFAGQAGAHAHAAQAIAAAGgHQAFgGAAgMQAAgLgFgGQgGgHgIAAQgHAAgGAHg");
	this.shape_21.setTransform(182.075,22.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgTAYQgJgJAAgPQAAgOAIgJQAIgKAMAAQANAAAIAJQAIAJAAAPIAAADIgvAAQAAAJAFAGQAFAHAJAAIAGgBIAFgCIAEgEIACgDIACgDIAHAFQgDAHgHAFQgHAFgJAAQgMAAgIgKgAATgEQAAgIgFgGQgEgGgKAAQgIAAgFAHQgFAGAAAHIAlAAIAAAAg");
	this.shape_22.setTransform(171.525,22.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTAZQgIgJAAgQQAAgPAJgJQAIgJALAAQAKAAAIAHQAHAGABALIgJACQgBgIgFgEQgEgFgHAAQgHAAgGAHQgFAGAAALQAAALAFAHQAFAHAIAAQAHAAAFgFQAEgGABgHIAKACQgCALgHAHQgHAHgLAAQgMAAgIgJg");
	this.shape_23.setTransform(164.475,22.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAQAhIAAgmQAAgSgPAAQgHAAgEAFQgEAEgBAHIAAAoIgJAAIAAg/IAJAAIAAAGQADgDAFgCQAFgDAEAAQALAAAGAHQAHAGAAALIAAApg");
	this.shape_24.setTransform(157.35,22.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgSAcQgGgFAAgIQAAgIAFgEQAFgDALgDIAGgCIAFgCIADgCIACgCIABgDQAAgEgDgDQgDgDgGAAQgNAAgCANIgJgDQACgIAFgFQAHgGAJAAQALAAAHAGQAGAFAAAMIAAAqIgJAAIAAgHQgCADgFADQgFADgHAAQgKAAgFgGgAAAADQgIACgEADQgDADAAAEQAAAKANAAQAIAAAEgEQAFgEAAgGIAAgOQgBADgOADg");
	this.shape_25.setTransform(150.15,22.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgNAgIAAg+IAJAAIAAAGIABAAQABgDADgCQAEgCAEAAIADAAIACAAIAAABIgCAJIgFAAQgGAAgBAEQgDAEAAAIIAAAlg");
	this.shape_26.setTransform(144.975,22.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgSAcQgGgFAAgIQAAgIAFgEQAFgDALgDIAGgCIAFgCIADgCIACgCIABgDQAAgEgDgDQgDgDgGAAQgNAAgCANIgJgDQACgIAFgFQAHgGAJAAQALAAAHAGQAGAFAAAMIAAAqIgJAAIAAgHQgCADgFADQgFADgHAAQgKAAgFgGgAAAADQgIACgEADQgDADAAAEQAAAKANAAQAIAAAEgEQAFgEAAgGIAAgOQgBADgOADg");
	this.shape_27.setTransform(138.9,22.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgTAYQgJgJAAgPQAAgOAIgJQAIgKAMAAQANAAAIAJQAIAJAAAPIAAADIgvAAQAAAJAFAGQAFAHAJAAIAGgBIAFgCIAEgEIACgDIACgDIAHAFQgDAHgHAFQgHAFgJAAQgMAAgIgKgAATgEQAAgIgFgGQgEgGgKAAQgIAAgFAHQgFAGAAAHIAlAAIAAAAg");
	this.shape_28.setTransform(132.025,22.125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgbAuIAAhZIAKAAIAAAGIAAAAQACgDAFgDQAFgCAFAAQAMAAAIAJQAIAJAAAPQAAAPgIAJQgHAJgNAAQgFAAgFgCQgEgDgCgDIgBAAIAAAhgAgMgfQgFAEAAAGIAAAUQAAAFAFAEQAFAEAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgHQgFgGgIAAQgIAAgEAFg");
	this.shape_29.setTransform(124.875,23.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgbAuIAAhZIAKAAIAAAGIAAAAQACgDAFgDQAFgCAFAAQAMAAAIAJQAIAJAAAPQAAAPgIAJQgHAJgNAAQgFAAgFgCQgEgDgCgDIgBAAIAAAhgAgMgfQgFAEAAAGIAAAUQAAAFAFAEQAFAEAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgHQgFgGgIAAQgIAAgEAFg");
	this.shape_30.setTransform(117.425,23.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgSAcQgGgFAAgIQAAgIAFgEQAEgDAMgDIAGgCIAFgCIAEgCIABgCIABgDQAAgEgCgDQgEgDgGAAQgMAAgDANIgJgDQACgIAFgFQAHgGAJAAQALAAAHAGQAGAFAAAMIAAAqIgJAAIAAgHQgCADgFADQgFADgHAAQgKAAgFgGgAAAADQgIACgEADQgDADAAAEQAAAKANAAQAIAAAFgEQAEgEAAgGIAAgOQgBADgOADg");
	this.shape_31.setTransform(110,22.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgTAYQgJgJAAgPQAAgOAIgJQAIgKAMAAQANAAAIAJQAIAJAAAPIAAADIgvAAQAAAJAFAGQAFAHAJAAIAGgBIAFgCIAEgEIACgDIACgDIAHAFQgDAHgHAFQgHAFgJAAQgMAAgIgKgAATgEQAAgIgFgGQgEgGgKAAQgIAAgFAHQgFAGAAAHIAlAAIAAAAg");
	this.shape_32.setTransform(99.825,22.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQAsIAAgnQAAgRgPAAQgGAAgFAFQgFAEAAAHIAAAoIgKAAIAAhXIAKAAIAAAfIABAAQACgEAFgCQAFgDAFAAQAKAAAHAHQAGAGAAAKIAAAqg");
	this.shape_33.setTransform(92.525,20.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAJAnQgJAAgDgEQgEgFAAgJIAAgkIgJAAIAAgIIAJAAIAAgQIAIAAIAAAQIAQAAIAAAIIgQAAIAAAjQAAAGACACQACACAEAAIAFAAIAAAJg");
	this.shape_34.setTransform(86.425,21.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgTAYQgJgJAAgPQAAgOAIgJQAIgKAMAAQANAAAIAJQAIAJAAAPIAAADIgvAAQAAAJAFAGQAFAHAJAAIAGgBIAFgCIAEgEIACgDIACgDIAHAFQgDAHgHAFQgHAFgJAAQgMAAgIgKgAATgEQAAgIgFgGQgEgGgKAAQgIAAgFAHQgFAGAAAHIAlAAIAAAAg");
	this.shape_35.setTransform(223.775,8.125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgTAZQgIgJAAgQQAAgPAJgJQAIgJALAAQAKAAAIAHQAHAGABALIgJACQgBgIgFgEQgEgFgHAAQgHAAgGAHQgFAGAAALQAAALAFAHQAFAHAIAAQAHAAAFgFQAEgGABgHIAKACQgCALgHAHQgHAHgLAAQgMAAgIgJg");
	this.shape_36.setTransform(216.725,8.125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAbQgGgGAAgMIAAgpIAKAAIAAAnQAAAJAEAEQADADAHAAQAHAAAEgEQAEgEAAgIIAAgnIAKAAIAAA/IgKAAIAAgGIgCACIgGADQgEADgEAAQgLAAgGgGg");
	this.shape_37.setTransform(209.575,8.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgTAjQgIgJAAgPQAAgOAIgJQAIgKALAAQALAAAGAIIABAAIAAgeIAKAAIAABXIgJAAIAAgGIgBAAQgCADgFACQgFADgGAAQgMAAgHgKgAgMgGQgFAGAAALQAAAMAFAGQAFAHAIAAQAHAAAFgFQAFgEAAgFIAAgUQAAgFgFgFQgEgFgIAAQgIAAgFAHg");
	this.shape_38.setTransform(202.075,7.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgTAYQgJgJAAgPQAAgOAIgJQAIgKAMAAQANAAAIAJQAIAJAAAPIAAADIgvAAQAAAJAFAGQAFAHAJAAIAGgBIAFgCIAEgEIACgDIACgDIAHAFQgDAHgHAFQgHAFgJAAQgMAAgIgKgAATgEQAAgIgFgGQgEgGgKAAQgIAAgFAHQgFAGAAAHIAlAAIAAAAg");
	this.shape_39.setTransform(194.925,8.125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgNAgIAAg+IAJAAIAAAGIABAAQABgDADgCQAEgCAEAAIADAAIACAAIAAABIgCAJIgFAAQgGAAgBAEQgDAEAAAIIAAAlg");
	this.shape_40.setTransform(189.375,8.075);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgUAZQgIgJAAgQQAAgPAJgJQAIgJALAAQAMAAAIAJQAJAJAAAPQAAAQgIAJQgIAJgNAAQgLAAgJgJgAgNgRQgFAGAAALQAAAMAFAGQAGAHAHAAQAIAAAGgHQAFgGAAgMQAAgLgFgGQgGgHgIAAQgHAAgGAHg");
	this.shape_41.setTransform(179.925,8.125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAJAoQgJAAgDgFQgEgFAAgJIAAgkIgJAAIAAgIIAJAAIAAgPIAIAAIAAAPIAQAAIAAAIIgQAAIAAAjQAAAFACACQACADAEAAIAFAAIAAAKg");
	this.shape_42.setTransform(173.925,7.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAPAhIAAgmQAAgSgOAAQgGAAgFAFQgEAEAAAHIAAAoIgKAAIAAg/IAKAAIAAAGQACgDAFgCQAFgDAFAAQAKAAAGAHQAHAGgBALIAAApg");
	this.shape_43.setTransform(164.8,8.025);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgTAYQgJgJAAgPQAAgOAIgJQAIgKAMAAQANAAAIAJQAIAJAAAPIAAADIgvAAQAAAJAFAGQAFAHAJAAIAGgBIAFgCIAEgEIACgDIACgDIAHAFQgDAHgHAFQgHAFgJAAQgMAAgIgKgAATgEQAAgIgFgGQgEgGgKAAQgIAAgFAHQgFAGAAAHIAlAAIAAAAg");
	this.shape_44.setTransform(157.475,8.125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgDAgIgag/IAKAAIATAxIAAAAIATgxIALAAIgaA/g");
	this.shape_45.setTransform(150.475,8.125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgUAZQgIgJAAgQQAAgPAJgJQAIgJALAAQAMAAAIAJQAJAJAAAPQAAAQgIAJQgIAJgNAAQgLAAgJgJgAgNgRQgFAGAAALQAAAMAFAGQAGAHAHAAQAIAAAGgHQAFgGAAgMQAAgLgFgGQgGgHgIAAQgHAAgGAHg");
	this.shape_46.setTransform(143.475,8.125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgNAgIAAg+IAJAAIAAAGIABAAQABgDADgCQAEgCAEAAIADAAIACAAIAAABIgCAJIgFAAQgGAAgBAEQgDAEAAAIIAAAlg");
	this.shape_47.setTransform(137.925,8.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgbAuIAAhZIAKAAIAAAGIAAAAQACgDAFgDQAFgCAFAAQAMAAAIAJQAIAJAAAPQAAAPgIAJQgHAJgNAAQgFAAgFgCQgEgDgCgDIgBAAIAAAhgAgMgfQgFAEAAAGIAAAUQAAAFAFAEQAFAEAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgHQgFgGgIAAQgIAAgEAFg");
	this.shape_48.setTransform(131.825,9.375);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgPAtIANghIgYg4IAKAAIARAsIAAAAIAQgsIAKAAIghBZg");
	this.shape_49.setTransform(121.475,9.475);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_50.setTransform(116.7,6.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_51.setTransform(113.4,6.925);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgTAcQgFgFAAgIQAAgIAFgEQAEgDANgDIAFgCIAEgCIAFgCIACgCIABgDQAAgEgDgDQgEgDgHAAQgMAAgCANIgJgDQABgIAHgFQAGgGAJAAQALAAAGAGQAHAFAAAMIAAAqIgJAAIAAgHQgCADgFADQgFADgGAAQgLAAgGgGgAgBADQgHACgDADQgDADAAAEQAAAKAMAAQAIAAAEgEQAFgEAAgGIAAgOQgCADgOADg");
	this.shape_52.setTransform(108.25,8.125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgTAZQgIgJAAgQQAAgPAJgJQAIgJALAAQAKAAAIAHQAHAGABALIgJACQgBgIgFgEQgEgFgHAAQgHAAgGAHQgFAGAAALQAAALAFAHQAFAHAIAAQAHAAAFgFQAEgGABgHIAKACQgCALgHAHQgHAHgLAAQgMAAgIgJg");
	this.shape_53.setTransform(101.575,8.125);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgEAsIAAg/IAJAAIAAA/gAgFggIAAgLIALAAIAAALg");
	this.shape_54.setTransform(96.325,6.925);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAPAhIAAgmQAAgSgOAAQgGAAgFAFQgEAEAAAHIAAAoIgKAAIAAg/IAKAAIAAAGQACgDAFgCQAFgDAFAAQAKAAAGAHQAHAGgBALIAAApg");
	this.shape_55.setTransform(91,8.025);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgEAsIAAg/IAJAAIAAA/gAgFggIAAgLIALAAIAAALg");
	this.shape_56.setTransform(85.575,6.925);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_57.setTransform(82.2,6.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgKAqQgGgDgGgGQgFgFgDgIQgDgJAAgLQAAgUALgLQAKgMAOAAQANAAAIAIQAJAJACANIgLABQgDgWgSABQgKgBgHAJQgHAJAAAQQAAARAHAIQAHAKAKgBQATABACgYIALABQgBAPgJAIQgIAJgOAAQgGAAgGgCg");
	this.shape_58.setTransform(76.425,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,300,44), null);


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
	this.shape.graphics.f("#000000").s().p("AA/BUIAAgDIADgBQAHgCACgEQADgEAAgHIAAhnQAAgPgFgFQgFgFgMAAQgIAAgJAEQgIAEgJAIIACAMIAAANIAABXQABANAMAEIADABIAAADIhOAAIAAgDIAFgCQAGgCADgEQACgDAAgHIAAhnQAAgOgFgFQgFgGgLAAQgIAAgIAEQgIAEgJAHIAABxQAAANAMAEIADABIAAADIhPAAIAAgDIAEgCQAHgBACgEQADgEAAgHIAAhqQAAgHgCgEQgCgDgHgCIgFgBIAAgDIA6gUIADADIADAXQALgLAPgIQAOgHAQAAQAQAAAJAGQAKAHAFAOQANgNAPgHQAQgHAPAAQAYAAALALQAMAMAAAZIAABiQAAANAMAEIADABIAAADg");
	this.shape.setTransform(186.625,55.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhFBMQgNgMAAgVQAAgQAQgNQARgNAigGIANgDIANgCIAAgbQAAgXgFgJQgGgKgLAAQgIAAgFAGQgFAFgBANIAAADQgCAPgGAHQgGAHgKAAQgJAAgGgGQgFgFAAgJQAAgOAKgKQAJgJAQgFQAQgFASAAQAeAAARAPQAQAPAAAhIAABKQAAAPAOAAIAIAAIADADQgHAIgHAFQgIAEgOAAQgPAAgIgHQgKgHgCgLQgKAKgKAIQgLAIgRAAQgTAAgOgLgAAFgCIgHABQgRAEgIAJQgKAKAAAQQAAAOAHAHQAGAHAJAAQAHAAAGgDIANgKIAAg4g");
	this.shape_1.setTransform(162.5,55.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBMQgTgKgKgTQgLgUAAgaQAAgbANgUQALgUAUgKQATgKAUAAQAWAAAQAJQAQAJAIAQQAIAPAAAUIAAAHIgCAHIhkAAQABAkAMAQQAMAQAZAAQARAAALgFQAKgFAKgLIADADQgLATgRAKQgSALgYAAQgXAAgTgLgAgKhJQgHAGgDAPQgFAPAAAcIA6AAQADglgHgRQgGgQgRAAQgJAAgHAGg");
	this.shape_2.setTransform(143.5,55.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhFBUIAAgDIAFgCQAHgCADgEQACgEAAgGIAAhqQAAgHgCgEQgDgDgHgCIgFgBIAAgDIA6gUIAEADIADAeIAAACQAEgJAHgIQAIgIAJgFQAKgFAJAAQANAAAHAHQAHAHAAALQAAALgHAHQgHAGgJAAQgOAAgLgOIgBgBQgDgFgFAAQgEgBgEAFIgFAHIgEAKIAABeQAAANALAEIALADIAAADg");
	this.shape_3.setTransform(126.725,55.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgkBpQgagOgQgaQgPgaAAgnQAAgcAJgWQAKgWAQgPQARgPAVgIQAVgHAYAAQATAAARAEQAQAFAOAHIABAqIgDAAIgRgbIgIgMQgEgFgGgDIgKgDIgMgCQgUAAgPALQgQALgKAYQgJAYAAApQgBAqAKAZQAIAYARAKQAPALATAAIARgCIAOgFQAGgCADgGIAHgLIAOghIAEAAIgBAwQgPAIgSAFQgRAEgVAAQggAAgbgNg");
	this.shape_4.setTransform(107.7,52.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAMB3IAAgDIAEgBQAMgEAAgNIAAhqQAAgOgEgFQgFgFgMAAQgHAAgIADQgJADgJAHIAAB1QAAANAMAEIADABIAAADIhPAAIAAgDIAEgCQAMgEAAgMIAAi1QAAgHgDgEQgCgDgHgCIgFgBIAAgEIA8gOIAFADIgBAwIAAAqQAMgJAOgHQANgHAQAAQAWAAANAMQAOANAAAZIAABgQAAAHACAEQADAEAHACIADABIAAADg");
	this.shape_5.setTransform(209.675,25.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghBNQgUgKgKgTQgMgUAAgbQAAgbANgUQAMgTAUgKQAUgLAXAAQAUAAAOAHQANAGAHAKQAIALAAALQgBAKgFAFQgGAFgJAAQgKAAgGgHQgGgHgBgMIAAgNIAAgKQgCgGgCgCQgDgCgFAAQgUAAgMASQgLASABAoQAAAhAMASQAMASAbAAQAPAAAKgFQAKgGAJgMIAEADQgJAUgRALQgSALgZAAQgVAAgTgKg");
	this.shape_6.setTransform(190.35,29.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnB3IAAgEIAFgBQAHgCACgEQADgEAAgHIAAhpQAAgHgDgEQgCgEgHgBIgFgBIAAgEIA9gUIAEAEIgBAwIAABeQAAAHACAFQADADAGACIAEABIAAAEgAgShKQgIgHAAgLQAAgMAIgHQAIgHAKAAQAMAAAIAHQAIAHAAAMQAAALgIAHQgIAIgMgBQgKABgIgIg");
	this.shape_7.setTransform(176.225,25.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAoBwIgxhrIgXAAIAABUQAAAHACAEQACAEAHACIAIADIAAADIhXAAIAAgDIAHgDQAHgCACgEQACgEAAgHIAAixQAAgGgCgEQgCgEgGgDIgIgDIAAgDIBhAAQAnAAAVAPQAWAPAAAbQAAAPgLAPQgMAPgYAIIAwBdQADAGAEADQADAEAHACIAEACIAAADgAgggBIAQAAQAYAAALgNQALgNAAgaQAAgagLgNQgKgMgXAAIgSAAg");
	this.shape_8.setTransform(160.025,25.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkBMQgTgKgKgTQgLgUAAgaQAAgbAMgUQAMgUAUgKQATgKAUAAQAWAAAQAJQAPAJAJAQQAIAPAAAUIAAAHIgCAHIhkAAQAAAkANAQQAMAQAZAAQARAAAKgFQALgFAKgLIADADQgLATgRAKQgSALgYAAQgYAAgSgLgAgKhJQgHAGgEAPQgEAPAAAcIA5AAQADglgFgRQgHgQgRAAQgJAAgHAGg");
	this.shape_9.setTransform(131.05,29.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAMB3IAAgDIAEgBQAMgEAAgNIAAhqQAAgOgEgFQgFgFgMAAQgHAAgIADQgJADgJAHIAAB1QAAANAMAEIADABIAAADIhPAAIAAgDIAEgCQAMgEAAgMIAAi1QAAgHgDgEQgCgDgHgCIgFgBIAAgEIA8gOIAFADIgBAwIAAAqQAMgJAOgHQANgHAQAAQAWAAANAMQAOANAAAZIAABgQAAAHACAEQADAEAHACIADABIAAADg");
	this.shape_10.setTransform(111.775,25.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag0BwIAAgDIANgEQAOgDABgNIAAjBIgdAAQgNAAgFAGQgGAHgGAMIgNAXIgCAAIABg3IDDAAIACA3IgEAAIgMgXQgGgMgFgHQgGgGgMAAIgdAAIAADBQAAANAOADIAOAEIAAADg");
	this.shape_11.setTransform(90.2,25.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,300,77.2), null);


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
	this.instance = new lib.prod2_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,112,58.5), null);


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
	this.instance = new lib.prod2_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,58.5,212), null);


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
	this.instance = new lib.prod2_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,69.5,61), null);


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
	this.instance = new lib.prod2_1();
	this.instance.setTransform(0,211.5,0.5,0.5,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,127,211.5), null);


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
	this.instance = new lib.prod2_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,127,211.5), null);


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
	this.instance = new lib.bg2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,300,250), null);


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
	this.instance = new lib.bg1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,300,350), null);


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
	this.instance = new lib.prod1_1();
	this.instance.setTransform(0,0,0.4161,0.416);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,54.5,196.4), null);


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
	this.instance = new lib.prod1_2();
	this.instance.setTransform(0,0,0.4161,0.4161);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,55.8,65.8), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj5CWIAAkrIHzAAIAAErg");
	mask.setTransform(24.8,10);

	// Layer_1
	this.mc = new lib.Symbol35();
	this.mc.name = "mc";
	this.mc.setTransform(24.8,9.6,1,1,0,0,0,24.8,9.6);

	var maskedShapeInstanceList = [this.mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,49.7,19.3), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AogCWIAAkrIRBAAIAAErg");
	mask.setTransform(54.3,14);

	// Layer_1
	this.mc = new lib.Symbol34();
	this.mc.name = "mc";
	this.mc.setTransform(54.2,12.8,1,1,0,0,0,54.2,12.8);

	var maskedShapeInstanceList = [this.mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,108.6,25.7), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhKCWIAAkrICVAAIAAErg");
	mask.setTransform(7.3,10);

	// Layer_1
	this.mc = new lib.Symbol36();
	this.mc.name = "mc";
	this.mc.setTransform(7.2,8.8,1,1,0,0,0,7.2,8.8);

	var maskedShapeInstanceList = [this.mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,14.4,17.7), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhjCWIAAkrIDHAAIAAErg");
	mask.setTransform(9.75,10);

	// Layer_1
	this.mc = new lib.Symbol33();
	this.mc.name = "mc";
	this.mc.setTransform(9.8,8.8,1,1,0,0,0,9.8,8.8);

	var maskedShapeInstanceList = [this.mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,19.5,17.7), null);


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

	// txt
	this.txt = new lib.Symbol31();
	this.txt.name = "txt";
	this.txt.setTransform(110,18,1,1,0,0,0,110,10);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// bg
	this.bg = new lib.Symbol32();
	this.bg.name = "bg";
	this.bg.setTransform(110,20,1,1,0,0,0,110,20);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,120,30), null);


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
	this.instance = new lib.Symbol15();
	this.instance.setTransform(56,29.2,1,1,0,0,0,56,29.2);

	this.instance_1 = new lib.Symbol15();
	this.instance_1.setTransform(56,81.3,1,1,0,180,0,56,29.2);
	this.instance_1.alpha = 0.3984;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,112,110.5), null);


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
	this.instance = new lib.Symbol14();
	this.instance.setTransform(29.2,106,1,1,0,0,0,29.2,106);

	this.instance_1 = new lib.Symbol14();
	this.instance_1.setTransform(29.2,314.3,1,1,0,180,0,29.2,106);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,58.5,420.3), null);


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
	this.instance = new lib.Symbol13();
	this.instance.setTransform(33.5,87.6,1,1,0,-165.0008,14.9992,34.8,30.5);
	this.instance.alpha = 0.6016;

	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(34.8,30.5,1,1,0,0,0,34.8,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-8,0,83,126.1), null);


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

	// Layer_2
	this.instance = new lib.Symbol11();
	this.instance.setTransform(63.5,105.8,1,1,0,0,0,63.5,105.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(63.5,307.8,1,1,0,0,0,63.5,105.8);
	this.instance_1.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,127,413.5), null);


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

	// p4
	this.p4 = new lib.Symbol10();
	this.p4.name = "p4";
	this.p4.setTransform(135.1,207.85,0.7815,0.7814,0,0,0,56.3,29.4);

	this.timeline.addTween(cjs.Tween.get(this.p4).wait(1));

	// p2
	this.p2 = new lib.Symbol8();
	this.p2.name = "p2";
	this.p2.setTransform(35.6,201.05,0.7815,0.7814,0,0,0,35,30.8);

	this.timeline.addTween(cjs.Tween.get(this.p2).wait(1));

	// p3
	this.p3 = new lib.Symbol9();
	this.p3.name = "p3";
	this.p3.setTransform(82.05,142.05,0.7815,0.7814,0,0,0,29.4,106.2);

	this.timeline.addTween(cjs.Tween.get(this.p3).wait(1));

	// p1
	this.p1 = new lib.Symbol7();
	this.p1.name = "p1";
	this.p1.setTransform(29.95,138.7,0.7815,0.7814,0,0,0,63.6,106);
	this.p1.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.p1).wait(1));

	// glow
	this.glow = new lib.Symbol21();
	this.glow.name = "glow";
	this.glow.setTransform(0,0,1,0.4166);
	this.glow.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.glow).wait(1));

	// bg
	this.bg = new lib.Symbol5();
	this.bg.name = "bg";
	this.bg.setTransform(485,125,1,1,0,0,0,485,125);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-19.7,0,319.7,387.5), null);


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

	// cover
	this.cover = new lib.Symbol22();
	this.cover.name = "cover";

	this.timeline.addTween(cjs.Tween.get(this.cover).wait(1));

	// p1
	this.p1 = new lib.Symbol3();
	this.p1.name = "p1";
	this.p1.setTransform(51.2,131.2,1,1,0,0,0,27.2,98.2);

	this.timeline.addTween(cjs.Tween.get(this.p1).wait(1));

	// p2
	this.p2 = new lib.Symbol2();
	this.p2.name = "p2";
	this.p2.setTransform(88.9,170.95,1,1,0,0,0,27.9,32.9);

	this.timeline.addTween(cjs.Tween.get(this.p2).wait(1));

	// bg
	this.bg = new lib.Symbol4();
	this.bg.name = "bg";
	this.bg.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,-100,300,350), null);


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

	// c22
	this.c22 = new lib.Symbol29();
	this.c22.name = "c22";
	this.c22.setTransform(175.1,9.6,1,1,0,0,0,24.8,9.6);

	this.timeline.addTween(cjs.Tween.get(this.c22).wait(1));

	// c11
	this.c11 = new lib.Symbol28();
	this.c11.name = "c11";
	this.c11.setTransform(72.1,13.85,1,1,0,0,0,54.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.c11).wait(1));

	// c2
	this.c2 = new lib.Symbol27();
	this.c2.name = "c2";
	this.c2.setTransform(141.95,10,1,1,0,0,0,7.2,8.8);

	this.timeline.addTween(cjs.Tween.get(this.c2).wait(1));

	// c1
	this.c1 = new lib.Symbol26();
	this.c1.name = "c1";
	this.c1.setTransform(9.8,10.1,1,1,0,0,0,9.8,8.8);

	this.timeline.addTween(cjs.Tween.get(this.c1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-0.2,-5,200.29999999999998,35.1), null);


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

	// t2
	this.t2 = new lib.Symbol25();
	this.t2.name = "t2";
	this.t2.setTransform(100,13.3,1,1,0,0,0,100,13.3);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.Symbol30();
	this.t1.name = "t1";
	this.t1.setTransform(100,13.3,1,1,0,0,0,100,13.3);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-0.2,-5,210.89999999999998,35.1), null);


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

	// cta
	this.cta = new lib.Symbol18();
	this.cta.name = "cta";
	this.cta.setTransform(0,205,1,1,0,0,0,60,15);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// txt2
	this.txt2 = new lib.Symbol19();
	this.txt2.name = "txt2";
	this.txt2.setTransform(50,153,1,1,0,0,0,200,23);

	this.timeline.addTween(cjs.Tween.get(this.txt2).wait(1));

	// txt1
	this.txt1 = new lib.Symbol17();
	this.txt1.name = "txt1";
	this.txt1.setTransform(0,101.4,1,1,0,0,0,150,46.4);

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(1));

	// logo
	this.logo = new lib.Symbol16();
	this.logo.name = "logo";
	this.logo.setTransform(0.05,39.5,0.7502,0.75,0,0,0,99.9,12.7);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-150,26.3,300,193.7), null);


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

	// frame_bottom
	this.frame_bottom = new lib.Symbol24();
	this.frame_bottom.name = "frame_bottom";
	this.frame_bottom.setTransform(237,-102.95);

	this.timeline.addTween(cjs.Tween.get(this.frame_bottom).wait(1));

	// main_txt
	this.main_txt = new lib.Symbol20();
	this.main_txt.name = "main_txt";
	this.main_txt.setTransform(197,0);

	this.timeline.addTween(cjs.Tween.get(this.main_txt).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC6600").ss(1,2,0,3).p("A1jxpMArHAAAMAAAAjTMgrHAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// pic2
	this.pic2 = new lib.Symbol6();
	this.pic2.name = "pic2";
	this.pic2.setTransform(485,125,1,1,0,0,0,485,125);

	this.timeline.addTween(cjs.Tween.get(this.pic2).wait(1));

	// cover
	this.cover = new lib.Symbol23();
	this.cover.name = "cover";

	this.timeline.addTween(cjs.Tween.get(this.cover).wait(1));

	// pic1
	this.pic1 = new lib.Symbol1();
	this.pic1.name = "pic1";

	this.timeline.addTween(cjs.Tween.get(this.pic1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(-19.7,-103.6,517.4,703.6), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// main
	this.main = new lib.Symbol38();
	this.main.name = "main";

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(130.3,21.4,367.4,578.6);
// library properties:
lib.properties = {
	id: 'B131FF3BA1FE477485AB805AD8D83031',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg1.jpg", id:"bg1"},
		{src:"images/bg2.jpg", id:"bg2"},
		{src:"images/prod1_1.png", id:"prod1_1"},
		{src:"images/prod1_2.png", id:"prod1_2"},
		{src:"images/prod2_1.png", id:"prod2_1"},
		{src:"images/prod2_2.png", id:"prod2_2"},
		{src:"images/prod2_3.png", id:"prod2_3"},
		{src:"images/prod2_4.png", id:"prod2_4"}
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
an.compositions['B131FF3BA1FE477485AB805AD8D83031'] = {
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