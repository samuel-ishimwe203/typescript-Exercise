//type valu= Number(x,y)& range
var setRange = function (range) {
    var x = range[0];
    var y = range[1];
    return [x, { name: y.name, age: y.age }];
};
console.log(setRange([true, { name: 'Patrick', age: 3 }]));
