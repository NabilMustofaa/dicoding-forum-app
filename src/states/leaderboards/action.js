import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};

function receiveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function asyncReceiveLeaderboards() {
  return async function (dispatch) {
    dispatch(showLoading());
    const leaderboards = await api.getLeaderboards();
    dispatch(receiveLeaderboardsActionCreator(leaderboards));
    dispatch(hideLoading());
  };
}

export { ActionType, asyncReceiveLeaderboards, receiveLeaderboardsActionCreator };
