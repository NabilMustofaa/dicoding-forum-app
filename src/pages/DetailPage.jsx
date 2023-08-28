import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThreadDetail from '../components/ThreadDetail';
import CommentList from '../components/CommentList';
import {
  asyncReceiveThreadDetail, asyncAddComment,
} from '../states/threadDetail/action';
import CommentInput from '../components/CommentInput';

function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    threadDetail = null,
    authUser,
  } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onAddComment = ({ content }) => {
    dispatch(asyncAddComment({ content, threadId: id }));
  };

  if (threadDetail === null) {
    return null;
  }

  const threadList = {
    ...threadDetail,
    user: threadDetail.owner,
    authUser: authUser.id,
  };
  return (
    <section className="w-full justify-center px-12 bg-gray-50 gap-3 py-4">
      <ThreadDetail thread={threadList} />
      <div className="flex flex-row justify-between items-center w-full my-4">
        <div className="border-b-2 border-gray-200 my-2 h-1 w-1/3" />
        <p className="text-xl font-semibold text-gray-700">Comments</p>
        <div className="border-b-2 border-gray-200 my-2 h-1 w-1/3" />
      </div>

      <div className="flex flex-col justify-between w-full">
        <CommentInput addComment={onAddComment} />
        <CommentList comments={threadDetail.comments} />
      </div>
    </section>
  );
}

export default DetailPage;
