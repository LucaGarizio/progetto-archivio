import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
    data: any;

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.dataService.getRequest().subscribe((response) => {
            this.data = response;
        });
    }

    updateEmployee() {}

    removeEmployee(id: number) {
        console.log(id);
        this.dataService.deleteRequest(id).subscribe((response) => {
            return location.reload();
        });
    }
}
