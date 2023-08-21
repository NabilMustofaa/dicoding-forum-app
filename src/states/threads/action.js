/**
 * @TODO: Define all the actions (creator) for the threads state
 */

import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_UPVOTE_THREAD: 'TOGGLE_UPVOTE_THREAD',
  TOGGLE_DOWNVOTE_THREAD: 'TOGGLE_DOWNVOTE_THREAD',
  TOGGLE_NEUTRAL_THREAD: 'TOGGLE_NEUTRAL_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function toggleUpvoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDownvoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleNeutralThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, body, category = '' }) {
  return async (dispatch) => {
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleUpvoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleUpvoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleUpvoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncToggleDownvoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleDownvoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleDownvoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncToggleNeutralThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleNeutralThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleUpvoteThreadActionCreator,
  toggleDownvoteThreadActionCreator,
  toggleNeutralThreadActionCreator,
  asyncAddThread,
  asyncToggleUpvoteThread,
  asyncToggleDownvoteThread,
  asyncToggleNeutralThread,
};
