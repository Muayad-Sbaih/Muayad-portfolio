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



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,487,347);// helper functions:

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

	// timeline functions:
	this.frame_65 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(65).call(this.frame_65).wait(1));

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgITAgUMAAAhAnIQoAAMAAABAng");
	var mask_graphics_1 = new cjs.Graphics().p("EgITAgaMAAAhAzIQoAAMAAABAzg");
	var mask_graphics_2 = new cjs.Graphics().p("EgITAggMAAAhBAIQoAAMAAABBAg");
	var mask_graphics_3 = new cjs.Graphics().p("EgITAgnMAAAhBNIQoAAMAAABBNg");
	var mask_graphics_4 = new cjs.Graphics().p("EgITAguMAAAhBbIQoAAMAAABBbg");
	var mask_graphics_5 = new cjs.Graphics().p("EgITAg0MAAAhBnIQoAAMAAABBng");
	var mask_graphics_6 = new cjs.Graphics().p("EgITAg7MAAAhB1IQoAAMAAABB1g");
	var mask_graphics_7 = new cjs.Graphics().p("EgITAhBMAAAhCBIQoAAMAAABCBg");
	var mask_graphics_8 = new cjs.Graphics().p("EgITAhIMAAAhCPIQoAAMAAABCPg");
	var mask_graphics_9 = new cjs.Graphics().p("EgITAhPMAAAhCdIQoAAMAAABCdg");
	var mask_graphics_10 = new cjs.Graphics().p("EgITAhVMAAAhCpIQoAAMAAABCpg");
	var mask_graphics_11 = new cjs.Graphics().p("EgITAhbMAAAhC2IQoAAMAAABC2g");
	var mask_graphics_12 = new cjs.Graphics().p("EgITAhiMAAAhDDIQoAAMAAABDDg");
	var mask_graphics_13 = new cjs.Graphics().p("EgITAhpMAAAhDRIQoAAMAAABDRg");
	var mask_graphics_14 = new cjs.Graphics().p("EgITAhvMAAAhDdIQoAAMAAABDdg");
	var mask_graphics_15 = new cjs.Graphics().p("EgITAh2MAAAhDrIQoAAMAAABDrg");
	var mask_graphics_16 = new cjs.Graphics().p("EgITAh8MAAAhD3IQoAAMAAABD3g");
	var mask_graphics_17 = new cjs.Graphics().p("EgITAiDMAAAhEFIQoAAMAAABEFg");
	var mask_graphics_18 = new cjs.Graphics().p("EgITAiKMAAAhETIQoAAMAAABETg");
	var mask_graphics_19 = new cjs.Graphics().p("EgITAiQMAAAhEfIQoAAMAAABEfg");
	var mask_graphics_20 = new cjs.Graphics().p("EgITAiWMAAAhErIQoAAMAAABErg");
	var mask_graphics_21 = new cjs.Graphics().p("EgITAidMAAAhE5IQoAAMAAABE5g");
	var mask_graphics_22 = new cjs.Graphics().p("EgITAikMAAAhFHIQoAAMAAABFHg");
	var mask_graphics_23 = new cjs.Graphics().p("EgITAiqMAAAhFTIQoAAMAAABFTg");
	var mask_graphics_24 = new cjs.Graphics().p("EgITAixMAAAhFhIQoAAMAAABFhg");
	var mask_graphics_25 = new cjs.Graphics().p("EgITAi4MAAAhFuIQoAAMAAABFug");
	var mask_graphics_26 = new cjs.Graphics().p("EgITAi+MAAAhF7IQoAAMAAABF7g");
	var mask_graphics_27 = new cjs.Graphics().p("EgITAjEMAAAhGHIQoAAMAAABGHg");
	var mask_graphics_28 = new cjs.Graphics().p("EgITAjLMAAAhGVIQoAAMAAABGVg");
	var mask_graphics_29 = new cjs.Graphics().p("EgITAjSMAAAhGjIQoAAMAAABGjg");
	var mask_graphics_30 = new cjs.Graphics().p("EgITAjYMAAAhGvIQoAAMAAABGvg");
	var mask_graphics_31 = new cjs.Graphics().p("EgITAjfMAAAhG9IQoAAMAAABG9g");
	var mask_graphics_32 = new cjs.Graphics().p("EgITAjlMAAAhHJIQoAAMAAABHJg");
	var mask_graphics_33 = new cjs.Graphics().p("EgITAjsMAAAhHXIQoAAMAAABHXg");
	var mask_graphics_34 = new cjs.Graphics().p("EgITAjzMAAAhHkIQoAAMAAABHkg");
	var mask_graphics_35 = new cjs.Graphics().p("EgITAj5MAAAhHxIQoAAMAAABHxg");
	var mask_graphics_36 = new cjs.Graphics().p("EgITAj/MAAAhH+IQoAAMAAABH+g");
	var mask_graphics_37 = new cjs.Graphics().p("EgITAkGMAAAhILIQoAAMAAABILg");
	var mask_graphics_38 = new cjs.Graphics().p("EgITAkNMAAAhIZIQoAAMAAABIZg");
	var mask_graphics_39 = new cjs.Graphics().p("EgITAkTMAAAhIlIQoAAMAAABIlg");
	var mask_graphics_40 = new cjs.Graphics().p("EgITAkaMAAAhIzIQoAAMAAABIzg");
	var mask_graphics_41 = new cjs.Graphics().p("EgITAkgMAAAhI/IQoAAMAAABI/g");
	var mask_graphics_42 = new cjs.Graphics().p("EgITAknMAAAhJNIQoAAMAAABJNg");
	var mask_graphics_43 = new cjs.Graphics().p("EgITAkuMAAAhJaIQoAAMAAABJag");
	var mask_graphics_44 = new cjs.Graphics().p("EgITAk0MAAAhJnIQoAAMAAABJng");
	var mask_graphics_45 = new cjs.Graphics().p("EgITAk6MAAAhJ0IQoAAMAAABJ0g");
	var mask_graphics_46 = new cjs.Graphics().p("EgJRAk9MAAAhJ5ISkAAMAAABJ5g");
	var mask_graphics_47 = new cjs.Graphics().p("EgKQAlAMAAAhKAIUhAAMAAABKAg");
	var mask_graphics_48 = new cjs.Graphics().p("EgLOAlDMAAAhKGIWdAAMAAABKGg");
	var mask_graphics_49 = new cjs.Graphics().p("EgMMAlGMAAAhKLIYZAAMAAABKLg");
	var mask_graphics_50 = new cjs.Graphics().p("EgNKAlJMAAAhKSIaVAAMAAABKSg");
	var mask_graphics_51 = new cjs.Graphics().p("EgOIAlMMAAAhKYIcRAAMAAABKYg");
	var mask_graphics_52 = new cjs.Graphics().p("EgPGAlPMAAAhKdIeNAAMAAABKdg");
	var mask_graphics_53 = new cjs.Graphics().p("EgQFAlSMAAAhKkMAgLAAAMAAABKkg");
	var mask_graphics_54 = new cjs.Graphics().p("EgRDAlVMAAAhKqMAiHAAAMAAABKqg");
	var mask_graphics_55 = new cjs.Graphics().p("EgSAAlYMAAAhKvMAkCAAAMAAABKvg");
	var mask_graphics_56 = new cjs.Graphics().p("EgS/AlbMAAAhK2MAl/AAAMAAABK2g");
	var mask_graphics_57 = new cjs.Graphics().p("EgT9AleMAAAhK8MAn7AAAMAAABK8g");
	var mask_graphics_58 = new cjs.Graphics().p("EgU7AlhMAAAhLBMAp3AAAMAAABLBg");
	var mask_graphics_59 = new cjs.Graphics().p("EgV5AlkMAAAhLIMArzAAAMAAABLIg");
	var mask_graphics_60 = new cjs.Graphics().p("EgW3AlnMAAAhLOMAtvAAAMAAABLOg");
	var mask_graphics_61 = new cjs.Graphics().p("EgX1AlqMAAAhLTMAvrAAAMAAABLTg");
	var mask_graphics_62 = new cjs.Graphics().p("EgYzAltMAAAhLaMAxoAAAMAAABLag");
	var mask_graphics_63 = new cjs.Graphics().p("EgZyAlwMAAAhLgMAzlAAAMAAABLgg");
	var mask_graphics_64 = new cjs.Graphics().p("EgawAlzMAAAhLlMA1hAAAMAAABLlg");
	var mask_graphics_65 = new cjs.Graphics().p("EgbuAl2MAAAhLsMA3dAAAMAAABLsg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:292.25,y:-203.35}).wait(1).to({graphics:mask_graphics_1,x:292.25,y:-193.8}).wait(1).to({graphics:mask_graphics_2,x:292.25,y:-184.25}).wait(1).to({graphics:mask_graphics_3,x:292.25,y:-174.725}).wait(1).to({graphics:mask_graphics_4,x:292.25,y:-165.175}).wait(1).to({graphics:mask_graphics_5,x:292.25,y:-155.625}).wait(1).to({graphics:mask_graphics_6,x:292.25,y:-146.075}).wait(1).to({graphics:mask_graphics_7,x:292.25,y:-136.525}).wait(1).to({graphics:mask_graphics_8,x:292.25,y:-127}).wait(1).to({graphics:mask_graphics_9,x:292.25,y:-117.45}).wait(1).to({graphics:mask_graphics_10,x:292.25,y:-107.9}).wait(1).to({graphics:mask_graphics_11,x:292.25,y:-98.35}).wait(1).to({graphics:mask_graphics_12,x:292.25,y:-88.8}).wait(1).to({graphics:mask_graphics_13,x:292.25,y:-79.275}).wait(1).to({graphics:mask_graphics_14,x:292.25,y:-69.725}).wait(1).to({graphics:mask_graphics_15,x:292.25,y:-60.175}).wait(1).to({graphics:mask_graphics_16,x:292.25,y:-50.625}).wait(1).to({graphics:mask_graphics_17,x:292.25,y:-41.075}).wait(1).to({graphics:mask_graphics_18,x:292.25,y:-31.55}).wait(1).to({graphics:mask_graphics_19,x:292.25,y:-22}).wait(1).to({graphics:mask_graphics_20,x:292.25,y:-12.45}).wait(1).to({graphics:mask_graphics_21,x:292.25,y:-2.9}).wait(1).to({graphics:mask_graphics_22,x:292.25,y:6.675}).wait(1).to({graphics:mask_graphics_23,x:292.25,y:16.175}).wait(1).to({graphics:mask_graphics_24,x:292.25,y:25.75}).wait(1).to({graphics:mask_graphics_25,x:292.25,y:35.3}).wait(1).to({graphics:mask_graphics_26,x:292.25,y:44.85}).wait(1).to({graphics:mask_graphics_27,x:292.25,y:54.4}).wait(1).to({graphics:mask_graphics_28,x:292.25,y:63.925}).wait(1).to({graphics:mask_graphics_29,x:292.25,y:73.475}).wait(1).to({graphics:mask_graphics_30,x:292.25,y:83.025}).wait(1).to({graphics:mask_graphics_31,x:292.25,y:92.575}).wait(1).to({graphics:mask_graphics_32,x:292.25,y:102.125}).wait(1).to({graphics:mask_graphics_33,x:292.25,y:111.65}).wait(1).to({graphics:mask_graphics_34,x:292.25,y:121.2}).wait(1).to({graphics:mask_graphics_35,x:292.25,y:130.75}).wait(1).to({graphics:mask_graphics_36,x:292.25,y:140.3}).wait(1).to({graphics:mask_graphics_37,x:292.25,y:149.85}).wait(1).to({graphics:mask_graphics_38,x:292.25,y:159.375}).wait(1).to({graphics:mask_graphics_39,x:292.25,y:168.925}).wait(1).to({graphics:mask_graphics_40,x:292.25,y:178.475}).wait(1).to({graphics:mask_graphics_41,x:292.25,y:188.025}).wait(1).to({graphics:mask_graphics_42,x:292.25,y:197.575}).wait(1).to({graphics:mask_graphics_43,x:292.25,y:207.1}).wait(1).to({graphics:mask_graphics_44,x:292.25,y:216.65}).wait(1).to({graphics:mask_graphics_45,x:292.25,y:226.2}).wait(1).to({graphics:mask_graphics_46,x:286.05,y:225.9}).wait(1).to({graphics:mask_graphics_47,x:279.825,y:225.6}).wait(1).to({graphics:mask_graphics_48,x:273.625,y:225.3}).wait(1).to({graphics:mask_graphics_49,x:267.4,y:225}).wait(1).to({graphics:mask_graphics_50,x:261.2,y:224.7}).wait(1).to({graphics:mask_graphics_51,x:254.975,y:224.4}).wait(1).to({graphics:mask_graphics_52,x:248.775,y:224.1}).wait(1).to({graphics:mask_graphics_53,x:242.55,y:223.8}).wait(1).to({graphics:mask_graphics_54,x:236.35,y:223.5}).wait(1).to({graphics:mask_graphics_55,x:230.15,y:223.2}).wait(1).to({graphics:mask_graphics_56,x:223.925,y:222.9}).wait(1).to({graphics:mask_graphics_57,x:217.725,y:222.6}).wait(1).to({graphics:mask_graphics_58,x:211.5,y:222.3}).wait(1).to({graphics:mask_graphics_59,x:205.3,y:222}).wait(1).to({graphics:mask_graphics_60,x:199.075,y:221.7}).wait(1).to({graphics:mask_graphics_61,x:192.875,y:221.4}).wait(1).to({graphics:mask_graphics_62,x:186.65,y:221.1}).wait(1).to({graphics:mask_graphics_63,x:180.45,y:220.8}).wait(1).to({graphics:mask_graphics_64,x:174.225,y:220.5}).wait(1).to({graphics:mask_graphics_65,x:168.025,y:220.2}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXfAjvIAAgGMAi0AAAQDOAACSiSQCSiSAAjOMAAAg4hQAAiTBOh6QBLh4B/g/IAAAGQh7A/hLB2QhMB5AACQMAAAA4hQAADRiUCTQiTCUjRAAg");
	this.shape.setTransform(150.35,228.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(66));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300.7,457.4);


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
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.539,0.539);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,262.5,187.1), null);


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
	this.shape.graphics.f("#00B859").s().p("AgqA2QgNgSAAgeIAAgLQAAgdAPgSQARgSAZAAQAYAAAOAOQAOAOABAXIgjAAQgCgLgDgFQgEgGgJAAQgUAAABAfIAAAVQgBAfAWAAQAUAAACgXIAAgBIgZAAIAAgZIA3AAIAABMIgZAAIgDgQQgJASgXAAQgYAAgOgRg");
	this.shape.setTransform(208.5,22.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B859").s().p("AgrBGIAAgTQAAgRAHgLQAGgNASgMQAPgLAEgEQADgFABgHIAAgBQAAgLgKAAQgLAAAAASIggAAQABgWALgMQAMgMAUAAQASAAAMALQALAKAAASIAAABQAAANgFAJQgGAJgPAMQgPAJgDAHQgFAEAAAIIAyAAIAAAcg");
	this.shape_1.setTransform(197.7,22.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00B859").s().p("AgrBGIAAgTQAAgRAGgLQAHgNATgMQAOgLAEgEQAEgFAAgHIAAgBQAAgLgKAAQgLAAAAASIgfAAQAAgWALgMQAMgMAUAAQATAAALALQAMAKgBASIAAABQAAANgEAJQgGAJgQAMQgPAJgEAHQgEAEAAAIIAyAAIAAAcg");
	this.shape_2.setTransform(188.05,22.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00B859").s().p("AgqA1QgPgSAAgdIAAgLQAAgdAPgSQAQgSAaAAQAbAAAQASQAQASAAAdIAAALQAAAdgQASQgPASgcAAQgaAAgQgSgAgUgKIAAAVQAAAfAUAAQAVAAABgfIAAgVQgBgfgVAAQgUAAAAAfg");
	this.shape_3.setTransform(177.05,22.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00B859").s().p("AANBFIgRgtIgLAAIAAAtIgjAAIAAiJIA2AAQAUAAANAMQANAMAAAWIAAACQAAAcgVAKIAWAzgAgPgEIAPAAQANAAAAgQIAAgCQAAgRgNAAIgPAAg");
	this.shape_4.setTransform(165.45,22.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00B859").s().p("AgtBFIAAiJIBZAAIAAAdIg1AAIAAAZIAvAAIAAAbIgvAAIAAAbIA3AAIAAAdg");
	this.shape_5.setTransform(154.5,22.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00B859").s().p("AgsBFIAAgaIAuhSIgqAAIAAgdIBSAAIAAAbIgsBRIAvAAIAAAdg");
	this.shape_6.setTransform(144.275,22.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00B859").s().p("AgRBFIAAiJIAjAAIAACJg");
	this.shape_7.setTransform(136.75,22.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00B859").s().p("Ag2BFIAAiJIAwAAQAbAAAQAPQASARAAAfIAAALQAAAfgSARQgQAPgbAAgAgTAoIALAAQAZAAAAgdIAAgVQAAgQgHgGQgGgHgMAAIgLAAg");
	this.shape_8.setTransform(128.225,22.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00B859").s().p("AANBFIgSgtIgJAAIAAAtIgkAAIAAiJIA2AAQAUAAANAMQANAMAAAWIAAACQAAAcgVAKIAWAzgAgOgEIAOAAQAOAAgBgQIAAgCQABgRgOAAIgOAAg");
	this.shape_9.setTransform(116.5,22.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00B859").s().p("AgtBFIAAiJIBZAAIAAAdIg1AAIAAAZIAvAAIAAAbIgvAAIAAAbIA3AAIAAAdg");
	this.shape_10.setTransform(105.55,22.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00B859").s().p("AgTBFIgmiJIAnAAIATBdIAUhdIAlAAIgmCJg");
	this.shape_11.setTransform(94.325,22.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00B859").s().p("AgPAyIAAgfIAfAAIAAAfgAgPgRIAAggIAfAAIAAAgg");
	this.shape_12.setTransform(82.475,24.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00B859").s().p("AgqA1QgPgSAAgdIAAgLQAAgdAPgSQAQgSAaAAQAbAAAQASQAQASAAAdIAAALQAAAdgQASQgPASgcAAQgaAAgQgSgAgUgKIAAAVQgBAfAVAAQAVAAAAgfIAAgVQAAgfgVAAQgVAAABAfg");
	this.shape_13.setTransform(73.35,22.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00B859").s().p("AgqA2QgNgSAAgeIAAgLQAAgdAQgSQAPgSAaAAQAXAAAPAOQANAOACAXIgjAAQgBgLgEgFQgEgGgJAAQgUAAAAAfIAAAVQAAAfAWAAQAUAAABgXIAAgBIgXAAIAAgZIA2AAIAABMIgZAAIgDgQQgJASgXAAQgYAAgOgRg");
	this.shape_14.setTransform(60.75,22.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00B859").s().p("AgRBFIAAiJIAjAAIAACJg");
	this.shape_15.setTransform(52.1,22.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00B859").s().p("Ag2BFIAAiJIAwAAQAcAAAQAPQARARAAAfIAAALQAAAfgRARQgRAPgbAAgAgSAoIAKAAQAZAAAAgdIAAgVQAAgQgHgGQgGgHgMAAIgKAAg");
	this.shape_16.setTransform(43.575,22.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00B859").s().p("AgqBJQgPgSAAgdIAAgMQAAgcAPgRQAPgTAbAAQAaAAARATQAQARAAAcIAAAMQAAAdgQASQgQATgbgBQgbABgPgTgAgUAJIAAAWQAAAgAUgBQAVABAAggIAAgWQAAgdgVAAQgUAAAAAdgAgQg8IAVgfIAkAAIgeAfg");
	this.shape_17.setTransform(31.05,20.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00B859").s().p("AgnA1QgQgSAAgdIAAgLQAAgdAQgSQAPgSAbAAQAXAAAOAPQAPAQABAbIgkAAQAAgdgSAAQgTAAgBAfIAAAVQABAfATAAQASAAAAgdIAkAAQAAAbgPAQQgPAPgYAAQgaAAgPgSg");
	this.shape_18.setTransform(18.75,22.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AubDUQhXAAg/g+Qg+g+AAhYQAAhXA+g+QA+g/BYABIc3AAQBYgBA+A/QA+A+AABXQAABYg+A+Qg+A+hYAAg");
	this.shape_19.setTransform(113.625,21.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,227.3,42.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAgBaIgJggIgvAAIgJAgIgvAAIA3izIAzAAIA3CzgAgPAXIAeAAIgPg7g");
	this.shape.setTransform(214,36.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BFQgUgXAAgmIAAgPQAAgnAUgXQAVgYAiAAQAfABATAUQATAUABAjIgvAAQAAglgYAAQgZAAAAAoIAAAcQAAApAZAAQAYAAAAgnIAvAAQgBAlgTAUQgSAVgggBQgjAAgUgYg");
	this.shape_1.setTransform(198.825,36.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXBaIAAizIAvAAIAACzg");
	this.shape_2.setTransform(187.475,36.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASBaIgYg6IgOAAIAAA6IgvAAIAAizIBIAAQAaAAARAPQASARAAAcIAAACQAAAlgdAOIAfBCgAgUgFIAUAAQARAAAAgWIAAgCQAAgWgRAAIgUAAg");
	this.shape_3.setTransform(176.875,36.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWBaIAAiNIgnAAIAAgmIB7AAIAAAmIgmAAIAACNg");
	this.shape_4.setTransform(162.375,36.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7B2IAAizIB1AAIAAAmIhGAAIAAAgIA+AAIAAAkIg+AAIAAAjIBIAAIAAAmgAgWhOIAcgnIAvAAIgmAng");
	this.shape_5.setTransform(149.075,33.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxBaIAAizIAwAAIAACNIAzAAIAAAmg");
	this.shape_6.setTransform(136.225,36.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag7BaIAAizIB1AAIAAAmIhGAAIAAAgIA+AAIAAAkIg+AAIAAAjIBIAAIAAAmg");
	this.shape_7.setTransform(123.625,36.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAgBaIgIggIgwAAIgIAgIgwAAIA3izIAzAAIA3CzgAgPAXIAeAAIgPg7g");
	this.shape_8.setTransform(104.225,36.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWBaIAAiNIgnAAIAAgmIB7AAIAAAmIgmAAIAACNg");
	this.shape_9.setTransform(91.525,36.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag7BaIAAizIB1AAIAAAmIhHAAIAAAgIA/AAIAAAkIg/AAIAAAjIBJAAIAAAmg");
	this.shape_10.setTransform(78.275,36.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgxBaIAAizIAvAAIAACNIA0AAIAAAmg");
	this.shape_11.setTransform(65.425,36.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0BFQgUgWAAgnIAAgPQAAgnAUgXQAVgYAiAAQAfABATAUQATAUABAjIgvAAQAAglgXAAQgaAAAAAoIAAAcQAAApAaAAQAXAAAAgnIAvAAQAAAkgTAVQgTAVgggBQgiAAgVgYg");
	this.shape_12.setTransform(51.575,36.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXBaIAAizIAvAAIAACzg");
	this.shape_13.setTransform(40.25,36.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag0BFQgUgWAAgnIAAgPQAAgnAUgXQAVgYAiAAQAfABATAUQATAUABAjIgvAAQAAglgXAAQgaAAAAAoIAAAcQAAApAaAAQAXAAAAgnIAvAAQAAAkgTAVQgTAVgggBQgiAAgVgYg");
	this.shape_14.setTransform(28.925,36.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXBaIAAizIAvAAIAACzg");
	this.shape_15.setTransform(17.625,36.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhBBaIAAizIBJAAQAYAAANALQAQAMAAAYIAAADQAAAXgSANQAXALAAAdIAAADQAAAXgOAOQgQANgaAAgAgTA1IAXAAQAQAAAAgRIAAgEQAAgRgQAAIgXAAgAgTgQIATAAQAQAAAAgQIAAgEQAAgQgQAAIgTAAg");
	this.shape_16.setTransform(7.1,36.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAdBSIgHgeIgsAAIgIAeIgrAAIAyijIAuAAIAzCjgAgOAUIAbAAIgNg1g");
	this.shape_17.setTransform(113.45,8.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AApBSIAAhuIgZBuIgeAAIgahuIAABuIgnAAIAAijIA6AAIAWBpIAXhpIA4AAIAACjg");
	this.shape_18.setTransform(97.075,8.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgtBEQgQgQAAgcIAAhqIArAAIAABrQAAAWASAAQAUAAAAgWIAAhrIAqAAIAABqQAAAcgQAPQgQAQgeAAQgdAAgQgPg");
	this.shape_19.setTransform(81.125,8.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag1BSIAAijIBpAAIAAAjIg/AAIAAAdIA4AAIAAAgIg4AAIAAAgIBCAAIAAAjg");
	this.shape_20.setTransform(64.4,8.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAVBSIAAhDIgoAAIAABDIgrAAIAAijIArAAIAAA/IAoAAIAAg/IAqAAIAACjg");
	this.shape_21.setTransform(50.825,8.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AATBSIgqhgIAABgIgoAAIAAijIAvAAIAoBcIAAhcIAoAAIAACjg");
	this.shape_22.setTransform(36.325,8.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAdBSIgIgeIgrAAIgHAeIgrAAIAxijIAvAAIAxCjgAgOAUIAcAAIgOg1g");
	this.shape_23.setTransform(21.6,8.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgyBAQgPgVAAgkIAAgNQAAgjASgVQATgWAfAAQAcAAAQARQARAQACAcIgqAAQgCgNgEgGQgFgHgLAAQgXAAAAAlIAAAZQAAAlAaAAQAXAAACgbIAAgCIgcAAIAAgeIBAAAIAABbIgdAAIgDgTQgMAWgbAAQgcAAgRgVg");
	this.shape_24.setTransform(6.65,8.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,222.1,45.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgLBfIAAgWIASAAIAAAWgAgKArIAAgDQAAgaAXgTQAYgWAAgRIAAgCQAAgQgKgJQgJgJgPAAQgQAAgKAKQgLAJgCAUIgQAAQACgbAQgOQAPgNAWABQAWAAAOAOQAOANAAAVIAAADQAAAWgYAVQgYAUAAAUIAAADg");
	this.shape.setTransform(211.575,41.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglA2QgOgRAAgfIAAgKQAAggAOgRQAOgRAYAAQAaAAANATQANATgCAiIhWAAIAAAEQAAA0AkAAQAcAAAGgfIAPAAQgIAsgpAAQgYAAgOgRgAgjgKIAAABIBHAAIAAgBQgCgughAAQgiAAgCAug");
	this.shape_1.setTransform(200.558,44.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmBTQgMgSAAgfIAAgLQAAgeAMgRQANgSAXABQAcAAAKAaIAAhUIAPAAIAADDIgOAAIAAgYQgEAMgKAHQgLAJgOAAQgXAAgNgRgAgkAXIAAALQABA1AjgBQASABAJgNQAKgNAAgYIAAgQQAAgXgKgNQgJgNgSAAQgjAAgBAzg");
	this.shape_2.setTransform(187.7,41.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiA9QgLgKAAgRQAAgPAJgKQAIgJAQgCIArgHIAAgSQAAgegcAAQgbAAgCAeIgOAAQABgUAMgMQAMgLATAAQATAAAMAMQALALAAAUIAABfIgOAAIgBgUQgKAXgbAAQgSAAgKgKgAgIAJQgVADAAAWQAAAYAZAAQAPAAAKgKQAKgKAAgQIAAgUg");
	this.shape_3.setTransform(175.525,44.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmBTQgNgSAAgfIAAgLQAAgeANgRQANgSAXABQAbAAAMAaIAAhUIAPAAIAADDIgOAAIAAgYQgMAcgcAAQgXAAgNgRgAgjAXIAAALQAAA1AjgBQASABAJgNQAKgNAAgYIAAgQQAAgXgKgNQgJgNgSAAQgjAAAAAzg");
	this.shape_4.setTransform(163.275,41.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHBiIAAiGIAOAAIAACGgAgHg8IAAglIAPAAIAAAlg");
	this.shape_5.setTransform(154.85,41.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHBiIAAjDIAPAAIAADDg");
	this.shape_6.setTransform(150.15,41.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHBiIAAiGIAOAAIAACGgAgHg8IAAglIAPAAIAAAlg");
	this.shape_7.setTransform(145.525,41.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkBJIgBAXIgOAAIAAjDIAPAAIAABUQAMgaAbAAQAXgBANASQANARAAAeIAAALQAAAfgNASQgNARgXAAQgcAAgLgbgAgagPQgKANAAAXIAAAQQAAAYAKANQAKANARgBQAjABAAg1IAAgLQAAgzgjAAQgRAAgKANg");
	this.shape_8.setTransform(137.075,41.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiA9QgLgKAAgRQAAgPAJgKQAIgJAQgCIArgHIAAgSQAAgegcAAQgbAAgCAeIgOAAQABgUAMgMQAMgLATAAQATAAAMAMQALALAAAUIAABfIgOAAIgBgUQgKAXgbAAQgSAAgKgKgAgIAJQgVADAAAWQAAAYAZAAQAOAAALgKQAKgKAAgQIAAgUg");
	this.shape_9.setTransform(124.275,44.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEBSQgIgJAAgPIAAhdIgXAAIAAgNIAXAAIAAgpIAOAAIAAApIAhAAIAAANIghAAIAABbQAAAVAUAAQAGAAAIgDIAAANQgIADgIAAQgPAAgJgIg");
	this.shape_10.setTransform(114.55,42.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfBFIAAhaQAAgigcAAQgPAAgJALQgJAMAAATIAABSIgPAAIAAiGIAOAAIABAWQAEgLALgHQAKgHALAAQAUAAAKAMQAKAMAAAUIAABdg");
	this.shape_11.setTransform(104.75,44.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglA2QgOgRAAgfIAAgKQAAggAOgRQAOgRAYAAQA1AAgDBIIhWAAIAAAEQAAA0AkAAQAcAAAGgfIAPAAQgIAsgpAAQgYAAgOgRgAgjgKIAAABIBHAAIAAgBQgDguggAAQgiAAgCAug");
	this.shape_12.setTransform(92.6556,44.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMA6IAAhdIgXAAIAAgNIAXAAIAAgpIAOAAIAAApIAhAAIAAANIghAAIAABbQAAAVAUAAQAGAAAIgDIAAANQgIADgIAAQggAAAAggg");
	this.shape_13.setTransform(82.55,42.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgtAbIAPAAQAEAgAcAAQAcAAABgaQgBgNgHgFQgIgGgQgDQgTgFgJgGQgLgKAAgRQAAgRALgLQAMgKARAAQAUAAALAKQALALABAUIgOAAQgEgcgZAAQgLAAgHAGQgIAGAAAMQAAAMAIAFQAGAGAQADQAVAFAJAHQAMAJgBARQAAATgMALQgMAKgTAAQgqAAgFgsg");
	this.shape_14.setTransform(73.5,44.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiA5QgKgLAAgVIAAhdIAPAAIAABaQAAAiAcAAQAOAAAJgLQAIgMAAgTIAAhSIAPAAIAACGIgOAAIgBgVQgEALgJAGQgKAHgMAAQgTAAgKgMg");
	this.shape_15.setTransform(62.225,44.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgsAbIAOAAQADAgAdAAQAcAAAAgaQAAgNgHgFQgHgGgRgDQgTgFgJgGQgLgKAAgRQAAgRALgLQAMgKASAAQASAAALAKQAMALABAUIgOAAQgDgcgaAAQgLAAgHAGQgIAGABAMQgBAMAIAFQAGAGAQADQAVAFAJAHQAMAIAAASQAAATgNALQgMAKgTAAQgqAAgEgsg");
	this.shape_16.setTransform(50.75,44.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgiA9QgLgKAAgRQAAgfAhgFIArgHIAAgSQAAgegcAAQgbAAgCAeIgPAAQACgUAMgMQAMgLASAAQAUAAALAMQAMALAAAUIAABfIgPAAIAAgUQgLAXgaAAQgSAAgKgKgAgIAJQgVADAAAWQAAALAGAHQAHAGAMAAQAOAAAKgKQALgKAAgQIAAgUg");
	this.shape_17.setTransform(34.825,44.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHBiIAAjDIAPAAIAADDg");
	this.shape_18.setTransform(26.975,41.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AglA2QgNgRAAgfIAAgKQAAggAOgRQANgRAYAAQA1AAgDBIIhWAAIAAAEQABA0AjAAQAdAAAFgfIAQAAQgJAsgpAAQgYAAgOgRgAgjgKIAAABIBHAAIAAgBQgCgughAAQghAAgDAug");
	this.shape_19.setTransform(18.733,44.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgzBcIAAizIAPAAIAAAXQAEgLAKgIQALgIAPAAQAWAAANARQANARAAAgIAAALQAAAegNARQgNARgWAAQgcAAgMgaIAABEgAgahBQgKANAAAYIAAAQQAAAXAKANQAKANARAAQAkAAAAgzIAAgLQAAg0gkAAQgRgBgKANg");
	this.shape_20.setTransform(6.425,46.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgbBFIAAiGIAOAAIAAAaQAKgdAZAAIAGAAIAAAPIgGAAQgQAAgIAMQgKANAAAXIAABKg");
	this.shape_21.setTransform(140.85,12.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgiA9QgLgKAAgRQAAgfAhgFIArgIIAAgSQAAgdgcAAQgbAAgCAdIgPAAQABgUANgLQAMgLASAAQAUAAALAMQAMALAAATIAABgIgPAAIAAgUQgLAXgbAAQgRAAgKgKgAgIAJQgWAEAAAVQAAALAHAGQAHAHAMAAQAOAAAKgKQALgKAAgQIAAgUg");
	this.shape_22.setTransform(130.475,12.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgHBiIAAjDIAPAAIAADDg");
	this.shape_23.setTransform(122.6,9.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgiA9QgLgKAAgRQAAgfAhgFIArgIIAAgSQAAgOgIgIQgHgHgNAAQgbAAgCAdIgPAAQABgUANgLQAMgLASAAQAUAAALAMQAMALAAATIAABgIgPAAIAAgUQgLAXgaAAQgSAAgKgKgAgIAJQgVAEAAAVQAAALAGAGQAHAHAMAAQAOAAAKgKQALgKAAgQIAAgUg");
	this.shape_24.setTransform(114.275,12.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgmBTQgNgSAAgfIAAgLQAAgeANgRQANgRAXAAQANAAALAIQAKAGAEALIAAhSIAQAAIAADCIgOAAIgBgYQgEAMgKAHQgLAIgOAAQgXAAgNgQgAgkAXIAAALQAAA0AkAAQARAAAKgNQAKgNAAgXIAAgRQAAgWgKgNQgKgNgRAAQgkAAAAAzg");
	this.shape_25.setTransform(102.025,9.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AglA2QgOgRAAgfIAAgLQAAgfAOgRQAOgRAYAAQA1AAgDBIIhWAAIAAAEQAAA0AkAAQAcAAAGgfIAPAAQgIAsgpAAQgYAAgOgRgAgjgKIAAABIBHAAIAAgBQgDgvggAAQgiAAgCAvg");
	this.shape_26.setTransform(89.9056,12.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgzBcIAAi0IAOAAIABAYQALgbAcAAQAXAAANARQANARAAAfIAAAMQAAAegNARQgNARgXAAQgbAAgMgaIAABEgAgahBQgKANAAAYIAAAQQAAAXAKANQAKANARAAQAjAAAAgzIAAgMQAAg0gjAAQgRAAgKANg");
	this.shape_27.setTransform(77.625,14.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgtAbIAQAAQACAfAdAAQAcAAABgaQAAgLgIgGQgHgGgRgEQgTgEgJgGQgLgKAAgRQAAgRALgLQAMgKARAAQAnAAAEApIgOAAQgEgcgZAAQgLAAgHAGQgHAHAAALQAAAMAHAGQAGAFAQADQAVAFAJAGQALAKAAARQAAATgMAKQgMALgTAAQgqAAgFgsg");
	this.shape_28.setTransform(60.9,12.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgmA2QgOgRAAgfIAAgLQAAgfAOgRQAOgRAYAAQAZAAAOARQAOARAAAfIAAALQAAAfgOARQgOARgZAAQgYAAgOgRgAglgFIAAALQAAA0AlAAQAlAAAAg0IAAgLQAAg0glAAQglAAAAA0g");
	this.shape_29.setTransform(49.375,12.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ABCBFIAAhaQAAgigbAAQgOAAgJALQgIALAAAUIAABSIgPAAIAAhaQABgigbAAQgPAAgJALQgJALABAUIAABSIgPAAIAAiGIAOAAIABAVQAEgLAJgGQAKgHANAAQAdAAAFAaQAEgLAKgHQAKgIAPAAQASAAAKAMQAJALABAVIAABdg");
	this.shape_30.setTransform(33.5,12.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgiA9QgLgKAAgRQAAgfAhgFIArgIIAAgSQAAgOgIgIQgHgHgNAAQgbAAgCAdIgPAAQABgUANgLQAMgLASAAQAUAAALAMQAMALAAATIAABgIgPAAIAAgUQgLAXgbAAQgRAAgKgKgAgIAJQgWAEAAAVQAAALAHAGQAHAHAMAAQAOAAAKgKQALgKAAgQIAAgUg");
	this.shape_31.setTransform(17.775,12.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgHBeIg6i7IARAAIAwClIAxilIARAAIg6C7g");
	this.shape_32.setTransform(6.55,10.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,216.9,55.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ABVCLQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAHAHAAAKQAAALgHAHQgHAHgLAAQgKAAgHgHgABdBwQgEADAAAGQAAAGAEAEQAEAEAFAAQAGAAAEgEQADgEAAgGQAAgGgDgDQgEgEgGAAQgFAAgEAEgABDCSQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgDgKIgNAAIgEAKIgBACIgJAAIgBgBIgBgCIAQgtIACgBIAIAAIACABIAQAtQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgCABgAA3ByIgDAKIAHAAIgEgKIAAAAgAANCSQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgkIgMAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgHQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAIAkAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIAAAHQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgNAAIAAAkQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAgAgjCSQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgtQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAAHQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAIgRAAIAAAIIANAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAAAHQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgNAAIAAAIIASAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAAHQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAgAhMCSQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgtQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAQAAQAQAAAAAOQAAAGgEADQAGAEAAAHQAAAHgFAEQgFAEgIAAgAhCCHIAHAAQAEAAAAgFQAAgEgEAAIgHAAgAhCBzIAGAAQABAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAgEgEAAIgGAAgAA2BaIgDgBQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIgBABIgFAAIgBgBQAAgJAIAAQADAAADACIACABQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIAEAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAJgIAAQgEAAgBgDgAgLg8QgOgPAAgUQAAgVAOgPQAPgOATAAQATAAAPANIABACIgBACIgLALQgBAAAAABQAAAAgBAAQAAAAgBAAQAAgBgBAAQgIgHgLAAQgMAAgIAIQgHAJAAAMQAAALAHAJQAIAIAMAAQALAAAIgHQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIALALIABACIgBACQgPANgTAAQgTAAgPgOgAiag1IgJgHQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAJgMIADgBIACAAQAAABAGAEQAHAEAHAAQAJAAAAgIQAAgEgOgHQgNgFgFgFQgJgHAAgMQAAgMAJgIQAKgJAOAAQASAAAKALQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgHANQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBQAAAAAAAAQgIgHgKAAQgKAAAAAHQAAAFAPAFQAMAGAGAEQAJAIAAAMQAAAMgJAJQgJAIgOAAQgNAAgLgGgABsgwQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAhYQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIAQAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAABHIAjAAQABAAABAAQAAABAAAAQABABAAAAQAAABAAABIAAANQAAABAAABQAAAAgBABQAAAAAAABQgBAAgBAAgABGgwQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIAAhYQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAIAQAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIAABYQAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAgAhVgxQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAgOQAAAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAIAuAAQABAAABAAQAAABAAAAQABAAAAABQAAABAAAAIAAAOQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAgAhVhWQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBIAAgOQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIAuAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABIAAAOQAAABAAABQAAAAgBAAQAAABAAAAQgBAAgBAAgAhVh7QgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgOQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAuAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAOQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBAAg");
	this.shape.setTransform(16.53,26.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC20E").s().p("AhcCIQgpgegTguIAAgCIACgBIAXAAIACABQARAmAiAWQAjAWAoAAQApAAAigWQAjgWARgmIACgBIAWAAQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIAAACQgSAugpAeQgrAdgzAAQgzAAgqgdgAAAB6IAAgVQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAYgBAVgKQAVgMAOgTIACgBIAZAAIABABIAAADQgQAdgdASQgdARgiAAQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBgACAg4QAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQgRgkgjgXQgjgWgoAAQgoAAgjAWQgiAXgSAkQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgWAAIgCgBIAAgCQASguAqgdQAqgeAzAAQAzAAAqAeQApAcATAvQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgCABgAhqg4IgCgBIAAgCQAQgeAdgRQAegRAhAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAAAWQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABAAAAQgXgBgWAMQgVAKgOAUIgCABg");
	this.shape_1.setTransform(18.875,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,34.3,40.8), null);


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
	this.shape.graphics.f("#00B859").s().p("AgwA+QgQgUAAgjIAAgNQABghARgVQASgVAeAAQAcAAAQAQQAQAQACAbIgpAAQgEgagRABQgXAAABAjIAAAZQAAAjAZABQAWAAACgaIAAgCIgbAAIAAgeIA+AAIAABYIgcAAIgDgSQgLAVgbAAQgcAAgPgUg");
	this.shape.setTransform(240.25,25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B859").s().p("AgyBRIAAgWQAAgUAIgNQAIgPAVgNQAQgNAFgFQAEgGAAgIIAAgBQAAgNgLAAQgNAAAAAVIgkAAQABgZANgOQANgOAXAAQAWAAANANQANAMAAAUIAAABQAAAQgFAJQgHALgTANQgRAMgEAHQgEAGgBAIIA5AAIAAAhg");
	this.shape_1.setTransform(227.8,25.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00B859").s().p("AgxBRIAAgWQAAgUAHgNQAIgPAVgNQARgNADgFQAGgGAAgIIAAgBQAAgNgMAAQgNAAAAAVIglAAQACgZANgOQANgOAXAAQAWAAANANQANAMAAAUIAAABQAAAQgGAJQgGALgTANQgRAMgEAHQgFAGAAAIIA5AAIAAAhg");
	this.shape_2.setTransform(216.7,25.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00B859").s().p("AgwA9QgSgVAAghIAAgNQAAghASgVQASgVAeAAQAfAAASAVQASAVAAAhIAAANQAAAhgSAVQgSAVgfAAQgeAAgSgVgAgXgLIAAAYQAAAjAXABQAYgBAAgjIAAgYQAAglgYABQgXgBAAAlg");
	this.shape_3.setTransform(204.025,25.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00B859").s().p("AAQBPIgWgzIgMAAIAAAzIgpAAIAAidIBAAAQAWAAAPANQAPAOAAAZIAAACQAAAhgYAMIAbA6gAgSgFIASAAQAPAAAAgTIAAgCQAAgTgPAAIgSAAg");
	this.shape_4.setTransform(190.65,25.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00B859").s().p("Ag0BPIAAidIBnAAIAAAhIg+AAIAAAcIA3AAIAAAgIg3AAIAAAeIBAAAIAAAig");
	this.shape_5.setTransform(178.025,25.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00B859").s().p("AgzBPIAAgeIA1heIgwAAIAAghIBeAAIAAAeIgzBdIA3AAIAAAig");
	this.shape_6.setTransform(166.25,25.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00B859").s().p("AgUBPIAAidIApAAIAACdg");
	this.shape_7.setTransform(157.575,25.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00B859").s().p("Ag+BPIAAidIA3AAQAgAAATARQATATAAAkIAAANQAAAkgUATQgSARggAAgAgVAuIAMAAQAdAAAAgiIAAgYQAAgSgIgIQgHgHgOAAIgMAAg");
	this.shape_8.setTransform(147.725,25.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00B859").s().p("AAPBPIgUgzIgNAAIAAAzIgoAAIAAidIA/AAQAWAAAPANQAQAOAAAZIAAACQgBAhgYAMIAbA6gAgSgFIASAAQAPAAAAgTIAAgCQAAgTgPAAIgSAAg");
	this.shape_9.setTransform(134.25,25.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00B859").s().p("Ag0BPIAAidIBnAAIAAAhIg+AAIAAAcIA3AAIAAAgIg3AAIAAAeIBAAAIAAAig");
	this.shape_10.setTransform(121.625,25.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00B859").s().p("AgWBPIgsidIAtAAIAWBrIAXhrIArAAIgsCdg");
	this.shape_11.setTransform(108.7,25.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00B859").s().p("AgRA6IAAgkIAjAAIAAAkgAgRgUIAAglIAjAAIAAAlg");
	this.shape_12.setTransform(95.025,27.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00B859").s().p("AgxA9QgRgVgBghIAAgNQABghARgVQASgVAfAAQAfAAASAVQASAVAAAhIAAANQAAAhgSAVQgSAVgfAAQgfAAgSgVgAgXgLIAAAYQgBAjAYABQAYgBAAgjIAAgYQAAglgYABQgYgBABAlg");
	this.shape_13.setTransform(84.5,25.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00B859").s().p("AgwA+QgQgVAAgiIAAgNQAAghASgVQATgVAeAAQAaAAARAQQAQAQACAbIgpAAQgDgagSABQgXAAAAAjIAAAZQAAAjAZABQAYAAACgaIAAgCIgcAAIAAgeIA/AAIAABYIgdAAIgEgSQgKAVgbAAQgbAAgQgUg");
	this.shape_14.setTransform(70,25.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00B859").s().p("AgUBPIAAidIApAAIAACdg");
	this.shape_15.setTransform(60.025,25.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00B859").s().p("Ag+BPIAAidIA3AAQAgAAASARQAUATAAAkIAAANQAAAkgUATQgSARggAAgAgWAuIANAAQAdAAAAgiIAAgYQAAgSgIgIQgHgHgOAAIgNAAg");
	this.shape_16.setTransform(50.2,25.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00B859").s().p("AgxBVQgSgVAAghIAAgOQAAghASgVQATgVAeABQAggBARAVQATAVgBAhIAAAOQABAhgTAVQgRAUggABQgegBgTgUgAgYALIAAAZQABAkAXAAQAZAAAAgkIAAgZQAAgjgZAAQgXAAgBAjgAgShGIAYgjIApAAIgiAjg");
	this.shape_17.setTransform(35.75,23.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00B859").s().p("AguA9QgRgVAAghIAAgNQAAghASgVQASgVAeAAQAbAAARASQARASAAAfIgpAAQgBgigUABQgWgBAAAlIAAAYQAAAjAWABQAVgBAAghIApAAQAAAfgRASQgQASgcAAQgfAAgSgVg");
	this.shape_18.setTransform(21.575,25.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AwpD1QhlAAhHhIQhHhGAAhmIAAgBQAAhmBHhGQBHhIBlAAMAhTAAAQBlAABHBIQBHBGAABmIAAABQAABmhHBGQhHBIhlAAg");
	this.shape_19.setTransform(130.925,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,261.9,49), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgoA/QgLgMAAgSQAAgjAmgFIAlgHIAAgOQAAgWgVAAQgVAAgBAYIgcAAQABgWAOgMQAOgNAWAAQAXAAAMANQANALAAAWIAABhIgaAAIgBgTQgKAXgaAAQgSgBgLgKgAgFAMQgSACAAARQAAAUAUAAQALAAAIgIQAIgIAAgNIAAgPg");
	this.shape.setTransform(218.225,45.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnA4QgPgTAAggIAAgJQAAggAPgTQAPgSAaAAQAXAAAOAOQAOAOACAZIgcAAQgCgdgXAAQgbAAAAAsIAAALQAAAtAbgBQAXAAACgdIAcAAQgCAZgOANQgNAOgYABQgagBgPgRg");
	this.shape_1.setTransform(206.025,45.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBlIAAiLIAbAAIAACLgAgOg7IAAgpIAdAAIAAApg");
	this.shape_2.setTransform(196.825,42.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiBIIAAiMIAcAAIAAAaQAJgdAaABIAGAAIAAAcIgJgBQgPAAgJAKQgIALAAAUIAABKg");
	this.shape_3.setTransform(190.1,45.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBTQgKgKAAgSIAAhTIgWAAIAAgWIAWAAIAAgqIAbAAIAAAqIAfAAIAAAWIgfAAIAABRQAAARASAAQAIAAAGgDIAAAXQgHADgNAAQgTAAgKgKg");
	this.shape_4.setTransform(180.425,43.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpBVQgQgTAAggIAAgKQAAgfAQgTQAQgSAaAAQAeAAAPAWQAOAUgCAlIhWAAIAAADQABApAcAAQAXAAAFgXIAcAAQgEAVgOAMQgOANgYABQgbgBgPgRgAgbAOIA4AAQgBgRgHgJQgGgIgOAAQgZgBgDAjgAgPg9IAbgpIAkAAIgnApg");
	this.shape_5.setTransform(169.7375,42.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNBlIAAjJIAbAAIAADJg");
	this.shape_6.setTransform(160.325,42.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpA4QgQgTAAggIAAgJQAAggAQgTQAQgSAaAAQA9AAgEBPIhWAAIAAADQACApAbAAQAXAAAFgXIAcAAQgEAVgOAMQgOANgYABQgbgBgPgRgAgbgOIA4AAQgCgkgaABQgZgBgDAkg");
	this.shape_7.setTransform(150.9874,45.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoA/QgLgMAAgSQAAgjAmgFIAlgHIAAgOQAAgWgVAAQgWAAAAAYIgcAAQABgWAOgMQAOgNAWAAQAXAAAMANQANALAAAWIAABhIgaAAIgBgTQgLAXgZAAQgSgBgLgKgAgFAMQgSACAAARQAAAUAUAAQALAAAIgIQAIgIAAgNIAAgPg");
	this.shape_8.setTransform(133.275,45.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSA3IAAhTIgWAAIAAgWIAWAAIAAgqIAbAAIAAAqIAfAAIAAAWIgfAAIAABRQAAARASAAQAIAAAGgDIAAAXQgIADgMAAQgnAAAAgmg");
	this.shape_9.setTransform(122.475,43.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpA4QgQgTAAggIAAgJQAAggAQgTQAPgSAbAAQA8AAgDBPIhWAAIAAADQABApAcAAQAXAAAEgXIAdAAQgEAVgOAMQgPANgXABQgbgBgPgRgAgcgOIA5AAQgCgkgaABQgagBgDAkg");
	this.shape_10.setTransform(111.7821,45.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNBlIAAjJIAbAAIAADJg");
	this.shape_11.setTransform(102.325,42.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnA4QgQgTAAggIAAgJQAAggAQgTQAPgSAaAAQAYAAAOAOQAOAOABAZIgcAAQgCgdgXAAQgcAAAAAsIAAALQAAAtAcgBQAYAAABgdIAcAAQgBAZgOANQgPAOgXABQgagBgPgRg");
	this.shape_12.setTransform(93.4,45.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNBlIAAiLIAcAAIAACLgAgOg7IAAgpIAdAAIAAApg");
	this.shape_13.setTransform(84.175,42.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgnA4QgPgTAAggIAAgJQAAggAPgTQAPgSAaAAQAYAAANAOQAPAOABAZIgcAAQgDgdgWAAQgbAAgBAsIAAALQABAtAbgBQAXAAACgdIAcAAQgCAZgOANQgOAOgXABQgagBgPgRg");
	this.shape_14.setTransform(75.2,45.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNBlIAAiLIAcAAIAACLgAgOg7IAAgpIAdAAIAAApg");
	this.shape_15.setTransform(65.975,42.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeBOIgBAVIgaAAIAAjJIAdAAIAABQQAMgWAZAAQAWABAOARQANATAAAfIAAAKQAAAhgNASQgOASgXAAQgbAAgLgZgAgdAUIAAATQAAApAdgBQAeABgBgsIAAgOQABgqgeAAQgdAAAAAog");
	this.shape_16.setTransform(56.55,42.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoA/QgLgMAAgSQAAgjAlgFIAngHIAAgOQgBgWgVAAQgVAAgBAYIgbAAQABgWANgMQANgNAXAAQAXAAAMANQANALAAAWIAABhIgaAAIgBgTQgLAXgZAAQgSgBgLgKgAgFAMQgSACAAARQAAAUAUAAQALAAAJgIQAHgIABgNIAAgPg");
	this.shape_17.setTransform(38.3,45.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA9BIIAAhcQAAgbgWAAQgLAAgHAJQgHAIAAAQIAABWIgbAAIAAhbQAAgcgWAAQgMAAgGAJQgHAJAAAQIAABVIgdAAIAAiLIAbAAIABATQALgXAaAAQAaAAAJAYQANgYAaAAQAUAAAKANQAJAMAAAVIAABhg");
	this.shape_18.setTransform(22.1,45.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpA7QgKgMAAgUIAAhiIAcAAIAABcQAAAbAWAAQALAAAHgJQAGgJABgPIAAhWIAcAAIAACLIgbAAIAAgTQgMAXgYAAQgVAAgJgNg");
	this.shape_19.setTransform(5.2,46.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgiBIIAAiMIAbAAIABAbQAJgdAZAAIAHABIAAAcIgJgBQgPAAgJAKQgHAKgBATIAABLg");
	this.shape_20.setTransform(206.5,13);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgoA+QgLgLAAgSQAAgjAmgGIAlgFIAAgPQAAgWgVAAQgVAAgBAXIgbAAQABgWANgMQAOgMAWAAQAXAAANANQAMAMAAAVIAABhIgaAAIgBgTQgLAXgZAAQgSAAgLgMgAgFALQgSADAAASQAAATAUAAQALAAAIgIQAIgIAAgMIAAgQg");
	this.shape_21.setTransform(195.175,13.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAZBlIAAhcQAAgbgXAAQgLAAgHAJQgIAJAAAOIAABXIgcAAIAAjJIAcAAIAABQQANgWAYAAQAUAAALANQAJAMAAAUIAABig");
	this.shape_22.setTransform(182.65,10.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAZBIIAAhbQAAgcgWAAQgMAAgHAJQgHAJAAAPIAABWIgdAAIAAiLIAbAAIABAUQAMgYAZAAQAUAAAKANQAKAMAAAVIAABhg");
	this.shape_23.setTransform(169.45,12.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoA+QgLgLAAgSQAAgjAmgGIAlgFIAAgPQAAgWgVAAQgVAAgBAXIgbAAQABgWANgMQAOgMAWAAQAXAAANANQAMAMAAAVIAABhIgaAAIgBgTQgLAXgZAAQgSAAgLgMgAgFALQgSADAAASQAAATAUAAQALAAAIgIQAIgIAAgMIAAgQg");
	this.shape_24.setTransform(156.325,13.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AglBVQgOgKgBgTIAcAAQACATAXAAQAcAAAAgbIAAgYQgLAVgZAAQgWAAgOgSQgOgRAAgfIAAgIQAAggAOgRQAOgSAWAAQAbAAALAYIABgUIAaAAIAACKQAAAYgPANQgQAOgbAAQgXAAgOgMgAgcgfIAAANQAAAoAcAAQAeAAAAgnIAAgQQAAgogeAAQgcAAAAAqg");
	this.shape_25.setTransform(143.15,15.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgoA+QgLgLAAgSQAAgjAmgGIAlgFIAAgPQAAgWgVAAQgWAAAAAXIgcAAQABgWAOgMQAOgMAWAAQAXAAAMANQANAMAAAVIAABhIgaAAIgBgTQgLAXgZAAQgSAAgLgMgAgFALQgSADAAASQAAATAUAAQALAAAIgIQAIgIAAgMIAAgQg");
	this.shape_26.setTransform(125.425,13.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgpA3QgQgSAAggIAAgJQAAggAQgTQAQgSAaAAQA9AAgEBPIhVAAIAAADQAAApAcAAQAYAAAEgYIAcAAQgEAWgOANQgPANgXAAQgbAAgPgTgAgbgOIA4AAQgCgkgaAAQgZAAgDAkg");
	this.shape_27.setTransform(108.2374,13.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgjA+QgOgNgBgWIAbAAQADAYAVAAQAWAAAAgTQAAgJgFgFQgGgFgPgDQgWgFgKgHQgLgKAAgSQAAgUANgLQANgMAUAAQAtAAAEAsIgbAAQgCgWgUAAQgTAAAAASQAAAJAGAFQAFAEAPADQAXAFAKAIQALAJAAATQAAAUgNANQgOAMgXAAQgXAAgNgMg");
	this.shape_28.setTransform(95.925,13.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgjAMIAAgXIBHAAIAAAXg");
	this.shape_29.setTransform(85.175,12.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgpA3QgQgSAAggIAAgJQAAghAQgSQAPgSAbAAQAeAAAPAVQAOAVgCAlIhWAAIAAADQABApAcAAQAXAAAEgYIAdAAQgEAWgOANQgPANgXAAQgbAAgPgTgAgcgOIA5AAQgCgkgaAAQgaAAgDAkg");
	this.shape_30.setTransform(73.7875,13.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgSA3IAAhTIgWAAIAAgWIAWAAIAAgqIAbAAIAAAqIAfAAIAAAWIgfAAIAABQQAAASASAAQAHAAAHgDIAAAXQgJADgLAAQgnAAAAgmg");
	this.shape_31.setTransform(62.625,11.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgNBlIAAiLIAcAAIAACLgAgOg7IAAgpIAdAAIAAApg");
	this.shape_32.setTransform(55.4,10.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgNBlIAAjJIAbAAIAADJg");
	this.shape_33.setTransform(49.825,10.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNBlIAAiLIAbAAIAACLgAgOg7IAAgpIAdAAIAAApg");
	this.shape_34.setTransform(44.225,10.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgQBfQgJgGgEgKIgBAUIgbAAIAAjJIAdAAIAABPQAMgVAYAAQAXAAANASQAOASAAAfIAAALQAAAhgOASQgNASgYAAQgMAAgLgIgAgdATIAAATQAAApAdAAQAdAAAAgrIAAgPQAAgqgdAAQgdAAAAAog");
	this.shape_35.setTransform(34.8,10.275);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgoA+QgLgLAAgSQAAgjAmgGIAlgFIAAgPQAAgWgVAAQgWAAAAAXIgcAAQABgWAOgMQAOgMAWAAQAXAAAMANQANAMAAAVIAABhIgaAAIgBgTQgLAXgZAAQgSAAgLgMgAgFALQgSADAAASQAAATAUAAQALAAAIgIQAIgIAAgMIAAgQg");
	this.shape_36.setTransform(21.175,13.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAlBhIAAhXIhJAAIAABXIgfAAIAAjBIAfAAIAABRIBJAAIAAhRIAeAAIAADBg");
	this.shape_37.setTransform(6.95,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,223.5,53.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgsA3QgQgTAAgeIAAgMQAAgeAQgSQARgTAbAAQAcAAARATQAQASAAAeIAAAMQAAAfgQASQgRATgcAAQgbAAgRgTgAgVgKIAAAVQAAAhAVAAQAWAAAAghIAAgVQAAghgWAAQgVAAAAAhg");
	this.shape.setTransform(155.175,11.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOBIIgTgvIgLAAIAAAvIglAAIAAiPIA5AAQAVAAANAMQAOANAAAXIAAABQAAAdgWAMIAYA1gAgQgEIAQAAQAOAAAAgSIAAgBQAAgSgOAAIgQAAg");
	this.shape_1.setTransform(143.075,11.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvBIIAAiPIBdAAIAAAeIg4AAIAAAaIAyAAIAAAcIgyAAIAAAcIA6AAIAAAfg");
	this.shape_2.setTransform(131.625,11.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguBIIAAgbIAwhWIgsAAIAAgeIBWAAIAAAbIguBVIAxAAIAAAfg");
	this.shape_3.setTransform(120.925,11.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSBIIAAiPIAlAAIAACPg");
	this.shape_4.setTransform(109.8,11.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag4BIIAAiPIAyAAQAcAAARAQQASARAAAgIAAAMQAAAhgSARQgRAQgcAAgAgTApIALAAQAaAAAAgeIAAgVQAAgRgHgHQgGgHgNAAIgLAAg");
	this.shape_5.setTransform(100.875,11.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAOBIIgTgvIgLAAIAAAvIglAAIAAiPIA5AAQAVAAANAMQAOANAAAXIAAABQAAAdgWAMIAYA1gAgQgEIAQAAQAOAAAAgSIAAgBQAAgSgOAAIgQAAg");
	this.shape_6.setTransform(88.675,11.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvBIIAAiPIBdAAIAAAeIg4AAIAAAaIAyAAIAAAcIgyAAIAAAcIA6AAIAAAfg");
	this.shape_7.setTransform(77.225,11.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVBIIgmiPIAnAAIAVBhIAVhhIAmAAIgnCPg");
	this.shape_8.setTransform(65.525,11.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsA3QgQgSAAgfIAAgMQAAgeAQgSQAQgTAcAAQAcAAARATQAQASAAAeIAAAMQAAAfgQASQgRATgcAAQgcAAgQgTgAgVgKIAAAVQAAAhAVAAQAWAAAAghIAAgVQAAghgWAAQgVAAAAAhg");
	this.shape_9.setTransform(49.5,11.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAaBfIgHgaIgmAAIgHAaIgmAAIAsiPIApAAIAsCPgAgMApIAYAAIgMgugAABhDQgHgDgDAAQgGAAAAAGIgTAAQAAgRAFgGQAFgHAKAAQAGAAAIAEQAHADADABQAFgBABgGIATAAQAAAQgFAIQgFAGgKAAQgGAAgIgEg");
	this.shape_10.setTransform(37.125,9.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSBIIAAhwIgeAAIAAgfIBhAAIAAAfIgeAAIAABwg");
	this.shape_11.setTransform(27.025,11.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvBIIAAiPIBdAAIAAAeIg4AAIAAAaIAyAAIAAAcIgyAAIAAAcIA6AAIAAAfg");
	this.shape_12.setTransform(16.45,11.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag0BIIAAiPIA6AAQATAAALAJQAMAKAAATIAAACQAAATgOAJQATAJAAAXIAAACQAAATgMALQgMALgVAAgAgPAqIASAAQANAAAAgNIAAgEQAAgNgNAAIgSAAgAgPgNIAPAAQAMAAAAgMIAAgEQAAgMgMAAIgPAAg");
	this.shape_13.setTransform(5.275,11.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,161.3,19.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AggAsQgLgOAAgaIAAgHQAAgaALgOQAMgOAUAAQAVAAALAOQAMAOAAAaIAAAHQAAAagMAOQgLAPgVAAQgUAAgMgPgAgegDIAAAHQAAArAeAAQAfAAgBgrIAAgHQABgrgfAAQgeAAAAArg");
	this.shape.setTransform(79.1,5.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghA4IAAhvIAjAAQAOgBAJAJQAJAIAAAPIAAADQAAAPgJAIQgJAIgOAAIgXAAIAAAugAgVAAIAXAAQATAAAAgVIAAgDQAAgVgTAAIgXAAg");
	this.shape_1.setTransform(70.25,5.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjA4IAAhfIgdBfIgLAAIgdhfIAABfIgMAAIAAhvIATAAIAbBcIAchcIATAAIAABvg");
	this.shape_2.setTransform(60.175,5.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfA4IAAhvIA/AAIAAAKIgyAAIAAAnIAtAAIAAAKIgtAAIAAApIAyAAIAAALg");
	this.shape_3.setTransform(50.6,5.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGA4IAAhlIgcAAIAAgKIBFAAIAAAKIgcAAIAABlg");
	this.shape_4.setTransform(42.65,5.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeA4IgKgeIgnAAIgKAeIgOAAIAlhvIANAAIAlBvgAgQAOIAhAAIgRg3g");
	this.shape_5.setTransform(35.65,5.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAyQgLgKAAgSIAMAAQADAZAWAAQAWAAAAgUIAAgBQAAgJgGgFQgFgEgOgDQgRgFgHgGQgHgHAAgNIAAgBQAAgNAJgJQAJgJAOABQAgAAADAgIgNAAQgCgVgUAAQgTAAgBATIAAABQABAJAFAEQAEAEANADQASAEAIAGQAHAIABANIAAABQgBAPgIAJQgKAIgQABQgQgBgKgIg");
	this.shape_6.setTransform(27.15,5.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkAWIANAAQACAZAXAAQAWAAAAgUIAAgBQAAgJgGgFQgGgEgNgDQgRgFgIgGQgGgHAAgNIAAgBQAAgNAJgJQAJgJAOABQAgAAADAgIgNAAQgCgVgUAAQgTAAAAATIAAABQAAAJAFAEQAFAEAMADQAiAHAAAYIAAABQAAAOgKAKQgJAIgRABQgiAAgDglg");
	this.shape_7.setTransform(19.025,5.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeA4IgKgeIgoAAIgKAeIgMAAIAkhvIANAAIAlBvgAgQAOIAhAAIgRg3g");
	this.shape_8.setTransform(10.6,5.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghA4IAAhvIAjAAQAPgBAIAJQAJAIAAAPIAAADQAAAPgJAIQgIAIgPAAIgWAAIAAAugAgUAAIAWAAQATAAAAgVIAAgDQAAgVgTAAIgWAAg");
	this.shape_9.setTransform(3.425,5.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,83.5,11.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgqAQQgEAAgDgDQgDgDAAgEIAAgMQAAgDADgDQADgDAEAAIBWAAQAEAAACADQADADAAADIAAAMQAAAEgDADQgDADgDAAg");
	this.shape.setTransform(55.775,12.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzAQQgDAAgEgDQgCgCAAgEIAAgMQAAgEACgDQAEgDADAAIBnAAQADAAADADQADADAAAEIAAAMQAAAEgDACQgCADgEAAg");
	this.shape_1.setTransform(26.4,1.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_2.setTransform(42.025,36.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").p("AhcC4QAvhbAuhaQBei1gDgC");
	this.shape_3.setTransform(11.9583,20.7662);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").p("Ah9hwID7Dg");
	this.shape_4.setTransform(29.225,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").p("AjCgSIGFAl");
	this.shape_5.setTransform(35.675,15.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").p("AhKBtICVjZ");
	this.shape_6.setTransform(49.9,24.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").p("AiWBKQgBAFCVATQBJAKBLAJIiijs");
	this.shape_7.setTransform(57.469,27.7981);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_8.setTransform(72.325,39.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_9.setTransform(2.125,39.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,74.5,42.1), null);


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
	this.shape.graphics.f().s("#FFFFFF").p("AhmAwIDNhf");
	this.shape.setTransform(36,19.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("ABrAsIjVhY");
	this.shape_1.setTransform(36.5,29.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("AAuBjIhbjG");
	this.shape_2.setTransform(30.375,36.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").p("AgnByIBQjk");
	this.shape_3.setTransform(20.05,36.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").p("AhqgpIDVBT");
	this.shape_4.setTransform(12.625,20.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").p("AhpAwIDThf");
	this.shape_5.setTransform(13.1,30.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").p("AAwhwIhfDh");
	this.shape_6.setTransform(29.525,13.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").p("AgzhsIBmDZ");
	this.shape_7.setTransform(19.4,13.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").p("AAAD1QBlAABIhIQBHhIAAhlQAAhlhHhHQhIhIhlAAQhkAAhIBIQhIBHAABlQAABlBIBIQBIBIBkAAg");
	this.shape_8.setTransform(24.45,24.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-1,-1,50.9,51.1), null);


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
	this.shape.graphics.f().s("#FFFFFF").p("ABtgvIjZBf");
	this.shape.setTransform(36.125,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("ABtAnIjZhN");
	this.shape_1.setTransform(36.175,28.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("AAxBtIhhjZ");
	this.shape_2.setTransform(29.725,36.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").p("AgqBtIBVjZ");
	this.shape_3.setTransform(20.2,36.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").p("ABqguIjTBc");
	this.shape_4.setTransform(13.175,30.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").p("AgqBtIBVjZ");
	this.shape_5.setTransform(28.9,12.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").p("AhtgrIDbBX");
	this.shape_6.setTransform(13.175,19.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").p("AgshpIBZDT");
	this.shape_7.setTransform(19.75,13.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").p("AAAD1QBlAABIhIQBHhIAAhlQAAhlhHhHQhIhIhlAAQhkAAhIBIQhIBHAABlQAABlBIBIQBIBIBkAAg");
	this.shape_8.setTransform(24.45,24.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-1,-1,50.9,51.1), null);


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
	this.shape.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("Ag1AUIBSBuIAfg5QAMgVgCgXQgBgYgOgSIhRh0IgiA8QgLAWABAYQACAXAPAUg");
	this.shape.setTransform(7.05,13.0155);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAAjBIAAGC");
	this.shape_1.setTransform(9.85,45.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,-1,16.1,66.4), null);


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
	this.shape.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("Ag1AUIBSBuIAgg5QALgUgBgYQgCgYgNgSIhSh0IghA9QgMAVABAYQACAYAPATg");
	this.shape.setTransform(7.0753,13.0131);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAAhdIAAC8");
	this.shape_1.setTransform(9.85,35.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,-1,16.2,46.6), null);


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

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Symbol 5
	this.instance = new lib.Symbol5();
	this.instance.setTransform(94.65,39.15,1,1,0,0,0,24.4,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},19,cjs.Ease.quadOut).wait(1));

	// Symbol 4
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(24.4,39.15,1,1,0,0,0,24.4,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-360},19,cjs.Ease.quadOut).wait(1));

	// Symbol 6
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(59.85,21,1,1,0,0,0,37.2,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,0,121.60000000000001,66.2);


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
	this.frame_80 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(80).call(this.frame_80).wait(1));

	// Layer_7 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_64 = new cjs.Graphics().p("AjuAOIAAgbIHdAAIAAAbg");
	var mask_graphics_65 = new cjs.Graphics().p("AjuBEIAAiHIHdAAIAACHg");
	var mask_graphics_66 = new cjs.Graphics().p("AjuB2IAAjrIHdAAIAADrg");
	var mask_graphics_67 = new cjs.Graphics().p("AjuCjIAAlFIHdAAIAAFFg");
	var mask_graphics_68 = new cjs.Graphics().p("AjuDLIAAmVIHdAAIAAGVg");
	var mask_graphics_69 = new cjs.Graphics().p("AjuDvIAAndIHdAAIAAHdg");
	var mask_graphics_70 = new cjs.Graphics().p("AjuEOIAAobIHdAAIAAIbg");
	var mask_graphics_71 = new cjs.Graphics().p("AjuEoIAApPIHdAAIAAJPg");
	var mask_graphics_72 = new cjs.Graphics().p("AjuE9IAAp5IHdAAIAAJ5g");
	var mask_graphics_73 = new cjs.Graphics().p("AjuFOIAAqbIHdAAIAAKbg");
	var mask_graphics_74 = new cjs.Graphics().p("AjuFZIAAqyIHdAAIAAKyg");
	var mask_graphics_75 = new cjs.Graphics().p("AjuFhIAArBIHdAAIAALBg");
	var mask_graphics_76 = new cjs.Graphics().p("AjuFjIAArFIHdAAIAALFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(64).to({graphics:mask_graphics_64,x:250.875,y:397.875}).wait(1).to({graphics:mask_graphics_65,x:250.875,y:392.425}).wait(1).to({graphics:mask_graphics_66,x:250.875,y:387.45}).wait(1).to({graphics:mask_graphics_67,x:250.875,y:382.95}).wait(1).to({graphics:mask_graphics_68,x:250.875,y:378.925}).wait(1).to({graphics:mask_graphics_69,x:250.875,y:375.35}).wait(1).to({graphics:mask_graphics_70,x:250.875,y:372.275}).wait(1).to({graphics:mask_graphics_71,x:250.875,y:369.675}).wait(1).to({graphics:mask_graphics_72,x:250.875,y:367.55}).wait(1).to({graphics:mask_graphics_73,x:250.875,y:365.875}).wait(1).to({graphics:mask_graphics_74,x:250.875,y:364.7}).wait(1).to({graphics:mask_graphics_75,x:250.875,y:363.975}).wait(1).to({graphics:mask_graphics_76,x:250.875,y:363.75}).wait(5));

	// Symbol 3
	this.instance = new lib.Symbol3();
	this.instance.setTransform(243.25,362.7,1,1,0,0,0,7,32);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).wait(17));

	// Layer_7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_57 = new cjs.Graphics().p("AjuAOIAAgbIHdAAIAAAbg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AjuA3IAAhtIHdAAIAABtg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AjuBdIAAi6IHdAAIAAC6g");
	var mask_1_graphics_60 = new cjs.Graphics().p("AjuB/IAAj9IHdAAIAAD9g");
	var mask_1_graphics_61 = new cjs.Graphics().p("AjuCdIAAk5IHdAAIAAE5g");
	var mask_1_graphics_62 = new cjs.Graphics().p("AjuC3IAAltIHdAAIAAFtg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AjuDNIAAmZIHdAAIAAGZg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AjuDfIAAm9IHdAAIAAG9g");
	var mask_1_graphics_65 = new cjs.Graphics().p("AjuDtIAAnZIHdAAIAAHZg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AjuD3IAAntIHdAAIAAHtg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AjuD9IAAn5IHdAAIAAH5g");
	var mask_1_graphics_68 = new cjs.Graphics().p("AjuD/IAAn9IHdAAIAAH9g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(57).to({graphics:mask_1_graphics_57,x:260.875,y:397.875}).wait(1).to({graphics:mask_1_graphics_58,x:260.875,y:393.7}).wait(1).to({graphics:mask_1_graphics_59,x:260.875,y:389.9}).wait(1).to({graphics:mask_1_graphics_60,x:260.875,y:386.5}).wait(1).to({graphics:mask_1_graphics_61,x:260.875,y:383.525}).wait(1).to({graphics:mask_1_graphics_62,x:260.875,y:380.925}).wait(1).to({graphics:mask_1_graphics_63,x:260.875,y:378.725}).wait(1).to({graphics:mask_1_graphics_64,x:260.875,y:376.95}).wait(1).to({graphics:mask_1_graphics_65,x:260.875,y:375.55}).wait(1).to({graphics:mask_1_graphics_66,x:260.875,y:374.55}).wait(1).to({graphics:mask_1_graphics_67,x:260.875,y:373.95}).wait(1).to({graphics:mask_1_graphics_68,x:260.875,y:373.75}).wait(13));

	// Symbol 2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(258.7,373.2,1,1,0,0,0,7,22.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(57).to({_off:false},0).wait(24));

	// Layer_1
	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(363.2,363.2,1,1,0,0,0,59.6,32);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).to({x:167.95},19,cjs.Ease.quadOut).wait(12));

	// Layer_8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EgIUAgUMAAAhAnIQoAAMAAABAng");
	var mask_2_graphics_1 = new cjs.Graphics().p("EgIUAgUMAAAhAnIQoAAMAAABAng");
	var mask_2_graphics_2 = new cjs.Graphics().p("EgIUAgVMAAAhApIQoAAMAAABApg");
	var mask_2_graphics_3 = new cjs.Graphics().p("EgIUAgVMAAAhApIQoAAMAAABApg");
	var mask_2_graphics_4 = new cjs.Graphics().p("EgIUAgWMAAAhArIQoAAMAAABArg");
	var mask_2_graphics_5 = new cjs.Graphics().p("EgIUAgXMAAAhAtIQoAAMAAABAtg");
	var mask_2_graphics_6 = new cjs.Graphics().p("EgIUAgYMAAAhAvIQoAAMAAABAvg");
	var mask_2_graphics_7 = new cjs.Graphics().p("EgIUAgYMAAAhAvIQoAAMAAABAvg");
	var mask_2_graphics_8 = new cjs.Graphics().p("EgIUAgZMAAAhAxIQoAAMAAABAxg");
	var mask_2_graphics_9 = new cjs.Graphics().p("EgIUAgZMAAAhAxIQoAAMAAABAxg");
	var mask_2_graphics_10 = new cjs.Graphics().p("EgIUAgaMAAAhAzIQoAAMAAABAzg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EgIUAgaMAAAhA0IQoAAMAAABA0g");
	var mask_2_graphics_12 = new cjs.Graphics().p("EgIUAgbMAAAhA1IQoAAMAAABA1g");
	var mask_2_graphics_13 = new cjs.Graphics().p("EgIUAgcMAAAhA3IQoAAMAAABA3g");
	var mask_2_graphics_14 = new cjs.Graphics().p("EgIUAgdMAAAhA5IQoAAMAAABA5g");
	var mask_2_graphics_15 = new cjs.Graphics().p("EgIUAgdMAAAhA5IQoAAMAAABA5g");
	var mask_2_graphics_16 = new cjs.Graphics().p("EgIUAgeMAAAhA7IQoAAMAAABA7g");
	var mask_2_graphics_17 = new cjs.Graphics().p("EgIUAgeMAAAhA8IQoAAMAAABA8g");
	var mask_2_graphics_18 = new cjs.Graphics().p("EgIUAgfMAAAhA9IQoAAMAAABA9g");
	var mask_2_graphics_19 = new cjs.Graphics().p("EgIUAggMAAAhA/IQoAAMAAABA/g");
	var mask_2_graphics_20 = new cjs.Graphics().p("EgIUAghMAAAhBAIQoAAMAAABBAg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EgIUAghMAAAhBBIQoAAMAAABBBg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EgIUAgiMAAAhBDIQoAAMAAABBDg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EgIUAgiMAAAhBEIQoAAMAAABBEg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EgIUAgjMAAAhBFIQoAAMAAABBFg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EgIUAgkMAAAhBHIQoAAMAAABBHg");
	var mask_2_graphics_26 = new cjs.Graphics().p("EgIUAglMAAAhBIIQoAAMAAABBIg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EgIUAglMAAAhBJIQoAAMAAABBJg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EgIUAgmMAAAhBLIQoAAMAAABBLg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EgIUAgmMAAAhBLIQoAAMAAABBLg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EgIUAgnMAAAhBNIQoAAMAAABBNg");
	var mask_2_graphics_31 = new cjs.Graphics().p("EgIUAgoMAAAhBPIQoAAMAAABBPg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EgIUAgpMAAAhBQIQoAAMAAABBQg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EgIUAgpMAAAhBRIQoAAMAAABBRg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EgIUAgqMAAAhBTIQoAAMAAABBTg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EgIUAgqMAAAhBTIQoAAMAAABBTg");
	var mask_2_graphics_36 = new cjs.Graphics().p("EgIUAgrMAAAhBVIQoAAMAAABBVg");
	var mask_2_graphics_37 = new cjs.Graphics().p("EgIUAgsMAAAhBWIQoAAMAAABBWg");
	var mask_2_graphics_38 = new cjs.Graphics().p("EgIUAgsMAAAhBXIQoAAMAAABBXg");
	var mask_2_graphics_39 = new cjs.Graphics().p("EgIUAgtMAAAhBZIQoAAMAAABBZg");
	var mask_2_graphics_40 = new cjs.Graphics().p("EgIUAguMAAAhBbIQoAAMAAABBbg");
	var mask_2_graphics_41 = new cjs.Graphics().p("EgIUAguMAAAhBbIQoAAMAAABBbg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EgIUAgvMAAAhBdIQoAAMAAABBdg");
	var mask_2_graphics_43 = new cjs.Graphics().p("EgIUAgvMAAAhBdIQoAAMAAABBdg");
	var mask_2_graphics_44 = new cjs.Graphics().p("EgIUAgwMAAAhBfIQoAAMAAABBfg");
	var mask_2_graphics_45 = new cjs.Graphics().p("EgIUAgxMAAAhBhIQoAAMAAABBhg");
	var mask_2_graphics_46 = new cjs.Graphics().p("EgIUAgyMAAAhBjIQoAAMAAABBjg");
	var mask_2_graphics_47 = new cjs.Graphics().p("EgIUAgzMAAAhBlIQoAAMAAABBlg");
	var mask_2_graphics_48 = new cjs.Graphics().p("EgIUAg0MAAAhBnIQoAAMAAABBng");
	var mask_2_graphics_49 = new cjs.Graphics().p("EgJLAg0MAAAhBnISXAAMAAABBng");
	var mask_2_graphics_50 = new cjs.Graphics().p("EgKDAgzMAAAhBlIUGAAMAAABBlg");
	var mask_2_graphics_51 = new cjs.Graphics().p("EgK6AgyMAAAhBjIV1AAMAAABBjg");
	var mask_2_graphics_52 = new cjs.Graphics().p("EgLxAgyMAAAhBjIXjAAMAAABBjg");
	var mask_2_graphics_53 = new cjs.Graphics().p("EgMpAgxMAAAhBhIZTAAMAAABBhg");
	var mask_2_graphics_54 = new cjs.Graphics().p("EgNgAgxMAAAhBhIbBAAMAAABBhg");
	var mask_2_graphics_55 = new cjs.Graphics().p("EgOYAgwMAAAhBfIcxAAMAAABBfg");
	var mask_2_graphics_56 = new cjs.Graphics().p("EgPPAgwMAAAhBfIefAAMAAABBfg");
	var mask_2_graphics_57 = new cjs.Graphics().p("EgQHAgvMAAAhBdMAgOAAAMAAABBdg");
	var mask_2_graphics_58 = new cjs.Graphics().p("EgQ+AgvMAAAhBdMAh9AAAMAAABBdg");
	var mask_2_graphics_59 = new cjs.Graphics().p("EgR2AguMAAAhBbMAjtAAAMAAABBbg");
	var mask_2_graphics_60 = new cjs.Graphics().p("EgStAgtMAAAhBZMAlbAAAMAAABBZg");
	var mask_2_graphics_61 = new cjs.Graphics().p("EgTkAgtMAAAhBZMAnJAAAMAAABBZg");
	var mask_2_graphics_62 = new cjs.Graphics().p("EgUcAgsMAAAhBXMAo5AAAMAAABBXg");
	var mask_2_graphics_63 = new cjs.Graphics().p("EgVTAgsMAAAhBXMAqoAAAMAAABBXg");
	var mask_2_graphics_64 = new cjs.Graphics().p("EgWLAgrMAAAhBVMAsXAAAMAAABBVg");
	var mask_2_graphics_65 = new cjs.Graphics().p("EgXCAgrMAAAhBVMAuFAAAMAAABBVg");
	var mask_2_graphics_66 = new cjs.Graphics().p("EgX6AgqMAAAhBTMAv1AAAMAAABBTg");
	var mask_2_graphics_67 = new cjs.Graphics().p("EgYxAgpMAAAhBSMAxjAAAMAAABBSg");
	var mask_2_graphics_68 = new cjs.Graphics().p("EgZpAgpMAAAhBRMAzTAAAMAAABBRg");
	var mask_2_graphics_69 = new cjs.Graphics().p("EgagAgoMAAAhBPMA1BAAAMAAABBPg");
	var mask_2_graphics_70 = new cjs.Graphics().p("EgbXAgoMAAAhBPMA2wAAAMAAABBPg");
	var mask_2_graphics_71 = new cjs.Graphics().p("EgcPAgnMAAAhBNMA4fAAAMAAABBNg");
	var mask_2_graphics_72 = new cjs.Graphics().p("EgdGAgnMAAAhBNMA6OAAAMAAABBNg");
	var mask_2_graphics_73 = new cjs.Graphics().p("Egd+AgmMAAAhBLMA79AAAMAAABBLg");
	var mask_2_graphics_74 = new cjs.Graphics().p("Ege1AgmMAAAhBLMA9rAAAMAAABBLg");
	var mask_2_graphics_75 = new cjs.Graphics().p("EgftAglMAAAhBJMA/bAAAMAAABBJg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-0.2,y:-203.35}).wait(1).to({graphics:mask_2_graphics_1,x:-0.2,y:-195.25}).wait(1).to({graphics:mask_2_graphics_2,x:-0.2,y:-187.175}).wait(1).to({graphics:mask_2_graphics_3,x:-0.2,y:-179.075}).wait(1).to({graphics:mask_2_graphics_4,x:-0.2,y:-171}).wait(1).to({graphics:mask_2_graphics_5,x:-0.2,y:-162.875}).wait(1).to({graphics:mask_2_graphics_6,x:-0.2,y:-154.8}).wait(1).to({graphics:mask_2_graphics_7,x:-0.2,y:-146.7}).wait(1).to({graphics:mask_2_graphics_8,x:-0.2,y:-138.625}).wait(1).to({graphics:mask_2_graphics_9,x:-0.2,y:-130.525}).wait(1).to({graphics:mask_2_graphics_10,x:-0.2,y:-122.45}).wait(1).to({graphics:mask_2_graphics_11,x:-0.2,y:-114.35}).wait(1).to({graphics:mask_2_graphics_12,x:-0.2,y:-106.275}).wait(1).to({graphics:mask_2_graphics_13,x:-0.2,y:-98.175}).wait(1).to({graphics:mask_2_graphics_14,x:-0.2,y:-90.075}).wait(1).to({graphics:mask_2_graphics_15,x:-0.2,y:-81.975}).wait(1).to({graphics:mask_2_graphics_16,x:-0.2,y:-73.9}).wait(1).to({graphics:mask_2_graphics_17,x:-0.2,y:-65.8}).wait(1).to({graphics:mask_2_graphics_18,x:-0.2,y:-57.725}).wait(1).to({graphics:mask_2_graphics_19,x:-0.2,y:-49.625}).wait(1).to({graphics:mask_2_graphics_20,x:-0.2,y:-41.55}).wait(1).to({graphics:mask_2_graphics_21,x:-0.2,y:-33.45}).wait(1).to({graphics:mask_2_graphics_22,x:-0.2,y:-25.35}).wait(1).to({graphics:mask_2_graphics_23,x:-0.2,y:-17.25}).wait(1).to({graphics:mask_2_graphics_24,x:-0.2,y:-9.175}).wait(1).to({graphics:mask_2_graphics_25,x:-0.2,y:-1.075}).wait(1).to({graphics:mask_2_graphics_26,x:-0.2,y:7}).wait(1).to({graphics:mask_2_graphics_27,x:-0.2,y:15.1}).wait(1).to({graphics:mask_2_graphics_28,x:-0.2,y:23.175}).wait(1).to({graphics:mask_2_graphics_29,x:-0.2,y:31.275}).wait(1).to({graphics:mask_2_graphics_30,x:-0.2,y:39.375}).wait(1).to({graphics:mask_2_graphics_31,x:-0.2,y:47.475}).wait(1).to({graphics:mask_2_graphics_32,x:-0.2,y:55.55}).wait(1).to({graphics:mask_2_graphics_33,x:-0.2,y:63.65}).wait(1).to({graphics:mask_2_graphics_34,x:-0.2,y:71.725}).wait(1).to({graphics:mask_2_graphics_35,x:-0.2,y:79.825}).wait(1).to({graphics:mask_2_graphics_36,x:-0.2,y:87.9}).wait(1).to({graphics:mask_2_graphics_37,x:-0.2,y:96}).wait(1).to({graphics:mask_2_graphics_38,x:-0.2,y:104.075}).wait(1).to({graphics:mask_2_graphics_39,x:-0.2,y:112.2}).wait(1).to({graphics:mask_2_graphics_40,x:-0.2,y:120.275}).wait(1).to({graphics:mask_2_graphics_41,x:-0.2,y:128.375}).wait(1).to({graphics:mask_2_graphics_42,x:-0.2,y:136.45}).wait(1).to({graphics:mask_2_graphics_43,x:-0.2,y:144.55}).wait(1).to({graphics:mask_2_graphics_44,x:-0.2,y:156.225}).wait(1).to({graphics:mask_2_graphics_45,x:-0.2,y:167.875}).wait(1).to({graphics:mask_2_graphics_46,x:-0.2,y:179.575}).wait(1).to({graphics:mask_2_graphics_47,x:-0.2,y:191.225}).wait(1).to({graphics:mask_2_graphics_48,x:-0.2,y:202.9}).wait(1).to({graphics:mask_2_graphics_49,x:5.35,y:202.85}).wait(1).to({graphics:mask_2_graphics_50,x:10.9,y:202.8}).wait(1).to({graphics:mask_2_graphics_51,x:16.425,y:202.725}).wait(1).to({graphics:mask_2_graphics_52,x:21.975,y:202.675}).wait(1).to({graphics:mask_2_graphics_53,x:27.525,y:202.625}).wait(1).to({graphics:mask_2_graphics_54,x:33.075,y:202.575}).wait(1).to({graphics:mask_2_graphics_55,x:38.6,y:202.5}).wait(1).to({graphics:mask_2_graphics_56,x:44.15,y:202.45}).wait(1).to({graphics:mask_2_graphics_57,x:49.7,y:202.4}).wait(1).to({graphics:mask_2_graphics_58,x:55.25,y:202.35}).wait(1).to({graphics:mask_2_graphics_59,x:60.8,y:202.3}).wait(1).to({graphics:mask_2_graphics_60,x:66.325,y:202.225}).wait(1).to({graphics:mask_2_graphics_61,x:71.875,y:202.175}).wait(1).to({graphics:mask_2_graphics_62,x:77.4,y:202.125}).wait(1).to({graphics:mask_2_graphics_63,x:82.95,y:202.075}).wait(1).to({graphics:mask_2_graphics_64,x:88.475,y:202}).wait(1).to({graphics:mask_2_graphics_65,x:94.025,y:201.95}).wait(1).to({graphics:mask_2_graphics_66,x:99.575,y:201.9}).wait(1).to({graphics:mask_2_graphics_67,x:105.125,y:201.85}).wait(1).to({graphics:mask_2_graphics_68,x:110.675,y:201.8}).wait(1).to({graphics:mask_2_graphics_69,x:116.2,y:201.725}).wait(1).to({graphics:mask_2_graphics_70,x:121.75,y:201.675}).wait(1).to({graphics:mask_2_graphics_71,x:127.3,y:201.625}).wait(1).to({graphics:mask_2_graphics_72,x:132.85,y:201.575}).wait(1).to({graphics:mask_2_graphics_73,x:138.375,y:201.5}).wait(1).to({graphics:mask_2_graphics_74,x:143.925,y:201.45}).wait(1).to({graphics:mask_2_graphics_75,x:149.475,y:201.4}).wait(6));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aqne4QiygBh/h9Qh+h/AAiyMAAAgwSQAAioh0h7Qhyh6ingLIAAgGQCpAMB1B7QB0B9ABCqMAAAAwSQgBCwB+B9QB8B8CwAAMAiLAAAIAAAGg");
	this.shape.setTransform(150.75,197.55);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(81));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,423.2,396.1);


// stage content:
(lib.banner_meia_pagina_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [269];
	// timeline functions:
	this.frame_269 = function() {
		if (myCounter++ >=3){
			this.stop();
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(269).call(this.frame_269).wait(1));

	// Symbol 19
	this.instance = new lib.Symbol19();
	this.instance.setTransform(112.7,349.6,1,1,0,0,0,113.6,21.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(171).to({_off:false},0).to({x:132.7,alpha:1},17,cjs.Ease.backOut).wait(82));

	// Symbol 18
	this.instance_1 = new lib.Symbol18();
	this.instance_1.setTransform(110.45,271.2,1,1,0,0,0,111,22.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(161).to({_off:false},0).to({x:130.45,alpha:1},17,cjs.Ease.backOut).wait(92));

	// Symbol 17
	this.instance_2 = new lib.Symbol17();
	this.instance_2.setTransform(108,204.6,1,1,0,0,0,108.4,27.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(154).to({_off:false},0).to({x:128,alpha:1},17,cjs.Ease.backOut).wait(99));

	// Layer_13
	this.instance_3 = new lib.Symbol20();
	this.instance_3.setTransform(150.45,508.6,0.9589,0.9589,0,0,0,133.4,93.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(186).to({_off:false},0).to({regY:93.5,scaleX:1,scaleY:1,x:150.4,y:508.5,alpha:1},22,cjs.Ease.quadOut).wait(62));

	// Layer_12
	this.instance_4 = new lib.Symbol21();
	this.instance_4.setTransform(150.05,337.15,1,1,0,0,0,150.3,228.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(146).to({_off:false},0).wait(124));

	// cta copy
	this.instance_5 = new lib.Symbol13();
	this.instance_5.setTransform(170,423.95,1,1,0,0,0,130.9,24.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).to({x:150},17,cjs.Ease.backOut).wait(82).to({alpha:0},11).to({_off:true},1).wait(124));

	// logo
	this.instance_6 = new lib.Symbol16();
	this.instance_6.setTransform(37.05,567.95,1,1,0,0,0,17.2,20.4);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},12).wait(122).to({alpha:0},11).to({_off:true},1).wait(124));

	// Layer 1
	this.instance_7 = new lib.Symbol1();
	this.instance_7.setTransform(150.05,344.2,1,1,0,0,0,150.8,198);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(133).to({alpha:0},11).to({_off:true},1).wait(124));

	// Layer_8
	this.instance_8 = new lib.Symbol12();
	this.instance_8.setTransform(175.9,346.55,1,1,0,0,0,111.7,26.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(22).to({_off:false},0).to({x:160.9,alpha:1},17,cjs.Ease.backOut).wait(95).to({alpha:0},11).to({_off:true},1).wait(124));

	// Symbol 10
	this.instance_9 = new lib.Symbol10();
	this.instance_9.setTransform(143.65,274.1,1,1,0,0,0,80.7,9.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(13).to({_off:false},0).to({x:128.65,alpha:1},17,cjs.Ease.backOut).wait(104).to({alpha:0},11).to({_off:true},1).wait(124));

	// Symbol 9
	this.instance_10 = new lib.Symbol9();
	this.instance_10.setTransform(104.15,254.65,1,1,0,0,0,41.8,5.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({_off:false},0).to({x:89.15,alpha:1},17,cjs.Ease.backOut).wait(109).to({alpha:0},11).to({_off:true},1).wait(124));

	// LOGO2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguCvIAAhcIB3AAQAHAAAFgGQAFgEAAgHIAAh8QAAgHgFgEQgFgGgHAAIiRAAQgHAAgFAGQgFAEAAAHIhmgQQAAgXAQgQIAtgtQARgQAWAAIC3AAQAWAAARAQIAtAtQAQAQAAAXIAACVQAAAYgQAQIgsAsQgQAQgYAAg");
	this.shape.setTransform(132.675,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAlBRQgYgBgUgNQgVgNgLgVIg4hxIBBAAQAVAAAQALQASALAIASIA+B5g");
	this.shape_1.setTransform(144.2,120);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtEWIAAhkIB1AAQAHAAAEgFQAFgFAAgHIAAlCQAAgGgFgFQgEgFgHAAIigAAIAAHHIhmAAIAAorIEYAAQAXAAARAQIAsAtQARAQAAAXIAAFjQAAAXgRAQIgsAtQgRAQgXAAg");
	this.shape_2.setTransform(179.775,100.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhGEWQgXAAgRgRIgVgVIChijIAAlRQAAgHAFgFQAFgFAHAAIBFAAQAHAAAEAFQAFAFAAAHIAAFiQAAAXgQAQIiACBQgRAQgWAAg");
	this.shape_3.setTransform(44.625,100.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhACnQgRgQAAgXIAAliQAAgHAFgFQAFgFAHAAIBEAAQAHAAAEAFQAFAFAAAHIAAFRIA+A+IhHBHg");
	this.shape_4.setTransform(27.275,96.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhaEWQgXAAgQgQIgsgtQgRgQAAgXIAAljQAAgXARgQIAsgtQAQgQAXAAIC0AAQAXAAARAQIAsAtQARAQAAAXIAACTQAAAXgRAPIgsAtQgRAQgXAAIiHAAIAAhjIB1AAQAHAAAFgFQAEgFAAgHIAAhyQAAgHgEgEQgFgFgHAAIiPAAQgHAAgFAFQgFAFAAAGIAAFBQAAAHAFAFQAFAFAHAAIDNAAQAHAAAGAFQAFAFAAAHQAAAGgFAGIg4A3QgQARgXAAg");
	this.shape_5.setTransform(85.575,100.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ai/EWIAAnHQAAgXAQgQIAtgtQARgQAWAAIC3AAQAWAAARAQIAtAtQAQAQAAAXIAACXQAAAXgQAPIgsAsQgQAQgYAAIiKAAIAAhbIB3AAQAHAAAFgFQAFgFAAgHIAAh9QAAgHgFgEQgFgFgHAAIiRAAQgHAAgFAFQgFAEAAAHIAAG3g");
	this.shape_6.setTransform(132.675,100.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghEWQgHAAgFgFQgFgFAAgHIAAoJQAAgHAFgFQAFgFAHAAIBEAAQAGAAAFAFQAFAFAAAHIAAIJQAAAHgFAFQgFAFgGAAg");
	this.shape_7.setTransform(212.6,100.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguBDQgRgPAAgcIAAgvQAAgcARgQQARgPAdAAQAeAAARAPQARAQAAAcIAAAvQAAAcgRAPQgQAQgfAAQgeAAgQgQgAgagwQgJAJAAAQIAAAwQAAAQAJAIQAKAIAQAAQARAAAJgIQAKgJAAgPIAAgwQAAgPgKgKQgIgHgSgBQgRABgJAHg");
	this.shape_8.setTransform(274.55,80.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAsBQQgIAAgDgCQgCAAgDgFIgSgmQgEgJgGgEQgEgDgMAAIgRAAIAAA1QAAAEgBACQgCACgEAAIgNAAQgFAAgBgCQgCgCAAgEIAAiPQAAgEACgCQABgCAFAAIA9AAQAXAAAOANQANAOAAAXQAAARgHAMQgJALgNAEQAEAEADAGIAZAvQADAIgHAAgAghgGIAmAAQALAAAHgGQAGgGAAgLQAAgMgGgGQgGgFgMAAIgmAAg");
	this.shape_9.setTransform(260.1807,80.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtBQQgEAAgCgCQgCgCABgEIAAiPQgBgEACgCQADgCADAAIBZAAQADAAACACQACACAAAEIAAALQAAAEgCACQgCACgDAAIhEAAIAAAnIA4AAQAFAAABABQACACAAAEIAAAKQAAAFgCABQgBACgFAAIg4AAIAAApIBGAAQAEAAABACQADACAAAEIAAALQAAAEgDACQgBACgEAAg");
	this.shape_10.setTransform(246.35,80.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgyBQQgEAAgCgCQgBgCAAgEIAAgLQAAgEACgEIBNhpIhGAAQgEAAgCgCQgCgCAAgEIAAgLQAAgEACgCQABgCAFAAIBhAAQAFAAABACQACACAAAEIAAALQAAAEgCAEIhNBpIBJAAQAEAAACACQABACAAAEIAAALQAAAEgBACQgCACgEAAg");
	this.shape_11.setTransform(232.825,80.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AnnCLIBMiYQAcg5A2giQA2giBAAAIK7AAIhRCiQgaA1gyAfQgyAfg7AAgACpgNIgIAqQgEAZAMAPQANAPAcAAQAaAAARgOQAQgOAEgZIAIgqQAEgZgNgPQgNgPgbAAQg2AAgJA1gABxA2IACATQAAAIALAAIAQAAQAHAAAAgHIgWiCQgBgHgHAAIgSAAIgGAAQgCABgCAEIhDCCQgFAJAJAAIAQAAIAJgBQACgBACgEIAKgVgAgvg4IgDANQgBAJAIAAIAcAAIgTBqQgCAJAJAAIAQAAQAHAAACgHIAShsIAcAAQAFAAACgBQACgCAAgEIADgNQABgJgIAAIhXAAQgIAAgBAHgAiXg4IgWCAQgCAJAIAAIBOAAQAHAAABgHIACgNQACgJgIAAIg1AAIAGgeIAqAAQAGAAACgHIACgOQACgHgIAAIgpAAIAEgcIA0AAQAHAAACgHIACgNQABgFgBgCQgBgCgFAAIhLAAQgJAAgBAHgAkOg4IgXCAQgBAFABACQACACAFAAIA0AAQAZAAAOgNQAOgNAAgWQAAgTgOgIIABgBQAUgLAAgXQAAgQgLgJQgKgJgTAAIgwAAQgHAAgBAHgABxhLQAHAFAJAAQAPAAADgVQACgIgEAAIgKAAQgBAAgBAAQAAABgBAAQAAABgBAAQAAABAAABQgBAHgFAAQgCAAgHgFQgHgGgJAAQgRAAgCAVQgCAIAFAAIAJAAQAEAAAAgEQABgHAFAAQADAAAHAGgADBAfIAIgqQAEgaAYAAQAYAAgEAYIgHAqQgFAagYAAQgYAAAEgYgAkCA1IAGggIAaAAQAOAAAAAMQAAAJgGAFQgGAGgKAAgABQAbIAOgeQAHgQAEgPIABAAQgBANABAQIADAggAj3gFIAFgeIAWAAQAOAAgBAPQAAAPgRAAg");
	this.shape_12.setTransform(176.725,49.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(270));

	// bg
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00B859").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_13.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(270));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(95.8,-1.6,249.5,604);
// library properties:
lib.properties = {
	id: '4C67F3A136A92E4E81338A9018FE5B2A',
	width: 300,
	height: 600,
	fps: 30,
	color: "#00B859",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png?1669039666626", id:"Image"}
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