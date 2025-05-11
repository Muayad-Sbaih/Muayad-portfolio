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



(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,82);


(lib.left = function() {
	this.initialize(img.left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,250);


(lib.right = function() {
	this.initialize(img.right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,250);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("AgnBFIg0hkIgvBkIgDAAIg8hzQgFgJgGgEQgGgEgLAAIgEAAIAAgFIBiAAIAAAFIgFAAQgGAAgDACQgDACgBADIAAABIAjBEIAYgyIgFgJIgCgEQgEgHgEgCQgDgDgMgBIAAgFIBbAAIAAAFIgFAAIgKAAQgDAAAAAEQAAADADAGIAgA/IAQghQADgKABgHQgBgKgFgHQgHgIgLgBIAAgFIBGAAIAAAFQgNAAgLAKQgLAKgIATIgrBdgAgmA+IAEgJIgIAAgAiMA+IAEgJIgJAAgAgsAyIAMAAIADgJIgUAAgAiSAyIALAAIAFgJIgUAAgAgyAmIAXAAIADgGIgBgDIgeAAgAiZAmIAYAAIADgGIgCgDIgdAAgAg5AaIAeAAIgEgJIgeAAgAieAaIAcAAIgEgJIgdAAgAg/AOIAeAAIgFgJIgdAAgAilAOIAdAAIgEgJIgdAAgAhFACIAeAAIgFgIIgdAAgAirACIAeAAIgFgIIgdAAgAhLgJIAdAAIgEgJIgdAAgAixgJIAdAAIgEgJIgeAAgAhRgVIAeAAIgFgJIgdAAgAi4gVIAeAAIgEgJIgeAAgAhXghIAdAAIgEgJIgeAAgAi+ghIAeAAIgFgJIgdAAgAAGgvIABADIABAEIAIgOIgNAAIADAHgAhfgxIABAEIAeAAIgBgDIgCgGIggAAIAEAFgAjDgtIAdAAIgBgDIgCgGIggAAgAAAg5IATAAIAEgGIgdAAgAhmg7IABACIAiAAQAAgDACgDIgsAAIAHAEgAjLg5IAiAAQAAgDACgDIgsAAgABCBAIAAgEIAHAAQAPAAAEgFQADgDAAgOIAAhPQAAgNgEgEQgEgFgOAAIgHAAIAAgFICmAAIAAAwIgEAAQgLgOgHgIQgKgKgLgFQgMgGgOAAIgVAAIAAA4IAGAAQAMAAAIgGQAJgFAHgMIAFAAIAAAyIgFAAQgFgIgDgEQgNgKgPAAIgGAAIAAA+IAQAAQATAAATgMQANgIAMgNIAIgMIAFAAIAAAxgAC3A8IAlAAIAAgIIgWAAgABgA5IgCADIAhAAIAAgHIgdAAIgCAEgABkAuIAAAEIAbAAIAAgJIgaAAIgBAFgADPAtIgFAEIASAAIAAgQIgNAMgABlAmIAaAAIAAgJIgaAAgABlAaIAaAAIAAgJIgaAAgABlAOIAaAAIAAgJIgaAAgACyAGIAAgJIgOAAgABlACIAaAAIAAgIIgaAAgACrgLIgGAFIANAAIAAgKIgHAFgABlgJIAaAAIAAgJIgaAAgABlgVIAaAAIAAgJIgaAAgABlghIAaAAIAAgJIgaAAgADRguIAKAJIAAgPIgRAAIAHAGgABlgtIAaAAIAAgJIgbAAgADGg4IAVAAIAAgHIghAAgABig5IAdAAIAAgGIghAAIAEAGg");
	this.shape.setTransform(23.4,6.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,46.8,13.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(105.175,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,210.4,14.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(61.65,7.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,123.3,14.3), null);


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
	this.instance = new lib.right();
	this.instance.setTransform(136,0,0.8006,0.8);

	this.instance_1 = new lib.left();
	this.instance_1.setTransform(0,0,0.8006,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,238.5,200), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFCC33","rgba(255,204,51,0)"],[0,1],0,0,0,0,0,64.1).s().p("Am6G7Qi4i4AAkDQAAkCC4i4QC3i4EDAAQEEAAC3C4QC4C4gBECQABEDi4C4Qi3C4kEAAQkDAAi3i4g");
	this.shape.setTransform(62.65,62.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,125.3,125.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgWAiIAAhDIAXAAQAHAAAEACQAEABACAEQADACABADIABAHIgBAHQgBADgDADIgGAEQgEABgHAAIgNAAIAAAegAgMgDIAMAAIAEgBIAEgBIAEgDIABgGIgBgGIgEgDIgEgBIgEgBIgMAAg");
	this.shape.setTransform(166.55,24.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAhQgFgCgEgDQgDgEgCgFQgCgFAAgGIAAgqIAJAAIAAApIABAHIADAGIAFAFQADABAEAAQAFAAADgBIAFgFIADgGIABgHIAAgpIAJAAIAAAqQAAAGgCAFQgCAFgDAEQgEADgFACQgEACgGAAQgEAAgFgCg");
	this.shape_1.setTransform(160.025,24.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAhQgGgCgEgGQgFgFgDgGQgCgGAAgIQAAgGACgHQADgHAFgEQAEgFAGgDQAHgCAHAAQAIAAAGACQAHADAEAFQAFAEADAHQADAHAAAGQAAAIgDAGQgDAGgFAFQgEAGgHACQgGADgIAAQgHAAgHgDgAgKgYQgEACgDAEQgEADgCAFQgCAGABAEQgBAGACAFQACAEAEAEQADAEAEACQAFACAFAAQAGAAAFgCQAEgCAEgEQADgEACgEQABgFAAgGQAAgEgBgGQgCgFgDgDQgEgEgEgCQgFgCgGAAQgFAAgFACg");
	this.shape_2.setTransform(152.65,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANAiIgRgeIgKAAIAAAeIgJAAIAAhDIAXAAQAGAAAFACQAEABACAEQADACABADIABAHIgBAHIgEAFQgCACgDABIgHACIATAfgAgOgDIAMAAIAFgBIAEgBIAEgDIABgGIgBgGIgEgDIgEgBIgFgBIgMAAg");
	this.shape_3.setTransform(146.075,24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAFAkQgHAAgHgDQgHgDgFgFQgEgFgCgHQgDgGAAgHQAAgGADgHQADgHAEgEQAEgFAHgDQAHgCAGAAQAKAAAGACQAFACAFAEIgHAHQgEgEgFgBIgKgCQgEAAgFACQgFACgDAEQgDADgCAFQgCAGAAAEQAAAGACAFQACAEADAFQAEADAEACQAFACAFAAIAJgBQAFgBADgCIAAgTIgPAAIAAgHIAYAAIAAAhIgFACIgHACIgHACIgHAAg");
	this.shape_4.setTransform(138.9,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOAiIgfgiIAAAAIAAAiIgKAAIAAhDIAKAAIAAAdIAAAAIAegdIAMAAIgfAfIAiAkg");
	this.shape_5.setTransform(130.125,24.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASAiIglg3IAAA3IgKAAIAAhDIANAAIAlA3IAAg3IAJAAIAABDg");
	this.shape_6.setTransform(122.65,24.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAXAiIgHgRIgfAAIgHARIgLAAIAehDIAIAAIAdBDgAgMAJIAZAAIgNgeIAAAAg");
	this.shape_7.setTransform(115.475,24.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAiIAAhDIAXAAIAIABQAEABADACIAEAGQACADAAAEQAAAGgEAEQgDAEgFABIAGABIAEAEIAEAFIABAGQAAAEgCAEIgFAGQgEADgEAAQgEACgFAAgAgNAaIANAAIAEgBIAFgBIADgDQACgDAAgEQAAgGgEgDQgEgCgGAAIgNAAgAgNgEIAMAAIAEgBIAEgCIADgDIABgFQAAgEgDgDQgCgDgGAAIgNAAg");
	this.shape_8.setTransform(109.275,24.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAiIAAhDIAJAAIAABDg");
	this.shape_9.setTransform(104.725,24.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAiIAAg6IgVAAIAAgJIA0AAIAAAJIgXAAIAAA6g");
	this.shape_10.setTransform(100.65,24.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTAiIAAhDIAJAAIAAA6IAeAAIAAAJg");
	this.shape_11.setTransform(95.775,24.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJAhQgFgCgEgDQgDgEgCgFQgCgFAAgGIAAgqIAJAAIAAApIABAHIADAGIAFAFQADABAEAAQAFAAADgBIAFgFIADgGIABgHIAAgpIAJAAIAAAqQAAAGgCAFQgCAFgDAEQgEADgFACQgEACgGAAQgEAAgFgCg");
	this.shape_12.setTransform(89.525,24.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAaAiIAAg3IgXA3IgFAAIgXg3IAAA3IgKAAIAAhDIAPAAIAUAzIAAAAIAWgzIANAAIAABDg");
	this.shape_13.setTransform(81.8,24.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDAiIAAg6IgXAAIAAgJIA0AAIAAAJIgVAAIAAA6g");
	this.shape_14.setTransform(72.05,24.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWAiIAAhDIArAAIAAAJIghAAIAAAUIAfAAIAAAIIgfAAIAAAVIAjAAIAAAJg");
	this.shape_15.setTransform(66.6,24.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAaAiIAAg3IgXA3IgFAAIgXg3IAAA3IgKAAIAAhDIAPAAIAUAzIAAAAIAWgzIANAAIAABDg");
	this.shape_16.setTransform(59.1,24.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTAiIAAhDIAJAAIAAA6IAeAAIAAAJg");
	this.shape_17.setTransform(49.975,24.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWAiIAAhDIArAAIAAAJIgiAAIAAAUIAgAAIAAAIIggAAIAAAVIAkAAIAAAJg");
	this.shape_18.setTransform(44.4,24.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdAiIAAhDIAYAAQAGAAAGABIAJAFIAHAGIAEAHIACAIIABAGQAAAHgCAFQgDAGgFAFQgEAFgHADQgHADgIAAgAgTAZIALAAQAGAAAEgBQAGgCAEgDQAEgDACgFQACgEAAgHIgBgGQgBgFgDgEQgDgEgFgDQgFgCgHAAIgOAAg");
	this.shape_19.setTransform(37.825,24.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AASAiIglg3IAAA3IgJAAIAAhDIAMAAIAkA3IAAg3IAJAAIAABDg");
	this.shape_20.setTransform(30.3,24.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAXAiIgHgRIgfAAIgHARIgLAAIAehDIAIAAIAdBDgAgMAJIAZAAIgNgeIAAAAg");
	this.shape_21.setTransform(23.125,24.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AARAiIAAgfIghAAIAAAfIgKAAIAAhDIAKAAIAAAdIAhAAIAAgdIAKAAIAABDg");
	this.shape_22.setTransform(16.2,24.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AARAiIgRg3IAAAAIgQA3IgJAAIgUhDIAKAAIAOA2IABAAIAQg2IAJAAIAQA2IAPg2IAKAAIgUBDg");
	this.shape_23.setTransform(161.675,11.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAhQgFgCgEgDQgDgEgCgFQgCgFAAgGIAAgqIAJAAIAAApIABAHIADAGIAFAFQADABAEAAQAFAAADgBIAFgFIADgGIABgHIAAgpIAJAAIAAAqQAAAGgCAFQgCAFgDAEQgEADgFACQgEACgGAAQgEAAgFgCg");
	this.shape_24.setTransform(153.675,11.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AASAiIglg3IAAA3IgKAAIAAhDIANAAIAlA3IAAg3IAJAAIAABDg");
	this.shape_25.setTransform(143.8,11.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAXAiIgHgRIgfAAIgHARIgLAAIAehDIAIAAIAdBDgAgMAJIAZAAIgNgeIAAAAg");
	this.shape_26.setTransform(136.625,11.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAXAiIgHgRIgfAAIgHARIgLAAIAehDIAIAAIAdBDgAgMAJIAZAAIgNgeIAAAAg");
	this.shape_27.setTransform(129.875,11.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWAiIAAhDIArAAIAAAJIgiAAIAAAUIAgAAIAAAIIggAAIAAAVIAkAAIAAAJg");
	this.shape_28.setTransform(121.15,11.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNAhQgHgDgFgFQgEgFgDgGQgCgGgBgIQABgHACgGQADgGAEgFQAFgFAHgDQAGgCAHAAQAIAAAGACQAHADAEAFQAFAFADAGQADAGgBAHQABAIgDAGQgDAGgFAFQgEAFgHADQgGACgIAAQgHAAgGgCgAgKgYQgEACgEAEQgDADgCAFQgCAGAAAEQAAAFACAGQACAFADADQAEAEAEACQAFACAFAAQAGAAAEgCQAFgCADgEQAEgDACgFQABgGAAgFQAAgEgBgGQgCgFgEgDQgDgEgFgCQgEgCgGAAQgFAAgFACg");
	this.shape_29.setTransform(114,11.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgDAiIAAg6IgXAAIAAgJIA0AAIAAAJIgVAAIAAA6g");
	this.shape_30.setTransform(107.25,11.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgMAhQgGgCgEgFIAIgGQACADAEACIAIACIAEgBIAEgCIAEgDIABgFQAAgEgDgCQgCgDgEgBIgHgCQgEgCgEgCQgEgBgCgEQgDgEAAgGIACgHQABgEADgCIAHgFQAEgBAFAAQAGAAAFABQAFACAEAEIgHAHQgCgDgDgBQgDgCgFAAIgFABIgEADIgCADIgBAEQAAAEADACIAGAEIAHACIAIADQAEACACADQADAEAAAFQAAAFgCAEQgCAEgDADQgDADgFABIgIABQgGAAgGgCg");
	this.shape_31.setTransform(99.075,11.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AASAiIglg3IAAA3IgJAAIAAhDIAMAAIAkA3IAAg3IAJAAIAABDg");
	this.shape_32.setTransform(92.65,11.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAXAiIgHgRIgfAAIgHARIgLAAIAehDIAIAAIAdBDgAgMAJIAZAAIgNgeIAAAAg");
	this.shape_33.setTransform(85.475,11.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgTAiIAAhDIAJAAIAAA6IAeAAIAAAJg");
	this.shape_34.setTransform(79.975,11.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAFAjQgHAAgHgCQgHgDgFgFQgEgFgCgGQgDgHAAgHQAAgHADgGQADgGAEgFQAEgFAHgDQAHgCAGAAQAKAAAGACQAFACAFAEIgHAHQgEgEgFgBIgKgCQgEAAgFACQgFACgDAEQgDADgCAFQgCAGAAAEQAAAGACAFQACAFADAEQAEADAEACQAFACAFAAIAJgBQAFgBADgCIAAgTIgPAAIAAgHIAYAAIAAAhIgFACIgHACIgHABIgHAAg");
	this.shape_35.setTransform(73.2,11.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDAiIAAg6IgXAAIAAgJIA0AAIAAAJIgVAAIAAA6g");
	this.shape_36.setTransform(64.25,11.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAXAiIgHgRIgfAAIgHARIgLAAIAehDIAIAAIAdBDgAgMAJIAZAAIgNgeIAAAAg");
	this.shape_37.setTransform(58.125,11.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AARAiIgRg3IAAAAIgQA3IgJAAIgUhDIAKAAIAOA2IABAAIAQg2IAJAAIAQA2IAPg2IAKAAIgUBDg");
	this.shape_38.setTransform(50.125,11.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAGAjQgIAAgHgCQgHgDgEgFQgFgFgDgGQgCgHAAgHQAAgHACgGQADgGAFgFQAFgFAGgDQAGgCAIAAQAJAAAGACQAFACAFAEIgHAHQgEgEgEgBIgKgCQgGAAgEACQgFACgDAEQgEADgCAFQgBAGAAAEQAAAGACAFQACAFAEAEQADADAFACQAEACAFAAIAKgBQAEgBADgCIAAgTIgPAAIAAgHIAYAAIAAAhIgGACIgGACIgHABIgGAAg");
	this.shape_39.setTransform(38.95,11.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgWAiIAAhDIArAAIAAAJIgiAAIAAAUIAgAAIAAAIIggAAIAAAVIAkAAIAAAJg");
	this.shape_40.setTransform(32.7,11.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgNAhQgHgDgEgFQgFgFgDgGQgDgGAAgIQAAgHADgGQADgGAFgFQAEgFAHgDQAGgCAHAAQAHAAAHACQAHADAEAFQAFAFADAGQACAGAAAHQAAAIgCAGQgDAGgFAFQgEAFgHADQgHACgHAAQgHAAgGgCgAgKgYQgEACgEAEQgDADgCAFQgBAGAAAEQAAAFABAGQACAFADADQAEAEAEACQAFACAFAAQAGAAAFgCQAEgCADgEQAEgDACgFQACgGgBgFQABgEgCgGQgCgFgEgDQgDgEgEgCQgFgCgGAAQgFAAgFACg");
	this.shape_41.setTransform(25.55,11.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgEAiIgahDIALAAIATA3IAVg3IAKAAIgbBDg");
	this.shape_42.setTransform(18.525,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(10.6,3.5,160.6,29.4), null);


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
	this.shape.graphics.rf(["#FEE68A","#D5A73C"],[0,1],0,0,0,0,0,23.3).s().p("AigChQhDhDAAheQAAhdBDhDQBDhDBdAAQBeAABDBDQBDBDAABdQAABehDBDQhDBDheAAQhdAAhDhDg");
	this.shape.setTransform(1.2787,1.2913,0.057,0.057);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,2.6,2.6), null);


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
	this.shape.graphics.rf(["#FEE68A","#D5A73C"],[0,1],0,0,0,0,0,23.3).s().p("AigChQhDhDAAheQAAhdBDhDQBDhDBdAAQBeAABDBDQBDBDAABdQAABehDBDQhDBDheAAQhdAAhDhDg");
	this.shape.setTransform(3.3003,3.2782,0.1447,0.1447);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,6.6,6.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgLAbQgFgCgDgFQgDgEAAgFIAKAAQAAAFAEADQAEADAFAAQAFAAAEgDQADgCAAgDQAAgFgDgBQgDgDgHgBQgHgCgEgCQgFgCgCgDQgCgDAAgEQAAgHAGgFQAGgFAIAAQAKAAAGAFQAHAFAAAIIgKAAQAAgEgEgDQgDgDgGAAQgEAAgDACQgDACAAAFQAAADADACQACACAHACQAHABAFACQAFABACAEQACADAAAFQAAAIgGAEQgGAFgKAAQgGAAgGgDg");
	this.shape.setTransform(219.925,39.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDANIAAgZIAHAAIAAAGIgBATg");
	this.shape_1.setTransform(216.15,35.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAWQgHgJAAgNIAAAAQABgIADgHQADgHAGgEQAGgDAHAAQAMAAAHAIQAHAIAAANIAAAAQAAAJgDAHQgDAHgGADQgHAEgHAAQgLAAgIgIgAgLgPQgFAFAAAKQAAALAFAFQAFAGAGAAQAHAAAFgGQAEgGABgKQgBgJgEgGQgFgGgHAAQgGAAgFAGg");
	this.shape_2.setTransform(212.1,39.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAWQgIgIABgOIAAAAQAAgIACgIQADgGAGgEQAHgDAHAAQAJAAAHAFQAGAHAAAJIgJAAQAAgGgEgEQgEgDgFAAQgHAAgFAFQgEAGABAKIAAABQgBAKAEAFQAFAGAHAAQAEAAAFgEQAEgCAAgGIAJAAQAAAGgDAEQgDAEgGADQgFADgFAAQgMAAgGgIg");
	this.shape_3.setTransform(206.2,39.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAoIAAg5IAJAAIAAA5gAgDgdQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABgBQAAAAAAAAQABAAAAAAQABABABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABABAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_4.setTransform(201.95,38.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLAbQgFgCgDgFQgDgEAAgFIAKAAQAAAFAEADQAEADAFAAQAFAAAEgDQADgCAAgDQAAgFgDgBQgDgDgHgBQgHgCgEgCQgFgCgCgDQgCgDAAgEQAAgHAGgFQAGgFAIAAQAKAAAGAFQAHAFAAAIIgKAAQAAgEgEgDQgDgDgGAAQgEAAgDACQgDACAAAFQAAADADACQACACAHACQAHABAFACQAFABACAEQACADAAAFQAAAIgGAEQgGAFgKAAQgGAAgGgDg");
	this.shape_5.setTransform(197.775,39.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAoIAAg5IAJAAIAAA5gAgDgdQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABgBQAAAAAAAAQABAAAAAAQABABABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABABAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_6.setTransform(193.65,38.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAeIAAg6IAJAAIABAHQADgIAJAAIAFABIAAAJIgFAAQgJAAgDAIIAAApg");
	this.shape_7.setTransform(190.75,39.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgBAhQgDgFAAgHIAAgjIgLAAIAAgIIALAAIAAgNIAJAAIAAANIALAAIAAAIIgLAAIAAAjQAAAEABACQACABADAAIAFgBIAAAJIgIAAQgGAAgDgDg");
	this.shape_8.setTransform(183.925,39.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAqIAAgyIgKAAIAAgHIAKAAIAAgGQAAgKAFgFQAEgFAJAAIAHABIgBAIIgFAAQgFAAgDACQgCADAAAGIAAAGIAMAAIAAAHIgMAAIAAAyg");
	this.shape_9.setTransform(180.575,38.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQAXQgIgJAAgNIAAgBQAAgIAEgHQADgGAGgFQAGgDAGAAQALAAAGAIQAHAGAAAOIAAAEIgnAAQAAAJAFAEQAFAGAGAAQAGAAADgCIAHgGIAGAFQgIALgOAAQgLAAgHgHgAgIgRQgFAFAAAIIAcAAIAAgBQgBgIgDgEQgEgEgGAAQgFAAgEAEg");
	this.shape_10.setTransform(175.625,39.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQAXQgIgJAAgNIAAgBQAAgIAEgHQADgGAGgFQAGgDAGAAQALAAAGAIQAHAGAAAOIAAAEIgnAAQAAAJAFAEQAFAGAGAAQAGAAADgCIAHgGIAGAFQgIALgOAAQgLAAgHgHgAgIgRQgFAFAAAIIAcAAIAAgBQgBgIgDgEQgEgEgGAAQgFAAgEAEg");
	this.shape_11.setTransform(169.775,39.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AANApIAAgmQAAgFgDgDQgDgEgGAAQgDAAgEADQgEADgCADIAAApIgKAAIAAhRIAKAAIAAAfQAHgIAJAAQATAAAAAUIAAAmg");
	this.shape_12.setTransform(163.775,38.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_13.setTransform(156.75,38.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAXQgIgJAAgNIAAgBQAAgIAEgHQADgGAGgFQAGgDAGAAQALAAAGAIQAHAGAAAOIAAAEIgnAAQAAAJAFAEQAFAGAGAAQAGAAADgCIAHgGIAGAFQgIALgOAAQgLAAgHgHgAgIgRQgFAFAAAIIAcAAIAAgBQgBgIgDgEQgEgEgGAAQgFAAgEAEg");
	this.shape_14.setTransform(152.525,39.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRAiQgHgJAAgNIAAgBQAAgMAHgIQAGgIALAAQAIAAAHAHIAAgfIAKAAIAABSIgJAAIgBgGQgGAHgJAAQgLAAgGgIgAgJgDQgEAEgBALQABAKAEAGQADAFAHAAQAJAAAFgIIAAgaQgFgIgJAAQgHAAgDAGg");
	this.shape_15.setTransform(146.3,38.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AANAeIAAgmQAAgGgDgDQgDgDgGgBQgDAAgEAEQgEACgCAEIAAApIgKAAIAAg6IAKAAIAAAHQAHgHAJgBQATABAAAUIAAAmg");
	this.shape_16.setTransform(140.325,39.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAZQgGgEAAgIQAAgJAHgEQAHgFALAAIAKAAIAAgFQAAgFgDgDQgEgDgFAAQgFAAgDACQgEADAAAEIgKAAQAAgEADgEQADgFAFgCQAGgCAFAAQAKAAAGAFQAFAFABAJIAAAaQAAAHACAFIAAABIgLAAIgBgGQgHAHgJAAQgIAAgFgFgAgNALQAAAFADADQADADAFAAQAEAAAEgDQAEgCACgEIAAgMIgIAAQgRAAAAAKg");
	this.shape_17.setTransform(134.3,39.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AANApIAAgmQAAgFgDgDQgDgEgGAAQgDAAgEADQgEADgCADIAAApIgKAAIAAhRIAKAAIAAAfQAHgIAJAAQATAAAAAUIAAAmg");
	this.shape_18.setTransform(128.275,38.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQAXQgIgJAAgNIAAgBQAAgIAEgHQADgGAGgFQAGgDAGAAQALAAAGAIQAHAGAAAOIAAAEIgnAAQAAAJAFAEQAFAGAGAAQAGAAADgCIAHgGIAGAFQgIALgOAAQgLAAgHgHgAgIgRQgFAFAAAIIAcAAIAAgBQgBgIgDgEQgEgEgGAAQgFAAgEAEg");
	this.shape_19.setTransform(119.675,39.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_20.setTransform(115.4,38.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_21.setTransform(112.75,38.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAYAnIgIgVIggAAIgHAVIgLAAIAfhNIAIAAIAdBNgAgMAKIAZAAIgNgkg");
	this.shape_22.setTransform(107.8,38.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgLAbQgFgCgDgFQgDgEAAgFIAKAAQAAAFAEADQAEADAFAAQAFAAAEgDQADgCAAgDQAAgFgDgCQgDgCgHgBQgHgCgEgCQgFgCgCgDQgCgDAAgEQAAgHAGgFQAGgFAIAAQAKAAAGAFQAHAFAAAIIgKAAQAAgEgEgDQgDgDgGAAQgEAAgDADQgDABAAAFQAAADADACQACACAHACQAHABAFACQAFABACAEQACADAAAFQAAAIgGAFQgGAEgKAAQgGAAgGgDg");
	this.shape_23.setTransform(210.375,23.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AANAeIAAgmQAAgGgDgDQgDgDgGgBQgDAAgEAEQgEACgCAEIAAApIgKAAIAAg6IAKAAIAAAHQAHgHAJgBQATABAAAUIAAAmg");
	this.shape_24.setTransform(204.525,23.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAWQgIgJAAgNIAAAAQABgIADgHQADgHAGgEQAGgDAHAAQALAAAIAIQAHAIABANIAAAAQgBAJgDAHQgDAHgGADQgGAEgIAAQgLAAgHgIgAgLgPQgEAFgBAKQABALAEAFQAEAGAHAAQAHAAAFgGQAEgGABgKQgBgJgEgGQgFgGgHAAQgHAAgEAGg");
	this.shape_25.setTransform(198.4,23.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAoIAAg5IAJAAIAAA5gAgDgdQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABgBQAAAAAAAAQABAAAAAAQABABABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABABAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_26.setTransform(193.95,22.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgBAhQgDgFAAgHIAAgjIgLAAIAAgIIALAAIAAgNIAJAAIAAANIALAAIAAAIIgLAAIAAAjQAAAEABACQACABADAAIAFgBIAAAJIgIAAQgGAAgDgDg");
	this.shape_27.setTransform(190.625,22.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEAoIAAg5IAJAAIAAA5gAgDgdQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABgBQAAAAAAAAQABAAAAAAQABABABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABABAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_28.setTransform(187.7,22.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRAiQgGgJgBgNIAAgBQABgMAGgIQAHgIAKAAQAJAAAGAHIAAgfIAKAAIAABSIgJAAIgBgGQgGAHgJAAQgKAAgHgIgAgJgDQgFAEAAALQAAAKAFAGQADAFAHAAQAJAAAFgIIAAgaQgFgIgJAAQgHAAgDAGg");
	this.shape_29.setTransform(183.1,22.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AANAeIAAgmQAAgGgDgDQgDgDgGgBQgDAAgEAEQgEACgCAEIAAApIgKAAIAAg6IAKAAIAAAHQAHgHAJgBQATABAAAUIAAAmg");
	this.shape_30.setTransform(177.125,23.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgTAWQgGgJAAgNIAAAAQAAgIADgHQADgHAGgEQAGgDAHAAQAMAAAHAIQAIAIgBANIAAAAQAAAJgDAHQgDAHgGADQgGAEgIAAQgLAAgIgIgAgLgPQgFAFABAKQgBALAFAFQAEAGAHAAQAIAAAEgGQAFgGgBgKQABgJgFgGQgEgGgIAAQgHAAgEAGg");
	this.shape_31.setTransform(171,23.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgRAWQgHgIAAgOIAAAAQAAgIAEgIQACgGAHgEQAGgDAGAAQAKAAAHAFQAGAHABAJIgKAAQgBgGgDgEQgEgDgGAAQgGAAgEAFQgFAGAAAKIAAABQAAAKAFAFQAEAGAGAAQAFAAAEgEQAEgCABgGIAKAAQgBAGgDAEQgDAEgGADQgFADgGAAQgKAAgIgIg");
	this.shape_32.setTransform(165.1,23.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgXAiQgHgGAAgKQAAgFADgFQADgFAJgFIgHgKIgCgIQAAgJAFgFQAGgFAJAAQAHAAAFAFQAFAEAAAIQAAAEgCAEQgDAEgGAFIgEAEIAQAUQAEgHAAgJIAJAAQAAAOgHAJIALANIgMAAIgFgGQgEAEgFABQgFACgFAAQgLAAgHgGgAgLAFQgJAGAAAHQAAAHAEADQAEAEAHAAQAHAAAGgGIgSgXgAgLgcQgDADAAAFQAAAFAGAIIAHgFIAEgFQABgCAAgDQAAgEgDgCQgBgDgEAAQgFAAgCADg");
	this.shape_33.setTransform(156.275,22.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgLAbQgFgCgDgFQgDgEAAgFIAKAAQAAAFAEADQAEADAFAAQAFAAAEgDQADgCAAgDQAAgFgDgCQgDgCgHgBQgHgCgEgCQgFgCgCgDQgCgDAAgEQAAgHAGgFQAGgFAIAAQAKAAAGAFQAHAFAAAIIgKAAQAAgEgEgDQgDgDgGAAQgEAAgDADQgDABAAAFQAAADADACQACACAHACQAHABAFACQAFABACAEQACADAAAFQAAAIgGAFQgGAEgKAAQgGAAgGgDg");
	this.shape_34.setTransform(147.075,23.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAfAeIAAgmQAAgGgDgDQgDgDgHgBQgFABgEADQgDADgBAGIAAAmIgJAAIAAglQAAgNgMgBQgKAAgEAJIAAAqIgKAAIAAg6IAKAAIAAAHQAGgIALAAQAMABAEAIQADgEAEgCQAFgDAGAAQATAAABAVIAAAmg");
	this.shape_35.setTransform(139.425,23.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNAeIAAg6IAJAAIABAHQADgIAKAAIAEABIAAAJIgFAAQgJAAgDAIIAAApg");
	this.shape_36.setTransform(133.05,23.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgQAXQgIgJAAgNIAAgBQAAgIAEgHQADgGAGgFQAGgDAGAAQALAAAGAIQAHAGAAAOIAAAEIgnAAQAAAJAFAEQAFAGAGAAQAGAAADgCIAHgGIAGAFQgIALgOAAQgLAAgHgHgAgIgRQgFAFAAAIIAcAAIAAgBQgBgIgDgEQgEgEgGAAQgFAAgEAEg");
	this.shape_37.setTransform(128.025,23.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgEAnIAAhFIgZAAIAAgIIA7AAIAAAIIgZAAIAABFg");
	this.shape_38.setTransform(121.775,22.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAAAHIgJAPIgHgFIALgPIgQgDIACgIIAQAGIAAgTIAHAAIAAATIAQgGIACAIIgQAEIAKAOIgGAGg");
	this.shape_39.setTransform(116.125,20.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,14,327,33.4), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgkC3QgPgPAAgVIAAkkQAAgWAPgPQAPgPAVAAQAWAAAPAPQAPAPAAAWIAAEkQAAAVgPAPQgQAPgVAAQgVAAgPgPg");
	mask.setTransform(25.025,25.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-10.7,-10.7,10.7,10.7).s().p("Aj5AAID5j6ID6D6Ij6D7g");
	this.shape.setTransform(25.025,25.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(19.8,5.3,10.5,39.6), null);


(lib.ClipGroup_13 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgkC3QgPgPAAgWIAAkkQAAgVAPgPQAQgPAUAAQAWAAAPAPQAPAPAAAVIAAEkQAAAWgPAPQgPAPgWAAQgUAAgQgPg");
	mask.setTransform(25.025,25.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-11,-11,11,11).s().p("Aj5AAID5j5ID6D5Ij6D6g");
	this.shape.setTransform(25.025,25.025);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(19.8,5.3,10.5,39.6), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgkC3QgQgPAAgVIAAkkQAAgWAQgPQAQgPAUAAQAWAAAPAPQAQAPAAAWIAAEkQAAAVgQAPQgPAPgWAAQgUAAgQgPg");
	mask.setTransform(25.05,25.05);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-11,-11,11,11).s().p("Aj6AAID6j6ID7D6Ij7D7g");
	this.shape.setTransform(25.05,25.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(19.8,5.3,10.5,39.6), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgkCCQgPgPAAgWIAAi6QAAgVAPgPQAPgPAVAAQAVAAAQAPQAPAPAAAVIAAC6QAAAWgPAPQgPAPgWAAQgVAAgPgPg");
	mask.setTransform(19.725,19.75);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-8.3,-8.3,8.4,8.4).s().p("AjEAAIDEjFIDFDFIjFDGg");
	this.shape.setTransform(19.725,19.75);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(14.5,5.3,10.5,28.999999999999996), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EhQYALoIAA3PMCgxAAAIAAXPg");
	mask.setTransform(514.475,74.425);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak6GuIAAtbIEsAAQBXAAAuALQAtALAnAgQA3AqAcBEQAdBFAABZQAACJhSBUQgqArg0ATQg1AThNAAIiXAAIAADrgAiOA+IBpAAQCwAAAAi2QAAhUgqguQgrgthOAAIh2AAg");
	this.shape.setTransform(920.35,80.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrE4QhKAAgogKQglgLgigcQhBg+AAiAIAAmAICsAAIAAGQQAAArAVAXQAXAYAmAAIChAAIAAnqICsAAIAAJvg");
	this.shape_1.setTransform(848.35,68.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjyDsQhWhWAAiXQAAiTBahVQBahXCXABQBVgBBAAbQBBAbApA0QBHBaAACDQAACRhZBUQhaBViYgBQiaAAhWhUgAiZADQAABbAoAvQAnAwBMAAQCYAAAAi+QAAi6ibAAQiYAAAAC+g");
	this.shape_2.setTransform(777.125,68.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Aj4E4IAApvID9AAQBQAAApAKQAqAKAeAbQAcAaALAmQAMAmAABHIAAA+IimAAIAAghQABhDgYgZQgYgYg+AAIgyAAIAAHqg");
	this.shape_3.setTransform(710.4,68.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAIGtQhjAAg6gOQg7gPgvgmQhCgzgihbQgkhdABh8QgBh5AkhdQAihcBBg0QBchJCzAAIF5AAIAACZIljAAQh5AAg1A9Qg0A8gBCNQAABPARBAQARBAAcAfQAzAzB5AAIClAAIAAjLIjuAAIAAiZIGlAAIAAH9g");
	this.shape_4.setTransform(635.2,56.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhQCgQgOgNgHgUQgGgPgCgXIA2AAQAHA0AwAAQAXAAAPgPQALgKAEgTQADgNAAgYQAAglgLgSQgNgXgfAAQgqAAgKAhIgxAAIAAjMIDJAAIAAAwIiZAAIAABkQAVgXApAAQAqABAZAYQAUAUAHAaQAGAUAAAhQAAAkgFATQgIAagTATQgdAegxAAQgzAAgdgeg");
	this.shape_5.setTransform(867.525,129.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhMCiQgggdAAgyIAAilQAAgyAggdQAfgdAtAAQAuAAAeAdQAhAdgBAyIAAClQABAyghAdQgeAdguAAQgtAAgfgdgAg2hRIAACjQAAA9A2AAQA2AAAAg9IAAijQAAg9g2AAQg2AAAAA9g");
	this.shape_6.setTransform(843.2,129.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhMCiQgggdABgyIAAilQgBgyAggdQAfgdAtAAQAuAAAeAdQAhAeAAAxIAAClQAAAxghAeQgeAdguAAQgtAAgfgdgAg1hRIAACjQAAA9A1AAQA3AAAAg9IAAijQAAg9g3AAQg1AAAAA9g");
	this.shape_7.setTransform(818.3,129.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhsC9IAAgwICPiuQAUgYAAgbQAAg4g3AAQgWAAgPAMQgRAQAAAdIg2AAQAAgvAfgdQAegeAvAAQAxAAAeAdQAeAcAAAxQAAAXgJATQgIAQgSAXIh1CPICYAAIAAAwg");
	this.shape_8.setTransform(792.875,129.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAgIAAg/IA/AAIAAA/g");
	this.shape_9.setTransform(768.125,145.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbC8IAAlEIhoAAIAAgzIEHAAIAAAzIhoAAIAAFEg");
	this.shape_10.setTransform(752.9,129.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiFCOIAmgmQAkAkA7AAQBOAAAAg6QAAgagPgMQgMgMgdgFIgsgGQgugGgZgXQgbgZAAgvQAAgyAhgeQAigeA5AAQBHAAAuArIglAkQgdgeg0AAQhEAAAAA7QAAAWAOANQAPANAbAFIAqAFQAvAIAYATQAeAcAAAyQAAAygmAfQglAdg7AAQhUAAgxgxg");
	this.shape_11.setTransform(725.325,129.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah3C8IAAl3IDvAAIAAAzIi2AAIAABuICcAAIAAAyIicAAIAABxIC2AAIAAAzg");
	this.shape_12.setTransform(697.5,129.65);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(596.1,13.9,355.79999999999995,135), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("ABxGtIiXkXIhKBQIAADHIiBAAQgSAAgNgNQgMgMAAgSIAAsuICsAAIAAHGIC7jaIDEAAIjPDiIDdGLg");
	mask.setTransform(71.475,71.475);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-35.7,-35.7,35.8,35.8).s().p("ArKAAILKrKILLLKIrLLLg");
	this.shape.setTransform(71.475,71.475);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(43,28.6,57,85.80000000000001), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AjIE5IAAgBIgzAAQgSAAgNgMQgMgNAAgSIAApFICsAAIAAGRIABAGIAAApQAAASAMAMQAMANATAAIB/AAIAAAAIBKAAIAAnrICsAAIAAJxg");
	mask.setTransform(60.75,60.775);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-30.3,-30.3,30.4,30.4).s().p("ApfAAIJfpfIJgJfIpgJgg");
	this.shape.setTransform(60.75,60.75);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(31.3,29.5,59,62.599999999999994), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgqGtQgSAAgMgNQgNgNAAgRIAAsvICrAAIAANbg");
	mask.setTransform(51.575,51.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-25.8,-25.8,25.8,25.8).s().p("AoDAAIIDoDIIEIDIoEIEg");
	this.shape.setTransform(51.575,51.575);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(43,8.7,17.200000000000003,85.89999999999999), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgqE4QgSAAgNgMQgMgNAAgSIAApFICrAAIAAJxg");
	mask.setTransform(39.875,39.925);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-19.9,-19.9,20,20).s().p("AmOAAIGOmOIGPGOImPGPg");
	this.shape.setTransform(39.9,39.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(31.3,8.7,17.2,62.5), null);


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
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVBUIAAinICrAAIAACng");
	mask.setTransform(17,17.025);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-8.3,-8.3,8.3,8.3).s().p("AipAAICpipICqCpIiqCqg");
	this.shape.setTransform(17.025,17.025);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(8.4,8.7,17.299999999999997,16.7), null);


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
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlOGtQgSAAgNgMQgMgNAAgSIAAsvIHbAAQByAAA0AbQA9AeAfBFQAWAxAAAzQAABDgkA6QgjA5g2AWQB8A4AACRQAABVgoA4QggAxg4ASQg3AUhrgBgAjMEUID4AAQAoABASgFQASgEAQgNQAogegBg2QAAg2glgXQgcgSg+AAIj8AAgAjMhLID4AAQAlAAAUgEQAQgEATgNQAogfgBg2QAAg1glgYQgbgRg/gBIj8AAg");
	mask.setTransform(80.75,80.75);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-40.3,-40.3,34.3,34.3).s().p("AsnAAIMnsnIMnMnIsnMng");
	this.shape.setTransform(80.75,80.75);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(43,37.8,75.6,85.9), null);


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
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgqE5QhcAAgrgGQgkgFgegUQhMgzAAhnQAAhAAegxQAfgwAxgSQAtgQBmAAIDSAAQAAhBgbgXQgbgXhOAAIkiAAIAAiGIEiAAQBOAAAeADQAfADAdAJQCPA2gHDMIAAFggAh+BRQgRAPAAAbQAAAfAVAMQAUANA0AAIDGAAIAAhxIjjgBQgeAAgRAQg");
	mask.setTransform(63.2664,63.475);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-29.5,-29.5,31.5,31.5).s().p("Ap6AAIJ6p6IJ7J6Ip7J7g");
	this.shape.setTransform(63.475,63.475);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(31.3,32.2,64,62.599999999999994), null);


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
	mask.graphics.p("AgFGuIAAgBIg+AAQgSAAgNgNQgNgNABgRIAAnBIhuAAIAAiGIBuAAIAAjoICrAAIAADoICgAAIAACGIigAAIAAE7QAAASAMAMQANANASAAIB1AAIAACHg");
	mask.setTransform(65.05,65.1);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-26.3,-26.3,31.8,31.8).s().p("AqKAAIKKqKIKLKKIqLKLg");
	this.shape.setTransform(65.05,65.075);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(43,22.2,44.2,85.89999999999999), null);


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
	mask.graphics.p("ACjE4QgSAAgNgMQgMgNAAgSIAAloQAAgugVgVQgVgVgvAAIiWAAIAAHsIiBgBQgRAAgNgMQgNgNAAgSIAApFIFMAAQBMAAAmAKQAoAMAfAcQBCA7gBCDIAAGBg");
	mask.setTransform(60.4,60.425);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-30.2,-30.2,30.2,30.2).s().p("ApbAAIJbpbIJcJbIpcJcg");
	this.shape.setTransform(60.425,60.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(31.3,29.2,58.3,62.5), null);


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
	mask.graphics.p("AFkGtQgRgBgMgKQgMgLgCgQIAApeIjhKEIi8AAIjUqEIAAKEIiDAAQgSAAgMgNQgNgNAAgSIAAstIELAAIDWKcIDhqcIELAAIAANZg");
	mask.setTransform(91.675,91.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A37B3E","#FEC97E","#ECCD8C","#BC9454","#A37B3E"],[0,0.2,0.498,0.8,1],-45.8,-45.8,45.9,45.9).s().p("AuUAAIOUuUIOVOUIuVOVg");
	this.shape.setTransform(91.675,91.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(43,48.8,97.4,85.89999999999999), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAGACQAGACAFADQAFADADAEIAFAIIACAJIABAHQAAAHgDAIQgCAGgGAGQgFAGgJACQgHAEgKAAgAgWAdIAMAAQAIAAAFgCQAGgCAEgDQAFgEACgFQACgFABgIIgBgIQgCgEgDgFQgEgFgGgDQgFgDgJAAIgPAAg");
	this.shape.setTransform(47.05,38.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAjQgGgDgBgJIAKgDQABAFADACQADADAEAAQADAAACgCQADgBABgCIACgGIABgGIAAg0IAKAAIAAA3QAAAHgCAFQgCAEgEADQgDADgFABIgGABQgIAAgGgFg");
	this.shape_1.setTransform(39.8,38.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_2.setTransform(35.975,38.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATAnIgTg/IgSA/IgLAAIgXhNIALAAIASA+IASg+IALAAIASA+IARg+IAMAAIgXBNg");
	this.shape_3.setTransform(29.15,38.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAGACQAGACAFADQAFADADAEIAFAIIACAJIABAHQAAAHgDAIQgCAGgGAGQgFAGgJACQgIAEgJAAgAgWAdIAMAAQAIAAAEgCQAHgCAEgDQAEgEADgFQADgFAAgIIgBgIQgCgEgDgFQgEgFgGgDQgGgDgIAAIgPAAg");
	this.shape_4.setTransform(19.95,38.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAKAAIAABDIAjAAIAAAKg");
	this.shape_5.setTransform(13.325,38.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_6.setTransform(6.925,38.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOAnIgSgiIgMAAIAAAiIgLAAIAAhNIAbAAQAHAAAFACQAFACADAEIAEAGIABAIIgCAHIgDAHIgHADQgDACgFAAIAXAkgAgQgDIAOAAIAFgBIAFgCQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAQABgDAAgEQAAgEgBgDQgBgCgDgCIgFgBIgFAAIgOAAg");
	this.shape_7.setTransform(0.375,38.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_8.setTransform(-6.475,38.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATAnIgTg/IgSA/IgLAAIgXhNIALAAIASA+IASg+IALAAIASA+IARg+IAMAAIgXBNg");
	this.shape_9.setTransform(-15.4,38.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAHACQAFACAFADQAFADADAEIAEAIIADAJIABAHQAAAIgDAGQgDAIgFAFQgGAGgHADQgJADgJAAgAgXAdIAOAAQAHAAAEgBQAGgCAFgEQAEgEADgFQACgGAAgHIgBgHQgBgFgDgFQgEgEgFgEQgHgDgIAAIgQAAg");
	this.shape_10.setTransform(50.7,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAOAnIgSgjIgMAAIAAAjIgLAAIAAhNIAbAAQAHAAAFACQAFACADADIAEAHIABAIIgCAHIgDAGIgHAEQgDACgFAAIAXAkgAgQgEIAOAAIAFAAIAFgCQABAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQABgDAAgEQAAgEgBgDQgBgCgDgBIgFgCIgFAAIgOAAg");
	this.shape_11.setTransform(43.525,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_12.setTransform(36.675,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_13.setTransform(29.975,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAKAAIAABDIAjAAIAAAKg");
	this.shape_14.setTransform(23.975,23.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLAmQgFgDgEgEQgFgEgCgFQgCgGAAgHIAAgwIAKAAIAAAvIABAIQABADADADQACAEAEACQADACAFAAQAGAAADgCQAEgCACgEQADgDABgDIABgIIAAgvIAKAAIAAAwQAAAHgCAGQgCAFgFAEQgEAEgFADQgGACgGAAQgFAAgGgCg");
	this.shape_15.setTransform(16.775,23.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLAlQgHgCgGgGQgFgGgDgHQgDgIAAgIQAAgHADgIQADgHAGgGQAFgGAIgDQAHgDAIAAQALAAAHADQAGADAFAEIgHAIQgFgFgGgBQgFgCgGAAQgGAAgFADQgFACgEAEQgEAFgCAFQgCAFAAAGQAAAHACAFQACAGAEAEQAEAEAGACQAFADAGAAIAKgBQAGgBADgCIAAgWIgRAAIAAgJIAcAAIAAAmIgHADIgHACIgIABIgIABQgJAAgIgEg");
	this.shape_16.setTransform(8.425,23.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_17.setTransform(1.275,23.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAOAnIgSgjIgMAAIAAAjIgLAAIAAhNIAbAAQAHAAAFACQAFACADADIAEAHIABAIIgCAHIgDAGIgHAEQgDACgFAAIAXAkgAgQgEIAOAAIAFAAIAFgCQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAQABgDAAgEQAAgEgBgDQgBgCgDgBIgFgCIgFAAIgOAAg");
	this.shape_18.setTransform(-5.275,23.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_19.setTransform(-12.125,23.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLAlQgHgCgGgGQgFgGgDgHQgDgIAAgIQAAgHADgIQADgHAGgGQAFgGAIgDQAHgDAIAAQALAAAHADQAGADAFAEIgHAIQgFgFgGgBQgFgCgGAAQgGAAgFADQgFACgEAEQgEAFgCAFQgCAFAAAGQAAAHACAFQACAGAEAEQAEAEAGACQAFADAGAAIAKgBQAGgBADgCIAAgWIgRAAIAAgJIAcAAIAAAmIgHADIgHACIgIABIgIABQgJAAgIgEg");
	this.shape_20.setTransform(-20.225,23.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLAmQgHgDgGgGQgFgGgDgIQgDgGAAgJQAAgIADgHQADgIAGgFQAFgGAIgDQAHgDAIAAQALAAAHADQAGACAFAFIgHAIQgFgEgGgCQgFgCgGAAQgGAAgFACQgFADgEAEQgEAEgCAGQgCAGAAAFQAAAHACAFQACAGAEAEQAEAFAGACQAFACAGAAIAKgBQAGgBADgCIAAgWIgRAAIAAgJIAcAAIAAAmIgHADIgHACIgIABIgIABQgJAAgIgDg");
	this.shape_21.setTransform(37.625,9.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_22.setTransform(32.025,9.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAHACQAFACAFADQAFADADAEIAEAJIADAIIABAHQAAAIgDAGQgCAIgGAFQgFAGgJADQgHADgKAAgAgXAdIAOAAQAGAAAFgBQAHgCAEgEQAEgEADgFQADgFAAgIIgCgHQgBgGgDgEQgEgFgFgDQgHgDgIAAIgQAAg");
	this.shape_23.setTransform(26.6,9.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_24.setTransform(19.275,9.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAKAAIAABDIAjAAIAAAKg");
	this.shape_25.setTransform(13.275,9.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAKAAIAABDIAjAAIAAAKg");
	this.shape_26.setTransform(7.575,9.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgIAGgFQAFgGAIgDQAHgDAIAAQAJAAAHADQAIADAFAGQAGAFADAIQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgcQgFADgEAEQgEAEgCAGQgCAGAAAFQAAAHACAFQACAGAEAEQAEAEAFADQAFACAGAAQAHAAAFgCQAGgDADgEQAEgEACgGQACgFAAgHQAAgFgCgGQgCgGgEgEQgDgEgGgDQgFgCgHAAQgGAAgFACg");
	this.shape_27.setTransform(-0.325,9.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEAnIgehNIAMAAIAWA+IAYg+IALAAIgeBNg");
	this.shape_28.setTransform(-8.375,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-39,0,108.4,47.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAeAnIAAg/IAAAAIgaA/IgGAAIgbg/IAAA/IgLAAIAAhNIAQAAIAYA6IAAAAIAZg6IAQAAIAABNg");
	this.shape.setTransform(49.675,38.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgHAGgGQAFgFAIgEQAHgDAIAAQAJAAAHADQAIAEAFAFQAGAGADAHQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgbQgFACgEAEQgEAEgCAGQgCAGAAAFQAAAGACAGQACAGAEAEQAEAEAFACQAFADAGAAQAHAAAFgDQAGgCADgEQAEgEACgGQACgGAAgGQAAgFgCgGQgCgGgEgEQgDgEgGgCQgFgDgHAAQgGAAgFADg");
	this.shape_1.setTransform(40.125,38.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgHAGgGQAFgFAIgEQAHgDAIAAQAJAAAHADQAIAEAFAFQAGAGADAHQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgbQgFACgEAEQgEAEgCAGQgCAGAAAFQAAAGACAGQACAGAEAEQAEAEAFACQAFADAGAAQAHAAAFgDQAGgCADgEQAEgEACgGQACgGAAgGQAAgFgCgGQgCgGgEgEQgDgEgGgCQgFgDgHAAQgGAAgFADg");
	this.shape_2.setTransform(30.975,38.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAnIAAhNIAaAAQAFAAAFACQAEABADACIAFAGQABAEAAAFQABAGgEAEQgEAFgFACQADAAADABIAFAEIAEAGIABAHQAAAFgCAFQgCAEgEADQgEACgEABQgFACgGAAgAgPAeIAPAAIAEgBIAGgCIAEgDQACgEAAgDQAAgIgFgDQgEgEgHAAIgPAAgAgPgGIAOAAIAEAAIAFgCIADgEIABgFQAAgFgCgEQgDgCgHAAIgPAAg");
	this.shape_3.setTransform(23.15,38.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAnIAAhNIAxAAIAAAKIgmAAIAAAZIAjAAIAAAJIgjAAIAAAhg");
	this.shape_4.setTransform(16.6,38.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_5.setTransform(10.075,38.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUAnIAAgkIgnAAIAAAkIgLAAIAAhNIALAAIAAAgIAnAAIAAggIALAAIAABNg");
	this.shape_6.setTransform(2.375,38.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAkQgFgEgDgGQgDgGgBgHIgBgNIAAgIIACgJIADgJIAFgHIAHgFQAEgBAFAAQAFAAAEABQAFACADADIAFAHIADAJIABAJIABAIIgBANQgBAHgDAGQgDAGgGAEQgFAEgIAAQgHAAgGgEgAgFgdQgDACgCACIgDAGIgBAHIgBAHIAAAFIAAAJIACAKQACAFADADQADAEAFAAQAFAAAEgEQADgDACgFIACgKIAAgJIAAgFIgBgHIgBgHIgDgGIgFgEQgCgBgEAAQgDAAgCABg");
	this.shape_7.setTransform(37.175,23.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAkQgFgEgDgGQgDgGgBgHIgBgNIAAgIIACgJIADgJIAFgHIAHgFQAEgBAFAAQAFAAAEABQAFACADADIAFAHIADAJIABAJIABAIIgBANQgBAHgDAGQgDAGgGAEQgFAEgIAAQgHAAgGgEgAgFgdQgDACgCACIgDAGIgBAHIgBAHIAAAFIAAAJIACAKQACAFADADQADAEAFAAQAFAAAEgEQADgDACgFIACgKIAAgJIAAgFIgBgHIgBgHIgDgGIgFgEQgCgBgEAAQgDAAgCABg");
	this.shape_8.setTransform(31.075,23.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAkQgHgFgCgHIAKgEQACAGAEACQADACAFAAIAFgBIAFgDIAEgFIABgHQAAgIgFgEQgGgEgHAAIgIABIgIACIABgoIApAAIAAAKIgfAAIAAAUIACgBIADAAIADgBIABAAQAGAAAEACQAEACAEADIAFAHQABAFAAAGQAAAGgCAEQgCAFgEAEQgDADgFACQgFACgFAAQgIAAgGgEg");
	this.shape_9.setTransform(24.825,23.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAZQgCgCAAgDQAAgDACgCQACgDACAAQADAAACADQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCgAgEgNQgCgCAAgDQAAgDACgCQACgDACAAQADAAACADQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_10.setTransform(20.375,24.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFAnIAAhBIgNANIgHgHIAVgSIAKAAIAABNg");
	this.shape_11.setTransform(15.225,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEAnIAAhDIgaAAIAAgKIA9AAIAAAKIgaAAIAABDg");
	this.shape_12.setTransform(34.2,9.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgIAGgFQAFgGAIgDQAHgDAIAAQAJAAAHADQAIADAFAGQAGAFADAIQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgcQgFADgEAEQgEAEgCAGQgCAGAAAFQAAAHACAFQACAGAEAEQAEAEAFADQAFACAGAAQAHAAAFgCQAGgDADgEQAEgEACgGQACgFAAgHQAAgFgCgGQgCgGgEgEQgDgEgGgDQgFgCgHAAQgGAAgFACg");
	this.shape_13.setTransform(26.475,9.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEAnIAAhDIgaAAIAAgKIA8AAIAAAKIgZAAIAABDg");
	this.shape_14.setTransform(18.75,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-3.7,0,60.5,62.4), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUAnIgqg/IAAAAIAAA/IgLAAIAAhNIAOAAIAqA/IAAg/IALAAIAABNg");
	this.shape.setTransform(82.275,38.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_1.setTransform(74.825,38.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAmQgHgDgEgFIAJgHQACAEAFACQAEACAFAAIAEgBIAGgCIADgEQACgCAAgEQAAgFgDgCIgHgDIgJgEIgJgEQgEgCgDgEQgDgFAAgHIACgIIAFgHIAIgEQAFgDAGAAQAGAAAGACQAGACAEAFIgJAIQgBgDgEgCQgDgCgFAAIgHABIgEADIgDAEIgBAEQAAAFAEADIAGAEIAJADQAFABAEACQAEACADAEQADAEAAAHQAAAFgCAFQgCAFgEADQgDACgFACQgGACgEAAQgIAAgGgDg");
	this.shape_2.setTransform(68.05,38.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAGACQAHACAEADQAFADADAEIAFAIIACAJIABAHQAAAHgDAIQgDAGgFAGQgGAGgHACQgIAEgKAAgAgWAdIAMAAQAHAAAGgCQAFgCAFgDQAFgEACgFQACgFABgIIgBgIQgCgEgDgFQgDgFgHgDQgFgDgJAAIgPAAg");
	this.shape_3.setTransform(61.2,38.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUAnIgqg/IAAAAIAAA/IgLAAIAAhNIAOAAIAqA/IAAg/IALAAIAABNg");
	this.shape_4.setTransform(52.575,38.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgHAGgGQAFgFAIgEQAHgDAIAAQAJAAAHADQAIAEAFAFQAGAGADAHQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgbQgFACgEAEQgEAEgCAGQgCAGAAAFQAAAGACAGQACAGAEAEQAEAEAFACQAFADAGAAQAHAAAFgDQAGgCADgEQAEgEACgGQACgGAAgGQAAgFgCgGQgCgGgEgEQgDgEgGgCQgFgDgHAAQgGAAgFADg");
	this.shape_5.setTransform(43.625,38.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAnIAAhNIAwAAIAAAKIglAAIAAAZIAjAAIAAAJIgjAAIAAAhg");
	this.shape_6.setTransform(36.2,38.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUAnIgqg/IAAAAIAAA/IgLAAIAAhNIAOAAIAqA/IAAg/IALAAIAABNg");
	this.shape_7.setTransform(25.325,38.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaAnIgIgTIgkAAIgHATIgNAAIAjhNIAIAAIAiBNgAgOAKIAdAAIgPgiIAAAAg");
	this.shape_8.setTransform(17.075,38.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAnIgehNIAMAAIAWA/IAYg/IALAAIgeBNg");
	this.shape_9.setTransform(9.725,38.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_10.setTransform(67.775,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAeAnIAAg/IAAAAIgaA/IgGAAIgbg/IAAA/IgLAAIAAhNIAQAAIAYA6IAAAAIAZg6IAQAAIAABNg");
	this.shape_11.setTransform(59.175,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAaAnIgIgTIgkAAIgHATIgNAAIAjhNIAIAAIAiBNgAgOAKIAdAAIgPgiIAAAAg");
	this.shape_12.setTransform(50.325,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAUAnIgqg/IAAAAIAAA/IgLAAIAAhNIAOAAIAqA/IAAg/IALAAIAABNg");
	this.shape_13.setTransform(42.075,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAaAAQAIAAAEACQAFACADADIAEAHIABAIIgBAIIgEAHQgDACgFABQgEACgIAAIgQAAIAAAjgAgPgEIAOAAIAFAAIAGgCQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAQACgDAAgEQAAgEgCgDQgBgCgCgBIgGgCIgFAAIgOAAg");
	this.shape_14.setTransform(34.825,23.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAmQgIgEgFgFQgGgFgDgIQgDgHAAgJQAAgHADgIQADgHAGgGQAFgGAIgDQAHgDAIAAQAJAAAHADQAIADAFAGQAGAGADAHQADAIAAAHQAAAJgDAHQgDAIgGAFQgFAFgIAEQgHADgJAAQgIAAgHgDgAgLgbQgFACgEAEQgEAFgCAFQgCAFAAAGQAAAGACAGQACAGAEAEQAEAEAFACQAFADAGAAQAHAAAFgDQAGgCADgEQAEgEACgGQACgGAAgGQAAgGgCgFQgCgFgEgFQgDgEgGgCQgFgDgHAAQgGAAgFADg");
	this.shape_15.setTransform(26.625,23.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_16.setTransform(87.125,9.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAQAnIgjgnIgBAAIAAAnIgLAAIAAhNIALAAIAAAiIABAAIAigiIAOAAIgkAkIAmApg");
	this.shape_17.setTransform(80.5,9.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOAkQgFgFgCgIIAKgCQABAEADADQADACAEAAQADAAACgBQADgCABgDIACgFIABgHIAAgzIAKAAIAAA3QAAAHgCAFQgCAFgEACQgDADgFABIgGABQgIAAgGgEg");
	this.shape_18.setTransform(73.35,9.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_19.setTransform(69.525,9.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAKAAIAABDIAjAAIAAAKg");
	this.shape_20.setTransform(65.625,9.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIAKAAIAABDIAjAAIAAAKg");
	this.shape_21.setTransform(59.925,9.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAxAAIAAAKIgnAAIAAAXIAkAAIAAAJIgkAAIAAAZIApAAIAAAKg");
	this.shape_22.setTransform(53.525,9.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAGACQAHACAEADQAFADADAEIAEAJIADAIIABAHQAAAIgDAGQgDAIgFAFQgGAGgHADQgJADgJAAgAgXAdIANAAQAHAAAGgBQAFgCAFgEQAEgEADgFQADgFgBgIIgBgHQgBgGgDgEQgDgFgHgDQgFgDgJAAIgQAAg");
	this.shape_23.setTransform(46,9.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAbAAQAHAAAHACQAFACAFADQAFADADAEIAEAJIADAIIABAHQAAAIgDAGQgCAIgGAFQgFAGgJADQgHADgKAAgAgXAdIAOAAQAGAAAFgBQAHgCAEgEQAFgEACgFQADgFAAgIIgCgHQgBgGgDgEQgEgFgFgDQgHgDgIAAIgQAAg");
	this.shape_24.setTransform(37.85,9.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_25.setTransform(32.075,9.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAeAnIAAg/IAAAAIgaA/IgGAAIgbg/IAAA/IgLAAIAAhNIAQAAIAYA6IAAAAIAZg6IAQAAIAABNg");
	this.shape_26.setTransform(25.575,9.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAUAnIgqg/IAAAAIAAA/IgLAAIAAhNIAOAAIAqA/IAAg/IALAAIAABNg");
	this.shape_27.setTransform(16.225,9.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgPAmQgIgDgFgGQgGgGgDgHQgDgHAAgJQAAgIADgHQADgIAGgFQAFgGAIgDQAHgDAIAAQAJAAAHADQAIADAFAGQAGAFADAIQADAHAAAIQAAAJgDAHQgDAHgGAGQgFAGgIADQgHADgJAAQgIAAgHgDgAgLgcQgFADgEAEQgEAEgCAGQgCAGAAAFQAAAHACAFQACAGAEAEQAEAEAFADQAFACAGAAQAHAAAFgCQAGgDADgEQAEgEACgGQACgFAAgHQAAgFgCgGQgCgGgEgEQgDgEgGgDQgFgCgHAAQgGAAgFACg");
	this.shape_28.setTransform(7.275,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0.6,0,91.7,62.4), null);


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
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-0.1,0,0,-0.1,0,30.5).s().p("AgRD+IAAn7IAjAAIAAH7g");
	this.shape.setTransform(1.05,22.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-0.7,-3.2,3.5999999999999996,50.800000000000004), null);


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
	this.instance = new lib.Symbol8();
	this.instance.setTransform(1.3,1.3,1,1,0,0,0,1.3,1.3);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 2)];
	this.instance.cache(-2,-2,7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-4,-4,14,14), null);


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
	this.instance = new lib.Symbol4();
	this.instance.setTransform(1.3,1.3,0.3939,0.3939,0,0,0,3.3,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,2.6,2.6), null);


(lib.Symbol5copy4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol6();
	this.instance.setTransform(1.3,1.3,1,1,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-89,y:-7.65,alpha:0},106).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.3,-8.9,92.89999999999999,11.5);


(lib.Symbol5copy3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol6();
	this.instance.setTransform(1.3,1.3,1,1,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-63.85,y:-16.85,alpha:0},86).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.1,-18.1,67.69999999999999,20.700000000000003);


(lib.Symbol5copy2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol9();
	this.instance.setTransform(-6.25,1.3,1,1,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:44.05,y:-4.7},109).wait(17));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-10,65.3,20);


(lib.Symbol5copy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol9();
	this.instance.setTransform(-6.25,1.3,1,1,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:1.4,scaleX:1.5769,scaleY:1.5769,x:85.8,y:-2},180).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-8.1,107.1,18.1);


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
	this.instance = new lib.Symbol6();
	this.instance.setTransform(1.3,1.3,1,1,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-85,y:30.55,alpha:0},60).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.3,0,88.89999999999999,31.9);


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

	// timeline functions:
	this.frame_151 = function() {
		if (ctaCounter++ >=6){
			this.stop();
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(151).call(this.frame_151).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181649").s().p("AhkC2IAAlrIBWAAQAsAAAZAMQAZAMAKAZQALAZAAAnIAACEQAAAogLAaQgKAbgZANQgYAMgqAAgAghCIIAUAAQAWAAAKgIQAKgIACgQQACgPAAgXIAAiKQAAgWgDgOQgDgNgKgHQgKgGgVAAIgTAAg");
	this.shape.setTransform(290.125,40.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#181649").s().p("Ag+CqQgXgPgIgcQgJgbAAgmIAAj2IBBAAIAAD9QAAASADAPQACAPAIAJQAIAJAQAAQARAAAIgJQAIgJACgPQADgPAAgSIAAj9IBBAAIAAD2QAAAmgJAbQgIAcgXAPQgWAPgpAAQgnAAgXgPg");
	this.shape_1.setTransform(264.6,40.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#181649").s().p("Ag9CsQgYgOgJgbQgKgbAAglIAAiHQAAglAKgbQAJgaAYgOQAXgOAmAAQAnAAAWAOQAYAOAKAaQAKAbAAAlIAACHQAAAlgKAbQgKAagYAPQgWAPgnAAQgmAAgXgPgAgXiCQgJAHgCAMQgDAMAAAPIAACnQAAAPACANQADAMAIAIQAJAHAPAAQAQAAAIgHQAIgIACgMQADgNAAgPIAAinQAAgPgDgMQgCgMgIgHQgIgHgQAAQgQAAgHAHg");
	this.shape_2.setTransform(239.2,40.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#181649").s().p("Ag+CrQgWgPgJgcQgJgcAAgmIAAh6QAAgnAJgcQAJgdAXgPQAXgPAnAAQAlAAAWANQAWAMAKAYQAKAYAAAhIAAATIhAAAIAAgUQAAgSgCgMQgDgNgIgHQgHgGgQAAQgRAAgIAIQgIAJgCAOQgCAOAAAQIAACYQAAATADAOQADAOAJAHQAIAIAPAAQARAAAIgJQAIgHAEgPQADgOAAgUIAAgiIgnAAIAAgpIBjAAIAAC4IgrAAIgEgkQgIASgPALQgOAMgYAAQgkAAgVgQg");
	this.shape_3.setTransform(213.85,40.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#181649").s().p("AhMC2IAAlrIBCAAIAAE9IBXAAIAAAug");
	this.shape_4.setTransform(181.925,40.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#181649").s().p("AhMC2IAAlrICYAAIAAAvIhVAAIAABoIBCAAIAAAuIhCAAIAAB4IBWAAIAAAug");
	this.shape_5.setTransform(162.65,40.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#181649").s().p("AhkC2IAAlrIBWAAQAsAAAZAMQAZAMAKAZQALAZAAAnIAACEQAAAogLAaQgKAbgZANQgYAMgqAAgAghCIIAUAAQAWAAAKgIQAKgIACgQQACgPAAgXIAAiKQAAgWgDgOQgDgNgKgHQgKgGgVAAIgTAAg");
	this.shape_6.setTransform(139.975,40.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#181649").s().p("AAzC2IhYjYIAADYIg5AAIAAlrIAvAAIBXDPIAAjPIA3AAIAAFrg");
	this.shape_7.setTransform(114.9,40.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#181649").s().p("AAvC2IgPhUIg+AAIgPBUIg/AAIBKlrIBFAAIBKFrgAgXA4IAwAAIgYiYg");
	this.shape_8.setTransform(90.9,40.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#181649").s().p("AAlC2IAAilIhJAAIAAClIhDAAIAAlrIBDAAIAACYIBJAAIAAiYIBCAAIAAFrg");
	this.shape_9.setTransform(66,40.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(152));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_27 = new cjs.Graphics().p("A4VGLQhFAAgxguQgxgtAAg/IAAnDQAAhAAxgtQAxgtBFAAMAxdAAAQBFAAAxAtQAxAtAABAIAAHDQAAA/gxAtQgxAuhFAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_graphics_27,x:177.499,y:39.4679}).wait(125));

	// Layer_5
	this.instance = new lib.Symbol15();
	this.instance.setTransform(431.4,20.5,1.4054,1.4054,0,0,0,62.7,62.6);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({x:-93.1,y:70.35},30,cjs.Ease.cubicOut).wait(7).to({x:-54.95},0).to({x:446.7,y:20.5},27,cjs.Ease.cubicOut).wait(61));

	// Layer_1
	this.instance_1 = new lib.CTA();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(152));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.7,360,84.7);


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
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(48.75,56.85,1,1,0,0,0,91.7,91.7);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(477.25,68.5,1,1,0,0,0,60.4,60.4);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.setTransform(229.15,56.75,1,1,0,0,0,65,65);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.setTransform(405.25,68.55,1,1,0,0,0,63.5,63.5);

	this.instance_4 = new lib.ClipGroup_4();
	this.instance_4.setTransform(328.6,56.7,1,1,0,0,0,80.8,80.8);

	this.instance_5 = new lib.ClipGroup_5();
	this.instance_5.setTransform(271,22.25,1,1,0,0,0,17,17);

	this.instance_6 = new lib.ClipGroup_6();
	this.instance_6.setTransform(271.05,68.5,1,1,0,0,0,39.9,39.9);

	this.instance_7 = new lib.ClipGroup_7();
	this.instance_7.setTransform(187.3,56.85,1,1,0,0,0,51.6,51.6);

	this.instance_8 = new lib.ClipGroup_8();
	this.instance_8.setTransform(138.25,68.55,1,1,0,0,0,60.8,60.8);

	this.instance_9 = new lib.ClipGroup_9();
	this.instance_9.setTransform(546.1,56.85,1,1,0,0,0,71.5,71.5);

	this.instance_10 = new lib.ClipGroup_10();
	this.instance_10.setTransform(514.5,74.4,1,1,0,0,0,514.5,74.4);

	this.instance_11 = new lib.ClipGroup_11();
	this.instance_11.setTransform(978.45,31.5,1,1,0,0,0,19.7,19.8);

	this.instance_12 = new lib.ClipGroup_12();
	this.instance_12.setTransform(993.6,19.85,1,1,0,0,0,25.1,25.1);

	this.instance_13 = new lib.ClipGroup_13();
	this.instance_13.setTransform(1008.6,31.25,1,1,0,0,0,25,25);

	this.instance_14 = new lib.ClipGroup_14();
	this.instance_14.setTransform(1023.7,19.85,1,1,0,0,0,25,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-42.9,-34.8,1091.7,183.7), null);


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

	// timeline functions:
	this.frame_55 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(55).call(this.frame_55).wait(1));

	// Symbol 18
	this.instance = new lib.Symbol18();
	this.instance.setTransform(206.6,11.8,1,1,0,0,0,42.1,15.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({y:15.3,alpha:1},17,cjs.Ease.quadOut).wait(12));

	// Symbol 19
	this.instance_1 = new lib.Symbol19();
	this.instance_1.setTransform(112.25,20.3,1,1,0,0,0,27.5,15.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({y:15.3,alpha:1},17,cjs.Ease.quadOut).wait(25));

	// Symbol 20
	this.instance_2 = new lib.Symbol20();
	this.instance_2.setTransform(35.3,20.3,1,1,0,0,0,35.3,15.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:15.3,alpha:1},17,cjs.Ease.quadOut).wait(39));

	// Symbol 16
	this.instance_3 = new lib.Symbol16();
	this.instance_3.setTransform(69.85,17.3,0.5,0.1159,0,0,0,1.1,17.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({scaleY:0.7224,y:18.65},12,cjs.Ease.quadOut).wait(34));

	// Symbol 16
	this.instance_4 = new lib.Symbol16();
	this.instance_4.setTransform(154.25,17.3,0.5,0.1159,0,0,0,1.1,17.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({scaleY:0.7224,y:18.65},11,cjs.Ease.quadOut).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-3.5,295.8,70.9);


(lib.Symbol10copy2 = function(mode,startPosition,loop,reversed) {
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
	this.frame_74 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(1));

	// Layer_4 copy 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_43 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_44 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_45 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_46 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_47 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_48 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_49 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_50 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_51 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_52 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_53 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_54 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_55 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_56 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_57 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_58 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_59 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_60 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_61 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_62 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_63 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_64 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");
	var mask_graphics_65 = new cjs.Graphics().p("AteFmIAAlEIa9AAIAAFEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(43).to({graphics:mask_graphics_43,x:-6.1,y:35.8}).wait(1).to({graphics:mask_graphics_44,x:-2.533,y:35.8}).wait(1).to({graphics:mask_graphics_45,x:1.0158,y:35.8}).wait(1).to({graphics:mask_graphics_46,x:4.5283,y:35.8}).wait(1).to({graphics:mask_graphics_47,x:7.9867,y:35.8}).wait(1).to({graphics:mask_graphics_48,x:11.3733,y:35.8}).wait(1).to({graphics:mask_graphics_49,x:14.6708,y:35.8}).wait(1).to({graphics:mask_graphics_50,x:17.8625,y:35.8}).wait(1).to({graphics:mask_graphics_51,x:20.9321,y:35.8}).wait(1).to({graphics:mask_graphics_52,x:23.8639,y:35.8}).wait(1).to({graphics:mask_graphics_53,x:26.6431,y:35.8}).wait(1).to({graphics:mask_graphics_54,x:29.2554,y:35.8}).wait(1).to({graphics:mask_graphics_55,x:31.6875,y:35.8}).wait(1).to({graphics:mask_graphics_56,x:33.9271,y:35.8}).wait(1).to({graphics:mask_graphics_57,x:35.9627,y:35.8}).wait(1).to({graphics:mask_graphics_58,x:37.784,y:35.8}).wait(1).to({graphics:mask_graphics_59,x:39.3816,y:35.8}).wait(1).to({graphics:mask_graphics_60,x:40.7475,y:35.8}).wait(1).to({graphics:mask_graphics_61,x:41.8747,y:35.8}).wait(1).to({graphics:mask_graphics_62,x:42.7574,y:35.8}).wait(1).to({graphics:mask_graphics_63,x:43.3911,y:35.8}).wait(1).to({graphics:mask_graphics_64,x:43.7727,y:35.8}).wait(1).to({graphics:mask_graphics_65,x:43.9,y:35.8}).wait(10));

	// Symbol 27
	this.instance = new lib.Symbol30();
	this.instance.setTransform(104.45,52.85,1,1,0,0,0,23.4,6.9);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).wait(32));

	// Layer_4 copy 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_15 = new cjs.Graphics().p("At0DqIAAlCIa9AAIAAFCg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AtmDqIAAlCIbNAAIAAFCg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AtuDqIAAlCIbdAAIAAFCg");
	var mask_1_graphics_18 = new cjs.Graphics().p("At2DqIAAlCIbtAAIAAFCg");
	var mask_1_graphics_19 = new cjs.Graphics().p("At+DqIAAlCIb9AAIAAFCg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AuGDqIAAlCIcNAAIAAFCg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AuODqIAAlCIcdAAIAAFCg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AuWDqIAAlCIctAAIAAFCg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AueDqIAAlCIc9AAIAAFCg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AulDqIAAlCIdLAAIAAFCg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AutDqIAAlCIdbAAIAAFCg");
	var mask_1_graphics_26 = new cjs.Graphics().p("Au0DqIAAlCIdpAAIAAFCg");
	var mask_1_graphics_27 = new cjs.Graphics().p("Au8DqIAAlCId5AAIAAFCg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AvDDqIAAlCIeHAAIAAFCg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AvKDqIAAlCIeVAAIAAFCg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AvRDqIAAlCIejAAIAAFCg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AvXDqIAAlCIevAAIAAFCg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AveDqIAAlCIe9AAIAAFCg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AvkDqIAAlCIfJAAIAAFCg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AvqDqIAAlCIfVAAIAAFCg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AvwDqIAAlCIfhAAIAAFCg");
	var mask_1_graphics_36 = new cjs.Graphics().p("Av2DqIAAlCIftAAIAAFCg");
	var mask_1_graphics_37 = new cjs.Graphics().p("Av7DqIAAlCIf3AAIAAFCg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AwADqIAAlCMAgBAAAIAAFCg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AwFDqIAAlCMAgLAAAIAAFCg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AwKDqIAAlCMAgVAAAIAAFCg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AwODqIAAlCMAgdAAAIAAFCg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AwSDqIAAlCMAglAAAIAAFCg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AwWDqIAAlCMAgtAAAIAAFCg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AwZDqIAAlCMAgzAAAIAAFCg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AwdDqIAAlCMAg7AAAIAAFCg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AwgDqIAAlCMAhBAAAIAAFCg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AwiDqIAAlCMAhFAAAIAAFCg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AwlDqIAAlCMAhLAAAIAAFCg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AwnDqIAAlCMAhPAAAIAAFCg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AwoDqIAAlCMAhRAAAIAAFCg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AwqDqIAAlCMAhVAAAIAAFCg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AwrDqIAAlCMAhXAAAIAAFCg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AwsDqIAAlCMAhZAAAIAAFCg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AwsDqIAAlCMAhZAAAIAAFCg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AwsDqIAAlCMAhZAAAIAAFCg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_1_graphics_15,x:-88.5,y:23.425}).wait(1).to({graphics:mask_1_graphics_16,x:-83.0583,y:23.425}).wait(1).to({graphics:mask_1_graphics_17,x:-75.4285,y:23.425}).wait(1).to({graphics:mask_1_graphics_18,x:-67.8222,y:23.425}).wait(1).to({graphics:mask_1_graphics_19,x:-60.2512,y:23.425}).wait(1).to({graphics:mask_1_graphics_20,x:-52.7271,y:23.425}).wait(1).to({graphics:mask_1_graphics_21,x:-45.2616,y:23.425}).wait(1).to({graphics:mask_1_graphics_22,x:-37.8661,y:23.425}).wait(1).to({graphics:mask_1_graphics_23,x:-30.5521,y:23.425}).wait(1).to({graphics:mask_1_graphics_24,x:-23.3308,y:23.425}).wait(1).to({graphics:mask_1_graphics_25,x:-16.2135,y:23.425}).wait(1).to({graphics:mask_1_graphics_26,x:-9.211,y:23.425}).wait(1).to({graphics:mask_1_graphics_27,x:-2.3341,y:23.425}).wait(1).to({graphics:mask_1_graphics_28,x:4.4065,y:23.425}).wait(1).to({graphics:mask_1_graphics_29,x:11.0005,y:23.425}).wait(1).to({graphics:mask_1_graphics_30,x:17.4377,y:23.425}).wait(1).to({graphics:mask_1_graphics_31,x:23.7081,y:23.425}).wait(1).to({graphics:mask_1_graphics_32,x:29.8021,y:23.425}).wait(1).to({graphics:mask_1_graphics_33,x:35.7103,y:23.425}).wait(1).to({graphics:mask_1_graphics_34,x:41.4236,y:23.425}).wait(1).to({graphics:mask_1_graphics_35,x:46.9331,y:23.425}).wait(1).to({graphics:mask_1_graphics_36,x:52.2304,y:23.425}).wait(1).to({graphics:mask_1_graphics_37,x:57.3074,y:23.425}).wait(1).to({graphics:mask_1_graphics_38,x:62.1561,y:23.425}).wait(1).to({graphics:mask_1_graphics_39,x:66.7692,y:23.425}).wait(1).to({graphics:mask_1_graphics_40,x:71.1394,y:23.425}).wait(1).to({graphics:mask_1_graphics_41,x:75.2601,y:23.425}).wait(1).to({graphics:mask_1_graphics_42,x:79.1249,y:23.425}).wait(1).to({graphics:mask_1_graphics_43,x:82.7278,y:23.425}).wait(1).to({graphics:mask_1_graphics_44,x:86.0633,y:23.425}).wait(1).to({graphics:mask_1_graphics_45,x:89.1263,y:23.425}).wait(1).to({graphics:mask_1_graphics_46,x:91.912,y:23.425}).wait(1).to({graphics:mask_1_graphics_47,x:94.4161,y:23.425}).wait(1).to({graphics:mask_1_graphics_48,x:96.6348,y:23.425}).wait(1).to({graphics:mask_1_graphics_49,x:98.5646,y:23.425}).wait(1).to({graphics:mask_1_graphics_50,x:100.2026,y:23.425}).wait(1).to({graphics:mask_1_graphics_51,x:101.5462,y:23.425}).wait(1).to({graphics:mask_1_graphics_52,x:102.5934,y:23.425}).wait(1).to({graphics:mask_1_graphics_53,x:103.3426,y:23.425}).wait(1).to({graphics:mask_1_graphics_54,x:103.7925,y:23.425}).wait(1).to({graphics:mask_1_graphics_55,x:103.9426,y:23.425}).wait(20));

	// Symbol 26
	this.instance_1 = new lib.Symbol29();
	this.instance_1.setTransform(104.6,33.15,1,1,0,0,0,105.2,7.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(60));

	// Layer_4 copy 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("ABGCiIAAlDICWAAIAAFDg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AAYCiIAAlDIDkAAIAAFDg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AgUCiIAAlDIEwAAIAAFDg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AhBCiIAAlDIF9AAIAAFDg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AhuCiIAAlDIHJAAIAAFDg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AiaCiIAAlDIIUAAIAAFDg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AjGCiIAAlDIJfAAIAAFDg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AjxCiIAAlDIKpAAIAAFDg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AkbCiIAAlDILwAAIAAFDg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AlECiIAAlDIM3AAIAAFDg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AltCiIAAlDIN8AAIAAFDg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AmUCiIAAlDIO/AAIAAFDg");
	var mask_2_graphics_12 = new cjs.Graphics().p("Am7CiIAAlDIQBAAIAAFDg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AngCiIAAlDIRAAAIAAFDg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AoECiIAAlDIR9AAIAAFDg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AomCiIAAlDIS4AAIAAFDg");
	var mask_2_graphics_16 = new cjs.Graphics().p("ApHCiIAAlDITwAAIAAFDg");
	var mask_2_graphics_17 = new cjs.Graphics().p("ApmCiIAAlDIUlAAIAAFDg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AqECiIAAlDIVYAAIAAFDg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AqgCiIAAlDIWHAAIAAFDg");
	var mask_2_graphics_20 = new cjs.Graphics().p("Aq6CiIAAlDIW0AAIAAFDg");
	var mask_2_graphics_21 = new cjs.Graphics().p("ArSCiIAAlDIXdAAIAAFDg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AroCiIAAlDIYDAAIAAFDg");
	var mask_2_graphics_23 = new cjs.Graphics().p("Ar9CiIAAlDIYmAAIAAFDg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AsPCiIAAlDIZFAAIAAFDg");
	var mask_2_graphics_25 = new cjs.Graphics().p("AsfCiIAAlDIZgAAIAAFDg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AsuCiIAAlDIZ5AAIAAFDg");
	var mask_2_graphics_27 = new cjs.Graphics().p("As6CiIAAlDIaOAAIAAFDg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AtECiIAAlDIafAAIAAFDg");
	var mask_2_graphics_29 = new cjs.Graphics().p("AtLCiIAAlDIarAAIAAFDg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AtRCiIAAlDIa1AAIAAFDg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AtUCiIAAlDIa7AAIAAFDg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AteCiIAAlDIa9AAIAAFDg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:22.025,y:14.175}).wait(1).to({graphics:mask_2_graphics_1,x:25.2207,y:14.175}).wait(1).to({graphics:mask_2_graphics_2,x:28.4087,y:14.175}).wait(1).to({graphics:mask_2_graphics_3,x:31.5814,y:14.175}).wait(1).to({graphics:mask_2_graphics_4,x:34.731,y:14.175}).wait(1).to({graphics:mask_2_graphics_5,x:37.85,y:14.175}).wait(1).to({graphics:mask_2_graphics_6,x:40.9309,y:14.175}).wait(1).to({graphics:mask_2_graphics_7,x:43.9663,y:14.175}).wait(1).to({graphics:mask_2_graphics_8,x:46.9487,y:14.175}).wait(1).to({graphics:mask_2_graphics_9,x:49.8712,y:14.175}).wait(1).to({graphics:mask_2_graphics_10,x:52.7265,y:14.175}).wait(1).to({graphics:mask_2_graphics_11,x:55.5079,y:14.175}).wait(1).to({graphics:mask_2_graphics_12,x:58.2087,y:14.175}).wait(1).to({graphics:mask_2_graphics_13,x:60.8222,y:14.175}).wait(1).to({graphics:mask_2_graphics_14,x:63.3423,y:14.175}).wait(1).to({graphics:mask_2_graphics_15,x:65.7629,y:14.175}).wait(1).to({graphics:mask_2_graphics_16,x:68.0781,y:14.175}).wait(1).to({graphics:mask_2_graphics_17,x:70.2823,y:14.175}).wait(1).to({graphics:mask_2_graphics_18,x:72.3703,y:14.175}).wait(1).to({graphics:mask_2_graphics_19,x:74.337,y:14.175}).wait(1).to({graphics:mask_2_graphics_20,x:76.1777,y:14.175}).wait(1).to({graphics:mask_2_graphics_21,x:77.8879,y:14.175}).wait(1).to({graphics:mask_2_graphics_22,x:79.4635,y:14.175}).wait(1).to({graphics:mask_2_graphics_23,x:80.9008,y:14.175}).wait(1).to({graphics:mask_2_graphics_24,x:82.1962,y:14.175}).wait(1).to({graphics:mask_2_graphics_25,x:83.3467,y:14.175}).wait(1).to({graphics:mask_2_graphics_26,x:84.3494,y:14.175}).wait(1).to({graphics:mask_2_graphics_27,x:85.202,y:14.175}).wait(1).to({graphics:mask_2_graphics_28,x:85.9024,y:14.175}).wait(1).to({graphics:mask_2_graphics_29,x:86.4489,y:14.175}).wait(1).to({graphics:mask_2_graphics_30,x:86.8403,y:14.175}).wait(1).to({graphics:mask_2_graphics_31,x:87.0754,y:14.175}).wait(1).to({graphics:mask_2_graphics_32,x:81.7,y:14.175}).wait(43));

	// Symbol 25
	this.instance_2 = new lib.Symbol28();
	this.instance_2.setTransform(104.85,13.45,1,1,0,0,0,61.6,7.1);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,0,216.1,66.8);


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

	// Layer_5
	this.instance = new lib.Symbol5copy();
	this.instance.setTransform(35.4,102.45,1.8077,1.8077,165.0008,0,0,1.3,1.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(321));

	// Layer_6
	this.instance_1 = new lib.Symbol5copy3();
	this.instance_1.setTransform(46.45,116.2,1.0435,1.0435,0,0,0,1.4,1.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(334));

	// Layer_4 copy 2
	this.instance_2 = new lib.Symbol5copy3();
	this.instance_2.setTransform(-29.55,154.2,1.0435,1.0435,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(342));

	// Layer_4 copy
	this.instance_3 = new lib.Symbol5copy3();
	this.instance_3.setTransform(-34.15,126.2,1.8461,1.8461,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(342));

	// Layer_4
	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(-40.7,-1.2,1,1,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(342));

	// Layer_2 copy
	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(45.9,-22.2,0.68,0.68,-9.6942,0,0,1.4,1.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(338));

	// Layer_2 copy 2
	this.instance_6 = new lib.Symbol5();
	this.instance_6.setTransform(45.8,-48.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({_off:false},0).wait(325));

	// Layer_2 copy 3
	this.instance_7 = new lib.Symbol5();
	this.instance_7.setTransform(101.8,-24.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(332));

	// Layer_2
	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(45.8,-28.65,1,1,-9.6946,0,0,1.3,1.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).wait(328));

	// Layer_1 copy
	this.instance_9 = new lib.Symbol5copy2();
	this.instance_9.setTransform(-239.9,55.9,1.4729,1.4729,14.9991,0,0,1.3,1.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},0).wait(325));

	// Layer_1
	this.instance_10 = new lib.Symbol5copy();
	this.instance_10.setTransform(-236.75,35.8,1.8077,1.8077,0,0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(342));

	// Layer_7 copy
	this.instance_11 = new lib.Symbol5copy4();
	this.instance_11.setTransform(-249.55,-2,1.5458,1.5458,-178.5536,0,0,1.4,1.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({_off:false},0).wait(319));

	// Layer_7
	this.instance_12 = new lib.Symbol5copy3();
	this.instance_12.setTransform(-248.2,-22.4,1.0434,1.0434,-178.5536,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(342));

	// Layer_4 copy 3
	this.instance_13 = new lib.Symbol5copy3();
	this.instance_13.setTransform(-255.55,138.4,1.0434,1.0434,150.0013,0,0,1.5,1.3);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).wait(337));

	// Layer_4 copy 4
	this.instance_14 = new lib.Symbol5copy3();
	this.instance_14.setTransform(-237.5,160.2,1.8461,1.8461,150.0007,0,0,1.4,1.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(8).to({_off:false},0).wait(334));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.2,-50.2,360.5,213.8);


// stage content:
(lib.MultiBank_200x200 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [430,441];
	// timeline functions:
	this.frame_430 = function() {
		if (myCounter++ <2){
			this.gotoAndPlay(1);
		};
	}
	this.frame_441 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(430).call(this.frame_430).wait(11).call(this.frame_441).wait(1));

	// t2
	this.instance = new lib.Symbol17();
	this.instance.setTransform(103.85,108.45,0.6268,0.6251,0,0,0,121.3,19.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(228).to({_off:false},0).wait(214));

	// text1
	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(100,108.55,1,1,0,0,0,90.9,15.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(61).to({_off:false},0).to({alpha:1},17).wait(135).to({alpha:0},15).to({_off:true},1).wait(213));

	// legat
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(99.55,184.9,0.5812,0.5805,0,0,0,162.7,31.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(98).to({_off:false},0).to({alpha:1},21).wait(323));

	// cta
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(100.2,148.05,0.3472,0.347,0,0,0,180.6,41.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(78).to({_off:false},0).to({y:151.55,alpha:1},20).wait(344));

	// Layer_2
	this.instance_4 = new lib.Symbol10copy2();
	this.instance_4.setTransform(101.4,62.85,0.8403,0.8389,0,0,0,106.8,32.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(433));

	// logo
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(99.25,18.6,0.1331,0.1322,0,0,0,508.6,62.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({alpha:1},12).wait(424));

	// sparks
	this.instance_6 = new lib.Symbol7();
	this.instance_6.setTransform(248.85,39.85,1,1,0,0,0,1.3,1.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).wait(424).to({alpha:0},11).wait(1));

	// Layer_9
	this.instance_7 = new lib.Symbol21();
	this.instance_7.setTransform(90.3,100,1,1,0,0,0,119.3,100);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},11,cjs.Ease.quadOut).wait(431));

	// blackbg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AvnPoIAA/PIfPAAIAAfPg");
	this.shape.setTransform(100,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(442));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(71,100,230,201);
// library properties:
lib.properties = {
	id: '4C67F3A136A92E4E81338A9018FE5B2A',
	width: 200,
	height: 200,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/CTA.png?1626167613936", id:"CTA"},
		{src:"images/left.png?1626167613936", id:"left"},
		{src:"images/right.png?1626167613936", id:"right"}
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