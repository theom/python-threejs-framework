
// Copyright 2014 Jens Páll Hafsteinsson
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

alheimr.letters = {};

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

alheimr.letters["A"] = obj;

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

alheimr.letters["Á"] = obj;

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

alheimr.letters["B"] = obj;

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

alheimr.letters["C"] = obj;

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

alheimr.letters["D"] = obj;

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

alheimr.letters["Ð"] = obj;

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

alheimr.letters["E"] = obj;

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

alheimr.letters["É"] = obj;

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

alheimr.letters["F"] = obj;

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

alheimr.letters["G"] = obj;

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

alheimr.letters["H"] = obj;

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

alheimr.letters["I"] = obj;

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

alheimr.letters["Í"] = obj;

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

alheimr.letters["J"] = obj;

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

alheimr.letters["K"] = obj;

// L

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

alheimr.letters["L"] = obj;

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

alheimr.letters["M"] = obj;

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

alheimr.letters["N"] = obj;

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

alheimr.letters["O"] = obj;

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

alheimr.letters["Ó"] = obj;

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

alheimr.letters["P"] = obj;

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

alheimr.letters["Q"] = obj;

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

alheimr.letters["R"] = obj;

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

alheimr.letters["S"] = obj;

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

alheimr.letters["T"] = obj;

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

alheimr.letters["U"] = obj;

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

alheimr.letters["Ú"] = obj;

// V

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

alheimr.letters["V"] = obj;

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

alheimr.letters["W"] = obj;

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

alheimr.letters["X"] = obj;

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

alheimr.letters["Y"] = obj;

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

alheimr.letters["Ý"] = obj;

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

alheimr.letters["Z"] = obj;

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

alheimr.letters["Þ"] = obj;

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

alheimr.letters["Æ"] = obj;

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

alheimr.letters["Ö"] = obj;

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

alheimr.letters["a"] = obj;

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

alheimr.letters["á"] = obj;

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

alheimr.letters["b"] = obj;

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

alheimr.letters["c"] = obj;

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

alheimr.letters["d"] = obj;

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

alheimr.letters["ð"] = obj;

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

alheimr.letters["e"] = obj;

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

alheimr.letters["é"] = obj;

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

alheimr.letters["f"] = obj;

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

alheimr.letters["g"] = obj;

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

alheimr.letters["h"] = obj;

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

alheimr.letters["i"] = obj;

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

alheimr.letters["í"] = obj;

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

alheimr.letters["j"] = obj;

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

alheimr.letters["k"] = obj;

// l

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  2.0, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 0.5;
obj.userData.base = 0.5;

alheimr.letters["l"] = obj;

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

alheimr.letters["m"] = obj;

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

alheimr.letters["n"] = obj;

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

alheimr.letters["o"] = obj;

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

alheimr.letters["ó"] = obj;

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

alheimr.letters["p"] = obj;

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

alheimr.letters["q"] = obj;

// r

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-0.5, -1.0, 0));
geo.vertices.push(new three.Vector3(-0.5,  1.0, 0));
geo.vertices.push(new three.Vector3( 0.5,  1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 0.5;
obj.userData.base = 0.5;

alheimr.letters["r"] = obj;

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

alheimr.letters["s"] = obj;

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

alheimr.letters["t"] = obj;

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

alheimr.letters["u"] = obj;

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

alheimr.letters["ú"] = obj;

// v

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.0, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.5;

alheimr.letters["v"] = obj;

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

alheimr.letters["x"] = obj;

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

alheimr.letters["y"] = obj;

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

alheimr.letters["ý"] = obj;

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

alheimr.letters["z"] = obj;

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

alheimr.letters["þ"] = obj;

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

alheimr.letters["æ"] = obj;

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

alheimr.letters["ö"] = obj;

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

alheimr.letters["w"] = obj;

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

alheimr.letters["0"] = obj;

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

alheimr.letters["1"] = obj;

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

alheimr.letters["2"] = obj;

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

alheimr.letters["3"] = obj;

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

alheimr.letters["4"] = obj;

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

alheimr.letters["5"] = obj;

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

alheimr.letters["6"] = obj;

// 7

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3(-0.5, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

alheimr.letters["7"] = obj;

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

alheimr.letters["8"] = obj;

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

alheimr.letters["9"] = obj;

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

alheimr.letters[":"] = obj;

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

alheimr.letters[";"] = obj;

// ,

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, -0.5, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
geo.vertices.push(new three.Vector3(-0.5, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 0.25;
obj.userData.base = 0.0;

alheimr.letters[","] = obj;

// .

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0, -1.0, 0));
geo.vertices.push(new three.Vector3( 0.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 0.25;
obj.userData.base = 0.0;

alheimr.letters["."] = obj;

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

alheimr.letters["?"] = obj;

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

alheimr.letters["@"] = obj;

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

alheimr.letters["+"] = obj;

// -

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

alheimr.letters["-"] = obj;

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

alheimr.letters["*"] = obj;

// /

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

alheimr.letters["/"] = obj;

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

alheimr.letters["!"] = obj;

// '

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 0.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 0.0,  1.0, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

alheimr.letters["'"] = obj;

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

alheimr.letters["("] = obj;

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

alheimr.letters[")"] = obj;

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

alheimr.letters["="] = obj;

// <space>

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

alheimr.letters[" "] = obj;

// <

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3( 1.0,  1.5, 0));
geo.vertices.push(new three.Vector3(-1.0,  0.0, 0));
geo.vertices.push(new three.Vector3( 1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

alheimr.letters["<"] = obj;

// >

obj = new three.Object3D();

geo = new three.Geometry();
geo.vertices.push(new three.Vector3(-1.0,  1.5, 0));
geo.vertices.push(new three.Vector3( 1.0,  0.0, 0));
geo.vertices.push(new three.Vector3(-1.0, -1.5, 0));
obj.add(new three.Line(geo, mat));

obj.userData.half_width = 1.0;
obj.userData.base = 0.0;

alheimr.letters[">"] = obj;

// "

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

alheimr.letters["\""] = obj;

// #

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

alheimr.letters["#"] = obj;

// $

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

alheimr.letters["$"] = obj;

// %

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

alheimr.letters["%"] = obj;

// &

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

alheimr.letters["&"] = obj;

// &

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

alheimr.letters["&"] = obj;

// [

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

alheimr.letters["["] = obj;

// \

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

alheimr.letters["\\"] = obj;

// ]

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

alheimr.letters["]"] = obj;

// ^

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

alheimr.letters["^"] = obj;

// _

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

alheimr.letters["_"] = obj;

// `

obj = new three.Object3D();

obj.userData.half_width = 0.5;
obj.userData.base = 0.0;

alheimr.letters["`"] = obj;


//# sourceURL=letters.js
