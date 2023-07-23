import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserCreateComponent, UserDetailComponent, UserListComponent } from 'src/app/pages/users';

const routes: Routes = [
    { path: '', component: UserListComponent },
    { path: 'create', component: UserCreateComponent },
    { path: 'detail/:id', component: UserDetailComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class UserRoutingModule {}
