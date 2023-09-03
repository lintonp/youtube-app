// import { useState } from "react";
import Comment from "./Comment";
import CommentReplies from "./CommentReplies";
import { generateRandomString } from "../Utils/Helpers";

const CommentsList = ({ comments }) => {
  //   const [showReplies, setShowReplies] = useState(false);
  return (
    <div className="border-l-2 border-gray-300">
      {comments.map((item) => {
        return (
          <div key={generateRandomString(20)}>
            <Comment name={item.name} comment={item.comment} />
            {item.replies.length > 0 && <CommentReplies item={item.replies} />}
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
