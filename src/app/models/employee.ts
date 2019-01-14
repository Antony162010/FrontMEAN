export class Employee {

    constructor(_id = "", name = "", office = "", position = "", salary = 0){
        this._id = _id;
        this.name = name;
        this.office = office;
        this.position = position;
        this.salary = salary;
    }

    _id: String;
    name: String;
    position: String;
    office: String;
    salary: Number;
}
