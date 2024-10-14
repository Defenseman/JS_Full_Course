// JSON = (JavaScript object notation) data-interchange format.
//        Used for exchanging data between the server and the web application
//        JSON files {key:value} or [value1, value2, value3]
//
//        JSON.stringify() = converts a JS object to a Json string.
//        JSON.parse() = converts a JSON string to a JS
//        fetch("names.json").then()

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"]
const person = `{
    "name": "Spongebob",
    "age": 24,
    "isEmployed": true
}`
const people = `[
        {
            "name": "Spongebob",
            "age": 24,
            "isEmployed": true
        },
        {
            "name": "Patrick",
            "age": 25,
            "isEmployed": false
        },
        {
            "name": "Squidward",
            "age": 34,
            "isEmployed": true
        },
        {
            "name": "Sandy",
            "age": 25,
            "isEmployed": false
        }
    ]`

const toString = JSON.stringify(names)
console.log(toString)
const toParse = JSON.parse(people)
console.log(toParse)

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.age)))
