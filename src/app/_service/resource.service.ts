import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Resource } from '../_class/resource';

@Injectable({
    providedIn: 'root'
})
export class ResourceService {

    resource = `${environment.endpoint}/admin/resource`;

    constructor(
        private http: HttpClient,
        private sessionService: AuthService
    ) { }

    GetAll(params?) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.get<Resource[]>(this.resource, { params, observe: "response", headers });
    }

    GetByPk(id) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.get<Resource>(`${this.resource}/${id}`, { headers })
    }

    Create(model: Resource) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.post<Resource>(this.resource, model, { headers });
    }

    Update(id: number, model: Resource) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.put<Resource>(`${this.resource}/${id}`, model, { headers });
    }

    Delete(id: number) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.delete(`${this.resource}/${id}`, { headers });
    }
}