import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/lib/interfaces';
import { saveUser } from 'src/app/store/actions/user.action';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
    departments = ['Marketing', 'Management', 'Maintenance'];
    public userCreateForm!: FormGroup;

    constructor(private store: Store<User>, private router: Router) {}

    ngOnInit(): void {
        this.userCreateForm = new FormGroup({
            firstName: new FormControl({ value: '', disabled: false }, [Validators.required]),
            lastName: new FormControl({ value: '', disabled: false }, [Validators.required]),
            username: new FormControl({ value: '', disabled: false }, [Validators.required]),
            department: new FormControl({ value: '', disabled: false }, [Validators.required]),
            isAdmin: new FormControl({ value: false, disabled: false }),
        });
    }

    onSubmit(createDirective: FormGroupDirective) {
        if (this.userCreateForm.valid) {
            const formData: User = {
                firstName: this.userCreateForm.value.firstName,
                lastName: this.userCreateForm.value.lastName,
                username: this.userCreateForm.value.username,
                department: this.userCreateForm.value.department,
                isAdmin: this.userCreateForm.value.isAdmin,
            };

            this.store.dispatch(saveUser({ user: formData }));

            createDirective.resetForm();
            this.userCreateForm.reset();
            this.router.navigate(['/users']);
        } else {
            this.userCreateForm.markAllAsTouched();
        }
    }
}
