import { Component, OnInit } from "@angular/core";
import { EmployeesService } from "src/app/services/employees/employees.service";
import { NgForm } from "@angular/forms";
import { Employee } from "src/app/models/employee";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"]
})
export class EmployeesComponent implements OnInit {
  nuevo =[];
  constructor(private employeesService: EmployeesService) {}

  ngOnInit() {
    this.getEmployees();
  }

  addEmployee(form: NgForm) {
    this.employeesService.insertEmployee(form.value).subscribe(res => {
      this.resetForm(form);
      this.getEmployees();
    });
  }

  getEmployees() {
    this.employeesService.getEmployees().subscribe(res => {
      this.employeesService.employees = res as Employee[];
      console.log(res);
    });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeesService.selectedEmployee = new Employee();
    }
  }
}
