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
//= require jquery_ujs
//= require prefixfree
//= require html5-bp-plug
//= require GGS
//= require_tree ../../../vendor/assets/javascripts/1140gs
//= require_tree .

$(document).ready(function(){

	$('#m-nav input').click(function() {
		if($(this).is(':checked')) {
			switch(this.id) {
				case "ms-control-1":
					$('#ms-scroll').removeClass().addClass('pos1')
					break;
				case "ms-control-2":
					$('#ms-scroll').removeClass().addClass('pos2')
					break;
				case "ms-control-3":
					$('#ms-scroll').removeClass().addClass('pos3')
					break;
				case "ms-control-4":
					$('#ms-scroll').removeClass().addClass('pos4')
					break;
				case "ms-control-5":
					$('#ms-scroll').removeClass().addClass('pos5')
					break;
			}
		}
	});

});