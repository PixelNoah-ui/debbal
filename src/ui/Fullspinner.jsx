function Fullspinner() {
  return (
    <div className="flex justify-center items-center inset-0 absolute bg-gray-900">
      <div className="relative">
        <div className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 animate-spin blur-lg opacity-70"></div>

        <div className="w-20 h-20 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>

        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-md"></div>
      </div>
    </div>
  );
}

export default Fullspinner;
