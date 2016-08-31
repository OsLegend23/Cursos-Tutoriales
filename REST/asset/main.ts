/**
 * Created by OsLegend23 on 24/08/2016.
 */
class Student {
    fullName: string;
    
    constructor(public name, public middleInitial, public last) {
        this.fullName = name + ' ' + middleInitial + ' ' + last;
    }
}

interface Person {
    name: string;
    last: string;
}

function greeter(person: Person) {
    return 'Hello ' + person.name + ' ' + person.last;
}

var user = new Student("Alejandro", 'Aguilar', 'Medina');

document.body.innerHTML = greeter(user);
//sortByName();