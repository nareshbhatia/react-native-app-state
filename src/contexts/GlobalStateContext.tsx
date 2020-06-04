import React, { useContext, useReducer } from 'react';
import {
    GlobalState,
    GlobalStateAction,
    globalStateReducer,
} from './globalStateReducer';

export type GlobalStateDispatch = (action: GlobalStateAction) => void;

// ---------- Context ----------
// Note: Don't provide default value in context, it's not very useful.
// Provide it only in Context.Provider (see below).
// For details, see: https://kentcdodds.com/blog/how-to-use-react-context-effectively
const GlobalStateContext = React.createContext<GlobalState | undefined>(
    undefined
);

const GlobalDispatchContext = React.createContext<
    GlobalStateDispatch | undefined
>(undefined);

// ---------- Hooks ----------
function useGlobalState(): GlobalState {
    const state = useContext(GlobalStateContext);
    if (state === undefined) {
        throw new Error(
            'useGlobalState must be used within a GlobalStateProvider'
        );
    }
    return state;
}

function useGlobalDispatch(): GlobalStateDispatch {
    const dispatch = useContext(GlobalDispatchContext);
    if (dispatch === undefined) {
        throw new Error(
            'useGlobalDispatch must be used within a GlobalStateProvider'
        );
    }
    return dispatch;
}

// ---------- Provider ----------
const initialGlobalState = {
    name: '',
};

const GlobalStateProvider: React.FC = ({ children }) => {
    console.log('Rendering GlobalStateProvider');

    const [state, dispatch] = useReducer(
        globalStateReducer,
        initialGlobalState
    );

    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
};

export { GlobalStateProvider, useGlobalState, useGlobalDispatch };
