const Generating = ({ className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base ${onClick ? 'cursor-pointer hover:bg-color-1/20 hover:border-color-1 hover:shadow-lg hover:shadow-color-1/20 transition-all duration-300' : ''}`}
    >
      {/* Click Me Icon */}
      <svg
        className="w-5 h-5 mr-4"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 13C10 14.1046 10.8954 15 12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13Z"
          fill="currentColor"
        />
        <path
          d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4Z"
          fill="currentColor"
        />
        <path
          d="M8 9H9V10H8V9ZM15 9H16V10H15V9Z"
          fill="currentColor"
        />
      </svg>
      Click to ask a question
    </div>
  );
};

export default Generating;
