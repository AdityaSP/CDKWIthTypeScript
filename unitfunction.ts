function greet(){
    console.log("Hello");
}

greet();
greet();
greet();

// function sayhello(name :string){
//     console.log("Hello" + " " + name);
// }

// let personname: string = "Aditya";
// sayhello(personname);
// sayhello(personname);
// sayhello(personname);

// function fullname(fn :string, ln :string){
//     console.log(ln + ", " + fn);
// }

// let fin = "Issac"
// let lan = "Newton"
// fullname(fin, lan);

function sayhello(name :string) :string{
    return "Hello" + " " + name
}

function fullname(fn :string, ln :string) :string{
    return ln + ", " + fn;
}

let fin = "Issac"
let lan = "Newton"

let fn = fullname(fin, lan);
let hello = sayhello(fn);
console.log(hello);

console.log(sayhello(fullname(fin, lan)));

let cheering :string= sayhello(fullname(fin, lan));


function add (x:number, y:number){
    return x + y;
}

let twicethesum =  add(3,4) * 2;

console.log(twicethesum);

// perimeter 2 * (l +b)

function twice(x: number){
    return x * 2
}

function perimeter( l :number, b :number){
    let half = add(l, b);
    let halftwice = twice(half);
    return halftwice;
}

let len = 5;
let breadth = 6
const p = perimeter(len, breadth);

console.log("the perimeter of " + len + " " + breadth + " is" + p);


const pi = 3.14;

//arrow functions
const sum = (x :number, y:number) => {
    return x + y
}

const mul = (x: number, y: number) => {
  return x * y;
};

console.log( sum(5,6))

// treating functions as first class citizens
// calc is a higher order function
// injecting behaviour into the calc function
function calc(x: number, y: number, fun: (x: number, y: number) => number){
    return fun(x,y);
}

console.log(
    calc(5,6, sum)
    )
console.log(
    calc(5,6, mul)
    )