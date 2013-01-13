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
//= // require jquery_ujs
//= require prefixfree
//= require html5-bp-plug
//= require GGS
//= require_tree ../../../vendor/assets/javascripts/1140gs
//= require fittext
//= require jquery-scrollspy
//= require underscore
//= require json2
//= require backbone
//= require_tree .

// Simple 'hammer' method for hi-res
// courtesy http://css3.bradshawenterprises.com/blog/retina-image-replacement-for-new-ipad/ 
// -- replace later with a more surgical technique
// Set pixelRatio to 1 if the browser doesn't offer it up.
//
//	SHUT OFF: due to there not actually being any @2x images to load right now
//
// var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
// $(window).on("load", function() {
// 	if (pixelRatio > 1) {
// 		$('img').each(function() { 
// 			// Very naive replacement that assumes no dots in file names.
// 			$(this).attr('src', $(this).attr('src').replace(".","@2x."));
// 		});
// 	}
// });

// Fit text for the giant Tip-Top
$("#gText").fitText(6.1);

// JQueryUI easeOutExpo easing
jQuery.extend(jQuery.easing, {
	easeOutExpo: function(e, t, n, r, i) {
		return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
	}
});

(function ($) {
	var Gol = {
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
	Gol.view = new Gol.View;
	Gol.Site.ScrollSpy = function(){
		$('.ms-panel').each(function(i){
			var position = $(this).position();
			var area = this.id
			var stateObj = { section: area }
			$(this).scrollspy({
				min: position.top,
				max: position.top + $(this).height(),
				onEnter: function(element, position) {
					area === "home" ?
					  Gol.router.navigate("")
					: Gol.router.navigate("/"+area);
				},
				onLeave: function(element, position) {
					return true;
				}
			});
		});
	};
	Gol.scrollspy = new Gol.Site.ScrollSpy;
	Gol.Site.Router = 
		Backbone.Router.extend({
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
				this.entry == true ?
					e === "index" ?
					  $("html, body").scrollTop(0) && 
					  this.entry--
					: $(document).ready($("html, body").scrollTop($("#"+e).offset().top)) &&
					  this.entry--
				:	e === "index" ?
					  $("html, body").animate({
					    scrollTop: 0
					  }, 1800, "easeOutExpo")
					: $("html, body").animate({
					    scrollTop: $("#" + e).offset().top
					  }, 1800, "easeOutExpo");
			}
		}); 
	Gol.router = new Gol.Site.Router
	Backbone.history.start({pushState: true});
})(jQuery);

$(document).ready(function(){$("html, body").stop();});