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
	this.shape.graphics.f("#FFAB00").s().p("AkJBXQgaAAgRgSQgSgRAAgaIAAg0QAAgYASgTQARgRAaAAIITAAQAZAAASARQASATAAAYIAAA0QAAAagSARQgSASgZAAg");
	this.shape.setTransform(32.7,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,65.4,17.4), null);


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
	this.shape.graphics.f("#FF3640").s().p("AgQAVIAKAAIgBggIgKAAIgBgNIAHgBQAEAAABgBIABgGIAAgFIAMAAIABA5IAKAAIAAARIghABg");
	this.shape.setTransform(22.3,5.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3640").s().p("AgQgkIAegCIABAQIgQABIABAOIAPgBIABAOIgQABIAAAOIAQAAIABAQIgeACg");
	this.shape_1.setTransform(16.525,6.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3640").s().p("AgGgUIgLAAIAAgQIAjgBIABAQIgLAAIACA7IgOAAg");
	this.shape_2.setTransform(12.65,6.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3640").s().p("AgNAhQgEgGgBgaQgBgZADgHQADgHANAAQALAAADAGQAEAGABAaQABAZgDAHQgDAHgMAAQgMAAgDgGgAgDgVIAAAVQAAARABADQAAABAAAAQABABAAAAQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAgBQAAAAAAgBQABgEAAgQIgCgVQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAg");
	this.shape_3.setTransform(8.7911,6.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3640").s().p("AgTgkIAQAAIAEA0IABAAIACg1IAQAAIgGBKIgWABg");
	this.shape_4.setTransform(4.55,6.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiGgvIEJgJIAEBoIkJAKg");
	this.shape_5.setTransform(13.475,5.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,27,11.5), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDA803").s().p("Ag9g5IBEgCIA3A5Ig0A8IhEACg");
	this.shape.setTransform(6.175,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,12.4,12), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgSgnIAjgBIAAARIgSABIABAOIARgBIABAQIgSAAIAAAQIATgBIAAASIgjABg");
	this.shape.setTransform(26.375,24.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXgnIAYgBQALgBAEAFQAEAFAAAMQABAMgCAEQgBADgEABIAAABIADADQABADACAOIAEARIAAABIgSAAQgBgDgEgUQgBgIgBAAIgDAAIABAgIgRAAgAgEgFIAEgBQADAAAAgJQAAgIgEAAIgFAAg");
	this.shape_1.setTransform(21.8,24.2727);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAkQgFgFAAgPIgCg3IARgBIACA3IACAIQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAABAAIAEAAIAAgIIgCg3IARgBIACA3QAAAPgDAGQgDAHgPAAQgOAAgDgGg");
	this.shape_2.setTransform(16.6531,24.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIgWIgMAAIAAgRIApgBIAAARIgNAAIADBAIgQAAg");
	this.shape_3.setTransform(11.8,24.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAlQgEgGAAgPIgCg3IARgBIACA4IABAHQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAQABAAAAgBQABAAAAAAQAAAAABgBQAAgBAAgGIgCg3IARgBIACA4QAAAPgEAFQgDAHgOAAIgCAAQgMAAgEgFg");
	this.shape_4.setTransform(7.05,24.7771);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRgnIAigBIABARIgSABIAAAQIASgBIABAQIgSAAIABAgIgQABg");
	this.shape_5.setTransform(2.5,24.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAnQgFgEgBgKIABgLIAOgBIAAADIABAHQABAAAAABQAAAAABAAQAAABABAAQAAAAAAAAQABAAABAAQABgBAAAAQABAAAAAAQAAgBAAAAQABgCAAgFQAAgFgEgDQgLgEgFgEQgEgDgBgRQgBgMAEgEQAEgFAMAAQAKgBAFAFQAEADAAAKQABAFgBAEIgOAAIAAgDQAAgHgEAAQgFAAAAAHQAAAFAEADIAOAGQAEADACADQACAEAAAKQABAOgFAGQgEAFgMABIgCAAQgIAAgEgDg");
	this.shape_6.setTransform(44.6063,13.6003);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAQIAFgPIAAgBIgGAAIgBgPIAQAAIABAPIgIAQIgHAAg");
	this.shape_7.setTransform(41.025,10.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQgoIAbAAIAMBQIgSAAIgCgTIgHABIgBATIgRAAgAgEAFIAGAAIgDgcIgBAAg");
	this.shape_8.setTransform(37.975,13.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJgoIAQAAIADBQIgQABg");
	this.shape_9.setTransform(34.15,13.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSgnIARgBIACA/IARgBIABASIgiABg");
	this.shape_10.setTransform(31.025,14.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQgnIAbgCIAMBQIgSACIgCgUIgHABIgBATIgRABgAgEAGIAGgBIgDgcIgBAAg");
	this.shape_11.setTransform(26.675,14.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXgnIAYgBQAKgBAFAFQADAFABAMQAAAMgBAEQgBADgEABIAAABIACADQACADACAOIAEARIAAABIgSAAQgCgDgDgUQgBgIgCAAIgCAAIABAgIgRAAgAgFgFIAFAAQADgBAAgJQAAgIgEAAIgEAAg");
	this.shape_12.setTransform(21.625,14.4227);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHgWIgNABIAAgSIApgBIABARIgNABIACA/IgQAAg");
	this.shape_13.setTransform(16.6,14.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSAaQgBgIABgEIAOAAIAAADQAAAIAEAAQABAAABAAQABAAAAgBQABAAAAAAQAAAAABgBQABgCgBgFQAAgFgEgCQgLgFgFgEQgEgDgBgRQgBgMAEgEQAEgFAMAAQAKgBAFAEQAEAEABAKIgBAJIgOAAIAAgDQAAgHgEAAQgFABAAAGQAAAFAEADIAPAHQAHADAAAQQABAPgFAFQgEAGgMAAIgBAAQgSAAAAgQg");
	this.shape_14.setTransform(12.1247,14.7229);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAlQgFgHAAgOIgCg3IARgBIACA4IACAHQAAAAAAAAQAAAAABAAQAAABAAAAQABAAABAAIAEgCIAAgHIgCg3IARgBIACA4QAAAOgDAGQgDAGgPABIgCAAQgLAAgEgFg");
	this.shape_15.setTransform(7.3281,14.9271);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgQgnIAcgBIALBQIgSAAIgCgSIgHAAIgBATIgRAAgAgEAFIAGAAIgDgcIgBAAg");
	this.shape_16.setTransform(2.625,15.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQAkQgEgGgBgeQgBgbAEgHQAEgHAOAAQAPgBAEAKQACAEAAAIIAAAEIgQABIAAgCIgBgGQAAgCgEAAQgEABAAACQgBAEABASQAAAUABACQABACADAAQAEAAABgCQABgCAAgHIAAgEIgHAAIAAgPIAWgBIAAAPQABAUgDAHQgEAHgOAAQgOAAgEgGg");
	this.shape_17.setTransform(31.2425,4.2238);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXgnIARgBIALAcIABAAIgBgcIAQgBIACBRIgJAAIgTgqIgBAAIACArIgQAAg");
	this.shape_18.setTransform(26.25,4.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJgnIAQgBIADBQIgQABg");
	this.shape_19.setTransform(22.475,4.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWgnIAWgBQAOAAAEAGQAEAIABAaQABAcgEAFQgDAHgOAAIgWABgAgDAXIAEAAQAEgBABgCIAAgUIgCgVQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgFAAg");
	this.shape_20.setTransform(18.6781,4.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSgoIARAAIABA+IASgBIABASIgiACg");
	this.shape_21.setTransform(14.275,4.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJgnIAQgBIADBQIgQABg");
	this.shape_22.setTransform(10.975,4.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPAlQgFgGAAgPIgCg3IARgBIADA4QAAAFABACIACABQABAAABAAQABAAAAgBQABAAAAAAQAAAAABgBQABgBgBgGIgCg3IARgBIACA4QAAAPgDAFQgFAHgNAAIgCAAQgLAAgEgFg");
	this.shape_23.setTransform(7.2,5.0771);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgWgnIAXgBQAKgBAFAFQAEAFAAAMQABAJgBADQgBADgEACIAAABQAFACABACQABADABAMQAAAMgDAFQgEAFgLAAIgZABgAgDAYIAEAAQAFAAAAgIQgBgKgEAAIgFAAgAgFgYIABARIAEAAQAEAAAAgJQgBgIgDAAg");
	this.shape_24.setTransform(2.3031,5.2727);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,46.7,29.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgUA5QgHgGgBgOQAAgNABgEIAVAAIAAAEQAAAHABADQACACAEAAQAEAAACgCQABgDAAgHQAAgHgHgFIgLgGIgMgGQgHgFgBgZQgBgRAGgGQAGgHARgBQAPAAAHAFQAHAFAAAPQAAAKgBADIgUABIAAgFIgCgIQgBgCgEAAQgEAAgBACQgCACAAAGQABAIAFADIAWAKQAGAEACAFQACAGABAOQABAWgHAIQgGAIgSAAIgDABQgMAAgGgFg");
	this.shape.setTransform(74.2547,20.9054);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLghIgTABIgBgZIA+gDIABAaIgTAAIADBeIgYABg");
	this.shape_1.setTransform(67.425,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOg6IAYgBIAFB3IgZAAg");
	this.shape_2.setTransform(62.525,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUA5QgHgGgBgNQAAgNABgEIAVgBIAAAFQAAAHABACQACADADgBQAFAAACgCQABgCAAgIQAAgHgHgEIgMgGQgIgEgDgDQgHgFgBgYQgBgSAGgGQAGgHARgBQAPAAAHAFQAGAGABAPQAAAJgBAEIgUAAIAAgFIgCgHQgBgDgEABQgEAAgBACQgCACAAAGQABAHAFAEIAWAKQAFADADAFQACAHABAOQABAVgHAIQgGAIgSABIgBAAQgOAAgGgFg");
	this.shape_3.setTransform(57.4547,21.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOg6IAZgBIAEB3IgYAAg");
	this.shape_4.setTransform(52.425,21.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Aghg5IAbgBIAIBTIACAAIADhUIAbgBIgLB3IgmACg");
	this.shape_5.setTransform(46.875,21.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Agfg6IAjgBQAPgBAGAJQAGAJABAXQABAXgFAJQgGAKgPAAIgKABIABAkIgZAAgAgEAAIAFAAQAGAAAAgTQAAgPgHAAIgFAAg");
	this.shape_6.setTransform(36.8327,22.2237);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXA1QgEgGgBgJQgCgKgBgcQgBgZABgLQABgIADgGQAFgKAVAAQAXgCAGAPQACAIAAAKIAAAGIgXABIAAgCIgBgJQAAgDgGAAQgGAAgBADQgBADABAeQABAdABADQACAEAFAAQAFgBACgDQACgDgBgKIAAgGIgKABIgBgXIAggBIACAWQABAdgGAKQgFAKgVABIgCAAQgSAAgFgJg");
	this.shape_7.setTransform(29.8494,22.4445);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Agbg6IA0gCIAAAaIgbABIABAVIAbgBIABAXIgbABIAAAXIAbgCIABAbIg0ACg");
	this.shape_8.setTransform(82.3,6.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Agcg6IA1gBIAAAZIgbABIABAUIAagBIABAYIgbABIABAWIAbgBIABAaIg0ACg");
	this.shape_9.setTransform(76.2,6.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Agig6IAjgBQAQgBAGAHQAGAHABASQAAARgCAGQgCAEgGACIAAABQADACABADQAEAGACATIAFAZIAAABIgaABQgCgFgEgdQgBgIgCgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAgBAAIgDAAIABAuIgYABgAgIgiIABAaIAHgBQAFAAAAgOQgBgHgBgDQgCgCgDAAg");
	this.shape_10.setTransform(69.575,6.5733);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Agag6IAzgBIAAAZIgaABIABAXIAagBIABAXIgbABIACAuIgYABg");
	this.shape_11.setTransform(62.9,6.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Agbg6IAzgCIABAaIgbABIABAVIAbgBIAAAXIgaABIAAAXIAcgBIAAAaIgzACg");
	this.shape_12.setTransform(53.625,7.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Agig6IAjgBQAQgBAGAIQAGAHAAARQABARgCAGQgCAEgGADIAAABQADACABACQAEAHACASIAFAZIAAABIgaABIgHgiIgCgKQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgDAAIABAvIgZABgAgHgIIAHAAQAFAAAAgPQgBgHgBgCQgCgCgDAAIgGAAg");
	this.shape_13.setTransform(47.025,7.3484);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXA1QgEgGgBgIQgCgMgBgaQgBgoAFgLQAFgKAVAAQAUgBAGAJQADAGACAJQACALAAAaQABAagBALQAAAIgEAGQgEAKgWAAIgCABQgSAAgFgJgAAAgkQgFAAgBADQgBADAAAeQABAbACAFQABADAEAAQAFAAACgDQABgHgBgZQgBgdgCgEQgBgDgEAAIAAAAg");
	this.shape_14.setTransform(39.7417,7.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Agwg5IAjgBIANAzIAAAAIAKg0IAjgBIAEB2IgWABIgDhHIgBAAIgPBHIgKABIgVhGIgBAAIADBGIgXABg");
	this.shape_15.setTransform(30.975,7.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#258556").s().p("AgBACQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAIAEgBQAAABAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIgBAAIgBAAg");
	this.shape_16.setTransform(16.475,12.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#258556").s().p("AgCABQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAAAgBQABAAABABQAAAAAAAAQABAAAAAAQAAABAAAAg");
	this.shape_17.setTransform(18.975,11.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#258556").s().p("AgCABQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAg");
	this.shape_18.setTransform(11.55,12.0214);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#258556").s().p("AgBAEQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQADABgBADQgBABAAABQAAAAgBABQAAAAgBAAQAAAAAAAAIgBAAg");
	this.shape_19.setTransform(13.025,12.24);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FAA819").s().p("AgBAAIADgBIAAACIgDABg");
	this.shape_20.setTransform(14.3,11.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FAA819").s().p("AgCAHIACgNIADAAIgCANg");
	this.shape_21.setTransform(14.1,12.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FAA819").s().p("AgCgFIACgBIAAADIADgDIADAAIgBAEQgEgBgBADIgBAHIgDAAg");
	this.shape_22.setTransform(17.8,12.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FAA819").s().p("AgCAHQgEgBAAgFQAAgEADgCQADgCADABQAEABAAAEIgEAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgCAAQgCACAAACQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIAEAAQgCAFgEAAIgCAAg");
	this.shape_23.setTransform(15.125,12.19);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FAA819").s().p("AgDAHQgEgBABgEQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAIAEgBIABgCIgCgBQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABgBAAIgDAAQAAgEAEAAQAHgBAAAEIgCAJIgDAAIAAgBQgBABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgCAAgAgCACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIgEACg");
	this.shape_24.setTransform(16.5139,12.1534);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FAA819").s().p("AgGABQAAgGAGgBQAIgBgBAIIgJAAQAAABAAAAQAAAAAAABQAAAAAAABQABAAAAAAQABAAAAAAQAAABAAgBQABAAAAAAQAAAAABAAIAAgBIAEgBQgBAFgFAAIAAAAQgGAAAAgGgAgCAAIAFAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAAAAAQAAAAgBABQAAAAgBAAQAAABAAABg");
	this.shape_25.setTransform(18.98,12.0411);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FAA819").s().p("AgGABQABgGAFgBQADAAACACQADACgBADIgJAAQgBABABAAQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIABgBIADAAQgCAEgEAAIAAAAQgGAAAAgGgAAAgDQAAAAAAAAQgBAAAAABQAAAAgBAAQAAABAAABIAFAAQAAgBAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIgBAAg");
	this.shape_26.setTransform(11.5393,12.2968);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FAA819").s().p("AgGAIQgCgCABgFQABgCADgCQADgCACACIABABIABgHIAEAAIgDASIgEAAIAAgCIgBACIgCABQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBgAgCAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAQACABACgEQABgDgDgBIAAAAIgCABg");
	this.shape_27.setTransform(13.1083,12.0194);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FAA819").s().p("AgIgFIAEgBIgBACQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQACgDAEABQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIgCAIIgDABIABgJQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAABgBAAIgCAEIgBAGIgDAAIACgJQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQgCABAAADIgBAGIgEAAg");
	this.shape_28.setTransform(9.6531,12.3708);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#258556").s().p("Ag9gIQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAIAEgDIB5gEIgEAVQgCAJgCABQgCACgDAAIh4AEgAg0gBIgDANIAEgBIACgGQAAgEACgBQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIgBAJIADAAIABgGIADgFQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABIgBAKIADAAIABgKQABgBgBAAQAAAAAAgBQAAAAgBgBQgBAAgBAAQgDAAgCACQAAAAgBgBQAAAAAAAAQgBgBgBAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIABgCgAgagDQgFABAAAHQAAAGAGAAQAFAAABgFIgDAAIgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIAKgBQABgDgCgCQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgCAAgAgNgCQgDABgBADQgBAFACACQADADAEgDIABgBIAAABIAEAAIADgRIgDAAIgCAHIgBgCIgDAAIgDABgAAHgDQgDACAAAFQAAAEADABQAHACADgHIgEAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgEACgBIADAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAEAAQAAgCgEgBIgCgBIgEABgAgCAJIADAAIACgMIgDAAgAAbgBIgBABIgFABQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAgBABQAAAEADABQADABADgDIAAABIADAAIACgJQAAgEgHABQgFAAAAAEIAEAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAIACABgAAigEIgCAMIADAAIABgHQACgDAEABIABgEIgDAAIgDADIAAgCgAAvgFQgFABAAAGQAAAHAHgBQAEAAACgFIgEABIAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAKAAQABgHgGAAIgDAAgAAAgIIAAADIAEAAIAAgEg");
	this.shape_29.setTransform(14.1,11.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag9gIQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAIAEgDIB5gEIgEAVQgCAJgCABQgCACgDAAIh4AEg");
	this.shape_30.setTransform(14.1,11.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C7DDC6").s().p("AhqBGQgEgDAAgGIgEhxQAAgGAEgDQAEgEAFAAIDGgHQAFgBAEAEQAEADABAGIAEBxQAAAGgEADQgDAEgGAAIjHAHIgBAAQgEAAgEgDg");
	this.shape_31.setTransform(11.475,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,85.2,28.6), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUA5QgHgGgBgOIABgQIAVgBIgBAEQABAHABADQACACADAAQAFAAABgCQACgDAAgHQgBgIgGgEQgRgHgGgFQgHgFgBgZQgBgRAGgGQAGgHARgBQAPAAAHAFQAGAFABAPQAAAHgBAGIgUABIAAgFQgBgGgBgCQgCgCgDAAQgFAAgBACQgBACAAAGQAAAIAGADIAWALQAFADADAFQACAGABAOQABAWgHAIQgGAIgSABIgBAAQgOAAgGgFg");
	this.shape.setTransform(87.0046,19.2748);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Agcg6IA1gCIAAAaIgaABIAAAVIAagBIABAXIgaABIAAAWIAbgBIABAbIgzACg");
	this.shape_1.setTransform(80.65,19.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Agwg5IAjgBIANAzIAAAAIAKg0IAjgBIAEB2IgWABIgDhHIgBAAIgPBHIgKABIgVhGIgBAAIACBGIgWABg");
	this.shape_2.setTransform(72.375,19.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXA1QgEgGgCgJQgCgLAAgaQgBgZABgLQABgJADgGQAFgKAVgBQAUAAAFAJQAEAGACAJQABAKABAbQABAZgBALQgBAJgDAGQgFAKgVABIgCAAQgSAAgFgJgAgHghQgBADABAeQABAaACAGQABADAEAAQAGAAAAgDQABgHgBgZQgBgegBgEQgBgCgEAAQgFAAgCADg");
	this.shape_3.setTransform(63.65,20.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Agig5IAZgBIACAuIAOgBIgBguIAZgBIAEB2IgZABIgCgxIgOABIABAxIgZABg");
	this.shape_4.setTransform(56.325,20.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2g5IAZAAIAJBQIABAAIAIhRIAYgBIAOBQIACAAIAChQIAYgBIgGB2IgjABIgLhHIgCAAIgFBIIgjABg");
	this.shape_5.setTransform(43.475,20.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Agbg6IA0gCIABAaIgbABIAAAVIAbgBIABAXIgbABIAAAWIAcgBIAAAbIgzACg");
	this.shape_6.setTransform(34.9,21.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Aghg6IAYAAIARAoIABAAIgBgpIAWgBIAEB2IgNABIgdg+IgBAAIACA/IgWABg");
	this.shape_7.setTransform(28.125,21.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Agwg5IAjgBIANAzIAAAAIAKg0IAjgBIAEB2IgWABIgDhHIgBAAIgPBHIgKABIgVhGIgBAAIACBGIgWABg");
	this.shape_8.setTransform(46.425,6.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbAiIAPgQQAOgRADgEQACgFAAgNQgBgJgBgDQgCgDgEAAQgEAAgCADQgBAFAAALIABAEIgYABIgBgMQAAgUAFgHQAGgJATAAQAUgBAGAJQAHALAAASQABAQgDAHQgDAIgLAMIgNANIAAACIAegBIABAZIg7ACg");
	this.shape_9.setTransform(37.7479,6.3737);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMgKIAYgBIABAWIgYABg");
	this.shape_10.setTransform(32.775,11.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbAiIARgBIgCgzIgRABIgBgWIALAAQAGgBACgCQACgCAAgGIAAgJIAUAAIAEBbIAPAAIACAaIg7ACg");
	this.shape_11.setTransform(27.45,6.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#886BAE").ss(0.2,0,0,4).p("AABAcIgBg3");
	this.shape_12.setTransform(6.55,17.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#886BAE").ss(0.2,0,0,4).p("AgUABIApgB");
	this.shape_13.setTransform(6.675,17.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRgXIAhgBIABAwIggABg");
	this.shape_14.setTransform(6.5,17.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#886BAE").ss(0.2,0,0,4).p("AABAcIgBg3");
	this.shape_15.setTransform(13.7,16.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#886BAE").ss(0.2,0,0,4).p("AgUABIApgB");
	this.shape_16.setTransform(13.575,16.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRgXIAhgBIACAwIghABg");
	this.shape_17.setTransform(13.75,16.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F0692E").s().p("AhPglICagFIAcBOIjNAHg");
	this.shape_18.setTransform(10.275,8.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3670AB").s().p("AhfgFIC+gHIABASIi/AHg");
	this.shape_19.setTransform(10.525,21.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#886BAE").s().p("AhhgqIDAgIIADBeIi/AGg");
	this.shape_20.setTransform(10.35,17.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,90.1,27.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgQAAQAAgIAFgEQAFgGAHAAQAQABAAARIAAACIgYAAQABAKAHAAQAGAAACgFIAIAAQgDALgNAAQgRAAAAgSgAgHgCIAQAAQAAgJgIAAQgGAAgCAJg");
	this.shape.setTransform(207.65,3.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAHASIAAgUQABgIgIAAQgGAAgBAKIAAASIgJAAIAAgiIAJAAIAAAGQADgHAIAAQANAAgBANIAAAWg");
	this.shape_1.setTransform(203.65,3.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAIQAAgIAMgBIAKgBIAAgDQAAgGgHAAQgFAAAAAFIgJAAQABgMAOAAQAPABAAAOIAAAVIgIAAIgBgGQgCAHgJgBQgLABAAgLgAAAADQgHABAAAEQAAAFAGgBQAIABAAgJIAAgCg");
	this.shape_2.setTransform(199.525,3.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIAUIAAAGIgJAAIAAgzIAJAAIAAAVQADgGAHAAQAHAAAFAFQAEAFAAAIQAAAIgEAFQgFAFgHAAQgHAAgDgGgAgIAHIAAABQAAAMAIAAQAJgBAAgLQAAgLgJgBQgIAAAAALg");
	this.shape_3.setTransform(195.625,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAHIAJAAQAAAGAHgBQAGABAAgFQAAgDgFgBIgFgBQgLgCAAgHQAAgFAFgEQAEgDAFAAQAOAAABALIgIAAQAAgEgHAAQgFAAAAAEQAAADAFABIAGABQAKABAAAJQAAALgPgBQgOAAgCgLg");
	this.shape_4.setTransform(191.525,3.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAZIAAgiIAIAAIAAAigAgEgPIAAgJIAJAAIAAAJg");
	this.shape_5.setTransform(188.875,2.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKASIAAgiIAJAAIAAAIQABgJAIAAIADAAIAAAIIgDAAQgJAAAAALIAAAQg");
	this.shape_6.setTransform(186.775,3.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIATAAQASAAAAANQAAAEgCADQgDADgDABQAKACAAAIQAAAPgTAAgAgKASIALAAQAKAAAAgIQAAgHgKAAIgLAAgAgKgDIAKAAQAJAAAAgHQAAgIgJAAIgKAAg");
	this.shape_7.setTransform(182.95,2.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAHAaIAAgVQAAgIgGAAQgHAAAAAJIAAAUIgJAAIAAgzIAJAAIAAAWQACgHAIAAQAMAAAAANIAAAXg");
	this.shape_8.setTransform(177.3,2.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGAMIAAgSIgEAAIAAgHIAEAAIAAgJIAIAAIAAAJIAJAAIAAAHIgJAAIAAARQAAAEAFAAIAEgBIAAAIIgGAAQgLAAAAgKg");
	this.shape_9.setTransform(173.85,2.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPAEIAAgVIAJAAIAAAUQAAAJAGAAQAHAAAAgLIAAgSIAJAAIAAAjIgJAAIAAgGQgCAGgIAAQgMAAAAgOg");
	this.shape_10.setTransform(170.575,3.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgIAFgEQAFgGAHAAQAIAAAFAGQAFAEAAAIQAAAIgFAGQgFAEgIAAQgHAAgFgEgAgIAAQAAAMAIAAQAJAAAAgMQAAgLgJAAQgIAAAAALg");
	this.shape_11.setTransform(166.45,3.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAKIAJAAQABAJALAAQALAAAAgIQAAgFgJgBIgIgCQgNgCAAgLQAAgGAFgFQAFgEAIAAQASAAACAPIgJAAQgBgIgKAAQgJAAAAAIQAAAFAIABIAJACQANACAAALQAAAGgGAFQgFAEgJAAQgTAAgCgQg");
	this.shape_12.setTransform(162.125,2.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFAGQAFABAAgHIAAAAIgEAAIAAgKIAKAAIAAAKQAAALgLAAg");
	this.shape_13.setTransform(157.7,5.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNAYIAAgHIACAAQAFAAACgGIgOgiIAJAAIAJAZIAKgZIAJAAIgOAjQgEAMgKAAg");
	this.shape_14.setTransform(155.175,4.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGAMIAAgSIgEAAIAAgHIAEAAIAAgJIAIAAIAAAJIAJAAIAAAHIgJAAIAAARQAAAEAFAAIAEgBIAAAIIgGAAQgLAAAAgKg");
	this.shape_15.setTransform(151.8,2.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKASIAAgiIAJAAIAAAIQACgJAIAAIACAAIAAAIIgDAAQgJAAAAALIAAAQg");
	this.shape_16.setTransform(149.25,3.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQAIQAAgIANgBIAKgBIAAgDQAAgGgGAAQgGAAAAAFIgJAAQABgMAOAAQAPABAAAOIABAVIgJAAIAAgGQgDAHgJgBQgMABAAgLgAAAADQgHABAAAEQABAFAFgBQAIABAAgJIAAgCg");
	this.shape_17.setTransform(145.65,3.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIAUAAQATAAAAAPQAAAPgTAAIgLAAIAAATgAgKAAIAKAAQAKAAAAgJQAAgIgKAAIgKAAg");
	this.shape_18.setTransform(141.775,2.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKASIAAgiIAJAAIAAAIQABgJAIAAIADAAIAAAIIgDAAQgJAAAAALIAAAQg");
	this.shape_19.setTransform(137.075,3.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgIAFgEQAFgGAHAAQAIAAAFAGQAFAEAAAIQAAAIgFAGQgFAEgIAAQgHAAgFgEgAgIAAQAAAMAIAAQAJAAAAgMQAAgLgJAAQgIAAAAALg");
	this.shape_20.setTransform(133.45,3.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgIAUIAAAGIgJAAIAAgzIAJAAIAAAVQADgGAIAAQAGAAAFAFQAEAFAAAIQAAAIgEAFQgFAFgGAAQgIAAgDgGgAgIAHIAAABQAAAMAIAAQAJgBAAgLQAAgLgJgBQgIAAAAALg");
	this.shape_21.setTransform(129.35,2.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPAIQAAgIAMgBIAKgBIAAgDQAAgGgGAAQgGAAAAAFIgJAAQABgMAOAAQAPABAAAOIAAAVIgIAAIgBgGQgBAHgKgBQgLABAAgLgAAAADQgHABABAEQgBAFAGgBQAIABAAgJIAAgCg");
	this.shape_22.setTransform(125.1,3.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRAZIAAgxIAKAAIAAApIAZAAIAAAIg");
	this.shape_23.setTransform(121.225,2.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAIASIAAgUQgBgIgGAAQgIAAABAKIAAASIgJAAIAAgiIAIAAIAAAGQADgHAHAAQAOAAAAANIAAAWg");
	this.shape_24.setTransform(115.85,3.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgPAIQAAgIAMgBIAKgBIAAgDQAAgGgHAAQgEAAgBAFIgJAAQABgMAOAAQAPABAAAOIAAAVIgIAAIgBgGQgCAHgIgBQgMABAAgLgAAAADQgHABAAAEQAAAFAGgBQAIABAAgJIAAgCg");
	this.shape_25.setTransform(111.725,3.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAZIAAgiIAIAAIAAAigAgEgPIAAgJIAJAAIAAAJg");
	this.shape_26.setTransform(108.975,2.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDAaIAAgzIAIAAIAAAzg");
	this.shape_27.setTransform(107.15,2.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgPAIQgBgIANgBIAKgBIAAgDQAAgGgGAAQgGAAgBAFIgIAAQACgMANAAQAPABAAAOIABAVIgJAAIAAgGQgEAHgIgBQgMABABgLgAAAADQgGABgBAEQABAFAFgBQAIABAAgJIAAgCg");
	this.shape_28.setTransform(104.25,3.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgKASIAAgiIAJAAIAAAIQACgJAIAAIACAAIAAAIIgDAAQgJAAAAALIAAAQg");
	this.shape_29.setTransform(101.2,3.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgFAMIAAgSIgGAAIAAgHIAGAAIAAgJIAHAAIAAAJIAJAAIAAAHIgJAAIAAARQAAAEAFAAIAEgBIAAAIIgHAAQgKAAABgKg");
	this.shape_30.setTransform(98.3,2.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgPAHIAJAAQAAAGAHgBQAGABAAgFQAAgDgFgBIgFgBQgLgCAAgHQAAgFAFgEQAEgDAFAAQAOAAABALIgIAAQAAgEgHAAQgFAAAAAEQAAADAFABIAGABQAKABAAAJQAAALgPgBQgPAAgBgLg");
	this.shape_31.setTransform(95.225,3.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgPAEIAAgVIAJAAIAAAUQAAAJAGAAQAHAAAAgLIAAgSIAJAAIAAAjIgJAAIAAgGQgCAGgIAAQgMAAAAgOg");
	this.shape_32.setTransform(91.375,3.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAQAZIgFgMIgWAAIgEAMIgJAAIAUgxIAJAAIAUAxgAgIAGIAQAAIgIgVg");
	this.shape_33.setTransform(86.875,2.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgFAGQAFABABgHIAAAAIgFAAIAAgKIAKAAIAAAKQAAALgLAAg");
	this.shape_34.setTransform(82.1,5.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgPAHIAJAAQAAAGAHgBQAHABAAgFQAAgDgGgBIgFgBQgKgCAAgHQAAgMANAAQAOAAABALIgIAAQAAgEgHAAQgFAAAAAEQAAADAFABIAGABQAKABAAAJQAAALgPgBQgOAAgCgLg");
	this.shape_35.setTransform(79.325,3.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKASIAAgiIAJAAIAAAIQABgJAJAAIACAAIAAAIIgDAAQgJAAAAALIAAAQg");
	this.shape_36.setTransform(76.325,3.325);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgLAOQgFgFAAgJQAAgIAFgEQAFgGAGAAQAJABAEAFQAEAFAAAHIAAACIgZAAQABAKAIAAQAGAAABgFIAJAAQgCALgOAAQgHAAgFgEgAgHgCIAPAAQAAgJgIAAQgGAAgBAJg");
	this.shape_37.setTransform(72.8,3.35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgNAVQgEgGAAgHQAAgIAEgFQAEgFAHAAQAIAAADAGIAAgVIAJAAIAAAzIgJAAIAAgGQgCAGgJAAQgHAAgEgFgAgIAIQAAALAIABQAJAAAAgMIAAgBQAAgLgJAAQgIABAAALg");
	this.shape_38.setTransform(68.6,2.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAHASIAAgUQAAgIgGAAQgIAAABAKIAAASIgJAAIAAgiIAJAAIAAAGQACgHAHAAQANAAAAANIAAAWg");
	this.shape_39.setTransform(64.45,3.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgQAIQABgIANgBIAJgBIAAgDQAAgGgHAAQgFAAAAAFIgJAAQABgMANAAQAQABAAAOIABAVIgJAAIAAgGQgEAHgHgBQgMABgBgLgAAAADQgHABAAAEQAAAFAGgBQAIABAAgJIAAgCg");
	this.shape_40.setTransform(60.35,3.35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgEAaIAAgzIAIAAIAAAzg");
	this.shape_41.setTransform(57.6,2.575);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgQAZIAAgxIAhAAIAAAHIgYAAIAAAPIAWAAIAAAHIgWAAIAAAUg");
	this.shape_42.setTransform(54.775,2.65);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AALAZIgQgWIgHAHIAAAPIgJAAIAAgxIAJAAIAAAYIAWgYIAKAAIgUAWIAXAbg");
	this.shape_43.setTransform(49.2,2.65);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgNAYIAAgHIACAAQAFAAACgGIgOgiIAJAAIAJAZIAKgZIAJAAIgOAjQgFAMgJAAg");
	this.shape_44.setTransform(43.475,4.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgIAUIAAAGIgJAAIAAgzIAJAAIAAAVQADgGAHAAQAHAAAFAFQAEAFAAAIQAAAIgEAFQgFAFgHAAQgHAAgDgGgAgIAHIAAABQAAAMAIAAQAJgBAAgLQAAgLgJgBQgIAAAAALg");
	this.shape_45.setTransform(39.625,2.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgNAVQgEgFAAgIQAAgIAEgFQAEgFAIAAQAGAAAEAGIAAgVIAJAAIAAAzIgJAAIAAgGQgDAGgHAAQgIAAgEgFgAgIAIQAAALAIABQAJAAAAgMIAAgBQAAgLgJAAQgIABAAALg");
	this.shape_46.setTransform(34.05,2.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgQAAQAAgIAFgEQAFgGAHAAQAIABAEAFQAEAFAAAHIAAACIgYAAQABAKAHAAQAGAAACgFIAIAAQgDALgNAAQgRAAAAgSgAgHgCIAQAAQAAgJgIAAQgHAAgBAJg");
	this.shape_47.setTransform(30.025,3.35);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgPAHIAJAAQAAAGAHgBQAGABAAgFQAAgDgFgBIgGgBQgKgCAAgHQAAgMAOAAQAOAAABALIgIAAQgBgEgGAAQgFAAAAAEQAAADAFABIAGABQAKABAAAJQAAALgPgBQgPAAgBgLg");
	this.shape_48.setTransform(26.275,3.35);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgDAZIAAgiIAIAAIAAAigAgEgPIAAgJIAJAAIAAAJg");
	this.shape_49.setTransform(23.575,2.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgKASIAAgiIAIAAIAAAIQADgJAHAAIADAAIAAAIIgEAAQgJAAAAALIAAAQg");
	this.shape_50.setTransform(21.5,3.325);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgIAFgEQAFgGAHAAQAIAAAFAGQAFAEAAAIQAAAIgFAGQgFAEgIAAQgHAAgFgEgAgIAAQAAAMAIAAQAJAAAAgMQAAgLgJAAQgIAAAAALg");
	this.shape_51.setTransform(17.9,3.35);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAIAaIAAgVQAAgIgIAAQgGAAgBAJIAAAUIgJAAIAAgzIAJAAIAAAWQAEgHAHAAQANAAgBANIAAAXg");
	this.shape_52.setTransform(13.75,2.575);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgGAMIAAgSIgFAAIAAgHIAFAAIAAgJIAIAAIAAAJIAJAAIAAAHIgJAAIAAARQAAAEAEAAIAGgBIAAAIIgIAAQgKAAAAgKg");
	this.shape_53.setTransform(10.35,2.95);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgPAEIAAgVIAJAAIAAAUQAAAJAGAAQAHAAAAgLIAAgSIAJAAIAAAjIgIAAIAAgGQgDAGgIAAQgMAAAAgOg");
	this.shape_54.setTransform(7.025,3.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAQAZIgFgMIgVAAIgFAMIgJAAIAUgxIAJAAIAUAxgAgIAGIAQAAIgIgVIAAAAg");
	this.shape_55.setTransform(2.525,2.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,209.4,6.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgcgwIAVgBIABAnIAMAAIgCgoIAWAAIADBjIgVABIgBgpIgMAAIABApIgVABg");
	this.shape.setTransform(92.8,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJgbIgQAAIgBgVIA0gCIABAVIgQABIADBOIgUABg");
	this.shape_1.setTransform(86.675,8.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLgxIAUgBIADBkIgUAAg");
	this.shape_2.setTransform(82.525,8.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWgwIArgCIABAVIgWABIAAAUIAWgBIABAUIgXABIACAmIgUABg");
	this.shape_3.setTransform(78.525,8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWgwIArgCIABAWIgWAAIAAAUIAWgBIABAUIgXAAIACAoIgUAAg");
	this.shape_4.setTransform(73.525,8.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMgxIAVgBIAEBkIgVAAg");
	this.shape_5.setTransform(69.55,8.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcgxIAdgBQANAAAGAGQAEAFABAPQAAAPgCAFQgBADgFACIAAABIADAEQADAFADAQIADAVIAAABIgWAAQgBgEgEgYIgCgJQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgDAAIABAnIgVABgAgHgdIABAWIAGAAQAEAAAAgMQAAgKgFAAg");
	this.shape_6.setTransform(65.125,9.1231);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAtQgFgJgBgkQgBggAEgKQAEgIASgBQAUAAAEAMQACAIAAAGIAAAGIgTAAIAAgBIgBgIQAAgCgFAAQgFAAgBACQgBAGABAWQABAYABADQABADAFAAQAEAAABgDQACgCgBgJIAAgFIgIAAIgBgTIAbgBIABATQABAZgEAIQgEAJgSAAIgCAAQgQAAgEgHg");
	this.shape_7.setTransform(59.025,9.2756);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcgxIAdgBQANAAAGAGQAEAGABAOQAAAPgCAFQgBADgFACIAAABQACABABADQADAHACAOIAEAVIAAABIgWABQgCgEgDgZQgBgKgDAAIgDAAIABAnIgVABgAgGgHIAGAAQAEAAAAgMQgBgKgEAAIgGAAg");
	this.shape_8.setTransform(50.475,9.6231);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAtQgFgKgBgiQgBghAEgKQAEgJASAAQARgBAFAJQAFAJABAiQABAhgEAKQgEAJgSAAIgCAAQgPAAgFgHgAgFgcQgBAGABAWQAAAXACAEQAAACAEABQAEgBABgCQABgGgBgVQAAgZgCgDQgBgCgDgBQgEABgBACg");
	this.shape_9.setTransform(44.325,9.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWgxIArgBIABAVIgWABIAAAUIAWgBIABATIgXABIABAnIgTABg");
	this.shape_10.setTransform(38.825,10);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcgxIAdgBQANAAAFAGQAFAFABAPQAAAPgCAFQgBADgFACIAAABIADAEQADAFADAQIADAVIAAABIgWAAQgBgEgEgYQgBgKgDAAIgEAAIACAnIgVABgAgHgdIABAWIAGAAQAEAAAAgMQAAgKgFAAg");
	this.shape_11.setTransform(30.7,10.3231);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAtQgFgIgBgkQgBgjAEgIQAEgIASgBQAQAAAFAIQADAFACAHQABAIABAXQABAhgEAKQgFAJgRAAQgRAAgFgHgAgFgcQgBADAAAZQABAYACADQAAADAEAAQAEgBABgCQABgDgBgYIgCgcQgBgCgDAAQgEAAgBACg");
	this.shape_12.setTransform(24.5597,10.4985);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcgxIAdgBQANAAAGAGQAFAGAAAPQABAKgCAEQgBAEgEADIAAABQAFACACACQACAFAAAOQABAPgFAGQgFAGgNABIgeABgAgFAIIABAWIAFAAQABAAABgBQABAAAAAAQABAAAAgBQABAAAAAAQABgCAAgGQAAgNgGAAgAgGgdIAAAVIAGAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQABgCgBgHQAAgKgFAAg");
	this.shape_13.setTransform(18.5525,10.7232);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTgxIAigBIANBjIgWABIgCgXIgJAAIgBAYIgVAAgAgFAHIAIAAIgFgjIgBAAg");
	this.shape_14.setTransform(12.65,10.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWgxIAVgBIACBOIAVgBIABAWIgpACg");
	this.shape_15.setTransform(7.125,11.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0071B0").s().p("An0g+IPjgjIAGCgIvkAjg");
	this.shape_16.setTransform(50.125,9.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,100.3,19.6), null);


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
	this.shape.graphics.f("#FF3640").s().p("AgQAcIgph6IAAgCIArgBIAPA/IADAAIANhAIAogBIAAABIgdB8IACBJIgsABg");
	this.shape.setTransform(62.85,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3640").s().p("AguhhIBWgCIACApIguACIABAjIAtgCIABAnIgsACIABAlIAugCIABAtIhWACg");
	this.shape_1.setTransform(52.2,14.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3640").s().p("AgshhIBVgCIACApIgsACIABAnIAsgBIABAnIgtABIADBNIgoABg");
	this.shape_2.setTransform(41.975,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3640").s().p("AgshhIBWgCIABApIgsACIABAoIAsgCIABAnIgtABIADBNIgoABg");
	this.shape_3.setTransform(32,14.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3640").s().p("AgYBkQgKgDgGgJQgGgKgCgOQgDgSgBgsQgCgrACgSQABgPAFgKQAFgJAKgEQAKgDATgBQARgBALADQAKAEAFAIQAGAKACAOQADASACAsQABArgCASQgBAPgFAKQgFAJgKAEQgJAEgTAAIgHAAQgOAAgHgCgAgBg9QgJAAgBAGQgCAGABAxQACAvADAHQACAEAHAAQAJAAABgFQACgIgBguQgCgwgDgHQgCgFgGAAIgBAAg");
	this.shape_4.setTransform(21.0321,15.2325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3640").s().p("AgYBkQgKgDgFgJQgGgJgDgQQgDgTgBgsQgCgqACgSQABgOAGgKQAIgQAjgBQAfgBALANQAKALABAhIAAASIgnABQAAgYgDgGQAAgFgKAAQgIABgCAFQgCAHACAvQABAvADAIQACAFAJgBQAIAAABgEQACgIAAgXIAmgBIABARQABAigIANQgKAPggACIgFAAQgPAAgJgDg");
	this.shape_5.setTransform(9.1984,15.6496);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Alrh1ILOgZIAJEDIrOAZg");
	this.shape_6.setTransform(36.4,14.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,72.8,28.5), null);


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
	this.shape.graphics.f("#FF3640").s().p("Agbg9IAygCIABAaIgaABIABAXIAagBIABAZIgaAAIAAAYIAbgBIABAcIgzACg");
	this.shape.setTransform(33.75,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3640").s().p("Agbg9IAygCIABAbIgaABIABAWIAagBIABAZIgbABIABAXIAbgBIABAcIgyACg");
	this.shape_1.setTransform(27.6,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3640").s().p("Aghg9IAYgBIARArIABAAIgCgsIAWAAIAFB9IgNAAIgdhBIgBAAIADBCIgWABg");
	this.shape_2.setTransform(20.825,8.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3640").s().p("Agbg9IAzgCIABAbIgbABIABAWIAagBIABAYIgaABIAAAYIAbgBIABAcIgyACg");
	this.shape_3.setTransform(14.1,8.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3640").s().p("Aghg9IAigBQAPgBAGAIQAGAHABATQAAASgCAGQgCAEgFADIAAABIAEAFQACAHAEATIAEAbIAAABIgaABIgGgkQgBgNgEAAIgDAAIABAxIgYABgAgIgkIABAbIAHAAQAFAAgBgPQAAgHgCgDQgBgCgDAAg");
	this.shape_4.setTransform(7.625,9.1484);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjKhIIGPgNIAGCdImPAOg");
	this.shape_5.setTransform(20.275,8.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,40.6,17.3), null);


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
	this.shape.graphics.f("#FF3640").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,320,50), null);


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
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0.008,1],0,-9.9,0,9.9).s().p("A4/BjIAAjFMAx+AAAIAADFg");
	this.shape.setTransform(159.95,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1, new cjs.Rectangle(0,0,319.9,19.8), null);


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
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0.008,1],-68.9,0,68.9,0).s().p("AqwD6IAAnzIVhAAIAAHzg");
	this.shape.setTransform(68.9,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle, new cjs.Rectangle(0,0,137.8,50), null);


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
	this.shape.graphics.f("#414141").s().p("AgNgKIAbgBIgaAXg");
	this.shape.setTransform(1.35,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,2.7,2.4), null);


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
	mask.graphics.p("AhlBiIAAjDIDLAAIAADDg");
	mask.setTransform(10.225,9.75);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3670AB").ss(1,0,0,4).p("AhhAdICngFQALgBAHgHQAIgIgBgKIAAgBQgBgLgHgHQgIgIgLABIinAG");
	this.shape.setTransform(10.1426,9.8733);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhcgVICggGQAKAAAHAHQAIAHAAAKIAAABQABAJgHAIQgHAHgKAAIigAGg");
	this.shape_1.setTransform(10.3767,9.7483);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,6,20.5,7.800000000000001), null);


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
	mask.graphics.p("AhlBiIAAjDIDLAAIAADDg");
	mask.setTransform(10.225,9.75);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FDA803").ss(1,0,0,4).p("ABkAXIioAGQgKABgIgIQgIgHAAgLIAAgBQgBgKAIgIQAHgHAKgBICogG");
	this.shape.setTransform(10.0073,3.4517);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhUAVQgIgHAAgKIAAgBQgBgJAIgIQAHgHAKgBICggFIABAxIigAGIgBAAQgJAAgHgHg");
	this.shape_1.setTransform(9.7234,3.3517);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,20.5,7.4), null);


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
	mask.graphics.p("AhlBiIAAjDIDLAAIAADDg");
	mask.setTransform(10.225,9.75);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F0692E").ss(1,0,0,4).p("ABkAXIioAGQgKABgIgIQgIgHAAgLIAAgBQgBgKAIgIQAHgHAKgBICogG");
	this.shape.setTransform(10.4573,16.1017);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhUAVQgIgHAAgKIAAgBQgBgJAHgIQAHgHALgBICfgFIACAxIigAGIgBAAQgJAAgHgHg");
	this.shape_1.setTransform(10.1733,16.0017);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,12.2,20.5,7.300000000000001), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgCAYIgFgEIAAAEIgJAAIgCgvIAKgBIABASIAAAAQABgDAEgBQACgBADgBIAFABQADABACADIAEAFQABADAAAEQABAFgCAEQAAAEgDACIgEADIgGACgAgDgDIgCACIgCADIABAJIABADIADADIADABIADgCIADgCQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIABgFIgBgEIgCgDIgCgDIgEAAg");
	this.shape.setTransform(11.6063,4.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGASQgDgBgDgDIgEgGQgCgDAAgEIACgHIADgGQADgDADgBIAHgCIAHABIAGAEIAEAGIACAHIgCAHIgDAGIgGAEQgDACgEAAIgHgBgAgDgJIgDADIgBADIAAAIQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIACADIAEABIADgCIADgCIABgEIAAgEIAAgDIgCgEQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAIgEgBg");
	this.shape_1.setTransform(15.55,4.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJASIgDgCQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBIgCgEIABgGIADgDIAEgBIALgCIADgBIABgDIgBgCIgBgCIgCAAIgCAAIgEABQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAIgKABQABgEABgCIAEgEIAEgCIALgBQADAAACACIAEACQABADABADIAAARIABAFIAAADIgJAAIgBgDQgCACgEABQgCACgDAAgAAFABIgIACIgCABIgBABIgBADIABACIABABIAFABQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIADgCIAAgDIAAgGg");
	this.shape_2.setTransform(7.95,5.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRgXIAKgBIACAnIAXAAIAAAIIgiACg");
	this.shape_3.setTransform(4.225,4.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLgQIAKAAIAAAGIAAAAIABgDIACgCIAEgCIADgBIACABIABAJIgEAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIAAADIAAAQIgJABg");
	this.shape_4.setTransform(18.775,4.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E23841").s().p("AhvgkIDcgIIADBRIjcAIg");
	this.shape_5.setTransform(11.225,4.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgBAXIgFgBIAEgCIgDgFIAFACIABgFIACAEIAEgCIgCAFIAEACIgFABIABAGIgEgEIgDAEgAAIAEIgDACIABgDIgDgCIAEAAIABgDIABADIADAAIgCACIABADgAgRADIgEADIAAgEIgFgBIAEgCIgCgEIAFABIABgEIACAEIAFgCIgCAFIAEACIgFABIAAAEgAAPgDIgFgBIAEgCIgCgFIAFACIABgGIACAGIAFgDIgCAFIAEACIgFABIAAAFIgDgDIgEADgAAAgOIgDADIAAgEIgFgBIAEgDIgCgEIAFABIABgFIABAEIAFgBIgCAEIAEADIgFABIAAAFg");
	this.shape_6.setTransform(25.875,6.35);

	this.instance = new lib.Path();
	this.instance.setTransform(21.1,9.35,1,1,0,0,0,1.4,1.2);
	this.instance.alpha = 0.6992;
	this.instance.compositeOperation = "multiply";

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3571AC").s().p("AgxglIBhgEIACBQIhhADg");
	this.shape_7.setTransform(24.55,6.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.4).p("AiTgtIDcgHIABAYIBIgCIACBPIhiAEIgBgXIjAAGg");
	this.shape_8.setTransform(14.7971,5.3004);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-1,-1.2,31.6,12.799999999999999), null);


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
	this.instance = new lib.Symbol37();
	this.instance.setTransform(33.65,8.5,0.4881,0.4844,0,0,0,45,6.4);

	this.bg = new lib.Symbol17();
	this.bg.name = "bg";
	this.bg.setTransform(32.7,8.7,1,1,0,0,0,32.7,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg},{t:this.instance}]}).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkJBXQgaAAgRgSQgSgRAAgaIAAg0QAAgYASgTQARgRAaAAIITAAQAZAAASARQASATAAAYIAAA0QAAAagSARQgSASgZAAg");
	this.shape.setTransform(32.7,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,65.4,17.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgUA5QgHgGgBgNIABgRIAVgBIgBAEQABAIABACQACADADgBQAFAAACgCQABgCAAgIQgBgIgGgDIgMgGQgIgEgDgDQgHgFgBgZQgBgRAGgGQAGgHARgBQAPAAAHAFQAGAGABAPQAAAGgBAGIgUABIAAgFQgBgKgGAAQgFABgBACQgBACAAAFQAAAIAGADQAJAGANAFQAFADADAFQACAGABAPQABAVgHAIQgGAIgSABIgBAAQgOAAgGgFg");
	this.shape.setTransform(85.2046,19.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLghIgSABIgCgZIA+gCIAAAZIgSAAIADBeIgYAAg");
	this.shape_1.setTransform(78.35,20.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aghg6IAigBQAQgBAGAIQAGAHABARQABAMgCAFQgBAFgFADIAAACQAGACABADQADAGABAQQAAASgFAHQgGAIgPAAIglABgAgGAJIABAaIAHAAQAHAAgBgLQAAgPgGAAgAgHgKIAHAAQAGAAgBgOQAAgLgGAAIgHAAg");
	this.shape_2.setTransform(71.6521,20.4734);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Agcg6IA0gCIABAaIgbABIABAVIAagBIACAXIgbABIAAAWIAcgBIABAbIg0ACg");
	this.shape_3.setTransform(65,20.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Aghg6IAhgBQAUgBAGAJQAGALABAnQACAngFALQgGAJgVABIggABgAgHgiIACBDIAHAAQAFAAABgDQABgFgBgZQgBgcgBgEQgBgCgFAAg");
	this.shape_4.setTransform(58.2173,20.9737);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUA5QgHgGgBgOIABgQIAUgBIAAAEQABAIABACQACADADgBQAFAAABgCQACgDAAgHQgBgIgGgDIgMgGQgIgEgDgDQgFgDgCgHIgBgUQgBgRAGgGQAGgHARgBQAPAAAHAFQAGAGABAPQAAAHgBAFIgUABIgBgFQAAgKgGAAQgFABgBACQgBACAAAFQAAAIAGADQAJAGAMAFQAGADACAFQADAGABAPQABAVgHAIQgGAIgSABIgBAAQgOAAgGgFg");
	this.shape_5.setTransform(48.0546,21.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXA1QgGgKgCgrQgBgoAFgKQAFgKAVgBQASAAAHAHQAGAHAAAUIABALIgYABIgBgTQgBgDgFABQgFAAgBADQgBADAAAeQABAcACAEQABADAFAAQAFAAABgDQABgFAAgOIAXAAIABAKQAAAVgFAIQgGAJgTAAIgEABQgSAAgEgJg");
	this.shape_6.setTransform(41.2439,21.5082);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Agbg6IAzgCIABAZIgbABIABAVIAagBIABAXIgaABIAAAXIAbgBIABAaIgzADg");
	this.shape_7.setTransform(34.675,21.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Agig5IAZgBIACAuIAOgBIgBguIAZgBIAEB3IgZAAIgCgxIgPABIADAxIgaABg");
	this.shape_8.setTransform(27.8,21.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Agag6IAzgBIABAZIgaABIAAAXIAagBIABAYIgbABIACAuIgYAAg");
	this.shape_9.setTransform(66.575,6.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Agag6IAzgCIAAAaIgaABIABAXIAaAAIABAXIgbABIABAuIgXABg");
	this.shape_10.setTransform(60.65,6.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYA1QgGgKgBgqQgBgaABgKQABgJADgGQAFgKAVgBQAUAAAGAJQADAGABAJQACAKABAbQABAZgBALQgBAJgDAGQgFAJgVACIgCAAQgSAAgGgJgAAAgkQgFAAgBADQgCAFABAcQABAdACADQABADAEAAQAGAAAAgDQABgDAAgdQgBgegCgEQgBgCgEAAIAAAAg");
	this.shape_11.setTransform(54.1083,6.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAOA5QgDgFgBgYQgBgZADgDQACgGANAAQANAAADAEQADAEABAZQAAAYgCAFQgCAFgOABIgCAAQgLAAgCgFgAAZALIAAAQIABAQQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgQIgBgRQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABgAgnA9IA/h5IAPAAIAAABIg/B4IgPAAgAgqADQgCgEgBgZQgCgYADgFQACgFANgBQANAAADAFQADAFABAYQABAZgDADQgCAFgNABIgDAAQgLAAgCgEgAgfgrIAAARIABAQQABAAAAABQAAAAAAAAQABABAAAAQAAAAABAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAIAAgQIgBgRQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAg");
	this.shape_12.setTransform(42.6,6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYA2QgGgJgBgsQgCgrAFgJQAEgJAXgBQAWAAAFAIQAFAJABAsQACArgFAJQgEAJgXAAIgEABQgSAAgEgIgAAAgkQgGAAgBAFIAAAfQABAZACAGQABAEAEAAQAGAAABgFQABgFgBgZIgCggQgCgEgEAAIAAAAg");
	this.shape_13.setTransform(34.125,7.2041);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbAiIAPgQQAOgQADgFQACgFgBgNQAAgIgCgEQgBgDgEABQgFAAgBADQgBAEAAALIAAAFIgXAAIgBgMQAAgUAFgHQAGgIATgBQAUAAAGAJQAHALAAASQABAPgDAHQgDAIgLAMIgNANIAAACIAegBIABAZIg7ACg");
	this.shape_14.setTransform(27.0229,7.3987);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("ABYgCIivAF");
	this.shape_15.setTransform(10.525,21.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("ABZgCIixAF");
	this.shape_16.setTransform(10.3,21);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("ABagCIizAF");
	this.shape_17.setTransform(10.275,20.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("ABYgCIivAF");
	this.shape_18.setTransform(10.425,19.275);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(10.35,14.35,1,1,0,0,0,10.5,9.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("ABYgCIivAF");
	this.shape_19.setTransform(10.075,9.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("ABagCIizAF");
	this.shape_20.setTransform(9.875,8.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("ABagCIizAF");
	this.shape_21.setTransform(9.825,7.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("ABYgCIivAF");
	this.shape_22.setTransform(9.975,6.625);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(10.05,14.35,1,1,0,0,0,10.2,9.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("AhXADICvgF");
	this.shape_23.setTransform(9.825,15.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("AhZADICzgF");
	this.shape_24.setTransform(9.975,14.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("AhZADICygF");
	this.shape_25.setTransform(9.95,13.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#A4A6A9").ss(0.2,0,0,4).p("AhXADICvgF");
	this.shape_26.setTransform(9.725,12.975);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.setTransform(9.95,14.35,1,1,0,0,0,10.1,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance_1},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-0.4,0,88.7,28.1), null);


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
	this.instance = new lib.Rectangle();
	this.instance.setTransform(251,25,1,1,0,0,0,68.9,25);
	this.instance.alpha = 0.3594;

	this.instance_1 = new lib.Rectangle_1();
	this.instance_1.setTransform(160,40.1,1,1,0,0,0,160,9.9);
	this.instance_1.alpha = 0.3594;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,319.9,50), null);


// stage content:
(lib.ALPFED0001_ReneeCoffey_V2_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,261];
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
	this.frame_261 = function() {
		if (myCounter++>=1) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(261).call(this.frame_261).wait(1));

	// cta
	this.ctaBtn = new lib.Symbol11();
	this.ctaBtn.name = "ctaBtn";
	this.ctaBtn.setTransform(271.6,25.6,0.1954,0.1954,0,0,0,32.8,8.7);
	this.ctaBtn.alpha = 0;
	this.ctaBtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ctaBtn).wait(242).to({_off:false},0).to({regX:32.7,scaleX:1,scaleY:1,x:271.55,alpha:1},16,cjs.Ease.backOut).wait(4));

	// logo
	this.instance = new lib.Symbol13();
	this.instance.setTransform(198.5,30.45,0.4105,0.4105,0,0,0,14.8,4.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(220).to({_off:false},0).to({scaleX:1,scaleY:1,x:199.45,y:31.45,alpha:1},19,cjs.Ease.backOut).wait(23));

	// building
	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(172.2,20.85,0.4004,0.4004,0,0,0,23.4,14.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(207).to({_off:false},0).to({scaleX:1,scaleY:1,x:177.2,y:21.85,alpha:1},21,cjs.Ease.backOut).wait(34));

	// orange_arrow
	this.instance_2 = new lib.Symbol14();
	this.instance_2.setTransform(134.25,21.9,1,1,0,0,0,6.2,6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200).to({_off:false},0).to({x:145.75,alpha:1},11,cjs.Ease.backOut).wait(51));

	// vote1
	this.instance_3 = new lib.Symbol16();
	this.instance_3.setTransform(-14,11.35,1,1,0,0,0,13.5,5.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(176).to({_off:false},0).to({x:44.75,y:8.35,alpha:1},13,cjs.Ease.backOut).wait(73));

	// coffey
	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(5.9,35.45,1,1,0,0,0,36.4,14.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Symbol25();
	this.instance_5.setTransform(102.95,-22.7,0.5813,0.5806,0,0,0,57.4,23.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({x:113.4,y:32.45,alpha:1},17,cjs.Ease.backOut).wait(44).to({y:67.45,alpha:0},9,cjs.Ease.quadOut).to({_off:true},101).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(181).to({_off:false},0).to({y:25.05,alpha:1},13,cjs.Ease.quadOut).wait(68));

	// renee
	this.instance_6 = new lib.Symbol4();
	this.instance_6.setTransform(16.5,13.65,1,1,0,0,0,20.2,8.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol24();
	this.instance_7.setTransform(-17.95,24.35,0.5862,0.5826,0,0,0,32.6,14.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({x:96.5,y:11.15,alpha:1},17,cjs.Ease.backOut).wait(51).to({x:94,y:-11.35,alpha:0},9,cjs.Ease.quadOut).to({_off:true},98).wait(83));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(179).to({_off:false},0).to({x:50.8,y:22.6,alpha:1},13,cjs.Ease.quadOut).wait(70));

	// Text
	this.instance_8 = new lib.Symbol7();
	this.instance_8.setTransform(109.6,44.4,1,1,0,0,0,104.7,3.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(182).to({_off:false},0).to({alpha:1},11).wait(69));

	// more_free
	this.instance_9 = new lib.Symbol10();
	this.instance_9.setTransform(266.85,27.45,0.4542,0.4542,0,0,0,42.6,14.3);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(118).to({_off:false},0).to({scaleX:1,scaleY:1,y:27.4,alpha:1},22,cjs.Ease.elasticOut).wait(35).to({y:66.4,alpha:0},9,cjs.Ease.cubicOut).to({_off:true},1).wait(77));

	// __2M_new_momes
	this.instance_10 = new lib.Symbol9();
	this.instance_10.setTransform(159.15,26.15,0.3613,0.3613,0,0,0,45.1,13.7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(100).to({_off:false},0).to({scaleX:1,scaleY:1,y:26.1,alpha:1},22,cjs.Ease.elasticOut).wait(52).to({y:66.1,alpha:0},9,cjs.Ease.cubicOut).to({_off:true},1).wait(78));

	// _0_off_hecs
	this.instance_11 = new lib.Symbol8();
	this.instance_11.setTransform(52.1,27.25,0.4088,0.4088,0,0,0,43.9,14);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(82).to({_off:false},0).to({scaleX:1,scaleY:1,x:52.05,alpha:1},22,cjs.Ease.elasticOut).wait(69).to({y:67.25,alpha:0},9,cjs.Ease.cubicOut).to({_off:true},1).wait(79));

	// labor
	this.instance_12 = new lib.Symbol6();
	this.instance_12.setTransform(204.4,60.45,1,1,0,0,0,50.1,9.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24).to({_off:false},0).to({x:202.9,y:33.95,alpha:1},12,cjs.Ease.circOut).wait(37).to({x:203.9,y:61.45,alpha:0},10,cjs.Ease.quartOut).to({_off:true},98).wait(81));

	// shadow
	this.instance_13 = new lib.Symbol2();
	this.instance_13.setTransform(160.1,25,1,1,0,0,0,160,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(262));

	// Background
	this.instance_14 = new lib.Symbol3();
	this.instance_14.setTransform(160,25,1,1,0,0,0,160,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(262));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(123,-11.3,197,93.1);
// library properties:
lib.properties = {
	id: 'B915F0BB2CAF214394D0C3C0B5CA43BE',
	width: 320,
	height: 50,
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