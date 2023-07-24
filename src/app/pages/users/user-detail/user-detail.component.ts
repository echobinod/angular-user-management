import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/lib/interfaces';
import { getUsers } from 'src/app/store/selectors/user.selector';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
    userId: string | undefined;
    users: User[] = [];
    user: User | undefined;

    constructor(private store: Store, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.userId = params['id'];
        });

        this.store.select(getUsers).subscribe((users: User[]) => {
            this.users = users;

            this.user = this.users.find((user) => user.id === this.userId);
        });
    }
}
