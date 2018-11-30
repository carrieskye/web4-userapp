import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';

@Component({
    selector: 'app-users',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']

})
export class UserComponent implements OnInit {
    users: User[];
    selectedUser: User;

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getUsers()
            .subscribe(data => {
                    this.users = data;
                }
            );
    }

    selectUser(user: User): void {
        this.selectedUser = user;
    }

    updateUser(): void {
        this.userService.updateUser(this.selectedUser)
            .subscribe(data => {
                this.users = data;
                this.selectedUser = undefined;
            });
    }

}
