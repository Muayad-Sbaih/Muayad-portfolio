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



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);// helper functions:

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
	this.shape.graphics.f("#F2FDFF").s().p("AgPAnQgGgEgEgIQgDgGAAgJQAAgKADgGQAEgIAGgDQAGgEAIAAQAHAAAFAEQAFADACAEIAAghIALAAIAABTIgLAAIAAgKQgCAEgFADQgFADgHAAQgIAAgGgDgAgIgGQgDACgDAEQgCAFgBAHQABAEACAHQACAEAEADQAEACAFABQAFgBADgCQAFgCACgFQACgGAAgFIAAgBQAAgGgCgFQgCgEgFgCQgDgDgGAAQgEAAgEADg");
	this.shape.setTransform(59.45,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2FDFF").s().p("AgOAbQgHgEgDgHQgEgGAAgKQAAgJAEgGQADgHAIgEQAGgEAIAAQAJAAAGAEQAHAFACAGQAEAIAAAJIgtAAQAAAHACADQACAEAFADQAFACAEAAQAGAAAEgDQAEgCACgFIAKAFQgDAFgDADIgJAGQgFABgHAAQgJAAgGgEgAgGgTQgEACgDAEQgCADgBAEIAhAAQgBgEgBgDQgCgDgEgDIgIgCIgHACg");
	this.shape_1.setTransform(52.875,5.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2FDFF").s().p("AgEAjQgFgEAAgIIAAghIgKAAIAAgKIAKAAIAAgTIAKAAIAAATIARAAIAAAKIgRAAIAAAeQAAAGACABQADADAEAAIACgBIAEgCIAEAJIgFAEIgGAAQgJAAgEgFg");
	this.shape_2.setTransform(47.2,4.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2FDFF").s().p("AgPAeIAAg7IALAAIAAALQAEgFAEgDQAGgDAGAAIAAALIgKABQgFACgCAEQgDADAAAFIAAAhg");
	this.shape_3.setTransform(43.2,5.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2FDFF").s().p("AgTAbQgFgFgBgJQABgJAFgEQAGgFAMAAIAPAAIgBgGQgCgFgDgCQgDgCgFAAQgFAAgCACQgEABgCAFIgKgEIAFgHQADgDAFgDQAFgBAFAAQAJAAAFADQAGADADAHQACAGAAAJIAAAgIgKAAIgBgHIgBABQgFAHgKAAQgKAAgHgEgAgKAGQgDACAAAFQAAAEADACQAEADAFAAQAEAAAEgCQADgDACgDQACgEAAgFIAAgCIgNAAQgHAAgEADg");
	this.shape_4.setTransform(37.6,5.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2FDFF").s().p("AgEAjQgFgEAAgIIAAghIgKAAIAAgKIAKAAIAAgTIAKAAIAAATIARAAIAAAKIgRAAIAAAeQAAAGACABQADADAEAAIACgBIAEgCIAEAJIgGAEIgFAAQgJAAgEgFg");
	this.shape_5.setTransform(32.275,4.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2FDFF").s().p("AgKAqIgKgEIgGgGIgEgHIALgEQACAEAGAEQADADAIABQAIAAAGgDQAFgEAAgGQAAgFgEgEQgEgDgIgCIgJgCIgLgEQgFgDgCgEQgDgFAAgGQAAgMAHgGQAIgGANAAQAKAAAEACQAFACAFAFQAFAFABAEIgMAEQgCgFgEgEQgFgDgIAAQgGAAgFAEQgEAEAAAFQAAAGAEADIAJAEIAIACQANADAFAGQAHAGAAAIQAAAIgEAFQgCAFgIADQgGADgKAAQgGAAgFgBg");
	this.shape_6.setTransform(26.35,4.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2FDFF").s().p("AgEAjQgFgFAAgHIAAghIgKAAIAAgKIAKAAIAAgTIAKAAIAAATIARAAIAAAKIgRAAIAAAeQAAAFADACQACADAEAAIADgBIADgCIAEAJIgFAEIgGAAQgJAAgEgFg");
	this.shape_7.setTransform(17.375,4.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2FDFF").s().p("AgOAbQgHgEgDgHQgEgGAAgKQAAgJAEgGQADgHAHgEQAHgEAIAAQAJAAAGAEQAGAEADAHQAEAIAAAJIgtAAQAAAHACADQACAEAFADQAFACAEAAQAGAAAEgDQAEgCACgFIAKAFQgDAFgDADIgJAGQgFABgHAAQgJAAgGgEgAgHgTQgDACgDAEQgCADgBAEIAhAAQgBgEgBgDQgCgDgEgDIgIgCIgIACg");
	this.shape_8.setTransform(11.925,5.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2FDFF").s().p("AgTAmQgJgFgHgKQgFgKAAgNQAAgLAFgKQAHgLAJgFQAKgFAMAAQAHAAAGACQAHACAFAEIAIAJIgJAGIgHgGQgDgDgFgCQgEgCgFAAQgJAAgGAFQgHADgFAIQgEAIAAAIQAAAKAEAHQAFAIAHADQAHAFAIAAQAHAAAHgDQAGgEADgFQADgGAAgHIgUAAIAAgIIAgAAIAAAHQAAAKgFAJQgFAIgIAFQgIAEgMAAQgMAAgKgFg");
	this.shape_9.setTransform(4.1,4.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,62.4,8.7), null);


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
	this.shape.graphics.f("#383D47").s().p("AgpA5IAFgMQAKAHAJADQAJACAKAAQAPAAAHgHQAHgIAAgPIAAgSQgEAKgIAFQgKAFgLAAQgNAAgKgGQgLgGgFgMQgGgKgBgPQABgPAGgMQAFgLALgGQAKgGANAAQALgBAJAGQAJAFAEAJIAAgRIARAAIAABeQABAWgMAMQgMAMgXAAQgaAAgRgPgAgWgvQgJAKAAARQAAARAJAJQAIAKAOgBQAPABAIgKQAIgJAAgRQABgRgJgKQgIgJgPAAQgOAAgIAJg");
	this.shape.setTransform(172.55,21.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383D47").s().p("AAbA0IAAg9QAAgPgGgGQgFgGgMAAQgNAAgJAIQgIAJAAAOIAAA5IgRAAIAAhkIARAAIAAAQQAFgJAJgFQAJgFAKAAQAlAAAAApIAAA+g");
	this.shape_1.setTransform(160.875,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383D47").s().p("AgIBIIAAhkIAQAAIAABkgAgJg1IAAgTIATAAIAAATg");
	this.shape_2.setTransform(152.525,17.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383D47").s().p("AgZBEQgLgHgGgMQgFgMAAgQQAAgQAFgKQAGgNALgGQAKgGANAAQALgBAJAGQAIAFAFAJIAAg+IARAAIAACRIgRAAIAAgSQgFAJgIAGQgJAFgLAAQgNAAgKgGgAgWgGQgIAJAAASQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgSQAAgTgIgJQgIgKgOAAQgOAAgJAKg");
	this.shape_3.setTransform(143.75,17.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383D47").s().p("AgYAuQgLgGgGgMQgGgMAAgQQAAgPAGgMQAGgMALgGQALgHANAAQAOAAALAHQALAGAGAMQAGAMAAAPQAAAQgGAMQgGAMgLAGQgLAHgOAAQgNAAgLgHgAgWgbQgIAKAAARQAAATAIAKQAIAKAOAAQAPAAAIgKQAIgKAAgTQAAgRgIgKQgIgLgPAAQgOAAgIALg");
	this.shape_4.setTransform(132.275,19.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383D47").s().p("AgaBCQgPgJgJgRQgIgRAAgXQAAgWAIgRQAJgQAPgJQAPgKAUAAQAQAAAMAFQANAEAJAKIgGANQgLgJgKgEQgKgEgMAAQgYAAgNAPQgNAQAAAcQAAAdANAPQANAQAYABQAMAAAKgFQAKgDALgJIAGAMQgJAKgNAEQgMAFgQAAQgUAAgPgJg");
	this.shape_5.setTransform(119.55,17.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#383D47").s().p("AgaBEQgJgHgGgMQgGgMAAgQQAAgQAGgKQAGgNAJgGQALgGANAAQALgBAIAGQAKAFAEAJIAAg+IARAAIAACRIgRAAIAAgSQgEAJgKAGQgIAFgLAAQgNAAgLgGgAgVgGQgJAJAAASQAAATAJAKQAHAKAOAAQAPAAAIgKQAIgKAAgSQAAgTgIgJQgIgKgPAAQgOAAgHAKg");
	this.shape_6.setTransform(100.7,17.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#383D47").s().p("AAbA0IAAg9QAAgPgGgGQgFgGgMAAQgNAAgJAIQgIAJAAAOIAAA5IgRAAIAAhkIARAAIAAAQQAFgJAJgFQAJgFAKAAQAlAAAAApIAAA+g");
	this.shape_7.setTransform(89.075,19.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383D47").s().p("AgWAxQgJgEgEgHQgGgHAAgJQAAgLAHgHQAFgFAOgDQANgDAXAAIAEAAIAAgGQAAgNgFgGQgFgGgMAAQgRAAgRALIgFgMQAIgGALgDQALgEAJAAQATAAAKAKQAJAKAAAUIAAA/IgQAAIAAgRQgEAJgIAFQgIAFgKAAQgJAAgIgEgAgFAFQgKABgEAEQgEAEAAAHQAAAIAGAFQAGAFAIAAQAMAAAIgIQAIgIAAgOIAAgGIgDAAQgTAAgIACg");
	this.shape_8.setTransform(77.5,19.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#383D47").s().p("AAsBJIAAhDIhXAAIAABDIgRAAIAAiRIARAAIAABAIBXAAIAAhAIARAAIAACRg");
	this.shape_9.setTransform(64.275,17.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#383D47").s().p("AAbA0IAAg9QAAgPgGgGQgFgGgMAAQgNAAgJAIQgIAJAAAOIAAA5IgRAAIAAhkIARAAIAAAQQAFgJAJgFQAJgFAKAAQAlAAAAApIAAA+g");
	this.shape_10.setTransform(45.175,19.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#383D47").s().p("AgXAxQgIgEgEgHQgGgHAAgJQAAgLAHgHQAFgFAOgDQANgDAWAAIAFAAIAAgGQAAgNgFgGQgFgGgMAAQgQAAgSALIgFgMQAIgGALgDQALgEAJAAQAUAAAJAKQAKAKgBAUIAAA/IgQAAIAAgRQgEAJgIAFQgIAFgKAAQgKAAgIgEgAgGAFQgJABgEAEQgEAEAAAHQAAAIAGAFQAGAFAIAAQAMAAAIgIQAIgIAAgOIAAgGIgEAAQgSAAgJACg");
	this.shape_11.setTransform(33.6,19.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#383D47").s().p("AAbBJIAAg+QAAgOgGgGQgFgGgMAAQgNAAgJAIQgIAIAAAOIAAA6IgRAAIAAiRIARAAIAAA9QAFgJAJgFQAJgFAKAAQAlAAAAAoIAAA/g");
	this.shape_12.setTransform(22.375,17.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#383D47").s().p("AgIBJIAAiDIgzAAIAAgOIB3AAIAAAOIg0AAIAACDg");
	this.shape_13.setTransform(10.225,17.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(2,0,211.8,32.3), null);


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
	this.shape.graphics.f("#383D47").s().p("AgSAjQgJgFgFgIQgEgJAAgNQAAgLAEgJQAFgJAJgGQAIgEAKAAQALAAAJAEQAIAGAEAJQAFAJAAALQAAANgFAJQgEAIgIAFQgJAFgLABQgKgBgIgFgAgRgVQgGAIAAANQAAAPAGAHQAHAIAKAAQALAAAHgHQAFgJAAgOQAAgNgFgIQgHgHgLAAQgKAAgHAHg");
	this.shape.setTransform(252.2,15.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383D47").s().p("AgDAsQgHgHAAgNIAAgoIgPAAIAAgLIAPAAIAAgXIAMAAIAAAXIAWAAIAAALIgWAAIAAAnQAAASARAAIAHgBIgBALIgIAAQgOAAgGgHg");
	this.shape_1.setTransform(245.025,14.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383D47").s().p("AAVAoIAAgvQAAgLgFgFQgEgFgJAAQgKAAgGAGQgGAHAAALIAAAsIgOAAIAAhNIAOAAIAAANQADgIAHgDQAHgEAIAAQAcAAAAAfIAAAwg");
	this.shape_2.setTransform(237.75,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383D47").s().p("AgGA4IAAhNIANAAIAABNgAgHgoIAAgPIAPAAIAAAPg");
	this.shape_3.setTransform(231.35,13.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383D47").s().p("AgeAfIAEgKQAHAFAGACQAGACAIAAQAIAAAFgDQAEgDAAgGQAAgEgCgDQgDgCgHgCIgNgDQgKgCgFgEQgFgGAAgIQAAgLAIgGQAJgHAMABQAIAAAHACQAIADAEAFIgDAKQgLgKgNAAQgHAAgFADQgFADAAAGQAAAFAEACQACADAHABIALAEQAMACAFAFQAFAFAAAIQAAALgIAFQgJAGgOABQgSgBgMgJg");
	this.shape_4.setTransform(221.45,15.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383D47").s().p("AgkA3IAAhqIANAAIAAANQAEgIAGgEQAHgDAIAAQAKgBAIAGQAIAFAFAJQAEAJAAAMQAAAMgEAJQgFAIgIAFQgIAFgKABQgIAAgHgFQgGgDgEgIIAAAsgAgRgiQgGAHAAAOQAAAOAGAHQAHAIAKAAQALAAAHgIQAFgHABgOQgBgOgFgHQgHgJgLABQgKgBgHAJg");
	this.shape_5.setTransform(213.25,16.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#383D47").s().p("AgkA3IAAhqIANAAIAAANQAEgIAGgEQAHgDAIAAQAKgBAJAGQAHAFAEAJQAFAJAAAMQAAAMgFAJQgEAIgHAFQgJAFgKABQgIAAgHgFQgGgDgEgIIAAAsgAgRgiQgGAHAAAOQAAAOAGAHQAHAIAKAAQALAAAHgIQAFgHAAgOQAAgOgFgHQgHgJgLABQgKgBgHAJg");
	this.shape_6.setTransform(203.95,16.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#383D47").s().p("AAqA5IgNgeIg5AAIgNAeIgNAAIAxhxIALAAIAxBxgAgYAQIAxAAIgZg4g");
	this.shape_7.setTransform(193.225,13.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383D47").s().p("AgTA1IANgeIghhLIAOAAIAZA+IAbg+IANAAIguBpg");
	this.shape_8.setTransform(179.175,16.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#383D47").s().p("AgOAjQgJgFgEgIQgFgKAAgMQAAgLAFgJQAFgJAIgFQAJgGAKABQAIAAAIACQAHADAFAFIgFAKQgLgKgLABQgLgBgHAJQgGAHAAANQAAAPAGAHQAHAIALAAQALAAALgJIAFAKQgFAEgIADQgHADgIAAQgLgBgIgFg");
	this.shape_9.setTransform(171.425,15.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#383D47").s().p("AgRAlQgHgDgDgFQgEgGAAgGQAAgJAFgEQAEgFAKgBQALgDARAAIADAAIAAgFQAAgKgEgEQgEgEgJAAQgMgBgNAJIgFgJQAGgFAJgDQAIgCAHAAQAPgBAIAIQAHAIAAAPIAAAxIgNAAIAAgOQgDAHgGAEQgGAEgHAAQgIAAgGgEgAgEAEQgHABgEACQgDADAAAGQAAAGAFAEQAEAEAHABQAJAAAGgHQAGgGAAgLIAAgFIgDAAIgUACg");
	this.shape_10.setTransform(163.025,15.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#383D47").s().p("AggAsIAEgJQAIAFAHACQAHADAIgBQALAAAFgFQAGgHAAgLIAAgOQgDAHgHAEQgHAFgIAAQgLgBgIgEQgIgFgEgJQgEgHAAgMQAAgLAEgKQAEgIAIgFQAIgFALAAQAIAAAHAEQAHAEADAIIAAgOIANAAIAABHQAAASgJAJQgJAJgRAAQgUAAgOgLgAgRgkQgGAIAAANQAAANAGAHQAHAHAKAAQALAAAHgHQAGgHAAgNQAAgNgGgIQgHgHgLAAQgKAAgHAHg");
	this.shape_11.setTransform(153.975,16.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#383D47").s().p("AgYAeQgKgLAAgTQAAgLAFgJQAEgJAJgFQAIgGAJABQAQAAAJAKQAJAKAAASIAAADIg4AAQAAAOAHAHQAHAHALAAQAOAAALgJIAFAJQgGAFgIADQgHADgJAAQgRAAgLgLgAgOgXQgFAGgCAMIAtAAQgBgMgFgGQgGgGgKAAQgJAAgHAGg");
	this.shape_12.setTransform(145.3,15.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#383D47").s().p("AgiA5IAAhxIANAAIAABlIA4AAIAAAMg");
	this.shape_13.setTransform(137.275,13.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#383D47").s().p("AArAoIAAgvQAAgLgDgFQgEgFgIAAQgKAAgGAGQgFAHAAALIAAAsIgMAAIAAgvQAAgLgEgFQgEgFgIAAQgKAAgGAGQgFAHAAALIAAAsIgNAAIAAhNIANAAIAAANQADgIAGgDQAHgEAIAAQASAAAFAQQADgIAHgEQAHgEAJAAQAZAAAAAfIAAAwg");
	this.shape_14.setTransform(121.425,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#383D47").s().p("AgVAoIAAhNIANAAIAAAOQAGgOATgCIAEAAIABALIgJABQgMACgEAFQgFAHAAAJIAAAsg");
	this.shape_15.setTransform(112.35,15.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#383D47").s().p("AgTAjQgIgFgFgIQgEgJAAgNQAAgLAEgJQAFgJAIgGQAJgEAKAAQALAAAJAEQAIAGAEAJQAFAJAAALQAAANgFAJQgEAIgIAFQgJAFgLABQgKgBgJgFgAgRgVQgGAIAAANQAAAPAGAHQAHAIAKAAQALAAAHgHQAFgJAAgOQAAgNgFgIQgHgHgLAAQgKAAgHAHg");
	this.shape_16.setTransform(104.5,15.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#383D47").s().p("AgLA5IAAhDIgPAAIAAgKIAPAAIAAgDQAAgPAIgIQAHgIAQgBIAGgBIABALIgHAAQgKABgEAFQgFAEAAAKIAAAFIAWAAIAAAKIgWAAIAABDg");
	this.shape_17.setTransform(97.625,13.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#383D47").s().p("AgeAfIAFgKQAGAFAGACQAGACAIAAQAIAAAFgDQAFgDAAgGQgBgEgDgDQgCgCgIgCIgLgDQgKgCgGgEQgFgGAAgIQAAgLAIgGQAIgHANABQAIAAAHACQAHADAGAFIgFAKQgKgKgNAAQgHAAgFADQgFADABAGQAAAFACACQADADAGABIANAEQAKACAGAFQAFAFAAAIQAAALgIAFQgIAGgOABQgTgBgMgJg");
	this.shape_18.setTransform(90.9,15.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#383D47").s().p("AAVAoIAAgvQAAgLgEgFQgFgFgJAAQgKAAgGAGQgHAHAAALIAAAsIgNAAIAAhNIANAAIAAANQAEgIAHgDQAHgEAHAAQAcAAAAAfIAAAwg");
	this.shape_19.setTransform(82.55,15.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#383D47").s().p("AgRAlQgHgDgDgFQgEgGAAgGQAAgJAFgEQAEgFAKgBQALgDARAAIADAAIAAgFQAAgKgEgEQgEgEgJAAQgMgBgNAJIgFgJQAGgFAJgDQAIgCAHAAQAPgBAIAIQAHAIAAAPIAAAxIgNAAIAAgOQgDAHgGAEQgGAEgHAAQgIAAgGgEgAgEAEQgHABgEACQgDADAAAGQAAAGAFAEQAEAEAHABQAJAAAGgHQAGgGAAgLIAAgFIgDAAIgUACg");
	this.shape_20.setTransform(73.625,15.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#383D47").s().p("AgVAoIAAhNIANAAIAAAOQAGgOATgCIAEAAIABALIgJABQgLACgFAFQgFAHAAAJIAAAsg");
	this.shape_21.setTransform(67.25,15.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#383D47").s().p("AgGA5IAAhlIgnAAIAAgMIBbAAIAAAMIgnAAIAABlg");
	this.shape_22.setTransform(59.1,13.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(52.3,0,211.8,25.8), null);


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
	this.shape.graphics.f("#F1592D").s().p("AiMDlIAAnIIB4AAIAABUQAbgpAngVQAvgXAwAAIAAB1QgsAAgjAKQglAKgXAXQgVAWgBAiIAADxg");
	this.shape.setTransform(414.475,42.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1592D").s().p("Ah2DRQg0gegeg3Qgdg2AAhGQAAhFAeg2QAfg3A1geQA3geBDAAQA8gBAzAgQAzAgAfA9QAeA8AABWIlOAAQADAbAOAVQARAZAbAOQAaANAfgBQAmAAAXgQQAXgPANgaIBsAqQgSAmggAdQgdAbgrAPQgrAOg1ABQhDgBg0gegAgoh/QgZAKgQATQgOAQgCAaIDFAAQgCgagNgQQgPgTgXgKQgWgJgVAAQgUAAgYAJg");
	this.shape_1.setTransform(370.275,42.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1592D").s().p("AgzEMQgngmAAhFIAAjcIhKAAIAAhnIBKAAIAAiOIB4AAIAACOIByAAIAABnIhyAAIAADBQAAAeANAPQANAPAYAAQAJAAALgEQALgFAMgIIAqBbQgWAQgbALQgbAKgbAAQhKAAgnglg");
	this.shape_2.setTransform(326.35,35.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1592D").s().p("AhMDjQgmgOgegZQgcgZgRglIBngwQAOAXAYAPQAXARAfgBQAeAAAQgIQARgJAAgQQgBgQgNgIQgOgIgWgGIgpgLQhCgRgmglQgmglABgyQAAhHAtgmQAugmBRAAQArgBAlANQAkANAbAXQAbAXAKAeIhkAuQgFgSgZgMQgagMgYABQgYgBgNALQgNALAAASQAAANANAGQANAJAWAFIA8AOQAtAMAbAXQAaAYANAdQAMAeAAAdQAAApgYAgQgZAfgpARQgoARg2ABQgqAAgogNg");
	this.shape_3.setTransform(287.75,42.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1592D").s().p("AiiDLQgtgkAAhDQAAhJAxglQAyglBYAAIBqAAQgCgNgEgMQgIgcgTgRQgSgQghAAQgcAAgYANQgXAMgRAbIhqglQANgcAZgdQAXgbApgSQAogTA4ABQBGgBAuAbQAuAbAWAwQAXAvgBBDIgDD8IhwAAIgCg2IgIAMQgjA0hSABQhTgBgtgkgAg9A5QgXAOAAAZQAAAUATAMQARALAiAAQAdAAAXgOQAYgOANgXQAOgVAAgYIAAgBIhEAAQg6AAgYAPg");
	this.shape_4.setTransform(240.8271,42.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1592D").s().p("AjMFAIAAp/IGZAAIAAByIkcAAIAACaIDsAAIAABxIjsAAIAAECg");
	this.shape_5.setTransform(194.85,33.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1592D").s().p("ABcDlIhbiMIhcCMIiQAAICqjtIiejbICOAAIBRB6IBSh6ICPAAIieDcICpDsg");
	this.shape_6.setTransform(121.175,42.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1592D").s().p("AiIEgQg8grghhKQgihJAAhiQAAhhAihJQAihLA7gqQA7grBNAAQBOAAA6ArQA9ArAiBKQAhBJAABhQAABighBJQgiBKg8ArQg7ArhOAAQhNAAg7grgAhJi+QggAdgSAxQgSAyAAA+QAAA/ASAyQASAxAhAcQAgAcAoAAQApAAAggcQAggcAUgxQARgxABhAQgBg/gRgxQgTgxghgdQgggbgpAAQgpAAggAbg");
	this.shape_7.setTransform(67.05,33.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F1592D").s().p("AAIFAIAAnfQgaASgbAMQgnAQgqgDIAAhyQAWACAbgNQAZgMAbgXQAZgVAUgWIABABIBqAAIAAJ+g");
	this.shape_8.setTransform(15.925,33.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(3.2,0,425.40000000000003,66.2), null);


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
	this.shape.graphics.f("#000000").s().p("AgJAeIgJgFQgEgEgCgEIAOgHQABADAEACQACACAEAAIAGgBQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgEgCIgFgBQgIgCgGgFQgFgGAAgFQAAgKAGgEQAGgFAKAAIALABQAFACADADQADADACAEIgNAGQgBgDgDgBQgDgCgEAAQgCAAgCACQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABIACACIAMAEQAFABAEADQAEADABAEIACAHQAAAFgDAFQgEAEgFACQgEACgIAAg");
	this.shape.setTransform(242.8369,47.1201,2.0026,2.001);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAbQgGgDgFgIQgDgGAAgKQAAgJAEgGQADgIAIgDQAGgEAJAAQAIAAAGAEQAHADAEAJQAEAJAAAJIgrAAQABAEABACQACADAEACQADACAEAAQAFAAADgCQADgCABgDIAPAFIgHAJQgFAEgEABQgGACgHAAQgJAAgGgEgAgFgQIgFAEIgCAFIAZAAIgCgFQgCgDgDgBQgCgBgEAAIgFABg");
	this.shape_1.setTransform(230.6213,47.1201,2.0026,2.001);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNAbQgIgDgEgIQgEgGAAgKQAAgJAEgGQAEgHAHgEQAHgEAJAAQAKAAAGAEQAHAEAEAJIgPAFQgBgDgEgDIgIgCIgHACQgDADgCADQgCAEAAAEQAAAFACAEQACADAEACQADADADAAQAEAAAEgDQADgCADgEIAPAGQgEAJgHAEQgIAEgJAAQgJAAgGgEg");
	this.shape_2.setTransform(217.4044,47.1201,2.0026,2.001);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAMAfIAAgfQAAgFgCgEQgBgDgCgBIgGgCQgGAAgDAEQgDAEAAAHIAAAfIgQAAIAAg8IAPAAIABAJQACgEADgCQAFgDAGAAQAJAAADACQAFADADAGQADAGAAAJIAAAig");
	this.shape_3.setTransform(203.9872,46.97,2.0026,2.001);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOAbQgHgDgEgIQgEgHAAgJQAAgIAEgHQAEgIAHgDQAGgEAJAAQAJAAAGAEQAHAEADAIQAEAHAAALIgrAAQABADACADQACAEADABQAEACADAAQAFAAADgCQADgCACgDIAOAFQgCAFgFAEQgEAEgFABQgFACgIAAQgIAAgGgEgAgEgQQgDABgDADQgBACgBADIAZAAQAAgDgCgCIgFgEIgFgBIgFABg");
	this.shape_4.setTransform(190.4699,47.1201,2.0026,2.001);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHAsIAAg7IAPAAIAAA7gAgFgbQgDgDAAgDQAAgEADgDQADgDACAAQAEAAADADQACADAAAEQAAADgCADQgEADgDAAQgCAAgDgDg");
	this.shape_5.setTransform(180.5572,44.2686,2.0026,2.001);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSAeIAAg7IARAAIAAALQADgGAEgCQAGgDAGAAIAAAPIgKABQgFACgDADQgBADAAAEIAAAfg");
	this.shape_6.setTransform(173.398,47.07,2.0026,2.001);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPAbQgFgDgFgIQgEgGAAgKQAAgJAEgGQAEgIAHgDQAGgEAJAAQAJAAAFAEQAIAEADAIQAEAHAAALIgrAAQAAADACADQADADADACQAEACADAAQAGAAACgCQADgCABgDIAPAFQgCAFgFAEQgFAEgFABQgEACgIAAQgIAAgHgEgAgFgQQgCABgCADIgDAFIAZAAQAAgDgCgCQgCgDgDgBIgFgBIgGABg");
	this.shape_7.setTransform(161.7832,47.1201,2.0026,2.001);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdAqIAAhTIAOAAIABAJIAFgGQAFgDAIAAQAHAAAHADQAFAEAEAHQAEAHAAAJQAAALgEAFQgDAHgGAFQgHADgHAAQgIAAgFgDIgEgGIAAAfgAgHgZIgFAGIgBAIIAAABQAAAFABADIAFAFQADACAEAAQAEAAADgCQAEgCABgDQACgDAAgGQAAgEgBgEQgDgEgDgCQgDgCgEAAQgDAAgEACg");
	this.shape_8.setTransform(148.1657,49.3712,2.0026,2.001);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAMAeIgMgSIgLASIgTAAIAWgeIgVgdIATAAIAKAQIALgQIATAAIgVAdIAWAeg");
	this.shape_9.setTransform(134.1478,47.07,2.0026,2.001);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAqIAAhTIA1AAIAAAPIgkAAIAAAUIAeAAIAAANIgeAAIAAAUIAkAAIAAAPg");
	this.shape_10.setTransform(120.7306,44.6688,2.0026,2.001);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJAnIgFgGIAAAIIgQAAIAAhTIAQAAIAAAhIAFgGQAFgEAIAAQAIAAAFAEQAHAEADAHQADAFABAKQgBAKgDAHQgCAGgIAFQgFAEgIAAQgIAAgFgEgAgHgCQgDACgCADQgCADAAAFIAAABQAAAFACADQACADADADQADACAEAAQAEAAADgCIAFgGQACgDAAgGQAAgFgCgDQgCgDgDgCQgDgCgEAAQgFAAgCACg");
	this.shape_11.setTransform(101.0054,44.8189,2.0026,2.001);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgPAbQgGgDgEgIQgEgHAAgJQAAgIAEgHQAEgIAHgDQAGgEAJAAQAJAAAGAEQAHAEADAIQAEAJAAAJIgrAAIACAGQACAEAEABQAEACADAAQAFAAADgCQADgCACgDIAOAFQgCAFgFAEQgEAEgFABQgFACgIAAQgIAAgHgEgAgEgQQgDABgDADQgBACgBADIAZAAQAAgDgCgCIgFgEIgFgBIgFABg");
	this.shape_12.setTransform(86.9374,47.1201,2.0026,2.001);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAQAqIgQg6IgPA6IgSAAIgYhTIAQAAIARA7IAQg7IAQAAIARA6IARg6IAQAAIgZBTg");
	this.shape_13.setTransform(69.3649,44.6688,2.0026,2.001);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgPAbQgGgDgFgIQgDgGAAgKQAAgJAEgGQADgIAIgDQAGgEAJAAQAIAAAGAEQAHADAEAJQAEAJAAAJIgrAAQABAEABACQACAEAEABQADACAEAAQAFAAADgCQADgCABgDIAPAFIgHAJQgFAEgEABQgGACgHAAQgJAAgGgEgAgFgQIgFAEIgCAFIAZAAIgCgFQgCgDgDgBIgGgBIgFABg");
	this.shape_14.setTransform(273.6764,21.1558,2.0026,2.001);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHAeIgZg7IAQAAIAQApIAQgpIARAAIgZA7g");
	this.shape_15.setTransform(260.6097,21.1058,2.0026,2.001);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHAsIAAg7IAPAAIAAA7gAgFgbQgDgDAAgDQAAgEADgDQACgDADAAQAEAAACADQADADAAAEQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_16.setTransform(250.7471,18.3044,2.0026,2.001);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJAeIgJgFQgEgEgCgEIAOgHIAFAFQADACADAAIAGgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgEgCIgFgBQgIgCgGgFQgEgFAAgGQgBgKAHgEQAFgFAKAAIALABQAGACACADQADACACAFIgNAGQgBgDgDgBIgHgCQgCAAgBACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIACACIALAEQAFABAEADIAGAHIABAHQAAAFgDAFQgEAEgEACQgGACgHAAg");
	this.shape_17.setTransform(242.086,21.1558,2.0026,2.001);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAMAfIAAgfQAAgFgCgEQgCgDgCgBQgCgCgDAAQgGAAgDAEQgDADAAAHIAAAgIgQAAIAAg8IAPAAIABAIQACgDADgCQAFgDAGAAQAJAAADACQAFADADAGQADAGAAAKIAAAhg");
	this.shape_18.setTransform(229.7201,21.0057,2.0026,2.001);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgPAbQgHgDgEgIQgEgGAAgKQAAgJAEgGQADgIAIgDQAGgEAJAAQAKAAAGAEQAHADAEAIQAEAHAAAIQAAAJgEAHQgFAIgGADQgGAEgKAAQgJAAgGgEgAgHgOQgEADgBADQgCAEAAAEQAAAFACAEQABADAEADQADACAEAAQAFAAADgCQADgCACgEQACgEAAgFQAAgEgCgEQgCgDgDgDQgEgCgEAAQgEAAgDACg");
	this.shape_19.setTransform(215.8023,21.1558,2.0026,2.001);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeAqIAAhTIAQAAIAAAJIAFgGQAFgDAIAAQAJAAAFADQAFAEAFAHQADAHAAAJQAAAKgDAGQgEAHgGAFQgFADgJAAQgIAAgFgDIgEgGIAAAfgAgHgZIgFAGIgBAIIAAABQAAAFABADIAFAFQADACAEAAQAFAAACgCQAEgCACgDQABgDAAgGQAAgEgBgEQgDgEgDgCQgCgCgFAAQgEAAgDACg");
	this.shape_20.setTransform(201.9346,23.4069,2.0026,2.001);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJAeIgJgFQgEgEgCgEIAOgHQABADAEACQACACAEAAIAGgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIgEgCIgFgBQgIgCgGgFQgFgGAAgFQAAgKAGgEQAGgFAKAAIALABQAFACADADQADADACAEIgNAGQgBgDgDgBQgDgCgEAAQgCAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIACACIAMAEQAFABAEADQAEADABAEIACAHQAAAFgDAFQgEAEgFACQgFACgHAAg");
	this.shape_21.setTransform(188.8678,21.1558,2.0026,2.001);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgPAbQgGgDgFgIQgDgGAAgKQAAgJAEgGQADgIAIgDQAGgEAJAAQAIAAAGAEQAHADAEAJQAEAJAAAJIgrAAQAAADACADQACADAEACQADACAEAAQAFAAADgCQADgCABgDIAPAFQgDAFgEAEQgFAEgEABQgGACgHAAQgJAAgGgEgAgFgQIgFAEIgCAFIAZAAQgBgDgBgCQgCgDgDgBQgCgBgEAAIgFABg");
	this.shape_22.setTransform(176.6522,21.1558,2.0026,2.001);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAOAqIgQgeIgNAAIAAAeIgQAAIAAhTIAfAAQAHAAAIADQAHAEADAGQAEAHAAAHQAAAIgEAGQgEAGgHADIgBABIATAggAgPgCIAPAAQADAAADgBQADgBABgDIACgHQAAgEgEgFQgEgDgFAAIgOAAg");
	this.shape_23.setTransform(162.6343,18.7046,2.0026,2.001);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgLAOIAHgbIAQAAIgMAbg");
	this.shape_24.setTransform(145.5123,27.0587,2.0026,2.001);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAMAfIAAgfQAAgFgBgEQgCgDgCgBQgCgCgEAAQgFAAgEAEQgDAEAAAGIAAAgIgQAAIAAg8IAPAAIABAIQACgDAEgCQAFgDAGAAQAHAAAFACQAFADACAGQADAFAAALIAAAhg");
	this.shape_25.setTransform(135.6998,21.0057,2.0026,2.001);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgSAeIAAg7IARAAIAAALQACgFAGgDQAFgDAGAAIAAAPIgKABQgFACgDADQgBADAAAEIAAAfg");
	this.shape_26.setTransform(124.7358,21.1058,2.0026,2.001);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgPAbQgGgDgEgIQgEgGAAgKQAAgJAEgGQADgHAIgEQAGgEAJAAQAIAAAGAEQAHADAEAJQAEAJAAAJIgrAAQABAEABACQACAEAEABQADACAEAAQAFAAADgCIAFgFIAOAFQgDAFgEAEQgFAEgEABQgGACgHAAQgJAAgGgEgAgFgQIgFAEIgCAFIAZAAIgCgFIgFgEIgGgBg");
	this.shape_27.setTransform(113.1709,21.1558,2.0026,2.001);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgQAnQgHgEgDgHQgEgHAAgKQAAgKAEgFQAEgIAGgDQAFgEAIAAQAIAAAFAEIAEAFIAAggIAQAAIAABTIgOAAIgBgIIgFAGQgFAEgIAAQgIAAgFgEgAgGgCQgEACgBADQgCADAAAFQAAAGACADQABADAEADQAEACADAAQAEAAADgCIAFgGQABgDAAgFIAAgBIgBgIIgFgFQgDgCgEAAQgEAAgDACg");
	this.shape_28.setTransform(98.9027,18.8546,2.0026,2.001);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgPAbQgHgDgEgIQgEgGAAgKQAAgJADgGQAFgIAHgDQAGgEAJAAQAKAAAGAEQAHADAEAIQAEAHAAAIQAAAJgEAHQgFAIgGADQgGAEgKAAQgJAAgGgEgAgHgOQgEADgBADQgCAEAAAEQAAAFACAEQABADAEADQADACAEAAQAFAAADgCQADgDACgDQACgEAAgFQAAgEgCgEQgCgDgDgDQgEgCgEAAQgEAAgDACg");
	this.shape_29.setTransform(85.1351,21.1558,2.0026,2.001);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAaAqIAAg5IgaAlIgZglIAAA5IgQAAIAAhTIASAAIAXAkIAZgkIARAAIAABTg");
	this.shape_30.setTransform(67.8129,18.7046,2.0026,2.001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(52.3,0,228.7,60.7), null);


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
	this.shape.graphics.f("#282560").s().p("AATAYIgDgcIgNAcIgEAAIgOgcIgDAcIgHAAIACgvIAIAAIAPAkIAOgkIAJAAIADAvg");
	this.shape.setTransform(602.675,37.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282560").s().p("AgFAYIAAgoIgQAAIAAgHIAqAAIAAAHIgRAAIAAAog");
	this.shape_1.setTransform(597.9,37.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F49021").s().p("AiCDUIBoknIAhhHQANgaAYgPQAYgPAdAAIAjAAIAAF7QgdANgNAeg");
	this.shape_2.setTransform(30.95,21.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#282560").s().p("AimDtQgigJgNgfQgPgiATgsICUllIDsAAQALAkAjAOIAAGpIi1AAIhjABIgtABQg6AAgEgCg");
	this.shape_3.setTransform(22.0989,71.2563);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F05A2B").s().p("AjtDqIAAmoQAhgMAMggICRAAQEcABABDpQgBB3hOA7QhLA5iOgBg");
	this.shape_4.setTransform(73.45,71.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F51B5").s().p("AifDTQgMgfgggKIAAl7ICkAAQB5gBA+A6QA7A2ABBhQAABhg+A5Qg/A6htAAg");
	this.shape_5.setTransform(70,21.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#282560").s().p("AxNHhIAAq3IBYAAIAAAfIACAAQAUgOAOgSQAUgKBSAAQBkAABBBCQBEBGAABwQAABzhKBGQhGBGhrAAQg9AAg5gaIgCAAIAADlgAt8DJQBIABAtgwQAsgvAAhKQAAhKgrgyQgtg1hGAAQhGAAg2ArIAAELIgBAAQA3AfBDAEgA5VHhIAAq3IBYAAIAAAfIACAAQATgOAPgSQAUgKBSAAQBkAABBBCQBEBGAABwQAAByhJBHQhIBGhqAAQg+AAg4gaIgCAAIAADlgA39hlIAAELQA0AfBEAEQBJABAsgwQAsgvABhKQAAhKgsgyQgsg1hHAAQhFAAg2ArgAZCDQQhLhHABhvQAAhsBLhJQBIhFBcAAQBeAAA9A7QBABAABBtQACAMgEAfIAAgBIlwAAQAJBGAxAnQAvAmBIAAQBcgBBLg7IAABfQgfAbgTAGQgaAMhgAAQhyAAhJhFgAaKhzQgsAigMA/IEbAAQgFhCgrgiQglgdgyAAIgBAAQgzABgoAfgAQ0DSQhFhEAAhuQAAhuBGhJQBHhJBxAAQA/AAA1AXIADAAIAAkYIBXAAIAALrIhXAAIAAgeIgDAAQg6AphNAAQhjAAhDhDgARxCVQAsAwBHABQBKgCA1goIAAkRQg5gfg9AAQhLAAgtAzQgtAyAABLIAAAAQgBBJAqAwgAD8EHQgkgNgYgbIABAAQgVgYgJgjQgIgiABg1IAAklIBYAAIAAETQAAApAFAWQAGAYAMAOQANAQAVAJQATAJAXgBQAqAAAsgYQAlgXAcgjIAAlGIBYAAIAAHhIhYAAIAAg9IgCAAQgiAigrASQgsAUguAAQgnAAgigOgEAgDAEKIAAnfIBYAAIAABHIACAAQAZgjAmgUQAmgUAqAAQAIgBAWAFIAABTIAEAAIgEADIAAgDIgiAAQhcAAgwBVIAAE3gANYEKIAArrIBYAAIAALrgAKiEKIAAnhIBYAAIAAHhgAmREKIAArDIC+AAQBDAAApAIQAtAIAjAVQAmAWAXAnQAWAngBAtQAAA6ggAoQgbAjgvARIAAACQA/AOAjApQAlArAABCQABAwgVArQgWAsgnAbQgkAZg2ALQgzALhQAAgAk0C2IAAABIBlAAQA9AAAjgHQAlgGAYgRQAXgQALgZQANgZgBgbQAAg7gsgeQgsgfhQAAIiIAAgAk0iEICMAAQA7ABAkgbQApgeAAg2QACgdgOgYQgNgZgZgNQgXgOghgFQgegGg3AAIhVAAgA7QEKIhQjHIk+AAIhQDHIhfAAIEkrEIBZAAIEkLEgEgg+gANID/AAIg5iSQgmhfgehPIgCAAgAKilRQgSgSAAgaQACgZARgSQASgSAZAAQAaAAASASQASASAAAZQAAAagSASQgSATgagBQgaABgSgTg");
	this.shape_6.setTransform(361.15,56.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,605.3,104.9), null);


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
	this.instance = new lib.Symbol17();
	this.instance.setTransform(302.7,52.5,1,1,0,0,0,302.7,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,605.3,104.9), null);


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

	// Layer_3
	this.instance = new lib.Symbol38();
	this.instance.setTransform(108.95,24.55,1.4274,1.4161,0,0,0,30.8,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#584EBD").s().p("ApQC0QgZAAgRgRQgSgSAAgZIAAjvQAAgZASgSQASgSAYAAISgAAQAZAAASASQARASABAZIAADvQgBAZgRASQgSARgZAAg");
	this.shape.setTransform(110.6,26);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(45.4,8,130.5,36.1), null);


// stage content:
(lib.appbuilder_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [209];
	// timeline functions:
	this.frame_209 = function() {
		if (myCounter++>1)
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(209).call(this.frame_209).wait(1));

	// Layer_15
	this.instance = new lib.Symbol30();
	this.instance.setTransform(199.3,37.75,0.6845,0.6817,0,0,0,107.2,17.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(118).to({_off:false},0).to({alpha:1},13,cjs.Ease.quadOut).wait(79));

	// Layer_1
	this.instance_1 = new lib.Symbol28();
	this.instance_1.setTransform(188.85,15.7,0.283,0.2806,0,0,0,217,37.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110).to({_off:false},0).to({alpha:1},13,cjs.Ease.quadOut).wait(87));

	// logo
	this.instance_2 = new lib.Symbol19();
	this.instance_2.setTransform(45.85,11.4,0.1283,0.1309,0,0,0,311.4,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(210));

	// cta
	this.instance_3 = new lib.Symbol18();
	this.instance_3.setTransform(44.85,37.2,0.6078,0.6207,0,0,0,108.9,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(210));

	// Layer_14
	this.instance_4 = new lib.Symbol29();
	this.instance_4.setTransform(160.2,9.5,0.6023,0.6061,0,0,0,107.9,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(101).to({alpha:0},9).to({_off:true},1).wait(99));

	// Layer_4
	this.instance_5 = new lib.Symbol23();
	this.instance_5.setTransform(160.45,32.5,0.5495,0.5514,0,0,0,116.4,32.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).to({alpha:1},12).wait(60).to({alpha:0},9).to({_off:true},1).wait(99));

	// bg
	this.instance_6 = new lib.bg();
	this.instance_6.setTransform(-30,0,0.2892,0.2778);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(210));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(130,25,261.1,25);
// library properties:
lib.properties = {
	id: 'B915F0BB2CAF214394D0C3C0B5CA43BE',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"}
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