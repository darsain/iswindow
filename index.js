module.exports = isWindow;

/**
 * Check whether value is a window object.
 *
 * @param  {Mixed} val
 * @return {Boolean}
 */
function isWindow(val) {
	var type = Object.prototype.toString.call(val);
	return type === '[object global]' || type === '[object Window]' || type === '[object DOMWindow]';
}