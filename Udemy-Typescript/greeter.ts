/**
 * Created by OsLegend23 on 14/08/2016.
 */
function greeter(person: string){
    return 'Hello, ' + person;
}

var user = 'Alejandro';

document.body.innerHTML = greeter(user);