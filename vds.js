(function() {
	'use strict';
	var $ = document.querySelectorAll.bind(document);
	
	NodeList.prototype.each = HTMLCollection.prototype.each = Array.prototype.forEach;
	
	NodeList.prototype.on = function(a, b) {
		return this.each(function(c) {
			window.addEventListener ? c.addEventListener(a, b, false) : c.attachEvent('on' + a, b)
		});
	};
})();
