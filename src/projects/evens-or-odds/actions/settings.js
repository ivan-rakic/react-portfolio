import { SET_GAME_STARTED, SET_SHOW_INSTRUCTIONS } from './types';

export const startGame = () => {
    return { type: SET_GAME_STARTED, gameStarted: true }
}

export const cancelGame = () => {
    return { type: SET_GAME_STARTED, gameStarted: false }
}

export const showInstructions = () => {
    return { type: SET_SHOW_INSTRUCTIONS, displayInstructions: true };
}

export const hideInstructions = () => {
    return { type: SET_SHOW_INSTRUCTIONS, displayInstructions: false };
}