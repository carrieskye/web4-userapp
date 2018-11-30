import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {User} from './user';

@Injectable()
export class UserService {

    private getUsersURL = '/api/Controller?action=GetUsers';
    private updateUserURL = '/api/Controller?action=UpdateUser';


    constructor(private http: HttpClient) {
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.getUsersURL);
    }

    updateUser(user: User): Observable<User[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put<User[]>(this.updateUserURL, user, httpOptions);
    }

}
