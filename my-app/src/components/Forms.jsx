import React, { useState } from "react";
import PersonalInfo from "./forms/PersonalInfo";
import AcademicInfo from "./forms/AcademicInfo";
import instance from "./axios/Axios";
const Forms = () => {
  const [name, setName] = useState("");
  const [flag, setFlag] = useState(true);
  const [next, setNext] = useState(false);
  const [father, setFather] = useState("");
  const [age, setAge] = useState("");
  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [cgpa, setGPA] = useState("");
  const [selectedFile, setSelectedFile] = useState([]);
  const [submittedData, setSubmittedData] = useState(null);

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };

  const handleCGPAChange = (e) => {
    setGPA(e.target.value);
  };

  const handleUnivChange = (e) => {
    setUniversity(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFatherNameChange = (e) => {
    setFather(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleNextPage = () => {
    setFlag(false);
    setNext(true);
  };

  const handlePrevPage = () => {
    setFlag(true);
    setNext(false);
  };

  const handleFileChange = (e) => {
    setSelectedFile([...selectedFile, e.target.files[0]]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("father", father);
    formData.append("age", age);
    formData.append("degree", degree);
    formData.append("cgpa", cgpa);
    formData.append("university", university);
    for (let file of selectedFile) {
      formData.append("files[]", file);
    }
    setSubmittedData(formData);
    console.log("Form submitted:", formData);
    try {
      const response = await instance.post("API_ENDPOINT", formData);
      console.log("Form uploaded successfully:", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-80 rounded-2xl bg-slate-900">
        {flag && (
          <PersonalInfo
            handleNextPage={handleNextPage}
            handleNameChange={handleNameChange}
            handleFatherNameChange={handleFatherNameChange}
            handleAgeChange={handleAgeChange}
            handleFileChange={handleFileChange}
            name={name}
            father={father}
            age={age}
            selectedFile={selectedFile}
          />
        )}
        {next && (
          <AcademicInfo
            handlePrevPage={handlePrevPage}
            handleDegreeChange={handleDegreeChange}
            handleCGPAChange={handleCGPAChange}
            handleUnivChange={handleUnivChange}
            submit={handleSubmit}
            degree={degree}
            cgpa={cgpa}
            university={university}
          />
        )}
      </div>
      {submittedData && (
        <div className="mt-4 grid bg-blue-300 border rounder-xl">
          <h2 className="text-xl font-semibold mb-2">Submitted Data:</h2>
          <ul>
            {Array.from(submittedData.entries()).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong>{" "}
                {typeof value === "object" ? value.name : value}
              </li>
            ))}
            {selectedFile.map((file, index) => (
              <div key={index}>
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Selected File ${index + 1}`}
                />
                <p>{file.name}</p>
              </div>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Forms;
