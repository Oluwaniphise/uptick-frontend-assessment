import React from "react";
import { MovieDetails } from "./MovieDetails";
import { FaTimes } from "react-icons/fa";
export const MovieDetailModal = ({ item, setShowMovieModal }) => {
  return (
    <section>
      {/* <!-- Main modal --> */}
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-3 max-w-3xl">
            <div className="absolute top-[1rem] right-[1rem]">
                <FaTimes className="w-[3rem] cursor-pointer" onClick={()=> setShowMovieModal(false)} />
            </div>
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-1  rounded-t">
              {/*body*/}
              <div className="relative text-black text-center p-[1rem] md:p-[2rem] flex-auto">
                <div className="w-full max-w-xl grid  mt-[1rem]">
                  {/* <label className='text-xl mb-3 font-[700]'>Edit Bio</label> */}
                  <MovieDetails item={item} />

                 
                </div>
              </div>{" "}
              {/*footer*/}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-65 fixed inset-0 z-40 bg-[rgba(0,0,0,0.5)]"></div>
    </section>
  );
};
