JSG7 = {
	
	polys: [
		[ [ 1, 1], [ 2, 0], [ 8, 0], [ 9, 1], [ 8, 2], [ 2, 2] ],
		[ [ 9, 1], [10, 2], [10, 8], [ 9, 9], [ 8, 8], [ 8, 2] ],
		[ [ 9, 9], [10,10], [10,16], [ 9,17], [ 8,16], [ 8,10] ],
		[ [ 9,17], [ 8,18], [ 2,18], [ 1,17], [ 2,16], [ 8,16] ],
		[ [ 1,17], [ 0,16], [ 0,10], [ 1, 9], [ 2,10], [ 2,16] ],
		[ [ 1, 9], [ 0, 8], [ 0, 2], [ 1, 1], [ 2, 2], [ 2, 8] ],
		[ [ 1, 9], [ 2, 8], [ 8, 8], [ 9, 9], [ 8,10], [ 2,10] ]
	],

	drawPolygon: function (context, factor, polygon, fillStyle, strokeStyle) {
        if (strokeStyle)
        	context.strokeStyle = strokeStyle;
        context.fillStyle = fillStyle;
        context.beginPath();
        context.moveTo(polygon[0][0] * factor[0], polygon[0][1] * factor[1]); //first vertex
        for (var i = 1; i < polygon.length ; i++)
            context.lineTo(polygon[i][0] * factor[0], polygon[i][1] * factor[1]);
        context.lineTo(polygon[0][0] * factor[0], polygon[0][1] * factor[1]); //back to start
        context.fill();
        context.stroke();
        context.closePath();
    },

	getElement: function (code, width, height, color) {
		var canvas = document.createElement("canvas"),
		 	context = canvas.getContext('2d'),
		 	dcolor = color || 'red';
		canvas.width = width || 11;
		canvas.height = height || 19;
		var factor = [canvas.width / 10, canvas.height / 18];
		context.lineWidth = 0.25 * Math.max(factor[0],factor[1]);
	    context.strokeStyle = 'white';
		var mask = 1;
		for (var key in JSG7.polys) {
			JSG7.drawPolygon(context, factor, JSG7.polys[key], (code & mask) > 0 ? dcolor : '#ddd')
			mask <<= 1;
		}
	    return canvas;
	},

	insert: function(code, width, height, color) {
		document.body.appendChild(JSG7.getElement(code, width, height, color));
	},

	run: function() {
		var nodelist = document.getElementsByTagName('seg7');
		var listcopy = [];
		for (var i = 0; i < nodelist.length; i++)
			listcopy.push(nodelist[i]);
		for (var i = 0; i < listcopy.length; i++) {
			var element = listcopy[i];
			var code = element.getAttribute('code');
			if (code === null)
				return; //not valid
			var width = element.getAttribute('width'),
				height = element.getAttribute('height'),
				color = element.getAttribute('color');
			element.parentNode.replaceChild(JSG7.getElement(parseInt(code), parseInt(width), parseInt(height), color), element);
		}
	}
}
