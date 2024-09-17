
// Static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created
//          from that class (class owns anything static, not the objects)


class Users {
    static getUsersCount = 0;

    constructor(name) {
        this.name = name;
        Users.getUsersCount ++;
    }
    sayHello(){
        console.log(`Hello My name is: ${this.name}`);
    }
    static amountOfUsers() {
        console.log(`${Users.getUsersCount} users online`);
    }
}

const user1 = new Users('Ilya');
const user2 = new Users('Vladimir');
const user3 = new Users('Jane');

user1.sayHello();
user2.sayHello();
user3.sayHello();
Users.amountOfUsers();



















