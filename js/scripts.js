function getTriangleArea(a, h) {
	if (!a) {
		a = prompt("Eneter number a");
	}

	if (!h) {
		h = prompt("Eneter number h");
	}

	if (a < 0) {
		console.log("incorrect data");
	} else if (h < 0) {
		console.log("incorrect data");
	}

	return  (a * h / 2)
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(-2, -67);
var triangle3Area = getTriangleArea(23, 54);