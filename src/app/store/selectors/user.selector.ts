import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from 'src/app/store/states/user.state';

export const USER_STATE_NAME = 'user';

export const selectUserState = createFeatureSelector<UserState>(USER_STATE_NAME);

export const getUsers = createSelector(selectUserState, (state: UserState) => state.users);
