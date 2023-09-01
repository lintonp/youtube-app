import CommentsList from "./CommentsList";

const CommentReplies = (props) => {
  return (
    <div className="mx-2 mb-2 mt-1">
      <CommentsList comments={props.item} />
    </div>
  );
};

export default CommentReplies;
