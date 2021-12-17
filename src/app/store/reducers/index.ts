import { ActionReducerMap } from '@ngrx/store';
import { appReducer } from './app.reducer';
import { AppState } from 'src/app/app.module';

export const reducers: ActionReducerMap<AppState> = {
  app: appReducer,
};
