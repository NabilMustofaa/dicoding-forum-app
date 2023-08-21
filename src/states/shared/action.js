/**
 * @TODO: Define all the actions (creator) that uses a combination of actions from various domain
 */

import { showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
 
function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const talks = await api.getAllThreads();
      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(talks));
    } catch (error) {
      alert(error.message);
    }
    dispatch(showLoading());
  };
}

export default asyncPopulateUsersAndThreads;
