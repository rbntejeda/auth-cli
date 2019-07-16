import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { User } from '../_class/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    resource = `${environment.endpoint}/admin/user`;

    constructor(
        private http: HttpClient,
        private sessionService: AuthService
    ) { }

    GetAll(params?) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.get<User[]>(this.resource, { params, observe: "response", headers });
    }

    GetByPk(id) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.get<User>(`${this.resource}/${id}`, { headers })
    }

    Create(model: User) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.post<User>(this.resource, model, { headers });
    }

    Update(id: number, model: User) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.put<User>(`${this.resource}/${id}`, model, { headers });
    }

    Delete(id: number) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.delete(`${this.resource}/${id}`, { headers });
    }
}