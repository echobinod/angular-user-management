import { v4 as uuidv4 } from 'uuid';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/lib/interfaces';
import { initialUserState, UserState } from 'src/app/store/states/user.state';
import * as UserActions from 'src/app/store/actions/user.action';

const userReducer = createReducer(
    initialUserState,
    on(UserActions.saveUser, (state, { user }) => {
        const newUser: User = {
            ...user,
            id: uuidv4(),
        };
        return {
            ...state,
            users: [...state.users, newUser],
        };
    }),
);

export function reducer(state: UserState | undefined, action: Action) {
    return userReducer(state, action);
}
