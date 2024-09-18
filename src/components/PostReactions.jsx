import LikeIcon from "../assets/like-filled.svg";
import HeartIcon from "../assets/love.png";

const PostReactions = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-4 px-4 space-y-2 sm:space-y-0">
      {/* Reaction icons */}
      <div className="flex items-center space-x-2">
        <button className="flex items-center cursor-pointer">
          <img src={LikeIcon} alt="Like" className="w-6 h-4" />
          <img src={HeartIcon} alt="Heart" className="w-6 h-5 ml-[-12px]" />
          <span className="text-gray-600 ml-2">2,169</span>
        </button>
      </div>

      {/* Comments and Reposts */}
      <div className="flex items-center space-x-4 text-gray-600 text-sm">
        <span>1,173 comments</span>
        <span>172 reposts</span>
      </div>
    </div>
  );
};

export default PostReactions;
