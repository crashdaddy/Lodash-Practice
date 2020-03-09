

const ver = _.VERSION
console.log("Lodash version: " + ver);  


const getArray = () => {
    fetch("https://cors-anywhere.herokuapp.com/https://www.crazyhappyfuntime.com/rando/?length=100&min=1&max=100")
        .then(res => res.json())
        .then(returnedArray => {
            console.log(_.reverse(returnedArray.array));
            console.log(_.without(returnedArray.array,343));
            console.log(_.shuffle(returnedArray.array));
            console.log(_.chunk(returnedArray.array,3));
            console.log(_.flattenDeep(returnedArray.array));

        }) 
}

window.onload = ()=> {
    getArray();
}

