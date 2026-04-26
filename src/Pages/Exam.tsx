// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // ✅ QUESTION TYPE
// type Question = {
//   id: number;
//   question: string;
//   option1: string;
//   option2: string;
//   option3: string;
//   option4: string;
// };

// // ✅ ANSWER TYPE
// type Answer = {
//   questionId: number;
//   selectedOption: string;
// };

// function Exam() {


//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [answers, setAnswers] = useState<Answer[]>([]);

//   const navigate = useNavigate();

//   // 🔥 LOAD QUESTIONS ONLY FROM LOCAL STORAGE
//   useEffect(() => {
//     const saved = localStorage.getItem("questions");

//     if (!saved) {
//       alert("Session expired");
//       navigate("/student");
//       return;
//     }

//     setQuestions(JSON.parse(saved));
//   }, []);

//   // 🔥 HANDLE OPTION SELECT
//   const handleSelect = (qId: number, option: string) => {
//     setAnswers(prev => [
//       ...prev.filter(a => a.questionId !== qId),
//       { questionId: qId, selectedOption: option }
//     ]);
//   };

//   // 🔥 SUBMIT EXAM
//   const handleSubmit = async () => {

//     const studentData = JSON.parse(localStorage.getItem("studentData") || "null");

//     if (!studentData) {
//       alert("Session expired");
//       navigate("/student");
//       return;
//     }

//     if (answers.length !== questions.length) {
//       alert("Please answer all questions");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:8082/student/submit", {
//         ...studentData,
//         answers
//       });

//       alert("Submitted Successfully");

//       // 🔥 CLEAR DATA AFTER SUBMIT
//       localStorage.removeItem("studentData");
//       localStorage.removeItem("questions");

//       navigate("/");

//     } catch (err) {
//       alert("Error submitting exam");
//     }
//   };

//   return (
//     <div>
//       <h2>Exam</h2>

//       {questions.map((q, index) => (
//         <div key={q.id} style={{ marginBottom: "20px" }}>
//           <p><b>{index + 1}. {q.question}</b></p>

//           {[
//             { key: "A", value: q.option1 },
//             { key: "B", value: q.option2 },
//             { key: "C", value: q.option3 },
//             { key: "D", value: q.option4 },
//           ].map(opt => (
//             <label key={opt.key} style={{ display: "block", marginBottom: "8px" }}>
//               <input
//                 type="radio"
//                 name={q.id.toString()}
//                 onChange={() => handleSelect(q.id, opt.key)}
//               />
//               {opt.value}
//             </label>
//           ))}
//         </div>
//       ))}

//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

// export default Exam;












import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// ✅ TYPES
type Question = {
  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
};

type Answer = {
  questionId: number;
  selectedOption: string;
};

function Exam() {

  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const navigate = useNavigate();

  // 🔥 LOAD QUESTIONS FROM LOCAL STORAGE
  useEffect(() => {
    const saved = localStorage.getItem("questions");

    if (!saved) {
      alert("Session expired");
      navigate("/student");
      return;
    }

    setQuestions(JSON.parse(saved));
  }, []);

  // 🔥 HANDLE OPTION SELECT
  const handleSelect = (qId: number, option: string) => {
    setAnswers(prev => [
      ...prev.filter(a => a.questionId !== qId),
      { questionId: qId, selectedOption: option }
    ]);
  };

  // 🔥 SUBMIT
  const handleSubmit = async () => {

    const studentData = JSON.parse(localStorage.getItem("studentData") || "null");

    if (!studentData) {
      alert("Session expired");
      navigate("/student");
      return;
    }

    if (answers.length !== questions.length) {
      alert("Please answer all questions");
      return;
    }

    try {
      await axios.post("http://localhost:8082/student/submit", {
        ...studentData,
        answers
      });

      alert("Submitted Successfully ✅");

      // 🔥 CLEAR DATA
      localStorage.removeItem("studentData");
      localStorage.removeItem("questions");

      navigate("/");

    } catch (err) {
      alert("Error submitting exam");
    }
  };

//  return (

//   <div className="min-h-screen bg-gray-100 p-4 md:p-8">

//     <div className="max-w-4xl mx-auto">

//       {/* HEADER */}
//       <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
//         Online Exam
//       </h2>

//       {/* QUESTIONS */}
//       {questions.map((q, index) => (
//         <div
//           key={q.id}
//           className="bg-white p-5 rounded-xl shadow mb-6"
//         >
//           {/* QUESTION */}
//           <p className="font-semibold text-lg mb-4">
//             {index + 1}. {q.question}
//           </p>

//           {/* OPTIONS */}
//           <div className="space-y-3">

//             {[
//               { key: "A", value: q.option1 },
//               { key: "B", value: q.option2 },
//               { key: "C", value: q.option3 },
//               { key: "D", value: q.option4 },
//             ].map(opt => {

//               const isSelected = answers.find(
//                 a => a.questionId === q.id && a.selectedOption === opt.key
//               );

//               return (
//                 <label
//                   key={opt.key}
//                   className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition
//                     ${isSelected ? "bg-blue-100 border-blue-500" : "hover:bg-gray-50"}
//                   `}
//                 >
//                   <input
//                     type="radio"
//                     name={q.id.toString()}
//                     checked={!!isSelected}
//                     onChange={() => handleSelect(q.id, opt.key)}
//                     className="accent-blue-600"
//                   />

//                   <span className="font-medium">
//                     {opt.key}. {opt.value}
//                   </span>
//                 </label>
//               );
//             })}

//           </div>
//         </div>
//       ))}

//       {/* SUBMIT BUTTON */}
//       <div className="text-center mt-6">
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
//         >
//           Submit Exam
//         </button>
//       </div>

//     </div>
//   </div>
// );


return (
  <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100">

    {/* 🔹 HEADER */}
    <div className="sticky top-0 z-10 bg-white shadow px-4 py-3 flex justify-between items-center">
      <h2 className="text-lg md:text-xl font-bold text-blue-700">
        📝 Online Exam
      </h2>

      <span className="text-sm text-gray-600">
        Total Questions: {questions.length}
      </span>
    </div>

    {/* 🔹 MAIN */}
    <div className="max-w-5xl mx-auto p-4 md:p-6">

      {/* 🔹 PROGRESS */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-2">
          Answered {answers.length} of {questions.length}
        </p>

        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{
              width: `${(answers.length / questions.length) * 100}%`
            }}
          ></div>
        </div>
      </div>

      {/* 🔹 QUESTIONS */}
      {questions.map((q, index) => (
        <div
          key={q.id}
          className="bg-white rounded-xl shadow-md p-5 mb-6 hover:shadow-lg transition"
        >
          {/* QUESTION */}
          <div className="flex justify-between items-center mb-4">
            <p className="font-semibold text-lg text-gray-800">
              Q{index + 1}. {q.question}
            </p>

            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
              #{index + 1}
            </span>
          </div>

          {/* OPTIONS */}
          <div className="grid gap-3">

            {[
              { key: "A", value: q.option1 },
              { key: "B", value: q.option2 },
              { key: "C", value: q.option3 },
              { key: "D", value: q.option4 },
            ].map(opt => {

              const isSelected = answers.find(
                a => a.questionId === q.id && a.selectedOption === opt.key
              );

              return (
                <label
                  key={opt.key}
                  className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition
                    ${isSelected
                      ? "bg-blue-100 border-blue-500"
                      : "hover:bg-gray-50"}
                  `}
                >
                  <input
                    type="radio"
                    name={q.id.toString()}
                    checked={!!isSelected}
                    onChange={() => handleSelect(q.id, opt.key)}
                    className="accent-blue-600"
                  />

                  <span className="font-medium text-gray-700">
                    <span className="font-bold mr-2">{opt.key}.</span>
                    {opt.value}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      ))}

      {/* 🔹 SUBMIT */}
      <div className="sticky bottom-0 bg-white py-4">
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-lg text-lg font-semibold shadow-md transition"
          >
            Submit Exam ✅
          </button>
        </div>
      </div>

    </div>
  </div>
);
}

export default Exam;