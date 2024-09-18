import PostReactions from "./PostReactions";
import PostHeader from "./PostHeader";
import PostInfo from "./PostInfo";
import PostAction from "./PostAction";

const PostCard = () => {
  return (
    <div className="max-w-full sm:max-w-[600px] mx-auto bg-white rounded-lg p-4 sm:p-6 mb-3 mt-4 shadow-md sm:shadow-[0_-5px_15px_rgba(0,0,0,0.1)]">
      <PostHeader />
      <PostInfo />
      <PostReactions />
      <PostAction />
    </div>
  );
};

export default PostCard;
