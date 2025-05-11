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


(lib.Symbol92 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#231F20").s().p("ACDBmIAAhvQAAgdgOgPQgNgPgZAAQgRAAgPAIQgOAHgHAPQgIAPAAAWIAABnIgjAAIAAhvQAAgdgOgPQgNgPgZAAQgRAAgPAIQgNAHgIAPQgIAOAAAXIAABnIgkAAIAAjJIAjAAIAAAfQAJgNAOgJQAUgLAaAAQAdAAAVAPQAMAIAHAOQAJgNAQgKQAXgOAeAAQAYAAATAKQASAJALAUQAKATAAAeIAABzg");
	this.shape.setTransform(443.349,21.8664,0.5775,0.5779);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgwBaQgYgOgOgXQgNgXAAgeQAAgeANgWQAMgXAYgOQAXgNAcAAQAcAAAXANQAXANANAYQAMAYAAAdIAAAFIgBAGIiiAAQACAOAHAMQAIAPASAJQAPAJAWAAQASAAAPgGQAOgGALgMIAUAXQgNAPgVAKQgTAIgaAAQgfAAgZgNgAggg+QgPAIgIAQQgHALgBAOICAAAQgBgOgGgMQgIgPgPgIQgOgJgUAAQgTAAgOAJg");
	this.shape_1.setTransform(425.216,21.9241,0.5775,0.5779);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgTBsQgRgQAAgfIAAhuIgiAAIAAgeIAiAAIAAgsIAkAAIAAAsIA5AAIAAAeIg5AAIAABsQAAARAIAIQAIAJAPAAQARAAAMgJIALAaQgIAHgMADQgLAEgNAAQgdAAgRgQg");
	this.shape_2.setTransform(414.4604,20.7105,0.5775,0.5779);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgwBgQgYgHgMgKIAPgdQANAJATAGQATAGASAAQAaAAALgHQAMgHAAgNQgBgJgGgGQgIgGgKgCIgZgFIgagFQgOgEgMgFQgLgFgHgKQgHgLAAgRQAAgTALgNQAKgOATgHQASgIAZAAQAVAAATAFQAVAFANAJIgQAcQgNgIgPgEQgSgEgMAAQgWAAgNAIQgMAHAAANQABALAGAFQAHAGALADIA0AKQANADAMAFQAMAGAGAKQAHALAAAQQAAASgLAOQgLAOgTAGQgTAIgaAAQgaAAgVgHg");
	this.shape_3.setTransform(404.7009,21.9241,0.5775,0.5779);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AhWCGQgOgFgJgJIAPgbQAJAHAHAEQAJADALAAQANAAAJgGQAIgHAJgSIAGgOIhZjIIAmAAIBFCgIBGigIAjAAIhhDdQgKAWgJALQgLANgMAEQgOAGgPAAQgPAAgNgFg");
	this.shape_4.setTransform(393.2667,24.1202,0.5775,0.5779);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("Ag6B+QgbgIgQgPIAOgeQAPANAXAJQAZAJAYAAQAXAAAOgGQAPgGAGgIQAHgKAAgMQAAgNgJgIQgJgJgOgFQgOgFgRgEQgQgEgSgFQgQgEgPgIQgOgHgJgOQgJgOAAgVQAAgUALgSQAMgSAVgKQAXgKAiAAQAXAAAXAGQAWAGARAMIgMAeQgRgMgTgFQgUgFgRAAQgVAAgPAGQgOAFgHAKQgHAKAAAMQAAANAJAIQAIAJAPAFQAPAFAQAEIAiAJQARAFAPAHQAOAIAJANQAIANAAAVQAAAVgLAQQgKASgYAKQgWALgjAAQgfAAgbgKg");
	this.shape_5.setTransform(380.9807,20.0604,0.5775,0.5779);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgTBsQgQgRAAgeIAAhuIgjAAIAAgeIAjAAIAAgsIAjAAIAAAsIA5AAIAAAeIg5AAIAABsQAAARAIAIQAIAJAPAAQARAAAMgJIALAaQgIAHgMADQgLAEgNAAQgdAAgRgQg");
	this.shape_6.setTransform(364.046,20.7105,0.5775,0.5779);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AA7BmIAAhvQAAgdgOgPQgOgPgaAAQgSAAgPAIQgOAHgJAPQgHAPAAAWIAABnIglAAIAAjJIAjAAIAAAfQAKgNAPgJQAUgLAbAAQAZAAASAKQAUAKAKATQALATAAAeIAABzg");
	this.shape_7.setTransform(352.4097,21.8664,0.5775,0.5779);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgwBaQgYgOgOgXQgNgXAAgeQAAgdANgXQANgXAXgOQAXgNAcAAQAdAAAXANQAWANANAYQAMAXAAAeIAAALIiiAAQABAOAHAMQAJAPARAJQAQAJAVAAQATAAAOgGQAPgGAKgMIAVAXQgOAQgUAJQgVAIgZAAQgeAAgagNgAggg+QgPAIgIAQQgGALgCAOICAAAQgBgNgGgNQgJgPgOgIQgOgJgUAAQgTAAgOAJg");
	this.shape_8.setTransform(338.3913,21.9241,0.5775,0.5779);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("ACDBmIAAhvQAAgdgOgPQgOgPgZAAQgRAAgOAIQgOAHgIAPQgHAPAAAWIAABnIgjAAIAAhvQAAgdgOgPQgNgPgZAAQgRAAgPAIQgOAHgHAPQgIAPAAAWIAABnIgkAAIAAjJIAjAAIAAAeQAJgNAOgIQATgLAbAAQAcAAAWAPQAMAIAHAOQAJgNAPgKQAYgOAeAAQAZAAARAKQAUAKAKATQAKATAAAeIAABzg");
	this.shape_9.setTransform(320.3738,21.8664,0.5775,0.5779);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgwBaQgYgOgOgXQgNgXAAgeQAAgdANgXQANgXAXgOQAXgNAcAAQAdAAAWANQAXANANAYQAMAXAAAeIAAALIijAAQACAOAHAMQAIAPASAJQAPAJAWAAQASAAAPgGQAOgGALgMIAUAXQgNAPgVAKQgTAIgaAAQgeAAgagNgAggg+QgPAIgIAQQgHALgBAOICAAAQgBgNgGgNQgJgPgOgIQgOgJgUAAQgTAAgOAJg");
	this.shape_10.setTransform(302.2119,21.9241,0.5775,0.5779);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("Ag0CEQgZgIgRgOIARgdQANAMAWAIQAVAHAVAAQAkAAAQgRQARgQAAgjIAAgQQgLANgOAHQgWALgYAAQgeAAgXgMQgWgMgOgWQgOgWAAgcQAAgdAOgXQANgVAXgNQAYgMAdAAQAYAAAWALQAQAIALAOIAAgfIAjAAIAACtQAAA1gbAaQgbAZgzAAQgbAAgagIgAgihjQgPAIgKAPQgJAPAAAUQAAATAJAPQAJAOAQAIQAPAIAUAAQAVAAAOgIQAQgIAJgOQAJgPAAgTQAAgUgJgPQgKgPgPgIQgOgIgVAAQgUAAgPAIg");
	this.shape_11.setTransform(287.6015,24.0624,0.5775,0.5779);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgzBfQgRgHgJgOQgKgNAAgRQAAgQAIgOQAIgNASgHQAQgIAfAAIA5AAIAAgIQAAgWgNgNQgOgNgaAAQgRAAgSAGQgSAGgLAKIgPgcQAQgNAWgGQAXgHAVAAQApAAAXAUQAXAVAAApIAAB5IgjAAIAAgbQgHALgNAHQgSALgbAAQgXAAgQgIgAgpAUQgJAJAAANQAAAPALAJQAMAJAVAAQAUAAAPgJQAPgJAHgSIAAgcIg3AAQgcAAgJAJg");
	this.shape_12.setTransform(273.8285,21.9241,0.5775,0.5779);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AA7BmIAAhvQAAgdgPgPQgNgPgaAAQgSAAgPAIQgPAHgIAPQgHAPAAAWIAABnIgkAAIAAjJIAiAAIAAAfQAJgNAQgJQAUgLAbAAQAZAAASAKQATAJALAUQALATAAAeIAABzg");
	this.shape_13.setTransform(260.4742,21.8664,0.5775,0.5779);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgzBfQgRgHgKgOQgJgNABgRQAAgRAHgNQAHgNATgHQARgIAeAAIA5AAIAAgIQAAgWgNgNQgOgNgaAAQgRAAgSAGQgSAGgLAKIgPgcQAQgMAWgHQAXgHAVAAQApAAAXAUQAWAVAAApIAAB5IgiAAIAAgbQgHALgOAHQgSALgbAAQgWAAgQgIgAgpAUQgKAJAAANQAAAPAMAJQAMAJAVAAQAUAAAPgJQAPgJAHgSIAAgcIg4AAQgbAAgJAJg");
	this.shape_14.setTransform(246.2104,21.9241,0.5775,0.5779);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("ABpCFIAAjCIhgCiIgRAAIhgigIAADAIgkAAIAAkJIAeAAIBvC6IBti6IAfAAIAAEJg");
	this.shape_15.setTransform(229.7809,20.0604,0.5775,0.5779);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("Ag0CEQgZgIgRgOIARgdQANAMAWAIQAVAHAVAAQAjAAASgRQAQgRAAgiIAAgQQgLANgOAHQgVALgaAAQgeAAgVgMQgXgMgOgWQgOgWAAgcQAAgdAOgXQANgVAYgNQAWgMAdAAQAZAAAWALQAQAIALAOIAAgfIAjAAIAACtQAAA1gbAaQgbAZgzAAQgcAAgZgIgAgihjQgQAIgJAPQgJAPAAAUQAAATAJAPQAIANARAJQAPAIAUAAQAUAAAQgIQAPgIAJgOQAJgPAAgTQAAgUgJgPQgKgPgOgIQgQgIgUAAQgTAAgQAIg");
	this.shape_16.setTransform(205.7287,24.0624,0.5775,0.5779);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AA7BmIAAhvQAAgdgOgPQgOgPgaAAQgSAAgPAIQgOAHgJAPQgHAPAAAWIAABnIglAAIAAjJIAjAAIAAAfQAKgNAPgJQAVgLAaAAQAZAAASAKQAUAKAKATQALATAAAeIAABzg");
	this.shape_17.setTransform(191.4937,21.8664,0.5775,0.5779);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgSCQIAAjIIAkAAIAADIgAgQhmQgIgGABgLQgBgKAIgHQAGgHAKAAQALAAAGAHQAIAHgBAKQAAAKgGAHQgGAGgMAAQgKABgGgHg");
	this.shape_18.setTransform(181.1279,19.4247,0.5775,0.5779);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AA7BmIAAhvQAAgdgOgPQgOgPgaAAQgSAAgPAIQgPAHgHAPQgIAPAAAWIAABnIglAAIAAjJIAjAAIAAAfQAKgNAPgJQAUgLAbAAQAZAAATAKQASAJALAUQALATAAAeIAABzg");
	this.shape_19.setTransform(170.8631,21.8664,0.5775,0.5779);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("Ag1BmIAAjJIAjAAIAAAiQAIgPAQgKQASgLAeAAIAAAkIgEgBIgEAAQgdAAgRASQgQARgBAgIAABlg");
	this.shape_20.setTransform(159.8476,21.8664,0.5775,0.5779);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgzBfQgRgIgKgNQgJgNAAgRQABgRAHgNQAIgNASgHQARgIAfAAIA4AAIAAgIQAAgWgNgNQgOgNgaAAQgRAAgSAGQgSAHgLAJIgPgcQAQgMAWgHQAXgHAWAAQAoAAAXAUQAWAVAAApIAAB5IgiAAIAAgaQgHAKgNAHQgTALgaAAQgWAAgRgIgAgpAUQgKAJABANQgBAPAMAJQAMAJAVAAQAUAAAPgJQAPgJAHgSIAAgcIg3AAQgcAAgJAJg");
	this.shape_21.setTransform(147.9803,21.9241,0.5775,0.5779);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgwBaQgYgOgOgXQgNgXAAgeQAAgeANgWQAMgXAYgOQAXgNAcAAQAcAAAXANQAXANAMAYQANAXAAAeIgBALIiiAAQACAOAHAMQAJAPARAJQAPAJAWAAQASAAAOgGQAPgGALgMIAUAXQgNAPgVAKQgTAIgaAAQgfAAgZgNgAggg+QgPAIgIAQQgHALgBAOICAAAQgBgOgGgMQgIgPgPgIQgOgJgUAAQgTAAgOAJg");
	this.shape_22.setTransform(135.6655,21.9241,0.5775,0.5779);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AhaCFIAAkJIAmAAIAADoICPAAIAAAhg");
	this.shape_23.setTransform(123.8415,20.0604,0.5775,0.5779);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgRCNIAAkZIAjAAIAAEZg");
	this.shape_24.setTransform(107.7441,19.5981,0.5775,0.5779);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("Ag1BcQgTgJgLgUQgLgUAAgdIAAhzIAkAAIAABvQAAAeAPAOQAPAPAZAAQASAAAOgIQAOgHAIgPQAHgPAAgWIAAhnIAlAAIAADJIgjAAIAAgeQgJANgPAIQgUALgXAAQgbAAgTgKg");
	this.shape_25.setTransform(97.4216,21.9819,0.5775,0.5779);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AgkCOIAAiqIgiAAIAAgeIAiAAIAAgSQAAgeASgRQARgSAfAAQAMAAAKADQALADAIAGIgLAbQgEgDgJgEQgIgCgHAAQgQAAgJAJQgHAIAAASIAAASIA6AAIAAAeIg6AAIAACqg");
	this.shape_26.setTransform(86.9547,19.5258,0.5775,0.5779);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("Ag1BmIAAjJIAjAAIAAAjQAIgRAQgJQATgLAdAAIAAAkIgIgBQgdAAgRASQgRARAAAgIAABlg");
	this.shape_27.setTransform(78.8699,21.8664,0.5775,0.5779);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AgwBaQgYgOgOgXQgNgXAAgeQAAgeANgWQAMgXAYgOQAXgNAcAAQAcAAAXANQAXANANAYQAMAYAAAdIAAAFIgBAGIiiAAQACAOAHAMQAIAPASAJQAPAJAWAAQASAAAPgGQAOgGALgMIAUAXQgNAPgVAKQgTAIgaAAQgfAAgZgNgAggg+QgPAIgIAQQgHALgBAOICAAAQgBgOgGgMQgIgPgPgIQgOgJgUAAQgTAAgOAJg");
	this.shape_28.setTransform(67.2625,21.9241,0.5775,0.5779);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AA7BlIg7iYIg5CYIgjAAIhMjJIAjAAIA7CgIA8igIAeAAIA8CgIA8igIAhAAIhMDJg");
	this.shape_29.setTransform(51.2228,21.9241,0.5775,0.5779);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("Ag1BaQgYgOgNgXQgOgXAAgeQAAgdAOgXQANgXAYgOQAYgNAdAAQAdAAAZANQAYAOANAXQAOAWAAAeQAAAegOAXQgNAXgYAOQgZANgdAAQgdAAgYgNgAgig9QgPAJgJAPQgJARAAAUQAAAWAJAPQAJAQAPAJQAPAJATAAQAVAAAOgJQAQgJAIgQQAJgPAAgWQAAgUgJgRQgIgPgQgJQgQgJgTAAQgSAAgQAJg");
	this.shape_30.setTransform(34.9522,21.9241,0.5775,0.5779);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AhqCFIAAkJIBnAAQAjAAAYALQAZAKANAWQANAUAAAeQAAAcgNAUQgNAVgZALQgZALgiAAIhBAAIAABRgAhEATIBAAAQAkAAATgPQASgOAAgdQAAgdgSgQQgTgPgkAAIhAAAg");
	this.shape_31.setTransform(21.1215,20.0604,0.5775,0.5779);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AgyAQIAAgfIBlAAIAAAfg");
	this.shape_32.setTransform(2.9452,21.7219,0.5775,0.5779);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol92, new cjs.Rectangle(0,11.1,453,21.1), null);


(lib.Symbol91 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#231F20").s().p("Ag3B4QgYgQgOgeQgOgegBgsQABgrAOgeQAOgeAYgQQAYgQAfAAQAgAAAXAQQAZAQAPAeQANAgAAApQAAArgNAfQgOAegaAQQgYAQgfAAQgdAAgagQgAgkhaQgPALgKAXQgIAXgBAhQABAiAIAWQAKAYAPALQAQALAUAAQAWAAAPgLQAPgLAJgYQAKgWgBgiQABghgKgXQgJgXgPgLQgQgMgVAAQgTAAgRAMg");
	this.shape.setTransform(79.0784,13.9576,0.5775,0.5779);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("Ag2B4QgZgQgOgeQgOgeAAgsQAAgrAOgeQAOgeAZgQQAXgQAfAAQAgAAAYAQQAZAQANAeQAOAeAAArQAAAsgOAeQgNAegZAQQgZAQgfAAQgeAAgYgQgAgkhaQgQAMgJAWQgIAWAAAiQAAAjAIAVQAJAXAQAMQAPALAVAAQAWAAAPgLQAQgMAJgXQAIgVAAgjQAAgigIgWQgJgWgQgMQgQgMgVAAQgUAAgQAMg");
	this.shape_1.setTransform(64.6557,13.9576,0.5775,0.5779);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("Ag3B4QgYgQgOgeQgPgfAAgrQAAgqAPgfQAOgeAYgQQAZgQAeAAQAgAAAYAQQAYAQAPAeQANAeAAArQAAAsgNAeQgOAegZAQQgZAQgfAAQgdAAgagQgAgkhaQgPAMgKAWQgIAXgBAhQABAiAIAWQAKAXAPAMQAQALAUAAQAWAAAPgLQAPgLAJgYQAKgWgBgiQABghgKgXQgJgXgPgLQgQgMgVAAQgTAAgRAMg");
	this.shape_2.setTransform(50.2331,13.9576,0.5775,0.5779);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgWA1IAOg3QgFgCgEgDQgHgHAAgMQAAgMAHgGQAIgIAJAAQAMAAAGAIQAHAIAAAKIAAAIIgCAIIgWA/g");
	this.shape_3.setTransform(40.9211,21.8172,0.5775,0.5779);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("Ag3B9QgagHgRgQIARgeQAOANAVAIQAVAHAYABQAeAAAQgOQAQgMAAgWQAAgPgHgLQgHgKgSgGQgSgHgdABIg9AAIAOiLICVAAIAAAhIh1AAIgHBJIAeAAQAmABAZAJQAYALALARQALARAAAYQAAAYgLASQgLATgWALQgWALghAAQgcAAgbgJg");
	this.shape_4.setTransform(32.1434,14.0443,0.5775,0.5779);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AhaCGIAAgaIBrhoQAOgMAIgLQAGgKADgJQADgIgBgKQAAgUgOgMQgOgMgbAAQgUAAgSAHQgSAHgMAPIgagWQAQgTAZgLQAZgLAfAAQAbAAAVAJQATAJAMARQALAQAAAXQAAAOgDAMQgDAKgJAQQgLAOgRARIhQBOICHAAIAAAhg");
	this.shape_5.setTransform(19.7419,13.8709,0.5775,0.5779);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgPBTIAAhEIhFAAIAAgdIBFAAIAAhEIAfAAIAABEIBFAAIAAAdIhFAAIAABEg");
	this.shape_6.setTransform(92.5327,13.9432,0.5775,0.5779);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgxBgQgUgGgPgLIAPgdQANAJATAGQATAGATAAQAZAAALgHQAMgHAAgNQAAgJgHgGQgIgGgKgCIgYgFIgbgFQgNgDgNgGQgLgFgHgKQgHgLAAgRQAAgTALgNQAKgOATgHQATgIAYAAQAVAAATAFQAVAFANAJIgQAcQgNgIgPgEQgSgEgMAAQgWAAgNAIQgLAHAAANQAAALAHAFQAHAGALADIAzAKQANADAMAFQAKAFAIALQAHALAAAQQAAASgKAOQgMAOgSAGQgUAIgaAAQgZAAgXgHg");
	this.shape_7.setTransform(338.0448,15.8214,0.5775,0.5779);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgRCNIAAkZIAjAAIAAEZg");
	this.shape_8.setTransform(329.7579,13.4953,0.5775,0.5779);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgzBfQgRgIgJgNQgKgNABgRQAAgRAHgNQAIgNASgHQARgIAfAAIA4AAIAAgIQAAgWgNgNQgOgNgaAAQgSAAgRAGQgTAHgKAJIgPgcQAQgMAWgHQAXgHAWAAQAoAAAXAUQAWAVAAApIAAB5IgiAAIAAgbQgHALgNAHQgTALgaAAQgWAAgRgIgAgpAUQgJAJAAANQgBAPAMAJQAMAJAVAAQAUAAAPgJQAPgJAHgSIAAgcIg3AAQgbAAgKAJg");
	this.shape_9.setTransform(319.9551,15.8214,0.5775,0.5779);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgRCQIAAjJIAjAAIAADJgAgRhmQgGgHAAgKQAAgLAGgGQAIgHAJAAQALAAAGAHQAIAGgBAKQAAALgGAGQgHAIgLAAQgKgBgHgGg");
	this.shape_10.setTransform(310.9463,13.3219,0.5775,0.5779);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("Ag1BmIAAjJIAjAAIAAAiQAIgPAQgKQATgLAdAAIAAAkIgEgBIgEAAQgdAAgRASQgQARgBAgIAABlg");
	this.shape_11.setTransform(304.3919,15.7636,0.5775,0.5779);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("Ag1BaQgYgOgNgXQgOgXAAgeQAAgdAOgXQANgXAYgOQAYgNAdAAQAeAAAYANQAXANAOAYQANAWAAAeQAAAegNAXQgOAYgXANQgYANgeAAQgdAAgYgNgAghg9QgPAJgKAPQgJAQAAAVQAAAWAJAPQAJAQAQAJQAPAJASAAQAUAAAPgJQAQgKAIgPQAJgPAAgWQAAgUgJgRQgIgOgQgKQgQgJgTAAQgSAAgPAJg");
	this.shape_12.setTransform(292.5246,15.8214,0.5775,0.5779);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgTBsQgRgQAAgfIAAhuIgiAAIAAgeIAiAAIAAgsIAkAAIAAAsIA6AAIAAAeIg6AAIAABsQAAAQAIAJQAIAJAPAAQAQAAANgJIALAaQgJAHgLADQgKAEgOAAQgdAAgRgQg");
	this.shape_13.setTransform(281.5235,14.6078,0.5775,0.5779);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("Ag1BcQgTgIgLgVQgLgTAAgeIAAhzIAlAAIAABvQAAAeAOAOQAOAPAaAAQASAAAOgIQAOgIAIgOQAHgPAAgWIAAhnIAlAAIAADJIgjAAIAAgfQgJAOgPAIQgTALgYAAQgbAAgTgKg");
	this.shape_14.setTransform(269.815,15.8792,0.5775,0.5779);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgSCFIAAjoIhbAAIAAghIDbAAIAAAhIhbAAIAADog");
	this.shape_15.setTransform(256.5184,13.9576,0.5775,0.5779);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("Ag1BaQgXgNgOgYQgOgXAAgeQAAgdAOgXQAOgYAXgNQAYgNAdAAQAeAAAYANQAYAOANAXQAOAWAAAeQAAAegOAXQgNAXgYAOQgYANgeAAQgdAAgYgNgAghg9QgQAJgJAPQgJARAAAUQAAAWAJAPQAJAQAQAJQAOAJATAAQAVAAAOgJQAQgJAIgQQAJgPAAgWQAAgUgJgRQgIgPgQgJQgQgJgTAAQgSAAgPAJg");
	this.shape_16.setTransform(237.6492,15.8214,0.5775,0.5779);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgwBaQgZgOgNgXQgNgXAAgeQAAgdANgXQANgXAXgOQAXgNAcAAQAdAAAXANQAWANANAYQANAXAAAeIgBALIijAAQACAOAHAMQAJAQARAIQAQAJAVAAQATAAANgGQAPgGALgMIAVAXQgOAPgUAKQgUAIgaAAQgeAAgagNgAggg+QgOAIgJAQQgGAKgCAPICAAAQgBgOgGgMQgKgPgNgIQgOgJgUAAQgTAAgOAJg");
	this.shape_17.setTransform(224.1793,15.8214,0.5775,0.5779);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("Ag2CBQgXgMgNgYQgNgYAAgeQAAgeANgXQANgXAXgNQAYgNAcABQAZAAAUALQAPAIAKANIAAhvIAkAAIAAEZIgjAAIAAggQgKAOgPAIQgUAMgaAAQgdAAgXgNgAghgWQgPAJgJAOQgKAQAAAWQAAAWAKAPQAIARAQAIQAPAJASAAQAVAAAOgJQAQgIAIgRQAJgPAAgWQAAgVgJgRQgJgOgPgJQgQgJgTAAQgRAAgQAJg");
	this.shape_18.setTransform(209.6701,13.5531,0.5775,0.5779);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgSCQIAAjJIAkAAIAADJgAgRhmQgGgHgBgKQABgLAGgGQAIgHAJAAQAKAAAIAHQAHAGAAAKQgBALgGAGQgHAIgLAAQgKgBgHgGg");
	this.shape_19.setTransform(199.8673,13.3219,0.5775,0.5779);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgSCFIh1kJIAqAAIBeDaIBgjaIAmAAIh0EJg");
	this.shape_20.setTransform(189.5303,13.9576,0.5775,0.5779);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgwBaQgYgOgOgXQgNgXAAgeQAAgdANgXQANgXAXgOQAXgNAcAAQAdAAAXANQAWAOANAXQAMAXAAAeIAAALIijAAQACAOAHAMQAIAPASAJQAPAJAWAAQASAAAPgGQAOgGALgMIAUAXQgNAQgVAJQgTAIgaAAQgeAAgagNgAggg+QgPAIgIAQQgHALgBAOICAAAQgBgNgGgNQgJgPgOgIQgOgJgUAAQgTAAgOAJg");
	this.shape_21.setTransform(169.5349,15.8214,0.5775,0.5779);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AA7BmIAAhvQAAgdgOgPQgOgPgaAAQgRAAgQAIQgPAHgHAPQgIAOAAAXIAABnIglAAIAAjJIAjAAIAAAfQAKgNAPgJQAUgLAbAAQAZAAASAKQAUAKAKATQALAUAAAdIAABzg");
	this.shape_22.setTransform(155.6175,15.7636,0.5775,0.5779);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgRCQIAAjJIAjAAIAADJgAgRhmQgHgHAAgKQAAgKAHgHQAHgHAKAAQAKAAAIAHQAHAHAAAJQAAAKgHAHQgHAIgLAAQgKgBgHgGg");
	this.shape_23.setTransform(145.2517,13.3219,0.5775,0.5779);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgRCNIAAkZIAjAAIAAEZg");
	this.shape_24.setTransform(139.3325,13.4953,0.5775,0.5779);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AA7BmIAAhvQAAgdgOgPQgOgPgaAAQgRAAgQAIQgPAHgHAPQgIAPAAAWIAABnIglAAIAAjJIAjAAIAAAfQAKgNAPgJQAUgLAbAAQAZAAATAKQASAJALAUQALATAAAeIAABzg");
	this.shape_25.setTransform(129.0821,15.7636,0.5775,0.5779);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("Ag3B+QgagKgTgTQgUgTgKgYQgKgZAAgdQAAgcAKgZQALgZATgSQASgSAbgLQAZgKAeAAQAgAAAZAKQAaAKASATQAUARAKAaQAKAZAAAcQAAAcgKAaQgKAZgUATQgSARgaALQgbAKgeAAQgdAAgagKgAgoheQgTAIgOAOQgOAOgHASQgIASAAAWQAAAXAIARQAHATAOAOQAOAOATAHQATAIAVAAQAXAAASgIQATgHAOgOQANgNAJgUQAHgSAAgWQAAgVgHgTQgJgTgNgNQgNgOgUgIQgSgIgXAAQgVAAgTAIg");
	this.shape_26.setTransform(112.5661,13.9576,0.5775,0.5779);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgyAQIAAgfIBlAAIAAAfg");
	this.shape_27.setTransform(2.9452,15.6191,0.5775,0.5779);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol91, new cjs.Rectangle(0,5,343,19.9), null);


(lib.Symbol86 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#231F20").s().p("AgRA4QgIgIAAgLQAAgLAIgHQAHgHAKAAQAMAAAGAHQAIAHgBALQABALgIAIQgHAHgLAAQgKAAgHgHgAgRgTQgIgHAAgLQAAgLAIgHQAHgHAKAAQAMAAAGAHQAIAHgBALQABALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape.setTransform(407.95,19.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AAWBTIAAg+QAAgYgUAAQgKAAgGAGQgHAHAAAOIAAA7IgrAAIAAilIArAAIAAA4QAHgHAJgDQAJgDALAAQAWAAAOANQAOAOAAAaIAABFg");
	this.shape_1.setTransform(397.225,17.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgRBAQgNgMAAgXIAAgoIgRAAIAAggIARAAIAAgfIAqAAIAAAfIAcAAIAAAgIgcAAIAAAnQAAAHADAEQAEADAGAAQAHAAAGgDIAKAdQgFAEgIABQgIACgIAAQgXAAgNgLg");
	this.shape_2.setTransform(384.525,18.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgUBaIAAh4IApAAIAAB4gAgSgyQgHgHAAgJQAAgKAHgHQAIgGAKAAQALAAAIAGQAHAGAAAKQAAAKgHAHQgIAGgLAAQgKAAgIgGg");
	this.shape_3.setTransform(376.25,16.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAXA9IgXhBIgWBBIgqAAIgrh5IApAAIAYBJIAahJIAjAAIAaBJIAZhJIAmAAIgrB5g");
	this.shape_4.setTransform(362.225,19.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AAWA+IAAg+QAAgZgUAAQgKAAgGAHQgHAIAAANIAAA7IgrAAIAAh5IApAAIAAANQAHgHAKgEQAJgEAMAAQAWAAAOAOQAOANAAAbIAABFg");
	this.shape_5.setTransform(337.625,19.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgiA3QgQgIgJgPQgJgOAAgSQAAgRAJgPQAJgOAQgIQAPgIATAAQAUAAAPAIQAQAIAJAOQAJAPAAARQAAASgJAOQgJAPgQAIQgPAIgUAAQgTAAgPgIgAgRgUQgIAHAAANQAAANAIAIQAHAIAKAAQALAAAHgIQAHgIAAgNQAAgNgHgHQgHgIgLAAQgKAAgHAIg");
	this.shape_6.setTransform(322.525,19.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgUBaIAAh4IAqAAIAAB4gAgSgyQgHgHAAgJQAAgKAHgHQAHgGALAAQALAAAIAGQAHAGAAAKQAAAKgHAHQgIAGgLAAQgLAAgHgGg");
	this.shape_7.setTransform(311.75,16.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgRBAQgNgMAAgXIAAgoIgRAAIAAggIARAAIAAgfIAqAAIAAAfIAcAAIAAAgIgcAAIAAAnQAAAHADAEQAEADAGAAQAHAAAGgDIAKAdQgFAEgIABQgIACgIAAQgXAAgNgLg");
	this.shape_8.setTransform(303.375,18.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgxAwQgOgOAAgcIAAhDIArAAIAAA9QAAANAEAGQAGAGAJAAQAKAAAGgHQAHgHAAgNIAAg7IAqAAIAAB5IgoAAIAAgNQgIAHgIAEQgJAEgKAAQgYAAgOgOg");
	this.shape_9.setTransform(290.85,19.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgVBTIAAilIArAAIAAClg");
	this.shape_10.setTransform(279.8,17.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgiA3QgQgIgJgPQgJgOAAgSQAAgRAJgPQAJgOAQgIQAPgIATAAQAUAAAPAIQAQAIAJAOQAJAPAAARQAAASgJAOQgJAPgQAIQgPAIgUAAQgTAAgPgIgAgRgUQgIAHAAANQAAANAIAIQAHAIAKAAQALAAAHgIQAHgIAAgNQAAgNgHgHQgHgIgLAAQgKAAgHAIg");
	this.shape_11.setTransform(269.025,19.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgmBNQgRgEgMgJIAPggQALAGANAFQAOAEANAAQAZAAAAgNQAAgGgHgEQgIgDgOgEQgTgDgLgFQgMgEgJgIQgIgLAAgPQAAgPAIgMQAHgLAQgHQAQgGAWgBQAPABAPADQAPAEALAGIgNAhQgWgMgWAAQgMAAgGAEQgGAEAAAGQAAAGAHAEQAHADAPADQASADAMAFQAMAFAIAIQAJAKAAAQQAAAOgIAMQgIALgQAHQgPAHgWgBQgSABgTgFg");
	this.shape_12.setTransform(254.5,17.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgjBQQgPgEgLgHIAPgeQAHAGAMAEQALADALAAQAQAAAIgIQAIgHAAgOIAAgFQgNAPgXAAQgQAAgNgIQgOgHgIgNQgIgNAAgRQAAgSAIgMQAIgOAOgHQANgIAQABQAaAAAMAQIAAgPIAoAAIAABjQAAAhgSASQgTARghAAQgSgBgQgEgAgSgrQgHAHAAALQAAALAHAHQAIAHALAAQALAAAHgHQAIgHAAgLQAAgLgHgHQgIgHgLABQgLgBgIAHg");
	this.shape_13.setTransform(232.875,21.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AAWA+IAAg+QAAgZgUAAQgKAAgGAHQgHAIAAANIAAA7IgrAAIAAh5IApAAIAAANQAHgHAKgEQAJgEAMAAQAWAAAOAOQAOANAAAbIAABFg");
	this.shape_14.setTransform(217.775,19.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgUBaIAAh4IApAAIAAB4gAgSgyQgHgHAAgJQAAgKAHgHQAIgGAKAAQALAAAIAGQAHAGAAAKQAAAKgHAHQgIAGgLAAQgKAAgIgGg");
	this.shape_15.setTransform(206.6,16.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AAWA+IAAg+QAAgZgUAAQgKAAgGAHQgHAIAAANIAAA7IgrAAIAAh5IApAAIAAANQAHgHAKgEQAJgEAMAAQAWAAAOAOQAOANAAAbIAABFg");
	this.shape_16.setTransform(195.525,19.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgoA+IAAh5IAoAAIAAAPQAHgJAKgEQAKgEAOAAIAAAnIgKgBQgOAAgHAHQgIAIAAAOIAAA4g");
	this.shape_17.setTransform(183.375,19.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgmA6QgLgFgFgIQgGgJABgLQAAgRANgIQANgKAcAAIAXAAQgBgTgYAAQgJAAgJACQgIADgGAFIgPgdQAKgGAPgEQAOgEAOAAQAeAAAPAOQAQAOAAAcIAABDIgnAAIAAgQQgKASgZAAQgOAAgKgFgAgSAYQAAAFAEADQAEAEAIAAQAGAAAGgEQAGgDACgHIAAgLIgSAAQgSAAAAANg");
	this.shape_18.setTransform(170.8,19.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgfA3QgQgIgJgPQgJgOAAgSQAAgRAJgOQAIgPAPgIQAQgIASAAQASAAAPAIQAPAHAIAOQAJAPAAASIgBALIhXAAQACAJAJAFQAHAFALAAQAIAAAHgCQAGgDAHgFIAWAXQgRAUgiAAQgVAAgQgIgAgPgaQgGAGgCAJIAxAAQgBgJgIgGQgGgGgKAAQgIAAgIAGg");
	this.shape_19.setTransform(157.1,19.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("Ag7BOIAAibIAtAAIAAB4IBKAAIAAAjg");
	this.shape_20.setTransform(143.925,17.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgfA3QgQgIgJgPQgJgOAAgSQAAgRAJgOQAIgPAQgIQAPgIASAAQASAAAPAIQAPAHAJAOQAIAPAAASIgBALIhXAAQACAJAJAFQAHAFALAAQAJAAAGgCQAGgDAHgFIAWAXQgSAUghAAQgVAAgQgIgAgOgaQgHAGgCAJIAxAAQgBgJgIgGQgGgGgKAAQgJAAgGAGg");
	this.shape_21.setTransform(129.4,19.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgfA3QgQgIgJgPQgJgOAAgSQAAgRAIgOQAKgPAPgIQAPgIASAAQASAAAPAIQAOAHAKAOQAIAPAAASIgBALIhXAAQADAJAHAFQAIAFAKAAQAKAAAGgCQAGgDAHgFIAWAXQgRAUgjAAQgUAAgQgIgAgOgaQgHAGgCAJIAxAAQgBgJgIgGQgGgGgKAAQgJAAgGAGg");
	this.shape_22.setTransform(108.9,19.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgRBAQgNgMAAgXIAAgoIgRAAIAAggIARAAIAAgfIAqAAIAAAfIAcAAIAAAgIgcAAIAAAnQAAAHADAEQAEADAGAAQAHAAAGgDIAKAdQgFAEgIABQgIACgIAAQgXAAgNgLg");
	this.shape_23.setTransform(96.825,18.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgfA3QgQgIgJgPQgJgOAAgSQAAgRAIgOQAKgPAOgIQAQgIASAAQASAAAPAIQAPAHAIAOQAJAPAAASIgBALIhXAAQADAJAHAFQAIAFALAAQAIAAAHgCQAGgDAHgFIAWAXQgSAUgiAAQgUAAgQgIgAgPgaQgGAGgCAJIAxAAQgCgJgGgGQgHgGgKAAQgIAAgIAGg");
	this.shape_24.setTransform(84.9,19.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AgVBTIAAilIArAAIAAClg");
	this.shape_25.setTransform(74.35,17.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AhDBTIAAijIApAAIAAALQALgOAXABQARAAAOAHQANAIAIAOQAIAPAAASQAAATgIANQgIAOgNAJQgOAHgRAAQgUAAgMgNIAAA2gAgSgpQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAHgGAAgOQAAgNgHgIQgHgIgLABQgLgBgHAIg");
	this.shape_26.setTransform(63.675,21.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AA9A+IAAg+QAAgNgFgGQgEgGgJAAQgKAAgGAHQgFAHAAAMIAAA9IgqAAIAAg+QAAgZgSAAQgKAAgGAHQgGAHAAAMIAAA9IgrAAIAAh5IApAAIAAANQAHgHAJgEQAJgEALAAQANAAAKAFQAJAFAHAJQAHgJALgFQALgFANAAQAWAAANAOQAOANAAAbIAABFg");
	this.shape_27.setTransform(43.975,19.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AgiA3QgQgIgJgPQgJgOAAgSQAAgRAJgPQAJgOAQgIQAPgIATAAQAUAAAPAIQAQAIAJAOQAJAPAAARQAAASgJAOQgJAPgQAIQgPAIgUAAQgTAAgPgIgAgRgUQgIAHAAANQAAANAIAIQAHAIAKAAQALAAAHgIQAHgIAAgNQAAgNgHgHQgHgIgLAAQgKAAgHAIg");
	this.shape_28.setTransform(25.025,19.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AgiBHQgTgKgMgTQgLgSAAgYQAAgXALgSQAMgTATgKQAUgLAYAAQAVAAARAIQARAHAMAPIgcAZQgPgSgWAAQgMAAgKAGQgKAGgFAKQgGAJAAANQAAANAGALQAFAKAKAGQAKAFAMAAQAWAAAPgTIAcAaQgMAOgRAIQgRAIgVgBQgYAAgUgKg");
	this.shape_29.setTransform(9.65,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol86, new cjs.Rectangle(0,-0.4,412.3,33.3), null);


(lib.Symbol82 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#7ECAFD","#7ECAFD"],[0,1],33,-1.7,0,33,-1.7,36.5).s().p("AAQAVIhDgmQgngRgkAMQAMgJAPgFQAkgMAoARIBDAmQAaAPAZAEQARADAPgDIgJAGQgQAKgTAAQgeAAglgVg");
	this.shape.setTransform(12.7625,4.1737);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol82, new cjs.Rectangle(0.1,0,25.4,8.4), null);


(lib.Symbol81 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#7ECAFD","#7ECAFD"],[0,1],-20.1,0,0,-20.1,0,36.5).s().p("AEMBiQgVgbgjgNQgggMgrACQgfABgvAJQg6ALgaABQgxABghgSQgZgNgbgeQgcgjgQgQQgagbgggLQgYgIgTAEIAIgFQAagRAlANQAfAKAaAbQAQARAdAjQAbAeAYANQAiASAvgCQAbgBA7gLQAwgJAdgBQAsgBAgAMQAqAPAXAmg");
	this.shape.setTransform(30.45,9.8556);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol81, new cjs.Rectangle(0,0,60.9,19.7), null);


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


(lib.Symbol69 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1986CD").s().p("AgKA7QgFAAgCgEIgggsQgFgIAIgEQADgCAEABQAEAAACACIAWAgIAthVQACgDADgCQAEgBADACQAIAFgEAIIg0BiQgCAFgFAAg");
	this.shape.setTransform(8.0057,5.9333);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1986CD").s().p("Ag0A0QgVgVAAgfQAAgeAVgWQAWgVAeAAQAPAAAMAFQAEABgBAFQgCAEgEgCQgLgEgNAAQgaAAgTATQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgVgNgRQgCgDADgDQAEgDADAEQAOAUAAAXQAAAfgWAVQgVAWgfAAQgeAAgWgWg");
	this.shape_1.setTransform(7.425,7.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol69, new cjs.Rectangle(0,0,14.9,15.1), null);


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
	this.shape_1.graphics.f("#D4E3FB").s().p("Af4apIAAqUIAbAAIAAgiIhHAAIAAAJIghACIAAgLIhHAAIAAAQIjbAOIAAgHIlBAAIAAABIy0AAIAAyhID8AAIAAnnIFQAAIAAHnIAvAAIAAqrII5G4IAABwICLgGIAAhtIC7i3IAADqIICAAIAAEZIBaAAIAAwwIBMAAIAAjeICGAAIAAlaIAkAAIAAFaICHAAIAADeIBIAAIAAQwIAEAAIAACoIDMAAIAAN2IjMAAIAALLgEAg1AQVIBHAAIAAgiIhHAAgEAg1AOVIBHAAIAAgiIhHAAgAfMOVIBHAAIAAgiIhHAAgAdkOVIBHAAIAAgiIhHAAgEAg1AMVIBHAAIAAgiIhHAAgAfMMVIBHAAIAAgiIhHAAgAdkMVIBHAAIAAgiIg2AAIAAgEIgHAAIAAAEIgKAAgAbNMLIBLAAIAAgcIhLAAgEAlAAK3IEaAAIAAghIkaAAgAdkKVIAKAAIAAAQIAHAAIAAgQIA2AAIAAgiIhHAAgAbNKlIBLAAIAAgcIhLAAgEAg1AKVIBHAAIAAgiIhHAAgAfMKVIBHAAIAAgiIhHAAgAUQJ4IAGAAIAAgcIgGAAgARvJ4IBLAAIAAgcIhLAAgAQpJ4IAGAAIAAgcIgGAAgAOHJ4IBLAAIAAgcIhLAAgEAlAAJlIEaAAIAAggIkaAAgAduI+IAHAAIAAgbIgHAAgAbNI+IBLAAIAAgbIhLAAgEAg1AIVIBHAAIAAgiIhHAAgAfMIVIBHAAIAAgiIhHAAgAdkIVIBHAAIAAgiIhHAAgEAlAAIUIEaAAIAAggIkaAAgAUQISIAGAAIAAgcIgGAAgARvISIBLAAIAAgcIhLAAgAQpISIAGAAIAAgcIgGAAgAOHISIBLAAIAAgcIhLAAgAduHYIAHAAIAAgbIgHAAgAbNHYIBLAAIAAgbIhLAAgEAlAAHDIEaAAIAAggIkaAAgAUQGsIAGAAIAAgcIgGAAgARvGsIBLAAIAAgcIhLAAgAQpGsIAGAAIAAgcIgGAAgAOHGsIBLAAIAAgcIhLAAgEAg1AGVIBHAAIAAgiIhHAAgAfMGVIBHAAIAAgiIhHAAgAdkGVIBHAAIAAgiIhHAAgEAlAAFyIEaAAIAAghIkaAAgAduFyIAHAAIAAgbIgHAAgAbNFyIBLAAIAAgbIhLAAgAUQFFIAGAAIAAgbIgGAAgARvFFIBLAAIAAgbIhLAAgAQpFFIAGAAIAAgbIgGAAgAOHFFIBLAAIAAgbIhLAAgEAlAAEhIEaAAIAAghIkaAAgEAg1AEVIBHAAIAAgiIhHAAgAfMEVIBHAAIAAgiIhHAAgAdkEVIBHAAIAAgiIg2AAIAAgCIgHAAIAAACIgKAAgAbNEMIBLAAIAAgbIhLAAgAUQDfIAGAAIAAgbIgGAAgARvDfIBLAAIAAgbIhLAAgAQpDfIAGAAIAAgbIgGAAgAOHDfIBLAAIAAgbIhLAAgEAlAADQIEaAAIAAghIkaAAgAdkCVIAKAAIAAARIAHAAIAAgRIA2AAIAAgiIhHAAgAbNCmIBLAAIAAgcIhLAAgEAg1ACVIBHAAIAAgiIhHAAgAfMCVIBHAAIAAgiIhHAAgEAlAAB/IEaAAIAAghIkaAAgAUQB5IAGAAIAAgbIgGAAgARvB5IBLAAIAAgbIhLAAgAQpB5IAGAAIAAgbIgGAAgAOHB5IBLAAIAAgbIhLAAgAduBAIAHAAIAAgcIgHAAgAbNBAIBLAAIAAgcIhLAAgEAlAAAuIEaAAIAAghIkaAAgEAg1AAVIBHAAIAAghIhHAAgAfMAVIBHAAIAAghIhHAAgAdkAVIBHAAIAAghIhHAAgAUQATIAGAAIAAgaIgGAAgARvATIBLAAIAAgaIhLAAgAQpATIAGAAIAAgaIgGAAgAOHATIBLAAIAAgaIhLAAgEAlAgAjIEaAAIAAggIkaAAgAduglIAHAAIAAgcIgHAAgAbNglIBLAAIAAgcIhLAAgAUQhSIAGAAIAAgcIgGAAgARvhSIBLAAIAAgcIhLAAgAQphSIAGAAIAAgcIgGAAgAOHhSIBLAAIAAgcIhLAAgEAg1gBqIBHAAIAAgiIhHAAgAfMhqIBHAAIAAgiIhHAAgAdkhqIBHAAIAAgiIg2AAIAAgbIgHAAIAAAbIgKAAgEAlAgB0IEaAAIAAggIkaAAgAbNiMIBLAAIAAgbIhLAAgAUQi4IAGAAIAAgcIgGAAgARvi4IBLAAIAAgcIhLAAgAQpi4IAGAAIAAgcIgGAAgAOHi4IBLAAIAAgcIhLAAgEAlAgC+IEaAAIAAghIkaAAgEAg1gDpIBHAAIAAgjIhHAAgAfMjpIBHAAIAAgjIhHAAgAdkjpIBHAAIAAgjIg2AAIAAgBIgHAAIAAABIgKAAgAbNjyIBLAAIAAgbIhLAAgEAlAgEQIEaAAIAAggIkaAAgAUQkeIAGAAIAAgcIgGAAgARvkeIBLAAIAAgcIhLAAgAQpkeIAGAAIAAgcIgGAAgAOHkeIBLAAIAAgcIhLAAgEAlAgFhIEaAAIAAggIkaAAgAUQmFIAGAAIAAgbIgGAAgARvmFIBLAAIAAgbIhLAAgAQpmFIAGAAIAAgbIgGAAgAOHmFIBLAAIAAgbIhLAAgEAlAgGyIEaAAIAAggIkaAAgEAlAgIDIEaAAIAAghIkaAAgEAlAgJUIEaAAIAAghIkaAAgEAlAgKlIEaAAIAAghIkaAAgEAlAgL2IEaAAIAAghIkaAAgEAlAgNIIEaAAIAAggIkaAAgEAlAgOZIEaAAIAAggIkaAAgEAlAgPqIEaAAIAAggIkaAAgEgt+AV7IAA7pICDAAIAAhSIBuAAIAAh8IFAAAIAAB8IB0AAIAAk8IFShiIAAgtIAlAAIAAhWIgvAAIAAhJIHsAAIAABJIgvAAIAABWIAlAAIAAKyIB7AWIAAk5IGIhXIAAZeIoDAAIAADeIsVAAIAACSgEgqBAN+IEUAAIAAgzIkUAAgEgqBAL/IEUAAIAAg0IkUAAgA8dKMIEVAAIAAg4IkVAAgEgqBAJ/IEUAAIAAgzIkUAAgAwgJ4IAHAAIAAgcIgHAAgAzBJ4IBMAAIAAgcIhMAAgA+7J3IBHAAIAAgjIhHAAgEggjAJ3IBHAAIAAgjIhHAAgEgiMAJ3IBHAAIAAgjIhHAAgAwgISIAHAAIAAgcIgHAAgAzBISIBMAAIAAgcIhMAAgA8dIBIEVAAIAAg4IkVAAgEgqBAH/IEUAAIAAgzIkUAAgA+7H3IBHAAIAAgjIhHAAgEggjAH3IBHAAIAAgjIhHAAgEgiMAH3IBHAAIAAgjIhHAAgAwgGsIAHAAIAAgcIgHAAgAzBGsIBMAAIAAgcIhMAAgEgqBAGAIEUAAIAAg0IkUAAgA+7F3IBHAAIAAgjIhHAAgEggjAF3IBHAAIAAgjIhHAAgEgiMAF3IBHAAIAAgjIhHAAgA8dF1IEVAAIAAg4IkVAAgAwgFFIAHAAIAAgbIgHAAgAzBFFIBMAAIAAgbIhMAAgEgqBAEAIEUAAIAAgzIkUAAgA+7D3IBHAAIAAgjIhHAAgEggjAD3IBHAAIAAgjIhHAAgEgiMAD3IBHAAIAAgjIhHAAgA8dDqIEVAAIAAg5IkVAAgAwgDfIAHAAIAAgbIgHAAgAzBDfIBMAAIAAgbIhMAAgEgqBACAIEUAAIAAgzIkUAAgAwgB5IAHAAIAAgbIgHAAgAzBB5IBMAAIAAgbIhMAAgA+7B3IBHAAIAAgjIhHAAgEggjAB3IBHAAIAAgjIhHAAgEgiMAB3IBHAAIAAgjIhHAAgA8dBeIEVAAIAAg4IkVAAgAwgATIAHAAIAAgaIgHAAgAzBATIBMAAIAAgaIhMAAgEgqBAABIEUAAIAAgzIkUAAgA+7gIIBHAAIAAgjIhHAAgEggjgAIIBHAAIAAgjIhHAAgEgiMgAIIBHAAIAAgjIhHAAgA8dgtIEVAAIAAg4IkVAAgAwghSIAHAAIAAgcIgHAAgAzBhSIBMAAIAAgcIhMAAgEgqBgB+IEUAAIAAgzIkUAAgA+7iIIBHAAIAAgiIhHAAgEggjgCIIBHAAIAAgiIhHAAgEgiMgCIIBHAAIAAgiIhHAAgAwgi4IAHAAIAAgcIgHAAgAzBi4IBMAAIAAgcIhMAAgA8di4IEVAAIAAg4IkVAAgEgqBgD+IEUAAIAAgzIkUAAgA+7kIIBHAAIAAgiIhHAAgEggjgEIIBHAAIAAgiIhHAAgEgiMgEIIBHAAIAAgiIhHAAgAwgkeIAHAAIAAgcIgHAAgAzBkeIBMAAIAAgcIhMAAgA8dlEIEVAAIAAg4IkVAAgEgqBgF+IEUAAIAAgzIkUAAgAwgmFIAHAAIAAgbIgHAAgAzBmFIBMAAIAAgbIhMAAgA+7mIIBHAAIAAgiIhHAAgEggjgGIIBHAAIAAgiIhHAAgEgiMgGIIBHAAIAAgiIhHAAgA8dnPIEVAAIAAg4IkVAAgA+7oIIBHAAIAAgiIhHAAgEggjgIIIBHAAIAAgiIhHAAgEgiMgIIIBHAAIAAgiIhHAAgA8dpbIEVAAIAAg4IkVAAgA+7qIIBHAAIAAgiIhHAAgEggjgKIIBHAAIAAgiIhHAAgEgiMgKIIBHAAIAAgiIhHAAgA8drnIEVAAIAAg4IkVAAgA4tuLIAwAAIAAhWIgwAAgA6HuLIAwAAIAAhWIgwAAgA7guLIAwAAIAAhWIgwAAgA85uLIAwAAIAAhWIgwAAgArvQLIAAjJIi0AAIAAt2IC0AAIAAn1IgmAAIAAhzIGBAAIAABJIFTAAIAAZegAnZNFIBIAAIAAgiIhIAAgApCNFIBIAAIAAgiIhIAAgAqqNFIBIAAIAAgiIhIAAgAnZLFIBIAAIAAgiIhIAAgApCLFIBIAAIAAgiIhIAAgAqqLFIBIAAIAAgiIhIAAgAnZJFIBIAAIAAgiIhIAAgApCJFIBIAAIAAgiIhIAAgAqqJFIBIAAIAAgiIhIAAgAnZHFIBIAAIAAgiIhIAAgApCHFIBIAAIAAgiIhIAAgAqqHFIBIAAIAAgiIhIAAgAnZFFIBIAAIAAgiIhIAAgApCFFIBIAAIAAgiIhIAAgAqqFFIBIAAIAAgiIhIAAgAnZDFIBIAAIAAgiIhIAAgApCDFIBIAAIAAgiIhIAAgAqqDFIBIAAIAAgiIhIAAgAnZBFIBIAAIAAgiIhIAAgApCBFIBIAAIAAgiIhIAAgAqqBFIBIAAIAAgiIhIAAgAnZg6IBIAAIAAgiIhIAAgApCg6IBIAAIAAgiIhIAAgAqqg6IBIAAIAAgiIhIAAgAnZi6IBIAAIAAgiIhIAAgApCi6IBIAAIAAgiIhIAAgAqqi6IBIAAIAAgiIhIAAgAnZk6IBIAAIAAgiIhIAAgApCk6IBIAAIAAgiIhIAAgAqqk6IBIAAIAAgiIhIAAgAnZm6IBIAAIAAgiIhIAAgApCm6IBIAAIAAgiIhIAAgAqqm6IBIAAIAAgiIhIAAg");
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
	this.shape.graphics.f("#FFFFFF").s().p("AgcAsQgJgFgGgJQgEgJAAgMQAAgPAHgNQAHgNAMgIQANgHAPAAQANAAAJAFQAKAFAFAJQAEAJAAALQAAAQgHANQgHANgMAHQgNAHgPAAQgNAAgJgEgAgIgXQgGAFgEAIQgEAIABAKQgBAJAFAGQAEAFAIAAQAHAAAHgEQAHgFADgIQAEgIAAgKQAAgJgFgGQgFgFgHAAQgHAAgHAEg");
	this.shape.setTransform(172.95,17.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAjAvIANg7IABgGQAAgEgDgDQgDgDgEAAQgFAAgFADQgFADgDAGQgDAGgCAIIgKAxIgYAAIANg5IAAgIQAAgKgJAAQgSAAgGAaIgKAxIgZAAIAUhbIAXAAIgCAMQAHgIAGgDQAIgDAJAAQAQAAAEAOQAPgOAQAAQAMAAAGAGQAHAHgBALIgBAKIgMA7g");
	this.shape_1.setTransform(159.55,17.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAsQgKgFgEgIQgEgIgBgLQAAgPAIgNQAGgOANgJQAMgIAOAAQANAAAIAEQAKAFAEAIQAFAIgBAKQAAAIgBAGIgCAGIg/AAIgBAFQAAAIAEAEQAEAFAHAAQAIAAAFgEQAGgDADgGIAYAEQgQAbgeAAQgNAAgIgEgAgHgXQgHAFgDAJIAoAAIAAgEQAAgHgEgEQgEgFgIAAQgHAAgHAGg");
	this.shape_2.setTransform(146.85,17.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag9BAIAbh/IArAAQAbAAANANQANANAAAbQgBATgHARQgHARgRAKQgPALgXAAgAgeArIAVAAQAUgBAMgOQAMgOAAgbQgBgQgGgGQgHgGgOAAIgTAAg");
	this.shape_3.setTransform(135.5,15.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoAvIAUhbIAWAAIgCANIAAAAQAGgIAGgEQAHgDAIAAIAHABIAGADIgKAWIgFgDIgGgBQgKAAgHAHQgFAIgDANIgJArg");
	this.shape_4.setTransform(121.35,17.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoApQgHgHAAgLIABgMIANg5IAYAAIgMA5IgBAHQAAAFADADQADADAFAAQAIAAAGgGQAHgFADgOIAKgyIAZAAIgTBbIgYAAIADgMQgHAHgFAEQgIADgJAAQgNAAgGgGg");
	this.shape_5.setTransform(112.05,17.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAsQgKgFgFgJQgEgJAAgMQAAgPAHgNQAGgNANgIQAMgHAQAAQANAAAJAFQAKAFAFAJQAEAJAAALQAAAQgHANQgHANgNAHQgMAHgPAAQgNAAgJgEgAgIgXQgGAFgEAIQgEAIAAAKQAAAJAFAGQAFAFAHAAQAHAAAHgEQAGgFAEgIQADgIAAgKQABgJgFgGQgFgFgHAAQgHAAgHAEg");
	this.shape_6.setTransform(101.2,17.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgwBBIgKgCIAJgTIAIACQAEgBADgBQAEgBADgEIAHgLIgQhcIAaAAIAGA0IABAJIABAEIAFgMIAdg1IAbAAIg4BeQgIAPgGAIQgHAHgGADQgGACgJAAIgJAAg");
	this.shape_7.setTransform(90.775,19.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVA8QgFgFgBgJQABgFACgKIAJgpIgOAAIAFgTIANAAIADgRIAbgRIgGAiIARAAIgFATIgRAAIgJAsIAAAGIABADIAEABIAKgBIgBATIgJACIgIAAQgMAAgFgEg");
	this.shape_8.setTransform(79,15.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggApQgKgIAAgNIAXgEQAAAIAEADQAEAEAJAAQAHAAAEgDQAEgDAAgFQAAgEgDgCQgEgCgIgCQgQgCgHgHQgHgGAAgLQAAgJAEgHQAFgHAJgEQAJgEALAAQAQAAAKAGQAJAGACAMIgXAEQgBgFgEgDQgDgDgHAAQgFAAgEADQgDACAAAEQAAABAAAAQAAABAAABQAAAAAAAAQABABAAAAQACACADACIAKACQAKACAHAEQAGAEADAEQADAGAAAIQAAAJgFAHQgGAHgJAEQgKAEgMAAQgUAAgIgHg");
	this.shape_9.setTransform(70.65,17.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAsQgKgFgEgIQgFgIABgLQAAgPAGgNQAHgOANgJQALgIAQAAQALAAAKAEQAJAFAEAIQAEAIAAAKQAAAIgBAGIgBAGIhBAAIAAAFQAAAIAEAEQAEAFAHAAQAIAAAFgEQAGgDADgGIAXAEQgPAbgeAAQgNAAgIgEgAgHgXQgGAFgDAJIAnAAIAAgEQAAgHgEgEQgEgFgIAAQgHAAgHAGg");
	this.shape_10.setTransform(61.05,17.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpApQgGgHAAgLIABgMIANg5IAZAAIgNA5IgBAHQAAAFADADQADADAFAAQAIAAAGgGQAHgFADgOIAKgyIAZAAIgTBbIgYAAIAEgMQgHAHgHAEQgHADgJAAQgMAAgIgGg");
	this.shape_11.setTransform(50.95,17.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAABBIAJgsIAAAAQgLALgPgBQgQAAgJgJQgIgKAAgSQAAgQAGgNQAGgOALgHQALgIAOAAQAJAAAHAEQAIAEADAHIABAAIADgNIAWAAIgbB/gAgLgoQgGAFgEAJQgEAJAAALQAAAIAEAFQAEAGAIAAQAIAAAFgFQAHgEAEgIQADgIAAgLQAAgLgEgGQgFgEgIgBQgGABgGAEg");
	this.shape_12.setTransform(40.025,18.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcAsQgIgFgFgIQgFgIAAgLQABgPAGgNQAHgOAMgJQAMgIAPAAQAMAAAKAEQAIAFAFAIQAEAIABAKQgBAIgBAGIgCAGIhAAAIAAAFQAAAIAEAEQAEAFAIAAQAGAAAGgEQAGgDADgGIAXAEQgPAbgdAAQgNAAgKgEgAgHgXQgGAFgDAJIAnAAIAAgEQAAgHgEgEQgEgFgIAAQgHAAgHAGg");
	this.shape_13.setTransform(29.35,17.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AATBAIgHgaIgDgMIgDgHIgFgFQgBgCgDgBIgIgBIgKAAIgMA2IgZAAIAbh/IAvAAQAWAAAKAIQALAIAAASQAAAHgEAJQgEAHgHAGQgJAFgMACIAAAAQAEACADAGQAEAFACAJIAKAjgAgRgJIAVAAQAOAAAHgEQAHgFAAgLQAAgGgFgDQgEgDgJAAIgYAAg");
	this.shape_14.setTransform(18.5,15.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E68134").s().p("Ar4CsQhHAAgygzQgzgyAAhHQAAhGAzgyQAygzBHAAIXxAAQBHAAAyAzQAzAyAABGQAABHgzAyQgyAzhHAAg");
	this.shape_15.setTransform(93.275,17.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,186.6,34.4), null);


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
	this.shape.graphics.f("#231F20").s().p("Ag7CJQgbgHgTgOIAbgyQAMAKATAGQATAGATAAQAcAAANgNQANgMAAgZIAAgHQgVAZgnAAQgbAAgXgNQgYgMgNgXQgOgVAAgeQAAgdAOgXQANgWAYgNQAXgMAbAAQArAAAVAcIAAgZIBEAAIAACoQAAA5gfAdQgfAcg5AAQgfAAgagGgAgehJQgNALAAATQAAATANALQANAMASAAQAUAAAMgMQANgLAAgTQAAgTgNgLQgMgMgUAAQgTAAgMAMg");
	this.shape.setTransform(362.925,71.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AAmBpIAAhpQAAgrgiAAQgSAAgLANQgLAMAAAXIAABkIhJAAIAAjNIBFAAIAAAWQAMgMARgHQAQgHAUAAQAmAAAXAXQAYAXAAAuIAAB1g");
	this.shape_1.setTransform(337.375,67.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgjCZIAAjNIBHAAIAADNgAgfhWQgMgLAAgQQAAgRAMgLQAMgLATAAQAUAAAMALQAMAKAAAQQAAASgMALQgMALgUAAQgTAAgMgLg");
	this.shape_2.setTransform(318.475,63.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAmBpIAAhpQAAgrgiAAQgSAAgLANQgLAMAAAXIAABkIhJAAIAAjNIBFAAIAAAWQAMgMARgHQAQgHAUAAQAmAAAXAXQAYAXAAAuIAAB1g");
	this.shape_3.setTransform(299.725,67.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgjCZIAAjNIBHAAIAADNgAgfhWQgMgLAAgQQAAgRAMgLQAMgLATAAQAUAAAMALQAMAKAAAQQAAASgMALQgMALgUAAQgTAAgMgLg");
	this.shape_4.setTransform(280.825,63.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AhCBiQgRgJgJgOQgJgOAAgSQAAgdAWgQQAWgPAvAAIAoAAQgCghgoAAQgPAAgPAEQgQAFgKAJIgZgyQASgLAYgGQAZgGAYAAQAzgBAbAYQAaAYAAAvIAAByIhDAAIAAgbQgPAegtAAQgYABgRgJgAgfAoQAAAJAHAGQAHAGANAAQALAAAKgGQAJgGAEgMIAAgSIgeAAQgfAAAAAVg");
	this.shape_5.setTransform(262.775,68.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AhEBpIAAjNIBEAAIAAAYQALgOASgHQARgHAXAAIAABBIgQgBQgXAAgNANQgNAMgBAZIAABfg");
	this.shape_6.setTransform(244.1,67.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgkCFIAAjOIhSAAIAAg7IDtAAIAAA7IhRAAIAADOg");
	this.shape_7.setTransform(223.15,65.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("Ag2BdQgbgOgPgYQgPgZAAgeQAAgeAPgYQAOgYAagOQAagNAgAAQAegBAaANQAZANAOAYQAPAYAAAhIgBARIiVAAQAEAQANAIQANAJAUAAQAOAAALgEQALgEALgKIAmAoQgeAig6gBQgjAAgcgNgAgZgsQgLAJgEAQIBUAAQgDgQgLgJQgMgKgQAAQgQAAgLAKg");
	this.shape_8.setTransform(188.55,68.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("Ag2BdQgbgOgPgYQgPgZAAgeQAAgeAPgYQAOgYAagOQAbgNAeAAQAfgBAaANQAYANAPAYQAPAYAAAhIgBARIiVAAQAFAQANAIQAMAJAUAAQAPAAAKgEQALgEALgKIAmAoQgeAig6gBQgjAAgcgNgAgZgsQgLAJgDAQIBTAAQgDgQgLgJQgMgKgQAAQgQAAgLAKg");
	this.shape_9.setTransform(164.5,68.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AhbCJQgRgGgKgIIAZgzQAGAGAJADQAIAEAJAAQAKAAAHgFQAHgEAEgJIhYjPIBKAAIAyB+IAzh+IBEAAIhZDVQgPAmgWAPQgWAQgggBQgRAAgQgEg");
	this.shape_10.setTransform(140.875,71.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("Ag6BdQgbgOgPgYQgQgZAAgeQAAgeAQgYQAPgZAagNQAagNAhAAQAhAAAbANQAaAOAQAXQAPAZgBAeQABAegPAZQgQAYgaAOQgbANghAAQggAAgagNgAgegjQgMANAAAWQAAAXAMANQAMANASAAQATAAAMgNQAMgNAAgXQAAgWgMgNQgMgNgTAAQgSAAgMANg");
	this.shape_11.setTransform(116.8,68.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgjCNIAAkZIBHAAIAAEZg");
	this.shape_12.setTransform(98.525,64.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AhzCNIAAkWIBGAAIAAAUQATgXAoAAQAcgBAXANQAYAOANAYQAOAYAAAgQAAAggOAXQgNAYgYAOQgXAMgcAAQgjAAgVgVIAABbgAgfhGQgMANAAAXQAAAXAMAMQAMANATAAQASAAAMgNQANgMAAgXQAAgXgNgNQgMgNgSAAQgTAAgMANg");
	this.shape_13.setTransform(80.4,71.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("ABoBpIAAhpQAAgWgIgKQgJgLgOAAQgRAAgKAMQgJALAAAXIAABmIhIAAIAAhpQAAgrgfAAQgRAAgKAMQgJALAAAXIAABmIhJAAIAAjNIBFAAIAAAWQAMgNAPgGQAQgHATAAQAVAAARAIQARAIAKARQAMgQATgIQATgJAWAAQAmAAAWAXQAXAXAAAuIAAB1g");
	this.shape_14.setTransform(47.075,67.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AhqCFIAAkJIDQAAIAAA6IiFAAIAAAtIB1AAIAAA3Ih1AAIAAAxICKAAIAAA6g");
	this.shape_15.setTransform(15.325,65.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AhEBpIAAjNIBEAAIAAAYQALgOARgHQASgHAXAAIAABBIgRgBQgXAAgNANQgMAMAAAZIAABfg");
	this.shape_16.setTransform(322.9,15.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AhUBRQgXgYgBguIAAhzIBIAAIAABoQABAWAIAKQAJALARAAQAQAAALgMQAKgMAAgXIAAhkIBIAAIAADNIhEAAIAAgWQgMANgPAGQgQAHgRAAQgoAAgYgYg");
	this.shape_17.setTransform(300.85,15.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("Ag7BdQgagOgPgYQgPgYgBgfQABgeAPgYQAPgYAagOQAagNAhAAQAhAAAbANQAaANAPAYQAPAZABAeQgBAfgPAYQgPAYgaAOQgbANghAAQggAAgbgNgAgegjQgMANAAAWQAAAXAMANQAMANASAAQATAAAMgNQANgNAAgXQAAgWgNgNQgMgNgTAAQgSAAgMANg");
	this.shape_18.setTransform(275.45,15.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AglCFIAAhhIhlioIBPAAIA+BpIA/hpIBJAAIhmCpIAABgg");
	this.shape_19.setTransform(249.975,12.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgdBsQgWgUAAgnIAAhEIgeAAIAAg2IAeAAIAAg2IBHAAIAAA2IAwAAIAAA2IgwAAIAABDQAAALAGAHQAGAGAKAAQAMAAAKgHIASAzQgKAGgNADQgNADgPAAQgnAAgVgUg");
	this.shape_20.setTransform(217.8,13.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AhEBpIAAjNIBEAAIAAAYQALgOASgHQARgHAXAAIAABBIgRgBQgWAAgOANQgNAMAAAZIAABfg");
	this.shape_21.setTransform(202.15,15.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AhCBiQgRgJgJgNQgJgOAAgTQAAgdAWgQQAWgQAvAAIAoAAQgCgggoAAQgPAAgPAEQgQAGgKAIIgZgyQASgLAYgGQAZgHAYABQAzAAAbAXQAaAXAAAwIAAByIhDAAIAAgaQgPAdgtAAQgYAAgRgIgAgfAoQAAAKAHAFQAHAGANAAQALAAAKgGQAJgGAEgMIAAgSIgeAAQgfAAAAAVg");
	this.shape_22.setTransform(180.825,15.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgdBsQgWgUAAgnIAAhEIgeAAIAAg2IAeAAIAAg2IBHAAIAAA2IAwAAIAAA2IgwAAIAABDQAAALAGAHQAGAGAKAAQAMAAAKgHIASAzQgJAGgNADQgNADgPAAQgnAAgWgUg");
	this.shape_23.setTransform(161.15,13.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AhBCDQgegIgTgOIAYg3QATAMAXAGQAYAIAWAAQArAAAAgWQAAgLgMgGQgNgFgbgHQgegGgTgHQgVgIgOgPQgPgRAAgbQAAgZAOgTQANgUAagLQAbgLAlAAQAbAAAZAFQAZAHAUALIgYA4QglgVgkAAQgWAAgKAHQgKAHAAAKQAAALANAFQAMAGAZAFQAeAGAVAIQATAHAPAPQAPAQAAAdQAAAXgNAUQgOATgbALQgaAMglAAQggAAgfgHg");
	this.shape_24.setTransform(140.85,12.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("Ag3AcIAAg3IBvAAIAAA3g");
	this.shape_25.setTransform(121.5,15.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AhzCNIAAkWIBFAAIAAAUQAVgYAnABQAcAAAYAMQAWAOAOAYQANAYAAAgQAAAggNAXQgOAYgWAOQgYANgcgBQgjABgVgWIAABbgAgfhGQgMANAAAXQAAAXAMAMQAMANATAAQASAAAMgNQANgMgBgXQABgXgNgNQgMgNgSAAQgTAAgMANg");
	this.shape_26.setTransform(101.95,19.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("ABoBpIAAhpQAAgWgIgKQgJgLgOAAQgRAAgKAMQgJALAAAXIAABmIhIAAIAAhpQAAgrgfAAQgRAAgKAMQgJALAAAXIAABmIhJAAIAAjNIBFAAIAAAWQAMgNAPgGQAQgHATAAQAVAAARAIQARAIAKARQAMgQATgIQATgJAWAAQAmAAAWAXQAXAXAAAuIAAB1g");
	this.shape_27.setTransform(68.625,15.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AhUBRQgXgYgBguIAAhzIBIAAIAABoQABAWAIAKQAJALARAAQAQAAALgMQALgMgBgXIAAhkIBIAAIAADNIhEAAIAAgWQgMANgPAGQgPAHgSAAQgoAAgYgYg");
	this.shape_28.setTransform(35.9,15.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("Ag6B9QgYgKgOgTIAogwQAWAcAZAAQAPAAAIgKQAJgKAAgTIAAhyIhbAAIAAg6ICmAAIAACnQAAA0gbAaQgaAagxAAQgeAAgYgLg");
	this.shape_29.setTransform(11,12.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol84, new cjs.Rectangle(0,-18.2,485,108.8), null);


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

	// Symbol 69
	this.instance = new lib.Symbol69();
	this.instance.setTransform(293.45,89,0.4295,0.4295,0,0,0,7.5,7.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({regX:7.4,scaleX:1,scaleY:1,x:293.9,y:88.95,alpha:1},9,cjs.Ease.backOut).wait(1));

	// Symbol 68
	this.instance_1 = new lib.Symbol68();
	this.instance_1.setTransform(254.4,134.4,0.3889,0.3889,0,0,0,9,9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({scaleX:1,scaleY:1,x:255.9,y:133.9,alpha:1},9,cjs.Ease.backOut).wait(5));

	// Symbol 67
	this.instance_2 = new lib.Symbol67();
	this.instance_2.setTransform(172.8,177.95,0.4576,0.4576,0,0,0,10.6,10.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.backOut).wait(10));

	// Symbol 66
	this.instance_3 = new lib.Symbol66();
	this.instance_3.setTransform(44.95,178.65,0.372,0.372,0,0,0,10.3,10.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1,x:44.9,y:178.6,alpha:1},9,cjs.Ease.backOut).wait(17));

	// Symbol 65
	this.instance_4 = new lib.Symbol65();
	this.instance_4.setTransform(18.3,92.05,0.3137,0.3137,0,0,0,10.2,9.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({regY:9.5,scaleX:1.059,scaleY:1.061,x:17.8,y:92.7,alpha:1},9,cjs.Ease.backOut).wait(21));

	// Symbol 64
	this.instance_5 = new lib.Symbol64();
	this.instance_5.setTransform(82.45,28.25,0.2583,0.259,0,0,0,13.8,19.3);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:13.7,scaleX:0.7445,scaleY:0.7465,y:28.2,alpha:1},9,cjs.Ease.backOut).wait(25));

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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1986CD").s().p("AjOGrQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAIAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAjiGrQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAgAj1GrQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIAIAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgIAAgAi7GrQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIAIgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIgCACgAkJGqQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIACgBIAIAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgJgBgAipGoQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIAIgBQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgIABQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAgAkcGpQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIAIAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAgAiVGpIgBgCQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAIgIABgAknGoIgIgBQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIACgBIAIABQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAgAiDGlQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIAIgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAIgIABQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAgAlCGlQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAABIAIABQABAAAAAAQAAAAABAAQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAgAhuGlQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIACgCIAIgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBABIgIABgAlOGjIgIgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIAIABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAhcGhQAAgBgBAAQAAgBABAAQAAAAAAAAQAAAAABAAIAIgBIACABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgIABQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAgAlhGgIgIgBQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAABABIAIABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAhJGeIABgCIAIgCQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgIABQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAgAl0GdIgIgCQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIAIACQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIgBACgAg1GcQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAIABgCIAIgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIgHACgAmHGZIgIgCQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIACgBIAIACQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAgAgiGYQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAgBABAAQAAAAAAAAQAAAAABAAIAIgCQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIgHACgAmaGUIgHgCQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAIAIACQABAAAAAAQAAAAABABQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAgAgQGTQAAgBgBAAQAAgBABAAQAAAAAAAAQAAAAABAAIAIgCIABABQABAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgIACQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAgAADGPIgCgBIABgCIAIgCQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIgBACIgIACgAmsGPIgIgCIgBgCIACgBIAIACIABACIgCABgAAWGKQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAIAIgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgIACgAm/GKIgGgCIgCgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIACgBIAIADIABACIgBABgAAoGFQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAABAAQAAgBAAAAQAAAAABAAIAHgCQABgBAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgHACgAnRGEIgIgDIgBgCQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIAIADIABACIgCABgAA7F/QgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAIgCIACABQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgIACgAnkF9IgHgDIgBgCQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIAIADQAAAAAAAAQABAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAgABNF5QAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBABAAQAAAAAAAAQAAgBABAAIAHgCQABgBAAAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgHACgAn2F2IgHgDQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIACAAIAIADIABACIgCABgABfFzIgBgBIABgCIAHgDQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgIADgAoHFuIgIgEIAAgCQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIAHAEQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAgABwFrIABgCIAHgCQABgBAAAAQAAAAABAAQAAABAAAAQABAAAAAAIgBADIgIACIAAABQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAgACCFkIABgCIAHgDQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIgBACIgIADIAAABQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAgAoZFlIgHgEQAAAAAAAAQgBgBAAAAQAAAAAAAAQABgBAAAAIACgBIAHAEIABACIgCABgACVFeIgBgBIABgCIAHgDQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgIADgAoqFcIgHgEQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAAAABIAHAEIABACIgCABgACmFWQAAgBgBAAQAAAAABgBQAAAAAAAAQAAgBABAAIAHgDQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAIgBACIgHADIgBABgAo6FSIgHgFIgBgCQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABABIAGAEQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgBABgAC5FPIgCgBIABgCIAIgEIACABQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgHAEgApLFHIgGgEQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAABIAGAEQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgCAAgADKFHIgBgBIABgCIAHgDIACAAQABABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgHAEgADcE/IgBgBIAAgCIAIgEIACABQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgHAEgApaE8IgHgFQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAHAFQAAAAAAABQABAAAAAAQAAABgBAAQAAAAAAABIgBAAgADtE3IgBgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIAHgEQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIgHAEgApqEwIgGgFQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAGAFQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgCAAgAD/EuIgCAAIABgDIAHgDIADABIgBACIgHADgAEPElQAAAAgBgBQAAAAABAAQAAgBAAAAQAAAAABAAIAHgEQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIgHAEIgBAAgAp4EjIgGgFQAAgBgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIAGAGQAAAAAAAAQABAAAAABQAAAAgBAAQAAABAAAAIgBABgAEiEdIgCAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIAHgDQAAgBABAAQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABIgHADgAqGEWIgGgGQAAAAgBAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAGAGQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIgBAAgAExEUQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIAHgEIACABQABAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgIADIAAABgAFEEMIgCgBIABgCIAHgEIACABQABAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgHAEgAqUEIIgFgGQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABIAFAGQABAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgBABgAFUECQAAgBgBAAQAAAAAAAAQAAgBABAAQAAAAAAAAIAHgEIACAAQABABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgIAEgAqhD5IgFgGQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABABAAAAIAFAGQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgCAAgAFmD5IgCAAIABgDIAHgEIACABQABAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgHAEgAF3DwIgCgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAIAHgEIACABQABAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgHAEgAqrDrIgCgBIgEgHQAAAAgBAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIAFAGQAAAAAAABQABAAAAAAQAAABgBAAQAAAAAAABgAGIDmIgCAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIAHgEIACABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAIgHAEgAGXDcIAAgCIAHgFIADABIgBACIgHAEIgBABgAq3DaIgEgHQAAgBgBAAQAAAAABgBQAAAAAAAAQAAgBABAAIACABIAEAHQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgBABgAGnDSIABgCIAHgFQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABIAAACIgIAFgAq/DJIgBgBIgDgHIAAgCIADABIADAHQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAgAG5DIIgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAHgEQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgHAEgAHIC9QAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAIAGgEQABgBAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIgHAFIAAAAgArGC3IgCgBIgCgHIABgCQAAgBABAAQAAAAAAAAQABAAAAABQAAAAAAABIADAHIgBACgAHYCzIABgCIAHgFQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgGAEIgBABgAHpCoQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAIAHgFQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgGAEIgBABgArNCkIgCgIQAAAAgBgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIACAIIgBACIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAgAH6CeIgCgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAIAGgFQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgGAFgAIICSQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIAGgFIACAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgGAEIgBABgArSCRIgBgIQgBgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIABAIQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAIYCHQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAHgFIACABQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAAAIgHAFIgBAAgArUB/QAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgBgIIABgCQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIABAIQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAgAInB7IABgCIAGgFQABgBAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIgGAFIgBABgAI3BvQAAAAgBgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAGgFQABgBAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIgGAFIgBABgArWBsQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAIgBgIQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIAAAIQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAgAJGBjQAAAAgBgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAGgFQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAIgGAFIgBABgArYBXIAAgIIABgCQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAAIQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAgBAAAAgAJVBXQAAgBgBAAQAAAAAAgBQAAAAABAAQAAgBAAAAIAGgFQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgGAFIgBAAgAJkBKQAAAAgBAAQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgFQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgGAFIgBABgArYBEIAAgIQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIgBAIQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAJzA+IgBgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAGgFQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgGAGgArXAwIABgIIACgBQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIgBAHQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAgAKAAwQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAIAFgFQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIgGAFIgBABgAKPAjQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIAFgGQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgGAFIgBABgArVAdIABgIIACgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIgCAIQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAgAKcAWQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAGgFQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgFAGIgBAAgArSAKIACgIQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgCAIQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAQgBgBAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAKqAIQAAgBgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAIAGgGQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIgGAGIgBAAgAK3gFQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAGgGQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAgBABIgFAGIgCAAgArNgGQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIACgIIABgBIABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIgCAHQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAgALEgTQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAGgGQAAAAAAAAQABgBAAAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAAAAAAAIgFAGIgCABgArJgbIACgIQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABgBAAIgCAIIgCABQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAgALRgiQAAgBAAAAQgBAAAAAAQAAgBAAAAQABAAAAAAIAFgGQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgGAGIgBAAgArCgsQgBAAAAAAQAAAAAAAAQgBgBAAAAQABAAAAgBIACgHQABgBAAAAQAAgBAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQAAAAgBABIgCAHIgCACgAq8g+QAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIADgHQABgBAAAAQAAgBAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQAAAAgBABIgDAHIgBABgAq1hQIAAgCIADgHQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgDAIIgCAAgAqshhQgBgBAAAAQAAAAAAAAQgBgBAAAAQABAAAAAAIADgIQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAgBABIgDAHIgCABgAqkhyQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAEgHQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAgBABIgDAHIgCABgAqaiDQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAEgGIADgBQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgEAHIgBABgAqQiUQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIAFgHQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgEAHIgBAAgAqFikQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIAFgHQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIgEAHIgCAAgAp6i0IgBgCIAFgGQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgFAGIgBABgApvjDQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAFgHQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgFAHIgCAAgApijSIgBgCIAGgHQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgFAGIgBAAgApWjhQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIAGgGQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAAAIgFAGIgCABgApJjvQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIAGgGQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIgFAGIgCAAgAo7j9QAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAIAGgGQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgGAGIgBABgAotkKQAAgBgBAAQAAAAAAgBQAAAAAAAAQABgBAAAAIAGgFQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgGAGIgBAAgAofkYQAAAAgBAAQAAgBAAAAQAAAAAAAAQABgBAAAAIAGgFQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgGAFIgBABgAoRklQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAGgFQABgBAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIgGAGIgBAAgAoBkxIgBAAQAAgBgBAAQAAAAAAAAQAAgBABAAQAAAAAAAAIAGgGQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBABIgGAFgAnzk9QAAgBgBAAQAAAAAAgBQAAAAAAAAQABgBAAAAIAGgFQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgGAFIgBAAgAnklJQAAgBgBAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAHgFQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgGAFIgBAAgAnUlVIgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAHgEQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgHAFgAnFlhQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAIAHgFQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgGAEIgBABgAm0lsIgCAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIAGgEQABgBAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIgGAFgAmml3QAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAHgEQABgBAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgHAFIgBAAgAmWmDIAAgCIAHgEQAAgBABAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgHAFIgBAAgAmGmNQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAHgEQAAgBABAAQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgHAFIgBAAgAl1mYIgBAAIAAgCIAHgFQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgHAEgAlmmjQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIAHgFIACABQABAAAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgHAEIgBABg");
	this.shape.setTransform(149.667,109.4154,1.9057,1.9059);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.3,12.9,295.5,177.9);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:54.5},7).to({y:56.8},7).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol76();
	this.instance_1.setTransform(62.8,69.95,1,1,0,0,0,62.8,39.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:72.25},7).to({y:69.95},7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.3,125.6,137.9);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:43.5},6).to({y:44.8},6).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol74();
	this.instance_1.setTransform(40.9,78.7,1,1,0,0,0,40.9,25.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:80.25},6).to({y:78.7},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.3,81.9,107.2);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:69.75},5).to({y:71.7},5).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol72();
	this.instance_1.setTransform(72.2,132.85,1,1,0,0,0,72.2,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:134.6},5).to({y:132.85},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.9,144.5,181.8);


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

	// Layer_2
	this.instance = new lib.Symbol81();
	this.instance.setTransform(-187.5,18.25,0.9032,0.9024,0,0,0,29.9,11.2);

	this.instance_1 = new lib.Symbol82();
	this.instance_1.setTransform(-233.75,19.75,0.8621,0.8619,0,0,0,12,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(17));

	// Layer_20
	this.instance_2 = new lib.Symbol79();
	this.instance_2.setTransform(7.05,21.6,1.385,1.3808,0,0,0,33.2,11.3);

	this.instance_3 = new lib.Symbol80();
	this.instance_3.setTransform(-70.4,24.3,1.4308,1.4241,0,0,0,13.7,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(17));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244,6,296.1,29.4);


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
	this.instance.setTransform(-150.05,316,1.6866,1.6866,0,0,0,62.8,56.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({regX:63.3,regY:57.7,scaleX:1.0594,scaleY:1.0596,x:148,y:81.1},19,cjs.Ease.quartOut).wait(12));

	// Symbol 60
	this.instance_1 = new lib.Symbol60();
	this.instance_1.setTransform(-15.5,307.9,1.5954,1.5954,0,0,0,40.9,52.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({regX:41.5,regY:52.8,scaleX:1.197,scaleY:1.1983,x:245.8,y:130.9},19,cjs.Ease.quartOut).wait(18));

	// Symbol 59
	this.instance_2 = new lib.Symbol59();
	this.instance_2.setTransform(45.8,341.85,1.3257,1.3257,0,0,0,72.2,89.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:89,scaleX:1,scaleY:1,x:375.4,y:100},19,cjs.Ease.quartOut).wait(23));

	// Layer_2
	this.instance_3 = new lib.Symbol63();
	this.instance_3.setTransform(545.75,-38.95,1.2807,1.2802,0,0,0,104.3,23.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(23));

	// Layer_3
	this.instance_4 = new lib.Symbol58();
	this.instance_4.setTransform(481.05,25.75,0.9072,0.9064,0,0,0,247.3,28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.9,-92.4,1037.8,552.2);


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


(lib.Symbol83copy2 = function(mode,startPosition,loop,reversed) {
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
	this.frame_42 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(7));

	// Symbol 88
	this.instance = new lib.Symbol92();
	this.instance.setTransform(254.85,76.9,1,1,0,0,0,226.5,10.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).to({x:229.85,alpha:1},20,cjs.Ease.quadOut).wait(7));

	// Symbol 87
	this.instance_1 = new lib.Symbol91();
	this.instance_1.setTransform(199.85,50.05,1,1,0,0,0,171.5,10);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({x:174.85,alpha:1},20,cjs.Ease.quadOut).wait(16));

	// Symbol 86
	this.instance_2 = new lib.Symbol86();
	this.instance_2.setTransform(208,8.3,1,1,0,0,0,206.1,16.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},20,cjs.Ease.quadOut).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,-8.7,479.5,107.3);


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
	this.instance.setTransform(211.75,34.3,1,1,0,0,0,197.7,34.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:197.7,alpha:1},19,cjs.Ease.quadOut).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-18.2,499,108.8);


// stage content:
(lib.KnowledgeCity_728x90_v2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol83copy2();
	this.instance.setTransform(298.85,48.4,0.6183,0.6181,0,0,0,206.3,53.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(187).to({_off:false},0).wait(143));

	// text
	this.instance_1 = new lib.Symbol83();
	this.instance_1.setTransform(314.8,50.9,0.6773,0.6772,0,0,0,205.9,50.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).wait(145).to({alpha:0},18,cjs.Ease.quadOut).to({_off:true},1).wait(140));

	// call to action.svg
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(654.6,45.6,0.154,0.1528,0,0,0,95.1,18.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).to({regX:96.4,regY:19.7,scaleX:0.6165,scaleY:0.6111,x:656.8,y:46.75,alpha:1},22,cjs.Ease.backOut).wait(182).to({regY:19.8,scaleX:0.6571,scaleY:0.6514,x:656.75,y:46.8},8).to({regY:19.7,scaleX:0.6165,scaleY:0.6111,x:656.8,y:46.75},8).wait(6).to({regY:19.8,scaleX:0.6571,scaleY:0.6514,x:656.75,y:46.8},8).to({regY:19.7,scaleX:0.6165,scaleY:0.6111,x:656.8,y:46.75},8).wait(9));

	// logo
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(89.95,47.6,0.3824,0.3788,0,0,0,198.4,50.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(330));

	// Banner 320x50 (êîïèÿ2)
	this.instance_4 = new lib.Symbol57();
	this.instance_4.setTransform(509.4,49.8,0.3768,0.377,0,0,0,261.6,114.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(329));

	// buildings
	this.instance_5 = new lib.Symbol56();
	this.instance_5.setTransform(743.95,107.5,0.4655,0.465,0,0,0,287.8,208.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:571.45},329).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Eg6bgIlMB03AAAIAARLMh03AAAg");
	this.shape.setTransform(364,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg6bAImIAAxLMB03AAAIAARLg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(330));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,520,134.9);
// library properties:
lib.properties = {
	id: '4C67F3A136A92E4E81338A9018FE5B2A',
	width: 728,
	height: 90,
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