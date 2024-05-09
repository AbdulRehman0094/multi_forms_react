import React from "react";

const PersonalInfo = ({ handleNextPage, handleNameChange, handleFatherNameChange, handleAgeChange, handleFileChange ,name,father,age,selectedFile}) => {
  return (
    <div className="flex flex-col gap-2 p-8">
      <p className="text-center text-3xl text-gray-300 mb-4">
        Personal Information
      </p>
      <input
        className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 text-white"
        placeholder="Name"
        value={name}
        required
        onChange={handleNameChange}
      />
      <input
        className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 text-white"
        placeholder="Father Name"
        type="text"
        value={father}
        required
        onChange={handleFatherNameChange}
      />
      <input
        className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 text-white"
        placeholder="Age"
        type="number"
        required
        value={age}
        onChange={handleAgeChange}
      />
      <input
        type="file"
        // value={selectedFile.map(file => file.name).join(", ")}
        multiple
        onChange={handleFileChange}
        accept="image/*"
        className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 text-white"
      />
      <button
        onClick={handleNextPage}
        className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase  transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 text-white"
      >
        Next Page
      </button>
    </div>
  );
};

export default PersonalInfo;
