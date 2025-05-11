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



(lib.Screenshot = function() {
	this.initialize(img.Screenshot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,414,441);// helper functions:

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
	this.instance = new lib.Screenshot();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,414,441), null);


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
	this.shape.graphics.f("#F49021").s().p("AhtBBQgCgCAAgDQAAgNALgmQAMglAHgIQAFgFADABQAAAAABABQAAAAABAAQAAABAAAAQABABAAABQABACgBADIgFAUIgFAUIAVgVQAzgvAygFQAVgCAWAFQAJACAQAIQAEACgFAAQhNgHgtAgQgSAMgKAMIgaAbIAbgHQAYgIAEAFQACACgBADQgBADgDACIhYAmIgDABIgDgBg");
	this.shape.setTransform(11.2139,6.5688);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,22.5,13.1), null);


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
	this.shape.graphics.f("#FDD1B9").s().p("AgfAlQgMgNAAgXQAAgMAEgJQADgJAGgHQAGgGAIgDQAJgEAJAAQALAAAIAEQAHADAGAGQAFAGACAIQADAJAAAKIAAAIIhCAAQAAANAGAIQAGAIAMAAQAKAAAEgEQAFgEACgHIAUAAQgDAPgKAIQgKAIgSAAQgWAAgLgNgAgPgaQgGAGgBAMIAuAAQAAgMgFgGQgGgHgMAAQgKAAgGAHg");
	this.shape.setTransform(89.925,14.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDD1B9").s().p("AAVBAIAAg6QAAgLgFgEQgEgFgIAAQgEAAgFACQgFACgDADQgDAEgCADQgCAEAAAEIAAA4IgUAAIAAh/IAUAAIAAAwQAGgJAIgDQAHgEAJAAQAfAAAAAhIAAA+g");
	this.shape_1.setTransform(79.525,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDD1B9").s().p("AgJA1QgFgJAAgQIAAguIgQAAIAAgQIAQAAIAAgaIATAAIAAAaIAXAAIAAAQIgXAAIAAAwQAAAHACAEQADADAGAAIAGAAIAFgCIAEAPQgJAEgKAAQgOgBgHgHg");
	this.shape_2.setTransform(71,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDD1B9").s().p("AAVBAIAAg6QAAgLgFgEQgEgFgIAAQgEAAgFACQgFACgDADQgDAEgCADQgCAEAAAEIAAA4IgUAAIAAh/IAUAAIAAAwQAGgJAIgDQAHgEAJAAQAfAAAAAhIAAA+g");
	this.shape_3.setTransform(58.525,12.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDD1B9").s().p("AgJA1QgFgJgBgQIAAguIgOAAIAAgQIAOAAIAAgaIAUAAIAAAaIAXAAIAAAQIgXAAIAAAwQAAAHADAEQACADAHAAIAFAAIAFgCIADAPQgIAEgKAAQgPgBgGgHg");
	this.shape_4.setTransform(50,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDD1B9").s().p("AgJBAIAAhcIAUAAIAABcgAgKgrIAAgUIAVAAIAAAUg");
	this.shape_5.setTransform(44.45,12.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDD1B9").s().p("AATAvIgThDIgSBDIgUAAIgchdIAXAAIAQBEIAThDIASAAIATBDIAQhEIAWAAIgcBdg");
	this.shape_6.setTransform(35.475,14.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(26.7,0,70.7,25.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AFTAtQgLgKABgVQgBgKADgHQADgJAFgFQAGgGAGgCQAIgDAIAAQAKAAAHADQAGACAFAGQAEAFACAHQADAHAAAIIAAAIIg6AAQAAALAFAHQAGAGAKAAQAJAAAEgCQAEgEABgGIARAAQgBAMgJAIQgIAGgRABQgTAAgJgMgAFggJQgFAGgBAJIAoAAQABgJgFgGQgFgGgKABQgKgBgFAGgAC3AtQgKgLAAgUQAAgKADgHQACgIAGgGQAEgFAIgDQAHgDAKAAQAJAAAIADQAHADAFAGQAFAFADAJQACAGAAAKQAAAKgDAIQgDAIgFAFQgFAGgHACQgHADgKABQgSAAgLgMgADEgGQgFAHAAANQAAANAFAHQAFAJALgBQAMABAFgJQAFgHAAgNQAAgNgFgHQgFgIgMAAQgKAAgGAIgAk1AtQgKgKABgVQgBgKADgHQADgJAFgFQAGgGAGgCQAIgDAIAAQAKAAAGADQAHACAFAGQAEAFACAHQADAHAAAIIAAAIIg6AAQAAALAFAHQAGAGAKAAQAJAAAEgCQAEgEABgGIARAAQgBAMgJAIQgJAGgQABQgTAAgKgMgAkngJQgFAGgBAJIAoAAQABgJgFgGQgFgGgKABQgKgBgFAGgAjXA2QgFgBgDgDQgEgDgCgFQgCgEAAgGQAAgIADgGQAFgFAFgDQAHgDAHgBIAOgBIANgBIAAgEQAAgHgFgEQgFgDgGAAQgIAAgFACQgDADgBAFIgRgBQACgMAJgFQAIgGAPAAQAKAAAGACQAHADADAEQAEAFABAFQACAHAAAGIAAAyIgRAAIAAgLQgFAGgGADQgHAEgJAAQgFAAgGgCgAi9AQIgMACQgFACgDACQgDABAAADIgBAGQAAAEADAEQAEACAGAAQALABAGgHQAGgGAAgJIAAgFgAEOA2IAAhQIARAAIAAANQAEgHAGgDQAGgEAHAAIAEAAIAEABIgDAQIgDgBIgEAAQgFAAgEABIgGAFQgDADgBACIgCAHIAAAvgACJA2IAAhQIgfBQIgOAAIgehQIAABQIgRAAIAAhuIAXAAIAfBYIAhhYIAWAAIAABugAgbA2IAAgyQAAgKgDgEQgEgDgHAAQgEAAgEACQgFABgDADIgEAGQgCADAAAEIAAAwIgRAAIAAhQIARAAIAAAMQAFgHAIgEQAGgDAHAAQAcAAAAAcIAAA2gAiNA2IAAhQIARAAIAAANQAEgHAGgDQAGgEAGAAIAFAAIAEABIgCAQIgEgBIgEAAQgFAAgEABIgGAFQgDADgBACIgBAHIAAAvgAmTA2IAAhuIATAAIAABdIA3AAIgDARg");
	this.shape.setTransform(40.4,5.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,80.8,11.3), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AAECfQgXgKgOgWQgPgVAAgbIAAgHQADgSAGgPIAHgLQADgHAAgGQAAgPgLgJQgKgKgPACQgLABgHAHQgIAHgCAKQgCAMAFAIQgGgKgKgJQgEgHgEgPQgGgcAFgYQAIgjAbgZQAbgaAjgFQAhgHAhAQQAgAOATAeQATAdAAAjQAAAfgQAcQgFAKgLALIgUATQgMAMgdAYQgWATAAAYQAAAJADAJQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgBAAIgBAAg");
	mask.setTransform(11.824,15.929);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F05A2B").s().p("AhZCpQgMgegEgjQgIhEAlgTQAdgUAUgiQAnhEgshAICLAIIgBFLg");
	this.shape.setTransform(16.2547,17);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(5.5,0,18.2,31.9), null);


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
	mask.graphics.p("AAECfQgXgKgOgWQgPgVAAgbIAAgHQADgSAGgPIAHgLQADgHAAgGQAAgPgLgJQgKgKgPACQgLABgHAHQgIAHgCAKQgCAMAFAIQgGgKgKgJQgEgHgEgPQgGgcAFgYQAIgjAbgZQAbgaAjgFQAhgHAhAQQAgAOATAeQATAdAAAjQAAAfgQAcQgFAKgLALIgUATQgMAMgdAYQgWATAAAYQAAAJADAJQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgBAAIgBAAg");
	mask.setTransform(11.824,15.929);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F05A2B").s().p("AhZCpQgMgegEgjQgIhEAlgTQAdgUAUgiQAnhEgshAICLAIIgBFLg");
	this.shape.setTransform(16.2547,17);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(5.5,0,18.2,31.9), null);


(lib.Symbol4_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeBTQgJgFgGgJQgHgJgEgMQgDgMAAgOQAAgOADgLQAEgMAHgJQAGgIAJgGQAKgFANAAIAEgBIAFABQAHABAJADQAHAEAHAJIAAg9IAbAAIAACrIgaAAIAAgRQgIAKgKAFQgJAGgMAAQgOAAgKgFgAgWgLQgIALAAAVQAAAMACAJQACAIAEAFQAFAGAFACQAGACAGAAQAOAAAJgJQAJgKAAgVIAAgGQAAgMgCgHQgDgIgEgFQgEgFgGgCQgGgCgGAAQgPAAgIALg");
	this.shape_7.setTransform(145.55,94.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMBWIAAh8IAaAAIAAB8gAgNg6IAAgbIAbAAIAAAbg");
	this.shape_8.setTransform(135.5,94.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkA/IAAh8IAbAAIAAATQAGgKAIgFQAJgFALAAIAHAAIAFABIgDAYIgGAAIgGgBQgIAAgGADQgGACgDAEIgGAKQgCAFAAAFIAABIg");
	this.shape_9.setTransform(128.325,96.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbBUQgPgHgLgLQgKgMgFgRQgFgRAAgUQAAgUAGgRQAFgQAKgMQAKgMAPgGQAOgGARAAQAQAAALAEQAMAEAIAGQAIAIAFAJQAFAJACAKIgdAFQgBgIgDgFQgDgGgEgDQgFgFgGgCQgHgCgJAAQgLAAgJAGQgJAEgGAIQgGAJgDAMQgDAMAAAOQAAAPADAMQADAMAGAJQAHAIAJAEQAJAFANAAQAMAAAJgDQAKgCAJgGIAAgjIgmAAIAAgXIBBAAIAABFQgNAMgSAHQgSAGgTAAQgSAAgPgGg");
	this.shape_10.setTransform(114.425,94.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkA/IAAh8IAbAAIAAATQAGgKAIgFQAJgFALAAIAHAAIAFABIgDAYIgGAAIgGgBQgIAAgGADQgGACgDAEIgGAKQgCAFAAAFIAABIg");
	this.shape_11.setTransform(96.225,96.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdBAQgHgDgFgEQgHgFgCgHQgEgHAAgKQAAgMAGgJQAFgHAKgEQAJgFAMgCIAVgCIATgBIAAgFQAAgOgGgGQgHgFgLAAQgMAAgGAEQgHAFgBAIIgagDQAEgSANgIQANgJAXAAQAOAAAKAEQAKAEAFAGQAGAHACAJQADAKAAALIAABNIgaAAIAAgRQgHAJgKAFQgKAGgOAAQgIAAgJgCgAALAFQgMAAgHACQgIACgEADQgEADgBAEQgCAEAAAFQABAIAFAEQAFAFAKAAQARAAAJgJQAIgJAAgQIAAgHg");
	this.shape_12.setTransform(84.05,96.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMBWIAAirIAaAAIAACrg");
	this.shape_13.setTransform(74.85,94.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgsA1QgJgLAAgYIAAhSIAbAAIAABOQAAAQAGAFQAEAHALAAQAFgBAGgCQAGgCAEgEQAFgEADgGQACgGAAgHIAAhKIAcAAIAAB9IgbAAIAAgTQgIAMgLAFQgJAGgLgBQgWAAgKgLg");
	this.shape_14.setTransform(64.95,96.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgmBPQgOgKgCgUIAbAAQADASAXAAIAFAAQAJAAAGgDQAFgEADgGQADgFABgIIABgQIAAgIQgOAUgYAAQgOAAgKgFQgKgFgGgIQgHgIgDgLQgDgLAAgOQAAgNAEgLQADgMAHgIQAGgJAKgFQAKgEANgBIAIABQAIABAIAEQAIAEAHAJIAAgPIAbAAIAABrQAAAQgEAMQgDAMgGAJQgHAIgLAFQgLAEgQAAQgbAAgNgKgAgWg3QgIAKAAAUQAAALACAIQADAHAEAFQAEAEAFADQAGACAGAAQARAAAHgLQAIgJAAgUIAAgBQAAgMgCgHQgDgIgEgEQgFgFgGgCQgGgCgGAAQgOAAgIALg");
	this.shape_15.setTransform(50.625,98.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAbBAIAAhNQAAgPgFgGQgGgGgKAAQgHAAgGACQgGADgEAEQgFAEgCAGQgDAGAAAGIAABJIgbAAIAAh8IAbAAIAAATQAIgMALgFQAJgFAMAAQAqAAAAAuIAABRg");
	this.shape_16.setTransform(36.575,96.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAxBWIgQgsIhCAAIgQAsIgeAAIBCirIAbAAIBCCrgAgZASIAyAAIgZhGg");
	this.shape_17.setTransform(21.325,94.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMBFQgIgKAAgVIAAg+IgUAAIAAgWIAUAAIAAghIAaAAIAAAhIAfAAIAAAWIgfAAIAABAQAAAJAEAFQAEAFAHgBIAIAAIAIgCIAEAUQgMAFgNAAQgUAAgIgMg");
	this.shape_18.setTransform(92.425,66.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRBAQgKgCgIgFQgIgFgFgIQgFgIgBgMIAbAAQAAAGADAEQADAEAEADQAEACAFABIAKABQAOAAAGgEQAGgEAAgIQAAgHgEgEQgEgEgLgCIgZgFQgMgDgHgEQgIgDgEgHQgEgGAAgLQAAgJAEgHQAEgHAHgFQAHgFAJgDQAKgCAKAAQAOAAAKADQAJACAGAFQAGAFAEAHQADAGABAIIgYADQgDgJgGgFQgGgFgNAAQgHAAgFACIgIADIgFAFIgBAGIABAGIAEAFIAHADIAKACIAPADQANACAIADQAIADAFAEQAFAFACAHQACAGAAAIQAAARgNALQgNAKgaAAQgKAAgKgCg");
	this.shape_19.setTransform(81.625,68.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgqAxQgPgRAAgfQAAgQAEgMQAEgNAIgIQAIgJAMgEQALgEAMAAQAPAAAKAEQALAEAHAIQAHAJADALQADALAAAOIAAALIhYAAQAAARAIAKQAJALAPAAQANAAAHgFQAGgFACgKIAbAAQgEAUgNAKQgNALgZAAQgdAAgPgRgAgVgkQgIAJgBAQIA+AAQAAgQgHgJQgIgJgPAAQgPAAgIAJg");
	this.shape_20.setTransform(68.425,68.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMBFQgIgKAAgVIAAg+IgUAAIAAgWIAUAAIAAghIAaAAIAAAhIAfAAIAAAWIgfAAIAABAQAAAJAEAFQAEAFAHgBIAIAAIAIgCIAEAUQgMAFgNAAQgUAAgIgMg");
	this.shape_21.setTransform(57.175,66.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRBAQgKgCgIgFQgIgFgFgIQgFgIgBgMIAbAAQAAAGADAEQADAEAEADQAEACAFABIAKABQAOAAAGgEQAGgEAAgIQAAgHgEgEQgEgEgLgCIgZgFQgMgDgHgEQgIgDgEgHQgEgGAAgLQAAgJAEgHQAEgHAHgFQAHgFAJgDQAKgCAKAAQAOAAAKADQAJACAGAFQAGAFAEAHQADAGABAIIgYADQgDgJgGgFQgGgFgNAAQgHAAgFACIgIADIgFAFIgBAGIABAGQABADADACIAHADIAKACIAPADQANACAIADQAIADAFAEQAFAFACAHQACAGAAAIQAAARgNALQgNAKgaAAQgKAAgKgCg");
	this.shape_22.setTransform(46.375,68.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgcBAQgIgDgGgEQgFgFgEgHQgDgHAAgKQAAgMAGgJQAFgHAKgEQAJgFALgCIAXgCIASgBIAAgFQAAgOgHgGQgGgFgMAAQgLAAgHAEQgFAFgDAIIgZgDQAEgSANgIQAOgJAVAAQAPAAAKAEQAKAEAGAGQAFAHADAJQACAKAAALIAABNIgaAAIAAgRQgHAJgLAFQgKAGgNAAQgJAAgHgCgAALAFQgLAAgIACQgHACgFADQgEADgBAEQgCAEABAFQAAAIAEAEQAGAFAKAAQARAAAIgJQAJgJAAgQIAAgHg");
	this.shape_23.setTransform(33.15,68.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag2BWIAAirIBsAAIAAAZIhPAAIAAAxIBLAAIAAAYIhLAAIAABJg");
	this.shape_24.setTransform(20.4,66.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4_1, new cjs.Rectangle(11.1,50,196,60.7), null);


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

	// timeline functions:
	this.frame_134 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(134).call(this.frame_134).wait(1));

	// Layer_1
	this.instance = new lib.Symbol8();
	this.instance.setTransform(11.2,6.5,1,1,0,0,0,11.2,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({regX:0,regY:13.1,x:0,y:13.1},0).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,0,23.9,14.3);


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

	// Layer_3
	this.instance = new lib.Symbol3();
	this.instance.setTransform(70.15,19.3,1.2266,1.2266,0,0,0,40.5,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#28245E").s().p("Aq7C+IAAl7IV3AAIAAF7g");
	this.shape.setTransform(70,20.0249,1,1.0539);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,140,40.1), null);


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
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(11.85,21.55,0.273,0.273,0,0,0,13.6,17.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F49021").s().p("AAECfQgXgKgOgWQgPgVAAgbIAAgHQADgSAGgPIAHgLQADgHAAgGQAAgPgLgJQgKgKgPACQgLABgHAHQgIAHgCAKQgCAMAFAIQgGgKgKgJQgEgHgEgPQgGgcAFgYQAIgjAbgZQAbgaAjgFQAhgHAhAQQAgAOATAeQATAdAAAjQAAAfgQAcQgFAKgLALIgUATQgMAMgdAYQgWATAAAYQAAAJADAJQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgBAAIgBAAg");
	this.shape.setTransform(11.3807,21.2337,0.2731,0.2731);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AATEnIgchBQgfhRgNhMQgqj1CYh6QgoArgSBfQgmC8BnEHg");
	this.shape_1.setTransform(9.5575,8.224,0.2731,0.2731);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AgMByQgcgmgIhCQgCgaAGgRQAKgZANgXQAQgcALgHQAOA7AeBEQgOAGgVATQgRAVgDAZQgCAPACAPQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAIgBABQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_2.setTransform(7.9401,16.1486,0.2731,0.2731);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJB1QgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQABgPgBgPQgCgZgSgUQgVgUgOgHQAchBARg+QAKAHAQAdQANAXAKAZQAHAXgDAUQgLBFgZAjQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgBAAg");
	this.shape_3.setTransform(14.9804,16.1807,0.2731,0.2731);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0EoQgqhngThYQgoi5BEh4QARgfATgWIAUgYQAOgQAKgDQAJgBAJAEQASAIAVAeQAJAMATAfQAhA1ALBFQAMBIgRBeQgJAvgRA5IgTA6QgUA7gDAAgAgohvQgSASAAAYQAAAYARASQASARAXAAQAYAAASgRQARgRAAgZQAAgYgRgRQgSgSgYAAQgXAAgRARg");
	this.shape_4.setTransform(11.5092,8.1779,0.2731,0.2731);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#27265F").s().p("AkTEUQhyhyAAiiQAAigByhyQByhzChAAQChAAByBzQBzByAACgQAACihzByQhyByihAAQihAAhyhyg");
	this.shape_5.setTransform(11.4924,11.8295,0.2732,0.2732);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(11.85,21.55,0.273,0.273,0,0,0,13.6,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F49021").s().p("AAECfQgXgKgOgWQgPgVAAgbIAAgHQADgSAGgPIAHgLQADgHAAgGQAAgPgLgJQgKgKgPACQgLABgHAHQgIAHgCAKQgCAMAFAIQgGgKgKgJQgEgHgEgPQgGgcAFgYQAIgjAbgZQAbgaAjgFQAhgHAhAQQAgAOATAeQATAdAAAjQAAAfgQAcQgFAKgLALIgUATQgMAMgdAYQgWATAAAYQAAAJADAJQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgBAAIgBAAg");
	this.shape_6.setTransform(11.3807,21.2337,0.2731,0.2731);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0099FF").s().p("AATEnIgchBQgfhRgNhMQgqj1CYh6QgoArgSBfQgmC8BnEHg");
	this.shape_7.setTransform(9.5575,8.224,0.2731,0.2731);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("AgMByQgcgmgIhCQgCgaAGgRQAKgZANgXQAQgcALgHQAOA7AeBEQgOAGgVATQgRAVgDAZQgCAPACAPQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAIgBABQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_8.setTransform(7.9401,16.1486,0.2731,0.2731);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAJB1QgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQABgPgBgPQgCgZgSgUQgVgUgOgHQAchBARg+QAKAHAQAdQANAXAKAZQAHAXgDAUQgLBFgZAjQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgBAAg");
	this.shape_9.setTransform(14.9804,16.1807,0.2731,0.2731);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag0EoQgqhngThYQgoi5BEh4QARgfATgWIAUgYQAOgQAKgDQAJgBAJAEQASAIAVAeQAJAMATAfQAhA1ALBFQAMBIgRBeQgJAvgRA5IgTA6QgUA7gDAAgAgohvQgSASAAAYQAAAYARASQASARAXAAQAYAAASgRQARgRAAgZQAAgYgRgRQgSgSgYAAQgXAAgRARg");
	this.shape_10.setTransform(11.5092,8.1779,0.2731,0.2731);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#27265F").s().p("AkTEUQhyhyAAiiQAAigByhyQByhzChAAQChAAByBzQBzByAACgQAACihzByQhyByihAAQihAAhyhyg");
	this.shape_11.setTransform(11.4924,11.8295,0.2732,0.2732);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghEHIAAoNIBEAAIAAINg");
	this.shape_12.setTransform(92.5914,9.827,0.2731,0.2732);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhsD0QgsgVgZgnQgTgfgIgwQgGglAAg5IAAkVIBFAAIAAENQAAA0AEAdQAFAhALAWQAPAdAdAQQAgASAvAAQBaAAAhg/QAMgVAEgiQADgaAAgzIAAkRIBDAAIAAENQAABCgGAlQgHAugWAgQgZAoguAUQguAXg8AAQg8AAgvgXg");
	this.shape_13.setTransform(84.0969,9.9363,0.2731,0.2732);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhxCIQg4g1AAhTQAAhRA1g2QAzgzBJAAQBFAAAsAtQAxAvAABRQAAAOgCASIkPAAQAHA0AkAdQAiAcA2AAQBBAAA5gsIAABGQgYAPgiAJQgjAJgiAAQhTAAg1gzgAg8hoQgiAagIAuIDSAAQgFgxghgZQgagVgmAAQgmAAgcAXg");
	this.shape_14.setTransform(69.4297,12.1355,0.2731,0.2732);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaDLQgagaAAhGIAAiuIhCAAIAAg7IBCAAIAAhiIBAgLIAABsIBrAAIAAA7IhrAAIAAChQAAAnAKAUQAMAaAfAAQAcAAAZgQIAAA9QgeANgiAAQg0AAgcghg");
	this.shape_15.setTransform(59.9657,10.7081,0.2731,0.2732);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggEHIAAlkIBAAAIAAFkgAgfi3QgOgNAAgUQAAgTAOgNQANgOASAAQATAAAOAOQANANAAATQAAAUgNANQgNAOgUAAQgSAAgNgOg");
	this.shape_16.setTransform(54.1138,9.827,0.2731,0.2732);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABdC2IAAjPQAAg1gRgVQgUgWglAAQgdAAggARQgeAQgUAZIAAD0IhBAAIABljIBBAAIAAAtIABABQAZgYAegOQAigPAiAAQA9AAAiAoQAPARAHAWQAIAaAAAnIAADbg");
	this.shape_17.setTransform(47.1217,12.0399,0.2731,0.2732);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ah5DxIAAhHQA4AlA4AAQAzAAAfgdQAfgdAAgyIAAgaIgBgBQgmAbg7AAQhJAAgygxQgzgyAAhPQAAhOAxg1QA0g4BTAAQAwAAAqAUIA/gLIAAFjQAABOgwAuQgxAthRAAQg9AAgzgagAhIiqQggAjAAA1QACA3AgAiQAiAkAyAAQAYAAAZgIQAXgIARgNIAAjEQgRgKgYgHQgZgHgYAAQg0AAghAkg");
	this.shape_18.setTransform(36.4354,14.2937,0.2731,0.2732);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AghEHIAAoNIBEAAIAAINg");
	this.shape_19.setTransform(29.17,9.827,0.2731,0.2732);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKHYQgfgNgTgdQgUgeAAgiIAAgJQiTgdhfh0Qhgh0AAiWQAAiuB7h7QB7h7CsgBQCtABB7B7QB7B6AACtQAABGgYBEQgYBEgtA4QgqA1g6AlQg6AlhCARIgTASQgKALgXASIgJAIQgLAKAAAKIABAHQAGAOgIAOQgKAPgRABQgGAAgGgEgAkSlLQhyBzAAChQAACUBjBvQBjBuCTATQgFAMgCAPIAAAHQAAAaAPAWQAPAWAWAKIABAAQABAAAAAAQAAAAAAgBQABAAAAAAQgBAAAAgBQgDgHAAgLQAAgZAWgSIApgkIAYgXQCDgfBVhpQBWhrAAiIQAAiihyhzQhyhxiigBQigABhyBxg");
	this.shape_20.setTransform(11.4833,13.3469,0.2733,0.2734);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAAHCQgZgLgPgXQgPgXAAgcIAAgIQACgOADgJQiTgShihwQhihwAAiUQAAijB0h0QBzhzCjAAQCjAABzB0QBzB0gBCkQAABBgWBAQgXBAgpA1QgpAzg4AkQg4AjhAAPIgXAWIggAcIgKAIQgUARAAAWQAAAJADAHQACADgCADQgCADgEAAgAkSlLQhyByAAChQAACUBkBvQBjBvCTASQgGAMgBAPIAAAHQAAAbAPAWQAOAVAXAKIABAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgDgHAAgLQAAgYAWgTIApgkIAYgXQCDgeBVhpQBWhrAAiJQAAiihzhyQhyhyihAAQihAAhyByg");
	this.shape_21.setTransform(11.4629,13.3674,0.2733,0.2734);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AABHBQgYgLgPgWQgOgWAAgbIAAgHQACgQAEgJQiVgUhihvQhihvAAiUQAAijBzhyQBzh0ChAAQCiAABzB0QBzByAACjQAACIhVBsQhVBqiFAeIgTAUIgEAEQgKAKgWASIgJAHQgVARAAAYQAAAJADAHIABACIgBACQgDAEgCAAg");
	this.shape_22.setTransform(11.497,13.3469,0.2733,0.2734);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0.1,93.6,26.299999999999997), null);


// stage content:
(lib.igniteuiangulareasilyhandleunlimitedrows336x280 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [299];
	// timeline functions:
	this.frame_299 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(299).call(this.frame_299).wait(1));

	// arrow
	this.instance = new lib.Symbol6();
	this.instance.setTransform(102.85,138,0.1507,0.1507,0,-7.5655,172.4403,-0.2,13.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({_off:false},0).to({regX:0.1,regY:13.1,scaleX:2.1986,scaleY:2.1987,skewX:14.9991,skewY:194.9988,x:150.4,y:176.55},15,cjs.Ease.quartOut).wait(197));

	// img_chart
	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(437.9,208.45,0.4896,0.4897,0,0,0,208.2,221.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(135).to({_off:false},0).to({x:287.8,y:208.25},25,cjs.Ease.quadOut).wait(140));

	// t_con
	this.instance_2 = new lib.Symbol4_1();
	this.instance_2.setTransform(71.25,112.9,1.1199,1.1199,0,0,0,62.2,15.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(77).to({_off:false},0).to({alpha:1},16).wait(207));

	// t_mas
	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(57.7,139.65,1.12,1.12,0,0,0,62,15.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({_off:false},0).to({alpha:1},21,cjs.Ease.quadOut).wait(228));

	// cta
	this.instance_4 = new lib.Symbol2();
	this.instance_4.setTransform(68.3,254.2,0.097,0.0967,0,0,0,71.1,21.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({regX:70.4,regY:20.1,scaleX:0.7698,scaleY:0.763,x:69.25,y:249.55,alpha:1},26,cjs.Ease.backOut).wait(252).to({regY:20,y:251.7},0).to({regY:20.1,scaleX:0.9383,scaleY:0.93,x:69.2,y:251.8},10,cjs.Ease.quadOut).to({regY:20,scaleX:0.7698,scaleY:0.763,x:69.25,y:251.7},10,cjs.Ease.quadOut).wait(1));

	// logo
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(269.95,26.3,1.1009,1.0988,0,0,0,46.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(300));

	// t_crea
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTBIQgMgDgIgFQgJgFgGgJQgFgJgBgOIAdAAQABAHADAFQADAEAEADQAFACAGABIALABQAQAAAGgEQAHgFAAgJQAAgHgEgFQgEgFgNgCIgcgFQgNgDgJgFQgIgDgFgIQgEgHAAgNQAAgKAEgHQAFgIAHgGQAIgFALgDQAKgDAMAAQAQAAALADQAKADAHAGQAHAFADAIQAEAHACAIIgcAEQgDgLgGgFQgHgFgPAAQgIAAgGACQgFABgEADQgDACgBADIgCAGIABAIQABACADACIAIAEIAMACIARADQAOADAJADQAJAEAGAFQAFAFACAHQACAIAAAJQAAATgOALQgPAMgdAAQgLAAgLgCg");
	this.shape.setTransform(119.925,106.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfBIIAAhXQAAgRgGgGQgHgHgMAAQgHAAgHACQgHAEgEAEQgFAFgDAGQgDAGAAAIIAABSIgeAAIAAiLIAdAAIAAAVQAKgNALgGQALgGANAAQAvAAAAA0IAABbg");
	this.shape_1.setTransform(105.175,106.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABFBIIAAhTIgBgRQgBgGgDgEQgCgEgEgCIgKgBQgIAAgGADQgGADgEAEQgEAGgDAFQgCAHAAAGIAABTIgdAAIAAhWQAAgSgGgGQgFgHgKAAIgKABIgLAGQgFAFgEAGQgDAGAAALIAABSIgfAAIAAiLIAeAAIAAAVQAOgVAUgDIALgBQAOABAJAGQAIAHAEALQASgZAcAAQAWAAAKAMQALANAAAbIAABbg");
	this.shape_2.setTransform(85.675,106.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxA7QgKgMAAgaIAAhcIAeAAIAABXQAAARAGAHQAGAGALAAQAGAAAGgCQAHgDAFgEQAFgFAEgGQADgHAAgIIAAhSIAeAAIAACLIgdAAIAAgVQgKANgLAGQgLAGgNAAQgYAAgLgNg");
	this.shape_3.setTransform(66.175,106.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPBgIAAi/IAfAAIAAC/g");
	this.shape_4.setTransform(55.2,103.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyA3QgSgUAAgjQAAgQAFgOQAEgNAJgKQAJgKANgFQANgFAPAAQARAAANAFQANAGAIAJQAJAKAFAOQAEANAAAQQAAASgFANQgFAOgKAKQgJAJgMAFQgNAFgPAAQggAAgSgTgAgbgjQgJANAAAWQAAAXAIANQAJANATAAQATAAAJgNQAJgNAAgXQAAgWgJgNQgJgOgTAAQgSAAgJAOg");
	this.shape_5.setTransform(43.725,106.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghBeQgPgHgMgNQgLgNgGgTQgFgTAAgXQAAgXAGgSQAGgTALgNQAMgNARgHQAQgHASAAQASAAANAFQANAEAJAJQAKAIAFAMQAGAMADAOIghAFQgBgKgEgHQgDgIgFgFQgFgFgIgDQgIgDgKAAQgMAAgKAFQgKAFgHAKQgGAJgEAOQgDANAAAQQAAARADANQAEAOAGAJQAIAKAJAFQAKAFAMAAQALAAAIgDQAIgDAFgGQAFgFAEgIQADgHACgKIAhAAQgBAPgFANQgGAMgKAKQgKAJgPAFQgNAGgUAAQgTAAgRgHg");
	this.shape_6.setTransform(26.15,103.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvBeQgNgFgIgIQgIgHgDgLQgDgJAAgLQAAgLADgIQAEgIAFgHQAGgHAIgEIAPgJQgHgIgHgLQgGgLAAgNQAAgJAEgJQADgIAGgFQAGgHAJgCQAJgEALAAQATAAAMAKQAMAKACAPIABAFIAAAEQgBAIgDAIQgDAGgFAGQgFAGgHAFIgMAIIAnAvQAEgKACgJQABgJAAgLIAcAAQAAAQgFAPQgEAQgIAMIAdAjIgjAAIgMgPQgJAIgNAGQgMAFgQAAQgUAAgNgFgAgtAUQgHAHAAANQAAAHACAGQACAHAFAFQAFAEAHADQAIADAMAAQALAAAHgEQAHgDAGgGIgvg4QgKAFgIAJgAghg2QAAAGACAEIAEAIIAGAHIAEAGIADgBIAIgGIAGgHQADgDABgFQACgEAAgGQAAgKgFgGQgEgFgKAAQgUAAAAAWg");
	this.shape_7.setTransform(224.575,72.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTBIQgMgDgIgFQgJgFgGgJQgFgJgBgOIAdAAQABAHADAFQADAEAEADQAFACAGABIALABQAQAAAGgEQAHgFAAgJQAAgHgEgFQgEgFgNgCIgcgFQgNgDgJgFQgIgDgFgIQgEgHAAgNQAAgKAEgHQAFgIAHgGQAIgFALgDQAKgDAMAAQAQAAALADQAKADAHAGQAHAFADAIQAEAHACAIIgcAEQgDgLgGgFQgHgFgPAAQgIAAgGACQgFABgEADQgDACgBADIgCAGIABAIQABACADACIAIAEIAMACIARADQAOADAJADQAJAEAGAFQAFAFACAHQACAIAAAJQAAATgOALQgPAMgdAAQgLAAgLgCg");
	this.shape_8.setTransform(202.225,74.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAcBGIgchlIgcBlIgeAAIgoiLIAhAAIAYBlIAdhkIAbAAIAdBkIAXhlIAgAAIgpCLg");
	this.shape_9.setTransform(185.075,74.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgyA3QgSgUAAgjQAAgQAFgOQAEgNAJgKQAJgKANgFQANgFAPAAQARAAANAFQANAGAIAJQAJAKAFAOQAEANAAAQQAAASgFANQgFAOgKAKQgJAJgMAFQgNAFgPAAQggAAgSgTgAgbgjQgJANAAAWQAAAXAIANQAJANATAAQATAAAJgNQAJgNAAgXQAAgWgJgNQgJgOgTAAQgSAAgJAOg");
	this.shape_10.setTransform(166.775,74.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAmBgIgjhMIgDAAIgGAAIgjAAIAABMIgfAAIAAi/IBBAAQAUAAAPAFQAOAGAIAHQAJAJADAJQADALAAAJQAAATgIANQgHALgQAIIAnBUgAgpgGIAkAAQALAAAGgCQAIgCAEgFQAEgEACgGQABgGAAgHQAAgHgBgGQgDgFgEgEQgEgEgJgCQgHgCgLAAIghAAg");
	this.shape_11.setTransform(150.7,72.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghBdQgLgGgHgKQgHgJgEgOQgEgNAAgRQAAgPAEgNQAEgNAHgKQAHgJALgGQALgGAOgBIAFAAIAFAAQAJABAJAFQAJAEAIAJIAAhDIAeAAIAAC/IgeAAIAAgUQgJAMgKAGQgLAGgOAAQgPAAgLgFgAgYgMQgKAMAAAYQAAANADAKQACAJAFAGQAFAGAGACQAGADAHAAQAQAAALgLQAKgLAAgXIAAgHQAAgNgDgIQgDgJgFgGQgFgFgGgCQgHgCgHAAQgQAAgJAMg");
	this.shape_12.setTransform(126.875,72.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgvA3QgRgTAAgjQAAgRAEgOQAGgOAJgKQAJgJAMgFQANgFANAAQARAAALAFQANAFAHAJQAIAJAEAMQAEANgBAPIAAAMIhjAAQABAUAJALQAJAMARAAQAPAAAIgFQAHgGACgLIAdAAQgDAWgPAMQgPAMgcAAQggAAgRgTgAgXgoQgJAKgCARIBGAAQAAgRgJgKQgHgKgSAAQgQAAgJAKg");
	this.shape_13.setTransform(111.2,74.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOBOQgIgMgBgXIAAhGIgWAAIAAgZIAWAAIAAglIAeAAIAAAlIAjAAIAAAZIgjAAIAABIQgBAKAFAGQAFAEAIAAIAJAAIAIgCIAEAXQgMAEgQAAQgWAAgJgMg");
	this.shape_14.setTransform(98.6,73.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOBgIAAiLIAdAAIAACLgAgPhBIAAgeIAfAAIAAAeg");
	this.shape_15.setTransform(90.35,72.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABFBIIAAhTIgBgRQgBgHgDgDQgCgEgEgCIgKgBQgIAAgGADQgGACgEAFQgEAGgDAGQgCAFAAAHIAABTIgdAAIAAhWQAAgSgGgGQgFgHgKAAIgKABIgLAGQgFAEgEAHQgDAGAAAKIAABTIgfAAIAAiLIAeAAIAAAUQAOgUAUgDIALgBQAOAAAJAHQAIAHAEALQASgZAcAAQAWAAAKAMQALAMAAAbIAABcg");
	this.shape_16.setTransform(75.425,74.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOBgIAAiLIAdAAIAACLgAgPhBIAAgeIAfAAIAAAeg");
	this.shape_17.setTransform(60.4,72.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOBgIAAi/IAdAAIAAC/g");
	this.shape_18.setTransform(53.8,72.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAfBIIAAhWQAAgSgGgGQgHgHgMAAQgHAAgHADQgHADgEAEQgFAFgDAHQgDAGAAAGIAABTIgeAAIAAiLIAdAAIAAAUQAKgNALgFQALgGANAAQAvAAAAAzIAABcg");
	this.shape_19.setTransform(42.725,74.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag3BOQgTgTAAgrIAAhxIAgAAIAABxQAAAcAKANQAKANAXAAQAWAAAKgNQAJgNAAgcIAAhxIAhAAIAABxQAAAXgGAQQgFAPgKAJQgKALgNAEQgOAFgRgBQgkABgTgVg");
	this.shape_20.setTransform(25.65,72.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDD1B9").s().p("AgjAqQgNgPAAgbQAAgMADgKQAEgLAHgHQAHgHAJgEQAKgDAKgBQAMABAJADQAJAEAFAHQAHAHACAIQADAKAAAMIAAAJIhKAAQAAAOAHAJQAHAJANAAQALAAAFgEQAGgEACgIIAWAAQgDAQgLAJQgLAJgVgBQgYAAgNgNgAgRgdQgHAHgBANIA0AAQAAgNgHgHQgGgIgNAAQgMAAgGAIg");
	this.shape_21.setTransform(136.5,42.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDD1B9").s().p("AgKBIIAAiPIAVAAIAACPg");
	this.shape_22.setTransform(128.125,40.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FDD1B9").s().p("AgYBGQgJgEgFgHQgFgIgEgKQgCgLAAgMQAAgLADgJQACgKAGgHQAFgIAJgEQAIgFAKAAIAEgBIADABQAHABAHADQAGADAHAIIAAg0IAWAAIAACPIgWAAIAAgOQgHAJgIAFQgIADgKAAQgLAAgIgDgAgSgJQgHAJAAASQAAAKACAHQACAHAEAEQADAFAEACQAFACAFAAQAMAAAIgIQAIgJAAgQIAAgGQAAgKgDgGQgCgHgDgDQgEgEgFgCQgFgCgFAAQgMAAgHAJg");
	this.shape_23.setTransform(119.35,41.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FDD1B9").s().p("AAXA2IAAhBQAAgMgFgGQgEgEgJAAQgFAAgGACQgEACgFADQgDAEgCAEQgCAFAAAGIAAA9IgXAAIAAhoIAWAAIAAAQQAHgKAJgFQAIgEAKAAQAjAAAAAnIAABEg");
	this.shape_24.setTransform(107.6,42.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FDD1B9").s().p("AgXA2QgHgCgFgEQgEgEgDgGQgDgGAAgIQAAgLAFgHQAFgGAHgDQAIgEAKgCIASgCIAPAAIAAgFQAAgMgFgEQgGgFgJAAQgJAAgGAEQgFADgCAHIgVgCQADgPAMgHQAKgHATAAQAMAAAIADQAIADAGAGQAEAFACAIQACAIAAAJIAABBIgWAAIAAgOQgGAHgIAFQgJAEgLAAQgHAAgGgBgAAJAEQgKAAgFACQgHACgDACQgEADgBADIgBAHQAAAHAEAEQAFAEAIAAQAOAAAHgIQAIgIgBgNIAAgGg");
	this.shape_25.setTransform(95.85,42.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FDD1B9").s().p("AAhBIIAAg/IhAAAIAAA/IgYAAIAAiPIAYAAIAAA6IBAAAIAAg6IAXAAIAACPg");
	this.shape_26.setTransform(83.4,40.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FDD1B9").s().p("AgiBIIgKgDIAEgRQAFACAHAAQAGAAADgEQADgCADgJIAFgKIgshkIAaAAIAcBLIAbhLIAZAAIgqBpIgIAQQgCAIgEAEQgEAFgFADQgGACgIAAIgJAAg");
	this.shape_27.setTransform(66.25,44.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FDD1B9").s().p("AgKBIIAAiPIAVAAIAACPg");
	this.shape_28.setTransform(58.275,40.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FDD1B9").s().p("AgKBIIAAhoIAVAAIAABogAgLgwIAAgXIAXAAIAAAXg");
	this.shape_29.setTransform(53.275,40.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FDD1B9").s().p("AgOA2QgJgBgGgEQgHgFgEgHQgEgGgBgLIAWAAQABAGACADIAFAFQAEADAEAAIAJABQALAAAFgEQAFgDAAgGQAAgGgDgDQgDgEgKgCIgVgEQgJgCgHgEQgGgCgDgGQgDgFAAgJQAAgIADgGQADgGAGgEQAFgEAIgDQAIgCAJAAQAMABAIACQAIADAFADQAFAEADAGIAEALIgVAEQgCgJgFgDQgFgEgMAAIgJABIgHADIgEAEIgBAEIABAHIADADIAGADIAJACIAMABIASAFQAGADAFADQAEAFABAFQACAFAAAHQAAAOgLAJQgLAJgWgBQgIAAgIgBg");
	this.shape_30.setTransform(45.375,42.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FDD1B9").s().p("AgYA2QgGgCgFgEQgFgEgCgGQgDgGAAgIQAAgLAFgHQAEgGAJgDQAHgEAKgCIASgCIAQAAIAAgFQAAgMgGgEQgGgFgJAAQgJAAgGAEQgFADgBAHIgVgCQACgPALgHQAMgHARAAQANAAAJADQAHADAFAGQAFAFACAIQACAIAAAJIAABBIgWAAIAAgOQgGAHgIAFQgJAEgLAAQgHAAgHgBgAAJAEQgJAAgHACQgGACgEACQgDADgBADIgBAHQAAAHAEAEQAEAEAJAAQAOAAAIgIQAGgIABgNIAAgGg");
	this.shape_31.setTransform(34.25,42.875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FDD1B9").s().p("AgxBIIAAiPIBfAAIAAAVIhGAAIAAAmIBCAAIAAAUIhCAAIAAArIBKAAIgDAVg");
	this.shape_32.setTransform(23.425,40.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(300));

	// bg_icon
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DD570E").s().p("AtVJhIia0zIPulnIPvFnIAAAPIACABIiaUzItWHJgAJ0ImIpz2DIp1WDIDrAAIB/k8IIVAAIB/E8IDqAAgAi3gBIC3m7IC4G7g");
	this.shape_33.setTransform(256.3308,170.983,0.6556,0.6559);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(300));

	// bg
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CF4214").s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");
	this.shape_34.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(300));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(14.5,140,524.2,193.5);
// library properties:
lib.properties = {
	id: 'B915F0BB2CAF214394D0C3C0B5CA43BE',
	width: 336,
	height: 280,
	fps: 30,
	color: "#CF4214",
	opacity: 1.00,
	manifest: [
		{src:"images/Screenshot.png?1730205981953", id:"Screenshot"}
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