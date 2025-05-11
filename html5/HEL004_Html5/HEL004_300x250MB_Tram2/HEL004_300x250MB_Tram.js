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



(lib.face = function() {
	this.initialize(img.face);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,133);


(lib.Tram = function() {
	this.initialize(img.Tram);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,333);// helper functions:

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
	this.instance = new lib.Tram();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,400,333), null);


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
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000","#000000"],[0.008,0.882,1],123.4,0,-123.4,0).s().p("AzRTiMAAAgnDMAmjAAAMAAAAnDg");
	this.shape.setTransform(123.375,124.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#000000"],[0.008,1],0,-42.8,0,42.9).s().p("A3bGsIAAtXMAu3AAAIAANXg");
	this.shape_1.setTransform(149.975,207.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,300,250), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgYCNIAAkZIAxAAIAAEZg");
	this.shape.setTransform(56.75,14.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABeCNIAAjZIhJDZIgpAAIhJjZIAADZIguAAIAAkZIBEAAIBIDXIBJjXIBCAAIAAEZg");
	this.shape_1.setTransform(35.2,14.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaCNIAAkZIAyAAIAADtICDAAIAAAsg");
	this.shape_2.setTransform(9.125,14.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,59.3,28.2), null);


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
	this.instance = new lib.face();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,155,133), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgRASIAAgiIAiAAIAAAig");
	this.shape.setTransform(112.7,41.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBWIAAirIAdAAIAACrg");
	this.shape_1.setTransform(107.075,34.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA5BWIAAiEIgtCEIgYAAIgtiEIAACEIgcAAIAAirIAqAAIArCDIAtiDIApAAIAACrg");
	this.shape_2.setTransform(93.925,34.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3BWIAAirIAfAAIAACQIBQAAIAAAbg");
	this.shape_3.setTransform(77.95,34.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYBWIAAhLQAAgZgWAAQgJAAgIAHQgIAHAAAMIAABKIgdAAIAAirIAdAAIAAA8QANgQAVAAQATAAALAMQAMAMAAAUIAABTg");
	this.shape_4.setTransform(59.55,34.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJBLQgKgIAAgSIAAhFIgRAAIAAgYIARAAIAAglIAcAAIAAAlIAaAAIAAAYIgaAAIAABAQAAAIAEADQAEACAIAAIAMgBIAAAYQgLACgJAAQgSAAgIgHg");
	this.shape_5.setTransform(48.625,35.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNBWIAAh9IAbAAIAAB9gAgOg4IAAgdIAdAAIAAAdg");
	this.shape_6.setTransform(42.175,34.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAXA/IgXhSIgWBSIgZAAIgmh9IAeAAIAWBTIAXhTIAXAAIAWBTIAXhTIAcAAIgmB9g");
	this.shape_7.setTransform(30.8,36.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYBAIAAhKQAAgagWAAQgKAAgHAHQgIAHAAANIAABJIgdAAIAAh9IAdAAIAAAOQANgQAUAAQAUAAAMAMQALAMAAAVIAABSg");
	this.shape_8.setTransform(11,36.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOBWIAAh9IAcAAIAAB9gAgOg4IAAgdIAdAAIAAAdg");
	this.shape_9.setTransform(1.5,34.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdA7QgRgIgIgMIAWgRQAFAJAKAFQAKAGAKAAQAYAAAAgQQAAgHgIgDIgWgFQgUgFgIgFQgOgIAAgRQAAgSANgLQAOgMAVAAQAQABAOAGQAOAGAHALIgUASQgLgSgWAAQgIAAgFAEQgFAEAAAFQAAAHAGADQAEACAOADQAXAFAJAFQAQAIAAATQAAASgPAMQgPAMgWAAQgRgBgPgGg");
	this.shape_10.setTransform(159.225,10.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJBLQgKgIAAgSIAAhFIgRAAIAAgYIARAAIAAglIAcAAIAAAlIAaAAIAAAYIgaAAIAABAQAAAIAEADQAEACAIAAIAMgBIAAAYQgLACgJAAQgSAAgIgHg");
	this.shape_11.setTransform(149.425,9.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAYBAIAAhKQAAgagWAAQgJAAgIAHQgIAHAAANIAABJIgdAAIAAh9IAdAAIAAAOQANgQAVAAQAUAAALAMQALANAAAUIAABSg");
	this.shape_12.setTransform(139.2,10.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnAwQgSgTAAgdQAAgbARgTQARgSAZgBQAbABAPARQAOARAAAcIAAAIIhXAAQABARAKAJQAJAJANAAQAWAAAHgUIAZAJQgHARgPAJQgOAKgSAAQgaAAgRgSgAgcgOIA5AAQAAgMgHgGQgHgJgNABQgXAAgHAag");
	this.shape_13.setTransform(126.2,10.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNBWIAAh9IAbAAIAAB9gAgOg4IAAgdIAdAAIAAAdg");
	this.shape_14.setTransform(116.975,8.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOBWIAAirIAcAAIAACrg");
	this.shape_15.setTransform(111.3,8.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgnAwQgRgTAAgdQAAgcARgTQARgRAagBQAUAAAOALQAOAJAFAQIgYANQgGgYgXAAQgOAAgIALQgKALABASQgBATAKALQAIALAOAAQAXAAAGgZIAYANQgEAQgOAKQgOALgVAAQgaAAgRgSg");
	this.shape_16.setTransform(102.6,10.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoAwQgRgTAAgdQAAgbARgTQARgSAZgBQAbABAOARQAPARAAAcIAAAIIhXAAQABARAJAJQAJAJANAAQAXAAAHgUIAYAJQgOAkgoAAQgaAAgRgSgAgcgOIA5AAQAAgMgHgGQgHgJgOABQgWAAgHAag");
	this.shape_17.setTransform(85.25,10.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgjBAIAAh9IAdAAIAAASQAEgJAIgFQAJgGAMABIAJAAIAAAdIgLgBQgOAAgJAJQgIAJAAAOIAABCg");
	this.shape_18.setTransform(75.525,10.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgrAwQgRgTAAgdQAAgcARgTQARgRAagBQAbABARARQARATAAAcQAAAdgRATQgRASgbAAQgaAAgRgSgAgWgeQgJAMAAASQAAATAJAMQAIALAOAAQAOAAAJgLQAJgMAAgTQAAgSgJgMQgJgLgOABQgOgBgIALg");
	this.shape_19.setTransform(63.875,10.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA8BAIAAhKQAAgagVAAQgKAAgHAHQgIAIAAAMIAABJIgbAAIAAhKQAAgagWAAQgKAAgHAHQgIAIAAAMIAABJIgcAAIAAh9IAcAAIAAAOQANgQAWAAQAWAAAKARQASgRAWAAQATAAAMAMQALANAAAUIAABSg");
	this.shape_20.setTransform(46.975,10.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJBLQgKgIABgSIAAhFIgSAAIAAgYIASAAIAAglIAbAAIAAAlIAaAAIAAAYIgaAAIAABAQgBAIAFADQADACAKAAIALgBIAAAYQgKACgJAAQgTAAgIgHg");
	this.shape_21.setTransform(27.7,9.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoAwQgRgTAAgdQAAgbARgTQARgSAZgBQAbABAOARQAPARAAAcIAAAIIhXAAQABARAJAJQAKAJAMAAQAXAAAHgUIAYAJQgGARgPAJQgOAKgTAAQgaAAgRgSgAgcgOIA5AAQAAgMgHgGQgHgJgNABQgXAAgHAag");
	this.shape_22.setTransform(17.75,10.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag3BWIAAirIAfAAIAACQIBQAAIAAAbg");
	this.shape_23.setTransform(5.75,8.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,164.7,43.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgbAiQgMgNAAgVQAAgUALgNQANgNAQAAQATAAAKANQAKAMAAAUIAAADIhAAAQAAAPAIAIQAHAJALAAQATAAAEgSIAOAFQgJAagcAAQgRAAgMgNgAgOgaQgHAGgCALIAvAAQAAgKgGgGQgFgIgMAAQgIAAgHAHg");
	this.shape.setTransform(79.0406,7.36,1.0503,1.0503);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAtIAAhZIAPAAIAAAQQAHgQARAAIAGAAIAAAQIgHgBQgKAAgGAHQgHAHAAAMIAAAwg");
	this.shape_1.setTransform(71.7674,7.3337,1.0503,1.0503);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAiQgMgNAAgVQAAgUAMgNQALgNASAAQASAAAMANQAMANAAAUQAAAVgMANQgMANgSAAQgSAAgLgNgAgSgYQgHAJAAAPQAAAPAHAKQAHAIALABQAMgBAHgIQAHgKAAgPQAAgPgHgJQgHgIgMgBQgLABgHAIg");
	this.shape_2.setTransform(63.4177,7.36,1.0503,1.0503);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAvAuIAAg2QAAgXgSAAQgIAAgGAHQgHAGAAALIAAA1IgOAAIAAg2QgBgXgRAAQgJAAgGAHQgHAGAAALIAAA1IgPAAIAAhZIAPAAIAAAMQAKgOAQAAQARAAAHAQQAKgQASAAQAOAAAJAJQAHAJABAOIAAA7g");
	this.shape_3.setTransform(50.9981,7.255,1.0503,1.0503);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVAuIAAg2QAAgXgTAAQgIAAgHAHQgHAHAAAKIAAA1IgPAAIAAhZIAPAAIAAAMQALgOAPAAQAOAAAIAJQAIAJAAAOIAAA7g");
	this.shape_4.setTransform(35.2702,7.255,1.0503,1.0503);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAtIAAhZIAPAAIAAAQQAHgQARAAIAGAAIAAAQIgHgBQgKAAgGAHQgHAHAAAMIAAAwg");
	this.shape_5.setTransform(27.7608,7.3337,1.0503,1.0503);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAoQgIgHAAgMQAAgVAigHIAVgFIAAgEQAAgQgRAAQgRAAgEAPIgPgDQAEgMAJgHQAKgHANAAQAgAAAAAeIAAAqQAAAJAJgCIAAAMQgUADgDgNQgJAMgSAAQgNAAgIgHgAgBADQgMACgFAEQgGAEAAAHQAAAOAQAAQAJAAAHgFQAIgGAAgIIAAgPg");
	this.shape_6.setTransform(19.8312,7.3337,1.0503,1.0503);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAiQgMgNAAgVQAAgUAMgNQALgNASAAQASAAALANQAJAMAAAUIAAADIhAAAQABAPAHAIQAIAJALAAQASAAAFgSIAOAFQgKAagbAAQgTAAgLgNgAgOgaQgHAGgCALIAvAAQAAgKgGgGQgGgIgKAAQgJAAgHAHg");
	this.shape_7.setTransform(10.615,7.36,1.0503,1.0503);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmA+IAAh7IAQAAIAABsIA9AAIAAAPg");
	this.shape_8.setTransform(1.8451,5.6008,1.0503,1.0503);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-2.2,-0.9,85.5,13.200000000000001), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape.setTransform(80.925,11.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghAzQgLgOAAgVQAAgTALgOQALgPATAAQAQAAALAMIAAgtIAVAAIAACBIgVAAIAAgKQgLAMgQAAQgTAAgLgPgAgQgEQgGAHAAANQAAAOAGAIQAGAJALAAQAKAAAHgHQAGgIAAgNIAAgFQAAgNgGgHQgHgHgKAAQgLAAgGAJg");
	this.shape_1.setTransform(73.275,6.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghAqQgJgJAAgMQgBgWAggHIAZgFIAAgCQAAgPgPABQgOgBgEAOIgVgEQAEgMAKgIQALgIAPAAQAQAAAJAIQALAJAAAPIAAAoQAAAIAHgBIAAAQQgWADgFgMQgJALgSAAQgNAAgJgHgAgFAHQgQAEAAAJQAAAMAOAAQAIAAAGgFQAHgFAAgIIAAgMg");
	this.shape_2.setTransform(63.5,8.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAkQgNgOABgWQgBgUANgOQANgOATAAQATAAAMANQALANAAAUIAAAHIhCAAQACAMAGAHQAHAHAJAAQASAAAEgPIATAHQgFAMgKAHQgMAHgOAAQgTAAgNgNgAgVgLIArAAQgBgTgTAAQgSAAgFATg");
	this.shape_3.setTransform(53.7,8.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASBBIAAg4QAAgUgQAAQgHAAgGAGQgGAFAAAJIAAA4IgWAAIAAiBIAWAAIAAAtQAKgMAPAAQAPAAAIAKQAJAJAAAOIAAA/g");
	this.shape_4.setTransform(43.825,6.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAqQgKgJAAgMQABgWAfgHIAZgFIAAgCQAAgPgPABQgOgBgEAOIgVgEQAEgMAKgIQALgIAPAAQAQAAAKAIQAJAJABAPIAAAoQgBAIAJgBIAAAQQgXADgEgMQgKALgRAAQgOAAgJgHgAgFAHQgQAEAAAJQAAAMAOAAQAIAAAHgFQAGgFAAgIIAAgMg");
	this.shape_5.setTransform(34,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHA5QgHgGAAgOIAAg0IgNAAIAAgSIANAAIAAgcIAUAAIAAAcIAUAAIAAASIgUAAIAAAwQAAAGAEACQACACAHAAIAJgBIAAASQgGACgJAAQgNAAgHgFg");
	this.shape_6.setTransform(22.575,6.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAkQgOgOAAgWQAAgUAOgOQAMgOASAAQAUAAAMANQAKANABAUIAAAHIhBAAQAAAMAIAHQAGAHAJAAQASAAAFgPIASAHQgKAagfAAQgTAAgMgNgAgUgLIAqAAQgBgTgUAAQgRAAgEATg");
	this.shape_7.setTransform(14.95,8.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrAmIAUgHQAFARASAAQAXAAAAgZIAAgGQgJAMgQAAQgTAAgMgOQgLgNAAgTQAAgUALgNQAMgOATAAQARAAAIAMIAAgKIAWAAIAABUQAAAUgNAMQgNALgTAAQgiAAgJgbgAgQgmQgGAIAAANQAAANAGAGQAHAIAKAAQAKAAAGgHQAHgHAAgMIAAgCQAAgNgHgHQgGgHgKAAQgKAAgHAHg");
	this.shape_8.setTransform(4.475,9.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,82.3,16.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgoAdIAQgNQAJAPARAAQASAAAAgLQAAgGgGgCIgQgEQgPgDgGgEQgLgGAAgNQAAgNALgJQAKgIAPAAQAaAAAMASIgOANQgJgOgQAAQgOAAAAALQAAAEAFADIANADQASAEAGAEQAMAGAAAOQAAAOgLAJQgLAIgRAAQgdAAgNgUg");
	this.shape.setTransform(130.475,8.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHA5QgHgGAAgOIAAg0IgNAAIAAgSIANAAIAAgcIAUAAIAAAcIAUAAIAAASIgUAAIAAAwQAAAGAEACQACACAHAAIAJgBIAAASQgGACgJAAQgNAAgHgFg");
	this.shape_1.setTransform(122.975,6.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAwIAAg3QAAgUgRAAQgGAAgGAFQgGAGAAAKIAAA2IgWAAIAAhdIAWAAIAAAKQAKgMAPAAQAPAAAIAJQAJAJAAAQIAAA9g");
	this.shape_2.setTransform(115.175,8.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAkQgNgOABgWQgBgUANgOQANgOATAAQATAAAMANQALANgBAUIAAAHIhBAAQABAMAIAHQAGAHAKAAQARAAAEgPIATAHQgLAagdAAQgUAAgNgNgAgVgLIArAAQgBgTgTAAQgSAAgFATg");
	this.shape_3.setTransform(105.25,8.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBBIAAheIAVAAIAABegAgKgqIAAgWIAVAAIAAAWg");
	this.shape_4.setTransform(98.175,6.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKBBIAAiBIAVAAIAACBg");
	this.shape_5.setTransform(93.775,6.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAkQgNgOAAgWQAAgVANgOQANgNATAAQAPAAALAHQAKAIAEALIgSAKQgGgSgQAAQgKAAgHAIQgHAJAAANQAAAOAHAIQAHAIAKAAQARAAAFgSIASAKQgEAMgKAHQgLAIgPAAQgTAAgNgNg");
	this.shape_6.setTransform(87.125,8.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAkQgMgOAAgWQAAgUAMgOQANgOATAAQATAAAMANQAKANAAAUIAAAHIhBAAQABAMAHAHQAHAHAKAAQARAAAEgPIATAHQgLAagdAAQgUAAgNgNgAgVgLIArAAQAAgIgGgFQgFgGgKAAQgQAAgGATg");
	this.shape_7.setTransform(74.1,8.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAWAAIAAAOQAGgPATAAIAGABIAAAVIgIAAQgKAAgHAGQgGAHAAALIAAAxg");
	this.shape_8.setTransform(66.625,8.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggAkQgNgOABgWQgBgVANgOQANgNATAAQAVAAAMANQANAOAAAVQAAAWgNAOQgMANgVAAQgTAAgNgNgAgQgWQgGAIgBAOQABAOAGAJQAGAIAKAAQALAAAHgIQAGgJAAgOQAAgNgGgJQgHgIgLAAQgKAAgGAIg");
	this.shape_9.setTransform(57.75,8.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAuAwIAAg3QAAgUgQAAQgIAAgGAFQgFAGAAAKIAAA2IgVAAIAAg3QAAgUgPAAQgIAAgGAFQgFAGAAAKIAAA2IgWAAIAAhdIAWAAIAAAKQAJgMAQAAQASAAAGANQAOgNAQAAQAOAAAJAJQAJAJAAAQIAAA9g");
	this.shape_10.setTransform(44.95,8.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgsBAIAAh9IAVAAIAAAKQALgMAPAAQATAAAMAOQALAOAAAVQAAAUgLAOQgMAOgTAAQgPAAgLgMIAAAqgAgRglQgGAHAAANIAAAGQAAAMAGAHQAHAHAKAAQALAAAHgIQAFgHABgOQgBgOgFgIQgHgIgLAAQgKAAgHAHg");
	this.shape_11.setTransform(28.7,9.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKBBIAAiBIAVAAIAACBg");
	this.shape_12.setTransform(20.875,6.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdAkQgNgOgBgWQABgUANgOQAMgOASAAQAVAAALANQALANAAAUIAAAHIhBAAQABAMAGAHQAHAHAJAAQASAAAFgPIASAHQgFAMgLAHQgLAHgOAAQgTAAgMgNgAgUgLIAqAAQgBgTgUAAQgRAAgEATg");
	this.shape_13.setTransform(13.85,8.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AASBBIAAg4QAAgUgRAAQgGAAgGAGQgGAFAAAJIAAA4IgWAAIAAiBIAWAAIAAAtQAKgMAPAAQAPAAAIAKQAJAJAAAOIAAA/g");
	this.shape_14.setTransform(3.975,6.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,134.6,16.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AggAkQgNgOABgWQgBgVANgOQANgNATAAQAUAAANANQANAOgBAVQABAWgNAOQgNANgUAAQgTAAgNgNgAgRgWQgGAJAAANQAAAOAGAJQAHAIAKAAQALAAAGgIQAHgJAAgOQAAgNgHgJQgGgIgLAAQgKAAgHAIg");
	this.shape.setTransform(112.3,8.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGA5QgIgGAAgOIAAg0IgNAAIAAgSIANAAIAAgcIAUAAIAAAcIAUAAIAAASIgUAAIAAAwQABAGADACQADACAGAAIAJgBIAAASQgGACgJAAQgOAAgFgFg");
	this.shape_1.setTransform(104.05,6.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiA/IAAgSIAHAAQAGAAADgBQACgCACgGIAEgJIgihaIAWAAIAWBBIAYhBIAVAAIgmBmQgIAZgZAAg");
	this.shape_2.setTransform(93.3,9.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiAqQgJgIABgNQAAgXAfgFIAZgGIAAgCQAAgOgPAAQgOAAgEANIgVgEQAEgNAKgHQALgIAPAAQAjAAAAAgIAAAoQAAAIAJgCIAAARQgXACgEgLQgKALgSAAQgNAAgKgHgAgFAHQgQADAAAKQAAAMAOgBQAIABAGgFQAHgFAAgIIAAgMg");
	this.shape_3.setTransform(84.2,8.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASAvIgSg9IgQA9IgTAAIgdhdIAXAAIARA9IARg9IARAAIARA9IAQg9IAWAAIgdBdg");
	this.shape_4.setTransform(73.2,8.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAqQgKgIAAgNQAAgXAggFIAZgGIAAgCQAAgOgPAAQgOAAgEANIgUgEQADgNAKgHQALgIAPAAQAjAAAAAgIAAAoQAAAIAJgCIAAARQgXACgFgLQgJALgSAAQgNAAgJgHgAgFAHQgQADAAAKQAAAMAOgBQAIABAGgFQAHgFAAgIIAAgMg");
	this.shape_5.setTransform(58.625,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoAdIAQgNQAJAPASAAQARAAAAgLQAAgGgGgCIgQgEQgPgDgHgEQgKgGAAgNQAAgNAKgJQALgIAPAAQAMAAALAFQAKAFAFAIIgOANQgJgOgQAAQgOAAAAALQAAAEAFADIANADQASAEAGAEQAMAGAAAOQAAAOgMAJQgKAIgRAAQgdAAgNgUg");
	this.shape_6.setTransform(45.85,8.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghAqQgJgIAAgNQAAgXAfgFIAZgGIAAgCQAAgOgPAAQgOAAgEANIgVgEQAFgNAKgHQAKgIAPAAQAQAAAKAIQAJAJABAPIAAAoQAAAIAIgCIAAARQgXACgEgLQgKALgSAAQgNAAgJgHgAgFAHQgQADAAAKQAAAMAOgBQAIABAHgFQAGgFAAgIIAAgMg");
	this.shape_7.setTransform(36.85,8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKBBIAAiBIAVAAIAACBg");
	this.shape_8.setTransform(26.35,6.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AArBBIAAhjIgiBjIgSAAIghhjIAABjIgWAAIAAiBIAgAAIAgBiIAhhiIAgAAIAACBg");
	this.shape_9.setTransform(16.3,6.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIAXAAIAABsIA8AAIAAAVg");
	this.shape_10.setTransform(4.2,6.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,116.9,16.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgeAkQgMgOAAgWQAAgUAMgOQANgOATAAQATAAALANQALANAAAUIAAAHIhBAAQABAMAHAHQAHAHAKAAQARAAAEgPIATAHQgLAagdAAQgUAAgNgNgAgVgLIArAAQAAgIgGgFQgFgGgKAAQgQAAgGATg");
	this.shape.setTransform(138.45,8.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoAdIAQgNQAJAPARAAQASAAAAgLQAAgGgGgCIgQgEQgPgDgHgEQgKgGAAgNQAAgNAKgJQAKgIAQAAQAMAAALAFQAKAFAFAIIgOANQgJgOgRAAQgNAAAAALQAAAEAFADIANADQARAEAHAEQAMAGAAAOQAAAOgMAJQgLAIgQAAQgdAAgNgUg");
	this.shape_1.setTransform(128.95,8.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKBBIAAheIAVAAIAABegAgKgqIAAgWIAVAAIAAAWg");
	this.shape_2.setTransform(122.5,6.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASAwIAAg3QAAgUgQAAQgHAAgGAFQgGAGAAAKIAAA2IgWAAIAAhdIAWAAIAAAKQAJgMAQAAQAPAAAIAJQAJAJAAAQIAAA9g");
	this.shape_3.setTransform(115.275,8.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrAmIAUgHQAFARASAAQAXAAAAgZIAAgGQgJAMgQAAQgTAAgMgOQgLgNAAgTQAAgUALgNQAMgOATAAQARAAAIAMIAAgKIAWAAIAABUQAAAUgNAMQgNALgTAAQgiAAgJgbgAgWgRQAAAbAXAAQAKAAAGgHQAHgHAAgMIAAgCQAAgNgHgHQgGgHgKAAQgXAAAAAcg");
	this.shape_4.setTransform(104.575,9.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfAkQgNgOAAgWQAAgVANgOQAMgNATAAQAVAAAMANQANAOAAAVQAAAWgNAOQgMANgVAAQgTAAgMgNgAgQgWQgGAIAAAOQAAAOAGAJQAGAIAKAAQALAAAHgIQAGgJAAgOQAAgNgGgJQgHgIgLAAQgKAAgGAIg");
	this.shape_5.setTransform(94.45,8.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAkQgNgOAAgWQAAgVANgOQANgNATAAQAPAAALAHQAKAIAEALIgTAKQgEgSgRAAQgKAAgHAIQgHAJAAANQAAAOAHAIQAHAIAKAAQARAAAEgSIATAKQgEAMgKAHQgLAIgPAAQgTAAgNgNg");
	this.shape_6.setTransform(84.925,8.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAkQgOgOAAgWQAAgUAOgOQAMgOASAAQAVAAALANQAKANAAAUIAAAHIhAAAQAAAMAIAHQAGAHAKAAQARAAAFgPIASAHQgKAageAAQgUAAgMgNgAgUgLIAqAAQgBgIgFgFQgFgGgKAAQgRAAgEATg");
	this.shape_7.setTransform(75.25,8.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAWAAIAAAOQAFgPAUAAIAGABIAAAVIgIAAQgLAAgGAGQgGAHAAALIAAAxg");
	this.shape_8.setTransform(67.825,8.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoAdIAQgNQAKAPAQAAQASAAAAgLQAAgGgGgCIgQgEQgPgDgGgEQgLgGAAgNQAAgNAKgJQALgIAPAAQAaAAAMASIgOANQgJgOgQAAQgOAAAAALQAAAEAFADIANADQASAEAGAEQAMAGAAAOQAAAOgLAJQgLAIgRAAQgdAAgNgUg");
	this.shape_9.setTransform(56.025,8.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAWAAIAAAOQAFgPAUAAIAGABIAAAVIgIAAQgLAAgGAGQgGAHAAALIAAAxg");
	this.shape_10.setTransform(48.925,8.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAkQgNgOgBgWQABgUANgOQAMgOASAAQAVAAALANQALANAAAUIAAAHIhCAAQACAMAGAHQAHAHAJAAQASAAAFgPIASAHQgLAageAAQgTAAgMgNgAgUgLIAqAAQgBgTgUAAQgRAAgEATg");
	this.shape_11.setTransform(40.3,8.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATBBIgcgrIgMAMIAAAfIgWAAIAAiBIAWAAIAABKIAjgnIAbAAIgkAkIAnA6g");
	this.shape_12.setTransform(31.575,6.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfAkQgOgOAAgWQAAgVAOgOQAMgNATAAQAVAAAMANQANAOAAAVQAAAWgNAOQgMANgVAAQgTAAgMgNgAgQgWQgGAIAAAOQAAAOAGAJQAGAIAKAAQALAAAGgIQAHgJAAgOQAAgNgHgJQgGgIgLAAQgKAAgGAIg");
	this.shape_13.setTransform(21,8.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAWAAIAAAOQAFgPAUAAIAGABIAAAVIgIAAQgLAAgGAGQgGAHAAALIAAAxg");
	this.shape_14.setTransform(13.375,8.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXA2IAAAKIgVAAIAAiBIAVAAIAAAtQALgMAQAAQATAAALAPQALAOAAATQAAAVgLAOQgLAPgTAAQgQAAgLgMgAgRgGQgGAHAAANIAAAFQAAANAGAIQAHAHAKAAQALAAAGgJQAGgIAAgOQAAgNgGgHQgGgJgLAAQgKAAgHAHg");
	this.shape_15.setTransform(4.525,6.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,142.8,16.4), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAkQgNgOgBgWQAAgUANgOQANgOASAAQAVAAALANQALANAAAUIAAAHIhCAAQABAMAHAHQAHAHAJAAQASAAAFgPIASAHQgLAageAAQgTAAgMgNgAgVgLIAqAAQAAgIgEgFQgGgGgKAAQgRAAgFATg");
	this.shape.setTransform(125.2,8.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsAmIAVgHQAEARASAAQAYAAAAgZIAAgGQgJAMgQAAQgUAAgLgOQgLgNAAgTQAAgUALgNQALgOAUAAQARAAAIAMIAAgKIAWAAIAABUQAAAUgNAMQgNALgUAAQghAAgKgbgAgWgRQAAAbAWAAQALAAAGgHQAGgHABgMIAAgCQgBgNgGgHQgGgHgLAAQgWAAAAAcg");
	this.shape_1.setTransform(114.7,10.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghApQgKgIAAgMQAAgXAggFIAZgGIAAgCQAAgPgPAAQgOAAgEAPIgVgFQAJgcAfAAQAjAAAAAhIAAAnQAAAIAJgCIAAARQgXADgFgMQgJALgSAAQgNAAgJgIgAgFAHQgQAEAAAJQAAALANAAQAJABAGgFQAHgFAAgIIAAgMg");
	this.shape_2.setTransform(104.925,8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrAmIAUgHQAFARASAAQAXAAAAgZIAAgGQgJAMgRAAQgSAAgMgOQgLgNAAgTQAAgUALgNQAMgOASAAQASAAAIAMIAAgKIAWAAIAABUQAAAUgNAMQgNALgTAAQgiAAgJgbgAgQgmQgGAIAAANQAAANAGAGQAHAIAKAAQAKAAAGgHQAGgHAAgMIAAgCQAAgNgGgHQgGgHgKAAQgKAAgHAHg");
	this.shape_3.setTransform(94.525,10.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGA5QgIgGAAgOIAAg0IgNAAIAAgSIANAAIAAgcIAUAAIAAAcIAVAAIAAASIgVAAIAAAwQAAAGAEACQADACAGAAIAJgBIAAASQgGACgJAAQgNAAgGgFg");
	this.shape_4.setTransform(86.2,7.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAwIAAheIAWAAIAAAOQAFgPAUAAIAGABIAAAVIgIAAQgLAAgGAGQgGAHAAALIAAAxg");
	this.shape_5.setTransform(80.225,8.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAkQgMgOAAgWQAAgVAMgOQANgNATAAQAUAAAMANQAOAOAAAVQAAAWgOAOQgMANgUAAQgTAAgNgNgAgQgWQgHAIAAAOQAAAOAHAJQAFAIALAAQALAAAGgIQAGgJAAgOQAAgOgGgIQgGgIgLAAQgKAAgGAIg");
	this.shape_6.setTransform(71.35,8.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAuAwIAAg3QgBgUgQAAQgHAAgFAFQgGAGAAAKIAAA2IgUAAIAAg3QAAgUgQAAQgIAAgGAFQgFAGAAAKIAAA2IgWAAIAAhdIAWAAIAAAKQAJgMARAAQARAAAGANQANgNARAAQAPAAAIAJQAJAJAAAQIAAA9g");
	this.shape_7.setTransform(58.5,8.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiA/IAAgSIAHAAQAFAAADgBQADgCACgGIAEgJIgihaIAWAAIAXBBIAWhBIAXAAIgnBmQgFAMgGAGQgIAHgNAAg");
	this.shape_8.setTransform(42.75,10.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKAvIgihdIAWAAIAWBDIAXhDIAWAAIgiBdg");
	this.shape_9.setTransform(33.625,8.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAvIgihdIAWAAIAWBDIAXhDIAWAAIgiBdg");
	this.shape_10.setTransform(24.5,8.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghApQgJgIAAgMQgBgXAggFIAZgGIAAgCQAAgPgPAAQgOAAgEAPIgVgFQAEgNAKgHQALgIAPAAQAkAAAAAhIAAAnQAAAIAHgCIAAARQgWADgFgMQgJALgSAAQgNAAgJgIgAgFAHQgQAEAAAJQAAALAOAAQAIABAGgFQAHgFAAgIIAAgMg");
	this.shape_11.setTransform(15.55,8.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcA7QgPgHgIgNIASgOQAOAWAWAAQAaAAgBgTQABgJgKgEIgWgHQgTgEgIgFQgNgJgBgQQAAgSAOgLQAOgLASAAQAgAAARAYIgRAPQgNgTgUAAQgJAAgHAFQgGAEAAAIQAAAIAHAEQAEACAQAEQAXAFAHAFQAPAIABASQAAATgPAMQgOALgVAAQgPAAgPgIg");
	this.shape_12.setTransform(5.15,6.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,129.6,16.6), null);


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
	mask.graphics.p("AqYCyIAAljIUxAAIAAFjg");
	mask.setTransform(66.45,17.825);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D1C49").s().p("AocCyQgzAAgkgkQgkgkAAgzIAAhsQAAg0AkgkQAkgkAzAAIQ5AAQAzAAAkAkQAkAkAAA0IAABsQAAAzgkAkQgkAkgzAAg");
	this.shape.setTransform(66.475,17.825);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0.1,0,132.8,35.7), null);


(lib.Symbol22copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A07EFF").s().p("AluDQIAAmfILdAAIAAGfg");
	this.shape.setTransform(36.725,20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22copy, new cjs.Rectangle(0,0,73.5,41.6), null);


(lib.Symbol5_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgxBgQgagLgNgVIAjgcQAJAOAQAKQAQAIARABQAQAAALgGQAMgHAAgMQgBgMgNgGQgGgDgegGQgggGgPgKQgWgNAAgdQAAgcAWgTQAXgSAiAAQAbAAAXALQAWALAMARIghAdQgRgeglAAQgNABgIAFQgJAHAAAKQAAAKALAFQAGADAWAFQAnAIAOAIQAaAOABAfQAAAegaAUQgYASgkAAQgcAAgZgLg");
	this.shape_9.setTransform(61.05,17.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPB7QgQgNAAgeIAAhxIgdAAIAAgoIAdAAIAAg8IAtAAIAAA8IArAAIAAAoIgrAAIAABqQAAAMAIAFQAFADAPAAIATgBIAAAnQgOADgTAAQgeAAgNgLg");
	this.shape_10.setTransform(44.975,14.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhCBOQgbgfgBgvQABgtAbgeQAcgfAqAAQArAAAYAeQAXAcAAArIAAAPIiPAAQADAaAPAQQAPAPAVAAQASAAAMgJQAOgIAEgPIApAOQgLAcgYAPQgXAPgfAAQgrAAgcgdgAgcg3QgNAKgFAVIBeAAQgBgSgKgLQgMgNgWAAQgSAAgNALg");
	this.shape_11.setTransform(28.7,17.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhaCNIAAkZIAyAAIAADtICDAAIAAAsg");
	this.shape_12.setTransform(9.125,14.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5_1, new cjs.Rectangle(0,0,70,28.6), null);


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
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhCBOQgcgfAAgvQAAgtAcgeQAcgfApAAQArAAAZAeQAYAcAAArIAAAPIiPAAQACAaAPAQQAPAPAVAAQASAAAMgJQANgIAFgPIApAOQgLAcgYAPQgXAPgfAAQgrAAgcgdgAgcg3QgNAKgFAVIBdAAQAAgSgLgLQgMgNgVAAQgRAAgOALg");
	this.shape_15.setTransform(41.075,17.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABeCNIAAjZIhKDZIgnAAIhKjZIAADZIgvAAIAAkZIBFAAIBIDXIBIjXIBEAAIAAEZg");
	this.shape_16.setTransform(14.075,14.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4_1, new cjs.Rectangle(0,0,50.6,28.6), null);


(lib.Symbol3_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAnBpIAAh5QAAgsgkAAQgQAAgMALQgNAOAAAUIAAB4IgvAAIAAjNIAvAAIAAAWQAWgaAiAAQAgAAASAUQASAVAAAhIAACHg");
	this.shape_11.setTransform(18.425,17.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYCNIAAkZIAxAAIAAEZg");
	this.shape_12.setTransform(2.5,14.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(0,0,27.1,28.2), null);


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

	// timeline functions:
	this.frame_65 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(65).call(this.frame_65).wait(1));

	// Layer_19 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_56 = new cjs.Graphics().p("AvhHVIAAj6IfDAAIAAD6g");
	var mask_graphics_57 = new cjs.Graphics().p("AvhHVIAAj6IfDAAIAAD6g");
	var mask_graphics_58 = new cjs.Graphics().p("AvhHVIAAj6IfDAAIAAD6g");
	var mask_graphics_59 = new cjs.Graphics().p("AvhHVIAAj6IfDAAIAAD6g");
	var mask_graphics_60 = new cjs.Graphics().p("AvhHVIAAj6IfDAAIAAD6g");
	var mask_graphics_61 = new cjs.Graphics().p("AvhHVIAAj6IfDAAIAAD6g");
	var mask_graphics_62 = new cjs.Graphics().p("AvhHVIAAj6IfDAAIAAD6g");
	var mask_graphics_63 = new cjs.Graphics().p("AvhHVIAAj6IfDAAIAAD6g");
	var mask_graphics_64 = new cjs.Graphics().p("AvhHVIAAj6IfDAAIAAD6g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(56).to({graphics:mask_graphics_56,x:-81.775,y:46.9}).wait(1).to({graphics:mask_graphics_57,x:-72.375,y:46.9}).wait(1).to({graphics:mask_graphics_58,x:-62.675,y:46.9}).wait(1).to({graphics:mask_graphics_59,x:-53.275,y:46.9}).wait(1).to({graphics:mask_graphics_60,x:-43.275,y:46.9}).wait(1).to({graphics:mask_graphics_61,x:-33.275,y:46.9}).wait(1).to({graphics:mask_graphics_62,x:-23.875,y:46.9}).wait(1).to({graphics:mask_graphics_63,x:-12.875,y:46.9}).wait(1).to({graphics:mask_graphics_64,x:-8.875,y:46.9}).wait(2));

	// Symbol_5
	this.instance = new lib.Symbol5();
	this.instance.setTransform(48.5,84.15,1,1,0,0,0,41.1,8.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).wait(10));

	// Layer_18 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_41 = new cjs.Graphics().p("AvhF/IAAj6IfDAAIAAD6g");
	var mask_1_graphics_42 = new cjs.Graphics().p("AvhF/IAAj6IfDAAIAAD6g");
	var mask_1_graphics_43 = new cjs.Graphics().p("AvhF/IAAj6IfDAAIAAD6g");
	var mask_1_graphics_44 = new cjs.Graphics().p("AvhF/IAAj6IfDAAIAAD6g");
	var mask_1_graphics_45 = new cjs.Graphics().p("AvhF/IAAj6IfDAAIAAD6g");
	var mask_1_graphics_46 = new cjs.Graphics().p("AvhF/IAAj6IfDAAIAAD6g");
	var mask_1_graphics_47 = new cjs.Graphics().p("AvhF/IAAj6IfDAAIAAD6g");
	var mask_1_graphics_48 = new cjs.Graphics().p("AvhF/IAAj6IfDAAIAAD6g");
	var mask_1_graphics_49 = new cjs.Graphics().p("AvhF/IAAj6IfDAAIAAD6g");
	var mask_1_graphics_50 = new cjs.Graphics().p("AvhF/IAAj6IfDAAIAAD6g");
	var mask_1_graphics_51 = new cjs.Graphics().p("AvhF/IAAj6IfDAAIAAD6g");
	var mask_1_graphics_52 = new cjs.Graphics().p("AvhF/IAAj6IfDAAIAAD6g");
	var mask_1_graphics_53 = new cjs.Graphics().p("AvhF/IAAj6IfDAAIAAD6g");
	var mask_1_graphics_54 = new cjs.Graphics().p("AvhF/IAAj6IfDAAIAAD6g");
	var mask_1_graphics_55 = new cjs.Graphics().p("AvhF/IAAj6IfDAAIAAD6g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_1_graphics_41,x:-82.775,y:38.3}).wait(1).to({graphics:mask_1_graphics_42,x:-71.975,y:38.3}).wait(1).to({graphics:mask_1_graphics_43,x:-67.975,y:38.3}).wait(1).to({graphics:mask_1_graphics_44,x:-54.975,y:38.3}).wait(1).to({graphics:mask_1_graphics_45,x:-38.975,y:38.3}).wait(1).to({graphics:mask_1_graphics_46,x:-27.975,y:38.3}).wait(1).to({graphics:mask_1_graphics_47,x:-21.875,y:38.3}).wait(1).to({graphics:mask_1_graphics_48,x:-10.875,y:38.3}).wait(1).to({graphics:mask_1_graphics_49,x:0.425,y:38.3}).wait(1).to({graphics:mask_1_graphics_50,x:4.425,y:38.3}).wait(1).to({graphics:mask_1_graphics_51,x:9.125,y:38.3}).wait(1).to({graphics:mask_1_graphics_52,x:19.125,y:38.3}).wait(1).to({graphics:mask_1_graphics_53,x:28.225,y:38.3}).wait(1).to({graphics:mask_1_graphics_54,x:34.725,y:38.3}).wait(1).to({graphics:mask_1_graphics_55,x:44.725,y:38.3}).wait(11));

	// Symbol_4
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(75.25,65.05,1,1,0,0,0,67.3,8.1);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({_off:false},0).wait(25));

	// Layer_17 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_30 = new cjs.Graphics().p("AvhEdIAAj6IfDAAIAAD6g");
	var mask_2_graphics_31 = new cjs.Graphics().p("AvhEdIAAj6IfDAAIAAD6g");
	var mask_2_graphics_32 = new cjs.Graphics().p("AvhEdIAAj6IfDAAIAAD6g");
	var mask_2_graphics_33 = new cjs.Graphics().p("AvhEdIAAj6IfDAAIAAD6g");
	var mask_2_graphics_34 = new cjs.Graphics().p("AvhEdIAAj6IfDAAIAAD6g");
	var mask_2_graphics_35 = new cjs.Graphics().p("AvhEdIAAj6IfDAAIAAD6g");
	var mask_2_graphics_36 = new cjs.Graphics().p("AvhEdIAAj6IfDAAIAAD6g");
	var mask_2_graphics_37 = new cjs.Graphics().p("AvhEdIAAj6IfDAAIAAD6g");
	var mask_2_graphics_38 = new cjs.Graphics().p("AvhEdIAAj6IfDAAIAAD6g");
	var mask_2_graphics_39 = new cjs.Graphics().p("AvhEdIAAj6IfDAAIAAD6g");
	var mask_2_graphics_40 = new cjs.Graphics().p("AvhEdIAAj6IfDAAIAAD6g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(30).to({graphics:mask_2_graphics_30,x:-82.525,y:28.475}).wait(1).to({graphics:mask_2_graphics_31,x:-67.525,y:28.475}).wait(1).to({graphics:mask_2_graphics_32,x:-60.525,y:28.475}).wait(1).to({graphics:mask_2_graphics_33,x:-49.925,y:28.475}).wait(1).to({graphics:mask_2_graphics_34,x:-39.925,y:28.475}).wait(1).to({graphics:mask_2_graphics_35,x:-25.925,y:28.475}).wait(1).to({graphics:mask_2_graphics_36,x:-11.625,y:28.475}).wait(1).to({graphics:mask_2_graphics_37,x:-2.725,y:28.475}).wait(1).to({graphics:mask_2_graphics_38,x:9.275,y:28.475}).wait(1).to({graphics:mask_2_graphics_39,x:15.775,y:28.475}).wait(1).to({graphics:mask_2_graphics_40,x:26.775,y:28.475}).wait(26));

	// Symbol_3
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(66.45,46.05,1,1,0,0,0,58.4,8.1);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).wait(36));

	// Layer_16 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_14 = new cjs.Graphics().p("AvhC+IAAj5IfDAAIAAD5g");
	var mask_3_graphics_15 = new cjs.Graphics().p("AvhC+IAAj5IfDAAIAAD5g");
	var mask_3_graphics_16 = new cjs.Graphics().p("AvhC+IAAj5IfDAAIAAD5g");
	var mask_3_graphics_17 = new cjs.Graphics().p("AvhC+IAAj5IfDAAIAAD5g");
	var mask_3_graphics_18 = new cjs.Graphics().p("AvhC+IAAj5IfDAAIAAD5g");
	var mask_3_graphics_19 = new cjs.Graphics().p("AvhC+IAAj5IfDAAIAAD5g");
	var mask_3_graphics_20 = new cjs.Graphics().p("AvhC+IAAj5IfDAAIAAD5g");
	var mask_3_graphics_21 = new cjs.Graphics().p("AvhC+IAAj5IfDAAIAAD5g");
	var mask_3_graphics_22 = new cjs.Graphics().p("AvhC+IAAj5IfDAAIAAD5g");
	var mask_3_graphics_23 = new cjs.Graphics().p("AvhC+IAAj5IfDAAIAAD5g");
	var mask_3_graphics_24 = new cjs.Graphics().p("AvhC+IAAj5IfDAAIAAD5g");
	var mask_3_graphics_25 = new cjs.Graphics().p("AvhC+IAAj5IfDAAIAAD5g");
	var mask_3_graphics_26 = new cjs.Graphics().p("AvhC+IAAj5IfDAAIAAD5g");
	var mask_3_graphics_27 = new cjs.Graphics().p("AvhC+IAAj5IfDAAIAAD5g");
	var mask_3_graphics_28 = new cjs.Graphics().p("AvhC+IAAj5IfDAAIAAD5g");
	var mask_3_graphics_29 = new cjs.Graphics().p("AvhC+IAAj5IfDAAIAAD5g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_3_graphics_14,x:-81.825,y:18.975}).wait(1).to({graphics:mask_3_graphics_15,x:-75.325,y:18.975}).wait(1).to({graphics:mask_3_graphics_16,x:-65.125,y:18.975}).wait(1).to({graphics:mask_3_graphics_17,x:-55.625,y:18.975}).wait(1).to({graphics:mask_3_graphics_18,x:-45.625,y:18.975}).wait(1).to({graphics:mask_3_graphics_19,x:-39.525,y:18.975}).wait(1).to({graphics:mask_3_graphics_20,x:-26.525,y:18.975}).wait(1).to({graphics:mask_3_graphics_21,x:-20.825,y:18.975}).wait(1).to({graphics:mask_3_graphics_22,x:-11.525,y:18.975}).wait(1).to({graphics:mask_3_graphics_23,x:-2.125,y:18.975}).wait(1).to({graphics:mask_3_graphics_24,x:8.075,y:18.975}).wait(1).to({graphics:mask_3_graphics_25,x:19.075,y:18.975}).wait(1).to({graphics:mask_3_graphics_26,x:28.475,y:18.975}).wait(1).to({graphics:mask_3_graphics_27,x:33.075,y:18.975}).wait(1).to({graphics:mask_3_graphics_28,x:41.975,y:18.975}).wait(1).to({graphics:mask_3_graphics_29,x:52.075,y:18.975}).wait(37));

	// Symbol_2
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(79.35,27.15,1,1,0,0,0,71.4,8.2);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(52));

	// Layer_15 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("AvhB9IAAj5IfDAAIAAD5g");
	var mask_4_graphics_1 = new cjs.Graphics().p("AvhB9IAAj5IfDAAIAAD5g");
	var mask_4_graphics_2 = new cjs.Graphics().p("AvhB9IAAj5IfDAAIAAD5g");
	var mask_4_graphics_3 = new cjs.Graphics().p("AvhB9IAAj5IfDAAIAAD5g");
	var mask_4_graphics_4 = new cjs.Graphics().p("AvhB9IAAj5IfDAAIAAD5g");
	var mask_4_graphics_5 = new cjs.Graphics().p("AvhB9IAAj5IfDAAIAAD5g");
	var mask_4_graphics_6 = new cjs.Graphics().p("AvhB9IAAj5IfDAAIAAD5g");
	var mask_4_graphics_7 = new cjs.Graphics().p("AvhB9IAAj5IfDAAIAAD5g");
	var mask_4_graphics_8 = new cjs.Graphics().p("AvhB9IAAj5IfDAAIAAD5g");
	var mask_4_graphics_9 = new cjs.Graphics().p("AvhB9IAAj5IfDAAIAAD5g");
	var mask_4_graphics_10 = new cjs.Graphics().p("AvhB9IAAj5IfDAAIAAD5g");
	var mask_4_graphics_11 = new cjs.Graphics().p("AvhB9IAAj5IfDAAIAAD5g");
	var mask_4_graphics_12 = new cjs.Graphics().p("AvhB9IAAj5IfDAAIAAD5g");
	var mask_4_graphics_13 = new cjs.Graphics().p("AvhB9IAAj5IfDAAIAAD5g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:-93.825,y:6.45}).wait(1).to({graphics:mask_4_graphics_1,x:-82.325,y:6.45}).wait(1).to({graphics:mask_4_graphics_2,x:-72.725,y:6.45}).wait(1).to({graphics:mask_4_graphics_3,x:-63.625,y:6.45}).wait(1).to({graphics:mask_4_graphics_4,x:-54.525,y:6.45}).wait(1).to({graphics:mask_4_graphics_5,x:-40.625,y:6.45}).wait(1).to({graphics:mask_4_graphics_6,x:-26.625,y:6.45}).wait(1).to({graphics:mask_4_graphics_7,x:-16.325,y:6.45}).wait(1).to({graphics:mask_4_graphics_8,x:-9.525,y:6.45}).wait(1).to({graphics:mask_4_graphics_9,x:-3.225,y:6.45}).wait(1).to({graphics:mask_4_graphics_10,x:7.375,y:6.45}).wait(1).to({graphics:mask_4_graphics_11,x:17.075,y:6.45}).wait(1).to({graphics:mask_4_graphics_12,x:27.375,y:6.45}).wait(1).to({graphics:mask_4_graphics_13,x:37.675,y:6.45}).wait(53));

	// Symbol_1
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(71.55,7.95,1,1,0,0,0,64.8,8.2);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,150.8,92.5);


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
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(66.45,17.8,1,1,0,0,0,66.5,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,132.9,35.7), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {over:0,out:6};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(5).call(this.frame_11).wait(1));

	// Layer_2
	this.instance = new lib.Symbol20();
	this.instance.setTransform(67.75,17.3,1,1,0,0,0,40.7,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:40.9,regY:6.3,scaleX:1.0414,scaleY:1.0414,x:68,y:17.4},6).to({regX:40.7,regY:6.2,scaleX:1,scaleY:1,x:67.75,y:17.3},5).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol19();
	this.instance_1.setTransform(66.4,17.8,1,1,0,0,0,66.4,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:66.3,scaleX:1.0414,scaleY:1.0414,x:66.45,y:17.95,alpha:0.5},6).to({regX:66.4,scaleX:1,scaleY:1,x:66.4,y:17.8,alpha:1},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,-0.6,138.4,37.2);


(lib.Symbol21copy2 = function(mode,startPosition,loop,reversed) {
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
	this.frame_61 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(61).call(this.frame_61).wait(1));

	// Layer_1
	this.instance = new lib.Symbol33();
	this.instance.setTransform(36.35,21.4,1,1,0,0,0,29.6,14.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).wait(47));

	// Layer_4
	this.instance_1 = new lib.Symbol22copy();
	this.instance_1.setTransform(1,20.8,0.0272,1,0,0,0,36.7,20.8);
	this.instance_1._off = true;
	var instance_1Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-2,-2,78,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({scaleX:1,x:36.7},11).wait(39));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(12).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(0,0,0,1,45,29,73,0), 11).wait(39));

	// Layer_9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxfEiIAApDMAi/AAAIAAJDg");
	mask.setTransform(181,13.025);

	// Symbol_5
	this.instance_2 = new lib.Symbol5_1();
	this.instance_2.setTransform(116.75,49.5,1,1,0,0,0,35,14.2);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({y:21.5},20,cjs.Ease.backOut).wait(19));

	// Symbol_4
	this.instance_3 = new lib.Symbol4_1();
	this.instance_3.setTransform(188.05,49.5,1,1,0,0,0,25.2,14.2);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).to({y:21.5},20,cjs.Ease.backOut).wait(14));

	// Symbol_3
	this.instance_4 = new lib.Symbol3_1();
	this.instance_4.setTransform(237.9,49.4,1,1,0,0,0,13.5,14.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33).to({_off:false},0).to({y:21.4},20,cjs.Ease.backOut).wait(9));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_1, startFrame:12, endFrame:12, x:-2, y:-2, w:78, h:46});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-2, y:-2, w:78, h:46});
	this.filterCacheList.push({instance: this.instance_1, startFrame:13, endFrame:23, x:-2, y:-2, w:78, h:46});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251.5,42);


(lib.Symbol21copy = function(mode,startPosition,loop,reversed) {
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

	// Layer_1
	this.instance = new lib.Symbol33();
	this.instance.setTransform(36.35,21.4,1,1,0,0,0,29.6,14.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).wait(41));

	// Layer_4
	this.instance_1 = new lib.Symbol22copy();
	this.instance_1.setTransform(1,20.8,0.0272,1,0,0,0,36.7,20.8);
	this.instance_1._off = true;
	var instance_1Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-2,-2,78,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({scaleX:1,x:36.7},11).wait(33));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(12).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 11).wait(33));

	// Layer_9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxfEiIAApDMAi/AAAIAAJDg");
	mask.setTransform(181,13.025);

	// Symbol_5
	this.instance_2 = new lib.Symbol5_1();
	this.instance_2.setTransform(116.75,49.5,1,1,0,0,0,35,14.2);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({y:21.5},20,cjs.Ease.backOut).wait(13));

	// Symbol_4
	this.instance_3 = new lib.Symbol4_1();
	this.instance_3.setTransform(188.05,49.5,1,1,0,0,0,25.2,14.2);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).to({y:21.5},20,cjs.Ease.backOut).wait(8));

	// Symbol_3
	this.instance_4 = new lib.Symbol3_1();
	this.instance_4.setTransform(237.9,49.4,1,1,0,0,0,13.5,14.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33).to({_off:false},0).to({y:21.4},20,cjs.Ease.backOut).wait(3));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_1, startFrame:12, endFrame:12, x:-2, y:-2, w:78, h:46});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-2, y:-2, w:78, h:46});
	this.filterCacheList.push({instance: this.instance_1, startFrame:13, endFrame:23, x:-2, y:-2, w:78, h:46});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251.5,42);


// stage content:
(lib.HEL004_300x250MB_Tram = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,275];
	// timeline functions:
	this.frame_0 = function() {
		var frequency = 60;
		stage.enableMouseOver(frequency);
				
		var canvas = document.querySelector("#canvas");
				
				
		canvas.addEventListener("mouseover", over.bind(this));
		canvas.addEventListener("mouseout", out.bind(this));
				  
			function over() {  
					//console.log("MOUSE OVER");
					this.ctaBtn.gotoAndPlay("over");
				//	console.log("test");
				}
				
			function out() {  
					//console.log("MOUSE OUT");
					this.ctaBtn.gotoAndPlay("out");
				}
	}
	this.frame_275 = function() {
		if (myCounter++>=1) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(275).call(this.frame_275).wait(1));

	// LMI
	this.LMI = new lib.Symbol21copy();
	this.LMI.name = "LMI";
	this.LMI.setTransform(136.6,209.25,0.8153,0.8149,0,0,0,125.7,20.9);
	this.LMI._off = true;

	this.LMI_1 = new lib.Symbol21copy2();
	this.LMI_1.name = "LMI_1";
	this.LMI_1.setTransform(136.6,209.15,0.8153,0.8149,0,0,0,125.7,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.LMI}]},76).to({state:[{t:this.LMI}]},86).to({state:[{t:this.LMI}]},16).to({state:[]},1).to({state:[{t:this.LMI_1}]},48).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.LMI).wait(76).to({_off:false},0).wait(86).to({alpha:0},16,cjs.Ease.quadOut).to({_off:true},1).wait(97));
	this.LMI.addEventListener("tick", AdobeAn.handleFilterCache);
	this.LMI_1.addEventListener("tick", AdobeAn.handleFilterCache);

	// Text
	this.instance = new lib.Symbol27();
	this.instance.setTransform(119.9,76.35,1,1,0,0,0,82.4,21.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(188).to({_off:false},0).to({x:117.9,alpha:1},18,cjs.Ease.quadOut).wait(70));

	// Layer_16
	this.instance_1 = new lib.Symbol23();
	this.instance_1.setTransform(104.4,78.75,1,1,0,0,0,76.7,25.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:1},16).wait(145).to({alpha:0},16,cjs.Ease.quadOut).to({_off:true},1).wait(97));

	// Logos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACAFIgCgEIgBAAIAAAEIgBAAIAAgIIACAAIACAAIABABIAAABIAAABIgBABIABAEgAgBAAIABAAIABAAIABgBIgBgBIgCAAg");
	this.shape.setTransform(98.025,31.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAHIgDgDIgBgEIABgDIADgDIADgBIAEABQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIABADIgBAEQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgDgBgAgCgFIgDACIgBADIABADIADADIACABIAEgBIACgDIABgDIgBgDIgCgCIgEgBg");
	this.shape_1.setTransform(97.975,31.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAqQgLgGgGgLQgGgKAAgPQAAgNAGgMQAGgLAKgGQALgGANAAQAOAAAKAGQAKAFAGAKQAGAKABAOIgBAHIAAABIhGAAIAAAAQAAAMAIAHQAHAHAKAAQAIAAAHgEQAGgFACgGIAVAAQgCAOgMAJQgMAKgRAAQgOAAgLgHgAAZgKQgBgKgHgFQgHgGgKAAQgIAAgHAGQgHAGgBAJIAwAAIAAAAg");
	this.shape_2.setTransform(74.675,27.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIAUAAIAAATg");
	this.shape_3.setTransform(85.25,20.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAwIAAhfIAUAAIAABfg");
	this.shape_4.setTransform(85.25,27.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggApQgJgHAAgOQAAgPAKgGQAKgIAVAAIAWAAIAAgFQAAgIgGgEQgFgFgKAAQgHAAgFAEQgGADgBAGIAAABIgVAAIAAgBQACgOALgIQAMgIAQAAQAUAAAKAJQAKAJAAARIAAA8IgSAAIgBgMQgFAGgHAEQgIAEgJAAQgQAAgKgIgAgPAJQgFAEAAAGQAAAHAEACQAGAEAHAAQAKAAAIgGQAHgHAAgLIAAgDIgXAAQgJAAgFAEg");
	this.shape_5.setTransform(91.875,27.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKBBIAAiBIAVAAIAACBg");
	this.shape_6.setTransform(81.55,25.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdBBIAAg4Ig6AAIAAA4IgVAAIAAiBIAVAAIAAA3IA6AAIAAg3IAWAAIAACBg");
	this.shape_7.setTransform(63.65,25.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA3AlQgGgBgDgDIgugxIgtAxQgDADgGABQgEAAgFgDQgEgEAAgFQABgGAEgDIA5gyQACgCADAAQAEAAACACIA5AyQAEADABAGQAAAFgEAEQgFADgEAAg");
	this.shape_8.setTransform(43.875,31.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhTAyQgIgBAAgHIAAgBQAAgIAIAAIA5gCIgngpQgCgCAAgEQAAgDADgCIAAgBQACgDAEAAQADAAACADIArAlIADg3QAAgEACgCQADgCACAAIAAAAQAIAAAAAIIADA3IArglQAFgFAGAFIAAABQADACAAADQAAAEgDACIgmApIA5ACQAIAAAAAIIAAABQAAAHgIABg");
	this.shape_9.setTransform(43.875,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(276));

	// CTA
	this.ctaBtn = new lib.Symbol10();
	this.ctaBtn.name = "ctaBtn";
	this.ctaBtn.setTransform(89.05,120.95,0.0956,0.0956,0,0,0,66.5,17.8);
	this.ctaBtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ctaBtn).wait(210).to({_off:false},0).to({regY:17.9,scaleX:0.7979,scaleY:0.7966,x:86.85,y:123.85},15,cjs.Ease.backOut).wait(51));

	// face
	this.instance_2 = new lib.Symbol29();
	this.instance_2.setTransform(237.6,25.9,0.5402,0.5402,0,0,0,78.2,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:78.4,scaleX:0.492,scaleY:0.492,x:239.25,y:31.7},162).to({regX:78.2,regY:0.6,scaleX:0.4868,scaleY:0.4868,x:239.35,y:32.3,alpha:0},16,cjs.Ease.quartOut).to({_off:true},1).wait(97));

	// lines
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.8,0,0,4).p("AAAzhMAAAAnD");
	this.shape_10.setTransform(17.1,125.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(0.8,0,0,4).p("A2GAAMAsNAAA");
	this.shape_11.setTransform(158.4,41.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(276));

	// Gradient
	this.instance_3 = new lib.Symbol35();
	this.instance_3.setTransform(150.05,125.05,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(162).to({alpha:0},16).to({_off:true},1).wait(97));

	// bg
	this.instance_4 = new lib.Symbol36();
	this.instance_4.setTransform(139.2,128.75,0.8351,0.8351,0,0,0,200.1,166.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:166.2,scaleX:0.7606,scaleY:0.7606,x:149.5,y:125.4},162).to({regY:166.3,scaleX:0.7525,scaleY:0.7525,x:150.6,y:125.05,alpha:0},16).to({_off:true},1).wait(97));

	// Background
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A07EFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_12.setTransform(150.0069,125.0057);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(162).to({_off:false},0).wait(114));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,114.9,321.7,153.1);
// library properties:
lib.properties = {
	id: 'B915F0BB2CAF214394D0C3C0B5CA43BE',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/face.png?1739969346965", id:"face"},
		{src:"images/Tram.jpg?1739969346965", id:"Tram"}
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