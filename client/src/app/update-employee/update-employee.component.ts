import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
    selector: 'app-update-employee',
    templateUrl: './update-employee.component.html',
    styleUrls: ['./update-employee.component.scss'],
})
export class UpdateEmployeeComponent implements OnInit {
    employee: any = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dataService: DataService
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.dataService.getRequest().subscribe((data: any) => {
                this.employee = data.find(
                    (emp: any) => emp.id === parseInt(id)
                );
            });
        }
    }

    onSubmit(): void {
        this.dataService
            .updateRequest(this.employee.id, this.employee)
            .subscribe(() => {
                this.router.navigate(['/employees']);
            });
    }

    onCancel(): void {
        this.router.navigate(['/employees']);
    }
}
