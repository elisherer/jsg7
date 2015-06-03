Uses HTML5 canvas element.

supports width, height and color using xml tags inside the html file.

<a href='https://jsg7.googlecode.com/svn/trunk/jsg7.htm'>DEMO</a>

# Usage #

  1. Download the <a href='https://jsg7.googlecode.com/svn/trunk/jsg7.js'>jsg7.js</a> file from the repository.
  1. Add this code to the `<head>` part of the html file.
```
		<script src="jsg7.js"></script>
		<script>
			window.onload = function () {
				JSG7.run();
			}
		</script> 
```
3. Put any where in body: `<jsg7 code="0x7f"></jsg7>`

## Attributes ##
  * code = the number which corresponds to the segments A to G from LSB to MSB.
  * width = width of the digit (default: 11)
  * height = height of the digit (default: 19)
  * color = color of the digit (default: 'red')

# Credits #

Eli Sherer (http://www.sherer.co.il/)