import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.TOGGLE_UPVOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upvotes: thread.upvotes.includes(action.payload.userId)
              ? thread.upvotes.filter((id) => id !== action.payload.userId)
              : thread.upvotes.concat([action.payload.userId]),
            downvotes: thread.downvotes.includes(action.payload.userId)
              ? thread.downvotes.filter((id) => id !== action.payload.userId)
              : thread.downvotes,
          };
        }
        return thread;
      });
    case ActionType.TOGGLE_DOWNVOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upvotes: thread.upvotes.includes(action.payload.userId)
              ? thread.upvotes.filter((id) => id !== action.payload.userId)
              : thread.upvotes,
            downvotes: thread.downvotes.includes(action.payload.userId)
              ? thread.downvotes.filter((id) => id !== action.payload.userId)
              : thread.downvotes.concat([action.payload.userId]),
          };
        }
        return thread;
      });
    case ActionType.TOGGLE_NEUTRAL_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upvotes: thread.upvotes.includes(action.payload.userId)
              ? thread.upvotes.filter((id) => id !== action.payload.userId)
              : thread.upvotes,
            downvotes: thread.downvotes.includes(action.payload.userId)
              ? thread.downvotes.filter((id) => id !== action.payload.userId)
              : thread.downvotes,
          };
        }
        return thread;
      });
    default:
      return threads;
  }
}

export default threadsReducer;
