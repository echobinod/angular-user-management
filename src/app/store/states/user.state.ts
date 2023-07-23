import { User } from 'src/app/lib/interfaces';

export interface UserState {
    users: User[];
}

export const initialUserState: UserState = {
    users: [
        { id: '123', firstName: 'John', lastName: 'Doe', username: 'john123', department: 'Marketing', isAdmin: true },
    ],
};
