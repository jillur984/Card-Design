import jillur from "../assets/jillu.jpg";
import RestAPI from "../assets/RestAPI.png";
import worldIcon from '../assets/world.png';

const PostInfo = () => {
  return (
    <>
      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-3 p-4 mx-auto w-full max-w-3xl">
        {/* User Image */}
        <img
          src={jillur}
          alt="Jillur Rahman"
          className="rounded-full w-10 h-10 mt-3.5 md:w-12 md:h-12"
        />

        {/* User Info */}
        <div className="flex flex-col mb-2">
          <h2 className="font-semibold text-gray-800 text-sm md:text-base">
            Jillur Rahman.<span className="text-gray-400"> 3rd +</span>
          </h2>
          <h1 className="text-gray-400 text-xs md:text-sm">
            React Native Developer | 3+ Years of Experience | Former Tea...
          </h1>
          <div className="flex items-center text-gray-500 text-xs">
            <span>5d.</span>
            <img
              src={worldIcon}
              alt="World Icon"
              className="w-2.5 h-2.5 ml-1 md:w-3 md:h-3"
            />
          </div>
        </div>

        {/* Follow Button */}
        <div className="flex mt-2 md:mt-0 md:ml-auto">
          <span className="text-blue-700 font-medium">+</span>
          <button className="text-blue-700 font-medium ml-1">Follow</button>
        </div>
      </div>

      {/* Post Text */}
      <p className="leading-7 md:leading-8 text-gray-700 text-sm md:text-base px-4 md:px-0">
        Goodbye Try-Catch! <br /> Introducing The Proposed Safe Assignment
        Operator (?==) in Javascript ...more{" "}
      </p>

      {/* Post Image */}
      <img
        src={RestAPI}
        alt="Post Image"
        className="w-full h-auto py-2 object-cover rounded-md max-w-3xl mx-auto"
      />
    </>
  );
};

export default PostInfo;

