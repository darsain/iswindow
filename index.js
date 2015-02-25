module.exports = isWindow;

/**
 * Check whether value is a window object.
 *
 * Uses duck typing to determine window. Without IE8 all we need is:
 *
 *   var type = Object.prototype.toString.call(val);
 *   return type === '[object global]' || type === '[object Window]' || type === '[object DOMWindow]';
 *
 * @param  {Mixed} val
 * @return {Boolean}
 */
function isWindow(val) {
	/* jshint eqeqeq:false */
	var doc, docWin;
	return !!(
		val
		&& typeof val === 'object'
		&& typeof val.window === 'object'
		&& val.window == val
		&& val.setTimeout
		&& val.alert
		&& (doc = val.document)
		&& typeof doc === 'object'
		&& (docWin = doc.defaultView || doc.parentWindow)
		&& typeof docWin === 'object'
		&& docWin == val
	);
}