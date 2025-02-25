import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private http:HttpClient) { }

  //1. Get all employees
  getAllEmployees():Observable<any>{
    return this.http.get<any>("http://localhost:8000/getdata");
    }

    // get one employee by id
     getEmployeeById(_id:number):Observable<any>{
      return this.http.get<any>(`http://localhost:8000/getonedata/${_id}`);
     }

//add employee
addEmployee(employee: any): Observable<any> {
  return this.http.post<any>("http://localhost:8000/adddata", employee, {
    headers: new 
    HttpHeaders({ 'Content-Type': 'application/json' })
  });
}

// update api
updateEmployee(employeeId: number, employee: any): Observable<any> {
  return this.http.put<any>(`http://localhost:8000/updatedata/${employeeId}`, employee, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  });
}

// delete api
deleteEmployee(employeeId: number): Observable<any> {
  return this.http.delete<any>(`http://localhost:8000/deletedata/${employeeId}`);
}
}
