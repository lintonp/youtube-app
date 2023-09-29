import React, { useEffect } from "react";
import CommentsList from "./CommentsList";

import { COMMENTS_DATA } from "../Utils/CommentsData";
import { YOUTUBE_COMMENTS_API } from "../Utils/Constants";

const CommentsContainer = ({ id }) => {
  // const searchParams = new URLSearchParams(window.location.href);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const data = await fetch(YOUTUBE_COMMENTS_API);
    const json = await data.json();
    // console.log("comments", json);
  };

  return (
    <div className="m-2 mb-4 px-1 ml-8">
      <h1 className="font-bold mb-1">Comments:</h1>
      <div className="mx-2 divide-y divide-slate-200">
        <CommentsList comments={COMMENTS_DATA} />
      </div>
    </div>
  );
};

export default CommentsContainer;
