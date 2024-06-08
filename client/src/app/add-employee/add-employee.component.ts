import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent {
    employee = {
        name: '',
    };

    constructor(private dataService: DataService) {}

    ngOnInit(): void {}

    onSubmit() {
        console.log(this.employee);
        this.dataService.postRequest(this.employee).subscribe(
            (response) => {
                console.log('Dati del dipendente inviati al server:', response);
                this.employee.name = '';
            },
            (error) => {
                console.error(error);
            }
        );
        return alert(this.employee.name + 'aggiunto alla lista');
    }
}
