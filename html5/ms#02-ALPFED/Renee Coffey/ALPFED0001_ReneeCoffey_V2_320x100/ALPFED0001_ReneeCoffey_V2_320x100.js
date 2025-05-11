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


(lib.Symbol49 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF3640").s().p("AgWAdIAOAAIgCgsIgNAAIgBgSIAJgBQAFAAABgBQACgDAAgFIABgIIAPgBIADBQIANAAIAAAXIguACg");
	this.shape.setTransform(30.5,7.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3640").s().p("AgWgyIAqgBIAAAVIgWABIACASIAUgBIABAVIgVABIAAATIAWAAIABAWIgpABg");
	this.shape_1.setTransform(22.6,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3640").s().p("AgJgcIgPAAIAAgWIAxgBIAAAVIgPABIADBRIgTAAg");
	this.shape_2.setTransform(17.225,7.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3640").s().p("AgTAuQgFgJgBglQgBgjAEgJQAEgJARAAQAPAAAGAIQAFAKABAjQABAjgEAJQgFAJgQABIgCAAQgOAAgFgIgAgFgcQgBACABAaQAAAYACAEQAAACAEAAQAFAAAAgDQABgFgBgWQAAgZgCgEQgBgDgDAAQgEABgBADg");
	this.shape_3.setTransform(11.95,7.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3640").s().p("AgagyIAVgBIAHBIIACAAIAChIIAVAAIgIBmIgeACg");
	this.shape_4.setTransform(6.125,7.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai0g/IFkgNIAECMIljANg");
	this.shape_5.setTransform(18.05,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(0,0,36.1,15.4), null);


(lib.Symbol42 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDA803").s().p("AhThOIBdgDIBKBOIhGBTIhdACg");
	this.shape.setTransform(8.425,8.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,0,16.9,16.5), null);


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
	this.shape.graphics.f("#1A1A19").s().p("AF5AzQgNgNAAgVQAAgUANgMQANgNATAAQATAAALAOQAKALAAASIAAAIIg/AAQACAYAVAAQAPAAAEgOIAVAAQgDAOgLAJQgKAHgQAAQgUAAgMgMgAGDAIIApAAQAAgIgFgFQgFgHgJAAQgSAAgEAUgADSAyQgMgMAAgVQAAgUAMgMQAMgNAUAAQAUAAANANQAMAMAAAUQAAAVgMAMQgNANgUAAQgUAAgMgNgADcARQAAAeAWAAQAXAAAAgeQAAgcgXgBQgWABAAAcgAj3A5QgJgHAAgMQAAgYAggDIAagEIAAgEQAAgPgQAAQgPAAgCANIgVAAQABgNALgIQAKgIAQAAQAmAAAAAhIAAAiQAAAMACAKIgWAAIgBgOQgGAQgXAAQgNAAgIgGgAjZAXQgRADAAAKQAAAMAOAAQAJAAAGgGQAHgFAAgKIAAgFgAlSAzQgMgNAAgVQAAgUANgMQAMgNATAAQATAAAMAOQAKALAAASIAAAIIhAAAQADAYAUAAQAPAAAFgOIAUAAQgDAOgLAJQgKAHgQAAQgTAAgNgMgAlIAIIApAAQAAgIgEgFQgGgHgJAAQgSAAgEAUgAEvA9IAAhXIAWAAIAAAUQAHgWAUAAIAHABIAAAVIgJgBQgLAAgGAHQgIAGAAAOIAAApgAChA9IAAgzQAAgVgRAAQgTABAAAXIAAAwIgWAAIAAgzQAAgVgQAAQgTABAAAXIAAAwIgWAAIAAhXIAWAAIAAAPQAHgRAUAAQAUAAAHARQAJgRAVAAQAfAAAAAhIAAA4gAgcA9IAAgzQAAgVgRAAQgUABAAAXIAAAwIgWAAIAAhXIAWAAIAAAPQAGgRAVAAQAPAAAJAJQAJAJAAAPIAAA4gAibA9IAAhXIAWAAIAAAUQAGgWAVAAIAHABIAAAVIgJgBQgLAAgGAHQgIAGAAAOIAAApgAnAA9IAAh7IAXAAIAABpIA/AAIAAASg");
	this.shape.setTransform(44.925,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,89.9,12.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgZg2IAwgCIABAYIgaABIABAUIAZgBIABAVIgZABIAAAVIAagBIABAYIgxADg");
	this.shape.setTransform(35.65,32.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Agfg2IAggBQAPgBAGAHQAEAHABAQQABAQgCAGQgBADgGADIAAABIAEAEQACAEADATIAFAYIAAAAIgZABQgBgEgEgbQgCgMgDAAIgEAAIACAsIgYAAgAgHgHIAHgBQAEAAAAgNQAAgLgGAAIgGAAg");
	this.shape_1.setTransform(29.5,33.1233);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAyQgGgIgBgUIgChMIAXgBIADBMQAAAIABACQACACADgBQAFAAABgCQABgCgBgHIgChMIAXgBIACBMQAAAVgEAHQgFAJgTAAIgCAAQgRAAgFgHg");
	this.shape_2.setTransform(22.575,33.3765);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKgeIgSAAIAAgXIA5gCIAAAXIgRABIADBXIgWAAg");
	this.shape_3.setTransform(15.975,33.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAyQgGgIgBgUIgDhMIAZgBIACBMQABAIAAACQACACAEgBQAEAAABgCQABgCAAgHIgDhMIAXgBIACBMQAAAVgEAHQgEAJgUAAIgCAAQgRAAgFgHg");
	this.shape_4.setTransform(9.55,33.8265);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYg2IAvgCIABAYIgYABIAAAWIAYgBIABAWIgZABIACArIgXABg");
	this.shape_5.setTransform(3.475,34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTA1QgGgFgBgNIABgQIATAAIAAAEQAAALAGAAQAFAAABgCQACgDgBgHQAAgGgGgEQgPgHgHgFQgGgFgBgXQgBgQAGgGQAFgGAQgBQAOAAAGAFQAHAFAAAOIgBAMIgTABIAAgFIgBgHQgCgCgDAAQgEAAgBACQgBACAAAFQAAAHAGAEIATAJQAGAEACAEQACAGABANQABAUgGAHQgGAIgRABIgCAAQgMAAgGgFg");
	this.shape_6.setTransform(60.2051,18.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAWIAAgBIAHgUIAAgBIgIAAIgBgUIAWgBIABAVIgKAWg");
	this.shape_7.setTransform(55.4,14.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWg2IAmgCIAPBvIgYABIgDgbIgKABIgBAaIgXABgAgFAIIAIgBIgFgnIgCAAg");
	this.shape_8.setTransform(51.3,18.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNg2IAXgBIAEBvIgXAAg");
	this.shape_9.setTransform(46.175,19.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYg2IAXgBIACBWIAXgBIABAZIguABg");
	this.shape_10.setTransform(41.975,19.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWg2IAmgBIAPBuIgYAAIgDgaIgKABIgBAZIgXABgAgGAIIAIgBIgEgnIgBAAg");
	this.shape_11.setTransform(36.075,19.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Agfg2IAggBQAOgBAHAHQAEAGACARQAAAQgDAFQgBAEgFACIAAABQADACAAADQADAHADAPIAEAYIAAABIgYABIgGggIgCgJQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAgBAAIgDAAIACArIgYABgAgHgIIAGAAQAFAAAAgOQgBgLgFABIgFAAg");
	this.shape_12.setTransform(29.25,19.7232);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKgeIgSAAIAAgYIA5gBIAAAXIgRABIADBWIgWACg");
	this.shape_13.setTransform(22.475,19.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTA1QgGgFgBgNQgBgLACgFIATgBIAAAFIABAIQACADADAAQAFgBABgCQABgCAAgHQAAgHgGgDIgLgGQgHgDgEgDQgGgFgBgXQgBgQAGgGQAFgGAQgBQAOAAAGAFQAHAFAAAOIgBAMIgTAAIAAgEIgBgHQgCgCgDAAQgEAAgBACIgBAHQAAAHAFADQAIAFAMAFQAFADADAFQACAGABANQABAUgGAHQgGAIgRAAIgDABQgLAAgGgFg");
	this.shape_14.setTransform(16.4551,20.1054);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAyQgGgJAAgTIgDhMIAXgBIADBMIACAKQAAABAEAAQAEAAACgCQABgCgBgHIgChMIAWgBIAEBMQAAAVgFAHQgFAJgUAAIgCAAQgQAAgFgHg");
	this.shape_15.setTransform(9.95,20.3765);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWg2IAmgCIAPBuIgYABIgDgZIgKAAIgBAaIgXABgAgGAHIAJAAIgFgnIgBAAg");
	this.shape_16.setTransform(3.625,20.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAxQgGgKgBgnQgBglAFgKQAFgJATgBQAWAAAFANQABAFABALIAAAGIgVABIAAgCIgBgIQgBgDgFAAQgGAAAAADQgCAEABAbQABAaACAEQABADAFAAQAFAAABgDQACgDgBgKIAAgFIgJAAIgBgVIAegBIABAVQABAbgFAJQgEAKgUAAIgCABQgRAAgFgJg");
	this.shape_17.setTransform(42.175,5.7505);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Agfg1IAXgBIAQAmIABAAIgCgnIAVgBIAEBvIgMAAIgbg6IgBAAIACA7IgVABg");
	this.shape_18.setTransform(35.4,5.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNg2IAXgBIAEBuIgXABg");
	this.shape_19.setTransform(30.325,6.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Agfg2IAfgBQASgBAGAJQADAFACAIQABAJABAZIAAAgQgBAIgDAGQgEAJgUAAIgeABgAgHgfIACA+IAHAAQAFAAAAgDQABgFAAgXQgBgagCgDQgBgDgEAAg");
	this.shape_20.setTransform(25.2625,6.3736);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYg2IAXgBIACBVIAYgBIAAAZIgtACg");
	this.shape_21.setTransform(19.275,6.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNg2IAXgBIAEBuIgXABg");
	this.shape_22.setTransform(14.875,6.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVAyQgGgJAAgTIgDhMIAXgBIADBMIACAKQABABADAAQAFAAABgCQABgBAAgIIgDhMIAXgBIACBMQABAVgFAHQgFAJgTAAIgDAAQgQAAgFgHg");
	this.shape_23.setTransform(9.7775,6.9265);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Agfg2IAggBQAPgBAGAHQAFAGABARQABALgCAFQgBAEgFADIAAABQAGADABACQADAGAAAPQABAQgFAHQgFAHgPABIgiABgAgFAIIAAAZIAHAAQAGgBAAgKQAAgOgHAAgAgHghIABAYIAGgBQADAAABgCIABgLQAAgKgGAAg");
	this.shape_24.setTransform(3.1583,7.1732);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,63.1,39.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgVA8QgHgGgBgPQgBgMACgFIAWgBIgBAFQABAHABADQACADAEgBQAFAAABgCQACgDgBgIQAAgHgGgFIgNgGQgIgDgEgEQgIgFgBgaQAAgSAGgHQAGgHASgBQAQgBAHAGQAHAGABAQQAAAKgBADIgWABIAAgFIgBgIQgCgDgEABQgEAAgCACQgBACAAAGQAAAFACADQABACAEABIAMAHIAKAEQAGAEACAFQADAHABAPQABAXgHAHQgHAKgTAAIgBAAQgOAAgHgFg");
	this.shape.setTransform(146.6793,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLgjIgUABIgBgaIBAgDIABAbIgTAAIADBjIgZAAg");
	this.shape_1.setTransform(139.475,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPg9IAagBIAEB8IgZABg");
	this.shape_2.setTransform(134.3,6.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVA8QgHgGgBgPIABgRIAWgBIAAAFQAAAHABADQACACAEAAQAFAAACgCQABgDAAgIQgBgIgGgEIgMgGQgJgEgEgDQgHgFgBgaQgBgSAGgHQAGgHATgBQAQgBAGAGQAHAGABAQQAAAIgBAFIgWABIAAgGQAAgFgBgDQgCgCgEAAQgEABgBACQgCACAAAGQABAJAGACIAWALQAGAEADAFQACAHABAPQABAWgHAJQgHAIgTABIgDAAQgNAAgGgFg");
	this.shape_3.setTransform(128.9996,7.1052);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPg9IAagBIAFB9IgaAAg");
	this.shape_4.setTransform(123.7,7.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Agig8IAbgBIAJBXIACAAIAEhYIAcgBIgLB9IgpACg");
	this.shape_5.setTransform(117.85,7.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Aghg9IAlgBQAQgBAHAKQAGAJABAYQABAYgGAKQgGAKgQABIgLAAIACAmIgaABgAgGgjIABAjIAGAAQAEAAABgEQACgFgBgLQAAgJgCgEQgBgDgEAAg");
	this.shape_6.setTransform(107.2827,7.8988);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZA4QgDgGgCgKQgCgLgBgdQgBgaABgMQABgJADgGQAFgKAXgBQANAAAHADQAHADADAJQADAHAAALIAAAGIgYABIAAgCQAAgFgCgEQAAgDgGAAQgGAAgBADQgCAGABAdQABAdACAFQACADAFAAQAGAAABgDQACgEAAgKIAAgGIgMAAIAAgYIAigBIABAYQABAegFALQgFAKgXABIgEAAQgSAAgFgJg");
	this.shape_7.setTransform(99.9327,8.1308);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Agdg9IA3gCIABAbIgdABIABAWIAcgBIABAYIgcABIAAAYIAdgBIABAcIg2ACg");
	this.shape_8.setTransform(89.625,8.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Agdg9IA3gCIABAbIgdABIABAWIAcgBIABAYIgcABIAAAYIAdgBIABAcIg3ACg");
	this.shape_9.setTransform(83.2,8.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Agkg9IAlgBQARgBAGAIQAGAHABATQAAASgCAGQgCAEgGADIAAABIAEAFQADAGAEAUIAEAbIABAAIgcABIgHgjQgBgIgBgDQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgEAAIACAxIgaABgAgJgkIABAcIAHgBQAGAAAAgPQgBgHgBgDQgCgCgDAAg");
	this.shape_10.setTransform(76.275,8.9985);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Agcg9IA2gCIABAbIgcABIABAZIAbgBIACAZIgdABIACAwIgZABg");
	this.shape_11.setTransform(69.2,9.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Agdg9IA3gCIAAAbIgcABIABAWIAcgBIABAYIgcABIAAAYIAdgBIABAcIg3ACg");
	this.shape_12.setTransform(59.45,9.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Agkg9IAlgBQARgBAGAIQAGAHABATQAAARgCAHQgCAEgGADIAAABQADACABADQADAGAEAUIAEAaIABABIgcABIgHgjQgBgJgBgCQAAgBAAgBQgBAAAAAAQgBAAAAgBQgBAAAAABIgEAAIACAxIgaABgAgIgJIAHAAQADAAABgDQACgDAAgJQgBgHgCgDQgBgCgDAAIgHAAg");
	this.shape_13.setTransform(52.525,9.8484);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPA/QgGgCgEgGQgDgGgCgJQgCgLgBgcQgBgbABgLQABgJADgHQAGgLAWAAQAUgBAHAKQAEAGABAKQACALABAcQABAbgBALQgBAJgDAGQgGALgWABIgEAAQgJAAgEgCgAAAgmQgFAAgCADQgBAEABAfQABAeACAEQABADAFAAQAFAAABgEQABgFgBgcQgBgfgCgFQgBgCgEAAIAAAAg");
	this.shape_14.setTransform(44.8333,10.0538);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Agzg8IAlgBIAOA2IAAAAIALg3IAkgCIAFB9IgYABIgDhKIgBAAIgQBLIgKAAIgWhKIgBAAIACBLIgXABg");
	this.shape_15.setTransform(35.625,10.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#258556").s().p("AgCACIAAgCQABgBAEAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAABgBAAIAAAAIgCAAg");
	this.shape_16.setTransform(17.35,8.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#258556").s().p("AAAAAQABgBABABQAAAAABAAQAAAAAAAAQAAAAAAABIgFABQAAgBAAgBQAAAAABAAQAAAAABAAQAAAAAAAAg");
	this.shape_17.setTransform(19.975,8.1964);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#258556").s().p("AgCACQAAgBAAgBQABAAAAAAQABAAAAAAQAAAAAAgBQABAAABABQAAAAAAAAQABAAAAAAQAAABAAABg");
	this.shape_18.setTransform(12.125,8.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#258556").s().p("AgBAEQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAIACgBQADAAgBAEQgBADgCAAIgBAAg");
	this.shape_19.setTransform(13.6875,8.6923);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FAA819").s().p("AgBACIAAgDIADAAIAAADg");
	this.shape_20.setTransform(15.025,7.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FAA819").s().p("AgCAHIACgNIADAAIgCANg");
	this.shape_21.setTransform(14.825,8.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FAA819").s().p("AgFAHIACgNIADAAIAAACIAAABIABgDIACgBIADAAIgBAFQgEgCgBAEIgBAHg");
	this.shape_22.setTransform(18.725,8.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FAA819").s().p("AgCAHQgEgBAAgFQAAgEAEgCQACgCADABQAEAAAAAEIgEABQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgCACAAACQAAABAAABQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQAAgBABAAIAEAAQgDAGgEAAIgCgBg");
	this.shape_23.setTransform(15.8975,8.6216);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FAA819").s().p("AgDAHQgEgBABgEQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAEgBQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAQgBABAAAAIgEAAQAAgEAFgBQAHAAAAAEQAAADgBAHIgEAAIAAgBQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAIgCgBgAgCACIAAACQABABAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAAAgBQAAAAAAgBQABgBAAgBQgEAAgBACg");
	this.shape_24.setTransform(17.3531,8.5643);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FAA819").s().p("AgGABQAAgGAGgBQAJgCgCAJIgJAAQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAAAQAAAAABgBQAAAAABAAIABgBIAEgBQgCAFgFAAIgBAAQgFAAAAgGgAABgDQgBAAAAAAQAAAAgBABQAAAAAAABQgBAAAAABIAGgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBAAIAAAAg");
	this.shape_25.setTransform(19.9348,8.471);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FAA819").s().p("AgGABQAAgGAGgBQAIgCgBAJIgJAAQAAABAAAAQAAAAAAABQAAAAAAABQABAAAAAAQABAAAAAAQAAABAAgBQABAAAAAAQAAAAABAAIABgBIADAAQAAAEgGABIAAAAQgGAAAAgHgAgCAAIAFAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAAAAAQAAAAgBABQAAAAgBAAQAAABAAABg");
	this.shape_26.setTransform(12.1298,8.7414);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FAA819").s().p("AgGAJQgCgDABgFQABgCADgCQADgCACACIABABIABgHIAEAAIgDATIgEAAIAAgCIgBABIgCABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgAgCAAQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAABAAQAAABAAAAQADABABgFQABgDgDgBIgCABg");
	this.shape_27.setTransform(13.7719,8.4194);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FAA819").s().p("AAAgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQgCABgBADIgBAHIgEAAIACgNIAEAAIAAABQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQACgDAEABQAEAAgBAEIgBAJIgEAAIABgJQAAgBAAAAQAAgBgBAAQAAAAgBABQAAAAgBABIgCAEIgBAFIgDABg");
	this.shape_28.setTransform(10.1531,8.7964);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#258556").s().p("AhFAUIAEgcQABgCADgCQACgDACAAIB/gEIgDAWQgCAJgDACIgFACIh+AEgAgvACIgCAKIAEgBIABgFIACgFQABgBAAAAQABAAAAAAQABAAAAAAQAAABAAAAIgBAKIAEAAIACgKQAAgDgEAAQgDgBgCADQgBAAAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAIAAgBIgFAAIgCANIAEAAIACgHQAAgEACgBIABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABgAgcgDQgFABAAAHQgBAHAIgBQAFgBABgEIgDAAIgBABQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIALgBQABgHgHAAIgDAAgAgOgCQgCABgCADQgBAEADADQACADAEgCIABgCIAAACIAEAAIADgTIgDABIgBAHIgCgCIgDAAIgDABgAAHgDQgDADAAAEQgBAFAEABQAIABACgHIgEAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgEACAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAgBAAIAEAAQAAgDgEgBIgCAAIgEABgAgDAKIAEAAIACgNIgDAAgAAagCQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgGABQgBAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAQAAAEADABQAEABACgCIAAABIAEAAQACgHgBgDQAAgEgIAAQgEABAAAEIADAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIABAAgAAhAJIAEAAIABgIQACgDAEABIAAgEIgCAAIgCABIgBACIAAgBIAAgCIgEAAgAAygFQgGABgBAGQAAAHAIgBQAFAAACgFIgFABIgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAIAKAAQABgHgHAAIgCAAgAAAgGIAEAAIAAgDIgEAAg");
	this.shape_29.setTransform(14.85,8.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhFAUIAEgcQABgCADgCQACgDACAAIB/gEIgDAWQgCAJgDACIgFACIh+AEg");
	this.shape_30.setTransform(14.85,8.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C7DDC6").s().p("AhwBJQgEgEAAgFIgEh3QAAgFAEgFQAEgEAFAAIDRgHQAGAAAEADQAEAEAAAGIAFB3QAAAFgEAEQgEAEgFABIjSAHQgFAAgFgEg");
	this.shape_31.setTransform(12.0722,12.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,150,20), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgVA8QgHgGgBgPQgBgLACgGIAWgBIgBAFQABAHABADQACACAEAAQAFAAABgCQACgDAAgIQgBgHgGgFQgSgHgHgGQgFgDgCgIIgCgUQAAgSAGgHQAGgHASgBQAQgBAHAGQAHAGABAQIgBANIgWABIAAgGIgBgIQgCgCgEAAQgEABgCACQgBACAAAGQAAAIAHADIAWALQAGAEACAFQADAHABAPQABAWgHAJQgHAIgTABIgDAAQgNAAgGgFg");
	this.shape.setTransform(124.8293,6.5052);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Agdg9IA3gCIABAbIgdABIABAWIAcgBIABAYIgcACIAAAXIAdgBIABAcIg3ACg");
	this.shape_1.setTransform(118.175,6.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Agzg8IAlgCIAOA3IAAAAIALg3IAlgBIAEB8IgYABIgChKIgCAAIgQBKIgLABIgVhJIgBAAIACBKIgYAAg");
	this.shape_2.setTransform(109.45,7.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZA4QgEgGgBgJQgCgMgBgcQgBgbABgLQABgJADgHQAGgKAWgBQAVgBAGAKQADAHACAJQACALABAcQABAbgBALQgBAJgDAHQgFAKgXABIgEAAQgSAAgFgJgAgHgjQgBAFABAeQABAeACAEQABADAEAAQAFAAACgDQABgEgBgeQgBgfgCgEQgBgDgEAAQgGAAgBADg");
	this.shape_3.setTransform(100.275,7.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Agkg8IAbgBIACAwIAPgBIgCgwIAbgBIAEB9IgbABIgBg0IgQAAIACA0IgbABg");
	this.shape_4.setTransform(92.55,7.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5g8IAbAAIAIBTIACAAIAJhUIAZgBIAPBUIABAAIADhVIAZAAIgHB9IgkABIgMhMIgCAAIgFBMIglACg");
	this.shape_5.setTransform(79.025,8.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Agdg9IA3gCIAAAbIgcABIABAWIAcgBIABAYIgcABIAAAYIAdgBIABAcIg2ACg");
	this.shape_6.setTransform(70,8.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Agjg9IAZgBIASArIABAAIgBgsIAYAAIAEB8IgNABIgghBIgBAAIADBCIgYABg");
	this.shape_7.setTransform(62.875,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Agzg8IAlgBIAOA2IAAAAIALg3IAkgCIAFB9IgYABIgDhKIgBAAIgQBLIgKAAIgWhKIgBAAIACBLIgXABg");
	this.shape_8.setTransform(50.125,9.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAkIAQgRQAPgRADgFQACgFAAgOQAAgJgCgEQgBgDgFAAQgFABgCADQgBAEABAMIAAAFIgZABIAAgNQgBgVAGgIQAGgJAUAAQAVgBAHAKQAGALABATQABAQgDAIQgDAJgMAMIgOAOIAAACIAggCIABAbIg/ADg");
	this.shape_9.setTransform(40.9929,9.3988);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNgLIAZgBIABAYIgZABg");
	this.shape_10.setTransform(35.75,14.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAkIASgBIgCg1IgSAAIgBgXIALgBQAHAAACgCQADgCAAgHIAAgJIAVgBIADBhIARAAIABAcIg9ABg");
	this.shape_11.setTransform(30.175,9.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#886BAE").ss(0.2,0,0,4).p("AABAdIgBg5");
	this.shape_12.setTransform(6.85,14.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#886BAE").ss(0.2,0,0,4).p("AgVABIArgB");
	this.shape_13.setTransform(6.975,14.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSgYIAjgBIABAyIgiABg");
	this.shape_14.setTransform(6.8,14.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#886BAE").ss(0.2,0,0,4).p("AABAeIgBg7");
	this.shape_15.setTransform(14.4,14.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#886BAE").ss(0.2,0,0,4).p("AgVABIArgB");
	this.shape_16.setTransform(14.275,14.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSgYIAjgCIACAzIgjABg");
	this.shape_17.setTransform(14.425,14.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F0692E").s().p("AhUgmICigGIAeBSIjXAHg");
	this.shape_18.setTransform(10.8,6.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3670AB").s().p("AhkgFIDJgHIAAASIjJAHg");
	this.shape_19.setTransform(11.025,19.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#886BAE").s().p("AhmgtIDJgHIAEBiIjJAHg");
	this.shape_20.setTransform(10.875,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,128.1,21), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgthKIAhgCIACA8IAUgBIgDg7IAhgBIAGCZIghABIgCg/IgUAAIADBAIghABg");
	this.shape.setTransform(142.1,12.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOgrIgZABIgBggIBQgDIABAhIgYAAIAEB5IgfABg");
	this.shape_1.setTransform(132.725,13.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgShLIAggBIAFCZIggAAg");
	this.shape_2.setTransform(126.4,13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgihLIBDgCIAAAhIgiABIABAeIAigBIABAeIgjACIADA7IggABg");
	this.shape_3.setTransform(120.3,13.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgihLIBDgCIAAAgIgiABIABAfIAigBIABAeIgjACIADA7IgfABg");
	this.shape_4.setTransform(112.65,13.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgShLIAggCIAFCaIgfABg");
	this.shape_5.setTransform(106.6,13.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgshLIAugCQAUAAAIAJQAHAJABAXQABAVgDAIQgCAFgIAEIAAABIAFAHQAEAHAEAYIAGAhIAAABIgiABQgDgIgFgjQgBgKgCgDQgBgDgDAAIgFAAIACA8IggABgAgLgsIABAhIAJAAQAEAAABgEQACgEAAgLQgBgJgCgDQgCgDgEAAg");
	this.shape_6.setTransform(99.825,14.2987);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfBFQgEgIgCgLQgCgOgCgkQgBggACgOQABgLAEgIQAGgMAbgCQAQAAAJAEQAJAEAEAKQADAJAAAOIAAAIIgeABIAAgDIgBgLQgBgEgIAAQgHAAgBAEQgCAHABAkQACAlABAFQACAFAHgBQAHAAACgEQACgDAAgOIAAgIIgOABIgBgeIAqgCIACAeQABAkgGAOQgHANgbABIgCAAQgYAAgIgLg");
	this.shape_7.setTransform(90.4691,14.5485);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgshLIAtgCQAVAAAIAJQAHAIABAXQAAAWgDAIQgBAFgIAEIAAABIAFAGQAEAIAEAYIAGAhIAAABIgiABQgCgFgGgmQgBgLgCgDQgBgDgDABIgFAAIACA8IgfABgAgKgLIAJAAQAEgBABgDQACgEAAgLQgBgJgCgDQgCgDgEAAIgIAAg");
	this.shape_8.setTransform(77.35,15.0737);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTBOQgIgDgEgHQgEgHgCgLQgCgOgCgjQgBghACgOQABgLAEgIQADgHAIgDQAHgDAPgBQAaAAAIAMQAEAIACALQADAOABAiQABAhgBAOQgCALgDAIQgEAHgIADQgHADgPABIgGAAQgKAAgGgCgAgIgrQgCAGABAlQABAkADAGQABAEAGgBQAGAAACgDQABgIgBgiQgBgkgCgHQgCgEgGAAQgHAAAAAEg");
	this.shape_9.setTransform(67.93,15.3365);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgihLIBCgCIABAgIgiACIABAeIAigBIABAeIgiACIACA7IggABg");
	this.shape_10.setTransform(59.5,15.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgshLIAugCQAUAAAIAJQAHAIABAXQABAWgEAIQgCAFgHAEIAAABQADADACADQAEAIAEAYQAFAdABAEIAAABIgiABQgCgFgGgmQgCgLgBgDQgBgDgDABIgFAAIADA8IghABgAgKgLIAJAAQADAAACgEQACgEgBgLQAAgJgCgDQgCgDgEAAIgIAAg");
	this.shape_11.setTransform(47.05,16.1487);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSBOQgIgCgFgHQgEgIgCgLQgCgOgCgiQgBghACgOQABgMAEgIQAGgMAbgCQAaAAAIAMQAFAHABAMQADANABAjQABAigBANQgBAMgEAHQgEAHgIADQgHADgPABIgHAAQgJAAgFgCgAAAgvQgIAAAAAEQgCAFABAmQABAkADAGQABAEAGAAQAGgBACgDQABgIgBgiQgBgngCgEQgCgEgFAAIAAAAg");
	this.shape_12.setTransform(37.63,16.3883);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrhLIAtgCQAUAAAIAJQAJAJAAAWQABAQgDAHQgBAGgHAEIAAACQAIADACAEQAEAHABAVQABAXgIAKQgHAKgUAAIgwACgAgHAuIAJgBQAFAAACgDQACgDAAgJQgBgTgIAAIgKAAgAgKguIABAhIAJAAQAEgBACgDQACgEgBgKQAAgJgCgDQgCgDgEAAg");
	this.shape_13.setTransform(28.4559,16.7737);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfhMIA1gBIAVCYIghABIgEgjIgOAAIgCAkIggABgAgIAKIALAAIgGg2IgCAAg");
	this.shape_14.setTransform(19.45,17.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgihLIAggCIADB3IAhgBIABAiIhAADg");
	this.shape_15.setTransform(10.975,17.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0071B0").s().p("AsBhgIX7g1IAID2I36A1g");
	this.shape_16.setTransform(77,15.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,154,30.1), null);


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
	this.shape.graphics.f("#FF3640").s().p("AgZArIg+i8IAAgCIBBgCIAYBhIAEAAIAThjIA/gCIAAACIguC/IAEBwIhDACg");
	this.shape.setTransform(96.525,21.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3640").s().p("AhHiUICGgGIABBBIhGACIACA2IBFgDIACA9IhFACIACA6IBGgDIADBEIiGAEg");
	this.shape_1.setTransform(80.15,21.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3640").s().p("AhEiUICEgGIACBBIhEADIABA8IBEgDIACA+IhEACIAEB1Ig+ACg");
	this.shape_2.setTransform(64.45,22.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3640").s().p("AhEiVICEgFIACBBIhFACIADA9IBDgDIACA9IhEADIAEB1Ig+ADg");
	this.shape_3.setTransform(49.1,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3640").s().p("AgmCaQgPgFgJgOQgJgPgDgWQgFgcgChDQgChDACgbQACgWAIgQQAHgOAPgGQAPgGAegBQAcgBAPAFQAQAFAIANQAJAPADAWQAFAbACBEQADBCgDAcQgCAXgIAPQgHAOgPAHQgPAGgdAAIgKAAQgWAAgMgDgAgCheQgNAAgCAIQgEAMADBKQACBIAFALQACAHAMAAQAOgBACgHQADgNgChGQgDhLgEgLQgDgHgLAAIgBAAg");
	this.shape_4.setTransform(32.2931,23.3758);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3640").s().p("AglCZQgQgFgIgNQgJgOgEgZQgFgdgChDQgChBACgcQADgWAIgPQAHgNAPgHQAPgFAdgBQAwgCARAUQAPARACAzIAAAbIg7ADQgBgkgDgLQgCgHgPAAQgNAAgCAIQgDALACBJQACBIAFANQADAHAOgBQAMAAACgHQAEgMgBgjIA6gCIACAbQACA1gNATQgQAXgwACIgJAAQgXAAgNgEg");
	this.shape_5.setTransform(14.0955,24.0242);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AouizIRPgnIAOGOIxPAng");
	this.shape_6.setTransform(55.9,21.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,111.8,43.8), null);


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
	this.shape.graphics.f("#FF3640").s().p("AgqhfIBPgCIABApIgpACIABAiIApgCIABAmIgpABIABAlIApgBIACArIhOACg");
	this.shape.setTransform(51.75,12.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3640").s().p("AgqheIBOgDIABApIgoABIABAiIAogBIACAmIgpABIABAlIAqgBIABArIhPACg");
	this.shape_1.setTransform(42.35,12.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3640").s().p("AgzheIAlgCIAaBDIABAAIgChEIAiAAIAHDAIgUABIgthmIgBAAIADBoIghABg");
	this.shape_2.setTransform(31.95,13.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3640").s().p("AgqhfIBOgCIABApIgoABIABAiIAogBIACAmIgpABIABAlIAqgCIABArIhPADg");
	this.shape_3.setTransform(21.65,13.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3640").s().p("Ag0hfIA1gCQAYAAAKALQAIALABAdQABAcgDAJQgCAHgKAFIAAABQAFAFABADQAFALAEAdIAIApIAAABIgoACQgDgKgHgtQgBgMgCgFQgBgDgEAAIgFAAIACBMIglABgAgLgOIAKAAQAEgBACgEQACgGAAgNQgBgLgDgEQgCgEgEABIgKAAg");
	this.shape_4.setTransform(11.65,14.024);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ak2huIJlgWIAIDzIplAWg");
	this.shape_5.setTransform(31.125,13.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,62.3,26.5), null);


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
	this.shape.graphics.f("#FFAB00").s().p("AogC0Qg0AAgkglQglglAAgzIAAhtQAAgzAlglQAkglA0AAIRBAAQA0AAAkAlQAlAlAAAzIAABtQAAAzglAlQgkAlg0AAg");
	this.shape.setTransform(67,17.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,134,35.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgNAQQgGgGAAgKQAAgJAGgGQAGgFAIAAQAJAAAFAGQAFAGAAAIIAAADIgdAAQACALAIAAQAHAAACgGIAJAAQgCANgQAAQgIAAgGgFgAgIgDIASAAQAAgJgJAAQgIAAgBAJg");
	this.shape.setTransform(235.525,3.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJAVIAAgXQAAgKgJAAQgIAAAAAMIAAAVIgKAAIAAgoIAKAAIAAAHQAEgIAIAAQAPAAAAAQIAAAZg");
	this.shape_1.setTransform(230.975,3.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOASQgEgDAAgFQAAgKAPgCIALgBIAAgCQAAgHgHAAQgHAAAAAGIgKAAQABgOAQAAQARAAAAAQIAAAOIABAKIgKAAIAAgGQgEAHgJAAQgGAAgEgDgAAAADQgIABABAFQAAAFAFAAQAKAAAAgJIAAgDg");
	this.shape_2.setTransform(226.3,3.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAXIAAAGIgLAAIAAg6IALAAIAAAZQADgIAIAAQAJAAAEAGQAGAGgBAJQABAJgGAGQgEAGgJAAQgIAAgDgHgAgJAIIAAABQAAANAJAAQAKAAAAgNQAAgNgKAAQgJAAAAAMg");
	this.shape_3.setTransform(221.9,2.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAIIAJAAQACAGAGAAQAJAAgBgFQAAgDgGgBIgGgCQgMgCAAgIQABgGAEgEQAFgDAGAAQAQAAABAMIgJAAQgBgFgHAAQgGAAAAAFQAAAEAGAAIAHACQALABAAAKQAAAFgFAEQgEADgIAAQgRAAgBgNg");
	this.shape_4.setTransform(217.25,3.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAdIAAgoIAJAAIAAAogAgEgSIAAgJIAJAAIAAAJg");
	this.shape_5.setTransform(214.225,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAVIAAgoIAKAAIAAAJQACgKAKAAIADAAIAAAKIgEAAQgKAAAAAMIAAATg");
	this.shape_6.setTransform(211.875,3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAdIAAg4IAWAAQAUAAABAPQAAAEgDADQgDAEgDABQALACAAAKQAAAQgVABgAgLAVIAMAAQAMAAAAgJQAAgJgMAAIgMAAgAgLgDIALAAQALAAgBgJQABgHgLgBIgLAAg");
	this.shape_7.setTransform(207.55,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAJAdIAAgXQgBgJgHAAQgIAAAAAKIAAAWIgLAAIAAg5IALAAIAAAZQADgIAIAAQAHAAAEAEQAEAEAAAGIAAAag");
	this.shape_8.setTransform(201.1,2.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAOIAAgVIgFAAIAAgIIAFAAIAAgKIAKAAIAAAKIAKAAIAAAIIgKAAIAAATQgBAFAGAAIAFAAIAAAHIgIACQgMAAAAgMg");
	this.shape_9.setTransform(197.2,3.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSAGIAAgaIALAAIAAAXQAAAKAHAAQAIAAAAgMIAAgVIALAAIAAAoIgLAAIAAgHQgCAIgJAAQgPAAAAgPg");
	this.shape_10.setTransform(193.475,3.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAQQgGgGAAgKQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAKgGAGQgGAFgJAAQgIAAgGgFgAgJAAQAAAOAJAAQAKAAAAgOQAAgMgKAAQgJAAAAAMg");
	this.shape_11.setTransform(188.825,3.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWALIAJAAQACALANAAQAMAAAAgJQgBgGgJgCIgJgCQgPgCgBgMQAAgIAHgEQAFgFAJgBQAVAAABARIgJAAQgBgIgMgBQgLAAAAAJQAAAGAKABIAKADQAOACAAAMQAAAIgGAFQgGAEgJAAQgXAAgBgSg");
	this.shape_12.setTransform(183.9,3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAHQAHAAAAgHIAAAAIgFAAIAAgMIALAAIAAAMQAAANgNAAg");
	this.shape_13.setTransform(178.825,5.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAbIAAgHIACAAQAGAAACgHIgPgoIAKAAIAKAeIALgeIAKAAIgQApQgFAOgLAAg");
	this.shape_14.setTransform(176.025,4.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGAOIAAgVIgGAAIAAgIIAGAAIAAgKIAJAAIAAAKIAKAAIAAAIIgKAAIAAATQgBAFAGAAIAFAAIAAAHIgIACQgLAAAAgMg");
	this.shape_15.setTransform(172.2,3.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMAVIAAgoIAKAAIAAAJQACgKAKAAIADAAIAAAKIgEAAQgLAAAAAMIAAATg");
	this.shape_16.setTransform(169.325,3.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSAKQAAgKAPgCIALgBIAAgCQAAgHgIAAQgGAAAAAGIgKAAQABgOAPAAQASAAAAAQIAAAOIABAKIgKAAIgBgGQgDAHgJAAQgOAAAAgLgAAAADQgIABAAAFQAAAFAGAAQAKAAAAgJIAAgDg");
	this.shape_17.setTransform(165.275,3.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAdIAAg4IAWAAQAWgBAAATQAAARgWAAIgMAAIAAAVgAgLAAIALAAQAMAAAAgJQAAgKgMAAIgLAAg");
	this.shape_18.setTransform(160.85,3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMAVIAAgoIAKAAIAAAJQACgKAKAAIADAAIAAAKIgEAAQgLAAAAAMIAAATg");
	this.shape_19.setTransform(155.475,3.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOAQQgGgGAAgKQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAKgGAGQgGAFgJAAQgIAAgGgFgAgJAAQAAAOAJAAQAKAAAAgOQAAgMgKAAQgJAAAAAMg");
	this.shape_20.setTransform(151.375,3.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJAXIAAAGIgLAAIAAg6IALAAIAAAZQADgIAJAAQAIAAAEAGQAGAGgBAJQABAJgGAGQgEAGgIAAQgJAAgDgHgAgJAIIAAABQAAANAJAAQAKAAAAgNQAAgNgKAAQgJAAAAAMg");
	this.shape_21.setTransform(146.75,2.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAKQAAgKAPgCIALgBIAAgCQAAgHgIAAQgGAAAAAGIgKAAQABgOAQAAQARAAAAAQIABAYIgKAAIgBgGQgDAHgJAAQgOAAAAgLgAAAADQgIABAAAFQAAAFAHAAQAJAAAAgJIAAgDg");
	this.shape_22.setTransform(141.925,3.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTAdIAAg4IALAAIAAAwIAcAAIAAAIg");
	this.shape_23.setTransform(137.5,3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAJAVIAAgXQgBgKgHAAQgIAAAAAMIAAAVIgLAAIAAgoIAKAAIAAAHQADgIAJAAQAPAAAAAQIAAAZg");
	this.shape_24.setTransform(131.35,3.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAKQAAgKAPgCIALgBIAAgCQAAgHgIAAQgFAAgBAGIgKAAQACgOAPAAQARAAAAAQIABAYIgKAAIAAgGQgDAHgKAAQgOAAAAgLgAAAADQgHABAAAFQAAAFAGAAQAJAAAAgJIAAgDg");
	this.shape_25.setTransform(126.675,3.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAdIAAgoIAJAAIAAAogAgEgSIAAgJIAJAAIAAAJg");
	this.shape_26.setTransform(123.575,3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgEAdIAAg5IAJAAIAAA5g");
	this.shape_27.setTransform(121.55,2.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSAKQAAgKAPgCIALgBIAAgCQAAgHgIAAQgFAAgBAGIgKAAQABgOAQAAQARAAAAAQIABAYIgKAAIgBgGQgDAHgJAAQgOAAAAgLgAAAADQgIABAAAFQAAAFAHAAQAJAAAAgJIAAgDg");
	this.shape_28.setTransform(118.275,3.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMAVIAAgoIAKAAIAAAJQACgKAKAAIADAAIAAAKIgEAAQgLAAAAAMIAAATg");
	this.shape_29.setTransform(114.825,3.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGAOIAAgVIgGAAIAAgIIAGAAIAAgKIAJAAIAAAKIAJAAIAAAIIgJAAIAAATQAAAFAFAAIAFAAIAAAHIgIACQgLAAAAgMg");
	this.shape_30.setTransform(111.525,3.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgRAIIAKAAQABAGAHAAQAIAAAAgFQgBgDgFgBIgHgCQgLgCAAgIQAAgGAEgEQAFgDAGAAQAQAAACAMIgKAAQgBgFgHAAQgGAAAAAFQAAAEAGAAIAHACQALABAAAKQAAAFgFAEQgEADgIAAQgRAAgBgNg");
	this.shape_31.setTransform(108.05,3.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgSAGIAAgaIALAAIAAAXQAAAKAHAAQAIAAAAgMIAAgVIALAAIAAAoIgKAAIAAgHQgEAIgIAAQgPAAAAgPg");
	this.shape_32.setTransform(103.675,3.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AASAdIgFgPIgZAAIgGAPIgKAAIAXg4IALAAIAXA4gAgJAGIASAAIgJgXIAAAAg");
	this.shape_33.setTransform(98.575,3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgGAHQAGAAAAgHIAAAAIgEAAIAAgMIALAAIAAAMQAAANgNAAg");
	this.shape_34.setTransform(93.175,5.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgRAIIAKAAQABAGAHAAQAHAAAAgFQAAgDgGgBIgGgCQgMgBAAgJQAAgGAFgEQAFgDAGAAQAQAAABAMIgJAAQAAgFgIAAQgGAAAAAFQAAAEAGAAIAHACQALABAAAKQAAAFgFAEQgFADgHAAQgRAAgBgNg");
	this.shape_35.setTransform(90.025,3.825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgMAVIAAgoIAKAAIAAAJQACgKAKAAIADAAIAAAKIgEAAQgLAAAAAMIAAATg");
	this.shape_36.setTransform(86.625,3.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgFAIAAQAJAAAFAGQAEAGAAAIIAAADIgbAAQAAALAJAAQAHAAACgGIAJAAQgCANgQAAQgIAAgGgFgAgIgDIASAAQAAgJgJAAQgHAAgCAJg");
	this.shape_37.setTransform(82.6,3.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgPAYQgEgGAAgJQAAgJAEgGQAGgGAIAAQAIAAADAIIAAgZIAKAAIAAA6IgKAAIAAgGQgDAHgIAAQgIAAgGgGgAgJAJQAAANAJAAQAKAAAAgNIAAgBQAAgMgKAAQgJAAAAANg");
	this.shape_38.setTransform(77.85,2.975);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAJAVIAAgXQAAgKgIAAQgJAAAAAMIAAAVIgKAAIAAgoIAKAAIAAAHQAEgIAIAAQAPAAAAAQIAAAZg");
	this.shape_39.setTransform(73.175,3.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgSAKQAAgKAPgCIALgBIAAgCQAAgHgIAAQgFAAgBAGIgKAAQABgOAQAAQARAAAAAQIABAYIgKAAIgBgGQgDAHgJAAQgOAAAAgLgAAAADQgIABAAAFQAAAFAHAAQAJAAAAgJIAAgDg");
	this.shape_40.setTransform(68.525,3.825);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgEAdIAAg5IAJAAIAAA5g");
	this.shape_41.setTransform(65.4,2.925);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgTAdIAAg4IAmAAIAAAIIgbAAIAAARIAYAAIAAAIIgYAAIAAAXg");
	this.shape_42.setTransform(62.2,3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AANAdIgTgZIgIAIIAAARIgLAAIAAg4IALAAIAAAcIAZgcIAMAAIgXAYIAaAgg");
	this.shape_43.setTransform(55.875,3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgQAbIAAgHIADAAQAGAAACgHIgPgoIAKAAIAKAeIALgeIAKAAIgPApQgGAOgKAAg");
	this.shape_44.setTransform(49.3,4.575);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgKAXIAAAGIgKAAIAAg6IAKAAIAAAZQAEgIAJAAQAHAAAFAGQAGAGAAAJQAAAJgGAGQgFAGgHAAQgJAAgEgHgAgKAIIAAABQAAANAKAAQAKAAAAgNQAAgNgKAAQgKAAAAAMg");
	this.shape_45.setTransform(44.95,2.975);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgOAYQgGgGAAgJQAAgJAGgGQAFgGAHAAQAJAAAEAIIAAgZIAKAAIAAA6IgKAAIAAgGQgEAHgJAAQgHAAgFgGgAgJAJQAAANAKAAQAJAAABgNIAAgBQgBgMgJAAQgKAAAAANg");
	this.shape_46.setTransform(38.55,2.975);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgFAIAAQAJAAAFAGQAEAGAAAIIAAADIgbAAQABALAIAAQAHAAACgGIAJAAQgCANgQAAQgIAAgGgFgAgIgDIASAAQAAgJgJAAQgIAAgBAJg");
	this.shape_47.setTransform(34,3.825);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgRAIIAKAAQAAAGAIAAQAHAAABgFQAAgDgHgBIgGgCQgLgBAAgJQAAgGAEgEQAEgDAHAAQAQAAABAMIgJAAQgBgFgHAAQgGAAAAAFQAAADAGABIAHACQALABAAAKQAAAFgFAEQgFADgHAAQgSAAAAgNg");
	this.shape_48.setTransform(29.75,3.825);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgEAdIAAgoIAJAAIAAAogAgEgSIAAgJIAJAAIAAAJg");
	this.shape_49.setTransform(26.725,3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgMAVIAAgoIAKAAIAAAJQACgKAKAAIADAAIAAAKIgEAAQgLAAAAAMIAAATg");
	this.shape_50.setTransform(24.375,3.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgOAQQgFgGgBgKQABgIAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAIQAAAKgFAGQgGAFgJAAQgIAAgGgFgAgJAAQgBAOAKAAQAKAAAAgOQAAgMgKAAQgKAAABAMg");
	this.shape_51.setTransform(20.3,3.825);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAJAdIAAgXQAAgJgJAAQgIAAAAAKIAAAWIgKAAIAAg5IAKAAIAAAZQAEgIAIAAQAPAAAAAOIAAAag");
	this.shape_52.setTransform(15.625,2.925);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgGAOIAAgVIgGAAIAAgIIAGAAIAAgKIAJAAIAAAKIAJAAIAAAIIgJAAIAAATQAAAFAFAAIAFAAIAAAHIgIACQgLAAAAgMg");
	this.shape_53.setTransform(11.725,3.375);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgSAGIAAgaIAKAAIAAAXQAAAKAIAAQAIAAAAgMIAAgVIAKAAIAAAoIgKAAIAAgHQgDAIgIAAQgOAAgBgPg");
	this.shape_54.setTransform(8,3.875);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AASAdIgFgPIgZAAIgGAPIgKAAIAXg4IALAAIAXA4gAgJAGIASAAIgJgXIAAAAg");
	this.shape_55.setTransform(2.9,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,237.5,7.4), null);


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
	this.shape.graphics.f("#414141").s().p("AgSgOIAkgCIgjAhg");
	this.shape.setTransform(1.85,1.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,3.7,3.4), null);


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
	mask.graphics.p("AhjBfIAAi9IDGAAIAAC9g");
	mask.setTransform(9.95,9.475);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3670AB").ss(1,0,0,4).p("AhfAdICjgGQAKgBAIgHQAHgIgBgJIAAgBQAAgLgIgHQgHgHgLAAIiiAG");
	this.shape.setTransform(9.8675,9.5748);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhagVICcgFQAJgBAIAHQAHAHAAAKIAAABQABAJgHAHQgHAHgKABIibAFg");
	this.shape_1.setTransform(10.1017,9.4233);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,4.8,19.9,8.7), null);


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
	mask.graphics.p("AhjBfIAAi9IDGAAIAAC9g");
	mask.setTransform(9.95,9.475);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FDA803").ss(1,0,0,4).p("ABhAXIiiAFQgLABgHgHQgIgHAAgLIAAgBQgBgJAHgIQAHgHALgBICigG");
	this.shape.setTransform(9.7317,3.3018);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhSAVQgHgHgBgKIAAgBQAAgJAHgHQAGgHAKgBICcgFIACAwIicAFIgBAAQgJAAgHgGg");
	this.shape_1.setTransform(9.4733,3.2267);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,19.9,7.2), null);


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
	mask.graphics.p("AhjBfIAAi9IDGAAIAAC9g");
	mask.setTransform(9.95,9.475);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F0692E").ss(1,0,0,4).p("ABhAXIiiAFQgKABgIgHQgIgHAAgLIAAgBQgBgJAIgIQAHgHAKgBICjgG");
	this.shape.setTransform(10.1318,15.6018);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhSAVQgHgHAAgKIAAgBQgBgJAHgHQAHgHAKgBICbgFIACAwIicAFIgBAAQgJAAgHgGg");
	this.shape_1.setTransform(9.8983,15.5267);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,11.8,19.9,7.199999999999999), null);


(lib.Rectangle_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0.008,1],0,-19.8,0,19.8).s().p("A4/DGIAAmLMAx/AAAIAAGLg");
	this.shape.setTransform(160,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1, new cjs.Rectangle(0,0,320,39.6), null);


(lib.Rectangle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0.008,1],-68.9,0,68.9,0).s().p("AqwH0IAAvnIVhAAIAAPng");
	this.shape.setTransform(68.9,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle, new cjs.Rectangle(0,0,137.8,100), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgDAhQgEgCgCgDIgBAAIABAGIgNAAIgDhDIAOgBIABAaQACgEAEgDIAIgBIAIABQADABADAEIAFAHQACAEAAAHQABAGgCAGQgCAFgCADQgDADgEABIgHADQgFAAgEgCgAgEgFIgEAEIgCAEIAAAGIABAGIACAFIAEADIAEACQADAAACgCIAEgDIABgGIABgFIgBgHIgCgDIgEgEIgFgBIgEABg");
	this.shape.setTransform(16.0563,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAZIgIgFIgFgIQgDgGAAgFQAAgFACgFQABgFAEgDQAEgEADgCQAGgCAFAAQAFAAAEACQAFABAEAEQAEADACAFQABAGAAAEQABAFgCAFQgCAFgDADQgCADgFADQgFACgGAAIgCAAIgIgBgAgFgNIgEAEIgCAFIAAAFIABAFIACAFIAEAEIAEABQAEAAACgCIAEgDIACgFIAAgGIgBgFIgCgFIgEgDQgCgCgDAAQgDAAgCACg");
	this.shape_1.setTransform(21.5,6.8763);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAZIgFgCQgCgBgCgDQgBgDAAgEIABgHIAEgEIAFgCIAQgDIAEgCIABgEIgBgDIgCgCIgDgBIgCAAQgEAAgDACQgBABgBAFIgOABIADgIQABgDAEgDIAHgDIAIgBIAHABIAHABIAFAEQACAEAAADIACAgQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAIgOAAIgBgEQgCADgFABIgIACgAAGACIgDABIgFABIgGABIgBADIgBADIABADIACACIADABIADAAQADAAACgCQAAAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAIABgEIAAgIIgCACg");
	this.shape_2.setTransform(11.025,7.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYghIAPAAIACA2IAggBIAAAMIgvADg");
	this.shape_3.setTransform(5.825,6.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPgXIANAAIAAAJIACgEIADgEIAFgCIAFgBIADAAIAAANIgCAAIgDAAQgDAAgDABIgEAEIgBAFIAAAFIAAAWIgNABg");
	this.shape_4.setTransform(25.95,6.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E23841").s().p("AiagyIEwgLIAFBxIkwAKg");
	this.shape_5.setTransform(15.5,6.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCAgIgHgBIAGgFIgEgFIAGACIABgHIAEAHIAGgDIgDAGIAGAEIgHABIABAHIgGgFIgDAGgAAIAEIgEgDIAFAAIABgEIACAEIAFAAIgEADIACAEIgFgCIgDADgAgZAFIgEAEIAAgGIgHgCIAGgDIgEgGIAHADIACgHIADAGIAGgCIgDAGIAGACIgHACIABAHgAAVgFIgGAAIAFgFIgDgGIAGACIACgGIADAGIAHgCIgDAGIAFADIgGACIAAAFIgFgDIgFAEgAgEgWIgHgBIAFgEIgDgGIAHACIACgGIABAGIAHgDIgDAGIAFAEIgGACIABAGIgFgEIgEAEg");
	this.shape_6.setTransform(35.8,8.85);

	this.instance = new lib.Path();
	this.instance.setTransform(29.15,13.05,1,1,0,0,0,1.9,1.7);
	this.instance.alpha = 0.6992;
	this.instance.compositeOperation = "multiply";

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3571AC").s().p("AhFg0ICHgFIAEBuIiHAFg");
	this.shape_7.setTransform(33.95,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.6).p("AjMg+IExgLIABAjIBjgEIAEBuIiIAFIgBggIkLAJg");
	this.shape_8.setTransform(20.474,7.3503);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(-1,-1,43,16.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgVA8QgHgGgBgPQAAgNABgEIAWgBIAAAFQgBAHACADQACACAEAAQAFAAACgCQABgDAAgIQgBgIgGgEIgNgGQgIgEgEgDQgIgFgBgaQAAgSAGgHQAGgHASgBQARgBAGAGQAHAGABAQIgBANIgWABIAAgGQAAgFgCgDQgBgCgEAAQgEABgBACQgCACAAAGQAAAIAGADIAXALQAGAEACAFQADAHAAAPQACAWgHAJQgHAIgTABIgDAAQgNAAgGgFg");
	this.shape.setTransform(141.55,6.5052);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMgiIgTAAIgBgaIBAgDIABAbIgUABIAEBiIgZABg");
	this.shape_1.setTransform(134.375,6.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Agjg9IAkgBQARgBAHAIQAGAHABATQAAANgCAFQgBAFgFADIAAACQAGADACADQADAFABASQAAASgFAIQgGAIgRAAIgmACgAgGAKIABAcIAHgBQAHAAAAgMQgBgQgGAAgAgHgKIAHAAQAGAAAAgPQgBgHgBgDQgCgCgDAAIgHAAg");
	this.shape_2.setTransform(127.3271,7.0485);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Agdg9IA3gCIABAbIgdABIABAWIAcgBIABAYIgcABIAAAYIAdgBIABAcIg2ACg");
	this.shape_3.setTransform(120.3,7.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Agjg9IAjgBQAVgBAGAKQAEAGACAJQABAKABAcQABAagBALQAAAJgEAGQgFAKgWABIgiABgAgIgjIADBGIAHAAQAGAAAAgDQACgFgBgbQgBgdgCgEQgBgDgFAAg");
	this.shape_4.setTransform(113.175,7.5488);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVA8QgIgGAAgPIAAgSIAWAAIAAAFQAAAHACACQACADADAAQAFAAACgDQABgCAAgIQAAgHgHgFIgMgGQgJgDgEgEQgFgDgBgIIgCgVQAAgRAFgHQAHgHASgBQAQgBAHAGQAHAGAAAQQABAIgCAFIgVABIAAgFQAAgHgCgBQgBgDgEABQgFAAgBACQgCACABAGQAAAIAGADQAJAGAOAFQAGAEACAFQADAHAAAPQABAWgHAIQgGAKgTAAIgCAAQgOAAgGgFg");
	this.shape_5.setTransform(102.4542,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZA4QgGgKgCguQgBgaABgMQABgJADgGQAFgKAXgBQATAAAHAHQAGAIABAVIAAALIgYABQgBgQgBgDQgBgDgFgBQgFABgCADQgBAEABAfQABAbACAHQABADAFAAQAGAAAAgDQACgFgBgPIAYgBIABAMQABAVgFAJQgHAKgUAAIgCAAQgUAAgGgJg");
	this.shape_6.setTransform(95.2827,8.1497);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Agdg9IA3gCIABAbIgdABIABAWIAcgBIABAYIgcABIAAAYIAdgBIABAcIg3ACg");
	this.shape_7.setTransform(88.375,8.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Agkg9IAagBIADAxIAOAAIgBgyIAaAAIAFB8IgaABIgCgzIgQABIACAzIgaABg");
	this.shape_8.setTransform(81.15,8.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Agcg9IA2gCIABAbIgcABIABAZIAcgBIABAZIgdABIACAwIgZABg");
	this.shape_9.setTransform(70.7,8.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Agbg9IA1gCIABAbIgbABIAAAZIAbgBIABAYIgcABIACAxIgZABg");
	this.shape_10.setTransform(64.45,9.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPA/QgGgCgEgGQgDgGgCgJQgCgLgBgcQgBgbABgLQABgJADgHQAGgLAWAAQAUgBAHAKQAEAGABAJQACALABAcQABAbgBAMQgBAJgDAGQgGALgWABIgEAAQgJAAgEgCgAAAgmQgFAAgCADQgBAEABAfQABAeACAEQABADAFAAQAFAAABgEQABgFgBgcQgBgfgCgFQgBgCgEAAIAAAAg");
	this.shape_11.setTransform(57.5833,9.4538);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAPA8QgDgFgBgaQgBgZADgFQACgFAOAAQANgBADAFQAEAEAAAaQABAagDAFQgCAFgOABIgCAAQgMAAgCgFgAAdAJQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAIAAARIABARQAAABAAAAQAAABABAAQAAAAAAABQABAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBABAAIgBgRIgBgRQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAIgBAAgAgpBAIBCh/IARAAIAAABIhDB+IgQAAgAgsADQgDgEgBgaQgBgaADgFQADgFANgBQAOAAADAFQADAFABAaQABAagDAEQgDAFgNAAIgDAAQgLAAgDgEgAgggtIAAARIABARQAAAAAAABQABAAAAABQAAAAABAAQAAAAABAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBABAAIAAgRIgBgRQgBgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABg");
	this.shape_12.setTransform(45.4482,9.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaA5QgFgKgCguQgCguAGgJQAEgJAYgBQAXgBAFAJQAFAJACAuQABAugFAKQgEAJgYABIgEAAQgTAAgFgIgAgIghIABAhQAAAaACAGQABAFAFAAQAGgBABgFQABgFgBgaQgBgdgBgFQgCgFgEAAQgHABgBAFg");
	this.shape_13.setTransform(36.55,10.2036);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAkIAQgRQAQgSACgEQACgFAAgOQgBgJgBgEQgCgDgEAAQgFABgCADQgBAEABAMIAAAFIgZABIAAgNQgBgVAFgIQAHgJAUAAQAVgBAGAKQAHAKABAUQAAARgCAHQgEAJgLAMIgOAOIAAACIAggBIABAaIg/ADg");
	this.shape_14.setTransform(29.0923,10.3988);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("ABVgCIipAF");
	this.shape_15.setTransform(10.225,17.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("ABXgCIitAF");
	this.shape_16.setTransform(10.025,17);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("ABXgCIitAF");
	this.shape_17.setTransform(9.975,16.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("ABVgCIiqAF");
	this.shape_18.setTransform(10.15,15.35);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(10.05,10.75,1,1,0,0,0,10.2,9.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("ABWgCIiqAF");
	this.shape_19.setTransform(9.8,5.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("ABXgCIitAF");
	this.shape_20.setTransform(9.575,4.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("ABXgCIitAF");
	this.shape_21.setTransform(9.575,3.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("ABVgCIipAF");
	this.shape_22.setTransform(9.7,3.05);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(9.85,10.55,1,1,0,0,0,10,9.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("AhUADICqgF");
	this.shape_23.setTransform(9.55,11.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("AhWADICtgF");
	this.shape_24.setTransform(9.7,10.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("AhWADICtgF");
	this.shape_25.setTransform(9.675,10.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("AhUADICpgF");
	this.shape_26.setTransform(9.475,9.2);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.setTransform(9.65,10.55,1,1,0,0,0,9.8,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance_1},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-0.4,0,145.20000000000002,20.4), null);


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
	this.instance = new lib.Rectangle();
	this.instance.setTransform(251.1,50,1,1,0,0,0,68.9,50);
	this.instance.alpha = 0.3594;

	this.instance_1 = new lib.Rectangle_1();
	this.instance_1.setTransform(160,80.2,1,1,0,0,0,160,19.8);
	this.instance_1.alpha = 0.3594;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,320,100), null);


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
	this.instance = new lib.Symbol37();
	this.instance.setTransform(33.65,8.5,0.4881,0.4844,0,0,0,45,6.4);

	this.bg = new lib.Symbol4();
	this.bg.name = "bg";
	this.bg.setTransform(32.7,8.65,0.4881,0.4844,0,0,0,67,17.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkJBXQgaAAgRgSQgSgRAAgaIAAg0QAAgYASgTQARgRAaAAIITAAQAZAAASARQASATAAAYIAAA0QAAAagSARQgSASgZAAg");
	this.shape.setTransform(32.7,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.bg},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,65.4,17.4), null);


// stage content:
(lib.ALPFED0001_ReneeCoffey_V2_320x100 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,258];
	// timeline functions:
	this.frame_0 = function() {
		var frequency = 60;
		stage.enableMouseOver(frequency);
				
		var canvas = document.querySelector("#canvas");
		canvas.addEventListener("mouseover", over.bind(this));
		canvas.addEventListener("mouseout", out.bind(this));
				  
		function over() {
		
		    createjs.Tween.get(this.ctaBtn)
		        .to({ scaleX: 1.1, scaleY: 1.1 }, 500, createjs.Ease.getPowOut(4)); 
			createjs.Tween.get(this.ctaBtn.bg)
		        .to({ alpha:0 }, 500, createjs.Ease.getPowOut(4)); 
		
		}
				
		function out() {  
		
			createjs.Tween.get(this.ctaBtn)
		        .to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.getPowOut(4)); 
			createjs.Tween.get(this.ctaBtn.bg)
		        .to({ alpha:1 }, 500, createjs.Ease.getPowOut(4)); 
		}
	}
	this.frame_258 = function() {
		if (myCounter++>=1) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(258).call(this.frame_258).wait(1));

	// cta
	this.ctaBtn = new lib.Symbol5();
	this.ctaBtn.name = "ctaBtn";
	this.ctaBtn.setTransform(269.2,54.55,0.2508,0.2508,0,0,0,32.7,8.8);
	this.ctaBtn.alpha = 0;
	this.ctaBtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ctaBtn).wait(239).to({_off:false},0).to({regY:8.7,scaleX:1,scaleY:1,x:269.15,y:54.5,alpha:1},16,cjs.Ease.backOut).wait(4));

	// logo
	this.instance = new lib.Symbol35();
	this.instance.setTransform(205.3,67.95,0.4146,0.4146,0,0,0,20.5,7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(217).to({_off:false},0).to({regX:20.4,scaleX:1,scaleY:1,x:205.45,y:67.9,alpha:1},19,cjs.Ease.backOut).wait(23));

	// building
	this.instance_1 = new lib.Symbol34();
	this.instance_1.setTransform(174.15,54.45,0.4136,0.4136,0,0,0,31.6,19.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(204).to({_off:false},0).to({scaleX:1,scaleY:1,x:174.45,y:54.4,alpha:1},21,cjs.Ease.backOut).wait(34));

	// orange_arrow
	this.instance_2 = new lib.Symbol42();
	this.instance_2.setTransform(116.6,56.9,1,1,0,0,0,8.4,8.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(197).to({_off:false},0).to({x:131.85,y:54.4,alpha:1},11,cjs.Ease.backOut).wait(51));

	// vote1
	this.instance_3 = new lib.Symbol49();
	this.instance_3.setTransform(-20.2,16.45,1,1,0,0,0,18.1,7.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(178).to({_off:false},0).to({x:43.8},15,cjs.Ease.backOut).wait(66));

	// coffey
	this.instance_4 = new lib.Symbol25();
	this.instance_4.setTransform(-55.9,71.3,1,1,0,0,0,55.9,21.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({x:85.9,y:61.3,alpha:1},17,cjs.Ease.backOut).wait(46).to({regX:56.5,regY:22.5,scaleX:1.0335,scaleY:1.0328,x:70.3,y:61.65},9,cjs.Ease.quadOut).wait(91).to({regX:57.1,regY:23,scaleX:0.8062,scaleY:0.807,x:73.65,y:62.75},11,cjs.Ease.quadOut).wait(75));

	// renee
	this.instance_5 = new lib.Symbol24();
	this.instance_5.setTransform(-30.95,36.35,1,1,0,0,0,31.1,13.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({x:60.05,y:28.35,alpha:1},17,cjs.Ease.backOut).wait(52).to({regX:31.7,regY:13.8,scaleX:1.0335,scaleY:1.0328,x:43.7,y:27.6},9,cjs.Ease.quadOut).wait(91).to({regX:32.4,regY:14.5,scaleX:0.8062,scaleY:0.807,x:52.85,y:35.7},11,cjs.Ease.quadOut).wait(75));

	// more_free
	this.instance_6 = new lib.Symbol30();
	this.instance_6.setTransform(237.1,77.4,0.56,0.56,0,0,0,74.9,9.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(118).to({_off:false},0).to({regX:75,regY:10,scaleX:1,scaleY:1,x:237.15,y:77.45,alpha:1},22,cjs.Ease.elasticOut).wait(35).to({x:397.15,y:73.45,alpha:0},9,cjs.Ease.cubicOut).to({_off:true},1).wait(74));

	// __2M_new_momes
	this.instance_7 = new lib.Symbol29();
	this.instance_7.setTransform(223.6,51.35,0.4223,0.4223,0,0,0,64,10.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(100).to({_off:false},0).to({regY:10.5,scaleX:1,scaleY:1,x:223.55,y:51.4,alpha:1},22,cjs.Ease.elasticOut).wait(52).to({x:387.55,y:47.4,alpha:0},9,cjs.Ease.cubicOut).to({_off:true},1).wait(75));

	// _0_off_hecs
	this.instance_8 = new lib.Symbol28();
	this.instance_8.setTransform(223.45,25.95,0.4632,0.4632,0,0,0,72.1,10.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(82).to({_off:false},0).to({regX:72.2,scaleX:1,scaleY:1,x:223.5,alpha:1},22,cjs.Ease.elasticOut).wait(69).to({x:395.5,y:21.95,alpha:0},9,cjs.Ease.cubicOut).to({_off:true},1).wait(76));

	// labor
	this.instance_9 = new lib.Symbol26();
	this.instance_9.setTransform(222.4,114.45,1,1,0,0,0,77,15);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).to({x:223.4,y:63.45,alpha:1},12,cjs.Ease.circOut).wait(35).to({x:228.4,y:114.95,alpha:0},9,cjs.Ease.quartOut).to({_off:true},101).wait(78));

	// Text
	this.instance_10 = new lib.Symbol3();
	this.instance_10.setTransform(126.55,91.45,1,1,0,0,0,118.8,3.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(179).to({_off:false},0).to({alpha:1},11).wait(69));

	// shadow
	this.instance_11 = new lib.Symbol23();
	this.instance_11.setTransform(160,50,1,1,0,0,0,160,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(259));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3640").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape.setTransform(160,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(259));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(48.2,50,423.90000000000003,80);
// library properties:
lib.properties = {
	id: 'B915F0BB2CAF214394D0C3C0B5CA43BE',
	width: 320,
	height: 100,
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