import CloseIcon from "../assets/close.png";
import MoreIcon from "../assets/more.png";

const PostHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        {/* Title with responsive font size */}
        <h2 className="text-gray-600 mb-2 text-lg sm:text-xl md:text-2xl">
          Suggested
        </h2>
        <div className="flex items-center">
          {/* More Icon with responsive sizing */}
          <img
            src={MoreIcon}
            className="h-8 w-8 sm:h-10 sm:w-10 mb-2 mr-2"
            alt="More"
          />
          {/* Close Icon with responsive sizing */}
          <img
            src={CloseIcon}
            alt="Close"
            className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer mb-2 fill-black p-1 rounded-full"
          />
        </div>
      </div>
      {/* Border at the bottom */}
      <div className="border-b border-gray-100 shadow-sm"></div>
    </>
  );
};

export default PostHeader;
