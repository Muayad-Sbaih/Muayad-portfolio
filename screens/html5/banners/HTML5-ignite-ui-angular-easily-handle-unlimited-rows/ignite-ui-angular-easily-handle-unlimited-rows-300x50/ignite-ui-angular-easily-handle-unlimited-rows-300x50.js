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
// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("AgTA3QgHgDgEgGQgEgGgDgIQgCgIAAgKQAAgJADgHQACgIAEgGQAEgFAHgEQAGgDAIgBIAEAAIACAAQAGABAFADQAFACAFAGIAAgoIASAAIAABxIgSAAIAAgMQgFAHgHAEQgGADgIAAQgJAAgGgDgAgOgHQgGAHAAAOQAAAIACAGQABAFADAEQADADAEACQADABAEAAQAKAAAGgGQAGgGAAgOIAAgFQAAgHgCgFQgBgFgDgDQgDgDgEgCQgEgBgFAAQgJAAgFAHg");
	this.shape.setTransform(188.375,11.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIA5IAAhSIASAAIAABSgAgIgmIAAgSIASAAIAAASg");
	this.shape_1.setTransform(181.65,11.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAqIAAhSIASAAIAAAMQAEgGAFgEQAGgDAIAAIAEAAIAEAAIgCARIgFgBIgEAAQgFAAgDACIgGAEQgDADgBAEQgCADAAAEIAAAvg");
	this.shape_2.setTransform(176.9,12.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSA4QgKgFgGgIQgIgHgDgLQgDgLAAgOQAAgNAEgLQADgLAHgIQAHgHAKgFQAJgEAKAAQALAAAIACQAIADAFAFQAFAFADAFQAEAHABAHIgSACIgEgIQgCgEgDgDQgCgCgFgBIgLgBQgHAAgGACQgFAEgFAFQgEAGgBAIQgCAIAAAJQAAAKACAIQACAIAEAFQAEAHAHACQAGADAHAAQAJAAAGgBQAHgCAFgEIAAgYIgZAAIAAgPIArAAIAAAuQgIAJgMAEQgNAEgMAAQgMAAgKgEg");
	this.shape_3.setTransform(167.6,11.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSArQgGgCgDgDQgEgDgCgEQgCgGAAgGQAAgIADgGQAEgFAGgCQAHgDAIgCIANgBIANgBIAAgDQAAgJgFgFQgEgDgIAAQgHAAgEADQgEADgCAFIgQgBQACgNAJgFQAJgGAOAAQAKAAAHADQAGACAEAFQAEAEABAHQABAFABAIIAAAzIgRAAIAAgLQgFAGgHAEQgHADgIAAQgHAAgEgBgAAIADQgIAAgFACQgFABgDACQgCACgBADIgBAFQAAAGADADQAEADAGAAQALAAAGgGQAGgGAAgLIAAgEg");
	this.shape_4.setTransform(153.65,12.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAuQgGgGAAgPIAAgpIgNAAIAAgOIANAAIAAgXIARAAIAAAXIAVAAIAAAOIgVAAIAAAqQAAAHADADQACADAGAAIAEgBIAGgBIACAOQgHADgKgBQgMABgFgIg");
	this.shape_5.setTransform(146.65,11.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTArQgEgCgFgDQgDgDgCgEQgDgGAAgGQABgIAEgGQAEgFAGgCQAFgDAJgCIANgBIANgBIAAgDQAAgJgFgFQgEgDgHAAQgIAAgEADQgEADgBAFIgRgBQACgNAJgFQAJgGAOAAQAKAAAHADQAGACAEAFQAEAEABAHQACAFAAAIIAAAzIgRAAIAAgLQgGAGgGAEQgHADgIAAQgGAAgGgBgAAHADIgMACQgFABgDACQgCACgBADIgBAFQAAAGAEADQACADAHAAQAMAAAFgGQAGgGAAgLIAAgEg");
	this.shape_6.setTransform(139.05,12.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvA5IAAhxIApAAQAMAAAKADQAKADAIAIQAGAGAEAMQAEAKAAAOQAAAOgEAKQgEALgHAHQgIAHgLAFQgLADgNAAgAgcAoIATAAQAJAAAIgCQAGgDAFgFQAEgGACgIQADgHAAgJQAAgSgIgLQgIgLgSAAIgWAAg");
	this.shape_7.setTransform(129.3,11.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAqIAAhSIASAAIAAAMQAFgGAEgEQAGgDAIAAIAEAAIAEAAIgDARIgEgBIgEAAQgFAAgDACIgGAEQgDADgBAEQgBADgBAEIAAAvg");
	this.shape_8.setTransform(116.95,12.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTArQgEgCgFgDQgDgDgCgEQgDgGAAgGQAAgIAFgGQADgFAHgCQAFgDAIgCIAOgBIANgBIAAgDQAAgJgFgFQgEgDgHAAQgIAAgEADQgEADgBAFIgRgBQACgNAJgFQAJgGAOAAQAKAAAHADQAGACAEAFQADAEACAHQABAFAAAIIAAAzIgQAAIAAgLQgGAGgGAEQgHADgJAAQgFAAgGgBgAAHADIgMACQgFABgCACQgDACgCADIAAAFQAAAGAEADQACADAIAAQALAAAFgGQAGgGAAgLIAAgEg");
	this.shape_9.setTransform(108.8,12.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_10.setTransform(102.675,11.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAjQgGgHAAgQIAAg2IASAAIAAAzQAAALAEAEQADADAHAAIAHgBQAEgBADgDQADgDACgEQACgEAAgEIAAgxIASAAIAABSIgSAAIAAgMQgGAIgGADQgGAEgIAAQgOAAgHgIg");
	this.shape_11.setTransform(96.075,13.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZA1QgJgHgBgNIASAAQACAMAPAAIADAAQAGAAAEgDQADgCACgEIADgJIABgKIAAgGQgKANgQAAQgJAAgGgDQgHgDgEgGQgFgFgCgHQgCgIAAgIQAAgJADgIQACgHAEgGQAFgGAGgDQAHgDAIAAIAFAAIALADQAGADAEAGIAAgKIASAAIAABHQAAAKgCAJQgCAIgFAGQgEAFgIADQgHADgLAAQgRAAgJgGgAgOglQgGAHAAANQAAAIACAFQACAEACAEQADADAEABQADACAEAAQALAAAGgHQAFgGAAgNIAAgBQAAgIgCgFQgCgFgDgDQgDgDgEgBIgIgCQgJAAgFAHg");
	this.shape_12.setTransform(86.475,14.4125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AASArIAAgzQAAgLgEgDQgDgFgIAAQgDAAgFACQgDACgEADIgEAHIgBAHIAAAxIgSAAIAAhSIARAAIAAAMQAGgIAGgDQAHgEAIAAQAcAAAAAfIAAA2g");
	this.shape_13.setTransform(77.15,12.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAgA5IgKgdIgrAAIgLAdIgUAAIArhxIASAAIAsBxgAgRAMIAhAAIgQgug");
	this.shape_14.setTransform(66.95,11.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAuQgFgGAAgPIAAgpIgNAAIAAgOIANAAIAAgXIARAAIAAAXIAVAAIAAAOIgVAAIAAAqQAAAHADADQACADAGAAIAEgBIAGgBIACAOQgIADgJgBQgMABgGgIg");
	this.shape_15.setTransform(55.05,11.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMArQgGgBgFgEQgFgDgEgFQgDgGAAgIIARAAQAAAFACACIAEAEQADACAEABIAGAAQAKAAADgDQAFgCAAgGQAAgEgDgDQgCgDgJgBIgQgDQgIgCgEgDQgFgBgDgFQgDgEABgIQgBgFADgFQADgFAEgDQAFgEAGgBQAGgCAHAAQAJAAAGACQAHACAEADQAEAEACAEIAEAJIgRACQgCgGgEgDQgEgDgJAAIgHABIgGACIgCADIgBAEIABAEIABADIAGACIAGACIAKACIAOADIAIAFQAEADABAEQACAFAAAFQAAALgJAHQgJAHgRAAIgOgBg");
	this.shape_16.setTransform(47.8,12.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcAhQgKgMAAgUQAAgKADgIQADgJAFgFQAGgGAHgDQAIgDAHAAQAKAAAHADQAHADAFAFQAEAGACAHQADAIAAAJIAAAHIg7AAQABALAFAHQAGAHAJAAQAJAAAFgDQAEgEACgGIARAAQgDANgIAHQgJAHgRAAQgSAAgLgLgAgNgXQgGAGgBAKIApAAQAAgKgFgGQgEgGgLAAQgJAAgFAGg");
	this.shape_17.setTransform(38.95,12.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHAuQgGgGAAgPIAAgpIgNAAIAAgOIANAAIAAgXIARAAIAAAXIAVAAIAAAOIgVAAIAAAqQAAAHADADQACADAGAAIAEgBIAGgBIACAOQgHADgKgBQgMABgFgIg");
	this.shape_18.setTransform(31.45,11.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMArQgGgBgFgEQgGgDgDgFQgDgGgBgIIASAAQABAFABACIAEAEQADACAEABIAGAAQAKAAADgDQAEgCAAgGQAAgEgCgDQgDgDgIgBIgQgDQgIgCgEgDQgFgBgDgFQgCgEAAgIQAAgFACgFQADgFAEgDQAEgEAHgBQAGgCAHAAQAKAAAFACQAHACAEADQAEAEACAEIADAJIgQACQgCgGgEgDQgDgDgKAAIgIABIgFACIgCADIgBAEIABAEIACADIAEACIAHACIAKACIAOADIAJAFQADADABAEQABAFAAAFQABALgJAHQgJAHgRAAIgOgBg");
	this.shape_19.setTransform(24.2,12.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSArQgFgCgEgDQgEgDgCgEQgCgGgBgGQAAgIAEgGQAFgFAGgCQAGgDAHgCIAPgBIAMgBIAAgDQAAgJgEgFQgFgDgIAAQgHAAgEADQgEADgCAFIgQgBQACgNAJgFQAJgGAOAAQAKAAAGADQAHACAEAFQADAEACAHQACAFgBAIIAAAzIgRAAIAAgLQgEAGgHAEQgHADgJAAQgFAAgFgBgAAIADQgIAAgFACQgFABgCACQgEACgBADIAAAFQAAAGADADQAEADAHAAQAKAAAGgGQAGgGAAgLIAAgEg");
	this.shape_20.setTransform(15.35,12.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjA5IAAhxIBIAAIAAAQIg1AAIAAAhIAxAAIAAAQIgxAAIAAAwg");
	this.shape_21.setTransform(6.85,11.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,195.6,22.9), null);


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
	this.shape.graphics.f("#FFDBC8").s().p("AgSAVQgGgHAAgNQAAgHACgFQACgFADgEQADgEAFgCQAFgCAFAAQAHAAAEACQAFACADADQADAEABAFQABAFAAAGIAAAEIgmAAQABAHADAFQAEAFAGAAQAFAAAEgCQADgDAAgEIAMAAQgBAJgGAFQgGAEgLAAQgMAAgHgIgAgIgPQgEAEgBAHIAbAAQAAgHgDgEQgEgEgGABQgGAAgDADg");
	this.shape.setTransform(69.85,-43.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDBC8").s().p("AgFAmIAAhKIALAAIAABKg");
	this.shape_1.setTransform(65.5,-44.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDBC8").s().p("AgMAkQgFgCgCgEQgDgDgCgGQgBgFAAgGQAAgGABgFIAFgJQACgEAFgCQAEgCAGAAIACAAIAAAAIAHACQAEABAEAEIAAgaIALAAIAABKIgLAAIAAgIQgEAFgEACQgEACgFAAQgGAAgEgCgAgJgEQgEAEABAJIABAJIACAGQACADADABIAEABQAGAAAEgFQAFgEAAgJIAAgDQgBgFgBgDQgBgDgCgCQgBgCgDgBIgGgBQgFAAgEAFg");
	this.shape_2.setTransform(60.9,-44.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFDBC8").s().p("AAMAcIAAghQAAgHgCgCQgDgDgFAAIgEABQgDABgCACIgDAFQgBACAAADIAAAfIgMAAIAAg1IAMAAIAAAIQADgFAFgDQADgCAGAAQASAAAAAUIAAAjg");
	this.shape_3.setTransform(54.775,-43.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFDBC8").s().p("AgMAcIgGgDQgCgCgCgDQgBgDAAgFQAAgFACgEQADgDAEgBIAJgDIAJgBIAIgBIAAgBQAAgHgDgCQgDgCgEAAQgFAAgDABQgCACgCADIgLgBQACgHAGgEQAGgEAJAAQAHAAAEACQAEABADADQACAEABADIABAJIAAAiIgLAAIAAgIQgDAEgFADQgFACgFAAIgHgBgAAEACIgHABIgFACQgBABAAAAQAAAAgBABQAAAAAAABQAAAAgBABIAAADQAAAEACACQACABAFAAQAGAAAFgDQADgFAAgGIAAgEg");
	this.shape_4.setTransform(48.7,-43.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFDBC8").s().p("AARAmIAAgiIghAAIAAAiIgNAAIAAhKIANAAIAAAeIAhAAIAAgeIANAAIAABKg");
	this.shape_5.setTransform(42.2,-44.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFDBC8").s().p("AgRAlIgGgBIADgKIAGACQADAAACgCIADgFIACgGIgXg0IAOAAIAOAnIAOgnIANAAIgWA2IgEAJIgCAGIgFAEQgDACgFAAIgEgBg");
	this.shape_6.setTransform(33.25,-42.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFDBC8").s().p("AgFAmIAAhKIALAAIAABKg");
	this.shape_7.setTransform(29.1,-44.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFDBC8").s().p("AgFAmIAAg2IALAAIAAA2gAgFgYIAAgMIALAAIAAAMg");
	this.shape_8.setTransform(26.475,-44.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFDBC8").s().p("AgHAcIgIgCQgDgDgCgEQgDgDAAgFIALAAIACAFIADACIAEABIAEABQAGAAACgCQADgCAAgDQAAgDgBgCQgCgBgFgCIgKgCIgJgCQgDgBgCgEQgCgDABgEQgBgEACgDIAFgGIAHgCQAEgCAEAAQAGAAAFACQAEAAACADQADACABADIADAGIgLACQgBgFgEgBQgCgCgGAAIgEAAIgEACIgCABIAAADIAAADIABACIAEABIAEABIAGABIAKADQADABACABIADAGIABAFQAAAIgGAFQgFAEgMAAIgIgBg");
	this.shape_9.setTransform(22.4,-43.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFDBC8").s().p("AgMAcIgGgDQgCgCgCgDQgBgDAAgFQAAgFACgEQADgDAEgBIAJgDIAJgBIAIgBIAAgBQAAgHgDgCQgDgCgEAAQgFAAgDABQgDACgBADIgLgBQACgHAGgEQAFgEAKAAQAHAAAEACQAEABADADQACAEABADIABAJIAAAiIgLAAIAAgIQgDAEgFADQgFACgFAAIgHgBgAAFACIgIABIgFACQAAABgBAAQAAAAgBABQAAAAAAABQAAAAgBABIAAADQAAAEACACQACABAFAAQAGAAAEgDQAEgFAAgGIAAgEg");
	this.shape_10.setTransform(16.65,-43.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFDBC8").s().p("AgZAmIAAhKIAxAAIAAALIglAAIAAATIAjAAIAAAKIgjAAIAAAXIAnAAIgCALg");
	this.shape_11.setTransform(11,-44.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(5.6,-52.5,70,16.4), null);


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


(lib.Scene_1_Layer_2_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#28245E").s().p("EgpaAJBIAAyCMBS1AAAIAASCg");
	this.shape.setTransform(-267.475,50.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#28245E").s().p("EgqCAJBIAAyCMBUGAAAIAASCg");
	this.shape_1.setTransform(-235.15,50.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#28245E").s().p("EgqmAJBIAAyCMBVNAAAIAASCg");
	this.shape_2.setTransform(-206.95,50.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#28245E").s().p("EgrFAJBIAAyCMBWLAAAIAASCg");
	this.shape_3.setTransform(-182.525,50.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#28245E").s().p("EgrfAJBIAAyCMBW/AAAIAASCg");
	this.shape_4.setTransform(-161.475,50.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#28245E").s().p("Egr2AJBIAAyCMBXtAAAIAASCg");
	this.shape_5.setTransform(-143.525,50.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#28245E").s().p("EgsJAJBIAAyCMBYTAAAIAASCg");
	this.shape_6.setTransform(-128.3,50.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#28245E").s().p("EgsZAJBIAAyCMBYzAAAIAASCg");
	this.shape_7.setTransform(-115.55,50.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#28245E").s().p("EgsmAJBIAAyCMBZNAAAIAASCg");
	this.shape_8.setTransform(-104.975,50.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#28245E").s().p("EgsxAJBIAAyCMBZjAAAIAASCg");
	this.shape_9.setTransform(-96.325,50.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#28245E").s().p("Egs6AJBIAAyCMBZ1AAAIAASCg");
	this.shape_10.setTransform(-89.35,50.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#28245E").s().p("EgtBAJBIAAyCMBaDAAAIAASCg");
	this.shape_11.setTransform(-83.8,50.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#28245E").s().p("EgtGAJBIAAyCMBaNAAAIAASCg");
	this.shape_12.setTransform(-79.475,50.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#28245E").s().p("EgtKAJBIAAyCMBaVAAAIAASCg");
	this.shape_13.setTransform(-76.2,50.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#28245E").s().p("EgtOAJBIAAyCMBadAAAIAASCg");
	this.shape_14.setTransform(-73.75,50.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#28245E").s().p("EgtQAJBIAAyCMBahAAAIAASCg");
	this.shape_15.setTransform(-72,50.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#28245E").s().p("EgtRAJBIAAyCMBakAAAIAASCg");
	this.shape_16.setTransform(-70.8,50.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#28245E").s().p("EgtSAJBIAAyCMBalAAAIAASCg");
	this.shape_17.setTransform(-70.025,50.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#28245E").s().p("EgtTAJBIAAyCMBanAAAIAASCg");
	this.shape_18.setTransform(-69.55,50.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#28245E").s().p("EgtUAJBIAAyCMBaoAAAIAASCg");
	this.shape_19.setTransform(-69.1,50.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},85).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18,p:{x:-69.55}}]},1).to({state:[{t:this.shape_18,p:{x:-69.275}}]},1).to({state:[{t:this.shape_18,p:{x:-69.15}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).wait(192));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bg_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bg_icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD570E").s().p("AtVJhIia0zIPulnIPvFnIAAAPIACABIiaUzItWHJgAJ0ImIpz2DIp1WDIDrAAIB/k8IIVAAIB/E8IDqAAgAi3gBIC3m7IC4G7g");
	this.shape.setTransform(182.8713,24.3913,0.2299,0.23);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(241));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF4214").s().p("A3bD6IAAnzMAu3AAAIAAHzg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(241));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


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


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


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
	this.instance = new lib.Symbol4();
	this.instance.setTransform(56.6,67.6,1,1,0,0,0,62,15.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMArQgGgBgFgEQgFgDgEgFQgDgGgBgIIASAAQABAFABACIAEAEQADACAEABIAGAAQAKAAADgDQAEgCABgGQAAgEgDgDQgCgDgJgBIgQgDQgIgCgEgDQgFgBgDgFQgCgEAAgIQAAgFACgFQADgFAEgDQAFgEAGgBQAGgCAHAAQAKAAAFACQAHACAEADQAEAEACAEIADAJIgQACQgCgGgEgDQgDgDgKAAIgHABIgGACIgCADIgBAEIABAEIACADIAEACIAHACIAKACIAOADIAJAFQADADABAEQACAFAAAFQAAALgJAHQgJAHgRAAIgOgBg");
	this.shape.setTransform(196.2,27.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASArIAAgzQAAgLgEgEQgDgDgIAAQgDAAgFACQgDABgEADIgEAHIgBAIIAAAwIgSAAIAAhSIARAAIAAAMQAGgHAGgFQAHgDAIAAQAcAAAAAfIAAA2g");
	this.shape_1.setTransform(187.4,27.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AApArIAAgxIAAgKIgDgHIgEgCIgFgBQgFAAgEACQgDABgDADIgEAHIgBAHIAAAxIgSAAIAAgyQAAgMgDgEQgDgDgGAAIgGABQgDAAgDADIgGAHQgBAEAAAFIAAAxIgSAAIAAhSIARAAIAAAMQAJgMALgCIAHAAQAJAAAEADQAFAFACAHQAMgQAPAAQAOAAAGAIQAGAHABAQIAAA2g");
	this.shape_2.setTransform(175.85,27.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdAjQgGgHAAgQIAAg2IASAAIAAAzQAAALAEAEQADADAHAAIAHgBQAEgBADgDQADgDACgEQACgEAAgEIAAgxIASAAIAABSIgSAAIAAgMQgGAIgGADQgGAEgIAAQgOAAgHgIg");
	this.shape_3.setTransform(164.225,27.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_4.setTransform(157.675,26.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAhQgKgMAAgVQAAgJADgIQACgIAGgGQAFgGAIgDQAHgDAJAAQAKAAAIADQAHAEAGAFQAFAGACAIQADAIAAAJQAAALgDAIQgDAIgGAGQgFAGgIACQgHADgJAAQgTAAgLgLgAgQgUQgFAIAAAMQAAAOAFAIQAFAIALAAQALAAAGgIQAFgIAAgOQAAgNgFgHQgGgIgLAAQgLAAgFAIg");
	this.shape_5.setTransform(150.825,27.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTA4QgKgFgGgHQgHgIgDgLQgEgLAAgOQAAgNAEgMQAEgLAGgHQAHgIAKgEQAKgEAKAAQALAAAIADQAHACAGAGQAGAEADAIQADAGACAJIgTADIgDgKQgCgFgEgDQgDgDgEgCQgFgCgGAAQgHAAgGAEQgFACgFAHQgEAFgCAIQgCAIAAAJQAAAKACAIQADAIAEAGQAEAFAGAEQAGADAGAAQAHAAAFgCQAEgCADgEQAEgDACgEIACgLIAVAAQgBAKgEAHQgDAHgGAGQgGAGgIADQgJADgLAAQgLAAgKgEg");
	this.shape_6.setTransform(140.375,26.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbA4QgJgDgFgFQgEgEgCgGIgBgMQAAgHACgFQACgFADgEQADgEAFgBIAJgGQgFgFgDgHQgEgGAAgIQAAgGACgEQADgFADgEQAEgDAFgCQAFgCAGAAQAMAAAGAGQAIAGABAJIAAADIAAACIgBAKIgGAHIgGAGIgHAFIAWAcQADgGABgGIABgLIARAAQgBAJgDAJQgDAJgEAIIASAUIgWAAIgHgIQgGAFgGADQgIADgJAAQgMAAgHgDgAgaAMQgFAEABAIIABAIQABAEADACQADADAEACQAFABAGAAQAHAAAEgCQAEgCADgDIgbgiQgGAEgEAFgAgTggIABAGIACAFIAEAEIADAEIABgBIAFgDIADgEIACgFIABgGQAAgGgDgDQgCgEgFAAQgMAAAAANg");
	this.shape_7.setTransform(126.05,26.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMArQgGgBgFgEQgFgDgEgFQgDgGAAgIIARAAQAAAFACACIAEAEQADACADABIAHAAQAKAAADgDQAFgCAAgGQgBgEgCgDQgCgDgJgBIgQgDQgIgCgEgDQgFgBgDgFQgDgEABgIQgBgFADgFQADgFAEgDQAFgEAGgBQAGgCAHAAQAJAAAGACQAHACAEADQAEAEACAEIAEAJIgRACQgCgGgEgDQgEgDgJAAIgHABIgGACIgCADIgBAEIABAEIABADIAGACIAGACIAKACIAOADIAIAFQAEADABAEQABAFABAFQAAALgJAHQgJAHgRAAIgOgBg");
	this.shape_8.setTransform(112.7,27.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARAqIgRg8IgQA8IgSAAIgYhSIAUAAIAOA7IARg7IAQAAIARA7IAOg7IATAAIgYBSg");
	this.shape_9.setTransform(102.475,27.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeAhQgKgMAAgVQAAgJADgIQACgIAGgGQAFgGAIgDQAHgDAJAAQAKAAAIADQAHAEAGAFQAFAGACAIQADAIAAAJQAAALgDAIQgDAIgGAGQgFAGgIACQgHADgJAAQgTAAgLgLgAgQgUQgFAIAAAMQAAAOAFAIQAFAIALAAQALAAAGgIQAFgIAAgOQAAgNgFgHQgGgIgLAAQgLAAgFAIg");
	this.shape_10.setTransform(91.575,27.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXA5IgVguIgCABIgDAAIgUAAIAAAtIgUAAIAAhxIAnAAQAMAAAJADQAIADAFAFQAFAFACAFQACAGAAAGQAAALgFAIQgEAHgKAEIAYAygAgXgDIAVAAIAKgCQAEgBADgDIADgGIABgIQAAgDgBgDQgBgEgDgCIgHgEIgLgBIgTAAg");
	this.shape_11.setTransform(81.975,26.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTA3QgHgDgEgGQgEgGgDgIQgCgIAAgKQAAgJADgHQACgIAEgGQAEgFAHgEQAGgDAIgBIAEAAIACAAQAGABAFADQAFACAFAGIAAgoIASAAIAABxIgSAAIAAgMQgFAHgHAEQgGADgIAAQgJAAgGgDgAgOgHQgGAHAAAOQAAAIACAGQABAFADAEQADADAEACQADABAEAAQAKAAAGgGQAGgGAAgOIAAgFQAAgHgCgFQgBgFgDgDQgDgDgEgCQgEgBgFAAQgJAAgFAHg");
	this.shape_12.setTransform(67.825,26.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbAhQgLgMAAgUQAAgKADgIQADgJAGgFQAEgGAIgDQAHgDAIAAQAKAAAHADQAHADAFAFQAEAGACAHQADAIAAAJIAAAHIg7AAQAAALAGAHQAFAHAKAAQAJAAAFgDQAEgEABgGIASAAQgDANgIAHQgJAHgRAAQgSAAgKgLgAgOgXQgEAGgBAKIAoAAQAAgKgEgGQgGgGgKAAQgJAAgGAGg");
	this.shape_13.setTransform(58.45,27.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHAvQgGgIAAgOIAAgpIgNAAIAAgOIANAAIAAgWIARAAIAAAWIAUAAIAAAOIgUAAIAAArQAAAGACADQAEADAEAAIAGAAIAEgBIADANQgIADgIAAQgNgBgFgGg");
	this.shape_14.setTransform(50.95,26.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIA5IAAhSIASAAIAABSgAgIgmIAAgSIASAAIAAASg");
	this.shape_15.setTransform(46,26.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AApArIAAgxIgBgKIgCgHIgEgCIgGgBQgEAAgEACQgEABgCADIgEAHIgBAHIAAAxIgRAAIAAgyQAAgMgEgEQgDgDgGAAIgFABQgEAAgDADIgGAHQgCAEAAAFIAAAxIgSAAIAAhSIASAAIAAAMQAJgMALgCIAHAAQAIAAAGADQAEAFADAHQAKgQARAAQANAAAGAIQAHAHgBAQIAAA2g");
	this.shape_16.setTransform(37.2,27.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIA5IAAhSIASAAIAABSgAgIgmIAAgSIASAAIAAASg");
	this.shape_17.setTransform(28.2,26.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_18.setTransform(24.275,26.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AASArIAAgzQAAgLgDgEQgEgDgHAAQgEAAgEACQgFABgCADIgFAHIgCAIIAAAwIgSAAIAAhSIASAAIAAAMQAGgHAGgFQAHgDAHAAQAcAAAAAfIAAA2g");
	this.shape_19.setTransform(17.7,27.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AghAvQgLgMABgZIAAhEIASAAIAABEQAAAQAHAIQAFAIANAAQAOAAAFgIQAGgIABgQIAAhEIATAAIAABEQAAANgEAJQgCAJgHAGQgGAGgHADQgJACgKAAQgVABgMgMg");
	this.shape_20.setTransform(7.5,26.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,202.7,37.7), null);


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
	this.frame_181 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(181).call(this.frame_181).wait(1));

	// Layer_1
	this.instance = new lib.Symbol8();
	this.instance.setTransform(11.2,6.5,1,1,0,0,0,11.2,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({regX:0,regY:13.1,x:0,y:13.1},0).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).to({regX:-0.1,rotation:-1.2258,x:-1.25,y:14.25},6).to({regX:0,rotation:0,x:0,y:13.1},6).wait(1));

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
	this.instance.setTransform(70.1,22,1.3634,1.3634,0,0,0,40.5,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#28245E").s().p("Aq7C+IAAl7IV3AAIAAF7g");
	this.shape.setTransform(70,23.928,1,1.2594);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,140,47.9), null);


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
	this.instance.setTransform(11.85,21.55,0.2726,0.2726,0,0,0,16.4,17.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F49021").s().p("AAECfQgXgKgOgWQgPgVAAgbIAAgHQADgSAGgPIAHgLQADgHAAgGQAAgPgLgJQgKgKgPACQgLABgHAHQgIAHgCAKQgCAMAFAIQgGgKgKgJQgEgHgEgPQgGgcAFgYQAIgjAbgZQAbgaAjgFQAhgHAhAQQAgAOATAeQATAdAAAjQAAAfgQAcQgFAKgLALIgUATQgMAMgdAYQgWATAAAYQAAAJADAJQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgBAAIgBAAg");
	this.shape.setTransform(11.37,21.2865,0.2727,0.2728);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AATEnIgchBQgfhRgNhMQgqj1CYh6QgoArgSBfQgmC8BnEHg");
	this.shape_1.setTransform(9.5492,8.2942,0.2727,0.2728);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AgMByQgcgmgIhCQgCgaAGgRQAKgZANgXQAQgcALgHQAOA7AeBEQgOAGgVATQgRAVgDAZQgCAPACAPQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAIgBABQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_2.setTransform(7.934,16.2082,0.2727,0.2728);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJB1QgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQABgPgBgPQgCgZgSgUQgVgUgOgHQAchBARg+QAKAHAQAdQANAXAKAZQAHAXgDAUQgLBFgZAjQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgBAAg");
	this.shape_3.setTransform(14.9649,16.2403,0.2727,0.2728);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0EoQgqhngThYQgoi5BEh4QARgfATgWIAUgYQAOgQAKgDQAJgBAJAEQASAIAVAeQAJAMATAfQAhA1ALBFQAMBIgRBeQgJAvgRA5IgTA6QgUA7gDAAgAgohvQgSASAAAYQAAAYARASQASARAXAAQAYAAASgRQARgRAAgZQAAgYgRgRQgSgSgYAAQgXAAgRARg");
	this.shape_4.setTransform(11.4983,8.2481,0.2727,0.2728);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#27265F").s().p("AkTEUQhyhyAAiiQAAigByhyQByhzChAAQChAAByBzQBzByAACgQAACihzByQhyByihAAQihAAhyhyg");
	this.shape_5.setTransform(11.4852,11.8731,0.2729,0.273);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(11.85,21.55,0.2726,0.2726,0,0,0,16.4,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F49021").s().p("AAECfQgXgKgOgWQgPgVAAgbIAAgHQADgSAGgPIAHgLQADgHAAgGQAAgPgLgJQgKgKgPACQgLABgHAHQgIAHgCAKQgCAMAFAIQgGgKgKgJQgEgHgEgPQgGgcAFgYQAIgjAbgZQAbgaAjgFQAhgHAhAQQAgAOATAeQATAdAAAjQAAAfgQAcQgFAKgLALIgUATQgMAMgdAYQgWATAAAYQAAAJADAJQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgBAAIgBAAg");
	this.shape_6.setTransform(11.37,21.2865,0.2727,0.2728);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0099FF").s().p("AATEnIgchBQgfhRgNhMQgqj1CYh6QgoArgSBfQgmC8BnEHg");
	this.shape_7.setTransform(9.5492,8.2942,0.2727,0.2728);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("AgMByQgcgmgIhCQgCgaAGgRQAKgZANgXQAQgcALgHQAOA7AeBEQgOAGgVATQgRAVgDAZQgCAPACAPQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAIgBABQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_8.setTransform(7.934,16.2082,0.2727,0.2728);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAJB1QgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQABgPgBgPQgCgZgSgUQgVgUgOgHQAchBARg+QAKAHAQAdQANAXAKAZQAHAXgDAUQgLBFgZAjQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgBAAg");
	this.shape_9.setTransform(14.9649,16.2403,0.2727,0.2728);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag0EoQgqhngThYQgoi5BEh4QARgfATgWIAUgYQAOgQAKgDQAJgBAJAEQASAIAVAeQAJAMATAfQAhA1ALBFQAMBIgRBeQgJAvgRA5IgTA6QgUA7gDAAgAgohvQgSASAAAYQAAAYARASQASARAXAAQAYAAASgRQARgRAAgZQAAgYgRgRQgSgSgYAAQgXAAgRARg");
	this.shape_10.setTransform(11.4983,8.2481,0.2727,0.2728);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#27265F").s().p("AkTEUQhyhyAAiiQAAigByhyQByhzChAAQChAAByBzQBzByAACgQAACihzByQhyByihAAQihAAhyhyg");
	this.shape_11.setTransform(11.4852,11.8731,0.2729,0.273);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghEHIAAoNIBEAAIAAINg");
	this.shape_12.setTransform(92.5017,9.8781,0.2729,0.2729);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhsD0QgsgVgZgnQgTgfgIgwQgGglAAg5IAAkVIBFAAIAAENQAAA0AEAdQAFAhALAWQAPAdAdAQQAgASAvAAQBaAAAhg/QAMgVAEgiQADgaAAgzIAAkRIBDAAIAAENQAABCgGAlQgHAugWAgQgZAoguAUQguAXg8AAQg8AAgvgXg");
	this.shape_13.setTransform(84.0158,9.9872,0.2729,0.2729);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhxCIQg4g1AAhTQAAhRA1g2QAzgzBJAAQBFAAAsAtQAxAvAABRQAAAOgCASIkPAAQAHA0AkAdQAiAcA2AAQBBAAA5gsIAABGQgYAPgiAJQgjAJgiAAQhTAAg1gzgAg8hoQgiAagIAuIDSAAQgFgxghgZQgagVgmAAQgmAAgcAXg");
	this.shape_14.setTransform(69.3633,12.1842,0.2729,0.2729);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaDLQgagaAAhGIAAiuIhCAAIAAg7IBCAAIAAhiIBAgLIAABsIBrAAIAAA7IhrAAIAAChQAAAnAKAUQAMAaAfAAQAcAAAZgQIAAA9QgeANgiAAQg0AAgcghg");
	this.shape_15.setTransform(59.9088,10.7582,0.2729,0.2729);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggEHIAAlkIBAAAIAAFkgAgfi3QgOgNAAgUQAAgTAOgNQANgOASAAQATAAAOAOQANANAAATQAAAUgNANQgNAOgUAAQgSAAgNgOg");
	this.shape_16.setTransform(54.0628,9.8781,0.2729,0.2729);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABdC2IAAjPQAAg1gRgVQgUgWglAAQgdAAggARQgeAQgUAZIAAD0IhBAAIABljIBBAAIAAAtIABABQAZgYAegOQAigPAiAAQA9AAAiAoQAPARAHAWQAIAaAAAnIAADbg");
	this.shape_17.setTransform(47.0777,12.0887,0.2729,0.2729);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ah5DxIAAhHQA4AlA4AAQAzAAAfgdQAfgdAAgyIAAgaIgBgBQgmAbg7AAQhJAAgygxQgzgyAAhPQAAhOAxg1QA0g4BTAAQAwAAAqAUIA/gLIAAFjQAABOgwAuQgxAthRAAQg9AAgzgagAhIiqQggAjAAA1QACA3AgAiQAiAkAyAAQAYAAAZgIQAXgIARgNIAAjEQgRgKgYgHQgZgHgYAAQg0AAghAkg");
	this.shape_18.setTransform(36.4021,14.3403,0.2729,0.2729);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AghEHIAAoNIBEAAIAAINg");
	this.shape_19.setTransform(29.1441,9.8781,0.2729,0.2729);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKHYQgfgNgTgdQgUgeAAgiIAAgJQiTgdhfh0Qhgh0AAiWQAAiuB7h7QB7h7CsgBQCtABB7B7QB7B6AACtQAABGgYBEQgYBEgtA4QgqA1g6AlQg6AlhCARIgTASQgKALgXASIgJAIQgLAKAAAKIABAHQAGAOgIAOQgKAPgRABQgGAAgGgEgAkSlLQhyBzAAChQAACUBjBvQBjBuCTATQgFAMgCAPIAAAHQAAAaAPAWQAPAWAWAKIABAAQABAAAAAAQAAAAAAgBQABAAAAAAQgBAAAAgBQgDgHAAgLQAAgZAWgSIApgkIAYgXQCDgfBVhpQBWhrAAiIQAAiihyhzQhyhxiigBQigABhyBxg");
	this.shape_20.setTransform(11.4806,13.3627,0.2732,0.2733);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAAHCQgZgLgPgXQgPgXAAgcIAAgIQACgOADgJQiTgShihwQhihwAAiUQAAijB0h0QBzhzCjAAQCjAABzB0QBzB0gBCkQAABBgWBAQgXBAgpA1QgpAzg4AkQg4AjhAAPIgXAWIggAcIgKAIQgUARAAAWQAAAJADAHQACADgCADQgCADgEAAgAkSlLQhyByAAChQAACUBkBvQBjBvCTASQgGAMgBAPIAAAHQAAAbAPAWQAOAVAXAKIABAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgDgHAAgLQAAgYAWgTIApgkIAYgXQCDgeBVhpQBWhrAAiJQAAiihzhyQhyhyihAAQihAAhyByg");
	this.shape_21.setTransform(11.4602,13.3832,0.2732,0.2733);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AABHBQgYgLgPgWQgOgWAAgbIAAgHQACgQAEgJQiVgUhihvQhihvAAiUQAAijBzhyQBzh0ChAAQCiAABzB0QBzByAACjQAACIhVBsQhVBqiFAeIgTAUIgEAEQgKAKgWASIgJAHQgVARAAAYQAAAJADAHIABACIgBACQgDAEgCAAg");
	this.shape_22.setTransform(11.4943,13.3627,0.2732,0.2733);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0.1,0.2,93.4,26.2), null);


(lib.Scene_1_t_mas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// t_mas
	this.instance = new lib.Symbol7();
	this.instance.setTransform(118.3,38.9,1,1,0,0,0,101.4,33.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(77).to({alpha:0},15,cjs.Ease.quadInOut).to({_off:true},1).wait(148));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo
	this.instance = new lib.Symbol1();
	this.instance.setTransform(273,38.3,0.6318,0.6278,0,0,0,47.2,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(241));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol10();
	this.instance.setTransform(114.7,25.05,1,1,0,0,0,97.8,11.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({alpha:1},26,cjs.Ease.quadOut).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cta = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol2();
	this.instance.setTransform(274.9,14.85,0.0611,0.0602,0,0,0,70.4,24.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:70,scaleX:0.4321,scaleY:0.4261,alpha:1},26,cjs.Ease.backOut).wait(193).to({regX:70.1,regY:24.2,scaleX:0.4799,scaleY:0.4732,x:275.45,y:14.9},10,cjs.Ease.quadOut).to({regX:70,regY:24.1,scaleX:0.4321,scaleY:0.4261,x:274.9,y:14.85},10,cjs.Ease.quadOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// arrow
	this.instance = new lib.Symbol6();
	this.instance.setTransform(224.95,31.45,0.3122,0.3122,0,-87.5378,92.4624,0.4,13);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).to({regX:0.3,regY:13.1,scaleX:1.2746,scaleY:1.2747,skewX:-65.7342,skewY:114.2663,x:250,y:14.8},17,cjs.Ease.cubicOut).wait(105));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.igniteuiangulareasilyhandleunlimitedrows300x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [240,299];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_240 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(240).call(this.frame_240).wait(59).call(this.frame_299).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(160,25);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({_off:true},241).wait(59));

	// arrow_obj_
	this.arrow = new lib.Scene_1_arrow();
	this.arrow.name = "arrow";
	this.arrow.setTransform(0,0,1,1,0,0,0,10,0);
	this.arrow.depth = 0;
	this.arrow.isAttachedToCamera = 0
	this.arrow.isAttachedToMask = 0
	this.arrow.layerDepth = 0
	this.arrow.layerIndex = 0
	this.arrow.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(136).to({_off:true},105).wait(59));

	// Layer_2_obj_
	this.Layer_2 = new lib.Scene_1_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.setTransform(0,0,1,1,0,0,0,10,0);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 1
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(121).to({_off:true},120).wait(59));

	// Layer_2_obj_
	this.Layer_2_1 = new lib.Scene_1_Layer_2_1();
	this.Layer_2_1.name = "Layer_2_1";
	this.Layer_2_1.setTransform(0,0,1,1,0,0,0,10,0);
	this.Layer_2_1.depth = 0;
	this.Layer_2_1.isAttachedToCamera = 0
	this.Layer_2_1.isAttachedToMask = 0
	this.Layer_2_1.layerDepth = 0
	this.Layer_2_1.layerIndex = 2
	this.Layer_2_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2_1).wait(300));

	// t_mas_obj_
	this.t_mas = new lib.Scene_1_t_mas();
	this.t_mas.name = "t_mas";
	this.t_mas.setTransform(118.3,41.1,1,1,0,0,0,128.3,41.1);
	this.t_mas.depth = 0;
	this.t_mas.isAttachedToCamera = 0
	this.t_mas.isAttachedToMask = 0
	this.t_mas.layerDepth = 0
	this.t_mas.layerIndex = 3
	this.t_mas.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.t_mas).wait(93).to({_off:true},148).wait(59));

	// cta_obj_
	this.cta = new lib.Scene_1_cta();
	this.cta.name = "cta";
	this.cta.setTransform(0,0,1,1,0,0,0,10,0);
	this.cta.depth = 0;
	this.cta.isAttachedToCamera = 0
	this.cta.isAttachedToMask = 0
	this.cta.layerDepth = 0
	this.cta.layerIndex = 4
	this.cta.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(240).to({_off:true},1).wait(59));

	// logo_obj_
	this.logo = new lib.Scene_1_logo();
	this.logo.name = "logo";
	this.logo.setTransform(272.8,38.1,1,1,0,0,0,282.8,38.1);
	this.logo.depth = 0;
	this.logo.isAttachedToCamera = 0
	this.logo.isAttachedToMask = 0
	this.logo.layerDepth = 0
	this.logo.layerIndex = 5
	this.logo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.logo).to({_off:true},241).wait(59));

	// bg_icon_obj_
	this.bg_icon = new lib.Scene_1_bg_icon();
	this.bg_icon.name = "bg_icon";
	this.bg_icon.setTransform(182.8,24.4,1,1,0,0,0,192.8,24.4);
	this.bg_icon.depth = 0;
	this.bg_icon.isAttachedToCamera = 0
	this.bg_icon.isAttachedToMask = 0
	this.bg_icon.layerDepth = 0
	this.bg_icon.layerIndex = 6
	this.bg_icon.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg_icon).to({_off:true},241).wait(59));

	// bg_obj_
	this.bg = new lib.Scene_1_bg();
	this.bg.name = "bg";
	this.bg.setTransform(160,25,1,1,0,0,0,170,25);
	this.bg.depth = 0;
	this.bg.isAttachedToCamera = 0
	this.bg.isAttachedToMask = 0
	this.bg.layerDepth = 0
	this.bg.layerIndex = 7
	this.bg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg).to({_off:true},241).wait(59));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-382.5,17.8,702.5,90.5);
// library properties:
lib.properties = {
	id: 'B915F0BB2CAF214394D0C3C0B5CA43BE',
	width: 300,
	height: 50,
	fps: 30,
	color: "#CF4214",
	opacity: 1.00,
	manifest: [],
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

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
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

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
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