/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding - this is the default object for the 'this' keyword. If no other rules apply then 'this' will default to the window object unless you are in strict mode. In that case 'this' would default to undefined.
 * 2. Implicit Binding - basically means automatic binding and is the most common of the principles. It only applies to objects with methods. The 'this' keyword will refer to whatever is to the left of the dot in an invoked function.
 * 3. New Binding - when the 'new' keyword is used, a new object will be constructed and 'this' will point to that new object.
 * 4. Explicit Binding - this is when we explicitly tell the Javascript engine to point to a certain value using 'call', 'apply', or 'bind'. Those keywords can be used to invoke a function with a specific value for 'this'.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

// "use strict";

// function weAre() {
// 	console.log(this.wyldStallyns);
// }

// weAre();
// const wyldStallyns = "Excellent!";

// Principle 2

// code example for Implicit Binding

// const favAlbum = {
// 	band: "Pixies",
// 	album: "Trompe le Monde",
// 	alternative: function() {
// 		console.log(this.album);
// 	}
// };

// favAlbum.alternative();

// Principle 3

// code example for New Binding

// function Gob(song) {
// 	this.thing = song;
// }

// let magicGob = new Gob("The Final Countdown");

// console.log(magicGob.thing);

// Principle 4

// code example for Explicit Binding

function sgt() {
	console.log(this.motivation);
}

let drillSgt = {
	name: "Hartman",
	motivation: "WHAT IS YOUR MAJOR MALFUNCTION, PRIVATE!!!!"
};

sgt.call(drillSgt);
