import React, { useContext, useState } from "react";
import { Context } from "../context/ContextProvider";

function FormAddWorkout() {
  const { handleModal } = useContext(Context);

  return (
    <>
      {/* <!-- Main modal --> */}
      <div
        tabIndex="-1"
        className={
          "h-modal fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
        }
        aria-modal="true"
        role="dialog"
      >
        <div className="relative w-full h-full max-w-md p-4 md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={handleModal}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Create new workout
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="kindWorkout"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Muscle to work
                  </label>
                  <input
                    type="text"
                    name="kindWorkout"
                    id="kindWorkout"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-secondary outline-none focus:border-primary"
                    placeholder="triceps, back..."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="titleWorkout"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Title of workout
                  </label>
                  <input
                    type="text"
                    name="titleWorkout"
                    id="titleWorkout"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-secondary outline-none focus:border-primary"
                    placeholder="Up and down workout"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Duration
                  </label>
                  <input
                    type="number"
                    name="time"
                    id="time"
                    placeholder="23 min"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-secondary outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Description
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-secondary outline-none focus:border-primary "
                    placeholder="Short description"
                  ></textarea>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start"></div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg border border-secondary bg-transparent px-5 py-2.5 text-center text-sm font-medium text-mainBgColor transition-colors duration-500 hover:bg-mainBgColor hover:text-white focus:outline-none"
                >
                  Add new workout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormAddWorkout;
