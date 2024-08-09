import React from "react";

const Error = ({ errorMessage }) => {
  return (
    <div>
      {errorMessage && errorMessage.message ? (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-6"
          role="alert"
        >
          <strong className="font-bold">Hiba!</strong>
          <span className="block sm:inline"> {errorMessage.message}</span>
        </div>
      ) : null}
    </div>
  );
};

export default Error;
