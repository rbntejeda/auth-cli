import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { ResourceChildren } from '../_class/resourcechildren';

@Injectable({
    providedIn: 'root'
})
export class ResourceChildrenService {

    resource = `${environment.endpoint}/admin/resourcechildren`;

    constructor(
        private http: HttpClient,
        private sessionService: AuthService
    ) { }

    // GetAll(params?) {
    //     const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
    //     return this.http.get<ResourceChildren[]>(this.resource, { params, observe: "response", headers });
    // }

    // GetByPk(id) {
    //     const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
    //     return this.http.get<ResourceChildren>(`${this.resource}/${id}`, { headers })
    // }

    Create(model: ResourceChildren) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.post<ResourceChildren>(this.resource, model, { headers });
    }

    // Update(id: number, model: ResourceChildren) {
    //     const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
    //     return this.http.put<ResourceChildren>(`${this.resource}/${id}`, model, { headers });
    // }

    Delete(id: number) {
        const headers = new HttpHeaders({ Authorization: `${this.sessionService.getSession().token_type} ${this.sessionService.getSession().token}` });
        return this.http.delete(`${this.resource}/${id}`, { headers });
    }
}