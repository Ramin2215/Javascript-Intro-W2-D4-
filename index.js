let admin, name; //
name = "Ramin";
admin = name;
//alert( admin ); // "Ramin"

let ourPlanetName = "Earth";
let currentUserName = "Ramin";
const birthday = '18.04.1982';
const BIRTHDAY = '18.04.1982'; 
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // true
alert( true == 1 ); // true
alert( false == 0 ); // true
alert( '2' > 1 ); // true
alert( '01' == 1 ); // true
let a = 0;
alert( Boolean(a) ); // false
let b = "0";
alert( Boolean(b) ); // true
alert(a == b); // true!
//sweet couple
alert( null === undefined ); // false
alert( null == undefined ); // true
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
5 > 4 // true
"apple" > "pineapple" //false
"2" > "12" // true
undefined == null // true
undefined === null //  false
null == "\n0\n" // false
null === +"\n0\n" // false
alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity

let namex = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${namex}` ); // hello Ilya
alert('1' + 2 + 2); // "122"
alert(2 + 2 + '1' ); // "41"

/* "" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7) */