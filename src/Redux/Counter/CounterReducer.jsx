import { DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER } from "./CounterActionType";

const initialState = {
    counters: {} 
};

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                counters: {
                    ...state.counters,
                    [action.payload]: (state.counters[action.payload] || 0) + 1
                }
            };

        case DECREMENT_COUNTER:
            return {
                ...state,
                counters: {
                    ...state.counters,
                    [action.payload]: Math.max((state.counters[action.payload] || 0) - 1, 0) 
                    //منفی نشه شمارندم
                }
            };

        case RESET_COUNTER:
            return {
                ...state,
                counters: {
                    ...state.counters,
                    [action.payload]: 0
                }
            };

        default:
            return state;
    }
};

export default CounterReducer;
