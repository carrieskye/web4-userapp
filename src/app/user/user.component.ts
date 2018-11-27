import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';

@Component({
    selector: 'app-users',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
    users: User[];

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getUsers()
            .subscribe(data => this.users = data);
    }

}
