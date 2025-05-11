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


(lib.Symbol48 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgEAGQgDgCAAgEQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAAEgDACQgCACgDAAQgCAAgCgCg");
	this.shape.setTransform(140.85,14.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAbQgGgDgEgGQgDgGAAgIQAAgIAEgIQAEgJAHgEQAHgFAJAAQAIAAAFADQAEADAEAGQADAEAAAHIgBAFIgBAEIgrAAIAAACQAAAHACADQACAEAEACQAFADAEAAQAGAAAEgDQAEgCACgFIAIAGQgCADgEAEIgJADQgFACgEAAQgJAAgFgEgAgFgTQgDABgEAFQgDAEgBAEIAiAAIAAgDQAAgDgCgEQgBgDgEgCQgDgCgEAAQgGABgDACg");
	this.shape_1.setTransform(135.875,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAfIAOg8IAHAAIgBAKIADgEIAHgFIAJgCIADAAIADABIgDAJIgDgBIgDAAQgFAAgEACQgEADgCAEQgDAFgBAGIgIAgg");
	this.shape_2.setTransform(130.675,12.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAbQgFgDgDgFQgDgGAAgJQAAgGACgGQADgHAEgEQADgFAGgDQAHgDAGAAQAEAAAEACIAHAFQADAEABADIADgNIAKAAIgOA7IgJAAIACgLQgDAFgFAEQgEADgGAAQgIAAgFgEgAgIgTQgEAAgDAFQgDAEgCAFQgBAEAAAFQAAAHABAEQADAEADACQAEACAFAAIAHgCQAEgCADgEQADgDABgGQACgFAAgFQAAgEgCgGQgCgDgDgCQgEgDgEAAQgEAAgEADg");
	this.shape_3.setTransform(124.425,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAlQgHgDgFgJQgEgHAAgLQAAgJADgIQACgHAFgIQAFgGAIgFQAHgEAJAAQAIAAAGACQAGACAEAGQADAEADAIIgKAEQgCgJgFgEQgFgEgJAAQgFAAgGADQgFADgEAGQgEAGgCAGQgCAGAAAHQAAAIADAGQAEAGAFADQAFADAHAAQAGAAAGgDQAEgEADgFIAKAEQgGAHgHAFQgHAFgKAAQgIAAgJgEg");
	this.shape_4.setTransform(117.05,11.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLAdQgGgCgEgEQgEgEgCgFIAJgEQADAGAEADQAEAEAIAAQAGAAADgDQADgCAAgFQAAgDgBgCQgDgCgDgBIgKgDQgHgCgEgDQgEgFAAgEQAAgFADgFQADgEAFgCQAFgCAGAAQAKAAAFAEQAHADADAIIgJAEQgBgEgCgCIgGgEQgDgBgEAAQgFAAgEACQgDACAAAFQAAADACACIAGADIALADQAGACADADQAEADAAAGQAAAGgDAEQgDAFgFACQgGACgGAAQgEAAgHgCg");
	this.shape_5.setTransform(105.375,12.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAbQgGgDgDgGQgEgFAAgJQAAgIAEgIQAEgJAHgEQAHgFAJAAQAIAAAFADQAEADAEAGQADAEAAAHIgBAFIgBAEIgrAAIAAACQAAAHACADQACAEAFACQAEADAEAAQAGAAAEgDQAEgCACgFIAIAGQgCAEgEADIgJADQgEACgFAAQgJAAgFgEgAgFgTQgDABgEAFIgDAIIAhAAIAAgDIgBgHIgFgFQgEgCgEAAQgGABgDACg");
	this.shape_6.setTransform(98.925,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AARAoIgNghIgTAAIgIAhIgKAAIAThOIAZAAQAKAAAHAFQAGAGAAAKQAAAHgDAFQgEAFgEADIgJADIANAigAgNgBIASAAQAHAAAEgBQAEgDACgEQACgEAAgFQAAgFgEgEQgEgDgHAAIgQAAg");
	this.shape_7.setTransform(91.975,11.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAdQgHgCgDgEQgDgEgDgFIAJgEQADAGAEADQAFAEAHAAQAGAAADgDQAEgCAAgFQAAgDgCgCQgCgCgEgBIgJgDQgIgCgEgDQgDgEAAgFQAAgFACgFQADgEAFgCQAFgCAHAAQAJAAAGAEQAHAEACAHIgJAEIgDgGIgGgEQgDgBgEAAQgFAAgEACQgDADAAAEQAAADACACIAGADIALADQAGACAEADQADADAAAGQAAAGgDAEQgCAEgGADQgGACgGAAQgEAAgHgCg");
	this.shape_8.setTransform(80.875,12.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAbQgFgDgEgGQgDgGAAgIQABgJADgHQAEgJAHgEQAHgFAKAAQAHAAAFADQAEADAEAGQADAEgBAHIgBAJIgrAAIAAACQAAAGACAEQADAEADACQAEADAFAAQAGAAAEgDQAEgCACgFIAIAGQgDAEgEADQgDACgFABQgFACgFAAQgIAAgGgEgAgGgTQgEACgCAEIgEAIIAiAAIAAgDIgCgHIgFgFQgDgCgEAAQgFABgFACg");
	this.shape_9.setTransform(74.45,12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAlQgFgCgBgFQgCgEABgGIAIghIgMAAIACgJIAMAAIADgMIAJgEIgEAQIATAAIgCAJIgTAAIgGAhQgCAGADACQADACADAAIAFgBIAEgCIACAIIgGADIgGABQgGAAgDgCg");
	this.shape_10.setTransform(69.075,11.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAbQgHgDgCgGQgDgGgBgIQAAgJAEgHQAEgJAHgEQAGgFAKAAQAIAAAFADQAFADADAGQADAEAAAHIgCAJIgrAAIAAACQAAAGADAEQABAEAEACQAFADAEAAQAGAAAEgDQAEgCACgFIAIAGQgDAEgEADQgDACgFABQgEACgGAAQgIAAgFgEgAgFgTQgFACgCAEIgEAIIAiAAIAAgDIgCgHIgEgFQgDgCgFAAQgGABgDACg");
	this.shape_11.setTransform(63.05,12.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAqQgEgCgCgDQgCgCgCgFIgDANIgKAAIAUhWIAKAAIgJAlQADgFAFgDQAFgDAGAAQAHAAAFAEQAFACADAHQADAEAAAJQAAAJgDAFQgCAHgEAEQgEAFgGACQgFADgHAAQgDAAgGgCgAgBgGQgEACgDADQgDADgCAFQgBAFAAAHQAAAHAEAFQAEAFAHAAQAFAAADgCIAHgFIAFgJQABgGAAgGQAAgGgCgDQgCgEgDgBQgEgCgFgBQgFABgCACg");
	this.shape_12.setTransform(55.775,11);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAbQgFgDgDgFQgDgGAAgJQAAgGACgGQACgGAFgFQADgFAHgDQAGgDAGAAQAEAAAEACQAFACACADQADADABAEIADgNIAKAAIgOA7IgJAAIACgLQgCAFgGAEQgEADgGAAQgIAAgFgEgAgIgTQgEAAgDAFQgDAEgCAFQgBAEAAAFQAAAHACAEQABAEAEACQAFACAEAAIAHgCQAEgCADgEIAFgJQABgFAAgFQAAgGgCgEQgCgDgDgCQgEgDgEAAQgEAAgEADg");
	this.shape_13.setTransform(48.675,12.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOArIAOg7IAIAAIgMA7gAADgdQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgEACgDQACgCADAAIAGACQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAAFgCABQgCACgEAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_14.setTransform(43.6,11);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgkAoIAShOIAXAAQAJgBAIAEQAIAGADAGQAEAIAAAJQAAAJgDAJQgEAIgFAGQgFAGgKAEQgHADgKABgAgYAfIATAAQAHAAAGgEQAGgDAEgEQAFgIACgEQABgGAAgGQABgIgDgGQgCgEgGgFQgEgDgIAAIgOAAg");
	this.shape_15.setTransform(37.55,11.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAMAfIAIgjQACgJgDgEQgEgEgHAAQgGAAgDACQgEADgDAEQgDAFgBAHIgIAfIgJAAIAOg8IAIAAIgBAJQACgEAEgCQAGgDAHgBQAHAAAFADQAEAEADAFQABAFgBAJIgJAjg");
	this.shape_16.setTransform(25.4875,12.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAbQgFgDgEgGQgDgGAAgIQABgJADgHQAEgJAHgEQAHgFAKAAQAHAAAFADQAEADAEAGQADAEgBAHIgBAJIgrAAIAAACQAAAGACAEQADAEADACQAEADAFAAQAGAAAEgDQAEgCACgFIAIAGQgDAEgEADQgDACgFABQgFACgEAAQgJAAgGgEgAgGgTQgEACgCAEIgEAIIAiAAIAAgDIgCgHIgFgFQgDgCgEAAQgFABgFACg");
	this.shape_17.setTransform(18.65,12.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgiArIAUhUIAIAAIgBALIACgEQADgEAEgCQAGgCAEAAQAHAAAFADQAFADADAGQADAGAAAIQAAAJgDAFQgCAHgEAEQgEAFgGACQgGADgGAAQgEAAgGgCQgDgCgEgFIgCgGIgJAngAABggIgGAGQgDAEgCAFQgBAFAAAGQAAAHAEAFQAEAFAHAAQAFAAADgCIAHgGIAFgIQABgFAAgGQAAgGgCgEQgCgEgDgCQgEgCgFAAQgFAAgDACg");
	this.shape_18.setTransform(11.075,13.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTAlQgHgEgFgIQgFgIAAgLQAAgJADgIQADgHAFgIQAEgGAJgEQAIgEAIAAQAKAAAGAEQAHAEAFAIQAFAIAAALQAAAIgDAJQgDAIgFAGQgEAHgJAEQgIAEgIAAQgIAAgIgEgAgJgcQgFADgEAGQgEAFgBAGQgCAGAAAIQAAAIADAGQADAGAFADQAGADAGAAQAHAAAFgDQAFgDAEgGQAEgGABgGQACgIAAgEQAAgIgDgHQgDgGgFgDQgFgCgHAAQgHAAgFACg");
	this.shape_19.setTransform(3.65,11.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0,0,148.8,21.4), null);


(lib.Symbol47 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgTAmIgIgGQgCgEgBgGQAAgGACgFIAJgCQgCAHAAAFQABAFADADQADADAHAAQAHgBADgEQAEgEACgLIAMgzIAKAAIgMA1QgDAJgCAEQgEAHgFACQgFAEgIAAQgHAAgEgCg");
	this.shape.setTransform(124.775,4.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUAnIAQhFIgoBFIgIAAIgJhFIgQBFIgJAAIAThOIAOAAIAHBDIAlhDIAQAAIgSBOg");
	this.shape_1.setTransform(116.475,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghAnIAThOIAbAAQAJAAAHAFQAFAGAAAHQAAAGgDAFQgCAFgDACQgEADgFAAIAAABQAGABAEADQADAGAAAFQAAAHgEAFQgDAGgIADQgHADgIgBgAgVAeIAVAAQAJAAAFgDQAGgEAAgHQgBgEgBgCQgBgDgEgCIgIgBIgUAAgAgNgEIATAAQAGAAADgCQAGgCAAgDQADgEAAgEQAAgGgEgCQgEgCgFgBIgSAAg");
	this.shape_2.setTransform(107.45,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAFQgCgCAAgDQAAgCACgCQADgDACAAQADAAADADQACACAAACQAAADgCACQgDADgDAAQgCAAgDgDg");
	this.shape_3.setTransform(97.825,8.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAoQgDgEAAgIIAAhIIAJAAIAABIQAAAEACACQAAACAEAAIAEAAIAEgCIgBAJIgEABIgFABQgHAAgDgFg");
	this.shape_4.setTransform(94.875,4.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSAdQgEgBgDgEQgDgEAAgFQAAgHAFgEQAEgEAIgBIAVgFIAAgCQAAgGgDgEQgEgEgGAAQgGAAgEADQgFADgCAFIgHgEQACgGAGgFQAHgEAKAAQAGAAAEACQAGACADAFQADAEAAAHIAAAcQAAAFAEAAIAFgBIgBAHQgCACgEAAQgDAAgDgCQgEgBgBgDIgBgCIgDACQgCADgFACIgIABQgEAAgGgCgAgGAFQgHABgCACQgDADAAADQAAAEADACQADADAFAAIAHgBQADgBACgCQACgCACgDQABgDAAgDIAAgHg");
	this.shape_5.setTransform(89.375,5.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAlQgFgCgCgDQgBgCgBgHIAAgkIgMAAIAAgIIAMAAIAAgPIAJgCIAAARIAVAAIAAAIIgVAAIAAAiQAAAFACACQADACAEAAIAGgBIAEgDIADAIIgGAEQgEABgFAAQgDAAgEgCg");
	this.shape_6.setTransform(79.225,4.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAbQgGgDgEgHQgEgHABgKQgBgJAEgHQAEgHAGgEQAGgDAIAAQAJAAAFADQAHAEACAGQAEAGAAAIIAAADIgBADIgsAAQAAAGADADQACAGAEACQAFADAFAAQAFAAAFgDQAFgEACgDIAIAFIgHAHQgCADgGABIgKACQgHAAgIgEgAgIgTQgEACgDAGIgCAGIAjAAQAAgIgFgEQgEgFgIAAQgGAAgDADg");
	this.shape_7.setTransform(73.35,5.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAMIAGgEIADgEIACgEIgBAAIgCAAIgDAAIgDgDQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIABgEQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQADAAACACQACABABADIABAGIgBAHQgBADgEAEQgCACgEADg");
	this.shape_8.setTransform(64.2,8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAnIAAhOIA3AAIAAAJIgtAAIAAAaIAjAAIAAAIIgjAAIAAAaIAvAAIAAAJg");
	this.shape_9.setTransform(59.125,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAdAnIABhFIgaBFIgHAAIgahFIAAAAIABBFIgJAAIAAhOIAPAAIAWBDIAYhDIAOAAIAABOg");
	this.shape_10.setTransform(49.825,4.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXApQgDAAgDgDIACgIIAGAEIAFABQADAAADgDQADgBACgGIADgIIgZg7IALAAIARAxIATgxIAKAAIgcBFIgEAKIgGAEQgDACgFAAQgEAAgDgCg");
	this.shape_11.setTransform(37.75,7.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAbQgGgDgEgHQgEgHAAgKQAAgJAEgHQADgHAHgEQAFgDAJAAQAHAAAEACQAEABAEAEQADADACAGIgJAEQgCgHgDgCQgEgDgGAAQgGAAgEADQgEAEgCAEQgCAEgBAHQABAIACAEQACAFAEADQAEADAGAAQAEAAADgCQAFgBABgDQACgCABgFIAJADQgBAGgEAEQgDAEgGACQgFACgGAAQgIAAgGgEg");
	this.shape_12.setTransform(31.65,5.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAdQgEgBgDgEQgDgEAAgFQAAgHAFgEQAEgEAIgBIAVgFIAAgCQAAgHgDgDQgEgEgFAAQgHAAgEADQgFAEgBAEIgIgEQACgHAHgEQAHgEAJAAQAGAAAFACQAEACAEAFQADAEAAAHIAAAcQAAAFAEAAIAFgBIgBAHQgCACgEAAQgDAAgDgCIgEgEIgCgDIgCADIgIAFIgIABQgEAAgGgCgAgGAFIgJADQgDADAAADQAAAEADACQAEADAFAAIAGgBQADgBACgCQACgBACgEQABgDAAgDIAAgHg");
	this.shape_13.setTransform(25.025,5.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbAnIAAhOIAKAAIAABFIAsAAIAAAJg");
	this.shape_14.setTransform(18.3,4.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAIQgDgDAAgFQAAgEADgDQADgDAFAAQAGAAADADQADADAAAEQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_15.setTransform(8.45,7.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgcAoIAAgNIASgMQAHgEADgGQAFgFADgEQABgEAAgEQABgEgDgEQgDgDgEAAQgGAAgDAEQgDAEAAAIIgSgFQAAgJAEgGQAEgGAHgDQAIgDAHAAQAHAAAHACQAFACAEAEQACACADAGIACAJQAAAIgEAGQgDAFgIAIQgIAGgJAGIAAAAIADAAIAeAAIAAAPg");
	this.shape_16.setTransform(3.1,4.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol47, new cjs.Rectangle(0,0,127.9,11.4), null);


(lib.Symbol46 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgEAGQgDgDAAgDQAAgDADgBQABgDADAAQADAAADADQACABAAADQAAAEgCACQgCACgEAAQgDAAgBgCg");
	this.shape.setTransform(134.075,8.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAkQgIgFgEgJIAKgFIAEAIIAHAFQAEACAFAAQAGAAADgCQAFgCAAgDQADgDAAgFQAAgEgCgDQgBgCgEgCQgEgCgFAAIgDAAIgDABIAAgJIAEAAQAIAAAEgDQAEgDAAgIQAAgGgEgDQgEgEgHAAQgHAAgDAEQgEACgDAHIgJgFIAGgJIAJgGQAFgCAGAAQAJAAAFADQAFACADAGQADAEAAAGIgCAIIgDAGIgEAEIgGABQAEAAADABIAFAEIAEAGIABAGQgBAHgDAFQgCAFgIAEQgGADgHAAQgKAAgIgFg");
	this.shape_1.setTransform(128.85,5.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGAoIAAg+IABgFIgJAHIgLAEIgCgJIAGgBIAGgDIAGgFIAFgEIAIAAIAABOg");
	this.shape_2.setTransform(122.65,5.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAdQgDgDAAgDQAAgEADgBQABgCADAAQADAAADACQACABAAAEQAAAEgCACQgCACgEAAQgDAAgBgCgAgEgQQgDgDAAgEQAAgDADgCQABgCADAAQAEAAACACQACACAAADQAAAFgCACQgDABgDAAQgCAAgCgBg");
	this.shape_3.setTransform(119.025,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAzQAGgFAHgKQADgIADgJQACgIAAgLQAAgKgCgIQgDgJgDgIQgHgKgGgFIAGgFQALAKAHAPQAHAPAAAPQAAAQgHAPQgHAPgLAKg");
	this.shape_4.setTransform(114.975,5.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAHAoIAAhDQgDADgGAEIgLAEIgCgJIAFgBIAHgDIAGgFQADgCACgCIAIAAIAABOg");
	this.shape_5.setTransform(110.225,5.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAfQgHgPAAgQQAAgPAHgPQAHgPALgKIAGAFQgGAFgHAKQgDAIgDAJQgCAIAAAKQAAALACAIQADAJADAIQAHAKAGAFIgGAFQgLgKgHgPg");
	this.shape_6.setTransform(106.725,5.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAoQAAgNADgNQAEgOAFgKQAGgKAIgJIguAAIAAgJIA5AAIAAAJQgKALgGAKQgGAKgDAMQgDAKAAAQg");
	this.shape_7.setTransform(101.1,5.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAjIAFgDIAEgFIACgFIgBAAIgBABIgBAAIgDgBIgCgCQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIABgEIACgDIADgBQADAAACACIADAEIABAGIgCAIQAAAEgDADQgDADgEACgAgEgZQgCgCAAgEQAAgDACgCQACgCACAAQAEAAACACQACACAAADQAAAEgCACQgDACgDAAQgBAAgDgCg");
	this.shape_8.setTransform(95.9,6.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAGAoIAAg+IABgFIgJAHIgKAEIgDgJIAFgBIANgIIAFgEIAIAAIAABOg");
	this.shape_9.setTransform(91.3,5.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAoIAAgIIAUgPIALgMQAEgEADgFQACgEAAgGQAAgHgEgFQgFgEgHAAQgHAAgGAFQgFAGgBAIIgIgFQACgGADgGQAEgGAFgCQAGgDAHAAQAGAAAFACQADABAFAEQACACADAGQACAEAAAGQAAAIgDAGQgEAHgIAHQgKAJgMAJIAEgBIAjAAIAAAJg");
	this.shape_10.setTransform(85.9,4.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUAfQgIgKAAgVQAAgTAIgKQAHgLANAAQAOAAAHALQAJALgBASQABAUgJALQgHAKgOAAQgOAAgGgKgAgKgbQgEADgDAIQgBAGAAAKQAAAMABAGQADAHAEAEQAEADAGAAQAHAAADgDQAFgEACgHQADgIgBgKQABgJgDgHQgCgIgFgDQgDgEgHAAQgGAAgEAEg");
	this.shape_11.setTransform(78.75,5.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAoIAAgIIAUgPIALgMQAFgEACgFQACgEAAgGQAAgHgEgFQgFgEgHAAQgHAAgGAFQgEAGgBAIIgJgFQABgGAEgGQADgFAGgDQAGgDAHAAQAHAAAEACQADABAFAEQAEADABAFQACAEAAAGQAAAIgDAGQgEAHgIAHQgKAJgMAJIAEgBIAjAAIAAAJg");
	this.shape_12.setTransform(71.425,4.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFAGQgCgCAAgEQAAgDACgBQADgDACAAQADAAADADQACABAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_13.setTransform(62.325,8.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKAnQgEgFACgIIAQhFIAJAAIgPBFQgCAFACADQACACAEAAIADAAIADgBIgDAIIgDABIgEAAQgHAAgDgFg");
	this.shape_14.setTransform(59.1019,4.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAcQgGgEgDgGQgDgHAAgHQAAgLAEgGQADgIAIgEQAHgFAIAAQAJAAAGAEQAFADAEAHQADAFAAAIQAAAIgEAJQgDAIgIAFQgGAEgJAAQgJAAgGgDgAgGgUIgHAFIgEAJQgBAEAAAGIABAJIAHAHQADADAHAAIAHgCQAFgDABgCQADgFACgEQABgFAAgFQAAgFgBgFQgDgEgEgCQgDgDgHAAIgHACg");
	this.shape_15.setTransform(53.55,6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAMAfIAIgjQACgJgDgEQgEgFgHABQgFgBgEADQgFAEgCAEQgDAEgBAHIgIAfIgJAAIAOg8IAIAAIgCAJQADgEAEgCQAGgDAHAAQAHAAAFACQAFAEABAFQACAFgBAJIgJAjg");
	this.shape_16.setTransform(46.2321,5.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOArIAOg7IAIAAIgMA7gAACgdQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgFACgBQACgDADAAQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAAEgCADQgCABgDAAIgGgBg");
	this.shape_17.setTransform(41.6,4.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWAfIAOg8IAHAAIAAAKIACgEIAIgFIAIgBIADAAIADAAIgDAKIgCgBIgEAAQgFAAgEABQgEADgCAEQgDAEgBAHIgIAgg");
	this.shape_18.setTransform(37.775,5.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPAcQgGgEgDgGQgDgHAAgHQAAgJAEgIQAEgIAHgEQAHgFAIAAQAGAAAGADQAGADACADQADAEACAFIgKADQgBgFgEgEQgDgEgHAAQgDAAgFACIgHAFIgEAJIgBAKIACAJQABAEAEADQAFADAFAAQAEAAAEgDQAEgBACgGIAJAEQgDAHgHAEQgGADgIAAQgIAAgGgDg");
	this.shape_19.setTransform(32.1,6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAcQgGgEgDgGQgDgHAAgHQAAgJAEgIQAEgIAHgEQAHgFAIAAQAJAAAFAEQAGADAEAHQADAFAAAIQAAAIgEAJQgEAIgHAFQgHAEgIAAQgJAAgGgDgAgFgUIgHAFIgFAJQgCAEAAAGIACAJIAHAHQAEADAFAAIAHgCQAFgDACgCQADgFABgEQACgFAAgFQAAgFgCgFQgCgEgDgCQgEgDgHAAIgGACg");
	this.shape_20.setTransform(25.05,6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXApQgFgDgDgGQgDgGAAgIQAAgIACgGQACgFAFgFQAEgFAGgDQAFgDAGAAQAEAAAFACIAHAFQADADABAFIAKgpIAJAAIgVBWIgIAAIACgLQgCAFgGAEQgEADgHAAQgHAAgFgDgAgMgHQgDACgDAEQgEADgBAFQgCAFABAGQAAAGABAEQACADAEADQAEACAFAAQAEAAAEgCQAEgDABgDIAGgJQABgFAAgGQAAgGgCgCQgDgFgDgBQgEgDgDAAQgDAAgGACg");
	this.shape_21.setTransform(18.25,4.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAMAfIAIgjQACgJgDgEQgEgFgHABQgFgBgEADQgFAEgCAEQgDAEgBAHIgIAfIgJAAIAOg8IAIAAIgBAJQACgEAEgCQAGgDAHAAQAHAAAFACQAFAEACAFQABAFgBAJIgJAjg");
	this.shape_22.setTransform(10.3375,5.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgjAoIAShOIA1AAIgCAJIgsAAIgFAZIAiAAIgCAIIgiAAIgHAbIAuAAIgCAJg");
	this.shape_23.setTransform(3.625,5.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(0,0,134.9,11.3), null);


(lib.Symbol44 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#74499D").s().p("AkBD+QhehfAAifQAAiiBghdQBghdCnAAQCdAABdBdQBeBeAAChQAACghgBeQhhBfimAAQicAAhehfg");
	this.shape.setTransform(35.175,34.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,70.4,69.9), null);


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
	this.shape.graphics.f("#74499D").s().p("Aj9HrQi1hehLjnQhNjsBgi0QBfi0DzhPQDihKCzBbQC1BdBNDqQBLDohfC2QhgC3jxBPQhkAghaAAQhzAAhmg0g");
	this.shape.setTransform(54.458,54.3254);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,108.9,108.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgIAMIAGgDIACgFQACgBABgDIgBAAIgBAAIgBAAIgDAAIgDgDQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIABgEIADgDIADgBQADAAACABIADAFIABAFIgBAHQgCAEgCAEQgEADgDACg");
	this.shape.setTransform(133.25,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATAoIgVghIgSAAIAAAhIgKAAIAAhOIAeAAQALAAAIAFQAHAHAAAKQAAALgIAFQgEAEgGABIAXAjgAgUgBIAUAAQAIgBAEgDQAEgEAAgHQAAgHgEgDQgEgEgIABIgUAAg");
	this.shape_1.setTransform(128.075,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAeQgEgCgBgCIgBgEIgDAEIgHAEIgIABQgFAAgFgBQgFgDgCgDQgDgEAAgFQAAgHAFgFQAFgDAHgBIAVgFIAAgCQAAgGgEgEQgDgEgGAAQgGAAgEADQgEACgDAGIgIgEQAEgIAFgDQAGgEAKAAQAHAAAEACQAGACADAEQADAFAAAIIAAAcQAAADAEAAIAFAAIgBAIQgCABgEAAQgEAAgCgBgAgGAFQgHACgCACQgDACAAADQAAAFADACQADACAFAAIAHgBIAFgDQACgBACgEQABgDAAgDIAAgHg");
	this.shape_2.setTransform(116.975,5.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIAoQgEgDABgJIAAhHIAJAAIAABHQAAAFACABQABACADAAIAEAAIAEgCIgBAJIgJABQgHAAgDgEg");
	this.shape_3.setTransform(112,4.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAfIAAg7IAIAAIABAJQACgEAFgEQADgDAIABIADAAIAEABIgCAIIgDAAIgEAAQgEAAgEABQgDADgDAEQgCAFAAAGIAAAgg");
	this.shape_4.setTransform(107.65,5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAcQgGgFgEgGQgEgIAAgJQAAgIAEgIQAEgHAGgDQAHgEAHAAQAJAAAFAEQAGAEADAFQAEAHAAAHIgBADIAAACIgsAAQAAAGACAEQADAGAEACQAEADAFAAQAHAAAEgDQAFgDACgEIAHAFIgFAHQgEADgFACQgEABgGAAQgIAAgHgDgAgIgTQgEACgDAFIgCAHIAjAAQgBgIgEgEQgEgFgIAAQgFAAgEADg");
	this.shape_5.setTransform(101.325,5.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAqQgEgBgCgDIADgIIAEAEIAGAAIAGgBQADgDACgFIADgIIgZg7IALAAIASAxIASgxIAKAAIgcBFIgEAJIgGAGQgDABgFAAQgEAAgDgBg");
	this.shape_6.setTransform(94.7,7.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAoIAAhOIAKAAIAABFIAsAAIAAAJg");
	this.shape_7.setTransform(89.6,4.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgDAEAAQAFAAAEADQADADAAAEQAAAFgDADQgDADgGAAQgEAAgEgDg");
	this.shape_8.setTransform(79.75,7.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AABAoIAAg7IgIAHQgEACgGABIgCgRIAHgBIAHgDIAFgFIAEgDIAQAAIAABOg");
	this.shape_9.setTransform(75.075,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAcQgDgDAAgFQAAgFADgDQAEgDAEABQAFgBAEADQADADAAAFQAAAFgDADQgEADgFAAQgFAAgDgDgAgIgMQgDgCAAgGQAAgEADgDQADgDAFAAQAGAAADADQADADAAAEQAAAGgDACQgEAEgFAAQgFAAgDgEg");
	this.shape_10.setTransform(67.55,5.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAcQgHgCgGgGIAKgLQADADAFADQAGADAEAAIAGgBQABgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIgBgCIgFgCIgHgCQgKgCgGgFQgFgDAAgIQAAgFADgEQADgEAGgDQAGgDAJAAQALAAAGADQAGABAFAGIgKALQgDgDgFgCQgEgCgFAAIgEAAIgDACIAAACQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAABQACABADABIALABQAJADAEADQAEAEAAAHQAAAFgDAFQgDAFgHADQgFACgKAAQgIAAgIgDg");
	this.shape_11.setTransform(62.525,5.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOAcQgHgEgFgHQgEgIAAgJQAAgIAEgIQAFgHAGgDQAHgEAJAAQAKAAAGAEQAHAEADAGQAEAHAAAHIAAAEIgBADIgoAAIABAFQACAEADABQAEACACAAQADAAAEgCQADgBABgEIAQAFQgBAFgEAEIgKAGIgMABQgKAAgGgDgAgFgOQgCABgCAFIgBADIAVAAQAAgFgCgCQgDgEgFAAQgDAAgDACg");
	this.shape_12.setTransform(55.875,5.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAcQgIgFgDgGQgEgIAAgJQAAgIAEgIQADgGAIgEQAHgEAIAAQALAAAFADQAFABAEAFQAEAFAAAEIgSAGQgCgFgCgCQgCgDgEABQgDgBgCACQgCABgCAFQgCAEAAAEQAAAHACADQABAEADABQADACACAAIAFgCIADgDIACgFIASAGQAAAFgEAEQgCADgIAEQgFACgJAAQgJAAgHgDg");
	this.shape_13.setTransform(49.025,5.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAJAfIAAgiQABgGgDgCQgCgDgEAAIgEABIgFAEIgBAJIAAAfIgUAAIAAg7IASAAIABALIACgEQACgEAGgDQADgBAGAAQAHAAAEABQAFAEACAEQADAGAAAFIAAAog");
	this.shape_14.setTransform(41.9,5.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAcQgGgEgFgHQgEgHABgKQgBgJAEgHQAFgHAGgDQAHgEAIAAQAKAAAHAEQAGADAEAHQAEAGAAAIIAAAEIgBADIgoAAIABAFQACAEADABQADACACAAQAEAAAEgCQADgBABgEIAQAFQgCAFgDAEIgKAGQgGABgHAAQgIAAgIgDgAgFgOQgCABgCAFIgBADIAVAAQAAgEgDgDQgCgEgGAAQgDAAgCACg");
	this.shape_15.setTransform(34.7,5.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAfIAAg7IASAAIABAMQACgGAEgEQAEgEAHABIAEAAIADABIgCARIgDgBIgFAAIgHABQgDABgBADQgBADAAAEIAAAfg");
	this.shape_16.setTransform(29.025,5.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOAcQgHgEgFgHQgDgGAAgLQAAgKADgGQAFgHAHgDQAGgEAJAAQAKAAAGAEQAHADADAHQAEAGAAAIIAAAEIgBADIgoAAIABAFQACAEADABQAEACACAAQAEAAADgCQACgBACgEIARAFQgCAFgEAEQgEADgGADQgGABgGAAQgKAAgGgDgAgEgOQgEABgBAFIAAADIAUAAQAAgEgCgDQgDgEgFAAQgDAAgCACg");
	this.shape_17.setTransform(22.65,5.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNAsIAAgtIgKAAIAAgOIAKAAIAAgGQAAgGACgEQABgEAEgDQADgCAEgCIAJAAIAIAAIAGACIgCAOIgDgCIgEgBQgEABgDACQgDACAAAEIAAAFIASAAIAAAOIgRAAIAAAtg");
	this.shape_18.setTransform(16.825,4.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAcQgIgFgDgGQgFgIAAgJQAAgIAFgIQADgGAIgEQAHgEAIAAQAKAAAGAEQAIADACAHQADAGABAIIAAAEIgBADIgoAAIACAFQABAEADABQAEACACAAQAEAAADgCQADgBABgEIARAFQgCAFgFAEQgCADgHADIgMABQgJAAgHgDgAgFgOQgCABgBAFIgCADIAVAAQAAgEgCgDQgDgEgFAAQgDAAgDACg");
	this.shape_19.setTransform(10.8,5.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AANAoIgPgeIgNAAIAAAeIgUAAIAAhOIAlAAQAOAAAIAGQAHAHAAAKQAAANgHAFQgEADgFACIAVAggAgPgDIAPAAQAEAAAEgDQADgBAAgGQAAgFgDgCQgDgDgFAAIgPAAg");
	this.shape_20.setTransform(3.625,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,134.2,11.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgaArIAAgJIAVgQIANgMQAGgHABgDQACgGABgGQAAgHgGgFQgGgEgGgBQgIABgGAFQgFAFgBALIgJgGQABgHAEgGQAEgGAGgCQAFgEAJAAQAHAAAEACQAHACACADQAEAEACAFQACAEAAAGQAAAIgEAIQgDAHgKAIQgLAKgLAJIAAAAIAEAAIAlAAIAAAJg");
	this.shape.setTransform(126,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdA0QgOgFgJgLIASgUQAFAHAJAEQAJAFALAAQAFAAAGgCQAEgCAAgEQAAgDgCgCQgCgCgHgBIgOgDQgUgEgKgJQgIgHAAgNQAAgJAFgJQAFgIAMgFQANgFAPAAQASAAAMAFQAMAEAIAKIgSAUQgFgHgIgDQgJgEgIAAIgIABIgFADQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQAAADADACQADACAGACIAUAEQARADAHAHQAIAIAAALQAAALgGAJQgGAIgLAFQgLAFgSAAQgPAAgPgFg");
	this.shape_1.setTransform(116.525,10.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGBGQgKgEgEgHQgFgHAAgOIAAgxIgTAAIAAgaIATAAIAAgaIAkgKIAAAkIAhAAIAAAaIghAAIAAArQAAAIAEAEQAEADAGAAQAGAAADgCQAEAAADgDIAFAXQgGAEgJACIgRACQgNABgHgEg");
	this.shape_2.setTransform(105.9,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARA4IAAg+QABgMgFgEQgDgFgIAAQgEAAgFADQgFADgCAFQgDAGAAAJIAAA5IglAAIAAhtIAiAAIAAAWIAFgIQAFgHAJgFQAIgEAKAAQALAAAJAEQAJAFAEAIQAFAIAAAOIAABIg");
	this.shape_3.setTransform(94.35,10.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAyQgNgGgIgNQgHgNAAgSQAAgRAHgNQAIgNANgGQANgHAQAAQARAAAMAHQANAHAGALQAGALAAAQIgBANIhKAAIACAJQADAGAGAEQAFADAGAAQAJAAAFgDQAEgEADgGIAeAKQgDAKgIAGQgIAHgKADQgKADgMAAQgQAAgOgHgAgJgbQgGAEgCAHIgBAGIAmAAQgBgIgDgFQgEgHgKAAQgHAAgEADg");
	this.shape_4.setTransform(81.125,10.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWA3IgnhtIAnAAIAWBTIAXhTIAnAAIgoBtg");
	this.shape_5.setTransform(68.75,10.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAyQgNgGgIgNQgHgNAAgSQAAgRAHgNQAIgMAMgHQAOgHAPAAQASAAAMAHQANAGAGAMQAGAMAAAPIgBANIhKAAIACAJQAEAHAEADQAGADAHAAQAIAAAEgDQAGgEACgGIAeAKQgDAKgIAGQgHAHgLADQgKADgLAAQgSAAgNgHgAgKgbQgEAEgDAHIgCAGIAoAAQgBgIgEgFQgEgHgLAAQgFAAgGADg");
	this.shape_6.setTransform(56.55,10.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjBJIgKghIgxAAIgLAhIglAAIAyiRIAtAAIAyCRgAgRAOIAjAAIgSg6g");
	this.shape_7.setTransform(36.9,8.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYBJIgjg/IgRAWIAAApIgmAAIAAiRIAmAAIAABBIAzhBIAqAAIgyA7IA0BWg");
	this.shape_8.setTransform(22.525,8.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhBBJIAAiRIA+AAQAhAAASATQASATAAAiQAAAigSAUQgSATghAAgAgbAsIAUAAQASAAAIgLQAJgMgBgVQABgVgJgLQgJgLgRAAIgUAAg");
	this.shape_9.setTransform(6.6,8.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,129,16.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAqBVQgMgGgGgLQgGgLAAgQQAAgPAGgMQAGgLAMgFQALgHAPAAQAQAAALAHQALAFAGALQAGAMAAAPQAAAQgGALQgGALgLAGQgLAHgQAAQgPAAgLgHgAA7AXQgDADgCAEQgCAFAAAGQAAAGACAFQACAEADADQAEACAFAAQAGAAADgCQADgDADgEQABgFAAgGQAAgGgBgFQgDgEgDgDQgEgCgFAAQgFAAgEACgAhOBZIB7ixIAjAAIh7CxgAhdADQgMgFgGgLQgGgLAAgQQAAgQAGgLQAGgLAMgHQALgGAPAAQAQAAAKAGQAMAHAGALQAGALAAAQQAAAQgGALQgGALgMAFQgKAHgQAAQgPAAgLgHgAhMg6QgDACgCAFQgCAGAAAFQAAAFACAGQACAFADACQAEACAFAAQAFAAAEgCQADgCACgFQACgGAAgFQAAgFgCgGQgCgFgDgCQgEgCgFAAQgFAAgEACg");
	this.shape.setTransform(61.125,9.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOCEIAAg6IiAAAIAAgsIBuihIBPAAIAACdIAoAAIAAAwIgoAAIAAA6gAAFhFIhABfIBJAAIAChxIgBAAQgFAKgFAIg");
	this.shape_1.setTransform(35.85,13.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBB3QgcgQgKggIA/gbQACAOAFAIQAFAIAJAFQAKAEAMgBQALABAIgEQAHgEAEgHQAFgIAAgJQAAgLgFgGQgDgGgIgDQgHgDgMAAIgTABIAAgsIAGABIAIAAQASAAAIgIQAIgIAAgRQAAgOgIgHQgIgIgPAAQgPAAgJAIQgLAJgDATIg7gVQAEgXAOgOQAOgPAXgIQAUgIAaAAQAgAAAUAJQAUAJALAQQALAQAAAWQAAASgFALQgGAMgIAHQgIAHgJADQgJAEgEABIAAAAQAJAAAHACQAJAEAJAFQAIAGAGALQAHAMAAAPQAAAZgNASQgOATgWAJQgXAKgcAAQgoAAgegRg");
	this.shape_2.setTransform(10.45,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,73,27.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAGAoIABhDIgJAHQgGADgFABIgCgJIAFgBIAHgEQADgCADgDIAFgEIAJAAIAABPg");
	this.shape.setTransform(56.75,4.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGBDQgJgEgFgHQgEgIAAgLIAAgvIgSAAIAAgaIASAAIAAgXIAjgKIAAAhIAeAAIAAAaIgeAAIAAApQgBAIAEADQAEADAGAAQAGAAADgBQADgBAEgDIADAWQgEAEgJACQgHACgKAAQgLAAgIgDg");
	this.shape_1.setTransform(50.8,8.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARA2IAAg8QAAgKgEgFQgEgEgHAAQgEAAgFACQgEADgCAFQgDAGAAAIIAAA3IgkAAIAAhoIAhAAIABAVIAEgIQAGgIAHgEQAIgDAJAAQALAAAIADQAJAFAEAIQAEAJAAAMIAABFg");
	this.shape_2.setTransform(40.15,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAwQgNgGgGgMQgIgNABgRQgBgQAIgNQAGgLANgHQAMgHAQABQAQgBALAHQANAGAFALQAGAMABAOIAAAHIgBAGIhHAAIACAJQAEAHAEACQAGADAFAAQAIAAAFgDQAFgFACgEIAcAJQgCAIgIAHQgGAGgLADQgKAEgLAAQgRgBgMgGgAgJgZQgEACgDAIIgCAGIAmAAQgBgIgEgFQgEgHgJAAQgHABgEADg");
	this.shape_3.setTransform(27.95,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUA1IgmhoIAmAAIAUBPIAXhPIAkAAIgmBog");
	this.shape_4.setTransform(16.55,9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAwQgMgGgIgMQgGgNAAgRQAAgQAGgNQAHgLANgHQAMgHAQABQARgBALAHQALAGAHALQAFAMABAOIgBANIhHAAIADAJQACAHAFACQAGADAFAAQAJAAAEgDQAGgFABgEIAcAJQgCAIgIAHQgHAGgKADQgKAEgLAAQgRgBgMgGgAgJgZQgFACgCAIIgCAGIAmAAQgBgIgEgFQgEgHgJAAQgGABgFADg");
	this.shape_5.setTransform(5.35,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,58.4,15.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAeBZIgrhNIgWAbIAAAyIguAAIAAixIAuAAIAABPIA/hPIA0AAIg9BIIBABpg");
	this.shape.setTransform(107.5,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhRBlQgcghAAhEQAAhCAcgiQAcgjA1AAQA2AAAcAjQAcAiAABCQAABEgcAhQgcAjg2AAQg1AAgcgjgAgXhJQgKAIgDATQgFARAAAdQAAAeAFASQAEATAJAHQAJAJAOgBQAPABAJgJQAJgHAEgTQAFgSAAgeQAAgdgFgRQgDgTgKgIQgKgIgOAAQgNAAgKAIg");
	this.shape_1.setTransform(84.425,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBB3QgcgQgLggIA/gbQACAOAGAIQAFAJAKAEQAKAEAKAAQAKAAAJgEQAIgEAEgHQAFgGAAgLQAAgKgFgHQgDgGgJgDQgHgDgMAAIgIABIgKABIAAgsIAOABQARgBAJgHQAJgIgBgRQABgOgJgIQgIgHgPAAQgPgBgKAJQgKAIgCAUIg8gVQAEgXAOgPQANgOAXgJQAXgIAYAAQAgAAATAJQAWAJALAQQAKAQAAAWQAAASgGALQgFAMgIAHQgIAHgIADQgJAFgGAAIAAAAQAIAAAJADQAJADAJAGQAIAFAHAMQAFALAAAPQAAAZgMATQgOASgWAJQgWAKgdAAQgpAAgdgRg");
	this.shape_2.setTransform(59.35,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNCnIAAgkQgPgCgOgDQgXgGgSgKQgSgKgPgOIAhgtQAKANAPAJQAPAKASAEIAMADIAAg4IgRgEQgVgFgRgJQgRgIgJgNQgJgOAAgTQAAgZAMgSQANgSAZgMQASgHAWgCIAAgkIAoAAIAAAkQAYACASAIQAbAKAUAWIgeApQgRgSgUgJQgKgEgMgCIAAA5IAOADQAmAIASAPQARARAAAcQAAAbgOATQgOATgYAJQgQAGgTACIAAAlgAAbBRQAKgCAGgDQAMgGAAgNQAAgJgHgFQgGgFgPgEgAgWhPQgKADgGAGQgEAGAAAHQAAAGADAFQADAEAIAEIAPAFIAAgwIgJACg");
	this.shape_3.setTransform(34.65,16.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOAkQgKgEgGgFIgNgJQgHgEgHAAQgIAAgFAGQgEAGgCAMIg1AAQACgmAQgTQAQgUAeAAQAOAAAKAEQAJAEAHAFIAOAJQAGAEAHAAQAJAAAEgGQAEgFADgNIA0AAQgBAlgRAUQgPAUgfAAQgPAAgJgEg");
	this.shape_4.setTransform(10.225,16.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,115.8,33.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgcA0QgOgFgKgLIASgUQAFAHAJAEQAKAFAKAAQAGAAAFgCQAEgCAAgEQAAgDgCgCQgCgCgHgBIgOgDQgVgFgIgIQgJgHAAgNQAAgJAFgJQAGgIALgFQALgFASAAQARAAAMAFQANAEAHAKIgRAUQgGgGgIgEQgJgEgIAAIgIABQgDAAgCADQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAAEADABQADACAGACIAUADQASAEAHAHQAHAIAAALQAAAMgGAIQgGAIgLAFQgNAFgQAAQgOAAgPgFg");
	this.shape.setTransform(122.175,108.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnA4IAAhtIAhAAIACAYQADgLAIgIQAIgHANAAIAHABIAFABIgEAfIgFgBIgJgBQgGAAgGADQgFADgEAGQgDAHAAAFIAAA4g");
	this.shape_1.setTransform(112.375,108.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAyQgNgGgIgNQgHgNAAgSQAAgRAHgNQAIgNANgGQANgHAQAAQASAAALAGQANAHAGAMQAGALAAAQIgBANIhKAAIACAJQADAGAGAEQAFADAGAAQAJAAAFgEQAEgDADgGIAeAKQgDAKgIAGQgIAHgKADQgKADgMAAQgQAAgOgHgAgJgbQgFADgDAIIgCAGIAoAAQgCgIgDgFQgEgHgKAAQgGAAgFADg");
	this.shape_2.setTransform(100.675,108.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVA3IgohtIAnAAIAWBTIAXhTIAnAAIgoBtg");
	this.shape_3.setTransform(88.325,108.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSBPIAAhtIAlAAIAABtgAgQgvQgFgDAAgKQAAgKAFgEQAGgEAKAAQALAAAFAEQAGAEAAAKQAAAJgGAEQgFAFgLAAQgKAAgGgFg");
	this.shape_4.setTransform(78.975,106.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnA4IAAhtIAhAAIACAYQADgLAIgIQAJgHAMAAIAHABIAFABIgEAfIgFgBIgJgBQgGAAgGADQgFACgEAHQgDAHAAAFIAAA4g");
	this.shape_5.setTransform(71.625,108.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjBJQgLgHgFgNQgGgOAAgRQAAgRAGgMQAGgNAKgHQALgHANAAQAPAAAIAJQAGAFADAGIAAhAIAlAAIAACbIgiAAIgBgVIgDAGQgHAJgHAEQgHAFgLAAQgNgBgKgGgAgOAAQgFAHgBAPQAAAPAGAIQAGAHAJAAQAFAAAFgEQAFgDACgHQACgFABgMQAAgKgCgFQgDgGgFgDQgEgDgGAAQgJgBgGAHg");
	this.shape_6.setTransform(59.15,106.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHBGQgIgEgFgHQgGgJAAgMIAAgxIgTAAIAAgbIATAAIAAgYIAlgLIAAAjIAhAAIAAAbIghAAIAAArQAAAIAEAEQAEADAHAAQAFAAAEgBIAHgEIADAXQgFAEgIACQgKADgHAAQgLAAgLgEg");
	this.shape_7.setTransform(41.45,106.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdA0QgMgFgLgLIASgUQAGAHAIAEQAKAFAKAAQAFAAAGgCQAFgCgBgEQAAgDgCgCIgJgDIgOgDQgVgFgJgIQgIgHAAgNQAAgKAGgIQAFgIAMgFQAKgFASAAQARAAAMAFQAOAEAGAKIgSAUQgEgGgJgEQgJgEgIAAIgIABQgEABgBACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAADADACQADACAGACIAUADQASAEAHAHQAHAIAAALQAAAKgFAKQgHAIgLAFQgMAFgQAAQgQAAgPgFg");
	this.shape_8.setTransform(30.7,108.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAyQgNgGgIgNQgHgNAAgSQAAgRAHgNQAIgNANgHQANgGAQAAQASAAAMAGQANAHAIANQAHANAAARQAAASgHANQgIANgNAGQgNAHgRAAQgPAAgOgHgAgKgbQgFADgCAHQgDAIAAAJQAAAKADAHQACAHAFADQAGAEAEAAQAGAAAFgEQAFgDACgHQADgHAAgKQAAgJgDgIQgCgHgFgDQgEgDgHAAQgFAAgFADg");
	this.shape_9.setTransform(18.275,108.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAyQgNgGgHgNQgIgNAAgSQAAgRAIgNQAHgNANgHQAMgGARAAQARAAALAEQALAFAGAIQAHAIABAJIgjALQgBgKgEgEQgEgFgHAAQgHAAgFAEQgEADgDAHQgCAHAAAJQAAAKACAIQADAHAFADQAFADAGAAQAEAAAFgDQAEgBABgFQADgDABgGIAhAKQgBAKgHAIQgHAIgLAEQgKAEgPAAQgRAAgOgHg");
	this.shape_10.setTransform(5.55,108.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhrB3IAAjtIBlAAQA2AAAfAfQAdAfAAA4QAAA5gdAfQgeAfg3AAgAgtBIIAgAAQAeAAANgSQAOgSABgkQgBgjgOgSQgNgSgeAAIggAAg");
	this.shape_11.setTransform(83.65,72.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AABB3IAAivQgNAMgMAGQgNAIgRADIgGgzQAKgBAKgDIAVgKQAJgEAKgJQAIgGADgHIAyAAIAADtg");
	this.shape_12.setTransform(61.475,72.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeB3IAAi9IhNAAIAAgwIDYAAIAAAwIhOAAIAAC9g");
	this.shape_13.setTransform(42.95,72.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGBGQgKgEgFgHQgEgHgBgOIAAgxIgTAAIAAgbIATAAIAAgYIAlgLIAAAjIAgAAIAAAbIggAAIAAArQAAAIADAEQAFADAGAAQAGAAADgBIAIgEIADAXQgGAEgHACQgJADgJAAQgLAAgJgEg");
	this.shape_14.setTransform(90.35,33.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgkA0QgIgEgFgIQgFgIAAgPIAAhIIAlAAIAABAQABAKAEAEQAEAFAHAAIAHgCQAEgCACgCQACgCACgGQABgFAAgGIAAg6IAmAAIAABtIghAAIgBgVQgGAMgKAGQgIAFgNAAQgLAAgJgEg");
	this.shape_15.setTransform(78.65,35.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdAyQgNgHgIgMQgHgNAAgSQAAgRAHgNQAHgNAOgHQANgGAQAAQASAAAMAGQANAHAIANQAHANAAARQAAASgHANQgIANgNAGQgNAHgRAAQgPAAgOgHgAgKgbQgEADgDAHQgDAIAAAJQAAAKADAHQADAIAEACQAGAEAEAAQAGAAAFgEQAFgDACgHQADgHAAgKQAAgJgDgIQgCgHgFgDQgEgDgHAAQgFAAgFADg");
	this.shape_16.setTransform(65.275,35.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGBLQgHgFgGgJIgEgJIgBAZIghAAIAAibIAmAAIAABBQADgHAGgFQAIgJAQAAQAMAAALAHQAKAGAFANQAGANAAASQAAARgGANQgFANgKAGQgMAIgNgBQgLAAgHgEgAgKgDQgEADgDAGQgCAGAAALQAAAJACAHQADAHAEADQAGADAEAAQAKAAAEgIQAGgFAAgRQAAgPgGgHQgFgGgJAAQgHAAgDADg");
	this.shape_17.setTransform(52.05,33.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpA2QgJgEgEgHQgEgGgBgKQABgMAHgIQAHgHAPgDIAmgIIAAgDQAAgIgFgEQgEgFgGAAQgIAAgFAEQgEAEgDAJIgggIQADgPAOgKQANgJAYAAQAPAAALAEQAMAGAGAJQAFAJABAOIAAAnQAAAIAIAAIAFgBIgCAWQgGADgKAAQgHAAgIgDQgHgDgDgFIgDgFIgCAEQgFAFgJAEQgJADgKAAQgKAAgJgDgAgIAMQgIABgCADQgDACgBAFQABAEADAEQADACAFAAIAHgBQADgBADgDQADgCABgDQACgEAAgFIAAgGg");
	this.shape_18.setTransform(38.8,35.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgbAyQgNgGgIgNQgHgNAAgSQAAgRAHgNQAIgNANgGQANgHAQAAQASAAALAGQANAHAGAMQAGALAAAQIgBANIhKAAIACAJQADAGAGAEQAFADAGAAQAJAAAFgEQAEgDADgGIAeAKQgDAKgIAGQgIAHgKADQgKADgMAAQgQAAgOgHgAgJgbQgFADgDAIIgCAGIAoAAQgCgIgDgFQgEgHgKAAQgGAAgFADg");
	this.shape_19.setTransform(119.275,9.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgnA4IAAhtIAhAAIACAYQADgLAIgIQAIgHANAAIAHAAIAFACIgEAfIgOgCQgGAAgGADQgFADgEAGQgDAFAAAHIAAA4g");
	this.shape_20.setTransform(108.9,8.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgdAyQgOgHgHgMQgHgNAAgSQAAgRAHgNQAHgNAOgHQAMgGARAAQARAAANAGQAOAHAHANQAHANAAARQAAASgHANQgIAMgNAHQgOAHgQAAQgQAAgNgHgAgKgbQgFADgCAHQgDAIAAAJQAAAKADAHQACAHAFADQAFAEAFAAQAGAAAFgEQAEgCADgIQACgGAAgLQAAgLgCgGQgDgHgEgDQgFgDgGAAQgGAAgEADg");
	this.shape_21.setTransform(96.975,9.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA1A4IAAhAQAAgKgEgEQgEgFgHAAQgGAAgEAEQgEABgDAHQgCAGAAAHIAAA6IgkAAIAAhAQgBgKgEgEQgDgFgIAAQgEAAgFADQgFADgDAGQgCAFAAAJIAAA5IglAAIAAhtIAhAAIABAWQAGgMAJgGQAKgGAMAAQAMAAAIAGQAKAFAEALQACgGAHgHQAGgEAHgDQAHgCAIAAQALAAAIAFQAIADAFAJQAGAJgBANIAABIg");
	this.shape_22.setTransform(80.05,8.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AARA4IAAg+QABgLgFgFQgDgFgIAAQgEAAgFADQgFADgCAFQgDAGAAAJIAAA5IglAAIAAhtIAhAAIABAXIAFgJQAFgHAJgFQAIgEAKAAQALAAAJAFQAJAFAEAHQAFAJAAANIAABIg");
	this.shape_23.setTransform(56.6,8.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgnA4IAAhtIAhAAIACAYQAEgMAHgHQAJgHAMAAIAHAAIAFACIgEAfIgNgCQgHAAgGADQgFADgEAGQgCAFAAAHIAAA4g");
	this.shape_24.setTransform(45.6,8.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgpA2QgIgEgFgHQgEgGAAgKQgBgMAIgIQAHgHAPgDIAlgIIAAgDQAAgIgEgEQgEgFgGAAQgIAAgFAEQgGAEgBAJIgggIQADgPAOgKQAMgJAZAAQAPAAALAEQAMAGAGAJQAFAJABAOIAAAnQgBAIAIAAQAFAAABgBIgBAWQgHADgKAAQgIAAgHgDQgHgDgEgFIgCgFIgCAEQgFAFgJAEQgJADgJAAQgLAAgJgDgAgJAMQgHABgDADQgCACAAAFQAAAFADADQADACAFAAIAHgBIAGgEIADgFQACgEAAgFIAAgGg");
	this.shape_25.setTransform(34.2,9.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgbAyQgNgGgIgNQgHgNAAgSQAAgRAHgNQAIgNANgGQANgHAQAAQASAAALAGQANAHAGAMQAGALAAAQIgBANIhKAAIACAJQADAGAGAEQAFADAGAAQAJAAAFgEQAEgDADgGIAeAKQgDAKgIAGQgIAHgKADQgKADgMAAQgQAAgOgHgAgJgbQgFADgDAIIgCAGIAoAAQgCgIgDgFQgEgHgKAAQgGAAgFADg");
	this.shape_26.setTransform(21.175,9.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag3BIIAAiQIAmAAIAAB0IBIAAIAAAcg");
	this.shape_27.setTransform(8.8,7.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,127.5,114.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgFAFQgCgCAAgDQAAgCACgCQADgDACAAQADAAACADQADACAAACQAAADgDACQgCADgDAAQgCAAgDgDg");
	this.shape.setTransform(116.85,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAbQgHgDgFgHIAJgGQACAFAFAEQAGADAGAAQAGAAAEgDQADgCAAgEIgBgFQgDgCgEgBIgNgDQgJgCgEgDQgDgEAAgGQAAgFACgEQADgFAFgCQAGgCAGAAQAJAAAGADQAGADADAHIgIAFQgDgFgEgCQgDgDgGAAIgHABIgEAEIgCAEQAAADACACQACADAFAAIAOADQAJACACADQAEAEAAAFQAAAGgDAEQgDAEgGADQgGACgGAAQgHAAgIgEg");
	this.shape_1.setTransform(112.025,5.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAbQgGgDgEgHQgEgIAAgJQAAgJAEgHQAEgHAGgEQAHgDAHAAQAJAAAFADQAHAEACAGQAEAHAAAHIgBADIAAADIgsAAQAAAGACADQADAGAEACQAEADAFAAQAGAAAFgDQAFgEACgDIAHAFQgCADgEAEQgCADgGABQgEACgGAAQgIAAgHgEgAgIgTQgFADgCAFIgCAGIAjAAQgBgIgEgEQgEgFgIAAQgGAAgDADg");
	this.shape_2.setTransform(105.475,5.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAlQgFgBgCgEQgCgEAAgFIAAgkIgMAAIAAgIIAMAAIAAgPIAJgCIAAARIAVAAIAAAIIgVAAIAAAiQAAAEACADQADACADAAQAEAAACgBQADgBACgCIADAIIgGAEQgEABgFAAQgFAAgCgCg");
	this.shape_3.setTransform(99.575,4.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMAbQgHgDgEgHQgEgIAAgJQAAgJAEgHQAEgHAGgEQAHgDAHAAQAJAAAFADQAGAEAEAGQADAGAAAIIAAADIgBADIgsAAQAAAFACAEQACAFAFADQAEADAGAAQAFAAAFgDQAFgDACgEIAHAFQgCAEgDADQgEADgFABQgEACgGAAQgHAAgHgEgAgIgTQgFADgCAFIgCAGIAjAAQAAgIgFgEQgEgFgIAAQgFAAgEADg");
	this.shape_4.setTransform(93.675,5.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIArQgDgCgDgEIgEgEIgBAKIgJAAIAAhXIAKAAIAAAlQADgDAEgEQAFgDAHAAQAHAAAHADQAGAFAEAHQADAFAAAKQAAAKgDAHQgEAGgGAEQgHAFgHAAIgJgCgAgJgGQgDADgEAEQgCAEAAAIQAAAIACAFQADAEAEADQAEADAFAAQAJAAAFgHQAFgFAAgLQAAgLgFgEQgFgHgJABQgEgBgFADg");
	this.shape_5.setTransform(86.65,4.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAdQgEgBgDgEQgDgEAAgFQAAgHAFgEQAEgEAIgBIAVgFIAAgCQAAgGgEgEQgDgEgGAAQgGAAgEADQgFADgCAFIgHgEQACgGAGgFQAHgEAJAAQAHAAAEACQAGACADAFQADAEAAAHIAAAcQAAAFAEAAIAFgBIgBAIIgGABIgGgCQgDAAgCgEIgBgCIgDACIgHAFIgIABIgKgCgAgGAFQgHABgCACQgDACAAAEQAAAEADACQADADAFAAIAHgBIAFgDIAEgFQABgDAAgDIAAgHg");
	this.shape_6.setTransform(79.525,5.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEArIAAg7IAJAAIAAA7gAgEgdQgCgCAAgEQAAgDACgCQACgCACAAQACAAADACQACADAAACQAAADgCADQgCACgDAAQgDAAgBgCg");
	this.shape_7.setTransform(74.325,4.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAoQgHgDgDgHQgFgIAAgJQAAgJAFgHQAEgGAGgFQAGgDAHAAQAHAAAGAEQAEADACAEIAAgmIAKAAIAABXIgJAAIAAgLIgEAFQgCADgFADIgJACQgHAAgGgFgAgMgCQgGAFAAAKQAAAKAFAGQAFAHAIAAQAFAAAFgDQAEgDACgFQADgGAAgHQAAgGgDgGQgDgEgDgCQgDgDgHABQgIgBgEAHg");
	this.shape_8.setTransform(68.75,4.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAGAnIABhBIgJAGIgLAEIgCgJIAFgBIAHgEIAGgEIAFgFIAIAAIAABOg");
	this.shape_9.setTransform(58.275,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMAbQgHgDgEgHQgDgHgBgKQABgJADgHQAEgHAGgEQAGgDAIAAQAJAAAGADQAGAEADAGQACAGAAAIIAAADIAAADIgsAAQAAAFACAEQACAFAFADQAFADAEAAQAHAAAEgDQAEgDACgEIAIAFQgBADgFAEQgEADgEABQgEACgHAAQgGAAgHgEgAgJgTQgEAEgCAEIgCAGIAjAAQAAgIgFgEQgEgFgJAAQgEAAgFADg");
	this.shape_10.setTransform(49.1,5.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbArIAAhUIAIAAIAAALIAEgGIAIgFQAEgBAEAAQAIAAAGADQAGAEAEAHQADAHAAAKQAAAKgDAGQgEAGgGAEQgHAEgHAAQgGAAgGgEQgEgCgDgEIAAAigAgJgfQgEADgCAFQgDAEAAAIQAAAHACAEQAEAGADACQAEADAFAAQAJAAAFgHQAFgEAAgLQAAgLgFgGQgFgGgJAAQgEAAgFADg");
	this.shape_11.setTransform(42.075,6.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAqIgGgEIADgIQACADACABIAGABQAEAAACgDQACgBADgGIADgIIgZg7IALAAIARAxIATgxIAKAAIgcBFIgEAKQgCADgEABQgDACgFAAg");
	this.shape_12.setTransform(34.95,7.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAAlQgFgCgCgDQgCgEAAgFIAAgkIgMAAIAAgIIAMAAIAAgPIAJgCIAAARIAVAAIAAAIIgVAAIAAAiQAAAFACACQADACADAAQAEAAACgBQADgBACgCIADAIIgGAEQgEABgFAAQgFAAgCgCg");
	this.shape_13.setTransform(29.475,4.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIAMQAEgBACgDIADgEIACgEIgBAAIgBAAIgBAAIgDAAIgDgCIgBgEIABgFIADgCQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIADAEQABACAAAEIgBAHIgFAHQgCACgEADg");
	this.shape_14.setTransform(21.425,8.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggAnIAAhOIAaAAQARAAALALQALAKAAASQAAATgLAKQgLALgRgBgAgWAeIARAAQAMABAIgJQAIgHAAgPQAAgNgIgJQgIgHgMgBIgRAAg");
	this.shape_15.setTransform(16.125,4.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAGAnIABhBIgJAGIgLAEIgCgJIAFgBIAHgEIAGgEIAFgFIAIAAIAABOg");
	this.shape_16.setTransform(8.725,4.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAnIAAhFIgcAAIAAgJIBAAAIAAAJIgbAAIAABFg");
	this.shape_17.setTransform(3.25,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,117.7,11.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGQgCgCAAgEQAAgDACgBQADgDACAAQADAAACADQADACAAACQAAADgDADQgBABgEAAQgDAAgCgBg");
	this.shape.setTransform(103.85,76.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAeIAAghQAAgKgEgDQgEgEgGAAQgDAAgEABQgEADgDAEQgDAFAAAHIAAAeIgJAAIAAg5IAIAAIAAAJIAEgFIAHgEIAIgCQAFAAAGADQAFACADAFQADAFAAAIIAAAkg");
	this.shape_1.setTransform(98.975,74.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAaQgGgDgEgHQgEgHAAgJQAAgJAEgGQAEgIAGgCQAGgEAHAAQAIAAAGAEQAGACAEAIQAEAGAAAJQAAAJgEAHQgEAHgGADQgFAEgJAAQgIAAgFgEgAgJgSQgEADgCAFQgDAEAAAGQAAAGADAGQACAEAEADQAFADAEAAQAGAAAEgDQAEgCACgFQADgGAAgGQAAgGgDgEQgCgGgEgCQgEgDgGAAQgFAAgEADg");
	this.shape_2.setTransform(92.175,74.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDApIAAg4IAIAAIAAA4gAgEgcIgCgFQAAgDACgCQACgCACAAQAEAAABACQACABAAAEQAAADgCACQgCACgDAAIgEgCg");
	this.shape_3.setTransform(87.4,73.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAAkQgFgCgBgDQgDgEAAgFIAAgiIgLAAIAAgIIALAAIAAgOIAJgCIAAAQIAUAAIAAAIIgUAAIAAAgQAAAEACADQADACADAAIAGgBIAEgDIADAHIgGAEQgDABgFAAIgHgBg");
	this.shape_4.setTransform(83.775,73.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAcQgFgCgCgDQgDgEAAgEQAAgHAFgEQAEgEAIgBIAUgEIAAgDQAAgGgEgDQgDgEgFABQgHgBgEADQgDACgDAGIgHgFQACgFAGgFQAHgEAJAAQAEAAAGACQAGADACAEQADAEAAAHIAAAaQAAAFAEAAIAFAAIgBAGIgGABIgGgBIgEgDIgBgDIgDADQgEADgDAAIgIACQgFAAgEgCgAgGAFIgIADQgDADAAADQAAADADACQADADAFAAIAGgBIAFgDQACgBABgDQACgDAAgEIAAgGg");
	this.shape_5.setTransform(78.675,74.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAdIAAgHIAdgjIAHgHIgkAAIAAgIIAuAAIAAAHIgkAqIAlAAIAAAIg");
	this.shape_6.setTransform(72.375,74.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEApIAAg4IAJAAIAAA4gAgEgcQgCgCAAgDQAAgEACgBQACgCACAAQADAAACACQACACAAADIgCAFIgFACQgCAAgCgCg");
	this.shape_7.setTransform(68,73.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAnQgEgEAAgIIAAhEIAJAAIAABEQAAAEACACQAAACAEgBIAIgBIgBAIIgJABQgHAAgCgDg");
	this.shape_8.setTransform(65.4,73.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAcQgFgCgCgDQgDgDAAgFQABgHAEgEQAEgEAHgBIAVgEIAAgDQAAgGgEgDQgDgEgGABQgGgBgEADQgEACgCAGIgIgFQADgFAGgFQAHgEAIAAQAFAAAGACQAGADACAEQADAEAAAHIAAAaQAAAFAEAAIAFAAIgBAGIgGABIgGgBIgEgDIgBgDIgDADQgEADgDAAIgHACQgGAAgEgCgAgGAFIgIADQgDADgBADQABADADACQADADAFAAIAGgBIAEgDQADgCABgCQACgDAAgEIAAgGg");
	this.shape_9.setTransform(60.35,74.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAkQgFgCgCgDQgCgCAAgHIAAgiIgLAAIAAgIIALAAIAAgOIAJgCIAAAQIAUAAIAAAIIgUAAIAAAgQAAAEACADQADACADAAIAGgBIAEgDIADAHIgGAEQgDABgFAAIgHgBg");
	this.shape_10.setTransform(54.775,73.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEApIAAg4IAJAAIAAA4gAgEgcQgCgCAAgDQAAgEACgBQACgCACAAQADAAACACQACABAAAEQAAADgCACQgCACgDAAIgEgCg");
	this.shape_11.setTransform(50.975,73.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaAqIAAhRIAIAAIAAALIAEgGQADgDAEgBIAIgDQAHAAAGAFQAGADADAHQAEAGAAAKQAAAIgEAGQgDAHgGAEQgGADgHAAQgHAAgFgDQgEgDgCgEIAAAigAgJgdQgDADgDAEQgCAGAAAGQAAAHACADQACAFAEADQAFACAEAAQAIABAFgHQAFgFAAgJQAAgKgFgGQgEgGgJAAQgFAAgEADg");
	this.shape_12.setTransform(46.275,75.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNAaQgGgDgFgHIAIgGQADAGAFADQAEADAHAAQAFAAAEgDQADgCAAgDIgBgFQgCgCgEgBIgNgDQgIgCgEgCQgDgEAAgGQAAgGACgDQAEgFAEgCQAGgCAFAAQAHAAAHADQAGAEADAGIgIAFQgCgFgEgCQgEgCgFAAIgGABIgFACIgBAFQAAADABACIAHADIANADQAIABADADQAEAEAAAFQAAAGgDAEQgDAEgFACQgFACgHAAQgIAAgHgEg");
	this.shape_13.setTransform(39.575,74.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNAaQgHgDgDgHQgEgHAAgJQAAgJAEgGQAEgHAGgDQAGgEAHAAQAIAAAHAEQAFACAEAIQAEAGAAAJQAAAJgEAHQgEAHgFADQgHAEgIAAQgIAAgFgEgAgJgSQgEACgCAGQgDAEAAAGQAAAGADAGQACAFAEACQAEADAFAAQAFAAAFgDQAFgEABgDQADgGAAgGQAAgGgDgEQgBgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_14.setTransform(33.375,74.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAQAqIAAghQAAgKgEgDQgEgEgGABIgHABQgEACgDAEQgDADAAAIIAAAfIgJAAIAAhTIAJAAIAAAjQADgFAFgDQAGgCAEAAQAFAAAGACQAFADADAFQADAFAAAGIAAAlg");
	this.shape_15.setTransform(26.625,73.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAqQgHgFAAgGQAAgFAEgEQACgCAEgBIgEgCQgCgDAAgFQgBgDAEgFIAFgCIgDgCQgGgFAAgJQAAgFADgFQADgDAGgEQAFgCAGAAQAGAAAGACIABABIACgGIAFgFIAIgBIAAAAIADAIIgBAAQgHAAgCACQgDACAAAEIACACQADAFAAAFQAAAHgDADQgEAFgEACQgEACgIAAIgHgBIgEACQgDADAAACQAAADADACQACABAEAAIAQAAQAIAAAFAEQAEADAAAHQAAAFgEAFQgEAFgFABQgGACgIAAQgNAAgHgEgAgQAYQgDACAAADQAAAEAFADQAFADAIAAQAGAAAFgCQAEgCABgBQADgDAAgCQAAgDgDgCQgCgCgHAAIgRAAQgDAAgCACgAgMgZQgDADAAAFQAAAFADAEQAEADAGAAQAGAAADgDQAFgDAAgGQAAgGgFgCQgEgEgFAAQgFAAgFAEg");
	this.shape_16.setTransform(123.35,61.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAQAeIAAghQAAgKgEgEQgEgDgGAAIgHABQgFADgCAEQgDAFAAAHIAAAeIgJAAIAAg5IAIAAIAAAJIAEgFIAHgEQAEgBAEAAQAGAAAFACQAFADADAEQADAFAAAHIAAAlg");
	this.shape_17.setTransform(116.775,60.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEApIAAg4IAJAAIAAA4gAgEgcQgCgCAAgDQAAgEACgBQACgCACAAQADAAACACQACABAAAEQAAADgCACQgCACgDAAIgEgCg");
	this.shape_18.setTransform(111.875,59.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQAeIAAg5IAIAAIABAJQACgFAFgDQAEgDAGABIAEAAIADABIgCAIIgDgBIgEAAQgEAAgDACIgFAHQgDAFAAAFIAAAfg");
	this.shape_19.setTransform(108.625,60.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEApIAAg4IAIAAIAAA4gAgEgcIgCgFQAAgDACgCQACgCACAAQADAAACACQACABAAAEQAAADgCACQgCACgDAAIgEgCg");
	this.shape_20.setTransform(104.55,59.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAbQgGgDgCgEQgDgEAAgIIAAgkIAJAAIAAAiQAAAJAEADQADADAIAAIAFgBIAFgDQADgCABgEQACgEAAgFIAAgeIAJAAIAAA4IgIAAIgBgJQgDAGgFACQgGACgFAAQgGAAgEgCg");
	this.shape_21.setTransform(99.675,60.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AASApIAAghIgCAEQgEADgEABQgEADgEAAQgIAAgFgEQgGgEgEgHQgDgFAAgKQAAgIAEgHQAEgIAGgDQAHgDAFAAQAEgBAFACQADABAEAFIACADIABgJIAIAAIAABQgAgMgaQgFAGAAAJQAAAKAFAFQAEAHAIAAQAFgBAEgCQAFgDACgFQACgFAAgGQAAgGgCgGQgDgEgDgDQgEgCgGAAQgHAAgFAGg");
	this.shape_22.setTransform(92.575,61.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMAbQgGgFgDgGQgFgHAAgJQAAgIAFgHQADgGAGgEQAHgEAGAAQAHAAAHAEQAGADADAGQADAGAAAHIAAADIgBADIgqAAIACAJQADAFADACQAFADAEAAQAGAAAFgDQAEgCACgEIAIAFIgGAGIgIAFQgEABgGAAQgHAAgHgDgAgIgSQgDACgDAGIgCAFIAhAAQAAgHgEgEQgFgFgHAAQgGAAgDADg");
	this.shape_23.setTransform(86.05,60.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgQAeIAAg5IAIAAIABAJQACgFAFgDQAEgDAGABIAEAAIADABIgCAIIgDgBIgEAAQgEAAgDACIgFAHQgDAFAAAFIAAAfg");
	this.shape_24.setTransform(81.225,60.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAZAmIgIgVIgiAAIgIAVIgJAAIAdhLIALAAIAdBLgAgNAIIAbAAIgOgkg");
	this.shape_25.setTransform(71.65,59.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AATAmIgZgmIgOANIAAAZIgJAAIAAhLIAJAAIAAAmIAlgmIANAAIgeAfIAeAsg");
	this.shape_26.setTransform(64.75,59.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgeAmIAAhLIAYAAQARAAAKAKQAKAKAAARQAAASgKAKQgLAKgQAAgAgVAdIAQAAQANAAAGgIQAIgHAAgOQAAgNgIgIQgGgHgNAAIgQAAg");
	this.shape_27.setTransform(56.825,59.65);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgNAnQgGgEgEgHQgDgGAAgKQAAgJAEgFQAEgIAGgDQAHgDAFgBQAHAAAFAEQAEAEACADIAAgkIAJAAIAABUIgIAAIgBgLIgCAFQgEADgEABQgEADgEAAQgIAAgFgEgAgMgCQgFAFAAAJQAAALAFAFQAEAHAIAAQAGAAADgEQAEgBADgGQACgGAAgGQAAgHgCgFQgDgDgDgDQgEgCgGAAQgIAAgEAGg");
	this.shape_28.setTransform(45.175,59.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMAbQgGgFgDgGQgEgHgBgJQABgIAEgHQADgGAGgEQAGgEAHAAQAHAAAHAEQAGADACAGQADAGAAAHIAAADIAAADIgqAAIACAJQACAFAEACQAFADAFAAQAFAAAFgDQAEgCACgEIAHAFIgFAGIgIAFQgEABgGAAQgIAAgGgDgAgIgSQgEACgCAGIgCAFIAhAAQAAgHgEgEQgEgFgIAAQgFAAgEADg");
	this.shape_29.setTransform(38.65,60.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgBAkQgDgBgCgEQgDgDAAgGIAAgiIgLAAIAAgIIALAAIAAgOIAJgDIAAARIAUAAIAAAIIgUAAIAAAhQAAAEACACIAGACQAEAAACgBIAEgEIAEAIIgHAEQgEACgFAAIgHgCg");
	this.shape_30.setTransform(33.25,59.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgQAeIAAg5IAIAAIABAJQADgGAEgCQAEgDAGABIAEAAIADABIgCAIIgDgBIgEAAQgEAAgDACIgFAHQgDAFAAAFIAAAfg");
	this.shape_31.setTransform(29.375,60.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgOAbQgGgFgEgGQgDgIAAgIQAAgHADgIQAFgHAFgDQAIgEAGAAQAHAAAIAEQAGAEADAGQAEAHAAAIQAAAJgEAHQgDAGgGAFQgHADgIAAQgHAAgHgDgAgJgSQgEACgDAGQgBAEAAAGQAAAHABAFQADAFAEACQAEADAFAAQAFAAAFgDQAFgDACgEQABgFAAgHQAAgGgBgEQgCgGgFgCQgFgDgFAAQgFAAgEADg");
	this.shape_32.setTransform(23.4,60.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgaApIAAhQIAIAAIAAAKIAEgFQADgDAEgCIAIgBQAHgBAGAEQAGAEAEAHQADAIAAAHQAAAKgEAFQgDAHgGAEQgGAEgHAAQgHAAgFgEQgEgDgCgEIAAAhgAgIgeQgEADgDAFQgCAGAAAFQAAAHACAEQACAFAEADQAFACAEABQAIAAAFgHQAFgEAAgLQAAgJgFgGQgEgGgJAAQgFAAgDACg");
	this.shape_33.setTransform(16.775,61.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgMAbQgGgFgEgGQgEgIAAgIQAAgHAEgIQAEgHAGgDQAGgEAHAAQAHAAAHAEQAGADADAGQACAGAAAHIAAADIAAADIgqAAIACAJQACAFAEACQAFADAFAAQAFAAAFgDQAEgCACgEIAHAFIgFAGIgIAFQgEABgGAAQgHAAgHgDgAgIgSQgEACgCAGIgCAFIAhAAQAAgHgEgEQgEgFgIAAQgFAAgEADg");
	this.shape_34.setTransform(9.85,60.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgPAeIAAg5IAGAAIACAJQADgFAEgDQADgDAIABIACAAIADABIgBAIIgCgBIgFAAQgDAAgEACIgFAHQgCAFAAAFIAAAfg");
	this.shape_35.setTransform(5,60.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgSAFIAAgJIAlAAIAAAJg");
	this.shape_36.setTransform(126.2,46.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIAqIAAgwIgLAAIAAgIIALAAIAAgKIABgHIAEgGIAFgDIAIgBIAGAAIAEACIgDAIIgCgCIgEAAQgEAAgEACQgDADAAAFIAAAJIAUAAIAAAIIgUAAIAAAwg");
	this.shape_37.setTransform(122.05,45.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHAnQgEgFAAgHIAAhEIAJAAIAABEQAAAEACACQAAABAEAAIAIgBIgBAIIgFABIgEAAQgGAAgDgDg");
	this.shape_38.setTransform(118.6,45.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgMAaQgHgEgDgGQgDgHAAgJQAAgIADgHQAEgHAGgDQAGgEAHAAQAHAAAHAEQAGAEACAFQAEAGAAAHIAAADIgBADIgqAAIACAJQADAFAEADQAEACAFAAQAFAAAEgCQAFgCACgFIAIAEQgCAEgEADQgDADgFACQgFABgFAAQgIAAgGgEgAgIgSQgFADgCAEIgBAHIAhAAQAAgIgFgEQgEgEgHgBQgFABgEACg");
	this.shape_39.setTransform(113.3,46.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgNAaQgHgDgEgHIAIgFQADAFAFADQAEADAGAAQAGAAAEgCQADgCAAgFIgBgEQgCgCgEgBIgNgDQgIgBgEgEQgEgDAAgHQAAgEADgEQACgEAGgDQAGgCAFAAQAHAAAHAEQAGAEADAFIgIAFQgCgGgEgCQgEgCgFAAIgGABQgDABgCADIgBAEQAAADABACIAHADIANADQAJABACADQAEAEAAAFQAAAGgDAEQgDAEgFACQgFACgHAAQgIAAgHgEg");
	this.shape_40.setTransform(107.125,46.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgNAnQgGgEgEgGQgDgHAAgKQAAgIAEgHQAEgGAGgEQAHgEAFABQAHAAAFADQAEADACAEIAAgjIAJAAIAABSIgIAAIAAgKIgDAFQgEADgEABQgEACgEAAQgIABgFgEgAgMgCQgFAFAAAJQAAAKAFAHQAEAFAIAAQAFAAAFgDQADgCADgFQACgGAAgGQAAgGgCgFQgDgFgDgBQgEgDgGAAQgHAAgFAGg");
	this.shape_41.setTransform(96.875,45.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAQAdIAAggQAAgKgEgEQgEgDgGAAIgHACQgFACgDAEQgCAFAAAHIAAAdIgJAAIAAg4IAIAAIAAAJIAEgFIAHgEQAEgBAEAAQAFAAAGACQAFACADAGQADAEAAAHIAAAkg");
	this.shape_42.setTransform(90.15,46.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgRAdQgFgDgCgDQgDgEAAgFQAAgGAFgEQAFgEAHgBIAUgEIAAgCQAAgHgEgDQgDgDgFgBQgHABgEACQgDACgDAGIgHgEQACgGAGgFQAHgEAJAAQAEAAAGACQAGADACAEQADAEAAAHIAAAaQAAAFAEAAIAFAAIgBAHIgGABIgGgBQgDgCgBgDIgBgCIgDACQgEAEgDABIgIABQgFAAgEgBgAgGAFQgFABgDACQgDACAAAEQAAAEADACQADACAFAAIAGgBIAFgCQACgCABgDQACgDAAgEIAAgFg");
	this.shape_43.setTransform(83.725,46.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgeAmIAAhLIAYAAQAQAAALAKQAKAKAAARQAAASgKAKQgLAKgQAAgAgVAeIAQAAQALgBAIgHQAIgIAAgOQAAgNgIgIQgHgHgMgBIgQAAg");
	this.shape_44.setTransform(72.875,45.85);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAGAmIAAg/IgIAGIgKAEIgCgIIAEgCIAIgDIAFgEIAEgFIAIAAIAABLg");
	this.shape_45.setTransform(66,45.85);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgEAmIAAhDIgaAAIAAgIIA9AAIAAAIIgbAAIAABDg");
	this.shape_46.setTransform(61,45.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAQAqIAAghQAAgJgEgEQgEgDgGgBIgIACQgEADgCADQgDAEAAAHIAAAfIgJAAIAAhTIAJAAIAAAjQADgFAFgDQAGgCAEAAQAFAAAGACQAFADADAFQADAEAAAHIAAAlg");
	this.shape_47.setTransform(50.825,45.45);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgBAkQgEgCgCgDQgCgCAAgHIAAgiIgLAAIAAgIIALAAIAAgOIAJgDIAAARIAUAAIAAAIIgUAAIAAAgQAAAEACADQADACADAAIAGgBIAEgDIADAIIgGADQgDABgFAAQgFAAgDgBg");
	this.shape_48.setTransform(45.125,46);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgEApIAAg4IAIAAIAAA4gAgEgcIgCgFQAAgDACgCQACgCACAAQAEAAABACQACABAAAEQAAADgCACQgCACgDAAIgEgCg");
	this.shape_49.setTransform(41.3,45.525);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAQAdIgQgtIgPAtIgJAAIgUg5IAKAAIAPAuIAQguIAIAAIAPAuIAPguIAKAAIgUA5g");
	this.shape_50.setTransform(35.2,46.775);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgQAdIAAg4IAIAAIABAKQADgHAEgBQAEgDAGAAIAEAAIADABIgCAJIgDgBIgEAAQgEAAgDACIgFAGQgDAEAAAHIAAAdg");
	this.shape_51.setTransform(25.475,46.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgMAaQgHgEgDgGQgDgHAAgJQAAgIADgHQADgHAHgDQAGgEAHAAQAHAAAHAEQAFADADAGQADAGAAAHIAAADIAAADIgqAAIACAJQACAFAEADQAFACAEAAQAGAAAFgCQADgCADgFIAHAEIgFAHIgIAFQgFABgFAAQgIAAgGgEgAgIgSQgEACgCAFIgCAHIAhAAQAAgIgEgEQgFgEgHgBQgGABgDACg");
	this.shape_52.setTransform(19.625,46.75);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgNAnQgGgEgEgGQgDgIAAgJQAAgIAEgHQAEgGAGgEQAHgEAFABQAHAAAFADQAEADACAEIAAgjIAJAAIAABSIgIAAIAAgKIgDAFQgEADgEABQgEACgEAAQgIABgFgEgAgMgCQgFAEAAAKQAAAKAFAHQAEAFAIAAQAFAAAFgDQADgCADgFQACgGAAgGQAAgGgCgFQgDgFgDgBQgDgDgHAAQgHAAgFAGg");
	this.shape_53.setTransform(12.725,45.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgHAnQgEgEAAgIIAAhEIAJAAIAABEQAAAEACACQABABADAAIAIgBIgCAIIgEABIgEAAQgHAAgCgDg");
	this.shape_54.setTransform(8.225,45.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgNAaQgHgEgDgGQgEgHAAgJQAAgIAEgHQAEgHAGgDQAGgEAHAAQAIAAAHAEQAFADAEAHQAEAHAAAIQAAAJgEAHQgEAHgFADQgHAEgIAAQgIAAgFgEgAgJgSQgEACgCAFQgDAGAAAFQAAAGADAGQACAFAEADQAEACAFAAQAFAAAFgCQAEgEACgEQADgGAAgGQAAgFgDgGQgCgEgEgDQgEgDgGAAQgFAAgEADg");
	this.shape_55.setTransform(2.775,46.75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgNAnQgGgDgEgIQgDgGAAgJQAAgKAEgFQAEgIAGgDQAHgEAFAAQAHAAAFAFQAEACACAEIAAgjIAJAAIAABTIgIAAIgBgLIgCAEQgEAFgEABQgEACgEgBQgIAAgFgDgAgMgCQgFAFAAAKQAAAJAFAGQAEAHAIgBQAFAAAFgCQAEgCACgGQACgGAAgGQAAgGgCgGQgDgDgDgCQgEgDgGAAQgHAAgFAGg");
	this.shape_56.setTransform(114.175,31.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAQAeIAAghQAAgKgEgDQgEgEgGAAIgIABQgEADgDAEQgCAFAAAHIAAAeIgJAAIAAg5IAIAAIAAAJIAEgFIAHgEQAFgCADAAQAFAAAGADQAFACADAFQADAFAAAIIAAAkg");
	this.shape_57.setTransform(107.45,32.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgRAcQgFgCgCgDQgCgDAAgFQAAgHADgEQAFgEAHgBIAVgEIAAgDQgBgGgDgDQgDgEgGABQgHgBgDADQgEACgCAGIgHgFQACgFAGgFQAHgEAIAAQAFAAAGACQAFACADAFQADAEAAAHIAAAaQAAAFAEAAIAFAAIgBAGIgGABIgGgBIgEgDIgBgEIgDAEQgEADgDAAIgHACQgFAAgFgCgAgGAFIgIADQgDACAAAEQAAADADACQADADAFAAIAGgBIAEgDQADgCABgCQABgDABgEIAAgGg");
	this.shape_58.setTransform(101.05,32.95);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgUAdQgHgKAAgTQAAgSAHgKQAIgKAMAAQAOAAAHAKQAHAKAAASQAAATgHAKQgIAKgNAAQgLAAgJgKgAgJgbQgEAEgDAHQgCAGAAAKQAAAKACAHQADAHAEADQADAEAGAAQAGAAAEgEQAEgDADgHQACgHAAgKQAAgKgCgGQgDgHgEgEQgFgDgFAAQgFAAgEADg");
	this.shape_59.setTransform(90.525,32.05);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgNAiQgGgFgEgJQgEgLAAgJQAAgLAEgJQADgIAIgGQAHgEAHAAQAGAAAFABQADABAFAFQADAEACAFIgIAEQgCgGgEgDQgDgCgHAAQgEgBgEADQgDACgEAFIgEAKIgBALIAAADIABAAQAAgEAEgDQADgDAFgCIAHgBQAIAAAGADQAGADADAEQADAGAAAIQAAAHgDAFQgDAGgGADQgGADgIAAQgJAAgGgFgAgGAAIgGAGQgCAEAAAFQAAAEACAEQADADADACQAEACAEAAQAIAAAEgEQAEgFAAgGQAAgFgCgEQgCgEgDgCQgFgBgEABQgDgBgFABg");
	this.shape_60.setTransform(83.675,32.05);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgNAnQgGgEgDgHQgEgHAAgIQAAgKAEgFQADgHAHgEQAHgEAFAAQAHAAAFAFQAEACACAEIAAgjIAJAAIAABTIgIAAIAAgMIgDAFIgHAGQgEACgFgBQgHAAgGgDgAgMgCQgFAFAAAKQAAAJAFAGQAEAHAIgBQAFAAAFgCQAEgDACgFQACgHAAgFQAAgFgCgHQgCgDgEgCQgDgDgGAAQgIAAgFAGg");
	this.shape_61.setTransform(72.875,31.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgMAaQgGgDgEgHQgEgHABgJQgBgJAEgGQAEgIAFgCQAIgEAGAAQAIAAAFADQAHAFACAFQAEAGAAAIIgBACIAAADIgqAAQAAAFACAEQACAEAEADQAFADAEAAQAHAAADgDQAFgDACgDIAHAEIgFAHQgDADgGABQgEACgFAAQgJAAgFgEgAgIgSQgEACgCAGIgCAGIAhAAQAAgIgFgEQgEgFgHABQgGgBgDADg");
	this.shape_62.setTransform(66.4,32.95);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgVAqQgHgFAAgGQABgFADgEQACgCAEgBIgEgCQgCgDAAgFQgBgDAEgFIAFgBIgDgDQgGgFAAgJQAAgFADgFQADgDAFgEQAGgCAGAAQAGAAAGACIABABIACgGIAFgFIAIgBIABAAIACAIIgBAAQgHAAgCACQgDACAAAEIACACQADAFAAAFQAAAHgDADQgDAFgFACQgEACgIAAIgHgBIgFACQgCADAAACQAAADACACQADABAEAAIAQAAQAIAAAFAEQAEADABAHQgBAFgEAFQgEAFgFABQgGACgIAAQgNAAgHgEgAgQAYQgDACAAADQAAAEAFADQAFADAIAAQAGAAAFgCQAEgBACgCIACgFQAAgDgDgCQgCgCgHAAIgRAAQgDAAgCACgAgMgZQgDADAAAFQAAAFADAEQAFADAFAAQAGAAADgDQAFgDAAgGQAAgGgFgCQgEgEgFAAQgEAAgGAEg");
	this.shape_63.setTransform(60.45,33.675);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgRAcQgEgCgDgDQgDgEABgEQgBgHAFgEQAEgEAIgBIAUgEIAAgDQAAgGgDgDQgEgEgGABQgGgBgEADQgEACgBAGIgIgFQADgGAGgEQAGgEAIAAQAFAAAGACQAFACADAFQADAEAAAHIAAAaQAAAFAEAAIAFAAIgBAGIgGABIgGgBIgEgDIgBgDIgDADQgDADgEAAQgDACgEAAQgFAAgFgCgAgGAFIgJADQgCADAAADQAAADACACQAEADAFAAIAGgBIAEgDQADgBACgDIABgHIAAgGg");
	this.shape_64.setTransform(54.35,32.95);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgMAaQgGgDgEgHQgDgHgBgJQABgJADgGQAEgIAGgCQAGgEAHAAQAHAAAHADQAFAFAEAFQADAGAAAIIgBACIAAADIgqAAQAAAFABAEQACAEAFADQAFADAEAAQAHAAADgDQAFgDACgDIAHAEIgGAHQgCADgGABQgEACgGAAQgIAAgFgEgAgIgSQgEACgDAGIgBAGIAhAAQAAgIgFgEQgEgFgIABQgFgBgDADg");
	this.shape_65.setTransform(44.1,32.95);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgIAnQgDgEAAgIIAAhEIAKAAIAABEQgBAEACACQABACADgBIAIgBIgCAIIgDABIgFAAQgHAAgDgDg");
	this.shape_66.setTransform(39.7,31.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgaAqIAAhRIAIAAIAAAKIAEgFQADgDAEgBIAIgDQAHAAAGAFQAGACAEAIQADAGAAAKQAAAJgDAFQgEAIgGADQgFADgIAAQgGAAgFgDQgFgDgCgDIAAAhgAgIgdQgFADgCAEQgCAEAAAIQAAAHACADQACAFAFADQAEADAEgBQAJABAEgHQAFgEAAgKQAAgKgEgGQgFgGgJAAQgEAAgEADg");
	this.shape_67.setTransform(34.275,34.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgNAaQgHgDgDgHQgEgHAAgJQAAgJAEgGQADgHAHgDQAGgEAHAAQAIAAAGAEQAGADAEAHQAEAGAAAJQAAAJgEAHQgDAHgHADQgFAEgJAAQgIAAgFgEgAgJgSQgFACgCAGQgCADAAAHQAAAHACAFQACAEAFADQAFADAEAAQAGAAAEgDQAEgCACgFQADgGAAgGQAAgGgDgEQgCgGgEgCQgEgDgGAAQgFAAgEADg");
	this.shape_68.setTransform(27.275,32.95);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgMAaQgGgDgEgHQgDgIgBgIQABgHADgIQAEgHAGgDQAGgEAHAAQAHAAAHADQAGAFADAFQADAGAAAIIAAACIgBADIgqAAIACAJQADAFAEACQAEADAEAAQAHAAADgDQAFgCACgEIAIAEIgGAHIgIAEQgFACgGAAQgGAAgHgEgAgIgSQgEACgCAGIgCAGIAiAAQgBgIgEgEQgEgFgIABQgFgBgEADg");
	this.shape_69.setTransform(20.7,32.95);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgaAqIAAhRIAIAAIAAALIAEgGQADgDAEgBIAIgDQAHAAAGAFQAGADAEAHQADAHAAAJQAAAIgEAGQgDAHgGAEQgGADgHAAQgHAAgFgDQgEgDgCgEIAAAigAgIgdQgEADgDAEQgCAGAAAGQAAAGACAEQACAFAEADQAFADAEgBQAIABAFgHQAFgFAAgJQAAgKgFgGQgEgGgJAAQgFAAgDADg");
	this.shape_70.setTransform(14.225,34.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAGAmIABg/IgJAGIgKAEIgDgJIAGgBIAGgDIAGgFIAFgEIAHAAIAABLg");
	this.shape_71.setTransform(113.65,18.25);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgTAdQgJgKABgTQgBgRAJgLQAGgKANAAQAOAAAGAKQAJAKgBASQABAUgJAJQgHAKgNAAQgMAAgHgKgAgJgaQgEADgDAHQgCAGABAKQgBALACAGQADAHAEADQADAEAGgBQAGABAEgEQAEgDADgHQACgIAAgJQAAgIgCgIQgCgHgFgDQgEgEgGAAQgEAAgFAEg");
	this.shape_72.setTransform(108.55,18.25);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgXAnIAAgIIATgPQAGgGAFgFQAEgFADgEIABgKQAAgHgEgEQgFgEgGAAQgIAAgEAFQgFAFgBAJIgIgFQABgGAEgGQADgFAFgDQAHgCAGgBQAGABAEABQAFACADADQAEAEABAEQACAEAAAFQAAAGgDAIQgFAHgHAHQgGAGgOAKIAlAAIAAAJg");
	this.shape_73.setTransform(101.775,18.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgIAqIAAgwIgLAAIAAgIIALAAIAAgKIACgHQABgEACgCIAFgDIAIgBIAGAAIAEACIgCAIIgDgCIgEAAQgFAAgDACQgCADAAAFIAAAJIATAAIAAAIIgTAAIAAAwg");
	this.shape_74.setTransform(93.325,17.825);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgNAbQgGgEgEgHQgEgGAAgKQAAgIAEgHQAEgHAGgDQAGgEAHAAQAIAAAGAEQAGADAEAHQAEAHAAAIQAAAKgEAGQgEAHgGAEQgFADgJAAQgIAAgFgDgAgJgSQgEACgCAGQgDAFAAAFQAAAGADAGQACAFAEACQAFADAEAAQAGAAAEgDQAEgCACgFQADgGAAgGQAAgFgDgFQgCgGgEgCQgEgDgGAAQgFAAgEADg");
	this.shape_75.setTransform(87.825,19.15);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgWAoQgDAAgDgDIACgIQADADADAAIAEABQAEAAACgCQADgBACgHIADgGIgYg5IAKAAIARAuIASguIAKAAIgbBCQgCAHgCACQgCADgEABQgDACgEAAg");
	this.shape_76.setTransform(78.15,20.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgNAnQgGgDgEgIQgDgGAAgKQAAgIAEgGQAEgIAGgDQAHgDAFAAQAHgBAFAEQAEAEACADIAAgkIAJAAIAABUIgIAAIAAgLIgDAFQgEADgEABQgEADgEAAQgIAAgFgEgAgMgCQgFAFAAAJQAAAKAFAGQAEAHAIAAQAGAAADgEQAEgBADgGQACgGAAgGQAAgHgCgFQgDgDgDgDQgEgCgGAAQgIAAgEAGg");
	this.shape_77.setTransform(71.675,17.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgNAbQgFgCgDgFQgDgEAAgIIAAgkIAJAAIAAAiQAAAJAEADQADADAIAAIAFgBIAFgDIAFgGQABgEAAgFIAAgeIAJAAIAAA4IgIAAIAAgJQgEAGgFACQgFACgFAAQgHAAgEgCg");
	this.shape_78.setTransform(64.9,19.225);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAAAkQgFgBgCgEQgCgCAAgHIAAgiIgLAAIAAgIIALAAIAAgOIAJgDIAAARIAUAAIAAAIIgUAAIAAAhQAAAEACACQADACADAAIAGgBIAEgEIADAIIgGAEQgDACgFAAIgHgCg");
	this.shape_79.setTransform(59.275,18.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgNAbQgHgEgEgGIAIgHQADAGAFADQAEADAGAAQAGAAAEgDQADgBAAgFIgBgEQgCgCgEgBIgNgDQgJgBgDgDQgEgFAAgGQAAgEADgEQACgDAGgDQAGgDAFAAQAHAAAHAEQAGADADAGIgIAFQgCgFgEgCQgEgCgFgBIgGACIgFADIgBAEQAAADABACIAHADIANADQAJABACADQAEAEAAAFQAAAGgDADQgDAFgFACQgFACgHAAQgIAAgHgDg");
	this.shape_80.setTransform(53.925,19.15);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAAAkQgEgBgCgEQgDgDAAgGIAAgiIgLAAIAAgIIALAAIAAgOIAJgDIAAARIAUAAIAAAIIgUAAIAAAhQAAAEACACIAGACIAGgBIAEgEIADAIIgGAEQgDACgFAAIgHgCg");
	this.shape_81.setTransform(45.125,18.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgQAeIAAg5IAIAAIABAJQACgFAFgDQAEgDAGABIAEAAIADABIgCAIIgDgBIgEAAQgEAAgDACIgFAHQgDAFAAAFIAAAfg");
	this.shape_82.setTransform(41.275,19.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgNAbQgHgFgDgGQgEgGAAgKQAAgIAEgHQAEgHAGgDQAGgEAHAAQAIAAAHAEQAGAEADAGQAEAHAAAIQAAAKgEAGQgDAGgGAFQgHADgIAAQgIAAgFgDgAgJgSQgEACgCAGQgCAEAAAGQAAAHACAFQACAFAEACQAEADAFAAQAFAAAFgDQAFgDACgEQACgFAAgHQAAgGgCgEQgCgGgFgCQgEgDgGAAQgFAAgEADg");
	this.shape_83.setTransform(35.275,19.15);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAQAqIAAgiQAAgIgEgEQgEgEgGAAIgHACQgEACgDAEQgDAEAAAIIAAAeIgJAAIAAhTIAJAAIAAAjQADgFAFgCQAGgDAEAAQAFAAAGADQAFACADAFQADAEAAAHIAAAlg");
	this.shape_84.setTransform(28.525,17.85);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgOAbQgGgFgDgGQgEgGAAgKQAAgIAEgHQADgGAGgEQAHgEAHAAQAIAAAGAEQAGADAEAHQAEAIAAAHQAAAIgEAIQgDAGgHAFQgFADgJAAQgHAAgHgDgAgJgSQgFACgCAGQgCAEAAAGQAAAHACAFQACAEAFADQAFADAEAAQAGAAAEgDQAEgCACgFQACgFAAgHQAAgGgCgEQgCgGgEgCQgEgDgGAAQgFAAgEADg");
	this.shape_85.setTransform(21.725,19.15);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgLAbQgHgFgEgGQgDgGAAgKQAAgIADgHQAFgHAGgDQAGgEAHAAQAFAAAFACQAGACACADQAEAEACAEIgJAFQgDgHgDgCQgDgDgHAAQgEAAgFADQgDACgDAGQgCAFAAAFQAAAGACAGQADAFADACQAFADAEAAQAFAAADgCIAGgDIADgHIAIADQgBAEgEAFQgEAEgFACQgEACgGAAQgIAAgFgDg");
	this.shape_86.setTransform(15.3,19.15);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgMAaQgGgDgEgHQgEgHAAgJQAAgIAEgHQAEgHAGgDQAGgEAHAAQAHAAAHAEQAFAEAEAFQACAGAAAHIAAADIAAADIgrAAQABAFACAEQABAEAFAEQAFACAEAAQAGAAAFgCQAEgEACgDIAHAEIgGAHQgCADgFACQgFABgGAAQgHAAgGgEgAgIgSQgEACgCAFIgCAHIAhAAQAAgIgEgEQgFgEgIgBQgFABgDACg");
	this.shape_87.setTransform(113.25,5.35);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgDAdIgZg5IALAAIARAvIATgvIAKAAIgZA5g");
	this.shape_88.setTransform(107.15,5.375);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgEApIAAg4IAIAAIAAA4gAgEgcQgCgCAAgDQAAgEACgBQACgCACAAQADAAACACQACABAAAEQAAADgCACIgFACIgEgCg");
	this.shape_89.setTransform(102.85,4.125);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgBAkQgEgCgCgDQgCgCAAgHIAAgiIgLAAIAAgIIALAAIAAgOIAJgCIAAAQIAUAAIAAAIIgUAAIAAAgQAAAEACADQADACADAAIAGgBIAEgDIADAIIgGADQgDABgFAAQgFAAgDgBg");
	this.shape_90.setTransform(99.225,4.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgMAaQgGgEgEgGQgDgIAAgIQAAgHADgIQAEgHAGgDQAHgEAHAAQAEAAAGACQAFADADADQADADADAFIgJADQgCgFgEgDQgEgCgFgBQgGABgDACQgEACgDAFQgCAFAAAGQAAAIACAEQADAFAEADQAEACAFAAQAEAAADgBIAGgFQACgCABgEIAIADQgCAGgDADQgDAEgFACQgFACgGAAQgHAAgHgEg");
	this.shape_91.setTransform(93.775,5.35);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgMAaQgGgEgEgGQgDgIgBgIQABgHADgIQAEgHAGgDQAHgEAGAAQAHAAAHAEQAGAEADAFQACAGAAAHIAAADIAAADIgqAAIACAJQADAFADADQAEACAFAAQAHAAADgCQAFgCACgFIAIAEIgGAHIgIAFQgEABgHAAQgGAAgHgEgAgIgSQgEADgCAEIgCAHIAhAAQAAgIgEgEQgFgEgHgBQgFABgEACg");
	this.shape_92.setTransform(87.4,5.35);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgaAqIAAhRIAIAAIABAKIADgFIAHgEIAIgCQAHAAAGADQAHAEADAGQADAHAAAKQAAAJgDAGQgEAGgGAEQgFAEgIgBQgGABgFgEQgEgDgDgEIAAAigAgIgdIgHAHQgCAFAAAHQAAAHACADQACAEAFAEQAEACAEAAQAJAAAFgFQAEgGAAgJQAAgLgEgFQgFgGgIAAQgFAAgEADg");
	this.shape_93.setTransform(80.875,6.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgNAaQgGgDgFgHIAIgFQADAFAFADQAFADAFAAQAGAAAEgCQAEgDAAgEQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBgBAAQgBgCgEgBIgNgDQgIgBgEgEQgDgDAAgHQAAgEACgEQADgEAFgDQAFgCAFAAQAIAAAHAEQAGAEADAFIgIAFQgDgGgDgCQgFgCgFAAIgGABQgDABgBADIgBAEQAAADABACIAGADIAOADQAIABADADQAEAEAAAFQAAAGgEAEQgCAEgGACQgEACgIAAQgHAAgHgEg");
	this.shape_94.setTransform(74.25,5.35);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgNAaQgHgEgDgGQgEgIAAgIQAAgHAEgIQAEgHAGgDQAGgEAHAAQAIAAAHAEQAGADADAHQAEAHAAAIQAAAJgEAHQgDAGgGAEQgHAEgIAAQgIAAgFgEgAgJgSQgEACgCAFQgCAFAAAGQAAAIACAEQACAFAEADQAEACAFAAQAFAAAFgCQAFgEACgEQACgEAAgIQAAgGgCgFQgCgEgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_95.setTransform(68.025,5.35);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgQAdIAAg4IAIAAIABAKQADgGAEgCQAEgDAHAAIADAAIADABIgCAJIgCgBIgFAAQgDAAgEACIgFAGQgCADAAAIIAAAdg");
	this.shape_96.setTransform(63.025,5.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgaAqIAAhRIAIAAIAAAKIAEgFQADgDAEgBIAIgCQAHAAAGADQAGADAEAHQADAIAAAJQAAAIgDAHQgEAGgGAEQgGAEgHgBQgHABgFgEQgEgDgCgEIAAAigAgIgdQgEADgDAEQgCAGAAAGQAAAGACAEQACAFAEADQAFACAEAAQAJAAAEgFQAFgGAAgJQAAgLgFgFQgEgGgJAAQgFAAgDADg");
	this.shape_97.setTransform(57.125,6.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgRAdQgFgDgCgDQgCgEAAgFQAAgFADgFQAFgEAIgBIAUgEIAAgCQgBgHgDgDQgDgDgGgBQgHABgDACQgEACgBAGIgIgEQACgHAHgEQAGgEAIAAQAFAAAGACQAFADADAEQADAEAAAHIAAAaQAAAFAEAAIAFAAIgBAHIgGABIgGgBIgEgFIgBgCIgDACQgDAEgEABQgDABgEAAQgFAAgFgBgAgGAFIgJADQgCACAAAEQAAADACADQAEACAFAAIAGgBIAEgCQADgCACgDIABgHIAAgFg");
	this.shape_98.setTransform(47.05,5.35);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAkAdIAAgjQAAgHgFgEQgEgDgGAAQgEAAgEACQgEACgCAFQgDAEAAAGIAAAeIgIAAIAAgjQAAgHgEgEQgDgDgGAAQgEAAgEACQgDABgEAFQgCAFAAAHIAAAdIgKAAIAAg4IAJAAIABAJQADgFAFgDQAFgCAEAAQAHAAAFADQAFACACAGIAGgHIAHgDIAHgBQAFAAAGACQAEACAEAFQADAFABAHIAAAkg");
	this.shape_99.setTransform(34.65,5.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgNAaQgGgDgEgHQgEgHAAgJQAAgIAEgHQAEgHAGgDQAGgEAHAAQAIAAAGAEQAGADAEAHQAEAHAAAIQAAAJgEAHQgEAHgGADQgFAEgJAAQgIAAgFgEgAgJgSQgEADgCAEQgDAGAAAFQAAAGADAGQACAEAEAEQAFACAEAAQAGAAAEgCQAEgDACgFQADgGAAgGQAAgFgDgGQgCgFgEgCQgEgDgGAAQgFAAgEADg");
	this.shape_100.setTransform(25.925,5.35);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgQAdIAAg4IAIAAIABAKQADgHAEgBQAEgDAGAAIAEAAIADABIgCAJIgDgBIgEAAQgEAAgDACIgFAGQgDAEAAAHIAAAdg");
	this.shape_101.setTransform(20.925,5.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgaAmIAAhLIA1AAIAAAIIgsAAIAAAZIAiAAIAAAIIgiAAIAAAig");
	this.shape_102.setTransform(15.75,4.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,128.1,79.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGQgCgDAAgDQAAgDACgCQADgCACAAQADAAACACQACADABACQgBADgCADQgBACgEAAQgCAAgDgCg");
	this.shape.setTransform(119.9,129.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAjQgHgFgDgIIAJgFQACAHAEADQAFAEAHgBQAFAAAEgCQADgCADgFQADgGAAgFIABgMIAAgBIAAAAQgCAEgDADQgDAEgFABIgHABQgIAAgGgDQgFgDgEgEQgDgFAAgIQAAgHADgGQADgGAGgDQAGgDAIAAQAJAAAGAFQAHAEADAKQAEAKAAAJQAAALgEAKQgDAJgHAFQgGAEgJAAQgJAAgHgEgAgNgZQgEAFAAAHQAAAIAEADQAEADAIAAQAFAAADgBQADgBADgFQACgCAAgGQAAgFgCgDIgGgFQgFgCgDAAQgIgBgEAFg");
	this.shape_1.setTransform(115.225,125.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGAmIAAg3IAAgEIAAgFIgIAHIgKAEIgCgJIAEgBIAHgDIAGgFIAEgEIAIAAIAABLg");
	this.shape_2.setTransform(109.15,125.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAdQgHgJAAgUQAAgSAHgKQAIgKAMAAQAOAAAHAKQAHAKAAASQAAAUgHAJQgIAKgNAAQgLAAgJgKgAgJgaQgEADgDAHQgCAJAAAHQAAAIACAJQADAHAEADQAFAEAEAAQAGAAAEgEQAEgDADgHQACgGAAgLQAAgKgCgGQgDgHgEgDQgEgEgGAAQgEAAgFAEg");
	this.shape_3.setTransform(104.025,125.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAnIAAgIIATgPQAGgGAFgFQAFgFABgEQACgEAAgGQAAgGgEgFQgFgEgGAAQgIAAgEAFQgFAGgBAHIgIgEQABgGADgGQAFgGAEgCQAHgCAGgBQAGABAEABIAIAFQAEAEABAEIACAJQAAAGgDAIQgEAGgIAIQgJAHgLAJIAlAAIAAAJg");
	this.shape_4.setTransform(97.275,125.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIALIAGgDIADgEIABgEIAAAAIgBAAIgBAAIgDAAIgCgCQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIACgDIADgBQADAAACABIADAEIABAGQAAADgCADIgEAHQgDAEgDABg");
	this.shape_5.setTransform(88.975,129.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAGAmIAAg7IAAgFIgIAHIgLAEIgCgJIAGgBIAGgDIAFgFIAGgEIAHAAIAABLg");
	this.shape_6.setTransform(84.95,125.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAoQgEgBgCgCIADgIQACADADAAIAFABQADAAACgCQADgCACgFIADgHIgYg5IALAAIAQAvIASgvIAKAAIgbBCIgEAJIgGAEQgDACgEAAIgHgBg");
	this.shape_7.setTransform(77.175,128.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAdIAAg4IAIAAIABAJQADgFAEgDQADgCAIAAIADAAIADABIgCAIIgCgBIgFAAQgEAAgDACIgFAGQgCAEAAAHIAAAeg");
	this.shape_8.setTransform(72.525,126.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAcQgFgCgCgDQgDgDAAgGQAAgGAFgEQAEgEAIgBIAUgEIAAgCQAAgHgEgDQgDgEgGAAQgGAAgEADQgDACgDAGIgHgFQACgFAGgFQAGgEAKAAQAGAAAEACQAGADACAEQADAEAAAHIAAAbQAAAEAEAAIAFgBIgBAHIgGABIgGgBQgDgBgBgDIgBgCIgDACQgEAEgDAAIgIACQgFAAgEgCgAgGAFQgFAAgDADQgDACAAAEQAAAEADACQAEACAEAAIAGgBIAFgDQACgBABgDQACgDAAgEIAAgGg");
	this.shape_9.setTransform(66.975,126.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNAbQgFgDgDgEQgDgEAAgIIAAgkIAJAAIAAAiQAAAJAEADQAEADAGAAIAGgBIAFgDQADgCACgEQABgEAAgFIAAgeIAJAAIAAA4IgIAAIAAgJQgEAGgFACQgEACgGAAQgHAAgEgCg");
	this.shape_10.setTransform(60.15,126.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQAdIAAggQAAgKgEgEQgEgDgGAAQgEAAgDACQgEABgDAFQgDAEAAAIIAAAdIgJAAIAAg4IAIAAIABAJIADgFIAHgEIAIgBQAHAAAEACQAFACADAFQADAFAAAHIAAAkg");
	this.shape_11.setTransform(53.325,126.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAcQgEgCgDgDQgDgEABgFQAAgGAEgEQAEgEAIgBIAUgFIAAgBQAAgHgDgDQgEgEgFAAQgHAAgEADQgEACgBAGIgIgFQADgGAGgEQAFgEAKAAQAGAAAEACQAFACADAFQADAEAAAHIAAAbQAAAEAFAAIADgBIAAAHIgGABIgGgBIgEgEIgBgDIgDADQgEAEgDAAQgDACgEAAQgFAAgFgCgAgGAFIgJADQgCACAAAEQAAAEADACQADACAFAAIAGgBIAEgDQADgBACgDQABgDAAgEIAAgGg");
	this.shape_12.setTransform(46.9,126.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAjQgGgDgCgGQgCgHABgGIAJgCQgBAKADAEQADAFAIAAQAJAAAEgGQADgEAAgLIAAgvIAJAAIAAAyQAAAMgGAHQgHAIgLAAQgJAAgFgEg");
	this.shape_13.setTransform(40.2679,126);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNAnQgGgDgEgIQgDgGAAgKQAAgJADgFQAEgHAGgEQAHgDAGAAQAHAAAFAEQAEACACAEIAAgkIAJAAIAABUIgIAAIAAgLIgDAEQgEAEgEACQgEACgEAAQgIgBgFgDgAgMgCQgFAFAAAJQAAALAFAFQAEAHAIAAQAGAAADgDQAEgDADgFQACgFAAgHQAAgIgCgEQgDgEgDgCQgEgCgGAAQgIAAgEAGg");
	this.shape_14.setTransform(30.375,125.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAQAdIAAggQAAgKgEgEQgEgDgGAAQgEAAgDACQgEABgDAFQgDAFAAAHIAAAdIgJAAIAAg4IAIAAIABAJIADgFIAHgEIAIgBQAHAAAEACQAFACADAFQADAFAAAHIAAAkg");
	this.shape_15.setTransform(23.625,126.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAcQgEgCgDgDQgDgEABgFQAAgGAEgEQAFgEAHgBIAUgFIAAgBQAAgHgDgDQgEgEgFAAQgGAAgFADQgEACgBAGIgIgFQACgFAHgFQAFgEAKAAQAGAAAEACQAFACADAFQADAEAAAHIAAAbQAAAEAFAAIAEgBIgBAHIgGABIgFgBQgEgBgBgDIgBgDIgDADQgDAEgEAAIgIACQgEAAgFgCgAgGAFQgFAAgDADQgDACAAAEQAAAEADACQADACAFAAIAGgBIAEgDQADgBACgDQABgDAAgEIAAgGg");
	this.shape_16.setTransform(17.2,126.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIALIAGgDIADgEIACgEIgBAAIgBAAIgBAAIgDAAIgCgCIgBgEIABgEIACgDIADgBQADAAACABIADAEIABAGQAAADgCADQgCAFgCACQgDAEgDABg");
	this.shape_17.setTransform(131.975,116.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIAmQAAgNAEgMQACgKAGgNQAHgLAHgIIgtAAIAAgIIA3AAIAAAIQgJALgGALQgHAJgCALQgDAKAAAPg");
	this.shape_18.setTransform(128.9,112.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAGAmIAAg/IgIAGIgKAEIgCgIIAEgCIAHgDIAGgEIAEgFIAIAAIAABLg");
	this.shape_19.setTransform(123.15,112.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTAdQgIgJAAgUQAAgSAIgKQAHgKAMAAQAOAAAHAKQAHAKAAASQAAAUgHAJQgIAKgNAAQgMAAgHgKgAgJgaQgFAEgBAGQgDAHAAAJQAAAJADAIQABAGAFAFQAFADAEAAQAGAAAEgDQAEgEADgHQACgGAAgLQAAgKgCgGQgDgHgEgDQgEgEgGAAQgEAAgFAEg");
	this.shape_20.setTransform(118.025,112.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXAmIAAgHIATgPQAGgFAFgGQAFgGABgDQACgEAAgGQAAgGgEgFQgFgEgGAAQgIAAgEAFQgFAFgBAJIgIgFQABgHAEgFQADgFAFgDQAHgDAGABQAGgBAEACIAIAFQAEAEABADIACAKQAAAGgDAIQgFAHgHAHQgJAHgLAJIAlAAIAAAIg");
	this.shape_21.setTransform(111.275,112.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIALIAGgDIADgEIACgEIgBAAIgBAAIgBAAIgDAAIgCgCIgBgEIABgEIACgDIADgBQADAAACABIADAEIABAGQAAADgCADQgCAFgCACQgDAEgDABg");
	this.shape_22.setTransform(102.975,116.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAGAmIAAg/IgIAGIgKAEIgCgIIAEgCIAHgDIAGgEIAEgFIAIAAIAABLg");
	this.shape_23.setTransform(98.95,112.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgWAoQgDgBgDgCIACgIQADADACAAIAGABQADAAACgCQADgCACgFIADgIIgYg4IALAAIARAuIARguIAKAAIgbBCQgCAGgCADQgCADgEACQgDABgEAAIgHgBg");
	this.shape_24.setTransform(91.2,114.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgQAdIAAg4IAIAAIABAKQACgGAFgDQAEgCAGAAIAEAAIADABIgCAJIgDgBIgEAAQgEAAgDACIgFAGQgDAEAAAHIAAAdg");
	this.shape_25.setTransform(86.575,113);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgRAdQgGgDgBgDQgCgDgBgGQABgGADgEQAFgEAIgBIATgEIAAgCQAAgHgDgDQgDgDgFgBQgIABgCACQgEACgDAGIgIgEQAEgHAFgEQAHgEAJAAQAEAAAGADQAFABADAFQADAEAAAHIAAAbQAAAEAEAAIAEgBIAAAIIgGABIgGgBIgEgFIgBgDIgDADQgEAEgDABQgDABgFAAQgEAAgFgBgAgGAFIgJADQgCACAAAEQAAAEACACQADACAFAAIAHgBIAFgCQACgCABgDIABgHIAAgFg");
	this.shape_26.setTransform(81,113.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgNAbQgFgCgDgEQgDgFAAgIIAAgkIAJAAIAAAiQAAAJAEADQADADAIAAIAFgBIAGgDQADgDAAgDQACgEAAgFIAAgeIAJAAIAAA4IgIAAIgBgJQgDAGgFACQgEACgHAAQgGAAgEgCg");
	this.shape_27.setTransform(74.175,113.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAQAdIAAggQAAgKgEgEQgEgDgGAAQgDAAgEACQgFACgCAEQgDAFAAAHIAAAdIgJAAIAAg4IAIAAIAAAJIAEgFIAIgEIAHgBQAFgBAGADQAFACADAGQADAEAAAHIAAAkg");
	this.shape_28.setTransform(67.35,113);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRAdQgGgDgBgDQgCgDgBgGQAAgGAFgEQAEgEAHgBIAUgEIAAgCQABgHgEgDQgDgDgFgBQgHABgEACQgDACgDAGIgIgEQACgGAHgFQAHgEAJAAQAEAAAGADQAFADADADQADAEAAAHIAAAbQAAAEAEAAIAEgBIAAAIIgGABIgGgBIgEgFIgBgDIgDADQgEAEgDABIgIABQgFAAgEgBgAgGAFIgIADQgDACAAAEQAAAEADACQACACAFAAIAHgBIAFgCQADgCAAgDQABgDAAgEIAAgFg");
	this.shape_29.setTransform(60.95,113.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgPAjQgFgDgCgGQgCgGABgHIAJgDQgCALADAEQADAFAJAAQAJAAADgFQAEgGAAgKIAAguIAJAAIAAAwQAAAMgHAJQgHAGgLAAQgIAAgGgDg");
	this.shape_30.setTransform(54.3179,112.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAQAdIAAggQAAgKgEgEQgEgDgGAAQgEAAgEACQgEACgCAEQgDAEAAAIIAAAdIgJAAIAAg4IAIAAIAAAJIAEgFQADgCAEgCQAEgCAEABQAFgBAGADQAFACADAGQADAEAAAHIAAAkg");
	this.shape_31.setTransform(44.675,113);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgMAbQgHgFgDgGQgDgHAAgJQAAgIADgHQADgHAHgDQAGgEAHAAQAHAAAHAEQAGAEACAFQAEAGAAAHIAAADIgBADIgqAAIACAJQACAFAFADQAFACAEAAQAFAAAFgCQAEgDACgEIAIAFIgGAGIgIAFQgFABgFAAQgHAAgHgDgAgIgSQgDACgDAFIgCAHIAiAAQgBgIgEgEQgFgEgHgBQgFABgEACg");
	this.shape_32.setTransform(37.95,113.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgMAbQgHgFgDgGQgEgHABgJQgBgJAEgGQAEgIAGgCQAHgEAGAAQAHAAAHAEQAGAEACAFQADAGABAHIAAADIgBADIgqAAIACAJQADAFAEADQADACAGAAQAGAAAEgCQAEgCACgFIAHAFQgCADgDADQgDADgFACQgFABgFAAQgIAAgGgDgAgIgSQgDACgDAFIgCAHIAhAAQAAgIgFgEQgEgEgHgBQgFABgEACg");
	this.shape_33.setTransform(31.55,113.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAQAdIgQgtIgPAtIgJAAIgUg5IAKAAIAPAuIAQguIAIAAIAPAuIAPguIAKAAIgUA5g");
	this.shape_34.setTransform(23.85,113.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAAkQgEgCgCgDQgDgDAAgGIAAgiIgLAAIAAgIIALAAIAAgOIAJgDIAAARIAUAAIAAAIIgUAAIAAAhQAAAEACACQADACADAAIAGgBIAEgDIADAIIgGADQgDABgFAAIgHgBg");
	this.shape_35.setTransform(16.925,112.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgMAbQgGgFgEgGQgDgHAAgJQAAgIADgHQAEgHAGgDQAGgEAHAAQAHAAAHAEQAGAEACAFQAEAGAAAHIAAADIgBADIgqAAIACAJQADAFAEADQAFACADAAQAGAAAFgCQAEgDACgEIAIAFIgGAGIgIAFQgFABgFAAQgIAAgGgDgAgIgSQgDACgDAFIgCAHIAiAAQgBgIgEgEQgFgEgHgBQgFABgEACg");
	this.shape_36.setTransform(11.5,113.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgHApIgHgFIgEgFIAAAKIgIAAIAAhTIAJAAIAAAkQACgEAEgDQAHgDAFAAQAGAAAHADQAGADAEAHQADAIAAAHQAAAJgEAIQgDAGgGAEQgGADgHAAIgIgBgAgJgFQgEADgCAEQgCAEAAAHQAAAFACAGQADAFADADQAFADAEAAQAIgBAFgFQAFgHAAgKQAAgJgFgFQgEgGgJAAQgFAAgEADg");
	this.shape_37.setTransform(5.025,111.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgNAaQgHgDgEgHIAIgGQACAGAGADQAEADAGAAQAGAAAEgDQADgCAAgDIgBgFQgCgCgEgBIgNgCQgIgCgEgEQgDgDAAgGQAAgGACgDQAEgFAEgCQAGgCAFAAQAHAAAHADQAGAEADAGIgIAFQgCgGgEgCQgEgBgFAAIgGAAIgFADIgBAFQAAADABACIAHADIANADQAIABADADQAEADAAAGQAAAGgDAEQgDAEgFACQgFACgHAAQgIAAgHgEg");
	this.shape_38.setTransform(125.325,99.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNAbQgFgCgDgEQgDgFAAgIIAAgkIAJAAIAAAiQAAAJAEADQADADAIAAIAFgBIAFgDIAFgGQABgEAAgFIAAgeIAJAAIAAA4IgIAAIAAgJQgDAGgFACQgFACgGAAQgHAAgEgCg");
	this.shape_39.setTransform(119,99.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAAAkQgEgCgCgDQgDgEAAgFIAAgiIgLAAIAAgIIALAAIAAgOIAJgCIAAAQIAUAAIAAAIIgUAAIAAAgQAAAFACACQADACADAAIAGgBIAEgDIADAIIgGADQgDACgFgBIgHgBg");
	this.shape_40.setTransform(113.375,98.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgEApIAAg4IAJAAIAAA4gAgEgcQgCgCAAgDQAAgEACgBQACgCACAAQADAAACACQACABAAAEQAAADgCACQgCACgDAAIgEgCg");
	this.shape_41.setTransform(109.575,98.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgIAnQgDgFAAgHIAAhEIAJAAIAABEQAAAEACACQAAACAEgBIAIgBIgCAIIgEABIgEAAQgGAAgEgDg");
	this.shape_42.setTransform(106.975,98);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgHAnQgEgEAAgIIAAhEIAJAAIAABEQAAAEACACQABACADgBIAIgBIgCAIIgEABIgEAAQgGAAgDgDg");
	this.shape_43.setTransform(103.675,98);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgMAaQgGgEgEgGQgDgIAAgIQAAgHADgIQAEgHAGgDQAHgEAGAAQAHAAAHADQAGAEACAGQADAGAAAIIAAACIAAADIgqAAIACAJQADAFAEACQADADAGAAQAFAAAFgDQAEgCACgEIAHAEIgFAHIgIAEQgFACgFAAQgIAAgGgEgAgIgSQgDADgDAEIgCAHIAhAAQAAgIgEgEQgEgEgIAAQgFgBgEADg");
	this.shape_44.setTransform(98.35,99.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAjAeIAAgkQAAgIgEgCQgDgEgGAAQgFAAgEACQgEADgCADQgCAFAAAGIAAAfIgJAAIAAgkQAAgIgEgCQgDgEgGAAQgEAAgEACQgDABgEAFQgCAFAAAHIAAAeIgJAAIAAg5IAIAAIAAAJQADgFAFgDQAGgDAFAAQAFABAGADQAFADACAFIAGgHIAHgDIAHgCQAGAAAFADQAEACAEAFQADAFAAAIIAAAkg");
	this.shape_45.setTransform(89.825,99.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgNAaQgHgDgDgHIAHgGQACAGAGADQAFADAGAAQAFAAAEgDQAEgCgBgDIgBgFQgDgDgDAAIgNgCQgIgCgEgEQgDgDgBgGQABgFACgEQAEgFAEgCQAFgCAGAAQAHAAAHADQAGAEACAGIgHAFQgCgGgEgCQgEgBgFAAIgGAAIgFADIgCAFQABADABACIAGADIAOADQAIABADADQADAEAAAFQAAAGgDAEQgDAEgFACQgEACgHAAQgIAAgHgEg");
	this.shape_46.setTransform(77.75,99.25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgMAaQgGgEgEgGQgDgHAAgJQAAgIADgHQAEgGAGgEQAGgEAHAAQAHAAAHADQAFAEADAGQAEAGAAAIIAAACIgBADIgqAAIACAJQADAFAEACQAFADADAAQAGAAAFgDQAEgCACgEIAIAEIgGAHIgIAEQgFACgFAAQgIAAgGgEgAgHgSQgEACgDAFIgCAHIAiAAQgBgIgEgEQgFgEgHAAQgFgBgDADg");
	this.shape_47.setTransform(71.65,99.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAAAkQgFgCgCgDQgCgEAAgFIAAgiIgMAAIAAgIIAMAAIAAgOIAJgCIAAAQIAUAAIAAAIIgUAAIAAAgQAAAFACACQADACADAAIAFgBQAEgCABgBIADAIIgGADQgDACgFgBIgHgBg");
	this.shape_48.setTransform(66.25,98.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgMAaQgGgDgEgHQgDgHAAgJQAAgJADgGQAEgIAGgCQAHgEAGAAQAHAAAHADQAFAEADAGQADAGAAAIIAAAFIgqAAQAAAFACAEQACAEAEADQAFADAEAAQAHAAAEgDQADgBADgFIAHAEIgFAHIgIAEQgFACgFAAQgIAAgGgEgAgIgSQgEACgCAFIgCAHIAhAAQAAgIgEgEQgFgEgHAAQgGgBgDADg");
	this.shape_49.setTransform(60.825,99.25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgHApIgHgFIgDgEIgBAKIgIAAIAAhTIAJAAIAAAjQACgEAFgCQAFgEAGgBQAHABAGAEQAGACAEAIQADAFAAAKQAAAJgDAHQgEAGgGAEQgFADgIAAQgEABgEgCgAgIgFQgFACgCAFQgCAFAAAGQAAAGACAFQADAFAEADQAEADAEgBQAJAAAEgFQAFgHAAgJQAAgLgFgEQgEgGgJAAQgFAAgDADg");
	this.shape_50.setTransform(54.325,98);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgRAcQgEgBgDgEQgCgEAAgEQgBgHAFgEQAEgEAIgBIAUgEIAAgCQAAgHgEgDQgDgDgGAAQgHgBgDADQgEACgBAGIgIgEQACgHAHgEQAGgEAIAAQAFAAAGACQAFACADAFQADAEAAAHIAAAaQAAAFAEAAIAFAAIgBAGIgGACIgGgCIgEgEIgBgCIgDACQgDAEgEAAQgDACgEAAQgFAAgFgCgAgGAFIgIADQgDADAAADQAAAEADACQACACAGAAIAGgBIAEgDQADgBACgDIABgHIAAgGg");
	this.shape_51.setTransform(47.7,99.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgEApIAAg4IAJAAIAAA4gAgEgcQgCgCAAgDQAAgEACgBQACgCACAAQADAAACACQACABAAAEQAAADgCACIgFACQgCAAgCgCg");
	this.shape_52.setTransform(42.925,98.025);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgNAnQgGgEgEgGQgDgHAAgJQAAgJAEgGQAEgIAGgCQAGgEAGgBQAHABAFAEQAEACACAEIAAgjIAJAAIAABTIgIAAIAAgLIgDAEQgEAFgEABQgEABgEAAQgIAAgFgDgAgMgCQgFAFAAAKQAAAJAFAHQAEAFAIAAQAGAAADgCQAEgCADgGQACgGAAgGQAAgGgCgGQgDgDgDgCQgEgDgGAAQgHAAgFAGg");
	this.shape_53.setTransform(37.825,98);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAQAqIAAghQAAgJgEgEQgEgDgGAAQgDAAgFABQgEACgCAEQgDAFAAAGIAAAfIgJAAIAAhTIAJAAIAAAjQADgGAFgCQAFgCAEAAQAGAAAGACQAFACADAGQADAEAAAHIAAAlg");
	this.shape_54.setTransform(27.4,97.95);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAAAkQgFgCgCgDQgCgEAAgFIAAgiIgMAAIAAgIIAMAAIAAgOIAJgCIAAAQIAUAAIAAAIIgUAAIAAAgQAAAFACACQADACADAAIAFgBQAEgCABgBIADAIIgGADQgDACgFgBIgHgBg");
	this.shape_55.setTransform(21.7,98.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgEApIAAg4IAIAAIAAA4gAgEgcQgCgCAAgDQAAgEACgBQACgCACAAQADAAACACQACACAAADIgCAFIgFACQgCAAgCgCg");
	this.shape_56.setTransform(17.9,98.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAQAdIgQgtIgPAtIgJAAIgUg5IAKAAIAPAuIAPguIAIAAIAQAuIAPguIAKAAIgUA5g");
	this.shape_57.setTransform(11.8,99.275);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgNAbQgHgEgDgGIAHgHQACAGAGADQAFADAGAAQAFAAAEgDQAEgCgBgEIgBgEQgDgDgDAAIgNgDQgIgCgEgCQgDgEgBgGQABgFACgEQAEgEAEgCQAFgDAGAAQAHAAAHADQAGAEACAGIgHAFQgCgFgEgCQgEgCgFAAIgGABIgFACIgCAFQABADABACIAGADIAOADQAIABAEADQACAEAAAFQAAAGgCADQgEAFgFACQgEACgHAAQgIAAgHgDg");
	this.shape_58.setTransform(122.2,85.45);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgBAkQgEgBgCgEQgCgDAAgGIAAgiIgLAAIAAgIIALAAIAAgOIAJgDIAAARIAUAAIAAAIIgUAAIAAAhQAAADACADQADACADAAIAGgBIAEgEIADAIIgGAEQgDABgFABQgFgBgDgBg");
	this.shape_59.setTransform(117.125,84.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAQAeIAAghQAAgJgEgFQgEgDgGAAQgDAAgEACQgEACgDAEQgDAFAAAHIAAAeIgJAAIAAg5IAIAAIAAAJIAEgFIAHgEIAIgCQAFABAGACQAFACADAFQADAFAAAIIAAAkg");
	this.shape_60.setTransform(111.375,85.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgMAbQgHgEgDgHQgDgIgBgIQABgHADgIQAEgHAGgDQAHgEAGAAQAHAAAHADQAGAEADAGQACAGAAAIIAAACIAAADIgqAAIACAJQACAFAEACQAFADAEAAQAGAAAFgDQAEgCACgEIAIAFIgGAGIgIAEIgLACQgGAAgHgDgAgIgSQgEADgCAFIgCAFIAhAAQAAgHgEgEQgFgFgHABQgFAAgEACg");
	this.shape_61.setTransform(104.7,85.45);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgDApIAAg4IAIAAIAAA4gAgEgcQgCgCAAgDQAAgEACgBQABgCADAAQADAAACACQACACAAADIgCAFIgFACQgCAAgCgCg");
	this.shape_62.setTransform(100.1,84.225);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgBAkQgDgBgCgEQgDgEAAgFIAAgiIgMAAIAAgIIAMAAIAAgOIAJgDIAAARIAVAAIAAAIIgVAAIAAAhQAAAEACACQADACADAAIAFgBQAEgCABgCIAEAIIgHAEQgEABgFABIgHgCg");
	this.shape_63.setTransform(96.45,84.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgRAcQgEgCgDgDQgDgDABgFQgBgHAFgEQAEgEAIgBIAUgEIAAgCQAAgGgDgEQgEgDgGAAQgGAAgEACQgEACgBAGIgIgFQADgGAGgEQAGgEAJAAQAEAAAGADQAFACADAEQADAEAAAHIAAAbQAAAEAEAAIAFgBIgBAHIgGABIgGgBIgEgDIgBgEIgDAEQgDADgEAAQgDACgEAAQgFAAgFgCgAgGAFIgJADQgCADAAADQAAAEADACQACACAFAAIAHgBIAEgDQADgBACgDQABgDAAgDIAAgHg");
	this.shape_64.setTransform(91.35,85.45);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgaApIAAhQIAIAAIAAAKIAEgFQADgDAEgCIAIgCQAHAAAGAFQAGACAEAIQADAHAAAIQAAAJgDAGQgEAHgGAEQgGADgHABQgHgBgFgDQgEgDgCgEIAAAhgAgIgeQgEAEgDAEQgCAGAAAFQAAAHACAEQACAFAEADQAFACAEABQAIAAAFgHQAFgEAAgLQAAgJgFgGQgEgGgJAAQgFAAgDACg");
	this.shape_65.setTransform(84.725,86.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgQAiQgFgEgEgJIAJgFQACAHAEADQAEAEAGAAQAFAAAEgCQAEgDACgDQACgDAAgGQAAgFgCgEQgCgCgEgCQgDgBgFgBIgGABIgGACIgEADIgIgBIAEgpIAqAAIAAAJIgiAAIgDAYIAAABIAAAAQACgDAFgCQAFgBAEAAQAHAAAGADQAGADACAFQADAFAAAHQAAAGgCAFQgBAEgEAEIgJAFQgEABgGABQgKgBgGgEg");
	this.shape_66.setTransform(74.075,84.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgNAiQgHgGgDgIQgEgKAAgKQAAgLAEgJQAEgJAHgFQAHgEAHAAQAGAAAFACIAIAEQADAFACAFIgIAEQgCgFgEgDQgDgDgHAAQgEAAgEACQgDACgEAFIgEAKIgBALIAAACQACgDADgEQAEgDAEgBIAHgBQAIAAAGADQAGADADAEQADAGAAAIQAAAIgDAEQgEAGgFADQgGADgIAAQgKAAgFgFgAgGAAIgGAGQgCADAAAGQAAAEACADQADAEADACQAEACAEAAQAIAAAEgEQAEgFAAgGQAAgGgCgDQgCgDgDgDQgFAAgEAAQgDAAgFAAg");
	this.shape_67.setTransform(67.475,84.55);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgXAnIAAgIIATgPQAGgGAFgFQAFgFABgEQACgEAAgGQAAgGgEgFQgFgEgGAAQgIAAgEAFQgFAGgBAHIgIgEQABgGADgGQAFgGAEgCQAHgCAGgBQAGABAEABIAIAFQAEAEABAEIACAJQAAAGgDAIQgEAGgIAIQgJAHgLAJIAlAAIAAAJg");
	this.shape_68.setTransform(60.775,84.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgIAqIAAgwIgLAAIAAgIIALAAIAAgKIABgHIAEgGIAFgDIAIgBIAGAAIAEACIgCAIIgDgCIgEAAQgFAAgDACQgCACAAAGIAAAJIATAAIAAAIIgTAAIAAAwg");
	this.shape_69.setTransform(52.3,84.125);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgDgHQgEgGAAgKQAAgIAEgHQADgHAGgDQAHgEAHAAQAIAAAGAEQAGADAEAHQAEAIAAAHQAAAIgEAIQgDAHgHAEQgFADgJAAQgHAAgHgDgAgJgSQgFADgCAFQgCAEAAAGQAAAHACAFQACAEAFADQAFADAEAAQAGAAAEgDQAEgCACgFQACgFAAgHQAAgGgCgEQgCgGgEgCQgEgDgGAAQgFAAgEADg");
	this.shape_70.setTransform(46.825,85.45);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgWAoQgEgBgCgCIADgIQACADACAAIAGABQADAAACgCQACgCADgFIADgHIgYg5IALAAIARAvIARgvIAKAAIgbBCQgBAFgDAEIgGAEQgDACgEAAIgHgBg");
	this.shape_71.setTransform(37.15,86.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgNAnQgHgEgDgHQgDgGAAgKQAAgJADgFQAEgIAGgCQAHgFAGAAQAHAAAFAFQAEACACAEIAAgkIAJAAIAABUIgIAAIgBgMIgCAFQgEAEgEACQgEACgEAAQgIgBgFgDgAgMgCQgFAFAAAJQAAALAEAFQAGAHAHAAQAGAAADgDQAFgDACgFQACgFAAgHQAAgIgCgEQgDgEgEgCQgDgCgGAAQgIAAgEAGg");
	this.shape_72.setTransform(30.675,84.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgNAbQgFgCgDgEQgDgFAAgIIAAgkIAJAAIAAAiQAAAJAEADQAEADAHAAIAFgBIAGgDQADgDAAgDQACgEAAgFIAAgeIAJAAIAAA4IgIAAIAAgJQgDAFgGADQgEACgHAAQgGAAgEgCg");
	this.shape_73.setTransform(23.875,85.525);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgBAkQgEgBgBgEQgCgCgBgHIAAgiIgMAAIAAgIIAMAAIAAgOIAJgDIAAARIAVAAIAAAIIgVAAIAAAhQAAAEACACQADACADAAIAFgBQAEgCABgCIADAIIgGAEQgDABgGABIgHgCg");
	this.shape_74.setTransform(18.25,84.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgNAbQgGgEgFgGIAIgHQADAGAEADQAGADAFAAQAGAAAEgDQADgCABgEIgCgEQgCgCgEgBIgNgDQgIgCgEgCQgEgEABgGQgBgFADgEQAEgEAEgCQAFgDAFAAQAIAAAHADQAHAEACAGIgIAFQgCgFgFgCQgDgCgGAAIgGABIgEACIgBAFQgBADACACIAHADIANADQAIABAEADQADAEAAAFQAAAGgDADQgEAFgEACQgFACgIAAQgHAAgHgDg");
	this.shape_75.setTransform(12.9,85.45);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgQAdIAAg4IAIAAIABAKQACgGAFgDQAEgCAGAAIAEAAIADABIgCAJIgDgBIgEAAQgEAAgDACIgFAGQgDAEAAAHIAAAdg");
	this.shape_76.setTransform(123.975,71.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgMAbQgHgFgDgGQgDgHAAgJQAAgJADgGQADgHAHgDQAHgEAGAAQAHAAAHAEQAFADADAGQADAGAAAHIAAADIAAADIgqAAIACAJQACAFAEADQAFACAEAAQAGAAAFgCQADgCADgFIAHAFIgFAGIgIAFQgFABgFAAQgIAAgGgDgAgIgSQgEACgCAFIgCAGIAhAAQAAgHgEgEQgFgEgHgBQgGABgDACg");
	this.shape_77.setTransform(118.125,71.65);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAAAkQgFgCgCgDQgCgDAAgGIAAgiIgLAAIAAgIIALAAIAAgOIAJgDIAAARIAUAAIAAAIIgUAAIAAAhQAAAEACACQADACADAAIAFgBQAEgBABgDIADAJIgGADQgDABgFAAIgHgBg");
	this.shape_78.setTransform(112.7,70.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAQAdIAAggQAAgKgEgEQgEgDgGAAQgEAAgDACQgEACgDAEQgDAEAAAIIAAAdIgJAAIAAg4IAIAAIAAAJIAEgFIAHgEIAIgBQAFgBAGADQAFADADAFQADAEAAAHIAAAkg");
	this.shape_79.setTransform(106.975,71.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgMAbQgGgFgEgGQgDgHgBgJQABgJADgGQAEgHAGgDQAHgEAGAAQAHAAAHAEQAGAEADAFQACAGAAAHIAAADIAAADIgqAAIACAJQACAFAEADQAFACAEAAQAHAAADgCQAFgCACgFIAHAFQgBADgFADQgDADgEACQgFABgGAAQgGAAgHgDgAgIgSQgEACgDAFIgBAGIAhAAQAAgHgEgEQgFgEgHgBQgFABgEACg");
	this.shape_80.setTransform(100.3,71.65);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgMAbQgHgFgDgGQgDgHAAgJQAAgJADgGQADgHAHgDQAHgEAHAAQAEAAAGACQAGADACACQADADADAFIgJAEQgCgFgEgDQgEgCgFgBQgGABgDACQgFACgCAFQgCAFAAAGQAAAIACAEQACAEAFAEQAFACAEAAQAEAAADgBQADgCACgDQACgBACgFIAIADQgDAGgDADQgBADgHADQgEACgGAAQgIAAgGgDg");
	this.shape_81.setTransform(94.05,71.65);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgSAFIAAgJIAlAAIAAAJg");
	this.shape_82.setTransform(88.05,71.525);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgMAbQgHgFgDgGQgDgHAAgJQAAgJADgGQADgHAHgDQAHgEAGAAQAHAAAHAEQAFADADAGQADAGAAAHIAAADIAAADIgqAAQAAAFACAEQACAEAEAEQAFACAEAAQAHAAAEgCQADgCADgFIAHAFIgFAGIgIAFQgFABgFAAQgIAAgGgDgAgIgSQgEACgCAFIgCAGIAhAAQAAgHgEgEQgFgEgHgBQgGABgDACg");
	this.shape_83.setTransform(82.025,71.65);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgHAnQgEgEAAgIIAAhEIAJAAIAABEQAAAEACACQAAACAEAAIAIgCIgBAIIgJABQgGAAgDgDg");
	this.shape_84.setTransform(77.65,70.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgVAqQgHgFAAgGQABgFADgDQACgDAEgBIgEgCQgCgDAAgFQgBgDAEgFIAFgCIgDgCQgGgFAAgJQAAgFADgFQADgDAFgEQAGgCAGAAQAGAAAGACIABABIABgGIAGgFIAIgBIABAAIACAIIgBAAQgHAAgCACQgDACAAAEIACACQADAFAAAFQAAAHgDADQgDAFgFACQgEACgIAAIgHgBIgFACQgCADAAACQAAADACACQADABAEAAIAQAAQAIAAAEAEQAFAEABAGQgBAFgEAFQgDAEgHACQgFACgIAAQgNAAgHgEgAgQAYQgDACAAADQAAAEAFADQAFADAIAAQAGAAAFgCQAEgBACgCIACgFQAAgDgDgCQgCgCgHAAIgRAAQgDAAgCACgAgMgZQgDADAAAFQAAAFADAEQAFADAFAAQAGAAADgDQAFgDAAgGQAAgGgFgCQgEgEgFAAQgEAAgGAEg");
	this.shape_85.setTransform(72.8,72.375);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAQAdIAAggQAAgKgEgEQgEgDgGAAQgEAAgDACQgEACgDAEQgDAEAAAIIAAAdIgJAAIAAg4IAIAAIAAAJIAEgFIAHgEIAIgBQAFgBAGADQAFADADAFQADAEAAAHIAAAkg");
	this.shape_86.setTransform(66.225,71.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgEApIAAg4IAJAAIAAA4gAgEgcQgCgCAAgDQAAgEACgBQACgCACAAQADAAACACQACABAAAEQAAADgCACQgCACgDAAIgEgCg");
	this.shape_87.setTransform(61.325,70.425);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgNAbQgHgEgEgHIAIgFQACAFAGADQAEADAGAAQAGAAAEgCQADgDAAgEIgBgEQgCgCgEgBIgNgDQgJgBgDgEQgEgDAAgHQAAgEADgEQADgEAFgCQAGgDAFAAQAHAAAHAEQAGAEADAFIgIAFQgCgFgEgDQgEgCgFAAIgGABIgFAEIgBAEQAAADABACIAHADIANADQAJABACADQAEAFAAAEQAAAGgDADQgDAFgFACQgFACgHAAQgIAAgHgDg");
	this.shape_88.setTransform(56.925,71.65);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgIALIAGgDIADgEIACgEIgBAAIgBAAIgBAAIgDAAIgCgCIgBgEIABgEIACgDIADgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIADAEIABAGQAAADgCADQAAAEgEADQgCAEgEABg");
	this.shape_89.setTransform(48.925,74.675);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgHAnQgEgEAAgIIAAhEIAJAAIAABEQAAAEACACQABACADAAIAIgCIgCAIIgEABIgEAAQgGAAgDgDg");
	this.shape_90.setTransform(46.325,70.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgNAbQgHgFgDgGQgEgHAAgJQAAgJAEgGQAEgHAGgDQAGgEAHAAQAIAAAHAEQAGADADAHQAEAGAAAJQAAAJgEAHQgDAGgGAFQgHADgIAAQgIAAgFgDgAgJgSQgEACgCAFQgCAFAAAGQAAAIACAEQACAFAEADQAEACAFAAQAFAAAFgCQAFgEACgEQACgEAAgIQAAgGgCgFQgCgFgFgCQgEgDgGAAQgFAAgEADg");
	this.shape_91.setTransform(40.875,71.65);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgQAdIAAg4IAIAAIABAKQADgGAEgDQAEgCAHAAIADAAIADABIgCAJIgCgBIgFAAQgDAAgEACIgFAGQgCADAAAIIAAAdg");
	this.shape_92.setTransform(35.875,71.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAAAkQgEgCgCgDQgDgDAAgGIAAgiIgLAAIAAgIIALAAIAAgOIAJgDIAAARIAUAAIAAAIIgUAAIAAAhQAAAEACACIAGACIAGgBIAEgEIADAJIgGADQgDABgFAAIgHgBg");
	this.shape_93.setTransform(31.025,70.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAQAdIAAggQAAgKgEgEQgEgDgGAAQgEAAgEACQgEACgCAEQgDAEAAAIIAAAdIgJAAIAAg4IAIAAIABAJIADgFIAHgEQAEgCAEABQAGgBAFADQAFADADAFQADAEAAAHIAAAkg");
	this.shape_94.setTransform(25.325,71.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgNAbQgHgFgDgGQgEgIAAgIQAAgHAEgIQADgHAHgDQAGgEAHAAQAHAAAIAEQAFADAEAHQAEAIAAAHQAAAIgEAIQgDAGgGAFQgHADgIAAQgHAAgGgDgAgJgSQgEACgDAFQgCAFAAAGQAAAIACAEQADAFAEADQAEACAFAAQAFAAAFgCQAEgDACgFQACgEAAgIQAAgGgCgFQgCgFgEgCQgEgDgGAAQgFAAgEADg");
	this.shape_95.setTransform(18.5,71.65);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgLAbQgHgEgDgHQgEgHAAgJQAAgJAEgGQADgHAHgDQAGgEAHAAQAEAAAHACQAFACACADQADADACAFIgIAEQgDgGgDgCQgDgCgHgBQgEABgFACQgDACgCAFQgDAGAAAFQAAAGADAGQACAFADADQAGACADAAQAFAAADgBQAFgCABgDQABgBABgFIAJADQgBAEgEAFQgDAEgFACQgFACgGAAQgIAAgFgDg");
	this.shape_96.setTransform(12.1,71.65);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgSAFIAAgJIAlAAIAAAJg");
	this.shape_97.setTransform(117.35,57.725);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgMAaQgGgEgDgGQgFgHAAgJQAAgIAFgHQADgGAGgEQAHgEAGAAQAHAAAHADQAGAEADAGQADAGAAAIIAAACIgBADIgqAAIACAJQADAFADACQAFADAEAAQAGAAAFgDQAEgCACgEIAIAEIgGAHIgIAEQgEACgGAAQgHAAgHgEgAgIgSQgEADgCAFIgCAGIAiAAQgBgIgEgEQgEgEgIAAQgFgBgEADg");
	this.shape_98.setTransform(111.3,57.85);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgNAaQgHgDgEgHIAIgGQACAGAGADQAEADAGAAQAGAAAEgDQADgCAAgDIgBgFQgCgCgEgBIgNgCQgIgCgEgEQgDgDAAgGQAAgGACgDQAEgFAEgCQAGgCAFAAQAHAAAHADQAGAEADAGIgIAFQgCgGgEgCQgEgBgFAAIgGAAIgFADIgBAFQAAADABACIAHADIANADQAIABADADQAEAEAAAFQAAAGgDAEQgDAEgFACQgFACgHAAQgIAAgHgEg");
	this.shape_99.setTransform(105.125,57.85);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgRAcQgGgCgBgDQgCgDgBgFQAAgHAFgEQAEgEAIgBIATgEIAAgCQABgHgEgDQgDgDgFAAQgIgBgCADQgFACgCAGIgIgEQACgGAHgFQAHgEAJAAQAEAAAGACQAFADADAEQADAEAAAHIAAAaQAAAFAEAAIAEAAIAAAGQgCACgEAAIgGgCIgEgEIgBgDIgDADQgEAEgDAAIgIACQgFAAgEgCgAgGAFIgIADQgDACAAAEQAAAEADACQACACAFAAIAHgBIAFgDQADgBAAgDQABgDAAgEIAAgGg");
	this.shape_100.setTransform(99.35,57.85);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgMAaQgGgEgDgGQgEgHAAgJQAAgJAEgGQADgGAGgEQAHgEAGAAQAFAAAGACQAGADACADQADACACAGIgJADQgBgFgEgDQgEgDgGABQgGgBgDADQgEACgCAGQgCADAAAHQAAAHACAFQACAFAEACQAFADAEAAQAFAAADgBQAEgCACgDQABgCABgEIAJADQgDAGgDADQgCADgFADQgFACgHAAQgGAAgHgEg");
	this.shape_101.setTransform(92.95,57.85);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgMAaQgGgEgEgGQgDgIAAgIQAAgHADgIQAEgHAGgDQAGgEAHAAQAHAAAHADQAGAEADAGQADAGAAAIIAAACIgBADIgqAAIACAJQADAFADACQAFADAEAAQAHAAADgDQAFgBACgFIAIAEQgDAEgEADQgDADgEABQgFACgGAAQgGAAgHgEgAgIgSQgEADgCAFIgCAGIAiAAQgBgIgFgEQgEgEgHAAQgFgBgEADg");
	this.shape_102.setTransform(82.85,57.85);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgDAdIgZg5IALAAIARAvIATgvIAJAAIgXA5g");
	this.shape_103.setTransform(76.75,57.875);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgEApIAAg4IAJAAIAAA4gAgEgcQgCgCAAgDQAAgEACgBQACgCACAAQADAAACACQACABAAAEQAAADgCACQgCACgDAAIgEgCg");
	this.shape_104.setTransform(72.475,56.625);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAAAkQgEgCgCgDQgDgDAAgGIAAgiIgLAAIAAgIIALAAIAAgOIAJgCIAAAQIAUAAIAAAIIgUAAIAAAgQAAAFACACQADACADAAIAGgBIAEgDIADAIIgGADQgDACgFgBIgHgBg");
	this.shape_105.setTransform(68.825,57.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgMAaQgFgDgFgHQgDgHAAgJQAAgJADgGQAFgIAFgCQAHgEAGAAQAFAAAGACQAGADACADQACABAEAHIgJADQgCgFgEgDQgEgDgGABQgEgBgEADQgFADgCAFQgCAFAAAFQAAAFACAHQACAEAFADQAFADADAAQAFAAADgBQAEgCABgDQADgCABgEIAIADQgCAFgEAEQgBADgHADQgDACgIAAQgHAAgGgEg");
	this.shape_106.setTransform(63.4,57.85);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgMAaQgHgEgDgGQgEgIABgIQgBgHAEgIQAEgHAGgDQAGgEAHAAQAHAAAHADQAGAEACAGQAEAGAAAIIAAACIgBADIgqAAIACAJQACAFAFACQADADAGAAQAFAAAFgDQAEgCACgEIAIAEIgGAHIgIAEQgFACgFAAQgIAAgGgEgAgIgSQgDADgDAFIgCAGIAiAAQgBgIgEgEQgFgEgHAAQgFgBgEADg");
	this.shape_107.setTransform(57,57.85);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgaAqIAAhRIAIAAIAAAKIAEgFQADgDAEgBIAIgDQAHABAGAEQAGACAEAHQADAJAAAIQAAAHgDAIQgEAGgGAEQgGADgHAAQgHAAgFgDQgEgDgCgEIAAAigAgIgdQgEADgDAEQgCAGAAAGQAAAGACAEQACAFAEADQAFADAEgBQAJAAAEgFQAFgFAAgKQAAgKgFgGQgEgGgJAAQgFAAgDADg");
	this.shape_108.setTransform(50.525,59);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgNAaQgHgDgDgHIAHgGQACAGAGADQAFADAGAAQAFAAAEgDQAEgCgBgDIgBgFQgBgCgFgBIgNgCQgIgCgEgEQgDgDgBgGQABgFACgEQAEgFAEgCQAFgCAGAAQAHAAAHADQAGAEADAGIgIAFQgCgGgEgCQgEgBgFAAIgGAAIgFADIgCAFQAAADACACIAGADIAOADQAIABAEADQACAEAAAFQAAAGgCAEQgCAEgHACQgEACgHAAQgIAAgHgEg");
	this.shape_109.setTransform(43.85,57.85);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgOAaQgGgEgEgGQgDgIAAgIQAAgHADgIQAFgHAFgDQAIgEAGAAQAIAAAGAEQAHAEADAGQAEAHAAAIQAAAJgEAHQgDAGgHAEQgGAEgIAAQgHAAgHgEgAgJgSQgEACgCAGQgCADAAAHQAAAHACAFQACAFAEACQAEADAFAAQAFAAAFgDQAEgDADgEQACgFAAgHQAAgHgCgDQgDgFgEgDQgEgDgGAAQgFAAgEADg");
	this.shape_110.setTransform(37.65,57.85);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgQAeIAAg5IAHAAIACAKQACgGAFgCQAEgDAGgBIAEABIACABIgBAJIgCgCIgFAAQgEABgDACIgFAFQgDAGAAAGIAAAeg");
	this.shape_111.setTransform(32.65,57.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgBAkQgDgCgDgDQgCgDAAgGIAAgiIgLAAIAAgIIALAAIAAgOIAJgCIAAAQIAVAAIAAAIIgVAAIAAAgQAAAFACACQADACADAAIAGgBQADgCABgBIAEAIIgHADQgEACgFgBIgHgBg");
	this.shape_112.setTransform(27.8,57.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgMAaQgGgDgEgHQgEgHAAgJQAAgJAEgGQAEgIAGgCQAGgEAHAAQAHAAAHADQAFAEAEAGQACAGAAAIIAAACIAAADIgrAAQABAFACAEQABAEAFADQAFADAEAAQAGAAAFgDQAEgDACgDIAHAEIgGAHQgCADgFABQgFACgGAAQgHAAgGgEgAgIgSQgEACgCAGIgCAGIAhAAQAAgIgEgEQgFgEgIAAQgFgBgDADg");
	this.shape_113.setTransform(22.4,57.85);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgQAeIAAg5IAIAAIABAKQADgGAEgCQAEgDAGgBIAEABIADABIgCAJIgDgCIgEAAQgEABgDACIgFAFQgDAGAAAGIAAAeg");
	this.shape_114.setTransform(17.525,57.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgHAnQgEgEAAgIIAAhFIAJAAIAABFQAAAEACACQAAABAEABIAIgCIgBAIIgFABIgEABQgGgBgDgDg");
	this.shape_115.setTransform(126.45,42.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgRAcQgEgCgDgDQgCgDAAgFQgBgHAFgEQAEgEAIgBIAUgEIAAgCQAAgGgEgEQgDgDgGAAQgGAAgEACQgEACgCAGIgHgFQACgFAHgFQAGgEAJAAQAEAAAGADQAFACADAEQADAEAAAHIAAAbQAAAEAEAAIAFgBIgBAHIgGABIgGgBIgEgDIgBgEIgDAEQgDADgEAAQgDACgEAAQgGAAgEgCgAgGAFIgIADQgDADAAADQAAAEADACQACACAGAAIAGgBIAEgDQADgBACgDQABgDAAgDIAAgHg");
	this.shape_116.setTransform(121.4,44.05);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AAQAeIAAghQAAgJgEgFQgEgDgGAAQgEAAgDACQgEACgDAEQgDAFAAAHIAAAeIgJAAIAAg5IAIAAIAAAJIAEgFIAHgEIAIgCQAFABAGACQAFACADAFQADAFAAAIIAAAkg");
	this.shape_117.setTransform(114.625,44);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgNAbQgGgEgEgHQgEgGAAgKQAAgIAEgHQAEgIAGgCQAGgEAHAAQAIAAAGAEQAGACAEAIQAEAHAAAIQAAAKgEAGQgEAHgGAEQgFADgJAAQgIAAgFgDgAgJgSQgEADgCAFQgDAFAAAFQAAAGADAGQACAEAEADQAFADAEAAQAGAAAEgDQAEgCACgFQADgGAAgGQAAgFgDgFQgCgGgEgCQgEgDgGAAQgFAAgEADg");
	this.shape_118.setTransform(107.825,44.05);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgEApIAAg4IAIAAIAAA4gAgEgcIgCgFQAAgDACgCQACgCACAAQADAAACACQACABAAAEQAAADgCACQgCACgDAAIgEgCg");
	this.shape_119.setTransform(103.05,42.825);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAAAkQgFgBgCgEQgCgDAAgGIAAgiIgLAAIAAgIIALAAIAAgOIAJgDIAAARIAUAAIAAAIIgUAAIAAAhQAAADACADQADACADAAIAGgBIAEgEIADAIIgGAEQgDABgFABIgHgCg");
	this.shape_120.setTransform(99.425,43.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgRAcQgFgCgCgDQgDgDAAgFQAAgHAFgEQAEgEAIgBIAUgEIAAgCQAAgHgEgDQgDgDgFAAQgHAAgEACQgDACgDAGIgHgFQACgFAGgFQAHgEAJAAQAEAAAGADQAGADACADQADAEAAAHIAAAbQAAAEAEAAIAFgBIgBAHIgGABIgGgBQgDgBgBgCIgBgEIgDAEQgEADgDAAIgIACQgFAAgEgCgAgGAFIgIADQgDADAAADQAAAEADACQACACAGAAIAGgBIAFgDQACgBABgDQACgDAAgDIAAgHg");
	this.shape_121.setTransform(94.325,44.05);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgDAdIgZg5IALAAIARAvIATgvIAJAAIgXA5g");
	this.shape_122.setTransform(88.25,44.075);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgQAeIAAg5IAIAAIABAJQADgFAEgDQAEgDAGAAIAEABIADABIgCAIIgDgBIgEAAQgEAAgDACIgFAGQgCAFAAAGIAAAfg");
	this.shape_123.setTransform(83.525,44);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgMAbQgGgEgEgHQgDgGgBgKQABgIADgHQAEgIAGgCQAGgEAHAAQAHAAAHADQAFAEAEAGQACAGAAAIIAAACIAAADIgrAAQABAFABAEQACAEAFADQAFADAEAAQAGAAAEgDQAEgCADgEIAHAFIgGAGQgCADgGABQgEACgGAAQgHAAgGgDgAgIgSQgEACgDAGIgBAFIAhAAQAAgHgFgEQgEgFgIABQgFAAgDACg");
	this.shape_124.setTransform(77.7,44.05);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgMAbQgHgEgFgGIAIgHQACAFAFAEQAGADAFAAQAGAAAEgDQADgBABgFIgCgEQgCgCgEgBIgNgDQgIgCgEgCQgEgFABgFQAAgFACgEQADgEAFgCQAGgDAEAAQAIAAAHADQAGAEADAGIgIAFQgCgEgEgDQgEgCgGAAIgGABIgEACIgBAFQAAADACACIAGADIANADQAJABADADQADAEAAAFQgBAFgCAEQgDAEgFADQgFACgHAAQgIAAgGgDg");
	this.shape_125.setTransform(71.5,44.05);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgHApIgHgFIgEgFIAAALIgIAAIAAhUIAJAAIAAAkQACgEAEgCQAGgFAGAAQAGAAAHAFQAGADADAHQAEAGAAAIQAAAKgEAGQgDAHgGAEQgGADgHABQgEgBgEgBgAgJgGQgEAEgCADQgCAFAAAHQAAAHACAFQACAEAEADQAFACAEABQAIAAAFgHQAFgFAAgLQAAgJgFgFQgFgGgIAAQgFAAgEACg");
	this.shape_126.setTransform(65.375,42.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgNAbQgGgEgEgHQgEgGAAgKQAAgIAEgHQAEgIAGgCQAGgEAHAAQAIAAAGAEQAGACAEAIQAEAHAAAIQAAAKgEAGQgEAHgGAEQgFADgJAAQgIAAgFgDgAgJgSQgEACgCAGQgDAFAAAFQAAAGADAGQACAFAEACQAEADAFAAQAFAAAFgDQAEgDACgEQADgGAAgGQAAgFgDgFQgCgFgEgDQgEgDgGAAQgFAAgEADg");
	this.shape_127.setTransform(58.325,44.05);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAQAeIAAghQAAgJgEgFQgEgDgGAAQgEAAgEACQgEACgCAEQgDAFAAAHIAAAeIgJAAIAAg5IAIAAIAAAJIAEgFQADgCAEgCQAEgBAEgBQAGABAFACQAEACAEAFQADAFAAAIIAAAkg");
	this.shape_128.setTransform(47.875,44);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgRAcQgGgCgBgDQgCgCgBgGQAAgHAFgEQAEgEAIgBIATgEIAAgCQABgHgEgDQgDgDgFAAQgIAAgCACQgFACgCAGIgIgFQACgFAHgFQAHgEAJAAQAEAAAGADQAFACADAEQADAEAAAHIAAAbQAAAEAEAAIAEgBIAAAHIgGABIgGgBIgEgDIgBgEIgDAEQgEADgDAAIgIACQgFAAgEgCgAgGAFIgIADQgDACAAAEQAAAEADACQACACAFAAIAHgBIAFgDQADgCAAgCQABgDAAgDIAAgHg");
	this.shape_129.setTransform(41.45,44.05);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AAjAeIAAgjQAAgJgEgDQgEgDgFAAQgFAAgEACQgEADgCADQgCAFgBAGIAAAfIgIAAIAAgjQAAgIgDgEQgEgDgGAAQgFAAgDACQgEACgCAEQgDAEAAAHIAAAfIgJAAIAAg5IAHAAIABAJQAEgGAEgCQAFgCAGgBQAGAAAFADQAFAEADAFIAEgGIAIgEIAIgCQAEABAGACQAEACAEAFQADAFAAAIIAAAkg");
	this.shape_130.setTransform(29.05,44);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgDgHQgEgGAAgKQAAgIAEgHQADgHAGgDQAHgEAHAAQAIAAAGAEQAGADAEAHQAEAIAAAHQAAAIgEAIQgDAHgHAEQgFADgJAAQgHAAgHgDgAgJgSQgFADgCAFQgCAEAAAGQAAAHACAFQACAEAFADQAFADAEAAQAGAAAEgDQAEgCACgFQACgFAAgHQAAgGgCgEQgCgGgEgCQgEgDgGAAQgFAAgEADg");
	this.shape_131.setTransform(20.325,44.05);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgQAeIAAg5IAIAAIABAJQACgFAFgDQAEgDAGAAIAEABIADABIgCAIIgDgBIgEAAQgEAAgDACIgFAGQgDAFAAAGIAAAfg");
	this.shape_132.setTransform(15.325,44);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgZAmIAAhLIAzAAIAAAJIgqAAIAAAYIAhAAIAAAHIghAAIAAAjg");
	this.shape_133.setTransform(10.15,43.15);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgPAuQAAgPADgOQAFgOAHgLQAGgKAIgIIgzAAIAAgTIBLAAIAAARQgMAMgGALQgHAMgCAMQgEANAAAOg");
	this.shape_134.setTransform(130.4,21.425);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgUAqQgJgFgGgKIAVgLQACAGADADQAEAEAFAAQAFAAADgCIAFgEQABgDAAgFQAAgDgBgEQgCgDgDgBQgDgBgFAAIgFABIgFABIgDADIgTgDIAGgzIA5AAIAAATIgnAAIgDASIAAADIAAAAQACgDAGgDQAEgBAGAAQAJAAAHADQAGAFAEAFQADAIAAAGQAAAJgDAGQgDAHgFADQgFAFgGABQgGACgIAAQgLAAgJgFg");
	this.shape_135.setTransform(122.675,21.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgWApQgJgFgFgLIAXgKQAAAFACADIAFAFIAHABQADAAADgBIAFgFQACgDAAgCQgBgDgBgDQgBgCgEgBIgGgBIgDAAIgDAAIAAgPIAFAAQAGAAACgCQAEgDAAgFQAAgGgEgCQgDgDgFAAQgEAAgEADQgEADAAAGIgVgHQABgHAFgFQAFgFAIgEQAIgCAIAAQALAAAHADQAHADAEAFQAEAGgBAHQABAHgCAEIgFAGIgGAEQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIAAAAIAGABQAEABADACIAEAGQACAEAAAFQABAJgFAHQgFAGgHADQgIADgKAAQgOABgKgHg");
	this.shape_136.setTransform(114.65,21.45);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgOAQQAFgCADgCIAFgFIADgGIgBAAIgBAAIgCABIgFgCQgDAAgCgCQgCgDAAgEQAAgDACgEQADgEADgBQADgBADAAQAEAAAEACQADADACADQACAEAAAFQAAAFgDAGQgCAFgFAFQgFAFgEACg");
	this.shape_137.setTransform(108.875,25.975);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AAFAuIAAgUIgsAAIAAgPIAmg4IAbAAIAAA3IAOAAIAAAQIgOAAIAAAUgAACgXIgWAhIAZAAIABgnIgBAAg");
	this.shape_138.setTransform(102.725,21.425);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgTAtQgIgEgFgGQgFgGABgIQgBgIAFgGQAEgFAJgCQgHgDgEgFQgDgGgBgHQAAgIAFgFQAEgFAIgEQAIgDAJAAQALAAAHADQAJAEADAFQAEAFABAIQAAAHgFAGQgDAFgHADQAJACAEAFQAEAGAAAIQAAAIgEAGQgEAFgJAFQgIACgMAAQgKAAgJgCgAgHAJQgDABgBACQgDADAAAEQAAADADADQABADADAAQADACAEAAQAFAAADgCQADAAABgDQACgDAAgDQAAgEgCgDQgBgCgDgBQgDgCgFAAQgEAAgDACgAgIgaQgDAEAAAEQAAAEADAEQADADAFAAQAGAAADgDQADgDAAgFQAAgFgDgDQgDgDgGAAQgFAAgDADg");
	this.shape_139.setTransform(94,21.45);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AggAvIAAgQIAUgNIANgNIAIgJQACgGAAgFQAAgFgDgDQgDgEgFAAQgHAAgEAFQgDAFAAAJIgVgGQABgLAEgHQAFgHAIgDQAHgEAKAAQALAAAFADQAGACAFAFQAEADACAGIACALQAAAJgFAHQgEAHgJAHQgKAJgKAGIAAAAIAnAAIAAASg");
	this.shape_140.setTransform(85.675,21.375);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgEA6IAAgMIgKgCQgHgCgIgEQgFgDgGgFIAMgQQADAFAFADQAGADAGACIAEABIAAgUIgGgBQgGgBgHgEQgGgCgDgFQgEgEAAgHQAAgJAFgHQAFgGAIgEQAHgCAHgBIAAgNIAOAAIAAANQAHABAHACQAKAEAHAIIgLAOQgFgFgIgEIgHgCIAAAUIAEAAQANADAHAFQAGAGAAAKQAAAIgFAIQgFAGgIAEIgMADIAAAMgAAKAcIAFgBQAEgDAAgEQAAgEgCgBQgCgCgFgBgAgHgbQgEAAgBADIgCAFIABADIAEADIAFACIAAgRIgDABg");
	this.shape_141.setTransform(77.175,21.45);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgTAhQgHgFgFgIQgFgIAAgMQAAgKAFgIQAFgJAHgEQAKgEAJgBQALABAJAEQAHAEAGAJQAEAIAAAKQAAAMgEAIQgGAIgHAFQgKADgKAAQgJAAgKgDgAgGgRQgDADgCAEQgBAFAAAFQAAAHABAEQACAFADABQADACADAAQAEAAADgCQADgBACgFQABgEAAgHQAAgFgBgFQgCgEgDgDQgEgBgDAAQgCAAgEABg");
	this.shape_142.setTransform(65.15,22.55);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgDAtQgHgCgCgGQgDgEgBgJIAAgfIgMAAIAAgRIAMAAIAAgPIAXgHIAAAWIAVAAIAAARIgVAAIAAAbQAAAFACADQACACAFAAIAGgBIAEgCIADAOIgJAEIgLACQgIAAgEgCg");
	this.shape_143.setTransform(58.2,21.525);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgTAtQgJgFgEgFQgFgGAAgIQAAgIAFgGQAFgFAIgCQgHgDgEgFQgEgHAAgGQAAgIAFgFQADgFAJgEQAIgDAJAAQAKAAAIADQAJAEADAFQAEAFAAAIQAAAHgDAGQgEAFgHADQAJACAEAFQAFAHAAAHQAAAIgFAGQgFAGgIAEQgJACgLAAQgLAAgIgCgAgHAJIgFADQgBADAAAEQAAADABADQADADACAAQADACAEAAQAFAAADgCQADAAABgDQACgDAAgDQAAgEgCgDQgBgCgDgBIgIgCIgHACgAgIgaQgDADAAAFQAAAFADADQADADAFAAQAGAAADgDQADgDAAgFQAAgFgDgDQgDgDgGAAQgFAAgDADg");
	this.shape_144.setTransform(47.375,21.45);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgWApQgKgFgEgLIAXgKQABAGABACQABADAEACQADABAEAAQAEAAADgBIAEgFQABgCAAgDQAAgDgBgDIgEgDIgHgBIgCAAIgEAAIAAgPIAFAAQAGAAACgCQADgDAAgFQAAgGgDgCQgCgDgGAAQgEAAgEADQgDADgBAGIgVgHQABgGAFgGQAFgFAIgEQAJgCAHAAQALAAAHADQAHADAEAFQAEAHAAAGQAAAHgCAEIgFAGIgGAEIgFABIAAAAIAGABIAGADQAEACACAEQACAFAAAEQAAAJgFAHQgGAGgGADQgIADgKAAQgOABgKgHg");
	this.shape_145.setTransform(38.975,21.45);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgTAtQgJgFgEgFQgEgGgBgIQABgIAEgGQAEgFAJgCQgGgDgFgFQgDgGAAgHQAAgIADgFQAEgFAJgEQAHgDAKAAQAKAAAIADQAJAEADAFQAFAFgBAIQAAAHgDAGQgDAEgIAEQAJACAEAFQAFAGAAAIQAAAIgFAGQgEAFgJAFQgIACgMAAQgLAAgIgCgAgGAJQgEABgCACQgBADAAAEQAAADABADQACADAEAAQADACADAAQAEAAADgCQAEAAACgDQABgDAAgDQAAgEgBgDQgBgCgFgBQgDgCgEAAQgDAAgDACgAgIgaQgDAEgBAEQABAEADAEQAEADAEAAQAGAAADgDQADgDAAgFQAAgFgDgDQgDgDgGAAQgEAAgEADg");
	this.shape_146.setTransform(30.95,21.45);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgOAQIAHgEIAHgFIACgGIgBAAIgDABIgGgCQgBAAgCgCQgCgCgBgFQABgFACgCIAEgFIAHgBQAEAAAEACQAEACABAEQACAEAAAFQAAAFgDAGIgHAKQgFAFgEACg");
	this.shape_147.setTransform(24.8,25.975);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgcAkQgJgMAAgYQAAgXAJgLQAKgMASAAQATAAAKAMQAJALAAAXQAAAYgJAMQgKAMgTgBQgSABgKgMgAgHgZQgEADgBAGQgCAHAAAJQAAAKACAHQABAGAEADQADADAEAAQAFAAADgDQAEgDABgGQACgHAAgKQAAgJgCgHQgBgGgEgDQgDgDgFAAQgEAAgDADg");
	this.shape_148.setTransform(18.675,21.45);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AAAAuIABhDQgEAEgGADQgFAEgGAAIgDgTIAIgCIAPgJIAFgFIATAAIAABbg");
	this.shape_149.setTransform(11.025,21.425);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgEA6IAAgMIgKgCQgHgBgIgFQgFgDgGgFIALgQQAEAFAFADQAFADAHACIAEABIAAgTIgGgCQgHgBgGgEQgGgCgEgFQgDgEAAgHQAAgIAFgIQAFgGAIgEQAGgCAIgBIAAgNIANAAIAAANQAIABAHACQAJAEAIAIIgLAOQgHgGgGgDIgIgDIAAAVIAFAAQAMADAIAFQAGAGAAAKQAAAJgFAHQgFAGgJAEIgMADIAAAMgAAJAcIAGgBQAEgCAAgFQAAgEgCgBIgIgDgAgHgbQgDAAgDADIgBAFIABADQAAACAEABIAFACIAAgRIgDABg");
	this.shape_150.setTransform(4.075,21.45);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgJAhQgEgDAAgGQAAgHAEgDQAEgDAFAAQAHAAADADQAEADAAAHQAAAGgEADQgDADgHAAQgFAAgEgDgAgJgNQgEgDAAgGQAAgGAEgEQAFgEAEAAQAGAAAEAEQAEADAAAHQAAAGgEADQgDADgHAAQgFAAgEgDg");
	this.shape_151.setTransform(87.35,5.75);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgRAgQgIgEgFgIQgFgIAAgMQAAgKAFgJQAEgHAJgFQAIgFAKAAQALAAAIAFQAHAFAFAHQAEAIAAAJIgBAIIgvAAIACAGQABADAEADQAEACADAAQAGgBACgCQAEgCABgDIATAGQgCAHgFADQgEAEgHACQgGACgIAAQgKABgJgFgAgGgRQgDADgCAEIgBAFIAZAAQgBgGgCgDQgDgEgGgBQgEAAgDACg");
	this.shape_152.setTransform(81.475,5.75);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgcA3QgJgEAAgJQAAgGAFgEQADgBAGgBIgHgEQgDgEAAgHQgBgHAGgDIAGgEIgDgBQgIgFAAgMQAAgJADgEQAEgFAIgDQAIgDAKAAQAHAAAHACIABgHQACgFAFgEQAFgDAGAAIABAAIACAAIACAQIgCAAIgCAAQgGAAgDACIgDAEQAFADACADQAEAFAAAIQAAAIgEAFQgEAEgHADQgHADgLgBIgNAAIgCAAQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABABAAIAFABIAWAAQAMAAAGAFQAHAFAAAKQAAAIgFAHQgFAFgIADQgIADgMgBQgSAAgJgEgAgRAiQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAADAFABQAFACAIAAIALgBQADAAADgCQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQgCgBgDgBIgZAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAgAgHgYQgDADAAAEQAAAEADADQADADAEAAQADAAADgDQAEgDAAgEQAAgEgEgDQgCgDgEAAQgFAAgCADg");
	this.shape_153.setTransform(73.9,6.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AALAkIAAgnQAAgIgCgDQgEgCgDAAQgDAAgDABQgDACgBADQgDAEAAAGIAAAkIgXAAIAAhFIAVAAIABAOIACgFQAFgFAEgDQAGgDAGAAQAIAAAEADQAGAEADAFQADAFAAAIIAAAug");
	this.shape_154.setTransform(65.8,5.675);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AARAiQgEgBgDgDIgCgEIgBADQgEAEgEABQgGACgGAAQgIAAgFgCQgFgCgDgEQgDgFAAgGQAAgHAFgFQAFgFAJgBIAXgFIAAgCQAAgEgCgEQgDgDgEAAQgEAAgEACQgDADgBAFIgUgEQABgJAJgHQAKgHAOAAQAIAAAIAEQAHADAEAGQAEAFAAAJIAAAZQAAAFAFABIAEgBIgCANQgDACgHAAQgGAAgDgCgAgFAHIgGADQgCABAAAEQAAABAAAAQAAABAAABQABAAAAABQAAAAABABQACABADAAIAFAAIADgDIACgEIABgFIAAgEg");
	this.shape_155.setTransform(57.825,5.75);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAPAuIgSghIgPAAIAAAhIgXAAIAAhbIArAAQAQAAAJAIQAKAIAAAMQAAAPgKAGQgEADgFACIAYAlgAgSgDIARAAQAGAAAEgDQADgDAAgGQAAgGgDgDQgEgDgGAAIgRAAg");
	this.shape_156.setTransform(49.475,4.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,134.2,132.2), null);


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
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.6)"],[0,1],21.5,92.4,21.5,-100.1).s().p("AhdQhIAAjlQhdgJhVgWQiSglh2hBQh3hChRhVIDNkcQA9BTBhA7QBiA6BzAfQAhAJAhAGIAAlhIhngYQiIghhqg3Qhpg4g7hWQg7hXAAh3QAAibBTh2QBUh3CchDQBsguCJgPIAAjlIEJAAIAADlQCPAPB5AvQCtBFB+CKIjFEAQhohvh/g5Qg/gdhIgOIAAFqIBTASQDvA1BzBmQBxBmABCzQgBCthYB2QhZB3ibA8QhkAnh2AOIAADngACsIAQA6gKApgWQBLgoAAhRQAAg1gugkQgngfhZgXgAiUn6Qg/AWgeAlQgfAkAAAuQAAAlATAfQASAeA3AYQAiAPA1AQIAAkzQgfAFgYAIg");
	this.shape.setTransform(73.55,105.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,147.1,211.3), null);


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
	this.shape.graphics.f().s("rgba(193,174,212,0.498)").ss(1.8).p("ArvATQAABCAJA+QAUCgBKB7QApBFA6A5QDMDLFcgCQBqAABdgUQDQgtCLiQQDMjRgBllQgBlQjOjJQi/i9k4gMQgWgBgWAAQi6ABiQA7Qh/A0heBiQgcAdgYAhQiTDFABEzg");
	this.shape.setTransform(117.6249,91.8006);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#74499D").s().p("AARO0Qiyhcg1ikQg0ilBdi3IAEgIQApBFA6A6IAJAIIACADQDIC+FPAAIABAAIACAAIACAAIAAAAIABAAQBqgBBdgUQhdAUhqABIgBAAIAAAAIgCAAIgCAAIgBAAQlPAAjIi+IgCgDIgJgIQg6g6gphFQBgi1ChgyQCkgyDBBiQC0BcA1CiQAkBxghB7QgPA4gdA6QhfC4ilA0Qg7ATg9AAQhzAAh9hAgAipFQIAAAAgAmQA0QibgWhPhqQhQhsAXieQAXihBthOQBshOCmAYQBdANBCAsQiSDDAAEwIAAAFQAABDAJA8QgJg8AAhDIAAgFQAAkwCSjDQArAcAgAqQBPBrgYCgQgVCehtBQQg8ArhNANQgeAFggAAQgkAAgngGgAh+pCIAAAAgAEvp/QhSgMgrg5QgbgkgFguQgDgcAEggQAMhWA6gqQA6gqBYAMQBTAMAqA4QAdAnAEA0IgtgBQi6ABiQA7QCQg7C6gBIAtABQACAYgEAcQgMBUg6ArQgtAig/AAQgSAAgUgDgAIJtRIAAAAg");
	this.shape_1.setTransform(69.716,101.1754);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,193.8,202.4), null);


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
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-14,11.2,12.8,-15.6).s().p("AkVD3IF0mDIgrgqIDihvIgtBkIACADIgFAEIg2B8IgigfIl0GDg");
	this.shape.setTransform(27.75,29.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,55.5,58.9), null);


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
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-58.9,8,40.4,-9.4).s().p("Ap3GSIHzoOIDBDqIGEmSIgsgqIDihwIgsBlIADACIgGAEIg3B8IghgfIm1HHIjDjqIm/HYg");
	this.shape.setTransform(63.15,44.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,126.3,89.4), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-55.4,0,55.5,0).ss(3.2,0,0,4).p("AoZAAIQzAA");
	this.shape.setTransform(53.825,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-1.6,-1.6,110.89999999999999,3.2), null);


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
	this.shape.graphics.f().ls(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-0.2,-57.9,-0.2,44).ss(3.2,0,0,4).p("AAAnHIAAOP");
	this.shape.setTransform(0,45.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-1.6,-1.6,3.2,94.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGQgCgDAAgDQAAgDACgCQADgCACAAQADAAACACQACADABACQgBADgCADQgBACgEAAQgCAAgDgCg");
	this.shape.setTransform(74.55,22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAbQgHgEgEgGIAIgGQAEAGAEADQAFADAGAAQAGAAAEgDQAEgCAAgEIgCgFQgBgCgFgBIgNgDQgJgBgEgEQgEgFAAgFQAAgFADgEQAEgFAEgCQAGgCAGAAQAIAAAHADQAGAEADAGIgIAFQgDgFgEgCQgGgDgDAAIgHABIgFAEIgBAEQAAADACACQABACAFABIAOAEQAIABAEADQAEAFAAAEQAAAHgDADQgDAEgGADQgGACgGAAQgIAAgIgEg");
	this.shape_1.setTransform(69.625,20.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEArIAAg7IAJAAIAAA7gAgEgdQgCgCAAgEQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCADQgCABgDAAIgEgBg");
	this.shape_2.setTransform(64.925,18.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAbQgHgDgFgHIAJgGQACAGAFADQAGADAGAAQAGAAAEgDQADgCAAgEIgBgFQgCgCgFgBIgNgDQgIgBgEgEQgEgEAAgGQAAgFADgEQACgEAGgDQAGgCAFAAQAJAAAGADQAHAFACAFIgIAFQgCgFgFgCQgFgDgEAAIgGABQgEACgBACIgCAEQAAADACACQACADAFAAIAOAEQAIABADADQAEAEAAAFQAAAHgDADQgDAFgGACQgGACgGAAQgHAAgIgEg");
	this.shape_3.setTransform(60.075,20.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAbQgGgDgEgHQgEgHAAgKQAAgJAEgHQAEgHAGgDQAHgEAHAAQAIAAAHAEQAGADAEAHQAEAHAAAJQAAAKgEAHQgDAHgHADQgHAEgIAAQgHAAgHgEgAgKgTQgEADgCAFQgDAGAAAFQAAAGADAGQACAFAEADQAFADAFAAQAHAAAEgDQAEgDACgFQACgGABgGQgBgFgCgGQgCgFgEgDQgEgDgHAAQgFAAgFADg");
	this.shape_4.setTransform(53.4,20.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAoQgGgEgEgGQgDgHAAgKQAAgLADgEQAEgHAHgFQAHgDAGAAQAHAAAFAEQAEACADAEIAAglIAKAAIAABXIgJAAIgBgKIgCAEQgEADgEADQgEACgFAAQgHAAgHgFgAgNgCQgFAFAAAKQAAAKAFAHQAEAGAJAAQAFAAAFgDQAEgDADgFQACgEAAgJQAAgHgCgFQgDgCgEgEQgFgDgFABQgHgBgGAHg");
	this.shape_5.setTransform(45.85,18.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEArIAAg7IAJAAIAAA7gAgEgdQgCgCAAgEQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAAEgCACQgCABgDAAQgCAAgCgBg");
	this.shape_6.setTransform(40.675,18.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAbQgGgDgEgHQgEgHAAgKQAAgJAEgHQAEgIAGgCQAHgEAHAAQAHAAAEACIAIAFIAGAJIgJAEQgCgGgEgDQgEgDgGAAQgFAAgFADQgEADgCAFQgDAGAAAFQAAAGADAGQACAFAEADQAFADAFAAQAEAAAEgCIAFgEQADgDAAgEIAJAEQgCAGgDADQgEAEgFACQgHACgEAAQgHAAgHgEg");
	this.shape_7.setTransform(35.775,20.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAdQgEgBgDgEQgDgEAAgFQAAgHAFgEQAEgEAIgBIAVgEIAAgDQAAgGgDgEQgEgEgGAAQgFAAgFADQgEADgDAGIgHgFQACgGAGgFQAHgEAKAAQAEAAAGACQAFACAEAFQADAEAAAHIAAAcQAAAFAEAAIAFgBIgBAIIgGABIgGgBQgDgCgCgDIgBgDIgDADQgCADgFACIgIABQgGAAgEgCgAgGAFQgGABgDACQgDADAAADQAAAEADACQACADAGAAIAHgBIAFgDIAEgFQABgCAAgEIAAgGg");
	this.shape_8.setTransform(29.175,20.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgEgGQgEgHAAgKQAAgJAEgHQAEgHAGgDQAHgEAHAAQAIAAAHAEQAGADAEAHQAEAHAAAJQAAAKgEAHQgDAHgHADQgHAEgIAAQgHAAgHgEgAgJgTQgFADgCAFQgCAGgBAFQABAGACAGQACAFAFADQADADAGAAQAHAAADgDQAFgCACgGQACgEAAgIQAAgHgCgEQgCgGgFgCQgDgDgHAAQgGAAgDADg");
	this.shape_9.setTransform(21.95,20.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAmQgFgDgCgDQgCgDAAgGIAAgkIgMAAIAAgIIAMAAIAAgOIAJgDIAAARIAVAAIAAAIIgVAAIAAAiQAAAFACACQADACADAAQAEAAACgBQADgBACgCIADAIIgGAEQgEABgFAAQgEAAgDgBg");
	this.shape_10.setTransform(15.925,19.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAbQgGgDgEgHQgDgHAAgKQAAgJADgHQAEgHAGgDQAHgEAHAAQAJAAAGADQAFAEAEAGQACAGAAAIIAAADIAAADIgsAAQAAAFACAEQACAFAFADQAFADAEAAQAHAAAEgDQAEgCADgFIAIAFQgCADgFAEQgDADgFACQgFABgGAAQgGAAgIgEgAgIgTQgFAEgCAEIgCAGIAjAAQAAgIgFgEQgEgFgIAAQgEAAgFADg");
	this.shape_11.setTransform(10.05,20.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAPAsIgTgeIgMANIAAARIgKAAIAAhXIAKAAIAAA6IAdgeIAMAAIgXAWIAZAlg");
	this.shape_12.setTransform(3.8,18.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMAbQgGgDgEgHQgEgHAAgKQAAgJAEgHQAEgIAGgDQAGgDAIAAQAHAAAEACQAEABAEAEIAGAJIgJAEQgCgGgEgDQgEgDgGAAQgFAAgFADQgEADgCAFQgDAGAAAFQAAAGADAGQACAFAEADQAFADAFAAQAEAAAEgCIAFgEQADgDAAgEIAJAEQgCAGgDADQgEAEgFACQgHACgEAAQgHAAgHgEg");
	this.shape_13.setTransform(73.975,5.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEArIAAg7IAJAAIAAA7gAgEgeQgCgBAAgEQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_14.setTransform(68.975,4.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAAmQgFgDgCgDQgCgDAAgGIAAgkIgMAAIAAgIIAMAAIAAgOIAJgDIAAARIAVAAIAAAIIgVAAIAAAiQAAAGACABQADACAEAAIAGgBIAEgDIADAIIgGAEQgEABgFAAQgEAAgDgBg");
	this.shape_15.setTransform(64.925,4.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNAbQgGgDgEgHQgEgHAAgKQAAgJAEgHQAEgHAGgEQAGgDAIAAQAJAAAFADQAHAEACAGQADAGABAIIAAADIgBADIgsAAQAAAGACADQADAGAEACQAFADAFAAQAGAAAEgDQAEgBADgGIAHAFQgCADgDAEIgIAFIgLABQgHAAgIgEgAgIgTQgFADgCAFIgCAGIAjAAQAAgIgFgEQgEgFgIAAQgFAAgEADg");
	this.shape_16.setTransform(59.05,5.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHArQgEgBgEgFIgEgFIAAALIgIAAIAAhXIAJAAIAAAmQACgFAFgCQAFgEAHAAQAIAAAFAEQAGACAEAJQAFAFAAAKQAAAKgFAHQgDAGgHAFQgGADgHAAQgEAAgEgBgAgJgGQgEADgCAEQgDAGAAAHQAAAGADAFQACAGAEACQAEADAFAAQAJAAAEgGQAGgHAAgKQgBgKgEgFQgFgHgJAAQgFAAgEADg");
	this.shape_17.setTransform(52.05,4.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSAdQgEgBgDgEQgDgEAAgFQAAgHAFgEQAEgEAIgBIAVgEIAAgDQAAgHgDgDQgEgEgGAAQgFAAgFADQgFAEgBAFIgIgFQACgHAHgEQAGgEAKAAQAGAAAEACQAFACAEAFQADAEAAAHIAAAcQAAAFAEAAIAFgBIgBAIIgGABQgDAAgDgCQgDgBgBgDIgBgDIgDADIgIAFIgIABQgGAAgEgCgAgGAFIgJADQgDADAAADQAAAEADACQAEADAFAAIAGgBIAFgDIAEgFQABgCAAgEIAAgGg");
	this.shape_18.setTransform(44.875,5.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEArIAAg7IAJAAIAAA7gAgEgeQgCgCAAgDQAAgDACgCQACgCACAAQAEAAABACQACACAAADQAAAEgCABQgBACgEAAQgCAAgCgCg");
	this.shape_19.setTransform(39.675,4.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOApQgHgFgDgGQgEgHABgKQAAgLADgEQAEgIAHgDQAFgEAIAAQAHAAAFAEQAEADADAEIAAgmIAKAAIAABXIgJAAIgBgKIgCAEQgEADgEADQgFABgEAAQgIAAgGgDgAgNgCQgFAFAAAKQAAAKAFAHQAEAGAJAAQAGAAAEgDQAFgDACgFQACgFAAgHQAAgIgCgFQgCgDgFgDQgFgCgFgBQgHAAgGAHg");
	this.shape_20.setTransform(34.15,4.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgIALIAGgDQACgBABgDIACgEIgBAAIgBAAIgBAAIgDAAIgDgDIgBgEIABgEIADgDIADgBQABAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQABACAAAEIgBAGIgFAIQgDAEgDABg");
	this.shape_21.setTransform(24.875,8.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAbAnIgJgWIgjAAIgIAWIgKAAIAehNIALAAIAfBNgAgOAJIAcAAIgOgmg");
	this.shape_22.setTransform(19.2,4.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAUAnIgagnIgOAOIAAAZIgKAAIAAhNIAKAAIAAAnIAmgnIANAAIgfAgIAfAtg");
	this.shape_23.setTransform(11.775,4.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AggAnIAAhNIAaAAQASAAAKAKQALAKAAASQAAATgLAKQgKAKgSAAgAgWAeIARAAQANAAAHgHQAIgIAAgPQAAgNgIgIQgHgIgNAAIgRAAg");
	this.shape_24.setTransform(3.275,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,76.7,23.4), null);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtBKIAAiTIBaAAIAAAYIg/AAIAAAlIAwAAIAAAXIgwAAIAAAnIBAAAIAAAYg");
	this.shape.setTransform(152.65,20.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcBKIgGgmQgCgLgFgEQgFgEgKAAIgcAAIAAA5IgbAAIAAiTIA4AAQAWAAAOALQAOAMAAASQAAAagWAJQARAIADAYIAHAngAgcgHIAdAAQAWAAAAgVQAAgKgFgFQgHgGgKAAIgdAAg");
	this.shape_1.setTransform(139.3,20.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxA3QgTgVAAgiQAAggATgWQAUgWAdAAQAfAAATAWQATAVAAAhQAAAhgUAWQgTAWgeAAQgeAAgTgWgAgcglQgMAOAAAXQABAYALAOQAMANAQAAQASAAALgNQALgOAAgYQABgWgMgPQgMgNgRAAQgRAAgLANg");
	this.shape_2.setTransform(123.55,20.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqBKIAAhjIgeA9IgWAAIgfg9IABBjIgbAAIAAiTIAbAAIAoBRIAqhRIAaAAIAACTg");
	this.shape_3.setTransform(106.6,20.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAgBKIg/hmIABBmIgbAAIAAiTIAcAAIA9BkIAAhkIAaAAIAACTg");
	this.shape_4.setTransform(84.9,20.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbBKIgGgmQgBgLgFgEQgFgEgKAAIgcAAIAAA5IgbAAIAAiTIA4AAQAWAAAOALQAOAMAAASQAAAagXAJQARAIAEAYIAHAngAgcgHIAcAAQALAAAGgGQAGgFAAgKQAAgKgGgFQgGgGgKAAIgdAAg");
	this.shape_5.setTransform(70.4,20.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlBKIgKggIg1AAIgLAgIgcAAIA0iTIAbAAIA0CTgAgSASIAkAAIgSg7g");
	this.shape_6.setTransform(55.7,20.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBKIAAiTIBaAAIAAAYIg/AAIAAAlIAxAAIAAAXIgxAAIAAAnIBBAAIAAAYg");
	this.shape_7.setTransform(42.7,20.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsBKIAAiTIAbAAIAAB7IA/AAIAAAYg");
	this.shape_8.setTransform(30.5,20.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AsODHQgxAAgkgjQgigjgBgxIAAieQABgyAigjQAkgjAxAAIYdAAQAyAAAiAjQAkAjgBAyIAACeQABAxgkAjQgiAjgyAAgAtXiXQgeAegBArIAACeQABAqAeAfQAeAeArAAIYdAAQArAAAegeQAfgfgBgqIAAieQABgrgfgeQgegfgrAAI4dAAQgrAAgeAfg");
	this.shape_9.setTransform(91.7,20.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer_4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#763F98","#180038"],[0,1],0.5,-8.6,0.5,16.4).s().p("AsOC/QguAAghghQgggggBguIAAieQABguAgghQAhghAuAAIYdAAQAuAAAhAhQAgAhABAuIAACeQgBAuggAgQghAhguAAg");
	this.shape_10.setTransform(91.7,20.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(1.5,0.5,180.5,39.8), null);


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
	mask.graphics.p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	mask.setTransform(80,300);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARA2IAAg8QAAgKgEgFQgEgEgHAAQgFAAgDACQgEADgEAFQgCAGAAAIIAAA3IgjAAIAAhoIAfAAIACAUIADgHQAHgIAHgEQAIgDAKAAQAJAAAKADQAIAFAEAIQAFAJAAAMIAABFg");
	this.shape.setTransform(146.9,97.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAwQgNgGgHgNQgHgMAAgRQAAgQAHgNQAIgNAMgFQANgHAPABQARgBAMAHQAMAFAIANQAHANAAAQQAAARgHAMQgHANgNAGQgMAHgRAAQgPAAgNgHgAgKgZQgEADgCAHQgDAGAAAJQAAAKADAHQACAGAEADQAEADAGAAQAHAAAEgDQAEgDACgGQADgHAAgKQAAgJgDgGQgCgHgEgDQgFgDgGAAQgFAAgFADg");
	this.shape_1.setTransform(134.475,97.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBMIAAhoIAjAAIAABogAgPgsQgFgFAAgIQAAgKAFgDQAGgFAJAAQALAAAFAFQAFADAAAKQAAAIgFAFQgFAEgLAAQgJAAgGgEg");
	this.shape_2.setTransform(125.525,95.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGBDQgJgEgFgHQgDgHgBgMIAAgvIgSAAIAAgaIASAAIAAgXIAjgKIAAAhIAeAAIAAAaIgeAAIAAApQgBAIAEADQAEADAGAAQAFAAAEgBQADgBAEgDIADAWQgEAEgJACQgGACgLAAQgLAAgIgDg");
	this.shape_3.setTransform(118.35,96.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZA0QgHgEgDgEIgCgFIgDADQgFAHgIADQgJACgIABQgLAAgIgEQgJgEgDgGQgFgGAAgJQAAgLAHgIQAHgHAPgDIAjgHIAAgDQAAgIgEgDQgEgFgGAAQgHAAgFAEQgFAEgCAIIgegIQADgOAMgJQANgJAXAAQAOgBALAFQALAEAGAKQAFAJAAAMIAAAmQAAAIAIAAIAGgBIgCAUQgGAEgKAAQgHgBgHgCgAgIAMQgHABgCACQgDADAAAEQAAAGADABQADACAFAAIAHgBQACgBACgBQADgCABgFQACgDAAgEIAAgGg");
	this.shape_4.setTransform(108.725,97.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AguA1IAAgWIAzg6IgzABIAAgZIBbAAIAAAVIgzA6IA1AAIAAAZg");
	this.shape_5.setTransform(97.4,97.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRBMIAAhoIAjAAIAABogAgPgsQgFgFAAgIQAAgJAFgEQAGgFAJAAQALAAAFAFQAFADAAAKQAAAIgFAFQgFAEgLAAQgJAAgGgEg");
	this.shape_6.setTransform(89.275,95.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUBEQgHgIAAgRIAAh2IAiAAIAABxQAAAHADADQACADAGAAIAFAAIAFgCIgCAWQgGADgEAAIgMACQgQAAgIgIg");
	this.shape_7.setTransform(83.8,95.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZA0QgHgDgDgFIgDgFIgCADQgFAHgIADQgJACgJABQgLAAgHgEQgJgDgDgHQgFgGAAgJQAAgLAHgIQAGgHAPgDIAkgHIAAgDQAAgIgEgDQgEgFgGAAQgIAAgEAEQgFADgCAJIgegIQADgPAMgIQANgJAXAAQAPgBAKAFQALAFAGAJQAFAIAAANIAAAmQABAIAGAAIAHgBIgCAUQgHAEgJAAQgIgBgGgCgAgIAMQgHABgCACQgEADAAAEQABAGADABQADACAFAAIAGgBQAEAAACgCIADgHQACgDAAgEIAAgGg");
	this.shape_8.setTransform(74.35,97.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGBDQgJgEgFgHQgEgHAAgMIAAgvIgTAAIAAgaIATAAIAAgXIAigKIAAAhIAgAAIAAAaIggAAIAAApQAAAIAEADQAFADAGAAQAEAAAEgBQADgBAEgDIADAWQgEAEgJACQgGACgKAAQgMAAgIgDg");
	this.shape_9.setTransform(63.7,96.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBMIAAhoIAjAAIAABogAgPgsQgFgFAAgIQAAgKAFgDQAFgFAKAAQALAAAFAFQAFADAAAKQAAAIgFAFQgGAEgKAAQgKAAgFgEg");
	this.shape_10.setTransform(56.425,95.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag2BLIAAiTIAgAAIABAVIADgGQAFgJAIgEQAHgFAKABQAOgBAJAHQAJAGAGAMQAFAMAAASQAAASgFAKQgGANgJAGQgKAGgNABQgOAAgIgJQgGgFgDgHIAAA+gAgJgtQgFADgCAGQgDAIAAAIQAAAIADAHQACAHAEACQAEADAGABQAJAAAFgIQAFgFAAgPQAAgPgFgHQgFgGgJAAQgEAAgFADg");
	this.shape_11.setTransform(47.425,99.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbAxQgNgFgKgJIARgUQAFAGAJAFQAJAFAKAAQAFAAAGgCQADgDAAgDQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAgBAAQgCgCgGgCIgNgDQgUgEgIgHQgJgIAAgNQAAgHAFgJQAHgIAJgFQALgEAQAAQAQgBAMAFQAMAEAIAKIgRATQgFgFgIgFQgIgEgIAAIgIABIgFADQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAADACACQADACAGABIATAEQAQADAIAHQAGAIAAALQABAKgGAIQgFAIgMAFQgKAEgRABQgPAAgNgGg");
	this.shape_12.setTransform(35.4,97.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcAwQgNgGgHgNQgGgKgBgTQABgRAGgMQAIgMAMgGQAMgHAQABQAQgBANAHQALAGAIAMQAIANAAAQQAAARgIAMQgHANgMAGQgNAHgQAAQgPAAgNgHgAgKgZQgEAEgCAGQgDAGAAAJQAAAKADAHQACAGAEADQAEADAGAAQAGAAAFgDQAEgDACgGQACgHABgKQgBgJgCgGQgCgHgEgDQgFgDgGAAQgGAAgEADg");
	this.shape_13.setTransform(23.95,97.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AARBLIAAg8QAAgMgEgDQgEgEgHAAQgDAAgFACQgFADgCAEQgDAGAAAJIAAA3IgkAAIAAiVIAkAAIAABAQAFgKAIgGQAJgFAKAAQAKAAAJAEQAIAEAFAIQAFAJAAALIAABGg");
	this.shape_14.setTransform(11.575,95.625);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(6.3,88,145.89999999999998,19.5), null);


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
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AkGDBIBAnDIHNBBIhAHDg");
	mask_1.setTransform(26.275,25.85);

	// Layer_3
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#74499D").s().p("AgdC4QhTgLgqg6Qgrg5AMhTQAMhWA6grQA6gqBXANQBTALAqA5QArA5gMBUQgMBVg6ArQgtAhg/AAQgRAAgUgDg");
	this.shape_15.setTransform(27.7,28.1224);

	var maskedShapeInstanceList = [this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(8.9,9.4,37.7,37.5), null);


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
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AmxBwIAAjfINjAAIAADfg");
	mask_2.setTransform(43.4,11.15);

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPAQQgGgGAAgKQAAgJAGgGQAGgGAJAAQAWAAAAAVQAAAKgGAGQgGAGgJAAQgKAAgGgGg");
	this.shape_16.setTransform(84.6,2.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAQQgGgGAAgKQAAgJAGgGQAFgGAKAAQAKAAAGAGQAGAGAAAJQAAAKgGAGQgFAGgLAAQgJAAgGgGg");
	this.shape_17.setTransform(2.2,20.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgmBuQgGAAAAgGIAAiTQAAghARgRQARgQAdAAQAMAAAIACQAGACAAAFIgDAUQgCAGgEAAIgQgBQgXAAAAAaIAAADIAmAAQAHAAAAAHIAAAVQAAAHgHAAIgmAAIAABzQAAAGgHAAg");
	this.shape_18.setTransform(76.1,10.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNBOQgGAAgBgGIAAiPQABgGAGAAIAbAAQAGAAABAGIAACPQgBAGgGAAg");
	this.shape_19.setTransform(84.6,14.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag5A7QgVgXAAgkQAAgjAVgXQAWgXAjAAQAjAAAXAXQAVAXAAAjQAAAkgVAXQgWAXgjAAQgjAAgXgXgAgbggQgJAMgBAUQAAAVALAMQAKALARAAQAQAAAKgLQALgMAAgVQAAgUgLgMQgLgLgQAAQgQAAgLALg");
	this.shape_20.setTransform(60.65,14.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAlBQQgHAAAAgGIAAhYQABgbgfAAQgMAAgKACQgIACAAAHIAABoQAAAGgGAAIgcAAQgHAAABgGIAAiBQgBgKAJgCQAggMAeAAQBHAAABA7IAABeQgBAGgGAAg");
	this.shape_21.setTransform(42.6,13.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAgBRQgEAAAAgFIAAgCQACgFAAgGQAAgQgQgIQgHgDgbgJQgygPAAgjQAAgaATgPQASgPAggBQAkAAAcARQAEADAAAEIgCAEIgJAVQgDAFgEAAIgFgBQgZgOgVgBQgbAAAAAQQAAAJAQAHIAiAKQAyAQAAAoQAAAMgCAGQgCAHgGAAg");
	this.shape_22.setTransform(7.375,13.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag2A8QgUgVAAgnQAAgkAWgWQAWgXAkAAQAeAAAgAMQAHADAAAKIAABxQAAAJgHADQgfANggAAQgmAAgVgWgAgVghQgMAMAAAVQAAAXAMALQAKAKAQAAQANAAAIgDQAJgCgBgGIAAhBQABgGgJgCQgLgDgKAAQgQAAgKAKg");
	this.shape_23.setTransform(24.1,14.125);

	var maskedShapeInstanceList = [this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,86.8,22.3), null);


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
	mask.graphics.p("ArDLBIAA2BIWHAAIAAWBg");
	mask.setTransform(70.8,70.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C1AED4").ss(1.2).p("Ai1n7QjmBNhbC2QhcC4BPDtQBPDrC7BbQC9BbDzhRQDlhNBbi5QBbi6hOjpQhQjvi7hZQi6hZj0BSg");
	this.shape.setTransform(70.7521,70.5036);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(14.5,14.8,112.5,111.5), null);


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
	this.shape.graphics.f("#66FF66").s().p("AuhDZIAAmyIdDAAIAAGyg");
	this.shape.setTransform(93.025,21.75);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.1,43.5);


(lib.Symbol45 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(54.5,54.3,1,1,0,0,0,54.5,54.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(0,0,108.9,108.7), null);


(lib.Symbol39copy = function(mode,startPosition,loop,reversed) {
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
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(1));

	// Layer_3_copy
	this.instance = new lib.Symbol17();
	this.instance.setTransform(76,83.9,1,1,0,0,0,96.9,101.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.4,-49.9,248.3,253.9);


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

	// Layer_9
	this.instance = new lib.Symbol17();
	this.instance.setTransform(76,83.9,1,1,0,0,0,96.9,101.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(-20.9,-17.3,193.70000000000002,202.4), null);


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
	this.instance = new lib.Symbol48();
	this.instance.setTransform(73.25,81.5,1,1,0,0,0,74.4,10.7);

	this.instance_1 = new lib.Symbol47();
	this.instance_1.setTransform(73.25,69.05,1,1,0,0,0,64,5.7);

	this.instance_2 = new lib.Symbol46();
	this.instance_2.setTransform(73.2,54.7,1,1,0,0,0,67.4,5.6);

	this.instance_3 = new lib.Symbol36();
	this.instance_3.setTransform(73.15,27.05,1,1,0,0,0,67,5.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGQgCgDAAgDQAAgCACgDQACgCADAAQAEAAACACQACACAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape.setTransform(131.225,8.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAcQgIgEgEgHIAIgGQAEAGAEADQAFADAGAAQAHAAADgDQAEgCAAgEIgCgFQgCgCgEgBIgNgDQgJgBgEgEQgEgEAAgGQAAgFADgEQADgEAFgDQAGgCAGAAQAHAAAIADQAGAEADAGIgIAGQgCgGgFgCQgFgDgEAAQgEAAgDACQgDABgBACQgCACAAADQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQABACAFACIAOADQAIABAEADQAEAFAAAFQAAAGgDADQgDAFgGACQgEACgIAAQgJAAgGgDg");
	this.shape_1.setTransform(126.425,6.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAcQgIgEgDgHQgDgHgBgKQABgJADgHQAEgGAHgEQAGgEAHAAQAIAAAHAEQAFADAEAGQACAGAAAIIAAADIAAADIgtAAIADAJQACAFAFADQAEADAFAAQAIAAADgDQADgBAEgFIAHAEQgBAEgFADIgHAFIgMABQgHAAgGgDgAgJgTQgEADgCAFIgCAGIAjAAQAAgIgFgEQgFgFgHAAQgFAAgFADg");
	this.shape_2.setTransform(119.85,6.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBAmQgDgCgDgEQgCgDAAgGIAAgkIgMAAIAAgIIAMAAIAAgPIAJgCIAAARIAVAAIAAAIIgVAAIAAAjQAAADACADQACACAEAAIAGgBIAFgEIADAIQgCADgEACQgEABgFAAQgFAAgDgBg");
	this.shape_3.setTransform(113.975,5.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMAcQgIgEgDgHQgDgIgBgJQABgHADgJQAEgGAHgEQAGgEAHAAQAIAAAHAEQAFADAEAGQACAGAAAIIAAADIAAADIgsAAQAAAGACADQACAFAFADQAEADAFAAQAIAAADgDQAEgCADgEIAHAEQgBAEgFADQgCADgGACQgEABgGAAQgIAAgGgDgAgIgTQgEACgDAGIgCAGIAjAAQAAgHgEgFQgGgFgHAAQgFAAgEADg");
	this.shape_4.setTransform(108.05,6.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIArQgFgDgCgDIgEgFIAAALIgJAAIAAhWIAKAAIAAAlQACgEAFgDQAGgEAGAAQAHAAAHAEQAFADAEAHQAEAGAAAKQAAAKgEAHQgDAHgGAEQgGADgIAAQgEAAgFgBgAgJgGQgEAEgDADQgCAGAAAGQAAAGACAGQADAFAEADQAFADAEAAQAJAAAFgGQAFgHAAgKQAAgKgFgFQgFgHgJAAQgFAAgEADg");
	this.shape_5.setTransform(101.05,5.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAeQgEgDgDgDQgDgDAAgGQAAgHAFgEQAEgEAJgBIAUgEIAAgDQAAgHgDgDQgFgEgEAAQgHAAgEADQgFADgBAGIgIgFQACgHAHgEQAHgEAJAAQAFAAAGACQAFACADAFQADAEAAAHIAAAcQAAAFAFAAIAEgBIgBAIIgGABIgGgBIgEgEIgCgEIgCAEQgEADgEABIgIABQgFAAgFgBgAgGAFQgFABgEADQgDABAAAFQAAAEADACQADACAGAAIAGgBIAFgDQABAAADgEQABgDAAgEIAAgGg");
	this.shape_6.setTransform(93.875,6.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEArIAAg7IAJAAIAAA7gAgEgdQgCgDAAgDQAAgDACgCQACgCACAAQAEAAABACQACABAAAEQAAADgCADQgCACgDAAQgBAAgDgCg");
	this.shape_7.setTransform(88.675,5.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOApQgHgEgDgHQgDgHgBgKQAAgKAFgGQAEgGAGgEQAGgEAHAAQAHAAAGAEQADACACAEIAAgkIALAAIAABWIgJAAIgBgKIgDAEQgCAEgGABQgEACgEAAQgHAAgHgDgAgNgCQgFAEAAALQAAALAFAGQAFAGAIAAQAFAAAFgDQAEgDACgFQACgFAAgIQAAgHgCgEQgCgDgEgEQgFgDgFAAQgIAAgFAHg");
	this.shape_8.setTransform(83.15,5.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAHAoIAAhDQgFAFgEACQgGAEgFAAIgCgIIAFgCIANgIIAFgFIAIAAIAABPg");
	this.shape_9.setTransform(72.625,5.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNAcQgGgEgEgHQgEgHAAgKQAAgIAEgIQAEgHAGgDQAHgEAHAAQAIAAAGAEQAGADADAGQAEAGAAAIIgBADIAAADIgsAAIACAJQACAFAFADQAEADAFAAQAIAAADgDQAEgCADgEIAHAEQgCAEgDADQgEADgFACQgEABgGAAQgIAAgHgDgAgIgTQgEACgDAGIgCAGIAjAAQgBgHgEgFQgEgFgIAAQgFAAgEADg");
	this.shape_10.setTransform(63.475,6.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbArIAAhUIAIAAIABAKIADgEQADgEAFgBQAGgCADAAQAGAAAHAEQAFADAEAHQAFAHAAAKQAAAKgFAGQgDAHgHAEQgFADgIAAQgHAAgFgDQgFgDgCgEIAAAigAgIgfQgGAEgBAEQgDAFAAAHQAAAGADAFQACAFAEADQAFADAEAAQAJAAAFgGQAFgGAAgKQAAgKgFgGQgFgHgIAAQgGAAgDADg");
	this.shape_11.setTransform(56.45,7.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAqIgGgDIACgJIAGADIAFACIAGgCQADgCACgGIADgIIgZg7IALAAIASAxIASgxIAKAAIgcBFIgEAJQgCAEgEABQgDACgFAAIgHgBg");
	this.shape_12.setTransform(49.325,7.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgBAmQgDgCgDgEQgCgDAAgGIAAgkIgMAAIAAgIIAMAAIAAgPIAJgCIAAARIAVAAIAAAIIgVAAIAAAjQAAADACADQACACAEAAIAGgBIAFgEIADAIQgCADgEACQgEABgFAAIgIgBg");
	this.shape_13.setTransform(43.875,5.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIALQAEgBACgCIACgEQACgBABgDIAAgBIgCABIgBAAIgDgBIgCgBIgCgFIACgEIACgDIADgBQADAAACACIADADIABAHQAAADgCAEQAAADgDAEQgEADgDACg");
	this.shape_14.setTransform(35.8,9.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfAoIAAhPIAZAAQASAAAKALQAKAKABASQgBAUgKAJQgKALgSAAgAgWAfIARAAQAMAAAIgIQAHgIABgPQgBgOgHgHQgIgJgMAAIgRAAg");
	this.shape_15.setTransform(30.5,5.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAHAoIAAhDIgIAHQgHAEgFAAIgCgIIAFgCIANgIIAFgFIAIAAIAABPg");
	this.shape_16.setTransform(23.075,5.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAoIAAhGIgbAAIAAgJIA/AAIAAAJIgbAAIAABGg");
	this.shape_17.setTransform(17.625,5.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAGAkIAAgTIggAAIAAgGIAfguIAJAAIAAAtIAMAAIAAAHIgMAAIAAATgAAEgWIgVAgIAXAAIABgmIgBAAg");
	this.shape_18.setTransform(143.85,116.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVAlIAAgHIARgPIAKgLQAEgEACgEQACgEAAgFQAAgHgEgEQgEgEgGAAQgHAAgEAFQgEAEgBAJIgHgEQABgHADgFQADgEAFgDQAEgDAHAAQAFAAAEACQAEABADADQADADACAFQABAEAAAFQAAAHgDAGQgDAGgHAHQgFAFgNALIAHAAIACgBIAYAAIAAAJg");
	this.shape_19.setTransform(138.325,116.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgRAcQgHgKAAgSQAAgRAHgKQAGgJALAAQAMAAAGAJQAHAKAAARQAAASgHAKQgGAJgMAAQgLAAgGgJgAgIgZQgEAEgCAGQgCAGAAAJQAAAKACAGQACAGAEAEQAEADAEAAQAGAAADgDQADgDADgHQACgJAAgHQAAgGgCgJQgCgHgEgDQgEgEgFAAQgEAAgEAEg");
	this.shape_20.setTransform(132.525,116.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVAlIAAgHIARgPQAHgGADgFQAEgEACgEQACgEgBgFQABgHgEgEQgEgEgGAAQgHAAgEAFQgEAEAAAJIgIgEQACgIACgEQADgEAFgDQAEgDAHAAQAFAAAEACQAEABADADQADADABAFQACADAAAGQAAAHgCAGQgFAHgGAGQgFAFgNALIAHAAIACgBIAYAAIAAAJg");
	this.shape_21.setTransform(126.6,116.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAsIAdhXIAJAAIgfBXg");
	this.shape_22.setTransform(121.75,116.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMAgQgGgEgDgJQgDgIAAgLQAAgMAEgIQACgHAHgFQAGgEAHAAQAFAAAEABQAFACACADQADADACAGIgHAEQgCgFgDgDQgEgDgGAAQgDAAgEACQgDADgCAEQgDAEgBAFQgBAGAAAGIAAACIAAAAQACgFACgCQACgCAFgCIAHgCQAHAAAFADQAEACAEAFQADAGAAAHQAAAHgDAFQgEAGgEACQgFADgIAAQgIAAgFgFgAgGABIgFAFIgCAIIACAHQACAEAEACQACACAEAAQAGAAAFgEQAEgEAAgHQAAgFgCgDQgBgDgEgCQgDgBgFAAQgDAAgEABg");
	this.shape_23.setTransform(116.725,116.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRAcQgHgKAAgSQAAgSAHgJQAHgJAKAAQAMAAAGAJQAHAJAAASQAAASgHAKQgGAJgMAAQgKAAgHgJgAgIgZQgEAEgCAGQgCAGAAAJQAAAKACAGQACAGAEAEQAEADAEAAQAFAAAEgDQAEgDACgHQABgGABgKQgBgIgBgHQgCgGgEgEQgFgEgEAAQgEAAgEAEg");
	this.shape_24.setTransform(110.7,116.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgQAFIAAgJIAhAAIAAAJg");
	this.shape_25.setTransform(105.2,117.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgRAcQgHgKAAgSQAAgRAHgKQAGgJALAAQAMAAAGAJQAHAKAAARQAAASgHAKQgGAJgMAAQgLAAgGgJgAgIgZQgDADgDAHQgCAGAAAJQAAAKACAGQADAHADADQAEADAEAAQAGAAADgDQAEgEACgGQACgGAAgKQAAgJgCgGQgCgGgEgEQgEgEgFAAQgEAAgEAEg");
	this.shape_26.setTransform(99.725,116.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgBACgDQACgCACAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQACACAAACQAAADgCACQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAQgCAAgCgCg");
	this.shape_27.setTransform(95.725,119.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAGAkIAAg9QgEAEgDADQgEACgGACIgCgIQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBIAGgDIAFgEIAEgEIAHAAIAABHg");
	this.shape_28.setTransform(92.225,116.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDAcIgVg3IAJAAIAPAuIARguIAIAAIgVA3g");
	this.shape_29.setTransform(88.325,117.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQAFIAAgJIAhAAIAAAJg");
	this.shape_30.setTransform(83.6,117.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgMAjQgGgDgDgEQgCgFAAgGQgBgIAEgEQACgEAHgCIAAAAQgDgBgEgFQgCgFgBgFQABgGACgFQAEgEADgCQAFgCAGAAQAHAAAFACQAEACADAEQACAFABAGQgBAFgCAEQgDAFgEACIAAAAQAHACACAEQADAEAAAIQAAAGgCAFQgDAEgGADQgHACgGAAQgGAAgGgCgAgIAEQgDABgCAEQgCACAAAFQAAAEACADQABADAEABQAEACAEAAQAFAAADgCQAFgBABgDQACgDAAgEQAAgFgCgCQgDgEgDgBQgDgCgFAAQgDAAgFACgAgJgZQgDADAAAGQAAAFADADQAEADAFAAQAGAAADgDQAEgEAAgEQAAgGgEgDQgDgDgGAAQgFAAgEADg");
	this.shape_31.setTransform(78.15,116.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgOAhQgHgFgCgHIAIgFIADAHQADADADACQADACAFAAQADAAAEgCQADgCACgDIACgHQAAgEgCgDQgCgDgCgBQgDgBgFAAIgCAAIgCAAIAAgIIACAAQAIAAADgCQADgEAAgGQAAgGgDgDQgDgDgHAAQgFAAgDADQgDACgDAGIgIgEIAFgIIAIgFQAGgDAEAAQAGAAAFADQAFADACAEQACAEAAAFIgBAHIgCAGIgEAEIgFABIAAAAQAEAAACACIAEADIADAFIABAFQAAAHgDAFQgDAFgFACQgFAEgHAAQgIAAgHgFg");
	this.shape_32.setTransform(72.225,116.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAHAkIAAgTIggAAIAAgGIAdguIALAAIAAAtIAMAAIAAAHIgMAAIAAATgAADgWIgUAgIAYAAIAAgmIAAAAg");
	this.shape_33.setTransform(66.5,116.475);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgOAgQgFgEgDgIIAIgEQACAGADADQADAEAGAAIAIgCQAEgDABgDQACgCAAgGQAAgFgCgEIgFgEQgEgCgEAAIgFABIgFABIgEAEIgHgBIAEgnIAlAAIAAAIIgeAAIgDAXIAAABQADgDAEgBQAEgCAEAAQAGAAAFADQAFADADAEQACAGAAAHQAAAGgCAEQgBAEgDADIgIAFQgEACgFAAQgIAAgGgFg");
	this.shape_34.setTransform(60.725,116.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgSAcQgGgKAAgSQAAgSAGgJQAIgJAKAAQAMAAAHAJQAGAJAAASQAAASgGAKQgHAJgMAAQgKAAgIgJgAgIgZQgEAEgCAGQgBAHAAAIQAAAKABAGQADAHADADQAEADAEAAQAFAAAEgDQADgDADgHQABgGAAgKQAAgIgBgHQgCgGgEgEQgFgEgEAAQgEAAgEAEg");
	this.shape_35.setTransform(54.85,116.475);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAGAkIAAgTIgfAAIAAgGIAdguIAKAAIAAAtIANAAIAAAHIgNAAIAAATgAgRAKIAXAAIABgmg");
	this.shape_36.setTransform(48.85,116.475);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgUAlIAAgHIARgPQAGgGADgFQAFgEABgEQACgEAAgFQAAgHgEgEQgEgEgGAAQgGAAgFAFQgDAFgBAIIgIgEQACgIACgEQADgEAFgDQAEgDAHAAQAGAAADACQAEABADADQADADACAFQACADAAAGQAAAHgEAGQgDAHgHAGQgFAFgNALIAHAAIACgBIAYAAIAAAJg");
	this.shape_37.setTransform(43.275,116.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgQAFIAAgJIAhAAIAAAJg");
	this.shape_38.setTransform(38.475,117.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLAjQgFgCgEgEIgHgIIAHgGIAGAHQAEAEADABQAGACADAAQAGAAADgBIAGgEQACgDAAgEQAAgEgCgCQgCgDgHgBIgOgEQgGgCgEgCQgDgCgCgEQgCgDAAgFQAAgFACgGQAEgFAFgDQAFgCAIAAQAJAAAGADQAHAFAEAHIgHAGQgDgHgFgDQgFgDgHAAQgEAAgEABQgEADgBACQgCACAAAEQAAADACAEQADADAGABIAOAEQAKABADAFQAEAFABAGQAAAHgEAEQgDAFgGADQgGACgHAAQgHAAgGgCg");
	this.shape_39.setTransform(32.8,116.475);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgTAeQgHgHAAgOIAAgtIAIAAIAAAqQABAMAEAFQAFAGAIAAQAJAAAFgGQAEgFAAgMIAAgqIAIAAIAAAtQABANgIAIQgGAHgNAAQgLAAgIgHg");
	this.shape_40.setTransform(26.3,116.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgQAFIAAgJIAhAAIAAAJg");
	this.shape_41.setTransform(20.35,117.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgDAkIAAg/IgXAAIAAgIIA2AAIAAAIIgYAAIAAA/g");
	this.shape_42.setTransform(15.9,116.475);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAXAkIgIgUIgdAAIgHAUIgJAAIAbhHIAIAAIAaBHgAgMAIIAZAAIgNgjg");
	this.shape_43.setTransform(10.65,116.475);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAZAkIABhAIgXBAIgGAAIgVhAIAABAIgIAAIAAhHIANAAIATA9IAUg9IAMAAIAABHg");
	this.shape_44.setTransform(3.2,116.475);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgFAFQgCgBAAgEQAAgCACgDQADgCACAAQADAAACACQADADAAACQAAAEgDABQgCADgDAAQgCAAgDgDg");
	this.shape_45.setTransform(123.9,99.45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgQAkQgJgFgCgJIAJgFQACAGACACQADAEAEABQAEACAFAAQAEAAAFgCIAGgFQABgEAAgEQAAgEgBgDQgCgDgDgBIgJgCIgGAAIAAgIIADAAQAJAAAEgDQAEgDAAgIQAAgGgEgDQgEgDgHgBQgGABgFADQgEADgCAGIgJgFQACgFAEgEQAEgEAFgBQAGgDAFAAQAJAAAFADQAGADACAFQADAEAAAGIgCAIQAAADgDACIgFAFIgFABIAHABQADACACACQADADAAACIABAHQAAAHgDAFQgEAGgGADQgGADgIAAQgJAAgIgFg");
	this.shape_46.setTransform(118.675,96.15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgIAnQAAgNADgNQAEgNAFgKQAGgKAJgJIgvAAIAAgJIA5AAIAAAJQgKAKgGALQgGAKgDAMQgDAMAAANg");
	this.shape_47.setTransform(111.975,96.15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAHAnIAAhBQgFAEgEACIgLAEIgCgJIAFgBIANgIIAFgEIAIAAIAABNg");
	this.shape_48.setTransform(105.725,96.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAGAnIAAg9IABgEIgJAGIgLAEIgCgJIAFgBIAHgDIAGgFIAFgEIAIAAIAABNg");
	this.shape_49.setTransform(101.075,96.15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgUAeQgJgKABgUQgBgUAJgKQAHgKANAAQAOAAAIAKQAHALAAATQAAATgHALQgIALgOAAQgMAAgIgLgAgKgcQgFAEgCAHQgCAGABALQgBALACAGQACAIAFADQAEAEAGAAQAGAAAEgEQAFgDACgIQACgHAAgKQAAgJgCgIQgCgHgFgEQgEgDgGAAQgGAAgEADg");
	this.shape_50.setTransform(95.5,96.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgUAeQgJgLAAgTQAAgTAJgLQAHgKANAAQAOAAAIAKQAIALAAATQAAATgIALQgIALgOAAQgNAAgHgLgAgKgcQgEAEgCAHQgDAIAAAJQAAAKADAHQACAIAEADQAEAEAGAAQAHAAAEgEQAEgDACgIQADgHAAgKQAAgJgDgIQgCgHgEgEQgEgDgHAAQgGAAgEADg");
	this.shape_51.setTransform(88.025,96.175);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgNAbQgGgEgEgGQgEgIAAgJQAAgJAEgHQAEgHAGgEQAHgDAHAAQAJAAAFADQAHAEACAGQAEAGAAAIIgBADIAAADIgsAAQAAAFACAEQACAFAFADQAFADAEAAQAGAAAFgDQAFgCACgFIAHAFIgFAHQgEADgFABQgEACgGAAQgIAAgHgEgAgIgTQgFADgCAFIgCAGIAjAAQAAgIgFgEQgEgFgIAAQgFAAgEADg");
	this.shape_52.setTransform(80.825,97.125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgEAdQgDgCAAgEQAAgDADgCQABgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgBgCgAgEgRQgDgCAAgDQAAgEADgCQABgCADAAQAEAAACACQACACAAAEQAAADgCACQgCACgEAAQgDAAgBgCg");
	this.shape_53.setTransform(75.575,97.125);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgPAzQAIgIAFgHQADgHADgKQACgIAAgLQAAgKgCgIQgDgKgDgHQgFgIgIgHIAGgGQAMAMAGANQAHARAAAOQAAAPgHAQQgGAPgMALg");
	this.shape_54.setTransform(71.525,96.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAHAnIAAhBQgEAEgFACIgLAEIgCgJIAFgBIAHgDIAGgFQADgCACgCIAIAAIAABNg");
	this.shape_55.setTransform(66.775,96.15);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgIAfQgHgQAAgPQAAgOAHgRQAGgNAMgMIAGAGQgHAGgGAJQgDAIgDAJQgCAIAAAKQAAALACAIQADAKADAHQAFAIAIAHIgGAGQgLgLgHgPg");
	this.shape_56.setTransform(63.275,96.75);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgOAmQgGgCgEgGQgEgFAAgHQAAgHAEgFQAEgGAHgBQgFgDgDgEQgDgFAAgGQAAgHADgEQAEgFAFgCQAFgDAHAAQAJAAAEADQAGACADAFQADAEAAAHQAAAGgDAFQgDAFgFACQAGABAFAFQAEAFAAAIQAAAHgEAFQgFAGgFACQgGADgJAAQgHAAgHgDgAgJAEQgDABgDAEQgDADAAAFQAAAFADADQACADAEACQAEACAFAAQAGAAAEgCQAFgCACgDQACgDAAgFQAAgFgCgDQgDgDgEgCQgGgCgEAAQgDAAgGACgAgKgcQgEAEAAAGQAAAGAEADQAEADAGAAQAHAAAEgDQAEgEAAgFQAAgGgEgEQgDgDgIAAQgGAAgEADg");
	this.shape_57.setTransform(57.275,96.175);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgIAjQADgBACgCIAEgFIACgFIgBAAIgBABIgBAAIgDgBIgCgCQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAFACIADAEIABAGIgCAIQgBAEgCADIgHAFgAgFgZQgBgCAAgDQAAgEABgCQADgCACAAQAEAAABACQADACAAAEQAAADgDACQgBACgEAAQgCAAgDgCg");
	this.shape_58.setTransform(51.8,97.925);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgVAeQgHgKgBgUQABgUAHgKQAJgKAMAAQANAAAJAKQAHAKABAUQgBAUgHAKQgJALgNAAQgMAAgJgLgAgKgcQgEAEgCAHQgDAGAAALQAAALADAGQACAHAEAEQAEAEAGAAQAHAAAEgEQAFgEABgHQADgGAAgLQAAgLgDgGQgBgGgFgFQgEgDgHAAQgGAAgEADg");
	this.shape_59.setTransform(46.3,96.175);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgYAoIAAgIIAfgbQAFgFACgEQACgFAAgFQAAgIgEgEQgFgEgHAAQgIAAgEAFQgFAFgCAJIgIgEQACgIADgFQADgFAGgDQAGgDAHAAQAGAAAFABQAFACADAEQADACACAGQACAEAAAGQAAAHgDAHQgFAHgHAHQgHAGgPAMIAEAAIAFgBIAeAAIAAAJg");
	this.shape_60.setTransform(39,96.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgUAeQgIgKAAgUQAAgUAIgKQAHgKANAAQAOAAAHAKQAJAKgBAUQABAUgJAKQgHALgOAAQgMAAgIgLgAgKgcQgEAFgDAGQgBAGAAALQAAALABAGQADAHAEAEQAEAEAGAAQAHAAADgEQAFgEADgHQABgJAAgIQAAgIgBgJQgDgHgFgEQgDgDgHAAQgGAAgEADg");
	this.shape_61.setTransform(31.85,96.175);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgYAoIAAgIIATgPIAMgMQAEgFADgEQACgFAAgFQAAgIgFgEQgDgEgIAAQgIAAgFAFQgFAFAAAJIgJgEQAAgIAEgFQAEgFAFgDQAHgDAHAAIAKABIAJAGIAGAIQABAEAAAGQAAAHgEAHQgDAGgJAIQgGAHgPALIAIgBIAfAAIAAAJg");
	this.shape_62.setTransform(24.55,96.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgLAdQgGgDgEgDQgEgEgCgGIAJgEQADAHAFADQAEAEAHAAQAGAAADgDQAEgDAAgEQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQgCgCgEgBIgJgDQgIgCgEgDQgDgEAAgGQAAgEADgFQACgDAFgDQAFgCAHAAQAIAAAHADQAHAFACAHIgJAEIgDgGIgGgEQgDgBgEAAQgFAAgEACQgDADAAAEQAAADACACIAGADIALADQAGACAEADQADADAAAGQAAAGgDAEQgDAFgFACQgGACgGAAQgFAAgGgCg");
	this.shape_63.setTransform(125.075,41.125);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgPAbQgFgEgEgFQgCgHAAgHQAAgJADgHQAEgJAHgEQAHgFAKAAQAHAAAFADQAFADADAFQADAGgBAGIgBAKIgrAAIAAACQAAAEACAFQADAEADADQAEACAFAAQAHgBADgCQAFgDACgDIAHAEIgGAHIgJAFQgFABgEAAQgJAAgGgEgAgGgTQgEACgCAEIgEAIIAiAAIAAgDQAAgEgBgDQgCgDgEgCQgDgCgFAAQgDAAgGADg");
	this.shape_64.setTransform(118.65,41.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgJAkQgFgCgBgFQgCgDABgHIAIggIgMAAIACgJIAMAAIADgMIAJgDIgEAPIATAAIgCAJIgSAAIgHAgQgCAHADABQAEADACAAIAFgBIAEgCIACAIIgGACIgGABQgFABgEgDg");
	this.shape_65.setTransform(113.275,40.35);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgOAbQgHgEgCgFQgEgHAAgHQAAgJAEgHQAEgJAHgEQAHgFAKAAQAHAAAFADQAFADADAFQACAGAAAGIgBAKIgrAAIAAACQAAAEADAFQACAEADADQAEACAFAAQAHgBADgCQAEgDACgDIAIAEIgHAHIgIAFQgEABgFAAQgJAAgFgEgAgFgTQgFACgCAEIgDAIIAhAAIAAgDQAAgEgCgDQgBgDgDgCQgFgCgDAAQgFAAgEADg");
	this.shape_66.setTransform(107.25,41.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgIAqQgEgBgCgEIgEgHIgDANIgKAAIAVhWIAJAAIgJAlQAEgFAFgDQAEgDAGAAQAHAAAFADQAEADAEAGQADAFAAAJQAAAJgDAFQgCAGgEAFQgFAFgFADQgEACgIAAQgFAAgEgCgAgBgGIgHAFQgDADgCAFQgBAGAAAGQAAAHAEAFQAEAFAHAAIAIgCIAHgGQADgEACgEQABgFAAgGQAAgHgCgCQgCgFgDgBQgEgCgFAAQgFAAgCACg");
	this.shape_67.setTransform(99.975,39.775);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgUAbQgFgCgDgHQgDgGAAgHQAAgHACgHIAHgLQAFgFAFgDQAEgCAIAAQAEAAAEABIAHAGQADADABAEIADgNIAKAAIgOA7IgJAAIADgLQgDAFgGADQgEAEgGAAQgIAAgFgEgAgIgUQgEACgDAEQgDADgCAGIgBAKQAAAGACAEQABADAEADQAEACAFAAQAEAAADgCQAEgDADgDIAFgJQABgFAAgFQAAgGgCgDQgCgFgDgCQgFgCgDAAQgDAAgFACg");
	this.shape_68.setTransform(92.875,41.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgOArIAOg7IAIAAIgMA7gAADgeQgBAAAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgDADgDQACgCACAAQADAAADACQAAAAAAABQAAAAABABQAAAAAAABQAAABAAABQAAADgCACQgDADgDAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_69.setTransform(87.8,39.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgkAnIAShOIAWAAQALAAAHAFQAHAEAEAHQAEAIAAAJQAAAJgDAIQgEAKgGAFQgEAGgKAEQgHADgKAAgAgYAeIATAAQAGAAAGgCQAHgDAEgFIAGgMQACgGAAgHQAAgIgCgEQgCgGgGgDQgFgEgIAAIgNAAg");
	this.shape_70.setTransform(81.775,40.15);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AALAeIAJgjQABgHgDgFQgDgEgHgBQgGABgDACQgEADgDAEQgDAFgBAHIgIAeIgJAAIANg7IAJAAIgCAJQADgEAEgCQAFgEAIAAQAHAAAFAEQAEADACAFQADAHgDAGIgIAjg");
	this.shape_71.setTransform(69.7,41.05);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgOArIAOg7IAIAAIgMA7gAADgeQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgDADgDQACgCACAAQAEAAACACQAAAAAAABQAAAAABABQAAAAAAABQAAABAAABQAAADgCACQgDADgDAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_72.setTransform(65.05,39.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgKAnQgDgFACgIIAPhFIAJAAIgPBFQgBAGACACQACACADAAIADAAIADgBIgCAIIgEABIgEAAQgGAAgEgFg");
	this.shape_73.setTransform(61.535,39.775);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgRAlQgIgDgFgIQgEgIAAgLQAAgHACgJQAEgKAEgGQAFgGAIgFQAJgEAIAAQAHAAAGADQAGACAEAFQAEAEACAJIgKADQgCgJgFgEQgGgEgHAAQgHAAgFAEQgFADgEAFIgGAMIgCANQAAAIADAGQADAGAGADQAFADAHAAQAHAAAFgDQAFgFACgEIAJAEQgEAIgIAEQgGAFgLAAQgJAAgHgEg");
	this.shape_74.setTransform(55.975,40.125);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgFAGQgCgCAAgEQAAgDACgBQADgDACAAQADAAADADQACABAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_75.setTransform(45.775,43.425);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AACAsQgHAAgDgEQgDgDAAgJIAAhHIAJAAIAABHQAAAFACABQABACADAAIAEAAIAEgCIgBAJIgEABg");
	this.shape_76.setTransform(42.825,39.775);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAQAeQgEgCgBgDIgBgCIgDACQgCADgFACIgIABQgFAAgFgBQgFgDgCgDQgDgEAAgFQAAgHAFgEQAEgEAIgBIAVgEIAAgDQAAgGgDgEQgEgEgGAAQgGAAgEADQgEACgDAGIgHgEQACgHAGgEQAGgEALAAQAGAAAEACQAGACADAFQADAEAAAHIAAAcQAAAFAEAAIAFgBIgBAIQgCABgEAAIgGgBgAgGAFQgHABgCACQgDADAAAEQAAADADADQADACAFAAIAHgBQADgBACgCQACgBACgDQABgDAAgEIAAgHg");
	this.shape_77.setTransform(37.325,41.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAAAmQgFgDgCgCQgBgDgBgHIAAgjIgMAAIAAgJIAMAAIAAgPIAJgCIAAARIAVAAIAAAJIgVAAIAAAiQAAAEACACQACACAFAAIAGgBIAEgDIADAIIgGAEIgJABQgEAAgDgBg");
	this.shape_78.setTransform(27.175,40.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgMAbQgIgDgDgIQgEgGAAgKQAAgJAEgHQADgGAIgFQAFgDAIAAQAJAAAFADQAHAFACAFQADAHAAAHIAAADIAAADIgsAAQAAAFACAEQADAGAEACQAEADAGAAQAGAAAEgCIAHgHIAHAEIgFAHIgIAFIgLABQgIAAgGgEgAgJgTQgEADgCAFIgCAGIAjAAQAAgIgFgEQgFgFgHAAQgFAAgFADg");
	this.shape_79.setTransform(21.3,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-4.6,0.5,152.29999999999998,120.4), null);


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

	// timeline functions:
	this.frame_228 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(228).call(this.frame_228).wait(1));

	// Layer_5
	this.instance = new lib.Symbol19();
	this.instance.setTransform(110.7,0.9,0.3943,0.3942,0,0,0,73.5,105.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(208).to({_off:false},0).to({y:-10.8,alpha:0.5391},20).wait(1));

	// Layer_10
	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(100.3,57.6,1,1,10.4636,0,0,27.8,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(122).to({rotation:0.0428,x:143.7,y:29.75},16,cjs.Ease.quadInOut).to({_off:true},1).wait(90));

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_122 = new cjs.Graphics().p("AjwDwQhjhjAAiNQAAiMBjhjQBkhkCMAAQCNAABkBkQBjBjAACMQAACNhjBjQhkBkiNAAQiMAAhkhkg");
	var mask_graphics_123 = new cjs.Graphics().p("AhbFcQhkgehKhZQhehwAAiVQATiFBwhdQBwhdCVAAQAeAAAdAEQBkAeBKBZQBeBwAACVQgTCEhwBeQhwBdiVAAQgeAAgdgEg");
	var mask_graphics_124 = new cjs.Graphics().p("AiBFoQhdgrhFhkQhXh7AAifQAlh8B8hXQB8hXCgAAQAgAAAeADQBeAsBFBkQBXB7AACgQglB7h9BXQh7BXigAAQggAAgfgEg");
	var mask_graphics_125 = new cjs.Graphics().p("AimF1QhXg6hBhtQhQiIAAipIAAAAQA4hzCJhRQCIhQCpAAQAiAAAhADQBWA6BBBtQBRCIAACpQg4ByiJBRQiIBRipAAQgiAAghgDg");
	var mask_graphics_126 = new cjs.Graphics().p("AjMGBQhPhHg8h3QhLiVAAiyIAAAAQBLhqCVhLQCVhKCzAAQAkAAAjADQBQBHA7B4QBLCUAACyQhLBqiVBLQiVBKiyAAQgkAAgkgDg");
	var mask_graphics_127 = new cjs.Graphics().p("AjxGOQhKhWg2iBQhFigAAi9QBehhCihEQCghFC9AAQAmAAAlAEQBKBVA2CBQBFChAAC7QheBhiiBFQigBEi8AAQgmAAgmgCg");
	var mask_graphics_128 = new cjs.Graphics().p("AkXGaQhChjgyiLQg+isAAjHQBwhYCug+QCsg+DHAAQAoAAAoACQBCBjAyCMQA+CrAADHQhwBYiuA+QisA+jHAAQgoAAgogCg");
	var mask_graphics_129 = new cjs.Graphics().p("Ak8GmQg8hxgtiVQg4i4AAjQIAAAAQCDhPC7g4QC4g4DRgBQAqABApACQA8BxAtCVQA4C4AADQQiDBPi7A5Qi4A4jQAAQgqgBgqgCg");
	var mask_graphics_130 = new cjs.Graphics().p("AlhGzQg2iAgoieQgxjEAAjaIAAAAQCVhHDHgyQDFgxDaAAQAsAAAsABQA1CAAoCfQAyDEgBDaQiVBGjHAyQjEAxjaABQgsAAgsgCg");
	var mask_graphics_131 = new cjs.Graphics().p("AmHG/QgviNgjipQgrjQAAjjIAAgBQCog+DUgrQDRgsDjAAQAvAAAtACQAvCNAjCpQArDQAADkQioA9jUAsQjQAsjjAAQgvAAgugCg");
	var mask_graphics_132 = new cjs.Graphics().p("AmtHLQgoibgeizQgljbAAjuIAAAAQC7g1DggmQDdglDuAAQAwABAwABQAoCbAdCyQAmDdAADtQi7A1jgAlQjdAljtAAQgxAAgwgBg");
	var mask_graphics_133 = new cjs.Graphics().p("AnSHXQgiiogZi9QgejoAAj3IAAgBQDNgsDsgfQDqgfD3AAIBlABQAgCpAZC9QAfDpABD2QjOAsjtAfQjoAgj3AAQgzAAgygCg");
	var mask_graphics_134 = new cjs.Graphics().p("An4HkQgai3gUjGQgZj1AAkAIAAgBQDggjD5gZQD2gZEBAAIBoABQAbC3ATDHQAZD1AAEAQjgAjj5AZQj1AZkAAAIhqgBg");
	var mask_graphics_135 = new cjs.Graphics().p("AodHwQgUjFgPjPQgTkCAAkJIAAgBQDzgbEGgSQEBgTELAAIBsABQAVDFAODRQATEBAAEJQjzAakGATQkBATkJAAIhugBg");
	var mask_graphics_136 = new cjs.Graphics().p("ApDH8QgNjSgLjaQgLkNgBkUIAAAAQEGgSESgNQEOgMEUAAIBxABQANDSAKDbQANENAAETQkGASkSAMQkOANkSAAIhzgBg");
	var mask_graphics_137 = new cjs.Graphics().p("AppIIQgGjfgFjlQgGkZAAkdIAAgBQEYgJEegGQEbgGEeAAIB0AAQAHDhAFDkQAGEaAAEcQkYAJkfAHQkZAGkdAAIh3gBg");
	var mask_graphics_138 = new cjs.Graphics().p("AqOIVIAAwpIUdAAIAAQpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(122).to({graphics:mask_graphics_122,x:129.2,y:37.6}).wait(1).to({graphics:mask_graphics_123,x:128.675,y:37.325}).wait(1).to({graphics:mask_graphics_124,x:128.175,y:37.05}).wait(1).to({graphics:mask_graphics_125,x:127.65,y:36.775}).wait(1).to({graphics:mask_graphics_126,x:127.125,y:36.475}).wait(1).to({graphics:mask_graphics_127,x:126.6,y:36.2}).wait(1).to({graphics:mask_graphics_128,x:126.1,y:35.925}).wait(1).to({graphics:mask_graphics_129,x:125.575,y:35.65}).wait(1).to({graphics:mask_graphics_130,x:125.05,y:35.35}).wait(1).to({graphics:mask_graphics_131,x:124.525,y:35.075}).wait(1).to({graphics:mask_graphics_132,x:124.025,y:34.8}).wait(1).to({graphics:mask_graphics_133,x:123.5,y:34.525}).wait(1).to({graphics:mask_graphics_134,x:122.975,y:34.225}).wait(1).to({graphics:mask_graphics_135,x:122.45,y:33.95}).wait(1).to({graphics:mask_graphics_136,x:121.95,y:33.675}).wait(1).to({graphics:mask_graphics_137,x:121.425,y:33.4}).wait(1).to({graphics:mask_graphics_138,x:120.9,y:33.1}).wait(10).to({graphics:null,x:0,y:0}).wait(81));

	// Layer_6_copy
	this.instance_2 = new lib.Symbol12();
	this.instance_2.setTransform(62.9,67.75,1,1,9.4419,0,0,63.2,44.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(122).to({_off:false},0).to({regX:63.1,rotation:0,x:108.4,y:45.15,alpha:1},16,cjs.Ease.quadInOut).wait(91));

	// Layer_11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ApLH6IAAvzISXAAIAAPzg");
	mask_1.setTransform(108,47);

	// Layer_3
	this.instance_3 = new lib.Symbol10();
	this.instance_3.setTransform(53.75,43.4,1,1,0,0,0,0,44.9);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(229));

	// Layer_1
	this.instance_4 = new lib.Symbol11();
	this.instance_4.setTransform(107.55,88.1,1,1,0,0,0,53.8,0);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(229));

	// Layer_13
	this.instance_5 = new lib.Symbol45();
	this.instance_5.setTransform(113.6,24.45,1.0264,1.0264,16.5561,0,0,54.8,54.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(121).to({_off:false},0).to({regX:54.7,scaleX:1.978,scaleY:1.9779,rotation:16.5563,x:113.35,y:24.4,alpha:1},27,cjs.Ease.backOut).wait(81));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-109.2,267.7,267.4);


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
	this.instance = new lib.Symbol35();
	this.instance.setTransform(65.2,160.55,1,1,0,0,0,64.5,8.1);

	this.instance_1 = new lib.Symbol33();
	this.instance_1.setTransform(64.95,30.1,1,1,0,0,0,36.5,13.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHBGQgIgEgFgHQgGgIAAgMIAAgyIgTAAIAAgbIATAAIAAgZIAlgKIAAAjIAhAAIAAAbIghAAIAAArQAAAIAEADQAEAEAHAAQAFAAAEgCQACAAAFgDIADAXQgFAEgIACIgRADQgOAAgIgEg");
	this.shape.setTransform(111.5,136.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASA4IAAg+QAAgMgFgEQgEgFgHAAQgEAAgFADQgEADgDAFQgDAGAAAJIAAA5IglAAIAAhtIAhAAIACAWIAEgIQAGgIAIgEQAIgEAKAAQAMAAAIAEQAIAEAFAJQAFAJAAANIAABIg");
	this.shape_1.setTransform(99.925,137.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAyQgOgGgHgNQgHgNAAgSQAAgRAHgNQAHgMANgHQAOgHAQAAQARAAAMAHQAMAGAHAMQAGAMAAAPIAAANIhLAAIADAJQADAHAEADQAGADAHAAQAIAAAEgDQAGgEACgGIAeAKQgDAKgIAGQgJAHgJADQgJADgMAAQgSAAgNgHgAgKgbQgFAEgCAHIgCAGIAoAAQgBgIgEgFQgEgHgKAAQgGAAgGADg");
	this.shape_2.setTransform(86.7,137.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnA4IAAhtIAhAAIACAYQADgMAIgHQAJgHAMAAIAHAAIAFACIgEAfQgCgBgDAAIgJgBQgGAAgGADQgFACgEAGQgCAGAAAIIAAA3g");
	this.shape_3.setTransform(76.325,137.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnA4IAAhtIAhAAIACAYQAEgNAHgGQAIgHANAAIAHAAIAFACIgEAfQgCgBgDAAIgJgBQgGAAgGADQgFADgEAFQgDAHAAAHIAAA3g");
	this.shape_4.setTransform(66.875,137.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkA0QgIgEgFgJQgFgHAAgOIAAhJIAlAAIAABAQABALADADQAFAEAIABIAGgCQAEgCACgDQACgCACgFQABgFABgHIAAg5IAlAAIAABtIgiAAIgBgVQgFAMgJAFQgJAGgNAAQgLAAgJgEg");
	this.shape_5.setTransform(54.7,138);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAzQgOgHgHgNQgHgNAAgSQAAgRAHgNQAHgMAOgHQANgHAPAAQASAAAKAFQAMAFAFAHQAHAHABAKIgiALQgBgJgEgFQgGgFgHAAQgFAAgFAEQgEACgEAIQgCAGAAAKQABAMACAGQADAHAEADQAFADAGAAQAEAAAFgCQAEgDACgEQADgEAAgFIAhALQgBAKgHAHQgGAHgLAFQgLAEgPAAQgQAAgOgGg");
	this.shape_6.setTransform(41.75,137.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAyQgNgGgHgNQgHgMAAgTQAAgSAHgMQAHgNANgGQANgHARAAQARAAAMAHQANAHAFALQAHALAAAQIgBANIhKAAIADAJQACAGAFAEQAGADAGAAQAJAAAEgDQAFgDADgHIAeAKQgEAKgHAGQgJAHgJADQgKADgMAAQgRAAgOgHgAgKgbQgFAEgCAHIgCAGIAoAAQgBgHgEgGQgEgHgKAAQgHAAgFADg");
	this.shape_7.setTransform(29.1,137.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnA4IAAhtIAhAAIABAYQAFgNAHgGQAJgHAMAAIAIAAIAEACIgDAfQgCgBgFAAIgIgBQgGAAgGADQgFADgEAFQgDAGABAIIAAA3g");
	this.shape_8.setTransform(18.7,137.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkBJQgKgHgFgMQgGgMAAgUQAAgTAGgLQAGgMAKgHQALgHANAAQAOAAAJAJQAGAGADAHIAAhDIAlAAIAACdIghAAIgCgWIgDAHQgGAIgIAEQgHAEgLABQgMgBgMgGgAgOAAQgFAHAAAPQAAAQAFAHQAGAHAIAAQAHAAAEgEQAFgCACgIQADgHAAgKQAAgIgDgHQgCgGgFgDQgEgDgGgBQgJAAgGAHg");
	this.shape_9.setTransform(124.125,110.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAyQgOgHgHgMQgHgNAAgSQAAgRAHgNQAHgMANgHQAOgHAQAAQAQAAANAHQAMAGAHAMQAGAMAAAPIAAANIhLAAIADAJQACAHAGADQAFADAGAAQAJAAAEgDQAGgEACgGIAeAKQgDAKgIAGQgIAHgKADQgJADgNAAQgRAAgNgHgAgKgbQgFAEgCAHIgCAGIAoAAQgBgIgEgFQgEgHgKAAQgGAAgGADg");
	this.shape_10.setTransform(111.1,112.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbAzQgNgHgIgNQgGgMAAgTQAAgSAGgMQAIgNANgGQANgHAQAAQASAAAKAFQALAEAHAIQAFAIACAJIgiALQgCgJgEgFQgEgFgIAAQgFAAgFAEQgFADgDAHQgCAFAAALQAAAKACAIQADAHAFADQAGADAEAAQAEAAAFgCQAEgDADgEQACgDAAgGIAjALQgCAJgHAIQgHAIgLAEQgLAEgPAAQgPAAgPgGg");
	this.shape_11.setTransform(98.6,112.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASA4IAAg+QAAgMgFgEQgEgFgHAAQgEAAgFADQgEADgDAFQgDAGAAAJIAAA5IglAAIAAhtIAhAAIABAWIAFgIQAGgIAIgEQAIgEAKAAQAMAAAIAEQAJAFAEAIQAFAJAAANIAABIg");
	this.shape_12.setTransform(85.475,112.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbAyQgOgHgGgMQgIgNAAgSQAAgRAIgNQAGgMAOgHQAOgHAOAAQARAAANAHQANAGAGAMQAGAMAAAPIgBANIhKAAIADAJQADAHAFADQAFADAGAAQAJAAAFgDQAFgEACgGIAeAKQgDAKgHAGQgJAHgJADQgLADgMAAQgRAAgNgHgAgJgbQgFAEgDAHIgBAGIAnAAQgBgIgDgFQgGgHgKAAQgFAAgFADg");
	this.shape_13.setTransform(72.25,112.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSBQIAAhuIAlAAIAABugAgPgvQgGgEAAgJQAAgKAGgEQAFgEAKAAQAMAAAFAEQAFAEAAAKQAAAKgFADQgFAEgMABQgKgBgFgEg");
	this.shape_14.setTransform(62.675,110.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnA4IAAhtIAhAAIACAYQAEgNAHgGQAJgHAMAAIAHAAIAFACIgEAfQgBgBgEAAIgIgBQgHAAgGADQgGADgDAFQgCAGAAAIIAAA3g");
	this.shape_15.setTransform(55.35,112.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbAyQgOgHgGgMQgIgNAAgSQAAgRAIgNQAGgMANgHQAOgHAPAAQASAAAMAHQANAGAGAMQAGAMAAAPIgBANIhKAAIACAJQADAHAFADQAGADAHAAQAIAAAEgDQAGgEACgGIAeAKQgDAKgHAGQgJAHgKADQgKADgLAAQgSAAgNgHgAgKgbQgEAEgDAHIgCAGIAoAAQgBgIgEgFQgEgHgLAAQgFAAgGADg");
	this.shape_16.setTransform(43.65,112.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag5BPIAAibIAiAAIABAWIADgGQAGgJAIgEQAHgFALAAQANAAALAHQALAHAEAMQAGALAAAUQAAASgGAMQgGANgKAGQgLAHgNAAQgOAAgJgJQgFgFgEgHIAABBgAgKgvQgFAEgCAGQgDAHAAAJQAAAJADAHQACAFAFAEQAEAEAGAAQAJAAAGgHQAFgGAAgQQAAgQgFgHQgGgHgJAAQgGAAgEAEg");
	this.shape_17.setTransform(30.625,115.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAUA3IgUgmIgUAmIgrAAIAog3Igmg2IArAAIATAkIATgkIArAAIgnA2IAnA3g");
	this.shape_18.setTransform(17,112.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgbAyQgNgHgIgMQgHgNAAgSQAAgRAHgNQAIgNANgGQANgHAPAAQARAAANAHQANAHAFALQAHALAAAQIAAAHIgBAGIhKAAIACAJQACAGAHAEQAFADAGAAQAJAAAFgDQAFgEACgGIAeAKQgDAJgIAHQgIAHgKADQgKADgMAAQgRAAgNgHgAgJgbQgGAEgCAHIgBAGIAmAAQAAgIgEgFQgEgHgLAAQgFAAgFADg");
	this.shape_19.setTransform(4.75,112.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhBBJIAAiRIA+AAQAgAAATATQASATAAAiQAAAigSAUQgTATggAAgAgbAsIAUAAQASAAAHgLQAJgLAAgWQAAgWgJgKQgIgLgRAAIgUAAg");
	this.shape_20.setTransform(104.85,86.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AABBJIAAhrQgFAFgKAGQgIAFgKACIgEgfQAIgBAEgCIANgGIALgIIAHgIIAeAAIAACRg");
	this.shape_21.setTransform(91.275,86.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSBJIAAhzIgvAAIAAgeICDAAIAAAeIgvAAIAABzg");
	this.shape_22.setTransform(79.975,86.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AASBPIAAg/QAAgMgEgEQgFgFgHAAQgEAAgFADQgFACgCAGQgDAGAAAIIAAA7IglAAIAAidIAlAAIAABEQAFgMAJgFQAJgGALAAQALAAAJAFQAJAFAEAHQAFAJAAAMIAABKg");
	this.shape_23.setTransform(60.075,85.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGBGQgKgEgEgIQgFgGAAgOIAAgxIgTAAIAAgaIATAAIAAgZIAkgKIAAAjIAhAAIAAAaIghAAIAAArQAAAHAEAFQAEADAGAAQAFAAAFgBIAGgEIAEAXQgFAEgIADIgSABQgNAAgHgDg");
	this.shape_24.setTransform(48.225,86.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSBQIAAhtIAlAAIAABtgAgQgvQgFgEAAgKQAAgIAFgFQAGgEAKgBQAMABAFAEQAFAEAAAJQAAALgFADQgFAEgMAAQgKAAgGgEg");
	this.shape_25.setTransform(40.175,85.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAUA3IgUhDIgTBDIgsAAIgihtIAnAAIATBQIAWhQIAjAAIAWBQIAThQIAnAAIgiBtg");
	this.shape_26.setTransform(27.075,87.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgdA0QgOgFgJgLIASgUQAGAHAIAEQAJAFALAAQAFAAAGgCQAFgCgBgEQAAgDgCgCQgCgCgHgBIgOgDQgUgEgKgJQgIgHAAgNQAAgKAGgIQAFgIAMgFQAMgFAQAAQARAAAMAFQANAEAHAKIgSAUQgFgHgIgDQgJgEgIAAIgIABIgFADQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAADADACQADACAGACIAUAEQARADAIAHQAHAIAAALQAAAMgGAIQgFAIgMAFQgKAFgSAAQgQAAgPgFg");
	this.shape_27.setTransform(117.85,62.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGBGQgJgEgGgHQgEgJAAgMIAAgxIgTAAIAAgaIATAAIAAgaIAkgJIAAAjIAhAAIAAAaIghAAIAAArQAAAIAEAEQAEADAHAAQAFAAAEgCQADAAADgDIAFAXQgFAEgKACIgRACQgNABgHgEg");
	this.shape_28.setTransform(107.25,61.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AASA4IAAg+QAAgMgFgEQgEgFgHAAQgEAAgFADQgEADgDAFQgDAGAAAJIAAA5IglAAIAAhtIAhAAIABAWIAFgIQAGgIAIgEQAIgEAKAAQALAAAJAEQAJAFAEAIQAFAIAAAOIAABIg");
	this.shape_29.setTransform(95.675,62.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgbAyQgOgHgHgMQgHgNAAgSQAAgRAHgNQAHgMANgHQAOgHAPAAQARAAANAHQAMAGAHAMQAGAMAAAPIgBANIhKAAIACAJQADAHAFADQAGADAGAAQAJAAAFgDQAFgEACgGIAeAKQgDAKgIAGQgIAHgKADQgKADgMAAQgQAAgOgHgAgKgbQgFAFgCAGIgCAGIAnAAQgBgIgDgFQgFgHgKAAQgFAAgGADg");
	this.shape_30.setTransform(82.475,62.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgSBPIAAhsIAkAAIAABsgAgQgvQgFgEAAgKQAAgIAFgFQAGgFAKAAQAMAAAEAFQAGAFAAAIQAAAKgGAEQgEAFgMgBQgKABgGgFg");
	this.shape_31.setTransform(72.9,60.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGBGQgKgEgEgHQgFgHgBgOIAAgxIgSAAIAAgaIASAAIAAgaIAlgJIAAAjIAhAAIAAAaIghAAIAAArQAAAIAEAEQAEADAGAAQAFAAAFgCIAGgDIAEAXQgFAEgIACIgSACQgNABgHgEg");
	this.shape_32.setTransform(64.925,61.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAaA2QgHgDgDgFIgDgFIgDAEQgGAHgHACQgJADgJAAQgNAAgIgDQgHgEgFgHQgFgGABgKQAAgNAGgHQAHgHAQgDIAlgIIAAgDQAAgHgEgFQgEgEgHAAQgIAAgEADQgGAEgCAJIgfgHQADgQANgKQANgJAZAAQAPAAALAFQALAEAGAKQAGAJAAAOIAAAnQAAAIAIAAIAHAAIgDAVQgIADgIAAQgIAAgHgDgAgJAMQgGABgDADQgDACAAAFQgBAFAEADQAEACAEAAIAIgBIAEgDIAFgGQABgEAAgFIAAgFg");
	this.shape_33.setTransform(54.45,62.875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag5BPIAAibIAiAAIABAWIADgGQAFgJAJgEQAGgFAMAAQANAAALAHQAKAHAFAMQAGANAAASQAAARgGANQgGANgKAGQgKAHgOAAQgOAAgJgJQgFgFgEgIIAABCgAgKgvQgFAEgCAGQgDAHAAAJQAAAJACAHQADAFAEAEQAFAEAGAAQAJAAAFgHQAGgGAAgQQAAgQgFgHQgGgHgJAAQgGAAgEAEg");
	this.shape_34.setTransform(41.25,65.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZBQIAAhTIgRAAIAAgaIARAAIAAgLQAAgKADgIQADgGAHgFQAHgGAGgCQAJgCAHAAQALAAAFACQAHACADACIgDAXIgGgCIgIgBQgGAAgGAEQgFADAAAJIAAAIIAhAAIAAAaIgeAAIAABTg");
	this.shape_35.setTransform(23.7,60.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgdAzQgOgHgHgNQgHgNAAgSQAAgRAHgNQAHgMAOgHQANgHAQAAQAQAAAOAHQAOAHAHAMQAHANAAARQAAASgHANQgHANgOAHQgOAGgQAAQgPAAgOgGgAgKgaQgFADgCAGQgDAGABALQgBAMADAGQADAGAEADQAEAEAGAAQAHAAAEgEQAEgDADgGQACgGAAgMQAAgLgCgGQgCgGgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_36.setTransform(12.5,62.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-0.8,16.3,130.70000000000002,152.29999999999998), null);


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
	this.instance = new lib.Symbol32();
	this.instance.setTransform(64,127.95,1,1,0,0,0,29.2,7.6);

	this.instance_1 = new lib.Symbol30();
	this.instance_1.setTransform(64.05,2.2,1,1,0,0,0,57.9,16.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhBFIgJgfIgvAAIgKAfIgkAAIAxiJIAqAAIAwCJgAgQANIAhAAIgRg3g");
	this.shape.setTransform(110.375,104.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXBFIghg7IgRAUIAAAnIgkAAIAAiJIAkAAIAAA9IAxg9IAoAAIgvA4IAxBRg");
	this.shape_1.setTransform(97.075,104.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+BFIAAiJIA7AAQAfAAARASQASASAAAgQAAAhgSASQgRASgfAAgAgaAqIATAAQARAAAIgLQAIgLAAgUQAAgTgIgLQgIgLgRAAIgTAAg");
	this.shape_2.setTransform(82.3,104.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAwQgNgHgHgMQgHgMAAgRQAAgQAHgMQAHgMANgHQAMgGAPgBQARABAMAGQALAGAGAMQAHAMAAAOIgBAMIhHAAIACAIQADAHAFACQAFADAGAAQAIAAAFgDQAFgEACgFIAcAKQgDAJgHAGQgHAHgKADQgKACgLAAQgRAAgMgGgAgJgaQgFAEgCAGIgCAHIAlAAQAAgIgEgFQgEgGgKAAQgFAAgFACg");
	this.shape_3.setTransform(63.175,106.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTBEQgIgIAAgRIAAh2IAjAAIAABxQgBAHADADQACADAGAAIAFAAIAFgCIgCAWQgEADgGAAQgGACgGAAQgQAAgHgIg");
	this.shape_4.setTransform(54.65,104.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrBSQgMgGAAgNQAAgKAHgEQAEgEAIgBQgFgCgDgDQgHgHAAgKQAAgKAIgGIAJgFIgEgBQgNgJAAgSQAAgLAGgIQAFgHAMgFQAMgEAQAAQALAAAKADIADgLQADgJAGgEQAHgGAKABIACAAIABAAIADAYIgCgBIgDAAQgJABgEAEQgDADgBADQAGAEADAEQAGAIAAALQAAAMgGAIQgGAIgLADQgKAEgQAAQgLAAgIgCIgEACQgEACAAAEQAAADADACQAEACAFAAIAgAAQATAAAJAIQAKAHAAAOQAAAOgHAIQgHAJgNAEQgNAFgRgBQgcABgNgIgAgaAzQgDACAAADQAAAFAIADQAFACAPAAIAPgBQAHgCADgCQAEgCAAgDQAAgEgDgCQgDgBgFAAIglAAQgDgBgDADgAgLgmQgFAFAAAGQAAAIAFAEQAEAEAHAAQAGAAAEgEQAEgEAAgIQAAgGgEgFQgEgDgGAAQgIAAgDADg");
	this.shape_5.setTransform(45.375,107);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARA2IAAg8QAAgLgFgEQgDgEgHAAQgFAAgDACQgFADgDAFQgCAGAAAIIAAA3IgjAAIAAhpIAfAAIABAVIAFgHQAFgIAIgEQAIgDAJgBQALABAIADQAJAGAEAHQAFAIAAAMIAABGg");
	this.shape_6.setTransform(33.2,106.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRBMIAAhoIAjAAIAABogAgPgsQgFgFAAgIQAAgJAFgEQAFgFAKAAQALAAAFAFQAFAEAAAJQAAAIgFAFQgGAEgKAAQgKAAgFgEg");
	this.shape_7.setTransform(24.025,103.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAyQgOgGgIgJIARgUQAEAHAJAEQAJAFAKAAQAFAAAFgCQAFgCAAgEQAAgDgCgCQgCgCgGgBIgPgDQgTgEgJgIQgIgGAAgNQAAgJAGgIQAFgIAKgEQALgGARAAQAPABANAEQANAEAGAJIgRAUQgFgHgIgDQgHgEgJABIgHABIgGACQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAADACACQACACAHABIAUAEQAQADAGAHQAIAHAAALQAAALgGAIQgFAIgLAFQgLAEgRAAQgPAAgNgEg");
	this.shape_8.setTransform(15.7,106.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAZA0QgGgDgEgFIgDgFIgCADQgFAHgHADQgLACgHAAQgLAAgIgDQgJgEgEgFQgEgGAAgLQAAgKAHgIQAGgHAQgCIAjgIIAAgDQAAgHgEgEQgEgFgGAAQgIAAgEADQgEAEgDAJIgegIQADgOAMgKQANgIAXgBQAOAAALAFQAMAFAEAIQAHAKAAANIAAAlQgBAIAIAAIAGgBIgDAUQgFADgKAAQgHAAgHgCgAgIAMQgHABgCACQgDADAAAFQAAAFADACQADACAFAAIAHgBQADgBABgDIAFgFQABgDAAgFIAAgGg");
	this.shape_9.setTransform(105.45,82.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglA1IAAhnIAgAAIABAWQADgLAIgHQAHgHANAAIAGABIAFACIgEAdIgEgBIgIAAQgIAAgEACQgHAEgCAEQgDAGAAAGIAAA1g");
	this.shape_10.setTransform(90.3,82.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcAxQgNgHgGgMQgIgNAAgRQAAgPAIgOQAHgMAMgGQANgHAPAAQARAAAMAHQAMAGAIAMQAHAOAAAPQAAARgHANQgHAMgNAHQgMAFgRAAQgPAAgNgFgAgKgZQgEADgCAHQgDAGAAAJQAAAKADAHQACAGAEADQAEAEAGAAQAHAAAEgEQAEgDACgGQADgHAAgKQAAgJgDgGQgCgHgEgDQgFgDgGAAQgFAAgFADg");
	this.shape_11.setTransform(79.325,82.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYBMIAAhOIgRAAIAAgaIARAAIAAgJQAAgKADgIQAEgHAGgEQAHgFAFgCIAQgCQAJAAAGACQAHABADADIgEAWIgFgCIgHgBQgHAAgFADQgFADAAAJIAAAHIAgAAIAAAaIgeAAIAABOg");
	this.shape_12.setTransform(69.325,79.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGBDQgJgEgEgHQgFgHAAgMIAAgvIgSAAIAAgaIASAAIAAgXIAigKIAAAhIAgAAIAAAaIggAAIAAApQAAAHAEAEQAEADAGAAQAFAAAEgBQAEgBACgDIAEAWQgFAEgIACQgHACgJAAQgMAAgIgDg");
	this.shape_13.setTransform(55.275,80.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbAyQgNgFgKgLIARgTQAFAGAKAFQAHAFALAAQAFAAAGgCQADgCAAgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAgBgBQgCgBgGgCIgNgCQgVgFgIgIQgIgHAAgNQAAgHAFgJQAGgIALgEQAKgFARgBQAPAAAMAFQANAFAHAIIgRAUQgFgGgIgEQgIgDgIgBIgIABQgCABgCACQgBABAAAAQgBAAAAABQAAAAAAABQgBAAAAABQABADADACQACACAGACIATADQARADAHAHQAGAHAAALQABALgGAIQgFAJgLAEQgLAFgQgBQgQAAgNgEg");
	this.shape_14.setTransform(45.4,82.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcAxQgMgHgIgMQgGgNgBgRQABgPAGgOQAIgNAMgFQAMgHAQAAQARAAAMAHQAMAGAIAMQAGANABAQQgBASgGAMQgHAMgNAHQgMAFgRAAQgPAAgNgFgAgKgZQgEADgCAHQgDAGAAAJQAAAKADAHQACAGAEADQAFAEAFAAQAHAAAEgEQAFgDABgGQADgHAAgKQAAgJgDgGQgBgHgFgDQgFgDgGAAQgFAAgFADg");
	this.shape_15.setTransform(33.95,82.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAxQgMgHgHgMQgHgNAAgRQAAgPAHgOQAHgMAMgGQANgHAPAAQAQAAALAFQAKAFAGAHQAGAHACAJIghALQgBgJgEgEQgEgFgIAAQgFAAgFADQgFADgCAHQgCAHAAAIQAAAKACAHQACAGAFADQAFAEAFAAQAFAAAEgDQAEgCACgDQADgEAAgFIAgAKQgBAJgHAHQgFAHgMAFQgJADgPAAQgQAAgOgFg");
	this.shape_16.setTransform(22.2,82.15);

	this.instance_2 = new lib.ClipGroup();
	this.instance_2.setTransform(64.8,260.3,1,1,0,0,0,80,300);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AARA2IAAg8QAAgLgEgEQgEgEgHAAQgEAAgEACQgFACgCAGQgDAGAAAIIAAA3IgjAAIAAhpIAfAAIABAVIAFgHQAFgIAIgEQAIgEAJABQALgBAIAEQAJAGAEAHQAFAIgBAMIAABGg");
	this.shape_17.setTransform(116.6,34.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAZA0QgHgDgDgFIgCgFIgDAEQgGAGgHADQgKADgIgBQgKAAgIgCQgJgFgEgFQgEgHAAgJQAAgMAHgHQAHgHAOgCIAkgIIAAgDQAAgHgEgFQgEgEgGAAQgHAAgFADQgFAFgCAIIgegHQADgPAMgKQANgJAXABQAOAAALAEQALAEAGAJQAFAKAAAMIAAAmQAAAIAIAAIAGgBIgCAVQgHACgJAAQgHABgHgDgAgIALIgKAEQgDACAAAGQAAAEAEACQADACAFABIAHgCQACgBACgCQADgBABgFQACgDAAgEIAAgGg");
	this.shape_18.setTransform(104.675,34.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRBMIAAhoIAjAAIAABogAgPgsQgFgFAAgIQAAgKAFgDQAFgFAKAAQALAAAFAFQAFADAAAKQAAAIgFAFQgGAEgKAAQgKAAgFgEg");
	this.shape_19.setTransform(95.675,31.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgiBGQgKgHgFgMQgFgNAAgQQAAgRAFgMQAGgMAKgHQAKgGANAAQANAAAJAIQAFAFADAHIAAg/IAjAAIAACVIgfAAIgCgVIgDAHQgFAHgIAFQgGAEgLAAQgNAAgKgGgAgNAAQgFAHAAAOQAAAPAFAHQAFAHAIAAQAHAAAEgEQAEgDACgGQADgGAAgKQAAgKgCgFQgDgGgEgDQgFgDgFAAQgIAAgGAGg");
	this.shape_20.setTransform(86.175,32.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaAwQgNgGgGgNQgIgMABgRQgBgQAIgMQAGgMANgHQANgGAOAAQARAAAMAGQAMAGAFAMQAHALAAAPIgBAMIhHAAIACAIQADAHAFADQAGACAFAAQAJAAAEgCQAGgFABgFIAdAKQgEAJgHAGQgHAHgKADQgKACgLAAQgQAAgNgGgAgJgaQgEAEgDAGIgCAHIAmAAQgBgIgDgFQgFgGgKAAQgEAAgGACg");
	this.shape_21.setTransform(74.15,34.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAyA2IAAg9QAAgLgDgDQgEgEgGAAQgHAAgDACQgEADgDAFQgCAFAAAJIAAA3IgjAAIAAg9QAAgLgEgDQgEgEgGAAQgGAAgEACQgEADgCAFQgCAFAAAJIAAA3IglAAIAAhpIAhAAIABAVQAFgLAJgGQAJgFAMAAQAKgBAKAGQAJAFADAKQADgGAGgGQAFgDAHgDQAIgCAGAAQAKgBAJAEQAIAGAFAHQAEAJAAALIAABGg");
	this.shape_22.setTransform(58.65,34.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgaAwQgMgGgIgNQgHgLABgSQgBgQAHgMQAHgMANgHQAMgGAQAAQAQAAAMAGQAKAGAIAMQAFALABAPIgCAMIhGAAIACAIQADAIAFACQAEACAHAAQAIAAAEgCQAGgEABgGIAdAKQgDAJgHAGQgGAGgLAEQgLACgKAAQgQAAgNgGgAgJgaQgEADgDAHIgCAHIAmAAQgBgIgEgFQgFgGgIAAQgHAAgEACg");
	this.shape_23.setTransform(37.5,34.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AARBLIAAg8QAAgLgEgEQgEgEgHAAQgEAAgFACQgDACgEAFQgCAGAAAJIAAA3IgkAAIAAiVIAkAAIAABAQAFgLAJgFQAHgFAMAAQAJAAAJAEQAJAEAEAIQAEAJABALIAABGg");
	this.shape_24.setTransform(25.3,31.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRBFIAAhtIgtAAIAAgcIB+AAIAAAcIguAAIAABtg");
	this.shape_25.setTransform(12.5,32.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance_2},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-15.2,-39.7,160,600), null);


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

	// Layer_1
	this.instance = new lib.Symbol39();
	this.instance.setTransform(182.4,156.2,1.1972,1.1971,-82.4119,0,0,97.5,68.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3copy, new cjs.Rectangle(62.4,53.4,270.70000000000005,261.8), null);


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
	this.frame_150 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(150).call(this.frame_150).wait(29));

	// Layer_7_copy_copy
	this.instance = new lib.Symbol19();
	this.instance.setTransform(253.85,198,0.2012,0.2011,-50.1967,0,0,75.2,109.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({x:247.05,y:192.45,alpha:1},19,cjs.Ease.cubicOut).to({x:226.65,y:175.8},110).to({_off:true},1).wait(26));

	// Layer_7_copy
	this.instance_1 = new lib.Symbol19();
	this.instance_1.setTransform(160.15,314.35,0.1934,0.1933,-50.202,0,0,74.5,110);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).to({x:153.35,y:308.8,alpha:1},16,cjs.Ease.cubicOut).to({x:132.95,y:292.15},108).to({_off:true},20).wait(4));

	// Layer_7
	this.instance_2 = new lib.Symbol19();
	this.instance_2.setTransform(140.5,194.9,0.1947,0.1946,-50.2266,0,0,76,108.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({x:120.1,y:178.25,alpha:1},19,cjs.Ease.cubicOut).to({x:106.5,y:167.15},135).to({_off:true},1).wait(4));

	// Symbol_19_copy_copy
	this.instance_3 = new lib.Symbol19();
	this.instance_3.setTransform(103.75,138.25,0.143,0.1429,-50.207,0,0,75.3,108.5);
	this.instance_3.alpha = 0.4219;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).wait(1).to({regX:73.5,regY:105.7,scaleX:0.162,scaleY:0.1619,rotation:-50.2056,x:105.2,y:131.3},0).wait(1).to({regX:75.3,regY:109,scaleX:0.1804,scaleY:0.1803,rotation:-50.2044,x:107.7,y:124.7},0).wait(1).to({regX:73.5,regY:105.7,scaleX:0.1789,scaleY:0.1789,rotation:-50.2054,x:112.65,y:114.9},0).wait(1).to({regX:75.2,regY:109.2,scaleX:0.1776,scaleY:0.1775,rotation:-50.2064,x:118.5,y:106.3},0).wait(1).to({regX:73.5,regY:105.7,scaleX:0.1854,scaleY:0.1854,rotation:-50.2056,x:134.8,y:107.05,alpha:0.472},0).wait(1).to({regX:75.2,regY:109.5,scaleX:0.1929,scaleY:0.1928,rotation:-50.2049,x:151.8,y:108.05,alpha:0.5195},0).wait(1).to({regX:73.5,regY:105.7,scaleX:0.1999,scaleY:0.1999,rotation:-50.203,x:153.95,y:110.9,alpha:0.5614},0).wait(1).to({scaleX:0.2066,scaleY:0.2065,rotation:-50.2012,x:156.7,y:113.9,alpha:0.601},0).wait(1).to({scaleX:0.2129,scaleY:0.2128,rotation:-50.1995,x:159.35,y:116.65,alpha:0.6383},0).wait(1).to({scaleX:0.2188,scaleY:0.2187,rotation:-50.1979,x:161.8,y:119.25,alpha:0.6733},0).wait(1).to({scaleX:0.2244,scaleY:0.2243,rotation:-50.1964,x:164.1,y:121.65,alpha:0.7063},0).wait(1).to({scaleX:0.2296,scaleY:0.2295,rotation:-50.195,x:166.3,y:124.05,alpha:0.7373},0).wait(1).to({scaleX:0.2345,scaleY:0.2344,rotation:-50.1936,x:168.35,y:126.15,alpha:0.7663},0).wait(1).to({scaleX:0.2391,scaleY:0.239,rotation:-50.1924,x:170.25,y:128.2,alpha:0.7936},0).wait(1).to({scaleX:0.2434,scaleY:0.2433,rotation:-50.1912,x:172.05,y:130.1,alpha:0.8191},0).wait(1).to({scaleX:0.2474,scaleY:0.2473,rotation:-50.1901,x:173.75,y:131.85,alpha:0.843},0).wait(1).to({scaleX:0.2512,scaleY:0.2511,rotation:-50.1891,x:175.3,y:133.55,alpha:0.8654},0).wait(1).to({scaleX:0.2548,scaleY:0.2546,rotation:-50.1882,x:176.75,y:135.1,alpha:0.8864},0).wait(1).to({scaleX:0.2581,scaleY:0.2579,rotation:-50.1873,x:178.15,y:136.55,alpha:0.906},0).wait(1).to({scaleX:0.2612,scaleY:0.261,rotation:-50.1864,x:179.45,y:137.9,alpha:0.9244},0).wait(1).to({scaleX:0.2641,scaleY:0.2639,rotation:0,skewX:-50.1856,skewY:-50.2362,x:180.65,y:139.2,alpha:0.9416},0).wait(1).to({scaleX:0.2668,scaleY:0.2666,skewX:-50.1849,skewY:-50.2368,x:181.8,y:140.4,alpha:0.9577},0).wait(1).to({scaleX:0.2693,scaleY:0.2692,skewX:-50.1842,skewY:-50.2374,x:182.8,y:141.5,alpha:0.9728},0).wait(1).to({scaleX:0.2717,scaleY:0.2715,skewX:-50.1836,skewY:-50.238,x:183.8,y:142.6,alpha:0.9868},0).wait(1).to({regX:75.5,regY:108.6,scaleX:0.2739,scaleY:0.2738,skewX:-50.183,skewY:-50.2386,x:185.9,y:143.85,alpha:1},0).to({x:167.6,y:128.85},124).to({_off:true},1).wait(19));

	// Symbol_19_copy
	this.instance_4 = new lib.Symbol19();
	this.instance_4.setTransform(247.2,221.75,0.4059,0.4057,-50.2049,0,0,75.2,108.3);
	this.instance_4.alpha = 0.4219;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).wait(1).to({regX:73.5,regY:105.7,scaleX:0.4179,scaleY:0.4177,rotation:-50.2058,x:239.75,y:226.95},0).wait(1).to({regX:75.1,regY:108.4,scaleX:0.4296,scaleY:0.4294,rotation:-50.2067,x:235.15,y:232.3},0).wait(1).to({regX:73.5,regY:105.7,scaleX:0.4085,scaleY:0.4083,rotation:-50.2064,x:215.5,y:233.55},0).wait(1).to({scaleX:0.3892,scaleY:0.389,rotation:-50.2061,x:198.85,y:234.85},0).wait(1).to({regX:75,regY:108.5,scaleX:0.372,scaleY:0.3718,rotation:-50.2059,x:185.15,y:236.3},0).wait(1).to({regX:73.5,regY:105.7,scaleX:0.3743,scaleY:0.3742,x:174.05,y:235.95,alpha:0.5084},0).wait(1).to({scaleX:0.3763,scaleY:0.3762,x:165.4,alpha:0.5835},0).wait(1).to({regX:75.1,regY:108.8,scaleX:0.378,scaleY:0.3779,rotation:-50.206,x:159.1,y:236.1,alpha:0.6484},0).wait(1).to({regX:73.5,regY:105.7,scaleX:0.3603,scaleY:0.3602,rotation:-50.2037,x:160.9,y:235.3,alpha:0.706},0).wait(1).to({scaleX:0.3451,scaleY:0.345,rotation:-50.2017,x:163.6,y:234.95,alpha:0.7555},0).wait(1).to({scaleX:0.3321,scaleY:0.3319,rotation:-50.2,x:165.85,y:234.6,alpha:0.798},0).wait(1).to({scaleX:0.3209,scaleY:0.3208,rotation:-50.1986,x:167.85,y:234.3,alpha:0.8343},0).wait(1).to({scaleX:0.3113,scaleY:0.3112,rotation:-50.1973,x:169.5,y:234.05,alpha:0.8654},0).wait(1).to({scaleX:0.3032,scaleY:0.303,rotation:-50.1963,x:170.95,y:233.85,alpha:0.892},0).wait(1).to({scaleX:0.2962,scaleY:0.2961,rotation:-50.1954,x:172.2,y:233.65,alpha:0.9145},0).wait(1).to({scaleX:0.2904,scaleY:0.2902,rotation:-50.1946,x:173.2,y:233.5,alpha:0.9336},0).wait(1).to({scaleX:0.2855,scaleY:0.2853,rotation:-50.194,x:174.05,y:233.4,alpha:0.9496},0).wait(1).to({scaleX:0.2814,scaleY:0.2812,rotation:-50.1934,x:174.85,y:233.3,alpha:0.9628},0).wait(1).to({scaleX:0.278,scaleY:0.2779,rotation:-50.193,x:175.35,y:233.2,alpha:0.9737},0).wait(1).to({scaleX:0.2754,scaleY:0.2752,rotation:-50.1926,x:175.85,y:233.15,alpha:0.9824},0).wait(1).to({scaleX:0.2733,scaleY:0.2732,rotation:-50.1924,x:176.25,y:233.05,alpha:0.9891},0).wait(1).to({scaleX:0.2718,scaleY:0.2716,rotation:-50.1922,x:176.5,alpha:0.9941},0).wait(1).to({scaleX:0.2707,scaleY:0.2706,rotation:-50.192,x:176.65,y:232.95,alpha:0.9974},0).wait(1).to({scaleX:0.2701,scaleY:0.27,x:176.75,alpha:0.9994},0).wait(1).to({regX:75.1,regY:108.7,scaleX:0.27,scaleY:0.2698,rotation:-50.1919,x:177.75,y:233.2,alpha:1},0).to({x:157.35,y:216.55},115).to({_off:true},1).wait(28));

	// Symbol_19
	this.instance_5 = new lib.Symbol19();
	this.instance_5.setTransform(124.5,240.6,0.3348,0.3347,-50.2088,0,0,75.2,108.4);
	this.instance_5.alpha = 0.4219;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).wait(1).to({regX:73.5,regY:105.7,scaleX:0.3366,scaleY:0.3364,rotation:-50.2084,x:113.35,y:231.85,alpha:0.4869},0).wait(1).to({scaleX:0.3383,scaleY:0.3381,rotation:-50.208,x:103.55,y:223.5,alpha:0.55},0).wait(1).to({regX:75.4,regY:108.5,scaleX:0.3399,scaleY:0.3397,rotation:-50.2076,x:95.45,y:215.8,alpha:0.6094},0).wait(1).to({regX:73.5,regY:105.7,scaleX:0.3414,scaleY:0.3413,rotation:-50.2074,x:84.6,y:210.2,alpha:0.6673},0).wait(1).to({regX:75.4,regY:108.5,scaleX:0.3428,scaleY:0.3426,rotation:-50.2072,x:77.2,y:205.5,alpha:0.7188},0).wait(1).to({regX:73.5,regY:105.7,scaleX:0.3439,scaleY:0.3438,rotation:-50.207,x:77.75,y:212.1,alpha:0.7616},0).wait(1).to({scaleX:0.3449,scaleY:0.3447,rotation:-50.2068,x:79.25,y:217.85,alpha:0.7989},0).wait(1).to({scaleX:0.3457,scaleY:0.3456,rotation:-50.2067,x:80.55,y:222.95,alpha:0.831},0).wait(1).to({scaleX:0.3465,scaleY:0.3463,rotation:-50.2066,x:81.75,y:227.35,alpha:0.8587},0).wait(1).to({scaleX:0.3471,scaleY:0.347,rotation:-50.2065,x:82.75,y:231,alpha:0.8825},0).wait(1).to({scaleX:0.3477,scaleY:0.3475,rotation:-50.2064,x:83.5,y:234.2,alpha:0.9029},0).wait(1).to({scaleX:0.3481,scaleY:0.348,rotation:-50.2063,x:84.2,y:237,alpha:0.9204},0).wait(1).to({scaleX:0.3485,scaleY:0.3484,rotation:-50.2062,x:84.85,y:239.25,alpha:0.9353},0).wait(1).to({scaleX:0.3489,scaleY:0.3487,x:85.3,y:241.3,alpha:0.9481},0).wait(1).to({scaleX:0.3491,scaleY:0.349,rotation:-50.2061,x:85.75,y:243,alpha:0.9589},0).wait(1).to({scaleX:0.3494,scaleY:0.3492,x:86.15,y:244.45,alpha:0.9681},0).wait(1).to({scaleX:0.3496,scaleY:0.3494,rotation:-50.206,x:86.5,y:245.65,alpha:0.9758},0).wait(1).to({scaleX:0.3498,scaleY:0.3496,x:86.75,y:246.65,alpha:0.9821},0).wait(1).to({scaleX:0.3499,scaleY:0.3497,x:86.95,y:247.45,alpha:0.9874},0).wait(1).to({scaleX:0.35,scaleY:0.3499,x:87.1,y:248.1,alpha:0.9915},0).wait(1).to({scaleX:0.3501,x:87.2,y:248.6,alpha:0.9948},0).wait(1).to({scaleX:0.3502,scaleY:0.35,x:87.3,y:249,alpha:0.9971},0).wait(1).to({rotation:-50.2059,x:87.4,y:249.25,alpha:0.9988},0).wait(1).to({scaleY:0.3501,x:87.45,y:249.4,alpha:0.9997},0).wait(1).to({regX:75.5,regY:108.9,x:88.65,y:249.6,alpha:1},0).to({x:68.25,y:232.95},143).wait(1));

	// Layer_1_copy
	this.instance_6 = new lib.Symbol39copy();
	this.instance_6.setTransform(182.4,156.2,1.1972,1.1971,-82.4119,0,0,97.5,68.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:76,regY:83.9,rotation:-82.0132,x:197.55,y:184.3},0).wait(1).to({scaleY:1.1972,rotation:-81.3969,x:197.25,y:184.45},0).wait(1).to({rotation:-80.5376,x:196.8,y:184.7},0).wait(1).to({scaleX:1.1971,scaleY:1.1971,rotation:-79.4054,x:196.3,y:184.95},0).wait(1).to({scaleX:1.1972,scaleY:1.1972,rotation:-77.9646,x:195.55,y:185.3},0).wait(1).to({rotation:-76.1717,x:194.65,y:185.7},0).wait(1).to({rotation:-73.974,x:193.5,y:186.2},0).wait(1).to({rotation:-71.3065,x:192.1,y:186.65},0).wait(1).to({scaleY:1.1971,rotation:-68.0886,x:190.4,y:187.2},0).wait(1).to({rotation:-64.2193,x:188.25,y:187.65},0).wait(1).to({rotation:-59.5728,x:185.75,y:188},0).wait(1).to({scaleX:1.1971,rotation:-53.9939,x:182.65,y:188.2},0).wait(1).to({rotation:-47.3002,x:178.9,y:188},0).wait(1).to({rotation:-39.303,x:174.5,y:187.2},0).wait(1).to({rotation:-29.8772,x:169.6,y:185.55},0).wait(1).to({rotation:-19.1142,x:164.35,y:182.65},0).wait(1).to({rotation:-7.516,x:159.5,y:178.5},0).wait(1).to({rotation:4.0237,x:155.5,y:173.5},0).wait(1).to({rotation:14.6243,x:152.85,y:168.25},0).wait(1).to({rotation:23.8125,x:151.35,y:163.4},0).wait(1).to({rotation:31.5249,x:150.7,y:159.15},0).wait(1).to({rotation:37.9071,x:150.6,y:155.65},0).wait(1).to({scaleY:1.197,rotation:43.1608,x:150.8,y:152.7},0).wait(1).to({regX:97.5,regY:68.1,scaleY:1.1971,rotation:47.476,x:182.5,y:156.5},0).to({regY:68.2,scaleY:1.197,rotation:51.2089,x:182.4,y:156.55,alpha:0},11,cjs.Ease.backOut).to({_off:true},1).wait(114).to({_off:false,regX:97.6,regY:68,scaleX:1.2804,scaleY:1.2804,rotation:47.4763,x:185.45,y:142.15},0).to({_off:true},1).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.6,-43.4,360.70000000000005,381.4);


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
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(70.8,70.5,1,1,0,0,0,70.8,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,141.6,141.1), null);


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
	this.instance = new lib.Group();
	this.instance.setTransform(55.3,54.75,1,1,0,0,0,70.8,70.5);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(-15.5,-15.7,141.6,141), null);


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

	// timeline functions:
	this.frame_127 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(127).call(this.frame_127).wait(1));

	// Layer_3
	this.instance = new lib.Symbol37();
	this.instance.setTransform(28.35,-69.6,1.3919,1.3919,-71.6991,0,0,55.2,54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:288.3009,x:161.75,y:27.4},127,cjs.Ease.get(0.1)).wait(1));

	// Layer_4
	this.instance_1 = new lib.Symbol44();
	this.instance_1.setTransform(-0.55,-1.15,0.6886,0.6886,46.6781,0,0,35.2,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:406.6781,x:89.65,y:-15.65},127,cjs.Ease.get(0.1)).wait(1));

	// Layer_1
	this.instance_2 = new lib.ClipGroup_1();
	this.instance_2.setTransform(71.85,-135.4,0.5949,0.5949,0,0,0,26.4,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:360,x:141.5,y:-46.65},127,cjs.Ease.get(0.1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-194,381.7,345.7);


// stage content:
(lib.SGZ079TZDD07DSA_160x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,416];
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
	}
	this.frame_416 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(416).call(this.frame_416).wait(1));

	// Layer_3
	this.ctaBTN = new lib.Symbol31();
	this.ctaBTN.name = "ctaBTN";
	this.ctaBTN.setTransform(80,354.5,0.6396,0.6379,0,0,0,93,22.4);
	new cjs.ButtonHelper(this.ctaBTN, 0, 1, 2, false, new lib.Symbol31(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ctaBTN).wait(417));

	// Layer_1
	this.instance = new lib.Symbol27();
	this.instance.setTransform(80,81.95,1,1,0,0,0,63.7,57.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(294).to({_off:false},0).to({alpha:1},20,cjs.Ease.quadOut).wait(103));

	// Layer_12
	this.instance_1 = new lib.Symbol21();
	this.instance_1.setTransform(77.6,483.25,1,1,0,0,0,70.8,68.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(346).to({_off:false},0).to({alpha:1},20,cjs.Ease.quadOut).wait(51));

	// Layer_1
	this.instance_2 = new lib.Symbol22();
	this.instance_2.setTransform(80,262,1,1,0,0,0,67.1,66.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},14).wait(137).to({alpha:0},15,cjs.Ease.quadOut).to({_off:true},1).wait(250));

	// cta
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(84.65,354.35,0.3596,0.3585,0,0,0,99,23.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({scaleX:0.6371,scaleY:0.6352,y:356.4,alpha:1},22,cjs.Ease.backOut).wait(381));

	// arrows
	this.instance_4 = new lib.Symbol9();
	this.instance_4.setTransform(52.75,436.75,1,1,0,0,0,79.8,53.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(162).to({_off:false},0).to({alpha:1},17,cjs.Ease.quadOut).wait(115).to({scaleX:0.5976,scaleY:0.5976,x:88.45,y:274.95},116,cjs.Ease.get(0.1)).wait(7));

	// Layer_11
	this.instance_5 = new lib.Symbol20();
	this.instance_5.setTransform(86.8,296.4,0.8755,0.8755,-29.9995,0,0,121.9,97);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(294).to({_off:false},0).wait(123));

	// Layer_6
	this.instance_6 = new lib.Symbol23();
	this.instance_6.setTransform(79.95,288.9,1,1,0,0,0,64,39.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(162).to({_off:false},0).to({alpha:1},20).wait(108).to({alpha:0},16,cjs.Ease.quadOut).to({_off:true},1).wait(110));

	// t2
	this.instance_7 = new lib.Symbol8();
	this.instance_7.setTransform(80.05,109.2,1,1,0,0,0,64.5,79.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(162).to({_off:false},0).to({x:80,alpha:1},20).wait(108).to({x:80.05},0).to({alpha:0},16,cjs.Ease.quadOut).to({_off:true},1).wait(110));

	// t1
	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(81,106.45,1,1,0,0,0,65,67);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},13).wait(138).to({alpha:0},15,cjs.Ease.quadOut).to({_off:true},1).wait(250));

	// Layer_1
	this.instance_9 = new lib.Symbol24();
	this.instance_9.setTransform(80,532.15,1,1,0,0,0,58.8,5.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(158).to({_off:false},0).to({alpha:1},15,cjs.Ease.quadOut).wait(118).to({alpha:0},16,cjs.Ease.quadInOut).wait(110));

	// Layer_13
	this.instance_10 = new lib.Symbol2();
	this.instance_10.setTransform(80.05,523.8,1,1,0,0,0,38.4,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(151).to({y:510.8},15,cjs.Ease.quadOut).wait(125).to({alpha:0},16,cjs.Ease.quadOut).wait(110));

	// flash0_ai
	this.instance_11 = new lib.ClipGroup_2();
	this.instance_11.setTransform(80.1,563.85,0.9447,0.9417,0,0,0,43.5,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(417));

	// Layer_1
	this.instance_12 = new lib.Symbol3copy();
	this.instance_12.setTransform(121.6,447.9,0.7395,0.7394,50.7288,0,0,188.9,165.2);

	this.instance_13 = new lib.Symbol3();
	this.instance_13.setTransform(121.6,447.9,0.7395,0.7394,50.7288,0,0,188.9,165.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},38).to({state:[{t:this.instance_13}]},113).to({state:[{t:this.instance_13}]},15).wait(251));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(38).to({_off:false},0).wait(113).to({alpha:0},15,cjs.Ease.quadOut).wait(251));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#764099","#1F0047"],[0,1],9.5,-407.8,9.5,-24.1).s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(417));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,276,313.3,325);
// library properties:
lib.properties = {
	id: 'B915F0BB2CAF214394D0C3C0B5CA43BE',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
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