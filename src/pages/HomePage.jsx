import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThreadInput from '../components/ThreadInput';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import { asyncAddThread, asyncToggleUpvoteThread, asyncToggleDownvoteThread } from '../states/threads/action';

function HomePage() {
  const {
    threads = [],
    users = [],
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

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.user),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <ThreadInput addThread={onAddThread} />
    </section>
  );
}

export default HomePage;