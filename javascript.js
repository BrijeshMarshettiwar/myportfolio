var name = 'Brijesh';
var age = 21;
var school = true;
var college = null;
var marriage = undefined;

let students = {
    name: 'Brijesh',
    age: 21,
    school: true,
    college: null
};
students.marriage = false;
students.college = true
if(students.college == false){
    console.log(1)
}else if(students.college == true){
    console.log(2)
}
else if(students.college == null){
    console.log(3)
}else{
    console.log("College not found.");
}
switch (students.college) {
    case true:
        console.log('switch block true')
        break;
    case false:
        console.log('switch block false')
        break;

    case null:
        console.log('switch block null')
        break;

    default:
        console.log("College not found.");
        break;
}
