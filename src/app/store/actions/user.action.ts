import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/lib/interfaces';

export const saveUser = createAction('[User] Save User', props<{ user: User }>());
