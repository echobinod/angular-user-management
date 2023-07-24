import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/lib/interfaces';

@Injectable({ providedIn: 'root' })
export class UserService {
    protected basePath = environment.apiUrl;
    constructor(protected httpClient: HttpClient) {}

    public getUserListUsingGET() {
        return this.httpClient.get<User>(`${this.basePath}/user/list`);
    }

    public saveUserUsingPOST(user: User) {
        return this.httpClient.post<User>(`${this.basePath}/user/save`, user);
    }

    public getUserByIdUsingGET(id: string) {
        return this.httpClient.get<User>(`${this.basePath}/user/${id}`);
    }
}
