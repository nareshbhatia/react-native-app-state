// ---------- State ----------
export type GlobalState = {
    name: string;
};

// ---------- Actions ----------
export interface ChangeName {
    type: 'CHANGE_NAME';
    payload: {
        name: string;
    };
}

export type GlobalStateAction = ChangeName;

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
