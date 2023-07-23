import { User } from 'src/app/lib/interfaces';

export interface UserState {
    users: User[];
}

export const initialUserState: UserState = {
    users: [],
};
