import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { EmployeeDataService } from '../../services/employee-data.service';

@Component({
  selector: 'app-get-employee',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './get-employee.component.html',
  styleUrl: './get-employee.component.css'
})

export class GetEmployeeComponent {
  employees: any[] = [];
  employeeForm: FormGroup;
  editEmployeeForm: FormGroup;
  selectedEmployee: any = null;

  constructor(private fb: FormBuilder, private employeeService: EmployeeDataService) {
    this.employeeForm = new FormGroup({
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      email: new FormControl(null),
      mobileNo: new FormControl(null),
      Gender: new FormControl('Male'),
      city: new FormControl(null),
      Adress: new FormControl(null)
    });

    this.editEmployeeForm = new FormGroup({
      _id: new FormControl(null),
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      email: new FormControl(null),
      mobileNo: new FormControl(null),
      Gender: new FormControl('Male'),
      city: new FormControl(null),
      Adress: new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data.data;
    });
  }

  addEmployee(): void {
    this.employeeService.addEmployee(this.employeeForm.value).subscribe(() => {
      this.loadEmployees();
      this.employeeForm.reset();
      alert('Employee added successfully!');
    });
  }

  deleteEmployee(employeeId: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(employeeId).subscribe(() => {
        this.loadEmployees();
        alert('Employee deleted successfully!');
      });
    }
  }

  selectEmployee(employee: any): void {
    this.selectedEmployee = employee;
    this.editEmployeeForm.patchValue(employee);
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.editEmployeeForm.value._id, this.editEmployeeForm.value).subscribe(() => {
      this.loadEmployees();
      this.selectedEmployee = null; 
      alert('Employee updated successfully!');
    });
  }

  cancelUpdate(): void {
    this.selectedEmployee = null;
    this.editEmployeeForm.reset();
  }
}

  

