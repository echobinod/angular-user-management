import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent, UserDetailComponent, UserListComponent } from 'src/app/pages/users';
import { UserRoutingModule } from './user-routing.module';
import { BreadcrumbComponent } from 'src/app/lib/components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [UserCreateComponent, UserDetailComponent, UserListComponent, BreadcrumbComponent],
    imports: [CommonModule, UserRoutingModule, ReactiveFormsModule],
    bootstrap: [UserListComponent],
})
export class UserModule {}
