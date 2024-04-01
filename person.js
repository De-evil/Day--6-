// Day - 6 
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getGender() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
}
const person = new Person("Manoj", 24, "Male");

person.displayDetails();
