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
	this.shape.graphics.f("#FFFFFF").s().p("AgPAHIAJAAQABAFAGABQAGgBAAgEQAAgEgFAAIgFgBQgLgCAAgHQAAgGAEgCQAEgDAGgBQAOAAABALIgIAAQgBgEgGgBQgFAAAAAFQAAADAFAAIAGACQAKACAAAHQAAAGgFACQgEADgGABQgPAAgBgMg");
	this.shape.setTransform(188.075,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAVQgEgFAAgIQAAgIAEgFQAFgFAHAAQAHAAADAHIAAgWIAJAAIAAAyIgJAAIAAgFQgDAGgHAAQgHAAgFgFgAgIAIQAAAMAIAAQAJAAAAgMIAAgBQAAgKgJAAQgIAAAAALg");
	this.shape_1.setTransform(184.025,2.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAHASIAAgTQAAgJgGAAQgIAAABAKIAAASIgJAAIAAgjIAJAAIAAAHQACgHAHAAQANAAAAANIAAAWg");
	this.shape_2.setTransform(179.9,3.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAIQABgJANgBIAJgBIAAgBQAAgHgHAAQgFAAgBAGIgIAAQABgNANAAQAPAAABAOIAAANIABAIIgJAAIAAgFQgEAHgHAAQgNAAAAgLgAAAADQgGABgBADQABAGAFAAQAIAAAAgJIAAgCg");
	this.shape_3.setTransform(175.8,3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAaIAAgzIAHAAIAAAzg");
	this.shape_4.setTransform(173.025,2.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAIAaIgMgPIgEAEIAAALIgJAAIAAgzIAJAAIAAAfIAPgPIAKAAIgPAOIAQAVg");
	this.shape_5.setTransform(170.3,2.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAOQgEgFAAgJQAAgIAEgFQAFgEAIgBQAOAAAAAOIgIAAQgBgHgGAAQgIAAABALQgBAMAIAAQAGAAABgHIAIAAQAAAOgOAAQgIgBgFgEg");
	this.shape_6.setTransform(166.2,3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAOQgFgFAAgJQAAgIAFgFQAFgEAHgBQAIABAFAEQAFAFAAAIQAAAJgFAFQgFAEgIABQgHgBgFgEgAgIAAQAAAMAIAAQAJAAAAgMQAAgLgJAAQgIAAAAALg");
	this.shape_7.setTransform(162.25,3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAZIAAgxIATAAQALAAAGAHQAHAHAAAKQAAAMgHAGQgGAHgLAAgAgMASIAKAAQAPAAAAgSQAAgRgPAAIgKAAg");
	this.shape_8.setTransform(157.775,2.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFAGQAFAAAAgGIAAAAIgDAAIAAgKIAJAAIAAAKQAAALgLAAg");
	this.shape_9.setTransform(152.85,5.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNAYIAAgHIACABQAFAAACgHIgOgjIAJAAIAJAaIAKgaIAJAAIgOAkQgFAMgJAAg");
	this.shape_10.setTransform(150.375,4.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGAMIAAgTIgEAAIAAgGIAEAAIAAgIIAIAAIAAAIIAIAAIAAAGIgIAAIAAARQAAAFAFAAIAEAAIAAAGIgGACQgLAAAAgLg");
	this.shape_11.setTransform(147,3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKASIAAgjIAJAAIAAAJQABgJAJAAIACAAIAAAJIgDAAQgJAAAAAKIAAAQg");
	this.shape_12.setTransform(144.425,3.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPAIQgBgJANgBIAKgBIAAgBQAAgHgGAAQgGAAAAAGIgJAAQACgNANAAQAPAAAAAOIABAVIgJAAIAAgFQgEAHgIAAQgMAAABgLgAAAADQgGABAAADQAAAGAFAAQAIAAAAgJIAAgCg");
	this.shape_13.setTransform(140.85,3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAZIAAgxIAUAAQASAAABAQQgBAPgSAAIgLAAIAAASgAgKAAIAKAAQALAAAAgIQAAgJgLAAIgKAAg");
	this.shape_14.setTransform(136.95,2.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKASIAAgjIAJAAIAAAJQABgJAIAAIADAAIAAAJIgDAAQgJAAAAAKIAAAQg");
	this.shape_15.setTransform(132.25,3.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMAOQgFgFAAgJQAAgIAFgFQAFgEAHgBQAIABAFAEQAFAFAAAIQAAAJgFAFQgFAEgIABQgHgBgFgEgAgIAAQAAAMAIAAQAJAAAAgMQAAgLgJAAQgIAAAAALg");
	this.shape_16.setTransform(128.65,3.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAUIAAAFIgJAAIAAgyIAJAAIAAAWQADgHAIAAQAGAAAEAFQAFAFAAAIQAAAIgFAFQgEAFgGAAQgIAAgDgGgAgIAHIAAABQAAAMAIAAQAJAAAAgMQAAgLgJAAQgIAAAAAKg");
	this.shape_17.setTransform(124.55,2.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPAIQAAgJAMgBIAKgBIAAgBQAAgHgHAAQgFAAAAAGIgJAAQABgNANAAQAQAAgBAOIAAANIABAIIgIAAIgBgFQgCAHgIAAQgMAAAAgLgAAAADQgHABABADQgBAGAGAAQAIAAAAgJIAAgCg");
	this.shape_18.setTransform(120.3,3.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRAZIAAgxIAKAAIAAAqIAZAAIAAAHg");
	this.shape_19.setTransform(116.4,2.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAIASIAAgTQAAgJgIAAQgHAAAAAKIAAASIgJAAIAAgjIAJAAIAAAHQADgHAHAAQANAAABANIAAAWg");
	this.shape_20.setTransform(111,3.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAIQAAgJAMgBIAKgBIAAgBQAAgHgGAAQgGAAAAAGIgJAAQABgNAOAAQAPAAAAAOIAAAVIgIAAIgBgFQgCAHgJAAQgLAAAAgLgAAAADQgHABABADQgBAGAGAAQAIAAAAgJIAAgCg");
	this.shape_21.setTransform(106.9,3.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDAZIAAgiIAIAAIAAAigAgEgQIAAgIIAJAAIAAAIg");
	this.shape_22.setTransform(104.125,2.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEAaIAAgzIAIAAIAAAzg");
	this.shape_23.setTransform(102.35,2.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgPAIQAAgJAMgBIAKgBIAAgBQAAgHgHAAQgEAAgCAGIgIAAQABgNAOAAQAOAAAAAOIAAANIACAIIgJAAIgBgFQgCAHgJAAQgMAAABgLgAAAADQgGABAAADQAAAGAFAAQAIAAAAgJIAAgCg");
	this.shape_24.setTransform(99.45,3.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKASIAAgjIAJAAIAAAJQABgJAJAAIACAAIAAAJIgDAAQgJAAAAAKIAAAQg");
	this.shape_25.setTransform(96.375,3.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGAMIAAgTIgFAAIAAgGIAFAAIAAgIIAIAAIAAAIIAJAAIAAAGIgJAAIAAARQAAAFAEAAIAGAAIAAAGIgIACQgKAAAAgLg");
	this.shape_26.setTransform(93.5,3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPAHIAJAAQAAAFAHABQAGgBAAgEQAAgEgFAAIgGgBQgKgCAAgHQAAgGAEgCQAEgDAGgBQAOAAABALIgIAAQgBgEgGgBQgFAAAAAFQAAADAFAAIAGACQAKACAAAHQAAAGgFACQgEADgGABQgPAAgBgMg");
	this.shape_27.setTransform(90.425,3.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgPAFIAAgWIAJAAIAAAUQAAAIAGAAQAHAAAAgKIAAgSIAJAAIAAAiIgIAAIAAgFQgDAGgHAAQgNAAAAgNg");
	this.shape_28.setTransform(86.525,3.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAQAZIgFgMIgVAAIgFAMIgJAAIAUgxIAJAAIAUAxgAgHAGIAPAAIgIgVIAAAAg");
	this.shape_29.setTransform(82.025,2.65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgFAGQAGAAAAgGIAAAAIgFAAIAAgKIAKAAIAAAKQAAALgLAAg");
	this.shape_30.setTransform(77.3,5.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgPAHIAJAAQABAFAGABQAGgBAAgEQAAgEgFAAIgFgBQgLgCAAgHQAAgGAFgCQAEgDAFgBQAOAAABALIgIAAQAAgEgHgBQgFAAAAAFQAAADAFAAIAGACQAKACAAAHQAAAGgFACQgEADgGABQgPAAgBgMg");
	this.shape_31.setTransform(74.525,3.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgMAOQgFgFAAgJQAAgIAFgFQAFgEAHgBQAIABAFAEQAFAFAAAIQAAAJgFAFQgFAEgIABQgHgBgFgEgAgIAAQAAAMAIAAQAJAAAAgMQAAgLgJAAQgIAAAAALg");
	this.shape_32.setTransform(70.7,3.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAHAaIgKgPIgFAEIAAALIgJAAIAAgzIAJAAIAAAfIAPgPIAKAAIgPAOIAQAVg");
	this.shape_33.setTransform(67.075,2.575);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAZIAAgiIAIAAIAAAigAgEgQIAAgIIAJAAIAAAIg");
	this.shape_34.setTransform(63.975,2.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgQAIQABgJANgBIAJgBIAAgBQAAgHgHAAQgFAAAAAGIgJAAQABgNANAAQAQAAAAAOIABAVIgJAAIAAgFQgDAHgIAAQgNAAAAgLgAAAADQgGABgBADQABAGAFAAQAIAAAAgJIAAgCg");
	this.shape_35.setTransform(61.05,3.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGAMIAAgTIgEAAIAAgGIAEAAIAAgIIAIAAIAAAIIAJAAIAAAGIgJAAIAAARQAAAFAFAAIAEAAIAAAGIgHACQgJAAgBgLg");
	this.shape_36.setTransform(57.8,3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgUAKIAJAAQABAJALAAQAKAAAAgIQAAgFgIgCIgIgBQgNgDAAgKQAAgGAFgFQAFgEAIAAQASAAACAPIgJAAQgBgIgKAAQgJAAAAAIQAAAFAIABIAIACQAOACAAALQAAAGgGAFQgFAEgJAAQgTAAgCgQg");
	this.shape_37.setTransform(54.275,2.675);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgUAKIAJAAQABAJALAAQALAAAAgIQAAgFgJgCIgIgBQgNgDAAgKQAAgGAFgFQAFgEAIAAQASAAACAPIgJAAQgBgIgKAAQgJAAAAAIQAAAFAIABIAJACQANACAAALQAAAGgGAFQgFAEgJAAQgTAAgCgQg");
	this.shape_38.setTransform(48.675,2.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNAYIAAgHIACABQAFAAACgHIgOgjIAJAAIAJAaIAKgaIAJAAIgOAkQgFAMgJAAg");
	this.shape_39.setTransform(43.475,4.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgIAUIAAAFIgJAAIAAgyIAJAAIAAAWQADgHAHAAQAIAAADAFQAFAFAAAIQAAAIgFAFQgEAFgHAAQgHAAgDgGgAgIAHIAAABQAAAMAIAAQAJAAAAgMQAAgLgJAAQgIAAAAAKg");
	this.shape_40.setTransform(39.6,2.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMAVQgFgFAAgIQAAgIAFgFQAEgFAHAAQAHAAADAHIAAgWIAJAAIAAAyIgIAAIAAgFQgEAGgHAAQgHAAgEgFgAgHAIQAAAMAIAAQAIAAABgMIAAgBQgBgKgIAAQgIAAAAALg");
	this.shape_41.setTransform(34,2.625);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgLAOQgFgFAAgJQAAgIAFgFQAFgEAGgBQAJAAAEAGQAEAEAAAIIAAACIgZAAQABAKAIAAQAGAAABgGIAJAAQgCANgOAAQgHgBgFgEgAgHgDIAPAAQABgIgJAAQgFAAgCAIg");
	this.shape_42.setTransform(30,3.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgPAHIAJAAQABAFAFABQAIgBgBgEQAAgEgFAAIgFgBQgLgCABgHQAAgMANAAQAOAAABALIgIAAQgBgEgGgBQgGAAABAFQgBADAGAAIAGACQAKACAAAHQAAAGgEACQgFADgGABQgPAAgBgMg");
	this.shape_43.setTransform(26.25,3.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgEAZIAAgiIAIAAIAAAigAgEgQIAAgIIAJAAIAAAIg");
	this.shape_44.setTransform(23.575,2.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgKASIAAgjIAJAAIAAAJQABgJAJAAIACAAIAAAJIgDAAQgJAAAAAKIAAAQg");
	this.shape_45.setTransform(21.475,3.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgMAOQgFgFAAgJQAAgIAFgFQAFgEAHgBQAIABAFAEQAFAFAAAIQAAAJgFAFQgFAEgIABQgHgBgFgEgAgIAAQAAAMAIAAQAJAAAAgMQAAgLgJAAQgIAAAAALg");
	this.shape_46.setTransform(17.85,3.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAHAaIAAgVQAAgHgGAAQgHAAAAAJIAAATIgJAAIAAgzIAJAAIAAAWQACgGAIAAQAMAAAAAMIAAAXg");
	this.shape_47.setTransform(13.75,2.575);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgGAMIAAgTIgEAAIAAgGIAEAAIAAgIIAIAAIAAAIIAJAAIAAAGIgJAAIAAARQAAAFAFAAIAEAAIAAAGIgGACQgLAAAAgLg");
	this.shape_48.setTransform(10.3,3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgPAFIAAgWIAJAAIAAAUQAAAIAGAAQAHAAAAgKIAAgSIAJAAIAAAiIgJAAIAAgFQgCAGgIAAQgMAAAAgNg");
	this.shape_49.setTransform(7.025,3.425);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAQAZIgFgMIgWAAIgEAMIgJAAIAUgxIAJAAIAUAxgAgIAGIAQAAIgIgVg");
	this.shape_50.setTransform(2.525,2.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,189.7,6.5), null);


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
	mask.graphics.p("AngCQIAAkfIPBAAIAAEfg");
	mask.setTransform(48.1,14.375);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#886BAE").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape.setTransform(14.925,14.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F06A2D").s().p("AgJgCIACgCIAOgCIADAGIgMAHg");
	this.shape_1.setTransform(13.825,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F59769").s().p("AgWAOIAbgcIAQgCIACAGIgqAaIgCABQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_2.setTransform(12.5214,15.4725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F06A2D").s().p("AgGAGIgCgGIAMgFIAGAJIgCACg");
	this.shape_3.setTransform(16.15,13.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F59769").s().p("AgVANIgCgGIAsgTQAFAAgDADIgdAWg");
	this.shape_4.setTransform(17.5667,12.8464);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F06A2D").s().p("AgFAHIABgNIAEgCIAGAMIgJAFg");
	this.shape_5.setTransform(15.2,14.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F59769").s().p("AAKAWIgWgcIAAgPIAGgBIATAqQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgCgBg");
	this.shape_6.setTransform(15.9286,16.2558);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F06A2D").s().p("AgFgDIAIgGIADADIAAAMIgGAEg");
	this.shape_7.setTransform(14.45,13.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F59769").s().p("AgNgTIAAgBQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIAYAaIABAPIgGACg");
	this.shape_8.setTransform(13.675,11.78);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAA819").s().p("AgEgoIAFAHIAGBKIgNABg");
	this.shape_9.setTransform(15.3,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#886BAE").s().p("AgJAAQABgIAIAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgIAAgBgJg");
	this.shape_10.setTransform(7.7,10.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F06A2D").s().p("AgQgEIAEgDIAXgDIAGAJIgUAMg");
	this.shape_11.setTransform(5.9,10.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F59769").s().p("AgkAXIArguIAbgDIAEAIIhGAsIgDABQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgBABgBg");
	this.shape_12.setTransform(3.7921,12.4641);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F06A2D").s().p("AgKAJIgEgJIAUgJIAKAQIgEADg");
	this.shape_13.setTransform(9.7,9.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F59769").s().p("AgkAVIgCgKIBIgfQAIgBgEAEIgwAmg");
	this.shape_14.setTransform(12.0307,8.1659);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F06A2D").s().p("AgJAMIABgWIAIgEIAKAUIgQAJg");
	this.shape_15.setTransform(8.175,11.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F59769").s().p("AARAkIglguIAAgYIAJgDIAgBFQABAGgCAAIgDgCg");
	this.shape_16.setTransform(9.3091,13.7557);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F06A2D").s().p("AgJgFIAPgJIADADIABAVIgJAFg");
	this.shape_17.setTransform(6.9,8.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F59769").s().p("AgWgfIAAgDQAAgBABAAQAAAAAAAAQABAAABAAQAAAAABAAIAoAsIABAYIgJADg");
	this.shape_18.setTransform(5.6125,6.4056);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,2.8,20,21), null);


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
	mask.graphics.p("AngCQIAAkfIPBAAIAAEfg");
	mask.setTransform(48.1,14.375);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVA8QgHgGgBgOQAAgOABgEIAVgBIAAAEQABAIABACQACADAEAAQAFAAABgDQACgCgBgIQAAgHgGgFQgSgHgHgGQgFgDgCgIQgBgGgBgOQAAgTAGgGQAGgHASgBQAQAAAHAFQAHAGABAPQAAALgBADIgWABIAAgFQAAgGgCgDQgBgCgEABQgEgBgCADQgBACAAAGQAAAIAGADIAXALQAGAEACAFQADAHABAOQABAXgHAIQgHAKgTAAIgBAAQgOAAgHgFg");
	this.shape.setTransform(92.9293,20.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Agdg9IA3gCIABAbIgdABIABAWIAcgBIABAYIgcABIAAAYIAdgBIABAcIg3ACg");
	this.shape_1.setTransform(86.25,20.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Agcg9IAagBIADBhIAbgBIABAbIg0ACg");
	this.shape_2.setTransform(80.125,20.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Agjg9IAkgBQARgBAHAIQAGAHABASQAAAOgCAFQgBAEgFAEIAAABQAGADACADQADAGAAARQABATgGAHQgGAJgQAAIgnABgAgGAJIABAcIAHAAQAHAAAAgMQgBgQgGAAgAgHgKIAHgBQAGAAAAgOQgBgIgBgCQgCgDgDABIgHAAg");
	this.shape_3.setTransform(73.2571,20.7734);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZg9IArgCIARB8IgbABIgDgdIgLABIgBAdIgbABgAgGAIIAJAAIgFgsIgCAAg");
	this.shape_4.setTransform(65.9,21.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5g8IAbgBIAIBVIADAAIAHhVIAagBIAPBUIABAAIADhVIAYgBIgFB9IgmABIgLhLIgCAAIgFBMIglABg");
	this.shape_5.setTransform(56.1,21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Agdg9IA3gCIABAbIgdABIABAWIAcgBIABAYIgcABIAAAYIAdgBIABAcIg2ACg");
	this.shape_6.setTransform(47.075,21.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Agjg8IAZgBIATArIABAAIgCgsIAYgBIAEB9IgNAAIgfhCIgBAAIACBDIgYABg");
	this.shape_7.setTransform(39.925,21.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Agdg9IA3gCIAAAbIgcABIABAWIAcgBIABAYIgcABIAAAYIAdgBIABAcIg3ACg");
	this.shape_8.setTransform(32.9,22.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Agjg9IAlgBQAQgBAHAIQAFAHABASQAAASgCAHQgBAEgHADIAAABIAFAFQADAGADAUIAFAaIAAABIgcABIgHgjQgBgJgBgCQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgEAAIACAxIgaAAgAgHgJIAHAAQAFAAgBgPQABgNgHABIgGAAg");
	this.shape_9.setTransform(25.95,22.4234);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPA8QgDgFgBgaQgBgaACgEQADgFAOgBQANAAADAFQADAEABAaQABAagDAFQgCAFgOAAIgEABQgKAAgCgFgAAaALIABARIABARQAAABAAAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgRIgBgRQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABgAgpA/IBCh+IAQAAIAAAAIhCB/IgQAAgAgsADQgDgEgBgaQgBgaADgFQACgFAOgBQANAAADAEQAEAGAAAZQABAagCAFQgDAFgOAAIgCAAQgMAAgCgEgAgggtIAAARIABARQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAgBIAAgQIgBgSQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABg");
	this.shape_10.setTransform(41.5833,6.5058);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaA5QgFgJgCgvQgCgtAFgKQAFgJAYgBQAXgBAFAJQAFAJACAvQACAtgFAKQgFAJgYABIgDAAQgUAAgFgIgAAAgmQgGAAgBAFIAAAhIACAgQACAFAEAAQAGAAABgFQABgGgBgaQgBgdgBgFQgBgEgFAAIAAAAg");
	this.shape_11.setTransform(32.6887,6.8036);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbA6QgFgGgCgWQAAgRACgGQACgDAGgEIAAgBQgFgDgDgFQgBgGgBgNQgBgWAHgHQAGgGAUgBQAUAAAGAFQAHAGAAAWQAAAOgBAGQgBAFgFAEIAAABQAGADACADQACAGABARQABAVgHAHQgGAIgWABIgBAAQgUAAgHgHgAAAAIQgGABgCACQgBADAAALQABAIACACQACADAEgBQAGAAACgCQACgDAAgHQAAgMgCgDQgCgCgEAAIgCAAgAgIglQgCACABAKQAAALACACQACACAFAAQAEAAACgCQABgDAAgLQgBgJgBgCQgCgCgEAAQgGAAgBACg");
	this.shape_12.setTransform(25.25,7.0995);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(21.8,0.1,74.4,28.7), null);


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
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AmpBdIAAi5INTAAIAAC5g");
	mask_1.setTransform(42.575,9.25);

	// Layer_3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQAwQgGgFgBgMIABgNIARgBIAAADIABAIQACACADAAQAEAAABgCQABgCAAgGQAAgGgGgEQgOgFgFgFQgGgDgBgWQAAgOAEgFQAFgGAPgBQAMAAAGAEQAFAFABANQAAAFgBAFIgRABIAAgFIgBgGQgCgCgCAAQgEABgBACQgCABABAFQAAAGAFADQAHAEALAEQAFAEACADQACAGAAAMQABARgGAIQgFAGgPABIgCAAQgLAAgEgEg");
	this.shape_13.setTransform(80.3496,7.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWgwIAVgBIACBMIAVAAIABAWIgpACg");
	this.shape_14.setTransform(75.225,7.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWgxIAVAAIACBMIAVgBIABAXIgpACg");
	this.shape_15.setTransform(70.425,8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMgxIAVAAIADBjIgUAAg");
	this.shape_16.setTransform(66.45,8.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgtgwIAWAAIAGBDIACAAIAHhEIAUgBIALBEIABAAIADhEIATgBIgFBkIgdABIgJg9IgCAAIgEA9IgdABg");
	this.shape_17.setTransform(59.95,8.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcgwIAdgBQANgBAFAGQAFAGABAPQAAAOgCAFQgBAEgFACIAAAAQACACABACQADAGACAPIAEAVIAAABIgWABQgCgEgDgZQgBgKgDAAIgDAAIABAnIgVABgAgHgcIABAVIAGAAQAEAAAAgMQgBgKgEAAg");
	this.shape_18.setTransform(49.825,8.6981);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAsQgFgIgBgjQgBghAEgKQAFgIARgBQARAAAFAIQAFAJABAiIAAAfQAAAHgDAFQgEAIgSABIgCAAQgPAAgFgIgAgFgcQgBAEABAYQAAAYACADQABADADgBQAFAAAAgCQABgFAAgWQgBgYgCgEQAAgCgEAAQgFAAAAACg");
	this.shape_19.setTransform(43.6938,8.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWgwIArgCIABAVIgWABIAAAUIAWgBIABAUIgXAAIACAnIgUABg");
	this.shape_20.setTransform(38.175,9.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcgwIAdgBQANgBAGAGQAEAGABAPQAAAOgCAFQgBADgFACIAAABIADAEQADAEADARIADAVIAAABIgWABIgFgdQgBgKgDAAIgDAAIABAnIgVABgAgHgcIABAVIAGAAQAEAAAAgMQAAgKgFAAg");
	this.shape_21.setTransform(30.075,9.3981);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUAsQgFgJgBgiQgBgjAEgIQAEgIASgBQAQAAAFAIQADAFACAHQABAIABAXIAAAeQgBAIgDAFQgEAIgRABIgCAAQgPAAgFgIgAAAgeQgEAAgBACQgBADAAAZQABAYACADQAAACAEAAQAEAAABgCQABgDgBgYIgCgcQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIAAAAg");
	this.shape_22.setTransform(23.9534,9.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgcgxIAdgBQANAAAGAGQAFAGAAAOQABALgCAEQgBAEgEADIAAABQAFACACACQACAFAAAOQABAOgFAGQgEAHgNAAIgfACgAgEAeIAGgBQAFAAAAgJQAAgNgGAAIgGAAgAgFgIIAFAAQAFgBAAgLIgCgIQgBgCgDAAIgFAAg");
	this.shape_23.setTransform(17.9583,9.8231);

	var maskedShapeInstanceList = [this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(15.1,2.4,67.9,12.5), null);


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
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AlZCPIAAkdIKzAAIAAEdg");
	mask_2.setTransform(34.575,14.3);

	// Layer_3
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF3640").s().p("AgthiIAqgBIAECZIArgBIABAsIhSADg");
	this.shape_24.setTransform(61.35,13.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF3640").s().p("AgXhiIApgBIAGDGIgpABg");
	this.shape_25.setTransform(53.2,14.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF3640").s().p("AgthiIAqgBIAECZIArgBIABAsIhSADg");
	this.shape_26.setTransform(45.6,14.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF3640").s().p("AgohhIBEgDIAbDFIgqABIgFgtIgTAAIgCAvIgpABgAgLANIAPAAIgIhHIgDAAg");
	this.shape_27.setTransform(35.025,14.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF3640").s().p("Ag6hhIAqgBIADBNIAZgBIgDhNIArgBIAGDGIgpABIgEhSIgYABIADBSIgrABg");
	this.shape_28.setTransform(22.45,15.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF3640").s().p("Ag9hhIArgBIACBTIADAAIAWhUIAsgBIAAABIgbBaIAkBpIAAABIgvACIgbhZIgDAAIABAPIADBLIgrABg");
	this.shape_29.setTransform(9.975,15.7);

	var maskedShapeInstanceList = [this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(3.8,4,62.10000000000001,21.9), null);


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
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AjCBXIAAitIGFAAIAACtg");
	mask_3.setTransform(19.5,8.675);

	// Layer_3
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF3640").s().p("Agig+IAjgBQAQAAAFAHQAGAIABASQABASgDAHQgCAEgFADIAAABIAEAFQADAHADATIAFAbIAAABIgaABIgHgkQgBgNgEAAIgEAAIACAxIgYABgAgHgJIAHAAQACAAABgDQABgDAAgJQAAgIgCgCQgBgDgDABIgGAAg");
	this.shape_30.setTransform(33.15,8.2984);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF3640").s().p("Agbg9IAzgCIAAAbIgaABIABAWIAagBIABAYIgaABIAAAYIAbgBIABAcIgzACg");
	this.shape_31.setTransform(26.35,8.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF3640").s().p("AgLgjIgTABIAAgbIA8gCIABAbIgSAAIADBjIgXABg");
	this.shape_32.setTransform(19.8,8.675);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF3640").s().p("Agbg9IAzgCIABAbIgbAAIABAXIAagBIABAYIgaABIAAAYIAbgBIABAcIgzACg");
	this.shape_33.setTransform(13.65,8.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF3640").s().p("Agfg9IAigCQAQAAAGAJQAGAJAAAZQABAYgFAKQgFAKgPABIgKAAIABAmIgYABgAgGgkIACAkIAFAAQAGAAAAgUQgBgKgBgDQgCgDgDAAg");
	this.shape_34.setTransform(7.0083,9.1988);

	var maskedShapeInstanceList = [this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(3.9,1.9,32.7,13.7), null);


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


(lib.ClipGroup_2_1 = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0,6,20.5,7.800000000000001), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
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
	mask_1.graphics.p("AhlBiIAAjDIDLAAIAADDg");
	mask_1.setTransform(10.225,9.75);

	// Layer_3
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FDA803").ss(1,0,0,4).p("ABkAXIioAGQgKABgIgIQgIgHAAgLIAAgBQgBgKAIgIQAHgHAKgBICogG");
	this.shape_19.setTransform(10.0073,3.4517);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhUAVQgIgHAAgKIAAgBQgBgJAIgIQAHgHAKgBICggFIABAxIigAGIgBAAQgJAAgHgHg");
	this.shape_20.setTransform(9.7234,3.3517);

	var maskedShapeInstanceList = [this.shape_19,this.shape_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0,20.5,7.4), null);


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
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AhlBiIAAjDIDLAAIAADDg");
	mask_4.setTransform(10.225,9.75);

	// Layer_3
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F0692E").ss(1,0,0,4).p("ABkAXIioAGQgKABgIgIQgIgHAAgLIAAgBQgBgKAIgIQAHgHAKgBICogG");
	this.shape_35.setTransform(10.4573,16.1017);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhUAVQgIgHAAgKIAAgBQgBgJAHgIQAHgHALgBICfgFIACAxIigAGIgBAAQgJAAgHgHg");
	this.shape_36.setTransform(10.1733,16.0017);

	var maskedShapeInstanceList = [this.shape_35,this.shape_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,12.2,20.5,7.300000000000001), null);


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


(lib.Symbol17_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(48.1,14.25,1,1,0,0,0,48.1,14.3);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(48.1,14.25,1,1,0,0,0,48.1,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAA819").s().p("AgHhDIAIAMIAKB6IgVABg");
	this.shape_1.setTransform(8.275,19.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17_1, new cjs.Rectangle(0,0,96.2,28.7), null);


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
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(42.6,9.2,1,1,0,0,0,42.6,9.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUgxIAigBIAOBjIgVAAIgDgWIgJAAIgBAXIgVABgAgFAGIAHAAIgDgjIgCAAg");
	this.shape.setTransform(12.075,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWgxIAVgBIACBOIAVgBIABAWIgpABg");
	this.shape_1.setTransform(6.575,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0071B0").s().p("AmphIINOgUIAFCgItOAZg");
	this.shape_2.setTransform(42.575,9.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,85.2,18.5), null);


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

	this.instance = new lib.ClipGroup_5();
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

	this.instance_1 = new lib.ClipGroup_1_1();
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

	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.setTransform(9.95,14.35,1,1,0,0,0,10.1,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance_1},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-0.4,0,88.7,28.1), null);


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
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(34.6,14.3,1,1,0,0,0,34.6,14.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlZh1IKqgZIAJEEIqqAZg");
	this.shape.setTransform(34.575,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,69.2,28.6), null);


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
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(19.5,8.7,1,1,0,0,0,19.5,8.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjChHIF/gPIAGCfImAAOg");
	this.shape.setTransform(19.5,8.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,39,17.4), null);


(lib.Symbol11_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.Symbol37();
	this.instance_1.setTransform(33.65,8.5,0.4881,0.4844,0,0,0,45,6.4);

	this.bg = new lib.Symbol17();
	this.bg.name = "bg";
	this.bg.setTransform(32.7,8.7,1,1,0,0,0,32.7,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg},{t:this.instance_1}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkJBXQgaAAgRgSQgSgRAAgaIAAg0QAAgYASgTQARgRAaAAIITAAQAZAAASARQASATAAAYIAAA0QAAAagSARQgSASgZAAg");
	this.shape_3.setTransform(32.7,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11_1, new cjs.Rectangle(0,0,65.4,17.4), null);


// stage content:
(lib.ALPFED0001_PeterKhalil_V2_320x50 = function(mode,startPosition,loop,reversed) {
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
	this.ctaBtn = new lib.Symbol11_1();
	this.ctaBtn.name = "ctaBtn";
	this.ctaBtn.setTransform(271.6,25.6,0.1954,0.1954,0,0,0,32.8,8.7);
	this.ctaBtn.alpha = 0;
	this.ctaBtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ctaBtn).wait(242).to({_off:false},0).to({regX:32.7,scaleX:1,scaleY:1,x:271.55,alpha:1},16,cjs.Ease.backOut).wait(4));

	// logo
	this.instance = new lib.Symbol13();
	this.instance.setTransform(199.5,31.45,0.4105,0.4105,0,0,0,14.8,4.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(220).to({_off:false},0).to({scaleX:1,scaleY:1,x:203.2,y:33.95,alpha:1},19,cjs.Ease.backOut).wait(23));

	// building
	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(177.2,21.85,0.4004,0.4004,0,0,0,23.4,14.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(207).to({_off:false},0).to({scaleX:1,scaleY:1,x:180.95,y:24.35,alpha:1},21,cjs.Ease.backOut).wait(34));

	// orange_arrow
	this.instance_2 = new lib.Symbol14();
	this.instance_2.setTransform(144.25,21.15,1,1,0,0,0,6.2,6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200).to({_off:false},0).to({x:149.5,y:20.4,alpha:1},11,cjs.Ease.backOut).wait(51));

	// vote1
	this.instance_3 = new lib.Symbol16();
	this.instance_3.setTransform(-14,10.35,1,1,0,0,0,13.5,5.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(176).to({_off:false},0).to({x:49.85,y:7.55,alpha:1},13,cjs.Ease.backOut).wait(73));

	// coffey
	this.instance_4 = new lib.Symbol7();
	this.instance_4.setTransform(5.8,34.5,1,1,0,0,0,34.6,14.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({x:120.8,y:32,alpha:1},17,cjs.Ease.backOut).wait(44).to({x:121.05,y:64.5,alpha:0},9,cjs.Ease.quadOut).wait(101).to({regX:34.7,regY:14.4,scaleX:0.9472,scaleY:0.944,x:105.55,y:-14.75},0).to({x:107.8,y:24.25,alpha:1},13,cjs.Ease.quadOut).wait(68));

	// renee
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(32.65,13.2,1,1,0,0,0,19.5,8.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({x:105.15,y:10.7,alpha:1},17,cjs.Ease.backOut).wait(51).to({x:103.15,y:-9.8,alpha:0},9,cjs.Ease.quadOut).wait(98).to({regX:19.7,regY:9,scaleX:0.9487,scaleY:0.9424,x:-8.55,y:23.9},0).to({x:55.45,y:21.7,alpha:1},13,cjs.Ease.quadOut).wait(70));

	// Text
	this.instance_6 = new lib.Symbol4();
	this.instance_6.setTransform(97.65,44.75,1,1,0,0,0,94.8,3.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(182).to({_off:false},0).to({alpha:1},11).wait(69));

	// more_free
	this.instance_7 = new lib.Symbol17_1();
	this.instance_7.setTransform(265.25,25.75,0.3881,0.3881,0,0,0,48.1,14.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(118).to({_off:false},0).to({scaleX:1,scaleY:1,y:25.7,alpha:1},22,cjs.Ease.elasticOut).wait(35).to({y:65.7,alpha:0},9,cjs.Ease.cubicOut).to({_off:true},1).wait(77));

	// __2M_new_momes
	this.instance_8 = new lib.Symbol9();
	this.instance_8.setTransform(159.15,26.15,0.3613,0.3613,0,0,0,45.1,13.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(100).to({_off:false},0).to({scaleX:1,scaleY:1,y:26.1,alpha:1},22,cjs.Ease.elasticOut).wait(52).to({y:66.1,alpha:0},9,cjs.Ease.cubicOut).to({_off:true},1).wait(78));

	// _0_off_hecs
	this.instance_9 = new lib.Symbol8();
	this.instance_9.setTransform(52.1,27.25,0.4088,0.4088,0,0,0,43.9,14);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(82).to({_off:false},0).to({scaleX:1,scaleY:1,x:52.05,alpha:1},22,cjs.Ease.elasticOut).wait(69).to({y:67.25,alpha:0},9,cjs.Ease.cubicOut).to({_off:true},1).wait(79));

	// labor
	this.instance_10 = new lib.Symbol11();
	this.instance_10.setTransform(201.45,59.2,1,1,0,0,0,42.6,9.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24).to({_off:false},0).to({x:199.2,y:34.45,alpha:1},12,cjs.Ease.circOut).wait(37).to({x:201.45,y:59.2,alpha:0},10,cjs.Ease.quartOut).to({_off:true},98).wait(81));

	// Background
	this.instance_11 = new lib.Symbol3();
	this.instance_11.setTransform(160,25,1,1,0,0,0,160,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(262));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(131.2,-3.4,193.2,84.7);
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