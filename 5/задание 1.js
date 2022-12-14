let a = [], m = 5, n = 100, count = 50;

for ( let i = m; i < count; ++i ) {
    a.push( Math.round(Math.random() * n) );
}

console.log(a);