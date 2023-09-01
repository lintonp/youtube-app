// import { useState } from "react";
import Comment from "./Comment";
import CommentReplies from "./CommentReplies";

const CommentsList = ({ comments }) => {
  //   const [showReplies, setShowReplies] = useState(false);
  return (
    <div className="border-l-2 border-gray-300">
      {comments.map((item) => {
        return (
          <>
            <Comment name={item.name} comment={item.comment} />
            {item.replies.length > 0 && <CommentReplies item={item.replies} />}
          </>
        );
      })}
      {/* <>
            <Comment name={item.name} comment={item.comment} />
            {item.replies.length > 0 && showReplies ? (
              <CommentReplies item={item.replies} />
            ) : (
              <button
                className="ml-10 text-blue-600 font-medium"
                onClick={setShowReplies(true)}
              >
                Reply {item.replies.length}
              </button>
            )}
          </> */}
    </div>
  );
};

export default CommentsList;
