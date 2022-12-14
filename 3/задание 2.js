let l=0.2+0.3+0.033
let a = 13.123456789, b = 2.123, n = 5;
let s=Math.round(
    a*Math.pow(10,n)
);
let sc=Math.round(
    b*Math.pow(10,n)
);
console.log("Исходные числа равны", a===b)
console.log("Числа равны", s===sc)
console.log("Первое число больше", s>sc)
console.log("Первое число меньше", s<sc)