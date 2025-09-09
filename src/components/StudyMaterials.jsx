import React from "react";

function StudyMaterials() {
  // Replace with your real Google Drive links per semester
  const semesterLinks = {
    1: "https://srujanmp.github.io/notes/",
    2: "https://srujanmp.github.io/notes/",
    3: "https://srujanmp.github.io/notes/",
    4: "https://srujanmp.github.io/notes/",
    5: "https://srujanmp.github.io/notes/",
    6: "https://srujanmp.github.io/notes/",
    7: "https://srujanmp.github.io/notes/",
    8: "https://srujanmp.github.io/notes/",
  };

  const handleRedirect = (sem) => {
    window.open(semesterLinks[sem], "_blank"); // open in new tab
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Select Your Semester</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.keys(semesterLinks).map((sem) => (
          <button
            key={sem}
            onClick={() => handleRedirect(sem)}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Semester {sem}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StudyMaterials;
