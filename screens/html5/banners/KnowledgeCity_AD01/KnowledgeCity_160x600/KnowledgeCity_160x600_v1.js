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



(lib.CompoundPath = function() {
	this.initialize(img.CompoundPath);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.CompoundPath_1 = function() {
	this.initialize(img.CompoundPath_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);// helper functions:

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


(lib.WarpedAsset_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FED0CC").s().p("ACcArQgLgGgHgVQgEgNAGgIQADgFAEgCQgCgCAAgEQAAgHAMgFQASgIAWgEIADgBIAoApQAEACgDAGIgDAGQgJAKgYAMQgWALgOAAQgIAAgFgCgAjNAhQgZgMgIgLIgEgFIABgIIAogpIADABIAMACQARAEAMAFQAMAGAAAHQAAADgCADIAGAGQAFAJgEANQgGAVgLAGQgEACgHAAQgPAAgWgLg");
	this.shape.setTransform(0.0521,19.1917);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18367D").s().p("ADvAhIADgFQACgGgDgDIgogoIgDAAIgFgGIASgOIACADIA0A/IACAEIgVAOgAkKAcIACgEIA0g/IACgDIASANIgFAHIgDgBIgoAoIgBAJIADAGIgHAKg");
	this.shape_1.setTransform(0,17.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01003B").s().p("AE/CIQAYgRAOgDIgiAXIgEgDgAlkByIAKAFQAMAFAQALIgEADQgXgRgLgHgAC5gdQADg5AZgzIAFAEIgTArQgSA2AFA1QgDgRACgdgAjGhcIgTgrIAFgDQAZAzADA5QACAdgDAQQAFg1gSg2g");
	this.shape_2.setTransform(0,-9.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#081858").s().p("ADVCYIBuhVIAigXQgOAEgYAQQgigag0guIgvguQgFg2ASg2IATgrIgFgDQAqAcBkCDQBkCBgFARQgEAOhgA5IhVAwgAldCmQhgg4gEgOQgFgSBjiBQBliDAqgcIgFADIATAsQASA2gFA2QADgSgCgdQgDg5gZgzQATgNASARQAPAQAGAgQAHAhgIAcQgIAggWAKQhNBMg4AqQgQgLgMgFIgKgEQALAGAXARIBuBVIg0BAIhVgxgACchgQgIgcAHggQAGghAPgPQARgSAUAOQgZAzgDA5QgCAcADASQgWgKgIggg");
	this.shape_3.setTransform(0,-2.094);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-23.7,90,47.5);


(lib.WarpedAsset_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#DE4A07","#030D74"],[0,1],107.5,0,-107.5,0).s().p("AKAJ2QgcgOgWgiQgHgLgcg5QgvhfhHgbQgrgQgyAhQgiAYgxA6Qg8BIgMALQgjAigVgQQgVgPgOgdIgWg1QgchEg4gUQgigLgsAPQgSAHg+AhQhxA7hRgZQhOgZhmhsQhrhyhGgcQhbgmiOAtQhHAWg1AeQAjgnBCgjQCGhEChAbQDrAnEVg3QFShDC4i4QEPkSA9jdIFmgaQBeJ1jSGBQhLCIhfBIQg+AvglAAQgMAAgJgFgAJupbIAkgDIgwA8QAJgjADgWg");
	this.shape.setTransform(0.0283,1.3583);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.9,0,-88.8,0).s().p("AtzHMQCRjoDtgXQBTgJCBAPQDJAXANAAQC3ALCahUQA4gfBAgzQAlgdBEg4QBmhTDQkFIAwg7IArg4QgFAcgIAaQg9DdkPEQQi4C5lTBEQkUA3jrgoQihgbiGBFQhCAigjAog");
	this.shape_1.setTransform(-18.675,-18.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.4,-64.8,214.9,129.7);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F93801","#FAD223"],[0,1],622.1,705,-619.6,-624).s().p("EhDbAVOQCFhjDRivQEbjtBShBQDRimCvhtQHIkdGqgfQEAgSFLBKQB4AbCpAwIEgBTQCkAvB9AaQCdAhCIAMQFKAbEBheQDrhWDajKQBbhUBfhuQBLhWBeh9ICijZQBhiDBFhUQDEjvC7iJQDCiODvhPQDmhND6gMQAogCAzAAQGrAAGzC0QHXDDHVGZIAAeAQAAAFgFADQgFADgHAAg");
	this.shape.setTransform(431.575,135.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol59, new cjs.Rectangle(0,0,863.2,271.6), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F93801","#FAD223"],[0,1],-41.9,-349.8,81.8,479.8).s().p("EgI5AkvQi9gBi6g1Qi4g1iihjQiihiiFiMQiEiKhdimQhcilgyi6Qgxi4gEi/QgHl5CplkQCnlfEnj0QAsgkDbigQCih2BYhdQC5jDBpk0QArh/AgibQAZh4AXipIAbjRQARiCAMhPMAlVAAAQAHAAAFADQAFAEAAAEMAAAAsuQhSg0hjhWIipibQh8hyhehAQh/hWh6giQiSgoiDAiQhFASg6AnQg9AngnA4Qg1BOgOBpQgLBaASBqQAMBHAiB4QAmCHAMA4QAmC5gVDAQgVC/hNCuQhMCth/CSQh+CRihBmQigBki5A1Qi2Azi6AAIgHAAg");
	this.shape.setTransform(200.6861,235.0759);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol58, new cjs.Rectangle(0,0,401.4,470.2), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPAXQgEgCgDgFQgCgFgBgGQABgHADgHQAEgHAHgEQAGgFAHAAQAIAAAFADQAFADADAFQACAFAAAFQgBAIgDAHQgEAHgHAEQgGAEgHAAQgHAAgGgDgAgEgLQgDACgCAEQgCAFAAAEQAAAFADADQACADAEAAQADAAAEgCQADgDACgEQACgEAAgFQAAgFgCgDQgDgDgEAAQgDAAgEADg");
	this.shape.setTransform(91.75,9.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AATAZIAHgfIAAgDIgBgEQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgDAAgCACIgFAEQgCADAAAEIgGAaIgMAAIAGgeIABgEQAAgFgFAAQgJAAgDANIgGAaIgNAAIAKgwIANAAIgCAGIAIgFQADgCAFAAQAIAAADAIQAIgIAIAAQAGAAAEADQADAEAAAGIAAAFIgHAfg");
	this.shape_1.setTransform(84.625,9.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOAYQgFgDgDgEQgCgFAAgFQAAgIAEgHQADgIAHgEQAGgFAIAAQAGAAAFADQAFACACAEQADAFAAAFIgBAHIgBAEIgiAAIAAACQAAAEACADQACACAEAAQADAAAEgCQADgCABgDIANACQgIAPgQAAQgHAAgEgCgAgDgMQgEADgCAFIAVAAIAAgCQAAgEgCgCQgCgDgEAAQgEAAgDADg");
	this.shape_2.setTransform(77.875,9.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggAiIAPhDIAWAAQAOAAAHAHQAHAGAAAPQAAAKgEAJQgEAJgJAFQgIAGgMAAgAgQAXIALAAQALAAAGgIQAGgHAAgPQAAgIgDgDQgEgEgHABIgKAAg");
	this.shape_3.setTransform(71.825,8.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAZIALgwIALAAIgBAHQADgEAEgCQADgCAEAAIAEAAIAEACIgGAMIgDgCIgDAAQgFAAgEAEQgCAEgCAGIgFAXg");
	this.shape_4.setTransform(64.275,9.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAWQgEgEAAgGIABgGIAHgeIANAAIgHAeIAAADQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABAAABAAQAEAAADgCQADgEACgHIAGgaIANAAIgLAwIgMAAIABgHQgDAFgDACQgEABgEAAQgIAAgDgDg");
	this.shape_5.setTransform(59.375,9.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPAXQgFgCgCgFQgCgFgBgGQABgHADgHQAEgHAHgEQAGgFAHAAQAIAAAFADQAFADADAFQACAFAAAFQgBAIgDAHQgEAHgHAEQgGAEgHAAQgHAAgGgDgAgDgLQgEACgCAEQgCAFAAAEQAAAFACADQADADAEAAQAEAAADgCQADgDACgEQACgEAAgFQAAgFgCgDQgDgDgEAAQgDAAgDADg");
	this.shape_6.setTransform(53.6,9.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZAiIgFgBIAEgKIAFABIADgBIAEgDIAEgGIgJgvIAOAAIADAbIABAFIAAACIAAAAIADgHIAPgbIAOAAIgdAxIgHAMQgEAEgDABQgEACgFAAIgEgBg");
	this.shape_7.setTransform(48.05,10.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgLAgQgDgCAAgFIABgIIAFgWIgHAAIACgKIAHAAIACgJIAOgJIgEASIAKAAIgDAKIgJAAIgEAXIAAADIAAACIACABIAFgBIgBAKIgEABIgEAAQgGAAgDgCg");
	this.shape_8.setTransform(41.775,8.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgRAWQgFgEAAgHIAMgCQAAAEADACQABACAFAAQADAAACgCQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgCgCgEAAQgIgCgEgEQgEgCAAgGQAAgFADgDQACgEAFgCQAFgDAFAAQAJAAAFAEQAFADABAHIgNABQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQgCgBgDAAQgDAAgCABQAAABAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIABADIADACIAEABIAKADQADACACACQABADAAAEQAAAFgDAEQgDADgEADQgGACgGAAQgKAAgFgEg");
	this.shape_9.setTransform(37.35,9.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOAYQgFgDgDgEQgCgFAAgFQAAgIAEgHQADgIAHgEQAGgFAIAAQAGAAAFADQAFACACAEQADAFAAAFIgBAHIgBAEIgiAAIAAACQAAAEACADQACACAEAAQADAAAEgCQADgCABgDIANACQgIAPgQAAQgHAAgEgCgAgDgMQgEADgCAFIAVAAIAAgCQAAgEgCgCQgCgDgEAAQgEAAgDADg");
	this.shape_10.setTransform(32.225,9.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVAWQgEgEAAgGIABgGIAHgeIANAAIgHAeIAAADQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABAAABAAQAEAAADgCQADgEACgHIAGgaIANAAIgLAwIgMAAIABgHQgDAFgDACQgEABgEAAQgIAAgDgDg");
	this.shape_11.setTransform(26.875,9.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAjIAFgYQgGAGgIAAQgIAAgFgFQgEgGAAgJQAAgIADgHQADgHAGgEQAGgFAHAAQAFAAADADQAEACACAEIACgHIAMAAIgOBDgAgGgVQgDADgCAFQgCAEAAAGQAAAEACADQACADAEAAQAFAAACgDQAEgCACgEQABgEAAgGQAAgGgCgCQgCgDgEAAQgDAAgEACg");
	this.shape_12.setTransform(21.075,10.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgOAYQgFgDgDgEQgCgFAAgFQAAgIAEgHQADgIAHgEQAGgFAIAAQAGAAAFADQAFACACAEQADAFAAAFIgBAHIgBAEIgiAAIAAACQAAAEACADQACACAEAAQADAAAEgCQADgCABgDIANACQgIAPgQAAQgHAAgEgCgAgDgMQgEADgCAFIAVAAIAAgCQAAgEgCgCQgCgDgEAAQgEAAgDADg");
	this.shape_13.setTransform(15.375,9.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAKAiIgDgOIgCgGIgCgEIgDgCIgBgCIgFAAIgFAAIgGAcIgNAAIAOhDIAYAAQAMAAAGAFQAGAEAAAIQAAAFgDAEQgBAFgFACQgFACgGACIAAAAQACABACADIADAIIAGASgAgJgEIALAAQAHAAAEgDQAEgDAAgFQAAgEgCgBQgDgBgFAAIgMAAg");
	this.shape_14.setTransform(9.6,8.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AmlBKQgdAAgVgVQgUgVAAgdIAAgFQAAgdAUgVQAVgVAdAAINLAAQAdAAAVAVQAUAVAAAdIAAAFQAAAegUAUQgVAVgdAAg");
	this.shape_15.setTransform(49.25,8.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol57, new cjs.Rectangle(0,0.3,98.5,15.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgKALQgEgFAAgGQAAgFAEgEQAFgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape.setTransform(51.4,247.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAmQgLgGgFgKQgGgKAAgMQAAgLAFgKQAHgKAKgFQAKgGALAAQAMAAALAFQAKAGAFAJQAGAKAAAMIgBAHIg+AAQACAIAGAEQAHAFAIAAQAHAAAEgCQAGgCAEgEIANANQgMAOgWAAQgNAAgMgFgAgMgTQgGAFgBAIIAoAAQgBgIgGgFQgFgFgJAAQgGAAgGAFg");
	this.shape_1.setTransform(44.45,244.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAqIAAhSIAXAAIAAALQAEgGAHgDQAIgDAJAAIAAAWIgFAAQgLAAgGAFQgFAGAAALIAAAng");
	this.shape_2.setTransform(36.55,244.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAoQgGgEgEgFQgDgGAAgHQgBgMAJgGQAJgGASAAIATAAQgBgIgFgEQgEgFgJAAQgGAAgHACQgGADgFADIgIgRQAGgFAKgCQAJgDAKAAQASAAALAJQAKAKAAASIAAAvIgWAAIAAgLQgHAMgSAAQgJAAgIgDgAgPARQAAAEAEADQADADAHAAQAFAAAFgDQAEgDADgGIAAgIIgQAAQgPAAAAAKg");
	this.shape_3.setTransform(27.85,244.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAqIgSgzIgTAzIgYAAIgdhTIAWAAIAUA4IAVg4IATAAIAUA4IAUg4IAWAAIgeBTg");
	this.shape_4.setTransform(16.05,244.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAsQgJgIAAgOIAAghIgNAAIAAgTIANAAIAAgUIAYAAIAAAUIAUAAIAAATIgUAAIAAAhQAAAFACADQADADAFAAQAFAAAFgDIAGARQgEACgFABIgLABQgOAAgHgHg");
	this.shape_5.setTransform(5.35,243.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSA6IAAg+IgNAAIAAgTIANAAIAAgDQAAgPAIgIQAJgIAPAAIAKABIAIADIgHASQgEgDgGAAQgLAAABAMIAAADIAVAAIAAATIgUAAIAAA+g");
	this.shape_6.setTransform(-0.65,243.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAmQgKgGgGgKQgGgKAAgMQAAgLAGgKQAGgKAKgFQALgGAMAAQANAAALAGQAKAFAGAKQAGAKAAALQAAAMgGAKQgGAKgKAGQgLAFgNAAQgMAAgLgFgAgOgQQgGAHAAAJQAAALAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgLQAAgJgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_7.setTransform(-8.975,244.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAoQgKgCgGgEIAIgRQAGADAIACQAIADAHAAQAPAAAAgIQAAgDgEgCQgFgCgHgBIgRgDQgHgCgFgEQgFgFAAgKQAAgIAFgGQAEgGAJgDQAJgEALAAQAJAAAJACQAIACAGADIgIASQgLgHgNAAQgHAAgEADQgEACAAADQAAAEAFACIAMACIARAEQAGACAFAEQAFAFAAAJQAAAIgFAGQgEAGgJAEQgJADgMAAQgKAAgKgDg");
	this.shape_8.setTransform(-18.225,244.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAvAqIAAgrQgBgKgEgFQgEgEgIAAQgIAAgFAFQgFAGAAAJIAAAqIgXAAIAAgrQAAgTgQAAQgIAAgFAFQgFAGAAAJIAAAqIgYAAIAAhSIAXAAIAAAJQAFgFAGgDQAHgCAIAAQAJAAAHADQAGAEAEAGQAGgGAIgEQAHgDAKAAQAPAAAJAJQAJAJAAASIAAAvg");
	this.shape_9.setTransform(29.8,226.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVAmQgLgGgFgKQgGgKAAgMQAAgLAFgKQAGgKAKgFQALgGAMAAQAMAAAJAFQALAGAFAJQAGAKAAAMIgBAHIg+AAQACAIAGAEQAHAFAIAAQAGAAAFgCQAGgCAEgEIANANQgMAOgWAAQgNAAgMgFgAgMgTQgGAFgBAIIAoAAQgBgIgGgFQgGgFgHAAQgIAAgFAFg");
	this.shape_10.setTransform(16.75,226.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAsQgJgHAAgPIAAghIgNAAIAAgTIANAAIAAgVIAXAAIAAAVIAVAAIAAATIgVAAIAAAgQAAAGADACQACADAGABQAFgBAFgDIAGARQgEADgFACIgLABQgOAAgHgIg");
	this.shape_11.setTransform(8.4,225.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAoQgKgCgGgEIAIgRQAGADAIACQAIADAHAAQAPAAAAgIQAAgDgEgCQgFgCgHgBIgRgDQgHgCgFgEQgFgFAAgKQAAgIAFgGQAEgGAJgDQAJgEALAAQAJAAAJACQAIACAGADIgIASQgLgHgNAAQgHAAgEADQgEACAAADQAAAEAFACIAMACIARAEQAGACAFAEQAFAFAAAJQAAAIgFAGQgEAGgJAEQgJADgMAAQgKAAgKgDg");
	this.shape_12.setTransform(0.925,226.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkA3QgHgCgEgDIAJgRIAGADIAIACQAFAAADgDQADgCACgGIABgBIgkhSIAYAAIAXA4IAXg4IAYAAIgmBXQgGAOgHAHQgJAFgMABQgGgBgGgCg");
	this.shape_13.setTransform(-7.775,227.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZA1QgMgEgHgFIAJgTQAGAFAKADQAJADAKAAQAKAAAFgDQAFgDAAgGQAAgEgDgCQgDgDgEgBIgNgEIgUgFQgIgDgFgGQgGgGAAgLQAAgKAFgHQAFgIAKgFQALgEANAAQALAAAKACQAKADAHAFIgIATQgPgJgPAAQgJAAgFADQgFAEAAAFQAAAGAGADIAQAFIAVAGQAIADAFAFQAGAHAAAKQAAAKgFAHQgGAIgKAFQgKAEgOAAQgNAAgMgDg");
	this.shape_14.setTransform(-17.35,225.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAsQgJgHAAgPIAAgiIgNAAIAAgSIANAAIAAgUIAXAAIAAAUIAVAAIAAASIgVAAIAAAiQAAAFADADQACACAFAAQAGAAAFgCIAGARQgDACgGABIgLABQgOAAgHgHg");
	this.shape_15.setTransform(83,207);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASAqIAAgrQAAgKgEgFQgEgEgIAAQgJAAgFAFQgFAGAAAKIAAApIgZAAIAAhSIAYAAIAAAKQAEgGAHgCQAHgDAIAAQAQAAAJAJQAKAJAAASIAAAvg");
	this.shape_16.setTransform(74.375,207.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAmQgKgGgGgKQgGgKAAgMQAAgLAFgKQAGgKAKgFQALgGAMAAQALAAAKAFQALAGAFAJQAGAKAAAMIAAAHIg+AAQABAIAGAEQAHAFAIAAQAGAAAFgCQAGgCAEgEIANANQgMAOgXAAQgNAAgLgFgAgMgTQgGAFgBAIIAoAAQgBgIgGgFQgGgFgHAAQgIAAgFAFg");
	this.shape_17.setTransform(64.1,207.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAuAqIAAgrQABgKgFgFQgEgEgHAAQgJAAgFAFQgFAGAAAJIAAAqIgXAAIAAgrQAAgTgQAAQgIAAgFAFQgFAGAAAJIAAAqIgZAAIAAhSIAYAAIAAAJQAEgFAHgDQAHgCAIAAQAJAAAHADQAGAEAFAGQAEgGAIgEQAIgDAJAAQAQAAAJAJQAKAJgBASIAAAvg");
	this.shape_18.setTransform(51.1,207.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAmQgMgGgFgKQgGgKAAgMQAAgLAGgKQAFgKALgFQAKgGALAAQAMAAALAFQAKAGAFAJQAGAKAAAMIgBAHIg+AAQACAIAGAEQAHAFAIAAQAHAAAEgCQAGgCAEgEIANANQgMAOgWAAQgNAAgLgFgAgMgTQgGAFgBAIIAoAAQgBgIgFgFQgHgFgIAAQgGAAgGAFg");
	this.shape_19.setTransform(38.05,207.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXA3QgKgDgIgGIAKgRQAFAEAJADQAHACAJAAQALABAGgGQAGgGAAgLIAAgEQgJALgRAAQgLgBgKgFQgJgFgGgIQgFgJAAgMQAAgLAFgKQAGgJAJgFQAKgFALAAQASAAAJAMIAAgLIAXAAIAABFQAAAXgMAKQgLAMgXAAQgMAAgLgDgAgPgfQgFAFAAAJQAAAJAFAGQAHAFAIgBQAKABAGgFQAHgGgBgJQABgJgHgFQgGgHgKABQgIgBgHAHg");
	this.shape_20.setTransform(27.4,209.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYAoQgIgEgDgFQgEgGAAgHQAAgMAJgGQAIgGATAAIASAAQAAgIgEgEQgGgFgIAAQgHAAgGACQgHADgEADIgIgRQAGgFAJgCQAKgDAKAAQATAAAKAJQAKAKAAASIAAAvIgWAAIAAgLQgHAMgRAAQgLAAgGgDgAgPARQAAAEADADQAEADAGAAQAFAAAGgDQAEgDACgGIAAgIIgPAAQgPAAAAAKg");
	this.shape_21.setTransform(17.3,207.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AASAqIAAgrQAAgKgEgFQgEgEgIAAQgJAAgFAFQgFAGAAAKIAAApIgZAAIAAhSIAYAAIAAAKQAEgGAHgCQAHgDAIAAQAQAAAJAJQAKAJAAASIAAAvg");
	this.shape_22.setTransform(7.425,207.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgYAoQgIgEgDgFQgEgGAAgHQAAgMAJgGQAIgGATAAIASAAQAAgIgEgEQgGgFgIAAQgHAAgGACQgHADgEADIgIgRQAGgFAJgCQAKgDAKAAQATAAAKAJQAKAKAAASIAAAvIgWAAIAAgLQgHAMgRAAQgLAAgGgDgAgPARQAAAEADADQAEADAGAAQAFAAAGgDQAEgDACgGIAAgIIgPAAQgPAAAAAKg");
	this.shape_23.setTransform(-2.95,207.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAlA2IAAhAIgfA1IgLAAIgfgzIAAA+IgYAAIAAhrIAUAAIAoBCIAohCIAVAAIAABrg");
	this.shape_24.setTransform(-14.9,206.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWA3QgMgDgGgFIAJgSQAGAFAHACQAIACAJAAQALAAAGgFQAGgGAAgMIAAgDQgKAKgPAAQgMAAgKgEQgJgGgFgJQgGgIAAgMQAAgLAGgKQAFgJAJgFQAKgFAMAAQARAAAJAMIAAgLIAXAAIAABEQAAAYgMALQgLALgXAAQgMAAgKgDgAgPggQgFAGAAAJQAAAJAFAGQAHAEAIABQAKgBAGgEQAHgGAAgJQAAgJgHgGQgGgFgKgBQgIABgHAFg");
	this.shape_25.setTransform(44.25,191);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AASAqIAAgrQAAgKgEgFQgEgEgIAAQgJAAgFAFQgFAGAAAKIAAApIgZAAIAAhSIAYAAIAAAKQAEgGAHgCQAHgDAIAAQAQAAAJAJQAKAJAAASIAAAvg");
	this.shape_26.setTransform(33.825,189.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgLA9IAAhSIAXAAIAABSgAgKglQgEgEAAgGQAAgFAEgEQAEgEAGAAQAHAAAEAEQAEADAAAGQAAAGgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_27.setTransform(26.125,187.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AASAqIAAgrQAAgKgEgFQgEgEgIAAQgJAAgFAFQgFAGAAAKIAAApIgZAAIAAhSIAYAAIAAAKQAEgGAHgCQAHgDAIAAQAQAAAJAJQAKAJAAASIAAAvg");
	this.shape_28.setTransform(18.475,189.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZAqIAAhSIAXAAIAAALQAEgGAHgDQAHgDAKAAIAAAWIgGAAQgKAAgGAFQgFAGABALIAAAng");
	this.shape_29.setTransform(10.1,189.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgZAoQgGgEgEgFQgEgGABgHQgBgMAJgGQAJgGASAAIATAAQAAgIgGgEQgEgFgJAAQgGAAgHACQgGADgFADIgJgRQAHgFAKgCQAJgDAKAAQASAAALAJQALAKgBASIAAAvIgWAAIAAgLQgHAMgSAAQgKAAgHgDgAgPARQAAAEAEADQADADAHAAQAFAAAFgDQAEgDADgGIAAgIIgQAAQgPAAAAAKg");
	this.shape_30.setTransform(1.4,189.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUAmQgLgGgGgKQgGgKAAgMQAAgLAGgKQAFgKALgFQAKgGALAAQANAAAKAFQAJAGAGAJQAGAKAAAMIAAAHIg+AAQABAIAHAEQAFAFAJAAQAGAAAGgCQAFgCAEgEIANANQgMAOgXAAQgNAAgKgFgAgMgTQgGAFgBAIIAoAAQgBgIgFgFQgHgFgIAAQgGAAgGAFg");
	this.shape_31.setTransform(-8.05,189.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgnA2IAAhrIAZAAIAABXIA2AAIAAAUg");
	this.shape_32.setTransform(-17.025,188.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgLA5IAAhyIAXAAIAAByg");
	this.shape_33.setTransform(48.475,169.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgfAhQgKgJAAgTIAAguIAYAAIAAAqQAAAVARAAQAIAAAFgGQAFgGAAgKIAAgpIAYAAIAABSIgXAAIAAgKQgEAGgHADQgHACgGAAQgRAAgJgJg");
	this.shape_34.setTransform(40.775,171.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgSA6IAAg+IgNAAIAAgSIANAAIAAgEQAAgOAJgJQAIgIAOAAIALABIAIADIgGASQgFgDgFAAQgMAAAAAMIAAAEIAWAAIAAASIgUAAIAAA+g");
	this.shape_35.setTransform(32.8,169.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgZAqIAAhSIAYAAIAAALQADgGAHgDQAIgDAJAAIAAAWIgGAAQgKAAgGAFQgFAGABALIAAAng");
	this.shape_36.setTransform(26.5,171.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgUAmQgMgGgFgKQgGgKAAgMQAAgLAFgKQAHgKAKgFQAKgGALAAQAMAAALAFQAKAGAFAJQAGAKAAAMIgBAHIg+AAQACAIAGAEQAHAFAIAAQAHAAAEgCQAGgCAEgEIANANQgMAOgWAAQgNAAgLgFgAgMgTQgGAFgBAIIAoAAQgBgIgFgFQgGgFgJAAQgGAAgGAFg");
	this.shape_37.setTransform(17.9,171.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AATAqIgTgzIgSAzIgXAAIgfhTIAYAAIATA4IAUg4IAUAAIAUA4IAUg4IAVAAIgeBTg");
	this.shape_38.setTransform(5.75,171.075);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgXAmQgKgGgGgKQgGgKAAgMQAAgLAGgKQAGgKAKgFQALgGAMAAQANAAALAGQAKAFAGAKQAGAKAAALQAAAMgGAKQgGAKgKAGQgLAFgNAAQgMAAgLgFgAgOgQQgGAHAAAJQAAALAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgLQAAgJgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_39.setTransform(-6.525,171.075);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgtA5IAAhwIAYAAIAAAJQAIgKARAAQALAAAKAFQAJAFAGAKQAGAKAAANQAAAMgGAJQgGAKgJAFQgKAFgLAAQgPAAgJgKIAAAngAgOgeQgHAGAAALQAAAKAHAFQAGAHAIAAQAJAAAGgHQAGgFAAgKQAAgLgGgGQgGgHgJAAQgIAAgGAHg");
	this.shape_40.setTransform(-16.65,172.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgYA1QgKgGgFgJQgFgKAAgMQAAgNAFgKQAFgJAKgGQAJgEAMAAQAPgBAJAKIAAgoIAYAAIAAByIgXAAIAAgKQgJALgQAAQgMAAgJgFgAgOAAQgGAFAAALQAAAKAGAGQAGAGAIAAQAKAAAGgGQAGgGAAgKQAAgLgGgFQgGgHgKAAQgIAAgGAHg");
	this.shape_41.setTransform(60.225,151.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AASAqIAAgrQAAgKgEgFQgEgEgIAAQgJAAgFAFQgFAGAAAKIAAApIgZAAIAAhSIAYAAIAAAKQAEgGAHgCQAHgDAIAAQAQAAAJAJQAKAJAAASIAAAvg");
	this.shape_42.setTransform(49.825,152.625);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgZAoQgGgEgEgFQgEgGAAgHQAAgMAJgGQAJgGASAAIATAAQgBgIgFgEQgEgFgJAAQgHAAgGACQgGADgFADIgIgRQAGgFAKgCQAJgDAKAAQASAAALAJQAKAKAAASIAAAvIgWAAIAAgLQgHAMgRAAQgKAAgIgDgAgPARQAAAEADADQAEADAHAAQAEAAAGgDQAEgDADgGIAAgIIgQAAQgPAAAAAKg");
	this.shape_43.setTransform(39.45,152.675);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgVAoQgKgCgGgEIAIgRQAGADAIACQAIADAHAAQAPAAAAgIQAAgDgEgCQgFgCgHgBIgRgDQgHgCgFgEQgFgFAAgKQAAgIAFgGQAEgGAJgDQAJgEALAAQAJAAAJACQAIACAGADIgIASQgLgHgNAAQgHAAgEADQgEACAAADQAAAEAFACIAMACIARAEQAGACAFAEQAFAFAAAJQAAAIgFAGQgEAGgJAEQgJADgMAAQgKAAgKgDg");
	this.shape_44.setTransform(26.325,152.675);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgXAmQgKgGgGgKQgGgKAAgMQAAgLAGgKQAGgKAKgFQALgGAMAAQANAAALAGQAKAFAGAKQAGAKAAALQAAAMgGAKQgGAKgKAGQgLAFgNAAQgMAAgLgFgAgOgQQgGAHAAAJQAAALAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgLQAAgJgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_45.setTransform(17.225,152.675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUAmQgLgGgGgKQgGgKAAgMQAAgLAGgKQAFgKALgFQAKgGALAAQANAAAKAFQAJAGAGAJQAGAKAAAMIAAAHIg+AAQABAIAHAEQAFAFAJAAQAGAAAGgCQAFgCAEgEIANANQgMAOgXAAQgNAAgKgFgAgMgTQgGAFgBAIIAoAAQgBgIgFgFQgGgFgJAAQgGAAgGAFg");
	this.shape_46.setTransform(7.25,152.675);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgYA1QgKgGgFgJQgFgKAAgMQAAgNAFgKQAFgJAKgGQAJgEAMAAQAPgBAJAKIAAgoIAYAAIAAByIgXAAIAAgKQgJALgQAAQgMAAgJgFgAgOAAQgGAFAAALQAAAKAGAGQAGAGAIAAQAKAAAGgGQAGgGAAgKQAAgLgGgFQgGgHgKAAQgIAAgGAHg");
	this.shape_47.setTransform(-3.325,151.15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgLA9IAAhTIAXAAIAABTgAgKglQgEgEAAgGQAAgFAEgEQAEgEAGAAQAHAAAEADQAEAEAAAGQAAAGgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_48.setTransform(-10.725,150.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgMAqIgjhTIAZAAIAWA4IAYg4IAYAAIgkBTg");
	this.shape_49.setTransform(-17.65,152.675);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgXAxQgLgGgFgNQgHgMAAgSQAAgQAHgNQAFgNALgGQALgHAMAAQAOAAAKAHQAKAGAHANQAFANABAQQgBASgFAMQgHANgKAGQgKAHgOAAQgMAAgLgHgAgOgZQgGAIAAARQAAASAGAIQAFAJAJAAQAKAAAFgJQAHgIAAgSQAAgRgHgIQgFgJgKAAQgJAAgFAJg");
	this.shape_50.setTransform(66.5,133.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgXAxQgKgGgHgNQgFgMAAgSQAAgQAFgNQAHgNAKgGQAKgHANAAQANAAALAHQALAGAFANQAHANAAAQQAAASgHAMQgFANgLAGQgLAHgNAAQgNAAgKgHgAgOgZQgGAIAAARQAAASAGAIQAGAJAIAAQAKAAAFgJQAHgIgBgSQABgRgHgIQgFgJgKAAQgIAAgGAJg");
	this.shape_51.setTransform(56,133.025);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgXAxQgLgGgFgNQgHgMABgSQgBgQAHgNQAFgNALgGQALgHAMAAQANAAALAHQAKAGAHANQAFANAAAQQAAASgFAMQgHANgKAGQgLAHgNAAQgMAAgLgHgAgPgZQgFAIAAARQAAASAFAIQAHAJAIAAQAKAAAGgJQAFgIAAgSQAAgRgFgIQgGgJgKAAQgIAAgHAJg");
	this.shape_52.setTransform(45.5,133.025);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgNAaIAIgZQgFgBgCgCQgCgEAAgEQAAgHAEgEQAFgEAFgBQAGABAFAEQAEAEAAAHIgBAGIgDAIIgJAWg");
	this.shape_53.setTransform(38.25,138.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgXA0QgLgDgIgGIAKgTQAGAFAIACQAIADAJAAQAIAAAFgEQAGgDAAgHQAAgHgGgEQgFgDgNAAIgcAAIAFg8IBCAAIAAAUIgtAAIgBAVIAIAAQAWAAALAJQALAIAAAPQAAAKgFAIQgFAIgKAFQgKAFgOAAQgLAAgLgDg");
	this.shape_54.setTransform(31.525,133.125);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgmA3IAAgQIAqgnQAGgGADgFQACgEAAgFQAAgGgFgEQgEgDgIAAQgHAAgFADQgGACgEAGIgTgMQAHgJALgGQAMgFANAAQAMAAAJAEQAJAEAFAHQAFAHAAAKQAAAJgEAIQgDAGgLAKIgYAYIAtAAIAAAUg");
	this.shape_55.setTransform(22.3,132.925);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgZAqIAAhSIAXAAIAAALQAEgGAHgDQAHgDAKAAIAAAWIgGAAQgKAAgGAFQgFAGABALIAAAng");
	this.shape_56.setTransform(10.55,134.225);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgUAmQgLgGgGgKQgGgKAAgMQAAgLAGgKQAFgKALgFQAKgGALAAQAMAAALAFQAJAGAGAJQAGAKAAAMIgBAHIg9AAQABAIAHAEQAFAFAJAAQAHAAAFgCQAFgCAEgEIANANQgMAOgWAAQgNAAgLgFgAgMgTQgGAFgBAIIAoAAQgBgIgFgFQgHgFgIAAQgGAAgGAFg");
	this.shape_57.setTransform(1.95,134.275);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgMAqIgjhTIAZAAIAXA4IAXg4IAYAAIgkBTg");
	this.shape_58.setTransform(-7.55,134.275);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgXAmQgKgGgGgKQgGgKAAgMQAAgLAGgKQAGgKAKgFQALgGAMAAQANAAALAGQAKAFAGAKQAGAKAAALQAAAMgGAKQgGAKgKAGQgLAFgNAAQgMAAgLgFgAgOgQQgGAHAAAJQAAALAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgLQAAgJgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_59.setTransform(-17.225,134.275);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AASA6IAAgsQAAgKgEgFQgEgEgIAAQgJAAgFAFQgFAFAAALIAAAqIgZAAIAAhzIAZAAIAAApQAEgFAHgCQAGgDAIAAQAQAAAJAJQAKAJAAASIAAAwg");
	this.shape_60.setTransform(79.225,114.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgJAsQgJgIAAgOIAAghIgNAAIAAgTIANAAIAAgUIAXAAIAAAUIAVAAIAAATIgVAAIAAAhQAAAFADADQACADAFAAQAGAAAFgDIAGAQQgDADgGACIgLABQgOgBgHgHg");
	this.shape_61.setTransform(70.4,115);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgLA9IAAhTIAXAAIAABTgAgKglQgEgEAAgGQAAgFAEgEQAEgEAGAAQAHAAAEADQAEAFAAAFQAAAGgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_62.setTransform(64.775,113.95);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AATAqIgSgzIgTAzIgYAAIgdhTIAWAAIAUA4IAVg4IATAAIAUA4IAUg4IAWAAIgeBTg");
	this.shape_63.setTransform(55.2,115.875);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AASAqIAAgrQAAgKgEgFQgEgEgIAAQgJAAgFAFQgFAGAAAKIAAApIgZAAIAAhSIAYAAIAAAKQAEgGAHgCQAHgDAIAAQAQAAAJAJQAKAJAAASIAAAvg");
	this.shape_64.setTransform(38.225,115.825);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgXAmQgKgGgGgKQgGgKAAgMQAAgLAGgKQAGgKAKgFQALgGAMAAQANAAALAGQAKAFAGAKQAGAKAAALQAAAMgGAKQgGAKgKAGQgLAFgNAAQgMAAgLgFgAgOgQQgGAHAAAJQAAALAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgLQAAgJgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_65.setTransform(27.825,115.875);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgLA9IAAhTIAXAAIAABTgAgKglQgEgEAAgGQAAgFAEgEQAEgEAGAAQAHAAAEADQAEAFAAAFQAAAGgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_66.setTransform(20.425,113.95);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgKAsQgIgIAAgOIAAghIgNAAIAAgTIANAAIAAgUIAYAAIAAAUIAUAAIAAATIgUAAIAAAhQgBAFADADQADADAEAAQAGAAAEgDIAHAQQgDADgGACIgKABQgOgBgJgHg");
	this.shape_67.setTransform(14.65,115);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgfAhQgKgJAAgTIAAguIAYAAIAAAqQAAAVARAAQAIAAAFgGQAFgGAAgKIAAgpIAYAAIAABSIgXAAIAAgKQgEAGgHADQgHACgGAAQgRAAgJgJg");
	this.shape_68.setTransform(5.975,115.925);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgLA6IAAhzIAXAAIAABzg");
	this.shape_69.setTransform(-1.625,114.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgXAmQgKgGgGgKQgGgKAAgMQAAgLAGgKQAGgKAKgFQALgGAMAAQANAAALAGQAKAFAGAKQAGAKAAALQAAAMgGAKQgGAKgKAGQgLAFgNAAQgMAAgLgFgAgOgQQgGAHAAAJQAAALAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgLQAAgJgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_70.setTransform(-8.975,115.875);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgVAoQgKgCgGgEIAIgRQAGADAIACQAIADAHAAQAPAAAAgIQAAgDgEgCQgFgCgHgBIgRgDQgHgCgFgEQgFgFAAgKQAAgIAFgGQAEgGAJgDQAJgEALAAQAJAAAJACQAIACAGADIgIASQgLgHgNAAQgHAAgEADQgEACAAADQAAAEAFACIAMACIARAEQAGACAFAEQAFAFAAAJQAAAIgFAGQgEAGgJAEQgJADgMAAQgKAAgKgDg");
	this.shape_71.setTransform(-18.225,115.875);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgXA3QgKgDgIgFIAKgSQAFAFAJACQAIACAIABQALgBAGgFQAGgGAAgMIAAgDQgKALgPAAQgMAAgKgGQgJgEgFgJQgGgJAAgMQAAgMAGgJQAFgJAJgFQAKgFAMAAQARAAAJAMIAAgLIAXAAIAABFQAAAXgMALQgMALgWAAQgMAAgLgDgAgPgfQgFAFAAAJQAAAJAFAGQAHAEAIABQAKgBAGgEQAHgGAAgJQAAgJgHgFQgGgHgKAAQgIAAgHAHg");
	this.shape_72.setTransform(54.05,99);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AASAqIAAgrQAAgKgEgFQgEgEgIAAQgJAAgFAFQgFAGAAAKIAAApIgZAAIAAhSIAYAAIAAAKQAEgGAHgCQAHgDAIAAQAQAAAJAJQAKAJAAASIAAAvg");
	this.shape_73.setTransform(43.625,97.425);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgLA9IAAhSIAXAAIAABSgAgKglQgEgEAAgFQAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_74.setTransform(35.925,95.55);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AASAqIAAgrQAAgKgEgFQgEgEgIAAQgJAAgFAFQgFAGAAAKIAAApIgZAAIAAhSIAYAAIAAAKQAEgGAHgCQAHgDAIAAQAQAAAJAJQAKAJAAASIAAAvg");
	this.shape_75.setTransform(28.275,97.425);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgZAqIAAhSIAXAAIAAALQAEgGAHgDQAIgDAJAAIAAAWIgFAAQgLAAgGAFQgFAGAAALIAAAng");
	this.shape_76.setTransform(19.9,97.425);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgZAoQgGgEgEgFQgDgGAAgHQgBgMAJgGQAJgGASAAIATAAQgBgIgFgEQgEgFgJAAQgGAAgHACQgGADgFADIgIgRQAGgFAKgCQAJgDAKAAQASAAALAJQAKAKAAASIAAAvIgWAAIAAgLQgHAMgSAAQgJAAgIgDgAgPARQAAAEAEADQADADAHAAQAFAAAFgDQAEgDADgGIAAgIIgQAAQgPAAAAAKg");
	this.shape_77.setTransform(11.2,97.475);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgUAmQgLgGgGgKQgGgKAAgMQAAgLAGgKQAGgKAJgFQALgGALAAQANAAAJAFQAKAGAGAJQAGAKAAAMIAAAHIg+AAQABAIAHAEQAFAFAJAAQAGAAAGgCQAFgCAEgEIANANQgMAOgXAAQgNAAgKgFgAgMgTQgGAFgBAIIAoAAQgBgIgFgFQgGgFgJAAQgHAAgFAFg");
	this.shape_78.setTransform(1.75,97.475);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgnA2IAAhrIAZAAIAABXIA2AAIAAAUg");
	this.shape_79.setTransform(-7.225,96.225);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgUAmQgLgGgGgKQgGgKAAgMQAAgLAGgKQAFgKALgFQAKgGALAAQAMAAALAFQAJAGAGAJQAGAKAAAMIgBAHIg+AAQACAIAHAEQAFAFAJAAQAHAAAFgCQAFgCAEgEIANANQgMAOgWAAQgNAAgLgFgAgMgTQgGAFgBAIIAoAAQgBgIgFgFQgHgFgIAAQgGAAgGAFg");
	this.shape_80.setTransform(-17.4,97.475);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgVAmQgLgGgFgKQgGgKAAgMQAAgLAFgKQAHgKAKgFQAKgGAMAAQALAAALAFQAKAGAFAJQAGAKAAAMIgBAHIg+AAQACAIAGAEQAHAFAIAAQAHAAAEgCQAGgCAEgEIANANQgMAOgWAAQgNAAgMgFgAgMgTQgGAFgBAIIAoAAQgBgIgGgFQgFgFgIAAQgIAAgFAFg");
	this.shape_81.setTransform(52.2,79.075);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgJAsQgJgIAAgOIAAgiIgNAAIAAgSIANAAIAAgUIAXAAIAAAUIAVAAIAAASIgVAAIAAAiQAAAFADADQACACAFAAQAGAAAFgCIAGARQgDACgGACIgLAAQgOAAgHgHg");
	this.shape_82.setTransform(43.85,78.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgVAmQgLgGgFgKQgGgKAAgMQAAgLAFgKQAGgKAKgFQALgGAMAAQALAAAKAFQALAGAFAJQAGAKAAAMIgBAHIg+AAQACAIAGAEQAHAFAIAAQAGAAAFgCQAGgCAEgEIANANQgMAOgWAAQgNAAgMgFgAgMgTQgGAFgBAIIAoAAQgBgIgGgFQgGgFgHAAQgIAAgFAFg");
	this.shape_83.setTransform(35.65,79.075);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgLA6IAAhzIAXAAIAABzg");
	this.shape_84.setTransform(28.425,77.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgtA5IAAhwIAYAAIAAAJQAJgKAQAAQALAAAKAFQAJAFAGAKQAGAKgBANQABAMgGAJQgGAKgJAFQgKAFgLAAQgPAAgJgKIAAAngAgOgeQgHAGAAALQAAAKAHAFQAGAHAIAAQAJAAAGgHQAGgFAAgKQAAgLgGgGQgGgHgJAAQgIAAgGAHg");
	this.shape_85.setTransform(21.05,80.525);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAvAqIAAgrQgBgKgEgFQgEgEgIAAQgIAAgFAFQgFAGAAAJIAAAqIgXAAIAAgrQAAgTgQAAQgIAAgFAFQgFAGAAAJIAAAqIgYAAIAAhSIAXAAIAAAJQAFgFAGgDQAHgCAIAAQAJAAAHADQAGAEAEAGQAGgGAIgEQAHgDAKAAQAPAAAJAJQAJAJAAASIAAAvg");
	this.shape_86.setTransform(7.3,79.025);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgXAmQgKgGgGgKQgGgKAAgMQAAgLAGgKQAGgKAKgFQALgGAMAAQANAAALAGQAKAFAGAKQAGAKAAALQAAAMgGAKQgGAKgKAGQgLAFgNAAQgMAAgLgFgAgOgQQgGAHAAAJQAAALAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgLQAAgJgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_87.setTransform(-5.875,79.075);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgWAxQgNgHgIgNQgIgNAAgQQAAgPAIgNQAIgNANgHQANgHAQAAQAOAAAMAFQALAFAIAJIgQAPQgLgNgRAAQgJAAgIAFQgHAEgFAIQgEAIAAAJQAAAKAEAIQAFAIAHAEQAIAFAJAAQARAAALgNIAQAPQgIAJgLAFQgMAFgOAAQgQAAgNgHg");
	this.shape_88.setTransform(-16.525,77.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol56, new cjs.Rectangle(-24.3,64.1,144.1,191), null);


(lib.Symbol55 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#F93801","#FAD223"],[0,1],565.5,-466,-619.7,367.3).s().p("EgBDAkYQh6gGh7guQhygrhqhMQi6iEiejnQhpiYiOkcQijlGhIh2Qixkmj6jyQj6jykripQkqiqlQhcQlOhclYgIQlcgHlcBSQlVBQk8CgMAAAgi9QAAgEAEgEQAFgDAHAAMCbvAAAQAGAAAFADQAFAEAAAEMAAAAzGQh+mGj3k5QjBjzj8ixQkCi1kiheQknhfk3gBQk6AAkjBhQklBij3C/Qj6C/ijEDQiLDaiMGPIhxFCQhDC4g9CDQimFfjlDFQiHByidA8QiUA6iSAAIgkgBg");
	this.shape.setTransform(500,232.8691);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol55, new cjs.Rectangle(0,0,1000,465.8), null);


(lib.Symbol53 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#F93801","#FAD223"],[0,1],-622.6,-466.7,494.4,373.6).s().p("EgoegnLQAAgEAFgEQAFgDAGAAMBQAAAAQBDDLgjDaQgiDZiEDGQh8C7i9CKQlLDwn5BWQjFAgj8AOQiMAHk5AFQjBAEhlAFQiiAKiBAWQlGA4jbCXQiRBjh0CbQhqCNhMCyQhCCagvDCQglCYgfDQQgTB6ghDzQgfDXggCSQgrDDg8CeQhFC2hhCPQiNDSjVCTQjVCTj2A3g");
	this.shape.setTransform(259.0505,251.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol53, new cjs.Rectangle(0,0,518.1,503.8), null);


(lib.Symbol52 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#F93801","#FAD223"],[0,1],-459,-344.4,571.3,443.1).s().p("EgxmAhEMAAAhB9QAAgEAFgDQAFgDAGAAMBgTAAAQB7DlAiD/QAmEfhKEmQhJEfipD0QilDujzCzQjsCtkZBiQkQBfktARQkiARklg4QhvgVizgvQjeg8hCgPQijgmiBgOQifgQiJARQkBAgj5CYQjRCAjPDaQiNCWjMENQj8FNhQBgQjEDpi/CWQjnC1jxBLQilAzihAAIgbAAg");
	this.shape.setTransform(317.4809,211.617);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol52, new cjs.Rectangle(0,0,635,423.3), null);


(lib.Symbol51 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgOA8QgLgLAAgUIAAgtIgRAAIAAgZIARAAIAAgcIAgAAIAAAcIAcAAIAAAZIgcAAIAAAtQAAAHAEAEQAEAEAGAAQAIAAAFgEIAJAXQgFADgHACQgHACgHAAQgUAAgLgKg");
	this.shape.setTransform(40.825,167.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZA5IAAg6QAAgOgGgGQgGgHgLAAQgLAAgHAIQgIAHAAAOIAAA4IghAAIAAhwIAgAAIAAANQAGgHAKgDQAJgEALAAQAVAAANAMQANANAAAZIAAA/g");
	this.shape_1.setTransform(29.125,168.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAzQgPgHgIgOQgIgNAAgRQAAgQAIgNQAIgNAOgIQAOgHAQAAQAQAAANAHQAOAHAIAOQAHANABARIgCAIIhUAAQADALAIAGQAJAGAMAAQAIAAAHgDQAHgDAGgFIASATQgRASgfAAQgSAAgOgHgAgRgaQgHAGgCALIA2AAQgCgKgHgHQgHgGgLgBQgLABgHAGg");
	this.shape_2.setTransform(15.25,168.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQBOIAAibIAhAAIAACbg");
	this.shape_3.setTransform(5.45,166.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghA2QgJgEgGgIQgEgIAAgKQgBgQAMgIQAMgJAZAAIAZAAQAAgKgHgHQgGgFgMAAQgJAAgJADQgJACgGAGIgMgXQAJgHANgDQANgEAOAAQAaAAAOANQANAMAAAZIAAA/IgeAAIAAgNQgKAPgYAAQgNAAgJgEgAgVAWQAAAHAFAEQAFADAIAAQAIAAAHgEQAGgEADgHIAAgMIgWAAQgUAAAAANg");
	this.shape_4.setTransform(-4.5,168.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQBJIAAh2IgvAAIAAgbIB/AAIAAAbIgvAAIAAB2g");
	this.shape_5.setTransform(-17.15,166.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8BOIAAiZIAfAAIAAANQAMgOAXAAQAPAAANAGQANAIAHANQAIANgBASQABARgIAMQgHANgNAIQgNAGgPAAQgVAAgNgNIAAA1gAgUgqQgIAJAAAPQAAAOAIAIQAIAIAMAAQAMAAAJgIQAHgIABgOQgBgPgHgJQgJgIgMAAQgMAAgIAIg");
	this.shape_6.setTransform(91.7,143.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPBTIAAhwIAfAAIAABwgAgNgyQgHgFAAgIQAAgIAHgFQAFgGAIAAQAJAAAFAFQAGAGABAHQgBAIgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_7.setTransform(80.9,138.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZBOIAAg7QAAgOgGgGQgGgGgLAAQgLAAgHAHQgIAHAAAPIAAA4IghAAIAAibIAhAAIAAA3QAHgHAJgDQAIgDALAAQAVAAANAMQANAMAAAYIAABBg");
	this.shape_8.setTransform(70.525,139.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdA3QgNgDgIgGIALgXQAHAEALAEQALACAKAAQAUAAAAgKQAAgFgGgCQgFgCgLgBIgXgFQgJgDgHgGQgGgHAAgNQAAgKAGgJQAGgIAMgEQAMgFAPAAQAMAAAMACQAMADAHAEIgKAYQgPgIgSAAQgKAAgFACQgFADAAAFQAAAGAGACQAFABAMACIAWAGQAJACAHAGQAGAHAAANQAAAKgGAIQgGAIgMAEQgNAFgPAAQgOAAgOgDg");
	this.shape_9.setTransform(57.625,141.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiA5IAAhwIAgAAIAAAPQAFgIAJgEQALgEAMAAIAAAeIgHgBQgOAAgIAIQgHAIAAAPIAAA1g");
	this.shape_10.setTransform(48.05,141.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcAzQgPgIgIgNQgHgNAAgRQAAgPAHgOQAIgOANgGQAOgIARAAQAQAAAOAHQANAHAHANQAJAOgBARIgBAIIhUAAQADALAIAGQAJAGALAAQAKAAAGgCQAHgDAGgGIARATQgQASgfAAQgRAAgPgHgAgRgaQgIAGgBALIA3AAQgCgLgIgGQgIgGgKAAQgKAAgIAGg");
	this.shape_11.setTransform(36.45,141.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghBIQgNgHgHgOQgIgNAAgRQAAgSAIgMQAHgNANgHQANgHAQAAQAVAAAMANIAAg3IAhAAIAACbIggAAIAAgNQgMAPgWAAQgQAAgNgHgAgTgBQgIAHAAAPQAAAOAIAJQAIAIAMAAQAMAAAIgIQAIgJAAgOQAAgPgIgHQgIgJgMAAQgMAAgIAJg");
	this.shape_12.setTransform(22.1,139.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AghA1QgKgDgFgJQgEgHgBgKQAAgQAMgIQAMgJAZAAIAZAAQAAgLgHgFQgGgGgMAAQgJAAgJACQgIADgHAFIgLgWQAJgHAMgEQANgDAOAAQAaAAAOAMQANANAAAZIAABAIgeAAIAAgPQgJAQgZAAQgMAAgKgFgAgVAXQAAAGAFADQAFAEAIAAQAIAAAHgEQAGgEADgHIAAgMIgWAAQgUAAAAAOg");
	this.shape_13.setTransform(8.45,141.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcAzQgPgIgIgNQgHgNgBgRQABgPAHgOQAIgOANgGQAPgIAQAAQAQAAANAHQAOAHAHANQAIAOAAARIgBAIIhUAAQACALAJAGQAJAGALAAQAJAAAHgCQAHgDAGgGIARATQgPASggAAQgRAAgPgHgAgRgaQgHAGgCALIA3AAQgCgLgIgGQgHgGgLAAQgKAAgIAGg");
	this.shape_14.setTransform(-4.3,141.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag1BKIAAiTIAiAAIAAB3IBJAAIAAAcg");
	this.shape_15.setTransform(-16.525,139.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfBKQgPgDgJgIIANgYQAHAGALADQALAEAKAAQAQAAAJgHQAIgIAAgQIAAgEQgNAOgWgBQgQABgMgIQgNgGgIgNQgHgLAAgQQAAgQAHgMQAIgNANgHQAMgGAQgBQAYABAMAQIAAgPIAfAAIAABdQAAAfgQAQQgQAPgeAAQgQgBgPgEgAgUgrQgIAIAAAMQAAAMAIAIQAIAGAMAAQANAAAJgGQAIgIAAgMQAAgMgIgIQgJgIgNAAQgMAAgIAIg");
	this.shape_16.setTransform(36.975,116.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAZA5IAAg6QAAgOgGgGQgGgHgLAAQgLAAgHAIQgIAHAAAOIAAA4IghAAIAAhwIAgAAIAAANQAGgHAKgDQAJgEALAAQAVAAANAMQANANAAAZIAAA/g");
	this.shape_17.setTransform(22.825,114.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQBTIAAhwIAgAAIAABwgAgNgyQgHgFAAgIQAAgIAHgFQAFgGAIAAQAJAAAGAFQAFAGABAHQgBAIgFAGQgGAFgJAAQgIAAgFgFg");
	this.shape_18.setTransform(12.4,111.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdA3QgNgEgIgFIALgXQAHAEALADQALAEAKAAQAUAAAAgLQAAgEgGgDQgFgCgLgCIgXgEQgJgDgHgGQgGgHAAgMQAAgMAGgHQAGgJAMgFQAMgEAPAAQAMAAAMADQAMACAHAFIgKAXQgPgJgSAAQgKAAgFAEQgFADAAAEQAAAFAGACQAFACAMADIAWAEQAJADAHAGQAGAHAAANQAAAKgGAIQgGAIgMAEQgNAFgPAAQgOAAgOgDg");
	this.shape_19.setTransform(3.625,114.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPBTIAAhwIAfAAIAABwgAgNgyQgHgFAAgIQAAgIAHgFQAFgGAIAAQAJAAAFAFQAGAGABAHQgBAIgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_20.setTransform(-5.05,111.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAdBJIgdgoIgBAAIgdAAIAAAoIgiAAIAAiSIA/AAQATABAOAGQAPAHAHAMQAIAMAAAQQAAAQgIALQgHAMgPAGIAhAvgAgeAGIAbAAQAPAAAIgHQAIgGAAgMQAAgMgIgHQgIgHgPAAIgbAAg");
	this.shape_21.setTransform(-15.4,112.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol51, new cjs.Rectangle(-25.6,94.7,126.4,86.89999999999999), null);


(lib.Symbol50 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgRAkIAJgiQgFgCgDgEQgDgEAAgHQAAgJAFgFQAGgGAIAAQAJAAAFAGQAGAFAAAJIgBAJIgFALIgMAfg");
	this.shape.setTransform(64.425,81.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyBLQgIgDgGgFIAMgXQAEADAFACQAFACAFAAQAGAAAFgDQAEgDADgIIABgBIgxhxIAhAAIAfBNIAghNIAgAAIg0B3QgHAUgLAIQgLAIgQAAQgJAAgJgDg");
	this.shape_1.setTransform(55.375,78.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZBPIAAhUIgRAAIAAgaIARAAIAAgFQAAgTAMgLQALgMAUAAIAOACQAHABAEADIgJAYQgFgEgIAAQgPAAAAAQIAAAFIAdAAIAAAaIgcAAIAABUg");
	this.shape_2.setTransform(45.425,73.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPBTIAAhwIAfAAIAABwgAgNgyQgHgFAAgIQAAgIAHgFQAFgGAIAAQAJAAAFAFQAHAGAAAHQAAAIgHAGQgFAFgJAAQgIAAgFgFg");
	this.shape_3.setTransform(37.8,73.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOA8QgLgLAAgUIAAgtIgRAAIAAgZIARAAIAAgcIAgAAIAAAcIAcAAIAAAZIgcAAIAAAtQAAAHAEAEQAEAEAGAAQAIAAAFgEIAJAXQgFADgHACQgHACgHAAQgUAAgLgKg");
	this.shape_4.setTransform(29.975,74.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZA5IAAg6QAAgOgGgGQgGgHgLAAQgLAAgHAIQgIAHAAAOIAAA4IghAAIAAhwIAgAAIAAANQAGgHAKgDQAJgEALAAQAVAAANAMQANANAAAZIAAA/g");
	this.shape_5.setTransform(18.275,75.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAzQgPgIgIgNQgHgNAAgRQAAgQAHgNQAIgNAOgIQANgHAQAAQARAAAOAHQANAHAHANQAJAOgBARIAAAIIhVAAQACALAJAGQAJAGALAAQAKAAAGgDQAHgDAGgFIARATQgQASgeAAQgTAAgOgHgAgRgaQgIAGgBALIA3AAQgDgLgHgGQgIgGgLgBQgJABgIAGg");
	this.shape_6.setTransform(4.4,75.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghBIQgNgHgHgOQgHgNgBgRQABgSAHgMQAHgNANgHQANgHAQAAQAUAAANANIAAg3IAhAAIAACbIggAAIAAgNQgMAPgWAAQgQAAgNgHgAgTgBQgIAHAAAPQAAAOAIAJQAIAIAMAAQAMAAAIgIQAJgJgBgOQABgPgJgHQgIgJgMAAQgMAAgIAJg");
	this.shape_7.setTransform(-9.95,73.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQBJIAAiRIAhAAIAACRg");
	this.shape_8.setTransform(-20.25,74.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol50, new cjs.Rectangle(-25.7,56.3,95.60000000000001,32.900000000000006), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgRAkIAJgiQgFgCgDgEQgDgEAAgHQAAgJAFgFQAGgGAIAAQAJAAAFAGQAGAFAAAJIgBAJIgFALIgMAfg");
	this.shape.setTransform(-83.325,108.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZA5IAAg6QAAgOgGgGQgGgHgLAAQgLAAgHAIQgIAHAAAOIAAA4IghAAIAAhwIAgAAIAAANQAGgHAKgDQAJgEALAAQAVAAANAMQANANAAAZIAAA/g");
	this.shape_1.setTransform(-93.325,103.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPBTIAAhwIAgAAIAABwgAgOgyQgFgFgBgIQABgIAFgFQAGgGAIAAQAJAAAFAFQAHAGgBAHQABAIgHAGQgFAFgJAAQgIAAgGgFg");
	this.shape_2.setTransform(-103.75,100.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghA2QgKgFgEgIQgGgHAAgKQAAgQAMgIQAMgJAZAAIAZAAQAAgLgGgFQgHgGgMAAQgJAAgJACQgJAEgGAEIgLgWQAIgHANgDQAOgEANAAQAaAAAOANQAOAMgBAZIAABAIgeAAIAAgPQgJAQgYAAQgNAAgKgEgAgVAWQAAAHAFADQAFAEAJAAQAHAAAGgEQAHgDADgIIAAgMIgWAAQgUAAAAANg");
	this.shape_3.setTransform(-113.7,103.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiA5IAAhwIAfAAIAAAPQAGgIAJgEQAKgEANAAIAAAeIgHgBQgOAAgIAIQgHAIAAAPIAAA1g");
	this.shape_4.setTransform(-123.9,103.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQBKIAAh3IgvAAIAAgbIB/AAIAAAbIgvAAIAAB3g");
	this.shape_5.setTransform(-135.4,101.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(-143.9,83.6,66,33), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAZA5IAAg6QAAgOgGgGQgGgHgLAAQgLAAgHAIQgIAHAAAOIAAA4IghAAIAAhwIAgAAIAAANQAGgHAKgDQAJgEALAAQAVAAANAMQANANAAAZIAAA/g");
	this.shape.setTransform(-159.875,129.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQBTIAAhwIAgAAIAABwgAgNgyQgHgFAAgIQAAgIAHgFQAFgGAIAAQAJAAAGAFQAFAGABAHQgBAIgFAGQgGAFgJAAQgIAAgFgFg");
	this.shape_1.setTransform(-170.3,127.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghA1QgJgDgGgJQgEgHAAgKQAAgQALgIQAMgJAZAAIAZAAQAAgLgHgFQgGgGgMAAQgJAAgJACQgJADgGAFIgMgWQAKgHANgEQANgDANAAQAZAAAOAMQAPANAAAZIAABAIgfAAIAAgPQgKAQgYAAQgNAAgJgFgAgVAXQAAAGAFADQAFAEAIAAQAIAAAGgEQAHgEADgHIAAgMIgVAAQgVAAAAAOg");
	this.shape_2.setTransform(-180.25,130.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOA8QgLgLAAgUIAAgtIgRAAIAAgZIARAAIAAgcIAgAAIAAAcIAcAAIAAAZIgcAAIAAAtQAAAHAEAEQAEAEAGAAQAIAAAFgEIAJAXQgFADgHACQgHACgHAAQgUAAgLgKg");
	this.shape_3.setTransform(-191.075,128.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAzQgPgIgIgNQgHgNAAgRQAAgPAHgOQAIgOANgGQAOgIAQAAQARAAAOAHQANAHAHANQAJAOgBARIAAAIIhVAAQACALAJAGQAJAGALAAQAKAAAGgCQAHgDAGgGIARATQgQASgeAAQgTAAgOgHgAgRgaQgIAGgBALIA3AAQgDgLgHgGQgIgGgLAAQgJAAgIAGg");
	this.shape_4.setTransform(-202.15,130.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdBKIgdgqIgBAAIgdAAIAAAqIgiAAIAAiTIA/AAQATAAAOAHQAPAGAIAMQAHANAAAQQAAAQgHALQgIAMgPAGIAhAwgAgeAFIAbAAQAPABAIgHQAIgGAAgMQAAgNgIgGQgIgHgPAAIgbAAg");
	this.shape_5.setTransform(-216,128.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghBIQgNgHgHgOQgIgNAAgRQAAgSAIgMQAHgNANgHQANgHAQAAQAVAAAMANIAAg3IAgAAIAACbIgeAAIAAgNQgNAPgWAAQgQAAgNgHgAgTgBQgIAHAAAPQAAAOAIAJQAIAIAMAAQAMAAAJgIQAHgJAAgOQAAgPgHgHQgJgJgMAAQgMAAgIAJg");
	this.shape_6.setTransform(-122.7,101.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZA5IAAg6QAAgOgGgGQgGgHgLAAQgLAAgHAIQgIAHAAAOIAAA4IghAAIAAhwIAgAAIAAANQAGgHAKgDQAJgEALAAQAVAAANAMQANANAAAZIAAA/g");
	this.shape_7.setTransform(-136.775,103.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghA1QgKgEgFgHQgEgIgBgKQAAgQAMgIQAMgJAZAAIAZAAQAAgKgHgHQgGgFgMAAQgJAAgJADQgIACgHAGIgLgYQAJgGAMgDQANgEAOAAQAaAAAOAMQANANAAAZIAAA/IgeAAIAAgNQgJAPgZAAQgMAAgKgFgAgVAXQAAAGAFAEQAFADAIAAQAIAAAHgEQAGgEADgHIAAgMIgWAAQgUAAAAAOg");
	this.shape_8.setTransform(-150.85,103.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(-226.2,83.5,113.39999999999999,59.900000000000006), null);


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
	this.shape.graphics.f("#081858").s().p("ACyHZIivrmQAAgEgEAAQgDAAgBAEIiwLmIhBAAQAOiyATjDQAjmDAUhOQAUhOAWgWQAKgLAGAFIDFAAIAFgBQAGAAAHAHQAVAWAUBOQAUBOAlGDQATDDAOCyg");
	this.shape.setTransform(36.25,47.3597);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#081858").s().p("AhaAnQgHgMAJgMQANgPAqgKQAVgFAUgRQALgJAHgIIAIAGQAPAGAhgBIAHAQQAHATgDAQQh5AgggAEIgHABQgQAAgHgLg");
	this.shape_1.setTransform(9.3619,100.3773);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01003B").s().p("AgOASIgQgGIAHgfIA2AAIgFAkQgMADgMAAQgHAAgJgCg");
	this.shape_2.setTransform(14.9,94.8464);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#081858").s().p("AA8AxQgUgDhDgQIhBgRQgDgQAHgTIAHgQQAhABAOgGQAIgDABgDIARARQAVARAUAFQArAKANAPQAJAMgIAMQgGALgQAAIgIgBg");
	this.shape_3.setTransform(63.4005,101.0273);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#01003B").s().p("AgZARIgFgkIA2AAIAGAfQgFAEgKACQgJACgHAAQgMAAgMgDg");
	this.shape_4.setTransform(57.85,95.4964);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol47, new cjs.Rectangle(0,0,72.8,106), null);


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
	this.shape.graphics.f("#E8BFBD").s().p("AgPA9QgOgRgJgDQgKhXgHgTIAAgFQAGAHAEgBQAOgEAMgJIATACQAAAKgCAJIAMAWIAGAIIgHACQgPAEAMAHQADACAYAaIAVAYIADADQgGAJgJAJQgTASgSAAQgGAAgOgRg");
	this.shape.setTransform(14.2417,25.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FED0CC").s().p("AgDBtQgYgcgDgBQgMgHAQgFIAGgBQAMARAIAGQAFAEAOAEQAAAMAHASIgJAEIgUgXgAg3AQIABgBQgJgEgIgGQgSgLgCgMQgCgNAHgGQAGgDAGAAIALADQAIACADAGIAJAPIAFAPQACAIAAAJgAAigCQgugNgOgcIAAgCIgDgUIgCgKQgEgKgHgKQgIgLACgCQAZgWAegBQAPAAARABIAGAIQAMAVAEAaIABAJIAOAQQAOATADALQABAFgVACIADASQgUgBgWgGg");
	this.shape_1.setTransform(17.8839,16.4438);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#081858").s().p("ABRCEIgZgGQgOgEgFgEQgJgGgLgRIgGgIIgNgXQACgJAAgJQAAgJgBgIIgFgQIgJgOQgDgGgIgCIgKgDQgHAAgFADQgIAGACAMQACAMASAMQAJAGAIAEIgBABQgMAJgOADQgFABgFgHIgLgPQgHgJgJgOQgMgPgIgOQgHgQgCgOIgBgJIAFgZQgDADgNgBQgJgBgEgDQgDgDgCgIQgCgLAHgJQAEgEADgCQADgJAMAAQALAAAHAGQAIAHAAAIQAVgOAVgGQANgDAdgDQAmgFAeARQAeAQgOAEIgEAAQgSgBgPAAQgfABgYAWQgCACAIALQAGAKAEAKIADAKIACAUIAAACQAOAbAvANQAXAHAUABIABAAIAMAfQAMAjACAUQACAGgIAEIgOAGIgJABQgKAAgVgEg");
	this.shape_2.setTransform(14.1496,13.6029);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.3,33.6);


(lib.Symbol40 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D94807").s().p("Al9BwQifgvAAhBQAAhACfgvQCeguDfAAQDgAACeAuQCfAvAABAQAABBifAvQieAujgAAQjfAAiegugAkVhQQhzAhAAAvQAAAvBzAiQB0AiChAAQCjAABzgiQBzgiAAgvQAAgvhzghQhzgiijAAQihAAh0Aig");
	this.shape.setTransform(82.175,23.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8F8F8").s().p("AnvCQQjMg7AAhVQAAhUDMg7QDOg8EhAAQEiAADNA8QDOA7gBBUQABBVjOA7QjNA8kiAAQkhAAjOg8gAl9hvQifAvAABAQAABBCfAvQCeAuDfAAQDgAACeguQCegvAAhBQAAhAiegvQiegujgAAQjfAAieAug");
	this.shape_1.setTransform(82.2,23.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D94807").s().p("Ah+AlQg0gPAAgWQAAgVA0gPQA1gPBJAAQBKAAA0APQA1APAAAVQAAAVg1AQQg0APhKAAQhJAAg1gPg");
	this.shape_2.setTransform(82.2,23.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D94807").s().p("ApECpQjxhGAAhjQAAhiDxhGQDxhHFTAAQFVAADwBHQDxBGAABiQAABjjxBGQjwBHlVgBQlTABjxhHgAnuiPQjNA8AABTQAABVDNA8QDNA7EhAAQEjAADNg7QDNg8AAhVQAAhTjNg8QjOg8kiAAQkhAAjNA8g");
	this.shape_3.setTransform(82.175,23.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8F8F8").s().p("AkVBRQhzgiAAgvQAAgvBzghQB0giChAAQCiAAB0AiQBzAhAAAvQAAAvhzAiQhzAiijAAQihAAh0gigAh+gkQg0APAAAVQAAAWA0APQA1APBJAAQBKAAA0gPQA1gQAAgVQAAgVg1gPQg0gPhKAAQhJAAg1APg");
	this.shape_4.setTransform(82.2,23.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#742708").s().p("AjmCrIhJgHIgCAAIiqgcIgCAAIgwgLIgCAAIhQgWIgNgFIgDgBIhggoIgCgBIgKgGIgCgBIgLgGIgWgPIgOgMIgHgHIgCgCIgGgGIgLgNIgHgNIgEgKIgDgOIgBgJIAAh5IABAJIADANIAEAKIAJAQIAJAMIAIAIIAaAWIAcARIACACIAKAFIACABIBgApIB4AgIAEABIAYAFIBsATIAiAFICNAOIAhACIAsACIDxAAIAfgCIASgBIAfgCIBOgHIADAAIBzgQIAFgBIB3gYIA7gPIBUgdIA9gdIADgCIAHgDIATgNIAEgDIADgCIAFgEIABgBIAMgKIACgCIAEgDIABgCIAKgKIAEgGIABgCIADgEIADgGIABgCIACgEIABgBIAEgLIAAgBIABgHIABgEIAAB6IgBAEIAAABIgBAFIAAABIgEALIgDAGIgBABIgDAFIAAACIgDAEIgBACIgDADIgBACIgFAEIgKALIgCABIgBABIgEAEIgHAFIgBACIgFADIgCACIgXAPIgBABIgvAYIgDABIgRAIIgEABIgCABIgcALIiaArIg4ALIgBAAIhDAKIgDABIhKAJIhtAJIgSABIgfACIg7ACg");
	this.shape_5.setTransform(82.175,41.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#742708").s().p("As1DSIAAmjIZrAAIAAGjg");
	this.shape_6.setTransform(82.175,54.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164.4,75.4);


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
	this.shape.graphics.f("#FFFFFF").s().p("Ak3E4QiBiBAAi3QAAhoAvhdQAuhaBQg+IAAJpIA6AAIAAh3IAtgwIBfCnIBDAAIh7jRIA5hAQAjgoAUgYIhFAAIh/CMIAAnLQBig0BvAAQC3AACBCBQCBCBAAC2QAAC3iBCBQiBCBi3AAQi2AAiBiBgAAcgZQgjAvAABMQAABWAhAtQAjAtBFAAQA5AAAighQAfgdAKg2Ig7AAQgJAhgPAPQgRATgeAAQgmAAgVggQgUghgBg/QAAg5ATggQAVgiAoAAQA8AAAKBFIA8AAQgEgvgcggQgjgng9AAQhDgBgnAzg");
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
	this.shape.graphics.f("#FFFFFF").s().p("AgdA1QgMgIgDgRIAOgCQAGAYAZAAQAIAAAHgDQAHgDADgFQAEgFAAgGQAAgIgEgEQgDgFgHgCQgGgCgOgDQgUgEgIgGQgJgJAAgNQAAgJAFgIQAFgIAJgEQAJgEAMAAQAQAAALAHQALAHAEAPIgOACQgCgJgIgFQgHgFgLAAQgIAAgGACQgGADgDAEQgDAFAAAFQAAAHADADQADAFAGACIASAFQAOADAKAEQAJADAEAHQAFAHAAAKQAAAKgGAIQgGAJgJAEQgKAFgNAAQgSAAgMgJg");
	this.shape.setTransform(189.175,10.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfA9IAAhOQABgOgIgIQgHgIgOAAQgIAAgJAFQgIAFgFAJQgEAJAAAOIAABCIgOAAIAAh2IANAAIAAATQAHgLAKgFQAJgGALAAQAUAAALALQAKAKAAAUIAABQg");
	this.shape_1.setTransform(176.8,10.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbA3QgMgHgHgOQgGgOAAgUQAAgUAGgNQAHgNAMgIQANgHAOAAQAPAAANAHQAMAIAHANQAGAPAAASQAAAUgGAOQgHAOgMAHQgMAHgQAAQgPAAgMgHgAgTgrQgIAFgGAMQgEALAAAPQAAARAEALQAGALAIAFQAIAGALAAQAMAAAIgGQAJgFAEgLQAFgLAAgRQAAgQgFgKQgEgLgJgGQgIgGgMAAQgLAAgIAGg");
	this.shape_2.setTransform(163.575,10.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGBSIAAh2IANAAIAAB2gAgGg9IAAgUIANAAIAAAUg");
	this.shape_3.setTransform(154.225,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBBMQgGgDgBgHQgCgGAAgNIAAhLIgRAAIAAgMIARAAIAAgcIANgLIAAAnIAXAAIAAAMIgXAAIAABNQAAAIACAEQAAADAEABQACACAFAAIAKgCIACANIgOACQgLgBgEgDg");
	this.shape_4.setTransform(147.625,8.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjAyQgKgLAAgTIAAhQIAOAAIAABOQAAAOAHAIQAHAIAOAAQAQAAAJgLQAJgLAAgVIAAhBIAPAAIAAB2IgOAAIAAgTQgGAKgKAGQgJAGgLAAQgUAAgLgLg");
	this.shape_5.setTransform(137.275,10.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGBSIAAijIANAAIAACjg");
	this.shape_6.setTransform(128.2,8.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbA3QgMgHgGgOQgHgPAAgTQAAgTAHgOQAGgOAMgHQANgHAOAAQAQAAAMAHQAMAHAHAOQAGANAAAUQAAAUgGAOQgIAPgLAGQgMAHgQAAQgPAAgMgHgAgTgrQgIAFgFAMQgFAKAAAQQAAARAFALQAEALAJAFQAIAGALAAQAMAAAIgGQAJgFAFgLQAFgNAAgPQAAgOgFgMQgFgLgJgGQgIgGgMAAQgLAAgIAGg");
	this.shape_7.setTransform(118.825,10.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcBOQgNgGgHgMQgIgLgCgQIAPgCQABAMAHAJQAGALAJAEQAJAEAMAAQALAAALgEQAKgEAFgHQAGgIgBgKQABgKgEgFQgDgGgLgEQgJgFgTgEQgSgDgLgFQgLgGgFgJQgEgJAAgMQgBgMAHgLQAGgKAMgFQAMgGAPAAQAZAAAPAMQANAMACAWIgPACQgCgRgJgJQgLgJgRABQgKAAgJADQgKAFgDAFQgFAIAAAIQAAAMAIAHQAKAIASADQAWAFALAFQANAEAGAKQAIAKgBAOQABANgIALQgGALgOAGQgNAHgRAAQgQAAgOgHg");
	this.shape_8.setTransform(104.7,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeBMQgMgIgBgQIAOACQACAKAIAEQAHAFAMAAQANAAAJgFQAIgFADgLQAEgKgBgSIAAgGQgNAUgXAAQgPAAgLgIQgLgIgHgNQgGgMAAgTQAAgTAGgNQAHgOALgIQALgIAPAAQAMAAAKAGQAJAGAGAJIAAAAIAAgSIAOAAIAABtQAAAdgNAOQgMAOgaAAQgTAAgLgJgAgShBQgIAFgEAMQgFALAAAOQAAAQAFAKQAEAKAIAHQAIAGAKAAQANAAAHgGQAJgHAFgKQAEgKAAgPQAAgPgEgLQgFgLgJgGQgIgHgMAAQgJAAgJAHg");
	this.shape_9.setTransform(83.25,13.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAgA9IAAhOQAAgPgIgHQgGgIgOAAQgJAAgJAFQgIAFgFAJQgDAJAAAOIAABCIgPAAIAAh2IAOAAIAAATQAGgLAJgFQAKgGALAAQATAAALALQALAKAAAUIAABQg");
	this.shape_10.setTransform(70.3,10.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGBSIAAh2IANAAIAAB2gAgGg9IAAgUIANAAIAAAUg");
	this.shape_11.setTransform(60.925,8.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAfA9IAAhOQAAgPgHgHQgHgIgOAAQgIAAgJAFQgIAFgFAJQgDAJAAAOIAABCIgPAAIAAh2IANAAIAAATQAHgLAJgFQAKgGALAAQATAAALALQALAKAAAUIAABQg");
	this.shape_12.setTransform(51.65,10.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeA9IAAh2IAOAAIAAATQAGgMAGgEQAGgGAKAAIAJABIAKAEIgFAOQgIgEgGAAQgJAAgGAFQgGAFgDALQgEALAAALIAAA/g");
	this.shape_13.setTransform(41.525,10.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfA6QgIgEgEgIQgFgHAAgKQAAgKAFgHQAEgIAKgEQAHgDASgEQAXgDAKgEIAAgEQAAgLgCgHQgDgHgGgDQgHgDgLAAQgZAAgFAXIgPgCQAEgQAMgJQALgIASAAQAOAAALAEQAJAEAFAIQAFAKAAAOIAAArQAAASABAFQABAHADAHIgPAAQgDgGgBgMIAAAAQgIAKgKAGQgLAFgNAAQgKAAgJgEgAARAAIgWAFQgPACgGAHQgHAFAAAKQAAAKAHAGQAHAFALAAIAJgBQAGgCAFgDQAGgEACgDIAGgIQACgEAAgGIABgWIgMADg");
	this.shape_14.setTransform(29.825,10.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaA3QgNgIgGgOQgGgNAAgTQAAgTAGgOQAHgNAMgJQAMgHAPAAQASAAALAIQALAIAGAPQAFAPAAASIhYAAQAAANAFAMQAFALAJAFQAIAGALAAQAMAAAJgHQAIgFAEgMIAPACQgGARgNAIQgMAJgSAAQgPAAgMgHgAgRgsQgHAEgGAKQgFAIgBAOIBJAAQgCgVgJgKQgJgKgQAAQgJAAgJAFg");
	this.shape_15.setTransform(16.925,10.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguBSIAAijIAQAAIAACVIBNAAIAAAOg");
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
	this.shape.graphics.f("#FFFFFF").s().p("AR3CqIAJgnQANADAFABQAJAAAGgDQAGgEAFgIIALgXIhKjBIA2AAIAmBtIAIAbIABAAIAtiIIA1AAIhLDGQgRAtgQAOQgQAOgdAAQgOAAgWgFgADHBtIA1AJQACAJAIAFQAIADASAAQAWAAALgKQALgKAAgZIAAgTIgBAAQgIAMgPAGQgPAIgSAAQgYAAgTgNQgSgMgMgXQgKgWAAgbQAAggAKgWQALgWASgMQATgMAYAAQATAAAQAHQARAIAIANIAAAAIAAgYIAwAAIAACvQABAigLAWQgKAVgVAJQgWAKggAAQhSAAgGhCgAEHg1QgKAJgDALQgGAOAAAQQABAQAFAPQAFAOAJAHQAKAIANAAQAOAAAJgIQALgHAFgOQAFgOABgQQgBgQgFgOQgGgNgKgHQgKgIgOAAQgNAAgKAHgAQVBgQgLgHgFgMQgEgMAAgXIAAhhIgcAAIAAgpIAcAAIAAgjIAyglIAABIIAkAAIAAApIgkAAIAABdQAAAIACAFQAAADAEADQADABAGAAQAKAAAKgDIAHAoQgJADgKABIgUACQgVAAgMgFgAK2BUQgcgRgOgfQgPggAAgqQAAgqAPgeQAQggAcgQQAcgQAmAAQArAAAdAUQAcATAMAnIg2ANQgNgtgtAAQgXAAgPAMQgQALgHAVQgJAWABAZQgBAaAJAWQAIAVAPAMQAQALAUAAQAOAAAPgHQALgGAKgNQAJgMAEgRIA1ANQgFAbgQAUQgPAUgYAKQgYALgeAAQgnAAgdgRgAHPBZQgUgMgMgXQgKgWAAgfQAAgcALgWQALgXAWgPQAUgNAeAAQAdAAAVAMQAVAMALAXQAMAXAAAfIAAAQIiJAAQADAWAKAMQAMALARAAQAQAAAKgIQALgHAEgMIAzAIQgLAcgWAPQgXAPgiAAQgfAAgWgMgAHngyQgMAMgCATIBVAAQgCgUgMgLQgKgLgSAAQgSAAgLALgAAEBZQgRgMgMgYQgKgXAAgfQAAgdAKgXQAKgVASgOQAUgMAYAAQASAAAOAGQANAHAKAMIABAAIAAhfIAzAAIAAELIgvAAIAAgYIgBAAQgLAPgOAGQgOAHgUAAQgYAAgTgMgAAcgrQgLAQAAAbQAAAUAEANQAGANAKAIQAJAGANABQAWAAALgQQAMgQgBgdQABgQgGgPQgGgOgKgHQgJgIgNAAQgVAAgLARgAjOBZQgVgMgLgXQgKgWgBgfQAAgaAMgYQAKgXAWgPQAXgNAdAAQAcAAAVAMQAVAMALAXQALAWAAAgIAAAQIiHAAQACAWAKAMQALALASAAQAQAAALgIQAJgHAFgMIAzAIQgKAcgYAPQgWAPghAAQggAAgWgMgAi2gyQgMALgCAUIBUAAQgBgUgLgLQgLgLgSAAQgRAAgMALgAsuBYQgVgNgMgXQgMgYAAgcQAAgcAMgYQAMgXAVgMQAWgNAeAAQAgAAAVANQAWAMAMAXQAMAYgBAcQABAdgMAXQgMAXgWANQgVANggAAQgeAAgWgNgAsQg0QgMAIgEANQgHAOAAARQABASAFANQAFANALAIQAJAHAOAAQAOAAALgHQAKgHAFgOQAGgNAAgSQAAgRgFgOQgHgNgJgHQgKgIgPAAQgNABgJAGgAOVBhIAAjBIAzAAIAADBgAlSBhIAAkLIA0AAIAAELgAncBhIgbhhIgHghIgBAAIgGAhIgaBhIgyAAIg7jBIAzAAIAiCCIABAAIAIgjIAXhfIAyAAIAYBgIAHAiIABAAIAiiCIAzAAIg8DBgAuzBhIAAh4QgBgUgGgJQgIgJgQAAQgRAAgMAMQgLANABAbIAABqIg0AAIAAjBIAwAAIAAAZQALgOAOgHQAQgIASAAQAgAAARARQARASAAAeIAACEgAyKBhIhLh7IgnAqIAABRIg3AAIAAkLIA3AAIAAB3IBrh3IBDAAIhhBrIBoCggAOVh6IAAgwIAzAAIAAAwg");
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
	this.shape.graphics.f("#081858").s().p("AkeAuQh3gSAAgcQAAgaB3gTQB3gUCnAAQCoAAB3AUQB3ATAAAaQAAAch3ASQh2AUipAAQinAAh3gUg");
	this.shape.setTransform(40.625,6.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,81.3,13.1), null);


(lib.Group_2_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgptAl5IAVgMQGWj2EflxQEpl+B6nUQAWhWAkikQAmitAUhPQBKkmBvi3QByi9C/iHQCwh7DkhGQDRg/D6gYQDOgTEEAGIIhAMQE4AADmgnQEPgtDahzQDuh8CgjGQCgjGBKj0QBLj4gdj6QgUishEilIAKAAQBsEMgPEWQgNDvhpDiQhoDeivCoQlQFCpNBAQjYAYlDgHQlngLi0ABQkMABjVAeQkCAmjQBXQjpBhigChQirCrhjEPQg3CbhOFcQhJFMhDCqQhTDUh/DGQh9DBihCpQj3EDk3C3g");
	this.shape.setTransform(266.9719,243.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_0, new cjs.Rectangle(0,0,534,487), null);


(lib.Group_1_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EhBPAlTQAljHBQi5QBRi8B4ifQC1jyEFipQECimEphIQE1hKFEApQCjAVC6AyQCSAoDBBEQBzAoDlBUQDNBLCNArQF6B2FPAyQF3A5FPgZQF6gcE4iFQENh0Dci5QDljBCRjzQCckEAhkZQASiXgZjAQgLhSgykCQgji5gHiEQgIisAhiRQA8kACxjmQCzjnEIikQD2iZErhSQE7hWGVgXIAAAIQkrASjtAvQkaA5jmBqQkQB8jSDEQjgDRhxEBQh8EYAkFHQAKBhAzECQAsDfAGCFQAMEGhkEDQheD1i0DSQizDQjtCYQjsCXkJBNQpZCusCiYQlBg/lzh9QhlgijrhWQjYhPh5goQjCg/ifgiQjAgpirgGQk7gLkzBpQkvBpj2DLQj6DNiaEUQiLD7g1Ecg");
	this.shape.setTransform(417.575,238.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0,835.2,477.5), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A7LPgQiTg8gxiIQg4ibBijIQAehABBhnQBHhzAWgpQBsjJgLjcQgJjThpjXQhJiTh6iYIAKAAQC5DmBIDhQBGDVgYDGQgLBdgmBeQggBPg4BfIhgCgQg5BlgaBMQhJDVB7COQBjBxCyAPQCiAOCShFQBTgmBShIQBBg5BKhWQAxg5BPhmQBZhzAlgtQDyklFmi9QFLivGuhfQFUhLHPgjQB2gJGSgXIAAAJIlzAVQjUAOieAQQnEAtldBkQmoB6k5DUQioBxiICNQg9BAhKBeIiACjQiJCuhsBYQiaB9inAYQgsAGgqAAQhpAAhdglg");
	this.shape.setTransform(195.7434,102.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0.1,0,391.29999999999995,205.8), null);


(lib.CompoundPath_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AE1ImQgEgDAAgFQAAgFAEgEQADgDAFAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgFAAgDgDgADmImQgDgDAAgFQAAgFADgEQADgDAFAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgFAAgDgDgACXImQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgABEImQgDgDAAgFQAAgFADgEQADgDAFAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgFAAgDgDgAgKImQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAADADQADAEAAAFQAAAFgDADQgDADgEAAQgFAAgEgDgAhYImQgEgDAAgFQAAgFAEgEQADgDAFAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgFAAgDgDgAinImQgDgDAAgFQAAgFADgEQADgDAFAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgFAAgDgDgAj2ImQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAlEImQgEgDAAgFQAAgFAEgEQADgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgDgDgAE1HDQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDAEgFAAQgFAAgDgEgADmHDQgDgDAAgFQAAgFADgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDADQgEAEgFAAQgFAAgDgEgACXHDQgDgDAAgFQAAgFADgDQAEgEAFAAQAFAAADAEQADADAAAFQAAAFgDADQgDAEgFAAQgFAAgEgEgABEHDQgDgDAAgFQAAgFADgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDADQgEAEgFAAQgFAAgDgEgAgKHDQgDgDAAgFQAAgFADgDQAEgEAFAAQAEAAADAEQADADAAAFQAAAFgDADQgDAEgEAAQgFAAgEgEgAhYHDQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDAEgFAAQgFAAgDgEgAinHDQgDgDAAgFQAAgFADgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDAEgFAAQgFAAgDgEgAj2HDQgDgDAAgFQAAgFADgDQAEgEAEAAQAFAAAEAEQADADAAAFQAAAFgDADQgEAEgFAAQgEAAgEgEgAlEHDQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQADADAAAFQAAAFgDADQgDAEgFAAQgFAAgDgEgAE1FhQgEgDAAgFQAAgFAEgEQADgDAFAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgFAAgDgDgADmFhQgDgDAAgFQAAgFADgEQADgDAFAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgFAAgDgDgACXFhQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgABEFhQgDgDAAgFQAAgFADgEQADgDAFAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgFAAgDgDgAgKFhQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAADADQADAEAAAFQAAAFgDADQgDADgEAAQgFAAgEgDgAhYFhQgEgDAAgFQAAgFAEgEQADgDAFAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgFAAgDgDgAinFhQgDgDAAgFQAAgFADgEQADgDAFAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgFAAgDgDgAj2FhQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAlEFhQgEgDAAgFQAAgFAEgEQADgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgDgDgAE1D+QgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDAEgFAAQgFAAgDgEgADmD+QgDgDAAgFQAAgFADgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDADQgEAEgFAAQgFAAgDgEgACXD+QgDgDAAgFQAAgFADgDQAEgEAFAAQAFAAADAEQADADAAAFQAAAFgDADQgDAEgFAAQgFAAgEgEgABED+QgDgDAAgFQAAgFADgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDADQgEAEgFAAQgFAAgDgEgAgKD+QgDgDAAgFQAAgFADgDQAEgEAFAAQAEAAADAEQADADAAAFQAAAFgDADQgDAEgEAAQgFAAgEgEgAhYD+QgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDAEgFAAQgFAAgDgEgAinD+QgDgDAAgFQAAgFADgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDAEgFAAQgFAAgDgEgAj2D+QgDgDAAgFQAAgFADgDQAEgEAEAAQAFAAAEAEQADADAAAFQAAAFgDADQgEAEgFAAQgEAAgEgEgAlED+QgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQADADAAAFQAAAFgDADQgDAEgFAAQgFAAgDgEgAE1CcQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDADgFAAQgFAAgDgDgADmCcQgDgDAAgFQAAgFADgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDADQgEADgFAAQgFAAgDgDgACXCcQgDgDAAgFQAAgFADgDQAEgEAFAAQAFAAADAEQADADAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgABECcQgDgDAAgFQAAgFADgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDADQgEADgFAAQgFAAgDgDgAgKCcQgDgDAAgFQAAgFADgDQAEgEAFAAQAEAAADAEQADADAAAFQAAAFgDADQgDADgEAAQgFAAgEgDgAhYCcQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDADgFAAQgFAAgDgDgAinCcQgDgDAAgFQAAgFADgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDADgFAAQgFAAgDgDgAj2CcQgDgDAAgFQAAgFADgDQAEgEAEAAQAFAAAEAEQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAlECcQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQADADAAAFQAAAFgDADQgDADgFAAQgFAAgDgDgAE1A5QgEgDAAgFQAAgFAEgDQADgDAFAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgFAAgDgEgADmA5QgDgDAAgFQAAgFADgDQADgDAFAAQAFAAAEADQADADAAAFQAAAFgDADQgEAEgFAAQgFAAgDgEgACXA5QgDgDAAgFQAAgFADgDQAEgDAFAAQAFAAADADQADADAAAFQAAAFgDADQgDAEgFAAQgFAAgEgEgABEA5QgDgDAAgFQAAgFADgDQADgDAFAAQAFAAAEADQADADAAAFQAAAFgDADQgEAEgFAAQgFAAgDgEgAgKA5QgDgDAAgFQAAgFADgDQAEgDAFAAQAEAAADADQADADAAAFQAAAFgDADQgDAEgEAAQgFAAgEgEgAhYA5QgEgDAAgFQAAgFAEgDQADgDAFAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgFAAgDgEgAinA5QgDgDAAgFQAAgFADgDQADgDAFAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgFAAgDgEgAj2A5QgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEAEgFAAQgEAAgEgEgAlEA5QgEgDAAgFQAAgFAEgDQADgDAFAAQAFAAADADQADADAAAFQAAAFgDADQgDAEgFAAQgFAAgDgEgAE1goQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDADgFAAQgFAAgDgDgADmgoQgDgDAAgFQAAgFADgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDADQgEADgFAAQgFAAgDgDgACXgoQgDgDAAgFQAAgFADgDQAEgEAFAAQAFAAADAEQADADAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgABEgoQgDgDAAgFQAAgFADgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDADQgEADgFAAQgFAAgDgDgAgKgoQgDgDAAgFQAAgFADgDQAEgEAFAAQAEAAADAEQADADAAAFQAAAFgDADQgDADgEAAQgFAAgEgDgAhYgoQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDADgFAAQgFAAgDgDgAingoQgDgDAAgFQAAgFADgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDADgFAAQgFAAgDgDgAj2goQgDgDAAgFQAAgFADgDQAEgEAEAAQAFAAAEAEQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAlEgoQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQADADAAAFQAAAFgDADQgDADgFAAQgFAAgDgDgAE1iLQgEgDAAgFQAAgFAEgDQADgDAFAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgFAAgDgEgADmiLQgDgDAAgFQAAgFADgDQADgDAFAAQAFAAAEADQADADAAAFQAAAFgDADQgEAEgFAAQgFAAgDgEgACXiLQgDgDAAgFQAAgFADgDQAEgDAFAAQAFAAADADQADADAAAFQAAAFgDADQgDAEgFAAQgFAAgEgEgABEiLQgDgDAAgFQAAgFADgDQADgDAFAAQAFAAAEADQADADAAAFQAAAFgDADQgEAEgFAAQgFAAgDgEgAgKiLQgDgDAAgFQAAgFADgDQAEgDAFAAQAEAAADADQADADAAAFQAAAFgDADQgDAEgEAAQgFAAgEgEgAhYiLQgEgDAAgFQAAgFAEgDQADgDAFAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgFAAgDgEgAiniLQgDgDAAgFQAAgFADgDQADgDAFAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgFAAgDgEgAj2iLQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEAEgFAAQgEAAgEgEgAlEiLQgEgDAAgFQAAgFAEgDQADgDAFAAQAFAAADADQADADAAAFQAAAFgDADQgDAEgFAAQgFAAgDgEgAE1jtQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDADgFAAQgFAAgDgDgADmjtQgDgDAAgFQAAgFADgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDADQgEADgFAAQgFAAgDgDgACXjtQgDgDAAgFQAAgFADgDQAEgEAFAAQAFAAADAEQADADAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgABEjtQgDgDAAgFQAAgFADgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDADQgEADgFAAQgFAAgDgDgAgKjtQgDgDAAgFQAAgFADgDQAEgEAFAAQAEAAADAEQADADAAAFQAAAFgDADQgDADgEAAQgFAAgEgDgAhYjtQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDADgFAAQgFAAgDgDgAinjtQgDgDAAgFQAAgFADgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDADgFAAQgFAAgDgDgAj2jtQgDgDAAgFQAAgFADgDQAEgEAEAAQAFAAAEAEQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAlEjtQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQADADAAAFQAAAFgDADQgDADgFAAQgFAAgDgDgAE1lPQgEgEAAgFQAAgFAEgDQADgDAFAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgFAAgDgDgADmlPQgDgEAAgFQAAgFADgDQADgDAFAAQAFAAAEADQADADAAAFQAAAFgDAEQgEADgFAAQgFAAgDgDgACXlPQgDgEAAgFQAAgFADgDQAEgDAFAAQAFAAADADQADADAAAFQAAAFgDAEQgDADgFAAQgFAAgEgDgABElPQgDgEAAgFQAAgFADgDQADgDAFAAQAFAAAEADQADADAAAFQAAAFgDAEQgEADgFAAQgFAAgDgDgAgKlPQgDgEAAgFQAAgFADgDQAEgDAFAAQAEAAADADQADADAAAFQAAAFgDAEQgDADgEAAQgFAAgEgDgAhYlPQgEgEAAgFQAAgFAEgDQADgDAFAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgFAAgDgDgAinlPQgDgEAAgFQAAgFADgDQADgDAFAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgFAAgDgDgAj2lPQgDgEAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDAEQgEADgFAAQgEAAgEgDgAlElPQgEgEAAgFQAAgFAEgDQADgDAFAAQAFAAADADQADADAAAFQAAAFgDAEQgDADgFAAQgFAAgDgDgAE1myQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDAEgFAAQgFAAgDgEgADmmyQgDgDAAgFQAAgFADgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDADQgEAEgFAAQgFAAgDgEgACXmyQgDgDAAgFQAAgFADgDQAEgEAFAAQAFAAADAEQADADAAAFQAAAFgDADQgDAEgFAAQgFAAgEgEgABEmyQgDgDAAgFQAAgFADgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDADQgEAEgFAAQgFAAgDgEgAgKmyQgDgDAAgFQAAgFADgDQAEgEAFAAQAEAAADAEQADADAAAFQAAAFgDADQgDAEgEAAQgFAAgEgEgAhYmyQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDAEgFAAQgFAAgDgEgAinmyQgDgDAAgFQAAgFADgDQADgEAFAAQAFAAADAEQAEADAAAFQAAAFgEADQgDAEgFAAQgFAAgDgEgAj2myQgDgDAAgFQAAgFADgDQAEgEAEAAQAFAAAEAEQADADAAAFQAAAFgDADQgEAEgFAAQgEAAgEgEgAlEmyQgEgDAAgFQAAgFAEgDQADgEAFAAQAFAAADAEQADADAAAFQAAAFgDADQgDAEgFAAQgFAAgDgEgAE1oUQgEgEAAgFQAAgFAEgDQADgDAFAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgFAAgDgDgADmoUQgDgEAAgFQAAgFADgDQADgDAFAAQAFAAAEADQADADAAAFQAAAFgDAEQgEADgFAAQgFAAgDgDgACXoUQgDgEAAgFQAAgFADgDQAEgDAFAAQAFAAADADQADADAAAFQAAAFgDAEQgDADgFAAQgFAAgEgDgABEoUQgDgEAAgFQAAgFADgDQADgDAFAAQAFAAAEADQADADAAAFQAAAFgDAEQgEADgFAAQgFAAgDgDgAgKoUQgDgEAAgFQAAgFADgDQAEgDAFAAQAEAAADADQADADAAAFQAAAFgDAEQgDADgEAAQgFAAgEgDgAhYoUQgEgEAAgFQAAgFAEgDQADgDAFAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgFAAgDgDgAinoUQgDgEAAgFQAAgFADgDQADgDAFAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgFAAgDgDgAj2oUQgDgEAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDAEQgEADgFAAQgEAAgEgDgAlEoUQgEgEAAgFQAAgFAEgDQADgDAFAAQAFAAADADQADADAAAFQAAAFgDAEQgDADgFAAQgFAAgDgDg");
	this.shape.setTransform(32.875,55.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_0, new cjs.Rectangle(0,0,65.8,110.7), null);


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

	// Layer_1
	this.instance = new lib.Symbol59();
	this.instance.setTransform(431.6,135.8,1,1,0,0,0,431.6,135.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol60, new cjs.Rectangle(0,0,863.2,271.6), null);


(lib.Symbol54 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(804.4,102.9,1,1,0,0,0,195.8,102.9);
	this.instance.compositeOperation = "overlay";

	this.instance_1 = new lib.Group_1_0();
	this.instance_1.setTransform(582.45,361.25,1,1,0,0,0,417.6,238.7);
	this.instance_1.compositeOperation = "overlay";

	this.instance_2 = new lib.Group_2_0();
	this.instance_2.setTransform(266.9,243.5,1,1,0,0,0,266.9,243.5);
	this.instance_2.compositeOperation = "overlay";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol54, new cjs.Rectangle(0,0,1000,600), null);


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

	// timeline functions:
	this.frame_61 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(61).call(this.frame_61).wait(1));

	// Symbol 51
	this.instance = new lib.Symbol51();
	this.instance.setTransform(168.5,62.15,1,1,0,0,0,168.5,19.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).to({alpha:1},22,cjs.Ease.quadInOut).wait(2));

	// Symbol 48
	this.instance_1 = new lib.Symbol48();
	this.instance_1.setTransform(275.9,19.9,1,1,0,0,0,75.4,19.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({alpha:1},22,cjs.Ease.quadInOut).wait(15));

	// Symbol 49
	this.instance_2 = new lib.Symbol49();
	this.instance_2.setTransform(157.9,19.9,1,1,0,0,0,39.6,19.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({alpha:1},22,cjs.Ease.quadInOut).wait(28));

	// Symbol 50
	this.instance_3 = new lib.Symbol50();
	this.instance_3.setTransform(57.6,19.9,1,1,0,0,0,57.6,19.9);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},22,cjs.Ease.quadInOut).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,56.3,152,167.7);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAMAgIgNgYIgLAAIAAAYIgMAAIAAg/IAbAAQAKAAAGAGQAFAFAAAJQAAAPgPADIAQAZgAgMgBIAOAAQAEAAAEgCQADgDAAgFQAAgKgLAAIgOAAg");
	this.shape.setTransform(273.9,5.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.3).p("AA1AAQAAAWgQAPQgPAQgWAAQgUAAgQgQQgQgPAAgWQAAgVAQgPQAQgQAUAAQAWAAAPAQQAQAPAAAVg");
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


(lib.PuppetShape_6copy5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FED0CC").s().p("AlKApQgNgIABgSIAAgTIgBgBIACgKIAFgLIAZgMQAOgIAOgMQAAABAAAAQABAAAAAAQAAABABAAQAAAAAAAAIAEADIAEADQAEACAGAIQAFAHAHACQASAEgBAJQAAAEgEAEQADgCAEAKQAFAMgGAOQgKAXgTAIQgJAEgKAAQgWAAgcgSgAD4AtQgTgHgJgVQgFgNAJgJQAIgIACAAQgCgCABgEQACgGANgJIASgLQAKgGALgDIADAAIAZAQQAOAJAJAEQADABACAKIAAAIQgCABgBATQgBARgPAGQgfAMgXAAQgMAAgKgEg");
	this.shape.setTransform(0.1033,35.4287);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18367D").s().p("AllAOIAEgDIAkgWQAVgOAQgOIADgEIAGAYQgBAAgDAFIgEAEQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQgNAMgPAHIgYAMIgGALIgBAKIAAABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBABQgFAAAAABgAFYAnIABgIQgCgKgDgBQgJgEgOgJIgZgPIgEAAQABAAgKgIQAIgKgBgQQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIADACQAnAgAbATIACACIgIAeIgGgEgAEggIIAAAAg");
	this.shape_1.setTransform(-0.025,30.8375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01003B").s().p("AEwCcIgCAAQABgTALgMIAIgJQgNATgBAEQgCAGgBARQAAgGgBAAgAlBBvQAKAMAQAiQgDgCABAHIgYgzgAjIicIADgEQATAzgBBUQAAAogEAZQALh+gchGgADVibIADADQgEAPgGAkQgJA2gBA6QgBhdAShJg");
	this.shape_2.setTransform(-0.75,-6.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#081858").s().p("AEnDjQAAg1AIh4QABgQACgGQACgEAMgTIgIAJQgLAMgBATIgigTQgOgKgQgWIgSgbQgNgRgKgKQgqgjAGhfQADgoANgVQAOgYAWAJQgSBJABBeQABg7AJg2QAGgkAFgPIgEgDQAtAVBHCNIAuBdQAWAnAJAAQAGAAgLAjQgQA1gEAlIgSB6QgbgUgngggAlxCYQgJgygRgtQgMggACgCIBYh9QBRh1AigsQAdBGgMB/IhDBTQgeAjgPgDQgQghgJgNIAYAzQAGAPAIBAIAJBeQgQAOgVAOIgjAYIgWh/gAi5hCIAAAAgAi5hCQAEgZABgpQAAhUgTg0QATgVAPAXQANAUAEAtQAEAsgJAmQgKAqgWALIAAAAg");
	this.shape_3.setTransform(-0.5584,4.0556);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18367D").s().p("AlXAQIAEgDIAigYQAVgPAPgOIAEgDQADAGAEAQQgBABgDAEQgDAEgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgNAMgOAHIgZAOIgFAKIgBAJIAAACIgEABQgFABABACIgJgcgAFIAnIABgJQgBgJgDgBIgXgPIgZgPIgDAAQABAAgKgIQAIgJABgPQAAAAAAAAQABAAAAAAQAAABABAAQABABAAAAIBBA2IACABIgKAcIgGgEg");
	this.shape_4.setTransform(-0.025,28.6719);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FED0CC").s().p("Ak3AoQgMgHgCgQIgCgTIAAgBIABgJIAFgKIAYgOQAPgIAMgMQABABAAAAQAAAAAAAAQABABAAAAQAAAAABAAIAIAGQAFACAGAHQAGAGAGACQARAEgBAJQAAAEgEAEQADgCAEAKQAFALgGAOQgJAXgSAHQgIAEgKAAQgUAAgcgRgADpAtQgRgGgJgWQgFgNAJgJQAHgIACABQgCgCAAgEQACgHANgIIASgKQALgGAKgDIADAAIAZAQIAXAPQADABACAJIgCAJIgEASQgDAQgOAFQgeALgWAAQgLAAgJgDg");
	this.shape_5.setTransform(0.105,32.8837);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#01003B").s().p("AEyCZIgDgBQAEgRALgLIAJgIIgOATIgBAEIgCAFIgDAOQAAgEgBgBgAlGBvQALAKARAfIgBAAIAAAGIgbgvgAjKiZIAAAAIADgEQAUA0AABPQAAAmgDAYQAKh3gehGgADViYIADADQgFAPgHAiQgKA1gBA2QAAhXAUhIg");
	this.shape_6.setTransform(-0.65,-7.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#081858").s().p("AEaDXQAGg9AShiIADgNIACgGIABgDIANgUIgIAIQgLALgEASIgigVQgQgLgRgWIgTgaQgNgRgKgKQgrggAIhdQAEgnANgVQAPgXAVALQgTBHAABZQABg4AKg0QAHgiAFgQIgEgCQAsAVBMCMQBJCFAIAAQAFABgNAiQgUAygIAhIgdBuIhBg2gAlvCZQgMgsgUgrQgPgeACgDQCXjbA5hEQAfBFgLB5IhDBPQgfAjgRABQgSgggKgKIAbAvQAHAOAMA6IARBXQgPANgVAPIgiAZIghhzgAi4hAQAEgYAAgoQAAhPgUg0QATgUAPAWQANAUAFArQAEAqgIAkQgKApgWALIAAAAg");
	this.shape_7.setTransform(-0.5075,3.1238);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18367D").s().p("AE6AmIACgIQgCgJgDgBQgJgFgNgLIgYgQIgEAAIgIgIQAIgJADgMIACACIBAA3IACACIgMAaIgGgGgAlLASIADgDIAigZQAVgQAOgOIADgDIAJAVIgDAFQgBABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQgNALgOAIIgYAOIgEALQgCAGACACQAAACgFACQgFABABACgAEFgMIAAAAg");
	this.shape_8.setTransform(0,26.7969);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FED0CC").s().p("AkmAnQgMgHgDgOQgBgPgDgDQgBgCABgHIAFgKIAYgPQAOgJAMgLQAAAAABABQAAAAAAAAQABAAAAABQAAAAABAAIAJAFQAEACAHAHQAGAGAGABQAQAFgBAJQAAAEgEADQADgDAFALQAEAKgFAOQgJAWgQAIQgIADgJAAQgUAAgbgQgADdAtQgRgGgIgVQgFgOAIgIQAHgIACAAQgCgCABgDQABgHANgIIASgKQAKgGALgCIADgBIAYASQAOALAJAFQADABABAJIgBAHIgGASQgFAOgNAFQgdALgUAAQgLAAgIgDg");
	this.shape_9.setTransform(0.1175,30.6396);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#01003B").s().p("AE0CWIgCAAQAEgRAMgKIAJgIIgQAVQgCAFgFAOQABgEgBgBgAlKBvQAKAJATAdQgDAAACAFIgcgrgAjNiWIAEgEQAVAzABBMQAAAlgDAXQAJhygghFgADUiVIAEACQgGAQgHAhQgLAygBA0QAAhSAVhHg");
	this.shape_10.setTransform(-0.5,-7.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#081858").s().p("AEPDMQAHglAdhtQAFgOADgFIAPgVIgJAIQgMAKgEARIgkgXQgRgNgSgWIgUgZQgNgQgKgKQgrgeAJhbQAEgmANgUQAQgWAVALQgVBHAABTQACg1AKgyQAHghAGgQIgEgCQArAVBQCLQBPCHAFABQAFABgQAgQgYAygKAcIgnBkgAltCbQgQgngXgqQgQgcACgEQALgTBQhvQBYh7AlgoIgDAEQAfBFgJBzQADgXAAgmQgBhMgVgzQATgTAPAVQAPAUAEApQAFApgIAiQgKAogVAKIhEBNQggAigTAEQgTgdgKgJIAcArQAIANARA2IAXBQQgOANgVAQIghAaIgqhog");
	this.shape_11.setTransform(-0.4001,2.3043);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18367D").s().p("AEtAmIACgIQAAgIgDgCQgJgFgOgMIgXgRIgDABIgJgIQAIgHAFgNIACACIA/A5IACACIgOAYIgHgGgAlBAUIADgDQAsgiAYgXQAAgBAAgBQABAAAAgBQABAAAAAAQAAAAABAAIAKAUIgDAFQgBABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQgLAKgOAJIgYAPIgEALIAAAIIABAAQABACgFABQgGACABACIgNgYgAD7gNIgBAAg");
	this.shape_12.setTransform(0,25.14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FED0CC").s().p("AkXAmQgMgGgEgOQgDgNgDgEIAAAAIAAgHIAEgLIAYgPQAOgKALgKQAAAAABAAQAAABAAAAQAAAAABAAQAAAAABAAIAJAFQAFACAHAGQAHAFAFACQAQAFgBAIQAAAFgEACQADgCAEAKQAFAKgFAOQgMAggcAAQgTAAgagPgADSAtQgQgHgIgVQgFgNAIgJQAGgHADAAQgDgCABgEQACgGAMgIQAbgOAMgDIADgBIAYASQAOAMAJAFQADACAAAIIgCAHIgHARQgGANgMAFQgcALgUAAQgKAAgHgDg");
	this.shape_13.setTransform(0.1292,28.7351);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#01003B").s().p("AE2CTQAAABgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAHgPAMgKIAJgHIgRAUIgHASQAAgFgBgBgAlOBvQALAJAUAaIgCABQAAAAAAAAQAAABAAAAQAAABAAABQABAAAAACIgegpgADUiTIAEADQgGAQgIAfQgOBCACBDQgGhiAchVgAi+hlQgLgtgEgEIACgCQAVA0ACBJQABAjgDAWQAFhFgNg+g");
	this.shape_14.setTransform(-0.4,-7.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#081858").s().p("AEFDDQAPg1AihSIAIgSIAQgUIgJAHQgMAKgGAPQgagQgLgIQgSgOgTgVQgbgjgQgPQgDhFAOhBQAIggAGgQIgEgDQArAXBUCJQBUCIACABQAEACgRAeQgfA2gKATIgvBcIg+g7gAlrCdQgSghgagqQgSgbACgEQAIgSBUhzQBYh5AmgnQAEAEAKAsQANA/gFBGIhEBLQghAigTAGQgVgbgLgIIAeAoQAJAMAUAyIAdBKQgXAXgsAiIgxhfgACcitQAEglAOgTQAQgWAVALQgcBWAHBjQgsgdAKhZgAi1h4QgBhJgVgzQATgSAQAVQAOASAFAoQAFAogIAhQgJAmgWALQADgXgBgkg");
	this.shape_15.setTransform(-0.3099,1.5846);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18367D").s().p("AEjAlIACgHQgBgJgCgBQgIgGgPgLIgXgSIgDABQABgBgIgHQAIgIAFgLQAAAAAAAAQAAAAABAAQAAAAABABQAAAAABABIA8A7IADACIgQAWIgGgHgAk4AVIAEgEIAggbQAUgQAMgOIAEgDIALATQgBAAgCAEQgDAEgBAAIgCgCIgZAUIgXAQIgEAKQAAAEABADIAAABQABACgEACQgFACAAABg");
	this.shape_16.setTransform(0,23.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FED0CC").s().p("AkKAmQgMgHgFgMIgHgRIAAAAQgCgCABgEIAEgKIAXgRIAZgUIACACIAKAEQAFACAHAFQAIAGAFABQAPAFgBAIQAAAEgEADQADgCAFAKQAEAJgFAOQgLAggbAAQgSAAgZgOgADIAsQgOgGgIgVQgFgNAIgJQAGgIADACIAAAAIAAAAQgEgCABgEQABgHANgHQAYgNAPgEIADAAIAXASQAOAMAJAFQACACABAIIgDAHQgDADgFANQgGAMgNAFQgaALgSAAQgKAAgIgEg");
	this.shape_17.setTransform(0.1086,27.087);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#01003B").s().p("AE3CRIgCAAQAIgPAMgIIAKgHIgRASIgKASQAAgEgBgCgAlSBwQAMAHAVAZIgCAAQAAABAAAAQAAAAAAABQAAAAAAABQABABAAABIggglgAC7AgQgBgKADgsQAEhGATg1IAAAAIABAAIABABIABABIABAAIAAABQgHAQgIAeQgPA/ADBCIgCgBgAjAhkQgKgrgEgFIACgCQAWA0ACBGQABAigEAVQAGhBgPg+g");
	this.shape_18.setTransform(-0.325,-7.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#081858").s().p("AD9C8QASgxAohOIAKgRIARgSIgJAGQgNAJgIAPIglgaQgTgPgTgVQgcgigQgPQgDhDAPg/QAHgeAIgQQApAbBUCBIBXCLQAEADgTAcIguBEIg2BUIg8g7gAlNDKIgcgsQgPgYgiguQgTgZACgFQAFgQBXh3QBch+AngkIgCACQAEAFAKArQAOA9gFBDQADgVgBgjQgChGgVg0QATgRAQAVQAOASAFAmQAFAngHAgQgJAlgWAKQg3A9gOANQghAhgUAJQgVgZgMgIIAgAmQANARA0BuQgNAOgTAQIggAcIgcgrgACfhnQgIggAFgkQAEgjAPgTQAPgVAVAMQgSA1gFBFQgDAuACAKQgUgOgIghgADUjqIgBAAIABAAg");
	this.shape_19.setTransform(-0.2526,0.9647);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18367D").s().p("AEaAkIACgHQAAgIgCgCQgJgFgOgMIgWgSIgDAAIgHgHQAHgHAGgLIAEACQATAUAoAnIACADIgRAVIgGgIgAkwAWIADgEQAqgkAVgWQABgBAAgBQABAAAAgBQABAAAAAAQAAAAAAAAIANASQgCAAgCAEQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgIAHgnAeIgDAJIABAIIAAAAQABACgEACQgFACAAACgADqgQIgBAAIABAAg");
	this.shape_20.setTransform(0,22.5719);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FED0CC").s().p("Aj/AlQgMgGgGgLIgIgQIAAAAIgBgGIADgKQAngeAIgIQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAAAIAKAEQAGACAIAFQAIAFAEABQAOAFAAAIQAAAEgDADQACgCAEAJQAFAKgFAOQgHAVgOAHQgHADgIAAQgSAAgYgOgADAAtQgOgHgHgUQgFgOAHgIQAGgIADABQgDgCABgEQABgHAMgHQAZgMAOgEIADAAIAXATQAOAMAIAGQADABAAAJIgDAGQgDADgGAMQgHALgMAFQgaAKgSAAQgJABgHgDg");
	this.shape_21.setTransform(0.1036,25.6389);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#01003B").s().p("AE5CQIgDAAQAKgPANgIIAJgGIgRARIgBAAIgFAGIgGAKQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAgAk8CJIgGgHIgDgDIgQgQQAMAIAXAXIgDAAQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAgAC7AdQgCgIADgtQAEhCAUg1IAEACQgHAQgIAeQgQA+AEA/IgCgBgAjBhiIgCgKIgBgEIgJgeIgCgEIAAAAIACgCQAVA0ADBEQABAggDAVQAFhAgPg7g");
	this.shape_22.setTransform(-0.25,-8.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#081858").s().p("AD2C1QATgpAwhNIAGgLIAFgGIAAAAIASgRIgKAGQgMAIgKAPQgXgQgOgLQgUgQgUgVIgWgZQgNgPgKgJQgDhAAQg9QAHgeAIgRIgEgCQApAXBaCIQAuBFArBHQADADgUAbIgzBBIg7BNQgogogTgVgAlnCfIg1hBQgUgZABgFQADgQBah4QBah5AnglIABgCIACgBIgBABIAAAAIACAEIAJAfIABADIACAKQAPA8gFBAQADgVgBghQgDhEgWgzQAUgRAQAUQAOASAGAlQAFAmgHAfQgJAkgWAKQg0A5gRAQQghAggWALQgWgXgMgHIAQAQIACACIAHAIIAIAJQAPATA6BkQgVAXgqAlIg9hRgACehlQgHgfAEgkQAFgjAPgSQAQgUAVAMQgUA1gEBCQgDAuABAIQgTgNgJggg");
	this.shape_23.setTransform(-0.2082,0.4271);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#18367D").s().p("AESAkIABgEIABgDQABgIgDgCIgBAAIAAAAIgJgHIgMgLIgNgKIgJgIIAAAAIgDAAIgHgHIAPgRIADACQASAVAoAnIACADIgSAUIgGgIgAkpAXIADgEQApglAUgXIADgCIAOARQgCAAgBAEQgBABAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgJAIglAdIgDAKQAAAEACADIAAAAQABACgFACQgEADAAABIgRgTgADjgRIAAAAIAAAAg");
	this.shape_24.setTransform(0.025,21.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FED0CC").s().p("Aj2AkQgLgGgIgKIgIgOIAAgBQgCgDAAgDIADgJQAlgeAJgJQAAABABAAQAAAAAAAAQABABAAAAQAAAAABAAIAKADQAFACAIAFIANAGQAOAFAAAIQgBAEgDADQADgCAEAJQAFAJgFAOQgHAVgNAHQgGADgIAAQgRAAgZgOgAC5AtQgNgGgHgVQgFgOAHgIQAGgJACACQgIgJAUgKQAWgMARgEIADAAIAAABIAJAHIANAMIAMAKIAJAHIAAABIABAAQADABgBAHIgBADIgBAEIgKAOQgIALgMAFQgYALgSAAQgJAAgHgDg");
	this.shape_25.setTransform(0.1036,24.4171);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#01003B").s().p("AE6COIgCAAQALgOAMgIIAKgFIgTAQIgMAQQABgBAAgBQAAgBAAAAQAAgBAAAAQAAAAgBgBgAlECDIAAgBIgBAAIAAgBIgTgSQANAHAWAWIgCABQgBAAAAAAQAAABAAAAQABABAAAAQAAABABABIgOgOgAC6AaQgCgJADgqQAEhAAVg1IAEACIAAABQgIAQgIAdQgQA8AEA9IgCgBgAjChhQgHgegJgPIADgEQAXAzADBCQABAggDAUQAFg9gQg7g");
	this.shape_26.setTransform(-0.175,-8.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#081858").s().p("ADvCwQAWgnA1hJIAMgQIASgQIgKAFQgMAIgLAOQgtgfgigjQgdghgQgPQgDg+AQg8QAIgdAIgRQAqAcBXCBQBHBmAUAnQACAEgVAZIg4A9IhABIQgngogTgVgAlmChIg5g/QgVgXABgFQACgQBch6QBeiAAoghIgEAEQAJAPAIAeQAQA7gGA+QAEgUgCghQgChCgXgzQATgQARAUQAOARAGAkQAGAlgIAfQgIAjgXAKQgwAzgVAUQgiAhgWAMQgXgWgMgHIASASIABAAIAAABIABABIANAOQASAUA+BcQgVAXgoAmQgWgXgsgzgACdhkQgIgfAFgiQAGgjAOgSQARgTAUAMQgUA1gEBAQgDArABAJQgTgMgJggg");
	this.shape_27.setTransform(-0.1419,-0.0106);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#18367D").s().p("AELAjIABgDIABgDQABgJgDgBIAAAAIgBgBIgJgHIgLgKIgNgMIgJgHIAAgBIgDABIgGgHIAPgQIADACIA5A9IACADIgSATQgHgGAAgDgAkjAXIADgCQAognATgWIADgDIAPAQIgDAEQgBABAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgDgBQgNAOggAYIgCAJQAAAFACACQABACgFADQgEADAAABIgSgTgADdgSIAAAAg");
	this.shape_28.setTransform(0,20.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FED0CC").s().p("AjtAkQgQgJgNgVQgCgCAAgEIACgJQAggZANgOIADABIALAEQAGABAIAFIAMAGQAOAFAAAIQAAAEgDACQACgBAEAIQAFAKgEANQgHAWgNAGQgGADgIAAQgRAAgXgNgAC0AsQgNgGgHgVQgFgNAHgIQAGgIACABQgDgCABgEQABgHAMgGQAVgLASgEIADgBIABABIAIAHIANAMIAMALIAJAHIAAAAIABABQACABAAAHIgCADIgBAEIgKANQgJAKgLAFQgYALgRAAQgJAAgGgDg");
	this.shape_29.setTransform(0.0792,23.4196);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#01003B").s().p("AE8CNIgDAAQALgNANgIIAKgFIgRANIgCADIgEAEIgJAKQAAAAABgBQAAgBAAAAQAAgBAAAAQAAgBAAAAgAlaBwQANAGAXAVIgDABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAABIgigggAC6AZQgCgHACgeIABgOQAEg/AVg0IAFADQgJAQgIAeQgRA6AFA8IgCgBgAjChhQgIgdgJgPIAEgDQAWAzAEBAQABAfgEATQAGg7gQg7g");
	this.shape_30.setTransform(-0.15,-8.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#081858").s().p("ADqCrQAUgeA9hMIAIgKIAFgFIACgCIARgOIgKAFQgNAIgLANQgvgigighQgdgggQgPQgEg9ARg6QAIgeAIgQQAqAcBZCAQBUB4AHAWQADAJhSBOIhEBDIg5g+gAlkCiIg8g7QgWgWABgGQAAgQBeh8QBfiAAoggIgDADQAJAQAIAdQAQA6gGA9QAEgUgCggQgDhAgXgzQAUgQAQATQAPASAGAjQAGAkgIAfQgIAigXAKQguAxgXAVQgiAggXAOQgXgVgNgGIAiAgQAYAZA9BSQgUAWgnAoQgXgWgvgwgACdhjQgIgeAGgjQAFgiAPgRQARgTAUAMQgVA1gFA/IgBANQgBAfABAHQgUgMgIggg");
	this.shape_31.setTransform(-0.1218,-0.4232);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#18367D").s().p("AEFAjIADgHQABgHgCgCQgJgGgNgNIgVgTIgDAAIgGgGIAPgQIADACIA4A+IACADIgTASIgHgJgAkeAYIADgDIA6g9IADgDIAPAQIgDAEQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAIgDgBIgsAmIgCAJQAAADADAEQABACgFADQgFADABABgADZgTIAAAAIAAAAg");
	this.shape_32.setTransform(0,19.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FED0CC").s().p("AjnAjQgTgKgKgSQgDgEAAgDIACgIIAsgnIADABIALADQAGACAIAEIANAGQANAFAAAIQAAAEgDACQACgCAFAJQAFAJgFAOQgHAVgMAGQgGADgHAAQgRAAgXgNgACvAsQgNgGgHgVQgEgNAHgIIAHgHQgCgCAAgEQABgHAMgGQATgKAVgFIADAAIAVAUQANANAJAGQACACgBAGIgDAHIgKANQgJAJgLAFQgYALgQAAQgJAAgGgDg");
	this.shape_33.setTransform(0.0643,22.5588);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#01003B").s().p("AE9CMIgDgBQAMgMANgIIAKgEIgUAPIgGAHIgHAHQAAAAABgBQAAgBAAAAQAAgBAAAAQAAgBAAAAgAlcBvQANAGAYAUIgDABQAAAAAAABQAAAAAAABQAAAAABABQAAABABABIgkgggAC5AXQgCgHADgqQAEg/AWg0IAEAEQgIAPgIAeQgRA5AEA7IgCgBgAjChgQgJgdgJgPIAEgDQAXAzADA/QACAdgDAUQAFg6gQg6g");
	this.shape_34.setTransform(-0.1,-8.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#081858").s().p("ADlCnQAVgbBBhKIAHgIIAHgHIATgPIgKAFQgNAHgMAMQgtgggkgjQgeghgQgOQgEg8ARg5QAIgdAJgQIgEgDQApAYBfCHQBZB8ADATQACAJhVBKIhIBAIg4g/gAljCiIg+g4QgXgWAAgFQAAgRBeh9QBhiAAogfIgEADQAKAQAIAdQAQA5gFA7QADgTgBgfQgDg/gYgzQAUgPAQATQAPAQAGAjQAGAkgHAeQgJAhgWAKQhXBbgpAaQgYgVgNgFIAkAfQAZAZA/BNIg6A+QgYgUgwgugACchjQgIgdAGgiQAGgiAPgRQAQgTAVANQgXA0gEA+QgCArACAHQgVgMgIggg");
	this.shape_35.setTransform(-0.0488,-0.7309);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#18367D").s().p("AEAAiIAEgGQAAgHgCgCQgJgHgNgMIgVgUIgDABQABgBgHgGIARgPIACACQASAVAlApIADADIgUARIgHgJgAkaAZIADgDIA4g+IAEgCIAPAOIgDAFQAAAAgBABQAAAAAAABQgBAAAAAAQAAABAAgBIAAAAIgEAAIgqAmIgDAJQAAADADAEQABACgFADQgEADABABg");
	this.shape_36.setTransform(0.05,19.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FED0CC").s().p("AjiAjQgUgKgKgRQgCgDAAgDIACgIIArgoIADABIAAAAIALADIAOAFIANAGQANAFAAAIQAAAEgDACQACgCAFAJQAFAJgFAOQgGAVgMAGQgGACgIAAQgPAAgYgMgACrAsQgMgGgHgVQgFgNAHgJIAHgGQgIgKATgJQAVgKASgEIADAAIAWAUQANANAIAGQACACAAAGIgEAHQgPASgQAIQgXAKgQAAQgIAAgGgCg");
	this.shape_37.setTransform(0.1042,21.8473);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#01003B").s().p("AE9CLIgCgBQAMgMANgGIALgGIgUAQQgFADgKAKQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAgAleBwQANAFAYAUIgCABQAAAAAAAAQAAAAAAABQAAAAAAABQAAABABABIgkgegAC6gbQADg9AXg0IAFADQgKARgIAcQgRA5AFA5QgEgUADgdgAjEhfQgHgcgKgQIAEgDQAYAzADA9QABAegDATQAFg5gRg5g");
	this.shape_38.setTransform(-0.05,-8.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#081858").s().p("ADjCkQAkgqA2g4QAJgKAFgDIAUgQIgLAGQgNAGgMAMQgwgkgighQgegfgQgPQgFg6ARg5QAJgcAJgRQApAeBcB+QBbB+ABASQABALhXBGIhKA8QgmgqgRgVgAlhCkIhAg3QgXgUgBgGQgBgRBfh+QBiiBAogeIgEADQAKAQAIAcQARA5gGA6QAEgTgCgfQgDg9gYgzQAUgPARATQAPAQAGAjQAGAjgIAdQgIAhgXAKQhSBWguAfQgYgUgNgFIAjAeQAdAbBABHIg5A/QgZgUgygqgACchiQgHgdAGgiQAFghAPgRQARgSAUAMQgWA0gEA9QgCAeADAUQgWgLgJghg");
	this.shape_39.setTransform(-0.051,-1.0186);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#18367D").s().p("AD8AjIADgHQACgHgDgCQgIgGgNgNIgVgUIgDABIgFgHIAQgPIADADQARAVAlApIACADIgTARIgIgJgAkXAaIADgDQAmgpASgWQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABABIAQAPIgDADQAAABgBABQAAAAAAABQgBAAAAAAQAAABgBAAIgDgBIgqAnIgCAJIACAGIABAAQABACgEADQgFADAAABIgUgQgADRgTIAAAAg");
	this.shape_40.setTransform(0.05,18.8389);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FED0CC").s().p("AjdAjQgWgMgJgOIAAgBIgCgGIACgIIAqgoIADABIALADIAPAFIANAGQAMAFAAAHQABAEgDADQACgCAEAJQAFAIgEAOQgHAVgLAGQgGADgIAAQgPAAgXgMgACoArQgMgGgHgUQgEgOAGgIIAHgGQgCgDAAgDQABgHAMgGQAUgKAUgEIADAAIAVAUQANANAIAGQACACgBAHIgDAGQgPASgRAHQgXALgPAAQgIAAgGgDg");
	this.shape_41.setTransform(0.0893,21.2639);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#01003B").s().p("AE+CKIgDgBQAWgTAPgEIgSAOIgCABIgLAKIgEAEQABgBAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAgAlfBwQANAEAYATIgCABQgBABAAAAQAAAAAAABQABAAAAABQAAABABABIgkgdgAC5gcQAEg8AXgzIAEADQgJAQgIAcQgRA4AEA4QgDgTACgdgAjEhfQgIgcgJgQIAEgDQAYAzADA9QABAegDASQAFg5gRg4g");
	this.shape_42.setTransform(-0.025,-8.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#081858").s().p("ADgChQAdgfBBg/IADgDIAMgLIABgBIATgNQgPAEgWATQgxgmgiggQgegfgQgPQgFg5ARg5QAJgcAJgQIgEgDQApAaBhCFQBeB+gBASQAAAMhZBDIhNA6QglgqgRgWgAlgCkQhZhEgCgLQgCgRBhh+QBdh7AqghQAKAQAIAcQARA4gGA5QhSBVgvAgQgYgTgOgFIAkAdQAbAYBFBHQgSAWglApQgagSg0gpgACchhQgHgdAGgiQAFghAQgRQAQgSAVANQgXA0gEA8QgCAeADATQgWgLgJgggAi2hqQgDg8gYgzQAUgPARATQAPAQAGAiQAGAigIAdQgIAhgXAKQAEgTgCgeg");
	this.shape_43.setTransform(-0.0519,-1.2186);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#18367D").s().p("AD5AiIADgGIAAgEIAAgCIgBgDQgIgHgNgMIgVgUIgDAAIgFgHIAQgNIAEABQAQAWAlApIADAEIgVAPIgHgJgAkUAaIAEgEQAkgoASgWIACgCIARAOIgCAEQgBAAAAABQgBABAAAAQAAABAAAAQgBAAAAAAIgDgBIgqAnIgCAJIADAGIAAABQABACgEADQgFADABABIgVgQgADOgUIAAAAIAAAAg");
	this.shape_44.setTransform(0.05,18.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FED0CC").s().p("AClAsQgMgGgHgVQgEgOAGgIIAIgGQgKgKAUgJQAUgJATgEIAEAAIAUAUQANANAIAGIACAEIAAABIAAAEIgEAGQgPAQgRAIQgXALgPAAQgIAAgFgCgAjZAiQgXgNgIgMIAAAAIgDgGIACgIIApgoIAEABIAKACQAHACAVAJQANAFAAAIQAAADgDADQADgCAEAJQAFAIgEAOQgHAVgMAGQgFACgHAAQgPAAgXgMg");
	this.shape_45.setTransform(0.1,20.7917);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#01003B").s().p("AE/CKIgDgBQAOgMANgGIAKgEIgQALIgEACIgIAHIgEAEIgDADQAAgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAgAlgBwQAOAEAXATIgCABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAABIgkgcgAC5gcQAEg7AXg0IAFADQgKARgIAbQgSA4AFA3QgDgSACgdgAjEheQgJgcgJgQIAEgDQAYAzADA8QACAdgDASQAFg4gRg3g");
	this.shape_46.setTransform(0,-8.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#081858").s().p("ADdCfIBhhbIAEgEIADgDIAIgHIAEgDIAQgLIgKAFQgNAGgOAMQgrgigoglIgvguQgEg4ARg4QAJgcAJgQIgEgDQApAaBiCFQBfB/gCARQAAANhcBAIhOA4QglgqgRgWgAlfCkQhbhCgCgLQgCgRBhh+QBdh8AqggQAKAQAIAcQASA3gGA5QhPBRgzAkQgYgTgOgEIAlAcQAYAVBKBHQgSAWglApgACchhQgIgcAGgiQAGghAPgQQARgSAVANQgYAzgEA8QgCAdADATQgWgKgIghgAi2hpQgEg7gYgzQAUgPARATQAPAQAGAhQAHAigIAdQgIAhgXAKQADgTgBgeg");
	this.shape_47.setTransform(-0.002,-1.4186);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#18367D").s().p("AD2AiIAEgGQABgIgCgCQgJgGgMgMIgOgOIgDgDIgEgDIgCAAQAAAAgGgGIARgPIADADIA1A+IADAEIgWAPIgHgJgAkRAbIADgEIA2g/IACgCIARAOQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAABQgBABAAAAQgBABAAAAQAAABAAAAQgBAAAAAAIgEgBIgpAoIgBAIIADAGIAAAAQABADgFACQgEAEABABg");
	this.shape_48.setTransform(0.05,18.075);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FED0CC").s().p("ACiArQgLgGgHgUQgEgOAGgIIAHgGQgCgDAAgDQABgHAMgGQASgJAWgEIADAAIADACIAEAEIANAOQANANAIAGQACACgBAHIgDAGQgNAPgTAJQgXALgPAAQgIAAgGgDgAjWAiQgZgOgHgLIAAAAIgDgGIABgHIAqgpIADABIALADIAcAKQANAFAAAHQAAAEgDADQACgCAFAJQAFAIgEAOQgHAVgLAFQgFADgIAAQgPAAgWgMg");
	this.shape_49.setTransform(0.1143,20.3945);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#01003B").s().p("AE/CJIgDgBQAPgLANgGIAKgFIgSANIgCABIgLAJIgFAEQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAgAlhBwQANAFAZASIgDABQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAABIgkgcgAC5gcQADg7AYgzIAEADQgJAQgJAcQgRA3AFA3QgDgTACgcgAjEhdQgJgcgJgQIAEgDQAYAzADA7QACAdgDASQAFg3gRg3g");
	this.shape_50.setTransform(0.025,-8.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#081858").s().p("ADbCdIBjhZIAFgEIALgJIACgBIASgNIgKAEQgNAGgPAMQgvgmgkghIgvguQgFg3ARg4QAJgbAJgRIgEgDQAqAbBiCEQBgB/gCASQgCANhcA+IhQA2Ig1hAgAlfClQhcg/gCgMQgEgRBiiAQBfh8AqggQAJAQAJAcQARA3gFA4QhPBPg0AmQgZgSgNgEIAkAbQAgAbBFA/Ig2BAQgWgOg7gpgACbhgQgHgdAGghQAGghAPgQQARgSAUANQgYA0gDA6QgCAeADASQgWgKgJgggAi3hoQgDg6gYg0QAUgOARASQAPAQAGAiQAGAhgHAdQgJAggWAKQADgSgCgeg");
	this.shape_51.setTransform(0.021,-1.5812);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#18367D").s().p("AD0AiIAEgGQABgIgDgCQgHgGgNgMIgUgUIgDAAIgGgHIASgNIACACQARAWAkApIACADIgVAPgAkPAbIADgEIA1g/QAAAAABgBQAAgBAAAAQABAAAAAAQAAAAAAAAIARAOQAAAAAAAAQgBAAAAABQAAAAAAABQgBABAAAAQAAABgBABQAAAAAAABQgBAAAAABQAAAAAAAAIgEgBIgpAnIgBAJQAAACADAEQABACgEADQgFADAAACgADLgUIAAAAIAAAAg");
	this.shape_52.setTransform(0.05,17.8214);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FED0CC").s().p("AChArQgMgFgGgVQgFgOAGgIIAHgGQgCgDAAgDQABgHAMgGQATgJAVgEIADAAIAUAUQANAOAIAGQACACgBAGIgDAHQgOAOgTAJQgWALgPAAQgHAAgGgDgAjUAiQgagOgGgKQgDgEAAgCIABgIIAqgpIADABIALADQAJACATAIQAMAFABAHQAAAEgDACIAHAHQAFAJgEANQgHAVgLAGQgFACgHAAQgPAAgXgLg");
	this.shape_53.setTransform(0.1031,20.0945);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#01003B").s().p("AE/CJIgCgCQAXgRAPgEIgNAJIgIAFIgLAJIgFAEQABgBAAgBQAAAAAAgBQABAAAAgBQgBAAAAAAgAlJCBIgBAAIgCgCIgBgBIgVgOQAOAEAZASIgDABQAAAAAAABQAAAAAAABQAAAAAAABQABABAAABIgMgLgAC5gcQADg7AZgzIAEADQgKAQgIAcQgSA2AFA3QgDgSACgcgAjEhdQgJgcgKgQIAEgDQAZAzADA7QACAdgDARQAFg2gRg3g");
	this.shape_54.setTransform(0.025,-8.95);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#081858").s().p("ADaCcIBkhYIAFgEIALgJIAIgFIANgJQgPAEgXASQgqgggqgnIgvguQgFg3ASg3QAIgcAKgQIgEgDQApAbBjCEQBhCAgDARQgDAOhdA8IhRA1QgjgqgRgWgAleClQhdg+gDgMQgDgRBiiAQBjiCApgdIgEADQAKAQAJAcQARA3gFA3QADgSgCgdQgDg7gZgzQAUgOARASQAQAQAGAhQAGAigHAcQgJAggWAKQhMBNg3AoQgZgSgOgEIAVAPIABABIACABIABABIAMAKQAcAWBKBBIg1BAIhSg1gACbhgQgHgdAGghQAGggAPgQQASgSAUANQgZA0gDA6QgCAdADASQgWgKgJggg");
	this.shape_55.setTransform(0.0251,-1.6812);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#18367D").s().p("ADyAiIAEgHQABgHgCgCQgIgGgMgNIgVgUIgDAAIgFgGIASgOQAAAAAAAAQAAAAABABQAAAAAAABQABAAAAABIA1A/IACADIgVAPIgIgJgAkOAbIADgEQAjgpARgWQABAAAAgBQABgBAAAAQAAAAAAAAQABAAAAAAIARANIgCAEQAAABgBABQAAAAAAABQgBAAAAAAQAAAAAAAAIgEgBIgoAoIgCAJIADAGQABACgEADQgFADABACgADJgVIAAAAIAAAAg");
	this.shape_56.setTransform(0.05,17.6214);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FED0CC").s().p("ACfArQgLgGgGgUQgEgOAGgIIAGgGQgCgDAAgEQABgHAMgFQARgIAXgFIADAAIAUAUQANAOAIAGQACACgBAGIgEAHQgLAMgVALQgXALgPAAQgHAAgGgDgAjSAhQgbgOgFgJIgDgGIABgIIApgpIADABIALADQAKACATAIQAMAFAAAHQAAAEgCACIAGAHQAFAIgEAOQgGAVgLAFQgGADgHAAQgPAAgWgMg");
	this.shape_57.setTransform(0.0781,19.8306);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#01003B").s().p("AFACJIgDgBQAYgSAPgEIglAaQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAgAljBxQAOADAZASIgDABQAAAAAAAAQAAABAAAAQAAABABAAQAAABABABIgmgagAC5gdQADg5AZg0IAEADQgKARgJAbQgRA2AFA2QgDgRACgdgAjEhdQgJgcgKgQIAEgCQAZAzADA5QACAdgDASQAFg2gRg3g");
	this.shape_58.setTransform(0.025,-9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#081858").s().p("ADYCbIBnhXIAlgaQgPAEgYARQgrgigpglIgvguQgFg3ARg2QAJgcAKgQIgEgDQApAbBkCEQBhB/gDASQgDAOheA7IhSA0Ig1hAgAleClQhdg8gEgNQgEgRBjiAQBkiCApgdIgEADQAKAQAJAcQARA3gFA3QADgTgCgdQgDg6gZgzQAUgOARASQAQAQAGAhQAGAhgHAdQgIAggXAKQhNBMg3ApQgZgSgOgEIAmAbQA2ArAxArQgRAWgkAqIhTg0gACbhgQgHgcAGghQAGghAQgQQARgRAUANQgZAzgDA6QgCAdADASQgWgKgJggg");
	this.shape_59.setTransform(0.0233,-1.7812);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#18367D").s().p("ADyAhIABgDIABgDIABgEQAAgEgCgBIgDgDIgEgDIgMgNIgVgUIgDABQABgBgGgGIASgNIADACIA0A/IACADIgVAPQgHgHAAgDgAkNAbIADgEQAkgoAQgWIADgDIARANIgCAEQAAABgBABQAAAAAAABQAAAAgBAAQAAAAAAABIgDgBIgpAnIgBAJQAAACADAEQABACgEADQgFADAAACg");
	this.shape_60.setTransform(0.05,17.45);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FED0CC").s().p("ACeArQgLgGgGgVQgEgNAGgIIAGgHQgCgCAAgEQABgHAMgGQAUgIAUgEIADAAIAUAUIANAOIAEADIADADQACABAAADIgBAEIgBADIgCADQgLANgWAKQgWAMgPAAQgHAAgGgDgAjQAhQgcgPgEgIQgDgEAAgCIABgIIAogpIADABIAMADQALACARAHQAMAGAAAHQABADgDADIAGAGQAGAJgEANQgGAVgMAGQgFADgHAAQgPAAgWgMg");
	this.shape_61.setTransform(0.0953,19.6556);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#01003B").s().p("AFACIIgDgBQAZgRAOgEIgMAIIgJAGIgQAMQAAAAABgBQAAgBAAAAQAAgBAAAAQAAgBAAAAgAljBwQAOAEAZASIgDABQAAAAAAAAQAAAAAAABQAAABAAAAQABABABABIgmgbgAC5gdQADg5AZg0IADADQgJARgJAbQgRA3AFA1QgDgRACgdgAjFhdQgIgbgKgQIAEgDQAZAzADA5QACAdgEASQAGg2gSg3g");
	this.shape_62.setTransform(0.05,-9.025);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#081858").s().p("ADXCaIBohVIAQgNIAJgFIAMgIQgOADgZASQgvglglgjIgvgtQgFg3ARg3QAJgbAJgQIgDgDQApAbBjCEQBjCAgEARQgDAPhfA5IhSAzIg1hAgAleCmQheg8gDgNQgEgRBjiAQBkiDApgcIgEADQAKAQAIAcQASA2gGA3QAEgSgCgdQgDg6gZgzQAUgOARASQAQAQAFAhQAHAhgHAcQgJAggXAKQhKBLg5AqQgZgRgOgEIAmAaIBnBWQgQAWgkAqQgcgQg4gjgACbhfQgIgdAHghQAGggAQgQQAQgSAVAOQgZAzgDA6QgCAcADATQgXgLgIgfg");
	this.shape_63.setTransform(0.05,-1.8562);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#18367D").s().p("ADxAiIADgHQABgHgCgCQgHgGgNgNIgVgUIgCAAIgFgGIARgNIADACQARAWAjApIACADIgVAPIgHgJgAkMAbIADgDQAkgqAQgVQAAgBABgBQAAAAAAgBQABAAAAAAQAAAAABAAIARAOIgCADQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAIgDAAIgpAnIgBAJQAAACADAEIABAAQABACgFADQgEADABACgADIgVIgBAAIABAAg");
	this.shape_64.setTransform(0.05,17.3464);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FED0CC").s().p("ACeArQgLgGgHgVQgEgNAGgIIAHgHQgDgCABgEQAAgHAMgFQATgJAVgEIADAAIAUAUQANAOAIAGQACACgBAGIgEAHQgKALgXALQgWALgPAAQgHAAgFgCgAjPAhQgbgOgGgJIAAAAQgDgEAAgCIABgIIApgoIADAAIALADQANACAQAHQAMAGAAAHQAAAEgCACIAGAHQAFAIgEAOQgGAVgLAFQgFADgHAAQgOAAgXgMg");
	this.shape_65.setTransform(0.0917,19.5306);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#01003B").s().p("AFBCIIgEgBQAagRAOgEIgVAOIgRAMQABgBAAAAQAAgBABgBQAAAAAAAAQAAgBAAAAgAlGCEIgIgGIAAAAIgWgOQAOAEAaARIgDABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAABABIgIgGgAC5gdQADg5AZg0IAEADQgKARgJAbQgRA2AFA2QgDgSACgcgAjFhdQgIgbgKgQIAEgDQAZAzADA5QACAdgEARQAGg1gSg3g");
	this.shape_66.setTransform(0.05,-9.025);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#081858").s().p("ADXCZIBohUIARgMIAUgOQgOAEgZARQgrgigpgmIgvgtQgGg3ASg2QAJgbAKgRIgEgDQApAcBkCDQBjCBgFARQgEAOheA5IhUAyQgjgqgQgWgAldCmQhfg7gEgNQgEgSBjiAQBkiCAqgcIgEADQAKAQAIAbQASA3gGA2QAEgSgCgdQgEg5gYgzQAUgOARASQAPAPAHAhQAGAhgIAcQgIAggXAKQhKBLg6AqQgZgRgOgEIAVAOIABAAIAIAGIAIAGIBpBVQgRAWgjAqIhUgygACbhfQgIgdAHggQAGghAPgQQASgRAUANQgZA0gEA5QgBAcADATQgXgLgIgfg");
	this.shape_67.setTransform(0.052,-1.9312);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#18367D").s().p("ADwAiIADgHQACgHgDgCIAAAAIgBgBIgBgBIgKgJIgIgHIAAgBIgVgUIgDAAQABAAgFgGIASgNQAAgBAAABQAAAAABAAQAAAAAAABQABAAAAABIA0A/IACAEIgWAOIgGgJgAkLAbIADgDQAjgqAQgWIADgCIASANIgDAEQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAAAIgDgBIgpAoIgBAJIADAGQACACgFADQgEADABACg");
	this.shape_68.setTransform(0.05,17.2458);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FED0CC").s().p("ACcArQgLgGgGgVQgEgNAGgIIAGgHQgCgCAAgEQABgHAMgFQAPgIAZgFIADAAIAUAUIAAABIAIAIIAKAJIABABIABABIAAAAQADACgCAGIgDAHQgKALgXALQgWAMgPAAQgHAAgGgDgAjOAhQgcgPgFgIIgDgGIABgIIAogpIADABIAMADQAMACAQAHQAMAFAAAIQABADgDADIAGAGQAGAJgEANQgHAVgKAGQgFADgHAAQgPAAgWgMg");
	this.shape_69.setTransform(0.1031,19.4056);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#01003B").s().p("AFACIIgCgBQAYgSAPgDQgUAMgSAOQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBgBAAgAlkBwQAOAEAZARIgCABQAAAAgBABQAAAAABAAQAAABAAABQABAAAAABIgmgagAC4gdQAEg5AZgzIAEADQgKAQgJAbQgSA2AGA2QgDgSABgcgAjFhcQgIgcgKgQIAEgDQAYAzAEA5QACAdgEARQAGg1gSg2g");
	this.shape_70.setTransform(0.075,-9.05);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#081858").s().p("ADWCZIBphUQASgPAUgLQgPADgYASQgygogjggIgvguQgGg2ASg2QAJgbAKgRIgEgDQApAcBkCDQBjCBgEARQgEAOhfA5IhVAyIgzhAgAldClQhfg6gEgNQgEgSBjiAQBkiDAqgbIgEADQAKAQAIAbQASA2gGA3QAEgTgCgcQgEg5gYgzQAUgOARASQAPAPAHAhQAGAhgIAcQgIAggXAKQhKBKg6ArQgZgRgOgEIAmAaIBpBUQgQAWgjAqQgVgLhAgngACbhgQgIgcAHghQAGggAPgQQASgRAUANQgZA0gEA5QgBAcADASQgXgKgIggg");
	this.shape_71.setTransform(0.075,-1.944);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#18367D").s().p("ADvAiIADgGQACgIgCgCIgEgDIgEgDIgNgMIgUgVIgDABQABgBgFgGIARgNIADACQARAWAiApIADAEIgWAOQgGgHgBgCgAkLAcIAEgEIAzg/QAAgBABgBQAAAAAAgBQABAAAAAAQAAAAABAAIARAOIgDADQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgDAAIgoAnIgBAJQAAACADAEQABACgFADQgDADAAACg");
	this.shape_72.setTransform(0.05,17.1464);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FED0CC").s().p("ACcArQgLgGgGgVQgEgNAGgIIAHgHQgDgCABgEQAAgHAMgFQARgIAXgEIADgBIAUAVIANANIAEADIADADQADACgCAHIgDAGQgKALgXALQgWALgPAAQgHAAgGgCgAjNAhQgcgPgFgIQgDgEAAgCIABgIIAogoIADAAIALADQANACAQAHQAMAGAAAHQAAADgCADIAGAGQAFAJgEANQgGAVgLAGQgFACgHAAQgOAAgWgLg");
	this.shape_73.setTransform(0.0969,19.3417);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#01003B").s().p("AFBCIIgDgBQAZgSAOgDIgUANIgBAAIgMAJIgFAEQABgBAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAgAlPB+IgEgDIgRgLQAOADAZASIgDABQAAAAAAAAQAAABAAAAQABABAAAAQAAABABABIgRgMgAC5gdQADg6AZgyIAEADQgKAQgJAbQgRA2AFA2QgDgSACgcgAjFhcQgIgcgKgQIAEgDQAZAzADA5QACAcgEASQAGg1gSg2g");
	this.shape_74.setTransform(0.05,-9.05);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#081858").s().p("ADWCYIBphTIAFgEIAMgIIABgBIAUgNQgOAEgZARQgpghgsgnIgvgtQgFg3ARg2QAJgbAKgQIgEgDQApAbBkCEQBkCAgFARQgEAPhfA4IhVAxQgigqgRgWgAldClQhgg5gDgOQgFgRBkiAQBliDApgcIgEADQAKARAIAbQASA2gGA2QAEgSgCgdQgDg5gZgzQAUgNARARQAPAQAHAgQAGAhgHAcQgJAggXAKQhHBIg9AtQgZgRgOgEIARALIAEADIARAMIBqBUIgzBAQgagOg8gkgACbhfQgIgcAHghQAGghAQgPQARgSAUAOQgZAzgDA5QgCAcADATQgXgLgIgfg");
	this.shape_75.setTransform(0.05,-1.994);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#18367D").s().p("ADvAhIADgGQACgHgDgCQgIgGgMgNIgUgUIgDAAQABAAgGgGIARgNQABAAAAAAQAAAAABAAQAAAAABABQAAAAABABIAzA/IADAEIgWAOIgHgKgAkLAbIAEgDQAigqARgWIADgCIASANQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAABQAAAAgBABQAAABAAAAQgBAAAAABQAAAAgBAAIgCgBIgpAoIgBAJIAEAFQABACgFADQgEAEABABg");
	this.shape_76.setTransform(0.05,17.125);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FED0CC").s().p("ACcArQgLgGgHgVQgEgNAGgIIAHgHQgCgCAAgEQAAgHAMgFQARgIAXgEIADgBIAUAVQAMAOAIAGQADABgCAHIgDAGQgKALgXALQgWALgOAAQgIAAgFgCgAjNAhQgcgPgFgIIgDgGIAAgIIApgoIADAAIALADQAOACAPAHQAMAGAAAHQAAADgCADIAGAGQAFAJgEANQgGAVgLAGQgFACgGAAQgPAAgWgLg");
	this.shape_77.setTransform(0.1031,19.2917);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#01003B").s().p("AFBCIIgDgBQAZgSAOgDIgVANIgQANQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAgAlPB+IgVgOQAOADAZASIgDABQAAAAAAAAQAAABAAAAQABABAAAAQAAABABABIgRgMgAC5gdQADg6AZgyIAEADQgKAQgJAbQgRA2AFA1QgDgRACgcgAjFhcQgIgcgKgQIAEgDQAZAzADA5QACAcgEASQAGg1gSg2g");
	this.shape_78.setTransform(0.05,-9.05);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#081858").s().p("ADVCYIBqhTIARgMIAVgOQgOAEgZARQgygogjggIgvguQgGg2ASg2QAJgbAKgQIgEgDQApAcBkCCQBkCBgFARQgEAPhgA4IhUAxIg0hAgAldClQhfg5gEgOQgFgRBkiAQBkiDAqgcIgEADQAKARAIAbQASA2gGA2QAEgSgCgdQgEg5gYgzQAUgNARARQAPAQAHAgQAGAhgIAcQgIAggXAKQhGBGg+AvQgZgRgOgEIAVAOIARAMIBqBTQgRAWgjArIhVgygACbhgQgIgcAHggQAGghAQgPQARgSAUAOQgZAzgEA5QgBAcADASQgXgKgIggg");
	this.shape_79.setTransform(0.0522,-1.994);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#18367D").s().p("ADvAhIADgGQACgHgDgCQgIgGgMgNIgUgUIgDAAIgFgGIARgNIAEACIAzA/IADAEIgWAOIgHgKgAkLAbIAEgDQAigqARgWQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAIASANQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAABQAAAAgBABQAAABAAAAQgBABAAAAQAAAAgBAAIgCgBIgpAoIgBAJIAEAGQABACgFADQgEADABACgADGgVIAAAAg");
	this.shape_80.setTransform(0.05,17.0958);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FED0CC").s().p("ACcArQgLgGgHgVQgEgNAGgIIAHgHQgCgCAAgEQAAgHAMgFQARgIAXgEIADgBIAUAVQAMAOAIAGQADACgCAGIgDAGQgKALgXALQgWALgOAAQgIAAgFgCgAjNAhQgcgPgFgIIgDgGIAAgHIApgpIADABIALACQAOACAPAHQAMAGAAAHQAAADgCADIAGAGQAFAJgEANQgGAVgLAGQgFACgGAAQgPAAgWgLg");
	this.shape_81.setTransform(0.1031,19.2417);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#01003B").s().p("AFBCIIgDgBQAZgRAOgEQgTAMgSAOQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAgAlMCAIgDgCIgVgOQAOAEAZARIgDABQAAAAAAAAQAAABAAAAQABABAAAAQAAABABABgAC5gdQADg5AZgzIAEADQgKAQgJAbQgRA2AFA1QgDgRACgcgAjFhcQgIgbgKgRIAEgDQAZAzADA5QACAdgEARQAGg1gSg2g");
	this.shape_82.setTransform(0.05,-9.075);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#081858").s().p("ADVCYIBqhTQASgOAUgLQgOADgZARQgtgkgogkIgvgtQgGg2ASg2QAJgbAKgRIgEgDQApAcBkCDQBkCAgFASQgEAPhgA4IhUAwIg0hAgAldCmQhfg5gEgOQgFgSBkiAQBkiDAqgbIgEADQAKAQAIAbQASA2gGA2QAEgSgCgcQgEg5gYgzQAUgOARASQAPAPAHAhQAGAggIAcQgIAggXAKQhGBGg+AvQgZgRgOgDIAVANIADACIAOAKIBqBTQgRAWgjArIhVgxgACbhfQgIgcAHghQAGggAQgQQARgRAUANQgZAzgEA5QgBAdADASQgXgLgIgfg");
	this.shape_83.setTransform(0.0522,-2.019);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#18367D").s().p("ADuAiIAEgHQABgHgCgCQgIgGgMgNQgOgPgHgFIgCAAIgGgGIASgNIAEACQAQAWAiApIADAEIgWAOIgHgJgAkKAcIADgEIAzg/QABgBAAgBQABAAAAgBQAAAAAAAAQABAAAAAAIASANIgDAEQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAAAIgDgBIgpAoIgBAJIAEAGQABACgFADQgEADABACIgWgOgADGgVIgBAAg");
	this.shape_84.setTransform(0.05,17.0464);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FED0CC").s().p("ACcArQgLgGgHgVQgEgNAGgIIAHgHQgCgCAAgEQAAgHAMgFQAUgJAUgDIADgBQAHAGANAPQANAOAHAGQADACgCAGIgDAGQgKALgXALQgWALgPAAQgHAAgFgCgAjMAhQgdgPgEgIIgEgGIABgHIAogpIAEABIALACQAMACARAHQAMAGAAAHQAAADgCADIAGAGQAFAJgEANQgGAVgLAGQgFACgHAAQgOAAgWgLg");
	this.shape_85.setTransform(0.0781,19.1917);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#01003B").s().p("AFBCIIgDgBQAZgRAOgEQgUALgSAPQABgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAgAlICDIgHgFIgVgOQAOAEAZARIgDABQAAAAAAAAQAAABAAAAQAAABABAAQAAABABABgAC4gdQAEg5AZgzIAEADQgKAQgJAbQgSA2AGA1QgDgRABgcgAjFhcQgIgbgKgRIAEgDQAYAzAEA5QACAdgEARQAGg1gSg2g");
	this.shape_86.setTransform(0.075,-9.075);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#081858").s().p("ADVCYIBqhTQASgOAUgLQgOADgZARQgtgkgogkIgvgtQgGg2ASg2QAJgbAKgRIgEgDQApAcBkCDQBkCAgFASQgEAPhgA3IhVAxQgjgrgQgVgAlcCmQhgg5gEgOQgFgSBkiAQBkiDAqgbIgEADQAKAQAIAbQASA2gGA2QAEgSgCgcQgEg5gYgzQAUgOARASQAPAPAHAhQAGAggIAcQgIAggXAKQhHBGg9AvQgZgRgOgDIAVANIAHAFIAKAHIBqBTIgzBBIhVgxgACbhfQgIgcAHghQAGggAQgQQARgRAUANQgZAzgEA5QgBAdADASQgXgLgIgfg");
	this.shape_87.setTransform(0.075,-2.044);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-23.8,90,65.1);


(lib.PuppetShape_6copy3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FED0CC").s().p("AlKApQgNgIABgSIAAgTIgBgBIACgKIAFgLIAZgMQAOgIAOgMQAAABAAAAQABAAAAAAQAAABABAAQAAAAAAAAIAEADIAEADQAEACAGAIQAFAHAHACQASAEgBAJQAAAEgEAEQADgCAEAKQAFAMgGAOQgKAXgTAIQgJAEgKAAQgWAAgcgSgAD4AtQgTgHgJgVQgFgNAJgJQAIgIACAAQgCgCABgEQACgGANgJIASgLQAKgGALgDIADAAIAZAQQAOAJAJAEQADABACAKIAAAIQgCABgBATQgBARgPAGQgfAMgXAAQgMAAgKgEg");
	this.shape.setTransform(0.1033,35.4287);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18367D").s().p("AllAOIAEgDIAkgWQAVgOAQgOIADgEIAGAYQgBAAgDAFIgEAEQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQgNAMgPAHIgYAMIgGALIgBAKIAAABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBABQgFAAAAABgAFYAnIABgIQgCgKgDgBQgJgEgOgJIgZgPIgEAAQABAAgKgIQAIgKgBgQQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIADACQAnAgAbATIACACIgIAeIgGgEgAEggIIAAAAg");
	this.shape_1.setTransform(-0.025,30.8375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01003B").s().p("AEwCcIgCAAQABgTALgMIAIgJQgNATgBAEQgCAGgBARQAAgGgBAAgAlBBvQAKAMAQAiQgDgCABAHIgYgzgAjIicIADgEQATAzgBBUQAAAogEAZQALh+gchGgADVibIADADQgEAPgGAkQgJA2gBA6QgBhdAShJg");
	this.shape_2.setTransform(-0.75,-6.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#081858").s().p("AEnDjQAAg1AIh4QABgQACgGQACgEAMgTIgIAJQgLAMgBATIgigTQgOgKgQgWIgSgbQgNgRgKgKQgqgjAGhfQADgoANgVQAOgYAWAJQgSBJABBeQABg7AJg2QAGgkAFgPIgEgDQAtAVBHCNIAuBdQAWAnAJAAQAGAAgLAjQgQA1gEAlIgSB6QgbgUgngggAlxCYQgJgygRgtQgMggACgCIBYh9QBRh1AigsQAdBGgMB/QAEgZABgpQAAhUgTg0QATgVAPAXQANAUAEAtQAEAsgJAmQgKAqgWALIhDBTQgeAjgPgDQgQghgJgNIAYAzQAGAPAIBAIAJBeQgQAOgVAOIgjAYIgWh/g");
	this.shape_3.setTransform(-0.5584,4.0556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-23.8,90,65.1);


(lib.PuppetShape_5copy2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FED0CC").s().p("ACcArQgLgGgHgVQgEgNAGgIIAHgHQgCgCAAgEQAAgHAMgFQAUgJAUgDIADgBIAUAVQANANAIAHQACACgCAGIgDAGQgKALgXALQgWALgPAAQgHAAgFgCgAjMAhQgegQgDgHIgEgFIABgIIAogpIAEABIALACQAMACARAHQAMAGAAAHQAAADgCADIAGAGQAFAJgEANQgGAVgLAGQgFACgHAAQgOAAgWgLg");
	this.shape.setTransform(0.0821,19.1917);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18367D").s().p("ADuAiIAEgHQABgHgCgCQgIgGgMgNIgVgUIgCAAIgGgGIASgNIAEACQAQAWAiApIADAEIgWAOIgHgJgAkKAcIADgEIAzg/IADgDIASANIgDAEQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAAAIgDgBIgpAoIgBAJIAEAGQABACgFADQgEADABACIgWgOgADGgVIgBAAg");
	this.shape_1.setTransform(0.05,17.0464);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01003B").s().p("AFBCIIgDgBQAZgRAOgEQgTALgTAPQABgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAgAlkBwQAOAEAZARIgDABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQgIgHgdgTgAC4gdQAEg5AZgzIAEADQgKAQgJAbQgSA2AGA1QgDgRABgcgAjFhcQgJgbgKgRIAEgDQAZAzAEA5QACAdgEARQAGg1gSg2g");
	this.shape_2.setTransform(0.075,-9.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#081858").s().p("ADVCYIBqhTQATgOATgLQgOADgZARQgsgjgpglIgvgtQgGg2ASg2QAJgbAKgRIgEgDQApAcBlCDQBjCAgFASQgEAPhgA3IhVAxQgjgrgQgVgAldCmQhfg4gEgPQgFgRBjiBQBliDApgbIgEADQAKAQAJAbQASA2gGA2QAEgSgCgcQgEg5gZgzQAUgOASASQAPAPAHAhQAGAggIAcQgIAggXAKQhGBGg+AvQgZgQgOgEQAdATAIAHIBrBSIgzBBQgmgVgwgcgACbhfQgIgcAHghQAGggAQgQQARgRAUANQgZAzgEA5QgBAdADASQgXgLgIgfg");
	this.shape_3.setTransform(0.075,-2.044);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-23.7,90,47.5);


(lib.PuppetShape_4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_3("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DE4A07","#030D74"],[0,1],106.5,6.8,-108.5,6.8).s().p("AB2JHQgQgUg0gYQg/gehegXQgtgKg6AFIhkAQQh9AUhMgsQgugageguQgSgcgYg9QgZg+gRgbQgegvgsgbQiGhRizCbIgBAAIgDAAIAAAAIAEgNIAFgIIAFgHIACgCQAdgjAtgeQCHhYCIBCQBSAoCKAPQCOAPCXgRQFvgqCxi6QCMiVBaiRQAzhUAuhsQBVAJBXgKQA4gGCYgWQguK1g1DYQgWBbgfArQgNATgwAoQgeAZgggEQgXgCgpgXQg1gdgYgJQgzgUg1ABQhdACiuBHIhrArQgfAMgNAAQgFAAgCgCgAJqosIAjAAIgyA3QALghAEgWg");
	this.shape.setTransform(1.025,-5.4625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DE4A07","#7B2617"],[0,1],86.8,7.5,-90.8,7.5).s().p("AtsGVQAvh/BihBQBvhJCCApQAkALA0AGQBIAJAcAEQBIAOBGAVQA2AQAEAAQDyggCBgvQCFgwBLhYQA/hHDwkRIAyg3IAvg0QgJAjgIASQgvBsgzBTQhZCSiMCUQixC7lvApQiYARiNgPQiLgPhSgoQiIhCiHBZQgsAdgdAkIgCABIgFAHg");
	this.shape_1.setTransform(-16.65,-25.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DE4A07","#030D74"],[0,1],106.6,6.6,-108.4,6.6).s().p("AB3JIQgSgWgxgYQg+gfhdgXQgsgKg6AGQgMABhXAPQh9AVhMgrQgugZgfguQgSgcgag9Qgag9gRgcQgegugtgbQiGhRizCaIAAAAIgCAAIgBAAQgEgBAGgLIAGgIIAEgFIABgBIACgCIAAgBQAdgkAsgdQCHhXCJBAQBTAnCKAPQCOAOCXgRQFtgrCxi6QCOiWBZiQQA1hWAshqQBUAIBYgJQA4gGCXgWQgpKwg6DhQgYBcghAsQgPAUgwAmQgfAYgggFQgWgDgogYQg0gdgYgKQgygUg1AAQhcABisBJIhpAtQggAMgMAAQgGAAgCgCgAJrotIAjAAIgyA3QALghAEgWg");
	this.shape_2.setTransform(0.9183,-5.3125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#DE4A07","#7B2617"],[0,1],86.9,7.2,-90.8,7.2).s().p("AtsGXQAvh/BjhCQBuhJCCAoQAjALA0AGQBIAIAdAFQBIANBGAVQA3AQADgBQDvgdCEgxQCEgxBMhYIEvlZIAyg3IAvgzQgKAjgHARQgsBqg1BWQhZCQiOCVQixC7ltArQiXARiOgOQiKgPhTgnQiJhAiHBXQgsAdgdAkIgBABIgCACIAAABIgEAFIAAAAg");
	this.shape_3.setTransform(-16.6625,-25.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#DE4A07","#030D74"],[0,1],106.5,6.5,-108.5,6.5).s().p("AB3JJQgWgYgtgYQg+ghhbgWQgtgKg4AGIhjARQh8AXhNgqQgugagfguQgTgcgbg8Qgag9gSgcQgegugtgbQiHhQizCZQgDgCADgEIAFgPIAGgIIABAAQAcgjAtgdQCGhWCKA/QBUAmCJAOQCOANCXgRQFtgsCxi6QCOiWBZiQQA2hYArhoQBUAIBYgKQA4gGCWgVQgkKrg/DqQgZBdgkAuQgRAWgxAjQgfAWgfgGQgWgEgogYQgygegYgKQgygVg0AAQhbAAiqBLIhoAuQgfAMgNAAQgFAAgCgCgAJqouIAjAAQgdAfgVAZQAKgiAFgWg");
	this.shape_4.setTransform(1.0375,-5.1542);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#DE4A07","#7B2617"],[0,1],86.9,7.1,-90.8,7.1).s().p("ArbDaQBuhJCCAmQAjAKA0AGQBHAHAeAGQBIANBHAUQA3AQAEgBQDrgbCGgzQCDgxBNhZQDtkKBDhOQAVgZAdgfIAvgzQgKAjgHARQgrBog2BYQhZCQiOCVQixC7ltAsQiXARiOgNQiJgOhUgmQiKg/iGBWQgtAdgcAjIgBAAIgGAIQAvh9BihBg");
	this.shape_5.setTransform(-16.6875,-25.3625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#DE4A07","#030D74"],[0,1],106.6,6.3,-108.4,6.3).s().p("AB4JKQgZgbgqgXQg8gihagVQgsgLg4AHIhjASQh8AXhMgpQgugZggguQgUgcgbg7Qgbg+gTgbQgfgugtgbQiHhPi0CYQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAABgBIABgDIAFgOIAHgJQAdgjAsgcQCGhWCLA+QBVAlCJANQCPAOCWgSQFrgsCyi7QCOiWBZiQQA3hZAqhnQBUAHBYgJQA4gGCVgVQgfKnhEDyQgbBfgmAuQgTAYgxAhQgfAUgggHQgVgFgngYQgwgfgZgLQgxgVg0AAQhagCinBNIhoAvQgfANgMAAQgGAAgCgCgAJqovIAkAAIgyA4QAKgiAEgWg");
	this.shape_6.setTransform(0.9333,-5.0292);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#DE4A07","#7B2617"],[0,1],86.9,6.8,-90.7,6.8).s().p("ArbDcQBuhJCBAlQAjAKA1AFQBHAHAfAGQBIAMBHAUQA3APAEAAQDngaCIg0QCCgxBQhaQC8jTB0iFIAxg4IAvgzQgJAjgHARQgrBng3BZQhZCQiOCVQixC8lsAsQiWASiOgOQiKgNhUglQiLg+iGBWQgtAcgcAjIgHAJQAwh+BhhAg");
	this.shape_7.setTransform(-16.725,-25.1375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#DE4A07","#030D74"],[0,1],106.8,6.2,-108.2,6.2).s().p("AB6JLQhHhJiPgjQgsgLg3AHIhiATQh8AZhMgpQgvgZgggtQgUgcgcg7Qgdg9gTgbQgfgugtgbQiJhPizCXIgBAAIgBAAIgCAAIgBgBIAFgMIAEgHIADgDIAEgGIABgBQAcgiAtgcQCFhVCNA8QBVAlCJAMQCOANCXgSQFrgtCxi6QCPiXBZiQQA4hbAphlQBSAHBagJQA4gGCTgVQgaKjhJD5QgcBhgoAwQgWAagxAdQggATgegIQgWgFgmgaQhgg/hMgCQhZgCilBOIhmAxQgfANgNAAQgGAAgCgCgAJsowIAkAAIgxA4QAJgiAEgWg");
	this.shape_8.setTransform(0.7,-4.8565);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#DE4A07","#7B2617"],[0,1],87,6.6,-90.6,6.6).s().p("AtsGcQAwh+BihAQBshICCAjQAiAJA1AFQBGAHAhAGQBIAMBIATQA3APAEAAQDlgYCJg1QCBgzBRhaQC1jIB8iQIAxg4IAvg0QgKAkgGARQgpBlg4BbQhZCQiPCWQixC7lrAtQiWASiPgNQiJgMhVglQiMg8iGBVQgsAcgdAiIgBABIgEAGIgDAEg");
	this.shape_9.setTransform(-16.825,-24.8875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#DE4A07","#030D74"],[0,1],106.7,6,-108.3,6).s().p("AB5JMQgighgggUQg6glhXgVQgrgLg4AIQgPAChSARQh7AahNgoQgvgZghgsQgUgcgdg7Qgdg9gTgbQghgugtgaQiJhOi1CVQgCgCADgEIAFgOIAIgJQAcgjAtgbQCFhUCNA7QBWAkCJALQCOAMCWgTQFqgtCxi6QCQiXBYiQQA5hbAohlQBUAHBZgKQA4gGCSgVQgUKhhPEAQgeBjgrAwQgYAcgxAbQgfASgfgKQgUgGgngaQhdhBhMgCQhYgEijBRIhlAyQgeAOgOAAQgGAAgCgDgAJrowIAkgBIgyA4QAKgiAEgVg");
	this.shape_10.setTransform(0.8056,-4.7232);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#DE4A07","#7B2617"],[0,1],87,6.4,-90.6,6.4).s().p("AraDgQBshHCBAhQAiAJA2AFQBGAGAhAGQBIAMBIATQA3AOAEAAQDjgWCLg3QB/gyBThbQCAiLCxjNIAxg4IAvg0QgKAjgHARQgoBlg4BcQhZCPiPCWQiyC7lqAuQiVATiPgMQiJgMhWgkQiNg6iFBTQgsAcgdAiIgIAKQAxh9BihBg");
	this.shape_11.setTransform(-16.825,-24.6875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#DE4A07","#030D74"],[0,1],106.8,5.9,-108.2,5.9).s().p("AB6JNQgogmgagRQg5gmhVgVQgrgLg3AIQgQADhRASQh7AbhNgoQgvgYghgsQgVgcgdg7Qgfg9gTgaQghgugugaQiJhOi2CVQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgDIAFgNIAIgKQAdgiAsgbQCFhTCOA5QBXAjCIALQCPAMCVgTQFqgvCxi6QCQiXBYiPQA6hdAnhkQBTAGBagJQA4gGCRgVQgQKehTEHQggBkgtAyQgaAdgxAZQggAQgfgLQgTgGgmgcQhahBhNgEQhYgEigBSIhkAzQgeAPgNAAQgGAAgDgDgAJsoxIAkgBIgyA4QAKgiAEgVg");
	this.shape_12.setTransform(0.7167,-4.5877);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.1,6.2,-90.6,6.2).s().p("AraDjQBrhHCCAfQAhAIA3AGQBFAGAiAGQBKALBHATQA4AOADAAQDhgVCLg4QB/gzBVhcQB5iDC4jVIAxg4IAug0QgJAkgHARQgnBkg5BdQhZCPiPCWQiyC7lqAvQiVATiOgMQiJgLhWgjQiPg5iFBTQgsAbgdAiIgIAKQAyh9BhhAg");
	this.shape_13.setTransform(-16.9,-24.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#DE4A07","#030D74"],[0,1],106.9,5.7,-108.1,5.7).s().p("AB7JOQgugsgTgNQg5gnhTgVQgrgLg3AIQgQADhPASQh7AdhNgnQgvgYgigsQgVgbgfg7Qgfg9gUgaQgigugtgZQiKhNi2CTQgCgCACgFIAFgMIAJgLQAdghAsgcQCFhRCPA3QBXAiCIALQCPALCUgUQFpgvCyi6QCQiXBZiPQA5hdAnhkQBTAGBagKQA4gFCQgVQgLKchZENQghBlgvAzQgdAfgxAWQgfAPgfgMQgTgHglgcQhYhDhMgEQhYgFieBUIhiA0QgfAPgOAAQgGAAgCgDgAJqojIADgPIAjgBIgxA5QAHgXAEgSg");
	this.shape_14.setTransform(0.6429,-4.415);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.1,5.9,-90.5,5.9).s().p("AraDlQBrhGCBAdQAhAIA3AFQBEAGAkAFQBJAMBIASQA4AOAEgBQDdgSCOg6QB9gzBWhdQB4h+C5jZIAyg5IAug0QgJAkgHARQgmBkg6BdQhYCPiRCWQiyC7loAvQiUAUiPgLQiIgLhYgiQiPg3iFBRQgsAcgdAhIgIALQAzh9BghAg");
	this.shape_15.setTransform(-16.925,-24.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#DE4A07","#030D74"],[0,1],107.1,5.6,-107.8,5.6).s().p("AB+JPQg8g4gFgDQg4gohSgVQgqgKg2AIQgRADhPATQh6AehNgnQgvgXgjgsQgVgbggg7Qggg8gUgaQgigugugZQiKhMi4CRIgBAAQgHgBANgRIAIgJIACgCQAdgiAsgaQCEhRCQA2QBZAiCIAJQCPAKCTgTQFogxCyi6QCRiYBYiOQA6hdAmhkQBTAFBagJQA5gGCPgTQgGKYhfEUQgjBngxAzQgfAhgwAUQggANgegNQgTgHglgeQhVhEhNgFQhWgFicBVIhhA2QgeAOgOAAQgGAAgDgCgAJvozIAkgBIgyA5QALgiADgWg");
	this.shape_16.setTransform(0.3986,-4.2544);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.2,5.7,-90.4,5.7).s().p("ArZDnQBrhGCAAcQAgAHA4AFQBDAGAmAFQBKALBHASQA5AOADgBQDbgRCPg7QB8gzBYheQAyg0BehqQBchoBFhRIAyg5IAug0IgQA1QgmBkg6BdQhYCOiRCXQiyC6loAyQiTATiPgKQiIgJhZgiQiQg2iEBQQgsAbgdAiIgCACIgIAJQAzh9BihAg");
	this.shape_17.setTransform(-17.0125,-23.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#DE4A07","#030D74"],[0,1],107,5.4,-107.9,5.4).s().p("AB9JQQgjgmgegXQg2gphRgVQgqgKg2AJQgRAChNAUQh6AfhNgmQgvgXgkgsQgVgaghg7Qghg8gVgaQgjgtgugZQiKhMi5CQQgBgCACgEIAFgMIAHgJIABAAIABgCQAeghAsgbQCEhQCRA1QBZAhCIAJQCPAJCTgUQFmgxCzi5QCRiYBYiOQA7hfAlhjQBTAFBbgJQA4gGCOgUQgBKXhkEZQg8CqhuAnQgfAMgegOQgSgIglgeQhThFhMgGQhWgHiaBYIhgA3QgeAPgOAAQgGAAgDgDgAJuo0IAkAAIgyA4QALgiADgWg");
	this.shape_18.setTransform(0.4833,-4.1294);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.2,5.5,-90.4,5.5).s().p("ArZDqQBqhFCAAZQAgAHA5AFQBDAFAmAGQBKALBHARIA8ANQDagQCPg8QB7gzBahfQAzg0BehqQBahmBGhTIAyg5IAug0QgJAjgHARQglBkg7BeQhYCOiRCXQizC7lmAxQiTAUiPgKQiIgJhZggQiRg1iEBQQgsAageAhIgBACIgBABIgHAIQA0h7BhhAg");
	this.shape_19.setTransform(-17.025,-23.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#DE4A07","#030D74"],[0,1],107.2,5.2,-107.8,5.2).s().p("AB+JRQgigngdgYQg2grhPgUQgqgLg1AJQgTAEhMAUQh5AghNglQgwgWgjgsQgXgbghg6Qgig8gVgaQgjgtgugZQiLhLi6CPIgCAAIADgKIAEgHIAEgEIAGgIIABAAQAdghAsgaQCEhPCSAzQBaAgCHAIQCPAJCTgUQFlgyCzi6QCSiYBYiOQA7hfAkhjQBTAFBbgJIDGgZQADKVhoEeQhBCwhwAjQgfAKgegOQgSgJgkgfQhQhGhNgHQhVgIiXBaIhfA4QgeAQgOAAQgHAAgDgDgAJwo1IAjgBIgxA5QAKgiAEgWg");
	this.shape_20.setTransform(0.3432,-3.9212);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.3,5.2,-90.3,5.2).s().p("AtuGnQA1h8Bhg/QBqhFB/AYQAgAGA5AEQBDAGAnAFQBJALBJARQA4ANAEgBQDXgOCRg9QB5g0BchfQAxgyBfhsQBYhjBJhXIAyg4IAtg1QgLAqgEALQglBig7BgQhYCNiRCYQizC6lmAyQiSAViPgJQiIgJhZgfQiSg0iFBPQgsAagdAhIAAABIgHAHIgDAFIAAgBg");
	this.shape_21.setTransform(-17.1125,-23.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#DE4A07","#030D74"],[0,1],107.1,5.1,-107.8,5.1).s().p("AB+JRQgjgngcgZQg0gshPgUQgqgKg0AJQgTAEhLAUQh5AhhNgkQgwgXgkgrQgXgbgig5Qgjg8gVgaQgkgtgugZQhZgvh/AxQgsARgkAXQgfAVABAFQgBgCACgFIAEgJIALgNQAdghAsgaQCFhOCSAyQBbAfCHAIQCPAJCSgVQFlgzCyi5QCTiZBXiOQA8hgAkhiQBSAEBbgIIDGgZQAHKThtEkQhEC1hyAfQggAJgdgQQgRgJgkggQhOhHhNgIQhUgIiVBbIhfA6QgdAQgOAAQgHAAgDgEgAJvo2IAjgBIgxA5QAKgiAEgWg");
	this.shape_22.setTransform(0.3545,-3.7962);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.4,5,-90.3,5).s().p("ArXDuQBphFB/AXQAfAFA6AFQBCAEAoAGQBKALBJAQIA8ANQDVgNCRg/QB4gzBehhQAzgzBehqQBahmBHhUIAxg5IAug0QgMAqgEAKQgjBig8BgQhYCOiSCYQizC6lkAzQiTAViPgJQiHgIhagfQiTgyiEBOQgsAageAhIgLAMQA3h7BhhAg");
	this.shape_23.setTransform(-17.1625,-23.2625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#DE4A07","#030D74"],[0,1],107.2,4.9,-107.7,4.9).s().p("AB/JSQgjgogcgZQgyguhOgUQgpgKg0AKQgTADhKAWQh5AihNgkQgwgWglgrQgXgagjg6Qgkg8gVgZQglgtgugYQhZgviAAwQgsARglAXQgfAUABAFQgBgBACgFIAEgKIAMgNQAdggAsgaQCEhNCUAxQBbAeCHAHQCPAICSgVQFjg0Czi5QCTiZBXiNQA9hhAjhiQBSAEBcgJQASgBCygXQALKRhyEpQhIC8hzAbQggAHgdgQQgRgKgjghQhMhIhMgJQhUgJiTBdIhdA6QgdARgPAAQgHAAgDgEgAJwo3IAjgBIgxA5QAKgiAEgWg");
	this.shape_24.setTransform(0.2884,-3.6379);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.4,4.7,-90.2,4.7).s().p("ArXDxQBphFB+AVQAeAFA8AEQBBAFAqAGQBKAKBIAQIA9AMQDTgMCSg/QB2g0BghhQAygyBghsQBVhgBLhaIAxg5IAug0IgPA0QgjBig9BhQhXCNiTCYQizC6lkA0QiRAViPgIQiHgHhbgeQiUgxiEBNQgsAagdAgIgMANQA3h7Bhg/g");
	this.shape_25.setTransform(-17.2125,-23.0375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,4.8,-107.7,4.8).s().p("ACAJTQgkgqgbgZQgxgvhNgTQgpgLgzAKQgTAEhKAWQh4AjhOgjQgvgVgmgrQgXgbgkg5Qglg8gVgaQgmgsgugYQhZguiBAwQgsAQglAXQggAUABAGQAAgDACgEIADgIIANgOQAdggAsgaQCFhNCUAwQBcAdCGAHQCPAHCSgVQFig0Czi6QCTiaBYiMQA8hiAjhhQBSAEBcgJQAXgCCsgWQARKPh4EvQhMDCh1AWQggAGgcgRQgQgKgjgiQhKhKhNgJQhTgLiQBfIhcA8QgdARgPAAQgHAAgDgEgAJwo3IAkgBIgxA4QAKgiADgVg");
	this.shape_26.setTransform(0.2451,-3.4902);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.5,4.5,-90.2,4.5).s().p("ArWDzQBohEB+ASQAdAFA9AEQBAAEArAGQBLALBIAPIA8AMQDSgKCThBQB0g0BjhiQAygyBghsQBWhiBKhYIAxg4IAtg1QgLAogEAMQgjBhg8BiQhXCMiTCZQizC7lkA0QiQAViQgHQiGgHhcgdQiUgwiFBNQgrAageAgIgNAOQA5h8Bhg/g");
	this.shape_27.setTransform(-17.3,-22.7509);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,4.6,-107.7,4.6).s().p("ACAJUQgkgrgagaQgxgwhLgTQgogLg0ALQgTAEhIAWQh4AlhOgjQgwgVgmgqQgYgbgkg5Qgng8gVgZQgmgsgvgYQhZguiBAwQgsAQglAXQggAUABAFQgBgCACgFIAEgIIAMgOQAeggAsgZQCEhMCVAuQBdAdCGAGQCPAHCRgWQFig2Czi5QCUiZBXiMQA9hiAihhQBSACBcgJIDDgXQAVKNh9E1QhRDIh2ASQggAEgcgSQgQgKgigkQhIhKhMgLQhSgLiPBhIhbA9QgdARgPAAQgGAAgEgEgAJwo4IAkgBIgxA5QAKgjADgVg");
	this.shape_28.setTransform(0.2373,-3.3296);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.5,4.2,-90.1,4.2).s().p("ArWD1QBohEB9ARQAcAEA/AEQBAAEAsAGQBKAKBJAPIA8AMQDQgJCThCQBzg0BlhjQAzgxBfhsQBVhgBLhaIAxg5IAtg1IgGAZIgJAcQgiBhg8BiQhYCMiTCYQi0C6ljA2QiPAWiQgHQiGgGhcgdQiVguiFBMQgrAZgeAgIgMAOQA5h7Bgg/g");
	this.shape_29.setTransform(-17.3375,-22.5375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,4.5,-107.7,4.5).s().p("ACAJVQgkgsgagaQgvgyhKgTQgogLgzALQgTAEhIAXQg5ATglACQg3AFgwgWQgwgVgngqQgZgaglg5Qgng8gWgZQgmgsgvgYQhZgtiCAwQgsAQgmAXQggATABAFQgBgCACgFIAEgHIANgPQAegfAsgZQCEhMCWAtQBdAcCGAGQCPAGCQgWQFhg2C0i5QCUiaBXiMQA9hiAihhQBSACBcgJIDCgXQAZKMiBE5QgwBxg/A6QgwAsguAFQggADgcgTQgPgLgigkQhGhMhMgLQhRgMiNBiIhaA+QgcASgPAAQgHAAgEgEgAJwo5IAjgBIgwA5QAJgiAEgWg");
	this.shape_30.setTransform(0.2048,-3.1819);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.6,4,-90,4).s().p("ArVD3QBnhEB+AQQAaADBAAEQA/AEAuAGQBKAKBJAOIA9ALQDNgHCUhDQBxgzBnhlQAzgxBghsQBUhfBMhbIAxg5IAtg1IgPA1QghBhg9BiQhYCMiUCZQizC6liA2QiPAWiQgGQiGgGhdgcQiVgtiFBMQgrAZgfAfIgNAPQA6h7Bhg/g");
	this.shape_31.setTransform(-17.4125,-22.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,4.3,-107.6,4.3).s().p("ACBJWQgMgKgSgXQgWgdgKgLQgugyhJgTQgogLgyALQgTAFhHAXQh3AohOgiQgwgUgogrQgYgagng4Qgog8gWgZQgngsgvgXQhZgtiDAvQgsAQgmAXQggATAAAFIACgHIAEgHIANgOQAeggAsgYQCEhLCXArQBeAbCFAFQCQAGCPgWQFgg3C0i5QCUiaBYiMQA9hjAhhhQBSACBdgJIDAgWQAeKKiGE+QgxBzhCA7QgyAtguADQgfACgcgVQgOgKgigmQhFhNhLgMQhRgNiKBkIhZBAQgcASgPAAQgHAAgEgEgAJwo6IAkgBIgxA5QAKgjADgVg");
	this.shape_32.setTransform(0.1694,-2.9963);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.6,3.8,-90,3.8).s().p("ArVD6QBnhDB8ANQAXADBEAEQA/ADAuAGQBMAKBJAOIA8ALQDMgGCVhEQBvgzBqhmQAygwBghtQBRhbBPhfIAxg5IAtg2IgOA1QgiBhg9BjQhYCMiUCZQi0C6lhA3QiOAWiQgGQiFgFhegbQiWgriFBLQgrAYgfAgIgNAOQA7h6Bgg/g");
	this.shape_33.setTransform(-17.45,-22.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#DE4A07","#030D74"],[0,1],107.4,4.1,-107.5,4.1).s().p("ACCJXQgNgLgRgXIgfgoQgsg0hIgTQgogLgyAMQgTAEhGAYQh3AphPghQhKgfhOhyQgpg7gWgZQgogsgvgXQhagsiDAvQgtAQgmAWQggAUABAEIgBAAIAAAAIgBAAQgCgCAIgKIAFgFIAFgGIABgBIAEgEQAegfAsgYQCEhLCXAqQDZA9EqgvQFfg4C0i5QD/kJBLjhQBSACBdgJIDAgWQAiKIiMFDQgyB1hEA8Qg1AugtABQggABgbgVQgOgMghgmQhChPhMgNQhQgNiIBlIhXBBQgcATgQAAQgGAAgFgEgAJxo7IAkgBIgxA5QAKgiADgWg");
	this.shape_34.setTransform(0.0879,-2.8487);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.7,3.5,-89.9,3.5).s().p("AtxG1QA8h7Bhg/QBmhDB8AMIBcAFQA9AEAwAGQBMAKBIAOIA9AKQDKgECWhFQBtgzBshoQBlhgDOj2IAxg6IAtg2IgPA1QhLDhj/EIQi0C6lgA4QkpAvjZg8QiXgriEBLQgsAYgeAgIgEADIAAABIgGAGIgFAFg");
	this.shape_35.setTransform(-17.5375,-21.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,4,-107.6,4).s().p("ACBJYQgNgLgRgXQgagkgFgGQgrg1hHgTQgngLgxAMQgUAEhFAZQh2AqhPggQhKgehQhyQgqg7gXgZQgogrgvgXQhagsiFAvQgsAQgmAWQghATABAEQgBgBADgFIADgGIAOgQQAfgeArgYQCFhKCYApQBfAZCFAEQCPAFCPgXQFeg5C1i5QD/kIBLjiQBSABBdgIIC/gWQAnKHiRFIQg1B2hGA9Qg2AvgtgBQgfAAgbgXQgNgLghgoQhBhPhMgOQhPgPiGBoIhWBCQgbATgQAAQgHAAgFgEgAJwo8IAjgBIgwA5QAKgiADgWg");
	this.shape_36.setTransform(0.1591,-2.688);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.8,3.3,-89.9,3.3).s().p("ArUD+QBmhDB8AKIBbAGQA9ADAxAGQBMAKBJANIA9AKQDIgDCWhHQBrgyBvhpQA0gvBghtQBPhaBRhhIAwg5IAtg2QgHAegIAXQhKDikAEHQi0C6lfA5QiOAXiPgFQiFgEhfgZQiZgpiEBKQgsAYgeAeIgPAQQA9h6Bgg/g");
	this.shape_37.setTransform(-17.5875,-21.5625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#DE4A07","#030D74"],[0,1],107.4,3.8,-107.6,3.8).s().p("ACCJZQgOgLgRgYIgdgrQgqg2hGgTQgngKgxALQgUAFhEAZQh2AshPggQhKgehShxQgrg7gXgZQgpgrgvgXQhagriFAvQgsAPgnAWQghATAAAEQAAgBACgFIADgFIAPgQQAfgfArgYQCFhJCZAoQBgAZCEADQCQAECOgXQFdg6C1i4QCWibBWiLQA/hkAfhhQBSABBegJIC9gUQArKFiWFMQg1B4hJA9Qg4AxgtgCQgfgCgagXQgNgMgggpQhAhQhLgPQhPgQiDBpIhVBEQgcASgPAAQgHAAgFgDgAJwo8IAkgCIgxA6QAKgjADgVg");
	this.shape_38.setTransform(0.1248,-2.5154);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.8,3,-89.8,3).s().p("ArTEAQBlhDB8AJIBbAFQA9ADAyAGQBLAJBKANIA9AKQDHgCCWhIQBogyByhqQA0gvBghtQBQhaBQhgIAwg6IAtg2IgOA1QggBhg+BkQhXCLiWCaQi0C5leA6QiOAXiPgEQiEgDhggZQiZgoiFBJQgrAYgfAfIgPAQQA+h6Bgg/g");
	this.shape_39.setTransform(-17.6375,-21.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#DE4A07","#030D74"],[0,1],107.4,3.6,-107.5,3.6).s().p("ALLJdQgfgCgagZQgNgLgggrQg9hRhLgQQhOgQiBBqIhUBFQgnAcgQgNQgPgLgQgYQgSgdgLgPQgpg3hFgTQgmgLgwAMQgUAFhEAaQh1AthPgfQhLgehUhxQgsg7gXgYQgpgsgwgWQhagriGAvQgsAQgoAWQgfARgBAFIAAAAQgEAAAJgLIAPgQQAggfArgXQCEhJCaAmQBhAYCEADQCPAECOgYQFcg6C1i5QEDkLBIjfQBSAABegIQAxgFCLgQQAwKEicFRQg3B5hKA/Qg3AugqAAIgGgBgAJxo+IAjgBIgwA6QAJgjAEgWg");
	this.shape_40.setTransform(0.0676,-2.335);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.9,2.8,-89.7,2.8).s().p("ArTECQBlhCB7AGIBcAEQA8ADA0AGQBLAKBKAMIA9AKQDFAACXhJQBlgxB2hsQA0gvBhhtQBOhZBRhiIAwg6IAtg2QgIAhgGAUQhIDfkDELQi1C6ldA6QiNAXiPgDQiEgDhhgYQiagniEBJQgrAYggAeIgQARQA+h5BhhAg");
	this.shape_41.setTransform(-17.7125,-21.075);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#DE4A07","#030D74"],[0,1],107.4,3.3,-107.5,3.3).s().p("ALEJfQgfgEgZgZQgMgMgggrQg8hThKgQQhOgSh/BtIhTBGQgnAcgQgNQgQgMgPgYQgSgegLgPQgng4hEgTQgmgLgwANQgUAFhDAaQh1AuhPgeQhLgdhVhxQgtg7gYgYQgqgsgvgWQhbgqiGAvQgsAPgoAWQghATAAADIAAAAIAAAAIgBgBIAAgBIAEgGIAFgFIALgLIABgCIABgBQAfgeAsgYQCEhJCbAmQDfA2EigxQFcg6C1i5QEEkNBGjeQBSgBBfgIIC7gTQA0KCigFVQg5B6hMBAQg3AugpAAIgJgBgAJxpBIAjgBIgwA6QAJgjAEgWg");
	this.shape_42.setTransform(0.0645,-1.9982);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.1,2.4,-89.6,2.4).s().p("AtyG9QBAh6BhhAQBkhDB7AFIBcAEQA7ACA1AHQBLAJBLANIA9AJQDEABCXhKQBjgxB4htQA1gvBghtQBOhYBRhjIAxg6IAsg2QgIAhgGAUQhGDfkFELQi1C6lcA7QkiAwjfg2QiagliFBJQgrAXgfAfIgBABIgCABIgLALIgFAGIABgBg");
	this.shape_43.setTransform(-17.8625,-20.7375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#DE4A07","#030D74"],[0,1],107.4,3,-107.6,3).s().p("AK9JiQgfgFgZgaQgMgMgfgtQg6hUhKgRQhNgSh9BuIhSBHQgnAdgRgNQgQgNgPgYIgcguQgmg5hCgUQgmgKgwANQgTAFhDAbQh1AvhPgeQhLgchXhwQgug7gYgYQgrgrgvgWQhbgqiHAuQgsAQgoAVQggASgBADIACgFIACgDIARgSQAggeArgXQCEhJCcAlQDgA0EhgxQFbg8C1i4QEFkNBGjfQBRgBBfgIQAwgECLgPQA4KBilFaQg7B8hOBAQg4AugoAAIgKgBgAJwpDIAjgCIgwA7QAKgjADgWg");
	this.shape_44.setTransform(0.1235,-1.6835);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#DE4A07","#7B2617"],[0,1],88,2.3,-89.6,2.3).s().p("ArREGQBjhCB7ADIBdADQA5ACA3AHQBMAJBKAMIA9AKQDDACCWhMQBggvB9hwQA1gvBghsQBPhaBQhhIAwg7IAsg2QgHAhgGAUQhGDfkFEMQi1C5lcA8QkhAxjgg0QibgliFBJQgqAXggAeIgSASQBBh6Bhg/g");
	this.shape_45.setTransform(-17.85,-20.5625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,2.6,-107.6,2.6).s().p("AK1JkQgegGgZgbQgLgMgfguQg5hVhKgTQhMgTh7BxQhIBCgJAGQgmAdgRgNQgRgMgPgaIgbguQglg7hBgTQglgLgvANQgUAGhCAbQh0AxhQgeQhLgchZhwQgvg6gYgYQgrgsgwgVQhagpiIAuQgtAPgoAWQgaAOgGAFQAegrBBgjQCFhHCcAjQDhAzEggyQFag9C1i4QEFkLBGjgQBSgCBfgIQA6gFCAgOQA8KAiqFeQg9B+hQBBQg4AugoAAIgMgCgAJvpFIAkgCIgwA6QAJgjADgVg");
	this.shape_46.setTransform(0.1951,-1.3413);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.3,1.6,-89.3,1.6).s().p("At1HEIADgFQBCh7BhhAQBkhCB6ACIBcACQA6ACA3AHQBMAJBKAMIA+AJQDBADCYhMQBegwB+hxQA1guBhhtQBNhXBShkIAwg6IAsg3QgHAfgHAXQhGDgkFEKQi1C5lbA9QkfAyjhgzQicgjiFBHQhAAjgfArIAAAAIgCACg");
	this.shape_47.setTransform(-18.125,-19.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,2.3,-107.6,2.3).s().p("AKuJmQgegHgYgcQgLgMgegvQg4hWhJgUQhMgUh4ByQhHBDgJAHQgmAdgSgNQgRgNgPgaIgagvQgkg8hAgTQglgLgvAOQgTAFhCAdQh0AxhPgdQhMgchbhvQgvg6gZgYQgsgrgvgVQhbgpiJAuQgsAPgpAVQgaAOgGAFQAfgqBBgjQCEhHCdAiQDjAyEfgzQFYg9C2i4QEIkPBDjdQB5gEDxgYQBAJ+ivFjQg+B+hSBCQg5AugnAAQgHAAgHgCgAJvpIIAkgCIgwA6QAJgiADgWg");
	this.shape_48.setTransform(0.1935,-0.9969);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.3,1.4,-89.3,1.4).s().p("At1HGIADgGQBCh5BhhAQBjhCB5AAQB6AABVAKQBKAJBNAMIA9AIQDAAFCYhOQBbguCChzQA2guBghtQBNhXBShkIAwg7IAsg2QgHAegHAXQhDDdkIEOQi2C6lZA8QkeAzjjgyQidghiEBGQhBAjgeAqIgCACg");
	this.shape_49.setTransform(-18.15,-19.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,1.9,-107.6,1.9).s().p("AKnJpQgegIgYgeQgKgMgegwQg2hXhJgVQhLgWh2B0QhFBEgKAHQglAfgTgOQgRgOgPgaIgagwQgig9g/gTQglgLguAOQgUAGhAAdQh0AzhPgdQhNgbhchvQgxg6gYgYQgtgrgvgVQhbgoiKAuQgsAPgpAVQgbAOgGAEQAggpBBgjQCFhHCdAhQDlAwEcgzQFXg+C2i4QEKkPBCjdQBxgED4gYQBFJ9i0FnQhBCAhTBDQg6AugnAAQgIAAgHgCgAJvpLIAjgCIgwA7QAKgjADgWg");
	this.shape_50.setTransform(0.1941,-0.6263);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.4,1.2,-89.2,1.2).s().p("At1HHIADgFQBDh5BhhBQBjhBB5gCQBugCBhAMQBGAJBRALIA9AIQC/AGCYhOQBWgtCHh2QBlhWDQkAIAwg6IAsg3QgGAdgHAYQhCDdkKEOQi2C6lYA+QkbAzjlgwQidghiFBHQhBAiggAqIgBACg");
	this.shape_51.setTransform(-18.225,-19.475);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,1.6,-107.6,1.6).s().p("AKgJrQgdgJgYgeQgJgMgegyQg1hZhJgVQhKgWh0B1QhDBEgKAIQgmAfgTgOQgSgOgPgbIgYgwQgig+g+gUQgkgLgtAPQgUAGhAAdQhzA1hQgcQhMgbhehuQhih0hGgeQhbgoiKAuQgtAOgpAVQgbAOgGAFQAggpBBgjQCFhGCeAgQDmAuEbgzQFWg/C3i5QEKkPBCjdQB3gFDxgWQBJJ6i5FsQhCCChWBDQg6AugmAAQgJAAgIgCgAJvpOIAjgCIgwA7QAJgjAEgWg");
	this.shape_52.setTransform(0.1706,-0.2784);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.5,1,-89.2,1).s().p("AtzHDQBGh4BghAQBihBB5gDQBkgEBsANICXAUIA9AHQC9AHCYhQQBTgrCLh3QBmhWDQkBIAwg7IAsg2QgFAYgJAdQhCDdkKEOQi2C6lXA/QkaAzjmguQieggiFBGQhBAiggApIAAABIgBABg");
	this.shape_53.setTransform(-18.3,-19.275);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#DE4A07","#030D74"],[0,1],107.4,1.2,-107.5,1.2).s().p("AKbJtQgegKgXgfQgJgMgdgzQg0hahIgXQhKgXhyB3QhCBFgKAJQglAfgTgOQgTgOgPgbIgYgyQgghAg8gTQgkgLgtAPQgUAGhAAeQhyA2hQgcQhNgahfhuQhkhzhGgeQhbgniLAtQhGAXgzAgQAggpBDgjQCFhGCfAfQDnAtEag1QFVg/C3i4QEKkPBBjeQB/gGDpgVQBOJ5i/FxQhDCChYBFQg8AuglAAQgKAAgHgDgAJwpQIAjgCIgwA6QAJgiAEgWg");
	this.shape_54.setTransform(0.0956,0.0621);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.5,0.8,-89.1,0.8).s().p("AtzHFQBHh4BghAQBhhAB4gFQBkgFBtANQCDAQBSALQC7AHCZhQQBOgpCRh6QBnhXDPkAIAvg7IAsg3QgIAkgFASQhBDekLENQi3C5lWBAQkZA0jngtQifgfiFBGQhCAjghAqg");
	this.shape_55.setTransform(-18.35,-19.075);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#DE4A07","#030D74"],[0,1],107.4,0.9,-107.6,0.9).s().p("AKTJvQgdgLgXggQgIgMgdg0QgyhbhIgYQhJgYhwB5QhBBGgKAJQglAggUgPQgTgOgPgcIgXgyQgfhBg7gTQgjgLgtAOQgUAHg/AeQhyA4hQgbQhNgahhhtQhmhzhGgeQhbgniMAtQhGAXgzAfQAhgpBCgiQCFhGCgAeQDoAsEYg1QFVhBC3i4QELkOBBjfQCJgHDegUQBSJ4jEF1QhFCEhaBFQg8AvglAAQgKAAgJgEgAJvpTIAjgCIgvA7QAJgjADgWg");
	this.shape_56.setTransform(0.124,0.4123);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.6,0.6,-89.1,0.6).s().p("AtzHHQCPjwDwgOQBfgFBzANIDVAaQC7AICYhRQBLgoCVh8QBnhXDPkAIAwg7IArg3QgEAWgJAfQhBDfkLENQi3C5lWBBQkXA1jogsQiggeiEBGQhDAighApIADgFg");
	this.shape_57.setTransform(-18.4,-18.875);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#DE4A07","#030D74"],[0,1],107.4,0.6,-107.6,0.6).s().p("AKMJyQgcgMgXghQgIgMgdg2QgxhchHgZQhIgZhuB7Qg/BGgLAKQgkAhgVgPQgTgPgPgcIgWgzQgehCg6gUQgjgLgsAPQgTAHg/AfQhyA4hQgaQhOgahihsQg1g7gagXQgvgqgwgUQhbgmiNAtQhGAWg0AfQAhgoBDgjQCFhFCgAdQDqAqEXg2QFThBC3i4QEMkPBBjeQCJgIDdgTQBWJ3jJF4QhHCGhbBGQg9AuglAAQgLAAgJgDgAJvpVIAjgDIgwA8QAKgjADgWg");
	this.shape_58.setTransform(0.103,0.7389);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.7,0.4,-89,0.4).s().p("AtzHIQCQjtDvgRQBagGB5ANIDWAaQC4AKCZhTQBFglCbiAQBkhTDSkEIAwg8IArg3QgFAcgHAaQhBDekMEOQi3C5lUBBQkWA2jqgqQiggdiFBFQhDAjghAog");
	this.shape_59.setTransform(-18.475,-18.675);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#DE4A07","#030D74"],[0,1],107.4,0.2,-107.6,0.2).s().p("AKGJ0QgdgNgWgiQgHgMgdg3QgwhdhHgaQgsgQgyAhQgjAXgyA6Qg+BHgLAKQgkAhgUgPQgVgPgOgcIgWg0QgchEg5gTQgigLgsAPQgTAHg/AgQhxA6hRgaQhNgZhlhtQhphyhGgdQhcgmiNAtQhHAWg0AeQAigoBDgiQCFhEChAcQDqAoEWg2QFShDC4i3QENkPA/jfQCPgJDYgRQBZJ2jNF8QhJCHheBHQg9AvglAAQgLAAgJgEgAJupZIAkgCIgwA7QAJgjADgWg");
	this.shape_60.setTransform(0.1077,1.1064);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.7,0.2,-88.9,0.2).s().p("AtzHKQCRjqDugVQBZgHB6AOIDWAZQC4AKCZhUQA4gfBAgyQAlgdBDg3QBmhUDRkEIAvg7IAsg3QgEAWgJAfQhADfkNEOQi3C4lTBDQkVA2jrgoQiggciGBEQhDAigiAog");
	this.shape_61.setTransform(-18.525,-18.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.4,-66.3,214.9,131.2);


(lib.PuppetShape_1copy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_3("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DE4A07","#030D74"],[0,1],107.4,-0.1,-107.6,-0.1).s().p("AJ/J2QgcgOgWgjQgHgLgcg5QgvhehGgbQgsgRgxAiQgiAXgxA7Qg8BHgMALQgkAigVgPQgVgQgOgcIgVg2QgchEg4gUQghgLgsAPQgTAHg9AhQhxA7hRgZQhOgZhmhsQhshyhGgcQhbgliOAsQhHAXg1AdQAjgnBDgiQCFhFChAbQDsAnEUg3QFShDC4i3QEOkRA+jdIFmgbQBeJ2jSGAQhLCIhfBIQg/AvglAAQgMAAgJgFgAJupbIAkgCIgwA7QAJgjADgWg");
	this.shape.setTransform(0.1283,1.4597);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.8,-0.1,-88.9,-0.1).s().p("AtzHLQCRjnDtgYQBUgICAAPIDXAXQC2ALCahVQA4gfBAgyQAlgdBEg4QBmhTDQkFIAwg6IArg4QgGAdgHAZQg+DdkOEPQi4C5lTBDQkTA3jsgoQihgaiFBFQhDAigjAng");
	this.shape_1.setTransform(-18.575,-18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.4,-64.8,215,129.7);


(lib.PuppetShape_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WarpedAsset_3("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DE4A07","#030D74"],[0,1],107.4,-0.1,-107.6,-0.1).s().p("AJ/J2QgcgOgWgjQgHgLgcg5QgvhehGgbQgsgRgxAiQgiAXgxA7Qg8BHgMALQgkAigVgPQgVgQgOgcIgVg2QgchEg4gUQghgLgsAPQgTAHg9AhQhxA7hRgZQhOgZhmhsQhshyhGgcQhbgliOAsQhHAXg1AdQAjgnBDgiQCFhFChAbQDsAnEUg3QFShDC4i3QEOkRA+jdIFmgbQBeJ2jSGAQhLCIhfBIQg/AvglAAQgMAAgJgFgAJupbIAkgCIgwA7QAJgjADgWg");
	this.shape.setTransform(0.1283,1.4597);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.8,-0.1,-88.9,-0.1).s().p("AtzHLQCRjnDtgYQBUgICAAPIDXAXQC2ALCahVQA4gfBAgyQAlgdBEg4QBmhTDQkFIAwg6IArg4QgGAdgHAZQg+DdkOEPQi4C5lTBDQkTA3jsgoQihgaiFBFQhDAigjAng");
	this.shape_1.setTransform(-18.575,-18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,0.2,-107.6,0.2).s().p("AKGJ0QgdgNgWgiQgIgLgcg4QgwhdhHgaQhHgahsB8Qg+BHgLAKQgkAhgVgPQgUgPgOgcIgWg0QgchEg6gTQgigLgsAPQgTAHg+AgQhyA6hRgaQhNgZhlhtQhphyhGgdQhbgmiNAtQhGAXg1AeQAigoBDgiQCFhFCgAcQDqApEXg3QFShCC4i4QEOkQA+jdQCOgKDYgRQBaJ3jOF7QhICHheBHQg9AvglAAQgLAAgJgEgAJupYIAjgCIgvA7QAJgjADgWg");
	this.shape_2.setTransform(0.1577,1.0814);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.7,0.2,-89,0.2).s().p("AtzHKQCQjqDvgVQBYgHB7AOIDWAYQC4AKCZhUQA4geBAgzQAlgcBDg4QBlhUDRkDIAwg7IArg4QgFAegIAYQg+DekOEPQi4C4lTBDQkVA2jqgpQihgciFBFQhDAjghAng");
	this.shape_3.setTransform(-18.475,-18.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#DE4A07","#030D74"],[0,1],107.4,0.6,-107.6,0.6).s().p("AKNJxQgcgMgXggQgIgMgdg2QgxhchHgYQhIgZhvB6Qg/BGgLAKQgkAggVgPQgTgOgPgcIgWg0QgehBg7gUQgigLgtAPQgTAHg/AfQhyA4hQgaQhOgahihtQhnhyhGgdQhbgniNAtQhGAXg0AfQAigpBCgjQCFhFCgAdQDqArEXg2QFThBC3i4QEOkQA/jdQCGgIDggTQBWJ3jIF4QhHCGhbBGQg9AugmAAQgKAAgJgEgAJvpVIAjgDIgvA8QAJgjADgWg");
	this.shape_4.setTransform(0.1303,0.7053);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.6,0.4,-89,0.4).s().p("AtzHIQCQjuDvgQQBagHB4AOIDWAaQC5AJCahSQBHgnCYh+QBihRDVkGIAvg8IArg3QgFAcgHAaQhADdkNEPQi3C5lUBBQkXA2jpgrQiggdiFBFQhCAjgiApg");
	this.shape_5.setTransform(-18.45,-18.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#DE4A07","#030D74"],[0,1],107.4,1,-107.6,1).s().p("AKVJvQgdgLgXggQgJgMgdg0QgzhahIgYQhIgYhxB5QhBBFgKAJQglAggUgPQgTgOgOgbIgYgzQgfhAg8gTQgjgLgtAOQgTAHhAAeQhyA3hQgbQhNgahhhtQhlhzhGgeQhbgniLAuQhGAWg0AgQAhgpBCgjQCGhGCfAeQDoAsEZg1QFUhAC3i4QEMkQBAjdQB6gGDtgVQBRJ4jCF0QhFCEhaBFQg7AugmAAQgKAAgIgDgAJvpSIAjgCIgvA7QAJgjADgWg");
	this.shape_6.setTransform(0.1304,0.3123);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.6,0.6,-89.1,0.6).s().p("AtzHGQBGh2BhhBQBhhAB4gHQBhgFBwAOQCDAPBSALQC7AICYhRQBMgoCUh8QBjhTDTkEIAvg7IAsg3QgFAYgIAdQhADdkMEPQi3C5lVBAQkYA1jogsQifgeiGBGQhCAjghApg");
	this.shape_7.setTransform(-18.375,-18.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,1.4,-107.6,1.4).s().p("AKcJtQgegKgXgfQgJgMgegzQg0hYhIgXQhKgXhzB3QhCBFgKAIQglAggTgPQgTgOgPgbIgYgxQgghAg9gTQgkgLgtAOQgUAGhAAeQhyA2hQgcQhNgahfhuQgzg7gZgXQgtgqgwgVQhbgoiLAuQhFAXgzAgQAggqBCgjQCFhGCfAfQDnAuEag0QFVhAC3i4QEKkPBBjeQCFgGDkgVQBMJ6i9FvQhDCChXBFQg7AtgmAAQgJAAgIgCgAJvpPIAjgCIgwA7QAJgjAEgWg");
	this.shape_8.setTransform(0.1521,-0.062);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.5,0.8,-89.2,0.8).s().p("AtzHFQBGh4BghAQBihBB4gFQBlgDBsAMQCCAQBSALQC8AHCZhQQBQgqCOh4QBkhVDSkDIAwg7IAsg2QgJAkgFARQhBDekLEOQi2C5lXA/QkZA0jngtQiegfiFBGQhDAjgfApIACgFg");
	this.shape_9.setTransform(-18.3,-19.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,1.7,-107.7,1.7).s().p("AKiJqQgdgJgYgeQgKgLgegyQg1hYhJgVQhKgWh1B1QhEBEgKAIQglAegTgOQgSgNgPgbIgZgwQghg+g/gUQgkgLguAOQgTAGhBAeQhzA0hQgdQhMgbhdhuQgyg7gZgXQgsgrgwgVQhbgoiKAuQgsAPgqAVQgbAOgFAEQAfgpBBgjQCFhGCeAgQDlAvEcgzQFWg/C2i4QEKkPBCjdQB8gFDtgXQBIJ8i4FqQhBCBhVBDQg6AvgnAAQgIAAgIgDgAJupNIAkgCIgwA7QAJgjADgWg");
	this.shape_10.setTransform(0.2274,-0.3868);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.4,1.1,-89.2,1.1).s().p("AtzHDQBFh4BghBQBihBB5gDQBogCBoAMQCCAQBSAMQC9AGCZhPQBUgsCKh3QA3guBghtQBMhWBShlIAwg7IAsg3QgGAcgHAaQhDDdkJEOQi2C5lYA/QkaAzjmgvQieggiFBGQhAAjggApIAAAAIgBACIACgGg");
	this.shape_11.setTransform(-18.225,-19.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,2.1,-107.6,2.1).s().p("AKqJoQgegIgYgdQgKgLgfgwQg2hXhJgUQhLgVh4BzQhGBDgJAHQgmAegSgNQgRgOgPgaIgagvQgjg9g/gTQglgLguAOQgUAFhBAdQh0AzhPgdQhNgbhbhvQgxg7gYgYQgsgqgwgWQhagoiJAuQgtAPgpAVQgbAOgGAFQAfgqBCgjQCFhHCcAiQDkAwEegzQFYg+C1i4QEJkPBDjdQBRgCBggIIC4gSQBEJ+izFlQg/CAhTBCQg6AugnAAQgHAAgHgCgAJvpKIAjgCIgwA7QAKgjADgWg");
	this.shape_12.setTransform(0.1886,-0.7833);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.4,1.3,-89.3,1.3).s().p("AtyHBQBDh5BhhAQBihCB6gBQBygBBdAMQCCAPBSANQC+AFCZhOQBYguCFh0QA2guBhhtQBNhXBRhkIAwg7IAsg2QgIAlgGAQQhCDdkJEOQi2C5lYA+QkdAzjkgwQicgiiFBHQhCAjgfAqIgBABg");
	this.shape_13.setTransform(-18.2,-19.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#DE4A07","#030D74"],[0,1],107.4,2.4,-107.5,2.4).s().p("AKyJlQgegGgYgcQgLgMgfgvQg4hVhKgTQhLgUh6BxQhHBCgJAHQgmAegSgOQgRgMgPgaIgaguQglg8hBgTQglgLguANQgUAGhCAcQh0AxhPgdQhMgchahwQgvg6gYgYQgsgrgwgWQhagpiIAuQgtAPgoAWQggARgCADIAAABQgCgBAFgHIATgTQAggdArgXQCFhICcAjQDiAyEfgyQFZg9C2i4QEGkNBFjfQBRgCBggIQAxgECIgOQA+J+isFhQg+B+hRBCQg5AugnAAIgNgCgAJwpHIAkgCIgxA6QAKgiADgWg");
	this.shape_14.setTransform(0.0803,-1.1352);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.2,1.9,-89.5,1.9).s().p("ArQEJQBjhBB5AAIBdACQA6ACA4AHQBLAJBLALIA9AJQDAAECYhNQBcgvCBhyQA2guBghtQBNhXBShkIAwg6IAsg3QgHAfgHAWQhEDfkHEMQi1C6laA9QkeAyjjgyQicgjiEBHQgrAXggAeIgTATQBCh5BhhAg");
	this.shape_15.setTransform(-17.9625,-20.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#DE4A07","#030D74"],[0,1],107.4,2.8,-107.5,2.8).s().p("AK6JjQgfgFgZgbQgLgMgfgtQg6hUhKgSQhMgTh8BvIhRBIQgnAcgRgNQgQgMgQgZIgbguQgmg6hCgTQglgLgvANQgUAGhCAbQh1AwhPgeQhMgdhYhvQgug7gYgYQgrgrgvgWQhbgqiHAvQgsAPgpAWQgfARgCAEIAAAAIAAAAIgBgBIABgDIAEgFIAFgGIAKgKIADgCQAfgdArgYQCFhICbAkQDhA0EhgyQFag8C1i4QEFkMBGjgQBRgBBggIQArgECPgPQA6KAinFcQg8B9hPBAQg4AugoAAIgLgBgAJwpEIAkgCIgwA7QAJgjADgWg");
	this.shape_16.setTransform(0.0939,-1.5031);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.1,2.2,-89.6,2.2).s().p("AtyG/QBBh4BghAQBjhCB7ADIBcACQA5ADA4AGQBKAJBMAMIA9AJQDCADCXhMQBggvB9hwQA1gvBghtQBOhYBRhjIAwg6IAsg2QgIAkgFARQhGDgkFEKQi2C6lbA8QkgAyjgg0QicgkiEBIQgrAXggAeIgCACIgKAKIgFAFIAAAAg");
	this.shape_17.setTransform(-17.8625,-20.4625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#DE4A07","#030D74"],[0,1],107.4,3.2,-107.6,3.2).s().p("ALBJgQgfgEgZgaQgMgLgfgsQg8hThKgRQhOgSh+BtIhSBHQgnAcgRgNQgPgMgQgYIgcgtQgng5hDgTQgmgLgwANQgUAFhDAbQh0AuhQgeQhLgdhWhwQgtg8gYgYQgqgrgvgWQhbgqiGAuQgtAQgnAWQgiASABAEIgBAAIAAgBIAAgBIAEgGIADgEIADgEIAIgIIAEgDQAfgeArgYQCEhJCbAlQDgA2EigxQFbg7C1i5QEEkLBHjgQBRgBBfgIIC8gTQA1KBiiFYQg6B6hNBAQg3AugoAAIgKgBgAJwpBIAjgCIgwA6QAKgjADgVg");
	this.shape_18.setTransform(0.1033,-1.8934);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#DE4A07","#7B2617"],[0,1],88.1,2.3,-89.6,2.3).s().p("AtyG+QA/h7BihAQBkhCB7AFIBcADQA6ACA2AHQBKAJBMAMIA9AKQDDABCXhKQBjgxB5huQA1gvBghtQBOhYBRhiIAwg6IAtg3QgHAggHAWQhHDfkEELQi1C5lcA7QkhAxjgg1QibgliEBJQgrAXgfAeIgEAEIgIAIIgEAEIgDAEg");
	this.shape_19.setTransform(-17.8625,-20.6375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#DE4A07","#030D74"],[0,1],107.4,3.5,-107.5,3.5).s().p("ALJJeQgfgDgagZQgMgLgggrQg9hShLgQQhOgQiABrIhUBFQgnAbgQgMQgPgMgRgYQgRgdgLgPQgpg3hEgTQgmgLgwAMQgUAFhEAaQh1AthPgfQhMgdhThxQgtg7gXgYQgpgsgwgWQhagriGAvQgsAQgoAWQgeARgCAEIAAABQgEgBAJgKIAPgQQAggfArgXQCEhKCaAnQBhAYCEADQCQADCNgXQFcg6C1i5QEEkMBGjfQBSAABegIQAugECPgQQAxKDidFSQg4B6hLA/Qg2AtgqAAIgHAAgAJxo+IAjgCIgwA6QAJgjAEgVg");
	this.shape_20.setTransform(0.0716,-2.2064);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.9,2.7,-89.8,2.7).s().p("ArTECQBlhCB7AGIBcAEQA7ADA1AGQBKAKBLAMIA9AKQDFAACXhJQBlgxB1htQA1gvBhhsQBOhaBRhhIAwg6IAtg2QgHAbgIAaQhGDfkEELQi1C6ldA6QiNAXiPgDQiEgDhhgYQiagniEBKQgsAXgfAfIgPAQQA+h5BghAg");
	this.shape_21.setTransform(-17.7,-21.0125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,3.8,-107.6,3.8).s().p("ACBJZQgOgLgQgYIgegrQgqg2hFgUQgngKgxAMQgUAFhEAZQh2AshOggQhLgehShxQgrg7gXgYQgpgsgvgWQhagriGAuQgsAQgnAWQghATABAEQgBgCADgEIADgGIAPgQQAfgeArgYQCFhKCZAoQBgAZCEADQCQAECOgYQFdg5C0i5QECkKBJjgQBRAABegIQApgECVgRQAsKFiXFOQg3B4hIA+Qg6AwgsgCQgfgCgagYQgNgMgggpQg/hRhLgPQhPgQiDBqIhVBEQgbATgPAAQgIAAgFgEgAJwo9IAjgBIgwA5QAJgiAEgWg");
	this.shape_22.setTransform(0.151,-2.4654);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.9,3,-89.8,3).s().p("ArTEBQBlhDB8AIIBbAFQA9ACAyAHQBLAJBKANIA9AKQDHgCCWhIQBogxBzhrQA0gvBghtQBQhaBPhhIAxg5IAsg2QgHAggHAVQhIDgkCEJQi1C6leA5QiNAYiPgEQiFgDhggZQiZgoiEBKQgsAYgfAeIgPAQQA+h5Bgg/gANym4IAAAAIAAAAg");
	this.shape_23.setTransform(-17.6622,-21.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,3.9,-107.6,3.9).s().p("ACBJYQgNgLgRgXIgegqQgsg1hGgUQgngKgyALQgUAFhEAZQh3AqhOggQgxgUgogpQgagagog5Qgqg7gXgYQgogsgvgXQhagriFAuQgsAQgmAWQghATABAEQgBgBADgFIADgGIAOgQQAfgeArgYQCEhKCZApQBfAZCFAEQCQAFCOgXQFeg5C0i5QEAkIBLjiQBRABBegJQAjgDCcgSQAnKHiSFIQg0B2hGA9Qg3AvgtAAQgggBgagWQgOgMgggoQhBhPhLgOQhQgPiFBoIhWBCQgbATgQAAQgHAAgFgEgAJwo8IAjgCIgwA6QAKgiADgWg");
	this.shape_24.setTransform(0.1664,-2.638);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.8,3.2,-89.9,3.2).s().p("ArUD+QBmhDB8ALIBbAFQA8ADAyAGQBMAKBJANIA9AKQDIgDCWhHQBrgyBvhpQA0gwBghsQBRhcBOhfIAxg6IAtg1IgPA1QhKDikAEHQi0C6lfA5QiOAXiPgFQiFgEhggZQiYgpiEBKQgsAYgeAeIgPAQQA9h6Bgg/g");
	this.shape_25.setTransform(-17.5875,-21.5375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,4.1,-107.6,4.1).s().p("ACBJXQgNgKgRgXIgfgpQgtg0hHgTQgogLgyAMQgTAEhGAYQh3AphOghQgxgUgogqQgZgagng4Qgpg7gWgZQgogsgvgXQhagtiDAvQgtAQgmAXQggATAAAEQAAgCACgEIADgGIAPgQQAegfAsgYQCEhKCYAqQDYA8EqgvQFfg4C0i5QD/kIBLjiQBSACBdgJIDAgWQAiKIiMFEQgzB0hEA8Qg0AvguABQgfAAgbgVQgOgLghgnQhDhPhLgNQhQgNiIBmIhXBBQgcASgPAAQgHAAgFgEgAJwo7IAkgBIgxA5QAKgiADgWg");
	this.shape_26.setTransform(0.1619,-2.8237);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.7,3.5,-89.9,3.5).s().p("ArUD8QBmhDB9AMIBbAFQA9AEAwAGQBKAKBKANIA9ALQDKgFCWhFQBtgzBshoQAzgvBhhtQBRhcBOheIAxg6IAtg1IgPA1QhLDij/EGQi0C6lgA4QkpAwjYg9QiYgqiEBKQgsAZgeAfIgPAPQA8h6Bhg/g");
	this.shape_27.setTransform(-17.5375,-21.7625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,4.3,-107.6,4.3).s().p("ACBJWQgMgKgSgWQgWgegKgKQgugzhJgTQgogLgyALQgTAFhHAXQh3AohOgiQgwgUgogrQgYgagng4Qgog8gWgZQgngsgvgXQhZgtiDAvQgsAQgmAXQggATAAAFIACgHIAEgHIANgOQAeggAsgYQCEhLCXArQBeAbCFAFQCQAGCPgWQFgg3C0i5QCUiaBYiMQA9hjAhhhQBSACBdgJIDAgWQAeKKiGE+QgxBzhCA7QgyAtguADQgfACgcgVQgOgKgigmQhFhNhLgMQhRgNiKBkIhZBAQgcASgPAAQgHAAgEgEgAJwo6IAkgBIgxA5QAKgjADgVg");
	this.shape_28.setTransform(0.1694,-2.9737);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.6,3.8,-90,3.8).s().p("ArVD6QBnhDB8ANQAXADBEAEQA/ADAuAGQBLAKBKAOIA8ALQDMgGCVhEQBvgzBqhmQAygwBghtQBRhbBPhfIAxg5IAtg2IgOA1QgiBhg9BjQhYCMiUCZQi0C6lhA3QiOAWiQgGQiFgFhegbQiWgriFBLQgrAYgfAgIgNAOQA7h6Bgg/g");
	this.shape_29.setTransform(-17.45,-22.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,4.5,-107.7,4.5).s().p("ACAJVQgkgsgagaQgvgxhKgUQgogKgzALQgTAEhIAXQg5ASglADQg3AEgwgVQgwgVgngrQgZgaglg5Qgng7gWgZQgmgtgvgXQhZgtiCAvQgsAQgmAXQggAUABAEQgBgCACgEIAEgHIANgPQAeggAsgYQCEhMCWAtQBdAcCGAFQCPAGCQgWQFhg2C0i5QCUiZBXiNQA9hiAihhQBSADBcgJIDCgXQAZKLiBE5QgwByg/A6QgwArguAFQggAEgcgUQgPgKgiglQhGhMhMgLQhRgMiNBiIhaA+QgcARgPAAQgHAAgEgDgAJwo4IAjgCIgwA6QAJgjAEgVg");
	this.shape_30.setTransform(0.2048,-3.2069);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.6,4,-90,4).s().p("ArVD3QBnhEB+AQQAaADBAAEQA/AEAuAGQBKAKBJAOIA9ALQDNgHCUhDQBxgzBnhlQAzgxBghsQBUhfBMhbIAxg5IAtg1IgPA1QghBhg9BiQhYCMiUCZQizC6liA2QiPAWiQgGQiGgGhdgcQiVgtiFBMQgrAZgfAfIgNAPQA6h7Bhg/g");
	this.shape_31.setTransform(-17.4125,-22.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,4.7,-107.7,4.7).s().p("ACAJUQgkgrgagZQgxgwhLgUQgogKg0AKQgTAEhIAWQh4AlhOgjQgwgVgmgrQgYgaglg5Qgmg8gVgZQgmgsgvgYQhZguiBAwQgsARglAXQggATABAFQgBgBACgFIAEgJIAMgOQAegfAsgZQCEhNCVAuQBdAdCGAGQCPAHCRgWQFig1Czi5QCUiaBXiMQA9hiAihhQBSADBcgJIDDgXQAUKNh8EzQhRDJh1ASQggAFgcgTQgQgKgigjQhJhLhMgKQhSgLiPBgIhbA9QgdAQgPAAQgGAAgEgDgAJwo4IAkgBIgxA5QAJgiAEgWg");
	this.shape_32.setTransform(0.2251,-3.3546);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.5,4.3,-90.1,4.3).s().p("ArWD1QBohEB9ARQAcAEA/AEQBAAEAsAGQBKAKBJAPIA8AMQDQgICThDQBzgzBlhkQAygxBghsQBUhfBMhbIAxg5IAtg1IgPA1QghBhg9BiQhYCMiTCZQizC6lkA1QiPAWiQgHQiGgGhcgdQiVguiFBNQgrAZgeAfIgMAOQA4h7Bhg/g");
	this.shape_33.setTransform(-17.325,-22.5625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#DE4A07","#030D74"],[0,1],107.2,4.8,-107.7,4.8).s().p("AB/JTQgjgqgbgZQgyguhNgUQgpgKgzAKQgTADhKAWQh4AjhOgjQgvgWgmgqQgXgbgkg5Qglg8gVgaQglgsgvgYQhZguiBAwQgrAQglAXQggAUABAFQgBgCACgEIAEgIIAMgOQAeggAsgaQCEhNCUAwQBcAdCGAHQCPAHCSgVQFjg0Czi6QCTiZBYiNQA8hgAjhiQBSADBcgJIDDgXQAQKPh3EuQhMDBh0AXQggAGgdgRQgQgKgjgiQhLhKhMgJQhTgKiRBeIhcA8QgcAQgPAAQgHAAgEgDgAJwo3IAjgBIgxA5QAKgiAEgWg");
	this.shape_34.setTransform(0.2596,-3.5152);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.5,4.5,-90.2,4.5).s().p("ArXDyQBphEB+ATQAdAEA9AEQBBAFAqAGQBLAKBIAPIA8AMQDSgKCThBQB1gzBihjQAygxBghsQBVhgBLhaIAxg5IAtg0IgPA0QgjBig7BhQhZCNiSCYQizC6llA1QiQAViPgHQiHgHhbgeQiUgviFBNQgrAZgeAgIgNAOQA5h8Bgg/g");
	this.shape_35.setTransform(-17.3,-22.775);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#DE4A07","#030D74"],[0,1],107.3,5,-107.6,5).s().p("ACAJSQgjgogcgZQgzgthOgUQgpgKg0AJQgTAEhKAVQh5AihNgkQgwgWglgrQgXgbgjg5Qgkg8gVgaQgkgsgvgZQhZgviAAxQgrAQglAXQgfAUABAGIgCAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQABgEAIgKIAKgMQAeghAsgZQCEhOCUAyQBbAeCGAHQCQAICRgVQFkgzCzi6QCTiZBXiNQA8hhAkhhQBSAEBcgJIDEgYQALKQhxEpQhIC6hyAcQggAIgdgRQgRgJgjghQhNhIhMgIQhUgKiUBdIhdA6QgdAQgPAAQgGAAgEgDgAJxo2IAjgBIgxA4QAKgiAEgVg");
	this.shape_36.setTransform(0.1577,-3.6735);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.4,4.8,-90.3,4.8).s().p("ArXDwQBohEB/AVQAdAFA9AFQBAAEAqAGQBKALBJAPQA4ANAEgBQDUgMCSg/QB2g0BghhQAygyBghrQBXhjBJhXIAxg5IAtg0IgGAZIgJAbQgjBig8BgQhXCOiTCYQizC6lkA0QiSAViPgIQiGgIhcgeQiTgxiFBNQgrAageAgIgKAMQA3h6BghAg");
	this.shape_37.setTransform(-17.2,-23.125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#DE4A07","#030D74"],[0,1],107.2,5.1,-107.8,5.1).s().p("AB+JRQgigngdgYQg0gshPgUQgqgLg1AKQgSADhLAUQh5AhhOgkQgvgXglgrQgWgbgig5Qgjg8gVgaQgkgtgugZQhZgvh/AxQgrAQgkAYQggAUABAGQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgDIAFgKIAKgNQAeggAsgaQCEhOCSAyQBbAfCHAIQCPAJCSgVQFlgzCzi5QCSiZBYiNQA8hhAjhhQBTAEBbgJIDFgZQAKQ2kjBUQggAJgdgPQgSgJgjggQhQhHhMgHQhVgIiVBaIhfA5QgeARgOAAQgGAAgEgEgAJwo2IAjAAIgxA4QAKgiAEgWg");
	this.shape_38.setTransform(0.34,-3.8485);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.3,5,-90.3,5).s().p("ArYDuQBphFCAAXQAfAFA6AFQBCAEAoAGQBLALBHAQIA8ANQDWgNCRg/QB4gzBehgQAxgyBghsQBVhhBLhZIAyg4IAug1IgQA1QgjBhg9BhQhXCNiTCYQiyC6llAzQiTAViOgJQiHgIhbgfQiTgyiDBOQgtAagdAgIgLANQA3h8Bgg/g");
	this.shape_39.setTransform(-17.15,-23.3375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#DE4A07","#030D74"],[0,1],107.1,5.3,-107.9,5.3).s().p("AB9JRQgigngdgXQg2grhRgUQgqgKg1AJQgRADhNAUQg7APgmABQg2ABgwgXQgwgXgjgrQgWgbghg6Qgig8gUgbQgkgtgugZQiKhLi6CQQgBgCACgFIAFgLIAKgMQAdghAsgaQCEhPCSA0QBZAgCIAJQCPAJCTgVQFmgxCyi6QCSiYBYiOQA7hfAkhjQBUAFBagJIDGgZQACKVhnEdQg+CthwAlQgfALgegPQgSgIgkgfQhShGhMgGQhVgIiZBZIhfA4QgeAPgOAAQgGAAgEgCgAJvo0IAjgBIgxA5QAKgjAEgVg");
	this.shape_40.setTransform(0.423,-4.0067);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.3,5.3,-90.4,5.3).s().p("ArZDrQBqhFCAAYQAgAHA5AEQBDAFAnAGQBKALBHARIA8ANQDYgPCRg9QB5gzBchfQAyg0BehrQBbhmBGhTIAxg4QAug3AAACQgJAjgHASQgkBig7BfQhYCOiSCYQiyC6lmAyQiTAUiPgJQiIgJhZggQiSg0iEBQQgsAagdAhIgKAMQA1h8BghAg");
	this.shape_41.setTransform(-17.0875,-23.566);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#DE4A07","#030D74"],[0,1],107,5.5,-108,5.5).s().p("AB8JQQgiglgegXQg3gphSgVQgqgKg2AIQgSADhNATQh6AfhNgmQgvgXgjgsQgWgbggg7Qghg8gUgaQgigugugZQiLhMi4CRIAAgEIABgDIAEgLIAKgMQAdghAsgaQCFhQCQA1QBZAhCIAJQCPAKCTgUQFngxCyi5QCRiYBZiOQA6hfAmhjQBSAFBbgJQA5gGCOgTQgEKXhhEXQgkBogyA0QggAigxASQggAMgegNQgSgIglgdQhUhFhMgGQhWgGibBXIhhA2QgdAPgOAAQgGAAgEgCgAJuo0IAjAAIgxA4QAKgiAEgWg");
	this.shape_42.setTransform(0.5167,-4.1567);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.2,5.5,-90.4,5.5).s().p("ArZDoQBrhFB/AaQAhAHA5AFQBEAGAlAFQBJALBIARIA7AOQDbgRCPg7QB8g0BYheQAygzBehrQBbhmBGhTIAyg5IAug0IgQA1QglBjg7BeQhYCOiRCXQiyC7lnAxQiTAUiQgKQiIgJhYghQiRg2iEBQQgsAbgdAhIgKAMQA0h9BhhAg");
	this.shape_43.setTransform(-17.05,-23.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#DE4A07","#030D74"],[0,1],106.9,5.7,-108,5.7).s().p("AB7JOQgygvgOgKQg4gohTgVQgrgKg2AIQgRADhPASQh6AdhNgmQgvgYgjgsQgVgbgfg7Qggg8gUgbQgigtgtgaQiKhMi4CSQgBgBACgGIAFgMIAJgKQAdgiAsgbQCFhRCPA3QBYAhCIAKQCPALCUgUQFogvCyi6QCRiXBYiPQA6hdAmhkQBTAFBagJQA5gGCPgUQgIKahcEQQgiBngwAzQgeAggxAVQgfANgegLQgTgIgmgdQhWhDhNgFQhWgFidBUIhjA1QgeAPgOAAQgGAAgDgDgAJtoyIAkgBIgxA4QAKgiADgVg");
	this.shape_44.setTransform(0.5833,-4.365);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.2,5.8,-90.5,5.8).s().p("ArZDmQBqhGCBAdQAhAHA4AFQBEAGAkAFQBJAMBIARQA4AOADAAQDdgSCOg6QB9gzBXhdQAyg1BehqQBchnBFhSIAxg4IAvg0QgKAjgGARQgnBkg5BdQhZCPiQCXQiyC6loAwQiUAUiPgLQiIgKhYgiQiQg2iFBRQgsAbgdAhIgJALQA0h9BhhAg");
	this.shape_45.setTransform(-16.9625,-24.1009);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#DE4A07","#030D74"],[0,1],106.9,5.8,-108.1,5.8).s().p("AB7JNQgqgogXgQQg6gmhUgVQgrgKg3AIQgQAChQASQh7AchNgoQgugYgigsQgVgbgeg7Qgfg9gUgaQghgugugaQiJhNi2CTQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBABAAIABgDIAFgNIAJgKQAdgiAsgbQCFhSCOA4QBXAjCJALQCPALCUgTQFpgvCyi6QCQiYBYiPQA6hdAnhjQBTAGBagKQA4gFCRgVQgOKdhWEJQghBlgtAyQgbAegxAYQggAPgegLQgUgHgmgbQhZhChMgEQhYgFifBTIhjA0QgfAOgNAAQgHAAgCgDgAJtoyIAkAAIgyA4QAKgiAEgWg");
	this.shape_46.setTransform(0.6438,-4.5127);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.1,6,-90.5,6).s().p("AraDjQBshGCAAeQAiAIA3AFQBFAGAiAGQBJALBIASQA4APAEgBQDfgTCNg5QB9gzBWhcQCAiKCxjOIAxg4IAug0QgJAjgHASQgnBjg5BdQhZCPiQCXQixC7lpAvQiVATiPgLQiIgLhXgjQiPg4iFBSQgsAbgdAiIgIALQAyh+BhhAg");
	this.shape_47.setTransform(-16.9375,-24.3375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#DE4A07","#030D74"],[0,1],106.9,6,-108.1,6).s().p("AB7JMQgigigfgUQg7glhWgVQgrgKg4AHQgPAChRASQh7AahOgoQgugYghgtQgUgbgeg7Qgeg9gTgbQgggugugaQiIhOi2CVIgBAAIAAAAIgDgBIAAAAIAAgBIAAgBIACgHIAHgJIAEgFIAEgFIAAAAQAdgiAsgcQCGhTCNA6QBXAjCIAMQCPALCVgSQFqguCyi6QCPiXBZiQQA4hbAohlQBTAGBagJQA4gGCSgVQgTKghRECQgeBjgrAxQgZAcgxAbQgfARgfgKQgVgGgmgbQhbhBhMgDQhZgDiiBQIhkAzQgfAOgOAAQgFAAgDgDgAJtoxIAkAAIgxA4QAJgiAEgWg");
	this.shape_48.setTransform(0.6,-4.6732);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#DE4A07","#7B2617"],[0,1],87.1,6.3,-90.6,6.3).s().p("AttGeQAyh9BhhAQBshHCBAgQAiAJA2AFQBHAHAgAFQBJAMBHASQA4APAEAAQDhgWCMg3QB/gzBThbQCAiKCxjOIAyg4IAug0QgJAjgHASQgoBlg5BbQhYCQiQCWQixC7lqAuQiVASiPgLQiJgMhWgjQiOg6iFBTQgsAcgdAiIgBAAIgDAFIgEAFIAAgBg");
	this.shape_49.setTransform(-16.8625,-24.5634);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#DE4A07","#030D74"],[0,1],106.7,6.1,-108.3,6.1).s().p("AB5JLQhIhLiNgiQgsgKg4AHQgOAChTARQh8AZhMgpQgvgZgggtQgUgbgdg8Qgdg9gSgbQghgugtgaQiIhPi1CWQgCgCADgEIAFgOIAHgJQAdgjAtgcQCFhUCNA8QBVAkCJAMQCPANCVgTQFrgtCxi6QCPiXBZiPQA4hbAphmQBTAHBZgJQA5gGCTgVQgZKjhLD7QgdBhgoAwQgXAbgxAdQgfASgfgIQgVgGgmgaQhfhAhMgCQhZgCikBPIhmAxQggAOgNAAQgFAAgCgDgAJrowIAkAAQggAigSAWQAKgiAEgWg");
	this.shape_50.setTransform(0.8306,-4.8336);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#DE4A07","#7B2617"],[0,1],87,6.6,-90.6,6.6).s().p("AraDfQBshICBAiQAjAKA1AFQBIAHAfAFQBJANBHATQA4APADgBQDkgXCKg2QCBgyBRhbQCxjDCAiVQASgVAfgjIAvgzQgKAjgGARQgpBmg4BaQhZCQiPCWQiyC7lqAtQiWATiOgNQiJgMhWglQiMg7iGBUQgsAcgdAiIgIAJQAxh9BihAg");
	this.shape_51.setTransform(-16.8125,-24.875);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#DE4A07","#030D74"],[0,1],106.8,6.3,-108.2,6.3).s().p("AB5JKQhChGiWgkQgsgLg4AHQgOAChUAQQh8AYhMgpQgvgZggguQgTgbgcg8Qgbg+gTgbQgfgugugaQiHhQi0CYIAAAAIgBAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQAAgBAAAAIAAgBIACgGIAHgKIAHgKIABgBQAdgjAsgcQCFhVCMA9QBUAmCKAMQCPANCVgSQFsgsCyi6QCOiWBZiQQA2hYArhoQBTAHBZgJQA4gGCVgWQgeKmhFD0QgcBggmAvQgUAYgxAgQgfAUgfgIQgWgFgngYQhhg/hMgBQhagBimBNIhoAvQgfAOgNAAQgFAAgDgDgAJsovIAkAAIgyA3QAKgiAEgVg");
	this.shape_52.setTransform(0.75,-4.9815);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#DE4A07","#7B2617"],[0,1],87,6.7,-90.7,6.7).s().p("AttGbQAwh/BjhBQBthICBAkQAjAKA1AGQBHAHAfAFQBJANBGATQA4AQADgBQDngZCJg0QCCgyBQhaQC8jTB0iFIAxg4IAvgzQgKAjgGARQgsBog1BYQhaCRiOCVQiyC7lrAsQiWASiPgNQiJgNhUglQiMg9iGBVQgsAcgdAjIgBABIgHAJIAAAAg");
	this.shape_53.setTransform(-16.8,-25.025);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#DE4A07","#030D74"],[0,1],106.5,6.4,-108.4,6.4).s().p("AB3JJQgWgYgtgYQg+ghhagWQgtgLg4AHIhjARQh8AWhNgqQgugZgfguQgTgcgag8Qgbg9gSgcQgfgugtgbQiHhPi0CYQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIACgDIAFgPIAHgIQAcgjAtgdQCHhWCKA/QBUAmCJANQCOAOCXgSQFsgrCxi6QCOiXBZiQQA3hYArhoQBUAIBYgJQA4gGCVgWQgjKrhADrQgZBegkAtQgRAXgxAiQgfAWgggGQgWgEgngYQgygegZgLQgxgUg1gBQhaAAipBLIhoAvQgfANgNAAQgGAAgCgDgAJqouIAjAAIgxA3QAKgiAEgVg");
	this.shape_54.setTransform(0.9833,-5.1292);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#DE4A07","#7B2617"],[0,1],86.9,7.1,-90.7,7.1).s().p("ArbDaQBuhJCCAmQAjAKA0AGQBHAHAfAGQBIAMBHAVQA3APADAAQDrgbCGgzQCDgxBOhZQDskLBEhOIAxg3IAvg0QgJAkgHAQQgrBog3BZQhZCPiOCWQixC8lsArQiXARiOgOQiJgNhUgmQiKg/iHBWQgtAdgcAjIgHAIQAwh9BhhBg");
	this.shape_55.setTransform(-16.7125,-25.35);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#DE4A07","#030D74"],[0,1],106.4,6.6,-108.5,6.6).s().p("AB2JIQgTgWgxgYQg+gghcgWQgtgLg5AGQgMABhXAPQh9AVhMgqQgugagfguQgSgcgag8Qgag+gRgbQgfgvgsgbQiHhQizCZQgCgCACgEIAFgOIAHgJQAdgjAtgdQCGhXCJBAQBTAnCKAOQCOAPCXgSQFtgqCyi6QCNiWBZiRQA1hWAthpQBUAIBYgKQA4gGCWgWQgoKvg7DjQgXBcgiAsQgPAVgwAlQgfAYgggFQgWgEgogXQg0gegYgJQgygVg1ABQhcABirBJIhqAtQggANgMAAQgFAAgCgDgAJpotIAkAAIgyA3QAKgiAEgVg");
	this.shape_56.setTransform(1.0875,-5.2897);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#DE4A07","#7B2617"],[0,1],86.9,7.3,-90.8,7.3).s().p("ArbDXQBvhJCCAoQAjAKA0AGQBHAIAeAGQBIANBGAUQA3AQADAAQDugdCEgxQCEgxBMhYIEwlZIAyg3QAvg1AAABQgKAkgHARQgsBpg1BWQhZCRiOCVQixC7ltAqQiXASiPgPQiJgOhTgnQiJhAiHBXQgtAdgcAjIgHAJQAvh/BihBg");
	this.shape_57.setTransform(-16.675,-25.5771);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.4,-66.2,215,131.10000000000002);


(lib.Group_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AFJA3QgGgGAAgHQAAgHAGgGQAEgFAIAAQAHAAAGAFQAFAGAAAHQAAAHgFAGQgGAFgHAAQgIAAgEgFgADXA3QgGgGABgHQgBgHAGgGQAFgFAIAAQAGAAAGAFQAGAGAAAHQAAAHgGAGQgGAFgGAAQgIAAgFgFgABmA3QgGgGAAgHQAAgHAGgGQAFgFAHAAQAIAAAFAFQAFAGAAAHQAAAHgFAGQgFAFgIAAQgHAAgFgFgAgLA3QgFgGAAgHQAAgHAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAHQAAAHgFAGQgFAFgIAAQgHAAgFgFgAh+A3QgGgGABgHQgBgHAGgGQAFgFAIAAQAGAAAGAFQAGAGAAAHQAAAHgGAGQgGAFgGAAQgIAAgFgFgAjvA3QgGgGAAgHQAAgHAGgGQAFgFAHAAQAIAAAFAFQAFAGAAAHQAAAHgFAGQgFAFgIAAQgHAAgFgFgAlhA3QgFgGAAgHQAAgHAFgGQAFgFAIAAQAIAAAFAFQAFAGAAAHQAAAHgFAGQgFAFgIAAQgIAAgFgFgAFJgcQgGgFAAgIQAAgHAGgFQAEgGAIAAQAHAAAGAGQAFAFAAAHQAAAIgFAFQgGAFgHAAQgIAAgEgFgADXgcQgGgFABgIQgBgHAGgFQAFgGAIAAQAGAAAGAGQAGAFAAAHQAAAIgGAFQgGAFgGAAQgIAAgFgFgABmgcQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFgAgLgcQgFgFAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFgAh+gcQgGgFABgIQgBgHAGgFQAFgGAIAAQAGAAAGAGQAGAFAAAHQAAAIgGAFQgGAFgGAAQgIAAgFgFgAjvgcQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFgAlhgcQgFgFAAgIQAAgHAFgFQAFgGAIAAQAIAAAFAGQAFAFAAAHQAAAIgFAFQgFAFgIAAQgIAAgFgFg");
	this.shape.setTransform(35.9,118.225);

	this.instance = new lib.CompoundPath_0();
	this.instance.setTransform(615.9,55.3,1,1,0,0,0,32.9,55.3);
	this.instance.compositeOperation = "overlay";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,648.8,124.2), null);


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

	// timeline functions:
	this.frame_109 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// Layer_8
	this.instance = new lib.CompoundPath();
	this.instance.setTransform(624,343);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110));

	// Layer_5
	this.instance_1 = new lib.Symbol54();
	this.instance_1.setTransform(500,300,1,1,0,0,0,500,300);
	this.instance_1.alpha = 0.5313;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},50).wait(60));

	// Layer_6
	this.instance_2 = new lib.Symbol53();
	this.instance_2.setTransform(289.1,251.9,1,1,0,0,0,259.1,251.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:259.1},108,cjs.Ease.quadOut).wait(2));

	// Layer_7
	this.instance_3 = new lib.Symbol52();
	this.instance_3.setTransform(297.4,201.6,1,1,0,0,0,317.4,211.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:317.4,y:211.6},108,cjs.Ease.quadOut).wait(2));

	// Layer_9
	this.instance_4 = new lib.Symbol55();
	this.instance_4.setTransform(530,242.8,1,1,0,0,0,500,232.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:500,y:232.8},108,cjs.Ease.quadOut).wait(2));

	// Layer_11
	this.instance_5 = new lib.Symbol60();
	this.instance_5.setTransform(508.45,464.25,1,1,0,0,0,431.6,135.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:568.45},108).wait(2));

	// Layer_3
	this.instance_6 = new lib.Symbol58();
	this.instance_6.setTransform(799.35,235.1,1,1,0,0,0,200.7,235.1);

	this.instance_7 = new lib.Group_0();
	this.instance_7.setTransform(618.1,491.55,1,1,0,0,0,324.4,62.1);
	this.instance_7.alpha = 0.4883;
	this.instance_7.compositeOperation = "overlay";

	this.instance_8 = new lib.CompoundPath_1();
	this.instance_8.setTransform(253.45,295.75);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F93801","#FAD223"],[0,1],-53.2,-299.4,42.4,369.8).s().p("EgtQAdMQgOjNADiYQAEjAAdiiQAmjPBTitQBbi+CJiEQCWiQC7g/QDHhBDCArQBlAXCIBDIDjB0QCHA/BrAPQCMAUBugxQBogtBJhpQA9hYAih+QAYhaAPiMIAYjqQAmkPB3j7QB4j7C7jHQC7jIDziGQD0iGENgzQCcgdCnAAQDBABC8ArQC+AsCsBUQD2B4DGDDQDHDEB6D1QB7D1AkETQAlEVg2ELQg3EMiODwQiPDvjSCvQjTCvkFBgQkHBgkRACQkSACkGheQkIhejSivIh5hpQhIg9g6ghQhLgshJgMQhXgOhHAeQhNAggwBMQgrBDgKBaQgIBNATBZQAQBIAkBYIBFCZQAqBdAVA+QAbBTAGBGg");
	this.shape.setTransform(377.8536,413.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F93801","#FAD223"],[0,1],-676.9,-405.5,1000.7,599.4).s().p("EhN3Au4QgHAAgFgDQgEgDAAgEMAAAhdaQAAgEAEgEQAFgDAHAAMCbvAAAQAGAAAFADQAFAEAAAEMAAABdaQAAAEgFADQgFADgGAAg");
	this.shape_1.setTransform(500,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(110));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-10,1050,610);


(lib.Symbol41 = function(mode,startPosition,loop,reversed) {
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
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Layer_2
	this.instance = new lib.PuppetShape_6copy3("synched",1,false);
	this.instance.setTransform(45,58.6);

	this.instance_1 = new lib.PuppetShape_6copy5("synched",1,false);
	this.instance_1.setTransform(45,58.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.PuppetShape_5copy2("synched",1,false);
	this.instance_2.setTransform(45,58.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_2}]},30).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({_off:true},30,cjs.Ease.quintOut).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01003B").s().p("Ag2BKQAXgIAWgOQBCgvARhVQgBAhgSAkQgnBIhZAUg");
	this.shape.setTransform(35.65,90.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01003B").s().p("AgxgKQgMgWgFgaIgDgUQASBVBCAuQAdATAaAHQhTgVgkhEg");
	this.shape_1.setTransform(53.3375,90.2875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01003B").s().p("AATgfIAAAJIglA2g");
	this.shape_2.setTransform(53.225,41.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#01003B").s().p("AAlhtIAAAXIhJDEg");
	this.shape_3.setTransform(49.5,60.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18367D").s().p("AgiBSQASiiAgiJIAeBkIglBAIASA0IhJDbQADg2AJhSg");
	this.shape_4.setTransform(50.45,50.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#081858").s().p("AhGD7Qgmg+AJiFQAHhvAcihQAOhRAMg7QBCAXAsAbQAWAOAIAKQgWAigFA/QgCAhACAYIgMApQgNA4gHBOQgGBRASBeQAMA+APAkQAGAPgCAMQgCAGgCAEQh0gvgkg7g");
	this.shape_5.setTransform(55.9215,63.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#01003B").s().p("AgSgWIAAgJIAlA/g");
	this.shape_6.setTransform(36.275,41.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#01003B").s().p("AgkhVIAAgYIBJDbg");
	this.shape_7.setTransform(40,60.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18367D").s().p("AgagBIASg0IgmhAIAfhkQAgCJASCiQAJBSADA2g");
	this.shape_8.setTransform(39.05,49.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#081858").s().p("AhUFbQgDgMAGgQQAPgjAMg/QAShdgGhRQgGhNgOg5IgMgpQACgZgCgfQgFhAgWgjIAegXQAsgcBCgWIAaCLQAcCiAHBvQAJCFglA9QglA8h0AvQgCgDgBgHg");
	this.shape_9.setTransform(33.5794,63.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E5E6E7").s().p("AgiAVIAvg8IAXAQIg8A/g");
	this.shape_10.setTransform(48.5,30.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E5E6E7").s().p("AgjgXIAYgQIAuA8IgKATg");
	this.shape_11.setTransform(41,30.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DE4A07").s().p("AgWC5IAPmGIgDgUIAKgSQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIAKASIgGASIAPGJIgTA7g");
	this.shape_12.setTransform(44.6,57.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhOESIAModIACgCQAGgDAUAAQAEAAASAaQARAbAFAAQADAAATgbQASgbAFABQAOABAOAFIAAIcg");
	this.shape_13.setTransform(44.175,54.9995);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#61390D").s().p("AhiAKIAAgSIDFAAIAAASg");
	this.shape_14.setTransform(44.325,84.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(41));

	// Layer_8
	this.instance_3 = new lib.Symbol47();
	this.instance_3.setTransform(44.6,134.4,1,1,0,0,0,36.4,53);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41));

	// Layer_9
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#01003B").s().p("AhPAUIhyAGIApgaQA6gcBZACQBZACA/AZQAhANANANQiFgKiLADg");
	this.shape_15.setTransform(44.75,96.8932);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(41));

	// head
	this.instance_4 = new lib.Symbol46("synched",0);
	this.instance_4.setTransform(46.15,16.05,1,1,9.9414,0,0,14.2,16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({startPosition:0},0).to({regY:16.8,rotation:0,x:44.05,y:16.8},21).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,-1.8,89.8,189.20000000000002);


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

	// timeline functions:
	this.frame_60 = function() {
		if (myCounter2++ >=12){
			this.stop();
		};
		
		console.log(myCounter2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

	// Layer_2
	this.instance = new lib.Symbol41();
	this.instance.setTransform(192.85,93.7,1,1,0,0,0,45,93.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61));

	// Layer_7
	this.instance_1 = new lib.PuppetShape_1("synched",1,false);
	this.instance_1.setTransform(215.15,35.8,1,1,0,0,0,107.6,-64.7);

	this.instance_2 = new lib.PuppetShape_4("synched",1,false);
	this.instance_2.setTransform(214.25,34.25,0.9543,0.9687,-5.9593,0,0,107.4,-65.2);
	this.instance_2._off = true;

	this.instance_3 = new lib.PuppetShape_1copy("synched",1,false);
	this.instance_3.setTransform(215.15,35.8,1,1,0,0,0,107.6,-64.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},29).to({state:[{t:this.instance_3}]},31).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,regX:107.4,regY:-65.2,scaleX:0.9543,scaleY:0.9687,rotation:-5.9593,x:214.25,y:34.25},29).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},29).to({_off:true,regX:107.6,regY:-64.7,scaleX:1,scaleY:1,rotation:0,x:215.15,y:35.8},31).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.8,232.9,195.4);


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
	this.instance = new lib.Symbol39();
	this.instance.setTransform(110.45,-494.95,1.3107,1.3105,0,0,0,118.5,96);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:118.9,regY:96.3,scaleX:1,scaleY:1,x:118.9,y:96.3},22,cjs.Ease.quintOut).wait(338));

	// Layer_6
	this.instance_1 = new lib.Path();
	this.instance_1.setTransform(189.05,186,1,1,0,0,0,40.6,6.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({alpha:0.3086},10,cjs.Ease.quintOut).wait(335));

	// Layer_2
	this.instance_2 = new lib.Symbol40("synched",0);
	this.instance_2.setTransform(191.9,303.05,1.7394,1.7394,0,0,0,82.2,37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:37.7,scaleX:1,scaleY:1,y:198.35},22,cjs.Ease.quintOut).wait(338));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.6,-624.4,379.40000000000003,992.9);


// stage content:
(lib.KnowledgeCity_160x600_v1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,340];
	// timeline functions:
	this.frame_0 = function() {
		//this.bg.gotoAndPlay(1);
	}
	this.frame_340 = function() {
		if (myCounter++ >=2){
			this.stop();
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(340).call(this.frame_340).wait(1));

	// char
	this.instance = new lib.Symbol38();
	this.instance.setTransform(23.15,484.9,1.0218,1.0222,0,0,0,137.9,122.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(340));

	// text2
	this.instance_1 = new lib.Symbol56();
	this.instance_1.setTransform(18.05,165,1.118,1.118,0,0,0,-23.4,156);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(175).to({_off:false},0).wait(1).to({regX:31.9,regY:160.3,x:79.85,y:169.8,alpha:0.0687},0).wait(1).to({alpha:0.1382},0).wait(1).to({alpha:0.2077},0).wait(1).to({alpha:0.2766},0).wait(1).to({alpha:0.3439},0).wait(1).to({alpha:0.4092},0).wait(1).to({alpha:0.4717},0).wait(1).to({alpha:0.5312},0).wait(1).to({alpha:0.5872},0).wait(1).to({alpha:0.6397},0).wait(1).to({alpha:0.6885},0).wait(1).to({alpha:0.7337},0).wait(1).to({alpha:0.7754},0).wait(1).to({alpha:0.8137},0).wait(1).to({alpha:0.8488},0).wait(1).to({alpha:0.8807},0).wait(1).to({alpha:0.9097},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.9597},0).wait(1).to({alpha:0.981},0).wait(1).to({regX:-23.4,regY:156,x:18.05,y:165,alpha:1},0).wait(145));

	// text
	this.instance_2 = new lib.Symbol44();
	this.instance_2.setTransform(250,65.55,1,1,0,0,0,208.6,41.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(154).to({alpha:0},17,cjs.Ease.quadOut).to({_off:true},1).wait(155));

	// call to action.svg
	this.instance_3 = new lib.Symbol57();
	this.instance_3.setTransform(80.8,300.2,0.217,0.2165,0,0,0,49.8,8.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({_off:false},0).to({scaleX:1.2789,scaleY:1.2761},22,cjs.Ease.backOut).wait(209).to({regX:50,regY:8.7,scaleX:1.3952,scaleY:1.3922,x:81.1,y:300.4},8).to({regX:49.8,regY:8.6,scaleX:1.2789,scaleY:1.2761,x:80.8,y:300.2},8).wait(6).to({regX:50,regY:8.7,scaleX:1.3952,scaleY:1.3922,x:81.1,y:300.4},8).to({regX:49.8,regY:8.6,scaleX:1.2789,scaleY:1.2761,x:80.8,y:300.2},8).wait(1));

	// logo
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(82.65,39.1,0.3513,0.3479,0,0,0,196.2,49.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(341));

	// bg
	this.bg = new lib.ClipGroup();
	this.bg.name = "bg";
	this.bg.setTransform(-255.2,300,1,1,0,0,0,500,300);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(341));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-695.2,21.5,970,714.9);
// library properties:
lib.properties = {
	id: '4C67F3A136A92E4E81338A9018FE5B2A',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CompoundPath.png", id:"CompoundPath"},
		{src:"images/CompoundPath_1.png", id:"CompoundPath_1"}
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