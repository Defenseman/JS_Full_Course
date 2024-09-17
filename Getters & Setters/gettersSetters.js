// getter = special method that makes a property readable
// setter = special method that makes a property writeable
// validate and modify a value when reading/writing property

class Users {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName) {
        if (typeof newFirstName === 'string' && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }else {
            console.error(`First name MUST be a non-a-number and contain at least 1 character`);
        }
    }
    set lastName(newLastName) {
        if (typeof newLastName === 'string' && newLastName.length > 0){
            this._lastName = newLastName;
        }else {
            console.error(`Lastname MUST be a non-a-number and contain at least 1 character`);
        }
    }
    set age(newAge) {
        if (typeof newAge === 'number' && newAge > 0) {
            this._age = newAge;
        }else {
            console.error(`Age MUST be a non-empty number`);
        }
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }
    get fullData(){
        return `${this._firstName} ${this._lastName} ${this._age}`;
    }
}

const user1 = new Users('Ilya', 'Nesterov', 24 );

console.log(user1.fullData)

