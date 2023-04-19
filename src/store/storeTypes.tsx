import { manageStore, rootReducer } from './store';

export type RootStateType = ReturnType<typeof rootReducer>;
export type StoreType = ReturnType<typeof manageStore>;
export type DispatchType = StoreType['dispatch'];
