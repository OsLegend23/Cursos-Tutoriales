/**
 * Created by OsLegend23 on 24/08/2016.
 */
var Student = (function () {
    function Student(name, middleInitial, last) {
        this.name = name;
        this.middleInitial = middleInitial;
        this.last = last;
        this.fullName = name + ' ' + middleInitial + ' ' + last;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello ' + person.name + ' ' + person.last;
}
var user = new Student("Alejandro", 'Aguilar', 'Medina');
document.body.innerHTML = greeter(user);
//sortByName(); 
//# sourceMappingURL=main.js.map