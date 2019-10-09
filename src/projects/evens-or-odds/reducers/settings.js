import { SET_GAME_STARTED, SET_SHOW_INSTRUCTIONS } from '../actions/types';

const DEFAULT_SETTINGS = {
    gameStarted: false,
    displayInstructions: false
};

const settingsReducer = (state = DEFAULT_SETTINGS, action) => {

    switch (action.type) {
        case SET_GAME_STARTED:
            return { ...state, gameStarted: action.gameStarted };
        case SET_SHOW_INSTRUCTIONS:
            return { ...state, displayInstructions: action.displayInstructions };

        default: return state;
    }
};

export default settingsReducer;