"option strict" //turns off the ability to create a variable without using var or let
class Student {
    name;
    favcolor;
    favnumber;
    //types of pareameter not needed in constructor
    //if we don't put parameters in the constructor,
    //then we don't need the parameters passed into the
    //right side below - we would put actual values in
    //to use for hte default
    constructor(name, favcolor, favnumber) {
        this.name = name;
        this.favcolor = favcolor;
        this.favnumber = favnumber;
    }

    log() {
        console.log(this.name, this.favcolor, this.favnumber);
    }
}

let students = [
    //enter values for students
    //if we used a default constructor with no parameters, but
    //assigned this.favcolor = blue, by default, fred would be blue
    //and we wouldn't enter green here
    new Student("Fred", "green", 8),
    new Student("Wilma", "red", 1),
    new Student("Barney", "blue", 7),
    new Student("Betty", "orange", 3),
    new Student("Pebbles", "pink", 2)
    // fred.name = "Fred";//and assume freds favcolor and favnumber are in the 
    //default constructor - see above comment

];
const save = () => {
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let number = document.getElementById("number").value;
    
    let student = new Student(name, color, number);
    students.push(student);
    console.log(students);
}

const clicked = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let s of students) {
        let row = "<tr>";
        row += `<td>${s.name}</td>`;
        row += `<td>${s.favcolor}</td>`;
        row += `<td>${s.favnumber}</td>`;
        row += "</tr>";
        tbody.innerHTML += row;
    }
    }

    