

function Error() {
 
  return (
    <>
      <div className=" min-h-screen  justify-center flex flex-col items-center bg-black overflow-x-auto">
        <div className="  flex justify-center items-center text-red-600 text-[10rem] lg:text-[15rem] font-bold ">
          <p>404</p>
        </div>

        <div class="flex text-center  mx-10 p-5 text-[1.15rem] lg:text-[1.3rem] rounded-xl bg-white text-9xl mb-8">
          <p>
          Oops! The page you are looking for could not be found 😢
          </p>
        </div>
        
        <div>
          <div className="mb-10">
          <button
            className="mt-5 px-6 py-3 mr-32  bg-blue-500 text-white rounded-xl hover:bg-blue-700"
          
          >
            Previous  Page {" "}
          </button>
          <button
            className="mt-5  ml-24 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-700"
          
          >
             Home  Page {" "}
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;