import React from "react";

const AcademicInfo = ({handlePrevPage,handleDegreeChange,handleCGPAChange,handleUnivChange,submit,degree,cgpa,university}) => {
  return (
    <div className="flex flex-col gap-2 p-8">
      <p className="text-center text-3xl text-gray-300 mb-4">
        Acadmic Information
      </p>
      <input
        className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 text-white"
        placeholder="Degree"
        value={degree}
        onChange={handleDegreeChange}
        required
      />
      <input
        className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 text-white"
        placeholder="CGPA"
        type="text"
        value={cgpa}
        onChange={handleCGPAChange}
        required
      />
      <input
        className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800  text-white"
        placeholder="University"
        type="text"
        value={university}
        onChange={handleUnivChange}
        required
      />
      
      <button
        onClick={handlePrevPage}
        className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95"
      >
        Previous Page
      </button>
      <button
        onClick={submit}
        className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95"
      >
        Submit
      </button>
    </div>
  );
};

export default AcademicInfo;
