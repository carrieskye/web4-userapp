import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {User} from './user';

@Injectable()
export class UserService {

    private usersURL = 'http://localhost:8080/Controller?action=GetUsers';

    constructor(private http: HttpClient) {
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.usersURL);
    }
}
