
var cars = [ 
{'id': 1, 'model': 'Opel', 'color': 'red'},
{'id': 2, 'model': 'Opel', 'color': 'black'},
{'id': 3, 'model': 'BMW', 'color': 'black'},
{'id': 4, 'model': 'BMW', 'color': 'red'},
{'id': 5, 'model': 'BMW', 'color': 'white'},
{'id': 6, 'model': 'Subaru', 'color': 'black'},
{'id': 7, 'model': 'Hyundai', 'color': 'red'}];

var mas1 = [];

for (var i = 0; i < cars.length; i++) {
    var temp = []; 
    temp.id = cars[i].id;

    if(cars[i].color == 'red') {
      temp.title = cars[i].color + " car";
    } 
    else if(cars[i].color == 'black') {
      temp.title = cars[i].color + " car";
    } 
    else if(cars[i].model == 'BMW' && cars[i].color == 'red') {
      temp.title = cars[i].color + "Best car";
    } 
    else {
      temp.title = cars[i].color + " Car";
    }

    mas1.push(temp);
}

console.log(mas1);












