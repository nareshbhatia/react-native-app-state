import React, { useContext, useReducer } from 'react';

// ---------- State ----------
export type GlobalState = {
    name: string;
};

export const initialGlobalState = {
    name: '',
};

// ---------- Actions ----------
export interface ChangeName {
    type: 'CHANGE_NAME';
    payload: {
        name: string;
    };
}

export type GlobalStateAction = ChangeName;
export type GlobalStateDispatch = (action: GlobalStateAction) => void;

// ---------- Reducer ----------
export const globalStateReducer = (
    state: GlobalState,
    action: GlobalStateAction
): GlobalState => {
    switch (action.type) {
        case 'CHANGE_NAME': {
            return { ...state, name: action.payload.name };
        }
    }
};

// ---------- Context ----------
const GlobalStateContext = React.createContext<GlobalState>(initialGlobalState);

const GlobalDispatchContext = React.createContext<GlobalStateDispatch>(() => {
    return;
});

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
const GlobalStateProvider: React.FC = ({ children }) => {
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
