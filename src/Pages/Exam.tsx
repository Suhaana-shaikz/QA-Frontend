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












// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // ✅ TYPES
// type Question = {
//   id: number;
//   question: string;
//   option1: string;
//   option2: string;
//   option3: string;
//   option4: string;
// };

// type Answer = {
//   questionId: number;
//   selectedOption: string;
// };

// function Exam() {

//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [answers, setAnswers] = useState<Answer[]>([]);

//   const navigate = useNavigate();

//   // 🔥 LOAD QUESTIONS FROM LOCAL STORAGE
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

//   // 🔥 SUBMIT
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

//       alert("Submitted Successfully ✅");

//       // 🔥 CLEAR DATA
//       localStorage.removeItem("studentData");
//       localStorage.removeItem("questions");

//       navigate("/");

//     } catch (err) {
//       alert("Error submitting exam");
//     }
//   };



// return (
//   <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100">

//     {/* 🔹 HEADER */}
//     <div className="sticky top-0 z-10 bg-white shadow px-4 py-3 flex justify-between items-center">
//       <h2 className="text-lg md:text-xl font-bold text-blue-700">
//         📝 Online Exam
//       </h2>

//       <span className="text-sm text-gray-600">
//         Total Questions: {questions.length}
//       </span>
//     </div>

//     {/* 🔹 MAIN */}
//     <div className="max-w-5xl mx-auto p-4 md:p-6">

//       {/* 🔹 PROGRESS */}
//       <div className="mb-6">
//         <p className="text-sm text-gray-600 mb-2">
//           Answered {answers.length} of {questions.length}
//         </p>

//         <div className="w-full bg-gray-200 h-2 rounded-full">
//           <div
//             className="bg-blue-600 h-2 rounded-full transition-all"
//             style={{
//               width: `${(answers.length / questions.length) * 100}%`
//             }}
//           ></div>
//         </div>
//       </div>

//       {/* 🔹 QUESTIONS */}
//       {questions.map((q, index) => (
//         <div
//           key={q.id}
//           className="bg-white rounded-xl shadow-md p-5 mb-6 hover:shadow-lg transition"
//         >
//           {/* QUESTION */}
//           <div className="flex justify-between items-center mb-4">
//             <p className="font-semibold text-lg text-gray-800">
//               Q{index + 1}. {q.question}
//             </p>

//             <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
//               #{index + 1}
//             </span>
//           </div>

//           {/* OPTIONS */}
//           <div className="grid gap-3">

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
//                     ${isSelected
//                       ? "bg-blue-100 border-blue-500"
//                       : "hover:bg-gray-50"}
//                   `}
//                 >
//                   <input
//                     type="radio"
//                     name={q.id.toString()}
//                     checked={!!isSelected}
//                     onChange={() => handleSelect(q.id, opt.key)}
//                     className="accent-blue-600"
//                   />

//                   <span className="font-medium text-gray-700">
//                     <span className="font-bold mr-2">{opt.key}.</span>
//                     {opt.value}
//                   </span>
//                 </label>
//               );
//             })}
//           </div>
//         </div>
//       ))}

//       {/* 🔹 SUBMIT */}
//       <div className="sticky bottom-0 bg-white py-4">
//         <div className="text-center">
//           <button
//             onClick={handleSubmit}
//             className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-lg text-lg font-semibold shadow-md transition"
//           >
//             Submit Exam ✅
//           </button>
//         </div>
//       </div>

//     </div>
//   </div>
// );
// }

// export default Exam;








import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// ✅ ADD THIS
const STUDENT_API = "https://examsystem-3.onrender.com";

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

  useEffect(() => {
    const saved = localStorage.getItem("questions");

    if (!saved) {
      alert("Session expired");
      navigate("/student");
      return;
    }

    setQuestions(JSON.parse(saved));
  }, []);

  const handleSelect = (qId: number, option: string) => {
    setAnswers(prev => [
      ...prev.filter(a => a.questionId !== qId),
      { questionId: qId, selectedOption: option }
    ]);
  };

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
      // ✅ FIXED URL
      await axios.post(`${STUDENT_API}/student/submit`, {
        ...studentData,
        answers
      });

      alert("Submitted Successfully ✅");

      localStorage.removeItem("studentData");
      localStorage.removeItem("questions");

      navigate("/");

    } catch (err) {
      alert("Error submitting exam");
    }
  };

  return (
  <div className="min-h-screen bg-[#0f172a] relative overflow-hidden">

    {/* BACKGROUND EFFECTS */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/20 blur-[120px] rounded-full"></div>

    {/* TOP BAR */}
    <div className="
      sticky top-0 z-50
      backdrop-blur-xl
      bg-white/10
      border-b border-white/10
    ">

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-black text-white">
            📝 Online Examination
          </h1>

          <p className="text-slate-300 text-sm mt-1">
            Complete all questions carefully
          </p>
        </div>

        <div className="
          bg-white/10
          border border-white/10
          px-5 py-3
          rounded-2xl
          text-white
          shadow-lg
        ">
          <p className="text-sm text-slate-300">
            Total Questions
          </p>

          <h2 className="text-2xl font-bold">
            {questions.length}
          </h2>
        </div>

      </div>
    </div>

    {/* QUESTIONS */}
    <div className="max-w-5xl mx-auto px-4 py-10 relative z-10">

      {questions.map((q, index) => (

        <div
          key={q.id}
          className="
            mb-8
            bg-white/10
            backdrop-blur-xl
            border border-white/10
            rounded-[28px]
            shadow-2xl
            overflow-hidden
          "
        >

          {/* QUESTION HEADER */}
          <div className="
            bg-gradient-to-r from-cyan-500/20 to-blue-600/20
            border-b border-white/10
            px-6 py-5
          ">

            <div className="flex items-center gap-4">

              <div className="
                w-12 h-12
                rounded-2xl
                bg-gradient-to-br from-cyan-500 to-blue-600
                flex items-center justify-center
                text-white
                font-black
                shadow-lg
              ">
                {index + 1}
              </div>

              <div>
                <p className="text-sm text-cyan-200 font-semibold">
                  QUESTION {index + 1}
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-1">
                  {q.question}
                </h2>
              </div>

            </div>
          </div>

          {/* OPTIONS */}
          <div className="p-6 grid gap-4">

            {[
              { key: "A", value: q.option1 },
              { key: "B", value: q.option2 },
              { key: "C", value: q.option3 },
              { key: "D", value: q.option4 }
            ].map(opt => {

              const isSelected = answers.find(
                a =>
                  a.questionId === q.id &&
                  a.selectedOption === opt.key
              );

              return (

                <label
                  key={opt.key}
                  className={`
                    group cursor-pointer
                    border rounded-2xl
                    p-5
                    transition-all duration-300
                    flex items-center gap-4

                    ${isSelected
                      ? "bg-cyan-500 border-cyan-400 shadow-xl scale-[1.01]"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-400"
                    }
                  `}
                >

                  <input
                    type="radio"
                    name={q.id.toString()}
                    checked={!!isSelected}
                    onChange={() => handleSelect(q.id, opt.key)}
                    className="hidden"
                  />

                  {/* OPTION LETTER */}
                  <div className={`
                    min-w-[50px] h-[50px]
                    rounded-2xl
                    flex items-center justify-center
                    font-black text-lg
                    transition-all

                    ${isSelected
                      ? "bg-white text-cyan-600"
                      : "bg-white/10 text-white group-hover:bg-cyan-500"
                    }
                  `}>
                    {opt.key}
                  </div>

                  {/* OPTION TEXT */}
                  <div className="flex-1">

                    <p className={`
                      text-lg font-semibold transition-all

                      ${isSelected
                        ? "text-white"
                        : "text-slate-200"
                      }
                    `}>
                      {opt.value}
                    </p>

                  </div>

                  {/* SELECTED ICON */}
                  {isSelected && (
                    <div className="
                      w-6 h-6 rounded-full
                      bg-white
                      flex items-center justify-center
                    ">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    </div>
                  )}

                </label>
              );
            })}

          </div>

        </div>
      ))}

      {/* SUBMIT BUTTON */}
      <div className="text-center mt-12">

        <button
          onClick={handleSubmit}
          className="
            relative overflow-hidden
            bg-gradient-to-r from-emerald-500 to-green-600
            hover:from-emerald-600 hover:to-green-700
            text-white
            px-12 py-5
            rounded-2xl
            text-xl
            font-bold
            shadow-2xl
            hover:scale-[1.03]
            transition-all duration-300
          "
        >
          Submit Examination 🚀
        </button>

        <p className="text-slate-400 text-sm mt-4">
          Ensure all answers are selected before submitting.
        </p>

      </div>

    </div>
  </div>
);
}

export default Exam;









































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