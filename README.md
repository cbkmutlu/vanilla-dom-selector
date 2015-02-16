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
})();
```
OR  
``<script src="js/vds.js"></script>``

```javascript
window.onload = function() {

	$('button').on('click', function() {
		alert(this.textContent);
		this.style.cssText = 'background-color: red';
	});
	
	$('button').each(function(el) {
		el.style.cssText = 'background-color: yellow';
	});
};
```

That's all what you need.

Enjoy!
