import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThreadInput from '../components/ThreadInput';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import {
  asyncAddThread,
  asyncToggleUpvoteThread,
  asyncToggleDownvoteThread,
  asyncToggleNeutralThread,
} from '../states/threads/action';
import ThreadsList from '../components/ThreadsList';
import Leaderboards from '../components/Leaderboards';

function HomePage() {
  const {
    threads = [],
    users = [],
    leaderboards = [],
    authUser,
  } = useSelector((states) => states); // @TODO: get threads, users, and authUser state from store

  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to populate threads and users data
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onAddThread = ({ title, body, category }) => {
    // @TODO: dispatch async action to add thread
    dispatch(asyncAddThread({ title, body, category })); // @TODO: clear input
  };

  const onUpvoteThread = (id) => {
    dispatch(asyncToggleUpvoteThread(id));
  };

  const onDownvoteThread = (id) => {
    dispatch(asyncToggleDownvoteThread(id));
  };

  const onNeutralVoteThread = (id) => {
    dispatch(asyncToggleNeutralThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className=" w-full flex flex-row justify-center px-12 bg-gray-50 gap-3">
      <div className="flex flex-col justify-between w-2/3">
        <ThreadInput addThread={onAddThread} />
        <ThreadsList threads={threadList} upVote={onUpvoteThread} downVote={onDownvoteThread} neutralVote={onNeutralVoteThread} />
      </div>

      <div className="w-1/3 mt-4">
        <Leaderboards leaderboards={leaderboards} />
      </div>
    </section>
  );
}

export default HomePage;
