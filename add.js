function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}
// console.log(add(1,2));

module.exports = {add,subtract};
// recommended way to export instead of - module.exports = {add,subtract}; is -
// module.exports.add= add;
// module.exports.subtract= subtract;
// or
// exports.add= add;
// exports.subtract= subtract;