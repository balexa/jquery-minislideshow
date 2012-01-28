/*!
 * jQuery plugin
 * http://www.stefanocicatiello.com
 * Copyright (c) 2012 S.Cicatiello
 * Version: 0.1 (01/27/2012)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 * Requires: jQuery v1.3.0 or later
 */

$.fn.minislideshow = function(options) {

	var selector = this;


	//set css for the div
	selector.css('position', 'relative')
	        .css('overflow', 'hidden');


	//set css for the img
	selector.children()
	        .css('position', 'absolute')
	        .css('top', '0')
	        .css('left', '0');



	//configurable options
	var defaults = {
		waiting: 0,   //waiting time before first movement
		timeout: 3000 //time after each movement
	};


	var options = $.extend(defaults, options);
	selector.children(':gt(0)').hide();


	//movement function
	function move()
	{
		setInterval(function() {
			selector.children()
					.eq(0)
					.fadeOut()
					.next()
					.fadeIn()
					.end()
					.appendTo(selector);
		}, options.timeout);
	}



	//start the function after a delay
	setTimeout(move, options.waiting);


};//end of plugin