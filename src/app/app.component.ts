import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    users: any[] = [];

    ngOnInit(): void {
        this.users.push(new User('jantje', 'Jan', 'Peeters', 'M', 'jan@ucll.be'));
        this.users.push(new User('annie', 'An', 'Goossens', 'F', 'an@ucll.be'));
    }

}

class User {
    constructor(public nickName: string, public firstName: string, public lastName: string, public gender: string, public email: string) {
    }
}
