# iswindow

Checks whether value is a window object.

#### Support

IE8+ is the target. But making it work in IE8 also makes it work in IE6+, so this basically works everywhere, even old Safaris.

## Installation

```
component install darsain/iswindow
```

## Example

```js
var isWindow = require('iswindow');

isWindow(window);       // true
isWindow(anythingElse); // false
```

## Not bulletproof

Uses duck typing and double equals when comparing window objects, which is necessary for this to work in IE8.

Double equals are necessary because in IE8:

```js
window.window === window;                // false
window.document.parentWindow === window; // false
window.window == window;                 // true
window.document.parentWindow == window;  // true
window === window;                       // true
window == window;                        // true
```

If someone knows why this is happening in IE8, or has a better or more robust method to test for window in IE8+, **please** let me know in issues.

Hell, we can't even do `typeof window.setTimeout === 'function'`, because in IE8 global functions are `'object'`.

That being said, you'd need this to cause a false positive:

```js
var notWin = {};
notWin.window = notWin;
notWin.setTimeout = 'truthy';
notWin.alert = 'truthy';
notWin.document = {};
notWin.document.defaultView = notWin;

isWindow(notWin); // true
```

## License

MIT