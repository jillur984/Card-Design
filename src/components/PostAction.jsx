import LikeIcon from "../assets/like-filled.svg";
import CommentIcon from "../assets/comment.svg";
import ShareIcon from "../assets/share.svg";
import SendIcon from "../assets/send.png";
import jillur from "../assets/jillu.jpg";

const PostAction = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between py-4 px-4 sm:px-6 bg-white shadow-md rounded-lg">
      {/* User Info */}
      <div className="flex items-center space-x-2 mb-4 sm:mb-0">
        <img src={jillur} className="rounded-full h-10 w-10" alt="User" />
        <span className="text-gray-600">▾</span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8">
        <button className="flex items-center gap-1 text-gray-600 text-xs font-medium hover:text-blue-800">
          <img className="w-5 h-5" src={LikeIcon} alt="Like" />
          Like
        </button>

        <button className="flex items-center gap-1 text-gray-600 text-xs font-medium hover:text-green-800">
          <img className="w-5 h-5" src={CommentIcon} alt="Comment" />
          Comment
        </button>

        <button className="flex items-center gap-1 text-gray-600 text-xs font-medium hover:text-blue-600">
          <img className="w-5 h-5" src={ShareIcon} alt="Repost" />
          Repost
        </button>

        <button className="flex items-center gap-1 text-gray-600 text-xs font-medium hover:text-blue-600">
          <img className="w-5 h-4.5" src={SendIcon} alt="Send" />
          Send
        </button>
      </div>
    </div>
  );
};

export default PostAction;
