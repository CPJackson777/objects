console.log("We're learning about objects.")

let car = {
    make: "Ford",
    model: "Mustang",
    year: 2015,
    color: "red"
}

let animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];

const parentOne = {
    name: "Bob",
    gender: "male",
    age: 82
}

const parentTwo = {
    name: "Chad",
    gender: "Male",
    age: 100
}

const parentThree = {
    name: "Chuck",
    gender: "male",
    age: 1
}

const child = {
    name: "Sarah",
    gender: "female",
    age: 40
}

familyMembers = [parentOne, parentTwo, parentThree, child]

console.log(familyMembers);


const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(`The empire state building is ${empireStateBuilding.height} high with ${empireStateBuilding.stories} stories. The east west length is ${empireStateBuilding.eastWestLength} and the north south length is ${empireStateBuilding.northSouthLength}. It is ${empireStateBuilding.squareFeet} square footage.`)

const addressKey = "address"
const constructionKey = "constructionDate"
const ownerKey = "owner"
const costKey = "cost"
const architectKey = "architect"

console.log(`The empire state building is at ${empireStateBuilding[addressKey]}. It was built in ${empireStateBuilding[architectKey]}. It cost ${empireStateBuilding[costKey]} and is owned by ${empireStateBuilding[ownerKey]}.`)



const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

// // const pt = nashvilleSoftwareSchool.partTime

// // for (let i = 0, i < nashvilleSoftwareSchool.partTime.length, i++) {
// //     console.log(pt[i])
// }
console.log("All Instructors")

const partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime

for (let i = 0; i < partTimeInstructors.length; i++) {
console.log(partTimeInstructors[i])
}

console.log("full time instructor", nashvilleSoftwareSchool.instructors.fullTime)

const fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime

for (let i = 0; i < fullTimeInstructors.length; i++) {
console.log(fullTimeInstructors[i])
}

// Part 2

// console.log("Andy:", fullTimeInstructors[4])
console.log("Andy:", fullTimeInstructors[fullTimeInstructors.length -1])
console.log("Zoe:" , nashvilleSoftwareSchool.instructors.partTime[0])