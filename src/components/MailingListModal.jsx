import React from "react";

const MailingListModal = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center overflow-auto items-center"
    >
      <div className="w-[300px] sm:w-[480px] border border-[#DEAF07] bg-black bg-opacity-70 px-4 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto rounded-lg sm:px-10 ">
        <h1 className="text-2xl text-center pb-10">Mailing List</h1>
        <form action="">
          <input
            className="block p-3 pl-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#DEAF07] focus:ring-primary-500 focus:border-primary-500 dark:bg-black bg-opacity-50 dark:placeholder-gray-400 dark:text-[#D9D9D9]  dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Enter your email"
            type="email"
            id="email"
            required=""
          />

          <div className="flex justify-between">
            <button
              type="submut"
              onClick={onClose}
              className="my-4 flex rounded bg-black text-[#D9D9D9] border border-[#DEAF07]"
            >
              Close
            </button>
            <button
              type="submut"
              className="my-4 flex rounded bg-black text-[#D9D9D9] border border-[#DEAF07]"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MailingListModal;
