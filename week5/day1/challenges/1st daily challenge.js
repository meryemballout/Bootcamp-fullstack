const makeAllCaps = (arr) => {
    return (
        new Promise((resolve, reject)=>{
            arr.forEach(element => {
                if (typeof element !== "string")
                    reject("Not all characters")
            });
            const upperArr = arr.map((element)=> element.toUpperCase())
            resolve(upperArr)
            }
        )
    )
}

const sortWords = (arr) => {
    return (
        new Promise((resolve, reject)=>{
            if (arr.length<4)
                reject("Array length is not bigger than 4")
            const sortArr = arr.sort()
            resolve(sortArr)
            }
        )
    )
}



makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error))