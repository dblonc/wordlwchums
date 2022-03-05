import { connect } from 'react-redux';
import DailyPage  from './daily';
import { receiveGuess } from '../../../actions/game_actions';
import { withRouter } from 'react-router';

// const mSTP = (state) => ({

// });

const mDTP = (dispatch) => {
    return {
        receiveGuess: guess => dispatch(receiveGuess(guess))
    }
};

export default withRouter(connect(mDTP)(DailyPage));