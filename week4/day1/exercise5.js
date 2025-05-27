
console.log(kgToGramsDeclaration(10)); 

function kgToGramsDeclaration(kg) {
    return kg * 1000;
}

// console.log(kgToGramsExpression(10));
const kgToGramsExpression = function(kg) {
    return kg * 1000;
};

//The key difference is that the first can be invoked before its declaration, because it's hoisted. The second must be defined before it's called.


const kgToGramsArrow = (kg) => kg * 1000;
// console.log(kgToGramsArrow(10));
