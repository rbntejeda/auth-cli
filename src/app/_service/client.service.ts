import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Client } from '../_class/client';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    resource = `${environment.endpoint}/admin/client`;

    constructor(
        private http: HttpClient,
        private sessionService: AuthService
    ) { }

    GetAll(params?) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.get<Client[]>(this.resource, { params, observe: "response", headers });
    }

    GetByPk(id) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.get<Client>(`${this.resource}/${id}`, { headers })
    }

    Create(model: Client) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.post<Client>(this.resource, model, { headers });
    }

    Update(id: number, model: Client) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.put<Client>(`${this.resource}/${id}`, model, { headers });
    }

    Delete(id: number) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.delete(`${this.resource}/${id}`, { headers });
    }
}