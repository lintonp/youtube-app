import React from "react";
import CommentsList from "./CommentsList";

import { COMMENTS_DATA } from "../Utils/CommentsData";

const CommentsContainer = () => {
  return (
    <div className="m-2 mb-4 px-1">
      <h1 className="font-bold mb-1">Comments:</h1>
      <div className="mx-2 divide-y divide-slate-200">
        <CommentsList comments={COMMENTS_DATA} />
      </div>
    </div>
  );
};

export default CommentsContainer;
