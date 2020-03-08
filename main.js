

const ver = _.VERSION
console.log("Lodash version: " + ver);  

let unsortedArray = [[87,65,45],34,[76,112],[343,5454],65,[[34,65],23],676,545];

console.log(_.reverse(unsortedArray));
console.log(_.without(unsortedArray,343));
console.log(_.shuffle(unsortedArray));
console.log(_.chunk(unsortedArray,3));
console.log(_.flattenDeep(unsortedArray));
