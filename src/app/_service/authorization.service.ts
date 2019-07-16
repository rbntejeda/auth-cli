import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Authorization } from '../_class/authorization';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {

    resource = `${environment.endpoint}/admin/authorization`;

    constructor(
        private http: HttpClient,
        private sessionService: AuthService
    ) { }

    // GetAll(params?) {
    //     const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
    //     return this.http.get<Authorization[]>(this.resource, { params, observe: "response", headers });
    // }

    // GetByPk(id) {
    //     const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
    //     return this.http.get<Authorization>(`${this.resource}/${id}`, { headers })
    // }

    Create(model: Authorization) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.post<Authorization>(this.resource, model, { headers });
    }

    // Update(id: number, model: Authorization) {
    //     const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
    //     return this.http.put<Authorization>(`${this.resource}/${id}`, model, { headers });
    // }

    Delete(id: number) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.delete(`${this.resource}/${id}`, { headers });
    }
}