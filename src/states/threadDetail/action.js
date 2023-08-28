/**
 * @TODO: Define all the actions (creator) for the talkDetail state
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  UPVOTE_THREAD_DETAIL: 'UPVOTE_THREAD_DETAIL',
  DOWNVOTE_THREAD_DETAIL: 'DOWNVOTE_THREAD_DETAIL',
  NEUTRAL_THREAD_DETAIL: 'NEUTRAL_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_UPVOTE_COMMENT: 'TOGGLE_UPVOTE_COMMENT',
  TOGGLE_DOWNVOTE_COMMENT: 'TOGGLE_DOWNVOTE_COMMENT',
  TOGGLE_NEUTRAL_COMMENT: 'TOGGLE_NEUTRAL_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function upvoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.UPVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function downvoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.DOWNVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function neutralThreadDetailActionCreator(userId) {
  return {
    type: ActionType.NEUTRAL_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function toggleUpvoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.TOGGLE_UPVOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function toggleDownvoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function toggleNeutralCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncToggleUpvoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleUpvoteCommentActionCreator(commentId, authUser.id));
    try {
      await api.toggleUpvoteComment(commentId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralCommentActionCreator(commentId, authUser.id));
    }
    dispatch(hideLoading());
  };
}

function asyncToggleDownvoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleDownvoteCommentActionCreator(commentId, authUser.id));

    try {
      await api.toggleDownvoteComment(commentId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralCommentActionCreator(commentId, authUser.id));
    }

    dispatch(hideLoading());
  };
}

function asyncToggleNeutralComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleNeutralCommentActionCreator(commentId, authUser.id));

    try {
      await api.toggleNeutralComment(commentId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralCommentActionCreator(commentId, authUser.id));
    }

    dispatch(hideLoading());
  };
}

function asyncAddComment(content) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const addedComment = await api.createComment(content);
      dispatch(addCommentActionCreator(addedComment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpvoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(upvoteThreadDetailActionCreator(authUser.id));
    try {
      await api.toggleUpvoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
      dispatch(neutralThreadDetailActionCreator(authUser.id));
    }
    dispatch(hideLoading());
  };
}

function asyncDownvoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(downvoteThreadDetailActionCreator(authUser.id));

    try {
      await api.toggleDownvoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
      dispatch(neutralThreadDetailActionCreator(authUser.id));
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(neutralThreadDetailActionCreator(authUser.id));

    try {
      await api.toggleNeutralVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  upvoteThreadDetailActionCreator,
  downvoteThreadDetailActionCreator,
  neutralThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncUpvoteThreadDetail,
  asyncDownvoteThreadDetail,
  asyncNeutralThreadDetail,
  asyncAddComment,
  asyncToggleUpvoteComment,
  asyncToggleDownvoteComment,
  asyncToggleNeutralComment,
  addCommentActionCreator,
};
