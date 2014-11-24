
// @author theom / https://www.axonehf.com

allteria.letters = {};

var obj;
var geo;

// This is actually set in the letter prototype so go there if you want to change the appearance
var mat = new three.LineBasicMaterial();

// A
obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -0.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["A"] = obj;

// Á

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -0.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, 2.0, 0));
geo.vertices.push(new three.Vector3( 1.0, 2.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["Á"] = obj;

// B

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 0.5,  1.5, 0));
geo.vertices.push(new three.Vector3( 0.5, -0.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 0.5, -0.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["B"] = obj;

// C

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["C"] = obj;

// D

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 0.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["D"] = obj;

// Ð

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 0.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 0.0, -0.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["Ð"] = obj;

// E

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 0.0, -0.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["E"] = obj;

// É

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 0.0, -0.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, 2.0, 0));
geo.vertices.push(new three.Vector3( 1.0, 2.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["É"] = obj;

// F

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 0.0, -0.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["F"] = obj;

// G

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["G"] = obj;

// H
obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -0.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["H"] = obj;

// I

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 0.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["I"] = obj;

// Í

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 0.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, 2.0, 0));
geo.vertices.push(new three.Vector3( 1.0, 2.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["Í"] = obj;

// J

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -0.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["J"] = obj;

// K

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-0.5,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["K"] = obj;

// L

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["L"] = obj;

// M

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 0.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["M"] = obj;

// N

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["N"] = obj;

// O

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["O"] = obj;

// Ó

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, 2.0, 0));
geo.vertices.push(new three.Vector3( 1.0, 2.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["Ó"] = obj;

// P

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -0.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -0.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["P"] = obj;

// Q

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 0.0, -0.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["Q"] = obj;

// R

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -0.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -0.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["R"] = obj;

// S

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -0.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -0.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["S"] = obj;

// T

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 0.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["T"] = obj;

// U

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["U"] = obj;

// Ú

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, 2.0, 0));
geo.vertices.push(new three.Vector3( 1.0, 2.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["Ú"] = obj;

// V

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["V"] = obj;

// W

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 0.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["W"] = obj;

// X

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["X"] = obj;

// Y

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 0.0,  0.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["Y"] = obj;

// Ý

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 0.0,  0.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, 2.0, 0));
geo.vertices.push(new three.Vector3( 1.0, 2.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["Ý"] = obj;

// Z

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["Z"] = obj;

// Þ

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 0.5,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -0.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -0.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["Þ"] = obj;

// Æ
obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -0.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["Æ"] = obj;

// Ö

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-0.5, 2.0, 0));
geo.vertices.push(new three.Vector3(-0.5, 2.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.5, 2.0, 0));
geo.vertices.push(new three.Vector3( 0.5, 2.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["Ö"] = obj;

// a

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["a"] = obj;

// á

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, 1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, 2.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["á"] = obj;

// b

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  2.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["b"] = obj;

// c

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["c"] = obj;

// d

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  2.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["d"] = obj;

// ð

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  2.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, 1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, 1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["ð"] = obj;

// e

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["e"] = obj;

// é

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, 1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, 2.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["é"] = obj;

// f

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 0.0,  2.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  2.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, 0.0, 0));
geo.vertices.push(new three.Vector3( 1.0, 0.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 0.5;
obj.userData.base = 0.5;

allteria.letters["f"] = obj;

// g

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -2.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -2.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["g"] = obj;

// h

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  2.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["h"] = obj;

// i

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 0.0,  1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-0.5, -1.0, 0));
geo.vertices.push(new three.Vector3( 0.5, -1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 0.0,  2.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 0.5;
obj.userData.base = 0.5;

allteria.letters["i"] = obj;

// í

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 0.0,  1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-0.5, -1.0, 0));
geo.vertices.push(new three.Vector3( 0.5, -1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  2.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 0.5;
obj.userData.base = 0.5;

allteria.letters["í"] = obj;

// j

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 0.0, -2.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -2.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 0.0,  2.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 0.5;
obj.userData.base = 0.5;

allteria.letters["j"] = obj;

// k

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  2.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-0.2,  0.2, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["k"] = obj;

// l

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  2.0, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 0.5;
obj.userData.base = 0.5;

allteria.letters["l"] = obj;

// m

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["m"] = obj;

// n

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["n"] = obj;

// o

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["o"] = obj;

// ó

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  2.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["ó"] = obj;

// p

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -2.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["p"] = obj;

// q

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -2.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["q"] = obj;

// r

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-0.5, -1.0, 0));
geo.vertices.push(new three.Vector3(-0.5,  1.0, 0));
geo.vertices.push(new three.Vector3( 0.5,  1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 0.5;
obj.userData.base = 0.5;

allteria.letters["r"] = obj;

// s

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["s"] = obj;

// t

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  2.0, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-0.5,  1.0, 0));
geo.vertices.push(new three.Vector3( 0.5,  1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 0.5;
obj.userData.base = 0.5;

allteria.letters["t"] = obj;

// u

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["u"] = obj;

// ú

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  2.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["ú"] = obj;

// v

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["v"] = obj;

// x

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["x"] = obj;

// y

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -2.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -2.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["y"] = obj;

// y

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -2.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -2.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  2.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["ý"] = obj;

// z

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["z"] = obj;

// þ

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  2.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -2.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["þ"] = obj;

// æ

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0,  0.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  0.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["æ"] = obj;

// ö

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-0.5,  1.5, 0));
geo.vertices.push(new three.Vector3(-0.5,  2.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.5,  1.5, 0));
geo.vertices.push(new three.Vector3( 0.5,  2.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["ö"] = obj;

// w

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 0.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

allteria.letters["w"] = obj;

// 0

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -0.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  0.5, 0));
geo.vertices.push(new three.Vector3(-0.5,  1.5, 0));
geo.vertices.push(new three.Vector3( 0.5,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 0.5, -1.5, 0));
geo.vertices.push(new three.Vector3(-0.5, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -0.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["0"] = obj;

// 1

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  0.5, 0));
geo.vertices.push(new three.Vector3( 0.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["1"] = obj;

// 2

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["2"] = obj;

// 3

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  0.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["3"] = obj;

// 4

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["4"] = obj;

// 5

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  0.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["5"] = obj;

// 6

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  0.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["6"] = obj;

// 7

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3(-0.5, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["7"] = obj;

// 8

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  0.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["8"] = obj;

// 9

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0,  0.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  0.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["9"] = obj;

// :

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  0.5, 0));
geo.vertices.push(new three.Vector3( 0.0,  1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 0.25;
obj.userData.base = 0.0;

allteria.letters[":"] = obj;

// ;

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  0.5, 0));
geo.vertices.push(new three.Vector3( 0.0,  1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-0.5, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 0.25;
obj.userData.base = 0.0;

allteria.letters[";"] = obj;

// ,

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-0.5, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 0.25;
obj.userData.base = 0.0;

allteria.letters[","] = obj;

// .

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 0.25;
obj.userData.base = 0.0;

allteria.letters["."] = obj;

// ?

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.5, 0));
geo.vertices.push(new three.Vector3( 0.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 0.0, -0.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["?"] = obj;

// @

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.5, -1.0, 0));
geo.vertices.push(new three.Vector3( 0.5,  1.0, 0));
geo.vertices.push(new three.Vector3( 0.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-0.5,  0.5, 0));
geo.vertices.push(new three.Vector3(-0.5, -0.5, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 0.5, -0.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 0.5,  1.5, 0));
geo.vertices.push(new three.Vector3(-0.5,  1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-0.5, -1.5, 0));
geo.vertices.push(new three.Vector3( 0.5, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["@"] = obj;

// +

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["+"] = obj;

// -

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["-"] = obj;

// *

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-0.75, -0.75, 0));
geo.vertices.push(new three.Vector3( 0.75,  0.75, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-0.75,  0.75, 0));
geo.vertices.push(new three.Vector3( 0.75, -0.75, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["*"] = obj;

// /

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["/"] = obj;

// !

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 0.0, -0.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 0.25;
obj.userData.base = 0.0;

allteria.letters["!"] = obj;

// '

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 0.0,  1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["'"] = obj;

// (

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.25, -1.5, 0));
geo.vertices.push(new three.Vector3(-0.25, -0.5, 0));
geo.vertices.push(new three.Vector3(-0.25,  0.5, 0));
geo.vertices.push(new three.Vector3( 0.25,  1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

allteria.letters["("] = obj;

// )

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-0.25, -1.5, 0));
geo.vertices.push(new three.Vector3( 0.25, -0.5, 0));
geo.vertices.push(new three.Vector3( 0.25,  0.5, 0));
geo.vertices.push(new three.Vector3(-0.25,  1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

allteria.letters[")"] = obj;

// =

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  0.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.5, 0));
obj.add(new three.Line(geo, mat));

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 1.0, -0.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["="] = obj;

// <space>

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

allteria.letters[" "] = obj;

// <

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters["<"] = obj;

// >

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

allteria.letters[">"] = obj;

// "

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

allteria.letters["\""] = obj;

// #

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

allteria.letters["#"] = obj;

// $

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

allteria.letters["$"] = obj;

// %

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

allteria.letters["%"] = obj;

// &

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

allteria.letters["&"] = obj;

// &

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

allteria.letters["&"] = obj;

// [

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

allteria.letters["["] = obj;

// \

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

allteria.letters["\\"] = obj;

// ]

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

allteria.letters["]"] = obj;

// ^

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

allteria.letters["^"] = obj;

// _

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

allteria.letters["_"] = obj;

// `

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

allteria.letters["`"] = obj;


//# sourceURL=letters.js
