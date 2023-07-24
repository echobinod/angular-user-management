import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/lib/interfaces';
import { getUsers } from 'src/app/store/selectors/user.selector';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
    users: User[] = [];

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.select(getUsers).subscribe((users: User[]) => {
            this.users = users;
        });
    }
}
