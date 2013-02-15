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
//= require html5-bp-plug
//= require underscore
//= require json2
//= require backbone
//= require backbone_rails_sync
//= require backbone_datalink
//= require jquery-scrollspy
//= require GGS
//= require three
//= require backbone/gol
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

(function ($){
	// Fit text for the giant Tip-Top
	$("#gText").fitText(6.1);
	
	// JQueryUI easeOutExpo easing
	$.extend($.easing, {
		easeOutExpo: function(e, t, n, r, i) {
			return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n;
		}
	});
	
	Gol.home = {
		view: new Gol.Views.Home(),
		router: new Gol.Routers.Home()
	};
	Backbone.history.start({pushState: true});
	var plx = Gol.home.view.Plx;
		plx.rendPick();
		plx.createElements();
		plx.initListen();
	Gol.home.view.ScrollSpy();
})(jQuery);
