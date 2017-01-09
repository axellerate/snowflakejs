# Snowflake.js

Snowflake.js is a small, lightweight javascript library that allows you to add a simple snowflake effect on your website.

## Demo

https://jsfiddle.net/1ay3p38h/3/

## Installation

Clone this repository and copy `snowflake.js` into your project directory. Afterwards, follow the steps below.

## Usage

1. Import Snowflake.js `<script type="text/javascript" src="snowflake.js"></script>`
2. Create a canvas of any size on your page
`<canvas id="snowstorm-demo" width="1000" height="500" style="background: #000;"></canvas>`

3. Create a new Snowstorm and tie it to your canvas via `id`
```
Example:
`const snowstorm = new Snowstorm("snowstorm-demo",500,{"shimmering":true});`
The Snowstorm class takes 3 arguments. They are: 
`(canvasId, numberOfSnowflakes, effectsObject)`
`Effects object: {"shimmering":true} // shimmering is the only supported effect at present`
```
- Call the start function `snowstorm.start()` to begin the animation
- Call the stop function `snowstorm.stop()` to stop the animation

Full Example:
```
<canvas id="snowstorm-demo" width="1000" height="500" style="background: #000;"></canvas>

<script type="text/javascript" src="snowflake.js"></script>
<script type="text/javascript">
	const snowstorm = new Snowstorm("snowstorm-demo", 500, true);
	snowstorm.start();
</script>
```

## Credits

This library was written by Kristoffer Vukasinovic

## License

The MIT License

Copyright (c) 2017 Kristoffer Vukasinovic

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
