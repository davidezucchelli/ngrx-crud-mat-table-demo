import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { CrudState } from '../../crud.module';
import { elementsNotelReducer } from './elements-note.reducer';
import { elementsReducer } from './elements.reducer';
import { uiReducer } from './ui-reducer';

export const reducers: ActionReducerMap<CrudState> = {
  elements: elementsReducer,
  elementsNote: elementsNotelReducer,
  ui: uiReducer,
};

export const getCrud = createFeatureSelector<CrudState>('crud');
