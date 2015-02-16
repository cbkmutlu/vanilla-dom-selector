## vanilla-dom-selector
##### A super tiny javascript vanilla dom selector

Just put in your HTML file with ``<script>`` tag and attach with ``window.onload = function() { }``

```javascript
(function() {
	'use strict';
	var $ = document.querySelectorAll.bind(document);
	
	NodeList.prototype.each = HTMLCollection.prototype.each = Array.prototype.forEach;
	
	NodeList.prototype.on = function(a, b) {
		return this.each(function(c) {
			window.addEventListener ? c.addEventListener(a, b, false) : c.attachEvent('on' + a, b)
		});
	};
	
	window.onload = function() {
	
		$('button#someID').on('click', function() {
			alert(this.textContent);
			this.style.cssText = 'background-color: red';
		});
		
		$('button.cLass').each(function(el) {
			el.style.cssText = 'background-color: yellow';
		});
	};
	
})();
```

That's all what you need.

Enjoy!

#### Support
#### Javascript 1.6 (ECMA-262 Edition 5)
Opera 11+  
Firefox 1.5+  
Safari 5+  
Chrome 8+  
Internet Explorer 9+  

