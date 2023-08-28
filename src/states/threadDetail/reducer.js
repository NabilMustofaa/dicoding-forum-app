import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.UPVOTE_THREAD_DETAIL:
      if (threadDetail.upVotesBy.includes(action.payload.userId)) {
        return {
          ...threadDetail,
          upVotesBy: threadDetail.upVotesBy.filter((id) => id !== action.payload.userId),
        };
      }
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.concat(action.payload.userId),
      };
    case ActionType.DOWNVOTE_THREAD_DETAIL:
      if (threadDetail.downVotesBy.includes(action.payload.userId)) {
        return {
          ...threadDetail,
          downVotesBy: threadDetail.downVotesBy.filter((id) => id !== action.payload.userId),
        };
      }
      return {
        ...threadDetail,
        downVotesBy: threadDetail.downVotesBy.concat(action.payload.userId),
      };
    case ActionType.NEUTRAL_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.filter((id) => id !== action.payload.userId),
        downVotesBy: threadDetail.downVotesBy.filter((id) => id !== action.payload.userId),
      };

    case ActionType.ADD_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.concat(action.payload.comment),
      };
    case ActionType.TOGGLE_UPVOTE_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            if (comment.upVotesBy.includes(action.payload.userId)) {
              return {
                ...comment,
                upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
              };
            }
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.concat(action.payload.userId),
              downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
            };
          }
          return comment;
        }),
      };
    case ActionType.TOGGLE_DOWNVOTE_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            if (comment.downVotesBy.includes(action.payload.userId)) {
              return {
                ...comment,
                downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
              };
            }
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
              downVotesBy: comment.downVotesBy.concat(action.payload.userId),
            };
          }
          return comment;
        }),
      };
    case ActionType.TOGGLE_NEUTRAL_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
              downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
            };
          }
          return comment;
        }),
      };
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
