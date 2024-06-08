import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}

    getRequest(): Observable<any> {
        return this.http.get('http://localhost:3000/employees');
    }

    postRequest(data: any): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        console.log(data);
        return this.http.post('http://localhost:3000/employees', data);
    }

    updateRequest(id: any, data: any): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/employees/' + id, data);
    }

    deleteRequest(id: any): Observable<any> {
        console.log(id);
        return this.http.delete('http://localhost:3000/employees/' + id);
    }
}
