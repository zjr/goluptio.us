// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require prefixfree
//= require fittext
//= require underscore
//= require json2
//= require backbone
//= require three
//= require html5-bp-plug
//= require jquery-scrollspy
//= require GGS
//= require_tree .

// Simple 'hammer' method for hi-res
// courtesy http://css3.bradshawenterprises.com/blog/retina-image-replacement-for-new-ipad/
// -- replace later with a more surgical technique
// Set pixelRatio to 1 if the browser doesn't offer it up.
//
//	SHUT OFF: due to there not actually being any @2x images to load right now

// var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
// $(window).on("load", function() {
//   if (pixelRatio > 1) {
//     $('img').each(function() {
//       // Very naive replacement that assumes no dots in file names.
//       $(this).attr('src', $(this).attr('src').replace(".","@2x."));
//     });
//   }
// });

Gol = {
	Model: {},
	View: {},
	Site: {
		Router: {}
	}
};
Gol.View = Backbone.View.extend({
	el: $("body"),
	events: {
		"click .nav-item": "slide"
	},
	slide: function(e) {
		e.preventDefault();
		this.path = e.target.pathname;
		Gol.router.navigate(this.path, {trigger:true});
	}
});
Gol.Site.Router = Backbone.Router.extend({
	routes: {
		"": "index",
		"about": "about",
		"services": "services",
		"contact": "contact",
		"work": "work"
	},
	entry: 1,
	index: function(){
		this.goTo("index");
	},
	about: function(){
		this.goTo("about");
	},
	services: function(){
		this.goTo("services");
	},
	contact: function(){
		this.goTo("contact");
	},
	work: function(){
		this.goTo("work");
	},
	goTo: function(e){
		$("html, body").stop(true,true);
		
		if (this.entry === 1) {
			if (e === "index") {
				$("html, body").scrollTop(0);
				this.entry--;
			} else {
				$(document).ready($("html, body").scrollTop($("#"+e).offset().top));
				Gol.Site.Plx.onScroll();
				this.entry--;
			}
		} else {
			if (e === "index") {
				$("html, body").animate({
					scrollTop: 0
				}, 2000, "easeOutExpo");
			} else {
				$("html, body").animate({
				scrollTop: $("#" + e).offset().top
				}, 2000, "easeOutExpo");
			}
		}

	}
});
Gol.Site.ScrollSpy = function(){
	$('.ms-panel').each(function(i){
		var position = $(this).position();
		var area = this.id;
		var stateObj = { section: area };
		$(this).scrollspy({
			min: position.top,
			max: position.top + $(this).height(),
			onEnter: function(element, position) {
				if (area === "home") {
					Gol.router.navigate("", {replace: true});
				} else {
					Gol.router.navigate("/"+area, {replace: true});
				}
			},
			onLeave: function(element, position) {
				return true;
			}
		});
	});
};
Gol.Site.Analytics = function(){
	var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
	(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
	g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
	s.parentNode.insertBefore(g,s);}(document,'script'));
};
Gol.Site.Plx = {
	w: window.innerWidth,
	h: document.height,
	
	bg: $('#bg')[0],
	
	bgObj: null,
	
	canvas: $('#plx-container canvas')[0],
	renderer: null,
	camera: null,
	scene: new THREE.Scene(),
	
	rendPick: function(){
		if (Modernizr.webgl) {
			this.renderer = new THREE.WebGLRenderer({
				canvas: this.canvas,
				alpha: false,
				clearColor: 0x000000
			});
		} else if (Modernizr.canvas) {
			this.renderer = new THREE.CanvasRenderer({
				canvas: this.canvas
			});
			this.renderer.setClearColorHex(0x000000);
		}
	},

	mainBG: $('#ms-scroll')[0],

	ticking: false,
	lastScrollY: 0,

	onResize: function (){
		$('#plx-container').height(document.height);
		var _this = Gol.Site.Plx;
		if(_this.camera === null){
			_this.createElements();
			_this.camera = new THREE.OrthographicCamera(0, window.innerWidth, 0, window.innerHeight, -2000, 2000);
			_this.scene.add(_this.camera);
		} else {
			_this.camera.right = window.innerWidth;
			_this.camera.bottom = window.innerHeight;
		}
		_this.renderer.setSize(window.innerWidth, window.innerHeight);
		_this.updateElements(window.scrollY);
	},

	onScroll: function (evt){
		var _this = Gol.Site.Plx;
		if(!_this.ticking){
			_this.ticking = true;
			_this.lastScrollY = window.scrollY;
			requestAnimationFrame(_this.updateElements);
		}
	},

	createElements: function (){
		this.bgRat = 1.5144124168514412;
		this.bgTexture = new THREE.Texture(this.bg);
		this.bgMaterial = new THREE.MeshBasicMaterial({map: this.bgTexture});
		this.bgTexture.needsUpdate = true;
		this.bgObj = new THREE.Mesh(new THREE.PlaneGeometry(window.innerHeight*2*this.bgRat, window.innerHeight*2, 1, 1), this.bgMaterial);
		this.bgObj.rotation.x = Math.PI;
		this.bgObj.position.x = window.innerHeight*2*this.bgRat/2;
		this.bgObj.position.z = -1;
		this.scene.add(this.bgObj);
	},

	updateElements: function(){
		var _this = Gol.Site.Plx;
		var relativeY = _this.lastScrollY / _this.h;

		_this.bgObj.position.y = window.innerHeight + _this.pos(0, -window.innerHeight, relativeY, 0);

		_this.renderer.render(_this.scene, _this.camera);
		_this.ticking = false;
	},

	pos: function(base, range, relY, offset){
		return base + this.limit(0, 1, relY - offset) * range;
	},

	prefix: function(obj, prop, value){
		var prefs = ['webkit', 'moz', 'o', 'ms'];
		for (var pref in prefs){
			obj[prefs[pref] + prop] = value;
		}
	},

	limit: function(min, max, value){
		return Math.max(min, Math.min(max, value));
	},

	initListen: function(){
		window.addEventListener('load', this.onResize, false);
		window.addEventListener('resize', this.onResize, false);
		window.addEventListener('scroll', this.onScroll, false);
	}
};

(function ($){
	// Fit text for the giant Tip-Top
	$("#gText").fitText(6.1);
	
	// JQueryUI easeOutExpo easing
	$.extend($.easing, {
		easeOutExpo: function(e, t, n, r, i) {
			return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n;
		}
	});
	
	Gol.view = new Gol.View();
	Gol.router = new Gol.Site.Router();
	Backbone.history.start({pushState: true});
	Gol.Site.ScrollSpy();
	var plx = Gol.Site.Plx;
	plx.rendPick();
	plx.createElements();
	plx.initListen();
})(jQuery);