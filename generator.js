function *name(b){

yield 1;
yield 2;
yield 3;
yield 4;

}
var a=name();
console.log(a.next());
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().done);
console.log(a.next());

