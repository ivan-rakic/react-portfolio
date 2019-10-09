import { NEW_MESSAGE } from '../actions/types';

const DEFAULT_MESSAGE = { items: [] };

const messageReducers = (state = DEFAULT_MESSAGE, action) => {
    switch(action.type) {
        case NEW_MESSAGE:
            return {...state, items: [...state.items, action.item] };
        default:
            return state;
    }
}

export default messageReducers;