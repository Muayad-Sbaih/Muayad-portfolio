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


(lib.Symbol99 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#231F20").s().p("AA3ArIAAguQAAgNgGgGQgFgGgLAAQgIAAgFADQgGADgDAHQgEAGAAAJIAAArIgOAAIAAguQAAgNgFgGQgGgGgLAAQgHAAgGADQgGADgDAHQgDAGAAAJIAAArIgPAAIAAhUIAOAAIAAANQAEgGAGgDQAJgFALAAQALAAAKAGQAEAEADAGQAEgGAGgEQAKgGAMAAQAMAAAGAEQAJAEAEAIQAFAJgBAMIAAAwg");
	this.shape.setTransform(99.2711,113.6146,1.5238,1.5237);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgTAmQgLgHgFgJQgGgJAAgNQAAgMAFgKQAGgKAKgFQAJgFAMAAQAMAAAJAFQAKAGAFAJQAFAKAAAMIAAAFIhDAAQAAAGADAFQAEAHAHADQAHAEAIAAQAHAAAHgDQAFgCAGgFIAIAJQgGAHgIAEQgJADgKAAQgMAAgLgFgAgNgaQgHAFgCAFQgDAFAAAGIA1AAQgBgGgCgFQgDgFgHgFQgGgDgIAAQgIAAgGADg");
	this.shape_1.setTransform(78.8141,113.6908,1.5238,1.5237);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgHAtQgIgHABgMIAAguIgPAAIAAgNIAPAAIAAgSIAOAAIAAASIAYAAIAAANIgYAAIAAAtQAAAHADAEQADADAHAAQAHAAAFgEIAFALQgEADgFACIgKABQgMAAgGgHg");
	this.shape_2.setTransform(66.6617,112.3195,1.5238,1.5237);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgUAoQgKgDgFgEIAGgMQAGAEAIACQAHADAIAAQALAAAFgDQAEgDAAgGQAAgDgCgDQgDgCgFgBIgVgEIgLgEQgEgBgDgFQgDgFAAgHQAAgIAEgFQAEgGAIgDQAJgDAJAAQAJAAAIACQAIABAGAEIgHAMQgEgDgIgCQgGgBgGAAQgJAAgFADQgFAEAAAEQAAAFADACQACACAGACIAJACIAMACIAKADQAFACADAFQADAEAAAHQAAAIgFAFQgEAGgIADQgIADgLAAQgLAAgJgDg");
	this.shape_3.setTransform(55.5761,113.6908,1.5238,1.5237);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgkA4QgFgBgFgFIAHgLIAHAFIAIACQAGAAADgDQAEgEADgHIADgGIglhUIAQAAIAcBDIAdhDIAQAAIgqBdQgEAJgDAFQgEAFgGACQgEACgIAAQgGAAgGgCg");
	this.shape_4.setTransform(42.6237,116.0906,1.5238,1.5237);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgYA1QgNgEgFgGIAGgNQAFAGALAEQAKADAKABQAKAAAGgCQAGgCADgEQACgFAAgFQAAgFgDgEIgKgGIgagHIgOgEQgGgEgDgFQgEgHAAgJQgBgIAFgHQAFgIAKgEQAIgFAOABQAKAAAKACQAJACAHAGIgEAMQgHgEgJgDQgHgCgJAAQgIAAgGACQgGADgDAEQgDAFAAAEQAAAGAEADQADADAHADIAbAIIANAEQAFADAEAGQAEAFAAAKQAAAJgFAGQgEAIgKAEQgJAFgPgBQgLAAgNgEg");
	this.shape_5.setTransform(28.719,111.5957,1.5238,1.5237);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgIAtQgGgHAAgMIAAguIgPAAIAAgNIAPAAIAAgSIAOAAIAAASIAYAAIAAANIgYAAIAAAtQAAAHAEAEQACADAIAAQAGAAAFgEIAFALQgEADgEACQgFABgFAAQgMAAgIgHg");
	this.shape_6.setTransform(184.147,78.3511,1.5238,1.5237);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AAZArIAAguQAAgNgGgGQgGgGgLAAQgIAAgFADQgGADgEAHQgDAGAAAJIAAArIgPAAIAAhUIAOAAIAAANQAEgGAHgDQAJgFAKAAQAMAAAGAEQAIAEAFAIQAEAJAAAMIAAAwg");
	this.shape_7.setTransform(171.0042,79.6462,1.5238,1.5237);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgTAmQgLgHgFgJQgGgJAAgNQAAgMAFgKQAGgKAKgFQAJgFALAAQANAAAJAFQAJAFAGAKQAFAKAAAMIAAAFIhEAAQABAGADAFQADAGAIAEQAHAEAIAAQAHAAAHgDQAGgDAEgEIAJAJQgFAHgJAEQgJADgKAAQgNAAgKgFgAgNgaQgHAFgDAFIgDALIA2AAQgBgHgDgEQgCgFgHgFQgGgDgJAAQgHAAgGADg");
	this.shape_8.setTransform(155.1566,79.7224,1.5238,1.5237);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AA3ArIAAguQAAgNgGgGQgGgGgKAAQgIAAgFADQgGADgDAHQgDAGAAAJIAAArIgPAAIAAguQAAgMgFgHQgGgGgLAAQgHAAgGADQgGADgDAHQgDAGAAAJIAAArIgPAAIAAhUIAOAAIAAANQAFgGAFgDQAJgFALAAQAMAAAJAGQAEAEADAGQAEgGAGgEQAKgGANAAQALAAAHAEQAIAEAEAIQAEAJAAAMIAAAwg");
	this.shape_9.setTransform(134.89,79.6462,1.5238,1.5237);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgTAmQgLgHgFgJQgGgJAAgNQAAgMAFgKQAGgKAKgFQAJgFALAAQANAAAJAFQAKAGAFAJQAFAJAAANIAAAFIhEAAQABAGADAFQADAGAIAEQAGAEAJAAQAHAAAHgDQAGgDAEgEIAJAJQgFAHgJAEQgJADgLAAQgMAAgKgFgAgNgaQgHAFgDAFIgDALIA2AAQgBgHgDgEQgCgFgHgFQgGgDgJAAQgHAAgGADg");
	this.shape_10.setTransform(114.4711,79.7224,1.5238,1.5237);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgVA3QgKgDgIgGIAHgMQAGAFAJADQAJADAIAAQAPAAAIgHQAGgHAAgOIAAgHQgEAGgHADQgJAEgJAAQgMAAgKgFQgLgFgEgJQgHgJAAgMQAAgMAHgJQAEgJALgGQAJgFANAAQAJAAAJAFQAHADAFAFIAAgMIAOAAIAABIQABAXgLAKQgLALgXAAQgLAAgKgEgAgOgpQgGADgEAHQgDAFAAAJQAAAIADAHQAEAEAGAEQAHAEAHAAQAJAAAHgEQAGgEAEgEQAEgHgBgIQABgJgEgFQgEgHgGgDQgHgDgJAAQgHAAgHADg");
	this.shape_11.setTransform(97.9759,82.0841,1.5238,1.5237);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgVAoQgIgEgDgFQgEgFAAgIQAAgGADgGQAEgGAHgCQAJgEALAAIAXAAIAAgDQAAgKgFgFQgGgFgKAAQgHAAgIACQgIAEgEADIgHgLQAHgGAJgDQAKgCAJAAQASAAAIAIQAKAIAAASIAAAyIgPAAIAAgLQgDAEgFAEQgIAEgLAAQgJAAgHgDgAgRAIQgEAEAAAGQAAAGAFAEQAFADAJAAQAIAAAGgDQAHgGACgGIAAgMIgWAAQgMAAgEAEg");
	this.shape_12.setTransform(82.4712,79.7224,1.5238,1.5237);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AAZArIAAguQAAgNgGgGQgGgGgLAAQgIAAgFADQgGADgEAHQgDAGAAAJIAAArIgPAAIAAhUIAOAAIAAANQAEgFAHgEQAJgFAKAAQAMAAAGAEQAIAEAFAIQAEAJAAAMIAAAwg");
	this.shape_13.setTransform(67.3855,79.6462,1.5238,1.5237);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgVAoQgHgDgEgGQgEgGAAgHQAAgFAEgHQADgFAHgDQAJgEALAAIAYAAIAAgDQgBgJgFgGQgHgFgJAAQgHAAgIACQgIAEgEADIgGgLQAHgGAIgDQAKgCAJAAQARAAAKAIQAJAIAAASIAAAyIgPAAIAAgLQgDAEgFAEQgHAEgLAAQgKAAgHgDgAgQAIQgFAEAAAGQAAAGAGAEQADADAKAAQAIAAAGgDQAHgFADgHIAAgMIgXAAQgMAAgDAEg");
	this.shape_14.setTransform(51.2713,79.7224,1.5238,1.5237);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AAsA4IAAhRIgoBDIgHAAIgohCIAABQIgQAAIAAhvIAOAAIAtBOIAuhOIANAAIABBvg");
	this.shape_15.setTransform(32.7952,77.6274,1.5238,1.5237);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgVA3QgLgDgHgGIAHgMQAGAFAJADQAJADAIAAQAOAAAIgHQAHgHAAgOIAAgHQgEAGgHADQgJAEgJAAQgLAAgLgFQgLgFgFgJQgFgIAAgNQAAgNAFgIQAFgJALgGQAJgFANAAQAJAAAJAFQAHADAFAGIAAgNIAOAAIAABIQAAAXgLAKQgLALgWAAQgLAAgKgEgAgOgpQgGADgEAHQgEAFAAAJQAAAIAEAHQADAEAHAEQAHAEAHAAQAJAAAGgEQAHgEAEgEQADgHAAgIQAAgJgDgFQgEgHgHgDQgGgDgJAAQgHAAgHADg");
	this.shape_16.setTransform(122.2425,48.1158,1.5238,1.5237);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AAZArIAAguQAAgNgGgGQgGgGgLAAQgIAAgFADQgGADgDAHQgEAFAAAKIAAArIgPAAIAAhUIAPAAIAAANQAEgGAGgDQAJgFAKAAQALAAAIAEQAHAEAFAIQAEAJAAAMIAAAwg");
	this.shape_17.setTransform(106.1663,45.6779,1.5238,1.5237);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgHA8IAAhUIAPAAIAABUgAgGgqQgDgEAAgEQAAgEADgDQACgCAEAAQAEAAADACQADADAAAEQAAAFgDADQgCACgFAAQgEAAgCgCg");
	this.shape_18.setTransform(94.4331,42.9734,1.5238,1.5237);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AAZArIAAguQAAgNgGgGQgGgGgLAAQgIAAgFADQgGADgEAHQgDAGAAAJIAAArIgPAAIAAhUIAPAAIAAANQAEgGAGgDQAJgFAKAAQAMAAAGAEQAIAEAFAIQAEAJAAAMIAAAwg");
	this.shape_19.setTransform(82.776,45.6779,1.5238,1.5237);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgWArIAAhUIAPAAIAAAOQAEgHAFgDQAJgFAMAAIAAAPIgCAAIgCAAQgMAAgHAHQgGAIAAANIAAAqg");
	this.shape_20.setTransform(70.2808,45.6779,1.5238,1.5237);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgVAoQgIgEgDgFQgEgFAAgIQAAgGADgGQAEgGAHgCQAJgEALAAIAXAAIAAgDQAAgKgFgFQgGgFgKAAQgHAAgIACQgIAEgEADIgHgLQAHgGAJgDQAKgCAJAAQASAAAIAIQAKAIAAASIAAAyIgPAAIAAgLQgDAFgFADQgIAEgLAAQgJAAgHgDgAgRAIQgEAEAAAGQAAAGAFAEQAFADAJAAQAIAAAGgDQAHgGACgGIAAgMIgWAAQgMAAgEAEg");
	this.shape_21.setTransform(56.8713,45.7541,1.5238,1.5237);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgUAmQgKgHgGgJQgFgKAAgMQAAgMAFgKQAFgJALgGQAIgFAMAAQANAAAJAFQAKAGAFAJQAFAKAAAMIAAADIAAACIhEAAQABAGADAFQADAGAIAEQAGAEAJAAQAGAAAIgDQAGgDAEgEIAJAJQgGAHgIAEQgJADgLAAQgMAAgLgFgAgNgaQgGAEgEAGIgDALIA1AAQAAgHgDgEQgCgFgHgFQgGgDgJAAQgHAAgGADg");
	this.shape_22.setTransform(42.9285,45.7541,1.5238,1.5237);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AglA4IAAhvIAQAAIAABhIA7AAIAAAOg");
	this.shape_23.setTransform(29.5571,43.659,1.5238,1.5237);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgHA7IAAh1IAPAAIAAB1g");
	this.shape_24.setTransform(128.5663,9.1955,1.5238,1.5237);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AgWAnQgIgEgEgIQgFgIAAgNIAAgwIAPAAIAAAuQAAANAHAGQAFAGALAAQAHAAAGgDQAGgEADgGQAEgGAAgJIAAgrIAPAAIAABUIgPAAIAAgMQgDAEgHAFQgIAEgJAAQgLAAgJgEg");
	this.shape_25.setTransform(116.833,11.8238,1.5238,1.5237);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AgOA8IAAhHIgPAAIAAgNIAPAAIAAgIQAAgMAHgHQAHgIANAAIAJABQAGACACACIgFAMQgCgCgDgBIgHgBQgGAAgEADQgDAEAAAIIAAAHIAYAAIAAANIgYAAIAABHg");
	this.shape_26.setTransform(104.9473,9.1193,1.5238,1.5237);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgWArIAAhUIAPAAIAAAOQAEgHAFgDQAJgFAMAAIAAAPIgCAAIgCAAQgMAAgHAHQgGAIAAANIAAAqg");
	this.shape_27.setTransform(95.7283,11.7095,1.5238,1.5237);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AgUAmQgKgGgGgKQgFgJAAgNQAAgNAFgJQAGgJAJgGQAJgFAMAAQAOAAAIAFQAKAGAFAJQAFAKAAAMIAAADIAAACIhEAAQABAGADAFQAEAHAHADQAGAEAJAAQAHAAAGgDQAHgDAEgEIAJAJQgHAHgIAEQgHADgMAAQgMAAgLgFgAgNgaQgGAEgEAGQgCAFgBAGIA2AAQgBgHgDgEQgDgGgHgEQgFgDgJAAQgHAAgGADg");
	this.shape_28.setTransform(82.6236,11.7857,1.5238,1.5237);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AAZArIgZg/IgYA/IgOAAIgghVIAPAAIAYBEIAahEIAMAAIAZBDIAahDIANAAIgfBVg");
	this.shape_29.setTransform(64.5284,11.7476,1.5238,1.5237);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("AgWAmQgJgGgGgKQgGgJAAgNQAAgMAGgKQAGgKAJgFQAKgFAMAAQAOAAAJAFQAKAGAFAJQAGAKAAAMQAAANgGAJQgFAJgKAHQgKAFgNAAQgLAAgLgFgAgNgZQgHAEgEAGQgEAHAAAIQAAAJAEAHQAEAHAHADQAFAEAIAAQAIAAAHgEQAGgDAEgHQAEgHAAgJQAAgIgEgHQgEgHgGgDQgHgEgIAAQgIAAgFAEg");
	this.shape_30.setTransform(46.2047,11.7857,1.5238,1.5237);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AgsA4IAAhvIAsAAQANAAALAEQALAFAFAJQAFAKAAALQAAAMgFAIQgFAIgLAGQgLAEgNAAIgcAAIAAAigAgcAIIAbAAQAPAAAHgHQAIgFAAgMQAAgMgIgHQgHgGgPAAIgbAAg");
	this.shape_31.setTransform(30.5857,9.6906,1.5238,1.5237);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AgtAOIAAgbIBbAAIAAAbg");
	this.shape_32.setTransform(4.575,11.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol99, new cjs.Rectangle(0,0,188.7,125), null);


(lib.Symbol98 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#231F20").s().p("AgUAoQgLgDgEgEIAGgMQAGAEAIACQAHADAIAAQALAAAFgDQAEgDAAgGQAAgDgDgDQgCgCgFgBIgVgEIgLgEQgEgBgDgFQgDgFAAgHQAAgIAEgFQAEgGAIgDQAJgDAJAAQAJAAAIACQAIABAGAEIgHAMQgEgDgIgCQgGgBgGAAQgJAAgFADQgFAEAAAEQAAAFADACQACACAGACIAJACIAMACIAKADQAFACADAFQADAEAAAHQAAAIgFAFQgEAGgIADQgIADgLAAQgKAAgKgDg");
	this.shape.setTransform(198.2803,45.9674,1.5238,1.5237);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgHA7IAAh1IAOAAIAAB1g");
	this.shape_1.setTransform(188.7946,43.3771,1.5238,1.5237);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgVAoQgHgDgEgGQgEgGAAgHQAAgHADgFQAEgFAHgDQAJgEALAAIAYAAIAAgDQAAgJgGgGQgHgFgJAAQgGAAgJACQgJAEgDADIgHgLQAIgGAIgDQALgCAHAAQATAAAIAIQAKAJAAARIAAAyIgOAAIAAgLQgEAEgFAEQgIAEgKAAQgKAAgHgDgAgRAIQgDAEAAAGQAAAGAEAEQAFADAJAAQAJAAAFgDQAGgFAEgHIAAgMIgXAAQgLAAgFAEg");
	this.shape_2.setTransform(177.6708,45.9674,1.5238,1.5237);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgHA8IAAhTIAPAAIAABTgAgGgqQgDgEAAgDQAAgFADgDQADgCADAAQAEAAADACQADADAAAEQAAAEgCAEQgDADgFAAQgDAAgDgDg");
	this.shape_3.setTransform(167.4233,43.1866,1.5238,1.5237);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgWArIAAhUIAPAAIAAAOQAEgHAFgDQAJgFAMAAIAAAPIgCAAIgCAAQgMAAgHAHQgGAIAAANIAAAqg");
	this.shape_4.setTransform(159.8804,45.8912,1.5238,1.5237);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgWAmQgKgHgFgJQgGgJAAgNQAAgMAGgKQAFgJAKgGQAJgFANAAQAOAAAJAFQAKAGAFAJQAGAKAAAMQAAANgGAJQgFAJgKAHQgKAFgNAAQgMAAgKgFgAgOgZQgGAEgEAGQgEAHAAAIQAAAJAEAHQAEAGAGAEQAHAEAHAAQAIAAAHgEQAGgDAEgHQAEgHAAgJQAAgIgEgHQgEgHgGgDQgHgEgIAAQgHAAgHAEg");
	this.shape_5.setTransform(146.4709,45.9674,1.5238,1.5237);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgHAtQgIgGAAgNIAAguIgOAAIAAgNIAOAAIAAgSIAPAAIAAASIAYAAIAAANIgYAAIAAAtQAAAGADAFQADADAHAAQAHAAAFgEIAFALQgEADgFACQgEABgGAAQgMAAgGgHg");
	this.shape_6.setTransform(134.0139,44.596,1.5238,1.5237);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgVAnQgIgDgGgJQgEgJAAgMIAAgwIAPAAIAAAuQABANAFAGQAHAGAKAAQAHAAAGgDQAGgEAEgFQADgHAAgJIAAgrIAPAAIAABUIgPAAIAAgNQgDAFgHAEQgIAFgJAAQgLAAgIgEg");
	this.shape_7.setTransform(120.7568,46.0054,1.5238,1.5237);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgHA4IAAhhIgmAAIAAgOIBbAAIAAAOIgmAAIAABhg");
	this.shape_8.setTransform(105.7092,43.8723,1.5238,1.5237);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgVAmQgLgHgFgJQgGgKAAgMQAAgMAGgKQAFgJALgGQAIgFANAAQANAAAKAFQAKAFAFAKQAGAKAAAMQAAAMgGAKQgFAKgKAGQgLAFgMAAQgMAAgJgFgAgOgZQgGAEgEAGQgDAHAAAIQAAAJADAHQAEAGAGAEQAHAEAHAAQAIAAAHgEQAHgEADgGQAEgHgBgJQABgIgEgHQgDgGgHgEQgHgEgIAAQgHAAgHAEg");
	this.shape_9.setTransform(84.2617,45.9674,1.5238,1.5237);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgUAmQgKgHgGgJQgFgKAAgMQAAgMAFgKQAGgKAKgFQAIgFAMAAQANAAAJAFQAKAGAFAJQAFAJAAANIAAADIAAACIhEAAQABAGADAFQADAGAIAEQAGAEAJAAQAGAAAIgDQAGgDAEgEIAJAJQgFAHgJAEQgJADgLAAQgMAAgLgFgAgNgaQgGAEgEAGIgDALIA2AAQgBgHgDgEQgCgFgHgFQgGgDgJAAQgHAAgGADg");
	this.shape_10.setTransform(69.0617,45.9674,1.5238,1.5237);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgWA2QgKgFgFgKQgGgKAAgNQAAgMAGgJQAFgKAKgFQAJgGANAAQAKAAAIAFQAGAEAEAFIAAgvIAQAAIAAB2IgPAAIAAgNQgEAGgHADQgIAFgKAAQgMAAgKgGgAgOgJQgGAEgEAGQgDAGAAAJQAAAKADAGQAEAHAGAEQAHADAHAAQAJAAAGgDQAGgEAEgHQAEgGgBgKQABgJgEgGQgEgGgGgEQgGgDgJAAQgHAAgHADg");
	this.shape_11.setTransform(52.7189,43.4533,1.5238,1.5237);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgHA8IAAhTIAPAAIAABTgAgGgqQgDgEAAgDQAAgFADgDQADgCADAAQAEAAAEACQACAEAAADQAAAFgCADQgDADgFAAQgDAAgDgDg");
	this.shape_12.setTransform(41.5571,43.1866,1.5238,1.5237);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgHA4IgxhvIARAAIAoBbIAohbIAQAAIgxBvg");
	this.shape_13.setTransform(29.8238,43.8723,1.5238,1.5237);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgTAmQgLgHgFgJQgGgJAAgNQAAgMAFgKQAGgKAKgFQAJgFALAAQANAAAJAFQAKAGAFAJQAFAJAAANIAAAFIhEAAQABAGADAFQADAGAIAEQAGAEAJAAQAHAAAHgDQAGgDAEgEIAJAJQgFAHgJAEQgJADgLAAQgMAAgKgFgAgNgaQgHAFgDAFIgDALIA2AAQgBgHgDgEQgCgFgHgFQgGgDgJAAQgHAAgGADg");
	this.shape_14.setTransform(198.6612,11.999,1.5238,1.5237);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AAZArIAAguQAAgNgGgGQgGgGgLAAQgIAAgFADQgGADgEAHQgDAGAAAJIAAArIgPAAIAAhUIAOAAIAAANQAEgFAHgEQAJgFAKAAQAMAAAGAEQAIAEAFAIQAEAJAAAMIAAAwg");
	this.shape_15.setTransform(182.9661,11.9228,1.5238,1.5237);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgHA8IAAhUIAPAAIAABUgAgHgqQgCgEAAgEQAAgEACgDQADgCAEgBQAEABAEACQACADAAAEQAAAFgCADQgDACgFAAQgEAAgDgCg");
	this.shape_16.setTransform(171.1947,9.2183,1.5238,1.5237);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgHA7IAAh1IAPAAIAAB1g");
	this.shape_17.setTransform(164.3756,9.4087,1.5238,1.5237);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AAZArIAAguQAAgNgGgGQgGgGgLAAQgHAAgGADQgGADgDAHQgEAFAAAKIAAArIgPAAIAAhUIAPAAIAAANQAEgGAGgDQAJgFAKAAQALAAAIAEQAIAEAEAIQAEAJAAAMIAAAwg");
	this.shape_18.setTransform(152.7186,11.9228,1.5238,1.5237);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgXA1QgKgEgJgIQgHgIgFgLQgFgJAAgNQAAgMAFgKQAFgKAHgIQAJgIAKgEQALgFAMAAQANAAALAFQAKAFAJAHQAHAHAFALQAFAKAAAMQAAAMgFALQgFALgHAHQgJAHgKAFQgLAEgNAAQgMAAgLgEgAgQgnQgIADgGAGQgGAGgDAIQgDAHgBAJQABAKADAHQADAIAGAGQAGAFAIAEQAIADAIAAQAJAAAJgDQAHgEAGgFQAGgGADgIQADgHABgKQgBgJgDgHQgDgIgGgGQgGgFgHgEQgJgDgJAAQgIAAgIADg");
	this.shape_19.setTransform(134.1662,9.9039,1.5238,1.5237);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgGAjIAAgdIgdAAIAAgLIAdAAIAAgdIANAAIAAAdIAdAAIAAALIgdAAIAAAdg");
	this.shape_20.setTransform(110.2806,9.9039,1.5238,1.5237);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgWAyQgLgGgGgNQgGgMAAgTQAAgRAGgNQAGgMALgIQALgGALgBQANABAKAGQALAIAGAMQAGANAAARQAAATgGAMQgGANgLAGQgKAIgNgBQgLABgLgIgAgOglQgHAEgEAKQgEAKAAANQAAANAEALQAEAKAHAEQAGAFAIAAQAJAAAHgFQAGgEAEgKQAEgLAAgNQAAgNgEgKQgEgKgGgEQgHgFgJAAQgIAAgGAFg");
	this.shape_21.setTransform(95.0426,9.9039,1.5238,1.5237);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgXAyQgJgGgGgNQgHgMAAgTQAAgRAHgNQAGgMAJgIQAMgGALgBQAMABAMAGQAKAIAGAMQAFAMAAASQAAAUgFALQgGANgKAGQgMAIgMgBQgLABgMgIgAgPglQgGAEgEAKQgEAJABAOQgBAPAEAJQAEAKAGAEQAHAFAIAAQAJAAAHgFQAGgEAEgKQAEgJgBgPQABgOgEgJQgEgKgGgEQgHgFgJAAQgIAAgHAFg");
	this.shape_22.setTransform(78.776,9.9039,1.5238,1.5237);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgWAyQgLgGgGgNQgGgMAAgTQAAgRAGgNQAGgMALgIQALgGALgBQANABALAGQAKAIAGAMQAGANAAARQAAATgGAMQgGANgKAGQgLAIgNgBQgLABgLgIgAgOglQgHAEgEAKQgEAKAAANQAAANAEALQAEAKAHAEQAGAFAIAAQAJAAAHgFQAGgEAEgKQAEgJAAgPQAAgOgEgJQgEgKgGgEQgHgFgJAAQgIAAgGAFg");
	this.shape_23.setTransform(62.5094,9.9039,1.5238,1.5237);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgJAWIAGgWIgDgCQgEgDAAgFQAAgFAEgDQADgDADAAQAEAAADADQAEADAAAFIgBAGIgKAag");
	this.shape_24.setTransform(51.957,18.627,1.5238,1.5237);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AgXA1QgMgEgGgGIAIgNQAFAGAJADQAJADAKAAQAMAAAHgFQAHgGAAgJQAAgFgDgGQgDgFgIgCQgIgCgLAAIgaAAIAGg6IA+AAIAAAOIgwAAIgDAfIAMAAQAQAAAKAEQAKAEAFAHQAFAIAAAKQAAAJgFAIQgGAJgIAEQgLAFgMAAQgLAAgMgEg");
	this.shape_25.setTransform(41.938,10.0182,1.5238,1.5237);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AglA5IAAgLIAsgsQAGgEADgFQAEgFAAgDIABgIQAAgJgGgEQgFgFgMAAQgIAAgIADQgHADgFAGIgLgKQAGgIALgEQALgFANAAQAKAAAJAEQAJAEAFAHQAEAHAAAKQAAAFgBAFQgCAHgEAFQgCADgJAJIghAhIA4AAIAAAOg");
	this.shape_26.setTransform(27.919,9.7897,1.5238,1.5237);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgtAOIAAgbIBbAAIAAAbg");
	this.shape_27.setTransform(4.575,12.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol98, new cjs.Rectangle(0,0,205.1,52.6), null);


(lib.Symbol97 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgTAdQgGgDgEgGQgDgFAAgJQAAgJAFgKQAFgJAIgEQAJgGAJAAQAJAAAHADQAGAEADAHQAEAFAAAIQAAAKgFAJQgGAJgIAFQgJAFgJAAQgHAAgIgEgAgFgPQgFAEgCAFQgDAFAAAGQAAAHAEADQADAEAFAAQAEAAAFgDQAEgDADgFQACgHAAgGQAAgFgDgFQgDgDgGAAQgDAAgFADg");
	this.shape.setTransform(115.525,9.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYAgIAIgoIABgEIgCgFQgBgBgEAAQgEAAgCACQgDABgDAEIgDAKIgHAhIgQAAIAJgsQAAgGgGAAQgNAAgDARIgHAhIgRAAIANg+IAQAAIgCAIQAFgEAFgDQAFgCAGAAQAKAAAEAKQAKgKAKAAQAIAAAEAEQAFAFAAAHIgBAHIgJAog");
	this.shape_1.setTransform(106.425,9.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAdQgGgCgDgGQgCgFAAgIQgBgJAFgKQAEgJAJgGQAIgGAKAAQAIAAAGADQAGADADAFQAEAGAAAHIgBAJIgCAEIgqAAIgBAEQAAAFADADQADADAFAAQAEAAAEgCQAEgCACgEIAQACQgLATgTAAQgKAAgGgEgAgEgPQgFADgCAHIAbAAIAAgDQgBgFgCgDQgCgDgGAAQgFAAgEAEg");
	this.shape_2.setTransform(97.8,9.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpArIAThVIAcAAQASgBAJAJQAJAKAAARQAAAOgFAKQgFANgLAGQgLAIgPgBgAgUAdIAOAAQAOAAAHgKQAIgKAAgSQAAgKgEgEQgFgFgJAAIgNAAg");
	this.shape_3.setTransform(90.075,8.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAgIAOg+IAOAAIgBAJQAEgFAEgDQAEgCAGAAIAFABIAEACIgGAOIgEgBIgEgBQgHAAgEAFQgEAGgBAHIgHAeg");
	this.shape_4.setTransform(80.45,9.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAbQgFgEAAgHIABgJIAJgmIAQAAIgIAmIgBAFQAAAEACABQACACAEAAQAGAAADgDQAEgDADgKIAHgiIARAAIgOA+IgPAAIACgIQgGAFgDACQgEACgHAAQgJAAgEgFg");
	this.shape_5.setTransform(74.125,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAdQgGgCgDgHQgEgHAAgHQAAgIAFgLQAEgIAJgFQAJgGAJAAQAIAAAIADQAHAFADAGQADAFAAAIQAAALgFAIQgEAIgJAGQgKAFgIAAQgJAAgHgEgAgFgPQgEADgDAGQgCAFAAAGQAAAHADADQADAEAFAAQAFAAAEgDQAEgCADgGQADgHAAgGQAAgGgEgEQgDgDgFAAQgEAAgFADg");
	this.shape_6.setTransform(66.725,9.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggAsIgHgCIAGgMIAFABIAFgBIAFgDIAFgIIgLg+IARAAIAFAsIABAAIAXgsIASAAIgmBAQgFAKgFAFQgFAGgDAAQgEACgGAAg");
	this.shape_7.setTransform(59.875,10.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAoQgDgDAAgGIAHglIgJAAIADgOIAJAAIACgLIASgMIgEAXIALAAIgCAOIgNAAIgGAhIABADIADAAIAGgBIAAANIgMACQgHAAgEgEg");
	this.shape_8.setTransform(51.85,8.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAcQgGgGAAgJIAQgCQAAAEACAEQADACAGAAQAEAAADgCQADgCAAgEQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgDgCgFgBQgLgCgFgEQgEgFAAgHQAAgGADgFQADgEAGgDQAGgDAHAAQALAAAHAFQAHAEAAAIIgQACQgBgEgCgBQgCgCgEAAQgEAAgCACQgDABAAADIABADIAEACIAGACQAIABAEADQAEACACADQACAEAAAFQAAAHgEAEQgDAFgHADQgGADgIAAQgNAAgHgFg");
	this.shape_9.setTransform(46.175,9.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSAdQgHgCgCgGQgDgFAAgIQgBgJAFgKQAEgJAJgGQAJgGAJAAQAJAAAFADQAHADACAFQADAGABAHIgCAJIgBAEIgrAAIAAAEQAAAFADADQADADAFAAQAFAAADgCQAEgCACgEIAQACQgLATgTAAQgKAAgFgEgAgEgPQgFADgCAHIAbAAIAAgDQAAgGgDgCQgCgDgGAAQgFAAgEAEg");
	this.shape_10.setTransform(39.65,9.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbAbQgFgEAAgHIABgJIAJgmIAQAAIgIAmIAAAFQAAAEABABQACACAEAAQAGAAADgDQAEgEADgJIAHgiIARAAIgOA+IgPAAIACgIQgEAEgFADQgEACgGAAQgKAAgEgFg");
	this.shape_11.setTransform(32.775,9.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAAsIAHgeIgBAAQgHAIgKAAQgLAAgGgHQgGgHAAgMQAAgKAFgJQADgJAIgGQAIgFAJAAQAGAAAFADQAEACADAFIAAAAIACgJIAQAAIgTBWgAgIgbQgEAFgCAFQgCAGgBAHQAAAGAEADQABAEAGAAQAFAAAEgDQAEgDADgFQADgHAAgGQAAgIgEgDQgDgEgFAAQgEAAgFADg");
	this.shape_12.setTransform(25.35,10.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAdQgGgCgDgGQgDgFAAgIQABgJAEgKQAEgJAJgGQAIgGAKAAQAIAAAHADQAGADADAFQACAGAAAHIgBAJIAAAEIgsAAIAAAEQAAAFADADQADADAEAAQAFAAAEgCQAEgCACgEIAQACQgKATgVAAQgJAAgGgEgAgFgPQgEADgCAHIAaAAIAAgDQAAgFgCgDQgDgDgFAAQgGAAgEAEg");
	this.shape_13.setTransform(18.1,9.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AANArIgJgeIgDgEIgDgCIgMAAIgIAkIgRAAIAShVIAfAAQAQgBAHAGQAHAFAAAMQAAAFgCAGQgDAFgGAEQgFADgJACIAAAAQADAAADAEIAEALIAGAXgAgLgGIAOAAQAJAAAFgDQAEgDAAgIQAAgDgDgDQgEgCgFAAIgQAAg");
	this.shape_14.setTransform(10.875,8.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E68134").s().p("AoZBeQglAAgagaQgbgbAAglIAAgHQAAglAbgbQAagaAlAAIQyAAQAlAAAbAaQAaAbAAAlIAAAHQAAAlgaAbQgbAaglAAg");
	this.shape_15.setTransform(62.75,9.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol97, new cjs.Rectangle(0,0,125.5,18.9), null);


(lib.Symbol96 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#231F20").s().p("AggBmQgOgNAAgUQAAgVAOgNQANgMATAAQAVAAANAMQANANAAAVQAAAUgNANQgOANgUAAQgTAAgNgNgAgggiQgOgOAAgUQAAgUAOgNQANgNATAAQAVAAANANQANANAAAUQAAAUgNAOQgOANgUAAQgTAAgNgNg");
	this.shape.setTransform(107.325,196.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AApCYIAAhyQAAgtglAAQgTAAgMANQgMANAAAaIAABrIhOAAIAAkvIBOAAIAABmQAMgLASgHQAQgGAUAAQApAAAZAZQAZAYAAAxIAAB/g");
	this.shape_1.setTransform(87.175,192.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgfB1QgYgWAAgqIAAhKIggAAIAAg6IAgAAIAAg6IBNAAIAAA6IAzAAIAAA6IgzAAIAABJQAAAMAHAHQAGAHAKAAQANAAALgHIATA2QgKAGgNAEQgPADgQAAQgrAAgWgVg");
	this.shape_2.setTransform(63.35,194.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgmClIAAjdIBNAAIAADdgAgihdQgNgMABgSQgBgRANgMQANgMAVAAQAVAAAOALQAMAMAAARQAAATgMAMQgOAMgVAAQgVAAgNgMg");
	this.shape_3.setTransform(47.75,191.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAqBvIgph4IgqB4IhMAAIhPjdIBKAAIAtCFIAviFIBBAAIAvCGIAviGIBEAAIhPDdg");
	this.shape_4.setTransform(21.6,196.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AApBxIAAhxQAAguglAAQgTAAgMANQgMANAAAaIAABrIhOAAIAAjdIBKAAIAAAYQANgOASgHQARgHAWAAQApAAAZAYQAZAZAAAyIAAB+g");
	this.shape_5.setTransform(170.925,143.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AhABkQgcgPgRgaQgPgagBghQABggAPgaQARgbAcgOQAdgPAjAAQAkAAAdAPQAcAOAQAaQARAbgBAgQABAhgRAaQgQAagcAPQgdAPgkAAQgjAAgdgPgAghgmQgNAOAAAYQAAAZANAOQANAOAUAAQAUAAAOgOQAMgOAAgZQAAgYgMgOQgOgOgUAAQgUAAgNAOg");
	this.shape_6.setTransform(142.8,143.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgmClIAAjdIBNAAIAADdgAgihdQgNgMABgSQgBgRANgMQANgMAVAAQAVAAAOALQAMAMAAARQAAATgMAMQgOAMgVAAQgVAAgNgMg");
	this.shape_7.setTransform(122.55,137.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgfB1QgYgWAAgqIAAhKIggAAIAAg6IAgAAIAAg6IBNAAIAAA6IAzAAIAAA6IgzAAIAABJQAAAMAHAHQAFAHAMAAQANAAAKgHIATA2QgJAGgOAEQgPADgQAAQgqAAgXgVg");
	this.shape_8.setTransform(106.65,141.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AhaBXQgagZAAgzIAAh7IBOAAIAABwQAAAYAJALQAKAMASAAQARAAAMgNQAMgNAAgaIAAhrIBNAAIAADdIhKAAIAAgYQgMAOgRAHQgRAHgTAAQgrAAgZgag");
	this.shape_9.setTransform(83.275,143.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgmCYIAAkvIBNAAIAAEvg");
	this.shape_10.setTransform(62.55,139.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("Ag/BkQgdgPgQgaQgQgagBghQABggAQgaQAQgbAdgOQAcgPAjAAQAkAAAdAPQAdAOAPAaQAQAbAAAgQAAAhgQAaQgPAagdAPQgdAPgkAAQgjAAgcgPgAghgmQgNAOABAYQgBAZANAOQANAOAUAAQAUAAAOgOQANgOgBgZQABgYgNgOQgOgOgUAAQgUAAgNAOg");
	this.shape_11.setTransform(42.35,143.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AhGCMQgggIgVgPIAag7QAUAMAZAIQAaAIAZAAQAtAAABgXQAAgNgOgGQgOgGgcgGQgggHgWgIQgWgIgQgRQgPgSAAgdQAAgbAOgVQAOgVAdgMQAdgMAoAAQAcAAAcAGQAcAGAUANIgYA8QgpgWgnAAQgXAAgLAHQgLAHAAALQAAAMAMAGQAOAFAcAHQAhAGAVAIQAWAJAQAQQAPARAAAeQAAAagPAVQgOAVgdAMQgcANgoAAQgjAAghgJg");
	this.shape_12.setTransform(15.25,140.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AhACTQgdgHgUgPIAcg2QAOALAUAGQAVAHAUAAQAeAAAPgOQANgNAAgbIAAgHQgWAagrAAQgdAAgZgOQgZgNgOgYQgPgYgBggQABgfAPgZQAOgYAZgNQAZgOAdAAQAwAAAWAfIAAgbIBJAAIAAC1QAAA+ghAfQgiAfg+AAQggAAgdgIgAghhPQgNAMAAAUQAAAUANANQAOANAUAAQAVAAANgNQAPgNAAgUQAAgUgOgMQgOgNgVAAQgUAAgOANg");
	this.shape_13.setTransform(208.4,93.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AApBxIAAhyQAAgtglAAQgTAAgMAOQgMAMAAAZIAABsIhOAAIAAjdIBKAAIAAAYQANgNASgIQARgHAWAAQApAAAZAZQAZAYAAAyIAAB+g");
	this.shape_14.setTransform(180.275,89.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgmClIAAjdIBNAAIAADdgAgihdQgNgMABgSQgBgRANgMQANgMAVAAQAVAAAOALQAMAMAAARQAAATgMAMQgOAMgVAAQgVAAgNgMg");
	this.shape_15.setTransform(159.35,84.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AApBxIAAhyQAAgtglAAQgTAAgMAOQgMAMAAAZIAABsIhOAAIAAjdIBKAAIAAAYQANgNASgIQARgHAWAAQApAAAZAZQAZAYAAAyIAAB+g");
	this.shape_16.setTransform(138.575,89.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AhKBxIAAjdIBKAAIAAAaQALgPAUgHQASgIAaAAIAABGIgSgBQgaAAgOANQgNAOAAAbIAABmg");
	this.shape_17.setTransform(115.9,89.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AhHBqQgTgJgJgPQgLgQABgUQgBgfAZgQQAYgSAzAAIArAAQgCgjgsAAQgQAAgQAFQgRAFgLAJIgag1QARgMAbgHQAagHAbAAQA2AAAdAaQAdAZAAA0IAAB6IhIAAIAAgcQgQAggxAAQgZAAgTgJgAgiArQAAAKAIAHQAIAGANAAQANAAAKgHQAKgGAFgNIAAgTIghAAQgiAAAAAWg");
	this.shape_18.setTransform(92.3,89.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("Ag5BkQgegPgQgaQgRgaABghQgBggARgaQAPgaAcgPQAcgPAiAAQAhAAAbAOQAbAOAQAaQAPAaABAjIgCATIigAAQAFARAOAJQAOAJAVAAQAPAAAMgEQALgFAMgKIAqArQghAkg+AAQgmAAgdgPgAgbgwQgMAKgEASIBaAAQgCgSgMgKQgNgKgSAAQgRAAgMAKg");
	this.shape_19.setTransform(66.75,89.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AhsCQIAAkeIBRAAIAADdICIAAIAABBg");
	this.shape_20.setTransform(42.225,86.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("Ag6BkQgdgPgRgaQgQgaAAghQAAggAQgaQAQgaAcgPQAcgPAiAAQAhAAAbAOQAbAOAQAaQAPAaAAAjIgBATIigAAQAFARAOAJQAOAJAUAAQAQAAAMgEQAMgFAMgKIAoArQgfAkg/AAQgmAAgegPgAgbgwQgMAKgDASIBZAAQgDgSgMgKQgMgKgSAAQgRAAgMAKg");
	this.shape_21.setTransform(15.15,89.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("Ag5BkQgegPgRgaQgPgaAAghQAAggAPgaQAQgaAcgPQAcgPAiAAQAhAAAbAOQAbAOAQAaQAPAaAAAjIgBATIigAAQAFARAOAJQAOAJAUAAQARAAALgEQALgFAMgKIAqArQghAkg+AAQgmAAgdgPgAgbgwQgMAKgEASIBaAAQgCgSgMgKQgNgKgSAAQgRAAgMAKg");
	this.shape_22.setTransform(202.55,36.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgfB1QgYgWAAgqIAAhKIggAAIAAg6IAgAAIAAg6IBNAAIAAA6IAzAAIAAA6IgzAAIAABJQAAAMAHAHQAGAHAKAAQANAAALgHIATA2QgKAGgNAEQgPADgQAAQgrAAgWgVg");
	this.shape_23.setTransform(179.9,34.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("Ag6BkQgdgPgRgaQgPgagBghQABggAPgaQAQgaAcgPQAcgPAiAAQAhAAAbAOQAbAOAQAaQAPAaAAAjIAAATIihAAQAFARAOAJQAOAJAUAAQAQAAAMgEQALgFANgKIAoArQgfAkg/AAQgmAAgegPgAgbgwQgMAKgDASIBaAAQgDgSgNgKQgMgKgSAAQgRAAgMAKg");
	this.shape_24.setTransform(157.6,36.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AgmCYIAAkvIBNAAIAAEvg");
	this.shape_25.setTransform(137.85,32.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("Ah8CZIAAktIBLAAIAAAWQAVgaAsAAQAeAAAZAOQAYAPAPAaQAPAaAAAiQAAAjgPAZQgPAagYAOQgZAOgeAAQgnAAgWgXIAABjgAgihMQgNAPAAAYQAAAZANANQAOAOAUAAQATAAANgOQANgNABgZQgBgYgNgPQgNgOgTAAQgUAAgOAOg");
	this.shape_26.setTransform(117.75,40.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("ABwBxIAAhyQAAgXgJgLQgJgLgQAAQgRAAgLAMQgLANAAAXIAABvIhMAAIAAhyQAAgtgiAAQgSAAgLAMQgLANAAAXIAABvIhNAAIAAjdIBKAAIAAAXQAMgOARgGQARgHAUAAQAXAAATAJQARAJAMARQANgRAUgJQAUgJAYAAQApAAAYAYQAZAZAAAyIAAB+g");
	this.shape_27.setTransform(81.3,36.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AhABkQgcgPgRgaQgPgagBghQABggAPgaQARgbAcgOQAdgPAjAAQAkAAAdAPQAcAOAQAaQARAbgBAgQABAhgRAaQgQAagcAPQgdAPgkAAQgjAAgdgPgAghgmQgNAOAAAYQAAAZANAOQANAOAUAAQAUAAAOgOQAMgOAAgZQAAgYgMgOQgOgOgUAAQgUAAgNAOg");
	this.shape_28.setTransform(46.05,36.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("Ag/CCQgkgTgUgiQgVgiAAgrQAAgqAVgiQAUgiAkgTQAkgTAsAAQAnAAAgANQAgAOAVAbIg0AuQgcghgoAAQgWAAgSAKQgTAKgKATQgKASAAAYQAAAYAKATQAKASATALQASAKAWAAQAoAAAcgiIA0AvQgVAaggAOQggAOgnAAQgsAAgkgTg");
	this.shape_29.setTransform(17.475,33.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol96, new cjs.Rectangle(0,0,235.8,221), null);


(lib.Symbol84 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// banner 300x500pix
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhECaQgegHgVgQIAeg5QAOAMAWAHQAVAGAWAAQAfAAAPgOQAPgOAAgcIAAgIQgYAcgsAAQgfAAgagOQgbgOgPgaQgQgYAAgiQAAghAQgaQAPgZAbgOQAagOAfAAQAxAAAXAgIAAgcIBOAAIAAC9QAABBgkAhQgjAghBAAQgiAAgfgIgAgjhTQgOANAAAVQAAAVAPANQAOAOAVAAQAWAAAOgOQAPgNAAgVQAAgVgOgNQgOgNgXAAQgVAAgPANg");
	this.shape.setTransform(177.375,257.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AAqB3IAAh3QAAgxgmAAQgUABgNAOQgMANAAAbIAABxIhSAAIAAjpIBOAAIAAAaQAOgPASgHQASgIAXABQArAAAbAZQAaAaAAA0IAACFg");
	this.shape_1.setTransform(147.875,253.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgoCtIAAjoIBRAAIAADogAgjhiQgOgMAAgSQAAgTAOgMQAOgNAVAAQAXAAANAMQAOAMAAATQAAASgOANQgNANgXAAQgVAAgOgNg");
	this.shape_2.setTransform(125.95,247.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAqB3IAAh3QAAgxgmAAQgUABgNAOQgMANAAAbIAABxIhSAAIAAjpIBOAAIAAAaQAOgPASgHQASgIAXABQArAAAbAZQAaAaAAA0IAACFg");
	this.shape_3.setTransform(104.175,253.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgoCtIAAjoIBRAAIAADogAgjhiQgOgMAAgSQAAgTAOgMQANgNAWAAQAXAAANAMQAOAMAAATQAAASgOANQgNANgXAAQgWAAgNgNg");
	this.shape_4.setTransform(82.25,247.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AhLBvQgUgJgKgRQgKgPAAgWQAAghAZgRQAagSA1AAIAtAAQgCglguAAQgRAAgRAFQgRAGgMAJIgcg3QATgNAcgIQAcgGAcAAQA5AAAeAaQAfAbAAA2IAACBIhMAAIAAgeQgSAhgyAAQgbAAgUgJgAgkAtQAAALAIAHQAJAGAOAAQANAAALgHQALgHAEgNIAAgVIgiAAQgkABAAAXg");
	this.shape_5.setTransform(61.275,253.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AhNB3IAAjpIBNAAIAAAcQANgPATgJQAVgHAZAAIAABJIgSgBQgaAAgPAOQgPAOAAAdIAABrg");
	this.shape_6.setTransform(39.6,253.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgpCXIAAjpIhdAAIAAhEIENAAIAABEIhcAAIAADpg");
	this.shape_7.setTransform(15.4,249.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("Ag9BpQgfgQgRgbQgQgcgBgiQAAgiARgbQAQgcAegPQAdgPAkgBQAjAAAcAPQAdAPAQAbQAQAbAAAlIgBATIipAAQAGASAPAKQAPAKAVAAQARAAAMgEQAMgGANgKIArAtQgjAmhBgBQgnAAgggPgAgcgzQgNALgEASIBfAAQgDgSgNgLQgNgLgSABQgTgBgMALg");
	this.shape_8.setTransform(216.7,192);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("Ag9BpQgegQgRgbQgRgcAAgiQAAgiAQgbQAQgcAegPQAegPAjgBQAiAAAdAPQAcAPARAbQAQAbAAAlIgBATIioAAQAFASAPAKQAOAKAWAAQARAAAMgEQAMgGAMgKIAsAtQgjAmhBgBQgoAAgfgPgAgcgzQgNALgDASIBeAAQgDgSgNgLQgNgLgTABQgRgBgNALg");
	this.shape_9.setTransform(188.95,192);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AhnCaQgTgGgMgJIAdg5QAHAGAJAEQAKAEAKAAQALAAAIgFQAIgFAFgKIhkjrIBUAAIA4COIA6iOIBNAAIhkDxQgSArgYASQgaARgkAAQgTAAgSgGg");
	this.shape_10.setTransform(161.675,196.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AhDBpQgegQgRgbQgRgcAAgiQAAgiARgbQARgcAegPQAegPAlgBQAmABAeAPQAeAPARAcQARAaAAAjQAAAigRAcQgRAbgeAQQgeAPgmAAQgkAAgfgPgAgigoQgOAPAAAZQAAAaAOAOQAOAPAUABQAVgBAOgPQAOgOAAgaQAAgZgOgPQgOgOgVAAQgUAAgOAOg");
	this.shape_11.setTransform(133.875,192);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgoCgIAAk/IBRAAIAAE/g");
	this.shape_12.setTransform(112.65,187.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AiCCgIAAk7IBPAAIAAAXQAXgbAtAAQAfAAAaAPQAaAPAQAbQAPAbgBAkQABAkgPAbQgQAbgaAPQgaAPgfAAQgoAAgZgZIAABogAgjhQQgOAPAAAaQAAAaAOAOQAOAPAVAAQAVAAAOgPQANgOAAgaQAAgagNgPQgOgOgVAAQgVAAgOAOg");
	this.shape_13.setTransform(91.55,195.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AB1B3IAAh4QAAgYgJgMQgJgLgRgBQgTAAgKAOQgMAMAAAaIAAB0IhRAAIAAh4QABgvgkgBQgSAAgMAOQgLAMAAAaIAAB0IhSAAIAAjoIBOAAIAAAYQANgOASgIQASgGAUgBQAZABAUAIQASAKAMASQANgRAWgKQAVgKAZAAQArAAAaAaQAZAaAAA0IAACFg");
	this.shape_14.setTransform(53.3,191.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("Ah4CXIAAktIDrAAIAABDIiWAAIAAAyICEAAIAAA/IiEAAIAAA3ICcAAIAABCg");
	this.shape_15.setTransform(16.825,188.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AhNB3IAAjoIBNAAIAAAcQANgQATgJQAVgHAZgBIAABKIgSgBQgaAAgPAOQgPAOAAAdIAABrg");
	this.shape_16.setTransform(100.8,130.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AhfBbQgbgaAAg1IAAiBIBRAAIAAB1QAAAZAKAMQALAMASAAQATAAAMgOQAMgOAAgaIAAhwIBSAAIAADoIhOAAIAAgZQgNAOgSAHQgRAHgUAAQguAAgagbg");
	this.shape_17.setTransform(75.35,130.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AhDBpQgegPgRgcQgRgcAAgiQAAgiARgbQARgcAegPQAegQAlAAQAmAAAeAQQAeAPARAcQARAaAAAjQAAAigRAcQgRAcgeAPQgeAPgmAAQgkAAgfgPgAgigoQgOAPAAAZQAAAaAOAOQAOAPAUABQAVgBAOgPQAOgOAAgaQAAgZgOgPQgOgOgVAAQgUAAgOAOg");
	this.shape_18.setTransform(46.025,130.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgqCXIAAhtIhzjAIBaAAIBHB4IBHh4IBSAAIhzDBIAABsg");
	this.shape_19.setTransform(16.65,127.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AghB6QgZgXAAgsIAAhNIgiAAIAAg9IAiAAIAAg8IBRAAIAAA8IA1AAIAAA9Ig1AAIAABMQAAANAHAHQAHAHALAAQAOAAALgHIAUA5QgKAGgPAEQgPADgRAAQgtABgYgXg");
	this.shape_20.setTransform(104.825,67);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AhNB3IAAjoIBNAAIAAAcQANgQATgJQAVgHAZgBIAABKIgSgBQgbAAgOAOQgPAOAAAdIAABrg");
	this.shape_21.setTransform(86.6,69.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AhLBvQgUgJgKgRQgKgPAAgWQAAggAZgSQAagSA1AAIAtAAQgCglguAAQgRAAgRAGQgRAEgMAKIgcg4QATgMAcgIQAcgHAcAAQA5ABAeAaQAfAbAAA2IAACBIhMAAIAAgfQgSAjgygBQgbABgUgKgAgkAtQAAALAIAHQAJAGAOAAQANAAALgHQALgHAEgNIAAgVIgiAAQgkAAAAAYg");
	this.shape_22.setTransform(61.925,69.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AghB6QgZgXAAgsIAAhNIgiAAIAAg9IAiAAIAAg8IBRAAIAAA8IA1AAIAAA9Ig1AAIAABMQAAANAHAHQAHAHALAAQAOAAALgHIAUA5QgKAGgPAEQgPADgRAAQgtABgYgXg");
	this.shape_23.setTransform(39.125,67);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AhJCTQgjgIgVgPIAcg/QAUANAbAIQAbAIAZAAQAxAAAAgYQAAgNgPgGQgOgGgegHQgigIgWgIQgXgIgRgSQgPgTAAgfQAAgcAOgVQAPgXAegMQAegOAqAAQAeAAAdAHQAcAHAXANIgaA/QgsgYgoABQgYAAgMAHQgLAIAAAMQgBAMAOAGQAOAGAdAGQAjAIAXAIQAWAJARARQAQASAAAfQAAAbgPAXQgPAWgeANQgeANgqgBQglABgigKg");
	this.shape_24.setTransform(15.65,66);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("Ag+AfIAAg+IB9AAIAAA+g");
	this.shape_25.setTransform(139.225,7.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AiCCgIAAk7IBOAAIAAAXQAXgbAuAAQAfAAAaAPQAbAPAPAbQAOAbAAAkQAAAkgOAbQgPAbgbAPQgaAPgfAAQgpAAgXgZIAABogAgjhQQgOAPAAAaQAAAaAOAOQAOAPAVAAQAVAAAOgPQANgOAAgaQAAgagNgPQgOgOgVAAQgVAAgOAOg");
	this.shape_26.setTransform(116.5,12.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AB1B2IAAh3QAAgYgJgMQgJgMgRABQgTAAgKANQgMANAAAZIAABzIhRAAIAAh3QAAgvgiAAQgTAAgMANQgLANAAAZIAABzIhSAAIAAjnIBOAAIAAAYQANgPASgGQASgIAUAAQAZAAATAJQATAJAMATQANgSAWgJQAVgKAZAAQArAAAZAaQAaAaAAA0IAACEg");
	this.shape_27.setTransform(78.25,7.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AhfBcQgbgbAAg1IAAiBIBRAAIAAB1QAAAYAKANQALAMASAAQATAAAMgOQAMgNAAgbIAAhwIBSAAIAADnIhOAAIAAgYQgNAOgSAHQgRAHgUABQguAAgagbg");
	this.shape_28.setTransform(40.7,8.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AhBCOQgbgMgRgVIAug3QAYAfAcABQASAAAJgMQAKgKAAgWIAAiBIhnAAIAAhCIC7AAIAAC9QAAA7gdAdQgeAeg4gBQghAAgbgLg");
	this.shape_29.setTransform(11.925,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol84, new cjs.Rectangle(-0.2,-29.9,485.2,308.5), null);


(lib.Symbol80 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#7ECAFD","#7ECAFD"],[0,1],35.5,-1.8,0,35.5,-1.8,39.3).s().p("ABIArQgagEgcgRIhJgoQgqgTgmANQANgJAPgFQAngNArASIBIApQAcAQAbAEQASADAQgDQgEAEgFADQgRAJgUAAQgJAAgJgBg");
	this.shape.setTransform(13.625,4.4614);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol80, new cjs.Rectangle(0,0,27.3,8.9), null);


(lib.Symbol79 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#7ECAFD","#7ECAFD"],[0,1],-21.6,0,0,-21.6,0,39.3).s().p("AEhBqQgXgdglgOQgjgNguACQghABgyAJQhAAMgdABQg0ACgkgTQgagOgdghQgfglgRgSQgcgdgigLQgZgJgWAFIAJgHQAdgSAnAOQAhALAdAdQARASAfAmQAdAgAaAOQAjATA0gCQAegBA/gMQA0gJAfgBQAvgCAjANQAtARAYApg");
	this.shape.setTransform(32.85,10.6357);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol79, new cjs.Rectangle(0,0,65.7,21.3), null);


(lib.Symbol76 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDD373").s().p("An1BmIPrnuIqzMRg");
	this.shape.setTransform(75.4,39.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FD9A5A").s().p("Ao+gEIR+llIvqHvIg4Dkg");
	this.shape_1.setTransform(68,36.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDD373").s().p("ApzABITnj4IvqHug");
	this.shape_2.setTransform(62.775,24.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2804B").s().p("AoWBHIQtmwIwhLTg");
	this.shape_3.setTransform(72.05,36.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol76, new cjs.Rectangle(0,0,125.6,78.5), null);


(lib.Symbol74 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDD373").s().p("AlGBDIKNlCInCH/g");
	this.shape.setTransform(49.15,25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FD9A5A").s().p("Al2gCILtjpIqMFCIglCVg");
	this.shape_1.setTransform(44.325,23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDD373").s().p("AmYABIMxihIqNFCg");
	this.shape_2.setTransform(40.925,16.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2804B").s().p("AlcAuIK5kZIqxHXg");
	this.shape_3.setTransform(46.975,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol74, new cjs.Rectangle(0,0,81.9,51.2), null);


(lib.Symbol73 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F2B38C").s().p("AApBnQgDgCgGgLQgKgTgFgEIgcgXQgTgQgNgOQgNgPgFgMQgEgMANgbQAIgPAVgiQADgFARAKQAQAKgDAEQgfAvABAOQAAAEAcAnQAeAoAEABIAHACQAEAAADADIAGALQgBgBAAAAQgBAAgBAAQAAABgBAAQAAABAAABIABAGIAAACQABAGgFAFQgFAEgEAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape.setTransform(18.5029,33.1429);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7367E1").s().p("AgcByQgvgGgEgHIAHgVQAJgZACgWQACgMgBhDQgBgsALgGQAKgGAVgFQAWgGAQgBQAhgBARAQQAJAIgGAvQgBAFAFAMQAFAMgCAGQgBAHgHAEQgHAEAAADIgOA/QgIAdgDADQgMALgfAAIgYgBg");
	this.shape_1.setTransform(27.1188,25.1441);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDB78").s().p("AACAPIgBAAIAAgBIgCgEIgEgIIgBgEIAAgDIAAgBIACgCIAHgFIADgBIAAAAQAAgBABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAACIgBABIgCAAIgFAFIgCACIAAABIADAJIABADIABACIABACIAAABIAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQgBABAAAAIgBgBg");
	this.shape_2.setTransform(28.9833,51.48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F29A27").s().p("AgEARQgDgBgEgJQgEgHAAgFQAAgDAHgFQAHgEACABQADAAAHAKQAGAIgBADQAAADgJAFQgHAEgDAAIgBAAg");
	this.shape_3.setTransform(29.7317,51.4806);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#91D3F4").s().p("AhLA2QAAgBAqgJQArgIAGgDQAHgDAagqQAagqABABQADABgaArQgaAqgHAFQgFAEguAHQgjAFgHAAIgCAAg");
	this.shape_4.setTransform(28.2836,48.3232);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#91D3F4").s().p("AgVAXIgBgBIAAAAIAAgBIgBgBIgCgEQgBgCAAgEIgBgIIADgHIAEgHQADgEADgCIABgBIAAAAIABAAIABgBIABgBIAFgBIAIgCIAEABIAEABIAGADIAFADIADAEIACADIABAAIAAABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgFgFIgCgBIgDgBIgEgCIgGgBIgGABIgCABIgBABIgBAAIAAABIgBAAIgFAFIgDAFIgCACIgBADIAAAFIAAAFIACAFIABAAIAAABIAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgBABIgDgCg");
	this.shape_5.setTransform(24.3,43.3563);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3BB6F4").s().p("AhCBtQgGgEgXg2QgYg1ADgGQADgFBHgvQBGgvAGgCQAFgBAnAsQAmArABAGQABAHhbA8QhVA8gIAAIAAgBg");
	this.shape_6.setTransform(29.3832,49.8045);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#232850").s().p("AhiAzQgDgBgDgFIgBgEQAPAEAGgQQgGAEgMABIgKAAQgDgCgBgEQgDgHADgHQAQAGARgNQgEADgIAAQgPAAgKgLQABgLAJgLIAIgJIAHAEQAIAEAJgCQAFgBAQgMQAQgMAMgCQANgCAQAPQAPAPAGgCIAWgPQAQgLALAEQAHACARARQALAMAKgJIAGAEQgMAWgRADQgLACgNgDQgPgCgEABQgCAAgMAPQgLAOgMABQgMABgKgFQgLgGgEABQgGAAgMANQgNANgEACQgKAFgNAAQgKAAgFgDg");
	this.shape_7.setTransform(12.05,7.8882);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7367E1").s().p("AgZAuQgTgMABgJQACgIAXgdQAbgiAVgGQAQgFgCAYQgDASgIAPIgSAdIgQAYQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgGAAgPgIg");
	this.shape_8.setTransform(20.1361,20.2952);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2B38C").s().p("AgCAlQgSgKgHgYQgHAEgDgNQgDgOANADQAGAAAEgFQAEgGAAgKQASAFAQgIQAKgEADALQAIAagFAYQgFAWgKAEIgHABQgIAAgJgGg");
	this.shape_9.setTransform(29.446,7.1126);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F49E85").s().p("AAAAwQgVgBACgHQAIgagCg5QAAgJALAKIALALQAEAPADAdQACAbACADQACAFgPAAIgHAAg");
	this.shape_10.setTransform(28.3595,10.257);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#685BC7").s().p("AgcgMIAaghQAHANANAfQANAegCABIgMAIQgMAGgGACIAAAAQgFAAgWg6g");
	this.shape_11.setTransform(34.3328,19.7508);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#232850").s().p("AhYDwQgNgFAAgEQAAggAGgvQAHgyAIgUQAEgLAUgPQAUgRAGgLQADgGgHhRQgIhZAAgHQABgPATgYQAQgWAQgMIAogKQApgIAJAIQALAKglCMQgmCNgWAVQgOAOgeA3QggA7gMAoQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAgBAAQgDAAgIgDg");
	this.shape_12.setTransform(19.776,58.3491);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2B38C").s().p("AgBAUQgQgNABgEQADgEAAgIIABgUQAAgCALABQAKAAAEACQABAAgFAQIgGAQQAQAbgCABIgBAAQgDAAgOgMg");
	this.shape_13.setTransform(11.18,83.496);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#232850").s().p("AAKAWQgkgXgIgLQgDgFAIgHQAHgHAFACQAEABAMAMQAMANAJALIANAPQAEAGgEABIgDABQgHAAgNgJg");
	this.shape_14.setTransform(11.7513,86.5611);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#1D2245","#232850"],[0,1],-9.5,-6.6,0,-9.5,-6.6,10.1).s().p("AhFC9QgLgIABgEQAIgWASgnQAWgvANgPQALgMAcgKQgOgRgtgrQgtgqgNgQIAJhsIAxABQBDBTAnBKQAoBIgPANQgeAagxAwQgxAxgTAWIgDABQgEAAgIgGg");
	this.shape_15.setTransform(31.7914,54.9533);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2B38C").s().p("AgIAVQgOgPACgDQADgDAEgMIAKgXQABgBAJAFIAOAHQgHAHgIAMQgGAKAAACQAKAdgCAAIAAAAQgDAAgNgPg");
	this.shape_16.setTransform(24.8566,75.5085);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#232850").s().p("AAAAPQgFgMgFgEQgDgDgIgEQgGgDgDgHQgDgGAJgFQAJgGAEADQADABAJAOQAMAPAGAMQAEAIAHAJQAEAGgFABIgBAAQgMAAgQgTg");
	this.shape_17.setTransform(24.5232,78.9633);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F49E85").s().p("AgxBPQgUgGgag/QgSgsgEgTQgFgSAJgGQAGgFAKAEQALADAEALQAKAdAOAgQATAqAGAEQADACAsAAQAtAAADgCQACgBACgEIADgDQADgBALABIAKgBQAFgBAAABQgBADgFACIgGABQgCAAAAAAQgBABgBAAQAAAAAAAAQgBABABAAQALADANgBQAKgBABABQABADgKACIgJACQAWgCgBADQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgCABQAAACgEACQgLAFgUgDQgWgCgGABIgfAJQgTAFgSACIgKAAQgJAAgMgCg");
	this.shape_18.setTransform(42.6977,22.1984);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#232850").s().p("AgJArQgjgMgFgVQgDgJAFgLQAHgSASgMQAMgHATABQAXACAKAQQAIALABAOQABAMgFALQgNAbgZAAQgJAAgJgEg");
	this.shape_19.setTransform(28.3244,4.6679);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol73, new cjs.Rectangle(0,0,54.7,89.6), null);


(lib.Symbol72 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDD373").s().p("ApAB2ISBo5IsbOHg");
	this.shape.setTransform(86.725,45.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FD9A5A").s().p("AqVgFIUsmaIyAI5IhBEGg");
	this.shape_1.setTransform(78.2,41.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDD373").s().p("ArRACIWjkeIyBI5g");
	this.shape_2.setTransform(72.225,28.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2804B").s().p("ApnBRITPnwIzBM/g");
	this.shape_3.setTransform(82.875,41.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol72, new cjs.Rectangle(0,0,144.5,90.4), null);


(lib.Symbol71 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#106497").s().p("AgMADQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQABAAABAAQALABANgBQAAAAABAAQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(40.8889,61.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#106497").s().p("AAbAHQgZgCgegFQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgCIACgBQAdAGAaAAQABABABAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_1.setTransform(21.2064,60.2667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#106497").s().p("AgFBIIgRgCQAUgtAIgZQAPgqACgdIgFBkIgBAVQgCAOgGAFQgEADgGAAIgEAAg");
	this.shape_2.setTransform(32.9125,70.4725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#106497").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgEAEAAQAFAAAEAEQADADAAAEQAAAFgDADQgEAEgFAAQgEAAgEgEgAgGAAQAAAHAGAAQAHAAAAgHQAAgGgHAAQgGAAAAAGg");
	this.shape_3.setTransform(31.775,66.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#106497").s().p("AgIAJQgDgEAAgFQAAgEADgDQAEgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDgAgEgEQgCADAAABQAAAHAGAAQAHAAAAgHQAAgBgCgDQgBAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAQgCAAgCACg");
	this.shape_4.setTransform(32.925,59.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F19E84").s().p("AgUAbQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAEABACgFIADgLQAEgOAPgFIAHgCQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQgBgDgFgBQgQgDgMAMQAAABgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAPgOASAEQAKABAAAIQAAAFgFADIgHACQgMAEgEAMIgDALQgEAHgGAAg");
	this.shape_5.setTransform(81.25,9.0556);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5B48D").s().p("AggAuQgEgNAHgTQAIgUAWgcQAWgbAHAAQALAAgOASIgXAeQAMAFAHAKQAIAMgCAMQgDAVgZALQgIAEgHAAQgNAAgFgQg");
	this.shape_6.setTransform(81.3326,6.1743);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1986CD").s().p("AhSBGQgJgHgDgOQgCgNA3grQAugjA1ghIAlAoQgkAjgwAjQgzAmgTADIgFAAQgLAAgHgGg");
	this.shape_7.setTransform(68.9196,18.645);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D4E3FB").s().p("AgggGQAbgQAHgEQASgGAHAFQAJAGgDANQgBAEgjAjg");
	this.shape_8.setTransform(78.0471,11.6913);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5B48D").s().p("AACAfQgGgBgOgHQgKgFgDgFQgCgDABgEQABgFAEgBQADAAAGAAQAGACADgCQAEAAACgGIACgJQABgHAIgFQAIgFAHADQAMAGgCAZQgCAQgIAHQgGAGgMAAIgDAAg");
	this.shape_9.setTransform(13.8917,65.3254);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#106497").s().p("AgeCSQAzhgAHhKIgcgKIAMgBQALgBADgLQADgIgEgNQgLgzgiglIAEgEQAjAnAMA0QACAPgCAIQgDAKgHAEIAMAFIAAACQgDAmgWA5QgQAtgYAug");
	this.shape_10.setTransform(39.45,41.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#106497").s().p("Ag9gBIgDgCIAfgWIgbgJIAAgCQgJgiABgaQAAgeAMgeIAFACQgMAcAAAeQgBAYAIAhIAjAMIgiAYQBCA6A7BiIgDAEQg9hkhDg6g");
	this.shape_11.setTransform(29.5986,39.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#106497").s().p("AgMBbIARiyQABgFAHABIgSC3g");
	this.shape_12.setTransform(35.225,64.1673);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D4E3FB").s().p("AgJAcQgVgRgRgQIgCgEIACgDIAPgTQAWALANACQAQACANgGQAFgEABABQACABAAAHIAKAlIgMgJQgGgEgEAAQgEAAgFAGIgMAOQgFAEgCABIgBAAQgDAAgFgEg");
	this.shape_13.setTransform(30.625,23.2083);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0B3C5F").s().p("AgiAeIAEgeQABgLACgCQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABABIADACQAEAAAEgIQAGgJAJgBQAJAAADAHQALAcADACQAHADgBAMQAAAEgCADg");
	this.shape_14.setTransform(5.1817,140.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0B3C5F").s().p("AgfAbQgCgEAAgJQgDAKgCADIgmgCIABgFIAHgWQAEgMAEgBQAFgDALAFQAMAAAGgHIAIgHQAGgFAEADQADABACAGQAFANANAJQANAHAPABIAVABQAGACAEAEQADAEAAAFQgBAEgDADg");
	this.shape_15.setTransform(45.6781,133.115);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#212B56").s().p("AgHAfIgOgQQgGgIAAgKQgBgKAEgJQAEgHAHgIQAIgJAFgCQAIgDAKACQALADAAAIQAAADgIAHIgLAIQgJAIgBAEQgEAIAEAMIAEAUQABANgIAGQADgJgHgLg");
	this.shape_16.setTransform(30.092,9.8806);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F5B48D").s().p("AgDAPQgJgGgCgKQgDgOANgCQALgDAGAMQAGAJgFALQgEAHgFAAQgEAAgEgEg");
	this.shape_17.setTransform(28.3982,13.6168);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#212B56").s().p("AAUAbIgCgUQgBgIgFgHQgHgHgIAFQgFAFgFABQgLACgGgFQgEgEAAgGQgBgGADgEQAGgKAMgCQAUgFAQAPQAHAHAEAKQADAKgBAIIgFASQgCALAEAHQgJgDgDgMg");
	this.shape_18.setTransform(34.9683,6.8875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F5B48D").s().p("AAIBAQgYgDgJgMQgNgQgGgaQgHgbAHgRQAJgWAYgDQAYgEAQASQAOAQAEAjQAEAggHANQgIAQgWAAIgGAAg");
	this.shape_19.setTransform(33.3363,11.8797);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F19E84").s().p("AgnAwQAQgWAHgVQAIgWAGgnQAKgGAMAHQANAHAEAUQAEAPgBA9QgIALgaABIgCAAQgZAAgSgMg");
	this.shape_20.setTransform(30.3861,17.6625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#212B56").s().p("AANAXQgJgDgTgRQgGgEAAgGQAAgGAJgFQAQgIALAJQAFAFACAMQADAXgKAAIgCAAg");
	this.shape_21.setTransform(34.9971,6.9321);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#212B56").s().p("AghBMQAIgFgGghIgKgtQgCgKABgOQABgOAEgKQALgXAcACQAYACAKAKQAJAJgCALQgBAFgFAFIgJAHQgMAMgCAJQgDAHADANIADAVQABAUgQANQgKAJgOAAIgLgBg");
	this.shape_22.setTransform(28.9594,11.0344);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1986CD").s().p("AgbAMQgjg3gHgTQgIgTAFgKQAGgJASgCQAbgCATAJQAFADADAIIAEANIBBCQIgoAeQgZgeglg9g");
	this.shape_23.setTransform(7.538,52.5068);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CA346F").s().p("AAABeQgGgtgFgXIgEhaQgDg5gGgIIgHgLQgDgGABgGQACgJAJgBQANgCgBAMQAAAEgEAOQAPAYANAoQAPAvAFAxQgBAhgJA0QgJA1gEAAIgLhGg");
	this.shape_24.setTransform(35.2639,39.3413);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A9CAFB").s().p("AAfBHQgKg6gIggQgJglgXghQgTgcgigdQAagVAkABQAlABAVAZQAXAbACA2IgCBYQgBAfgJA1QgJA2gFAAIgQhgg");
	this.shape_25.setTransform(31.675,38.4727);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D4E3FB").s().p("AgKARQgKgPgIgIIAjgVQAEALALARIAHAPQgBAGgMADQgJADgIAAQgBAAgIgLg");
	this.shape_26.setTransform(13.7,61.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1986CD").s().p("AhrBoQgVgIgCgNQgBgGADgIIAHgMQAOgaBKhAQBRhJAjgBQAOgBAUAQQAZATgSAZQgWAegpAgIhFA3QgdAXgRAIQgRAIgQAAQgKAAgKgEg");
	this.shape_27.setTransform(13.1201,36.415);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1986CD").s().p("ABVEZIjpgYQgJgBgDgDQgIgGAIgSQATgpAMhTQANhWgJgoQgMg6gDggQgFg2AKglQAlgmAYgOQAzgfA7AGQArAEAnAeQAcAWALAUQAIAPAAA6QgBA6gIAmQgKAtgjD8QAAAOgMADIgHABIgHAAg");
	this.shape_28.setTransform(29.8515,50.022);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#137EBD").s().p("AhUCrQAOhvALg5QAUhjAng1QAbgjAcAIQAZAIAFAcQACASh5Esg");
	this.shape_29.setTransform(11.0025,117.467);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#137EBD").s().p("AhODLQgKgFgKgNQgKgOgBgLQATgtAGhqQAGhkAdg+QAQgiAfgLQAagKAgAKQAVAGAPAQQAPARADAXQACAQhBCXQg/CWgIAGQgIAGgTAGQgPAFgHAAIgFgBg");
	this.shape_30.setTransform(19.728,90.0825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1986CD").s().p("AhyBCQgOgCgQguQgRguASgFQA5gPBOgKQBegNAlAJQANAEAHAFQALAIAAAKQAAAQgWAMQgiAThlAdQhYAagUAAIgDgBg");
	this.shape_31.setTransform(49.9877,27.014);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0B3C5F").s().p("AhnA9QgUgQACgjQACgdAMgRQAFgHANgGIAVgHQA3gSA1AEQBDAFAMAoQANAqgxAbQgyAchdAAQgdAAgOgLg");
	this.shape_32.setTransform(27.0511,71.1386);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#106497").s().p("AhNCmQAGgTAXiYQARhxAigiQAbgaAXAQQAVAOADAeQACANguCGQgrCDgFAJg");
	this.shape_33.setTransform(46.9524,111.1202);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F19E84").s().p("AgWAbIAHgyQADgRAaAMQAGADACAEQABACgBAEIgDAxIgGAAQgRAAgSgHg");
	this.shape_34.setTransform(42.47,129.9964);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F19E84").s().p("AgXAhIAHg1QABgKALgCQAHgCAMACQAFABADADIABAHIgDAzQgPAEgOAAIgPgBg");
	this.shape_35.setTransform(4.75,136.7279);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#106497").s().p("ABZClQg2gkgrglQhchMgzhCQgVgdArg4QArg3AYAOQAPAIBnCWQBnCUAAAIQgBAIgIAPQgJARgHABIgGABQgPAAgYgPg");
	this.shape_36.setTransform(38.6195,84.4351);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol71, new cjs.Rectangle(0,0,84.8,143.3), null);


(lib.Symbol70 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1986CD").s().p("AmZNDQAAAAAAgBQAAgBAAAAQABgBABAAQAAAAABAAIAQAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAIgQAAQgBAAAAAAQgBAAgBAAQAAgBAAAAQAAgBAAgBgAm8NGQgBAAAAAAQgBAAgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAABAAQAAgBABAAIAQAAQAAAAABABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQgBAAAAAAgAniNGQgBAAAAAAQgBgBgBAAQAAAAAAgBQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAQABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBABQAAAAgBAAQgBAAAAAAgAlzNCQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBABAAIAQgBQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQABAEgEAAIgQAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBgAn4NFIgQgBQgEAAABgDQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIAQAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAgAlKNEQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQABAAAAAAQABgBABAAIAPgBQABAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAIgQABgAoeNCIgQgBQgBAAAAAAQgBAAAAAAQgBgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQABAAABAAIAPABQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAknM+QgBgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIAQgCQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAIgQABQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBgApUM+QgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAIAQACQAAAAABABQABAAAAAAQAAABAAAAQAAABAAABQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAkCM7QAAgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAQgCQAAAAABABQABAAAAAAQABABAAAAQAAABAAAAIAAADIgCABIgQABQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgApqM7IgQgCQgBAAAAAAQgBAAAAAAQAAgBAAgBQAAAAAAgBIABgCIACgBIAQACQAAAAABABQAAAAABAAQAAABAAAAQABABAAABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgAjZM5QgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQABAAABAAIAPgCQAEAAAAADQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgPACgAqfM0QgBAAgBAAQgBgBAAAAQAAAAAAgBQAAgBAAgBIABgCIADAAIAPACQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgAizM0QgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAQgDQAAAAABABQABAAAAAAQABABAAAAQAAABABAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAIgQACgAq1MwIgQgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAABgBQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAIAQADQAAAAABABQAAAAABAAQAAABAAAAQABABAAABQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAiOMuQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAAAQABgBABAAIAPgDQABAAAAAAQABAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAABgBABQAAAAgBAAQAAAAgBAAIgPADgAraMqIgQgEQgBAAgBAAQAAAAAAAAQgBgBAAgBQAAAAABgBQAAgBAAgBQAAAAAAAAQABgBABAAQAAAAABAAIAQADQAAABABAAQAAAAABABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAgAhoMoQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBIAQgDQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABQAAABAAAAQAAABAAAAQAAABgBAAQgBABAAAAIgQADgAsAMiIgPgEQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAIAQAEQAAAAABAAQAAAAAAABQABAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAgAhDMgQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBgBABAAQAAgBAAgBQAAAAABAAQAAgBABAAIAQgDQAAAAABAAQABAAAAAAQABAAAAABQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgPADgAslMZIgPgEQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAgBABgBQAAAAAAgBQABgBAAAAQABAAAAAAQABAAABAAIAPAEQAAAAABABQABAAAAAAQAAABAAABQAAAAAAABQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAgAghMWQgBgBABAAQAAgBAAgBQAAAAABAAQAAgBABAAIAQgEQAAAAABAAQABAAAAABQABAAAAAAQAAABAAABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgPAEIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBgAAGMPQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBABgBQAAAAABAAQAAgBABAAIAPgEQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQgBAAAAAAIgPAEgAtJMPIgQgEQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIAPAEQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAAoMDQgBAAAAgBQAAgBABAAQAAgBAAAAQABAAABgBIAPgEQAAAAABAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAIgQAEIAAABQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBgAtuMEIgPgEQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIAPAEQAAABABAAQAAAAABABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAgABPL7QgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIAPgEQABAAAAgBQABAAABABQAAAAAAAAQABABAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgPAEgAuSL5IgPgGQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAPAGQAAAAABABQAAAAABAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAgABzLwQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIAQgFQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQABABAAABQAAAAAAABQgBAAAAABQgBAAgBAAIgPAFgAu2LsIgPgGQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIAOAGQABAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAgACYLkQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBABAAQABAAABgBIAOgFQABAAAAAAQABAAABAAQAAABAAAAQABABAAAAQABABAAABQAAAAAAABQgBAAAAABQgBAAAAAAIgPAFgAvZLdIgPgGQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAgBQABAAAAAAQABAAAAAAQABAAABAAIAOAGQABABAAAAQABABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAQgBAAAAAAgAC4LWQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAPgFQABgBAAAAQABAAABAAQAAAAAAABQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABIgPAFIgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAwKLHQgBAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAIAOAHQAAAAABABQAAAAABAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAgADfLLQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQABAAAAAAQABgBABAAIAPgGQAAAAABAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAIgPAGgAECK9QgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAABgBIAPgGQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgOAGgAweK8IgOgHQgBAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIAOAIQAAAAABABQAAAAAAABQABABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAgAEmKvQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAIAPgGQAAAAABgBQAAAAABABQAAAAABAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgOAHgAw/KqIgOgIQgBAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABABIAOAIQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgAFIKgQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAIAPgGQAAgBABAAQABAAAAAAQABAAAAABQAAABABAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgOAHgAxgKXIgNgJQgBAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABABIANAIQABABAAAAQABABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAgAFoKPQAAgBgBAAQAAgBAAgBQABAAAAAAQABgBABAAIAOgHQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABQAAABABAAQAAABgBAAQAAABAAAAQgBABAAAAIgPAGIgBABQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAgAyAKCIgNgJQgBgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIANAJQAAABABAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAgAGLJ/QgBAAAAgBQAAgBAAAAQAAgBABAAQAAAAABgBIAPgGQAAgBABAAQABAAAAAAQABAAAAABQAAABABAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgPAHQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBgAGtJwQAAgBAAAAQgBgBABAAQAAgBAAgBQABAAABgBIAOgGQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAABAAAAQgBABAAAAIgPAGIgBABQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAgAyfJsIgMgKQgBgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAABAAQABgBAAAAQABAAAAAAQABABAAAAIANAJQAAABABAAQAAABAAABQAAAAAAABQAAAAAAABIgDABgAHPJgQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIAOgGQABgBAAAAQABAAABAAQAAAAAAABQABABAAAAQABABAAABQAAAAAAABQgBAAAAABQgBAAAAAAIgOAHIgCABQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAgAy9JUIgMgKQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABABQABAAAAAAIAMAKQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABIgDABgAHyJPQgBAAAAgBQAAgBAAAAQAAgBABAAQAAAAABgBIAOgHQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAIgOAHIgCAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBgAIUI/QgBgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAIAOgHQABAAAAgBQABAAAAABQABAAABAAQAAABABAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgPAIQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAgAzaI7IgLgKQgBgBAAAAQgBgBAAAAQAAgBAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQAAAAABABIALALQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAIgDABgAI2IuQgBAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAIAOgHQABgBAAAAQABAAABAAQAAAAAAABQABABAAAAQABABAAABQAAAAAAABQgBAAAAABQgBAAAAAAIgOAHIgCABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBgAz2IhIgLgLQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAgBQABAAAAAAQABgBABABQAAAAABAAQAAAAABABIALALQAAAAAAABQABAAAAABQAAABgBAAQAAABAAAAIgCABgAJXIdQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAIAOgIQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgOAHIgCABQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAgAJ5ILQAAAAgBgBQAAgBAAAAQAAgBABAAQAAAAABgBIAOgHQABgBAAAAQABAAABAAQAAAAABABQAAABABAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgOAIIgBAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBgA0QIGIgLgMQAAAAgBgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAABAAQAAAAABABIALAMQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAIgCABIgCgBgAKbH6QgBgBAAAAQAAgBAAAAQAAgBAAgBQABAAABgBIAOgHQAAgBABAAQABAAAAAAQABAAAAABQAAABABAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgOAIIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAgA0pHpIgKgMQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABABIAKAMQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABIgCAAgAK8HnQgBAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIAOgIQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABABAAAAQAAABAAABQgBAAAAABQgBAAAAAAIgOAIIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBgALdHVQgBgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAOgIQAAAAABgBQAAAAABABQAAAAABAAQABABAAAAQAAABABABQAAAAAAABQgBAAAAABQAAAAgBAAIgOAIIgBABQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAgA1BHLIgJgNQAAgBAAAAQgBgBABAAQAAgBAAAAQAAgBABAAQABgBAAAAQABAAAAAAQABAAABABQAAAAABABIAIAMQABABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgCAAgAL+HCQgBAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAIAOgIQAAAAABgBQAAAAABABQAAAAABAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgOAIIgBABgAMfGvQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIANgIQABgBAAAAQABAAAAAAQABAAABABQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgOAIIgCABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAgA1VGrIgIgOQAAgBAAAAQgBgBABAAQAAgBAAAAQAAgBABAAQABgBAAAAQABAAABAAQAAAAABABQAAABABAAIAHAOQABABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgCABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAgAM/GbQAAAAAAgBQgBAAABgBQAAAAAAgBQAAAAABgBIAOgIQAAgBABAAQAAAAABAAQAAAAABABQABAAAAABQABABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgNAIIgCABQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBgA1kGLQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIgGgPQgBAAAAgBQAAgBABAAQAAgBAAAAQABAAABgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABIAGAOQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABgANgGIQgBgBAAAAQAAgBAAAAQAAgBAAgBQABAAABgBIANgIQAAgBABAAQAAAAABAAQAAAAABABQABAAAAABQABABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgNAJIgCAAIgCgBgAOAFzQgBAAAAgBQAAAAAAgBQAAgBAAAAQABgBABAAIANgJQAAAAABAAQAAAAABAAQAAAAABAAQABABAAAAQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABIgNAIIgCABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBgA11FmIgFgPQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAABAAQAAgBABAAQABAAAAAAQABABAAAAQAAABABABIAFAOQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAIgBABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAgAOfFfQAAgBgBAAQAAgBAAAAQAAgBABgBQAAAAABgBIAOgJQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABIgNAIIgCABgAO/FJQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAABgBIANgJQAAAAABAAQABgBAAABQABAAAAAAQABAAAAABQAAABABAAQAAABAAAAQAAABgBAAQAAABAAAAIgOAJIgBABQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBgA2BFBIgEgPQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAIAEAPQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgBABQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBgAPeE0QAAgBAAAAQgBgBABAAQAAgBAAAAQAAgBABAAIANgKQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAABQAAAAAAABQAAABAAAAQgBABAAAAIgNAJIgCAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAgAP9EeQAAAAgBgBQAAAAAAgBQAAgBABAAQAAgBABAAIANgKQAAAAABAAQAAAAABAAQAAAAABAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgNAKIgCAAgA2HEfQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIgDgQQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABAAQAAAAABAAQABAAAAAAQABABAAAAQAAABABAAIADAQQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAgAQcEIQAAgBgBgBQAAAAAAgBQAAAAABgBQAAAAABgBIAMgJQABAAAAgBQABAAAAAAQABAAABABQAAAAABAAQAAABAAABQAAAAAAABQAAABAAAAQAAABgBAAIgMAJIgCABgA2ND5QgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIgCgPQAAgBAAgBQAAAAAAgBQAAAAABAAQABgBABAAQAAAAABAAQABAAAAABQABAAAAAAQAAABAAABIACAQQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAgAQ6DxQAAgBgBAAQAAgBAAAAQAAgBABgBQAAAAABgBIANgJQAAAAABgBQAAAAABAAQAAAAABABQABAAAAAAQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABIgOAKgARZDaQgBgBAAAAQgBgBAAAAQAAgBABgBQAAAAABgBIAMgKQABAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAABAAAAQABABAAAAQAAABgBAAQAAABgBAAIgMAKIgCABgA2UDQIgBgPQgBgEAEAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAIABAQQAAABAAAAQAAABgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBgAR2DCQAAgBgBAAQAAgBAAAAQAAgBABAAQAAgBABgBIAMgKQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAABQABABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgMAKIgCABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAgA2WCqIAAgQQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIABAPQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBgASUCqQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBIAMgKQABAAAAAAQABgBAAABQABAAAAAAQABAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgMAKIgCABIgCgBgASxCRQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAMgLQAAAAABAAQABgBAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQgBABAAAAIgMALIgCAAgA2WCEIABgQQAAAAAAgBQAAAAABgBQAAAAABAAQABgBABAAQAAABABAAQABAAAAABQAAAAAAABQAAAAAAABIAAAPQAAABgBABQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBgBQgBAAAAAAQgBgBAAAAQAAgBAAgBgATNB4QAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAMgLQABAAAAgBQABAAAAAAQABAAAAAAQABABABAAQAAABAAABQAAAAAAABQAAABAAAAQAAABgBAAIgLAKIgDABgA2TBeIABgQQAAAAAAgBQAAgBABAAQAAAAABAAQABAAABAAQAAAAABAAQABAAAAABQAAAAAAABQAAABAAAAIgBAQQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBgATpBfQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAgBIAMgLQAAAAABAAQAAgBABAAQAAAAABABQABAAAAAAQABABAAABQAAAAAAABQAAAAAAABQAAAAgBABIgLALIgCABgAUFBFQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBIALgLQABAAAAgBQABAAAAAAQABAAABAAQAAABABAAQAAABAAAAQABABAAABQAAAAgBABQAAAAAAABIgMALIgCAAgA2NA8QgBAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAgBIACgPQABgDADAAQAAAAABABQAAAAABAAQAAABAAABQAAAAAAABIgCAPQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAgAUgAqQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBIALgLQABAAAAAAQABgBAAAAQABAAAAABQABAAABAAQAAABAAAAQABABAAABQAAAAgBABQAAAAAAABIgMALIgCABIgCgBgA2HAWQgBAAAAAAQgBAAAAAAQgBgBAAgBQAAAAABgBIADgQQAAAAAAgBQAAgBAAAAQABAAABAAQAAAAABAAQABAAABAAQAAAAAAABQABAAAAABQAAABAAAAIgDAQQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgAU7APQgBgBAAAAQgBgBAAAAQAAgBABAAQAAgBABgBIALgKQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgLAMIgCABIgCgBgAVVgMQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAKgMQABAAAAAAQABgBABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABgBABIgLALIgCABgA1/gOQgBAAgBAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAEgPQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABQABAAAAAAQAAABAAABQAAAAAAABIgEAPQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAVugoQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBIALgMQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABABQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgKAMIgCABgA12gzQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAABgBIAEgQQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAIgEAPQgBABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAgAWIhEQgBAAAAgBQgBAAAAgBQAAgBAAAAQABgBAAgBIAKgMQABAAAAAAQABgBABAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABgBAAIgKAMQgBABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAgA1rhXQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBABgBIAFgPQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAIgFAPQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAgA1eh7QgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBABgBIAGgOQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAABQAAAAAAABIgGAPQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAgA1QieQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAHgOQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAIgHAPQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAgA1AjAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAHgPQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIgHAOQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAgA0vjiQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBIAHgOQABgBAAAAQABgBAAAAQABAAAAAAQABAAABABQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAABIgIAOQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAgA0ckDQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBIAIgOQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAIgIAOQgBAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAgA0JkkQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIAJgNQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAABAAAAQAAABgBAAIgIANQgBABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgAz0lDQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBIAJgNQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAIgJANQgBAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAgAzeliQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBIAJgMQAAgBABAAQAAAAABAAQAAgBABABQABAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABgBABIgJAMIgDABgAzHmAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABgBIAKgMQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQABABAAABQAAAAAAABQAAAAAAABQAAAAAAABIgKAMIgDABgAyvmeQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAKgMQAAgBABAAQAAAAABAAQAAgBABABQABAAABAAQAAABABABQAAAAAAABQAAAAAAABQAAAAgBABIgKAMIgDABgAyWm6QgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBIALgMQAAAAABAAQAAgBABAAQAAAAABABQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABIgKALIgDABgAx8nWQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIALgLQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAIgLALIgCABgAxinyQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIALgLQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAABgBAAQAAABAAAAIgLALIgDABgAxHoMQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBIAMgLQAAAAABAAQAAgBABAAQAAAAABABQABAAAAAAQABABAAABQAAAAAAABQAAAAAAABQAAAAgBABIgLALIgCABgAwromQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAMgKQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgMALIgCABgAwPpAQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAABgBIAMgKQAAgBAAAAQABAAAAAAQABAAAAAAQABAAABABQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAIgMALIgCABQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBgAvypYQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAgBIANgKQAAAAABAAQAAgBABABQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAgBABQAAABAAAAIgNAKIgCABgAvVpwQAAgBgBgBQAAAAAAgBQAAAAABgBQAAAAABgBIAMgKQABAAAAAAQABgBAAABQABAAAAAAQABAAABABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgMAKIgCABgAu3qIQgBAAAAgBQAAAAAAgBQAAgBABAAQAAgBABgBIAMgJQABgBAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgNAJIgCABgAuZqfQgBgBAAAAQAAgBAAAAQAAgBAAgBQABAAABgBIAMgJQABAAAAgBQABAAAAAAQABAAABABQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABIgOAKQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAgAt7q2QAAAAgBgBQAAAAAAgBQAAgBABAAQAAgBABAAIANgKQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAABQABABAAAAQAAABAAABQAAAAAAABQgBAAAAAAIgNAKIgCAAgAtcrMQAAgBgBgBQAAAAAAgBQAAAAABgBQAAAAABgBIANgJQAAAAABAAQABgBAAABQABAAAAAAQABAAAAABQABABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgMAJIgCABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAgAs9riQAAgBgBgBQAAAAAAgBQAAAAABgBQAAAAABgBIANgJQAAAAABAAQAAAAABAAQAAAAABAAQABABAAAAQABABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgOAKQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAgAser4QAAAAgBgBQAAAAAAgBQAAgBABAAQAAgBABAAIANgJQABAAAAgBQABAAAAAAQABAAAAABQABAAAAAAQABABAAABQAAAAAAABQAAABAAAAQgBABAAAAIgNAJIgCAAgAr+sNQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIANgJQABAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABIgNAIIgCABgArfsjQgBAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAIANgJQAAAAABAAQAAAAABAAQAAAAABAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgOAJIgBABgAq/s4QgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAIAOgJQAAAAABAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgNAJIgCABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape.setTransform(143.0944,83.86);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol70, new cjs.Rectangle(0,0,286.2,167.7), null);


(lib.Symbol67 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1986CD").s().p("AABAPIgOgIQgEgCgBgFQgCgFADgEQACgEAFgCQAFgBAFACIANAJQAFACABAEQABAFgCAFQgEAGgHAAIgGgCg");
	this.shape.setTransform(17.9612,14.7969);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1986CD").s().p("AgFANIgJgNQgCgEABgFQABgFAFgDQAEgCAFABQAEABADAFIAIANQADAEgCAFQgBAFgEADQgDACgEAAQgGAAgDgHg");
	this.shape_1.setTransform(14.8388,17.9357);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1986CD").s().p("AgIARQgDgDAAgGIAAgPQAAgFADgEQAEgEAEAAQAGAAADAEQAEAEAAAFIAAAPQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_2.setTransform(10.6,19.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1986CD").s().p("AgJASQgFgDgBgFQgBgFACgEIAIgNQADgFAEgBQAFgBAEACQAFADABAFQACAFgDAEIgIANQgEAHgGAAQgEAAgCgCg");
	this.shape_3.setTransform(6.3388,17.9357);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1986CD").s().p("AgRALQgCgFABgFQABgEAFgCIANgJQAEgCAFABQAFACADAEQACAEgBAFQgBAFgFACIgNAIQgDACgDAAQgIAAgDgGg");
	this.shape_4.setTransform(3.225,14.7969);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1986CD").s().p("AgHAMQgFAAgEgDQgEgDAAgGQAAgEAEgEQAEgDAFgBIAPAAQAGABADADQAEAEAAAEQAAAGgEADQgDADgGAAg");
	this.shape_5.setTransform(2.075,10.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1986CD").s().p("AABAPIgNgIQgFgCgBgFQgBgFACgEQADgFAFgBQAFgBAEACIANAJQAFACABAEQABAFgCAFQgDAGgIAAQgDAAgDgCg");
	this.shape_6.setTransform(3.225,6.2857);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1986CD").s().p("AgGAOIgIgOQgCgEABgFQABgFAFgDQAEgCAFABQAEABADAFIAIANQADAFgCAFQgBAFgFACIgGACQgGAAgEgGg");
	this.shape_7.setTransform(6.3388,3.1857);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1986CD").s().p("AgIARQgDgEAAgFIAAgPQAAgFADgEQAEgDAEAAQAGAAADADQAEAEAAAFIAAAPQAAAFgEAEQgDADgGAAQgEAAgEgDg");
	this.shape_8.setTransform(10.6,2.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1986CD").s().p("AgJASQgFgCgBgFQgBgFACgFIAJgNQACgFAEgBQAFgBAFACQAEADABAFQACAFgDAEIgIAOQgDAGgHAAQgDAAgDgCg");
	this.shape_9.setTransform(14.8388,3.1857);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1986CD").s().p("AgRALQgDgFACgFQABgEAEgCIAOgJQAEgCAFABQAFABADAFQACAEgBAFQgBAFgFACIgNAIIgGACQgHAAgEgGg");
	this.shape_10.setTransform(17.9612,6.2857);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1986CD").s().p("AgHAMQgGAAgDgDQgEgEAAgFQAAgEAEgEQADgDAGgBIAPAAQAGABADADQADAEAAAEQAAAGgDADQgDADgGAAg");
	this.shape_11.setTransform(19.1,10.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1986CD").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMgAgKgKQgFAFAAAFQAAAHAFAFQAFAEAFAAQAHAAAEgEQAFgFAAgHQAAgFgFgFQgEgFgHAAQgFAAgFAFg");
	this.shape_12.setTransform(10.575,10.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1986CD").s().p("Ag+A/QgagaAAglQAAgkAagaQAagaAkAAQAlAAAaAaQAaAaAAAkQAAAlgaAaQgaAaglAAQgkAAgagagAgsgtQgTATAAAaQAAAaATATQATATAZAAQAbAAATgTQATgTAAgaQAAgagTgTQgTgTgbAAQgZAAgTATg");
	this.shape_13.setTransform(10.575,10.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol67, new cjs.Rectangle(0,0,21.2,21.2), null);


(lib.Symbol66 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D4E3FB").s().p("AgPARQgHgHAAgKQAAgIAHgIQAHgGAIgBQAKABAGAGQAHAIAAAIQAAAJgHAIQgGAGgKABQgIgBgHgGg");
	this.shape.setTransform(7.6144,7.8295,1.7208,1.7208);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1986CD").s().p("AALAWIgBAAIgggkQgEgEAFgEQADgDAEADIAkAgQAFAGgFAGQgDADgDAAQgCAAgDgDg");
	this.shape_1.setTransform(16.4323,16.4223,1.7207,1.7207);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F4EF").s().p("AgGAMQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAHgHABgKQAAgBABgBQAAAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAAAABQABAAgBABQgBAMgIAJIgCABg");
	this.shape_2.setTransform(12.2225,9.7645,1.7206,1.7206);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4F4EF").s().p("AgBAEIgBgEQgBgBAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAABABIABADQAAABABAAQAAABAAAAQgBABAAAAQAAAAgBABIgBAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_3.setTransform(2.5617,9.6108,1.7206,1.7206);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4F4EF").s().p("AgSAQQAAgOAKgKQAKgKAOAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQgMAAgHAJQgJAHAAAMQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_4.setTransform(4.9037,4.9037,1.7206,1.7206);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1986CD").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNgAgagaQgMALAAAPQAAAQAMALQALAMAPAAQAQAAALgMQAMgLAAgQQAAgPgMgLQgLgMgQAAQgPAAgLAMg");
	this.shape_5.setTransform(7.6137,7.6137,1.7206,1.7206);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1986CD").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_6.setTransform(7.614,7.614,1.7207,1.7207);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol66, new cjs.Rectangle(0,0,20.7,20.7), null);


(lib.Symbol65 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1986CD").s().p("AgEANIgJgNQgCgDADgCIAMgIQAEgCACADIAIANQACADgDACIgNAIIgCABQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape.setTransform(10.0786,9.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1986CD").s().p("AhBArQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQgCgEAFgCIBGgYIA2gzQADgDAEADQADADgDAEIg4A0IgBABIhHAYIgCABIgCgBg");
	this.shape_1.setTransform(9.3188,7.9808);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1986CD").s().p("AgTAeQgEgBgCgDIgJgOQgCgEABgEQABgDAEgCIArgbQAEgCAEABQADABADADIAIAOQACADgBAEQgBAEgDABQgEACgEgBQgDgBgDgCIgDgGIgbARIAEAGQACADgBAEQgBAEgEACIgFABIgCAAg");
	this.shape_2.setTransform(6.2883,3.0867);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1986CD").s().p("AgmBdQgJgCgFgIIgthKQgFgIACgIQACgJAIgFIBwhFQAIgFAJACQAJADAFAIIAtBKQAFAIgCAIQgCAJgIAFIhwBFQgGADgFAAIgGgBgAAbhSIhwBFQgFADgBAFQgBAFADAEIAtBKQADAFAFABQAFABAFgDIBwhEQAEgDACgFQABgGgDgDIgthKQgDgFgFgBIgDAAQgEAAgDABg");
	this.shape_3.setTransform(10.175,9.4131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol65, new cjs.Rectangle(0,0,20.4,18.9), null);


(lib.Symbol64 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1986CD").s().p("AgLBaQgGgnAKgkQAGgVAHgMIgCAAIgEgDQgHAHgJACQgLADgLgEQgFAKgJAEQgGAFgFgGQgCgDABgDQABgDADgCQAFgDACgGQgPgMgGgQQgEgKACgJQACgJAIgDQAHgEAGACQAIADAFAJQAKASgEAXQAIACAGgCQAGgCADgDQgHgKgDgMQgDgNADgKQADgRAPAAQAGgBAFAFQAHAGABAMQAEAUgKATIABABIAEACQAMgQAPgHQALgGALACQALABADAKQADALgMAJQgIAHgNAEQgNADgNgBIgDAEQgIANgFAXQgGAfAEAeQABAIgGABIgCABQgHAAgBgHgAA4gqQgJACgLAKQAKgCAIgEQAGgDACgDIgCAAgAg7g2QADAJAHAGIgBgKQgDgOgFgCIgBAAQgEACAEAJgAgGhKQgCALAHAPQACgHAAgHQAAgQgDgBQgDAAgBAFg");
	this.shape.setTransform(14.5977,16.1477);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F4EF").s().p("Ag4gEQAKgHAEgLQgJgFgIgLQgUgaARgIQAQgIAFAgQACAPgDALQAMAGAMgEQAMgDAGgJQAEAEAEACIALAEIgGAIQgJAOgEAXQgIAgAGAhgAATgWQAOgUARgGQASgHACAKQADAMgXAIQgMAEgKAAIgJgBgAgNg9QgEgaAPAAQAPgBgEAfQgCAQgHAJQgJgJgEgUg");
	this.shape_1.setTransform(14.5211,16.1246);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1986CD").s().p("AglCHQgKAAgGgHQgHgGAAgKQAAgEgDgBQgegRgSgfQgRgeAAgiQAAg2AmglQAmgmA0AAIABAAQA1AAAmAmQAlAmAAA1QAAAigRAeQgSAegeASQgDABAAAEQAAAKgHAGQgGAHgKAAgAhOhVQgiAhAAAvQAAAeAPAaQAQAbAaAPQALAGAAANQAAAHAHAAIBLAAQAHAAAAgHQAAgNALgGQAbgPAPgbQAPgaAAgeQAAgughghQghghgugBIgBAAQguAAggAhg");
	this.shape_2.setTransform(12.925,13.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglB/QgGAAgEgEQgFgFAAgGQAAgIgHgEQgcgQgQgcQgRgdAAggQAAgyAkgkQAkgjAxAAQAyAAAjAkQAjAjAAAyQAAAhgRAcQgQAcgcAQQgHAEAAAIQAAAGgEAFQgFAEgGAAg");
	this.shape_3.setTransform(12.925,13.4747);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1986CD").s().p("AgaAIQgIAAAAgIQAAgHAIAAIA1AAQAIAAAAAHQAAAIgIAAg");
	this.shape_4.setTransform(12.95,36.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1986CD").s().p("AguAQQgHAAgEgFQgFgEAAgHQAAgGAFgEQAEgFAHAAIBdAAQAGAAAGAFQAEAEAAAGQAAAHgEAEQgGAFgGAAg");
	this.shape_5.setTransform(12.95,33.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1986CD").s().p("AguAQQgHAAgEgFQgFgEAAgHQAAgGAFgEQAEgFAHAAIBdAAQAGAAAGAFQAEAEAAAGQAAAHgEAEQgGAFgGAAg");
	this.shape_6.setTransform(12.95,29.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol64, new cjs.Rectangle(0,0,25.9,37.5), null);


(lib.Symbol56 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EBF2FD").s().p("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");
	this.shape.setTransform(292.275,171.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4E3FB").s().p("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AgApCNFIBIAAIAAgiIhIAAgAqqNFIBIAAIAAgiIhIAAgAnZLFIBIAAIAAgiIhIAAgApCLFIBIAAIAAgiIhIAAgAqqLFIBIAAIAAgiIhIAAgAnZJFIBIAAIAAgiIhIAAgApCJFIBIAAIAAgiIhIAAgAqqJFIBIAAIAAgiIhIAAgAnZHFIBIAAIAAgiIhIAAgApCHFIBIAAIAAgiIhIAAgAqqHFIBIAAIAAgiIhIAAgAnZFFIBIAAIAAgiIhIAAgApCFFIBIAAIAAgiIhIAAgAqqFFIBIAAIAAgiIhIAAgAnZDFIBIAAIAAgiIhIAAgApCDFIBIAAIAAgiIhIAAgAqqDFIBIAAIAAgiIhIAAgAnZBFIBIAAIAAgiIhIAAgApCBFIBIAAIAAgiIhIAAgAqqBFIBIAAIAAgiIhIAAgAnZg6IBIAAIAAgiIhIAAgApCg6IBIAAIAAgiIhIAAgAqqg6IBIAAIAAgiIhIAAgAnZi6IBIAAIAAgiIhIAAgApCi6IBIAAIAAgiIhIAAgAqqi6IBIAAIAAgiIhIAAgAnZk6IBIAAIAAgiIhIAAgApCk6IBIAAIAAgiIhIAAgAqqk6IBIAAIAAgiIhIAAgAnZm6IBIAAIAAgiIhIAAgApCm6IBIAAIAAgiIhIAAgAqqm6IBIAAIAAgiIhIAAg");
	this.shape_1.setTransform(294.3,170.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol56, new cjs.Rectangle(0,0,588.6,341.1), null);


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
	this.shape.graphics.f("#E68134").s().p("Ak3E4QiBiBAAi3QAAhoAvhdQAuhaBQg+IAAJpIA6AAIAAh3IAtgwIBfCnIBDAAIh7jRIA5hAQAjgoAUgYIhFAAIh/CMIAAnLQBig0BvAAQC3AACBCBQCBCBAAC2QAAC3iBCBQiBCBi3AAQi2AAiBiBgAAcgZQgjAvAABMQAABWAhAtQAjAtBFAAQA5AAAighQAfgdAKg2Ig7AAQgJAhgPAPQgRATgeAAQgmAAgVggQgUghgBg/QAAg5ATggQAVgiAoAAQA8AAAKBFIA8AAQgEgvgcggQgjgng9AAQhDgBgnAzg");
	this.shape.setTransform(44.1,44.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,88.2,88.2), null);


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
	this.shape.graphics.f("#181818").s().p("AgdA1QgMgIgDgRIAOgCQAGAYAZAAQAIAAAHgDQAHgDADgFQAEgFAAgGQAAgIgEgEQgDgFgHgCQgGgCgOgDQgUgEgIgGQgJgJAAgNQAAgJAFgIQAFgIAJgEQAJgEAMAAQAQAAALAHQALAHAEAPIgOACQgCgJgIgFQgHgFgLAAQgIAAgGACQgGADgDAEQgDAFAAAFQAAAHADADQADAFAGACIASAFQAOADAKAEQAJADAEAHQAFAHAAAKQAAAKgGAIQgGAJgJAEQgKAFgNAAQgSAAgMgJg");
	this.shape.setTransform(189.175,10.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#181818").s().p("AAfA9IAAhOQABgOgIgIQgHgIgOAAQgIAAgJAFQgIAFgFAJQgEAJAAAOIAABCIgOAAIAAh2IANAAIAAATQAHgLAKgFQAJgGALAAQAUAAALALQAKAKAAAUIAABQg");
	this.shape_1.setTransform(176.8,10.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#181818").s().p("AgbA3QgMgHgHgOQgGgOAAgUQAAgUAGgNQAHgNAMgIQANgHAOAAQAPAAANAHQAMAIAHANQAGAPAAASQAAAUgGAOQgHAOgMAHQgMAHgQAAQgPAAgMgHgAgTgrQgIAFgGAMQgEALAAAPQAAARAEALQAGALAIAFQAIAGALAAQAMAAAIgGQAJgFAEgLQAFgLAAgRQAAgQgFgKQgEgLgJgGQgIgGgMAAQgLAAgIAGg");
	this.shape_2.setTransform(163.575,10.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#181818").s().p("AgGBSIAAh2IANAAIAAB2gAgGg9IAAgUIANAAIAAAUg");
	this.shape_3.setTransform(154.225,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#181818").s().p("AgBBMQgGgDgBgHQgCgGAAgNIAAhLIgRAAIAAgMIARAAIAAgcIANgLIAAAnIAXAAIAAAMIgXAAIAABNQAAAIACAEQAAADAEABQACACAFAAIAKgCIACANIgOACQgLgBgEgDg");
	this.shape_4.setTransform(147.625,8.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#181818").s().p("AgjAyQgKgLAAgTIAAhQIAOAAIAABOQAAAOAHAIQAHAIAOAAQAQAAAJgLQAJgLAAgVIAAhBIAPAAIAAB2IgOAAIAAgTQgGAKgKAGQgJAGgLAAQgUAAgLgLg");
	this.shape_5.setTransform(137.275,10.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#181818").s().p("AgGBSIAAijIANAAIAACjg");
	this.shape_6.setTransform(128.2,8.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#181818").s().p("AgbA3QgMgHgGgOQgHgPAAgTQAAgTAHgOQAGgOAMgHQANgHAOAAQAQAAAMAHQAMAHAHAOQAGANAAAUQAAAUgGAOQgIAPgLAGQgMAHgQAAQgPAAgMgHgAgTgrQgIAFgFAMQgFAKAAAQQAAARAFALQAEALAJAFQAIAGALAAQAMAAAIgGQAJgFAFgLQAFgNAAgPQAAgOgFgMQgFgLgJgGQgIgGgMAAQgLAAgIAGg");
	this.shape_7.setTransform(118.825,10.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#181818").s().p("AgcBOQgNgGgHgMQgIgLgCgQIAPgCQABAMAHAJQAGALAJAEQAJAEAMAAQALAAALgEQAKgEAFgHQAGgIgBgKQABgKgEgFQgDgGgLgEQgJgFgTgEQgSgDgLgFQgLgGgFgJQgEgJAAgMQgBgMAHgLQAGgKAMgFQAMgGAPAAQAZAAAPAMQANAMACAWIgPACQgCgRgJgJQgLgJgRABQgKAAgJADQgKAFgDAFQgFAIAAAIQAAAMAIAHQAKAIASADQAWAFALAFQANAEAGAKQAIAKgBAOQABANgIALQgGALgOAGQgNAHgRAAQgQAAgOgHg");
	this.shape_8.setTransform(104.7,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#181818").s().p("AgeBMQgMgIgBgQIAOACQACAKAIAEQAHAFAMAAQANAAAJgFQAIgFADgLQAEgKgBgSIAAgGQgNAUgXAAQgPAAgLgIQgLgIgHgNQgGgMAAgTQAAgTAGgNQAHgOALgIQALgIAPAAQAMAAAKAGQAJAGAGAJIAAAAIAAgSIAOAAIAABtQAAAdgNAOQgMAOgaAAQgTAAgLgJgAgShBQgIAFgEAMQgFALAAAOQAAAQAFAKQAEAKAIAHQAIAGAKAAQANAAAHgGQAJgHAFgKQAEgKAAgPQAAgPgEgLQgFgLgJgGQgIgHgMAAQgJAAgJAHg");
	this.shape_9.setTransform(83.25,13.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#181818").s().p("AAgA9IAAhOQAAgPgIgHQgGgIgOAAQgJAAgJAFQgIAFgFAJQgDAJAAAOIAABCIgPAAIAAh2IAOAAIAAATQAGgLAJgFQAKgGALAAQATAAALALQALAKAAAUIAABQg");
	this.shape_10.setTransform(70.3,10.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#181818").s().p("AgGBSIAAh2IANAAIAAB2gAgGg9IAAgUIANAAIAAAUg");
	this.shape_11.setTransform(60.925,8.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#181818").s().p("AAfA9IAAhOQAAgPgHgHQgHgIgOAAQgIAAgJAFQgIAFgFAJQgDAJAAAOIAABCIgPAAIAAh2IANAAIAAATQAHgLAJgFQAKgGALAAQATAAALALQALAKAAAUIAABQg");
	this.shape_12.setTransform(51.65,10.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#181818").s().p("AgeA9IAAh2IAOAAIAAATQAGgMAGgEQAGgGAKAAIAJABIAKAEIgFAOQgIgEgGAAQgJAAgGAFQgGAFgDALQgEALAAALIAAA/g");
	this.shape_13.setTransform(41.525,10.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#181818").s().p("AgfA6QgIgEgEgIQgFgHAAgKQAAgKAFgHQAEgIAKgEQAHgDASgEQAXgDAKgEIAAgEQAAgLgCgHQgDgHgGgDQgHgDgLAAQgZAAgFAXIgPgCQAEgQAMgJQALgIASAAQAOAAALAEQAJAEAFAIQAFAKAAAOIAAArQAAASABAFQABAHADAHIgPAAQgDgGgBgMIAAAAQgIAKgKAGQgLAFgNAAQgKAAgJgEgAARAAIgWAFQgPACgGAHQgHAFAAAKQAAAKAHAGQAHAFALAAIAJgBQAGgCAFgDQAGgEACgDIAGgIQACgEAAgGIABgWIgMADg");
	this.shape_14.setTransform(29.825,10.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#181818").s().p("AgaA3QgNgIgGgOQgGgNAAgTQAAgTAGgOQAHgNAMgJQAMgHAPAAQASAAALAIQALAIAGAPQAFAPAAASIhYAAQAAANAFAMQAFALAJAFQAIAGALAAQAMAAAJgHQAIgFAEgMIAPACQgGARgNAIQgMAJgSAAQgPAAgMgHgAgRgsQgHAEgGAKQgFAIgBAOIBJAAQgCgVgJgKQgJgKgQAAQgJAAgJAFg");
	this.shape_15.setTransform(16.925,10.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#181818").s().p("AguBSIAAijIAQAAIAACVIBNAAIAAAOg");
	this.shape_16.setTransform(4.7,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,193.7,21.5), null);


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
	this.shape.graphics.f("#E68134").s().p("AR3CqIAJgnQANADAFABQAJAAAGgDQAGgEAFgIIALgXIhKjBIA2AAIAmBtIAIAbIABAAIAtiIIA1AAIhLDGQgRAtgQAOQgQAOgdAAQgOAAgWgFgADHBtIA1AJQACAJAIAFQAIADASAAQAWAAALgKQALgKAAgZIAAgTIgBAAQgIAMgPAGQgPAIgSAAQgYAAgTgNQgSgMgMgXQgKgWAAgbQAAggAKgWQALgWASgMQATgMAYAAQATAAAQAHQARAIAIANIAAAAIAAgYIAwAAIAACvQABAigLAWQgKAVgVAJQgWAKggAAQhSAAgGhCgAEHg1QgKAJgDALQgGAOAAAQQABAQAFAPQAFAOAJAHQAKAIANAAQAOAAAJgIQALgHAFgOQAFgOABgQQgBgQgFgOQgGgNgKgHQgKgIgOAAQgNAAgKAHgAQVBgQgLgHgFgMQgEgMAAgXIAAhhIgcAAIAAgpIAcAAIAAgjIAyglIAABIIAkAAIAAApIgkAAIAABdQAAAIACAFQAAADAEADQADABAGAAQAKAAAKgDIAHAoQgJADgKABIgUACQgVAAgMgFgAK2BUQgcgRgOgfQgPggAAgqQAAgqAPgeQAQggAcgQQAcgQAmAAQArAAAdAUQAcATAMAnIg2ANQgNgtgtAAQgXAAgPAMQgQALgHAVQgJAWABAZQgBAaAJAWQAIAVAPAMQAQALAUAAQAOAAAPgHQALgGAKgNQAJgMAEgRIA1ANQgFAbgQAUQgPAUgYAKQgYALgeAAQgnAAgdgRgAHPBZQgUgMgMgXQgKgWAAgfQAAgcALgWQALgXAWgPQAUgNAeAAQAdAAAVAMQAVAMALAXQAMAXAAAfIAAAQIiJAAQADAWAKAMQAMALARAAQAQAAAKgIQALgHAEgMIAzAIQgLAcgWAPQgXAPgiAAQgfAAgWgMgAHngyQgMAMgCATIBVAAQgCgUgMgLQgKgLgSAAQgSAAgLALgAAEBZQgRgMgMgYQgKgXAAgfQAAgdAKgXQAKgVASgOQAUgMAYAAQASAAAOAGQANAHAKAMIABAAIAAhfIAzAAIAAELIgvAAIAAgYIgBAAQgLAPgOAGQgOAHgUAAQgYAAgTgMgAAcgrQgLAQAAAbQAAAUAEANQAGANAKAIQAJAGANABQAWAAALgQQAMgQgBgdQABgQgGgPQgGgOgKgHQgJgIgNAAQgVAAgLARgAjOBZQgVgMgLgXQgKgWgBgfQAAgaAMgYQAKgXAWgPQAXgNAdAAQAcAAAVAMQAVAMALAXQALAWAAAgIAAAQIiHAAQACAWAKAMQALALASAAQAQAAALgIQAJgHAFgMIAzAIQgKAcgYAPQgWAPghAAQggAAgWgMgAi2gyQgMALgCAUIBUAAQgBgUgLgLQgLgLgSAAQgRAAgMALgAsuBYQgVgNgMgXQgMgYAAgcQAAgcAMgYQAMgXAVgMQAWgNAeAAQAgAAAVANQAWAMAMAXQAMAYgBAcQABAdgMAXQgMAXgWANQgVANggAAQgeAAgWgNgAsQg0QgMAIgEANQgHAOAAARQABASAFANQAFANALAIQAJAHAOAAQAOAAALgHQAKgHAFgOQAGgNAAgSQAAgRgFgOQgHgNgJgHQgKgIgPAAQgNABgJAGgAOVBhIAAjBIAzAAIAADBgAlSBhIAAkLIA0AAIAAELgAncBhIgbhhIgHghIgBAAIgGAhIgaBhIgyAAIg7jBIAzAAIAiCCIABAAIAIgjIAXhfIAyAAIAYBgIAHAiIABAAIAiiCIAzAAIg8DBgAuzBhIAAh4QgBgUgGgJQgIgJgQAAQgRAAgMAMQgLANABAbIAABqIg0AAIAAjBIAwAAIAAAZQALgOAOgHQAQgIASAAQAgAAARARQARASAAAeIAACEgAyKBhIhLh7IgnAqIAABRIg3AAIAAkLIA3AAIAAB3IBrh3IBDAAIhhBrIBoCggAOVh6IAAgwIAzAAIAAAwg");
	this.shape.setTransform(133.15,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,266.3,35), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1986CD").s().p("AgpAqIAAhTQAjAAAXAYQAZAYAAAjg");
	this.shape.setTransform(4.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,8.4,8.4), null);


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
	mask.graphics.p("AnGlhIMWhIIB3HsIrmFng");
	mask.setTransform(60.775,42.575);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2B38C").s().p("AhfBcQgTgJgagqQgcgrgPgwQAQgUASgMQAagRAXAKQAGACAOAsQANAoALgDQAUgGAtgIQA9gLAiAAQAYABAdAPQAgAcgGAEQgCACgOgMQgNgLgBABIAJANQAKAOgEADQgDACgKgLQgJgLgBAAIAGAOQAGAMgEACQgEABgGgKQgHgLgBABQAIATgCACQgDAEgIgMIgJgOQgQAEgMgDQgOgDgEgKQgEAAgeAdQgkAjgVANQgPAKgdADIgTABQgKAAgGgCg");
	this.shape.setTransform(57.6909,55.4325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D43C49").s().p("AANAfQgPgmgPgUQgDgDADgCQADgCACADQAHAIAKAVIAOAeQABADgDACIgBABQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_1.setTransform(46.725,43.1667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FC4757").s().p("AAGAeQgIgQgFgRQgEgPgBgJQAAgBAAgBQABgBAAAAQABAAAAgBQABAAABAAQADAAAAAEQAAAJAFAOQAEAQAIAOQACAEgDABIAAABIgCAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_2.setTransform(37.9781,47.3893);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2B38C").s().p("AAAAFQgOgFgCgDQgDgFAJABIANABQAKACADADQADACgBAFQgBABAAAAQAAABgBAAQgBAAAAAAQgBAAgBAAQgEAAgJgDg");
	this.shape_3.setTransform(92.1453,49.1556);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2B38C").s().p("AgHAXQgQgFABgFQAAgEADgCIADgDQABgBgEgDQgEgGABgCQABgDAGgBQAGgCAAgBIgBgEQgCgDACgDQACgDANAEQAOADACADQAEAGgEAEQgEACAAACQgBABACADQACAEgBADQgBADgDACIgCADIABAGQAAAFgDABIgCAAQgFAAgLgEg");
	this.shape_4.setTransform(93.2242,46.0231);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#878A97").s().p("AArgUIARgDIhmAsIgRADg");
	this.shape_5.setTransform(84.075,29.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#232850").s().p("AhGhXIBmgtIAnDcIhmAtg");
	this.shape_6.setTransform(86.875,40.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#484B6B").s().p("AhkCHIC2hPIgljNIARgDIAnDcIjCBVg");
	this.shape_7.setTransform(73.5,46.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2B38C").s().p("AASA8QgfgBgRgaQgHAGgLgUQgLgVAOAOQAQARABgEQAAgBgFgJIgLgPQgFgIATgbQAUgcALAFQAOAFAVAnQAWAogGATQgEAPgcAAIgCAAg");
	this.shape_8.setTransform(48.86,19.1879);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F49379").s().p("AgqA6QgFgLAGgtIAGgqIAPAAQAQAAAGgGQAGgFgBgIIgBgKQAIASAQArQASAwgEAFQgRAUgfAEIgMABQgVAAgFgMg");
	this.shape_9.setTransform(48.8601,24.384);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#232850").s().p("Ag1A9QgMgJgGgQQgJgVAKgSQAMgVAaAUQABgeAUgPQAWgQAVADQAUADANATQAOAXgDAYQgEAagXAQQgSANgXgHQgTgHgMgSQgHgMgBgMQgMgCgEABQgFABADAGIAMAUQAIANgIALQgFAHgFAAQgDAAgDgCg");
	this.shape_10.setTransform(43.3263,17.4155);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FC4757").s().p("AhxDOQgFgEAFgpQAIg4gEguIgRh0QgIhAASgfQAPgZAlgZQAmgaAYAAQBXAAAmA6QANATgMB6IgOCPQABAfAPBEQADAOhpABIgEABQhnAAgegXg");
	this.shape_11.setTransform(48.6458,49.9505);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D43C49").s().p("AgIBVQgJgJgaggIgZgeIBHhjIAoA/QAYAjACAFQgNAbgWAVQgVAUgPAAIgGgBg");
	this.shape_12.setTransform(60.675,41.4791);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F49E85").s().p("AgUBsQghgHhGg6QhUhCAHguQAHgOAagNQAYgMAOAAQAGAAA2BHQA1BEAKgGQALgHBAgEIA+gDIBGAYQgVAKgPABIgRABQg7AdgfAOQgtATgXAAIgKgBg");
	this.shape_13.setTransform(73.6729,46.3696);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#232850").s().p("AhyCJIh2hNQgHgLAGgVQAGgVAHACQAGABA+ABQBBADAaALQANAFARAOIARAOQAJgXAFgpIAKhJQAPhaAogcQATgOBOAHQAoAEAjAGQgOBNhNCcQhPCggfAIIgFAAQgfAAhyhGg");
	this.shape_14.setTransform(33.7917,86.9811);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2B38C").s().p("AgQATQgNgFgIABQgFAAAEgXQAFgYAGAAQALALA5AJIgcAtIgdgOg");
	this.shape_15.setTransform(10.6738,90.0995);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#232850").s().p("AgnBAQgFgBAZg+QAYg9ALgDQAMgEAKAVQAEAHgDAPQgDAQgHAIQgIAKgZAaQgeAcgEAAIgBAAg");
	this.shape_16.setTransform(4.0025,91.519);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#1D2245","#232850"],[0,1],-18,-10.2,0,-18,-10.2,14.7).s().p("ADaExIiFhcQhCgugXgsQgJgQgIgdIgJgoQgBgFgkghQgzgxgbgcQhvh2ADhFQABgpBLgCQAmgBAlAIQAcBCCNDhQCLDcAwA3QACAMgNARQgKANgJAAQgDAAgDgDg");
	this.shape_17.setTransform(68.734,99.3172);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2B38C").s().p("AAQAmQgEgIgbgUIgbgRIAqgfQAfAjALADQAFACgNAUQgMARgFAAIgBgBg");
	this.shape_18.setTransform(92.9944,128.97);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#232850").s().p("AglAwQgIgBgGgLQgEgJgBgIQgBgHAIgMQAJgNAKgFQALgFAhgMQAngOAEADQAEAEgsAtQgqAtgLAAIgBAAg");
	this.shape_19.setTransform(100.2401,130.8846);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(15.3,11.1,90.7,74.10000000000001), null);


(lib.Symbol83copy = function(mode,startPosition,loop,reversed) {
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
	this.frame_48 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(48).call(this.frame_48).wait(1));

	// Symbol 99
	this.instance = new lib.Symbol99();
	this.instance.setTransform(150.8,377.35,1.0922,1.0916,0,0,0,94.6,66.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).to({x:104.5,alpha:1},20,cjs.Ease.quadOut).wait(7));

	// Symbol 98
	this.instance_1 = new lib.Symbol98();
	this.instance_1.setTransform(159.8,249.55,1.0922,1.0916,0,0,0,102.8,28.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({x:113.5,alpha:1},20,cjs.Ease.quadOut).wait(16));

	// Symbol 96
	this.instance_2 = new lib.Symbol96();
	this.instance_2.setTransform(197.8,45.05,0.8677,0.8678,0,0,0,229.2,58.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},20,cjs.Ease.quadOut).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-5.4,272.6,446.2);


(lib.Symbol83 = function(mode,startPosition,loop,reversed) {
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
	this.frame_38 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(4));

	// Symbol 84
	this.instance = new lib.Symbol84();
	this.instance.setTransform(219.55,33.6,0.9789,0.979,0,0,0,197.6,34.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:193.45,alpha:1},19,cjs.Ease.quadOut).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-29.3,256.1,302.1);


(lib.Symbol75 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(37.8,56.75,1,1,0,0,0,53.1,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol75, new cjs.Rectangle(-15.3,-11,106.3,135.6), null);


(lib.Symbol68 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1986CD").s().p("AgCAFQgGABAAgGQAAgEAGgBIAFAAQAGABAAAEQAAAGgGgBg");
	this.shape.setTransform(2.475,8.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1986CD").s().p("AgCAFQgGABAAgGQAAgEAGgBIAGAAQAFABAAAEQAAAGgFgBg");
	this.shape_1.setTransform(15.5,8.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1986CD").s().p("AgFADIAAgFQAAgGAFAAQAGAAAAAGIAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_2.setTransform(9,15.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1986CD").s().p("AgFApIAAhRQAAgGAFAAQAGAAAAAGIAABRQAAAGgGAAQgFAAAAgGg");
	this.shape_3.setTransform(9,6.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1986CD").s().p("AgdAFQgFABAAgGQAAgEAFgBIA7AAQAFABAAAEQAAAGgFgBg");
	this.shape_4.setTransform(10.625,8.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1986CD").s().p("Ag+A/QgbgaAAglQAAgkAbgbQAagaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAaQgbAbglAAQgkAAgagbgAg2g3QgXAXAAAgQAAAgAXAXQAXAXAfAAQAhAAAXgXQAXgXAAggQAAgggXgXQgXgXghAAQgfAAgXAXg");
	this.shape_5.setTransform(8.975,8.975);

	this.instance = new lib.Path();
	this.instance.setTransform(13.2,4.75,1,1,0,0,0,4.2,4.2);
	this.instance.alpha = 0.4492;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol68, new cjs.Rectangle(0,0,18,18), null);


(lib.Symbol63 = function(mode,startPosition,loop,reversed) {
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
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(33).call(this.frame_33).wait(1));

	// Symbol 68
	this.instance = new lib.Symbol68();
	this.instance.setTransform(220.7,155.65,0.3889,0.3889,0,0,0,9,9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({scaleX:1.1142,scaleY:1.1142,x:221.75,y:156,alpha:1},9,cjs.Ease.backOut).wait(5));

	// Symbol 67
	this.instance_1 = new lib.Symbol67();
	this.instance_1.setTransform(100.05,190.65,0.4576,0.4576,0,0,0,10.6,10.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({scaleX:1.0402,scaleY:1.0402,x:99.95,y:192.15,alpha:1},9,cjs.Ease.backOut).wait(10));

	// Symbol 66
	this.instance_2 = new lib.Symbol66();
	this.instance_2.setTransform(19.65,165.2,0.372,0.372,0,0,0,10.3,10.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({scaleX:1.0654,scaleY:1.0654,x:21.6,y:168.25,alpha:1},9,cjs.Ease.backOut).wait(17));

	// Symbol 65
	this.instance_3 = new lib.Symbol65();
	this.instance_3.setTransform(10,90.15,0.3137,0.3137,0,0,0,10.2,9.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({scaleX:1.1302,scaleY:1.13,x:10.95,y:90.25,alpha:1},9,cjs.Ease.backOut).wait(21));

	// Symbol 64
	this.instance_4 = new lib.Symbol64();
	this.instance_4.setTransform(83.8,19.85,0.4209,0.4209,0,0,0,13,18.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:13.6,regY:19.4,scaleX:0.7735,scaleY:0.7758,x:82.7,y:23.65,alpha:1},9,cjs.Ease.backOut).wait(25));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjIDJQhThTAAh2QAAh1BThTQBUhTB0AAQB2AABSBTQBUBTAAB1QAAB2hUBTQhSBTh2AAQh0AAhUhTg");
	var mask_graphics_1 = new cjs.Graphics().p("Aj3D4QhnhnAAiRQAAiQBnhnQBnhnCQAAQCRAABnBnQBnBnAACQQAACRhnBnQhnBniRAAQiQAAhnhng");
	var mask_graphics_2 = new cjs.Graphics().p("AknEnQh6h6AAitQAAisB6h7QB7h5CsAAQCtAAB6B5QB7B7AACsQAACth7B6Qh6B6itAAQisAAh7h6g");
	var mask_graphics_3 = new cjs.Graphics().p("AlWFWQiNiNgBjJQABjICNiOQCPiNDHgBQDIABCOCNQCOCOABDIQgBDJiOCNQiOCPjIAAQjHAAiPiPg");
	var mask_graphics_4 = new cjs.Graphics().p("AmFGGQiiiiAAjkQAAjjCiijQCiihDjAAQDkAACiChQCiCjAADjQAADkiiCiQiiCijkAAQjjAAiiiig");
	var mask_graphics_5 = new cjs.Graphics().p("Am1G1Qi0i1AAkAQAAj/C0i1QC2i1D/AAQEAAAC0C1QC2C1AAD/QAAEAi2C1Qi0C1kAAAQj/AAi2i1g");
	var mask_graphics_6 = new cjs.Graphics().p("AnkHkQjIjIAAkcQAAkaDIjKQDKjIEaAAQEbAADIDIQDKDKAAEaQAAEcjKDIQjIDJkbAAQkaAAjKjJg");
	var mask_graphics_7 = new cjs.Graphics().p("AoTITQjcjcAAk3QAAk2DcjdQDdjcE2AAQE3AADcDcQDdDdAAE2QAAE3jdDcQjcDdk3AAQk2AAjdjdg");
	var mask_graphics_8 = new cjs.Graphics().p("ApDJCQjvjvAAlTQAAlSDvjwQDxjwFSAAQFTAADvDwQDxDwAAFSQAAFTjxDvQjvDxlTAAQlSAAjxjxg");
	var mask_graphics_9 = new cjs.Graphics().p("ApyJyQkDkDAAlvQAAltEDkFQEFkDFtAAQFuAAEDEDQEFEFAAFtQAAFvkFEDQkDEEluAAQltAAkFkEg");
	var mask_graphics_10 = new cjs.Graphics().p("AqhKgQkXkWAAmKQAAmJEXkZQEYkVGJgBQGKABEXEVQEYEZAAGJQAAGKkYEWQkXEZmKgBQmJABkYkZg");
	var mask_graphics_11 = new cjs.Graphics().p("ArRLQQkpkqAAmmQAAmlEpkrQEskqGlAAQGmAAEpEqQEsErAAGlQAAGmksEqQkpErmmAAQmlAAkskrg");
	var mask_graphics_12 = new cjs.Graphics().p("AsAL/Qk9k9AAnCQAAnAE9lAQFAk9HAAAQHBAAE+E9QE/FAAAHAQAAHCk/E9Qk+E/nBAAQnAAAlAk/g");
	var mask_graphics_13 = new cjs.Graphics().p("AsvMuQlRlRAAndQAAncFRlTQFTlRHcAAQHdAAFRFRQFTFTAAHcQAAHdlTFRQlRFTndAAQncAAlTlTg");
	var mask_graphics_14 = new cjs.Graphics().p("AteNeQllllAAn5QAAn4FllmQFmllH5AAQH4AAFkFlQFnFmAAH4QAAH5lnFlQlkFmn4AAQn5AAlmlmg");
	var mask_graphics_15 = new cjs.Graphics().p("AuOONQl4l4AAoVQAAoTF4l7QF7l4ITAAQIUAAF4F4QF7F7AAITQAAIVl7F4Ql4F6oUAAQoTAAl7l6g");
	var mask_graphics_16 = new cjs.Graphics().p("Au9OhQmMmAAAohQAAogGMmCQGOmBIvAAQIwAAGLGBQGPGCAAIgQAAIhmPGAQmLGDowAAQovAAmOmDg");
	var mask_graphics_17 = new cjs.Graphics().p("AvtO2QmfmJAAotQAAorGfmMQGimJJLAAQJLAAGgGJQGiGMAAIrQAAItmiGJQmgGLpLAAQpLAAmimLg");
	var mask_graphics_18 = new cjs.Graphics().p("AwcPKQmzmRAAo5QAAo3GzmVQG2mSJnABQJmgBGzGSQG1GVABI3QgBI5m1GRQmzGUpmAAQpnAAm2mUg");
	var mask_graphics_19 = new cjs.Graphics().p("AxLPgQnGmbgBpFQABpDHGmdQHJmbKCAAQKDAAHGGbQHKGdAAJDQAAJFnKGbQnGGcqDAAQqCAAnJmcg");
	var mask_graphics_20 = new cjs.Graphics().p("Ax7P0QnamiAApSQAApQHammQHdmiKfAAQKdAAHbGiQHcGmABJQQgBJSncGiQnbGlqdAAQqfAAndmlg");
	var mask_graphics_21 = new cjs.Graphics().p("AyqQJQnumsAApdQAApbHumvQHxmrK5AAQK6AAHtGrQHyGvAAJbQAAJdnyGsQntGtq6AAQq5AAnxmtg");
	var mask_graphics_22 = new cjs.Graphics().p("AzZQeQoBm0AApqQAApoIBm2QIEm1LVAAQLWAAIBG1QIEG2AAJoQAAJqoEG0QoBG1rWABQrVgBoEm1g");
	var mask_graphics_23 = new cjs.Graphics().p("A0JQyQoUm8AAp2QAAp0IUm/QIYm9LxAAQLyAAIUG9QIYG/AAJ0QAAJ2oYG8QoUG+ryAAQrxAAoYm+g");
	var mask_graphics_24 = new cjs.Graphics().p("A04RGQoonEAAqCQAAqAIonIQIrnFMNAAQMNAAIoHFQIsHIAAKAQAAKCosHEQooHIsNAAQsNAAornIg");
	var mask_graphics_25 = new cjs.Graphics().p("A1nRbQo8nNAAqOQAAqMI8nRQI/nNMoAAQMpAAI8HNQI/HRAAKMQAAKOo/HNQo8HQspAAQsoAAo/nQg");
	var mask_graphics_26 = new cjs.Graphics().p("A2WRwQpQnWAAqaQAAqYJQnZQJSnWNFAAQNEAAJPHWQJTHZAAKYQAAKapTHWQpPHYtEAAQtFAApSnYg");
	var mask_graphics_27 = new cjs.Graphics().p("A3GSFQpjnfAAqlQAAqlJjniQJnneNfAAQNhAAJiHeQJnHiAAKlQAAKlpnHfQpiHgthAAQtfAApnngg");
	var mask_graphics_28 = new cjs.Graphics().p("A32SZQp2nnAAqyQAAqwJ2nrQJ7nnN8AAQN7AAJ3HnQJ6HrAAKwQAAKyp6HnQp3Hqt7AAQt8AAp7nqg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:102.45,y:10.35}).wait(1).to({graphics:mask_graphics_1,x:95.775,y:18.7}).wait(1).to({graphics:mask_graphics_2,x:89.075,y:27.05}).wait(1).to({graphics:mask_graphics_3,x:82.4,y:35.4}).wait(1).to({graphics:mask_graphics_4,x:75.7,y:43.75}).wait(1).to({graphics:mask_graphics_5,x:69.025,y:52.075}).wait(1).to({graphics:mask_graphics_6,x:62.35,y:60.45}).wait(1).to({graphics:mask_graphics_7,x:55.65,y:68.8}).wait(1).to({graphics:mask_graphics_8,x:48.975,y:77.125}).wait(1).to({graphics:mask_graphics_9,x:42.275,y:85.475}).wait(1).to({graphics:mask_graphics_10,x:35.6,y:93.85}).wait(1).to({graphics:mask_graphics_11,x:28.925,y:102.175}).wait(1).to({graphics:mask_graphics_12,x:22.225,y:110.525}).wait(1).to({graphics:mask_graphics_13,x:15.55,y:118.875}).wait(1).to({graphics:mask_graphics_14,x:8.85,y:127.225}).wait(1).to({graphics:mask_graphics_15,x:2.175,y:135.575}).wait(1).to({graphics:mask_graphics_16,x:8.875,y:130.75}).wait(1).to({graphics:mask_graphics_17,x:15.575,y:125.875}).wait(1).to({graphics:mask_graphics_18,x:22.25,y:121.05}).wait(1).to({graphics:mask_graphics_19,x:28.95,y:116.175}).wait(1).to({graphics:mask_graphics_20,x:35.65,y:111.35}).wait(1).to({graphics:mask_graphics_21,x:42.35,y:106.5}).wait(1).to({graphics:mask_graphics_22,x:49.025,y:101.65}).wait(1).to({graphics:mask_graphics_23,x:55.725,y:96.8}).wait(1).to({graphics:mask_graphics_24,x:62.425,y:91.975}).wait(1).to({graphics:mask_graphics_25,x:69.125,y:87.1}).wait(1).to({graphics:mask_graphics_26,x:75.8,y:82.275}).wait(1).to({graphics:mask_graphics_27,x:82.5,y:77.4}).wait(1).to({graphics:mask_graphics_28,x:89.2,y:72.575}).wait(6));

	// Layer_1
	this.instance_5 = new lib.Symbol70();
	this.instance_5.setTransform(144.8,109.45,1,1,0,0,0,143.1,83.9);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,0,301,203.8);


(lib.Symbol61 = function(mode,startPosition,loop,reversed) {
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
	this.frame_14 = function() {
		if (myCounter2++ >=60){
			this.stop();
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer_2
	this.instance = new lib.Symbol75();
	this.instance.setTransform(58,56.8,1,1,0,0,0,37.8,56.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:55.3},7).to({y:56.8},7).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol76();
	this.instance_1.setTransform(62.8,69.95,1,1,0,0,0,62.8,39.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:71.45},7).to({y:69.95},7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-12.5,125.6,137.1);


(lib.Symbol60 = function(mode,startPosition,loop,reversed) {
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
	this.frame_12 = function() {
		if (myCounter2 >=60){
			this.stop();
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Layer_2
	this.instance = new lib.Symbol73();
	this.instance.setTransform(45.6,44.8,1,1,0,0,0,27.4,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:44.3},6).to({y:44.8},6).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol74();
	this.instance_1.setTransform(40.9,78.7,1,1,0,0,0,40.9,25.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:79.45},6).to({y:78.7},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,81.9,105.6);


(lib.Symbol59 = function(mode,startPosition,loop,reversed) {
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
	this.frame_10 = function() {
		if (myCounter2 >=60){
			this.stop();
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer_2
	this.instance = new lib.Symbol71();
	this.instance.setTransform(87.75,71.7,1,1,0,0,0,42.4,71.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:70.6},5).to({y:71.7},5).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol72();
	this.instance_1.setTransform(72.2,132.85,1,1,0,0,0,72.2,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:133.65},5).to({y:132.85},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.1,144.5,180);


(lib.Symbol58 = function(mode,startPosition,loop,reversed) {
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
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(1));

	// Layer_20
	this.instance = new lib.Symbol79();
	this.instance.setTransform(329.95,187.75,0.3302,0.3292,0,0,0,35.6,13.3);

	this.instance_1 = new lib.Symbol80();
	this.instance_1.setTransform(313.5,188.45,0.345,0.3441,0,0,0,16.6,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(17));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(307.8,27.2,434.99999999999994,163.20000000000002);


(lib.Symbol57 = function(mode,startPosition,loop,reversed) {
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
	this.frame_41 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(41).call(this.frame_41).wait(1));

	// Symbol 61
	this.instance = new lib.Symbol61();
	this.instance.setTransform(60.55,310.25,1.6866,1.6866,0,0,0,62.8,56.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({regX:64.5,regY:58.4,scaleX:0.7594,scaleY:0.7598,x:309.7,y:169.7},19,cjs.Ease.quartOut).wait(18));

	// Symbol 60
	this.instance_1 = new lib.Symbol60();
	this.instance_1.setTransform(104.05,277.55,1.5954,1.5954,0,0,0,40.9,52.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({regX:41.6,regY:53.2,scaleX:0.8232,scaleY:0.8243,x:226.8,y:206.7},19,cjs.Ease.quartOut).wait(12));

	// Symbol 59
	this.instance_2 = new lib.Symbol59();
	this.instance_2.setTransform(50.85,402.9,1.6564,1.6562,0,0,0,71.8,89.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:75.4,regY:92,scaleX:0.8636,scaleY:0.8646,x:299.25,y:290.6},19,cjs.Ease.quartOut).wait(23));

	// Layer_2
	this.instance_3 = new lib.Symbol63();
	this.instance_3.setTransform(269.95,291.65,0.6313,0.6314,0,0,0,119.1,34.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(23));

	// Layer_3
	this.instance_4 = new lib.Symbol58();
	this.instance_4.setTransform(246.8,29.1,1,1,0,0,0,246.8,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.1,64.4,456.5,485.4);


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

	// Layer_2
	this.instance = new lib.Symbol7();
	this.instance.setTransform(44.1,44.1,1,1,0,0,0,44.1,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,88.2,88.2), null);


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
	this.instance = new lib.Symbol4();
	this.instance.setTransform(133.2,18.35,1,1,0,0,0,133.2,17.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E68134").s().p("AAMAgIgNgYIgLAAIAAAYIgMAAIAAg/IAbAAQAKAAAGAGQAFAFAAAJQAAAPgPADIAPAZgAgMgBIAOAAQAFAAADgCQADgDAAgFQAAgKgLAAIgOAAg");
	this.shape.setTransform(273.9,5.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E68134").ss(0.3).p("AA1AAQAAAWgQAPQgPAQgWAAQgUAAgQgQQgQgPAAgWQAAgVAQgPQAQgQAUAAQAWAAAPAQQAQAPAAAVg");
	this.shape_1.setTransform(273.65,5.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,-1,279.9,36.9), null);


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

	// timeline functions:
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(33).call(this.frame_33).wait(12));

	// Symbol 7
	this.instance = new lib.Symbol9();
	this.instance.setTransform(44.15,44.15,0.1542,0.1542,0,0,0,44.1,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:44.1,y:44.1},14,cjs.Ease.backInOut).wait(31));

	// Layer_9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3kHLIAAuVMAvJAAAIAAOVg");
	mask.setTransform(249.25,45.975);

	// Symbol 4
	this.instance_1 = new lib.Symbol8();
	this.instance_1.setTransform(-41,34.9,1,1,0,0,0,139.5,17.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({x:247.7,alpha:1},20,cjs.Ease.quadInOut).wait(18));

	// Symbol 5
	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(0.95,64.75,1,1,0,0,0,96.8,10.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({x:205.25,alpha:1},16,cjs.Ease.quadInOut).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-3.6,390.8,95.39999999999999);


// stage content:
(lib.KnowledgeCity_160x600_v2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [329];
	// timeline functions:
	this.frame_329 = function() {
		if (myCounter++ >=2){
			this.stop();
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(329).call(this.frame_329).wait(1));

	// text2
	this.instance = new lib.Symbol83copy();
	this.instance.setTransform(131.5,44.25,0.5662,0.5661,0,0,0,205.4,50.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(187).to({_off:false},0).wait(143));

	// text
	this.instance_1 = new lib.Symbol83();
	this.instance_1.setTransform(137.2,69.15,0.5974,0.5973,0,0,0,206.8,52.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).wait(145).to({alpha:0},18,cjs.Ease.quadOut).to({_off:true},1).wait(140));

	// call to action.svg
	this.instance_2 = new lib.Symbol97();
	this.instance_2.setTransform(79.8,235.95,0.1064,0.1064,0,0,0,63,9.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({_off:false},0).to({regX:62.8,scaleX:1,scaleY:1,y:237.95,alpha:1},22,cjs.Ease.backOut).wait(127).to({y:288.95},17,cjs.Ease.quadInOut).wait(69).to({regY:9.5,scaleX:1.0837,scaleY:1.0837,x:79.85,y:289.1},8).to({regY:9.4,scaleX:1,scaleY:1,x:79.8,y:288.95},8).wait(6).to({regY:9.5,scaleX:1.0837,scaleY:1.0837,x:79.85,y:289.1},8).to({regY:9.4,scaleX:1,scaleY:1,x:79.8,y:288.95},8).wait(6));

	// logo
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(85.1,565.95,0.3797,0.3756,0,0,0,203.3,54.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(330));

	// Banner 320x50 (êîïèÿ2)
	this.instance_4 = new lib.Symbol57();
	this.instance_4.setTransform(63.3,308.25,0.808,0.8081,0,0,0,250.8,116.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(329));

	// buildings
	this.instance_5 = new lib.Symbol56();
	this.instance_5.setTransform(21.75,578,0.44,0.4397,0,0,0,272.9,208.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:73.25},329).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgODgwbIcHAAMAAABg3I8HAAg");
	this.shape.setTransform(80,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgODAwcMAAAhg3IcHAAMAAABg3g");
	this.shape_1.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(330));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-114.3,300,326.5,358.6);
// library properties:
lib.properties = {
	id: '4C67F3A136A92E4E81338A9018FE5B2A',
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