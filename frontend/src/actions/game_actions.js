import * as APIUtil from '../util/game_api_util';

export const RECEIVE_CURRENT_GUESS = 'RECEIVE_CURRENT_GUESS';

export const receiveGuess = guess =>({
    type: RECEIVE_CURRENT_GUESS,
    guess
});

export const createGuess = guess => dispatch =>(
    APIUtil.createGuess(guess).then(res =>{
        return dispatch(receiveGuess(res.data))
    })
)