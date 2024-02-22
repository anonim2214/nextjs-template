import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { popupReducer } from '@/redux/popup/reducer';

const ACTIONS_TO_HIDE = [
];

export const store = configureStore({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                // // Ignore these action types
                ignoredActions: [],
                // Ignore these field paths in all actions
                ignoredActionPaths: [],
                // // Ignore these paths in the state
                ignoredPaths: [],
            },
        }),
    reducer: {
        popup: popupReducer,
    },
    devTools: { predicate: (state, action) => !ACTIONS_TO_HIDE.includes(action.type) },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
