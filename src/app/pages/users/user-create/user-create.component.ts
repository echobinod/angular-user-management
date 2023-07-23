import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
    departments = ['Marketing', 'Management', 'Maintenance'];
    public userCreateForm!: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

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
            //
            console.log(this.userCreateForm.value);

            createDirective.resetForm();
            this.userCreateForm.reset();
        } else {
            this.userCreateForm.markAllAsTouched();
        }
    }
}
