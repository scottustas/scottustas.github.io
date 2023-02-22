(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
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



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.card1 = function() {
	this.initialize(img.card1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.card2 = function() {
	this.initialize(img.card2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.card3 = function() {
	this.initialize(img.card3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.imagery2 = function() {
	this.initialize(img.imagery2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,852,381);


(lib.plane = function() {
	this.initialize(img.plane);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.planeLine = function() {
	this.initialize(img.planeLine);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.t1a = function() {
	this.initialize(img.t1a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.t1b = function() {
	this.initialize(img.t1b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.t1c = function() {
	this.initialize(img.t1c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.t2a = function() {
	this.initialize(img.t2a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.t2b = function() {
	this.initialize(img.t2b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.t3a = function() {
	this.initialize(img.t3a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.t3b = function() {
	this.initialize(img.t3b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.t4a = function() {
	this.initialize(img.t4a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.t4b = function() {
	this.initialize(img.t4b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.t5a = function() {
	this.initialize(img.t5a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.t5b = function() {
	this.initialize(img.t5b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.t5c = function() {
	this.initialize(img.t5c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.travelOn = function() {
	this.initialize(img.travelOn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);// helper functions:

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


(lib.travelOn_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.travelOn();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.travelOn_1, rect = new cjs.Rectangle(-150,-125,300,600), [rect]);


(lib.t5c_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.t5c();
	this.instance.setTransform(-150,-134,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t5c_1, rect = new cjs.Rectangle(-150,-134,150,300), [rect]);


(lib.t5b_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.t5b();
	this.instance.setTransform(-150,-129,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t5b_1, rect = new cjs.Rectangle(-150,-129,150,300), [rect]);


(lib.t5a_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.t5a();
	this.instance.setTransform(-150,-129,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t5a_1, rect = new cjs.Rectangle(-150,-129,150,300), [rect]);


(lib.t4b_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.t4b();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t4b_1, rect = new cjs.Rectangle(-150,-125,150,300), [rect]);


(lib.t4a_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.t4a();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t4a_1, rect = new cjs.Rectangle(-150,-125,150,300), [rect]);


(lib.t3b_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.t3b();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t3b_1, rect = new cjs.Rectangle(-150,-125,150,300), [rect]);


(lib.t3a_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.t3a();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t3a_1, rect = new cjs.Rectangle(-150,-125,150,300), [rect]);


(lib.t2b_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.t2b();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t2b_1, rect = new cjs.Rectangle(-150,-125,150,300), [rect]);


(lib.t2a_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.t2a();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t2a_1, rect = new cjs.Rectangle(-150,-125,150,300), [rect]);


(lib.t1c_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.t1c();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t1c_1, rect = new cjs.Rectangle(-150,-125,150,300), [rect]);


(lib.t1b_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.t1b();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t1b_1, rect = new cjs.Rectangle(-150,-125,150,300), [rect]);


(lib.t1a_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.t1a();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t1a_1, rect = new cjs.Rectangle(-150,-125,150,300), [rect]);


(lib.shine = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(242,242,242,0.949)","rgba(255,255,255,0)"],[0.173,0.486,0.851],-42.5,0,42.5,0).s().p("AmDSBQglAAAAgVMAAAgjXQAAgVAlAAIMHAAQAlAAAAAVMAAAAjXQAAAVglAAg");
	this.shape.setTransform(0.05,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shine, rect = new cjs.Rectangle(-42.4,-115.2,85,230.5), [rect]);


(lib.plane_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.plane();
	this.instance.setTransform(-150,-129,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.plane_1, rect = new cjs.Rectangle(-150,-129,150,300), [rect]);


(lib.imagery = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#016C68").s().p("A0HAgIAAg/MAoPAAAIAAA/g");
	this.shape.setTransform(268.375,267.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AzyAgIAAg/MAnlAAAIAAA/g");
	this.shape_1.setTransform(-1.525,267.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E71F32").s().p("A4cAgIAAg/MAw5AAAIAAA/g");
	this.shape_2.setTransform(-298.575,267.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.instance = new lib.imagery2();
	this.instance.setTransform(-455,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.imagery, rect = new cjs.Rectangle(-455,-112,852.2,382.6), [rect]);


(lib.cta_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cta();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_1, rect = new cjs.Rectangle(-150,-125,150,300), [rect]);


(lib.card3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.card3();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card3_1, rect = new cjs.Rectangle(-150,-125,150,300), [rect]);


(lib.card2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.card2();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card2_1, rect = new cjs.Rectangle(-150,-125,150,300), [rect]);


(lib.card1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.card1();
	this.instance.setTransform(-75,-150,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card1_1, rect = new cjs.Rectangle(-75,-150,150,300), [rect]);


// stage content:
(lib.CitiAA_TravelOn_Multicard_Banners_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(880));

	// cta
	this.instance = new lib.cta_1();
	this.instance.setTransform(300,250,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(850).to({alpha:0},15).to({alpha:1},14).wait(1));

	// eCard1Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_702 = new cjs.Graphics().p("AqgHHQhEABAAhEIAAsGQAAhEBEgBIVAAAQBFABAABEIAAMGQAABEhFgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(702).to({graphics:mask_graphics_702,x:201.15,y:268.75}).wait(178));

	// Layer_5
	this.instance_1 = new lib.shine();
	this.instance_1.setTransform(59.55,268.45,0.862,0.862,45,0,0,0.6,-0.1);
	this.instance_1.alpha = 0.2695;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(702).to({_off:false},0).to({x:374,alpha:0.0898},32,cjs.Ease.quadInOut).wait(146));

	// eCard1
	this.instance_2 = new lib.card1_1();
	this.instance_2.setTransform(481.35,88.3,1.6933,1.693,0,0,0,0.2,-0.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(609).to({_off:false},0).to({x:154.4},40,cjs.Ease.quadInOut).wait(13).to({regX:-0.8,regY:-1.9,scaleY:1.6926,x:152.65,y:85.8},0).wait(1).to({regX:0,regY:0,scaleX:1.6932,x:160.1305,y:95.9417},0).wait(1).to({x:166.1989,y:102.8131},0).wait(1).to({scaleX:1.6931,x:172.1447,y:109.5456},0).wait(1).to({x:177.9074,y:116.0708},0).wait(1).to({scaleX:1.693,x:183.4321,y:122.3266},0).wait(1).to({x:188.6738,y:128.2619},0).wait(1).to({x:193.6003,y:133.8402},0).wait(1).to({scaleX:1.6929,x:198.1932,y:139.0408},0).wait(1).to({x:202.4466,y:143.8571},0).wait(1).to({x:206.3651,y:148.2941},0).wait(1).to({scaleX:1.6928,x:209.9609,y:152.3656},0).wait(1).to({x:213.251,y:156.0911},0).wait(1).to({x:216.2555,y:159.4931},0).wait(1).to({x:218.9953,y:162.5955},0).wait(1).to({scaleX:1.6927,x:221.4916,y:165.4221},0).wait(1).to({x:223.7646,y:167.9958},0).wait(1).to({x:225.8333,y:170.3382},0).wait(1).to({x:227.7153,y:172.4693},0).wait(1).to({x:229.4267,y:174.4072},0).wait(1).to({x:230.9822,y:176.1685},0).wait(1).to({scaleX:1.6926,x:232.3951,y:177.7683},0).wait(1).to({x:233.6771,y:179.22},0).wait(1).to({x:234.8392,y:180.5358},0).wait(1).to({x:235.8908,y:181.7266},0).wait(1).to({x:236.8407,y:182.8022},0).wait(1).to({x:237.6968,y:183.7716},0).wait(1).to({x:238.466,y:184.6426},0).wait(1).to({x:239.1548,y:185.4225},0).wait(1).to({x:239.7689,y:186.1178},0).wait(1).to({x:240.3135,y:186.7345},0).wait(1).to({x:240.7934,y:187.2779},0).wait(1).to({x:241.2128,y:187.7528},0).wait(1).to({x:241.5758,y:188.1638},0).wait(1).to({x:241.8858,y:188.5148},0).wait(1).to({x:242.1461,y:188.8096},0).wait(1).to({x:242.3598,y:189.0516},0).wait(1).to({x:242.5296,y:189.2438},0).wait(1).to({x:242.658,y:189.3893},0).wait(1).to({x:242.7475,y:189.4905},0).wait(1).to({regX:-0.8,regY:-1.9,x:241.45,y:186.35},0).wait(178));

	// eCard1Mask_copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_709 = new cjs.Graphics().p("AkwUxQhHAAAAhHIAAsjQAAhHBHAAIVyAAQBHAAAABHIAAMjQAABHhHAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(709).to({graphics:mask_1_graphics_709,x:116.0889,y:132.8902}).wait(171));

	// Layer_5_copy
	this.instance_3 = new lib.shine();
	this.instance_3.setTransform(19.8,215.4,0.8938,0.8938,45,0,0,0.7,-0.1);
	this.instance_3.alpha = 0.2695;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(709).to({_off:false},0).to({x:325.3,alpha:0.0781},32,cjs.Ease.quadInOut).wait(139));

	// eCard2
	this.instance_4 = new lib.card2_1();
	this.instance_4.setTransform(324.2,98.3,1.6933,1.6926,0,0,0,0.1,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(672).to({_off:false},0).wait(208));

	// eCard1Mask_copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_718 = new cjs.Graphics().p("AoPQ0QhGAAAAhGIAAsaQAAhFBGAAIVhAAQBGAAAABFIAAMaQAABGhGAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(718).to({graphics:mask_2_graphics_718,x:92.0026,y:107.6095}).wait(162));

	// Layer_5_copy
	this.instance_5 = new lib.shine();
	this.instance_5.setTransform(-36.9,168.2,0.8831,0.8831,45,0,0,0.6,-0.1);
	this.instance_5.alpha = 0.2695;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(718).to({_off:false},0).to({x:269.9,alpha:0.0898},32,cjs.Ease.quadInOut).wait(130));

	// eCard3
	this.instance_6 = new lib.card3_1();
	this.instance_6.setTransform(284.3,46.45,1.7399,1.7384,0,0,0,0.1,0.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(663).to({_off:false},0).wait(217));

	// lineMask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("ADBJWIAAjwIQZAAIAADwg");
	var mask_3_graphics_744 = new cjs.Graphics().p("AoMefIAAjwIQZAAIAADwg");
	var mask_3_graphics_745 = new cjs.Graphics().p("AoLefIAAjwIQXAAIAADwg");
	var mask_3_graphics_746 = new cjs.Graphics().p("AoMefIAAjwIQZAAIAADwg");
	var mask_3_graphics_747 = new cjs.Graphics().p("AoLeeIAAjwIQXAAIAADwg");
	var mask_3_graphics_748 = new cjs.Graphics().p("AoMeeIAAjwIQZAAIAADwg");
	var mask_3_graphics_749 = new cjs.Graphics().p("An7eeIAAjwIQYAAIAADwg");
	var mask_3_graphics_750 = new cjs.Graphics().p("AnoeeIAAjwIQYAAIAADwg");
	var mask_3_graphics_751 = new cjs.Graphics().p("AnWedIAAjwIQYAAIAADwg");
	var mask_3_graphics_752 = new cjs.Graphics().p("AnDedIAAjwIQYAAIAADwg");
	var mask_3_graphics_753 = new cjs.Graphics().p("AmxedIAAjwIQYAAIAADwg");
	var mask_3_graphics_754 = new cjs.Graphics().p("AmeedIAAjwIQYAAIAADwg");
	var mask_3_graphics_755 = new cjs.Graphics().p("AmMecIAAjwIQYAAIAADwg");
	var mask_3_graphics_756 = new cjs.Graphics().p("Al5ecIAAjwIQYAAIAADwg");
	var mask_3_graphics_757 = new cjs.Graphics().p("AlnecIAAjwIQYAAIAADwg");
	var mask_3_graphics_758 = new cjs.Graphics().p("AlUebIAAjwIQYAAIAADwg");
	var mask_3_graphics_759 = new cjs.Graphics().p("AlCebIAAjwIQYAAIAADwg");
	var mask_3_graphics_760 = new cjs.Graphics().p("AkvebIAAjwIQYAAIAADwg");
	var mask_3_graphics_761 = new cjs.Graphics().p("AkdebIAAjwIQYAAIAADwg");
	var mask_3_graphics_762 = new cjs.Graphics().p("AkLeaIAAjwIQYAAIAADwg");
	var mask_3_graphics_763 = new cjs.Graphics().p("Aj4eaIAAjwIQYAAIAADwg");
	var mask_3_graphics_764 = new cjs.Graphics().p("AjmeaIAAjwIQYAAIAADwg");
	var mask_3_graphics_765 = new cjs.Graphics().p("AjTeaIAAjwIQYAAIAADwg");
	var mask_3_graphics_766 = new cjs.Graphics().p("AjBeZIAAjwIQYAAIAADwg");
	var mask_3_graphics_767 = new cjs.Graphics().p("AiueZIAAjwIQYAAIAADwg");
	var mask_3_graphics_768 = new cjs.Graphics().p("AiceZIAAjwIQYAAIAADwg");
	var mask_3_graphics_769 = new cjs.Graphics().p("AiJeYIAAjwIQYAAIAADwg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:124.225,y:59.8}).wait(744).to({graphics:mask_3_graphics_744,x:37.35,y:195.125}).wait(1).to({graphics:mask_3_graphics_745,x:41.044,y:195.098}).wait(1).to({graphics:mask_3_graphics_746,x:44.738,y:195.071}).wait(1).to({graphics:mask_3_graphics_747,x:48.432,y:195.044}).wait(1).to({graphics:mask_3_graphics_748,x:52.126,y:195.017}).wait(1).to({graphics:mask_3_graphics_749,x:54.135,y:194.99}).wait(1).to({graphics:mask_3_graphics_750,x:55.982,y:194.963}).wait(1).to({graphics:mask_3_graphics_751,x:57.829,y:194.936}).wait(1).to({graphics:mask_3_graphics_752,x:59.676,y:194.909}).wait(1).to({graphics:mask_3_graphics_753,x:61.523,y:194.882}).wait(1).to({graphics:mask_3_graphics_754,x:63.37,y:194.855}).wait(1).to({graphics:mask_3_graphics_755,x:65.217,y:194.828}).wait(1).to({graphics:mask_3_graphics_756,x:67.064,y:194.801}).wait(1).to({graphics:mask_3_graphics_757,x:68.911,y:194.774}).wait(1).to({graphics:mask_3_graphics_758,x:70.758,y:194.747}).wait(1).to({graphics:mask_3_graphics_759,x:72.605,y:194.72}).wait(1).to({graphics:mask_3_graphics_760,x:74.452,y:194.693}).wait(1).to({graphics:mask_3_graphics_761,x:76.299,y:194.666}).wait(1).to({graphics:mask_3_graphics_762,x:78.146,y:194.639}).wait(1).to({graphics:mask_3_graphics_763,x:79.993,y:194.612}).wait(1).to({graphics:mask_3_graphics_764,x:81.84,y:194.585}).wait(1).to({graphics:mask_3_graphics_765,x:83.687,y:194.558}).wait(1).to({graphics:mask_3_graphics_766,x:85.534,y:194.531}).wait(1).to({graphics:mask_3_graphics_767,x:87.381,y:194.504}).wait(1).to({graphics:mask_3_graphics_768,x:89.228,y:194.477}).wait(1).to({graphics:mask_3_graphics_769,x:91.075,y:194.45}).wait(111));

	// planeLine_png
	this.instance_7 = new lib.planeLine();
	this.instance_7.setTransform(0,0,0.5,0.5);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(744).to({_off:false},0).wait(136));

	// plane_png
	this.instance_8 = new lib.plane_1();
	this.instance_8.setTransform(221.25,258,2,2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(744).to({_off:false},0).wait(1).to({regX:-75,regY:21,x:71.7,y:300,alpha:0.161},0).wait(1).to({x:72.4,alpha:0.3805},0).wait(1).to({x:73.25,alpha:0.6597},0).wait(1).to({regX:0,regY:0,x:224.35,y:258,alpha:1},0).wait(1).to({regX:-75,regY:21,x:75.6,y:300},0).wait(1).to({x:77.1},0).wait(1).to({x:78.75},0).wait(1).to({x:80.65},0).wait(1).to({x:82.8},0).wait(1).to({x:85.15},0).wait(1).to({x:87.7},0).wait(1).to({x:90.5},0).wait(1).to({x:93.5},0).wait(1).to({x:96.8},0).wait(1).to({x:100.3},0).wait(1).to({x:104.1},0).wait(1).to({x:108.1},0).wait(1).to({x:112.4},0).wait(1).to({x:116.95},0).wait(1).to({x:121.75},0).wait(1).to({x:126.85},0).wait(1).to({x:132.2},0).wait(1).to({x:137.85},0).wait(1).to({x:143.75},0).wait(1).to({regX:0,regY:0,x:300,y:258},0).wait(111));

	// t5c_png
	this.instance_9 = new lib.t5c_1();
	this.instance_9.setTransform(300,259,2,2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(799).to({_off:false},0).to({y:259.55,alpha:1},25).wait(56));

	// t5b_png
	this.instance_10 = new lib.t5b_1();
	this.instance_10.setTransform(300,258,2,2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(744).to({_off:false},0).to({alpha:1},25).wait(111));

	// t5a_png
	this.instance_11 = new lib.t5a_1();
	this.instance_11.setTransform(300,258,2,2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(744).to({_off:false},0).to({alpha:1},25).wait(111));

	// t4b_png
	this.instance_12 = new lib.t4b_1();
	this.instance_12.setTransform(300,250,2,2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(544).to({_off:false},0).to({alpha:1},20).wait(45).to({x:-150},40,cjs.Ease.quadInOut).to({_off:true},1).wait(230));

	// t4a_png
	this.instance_13 = new lib.t4a_1();
	this.instance_13.setTransform(300,250,2,2);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(509).to({_off:false},0).to({alpha:1},20).wait(80).to({x:-150},40,cjs.Ease.quadInOut).to({_off:true},1).wait(230));

	// t3b_png
	this.instance_14 = new lib.t3b_1();
	this.instance_14.setTransform(300,250,2,2);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(384).to({_off:false},0).to({alpha:1},20).wait(45).to({x:-150},40,cjs.Ease.quadInOut).to({_off:true},1).wait(390));

	// t3a_png
	this.instance_15 = new lib.t3a_1();
	this.instance_15.setTransform(300,250,2,2);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(349).to({_off:false},0).to({alpha:1},20).wait(80).to({x:-150},40,cjs.Ease.quadInOut).to({_off:true},1).wait(390));

	// t2b_png
	this.instance_16 = new lib.t2b_1();
	this.instance_16.setTransform(300,250,2,2);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(219).to({_off:false},0).to({alpha:1},25).wait(45).to({x:-150},40,cjs.Ease.quadInOut).to({_off:true},1).wait(550));

	// t2a
	this.instance_17 = new lib.t2a_1();
	this.instance_17.setTransform(300,250,2,2);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(179).to({_off:false},0).to({alpha:1},25).wait(85).to({x:-150},40,cjs.Ease.quadInOut).to({_off:true},1).wait(550));

	// card3
	this.instance_18 = new lib.card3_1();
	this.instance_18.setTransform(600,250,2,2);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(449).to({_off:false},0).to({x:300},40,cjs.Ease.quadInOut).wait(120).to({x:-149},40,cjs.Ease.quadInOut).to({_off:true},1).wait(230));

	// card2
	this.instance_19 = new lib.card2_1();
	this.instance_19.setTransform(600,250,2,2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(289).to({_off:false},0).to({x:300},40,cjs.Ease.quadInOut).wait(120).to({x:-150},40,cjs.Ease.quadInOut).to({_off:true},1).wait(390));

	// card1
	this.instance_20 = new lib.card1_1();
	this.instance_20.setTransform(450,300,2,2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(119).to({_off:false},0).to({x:150},40,cjs.Ease.quadInOut).wait(130).to({x:-150},40,cjs.Ease.quadInOut).to({_off:true},1).wait(550));

	// imagery
	this.instance_21 = new lib.imagery();
	this.instance_21.setTransform(729,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(119).to({x:399.25},40,cjs.Ease.quadInOut).wait(130).to({x:128},40,cjs.Ease.quadInOut).wait(120).to({x:-141},40,cjs.Ease.quadInOut).wait(120).to({x:-142},0).to({x:-402},40,cjs.Ease.quadInOut).to({_off:true},1).wait(230));

	// travelMask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_641 = new cjs.Graphics().p("AhgGrQgWgLgNgWQgOgXgBgYQAAgZALgXQAMgXAWgOIAtgVQAagRANgHQAZgNAsgMQAogJAXACQAfAFAYAXQAYAWAFAfQAGAegPAeQgPAdgdAOQgLAGgbAGQgZAHgNAGIglAWQggAUgfADIgPABQgdAAgWgNg");
	var mask_4_graphics_642 = new cjs.Graphics().p("AjtGrQgWgLgOgWQgNgXgBgYQgBgZAMgXQAMgXAVgOIAugVQAagRANgHQAagNAsgMQAggHAVAAIABgBQAPgKA4gTQASgHAogSQAmgTAUgHIAlgLQAegLAIgCQAZgEAbAKQAZAJARAVQAQAVADAcQADAbgLAYQgUApgyATIgsAOQgMAEhNAjQghAOgeAJQgeAJgQAAIgDAAIgNAIQgKAGgbAGQgZAHgNAGIglAWQggAUggADIgQABQgcAAgWgNg");
	var mask_4_graphics_643 = new cjs.Graphics().p("AlOGrQgXgLgNgWQgNgXgBgYQgBgZAMgXQAMgXAVgOIAugVQAagRANgHQAagNAsgMQAfgHAWAAIAAgBQAPgKA6gTQASgHAogSQAlgTAUgHIAlgLQAdgLAIgCQAJgBAKAAIAKgEQAFgCAygHQAVgDAbgHIAvgNQAagEAGAAQAvgCAeAnQAdAmgLAtQgKAtgqAWQgVAKgkAHIg8AMQgoAIgWABIgOAAQgLAHgOAFIgsAOQgMAEhNAjQghAOgdAJQgeAJgQAAIgDAAIgNAIQgLAGgbAGQgZAHgNAGIglAWQghAUgfADIgQABQgcAAgWgNg");
	var mask_4_graphics_644 = new cjs.Graphics().p("AmyGrQgWgLgNgWQgNgXgBgYQgBgZALgXQANgXAVgOIAugVQAZgRAOgHQAZgNAsgMQAggHAWAAIAAgBQAPgKA6gTQASgHAogSQAmgTAUgHIAkgLQAdgLAIgCQAJgBAJAAIAKgEQAGgCAygHQAUgDAcgHIAugNQAbgEAGAAQAJgBAIACQAPgJASgEQAPgCAdAAQAZgBAwgHQAsgEAcANQAcALAQAdQAQAbgDAfQgEAegWAYQgWAYgeAGQgGACgfACQg5AIgeABQgVAAgRgDIgOAIQgUAKgkAHIg8AMQgpAIgVABIgOAAQgLAHgPAFIgsAOQgLAEhMAjQghAOgeAJQgeAJgQAAIgDAAIgNAIQgMAGgaAGQgaAHgMAGIglAWQghAUggADIgPABQgcAAgXgNg");
	var mask_4_graphics_645 = new cjs.Graphics().p("AiCHlQgZgMgOgXQgOgWAAgdQAAgbANgXIAbglIAHgNQgZAHgNAAIgDAAIgNAIQgMAGgaAGQgaAHgMAGIglAXQghATggADQgmAFgcgRQgWgLgNgWQgNgWgBgZQgBgZALgXQANgXAVgOIAugVQAZgRAOgHQAZgNAsgMQAggHAWAAIAAgBQAPgKA6gTQASgHAogSQAmgTAUgHIAkgLQAdgLAIgCQAJgBAJAAIAKgEQAGgCAygHQAUgCAcgHIAugNQAbgEAGAAQAJAAAIABQAPgJASgEQAPgCAdAAQAZgBAwgHQAsgEAcANQAcALAQAcQAQAcgDAeQgEAegWAYQgWAYgeAGQgGACgfACQg5AIgeABQgVAAgRgDIgOAIQgUALgkAGIg8AMQgiAHgVABQgCAWgKAVQgJAWgWAqQgFAJgUAvQgPAjgNAUQgnA/g5AGIgJAAQgWAAgUgKg");
	var mask_4_graphics_646 = new cjs.Graphics().p("AjZKIQgbgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQADgPAIgNIAbglIAHgNQgZAHgNAAIgDAAIgNAIQgMAGgaAGQgaAHgMAFIglAXQghAUggADQgmAFgcgRQgWgMgNgWQgNgWgBgZQgBgYALgXQANgXAVgOIAugVQAZgRAOgHQAZgMAsgMQAggIAWABIAAgBQAPgKA6gTQASgHAogTQAmgSAUgHIAkgMQAdgKAIgCQAJgCAJABIAKgEQAGgCAygHQAUgDAcgHIAugNQAbgEAGAAQAJgBAIABQAPgIASgEQAPgDAdAAQAZAAAwgIQAsgDAcAMQAcAMAQAdQAQAbgDAfQgEAegWAYQgWAYgeAGQgGABgfABQg5AIgeABQgVABgRgDIgOAIQgUAKgkAGIg8ANQgiAGgVACQgCAVgKAWQgJAWgWApQgFAKgUAvQgPAigNAVQgSAfgYARQgDAMgGAPIgVArQgPAggNAyIgTBVQgJAggKARQgPAXgbAMQgTAJgUAAIgPgCg");
	var mask_4_graphics_647 = new cjs.Graphics().p("AjZKIQgbgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQADgPAIgNIAbglIAHgNQgZAHgNAAIgDAAIgNAIQgMAGgaAGQgaAHgMAFIglAXQghAUggADQgmAFgcgRQgWgMgNgWQgNgWgBgZQgBgYALgXQANgXAVgOIAugVQAZgRAOgHQAZgMAsgMQAggIAWABIAAgBQAPgKA6gTQASgHAogTQAmgSAUgHIAkgMQAdgKAIgCQAJgCAJABIAKgEQAGgCAygHQAUgDAcgHIAugNQAbgEAGAAQAJgBAIABQAPgIASgEQAPgDAdAAQAZAAAwgIQAsgDAcAMQAcAMAQAdQAQAbgDAfQgEAegWAYQgWAYgeAGQgGABgfABQg5AIgeABQgOABgMgCQAeAdAAAqQAAAsggAeIgmAdIgbAWQgVAOgaABQgaACgWgLQgXgLgOgVQgPgWgBgZQgBgMACgNQgJAVgRAfQgFAKgUAvQgPAigNAVQgSAfgYARQgDAMgGAPIgVArQgPAggNAyIgTBVQgJAggKARQgPAXgbAMQgTAJgUAAIgPgCgABxA2IgDAQIAJgNIADgEIgJABg");
	var mask_4_graphics_648 = new cjs.Graphics().p("AjZKIQgbgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQADgPAIgNIAbglIAHgNQgZAHgNAAIgDAAIgNAIQgMAGgaAGQgaAHgMAFIglAXQghAUggADQgmAFgcgRQgWgMgNgWQgNgWgBgZQgBgYALgXQANgXAVgOIAugVQAZgRAOgHQAZgMAsgMQAggIAWABIAAgBQAPgKA6gTQASgHAogTQAmgSAUgHIAkgMQAdgKAIgCQAJgCAJABIAKgEQAGgCAygHQAUgDAcgHIAugNQAbgEAGAAQAJgBAIABQAPgIASgEQAPgDAdAAQAZAAAwgIQAsgDAcAMQAcAMAQAdQAQAbgDAfQgEAegWAYQgNAOgPAIIAJAKQANAXABAYQACAagNAXQgLAXgVAOQgQALggAIQgwAPg3AHQgVACgMgBIgKAHIgbAWQgVAOgaABQgaACgWgLQgXgLgOgVQgPgWgBgZQgBgMACgNQgJAVgRAfQgFAKgUAvQgPAigNAVQgSAfgYARQgDAMgGAPIgVArQgPAggNAyIgTBVQgJAggKARQgPAXgbAMQgTAJgUAAIgPgCgABxA2IgDAQIAJgNIADgEIgJABg");
	var mask_4_graphics_649 = new cjs.Graphics().p("AjvKIQgbgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQADgPAIgNIAbglIAHgNQgYAHgOAAIgDAAIgNAIQgMAGgaAGQgaAHgMAFIglAXQghAUgfADQgmAFgdgRQgWgMgNgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAZgMAtgMQAfgIAWABIAAgBQAPgKA6gTQASgHAogTQAmgSAUgHIAkgMQAdgKAIgCQAJgCAJABIALgEQAFgCAygHQAUgDAcgHIAvgNQAagEAGAAQAJgBAIABQAPgIATgEQAPgDAdAAQAYAAAwgIQAsgDAcAMQAcAMAQAdQAQAbgDAfQgEAegWAYQgJAJgKAHQAnAGAZAjQALATAFAUQANApgGAlQgCATgQAlQgPAhgJAKQgIAKgUAQQgnAhgYAHQgfAIgggMQgfgNgRgcQgQgcAEgiQACgPAGgNIgTACQgVACgMgBIgKAHIgbAWQgVAOgaABQgaACgWgLQgXgLgOgVQgOgWgCgZQgBgMACgNQgJAVgRAfQgFAKgUAvQgPAigMAVQgTAfgYARQgDAMgGAPIgVArQgPAggMAyIgUBVQgJAggKARQgOAXgcAMQgTAJgTAAIgQgCgABbA2IgDAQIAJgNIADgEIgJABg");
	var mask_4_graphics_650 = new cjs.Graphics().p("AjvKIQgbgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQADgPAIgNIAbglIAHgNQgYAHgOAAIgDAAIgNAIQgMAGgaAGQgaAHgMAFIglAXQghAUgfADQgmAFgdgRQgWgMgNgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAZgMAtgMQAfgIAWABIAAgBQAPgKA6gTQASgHAogTQAmgSAUgHIAkgMQAdgKAIgCQAJgCAJABIALgEQAFgCAygHQAUgDAcgHIAvgNQAagEAGAAQAJgBAIABQAPgIATgEQAPgDAdAAQAYAAAwgIQAsgDAcAMQAcAMAQAdQAQAbgDAfQgEAegWAYQgJAJgKAHQAnAGAZAjQALATAFAUQANApgGAlQgCATgQAlQgPAhgJAKQgIAKgUAQQgnAhgYAHQgRAFgSgCQgLAPgQAKQgRAKgVAGQgTAEgGADIgUAKQghAPgkgLQghgKgVgfQgHgLgFgRQgJglAUgjIAHgMQgUAAgRgJQgXgLgOgVQgOgWgCgZQgBgMACgNQgJAVgRAfQgFAKgUAvQgPAigMAVQgTAfgYARQgDAMgGAPIgVArQgPAggMAyIgUBVQgJAggKARQgOAXgcAMQgTAJgTAAIgQgCgABbA2IgDAQIAJgNIADgEIgJABg");
	var mask_4_graphics_651 = new cjs.Graphics().p("AjvKIQgbgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQADgPAIgNIAbglIAHgNQgYAHgOAAIgDAAIgNAIQgMAGgaAGQgaAHgMAFIglAXQghAUgfADQgmAFgdgRQgWgMgNgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAZgMAtgMQAfgIAWABIAAgBQAPgKA6gTQASgHAogTQAmgSAUgHIAkgMQAdgKAIgCQAJgCAJABIALgEQAFgCAygHQAUgDAcgHIAvgNQAagEAGAAQAJgBAIABQAPgIATgEQAPgDAdAAQAYAAAwgIQAsgDAcAMQAcAMAQAdQAQAbgDAfQgEAegWAYQgJAJgKAHQAnAGAZAjQALATAFAUQANApgGAlQgCATgQAlQgPAhgJAKQgIAKgUAQQgnAhgYAHQgRAFgSgCQgLAPgQAKQgRAKgVAGQgTAEgGADIgUAKQghAPgkgLQgJgDgHgEIgGAJQgEAIgDANIgEAWQgGAagUAlIggA8QgSAqgGAIQgQAWgbALQgbALgagFQgbgGgUgUQgVgUgGgcQgJgoAZg3QAhg5ALggQAOg4AMgbQAHgQAggpQAXgeAUgQIgFgHQgOgWgCgZQgBgMACgNQgJAVgRAfQgFAKgUAvQgPAigMAVQgTAfgYARQgDAMgGAPIgVArQgPAggMAyIgUBVQgJAggKARQgOAXgcAMQgTAJgTAAIgQgCgABbA2IgDAQIAJgNIADgEIgJABg");
	var mask_4_graphics_652 = new cjs.Graphics().p("AjvKIQgbgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQADgPAIgNIAbglIAHgNQgYAHgOAAIgDAAIgNAIQgMAGgaAGQgaAHgMAFIglAXQghAUgfADQgmAFgdgRQgWgMgNgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAZgMAtgMQAfgIAWABIAAgBQAPgKA6gTQASgHAogTQAmgSAUgHIAkgMQAdgKAIgCQAJgCAJABIALgEQAFgCAygHQAUgDAcgHIAvgNQAagEAGAAQAJgBAIABQAPgIATgEQAPgDAdAAQAYAAAwgIQAsgDAcAMQAcAMAQAdQAQAbgDAfQgEAegWAYQgJAJgKAHQAnAGAZAjQALATAFAUQANApgGAlQgCATgQAlQgPAhgJAKQgIAKgUAQQgnAhgYAHQgRAFgSgCQgLAPgQAKQgRAKgVAGIgPAEQAWATAKAOQAXAbADAcQAGAdgNAcQgNAbgZAPQgYAOgfgBQgegBgXgRQgJgHgPgPQgQgQgIgGIgRgKIgeA5QgSAqgGAIQgQAWgbALQgbALgagFQgbgGgUgUQgVgUgGgcQgJgoAZg3QAhg5ALggQAOg4AMgbQAHgQAggpQAXgeAUgQIgFgHQgOgWgCgZQgBgMACgNQgJAVgRAfQgFAKgUAvQgPAigMAVQgTAfgYARQgDAMgGAPIgVArQgPAggMAyIgUBVQgJAggKARQgOAXgcAMQgTAJgTAAIgQgCgABbA2IgDAQIAJgNIADgEIgJABg");
	var mask_4_graphics_653 = new cjs.Graphics().p("AjvKIQgbgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQADgPAIgNIAbglIAHgNQgYAHgOAAIgDAAIgNAIQgMAGgaAGQgaAHgMAFIglAXQghAUgfADQgmAFgdgRQgWgMgNgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAZgMAtgMQAfgIAWABIAAgBQAPgKA6gTQASgHAogTQAmgSAUgHIAkgMQAdgKAIgCQAJgCAJABIALgEQAFgCAygHQAUgDAcgHIAvgNQAagEAGAAQAJgBAIABQAPgIATgEQAPgDAdAAQAYAAAwgIQAsgDAcAMQAcAMAQAdQAQAbgDAfQgEAegWAYQgJAJgKAHQAnAGAZAjQALATAFAUQANApgGAlQgCATgQAlQgPAhgJAKQgIAKgUAQQgnAhgYAHQgRAFgSgCQgLAPgQAKQgRAKgVAGIgPAEQAWATAKAOQAKAMAGAMIAIAEQArAUAOANQAVAUAHAeQAHAegKAbQgMAcgZAQQgaARgdAAQgfgBgvgZQgegSgNgNQgIgJgGgKIgGgEQgJgHgPgPQgQgQgIgGIgRgKIgeA5QgSAqgGAIQgQAWgbALQgbALgagFQgbgGgUgUQgVgUgGgcQgJgoAZg3QAhg5ALggQAOg4AMgbQAHgQAggpQAXgeAUgQIgFgHQgOgWgCgZQgBgMACgNQgJAVgRAfQgFAKgUAvQgPAigMAVQgTAfgYARQgDAMgGAPIgVArQgPAggMAyIgUBVQgJAggKARQgOAXgcAMQgTAJgTAAIgQgCgABbA2IgDAQIAJgNIADgEIgJABg");
	var mask_4_graphics_654 = new cjs.Graphics().p("AjyKIQgbgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QAQgiAIgKQAHgJAIgHQADgPAIgNIAaglIAIgNQgZAHgNAAIgDAAIgNAIQgMAGgaAGQgaAHgMAFIglAXQghAUggADQgmAFgcgRQgWgMgNgWQgNgWgBgZQgBgYALgXQANgXAVgOIAugVQAZgRAOgHQAZgMAsgMQAggIAWABIAAgBQAPgKA5gTQATgHAogTQAmgSAUgHIAkgMQAegKAHgCQAJgCAJABIAKgEQAGgCAygHQAUgDAcgHIAugNQAbgEAGAAQAJgBAIABQAPgIASgEQAPgDAdAAQAZAAAwgIQAsgDAcAMQAbAMARAdQAQAbgDAfQgEAegWAYQgJAJgKAHQAnAGAZAjQALATAFAUQANApgGAlQgDATgQAlQgPAhgIAKQgIAKgUAQIgLAJIAFABQAaADATAOQAUAOALAYQALAXgDAZIgFAcQgBAJgBASQgFAhgOAeQgfBDgxAQQgQAFgQAAQgIAIgJAGQgaARgdAAQgfgBgwgZQgegSgMgNQgJgJgFgKIgGgEQgJgHgPgPQgQgQgIgGIgRgKIgeA5QgSAqgGAIQgQAWgbALQgbALgagFQgbgGgUgUQgVgUgHgcQgIgoAZg3QAhg5ALggQAOg4AMgbQAHgQAggpQAWgeAVgQIgGgHQgOgWgBgZQgBgMACgNQgJAVgRAfQgFAKgUAvQgPAigMAVQgTAfgYARQgDAMgGAPIgVArQgPAggNAyIgTBVQgJAggKARQgPAXgbAMQgTAJgUAAIgPgCgAFoFRQgSAKgUAGIgPAEQAWATAKAOQAKAMAGAMIAFACIABgBQADgMAAgQQACgVADgKQAGgYAQgTIABgBIgFAAQgLAPgQAKgABYA2IgDAQIAIgNIAEgEIgJABg");
	var mask_4_graphics_655 = new cjs.Graphics().p("AkmKIQgbgDgVgUQgWgUgIgaQgIghAQg9QAWhdAWg1IAXg4QAQgiAHgKQAHgJAJgHQADgPAIgNIAaglIAHgNQgYAHgOAAIgCAAIgNAIQgMAGgaAGQgaAHgMAFIglAXQghAUggADQgmAFgcgRQgWgMgNgWQgNgWgBgZQgBgYALgXQANgXAVgOIAugVQAZgRANgHQAagMAsgMQAggIAWABIAAgBQAPgKA5gTQATgHAogTQAmgSAUgHIAkgMQAegKAIgCQAJgCAJABIAKgEQAFgCAygHQAUgDAbgHIAvgNQAbgEAGAAQAJgBAIABQAPgIASgEQAPgDAdAAQAZAAAwgIQAsgDAcAMQAbAMARAdQAQAbgEAfQgDAegWAYQgJAJgKAHQAnAGAZAjQAKATAGAUQAHAYACAWQALgCAMACQAvAFAaApQAYAogQAsIgLAYQgFAPgGAeQgHATgPATQgXAigdAQIgFADIgCAIQgBAJgBASQgGAhgNAeQgfBDgxAQQgQAFgQAAQgIAIgKAGQgZARgdAAQgfgBgwgZQgegSgMgNQgJgJgFgKIgGgEQgJgHgPgPQgQgQgIgGIgRgKIgeA5QgSAqgHAIQgPAWgaALQgbALgbgFQgbgGgUgUQgWgUgGgcQgJgoAag3QAhg5ALggQAOg4ANgbQAHgQAfgpQAWgeAVgQIgGgHQgOgWgCgZQAAgMACgNQgJAVgQAfQgGAKgTAvQgPAigNAVQgUAfgXARQgDAMgGAPIgVArQgPAggNAyIgTBVQgJAggLARQgOAXgbAMQgTAJgUAAIgPgCgAE0FRQgSAKgUAGIgQAEQAXATAKAOQAKAMAGAMIAFACIABgBQADgMAAgQQACgVADgKQAGgYAQgTIABgBIgFAAQgLAPgQAKgAAkA2IgDAQIAIgNIADgEIgIABg");
	var mask_4_graphics_656 = new cjs.Graphics().p("AloKIQgbgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QAQgiAIgKQAHgJAIgHQADgPAIgNIAaglIAIgNQgZAHgNAAIgDAAIgNAIQgMAGgaAGQgaAHgMAFIglAXQghAUggADQgmAFgcgRQgWgMgNgWQgNgWgBgZQgBgYALgXQANgXAVgOIAugVQAZgRAOgHQAZgMAsgMQAggIAWABIAAgBQAPgKA5gTQATgHAogTQAmgSAUgHIAkgMQAegKAIgCQAJgCAJABIAKgEQAGgCAygHQAUgDAbgHIAugNQAbgEAGAAQAJgBAIABQAPgIASgEQAPgDAdAAQAZAAAwgIQAsgDAcAMQAbAMARAdQAQAbgDAfQgEAegWAYQgJAJgKAHQAnAGAZAjQALATAFAUQAEAOACANIADgCIATgVQAMgPAQgiQAPgiANgOQATgWAegIQAegHAbALQAcALARAaQAQAYAAAeQAAAbgTApQgGAOgQAcQgcAxgbAYQgWASgWAIIgJATQgFAPgGAeQgGATgPATQgYAigcAQIgGADIgCAIQgBAJgBASQgFAhgOAeQgfBDgxAQQgQAFgQAAQgIAIgJAGQgaARgdAAQgfgBgwgZQgegSgMgNQgJgJgFgKIgGgEQgJgHgPgPQgQgQgIgGIgRgKIgdA5QgSAqgGAIQgQAWgbALQgbALgbgFQgbgGgUgUQgVgUgHgcQgIgoAZg3QAhg5ALggQAOg4ANgbQAHgQAggpQAWgeAVgQIgGgHQgOgWgBgZQgBgMACgNQgJAVgRAfQgFAKgUAvQgPAigNAVQgTAfgYARQgDAMgGAPIgVArQgPAggNAyIgTBVQgJAggKARQgPAXgbAMQgTAJgUAAIgPgCgADyFRQgSAKgUAGIgPAEQAWATAKAOQAKAMAGAMIAFACIABgBQADgMAAgQQACgVADgKQAGgYAQgTIABgBIgFAAQgLAPgQAKgAgdA2IgDAQIAIgNIAEgEIgJABg");
	var mask_4_graphics_657 = new cjs.Graphics().p("AmZKIQgbgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQADgPAIgNIAbglIAHgNQgZAHgNAAIgDAAIgNAIQgMAGgaAGQgaAHgMAFIglAXQghAUgfADQgmAFgdgRQgWgMgNgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAZgMAsgMQAggIAWABIAAgBQAPgKA6gTQASgHAogTQAmgSAUgHIAkgMQAegKAIgCQAJgCAJABIAKgEQAGgCAygHQAUgDAcgHIAtgNQAbgEAGAAQAJgBAIABQAPgIASgEQAPgDAeAAQAYAAAwgIQAsgDAcAMQAcAMAQAdQAQAbgDAfQgEAegWAYQgJAJgKAHQAnAGAZAjQALATAFAUQAEAOADANIACgCIATgVQANgPAQgiQAPgiAMgOQAQgTAZgIQAKgNAOgJQAmgWArALQAlALAkAjQATAUAIAOQAJAQAHAhQAIAygMAfQgKAegcASQgeATgegEQgagCgUgPQgWAigVASQgWASgWAIIgJATQgFAPgGAeQgGATgPATQgYAigcAQIgGADIgBAIQgCAJgBASQgFAhgOAeQgeBDgyAQQgPAFgRAAQgHAIgKAGQgaARgdAAQgfgBgwgZQgegSgMgNQgIgJgGgKIgGgEQgJgHgPgPQgQgQgHgGIgRgKIgeA5QgSAqgGAIQgQAWgbALQgbALgagFQgcgGgUgUQgVgUgGgcQgJgoAZg3QAhg5ALggQAPg4AMgbQAHgQAggpQAXgeAUgQIgFgHQgOgWgCgZQgBgMACgNQgJAVgRAfQgFAKgUAvQgPAigNAVQgTAfgYARQgDAMgGAPIgVArQgPAggMAyIgUBVQgJAggKARQgOAXgcAMQgTAJgTAAIgQgCgADBFRQgSAKgUAGIgPAEQAWATAKAOQAKAMAGAMIAFACIABgBQAEgMAAgQQABgVADgKQAGgYAQgTIABgBIgFAAQgLAPgQAKgAhOA2IgDAQIAJgNIADgEIgJABg");
	var mask_4_graphics_658 = new cjs.Graphics().p("AmmKIQgbgDgWgUQgWgUgHgaQgIghAPg9QAXhdAWg1IAWg4QARgiAHgKQAHgJAJgHQADgPAIgNIAaglIAHgNQgYAHgOAAIgCAAIgOAIQgLAGgaAGQgaAHgMAFIglAXQghAUggADQgmAFgcgRQgWgMgNgWQgOgWAAgZQgBgYALgXQAMgXAWgOIAugVQAZgRANgHQAagMAsgMQAggIAVABIABgBQAPgKA5gTQATgHAngTQAmgSAVgHIAkgMQAegKAIgCQAJgCAJABIAKgEQAFgCAzgHQAUgDAbgHIAugNQAbgEAGAAQAJgBAIABQAPgIASgEQAPgDAdAAQAZAAAvgIQAtgDAcAMQAbAMARAdQAQAbgEAfQgDAegWAYQgJAJgKAHQAnAGAZAjQAKATAGAUQAEAOACANIACgCIAUgVQAMgPAQgiQAPgiAMgOQARgTAYgIQALgNAOgJQAmgWArALQAlALAjAjQAUAUAIAOQAIAQAIAhQAHAwgKAfIAGAJQAJAQAGAcQAKAgAAAWQABAPgDAeIAEAhQABAugjAgQgkAegugIQgtgJgWgqQgKgVgDgnIgGhKIgDgRQgIAKgIAHQgWASgXAIIgIATQgFAPgGAeQgHATgPATQgXAigdAQIgFADIgCAIQgCAJAAASQgGAhgNAeQgfBDgxAQQgQAFgQAAQgIAIgKAGQgZARgdAAQgfgBgwgZQgegSgMgNQgJgJgFgKIgHgEQgIgHgPgPQgPgQgIgGIgRgKIgeA5QgTAqgGAIQgQAWgaALQgbALgbgFQgbgGgVgUQgVgUgGgcQgJgoAag3QAhg5ALggQAOg4AMgbQAIgQAfgpQAXgeAVgQIgGgHQgOgWgCgZQAAgMACgNQgJAVgRAfQgGAKgTAvQgPAigNAVQgUAfgXARQgDAMgGAPIgWArQgPAggMAyIgTBVQgJAggLARQgOAXgbAMQgTAJgUAAIgPgCgAC0FRQgSAKgUAGIgQAEQAXATAJAOQALAMAGAMIAFACIABgBQADgMAAgQQACgVACgKQAHgYAQgTIAAgBIgEAAQgLAPgQAKgAhbA2IgDAQIAIgNIADgEIgIABg");
	var mask_4_graphics_659 = new cjs.Graphics().p("AmmKIQgbgDgWgUQgWgUgHgaQgIghAPg9QAXhdAWg1IAWg4QARgiAHgKQAHgJAJgHQADgPAIgNIAaglIAHgNQgYAHgOAAIgCAAIgOAIQgLAGgaAGQgaAHgMAFIglAXQghAUggADQgmAFgcgRQgWgMgNgWQgOgWAAgZQgBgYALgXQAMgXAWgOIAugVQAZgRANgHQAagMAsgMQAggIAVABIABgBQAPgKA5gTQATgHAngTQAmgSAVgHIAkgMQAegKAIgCQAJgCAJABIAKgEQAFgCAzgHQAUgDAbgHIAugNQAbgEAGAAQAJgBAIABQAPgIASgEQAPgDAdAAQAZAAAvgIQAtgDAcAMQAbAMARAdQAQAbgEAfQgDAegWAYQgJAJgKAHQAnAGAZAjQAKATAGAUQAEAOACANIACgCIAUgVQAMgPAQgiQAPgiAMgOQARgTAYgIQALgNAOgJQAmgWArALQAlALAjAjQAUAUAIAOQAIAQAIAhQAHAwgKAfIAGAJQAJAQAGAcQAKAgAAAWQABAPgDAeIAEAhQABAigTAaIABAEIAGBXQACAWgBALQgFA3gtAcQgUAOgaACQgbADgWgLQgXgJgPgWQgQgVgBgYQgBgMABgQQACgSAAgJQABgNgDgpQgDgiAEgTQAFgQAKgOIgCgSIgGhKIgDgRQgIAKgIAHQgWASgXAIIgIATQgFAPgGAeQgHATgPATQgXAigdAQIgFADIgCAIQgCAJAAASQgGAhgNAeQgfBDgxAQQgQAFgQAAQgIAIgKAGQgZARgdAAQgfgBgwgZQgegSgMgNQgJgJgFgKIgHgEQgIgHgPgPQgPgQgIgGIgRgKIgeA5QgTAqgGAIQgQAWgaALQgbALgbgFQgbgGgVgUQgVgUgGgcQgJgoAag3QAhg5ALggQAOg4AMgbQAIgQAfgpQAXgeAVgQIgGgHQgOgWgCgZQAAgMACgNQgJAVgRAfQgGAKgTAvQgPAigNAVQgUAfgXARQgDAMgGAPIgWArQgPAggMAyIgTBVQgJAggLARQgOAXgbAMQgTAJgUAAIgPgCgAC0FRQgSAKgUAGIgQAEQAXATAJAOQALAMAGAMIAFACIABgBQADgMAAgQQACgVACgKQAHgYAQgTIAAgBIgEAAQgLAPgQAKgAhbA2IgDAQIAIgNIADgEIgIABg");
	var mask_4_graphics_660 = new cjs.Graphics().p("AmmKIQgbgDgWgUQgWgUgHgaQgIghAPg9QAXhdAWg1IAWg4QARgiAHgKQAHgJAJgHQADgPAIgNIAaglIAHgNQgYAHgOAAIgCAAIgOAIQgLAGgaAGQgaAHgMAFIglAXQghAUggADQgmAFgcgRQgWgMgNgWQgOgWAAgZQgBgYALgXQAMgXAWgOIAugVQAZgRANgHQAagMAsgMQAggIAVABIABgBQAPgKA5gTQATgHAngTQAmgSAVgHIAkgMQAegKAIgCQAJgCAJABIAKgEQAFgCAzgHQAUgDAbgHIAugNQAbgEAGAAQAJgBAIABQAPgIASgEQAPgDAdAAQAZAAAvgIQAtgDAcAMQAbAMARAdQAQAbgEAfQgDAegWAYQgJAJgKAHQAnAGAZAjQAKATAGAUQAEAOACANIACgCIAUgVQAMgPAQgiQAPgiAMgOQARgTAYgIQALgNAOgJQAmgWArALQAlALAjAjQAUAUAIAOQAIAQAIAhQAHAwgKAfIAGAJQAJAQAGAcQAKAgAAAWQABAPgDAeIAEAhQABAigTAaIABAEIAGBXQACAWgBALQgFA3gtAcQgUAOgaACQgbADgWgLQgXgJgPgWQgQgVgBgYQgBgMABgQQACgSAAgJQABgNgDgpQgCgVABgPIg/ALQgYAEgWgJQgSAVgVAMIgFADIgCAIQgCAJAAASQgGAhgNAeQgfBDgxAQQgQAFgQAAQgIAIgKAGQgZARgdAAQgfgBgwgZQgegSgMgNQgJgJgFgKIgHgEQgIgHgPgPQgPgQgIgGIgRgKIgeA5QgTAqgGAIQgQAWgaALQgbALgbgFQgbgGgVgUQgVgUgGgcQgJgoAag3QAhg5ALggQAOg4AMgbQAIgQAfgpQAXgeAVgQIgGgHQgOgWgCgZQAAgMACgNQgJAVgRAfQgGAKgTAvQgPAigNAVQgUAfgXARQgDAMgGAPIgWArQgPAggMAyIgTBVQgJAggLARQgOAXgbAMQgTAJgUAAIgPgCgAC0FRQgSAKgUAGIgQAEQAXATAJAOQALAMAGAMIAFACIABgBQADgMAAgQQACgVACgKQAHgYAQgTIAAgBIgEAAQgLAPgQAKgAhbA2IgDAQIAIgNIADgEIgIABg");
	var mask_4_graphics_661 = new cjs.Graphics().p("AnkKIQgcgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAJgHQADgPAIgNIAaglIAHgNQgYAHgOAAIgCAAIgOAIQgLAGgbAGQgZAHgNAFIglAXQggAUggADQgmAFgcgRQgWgMgOgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAagMAsgMQAggIAVABIABgBQAPgKA5gTQATgHAngTQAmgSAVgHIAkgMQAegKAIgCQAJgCAJABIAKgEQAFgCAygHQAVgDAbgHIAvgNQAagEAHAAQAJgBAIABQANgIATgEQAPgDAdAAQAZAAAvgIQAsgDAdAMQAbAMARAdQAQAbgEAfQgDAegWAYQgJAJgKAHQAmAGAaAjQAKATAFAUQAFAOACANIACgCIAUgVQAMgPAQgiQAPgiAMgOQARgTAYgIQALgNAOgJQAmgWArALQAlALAjAjIAFAGIAEgQQAJgcAYgRQAXgTAdgCQAcgBAaAPQAbAQALAZQAMAYAAAqQgBAWgFAuIAAArQAAAYgGARQgJAdgbATQgbATgfgBQgLAAgKgDIABAJQAAAPgCAeIADAhQACAigTAaIABAEIAGBXQACAWgBALQgFA3gtAcQgUAOgbACQgaADgWgLQgXgJgPgWQgQgVgCgYQgBgMABgQQADgSAAgJQABgNgEgpQgBgVABgPIg/ALQgZAEgWgJQgRAVgVAMIgGADIgBAIQgCAJgBASQgFAhgNAeQgfBDgxAQQgQAFgQAAQgIAIgKAGQgZARgeAAQgegBgwgZQgegSgLgNQgJgJgGgKIgGgEQgJgHgPgPQgPgQgIgGIgRgKIgeA5QgTAqgGAIQgQAWgaALQgcALgagFQgbgGgVgUQgVgUgGgcQgJgoAag3QAgg5AMggQAOg4AMgbQAHgQAggpQAXgeAUgQIgFgHQgOgWgCgZQgBgMADgNQgKAVgRAfQgFAKgTAvQgPAigNAVQgUAfgXARQgEAMgGAPIgVArQgPAggMAyIgTBVQgJAggLARQgOAXgbAMQgTAJgUAAIgPgCgAB2FRQgSAKgUAGIgQAEQAWATAKAOQAKAMAHAMIAFACIAAgBQAEgMAAgQQACgVACgKQAHgYAPgTIABgBIgFAAQgLAPgPAKgAiZA2IgDAQIAIgNIADgEIgIABg");
	var mask_4_graphics_662 = new cjs.Graphics().p("AnkKIQgcgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAJgHQADgPAIgNIAaglIAHgNQgYAHgOAAIgCAAIgOAIQgLAGgbAGQgZAHgNAFIglAXQggAUggADQgmAFgcgRQgWgMgOgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAagMAsgMQAggIAVABIABgBQAPgKA5gTQATgHAngTQAmgSAVgHIAkgMQAegKAIgCQAJgCAJABIAKgEQAFgCAygHQAVgDAbgHIAvgNQAagEAHAAQAJgBAIABQANgIATgEQAPgDAdAAQAZAAAvgIQAsgDAdAMQAbAMARAdQAQAbgEAfQgDAegWAYQgJAJgKAHQAmAGAaAjQAKATAFAUQAFAOACANIACgCIAUgVQAMgPAQgiQAPgiAMgOQARgTAYgIQALgNAOgJQAmgWArALQAlALAjAjIAFAGIAEgQQAJgcAYgRQAXgTAdgCQAcgBAaAPQAbAQALAZQAMAYAAAqQgBAWgFAuIAAArQAAASgDANQAFATgCAbQAAAYgCAYQgFAkgLATQgMASgTAMQgXAPgeABQgLAAgKgBQgEANgJANIABAEIAGBXQACAWgBALQgFA3gtAcQgUAOgbACQgaADgWgLQgXgJgPgWQgQgVgCgYQgBgMABgQQADgSAAgJQABgNgEgpQgBgVABgPIg/ALQgZAEgWgJQgRAVgVAMIgGADIgBAIQgCAJgBASQgFAhgNAeQgfBDgxAQQgQAFgQAAQgIAIgKAGQgZARgeAAQgegBgwgZQgegSgLgNQgJgJgGgKIgGgEQgJgHgPgPQgPgQgIgGIgRgKIgeA5QgTAqgGAIQgQAWgaALQgcALgagFQgbgGgVgUQgVgUgGgcQgJgoAag3QAgg5AMggQAOg4AMgbQAHgQAggpQAXgeAUgQIgFgHQgOgWgCgZQgBgMADgNQgKAVgRAfQgFAKgTAvQgPAigNAVQgUAfgXARQgEAMgGAPIgVArQgPAggMAyIgTBVQgJAggLARQgOAXgbAMQgTAJgUAAIgPgCgAB2FRQgSAKgUAGIgQAEQAWATAKAOQAKAMAHAMIAFACIAAgBQAEgMAAgQQACgVACgKQAHgYAPgTIABgBIgFAAQgLAPgPAKgAiZA2IgDAQIAIgNIADgEIgIABg");
	var mask_4_graphics_663 = new cjs.Graphics().p("An7KIQgcgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQAEgPAHgNIAbglIAHgNQgYAHgOAAIgDAAIgNAIQgLAGgbAGQgZAHgNAFIglAXQggAUggADQgmAFgcgRQgWgMgOgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAagMAsgMQAfgIAWABIABgBQAPgKA5gTQASgHAogTQAmgSAUgHIAlgMQAegKAIgCQAIgCAKABIAKgEQAFgCAygHQAVgDAbgHIAvgNQAagEAGAAQAJgBAJABQAOgIASgEQAPgDAdAAQAZAAAvgIQAsgDAdAMQAbAMARAdQAQAbgEAfQgEAegWAYQgIAJgLAHQAnAGAZAjQALATAFAUQAFAOACANIACgCIAUgVQAMgPAQgiQAPgiAMgOQARgTAYgIQAKgNAOgJQAmgWAsALQAlALAjAjIAFAGIAEgQQAJgcAYgRQAXgTAcgCQAdgBAaAPQAbAQALAZQAMAYAAAqQgBAWgFAuIAAArQAAASgDANQAFATgCAbQAAAYgCAYQgDASgEAOQAEAIACAJQACAKABAVIAEAeQABAGAJAYIAjBcQAGAZgGAaQgGAbgRASQgRATgZAKQgZAJgagEQgZgFgVgSQgUgSgHgZIAAgCQgNAYgZAPQgUAOgbACQgaADgWgLQgXgJgPgWQgQgVgCgYQgBgMABgQQADgSAAgJQABgNgEgpQgBgVABgPIg/ALQgZAEgWgJQgSAVgUAMIgGADIgBAIQgCAJgBASQgFAhgNAeQgfBDgyAQQgPAFgQAAQgIAIgKAGQgaARgdAAQgfgBgvgZQgdgSgNgNQgIgJgGgKIgGgEQgJgHgPgPQgQgQgIgGIgQgKIgeA5QgTAqgGAIQgQAWgaALQgcALgagFQgcgGgUgUQgVgUgGgcQgJgoAag3QAgg5AMggQAOg4AMgbQAHgQAggpQAXgeAUgQIgFgHQgOgWgCgZQgBgMACgNQgJAVgRAfQgFAKgTAvQgPAigOAVQgTAfgXARQgEAMgGAPIgVArQgPAggMAyIgUBVQgIAggLARQgOAXgcAMQgTAJgTAAIgPgCgABeFRQgRAKgVAGIgPAEQAWATAKAOQAKAMAGAMIAFACIABgBQAEgMAAgQQACgVACgKQAGgYAQgTIABgBIgFAAQgLAPgQAKgAiwA2IgEAQIAJgNIADgEIgIABg");
	var mask_4_graphics_664 = new cjs.Graphics().p("AopKIQgbgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQADgPAIgNIAbglIAHgNQgZAHgNAAIgDAAIgNAIQgMAGgaAGQgaAHgMAFIglAXQghAUgfADQgmAFgdgRQgWgMgNgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAZgMAsgMQAggIAWABIAAgBQAPgKA6gTQASgHAogTQAmgSAUgHIAkgMQAegKAIgCQAJgCAJABIAKgEQAGgCAygHQAUgDAcgHIAvgNQAagEAGAAQAJgBAIABQAPgIASgEQAPgDAdAAQAYAAAwgIQAsgDAcAMQAcAMAQAdQAQAbgDAfQgEAegWAYQgJAJgKAHQAnAGAZAjQALATAFAUQAEAOADANIACgCIATgVQANgPAQgiQAPgiAMgOQARgTAYgIQAKgNAOgJQAmgWArALQAlALAkAjIAFAGIAEgQQAIgcAZgRQAXgTAcgCQAcgBAbAPQAaAQAMAZQALAYAAAqQgBAWgEAuIAAArQgBASgCANQAEARAAAWQAXgNAcADQAjACAZAWQAYAXAFAjQAFAkgRAcIgNATQgJAMgEAJIgGAWIgNAgIgXA5IgJASQAAAQgDARQgHAbgQASQgRATgaAKQgYAJgagEQgagFgUgSQgUgSgHgZIgBgCQgMAYgZAPQgUAOgbACQgaADgWgLQgXgJgPgWQgQgVgCgYQgBgMABgQQADgSAAgJQAAgNgDgpQgCgVACgPIhAALQgYAEgWgJQgSAVgUAMIgGADIgBAIQgCAJgBASQgFAhgOAeQgeBDgyAQQgPAFgRAAQgHAIgKAGQgaARgdAAQgfgBgugZQgegSgNgNQgIgJgGgKIgGgEQgJgHgPgPQgQgQgIgGIgRgKIgeA5QgSAqgGAIQgQAWgbALQgbALgagFQgcgGgUgUQgVgUgGgcQgJgoAZg3QAhg5ALggQAPg4AMgbQAHgQAggpQAXgeAUgQIgFgHQgOgWgCgZQgBgMACgNQgJAVgRAfQgFAKgUAvQgPAigNAVQgTAfgYARQgDAMgGAPIgVArQgPAggMAyIgUBVQgJAggKARQgOAXgcAMQgTAJgTAAIgQgCgAAxFRQgSAKgUAGIgOAEQAVATAKAOQAKAMAGAMIAFACIABgBQAEgMAAgQQABgVADgKQAGgYAQgTIABgBIgFAAQgLAPgQAKgAjeA2IgDAQIAJgNIADgEIgJABg");
	var mask_4_graphics_665 = new cjs.Graphics().p("ApHKIQgbgDgVgUQgXgUgHgaQgIghAPg9QAXhdAWg1IAXg4QAQgiAHgKQAHgJAJgHQADgPAIgNIAaglIAHgNQgYAHgOAAIgCAAIgNAIQgMAGgaAGQgaAHgMAFIglAXQghAUggADQgmAFgcgRQgWgMgNgWQgOgWAAgZQgBgYALgXQANgXAVgOIAugVQAZgRANgHQAagMAsgMQAggIAWABIAAgBQAPgKA5gTQATgHAogTQAmgSAUgHIAkgMQAegKAIgCQAJgCAJABIAKgEQAFgCAzgHQAUgDAbgHIAvgNQAbgEAGAAQAJgBAIABQAPgIASgEQAPgDAdAAQAZAAAvgIQAsgDAcAMQAbAMARAdQAQAbgEAfQgDAegWAYQgJAJgKAHQAnAGAZAjQAKATAGAUQAEAOACANIADgCIATgVQAMgPAQgiQAPgiANgOQAQgTAZgIQAKgNAOgJQAmgWArALQAlALAjAjIAGAGIADgQQAJgcAZgRQAXgTAcgCQAcgBAbAPQAaAQAMAZQALAYAAAqQgBAWgEAuIAAArIgBAFIAJgUQAIgVAEgHQAYgoAwgHQAxgGAhAiQAQAQAHAWQAIAWgEAWQgCAOgKAaIgjBWQgFAJgHAIQgCAXgLAUIgOATQgIAMgEAJIgGAWIgNAgIgXA5IgKASQABAQgEARQgGAbgRASQgQATgaAKQgZAJgZgEQgagFgUgSQgUgSgIgZIAAgCQgMAYgZAPQgVAOgaACQgbADgWgLQgXgJgPgWQgQgVgBgYQgBgMABgQQACgSAAgJQABgNgDgpQgCgVABgPIg/ALQgYAEgWgJQgSAVgVAMIgFADIgCAIQgBAJgBASQgGAhgNAeQgfBDgxAQQgQAFgQAAQgIAIgKAGQgZARgdAAQgegBgwgZQgegSgMgNQgJgJgFgKIgGgEQgJgHgPgPQgQgQgIgGIgRgKIgeA5QgSAqgHAIQgPAWgbALQgbALgbgFQgbgGgUgUQgWgUgGgcQgJgoAag3QAhg5ALggQAOg4ANgbQAHgQAfgpQAXgeAVgQIgGgHQgOgWgCgZQAAgMACgNQgJAVgRAfQgGAKgTAvQgPAigNAVQgUAfgXARQgDAMgGAPIgVArQgPAggNAyIgTBVQgJAggLARQgOAXgbAMQgTAJgUAAIgPgCgAATFRQgSAKgTAGIgQAEQAXATAKAOQAJAMAGAMIAFACIABgBQADgMAAgQQACgVADgKQAGgYAQgTIABgBIgFAAQgLAPgQAKgAj8A2IgDAQIAIgNIADgEIgIABg");
	var mask_4_graphics_666 = new cjs.Graphics().p("AqNKIQgcgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQAEgPAHgNIAbglIAHgNQgYAHgOAAIgDAAIgNAIQgLAGgbAGQgZAHgNAFIglAXQggAUggADQgmAFgcgRQgWgMgOgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAagMAsgMQAggIAVABIABgBQAPgKA5gTQASgHAogTQAmgSAUgHIAlgMQAegKAIgCQAJgCAJABIAKgEQAFgCAygHQAVgDAbgHIAvgNQAagEAGAAQAJgBAJABQAOgIATgEQAPgDAdAAQAZAAAvgIQArgDAdAMQAbAMARAdQAQAbgEAfQgDAegXAYQgIAJgLAHQAnAGAZAjQALATAFAUQAFAOACANIACgCIAUgVQAMgPAQgiQAPgiAMgOQARgTAYgIQAKgNAOgJQAmgWAsALQAlALAjAjIAFAGIAEgQQAJgcAYgRQAXgTAdgCQAcgBAaAPQAbAQALAZQAMAYAAAqQgBAWgFAuIAAArIAAAFIAIgUQAIgVAFgHIAEgGIAFgRQAHgQAXgsQATgiAWgzQAOgjAIgPQAQgZATgNQAjgXA6ALQAiAGAUAPQATAPALAWQAKAXgBAYQgBAYgOAVQgOAUgUANQgNAIgDADQgCADgCAJQgFANgKARIgUAbIgdA5IgLAUQgDANgIASIgiBWQgGAJgHAIQgBAXgMAUIgNATQgJAMgDAJIgHAWIgNAgIgXA5IgJASQABAQgEARQgGAbgRASQgRATgZAKQgZAJgagEQgZgFgVgSQgUgSgHgZIAAgCQgNAYgZAPQgUAOgbACQgaADgWgLQgXgJgPgWQgQgVgCgYQgBgMABgQQADgSAAgJQABgNgEgpQgBgVABgPIg/ALQgZAEgWgJQgSAVgUAMIgGADIgBAIQgCAJgBASQgFAhgNAeQgfBDgyAQQgPAFgQAAQgIAIgJAGQgaARgdAAQgfgBgvgZQgegSgNgNQgIgJgGgKIgGgEQgJgHgPgPQgQgQgHgGIgRgKIgeA5QgTAqgGAIQgQAWgaALQgcALgagFQgcgGgUgUQgVgUgGgcQgJgoAag3QAgg5AMggQAOg4AMgbQAHgQAggpQAXgeAUgQIgFgHQgOgWgCgZQgBgMACgNQgJAVgRAfQgFAKgTAvQgPAigOAVQgTAfgXARQgEAMgGAPIgVArQgPAggMAyIgUBVQgIAggLARQgOAXgbAMQgUAJgTAAIgPgCgAgzFRQgRAKgVAGIgPAEQAWATAKAOQAKAMAHAMIAEACIABgBQAEgMAAgQQACgVACgKQAGgYAQgTIABgBIgFAAQgLAPgQAKgAlCA2IgDAQIAIgNIADgEIgIABg");
	var mask_4_graphics_667 = new cjs.Graphics().p("AtGKIQgcgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQAEgPAHgNIAbglIAHgNQgYAHgOAAIgDAAIgNAIQgLAGgbAGQgaAHgMAFIglAXQghAUgfADQgmAFgdgRQgWgMgNgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAZgMAtgMQAfgIAWABIAAgBQAPgKA6gTQASgHAogTQAmgSAUgHIAkgMQAegKAIgCQAJgCAJABIALgEQAFgCAygHQAUgDAcgHIAvgNQAagEAGAAQAJgBAIABQAPgIATgEQAPgDAdAAQAYAAAwgIQAsgDAcAMQAcAMARAdQAPAbgDAfQgEAegWAYQgJAJgKAHQAnAGAZAjQALATAFAUQAFAOACANIACgCIATgVQANgPAPgiQAPgiAMgOQARgTAYgIQAKgNAOgJQAmgWArALQAmALAjAjIAFAGIAEgQQAIgcAZgRQAXgTAcgCQAdgBAaAPQAbAQALAZQALAYAAAqQAAAWgFAuIAAArIAAAFIAIgUQAIgVAEgHIAEgGIAGgRQAGgQAYgsQATgiAWgzQAOgjAIgPQAQgZATgNQAjgXA6ALQAhAGAVAPQATAPALAWQAKAXgCAYQAAAYgPAVQgNAUgUANQgNAIgDADQgDADgBAJQgFANgKARIgUAbIgdA5IgLAUQgDANgIASIgiBWQgGAJgHAIQgBAXgMAUIgNATQgJAMgEAJIgGAWIgNAgIgXA5IgJASQABAQgEARQgGAbgRASQgRATgaAKQgYAJgagEQgZgFgVgSQgUgSgHgZIgBgCQgMAYgZAPQgUAOgbACQgaADgWgLQgXgJgPgWQgQgVgCgYQgBgMABgQQADgSAAgJQABgNgEgpQgCgVACgPIg/ALQgZAEgWgJQgRAVgUAMIgGADIgBAIQgCAJgBASQgFAhgNAeQgfBDgyAQQgPAFgQAAQgIAIgKAGQgaARgdAAQgfgBgvgZQgegSgNgNQgIgJgGgKIgGgEQgJgHgPgPQgQgQgIgGIgQgKIgeA5QgTAqgGAIQgQAWgbALQgbALgagFQgcgGgUgUQgVgUgGgcQgJgoAZg3QAhg5AMggQAOg4AMgbQAHgQAggpQAXgeAUgQIgFgHQgOgWgCgZQgBgMACgNQgJAVgRAfQgFAKgUAvQgPAigNAVQgTAfgYARQgDAMgGAPIgVArQgPAggMAyIgUBVQgJAggKARQgOAXgcAMQgTAJgTAAIgPgCgAjsFRQgRAKgVAGIgPAEQAWATAKAOQAKAMAGAMIAFACIABgBQAEgMAAgQQABgVADgKQAGgYAQgTIABgBIgFAAQgLAPgQAKgAn8A2IgDAQIAJgNIADgEIgJABgAObAbQgegBgZgVQgZgTgHgeQgIgdAMgeQALgdAZgSQAegTAxgEQAegCAHgCQAOgEAZgLQAegIAfAJQAfAKATAZQASAZAAAhQAAAhgTAYQgaAhg8AOQgWAGhHANQgWACgMAAIgFAAg");
	var mask_4_graphics_668 = new cjs.Graphics().p("AtGKIQgcgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQAEgPAHgNIAbglIAHgNQgYAHgOAAIgDAAIgNAIQgLAGgbAGQgaAHgMAFIglAXQghAUgfADQgmAFgdgRQgWgMgNgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAZgMAtgMQAfgIAWABIAAgBQAPgKA6gTQASgHAogTQAmgSAUgHIAkgMQAegKAIgCQAJgCAJABIALgEQAFgCAygHQAUgDAcgHIAvgNQAagEAGAAQAJgBAIABQAPgIATgEQAPgDAdAAQAYAAAwgIQAsgDAcAMQAcAMARAdQAPAbgDAfQgEAegWAYQgJAJgKAHQAnAGAZAjQALATAFAUQAFAOACANIACgCIATgVQANgPAPgiQAPgiAMgOQARgTAYgIQAKgNAOgJQAmgWArALQAmALAjAjIAFAGIAEgQQAIgcAZgRQAXgTAcgCQAdgBAaAPQAbAQALAZQALAYAAAqQAAAWgFAuIAAArIAAAFIAIgUQAIgVAEgHIAEgGIAGgRQAGgQAYgsQATgiAWgzQAOgjAIgPQAQgZATgNQAjgXA6ALQAhAGAVAPQATAPALAWQAHAPABAPIAFgDQAcgXAOgFQARgIATAAIAEgDQAegTAxgEQAegCAHgCQAOgEAZgLQAegIAfAJQAfAKATAZQASAZAAAhQAAAhgTAYQgaAhg8AOQgWAGhHANQgTACgLAAQgPANgUAOQgIAEgDAGQgEAGgCAMQgFAhgVAZQgXAbgeAIQgXAGgYgGQgYgGgRgQQgSgQgIgWQgHgTABgTIgYAvIgLAUQgDANgIASIgiBWQgGAJgHAIQgBAXgMAUIgNATQgJAMgEAJIgGAWIgNAgIgXA5IgJASQABAQgEARQgGAbgRASQgRATgaAKQgYAJgagEQgZgFgVgSQgUgSgHgZIgBgCQgMAYgZAPQgUAOgbACQgaADgWgLQgXgJgPgWQgQgVgCgYQgBgMABgQQADgSAAgJQABgNgEgpQgCgVACgPIg/ALQgZAEgWgJQgRAVgUAMIgGADIgBAIQgCAJgBASQgFAhgNAeQgfBDgyAQQgPAFgQAAQgIAIgKAGQgaARgdAAQgfgBgvgZQgegSgNgNQgIgJgGgKIgGgEQgJgHgPgPQgQgQgIgGIgQgKIgeA5QgTAqgGAIQgQAWgbALQgbALgagFQgcgGgUgUQgVgUgGgcQgJgoAZg3QAhg5AMggQAOg4AMgbQAHgQAggpQAXgeAUgQIgFgHQgOgWgCgZQgBgMACgNQgJAVgRAfQgFAKgUAvQgPAigNAVQgTAfgYARQgDAMgGAPIgVArQgPAggMAyIgUBVQgJAggKARQgOAXgcAMQgTAJgTAAIgPgCgAjsFRQgRAKgVAGIgPAEQAWATAKAOQAKAMAGAMIAFACIABgBQAEgMAAgQQABgVADgKQAGgYAQgTIABgBIgFAAQgLAPgQAKgAn8A2IgDAQIAJgNIADgEIgJABg");
	var mask_4_graphics_669 = new cjs.Graphics().p("AtGKIQgcgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQAEgPAHgNIAbglIAHgNQgYAHgOAAIgDAAIgNAIQgLAGgbAGQgaAHgMAFIglAXQghAUgfADQgmAFgdgRQgWgMgNgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAZgMAtgMQAfgIAWABIAAgBQAPgKA6gTQASgHAogTQAmgSAUgHIAkgMQAegKAIgCQAJgCAJABIALgEQAFgCAygHQAUgDAcgHIAvgNQAagEAGAAQAJgBAIABQAPgIATgEQAPgDAdAAQAYAAAwgIQAsgDAcAMQAcAMARAdQAPAbgDAfQgEAegWAYQgJAJgKAHQAnAGAZAjQALATAFAUQAFAOACANIACgCIATgVQANgPAPgiQAPgiAMgOQARgTAYgIQAKgNAOgJQAmgWArALQAmALAjAjIAFAGIAEgQQAIgcAZgRQAXgTAcgCQAdgBAaAPQAbAQALAZQALAYAAAqQAAAWgFAuIAAArIAAAFIAIgUQAIgVAEgHIAEgGIAGgRQAGgQAYgsQATgiAWgzQAOgjAIgPQAQgZATgNQAjgXA6ALQAhAGAVAPQATAPALAWQAHAPABAPIAFgDQAcgXAOgFQARgIATAAIAEgDQAegTAxgEQAegCAHgCQAOgEAZgLQAegIAfAJQAfAKATAZQASAZAAAhQAAAhgTAYQgaAhg8AOQgWAGhHANQgTACgLAAQgPANgUAOQgIAEgDAGQgEAGgCAMQgFAhgVAZIgMAMQADAUgDAWQgEAmgaA4IgNAhIgJAjQgEAXgGANQgMAXgXAQQgXAPgbABQgaABgYgPQgYgOgMgYQgPgbADgjQABgYALgnQAGgWAJgTQAOgZAEgOQAEgJAEgVQAEgUADgKQAIgUARgQQgBgIAAgJIgYAvIgLAUQgDANgIASIgiBWQgGAJgHAIQgBAXgMAUIgNATQgJAMgEAJIgGAWIgNAgIgXA5IgJASQABAQgEARQgGAbgRASQgRATgaAKQgYAJgagEQgZgFgVgSQgUgSgHgZIgBgCQgMAYgZAPQgUAOgbACQgaADgWgLQgXgJgPgWQgQgVgCgYQgBgMABgQQADgSAAgJQABgNgEgpQgCgVACgPIg/ALQgZAEgWgJQgRAVgUAMIgGADIgBAIQgCAJgBASQgFAhgNAeQgfBDgyAQQgPAFgQAAQgIAIgKAGQgaARgdAAQgfgBgvgZQgegSgNgNQgIgJgGgKIgGgEQgJgHgPgPQgQgQgIgGIgQgKIgeA5QgTAqgGAIQgQAWgbALQgbALgagFQgcgGgUgUQgVgUgGgcQgJgoAZg3QAhg5AMggQAOg4AMgbQAHgQAggpQAXgeAUgQIgFgHQgOgWgCgZQgBgMACgNQgJAVgRAfQgFAKgUAvQgPAigNAVQgTAfgYARQgDAMgGAPIgVArQgPAggMAyIgUBVQgJAggKARQgOAXgcAMQgTAJgTAAIgPgCgAjsFRQgRAKgVAGIgPAEQAWATAKAOQAKAMAGAMIAFACIABgBQAEgMAAgQQABgVADgKQAGgYAQgTIABgBIgFAAQgLAPgQAKgAn8A2IgDAQIAJgNIADgEIgJABg");
	var mask_4_graphics_670 = new cjs.Graphics().p("AtGKIQgcgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQAEgPAHgNIAbglIAHgNQgYAHgOAAIgDAAIgNAIQgLAGgbAGQgaAHgMAFIglAXQghAUgfADQgmAFgdgRQgWgMgNgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAZgMAtgMQAfgIAWABIAAgBQAPgKA6gTQASgHAogTQAmgSAUgHIAkgMQAegKAIgCQAJgCAJABIALgEQAFgCAygHQAUgDAcgHIAvgNQAagEAGAAQAJgBAIABQAPgIATgEQAPgDAdAAQAYAAAwgIQAsgDAcAMQAcAMARAdQAPAbgDAfQgEAegWAYQgJAJgKAHQAnAGAZAjQALATAFAUQAFAOACANIACgCIATgVQANgPAPgiQAPgiAMgOQARgTAYgIQAKgNAOgJQAmgWArALQAmALAjAjIAFAGIAEgQQAIgcAZgRQAXgTAcgCQAdgBAaAPQAbAQALAZQALAYAAAqQAAAWgFAuIAAArIAAAFIAIgUQAIgVAEgHIAEgGIAGgRQAGgQAYgsQATgiAWgzQAOgjAIgPQAQgZATgNQAjgXA6ALQAhAGAVAPQATAPALAWQAHAPABAPIAFgDQAcgXAOgFQARgIATAAIAEgDQAegTAxgEQAegCAHgCQAOgEAZgLQAegIAfAJQAfAKATAZQASAZAAAhQAAAhgTAYQgaAhg8AOQgWAGhHANQgTACgLAAQgPANgUAOQgIAEgDAGQgEAGgCAMQgFAhgVAZIgMAMQADAUgDAWQgCAYgMAgIAcgEQAqgEAZAIQAcAJASAaQATAZAAAeQAAAegSAaQgRAagdAKQgPAGgiAEQgiADgQAHQgPAGgcATQgbAUgQAGQgZAJgagFQgagFgUgSQgTgRgIgaQgHgVADgUIgCgFQgPgbADgjQABgYALgnQAGgWAJgTQAOgZAEgOQAEgJAEgVQAEgUADgKQAIgUARgQQgBgIAAgJIgYAvIgLAUQgDANgIASIgiBWQgGAJgHAIQgBAXgMAUIgNATQgJAMgEAJIgGAWIgNAgIgXA5IgJASQABAQgEARQgGAbgRASQgRATgaAKQgYAJgagEQgZgFgVgSQgUgSgHgZIgBgCQgMAYgZAPQgUAOgbACQgaADgWgLQgXgJgPgWQgQgVgCgYQgBgMABgQQADgSAAgJQABgNgEgpQgCgVACgPIg/ALQgZAEgWgJQgRAVgUAMIgGADIgBAIQgCAJgBASQgFAhgNAeQgfBDgyAQQgPAFgQAAQgIAIgKAGQgaARgdAAQgfgBgvgZQgegSgNgNQgIgJgGgKIgGgEQgJgHgPgPQgQgQgIgGIgQgKIgeA5QgTAqgGAIQgQAWgbALQgbALgagFQgcgGgUgUQgVgUgGgcQgJgoAZg3QAhg5AMggQAOg4AMgbQAHgQAggpQAXgeAUgQIgFgHQgOgWgCgZQgBgMACgNQgJAVgRAfQgFAKgUAvQgPAigNAVQgTAfgYARQgDAMgGAPIgVArQgPAggMAyIgUBVQgJAggKARQgOAXgcAMQgTAJgTAAIgPgCgAjsFRQgRAKgVAGIgPAEQAWATAKAOQAKAMAGAMIAFACIABgBQAEgMAAgQQABgVADgKQAGgYAQgTIABgBIgFAAQgLAPgQAKgAn8A2IgDAQIAJgNIADgEIgJABg");
	var mask_4_graphics_671 = new cjs.Graphics().p("AtGKIQgcgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQAEgPAHgNIAbglIAHgNQgYAHgOAAIgDAAIgNAIQgLAGgbAGQgaAHgMAFIglAXQghAUgfADQgmAFgdgRQgWgMgNgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAZgMAtgMQAfgIAWABIAAgBQAPgKA6gTQASgHAogTQAmgSAUgHIAkgMQAegKAIgCQAJgCAJABIALgEQAFgCAygHQAUgDAcgHIAvgNQAagEAGAAQAJgBAIABQAPgIATgEQAPgDAdAAQAYAAAwgIQAsgDAcAMQAcAMARAdQAPAbgDAfQgEAegWAYQgJAJgKAHQAnAGAZAjQALATAFAUQAFAOACANIACgCIATgVQANgPAPgiQAPgiAMgOQARgTAYgIQAKgNAOgJQAmgWArALQAmALAjAjIAFAGIAEgQQAIgcAZgRQAXgTAcgCQAdgBAaAPQAbAQALAZQALAYAAAqQAAAWgFAuIAAArIAAAFIAIgUQAIgVAEgHIAEgGIAGgRQAGgQAYgsQATgiAWgzQAOgjAIgPQAQgZATgNQAjgXA6ALQAhAGAVAPQATAPALAWQAHAPABAPIAFgDQAcgXAOgFQARgIATAAIAEgDQAegTAxgEQAegCAHgCQAOgEAZgLQAegIAfAJQAfAKATAZQASAZAAAhQAAAhgTAYQgaAhg8AOQgQAFgsAHQAdAKASAcQAXAlgKAqQgDAPgIANQgUAhg3APIgtAKQgaAHgRAJIgMAIQAhgCAVAHQAcAJASAaQATAZAAAeQAAAegSAaQgRAagdAKQgPAGgiAEQgiADgQAHQgPAGgcATQgbAUgQAGQgZAJgagFQgagFgUgSQgTgRgIgaQgHgVADgUIgCgFQgPgbADgjQABgYALgnQAGgWAJgTQAOgZAEgOQAEgJAEgVQAEgUADgKQAIgUARgQQgBgIAAgJIgYAvIgLAUQgDANgIASIgiBWQgGAJgHAIQgBAXgMAUIgNATQgJAMgEAJIgGAWIgNAgIgXA5IgJASQABAQgEARQgGAbgRASQgRATgaAKQgYAJgagEQgZgFgVgSQgUgSgHgZIgBgCQgMAYgZAPQgUAOgbACQgaADgWgLQgXgJgPgWQgQgVgCgYQgBgMABgQQADgSAAgJQABgNgEgpQgCgVACgPIg/ALQgZAEgWgJQgRAVgUAMIgGADIgBAIQgCAJgBASQgFAhgNAeQgfBDgyAQQgPAFgQAAQgIAIgKAGQgaARgdAAQgfgBgvgZQgegSgNgNQgIgJgGgKIgGgEQgJgHgPgPQgQgQgIgGIgQgKIgeA5QgTAqgGAIQgQAWgbALQgbALgagFQgcgGgUgUQgVgUgGgcQgJgoAZg3QAhg5AMggQAOg4AMgbQAHgQAggpQAXgeAUgQIgFgHQgOgWgCgZQgBgMACgNQgJAVgRAfQgFAKgUAvQgPAigNAVQgTAfgYARQgDAMgGAPIgVArQgPAggMAyIgUBVQgJAggKARQgOAXgcAMQgTAJgTAAIgPgCgAjsFRQgRAKgVAGIgPAEQAWATAKAOQAKAMAGAMIAFACIABgBQAEgMAAgQQABgVADgKQAGgYAQgTIABgBIgFAAQgLAPgQAKgAn8A2IgDAQIAJgNIADgEIgJABg");
	var mask_4_graphics_672 = new cjs.Graphics().p("Au7KIQgcgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQAEgPAHgNIAbglIAHgNQgYAHgOAAIgDAAIgNAIQgLAGgbAGQgZAHgNAFIglAXQghAUgfADQgmAFgcgRQgXgMgNgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAagMAsgMQAfgIAWABIAAgBQAPgKA6gTQASgHAogTQAmgSAUgHIAkgMQAegKAIgCQAJgCAKABIAKgEQAFgCAygHQAVgDAbgHIAvgNQAagEAGAAQAJgBAJABQAOgIATgEQAPgDAdAAQAYAAAwgIQAsgDAcAMQAcAMARAdQAPAbgDAfQgEAegWAYQgIAJgLAHQAnAGAZAjQALATAFAUQAFAOACANIACgCIATgVQANgPAQgiQAPgiAMgOQARgTAYgIQAKgNAOgJQAlgWAsALQAlALAjAjIAFAGIAEgQQAJgcAYgRQAXgTAcgCQAdgBAaAPQAbAQALAZQAMAYAAAqQgBAWgFAuIAAArIAAAFIAIgUQAIgVAFgHIAEgGIAFgRQAGgQAYgsQATgiAWgzQAOgjAIgPQAQgZATgNQAjgXA6ALQAhAGAVAPQATAPALAWQAHAPABAPIAFgDQAcgXAOgFQARgIATAAIAEgDQAegTAxgEQAegCAHgCQAOgEAZgLQAegIAfAJQAfAKATAZQALAQAEASIAkguIAPgWQAJgNAIgIQAjgiAwAGQAyAGAYApQALAVABAXQABAYgKAUQgGAOgRAUIgoA1QgRAVgEALIgFAhQgEAXgPAVQgPATgWAKQguAVgtgaQgsgbgFgyQAAgVACgJIAEgVQgVAMgeAGQgQAFgsAHQAdAKASAcQAXAlgKAqQgDAPgHANQgVAhg3APIgsAKQgbAHgRAJIgMAIQAhgCAVAHQAcAJATAaQASAZAAAeQAAAegSAaQgRAagcAKQgQAGgiAEQgiADgQAHQgPAGgcATQgbAUgQAGQgZAJgagFQgagFgUgSQgTgRgIgaQgHgVADgUIgCgFQgPgbADgjQABgYALgnQAGgWAJgTQAOgZAEgOQAEgJAEgVQAEgUADgKQAIgUARgQQgBgIAAgJIgYAvIgLAUQgDANgIASIgiBWQgGAJgHAIQgBAXgMAUIgNATQgJAMgEAJIgGAWIgNAgIgXA5IgJASQABAQgEARQgGAbgRASQgRATgaAKQgYAJgagEQgZgFgVgSQgUgSgHgZIAAgCQgNAYgZAPQgUAOgbACQgaADgWgLQgXgJgPgWQgQgVgCgYQAAgMAAgQQADgSAAgJQABgNgEgpQgBgVABgPIg+ALQgZAEgWgJQgSAVgUAMIgGADIgBAIQgCAJgBASQgFAhgNAeQgfBDgyAQQgPAFgQAAQgIAIgKAGQgaARgdAAQgfgBgvgZQgegSgNgNQgIgJgGgKIgGgEQgJgHgPgPQgQgQgIgGIgQgKIgeA5QgTAqgGAIQgQAWgaALQgcALgagFQgcgGgUgUQgVgUgGgcQgJgoAZg3QAhg5AMggQAOg4AMgbQAHgQAggpQAXgeAUgQIgFgHQgOgWgCgZQgBgMACgNQgJAVgRAfQgFAKgTAvQgPAigOAVQgTAfgXARQgEAMgGAPIgVArQgPAggMAyIgUBVQgJAggKARQgOAXgcAMQgTAJgTAAIgPgCgAlhFRQgRAKgVAGIgPAEQAWATAKAOQAKAMAGAMIAFACIABgBQAEgMAAgQQABgVADgKQAGgYAQgTIABgBIgFAAQgLAPgQAKgApxA2IgDAQIAJgNIADgEIgJABg");
	var mask_4_graphics_673 = new cjs.Graphics().p("Au7KIQgcgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQAEgPAHgNIAbglIAHgNQgYAHgOAAIgDAAIgNAIQgLAGgbAGQgZAHgNAFIglAXQghAUgfADQgmAFgcgRQgXgMgNgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAagMAsgMQAfgIAWABIAAgBQAPgKA6gTQASgHAogTQAmgSAUgHIAkgMQAegKAIgCQAJgCAKABIAKgEQAFgCAygHQAVgDAbgHIAvgNQAagEAGAAQAJgBAJABQAOgIATgEQAPgDAdAAQAYAAAwgIQAsgDAcAMQAcAMARAdQAPAbgDAfQgEAegWAYQgIAJgLAHQAnAGAZAjQALATAFAUQAFAOACANIACgCIATgVQANgPAQgiQAPgiAMgOQARgTAYgIQAKgNAOgJQAlgWAsALQAlALAjAjIAFAGIAEgQQAJgcAYgRQAXgTAcgCQAdgBAaAPQAbAQALAZQAMAYAAAqQgBAWgFAuIAAArIAAAFIAIgUQAIgVAFgHIAEgGIAFgRQAGgQAYgsQATgiAWgzQAOgjAIgPQAQgZATgNQAjgXA6ALQAhAGAVAPQATAPALAWQAHAPABAPIAFgDQAcgXAOgFQARgIATAAIAEgDQAegTAxgEQAegCAHgCQAOgEAZgLQAegIAfAJQAfAKATAZQALAQAEASIAkguIAPgWQAJgNAIgIQAjgiAwAGQAyAGAYApQALAVABAXQABAYgKAUQgGAOgRAUIgoA1QgRAVgEALIgFAhQgEAXgPAVIgIAIIgBAJQgNBbg1BOQgNAVgRAPQgQAOgXAEQgXAFgVgFQgugNgTgsQgTgrAXgqIAPgYQgVAeg1APIgsAKQgbAHgRAJIgMAIQAhgCAVAHQAcAJATAaQASAZAAAeQAAAegSAaQgRAagcAKQgQAGgiAEQgiADgQAHQgPAGgcATQgbAUgQAGQgZAJgagFQgagFgUgSQgTgRgIgaQgHgVADgUIgCgFQgPgbADgjQABgYALgnQAGgWAJgTQAOgZAEgOQAEgJAEgVQAEgUADgKQAIgUARgQQgBgIAAgJIgYAvIgLAUQgDANgIASIgiBWQgGAJgHAIQgBAXgMAUIgNATQgJAMgEAJIgGAWIgNAgIgXA5IgJASQABAQgEARQgGAbgRASQgRATgaAKQgYAJgagEQgZgFgVgSQgUgSgHgZIAAgCQgNAYgZAPQgUAOgbACQgaADgWgLQgXgJgPgWQgQgVgCgYQAAgMAAgQQADgSAAgJQABgNgEgpQgBgVABgPIg+ALQgZAEgWgJQgSAVgUAMIgGADIgBAIQgCAJgBASQgFAhgNAeQgfBDgyAQQgPAFgQAAQgIAIgKAGQgaARgdAAQgfgBgvgZQgegSgNgNQgIgJgGgKIgGgEQgJgHgPgPQgQgQgIgGIgQgKIgeA5QgTAqgGAIQgQAWgaALQgcALgagFQgcgGgUgUQgVgUgGgcQgJgoAZg3QAhg5AMggQAOg4AMgbQAHgQAggpQAXgeAUgQIgFgHQgOgWgCgZQgBgMACgNQgJAVgRAfQgFAKgTAvQgPAigOAVQgTAfgXARQgEAMgGAPIgVArQgPAggMAyIgUBVQgJAggKARQgOAXgcAMQgTAJgTAAIgPgCgAlhFRQgRAKgVAGIgPAEQAWATAKAOQAKAMAGAMIAFACIABgBQAEgMAAgQQABgVADgKQAGgYAQgTIABgBIgFAAQgLAPgQAKgAOqAGQgQAFgsAHQAdAKASAcQAXAlgKAqQgDAPgHANIABgDQAMgSAGgTQAHgSAEgYQAGgZAEgMQAGgOAKgLIABgKIAEgVQgVAMgeAGgApxA2IgDAQIAJgNIADgEIgJABg");
	var mask_4_graphics_674 = new cjs.Graphics().p("Au7KIQgcgDgVgUQgWgUgHgaQgJghAQg9QAXhdAVg1IAXg4QARgiAHgKQAHgJAIgHQAEgPAHgNIAbglIAHgNQgYAHgOAAIgDAAIgNAIQgLAGgbAGQgZAHgNAFIglAXQghAUgfADQgmAFgcgRQgXgMgNgWQgNgWgBgZQgBgYAMgXQAMgXAVgOIAugVQAagRANgHQAagMAsgMQAfgIAWABIAAgBQAPgKA6gTQASgHAogTQAmgSAUgHIAkgMQAegKAIgCQAJgCAKABIAKgEQAFgCAygHQAVgDAbgHIAvgNQAagEAGAAQAJgBAJABQAOgIATgEQAPgDAdAAQAYAAAwgIQAsgDAcAMQAcAMARAdQAPAbgDAfQgEAegWAYQgIAJgLAHQAnAGAZAjQALATAFAUQAFAOACANIACgCIATgVQANgPAQgiQAPgiAMgOQARgTAYgIQAKgNAOgJQAlgWAsALQAlALAjAjIAFAGIAEgQQAJgcAYgRQAXgTAcgCQAdgBAaAPQAbAQALAZQAMAYAAAqQgBAWgFAuIAAArIAAAFIAIgUQAIgVAFgHIAEgGIAFgRQAGgQAYgsQATgiAWgzQAOgjAIgPQAQgZATgNQAjgXA6ALQAhAGAVAPQATAPALAWQAHAPABAPIAFgDQAcgXAOgFQARgIATAAIAEgDQAegTAxgEQAegCAHgCQAOgEAZgLQAegIAfAJQAfAKATAZQALAQAEASIAkguIAPgWQAJgNAIgIQAjgiAwAGQAyAGAYApQALAVABAXQABAYgKAUQgGAOgRAUIgoA1QgRAVgEALIgFAhQgEAXgPAVIgIAIIgBAJQgNBbg1BOIgIANIgBAHQgCATADAMIAFASQAHAbgIAbQgIAcgTATQgVATgbAGQgcAHgagJQgagJgTgVQgTgVgFgcQgCgOAAgPQgBgkABglQAAgVADgRQAFgVAMgQQADgNAHgMIAPgYQgVAeg1APIgsAKQgbAHgRAJIgMAIQAhgCAVAHQAcAJATAaQASAZAAAeQAAAegSAaQgRAagcAKQgQAGgiAEQgiADgQAHQgPAGgcATQgbAUgQAGQgZAJgagFQgagFgUgSQgTgRgIgaQgHgVADgUIgCgFQgPgbADgjQABgYALgnQAGgWAJgTQAOgZAEgOQAEgJAEgVQAEgUADgKQAIgUARgQQgBgIAAgJIgYAvIgLAUQgDANgIASIgiBWQgGAJgHAIQgBAXgMAUIgNATQgJAMgEAJIgGAWIgNAgIgXA5IgJASQABAQgEARQgGAbgRASQgRATgaAKQgYAJgagEQgZgFgVgSQgUgSgHgZIAAgCQgNAYgZAPQgUAOgbACQgaADgWgLQgXgJgPgWQgQgVgCgYQAAgMAAgQQADgSAAgJQABgNgEgpQgBgVABgPIg+ALQgZAEgWgJQgSAVgUAMIgGADIgBAIQgCAJgBASQgFAhgNAeQgfBDgyAQQgPAFgQAAQgIAIgKAGQgaARgdAAQgfgBgvgZQgegSgNgNQgIgJgGgKIgGgEQgJgHgPgPQgQgQgIgGIgQgKIgeA5QgTAqgGAIQgQAWgaALQgcALgagFQgcgGgUgUQgVgUgGgcQgJgoAZg3QAhg5AMggQAOg4AMgbQAHgQAggpQAXgeAUgQIgFgHQgOgWgCgZQgBgMACgNQgJAVgRAfQgFAKgTAvQgPAigOAVQgTAfgXARQgEAMgGAPIgVArQgPAggMAyIgUBVQgJAggKARQgOAXgcAMQgTAJgTAAIgPgCgAlhFRQgRAKgVAGIgPAEQAWATAKAOQAKAMAGAMIAFACIABgBQAEgMAAgQQABgVADgKQAGgYAQgTIABgBIgFAAQgLAPgQAKgAOqAGQgQAFgsAHQAdAKASAcQAXAlgKAqQgDAPgHANIABgDQAMgSAGgTQAHgSAEgYQAGgZAEgMQAGgOAKgLIABgKIAEgVQgVAMgeAGgApxA2IgDAQIAJgNIADgEIgJABg");
	var mask_4_graphics_675 = new cjs.Graphics().p("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");
	var mask_4_graphics_676 = new cjs.Graphics().p("AJfKLQgbgTgLghQgJghAMgeQAFgMAQgZQAQgXAPgMQAUgPA7gUIARgFIgJABQgjADgQAGQgPAHgbATQgbATgQAHQgZAIgagEQgbgFgTgSQgUgSgIgZQgGgVADgVIgDgEQgOgbADgjQABgZALgmQAFgWAJgTQAOgaAFgNQADgJAFgVQADgUAEgKQAIgVAQgPQgBgIABgJIgYAvIgMAUQgDAMgHATIgjBWQgFAJgHAIQgCAXgLAUIgOATQgIAMgEAJIgGAWIgNAgIgXA5IgKASQABAQgEARQgGAagRATQgQATgaAKQgZAJgZgFQgagEgUgTQgUgRgIgZIAAgDQgMAYgZAQQgVAOgaACQgbADgWgLQgWgKgPgVQgQgVgBgZQgBgLABgQQACgTAAgIQABgNgDgpQgCgVABgPIg/ALQgYAEgWgJQgSAVgVALIgFAEIgCAIQgBAJgBASQgGAhgNAeQgfBDgxAQQgQAFgQAAQgIAIgKAGQgZARgdAAQgfgBgwgZQgegSgMgNQgJgJgFgKIgGgEQgJgHgPgPQgQgQgIgGIgRgKIgeA4QgSArgHAIQgPAWgbALQgbALgbgFQgbgHgUgTQgWgUgGgcQgJgoAag3QAhg5ALggQAOg5ANgaQAHgQAfgpQAXgeAVgQIgGgHQgOgWgCgZQAAgNACgMQgJAVgRAfQgGAKgTAvQgPAigNAUQgUAfgXARQgDANgGAOIgVAsQgPAggNAyIgTBUQgJAhgLARQgOAXgbAMQgbAMgbgFQgbgDgVgVQgWgTgIgbQgIggAQg9QAWhdAWg2IAXg3QAQgjAHgJQAHgJAJgHQADgPAIgNIAaglIAHgNQgYAGgOAAIgCAAIgNAIQgMAGgaAHQgaAHgMAFIglAXQghATggAEQgmAEgcgQQgWgMgNgWQgNgWgBgZQgBgYALgXQANgXAVgOIAugWQAZgPANgHQAagOAsgLQAggIAWAAIAAAAQAPgLA5gSQATgHAogTQAmgSAUgHIAkgMQAegKAIgCQAJgCAJAAIAKgEQAFgBAzgHQAUgDAbgHIAvgNQAbgFAGAAQAJAAAIABQAPgJASgDQAPgDAdAAQAZgBAwgHQAsgDAcAMQAbAMARAdQAQAbgEAfQgDAegWAYQgJAJgKAHQAnAGAZAjQAKASAGAVQAEAOACANIADgDIATgVQAMgOAQgiQAPgjANgOQAQgTAZgIQAKgNAOgIQAmgWAqALQAlALAjAjIAGAGIADgQQAJgcAZgRQAXgTAcgCQAcgCAbAPQAaAQAMAaQALAYAAArQgBAVgEAuIAAAqIgBAGIAJgVQAIgUAEgHIAEgGIAGgRQAGgQAYgsQASgiAWgzQAPgjAHgPQAQgZAUgOQAigXA6AMQAiAGAUAPQAUAPAKAWQAHAPACAPIAEgDQAdgXAOgGQARgHASAAIAFgDQAegUAxgDQAegCAHgDQANgDAagLQAegJAfAKQAfAKASAZQAMAPAEATIAjguIAPgWQAKgNAIgIQAigiAxAGQAxAGAYApQAMAVABAWQAAAYgJAVQgGAOgRAUIgpA1QgRAWgDALIgFAgQgEAXgQAUIgIAJIgBAJQgJBCgeA7ICCgXQAggDAPACQAhAEAXAZQAYAZADAhQADAggSAdQgTAdgfAMQgPAGg2AGQgcACg9ANQgkAHgRAFIgZAHQgKADgJACQgUARgZAGQgdAHgZgJIgGgCQALAYgDAcQgFAggUAWQgSASgmARIgyARQgRAFgKAGIgWAWQgZAWgjABIgIABQgdAAgXgQgANMGQQgGgLgCgOQgDgOAAgPQgBgkABglQAAgVAEgRQAFgVAMgRQADgMAGgNIAPgXQgUAeg2APIgsAKQgaAHgRAJIgNAIQAigCAUAGQAdAKASAaQATAZAAAeQAAAegSAaQgHAKgKAIIAFgBQAZgFAZAJIAAAAgAmQFAQgSAKgUAGIgQAEQAXATAKAOQAKAMAGAMIAFACIABgCQADgLAAgQQACgVADgKQAGgYAQgTIABgBIgFAAQgLAPgQAKgAN7gKQgRAEgrAHQAdAKARAcQAXAlgJAqQgDAPgIANIACgDQALgSAGgTQAIgSAEgYQAFgZAFgMQAGgOAJgLIABgKIAEgVQgVALgdAIgAqgAlIgDAQIAIgNIADgEIgIABg");
	var mask_4_graphics_677 = new cjs.Graphics().p("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");
	var mask_4_graphics_678 = new cjs.Graphics().p("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");
	var mask_4_graphics_679 = new cjs.Graphics().p("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");
	var mask_4_graphics_680 = new cjs.Graphics().p("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");
	var mask_4_graphics_681 = new cjs.Graphics().p("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");
	var mask_4_graphics_682 = new cjs.Graphics().p("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");
	var mask_4_graphics_683 = new cjs.Graphics().p("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");
	var mask_4_graphics_684 = new cjs.Graphics().p("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");
	var mask_4_graphics_685 = new cjs.Graphics().p("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");
	var mask_4_graphics_686 = new cjs.Graphics().p("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");
	var mask_4_graphics_687 = new cjs.Graphics().p("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");
	var mask_4_graphics_688 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(641).to({graphics:mask_4_graphics_641,x:20.0702,y:44.0321}).wait(1).to({graphics:mask_4_graphics_642,x:34.1902,y:44.0321}).wait(1).to({graphics:mask_4_graphics_643,x:43.9,y:44.0321}).wait(1).to({graphics:mask_4_graphics_644,x:53.8294,y:44.0321}).wait(1).to({graphics:mask_4_graphics_645,x:53.8294,y:49.5246}).wait(1).to({graphics:mask_4_graphics_646,x:53.8294,y:64.9605}).wait(1).to({graphics:mask_4_graphics_647,x:53.8294,y:64.9605}).wait(1).to({graphics:mask_4_graphics_648,x:53.8294,y:64.9605}).wait(1).to({graphics:mask_4_graphics_649,x:56.0134,y:64.9605}).wait(1).to({graphics:mask_4_graphics_650,x:56.0134,y:64.9605}).wait(1).to({graphics:mask_4_graphics_651,x:56.0134,y:64.9605}).wait(1).to({graphics:mask_4_graphics_652,x:56.0134,y:64.9605}).wait(1).to({graphics:mask_4_graphics_653,x:56.0134,y:64.9605}).wait(1).to({graphics:mask_4_graphics_654,x:56.3387,y:64.9605}).wait(1).to({graphics:mask_4_graphics_655,x:61.5485,y:64.9605}).wait(1).to({graphics:mask_4_graphics_656,x:68.1365,y:64.9605}).wait(1).to({graphics:mask_4_graphics_657,x:73.0198,y:64.9605}).wait(1).to({graphics:mask_4_graphics_658,x:74.3617,y:64.9605}).wait(1).to({graphics:mask_4_graphics_659,x:74.3617,y:64.9605}).wait(1).to({graphics:mask_4_graphics_660,x:74.3617,y:64.9605}).wait(1).to({graphics:mask_4_graphics_661,x:80.5784,y:64.9605}).wait(1).to({graphics:mask_4_graphics_662,x:80.5784,y:64.9605}).wait(1).to({graphics:mask_4_graphics_663,x:82.8948,y:64.9605}).wait(1).to({graphics:mask_4_graphics_664,x:87.4189,y:64.9605}).wait(1).to({graphics:mask_4_graphics_665,x:90.452,y:64.9605}).wait(1).to({graphics:mask_4_graphics_666,x:97.4892,y:64.9605}).wait(1).to({graphics:mask_4_graphics_667,x:116.0071,y:64.9605}).wait(1).to({graphics:mask_4_graphics_668,x:116.0071,y:64.9605}).wait(1).to({graphics:mask_4_graphics_669,x:116.0071,y:64.9605}).wait(1).to({graphics:mask_4_graphics_670,x:116.0071,y:64.9605}).wait(1).to({graphics:mask_4_graphics_671,x:116.0071,y:64.9605}).wait(1).to({graphics:mask_4_graphics_672,x:127.7027,y:64.9605}).wait(1).to({graphics:mask_4_graphics_673,x:127.7027,y:64.9605}).wait(1).to({graphics:mask_4_graphics_674,x:127.7027,y:64.9605}).wait(1).to({graphics:mask_4_graphics_675,x:132.4482,y:64.9605}).wait(1).to({graphics:mask_4_graphics_676,x:132.4482,y:66.6806}).wait(1).to({graphics:mask_4_graphics_677,x:132.4482,y:76.8629}).wait(1).to({graphics:mask_4_graphics_678,x:132.4482,y:87.4925}).wait(1).to({graphics:mask_4_graphics_679,x:132.4482,y:87.4925}).wait(1).to({graphics:mask_4_graphics_680,x:132.4482,y:87.4925}).wait(1).to({graphics:mask_4_graphics_681,x:132.4482,y:87.4925}).wait(1).to({graphics:mask_4_graphics_682,x:132.4482,y:87.4925}).wait(1).to({graphics:mask_4_graphics_683,x:132.4482,y:87.4925}).wait(1).to({graphics:mask_4_graphics_684,x:132.4482,y:87.4925}).wait(1).to({graphics:mask_4_graphics_685,x:134.54,y:87.4925}).wait(1).to({graphics:mask_4_graphics_686,x:137.6072,y:87.4925}).wait(1).to({graphics:mask_4_graphics_687,x:141.1524,y:87.4925}).wait(1).to({graphics:mask_4_graphics_688,x:141.1524,y:87.4925}).wait(192));

	// travelOn
	this.instance_22 = new lib.travelOn_1();
	this.instance_22.setTransform(150,125);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(641).to({_off:false},0).wait(239));

	// t1c
	this.instance_23 = new lib.t1c_1();
	this.instance_23.setTransform(300,250,2,2);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(29).to({_off:false},0).to({alpha:1},15).wait(75).to({x:-150},40,cjs.Ease.quadInOut).to({_off:true},1).wait(720));

	// t1b
	this.instance_24 = new lib.t1b_1();
	this.instance_24.setTransform(300,250,2,2);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(29).to({_off:false},0).to({alpha:1},15).wait(75).to({x:-150},40,cjs.Ease.quadInOut).to({_off:true},1).wait(720));

	// t1a
	this.instance_25 = new lib.t1a_1();
	this.instance_25.setTransform(300,250,2,2);
	this.instance_25.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({alpha:1},14).wait(105).to({x:-150},40,cjs.Ease.quadInOut).to({_off:true},1).wait(720));

	// bckg
	this.instance_26 = new lib.background();
	this.instance_26.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(880));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(149,299,1127.2,602);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(149,299,1126.8,602), new cjs.Rectangle(147.8,299,1126.8,602), new cjs.Rectangle(145,299,1127.5,602), new cjs.Rectangle(141,299,1128.6,602), new cjs.Rectangle(136,299,1129.9,602), new cjs.Rectangle(129.8,299,1131.6,602), new cjs.Rectangle(122.5,299,1133.5,602), new cjs.Rectangle(114,299,1135.8,602), new cjs.Rectangle(104.5,299,1138.3,602), new cjs.Rectangle(93.8,299,1141.2,602), new cjs.Rectangle(82,299,1144.4,602), new cjs.Rectangle(69,299,1147.8,602), new cjs.Rectangle(55,299,1151.6,602), new cjs.Rectangle(39.8,299,1155.6,602), new cjs.Rectangle(23.5,299,1160,602), new cjs.Rectangle(6,299,1164.7,602), new cjs.Rectangle(-12.6,299,1169.6,602), new cjs.Rectangle(-32.2,299,1174.9,602), new cjs.Rectangle(-53.1,299,1180.4,602), new cjs.Rectangle(-75,299,1186.3,602), new cjs.Rectangle(-96.9,299,1192.2,602), new cjs.Rectangle(-117.7,299,1197.7,602), new cjs.Rectangle(-137.4,299,1203,602), new cjs.Rectangle(-156,299,1207.9,602), new cjs.Rectangle(-173.4,299,1212.6,602), new cjs.Rectangle(-189.7,299,1217,602), new cjs.Rectangle(-204.9,299,1221,602), new cjs.Rectangle(-219,299,1224.8,602), new cjs.Rectangle(-231.9,299,1228.3,602), new cjs.Rectangle(-243.7,299,1231.4,602), new cjs.Rectangle(-254.4,299,1234.3,602), new cjs.Rectangle(-264,299,1236.8,602), new cjs.Rectangle(-272.4,299,1239.1,602), new cjs.Rectangle(-279.7,299,1241,602), new cjs.Rectangle(-285.9,299,1242.7,602), new cjs.Rectangle(-291,299,1244,602), new cjs.Rectangle(-294.9,299,1245.1,602), new cjs.Rectangle(-297.7,299,1245.8,602), new cjs.Rectangle(-299.4,299,1246.3,602), new cjs.Rectangle(-300,299,1246.4,602), rect=new cjs.Rectangle(94.2,299,852.2,602), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(93.9,299,852.2,602), new cjs.Rectangle(92.9,299,852.2,602), new cjs.Rectangle(91.2,299,852.2,602), new cjs.Rectangle(88.8,299,852.2,602), new cjs.Rectangle(85.7,299,852.2,602), new cjs.Rectangle(82,299,852.2,602), new cjs.Rectangle(77.6,299,852.2,602), new cjs.Rectangle(72.5,299,852.2,602), new cjs.Rectangle(66.8,299,852.2,602), new cjs.Rectangle(60.3,299,852.2,602), new cjs.Rectangle(53.2,299,852.2,602), new cjs.Rectangle(45.4,299,852.2,602), new cjs.Rectangle(36.9,299,852.2,602), new cjs.Rectangle(27.8,299,852.2,602), new cjs.Rectangle(17.9,299,852.2,602), new cjs.Rectangle(6,299,853.6,602), new cjs.Rectangle(-12.6,299,861,602), new cjs.Rectangle(-32.2,299,868.8,602), new cjs.Rectangle(-53.1,299,877.1,602), new cjs.Rectangle(-75,299,885.8,602), new cjs.Rectangle(-96.9,299,894.5,602), new cjs.Rectangle(-117.7,299,902.8,602), new cjs.Rectangle(-137.4,299,910.6,602), new cjs.Rectangle(-156,299,918,602), new cjs.Rectangle(-173.4,299,924.9,602), new cjs.Rectangle(-189.7,299,931.4,602), new cjs.Rectangle(-204.9,299,937.4,602), new cjs.Rectangle(-219,299,943,602), new cjs.Rectangle(-231.9,299,948.2,602), new cjs.Rectangle(-243.7,299,952.8,602), new cjs.Rectangle(-254.4,299,957.1,602), new cjs.Rectangle(-264,299,960.9,602), new cjs.Rectangle(-272.4,299,964.2,602), new cjs.Rectangle(-279.7,299,967.1,602), new cjs.Rectangle(-285.9,299,969.6,602), new cjs.Rectangle(-291,299,971.6,602), new cjs.Rectangle(-294.9,299,973.2,602), new cjs.Rectangle(-297.7,299,974.3,602), new cjs.Rectangle(-299.4,299,975,602), new cjs.Rectangle(-300,299,975.2,602), rect=new cjs.Rectangle(-177,299,852.2,602), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-177,299,927.1,602), new cjs.Rectangle(-177.4,299,927.1,602), new cjs.Rectangle(-178.4,299,926.9,602), new cjs.Rectangle(-180,299,926.7,602), new cjs.Rectangle(-182.4,299,926.5,602), new cjs.Rectangle(-185.4,299,926.1,602), new cjs.Rectangle(-189.1,299,925.7,602), new cjs.Rectangle(-193.5,299,925.2,602), new cjs.Rectangle(-198.5,299,924.6,602), new cjs.Rectangle(-204.3,299,924,602), new cjs.Rectangle(-210.7,299,923.2,602), new cjs.Rectangle(-217.7,299,922.4,602), new cjs.Rectangle(-225.4,299,921.5,602), new cjs.Rectangle(-233.8,299,920.5,602), new cjs.Rectangle(-242.9,299,919.5,602), new cjs.Rectangle(-252.7,299,918.4,602), new cjs.Rectangle(-263.1,299,917.2,602), new cjs.Rectangle(-274.2,299,915.9,602), new cjs.Rectangle(-286,299,914.5,602), new cjs.Rectangle(-298.4,299,913.1,602), new cjs.Rectangle(-311.5,299,911.6,602), new cjs.Rectangle(-324.6,299,910.1,602), new cjs.Rectangle(-337.1,299,908.6,602), new cjs.Rectangle(-348.8,299,907.3,602), new cjs.Rectangle(-359.9,299,906,602), new cjs.Rectangle(-370.4,299,904.8,602), new cjs.Rectangle(-380.1,299,903.7,602), new cjs.Rectangle(-389.2,299,902.6,602), new cjs.Rectangle(-397.6,299,901.7,602), new cjs.Rectangle(-405.3,299,900.8,602), new cjs.Rectangle(-412.4,299,899.9,602), new cjs.Rectangle(-418.8,299,899.2,602), new cjs.Rectangle(-424.5,299,898.6,602), new cjs.Rectangle(-429.5,299,898,602), new cjs.Rectangle(-433.9,299,897.5,602), new cjs.Rectangle(-437.6,299,897.1,602), new cjs.Rectangle(-440.6,299,896.7,602), new cjs.Rectangle(-443,299,896.4,602), new cjs.Rectangle(-444.7,299,896.2,602), new cjs.Rectangle(-445.7,299,896.7,602), rect=new cjs.Rectangle(-446,299,897.1,602), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447,135.1,1205.1,766), new cjs.Rectangle(-447.3,135.1,1205,765.9), new cjs.Rectangle(-448.3,135.1,1204.7,765.9), new cjs.Rectangle(-449.9,135.1,1204.3,765.9), new cjs.Rectangle(-452.2,135.1,1203.7,765.9), new cjs.Rectangle(-455.2,135.1,1203,765.9), new cjs.Rectangle(-458.7,135.1,1202.1,765.9), new cjs.Rectangle(-462.9,135.1,1201,765.9), new cjs.Rectangle(-467.8,135.1,1199.7,765.9), new cjs.Rectangle(-473.3,135.1,1198.3,765.9), new cjs.Rectangle(-479.5,135.1,1196.7,765.9), new cjs.Rectangle(-486.3,135.1,1194.9,765.9), new cjs.Rectangle(-493.8,135.1,1193,765.9), new cjs.Rectangle(-501.9,135.1,1190.9,765.9), new cjs.Rectangle(-510.7,135.1,1188.7,765.9), new cjs.Rectangle(-520.1,135.1,1186.2,765.9), new cjs.Rectangle(-530.2,135.1,1183.7,765.9), new cjs.Rectangle(-540.9,135.1,1180.9,765.9), new cjs.Rectangle(-552.3,135.1,1178,765.9), new cjs.Rectangle(-564.4,135.1,1174.9,765.9), new cjs.Rectangle(-577,135.1,1171.6,765.9), new cjs.Rectangle(-589.7,135.1,1168.3,765.9), new cjs.Rectangle(-601.7,135.1,1165.2,765.9), new cjs.Rectangle(-613.1,135.1,1162.3,765.9), new cjs.Rectangle(-623.8,135.1,1159.6,765.9), new cjs.Rectangle(-633.9,135.1,1157,765.9), new cjs.Rectangle(-643.3,135.1,1154.5,765.9), new cjs.Rectangle(-652.1,135.1,1152.2,765.9), new cjs.Rectangle(-660.2,135.1,1150.2,765.9), new cjs.Rectangle(-667.7,135.1,1148.2,765.9), new cjs.Rectangle(-674.5,135.1,1146.4,765.9), new cjs.Rectangle(-680.7,135.1,1144.9,765.9), new cjs.Rectangle(-686.2,135.1,1143.5,765.9), new cjs.Rectangle(-691.1,135.1,1142.2,765.9), new cjs.Rectangle(-695.3,135.1,1146.4,765.9), new cjs.Rectangle(-698.9,135.1,1149.9,765.9), new cjs.Rectangle(-701.8,135.1,1152.9,765.9), new cjs.Rectangle(-704.1,135.1,1155.1,765.9), new cjs.Rectangle(-705.7,135.1,1156.8,765.9), new cjs.Rectangle(-706.7,135.1,1157.7,765.9), new cjs.Rectangle(-707,135.1,1158.1,766), rect=new cjs.Rectangle(149,135.1,302,766), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(149,135.1,302,765.9), rect=new cjs.Rectangle(149,128.8,302,772.2), rect, rect, new cjs.Rectangle(149,128.8,305.9,772.2), new cjs.Rectangle(149,128.8,311.4,772.2), new cjs.Rectangle(149,128.8,316.6,772.2), new cjs.Rectangle(149,128.8,321.6,772.2), new cjs.Rectangle(149,128.8,326.2,772.2), new cjs.Rectangle(149,128.8,330.4,772.2), new cjs.Rectangle(149,128.8,334.3,772.2), new cjs.Rectangle(149,128.8,337.9,772.2), new cjs.Rectangle(149,128.8,341.2,772.2), new cjs.Rectangle(149,128.8,344.2,772.2), new cjs.Rectangle(149,128.8,346.9,772.2), new cjs.Rectangle(149,128.8,349.4,772.2), new cjs.Rectangle(149,128.8,351.6,772.2), new cjs.Rectangle(149,128.8,353.7,772.2), new cjs.Rectangle(149,128.8,355.6,772.2), new cjs.Rectangle(149,128.8,357.4,772.2), new cjs.Rectangle(149,128.8,358.9,772.2), new cjs.Rectangle(149,128.8,360.3,772.2), new cjs.Rectangle(149,128.8,361.6,772.2), new cjs.Rectangle(149,128.8,362.8,772.2), new cjs.Rectangle(149,128.8,363.8,772.2), new cjs.Rectangle(149,128.8,364.8,772.2), new cjs.Rectangle(149,128.8,365.6,772.2), new cjs.Rectangle(149,128.8,366.4,772.2), new cjs.Rectangle(149,128.8,367.1,772.2), new cjs.Rectangle(149,128.8,367.7,772.2), new cjs.Rectangle(149,128.8,368.2,772.2), new cjs.Rectangle(149,128.8,368.7,772.2), new cjs.Rectangle(149,128.8,369.1,772.2), new cjs.Rectangle(149,128.8,369.5,772.2), new cjs.Rectangle(149,128.8,369.8,772.2), new cjs.Rectangle(149,128.8,370.1,772.2), new cjs.Rectangle(149,128.8,370.3,772.2), new cjs.Rectangle(149,128.8,370.5,772.2), new cjs.Rectangle(149,128.8,370.6,772.2), new cjs.Rectangle(149,128.8,370.7,772.2), rect=new cjs.Rectangle(149,128.8,370.8,772.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(71.3,128.8,448.5,772.2), new cjs.Rectangle(71.7,128.8,448.1,772.2), new cjs.Rectangle(72.4,128.8,447.4,772.2), new cjs.Rectangle(73.3,128.8,446.5,772.2), new cjs.Rectangle(74.4,128.8,445.4,772.2), new cjs.Rectangle(75.6,128.8,444.2,772.2), new cjs.Rectangle(77.1,128.8,442.7,772.2), new cjs.Rectangle(78.8,128.8,441,772.2), new cjs.Rectangle(80.7,128.8,439.1,772.2), new cjs.Rectangle(82.8,128.8,437,772.2), new cjs.Rectangle(85.1,128.8,434.7,772.2), new cjs.Rectangle(87.7,128.8,432.1,772.2), new cjs.Rectangle(90.5,128.8,429.3,772.2), new cjs.Rectangle(93.5,128.8,426.3,772.2), new cjs.Rectangle(96.8,128.8,423,772.2), new cjs.Rectangle(100.3,128.8,419.5,772.2), new cjs.Rectangle(104.1,128.8,415.7,772.2), new cjs.Rectangle(108.1,128.8,411.7,772.2), new cjs.Rectangle(112.4,128.8,407.4,772.2), new cjs.Rectangle(116.9,128.8,402.9,772.2), new cjs.Rectangle(121.8,128.8,398,772.2), new cjs.Rectangle(126.8,128.8,393,772.2), new cjs.Rectangle(132.2,128.8,387.6,772.2), new cjs.Rectangle(137.8,128.8,382,772.2), new cjs.Rectangle(143.8,128.8,376,772.2), rect=new cjs.Rectangle(149,128.8,370.8,772.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];
// library properties:
lib.properties = {
	id: '9A8382DCE8E547689995727A42AA7C70',
	width: 300,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/background.jpg?1663162631428", id:"background"},
		{src:"images/card1.png?1663162631428", id:"card1"},
		{src:"images/card2.png?1663162631428", id:"card2"},
		{src:"images/card3.png?1663162631428", id:"card3"},
		{src:"images/cta.png?1663162631428", id:"cta"},
		{src:"images/imagery2.jpg?1663162631428", id:"imagery2"},
		{src:"images/plane.png?1663162631428", id:"plane"},
		{src:"images/planeLine.png?1663162631428", id:"planeLine"},
		{src:"images/t1a.png?1663162631428", id:"t1a"},
		{src:"images/t1b.png?1663162631428", id:"t1b"},
		{src:"images/t1c.png?1663162631428", id:"t1c"},
		{src:"images/t2a.png?1663162631428", id:"t2a"},
		{src:"images/t2b.png?1663162631428", id:"t2b"},
		{src:"images/t3a.png?1663162631428", id:"t3a"},
		{src:"images/t3b.png?1663162631428", id:"t3b"},
		{src:"images/t4a.png?1663162631428", id:"t4a"},
		{src:"images/t4b.png?1663162631428", id:"t4b"},
		{src:"images/t5a.png?1663162631428", id:"t5a"},
		{src:"images/t5b.png?1663162631428", id:"t5b"},
		{src:"images/t5c.png?1663162631428", id:"t5c"},
		{src:"images/travelOn.png?1663162631428", id:"travelOn"}
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
an.compositions['9A8382DCE8E547689995727A42AA7C70'] = {
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