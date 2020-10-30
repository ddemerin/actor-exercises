let actorOne = {
    firstName: "John",
    lastName: "Smith",
    age: 33, 
    yearlyEarning: "$100k"
}

let actorTwo = {
    firstName: "Jane", 
    lastName: "Doe", 
    age: 28, 
    yearlyEarning:"$110k"
}

let actorThree = {
    firstName: "Stacey", 
    lastName: "Cougar", 
    age: 55, 
    yearlyEarning: "$200k"
}

let actorArray = [actorOne, actorTwo, actorThree,]

for (let i = 0; i <= actorArray.length - 1; i++){
    if (actorArray[i].age > 30)
    {
        console.log(actorArray[i].firstName, actorArray[i].lastName);
    }
}