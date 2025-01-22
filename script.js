const Pi = 3.14;
var rad = 6.378e6;
var Circum = 2*Pi*rad;
var A = 4*Pi*rad**2;
var V = (4/3)*Pi*rad**3;

document.write('The radius of the sphere is ' +  rad);
document.write('<br><br>');
document.write (' The circumference of the sphere is ' + Circum );
document.write('<br><br>');
document.write ('The surface area is ' + A);
document.write('<br><br>');
document.write('The volume is '+ V);