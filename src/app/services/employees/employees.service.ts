import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "src/app/models/employee";
import { EmployeesComponent } from "src/app/components/employees/employees.component";

@Injectable({
  providedIn: "root"
})
export class EmployeesService {
  readonly URL_API = "http://localhost:3000/api/employees";
  selectedEmployee: Employee;
  employees: Employee[];
  
  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
  }

  getEmployees() {
    return this.http.get(this.URL_API);
  }

  insertEmployee(employee: Employee) {
    return this.http.post(this.URL_API, employee);
  }

  updateEmployee(employee: Employee) {
    return this.http.put(this.URL_API + `/${employee._id}`, employee);
  }

  deleteEmployee(_id: String) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
